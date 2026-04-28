<!-- lastmod 2025-09-05 -->
<!-- image -->

## KEY FEATURES

Up to 600 MHz, 1.67 ns instruction cycle rate 24Mbits of internal-on-chip-DRAM memory

- 25 mm × 25 mm (576-ball) thermally enhanced ball grid array package
- Dual-computation blocks-each containing an ALU, a multiplier, a shifter, a register file, and a communications logic unit (CLU)
- Dual-integer ALUs, providing data addressing and pointer manipulation
- Integrated I/O includes 14-channel DMA controller, external port, four link ports, SDRAM controller, programmable flag pins, two timers, and timer expired pin for system integration
- 1149.1 IEEE-compliant JTAG test access port for on-chip emulation
- Single-precision IEEE 32-bit and extended-precision 40-bit floating-point data formats and 8-, 16-, 32-, and 64-bit fixed-point data formats

<!-- image -->

Performs exceptionally well on DSP algorithm and I/O benchmarks (see benchmarks in Table 1) Supports low overhead DMA transfers between internal memory, external memory, memory-mapped peripherals, link ports, host processors, and other (multiprocessor) DSPs Eases DSP programming through extremely flexible instruction set and high-level-language-friendly DSP architecture Enables scalable multiprocessing systems with low communications overhead Provides on-chip arbitration for glueless multiprocessing OBSOLETE

Figure 1. Functional Block Diagram

TigerSHARC and the TigerSHARC logo are registered trademarks of Analog Devices, Inc.

Rev. C

Information  furnished  by  Analog  Devices  is  believed  to  be  accurate  and  reliable. However,  no  responsibility  is  assumed  by  Analog  Devices  for  its  use,  nor  for  any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## KEY BENEFITS

- Provides high performance static superscalar DSP operations, optimized for telecommunications infrastructure and other large, demanding multiprocessor DSP applications

## TigerSHARC ® Embedded Processor

ADSP-TS201S

## ADSP-TS201S

## TABLE OF CONTENTS

OBSOLETE

| General Description . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                   | . 3   |
|---------------------------------------------------------------------------------------------------------------------------------------------------------|-------|
| Dual Compute Blocks . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                             | . 4   |
| Data Alignment Buffer (DAB) . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                         | . 4   |
| Dual Integer ALU (IALU) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                   | . 4   |
| Program Sequencer . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                         | . 5   |
| Interrupt Controller . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                              | . 5   |
| Flexible Instruction Set . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                | . 5   |
| DSP Memory . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                | . 5   |
| External Port (Off-Chip Memory/Peripherals Interface) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | . 6   |
| Host Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                    | . 7   |
| Multiprocessor Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                    | . 7   |
| SDRAMController . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                 | . 7   |
| EPROM Interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                             | . 7   |
| DMAController . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                     | . 7   |
| Link Ports (LVDS) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                       | . 9   |
| Timer and General-Purpose I/O . . . . . . . . . . . . . . . . . . . . . . .                                                                             | . 9   |
| Reset and Booting . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                     | . 9   |
| Clock Domains . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                   | . 9   |
| Power Domains . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                   | 10    |
| Filtering Reference Voltage and Clocks . . . . . . . . . . . . . .                                                                                      | 10    |
| Development Tools . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                         | 10    |
| Evaluation Kit . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                              | 11    |
| Designing an Emulator-Compatible DSP Board (Target) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                             | 11    |
| Additional Information . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                              | 11    |
| Pin Function Descriptions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                             | 12    |
| Strap Pin Function Descriptions . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                     | 20    |
| ADSP-TS201S-Specifications . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                      | 21    |
| Operating Conditions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                            | 21    |
| Electrical Characteristics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                            | 22    |
| Package Information . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                           | 23    |
| Absolute Maximum Ratings . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                        | 23    |
| ESD Sensitivity . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                               | 23    |
| Timing Specifications . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                           | 24    |
| General AC Timing . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                               | 24    |
| Link Port Low Voltage, Differential-Signal (LVDS) Electrical Characteristics, and Timing . . . . . . . . . .                                            | 30    |
| Link Port-Data Out Timing . . . . . . . . . . . . . . . . . . . . .                                                                                     | 31    |
| Link Port-Data In Timing . . . . . . . . . . . . . . . . . . . . . . .                                                                                  | 34    |
| Output Drive Currents . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                             | 36    |

| Test Conditions . . . . . . . . . . . . . . . . . . . . . . . .      | 37   |
|----------------------------------------------------------------------|------|
| Output Disable Time . . . . . . . . . . . . . . .                    | 37   |
| Output Enable Time . . . . . . . . . . . . . . .                     | 38   |
| Capacitive Loading . . . . . . . . . . . . . . . . .                 | 38   |
| Environmental Conditions . . . . . . . . . .                         | 40   |
| Thermal Characteristics . . . . . . . . . . .                        | 40   |
| 576-Ball BGA_ED Pin Configurations                                   | 41   |
| Outline Dimensions . . . . . . . . . . . . . . . . . . . . . .       | 45   |
| Surface Mount Design . . . . . . . . . . . . . . . .                 | 45   |
| Ordering Guide . . . . . . . . . . . . . . . . . . . . . . . . . . . | 46   |
| REVISION HISTORY                                                     |      |
| 12/06-Rev. B to Rev.C                                                |      |
| Applied Corrections to: Figure 7, SCLK_VREF Filtering Scheme         | 10   |
| Operating Conditions . . . . . . . . . . . . . . . . .               | 21   |
| Added On-Chip DRAMRefresh . . .                                      | 27   |
| Ordering Guide . . . . . . . . . . . . . . . . . . . . . . . .       | 46   |

## GENERAL DESCRIPTION

The ADSP-TS201S TigerSHARC processor is an ultrahigh performance, static superscalar processor optimized for large signal processing tasks and communications infrastructure. The DSP combines very wide memory widths with dual computation blocks-supporting floating-point (IEEE 32-bit and extended precision 40-bit) and fixed-point (8-, 16-, 32-, and 64-bit) processing-to set a new standard of performance for digital signal processors. The TigerSHARC static superscalar architecture lets the DSP execute up to four instructions each cycle, performing 24 fixed-point (16-bit) operations or six floating-point operations.

Four independent 128-bit wide internal data buses, each connecting to the six 4M bit memory banks, enable quad-word data, instruction, and I/O access and provide 33.6G bytes per second of internal memory bandwidth. Operating at 600 MHz, the ADSP-TS201S processor's core has a 1.67 ns instruction cycle time. Using its single-instruction, multiple-data (SIMD) features, the ADSP-TS201S processor can perform 4.8 billion, 40-bit MACS or 1.2 billion, 80-bit MACS per second. Table 1 shows the DSP's performance benchmarks.

## Table 1. General-Purpose Algorithm Benchmarks at 600 MHz

| Benchmark                                                | Speed                                                 | Clock Cycles                                          |
|----------------------------------------------------------|-------------------------------------------------------|-------------------------------------------------------|
| 32-bit algorithm, 1.2 billion MACS/s peak performance    | 32-bit algorithm, 1.2 billion MACS/s peak performance | 32-bit algorithm, 1.2 billion MACS/s peak performance |
| 1K point complex FFT 1 (Radix2)                          | 15.7 µs                                               | 9419                                                  |
| 64K point complex FFT 1 (Radix2)                         | 2.33 ms                                               | 1397544                                               |
| FIR filter (per real tap)                                | 0.83 ns                                               | 0.5                                                   |
| [8 × 8][8 × 8] matrix multiply (complex, floating-point) | 2.3 µs                                                | 1399                                                  |
| 16-bit algorithm, 4.8 billion MACS/s peak performance    | 16-bit algorithm, 4.8 billion MACS/s peak performance | 16-bit algorithm, 4.8 billion MACS/s peak performance |
| 256 point complex FFT 1 (Radix 2)                        | 0.975 µs                                              | 585                                                   |
| I/O DMAtransfer rate                                     | I/O DMAtransfer rate                                  | I/O DMAtransfer rate                                  |
| External port                                            | 1G bytes/s                                            | n/a                                                   |
| Link ports (each)                                        | 1G bytes/s                                            | n/a                                                   |

The ADSP-TS201S processor is code compatible with the other TigerSHARC processors.

The Functional Block Diagram on Page 1 shows the ADSP-TS201S processor's architectural blocks. These blocks include:

- An interrupt controller that supports hardware and software interrupts, supports level- or edge-triggers, and supports prioritized, nested interrupts
- Four 128-bit internal data buses, each connecting to the six 4M bit memory banks
- On-chip DRAM (24M bit)
- An external port that provides the interface to host processors, multiprocessing space (DSPs), off-chip memorymapped peripherals, and external SRAM and SDRAM

Figure 2. ADSP-TS201S Single-Processor System with External SDRAM

<!-- image -->

· A 14-channel DMA controller · Four full-duplex LVDS link ports · Two 64-bit interval timers and timer expired pin · An 1149.1 IEEE-compliant JTAG test access port for onchip emulation Figure 2 on Page 3 shows a typical single-processor system with external SRAM and SDRAM. Figure 4 on Page 8 shows a typical multiprocessor system. OBSOLETE

- Dual compute blocks, each consisting of an ALU, multiplier, 64-bit shifter, 128-bit CLU, and 32-word register file and associated data alignment buffers (DABs)
- Dual integer ALUs (IALUs), each with its own 31-word register file for data addressing and a status register
- A program sequencer with instruction alignment buffer (IAB) and branch target buffer (BTB)

## ADSP-TS201S

The TigerSHARC DSP uses a Static Superscalar TM † architecture. This architecture is superscalar in that the ADSP-TS201S processor's core can execute simultaneously from one to four 32-bit instructions encoded in a very large instruction word (VLIW) instruction line using the DSP's dual compute blocks. Because the DSP does not perform instruction re-ordering at runtimethe programmer selects which operations will execute in parallel prior to runtime-the order of instructions is static.

With few exceptions, an instruction line, whether it contains one, two, three, or four 32-bit instructions, executes with a throughput of one cycle in a 10-deep processor pipeline.

For optimal DSP program execution, programmers must follow the DSP's set of instruction parallelism rules when encoding an instruction line. In general, the selection of instructions that the DSP can execute in parallel each cycle depends on the instruction line resources each instruction requires and on the source and destination registers used in the instructions. The programmer has direct control of three core components-the IALUs, the compute blocks, and the program sequencer.

The ADSP-TS201S processor, in most cases, has a two-cycle execution pipeline that is fully interlocked, so-whenever a computation result is unavailable for another operation dependent on it-the DSP automatically inserts one or more stall cycles as needed. Efficient programming with dependency-free instructions can eliminate most computational and memory transfer data dependencies.

In addition, the ADSP-TS201S processor supports SIMD operations two ways-SIMD compute blocks and SIMD computations. The programmer can load both compute blocks with the same data (broadcast distribution) or different data (merged distribution).

## DUAL COMPUTE BLOCKS

The ADSP-TS201S processor has compute blocks that can execute computations either independently or together as a singleinstruction, multiple-data (SIMD) engine. The DSP can issue up to two compute instructions per compute block each cycle, instructing the ALU, multiplier, shifter, or CLU to perform independent, simultaneous operations. Each compute block can execute eight 8-bit, four 16-bit, two 32-bit, or one 64-bit SIMD computations in parallel with the operation in the other block. These computation units support IEEE 32-bit single-precision floating-point, extended-precision 40-bit floating point, and 8-, 16-, 32-, and 64-bit fixed-point processing.

The compute blocks are referred to as X and Y in assembly syntax, and each block contains four computational units-an ALU, a multiplier, a 64-bit shifter, a 128-bit CLU-and a 32word register file.

storing intermediate results. Instructions can access the registers in the register file individually (word-aligned), in sets of two (dual-aligned), or in sets of four (quad-aligned).

- ALU-the ALU performs a standard set of arithmetic operations in both fixed- and floating-point formats. It also performs logic operations.
- Multiplier-the multiplier performs both fixed- and floating-point multiplication and fixed-point multiply and accumulate.

· Shifter-the 64-bit shifter performs logical and arithmetic shifts, bit and bit stream manipulation, and field deposit and extraction operations. · Communications Logic Unit (CLU)-this 128-bit unit provides trellis decoding (for example, Viterbi and Turbo decoders) and executes complex correlations for CDMA communication applications (for example, chip-rate and symbol-rate functions). Using these features, the compute blocks can: · Provide 8 MACS per cycle peak and 7.1 MACS per cycle sustained 16-bit performance and provide 2 MACS per cycle peak and 1.8 MACS per cycle sustained 32-bit performance (based on FIR) · Execute six single-precision floating-point or execute 24 fixed-point (16-bit) operations per cycle, providing 3.6G FLOPS or 14.4G/s regular operations performance at 600 MHz · Perform two complex 16-bit MACS per cycle · Execute eight trellis butterflies in one cycle DATA ALIGNMENT BUFFER (DAB) The DAB is a quad-word FIFO that enables loading of quadword data from nonaligned addresses. Normally, load instructions must be aligned to their data size so that quad words are loaded from a quad-aligned address. Using the DAB significantly improves the efficiency of some applications, such as FIR filters. DUAL INTEGER ALU (IALU) The ADSP-TS201S processor has two IALUs that provide powerful address generation capabilities and perform many generalpurpose integer operations. The IALUs are referred to as J and K in assembly syntax and have the following features: · Provide memory addresses for data and update pointers · Support circular buffering and bit-reverse addressing OBSOLETE

- Register File-each compute block has a multiported 32word, fully orthogonal register file used for transferring data between the computation units and data buses and for

† Static Superscalar is a trademark of Analog Devices, Inc.

- Perform general-purpose integer operations, increasing programming flexibility
- Include a 31-word register file for each IALU

As address generators, the IALUs perform immediate or indirect (pre- and post-modify) addressing. They perform modulus and bit-reverse operations with no constraints placed on memory addresses for the modulus data buffer placement. Each IALU can specify either a single-, dual-, or quad-word access from memory.

The IALUs have hardware support for circular buffers, bit reverse, and zero-overhead looping. Circular buffers facilitate efficient programming of delay lines and other data structures required in digital signal processing, and they are commonly used in digital filters and Fourier transforms. Each IALU provides registers for four circular buffers, so applications can set up a total of eight circular buffers. The IALUs handle address pointer wraparound automatically, reducing overhead, increasing performance, and simplifying implementation. Circular buffers can start and end at any memory location.

The DSP distinguishes between hardware interrupts and software exceptions, handling them differently. When a software exception occurs, the DSP aborts all other instructions in the instruction pipe. When a hardware interrupt occurs, the DSP continues to execute instructions already in the instruction pipe.

## Flexible Instruction Set

The 128-bit instruction line, which can contain up to four 32-bit instructions, accommodates a variety of parallel operations for concise programming. For example, one instruction line can direct the DSP to conditionally execute a multiply, an add, and a subtract in both computation blocks while it also branches to another location in the program. Some key features of the instruction set include:

The ADSP-TS201S processor internal memory has 24M bits of on-chip DRAM memory, divided into six blocks of 4M bits (128K words × 32 bits). Each block-M0, M2, M4, M6, M8, and M10-can store program instructions, data, or both, so applications can configure memory to suit specific needs. Placing program instructions and data in different memory blocks, however, enables the DSP to access data while performing an instruction fetch. Each memory segment contains a 128K bit cache to enable single cycle access to internal DRAM.

Because the IALU's computational pipeline is one cycle deep, in most cases integer results are available in the next cycle. Hardware (register dependency check) causes a stall if a result is unavailable in a given cycle. PROGRAM SEQUENCER The ADSP-TS201S processor's program sequencer supports the following: · A fully interruptible programming model with flexible programming in assembly and C/C++ languages; handles hardware interrupts with high throughput and no aborted instruction cycles · A 10-cycle instruction pipeline-four-cycle fetch pipe and six-cycle execution pipe-computation results available two cycles after operands are available · Supply of instruction fetch memory addresses; the sequencer's instruction alignment buffer (IAB) caches up to five fetched instruction lines waiting to execute; the program sequencer extracts an instruction line from the IAB and distributes it to the appropriate core component for execution · Management of program structures and program flow determined according to JUMP, CALL, RTI, RTS instructions, loop structures, conditions, interrupts, and software exceptions · Branch prediction and a 128-entry branch target buffer (BTB) to reduce branch delays for efficient execution of conditional and unconditional branch instructions and zero-overhead looping; correctly predicted branches occur with zero overhead cycles, overcoming the five-to-nine stage branch penalty · Compact code without the requirement to align code in memory; the IAB handles alignment Interrupt Controller · CLU instructions for communications infrastructure to govern trellis decoding (for example, Viterbi and Turbo decoders) and despreading via complex correlations · Algebraic assembly language syntax · Direct support for all DSP, imaging, and video arithmetic types · Eliminates toggling DSP hardware modes because modes are supported as options (for example, rounding, saturation, and others) within instructions · Branch prediction encoded in instruction; enables zerooverhead loops · Parallelism encoded in instruction line · Conditional execution optional for all instructions · User-defined partitioning between program and data memory DSP MEMORY The DSP's internal and external memory is organized into a unified memory map, which defines the location (address) of all elements in the system, as shown in Figure 3. The memory map is divided into four memory areas-host space, external memory, multiprocessor space, and internal memory-and each memory space, except host memory, is subdivided into smaller memory spaces. OBSOLETE

