<!-- lastmod 2025-09-05 -->
## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

<!-- image -->

## Preliminary Technical Data

## ADSP-219x DSP CORE FEATURES

6.25 ns Instruction Cycle Time (Internal), for up to 160 MIPS Sustained Performance

ADSP-218x Family Code Compatible with the Same Easy -to-Use Algebraic Syntax Single-Cycle Instruction Execution

Up to 16M words of Addressable Memory Space with 24 Bits of Addressing Width

Dual Purpose Program Memory for Both Instruction and Data Storage

## DSP Microcomputer

ADSP-2196

Independent ALU, Multiplier/Accumulator, and Barrel Shifter Computational Units with Dual 40-bit Accumulators

Single-Cycle Context Switch between Two Sets of Computational and DAG Registers

Parallel Execution of Computation and Memory Instructions

Pipelined Architecture Supports Efficient Code

Execution at Speeds up to 160 MIPS

Register File Computations with All Nonconditional,

- Fully T ransparent Instruction Cache Allows Dual Operand Fetches in Every Instruction Cycle Unified Memory Space Permits Flexible Address Generation, Using Two Independent DAG Units

Nonparallel Computational Instructions

Powerful Program Sequencer Provides Zero-Overhead Looping and Conditional Instruction Execution Architectural Enhancements for Compiled C Code Efficiency

## FUNCTIONAL BLOCK DIAGRAM

REV. PrA

<!-- image -->

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## ADSP-2196

For current information contact Analog Devices at 800/262-5643

## ADSP-2196 DSP FEATURES

16K Words of On-Chip RAM, Configured as 8K Words On-Chip 24-bit RAM and 8K Words On-Chip 16-bit RAM 16K Words of On-Chip 24-bit ROM

Architecture Enhancements beyond ADSP-218x Family are Supported with Instruction Set Extensions for Added Registers, Ports, and Peripherals

Flexible Power Management with Selectable Power-Down and Idle Modes

Programmable PLL Supports 1 × to 32 × Frequency Multiplication, Enabling Full-Speed Operation from Low-Speed Input Clocks

2.5 V Internal Operation Supports 3.3 V Compliant I/O Three Full-Duplex Multichannel Serial Ports, Each

Supporting H.100 Standard with A-Law and 𝛍 -Law Companding in Hardware

Two SPI-Compatible Ports with DMA Capability One UART Port with DMA Capability

16 General-Purpose I/O Pins (Eight Dedicated/Eight Programmable from the External Memory Interface) with Integrated Interrupt Support

Three Programmable 32-Bit Interval Timers with Pulsewidth Counter, PWM Generation, and Externally Clocked Timer Capabilities

Up to 11 DMA Channels can be Active at any Given Time Host Port With DMA Capability for Efficient, Glueless Host Interface (16-Bit Transfers)

## September 2001

External Memory Interface Features Include:

Direct Access from the DSP to External Memory for Data and Instructions.

Support for DMA Block Transfers to/from External Memory.

Separate Peripheral Memory Space with Parallel Support for 224K External 16-Bit Registers.

Four General-Purpose Memory Select Signals that Provide Access to Separate Banks of External Memory. Bank Boundaries and Size Are UserProgrammable.

Programmable Waitstate Logic with ACK Signal and Separate Read and Write Wait Counts. Wait Mode Completion Supports All Combinations of ACK and/or Wait Count.

I/O Clock Rate Can Be Set to the Peripheral Clock Rate Divided by 1, 2, 4, 16, or 32 to Allow Interface to Slow Memory Devices.

Address Translation and Data Word Packing is Provided to Support an 8- or 16-Bit External Data Bus.

Programmable Read and Write Strobe Polarity. Separate Configuration Registers for the Four General-Purpose, Peripheral, and Boot Memory Spaces.

Bus Request and Grant Signals Support the Use of the External Bus by an External Device.

Boot Methods Include Booting Through External Memory Interface, SPI Ports, UART Port, or Host Interface

IEEE JTAG Standard 1149.1 Test Access Port Supports On-Chip Emulation and System Debugging

144-Lead LQFP Package (20 × 20 × 1.4 mm) and 144-Lead Mini-BGA Package (10 × 10 × 1.25 mm)

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## September 2001

For current information contact Analog Devices at 800/262-5643

## TABLE OF CONTENTS

| ADSP-219x dSP Core Features . . . . . . . . . . . . . . . .                                                                   | . . 1     |
|-------------------------------------------------------------------------------------------------------------------------------|-----------|
| Functional Block Diagram . . . . . . . . . . . . . . . . . .                                                                  | . . 1     |
| ADSP-2196 DSP Features . . . . . . . . . . . . . . . . . .                                                                    | . . 2     |
| General Note . . . . . . . . . . . . . . . . . . . . . . . . .                                                                | . . 4     |
| General Description . . . . . . . . . . . . . . . . . . . . . . .                                                             | . . 4     |
| DSP Core Architecture . . . . . . . . . . . . . . . . .                                                                       | . . 4     |
| DSP Peripherals Architecture . . . . . . . . . . . .                                                                          | . . 5     |
| Memory Architecture . . . . . . . . . . . . . . . . . .                                                                       | . . 6     |
| Internal (On-Chip) Memory . . . . . . . . . . . . .                                                                           | . . 6     |
| Internal On-ChipROM . . . . . . . . . . . . . . . . .                                                                         | . . 6     |
| On-Chip Memory Security . . . . . . . . . . . . . .                                                                           | . . 7     |
| External (Off-Chip) Memory . . . . . . . . . . . . .                                                                          | . . 7     |
| External Memory Space . . . . . . . . . . . . . . . . .                                                                       | . . 7     |
| I/O Memory Space . . . . . . . . . . . . . . . . . . . .                                                                      | . . 7     |
| Boot Memory Space . . . . . . . . . . . . . . . . . . .                                                                       | . . 7     |
| Interrupts . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                              | . . 8     |
| DMAController . . . . . . . . . . . . . . . . . . . . . .                                                                     | . 10      |
| Host Port . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                             | . 10      |
| Host Port Acknowledge (HACK) Modes . . . .                                                                                    | . 10      |
| Host Port Chip Selects . . . . . . . . . . . . . . . . .                                                                      | . 11      |
| DSP Serial Ports (SPORTs) . . . . . . . . . . . . .                                                                           | . 11      |
| Serial Peripheral Interface (SPI) Ports . . . . . .                                                                           | . 12      |
| UARTPort . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                  | . 12      |
| Programmable Flag (PFx) Pins . . . . . . . . . . .                                                                            | . 13      |
| Low Power Operation . . . . . . . . . . . . . . . . . .                                                                       | . 13      |
| Idle Mode . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                               | . 13      |
| Power-down Core Mode . . . . . . . . . . . . . . . .                                                                          | . 13      |
| Power-Down Core/Peripherals Mode . . . . . . .                                                                                | . 13      |
| Power-Down All Mode . . . . . . . . . . . . . . . . .                                                                         | . 14      |
| Clock Signals . . . . . . . . . . . . . . . . . . . . . . . . .                                                               | . 14      |
| Reset . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                           | . 14      |
| Power Supplies . . . . . . . . . . . . . . . . . . . . . . .                                                                  | . 15      |
| Booting Modes . . . . . . . . . . . . . . . . . . . . . . .                                                                   | . 15      |
| Bus Request and Bus Grant . . . . . . . . . . . . . .                                                                         | . 16      |
| Instruction Set Description . . . . . . . . . . . . . .                                                                       | . 16      |
| Development Tools . . . . . . . . . . . . . . . . . . . .                                                                     | . 16      |
| Designing an Emulator-Compatible DSP Board (Target) . . . . . . . . . . . . . . . . . . . . . . . . .                         | . 17      |
| Target Board Header . . . . . . . . . . . . . . . . . . .                                                                     | . 17      |
| JTAG Emulator Pod Connector . . . . . . . . . .                                                                               | . 18      |
| Design-for-Emulation Circuit Information . . .                                                                                | . 18      |
| Additional Information . . . . . . . . . . . . . . . . . Pin Descriptions . . . . . . . . . . . . . . . . . . . . . . . . . . | . 18 . 18 |

Specifications . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  22

Recommended Operating Conditions     . . . . . . . . . . 22

Electrical Characteristics    . . . . . . . . . . . . . . . . . . . .  22

ABSOLUTE MAXIMUM RATINGS  . . . . . . . 24

ESD SENSITIVITY . . . . . . . . . . . . . . . . . . . . . 24

Timing Specifications   . . . . . . . . . . . . . . . . . . . . . . .  24

Clock In and Clock Out Cycle Timing   . . . . . . . 25

Programmable Flags Cycle Timing  . . . . . . . . . . 26

Timer PWM\_OUT Cycle Timing . . . . . . . . . . . 27

External Port Write Cycle Timing . . . . . . . . . . . 28

External Port Read Cycle Timing  . . . . . . . . . . . 30

External Port Bus Request and Grant Cycle

Timing . . . . . . . . . . . . . . . . . . . . . . . . . . . .  32

Host Port ALE Mode Write Cycle Timing   . . . . 34

Host Port ACC Mode Write Cycle Timing  . . . . 36

Host Port ALE Mode Read Cycle Timing . . . . . 38

Host Port ACC Mode Read Cycle Timing   . . . . 40

Serial Port (SPORT) Clocks and Data Timing  . 42

Serial Port (SPORT) Frame Synch Timing  . . . . 44

Serial Peripheral Interface (SPI) Port-Master

Timing . . . . . . . . . . . . . . . . . . . . . . . . . . . .  46

Serial Peripheral Interface (SPI) Port-Slave

Timing . . . . . . . . . . . . . . . . . . . . . . . . . . . .  48

Universal Asynchronous Receiver-Transmitter

(UART) Port-Receive and Transmit

Timing . . . . . . . . . . . . . . . . . . . . . . . . . . . .  50

JTAG Test And Emulation Port Timing  . . . . . . 51

Output Drive Currents  . . . . . . . . . . . . . . . . . . . 52

Power Dissipation  . . . . . . . . . . . . . . . . . . . . . . .  52

Test Conditions   . . . . . . . . . . . . . . . . . . . . . . . .  54

Output Disable Time   . . . . . . . . . . . . . . . . . . . . 54

Output Enable Time . . . . . . . . . . . . . . . . . . . . . 54

Example System Hold Time Calculation . . . . . . 55

Capacitive Loading  . . . . . . . . . . . . . . . . . . . . . . 55

Environmental Conditions   . . . . . . . . . . . . . . . . 55

Thermal Characteristics   . . . . . . . . . . . . . . . . . . 55

ADSP-2196 144-Lead LQFP Pinout . . . . . . . . . 58

ADSP-2196 144-Lead Mini-BGA Pinout  . . . . . 62

144-Lead Metric Thin Plastic Quad Flatpack

(LQFP) (ST-144)   . . . . . . . . . . . . . . . . . . . 67

144-Ball Mini-BGA (CA-144) . . . . . . . . . . . . . . . . . 67

ADSP-2196

## ADSP-2196

General Note

This data sheet provides preliminary information for the ADSP-2196 Digital Signal Processor.

## GENERAL DESCRIPTION

The ADSP-2196 DSP is a single-chip microcomputer optimized for digital  signal  processing (DSP)  and other  high speed numeric processing applications.

The ADSP-2196 combines the ADSP-219x family base architecture (three computational units, two data address generators, and a program sequencer) with three serial ports, two SPI-compatible ports, one UART port, a DMA controller, three programmable timers, general-purpose Programmable Flag pins, extensive interrupt capabilities, and on-chip program and data memory spaces.

The ADSP-2196 architecture is code-compatible with ADSP-218x family DSPs. Although the architectures are compatible, the ADSP-2196 architecture has a number of enhancements over the ADSP-218x architecture. The enhancements to computational units, data address generators, and program sequencer make the ADSP-2196 more flexible and even easier to program than the ADSP-218x DSPs.

Indirect addressing options provide addressing flexibilitypremodify with no update, pre- and post-modify by an immediate 8-bit, two's-complement value and base address registers for easier implementation of circular buffering.

The ADSP-2196 integrates 32K words of on-chip memory configured as 8K words (24-bit) of program RAM, 8K words (16-bit) of data RAM, and 16K words (24-bit) of program ROM. Power-down circuitry is also provided to meet the low power needs of battery-operated portable equipment. The ADSP-2196 is available in 144-lead LQFP and mini-BGA packages.

Fabricated in a high-speed, low-power, CMOS process, the ADSP-2196 operates with a 6.25 ns instruction cycle time (160 MIPS). All instructions, except two multiword instructions, can execute in a single DSP cycle.

The ADSP-2196's flexible architecture and comprehensive instruction set support multiple operations in parallel. For example, in one processor cycle, the ADSP-2196 can:

- Generate an address for the next instruction fetch
- Fetch the next instruction
- Perform one or two data moves
- Update one or two data address pointers
- Perform a computational operation

These operations take place while the processor continues to:

- Receive and transmit data through two serial ports
- Receive and/or transmit data from a Host
- Receive or transmit data through the UART

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

For current information contact Analog Devices at 800/262-5643

## September 2001

- Receive or transmit data over two SPI ports
- Access external memory through the external memory interface
- Decrement the timers

## DSP Core Architecture

The ADSP-2196 instruction set provides flexible data moves and multifunction (one or two data moves with a computation) instructions. Every single-word instruction can be  executed  in  a  single  processor  cycle.  The  ADSP-2196 assembly language uses an algebraic syntax for ease of coding and readability.  A  comprehensive  set  of  development tools supports program development.

The functional block diagram on page 1 shows the architecture of the ADSP-219x core. It contains three independent computational units: the ALU, the multiplier/accumulator (MAC), and the shifter. The computational units process 16-bit data from the register file and have provisions to support multiprecision computations. The ALU performs a standard set of arithmetic and logic operations; division primitives are also supported. The MAC performs single-cycle multiply, multiply/add, and multiply/subtract operations. The MAC has two 40-bit accumulators, which help with overflow. The shifter performs logical and arithmetic shifts, normalization, denormalization, and derive exponent operations. The shifter can be used to efficiently implement numeric format control, including multiword and block floating-point representations.

Register-usage rules influence placement of input and results  within  the  computational  units.  For  most  operations, the computational units' data registers act as a data register file, permitting any input or result register to provide input to any unit for a computation. For feedback operations, the computational units let the output (result) of any unit be input to any unit on the next cycle. For conditional or multifunction instructions, there are restrictions on which data registers may provide inputs or receive results from each computational unit. For more information, see the ADSP-219x DSP Instruction Set Reference .

A powerful program sequencer controls the flow of instruction execution. The sequencer supports conditional jumps, subroutine calls, and low interrupt overhead. With internal loop counters and loop stacks, the ADSP-2196 executes looped code with zero overhead; no explicit jump instructions are required to maintain loops.

Two data address generators (DAGs) provide addresses for simultaneous dual operand fetches (from data memory and program memory). Each DAG maintains and updates four 16-bit address pointers. Whenever the pointer is used to access data (indirect addressing), it is pre- or post-modified by the  value  of  one  of  four  possible  modify  registers.  A  length value and base address may be associated with each pointer to implement automatic modulo addressing for circular buffers.  Page  registers  in  the  DAGs  allow  circular  addressing

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## September 2001

For current information contact Analog Devices at 800/262-5643

within 64K word boundaries of each of the 256 memory pages, but these buffers may not cross page boundaries. Secondary registers duplicate all the  primary registers in the DAGs; switching between primary and secondary registers provides a fast context switch.

Efficient data transfer in the core is achieved with the use of internal buses:

- Program Memory Address (PMA) Bus
- Program Memory Data (PMD) Bus
- Data Memory Address (DMA) Bus
- Data Memory Data (DMD) Bus
- DMA Address Bus
- DMA Data Bus

The two address buses (PMA and DMA) share a single external address bus, allowing memory to be expanded off-chip, and the two data buses (PMD and DMD) share a single external data bus. Boot memory space and I/O memory space also share the external buses.

Program memory can store both instructions and data, permitting the ADSP-2196 to fetch two operands in a single cycle, one from program memory and one from data memory. The DSP's dual memory buses also let the ADSP-219x core fetch an operand from data memory and the next instruction from program memory in a single cycle.

## DSP Peripherals Architecture

The functional block diagram on page 1 shows the DSP's on-chip peripherals, which include the external memory interface, Host port, serial ports, SPI-compatible ports, UART port, JTAG test and emulation port, timers, flags, and interrupt controller. These on-chip peripherals can connect to off-chip devices as shown in Figure 1.

The ADSP-2196 has a 16-bit Host port with DMA capability that lets external Hosts access on-chip memory. This 24-pin parallel port consists of a 16-pin multiplexed data/address bus and provides a low-service overhead data move capability. Configurable for 8- or 16-bits, this port provides  a  glueless  interface  to  a  wide  variety  of  8-  and  16-bit microcontrollers. Two chip-selects provide Hosts access to the DSP's entire memory map. The DSP is bootable through this port.

The ADSP-2196 also has an external memory interface that is  shared by the DSP's core, the DMA controller, and DMA capable peripherals, which include the UART, SPORT0, SPORT1, SPORT2, SPI0, SPI1, and the Host port. The external port consists of a 16-bit data bus, a 22-bit address bus, and control signals. The data bus is configurable to provide an  8  or  16 bit  interface  to  external  memory.  Support for word packing lets the DSP access 16- or 24-bit words from external memory regardless of the external data bus width. When configured for an 8-bit interface, the unused

ADSP-2196

Figure 1.  ADSP-2196 System Diagram

<!-- image -->

eight lines provide eight programmable, bidirectional general-purpose Programmable Flag lines, six of which can be mapped to software condition signals.

The memory DMA controller lets the ADSP-2196 move data and instructions from between memory spaces: internal-to-external, internal-to-internal, and external-toexternal. On-chip peripherals can also  use this controller for DMA transfers.

The ADSP-2196 can respond to up to seventeen interrupts at  any  given  time:  three  internal  (stack,  emulator  kernel,  and power-down), two external (emulator and reset), and twelve user-defined (peripherals) interrupts. Programmers assign

## ADSP-2196

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

For current information contact Analog Devices at 800/262-5643

a peripheral to one of the 12 user-defined interrupts. These assignments determine the priority of each peripheral for interrupt service.

There are three serial ports on the ADSP-2196 that provide a complete synchronous, full-duplex serial interface. This interface includes optional companding in hardware and a wide variety  of  framed  or  frameless  data  transmit  and  receive modes of operation. Each serial port can transmit or receive an internal or external, programmable serial clock and frame syncs. Each serial port supports 128-channel Time Division Multiplexing.

The ADSP-2196 provides up to sixteen general-purpose I/O pins, which are programmable as either inputs or outputs. Eight of these pins are dedicated general purpose Programmable Flag pins. The other eight of them are multifunctional pins, acting as general purpose I/O pins when the DSP connects to an 8-bit external data bus and acting as the upper eight data pins when the DSP connects to a 16-bit  external  data  bus.  These  Programmable  Flag  pins  can implement edge- or  level-sensitive  interrupts,  some  of  which can be used to base the execution of conditional instructions.

Three programmable interval timers generate periodic interrupts. Each timer can be independently set to operate in one of three modes:

- Pulse Waveform Generation mode
- Pulsewidth Count/Capture mode
- External Event Watchdog mode

