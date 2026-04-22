<!-- lastmod 2025-09-05 -->
<!-- image -->

## FEATURES

- 300 MHz, 3.3 ns instruction cycle rate

6Mbits of internal-on-chip-SRAM memory

- 19 mm × 19 mm (484-ball) CSP\_BGA or 27 mm × 27 mm (625-ball) PBGA package
- Dual computation blocks-each containing an ALU, a multiplier, a shifter, and a register file
- Dual integer ALUs, providing data addressing and pointer manipulation
- Integrated I/O includes 14-channel DMA controller, external port, 4 link ports, SDRAM controller, programmable flag pins, 2 timers, and timer expired pin for system integration
- 1149.1 IEEE compliant JTAG test access port for on-chip emulation
- On-chip arbitration for glueless multiprocessing with up to
- 8 TigerSHARC processors on a bus

Figure 1. Functional Block Diagram

<!-- image -->

TigerSHARC and the TigerSHARC logo are registered trademarks of Analog Devices, Inc.

## Rev. E                                                                                           Document Feedback

Information  furnished  by  Analog  Devices  is  believed  to  be  accurate  and  reliable. However,  no  responsibility  is  assumed  by  Analog  Devices  for  its  use,  nor  for  any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## BENEFITS

- Provides high performance Static Superscalar DSP operations, optimized for telecommunications infrastructure and other large, demanding multiprocessor DSP applications
- Performs exceptionally well on DSP algorithm and I/O benchmarks (see benchmarks in Table 1 and Table 2)
- Supports low overhead DMA transfers between internal memory, external memory, memory-mapped peripherals, link ports, other DSPs (multiprocessor), and host processors
- Eases DSP programming through extremely flexible instruc-
- tion set and high-level language-friendly DSP architecture
- Enables scalable multiprocessing systems with low communications overhead

## TigerSHARC Embedded Processor

ADSP-TS101S

## ADSP-TS101S

## TABLE OF CONTENTS

| Features . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   | . 1   |
|--------------------------------------------------------------------------------------------|-------|
| Benefits . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   | . 1   |
| Table of Contents . . . . . . . . . . . . . . . . . . . . . . . . . . . .                  | . 2   |
| Revision History . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                 | . 2   |
| General Description . . . . . . . . . . . . . . . . . . . . . . . .                        | . 3   |
| Dual Compute Blocks . . . . . . . . . . . . . . . . . . .                                  | . 4   |
| Data Alignment Buffer (DAB) . . . . . . . . .                                              | . 4   |
| Dual Integer ALUs (IALUs) . . . . . . . . . . .                                            | . 4   |
| Program Sequencer . . . . . . . . . . . . . . . . . . . . . .                              | . 5   |
| On-Chip SRAM Memory . . . . . . . . . . . . . . .                                          | . 5   |
| External Port (Off-Chip Memory/Peripherals Interface)                                      | . 6   |
| DMAController . . . . . . . . . . . . . . . . . . . . . . . . . .                          | . 7   |
| Link Ports . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .             | . 9   |
| Timer and General-Purpose I/O . . . . . .                                                  | . 9   |
| Reset and Booting . . . . . . . . . . . . . . . . . . . . . . . .                          | . 9   |
| Low Power Operation . . . . . . . . . . . . . . . . . . .                                  | . 9   |
| Clock Domains . . . . . . . . . . . . . . . . . . . . . . . . . . .                        | . 9   |
| Output Pin Drive Strength Control . .                                                      | 10    |
| Power Supplies . . . . . . . . . . . . . . . . . . . . . . . . . . . .                     | 10    |
| Filtering Reference Voltage and Clocks                                                     | 10    |
| Development Tools . . . . . . . . . . . . . . . . . . . . . .                              | 10    |
| REVISION HISTORY 10/22-Rev. Dto Rev. E                                                     |       |
| Thermal Characteristics . . . . . . . . . . . . . .                                        | 36    |
| Pin Configurations . . . . . . . . . . . . . . . . . . . . .                               | 37    |
| Outline Dimensions . . . . . . . . . . . . . . . . . . .                                   | 43    |
| Surface-Mount Design . . . . . . . . . . . . . . . .                                       | 44    |
| Ordering Guide . . . . . . . . . . . . . . . . . . . . . . . . .                           | 45    |

Designing an Emulator-Compatible

DSP Board (Target)  ..........................................  11

Additional Information  ........................................  11

Pin Function Descriptions  ........................................  12

Pin States at Reset ................................................  12

Pin Definitions  ...................................................  12

Strap Pin Function Descriptions  ................................  19

Specifications  ........................................................  20

Operating Conditions ...........................................  20

Electrical Characteristics  .......................................  20

Absolute Maximum Ratings ...................................  21

ESD Caution  ......................................................  21

Timing Specifications ...........................................  21

Output Drive Currents  .........................................  32

Test Conditions  ..................................................  34

Environmental Conditions  ....................................  36

Pin Configurations  .................................................  37

Outline Dimensions ................................................  43

Surface-Mount Design .............................................  44

Ordering Guide  .....................................................  45

## GENERAL DESCRIPTION

The ADSP-TS101S TigerSHARC® processor is an ultrahigh performance, Static Superscalar TM † processor optimized for large signal processing tasks and communications infrastructure. The DSP combines very wide memory widths with dual computation blocks-supporting 32- and 40-bit floating-point and 8-, 16-, 32-, and 64-bit fixed-point processing-to set a new standard of performance for digital signal processors. The TigerSHARC processor's Static Superscalar architecture lets the processor execute up to four instructions each cycle, performing 24 fixed-point (16-bit) operations or six floating-point operations.

Three independent 128-bit-wide internal data buses, each connecting to one of the three 2M bit memory banks, enable quad word data, instruction, and I/O accesses and provide 14.4G bytes per second of internal memory bandwidth. Operating at 300 MHz, the ADSP-TS101S processor's core has a 3.3 ns instruction cycle time. Using its single-instruction, multipledata (SIMD) features, the ADSP-TS101S can perform 2.4 billion 40-bit MACs or 600 million 80-bit MACs per second. Table 1 and Table 2 show the DSP's performance benchmarks.

## Table 1. General-Purpose Algorithm Benchmarks at 300 MHz

| Benchmark                                             | Speed                                                 | Clock Cycles                                          |
|-------------------------------------------------------|-------------------------------------------------------|-------------------------------------------------------|
| 32-bit algorithm, 600 million MACs/s peak performance | 32-bit algorithm, 600 million MACs/s peak performance | 32-bit algorithm, 600 million MACs/s peak performance |
| 1024 point complex FFT (Radix 2)                      | 32.78 µs                                              | 9,835                                                 |
| 50-tap FIR on 1024 input                              | 91.67 µs                                              | 27,500                                                |
| Single FIRMAC                                         | 1.83 ns                                               | 0.55                                                  |
| 16-bit algorithm, 2.4 billion MACs/s peak performance | 16-bit algorithm, 2.4 billion MACs/s peak performance | 16-bit algorithm, 2.4 billion MACs/s peak performance |
| 256 point complex FFT (Radix 2)                       | 3.67 µs                                               | 1,100                                                 |
| 50-tap FIR on 1024 input                              | 24.0 µs                                               | 7,200                                                 |
| Single FIRMAC                                         | 0.47 ns                                               | 0.14                                                  |
| Single complex FIRMAC                                 | 1.9 ns                                                | 0.57                                                  |
| I/O DMAtransfer rate                                  | I/O DMAtransfer rate                                  | I/O DMAtransfer rate                                  |
| External port                                         | 800M bytes/s                                          | n/a                                                   |
| Link ports (each)                                     | 250M bytes/s                                          | n/a                                                   |

## Table 2. 3G Wireless Algorithm Benchmarks

| Benchmark                                                      | Execution (MIPS) 1   |
|----------------------------------------------------------------|----------------------|
| Turbo decode 384 kbps data channel                             | 51 MIPS 2            |
| Viterbi decode 12.2 kbpsAMR 3 voice channel                    | 0.86 MIPS            |
| Complex correlation 3.84 Mcps 4 with a spreading factor of 256 | 0.27 MIPS            |

1 The execution speed is in instruction cycles per second.

† Static Superscalar is a trademark of Analog Devices, Inc.

2 This value is for six iterations of the algorithm. For eight iterations of the turbo decoder, this benchmark is 67 MIPS.

3 Adaptive multi rate (AMR)

4 Megachips per second (Mcps)

The ADSP-TS101S is code compatible with the other TigerSHARC processors.

The Functional Block Diagram on Page 1 shows the processor's architectural blocks. These blocks include:

- Dual compute blocks, each consisting of an ALU, multiplier, 64-bit shifter, and 32-word register file and associated data alignment buffers (DABs)
- Dual integer ALUs (IALUs), each with its own 31-word register file for data addressing
- A program sequencer with instruction alignment buffer (IAB), branch target buffer (BTB), and interrupt controller
- Three 128-bit internal data buses, each connecting to one of three 2M bit memory banks
- On-chip SRAM (6M bit)
- An external port that provides the interface to host processors, multiprocessing space (DSPs), off-chip memorymapped peripherals, and external SRAM and SDRAM
- A 14-channel DMA controller
- Four link ports
- Two 64-bit interval timers and timer expired pin
- A 1149.1 IEEE compliant JTAG test access port for on-chip emulation

Figure 2 shows a typical single-processor system with external SDRAM. Figure 4 shows a typical multiprocessor system.

The TigerSHARC processor uses a Static Superscalar architecture. This architecture is superscalar in that the ADSP-TS101S processor's core can execute simultaneously from one to four 32-bit instructions encoded in a very large instruction word (VLIW) instruction line using the DSP's dual compute blocks. Because the DSP does not perform instruction reordering at runtime-the programmer selects which operations will execute in parallel prior to runtime-the order of instructions is static.

With few exceptions, an instruction line, whether it contains one, two, three, or four 32-bit instructions, executes with a throughput of one cycle in an eight-deep processor pipeline.

For optimal DSP program execution, programmers must follow the DSP's set of instruction parallelism rules when encoding an instruction line. In general, the selection of instructions that the DSP can execute in parallel each cycle depends on the instruction line resources each instruction requires and on the source and destination registers used in the instructions. The programmer has direct control of three core components-the IALUs, the compute blocks, and the program sequencer.

The ADSP-TS101S, in most cases, has a two-cycle arithmetic execution pipeline that is fully interlocked, so whenever a computation result is unavailable for another operation dependent

## ADSP-TS101S

on it, the DSP automatically inserts one or more stall cycles as needed. Efficient programming with dependency-free instructions can eliminate most computational and memory transfer data dependencies.

Figure 2. Single-Processor System with External SDRAM

<!-- image -->

In addition, the ADSP-TS101S supports SIMD operations two ways-SIMD compute blocks and SIMD computations. The programmer can direct both compute blocks to operate on the same data (broadcast distribution) or on different data (merged distribution). In addition, each compute block can execute four 16-bit or eight 8-bit SIMD computations in parallel.

## DUAL COMPUTE BLOCKS

The ADSP-TS101S has compute blocks that can execute computations either independently or together as a SIMD engine. The DSP can issue up to two compute instructions per compute block each cycle, instructing the ALU, multiplier, or shifter to perform independent, simultaneous operations.

The compute blocks are referred to as X and Y in assembly syntax, and each block contains three computational units-an ALU, a multiplier, a 64-bit shifter, and a 32-word register file.

- Register file-each compute block has a multiported 32-word, fully orthogonal register file used for transferring data between the computation units and data buses and for

storing intermediate results. Instructions can access the registers in the register file individually (word aligned), or in sets of two (dual aligned) or four (quad aligned).

- ALU-the ALU performs a standard set of arithmetic operations in both fixed- and floating-point formats. It also performs logic operations.
- Multiplier-the multiplier performs both fixed- and floating-point multiplication and fixed-point multiply and accumulate.
- Shifter-the 64-bit shifter performs logical and arithmetic shifts, bit and bit stream manipulation, and field deposit and extraction operations.
- Accelerator-128-bit unit for trellis decoding (for example, Viterbi and turbo decoders) and complex correlations for communication applications.

Using these features, the compute blocks can:

- Provide 8 MACs per cycle peak and 7.1 MACs per cycle sustained 16-bit performance and provide 2 MACs per cycle peak and 1.8 MACs per cycle sustained 32-bit performance (based on FIR)
- Execute six single-precision, floating-point or execute 24 fixed-point (16-bit) operations per cycle, providing 1,800 MFLOPS or 7.3 GOPS performance
- Perform two complex 16-bit MACs per cycle
- Execute eight trellis butterflies in one cycle

## DATA ALIGNMENT BUFFER (DAB)

The DAB is a quad word FIFO that enables loading of quad word data from nonaligned addresses. Normally, load instructions must be aligned to their data size so that quad words are loaded from a quad-aligned address. Using the DAB significantly improves the efficiency of some applications, such as FIR filters.

## DUAL INTEGER ALUs (IALUs)

The ADSP-TS101S has two IALUs that provide powerful address generation capabilities and perform many general-purpose integer operations. Each of the IALUs:

- Provides memory addresses for data and update pointers
- Supports circular buffering and bit-reverse addressing
- Performs general-purpose integer operations, increasing programming flexibility
- Includes a 31-word register file for each IALU

As address generators, the IALUs perform immediate or indirect (pre- and post-modify) addressing. They perform modulus and bit-reverse operations with no constraints placed on memory addresses for the modulus data buffer placement. Each IALU can specify either a single, dual, or quad word access from memory.

The IALUs have hardware support for circular buffers, bit reverse, and zero-overhead looping. Circular buffers facilitate efficient programming of delay lines and other data structures required in digital signal processing, and they are commonly

used in digital filters and Fourier transforms. Each IALU provides registers for four circular buffers, so applications can set up a total of eight circular buffers. The IALUs handle address pointer wraparound automatically, reducing overhead, increasing performance, and simplifying implementation. Circular buffers can start and end at any memory location.

Because the IALU's computational pipeline is one cycle deep, in most cases, integer results are available in the next cycle. Hardware (register dependency check) causes a stall if a result is unavailable in a given cycle.

## PROGRAM SEQUENCER

The ADSP-TS101S processor's program sequencer supports:

- A fully interruptible programming model with flexible programming in assembly and C/C++ languages; handles hardware interrupts with high throughput and no aborted instruction cycles.
- An eight-cycle instruction pipeline-three-cycle fetch pipe and five-cycle execution pipe-with computation results available two cycles after operands are available.
- The supply of instruction fetch memory addresses; the sequencer's instruction alignment buffer (IAB) caches up to five fetched instruction lines waiting to execute; the program sequencer extracts an instruction line from the IAB and distributes it to the appropriate core component for execution.
- The management of program structures and determination of program flow according to JUMP, CALL, RTI, RTS instructions, loop structures, conditions, interrupts, and software exceptions.
- Branch prediction and a 128-entry branch target buffer (BTB) to reduce branch delays for efficient execution of conditional and unconditional branch instructions and zero-overhead looping; correctly predicted branches that are taken occur with zero-to-two overhead cycles, overcoming the three-to-six stage branch penalty.
- Compact code without the requirement to align code in memory; the IAB handles alignment.

## Interrupt Controller

The DSP supports nested and non-nested interrupts. Each interrupt type has a register in the interrupt vector table. Also, each has a bit in both the interrupt latch register and the interrupt mask register. All interrupts are fixed as either level sensitive or edge sensitive, except the IRQ3-0 hardware interrupts, which are programmable.

The DSP distinguishes between hardware interrupts and software exceptions, handling them differently. When a software exception occurs, the DSP aborts all other instructions in the instruction pipe. When a hardware interrupt occurs, the DSP continues to execute instructions already in the instruction pipe.

## Flexible Instruction Set

The 128-bit instruction line, which can contain up to four 32-bit instructions, accommodates a variety of parallel operations for concise programming. For example, one instruction line can direct the DSP to conditionally execute a multiply, an add, and a subtract in both computation blocks while it also branches to another location in the program. Some key features of the instruction set include:

- Enhanced instructions for communications infrastructure to govern trellis decoding (for example, Viterbi and turbo decoders) and despreading via complex correlations
- Algebraic assembly language syntax
- Direct support for all DSP, imaging, and video arithmetic types, eliminating hardware modes
- Branch prediction encoded in instruction, enables zerooverhead loops
- Parallelism encoded in instruction line
- Conditional execution optional for all instructions
- User-defined, programmable partitioning between program and data memory

## ON-CHIP SRAM MEMORY

The ADSP-TS101S has 6M bits of on-chip SRAM memory, divided into three blocks of 2M bits (64K words  32 bits). Each block-M0, M1, and M2-can store program, data, or both, so applications can configure memory to suit specific needs. Placing program instructions and data in different memory blocks, however, enables the DSP to access data while performing an instruction fetch.

The DSP's internal and external memory (Figure 3) is organized into a unified memory map, which defines the location (address) of all elements in the system. The memory map is divided into four memory areas-host space, external memory, multiprocessor space, and internal memory-and each memory space, except host memory, is subdivided into smaller memory spaces.

Each internal memory block connects to one of the 128-bitwide internal buses-block M0 to bus MD0, block M1 to bus MD1, and block M2 to bus MD2-enabling the DSP to perform three memory transfers in the same cycle. The DSP's internal bus architecture provides a total memory bandwidth of 14.4G bytes per second, enabling the core and I/O to access eight 32-bit data words (256 bits) and four 32-bit instructions each cycle. The DSP's flexible memory structure enables:

- DSP core and I/O access of different memory blocks in the same cycle
- DSP core access of all three memory blocks in parallelone instruction and two data accesses
- Programmable partitioning of program and data memory
- Program access of all memory as 32-, 64-, or 128-bit words-16-bit words with the DAB
- Complete context switch in less than 20 cycles (66 ns)

## ADSP-TS101S

Figure 3. Memory Map

<!-- image -->

## EXTERNAL PORT (OFF-CHIP MEMORY/PERIPHERALS INTERFACE)

The ADSP-TS101S processor's external port provides the processor's interface to off-chip memory and peripherals. The 4G word address space is included in the DSP's unified address space. The separate on-chip buses-three 128-bit data buses and three 32-bit address buses-are multiplexed at the external port to create an external system bus with a single 64-bit data bus and a single 32-bit address bus. The external port supports data transfer rates of 800M bytes per second over external bus.

