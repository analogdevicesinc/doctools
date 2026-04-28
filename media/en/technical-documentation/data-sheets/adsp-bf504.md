<!-- lastmod 2025-09-05 -->
<!-- image -->

## FEATURES

Up to 400 MHz high performance Blackfin processor

Two 16-bit MACs, two 40-bit ALUs, four 8-bit video ALUs, 40-bit shifter

RISC-like register and instruction model for ease of programming and compiler-friendly support

Advanced debug, trace, and performance monitoring

Accepts a range of supply voltages for internal and I/O operations. See

Off-chip voltage regulator interface

88-lead (12 mm × 12 mm) LFCSP package

## MEMORY

68K bytes of L1 SRAM (processor core-accessible) memory (See Table 1 for L1 and L3 memory size details)

External (interface-accessible) memory controller with glueless support for boot ROM

Flexible booting options from SPI memory or from host devices including SPI, PPI, and UART

Memory management unit providing memory protection

## PERIPHERALS

Two 32-bit up/down counters with rotary support

Eight 32-bit timers/counters with PWM support

Two 3-phase 16-bit center-based PWM units

2 dual-channel, full-duplex synchronous serial ports (SPORTs), supporting eight stereo I 2 S channels

2 serial peripheral interface (SPI) compatible ports 2 UARTs with IrDA support

Parallel peripheral interface (PPI), supporting ITU-R 656 video data formats

Removable storage interface (RSI) controller for MMC, SD, SDIO, and CE-ATA

ADC controller module (ACM), providing a glueless interface between Blackfin processor and external ADC

Controller Area Network (CAN) controller

2-wire interface (TWI) controller

12 peripheral DMAs

2 memory-to-memory DMA channels

Event handler with 52 interrupt inputs

35 general-purpose I/Os (GPIOs), with programmable hysteresis

Debug/JTAG interface

On-chip PLL capable of frequency multiplication

Figure 1. Processor Block Diagram

<!-- image -->

Blackfin and the Blackfin logo are registered trademarks of Analog Devices, Inc.

## Document Feedback

Information  furnished  by  Analog  Devices  is  believed  to  be  accurate  and  reliable. However,  no  responsibility  is  assumed  by  Analog  Devices  for  its  use,  nor  for  any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## Blackfin Embedded Processor

ADSP-BF504

## ADSP-BF504

## TABLE OF CONTENTS

| Features . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   | . 1   | Dynamic Power Management . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                 | 13    |
|--------------------------------------------------------------------------------------------------------------------------------------------|-------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|
| Memory . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     | 1     | ADSP-BF504 Voltage Regulation . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                    | 14    |
| Peripherals . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      | 1     | Clock Signals . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                | 14    |
| Table of Contents . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                | 2     | Booting Modes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                      | 16    |
| Revision History . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .               | 2     | Instruction Set Description . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                      | 16    |
| General Description . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                      | 3     | Development Tools . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                            | 17    |
| Portable Low-Power Architecture . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                  | 3     | ACMInterface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                     | 18    |
| System Integration . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                         | 3     | Additional Information . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                   | 19    |
| Processor Peripherals . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                            | 3     | Related Signal Chains . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                              | 19    |
| Blackfin Processor Core . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                | 3     | Signal Descriptions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                    | 20    |
| Memory Architecture . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                | 5     | Specifications . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                           | 22    |
| DMAControllers . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                         | 9     | Operating Conditions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                               | 22    |
| Watchdog Timer . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                         | 9     | Electrical Characteristics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                 | 24    |
| Timers . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .       | 9     | Processor-Absolute Maximum Ratings . . . . . . . . . . . . . . . . . . .                                                                                                                 | 26    |
| Up/Down Counters and Thumbwheel Interfaces . . . . . . . . . .                                                                             | 9     | ESD Sensitivity . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                    | 26    |
| 3-Phase PWMUnits . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                 | . 9   | Processor-Timing Specifications . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                    | 27    |
| Serial Ports . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .               | 10    | Processor-Output Drive Currents . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                      | 44    |
| Serial Peripheral Interface (SPI) Ports . . . . . . . . . . . . . . . . . . . . . .                                                        | 10    | Processor-Test Conditions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                          | 45    |
| UART Ports (UARTs) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                     | 11    | Processor-Environmental Conditions . . . . . . . . . . . . . . . . . . . . .                                                                                                             | 47    |
| Parallel Peripheral Interface (PPI) . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                  | 11    | 88-Lead LFCSP Lead Assignment . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                              | 48    |
| RSI Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                  | 12    | Outline Dimensions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                       | 50    |
| Controller Area Network (CAN) Interface . . . . . . . . . . . . . . . .                                                                    | 12    | Ordering Guide . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                 | 51    |
| TWI Controller Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                       | 12    |                                                                                                                                                                                          |       |
| Ports . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      | 13    |                                                                                                                                                                                          |       |
| REVISION HISTORY                                                                                                                           |       |                                                                                                                                                                                          |       |
| 06/20-Rev. B to Rev.C                                                                                                                      |       | Changes to ADSP-BF504 Voltage Regulation . . . . . . . . . . . . . . . .                                                                                                                 | 14    |
| This Rev C product data sheet removes obsolete models and associated feature descriptions/specifications, including the                    |       | Changes to External Crystal Connections . . . . . . . . . . . . . . . . . . . . . Changes to Booting Modes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 15 16 |
| integrated 32M bit SPI flash memory, the integrated ADC, and the 120-lead package information.                                             |       | Changes to EZ-KIT Lite Evaluation Kits . . . . . . . . . . . . . . . . . . . . . . .                                                                                                     | 17    |
| These changes are reflected in the following sections:                                                                                     |       | Changes to Processor-Signal Descriptions . . . . . . . . . . . . . . . . . .                                                                                                             | 20    |
| Changes to Features . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                    | 1     | Changes to Operating Conditions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                              | 22    |
| Changes to Memory . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                        | 1     | Changes to Phase-Locked Loop Operating Conditions . . . .                                                                                                                                | 23    |
| Changes to Peripherals . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                         | 1     | Changes to Electrical Characteristics . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                              | 24    |
| Changes to Processor Block Diagram . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1                                               |       | Changes to Absolute Maximum Ratings . . . . . . . . . . . . . . . . . . . . . . .                                                                                                        | 26    |
| Changes to Processor Features . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                      | 3     | Changes to Clock and Reset Timing . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                                | 27    |
| Changes to System Integration . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3                                    |       | Changes to 88-Lead LFCSP Lead Assignment . . . . . . . . . . . . . . . .                                                                                                                 | 48    |
| Changes to Memory Architecture . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5                                           |       | Changes to Ordering Guide . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                    | 51    |
| Changes to Internal/External Memory Map . . . . . . . . . . . . . . . . . . . .                                                            | 5     |                                                                                                                                                                                          |       |
| Changes to External (Interface-Accessible) Memory . . . . . . . . . 5                                                                      |       |                                                                                                                                                                                          |       |
| Changes to Power Domains . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                       | 14    |                                                                                                                                                                                          |       |

## GENERAL DESCRIPTION

The ADSP-BF504 processors are members of the Blackfin ® family of products, incorporating the Analog Devices/Intel Micro Signal Architecture (MSA). Blackfin processors combine a dualMAC state-of-the-art signal processing engine, the advantages of a clean, orthogonal RISC-like microprocessor instruction set, and single-instruction, multiple-data (SIMD) multimedia capabilities into a single instruction-set architecture.

The ADSP-BF504 processors are completely code compatible with other Blackfin processors. ADSP-BF504 processors offer performance up to 400 MHz and reduced static power consumption. The peripherals featured are shown in Table 1.

Table 1. Processor Features

| Feature                           | ADSP-BF504                        |
|-----------------------------------|-----------------------------------|
| Up/Down/Rotary Counters           | 2                                 |
| Timer/Counters withPWM            | 8                                 |
| 3-Phase PWMUnits                  | 2                                 |
| SPORTs                            | 2                                 |
| SPIs                              | 2                                 |
| UARTs                             | 2                                 |
| Parallel Peripheral Interface     | 1                                 |
| Removable Storage Interface       | 1                                 |
| CAN                               | 1                                 |
| TWI                               | 1                                 |
| ADC Control Module (ACM)          | 1                                 |
| GPIOs                             | 35                                |
| L1 Instruction SRAM               | 16K                               |
| (bytes) L1 Instruction SRAM/Cache | 16K                               |
| L1 Data SRAM                      | 16K                               |
| Memory L1 Data SRAM/Cache         | 16K                               |
| L1 Scratchpad                     | 4K                                |
| L3 BootROM                        | 4K                                |
| Maximum Speed Grade 1             | 400MHz                            |
| Maximum System Clock Speed 100MHz | Maximum System Clock Speed 100MHz |
| Package Options 88-Lead LFCSP     | Package Options 88-Lead LFCSP     |

1 For valid clock combinations, see Table 13, Table 14, Table 15, and Table 22.

By integrating a rich set of industry-leading system peripherals and memory, Blackfin processors are the platform of choice for next-generation applications that require RISC-like programmability, multimedia support, and leading-edge signal processing in one integrated package.

## PORTABLE LOW-POWER ARCHITECTURE

Blackfin processors provide world-class power management and performance. They are produced with a low power and low voltage design methodology and feature on-chip dynamic power management, which provides the ability to vary both the voltage and frequency of operation to significantly lower overall power consumption. This capability can result in a substantial reduction in power consumption, compared with just varying the frequency of operation. This allows longer battery life for portable appliances.

## SYSTEM INTEGRATION

The ADSP-BF504 processors are highly integrated system-on-achip solutions for the next generation of embedded industrial, instrumentation, and power/motion control applications. By combining industry-standard interfaces with a high performance signal processing core, cost-effective applications can be developed quickly, without the need for costly external components. The system peripherals include a watchdog timer; two 32-bit up/down counters with rotary support; eight 32-bit timers/counters with PWM support; six pairs of 3-phase 16-bit center-based PWM units; two dual-channel, full-duplex synchronous serial ports (SPORTs); two serial peripheral interface (SPI) compatible ports; two UARTs with IrDA ® support; a parallel peripheral interface (PPI); a removable storage interface (RSI) controller; an ACM controller; a controller area network (CAN) controller; and a 2-wire interface (TWI) controller.

## PROCESSOR PERIPHERALS

The ADSP-BF504 processors contain a rich set of peripherals connected to the core via several high-bandwidth buses, providing flexibility in system configuration as well as excellent overall system performance (see the block diagram on Page 1). These Blackfin processors contain high-speed serial and parallel ports, an interrupt controller for flexible management of interrupts from the on-chip peripherals or external sources, and power management control functions to tailor the performance and power characteristics of the processor and system to many application scenarios.

The SPORT, SPI, UART, PPI, and RSI peripherals are supported by a flexible DMA structure. There are also separate memory DMA channels dedicated to data transfers between the processor's various memory spaces, including the boot ROM. Multiple on-chip buses running at up to 100 MHz provide enough bandwidth to keep the processor core running along with activity on all of the on-chip and external peripherals.

The ADSP-BF504 processors include an interface to an off-chip voltage regulator in support of the processor's dynamic power management capability.

## BLACKFIN PROCESSOR CORE

As shown in Figure 2, the Blackfin processor core contains two 16-bit multipliers, two 40-bit accumulators, two 40-bit ALUs, four video ALUs, and a 40-bit shifter. The computation units process 8-, 16-, or 32-bit data from the register file.

The compute register file contains eight 32-bit registers. When performing compute operations on 16-bit operand data, the register file operates as 16 independent 16-bit registers. All operands for compute operations come from the multiported register file and instruction constant fields.

## ADSP-BF504

Each MAC can perform a 16-bit by 16-bit multiply in each cycle, accumulating the results into the 40-bit accumulators. Signed and unsigned formats, rounding, and saturation are supported.

The ALUs perform a traditional set of arithmetic and logical operations on 16-bit or 32-bit data. In addition, many special instructions are included to accelerate various signal processing tasks. These include bit operations such as field extract and population count, modulo 2 32 multiply, divide primitives, saturation and rounding, and sign/exponent detection. The set of video instructions include byte alignment and packing operations, 16-bit and 8-bit adds with clipping, 8-bit average operations, and 8-bit subtract/absolute value/accumulate (SAA) operations. Also provided are the compare/select and vector search instructions.

For certain instructions, two 16-bit ALU operations can be performed simultaneously on register pairs (a 16-bit high half and 16-bit low half of a compute register). If the second ALU is used, quad 16-bit operations are possible.

The 40-bit shifter can perform shifts and rotates and is used to support normalization, field extract, and field deposit instructions.

The program sequencer controls the flow of instruction execution, including instruction alignment and decoding. For program flow control, the sequencer supports PC relative and indirect conditional jumps (with static branch prediction), and subroutine calls. Hardware is provided to support zero-overhead looping. The architecture is fully interlocked, meaning that the programmer need not manage the pipeline when executing instructions with data dependencies.

The address arithmetic unit provides two addresses for simultaneous dual fetches from memory. It contains a multiported register file consisting of four sets of 32-bit index, modify, length, and base registers (for circular buffering), and eight additional 32-bit pointer registers (for C-style indexed stack manipulation).

Figure 2. Blackfin Processor Core

<!-- image -->

Blackfin processors support a modified Harvard architecture in combination with a hierarchical memory structure. Level 1 (L1) memories are those that typically operate at the full processor speed with little or no latency. At the L1 level, the instruction memory holds instructions only. The data memory holds data, and a dedicated scratchpad data memory stores stack and local variable information.

In addition, multiple L1 memory blocks are provided, offering a configurable mix of SRAM and cache. The memory management unit (MMU) provides memory protection for individual tasks that may be operating on the core and can protect system registers from unintended access.

The architecture provides three modes of operation: user mode, supervisor mode, and emulation mode. User mode has restricted access to certain system resources, thus providing a protected software environment, while supervisor mode has unrestricted access to the system and core resources.

The Blackfin processor instruction set has been optimized so that 16-bit opcodes represent the most frequently used instructions, resulting in excellent compiled code density. Complex DSP instructions are encoded into 32-bit opcodes, representing fully featured multifunction instructions. Blackfin processors support a limited multi-issue capability, where a 32-bit instruction can be issued in parallel with two 16-bit instructions, allowing the programmer to use many of the core resources in a single instruction cycle.

The Blackfin processor assembly language uses an algebraic syntax for ease of coding and readability. The architecture has been optimized for use in conjunction with the C/C++ compiler, resulting in fast and efficient software implementations.

## MEMORY ARCHITECTURE

The Blackfin processor views memory as a single unified 4G byte address space, using 32-bit addresses. All resources, including internal memory, external memory, and I/O control registers, occupy separate sections of this common address space. The memory portions of this address space are arranged in a hierarchical structure to provide a good cost/performance balance of some very fast, low latency core-accessible memory as cache or SRAM and to provide larger, lower cost and performance interface-accessible memory systems. See Figure 3.

The core-accessible L1 memory system is the highest performance memory available to the Blackfin processor. The interface-accessible memory system, accessed through the external bus interface unit (EBIU), provides access to the boot ROM.

The memory DMA controller provides high bandwidth data movement capability. It can perform block transfers of code or data between the internal memory and the external memory spaces.

## Internal (Core-Accessible) Memory

The processor has three blocks of core-accessible memory, providing high-bandwidth access to the core.

The first block is the L1 instruction memory, consisting of 32K bytes SRAM, of which 16K bytes can be configured as a four-way set-associative cache. This memory is accessed at full processor speed.

The second core-accessible memory block is the L1 data memory, consisting of 32K bytes of SRAM, of which 16K bytes may be configured as cache. This memory block is accessed at full processor speed.

The third memory block is 4K bytes of scratchpad SRAM, which runs at the same speed as the L1 memories, but this memory is only accessible as data SRAM and cannot be configured as cache memory.

Figure 3. Internal/External Memory Map

<!-- image -->

## External (Interface-Accessible) Memory

External memory is accessed via the EBIU memory port. This 16-bit interface provides a glueless connection to the boot ROM.

## I/O Memory Space

The processor does not define a separate I/O space. All resources are mapped through the flat 32-bit address space. On-chip I/O devices have their control registers mapped into memory-mapped registers (MMRs) at addresses near the top of the 4G byte address space. These are separated into two smaller blocks. One contains the control MMRs for all core functions, and the other contains the registers needed for setup and control of the on-chip peripherals outside of the core. The MMRs are accessible only in supervisor and emulation modes and appear as reserved space to on-chip peripherals.

## ADSP-BF504

## Booting

The processor contains a small on-chip boot kernel, which configures the appropriate peripheral for booting. If the processor is configured to boot from boot ROM memory space, the processor starts executing from the on-chip boot ROM. For more information, see Booting Modes.

## Event Handling

The event controller on the processor handles all asynchronous and synchronous events to the processor. The processor provides event handling that supports both nesting and prioritization. Nesting allows multiple event service routines to be active simultaneously. Prioritization ensures that servicing of a higher priority event takes precedence over servicing of a lower priority event. The controller provides support for five different types of events:

