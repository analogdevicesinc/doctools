<!-- lastmod 2025-09-05 -->
<!-- image -->

## KEY FEATURES

- 500 MHz, 2.0 ns instruction cycle rate
- 4Mbits of internal-on-chip-DRAM memory
- 25 mm × 25 mm (576-ball) thermally enhanced ball grid array package
- Dual-computation blocks-each containing an ALU, a multiplier, a shifter, and a register file
- Dual-integer ALUs, providing data addressing and pointer manipulation
- Single-precision IEEE 32-bit and extended-precision 40-bit floating-point data formats and 8-, 16-, 32-, and 64-bit fixed-point data formats
- Integrated I/O includes 10-channel DMA controller, external port, two link ports, SDRAM controller, programmable flag pins, two timers, and timer expired pin for system integration

<!-- image -->

## TigerSHARC Embedded Processor

ADSP-TS203S

- 1149.1 IEEE-compliant JTAG test access port for on-chip emulation

On-chip arbitration for glueless multiprocessing

## KEY BENEFITS

Provides high performance static superscalar DSP operations, optimized for large, demanding multiprocessor DSP applications Performs exceptionally well on DSP algorithm and I/O benchmarks (see benchmarks in Table 1) Supports low overhead DMA transfers between internal memory, external memory, memory-mapped peripherals, link ports, host processors, and other (multiprocessor) DSPs Eases programming through extremely flexible instruction set and high-level-language-friendly architecture Enables scalable multiprocessing systems with low communications overhead OBSOLETE

Figure 1. Functional Block Diagram

TigerSHARC and the TigerSHARC logo are registered trademarks of Analog Devices, Inc.

Information  furnished  by  Analog  Devices  is  believed  to  be  accurate  and  reliable. However,  no  responsibility  is  assumed  by  Analog  Devices  for  its  use,  nor  for  any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## ADSP-TS203S

## TABLE OF CONTENTS

| Key Features . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   | . 1   |
|--------------------------------------------------------------------------------------------------------------------------------|-------|
| Key Benefits . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   | . 1   |
| General Description . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                | . 3   |
| Dual Compute Blocks . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                          | . 4   |
| Data Alignment Buffer (DAB) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                      | . 4   |
| Dual Integer ALU (IALU) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                | . 4   |
| Program Sequencer . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                      | . 4   |
| Memory . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .     | . 5   |
| External Port (Off-Chip Memory/Peripherals Interface)                                                                          | . 5   |
| DMAController . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                  | . 7   |
| Link Ports (LVDS) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                    | . 7   |
| Timer and General-Purpose I/O . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                          | . 8   |
| Reset and Booting . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                  | . 8   |
| Clock Domains . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                | . 8   |
| Filtering Reference Voltage and Clocks . . . . . . . . . . . . . . . . . . .                                                   | . 8   |
| Power Domains . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                | . 9   |
| Development Tools . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                      | . 9   |
| Related Signal Chains . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                        | 10    |

## REVISION HISTORY

5/12-Rev. C to Rev. D

Added model to Ordering Guide  ................................ 47

<!-- image -->

Additional Information  ........................................  10

Pin Function Descriptions  ........................................  11

Strap Pin Function Descriptions  ................................  18

Specifications  ........................................................  20

Operating Conditions ...........................................  20

Electrical Characteristics  .......................................  21

Package Information ............................................  22

Absolute Maximum Ratings ...................................  22

ESD Sensitivity  ...................................................  22

Timing Specifications ...........................................  23

Output Drive Currents  .........................................  34

Test Conditions  ..................................................  35

Environmental Conditions  ....................................  38

576-Ball BGA\_ED Pin Configurations .........................  39

Outline Dimensions ................................................  46

Surface Mount Design  ..........................................  46

Ordering Guide  .....................................................  47

OBSOLETE

## GENERAL DESCRIPTION

The ADSP-TS203S TigerSHARC processor is an ultrahigh performance, static superscalar processor optimized for large signal processing tasks and communications infrastructure. The processor combines very wide memory widths with dual computation blocks-supporting floating-point (IEEE 32-bit and extended precision 40-bit) and fixed-point (8-, 16-, 32-, and 64-bit) processing-to set a new standard of performance for digital signal processors. The TigerSHARC static superscalar architecture lets the processor execute up to four instructions each cycle, performing 24 fixed-point (16-bit) operations or six floating-point operations.

Four independent 128-bit wide internal data buses, each connecting to the four 1M bit memory banks, enable quad-word data, instruction, and I/O access and provide 28G bytes per second of internal memory bandwidth. Operating at 500 MHz, the ADSP-TS203S processor's core has a 2.0 ns instruction cycle time. Using its single-instruction, multiple-data (SIMD) features, the processor can perform four billion 40-bit MACS or one billion 80-bit MACS per second. Table 1 shows the processor's performance benchmarks.

Table 1. General-Purpose Algorithm Benchmarks at 500 MHz

| Benchmark                                                | Speed                                               | Clock Cycles                                        |
|----------------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|
| 32-bit algorithm, 1 billion MACS/s peak performance      | 32-bit algorithm, 1 billion MACS/s peak performance | 32-bit algorithm, 1 billion MACS/s peak performance |
| 1K point complex FFT 1 (Radix2)                          | 18.8 µs                                             | 9419 13975                                          |
| 64K point complex FFT 1 (Radix2)                         | 2.8 ms                                              | 44                                                  |
| FIR filter (per real tap)                                | 1 ns                                                | 0.5                                                 |
| [8 × 8][8 × 8] matrix multiply (complex, floating-point) | 2.8 µs                                              | 1399                                                |
| 16-bit algorithm, 4 billion MACS/s peak performance      | 16-bit algorithm, 4 billion MACS/s peak performance | 16-bit algorithm, 4 billion MACS/s peak performance |
| 256 point complex FFT 1 (Radix 2)                        | 1.9 µs                                              | 928                                                 |
| I/O DMAtransfer rate                                     | I/O DMAtransfer rate                                | I/O DMAtransfer rate                                |
| External port                                            | 500M bytes/s                                        | n/a                                                 |
| Link ports (each)                                        | 500M bytes/s                                        | n/a                                                 |

1 Cache preloaded.

The ADSP-TS203S processor is code compatible with the other TigerSHARC processors.

The Functional Block Diagram on Page 1 shows the processor's architectural blocks. These blocks include

- An interrupt controller that supports hardware and software interrupts, supports level- or edge-triggers, and supports prioritized, nested interrupts
- Four 128-bit internal data buses, each connecting to the four 1M-bit memory banks
- On-chip DRAM (4M-bit)
- An external port that provides the interface to host processors, multiprocessing space (DSPs), off-chip memorymapped peripherals, and external SRAM and SDRAM

· A 10-channel DMA controller · Two full-duplex LVDS link ports · Two 64-bit interval timers and timer expired pin · An 1149.1 IEEE-compliant JTAG test access port for onchip emulation The TigerSHARC uses a Static Superscalar TM * architecture. This architecture is superscalar in that the ADSP-TS203S processor's core can execute simultaneously from one to four 32-bit instructions encoded in a very large instruction word (VLIW) instruction line using the processor's dual compute blocks. Because the processor does not perform instruction reordering at runtime-the programmer selects which operations will execute in parallel prior to runtime-the order of instructions is static. With few exceptions, an instruction line, whether it contains one, two, three, or four 32-bit instructions, executes with a throughput of one cycle in a 10-deep processor pipeline. For optimal processor program execution, programmers must follow the processor's set of instruction parallelism rules when encoding an instruction line. In general, the selection of instructions that the processor can execute in parallel each cycle depends both on the instruction line resources each instruction requires and on the source and destination registers used in the instructions. The programmer has direct control of three core components-the IALUs, the compute blocks, and the program sequencer. The ADSP-TS203S processor, in most cases, has a two-cycle execution pipeline that is fully interlocked, so-whenever a computation result is unavailable for another operation dependent on it-the processor automatically inserts one or more stall cycles as needed. Efficient programming with dependency-free instructions can eliminate most computational and memory transfer data dependencies. OBSOLETE

- Dual compute blocks, each consisting of an ALU, multiplier, 64-bit shifter, and 32-word register file and associated data alignment buffers (DABs)
- Dual integer ALUs (IALUs), each with its own 31-word register file for data addressing and a status register
- A program sequencer with instruction alignment buffer (IAB) and branch target buffer (BTB)

In addition, the processor supports SIMD operations two ways-SIMD compute blocks and SIMD computations. The programmer can load both compute blocks with the same data (broadcast distribution) or different data (merged distribution).

* Static Superscalar is a trademark of Analog Devices, Inc.

## ADSP-TS203S

## DUAL COMPUTE BLOCKS

The ADSP-TS203S processor has compute blocks that can execute computations either independently or together as a single-instruction, multiple-data (SIMD) engine. The processor can issue up to two compute instructions per compute block each cycle, instructing the ALU, multiplier, or shifter to perform independent, simultaneous operations. Each compute block can execute eight 8-bit, four 16-bit, two 32-bit, or one 64-bit SIMD computations in parallel with the operation in the other block. These computation units support IEEE 32-bit single-precision floating-point, extended-precision 40-bit floating point, and 8-, 16-, 32-, and 64-bit fixed-point processing.

The compute blocks are referred to as X and Y in assembly syntax, and each block contains three computational units-an ALU, a multiplier, a 64-bit shifter-and a 32-word register file.

- Register File-each compute block has a multiported 32-word, fully orthogonal register file used for transferring data between the computation units and data buses and for storing intermediate results. Instructions can access the registers in the register file individually (word-aligned), in sets of two (dual-aligned), or in sets of four (quad-aligned).
- ALU-the ALU performs a standard set of arithmetic operations in both fixed- and floating-point formats. It also performs logic and permute operations.
- Multiplier-the multiplier performs both fixed- and floating-point multiplication and fixed-point multiply and accumulate.
- Shifter-the 64-bit shifter performs logical and arithmetic shifts, bit and bit stream manipulation, and field deposit and extraction operations.

Using these features, the compute blocks can

- Provide 8 MACS per cycle peak and 7.1 MACS per cycle sustained 16-bit performance and provide 2 MACS per cycle peak and 1.8 MACS per cycle sustained 32-bit performance (based on FIR)
- Execute six single-precision floating-point or execute 24 fixed-point (16-bit) operations per cycle, providing 3G FLOPS or 12.0G/s regular operations performance at 500 MHz
- Perform two complex 16-bit MACS per cycle

## DATA ALIGNMENT BUFFER (DAB)

The DAB is a quad-word FIFO that enables loading of quadword data from nonaligned addresses. Normally, load instructions must be aligned to their data size so that quad words are loaded from a quad-aligned address. Using the DAB significantly improves the efficiency of some applications, such as FIR filters.

- Provide memory addresses for data and update pointers
- Support circular buffering and bit-reverse addressing
- Perform general-purpose integer operations, increasing programming flexibility
- Include a 31-word register file for each IALU

As address generators, the IALUs perform immediate or indirect (pre- and post-modify) addressing. They perform modulus and bit-reverse operations with no constraints placed on memory addresses for the modulus data buffer placement. Each IALU can specify either a single-, dual-, or quad-word access from memory.

The IALUs have hardware support for circular buffers, bit reverse, and zero-overhead looping. Circular buffers facilitate efficient programming of delay lines and other data structures required in digital signal processing, and they are commonly used in digital filters and Fourier transforms. Each IALU provides registers for four circular buffers, so applications can set up a total of eight circular buffers. The IALUs handle address pointer wraparound automatically, reducing overhead, increasing performance, and simplifying implementation. Circular buffers can start and end at any memory location. Because the IALU's computational pipeline is one cycle deep, in most cases integer results are available in the next cycle. Hardware (register dependency check) causes a stall if a result is unavailable in a given cycle. PROGRAM SEQUENCER The ADSP-TS203S processor's program sequencer supports: · A fully interruptible programming model with flexible programming in assembly and C/C++ languages; handles hardware interrupts with high throughput and no aborted instruction cycles · A 10-cycle instruction pipeline-four-cycle fetch pipe and six-cycle execution pipe-computation results available two cycles after operands are available · Supply of instruction fetch memory addresses; the sequencer's instruction alignment buffer (IAB) caches up to five fetched instruction lines waiting to execute; the program sequencer extracts an instruction line from the IAB and distributes it to the appropriate core component for execution · Management of program structures and program flow determined according to JUMP, CALL, RTI, RTS instructions, loop structures, conditions, interrupts, and software exceptions OBSOLETE

## DUAL INTEGER ALU (IALU)

The processor has two IALUs that provide powerful address generation capabilities and perform many general-purpose integer operations. The IALUs are referred to as J and K in assembly syntax and have the following features:

- Branch prediction and a 128-entry branch target buffer (BTB) to reduce branch delays for efficient execution of conditional and unconditional branch instructions and zero-overhead looping; correctly predicted branches occur with zero overhead cycles, overcoming the five-to-nine stage branch penalty
- Compact code without the requirement to align code in memory; the IAB handles alignment

## Interrupt Controller

The processor supports nested and nonnested interrupts. Each interrupt type has a register in the interrupt vector table. Also, each has a bit in both the interrupt latch register and the interrupt mask register. All interrupts are fixed as either levelsensitive or edge-sensitive, except the IRQ3-0 hardware interrupts, which are programmable.

The processor distinguishes between hardware interrupts and software exceptions, handling them differently. When a software exception occurs, the processor aborts all other instructions in the instruction pipe. When a hardware interrupt occurs, the processor continues to execute instructions already in the instruction pipe.

The ADSP-TS203S processor internal memory has 4M bits of on-chip DRAM memory, divided into four blocks of 1M bits (32K words × 32 bits). Each block-M0, M2, M4, and M6-can store program instructions, data, or both, so applications can configure memory to suit specific needs. Placing program instructions and data in different memory blocks, however, enables the processor to access data while performing an instruction fetch. Each memory segment contains a 128K bit cache to enable single-cycle accesses to internal DRAM.

The four internal memory blocks connect to the four 128-bit wide internal buses through a crossbar connection, enabling the processor to perform four memory transfers in the same cycle. The processor's internal bus architecture provides a total memory bandwidth of 28G bytes per second, allowing the core and I/O to access eight 32-bit data-words and four 32-bit instructions each cycle. Additional features are:

- Processor core and I/O access to different memory blocks in the same cycle
- Processor core access to three memory blocks in parallelone instruction and two data accesses

Flexible Instruction Set The 128-bit instruction line, which can contain up to four 32-bit instructions, accommodates a variety of parallel operations for concise programming. For example, one instruction line can direct the processor to conditionally execute a multiply, an add, and a subtract in both computation blocks while it also branches to another location in the program. Some key features of the instruction set include: · Algebraic assembly language syntax · Direct support for all DSP, imaging, and video arithmetic types · Eliminates toggling hardware modes because modes are supported as options (for example, rounding, saturation, and others) within instructions · Branch prediction encoded in instruction; enables zerooverhead loops · Parallelism encoded in instruction line · Conditional execution optional for all instructions · User-defined partitioning between program and data memory MEMORY The processor's internal and external memory is organized into a unified memory map, which defines the location (address) of all elements in the system, as shown in Figure 2. The memory map is divided into four memory areas-host space, external memory, multiprocessor space, and internal memory-and each memory space, except host memory, is subdivided into smaller memory spaces. · Programmable partitioning of program and data memory · Program access of all memory as 32-, 64-, or 128-bit words-16-bit words with the DAB EXTERNAL PORT (OFF-CHIP MEMORY/PERIPHERALS INTERFACE) The ADSP-TS203S processor's external port provides the processor's interface to off-chip memory and peripherals. The 4G word address space is included in the processor's unified address space. The separate on-chip buses-four 128-bit data buses and four 32-bit address buses-are multiplexed at the SOC interface and transferred to the external port over the SOC bus to create an external system bus transaction. The external system bus provides a single 32-bit data bus and a single 32-bit address bus. The external port supports data transfer rates of 500M bytes per second over the external bus. The external bus is configured for 32-bit, little-endian operations. Unlike the ADSP-TS201, the ADSP-TS203S processor's external port cannot support 64-bit operations; the external bus width control bits (Bits 21-19) must = 0 in the SYSCON register-all other values are illegal for the ADSP-TS203S. Because the external port is restricted to 32 bits on the ADSP-TS203S processor, there are a number of pinout differences between the ADSP-TS203S and the ADSP-TS201 processors. The external port supports pipelined, slow, and SDRAM protocols. Addressing of external memory devices and memorymapped peripherals is facilitated by on-chip decoding of high order address lines to generate memory bank select signals. The ADSP-TS203S processor provides programmable memory, pipeline depth, and idle cycle for synchronous accesses, and external acknowledge controls to interface to pipelined or slow devices, host processors, and other memory-mapped peripherals with variable access, hold, and disable time requirements. Host Interface OBSOLETE

The ADSP-TS203S processor provides an easy and configurable interface between its external bus and host processors through the external port. To accommodate a variety of host processors, the host interface supports pipelined or slow protocols for processor access of the host as slave or pipelined for host access of the ADSP-TS203S processor as slave. Each protocol has programmable transmission parameters, such as idle cycles, pipe depth, and internal wait cycles.