The external bus can be configured for 32- or 64-bit operation. When the system bus is configured for 64-bit operation, the lower 32 bits of the external data bus connect to even addresses, and the upper 32 bits connect to odd addresses.

The external port supports pipelined, slow, and SDRAM protocols. Addressing of external memory devices and memorymapped peripherals is facilitated by on-chip decoding of highorder address lines to generate memory bank select signals.

The ADSP-TS101S provides programmable memory, pipeline depth, and idle cycle for synchronous accesses, and external acknowledge controls to support interfacing to pipelined or slow devices, host processors, and other memory-mapped peripherals with variable access, hold, and disable time requirements.

## Host Interface

The ADSP-TS101S provides an easy and configurable interface between its external bus and host processors through the external port. To accommodate a variety of host processors, the host interface supports pipelined or slow protocols for accesses of the host as slave. Each protocol has programmable transmission parameters, such as idle cycles, pipe depth, and internal wait cycles.

The host interface supports burst transactions initiated by a host processor. After the host issues the starting address of the burst and asserts the BRST signal, the DSP increments the address internally while the host continues to assert BRST.

The host interface provides a deadlock recovery mechanism that enables a host to recover from deadlock situations involving the DSP. The BOFF signal provides the deadlock recovery mechanism. When the host asserts BOFF, the DSP backs off the current transaction and asserts HBG and relinquishes the external bus.

The host can directly read or write the internal memory of the ADSP-TS101S, and it can access most of the DSP registers, including DMA control (TCB) registers. Vector interrupts support efficient execution of host commands.

## Multiprocessor Interface

The ADSP-TS101S offers powerful features tailored to multiprocessing DSP systems through the external port and link ports. This multiprocessing capability provides highest bandwidth for interprocessor communication, including:

- Up to eight DSPs on a common bus
- On-chip arbitration for glueless multiprocessing
- Link ports for point-to-point communication

The external port and link ports provide integrated, glueless multiprocessing support.

The external port supports a unified address space (see Figure 3) that enables direct interprocessor accesses of each ADSP-TS101S  processor's internal memory and registers. The DSP's on-chip distributed bus arbitration logic provides simple, glueless connection for systems containing up to eight ADSPTS101S processors and a host processor. Bus arbitration has a rotating priority. Bus lock supports indivisible read-modifywrite sequences for semaphores. A bus fairness feature prevents one DSP from holding the external bus too long.

The DSP's four link ports provide a second path for interprocessor communications with throughput of 1G bytes per second. The cluster bus provides 800M bytes per second throughputwith a total of 1.8G bytes per second interprocessor bandwidth.

## SDRAM Controller

The SDRAM controller controls the ADSP-TS101S processor's transfers of data to and from synchronous DRAM (SDRAM). The throughput is 32 or 64 bits per SCLK cycle using the external port and SDRAM control pins.

The SDRAM interface provides a glueless interface with standard SDRAMs-16M bit, 64M bit, 128M bit, and 256M bit. The DSP directly supports a maximum of 64M words  32 bits of SDRAM. The SDRAM interface is mapped in external memory in the DSP's unified memory map.

## EPROM Interface

The ADSP-TS101S can be configured to boot from external 8-bit EPROM at reset through the external port. An automatic process (which follows reset) loads a program from the EPROM into internal memory. This process uses 16 wait cycles for each read access. During booting, the BMS pin functions as the EPROM chip select signal. The EPROM boot procedure uses DMA Channel 0, which packs the bytes into 32-bit instructions. Applications can also access the EPROM (write flash memories) during normal operation through DMA.

The EPROM or flash memory interface is not mapped in the DSP's unified memory map. It is a byte address space limited to a maximum of 16M bytes (24 address bits). The EPROM or flash memory interface can be used after boot via a DMA.

## DMA CONTROLLER

The ADSP-TS101S processor's on-chip DMA controller, with 14 DMA channels, provides zero-overhead data transfers without processor intervention. The DMA controller operates independently and invisibly to the DSP's core, enabling DMA operations to occur while the DSP's core continues to execute program instructions. The DMA controller performs DMA transfers between:

- Internal memory and external memory and memorymapped peripherals
- Internal memory of other DSPs on a common bus, a host processor, or link port I/O
- External memory and external peripherals or link port I/O
- External bus master and internal memory or link port I/O

The DMA controller provides a number of additional features.

The DMA controller supports flyby transfers. Flyby operations only occur through the external port (DMA Channel 0) and do not involve the DSP's core. The DMA controller acts as a conduit to transfer data from one external device to another through external memory. During a transaction, the DSP:

- Relinquishes the external data bus
- Outputs addresses, memory selects (MS1-0, MSSD, RAS, CAS, and SDWE) and the FLYBY, IOEN, and RD/WR strobes
- Responds to ACK

DMA chaining is also supported by the DMA controller. DMA chaining operations enable applications to automatically link one DMA transfer sequence to another for continuous transmission. The sequences can occur over different DMA channels and have different transmission attributes.

## ADSP-TS101S

The DMA controller also supports two-dimensional transfers. The DMA controller can access and transfer two-dimensional memory arrays on any DMA transmit or receive channel. These transfers are implemented with index, count, and modify registers for both the X and Y dimensions.

Figure 4. Shared Memory Multiprocessing System

<!-- image -->

The DMA controller performs the following DMA operations:

- External port block transfers. Four dedicated bidirectional DMA channels transfer blocks of data between the DSP's internal memory and any external memory or memorymapped peripheral on the external bus. These transfers support master mode and handshake mode protocols.
- Link port transfers. Eight dedicated DMA channels (four transmit and four receive) transfer quad word data only between link ports and between a link port and internal or
- external memory. These transfers only use handshake mode protocol. DMA priority rotates between the four receive channels.
- AutoDMA transfers. Two dedicated unidirectional DMA channels transfer data received from an external bus master to internal memory or to link port I/O. These transfers only use slave mode protocol, and an external bus master must initiate the transfer.

## LINK PORTS

The DSP's four link ports provide additional 8-bit bidirectional I/O capability. With the ability to operate at a double data ratelatching data on both the rising and falling edges of the clockrunning at 125 MHz, each link port can support up to 250M bytes per second, for a combined maximum throughput of 1G bytes per second.

The link ports provide an optional communications channel that is useful in multiprocessor systems for implementing pointto-point interprocessor communications. Applications can also use the link ports for booting.

Each link port has its own double-buffered input and output registers. The DSP's core can write directly to a link port's transmit register and read from a receive register, or the DMA controller can perform DMA transfers through eight (four transmit and four receive) dedicated link port DMA channels.

Each link port has three signals that control its operation. LxCLKOUT and LxCLKIN implement clock/acknowledge handshaking. LxDIR indicates the direction of transfer and is used only when buffering the LxDAT signals. An example application would be using differential low-swing buffers for long twisted-pair wires. LxDAT provides the 8-bit data bus input/output.

Applications can program separate error detection mechanisms for transmit and receive operations (applications can use the checksum mechanism to implement consecutive link port transfers), the size of data packets, and the speed at which bytes are transmitted.

Under certain conditions, the link port receiver can initiate a token switch to reverse the direction of transfer; the transmitter becomes the receiver and vice versa.

## TIMER AND GENERAL-PURPOSE I/O

The ADSP-TS101S has a timer pin (TMR0E) that generates output when a programmed timer counter has expired. Also, the DSP has four programmable general-purpose I/O pins (FLAG3-0) that can function as either single-bit input or output. As outputs, these pins can signal peripheral devices; as inputs, they can provide the test for conditional branching.

## RESET AND BOOTING

The ADSP-TS101S has two levels of reset (see reset specifications Page 24):

- Power-up reset-after power-up of the system, and strap options are stable, the RESET pin must be asserted (low).
- Normal reset-for any resets following the power-up reset sequence, the RESET pin must be asserted.

The DSP can be reset internally (core reset) by setting the SWRST bit in SQCTL. The core is reset, but not the external port or I/O.

## ADSP-TS101S

After reset, the ADSP-TS101S has four boot options for beginning operation:

- Boot from EPROM. The DSP defaults to EPROM booting when the BMS pin strap option is set low. See Strap Pin Function Descriptions.
- Boot by an external master (host or another ADSPTS101S). Any master on the cluster bus can boot the ADSP-TS101S through writes to its internal memory or through autoDMA.
- Boot by link port. All four receive link DMA channels are initialized after reset to transfer a 256-word block to internal memory address 0 to 255, and to issue an interrupt at the end of the block (similar to EP DMA). The corresponding DMA interrupts are set to address zero (0).
- No boot-Start running from an external memory. Using the 'no boot' option, the ADSP-TS101S must start running from an external memory, caused by asserting one of the IRQ3-0 interrupt signals.

The ADSP-TS101S core always exits from reset in the idle state and waits for an interrupt. Some of the interrupts in the interrupt vector table are initialized and enabled after reset.

## LOW POWER OPERATION

The ADSP-TS101S can enter a low power sleep mode in which its core does not execute instructions, reducing power consumption to a minimum. The ADSP-TS101S exits sleep mode when it senses a falling edge on any of its IRQ3-0 interrupt inputs. The interrupt, if enabled, causes the ADSP-TS101S to execute the corresponding interrupt service routine. This feature is useful for systems that require a low power standby mode.

## CLOCK DOMAINS

As shown in Figure 5, the ADSP-TS101S has two clock inputs, SCLK (system clock) and LCLK (local clock).

Figure 5. Clock Domains

<!-- image -->

These inputs drive its two major clock domains:

- SCLK (system clock). Provides clock input for the external bus interface and defines the ac specification reference for the external bus signals. The external bus interface runs at 1  the SCLK frequency. A DLL locks internal SCLK to SCLK input.
- LCLK (local clock). Provides clock input to the internal clock driver, CCLK, which is the internal clock for the core, internal buses, memory, and link ports. The instruction execution rate is equal to CCLK. A PLL from LCLK

## ADSP-TS101S

generates CCLK, which is phase-locked. The LCLKRAT pins define the clock multiplication of LCLK to CCLK (see Table 4). The link port clock is generated from CCLK via a software programmable divisor. RESET must be asserted until LCLK is stable and within specification for at least 2 ms. This applies to power-up as well as any dynamic modification of LCLK after power-up. Dynamic modification may include LCLK going out of specification as long as RESET is asserted.

Connecting SCLK and LCLK to the same clock source is a requirement for the device. Using an integer clock multiplication value provides predictable cycle-by-cycle operation, a requirement of fault-tolerant systems and some multiprocessing systems.

Noninteger values are completely functional and acceptable for applications that do not require predictable cycle-by-cycle operation.

## OUTPUT PIN DRIVE STRENGTH CONTROL

Pins CONTROLIMP2-0 and DS2-0 work together to control the output drive strength of two groups of pins, the Address/Data/Control pin group and the Link pin group. CONTROLIMP2-0 independently configures the two pin groups to the maximum drive strength or to a digitally controlled drive strength that is selectable by the DS2-0 pins (see Table 13). If the digitally controlled drive strength is selected for a pin group, the DS2-0 pins determine one of eight strength levels for that group (see Table 14). The drive strength selected varies the slew rate of the driver. Drive strength 0 (DS2-0 = 000) is the weakest and slowest slew rate. Drive strength 7 (DS2-0 = 111) is the strongest and fastest slew rate.

The stronger drive strengths are useful for high frequency switching while the lower strengths may allow use of a relaxed design methodology. The strongest drive strengths have a larger di/dt and thus require more attention to signal integrity issues such a ringing, reflections and coupling. Also, a larger di/dt can increase external supply rail noise, which impacts power supply and power distribution design.

The drive strengths for the EMU, CPA, and DPA pins are not controllable and are fixed to the maximum level.

For drive strength calculation, see Output Drive Currents.

## POWER SUPPLIES

The ADSP-TS101S has separate power supply connections for internal logic (V DD), analog circuits (V DD\_A), and I/O buffer (VDD\_IO) power supply. The internal (VDD) and analog (VDD\_A) supplies must meet the 1.2 V requirement. The I/O buffer (VDD\_IO) supply must meet the 3.3 V requirement.

The analog supply (VDD\_A) powers the clock generator PLLs. To produce a stable clock, systems must provide a clean power supply to power input VDD\_A. Designs must pay critical attention to bypassing the VDD\_A supply.

The required power-on sequence for the DSP is to provide VDD (and VDD\_A) before VDD\_IO.

## FILTERING REFERENCE VOLTAGE AND CLOCKS

Figure 6 shows a possible circuit for filtering VREF, SCLK\_N, and LCLK\_N. This circuit provides the reference voltage for the switching voltage, system clock, and local clock references.

<!-- image -->

R1: 2k V SERIES RESISTOR

R2: 1.67k V SERIES RESISTOR

C1: 1 m F CAPACITOR (SMD)

C2: 1nF CAPACITOR (HF SMD) PLACED CLOSE TO DSP'S PINS

Figure 6. VREF, SCLK\_N, and LCLK\_N Filter

## DEVELOPMENT TOOLS

The ADSP-TS101S is supported with a complete set of CROSSCORE ® † software and hardware development tools, including Analog Devices emulators and VisualDSP++ ® ‡ development environment. The same emulator hardware that supports other TigerSHARC processors also fully emulates the ADSP-TS101S.

The VisualDSP++ project management environment lets programmers develop and debug an application. This environment includes an easy to use assembler (which is based on an algebraic syntax), an archiver (librarian/library builder), a linker, a loader, a cycle-accurate instruction-level simulator, a C/C++ compiler, and a C/C++ run-time library that includes DSP and mathematical functions. A key point for these tools is C/C++ code efficiency. The compiler has been developed for efficient translation of C/C++ code to DSP assembly. The DSP has architectural features that improve the efficiency of compiled C/C++ code.

The VisualDSP++ debugger has a number of important features. Data visualization is enhanced by a plotting package that offers a significant level of flexibility. This graphical representation of user data enables the programmer to quickly determine the performance of an algorithm. As algorithms grow in complexity, this capability can have increasing significance on the designer's development schedule, increasing productivity. Statistical profiling enables the programmer to nonintrusively poll the processor as it is running the program. This feature, unique to VisualDSP++, enables the software developer to passively gather important code execution metrics without interrupting the real-time characteristics of the program. Essentially, the developer can identify bottlenecks in software quickly and efficiently. By using the profiler, the programmer can focus on those areas in the program that impact performance and take corrective action.

† CROSSCORE is a registered trademark of Analog Devices, Inc.

‡ VisualDSP++ is a registered trademark of Analog Devices, Inc.

Debugging both C/C++ and assembly programs with the VisualDSP++ debugger, programmers can:

- View mixed C/C++ and assembly code (interleaved source and object information)
- Insert breakpoints
- Set conditional breakpoints on registers, memory, and stacks
- Trace instruction execution
- Perform linear or statistical profiling of program execution
- Fill, dump, and graphically plot the contents of memory
- Perform source level debugging
- Create custom debugger windows

The VisualDSP++ integrated development and debugging environment (IDDE) lets programmers define and manage DSP software development. Its dialog boxes and property pages let programmers configure and manage all of the TigerSHARC development tools, including the color syntax highlighting in the VisualDSP++ editor. This capability permits programmers to:

- Control how the development tools process inputs and generate outputs
- Maintain a one-to-one correspondence with the tool's command-line switches

The VisualDSP++ Kernel (VDK) incorporates scheduling and resource management tailored specifically to address the memory and timing constraints of DSP programming. These capabilities enable engineers to develop code more effectively, eliminating the need to start from the very beginning, when developing new application code. The VDK features include threads, critical and unscheduled regions, semaphores, events, and device flags. The VDK also supports priority-based, preemptive, cooperative, and time-sliced scheduling approaches. In addition, the VDK was designed to be scalable. If the application does not use a specific feature, the support code for that feature is excluded from the target system.

Because the VDK is a library, a developer can decide whether to use it or not. The VDK is integrated into the VisualDSP++ development environment, but can also be used via standard command-line tools. When the VDK is used, the development environment assists the developer with many error-prone tasks and assists in managing system resources, automating the generation of various VDK-based objects, and visualizing the system state, when debugging an application that uses the VDK.

Use the Expert Linker to visually manipulate the placement of code and data on the embedded system. View memory utilization in a color-coded graphical form, easily move code and data to different areas of the DSP or external memory with a drag of the mouse, examine run-time stack and heap usage. The Expert Linker is fully compatible with existing linker definition file (LDF), allowing the developer to move between the graphical and textual environments.

## ADSP-TS101S

Analog Devices DSP emulators use the IEEE 1149.1 JTAG Test Access Port of the ADSP-TS101S processor to monitor and control the target board processor during emulation. The emulator provides full speed emulation, allowing inspection and modification of memory, registers, and processor stacks. Nonintrusive in-circuit emulation is assured by the use of the processor's JTAG interface-the emulator does not affect target system loading or timing.

In addition to the software and hardware development tools available from Analog Devices, third parties provide a wide range of tools supporting the TigerSHARC processor family. Hardware tools include TigerSHARC processor PC plug-in cards. Third-party software tools include DSP libraries, realtime operating systems, and block diagram design tools.

## DESIGNING AN EMULATOR-COMPATIBLE DSP BOARD (TARGET)

The Analog Devices family of emulators are tools that every DSP developer needs to test and debug hardware and software systems. Analog Devices has supplied an IEEE 1149.1 JTAG test access port (TAP) on each JTAG DSP. The emulator uses the TAP to access the internal features of the DSP, allowing the developer to load code, set breakpoints, observe variables, observe memory, and examine registers. The DSP must be halted to send data and commands, but once an operation has been completed by the emulator, the DSP system is set running at full speed with no impact on system timing.

To use these emulators, the target board must include a header that connects the DSP's JTAG port to the emulator.

For details on target board design issues including mechanical layout, single processor connections, multiprocessor scan chains, signal buffering, signal termination, and emulator pod logic, see EE-68: Analog Devices JTAG Emulation Technical Reference on the Analog Devices website (www.analog.com)-use site search on 'EE-68.' This document is updated regularly to keep pace with improvements to emulator support.

## ADDITIONAL INFORMATION