- Emulation-An emulation event causes the processor to enter emulation mode, allowing command and control of the processor via the JTAG interface.
- Reset-This event resets the processor.
- Nonmaskable Interrupt (NMI)-The NMI event can be generated either by the software watchdog timer, by the NMI input signal to the processor, or by software. The NMI event is frequently used as a power-down indicator to initiate an orderly shutdown of the system.
- Exceptions-Events that occur synchronously to program flow (in other words, the exception is taken before the instruction is allowed to complete). Conditions such as data alignment violations and undefined instructions cause exceptions.
- Interrupts-Events that occur asynchronously to program flow. They are caused by input signals, timers, and other peripherals, as well as by an explicit software instruction.

Each event type has an associated register to hold the return address and an associated return-from-event instruction. When an event is triggered, an interrupt service routine (ISR) must save the state of the processor to the supervisor stack.

The processor event controller consists of two stages: the core event controller (CEC) and the system interrupt controller (SIC). The core event controller works with the system interrupt controller to prioritize and control all system events. Conceptually, interrupts from the peripherals enter into the SIC and are then routed directly into the general-purpose interrupts of the CEC.

## Core Event Controller (CEC)

The CEC supports nine general-purpose interrupts (IVG15-7), in addition to the dedicated interrupt and exception events. Of these general-purpose interrupts, the two lowest-priority interrupts (IVG15-14) are recommended to be reserved for software interrupt handlers, leaving seven prioritized interrupt inputs to support the peripherals of the processor. Table 2 describes the inputs to the CEC, identifies their names in the event vector table (EVT), and lists their priorities.

## Table 2. Core Event Controller (CEC)

|   Priority (0 is Highest) | Event Class                  | EVT Entry   |
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

The system interrupt controller provides the mapping and routing of events from the many peripheral interrupt sources to the prioritized general-purpose interrupt inputs of the CEC. Although the processor provides a default mapping, the user can alter the mappings and priorities of interrupt events by writing the appropriate values into the interrupt assignment registers (SIC\_IARx). Table 3 describes the inputs into the SIC and the default mappings into the CEC.

Table 3. System Interrupt Controller (SIC)

| Peripheral Interrupt Source   | General-Purpose Interrupt (at Reset)   | Peripheral Interrupt ID   | Default Core Interrupt ID   | SIC Registers   | SIC Registers      |
|-------------------------------|----------------------------------------|---------------------------|-----------------------------|-----------------|--------------------|
| PLL Wakeup Interrupt          | IVG7                                   | 0                         | 0                           | IAR0            | IMASK0, ISR0, IWR0 |
| DMAError (generic)            | IVG7                                   | 1                         | 0                           | IAR0            | IMASK0, ISR0, IWR0 |
| PPI Status                    | IVG7                                   | 2                         | 0                           | IAR0            | IMASK0, ISR0, IWR0 |
| SPORT0 Status                 | IVG7                                   | 3                         | 0                           | IAR0            | IMASK0, ISR0, IWR0 |
| SPORT1 Status                 | IVG7                                   | 4                         | 0                           | IAR0            | IMASK0, ISR0, IWR0 |
| UART0 Status                  | IVG7                                   | 5                         | 0                           | IAR0            | IMASK0, ISR0, IWR0 |
| UART1 Status                  | IVG7                                   | 6                         | 0                           | IAR0            | IMASK0, ISR0, IWR0 |
| SPI0 Status                   | IVG7                                   | 7                         | 0                           | IAR0            | IMASK0, ISR0, IWR0 |
| SPI1 Status                   | IVG7                                   | 8                         | 0                           | IAR1            | IMASK0, ISR0, IWR0 |
| CAN Status                    | IVG7                                   | 9                         | 0                           | IAR1            | IMASK0, ISR0, IWR0 |
| RSI Mask 0 Interrupt          | IVG7                                   | 10                        | 0                           | IAR1            | IMASK0, ISR0, IWR0 |
| Reserved                      | -                                      | 11                        | -                           | IAR1            | IMASK0, ISR0, IWR0 |
| CNT0 Interrupt                | IVG8                                   | 12                        | 1                           | IAR1            | IMASK0, ISR0, IWR0 |
| CNT1 Interrupt                | IVG8                                   | 13                        | 1                           | IAR1            | IMASK0, ISR0, IWR0 |
| DMAChannel 0 (PPI Rx/Tx)      | IVG9                                   | 14                        | 2                           | IAR1            | IMASK0, ISR0, IWR0 |
| DMAChannel 1 (RSI Rx/Tx)      | IVG9                                   | 15                        | 2                           | IAR1            | IMASK0, ISR0, IWR0 |
| DMAChannel 2 (SPORT0 Rx)      | IVG9                                   | 16                        | 2                           | IAR2            | IMASK0, ISR0, IWR0 |
| DMAChannel 3 (SPORT0 Tx)      | IVG9                                   | 17                        | 2                           | IAR2            | IMASK0, ISR0, IWR0 |
| DMAChannel 4 (SPORT1 Rx)      | IVG9                                   | 18                        | 2                           | IAR2            | IMASK0, ISR0, IWR0 |
| DMAChannel 5 (SPORT1 Tx)      | IVG9                                   | 19                        | 2                           | IAR2            | IMASK0, ISR0, IWR0 |
| DMAChannel 6 (SPI0 Rx/Tx)     | IVG10                                  | 20                        | 3                           | IAR2            | IMASK0, ISR0, IWR0 |
| DMAChannel 7 (SPI1 Rx/Tx)     | IVG10                                  | 21                        | 3                           | IAR2            | IMASK0, ISR0, IWR0 |
| DMAChannel 8 (UART0 Rx)       | IVG10                                  | 22                        | 3                           | IAR2            | IMASK0, ISR0, IWR0 |
| DMAChannel 9 (UART0 Tx)       | IVG10                                  | 23                        | 3                           | IAR2            | IMASK0, ISR0, IWR0 |
| DMAChannel 10 (UART1 Rx)      | IVG10                                  | 24                        | 3 3                         | IAR3 IAR3       | IMASK0, ISR0, IWR0 |
| DMAChannel 11 (UART1 Tx)      | IVG10                                  | 25                        |                             |                 | IMASK0, ISR0, IWR0 |
| CAN Receive                   | IVG11                                  | 26                        | 4                           | IAR3            | IMASK0, ISR0, IWR0 |
| CAN Transmit                  | IVG11                                  | 27                        | 4                           | IAR3            | IMASK0, ISR0, IWR0 |
| TWI                           | IVG11                                  | 28                        | 4                           | IAR3            | IMASK0, ISR0, IWR0 |
| Port F Interrupt A            | IVG11                                  | 29                        | 4                           | IAR3            | IMASK0, ISR0, IWR0 |
| Port F Interrupt B            | IVG11                                  | 30                        | 4                           | IAR3            | IMASK0, ISR0, IWR0 |
| Reserved                      | -                                      | 31                        | -                           | IAR3            | IMASK0, ISR0, IWR0 |
| Timer 0                       | IVG12                                  | 32                        | 5                           | IAR4            | IMASK1, ISR1, IWR1 |
| Timer 1                       | IVG12                                  | 33                        | 5                           | IAR4            | IMASK1, ISR1, IWR1 |
| Timer 2                       | IVG12                                  | 34                        | 5                           | IAR4            | IMASK1, ISR1, IWR1 |
| Timer 3                       |                                        |                           |                             |                 | IMASK1, ISR1, IWR1 |
| Timer 4                       | IVG12 IVG12                            | 35 36                     | 5                           | IAR4 IAR4       | IMASK1, ISR1, IWR1 |
| Timer 5                       | IVG12                                  | 37                        | 5 5                         | IAR4            | IMASK1, ISR1, IWR1 |
| Timer 6                       | IVG12                                  | 38                        | 5                           | IAR4            | IMASK1, ISR1, IWR1 |
|                               |                                        |                           | 5                           |                 |                    |
| Port GInterrupt A             | IVG12                                  | 40                        |                             | IAR5            | IMASK1, ISR1, IWR1 |
| Port GInterrupt B             | IVG12                                  | 41                        | 5 6                         | IAR5 IAR5       | IMASK1, ISR1, IWR1 |
| MDMAStream 0                  | IVG13                                  | 42                        |                             |                 | IMASK1, ISR1, IWR1 |

## ADSP-BF504

## ADSP-BF504

Table 3. System Interrupt Controller (SIC) (Continued)

| Peripheral Interrupt Source   | General-Purpose Interrupt (at Reset)   | Peripheral Interrupt ID   | Default Core Interrupt ID   | SIC Registers   | SIC Registers      |
|-------------------------------|----------------------------------------|---------------------------|-----------------------------|-----------------|--------------------|
| MDMAStream 1                  | IVG13                                  | 43                        | 6                           | IAR5            | IMASK1, ISR1, IWR1 |
| Software Watchdog Timer       | IVG13                                  | 44                        | 6                           | IAR5            | IMASK1, ISR1, IWR1 |
| Port HInterrupt A             | IVG13                                  | 45                        | 6                           | IAR5            | IMASK1, ISR1, IWR1 |
| Port HInterrupt B             | IVG13                                  | 46                        | 6                           | IAR5            | IMASK1, ISR1, IWR1 |
| ACMStatus Interrupt           | IVG7                                   | 47                        | 0                           | IAR5            | IMASK1, ISR1, IWR1 |
| ACMInterrupt                  | IVG10                                  | 48                        | 3                           | IAR6            | IMASK1, ISR1, IWR1 |
| Reserved                      | -                                      | 49                        | -                           | IAR6            | IMASK1, ISR1, IWR1 |
| Reserved                      | -                                      | 50                        | -                           | IAR6            | IMASK1, ISR1, IWR1 |
| PWM0Trip Interrupt            | IVG10                                  | 51                        | 3                           | IAR6            | IMASK1, ISR1, IWR1 |
| PWM0Sync Interrupt            | IVG10                                  | 52                        | 3                           | IAR6            | IMASK1, ISR1, IWR1 |
| PWM1Trip Interrupt            | IVG10                                  | 53                        | 3                           | IAR6            | IMASK1, ISR1, IWR1 |
| PWM1Sync Interrupt            | IVG10                                  | 54                        | 3                           | IAR6            | IMASK1, ISR1, IWR1 |
| RSI Mask 1 Interrupt          | IVG10                                  | 55                        | 3                           | IAR6            | IMASK1, ISR1, IWR1 |
| Reserved                      | -                                      | 56 through 63             | -                           | -               | IMASK1, ISR1, IWR1 |

## Event Control

The processor provides a very flexible mechanism to control the processing of events. In the CEC, three registers are used to coordinate and control events. Each register is 16 bits wide.

- CEC interrupt latch register (ILAT)-Indicates when events have been latched. The appropriate bit is set when the processor has latched the event and is cleared when the event has been accepted into the system. This register is updated automatically by the controller, but it may be written only when its corresponding IMASK bit is cleared.
- CEC interrupt mask register (IMASK)-Controls the masking and unmasking of individual events. When a bit is set in the IMASK register, that event is unmasked and is processed by the CEC when asserted. A cleared bit in the IMASK register masks the event, preventing the processor from servicing the event even though the event may be latched in the ILAT register. This register may be read or written while in supervisor mode. (Note that generalpurpose interrupts can be globally enabled and disabled with the STI and CLI instructions, respectively.)
- CEC interrupt pending register (IPEND)-The IPEND register keeps track of all nested events. A set bit in the IPEND register indicates the event is currently active or nested at some level. This register is updated automatically by the controller but may be read while in supervisor mode.

The SIC allows further control of event processing by providing three pairs of 32-bit interrupt control and status registers. Each register contains a bit, corresponding to each of the peripheral interrupt events shown in Table 3.

- SIC interrupt mask registers (SIC\_IMASKx)-Control the masking and unmasking of each peripheral interrupt event. When a bit is set in these registers, the corresponding peripheral event is unmasked and is forwarded to the CEC

when asserted. A cleared bit in these registers masks the corresponding peripheral event, preventing the event from propagating to the CEC.

- SIC interrupt status registers (SIC\_ISRx)-As multiple peripherals can be mapped to a single event, these registers allow the software to determine which peripheral event source triggered the interrupt. A set bit indicates that the peripheral is asserting the interrupt, and a cleared bit indicates that the peripheral is not asserting the event.
- SIC interrupt wakeup enable registers (SIC\_IWRx)-By enabling the corresponding bit in these registers, a peripheral can be configured to wake up the processor should the core be idled or in sleep mode when the event is generated. For more information, see Dynamic Power Management.

Because multiple interrupt sources can map to a single generalpurpose interrupt, multiple pulse assertions can occur simultaneously, before or during interrupt processing for an interrupt event already detected on this interrupt input. The IPEND register contents are monitored by the SIC as the interrupt acknowledgment.

The appropriate ILAT register bit is set when an interrupt rising edge is detected (detection requires two core clock cycles). The bit is cleared when the respective IPEND register bit is set. The IPEND bit indicates that the event has entered into the processor pipeline. At this point the CEC recognizes and queues the next rising edge event on the corresponding event input. The minimum latency from the rising edge transition of the generalpurpose interrupt to the IPEND output asserted is three core clock cycles; however, the latency can be much higher, depending on the activity within and the state of the processor.

## DMA CONTROLLERS

The processor has multiple, independent DMA channels that support automated data transfers with minimal overhead for the processor core. DMA transfers can occur between the processor's internal memories and any of its DMA-capable peripherals. Additionally, DMA transfers can be accomplished between any of the DMA-capable peripherals and external devices connected to the external memory interface. DMAcapable peripherals include the SPORTs, SPI ports, UARTs, RSI, and PPI. Each individual DMA-capable peripheral has at least one dedicated DMA channel.

The processor DMA controller supports both one-dimensional (1-D) and two-dimensional (2-D) DMA transfers. DMA transfer initialization can be implemented from registers or from sets of parameters called descriptor blocks.

The 2-D DMA capability supports arbitrary row and column sizes up to 64K elements by 64K elements, and arbitrary row and column step sizes up to ±32K elements. Furthermore, the column step size can be less than the row step size, allowing implementation of interleaved data streams. This feature is especially useful in video applications where data can be deinterleaved on the fly.

Examples of DMA types supported by the processor DMA controller include:

- A single, linear buffer that stops upon completion
- A circular, auto-refreshing buffer that interrupts on each full or fractionally full buffer
- 1-D or 2-D DMA using a linked list of descriptors
- 2-D DMA using an array of descriptors, specifying only the base DMA address within a common page

In addition to the dedicated peripheral DMA channels, there are two memory DMA channels, which are provided for transfers between the various memories of the processor system with minimal processor intervention. Memory DMA transfers can be controlled by a very flexible descriptor-based methodology or by a standard register-based autobuffer mechanism.

## WATCHDOG TIMER

The processor includes a 32-bit timer that can be used to implement a software watchdog function. A software watchdog can improve system availability by forcing the processor to a known state through generation of a core and system reset, nonmaskable interrupt (NMI), or general-purpose interrupt, if the timer expires before being reset by software. The programmer initializes the count value of the timer, enables the appropriate interrupt, then enables the timer. Thereafter, the software must reload the counter before it counts to zero from the programmed value. This protects the system from remaining in an unknown state where software, which would normally reset the timer, has stopped running due to an external noise condition or software error.

If configured to generate a reset, the watchdog timer resets both the core and the processor peripherals. After a reset, software can determine whether the watchdog was the source of the hardware reset by interrogating a status bit in the watchdog timer control register.

The timer is clocked by the system clock (SCLK) at a maximum frequency of fSCLK .

## TIMERS

There are nine general-purpose programmable timer units in the processors. Eight timers have an external pin that can be configured either as a pulse width modulator (PWM) or timer output, as an input to clock the timer, or as a mechanism for measuring pulse widths and periods of external events. These timers can be synchronized to an external clock input to the several other associated PF pins, to an external clock input to the PPI\_CLK input pin, or to the internal SCLK.

The timer units can be used in conjunction with the two UARTs to measure the width of the pulses in the data stream to provide a software auto-baud detect function for the respective serial channels.

The timers can generate interrupts to the processor core providing periodic events for synchronization, either to the system clock or to a count of external signals.

In addition to the eight general-purpose programmable timers, a ninth timer is also provided. This extra timer is clocked by the internal processor clock and is typically used as a system tick clock for generation of operating system periodic interrupts.

## UP/DOWN COUNTERS AND THUMBWHEELINTERFACES

Two 32-bit up/down counters are provided that can sense 2-bit quadrature or binary codes as typically emitted by industrial drives or manual thumbwheels. The counters can also operate in general-purpose up/down count modes. Then, count direction is either controlled by a level-sensitive input pin or by two edge detectors.

A third counter input can provide flexible zero marker support and can alternatively be used to input the push-button signal of thumb wheels. All three pins have a programmable debouncing circuit.

Internal signals forwarded to each timer unit enable these timers to measure the intervals between count events. Boundary registers enable auto-zero operation or simple system warning by interrupts when programmable count values are exceeded.

## 3-PHASE PWM UNITS

The two/dual 3-phase PWM generation units each feature:

- 16-bit center-based PWM generation unit
- Programmable PWM pulse width
- Single/double update modes
- Programmable dead time and switching frequency
- Twos-complement implementation which permits smooth transition to full ON and full OFF states

## ADSP-BF504

- Possibility to synchronize the PWM generation to either externally-generated or internally-generated synchronization pulses
- Special provisions for BDCM operation (crossover and output enable functions)
- Wide variety of special switched reluctance (SR) operating modes
- Output polarity and clock gating control
- Dedicated asynchronous PWM shutdown signal

Each PWM block integrates a flexible and programmable 3-phase PWM waveform generator that can be programmed to generate the required switching patterns to drive a 3-phase voltage source inverter for ac induction motor (ACIM) or permanent magnet synchronous motor (PMSM) control. In addition, the PWM block contains special functions that considerably simplify the generation of the required PWM switching patterns for control of the electronically commutated motor (ECM) or brushless dc motor (BDCM). Software can enable a special mode for switched reluctance motors (SRM).

The six PWM output signals (per PWM unit) consist of three high-side drive signals (PWMx\_AH, PWMx\_BH, and PWMx-\_CH) and three low-side drive signals (PWMx\_AL, PWMx\_BL, and PWMx\_CL). The polarity of the generated PWM signal can be set with software, so that either active HI or active LO PWM patterns can be produced.

The switching frequency of the generated PWM pattern is programmable using the 16-bit PWM\_TM register. The PWM generator can operate in single update mode or double update mode. In single update mode, the duty cycle values are programmable only once per PWM period, so that the resultant PWM patterns are symmetrical about the midpoint of the PWM period. In the double update mode, a second updating of the PWM registers is implemented at the midpoint of the PWM period. In this mode, it is possible to produce asymmetrical PWM patterns that produce lower harmonic distortion in 3-phase PWM inverters.

Pulses synchronous to the switching frequency can be generated internally and output on the PWMx\_SYNC pin. The PWM unit can also accept externally generated synchronization pulses through PWMx\_SYNC.

Each PWM unit features a dedicated asynchronous shutdown pin, PWMx\_TRIP, which (when brought low) instantaneously places all six PWM outputs in the OFF state.

## SERIAL PORTS

The processors incorporate two dual-channel synchronous serial ports (SPORT0 and SPORT1) for serial and multiprocessor communications. The SPORTs support the following features:

- I 2 S capable operation.
- Bidirectional operation-Each SPORT has two sets of independent transmit and receive pins, enabling eight channels of I 2 S stereo audio.
- Buffered (8-deep) transmit and receive ports-Each port has a data register for transferring data words to and from other processor components and shift registers for shifting data in and out of the data registers.
- Clocking-Each transmit and receive port can either use an external serial clock or generate its own, in frequencies ranging from (fSCLK/131,070) Hz to (fSCLK/2) Hz.
- Word length-Each SPORT supports serial data words from 3 to 32 bits in length, transferred most significant bit first or least significant bit first.
- Framing-Each transmit and receive port can run with or without frame sync signals for each data word. Frame sync signals can be generated internally or externally, active high or low, and with either of two pulse widths and early or late frame sync.
- Companding in hardware-Each SPORT can perform A-law or µ-law companding according to ITU recommendation G.711. Companding can be selected on the transmit and/or receive channel of the SPORT without additional latencies.
- DMA operations with single-cycle overhead-Each SPORT can automatically receive and transmit multiple buffers of memory data. The processor can link or chain sequences of DMA transfers between a SPORT and memory.
- Interrupts-Each transmit and receive port generates an interrupt upon completing the transfer of a data word or after transferring an entire data buffer, or buffers, through DMA.
- Multichannel capability-Each SPORT supports 128 channels out of a 1024-channel window and is compatible with the H.100, H.110, MVIP-90, and HMVIP standards.

## SERIAL PERIPHERAL INTERFACE (SPI) PORTS

The ADSP-BF504 processors have two SPI-compatible ports that enable the processor to communicate with multiple SPIcompatible devices.

The SPI interface uses three pins for transferring data: two data pins MOSI (Master Output-Slave Input) and MISO (Master Input-Slave Output) and a clock pin, serial clock (SCK). An SPI chip select input pin (SPIx\_SS) lets other SPI devices select the processor, and three SPI chip select output pins (SPIx\_SEL3-1) let the processor select other SPI devices. The SPI select pins are reconfigured general-purpose I/O pins. Using these pins, the SPI port provides a full-duplex, synchronous serial interface, which supports both master/slave modes and multimaster environments.

The SPI port's baud rate and clock phase/polarities are programmable, and it has an integrated DMA channel, configurable to support transmit or receive data streams. The DMA channel of the SPI can only service unidirectional accesses at any given time.

The SPI port's clock rate is calculated as:

<!-- formula-not-decoded -->

Where the 16-bit SPI\_BAUD register contains a value of 2 to 65,535.

During transfers, the SPI port simultaneously transmits and receives by serially shifting data in and out on its two serial data lines. The serial clock line synchronizes the shifting and sampling of data on the two serial data lines.

## UART PORTS (UARTS)

The ADSP-BF504 Blackfin processors provide two full-duplex universal asynchronous receiver/transmitter (UART) ports. Each UART port provides a simplified UART interface to other peripherals or hosts, enabling full-duplex, DMA-supported, asynchronous transfers of serial data. A UART port includes support for five to eight data bits; one or two stop bits; and none, even, or odd parity. Each UART port supports two modes of operation:

- PIO (programmed I/O). The processor sends or receives data by writing or reading I/O-mapped UART registers. The data is double-buffered on both transmit and receive.
- DMA (direct memory access). The DMA controller transfers both transmit and receive data. This reduces the number and frequency of interrupts required to transfer data to and from memory. Each UART has two dedicated DMA channels, one for transmit and one for receive. These DMA channels have lower default priority than most DMA channels because of their relatively low service rates. Flexible interrupt timing options are available on the transmit side.

Each UART port's baud rate, serial data format, error code generation and status, and interrupts are programmable:

- Supporting bit rates ranging from (fSCLK/1,048,576) to (f SCLK ) bits per second.
- Supporting data formats from 7 to 12 bits per frame.
- Both transmit and receive operations can be configured to generate maskable interrupts to the processor.

The UART port's clock rate is calculated as

<!-- formula-not-decoded -->

Where the 16-bit UART divisor comes from the UARTx\_DLH register (most significant 8 bits) and UARTx\_DLL register (least significant eight bits), and the EDBO is a bit in the UARTx\_GCTL register.

In conjunction with the general-purpose timer functions, autobaud detection is supported.

The UARTs feature a pair of UAx\_RTS (request to send) and UAx\_CTS (clear to send) signals for hardware flow purposes. The transmitter hardware is automatically prevented from sending further data when the UAx\_CTS input is deasserted.

The receiver can automatically deassert its UAx\_RTS output when the enhanced receive FIFO exceeds a certain high-water level. The capabilities of the UARTs are further extended with support for the Infrared Data Association (IrDA®) Serial Infrared Physical Layer Link Specification (SIR) protocol.

## PARALLEL PERIPHERAL INTERFACE (PPI)

The processor provides a parallel peripheral interface (PPI) that can connect directly to parallel A/D and D/A converters, video encoders and decoders, and other general-purpose peripherals. The PPI consists of a dedicated input clock pin, up to three frame synchronization pins, and up to 16 data pins. The input clock supports parallel data rates up to half the system clock rate and the synchronization signals can be configured as either inputs or outputs.

The PPI supports a variety of general-purpose and ITU-R 656 modes of operation. In general-purpose mode, the PPI provides half-duplex, bidirectional data transfer with up to 16 bits of data. Up to three frame synchronization signals are also provided. In ITU-R 656 mode, the PPI provides half-duplex bidirectional transfer of 8- or 10-bit video data. Additionally, on-chip decode of embedded start-of-line (SOL) and start-offield (SOF) preamble packets is supported.

## General-Purpose Mode Descriptions

The general-purpose modes of the PPI are intended to suit a wide variety of data capture and transmission applications. Three distinct submodes are supported:

- Input mode-Frame syncs and data are inputs into the PPI.
- Frame capture mode-Frame syncs are outputs from the PPI, but data are inputs.
- Output mode-Frame syncs and data are outputs from the PPI.

## Input Mode

Input mode is intended for ADC applications, as well as video communication with hardware signaling. In its simplest form, PPI\_FS1 is an external frame sync input that controls when to read data. The PPI\_DELAY MMR allows for a delay (in PPI\_-CLK cycles) between reception of this frame sync and the initiation of data reads. The number of input data samples is user programmable and defined by the contents of the PPI\_COUNT register. The PPI supports 8-bit and 10-bit through 16-bit data, programmable in the PPI\_CONTROL register.

## Frame Capture Mode

Frame capture mode allows the video source(s) to act as a slave (for frame capture for example). The ADSP-BF504 processors control when to read from the video source(s). PPI\_FS1 is an HSYNC output and PPI\_FS2 is a VSYNC output.

## ADSP-BF504

## Output Mode

Output mode is used for transmitting video or other data with up to three output frame syncs. Typically, a single frame sync is appropriate for data converter applications, whereas two or three frame syncs could be used for sending video with hardware signaling.

## ITU-R 656 Mode Descriptions

The ITU-R 656 modes of the PPI are intended to suit a wide variety of video capture, processing, and transmission applications. Three distinct submodes are supported:

- Active video only mode
- Vertical blanking only mode
- Entire field mode

## Active Video Mode

Active video only mode is used when only the active video portion of a field is of interest and not any of the blanking intervals. The PPI does not read in any data between the end of active video (EAV) and start of active video (SAV) preamble symbols, or any data present during the vertical blanking intervals. In this mode, the control byte sequences are not stored to memory; they are filtered by the PPI. After synchronizing to the start of Field 1, the PPI ignores incoming samples until it sees an SAV code. The user specifies the number of active video lines per frame (in PPI\_COUNT register).

## Vertical Blanking Interval Mode

In this mode, the PPI only transfers vertical blanking interval (VBI) data.

## Entire Field Mode

In this mode, the entire incoming bit stream is read in through the PPI. This includes active video, control preamble sequences, and ancillary data that may be embedded in horizontal and vertical blanking intervals. Data transfer starts immediately after synchronization to Field 1. Data is transferred to or from the synchronous channels through eight DMA engines that work autonomously from the processor core.

## RSI INTERFACE

The removable storage interface (RSI) controller acts as the host interface for multimedia cards (MMC), secure digital memory cards (SD), secure digital input/output cards (SDIO), and CEATA hard disk drives. The following list describes the main features of the RSI controller.

- Support for a single MMC, SD memory, SDIO card or CEATA hard disk drive
- Support for 1-bit and 4-bit SD modes
- Support for 1-bit, 4-bit, and 8-bit MMC modes
- Support for 4-bit and 8-bit CE-ATA hard disk drives
- A ten-signal external interface with clock, command, and up to eight data lines
- Card detection using one of the data signals
- Card interface clock generation from SCLK
- SDIO interrupt and read wait features
- CE-ATA command completion signal recognition and disable

## CONTROLLER AREA NETWORK (CAN) INTERFACE

The ADSP-BF504 processors provide a CAN controller that is a communication controller implementing the Controller Area Network (CAN) V2.0B protocol. This protocol is an asynchronous communications protocol used in both industrial and automotive control systems. CAN is well suited for control applications due to its capability to communicate reliably over a network since the protocol incorporates CRC checking, message error tracking, and fault node confinement.

The CAN controller is based on a 32-entry mailbox RAM and supports both the standard and extended identifier (ID) message formats specified in the CAN protocol specification, revision 2.0, part B.

Each mailbox consists of eight 16-bit data words. The data is divided into fields, which includes a message identifier, a time stamp, a byte count, up to 8 bytes of data, and several control bits. Each node monitors the messages being passed on the network. If the identifier in the transmitted message matches an identifier in one of its mailboxes, the module knows that the message was meant for it, passes the data into its appropriate mailbox, and signals the processor of message arrival with an interrupt.

The CAN controller can wake up the processor from sleep mode upon generation of a wake-up event, such that the processor can be maintained in a low-power mode during idle conditions. Additionally, a CAN wake-up event can wake up the on-chip internal voltage regulator from the powered-down hibernate state.

The electrical characteristics of each network connection are very stringent. Therefore, the CAN interface is typically divided into two parts: a controller and a transceiver. This allows a single controller to support different drivers and CAN networks. The ADSP-BF504 CAN module represents the controller part of the interface. This module's network I/O is a single transmit output and a single receive input, which connect to a line transceiver.

The CAN clock is derived from the processor system clock (SCLK) through a programmable divider and therefore does not require an additional crystal.

## TWI CONTROLLER INTERFACE

The processors include a 2-wire interface (TWI) module for providing a simple exchange method of control data between multiple devices. The TWI is compatible with the widely used I 2 C ® bus standard. The TWI module offers the capabilities of simultaneous master and slave operation, support for both 7-bit addressing and multimedia data arbitration. The TWI interface utilizes two pins for transferring clock (SCL) and data (SDA) and supports the protocol at speeds up to 400K bits/sec. The TWI interface pins are compatible with 5 V logic levels.

Additionally, the TWI module is fully compatible with serial camera control bus (SCCB) functionality for easier control of various CMOS camera sensor devices.

## PORTS

Because of the rich set of peripherals, the processor groups the many peripheral signals to three ports-Port F, Port G, and Port H. Most of the associated pins are shared by multiple signals. The ports function as multiplexer controls.

## General-Purpose I/O (GPIO)

The processor has 35 bidirectional, general-purpose I/O (GPIO) pins allocated across three separate GPIO modules-PORTFIO, PORTGIO, and PORTHIO, associated with Port F, Port G, and Port H, respectively. Each GPIO-capable pin shares functionality with other processor peripherals via a multiplexing scheme; however, the GPIO functionality is the default state of the device upon power-up. Neither GPIO output nor input drivers are active by default. Each general-purpose port pin can be individually controlled by manipulation of the port control, status, and interrupt registers:

- GPIO direction control register - Specifies the direction of each individual GPIO pin as input or output.
- GPIO control and status registers - The processor employs a 'write one to modify' mechanism that allows any combination of individual GPIO pins to be modified in a single instruction, without affecting the level of any other GPIO pins. Four control registers are provided. One register is written in order to set pin values, one register is written in order to clear pin values, one register is written in order to toggle pin values, and one register is written in order to specify a pin value. Reading the GPIO status register allows software to interrogate the sense of the pins.
- GPIO interrupt mask registers - The two GPIO interrupt mask registers allow each individual GPIO pin to function as an interrupt to the processor. Similar to the two GPIO control registers that are used to set and clear individual pin values, one GPIO interrupt mask register sets bits to enable interrupt function, and the other GPIO interrupt mask register clears bits to disable interrupt function. GPIO pins defined as inputs can be configured to generate hardware interrupts, while output pins can be triggered by software interrupts.
- GPIO interrupt sensitivity registers - The two GPIO interrupt sensitivity registers specify whether individual pins are level- or edge-sensitive and specify-if edge-sensitivewhether just the rising edge or both the rising and falling edges of the signal are significant. One register selects the type of sensitivity, and one register selects which edges are significant for edge-sensitivity.

## DYNAMIC POWER MANAGEMENT

The processor provides five operating modes, each with a different performance/power profile. In addition, dynamic power management provides the control functions to dynamically alter the processor core supply voltage, further reducing power dissipation. When configured for a 0 volt core supply voltage, the processor enters the hibernate state. Control of clocking to each of the processor peripherals also reduces power consumption. See Table 4 for a summary of the power settings for each mode.

## Full-On Operating Mode-Maximum Performance

In the full-on mode, the PLL is enabled and is not bypassed, providing capability for maximum operational frequency. This is the power-up default execution state in which maximum performance can be achieved. The processor core and all enabled peripherals run at full speed.

## Active Operating Mode-Moderate Dynamic Power Savings

In the active mode, the PLL is enabled but bypassed. Because the PLL is bypassed, the processor's core clock (CCLK) and system clock (SCLK) run at the input clock (CLKIN) frequency. DMA access is available to appropriately configured L1 memories.

In the active mode, it is possible to disable the control input to the PLL by setting the PLL\_OFF bit in the PLL control register. This register can be accessed with a user-callable routine in the on-chip ROM called bfrom\_SysControl(). If disabled, the PLL control input must be re-enabled before transitioning to the full-on or sleep modes.

For more information about PLL controls, see the 'Dynamic Power Management' chapter in the ADSP-BF50x Blackfin Processor Hardware Reference .

## Table 4. Power Settings

| Mode/State   | PLL               | PLL Bypassed   | Core Clock (CCLK)   | System Clock (SCLK)   | Core Power   |
|--------------|-------------------|----------------|---------------------|-----------------------|--------------|
| Full On      | Enabled           | No             | Enabled             | Enabled               | On           |
| Active       | Enabled/ Disabled | Yes            | Enabled             | Enabled               | On           |
| Sleep        | Enabled           | -              | Disabled            | Enabled               | On           |
| Deep Sleep   | Disabled          | -              | Disabled            | Disabled              | On           |
| Hibernate    | Disabled          | -              | Disabled            | Disabled              | Off          |