## ADSP-TS203S

The host interface supports burst transactions initiated by a host processor. After the host issues the starting address of the burst and asserts the BRST signal, the processor increments the address internally while the host continues to assert BRST.

The host interface provides a deadlock recovery mechanism that enables a host to recover from deadlock situations involving the processor. The BOFF signal provides the deadlock recovery mechanism. When the host asserts BOFF, the processor backs off the current transaction and asserts HBG and relinquishes the external bus.

The host can directly read or write the internal memory of the ADSP-TS203S processor, and it can access most of the processor registers, including DMA control (TCB) registers. Vector interrupts support efficient execution of host commands.

## Multiprocessor Interface

The processor offers powerful features tailored to multiprocessing processor systems through the external port and link ports. This multiprocessing capability provides the highest bandwidth for interprocessor communication, including

- Up to eight DSPs on a common bus
- On-chip arbitration for glueless multiprocessing
- Link ports for point-to-point communication

The external port and link ports provide integrated, glueless multiprocessing support.

Figure 2. ADSP-TS203S Memory Map

<!-- image -->

The external port supports a unified address space (see Figure 2) that enables direct interprocessor accesses of each ADSPTS203S processor's internal memory and registers. The processor's on-chip distributed bus arbitration logic provides simple, glueless connection for systems containing up to eight ADSP-TS203S processors and a host processor. Bus arbitration has a rotating priority. Bus lock supports indivisible readmodify-write sequences for semaphores. A bus fairness feature prevents one processor from holding the external bus too long.

The processor's two link ports provide a second path for interprocessor communications with throughput of 1G byte per second. The cluster bus provides 500M bytes per second throughput-with a total of 1.5G bytes per second interprocessor bandwidth.

## SDRAM Controller

The SDRAM controller controls the processor's transfers of data to and from external synchronous DRAM (SDRAM) at a throughput of 32 bits per SCLK cycle using the external port and SDRAM control pins.

The SDRAM interface provides a glueless interface with standard SDRAMs-16M bits, 64M bits, 128M bits, 256M bits and 512M bits. The processor supports directly a maximum of four banks of 64M words × 32 bits of SDRAM. The SDRAM interface is mapped in external memory in each processor's unified memory map.

## EPROM Interface

The processor can be configured to boot from an external 8-bit EPROM at reset through the external port. An automatic process (which follows reset) loads a program from the EPROM into internal memory. This process uses 16 wait cycles for each read access. During booting, the BMS pin functions as the EPROM chip select signal. The EPROM boot procedure uses DMA Channel 0, which packs the bytes into 32-bit instructions. Applications can also access the EPROM (write flash memories) during normal operation through DMA.

The EPROM or flash memory interface is not mapped in the processor's unified memory map. It is a byte address space limited to a maximum of 16M bytes (24 address bits). The EPROM or flash memory interface can be used after boot via a DMA.

## DMA CONTROLLER

The ADSP-TS203S processor's on-chip DMA controller, with 10 DMA channels, provides zero-overhead data transfers without processor intervention. The DMA controller operates independently and invisibly to the processor's core, enabling DMA operations to occur while the processor's core continues to execute program instructions.

## ADSP-TS203S

- External port block transfers. Four dedicated bidirectional DMA channels transfer blocks of data between the processor's internal memory and any external memory or memory-mapped peripheral on the external bus. Master mode and handshake mode protocols are supported.
- Link port transfers. Four dedicated DMA channels (two transmit and two receive) transfer quad-word data only between link ports and between a link port and internal or external memory. These transfers only use handshake mode protocol. DMA priority rotates between the two receive channels.

· AutoDMA transfers. Two dedicated unidirectional DMA channels transfer data received from an external bus master to internal memory or to link port I/O. These transfers only use slave mode protocol, and an external bus master must initiate the transfer. The DMA controller provides these additional features: · Flyby transfers. Flyby operations only occur through the external port (DMA channel 0) and do not involve the processor's core. The DMA controller acts as a conduit to transfer data from an external I/O device to external SDRAM memory. During a transaction, the processor relinquishes the external data bus; outputs addresses and memory selects (MSSD3-0); outputs the IORD, IOWR, IOEN, and RD/WR strobes; and responds to ACK. · DMA chaining. DMA chaining operations enable applications to automatically link one DMA transfer sequence to another for continuous transmission. The sequences can occur over different DMA channels and have different transmission attributes. · Two-dimensional transfers. The DMA controller can access and transfer two-dimensional memory arrays on any DMA transmit or receive channel. These transfers are implemented with index, count, and modify registers for both the X and Y dimensions. LINK PORTS (LVDS) The processor's two full-duplex link ports each provide additional four-bit receive and four-bit transmit I/O capability, using low-voltage, differential-signal (LVDS) technology. With the ability to operate at a double data rate-latching data on both the rising and falling edges of the clock-running at 250 MHz, each link port can support up to 250M bytes per second per direction, for a combined maximum throughput of 1G byte per second. OBSOLETE

The DMA controller performs DMA transfers between internal memory, external memory, and memory-mapped peripherals; the internal memory of other DSPs on a common bus, a host processor, or link port I/O; between external memory and external peripherals or link port I/O; and between an external bus master and internal memory or link port I/O. The DMA controller performs the following DMA operations:

The link ports provide an optional communications channel that is useful in multiprocessor systems for implementing pointto-point interprocessor communications. Applications can also use the link ports for booting.

Each link port has its own triple-buffered quad-word input and double-buffered quad-word output registers. The processor's core can write directly to a link port's transmit register and read

## ADSP-TS203S

from a receive register, or the DMA controller can perform DMA transfers through four (two transmit and two receive) dedicated link port DMA channels.

Each link port direction has three signals that control its operation. For the transmitter, LxCLKOUT is the output transmit clock, LxACKI is the handshake input to control the data flow, and the LxBCMPO output indicates that the block transfer is complete. For the receiver, LxCLKIN is the input receive clock, LxACKO is the handshake output to control the data flow, and the LxBCMPI input indicates that the block transfer is complete. The LxDATO3-0 pins are the data output bus for the transmitter, and the LxDATI3-0 pins are the input data bus for the receiver.

Applications can program separate error detection mechanisms for transmit and receive operations (applications can use the checksum mechanism to implement consecutive link port transfers), the size of data packets, and the speed at which bytes are transmitted.

## TIMER AND GENERAL-PURPOSE I/O

The ADSP-TS203S processor has a timer pin (TMR0E) that generates output when a programmed timer counter has expired, and four programmable general-purpose I/O pins (FLAG3-0) that can function as either single-bit input or output. As outputs, these pins can signal peripheral devices; as inputs, they can provide the test for conditional branching.

## RESET AND BOOTING

The processor has three levels of reset:

- Power-up reset - after power-up of the system (SCLK, all static inputs, and strap pins are stable), the RST\_IN pin must be asserted (low).
- Normal reset - for any chip reset following the power-up reset, the RST\_IN pin must be asserted (low).
- Processor-core reset - when setting the SWRST bit in EMUCTL, the processor core is reset, but not the external port or I/O.

For normal operations, tie the RST\_OUT pin to the POR\_IN pin.

After reset, the processor has four boot options for beginning operation:

- Boot from EPROM.
- Boot by an external master (host or another ADSP-TS203S processor).
- Boot by link port.

Table 2. No Boot, Run from Memory Addresses

| Interrupt   | Address                       |
|-------------|-------------------------------|
| IRQ0        | 0x3000 0000 (External Memory) |
| IRQ1        | 0x3800 0000 (External Memory) |
| IRQ2        | 0x8000 0000 (External Memory) |
| IRQ3        | 0x0000 0000 (Internal Memory) |

For more information on boot options, see the EE-200: ADSP-TS20x TigerSHARC Processor Boot Loader Kernels Operation on the Analog Devices website (www.analog.com)

<!-- image -->

<!-- image -->

CLOCK DOMAINS The processor uses calculated ratios of the SCLK clock to operate, as shown in Figure 3. The instruction execution rate is equal to CCLK. A PLL from SCLK generates CCLK which is phaselocked. The SCLKRATx pins define the clock multiplication of SCLK to CCLK (see Table 4 on Page 11). The link port clock is generated from CCLK via a software programmable divisor, and the SOC bus operates at 1/2 CCLK. Memory transfers to external and link port buffers operate at the SOCCLK rate. SCLK also provides clock input for the external bus interface and defines the ac specification reference for the external bus signals. The external bus interface runs at the SCLK frequency. The maximum SCLK frequency is one quarter the internal processor clock (CCLK) frequency. FILTERING REFERENCE VOLTAGE AND CLOCKS Figure 4 and Figure 5 show possible circuits for filtering VREF, and SCLK\_VREF. These circuits provide the reference voltages for the switching voltage reference and system clock reference. Figure 3. Clock Domains OBSOLETE

- No boot-start running from memory address selected with one of the IRQ3-0 interrupt signals. See Table 2. Using the this option, the processor must start running from memory when one of the interrupts is asserted.

The processor core always exits from reset in the idle state and waits for an interrupt. Some of the interrupts in the interrupt vector table are initialized and enabled after reset.