This data sheet provides a general overview of the ADSP-TS101S processor's architecture and functionality. For detailed information on the ADSP-TS101S processor's core architecture and instruction set, see the ADSP-TS101 TigerSHARC Processor Programming Reference and the ADSP-TS101 TigerSHARC Processor Hardware Reference . For detailed information on the development tools for this processor, see the VisualDSP++ User's Guide .

## ADSP-TS101S

## PIN FUNCTION DESCRIPTIONS

While most of the ADSP-TS101S processor's input pins are normally synchronous-tied to a specific clock-a few are asynchronous. For these asynchronous signals, an on-chip synchronization circuit prevents metastability problems. The synchronous ac specification for asynchronous signals is used only when predictable cycle-by-cycle behavior is required.

All inputs are sampled by a clock reference, therefore input specifications (asynchronous minimum pulse widths or synchronous input setup and hold) must be met to guarantee recognition.

Table 3. Pin Definitions-Clocks and Reset

| Signal       | Type      | Term   | Description                                                                                                                                                                                         |
|--------------|-----------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| LCLK_N       | I         | au     | Local Clock Reference. Connect this pin to V REF as shown in Figure 6.                                                                                                                              |
| LCLK_P       | I         | au     | Local Clock Input. DSP clock input. The instruction cycle rate = n  LCLK, where n is user- programmable to 2, 2.5, 3, 3.5, 4, 5, or 6. For more information, see Clock Domains.                    |
| LCLKRAT2-0 1 | I (pd 2 ) | au     | LCLK Ratio. The DSP's core clock (instruction cycle rate) = n  LCLK, where n is user-program- mableto2,2.5,3,3.5,4,5,or6asshowninTable 4.Thesepinsmusthaveaconstantvaluewhile the DSP is powered.  |
| SCLK_N       | I         | au     | System Clock Reference. Connect this pin to V REF as shown in Figure 6.                                                                                                                             |
| SCLK_P       | I         | au     | System Clock Input. The DSP's system input clock for cluster bus. This pin must be connected to the same clock source as LCLK_P. For more information, see Clock Domains.                           |
| SCLKFREQ 3   | I (pu 2 ) | au     | SCLKFrequency.SCLKFREQ=1isrequired.TheSCLKFREQpinmusthaveaconstantvaluewhile the DSP is powered.                                                                                                    |
| RESET        | I/A       | au     | Reset. Sets the DSP to a known state and causes program to be in idle state. RESET must be asserted at specified time according to the type of reset operation. For details, see Reset and Booting. |

Type column symbols: A = asynchronous; G = ground; I = input; O = output; o/d = open drain output; P = power supply; pd = internal pull-down approximately 100 k  ; pu = internal pull-up approximately 100 k  ; T = three-state

Term (for termination) column symbols: epd = external pull-down approximately 10 k  to VSS; epu = external pull-up approximately 10 k  to VDD-IO, nc = not connected; au = always used.

1 The internal pull-down may not be sufficient. A stronger pull-down may be necessary.

2 See Electrical Characteristics for maximum and minimum current consumption for pull-up and pull-down resistances.

3 The internal pull-up may not be sufficient. A stronger pull-up may be necessary.

Table 4. LCLK Ratio

|   LCLKRAT2-0 | LCLKRAT2-0   | Ratio    |
|--------------|--------------|----------|
|          000 | (default)    | 2        |
|          001 |              | 2.5      |
|          010 |              | 3        |
|          011 |              | 3.5      |
|          100 |              | 4        |
|          101 |              | 5        |
|          110 |              | 6        |
|          111 |              | Reserved |

## PIN STATES AT RESET

The output pins can be three-stated during normal operation. The DSP three-states all outputs during reset, allowing these pins to get to their internal pull-up or pull-down state. Some output pins (control signals) have a pull-up or pull-down that maintains a known value during transitions between different drivers.

## PIN DEFINITIONS

The Type column in the following pin definitions tables describes the pin type, when the pin is used in the system. The Term (for termination) column describes the pin termination type if the pin is not used by the system. Note that some pins are always used (indicated with au symbol).

Table 5. Pin Definitions-External Port Bus Controls

| Signal     | Type           | Term   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|------------|----------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ADDR31-0   | I/O/T          | nc     | Address Bus. The DSPissues addresses for accessing memoryandperipherals onthese pins. In a multiprocessor system, the bus master drives addresses for accessinginternalmemoryorI/O processorregistersofotherADSP-TS101Sprocessors.TheDSPinputsaddresseswhenahostor another DSP accesses its internal memory or I/O processor registers.                                                                                                                                                                                                           |
| DATA63-0 1 | I/O/T          | nc     | External Data Bus. Data and instructions are received, and driven by the DSP, on these pins.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| RD 2       | I/O/T (pu 3 )  | nc     | Memory Read. RDis asserted whenever the DSP reads from any slave in the system, excluding SDRAM. When the DSP is a slave, RDis an input and indicates read transactions that access its internal memory or universal registers. In a multiprocessor system, the bus master drives RD.                                                                                                                                                                                                                                                             |
| WRL 2      | I/O/T (pu 3 )  | nc     | WriteLow.WRLisassertedintwocases:WhentheADSP-TS101Swritestoanevenaddressword of external memory or to another external bus agent; and when the ADSP-TS101S writes to a 32-bitzone(host,memory,orDSPprogrammedto32-bitbus).Anexternalmaster(hostorDSP) assertsWRLforwriting to a DSP's lowwordofinternal memory.Inamultiprocessorsystem,the bus master drives WRL. The WRLpin changes concurrently with ADDRpins. Whenthe DSP is a slave, WRL is an input and indicates write transactions that access its internal memory or universal registers. |
| WRH 2      | I/O/T (pu 3 )  | nc     | Write High. WRHisasserted whentheADSP-TS101Swrites a long word (64 bits) or writes to an odd address word of external memory or to another external bus agent on a 64-bit data bus. An external master (host or another DSP) must assert WRHfor writing to a DSP's high word of 64-bitdatabus.Inamultiprocessingsystem,thebusmasterdrivesWRH.TheWRHpinchanges concurrently with ADDR pins. When the DSP is a slave, WRHis an input and indicates write transactions that access its internal memory or universal registers.                       |
| ACK        | I/O/T          | epu    | Acknowledge. External slave devices can deassert ACK to add wait states to external memory accesses. ACK is used by I/O devices, memory controllers, and other peripherals on the data phase.TheDSPcandeassertACKtoaddwaitstatestoreadaccessesofitsinternalmemory.The ADSP-TS101S does not drive ACK during slave writes. Therefore, an external (approximately 10 k  ) pull-up is required.                                                                                                                                                     |
| BMS 2, 4   | O/T (pu/pd 3 ) | au     | Boot MemorySelect. BMSis the chip select for boot EPROMorflash memory. During reset, the DSP uses BMSas a strap pin (EBOOT) for EPROM boot mode. When the DSP is configured to boot from EPROM, BMS is active during the boot sequence. Pull-down enabled during RESET (asserted); pull-up enabled after RESET (deasserted). In a multiprocessor system, the DSP bus master drives BMS. For details see Reset and Booting and the EBOOT signal description in Table 16.                                                                           |
| MS1-0 2    | O/T (pu 3 )    | nc     | Memory Select. MS0 or MS1 is asserted whenever the DSP accesses memory banks 0 or 1, respectively. MS1-0 are decoded memory address pins that change concurrently with ADDR pins. When ADDR31:26 = 0b000010, MS0 is asserted. When ADDR31:26 = 0b000011, MS1 is asserted. In multiprocessor systems, the master DSP drives MS1-0.                                                                                                                                                                                                                 |

Type column symbols: A = asynchronous; G = ground; I = input; O = output; o/d = open drain output; P = power supply; pd = internal pull-down approximately 100 k  ; pu = internal pull-up approximately 100 k  ; T = three-state

Term (for termination) column symbols: epd = external pull-down approximately 10 k  to VSS; epu = external pull-up approximately 10 k  to VDD-IO, nc = not connected; au = always used.

## ADSP-TS101S

## ADSP-TS101S

Table 5. Pin Definitions-External Port Bus Controls (Continued)

| Signal   | Type          | Term   | Description                                                                                                                                                                                                                                                                                                                                                 |
|----------|---------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MSH 2    | O/T (pu 3 )   | nc     | Memory Select Host. MSHis asserted whenever the DSP accesses the host address space (ADDR31:28  0b0000).MSHisadecodedmemoryaddresspinthatchangesconcurrentlywith ADDR pins. In a multiprocessor system, the bus master DSP drives MSH.                                                                                                                     |
| BRST 2   | I/O/T (pu 3 ) | nc     | Burst.Thecurrentbusmaster(DSPorhost)assertsthispintoindicatethatitisreadingorwriting data associated with consecutive addresses. Aslave device can ignore addresses after the first one and increment an internal address counter after each transfer. For host-to-DSP burst accesses, the DSP increments the address automatically while BRST is asserted. |

Type column symbols: A = asynchronous; G = ground; I = input; O = output; o/d = open drain output; P = power supply; pd = internal pull-down approximately 100 k  ; pu = internal pull-up approximately 100 k  ; T = three-state

Term (for termination) column symbols: epd = external pull-down approximately 10 k  to VSS; epu = external pull-up approximately 10 k  to VDD-IO, nc = not connected; au = always used.

1 The address and data buses may float for several cycles during bus mastership transitions between a TigerSHARC processor and a host. Floating in this case means that these inputs are not driven by any source and that dc-biased terminations are not present. It is not necessary to add pull-ups as there are no reliability issues and the worst-case power consumption for these floating inputs is negligible. Unconnected address pins may require pull-ups or pull-downs to avoid erroneous slave accesses, depending on the system. Unconnected data pins may be left floating.

2 The internal pull-up may not be sufficient. A stronger pull-up may be necessary.

3 See Electrical Characteristics for maximum and minimum current consumption for pull-up and pull-down resistances.

4 The internal pull-down may not be sufficient. A stronger pull-down may be necessary.

Table 6. Pin Definitions-External Port Arbitration

| Signal    | Type        | Term   | Description                                                                                                                                                                                                                                                                                                                                                                                                 |
|-----------|-------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| BR7-0     | I/O         | epu    | Multiprocessing Bus Request Pins.Used by the DSPsin a multiprocessor system to arbitrate for busmastership.EachDSPdrivesitsownBRxline(correspondingtothevalueofitsID2-0inputs) and monitors all others. In systems with fewer than eight DSPs, set the unused BRx pins high.                                                                                                                                |
| ID2-0 1   | I (pd 2 )   | au     | Multiprocessor ID. Indicates the DSP's ID. From the ID, the DSP determines its order in a multi- processor system. These pins also indicate to the DSP which bus request (BR0-BR7) to assert when requesting the bus: 000 = BR0, 001 = BR1, 010 = BR2, 011 = BR3, 100 = BR4, 101 = BR5, 110 = BR6, or 111 = BR7. ID2-0 must have a constant value during system operation and can change during reset only. |
| BM 1      | O(pd 2 )    | au     | Bus Master. The current bus master DSP asserts BM. For debugging only. At reset this is a strap pin. For more information, see Table 16.                                                                                                                                                                                                                                                                    |
| BOFF      | I           | epu    | Back Off. Adeadlock situation can occur whenthehostandaDSPtrytoreadfromeachother's bus at the same time. When deadlock occurs, the host can assert BOFF to force the DSP to relinquish the bus before completing its outstanding transaction, but only if the outstanding transaction is to host memory space (MSH).                                                                                        |
| BUSLOCK 3 | O/T (pu 2 ) | nc     | Bus Lock Indication. Provides an indication that the current bus master has locked the bus.                                                                                                                                                                                                                                                                                                                 |
| HBR       | I           | epu    | Host Bus Request. A host must assert HBR to request control of the DSP's external bus. When HBR is asserted in a multiprocessing system, the bus master relinquishes the bus and asserts HBG once the outstanding transaction is finished.                                                                                                                                                                  |

Type column symbols: A = asynchronous; G = ground; I = input; O = output; o/d = open drain output; P = power supply; pd = internal pull-down approximately 100 k  ; pu = internal pull-up approximately 100 k  ; T = three-state

Term (for termination) column symbols: epd = external pull-down approximately 10 k  to VSS; epu = external pull-up approximately 10 k  to VDD-IO, nc = not connected; au = always used.

Table 6. Pin Definitions-External Port Arbitration (Continued)

## ADSP-TS101S

| Signal   | Type          | Term            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|----------|---------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| HBG 3    | I/O/T (pu 2 ) | nc              | Host Bus Grant. Acknowledges HBRandindicates that the host can take control of the external bus. Whenrelinquishing the bus, the master DSPthree-states theADDR31-0,DATA63-0,MSH, MSSD, MS1-0, RD, WRL, WRH, BMS, BRST, FLYBY, IOEN, RAS, CAS, SDWE, SDA10, SDCKE,LDQM and HDQMpins, and the DSP puts the SDRAMin self-refresh mode. The DSP asserts HBGuntil the hostdeassertsHBR.Inmultiprocessorsystems,thecurrentbusmasterDSPdrivesHBG,and all slave DSPs monitor HBG.                                                                                                |
| CPA      | I/O (o/d)     | See next column | Core Priority Access. Asserted while the DSP's core accesses external memory.This pin enables a slave DSP to interrupt a master DSP's background DMAtransfers and gain control of the external bus for core-initiated transactions. CPAis anopendrain output, connected to allDSPs in the system. The CPA pin has an internal 500  pull-up resistor, which is only enabled on the DSPwithID2-0 = 0. If ID0 is not used, terminate this pin as either epuornc.If ID7-1 is not used, terminate this pin as epu.                                                           |
| DPA      | I/O (o/d)     | See next column | DMAPriority Access. Asserted while a high-priority DSP DMAchannel accesses external memory. This pin enables a high-priority DMAchannel on a slave DSP to interrupt transfers of a normal-priority DMAchannel on a master DSP and gain control of the external bus for DMA- initiated transactions. DPA is an open drain output, connected to all DSPs in the system. The DPApinhasaninternal500  pull-upresistor,whichisonlyenabledontheDSPwithID2-0 = 0. If ID0 is not used, terminate this pin as either epu or nc. If ID7-1 is not used, terminate this pin as epu. |

Type column symbols:

pd = internal pull-down approximately 100 k ; pu = internal pull-up approximately 100 k ; T = three-state

A = asynchronous; G = ground; I = input; O = output; o/d = open drain output; P = power supply;  

Term (for termination) column symbols: epd = external pull-down approximately 10 k  to VSS; epu = external pull-up approximately 10 k  to VDD-IO, nc = not connected; au = always used.

1 The internal pull-down may not be sufficient. A stronger pull-down may be necessary.

2 See Electrical Characteristics for maximum and minimum current consumption for pull-up and pull-down resistances.

3 The internal pull-up may not be sufficient. A stronger pull-up may be necessary.

Table 7. Pin Definitions-External Port DMA/Flyby

| Signal   | Type        | Term   | Description                                                                                                                                                                                                                                                                                                                  |
|----------|-------------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DMAR3-0  | I/A         | epu    | DMARequest Pins. Enable external I/O devices to request DMAservices from the DSP. In response to DMARx, the DSP performs DMAtransfers according to the DMAchannel's initial- ization. The DSP ignores DMArequests from uninitialized channels.                                                                               |
| FLYBY 1  | O/T (pu 2 ) | nc     | FlybyMode.WhenaDSPDMAchannelisinitiatedinFLYBYmode,itgeneratesflybytransactions onthe external bus. During flyby transactions, the DSPasserts FLYBY, which signals the source or destination I/O device to latch the next data or strobe the current data, respectively, and to prepare for the next data on the next cycle. |
| IOEN 1   | O/T (pu 2 ) | nc     | I/O Device Output Enable. Enables the output buffers of an external I/O device for flyby trans- actions between the device and external memory. Active on flyby transactions.                                                                                                                                                |

Type column symbols: A = asynchronous; G = ground; I = input; O = output; o/d = open drain output; P = power supply; pd = internal pull-down approximately 100 k  ; pu = internal pull-up approximately 100 k  ; T = three-state

Term (for termination) column symbols: epd = external pull-down approximately 10 k  to VSS; epu = external pull-up approximately 10 k  to VDD-IO, nc = not connected; au = always used.

1 The internal pull-up may not be sufficient. A stronger pull-up may be necessary.

2 See Electrical Characteristics for maximum and minimum current consumption for pull-up and pull-down resistances.

## ADSP-TS101S

Table 8. Pin Definitions-External Port SDRAM Controller

| Signal     | Type             | Term   | Description                                                                                                                                                                                                                                                                                                                                                                                                                   |
|------------|------------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| MSSD 1     | I/O/T (pu 2 )    | nc     | Memory Select SDRAM. MSSD is asserted whenever the DSP accesses SDRAMmemory space. MSSD is a decoded memory address pin that is asserted whenever the DSP issues an SDRAM commandcycle(access toADDR31:26=0b000001).MSSDinamultiprocessorsystemisdriven by the master DSP.                                                                                                                                                    |
| RAS 1      | I/O/T (pu 2 )    | nc     | Row Address Select. When sampled low, RAS indicates that a row address is valid in a read or write of SDRAM. In other SDRAM accesses, RAS defines the type of operation to execute according to SDRAM specification.                                                                                                                                                                                                          |
| CAS 1      | I/O/T (pu 2 )    | nc     | Column Address Select. When sampled low, CAS indicates that a column address is valid in a readorwriteofSDRAM.InotherSDRAMaccesses,CASdefinesthetypeofoperationtoexecute according to the SDRAM specification.                                                                                                                                                                                                                |
| LDQM 1     | O/T (pu 2 )      | nc     | Low Word SDRAM Data Mask. When LDQMis sampled high, the DSP three-states theSDRAM DQbuffers. LDQMisvalid onSDRAMtransactions whenCASisasserted and is inactiveonread transactions. Onwrite transactions, LDQMis activewhen accessing an odd address word on a 64-bit memory bus to disable the write of the low word.                                                                                                         |
| HDQM 1     | O/T (pu 2 )      | nc     | High Word SDRAMDataMask. WhenHDQMissampledhigh, the DSP three-statestheSDRAM DQbuffers.HDQMisvalidonSDRAMtransactionswhenCASisassertedandisinactiveonread transactions. On write transactions, HDQMis active when accessing an even address in word accessesorisactivewhenmemoryisconfiguredfora32-bitbustodisablethewriteofthehigh word.                                                                                     |
| SDA10 1    | O/T (pu 2 )      | nc     | SDRAMAddressbit10pin.SeparateA10signalsenableSDRAMrefreshoperationwhiletheDSP executes non-SDRAM transactions.                                                                                                                                                                                                                                                                                                                |
| SDCKE 1, 3 | I/O/T (pu/pd 2 ) | nc     | SDRAMClock Enable. Activates the SDRAMclock for SDRAMself-refresh or suspend modes. A slave DSPinamultiprocessor system does not have the pull-up or pull-down.AmasterDSP(or ID = 0 in a single processor system) has a 100 k  pull-up before granting the bus to the host, except when the SDRAM is put in self-refresh mode. In self-refresh mode, the master has a 100 k  pull-down before granting the bus to the host. |
| SDWE 1     | I/O/T (pu 2 )    | nc     | SDRAMWrite Enable. Whensampled low while CAS is active, SDWEindicates an SDRAMwrite access.WhensampledhighwhileCASisactive,SDWEindicatesanSDRAMreadaccess.Inother SDRAMaccesses, SDWE defines the type of operation to execute according to SDRAM specification.                                                                                                                                                              |