## Sleep Operating Mode-High Dynamic Power Savings

The sleep mode reduces dynamic power dissipation by disabling the clock to the processor core (CCLK). The PLL and system clock (SCLK), however, continue to operate in this mode. Typically, an external event wakes up the processor. When in the sleep mode, asserting a wakeup enabled in the SIC\_IWRx registers causes the processor to sense the value of the BYPASS bit in the PLL control register (PLL\_CTL). If BYPASS is disabled, the processor transitions to the full on mode. If BYPASS is enabled, the processor transitions to the active mode.

DMA accesses to L1 memory are not supported in sleep mode.

## Deep Sleep Operating Mode-Maximum Dynamic Power Savings

The deep sleep mode maximizes dynamic power savings by disabling the clocks to the processor core (CCLK) and to all synchronous peripherals (SCLK). Asynchronous peripherals

## ADSP-BF504

may still be running but cannot access internal resources or external memory. This powered-down mode can only be exited by assertion of the reset pin (RESET). Assertion of RESET while in deep sleep mode causes the processor to transition to the full on mode.

## Hibernate State-Maximum Static Power Savings

The hibernate state maximizes static power savings by disabling the voltage and clocks to the processor core (CCLK) and to all of the peripherals (SCLK). This setting sets the internal power supply voltage (VDDINT) to 0 V to provide the lowest static power dissipation. Any critical information stored internally (for example, memory contents, register contents, and other information) must be written to a non-volatile storage device prior to removing power if the processor state is to be preserved. Writing 0 to the HIBERNATE bit causes EXT\_WAKE to transition low, which can be used to signal an external voltage regulator to shut down.

Since VDDEXT can still be supplied in this mode, all of the external pins three-state, unless otherwise specified. This allows other devices that may be connected to the processor to still have power applied without drawing unwanted current.

The processor can be woken up by asserting the RESET pin. All hibernate wakeup events initiate the hardware reset sequence. Individual sources are enabled by the VR\_CTL register. The EXT\_WAKE signal indicates the occurrence of a wakeup event.

As long as VDDEXT is applied, the VR\_CTL register maintains its state during hibernation. All other internal registers and memories, however, lose their content in the hibernate state.

## Power Savings

As shown in Table 5, the processor supports two power domains, which maximizes flexibility while maintaining compliance with industry standards and conventions. By isolating the internal logic of the processor into its own power domain, separate from other I/O, the processor can take advantage of dynamic power management without affecting the other I/O devices. There are no sequencing requirements for the power domains, but all domains must be powered according to the appropriate Specifications table for processor operating conditions; even if the feature/peripheral is not used.

## Table 5. Power Domains

| Power Domain       | Power Supply   |
|--------------------|----------------|
| All internal logic | V DDINT        |
| All I/O logic      | V DDEXT        |

The dynamic power management feature of the processor allows both the processor's input voltage (VDDINT) and clock frequency (fCCLK) to be dynamically controlled.

The power dissipated by a processor is largely a function of its clock frequency and the square of the operating voltage. For example, reducing the clock frequency by 25% results in a 25% reduction in dynamic power dissipation, while reducing the voltage by 25% reduces dynamic power dissipation by more than 40%. Further, these power savings are additive, in that if the clock frequency and supply voltage are both reduced, the power savings can be dramatic, as shown in the following equations.

Power Savings Factor

<!-- formula-not-decoded -->

% Power Savings 1 Power Savings Factor -  100%  =

where the variables in the equations are:

fCCLKNOM is the nominal core clock frequency f CCLKRED is the reduced core clock frequency VDDINTNOM is the nominal internal supply voltage VDDINTRED is the reduced internal supply voltage TNOM is the duration running at fCCLKNOM TRED is the duration running at fCCLKRED

## ADSP-BF504 VOLTAGE REGULATION

The ADSP-BF504 processors require an external voltage regulator to power the VDDINT domain. To reduce standby power consumption, the external voltage regulator can be signaled through EXT\_WAKE to remove power from the processor core. This signal is high-true for power-up and may be connected directly to the low-true shut-down input of many common regulators.

While in the hibernate state, external supplies (V DDEXT) can still be applied, eliminating the need for external buffers. The external voltage regulator can be activated from this power down state by asserting the RESET pin, which then initiates a boot sequence. EXT\_WAKE indicates a wakeup to the external voltage regulator.

The power good (PG) input signal allows the processor to start only after the internal voltage has reached a chosen level. In this way, the startup time of the external regulator is detected after hibernation. For a complete description of the power good functionality, refer to the ADSP-BF50x Blackfin Processor Hardware Reference .

## CLOCK SIGNALS

The processor can be clocked by an external crystal, a sine wave input, or a buffered, shaped clock derived from an external clock oscillator.

If an external clock is used, it should be a TTL-compatible signal and must not be halted, changed, or operated below the specified frequency during normal operation. This signal is connected to the processor's CLKIN pin. When an external clock is used, the XTAL pin must be left unconnected.

Alternatively, because the processor includes an on-chip oscillator circuit, an external crystal may be used. For fundamental frequency operation, use the circuit shown in Figure 4. A parallel-resonant, fundamental frequency, microprocessor-grade crystal is connected across the CLKIN and XTAL pins. The onchip resistance between CLKIN and the XTAL pin is in the

500 k  range. Further parallel resistors are typically not recommended. The two capacitors and the series resistor shown in Figure 4 fine tune phase and amplitude of the sine frequency.

The capacitor and resistor values shown in Figure 4 are typical values only. The capacitor values are dependent upon the crystal manufacturers' load capacitance recommendations and the PCB physical layout. The resistor value depends on the drive level specified by the crystal manufacturer. The user should verify the customized values based on careful investigations on multiple devices over temperature range.

A third-overtone crystal can be used for frequencies above 25 MHz. The circuit is then modified to ensure crystal operation only at the third overtone by adding a tuned inductor circuit as shown in Figure 4. A design procedure for third-overtone operation is discussed in detail in (EE-168) Using Third Overtone Crystals with the ADSP-218x DSP on the Analog Devices website (www.analog.com)-use site search on 'EE-168.'

The Blackfin core runs at a different clock rate than the on-chip peripherals. As shown in Figure 5, the core clock (CCLK) and system peripheral clock (SCLK) are derived from the input clock (CLKIN) signal. An on-chip PLL is capable of multiplying the CLKIN signal by a programmable multiplication factor (bounded by specified minimum and maximum VCO frequencies). The default multiplier is 6×, but it can be modified by a software instruction sequence.

NOTE: VALUES MARKED WITH * MUST BE CUSTOMIZED, DEPENDING ON THE CRYSTAL AND LAYOUT. PLEASE ANALYZE CAREFULLY. FOR FREQUENCIES ABOVE 33 MHz, THE SUGGESTED CAPACITOR VALUE OF 18 pF SHOULD BE TREATED AS A MAXIMUM, AND THE SUGGESTED RESISTOR VALUE SHOULD BE REDUCED TO 0 V .

<!-- image -->

Figure 4. External Crystal Connections

On-the-fly frequency changes can be effected by simply writing to the PLL\_DIV register. The maximum allowed CCLK and SCLK rates depend on the applied voltages VDDINT and VDDEXT; the VCO is always permitted to run up to the CCLK frequency specified by the part's speed grade. The EXTCLK pin can be configured to output either the SCLK frequency or the input buffered CLKIN frequency, called CLKBUF. When configured to output SCLK (CLKOUT), the EXTCLK pin acts as a reference signal in many timing specifications. While active by default, it can be disabled using the EBIU\_AMGCTL register.

Figure 5. Frequency Modification Methods

<!-- image -->

All on-chip peripherals are clocked by the system clock (SCLK). The system clock frequency is programmable by means of the SSEL3-0 bits of the PLL\_DIV register. The values programmed into the SSEL fields define a divide ratio between the PLL output (VCO) and the system clock. SCLK divider values are 1 through 15. Table 6 illustrates typical system clock ratios.

Note that the divisor ratio must be chosen to limit the system clock frequency to its maximum of fSCLK. The SSEL value can be changed dynamically without any PLL lock latencies by writing the appropriate values to the PLL divisor register (PLL\_DIV).

## Table 6. Example System Clock Ratios

| SignalName SSEL3-0   | Divider Ratio   | Example Frequency Ratios (MHz)   | Example Frequency Ratios (MHz)   |
|----------------------|-----------------|----------------------------------|----------------------------------|
|                      | VCO/SCLK        | VCO                              | SCLK                             |
| 0001                 | 1:1             | 50                               | 50                               |
| 0110                 | 6:1             | 300                              | 50                               |
| 1010                 | 10:1            | 400                              | 40                               |

The core clock (CCLK) frequency can also be dynamically changed by means of the CSEL1-0 bits of the PLL\_DIV register. Supported CCLK divider ratios are 1, 2, 4, and 8, as shown in Table 7. This programmable core clock capability is useful for fast core frequency modifications.

## Table 7. Core Clock Ratios

| SignalName CSEL1-0   | Divider Ratio   | Example Frequency Ratios (MHz)   | Example Frequency Ratios (MHz)   |
|----------------------|-----------------|----------------------------------|----------------------------------|
|                      | VCO/CCLK        | VCO                              | CCLK                             |
| 00                   | 1:1             | 300                              | 300                              |
| 01                   | 2:1             | 300                              | 150                              |
| 10                   | 4:1             | 400                              | 100                              |
| 11                   | 8:1             | 200                              | 25                               |

## ADSP-BF504

The maximum CCLK frequency both depends on the part's speed grade and depends on the applied VDDINT voltage. See Table 13 for details. The maximal system clock rate (SCLK) depends on the applied VDDINT and VDDEXT voltages (see Table 15).

## BOOTING MODES

The processor has several mechanisms (listed in Table 8) for automatically loading internal and external memory after a reset. The boot mode is defined by the BMODE input pins dedicated to this purpose. There are two categories of boot modes. In master boot modes, the processor actively loads data from serial memory. In slave boot modes, the processor receives data from external host devices.

Table 8. Booting Modes

|   BMODE2-0 | Description                               |
|------------|-------------------------------------------|
|        000 | Idle/No Boot                              |
|        001 | Reserved                                  |
|        010 | Reserved                                  |
|        011 | Boot through SPI0 master from SPI memory  |
|        100 | Boot through SPI0 slave from host device  |
|        101 | Boot through PPI from host                |
|        110 | Reserved                                  |
|        111 | Boot through UART0 slave from host device |

The boot modes listed in Table 8 provide a number of mechanisms for automatically loading the processor's internal and external memories after a reset. By default, all boot modes use the slowest meaningful configuration settings. Default settings can be altered via the initialization code feature at boot time. Some boot modes require a boot host wait (HWAIT) signal, which is a GPIO output signal that is driven and toggled by the boot kernel at boot time. If pulled high through an external pullup resistor, the HWAIT signal behaves active high and will be driven low when the processor is ready for data. Conversely, when pulled low, HWAIT is driven high when the processor is ready for data. When the boot sequence completes, the HWAIT pin can be used for other purposes. The BMODE pins of the reset configuration register, sampled during power-on resets and software-initiated resets, implement the modes shown in Table 8.

- IDLE State / No Boot (BMODE = 0x0)-In this mode, the boot kernel transitions the processor into Idle state. The processor can then be controlled through JTAG for recovery, debug, or other functions.
- Boot from serial SPI EEPROM or flash memory (BMODE = 0x3)-8-, 16-, 24-, or 32-bit addressable devices are supported. The processor uses the PF13 GPIO pin to select a single SPI EEPROM/flash device (connected to the SPI0 interface) and submits a read command and successive address bytes (0x00) until a valid 8-, 16-, 24-, or 32-bit addressable device is detected. Pull-up resistors are required on the SPI0\_SEL1 and MISO pins. By default, a value of 0x85 is written to the SPI\_BAUD register.
- Boot from SPI host device (BMODE = 0x4)-The processor operates in SPI slave mode and is configured to receive the bytes of the LDR file from an SPI host (master) agent. The HWAIT signal must be interrogated by the host before every transmitted byte. A pull-up resistor is required on the SPI0\_SS input. A pull-down on the serial clock (SCK) may improve signal quality and booting robustness.
- Boot from PPI host device (BMODE = 0x5)-The processor operates in PPI slave mode and is configured to receive the bytes of the LDR file from a PPI host (master) agent.
- Boot from UART0 host on Port G (BMODE = 0x7)Using an autobaud handshake sequence, a boot-stream formatted program is downloaded by the host. The host selects a bit rate within the UART clocking capabilities.

When performing the autobaud detection, the UART expects an '@' (0x40) character (eight bits data, one start bit, one stop bit, no parity bit) on the UA0\_RX pin to determine the bit rate. The UART then replies with an acknowledgment composed of 4 bytes (0xBF, the value of UART0\_DLL, the value of UART0\_DLH, then 0x00). The host can then download the boot stream. The processor deasserts the UA0\_RTS output to hold off the host; UA0\_CTS functionality is not enabled at boot time.

For each of the boot modes, a 16 byte header is first read from an external memory device. The header specifies the number of bytes to be transferred and the memory destination address. Multiple memory blocks may be loaded by any boot sequence. Once all blocks are loaded, program execution commences from the address stored in the EVT1 register.

The boot kernel differentiates between a regular hardware reset and a wakeup-from-hibernate event to speed up booting in the later case. Bits 6-4 in the system reset configuration (SYSCR) register can be used to bypass the preboot routine and/or boot kernel in case of a software reset. They can also be used to simulate a wakeup-from-hibernate boot in the software reset case.

The boot process can be further customized by 'initialization code.' This is a piece of code that is loaded and executed prior to the regular application boot. Typically, this is used to speed up booting by managing the PLL, clock frequencies, wait states, or serial bit rates.

The boot ROM also features C-callable functions that can be called by the user application at run time. This enables secondstage boot or boot management schemes to be implemented with ease.

## INSTRUCTION SET DESCRIPTION

The Blackfin processor family assembly language instruction set employs an algebraic syntax designed for ease of coding and readability. The instructions have been specifically tuned to provide a flexible, densely encoded instruction set that compiles to a very small final memory size. The instruction set also provides fully featured multifunction instructions that allow the programmer to use many of the processor core resources in a single instruction. Coupled with many features more often seen on microcontrollers, this instruction set is very efficient when compiling C and C++ source code. In addition, the architecture

supports both user (algorithm/application code) and supervisor (O/S kernel, device drivers, debuggers, ISRs) modes of operation, allowing multiple levels of access to core processor resources.

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

For processor evaluation, Analog Devices provides wide range of EZ-KIT Lite ® evaluation boards. Including the processor and key peripherals, the evaluation board also supports on-chip emulation capabilities and other evaluation and development features. Also available are various EZ-Extenders ® , which are daughter cards delivering additional specialized functionality, including audio and video processing. For more information visit www.analog.com and search on 'ezkit' or 'ezextender'.

## EZ-KIT Lite Evaluation Kits

For a cost-effective way to learn more about developing with Analog Devices processors, Analog Devices offer a range of EZKIT Lite evaluation kits. Each evaluation kit includes an EZ-KIT Lite evaluation board, directions for downloading an evaluation version of the available IDE(s), a USB cable, and a power supply. The USB controller on the EZ-KIT Lite board connects to the USB port of the user's PC, enabling the chosen IDE evaluation suite to emulate the on-board processor in-circuit. This permits the customer to download, execute, and debug programs for the EZ-KIT Lite system.With the full version of CrossCore Embedded Studio or VisualDSP++ installed (sold separately), engineers can develop software for supported EZ-KITs or any custom system utilizing supported Analog Devices processors.

## Software Add-Ins for CrossCore Embedded Studio

Analog Devices offers software add-ins which seamlessly integrate with CrossCore Embedded Studio to extend its capabilities and reduce development time. Add-ins include board support packages for evaluation hardware, various middleware packages, and algorithmic modules. Documentation, help, configuration dialogs, and coding examples present in these add-ins are viewable through the CrossCore Embedded Studio IDE once the add-in is installed.

## Board Support Packages for Evaluation Hardware

Software support for the EZ-KIT Lite evaluation boards and EZExtender daughter cards is provided by software add-ins called Board Support Packages (BSPs). The BSPs contain the required drivers, pertinent release notes, and select example code for the given evaluation hardware. A download link for a specific BSP is located on the web page for the associated EZ-KIT or EZExtender product. The link is found in the Product Download area of the product web page.

## Middleware Packages

Analog Devices separately offers middleware add-ins such as real time operating systems, file systems, USB stacks, and TCP/IP stacks. For more information see the following web pages:

- www.analog.com/ucos3
- www.analog.com/ucfs
- www.analog.com/ucusbd
- www.analog.com/lwip

## Algorithmic Modules

To speed development, Analog Devices offers add-ins that perform popular audio and video processing algorithms. These are available for use with both CrossCore Embedded Studio and VisualDSP++. For more information visit www.analog.com and search on 'Blackfin software modules' or 'SHARC software modules'.

## ADSP-BF504

## Designing an Emulator-Compatible DSP Board (Target)