Each timer has one bi-directional pin and four registers that implement its mode of operation: A 7-bit configuration register,  a  32-bit  count  register, a  32-bit  period  register,  and a  32-bit  pulsewidth  register.  A  single  status  register  supports all three timers. A bit in the mode status register globally enables or disables all three timers, and a bit in each timer's configuration register enables or disables the corresponding timer independently of the others.

## Memory Architecture

The ADSP-2196 DSP provides 16K words of on-chip SRAM memory. This memory is divided into two 8K blocks located on memory Page 0 in the DSP's memory map. The DSP also provides 16K words of on-chip ROM. In addition to the internal and external memory space, the ADSP-2196 can address two additional and separate off-chip memory spaces: I/O space and boot space.

As shown in Figure 2, the DSP's two internal memory blocks populate all of Page 0. The entire DSP memory map consists of 256 pages (Pages 0 -255), and each page is 64K words long. External memory space consists of four memory banks (banks 0-3) and supports a wide variety of SRAM memory devices. Each bank is selectable using the memory select pins (MS3-0) and has configurable page boundaries, waitstates, and waitstate modes. The 1K word of on-chip boot-ROM populates the top of Page 255 while

## September 2001

the remaining 254 pages are addressable off-chip. I/O memory pages differ from external memory pages in that I/O pages are 1K word long, and the external I/O pages have their own select pin (IOMS). Pages 0-31 of I/O memory space reside on-chip and contain the configuration registers for the peripherals. Both the ADSP-2196 and DMA-capable peripherals can access the DSP's entire memory map.

## Internal (On-Chip) Memory

The ADSP-2196's unified program and data memory space consists of 16M locations that are accessible through two 24-bit address buses, the PMA and DMA buses. The DSP uses slightly different mechanisms to generate a 24-bit address for each bus. The DSP has three functions that support access to the full memory map.

- The DAGs generate 24-bit addresses for data  fetches  from the entire DSP memory address range. Because DAG index (address) registers are 16 bits wide and hold the lower 16 bits of the address, each of the DAGs has its own 8-bit page register (DMPGx) to hold the most significant eight address bits. Before a DAG generates an address, the program must set the DAG's DMPGx register to the appropriate memory page.
- The Program Sequencer generates the addresses for instruction fetches. For relative addressing instructions, the  program sequencer bases addresses for relative  jumps, calls, and loops on the 24-bit Program Counter (PC). In direct addressing instructions (two-word instructions), the instruction provides an immediate 24-bit address value. The PC allows linear addressing of the full 24-bit address range.
- For indirect jumps and calls that use a 16-bit DAG address register for part of the branch address, the Program Sequencer relies on an 8-bit Indirect Jump page (IJPG) register to supply the most significant eight address bits. Before a  cross  page  jump  or  call,  the  program must set the program sequencer's IJPG register to the appropriate memory page.

The ADSP-2196 has 1K word of on-chip ROM that holds boot routines. If peripheral booting is selected, the DSP starts executing instructions from the on-chip boot ROM, which starts the boot process from the selected peripheral. For more information, see Booting Modes on page 15. The on-chip boot ROM is located on Page 255 in the DSP's memory space map.

## Internal On-Chip ROM

The ADSP-2196 DSP features a 16K-word × 24-bit on-chip maskable ROM mapped into program memory space (Figure 3).

Customers can arrange to have the ROM programmed with application-specific code.

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## September 2001

For current information contact Analog Devices at 800/262-5643

ADSP-2196

Figure 2.  ADSP-2196 Memory Map

<!-- image -->

## On-Chip Memory Security

The ADSP-2196  has a maskable option to protect the contents of on-chip memories from being accessed. When the ROM protection is set, the on-chip ROM space cannot be accessed by a hardware emulator.

## External (Off-Chip) Memory

Each of the ADSP-2196's off-chip memory spaces has a separate control register, so applications can configure unique access parameters for each space. The access parameters include read and write wait counts, waitstate completion mode, I/O clock divide ratio, write hold time extension, strobe polarity, and data bus width. The core clock and peripheral clock ratios influence the external memory access strobe widths. For more information, see Clock Signals on page 14. The off-chip memory spaces are:

- External memory space (MS3-0 pins)
- I/O memory space (IOMS pin)
- Boot memory space (BMS pin)

All of these off-chip memory spaces are accessible through the External Port, which can be configured for 8-bit or 16-bit data widths.

## External Memory Space

External memory space consists of four memory banks. These banks can contain a configurable number of 64K word pages. At reset, the page boundaries for external memory have Bank0 containing pages 1 -63, Bank1 containing pages 64 -127, Bank2 containing pages 128 -191, and Bank3 containing Pages 192 -254. The MS3-0 memory bank pins select Banks 3-0, respectively. The external memory interface decodes the 8 MSBs of the DSP program address to select one of the four banks. Both the ADSP-219x core and DMA-capable peripherals can access the DSP's external memory space.

## I/O Memory Space

The ADSP-2196 supports an additional external memory called I/O memory space. This space is designed to support simple connections to peripherals (such as data converters and external registers) or to bus interface ASIC data registers. I/O space supports a total of 256K locations. The first 8K addresses are reserved for on-chip peripherals. The upper 248K addresses are available for external peripheral devices. The DSP's instruction set provides instructions for accessing I/O space. These instructions use an 18-bit address that is assembled from an 8-bit I/O page (IOPG) register and a 10-bit immediate value supplied in the instruction. Both the ADSP-219x core and a Host (through the Host Port Interface) can access I/O memory space.

## Boot Memory Space

Boot memory space consists of one off-chip bank with 254 pages. The BMS memory bank pin selects boot memory space. Both the ADSP-219x core and DMA-capable

## ADSP-2196

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

For current information contact Analog Devices at 800/262-5643

## September 2001

Figure 3.  ADSP-2196 Memory Map, with On-Chip ROM

<!-- image -->

peripherals can access the DSP's off-chip boot memory space. After reset, the DSP always starts executing instructions from the on-chip boot ROM. Depending on the boot configuration, the boot ROM code can start booting the DSP from boot memory. For more information, see Booting Modes on page 15.

## Interrupts

The interrupt controller lets the DSP respond to 17 interrupts with minimum overhead. The controller implements an interrupt priority scheme as shown in Table 1. Applications can use the unassigned slots for software and peripheral interrupts.

Table 1.  Interrupt Priorities/Addresses

| Interrupt                        | IMASK/ IRPTL   | Vector Address 1   |
|----------------------------------|----------------|--------------------|
| Emulator (NMI)- Highest Priority | NA             | NA                 |
| Reset (NMI)                      | 0              | 0x00 0000          |
| Power-Down (NMI)                 | 1              | 0x00 0020          |
| Loop and PCStack                 | 2              | 0x00 0040          |

Table 1.  Interrupt Priorities/Addresses  (Continued)

| Interrupt               |   IMASK/ IRPTL | Vector Address 1   |
|-------------------------|----------------|--------------------|
| Emulation Kernel        |              3 | 0x00 0060          |
| User Assigned Interrupt |              4 | 0x00 0080          |
| User Assigned Interrupt |              5 | 0x00 00A0          |
| User Assigned Interrupt |              6 | 0x00 00C0          |
| User Assigned Interrupt |              7 | 0x00 00E0          |
| User Assigned Interrupt |              8 | 0x00 0100          |
| User Assigned Interrupt |              9 | 0x00 0120          |
| User Assigned Interrupt |             10 | 0x00 0140          |
| User Assigned Interrupt |             11 | 0x00 0160          |
| User Assigned Interrupt |             12 | 0x00 0180          |

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## September 2001

For current information contact Analog Devices at 800/262-5643

Table 1.  Interrupt Priorities/Addresses  (Continued)

| Interrupt                                |   IMASK/ IRPTL | Vector Address 1   |
|------------------------------------------|----------------|--------------------|
| User Assigned Interrupt                  |             13 | 0x00 01A0          |
| User Assigned Interrupt                  |             14 | 0x00 01C0          |
| User Assigned Interrupt- Lowest Priority |             15 | 0x00 01E0          |

Table 2 shows the ID and priority at reset of each of the peripheral interrupts. T o assign the peripheral interrupts a different priority, applications write the new priority to their corresponding control bits (determined by their ID) in the Interrupt Priority Control register. The peripheral interrupt's position in the IMASK and IRPTL register and its vector address depend on its priority level, as shown in Table 1. Because the IMASK and IRPTL registers are limited to 16 bits, any peripheral interrupts assigned a priority level of 11 are aliased to the lowest priority bit position (15) in these registers and share vector address 0x00 01E0.

Table 2.  Peripheral Interrupts and Priority at Reset

| Interrupt                     |   ID |   Reset Priority |
|-------------------------------|------|------------------|
| Slave DMA/Host Port Interface |    0 |                0 |
| SPORT0 Receive                |    1 |                1 |
| SPORT0 Transmit               |    2 |                2 |
| SPORT1 Receive                |    3 |                3 |
| SPORT1 Transmit               |    4 |                4 |
| SPORT2 Receive/SPI0           |    5 |                5 |
| SPORT2 Transmit/SPI1          |    6 |                6 |
| UARTReceive                   |    7 |                7 |
| UARTTransmit                  |    8 |                8 |
| Timer A                       |    9 |                9 |
| Timer B                       |   10 |               10 |
| TimerC                        |   11 |               11 |

ADSP-2196

| Table 2. Peripheral Interrupts and Priority at Reset   | Table 2. Peripheral Interrupts and Priority at Reset   | Table 2. Peripheral Interrupts and Priority at Reset   |
|--------------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------|
| Interrupt                                              | ID                                                     | Reset Priority                                         |
| Programmable Flag 0 (any PFx)                          | 12                                                     | 11                                                     |
| Programmable Flag 1 (any PFx)                          | 13                                                     | 11                                                     |
| Memory DMAport                                         | 14                                                     | 11                                                     |

Interrupt routines can either be nested with higher priority interrupts taking precedence or processed sequentially. Interrupts can be masked or unmasked with the IMASK register. Individual interrupt requests are logically ANDed with the bits in IMASK; the highest priority unmasked interrupt is then selected. The emulation, power-down, and reset interrupts are nonmaskable with the IMASK register, but software can use the DIS INT instruction to mask the power-down interrupt.

The Interrupt Control (ICNTL) register controls interrupt nesting and enables or disables interrupts globally. The general-purpose Programmable Flag (PFx) pins can be configured as outputs, can implement software interrupts, and (as inputs) can implement hardware interrupts. Programmable Flag pin interrupts can be configured for level-sensitive, single edge-sensitive, or dual edgesensitive operation.

Table 3.  Interrupt Control (ICNTL) Register Bits

| Bit   | Description                 |
|-------|-----------------------------|
| 0-3   | Reserved                    |
| 4     | Interrupt Nesting Enable    |
| 5     | Global Interrupt Enable     |
| 6     | Reserved                    |
| 7     | MAC-Biased Rounding Enable  |
| 8-9   | Reserved                    |
| 10    | PCStack Interrupt Enable    |
| 11    | Loop Stack Interrupt Enable |
| 12-15 | Reserved                    |

The IRPTL register is used to force and clear interrupts. On-chip stacks preserve the processor status and are automatically maintained during interrupt handling. T o support interrupt, loop, and subroutine nesting, the PC stack is 33 levels deep, the loop stack is eight levels deep, and the status stack is 16 levels deep. T o prevent stack overflow, the

## ADSP-2196

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

For current information contact Analog Devices at 800/262-5643

PC stack can generate a stack-level interrupt if the PC stack falls below three locations full or rises above 28 locations full.

The following instructions globally enable or disable interrupt servicing, regardless of the state of IMASK.

ENA INT; DIS INT;

At reset, interrupt servicing is disabled.

For quick servicing of interrupts, a secondary set of DAG and computational registers exist. Switching between the primary and secondary registers lets programs quickly service interrupts, while preserving the DSP's state.

## DMA Controller

The ADSP-2196 has a DMA controller that supports automated data transfers with minimal overhead for the DSP core. Cycle stealing DMA transfers can occur between the ADSP-2196's internal memory and any of its DMA-capable peripherals. Additionally, DMA transfers can be accomplished between any of the DMA-capable peripherals and external devices connected to the external memory interface. DMA-capable peripherals include the Host port, SPORTs, SPI ports, and UART . Each individual DMA-capable peripheral has a dedicated DMA channel. T o describe each DMA sequence, the DMA controller uses a set of parameters-called a DMA descriptor. When successive DMA sequences are needed, these DMA descriptors can be linked or chained together, so the completion of one DMA sequence auto-initiates and starts the next sequence. DMA sequences do not contend for bus  access  with  the  DSP core, instead DMAs 'steal' cycles to access memory.

All DMA transfers use the DMA bus shown in the functional block diagram on page 1. Because all of the peripherals use the same bus, arbitration for DMA bus access is needed. The arbitration for DMA bus access appears in Table 4.

Table 4.  I/O Bus Arbitration Priority

| DMABus Master            | Arbitration Priority   |
|--------------------------|------------------------|
| SPORT0 ReceiveDMA        | 0-Highest              |
| SPORT1 ReceiveDMA        | 1                      |
| SPORT2 ReceiveDMA        | 2                      |
| SPORT0 TransmitDMA       | 3                      |
| SPORT1 TransmitDMA       | 4                      |
| SPORT2 TransmitDMA       | 5                      |
| SPI0 Receive/TransmitDMA | 6                      |
| SPI1 Receive/TransmitDMA | 7                      |

## September 2001

Table 4.  I/O Bus Arbitration Priority  (Continued)

| DMABus Master   | Arbitration Priority   |
|-----------------|------------------------|
| UARTReceiveDMA  | 8                      |
| UARTTransmitDMA | 9                      |
| Host PortDMA    | 10                     |
| MemoryDMA       | 11-Lowest              |

## Host Port

The ADSP-2196's Host port functions as a slave on the external bus of an external Host. The Host port interface lets a Host read from or write to the DSP's memory space, boot space, or  internal  I/O  space.  Examples  of  Hosts  include external microcontrollers, microprocessors, or ASICs.

The Host port is a multiplexed address and data bus that provides both an 8-bit and a 16-bit data path and operates using an asynchronous transmission protocol. Through this port, an off-chip Host can directly access the DSP's entire memory space map, boot memory space, and internal I/O space. T o access the DSP's internal memory space, a Host steals one cycle per access from the DSP . A Host access to the DSP's external memory uses the external port interface and does not stall (or steal cycles from) the DSP's core. Because a Host can access internal I/O memory space, a Host can control any of the DSP's I/O mapped peripherals.

The Host port is most efficient when using the DSP as a slave and uses DMA to automate the incrementing of addresses for these accesses. In this case, an address does not have to be transferred from the Host for every data transfer.

## Host Port Acknowledge (HACK) Modes

The Host port supports a number of modes (or protocols) for generating a HACK output for the host. The host selects ACK or Ready Modes using the HACK\_P and HACK pins. The Host port also supports two modes for address control: Address Latch Enable (ALE) and Address Cycle Control (ACC) modes. The DSP auto-detects ALE versus ACC Mode from the HALE and HWR inputs.

The host port HACK signal polarity is selected (only at reset) as active high or active low, depending on the value driven on the HACK\_P pin.The HACK polarity is stored into the host port configuration register as a read only bit.

The DSP uses HACK to indicate to the Host when to complete an access. For a read transaction, a Host can proceed and complete an access when valid data is present in the read buffer and the host port is not busy doing a write. For a write transactions, a Host can complete an access when the write buffer is not full and the host port is not busy doing a write.

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## September 2001

For current information contact Analog Devices at 800/262-5643

Two mode bits in the Host Port configuration register HPCR [7:6] define the functionality of the HACK line. HPCR6 is initialized at reset based on the values driven on HACK and HACK\_P pins (shown in Table 5); HPCR7 is always cleared (0) at reset. HPCR [7:6] can be modified after reset by a write access to the host port configuration register.

Table 5.  Host Port Acknowledge Mode Selection

| Values Driven At Reset   | Values Driven At Reset   | HPCR [7:6] Initial Values   | HPCR [7:6] Initial Values   | Acknowledge Mode   |
|--------------------------|--------------------------|-----------------------------|-----------------------------|--------------------|
| HACK_P                   | HACK                     | Bit 7                       | Bit 6                       |                    |
| 0                        | 0                        | 0                           | 1                           | Ready Mode         |
| 0                        | 1                        | 0                           | 0                           | ACKMode            |
| 1                        | 0                        | 0                           | 0                           | ACKMode            |
| 1                        | 1                        | 0                           | 1                           | Ready Mode         |

The functional  modes selected  by  HPCR  [7:6]  are  as  follows (assuming active high signal):

- ACK Mode -Acknowledge is active on strobes; HACK goes high from the leading edge of the strobe to indicate when the access can complete. After the Host samples the HACK active, it can complete the access by removing the strobe.The host port then removes the HACK.
- Ready Mode -Ready active on strobes,  goes  low  to  insert wait state during the access.If the host port can not complete the access, it de-asserts the HACK/READY line. In this case, the Host has to extend the access by keeping the strobe asserted. When the Host samples the HACK asserted, it can then proceed and complete the access by de-asserting the strobe.

While in Address Cycle Control (ACC) mode and the ACK or Ready acknowledge modes, the HACK is returned active for any address cycle.

## Host Port Chip Selects

There are two chip-select signals associated with the Host Port: HCMS and HCIOMS. The Host Chip Memory Select (HCMS) lets the Host select the DSP and directly access the DSP's internal/external memory space or boot memory space. The Host Chip I/O Memory Select (HCIOMS) lets the Host select the DSP and directly access the DSP's internal I/O memory space.

Before starting a direct access, the Host configures Host port interface registers, specifying the width of external data bus (8- or 16-bit) and the target address page (in the IJPG register). The DSP generates the needed memory select signals during the access, based on the target address. The Host port interface combines the data from one, two, or three  consecutive  Host  accesses  (up  to  one  24-bit  value)  into

ADSP-2196

a single DMA bus access to prefetch Host direct reads or to post  direct  writes.  During  assembly  of  larger  words,  the  Host port interface asserts ACK for each byte access that does not start a read or complete a write. Otherwise, the Host port interface asserts ACK when it has completed the memory access successfully.

## DSP Serial Ports (SPORTs)

The ADSP-2196 incorporates three complete synchronous serial ports (SPORT0, SPORT1, and SPORT2) for serial and multiprocessor communications. The SPORTs support the following features:

- Bidirectional operation-each SPORT has independent transmit and receive pins.
- Buffered (8-deep) transmit and receive ports-each port has a data register for transferring data words to and from other DSP components and shift registers  for  shifting  data in and out of the data registers.
- Clocking-each transmit and receive port can either use an external serial clock ( ≤ 75 MHz) or generate its own, in frequencies ranging from 1144 Hz to 75 MHz.
- Word length-each SPORT supports serial data words from 3 to 16 bits in length transferred in Big Endian (MSB) or Little Endian (LSB) format.
- Framing-each transmit and receive port can run with or without frame sync  signals  for  each  data  word.  Frame  sync signals can be generated internally or externally, active high or low, and with either of two pulsewidths and early or late frame sync.
- Companding in hardware-each SPORT can perform A-law or µ-law companding according to ITU recommendation G.711. Companding can be selected on the transmit and/or receive channel of the SPORT without additional latencies.
- DMA operations with single-cycle overhead-each SPORT can automatically receive and transmit multiple buffers of memory data, one data word each DSP cycle. Either  the  DSP's  core  or  a  Host  processor  can  link  or  chain sequences of DMA transfers between a SPORT and memory. The chained DMA can be dynamically allocated and updated through the DMA descriptors (DMA transfer parameters) that set up the chain.
- Interrupts-each transmit and receive port generates an interrupt upon completing the transfer of a data word or after transferring an entire data buffer or buffers through DMA.
- Multichannel capability-each SPORT supports the H.100 standard.

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## ADSP-2196