Type column symbols: A = asynchronous; G = ground; I = input; O = output; o/d = open drain output; P = power supply; pd = internal pull-down approximately 100 k  ; pu = internal pull-up approximately 100 k  ; T = three-state

Term (for termination) column symbols: epd = external pull-down approximately 10 k  to VSS; epu = external pull-up approximately 10 k  to VDD-IO, nc = not connected; au = always used.

1 The internal pull-up may not be sufficient. A stronger pull-up may be necessary.

2 See Electrical Characteristics for maximum and minimum current consumption for pull-up and pull-down resistances.

3 The internal pull-down may not be sufficient. A stronger pull-down may be necessary.

Table 9. Pin Definitions-JTAG Port

| Signal                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                           | Term                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                    |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| EMU                                                                                                                                                                                                                            | O(o/d)                                                                                                                                                                                                                         | nc 1                                                                                                                                                                                                                           | Emulation. Connected only to the DSP's JTAG emulator target board connector.                                                                                                                                                   |
| TCK                                                                                                                                                                                                                            | I                                                                                                                                                                                                                              | epd or epu 1                                                                                                                                                                                                                   | Test Clock (JTAG). Provides an asynchronous clock for JTAG scan.                                                                                                                                                               |
| TDI 2                                                                                                                                                                                                                          | I (pu 3 )                                                                                                                                                                                                                      | nc 1                                                                                                                                                                                                                           | Test Data Input (JTAG). A serial data input of the scan path.                                                                                                                                                                  |
| Type column symbols: A = asynchronous; G=ground; I = input; O=output; o/d = open drain output; P = power supply; pd = internal pull-down approximately 100 k  ; pu = internal pull-up approximately 100 k  ; T = three-state | Type column symbols: A = asynchronous; G=ground; I = input; O=output; o/d = open drain output; P = power supply; pd = internal pull-down approximately 100 k  ; pu = internal pull-up approximately 100 k  ; T = three-state | Type column symbols: A = asynchronous; G=ground; I = input; O=output; o/d = open drain output; P = power supply; pd = internal pull-down approximately 100 k  ; pu = internal pull-up approximately 100 k  ; T = three-state | Type column symbols: A = asynchronous; G=ground; I = input; O=output; o/d = open drain output; P = power supply; pd = internal pull-down approximately 100 k  ; pu = internal pull-up approximately 100 k  ; T = three-state |
| Term(fortermination)columnsymbols: epd=externalpull-downapproximately10 k  toV SS ;epu=externalpull-upapproximately10 k  to V DD-IO , nc = not connected; au = always used.                                                  | Term(fortermination)columnsymbols: epd=externalpull-downapproximately10 k  toV SS ;epu=externalpull-upapproximately10 k  to V DD-IO , nc = not connected; au = always used.                                                  | Term(fortermination)columnsymbols: epd=externalpull-downapproximately10 k  toV SS ;epu=externalpull-upapproximately10 k  to V DD-IO , nc = not connected; au = always used.                                                  | Term(fortermination)columnsymbols: epd=externalpull-downapproximately10 k  toV SS ;epu=externalpull-upapproximately10 k  to V DD-IO , nc = not connected; au = always used.                                                  |

Table 9. Pin Definitions-JTAG Port (Continued)

| Signal   | Type        | Term   | Description                                                                                                                       |
|----------|-------------|--------|-----------------------------------------------------------------------------------------------------------------------------------|
| TDO      | O/T         | nc 1   | Test Data Output (JTAG). A serial data output of the scan path.                                                                   |
| TMS 2    | I (pu 3 )   | nc 1   | Test Mode Select (JTAG). Used to control the test state machine.                                                                  |
| TRST 2   | I/A (pu 3 ) | au     | Test Reset (JTAG). Resets the test state machine. TRST must be asserted or pulsed low after power-up for proper device operation. |

Type column symbols: A = asynchronous; G = ground; I = input; O = output; o/d = open drain output; P = power supply; pd = internal pull-down approximately 100 k  ; pu = internal pull-up approximately 100 k  ; T = three-state

Term (for termination) column symbols: epd = external pull-down approximately 10 k  to VSS; epu = external pull-up approximately 10 k  to VDD-IO, nc = not connected; au = always used.

1 See the reference Page 11 to the JTAG emulation technical reference EE-68.

2 The internal pull-up may not be sufficient. A stronger pull-up may be necessary.

3 See Electrical Characteristics for maximum and minimum current consumption for pull-up and pull-down resistances.

Table 10. Pin Definitions-Flags, Interrupts, and Timer

| Signal    | Type          | Term   | Description                                                                                                                                                                                                                                                     |
|-----------|---------------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FLAG3-0 1 | I/O/A (pd 2 ) | nc     | FLAGpins. Bidirectional input/output pins canbeusedasprogramconditions.Eachpincanbe configured individually for input or for output. FLAG3-0 are inputs after power-up and reset.                                                                               |
| IRQ3-0 3  | I/A (pu 2 )   | nc     | Interrupt Request. Whenasserted, the DSPgenerates aninterrupt. Each of the IRQ3-0 pins can be independently set for edgetriggered or level sensitive operation. After reset, these pins are disabled unless the IRQ3-0 strap option is initialized for booting. |
| TMR0E 1   | O(pd 2 )      | au     | Timer 0 expires. This output pulses for four SCLK cycles whenever timer 0 expires. At reset this is a strap pin. For additional information, see Table 16.                                                                                                      |

Type column symbols: A = asynchronous; G = ground; I = input; O = output; o/d = open drain output; P = power supply; pd = internal pull-down approximately 100 k  ; pu = internal pull-up approximately 100 k  ; T = three-state

Term (for termination) column symbols: epd = external pull-down approximately 10 k  to VSS; epu = external pull-up approximately 10 k  to VDD-IO, nc = not connected; au = always used.

1 The internal pull-down may not be sufficient. A stronger pull-down may be necessary.

2 See Electrical Characteristics for maximum and minimum current consumption for pull-up and pull-down resistances.

3 The internal pull-up may not be sufficient. A stronger pull-up may be necessary.

Table 11. Pin Definitions-Link Ports

| Signal     | Type   | Term   | Description                              |
|------------|--------|--------|------------------------------------------|
| L0DAT7-0 1 | I/O    | nc     | Link0 Data 7-0                           |
| L1DAT7-0 1 | I/O    | nc     | Link1 Data 7-0                           |
| L2DAT7-0 1 | I/O    | nc     | Link2 Data 7-0                           |
| L3DAT7-0 1 | I/O    | nc     | Link3 Data 7-0                           |
| L0CLKOUT   | O      | nc     | Link0 Clock/Acknowledge Output           |
| L1CLKOUT   | O      | nc     | Link1 Clock/Acknowledge Output           |
| L2CLKOUT   | O      | nc     | Link2 Clock/Acknowledge Output           |
| L3CLKOUT   | O      | nc     | Link3 Clock/Acknowledge Output           |
| L0CLKIN    | I/A    | epu    | Link0 Clock/Acknowledge Input            |
| L1CLKIN    | I/A    | epu    | Link1 Clock/Acknowledge Input            |
| L2CLKIN    | I/A    | epu    | Link2 Clock/Acknowledge Input            |
| L3CLKIN    | I/A    | epu    | Link3 Clock/Acknowledge Input            |
| L0DIR      | O      | nc     | Link0 Direction. (0 = input, 1 = output) |

Type column symbols: A = asynchronous; G = ground; I = input; O = output; o/d = open drain output; P = power supply;

pd = internal pull-down approximately 100 k  ; pu = internal pull-up approximately 100 k  ; T = three-state

Term (for termination) column symbols: epd = external pull-down approximately 10 k  to VSS; epu = external pull-up approximately 10 k  to VDD-IO, nc = not connected; au = always used.

## ADSP-TS101S

## ADSP-TS101S

Table 11. Pin Definitions-Link Ports (Continued)

| Signal   | Type     | Term   | Description                                                                                            |
|----------|----------|--------|--------------------------------------------------------------------------------------------------------|
| L1DIR    | O        | nc     | Link1 Direction. (0 = input, 1 = output)                                                               |
| L2DIR 2  | O(pd 3 ) | au     | Link2 Direction. (0 = input, 1 = output) At reset this is a strap pin. For more information, see Table |
| L3DIR    | O(pd 3 ) | nc     | Link3 Direction. (0 = input, 1 = output)                                                               |

Type column symbols: A = asynchronous; G = ground; I = input; O = output; o/d = open drain output; P = power supply; pd = internal pull-down approximately 100 k  ; pu = internal pull-up approximately 100 k  ; T = three-state

Term (for termination) column symbols: epd = external pull-down approximately 10 k  to VSS; epu = external pull-up approximately 10 k  to VDD-IO, nc = not connected; au = always used.

1 The link port data pins, if connected or floated for extended periods (for example, token slave with no token master), do not require pull-ups or pull-downs as there are no reliability issues and the worst-case power consumption for these floating inputs is negligible. Floating in this case means that these inputs are not driven by any source and that dc-biased terminations are not present.

2 The internal pull-down may not be sufficient. A stronger pull-down may be necessary.

3 See Electrical Characteristics for maximum and minimum current consumption for pull-up and pull-down resistances.

## Table 12. Pin Definitions-Impedance and Drive Strength Control

| Signal                        | Type                | Term   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|-------------------------------|---------------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CONTROLIMP2-1 1 CONTROLIMP0 2 | I (pu 3 ) I (pd 3 ) | au au  | Impedance Control. For ADC(Address/Data/Controls) and LINK (all link port outputs) signals, the CONTROLIMP2-0 pins control impedance as shown in Table 13. These pins enable or disable dig_ctrl mode. When dig_ctrl: 0 = Disabled (maximum drive strength) 1 = Enabled (use DS2-0 drive strength selection) DigitalDriveStrengthSelection.SelectedasshowninTable 14. For drive strength calculation,see Output Drive Currents. The drive strength for some pins is preset, not controlled by the DS2-0 |
| DS2-0 1                       | I (pu 3 )           | au     | pins. The pins that are always at drive strength 7 (100%) are: CPA, DPA, and EMU.                                                                                                                                                                                                                                                                                                                                                                                                                       |

Type column symbols: A = asynchronous; G = ground; I = input; O = output; o/d = open drain output; P = power supply; pd = internal pull-down approximately 100 k  ; pu = internal pull-up approximately 100 k  ; T = three-state

Term (for termination) column symbols: epd = external pull-down approximately 10 k  to VSS; epu = external pull-up approximately 10 k  to VDD-IO, nc = not connected; au = always used.

1 The internal pull-up may not be sufficient. A stronger pull-up may be necessary.

2 The internal pull-down may not be sufficient. A stronger pull-down may be necessary.

3 See Electrical Characteristics for maximum and minimum current consumption for pull-up and pull-down resistances.

## Table 13. Control Impedance Selection

| CONTROLIMP2-0   | ADCdig_ctrl   | LINK dig_ctrl   |
|-----------------|---------------|-----------------|
| 000             | 0             | 0               |
| 001             | 0             | 0               |
| 010             | 0             | 1               |
| 011             | reserved      | reserved        |
| 100             | 1             | 0               |
| 101             | reserved      | reserved        |
| 110 (default)   | 1             | 1               |
| 111             | reserved      | reserved        |

Table 14. Drive Strength Selection

| DS2-0         | Drive Strength   |
|---------------|------------------|
| 000           | Strength 0       |
| 001           | Strength 1       |
| 010           | Strength 2       |
| 011           | Strength 3       |
| 100           | Strength 4       |
| 101           | Strength 5       |
| 110           | Strength 6       |
| 111 (default) | Strength 7       |

Table 15. Pin Definitions-Power, Ground, and Reference

| Signal                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                           | Term                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| V DD                                                                                                                                                                                                                           | P                                                                                                                                                                                                                              | au                                                                                                                                                                                                                             | V DD pins for internal logic.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| V DD_A                                                                                                                                                                                                                         | P                                                                                                                                                                                                                              | au                                                                                                                                                                                                                             | V DD pins for analog circuits. Pay critical attention to bypassing this supply.                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| V DD_IO                                                                                                                                                                                                                        | P                                                                                                                                                                                                                              | au                                                                                                                                                                                                                             | V DD pins for I/O buffers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| V REF                                                                                                                                                                                                                          | I                                                                                                                                                                                                                              | au                                                                                                                                                                                                                             | Reference voltage defines the trip point for all input buffers, except RESET, IRQ3-0, DMAR3-0, ID2-0,CONTROLIMP2-0,TCK,TDI, TMS,andTRST. Thevalue is 1.5 V±100 mV(whichisthe TTL trip point). V REF can be connected to a power supply or set by a voltage divider circuit. The voltage divider should have an HF decoupling capacitor (1 nF HF SMD) connected to V SS . Tie the decoupling capacitor between V REF input and V SS , as close to the DSP's pins as possible.For more information, see Filtering Reference Voltage and Clocks. |
| V SS                                                                                                                                                                                                                           | G                                                                                                                                                                                                                              | au                                                                                                                                                                                                                             | Ground pins.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| V SS_A                                                                                                                                                                                                                         | G                                                                                                                                                                                                                              | au                                                                                                                                                                                                                             | Ground pins for analog circuits.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Type column symbols: A = asynchronous; G=ground; I = input; O=output; o/d = open drain output; P = power supply; pd = internal pull-down approximately 100 k  ; pu = internal pull-up approximately 100 k  ; T = three-state | Type column symbols: A = asynchronous; G=ground; I = input; O=output; o/d = open drain output; P = power supply; pd = internal pull-down approximately 100 k  ; pu = internal pull-up approximately 100 k  ; T = three-state | Type column symbols: A = asynchronous; G=ground; I = input; O=output; o/d = open drain output; P = power supply; pd = internal pull-down approximately 100 k  ; pu = internal pull-up approximately 100 k  ; T = three-state | Type column symbols: A = asynchronous; G=ground; I = input; O=output; o/d = open drain output; P = power supply; pd = internal pull-down approximately 100 k  ; pu = internal pull-up approximately 100 k  ; T = three-state                                                                                                                                                                                                                                                                                                                |
| Term(fortermination)columnsymbols: epd=externalpull-downapproximately10 k  toV SS ;epu=externalpull-upapproximately10 k  to V DD-IO , nc = not connected; au = always used.                                                  | Term(fortermination)columnsymbols: epd=externalpull-downapproximately10 k  toV SS ;epu=externalpull-upapproximately10 k  to V DD-IO , nc = not connected; au = always used.                                                  | Term(fortermination)columnsymbols: epd=externalpull-downapproximately10 k  toV SS ;epu=externalpull-upapproximately10 k  to V DD-IO , nc = not connected; au = always used.                                                  | Term(fortermination)columnsymbols: epd=externalpull-downapproximately10 k  toV SS ;epu=externalpull-upapproximately10 k  to V DD-IO , nc = not connected; au = always used.                                                                                                                                                                                                                                                                                                                                                                 |

## STRAP PIN FUNCTION DESCRIPTIONS

Some pins have alternate functions at reset. Strap options set DSP operating modes. During reset, the DSP samples the strap option pins. Strap pins have an approximately 100 k  pulldown for the default value. If a strap pin is not connected to an external pull-up or logic load, the DSP samples the default value during reset. If strap pins are connected to logic inputs, a stronger external pull-down may be required to ensure default value

Table 16. Pin Definitions-I/O Strap Pins

| Signal   | OnPin…   | Description                                                                                                                                                                     |
|----------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| EBOOT    | BMS      | EPROM boot. 0 = boot from EPROM immediately after reset (default) 1 = idle after reset and wait for an external device to boot DSP through the external port or a link port     |
| IRQEN    | BM       | Interrupt Enable. 0 = disable and set IRQ3-0 interrupts to level sensitive after reset (default) 1 = enable and set IRQ3-0 interrupts to edge sensitive immediately after reset |
| TM1      | L2DIR    | Test Mode 1. 0 = required setting during reset. 1 = reserved.                                                                                                                   |
| TM2      | TMR0E    | Test Mode 2. 0 = required setting during reset. 1 = reserved.                                                                                                                   |

depending on leakage and/or low level input current of the logic load. To set a mode other than the default mode, connect the strap pin to a sufficiently stronger external pull-up. In a multiprocessor system, up to eight DSPs may be connected on the cluster bus, resulting in parallel combination of strap pin pulldown resistors. Table 16 lists and describes each of the DSP's strap pins.

## ADSP-TS101S

## SPECIFICATIONS

Note that component specifications are subject to change without notice.

## OPERATING CONDITIONS