For embedded system test and debug, Analog Devices provides a family of emulators. On each JTAG DSP, Analog Devices supplies an IEEE 1149.1 JTAG Test Access Port (TAP). In-circuit emulation is facilitated by use of this JTAG interface. The emulator accesses the processor's internal features via the processor's TAP, allowing the developer to load code, set breakpoints, and view variables, memory, and registers. The processor must be halted to send data and commands, but once an operation is completed by the emulator, the DSP system is set to run at full speed with no impact on system timing. The emulators require the target board to include a header that supports connection of the JTAG port of the DSP to the emulator.

For details on target board design issues including mechanical layout, single processor connections, signal buffering, signal termination, and emulator pod logic, see the EE-68: Analog Devices JTAG Emulation Technical Reference on the Analog Devices website (www.analog.com)-use site search on 'EE-68.' This document is updated regularly to keep pace with improvements to emulator support.

## ACM INTERFACE

This section describes the ACM interface. System designers should also consult the ADSP-BF50x Blackfin Processor Hardware Reference for additional information.

The ADC control module (ACM) provides an interface that synchronizes the controls between the processor and an external analog-to-digital converter (ADC). The analog-to-digital conversions are initiated by the processor, based on external or internal events.

The ACM allows for flexible scheduling of sampling instants and provides precise sampling signals to the external ADC.

The ACM synchronizes the ADC conversion process; generating the ADC controls, the ADC conversion start signal, and other signals. The actual data acquisition from the ADC is done by the SPORT peripherals.

The serial interface on the ADC allows the part to be directly connected to ADSP-BF504 processors using serial interface protocols.

Figure 6 shows how to connect an external ADC to the ACM and one of the two SPORTs on ADSP-BF504 processors.

The ADSP-BF504 processors interface directly to the ADC without any glue logic required. The availability of secondary receive registers on the serial ports of the Blackfin processors means only one serial port is necessary to read from both DOUT pins simultaneously. Figure 6 shows both DOUTA and DOUTB of the ADC connected to one of the processor's serial ports. The SPORTx Receive Configuration 1 register and SPORTx Receive Configuration 2 register should be set up as outlined in Table 9 and Table 10.

Figure 6. ADC (External), ACM, and SPORT Connections

<!-- image -->

Table 9. The SPORTx Receive Configuration 1 Register (SPORTx\_RCR1)

| Setting                                                                                       | Description                                                                                                                                                          |
|-----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RCKFE = 0 LRFS = 1 RFSR = 1 IRFS = 0 RLSBIT = 0 RDTYPE = 00 IRCLK = 0 RSPEN = 1 TFSR = RFSR = | Sample data with falling edge of RSCLK Active low frame signal Frame every word External RFS used Receive MSB first Zero fill External receive clock Receive enabled |

NOTE: The SPORT must be enabled with the following settings: external clock, external frame sync, and active low frame sync.

Table 10. The SPORTx Receive Configuration 2 Register (SPORTx\_RCR2)

| Setting     | Description                                           |
|-------------|-------------------------------------------------------|
| RXSE = 1    | Secondary side enabled                                |
| SLEN = 1111 | 16-bitdata-word(ormaybesetto1101for 14-bit data-word) |

## ADDITIONAL INFORMATION

The following publications that describe the ADSP-BF504 processors (and related processors) can be ordered from any Analog Devices sales office or accessed electronically on our website:

- Getting Started With Blackfin Processors
- ADSP-BF50x Blackfin Processor Hardware Reference (volumes 1 and 2)
- Blackfin Processor Programming Reference
- ADSP-BF50x Blackfin Processor Anomaly List

## RELATED SIGNAL CHAINS

A signal chain is a series of signal-conditioning electronic components that receive input (data acquired from sampling either real-time phenomena or from stored data) in tandem, with the output of one portion of the chain supplying input to the next. Signal chains are often used in signal processing applications to gather and process data or to apply system controls based on analysis of real-time phenomena.

Analog Devices eases signal processing system development by providing signal processing components that are designed to work together well. A tool for viewing relationships between specific applications and related components is available on the www.analog.com website.

The Application Signal Chains page in the Circuits from the Lab TM site (www.analog.com/circuits) provides:

- Graphical circuit block diagram presentation of signal chains for a variety of circuit types and applications
- Drill down links for components in each chain to selection guides and application information
- Reference designs applying best practice design techniques

## ADSP-BF504

## SIGNAL DESCRIPTIONS

Signal definitions for the ADSP-BF504 processors are listed in Table 11.

In order to maintain maximum function and reduce package size and pin count, some pins have multiple, multiplexed functions. In cases where pin function is reconfigurable, the default state is shown in plain text, while the alternate functions are shown in italics.

During and immediately after reset, all processor signals are three-stated with the following exceptions: EXT\_WAKE is driven high and XTAL is driven in conjunction with CLKIN to

Table 11. Processor-Signal Descriptions

| SignalName                                 | Type   | Function                                                                | Driver Type   |
|--------------------------------------------|--------|-------------------------------------------------------------------------|---------------|
| Port F: GPIO and Multiplexed Peripherals   |        |                                                                         |               |
| PF0 /TSCLK0/UA0_RX/TMR6/CUD0               | I/O    | GPIO /SPORT0 TX Serial CLK/UART0 RX/Timer6/Count UpDir 0                | C             |
| PF1 /RSCLK0/UA0_TX/TMR5/CDG0               | I/O    | GPIO /SPORT0 RX Serial CLK/UART0 TX/Timer5/Count DownDir 0              | C             |
| PF2 /DT0PRI/PWM0_BH/PPI_D8/CZM0            | I/O    | GPIO /SPORT0 TX Pri Data/PWM0 DriveBHi/PPI Data 8/CounterZeroMarker 0   | C             |
| PF3 /TFS0/PWM0_BL/PPI_D9/CDG0              | I/O    | GPIO /SPORT0 TX Frame Sync/PWM0 Drive B Lo/PPI Data 9/Count DownDir 0   | C             |
| PF4 /RFS0/PWM0_CH/PPI_D10/TACLK0           | I/O    | GPIO /SPORT0 RX Frame Sync/PWM0 Drive CHi/PPI Data 10/Alt Timer CLK 0   | C             |
| PF5 /DR0PRI/PWM0_CL/PPI_D11/TACLK1         | I/O    | GPIO /SPORT0 Pri RX Data/PWM0 Drive CLo/PPI Data 11/Alt Timer CLK 1     | C             |
| PF6 /UA1_TX/PWM0_TRIP/PPI_D12              | I/O    | GPIO /UART1 TX/PWM0TRIP/PPI Data 12                                     | C             |
| PF7 /UA1_RX/PWM0_SYNC/PPI_D13/TACI3        | I/O    | GPIO /UART1 RX/PWM0SYNC/PPI Data 13/Alt Capture In 3                    | C             |
| PF8 /UA1_RTS/DT0SEC/PPI_D7                 | I/O    | GPIO /UART1 RTS/SPORT0 TX Sec Data/PPI Data 7                           | C             |
| PF9 /UA1_CTS/DR0SEC/PPI_D6/CZM0            | I/O    | GPIO /UART1 CTS/SPORT0 Sec RX Data/PPI Data 6/Counter Zero Marker 0     | C             |
| PF10 /SPI0_SCK/TMR2/PPI_D5                 | I/O    | GPIO /SPI0 SCK/Timer2/PPI Data 5                                        | C             |
| PF11 /SPI0_MISO/PWM0_TRIP/PPI_D4/TACLK2    | I/O    | GPIO /SPI0 MISO/PWM0TRIP/PPI Data 4/Alt Timer CLK 2                     | C             |
| PF12 /SPI0_MOSI/PWM0_SYNC/PPI_D3           | I/O    | GPIO /SPI0 MOSI/PWM0SYNC/PPI Data 3                                     | C             |
| PF13 /SPI0_SEL1/TMR3/PPI_D2/SPI0_SS        | I/O    | GPIO /SPI0 Slave Select 1/Timer3/PPI Data 2/SPI0 Slave Select In        | C             |
| PF14 /SPI0_SEL2/PWM0_AH/PPI_D1             | I/O    | GPIO /SPI0 Slave Select 2/PWM0AH/PPI Data 1                             | C             |
| PF15 /SPI0_SEL3/PWM0_AL/PPI_D0             | I/O    | GPIO /SPI0 Slave Select 3/PWM0AL/PPI Data 0                             | C             |
| Port G: GPIO and Multiplexed Peripherals   |        |                                                                         |               |
| PG0 /SPI1_SEL3/TMRCLK/PPI_CLK/UA1_RX/TACI4 | I/O    | GPIO /SPI1 Slave Select 3/Timer CLK/PPI Clock/UART1 RX/Alt Capture In 4 | C             |
| PG1 /SPI1_SEL2/PPI_FS3/CAN_RX/TACI5        | I/O    | GPIO /SPI1 Slave Select 2/PPI FS3/CAN RX/Alt Capture In 5               | C             |
| PG2 /SPI1_SEL1/TMR4/CAN_TX/SPI1_SS         | I/O    | GPIO /SPI1 Slave Select 1/Timer4/CAN TX/SPI1 Slave Select In            | C             |
| PG3 /HWAIT/SPI1_SCK/DT1SEC/UA1_TX          | I/O    | GPIO /HWAIT/SPI1 SCK/SPORT1 TX Sec Data/UART1 TX                        | C             |
| PG4 /SPI1_MOSI/DR1SEC/PWM1_SYNC/TACLK6     | I/O    | GPIO /SPI1 MOSI/SPORT1 Sec RX Data/PWM1SYNC/Alt Timer CLK 6             | C             |
| PG5 /SPI1_MISO/TMR7/PWM1_TRIP              | I/O    | GPIO /SPI1 MISO/Timer7/PWM1 TRIP                                        | C             |
| PG6 /ACM_SGLDIFF/SD_D3/PWM1_AH             | I/O    | GPIO /ADCCMSGLDIFF/SD Data 3/PWM1Drive AHi                              | C             |
| PG7 /ACM_RANGE/SD_D2/PWM1_AL               | I/O    | GPIO /ADCCMRANGE/SDData2/PWM1DriveALo                                   | C             |
| PG8 /DR1SEC/SD_D1/PWM1_BH                  | I/O    | GPIO /SPORT1 Sec RX Data/SD Data 1/PWM1Drive B Hi                       | C             |
| PG9 /DR1PRI/SD_D0/PWM1_BL                  | I/O    | GPIO /SPORT1 Pri RX Data/SD Data 0/PWM1Drive B Lo                       | C             |
| PG10 /RFS1/SD_CMD/PWM1_CH/TACI6            | I/O    | GPIO /SPORT1 RX Frame Sync/SD CMD/PWM1DriveCHi/Alt Capture In 6         | C             |
| PG11 /RSCLK1/SD_CLK/PWM1_CL/TACLK7         | I/O    | GPIO /SPORT1 RX Serial CLK/SD CLK/PWM1DriveC Lo/Alt Timer CLK 7         | C             |
| PG12 /UA0_RX/SD_D4/PPI_D15/TACI2           | I/O    | GPIO /UART0 RX/SD Data 4/PPI Data 15/Alt Capture In 2                   | C             |
| PG13 /UA0_TX/SD_D5/PPI_D14/CZM1            | I/O    | GPIO /UART0 TX/SD Data 5/PPI Data 14/Counter Zero Marker 1              | C             |
| PG14 /UA0_RTS/SD_D6/TMR0/PPI_FS1/CUD1      | I/O    | GPIO /UART0 RTS/SD Data 6/Timer0/PPI FS1/Count UpDir 1                  | C             |

create a crystal oscillator circuit. During hibernate, all signals are three-stated with the following exceptions: EXT\_WAKE is driven low and XTAL is driven to a solid logic level.

During and immediately after reset, all I/O pins have their input buffers disabled until enabled by user software with the exception of the pins that need pull-ups or pull-downs, as noted in Table 11.

Adding a parallel termination to CLKOUT may prove useful in further enhancing signal integrity. Be sure to verify overshoot/undershoot and signal integrity specifications on actual hardware.

Table 11. Processor-Signal Descriptions  (Continued)

| SignalName                               | Type    | Function                                                                                                                                                              | Driver Type   |
|------------------------------------------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| PG15 /UA0_CTS/SD_D7/TMR1/PPI_FS2/CDG1    | I/O     | GPIO /UART0 CTS/SD Data 7/Timer1/PPI FS2/Count DownDir 1                                                                                                              | C             |
| Port H: GPIO and Multiplexed Peripherals |         |                                                                                                                                                                       |               |
| PH0 /ACM_A2/DT1PRI/SPI0_SEL3 /WAKEUP     | I/O     | GPIO /ADCCMA2/SPORT1TX Pri Data/SPI0 Slave Select 3 / Wake-up Input                                                                                                   | C             |
| PH1 /ACM_A1/TFS1/SPI1_SEL3/TACLK3        | I/O     | GPIO /ADCCMA1/SPORT1TX Frame Sync/SPI1 Slave Select 3/Alt Timer CLK 3                                                                                                 | C             |
| PH2 /ACM_A0/TSCLK1/SPI1_SEL2/TACI7       | I/O     | GPIO /ADCCMA0/SPORT1TX Serial CLK/SPI1 Slave Select 2/Alt Capture In 7                                                                                                | C             |
| TWI (2-Wire Interface) Port              |         |                                                                                                                                                                       |               |
| SCL                                      | I/O 5 V | TWI Serial Clock (This signal is an open-drain output and requires a pull-up resistor. Consult version 2.1 of the I 2 C specification for the proper resistor value.) | D             |
| SDA                                      | I/O 5 V | TWI Serial Data (This signal is an open-drain output and requires a pull-up resistor. Consult version 2.1 of the I 2 C specification for the proper resistor value.)  | D             |
| JTAG Port                                |         |                                                                                                                                                                       |               |
| TCK                                      | I       | JTAG CLK                                                                                                                                                              |               |
| TDO                                      | O       | JTAG Serial Data Out                                                                                                                                                  | C             |
| TDI                                      | I       | JTAG Serial Data In                                                                                                                                                   |               |
| TMS                                      | I       | JTAG Mode Select                                                                                                                                                      |               |
| TRST                                     | I       | JTAG Reset                                                                                                                                                            |               |
| EMU                                      | O       | Emulation Output                                                                                                                                                      | C             |
| Clock                                    |         |                                                                                                                                                                       |               |
| CLKIN                                    | I       | CLK/Crystal In                                                                                                                                                        |               |
| XTAL                                     | O       | Crystal Output                                                                                                                                                        |               |
| EXTCLK                                   | O       | Clock Output                                                                                                                                                          | B             |
| ModeControls                             |         |                                                                                                                                                                       |               |
| RESET                                    | I       | Reset                                                                                                                                                                 |               |
| NMI                                      | I       | Nonmaskable Interrupt (This signal must be pulled high when not used.)                                                                                                |               |
| BMODE2-0                                 | I       | Boot Mode Strap 2-0                                                                                                                                                   |               |
| ADSP-BF504 Voltage Regulation I/F        |         |                                                                                                                                                                       |               |
| EXT_WAKE                                 | O       | Wake up Indication                                                                                                                                                    | C             |
| PG                                       | I       | Power Good                                                                                                                                                            |               |
| Power Supplies                           |         | ALL SUPPLIESMUSTBEPOWERED See Operating Conditions.                                                                                                                   |               |
| V DDEXT                                  | P       | I/O Power Supply                                                                                                                                                      |               |
| V DDINT                                  | P       | Internal Power Supply                                                                                                                                                 |               |
| GND                                      | G       | Ground for All Supplies                                                                                                                                               |               |

## ADSP-BF504

## ADSP-BF504

## SPECIFICATIONS

Specifications are subject to change without notice.

## OPERATING CONDITIONS

| Parameter   | Parameter                     | Conditions                               | Min                 | Nominal   | Max              | Unit   |
|-------------|-------------------------------|------------------------------------------|---------------------|-----------|------------------|--------|
| V DDINT     | Internal Supply Voltage       | Industrial Models                        | 1.14                |           | 1.47             | V      |
|             | Internal Supply Voltage       | Commercial Models                        | 1.10                |           | 1.47             | V      |
| V DDEXT 1   | External Supply Voltage       | 1.8 V I/O                                | 1.7                 | 1.8       | 1.9              | V      |
|             | External Supply Voltage       | 2.5 V I/O                                | 2.25                | 2.5       | 2.75             | V      |
|             | External Supply Voltage       | 3.3 V I/O                                | 2.7                 | 3.3       | 3.6              | V      |
| V IH        | High Level Input Voltage 2, 3 | V DDEXT = 1.90 V                         | 1.2                 |           |                  | V      |
|             | High Level Input Voltage 2, 4 | V DDEXT = 2.75 V                         | 1.7                 |           |                  | V      |
|             | High Level Input Voltage 2, 4 | V DDEXT = 3.6 V                          | 2.0                 |           |                  | V      |
| V IHTWI     | High Level Input Voltage 3    | V DDEXT = 1.90 V/2.75 V/3.6 V            | 0.7 × V BUSTWI 5, 6 |           | V BUSTWI 5, 6    | V      |
| V IL        | Low Level Input Voltage 2, 3  | V DDEXT = 1.7 V                          |                     |           | 0.6              | V      |
|             | Low Level Input Voltage 2, 4  | V DDEXT = 2.25 V                         |                     |           | 0.7              | V      |
|             | Low Level Input Voltage 2, 4  | V DDEXT = 3.0 V                          |                     |           | 0.8              | V      |
| V ILTWI     | Low Level Input Voltage 3     | V DDEXT = minimum                        |                     |           | 0.3 × V BUSTWI 6 | V      |
| T J         | Junction Temperature          | 88-Lead LFCSP@T AMBIENT = -40°C to +85°C | -40                 |           | +105             | °C     |
|             | Junction Temperature          | 88-Lead LFCSP@T AMBIENT = 0°C to +70°C   | 0                   |           | +90              | °C     |