The six internal memory blocks connect to the four 128-bit wide internal buses through a crossbar connection, enabling the DSP to perform four memory transfers in the same cycle. The DSP's internal bus architecture provides a total memory bandwidth of

The DSP supports nested and nonnested interrupts. Each interrupt type has a register in the interrupt vector table. Also, each has a bit in both the interrupt latch register and the interrupt mask register. All interrupts are fixed as either level-sensitive or edge-sensitive, except the IRQ3-0 hardware interrupts, which are programmable.

## ADSP-TS201S

<!-- image -->

33.6G bytes per second, enabling the core and I/O to access eight 32-bit data-words and four 32-bit instructions each cycle. The DSP's flexible memory structure enables:

- DSP core and I/O accesses to different memory blocks in the same cycle
- DSP core access to three memory blocks in parallel-one instruction and two data accesses

The separate on-chip buses-four 128-bit data buses and four 32-bit address buses-are multiplexed at the SOC interface and transferred to the external port over the SOC bus to create an external system bus transaction. The external system bus provides a single 64-bit data bus and a single 32-bit address bus. The external port supports data transfer rates of 1G byte per second over the external bus. Figure 3. ADSP-TS201S Memory Map OBSOLETE

- Programmable partitioning of program and data memory
- Program access of all memory as 32-, 64-, or 128-bit words-16-bit words with the DAB

## EXTERNAL PORT (OFF-CHIP MEMORY/PERIPHERALS INTERFACE)

The ADSP-TS201S processor's external port provides the DSP's interface to off-chip memory and peripherals. The 4G word address space is included in the DSP's unified address space.

The external bus can be configured for 32-bit or 64-bit, littleendian operations. When the system bus is configured for 64-bit operations, the lower 32 bits of the external data bus connect to even addresses, and the upper 32 bits connect to odd addresses.

The external port supports pipelined, slow, and SDRAM protocols. Addressing of external memory devices and memorymapped peripherals is facilitated by on-chip decoding of high order address lines to generate memory bank select signals.

The ADSP-TS201S processor provides programmable memory, pipeline depth, and idle cycle for synchronous accesses; and external acknowledge controls to support interfacing to pipelined or slow devices, host processors, and other memorymapped peripherals with variable access, hold, and disable time requirements.

## Host Interface

The ADSP-TS201S processor provides an easy and configurable interface between its external bus and host processors through the external port (see Figure 4). To accommodate a variety of host processors, the host interface supports pipelined or slow protocols for ADSP-TS201S processor access of the host as slave or pipelined for host access of the ADSP-TS201S processor as slave. Each protocol has programmable transmission parameters, such as idle cycles, pipe depth, and internal wait cycles.

The host interface supports burst transactions initiated by a host processor. After the host issues the starting address of the burst and asserts the BRST signal, the DSP increments the address internally while the host continues to assert BRST.

The host interface provides a deadlock recovery mechanism that enables a host to recover from deadlock situations involving the DSP. The BOFF signal provides the deadlock recovery mechanism. When the host asserts BOFF, the DSP backs off the current transaction and asserts HBG and relinquishes the external bus.

The host can directly read or write the internal memory of the ADSP-TS201S processor, and it can access most of the DSP registers, including DMA control (TCB) registers. Vector interrupts support efficient execution of host commands.

## Multiprocessor Interface

The ADSP-TS201S processor offers powerful features tailored to multiprocessing DSP systems through the external port and link ports (see Figure 4). This multiprocessing capability provides the highest bandwidth for interprocessor communication, including:

- Up to eight DSPs on a common bus
- On-chip arbitration for glueless multiprocessing
- Link ports for point-to-point communication

The external port and link ports provide integrated, glueless multiprocessing support.

The external port supports a unified address space (see Figure 3) that enables direct interprocessor accesses of each ADSP-TS201S processor's internal memory and registers. The DSP's on-chip distributed bus arbitration logic provides simple, glueless connection for systems containing up to eight ADSP-TS201S processors and a host processor. Bus arbitration has a rotating priority. Bus lock supports indivisible readmodify-write sequences for semaphores. A bus fairness feature prevents one DSP from holding the external bus too long.

EPROM Interface DMA CONTROLLER OBSOLETE

## ADSP-TS201S

The DSP's four link ports provide a second path for interprocessor communications with throughput of 4G bytes per second. The cluster bus provides 1G byte per second throughput-with a total of 4.8G bytes per second interprocessor bandwidth (limited by SOC bandwidth).

## SDRAM Controller

The SDRAM controller controls the ADSP-TS201S processor's transfers of data to and from external synchronous DRAM (SDRAM) at a throughput of 32 bits or 64 bits per SCLK cycle using the external port and SDRAM control pins.

The SDRAM interface provides a glueless interface with standard SDRAMs-16M bit, 64M bit, 128M bit, 256M bit, and 512M bit. The DSP supports directly a maximum of four banks of 64M words × 32 bits of SDRAM. The SDRAM interface is mapped in external memory in each DSP's unified memory map.

The ADSP-TS201S processor can be configured to boot from an external 8-bit EPROM at reset through the external port. An automatic process (which follows reset) loads a program from the EPROM into internal memory. This process uses 16 wait cycles for each read access. During booting, the BMS pin functions as the EPROM chip select signal. The EPROM boot procedure uses DMA Channel 0, which packs the bytes into 32-bit instructions. Applications can also access the EPROM (write flash memories) during normal operation through DMA.

The EPROM or flash memory interface is not mapped in the DSP's unified memory map. It is a byte address space limited to a maximum of 16M bytes (24 address bits). The EPROM or flash memory interface can be used after boot via a DMA.

The ADSP-TS201S processor's on-chip DMA controller, with 14 DMA channels, provides zero-overhead data transfers without processor intervention. The DMA controller operates independently and invisibly to the DSP's core, enabling DMA operations to occur while the DSP's core continues to execute program instructions.

The DMA controller performs DMA transfers between internal memory, external memory, and memory-mapped peripherals; the internal memory of other DSPs on a common bus, a host processor, or link port I/O; between external memory and external peripherals or link port I/O; and between an external bus master and internal memory or link port I/O. The DMA controller performs the following DMA operations:

- External port block transfers. Four dedicated bidirectional DMA channels transfer blocks of data between the DSP's internal memory and any external memory or memorymapped peripheral on the external bus. These transfers support master mode and handshake mode protocols.
- Link port transfers. Eight dedicated DMA channels (four transmit and four receive) transfer quad-word data only between link ports and between a link port and internal or

## ADSP-TS201S

<!-- image -->

external memory. These transfers only use handshake mode protocol. DMA priority rotates between the four receive channels.

- AutoDMA transfers. Two dedicated unidirectional DMA channels transfer data received from an external bus master to internal memory or to link port I/O. These transfers only use slave mode protocol, and an external bus master must initiate the transfer.

During a transaction, the DSP relinquishes the external data bus; outputs addresses and memory selects (MSSD3-0); outputs the IORD, IOWR, IOEN, and RD/WR strobes; and responds to ACK. Figure 4. ADSP-TS201S Shared Memory Multiprocessing System OBSOLETE

The DMA controller provides these additional features:

- Flyby transfers. Flyby operations only occur through the external port (DMA Channel 0) and do not involve the DSP's core. The DMA controller acts as a conduit to transfer data from an I/O device to external SDRAM memory.
- DMA chaining. DMA chaining operations enable applications to automatically link one DMA transfer sequence to another for continuous transmission. The sequences can occur over different DMA channels and have different transmission attributes.
- Two-dimensional transfers. The DMA controller can access and transfer two-dimensional memory arrays on any DMA transmit or receive channel. These transfers are implemented with index, count, and modify registers for both the X and Y dimensions.

## LINK PORTS (LVDS)

The DSP's four full-duplex link ports each provide additional four-bit receive and four-bit transmit I/O capability, using low voltage, differential-signal (LVDS) technology. With the ability to operate at a double data rate-latching data on both the rising and falling edges of the clock-running at up to 500 MHz, each link port can support up to 500M bytes per second per direction, for a combined maximum throughput of 4G bytes per second.

The link ports provide an optional communications channel that is useful in multiprocessor systems for implementing pointto-point interprocessor communications. Applications can also use the link ports for booting.

Each link port has its own triple-buffered quad-word input and double-buffered quad-word output registers. The DSP's core can write directly to a link port's transmit register and read from a receive register, or the DMA controller can perform DMA transfers through eight (four transmit and four receive) dedicated link port DMA channels.

Each link port direction has three signals that control its operation. For the transmitter, LxCLKOUT is the output transmit clock, LxACKI is the handshake input to control the data flow, and the LxBCMPO output indicates that the block transfer is complete. For the receiver, LxCLKIN is the input receive clock, LxACKO is the handshake output to control the data flow, and the LxBCMPI input indicates that the block transfer is complete. The LxDATO3-0 pins are the data output bus for the transmitter and the LxDATI3-0 pins are the input data bus for the receiver.

Applications can program separate error detection mechanisms for transmit and receive operations (applications can use the checksum mechanism to implement consecutive link port transfers), the size of data packets, and the speed at which bytes are transmitted.

## TIMER AND GENERAL-PURPOSE I/O

The ADSP-TS201S processor has a timer pin (TMR0E) that generates output when a programmed timer counter has expired, and four programmable general-purpose I/O pins (FLAG3-0) that can function as either single-bit input or output. As outputs, these pins can signal peripheral devices; as inputs, they can provide the test for conditional branching.

## RESET AND BOOTING

The ADSP-TS201S processor has three levels of reset:

- Power-up reset - after power-up of the system (SCLK, all static inputs, and strap pins are stable), the RST\_IN pin must be asserted (low).

After reset, the ADSP-TS201S processor has four boot options for beginning operation:

- Boot from EPROM.
- Boot by an external master (host or another ADSP-TS201S processor).
- Boot by link port.
- No boot-start running from memory address selected with one of the IRQ3-0 interrupt signals. See Table 2.

Using the 'no boot' option, the ADSP-TS201S processor must start running from memory when one of the interrupts is asserted.

| Interrupt   | Address                       |
|-------------|-------------------------------|
| IRQ0        | 0x3000 0000 (External Memory) |
| IRQ1        | 0x3800 0000 (External Memory) |
| IRQ2        | 0x8000 0000 (External Memory) |
| IRQ3        | 0x0000 0000 (Internal Memory) |

The ADSP-TS201S processor core always exits from reset in the idle state and waits for an interrupt. Some of the interrupts in the interrupt vector table are initialized and enabled after reset.

For more information on boot options, see the EE-200: ADSP-TS20x TigerSHARC Processor Boot Loader Kernels Operation on the Analog Devices website (www.analog.com).

The DSP uses calculated ratios of the SCLK clock to operate, as shown in Figure 5. The instruction execution rate is equal to CCLK. A PLL from SCLK generates CCLK which is phaselocked. The SCLKRATx pins define the clock multiplication of SCLK to CCLK (see Table 4 on Page 12). The link port clock is generated from CCLK via a software programmable divisor, and the SOC bus operates at 1/2 CCLK. Memory transfers to external and link port buffers operate at the SOCCLK rate. SCLK also provides clock input for the external bus interface and defines the ac specification reference for the external bus signals. The external bus interface runs at the SCLK frequency. The maximum SCLK frequency is one quarter the internal DSP clock (CCLK) frequency.

Figure 5. Clock Domains

<!-- image -->

CLOCK DOMAINS Table 2. No Boot, Run from Memory Addresses OBSOLETE

- Normal reset - for any chip reset following the power-up reset, the RST\_IN pin must be asserted (low).
- DSP-core reset - when setting the SWRST bit in EMUCTL, the DSP core is reset, but not the external port or I/O.

For normal operations, tie the RST\_OUT pin to the POR\_IN pin.

## ADSP-TS201S

## POWER DOMAINS

The ADSP-TS201S processor has separate power supply connections for internal logic (V DD), analog circuits (V DD\_A), I/O buffer (VDD\_IO), and internal DRAM (VDD\_DRAM) power supply.

Note that the analog (VDD\_A) supply powers the clock generator PLLs. To produce a stable clock, systems must provide a clean power supply to power input VDD\_A. Designs must pay critical attention to bypassing the VDD\_A supply.

## FILTERING REFERENCE VOLTAGE AND CLOCKS

Figure 6 and Figure 7 show possible circuits for filtering V REF , and SCLK\_VREF. These circuits provide the reference voltages for the switching voltage reference and system clock reference.

<!-- image -->

R1: 2k 𝛀 SERIES RESISTOR (±1%)

R2: 2.55k 𝛀 SERIES RESISTOR (±1%)

C1: 1 𝛍 F CAPACITOR (SMD)

C2: 1nF CAPACITOR (HF SMD) PLACED CLOSE TO DSP'S PINS

<!-- image -->

R1: 2k 𝛀 SERIES RESISTOR (±1%)

R2: 2.55k 𝛀 SERIES RESISTOR (±1%)

C1: 1 𝛍 F CAPACITOR (SMD)

C2: 1nF CAPACITOR (HF SMD) PLACED CLOSE TO DSP'S PINS

* IF CLOCK DRIVER VOLTAGE &gt; V DD\_IO

## DEVELOPMENT TOOLS

The ADSP-TS201S processor is supported with a complete set of CROSSCORE ® † software and hardware development tools, including Analog Devices emulators and VisualDSP++ ® ‡ development environment. The same emulator hardware that supports other TigerSHARC processors also fully emulates the ADSP-TS201S processor.

† CROSSCORE is a registered trademark of Analog Devices, Inc.

‡ VisualDSP++ is a registered trademark of Analog Devices, Inc.

The VisualDSP++ debugger has a number of important features. Data visualization is enhanced by a plotting package that offers a significant level of flexibility. This graphical representation of user data enables the programmer to quickly determine the performance of an algorithm. As algorithms grow in complexity, this capability can have increasing significance on the designer's development schedule, increasing productivity. Statistical profiling enables the programmer to nonintrusively poll the processor as it is running the program. This feature, unique to VisualDSP++, enables the software developer to passively gather important code execution metrics without interrupting the real-time characteristics of the program. Essentially, the developer can identify bottlenecks in software quickly and efficiently. By using the profiler, the programmer can focus on those areas in the program that impact performance and take corrective action. Debugging both C/C++ and assembly programs with the VisualDSP++ debugger, programmers can: · View mixed C/C++ and assembly code (interleaved source and object information) · Insert breakpoints · Set conditional breakpoints on registers, memory, and stacks · Trace instruction execution · Perform linear or statistical profiling of program execution · Fill, dump, and graphically plot the contents of memory · Perform source level debugging · Create custom debugger windows The VisualDSP++ IDE lets programmers define and manage DSP software development. Its dialog boxes and property pages let programmers configure and manage all of the TigerSHARC processor development tools, including the color syntax highlighting in the VisualDSP++ editor. This capability permits programmers to: Figure 6. VREF Filtering Scheme Figure 7. SCLK\_VREF Filtering Scheme VREF OBSOLETE

The VisualDSP++ project management environment lets programmers develop and debug an application. This environment includes an easy to use assembler (which is based on an algebraic syntax), an archiver (librarian/library builder), a linker, a loader, a cycle-accurate instruction-level simulator, a C/C++ compiler, and a C/C++ run-time library that includes DSP and mathematical functions. A key point for theses tools is C/C++ code efficiency. The compiler has been developed for efficient translation of C/C++ code to DSP assembly. The DSP has architectural features that improve the efficiency of compiled C/C++ code.

- Control how the development tools process inputs and generate outputs
- Maintain a one-to-one correspondence with the tool's command line switches

The VisualDSP++ Kernel (VDK) incorporates scheduling and resource management tailored specifically to address the memory and timing constraints of DSP programming. These capabilities enable engineers to develop code more effectively,

eliminating the need to start from the very beginning when developing new application code. The VDK features include threads, critical and unscheduled regions, semaphores, events, and device flags. The VDK also supports priority-based, preemptive, cooperative, and time-sliced scheduling approaches. In addition, the VDK was designed to be scalable. If the application does not use a specific feature, the support code for that feature is excluded from the target system.

Because the VDK is a library, a developer can decide whether to use it or not. The VDK is integrated into the VisualDSP++ development environment, but can also be used via standard command line tools. When the VDK is used, the development environment assists the developer with many error-prone tasks and assists in managing system resources, automating the generation of various VDK-based objects, and visualizing the system state, when debugging an application that uses the VDK.

VCSE is Analog Devices' technology for creating, using, and reusing software components (independent modules of substantial functionality) to quickly and reliably assemble software applications. It also is used for downloading components from the Web, dropping them into the application, and publishing component archives from within VisualDSP++. VCSE supports component implementation in C/C++ or assembly language.