For current information contact Analog Devices at 800/262-5643

Serial Peripheral Interface (SPI) Ports

The DSP has two SPI-compatible ports that enable the DSP to communicate with multiple SPI-compatible devices. These ports are multiplexed with SPORT2, so either SPORT2 or the SPI ports are active, depending on the state of the OPMODE pin during hardware reset.

The SPI interface uses three pins for transferring data: two data pins (Master Output-Slave Input, MOSIx, and Master Input-Slave Output, MISOx) and a clock pin (Serial Clock, SCKx). Two SPI chip select input pins (SPISSx) let other SPI devices select the DSP, and fourteen SPI chip select output pins (SPIxSEL7-1) let the DSP select other SPI devices.  The  SPI  select  pins  are  reconfigured  Programmable Flag pins. Using these pins, the SPI ports provide a full duplex, synchronous serial interface, which supports both master and slave modes and multimaster environments.

Each SPI port's baud rate and clock phase/polarities are programmable (see Figure 4), and each has an integrated DMA controller, configurable to support both transmit and receive data streams. The SPI's DMA controller can only service unidirectional accesses at any given time.

<!-- formula-not-decoded -->

Figure 4.  SPI Clock Rate Calculation

During transfers, the  SPI ports  simultaneously  transmit  and receive by serially shifting data in and out on their two serial data lines.  The  serial  clock  line  synchronizes  the  shifting  and sampling of data on the two serial data lines.

In master mode, the DSP's core performs the following sequence to set up and initiate SPI transfers:

1. Enables and configures the SPI port's operation (data size, and transfer format).
2. Selects the target SPI slave with an SPIxSELy output pin (reconfigured Programmable Flag pin).
3. Defines one or more DMA descriptors in Page 0 of I/O memory space (optional in DMA mode only).
4. Enables the SPI DMA engine and specifies transfer direction (optional in DMA mode only).
5. In non-DMA mode only, reads or writes the SPI port receive or transmit data buffer.

The SCKx line generates the programmed clock pulses for simultaneously shifting data out on MOSIx and shifting data in on MISOx. In DMA mode only, transfers continue until the SPI DMA word count transitions from 1 to 0.

## September 2001

In slave mode, the DSP's core performs the following sequence to set up the SPI port to receive data from a master transmitter:

1. Enables and configures the SPI slave port to match the operation parameters set up on the master (data size and transfer format) SPI transmitter.
2. Defines and generates a receive DMA descriptor in Page 0 of memory space to interrupt at the end of the data transfer (optional in DMA mode only).
3. Enables the SPI DMA engine for a receive access (optional in DMA mode only).
4. Starts receiving the data on the appropriate SPI SCKx edges after receiving an SPI chip select on an SPISSx input pin (reconfigured Programmable Flag pin) from a master

In DMA mode only, reception continues until the SPI DMA word count transitions from 1 to 0. The DSP's core could continue, by queuing up the next DMA descriptor.

A slave  mode  transmit operation is  similar, except  the DSP's core specifies the data buffer in memory space from which to transmit data, generates and relinquishes control of the transmit DMA descriptor, and begins filling the SPI port's data buffer. If the SPI controller isn't ready on time to transmit, it can transmit a 'zero' word.

## UART Port

The UART port provides a simplified UART interface to another peripheral or Host. It performs full duplex, asynchronous transfers of serial data. Options for the UART include support for 5-8 data bits; 1 or 2 stop bits; and none, even, or odd parity. The UART port supports two modes of operation:

- PIO (programmed I/O)

The DSP's core sends or receives data by writing or reading I/O-mapped UATX or UARX registers, respectively. The data is double-buffered on both transmit and receive.

- DMA (direct memory access)

The DMA controller transfers both transmit and receive data. This reduces the number and frequency of interrupts required to transfer data to and from memory. The UART has two dedicated DMA channels. These DMA channels have lower priority than most DMA channels because of their relatively low service rates.

The UART's baud rate (see Figure 5), serial data format, error code generation and status, and interrupts are programmable:

- Supported bit rates range from 95 bits to 6.25M bits per second (100 MHz peripheral clock).
- Supported data formats are 7- or 12-bit frames.
- Transmit and receive status can be configured to generate maskable interrupts to the DSP's core.

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## September 2001

For current information contact Analog Devices at 800/262-5643

Figure 5.  UART Clock Rate Calculation 1

1 Where D = 1 to 65536

UART Clock Rate HCLK 16 D × - - - - - - - - - - - - - - - - - - =

The timers can be used to provide a hardware-assisted autobaud detection mechanism for the UART interface.

## Programmable Flag (PFx) Pins

The ADSP-2196 has 16 bidirectional, general-purpose I/O, Programmable Flag (PF15-0) pins. The PF7-0 pins are dedicated to general-purpose I/O. The PF15-8 pins serve either as general-purpose I/O pins (if the DSP is connected to an 8-bit external data bus) or serve as DATA15-8 lines (if the DSP is connected to a 16-bit external data bus). The Programmable Flag pins have special functions for clock multiplier selection and for SPI port operation. For more information, see Serial Peripheral Interface (SPI) Ports on page 12 and Clock Signals on page 14. T en memory-mapped registers control operation of the Programmable Flag pins:

- Flag Direction register

Specifies the direction of each individual PFx pin as input or output.

- Flag Control and Status registers

Specify the value to drive on each individual PFx output pin. As input, software can predicate instruction execution on the value of individual PFx input pins captured in this register. One register sets bits, and one register clears bits.

- Flag Interrupt Mask registers

Enable and disable each individual PFx pin to function as an interrupt to the DSP's core. One register sets bits to enable interrupt function, and one register clears bits to disable interrupt function. Input PFx pins function as hardware interrupts, and output PFx pins function as software interrupts-latching in the IMASK and IRPTL registers.

- Flag Interrupt Polarity register

Specifies the polarity (active high or low) for interrupt sensitivity on each individual PFx pin.

- Flag Sensitivity registers

Specify whether individual PFx pins are level- or edge-sensitive and specify-if edge-sensitive-whether just the rising edge or both the rising and falling edges of the signal are significant. One register selects the type of sensitivity, and one register selects which edges are significant for edge-sensitivity.

## Low Power Operation

The ADSP-2196 has four low-power options that significantly reduce the power dissipation when the device operates under standby conditions. T o enter any of these modes, the DSP executes an IDLE instruction. The ADSP-2196 uses configuration of the PDWN, STOPCK, and STOPALL bits in the PLLCTL register to select between the low-power modes as the DSP executes the IDLE. Depending on the mode, an IDLE shuts off clocks to different parts of the DSP in the different modes. The low power modes are:

- Idle
- Power-Down Core
- Power-Down Core/Peripherals
- Power-Down All

## Idle Mode

When the ADSP-2196 is in Idle mode, the DSP core stops executing instructions, retains the contents of the instruction pipeline, and waits for an interrupt. The core clock and peripheral clock continue running.

To enter Idle mode, the DSP can execute the IDLE instruction anywhere in code. T o exit Idle mode, the DSP responds to an interrupt and (after two cycles of latency) resumes executing instructions with the instruction after the IDLE.

## Power-down Core Mode

When the ADSP-2196 is in Power-Down Core mode, the DSP core clock is off, but the DSP retains the contents of the pipeline and keeps the PLL running. The peripheral bus keeps running, letting the peripherals receive data.

To enter Power-Down Core mode, the DSP executes an IDLE instruction after performing the following tasks:

- Enter a power-down interrupt service routine
- Check for pending interrupts and I/O service routines
- Clear (= 0) the PDWN bit in the PLLCTL register
- Clear (= 0) the STOPALL bit in the PLLCTL register
- Set (= 1) the STOPCK bit in the PLLCTL register

To exit Power-Down Core mode, the DSP responds to an interrupt  and  (after  two  cycles  of  latency)  resumes  executing instructions with the instruction after the IDLE.

## Power-Down Core/Peripherals Mode

When the ADSP-2196 is in Power-Down Core/Peripherals mode, the DSP core clock and peripheral bus clock are off, but the DSP keeps the PLL running. The DSP does not retain the contents of the instruction pipeline.The peripheral bus is stopped, so the peripherals cannot receive data.

To enter Power-Down Core/Peripherals mode, the DSP executes an IDLE instruction after performing the following tasks:

- Enter a power-down interrupt service routine
- Check for pending interrupts and I/O service routines

ADSP-2196

## ADSP-2196

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

For current information contact Analog Devices at 800/262-5643

- Clear (= 0) the PDWN bit in the PLLCTL register
- Set (= 1) the STOPALL bit in the PLLCTL register

To exit Power-Down Core/Peripherals mode, the DSP responds to an interrupt and (after five to six cycles of latency)  resumes  executing  instructions  with  the  instruction after the IDLE.

## Power-Down All Mode

When the ADSP-2196 is in Power-Down All mode, the DSP core clock, the peripheral clock, and the PLL are all stopped. The DSP does not retain the contents of the instruction pipeline. The peripheral bus is stopped, so the peripherals cannot receive data.

To enter Power-Down All mode, the DSP executes an IDLE instruction after performing the following tasks:

- Enter a power-down interrupt service routine
- Check for pending interrupts and I/O service routines
- Set (= 1) the PDWN bit in the PLLCTL register

To exit Power-Down Core/Peripherals mode, the DSP responds to an interrupt and (after 500 cycles to re-stabilize the PLL) resumes executing instructions with the instruction after the IDLE.

## Clock Signals

The ADSP-2196 can be clocked by a crystal oscillator or a buffered, shaped clock derived from an external clock oscillator. If a crystal oscillator is used, the crystal should be connected across the CLKIN and XTAL pins, with two capacitors connected as shown in Figure 6. Capacitor values are  dependent on crystal type and should be specified by the crystal manufacturer. A parallel-resonant, fundamental frequency, microprocessor-grade crystal should be used for this configuration.

If a buffered, shaped clock is used, this external clock connects to the DSP's CLKIN pin. CLKIN input cannot be halted, changed, or operated below the specified frequency during normal operation. This clock signal should be a  TTL-compatible signal. When an external clock is used, the XTAL input must be left unconnected.

The DSP provides a user-programmable 1 × to 32 × multiplication of the input clock, including some fractional values, to support 128 external to internal (DSP core) clock ratios. The MSEL6-0, BYPASS, and DF pins decide the PLL multiplication factor at reset. At runtime, the multiplication factor can  be  controlled in  software.  T o  support  input clocks greater that 100 MHz, the PLL uses an additional input: the Divide Frequency (DF) pin. If the input clock is greater than 100 MHz, DF must be high. If the input clock is less than 100 MHz, DF must be low. The combination of pullup and pull-down resistors in Figure 6 set up a core clock ratio of 6:1, which produces a 150 MHz core clock from the 25 MHz input. For other clock multiplier settings, see the ADSP-219x/2191 DSP Hardware Reference .

The peripheral clock is supplied to the CLKOUT pin.

## September 2001

All on-chip peripherals for the ADSP-2196 operate at the rate set by the peripheral clock. The peripheral clock is either equal to the core clock rate or one-half the DSP core clock rate. This selection is controlled by the IOSEL bit in the PLLCTL register. The maximum core clock is 160 MHz, and the maximum peripheral clock is 100 MHz-the combination of the input clock and core/peripheral clock ratios may not exceed these limits.

Figure 6.  External Crystal Connections

<!-- image -->

## Reset

The RESET signal initiates a master reset of the ADSP-2196. The RESET signal must be asserted during the power-up sequence to assure proper initialization. RESET during initial power-up must be held long enough to allow the internal clock to stabilize. If RESET is activated any time after power up, the clock does not continue to run and requires stabilization time when recovering from reset.

The power-up sequence is defined as the total time required for the crystal oscillator circuit to stabilize after a valid V DD is  applied  to  the  processor,  and  for  the  internal  phase-locked loop (PLL) to lock onto the specific crystal frequency. A minimum of 100 µs ensures that the PLL has locked, but does not include the crystal oscillator start-up time. During

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## September 2001

For current information contact Analog Devices at 800/262-5643

this power-up sequence the RESET signal should be held low.  On  any  subsequent  resets,  the  RESET  signal  must  meet the minimum pulsewidth specification, t RSP .

The RESET input contains some hysteresis. If using an RC circuit to generate your RESET signal, the circuit should use an external Schmidt trigger.

The master reset sets all internal stack pointers to the empty stack condition, masks all interrupts, and resets all registers to their default values (where applicable). When RESET is released, if there is no pending bus request and the chip is configured for booting, the boot-loading sequence is performed. Program control jumps to the location of the on-chip boot ROM (0xFF0000).

## Power Supplies

The ADSP-2196 has separate power supply connections for the internal (V DDINT ) and external (V DDEXT ) power supplies. The internal supply must meet the 2.5 V requirement. The external supply must be connected to a 3.3 V supply. All external supply pins must be connected to the same supply.

As indicated in Table 6, the OPMODE pin has a dual role, acting as a boot mode select during reset and determining SPORT or SPI operation at runtime. If the OPMODE pin at reset is the opposite of what is needed in an application during runtime, the application needs to set the OPMODE bit appropriately during runtime prior to using the corresponding peripheral.

## Booting Modes

The ADSP-2196 has seven mechanisms (listed in Table 6) for automatically loading internal program memory after reset.

Table 6.  Select Boot Mode (OPMODE, BMODE1, and BMODE0)

|   BMODE1 |   BMODE0 | Function                                       |
|----------|----------|------------------------------------------------|
|        0 |        0 | Execute from external memory 16 bits (No Boot) |
|        0 |        1 | Boot fromEPROM                                 |
|        1 |        0 | Boot from Host                                 |
|        1 |        1 | Reserved                                       |
|        0 |        0 | Execute from external memory 8 bits (No Boot)  |
|        0 |        1 | Boot fromUART                                  |
|        1 |        0 | Boot from SPI, up to 4K bits                   |
|        1 |        1 | Boot from SPI, >4K bits up to 512K bits        |

ADSP-2196

The OPMODE, BMODE1, and BMODE0 pins, sampled during hardware reset, and three bits in the Reset Configuration Register implement these modes:

- Boot from memory external 16 bits-The memory boot routine located in boot ROM memory space executes a boot-stream-formatted program located at address 0x10000 of boot memory space, packing 16-bit external data into 24-bit internal  data. The External Port Interface is configured for the default clock multiplier (128) and read waitstates (7).
- Boot from EPROM-The EPROM boot routine located in boot ROM memory space executes a boot-stream-formatted program located at address 0x10000 of boot memory space, packing 8- or 16-bit external data into 24-bit internal data. The External Port Interface is configured for the default clock multiplier (32) and read waitstates (7).
- Boot from Host-The (8- or 16-bit) Host downloads a boot-stream-formatted program to internal or external memory. The Host's boot routine is located in internal ROM memory space and uses the top 16 locations of Page 0 program memory and the top 272 locations of Page 0 data memory.

The internal boot ROM sets semaphore A (an IO register within the host port) and then polls until the semaphore is  reset.  Once  detected,  the  internal  boot  ROM  will  remap the interrupt vector table to Page 0 internal memory and jump to address 0x0000 internal. From the point of view of the host interface, an external host has full control of the DSP's memory map. The Host has the freedom to directly write internal memory, external memory, and internal I/O memory space. The DSP core execution is held off until the Host clears the semaphore register. This strategy allows the maximum flexibility for the Host to boot in the program and data code, by leaving it up to the programmer.

- Execute from memory external 8 bits (No Boot)execution starts from Page 1 of external memory space, packing either 8- or 16-bit external data into 24-bit internal data. The External Port Interface is configured for the default clock multiplier (128) and read waitstates (7).
- Boot from UART-The Host downloads boot-stream-formatted program using an autobaud handshake sequence. The Host agent selects a baud rate within the UART's clocking capabilities. After  a  hardware reset, the DSP's UART transmits 0xFF values (eight bits data, one start bit, one stop bit, no parity bit) until detecting the start of the first memory block. The UART boot routine is located in internal ROM memory space and uses the top 16 locations of Page 0 program memory and the top 272 locations of Page 0 data memory.

## ADSP-2196

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

For current information contact Analog Devices at 800/262-5643

- Boot from SPI, up to 4K bits-The SPI0 port uses the SPI0SEL1 (reconfigured PF2) output pin to select a single serial EPROM device, submits a read command at address 0x00, and begins clocking consecutive data into internal or external memory. Use only SPI-compatible EPROMs of ≤ 4K bit (12-bit address range). The SPI0 boot routine located in internal ROM memory space executes a boot-stream-formatted program, using the top 16 locations of Page 0 program memory and the top 272 locations of Page 0 data memory. The SPI boot configuration  is  SPIBAUD0=60  (decimal),  CPHA=1, CPOL=1, 8-bit data, and MSB first.
- Boot from SPI, from &gt;4K bits to 512K bits-The SPI0 port uses the SPI0SEL1 (re-configured PF2) output pin to select a single serial EPROM device, submits a read command at address 0x00, and begins clocking consecutive data into internal or external memory. Use only SPI-compatible EPROMs of ≥ 4K bit (16-bit address range). The SPI0 boot routine located in internal ROM memory space executes a boot-stream-formatted program, using the top 16 locations of Page 0 program memory and the top 272 locations of Page 0 data memory.

## Bus Request and Bus Grant

The ADSP-2196 can relinquish control of the data and address buses to an external device. When the external device requires access to the bus, it asserts the bus request (BR) signal. The (BR) signal is arbitrated with core and peripheral requests. External Bus requests have the lowest priority. If no other internal request is pending, the external bus request will be granted. Due to synchronizer and arbitration delays, bus grants will be provided with a minimum of three peripheral clock delays. The ADSP-2196 will respond to the bus grant by:

- Three-stating the data and address buses and the MS3-0, BMS, IOMS, RD, and WR output drivers.
- Asserting the bus grant (BG) signal.

The ADSP-2196 will halt program execution if the bus is granted to an external device and an instruction fetch or data read/write request is made to external general-purpose or peripheral memory spaces. If an instruction requires two external memory read accesses, the bus will not be granted between the two accesses. If an instruction requires an external memory read and an external memory write access, the bus may be granted between the two accesses. The external memory interface can be configured so that the core will have exclusive use of the interface. DMA and Bus Requests will be granted. When the external device releases BR, the DSP releases BG and continues program execution from the point at which it stopped.

The bus request feature operates at all times, even while the DSP is booting and RESET is active.

## September 2001

The ADSP-2196 asserts the BGH pin when it is ready to start another external port access, but is held off because the bus was previously granted. This mechanism can be extended to define more complex arbitration protocols for implementing more elaborate multimaster systems.

## Instruction Set Description

The ADSP-2196 assembly language instruction set has an algebraic syntax that was designed for ease of coding and readability. The assembly language, which takes full advantage of the processor's unique architecture, offers the following benefits:

- ADSP-219x assembly language syntax is a superset of and source-code-compatible (except for two data registers and DAG base address registers) with ADSP-218x family syntax. It may be necessary to restructure ADSP-218x programs to accommodate the ADSP-2196's unified memory space and to conform to its interrupt vector map.
- The algebraic syntax eliminates the need to remember cryptic assembler mnemonics. For example, a typical arithmetic add instruction, such as AR = AX0 + AY0, resembles a simple equation.
- Every instruction, but two, assembles into a single, 24-bit word that can execute in a single instruction cycle. The exceptions are two dual word instructions. One writes 16or 24-bit immediate data to memory, and the other is an absolute jump/call with the 24-bit address specified in the instruction.
- Multifunction instructions allow parallel execution of an arithmetic, MAC, or shift instruction with up to two fetches or one write to processor memory space during a single instruction cycle.
- Program flow instructions support a wider variety of conditional and unconditional jumps/calls and a larger set of conditions on which to base execution of conditional instructions.

## Development Tools

The ADSP-2196 is supported with a complete set of software  and  hardware  development  tools,  including  Analog Devices' emulators and VisualDSP++® development environment. The same emulator hardware that supports other ADSP-219x DSPs, also fully emulates the ADSP-2196.

The VisualDSP++ project management environment lets programmers develop and debug an application. This environment includes an easy-to-use assembler that is based on an algebraic syntax; an archiver (librarian/library builder), a linker, a loader, a cycle-accurate instruction-level simula-

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## September 2001

For current information contact Analog Devices at 800/262-5643

tor, a C/C++ compiler, and a C/C++ run-time library that includes DSP and mathematical functions. Two key points for these tools are:

- Compiled ADSP-219x C/C++ code efficiency-the compiler has been developed for efficient translation of C/C++ code to ADSP-219x assembly. The DSP has architectural features that improve the efficiency of compiled C/C++ code.
- ADSP-218x family code compatibility-The assembler has legacy features to ease the conversion of existing ADSP-218x applications to the ADSP-219x.

Debugging both C/C++ and assembly programs with the VisualDSP++ debugger, programmers can:

- View mixed C/C++ and assembly code (interleaved source and object information)
- Insert break points
- Set conditional breakpoints on registers, memory, and stacks
- Trace instruction execution
- Perform linear or statistical profiling of program execution
- Fill, dump, and graphically plot the contents of memory
- Source level debugging
- Create custom debugger windows

The VisualDSP++ IDE lets programmers define and manage DSP software development. Its dialog boxes and property pages let programmers configure and manage all of the ADSP-219x development tools, including the syntax highlighting in the VisualDSP++ editor. This capability permits:

- Control how the development tools process inputs and generate outputs.
- Maintain a one-to-one correspondence with the tool's command line switches.

Analog Devices' DSP emulators use the IEEE 1149.1 JTAG test  access  port  of  the  ADSP-2196  processor  to  monitor  and control the target board processor during emulation. The emulator provides  full-speed  emulation,  allowing  inspection and modification of memory, registers, and processor stacks. Nonintrusive in-circuit emulation is assured by the use of the processor's JTAG interface-the emulator does not affect target system loading or timing.

In addition to the software and hardware development tools available from Analog Devices, third parties provide a wide range of tools supporting the ADSP-219x processor family. Hardware tools include ADSP-219x PC plug-in cards. Third Party software tools include DSP libraries, real-time operating systems, and block diagram design tools.

ADSP-2196

## Designing an Emulator-Compatible DSP Board (Target)

The White Mountain DSP (Product Line of Analog Devices, Inc.) family of emulators are tools that every DSP developer needs to test and debug hardware and software systems. Analog Devices has supplied an IEEE 1149.1 JTAG Test Access Port (TAP) on each JTAG DSP. The emulator uses the TAP to access the internal features of the DSP, allowing the developer to load code, set breakpoints, observe variables, observe memory, and examine registers. The DSP must be halted to send data and commands, but once an operation has been completed by the emulator, the DSP system is set running at full speed with no impact on system timing.

To use these emulators, the target's design must include the interface between an Analog Devices' JTAG DSP and the emulation header on a custom DSP target board.

## Target Board Header

The emulator interface to an Analog Devices' JTAG DSP is  a  14-pin  header,  as  shown  in  Figure 7.  The  customer  must supply this header on the target board in order to communicate with the emulator. The interface consists of a standard dual row 0.025" square post header, set on 0.1" × 0.1" spacing, with a minimum post length of 0.235". Pin 3 is the key position used to prevent the pod from being inserted backwards. This pin must be clipped on the target board.

Also, the clearance (length, width, and height) around the header must be considered. Leave a clearance of at least 0.15" and 0.10" around the length and width of the header, and reserve a height clearance to attach and detach the pod connector.

Figure 7.  JTAG Target Board Connector for JTAG Equipped Analog Devices DSP (Jumpers in Place)

<!-- image -->

## ADSP-2196

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

For current information contact Analog Devices at 800/262-5643

As can be seen in Figure 7, there are two sets of signals on the header. There are the standard JTAG signals TMS, TCK, TDI, TDO, TRST, and EMU used for emulation purposes (via an emulator). There are also secondary JTAG signals BTMS, BTCK, BTDI, and BTRST that are optionally used for board-level (boundary scan) testing.

When the emulator is not connected to this header, place jumpers across BTMS, BTCK, BTRST, and BTDI as shown in Figure 8. This holds the JTAG signals in the correct state to allow the DSP to run free. Remove all the jumpers when connecting the emulator to the JTAG header.

Figure 8.  JTAG Target Board Connector with No Local Boundary Scan

<!-- image -->

## JTAG Emulator Pod Connector

Figure 9 details the dimensions of the JTAG pod connector at the 14-pin target end. Figure 10 displays the keep-out area for a target board header. The keep-out area allows the pod connector to properly seat onto the target board  header. This board area should contain no components (chips, resistors, capacitors, etc.). The dimensions are referenced to the center of the 0.25" square post pin.

Figure 9.  JTAG Pod Connector Dimensions

<!-- image -->

## September 2001

Figure 10.  JTAG Pod Connector Keep-Out Area

<!-- image -->

## Design-for-Emulation Circuit Information

For details on target board design issues including: single processor connections, multiprocessor scan chains, signal buffering, signal termination, and emulator pod logic, see the EE-68: Analog Devices JTAG Emulation T echnical Reference on the Analog Devices website (www.analog.com)-use site search on 'EE-68'. This document is updated regularly to keep pace with improvements to emulator support.

## Additional Information

This data sheet provides a general overview of the ADSP-2196 architecture and functionality. For detailed information on the ADSP-219x family core architecture and instruction set, refer to the ADSP-219x/2191 DSP Hardware Reference .

## PIN DESCRIPTIONS

ADSP-2196 pin definitions are listed in Table 7. All ADSP-2196 inputs are asynchronous and can be asserted asynchronously to CLKIN (or to TCK for TRST).

Unused inputs should be tied or pulled to VDDEXT or GND, except for ADDR21-0, DATA15-0, PF7-0, and inputs that have internal pull-up or pull-down resistors (TRST, BMODE0, BMODE1, OPMODE, BYPASS, TCK, TMS, TDI, and RESET)-these pins can be left floating. These pins have a logic-level hold circuit that prevents input from floating internally.

The following symbols appear in the Type column of Table 7: G = Ground, I = Input, O = Output, P = Power Supply, and T = Three-State.

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## September 2001

For current information contact Analog Devices at 800/262-5643

ADSP-2196

| Pin                  | Type        | Function                                                                                                                                             |
|----------------------|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| A21-0                | O/T         | External Port Address Bus                                                                                                                            |
| D7-0                 | I/O/T       | External Port Data Bus, least significant 8 bits                                                                                                     |
| D15 /PF15 /SPI1SEL7  | I/O/T I/O I | Data 15 (if 16-bit external bus)/Programmable Flags 15 (if 8-bit external bus)/SPI1 Slave Select output 7 (if 8-bit external bus, when SPI1 enabled) |
| D14 /PF14 /SPI0SEL7  | I/O/T I/O I | Data 14 (if 16-bit external bus)/Programmable Flags 14 (if 8-bit external bus)/SPI0 Slave Select output 7 (if 8-bit external bus, when SPI0 enabled) |
| D13 /PF12 /SPI1SEL6  | I/O/T I/O I | Data 13 (if 16-bit external bus)/Programmable Flags 13 (if 8-bit external bus)/SPI1 Slave Select output 6 (if 8-bit external bus, when SPI1 enabled) |
| D12 /PF12 /SPI0SEL6  | I/O/T I/O I | Data 12 (if 16-bit external bus)/Programmable Flags 12 (if 8-bit external bus)/SPI0 Slave Select output 6 (if 8-bit external bus, when SPI0 enabled) |
| D11 /PF11 /SPI1SEL5  | I/O/T I/O I | Data 11 (if 16-bit external bus)/Programmable Flags 11 (if 8-bit external bus)/SPI1 Slave Select output 5 (if 8-bit external bus, when SPI1 enabled) |
| D10 /PF10 /SPI0SEL5  | I/O/T I/O I | Data 10 (if 16-bit external bus)/Programmable Flags 10 (if 8-bit external bus)/SPI0 Slave Select output 5 (if 8-bit external bus, when SPI0 enabled) |
| D9 /PF9 /SPI1SEL4    | I/O/T I/O I | Data9(if 16-bit external bus)/ProgrammableFlags 9(if 8-bit external bus)/SPI1 Slave Select output 4 (if 8-bit external bus, when SPI1 enabled)       |
| D8 /PF8 /SPI0SEL4    | I/O/T I/O I | Data8(if 16-bit external bus)/ProgrammableFlags 8(if 8-bit external bus)/SPI0 Slave Select output 4 (if 8-bit external bus, when SPI0 enabled)       |
| PF7 /SPI1SEL3 /DF    | I/O/T I I   | Programmable Flags 7/SPI1 Slave Select output 3 (when SPI0 enabled)/Divisor Frequency (divisor select for PLL input during boot)                     |
| PF6 /SPI0SEL3 /MSEL6 | I/O/T I I   | Programmable Flags 6/SPI0 Slave Select output 3 (when SPI0 enabled)/Multiplier Select 6 (during boot)                                                |
| PF5 /SPI1SEL2 /MSEL5 | I/O/T I I   | Programmable Flags 5/SPI1 Slave Select output 2 (when SPI0 enabled)/Multiplier Select 5 (during boot)                                                |
| PF4 /SPI0SEL2 /MSEL4 | I/O/T I I   | Programmable Flags 4/SPI0 Slave Select output 2 (when SPI0 enabled)/Multiplier Select 4 (during boot)                                                |
| PF3 /SPI1SEL1 /MSEL3 | I/O/T I I   | Programmable Flags 3/SPI1 Slave Select output 1 (when SPI0 enabled)/Multiplier Select 3 (during boot)                                                |

## ADSP-2196

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

For current information contact Analog Devices at 800/262-5643

Table 7.  Pin Descriptions  (Continued)

## September 2001

| Pin                  | Type      | Function                                                                                              |
|----------------------|-----------|-------------------------------------------------------------------------------------------------------|
| PF2 /SPI0SEL1 /MSEL2 | I/O/T I I | Programmable Flags 2/SPI0 Slave Select output 1 (when SPI0 enabled)/Multiplier Select 2 (during boot) |
| PF1 /SPISS1 /MSEL1   | I/O/T I I | Programmable Flags 1/SPI1 Slave Select input (when SPI1 enabled)/Multiplier Select 1 (during boot)    |
| PF0 /SPISS0 /MSEL0   | I/O/T I I | Programmable Flags 0/SPI0 Slave Select input (when SPI0 enabled)/Multiplier Select 0 (during boot)    |
| RD                   | O/T       | External Port Read Strobe                                                                             |
| WR                   | O/T       | External Port Write Strobe                                                                            |
| ACK                  | I         | External Port Access Ready Acknowledge                                                                |
| BMS                  | O/T       | External Port Boot Space Select                                                                       |
| IOMS                 | O/T       | External Port IO Space Select                                                                         |
| MS3-0                | O/T       | External Port Memory Space Selects                                                                    |
| BR                   | I         | External Port Bus Request                                                                             |
| BG                   | O         | External Port Bus Grant                                                                               |
| BGH                  | O         | External Port Bus Grant Hang                                                                          |
| HAD15-0              | I/O/T     | Host Port Multiplexed Address and Data Bus                                                            |
| HA16                 | I         | Host Port MSBof Address Bus                                                                           |
| HACK_P               | I         | Host Port ACKPolarity                                                                                 |
| HRD                  | I         | Host Port Read Strobe                                                                                 |
| HWR                  | I         | Host Port Write Strobe                                                                                |
| HACK                 | O         | Host Port Access Ready Acknowledge                                                                    |
| HALE                 | I         | Host Port Address Latch Strobe or Address Cycle Control                                               |
| HCMS                 | I         | Host Port Internal Memory-Internal I/O Memory-Boot Memory Select                                      |
| HCIOMS               | I         | Host Port Internal I/O Memory Select                                                                  |
| CLKIN                | I         | Clock Input/Oscillator input                                                                          |
| XTAL                 | O         | Oscillator output                                                                                     |
| BMODE1-0             | I         | Boot Mode 1-0. TheBMODE1and BMODE0pins have 85 k Ω internal pull-up resistors.                        |
| OPMODE               | I         | Operating Mode. The OPMODEpin has a 85 k Ω internal pull-up resistor.                                 |
| CLKOUT               | O         | Clock Output                                                                                          |
| BYPASS               | I         | Phase-Lock-Loop (PLL) Bypass mode. The BYPASS pin has a 85 k Ω internal pull-up resistor.             |

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## September 2001

For current information contact Analog Devices at 800/262-5643

ADSP-2196

| Table 7. Pin Descriptions (Continued)   | Table 7. Pin Descriptions (Continued)   | Table 7. Pin Descriptions (Continued)                                                                                                                                                                                                                 |
|-----------------------------------------|-----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Pin                                     | Type                                    | Function                                                                                                                                                                                                                                              |
| RCLK1-0                                 | I/O/T                                   | SPORT1-0 Receive Clock                                                                                                                                                                                                                                |
| RCLK2/SCK1                              | I/O/T                                   | SPORT2 Receive Clock/SPI1 Serial Clock                                                                                                                                                                                                                |
| RFS1-0                                  | I/O/T                                   | SPORT1-0 Receive Frame Sync                                                                                                                                                                                                                           |
| RFS2/MOSI1                              | I/O/T                                   | SPORT2 Receive Frame Sync/SPI1 Master-Output, Slave-Input data                                                                                                                                                                                        |
| TCLK1-0                                 | I/O/T                                   | SPORT1-0 Transmit Clock                                                                                                                                                                                                                               |
| TCLK2/SCK0                              | I/O/T                                   | SPORT2 Transmit Clock/SPI0 Serial Clock                                                                                                                                                                                                               |
| TFS1-0                                  | I/O/T                                   | SPORT1-0 Transmit Frame Sync                                                                                                                                                                                                                          |
| TFS2/MOSI0                              | I/O/T                                   | SPORT2 Transmit Frame Sync/SPI0 Master-Output, Slave-Input data                                                                                                                                                                                       |
| DR1-0                                   | I/T                                     | SPORT1-0 Serial Data Receive                                                                                                                                                                                                                          |
| DR2/MISO1                               | I/O/T                                   | SPORT2 Serial Data Receive/SPI1 Master-Input, Slave-Output data                                                                                                                                                                                       |
| DT1-0                                   | O/T                                     | SPORT1-0 Serial Data Transmit                                                                                                                                                                                                                         |
| DT2/MISO0                               | I/O/T                                   | SPORT2 Serial Data Transmit/SPI0 Master-Input, Slave-Output data                                                                                                                                                                                      |
| TMR2-0                                  | I/O/T                                   | Timer output or capture                                                                                                                                                                                                                               |
| RXD                                     | I                                       | UARTSerial Receive Data                                                                                                                                                                                                                               |
| TXD                                     | O                                       | UARTSerial Transmit Data                                                                                                                                                                                                                              |
| RESET                                   | I                                       | ProcessorReset.ResetstheADSP-2196toaknownstateandbeginsexecutionattheprogram memory location specified by the hardware reset vector address. The RESETinput must be asserted (low) at power-up. The RESET pin has a 85 k Ω internal pull-up resistor. |
| TCK                                     | I                                       | Test Clock (JTAG). Provides a clock for JTAG boundary scan. The TCKpin has a 85 k Ω internal pull-up resistor.                                                                                                                                        |
| TMS                                     | I                                       | Test ModeSelect (JTAG). Used to control the test state machine.TheTMSpinhas a 85 k Ω internal pull-up resistor.                                                                                                                                       |
| TDI                                     | I                                       | Test Data Input (JTAG). Provides serial data for the boundary scan logic. The TDI pin has a 85 k Ω internal pull-up resistor.                                                                                                                         |
| TDO                                     | O                                       | Test Data Output (JTAG). Serial scan output of the boundary scan path.                                                                                                                                                                                |
| TRST                                    | I                                       | Test Reset (JTAG). Resets the test state machine. TRSTmust be asserted (pulsed low) after power-up or held low for proper operation of the ADSP-2196. The TRSTpin has a 65 k Ω internal pull-down resistor.                                           |
| EMU                                     | O                                       | Emulation Status (JTAG). Must be connected to the ADSP-2196 emulator target board connector only.                                                                                                                                                     |
| V DDINT                                 | P                                       | Core Power Supply. Nominally 2.5 Vdc and supplies the DSP's core processor. (four pins).                                                                                                                                                              |
| V DDEXT                                 | P                                       | I/O Power Supply; Nominally 3.3 Vdc. (nine pins).                                                                                                                                                                                                     |
| GND                                     | G                                       | Power Supply Return. (twelve pins).                                                                                                                                                                                                                   |
| NC                                      |                                         | Do Not Connect. Reserved pins that must be left open and unconnected.                                                                                                                                                                                 |

## ADSP-2196 SPECIFICATIONS

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

For current information contact Analog Devices at 800/262-5643

## RECOMMENDED OPERATING CONDITIONS

| Parameter   | Description 1                              | Min   | Max     | Unit   |
|-------------|--------------------------------------------|-------|---------|--------|
| V DDINT     | Internal (Core) Supply Voltage             | 2.37  | 2.63    | V      |
| V DDEXT     | External (I/O) Supply Voltage              | TBD   | 3.6     | V      |
| V IH1       | High Level Input Voltage 2 ,@V DDINT = max | 2.0   | V DDEXT | V      |
| V IH2       | High Level Input Voltage 3 ,@V DDINT = max | 2.2   | V DDEXT | V      |
| V IL        | Low Level Input Voltage 2 ,@V DDINT = min  | -0.3  | 0.6     | V      |
| T AMB       | Ambient Operating Temperature              | 0     | 70      | ºC     |

## ELECTRICAL CHARACTERISTICS