| Parameter   | Parameter                                            | Conditions                                     | Min   | Typ   | Max           | Unit   |
|-------------|------------------------------------------------------|------------------------------------------------|-------|-------|---------------|--------|
| V DD        | Internal Supply Voltage                              |                                                | 1.14  |       | 1.26          | V      |
| V DD_A      | Analog Supply Voltage                                |                                                | 1.14  |       | 1.26          | V      |
| V DD_IO     | I/O Supply Voltage                                   |                                                | 3.15  |       | 3.45          | V      |
| T CASE      | Case Operating Temperature                           |                                                | -40   |       | +85           | ºC     |
| V IH        | High Level Input Voltage 1                           | V DD , V DD_IO = max                           | 2     |       | V DD_IO + 0.5 | V      |
| V IL        | Low Level Input Voltage 1                            | V DD , V DD_IO = min                           | -0.5  |       | +0.8          | V      |
| I DD        | V DD Supply Current for Typical Activity 2           | CCLK = 250 MHz, V DD = 1.25 V, T CASE = 25ºC   |       | 1.2   |               | A      |
| I DD        | V DD Supply Current for Typical Activity 2           | CCLK = 300 MHz, V DD = 1.25 V, T CASE = 25ºC   |       | 1.5   |               | A      |
| I DDIDLELP  | V DD Supply Current for IDLELP Instruction Execution | CCLK = 300 MHz, V DD = 1.20 V, T CASE = 25ºC   |       | 173   |               | mA     |
| I DD_IO     | V DD_IO Supply Current for Typical Activity 2        | SCLK = 100 MHz, V DD_IO = 3.3 V, T CASE = 25ºC |       | 137   |               | mA     |
| I DD_A      | V DD_A Supply Current                                | V DD = 1.25 V, T CASE = 25ºC                   |       | 25    | 31.25         | mA     |
| V REF       | Voltage Reference                                    |                                                | 1.4   |       | 1.6           | V      |

## ELECTRICAL CHARACTERISTICS

| Parameter   | Parameter                               | Conditions                             | Min   | Max   | Unit   |
|-------------|-----------------------------------------|----------------------------------------|-------|-------|--------|
| V OH        | High Level Output Voltage 1             | V DD_IO =min, I OH =-2mA               | 2.4   |       | V      |
| V OL        | Low Level Output Voltage 1              | V DD_IO =min, I OL =4mA                |       | 0.4   | V      |
| I IH        | High Level Input Current 2              | V DD_IO =max, V IN =V DD_IO max        |       | 10    | µA     |
| I IHP       | High Level Input Current (pd) 2         | V DD_IO =max, V IN =V DD_IO max        | 17.2  | 44.5  | µA     |
| I IL        | Low Level Input Current 3               | V DD_IO =max, V IN =0 V                |       | 10    | µA     |
| I ILP       | Low Level Input Current (pu) 4          | V DD_IO =max, V IN =0 V                | -69   | -23   | µA     |
| I OZH       | Three-State Leakage Current High 5, 6   | V DD_IO =max, V IN =V DD_IO max        |       | 10    | µA     |
| I OZHP      | Three-State Leakage Current High (pd) 7 | V DD_IO =max, V IN =V DD_IO max        | 17.2  | 44.5  | µA     |
| I OZL       | Three-State Leakage Current Low 8       | V DD_IO =max, V IN =0 V                |       | 10    | µA     |
| I OZLP      | Three-State Leakage Current Low (pu) 9  | V DD_IO =max, V IN =0 V                | -69   | -23   | µA     |
| I OZLO      | Three-State Leakage Current Low (od) 7  | V DD_IO =max, V IN =0 V                | -9.8  | -4.6  | mA     |
| C IN        | Input Capacitance 10, 11                | f IN =1 MHz, T CASE =25ºC, V IN =2.5 V |       | 5     | pF     |

## ABSOLUTE MAXIMUM RATINGS

Stresses greater than those listed in Table 17 may cause permanent damage to the device. These are stress ratings only; functional operation of the device at these or any other conditions greater than those indicated in the operational sections of this specification is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

Table 17. Absolute Maximum Ratings

| Parameter                                 | Rating                    |
|-------------------------------------------|---------------------------|
| Internal (Core) Supply Voltage (V DDINT ) | -0.3 V to +1.40 V         |
| Analog (PLL) Supply Voltage (V DD_A )     | -0.3 V to +1.40 V         |
| External (I/O) Supply Voltage (V DDEXT )  | -0.3 V to +4.6 V          |
| Input Voltage                             | -0.5 V to V DD_IO + 0.5 V |
| Output Voltage Swing                      | -0.5 V to V DD_IO + 0.5 V |
| Storage Temperature Range                 | -65  C to +150  C       |

## ESD CAUTION

<!-- image -->

ESD  (electrostatic  discharge)  sensitive  device. Charged  devices  and  circuit  boards  can  discharge without detection. Although  this product features patented  or  proprietary  protection  circuitry,  damage may  occur  on  devices  subjected  to  high  energy  ESD. Therefore, proper ESD precautions should be taken to avoid  performance  degradation or loss of functionality.

## TIMING SPECIFICATIONS

With the exception of link port, IRQ3-0, DMAR3-0, TMR0E, FLAG3-0 (input), and TRST pins, all ac timing for the ADSPTS101S is relative to a reference clock edge. Because input setup/hold, output valid/hold, and output enable/disable times are relative to a clock edge, the timing data for the ADSP-

TS101S has few calculated (formula-based) values. For information on ac timing, see General AC Timing. For information on link port transfer timing, see Link Ports Data Transfer and Token Switch Timing.

## General AC Timing

Timing is measured on signals when they cross the 1.5 V level as described in Figure 15. All delays (in nanoseconds) are measured between the point that the first signal reaches 1.5 V and the point that the second signal reaches 1.5 V.

The ac asynchronous timing data for the IRQ3-0, DMAR3-0, TMR0E, FLAG3-0 (input), and TRST pins appears in Table 18.

The general ac timing data appears in Table 19 through Table 22, Table 26, and Table 27. All ac specifications are measured with the load specified in Figure 7, and with the output drive strength set to strength 4. Output valid and hold are based on standard capacitive loads: 30 pF on all pins. The delay and hold specifications given should be derated by a drive strength related factor for loads other than the nominal value of 30 pF.

Figure 7. Equivalent Device Loading for AC Measurements (Includes All Fixtures)

<!-- image -->

In order to calculate the output valid and hold times for different load conditions and/or output drive strengths, refer to Figure 31 through Figure 38 (Rise and Fall Time vs. Load Capacitance) and Figure 39 (Output Valid vs. Load Capacitance and Drive Strength).

For power-up, power-up reset, and normal reset (hot reset) timing requirements, refer to Table 23 and Figure 12, Table 24 and Figure 13, and Table 25 and Figure 14 respectively.

Table 18. AC Asynchronous Signal Specifications (All values in this table are in nanoseconds)

| Name         | Description             | Pulse Width Low(min)   | Pulse Width High (min)   |
|--------------|-------------------------|------------------------|--------------------------|
| IRQ3-0 1     | Interrupt request input | t CCLK + 3 ns          |                          |
| DMAR3-0 1    | DMArequest input        | t CCLK + 4 ns          | t CCLK + 4 ns            |
| TMR0E 2      | Timer 0 expired output  |                        | 4  t SCLK ns            |
| FLAG3-0 1, 3 | Flag pins input         | 3  t CCLK ns          | 3  t CCLK ns            |
| TRST         | JTAG test reset input   | 1 ns                   |                          |

## ADSP-TS101S

## Table 19. Reference Clocks-Core Clock (CCLK) Cycle Time

|           |                       | Grade = 100 (300 MHz)   | Grade = 100 (300 MHz)   | Grade = 000 (250 MHz)   | Grade = 000 (250 MHz)   |      |
|-----------|-----------------------|-------------------------|-------------------------|-------------------------|-------------------------|------|
| Parameter | Description           | Min                     | Max                     | Min                     | Max                     | Unit |
| t CCLK 1  | Core Clock Cycle Time | 3.3                     | 12.5                    | 4.0                     | 12.5                    | ns   |

Figure 8. Reference Clocks-Core Clock (CCLK) Cycle Time

<!-- image -->

## Table 20. Reference Clocks-Local Clock (LCLK) Cycle Time

| Parameter         | Description                  | Min          | Max          | Unit   |
|-------------------|------------------------------|--------------|--------------|--------|
| t LCLK 1, 2, 3, 4 | Local Clock Cycle Time       | 10           | 25           | ns     |
| t LCLKH           | Local Clock Cycle High Time  | 0.4 × t LCLK | 0.6 × t LCLK | ns     |
| t LCLKL           | Local Clock Cycle Low Time   | 0.4 × t LCLK | 0.6 × t LCLK | ns     |
| t LCLKJ 5, 6      | Local Clock Jitter Tolerance |              | 500          | ps     |

Figure 9. Reference Clocks-Local Clock (LCLK) Cycle Time

<!-- image -->

## Table 21. Reference Clocks-System Clock (SCLK) Cycle Time

| Parameter         | Description                   | Min          | Max          | Unit   |
|-------------------|-------------------------------|--------------|--------------|--------|
| t SCLK 1, 2, 3, 4 | System Clock Cycle Time       | 10           | 25           | ns     |
| t SCLKH           | System Clock Cycle High Time  | 0.4 × t SCLK | 0.6 × t SCLK | ns     |
| t SCLKL           | System Clock Cycle Low Time   | 0.4 × t SCLK | 0.6 × t SCLK | ns     |
| t SCLKJ 5, 6      | System Clock Jitter Tolerance |              | 500          | ps     |

Figure 10. Reference Clocks-System Clock (SCLK) Cycle Time

<!-- image -->

## Table 22. Reference Clocks-Test Clock (TCK) Cycle Time

Figure 11. Reference Clocks-Test Clock (TCK) Cycle Time

| Parameter   | Description                       | Min                         | Max   | Unit   |
|-------------|-----------------------------------|-----------------------------|-------|--------|
| t TCK       | Test Clock (JTAG) Cycle Time      | Greater of 30 or t CCLK × 4 |       | ns     |
| t TCKH      | Test Clock (JTAG) Cycle High Time | 12.5                        |       | ns     |
| t TCKL      | Test Clock (JTAG) Cycle Low Time  | 12.5                        |       | ns     |

<!-- image -->

## Table 23. Power-Up Timing 1

| Parameter          | Min   | Max   | Unit   |
|--------------------|-------|-------|--------|
| Timing Requirement |       |       |        |
| t VDD_IO V         | >0    |       | ms     |

Figure 12. Power-Up Timing

<!-- image -->

## ADSP-TS101S

## ADSP-TS101S

## Table 24. Power-Up Reset Timing

| Parameter           |                                                                                                                       | Min Max      | Unit         |    |
|---------------------|-----------------------------------------------------------------------------------------------------------------------|--------------|--------------|----|
| Timing Requirements | Timing Requirements                                                                                                   |              |              |    |
| t START_LO          | RESET Deasserted After V DD , V DD_A , V DD_IO , SCLK/LCLK, and Static/Strap Pins Are Stable and Within Specification | 2            |              | ms |
| t PULSE1_HI         | RESET Deasserted for First Pulse                                                                                      | 50  t SCLK  | 100  t SCLK | ns |
| t PULSE2_LO         | RESET Asserted for Second Pulse                                                                                       | 100  t SCLK |              | ns |
| t TRST_PWR 1        | TRST Asserted During Power-Up Reset                                                                                   | 2  t SCLK   |              | ns |

Figure 13. Power-Up Reset Timing

<!-- image -->

## Table 25. Normal Reset Timing

Figure 14. Normal Reset (Hot Reset) Timing

| Parameter            | Min          | Max   | Unit   |
|----------------------|--------------|-------|--------|
| Timing Requirement s |              |       |        |
| t RST_IN RESET       | 100  t SCLK |       | ns     |
| t STRAP RESET        | 2            |       | ms     |

<!-- image -->

Table 26. AC Signal Specifications (for SCLK &lt;16.7 ns) (All values in this table are in nanoseconds)

| Name            | Description                     | Input Setup (min)   | Input Hold (min)   | Output Valid (max) 1   | Output Hold (min)   | Output Enable (min) 2   | Output Disable (max) 2   | Reference Clock   |
|-----------------|---------------------------------|---------------------|--------------------|------------------------|---------------------|-------------------------|--------------------------|-------------------|
| ADDR31-0        | External Address Bus            | 2.6                 | 0.5                | 4.2                    | 1.0                 | 0.9                     | 2.5                      | SCLK              |
| DATA63-0        | External Data Bus               | 2.6                 | 0.5                | 4.2                    | 1.0                 | 0.9                     | 2.5                      | SCLK              |
| MSH             | Memory Select Host Line         |                     |                    | 4.2                    | 1.0                 | 0.9                     | 2.5                      | SCLK              |
| MSSD            | Memory Select SDRAM Line        | 2.6                 | 0.5                | 4.2                    | 1.0                 | 0.9                     | 2.5                      | SCLK              |
| MS1-0           | Memory Select for Static Blocks |                     |                    | 4.2                    | 1.0                 | 0.9                     | 2.5                      | SCLK              |
| RD              | Memory Read                     | 2.6                 | 0.5                | 4.2                    | 1.0                 | 0.9                     | 2.5                      | SCLK              |
| WRL             | Write Low Word                  | 2.6                 | 0.5                | 4.2                    | 1.0                 | 0.9                     | 2.5                      | SCLK              |
| WRH             | Write High Word                 | 2.6                 | 0.5                | 4.2                    | 1.0                 | 0.9                     | 2.5                      | SCLK              |
| ACK             | Acknowledge for Data            | 2.6                 | 0.5                | 4.2                    | 1.0                 | 0.9                     | 2.5                      | SCLK              |
| SDCKE           | SDRAM Clock Enable              | 2.6                 | 0.5                | 4.2                    | 1.0                 | 0.9                     | 2.5                      | SCLK              |
| RAS             | Row Address Select              | 2.6                 | 0.5                | 4.2                    | 1.0                 | 0.9                     | 2.5                      | SCLK              |
| CAS             | Column Address Select           | 2.6                 | 0.5                | 4.2                    | 1.0                 | 0.9                     | 2.5                      | SCLK              |
| SDWE            | SDRAM Write Enable              | 2.6                 | 0.5                | 4.2                    | 1.0                 | 0.9                     | 2.5                      | SCLK              |
| LDQM            | Low Word SDRAM Data Mask        |                     |                    | 4.2                    | 1.0                 | 0.9                     | 2.5                      | SCLK              |
| HDQM            | High Word SDRAM Data Mask       |                     |                    | 4.2                    | 1.0                 | 0.9                     | 2.5                      | SCLK              |
| SDA10           | SDRAM ADDR10                    |                     |                    | 4.2                    | 1.0                 | 0.9                     | 2.5                      | SCLK              |
| HBR             | Host Bus Request                | 2.6                 | 0.5                |                        |                     |                         |                          | SCLK              |
| HBG             | Host Bus Grant                  | 2.6                 | 0.5                | 4.2                    | 1.0                 | 0.9                     | 2.5                      | SCLK              |
| BOFF            | Back Off Request                | 2.6                 | 0.5                |                        |                     |                         |                          | SCLK              |
| BUSLOCK         | Bus Lock                        |                     |                    | 4.2                    | 1.0                 | 0.9                     | 2.5                      | SCLK              |
| BRST            | Burst Access                    | 2.6                 | 0.5                | 4.2                    | 1.0                 | 0.9                     | 2.5                      | SCLK              |
| BR7-0           | Multiprocessing Bus Request     | 2.6                 | 0.5                | 4.2                    | 1.0                 |                         |                          | SCLK              |
| FLYBY           | Flyby Mode Selection            |                     |                    | 4.2                    | 1.0                 | 0.9                     | 2.5                      | SCLK              |
| IOEN            | Flyby I/O Enable                |                     |                    | 4.2                    | 1.0                 | 0.9                     | 2.5                      | SCLK              |
| CPA 3, 4        | Core Priority Access            | 2.6                 | 0.5                | 5.8                    |                     |                         | 2.5                      | SCLK              |
| DPA 3, 4        | DMAPriority Access              | 2.6                 | 0.5                | 5.8                    |                     |                         | 2.5                      | SCLK              |
| BMS 5           | Boot Memory Select              |                     |                    | 4.2                    | 1.0                 | 0.9                     | 2.5                      | SCLK              |
| FLAG3-0 6       | FLAG Pins                       |                     |                    | 4.2                    | 1.0                 | 1.0                     | 4.0                      | SCLK              |
| RESET 4, 7      | Global Reset                    |                     |                    |                        |                     |                         |                          | SCLK              |
| TMS 4           | Test Mode Select (JTAG)         | 1.5                 | 1.0                |                        |                     |                         |                          | TCK               |
| TDI 4           | Test Data Input (JTAG)          | 1.5                 | 1.0                |                        |                     |                         |                          | TCK               |
| TDO             | Test Data Output (JTAG)         |                     |                    | 6.0                    | 1.0                 | 1.0                     | 5.0                      | TCK_FE 8          |
| TRST 4, 7, 9    | Test Reset (JTAG)               |                     |                    |                        |                     |                         |                          | TCK               |
| BM 5            | Bus Master Debug Aid Only       |                     |                    | 4.2                    | 1.0                 |                         |                          | SCLK              |
| EMU 10          | Emulation                       |                     |                    | 5.5                    |                     |                         | 5.0                      | TCK or LCLK       |
| JTAG_SYS_IN 11  | System Input                    | 1.5                 | 11.0               |                        |                     |                         |                          | TCK               |
| JTAG_SYS_OUT 12 | System Output                   |                     |                    | 16.0                   |                     |                         |                          | TCK_FE 8          |
| ID2-0 9         | Chip ID-Must Be Constant        |                     |                    |                        |                     |                         |                          |                   |
| CONTROLIMP2-0 9 | Static Pins-Must Be Constant    |                     |                    |                        |                     |                         |                          |                   |
| DS2-0 9         | Static Pins-Must Be Constant    |                     |                    |                        |                     |                         |                          |                   |
| LCLKRAT2-0 9    | Static Pins-Must Be Constant    |                     |                    |                        |                     |                         |                          |                   |
| SCLKFREQ 9      | Static Pins-Must Be Constant    |                     |                    |                        |                     |                         |                          |                   |

## ADSP-TS101S

## ADSP-TS101S

1 The output valid (max) value in this column applies for the standard 30 pF capacitive load used in testing. To see how output valid varies with capacitive loading, see Figure 39.

2 The external port protocols employ bus IDLE cycles for bus mastership transitions as well as slave address boundary crossings to avoid any potential bus contention. The apparent driver overlap, due to output disables being larger than output enables, is not actual.

- 3 CPA and DPA pins are open drains and have 0.5 k  internal pull-ups.