Use the expert linker to visually manipulate the placement of code and data on the embedded system, view memory use in a color-coded graphical form, easily move code and data to different areas of the DSP or external memory with a drag of the mouse, and examine runtime stack and heap usage. The expert linker is fully compatible with existing linker definition file (LDF), allowing the developer to move between the graphical and textual environments.

Analog Devices DSP emulators use the IEEE 1149.1 JTAG test access port of the ADSP-TS201S processor to monitor and control the target board processor during emulation. The emulator provides full speed emulation, allowing inspection and modification of memory, registers, and processor stacks. Nonintrusive in-circuit emulation is assured by the use of the processor's JTAG interface-the emulator does not affect target system loading or timing.

In addition to the software and hardware development tools available from Analog Devices, third parties provide a wide range of tools supporting the TigerSHARC processor family. Hardware tools include TigerSHARC processor PC plug-in cards. Third party software tools include DSP libraries, realtime operating systems, and block diagram design tools.

## EVALUATION KIT

Analog Devices offers a range of EZ-KIT Lite ® † evaluation platforms to use as a cost-effective method to learn more about developing or prototyping applications with Analog Devices processors, platforms, and software tools. Each EZ-KIT Lite includes an evaluation board along with an evaluation suite of the VisualDSP++ development and debugging environment with the C/C++ compiler, assembler, and linker. Also included

## ADSP-TS201S

are sample application programs, power supply, and a USB cable. All evaluation versions of the software tools are limited for use only with the EZ-KIT Lite product.

The USB controller on the EZ-KIT Lite board connects the board to the USB port of the user's PC, enabling the VisualDSP++ evaluation suite to emulate the on-board processor in-circuit. This permits the customer to download, execute, and debug programs for the EZ-KIT Lite system. It also allows in-circuit programming of the on-board flash device to store user-specific boot code, enabling the board to run as a standalone unit, without being connected to the PC.

With a full version of VisualDSP++ installed (sold separately), engineers can develop software for the EZ-KIT Lite or any custom-defined system. Connecting one of Analog Devices JTAG emulators to the EZ-KIT Lite board enables high speed, nonintrusive emulation. DESIGNING AN EMULATOR-COMPATIBLE DSP BOARD (TARGET) The Analog Devices family of emulators are tools that every DSP developer needs in order to test and debug hardware and software systems. Analog Devices has supplied an IEEE 1149.1 JTAG test access port (TAP) on each JTAG DSP. The emulator uses the TAP to access the internal features of the DSP, allowing the developer to load code, set breakpoints, observe variables, observe memory, and examine registers. The DSP must be halted to send data and commands, but once an operation has been completed by the emulator, the DSP system is set running at full speed with no impact on system timing. To use these emulators, the target board must include a header that connects the DSP's JTAG port to the emulator. For details on target board design issues including mechanical layout, single processor connections, multiprocessor scan chains, signal buffering, signal termination, and emulator pod logic, see the EE-68: Analog Devices JTAG Emulation Technical Reference on the Analog Devices website (www.analog.com)use the string 'EE-68' in site search. This document is updated regularly to keep pace with improvements to emulator support. ADDITIONAL INFORMATION This data sheet provides a general overview of the ADSP-TS201S processor's architecture and functionality. For detailed information on the ADSP-TS201S processor's core architecture and instruction set, see the ADSP-TS201 TigerSHARC Processor Hardware Reference and the ADSP-TS201 TigerSHARC Processor Programming Reference . For detailed information on the development tools for this processor, see the VisualDSP++ User's Guide for TigerSHARC Processors . OBSOLETE

† EZ-Kit Lite is a registered trademark of Analog Devices, Inc.

## ADSP-TS201S

## PIN FUNCTION DESCRIPTIONS

While most of the ADSP-TS201S processor's input pins are normally synchronous-tied to a specific clock-a few are asynchronous. For these asynchronous signals, an on-chip synchronization circuit prevents metastability problems. Use the ac specification for asynchronous signals when the system design requires predictable, cycle-by-cycle behavior for these signals.

Table 3. Pin Definitions-Clocks and Reset

| Signal     | Type   | Term   | Description                                                                                                                                                                                                                                                                                                                                                                       |
|------------|--------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SCLKRAT2-0 | I (pd) | na     | Core Clock Ratio. The DSP's core clock (CCLK) rate = n × SCLK, where n is user- programmable using the SCLKRATx pins to the values shown in Table 4. These pins may change only during reset; connect these pins to V DD_IO or V SS . All reset specifica- tions in Table 25, Table 26, and Table 27 must be satisfied. The core clock rate (CCLK) is the instruction cycle rate. |
| SCLK       | I      | na     | System Clock Input. The DSP's system input clock for cluster bus. The core clock rate is user-programmable using the SCLKRATx pins. For more information, see Clock Domains on Page 9.                                                                                                                                                                                            |
| RST_IN     | I/A    | na     | Reset. Sets the DSP to a known state and causes program to be in idle state. RST_IN mustbeassertedaspecifiedtimeaccordingtothetypeofresetoperation. Fordetails, see Reset and Booting on Page 9, Table 25 on Page 26, and Figure 13 on Page 26.                                                                                                                                   |
| RST_OUT    | O      | na     | Reset Output. Indicates that the DSP reset is complete. Connect to POR_IN.                                                                                                                                                                                                                                                                                                        |
| POR_IN     | I/A    | na     | Power-On Reset for internal DRAM. Connect to RST_OUT.                                                                                                                                                                                                                                                                                                                             |

<!-- image -->

| Table 4. SCLK Ratio                       |                          |
|-------------------------------------------|--------------------------|
| SCLKRAT2-0                                | Ratio                    |
| 000 (default) 001 010 011 100 101 110 111 | 4 5 6 7 8 10 12 Reserved |

I = input; A = asynchronous; O = output; OD = open-drain output; T = three-state; P = power supply; G = ground; pd = internal pull-down 5 k Ω ; pu = internal pull-up 5 k Ω ; pd\_0 = internal pull-down 5 k Ω on DSP ID = 0; pu\_0 =  internal pull-up 5 k Ω on DSP ID = 0; pu\_od\_0 =  internal pull-up 500 Ω on DSP ID = 0; pd\_m = internal pull-down 5 k Ω on DSP bus master; pu\_m = internal pull-up 5 k Ω on DSP bus master; pu\_ad = internal pull-up 40 k Ω . For more pull-down and pull-up information, see Electrical Characteristics on Page 22. Term (termination of unused pins) column symbols: epd = external pull-down approximately 5 k Ω to VSS; epu = external pull-up approximately 5 k Ω to V DD\_IO , nc = not connected; na = not applicable (always used); VDD\_IO = connect directly to VDD\_IO; VSS = connect directly to VSS Table 4. SCLK Ratio OBSOLETE

The output pins can be three-stated during normal operation. The DSP three-states all output pins during reset, allowing these pins to get to their internal pull-up or pull-down state. Some pins have an internal pull-up or pull-down resistor (±30% tolerance) that maintains a known value during transitions between different drivers.

Table 5. Pin Definitions-External Port Bus Controls

| Signal   | Type               | Term   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|----------|--------------------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ADDR31-0 | I/O/T (pu_ad)      | nc     | Address Bus. The DSP issues addresses for accessing memory and peripherals on these pins. In a multiprocessor system, the bus master drives addresses for accessing internalmemoryorI/OprocessorregistersofotherADSP-TS201Sprocessors.TheDSP inputs addresses when a host or another DSP accesses its internal memory or I/O processor registers.                                                                                                                                                                                                              |
| DATA63-0 | I/O/T (pu_ad)      | nc     | External Data Bus. The DSP drives and receives data and instructions on these pins. Pull-up or pull-down resistors on unused DATA pins are unnecessary.                                                                                                                                                                                                                                                                                                                                                                                                        |
| RD       | I/O/T (pu_0)       | epu 1  | Memory Read. RD is asserted whenever the DSP reads from any slave in the system, excluding SDRAM. When the DSP is a slave, RD is an input and indicates read trans- actions that access its internal memory or universal registers. In a multiprocessor system, the bus master drives RD. RD changes concurrently with ADDR pins.                                                                                                                                                                                                                              |
| WRL      | I/O/T (pu_0)       | epu 1  | Write Low. WRL is asserted in two cases: when the ADSP-TS201S processor writes to anevenaddresswordofexternalmemoryortoanotherexternalbusagent;andwhen the ADSP-TS201S processor writes to a 32-bit zone (host, memory, or DSP programmedto32-bit bus). Anexternal master (host or DSP) asserts WRLfor writing to a DSP's low word of internal memory. In a multiprocessor system, the bus master drivesWRL.WRLchangesconcurrentlywithADDRpins.WhentheDSPisaslave,WRL is an input and indicates write transactions that access its internal memory or OBSOLETE |
| WRH      | I/O/T (pu_0)       | epu 1  | universal registers. Write High. WRHis asserted when the ADSP-TS201S processor writes a long word (64 bits) or writes to an oddaddress word of external memoryortoanother external bus agent ona64-bit data bus. Anexternal master (host or another DSP) must assert WRHforwriting to a DSP's high wordof 64-bit data bus. In a multiprocessing system, the bus master drives WRH. WRHchanges concurrently with ADDRpins. When the DSPisaslave, WRHisaninputandindicateswritetransactionsthat access its internal memory or universal registers.               |
| ACK      | I/O/T/OD (pu_od_0) | epu 1  | Acknowledge. External slave devices can deassert ACKtoaddwait states to external memoryaccesses. ACK is used by I/O devices, memorycontrollers, and other periph- eralsonthedataphase.TheDSPcandeassertACKtoaddwaitstatestoreadandwrite accesses of its internal memory. The pull-up is 50 Ω on low-to-high transactions and                                                                                                                                                                                                                                   |
| BMS      | O/T (pu_0)         | na     | Boot MemorySelect. BMSis the chip select for boot EPROMorflash memory. During reset, the DSP uses BMSas a strap pin (EBOOT) for EPROM boot mode. In a multipro- cessor system, the DSP bus master drives BMS. For details, see Reset and Booting on Page 9 and the EBOOT signal description in Table 16 on Page 20.                                                                                                                                                                                                                                            |
| MS1-0    | O/T (pu_0)         | nc     | MemorySelect. MS0orMS1isassertedwhenevertheDSPaccessesmemorybanks0 or1,respectively.MS1-0aredecodedmemoryaddresspinsthatchangeconcurrently with ADDR pins. When ADDR31:27 = 0b00110, MS0 is asserted. When ADDR31:27 = 0b00111, MS1 is asserted. In multiprocessor systems, the master DSP drives MS1-0.                                                                                                                                                                                                                                                       |
| MSH      | O/T (pu_0)         | nc     | Memory Select Host. MSHis asserted whenever the DSP accesses the host address space (ADDR31 =0b1). MSHis a decoded memory address pin that changes concur- rently with ADDR pins. In a multiprocessor system, the bus master DSP drives MSH.                                                                                                                                                                                                                                                                                                                   |
| BRST     | I/O/T (pu_0)       | epu 1  | Burst.Thecurrentbusmaster(DSPorhost)assertsthispintoindicatethatitisreading or writing data associated with consecutive addresses. A slave device can ignore addresses after the first one and increment an internal address counter after each transfer. For host-to-DSP burst accesses, the DSP increments the address automati- cally while BRST is asserted.                                                                                                                                                                                               |

I = input; A = asynchronous; O = output; OD = open-drain output; T = three-state; P = power supply; G = ground; pd = internal pull-down 5 k Ω ; pu = internal pull-up 5 k Ω ; pd\_0 = internal pull-down 5 k Ω on DSP ID = 0; pu\_0 =  internal pull-up 5 k Ω on DSP ID = 0; pu\_od\_0 =  internal pull-up 500 Ω on DSP ID = 0; pd\_m = internal pull-down 5 k Ω on DSP bus master; pu\_m = internal pull-up 5 k Ω on DSP bus master; pu\_ad = internal pull-up 40 k Ω . For more pull-down and pull-up information, see Electrical Characteristics on Page 22.

Term (termination of unused pins) column symbols: epd = external pull-down approximately 5 k Ω to VSS; epu = external pull-up approximately 5 k Ω to V DD\_IO , nc = not connected; na = not applicable (always used); VDD\_IO = connect directly to VDD\_IO; VSS = connect directly to VSS

1 This external pull-up may be omitted for the ID = 000 TigerSHARC processor.

## ADSP-TS201S

## ADSP-TS201S

Table 6. Pin Definitions-External Port Arbitration

| Signal   | Type             | Term      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|----------|------------------|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| BR7-0    | I/O              | V DD_IO 1 | Multiprocessing Bus Request Pins. Used by the DSPs in a multiprocessor system to arbitrate for bus mastership. Each DSP drives its own BRx line (corresponding to the value of its ID2-0 inputs) and monitors all others. In systems with fewer than eight DSPs, set the unused BRx pins high (V DD_IO ).                                                                                                                                                                                                        |
| ID2-0    | I (pd)           | na        | Multiprocessor ID. Indicates the DSP's ID, from which the DSPdetermines its order in a multiprocessor system. These pins also indicate to the DSP which bus request (BR0-BR7) to assert when requesting the bus: 000 = BR0, 001 = BR1, 010 = BR2, 011 = BR3, 100 = BR4, 101 = BR5, 110 = BR6, or 111 = BR7. ID2-0 must have a constant value during system operation and can change during reset only.                                                                                                           |
| BM       | O                | na        | Bus Master. Thecurrent bus master DSPasserts BM. For debugging only. At reset this is a strap pin. For more information, see Table 16 on Page 20.                                                                                                                                                                                                                                                                                                                                                                |
| BOFF     | I                | epu       | Back Off. A deadlock situation can occur when the host and a DSP try to read from each other's bus at the same time. When deadlock occurs, the host can assert BOFF to force the DSPtorelinquishthebus before completing its outstanding transaction.                                                                                                                                                                                                                                                            |
| BUSLOCK  | O/T (pu_0)       | na        | BusLockIndication.Providesanindicationthatthecurrentbusmasterhaslockedthe bus. At reset, this is a strap pin. For more information, see Table 16 on Page 20.                                                                                                                                                                                                                                                                                                                                                     |
| HBR      | I                | epu       | HostBusRequest.AhostmustassertHBRtorequestcontroloftheDSP'sexternalbus. When HBR is asserted in a multiprocessing system, the bus master relinquishes the bus and asserts HBGonce the outstanding transaction is finished.                                                                                                                                                                                                                                                                                       |
| HBG      | I/O/T (pu_0)     | epu 2     | Host Bus Grant. Acknowledges HBR and indicates that the host can take control of the external bus. When relinquishing the bus, the master DSP three-states the ADDR31-0, DATA63-0, MSH, MSSD3-0, MS1-0, RD, WRL, WRH, BMS, BRST, IORD, IOWR, IOEN, RAS, CAS, SDWE, SDA10, SDCKE, LDQM, and HDQMpins, and the DSP puts the SDRAM in self-refresh mode. The DSP asserts HBG until the host deasserts HBR. In multiprocessor systems, the current bus master DSPdrives HBG, and all slave DSPs monitor it. OBSOLETE |
| CPA      | I/O/OD (pu_od_0) | epu 2     | Core Priority Access. Asserted while the DSP's core accesses external memory. This pin enables a slave DSP to interrupt a master DSP's background DMAtransfers and gain control of the external bus for core-initiated transactions. CPA is an open drain output, connected to all DSPs in the system. If not required in the system, leave CPA unconnected (external pull-ups will be required for DSP ID = 1 through ID = 7).                                                                                  |
| DPA      | I/O/OD (pu_od_0) | epu 2     | DMAPriority Access. Asserted while a high priority DSP DMAchannel accesses external memory. This pin enables a high priority DMAchannel on a slave DSP to interrupttransfersofanormalpriorityDMAchannelonamasterDSPandgaincontrol of the external bus for DMA-initiated transactions. DPA is an open drain output, connected to all DSPs in the system. If not required in the system, leave DPA uncon- nected (external pull-ups will be required for DSP ID = 1 through ID = 7).                               |

Table 7. Pin Definitions-External Port DMA/Flyby

| Signal   | Type       | Term   | Description                                                                                                                                                                                                                       |
|----------|------------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DMAR3-0  | I/A        | epu    | DMARequestPins.EnableexternalI/OdevicestorequestDMAservicesfromtheDSP. In response to DMARx, the DSP performs DMAtransfers according to theDMA channel's initialization. The DSP ignores DMArequests from uninitialized channels. |
| IOWR     | O/T (pu_0) | nc     | I/O Write. WhenaDSPDMAchannelinitiates a flybymoderead transaction, the DSP asserts the IOWR signal during the data cycles. This assertion makes the I/O device sample the data instead of the TigerSHARC.                        |
| IORD     | O/T (pu_0) | nc     | I/O Read. WhenaDSPDMAchannelinitiates a flyby modewrite transaction, theDSP asserts the IORDsignal during the data cycle. This assertion with theIOEN makesthe I/O device drive the data instead of the TigerSHARC.               |
| IOEN     | O/T (pu_0) | nc     | I/ODeviceOutput Enable. Enables the output buffers of anexternal I/O device for fly- by transactions between the device and external memory. Active on flyby transactions.                                                        |