| Parameter 1   | Description                   | Test Conditions                 | Min   | Typical   | Max   | Unit   |
|---------------|-------------------------------|---------------------------------|-------|-----------|-------|--------|
| V OH          | High Level Output Voltage 2   | @V DDEXT = min, I OH = -0.5mA   | 2.4   |           |       | V      |
| V OL          | Low Level Output Voltage 2    | @V DDEXT = min, I OL = 2.0mA    |       |           | 0.4   | V      |
| I IH          | High Level Input Current 3, 4 | @V DDEXT = max, V IN =V DD max  |       |           | TBD   | µA     |
| I IL          | Low Level Input Current 2     | @V DDEXT = max, V IN =0V        |       |           | TBD   | µA     |
| I INP         | High Level Input Current 5    | @V DDEXT = max, V IN = V DD max |       |           | TBD   | µA     |
| I ILP         | Low Level Input Current 3     | @V DDEXT = max, V IN =0V        |       |           | TBD   | µA     |
| I OZH         | Three-State Leakage Current 6 | @V DDEXT = max, V IN =V DD max  |       |           | 10    | µA     |
| I OZL         | Three-State Leakage Current 5 | @V DDEXT = max, V IN =0V        |       |           | 10    | µA     |
| I DD-IDLE1    | Supply Current (Core) Idle1   | PLLEnabled,CCLK = 160 MHz 7     |       |           |       | mA     |

September 2001

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

September 2001

For current information contact Analog Devices at 800/262-5643

## ELECTRICAL CHARACTERISTICS  (CONTINUED)

| Parameter 1      | Description                   | Test Conditions                           | Min   | Typical   | Max   | Unit   |
|------------------|-------------------------------|-------------------------------------------|-------|-----------|-------|--------|
| I DD-IDLE2       | Supply Current (Core) Idle2   | PLLEnabled,HCLK = 80 MHz, CCLK Disabled 7 |       | 1         |       | mA     |
| I DD-TYPICAL     | Supply Current (Core) Typical | HCLK=80MHz, CCLK=160 MHz 7,8              |       | 184       |       | mA     |
| I DD-PEAK        | Supply Current (Core) Peak    | HCLK=80MHz, CCLK=160 MHz 7,8              |       | 215       |       | mA     |
| I DD-PERIPHERAL1 | Supply Current (Peripheral)   | PLL Enabled, Core, HCLKDisabled 7         |       | 5         |       | mA     |
| I DD-PERIPHERAL2 | Supply Current (Peripheral)   | HCLK=80MHz 7                              |       | 60        |       | mA     |
| I DD-POWERDOWN   | Supply Current                | PLL, Core, HCLK, CLKIN Disabled 7         |       | 100       |       | µA     |
| C IN             | Input Capacitance 9, 10       | f IN = 1 MHz, T CASE = 25°C, V IN = 2.5 V |       |           | TBD   | pF     |

ADSP-2196

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## ADSP-2196

For current information contact Analog Devices at 800/262-5643

## ABSOLUTE MAXIMUM RATINGS

| V DDINT Internal (Core) Supply Voltage 1,2 .......-0.3 to 3.0V          |
|-------------------------------------------------------------------------|
| V DDEXT External (I/O) Supply Voltage ............-0.3 to 4.6V          |
| V IL -V IH Input Voltage ......................-0.5 toV DDEXT +0.5V     |
| V OL -V OH Output Voltage Swing........-0.5 toV DDEXT +0.5V             |
| C L Load Capacitance............................................ 200 pF |
| t CCLK Core Clock Period........................................6.25 ns |
| f CCLK Core Clock Frequency.............................. 160MHz        |
| t HCLK Peripheral Clock Period...................................10 ns  |
| f HCLK Peripheral Clock Frequency...................... 100MHz          |
| T STORE Storage Temperature Range ..............-65 to 150ºC            |
| T LEAD Lead Temperature (5 seconds)...................... 185ºC         |

## ESD SENSITIVITY

## CAUTION:

ESD (electrostatic discharge) sensitive device. Electrostatic charges as high as 4000V readily accumulate on the human body and test equipment and can discharge without detection. Although the ADSP-2196 features proprietary ESD protection circuitry, permanent  damage  may  occur  on  devices  subjected  to  high-energy  electrostatic discharges. Therefore, proper ESD precautions are recommended to avoid performance degradation or loss of functionality.

## TIMING SPECIFICATIONS

This section contains timing information for the DSP's external signals.

## September 2001

<!-- image -->

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## September 2001

For current information contact Analog Devices at 800/262-5643

## Clock In and Clock Out Cycle Timing

Table 8 and Figure 11 describe clock and reset operations. Per V DDINT Internal (Core) Supply Voltage, -0.3 to 3.0 V on page 24, combinations of CLKIN and clock multipliers must not select core/peripheral clocks in excess of 160/100 MHz.

Table 8.  Clock In and Clock Out Cycle Timing

| Parameter                | Description                                      | Min                      | Max                      | Unit                     |
|--------------------------|--------------------------------------------------|--------------------------|--------------------------|--------------------------|
| Switching Characteristic | Switching Characteristic                         | Switching Characteristic | Switching Characteristic | Switching Characteristic |
| t CKOD                   | CLKOUTdelay from CLKIN                           | 0                        | 5.8                      | ns                       |
| t CKO                    | CLKOUTperiod 1                                   | 10                       |                          | ns                       |
| Timing Requirements      | Timing Requirements                              | Timing Requirements      | Timing Requirements      | Timing Requirements      |
| t CK                     | CLKINperiod 2,3                                  | 6.25                     | 200                      | ns                       |
| t CKL                    | CLKINlow pulse                                   | 2.2                      |                          | ns                       |
| t CKH                    | CLKINhigh pulse                                  | 2.2                      |                          | ns                       |
| t WRST                   | RESET asserted pulsewidth low                    | 200t CLKOUT              |                          | ns                       |
| t MSLS                   | MSELx/BYPASS stable before RESETasserted setup   | 160                      |                          | µs                       |
| t MSLH                   | MSELx/BYPASS stable after RESET de-asserted hold | 1000                     |                          | ns                       |

Figure 11.  Clock In and Clock Out Cycle Timing

<!-- image -->

ADSP-2196

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## ADSP-2196

For current information contact Analog Devices at 800/262-5643

Programmable Flags Cycle Timing

Table 9 and Figure 12 describe programmable flag operations.

Table 9.  Programmable Flags Cycle Timing

| Parameter                | Description                           | Min   | Max   | Unit   |
|--------------------------|---------------------------------------|-------|-------|--------|
| Switching Characteristic | Switching Characteristic              |       |       |        |
| t DFO                    | Flag output delay with respect toHCLK |       | 3     | ns     |
| t HFO                    | Flag output hold after HCLKhigh       | TBD   | TBD   | ns     |
| Timing Requirement       | Timing Requirement                    |       |       |        |
| t HFI                    | Flag input hold is asynchronous       | 3     |       | ns     |

Figure 12.  Programmable Flags Cycle Timing

<!-- image -->

September 2001

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## September 2001

For current information contact Analog Devices at 800/262-5643

## Timer PWM\_OUT Cycle Timing

Table 10 and Figure 13 describe timer expired operations. The input signal is asynchronous in 'width capture mode' and has an absolute maximum input frequency of 50 MHz.

Table 10.  Timer PWM\_OUT Cycle Timing

| Parameter                | Description               | Min   | Max              | Unit   |
|--------------------------|---------------------------|-------|------------------|--------|
| Switching Characteristic | Switching Characteristic  |       |                  |        |
| t HTO                    | Timer pulsewidth output 1 | 6.25  | (2 32 -1) cycles | ns     |

Figure 13.  Timer PWM\_OUT Cycle Timing

<!-- image -->

ADSP-2196

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## ADSP-2196

For current information contact Analog Devices at 800/262-5643

## External Port Write Cycle Timing

Table 11 and Figure 14 describe external port write operations.

The external port lets systems extend read/write accesses in three ways: waitstates, ACK input, and combined waitstates and ACK. To add waits with ACK, the DSP must see ACK low at the rising edge of EMI clock. ACK low causes the DSP to wait, and the DSP requires two EMI clock cycles after ACK goes high to finish the access. For more information, see the External Port chapter in the ADSP-219x/2191 DSP Hardware Reference

Table 11.  External Port Write Cycle Timing

| Parameter                 | Description 1, 2, 3                                | Min                       | Max                       | Unit                      |
|---------------------------|----------------------------------------------------|---------------------------|---------------------------|---------------------------|
| Switching Characteristics | Switching Characteristics                          | Switching Characteristics | Switching Characteristics | Switching Characteristics |
| t CWA                     | EMI 4 clock low to WRasserted delay                |                           | 2.8                       | ns                        |
| t CSWS                    | Chip select asserted to WRde-asserted delay        | 4.3                       | 6.5                       | ns                        |
| t AWS                     | Address valid to WRsetup and delay                 | 4.9                       | 7.0                       | ns                        |
| t AKS                     | ACKasserted to EMI clock high delay                | 6.0                       |                           | ns                        |
| t WSCS                    | WRde-asserted to chip select de-asserted           | 4.8                       | 7.0                       | ns                        |
| t WSA                     | WRde-asserted to address invalid                   | 4.5                       | 6.6                       | ns                        |
| t CWD                     | EMI clock low to WRde-asserted delay               | 2.5                       | 2.7                       | ns                        |
| t WW                      | WRstrobe pulsewidth                                | t HCLK -0.5               |                           | ns                        |
| t CDA                     | WRto data enable access delay                      | 1.5                       | 4.1                       | ns                        |
| t CDD                     | WRto data disable access delay                     | 3.3                       | 7.4                       | ns                        |
| t DSW                     | Data valid to WRde-asserted setup                  | t HCLK -1.4               | t HCLK +4.8               | ns                        |
| t DHW                     | WRde-asserted to data invalid hold time; wt_hold=0 | 3.4                       | 7.4                       | ns                        |
| t DHW                     | WRde-asserted to data invalid hold time; wt_hold=1 | t HCLK +3.4               | t HCLK +7.4               | ns                        |
| Timing Requirement        | Timing Requirement                                 | Timing Requirement        | Timing Requirement        | Timing Requirement        |
| t AKW                     | ACKstrobe pulsewidth                               | 10.0                      |                           | ns                        |

September 2001

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## September 2001

For current information contact Analog Devices at 800/262-5643

ADSP-2196

Figure 14.  External Port Write Cycle Timing

<!-- image -->

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## ADSP-2196

For current information contact Analog Devices at 800/262-5643

## External Port Read Cycle Timing

Table 12 and Figure 15 describe external port read operations. For additional information on the ACK signal, see the discussion on on page 28.

Table 12.  External Port Read Cycle Timing

| Parameter                 | Description 1, 2, 3                            | Min                       | Max                       | Unit                      |
|---------------------------|------------------------------------------------|---------------------------|---------------------------|---------------------------|
| Switching Characteristics | Switching Characteristics                      | Switching Characteristics | Switching Characteristics | Switching Characteristics |
| t CRA                     | EMI 4 clock low to RDasserted delay            |                           | 2.8                       | ns                        |
| t CSRS                    | Chip select asserted to RDasserted delay       | 4.3                       | 6.5                       | ns                        |
| t ARS                     | Address valid to RDsetup and delay             | 4.9                       | 7.0                       | ns                        |
| t AKS                     | ACKasserted to EMI clock high delay            | 6.0                       |                           | ns                        |
| t CRD                     | EMI clock low to RDde-asserted delay           | 2.5                       | 2.7                       | ns                        |
| t RSCS                    | RDde-asserted to chip select de-asserted setup | 4.8                       | 7.0                       | ns                        |
| t RW                      | RDstrobe pulsewidth                            | t HCLK -0.5               |                           | ns                        |
| t RSA                     | RDde-asserted to address invalid setup         | 4.5                       | 6.6                       | ns                        |
| Timing Requirements       | Timing Requirements                            | Timing Requirements       | Timing Requirements       | Timing Requirements       |
| t AKW                     | ACKstrobe pulsewidth                           | 10.0                      |                           | ns                        |
| t CDA                     | RDto data enable access delay                  | 0.0                       |                           | ns                        |
| t RDA                     | RDasserted to data access setup                |                           | t HCLK -5.5               | ns                        |
| t ADA                     | Address valid to data access setup             |                           | t HCLK -0.2               | ns                        |
| t SDA                     | Chip select asserted to data access setup      |                           | t HCLK -0.6               | ns                        |
| t SD                      | Data valid to RDde-asserted setup              | 1.8                       |                           | ns                        |
| t HRD                     | RDde-asserted to data invalid hold             | 0.0                       |                           | ns                        |

September 2001

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## September 2001

For current information contact Analog Devices at 800/262-5643

ADSP-2196

Figure 15.  External Port Read Cycle Timing

<!-- image -->

## ADSP-2196

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

For current information contact Analog Devices at 800/262-5643

External Port Bus Request and Grant Cycle Timing

Table 13 and Figure 16 describe external port bus request and bus grant operations.

Table 13.  External Port Bus Request and Grant Cycle Timing

| Parameter                 | Description 1, 2, 3                           | Min   | Max   | Unit   |
|---------------------------|-----------------------------------------------|-------|-------|--------|
| Switching Characteristics | Switching Characteristics                     |       |       |        |
| t SD                      | CLKOUThigh to xMS, address, and RD/WR disable |       | 4.3   | ns     |
| t SE                      | CLKOUTlowto xMS, address, and RD/WRenable     |       | 4.0   | ns     |
| t DBG                     | CLKOUThigh to BGasserted setup                |       | 2.2   | ns     |
| t EBG                     | CLKOUThigh to BGde-asserted hold time         |       | 2.2   | ns     |
| t DBH                     | CLKOUThigh to BGHasserted setup               |       | 2.4   | ns     |
| t EBH                     | CLKOUThigh to BGHde-asserted hold time        |       | 2.4   | ns     |
| Timing Requirements       | Timing Requirements                           |       |       |        |
| t BS                      | BRasserted to CLKOUThigh setup                | 4.6   |       | ns     |
| t BH                      | CLKOUThigh to BRde-asserted hold time         | 0.0   |       | ns     |

September 2001

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## September 2001

For current information contact Analog Devices at 800/262-5643

ADSP-2196

Figure 16.  External Port Bus Request and Grant Cycle Timing

<!-- image -->

## ADSP-2196

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

For current information contact Analog Devices at 800/262-5643

Host Port ALE Mode Write Cycle Timing

Table 14 and Figure 17 describe host port write operations in Address Latch Enable (ALE) mode. For more information on ACK, Ready, ALE, and ACC mode selection, see the Host port modes description on page 10.

Table 14.  Host Port ALE Mode Write Cycle Timing

| Parameter                 | Description                                                                        | Min                       | Max                       | Unit                      |
|---------------------------|------------------------------------------------------------------------------------|---------------------------|---------------------------|---------------------------|
| Switching Characteristics | Switching Characteristics                                                          | Switching Characteristics | Switching Characteristics | Switching Characteristics |
| t WHKS                    | HWRasserted to HACKasserted (setup, ACKMode)                                       | 0.6                       | 0.6+t NH 1                | ns                        |
| t WHKH                    | HWRde-asserted to HACKde-asserted (hold, ACKMode)                                  |                           | 2                         | ns                        |
| t WHS                     | HWRasserted to HACKasserted (setup, Ready Mode)                                    |                           | 0.6                       | ns                        |
| t WHH                     | HWRasserted to HACKde-asserted (hold, Ready Mode)                                  |                           | 2+t NH 1                  | ns                        |
| Timing Requirements       | Timing Requirements                                                                | Timing Requirements       | Timing Requirements       | Timing Requirements       |
| t CSAL                    | HCMSor HCIOMS asserted toHALE asserted                                             | 0                         |                           | ns                        |
| t ALPW                    | HALEasserted pulsewidth                                                            | 4                         |                           | ns                        |
| t ALCSW                   | HALEde-asserted toHCMSor HCIOMSde-asserted                                         | 1                         |                           | ns                        |
| t WCSW                    | HWRde-asserted to HCMSor HCIOMS de-asserted                                        | 1                         |                           | ns                        |
| t ALW                     | HALEde-asserted to HWRasserted                                                     | 1                         |                           | ns                        |
| t WCS                     | HWRde-asserted (after last byte) toHCMSor HCIOMSde-asserted (ready for next write) | 1                         |                           | ns                        |
| t HKWD                    | HACKasserted to HWRde-asserted (hold, ACKMode)                                     | 1.5                       |                           | ns                        |
| t AALS                    | Address valid to HALEde-asserted (setup)                                           | 4                         |                           | ns                        |
| t ALAH                    | HALEde-asserted to address invalid (hold)                                          | 1.5                       |                           | ns                        |
| t DWS                     | Data valid to HWRde-asserted (setup)                                               | 4                         |                           | ns                        |
| t WDH                     | HWRde-asserted to data invalid (hold)                                              | 1                         |                           | ns                        |

September 2001

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## September 2001

For current information contact Analog Devices at 800/262-5643

ADSP-2196

Figure 17.  Host Port ALE Mode Write Cycle Timing

<!-- image -->

## ADSP-2196

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

For current information contact Analog Devices at 800/262-5643

Host Port ACC Mode Write Cycle Timing

Table 15 and Figure 18 describe host port write operations in Address Cycle Control (ACC) mode. For more information on ACK, Ready, ALE, and ACC mode selection, see the Host port modes description on page 10.

Table 15.  Host Port ACC Mode Write Cycle Timing

| Parameter                 | Description                                                                        | Min                       | Max                       | Unit                      |
|---------------------------|------------------------------------------------------------------------------------|---------------------------|---------------------------|---------------------------|
| Switching Characteristics | Switching Characteristics                                                          | Switching Characteristics | Switching Characteristics | Switching Characteristics |
| t WHKS                    | HWRasserted to HACKasserted (setup, ACKMode)                                       | 0.6                       | 0.6+t NH 1                | ns                        |
| t WHKH                    | HWRde-asserted to HACKde-asserted (hold, ACKMode)                                  |                           | 2                         | ns                        |
| t WHS                     | HWRasserted to HACKasserted (setup, Ready Mode)                                    |                           | 0.6                       | ns                        |
| t WHH                     | HWRasserted to HACKde-asserted (hold, Ready Mode)                                  |                           | 2+t NH 1                  | ns                        |
| Timing Requirements       | Timing Requirements                                                                | Timing Requirements       | Timing Requirements       | Timing Requirements       |
| t WAL                     | HWRasserted to HALEde-asserted (delay)                                             | 1.5                       |                           | ns                        |
| t CSAL                    | HCMSor HCIOMS asserted toHALE asserted (delay)                                     | 0                         |                           | ns                        |
| t ALCS                    | HALEde-asserted to optionalHCMSorHCIOMS de-asserted                                | 1                         |                           | ns                        |
| t WCSW                    | HWRde-asserted to HCMSor HCIOMS de-asserted                                        | 1                         |                           | ns                        |
| t ALW                     | HALEasserted to HWRasserted                                                        | 0.5                       |                           | ns                        |
| t CSW                     | HCMSor HCIOMS asserted to HWRasserted                                              | 1                         | 2                         | ns                        |
| t WCS                     | HWRde-asserted (after last byte) toHCMSor HCIOMSde-asserted (ready for next write) | 1                         |                           | ns                        |
| t ALEW                    | HALEde-asserted to HWRasserted                                                     | 1                         |                           | ns                        |
| t HKWD                    | HACKasserted to HWRde-asserted (hold, ACKMode)                                     | 1.5                       |                           | ns                        |
| t ADW                     | Address valid to HWRasserted (setup)                                               | 4                         |                           | ns                        |
| t WAD                     | HWRde-asserted to address invalid (hold)                                           | 1                         |                           | ns                        |
| t DWS                     | Data valid to HWRde-asserted (setup)                                               | 4                         |                           | ns                        |
| t WDH                     | HWRde-asserted to data invalid (hold)                                              | 1                         |                           | ns                        |