4 These input pins have Schmitt triggers and therefore do not need to be synchronized to a clock reference. These synchronous specifications only apply for recognition in the current clock reference cycle.

5 This pin is a strap option. During reset, an internal resistor pulls the pin low.

- 6 For input specifications, see Table 18.
- 7 For additional requirement details, see Reset and Booting.
- 8 TCK\_FE indicates TCK falling edge.

9 These pins may change only during reset; recommend connecting it to VDD\_IO/VSS.

10 Reference clock depends on function.

11 System inputs are: IRQ3-0, BMS, LCLKRAT2-0, SCLKFREQ, BM, TMR0E, FLAG3-0, ID2-0, BRST, WRH, WRL, RD, MSSD, SDCKE, SDWE, CAS, RAS, ADDR31-0, DATA63-0, DPA, CPA, HBG, BOFF, HBR, ACK, BR7-0, L0CLKIN, L0DAT7-0, L1CLKIN, L1DAT7-0, L2CLKIN, L2DAT7-0, L2DIR, L3CLKIN, L3DAT7-0, DS2-0, CONTROLIMP2-0, RESET, DMAR3-0.

12 System outputs are: BMS, BM, BUSLOCK, TMR0E, FLAG3-0, FLYBY, IOEN, MSH, BRST, WRH, WRL, RD, MS1-0, HDQM, LDQM, MSSD, SDCKE, SDWE, CAS, RAS, ADDR31-0, DATA63-0, DPA, CPA, HBG, ACK, BR7-0, L0CLKOUT, L0DAT7-0, L0DIR, L1CLKOUT, L1DAT7-0, L1DIR, L2CLKOUT, L2DAT7-0, L2DIR, L3CLKOUT, L3DAT7-0, L3DIR, EMU.

Table 27. AC Signal Specifications (for 16.7 ns &lt;SCLK &lt;25 ns) (All values in this table are in nanoseconds)

| Name                 | Description                     | Input Setup (min)   | Input Hold (min)   | Output Valid (max) 1   | Output Hold (min)   | Output Enable (min) 2   | Output Disable (max) 2   | Reference Clock   |
|----------------------|---------------------------------|---------------------|--------------------|------------------------|---------------------|-------------------------|--------------------------|-------------------|
| ADDR31-0             | External Address Bus            | 2.8                 | 0.5                | 4.2                    | 0.8                 | 0.3                     | 2.5                      | SCLK              |
| DATA63-0             | External Data Bus               | 2.8                 | 0.5                | 4.2                    | 0.8                 | 0.3                     | 2.5                      | SCLK              |
| MSH                  | Memory Select Host Line         |                     |                    | 4.2                    | 0.8                 | 0.3                     | 2.5                      | SCLK              |
| MSSD                 | Memory Select SDRAM Line        | 2.8                 | 0.5                | 4.2                    | 0.8                 | 0.3                     | 2.5                      | SCLK              |
| MS1-0                | Memory Select for Static Blocks |                     |                    | 4.2                    | 0.8                 | 0.3                     | 2.5                      | SCLK              |
| RD                   | Memory Read                     | 2.8                 | 0.5                | 4.2                    | 0.8                 | 0.3                     | 2.5                      | SCLK              |
| WRL                  | Write Low Word                  | 2.8                 | 0.5                | 4.2                    | 0.8                 | 0.3                     | 2.5                      | SCLK              |
| WRH                  | Write High Word                 | 2.8                 | 0.5                | 4.2                    | 0.8                 | 0.3                     | 2.5                      | SCLK              |
| ACK                  | Acknowledge for Data            | 2.8                 | 0.5                | 4.2                    | 0.8                 | 0.3                     | 2.5                      | SCLK              |
| SDCKE                | SDRAM Clock Enable              | 2.8                 | 0.5                | 4.2                    | 0.8                 | 0.3                     | 2.5                      | SCLK              |
| RAS                  | Row Address Select              | 2.8                 | 0.5                | 4.2                    | 0.8                 | 0.3                     | 2.5                      | SCLK              |
| CAS                  | Column Address Select           | 2.8                 | 0.5                | 4.2                    | 0.8                 | 0.3                     | 2.5                      | SCLK              |
| SDWE                 | SDRAM Write Enable              | 2.8                 | 0.5                | 4.2                    | 0.8                 | 0.3                     | 2.5                      | SCLK              |
| LDQM                 | Low Word SDRAM Data Mask        |                     |                    | 4.2                    | 0.8                 | 0.3                     | 2.5                      | SCLK              |
| HDQM                 | High Word SDRAM Data Mask       |                     |                    | 4.2                    | 0.8                 | 0.3                     | 2.5                      | SCLK              |
| SDA10                | SDRAM ADDR10                    |                     |                    | 4.2                    | 0.8                 | 0.3                     | 2.5                      | SCLK              |
| HBR                  | Host Bus Request                | 2.8                 | 0.5                |                        |                     |                         |                          | SCLK              |
| HBG                  | Host Bus Grant                  | 2.8                 | 0.5                | 4.2                    | 0.8                 | 0.3                     | 2.5                      | SCLK              |
| BOFF                 | Back Off Request                | 2.8                 | 0.5                |                        |                     |                         |                          | SCLK              |
| BUSLOCK              | Bus Lock                        |                     |                    | 4.2                    | 0.8                 | 0.3                     | 2.5                      | SCLK              |
| BRST                 | Burst Access                    | 2.8                 | 0.5                | 4.2                    | 0.8                 | 0.3                     | 2.5                      | SCLK              |
| BR7-0                | Multiprocessing Bus Request     | 2.8                 | 0.5                | 4.2                    | 0.8                 |                         |                          | SCLK              |
| FLYBY                | Flyby Mode Selection            |                     |                    | 4.2                    | 0.8                 | 0.3                     | 2.5                      | SCLK              |
| IOEN                 | Flyby Mode I/O Enable           |                     |                    | 4.2                    | 0.8                 | 0.3                     | 2.5                      | SCLK              |
| CPA 3, 4             | Core Priority Access            | 2.8                 | 0.5                | 5.8                    |                     |                         | 2.5                      | SCLK              |
| DPA 3, 4             | DMAPriority Access              | 2.8                 | 0.5                | 5.8                    |                     |                         | 2.5                      | SCLK              |
| BMS 5                | Boot Memory Select              |                     |                    | 4.2                    | 0.8                 | 0.3                     | 2.5                      | SCLK              |
| FLAG3-0 6 RESET 4, 7 | FLAG Pins Global Reset          |                     |                    | 4.2                    | 1.0                 | 1.0                     | 4.0                      | SCLK SCLK         |

## ADSP-TS101S

Table 27. AC Signal Specifications (for 16.7 ns &lt;SCLK &lt;25 ns) (All values in this table are in nanoseconds) (Continued)

| Name            | Description                  | Input Setup (min)   | Input Hold (min)   | Output Valid (max) 1   | Output Hold (min)   | Output Enable (min) 2   | Output Disable (max) 2   | Reference Clock   |
|-----------------|------------------------------|---------------------|--------------------|------------------------|---------------------|-------------------------|--------------------------|-------------------|
| TMS 4           | Test Mode Select (JTAG)      | 1.5                 | 1.0                |                        |                     |                         |                          | TCK               |
| TDI 4           | Test Data Input (JTAG)       | 1.5                 | 1.0                |                        |                     |                         |                          | TCK               |
| TDO             | Test Data Output (JTAG)      |                     |                    | 6.0                    | 1.0                 | 1.0                     | 5.0                      | TCK_FE 8          |
| TRST 4, 7, 9    | Test Reset (JTAG)            |                     |                    |                        |                     |                         |                          | TCK               |
| BM 5            | Bus Master Debug Aid Only    |                     |                    | 4.2                    | 0.8                 |                         |                          | SCLK              |
| EMU 10          | Emulation                    |                     |                    | 5.5                    |                     |                         | 5.0                      | TCK or LCLK       |
| JTAG_SYS_IN 11  | System Input                 | 1.5                 | 11.0               |                        |                     |                         |                          | TCK               |
| JTAG_SYS_OUT 12 | System Output                |                     |                    | 16.0                   |                     |                         |                          | TCK_FE 8          |
| ID2-0 9         | Chip ID-Must Be Constant     |                     |                    |                        |                     |                         |                          |                   |
| CONTROLIMP2-0 9 | Static Pins-Must Be Constant |                     |                    |                        |                     |                         |                          |                   |
| DS2-0 9         | Static Pins-Must Be Constant |                     |                    |                        |                     |                         |                          |                   |
| LCLKRAT2-0 9    | Static Pins-Must Be Constant |                     |                    |                        |                     |                         |                          |                   |
| SCLKFREQ 9      | Static Pins-Must Be Constant |                     |                    |                        |                     |                         |                          |                   |

## ADSP-TS101S

Figure 15. General AC Parameters Timing

<!-- image -->

## Link Ports Data Transfer and Token Switch Timing

Table 28, Table 29, Table 30, and Table 31 with Figure 16, Figure 17, Figure 18, and Figure 19 provide the timing specifications for the link ports data transfer and token switch.

## Table 28. Link Ports-Transmit

| Parameter                 |                                | Max               | Unit   |
|---------------------------|--------------------------------|-------------------|--------|
| Timing Requirements       |                                |                   |        |
| t CONNS 1                 | Connectivity Pulse Setup       |                   | ns     |
| t CONNS 2                 | Connectivity Pulse Setup       |                   | ns     |
| t CONNIW 3                | Connectivity Pulse Input Width |                   | ns     |
| t ACKS                    | Acknowledge Setup              |                   | ns     |
| Switching Characteristics |                                |                   |        |
| t LXCLK_TX 4              | Transmit Link Clock Period     | 1.1  LR  t CCLK | ns     |
| t LXCLKH_TX 1             | Transmit Link Clock Width High | 0.66  t LXCLK_TX | ns     |
| t LXCLKH_TX 2             | Transmit Link Clock Width High | 0.6  t LXCLK_TX  | ns     |
| t LXCLKL_TX 1             | Transmit Link Clock Width Low  | 0.66  t LXCLK_TX | ns     |
| t LXCLKL_TX 2             | Transmit Link Clock Width Low  | 0.6  t LXCLK_TX  | ns     |
| t DIRS                    | LxDIR Transmit Setup           | 2  t LXCLK_TX    | ns     |
| t DIRH                    | LxDIR Transmit Hold            | 2  t LXCLK_TX    | ns     |
| t DOS 1                   | LxDAT7-0 Output Setup          |                   | ns     |
| t DOH 1                   | LxDAT7-0 Output Hold           |                   | ns     |
| t DOS 2                   | LxDAT7-0 Output Setup          |                   | ns     |
| t DOH 2                   | LxDAT7-0 Output Hold           |                   | ns     |
| t LDOE                    | LxDAT7-0 Output Enable         |                   | ns     |
| t LDOD 5                  | LxDAT7-0 Output Disable        |                   | ns     |

Figure 16. Link Ports-Transmit

<!-- image -->

## ADSP-TS101S

## Table 29. Link Ports-Receive

| Parameter                 |                                 | Max               | Unit   |
|---------------------------|---------------------------------|-------------------|--------|
| Timing Requirements       |                                 |                   |        |
| t LXCLK_RX 1, 2           | Receive Link Clock Period       | 1.1  LR  t CCLK | ns     |
| t LXCLKH_RX 3             | Receive Link Clock Width High   | 0.66  t LXCLK_RX | ns     |
| t LXCLKH_RX 4             | Receive Link Clock Width High   | 0.6  t LXCLK_RX  | ns     |
| t LXCLKL_RX 3             | Receive Link Clock Width Low    | 0.66  t LXCLK_RX | ns     |
| t LXCLKL_RX 4             | Receive Link Clock Width Low    | 0.6  t LXCLK_RX  | ns     |
| t DIS                     | LxDAT7-0 Input Setup            |                   | ns     |
| t DIH                     | LxDAT7-0 Input Hold             |                   | ns     |
| Switching Characteristics |                                 |                   |        |
| t CONNV                   | Connectivity Pulse Valid        | 2.5  t LXCLK_RX  | ns     |
| t CONNOW                  | Connectivity Pulse Output Width |                   | ns     |

Figure 17. Link Ports-Receive

<!-- image -->

LxDIR

Table 30. Link Ports-Token Switch, Token Master

| Parameter                 | Min                               | Max              | Unit   |
|---------------------------|-----------------------------------|------------------|--------|
| Timing Requirements       |                                   |                  |        |
| t REQI                    | Token Request Input Width         | 5.0  t LXCLK_RX | ns     |
| t TKRQ                    | Token Request from Token Enable 1 | 3.0  t LXCLK_TX | ns     |
| Switching Characteristics |                                   |                  |        |
| t TKENO                   | Token Switch Enable Output        | 8.0  t LXCLK_TX | ns     |
| t REQO                    | Token Request Output Width 2      | 6.0  t LXCLK_TX | ns     |

Figure 18. Link Ports-Token Switch, Token Master

<!-- image -->

Table 31. Link Ports-Token Switch, Token Requester

| Parameter                 | Min              | Max   | Unit   |
|---------------------------|------------------|-------|--------|
| Timing Requirements       |                  |       |        |
| t TKENI 1 Token           | 8.0  t LXCLK_RX |       | ns     |
| Switching Characteristics |                  |       |        |
| t REQO Token              | 6.0  t LXCLK_RX |       | ns     |

Figure 19. Link Ports-Token Switch, Token Requester

<!-- image -->

## ADSP-TS101S

## ADSP-TS101S

## OUTPUT DRIVE CURRENTS

Figure 20 through Figure 27 show typical I-V characteristics for the output drivers of the ADSP-TS101S. The curves in these diagrams represent the current drive capability of the output drivers as a function of output voltage over the range of drive strengths. For complete output driver characteristics, refer to IBIS models, available on the Analog Devices website, www.analog.com.

<!-- image -->

Figure 20. Typical Drive Currents at Strength 0

<!-- image -->

Figure 21. Typical Drive Currents at Strength 1

Figure 22. Typical Drive Currents at Strength 2

<!-- image -->

Figure 23. Typical Drive Currents at Strength 3

<!-- image -->

<!-- image -->

Figure 24. Typical Drive Currents at Strength 4

Figure 25. Typical Drive Currents at Strength 5

<!-- image -->

Figure 26. Typical Drive Currents at Strength 6

<!-- image -->

## ADSP-TS101S

Figure 27. Typical Drive Currents at Strength 7

<!-- image -->

## ADSP-TS101S

## TEST CONDITIONS

The test conditions for timing parameters appearing in Table 26 and Table 27 include output disable time, output enable time, and capacitive loading. The timing specifications for the DSP apply for the voltage reference levels in Figure 28.

Figure 28. Voltage Reference Levels for AC Measurements (Except Output Enable/Disable)

<!-- image -->

Figure 29. Output Enable/Disable

<!-- image -->

## Output Disable Time

Output pins are considered to be disabled when they stop driving, go into a high impedance state, and start to decay from their output high or low voltage. The time for the voltage on the bus to decay by  V is dependent on the capacitive load, C L and the load current, I L . This decay time can be approximated by the following equation:

<!-- formula-not-decoded -->

The output disable time tDIS is the difference between t MEA-SURED\_DIS and t DECAY as shown in Figure 29. The time tMEASURED\_DIS is the interval from when the reference signal switches to when the output voltage decays  V from the measured output high or output low voltage. The tDECAY value is calculated with test loads CL and IL, and with  V equal to 0.5 V.

## Output Enable Time

Output pins are considered to be enabled when they have made a transition from a high impedance state to when they start driving. The time for the voltage on the bus to ramp by  V is dependent on the capacitive load, CL , and the drive current, ID . This ramp time can be approximated by the following equation:

<!-- formula-not-decoded -->

The output enable time tENA is the difference between tMEA-SURED\_ENA and tRAMP as shown in Figure 29. The time t MEASURED\_ENA is the interval from when the reference signal switches to when the output voltage ramps  V from the measured three-stated output level. The tRAMP value is calculated with test load CL , drive current ID , and with  V equal to 0.5 V.

## Capacitive Loading

Figure 30 shows the circuit with variable capacitance that is used for measuring typical output rise and fall times. Figure 31 through Figure 38 show how output rise time varies with capacitance. Figure 39 graphically shows how output valid varies with load capacitance. (Note that this graph or derating does not apply to output disable delays; see Output Disable Time.) The graphs of Figure 31 through Figure 39 may not be linear outside the ranges shown.

Figure 30. Equivalent Device Loading for AC Measurements (Includes All Fixtures)

<!-- image -->

Figure 31. Typical Output Rise and Fall Time (10%-90%, VDD\_IO =3.3 V) vs. Load Capacitance at Strength 0

<!-- image -->

<!-- image -->

Figure 32. Typical Output Rise and Fall Time (10%-90%, VDD\_IO =3.3 V) vs. Load Capacitance at Strength 1

Figure 33. Typical Output Rise and Fall Time (10%-90%, VDD\_IO =3.3 V) vs. Load Capacitance at Strength 2

<!-- image -->

Figure 34. Typical Output Rise and Fall Time (10%-90%, VDD\_IO =3.3 V) vs. Load Capacitance at Strength 3

<!-- image -->

## ADSP-TS101S

<!-- image -->

Figure 35. Typical Output Rise and Fall Time (10%-90%, VDD\_IO =3.3 V) vs. Load Capacitance at Strength 4

Figure 36. Typical Output Rise and Fall Time (10%-90%, VDD\_IO =3.3 V) vs. Load Capacitance at Strength 5

<!-- image -->

Figure 37. Typical Output Rise and Fall Time (10%-90%, VDD\_IO =3.3 V) vs. Load Capacitance at Strength 6

<!-- image -->

## ADSP-TS101S

Figure 38. Typical Output Rise and Fall Time (10%-90%, VDD\_IO =3.3 V) vs. Load Capacitance at Strength 7

<!-- image -->

Figure 39. Typical Output Valid (VDD\_IO =3.3 V) vs. Load Capacitance at Max Case Temperature and Strength 0-7 1

<!-- image -->