I = input; A = asynchronous; O = output; OD = open-drain output; T = three-state; P = power supply; G = ground; pd = internal pull-down 5 k Ω ; pu = internal pull-up 5 k Ω ; pd\_0 = internal pull-down 5 k Ω on DSP ID = 0; pu\_0 =  internal pull-up 5 k Ω on DSP ID = 0; pu\_od\_0 =  internal pull-up 500 Ω on DSP ID = 0; pd\_m = internal pull-down 5 k Ω on DSP bus master; pu\_m = internal pull-up 5 k Ω on DSP bus master; pu\_ad = internal pull-up 40 k Ω . For more pull-down and pull-up information, see Electrical Characteristics on Page 22. Term (termination of unused pins) column symbols: epd = external pull-down approximately 5 k Ω to VSS; epu = external pull-up approximately 5 k Ω to V DD\_IO , nc = not connected; na = not applicable (always used); VDD\_IO = connect directly to VDD\_IO; VSS = connect directly to VSS OBSOLETE

## ADSP-TS201S

## ADSP-TS201S

Table 8. Pin Definitions-External Port SDRAM Controller

| Signal   | Type               | Term   | Description                                                                                                                                                                                                                                                                                                                                                                                                           |
|----------|--------------------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MSSD3-0  | I/O/T (pu_0)       | nc     | MemorySelect SDRAM. MSSD0, MSSD1, MSSD2, or MSSD3is asserted whenever the DSP accesses SDRAM memory space. MSSD3-0 are decoded memory address pins that are asserted whenever the DSP issues an SDRAM command cycle (access to ADDR31:30=0b01-exceptreservedspacesshowninFigure 3onPage 6). In amulti- processor system, the master DSP drives MSSD3-0.                                                               |
| RAS      | I/O/T (pu_0)       | nc     | Row Address Select. When sampled low, RAS indicates that a row address is valid in a read or write of SDRAM. In other SDRAM accesses, it defines the type of operation to execute according toSDRAM specification.                                                                                                                                                                                                    |
| CAS      | I/O/T (pu_0)       | nc     | Column Address Select. When sampled low, CAS indicates that a column address is valid in a read or write of SDRAM. In other SDRAM accesses, it defines the type of operation to execute according to the SDRAMspecification.                                                                                                                                                                                          |
| LDQM     | O/T (pu_0)         | nc     | Low Word SDRAM Data Mask. When sampled high, three-states theSDRAMDQ buffers.LDQMis valid on SDRAMtransactions whenCASis asserted, and inactive on read transactions. On write transactions, LDQMis active when accessing an odd address word on a 64-bit memory bus to disable the write of the low word.                                                                                                            |
| HDQM     | O/T (pu_0)         | nc     | High Word SDRAM Data Mask. When sampled high, three-states theSDRAMDQ buffers.HDQMisvalid onSDRAMtransactions whenCASisasserted,and inactiveon read transactions. On write transactions, HDQMis active when accessing an even address in word accesses or when memory is configured for a 32-bit bus to disable the write of the high word.                                                                           |
| SDA10    | O/T (pu_0)         | nc     | SDRAM Address Bit 10. Separate A10 signals enable SDRAMrefresh operation while the DSP executes non-SDRAM transactions.                                                                                                                                                                                                                                                                                               |
| SDCKE    | I/O/T (pu_m/ pd_m) | nc     | SDRAMClock Enable. Activates the SDRAMclock forSDRAM self-refresh or suspend modes. A slave DSP in a multiprocessor system does not have the pull-up or pull- down. A master DSP (or ID = 0 in a single processor system) has a pull-up before granting the bus to the host, except when the SDRAM is put in self refresh mode. In self refresh mode, the master has a pull-down before granting the bus to the host. |
| SDWE     | I/O/T (pu_0)       | nc     | SDRAM Write Enable. When sampled low while CAS is active,SDWE indicates an SDRAM write access. When sampled high while CAS is active, SDWE indicates an SDRAMreadaccess.InotherSDRAMaccesses,SDWEdefinesthetypeofoperationto execute according to SDRAM specification.                                                                                                                                                |

I = input; A = asynchronous; O = output; OD = open-drain output; T = three-state; P = power supply; G = ground; pd = internal pull-down 5 k Ω ; pu = internal pull-up 5 k Ω ; pd\_0 = internal pull-down 5 k Ω on DSP ID = 0; pu\_0 =  internal pull-up 5 k Ω on DSP ID = 0; pu\_od\_0 =  internal pull-up 500 Ω on DSP ID = 0; pd\_m = internal pull-down 5 k Ω on DSP bus master; pu\_m = internal pull-up 5 k Ω on DSP bus master; pu\_ad = internal pull-up 40 k Ω . For more pull-down and pull-up information, see Electrical Characteristics on Page 22. Term (termination of unused pins) column symbols: epd = external pull-down approximately 5 k Ω to VSS; epu = external pull-up approximately 5 k Ω to VDD\_IO, nc = not connected; na = not applicable (always used); VDD\_IO = connect directly to VDD\_IO; VSS = connect directly to VSS OBSOLETE

Table 9. Pin Definitions-JTAG Port

| Signal   | Type        | Term         | Description                                                                                                                                                                        |
|----------|-------------|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| EMU      | O/OD        | nc 1         | Emulation. Connected to the DSP's JTAG emulator target board connector only.                                                                                                       |
| TCK      | I           | epd or epu 1 | Test Clock (JTAG). Provides an asynchronous clock for JTAG scan.                                                                                                                   |
| TDI      | I (pu_ad)   | nc 1         | Test Data Input (JTAG). A serial data input of the scan path.                                                                                                                      |
| TDO      | O/T         | nc 1         | Test Data Output (JTAG). A serial data output of the scan path.                                                                                                                    |
| TMS      | I (pu_ad)   | nc 1         | Test Mode Select (JTAG). Used to control the test state machine.                                                                                                                   |
| TRST     | I/A (pu_ad) | na           | Test Reset (JTAG). Resets the test statemachine.TRSTmustbeassertedor pulsed low after power up for proper device operation. For more information, see Reset and Booting on Page 9. |

| Signal   | Type       | Term   | Description                                                                                                                                                                                                                                                        |
|----------|------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FLAG3-0  | I/O/A (pu) | nc     | FLAG pins. Bidirectional input/output pins can be used as program conditions. Each pin can be configured individually for input or for output. FLAG3-0 are inputs after power-up and reset.                                                                        |
| IRQ3-0   | I/A (pu)   | nc     | InterruptRequest.Whenasserted,theDSPgeneratesaninterrupt.EachoftheIRQ3-0pins canbeindependentlysetforedge-triggeredorlevel-sensitiveoperation.Afterreset,these pins are disabled unless the IRQ3-0 strap option and interrupt vectors are initialized for booting. |
| TMR0E    | O          | na     | Timer 0 expires. This output pulses whenever timer 0 expires. At reset, this is a strap pin. For more information, see Table 16 on Page 20.                                                                                                                        |

I = input; A = asynchronous; O = output; OD = open-drain output; T = three-state; P = power supply; G = ground; pd = internal pull-down 5 k Ω ; pu = internal pull-up 5 k Ω ; pd\_0 = internal pull-down 5 k Ω on DSP ID = 0; pu\_0 =  internal pull-up 5 k Ω on DSP ID = 0; pu\_od\_0 =  internal pull-up 500 Ω on DSP ID = 0; pd\_m = internal pull-down 5 k Ω on DSP bus master; pu\_m = internal pull-up 5 k Ω on DSP bus master; pu\_ad = internal pull-up 40 k Ω . For more pull-down and pull-up information, see Electrical Characteristics on Page 22. Term (termination of unused pins) column symbols: epd = external pull-down approximately 5 k Ω to VSS; epu = external pull-up approximately 5 k Ω to VDD\_IO, nc = not connected; na = not applicable (always used); VDD\_IO = connect directly to VDD\_IO; VSS = connect directly to VSS 1 See the reference on Page 11 to the JTAG emulation technical reference EE-68. Table 10. Pin Definitions-Flags, Interrupts, and Timer I = input; A = asynchronous; O = output; OD = open-drain output; T = three-state; P = power supply; G = ground; pd = internal pull-down 5 k Ω ; pu = internal pull-up 5 k Ω ; pd\_0 = internal pull-down 5 k Ω on DSP ID = 0; pu\_0 =  internal pull-up 5 k Ω on DSP ID = 0; pu\_od\_0 =  internal pull-up 500 Ω on DSP ID = 0; pd\_m = internal pull-down 5 k Ω on DSP bus master; pu\_m = internal pull-up 5 k Ω on DSP bus master; pu\_ad = internal pull-up 40 k Ω . For more pull-down and pull-up information, see Electrical Characteristics on Page 22. Term (termination of unused pins) column symbols: epd = external pull-down approximately 5 k Ω to VSS; epu = external pull-up approximately 5 k Ω to VDD\_IO, nc = not connected; na = not applicable (always used); VDD\_IO = connect directly to VDD\_IO; VSS = connect directly to VSS OBSOLETE

## ADSP-TS201S

## ADSP-TS201S

Table 11. Pin Definitions-Link Ports

| Signal     | Type     | Term    | Description                                                                                                                                                                                                                                                                                                  |
|------------|----------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| LxDATO3-0P | O        | nc      | Link Ports 3-0 Data 3-0 Transmit LVDS P                                                                                                                                                                                                                                                                      |
| LxDATO3-0N | O        | nc      | Link Ports 3-0 Data 3-0 Transmit LVDSN                                                                                                                                                                                                                                                                       |
| LxCLKOUTP  | O        | nc      | Link Ports 3-0 Transmit Clock LVDS P                                                                                                                                                                                                                                                                         |
| LxCLKOUTN  | O        | nc      | Link Ports 3-0 Transmit Clock LVDSN                                                                                                                                                                                                                                                                          |
| LxACKI     | I (pd)   | nc      | Link Ports 3-0 Receive Acknowledge. Using this signal, the receiver indicates to the transmitter that it may continue the transmission.                                                                                                                                                                      |
| LxBCMPO    | O(pu)    | nc      | Link Ports3-0 Block Completion.Whenthetransmission is executed using DMA,this signal indicates to the receiver that the transmitted block is completed. The pull-up resistorispresentonL0BCMPOonly.Atreset,theL1BCMPO,L2BCMPO,andL3BCMPO pins are strap pins. For more information, see Table 16 on Page 20. |
| LxDATI3-0P | I        | V DD_IO | Link Ports 3-0 Data 3-0 Receive LVDS P                                                                                                                                                                                                                                                                       |
| LxDATI3-0N | I        | V DD_IO | Link Ports 3-0 Data 3-0 Receive LVDSN                                                                                                                                                                                                                                                                        |
| LxCLKINP   | I/A      | V DD_IO | Link Ports 3-0 Receive Clock LVDS P                                                                                                                                                                                                                                                                          |
| LxCLKINN   | I/A      | V DD_IO | Link Ports 3-0 Receive Clock LVDSN                                                                                                                                                                                                                                                                           |
| LxACKO     | O        | nc      | Link Ports 3-0 Transmit Acknowledge. Using this signal, the receiver indicates to the transmitter that it may continue the transmission.                                                                                                                                                                     |
| LxBCMPI    | I (pd_l) | V SS    | Link Ports 3-0 Block Completion. When the reception is executed using DMA, this signal indicates to the receiver that the transmitted block is completed.                                                                                                                                                    |

| Signal                  | Type          | Term   | Description                                                                                                                                                                                                                                                                                                                                                                                                                            |
|-------------------------|---------------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CONTROLIMP0 CONTROLIMP1 | I (pd) I (pu) | na na  | Impedance Control. As shown in Table 13, the CONTROLIMP1-0 pins select between normal driver mode and A/D driver mode. Whenusing normal mode(recommended), the output drive strength is set relative to maximum drive strength according to Table 14. Whenusing A/D mode, the resistance control operates in the analog mode, where drive strength is continuously controlled to match a specific line impedance as shown in Table 14. |
| DS2, 0 DS1              | I (pu) I (pd) | na     | Digital DriveStrengthSelection.SelectedasshowninTable 14. For drive strength calcu- lation,seeOutput DriveCurrentsonPage 36.Thedrive strength for somepinsispreset, not controlled by the DS2-0 pins. The pins that are always at drive strength 7 (100%) include:CPA,DPA,TDO,EMU,andRST_OUT.ThedrivestrengthfortheACKpinisalways x2 drive strength 7 (100%).                                                                          |
| ENEDREG                 | I (pu)        | V SS   | Connect the ENEDREG pin to V SS . Connect the V DD_DRAM pins to a properly decoupled DRAMpower supply.                                                                                                                                                                                                                                                                                                                                 |

I = input; A = asynchronous; O = output; OD = open-drain output; T = three-state; P = power supply; G = ground; pd = internal pull-down 5 k Ω ; pu = internal pull-up 5 k Ω ; pd\_0 = internal pull-down 5 k Ω on DSP ID = 0; pu\_0 =  internal pull-up 5 k Ω on DSP ID = 0; pu\_od\_0 =  internal pull-up 500 Ω on DSP ID = 0; pd\_m = internal pull-down 5 k Ω on DSP bus master; pu\_m = internal pull-up 5 k Ω on DSP bus master; pu\_ad = internal pull-up 40 k Ω . For more pull-down and pull-up information, see Electrical Characteristics on Page 22.

I = input; A = asynchronous; O = output; OD = open-drain output; T = three-state; P = power supply; G = ground; pd = internal pull-down 5 k Ω ; pu = internal pull-up 5 k Ω ; pd\_0 = internal pull-down 5 k Ω on DSP ID = 0; pu\_0 =  internal pull-up 5 k Ω on DSP ID = 0; pu\_od\_0 =  internal pull-up 500 Ω on DSP ID = 0; pd\_m = internal pull-down 5 k Ω on DSP bus master; pu\_m = internal pull-up 5 k Ω on DSP bus master; pu\_ad = internal pull-up 40 k Ω ; pd\_l = internal pull-down 50 k Ω . For more pull-down and pull-up information, see Electrical Characteristics on Page 22. Term (termination of unused pins) column symbols: epd = external pull-down approximately 5 k Ω to VSS; epu = external pull-up approximately 5 k Ω to VDD\_IO, nc = not connected; na = not applicable (always used); VDD\_IO = connect directly to VDD\_IO; VSS = connect directly to VSS Table 12. Pin Definitions-Impedance Control, Drive Strength Control, and Regulator Enable OBSOLETE

Term (termination of unused pins) column symbols: epd = external pull-down approximately 5 k Ω to VSS; epu = external pull-up approximately 5 k Ω to VDD\_IO, nc = not connected; na = not applicable (always used); VDD\_IO = connect directly to VDD\_IO; VSS = connect directly to VSS

Table 13. Impedance Control Selection

| CONTROLIMP1-0    | DriverMode   |
|------------------|--------------|
| 00 (recommended) | Normal       |
| 01               | Reserved     |
| 10 (default)     | A/D Mode     |
| 11               | Reserved     |

Table 14. Drive Strength/Output Impedance Selection

| DS2-0 Pins    | Drive Strength 1   | Output Impedance 2   |
|---------------|--------------------|----------------------|
| 000           | Strength 0 (11.1%) | 26 Ω                 |
| 001           | Strength 1 (23.8%) | 32 Ω                 |
| 010           | Strength 2 (36.5%) | 40 Ω                 |
| 011           | Strength 3 (49.2%) | 50 Ω                 |
| 100           | Strength 4 (61.9%) | 62 Ω                 |
| 101 (default) | Strength 5 (74.6%) | 70 Ω                 |
| 110           | Strength 6 (87.3%) | 96 Ω                 |
| 111           | Strength 7 (100%)  | 120 Ω                |

| Signal     | Type   | Term   | Description                                                                                                                                                                                                                                                                                                                                                                                                |
|------------|--------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| V DD       | P      | na     | V DD pins for internal logic.                                                                                                                                                                                                                                                                                                                                                                              |
| V DD_A     | P      | na     | V DD pins for analog circuits. Pay critical attention to bypassing this supply.                                                                                                                                                                                                                                                                                                                            |
| V DD_IO    | P      | na     | V DD pins for I/O buffers.                                                                                                                                                                                                                                                                                                                                                                                 |
| V DD_DRAM  | P      | na     | V DD pins for internal DRAM.                                                                                                                                                                                                                                                                                                                                                                               |
| V REF      | I      | na     | Reference voltage defines the trip point for all input buffers, except SCLK, RST_IN, POR_IN, IRQ3-0, FLAG3-0, DMAR3-0, ID2-0, CONTROLIMP1-0, LxDATO3-0P/N, LxCLKOUTP/N, LxDATI3-0P/N, LxCLKINP/N, TCK, TDI, TMS, and TRST. V REF can be connected to a power supply or set by a voltage divider circuit as shown in Figure 6. For more information, see Filtering Reference Voltage and Clocks on Page 10. |
| SCLK_V REF | I      | na     | SystemClockReference. Connectthis pintoareferencevoltageasshowninFigure 7. For more information, see Filtering Reference Voltage and Clocks on Page 10.                                                                                                                                                                                                                                                    |
| V SS       | G      | na     | Ground pins.                                                                                                                                                                                                                                                                                                                                                                                               |
| NC         | -      | nc     | NoConnect.Donotconnectthesepinstoanything(nottoanysupply,signal,oreach other). These pins are reserved and must be left unconnected.                                                                                                                                                                                                                                                                       |