Table 12 shows settings for TWI\_DT in the NONGPIO\_DRIVE register. Set this register prior to using the TWI port.

Table 12. TWI\_DT Field Selections and VDDEXT/VBUSTWI

| TWI_DT         | V DDEXT Nominal   | V BUSTWI Minimum   | V BUSTWI Nominal   | V BUSTWI Maximum   | Unit   |
|----------------|-------------------|--------------------|--------------------|--------------------|--------|
| 000 (default)  | 3.3               | 2.97               | 3.3                | 3.63               | V      |
| 001            | 1.8               | 1.7                | 1.8                | 1.98               | V      |
| 010            | 2.5               | 2.97               | 3.3                | 3.63               | V      |
| 011            | 1.8               | 2.97               | 3.3                | 3.63               | V      |
| 100            | 3.3               | 4.5                | 5                  | 5.5                | V      |
| 101            | 1.8               | 2.25               | 2.5                | 2.75               | V      |
| 110            | 2.5               | 2.25               | 2.5                | 2.75               | V      |
| 111 (reserved) | -                 | -                  | -                  | -                  | -      |

## ADSP-BF504 Clock Related Operating Conditions

Table 13 describes the core clock timing requirements for the ADSP-BF504 processors. Take care in selecting MSEL, SSEL, and CSEL ratios so as not to exceed the maximum core clock and system clock (see Table 15). Table 14 describes phaselocked loop operating conditions.

## Table 13. Core Clock (CCLK) Requirements-ADSP-BF504 Processors-All Speed Grades

| Parameter   |                                               | MinV DDINT   | NomV DDINT   |   MaxCCLK Frequency | Unit   |
|-------------|-----------------------------------------------|--------------|--------------|---------------------|--------|
| f CCLK      | Core Clock Frequency                          | 1.33 V       | 1.400 V      |                 400 | MHz    |
|             | Core Clock Frequency                          | 1.16 V       | 1.225 V      |                 300 | MHz    |
|             | Core Clock Frequency (Industrial Models Only) | 1.14 V       | 1.200 V      |                 200 | MHz    |
|             | Core Clock Frequency (Commercial Models Only) | 1.10 V       | 1.150 V      |                 200 | MHz    |

## Table 14. Phase-Locked Loop Operating Conditions

| Parameter   | Parameter                                     |   Min | Max                | Unit   |
|-------------|-----------------------------------------------|-------|--------------------|--------|
| f VCO       | Voltage Controlled Oscillator (VCO) Frequency |    72 | Instruction Rate 1 | MHz    |

## Table 15. Maximum SCLK Conditions for ADSP-BF504 Processors

| Parameter   |                                          |   V DDEXT = 1.8 V/2.5 V/3.3 VNominal | Unit   |
|-------------|------------------------------------------|--------------------------------------|--------|
| f SCLK      | CLKOUT/SCLK Frequency (V DDINT  1.16 V) |                                  100 | MHz    |
|             | CLKOUT/SCLK Frequency (V DDINT  1.16 V) |                                   80 | MHz    |

## ADSP-BF504

## ELECTRICAL CHARACTERISTICS

| Parameter                 |                                                    | Test Conditions                                                         | Min   | Typical   | Max                                                              | Unit   |
|---------------------------|----------------------------------------------------|-------------------------------------------------------------------------|-------|-----------|------------------------------------------------------------------|--------|
| V OH                      | High Level Output Voltage                          | V DDEXT = 1.7 V, I OH = -0.5mA                                          | 1.35  |           |                                                                  | V      |
|                           | High Level Output Voltage                          | V DDEXT = 2.25 V, I OH = -0.5mA                                         | 2.0   |           |                                                                  | V      |
|                           | High Level Output Voltage                          | V DDEXT = 3.0 V, I OH = -0.5mA                                          | 2.4   |           |                                                                  | V      |
| V OL                      | Low Level Output Voltage                           | V DDEXT = 1.7 V/2.25 V/3.0 V, I OL = 2.0mA                              |       |           | 0.4                                                              | V      |
| I IH                      | High Level Input Current 1                         | V DDEXT =3.6 V, V IN = 3.6 V                                            |       |           | 10.0                                                             | µA     |
| I IL                      | Low Level Input Current 1                          | V DDEXT =3.6 V, V IN = 0 V                                              |       |           | 10.0                                                             | µA     |
| I IHP                     | High Level Input Current JTAG 2                    | V DDEXT = 3.6 V, V IN = 3.6 V                                           |       |           | 75.0                                                             | µA     |
| I OZH                     | Three-State Leakage Current 3                      | V DDEXT = 3.6 V, V IN = 3.6 V                                           |       |           | 10.0                                                             | µA     |
| I OZHTWI                  | Three-State Leakage Current 4                      | V DDEXT =3.0 V, V IN = 5.5 V                                            |       |           | 10.0                                                             | µA     |
| I OZL                     | Three-State Leakage Current 3                      | V DDEXT = 3.6 V, V IN = 0 V                                             |       |           | 10.0                                                             | µA     |
| C IN                      | Input Capacitance 5,6                              | f IN = 1 MHz, T AMBIENT = 25°C, V IN = 2.5 V                            |       | 5         | 8                                                                | pF     |
| C INTWI                   | Input Capacitance 4,6                              | f IN = 1 MHz, T AMBIENT = 25°C, V IN = 2.5 V                            |       |           | 10                                                               | pF     |
| I DDDEEPSLEEP 7           | V DDINT Current in Deep Sleep Mode                 | V DDINT = 1.2 V, f CCLK = 0 MHz, f SCLK = 0 MHz, T J = 25°C, ASF = 0.00 |       | 1.85      |                                                                  | mA     |
| I DDSLEEP                 | V DDINT Current in Sleep Mode                      | V DDINT = 1.2 V, f SCLK = 25 MHz, T J = 25°C                            |       | 2.1       |                                                                  | mA     |
| I DD-IDLE                 | V DDINT Current in Idle                            | V DDINT = 1.2 V, f CCLK = 50 MHz, T J = 25°C, ASF = 0.42                |       | 18        |                                                                  | mA     |
| I DD-TYP                  | V DDINT Current                                    | V DDINT = 1.40 V, f CCLK = 400 MHz, T J = 25°C, ASF = 1.00              |       | 104       |                                                                  | mA     |
|                           | V DDINT Current                                    | V DDINT =1.225V,f CCLK =300MHz, T J = 25°C, ASF = 1.00                  |       | 69        |                                                                  | mA     |
|                           | V DDINT Current                                    | V DDINT = 1.2 V, f CCLK = 200 MHz, T J = 25°C, ASF = 1.00               |       | 51        |                                                                  | mA     |
| I DDHIBERNATE 8           | Hibernate State Current                            | V DDEXT = 3.30 V, T J = 25°C, CLKIN = 0 MHz (V DDINT = 0 V)             |       | 40        |                                                                  |  A    |
| I DDSLEEP 9               | V DDINIT Current in Sleep Mode                     | f CCLK = 0 MHz, f SCLK  0MHz                                          |       |           | Table 17 + (.16 × V DDINT × f SCLK )                             | mA 10  |
| I DDDEEPSLEEP 9 I DDINT 9 | V DDINT Current in Deep Sleep Mode V DDINT Current | f CCLK = 0 MHz, f SCLK =0MHz f CCLK  0 MHz, f SCLK  0MHz             |       |           | Table 17 Table 17 + (Table 18 × ASF) + (.16 × V DDINT × f SCLK ) | mA mA  |

## Total Power Dissipation

Total power dissipation has two components:

1. Static, including leakage current
2. Dynamic, due to transistor switching characteristics

Many operating conditions can also affect power dissipation, including temperature, voltage, operating frequency, and processor activity. Electrical Characteristics shows the current dissipation for internal circuitry (V DDINT). I DDDEEPSLEEP specifies static power dissipation as a function of voltage (V DDINT) and temperature (see Table 17), and IDDINT specifies the total power specification for the listed test conditions, including the dynamic component as a function of voltage (VDDINT) and frequency (Table 18).

There are two parts to the dynamic component. The first part is due to transistor switching in the core clock (CCLK) domain. This part is subject to an Activity Scaling Factor (ASF) which represents application code running on the processor core and L1 memories (Table 16).

Table 17. Static Current-IDD-DEEPSLEEP (mA)

|            | Voltage (V DDINT ) 1   | Voltage (V DDINT ) 1   | Voltage (V DDINT ) 1   | Voltage (V DDINT ) 1   | Voltage (V DDINT ) 1   | Voltage (V DDINT ) 1   | Voltage (V DDINT ) 1   | Voltage (V DDINT ) 1   | Voltage (V DDINT ) 1   |
|------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|
| T J (°C) 1 | 1.10V                  | 1.15V                  | 1.20V                  | 1.25V                  | 1.30V                  | 1.35V                  | 1.40V                  | 1.45V                  | 1.50V                  |
| -40        | 0.20                   | 0.23                   | 0.26                   | 0.29                   | 0.31                   | 0.34                   | 0.37                   | 0.40                   | 0.43                   |
| -20        | 0.30                   | 0.34                   | 0.38                   | 0.43                   | 0.47                   | 0.51                   | 0.55                   | 0.59                   | 0.63                   |
| 0          | 0.50                   | 0.57                   | 0.63                   | 0.70                   | 0.77                   | 0.83                   | 0.90                   | 0.97                   | 1.03                   |
| 25         | 0.90                   | 1.03                   | 1.17                   | 1.30                   | 1.43                   | 1.57                   | 1.70                   | 1.83                   | 1.97                   |
| 40         | 1.30                   | 1.50                   | 1.70                   | 1.90                   | 2.10                   | 2.30                   | 2.50                   | 2.70                   | 2.90                   |
| 55         | 2.00                   | 2.30                   | 2.60                   | 2.90                   | 3.20                   | 3.50                   | 3.80                   | 4.10                   | 4.40                   |
| 70         | 3.00                   | 3.47                   | 3.93                   | 4.40                   | 4.87                   | 5.33                   | 5.80                   | 6.27                   | 6.73                   |
| 85         | 4.60                   | 5.23                   | 5.87                   | 6.50                   | 7.13                   | 7.77                   | 8.40                   | 9.03                   | 9.67                   |
| 100        | 6.80                   | 7.67                   | 8.53                   | 9.40                   | 10.27                  | 11.13                  | 12.00                  | 12.87                  | 13.73                  |
| 105        | 7.80                   | 8.77                   | 9.73                   | 10.70                  | 11.67                  | 12.63                  | 13.60                  | 14.57                  | 15.53                  |
| 125        | 12.50                  | 14.00                  | 15.50                  | 17.00                  | 18.50                  | 20.00                  | 21.50                  | 23.00                  | 24.50                  |

1 Valid frequency and voltage ranges are model-specific. See Operating Conditions.

Table 18. Dynamic Current in CCLK Domain (mA, with ASF = 1.0) 1

| f CCLK (MHz)   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   |
|----------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|
| f CCLK (MHz)   | 1.10V                  | 1.15V                  | 1.20V                  | 1.25V                  | 1.30V                  | 1.35V                  | 1.40V                  | 1.45V                  | 1.50V                  |
| 400            | N/A                    | N/A                    | N/A                    | N/A                    | 84.46                  | 88.30                  | 92.39                  | 96.35                  | 100.49                 |
| 350            | N/A                    | N/A                    | N/A                    | N/A                    | 74.30                  | 77.93                  | 81.39                  | 84.94                  | 88.61                  |
| 300            | N/A                    | N/A                    | 58.58                  | 61.46                  | 64.49                  | 67.59                  | 70.71                  | 73.76                  | 77.04                  |
| 250            | 43.76                  | 46.22                  | 48.64                  | 51.09                  | 53.61                  | 56.19                  | 58.93                  | 61.56                  | 64.22                  |
| 200            | 35.26                  | 37.37                  | 39.29                  | 41.33                  | 43.40                  | 45.54                  | 47.79                  | 49.88                  | 52.18                  |
| 150            | 26.71                  | 28.38                  | 29.87                  | 31.46                  | 33.09                  | 34.83                  | 36.56                  | 38.22                  | 39.95                  |
| 100            | 18.04                  | 19.20                  | 20.25                  | 21.46                  | 22.61                  | 23.83                  | 25.13                  | 26.39                  | 27.72                  |

1 The values are not guaranteed as standalone maximum specifications. They must be combined with static current per the equations of Electrical Characteristics.

2 Valid frequency and voltage ranges are model-specific. See Operating Conditions and ADSP-BF504 Clock Related Operating Conditions.

The ASF is combined with the CCLK Frequency and VDDINT dependent data in Table 18 to calculate this part. The second part is due to transistor switching in the system clock (SCLK) domain, which is included in the IDDINT specification equation.

Table 16. Activity Scaling Factors (ASF) 1

| I DDINT Power Vector   |   Activity Scaling Factor (ASF) |
|------------------------|---------------------------------|
| I DD-PEAK              |                            1.27 |
| I DD-HIGH              |                            1.24 |
| I DD-TYP               |                            1    |
| I DD-APP               |                            0.85 |
| I DD-NOP               |                            0.71 |
| I DD-IDLE              |                            0.42 |

1 See Estimating Power for ASDP-BF534/BF536/BF537 Blackfin Processors (EE-297) . The power vector information also applies to the ADSP-BF504 processors.

## ADSP-BF504

## PROCESSOR-ABSOLUTE MAXIMUM RATINGS

Stresses greater than those listed in Table 19 may cause permanent damage to the device. These are stress ratings only. Functional operation of the device at these or any other conditions greater than those indicated in the operational sections of this specification is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

Table 19. Absolute Maximum Ratings

| Parameter                                | Rating              |
|------------------------------------------|---------------------|
| Internal Supply Voltage (V DDINT )       | -0.3 V to +1.5 V    |
| External (I/O) Supply Voltage (V DDEXT ) | -0.3 V to +3.8 V    |
| Input Voltage 1, 2                       | -0.5 V to +3.6 V    |
| Input Voltage 1, 2, 3                    | -0.5 V to +5.5 V    |
| Output Voltage Swing                     | -0.5 V to           |
|                                          | V DDEXT +0.5 V      |
| I OH /I OL Current per Pin Group 4       | 76 mA(max)          |
| Storage Temperature Range                | -65 ° C to +150 ° C |
| Junction Temperature While Biased        | +110 ° C            |

Table 20. Maximum Duty Cycle for Input Transient Voltage 1

|   V IN Min (V) 2 |   V IN Max(V) 2 | MaximumDutyCycle 3   |
|------------------|-----------------|----------------------|
|             -0.5 |             3.8 | 100%                 |
|             -0.7 |             4   | 40%                  |
|             -0.8 |             4.1 | 25%                  |
|             -0.9 |             4.2 | 15%                  |
|             -1   |             4.3 | 10%                  |

Table 21 specifies the maximum total source/sink (IOH/IOL) current for a group of pins. Permanent damage can occur if this value is exceeded. To understand this specification, if pins PG5, PG6, PG7, PG8, and PG9 from group 5 in Table 21, each were sourcing or sinking 2 mA each, the total current for those pins would be 10 mA. This would allow up to 66 mA total that could be sourced or sunk by the remaining pins in the group without damaging the device. For a list of all groups and their pins, see Table 21. Note that the VOL and VOL specifications have separate per-pin maximum current requirements, see the Electrical Characteristics.

Table 21. Total Current Pin Groups

|   Group | Pins in Group                          |
|---------|----------------------------------------|
|       1 | PF10, PF11                             |
|       2 | PF12, PF13, PF14, PF15                 |
|       3 | PG0                                    |
|       4 | PG1, PG2, PG3, PG4                     |
|       5 | PG5, PG6, PG7, PG8, PG9, PG10, PG11    |
|       6 | PG12, PG13, PG14, PG15, SDA, SCL       |
|       7 | EMU, EXT_WAKE, PG                      |
|       8 | PF0, PF1, PH0, PH1, PH2                |
|       9 | EXTCLK                                 |
|      10 | PF2, PF3, PF4, PF5, PF6, PF7, PF8, PF9 |

## ESD SENSITIVITY

## ESD (electrostatic discharge) sensitive device.

<!-- image -->

Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PROCESSOR-TIMING SPECIFICATIONS

Specifications subject to change without notice.