1 The line equations for the output valid vs. load capacitance are: Strength 0: y = 0.0956x + 3.5662 Strength 1: y = 0.0523x + 3.2144 Strength 2: y = 0.0433x + 3.1319 Strength 3: y = 0.0391x + 2.9675 Strength 4: y = 0.0393x + 2.7653 Strength 5: y = 0.0373x + 2.6515 Strength 6: y = 0.0379x + 2.1206 Strength 7: y = 0.0399x + 1.9080

## ENVIRONMENTAL CONDITIONS

The ADSP-TS101S is rated for performance over the extended commercial temperature range, TCASE = -40°C to +85°C.

## Thermal Characteristics

The ADSP-TS101S is packaged in a 19 mm  19 mm Chip Scale Package Ball Grid Array (CSP\_BGA) and a 27 mm  27 mm Plastic Ball Grid Array (PBGA). The ADSP-TS101S is specified for a case temperature (TCASE). To ensure that the TCASE data sheet specification is not exceeded, a heat sink and/or an air flow source may be used. See Table 32 and Table 33 for thermal data.

Table 32. Thermal Characteristics for 19 mm  19 mm CSP\_BGA Package

| Parameter   | Condition         |   Typical | Unit   |
|-------------|-------------------|-----------|--------|
|  JA 1      | Airflow 2 = 0 m/s |      16.6 | °C/W   |
|             | Airflow 3 = 1 m/s |      14   | °C/W   |
|             | Airflow 3 = 2 m/s |      12.9 | °C/W   |
|  JC        |                   |       6.7 | °C/W   |
|  JB        |                   |       5.8 | °C/W   |

Table 33. Thermal Characteristics for 27 mm  27 mm PBGA Package

| Parameter   | Condition         |   Typical | Unit   |
|-------------|-------------------|-----------|--------|
|  JA 1      | Airflow 2 = 0 m/s |      13.8 | °C/W   |
|             | Airflow 3 = 1 m/s |      11.7 | °C/W   |
|             | Airflow 3 = 2 m/s |      10.8 | °C/W   |
|  JC        |                   |       3.1 | °C/W   |
|  JB        |                   |       5.9 | °C/W   |

## PIN CONFIGURATIONS

The 484-ball CSP\_BGA pin configuration appears in Table 34 and Figure 40. The 625-ball PBGA pin configuration appears in Table 35 and Figure 41.

Table 34. 484-Ball (19 mm  19 mm) CSP\_BGA Pin Assignments

| Pin No.   | Mnemonic    | Pin No.   | Mnemonic    | Pin No.   | Mnemonic   | Pin No.   | Mnemonic   | Pin No.   | Mnemonic   |
|-----------|-------------|-----------|-------------|-----------|------------|-----------|------------|-----------|------------|
| A1        | V SS        | B1        | DATA21      | C1        | DATA23     | D1        | DATA24     | E1        | DATA25     |
| A2        | DATA14      | B2        | DATA18      | C2        | DATA17     | D2        | DATA19     | E2        | DATA22     |
| A3        | DATA11      | B3        | DATA12      | C3        | DATA15     | D3        | DATA16     | E3        | DATA20     |
| A4        | DATA8       | B4        | DATA13      | C4        | DATA9      | D4        | V DD_IO    | E4        | V DD_IO    |
| A5        | DATA4       | B5        | DATA7       | C5        | DATA10     | D5        | V DD       | E5        | V DD       |
| A6        | DATA1       | B6        | DATA5       | C6        | DATA6      | D6        | V DD       | E6        | V DD       |
| A7        | L0DIR       | B7        | DATA2       | C7        | DATA3      | D7        | V DD_IO    | E7        | V DD_IO    |
| A8        | L0CLKIN     | B8        | NC          | C8        | DATA0      | D8        | V DD_IO    | E8        | V DD       |
| A9        | L0DAT6      | B9        | L0DAT7      | C9        | L0CLKOUT   | D9        | V DD_IO    | E9        | V DD       |
| A10       | L0DAT3      | B10       | L0DAT4      | C10       | L0DAT5     | D10       | V DD_IO    | E10       | V DD       |
| A11       | L0DAT1      | B11       | L0DAT0      | C11       | L0DAT2     | D11       | V DD_IO    | E11       | V DD_IO    |
| A12       | V SS        | B12       | V SS        | C12       | LCLK_P     | D12       | V DD_IO    | E12       | V DD       |
| A13       | LCLK_N      | B13       | V DD_A      | C13       | V SS       | D13       | V DD_IO    | E13       | V DD_IO    |
| A14       | V SS_A      | B14       | V SS_A      | C14       | V DD_A     | D14       | V DD_IO    | E14       | V DD       |
| A15       | SCLK_N      | B15       | V SS        | C15       | DS0        | D15       | V DD_IO    | E15       | V DD_IO    |
| A16       | SCLK_P      | B16       | DS1         | C16       | DS2        | D16       | V DD       | E16       | V DD       |
| A17       | CONTROLIMP2 | B17       | CONTROLIMP0 | C17       | V REF      | D17       | V DD_IO    | E17       | V DD_IO    |
| A18       | CONTROLIMP1 | B18       | DMAR2       | C18       | TRST       | D18       | V DD       | E18       | V DD_IO    |
| A19       | RESET       | B19       | DMAR0       | C19       | DMAR3      | D19       | V DD_IO    | E19       | V DD_IO    |
| A20       | DMAR1       | B20       | TMS         | C20       | TCK        | D20       | TDO        | E20       | BM         |
| A21       | EMU         | B21       | TDI         | C21       | IRQ3       | D21       | IRQ2       | E21       | BMS        |
| A22       | V SS        | B22       | IRQ1        | C22       | IRQ0       | D22       | LCLKRAT1   | E22       | LCLKRAT2   |
| F1        | DATA29      | G1        | L3DAT1      | H1        | L3DAT2     | J1        | L3DAT5     | K1        | L3CLKOUT   |
| F2        | DATA30      | G2        | DATA28      | H2        | L3DAT0     | J2        | L3DAT3     | K2        | L3DAT7     |
| F3        | DATA26      | G3        | DATA27      | H3        | DATA31     | J3        | L3DAT4     | K3        | L3DAT6     |
| F4        | V DD_IO     | G4        | V DD        | H4        | V DD       | J4        | V DD_IO    | K4        | V DD_IO    |
| F5        | V DD_IO     | G5        | V DD        | H5        | V DD       | J5        | V DD_IO    | K5        | V DD_IO    |
| F6        | V SS        | G6        | V SS        | H6        | V SS       | J6        | V SS       | K6        | V SS       |
| F7        | V SS        | G7        | V SS        | H7        | V SS       | J7        | V SS       | K7        | V SS       |
| F8        | V SS        | G8        | V SS        | H8        | V SS       | J8        | V SS       | K8        | V SS       |
| F9        | V SS        | G9        | V SS        | H9        | V SS       | J9        | V SS       | K9        | V SS       |
| F10       | V SS        | G10       | V SS        | H10       | V SS       | J10       | V SS       | K10       | V SS       |
| F11       | V SS        | G11       | V SS        | H11       | V SS       | J11       | V SS       | K11       | V SS       |
| F12       | V SS        | G12       | V SS        | H12       | V SS       | J12       | V SS       | K12       | V SS       |
| F13       | V SS        | G13       | V SS        | H13       | V SS       | J13       | V SS       | K13       | V SS       |
| F14       | V SS        | G14       | V SS        | H14       | V SS       | J14       | V SS       | K14       | V SS       |
| F15       | V SS        | G15       | V SS        | H15       | V SS       | J15       | V SS       | K15       | V SS       |
| F16       | V SS        | G16       | V SS        | H16       | V SS       | J16       | V SS       | K16       | V SS       |
| F17       | V DD        | G17       | V SS        | H17       | V SS       | J17       | V SS       | K17       | V SS       |
| F18       | V DD_IO     | G18       | V DD        | H18       | V DD_IO    | J18       | V DD       | K18       | V DD       |
| F19       | V DD_IO     | G19       | V DD_IO     | H19       | V DD_IO    | J19       | V DD_IO    | K19       | V DD_IO    |
| F20       | LCLKRAT0    | G20       | FLAG3       | H20       | FLAG1      | J20       | ID0        | K20       | IOEN       |
| F21       | SCLKFREQ    | G21       | BUSLOCK     | H21       | FLAG2      | J21       | ID2        | K21       | FLYBY      |

## ADSP-TS101S

Table 34. 484-Ball (19 mm  19 mm) CSP\_BGA Pin Assignments (Continued)

| Pin No.   | Mnemonic   | Pin No.   | Mnemonic   | Pin No.   | Mnemonic   | Pin No.   | Mnemonic   | Pin No.   | Mnemonic   |
|-----------|------------|-----------|------------|-----------|------------|-----------|------------|-----------|------------|
| F22       | TMR0E      | G22       | FLAG0      | H22       | ID1        | J22       | MSH        | K22       | WRL        |
| L1        | L3CLKIN    | M1        | L1DAT0     | N1        | L1DAT3     | P1        | L1DAT4     | R1        | L1DAT6     |
| L2        | NC         | M2        | L1DAT2     | N2        | L1DAT5     | P2        | L1CLKOUT   | R2        | DATA32     |
| L3        | L3DIR      | M3        | L1DAT1     | N3        | L1DAT7     | P3        | L1CLKIN    | R3        | DATA33     |
| L4        | V DD_IO    | M4        | V DD_IO    | N4        | V DD_IO    | P4        | V DD_IO    | R4        | V DD_IO    |
| L5        | V DD       | M5        | V SS       | N5        | V DD_IO    | P5        | V DD       | R5        | V DD       |
| L6        | V SS       | M6        | V SS       | N6        | V SS       | P6        | V SS       | R6        | V SS       |
| L7        | V SS       | M7        | V SS       | N7        | V SS       | P7        | V SS       | R7        | V SS       |
| L8        | V SS       | M8        | V SS       | N8        | V SS       | P8        | V SS       | R8        | V SS       |
| L9        | V SS       | M9        | V SS       | N9        | V SS       | P9        | V SS       | R9        | V SS       |
| L10       | V SS       | M10       | V SS       | N10       | V SS       | P10       | V SS       | R10       | V SS       |
| L11       | V SS       | M11       | V SS       | N11       | V SS       | P11       | V SS       | R11       | V SS       |
| L12       | V SS       | M12       | V SS       | N12       | V SS       | P12       | V SS       | R12       | V SS       |
| L13       | V SS       | M13       | V SS       | N13       | V SS       | P13       | V SS       | R13       | V SS       |
| L14       | V SS       | M14       | V SS       | N14       | V SS       | P14       | V SS       | R14       | V SS       |
| L15       | V SS       | M15       | V SS       | N15       | V SS       | P15       | V SS       | R15       | V SS       |
| L16       | V SS       | M16       | V SS       | N16       | V SS       | P16       | V SS       | R16       | V SS       |
| L17       | V SS       | M17       | V SS       | N17       | V SS       | P17       | V SS       | R17       | V SS       |
| L18       | V DD_IO    | M18       | V DD_IO    | N18       | V DD       | P18       | V DD_IO    | R18       | V DD       |
| L19       | V DD_IO    | M19       | V DD       | N19       | V DD_IO    | P19       | V DD_IO    | R19       | V DD_IO    |
| L20       | BRST       | M20       | HDQM       | N20       | SDWE       | P20       | ADDR31     | R20       | ADDR28     |
| L21       | WRH        | M21       | MS0        | N21       | MSSD       | P21       | RAS        | R21       | ADDR29     |
| L22       | RD         | M22       | MS1        | N22       | LDQM       | P22       | SDCKE      | R22       | CAS        |
| T1        | L1DIR      | U1        | NC         | V1        | DATA34     | W1        | DATA40     | Y1        | DATA42     |
| T2        | DATA36     | U2        | DATA38     | V2        | DATA41     | W2        | DATA43     | Y2        | DATA45     |
| T3        | DATA37     | U3        | DATA39     | V3        | DATA35     | W3        | DATA46     | Y3        | L2DAT5     |
| T4        | V DD_IO    | U4        | V DD_IO    | V4        | V DD_IO    | W4        | V DD_IO    | Y4        | DATA48     |
| T5        | V DD       | U5        | V DD       | V5        | V DD       | W5        | V DD_IO    | Y5        | DATA52     |
| T6        | V SS       | U6        | V SS       | V6        | V DD       | W6        | V DD_IO    | Y6        | DATA58     |
| T7        | V SS       | U7        | V SS       | V7        | V DD_IO    | W7        | V DD_IO    | Y7        | DATA60     |
| T8        | V SS       | U8        | V SS       | V8        | V DD       | W8        | V DD_IO    | Y8        | DATA63     |
| T9        | V SS       | U9        | V SS       | V9        | V DD       | W9        | V DD_IO    | Y9        | L2DAT4     |
| T10       | V SS       | U10       | V SS       | V10       | V DD       | W10       | V DD_IO    | Y10       | L2CLKOUT   |
| T11       | V SS       | U11       | V SS       | V11       | V DD       | W11       | V DD_IO    | Y11       | NC         |
| T12       | V SS       | U12       | V SS       | V12       | V DD_IO    | W12       | V DD_IO    | Y12       | BR4        |
| T13       | V SS       | U13       | V SS       | V13       | V DD       | W13       | V DD_IO    | Y13       | ACK        |
| T14       | V SS       | U14       | V SS       | V14       | V SS       | W14       | V DD_IO    | Y14       | CPA        |
| T15       | V SS       | U15       | V SS       | V15       | V DD       | W15       | V DD_IO    | Y15       | ADDR0      |
| T16       | V SS       | U16       | V SS       | V16       | V DD       | W16       | V DD_IO    | Y16       | BR7        |
| T17       | V SS       | U17       | V SS       | V17       | V DD       | W17       | V DD_IO    | Y17       | HBG        |
| T18       | V DD       | U18       | V DD       | V18       | V DD       | W18       | V DD_IO    | Y18       | ADDR1      |
| T19       | V DD_IO    | U19       | V DD_IO    | V19       | V DD_IO    | W19       | V DD_IO    | Y19       | ADDR11     |
| T20       | ADDR23     | U20       | ADDR30     | V20       | ADDR14     | W20       | ADDR12     | Y20       | ADDR21     |
| T21       | ADDR25     | U21       | ADDR22     | V21       | ADDR19     | W21       | ADDR17     | Y21       | ADDR18     |
| T22       | ADDR27     | U22       | ADDR26     | V22       | ADDR24     | W22       | ADDR20     | Y22       | ADDR16     |

Table 34. 484-Ball (19 mm  19 mm) CSP\_BGA Pin Assignments (Continued)

| Pin No.   | Mnemonic   | Pin No.   | Mnemonic   | Pin No.   | Mnemonic   | Pin No.   | Mnemonic   | Pin No.   | Mnemonic   |
|-----------|------------|-----------|------------|-----------|------------|-----------|------------|-----------|------------|
| AA1       | DATA44     | AA10      | L2DAT3     | AA19      | SDA10      | AB6       | DATA62     | AB15      | BR5        |
| AA2       | DATA50     | AA11      | L2DAT7     | AA20      | ADDR10     | AB7       | L2DAT1     | AB16      | BOFF       |
| AA3       | DATA47     | AA12      | BR2        | AA21      | ADDR13     | AB8       | L2DAT2     | AB17      | ADDR3      |
| AA4       | DATA49     | AA13      | BR6        | AA22      | ADDR15     | AB9       | L2DAT6     | AB18      | ADDR4      |
| AA5       | DATA51     | AA14      | HBR        | AB1       | V SS       | AB10      | L2CLKIN    | AB19      | ADDR6      |
| AA6       | DATA54     | AA15      | DPA        | AB2       | DATA53     | AB11      | L2DIR      | AB20      | ADDR7      |
| AA7       | DATA57     | AA16      | ADDR2      | AB3       | DATA55     | AB12      | BR0        | AB21      | ADDR9      |
| AA8       | DATA61     | AA17      | ADDR5      | AB4       | DATA56     | AB13      | BR1        | AB22      | V SS       |
| AA9       | L2DAT0     | AA18      | ADDR8      | AB5       | DATA59     | AB14      | BR3        |           |            |

<!-- image -->

Figure 40. 484-Ball CSP\_BGA Pin Configurations (Top View, Summary)

## ADSP-TS101S

## ADSP-TS101S

Table 35. 625-Ball (27 mm  27 mm) PBGA Pin Assignments