Term (termination of unused pins) column symbols: epd = external pull-down approximately 5 k Ω to VSS; epu = external pull-up approximately 5 k Ω to VDD\_IO, nc = not connected; na = not applicable (always used); VDD\_IO = connect directly to VDD\_IO; VSS = connect directly to VSS

1 CONTROLIMP1 = 0, A/D mode disabled. 2 CONTROLIMP1 = 1, A/D mode enabled. Table 15. Pin Definitions-Power, Ground, and Reference I = input; A = asynchronous; O = output; OD = open-drain output; T = three-state; P = power supply; G = ground; pd = internal pull-down 5 k Ω ; pu = internal pull-up 5 k Ω ; pd\_0 = internal pull-down 5 k Ω on DSP ID = 0; pu\_0 =  internal pull-up 5 k Ω on DSP ID = 0; pu\_od\_0 =  internal pull-up 500 Ω on DSP ID = 0; pd\_m = internal pull-down 5 k Ω on DSP bus master; pu\_m = internal pull-up 5 k Ω on DSP bus master; pu\_ad = internal pull-up 40 k Ω . For more pull-down and pull-up information, see Electrical Characteristics on Page 22. OBSOLETE

## ADSP-TS201S

## STRAP PIN FUNCTION DESCRIPTIONS

Some pins have alternate functions at reset. Strap options set DSP operating modes. During reset, the DSP samples the strap option pins. Strap pins have an internal pull-up or pull-down for the default value. If a strap pin is not connected to an overdriving external pull-up, pull-down, or logic load, the DSP samples the default value during reset. If strap pins are

Table 16. Pin Definitions-I/O Strap Pins

| Signal      | Type (at Reset)   | OnPin…   | Description                                                                                                                                                                 |
|-------------|-------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| EBOOT       | I (pd_0)          | BMS      | EPROM Boot. 0 = boot from EPROM immediately after reset (default) 1 = idle after reset and wait for an external device to boot DSP through the external port or a link port |
| IRQEN       | I (pd)            | BM       | Interrupt Enable. 0 = disable and set IRQ3-0 interrupts to edge-sensitive after reset (default) 1 = enable and set IRQ3-0 interrupts to level-sensitive                     |
| LINK_DWIDTH | I (pd)            | TMR0E    | Link Port Input Default Data Width. 0 = 1-bit (default) 1 = 4-bit                                                                                                           |
| SYS_REG_WE  | I (pd_0)          | BUSLOCK  | SYSCON and SDRCON Write Enable. 0 = one-time writable after reset (default) 1 = always writable                                                                             |
| TM1         | I (pu)            | L1BCMPO  | Test Mode 1. Do not overdrive default value during reset.                                                                                                                   |
| TM2         | I (pu)            | L2BCMPO  | Test Mode 2. Do not overdrive default value during reset.                                                                                                                   |
| TM3         | I (pu)            | L3BCMPO  | Test Mode 3. Do not overdrive default value during reset.                                                                                                                   |

All strap pins are sampled on the rising edge of RST\_IN (deassertion edge). Each pin latches the strapped pin state (state of the strap pin at the rising edge of RST\_IN). Shortly after deassertion of RST\_IN, these pins are reconfigured to their normal functionality.

When default configuration is used, no external resistor is needed on the strap pins. To apply other configurations, a 500 Ω resistor connected to VDD\_IO is required. If providing external pull-downs, do not strap these pins directly to V SS ; the strap pins require 500 Ω resistor straps. I = input; A = asynchronous; O = output; OD = open-drain output; T = three-state; P = power supply; G = ground; pd = internal pull-down 5 k Ω ; pu = internal pull-up 5 k Ω ; pd\_0 = internal pull-down 5 k Ω on DSP ID = 0; pu\_0 =  internal pull-up 5 k Ω on DSP ID = 0; pu\_od\_0 =  internal pull-up 500 Ω on DSP ID = 0; pd\_m = internal pull-down 5 k Ω on DSP bus master; pu\_m = internal pull-up 5 k Ω on DSP bus master; pu\_ad = internal pull-up 40 k Ω . For more pull-down and pull-up information, see Electrical Characteristics on Page 22. Table 17. Strap Pin Internal Resistors-Active Reset (RST\_IN = 0) vs. Normal Operation (RST\_IN = 1) OBSOLETE

These strap pins have an internal pull-down resistor, pull-up resistor, or no-resistor (three-state) on each pin. The resistor type, which is connected to the I/O pad, depends on whether RST\_IN is active (low) or if RST\_IN is deasserted (high). Table 17 shows the resistors that are enabled during active reset and during normal operation.

| Pin     | RST_IN = 0   | RST_IN = 1   |
|---------|--------------|--------------|
| BMS     | (pd_0)       | (pu_0)       |
| BM      | (pd)         | Driven       |
| TMR0E   | (pd)         | Driven       |
| BUSLOCK | (pd_0)       | (pu_0)       |
| L1BCMPO | (pu)         | Driven       |
| L2BCMPO | (pu)         | Driven       |
| L3BCMPO | (pu)         | Driven       |

pd = internal pull-down 5 k Ω ; pu = internal pull-up 5 k Ω ;

pd\_0 = internal pull-down 5 k Ω on DSP ID = 0;

pu\_0 = internal pull-up 5 k Ω on DSP ID = 0

connected to logic inputs, a stronger external pull-up or pulldown may be required to ensure default value depending on leakage and/or low level input current of the logic load. To set a mode other than the default mode, connect the strap pin to a sufficiently stronger external pull-up or pull-down. Table 16 lists and describes each of the DSP's strap pins.

## ADSP-TS201S-SPECIFICATIONS

Note that component specifications are subject to change without notice. For information on link port electrical characteristics, see Link Port Low Voltage, Differential-Signal (LVDS) Electrical Characteristics, and Timing on Page 30.

## OPERATING CONDITIONS

| Parameter    | Description                                              | Test Conditions                                                                        | Grade 1   | Min                | Typ        | Max        | Unit   |
|--------------|----------------------------------------------------------|----------------------------------------------------------------------------------------|-----------|--------------------|------------|------------|--------|
| V DD         | Internal Supply Voltage                                  | @CCLK = 600MHz @CCLK = 500MHz                                                          | 060 050   | 1.14 1.00          | 1.20 1.05  | 1.26 1.10  | V V    |
| V DD_A       | Analog Supply Voltage                                    | @CCLK = 600MHz @CCLK = 500MHz                                                          | 060 050   | 1.14 1.00          | 1.20 1.05  | 1.26 1.10  | V V    |
| V DD_IO      | I/O Supply Voltage                                       |                                                                                        | (all)     | 2.38               | 2.50       | 2.63       | V      |
| V DD_DRAM    | Internal DRAMSupply Voltage                              | @CCLK = 600MHz @CCLK = 500MHz                                                          | 060 050   | 1.52 1.425         | 1.60 1.500 | 1.68 1.575 | V V    |
| T CASE       | Case Operating Temperature                               |                                                                                        | A         | -40                |            | +85        | °C     |
| T CASE V IH1 | Case Operating Temperature High Level Input Voltage 2, 3 |                                                                                        | W (all)   | -40 1.7            |            | +105 3.63  | °C V   |
| V IH2        | High Level Input Voltage 3, 4                            | @V DD , V DD_IO = Max                                                                  |           | 1.9                |            |            |        |
|              |                                                          | @V DD , V DD_IO = Max                                                                  | (all)     |                    |            | 3.63       | V      |
| V IL         | Low Level Input Voltage 3, 5                             | @V DD , V DD_IO = Min                                                                  | (all)     | -0.33              |            | +0.8       | V      |
| I DD         | V DD Supply Current, Typical Activity 6                  | @CCLK = 600 MHz, V DD = 1.20 V, T CASE =                                               | 060       |                    | 2.90       |            | A      |
| I            | V DD_A Supply Current, Typical Activity                  | 25°C @CCLK = 500 MHz, V DD = 1.05 V, T                                                 | 050       | 2.06               |            |            | A      |
| DD_A         |                                                          | @CCLK = 600 MHz, V DD = 1.20 V, T CASE = 25°C @CCLK = 500 MHz, V DD = 1.05 V, T = 25°C | 060 050   | 20                 | 25         | 55 50      | mA mA  |
| I DD_DRAM    | V DD_DRAM SupplyCurrent,TypicalActivity 6                | @CCLK=600 MHz, V DD_DRAM = 1.6 V, T CASE = 25°C 25°C OBSOLETE                          | 060       | 0.28               |            | 0.43       | A      |
|              |                                                          | @CCLK=500 MHz, V DD_DRAM = 1.5 V, T CASE =                                             | 050       | 0.25               |            | 0.40       | A      |
| V REF        | Voltage Reference                                        |                                                                                        | (all)     | (V DD_IO ×0.56)±5% |            |            | V      |
| SCLK_V REF   | Voltage Reference                                        |                                                                                        | (all)     | (V CLOCK _DRIVE    | × 0.56)    | ±5%        | V      |

## ADSP-TS201S

Table 18. Maximum Duty Cycle for Input Transient Voltage

|   V IN Max(V) 1 |   V IN Min (V) 1 | MaximumDuty Cycle 2   |
|-----------------|------------------|-----------------------|
|            3.63 |            -0.33 | 100%                  |
|            3.64 |            -0.34 | 90%                   |
|            3.7  |            -0.4  | 50%                   |
|            3.78 |            -0.48 | 30%                   |
|            3.86 |            -0.56 | 17%                   |
|            3.93 |            -0.63 | 10%                   |

## ELECTRICAL CHARACTERISTICS

| Parameter   | Description                      | Test Conditions                          | Min   | Max   | Unit   |
|-------------|----------------------------------|------------------------------------------|-------|-------|--------|
| V OH        | High Level Output Voltage 1      | @V DD_IO =Min, I OH =-2mA                | 2.18  |       | V      |
| V OL        | Low Level Output Voltage 1       | @V DD_IO =Min, I OL =4mA                 |       | 0.4   | V      |
| I IH        | High Level Input Current         | @V DD_IO =Max, V IN =V IH Max            |       | 20    | µA     |
| I IH_PU     | High Level Input Current         | @V DD_IO =Max, V IN =V IH Max            |       | 20    | µA     |
| I IH_PD     | High Level Input Current         | @V DD_IO =Max, V IN =V DD_IO Max         | 0.3   | 0.76  | mA     |
| I IH_PD_L   | High Level Input Current         | @V DD_IO =Max, V IN =V IH Max            | 30    | 76    | µA     |
| I IL        | Low Level Input Current          | @V DD_IO =Max, V IN =0 V                 |       | 20    | µA     |
| I IL_PU     | Low Level Input Current          | @V DD_IO =Max, V IN =0 V                 | 0.3   | 0.76  | mA     |
| I IL_PU_AD  | Low Level Input Current          | @V DD_IO =Max, V IN =0 V                 | 30    | 100   | µA     |
| I OZH       | Three-State Leakage Current High | @V DD_IO =Max, V IN =V IH Max            |       | 50    | µA     |
| I OZH_PD    | Three-State Leakage Current High | @V DD_IO =Max, V IN =V DD_IO Max         | 0.3   | 0.76  | mA     |
| I OZL       | Three-State Leakage Current Low  | @V DD_IO =Max, V IN =0 V                 |       | 20    | µA     |
| I OZL_PU    | Three-State Leakage Current Low  | @V DD_IO =Max, V IN =0 V                 | 0.3   | 0.76  | mA     |
| I OZL_PU_AD | Three-State Leakage Current Low  | @V DD_IO =Max, V IN =0 V                 | 30    | 100   | µA     |
| I OZL_OD    | Three-State Leakage Current Low  | @V DD_IO =Max, V IN =0 V                 | 4     | 7.6   | mA     |
| C IN        | Input Capacitance 2, 3           | @f IN =1MHz, T CASE =25 ° C, V IN =2.5 V |       | 3     | pF     |

OBSOLETE

Parameter name suffix conventions: no suffix = applies to pins without pull-up or pull-down resistors, \_PD = applies to pin types (pd) or (pd\_0), \_PU = applies to pin types (pu) or (pu\_0), \_PU\_AD = applies to pin types (pu\_ad), \_OD = applies to pin types OD, \_PD\_L = applies to pin types (pd\_l)

1 Applies to output and bidirectional pins.

2 Applies to all signals.

3 Guaranteed but not tested.

## PACKAGE INFORMATION

The information presented in Figure 8 provide details about the package branding for the ADSP-TS201S processors. For a complete listing of product availability, see Ordering Guide on Page 46.

<!-- image -->

Table 19. Package Brand Information

| Brand Key   | Field Description           |
|-------------|-----------------------------|
| t           | Temperature Range           |
| pp          | Package Type                |
| Z           | Lead Free Option (optional) |
| ccc         | See Ordering Guide          |
| LLLLLLLLL-L | Silicon Lot Number          |
| R.R         | Silicon Revision            |
| yyww        | Date Code                   |
| vvvvvv      | Assembly Lot Code           |

## ESD SENSITIVITY

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

Stresses greater than those listed below may cause permanent damage to the device. These are stress ratings only. Functional operation of the device at these or any other conditions greater than those indicated in the operational sections of this specification is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## Table 20. Absolute Maximum Ratings

| Parameter                                   | Rating                   |
|---------------------------------------------|--------------------------|
| Internal (Core) Supply Voltage (V DD )      | -0.3 V to +1.4 V         |
| Analog (PLL) Supply Voltage (V DD_A )       | -0.3 V to +1.4 V         |
| External (I/O) Supply Voltage (V DD_IO )    | -0.3 V to +3.5 V         |
| External (DRAM) Supply Voltage (V DD_DRAM ) | -0.3 V to +2.1 V         |
| Input Voltage 1                             | -0.63 V to +3.93 V       |
| Output Voltage Swing                        | -0.5 V to V DD_IO +0.5 V |
| Storage Temperature Range                   | -65°C to +150°C          |

Figure 8. Typical Package Brand 1 Applies to 10% transient duty cycle. For other duty cycles see Table 18. ESD (electrostatic  discharge)  sensitive  device. Charged devices and circuit boards can discharge without detection.  Although  this  product  features patented or proprietary circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper  ESD  precautions  should  be  take  to  avoid performance degradation or loss of functionality. OBSOLETE

## ADSP-TS201S

## TIMING SPECIFICATIONS

With the exception of DMAR3-0, IRQ3-0, TMR0E, and FLAG3-0 (input only) pins, all ac timing for the ADSP-TS201S processor is relative to a reference clock edge. Because input setup/hold, output valid/hold, and output enable/disable times are relative to a clock edge, the timing data for the ADSPTS201S processor has few calculated (formula-based) values. For information on ac timing, see General AC Timing. For information on link port transfer timing, see Link Port Low Voltage, Differential-Signal (LVDS) Electrical Characteristics, and Timing on Page 30.

The general ac timing data appears in Table 22 and Table 29. All ac specifications are measured with the load specified in Figure 36 on Page 38, and with the output drive strength set to strength 4. In order to calculate the output valid and hold times for different load conditions and/or output drive strengths, refer to Figure 37 on Page 38 through Figure 44 on Page 39 (Rise and Fall Time vs. Load Capacitance) and Figure 45 on Page 39 (Output Valid vs. Load Capacitance and Drive Strength).

The ac asynchronous timing data for the IRQ3-0, DMAR3-0, FLAG3-0, and TMR0E pins appears in Table 21.

| Name      | Description       | Pulse Width Low(Min)   | Pulse Width High (Min)   |
|-----------|-------------------|------------------------|--------------------------|
| IRQ3-0 1  | Interrupt Request | 2×t SCLK ns            | 2×t SCLK ns              |
| DMAR3-0 1 | DMARequest        | 2×t SCLK ns            | 2×t SCLK ns              |
| FLAG3-0 2 | FLAG3-0 Input     | 2×t SCLK ns            | 2×t SCLK ns              |
| TMR0E 3   | Timer 0 Expired   | 4×t SCLK ns            | -                        |

|           |                       | Grade = 060 (600 MHz) Min   | Grade = 050 (500 MHz)   | Grade = 050 (500 MHz)   |      |
|-----------|-----------------------|-----------------------------|-------------------------|-------------------------|------|
| Parameter | Description           | Max                         | Min                     | Max                     | Unit |
| t CCLK 1  | Core Clock Cycle Time | 1.67 12.5                   | 2.0                     | 12.5                    | ns   |