5GLYPH&lt;c=20,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=29,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=21,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;NȍGLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;6(5,(6GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;5(6,67 25GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=11,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=20,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=8,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=12,font=/ONICGF+Arial-BoldMT&gt;

5GLYPH&lt;c=21,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=29,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=21,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=17,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=24,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=24,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;NȍGLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;6(5,(6GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;5(6,67 25GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=11,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=20,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=8,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=12,font=/ONICGF+Arial-BoldMT&gt;

&amp;GLYPH&lt;c=20,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=29,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=20,font=/ONICGF+Arial-BoldMT&gt;ȝ)GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;&amp;$3 $&amp;,725GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=11,font=/ONICGF+Arial-BoldMT&gt;60'GLYPH&lt;c=12,font=/ONICGF+Arial-BoldMT&gt;

&amp;GLYPH&lt;c=21,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=29,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=20,font=/ONICGF+Arial-BoldMT&gt;Q)GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;&amp;$3 $&amp;,725GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=11,font=/ONICGF+Arial-BoldMT&gt;+)GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;60'GLYPH&lt;c=12,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;3/$&amp;('GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;&amp;/26(GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;72GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt; GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;352&amp;(6625¶6GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;3,16

Figure 4. VREF Filtering Scheme

<!-- image -->

5GLYPH&lt;c=20,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=29,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=21,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;NȍGLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;6(5,(6GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;5(6,67 25GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=11,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=20,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=8,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=12,font=/ONICGF+Arial-BoldMT&gt;

## ADSP-TS203S

program. Essentially, the developer can identify bottlenecks in software quickly and efficiently. By using the profiler, the programmer can focus on those areas in the program that impact performance and take corrective action.

Debugging both C/C++ and assembly programs with the VisualDSP++ debugger, programmers can:

- View mixed C/C++ and assembly code (interleaved source and object information)
- Insert breakpoints

POWER DOMAINS The ADSP-TS203S processor has separate power supply connections for internal logic (VDD), analog circuits (VDD\_A), I/O buffer (VDD\_IO), and internal DRAM (VDD\_DRAM) power supply. Note that the analog (VDD\_A) supply powers the clock generator PLLs. To produce a stable clock, systems must provide a clean power supply to power input VDD\_A. Designs must pay critical attention to bypassing the VDD\_A supply. DEVELOPMENT TOOLS The ADSP-TS203S processor is supported with a complete set of CROSSCORE ® software and hardware development tools, including Analog Devices emulators and VisualDSP++ ® development environment. The same emulator hardware that supports other TigerSHARC processors also fully emulates the ADSP-TS203S processor. The VisualDSP++ project management environment lets programmers develop and debug an application. This environment includes an easy to use assembler (which is based on an algebraic syntax), an archiver (librarian/library builder), a linker, a loader, a cycle-accurate instruction-level simulator, a C/C++ compiler, and a C/C++ run-time library that includes DSP and mathematical functions. A key point for theses tools is C/C++ code efficiency. The compiler has been developed for efficient translation of C/C++ code to DSP assembly. The processor has architectural features that improve the efficiency of compiled C/C++ code. · Set conditional breakpoints on registers, memory, and stacks · Trace instruction execution · Perform linear or statistical profiling of program execution · Fill, dump, and graphically plot the contents of memory · Perform source level debugging · Create custom debugger windows The VisualDSP++ IDE lets programmers define and manage DSP software development. Its dialog boxes and property pages let programmers configure and manage all of the TigerSHARC processor development tools, including the color syntax highlighting in the VisualDSP++ editor. This capability permits programmers to: · Control how the development tools process inputs and generate outputs · Maintain a one-to-one correspondence with the tool's command line switches The VisualDSP++ Kernel (VDK) incorporates scheduling and resource management tailored specifically to address the memory and timing constraints of DSP programming. These capabilities enable engineers to develop code more effectively, eliminating the need to start from the very beginning when developing new application code. The VDK features include threads, critical and unscheduled regions, semaphores, events, and device flags. The VDK also supports priority-based, preemptive, cooperative, and time-sliced scheduling approaches. In addition, the VDK was designed to be scalable. If the application does not use a specific feature, the support code for that feature is excluded from the target system. Figure 5. SCLK\_VREF Filtering Scheme &amp;GLYPH&lt;c=20,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=29,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=20,font=/ONICGF+Arial-BoldMT&gt;ȝ)GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;&amp;$3 $&amp;,725GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=11,font=/ONICGF+Arial-BoldMT&gt;60'GLYPH&lt;c=12,font=/ONICGF+Arial-BoldMT&gt; 5GLYPH&lt;c=21,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=29,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=21,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=17,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=24,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=24,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;NȍGLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;6(5,(6GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;5(6,67 25GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=11,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=20,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=8,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=12,font=/ONICGF+Arial-BoldMT&gt; &amp;GLYPH&lt;c=21,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=29,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=20,font=/ONICGF+Arial-BoldMT&gt;Q)GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;&amp;$3 $&amp;,725GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=11,font=/ONICGF+Arial-BoldMT&gt;+)GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;60'GLYPH&lt;c=12,font=/ONICGF+Arial-BoldMT&gt;GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;3/$&amp;('GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;&amp;/26(GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;72GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;352&amp;(6625¶6GLYPH&lt;c=3,font=/ONICGF+Arial-BoldMT&gt;3,16 *IF CLOCK DRIVER VOLTAGE &gt; V DD\_IO OBSOLETE

Because the VDK is a library, a developer can decide whether to use it or not. The VDK is integrated into the VisualDSP++ development environment, but can also be used via standard command line tools. When the VDK is used, the development environment assists the developer with many error-prone tasks and assists in managing system resources, automating the generation of various VDK-based objects, and visualizing the system state, when debugging an application that uses the VDK.

VCSE is Analog Devices' technology for creating, using, and reusing software components (independent modules of substantial functionality) to quickly and reliably assemble software applications. It is also used for downloading components from the Web, dropping them into the application, and publish component archives from within VisualDSP++. VCSE supports component implementation in C/C++ or assembly language.

The VisualDSP++ debugger has a number of important features. Data visualization is enhanced by a plotting package that offers a significant level of flexibility. This graphical representation of user data enables the programmer to quickly determine the performance of an algorithm. As algorithms grow in complexity, this capability can have increasing significance on the designer's development schedule, increasing productivity. Statistical profiling enables the programmer to nonintrusively poll the processor as it is running the program. This feature, unique to VisualDSP++, enables the software developer to passively gather important code execution metrics without interrupting the real-time characteristics of the

## ADSP-TS203S

Use the expert linker to visually manipulate the placement of code and data on the embedded system, view memory use in a color-coded graphical form, easily move code and data to different areas of the processor or external memory with a drag of the mouse, and examine runtime stack and heap usage. The expert linker is fully compatible with existing linker definition file (LDF), allowing the developer to move between the graphical and textual environments.

Analog Devices emulators use the IEEE 1149.1 JTAG test access port of the ADSP-TS203S processor to monitor and control the target board processor during emulation. The emulator provides full speed emulation, allowing inspection and modification of memory, registers, and processor stacks. Nonintrusive in-circuit emulation is assured by the use of the processor's JTAG interface-the emulator does not affect target system loading or timing.

In addition to the software and hardware development tools available from Analog Devices, third parties provide a wide range of tools supporting the TigerSHARC processor family. Hardware tools include TigerSHARC processor PC plug-in cards. Third party software tools include DSP libraries, realtime operating systems, and block diagram design tools.

## Evaluation Kit

Analog Devices offers a range of EZ-KIT Lite ® evaluation platforms to use as a cost-effective method to learn more about developing or prototyping applications with Analog Devices processors, platforms, and software tools. Each EZ-KIT Lite includes an evaluation board along with an evaluation suite of the VisualDSP++ development and debugging environment with the C/C++ compiler, assembler, and linker. Also included are sample application programs, power supply, and a USB cable. All evaluation versions of the software tools are limited for use only with the EZ-KIT Lite product.

The USB controller on the EZ-KIT Lite board connects the board to the USB port of the user's PC, enabling the VisualDSP++ evaluation suite to emulate the on-board processor in-circuit. This permits the customer to download, execute, and debug programs for the EZ-KIT Lite system. It also allows in-circuit programming of the on-board flash device to store user-specific boot code, enabling the board to run as a standalone unit, without being connected to the PC.

With a full version of VisualDSP++ installed (sold separately), engineers can develop software for the EZ-KIT Lite or any custom-defined system. Connecting one of Analog Devices JTAG emulators to the EZ-KIT Lite board enables high speed, nonintrusive emulation.

processor must be halted to send data and commands, but once an operation has been completed by the emulator, the system is set running at full speed with no impact on system timing.

To use these emulators, the target board must include a header that connects the processor's JTAG port to the emulator.

For details on target board design issues including mechanical layout, single processor connections, multiprocessor scan chains, signal buffering, signal termination, and emulator pod logic, see the EE-68: Analog Devices JTAG Emulation Technical Reference on the Analog Devices website (www.analog.com)use the string 'EE-68' in site search. This document is updated regularly to keep pace with improvements to emulator support.

RELATED SIGNAL CHAINS A signal chain is a series of signal-conditioning electronic components that receive input (data acquired from sampling either real-time phenomena or from stored data) in tandem, with the output of one portion of the chain supplying input to the next. Signal chains are often used in signal processing applications to gather and process data or to apply system controls based on analysis of real-time phenomena. For more information about this term and related topics, see the 'signal chain' entry in the Glossary of EE Terms on the Analog Devices website. Analog Devices eases signal processing system development by providing signal processing components that are designed to work together well. A tool for viewing relationships between specific applications and related components is available on the www.analog.com website. The Circuits from the Lab TM  site (www.analog.com/circuits) provides: · Graphical circuit block diagram presentation of signal chains for a variety of circuit types and applications · Drill down links for components in each chain to selection guides and application information · Reference designs applying best practice design techniques ADDITIONAL INFORMATION This data sheet provides a general overview of the ADSP-TS203S processor's architecture and functionality. For detailed information on the ADSP-TS203S processor's core architecture and instruction set, see the ADSP-TS201 TigerSHARC Processor Hardware Reference and the ADSP-TS201 TigerSHARC Processor Programming Reference . For detailed information on the development tools for this processor, see the VisualDSP++ User's Guide for TigerSHARC Processors . OBSOLETE

## Designing an Emulator-Compatible DSP Board (Target)

The Analog Devices family of emulators are tools that every developer needs to in order test and debug hardware and software systems. Analog Devices has supplied an IEEE 1149.1 JTAG test access port (TAP) on each JTAG processor. The emulator uses the TAP to access the internal features of the processor, allowing the developer to load code, set breakpoints, observe variables, observe memory, and examine registers. The

## PIN FUNCTION DESCRIPTIONS

While most of the ADSP-TS203S processor's input pins are normally synchronous-tied to a specific clock-a few are asynchronous. For these asynchronous signals, an on-chip synchronization circuit prevents metastability problems. Use the ac specification for asynchronous signals when the system design requires predictable, cycle-by-cycle behavior for these signals.

Table 3. Pin Definitions-Clocks and Reset

| Signal     | Type   | Term   | Description                                                                                                                                                                                                                                                                                                                                                                         |
|------------|--------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SCLKRAT2-0 | I (pd) | na     | Core Clock Ratio. The processor's core clock (CCLK) rate=n × SCLK, where n is user- programmable using the SCLKRATx pins to the values showninTable 4. These pins may change only during reset; connect these pins to V DD_IO or V SS . All reset specifi- cations in Table 25, Table 26, and Table 27 must be satisfied. The core clock rate (CCLK) is the instruction cycle rate. |
| SCLK       | I      | na     | System Clock Input. The processor's system input clock for cluster bus. The core clock rate is user-programmable using the SCLKRATx pins. For more information, see Clock Domains on Page 8.                                                                                                                                                                                        |
| RST_IN     | I/A    | na     | Reset. Sets the processor to a known state and causes program to be in idle state. RST_IN must be asserted a specified time according to the type of reset operation. For details,seeResetandBootingonPage 8, Table 27onPage 26, andFigure 12on Page 26.                                                                                                                            |
| RST_OUT    | O      | na     | Reset Output. Indicates that the processor reset is complete. Connect to POR_IN.                                                                                                                                                                                                                                                                                                    |
| POR_IN     | I/A    | na     | Power-On Reset for internal DRAM. Connect to RST_OUT.                                                                                                                                                                                                                                                                                                                               |

| SCLKRAT2-0    | Ratio    |
|---------------|----------|
| 000 (default) | 4        |
| 001           | 5        |
| 010           | 6        |
| 011           | 7        |
| 100           | 8        |
| 101           | 10       |
| 110           | 12       |
| 111           | Reserved |

I = input; A = asynchronous; O = output; OD = open-drain output; T = three-state; P = power supply; G = ground; pd = internal pull-down 5 kΩ; pu = internal pull-up 5 kΩ; pd\_0 = internal pull-down 5 kΩ on processor ID = 0; pu\_0 = internal pull-up 5 kΩ on processor ID = 0; pu\_od\_0 = internal pull-up 500 Ω on processor ID = 0; pd\_m = internal pull-down 5 kΩ on processor bus master; pu\_m = internal pull-up 5 kΩ on processor bus master; pu\_ad = internal pull-up 40 kΩ. For more pull-down and pull-up information, see Electrical Characteristics on Page 21. Term (termination of unused pins) column symbols: epd = external pull-down approximately 5 kΩ to VSS; epu = external pull-up approximately 5 kΩ to VDD\_IO, nc = not connected; na = not applicable (always used); VDD\_IO = connect directly to VDD\_IO; VSS = connect directly to V SS Table 4. SCLK Ratio OBSOLETE

The output pins can be three-stated during normal operation. The processor three-states all output during reset, allowing these pins to get to their internal pull-up or pull-down state. Some pins have an internal pull-up or pull-down resistor (±30% tolerance) that maintains a known value during transitions between different drivers.

## ADSP-TS203S

Table 5. Pin Definitions-External Port Bus Controls

| Signal   | Type               | Term   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                |
|----------|--------------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ADDR31-0 | I/O/T (pu_ad)      | nc     | AddressBus. Theprocessorissues addresses for accessingmemoryandperipherals on these pins. In a multiprocessor system, the bus master drives addresses for accessing internal memory or I/O processor registers of other ADSP-TS203S processors. The processor inputs addresses when a host or another processor accesses its internal memory or I/O processor registers.                                                                   |
| DATA31-0 | I/O/T (pu_ad)      | nc     | External DataBus. Theprocessor drives andreceives data andinstructionsonthese pins. Pull-up or pull-down resistors on unused DATA pins are unnecessary.                                                                                                                                                                                                                                                                                    |
| RD       | I/O/T (pu_0)       | epu 1  | Memory Read. RD is asserted whenever the processor reads from any slave in the system, excluding SDRAM. When the processor is a slave, RD is an input and indicates read transactions that access its internal memoryoruniversalregisters. In a multiprocessor system, the bus master drives RD. RD changes concurrently with ADDR pins.                                                                                                   |
| WRL      | I/O/T (pu_0)       | epu 1  | Write Low. WRLis asserted whentheADSP-TS203S processor writes to the external bus(host,memory,orprocessor).Anexternalmaster(hostorprocessor)assertsWRL for writing to a processor's internal memory. In a multiprocessor system, the bus masterdrivesWRL.WRLchangesconcurrentlywithADDRpins.Whentheprocessor is a slave, WRL is an input and indicates write transactions that access its internal memory or universal registers. OBSOLETE |
| ACK      | I/O/T/OD (pu_od_0) | epu 1  | Acknowledge.ExternalslavedevicescandeassertACKtoaddwaitstatestoexternal memoryaccesses.ACKisusedbyI/Odevices,memorycontrollers,andotherperiph- erals on the data phase. The processor can deassert ACK to add wait states to read and write accesses of its internal memory. The pull-up is 50 Ωonlow-to-high trans- actions and is 500 Ωonall other transactions.                                                                         |
| BMS      | O/T (pu_0)         | na     | BootMemorySelect.BMSisthechipselectforbootEPROMorflashmemory.During reset, the processor uses BMS as a strap pin (EBOOT) for EPROM boot mode. In a multiprocessor system, the processor bus master drives BMS. For details, see Reset and Booting on Page 8 and the EBOOT signal description in Table 16 on Page 18.                                                                                                                       |
| MS1-0    | O/T (pu_0)         | nc     | Memory Select.MS0 orMS1 is asserted whenever the processor accesses memory banks 0 or 1, respectively. MS1-0 are decoded memory address pins that change concurrently with ADDRpins. WhenADDR31:27=0b00110,MS0isasserted.When ADDR31:27 = 0b00111, MS1 is asserted. In multiprocessor systems, the master processor drives MS1-0.                                                                                                          |
| MSH      | O/T (pu_0)         | nc     | Memory Select Host. MSHis asserted whenever the processor accesses the host addressspace(ADDR31=0b1).MSHisadecodedmemoryaddresspinthatchanges concurrently withADDRpins.Inamultiprocessorsystem,the busmasterprocessor drives MSH.                                                                                                                                                                                                         |
| BRST     | I/O/T (pu_0)       | epu 1  | Burst. The current bus master (processor or host) asserts this pin to indicate that it isreading orwritingdataassociatedwith consecutiveaddresses.Aslavedevicecan ignore addresses after the firstoneandincrementaninternal address counter after each transfer. For host-to-processor burst accesses, the processor increments the address automatically while BRST is asserted.                                                          |
| TM4      | I/O/T              | epu    | Test Mode 4. Must be pulled up to V DD_IO with a 5 kΩ resistor.                                                                                                                                                                                                                                                                                                                                                                            |

I = input; A = asynchronous; O = output; OD = open-drain output; T = three-state; P = power supply; G = ground; pd = internal pull-down 5 kΩ; pu = internal pull-up 5 kΩ; pd\_0 = internal pull-down 5 kΩ on processor ID = 0; pu\_0 = internal pull-up 5 kΩ on processor ID = 0; pu\_od\_0 = internal pull-up 500 Ω on processor ID = 0; pd\_m = internal pull-down 5 kΩ on processor bus master; pu\_m = internal pull-up 5 kΩ on processor bus master; pu\_ad = internal pull-up 40 kΩ. For more pull-down and pull-up information, see Electrical Characteristics on Page 21.

Term (termination of unused pins) column symbols: epd = external pull-down approximately 5 kΩ to VSS; epu = external pull-up approximately 5 kΩ to VDD\_IO, nc = not connected; na = not applicable (always used); VDD\_IO = connect directly to VDD\_IO; VSS = connect directly to V SS

1 This external pull-up may be omitted for the ID = 000 TigerSHARC processor.

Table 6. Pin Definitions-External Port Arbitration

| Signal   | Type             | Term      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|----------|------------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| BR7-0    | I/O              | V DD_IO 1 | Multiprocessing Bus Request Pins. Used by the processors in a multiprocessor systemtoarbitrateforbusmastership.EachprocessordrivesitsownBRxline(corre- sponding to the value of its ID2-0 inputs) and monitors all others. In systems with fewer than eight processors, set the unused BRx pins high (V DD_IO ).                                                                                                                                                               |
| ID2-0    | I (pd)           | na        | Multiprocessor ID. Indicates the processor's ID, from which the processor deter- minesitsorderinamultiprocessorsystem.Thesepinsalsoindicatetotheprocessor which bus request (BR0-BR7) to assert when requesting the bus: 000 = BR0, 001 = BR1, 010 = BR2, 011 = BR3, 100 = BR4, 101 = BR5, 110 = BR6, or 111 = BR7. ID2-0 must have a constant value during system operation and can change during reset only.                                                                 |
| BM       | O                | na        | Bus Master. The current bus master processor asserts BM. For debugging only. At reset this is a strap pin. For more information, see Table 16 on Page 18.                                                                                                                                                                                                                                                                                                                      |
| BOFF     | I                | epu       | Back Off. Adeadlock situation can occur when the host and a processor try to read from each other's bus at the same time. Whendeadlock occurs, the host can assert BOFFtoforcetheprocessortorelinquishthebusbeforecompletingitsoutstanding transaction.                                                                                                                                                                                                                        |
| BUSLOCK  | O/T (pu_0)       | na        | Bus Lock Indication. Provides an indication that the current bus master has locked the bus. At reset, this is a strap pin. For more information, see Table 16 on Page 18.                                                                                                                                                                                                                                                                                                      |
| HBR      | I                | epu       | Host Bus Request. A host must assert HBR to request control of the processor's external bus. When HBR is asserted in a multiprocessing system, the bus master relinquishes the bus and asserts HBG once the outstanding transaction is finished.                                                                                                                                                                                                                               |
| HBG      | I/O/T (pu_0)     | epu 2     | Host Bus Grant. Acknowledges HBR and indicates that the host can take control of theexternalbus.Whenrelinquishingthebus,themasterprocessorthree-statesthe ADDR31-0, DATA31-0, MSH, MSSD3-0, MS1-0, RD, WRL, BMS, BRST, IORD, IOWR, IOEN,RAS,CAS,SDWE,SDA10,SDCKE,LDQM,andTM4pins,andtheprocessorputs the SDRAMinself-refresh mode.Theprocessorasserts HBGuntil the host deasserts HBR. In multiprocessor systems, the current bus master processor drives HBG, and             |
| CPA      | I/O/OD (pu_od_0) | epu 2     | all slave processors monitor it. CorePriorityAccess.Assertedwhiletheprocessor'scoreaccessesexternalmemory. This pin enables a slave processor to interrupt a master processor's background DMAtransfers and gain control of the external bus for core-initiated transactions. CPA is an open-drain output, connected to all DSPs in the system. If not required in thesystem,leaveCPAunconnected(externalpull-upswillberequiredforprocessor ID = 1 through ID = 7).            |
| DPA      | I/O/OD (pu_od_0) | epu 2     | DMAPriorityAccess.AssertedwhileahighpriorityprocessorDMAchannelaccesses externalmemory.ThispinenablesahighpriorityDMAchannelonaslaveprocessor to interrupt transfers of a normal priority DMAchannel on a master processor and gaincontroloftheexternalbusforDMA-initiatedtransactions.DPAisanopen-drain output,connectedtoallDSPsinthesystem.Ifnotrequiredinthesystem,leaveDPA unconnected (external pull-ups will be required for processor ID = 1 through ID = 7). OBSOLETE |

I = input; A = asynchronous; O = output; OD = open-drain output; T = three-state; P = power supply; G = ground; pd = internal pull-down 5 kΩ; pu = internal pull-up 5 kΩ; pd\_0 = internal pull-down 5 kΩ on processor ID = 0; pu\_0 = internal pull-up 5 kΩ on processor ID = 0; pu\_od\_0 = internal pull-up 500 Ω on processor ID = 0; pd\_m = internal pull-down 5 kΩ on processor bus master; pu\_m = internal pull-up 5 kΩ on processor bus master; pu\_ad = internal pull-up 40 kΩ. For more pull-down and pull-up information, see Electrical Characteristics on Page 21.

Term (termination of unused pins) column symbols: epd = external pull-down approximately 5 kΩ to VSS; epu = external pull-up approximately 5 kΩ to VDD\_IO, nc = not connected; na = not applicable (always used); VDD\_IO = connect directly to VDD\_IO; VSS = connect directly to V SS

1

The BRx pin matching the ID2-0 input selection for the processor should be left nc if unused. For example, the processor with ID = 000 has BR0 = nc and BR7-1 = VDD\_IO. 2 This external pull-up resistor may be omitted for the ID = 000 TigerSHARC processor.

## ADSP-TS203S

## ADSP-TS203S

Table 7. Pin Definitions-External Port DMA/Flyby

| Signal   | Type       | Term   | Description                                                                                                                                                                                                                                           |
|----------|------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DMAR3-0  | I/A        | epu    | DMARequest Pins. Enable external I/O devices to request DMAservices from the processor. In response to DMARx,theprocessor performs DMAtransfers according totheDMAchannel'sinitialization.TheprocessorignoresDMArequestsfromunini- tialized channels. |
| IOWR     | O/T (pu_0) | nc     | I/O Write. When a processor DMAchannel initiates a flyby mode read transaction, the processor asserts the IOWR signal during the data cycles. This assertion makes the I/O device sample the data instead of the TigerSHARC.                          |
| IORD     | O/T (pu_0) | nc     | I/O Read. When a processor DMAchannel initiates a flyby mode write transaction, the processor asserts the IORD signal during the data cycle. This assertion with the IOEN makes the I/O device drive the data instead of the TigerSHARC.              |
| IOEN     | O/T (pu_0) | nc     | I/O Device Output Enable. Enables the output buffers of an external I/O device for fly-by transactions between the device and external memory. Active on flyby transactions.                                                                          |

| Signal   | Type         | Term   | Description                                                                                                                                                                                                                                                                                                                                                     |
|----------|--------------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MSSD3-0  | I/O/T (pu_0) | nc     | MemorySelectSDRAM.MSSD0,MSSD1,MSSD2,orMSSD3isassertedwheneverthe processoraccessesSDRAMmemoryspace.MSSD3-0aredecodedmemoryaddress pins that are asserted whenever the processor issues an SDRAM command cycle (access to ADDR31:30 = 0b01-except reserved spaces shown in Figure 2 on Page 6). In a multiprocessor system, the master processor drives MSSD3-0. |
| RAS      | I/O/T (pu_0) | nc     | RowAddressSelect.Whensampledlow,RASindicatesthatarow address is valid in a read or write of SDRAM.InotherSDRAMaccesses,it defines the type of operation to execute according to SDRAM specification.                                                                                                                                                            |
| CAS      | I/O/T (pu_0) | nc     | ColumnAddressSelect.Whensampledlow, CASindicates that a columnaddress is valid in a read or write of SDRAM. In other SDRAM accesses, it defines the type of operation to execute according to the SDRAM specification.                                                                                                                                          |
| LDQM     | O/T (pu_0)   | nc     | Low Word SDRAM Data Mask. When sampled high, three-states theSDRAMDQ buffers. LDQMis valid onSDRAMtransactions when CAS is asserted, and inactive on read transactions.                                                                                                                                                                                         |

I = input; A = asynchronous; O = output; OD = open-drain output; T = three-state; P = power supply; G = ground; pd = internal pull-down 5 kΩ; pu = internal pull-up 5 kΩ; pd\_0 = internal pull-down 5 kΩ on processor ID = 0; pu\_0 = internal pull-up 5 kΩ on processor ID = 0; pu\_od\_0 = internal pull-up 500 Ω on processor ID = 0; pd\_m = internal pull-down 5 kΩ on processor bus master; pu\_m = internal pull-up 5 kΩ on processor bus master; pu\_ad = internal pull-up 40 kΩ. For more pull-down and pull-up information, see Electrical Characteristics on Page 21. Term (termination of unused pins) column symbols: epd = external pull-down approximately 5 kΩ to VSS; epu = external pull-up approximately 5 kΩ to VDD\_IO, nc = not connected; na = not applicable (always used); VDD\_IO = connect directly to VDD\_IO; VSS = connect directly to V SS Table 8. Pin Definitions-External Port SDRAM Controller I = input; A = asynchronous; O = output; OD = open-drain output; T = three-state; P = power supply; G = ground; pd = internal pull-down 5 kΩ; pu = internal pull-up 5 kΩ; pd\_0 = internal pull-down 5 kΩ on processor ID = 0; pu\_0 = internal pull-up 5 kΩ on processor ID = 0; pu\_od\_0 = internal pull-up 500 Ω on processor ID = 0; pd\_m = internal pull-down 5 kΩ on processor bus master; pu\_m = internal pull-up 5 kΩ on processor bus master; pu\_ad = internal pull-up 40 kΩ. For more pull-down and pull-up information, see Electrical Characteristics on Page 21. OBSOLETE

Term (termination of unused pins) column symbols: epd = external pull-down approximately 5 kΩ to VSS; epu = external pull-up approximately 5 kΩ to VDD\_IO, nc = not connected; na = not applicable (always used); VDD\_IO = connect directly to VDD\_IO; VSS = connect directly to VSS

Table 8. Pin Definitions-External Port SDRAM Controller  (Continued)

| Signal   | Type               | Term   | Description                                                                                                                                                                                                                                                                                                                                                                                                           |
|----------|--------------------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SDA10    | O/T (pu_0)         | nc     | SDRAMAddressBit10.SeparateA10signalsenableSDRAMrefreshoperationwhile the processor executes non-SDRAM transactions.                                                                                                                                                                                                                                                                                                   |
| SDCKE    | I/O/T (pu_m/ pd_m) | nc     | SDRAMClockEnable.ActivatestheSDRAMclockforSDRAMself-refreshorsuspend modes. A slave processor in a multiprocessor system does not have the pull-up or pull-down. Amasterprocessor (or ID = 0 in a single processor system) has a pull-up before granting the bus to the host, except when theSDRAM is put in self refresh mode. In self refresh mode, the master has a pull-down before granting the bus to the host. |
| SDWE     | I/O/T (pu_0)       | nc     | SDRAM Write Enable. When sampled low while CAS is active,SDWE indicates an SDRAM write access. When sampled high while CAS is active,SDWE indicates an SDRAMreadaccess. In other SDRAMaccesses, SDWEdefines the type of operation to execute according to SDRAM specification.                                                                                                                                        |

| Signal   | Type        | Term         | Description                                                                                                                                                                              |
|----------|-------------|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| EMU      | O/OD        | nc 1         | Emulation. Connected to the processor's JTAG emulator target board connector only.                                                                                                       |
| TCK      | I           | epd or epu 1 | Test Clock (JTAG). Provides an asynchronous clock for JTAG scan.                                                                                                                         |
| TDI      | I (pu_ad)   | nc 1         | Test Data Input (JTAG). A serial data input of the scan path.                                                                                                                            |
| TDO      | O/T         | nc 1         | Test Data Output (JTAG). A serial data output of the scan path.                                                                                                                          |
| TMS      | I           | nc 1         | Test Mode Select (JTAG). Used to control the test state machine.                                                                                                                         |
| TRST     | I/A (pu_ad) | na           | Test Reset (JTAG). Resets the test state machine. TRST must be asserted or pulsed low after power-up for proper device operation. For more information, see Reset and Booting on Page 8. |

Table 9. Pin Definitions-JTAG Port I = input; A = asynchronous; O = output; OD = open-drain output; T = three-state; P = power supply; G = ground; pd = internal pull-down 5 kΩ; pu = internal pull-up 5 kΩ; pd\_0 = internal pull-down 5 kΩ on processor ID = 0; pu\_0 = internal pull-up 5 kΩ on processor ID = 0; pu\_od\_0 = internal pull-up 500 Ω on processor ID = 0; pd\_m = internal pull-down 5 kΩ on processor bus master; pu\_m = internal pull-up 5 kΩ on processor bus master; pu\_ad = internal pull-up 40 kΩ. For more pull-down and pull-up information, see Electrical Characteristics on Page 21. Term (termination of unused pins) column symbols: epd = external pull-down approximately 5 kΩ to VSS; epu = external pull-up approximately 5 kΩ to VDD\_IO, nc = not connected; na = not applicable (always used); VDD\_IO = connect directly to VDD\_IO; VSS = connect directly to V SS I = input; A = asynchronous; O = output; OD = open-drain output; T = three-state; P = power supply; G = ground; pd = internal pull-down 5 kΩ; pu = internal pull-up 5 kΩ; pd\_0 = internal pull-down 5 kΩ on processor ID = 0; pu\_0 = internal pull-up 5 kΩ on processor ID = 0; pu\_od\_0 = internal pull-up 500 Ω on processor ID = 0; pd\_m = internal pull-down 5 kΩ on processor bus master; pu\_m = internal pull-up 5 kΩ on processor bus master; pu\_ad = internal pull-up 40 kΩ. For more pull-down and pull-up information, see Electrical Characteristics on Page 21. Term (termination of unused pins) column symbols: epd = external pull-down approximately 5 kΩ to VSS; epu = external pull-up approximately 5 kΩ to VDD\_IO, nc = not connected; na = not applicable (always used); VDD\_IO = connect directly to VDD\_IO; VSS = connect directly to V SS OBSOLETE

1 See the reference on Page 10 to the JTAG emulation technical reference EE-68.

## ADSP-TS203S

## ADSP-TS203S

Table 10. Pin Definitions-Flags, Interrupts, and Timer

| Signal   | Type       | Term   | Description                                                                                                                                                                                                                                                                                      |
|----------|------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FLAG3-0  | I/O/A (pu) | nc     | FLAG pins. Bidirectional input/output pins can be used as program conditions. Each pin can be configured individually for input or for output. FLAG3-0 are inputs after power- up and reset.                                                                                                     |
| IRQ3-0   | I/A (pu)   | nc     | Interrupt Request. When asserted, the processor generates an interrupt. Each of the IRQ3-0 pins can be independently set for edge-triggered or level-sensitive operation. After reset, these pins are disabled unless the IRQ3-0 strap option and interrupt vectors are initialized for booting. |
| TMR0E    | O          | na     | Timer 0 expires. This output pulses whenever timer 0 expires. At reset, this is a strap pin. For more information, see Table 16 on Page 18.                                                                                                                                                      |

| Signal     | Type     | Term    | Description                                                                                                                                                                                                                                                                                            |
|------------|----------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| LxDATO3-0P | O        | nc      | Link Ports 1-0 Data 1-0 Transmit LVDS P                                                                                                                                                                                                                                                                |
| LxDATO3-0N | O        | nc      | Link Ports 1-0 Data 1-0 Transmit LVDSN                                                                                                                                                                                                                                                                 |
| LxCLKOUTP  | O        | nc      | Link Ports 1-0 Transmit Clock LVDS P                                                                                                                                                                                                                                                                   |
| LxCLKOUTN  | O        | nc      | Link Ports 1-0 Transmit Clock LVDSN                                                                                                                                                                                                                                                                    |
| LxACKI     | I (pd)   | nc      | Link Ports 1-0Receive Acknowledge. Using this signal, the receiver indicates to the transmitter that it may continue the transmission.                                                                                                                                                                 |
| LxBCMPO    | O(pu)    | nc      | Link Ports 1-0 Block Completion. When the transmission is executed using DMA, this signal indicates to the receiver that the transmitted block is completed. The pull-up resistor is present on L0BCMPO only. At reset, the L1BCMPO pin is a strap pin. For more information, see Table 16 on Page 18. |
| LxDATI3-0P | I        | V DD_IO | Link Ports 1-0 Data 3-0 Receive LVDS P                                                                                                                                                                                                                                                                 |
| LxDATI3-0N | I        | V DD_IO | Link Ports 1-0 Data 3-0 Receive LVDSN                                                                                                                                                                                                                                                                  |
| LxCLKINP   | I/A      | V DD_IO | Link Ports 1-0 Receive Clock LVDS P                                                                                                                                                                                                                                                                    |
| LxCLKINN   | I/A      | V DD_IO | Link Ports 1-0 Receive Clock LVDSN                                                                                                                                                                                                                                                                     |
| LxACKO     | O        | nc      | LinkPorts1-0TransmitAcknowledge.Usingthissignal,thereceiverindicatestothe transmitter that it may continue the transmission.                                                                                                                                                                           |
| LxBCMPI    | I (pd_l) | V SS    | Link Ports 1-0 Block Completion. When the reception is executed using DMA, this signal indicates to the receiver that the transmitted block is completed.                                                                                                                                              |

I = input; A = asynchronous; O = output; OD = open-drain output; T = three-state; P = power supply; G = ground; pd = internal pull-down 5 kΩ; pu = internal pull-up 5 kΩ; pd\_0 = internal pull-down 5 kΩ on processor ID = 0; pu\_0 = internal pull-up 5 kΩ on processor ID = 0; pu\_od\_0 = internal pull-up 500 Ω on processor ID = 0; pd\_m = internal pull-down 5 kΩ on processor bus master; pu\_m = internal pull-up 5 kΩ on processor bus master; pu\_ad = internal pull-up 40 kΩ. For more pull-down and pull-up information, see Electrical Characteristics on Page 21.

I = input; A = asynchronous; O = output; OD = open-drain output; T = three-state; P = power supply; G = ground; pd = internal pull-down 5 kΩ; pu = internal pull-up 5 kΩ; pd\_0 = internal pull-down 5 kΩ on processor ID = 0; pu\_0 = internal pull-up 5 kΩ on processor ID = 0; pu\_od\_0 = internal pull-up 500 Ω on processor ID = 0; pd\_m = internal pull-down 5 kΩ on processor bus master; pu\_m = internal pull-up 5 kΩ on processor bus master; pu\_ad = internal pull-up 40 kΩ. For more pull-down and pull-up information, see Electrical Characteristics on Page 21. Term (termination of unused pins) column symbols: epd = external pull-down approximately 5 kΩ to VSS; epu = external pull-up approximately 5 kΩ to VDD\_IO, nc = not connected; na = not applicable (always used); VDD\_IO = connect directly to VDD\_IO; VSS = connect directly to V SS Table 11. Pin Definitions-Link Ports OBSOLETE

Term (termination of unused pins) column symbols: epd = external pull-down approximately 5 kΩ to VSS; epu = external pull-up approximately 5 kΩ to VDD\_IO, nc = not connected; na = not applicable (always used); VDD\_IO = connect directly to VDD\_IO; VSS = connect directly to V SS

Table 12. Pin Definitions-Impedance Control, Drive Strength Control, and Regulator Enable

| Signal                  | Type          | Term   | Description                                                                                                                                                                                                                                                                                                                                                                                                              |
|-------------------------|---------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CONTROLIMP0 CONTROLIMP1 | I (pd) I (pu) | na na  | Impedance Control. As shown in Table 13, the CONTROLIMP1-0 pins select between normaldrivermodeandA/Ddrivermode.Whenusingnormalmode(recommended), the output drive strength is set relative to maximum drive strength according to Table 14. Whenusing A/D mode, the resistance control operates in the analog mode, wheredrive strength is continuously controlled to matchaspecific lineimpedanceas shown in Table 14. |
| DS2, 0 DS1              | I (pu) I (pd) | na     | Digital Drive Strength Selection. Selected as shown in Table 14. For drive strength calculation, see Output Drive CurrentsonPage 34. The drive strength forsomepins is preset, not controlled by the DS2-0 pins. The pins that are always at drive strength 7 (100%)include:CPA,DPA,TDO,EMU,andRST_OUT.ThedrivestrengthfortheACKpin is always ×2 drive strength 7 (100%).                                                |
| ENEDREG                 | I (pu)        | V SS   | ConnecttheENEDREGpintoV SS . Connect theV DD_DRAM pins to a properly decoupled DRAMpower supply.                                                                                                                                                                                                                                                                                                                         |

| CONTROLIMP1-0    | DriverMode   |
|------------------|--------------|
| 00 (recommended) | Normal       |
| 01               | Reserved     |
| 10 (default)     | A/D Mode     |
| 11               | Reserved     |

| DS2-0 Pins    | Drive Strength 1   | Output Impedance 2   |
|---------------|--------------------|----------------------|
| 000           | Strength 0 (11.1%) | 26Ω                  |
| 001           | Strength 1 (23.8%) | 32Ω                  |
| 010           | Strength 2 (36.5%) | 40Ω                  |
| 011           | Strength 3 (49.2%) | 50Ω                  |
| 100           | Strength 4 (61.9%) | 62Ω                  |
| 101 (default) | Strength 5 (74.6%) | 70Ω                  |
| 110           | Strength 6 (87.3%) | 96Ω                  |
| 111           | Strength 7 (100%)  | 120Ω                 |

I = input; A = asynchronous; O = output; OD = open-drain output; T = three-state; P = power supply; G = ground; pd = internal pull-down 5 kΩ; pu = internal pull-up 5 kΩ; pd\_0 = internal pull-down 5 kΩ on processor ID = 0; pu\_0 = internal pull-up 5 kΩ on processor ID = 0; pu\_od\_0 = internal pull-up 500 Ω on processor ID = 0; pd\_m = internal pull-down 5 kΩ on processor bus master; pu\_m = internal pull-up 5 kΩ on processor bus master; pu\_ad = internal pull-up 40 kΩ. For more pull-down and pull-up information, see Electrical Characteristics on Page 21. Term (termination of unused pins) column symbols: epd = external pull-down approximately 5 kΩ to VSS; epu = external pull-up approximately 5 kΩ to VDD\_IO, nc = not connected; na = not applicable (always used); VDD\_IO = connect directly to VDD\_IO; VSS = connect directly to VSS Table 13. Impedance Control Selection Table 14. Drive Strength/Output Impedance Selection OBSOLETE

2 CONTROLIMP1 = 1, A/D mode enabled.

## ADSP-TS203S

## ADSP-TS203S

Table 15. Pin Definitions-Power, Ground, and Reference

| Signal     | Type   | Term   | Description                                                                                                                                                                                                                                                                                                                                                                                |
|------------|--------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| V DD       | P      | na     | V DD pins for internal logic.                                                                                                                                                                                                                                                                                                                                                              |
| V DD_A     | P      | na     | V DD pins for analog circuits. Pay critical attention to bypassing this supply.                                                                                                                                                                                                                                                                                                            |
| V DD_IO    | P      | na     | V DD pins for I/O buffers.                                                                                                                                                                                                                                                                                                                                                                 |
| V DD_DRAM  | P      | na     | V DD pins for internal DRAM.                                                                                                                                                                                                                                                                                                                                                               |
| V REF      | I      | na     | Reference voltage defines the trip point for all input buffers, except SCLK, RST_IN, POR_IN, IRQ3-0, FLAG3-0, DMAR3-0, ID2-0, CONTROLIMP1-0, LxDATO3-0P/N, LxCLKOUTP/N, LxDATI3-0P/N, LxCLKINP/N, TCK, TDI, TMS, and TRST. V REF can be connectedtoapowersupplyorsetbyavoltagedividercircuitasshowninFigure 4. For more information, see Filtering Reference Voltage and Clocks on Page 8. |
| SCLK_V REF | I      | na     | System Clock Reference. Connect this pin to a reference voltage as shown in Figure 5. For more information, see Filtering Reference Voltage and Clocks on Page 8.                                                                                                                                                                                                                          |
| V SS       | G      | na     | Ground pins.                                                                                                                                                                                                                                                                                                                                                                               |
| NC         | -      | nc     | No Connect. Do not connect these pins to anything (not to any supply, signal, or each other). These pins are reserved and must be left unconnected.                                                                                                                                                                                                                                        |

| Signal      | Type (at Reset)   | OnPin…   | Description                                                                                                                                                                       |
|-------------|-------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| EBOOT       | I (pd_0)          | BMS      | EPROM Boot. 0 = boot from EPROM immediately after reset (default) 1 = idle after reset and wait for an external device to boot processor through the external port or a link port |
| IRQEN       | I (pd)            | BM       | Interrupt Enable. 0 = disable and set IRQ3-0 interrupts to edge-sensitive after reset (default) 1 = enable and set IRQ3-0 interrupts to level-sensitive immediately after reset   |
| LINK_DWIDTH | I (pd)            | TMR0E    | Link Port Input Default Data Width. 0 = 1-bit (default) 1 = 4-bit                                                                                                                 |

STRAP PIN FUNCTION DESCRIPTIONS Some pins have alternate functions at reset. Strap options set processor operating modes. During reset, the processor samples the strap option pins. Strap pins have an internal pull-up or pull-down for the default value. If a strap pin is not connected to an overdriving external pull-up, pull-down, or logic load, the processor samples the default value during reset. If strap pins are connected to logic inputs, a stronger external pull-up or pull-down may be required to ensure default value depending on leakage and/or low level input current of the logic load. To set a mode other than the default mode, connect the strap pin to a sufficiently stronger external pull-up or pull-down. Table 16 lists and describes each of the processor's strap pins. I = input; A = asynchronous; O = output; OD = open-drain output; T = three-state; P = power supply; G = ground; pd = internal pull-down 5 kΩ; pu = internal pull-up 5 kΩ; pd\_0 = internal pull-down 5 kΩ on processor ID = 0; pu\_0 = internal pull-up 5 kΩ on processor ID = 0; pu\_od\_0 = internal pull-up 500 Ω on processor ID = 0; pd\_m = internal pull-down 5 kΩ on processor bus master; pu\_m = internal pull-up 5 kΩ on processor bus master; pu\_ad = internal pull-up 40 kΩ. For more pull-down and pull-up information, see Electrical Characteristics on Page 21. Term (termination of unused pins) column symbols: epd = external pull-down approximately 5 kΩ to VSS; epu = external pull-up approximately 5 kΩ to VDD\_IO, nc = not connected; na = not applicable (always used); VDD\_IO = connect directly to VDD\_IO; VSS = connect directly to VSS Table 16. Pin Definitions-I/O Strap Pins OBSOLETE

I = input; A = asynchronous; O = output; OD = open-drain output; T = three-state; P = power supply; G = ground; pd = internal pull-down 5 kΩ; pu = internal pull-up 5 kΩ; pd\_0 = internal pull-down 5 kΩ on processor ID = 0; pu\_0 = internal pull-up 5 kΩ on processor ID = 0; pu\_od\_0 = internal pull-up 500 Ω on processor ID = 0; pd\_m = internal pull-down 5 kΩ on processor bus master; pu\_m = internal pull-up 5 kΩ on processor bus master; pu\_ad = internal pull-up 40 kΩ. For more pull-down and pull-up information, see Electrical Characteristics on Page 21.

Table 16. Pin Definitions-I/O Strap Pins  (Continued)

| Signal     | Type (at Reset)   | OnPin…   | Description                                                                                     |
|------------|-------------------|----------|-------------------------------------------------------------------------------------------------|
| SYS_REG_WE | I (pd_0)          | BUSLOCK  | SYSCON and SDRCON Write Enable. 0 = one-time writable after reset (default) 1 = always writable |
| TM1        | I (pu)            | L1BCMPO  | Test Mode 1. Do not overdrive default value during reset.                                       |
| TM2        | I (pu)            | TM2      | Test Mode 2. Do not overdrive default value during reset.                                       |
| TM3        | I (pu)            | TM3      | Test Mode 3. Do not overdrive default value during reset.                                       |

| Pin     | RST_IN=0   | RST_IN = 1   |
|---------|------------|--------------|
| BMS     | (pd_0)     | (pu_0)       |
| BM      | (pd)       | Driven       |
| TMR0E   | (pd)       | Driven       |
| BUSLOCK | (pd_0)     | (pu_0)       |
| L1BCMPO | (pu)       | Driven       |
| TM2     | (pu)       | Driven       |
| TM3     | (pu)       | Driven       |

When default configuration is used, no external resistor is needed on the strap pins. To apply other configurations, a 500 Ω resistor connected to VDD\_IO is required. If providing external pull-downs, do not strap these pins directly to VSS; the strap pins require 500 Ω resistor straps. All strap pins are sampled on the rising edge of RST\_IN (deassertion edge). Each pin latches the strapped pin state (state of the strap pin at the rising edge of RST\_IN). Shortly after deassertion of RST\_IN, these pins are reconfigured to their normal functionality. These strap pins have an internal pull-down resistor, pull-up resistor, or no-resistor (three-state) on each pin. The resistor type, which is connected to the I/O pad, depends on whether RST\_IN is active (low) or if RST\_IN is deasserted (high). Table 17 shows the resistors that are enabled during active reset and during normal operation. I = input; A = asynchronous; O = output; OD = open-drain output; T = three-state; P = power supply; G = ground; pd = internal pull-down 5 kΩ; pu = internal pull-up 5 kΩ; pd\_0 = internal pull-down 5 kΩ on processor ID = 0; pu\_0 = internal pull-up 5 kΩ on processor ID = 0; pu\_od\_0 = internal pull-up 500 Ω on processor ID = 0; pd\_m = internal pull-down 5 kΩ on processor bus master; pu\_m = internal pull-up 5 kΩ on processor bus master; pu\_ad = internal pull-up 40 kΩ. For more pull-down and pull-up information, see Electrical Characteristics on Page 21. Table 17. Strap Pin Internal Resistors-Active Reset (RST\_IN = 0) vs. Normal Operation (RST\_IN = 1) pd = internal pull-down 5 kΩ; pu = internal pull-up 5 kΩ; pd\_0 = internal pull-down 5 kΩ on processor ID = 0; OBSOLETE

pu\_0 = internal pull-up 5 kΩ on processor ID = 0

## ADSP-TS203S

## SPECIFICATIONS

Note that component specifications are subject to change with out notice. For information on link port electrical characteristics, see Link Port Low Voltage, Differential-Signal (LVDS) Electrical Characteristics, and Timing on Page 29.

## OPERATING CONDITIONS

| Parameter   | Description                                  | Test Conditions                                    | Grade 1   | Min                       | Typ   | Max   | Unit   |
|-------------|----------------------------------------------|----------------------------------------------------|-----------|---------------------------|-------|-------|--------|
| V DD        | Internal Supply Voltage                      | @CCLK = 500MHz                                     | 050       | 1.00                      | 1.05  | 1.10  | V      |
| V DD_A      | Analog Supply Voltage                        | @CCLK = 500MHz                                     | 050       | 1.00                      | 1.05  | 1.10  | V      |
| V DD_IO     | I/O Supply Voltage                           |                                                    | (all)     | 2.38                      | 2.50  | 2.63  | V      |
| V DD_DRAM   | Internal DRAMSupply Voltage                  | @CCLK = 500MHz                                     | 050       | 1.425                     | 1.500 | 1.575 | V      |
| T CASE      | Case Operating Temperature                   |                                                    | A         | -40                       |       | +85   | °C     |
| T CASE      | Case Operating Temperature                   |                                                    | B         | 0                         |       | +85   | °C     |
| V IH1       | High Level Input Voltage 2, 3                | @V DD , V DD_IO = Max                              | (all)     | 1.7                       |       | 3.63  | V      |
| V IH2       | High Level Input Voltage 3, 4                | @V DD , V DD_IO = Max                              | (all)     | 1.9                       |       | 3.63  | V      |
| V IL        | Low Level Input Voltage 3, 5                 | @V DD , V DD_IO = Min @CCLK = 500 MHz, V DD = 1.05 | (all)     | -0.33                     |       | +0.8  | V      |
| I DD        | V DD Supply Current, Typical Activity 6      | V, T CASE = 25°C @CCLK = 500 MHz, V DD = 1.05 V,   | 050       |                           | 2.06  |       | A      |
| I DD_A      | V DD_A Supply Current, Typical Activity      | T CASE = 25°C @SCLK = 62.5 MHz, V DD_IO = 2.5 V,   | 050       |                           | 20    | 50    | mA     |
| I DD_IO     | V DD_IO Supply Current, Typical Activity 6   | T CASE = 25°C                                      | (all)     |                           | 0.15  |       | A      |
| I DD_DRAM   | V DD_DRAM Supply Current, Typical Activity 6 | @CCLK = 500 MHz, V DD_DRAM = 1.5 V, T CASE = 25°C  | 050       |                           | 0.25  | 0.40  | A      |
| V REF       | Voltage Reference                            |                                                    | (all)     | (V DD_IO ×0.56)±5%        |       |       | V      |
| SCLK_V REF  | Voltage Reference                            |                                                    | (all)     | (V CLOCK _DRIVE ×0.56)±5% |       |       | V      |

|   V IN Max(V) 1 |   V IN Min (V) 1 | MaximumDutyCycle 2   |
|-----------------|------------------|----------------------|
|            3.63 |            -0.33 | 100%                 |
|            3.64 |            -0.34 | 90%                  |
|            3.7  |            -0.4  | 50%                  |
|            3.78 |            -0.48 | 30%                  |
|            3.86 |            -0.56 | 17%                  |
|            3.93 |            -0.63 | 10%                  |

1 Specifications vary for different grades (for example, SABP-060, SABP-050, SWBP-050). For more information on part grades, see Ordering Guide on Page 47. 2 VIH1 specification applies to input and bidirectional pins: SCLKRAT2-0, SCLK, ADDR31-0, DATA63-0, RD, WRL, ACK, BRST, BR7-0, BOFF, HBR, HBG, MSSD3-0, RAS, CAS, SDCKE, SDWE, TCK, FLAG3-0, DS2-0, ENEDREG. 3 Values represent dc case. During transitions, the inputs may overshoot or undershoot to the voltage shown in Table 18, based on the transient duty cycle. The dc case is equivalent to 100% duty cycle. 4 VIH2 specification applies to input and bidirectional pins: TDI, TMS, TRST, CIMP1-0, ID2-0, LxBCMPI, LxACKI, POR\_IN, RST\_IN, IRQ3-0, CPA, DPA, DMAR3-0. 5 Applies to input and bidirectional pins. 6 For details on internal and external power calculation issues, including other operating conditions, see EE-170, Estimating Power for the ADSP-TS203S . Table 18. Maximum Duty Cycle for Input Transient Voltage OBSOLETE

1 The individual values cannot be combined for analysis of a single instance of overshoot or undershoot. The worst case observed value must fall within one of the voltages specified and the total duration of the overshoot or undershoot (exceeding the 100% case) must be less than or equal to the corresponding duty cycle.

2 Duty cycle refers to the percentage of time the signal exceeds the value for the 100% case. This is equivalent to the measured duration of a single instance of overshoot or undershoot as a percentage of the period of occurrence. The practical worst case for period of occurrence for either overshoot or undershoot is 2 × tSCLK.

## ELECTRICAL CHARACTERISTICS

| Paramet er   | Description                      | Test Conditions                        | Min   | Max   | Unit   |
|--------------|----------------------------------|----------------------------------------|-------|-------|--------|
| V OH         | High Level Output Voltage 1      | @V DD_IO =Min, I OH =-2mA              | 2.18  |       | V      |
| V OL         | Low Level Output Voltage 1       | @V DD_IO =Min, I OL =4mA               |       | 0.4   | V      |
| I IH         | High Level Input Current         | @V DD_IO =Max, V IN =V IH Max          |       | 20    | µA     |
| I IH_PU      | High Level Input Current         | @V DD_IO =Max, V IN =V IH Max          |       | 20    | µA     |
| I IH_PD      | High Level Input Current         | @V DD_IO =Max, V IN =V DD_IO Max       | 0.3   | 0.76  | mA     |
| I IH_PD_L    | High Level Input Current         | @V DD_IO =Max, V IN =V IH Max          | 30    | 76    | µA     |
| I IL         | Low Level Input Current          | @V DD_IO =Max, V IN =0V                |       | 20    | µA     |
| I IL_PU      | Low Level Input Current          | @V DD_IO =Max, V IN =0V                | 0.3   | 0.76  | mA     |
| I IL_PU_AD   | Low Level Input Current          | @V DD_IO =Max, V IN =0V                | 30    | 100   | µA     |
| I OZH        | Three-State Leakage Current High | @V DD_IO =Max, V IN =V IH Max          |       | 50    | µA     |
| I OZH_PD     | Three-State Leakage Current High | @V DD_IO =Max, V IN =V DD_IO Max       | 0.3   | 0.76  | mA     |
| I OZL        | Three-State Leakage Current Low  | @V DD_IO =Max, V IN =0V                |       | 20    | µA     |
| I OZL_PU     | Three-State Leakage Current Low  | @V DD_IO =Max, V IN =0V                | 0.3   | 0.76  | mA     |
| I OZL_PU_AD  | Three-State Leakage Current Low  | @V DD_IO =Max, V IN =0V                | 30    | 100   | µA     |
| I OZL_OD     | Three-State Leakage Current Low  | @V DD_IO =Max, V IN =0V                | 4     | 7.6   | mA     |
| C IN         | Input Capacitance 2, 3           | @f IN =1MHz, T CASE =25°C, V IN =2.5 V |       | 3     | pF     |

1 Applies to output and bidirectional pins. 2 Applies to all signals. 3 Guaranteed but not tested. Parameter name suffix conventions: no suffix = applies to pins without pull-up or pull-down resistors, \_PD = applies to pin types (pd) or (pd\_0), \_PU = applies to pin types (pu) or (pu\_0), \_PU\_AD = applies to pin types (pu\_ad), \_OD = applies to pin types OD, \_PD\_L = applies to pin types (pd\_l) OBSOLETE

## ADSP-TS203S

## PACKAGE INFORMATION

The information presented in Figure 6 provide details about the package branding for the ADSP-TS203S processors. For a complete listing of product availability, see Ordering Guide on Page 47.

<!-- image -->

Table 19. Package Brand Information

| Brand Key   | Field Description           |
|-------------|-----------------------------|
| t           | Temperature Range           |
| pp          | Package Type                |
| Z           | Lead Free Option (optional) |
| ccc         | See Ordering Guide          |
| tppzccc     | Silicon Lot Number          |
| 2.0         | Silicon Revision            |
| yyww        | Date Code                   |
| vvvvvv      | Assembly Lot Code           |

<!-- image -->

## ABSOLUTE MAXIMUM RATINGS

Stresses greater than those listed in Table 20 may cause permanent damage to the device. These are stress ratings only. Functional operation of the device at these or any other conditions greater than those indicated in the operational sections of this specification is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

Table 20. Absolute Maximum Ratings

| Parameter                                     | Rating                              |
|-----------------------------------------------|-------------------------------------|
| Internal (Core) Supply Voltage (V DD )        | -0.3 V to +1.4 V                    |
| Analog (PLL) Supply Voltage (V DD_A )         | -0.3 V to +1.4 V                    |
| External (I/O) Supply Voltage (V DD_IO )      | -0.3 V to +3.5 V                    |
| External (DRAM) Supply Voltage (V DD_DRAM ) 1 | -0.3 V to +2.1 V -0.63 V to +3.93 V |
| Input Voltage                                 |                                     |
| Output Voltage Swing                          | -0.5VtoV DD_IO +0.5V                |
| Storage Temperature Range                     | -65°C to +150°C                     |

<!-- image -->

ESD SENSITIVITY Figure 6. Typical Package Brand 1 Applies to 10% transient duty cycle. For other duty cycles see Table 18. ESD (e l ectrostatic discharge) sensitive device. Charged devi c es and c ir c uit boards c an dis c harge without dete c tion. A l though this produ c t features patented or proprietary prote c tion c ir c uitry, damage may o cc ur on devi c es sub j e c ted to high energy ESD. T herefore, proper ESD pre c autions shou l d be taken to avoid performan c e degradation or l oss of fun c tiona l ity. OBSOLETE

## TIMING SPECIFICATIONS

With the exception of DMAR3-0, IRQ3-0, TMR0E, and FLAG3-0 (input only) pins, all ac timing for the ADSP-TS203S processor is relative to a reference clock edge. Because input setup/hold, output valid/hold, and output enable/disable times are relative to a clock edge, the timing data for the ADSP-TS203S processor has few calculated (formula-based) values. For information on ac timing, see General AC Timing. For information on link port transfer timing, see Link Port Low Voltage, Differential-Signal (LVDS) Electrical Characteristics, and Timing on Page 29.

## ADSP-TS203S

The general ac timing data appears in Table 22 and Table 29. All ac specifications are measured with the load specified in Figure 34 on Page 36, and with the output drive strength set to strength 4. In order to calculate the output valid and hold times for different load conditions and/or output drive strengths, refer to Figure 35 on Page 36 through Figure 42 on Page 38 (Rise and Fall Time vs. Load Capacitance) and Figure 43 on Page 38 (Output Valid vs. Load Capacitance and Drive Strength).

The ac asynchronous timing data for the IRQ3-0, DMAR3-0, FLAG3-0, and TMR0E pins appears in Table 21.

| Name      | Description       | Pulse Width Low(Min)   | Pulse Width High (Min)   |
|-----------|-------------------|------------------------|--------------------------|
| IRQ3-0 1  | Interrupt Request | 2× t SCLK ns           | 2×t SCLK ns              |
| DMAR3-0 1 | DMARequest        | 2×t SCLK ns            | 2×t SCLK ns              |
| FLAG3-0 2 | FLAG3-0 Input     | 2× t SCLK ns           | 2× t SCLK ns             |
| TMR0E 3   | Timer 0 Expired   | 4× t SCLK ns           |                          |

| Parameter   | Description           |   Grade = 050 (500 MHz) Min Max |      | Unit   |
|-------------|-----------------------|---------------------------------|------|--------|
| t CCLK 1    | Core Clock Cycle Time |                               2 | 12.5 | ns     |

<!-- image -->

General AC Timing Timing is measured on signals when they cross the 1.25 V level as described in Figure 13 on Page 28. All delays (in nanoseconds) are measured between the point that the first signal reaches 1.25 V and the point that the second signal reaches 1.25 V. Table 21. AC Asynchronous Signal Specifications 1 These input pins have Schmitt triggers and therefore do not need to be synchronized to a clock reference. 2 For output specifications on FLAG3-0 pins, see Table 29. 3 This pin is a strap option. During reset, an internal resistor pulls the pin low. Table 22. Reference Clocks-Core Clock (CCLK) Cycle Time 1 CCLK is the internal processor clock or instruction cycle time. The period of this clock is equal to the system clock period (tSCLK) divided by the system clock ratio (SCLKRAT2-0). For information on available part numbers for different internal processor clock rates, see the Ordering Guide on Page 47. Figure 7. Reference Clocks-Core Clock (CCLK) Cycle Time OBSOLETE

## ADSP-TS203S

## Table 23. Reference Clocks-System Clock (SCLK) Cycle Time

|                |                                             | SCLKRAT=4 × , 6 × , 8 × , 10 × , 12 ×   | SCLKRAT=4 × , 6 × , 8 × , 10 × , 12 ×   | SCLKRAT = 5 × , 7 ×   | SCLKRAT = 5 × , 7 ×   |      |
|----------------|---------------------------------------------|-----------------------------------------|-----------------------------------------|-----------------------|-----------------------|------|
| Parameter      | Description                                 | Min                                     | Max                                     | Min                   | Max                   | Unit |
| t SCLK 1, 2, 3 | System Clock Cycle Time                     | 8                                       | 50                                      | 8                     | 50                    | ns   |
| t SCLKH        | System Clock Cycle High Time                | 0.40 × t SCLK                           | 0.60 × t SCLK                           | 0.45 × t SCLK         | 0.55 × t SCLK         | ns   |
| t SCLKL        | System Clock Cycle Low Time                 | 0.40 × t SCLK                           | 0.60 × t SCLK                           | 0.45 × t SCLK         | 0.55 × t SCLK         | ns   |
| t SCLKF        | System Clock Transition Time-Falling Edge 4 |                                         | 1.5                                     |                       | 1.5                   | ns   |
| t SCLKR        | System Clock Transition Time-Rising Edge    |                                         | 1.5                                     |                       | 1.5                   | ns   |
| t SCLKJ 5, 6   | System Clock Jitter Tolerance               |                                         | 500                                     |                       | 500                   | ps   |

<!-- image -->

Table 24. Reference Clocks-JTAG Test Clock (TCK) Cycle Time

| Parameter   | Description                       | Min                         | Max   | Unit   |
|-------------|-----------------------------------|-----------------------------|-------|--------|
| t TCK       | Test Clock (JTAG) Cycle Time      | Greater of 30 or t CCLK × 4 |       | ns     |
| t TCKH      | Test Clock (JTAG) Cycle High Time | 12                          |       | ns     |
| t TCKL      | Test Clock (JTAG) Cycle Low Time  | 12                          |       | ns     |

<!-- image -->

Figure 8. Reference Clocks-System Clock (SCLK) Cycle Time Figure 9. Reference Clocks-JTAG Test Clock (TCK) Cycle Time OBSOLETE

## Table 25. Power-Up Timing 1

| Parameter            | Min   | Max   | Unit   |
|----------------------|-------|-------|--------|
| Timing Requirement   |       |       |        |
| t VDD_DRAM V DD_DRAM | >0    |       | ms     |

<!-- image -->

| Parameter                | Min                                                                                               | Max          | Unit   |
|--------------------------|---------------------------------------------------------------------------------------------------|--------------|--------|
| Timing Requirements      | Timing Requirements                                                                               |              |        |
| t RST_IN_PWR             | RST_IN Deasserted After V DD , V DD_A , V DD_IO , V DD_DRAM , SCLK, and Static/ Strap Pins Stable | 2            | ms     |
| t TRST_IN_PWR 1          | TRST Asserted During Power-Up Reset                                                               | 100 × t SCLK | ns     |
| Switching Characteristic | Switching Characteristic                                                                          |              |        |
| t RST_OUT_PWR            | RST_OUT Deasserted After RST_IN Deasserted                                                        | 1.5          | ms     |

<!-- image -->

Figure 10. Power-Up Timing Table 26. Power-Up Reset Timing 1 Applies after VDD, VDD\_A, VDD\_IO, VDD\_DRAM, and SCLK are stable and before RST\_IN deasserted. Figure 11. Power-Up Reset Timing OBSOLETE

## ADSP-TS203S

Table 27. Normal Reset Timing

| Parameter                | Min                                        | Max   | Unit   |
|--------------------------|--------------------------------------------|-------|--------|
| Timing Requirements      |                                            |       |        |
| t RST_IN                 | RST_IN Asserted                            | 2     | ms     |
| t STRAP                  | RST_IN Deasserted After Strap Pins Stable  | 1.5   | ms     |
| Switching Characteristic |                                            |       |        |
| t RST_OUT                | RST_OUT Deasserted After RST_IN Deasserted | 1.5   | ms     |

<!-- image -->

| Parameter          | Min   | Max   | Unit   |
|--------------------|-------|-------|--------|
| Timing Requirement |       |       |        |
| t REF On-chip      | 1.56  |       | μs     |

<!-- image -->

Figure 12. Normal Reset Timing Table 28. On-Chip DRAM Refresh 1 1 For more information on setting the refresh rate for the on-chip DRAM, refer to the ADSP-TS201 TigerSHARC Processor Programming Reference . OBSOLETE

Table 29. AC Signal Specifications

## (All values in this table are in nanoseconds.)

| Name                | Description                                         | Input Setup (Min)   | Input Hold (Min)   | Output Valid (Max)   | Output Hold (Min)   | Output Enable (Min) 1   | Output Disable (Max) 1   | Reference Clock   |
|---------------------|-----------------------------------------------------|---------------------|--------------------|----------------------|---------------------|-------------------------|--------------------------|-------------------|
| ADDR31-0            | External Address Bus                                | 1.5                 | 0.5                | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| DATA31-0            | External Data Bus                                   | 1.5                 | 0.5                | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| MSH                 | Memory Select HOST Line                             | -                   | -                  | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| MSSD3-0             | Memory Select SDRAM Lines                           | 1.5                 | 0.5                | 4.0                  | 1.0                 | 1.0                     | 2.0                      | SCLK              |
| MS1-0               | Memory Select for Static Blocks                     | -                   | -                  | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| RD                  | Memory Read                                         | 1.5                 | 0.5                | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| WRL                 | Write Low Word                                      | 1.5                 | 0.5                | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| ACK                 | Acknowledge for Data High to Low                    | 1.5                 | 0.5                | 3.6                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
|                     |                                                     | 1.5                 | 0.5                | 4.2                  | 0.9                 | 1.15                    | 2.0                      | SCLK              |
|                     | Acknowledge for Data Low to High SDRAM Clock Enable | 1.5                 | 0.5                | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| SDCKE RAS           | Row Address Select                                  | 1.5                 | 0.5                | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| CAS                 | Column Address Select                               | 1.5                 | 0.5                | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| SDWE                | SDRAM Write Enable                                  | 1.5                 | 0.5                | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| LDQM                | Low Word SDRAM Data Mask                            | -                   | -                  | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| SDA10               | SDRAM ADDR10                                        | -                   | -                  | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| HBR                 | Host Bus Request                                    | 1.5                 | 0.5                | -                    | -                   | -                       | -                        | SCLK              |
| HBG                 | Host Bus Grant                                      | 1.5                 | 0.5                | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| BOFF                | Back Off Request                                    | 1.5                 | 0.5                | -                    | -                   | -                       | -                        | SCLK              |
| BUSLOCK             | Bus Lock                                            | -                   | -                  | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| BRST                | Burst Pin OBSOLETE                                  | 1.5                 | 0.5                | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| BR7-0               | Multiprocessing Bus Request Pins                    | 1.5                 | 0.5                | 4.0                  | 1.0                 | -                       | -                        | SCLK              |
| BM                  | Bus Master Debug Aid Only                           | -                   | -                  | 4.0                  | 1.0                 | -                       | -                        | SCLK              |
| IORD                | I/O Read Pin                                        | -                   | -                  | 4.0                  | 1.0                 | 1.0                     | 2.0                      | SCLK              |
| IOWR                | I/O Write Pin                                       | -                   | -                  | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| IOEN                | I/O Enable Pin                                      | -                   | -                  | 4.0                  | 1.0                 | 1.15                    | 2.0                      | SCLK              |
| CPA                 | Core Priority Access High to Low                    | 1.5                 | 0.5                | 4.0                  | 1.0                 | 0.75                    | 2.0                      | SCLK              |
|                     | Core Priority Access Low to High                    | 1.5                 | 0.5                | 29.5                 | 2.0                 | 0.75                    | 2.0                      | SCLK              |
| DPA                 | DMAPriority Access High to Low                      | 1.5                 | 0.5                | 4.0                  | 1.0                 | 0.75                    | 2.0                      | SCLK              |
|                     | DMAPriority Access Low to High                      | 1.5                 | 0.5                | 29.5                 | 2.0                 | 0.75 1.15               | 2.0                      | SCLK              |
| BMS 2               | Boot Memory Select                                  | -                   | -                  | 4.0                  | 1.0                 |                         | 2.0                      | SCLK              |
| FLAG3-0 RST_IN 3, 4 | FLAG Pins Global Reset Pin                          | - 1.5               | - 2.5              | 4.0 -                | 1.0 -               | 1.15 -                  | 2.0 -                    | SCLK SCLK 5       |
| TMS                 |                                                     |                     |                    |                      |                     |                         |                          |                   |
|                     | Test Mode Select (JTAG)                             | 1.5                 | 0.5                | -                    | -                   | -                       | -                        | TCK               |
| TDI                 | Test Data Input (JTAG)                              | 1.5                 | 0.5                | -                    | -                   | -                       | -                        | TCK               |
| TDO                 | Test Data Output (JTAG)                             | -                   | -                  | 4.0                  | 1.0                 | 0.75                    | 2.0                      | TCK 6             |
| TRST 3, 4           | Test Reset (JTAG)                                   | 1.5                 | 0.5                | -                    | -                   | -                       | -                        | TCK               |
| EMU 7               | Emulation High to Low                               | -                   | -                  | 5.5                  | 2.0                 | 1.15                    | 4.0                      | TCK or SCLK       |
| ID2-0 8             | Static Pins-Must Be Constant                        | -                   | -                  | -                    | -                   | -                       | -                        | -                 |
| CONTROLIMP1-0 8     | Static Pins-Must Be Constant                        | -                   | -                  | -                    | -                   | -                       | -                        | -                 |
| DS2-0 8             | Static Pins-Must Be Constant                        | -                   | -                  | -                    | -                   | -                       | -                        | -                 |
| SCLKRAT2-0 8        | Static Pins-Must Be Constant                        | -                   | -                  | -                    | -                   | -                       | -                        | -                 |

## ADSP-TS203S

## Table 29. AC Signal Specifications  (Continued)

## (All values in this table are in nanoseconds.)

| Name            | Description                           | Input Setup (Min)   | Input Hold (Min)   | Output Valid (Max)   | Output Hold (Min)   | Output Enable (Min) 1   | Output Disable (Max) 1   | Reference Clock   |
|-----------------|---------------------------------------|---------------------|--------------------|----------------------|---------------------|-------------------------|--------------------------|-------------------|
| ENEDREG         | Static Pins-Must Be Connected to V SS | -                   | -                  | -                    | -                   | -                       | -                        | -                 |
| STRAP SYS 9, 10 | Strap Pins                            | 1.5                 | 0.5                | -                    | -                   | -                       | -                        | SCLK              |
| JTAG SYS 11, 12 | JTAG System Pins                      | +2.5                | +10.0              | +12.0                | -1.0                | -                       | -                        | TCK               |

<!-- image -->

1 The external port protocols employ bus IDLE cycles for bus mastership transitions as well as slave address boundary crossings to avoid any potential bus contention. The apparent driver overlap, due to output disables being larger than output enables, is not actual. 2 For input specifications on FLAG3-0 pins, see Table 21. 3 These input pins are asynchronous and therefore do not need to be synchronized to a clock reference. 4 For additional requirement details, see Reset and Booting on Page 8. 5 RST\_IN clock reference is the falling edge of SCLK. 6 TDO output clock reference is the falling edge of TCK. 7 Reference clock depends on function. 8 These pins may change only during reset; recommend connecting it to VDD\_IO/VSS. 9 STRAP pins include: BMS, BM, BUSLOCK, TMR0E, L1BCMPO, TM2, and TM3. 10 Specifications applicable during reset only. 11 JTAG system pins include: RST\_IN, RST\_OUT, POR\_IN, IRQ3-0, DMAR3-0, HBR, BOFF, MS1-0, MSH, SDCKE, LDQM, BMS, IOWR, IORD, BM, EMU, SDA10, IOEN, BUSLOCK, TMR0E, DATA31-0, ADDR31-0, RD, WRL, BRST, MSSD3-0, RAS, CAS, SDWE, HBG, BR7-0, FLAG3-0, L0DATOP3-0, L0DATON3-0, L1DATOP3-0, L1DATON3-0, L0CLKOUTP, L0CLKOUTN, L1CLKOUTP, L1CLKOUTN, L0ACKI, L1ACKI, L0DATIP3-0, L0DATIN3-0, L1DATIP3-0, L1DATIN3-0, L0CLKINP, L0CLKINN, L1CLKINP, L1CLKINN, L0ACKO, L1ACKO, ACK, CPA, DPA, L0BCMPO, L1BCMPO, L0BCMPI, L1BCMPI, ID2-0, CTRL\_IMPD1-0, SCLKRAT2-0, DS2-0, ENEDREG, TM2, TM3, TM4. 12 JTAG system output timing clock reference is the falling edge of TCK. OBSOLETE

Figure 13. General AC Parameters Timing

## Link Port Low Voltage, Differential-Signal (LVDS) Electrical Characteristics, and Timing

Table 30 and Table 31 with Figure 14 provide the electrical characteristics for the LVDS link ports. The LVDS link port signal definitions represent all differential signals with a VOD = 0 V level and use signal naming without N (negative) and P (positive) suffixes (see Figure 15).

## Table 30. Link Port LVDS Transmit Electrical Characteristics

| Parameter         | Description                         | Test Conditions      | Min   | Max    | Unit   |
|-------------------|-------------------------------------|----------------------|-------|--------|--------|
| V OH              | Output Voltage High, V O_P or V O_N | R L = 100Ω           |       | 1.85   | V      |
| V OL              | Output Voltage Low, V O_P or V O_N  | R L = 100Ω           | 0.92  |        | V      |
| &#124;V OD &#124; | Output Differential Voltage         | R L = 100Ω           | 300   | 650    | mV     |
| I OS              | Short-Circuit Output Current        | V O_P or V O_N = 0 V |       | +5/-55 | mA     |
|                   |                                     | V OD = 0 V           |       | ±10    | mA     |
| V OCM             | Common-Mode Output Voltage          |                      | 1.20  | 1.50   | V      |

| Parameter               | Description                                          | Test Conditions                                                                                     | Min                 | Max                  | Unit          |
|-------------------------|------------------------------------------------------|-----------------------------------------------------------------------------------------------------|---------------------|----------------------|---------------|
| &#124;V ID &#124; V ICM | Differential Input Voltage Common-Mode Input Voltage | t LDIS /t LDIH ≥ 0.20 ns t LDIS /t LDIH ≥ 0.25 ns t LDIS /t LDIH ≥ 0.30 ns t LDIS /t LDIH ≥ 0.35 ns | 250 217 206 195 0.6 | 850 850 850 850 1.57 | mV mV mV mV V |

<!-- image -->

<!-- image -->

Table 31. Link Port LVDS Receive Electrical Characteristics Figure 14. Link Ports-Transmit Electrical Characteristics OBSOLETE

Figure 15. Link Ports-Signals Definition

## ADSP-TS203S

## Link Port-Data Out Timing

Table 32 with Figure 16, Figure 17, Figure 18, Figure 19, Figure 20, and Figure 21 provide the data out timing for the LVDS link ports.

## Table 32. Link Port-Data Out Timing

| Parameter       | Description                                                                                                                                                                                               | Min                                                                                                                                    | Max                                           | Unit     |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|----------|
| Outputs         |                                                                                                                                                                                                           |                                                                                                                                        |                                               |          |
| t REO           | Rising Edge (Figure 17)                                                                                                                                                                                   |                                                                                                                                        | 350                                           | ps       |
| t FEO           | Falling Edge (Figure 17)                                                                                                                                                                                  |                                                                                                                                        | 350                                           | ps       |
| t LCLKOP        | LxCLKOUT Period (Figure 16)                                                                                                                                                                               | Greater of 4.0 or 0.9 × LCR × t CCLK 1, 2, 3                                                                                           | Smaller of 12.5 or 1.1 × LCR × t CCLK 1, 2, 3 | ns       |
| t LCLKOH        | LxCLKOUT High (Figure 16)                                                                                                                                                                                 | 0.4 × t LCLKOP 1                                                                                                                       | 0.6 × t LCLKOP 1                              | ns       |
| t LCLKOL        | LxCLKOUT Low (Figure 16)                                                                                                                                                                                  | 0.4 × t LCLKOP 1                                                                                                                       | 0.6 × t LCLKOP 1                              | ns       |
| t COJT          | LxCLKOUT Jitter (Figure 16)                                                                                                                                                                               |                                                                                                                                        | ±150 4, 5, 6 7                                | ps       |
| t LDOS          | LxDATO Output Setup (Figure 18)                                                                                                                                                                           | 0.25 × LCR × t CCLK - 0.10 × t CCLK 1, 4, 8 0.25 × LCR × t CCLK - 0.15 × t CCLK 1, 5, 6, 8 0.25 × LCR × t CCLK - 0.30 × t CCLK 1, 7, 8 | ±250                                          | ns ns ns |
| t LDOH          | LxDATO Output Hold (Figure 18)                                                                                                                                                                            | 0.25 × LCR × t CCLK - 0.10 × t CCLK 1, 4, 8 0.25 × LCR × t CCLK - 0.15 × t CCLK 1, 5, 6, 8 1, 7, 8                                     |                                               | ns ns    |
| t LACKID        | Delay from LxACKI rising edge to first trans- mission clock edge (Figure 19)                                                                                                                              | CCLK CCLK                                                                                                                              | 16 × LCR × t CCLK 1, 2                        | ns       |
| t BCMPOV        | LxBCMPO Valid (Figure 19)                                                                                                                                                                                 |                                                                                                                                        | 2 × LCR × t CCLK 1, 2                         | ns       |
| t BCMPOH Inputs | LxBCMPO Hold (Figure 20)                                                                                                                                                                                  | 3 × TSW - 0.5 1, 9                                                                                                                     |                                               | ns       |
| t LACKIS        | LxACKI low setup to guarantee that the trans- mitter stops transmitting (Figure 20) LxACKI high setup to guarantee that the trans- mitter continues its transmission without any interruption (Figure 21) | 16 × LCR × t CCLK 1, 2                                                                                                                 |                                               | ns       |
| t LACKIH        | LxACKI High Hold Time (Figure 21)                                                                                                                                                                         | 0.51                                                                                                                                   |                                               | ns       |

<!-- image -->

1 Timing is relative to the 0 differential voltage (V OD  = 0). 2 LCR (link port clock ratio) = 1, 1.5, 2, or 4. tCCLK is the core period. 3 For the cases of tLCLKOP = 4.0 ns and tLCLKOP = 12.5 ns, the effect of tCOJT specification on output period must be considered. 4 LCR = 1. 5 LCR = 1.5. 6 LCR = 2. 7 LCR = 4. 8 The tLDOS and tLDOH values include LCLKOUT jitter. 9 TSW is a short-word transmission period. For a 4-bit link, it is 2 × LCR × tCCLK. For a 1-bit link, it is 8 × LCR × tCCLK ns. OBSOLETE

Figure 16. Link Ports-Output Clock

<!-- image -->

|

|

## ADSP-TS203S

<!-- image -->

<!-- image -->

Figure 17. Link Ports-Differential Output Signals Transition Time Figure 19. Link Ports-Transmission Start OBSOLETE

## ADSP-TS203S

<!-- image -->

<!-- image -->

Figure 20. Link Ports-Transmission End and Stops OBSOLETE

Figure 21. Link Ports-Back to Back Transmission

## Link Port-Data In Timing

Table 33 with Figure 22 and Figure 23 provide the data in timing for the LVDS link ports.

## Table 33. Link Port-Data In Timing

| Parameter   | Description                    | Min                                            | Max   | Unit           |
|-------------|--------------------------------|------------------------------------------------|-------|----------------|
| Inputs      |                                |                                                |       |                |
| t LCLKIP    | LxCLKIN Period (Figure 23)     | Greater of 1.8 or 0.9 × t CCLK 1               | 12.5  | ns             |
| t LDIS      | LxDATI Input Setup (Figure 23) | 0.20 1, 2 0.25 1, 3 0.30 1, 4 1, 5             |       | ns ns ns ns    |
| t LDIH      | LxDATI Input Hold (Figure 23)  | 0.35 0.20 1, 2 0.25 1, 3 0.30 1, 4 0.35 1, 5 1 |       | ns ns ns ns ns |
| t BCMPIS    | LxBCMPI Setup (Figure 22)      | 2 × t LCLKIP                                   |       |                |
| t BCMPIH    | LxBCMPI Hold (Figure 22)       | 2 × t LCLKIP 1                                 |       | ns             |

OBSOLETE

Figure 22. Link Ports-Last Received Quad Word

<!-- image -->

## ADSP-TS203S

<!-- image -->

<!-- image -->

OUTPUT DRIVE CURRENTS Figure 24 through Figure 31 show typical I-V characteristics for the output drivers of the ADSP-TS203S processor. The curves in these diagrams represent the current drive capability of the output drivers as a function of output voltage over the range of drive strengths. For complete output driver characteristics, refer to the processor's IBIS models, available on the Analog Devices website (www.analog.com). Figure 23. Link Ports-Data Input Setup and Hold 1 1 These parameters are valid for both clock edges. Figure 24. Typical Drive Currents at Strength 0 Figure 25. Typical Drive Currents at Strength 1 Figure 26. Typical Drive Currents at Strength 2 OBSOLETE

Figure 27. Typical Drive Currents at Strength 3

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## ADSP-TS203S

<!-- image -->

<!-- image -->

The output disable time tDIS is the difference between tMEASURED\_DIS and tDECAY as shown in Figure 33. The time tMEASURED\_DIS is the interval from when the reference signal switches to when the output voltage decays ΔV from the measured output high or output low voltage. tDECAY is calculated with test loads CL and IL, and with ∆ V equal to 0.4 V.

TEST CONDITIONS The ac signal specifications (timing parameters) appear in Table 29 on Page 27. These include output disable time, output enable time, and capacitive loading. The timing specifications for the processor apply for the voltage reference levels in Figure 32. Output Disable Time Output pins are considered to be disabled when they stop driving, go into a high impedance state, and start to decay from their output high or low voltage. The time for the voltage on the bus to decay by ΔV is dependent on the capacitive load, CL and the load current, IL. This decay time can be approximated by the following equation: Figure 28. Typical Drive Currents at Strength 4 Figure 29. Typical Drive Currents at Strength 5 Figure 31. Typical Drive Currents at Strength 7 Figure 32. Voltage Reference Levels for AC Measurements (Except Output Enable/Disable) t DECAY C L V ∆ ( ) I L / = OBSOLETE

Figure 30. Typical Drive Currents at Strength 6

## ADSP-TS203S

<!-- image -->

## Output Enable Time

Output pins are considered to be enabled when they have made a transition from a high impedance state to when they start driving. The time for the voltage on the bus to ramp by ΔV is dependent on the capacitive load, CL, and the drive current, ID. This ramp time can be approximated by the following equation:

The output enable time tENA is the difference between t MEASURED\_ENA and tRAMP as shown in Figure 33. The time tMEASURED\_ENA is the interval from when the reference signal switches to when the output voltage ramps ΔV from the measured three-stated output level. tRAMP is calculated with test load CL, drive current ID, and with ΔV equal to 0.4 V.

## Capacitive Loading

Output valid and hold are based on standard capacitive loads: 30 pF on all pins (see Figure 34). The delay and hold specifications given should be derated by a drive strength related factor for loads other than the nominal value of 30 pF. Figure 35 through Figure 42 show how output rise time varies with capacitance. Figure 43 graphically shows how output valid varies with load capacitance. (Note that this graph or derating does not apply to output disable delays; see Output Disable Time on Page 35.) The graphs of Figure 35 through Figure 43 may not be linear outside the ranges shown.

<!-- formula-not-decoded -->

Figure 33. Output Enable/Disable t RAMP C L V ∆ ( ) I D / = Figure 35. Typical Output Rise and Fall Time (10% to 90%, VDD\_IO = 2.5 V) vs. Load Capacitance at Strength 0 Figure 36. Typical Output Rise and Fall Time (10% to 90%, VDD\_IO = 2.5 V) vs. Load Capacitance at Strength 1 OBSOLETE

Figure 34. Equivalent Device Loading for AC Measurements (Includes All Fixtures)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## ADSP-TS203S

Figure 39. Typical Output Rise and Fall Time (10% to 90%, VDD\_IO = 2.5 V) vs. Load Capacitance at Strength 4

<!-- image -->

Figure 40. Typical Output Rise and Fall Time (10% to 90%, V DD\_IO = 2.5 V) vs. Load Capacitance at Strength 5

<!-- image -->

Figure 37. Typical Output Rise and Fall Time (10% to 90%, VDD\_IO = 2.5 V) vs. Load Capacitance at Strength 2 Figure 38. Typical Output Rise and Fall Time (10% to 90%, VDD\_IO = 2.5 V) vs. Load Capacitance at Strength 3 OBSOLETE

## ADSP-TS203S

Figure 41. Typical Output Rise and Fall Time (10% to 90%, VDD\_IO = 2.5 V) vs. Load Capacitance at Strength 6

<!-- image -->

Figure 42. Typical Output Rise and Fall Time (10% to 90%, VDD\_IO = 2.5 V) vs. Load Capacitance at Strength 7

<!-- image -->

ENVIRONMENTAL CONDITIONS The ADSP-TS203S processor is rated for performance under TCASE environmental conditions specified in the Operating Conditions on Page 20. Thermal Characteristics The ADSP-TS203S processor is packaged in a 25 mm × 25 mm, thermally enhanced ball grid array (BGA\_ED). The processor is specified for a case temperature (TCASE). To ensure that the TCASE data sheet specification is not exceeded, a heat sink and/or an air flow source may be required. Table 34 shows the thermal characteristics of the BGA\_ED package. All parameters are based on a JESD51-9 four-layer 2s2p board. All data are based on 3 W power dissipation. Figure 43. Typical Output Valid (VDD\_IO = 2.5 V) vs. Load Capacitance at Max Case Temperature and Strength 0 to 7 1 1 The line equations for the output valid vs. load capacitance are: Strength 0: y = 0.0956x + 3.5662 Strength 1: y = 0.0523x + 3.2144 Strength 2: y = 0.0433x + 3.1319 Strength 3: y = 0.0391x + 2.9675 Strength 4: y = 0.0393x + 2.7653 Strength 5: y = 0.0373x + 2.6515 Strength 6: y = 0.0379x + 2.1206 Strength 7: y = 0.0399x + 1.9080 Table 34. Thermal Characteristics OBSOLETE

<!-- image -->

| Parameter   | Condition       | Typical   | Unit   |
|-------------|-----------------|-----------|--------|
| θ JA 1      | Airflow = 0 m/s | 12.9 2    | °C/W   |
| θ JA 1      | Airflow = 1 m/s | 10.2      | °C/W   |
| θ JA 1      | Airflow = 2 m/s | 9.0       | °C/W   |
| θ JA 1      | Airflow = 3 m/s | 8.0       | °C/W   |
| θ JB 3      | -               | 7.7       | °C/W   |
| θ JC 4      | -               | 0.7       | °C/W   |

## 576-BALL BGA\_ED PIN CONFIGURATIONS

Figure 44 shows a summary of pin configurations for the 576-ball BGA\_ED package, and Table 35 lists the signal-to-ball assignments.

Table 35. 576-Ball (25 mm × 25 mm) BGA\_ED Ball Assignments

| Ball No.   | SignalName   | Ball No.   | SignalName   | Ball No.   | SignalName   | Ball No.   | SignalName   |
|------------|--------------|------------|--------------|------------|--------------|------------|--------------|
| A1         | V SS         | B1         | NC           | C1         | V SS         | D1         | NC           |
| A2         | NC           | B2         | V SS         | C2         | V SS         | D2         | NC           |
| A3         | V SS         | B3         | V SS         | C3         | V SS         | D3         | NC           |
| A4         | NC           | B4         | NC           | C4         | NC           | D4         | V SS         |
| A5         | NC           | B5         | NC           | C5         | NC           | D5         | NC           |
| A6         | NC           | B6         | NC           | C6         | NC           | D6         | NC           |
| A7         | NC           | B7         | NC           | C7         | NC           | D7         | NC           |
| A8         | NC           | B8         | NC           | C8         | NC           | D8         | NC           |
| A9         | DATA29       | B9         | DATA30       | C9         | DATA31       | D9         | NC           |
| A10        | DATA25       | B10        | DATA26       | C10        | DATA27       | D10        | DATA28       |
| A11        | DATA23       | B11        | DATA24       | C11        | DATA21       | D11        | DATA22       |
| A12        | DATA19       | B12        | DATA20       | C12        | DATA17       | D12        | DATA18       |
| A13        | DATA15       | B13        | DATA16       | C13        | V SS         | D13        | V SS         |
| A14        | DATA11       | B14        | DATA12       | C14        | DATA13       | D14        | DATA14       |
| A15        | DATA9        | B15        | DATA10       | C15        | DATA7        | D15        | DATA8        |
| A16        | DATA5        | B16        | DATA6        | C16        | DATA3        | D16        | DATA4        |
| A17        | DATA1        | B17        | DATA2        | C17        | ACK          | D17        | DATA0        |
| A18        | WRL          | B18        | TM4          | C18        | RD           | D18        | BRST         |
| A19        | ADDR30       | B19        | ADDR31       | C19        | ADDR26       | D19        | ADDR27       |
| A20        | ADDR28       | B20        | ADDR29       | C20        | ADDR24       | D20        | ADDR25       |
| A21        | ADDR22       | B21        | ADDR23       | C21        | ADDR20       | D21        | V SS         |
| A22        | V SS         | B22        | V SS         | C22        | V SS         | D22        | ADDR19       |
| A23        | ADDR21       | B23        | V SS         | C23        | V DD_IO      | D23        | ADDR17       |
| A24        | V SS         | B24        | ADDR18       | C24        | V DD_IO      | D24        | ADDR16       |

OBSOLETE

## ADSP-TS203S

Table 35. 576-Ball (25 mm × 25 mm) BGA\_ED Ball Assignments  (Continued)

| Ball No.   | SignalName   | Ball No.   | SignalName   | Ball No.   | SignalName   | Ball No.   | SignalName   |
|------------|--------------|------------|--------------|------------|--------------|------------|--------------|
| E1         | NC           | F1         | NC           | G1         | MSSD1        | H1         | V SS         |
| E2         | NC           | F2         | MS1          | G2         | V SS         | H2         | MSH          |
| E3         | NC           | F3         | NC           | G3         | MS0          | H3         | MSSD3        |
| E4         | NC           | F4         | NC           | G4         | BMS          | H4         | SCLKRAT0     |
| E5         | V SS         | F5         | V DD_IO      | G5         | V SS         | H5         | V DD_IO      |
| E6         | V DD_IO      | F6         | V DD         | G6         | V DD         | H6         | V DD         |
| E7         | V SS         | F7         | V DD         | G7         | V DD         | H7         | V DD         |
| E8         | V DD_IO      | F8         | V DD         | G8         | V DD         | H8         | V SS         |
| E9         | V SS         | F9         | V DD         | G9         | V DD         | H9         | V SS         |
| E10        | V DD_IO      | F10        | V DD         | G10        | V DD         | H10        | V SS         |
| E11        | V DD_IO      | F11        | V DD_DRAM    | G11        | V DD_DRAM    | H11        | V SS         |
| E12        | V DD_IO      | F12        | V DD_DRAM    | G12        | V DD_DRAM    | H12        | V SS         |
| E13        | V DD_IO      | F13        | V DD         | G13        | V DD         | H13        | V SS         |
| E14        | V DD_IO      | F14        | V DD         | G14        | V DD         | H14        | V SS         |
| E15        | V DD_IO      | F15        | V DD_DRAM    | G15        | V DD_DRAM    | H15        | V SS         |
| E16        | V SS         | F16        | V DD_DRAM    | G16        | V DD_DRAM    | H16        | V SS         |
| E17        | V DD_IO      | F17        | V DD         | G17        | V DD         | H17        | V SS         |
| E18        | V SS         | F18        | V DD         | G18        | V DD         | H18        | V DD         |
| E19        | V DD_IO      | F19        | V DD         | G19        | V DD         | H19        | V DD         |
| E20        | V SS         | F20        | V DD_IO      | G20        | V DD_IO      | H20        | V DD_IO      |
| E21        | ADDR15       | F21        | ADDR13       | G21        | ADDR7        | H21        | ADDR3        |
| E22        | ADDR14       | F22        | ADDR12       | G22        | ADDR6        | H22        | ADDR2        |
| E23        | ADDR11       | F23        | ADDR9        | G23        | ADDR5        | H23        | ADDR1        |
| E24        | ADDR10       | F24        | ADDR8        | G24        | ADDR4        | H24        | ADDR0        |

OBSOLETE

Table 35. 576-Ball (25 mm × 25 mm) BGA\_ED Ball Assignments  (Continued)

| Ball No.   | SignalName   | Ball No.   | SignalName   | Ball No.   | SignalName   | Ball No.   | SignalName   |
|------------|--------------|------------|--------------|------------|--------------|------------|--------------|
| J1         | RAS          | K1         | SDA10        | L1         | SDWE         | M1         | BR3          |
| J2         | CAS          | K2         | SDCKE        | L2         | BR0          | M2         | SCLKRAT1     |
| J3         | V SS         | K3         | LDQM         | L3         | BR1          | M3         | BR5          |
| J4         | V REF        | K4         | NC           | L4         | BR2          | M4         | BR6          |
| J5         | V SS         | K5         | V DD_IO      | L5         | V DD_IO      | M5         | V DD_IO      |
| J6         | V DD         | K6         | V DD         | L6         | V DD         | M6         | V DD         |
| J7         | V DD         | K7         | V DD         | L7         | V DD         | M7         | V DD         |
| J8         | V SS         | K8         | V SS         | L8         | V SS         | M8         | V SS         |
| J9         | V SS         | K9         | V SS         | L9         | V SS         | M9         | V SS         |
| J10        | V SS         | K10        | V SS         | L10        | V SS         | M10        | V SS         |
| J11        | V SS         | K11        | V SS         | L11        | V SS         | M11        | V SS         |
| J12        | V SS         | K12        | V SS         | L12        | V SS         | M12        | V SS         |
| J13        | V SS         | K13        | V SS         | L13        | V SS         | M13        | V SS         |
| J14        | V SS         | K14        | V SS         | L14        | V SS         | M14        | V SS         |
| J15        | V SS         | K15        | V SS         | L15        | V SS         | M15        | V SS         |
| J16        | V SS         | K16        | V SS         | L16        | V SS         | M16        | V SS         |
| J17        | V SS         | K17        | V SS         | L17        | V SS         | M17        | V SS         |
| J18        | V DD         | K18        | V DD_DRAM    | L18        | V DD_DRAM    | M18        | V DD         |
| J19        | V DD         | K19        | V DD_DRAM    | L19        | V DD_DRAM    | M19        | V DD         |
| J20        | V SS         | K20        | V DD_IO      | L20        | V DD_IO      | M20        | V DD_IO      |
| J21        | L0ACKO       | K21        | L0DATI1_N    | L21        | L0DATI3_N    | M21        | V SS         |
| J22        | L0BCMPI      | K22        | L0DATI1_P    | L22        | L0DATI3_P    | M22        | V SS         |
| J23        | L0DATI0_N    | K23        | L0CLKINN     | L23        | L0DATI2_N    | M23        | L0DATO3_N    |
| J24        | L0DATI0_P    | K24        | L0CLKINP     | L24        | L0DATI2_P    | M24        | L0DATO3_P    |

OBSOLETE

## ADSP-TS203S

## ADSP-TS203S

Table 35. 576-Ball (25 mm × 25 mm) BGA\_ED Ball Assignments  (Continued)

| Ball No.   | SignalName   | Ball No.   | SignalName   | Ball No.   | SignalName       | Ball No.   | SignalName   |
|------------|--------------|------------|--------------|------------|------------------|------------|--------------|
| N1         | ID0          | P1         | SCLK         | R1         | V SS             | T1         | RST_IN       |
| N2         | V SS         | P2         | SCLK_VREF    | R2         | NC (SCLK) 1      | T2         | SCLKRAT2     |
| N3         | V DD_A       | P3         | V SS         | R3         | NC (SCLK_VREF) 1 | T3         | BR4          |
| N4         | V DD_A       | P4         | BM           | R4         | BR7              | T4         | DS0          |
| N5         | V DD_IO      | P5         | V DD_IO      | R5         | V DD_IO          | T5         | V SS         |
| N6         | V DD         | P6         | V DD         | R6         | V DD             | T6         | V DD         |
| N7         | V DD         | P7         | V DD         | R7         | V DD             | T7         | V DD         |
| N8         | V SS         | P8         | V SS         | R8         | V SS             | T8         | V SS         |
| N9         | V SS         | P9         | V SS         | R9         | V SS             | T9         | V SS         |
| N10        | V SS         | P10        | V SS         | R10        | V SS             | T10        | V SS         |
| N11        | V SS         | P11        | V SS         | R11        | V SS             | T11        | V SS         |
| N12        | V SS         | P12        | V SS         | R12        | V SS             | T12        | V SS         |
| N13        | V SS         | P13        | V SS         | R13        | V SS             | T13        | V SS         |
| N14        | V SS         | P14        | V SS         | R14        | V SS             | T14        | V SS         |
| N15        | V SS         | P15        | V SS         | R15        | V SS             | T15        | V SS         |
| N16        | V SS         | P16        | V SS         | R16        | V SS             | T16        | V SS         |
| N17        | V SS         | P17        | V SS         | R17        | V SS             | T17        | V SS         |
| N18        | V DD         | P18        | V DD_DRAM    | R18        | V DD_DRAM        | T18        | V DD         |
| N19        | V DD         | P19        | V DD_DRAM    | R19        | V DD_DRAM        | T19        | V DD         |
| N20        | V DD_IO      | P20        | V DD_IO      | R20        | V DD_IO          | T20        | V SS         |
| N21        | L0DATO2_N    | P21        | L0DATO1_N    | R21        | NC               | T21        | L1DATI0_N    |
| N22        | L0DATO2_P    | P22        | L0DATO1_P    | R22        | V SS             | T22        | L1DATI0_P    |
| N23        | L0CLKON      | P23        | L0DATO0_N    | R23        | L0BCMPO          | T23        | L1ACKO       |
| N24        | L0CLKOP      | P24        | L0DATO0_P    | R24        | L0ACKI           | T24        | L1BCMPI      |

OBSOLETE

Table 35. 576-Ball (25 mm × 25 mm) BGA\_ED Ball Assignments  (Continued)

| Ball No.   | SignalName   | Ball No.   | SignalName   | Ball No.   | SignalName   | Ball No.   | SignalName   |
|------------|--------------|------------|--------------|------------|--------------|------------|--------------|
| U1         | MSSD0        | V1         | MSSD2        | W1         | CONTROLIMP0  | Y1         | EMU          |
| U2         | RST_OUT      | V2         | DS2          | W2         | ENEDREG      | Y2         | TCK          |
| U3         | ID2          | V3         | POR_IN       | W3         | TDI          | Y3         | TMR0E        |
| U4         | DS1          | V4         | CONTROLIMP1  | W4         | TDO          | Y4         | FLAG3        |
| U5         | V DD_IO      | V5         | V SS         | W5         | V DD_IO      | Y5         | V SS         |
| U6         | V DD         | V6         | V DD         | W6         | V DD         | Y6         | V DD_IO      |
| U7         | V DD         | V7         | V DD         | W7         | V DD         | Y7         | V SS         |
| U8         | V SS         | V8         | V DD         | W8         | V DD         | Y8         | V DD_IO      |
| U9         | V SS         | V9         | V DD         | W9         | V DD         | Y9         | V SS         |
| U10        | V DD         | V10        | V DD         | W10        | V DD         | Y10        | V DD_IO      |
| U11        | V DD_DRAM    | V11        | V DD_DRAM    | W11        | V DD_DRAM    | Y11        | V DD_IO      |
| U12        | V SS         | V12        | V DD_DRAM    | W12        | V DD_DRAM    | Y12        | V DD_IO      |
| U13        | V SS         | V13        | V DD         | W13        | V DD         | Y13        | V DD_IO      |
| U14        | V SS         | V14        | V DD         | W14        | V DD         | Y14        | V DD_IO      |
| U15        | V SS         | V15        | V DD_DRAM    | W15        | V DD_DRAM    | Y15        | V DD_IO      |
| U16        | V SS         | V16        | V DD_DRAM    | W16        | V DD_DRAM    | Y16        | V SS         |
| U17        | V SS         | V17        | V DD         | W17        | V DD         | Y17        | V DD_IO      |
| U18        | V DD         | V18        | V DD         | W18        | V DD         | Y18        | V SS         |
| U19        | V DD         | V19        | V DD         | W19        | V DD         | Y19        | V DD_IO      |
| U20        | V DD_IO      | V20        | V DD_IO      | W20        | V DD_IO      | Y20        | V SS         |
| U21        | L1CLKINN     | V21        | L1DATI3_N    | W21        | L1CLKON      | Y21        | L1DATO1_N    |
| U22        | L1CLKINP     | V22        | L1DATI3_P    | W22        | L1CLKOP      | Y22        | L1DATO1_P    |
| U23        | L1DATI1_N    | V23        | L1DATI2_N    | W23        | L1DATO3_N    | Y23        | L1DATO2_N    |
| U24        | L1DATI1_P    | V24        | L1DATI2_P    | W24        | L1DATO3_P    | Y24        | L1DATO2_P    |

OBSOLETE

## ADSP-TS203S

## ADSP-TS203S

Table 35. 576-Ball (25 mm × 25 mm) BGA\_ED Ball Assignments  (Continued)

| Ball No.   | SignalName   | Ball No.   | SignalName   | Ball No.   | SignalName   | Ball No.   | SignalName   |
|------------|--------------|------------|--------------|------------|--------------|------------|--------------|
| AA1        | FLAG2        | AB1        | V SS         | AC1        | FLAG0        | AD1        | V SS         |
| AA2        | FLAG1        | AB2        | V SS         | AC2        | V SS         | AD2        | ID1          |
| AA3        | IRQ3         | AB3        | V SS         | AC3        | V DD_IO      | AD3        | V DD_IO      |
| AA4        | V SS         | AB4        | NC           | AC4        | TMS          | AD4        | TRST         |
| AA5        | IRQ0         | AB5        | IRQ2         | AC5        | IOWR         | AD5        | IORD         |
| AA6        | IOEN         | AB6        | IRQ1         | AC6        | DMAR2        | AD6        | DMAR3        |
| AA7        | DMAR0        | AB7        | DMAR1        | AC7        | CPA          | AD7        | DPA          |
| AA8        | HBR          | AB8        | HBG          | AC8        | BOFF         | AD8        | BUSLOCK      |
| AA9        | TM3          | AB9        | V DD_IO      | AC9        | NC           | AD9        | NC           |
| AA10       | NC           | AB10       | NC           | AC10       | NC           | AD10       | NC           |
| AA11       | NC           | AB11       | NC           | AC11       | NC           | AD11       | NC           |
| AA12       | V SS         | AB12       | V SS         | AC12       | V DD_IO      | AD12       | V DD_IO      |
| AA13       | V DD_IO      | AB13       | V DD_IO      | AC13       | V SS         | AD13       | V DD_IO      |
| AA14       | V DD_IO      | AB14       | V DD_IO      | AC14       | V DD_IO      | AD14       | V DD_IO      |
| AA15       | NC           | AB15       | V SS         | AC15       | NC           | AD15       | V SS         |
| AA16       | NC           | AB16       | NC           | AC16       | TM2          | AD16       | V DD_IO      |
| AA17       | NC           | AB17       | NC           | AC17       | NC           | AD17       | NC           |
| AA18       | NC           | AB18       | NC           | AC18       | NC           | AD18       | NC           |
| AA19       | V SS         | AB19       | V DD_IO      | AC19       | V DD_IO      | AD19       | V DD_IO      |
| AA20       | V DD_IO      | AB20       | V DD_IO      | AC20       | V DD_IO      | AD20       | V DD_IO      |
| AA21       | V SS         | AB21       | NC           | AC21       | V DD_IO      | AD21       | V DD_IO      |
| AA22       | L1BCMPO      | AB22       | V SS         | AC22       | V DD_IO      | AD22       | V DD_IO      |
| AA23       | L1DATO0_N    | AB23       | V DD_IO      | AC23       | V SS         | AD23       | V SS         |
| AA24       | L1DATO0_P    | AB24       | V DD_IO      | AC24       | L1ACKI       | AD24       | V SS         |

1 On revision 1.x silicon, the R2 and R3 balls are NC. On revision 0.x silicon, the R2 ball is SCLK, and the R3 ball is SCLK\_VREF. For more information on SCLK and SCLK\_VREF on revision 0.x silicon, see EE-179: ADSP-TS20x TigerSHARC System Design Guidelines . OBSOLETE

## ADSP-TS203S

<!-- image -->

Figure 44. 576-Ball BGA\_ED Pin Configurations 1 (Top View, Summary) 1 For a more detailed pin summary diagram, see EE-179: ADSP-TS20x TigerSHARC System Design Guidelines . TOP VIEW OBSOLETE

## ADSP-TS203S

## OUTLINE DIMENSIONS

The ADSP-TS203S processor is available in a 25 mm × 25 mm, 576-ball metric thermally enhanced ball grid array (BGA\_ED) package with 24 rows of balls (BP-576).

25.20

Figure 45. 576-Ball BGA\_ED (BP-576) 1. ALL DIMENSIONS ARE IN MILLIMETERS. 2. THE ACTUAL POSITION OF THE BALL GRID IS WITHIN 0.25 mm OF ITS IDEAL POSITION RELATIVE TO THE PACKAGE EDGES. 3. CENTER DIMENSIONS ARE NOMINAL. 4. THIS PACKAGE CONFORMS TO JEDEC MS-034 SPECIFICATION. OBSOLETE

<!-- image -->

## SURFACE MOUNT DESIGN

The following table is provided as an aide to PCB design. The numbers listed in the table are for reference purposes and should not supersede the PCB design rules. Please reference IPC-7351, Surface Mount Design and Land Pattern Standard , for PCB design recommendations.

| Package                    | Ball Attach Type              |   Solder Mask Opening |   Ball Pad Size |
|----------------------------|-------------------------------|-----------------------|-----------------|
| 576-Ball BGA_ED (BP-576-1) | Nonsolder Mask Defined (NSMD) |                  0.69 |            0.56 |

## ORDERING GUIDE

| Model 1            | Temperature Range 2   | Instruction Rate 3   | On-Chip DRAM   | Package Option   | Package Description   |
|--------------------|-----------------------|----------------------|----------------|------------------|-----------------------|
| ADSP-TS203SBBPZ050 | 0°C to +85°C          | 500 MHz              | 4Mbit          | BP-576           | 576-Ball BGA_ED       |
| ADSP-TS203SABP-050 | -40°C to +85°C        | 500 MHz              | 4Mbit          | BP-576           | 576-Ball BGA_ED       |
| ADSP-TS203SABPZ050 | -40°C to +85°C        | 500 MHz              | 4Mbit          | BP-576           | 576-Ball BGA_ED       |

1 Z = RoHS complaint part. 2 Represents case temperature.

3 The instruction rate is the same as the internal processor core clock (CCLK) rate.

OBSOLETE

ADSP-TS203S

ADSP-TS203S

## OBSOLETE

© 2012  Analog  Devices,  Inc.  All  rights  reserved.  Trademarks  and registered  trademarks  are  the  property  of  their  respective  owners. D04326-0-5/12(D)

<!-- image -->

Rev. D

|

Page 48 of 48

|

May 2012