## Clock and Reset Timing

Table 22 and Figure 7 describe clock and reset operations. Per the CCLK and SCLK timing specifications in Table 13 to Table 15, combinations of CLKIN and clock multipliers must not select core/peripheral clocks in excess of the processor's speed grade. Table 23 and Figure 8 describe clock out timing.

## Table 22. Clock and Reset Timing

| Parameter                | Min                              | Max         | Unit   |
|--------------------------|----------------------------------|-------------|--------|
| Timing Requirement       | s                                |             |        |
| f CKIN                   | CLKIN Frequency 1, 2, 3, 4       | 12 50       | MHz    |
| t CKINL                  | CLKIN Low Pulse 1                | 10          | ns     |
| t CKINH                  | CLKIN High Pulse 1               | 10          | ns     |
| t WRST                   | RESET Asserted Pulse Width Low 5 | 11 × t CKIN | ns     |
| Switching Characteristic | Switching Characteristic         |             |        |
| t BUFDLAY                | CLKIN to CLKBUF 6 Delay          | 11          | ns     |

Figure 7. Clock and Reset Timing

<!-- image -->

## ADSP-BF504

## Table 23. Clock Out Timing

|                           |                     | V DDEXT = 1.8V   | Max   | V DDEXT = 2.5   | V/3.3V   |      |
|---------------------------|---------------------|------------------|-------|-----------------|----------|------|
| Parameter                 |                     | Min              |       | Min             | Max      | Unit |
| Switching Characteristics |                     |                  |       |                 |          |      |
| t SCLK                    | CLKOUT 1 Period 2,3 | 10               |       | 10              |          | ns   |
| t SCLKH                   | CLKOUT 1 Width High | 4                |       | 4               |          | ns   |
| t SCLKL                   | CLKOUT 1 Width Low  | 4                |       | 4               |          | ns   |

Figure 8. Clock Out Timing

<!-- image -->

## Table 24. Power-Up Reset Timing

In Figure 9, V DD\_SUPPLIES is V DDINT and VDDEXT.

| Parameter          | Parameter                                                                                         | Min           | Max   | Unit   |
|--------------------|---------------------------------------------------------------------------------------------------|---------------|-------|--------|
| Timing Requirement | Timing Requirement                                                                                |               |       |        |
| t RST_IN_PWR       | RESET Deasserted after the V DDINT , V DDEXT , and CLKIN Pins are Stable and Within Specification | 3500 × t CKIN |       | ns     |

<!-- image -->

Figure 9. Power-Up Reset Timing

## Parallel Peripheral Interface Timing

Table 25, and Figure 10 through Figure 14 describe parallel peripheral interface operations.

## Table 25. Parallel Peripheral Interface Timing

| Parameter                                                   | V DDEXT = Min                                                                            | 1.8V Max        | V DDEXT = 2.5 V/3.3V Min Max   |     | Unit   |
|-------------------------------------------------------------|------------------------------------------------------------------------------------------|-----------------|--------------------------------|-----|--------|
| Timing Requirements                                         | Timing Requirements                                                                      |                 |                                |     |        |
| t PCLKW                                                     | PPI_CLK Width 1                                                                          | t SCLK -1.5     | t SCLK -1.5                    |     | ns     |
| t PCLK                                                      | PPI_CLK Period 1                                                                         | 2 × t SCLK -1.5 | 2 × t SCLK -1.5                |     | ns     |
| Timing Requirements-GP Input and Frame Capture Modes        | Timing Requirements-GP Input and Frame Capture Modes                                     |                 |                                |     |        |
| t PSUD                                                      | External Frame Sync Startup Delay 2                                                      | 4 × t PCLK      | 4 × t PCLK                     |     | ns     |
| t SFSPE                                                     | External Frame Sync Setup Before PPI_CLK (Nonsampling Edge for Rx, Sampling Edge for Tx) | 6.7             | 6.7                            |     | ns     |
| t HFSPE                                                     | External Frame Sync Hold After PPI_CLK                                                   | 1.5             | 1.5                            |     | ns     |
| t SDRPE                                                     | Receive Data Setup Before PPI_CLK                                                        | 4.1             | 3.5                            |     | ns     |
| t HDRPE                                                     | Receive Data Hold After PPI_CLK                                                          | 2               | 1.6                            |     | ns     |
| Switching Characteristics-GP Output and Frame Capture Modes | Switching Characteristics-GP Output and Frame Capture Modes                              |                 |                                |     |        |
| t DFSPE                                                     | Internal Frame Sync Delay After PPI_CLK                                                  | 8.7             |                                | 8.0 | ns     |
| t HOFSPE                                                    | Internal Frame Sync Hold After PPI_CLK                                                   | 1.7             | 1.7                            |     | ns     |
| t DDTPE                                                     | Transmit Data Delay After PPI_CLK                                                        | 8.7             |                                | 8.0 | ns     |
| t HDTPE                                                     | Transmit Data Hold After PPI_CLK                                                         | 2.3             | 1.9                            | ns  |        |

Figure 10. PPI with External Frame Sync Timing

<!-- image -->

Figure 11. PPI GP Rx Mode with External Frame Sync Timing

<!-- image -->

## ADSP-BF504

<!-- image -->

Figure 12. PPI GP Tx Mode with External Frame Sync Timing

Figure 13. PPI GP Rx Mode with Internal Frame Sync Timing

<!-- image -->

Figure 14. PPI GP Tx Mode with Internal Frame Sync Timing

<!-- image -->

## RSI Controller Timing

Table 26 and Figure 15 describe RSI Controller Timing. Table 27 and Figure 16 describe RSI controller (high speed) timing.

## Table 26. RSI Controller Timing

| Parameter                 | Parameter                                    | Min   | Max   | Unit   |
|---------------------------|----------------------------------------------|-------|-------|--------|
| Timing Requirements       | Timing Requirements                          |       |       |        |
| t ISU                     | Input Setup Time                             | 5.75  |       | ns     |
| t IH                      | Input Hold Time                              | 2     |       | ns     |
| Switching Characteristics | Switching Characteristics                    |       |       |        |
| f PP 1                    | Clock Frequency Data Transfer Mode           | 0     | 25    | MHz    |
| f OD                      | Clock Frequency Identification Mode          | 100 2 | 400   | kHz    |
| t WL                      | Clock Low Time                               | 10    |       | ns     |
| t WH                      | Clock High Time                              | 10    |       | ns     |
| t TLH                     | Clock Rise Time                              |       | 10    | ns     |
| t THL                     | Clock Fall Time                              |       | 10    | ns     |
| t ODLY                    | Output Delay Time During Data Transfer Mode  |       | 14    | ns     |
| t ODLY                    | Output Delay Time During Identification Mode |       | 50    | ns     |

Figure 15. RSI Controller Timing

<!-- image -->

## ADSP-BF504

Table 27. RSI Controller Timing (High Speed Mode)

| Parameter                 | Parameter                                   | Min   | Max   | Unit   |
|---------------------------|---------------------------------------------|-------|-------|--------|
| Timing Requirements       | Timing Requirements                         |       |       |        |
| t ISU                     | Input Setup Time                            | 5.75  |       | ns     |
| t IH                      | Input Hold Time                             | 2     |       | ns     |
| Switching Characteristics | Switching Characteristics                   |       |       |        |
| f PP 1                    | Clock Frequency Data Transfer Mode          | 0     | 50    | MHz    |
| t WL                      | Clock Low Time                              | 7     |       | ns     |
| t WH                      | Clock High Time                             | 7     |       | ns     |
| t TLH                     | Clock Rise Time                             |       | 3     | ns     |
| t THL                     | Clock Fall Time                             |       | 3     | ns     |
| t ODLY                    | Output Delay Time During Data Transfer Mode |       | 2.5   | ns     |
| t OH                      | Output Hold Time                            | 2.5   |       | ns     |

Figure 16. RSI Controller Timing (High-Speed Mode)

<!-- image -->

## Serial Ports

Table 28 through Table 31 and Figure 17 through Figure 19 describe serial port operations.

Table 28. Serial Ports-External Clock

|                           |                                                                        | V DDEXT = 1.8V   |      | V DDEXT = 2.5 V/3.3V   | V DDEXT = 2.5 V/3.3V   |
|---------------------------|------------------------------------------------------------------------|------------------|------|------------------------|------------------------|
| Parameter                 |                                                                        | Min              | Max  | Min                    | Unit                   |
| Timing Requirements       | Timing Requirements                                                    |                  |      |                        |                        |
| t SFSE                    | TFSx/RFSx Setup Before TSCLKx/RSCLKx 1                                 | 3.0              |      | 3.0                    | ns                     |
| t HFSE                    | TFSx/RFSx Hold After TSCLKx/RSCLKx 1                                   | 3.0              |      | 3.0                    | ns                     |
| t SDRE                    | Receive Data Setup Before RSCLKx 1,2                                   | 3.0              |      | 3.0                    | ns                     |
| t HDRE                    | Receive Data Hold After RSCLKx 1,2                                     | 3.5              |      | 3.0                    | ns                     |
| t SCLKEW                  | TSCLKx/RSCLKx Width                                                    | 4.5              |      | 4.5                    | ns                     |
| t SCLKE                   | TSCLKx/RSCLKx Period                                                   | 2 × t SCLK       |      | 2 × t SCLK             | ns                     |
| Switching Characteristics | Switching Characteristics                                              |                  |      |                        |                        |
| t DFSE                    | TFSx/RFSx Delay After TSCLKx/RSCLKx (Internally Generated TFSx/RFSx) 3 |                  | 10.0 |                        | ns                     |
| t HOFSE                   | TFSx/RFSx Hold After TSCLKx/RSCLKx (Internally Generated TFSx/RFSx) 3  | 0.0              |      | 0.0                    | ns                     |
| t DDTE                    | Transmit Data Delay After TSCLKx 3                                     |                  | 11.0 |                        | ns                     |
| t HDTE                    | Transmit Data Hold After TSCLKx 3                                      | 0.0              |      | 0.0                    | ns                     |

Table 29. Serial Ports-Internal Clock

|                           |                                                                        | V DDEXT = 1.8V   |     | V DDEXT = 2.5   | V/3.3V   |      |
|---------------------------|------------------------------------------------------------------------|------------------|-----|-----------------|----------|------|
| Parameter                 |                                                                        | Min              | Max | Min             | Max      | Unit |
| Timing Requirements       | Timing Requirements                                                    |                  |     |                 |          |      |
| t SFSI                    | TFSx/RFSx Setup Before TSCLKx/RSCLKx 1                                 | 11.0             |     | 9.6             |          | ns   |
| t HFSI                    | TFSx/RFSx Hold After TSCLKx/RSCLKx 1                                   | -1.5             |     | -1.5            |          | ns   |
| t SDRI                    | Receive Data Setup Before RSCLKx 1,2                                   | 11.5             |     | 10.0            |          | ns   |
| t HDRI                    | Receive Data Hold After RSCLKx 1,2                                     | -1.5             |     | -1.5            |          | ns   |
| Switching Characteristics | Switching Characteristics                                              |                  |     |                 |          |      |
| t SCLKIW                  | TSCLKx/RSCLKx Width                                                    | 7.0              |     | 8.0             |          | ns   |
| t DFSI                    | TFSx/RFSx Delay After TSCLKx/RSCLKx (Internally Generated TFSx/RFSx) 3 |                  | 4.0 |                 | 3.0      | ns   |
| t HOFSI                   | TFSx/RFSx Hold After TSCLKx/RSCLKx (Internally Generated TFSx/RFSx) 3  | -2.0             |     | -1.0            |          | ns   |
| t DDTI                    | Transmit Data Delay After TSCLKx 3                                     |                  | 4.0 |                 | 3.0      | ns   |
| t HDTI                    | Transmit Data Hold After TSCLKx 3                                      | -1.8             |     | -1.5            |          | ns   |

## ADSP-BF504

Figure 17. Serial Ports

<!-- image -->

## Table 30. Serial Ports-Enable and Three-State

|                           | V DDEXT =                                     | 1.8V      | V DDEXT = 2.5 V/3.3V   |      |
|---------------------------|-----------------------------------------------|-----------|------------------------|------|
| Parameter                 | Min                                           | Max       | Max                    | Unit |
| Switching Characteristics |                                               |           |                        |      |
| t DTENE Data Enable       | Delay from External TSCLKx 1 0.0              |           |                        | ns   |
| t DDTTE Data Disable      | Delay from External TSCLKx 1                  | t SCLK +1 | t SCLK +1              | ns   |
| t DTENI                   | Data Enable Delay from Internal TSCLKx 1 -2.0 |           |                        | ns   |
| t DDTTI Data Disable      | Delay from Internal TSCLKx 1                  | t SCLK +1 | t SCLK +1              | ns   |

Figure 18. Serial Ports - Enable and Three-State

<!-- image -->

## Table 31. Serial Ports - External Late Frame Sync

| Parameter                 | Min                                                                                    | V DDEXT = 1.8V Max   | V DDEXT = 2.5 V/3.3V Max   | Unit   |
|---------------------------|----------------------------------------------------------------------------------------|----------------------|----------------------------|--------|
| Switching Characteristics |                                                                                        |                      |                            |        |
| t DDTLFSE                 | Data Delay from Late External TFSx or External RFSx in Multi-channelModeWithMFD=0 1, 2 | 12.0                 | 10.0                       | ns     |
| t DTENLFSE                | DataEnablefromExternalRFSxinMulti-channelModeWith MFD=0 1, 2 0.0                       |                      |                            | ns     |

Figure 19. Serial Ports - External Late Frame Sync

<!-- image -->

## ADSP-BF504

## ADSP-BF504

## Serial Peripheral Interface (SPI) Port-Master Timing

Table 32 and Figure 20 describe SPI port master operations.

## Table 32. Serial Peripheral Interface (SPI) Port-Master Timing

Figure 20. Serial Peripheral Interface (SPI) Port-Master Timing

|                           |                                                 | V DDEXT = 1.8V   |     | V DDEXT = 2.5   | V/3.3V   |      |
|---------------------------|-------------------------------------------------|------------------|-----|-----------------|----------|------|
| Parameter                 |                                                 | Min              | Max | Min             | Max      | Unit |
| Timing Requirements       | Timing Requirements                             |                  |     |                 |          |      |
| t SSPIDM                  | Data Input Valid to SCK Edge (Data Input Setup) | 11.6             |     | 9.6             |          | ns   |
| t HSPIDM                  | SCK Sampling Edge to Data Input Invalid         | -1.5             |     | -1.5            | ns       |      |
| Switching Characteristics | Switching Characteristics                       |                  |     |                 |          |      |
| t SDSCIM                  | SPISELx low to First SCK Edge                   | 2 × t SCLK -1.5  |     | 2 × t SCLK -1.5 |          | ns   |
| t SPICHM                  | Serial Clock High Period                        | 2 × t SCLK -1.5  |     | 2 × t SCLK -1.5 |          | ns   |
| t SPICLM                  | Serial Clock Low Period                         | 2 × t SCLK -1.5  |     | 2 × t SCLK -1.5 |          | ns   |
| t SPICLK                  | Serial Clock Period                             | 4 × t SCLK -1.5  |     | 4 × t SCLK -1.5 |          | ns   |
| t HDSM                    | Last SCK Edge to SPISELx High                   | 2 × t SCLK -2.0  |     | 2 × t SCLK -1.5 |          | ns   |
| t SPITDM                  | Sequential Transfer Delay                       | 2 × t SCLK -1.5  |     | 2 × t SCLK -1.5 |          | ns   |
| t DDSPIDM                 | SCK Edge to Data Out Valid (Data Out Delay)     | 0                | 6   | 0               | 6        | ns   |
| t HDSPIDM                 | SCK Edge to Data Out Invalid (Data Out Hold)    | -1.0             |     | -1.0            | ns       |      |

<!-- image -->

## Serial Peripheral Interface (SPI) Port-Slave Timing

Table 33 and Figure 21 describe SPI port slave operations.

## Table 33. Serial Peripheral Interface (SPI) Port-Slave Timing

Figure 21. Serial Peripheral Interface (SPI) Port-Slave Timing