## September 2001

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## September 2001

For current information contact Analog Devices at 800/262-5643

ADSP-2196

Figure 18.  Host Port ACC Mode Write Cycle Timing

<!-- image -->

## ADSP-2196

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

For current information contact Analog Devices at 800/262-5643

Host Port ALE Mode Read Cycle Timing

Table 16 and Figure 19 describe host port read operations in Address Latch Enable (ALE) mode. For more information on ACK, Ready, ALE, and ACC mode selection, see the Host port modes description on page 10.

Table 16.  Host Port ALE Mode Read Cycle Timing

| Parameter                 | Description                                                                        | Min                       | Max                       | Unit                      |
|---------------------------|------------------------------------------------------------------------------------|---------------------------|---------------------------|---------------------------|
| Switching Characteristics | Switching Characteristics                                                          | Switching Characteristics | Switching Characteristics | Switching Characteristics |
| t RHKS                    | HRDasserted to HACKasserted (setup, ACKMode)                                       | 2                         | 2+t NH 1                  | ns                        |
| t RHKH                    | HRDde-asserted to HACKde-asserted (hold, ACKMode)                                  |                           | 2                         | ns                        |
| t RHS                     | HRDasserted to HACKasserted (setup, Ready Mode)                                    |                           | 2                         | ns                        |
| t RHH                     | HRDasserted to HACKde-asserted (hold, Ready Mode)                                  |                           | 2+t NH 1                  | ns                        |
| Timing Requirements       | Timing Requirements                                                                | Timing Requirements       | Timing Requirements       | Timing Requirements       |
| t CSAL                    | HCMSor HCIOMS asserted toHALE asserted (delay)                                     | 0                         |                           | ns                        |
| t ALCS                    | HALEde-asserted to optionalHCMSorHCIOMS de-asserted                                | 1                         |                           | ns                        |
| t RCSW                    | HRDde-asserted toHCMSor HCIOMSde-asserted                                          | 1                         |                           | ns                        |
| t ALR                     | HALEde-asserted to HRDasserted                                                     | 1                         |                           | ns                        |
| t RCS                     | HRDde-asserted (after last byte) to HCMSor HCIOMSde-asserted (ready for next read) | 1                         |                           | ns                        |
| t ALPW                    | HALEasserted pulsewidth                                                            | 4                         |                           | ns                        |
| t HKRD                    | HACKasserted to HRDde-asserted (hold, ACKMode)                                     | 1.5                       |                           | ns                        |
| t AALS                    | Address valid to HALEde-asserted (setup)                                           | 4                         |                           | ns                        |
| t ALAH                    | HALEde-asserted to address invalid (hold)                                          | 1                         |                           | ns                        |
| t RDH                     | HRDde-asserted to data invalid (hold)                                              | 1                         |                           | ns                        |

September 2001

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## September 2001

For current information contact Analog Devices at 800/262-5643

ADSP-2196

Figure 19.  Host Port ALE Mode Read Cycle TIming

<!-- image -->

## ADSP-2196

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

For current information contact Analog Devices at 800/262-5643

Host Port ACC Mode Read Cycle Timing

Table 17 and Figure 20 describe host port read operations in Address Cycle Control (ACC) mode. For more information on ACK, Ready, ALE, and ACC mode selection, see the Host port modes description on page 10.

Table 17.  Host Port ACC Mode Read Cycle Timing

| Parameter                 | Description                                                                        | Min                       | Max                       | Unit                      |
|---------------------------|------------------------------------------------------------------------------------|---------------------------|---------------------------|---------------------------|
| Switching Characteristics | Switching Characteristics                                                          | Switching Characteristics | Switching Characteristics | Switching Characteristics |
| t RHKS                    | HRDasserted to HACKasserted (setup, ACKMode)                                       | 1                         | 1+t NH 1                  | ns                        |
| t RHKH                    | HRDde-asserted to HACKde-asserted (hold, ACKMode)                                  |                           | 2                         | ns                        |
| t RHS                     | HRDasserted to HACKasserted (setup, Ready Mode)                                    |                           | 1                         | ns                        |
| t RHH                     | HRDasserted to HACKde-asserted (hold, Ready Mode)                                  |                           | 2+t NH 1                  | ns                        |
| Timing Requirements       | Timing Requirements                                                                | Timing Requirements       | Timing Requirements       | Timing Requirements       |
| t CSAL                    | HCMSor HCIOMS asserted toHALE asserted (delay)                                     | 0                         |                           | ns                        |
| t ALCS                    | HALEde-asserted to optionalHCMSorHCIOMS de-asserted                                | 1                         |                           | ns                        |
| t RCSW                    | HRDde-asserted toHCMSor HCIOMSde-asserted                                          | 1                         |                           | ns                        |
| t ALW                     | HALEasserted to HWRasserted                                                        | 0.5                       |                           | ns                        |
| t ALER                    | HALEde-asserted to HWRasserted                                                     | 1                         |                           | ns                        |
| t CSR                     | HCMSor HCIOMS asserted to HRDasserted                                              | 1                         | 2                         | ns                        |
| t RCS                     | HRDde-asserted (after last byte) to HCMSor HCIOMSde-asserted (ready for next read) | 1                         |                           | ns                        |
| t WAL                     | HWRde-asserted to HALEde-asserted (delay)                                          | 1.5                       |                           | ns                        |
| t HKRD                    | HACKasserted to HRDde-asserted (hold, ACKMode)                                     | 1.5                       |                           | ns                        |
| t ADW                     | Address valid to HWRde-asserted (setup)                                            | 4                         |                           | ns                        |
| t WAD                     | HWRde-asserted to address invalid (hold)                                           | 1                         |                           | ns                        |
| t RDH                     | HRDde-asserted to data invalid (hold)                                              | 1                         |                           | ns                        |

September 2001

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## September 2001

For current information contact Analog Devices at 800/262-5643

ADSP-2196

Figure 20.  Host Port ACC Mode Read Cycle TIming

<!-- image -->

## ADSP-2196

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

For current information contact Analog Devices at 800/262-5643

Serial Port (SPORT) Clocks and Data Timing

Table 18 and Figure 21 describe SPORT transmit and receive operations.

Table 18.  Serial Port (SPORT) Clocks and Data Timing 1

| Parameter                 | Description                                      | Min                       | Max                       | Unit                      |
|---------------------------|--------------------------------------------------|---------------------------|---------------------------|---------------------------|
| Switching Characteristics | Switching Characteristics                        | Switching Characteristics | Switching Characteristics | Switching Characteristics |
| t HOFSE                   | RFS Hold after RCLK(Internally Generated RFS) 2  | 0                         | 12.4                      | ns                        |
| t DFSE                    | RFS Delay after RCLK(Internally Generated RFS) 2 | 0                         | 12.4                      | ns                        |
| t DDTEN                   | Transmit Data Delay after TCLK 2                 | 0                         | 12.1                      | ns                        |
| t DDTTE                   | Data Disable from External TCLK 2                | 0                         | 12.0                      | ns                        |
| t DDTIN                   | Data Enable from Internal TCLK 2                 | 0                         | 6.8                       | ns                        |
| t DDTTI                   | Data Disable from Internal TCLK 2                | 0                         | 6.3                       | ns                        |
| Timing Requirements       | Timing Requirements                              | Timing Requirements       | Timing Requirements       | Timing Requirements       |
| t SCLKIW                  | TCLK/RCLKWidth                                   | 20                        |                           | ns                        |
| t SFSI                    | TFS/RFS Setup before TCLK/RCLK 3                 | -0.6                      |                           | ns                        |
| t HFSI                    | TFS/RFS Hold after TCLK/RCLK 3, 4                | -0.3                      |                           | ns                        |
| t SDRI                    | Receive Data Setup before RCLK 3                 | -2.3                      |                           | ns                        |
| t HDRI                    | Receive Data Hold after RCLK 3                   | 1.9                       |                           | ns                        |
| t SCLKW                   | TCLK/RCLKWidth                                   | 20                        |                           | ns                        |
| t SFSE                    | TFS/RFS Setup before TCLK/RCLK 3                 | -0.6                      |                           | ns                        |
| t HFSE                    | TFS/RFS Hold after TCLK/RCLK 3, 4                | -0.6                      |                           | ns                        |
| t SDRE                    | Receive Data Setup before RCLK 3                 | -2.2                      |                           | ns                        |
| t HDRE                    | Receive Data Hold after RCLK 3                   | 1.8                       |                           | ns                        |

September 2001

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## September 2001

For current information contact Analog Devices at 800/262-5643

ADSP-2196

Figure 21.  Serial Port (SPORT) Clocks and Data

<!-- image -->

## ADSP-2196

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

For current information contact Analog Devices at 800/262-5643

Serial Port (SPORT) Frame Synch Timing

Table 19 and Figure 22 describe SPORT frame synch operations.

To determine whether communication is possible between two devices at clock speed n, the following specifications must be confirmed: 1) frame sync delay and frame sync setup and hold, 2) data delay and data setup and hold, and 3) R/TCLK width.

Table 19.  Serial Port (SPORT) Frame Synch Timing

| Parameter                 | Description                                                          | Min   | Max   | Unit   |
|---------------------------|----------------------------------------------------------------------|-------|-------|--------|
| Switching Characteristics | Switching Characteristics                                            |       |       |        |
| t HOFSE                   | RFS Hold after RCLK(Internally Generated RFS) 1                      |       | 12.4  | ns     |
| t HOFSI                   | TFS Hold after TCLK(Internally Generated TFS) 1                      |       | 12.2  | ns     |
| t DDTENFS                 | Data Enable fromlateFSorMCE=1,MFD=0 2                                |       | 4.7   | ns     |
| t DDTLFSE                 | Data Delay from Late External TFS or External RFS with MCE=1,MFD=0 3 |       | 4.7   | ns     |
| t HDTE                    | Transmit Data Hold after TCLK(external clk) 1                        |       | 12.4  | ns     |
| t HDTI                    | Transmit Data Hold after TCLK(internal clk) 1                        | 0     | 12.2  | ns     |
| t DDTE                    | Transmit Data Delay after TCLK(external clk) 1                       | 0     | 12.2  | ns     |
| t DDTI                    | Transmit Data Delay after TCLK(internal clk) 1                       | 0     | 11.1  | ns     |
| Timing Requirements       | Timing Requirements                                                  |       |       |        |
| t SFSE                    | TFS/RFS Setup before TCLK/RCLK (external clk) 3                      | -0.6  | TBD   | ns     |
| t SFSI                    | TFS/RFS Setup before TCLK/RCLK (internal clk) 3                      | -0.6  | TBD   | ns     |

September 2001

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## September 2001

For current information contact Analog Devices at 800/262-5643

## /G28 /G3b /G37 /G28 /G35 /G31 /G24 /G2f /G3 /G35 /G28 /G26 /G28 /G2c /G39 /G28 /G3 /G29 /G36 /G3 /G3a /G2c /G37 /G2b /G3 /G30 /G26 /G28 /G3 /G20 /G3 /G14 /Gf /G3 /G30 /G29 /G27 /G3 /G20 /G3 /G13

Figure 22.  Serial Port (SPORT) Frame Synch

<!-- image -->

ADSP-2196

## ADSP-2196

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

For current information contact Analog Devices at 800/262-5643

Serial Peripheral Interface (SPI) Port-Master Timing

Table 20 and Figure 23 describe SPI port master operations.

Table 20.  Serial Peripheral Interface (SPI) Port-Master Timing

| Parameter                 | Description                                     | Min                       | Max                       | Unit                      |
|---------------------------|-------------------------------------------------|---------------------------|---------------------------|---------------------------|
| Switching Characteristics | Switching Characteristics                       | Switching Characteristics | Switching Characteristics | Switching Characteristics |
| t SDSCIM                  | SPIxSEL low to first SCLKedge (x=0 or 1)        | 2t HCLK                   |                           | ns                        |
| t SPICHM                  | Serial clock high period                        | 2t HCLK                   |                           | ns                        |
| t SPICLM                  | Serial clock low period                         | 2t HCLK                   |                           | ns                        |
| t SPICLK                  | Serial clock period                             | 4t HCLK                   |                           | ns                        |
| t HDSM                    | Last SCLKedge to SPIxSEL high (x=0 or 1)        | 2t HCLK                   |                           | ns                        |
| t SPITDM                  | Sequential transfer delay                       | 2t HCLK                   |                           | ns                        |
| t DDSPID                  | SCLKedge to data out valid (data out delay)     | 0                         | 6                         | ns                        |
| t HDSPID                  | SCLKedge to data out invalid (data out hold)    | 0                         | 5                         | ns                        |
| Timing Requirements       | Timing Requirements                             | Timing Requirements       | Timing Requirements       | Timing Requirements       |
| t SSPID                   | Data input valid to SCLKedge (data input setup) | 1.6                       |                           | ns                        |
| t HSPID                   | SCLKsampling edge to data input invalid         | 1.6                       |                           | ns                        |

September 2001

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## September 2001

For current information contact Analog Devices at 800/262-5643

ADSP-2196

Figure 23.  Serial Peripheral Interface (SPI) Port-Master

<!-- image -->

## ADSP-2196

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

For current information contact Analog Devices at 800/262-5643

Serial Peripheral Interface (SPI) Port-Slave Timing

Table 21 and Figure 24 describe SPI port slave operations.

Table 21.  Serial Peripheral Interface (SPI) Port-Slave Timing

| Parameter                 | Description                                     | Min                       | Max                       | Unit                      |
|---------------------------|-------------------------------------------------|---------------------------|---------------------------|---------------------------|
| Switching Characteristics | Switching Characteristics                       | Switching Characteristics | Switching Characteristics | Switching Characteristics |
| t DSOE                    | SPISS assertion to data out active              | 0                         | 6                         | ns                        |
| t DSDHI                   | SPISS deassertion to data high impedance        | 0                         | 6                         | ns                        |
| t DDSPID                  | SCLKedge to data out valid (data out delay)     | 0                         | 5                         | ns                        |
| t HDSPID                  | SCLKedge to data out invalid (data out hold)    | 0                         | 5                         | ns                        |
| Timing Requirements       | Timing Requirements                             | Timing Requirements       | Timing Requirements       | Timing Requirements       |
| t SPICHS                  | Serial clock high period                        | 2t HCLK                   |                           | ns                        |
| t SPICLS                  | Serial clock low period                         | 2t HCLK                   |                           | ns                        |
| t SPICLK                  | Serial clock period                             | 4t HCLK                   |                           | ns                        |
| t HDS                     | Last SPICLK edge to SPISS not asserted          | 2t HCLK                   |                           | ns                        |
| t SPITDS                  | Sequential Transfer Delay                       | 2t HCLK                   |                           | ns                        |
| t SDSCI                   | SPISS assertion to first SPICLK edge            | 2t HCLK                   |                           | ns                        |
| t SSPID                   | Data input valid to SCLKedge (data input setup) | 1.6                       |                           | ns                        |
| t HSPID                   | SCLKsampling edge to data input invalid         | 1.6                       |                           | ns                        |

September 2001

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## September 2001

For current information contact Analog Devices at 800/262-5643

ADSP-2196

Figure 24.  Serial Peripheral Interface (SPI) Port-Slave

<!-- image -->

## ADSP-2196

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

For current information contact Analog Devices at 800/262-5643

Universal Asynchronous Receiver-Transmitter (UART) Port-Receive and Transmit Timing

Figure 25 describes UART port receive and transmit operations. The maximum baud rate is HCLK/16. As shown in Figure 25 there is some latency between the generation

## September 2001

internal UART interrupts and the external data operations. These latencies are negligible at the data transmission rates for the UART.

Figure 25.  UART Port-Receive and Transmit Timing

<!-- image -->

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## September 2001

Table 22.  JTAG Port Timing

| Parameter                 | Description                         | Min   | Max   | Unit   |
|---------------------------|-------------------------------------|-------|-------|--------|
| Switching Characteristics | Switching Characteristics           |       |       |        |
| t DTDO                    | TDODelay fromTCKLow                 |       | 4     | ns     |
| t DSYS                    | System Outputs Delay After TCKLow 1 | 0     | 5     | ns     |
| Timing Parameters         | Timing Parameters                   |       |       |        |
| t TCK                     | TCKPeriod                           | 20    |       | ns     |
| t STAP                    | TDI, TMSSetup Before TCKHigh        |       | 4     | ns     |
| t HTAP                    | TDI, TMSHold After TCKHigh          |       | 4     | ns     |
| t SSYS                    | System Inputs Setup Before TCKLow 2 |       | 4     | ns     |
| t HSYS                    | System Inputs Hold AfterTCKLow 2    |       | 5     | ns     |
| t TRSTW                   | TRSTPulsewidth 3                    | 4     |       | ns     |

Figure 26.  JTAG Port Timing

<!-- image -->

For current information contact Analog Devices at 800/262-5643

ADSP-2196

## JTAG Test And Emulation Port Timing

Table 22 and Figure 26 describe JTAG port operations.

## ADSP-2196

## Output Drive Currents

Figure 27 shows typical I-V characteristics for the output drivers of  the  ADSP-2196.  The curves  represent  the  current drive capability of the output drivers as a function of output voltage.

## Power Dissipation

Total power dissipation has two components, one due to internal circuitry and one due to the switching of external output drivers. Internal power dissipation is dependent on the instruction execution sequence and the data operands involved. Using the current-versus-operation information in Table 23, designers can estimate the ADSP-2196's internal power supply (V DDINT ) input current for a specific application, according to the formula in Figure 28.

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

For current information contact Analog Devices at 800/262-5643

## September 2001

Figure 27.  ADSP-2196 Typical Drive Currents

<!-- image -->

Table 23.  ADSP-2196 Operation Types Versus Input Current

| Activity     | I DD (mA) 1 CCLK = 80 MHz   | I DD (mA) 1 CCLK = 80 MHz   | I DD (mA) 1 CCLK = 160 MHz   | I DD (mA) 1 CCLK = 160 MHz   |
|--------------|-----------------------------|-----------------------------|------------------------------|------------------------------|
|              | Core                        | Peripheral                  | Core                         | Peripheral                   |
| Power down 2 | 0                           | 0                           | 0                            | 0                            |
| Idle 1 3     | 0                           | 3                           | 0                            | 5                            |
| Idle 2 4     | 0                           | 30                          | 0                            | 60                           |
| Typical 5    | 95                          | 30                          | 184                          | 60                           |
| Peak 6       | 112                         | 30                          | 215                          | 60                           |

<!-- formula-not-decoded -->

## Figure 28.  I DDINT  Calculation

The external component of total power dissipation is caused by the switching of output pins. Its magnitude depends on:

- The number of output pins that switch during each cycle (O)
- The maximum frequency at which they can switch (f)
- Their load capacitance (C)
- Their voltage swing (VDD) and is calculated by the formula in Figure 29.

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## September 2001

For current information contact Analog Devices at 800/262-5643

<!-- formula-not-decoded -->

Figure 29.  P EXT  Calculation