| Pin No.   | Mnemonic       | Pin No.   | Mnemonic      | Pin No.   | Mnemonic    | Pin No.   | Mnemonic       | Pin No.   | Mnemonic   |
|-----------|----------------|-----------|---------------|-----------|-------------|-----------|----------------|-----------|------------|
| A1        | V SS           | B1        | V SS          | C1        | V SS        | D1        | V SS           | E1        | DATA23     |
| A2        | DATA17         | B2        | V SS          | C2        | DATA20      | D2        | V SS           | E2        | DATA22     |
| A3        | DATA14         | B3        | DATA16        | C3        | DATA21      | D3        | DATA19         | E3        | V SS       |
| A4        | DATA11         | B4        | DATA13        | C4        | DATA18      | D4        | V DD_IO        | E4        | V DD_IO    |
| A5        | DATA9          | B5        | DATA12        | C5        | DATA15      | D5        | V DD_IO        | E5        | V DD_IO    |
| A6        | DATA7          | B6        | DATA10        | C6        | DATA8       | D6        | V DD_IO        | E6        | V DD       |
| A7        | DATA4          | B7        | DATA5         | C7        | DATA6       | D7        | V DD_IO        | E7        | V DD       |
| A8        | DATA1          | B8        | DATA2         | C8        | DATA3       | D8        | V DD_IO        | E8        | V DD_IO    |
| A9        | L0DIR          | B9        | NC            | C9        | DATA0       | D9        | V DD_IO        | E9        | V DD_IO    |
| A10       | L0DAT7         | B10       | L0CLKOUT      | C10       | L0CLKIN     | D10       | V DD_IO        | E10       | V DD       |
| A11       | L0DAT4         | B11       | L0DAT5        | C11       | L0DAT6      | D11       | V DD_IO        | E11       | V DD       |
| A12       | L0DAT1         | B12       | L0DAT2        | C12       | L0DAT3      | D12       | V DD_IO        | E12       | V DD_IO    |
| A13       | LCLK_N         | B13       | V SS          | C13       | L0DAT0      | D13       | V DD_IO        | E13       | V DD_IO    |
| A14       | LCLK_P         | B14       | V SS          | C14       | V SS_A      | D14       | V DD_IO        | E14       | V DD       |
| A15       | V DD_A         | B15       | V SS_A        | C15       | V DD_A      | D15       | V DD_IO        | E15       | V DD       |
| A16       | SCLK_N         | B16       | SCLK_P        | C16       | V SS        | D16       | V DD_IO        | E16       | V DD_IO    |
| A17       | V REF          | B17       | V SS          | C17       | DS0         | D17       | V DD_IO        | E17       | V DD_IO    |
| A18       | DS1            | B18       | DS2           | C18       | CONTROLIMP0 | D18       | V DD_IO        | E18       | V DD       |
| A19       | CONTROLIMP2    | B19       | CONTROLIMP1   | C19       | DMAR1       | D19       | V DD_IO        | E19       | V DD       |
| A20       | RESET          | B20       | DMAR3         | C20       | TDI         | D20       | V DD_IO        | E20       | V DD_IO    |
| A21       | DMAR2          | B21       | DMAR0         | C21       | IRQ2        | D21       | V DD_IO        | E21       | V DD_IO    |
| A22       | EMU            | B22       | IRQ3          | C22       | LCLKRAT0    | D22       | V DD_IO        | E22       | V DD_IO    |
| A23       | TRST           | B23       | TCK           | C23       | LCLKRAT1    | D23       | BMS            | E23       | V SS       |
| A24       | TMS            | B24       | IRQ1          | C24       | IRQ0        | D24       | V SS           | E24       | SCLKFREQ   |
| A25       | V SS           | B25       | TDO           | C25       | V SS        | D25       | V SS           | E25       | LCLKRAT2   |
| F1        | DATA26         | G1        | DATA29        | H1        | L3DAT0      | J1        | L3DAT3         | K1        | L3DAT6     |
| F2        | DATA25         | G2        | DATA28        | H2        | DATA31      | J2        | L3DAT2         | K2        | L3DAT5     |
| F3        |                |           | DATA27        | H3        | DATA30      |           |                | K3        | L3DAT4     |
| F4        | DATA24 V DD_IO | G3 G4     | V DD_IO       | H4        | V DD_IO     | J3 J4     | L3DAT1 V DD_IO | K4        | V DD_IO    |
| F5        | V DD_IO        | G5        | V DD          | H5        | V DD        | J5        | V DD_IO        | K5        | V DD_IO    |
| F6        | V DD           | G6        | V DD          | H6        | V DD        | J6        | V DD           | K6        | V DD       |
| F7        | V DD           | G7        | V SS          | H7        | V SS        | J7        | V SS           | K7        | V SS       |
| F8 F9     | V DD V DD      | G8 G9     | V SS V SS     | H8 H9     | V SS V SS   | J8 J9     | V SS V SS      | K8 K9     | V SS V SS  |
| F10 F11   | V DD           | G10       | V SS V        | H10       | V SS        | J10       | V SS V         | K10 K11   | V SS V SS  |
| F12       |                |           | SS            |           |             | J11       | SS             |           |            |
| F13       | V DD V         | G11 G13   | V V           | H11 H13   | V SS V      | J13       | V SS V         | K13       | V SS       |
|           | V DD           | G12       | SS            | H12       | V SS        | J12       |                | K12       | V SS       |
|           | DD DD          |           | SS            |           | SS V SS     | J14       | SS V SS        | K14       | V SS       |
| F14       | V              | G14       | V SS          | H14       |             |           |                |           |            |
| F15       | V DD           | G15       | V SS          | H15       | V SS        | J15       | V SS           | K15       | V SS       |
| F16       | V DD           | G16       | V SS          | H16       | V SS        | J16       | V SS           | K16       | V SS       |
| F17       | V DD           | G17       | V SS          | H17       | V SS        | J17       | V SS           | K17       | V SS       |
| F18 F19   | V DD V DD      | G18       | V SS V DD     | H18       | V SS        | J18       | V SS           | K18 K20   | V SS       |
|           |                | G19       | V SS          | H19       | V SS        | J19       | V SS           | K19       | V SS       |
| F20       | V DD           | G20       |               | H20       | V DD        | J20       | V DD           |           | V DD       |
| F21       | V DD           | G21       | V DD          | H21       | V DD_IO     | J21       | V DD_IO        | K21       | V DD       |
| F22       | V DD_IO        | G22 G23   | V DD_IO FLAG3 | H22       | V DD_IO     | J22       | V DD_IO        | K22 K23   | V DD_IO NC |
| F23       | BM             |           |               | H23       | FLAG0       | J23       | ID0 NC         |           |            |
| F24       | BUSLOCK        | G24       | FLAG2         | H24       | ID2         | J24       |                | K24       | NC         |
| F25       | TMR0E          | G25       | FLAG1         | H25       | ID1         | J25       | NC             | K25       | NC         |

Table 35. 625-Ball (27 mm  27 mm) PBGA Pin Assignments (Continued)

| Pin No.   | Mnemonic      | Pin No.   | Mnemonic   | Pin No.   | Mnemonic       | Pin No.   | Mnemonic       | Pin No.   | Mnemonic   |
|-----------|---------------|-----------|------------|-----------|----------------|-----------|----------------|-----------|------------|
| L1        | L3CLKIN       | M1        | L1DAT0     | N1        | L1DAT2         | P1        | L1DAT5         | R1        | L1CLKOUT   |
| L2        | L3CLKOUT      | M2        | NC         | N2        | NC             | P2        | L1DAT4         | R2        | L1DAT7     |
| L3        | L3DAT7        | M3        | L3DIR      | N3        | L1DAT1         | P3        | L1DAT3         | R3        | L1DAT6     |
| L4        | V DD_IO       | M4        | V DD_IO    | N4        | V DD_IO        | P4        | V DD_IO        | R4        | V DD_IO    |
| L5        | V DD          | M5        | V DD       | N5        | V DD_IO        | P5        | V DD_IO        | R5        | V DD       |
| L6        | V DD          | M6        | V DD       | N6        | V DD           | P6        | V DD           | R6        | V DD       |
| L7        | V SS          | M7        | V SS       | N7        | V SS           | P7        | V SS           | R7        | V SS       |
| L8        | V SS          | M8        | V SS       | N8        | V SS           | P8        | V SS           | R8        | V SS       |
| L9        | V SS          | M9        | V SS       | N9        | V SS           | P9        | V SS           | R9        | V SS       |
| L10       | V SS          | M10       | V SS       | N10       | V SS           | P10       | V SS           | R10       | V SS       |
| L11       | V SS          | M11       | V SS       | N11       | V SS           | P11       | V SS           | R11       | V SS       |
| L12       | V SS          | M12       | V SS       | N12       | V SS           | P12       | V SS           | R12       | V SS       |
| L13       | V SS          | M13       | V SS       | N13       | V SS           | P13       | V SS           | R13       | V SS       |
| L14       | V SS          | M14       | V SS       | N14       | V SS           | P14       | V SS           | R14       | V SS       |
| L15       | V SS          | M15       | V SS       | N15       | V SS           | P15       | V SS           | R15       | V SS       |
| L16       | V SS          | M16       | V SS       | N16       | V SS           | P16       | V SS           | R16       | V SS       |
| L17       | V SS          | M17       | V SS       | N17       | V SS           | P17       | V SS           | R17       | V SS       |
| L18       | V SS          | M18       | V SS       | N18       | V SS           | P18       | V SS           | R18       | V SS       |
| L19       | V SS          | M19       | V SS       | N19       | V SS           | P19       | V SS           | R19       | V SS       |
| L20       | V DD          | M20       | V DD       | N20       | V DD           | P20       | V DD           | R20       | V DD       |
| L21       | V DD          | M21       | V DD_IO    | N21       | V DD_IO        | P21       | V DD           | R21       | V DD       |
| L22       | V DD_IO       | M22       | V DD_IO    | N22       | V DD_IO        | P22       | V DD_IO        | R22       | V DD_IO    |
| L23       | NC            | M23       | IOEN       | N23       | WRH            | P23       | MS1            | R23       | LDQM       |
| L24       | NC            | M24       | MSH        | N24       | WRL            | P24       | MS0            | R24       | NC         |
| L25       | FLYBY         | M25       | BRST       | N25       | RD             | P25       | HDQM           | R25       | MSSD       |
| T1        | NC            | U1        | DATA34     | V1        | DATA37         | W1        | DATA40         | Y1        | DATA43     |
| T2        | L1DIR         | U2        | DATA33     | V2        | DATA36         | W2        | DATA39         | Y2        | DATA42     |
| T3        | L1CLKIN       | U3        | DATA32     | V3        | DATA35         | W3        | DATA38         | Y3        | DATA41     |
| T4        | V DD_IO       | U4        | V DD_IO    | V4        | V DD_IO        | W4        | V DD_IO        | Y4        | V DD_IO    |
|           | DD V DD       |           | DD_IO V DD |           | DD_IO DD       | W6        | DD             |           | DD         |
| T6        |               | U6        |            | V6        | V              |           | V DD           | Y6        | V DD       |
| T7        | V SS          | U7        | V SS       | V7        | V SS           | W7        | V SS           | Y7        | V DD       |
| T8 T9     | V SS          | U8        | V SS       | V8        | V SS           | W8        | V SS           | Y8 Y9     | V DD V DD  |
| T10       | V SS V SS     | U9 U10    | V SS V SS  | V9 V10    | V SS V SS      | W9 W10    | V SS V SS      | Y10       | V DD V     |
|           |               |           |            |           | SS             | W11       | SS             |           | DD         |
| T11       | V SS          | U11       | V SS       | V11       | V              |           | V              | Y11       | V DD       |
| T12       | V SS          | U12       | V SS       | V12       | V SS           | W12       | V SS           | Y12       |            |
| T13 T14   | V SS          | U13       | V SS       | V13       | V SS           | W13       | V SS           | Y13       | V DD       |
|           | V SS          | U14       | V SS       | V14       | V SS           | W14       | V SS           | Y14       | V DD       |
| T15       | V SS          | U15       | V SS       | V15       | V SS           | W15       | V SS           | Y15       | V DD       |
| T16       | V SS          | U16       | V SS       | V16       | V SS           | W16       | V SS           | Y16       | V DD       |
| T17       | V SS          | U17       | V SS       | V17       | V SS           | W17       | V SS           | Y17       | V DD       |
| T18       | V SS          | U18       | V SS       | V18       | V SS           | W18       | V SS           | Y18       | V DD       |
| T19       | V SS          | U19       | V SS       | V19       | V SS           | W19       | V              | Y19       | V DD       |
| T20       | V DD          | U20       | V DD       | V20       | V DD           | W20       | SS V DD        | Y20       | V DD       |
| T21       | V DD_IO       | U21       | V DD_IO    | V21       | V DD           | W21       | V              | Y21       | V DD_IO    |
| T22       |               | U22       | V DD_IO    |           |                |           | DD             | Y22       | V DD_IO    |
| T23       | V DD_IO SDCKE | U23       | CAS        | V22 V23   | V DD_IO ADDR31 | W22 W23   | V DD_IO ADDR28 | Y23       | ADDR26     |
| T24       | NC            | U24       | NC         | V24       | ADDR30         | W24       | NC             | Y24       | ADDR25     |
| T25       | SDWE          | U25       | RAS        | V25       | ADDR29         | W25       | ADDR27         | Y25       | ADDR24     |

## ADSP-TS101S

## ADSP-TS101S

Figure 41. 625-Ball PBGA Pin Configurations (Top View, Summary)

| Pin No.   | Mnemonic   | Pin No.   | Mnemonic   | Pin No.   | Mnemonic   | Pin No.   | Mnemonic   | Pin No.   | Mnemonic   |
|-----------|------------|-----------|------------|-----------|------------|-----------|------------|-----------|------------|
| AA1       | DATA46     | AB1       | DATA49     | AC1       | V SS       | AD1       | V SS       | AE1       | V SS       |
| AA2       | DATA45     | AB2       | DATA48     | AC2       | V SS       | AD2       | V SS       | AE2       | V SS       |
| AA3       | DATA44     | AB3       | DATA47     | AC3       | DATA50     | AD3       | V SS       | AE3       | V SS       |
| AA4       | V DD_IO    | AB4       | V DD_IO    | AC4       | DATA51     | AD4       | DATA52     | AE4       | DATA53     |
| AA5       | V DD_IO    | AB5       | V DD_IO    | AC5       | DATA54     | AD5       | DATA55     | AE5       | DATA56     |
| AA6       | V DD_IO    | AB6       | V DD_IO    | AC6       | DATA57     | AD6       | DATA58     | AE6       | DATA59     |
| AA7       | V DD       | AB7       | V DD_IO    | AC7       | DATA60     | AD7       | DATA61     | AE7       | DATA62     |
| AA8       | V DD       | AB8       | V DD_IO    | AC8       | DATA63     | AD8       | L2DAT0     | AE8       | L2DAT1     |
| AA9       | V DD_IO    | AB9       | V DD_IO    | AC9       | L2DAT2     | AD9       | L2DAT3     | AE9       | L2DAT4     |
| AA10      | V DD_IO    | AB10      | V DD_IO    | AC10      | L2DAT5     | AD10      | L2DAT6     | AE10      | L2DAT7     |
| AA11      | V DD       | AB11      | V DD_IO    | AC11      | L2CLKOUT   | AD11      | L2CLKIN    | AE11      | L2DIR      |
| AA12      | V DD       | AB12      | V DD_IO    | AC12      | NC         | AD12      | BR0        | AE12      | BR1        |
| AA13      | V DD_IO    | AB13      | V DD_IO    | AC13      | BR2        | AD13      | BR3        | AE13      | BR4        |
| AA14      | V DD_IO    | AB14      | V DD_IO    | AC14      | BR5        | AD14      | BR6        | AE14      | BR7        |
| AA15      | V DD       | AB15      | V DD_IO    | AC15      | ACK        | AD15      | HBR        | AE15      | BOFF       |
| AA16      | V DD       | AB16      | V DD_IO    | AC16      | HBG        | AD16      | CPA        | AE16      | DPA        |
| AA17      | V DD_IO    | AB17      | V DD_IO    | AC17      | ADDR0      | AD17      | ADDR1      | AE17      | ADDR2      |
| AA18      | V DD_IO    | AB18      | V DD_IO    | AC18      | ADDR3      | AD18      | ADDR4      | AE18      | ADDR5      |
| AA19      | V DD       | AB19      | V DD_IO    | AC19      | ADDR6      | AD19      | ADDR7      | AE19      | ADDR8      |
| AA20      | V DD       | AB20      | V DD_IO    | AC20      | ADDR9      | AD20      | SDA10      | AE20      | ADDR10     |
| AA21      | V DD_IO    | AB21      | V DD_IO    | AC21      | ADDR11     | AD21      | ADDR12     | AE21      | ADDR13     |
| AA22      | V DD_IO    | AB22      | V DD_IO    | AC22      | ADDR14     | AD22      | ADDR15     | AE22      | V SS       |
| AA23      | ADDR23     | AB23      | ADDR20     | AC23      | V SS       | AD23      | V SS       | AE23      | V SS       |
| AA24      | ADDR22     | AB24      | ADDR19     | AC24      | ADDR17     | AD24      | V SS       | AE24      | V SS       |
| AA25      | ADDR21     | AB25      | ADDR18     | AC25      | ADDR16     | AD25      | V SS       | AE25      | V SS       |

Table 35. 625-Ball (27 mm  27 mm) PBGA Pin Assignments (Continued)

<!-- image -->

## OUTLINE DIMENSIONS

The ADSP-TS101S is available in a 19 mm × 19 mm, 484-ball CSP\_BGA package with 22 rows of balls (BC-484-1); the DSP also is available in a 27 mm × 27 mm, 625-ball PBGA package with 25 rows of balls (B-625-2).

<!-- image -->

<!-- image -->

<!-- image -->

0.45

* COMPLIANT TO JEDEC STANDARDS MO-192-AAG-1 WITH EXCEPTION TO PACKAGE HEIGHT AND THICKNESS

Figure 42. 484-Ball Chip Scale Package Ball Grid Array [CSP\_BGA] (BC-484-1) Dimensions shown in millimeters

## ADSP-TS101S

<!-- image -->

COMPLIANT TO JEDEC STANDARDS MO-034-AAL-2

Figure 43. 625-Ball Plastic Ball Grid Array [PBGA] (B-625-2) Dimensions shown in millimeters

## SURFACE-MOUNT DESIGN

The following table is provided as an aide to PCB design. For industry-standard design recommendations, refer to IPC-7351, Generic Requirements for Surface-Mount Design and Land Pattern Standard .

| Package                 | Ball Attach Type          | Solder Mask Opening   | Ball Pad Size   |
|-------------------------|---------------------------|-----------------------|-----------------|
| 625-ball (27 mm)PBGA    | Solder Mask Defined (SMD) | 0.45 mmdiameter       | 0.60 mmdiameter |
| 484-ball (19 mm)CSP_BGA | Solder Mask Defined (SMD) | 0.40 mmdiameter       | 0.53 mmdiameter |

## ORDERING GUIDE

| PartNumber 1, 2, 3, 4   | Temperature Range (Case)   | Core Clock (CCLK) Rate 5   | On-Chip SRAM   | Package Description                                   | Package Option   |
|-------------------------|----------------------------|----------------------------|----------------|-------------------------------------------------------|------------------|
| ADSP-TS101SAB1Z000      | -40°C to +85°C             | 250MHz                     | 6MBit          | 625-Ball Plastic Ball Grid Array (PBGA)               | B-625-2 6        |
| ADSP-TS101SAB1Z100      | -40°C to +85°C             | 300MHz                     | 6MBit          | 625-Ball Plastic Ball Grid Array (PBGA)               | B-625-2 6        |
| ADSP-TS101SAB2Z000      | -40°C to +85°C             | 250MHz                     | 6MBit          | 484-Ball Chip Scale Package Ball Grid Array (CSP_BGA) | BC-484-1 7       |
| ADSP-TS101SAB2Z100      | -40°C to +85°C             | 300MHz                     | 6MBit          | 484-Ball Chip Scale Package Ball Grid Array (CSP_BGA) | BC-484-1 7       |

<!-- image -->