<!-- image -->

General AC Timing Timing is measured on signals when they cross the 1.25 V level as described in Figure 15 on Page 29. All delays (in nanoseconds) are measured between the point that the first signal reaches 1.25 V and the point that the second signal reaches 1.25 V. Table 21. AC Asynchronous Signal Specifications 1 These input pins have Schmitt triggers and therefore do not need to be synchronized to a clock reference. 2 For output specifications on FLAG3-0 pins, see Table 29. 3 This pin is a strap option. During reset, an internal resistor pulls the pin low. Table 22. Reference Clocks-Core Clock (CCLK) Cycle Time 1 CCLK is the internal processor clock or instruction cycle time. The period of this clock is equal to the system clock period (t SCLK ) divided by the system clock ratio (SCLKRAT2-0). For information on available part numbers for different internal processor clock rates, see the Ordering Guide on Page 46. Figure 9. Reference Clocks-Core Clock (CCLK) Cycle Time OBSOLETE

Table 23. Reference Clocks-System Clock (SCLK) Cycle Time

|                |                                             | SCLKRAT = 4 × , 6 × , 8 × , 10 × , 12 ×   | SCLKRAT = 4 × , 6 × , 8 × , 10 × , 12 ×   | SCLKRAT = 5 × , 7 ×   | SCLKRAT = 5 × , 7 ×   |      |
|----------------|---------------------------------------------|-------------------------------------------|-------------------------------------------|-----------------------|-----------------------|------|
| Parameter      | Description                                 | Min                                       | Max                                       | Min                   | Max                   | Unit |
| t SCLK 1, 2, 3 | System Clock Cycle Time                     | 8                                         | 50                                        | 8                     | 50                    | ns   |
| t SCLKH        | System Clock Cycle High Time                | 0.40 × t SCLK                             | 0.60 × t SCLK                             | 0.45 × t SCLK         | 0.55 × t SCLK         | ns   |
| t SCLKL        | System Clock Cycle Low Time                 | 0.40 × t SCLK                             | 0.60 × t SCLK                             | 0.45 × t SCLK         | 0.55 × t SCLK         | ns   |
| t SCLKF        | System Clock Transition Time-Falling Edge 4 | -                                         | 1.5                                       | -                     | 1.5                   | ns   |
| t SCLKR        | System Clock Transition Time-Rising Edge    | -                                         | 1.5                                       | -                     | 1.5                   | ns   |
| t SCLKJ 5, 6   | System Clock Jitter Tolerance               | -                                         | 500                                       | -                     | 500                   | ps   |

<!-- image -->

| Parameter   | Description                       | Min Max                       | Unit   |
|-------------|-----------------------------------|-------------------------------|--------|
| t TCK       | Test Clock (JTAG) Cycle Time      | Greater of 30 or t CCLK × 4 - | ns     |
| t TCKH      | Test Clock (JTAG) Cycle High Time | 12 -                          | ns     |
| t TCKL      | Test Clock (JTAG) Cycle Low Time  | 12 -                          | ns     |

<!-- image -->

1 For more information, see Table 3 on Page 12. 2 For more information, see Clock Domains on Page 9. 3 The value of (tSCLK / SCLKRAT2-0) must not violate the specification for tCCLK. 4 System clock transition times apply to minimum SCLK cycle time (tSCLK) only. 5 Actual input jitter should be combined with ac specifications for accurate timing analysis. 6 Jitter specification is maximum peak-to-peak time interval error (TIE) jitter. Figure 10. Reference Clocks-System Clock (SCLK) Cycle Time Table 24. Reference Clocks-JTAG Test Clock (TCK) Cycle Time Figure 11. Reference Clocks-JTAG Test Clock (TCK) Cycle Time OBSOLETE

## ADSP-TS201S

## Table 25. Power-Up Timing 1

| Parameter                                                        | Min   | Max   | Unit   |
|------------------------------------------------------------------|-------|-------|--------|
| Timing Requirement                                               |       |       |        |
| t VDD_DRAM V DD_DRAM Stable After V DD , V DD_A , V DD_IO Stable | >0    |       | ms     |

<!-- image -->

## Table 26. Power-Up Reset Timing

| Parameter                | Min                                                                                               | Max          | Unit   |
|--------------------------|---------------------------------------------------------------------------------------------------|--------------|--------|
| Timing Requirements      | Timing Requirements                                                                               |              |        |
| t RST_IN_PWR             | RST_IN Deasserted After V DD , V DD_A , V DD_IO , V DD_DRAM , SCLK, and Static/ Strap Pins Stable | 2            | ms     |
| t TRST_IN_PWR 1          | TRST Asserted During Power-Up Reset                                                               | 100 × t SCLK | ns     |
| Switching Characteristic | Switching Characteristic                                                                          |              |        |
| t RST_OUT_PWR            | RST_OUT Deasserted After RST_IN Deasserted                                                        | 1.5          | ms     |

<!-- image -->

Figure 12. Power-Up Timing Figure 13. Power-Up Reset Timing OBSOLETE

Table 27. Normal Reset Timing

| Parameter                | Min                                        | Max   | Unit   |
|--------------------------|--------------------------------------------|-------|--------|
| Timing Requirements      |                                            |       |        |
| t RST_IN                 | RST_IN Asserted                            | 2     | ms     |
| t STRAP                  | RST_IN Deasserted After Strap Pins Stable  | 1.5   | ms     |
| Switching Characteristic | Switching Characteristic                   |       |        |
| t RST_OUT                | RST_OUT Deasserted After RST_IN Deasserted | 1.5   | ms     |

<!-- image -->

| Parameter                        | Min   | Max   | Unit   |
|----------------------------------|-------|-------|--------|
| Timing Requirement               |       |       |        |
| t REF On-chip DRAMRefresh Period |       | 1.56  | µ s    |

<!-- image -->

Figure 14. Normal Reset Timing Table 28. On-Chip DRAM Refresh 1 1 For more information on setting the refresh rate for the on-chip DRAM, refer to the ADSP-TS201 TigerSHARC Processor Programming Reference . OBSOLETE

## ADSP-TS201S

## ADSP-TS201S

Table 29. AC Signal Specifications

## (All values in this table are in nanoseconds.)

| Name            | Description                               | Input Setup (Min)   | Input Hold (Min)   | Output Valid (Max)   | Output Hold (Min)   | Output Enable (Min) 1   | Output Disable (Max) 1   | Reference Clock   |
|-----------------|-------------------------------------------|---------------------|--------------------|----------------------|---------------------|-------------------------|--------------------------|-------------------|
| ADDR31-0        | External Address Bus                      | 1.5                 | 0.5                | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| DATA63-0        | External Data Bus                         | 1.5                 | 0.5                | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| MSH             | Memory Select HOST Line                   | -                   | -                  | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| MSSD3-0         | Memory Select SDRAM Lines                 | 1.5                 | 0.5                | 4.0                  | 1.0                 | 1.0                     | 2.0                      | SCLK              |
| MS1-0           | Memory Select for Static Blocks           | -                   | -                  | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| RD              | Memory Read                               | 1.5                 | 0.5                | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| WRL             | Write Low Word                            | 1.5                 | 0.5                | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| WRH             | Write High Word                           | 1.5                 | 0.5                | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| ACK             | Acknowledge for Data High to Low          | 1.5                 | 0.5                | 3.6                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
|                 | Acknowledge for Data Low to High OBSOLETE | 1.5                 | 0.5                | 4.2                  | 0.9                 | 1.15                    | 2.0                      | SCLK              |
| SDCKE           | SDRAM Clock Enable                        | 1.5                 | 0.5                | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| RAS             | Row Address Select                        | 1.5                 | 0.5                | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| CAS             | Column Address Select                     | 1.5                 | 0.5                | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| SDWE            | SDRAM Write Enable                        | 1.5                 | 0.5                | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| LDQM            | Low Word SDRAM Data Mask                  | -                   | -                  | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| HDQM            | High Word SDRAM Data Mask                 | -                   | -                  | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| SDA10           | SDRAM ADDR10                              | -                   | -                  | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| HBR             | Host Bus Request                          | 1.5                 | 0.5                | -                    | -                   | -                       | -                        | SCLK              |
| HBG             | Host Bus Grant                            | 1.5                 | 0.5                | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| BOFF            | Back Off Request                          | 1.5                 | 0.5                | -                    | -                   | -                       | -                        | SCLK              |
| BUSLOCK         | Bus Lock                                  | -                   | -                  | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| BRST            | Burst Pin                                 | 1.5                 | 0.5                | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| BR7-0           | Multiprocessing Bus Request Pins          | 1.5                 | 0.5                | 4.0                  | 1.0                 | -                       | -                        | SCLK              |
| BM              | Bus Master Debug Aid Only                 | -                   | -                  | 4.0                  | 1.0                 | -                       | -                        | SCLK              |
| IORD            | I/O Read Pin                              | -                   | -                  | 4.0                  | 1.0                 | 1.0                     | 2.0                      | SCLK              |
| IOWR            | I/O Write Pin                             | -                   | -                  | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| IOEN            | I/O Enable Pin                            | -                   | -                  | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| CPA             | Core Priority Access High to Low          | 1.5                 | 0.5                | 4.0                  | 1.0                 | 0.75                    | 2.0                      | SCLK              |
|                 | Core Priority Access Low to High          | 1.5                 | 0.5                | 29.5                 | 2.0                 | 0.75                    | 2.0                      | SCLK              |
| DPA             | DMAPriority Access High to Low            | 1.5                 | 0.5                | 4.0                  | 1.0                 | 0.75                    | 2.0                      | SCLK              |
|                 | DMAPriority Access Low to High            | 1.5                 | 0.5                | 29.5                 | 2.0                 | 0.75                    | 2.0                      | SCLK              |
| BMS             | Boot Memory Select                        | -                   | -                  | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| FLAG3-0 2       | FLAG Pins                                 | -                   | -                  | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| RST_IN 3, 4     | Global Reset Pin                          | 1.5                 | 2.5                | -                    | -                   | -                       | -                        | SCLK 5            |
| TMS             | Test Mode Select (JTAG)                   | 1.5                 | 0.5                | -                    | -                   | -                       | -                        | TCK               |
| TDI             | Test Data Input (JTAG)                    | 1.5                 | 0.5                | -                    | -                   | -                       | -                        | TCK               |
| TDO             | Test Data Output (JTAG)                   | -                   | -                  | 4.0                  | 1.0                 | 0.75                    | 2.0                      | TCK 6             |
| TRST 3, 4       | Test Reset (JTAG)                         | 1.5                 | 0.5                | -                    | -                   | -                       | -                        | TCK               |
| EMU 7           | Emulation High to Low                     | -                   | -                  | 5.5                  | 2.0                 | 1.15                    | 4.0                      | TCK or SCLK       |
| ID2-0 8         | Static Pins-Must Be Constant              | -                   | -                  | -                    | -                   | -                       | -                        | -                 |
| CONTROLIMP1-0 8 | Static Pins-Must Be Constant              | -                   | -                  | -                    | -                   | -                       | -                        | -                 |

## Table 29. AC Signal Specifications  (Continued)

## (All values in this table are in nanoseconds.)

1 The external port protocols employ bus IDLE cycles for bus mastership transitions as well as slave access boundary crossings to avoid any potential bus contention. The apparent driver overlap, due to output disables being larger than output enables, is not actual. 2 For input specifications on FLAG3-0 pins, see Table 21. 3 These input pins are asynchronous and therefore do not need to be synchronized to a clock reference. 4 For additional requirement details, see Reset and Booting on Page 9. 5 RST\_IN clock reference is the falling edge of SCLK. 6 TDO output clock reference is the falling edge of TCK. 7 Reference clock depends on function. 8 These pins may change only during reset; recommend connecting it to VDD\_IO/VSS. 9 STRAP pins include: BMS, BM, BUSLOCK, TMR0E, L1BCMPO, L2BCMPO, and L3BCMPO. 10 Specifications applicable during reset only. 11 JTAG system pins include: RST\_IN, RST\_OUT, POR\_IN, IRQ3-0, DMAR3-0, HBR, BOFF, MS1-0, MSH, SDCKE, LDQM, HDQM, BMS, IOWR, IORD, BM, EMU, SDA10, IOEN, BUSLOCK, TMR0E, DATA63-0, ADDR31-0, RD, WRL, WRH, BRST, MSSD3-0, RAS, CAS, SDWE, HBG, BR7-0, FLAG3-0, L0DATOP3-0, L0DATON3-0, L1DATOP3-0, L1DATON3-0, L2DATOP3-0, L2DATON3-0, L3DATOP3-0, L3DATON3-0, L0CLKOUTP, L0CLKOUTN, L1CLKOUTP, L1CLKOUTN, L2CLKOUTP, L2CLKOUTN, L3CLKOUTP, L3CLKOUTN, L0ACKI, L1ACKI, L2ACKI, L3ACKI, L0DATIP3-0, L0DATIN3-0, L1DATIP3-0, L1DATIN3-0, L2DATIP3-0, L2DATIN3-0, L3DATIP3-0, L3DATIN3-0, L0CLKINP, L0CLKINN, L1CLKINP, L1CLKINN, L2CLKINP, L2CLKINN, L3CLKINP, L3CLKINN, L0ACKO, L1ACKO, L2ACKO, L3ACKO, ACK, CPA, DPA, L0BCMPO, L1BCMPO, L2BCMPO, L3BCMPO, L0BCMPI, L1BCMPI, L2BCMPI, L3BCMPI, ID2-0, CTRL\_IMPD1-0, SCLKRAT2-0, DS2-0, ENEDREG. 12 JTAG system output timing clock reference is the falling edge of TCK. OBSOLETE

Figure 15. General AC Parameters Timing

| Name            | Description                           | Input Setup (Min)   | Input Hold (Min)   | Output Valid (Max)   | Output Hold (Min)   | Output Enable (Min) 1   | Output Disable (Max) 1   | Reference Clock   |
|-----------------|---------------------------------------|---------------------|--------------------|----------------------|---------------------|-------------------------|--------------------------|-------------------|
| DS2-0 8         | Static Pins-Must Be Constant          | -                   | -                  | -                    | -                   | -                       | -                        | -                 |
| SCLKRAT2-0 8    | Static Pins-Must Be Constant          | -                   | -                  | -                    | -                   | -                       | -                        | -                 |
| ENEDREG         | Static Pins-Must Be Connected to V SS | -                   | -                  | -                    | -                   | -                       | -                        | -                 |
| STRAP SYS 9, 10 | Strap Pins                            | 1.5                 | 0.5                | -                    | -                   | -                       | -                        | SCLK              |
| JTAG SYS 11, 12 | JTAG System Pins                      | +2.5                | +10.0              | +12.0                | -1.0                | -                       | -                        | TCK               |

<!-- image -->

## ADSP-TS201S

## Link Port Low Voltage, Differential-Signal (LVDS) Electrical Characteristics, and Timing

Table 30 and Table 31 with Figure 16 provide the electrical characteristics for the LVDS link ports. The LVDS link port signal definitions represent all differential signals with a VOD = 0 V level and use signal naming without N (negative) and P (positive) suffixes (see Figure 17).

## Table 30. Link Port LVDS Transmit Electrical Characteristics

| Parameter         | Description                         | Test Conditions      | Min   | Max     | Unit   |
|-------------------|-------------------------------------|----------------------|-------|---------|--------|
| V OH              | Output Voltage High, V O_P or V O_N | R L = 100 Ω          |       | 1.85    | V      |
| V OL              | Output Voltage Low, V O_P or V O_N  | R L = 100 Ω          | 0.92  |         | V      |
| &#124;V OD &#124; | Output Differential Voltage         | R L = 100 Ω          | 300   | 650     | mV     |
| I OS              | Short-Circuit Output Current        | V O_P or V O_N = 0 V |       | +5/- 55 | mA     |
| V OCM             | Common-Mode Output Voltage          |                      | 1.20  | 1.50    | V      |

## Table 31. Link Port LVDS Receive Electrical Characteristics

| Parameter         | Description                | Test Conditions                                                                                     | Min             | Max             | Unit        |
|-------------------|----------------------------|-----------------------------------------------------------------------------------------------------|-----------------|-----------------|-------------|
| &#124;V ID &#124; | Differential Input Voltage | t LDIS /t LDIH ≥ 0.20 ns t LDIS /t LDIH ≥ 0.25 ns t LDIS /t LDIH ≥ 0.30 ns t LDIS /t LDIH ≥ 0.35 ns | 250 217 206 195 | 850 850 850 850 | mV mV mV mV |
| V ICM             | Common-Mode Input Voltage  |                                                                                                     | 0.6             | 1.57            | V           |

<!-- image -->

Figure 16. Link Ports-Transmit Electrical Characteristics

<!-- image -->

OBSOLETE

Figure 17. Link Ports-Signals Definition

## Link Port-Data Out Timing

Table 32 with Figure 18, Figure 19, Figure 20, Figure 21, Figure 22, and Figure 23 provide the data out timing for the LVDS link ports.

Table 32. Link Port-Data Out Timing