The load capacitance should include the processor's package capacitance (CIN ). The switching frequency includes driving the load high and then back low. Address and data pins can drive high and low at a maximum rate of 1/(2t CK). The write strobe can switch every cycle at a frequency of 1/t CK. Select pins switch at 1/(2t CK), but selects can switch on each cycle. For example, estimate P EXT with the following assumptions:

- A system with one bank of external data memory-asynchronous RAM (16-bit)
- One 64K × 16 RAM chip is used, each with a load of 10 pF
- Maximum peripheral speed HCLK = 100 MHz
- External data memory writes occur every other cycle, a rate of 1/(4t HCLK), with 50% of the pins switching
- The bus cycle time is 100 MHz (tHCLK = 20 nsec)

ADSP-2196

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## September 2001

For current information contact Analog Devices at 800/262-5643

The PEXT equation is calculated for each class of pins that can drive as shown in Table 24.

Table 24.  P EXT Calculation

| Pin Type   |   # of Pins | %Switching   | × C   | × f       | × V DD 2   | = P EXT   |
|------------|-------------|--------------|-------|-----------|------------|-----------|
| Address    |          15 | 50           | TBDpF | × 25.0MHz | × 10.9 V   | =TBDW     |
| MSx        |           1 | 0            | TBDpF | × 25.0MHz | × 10.9 V   | =TBDW     |
| WR         |           1 | -            | TBDpF | × 25 MHz  | × 10.9 V   | =TBDW     |
| Data       |          16 | 50           | TBDpF | × 25.0MHz | × 10.9 V   | =TBDW     |
| CLKOUT     |           1 | -            | TBDpF | × 100 MHz | × 10.9 V   | =TBDW     |

PEXT=TBDW

The output disable time t DIS is the difference between t MEASURED and t DECAY as shown in Figure 32. The time t MEASURED is the interval from when the reference signal switches to when the output voltage decays -V from the measured output high or output low voltage. The t DECAY is calculated with test loads C L and I L , and with -V equal to 0.5 V .

Figure 32.  Output Enable/Disable

<!-- image -->

## Output Enable Time

Output pins are considered to be enabled when they have made a transition from a high impedance state to when they start driving. The output enable time t ENA is the interval from when a reference signal reaches a high or low voltage level to when the output has reached a specified high or low trip point, as shown in the Output Enable/Disable diagram (Figure 32). If multiple pins (such as the data bus) are enabled, the measurement value is that of the first pin to start driving.

A typical power consumption can now be calculated for these conditions by adding a typical internal power dissipation with the formula in Figure 30.

<!-- formula-not-decoded -->

Figure 30.  P TOTAL  (Typical) Calculation

## Where:

- P EXT is from Table 24
- P INT is I DDINT × 2.5V, using the calculation I DDINT listed in Power Dissipation on page 52

Note that the conditions causing a worst-case P EXT are different from those causing a worst-case PINT. Maximum PINT cannot occur while 100% of the output pins are switching from all ones to all zeros. Note also that it is not common for an application to have 100% or even 50% of the outputs switching simultaneously.

Test Conditions

The DSP is tested for output enable, disable, and hold time.

## Output Disable Time

Output pins are considered to be disabled when they stop driving, go into a high impedance state, and start to decay from their output high or low voltage. The time for the voltage on the bus to decay by - V is dependent on the capacitive load, C L and the load current, I L .  This  decay time can be approximated by the equation in Figure 31.

<!-- formula-not-decoded -->

Figure 31.  Decay Time Calculation

ADSP-2196

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## September 2001

For current information contact Analog Devices at 800/262-5643

Figure 33.  Equivalent Device Loading for AC Measurements (Includes All Fixtures)

<!-- image -->

/G32 /G2b system, first calculate t DECAY using the equation given in Figure 31. Choose -V to be the difference between the ADSP-2196's output voltage and the input threshold for the device requiring the hold time. A typical -V will be

Figure 35.  Typical Output Rise Time (10%-90%, VDDEXT  =Max) vs. Load Capacitance

<!-- image -->

Environmental Conditions The thermal characteristics in  which  the  DSP  is  operating influence performance.

## Thermal Characteristics

The ADSP-2196 comes in a 144-lead LQFP or 144-lead Ball Grid Array (mini-BGA) package. The ADSP-2196 is specified for an ambient temperature (T AMB)  as  calculated using the formula in Figure 38. T o ensure that the TAMB data sheet specification is not exceeded, a heatsink and/or an air flow source  may be  used.  A  heatsink  should  be attached to the ground plane (as close as possible to the thermal pathways) with a thermal adhesive.

## Where:

- TAMB = Ambient temperature (measured near top surface of package)
- PD = Power dissipation in W (this value depends upon the specific application; a method for calculating PD is shown under Power Dissipation).

Output delays and holds are based on standard capacitive loads: 50 pF on all pins (see Figure 37). The delay and hold specifications given should be derated by a factor of 1.5 ns/50 pF for loads other than the nominal value of 50 pF. Figure 35 and

Figure 36 show how output

- θ CA =  V alue  from  Table 25.
- θ JB = TBD°C/W

There are some important things to note about these TAMB calculations and the

- values in Table 25:
- This represents thermal resistance at total power of TBDW.
- For the LQFP package: θ JC = 0.96°C/W For the mini-BGA package: θ JC = 8.4°C/W

## ADSP-2196

rise time varies with capacitance. These figures also show graphically how output delays and holds vary with load capacitance. (Note that this graph or derating does not apply to output disable delays; see Output Disable Time on page 54.) The graphs in these figures may not be linear outside the ranges shown.

ADSP-2196

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

For current information contact Analog Devices at 800/262-5643

Figure 36.  Typical Output Rise Time (10%-90%, V DDEXT  =Min) vs. Load Capacitance

<!-- image -->

Figure 37.  Typical Output Delay or Hold vs. Load Capacitance (at Max Case Temperature)

<!-- image -->

<!-- formula-not-decoded -->

Figure 38.  T CASE  Calculation

Table 25. θ CA Values 1

| Airflow (Linear Ft./Min.)   |    0 |   100 |   200 |   400 |   600 |
|-----------------------------|------|-------|-------|-------|-------|
| Airflow (Meters/Second)     |  0   |   0.5 |   1   |   2   |   3   |
| LQFP: θ CA (°C/W)           | 44.3 |  41.4 |  38.5 |  35.3 |  32.1 |
| Mini-BGA: θ CA (°C/W)       | 26   |  24   |  22   |  20.9 |  19.8 |

September 2001

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

ADSP-2196

For current information contact Analog Devices at 800/262-5643

1 These are preliminary estimates.

September 2001

## ADSP-2196

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

For current information contact Analog Devices at 800/262-5643

## September 2001

| ADSP-2196 144-Lead LQFP Pinout                 | ADSP-2196 144-Lead LQFP Pinout                 | Table 26. 144-Lead LQFP Pins (Alphabetically By Signal) (Continued)   | Table 26. 144-Lead LQFP Pins (Alphabetically By Signal) (Continued)   | Table 26. 144-Lead LQFP Pins (Alphabetically By Signal) (Continued)   | Table 26. 144-Lead LQFP Pins (Alphabetically By Signal) (Continued)   | Table 26. 144-Lead LQFP Pins (Alphabetically By Signal) (Continued)   | Table 26. 144-Lead LQFP Pins (Alphabetically By Signal) (Continued)   |
|------------------------------------------------|------------------------------------------------|-----------------------------------------------------------------------|-----------------------------------------------------------------------|-----------------------------------------------------------------------|-----------------------------------------------------------------------|-----------------------------------------------------------------------|-----------------------------------------------------------------------|
| Table 26 lists the LQFP pinout by signal name. | Table 26 lists the LQFP pinout by signal name. | SIGNAL                                                                | PIN #                                                                 | SIGNAL                                                                | PIN #                                                                 | SIGNAL                                                                | PIN #                                                                 |
| Table 26. 144-Lead LQFP                        | Table 26. 144-Lead LQFP                        | BMODE1                                                                | 71                                                                    | HAD0                                                                  | 3                                                                     | PF0                                                                   | 34                                                                    |
| Pins (Alphabetically By Signal)                | Pins (Alphabetically By Signal)                | BMS                                                                   | 113                                                                   | HAD1                                                                  | 4                                                                     | PF1                                                                   | 35                                                                    |
| SIGNAL                                         | PIN #                                          | BR                                                                    | 112                                                                   | HAD2                                                                  | 6                                                                     | PF2                                                                   | 36                                                                    |
| A0                                             | 84                                             | BYPASS                                                                | 72                                                                    | HAD3                                                                  | 7                                                                     | PF3                                                                   | 37                                                                    |
| A1                                             | 85                                             | CLKOUT                                                                | 130                                                                   | HAD4                                                                  | 8                                                                     | PF4                                                                   | 38                                                                    |
| A2                                             | 86                                             | D0                                                                    | 123                                                                   | HAD5                                                                  | 9                                                                     | PF5                                                                   | 39                                                                    |
| A3                                             | 87                                             | D1                                                                    | 124                                                                   | HAD6                                                                  | 10                                                                    | PF6                                                                   | 41                                                                    |
| A4                                             | 88                                             | D2                                                                    | 125                                                                   | HAD7                                                                  | 11                                                                    | PF7                                                                   | 42                                                                    |
| A5                                             | 89                                             | D3                                                                    | 126                                                                   | HAD8                                                                  | 12                                                                    | RCLK0                                                                 | 61                                                                    |
| A6                                             | 91                                             | D4                                                                    | 128                                                                   | HAD9                                                                  | 14                                                                    | RCLK1                                                                 | 68                                                                    |
| A7                                             | 92                                             | D5                                                                    | 135                                                                   | HAD10                                                                 | 15                                                                    | RCLK2                                                                 | 50                                                                    |
| A8                                             | 93                                             | D6                                                                    | 136                                                                   | HAD11                                                                 | 17                                                                    | RESET                                                                 | 73                                                                    |
| A9                                             | 95                                             | D7                                                                    | 137                                                                   | HAD12                                                                 | 18                                                                    | RFS0                                                                  | 62                                                                    |
| A10                                            | 96                                             | D8                                                                    | 138                                                                   | HAD13                                                                 | 20                                                                    | RFS1                                                                  | 69                                                                    |
| A11                                            | 97                                             | D9                                                                    | 139                                                                   | HAD14                                                                 | 21                                                                    | RFS2                                                                  | 51                                                                    |
| A12                                            | 98                                             | D10                                                                   | 140                                                                   | HAD15                                                                 | 22                                                                    | RD                                                                    | 122                                                                   |
| A13                                            | 99                                             | D11                                                                   | 141                                                                   | HA16                                                                  | 23                                                                    | RXD                                                                   | 52                                                                    |
| A14                                            | 101                                            | D12                                                                   | 142                                                                   | HALE                                                                  | 30                                                                    | TCK                                                                   | 78                                                                    |
| A15                                            | 102                                            | D13                                                                   | 144                                                                   | HCMS                                                                  | 27                                                                    | TCLK0                                                                 | 57                                                                    |
| A16                                            | 103                                            | D14                                                                   | 1                                                                     | HCIOMS                                                                | 28                                                                    | TCLK1                                                                 | 65                                                                    |
| A17                                            | 104                                            | D15                                                                   | 2                                                                     | HRD                                                                   | 31                                                                    | TCLK2                                                                 | 47                                                                    |
| A18                                            | 106                                            | DR0                                                                   | 60                                                                    | HWR                                                                   | 32                                                                    | TDI                                                                   | 75                                                                    |
| A19                                            | 107                                            | DR1                                                                   | 67                                                                    | IOMS                                                                  | 114                                                                   | TDO                                                                   | 74                                                                    |
| A20                                            | 108                                            | DR2                                                                   | 49                                                                    | MS0                                                                   | 115                                                                   | TFS0                                                                  | 59                                                                    |
| A21                                            | 109                                            | DT0                                                                   | 56                                                                    | MS1                                                                   | 116                                                                   | TFS1                                                                  | 66                                                                    |
| ACK                                            | 120                                            | DT1                                                                   | 64                                                                    | MS2                                                                   | 117                                                                   | TFS2                                                                  | 48                                                                    |
| BG                                             | 111                                            | DT2                                                                   | 46                                                                    | MS3                                                                   | 119                                                                   | TMR0                                                                  | 43                                                                    |
| BGH                                            | 110                                            | EMU                                                                   | 81                                                                    | OPMODE                                                                | 83                                                                    | TMR1                                                                  | 44                                                                    |
|                                                |                                                | HACK                                                                  | 26                                                                    | CLKIN                                                                 |                                                                       | TMR2                                                                  | 45                                                                    |
| BMODE0                                         | 70                                             |                                                                       |                                                                       |                                                                       | 132                                                                   |                                                                       | 76                                                                    |
|                                                |                                                | HACK_P                                                                | 24                                                                    | XTAL                                                                  | 133                                                                   | TMS                                                                   |                                                                       |

## ADSP-2196

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

For current information contact Analog Devices at 800/262-5643

## September 2001