| Parameter                 | V DDEXT = Min                                   | 1.8V Max        |      | V DDEXT = 2.5 V/3.3V Min Max   |      | Unit   |
|---------------------------|-------------------------------------------------|-----------------|------|--------------------------------|------|--------|
| Timing Requirements       | Timing Requirements                             |                 |      |                                |      |        |
| t SPICHS                  | Serial Clock High Period                        | 2 × t SCLK -1.5 |      | 2 × t SCLK -1.5                |      | ns     |
| t SPICLS                  | Serial Clock Low Period                         | 2 × t SCLK -1.5 |      | 2 × t SCLK -1.5                |      | ns     |
| t SPICLK                  | Serial Clock Period                             | 4 × t SCLK      |      | 4 × t SCLK                     |      | ns     |
| t HDS                     | Last SCK Edge to SPISS Not Asserted             | 2 × t SCLK -1.5 |      | 2 × t SCLK -1.5                |      | ns     |
| t SPITDS                  | Sequential Transfer Delay                       | 2 × t SCLK -1.5 |      | 2 × t SCLK -1.5                |      | ns     |
| t SDSCI                   | SPISS Assertion to First SCK Edge               | 2 × t SCLK -1.5 |      | 2 × t SCLK -1.5                |      | ns     |
| t SSPID                   | Data Input Valid to SCK Edge (Data Input Setup) | 1.6             |      | 1.6                            |      | ns     |
| t HSPID                   | SCK Sampling Edge to Data Input Invalid         | 2.0             |      | 1.6                            |      | ns     |
| Switching Characteristics | Switching Characteristics                       |                 |      |                                |      |        |
| t DSOE                    | SPISS Assertion to Data Out Active              | 0               | 12.0 | 0                              | 10.3 | ns     |
| t DSDHI                   | SPISS Deassertion to Data High Impedance        | 0               | 11.0 | 0                              | 9.0  | ns     |
| t DDSPID                  | SCK Edge to Data Out Valid (Data Out Delay)     |                 | 10   |                                | 10   | ns     |
| t HDSPID                  | SCK Edge to Data Out Invalid (Data Out Hold)    | 0               |      | 0                              |      | ns     |

<!-- image -->

## ADSP-BF504

## Universal Asynchronous Receiver-Transmitter (UART) Ports-Receive and Transmit Timing

The UART ports receive and transmit operations are described in the ADSP-BF50x Hardware Reference Manual .

## General-Purpose Port Timing

Table 34 and Figure 22 describe general-purpose port operations.

## Table 34. General-Purpose Port Timing

Figure 22. General-Purpose Port Timing

|                          | V DDEXT =   | 1.8V   | V DDEXT = 2.5 V/3.3V   | V DDEXT = 2.5 V/3.3V   |      |
|--------------------------|-------------|--------|------------------------|------------------------|------|
| Parameter                | Min         | Max    | Min                    | Max                    | Unit |
| Timing Requirement       |             |        |                        |                        |      |
| t WFI General-Purpose    | t SCLK + 1  |        | t SCLK + 1             | ns                     |      |
| Switching Characteristic |             |        |                        |                        |      |
| t GPOD General-Purpose   | 0           | 11.0   | 0                      | 8.9                    | ns   |

<!-- image -->

## Timer Cycle Timing

Table 35 and Figure 23 describe timer expired operations. The input signal is asynchronous in 'width capture mode' and 'external clock mode' and has an absolute maximum input frequency of (fSCLK/2) MHz.

## Table 35. Timer Cycle Timing

| Parameter                 | V DDEXT =                                                | 1.8V Min Max     |                    | V DDEXT = 2.5 V/3.3V Min   | Max                | Unit   |
|---------------------------|----------------------------------------------------------|------------------|--------------------|----------------------------|--------------------|--------|
| Timing Requirements       | Timing Requirements                                      |                  |                    |                            |                    |        |
| t WL                      | Timer Pulse Width Input Low (Measured In SCLK Cycles) 1  | 1 × t SCLK       |                    | 1 × t SCLK                 |                    | ns     |
| t WH                      | Timer Pulse Width Input High (Measured In SCLK Cycles) 1 | 1 × t SCLK       |                    | 1 × t SCLK                 |                    | ns     |
| t TIS                     | Timer Input Setup Time Before CLKOUT Low 2               | 10               |                    | 8                          |                    | ns     |
| t TIH                     | Timer Input Hold Time After CLKOUT Low 2                 | -2               |                    | -2                         |                    | ns     |
| Switching Characteristics | Switching Characteristics                                |                  |                    |                            |                    |        |
| t HTO                     | Timer Pulse Width Output (Measured In SCLK Cycles)       | 1 × t SCLK - 2.0 | (2 32 -1) × t SCLK | 1 × t SCLK - 1.5           | (2 32 -1) × t SCLK | ns     |
| t TOD                     | Timer Output Update Delay After CLKOUT High              |                  | 6                  |                            | 6                  | ns     |

Figure 23. Timer Cycle Timing

<!-- image -->

## ADSP-BF504

## Timer Clock Timing

Table 36 and Figure 24 describe timer clock timing.

## Table 36. Timer Clock Timing

Figure 24. Timer Clock Timing

| Parameter                                      | V DDEXT = 1.8V   | V DDEXT = 2.5 V/3.3V   | V DDEXT = 2.5 V/3.3V   | Unit   |
|------------------------------------------------|------------------|------------------------|------------------------|--------|
|                                                | Max              | Min                    | Max                    |        |
| Switching Characteristic                       |                  |                        |                        |        |
| t TODP Timer Output Update Delay After PPI_CLK | 12.0             |                        | 12.0                   | ns     |

<!-- image -->

## Up/Down Counter/Rotary Encoder Timing

## Table 37. Up/Down Counter/Rotary Encoder Timing

| Parameter           |                                                  | V DDEXT = 1.8V Min Max   | V DDEXT = 2.5 V/3.3V Min Max   |        | Unit   |
|---------------------|--------------------------------------------------|--------------------------|--------------------------------|--------|--------|
| Timing Requirements |                                                  |                          |                                |        |        |
| t                   | Up/Down Counter/Rotary Encoder Input Pulse Width | t SCLK + 1               | t SCLK + 1                     | WCOUNT | ns     |
| t CIS               | Counter Input Setup Time Before CLKOUT High 1    | 9.0                      | 7.0                            |        | ns     |
| t                   | Counter Input Hold Time After CLKOUT High 1      | 0                        | 0                              | CIH    | ns     |

Figure 25. Up/Down Counter/Rotary Encoder Timing

<!-- image -->

## ADSP-BF504

## PROCESSOR-OUTPUT DRIVE CURRENTS

Figure 29 through Figure 37 show typical current-voltage characteristics for the output drivers of the ADSP-BF504 processors.

<!-- image -->

Figure 29. Driver Type B Current (3.3 V V DDEXT )

Figure 30. Driver Type B Current (2.5 V V DDEXT )

<!-- image -->

Figure 31. Driver Type B Current (1.8 V V DDEXT )

<!-- image -->

The curves represent the current drive capability of the output drivers. See Table 11 for information about which driver type corresponds to a particular pin.

<!-- image -->

Figure 32. Driver Type C Current (3.3 V V DDEXT )

Figure 33. Drive Type C Current (2.5 V V DDEXT )

<!-- image -->

Figure 34. Driver Type C Current (1.8 V V DDEXT )

<!-- image -->

Figure 35. Driver Type D Current (3.3 V V DDEXT )

<!-- image -->

Figure 36. Driver Type D Current (2.5 V V DDEXT )

<!-- image -->

2

Figure 37. Driver Type D Current (1.8 V V DDEXT )

<!-- image -->

## ADSP-BF504

## PROCESSOR-TEST CONDITIONS

All timing parameters appearing in this data sheet were measured under the conditions described in this section. Figure 38 shows the measurement point for AC measurements (except output enable/disable). The measurement point V MEAS is V DDEXT /2 for V DDEXT (nominal) = 1.8 V/2.5 V/3.3 V.

Figure 38. Voltage Reference Levels for AC Measurements (Except Output Enable/Disable)

<!-- image -->

## Output Enable Time Measurement

Output pins are considered to be enabled when they have made a transition from a high impedance state to the point when they start driving.

The output enable time t ENA is the interval from the point when a reference signal reaches a high or low voltage level to the point when the output starts driving as shown on the right side of Figure 39.

<!-- image -->

HIGH IMPEDANCE STATE

Figure 39. Output Enable/Disable

The time t ENA\_MEASURED is the interval, from when the reference signal switches, to when the output voltage reaches V TRIP (high) or VTRIP (low). For VDDEXT (nominal) = 1.8 V, VTRIP (high) is 1.05 V, and VTRIP (low) is 0.75 V. For VDDEXT (nominal) = 2.5 V, VTRIP (high) is 1.5 V and VTRIP (low) is 1.0 V. For VDDEXT (nominal) = 3.3 V, VTRIP (high) is 1.9 V, and V TRIP (low) is 1.4 V. Time t TRIP is the interval from when the output starts driving to when the output reaches the V TRIP (high) or V TRIP (low) trip voltage.

Time t ENA is calculated as shown in the equation:

<!-- formula-not-decoded -->

If multiple pins are enabled, the measurement value is that of the first pin to start driving.

## ADSP-BF504

## Output Disable Time Measurement

Output pins are considered to be disabled when they stop driving, go into a high impedance state, and start to decay from their output high or low voltage. The output disable time t DIS is the difference between t DIS\_MEASURED and t DECAY as shown on the left side of Figure 39.

<!-- formula-not-decoded -->

The time for the voltage on the bus to decay by  V is dependent on the capacitive load C L and the load current I L . This decay time can be approximated by the equation:

<!-- formula-not-decoded -->

The time t DECAY is calculated with test loads C L and I L , and with  V equal to 0.25 V for V DDEXT (nominal) = 2.5 V/3.3 V and 0.15 V for VDDEXT (nominal) = 1.8 V.

The time t DIS\_MEASURED is the interval from when the reference signal switches, to when the output voltage decays  V from the measured output high or output low voltage.

## Example System Hold Time Calculation

To determine the data output hold time in a particular system, first calculate t DECAY using the equation given above. Choose  V to be the difference between the processor's output voltage and the input threshold for the device requiring the hold time. C L is the total bus capacitance (per data line), and I L is the total leakage or three-state current (per data line). The hold time will be t DECAY plus the various output disable times as specified in the Processor-Timing Specifications.

## Capacitive Loading

Output delays and holds are based on standard capacitive loads of an average of 6 pF on all pins (see Figure 40). V LOAD is equal to (VDDEXT) /2. The graphs of Figure 41 through Figure 46 show how output rise time varies with capacitance. The delay and hold specifications given should be derated by a factor derived from these figures. The graphs in these figures may not be linear outside the ranges shown.

<!-- image -->

NOTES:

THE WORST CASE TRANSMISSION LINE DELAY IS SHOWN AND CAN BE USED FOR THE OUTPUT TIMING ANALYSIS TO REFELECT THE TRANSMISSION LINE EFFECT AND MUST BE CONSIDERED. THE TRANSMISSION LINE (TD), IS FOR LOAD ONLY AND DOES NOT AFFECT THE DATA SHEET TIMING SPECIFICATIONS.

ANALOG DEVICES RECOMMENDS USING THE IBIS MODEL TIMING FOR A GIVEN SYSTEM REQUIREMENT. IF NECESSARY, A SYSTEM MAY INCORPORATE EXTERNAL DRIVERS TO COMPENSATE FOR ANY TIMING DIFFERENCES.

Figure 40. Equivalent Device Loading for AC Measurements (Includes All Fixtures)

<!-- image -->

Figure 41. Driver Type B Typical Rise and Fall Times (10%-90%) vs. Load Capacitance (1.8 V VDDEXT)

Figure 42. Driver Type B Typical Rise and Fall Times (10%-90%) vs. Load Capacitance (2.5 V VDDEXT)

<!-- image -->

Figure 43. Driver Type B Typical Rise and Fall Times (10%-90%) vs. Load Capacitance (3.3 V VDDEXT)

<!-- image -->

<!-- image -->

Figure 44. Driver Type C Typical Rise and Fall Times (10%-90%) vs. Load Capacitance (1.8 V VDDEXT)

Figure 45. Driver Type C Typical Rise and Fall Times (10%-90%) vs. Load Capacitance (2.5 V VDDEXT)

<!-- image -->

Figure 46. Driver Type C Typical Rise and Fall Times (10%-90%) vs. Load Capacitance (3.3 V VDDEXT)

<!-- image -->

## PROCESSOR-ENVIRONMENTAL CONDITIONS

To determine the junction temperature on the application printed circuit board use:

<!-- formula-not-decoded -->

where: TJ = junction temperature (°C).

TCASE = case temperature (°C) measured by customer at top center of package.

<!-- formula-not-decoded -->

PD = power dissipation (see Total Power Dissipation for the method to calculate PD).

Values of  JA are provided for package comparison and printed circuit board design considerations.  JA can be used for a first order approximation of TJ by the equation:

<!-- formula-not-decoded -->

where TA = ambient temperature (°C).

Values of  JC are provided for package comparison and printed circuit board design considerations when an external heat sink is required.

Values of  JB are provided for package comparison and printed circuit board design considerations.

In Table 41, airflow measurements comply with JEDEC standards JESD51-2 and JESD51-6, and the junction-to-board measurement complies with JESD51-8. The junction-to-case measurement complies with MIL-STD-883 (Method 1012.1). All measurements use a 2S2P JEDEC test board.

Table 41. Thermal Characteristics (88-Lead LFCSP)

| Parameter   | Condition             |   Typical | Unit   |
|-------------|-----------------------|-----------|--------|
|  JA        | 0 linear m/s air flow |     26.2  | °C/W   |
|  JMA       | 1 linear m/s air flow |     23.7  | °C/W   |
|  JMA       | 2 linear m/s air flow |     22.9  | °C/W   |
|  JB        |                       |     16    | °C/W   |
|  JC        |                       |      9.8  | °C/W   |
|  JT        | 0 linear m/s air flow |      0.21 | °C/W   |
|  JT        | 1 linear m/s air flow |      0.36 | °C/W   |
|  JT        | 2 linear m/s air flow |      0.43 | °C/W   |

## ADSP-BF504

## 88-LEAD LFCSP LEAD ASSIGNMENT

Table 42 lists the LFCSP by lead number.

Table 42. 88-Lead LFCSP Lead Assignment (Numerical by Lead Number)

| Lead No.   | Signal   | Lead No.   | Signal   | Lead No.   | Signal   | Lead No.   | Signal   |
|------------|----------|------------|----------|------------|----------|------------|----------|
| 1          | NMI      | 23         | TDI      | 45         | NC 1     | 67         | GND      |
| 2          | RESET    | 24         | TCK      | 46         | NC 1     | 68         | CLKIN    |
| 3          | GND      | 25         | TMS      | 47         | NC 1     | 69         | XTAL     |
| 4          | PF10     | 26         | TRST     | 48         | NC 1     | 70         | V DDEXT  |
| 5          | V DDEXT  | 27         | TDO      | 49         | BMODE2   | 71         | PH0      |
| 6          | PF11     | 28         | PG5      | 50         | BMODE1   | 72         | PH1      |
| 7          | GND      | 29         | PG6      | 51         | BMODE0   | 73         | PH2      |
| 8          | PF12     | 30         | PG7      | 52         | V DDEXT  | 74         | V DDEXT  |
| 9          | PF13     | 31         | V DDEXT  | 53         | V DDINT  | 75         | V DDINT  |
| 10         | V DDEXT  | 32         | V DDINT  | 54         | V DDEXT  | 76         | PF0      |
| 11         | PF14     | 33         | PG8      | 55         | GND      | 77         | PF1      |
| 12         | PF15     | 34         | PG9      | 56         | V DDEXT  | 78         | EXTCLK   |
| 13         | V DDEXT  | 35         | PG10     | 57         | V DDINT  | 79         | V DDEXT  |
| 14         | V DDINT  | 36         | PG11     | 58         | V DDEXT  | 80         | PF2      |
| 15         | GND      | 37         | PG12     | 59         | V DDEXT  | 81         | PF3      |
| 16         | V DDEXT  | 38         | PG13     | 60         | EMU      | 82         | PF4      |
| 17         | PG0      | 39         | PG14     | 61         | GND      | 83         | PF5      |
| 18         | PG1      | 40         | PG15     | 62         | EXT_WAKE | 84         | V DDEXT  |
| 19         | PG2      | 41         | V DDEXT  | 63         | PG       | 85         | PF6      |
| 20         | V DDEXT  | 42         | V DDINT  | 64         | NC 1     | 86         | PF7      |
| 21         | PG3      | 43         | SDA      | 65         | NC 1     | 87         | PF8      |
| 22         | PG4      | 44         | SCL      | 66         | NC 1     | 88         | PF9      |
|            |          |            |          |            |          | 89 *       | GND      |

Figure 47 shows the top view of the LFCSP pin configuration.

Figure 47. 88-Lead LFCSP Lead Configuration (Top View)

<!-- image -->

## ADSP-BF504

Figure 48 shows the bottom view of the LFCSP lead configuration.

Figure 48. 88-Lead LFCSP Lead Configuration (Bottom View)

<!-- image -->

## ADSP-BF504

## OUTLINE DIMENSIONS

Dimensions in Figure 49 are shown in millimeters.

<!-- image -->

Dimensions shown in millimeters

1 For information relating to the CP-88-5 package's exposed pad, see the table endnote on Page 48.

## ORDERING GUIDE

| Model 1          | Temperature Range 2,3   | Processor Instruction Rate (Maximum)   | Package Description   | Package Option   |
|------------------|-------------------------|----------------------------------------|-----------------------|------------------|
| ADSP-BF504BCPZ-4 | -40°C to +85°C          | 400 MHz                                | 88-Lead LFCSP_VQ      | CP-88-5          |
| ADSP-BF504KCPZ-4 | 0°C to +70°C            | 400 MHz                                | 88-Lead LFCSP_VQ      | CP-88-5          |

<!-- image -->