| Parameter       | Description                                                                                                                                                                                           | Min                                                                                                                                    | Max                                           | Unit     |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|----------|
| Outputs         |                                                                                                                                                                                                       |                                                                                                                                        |                                               |          |
| t REO           | Rising Edge (Figure 19)                                                                                                                                                                               |                                                                                                                                        | 350                                           | ps       |
| t FEO           | Falling Edge (Figure 19)                                                                                                                                                                              |                                                                                                                                        | 350                                           | ps       |
| t LCLKOP        | LxCLKOUT Period (Figure 18)                                                                                                                                                                           | Greater of 2.0 or 0.9 × LCR × t CCLK 1, 2, 3                                                                                           | Smaller of 12.5 or 1.1 × LCR × t CCLK 1, 2, 3 | ns       |
| t LCLKOH        | LxCLKOUT High (Figure 18)                                                                                                                                                                             | 0.4 × t LCLKOP 1                                                                                                                       | 0.6 × t LCLKOP 1                              | ns       |
| t LCLKOL        | LxCLKOUT Low (Figure 18)                                                                                                                                                                              | 0.4 × t LCLKOP 1                                                                                                                       | 0.6 × t LCLKOP 1                              | ns       |
| t COJT          | LxCLKOUT Jitter (Figure 18)                                                                                                                                                                           |                                                                                                                                        | ± 150 4, 5, 6 ± 7                             | ps       |
| t LDOS          | LxDATO Output Setup (Figure 20)                                                                                                                                                                       | 0.25 × LCR × t CCLK - 0.10 × t CCLK 1, 4, 8 0.25 × LCR × t CCLK - 0.15 × t CCLK 1, 5, 6, 8 0.25 × LCR × t CCLK - 0.30 × t CCLK 1, 7, 8 | 250                                           | ns ns ns |
| t LDOH          | LxDATO Output Hold (Figure 20)                                                                                                                                                                        | 0.25 × LCR × t CCLK - 0.10 × t CCLK 1, 4, 8 0.25 × LCR × t CCLK - 0.15 × t CCLK 1, 5, 6, 8 0.25 × LCR × t CCLK - 0.30 × t CCLK 1, 7, 8 |                                               | ns ns ns |
| t LACKID        | Delay from LxACKI rising edge to first transmission clock edge (Figure 21)                                                                                                                            |                                                                                                                                        | 16 × LCR × t CCLK 1, 2                        | ns       |
| t BCMPOV        | LxBCMPO Valid (Figure 21)                                                                                                                                                                             |                                                                                                                                        | 2 × LCR × t CCLK 1, 2                         | ns       |
| t BCMPOH Inputs | LxBCMPO Hold (Figure 22)                                                                                                                                                                              | 3 × TSW - 0.5 1, 9                                                                                                                     |                                               | ns       |
| t LACKIS        | LxACKI low setup to guarantee that the transmitter stops transmitting (Figure 22) LxACKI high setup to guarantee that the transmitter continues its transmission without any interruption (Figure 23) | 16 × LCR × t CCLK 1, 2                                                                                                                 |                                               | ns       |
| t LACKIH        | LxACKI High Hold Time (Figure 23)                                                                                                                                                                     | 0.51                                                                                                                                   |                                               | ns       |

1 Timing is relative to the 0 differential voltage (V OD = 0). 2 LCR (link port clock ratio) = 1, 1.5, 2, or 4. t CCLK is the core period. 3 For the cases of t LCLKOP = 2.0 ns and t LCLKOP = 12.5 ns, the effect of tCOJT specification on output period must be considered. 4 LCR= 1. 5 LCR= 1.5. 6 LCR= 2. 7 LCR= 4. 8 The tLDOS and tLDOH values include LCLKOUT jitter. 9 TSW is a short-word transmission period. For a 4-bit link, it is 2 × LCR × t CCLK. For a 1-bit link, it is 8 × LCR × t CCLK ns. OBSOLETE

## ADSP-TS201S

<!-- image -->

Figure 18. Link Ports-Output Clock

<!-- image -->

Figure 19. Link Ports-Differential Output Signals Transition Time

<!-- image -->

Figure 20. Link Ports-Data Output Setup and Hold 1 1 These parameters are valid for both clock edges. OBSOLETE

Figure 21. Link Ports-Transmission Start

<!-- image -->

## ADSP-TS201S

<!-- image -->

<!-- image -->

Figure 22. Link Ports-Transmission End and Stops OBSOLETE

Figure 23. Link Ports-Back to Back Transmission

## ADSP-TS201S

## Link Port-Data In Timing

Table 33 with Figure 24 and Figure 25 provide the data in timing for the LVDS link ports.

## Table 33. Link Port-Data In Timing

| Parameter   | Description                    | Min                                     | Max   | Unit        |
|-------------|--------------------------------|-----------------------------------------|-------|-------------|
| Inputs      |                                |                                         |       |             |
| t LCLKIP    | LxCLKIN Period (Figure 25)     | Greater of 1.8 or 0.9 × t CCLK 1        | 12.5  | ns          |
| t LDIS      | LxDATI Input Setup (Figure 25) | 0.20 1, 2 0.25 1, 3 0.30 1, 4 0.35 1, 5 |       | ns ns ns ns |
| t LDIH      | LxDATI Input Hold (Figure 25)  | 0.20 1, 2 0.25 1, 3 0.30 1, 4 0.35 1, 5 | ns ns | ns ns ns    |
| t BCMPIS    | LxBCMPI Setup (Figure 24)      | 2 × t LCLKIP 1                          |       |             |
| t BCMPIH    | LxBCMPI Hold (Figure 24)       | 2 × t LCLKIP 1                          |       | ns          |

<!-- image -->

Figure 24. Link Ports-Last Received Quad Word OBSOLETE

<!-- image -->

1 These parameters are valid for both clock edges.

## ADSP-TS201S

Figure 25. Link Ports-Data Input Setup and Hold 1 OBSOLETE

## ADSP-TS201S

## OUTPUT DRIVE CURRENTS

Figure 26 through Figure 33 show typical I-V characteristics for the output drivers of the ADSP-TS201S processor. The curves in these diagrams represent the current drive capability of the output drivers as a function of output voltage over the range of drive strengths. Typical drive currents for intermediate temperatures (such as 85°C) should be obtained from the curves using linear interpolation. For complete output driver characteristics, refer to the DSP's IBIS models, available on the Analog Devices website (www.analog.com).

<!-- image -->

<!-- image -->

Figure 26. Typical Drive Currents at Strength 0 Figure 28. Typical Drive Currents at Strength 2 Figure 29. Typical Drive Currents at Strength 3 OBSOLETE

Figure 30. Typical Drive Currents at Strength 4

<!-- image -->

Figure 27. Typical Drive Currents at Strength 1

<!-- image -->

<!-- image -->

Figure 33. Typical Drive Currents at Strength 7

<!-- image -->

<!-- image -->

<!-- image -->

## TEST CONDITIONS

The ac signal specifications (timing parameters) appear in Table 29 on Page 28. These include output disable time, output enable time, and capacitive loading. The timing specifications for the DSP apply for the voltage reference levels in Figure 34.

<!-- image -->

<!-- image -->

Output Disable Time Output pins are considered to be disabled when they stop driving, go into a high impedance state, and start to decay from their output high or low voltage. The time for the voltage on the bus to decay by ∆ V is dependent on the capacitive load, CL and the load current, IL. This decay time can be approximated by the following equation: The output disable time tDIS is the difference between tMEASURED\_DIS and tDECAY as shown in Figure 35. The time t MEASURED\_DIS is the interval from when the reference signal switches to when the output voltage decays ∆ V from the measured output high or output low voltage. tDECAY is calculated with test loads C L and I L , and with ∆ V equal to 0.4 V. Figure 31. Typical Drive Currents at Strength 5 Figure 32. Typical Drive Currents at Strength 6 Figure 34. Voltage Reference Levels for AC Measurements (Except Output Enable/Disable) t DECAY C L V ∆ ( ) I L / = OBSOLETE

Figure 35. Output Enable/Disable

## ADSP-TS201S

## ADSP-TS201S

## Output Enable Time

Output pins are considered to be enabled when they have made a transition from a high impedance state to when they start driving. The time for the voltage on the bus to ramp by ∆ V is dependent on the capacitive load, CL, and the drive current, I D. This ramp time can be approximated by the following equation:

<!-- formula-not-decoded -->

## Capacitive Loading

<!-- image -->

<!-- image -->

The output enable time tENA is the difference between tMEASURED\_ENA and tRAMP as shown in Figure 35. The time t MEASURED\_ENA is the interval from when the reference signal switches to when the output voltage ramps ∆ V from the measured three-stated output level. t RAMP is calculated with test load CL, drive current I D, and with ∆ V equal to 0.4 V. Output valid and hold are based on standard capacitive loads: 30 pF on all pins (see Figure 36). The delay and hold specifications given should be derated by a drive strength related factor for loads other than the nominal value of 30 pF. Figure 37 through Figure 44 show how output rise time varies with capacitance. Figure 45 graphically shows how output valid varies with load capacitance. (Note that this graph or derating does not apply to output disable delays; see Output Disable Time on Page 37.) The graphs of Figure 37 through Figure 45 may not be linear outside the ranges shown. Figure 36. Equivalent Device Loading for AC Measurements (Includes All Fixtures) 1.25V TO OUTPUT PIN 30pF 50 𝛀 Figure 38. Typical Output Rise and Fall Time (10% to 90%, VDD\_IO =2.5 V) vs. Load Capacitance at Strength 1 Figure 39. Typical Output Rise and Fall Time (10% to 90%, VDD\_IO =2.5 V) vs. Load Capacitance at Strength 2 OBSOLETE

Figure 40. Typical Output Rise and Fall Time (10% to 90%, VDD\_IO =2.5 V) vs. Load Capacitance at Strength 3

<!-- image -->

Figure 37. Typical Output Rise and Fall Time (10% to 90%, VDD\_IO =2.5 V) vs. Load Capacitance at Strength 0

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## ADSP-TS201S

<!-- image -->

<!-- image -->

Strength 0: y = 0.1255x + 2.7873

Strength 1: y = 0.0764x + 1.0492

Strength 2: y = 0.0474x + 1.0806

Strength 3: y = 0.0345x + 1.2329

Strength 4: y = 0.0296x + 1.2064

Strength 5: y = 0.0246x + 1.0944

Strength 6: y = 0.0187x + 1.1005

Strength 7: y = 0.0156x + 1.084

Figure 41. Typical Output Rise and Fall Time (10% to 90%, VDD\_IO =2.5 V) vs. Load Capacitance at Strength 4 Figure 42. Typical Output Rise and Fall Time (10% to 90%, VDD\_IO =2.5 V) vs. Load Capacitance at Strength 5 Figure 44. Typical Output Rise and Fall Time (10% to 90%, VDD\_IO =2.5 V) vs. Load Capacitance at Strength 7 Figure 45. Typical Output Valid (VDD\_IO =2.5 V) vs. Load Capacitance at Max Case Temperature and Strength 0 to 7 1 1 The line equations for the output valid vs. load capacitance are: OBSOLETE

Figure 43. Typical Output Rise and Fall Time (10% to 90%, VDD\_IO =2.5 V) vs. Load Capacitance at Strength 6

## ADSP-TS201S

## ENVIRONMENTAL CONDITIONS

The ADSP-TS201S processor is rated for performance under TCASE environmental conditions specified in the Operating Conditions on Page 21.

## Thermal Characteristics

The ADSP-TS201S processor is packaged in a 25 mm × 25 mm, thermally enhanced ball grid array (BGA\_ED). The ADSP-TS201S processor is specified for a case temperature (TCASE). To ensure that the T CASE data sheet specification is not exceeded, a heat sink and/or an air flow source may be required.

Table 34 shows the thermal characteristics of the 25 mm × 25 mm BGA\_ED package. All parameters are based on a JESD51-9 four-layer 2s2p board. All data are based on 3 W power dissipation.

Table 34. Thermal Characteristics for 25 mm × 25 mm Package

| Parameter   | Condition       | Typical   | Unit   |
|-------------|-----------------|-----------|--------|
| θ JA 1      | Airflow = 0 m/s | 12.9 2    | °C/W   |
|             | Airflow = 1 m/s | 10.2      | °C/W   |
|             | Airflow = 2 m/s | 9.0       | °C/W   |
|             | Airflow = 3 m/s | 8.0       | °C/W   |
| θ JB 3      | -               | 7.7       | °C/W   |
| θ JC 4      | -               | 0.7       | °C/W   |

1 θ JA measured per JEDEC standard JESD51-6.

2 θ JA = 12.9 ° C/W for 0 m/s is for vertically mounted boards. For horizontally mounted boards, use 17.0 ° C/W for 0 m/s.

3 θ JB measured per JEDEC standard JESD51-9.

4 θ JC measured by cold plate test method (no approved JEDEC standard).

<!-- image -->

OBSOLETE

## 576-BALL BGA\_ED PIN CONFIGURATIONS

Figure 46 shows a summary of pin configurations for the 576-ball BGA\_ED package and Table 35 lists the signal-to-ball assignments.

<!-- image -->

Figure 46. 576-Ball BGA\_ED Pin Configurations 1 (Top View, Summary) 1 For a more detailed pin summary diagram, see the EE-179: ADSP-TS201S System Design Guidelines on the Analog Devices website (www.analog.com). TOPVIEW OBSOLETE

## ADSP-TS201S

Table 35. 576-Ball (25 mm × 25 mm) BGA\_ED Ball Assignments

| Ball No.   | SignalName    | Ball No.   | SignalName   | Ball No.   | SignalName      | Ball No.   | SignalName   |
|------------|---------------|------------|--------------|------------|-----------------|------------|--------------|
| A1         | V SS          | B1         | DATA53       | C1         | V SS            | D1         | DATA55       |
| A2         | DATA51        | B2         | V SS         | C2         | V SS            | D2         | DATA56       |
| A3         | V SS          | B3         | V SS         | C3         | V SS            | D3         | DATA54       |
| A4         | DATA49        | B4         | DATA50       | C4         | DATA52          | D4         | V SS         |
| A5         | DATA43        | B5         | DATA44       | C5         | DATA47          | D5         | DATA48       |
| A6         | DATA41        | B6         | DATA42       | C6         | DATA45          | D6         | DATA46       |
| A7         | DATA37        | B7         | DATA38       | C7         | DATA39          | D7         | DATA40       |
| A8         | DATA33        | B8         | DATA34       | C8         | DATA35          | D8         | DATA36       |
| A9         | DATA29        | B9         | DATA30       | C9         | DATA31          | D9         | DATA32       |
| A10        | DATA25        | B10        | DATA26       | C10        | DATA27          | D10        | DATA28       |
| A11        | DATA23        | B11        | DATA24       | C11        | DATA21          | D11        | DATA22       |
| A12        | DATA19        | B12        | DATA20       | C12        | DATA17          | D12        | DATA18       |
| A13        | DATA15        | B13        | DATA16       | C13        | V SS            | D13        | V SS         |
| A14        | DATA11        | B14        | DATA12       | C14        | DATA13          | D14        | DATA14       |
| A15        | DATA9         | B15        | DATA10       | C15        | DATA7           | D15        | DATA8        |
| A16        | DATA5         | B16        | DATA6        | C16        | DATA3           | D16        | DATA4        |
| A17        | DATA1         | B17        | DATA2        | C17        | ACK             | D17        | DATA0        |
| A18        | WRL           | B18        | WRH          | C18        | RD              | D18        | BRST         |
| A19        | ADDR30        | B19        | ADDR31       | C19        | ADDR26 OBSOLETE | D19        | ADDR27       |
| A20        | ADDR28        | B20        | ADDR29       | C20        | ADDR24          | D20        | ADDR25       |
| A21        | ADDR22        | B21        | ADDR23       | C21        | ADDR20          | D21        | V SS         |
| A22        | V SS          | B22        | V            | C22        | V SS            | D22        | ADDR19       |
| A23        | ADDR21        | B23        | SS V SS      | C23        | V DD_IO         | D23        | ADDR17       |
| A24        | V SS          | B24        | ADDR18       | C24        | V DD_IO         | D24        | ADDR16       |
| E1         | DATA61        | F1         | DATA63       | G1         | MSSD1           | H1         | V SS         |
| E2         | DATA62        | F2         | MS1          | G2         | V SS            | H2         | MSH          |
| E3         | DATA57        | F3         | DATA59       | G3         | MS0             | H3         | MSSD3        |
| E4         | DATA58        | F4         | DATA60       | G4         | BMS             | H4         | SCLKRAT0     |
| E5         | V SS          | F5         | V DD_IO      | G5         | V SS            | H5         | V DD_IO      |
| E6         | V DD_IO       | F6         | V DD         | G6         | V DD            | H6         | V DD         |
| E7         | V SS          | F7         | V DD         | G7         | V DD            | H7         | V DD         |
| E8         | V DD_IO       | F8         | V DD         | G8         | V DD            | H8         | V SS         |
| E9         | V SS          | F9         | V DD         | G9         | V DD            | H9         | V SS         |
| E10        | V DD_IO       | F10        | V DD         | G10        | V DD            | H10        | V SS         |
| E11        | V DD_IO       | F11        | V DD_DRAM    | G11        | V DD_DRAM       | H11        | V SS         |
| E12        | V DD_IO       | F12        | V DD_DRAM    | G12        | V DD_DRAM       | H12        | V SS         |
| E13        | V DD_IO       | F13        | V DD         | G13        | V DD            | H13        | V SS         |
| E14        | V DD_IO       | F14        | V DD         | G14        | V DD            | H14        | V SS         |
| E15        | V DD_IO       | F15        | V DD_DRAM    | G15        | V DD_DRAM       | H15        | V SS         |
| E16        | V SS          | F16        | V DD_DRAM    | G16        | V DD_DRAM       | H16        | V SS         |
| E17        | V DD_IO       | F17        | V DD         | G17        | V DD            | H17        | V SS         |
| E18        | V SS          | F18        | V DD         | G18        | V DD            | H18        | V DD         |
| E19        | V DD_IO       | F19        | V DD         | G19        | V DD            | H19        | V DD         |
| E20        | V SS          | F20        | V DD_IO      | G20        | V DD_IO         | H20        | V DD_IO      |
| E21        | ADDR15        | F21        | ADDR13       | G21        | ADDR7           | H21        | ADDR3        |
| E22 E23    | ADDR14 ADDR11 | F22 F23    | ADDR12 ADDR9 | G22 G23    | ADDR6           | H22 H23    | ADDR2 ADDR1  |
| E24        | ADDR10        | F24        | ADDR8        | G24        | ADDR5 ADDR4     | H24        | ADDR0        |