| Pins (Alphabetically Signal) (Continued)   | Pins (Alphabetically Signal) (Continued)   | pinout by pin number. By Table 27. 144-Lead LQFP   | pinout by pin number. By Table 27. 144-Lead LQFP   | Pins (Numerically By Number (Continued)   | Pins (Numerically By Number (Continued)   | LQFP Pin Table 27. 144-Lead Pins (Numerically By Number (Continued)   | LQFP Pin Table 27. 144-Lead Pins (Numerically By Number (Continued)   |
|--------------------------------------------|--------------------------------------------|----------------------------------------------------|----------------------------------------------------|-------------------------------------------|-------------------------------------------|-----------------------------------------------------------------------|-----------------------------------------------------------------------|
| SIGNAL                                     | PIN #                                      | Pins (Numerically Number                           | By Pin                                             | SIGNAL                                    | PIN #                                     | SIGNAL                                                                | PIN #                                                                 |
| TRST                                       | 79                                         |                                                    |                                                    | GND                                       | 29                                        | TFS0                                                                  | 59                                                                    |
| TXD                                        | 53                                         | SIGNAL                                             | PIN #                                              | HALE                                      | 30                                        | DR0                                                                   | 60                                                                    |
| V DDEXT                                    | 13                                         | D14                                                | 1                                                  | HRD                                       | 31                                        | RCLK0                                                                 | 61                                                                    |
| V DDEXT                                    | 25                                         | D15                                                | 2                                                  | HWR                                       | 32                                        | RFS0                                                                  | 62                                                                    |
| V DDEXT                                    | 40                                         | HAD0                                               | 3                                                  | GND                                       | 33                                        | V DDEXT                                                               | 63                                                                    |
| V DDEXT                                    | 63                                         | HAD1                                               | 4                                                  | PF0                                       | 34                                        | DT1                                                                   | 64                                                                    |
| V DDEXT                                    | 90                                         | GND                                                | 5                                                  | PF1                                       | 35                                        | TCLK1                                                                 | 65                                                                    |
| V DDEXT                                    | 100                                        | HAD2                                               | 6                                                  | PF2                                       | 36                                        | TFS1                                                                  | 66                                                                    |
| V DDEXT                                    | 118                                        | HAD3                                               | 7                                                  | PF3                                       | 37                                        | DR1                                                                   | 67                                                                    |
| V DDEXT                                    | 131                                        | HAD4                                               | 8                                                  | PF4                                       | 38                                        | RCLK1                                                                 | 68                                                                    |
| V DDEXT                                    | 143                                        | HAD5                                               | 9                                                  | PF5                                       | 39                                        | RFS1                                                                  | 69                                                                    |
| V DDINT                                    | 19                                         | HAD6                                               | 10                                                 | V DDEXT                                   | 40                                        | BMODE0                                                                | 70                                                                    |
| V DDINT                                    | 58                                         | HAD7                                               | 11                                                 | PF6                                       | 41                                        | BMODE1                                                                | 71                                                                    |
| V DDINT                                    | 82                                         | HAD8                                               | 12                                                 | PF7                                       | 42                                        | BYPASS                                                                | 72                                                                    |
| V DDINT                                    | 127                                        | V DDEXT                                            | 13                                                 | TMR0                                      | 43                                        | RESET                                                                 | 73                                                                    |
| GND                                        | 5                                          | HAD9                                               | 14                                                 | TMR1                                      | 44                                        | TDO                                                                   | 74                                                                    |
| GND                                        | 16                                         | HAD10                                              | 15                                                 | TMR2                                      | 45                                        | TDI                                                                   | 75                                                                    |
| GND                                        | 29                                         | GND                                                | 16                                                 | DT2                                       | 46                                        | TMS                                                                   | 76                                                                    |
| GND                                        | 33                                         | HAD11                                              | 17                                                 | TCLK2                                     | 47                                        | GND                                                                   | 77                                                                    |
| GND                                        | 54                                         | HAD12                                              | 18                                                 | TFS2                                      | 48                                        | TCK                                                                   | 78                                                                    |
| GND                                        | 55                                         | V DDINT                                            | 19                                                 | DR2                                       | 49                                        | TRST                                                                  | 79                                                                    |
| GND                                        | 77                                         | HAD13                                              | 20                                                 | RCLK2                                     | 50                                        | GND                                                                   | 80                                                                    |
| GND                                        | 80                                         | HAD14                                              | 21                                                 | RFS2                                      | 51                                        | EMU                                                                   | 81                                                                    |
| GND                                        | 94                                         | HAD15                                              | 22                                                 | RXD                                       | 52                                        | V DDINT                                                               | 82                                                                    |
| GND                                        | 105                                        | HA16                                               | 23                                                 | TXD                                       | 53                                        | OPMODE                                                                | 83                                                                    |
| GND                                        | 129                                        | HACK_P                                             | 24                                                 | GND                                       | 54                                        | A0                                                                    | 84                                                                    |
| GND                                        | 134                                        | V DDEXT                                            | 25                                                 | GND                                       | 55                                        | A1                                                                    | 85                                                                    |
| WR                                         | 121                                        | HACK                                               | 26                                                 | DT0                                       | 56                                        | A2                                                                    | 86                                                                    |
|                                            |                                            | HCMS                                               | 27                                                 | TCLK0                                     | 57                                        | A3                                                                    | 87                                                                    |
|                                            |                                            | HCIOMS                                             | 28                                                 | V DDINT                                   | 58                                        | A4                                                                    | 88                                                                    |

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## ADSP-2196

For current information contact Analog Devices at 800/262-5643

Table 27.  144-Lead LQFP Pins (Numerically By Pin Number  (Continued)

| SIGNAL   |   PIN # |
|----------|---------|
| A5       |      89 |
| V DDEXT  |      90 |
| A6       |      91 |
| A7       |      92 |
| A8       |      93 |
| GND      |      94 |
| A9       |      95 |
| A10      |      96 |
| A11      |      97 |
| A12      |      98 |
| A13      |      99 |
| V DDEXT  |     100 |
| A14      |     101 |
| A15      |     102 |
| A16      |     103 |
| A17      |     104 |
| GND      |     105 |
| A18      |     106 |
| A19      |     107 |
| A20      |     108 |
| A21      |     109 |
| BGH      |     110 |
| BG       |     111 |
| BR       |     112 |
| BMS      |     113 |
| IOMS     |     114 |
| MS0      |     115 |
| MS1      |     116 |
| MS2      |     117 |
| V DDEXT  |     118 |

September 2001

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## September 2001

For current information contact Analog Devices at 800/262-5643

Table 27.  144-Lead LQFP Pins (Numerically By Pin Number  (Continued)

| Number (Continued)   | Number (Continued)   |
|----------------------|----------------------|
| SIGNAL               | PIN #                |
| MS3                  | 119                  |
| ACK                  | 120                  |
| WR                   | 121                  |
| RD                   | 122                  |
| D0                   | 123                  |
| D1                   | 124                  |
| D2                   | 125                  |
| D3                   | 126                  |
| V DDINT              | 127                  |
| D4                   | 128                  |
| GND                  | 129                  |
| CLKOUT               | 130                  |
| V DDEXT              | 131                  |
| CLKIN                | 132                  |
| XTAL                 | 133                  |
| GND                  | 134                  |
| D5                   | 135                  |
| D6                   | 136                  |
| D7                   | 137                  |
| D8                   | 138                  |
| D9                   | 139                  |
| D10                  | 140                  |
| D11                  | 141                  |
| D12                  | 142                  |
| V DDEXT              | 143                  |
| D13                  | 144                  |

ADSP-2196

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## September 2001

For current information contact Analog Devices at 800/262-5643

ADSP-2196 144-Lead Mini-BGA Pinout Table 28 lists the mini-BGA pinout by signal name.

ADSP-2196

## Table 28.  144-Lead Mini-BGA Pins (Alphabetically By Signal) (Continued)

| Table 28. 144-Lead Mini-BGA Pins (Alphabetically By   | Table 28. 144-Lead Mini-BGA Pins (Alphabetically By   | SIGNAL   | BALL #   |
|-------------------------------------------------------|-------------------------------------------------------|----------|----------|
|                                                       |                                                       | BMS      | A10      |
| A0                                                    | J11                                                   | BYPASS   | M11      |
| A1                                                    | H9                                                    | CLKIN    | A5       |
| A2                                                    | H10                                                   | CLKOUT   | C6       |
| A3                                                    | G12                                                   | D0       | D7       |
| A4                                                    | H11                                                   | D1 D2    | A7 C7    |
| A5                                                    | G10                                                   |          |          |
| A6                                                    | F12                                                   | D3       | A6       |
| A7                                                    | G11                                                   | D4       | B7       |
| A8                                                    | F10                                                   | D5       | A4       |
| A9                                                    | F11                                                   | D6       | C5       |
| A10                                                   | E12                                                   | D7       | B5       |
|                                                       | E10                                                   | D9       | A3       |
| A12                                                   |                                                       |          |          |
| A13                                                   | E9                                                    | D10      | C4       |
| A14                                                   | D11                                                   | D11      | B4       |
| A15                                                   | D10                                                   | D12 D13  | C3 A2    |
| A16                                                   | D12                                                   |          |          |
| A17                                                   | C11                                                   | D14      | B1       |
| A18                                                   | C12                                                   | D15      | B2       |
| A19                                                   | B12 B11                                               | DR0 DR1  | L7       |
| A20                                                   |                                                       |          | K9       |
| A21                                                   | A11                                                   | DR2      | L5       |
| ACK                                                   | A8                                                    | TCLK0    | J6       |
| BG                                                    | C10                                                   | DT1      | L8       |
| BGH                                                   | B10                                                   | DT2      | H4       |
| BMODE0                                                | L10                                                   | EMU      | J10      |
| BMODE1                                                | L9                                                    | HACK     | H3       |
|                                                       |                                                       | HACK_P   | G1       |

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

| For current information contact Analog Devices at 800/262-5643 September 2001   | For current information contact Analog Devices at 800/262-5643 September 2001   | For current information contact Analog Devices at 800/262-5643 September 2001   | For current information contact Analog Devices at 800/262-5643 September 2001   |
|---------------------------------------------------------------------------------|---------------------------------------------------------------------------------|---------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| Table 28. 144-Lead Mini-BGA Pins Signal) (Continued)                            | Table 28. 144-Lead Mini-BGA Pins Signal) (Continued)                            |                                                                                 |                                                                                 |
| SIGNAL                                                                          | BALL #                                                                          | SIGNAL BALL #                                                                   |                                                                                 |
| HAD0                                                                            | C1                                                                              | PF2 M2                                                                          |                                                                                 |
| HAD1                                                                            | B3                                                                              | PF3 L2                                                                          |                                                                                 |
| HAD2                                                                            | C2                                                                              | PF4 M3                                                                          |                                                                                 |
| HAD3                                                                            | D1                                                                              | PF5 L3                                                                          |                                                                                 |
| HAD4                                                                            | D4                                                                              | PF6 K3                                                                          |                                                                                 |
| HAD5                                                                            | D3                                                                              | PF7 M4                                                                          |                                                                                 |
| HAD6                                                                            | D2                                                                              | RCLK0 K7                                                                        |                                                                                 |
| HAD7                                                                            | E1                                                                              | RCLK1 J9                                                                        |                                                                                 |
| HAD8                                                                            | E4                                                                              | RCLK2 J5                                                                        |                                                                                 |
| HAD9                                                                            | E2                                                                              | RD B8                                                                           |                                                                                 |
| HAD10                                                                           | F1                                                                              | RESET L12                                                                       |                                                                                 |
| HAD11                                                                           | E3                                                                              | RFS0 K8                                                                         |                                                                                 |
| HAD12                                                                           | F2                                                                              | RFS1 M10                                                                        |                                                                                 |
| HAD14                                                                           | F3                                                                              | RFS2 M6                                                                         |                                                                                 |
| HAD15                                                                           | G3                                                                              | RXD K6                                                                          |                                                                                 |
| HAD13                                                                           | G2                                                                              | TCK K11                                                                         |                                                                                 |
| HA16                                                                            | H2                                                                              | DT0 H6                                                                          |                                                                                 |
| HALE                                                                            | J1                                                                              | TCLK1 M9                                                                        |                                                                                 |
| HCIOMS                                                                          | J3                                                                              | TCLK2 K5                                                                        |                                                                                 |
| HCMS                                                                            | H1                                                                              | TDI K12                                                                         |                                                                                 |
| HRD                                                                             | J2                                                                              | TDO L11                                                                         |                                                                                 |
| HWR                                                                             | K2                                                                              | TFS0 M8                                                                         |                                                                                 |
| IOMS                                                                            | E8                                                                              | TFS1 J8                                                                         |                                                                                 |
| MS0                                                                             | D9                                                                              | TFS2 M5                                                                         |                                                                                 |
| MS1                                                                             | A9                                                                              | TMR0 K4                                                                         |                                                                                 |
| MS2                                                                             | C9                                                                              | TMR1 L4                                                                         |                                                                                 |
| MS3                                                                             | D8                                                                              | TMR2 J4                                                                         |                                                                                 |
|                                                                                 | H12                                                                             | TMS K10                                                                         | OPMODE                                                                          |
| PF1                                                                             | L1                                                                              | TXD M7                                                                          |                                                                                 |
| PF0                                                                             |                                                                                 | TRST J12                                                                        | K1                                                                              |

REV. PrA

This information applies to a product under development. Its characteristics and specifications are subject to change without notice. Analog Devices assumes no obligation regarding future manufacturing unless otherwise agreed to in writing.

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## September 2001

For current information contact Analog Devices at 800/262-5643

## Table 28.  144-Lead Mini-BGA Pins (Alphabetically By Signal) (Continued)

SIGNAL

VDDINT

VDDINT

VDDINT

VDDINT

VDDEXT

VDDEXT

VDDEXT

VDDEXT

VDDEXT

VDDEXT

VDDEXT

VDDEXT

GND

GND

GND

GND

GND

GND

GND

GND

GND

GND

GND

GND

GND

WR

XTAL

BALL #

D6

F4

G9

J7

E5

E6

F5

F6

G7

G8

H7

H8

A1

A12

E7

F7

F8

F9

G4

G5

G6

H5

L6

M1

M12

C8

B6

ADSP-2196

Table 29 lists the mini-BGA pinout by ball number.

Table 29.  144-Lead Mini-BGA Pins (Numerically By Ball Number)

| SIGNAL   | BALL #   |
|----------|----------|
| GND      | A1       |
| D13      | A2       |
| D9       | A3       |
| D5       | A4       |
| CLKIN    | A5       |
| D3       | A6       |
| D1       | A7       |
| ACK      | A8       |
| MS1      | A9       |
| BMS      | A10      |
| A21      | A11      |
| GND      | A12      |
| D14      | B1       |
| D15      | B2       |
| HAD1     | B3       |
| D11      | B4       |
| D7       | B5       |
| XTAL     | B6       |
| D4       | B7       |
| RD       | B8       |
| BR       | B9       |
| BGH      | B10      |
| A20      | B11      |
| A19      | B12      |
| HAD0     | C1       |
| HAD2     | C2       |
| D12      | C3       |
| D10      | C4       |
| D6       | C5       |

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

| September 2001                                                         | September 2001                                                         | For current information contact Analog Devices at 800/262-5643   | For current information contact Analog Devices at 800/262-5643   | ADSP-2196       |
|------------------------------------------------------------------------|------------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|-----------------|
| Table 29. 144-Lead Mini-BGA Pins (Numerically Ball Number) (Continued) | Table 29. 144-Lead Mini-BGA Pins (Numerically Ball Number) (Continued) |                                                                  |                                                                  | (Numerically By |
| SIGNAL                                                                 | BALL #                                                                 |                                                                  | SIGNAL BALL #                                                    | (Numerically By |
| CLKOUT                                                                 | C6                                                                     |                                                                  | A10 E12                                                          |                 |
| D2                                                                     | C7                                                                     |                                                                  | HAD10 F1                                                         |                 |
| WR                                                                     | C8                                                                     |                                                                  | HAD12 F2                                                         |                 |
| MS2                                                                    | C9                                                                     |                                                                  | HAD14 F3                                                         |                 |
| BG                                                                     | C10                                                                    |                                                                  | V DDINT F4                                                       |                 |
| A17                                                                    | C11                                                                    |                                                                  | V DDEXT F5                                                       |                 |
| A18                                                                    | C12                                                                    |                                                                  | V DDEXT F6                                                       |                 |
| HAD3                                                                   | D1                                                                     |                                                                  | GND F7                                                           |                 |
| HAD6                                                                   | D2                                                                     |                                                                  | GND F8                                                           |                 |
| HAD5                                                                   | D3                                                                     |                                                                  | GND F9                                                           |                 |
| HAD4                                                                   | D4                                                                     |                                                                  | A8 F10                                                           |                 |
| D8                                                                     | D5                                                                     |                                                                  | A9 F11                                                           |                 |
| V DDINT                                                                | D6                                                                     |                                                                  | A6 F12                                                           |                 |
| D0                                                                     | D7                                                                     |                                                                  | HACK_P G1                                                        |                 |
| MS3                                                                    | D8                                                                     |                                                                  | HAD13 G2                                                         |                 |
| MS0                                                                    | D9                                                                     |                                                                  | HAD15 G3                                                         |                 |
| A15                                                                    | D10                                                                    |                                                                  | GND G4                                                           |                 |
| A14                                                                    | D11                                                                    |                                                                  | GND G5                                                           |                 |
| A16                                                                    | D12                                                                    |                                                                  | GND G6                                                           |                 |
| HAD7                                                                   | E1                                                                     |                                                                  | V DDEXT G7                                                       |                 |
| HAD9                                                                   | E2                                                                     |                                                                  | V DDEXT G8                                                       |                 |
| HAD11                                                                  | E3                                                                     |                                                                  | V DDINT G9                                                       |                 |
| HAD8                                                                   | E4                                                                     |                                                                  | A5 G10                                                           |                 |
| V DDEXT                                                                | E5                                                                     |                                                                  | A7 G11                                                           |                 |
| V DDEXT                                                                | E6                                                                     |                                                                  | A3 G12                                                           |                 |
| GND                                                                    | E7                                                                     |                                                                  | HCMS H1                                                          |                 |
| IOMS                                                                   | E8                                                                     |                                                                  | HA16 H2                                                          |                 |
| A13                                                                    | E9                                                                     |                                                                  | HACK H3                                                          |                 |
| A12                                                                    | E10                                                                    |                                                                  | H4                                                               |                 |
|                                                                        |                                                                        |                                                                  | DT2                                                              |                 |

REV. PrA

This information applies to a product under development. Its characteristics and specifications are subject to change without notice. Analog Devices assumes no obligation regarding future manufacturing unless otherwise agreed to in writing.

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

| September 2001                                                         | September 2001                                                         | For current information contact Analog Devices at 800/262-5643   | For current information contact Analog Devices at 800/262-5643   | ADSP-2196       |
|------------------------------------------------------------------------|------------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|-----------------|
| Table 29. 144-Lead Mini-BGA Pins (Numerically Ball Number) (Continued) | Table 29. 144-Lead Mini-BGA Pins (Numerically Ball Number) (Continued) | By Table 29. 144-Lead Mini-BGA Ball Number) (Continued)          | By Table 29. 144-Lead Mini-BGA Ball Number) (Continued)          | (Numerically By |
| SIGNAL                                                                 | BALL #                                                                 | SIGNAL                                                           | BALL #                                                           | (Numerically By |
| DT0                                                                    | H6                                                                     | TDI                                                              | K12                                                              |                 |
| V DDEXT                                                                | H7                                                                     | PF1                                                              | L1                                                               |                 |
| V DDEXT                                                                | H8                                                                     | PF3                                                              | L2                                                               |                 |
| A1                                                                     | H9                                                                     | PF5                                                              | L3                                                               |                 |
| A2                                                                     | H10                                                                    | TMR1                                                             | L4                                                               |                 |
| A4                                                                     | H11                                                                    | DR2                                                              | L5                                                               |                 |
| OPMODE                                                                 | H12                                                                    | GND                                                              | L6                                                               |                 |
| HALE                                                                   | J1                                                                     | DR0                                                              | L7                                                               |                 |
| HRD                                                                    | J2                                                                     | DT1                                                              | L8                                                               |                 |
| HCIOMS                                                                 | J3                                                                     | BMODE1                                                           | L9                                                               |                 |
| TMR2                                                                   | J4                                                                     | BMODE0                                                           | L10                                                              |                 |
| RCLK2                                                                  | J5                                                                     | TDO                                                              | L11                                                              |                 |
| TCLK0                                                                  | J6                                                                     | RESET                                                            | L12                                                              |                 |
| V DDINT                                                                | J7                                                                     | GND                                                              | M1                                                               |                 |
| TFS1                                                                   | J8                                                                     | PF2                                                              | M2                                                               |                 |
| RCLK1                                                                  | J9                                                                     | PF4                                                              | M3                                                               |                 |
| EMU                                                                    | J10                                                                    | PF7                                                              | M4                                                               |                 |
| A0                                                                     | J11                                                                    | TFS2                                                             | M5                                                               |                 |
| TRST                                                                   | J12                                                                    | RFS2                                                             | M6                                                               |                 |
| PF0                                                                    | K1                                                                     | TXD                                                              | M7                                                               |                 |
| HWR                                                                    | K2                                                                     | TFS0                                                             | M8                                                               |                 |
| PF6                                                                    | K3                                                                     | TCLK1                                                            | M9                                                               |                 |
| TMR0                                                                   | K4                                                                     | RFS1                                                             | M10                                                              |                 |
| TCLK2                                                                  | K5                                                                     | BYPASS                                                           | M11                                                              |                 |
| RXD                                                                    | K6                                                                     | GND                                                              | M12                                                              |                 |
| RCLK0                                                                  | K7                                                                     |                                                                  |                                                                  |                 |
| RFS0                                                                   | K8                                                                     |                                                                  |                                                                  |                 |
| DR1                                                                    | K9                                                                     |                                                                  |                                                                  |                 |
| TMS                                                                    | K10                                                                    |                                                                  |                                                                  |                 |

REV. PrA

.

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

September 2001

For current information contact Analog Devices at 800/262-5643

## OUTLINE DIMENSIONS

## 144-LEAD METRIC THIN PLASTIC QUAD FLATPACK (LQFP) (ST-144)

<!-- image -->

/G31 /G32 /G37 /G28 /G36 /G1d

- /G27 /G2c /G30 /G28 /G31 /G36 /G2c /G32 /G31 /G36 /G3 /G2c /G31 /G3 /G30 /G2c /G2f /G2f /G2c /G30 /G28 /G37 /G28 /G35 /G36 /G11 /G14 /G11
- /G24 /G26 /G37 /G38 /G24 /G2f /G3 /G33 /G32 /G36 /G2c /G37 /G2c /G32 /G31 /G3 /G32 /G29 /G3 /G28 /G24 /G26 /G2b/G3 /G2f /G28 /G24 /G27 /G3 /G2c /G36 /G3 /G3a /G2c /G37 /G2b /G2c /G31 /G3 /G13 /G11 /G13 /G1b /G3 /G32 /G29 /G3 /G2c /G37 /G36 /G2c /G27 /G28 /G24 /G2f /G3 /G33 /G32 /G36 /G2c /G37 /G2c /G32 /G31 /Gf /G3 /G3a /G2b /G28 /G31 /G3 /G30 /G28 /G24 /G36 /G38 /G35 /G28 /G27 /G3 /G2c /G31 /G3 /G37 /G2b /G28 /G3 /G2f /G24 /G37 /G28 /G35 /G24 /G2f /G3 /G27 /G2c /G35 /G28 /G26 /G37 /G2c /G32 /G31/G11 /G15 /G11
- /G26 /G28 /G31 /G37 /G28 /G35 /G3 /G27 /G2c /G30 /G28 /G31 /G36 /G2c /G32 /G31 /G36 /G3 /G24 /G35 /G28 /G3 /G31 /G32 /G30 /G2c /G31 /G24 /G2f /G11 /G3 /G16 /G11

## 144-BALL MINI-BGA (CA-144)

<!-- image -->

/G17 /G11

/G26 /G28 /G31 /G37 /G28 /G35 /G3 /G27 /G2c /G30 /G28 /G31 /G36 /G2c /G32 /G31 /G36 /G3 /G24 /G35 /G28 /G3 /G31 /G32 /G30 /G2c /G31 /G24 /G2f /G11 /G3

ADSP-2196

## /G33/G35/G28/G2f/G2c/G30/G2c/G31/G24/G35/G3c/G3/G37/G28/G26/G2b/G31/G2c/G26/G24/G2f/G3/G27/G24/G37/G24

## September 2001

For current information contact Analog Devices at 800/262-5643

## ORDERING GUIDE

| Part Number 1, 2   | Ambient Temperature Range   | Instruction Rate   | On-Chip SRAM   | Operating Voltage   |
|--------------------|-----------------------------|--------------------|----------------|---------------------|
| ADSP-2196MKST-160X | 0ºC to 70ºC                 | 160MHz             | 1.3M bit       | 2.5 Int./3.3 Ext. V |
| ADSP-2196MBST-140X | -40ºC to 85ºC               | 140MHz             | 1.3M bit       | 2.5 Int./3.3 Ext. V |
| ADSP-2196MKCA-160X | 0ºC to 70ºC                 | 160MHz             | 1.3M bit       | 2.5 Int./3.3 Ext. V |
| ADSP-2196MBCA-140X | -40ºC to 85ºC               | 140MHz             | 1.3M bit       | 2.5 Int./3.3 Ext. V |

ADSP-2196