Table 35. 576-Ball (25 mm × 25 mm) BGA\_ED Ball Assignments  (Continued)

| Ball No.   | SignalName          | Ball No.   | SignalName          | Ball No.   | SignalName       | Ball No.   | SignalName       |
|------------|---------------------|------------|---------------------|------------|------------------|------------|------------------|
| J1         | RAS                 | K1         | SDA10               | L1         | SDWE             | M1         | BR3              |
| J2         | CAS                 | K2         | SDCKE               | L2         | BR0              | M2         | SCLKRAT1         |
| J3         | V SS                | K3         | LDQM                | L3         | BR1              | M3         | BR5              |
| J4         | V REF               | K4         | HDQM                | L4         | BR2              | M4         | BR6              |
| J5         | V SS                | K5         | V DD_IO             | L5         | V DD_IO          | M5         | V DD_IO          |
| J6         | V DD                | K6         | V DD                | L6         | V DD             | M6         | V DD             |
| J7         | V DD                | K7         | V DD                | L7         | V DD             | M7         | V DD             |
| J8         | V SS                | K8         | V SS                | L8         | V SS             | M8         | V SS             |
| J9         | V SS                | K9         | V SS                | L9         | V SS             | M9         | V SS             |
| J10        | V SS                | K10        | V SS                | L10        | V SS             | M10        | V SS             |
| J11        | V SS                | K11        | V SS                | L11        | V SS             | M11        | V SS             |
| J12        | V SS                | K12        | V SS                | L12        | V SS             | M12        | V SS             |
| J13        | V SS                | K13        | V SS                | L13        | V SS             | M13        | V SS             |
| J14        | V SS                | K14        | V SS                | L14        | V SS             | M14        | V SS             |
| J15        | V SS                | K15        | V SS                | L15        | V SS OBSOLETE    | M15        | V SS             |
| J16        | V SS                | K16        | V SS                | L16        | V SS             | M16        | V SS             |
| J17        | V SS                | K17        | V SS                | L17        | V SS             | M17        | V SS             |
| J18        | V DD                | K18        | V DD_DRAM           | L18        | V DD_DRAM        | M18        | V DD             |
| J19        | V DD                | K19        | V DD_DRAM           | L19        | V DD_DRAM        | M19        | V DD             |
| J20        | V SS                | K20        | V DD_IO             | L20        | V DD_IO          | M20        | V DD_IO          |
| J21        | L0ACKO              | K21        | L0DATI1_N           | L21        | L0DATI3_N        | M21        | V SS             |
| J22        | L0BCMPI             | K22        | L0DATI1_P           | L22        | L0DATI3_P        | M22        | V SS             |
| J23        | L0DATI0_N           | K23        | L0CLKINN            | L23        | L0DATI2_N        | M23        | L0DATO3_N        |
| J24        | L0DATI0_P           | K24        | L0CLKINP            | L24        | L0DATI2_P        | M24        | L0DATO3_P        |
| N1         | ID0                 | P1         | SCLK                | R1         | V SS             | T1         | RST_IN           |
| N2         | V SS                | P2         | SCLK_VREF           | R2         | NC (SCLK) 1      | T2         | SCLKRAT2         |
| N3         | V DD_A              | P3         | V SS                | R3         | NC (SCLK_VREF) 1 | T3         | BR4              |
| N4         | V DD_A              | P4         | BM                  | R4         | BR7              | T4         | DS0              |
| N5         | V DD_IO             | P5         | V DD_IO             | R5         | V DD_IO          | T5         | V SS             |
| N6         | V DD                | P6         | V DD                | R6         | V DD             | T6         | V DD             |
| N7         | V DD                | P7         | V DD                | R7         | V DD             | T7         | V DD             |
| N8         | V SS                | P8         | V SS                | R8         | V SS             | T8         | V SS             |
| N9         | V SS                | P9         | V SS                | R9         | V SS             | T9         | V SS             |
| N10        | V SS                | P10        | V SS                | R10        | V SS             | T10        | V SS             |
| N11        | V SS                | P11        | V SS                | R11        | V SS             | T11        | V SS             |
| N12        | V SS                | P12        | V SS                | R12        | V SS             | T12        | V SS             |
| N13        | V SS                | P13        | V SS                | R13        | V SS             | T13        | V SS             |
| N14        | V SS                | P14        | V SS                | R14        | V SS             | T14        | V SS             |
| N15        | V SS                | P15        | V SS                | R15        | V SS             | T15        | V SS             |
| N16        | V SS                | P16        | V SS                | R16        | V SS             | T16        | V SS             |
| N17        | V SS                | P17        | V SS                | R17        | V SS             | T17        | V SS             |
| N18        | V DD                | P18        | V DD_DRAM           | R18        | V DD_DRAM        | T18        | V DD             |
| N19        | V DD                | P19        | V DD_DRAM           | R19        | V DD_DRAM        | T19        | V DD             |
| N20        | V DD_IO             | P20        | V DD_IO             | R20        | V DD_IO          | T20        | V SS             |
| N21        | L0DATO2_N L0DATO2_P | P21        | L0DATO1_N L0DATO1_P | R21        | NC               | T21        | L1DATI0_N        |
| N22 N23    | L0CLKON             | P22        |                     | R22        | V SS             | T22        | L1DATI0_P L1ACKO |
| N24        | L0CLKOP             | P23        | L0DATO0_N           | R23        | L0BCMPO          | T23        | L1BCMPI          |
|            |                     | P24        | L0DATO0_P           | R24        | L0ACKI           | T24        |                  |

## ADSP-TS201S

## ADSP-TS201S

Table 35. 576-Ball (25 mm × 25 mm) BGA\_ED Ball Assignments  (Continued)

| Ball No.   | SignalName          | Ball No.   | SignalName     | Ball No.   | SignalName   | Ball No.   | SignalName   |
|------------|---------------------|------------|----------------|------------|--------------|------------|--------------|
| U1         | MSSD0               | V1         | MSSD2          | W1         | CONTROLIMP0  | Y1         | EMU          |
| U2         | RST_OUT             | V2         | DS2            | W2         | ENEDREG      | Y2         | TCK          |
| U3         | ID2                 | V3         | POR_IN         | W3         | TDI          | Y3         | TMR0E        |
| U4         | DS1                 | V4         | CONTROLIMP1    | W4         | TDO          | Y4         | FLAG3        |
| U5         | V DD_IO             | V5         | V SS           | W5         | V DD_IO      | Y5         | V SS         |
| U6         | V DD                | V6         | V DD           | W6         | V DD         | Y6         | V DD_IO      |
| U7         | V DD                | V7         | V DD           | W7         | V DD         | Y7         | V SS         |
| U8         | V SS                | V8         | V DD           | W8         | V DD         | Y8         | V DD_IO      |
| U9         | V SS                | V9         | V DD           | W9         | V DD         | Y9         | V SS         |
| U10        | V DD                | V10        | V DD           | W10        | V DD         | Y10        | V DD_IO      |
| U11        | V DD_DRAM           | V11        | V DD_DRAM      | W11        | V DD_DRAM    | Y11        | V DD_IO      |
| U12        | V SS                | V12        | V DD_DRAM      | W12        | V DD_DRAM    | Y12        | V DD_IO      |
| U13        | V SS                | V13        | V DD           | W13        | V DD         | Y13        | V DD_IO      |
| U14        | V SS                | V14        | V DD           | W14        | V DD         | Y14        | V DD_IO      |
| U15        | V SS                | V15        | V DD_DRAM      | W15        | V DD_DRAM    | Y15        | V DD_IO      |
| U16        | V SS                | V16        | V DD_DRAM      | W16        | V DD_DRAM    | Y16        | V SS         |
| U17        | V SS                | V17        | V DD           | W17        | V DD         | Y17        | V DD_IO      |
| U18        | V DD                | V18        | V DD           | W18        | V DD         | Y18        | V SS         |
| U19        | V DD                | V19        | V DD           | W19        | V DD         | Y19        | V DD_IO      |
| U20        | V DD_IO             | V20        | V DD_IO        | W20        | V DD_IO      | Y20        | V SS         |
| U21        | L1CLKINN            | V21        | L1DATI3_N      | W21        | L1CLKON      | Y21        | L1DATO1_N    |
| U22        | L1CLKINP            | V22        | L1DATI3_P      | W22        | L1CLKOP      | Y22        | L1DATO1_P    |
| U23        | L1DATI1_N           | V23        | L1DATI2_N      | W23        | L1DATO3_N    | Y23        | L1DATO2_N    |
| U24        | L1DATI1_P           | V24        | L1DATI2_P      | W24        | L1DATO3_P    | Y24        | L1DATO2_P    |
| AA1        | FLAG2               | AB1        | V SS           | AC1        | FLAG0        | AD1        | V SS         |
| AA2        | FLAG1               | AB2        | V SS           | AC2        | V SS         | AD2        | ID1          |
| AA3        | IRQ3                | AB3        | V SS           | AC3        | V DD_IO      | AD3        | V DD_IO      |
| AA4        | V SS                | AB4        | NC             | AC4        | TMS          | AD4        | TRST         |
| AA5        | IRQ0                | AB5        | IRQ2           | AC5        | IOWR         | AD5        | IORD         |
| AA6        | IOEN                | AB6        | IRQ1           | AC6        | DMAR2        | AD6        | DMAR3        |
| AA7        | DMAR0               | AB7        | DMAR1 OBSOLETE | AC7        | CPA          | AD7        | DPA          |
| AA8        | HBR                 | AB8        | HBG            | AC8        | BOFF         | AD8        | BUSLOCK      |
| AA9        | L3BCMPO             | AB9        | L3ACKI         | AC9        | L3DATO0_N    | AD9        | L3DATO0_P    |
| AA10       | L3DATO1_N           | AB10       | L3DATO1_P      | AC10       | L3CLKON      | AD10       | L3CLKOP      |
| AA11       | L3DATO3_N           | AB11       | L3DATO3_P      | AC11       | L3DATO2_N    | AD11       | L3DATO2_P    |
| AA12       | V SS                | AB12       | V SS           | AC12       | L3DATI3_N    | AD12       | L3DATI3_P    |
| AA13       | L3DATI2_N           | AB13       | L3DATI2_P      | AC13       | L3CLKINN     | AD13       | L3CLKINP     |
| AA14       | L3DATI1_N           | AB14       | L3DATI1_P      | AC14       | L3DATI0_N    | AD14       | L3DATI0_P    |
| AA15       | NC                  | AB15       | V SS           | AC15       | L3ACKO       | AD15       | L3BCMPI      |
| AA16       | L2DATO0_N           | AB16       | L2DATO0_P      | AC16       | L2BCMPO      | AD16       | L2ACKI       |
| AA17       | L2CLKON             | AB17       | L2CLKOP        | AC17       | L2DATO1_N    | AD17       | L2DATO1_P    |
| AA18       | L2DATO3_N           | AB18       | L2DATO3_P      | AC18       | L2DATO2_N    | AD18       | L2DATO2_P    |
| AA19       | L2CLKINN            | AB19       | L2CLKINP       | AC19       | L2DATI3_N    | AD19       | L2DATI3_P    |
| AA20       | L2DATI1_N           | AB20       | L2DATI1_P      | AC20       | L2DATI2_N    | AD20       | L2DATI2_P    |
| AA21       | V SS                | AB21       | L2ACKO         | AC21       | L2DATI0_N    | AD21       | L2DATI0_P    |
| AA22       | L1BCMPO             | AB22       | V SS           | AC22       | V DD_IO      | AD22       | V DD_IO      |
| AA23 AA24  | L1DATO0_N L1DATO0_P | AB23       | V DD_IO V      | AC23       | V SS         | AD23 AD24  | L2BCMPI V    |
|            |                     | AB24       | DD_IO          | AC24       | L1ACKI       |            | SS           |

## OUTLINE DIMENSIONS

The ADSP-TS201S processor is available in a 25 mm × 25 mm, 576-ball metric thermally enhanced ball grid array (BGA\_ED) package with 24 rows of balls (BP-576).

25.20

Figure 47. 576-Ball BGA\_ED (BP-576) 1. ALL DIMENSIONS ARE IN MILLIMETERS. 2. THE ACTUAL POSITION OF THE BALL GRID IS WITHIN 0.25 mm OF ITS IDEAL POSITION RELATIVE TO THE PACKAGE EDGES. 3. CENTER DIMENSIONS ARE NOMINAL. 4. THIS PACKAGE CONFORMS TO JEDEC MS-034 SPECIFICATION. OBSOLETE

<!-- image -->

## SURFACE MOUNT DESIGN

Table 36 is provided as an aid to PCB design. For industrystandard design recommendations, refer to IPC-7351, Generic Requirements for Surface Mount Design and Land Pattern Standard .

Table 36. BGA Data for Use with Surface Mount Design

| Package                  | Ball Attach Type              | Solder Mask Opening   | Ball Pad Size   |
|--------------------------|-------------------------------|-----------------------|-----------------|
| 576-Ball BGA_ED (BP-576) | Nonsolder Mask Defined (NSMD) | 0.69 mmdiameter       | 0.56 mmdiameter |

## ADSP-TS201S

## ORDERING GUIDE

| Model                | Temperature Range 1   | Instruction Rate 2   | On-Chip DRAM   | Operating Voltage                       | Package Option   | Package Description   |
|----------------------|-----------------------|----------------------|----------------|-----------------------------------------|------------------|-----------------------|
| ADSP-TS201SABP-060   | -40°C to +85°C        | 600 MHz              | 24M bit        | 1.20 V DD , 2.5 V DD_IO , 1.6 V DD_DRAM | BP-576           | 576-Ball BGA_ED       |
| ADSP-TS201SABP-050   | -40°C to +85°C        | 500 MHz              | 24M bit        | 1.05 V DD , 2.5 V DD_IO , 1.5 V DD_DRAM | BP-576           | 576-Ball BGA_ED       |
| ADSP-TS201SYBP-050   | -40°C to +105°C       | 500 MHz              | 24M bit        | 1.05 V DD , 2.5 V DD_IO , 1.5 V DD_DRAM | BP-576           | 576-Ball BGA_ED       |
| ADSP-TS201SABPZ060 3 | -40°C to +85°C        | 600 MHz              | 24M bit        | 1.20 V DD , 2.5 V DD_IO , 1.6 V DD_DRAM | BP-576           | 576-Ball BGA_ED       |
| ADSP-TS201SABPZ050 3 | -40°C to +85°C        | 500 MHz              | 24M bit        | 1.05 V DD , 2.5 V DD_IO , 1.5 V DD_DRAM | BP-576           | 576-Ball BGA_ED       |
| ADSP-TS201SYBPZ050 3 | -40°C to +105°C       | 500 MHz              | 24M bit        | 1.05 V DD , 2.5 V DD_IO , 1.5 V DD_DRAM | BP-576           | 576-Ball BGA_ED       |

1

Represents case temperature.

2 The instruction rate is the same as the internal processor core clock (CCLK) rate.

3

Z = Pb-free part.

OBSOLETE

ADSP-TS201S

OBSOLETE

ADSP-TS201S

## OBSOLETE

2006  Analog  Devices,  Inc.  All  rights  reserved.  Trademarks  and

©

registered  trademarks  are  the  property  of  their  respective  owners.

D

04324-0-11/06(C)

Rev. C

<!-- image -->

|

Page 48 of 48

|

December 2006