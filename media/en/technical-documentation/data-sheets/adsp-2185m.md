<!-- lastmod 2025-09-05 -->
<!-- image -->

## FEATURES Performance

13.3 ns Instruction Cycle Time @ 2.5 V (Internal),

75 MIPS Sustained Performance

Single-Cycle Instruction Execution

Single-Cycle Context Switch

3-Bus Architecture Allows Dual Operand Fetches in

Every Instruction Cycle

Multifunction Instructions

Power-Down Mode Featuring Low CMOS Standby Power

Dissipation with 200 CLKIN Cycle Recovery from

Power-Down Condition

Low Power Dissipation in Idle Mode

## Integration

ADSP-2100 Family Code Compatible (Easy to Use

Algebraic Syntax), with Instruction Set Extensions

80K Bytes of On-Chip RAM, Configured as

16K Words Program Memory RAM

16K Words Data Memory RAM

Dual-Purpose Program Memory for Both Instruction and Data Storage

Independent ALU, Multiplier/Accumulator, and Barrel Shifter Computational Units

Two Independent Data Address Generators

Powerful Program Sequencer Provides Zero Overhead

Looping Conditional Instruction Execution

Programmable 16-Bit Interval Timer with Prescaler

100-Lead LQFP and 144-Ball Mini-BGA

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

ICE-Port is a trademark of Analog Devices, Inc.

## REV. 0

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties which may result from its use. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices.

## System Interface

- Flexible I/O Structure Allows 2.5 V or 3.3 V Operation; All Inputs Tolerate up to 3.6 V Regardless of Mode 16-Bit Internal DMA Port for High-Speed Access to On-Chip Memory (Mode Selectable)
- 4 MByte Memory Interface for Storage of Data Tables and Program Overlays (Mode Selectable)
- 8-Bit DMA to Byte Memory for Transparent Program and Data Memory Transfers (Mode Selectable)
- I/O Memory Interface with 2048 Locations Supports Parallel Peripherals (Mode Selectable)

Programmable Memory Strobe and Separate I/O

Memory Space Permits 'Glueless' System Design Programmable Wait State Generation

Two Double-Buffered Serial Ports with Companding Hardware and Automatic Data Buffering

Automatic Booting of On-Chip Program Memory from Byte-Wide External Memory, e.g., EPROM, or through Internal DMA Port

Six External Interrupts

13 Programmable Flag Pins Provide Flexible System Signaling

UART Emulation through Software SPORT Reconfiguration ICE-Port™ Emulator Interface Supports Debugging in Final Systems

## DSP Microcomputer

## ADSP-2185M

One Technology Way, P.O. Box 9106, Norwood, MA 02062-9106, U.S.A. Tel: 781/329-4700 World Wide Web Site: http://www.analog.com Fax: 781/326-8703 © Analog Devices, Inc., 2000

## ADSP-2185M

## TABLE OF CONTENTS

| FEATURES . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                              | . 1   |
|-------------------------------------------------------------------------------------------------|-------|
| FUNCTIONAL BLOCK DIAGRAM . . . . . . . . . . . . . . .                                          | . 1   |
| GENERAL DESCRIPTION . . . . . . . . . . .                                                       | . 3   |
| DEVELOPMENT SYSTEM . . . . . . . . . . . . . . . .                                              | . 3   |
| Additional Information . . . . . . . . . . . . . . . . . . .                                    | . 3   |
| ARCHITECTURE OVERVIEW . . . . . . . . . . . . .                                                 | . 4   |
| Serial Ports . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                          | . 5   |
| PIN DESCRIPTIONS . . . . . . . . . . . . . . . . . . . . .                                      | . 5   |
| Common-Mode Pins . . . . . . . . . . . . . . . . . . . . .                                      | . 6   |
| Memory Interface Pins . . . . . . . . . . . . . . . . . . . .                                   | . 7   |
| Full Memory Mode Pins (Mode C = 0) . . . . . . .                                                | . 7   |
| Host Mode Pins (Mode C = 1) . . . . . . . . . . . . .                                           | . 7   |
| Terminating Unused Pins . . . . . . . . . . . . . . . . .                                       | . 8   |
| Pin Terminations . . . . . . . . . . . . . . . . . . . . . . . .                                | . 8   |
| Interrupts . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                          | . 9   |
| LOW POWER OPERATION . . . . . . . . . . . . . . . .                                             | . 9   |
| Power-Down . . . . . . . . . . . . . . . . . . . . . . . . . . .                                | . 9   |
| Idle . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                      | . 9   |
| Slow Idle . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                           | 10    |
| SYSTEM INTERFACE . . . . . . . . . . . . . . . . . . . .                                        | 10    |
| Clock Signals . . . . . . . . . . . . . . . . . . . . . . . . . . .                             | 10    |
| RESET . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                             | 11    |
| Power Supplies . . . . . . . . . . . . . . . . . . . . . . . . . .                              | 11    |
| MODES OF OPERATION . . . . . . . . . . . . . . . . .                                            | 11    |
| Passive Configuration . . . . . . . . . . . . . . . . . . . . .                                 | 11    |
| Active Configuration . . . . . . . . . . . . . . . . . . . . .                                  | 12    |
| IACK Configuration . . . . . . . . . . . . . . . . . . . . .                                    | 12    |
| MEMORY ARCHITECTURE . . . . . . . . . . . . . . .                                               | 12    |
| Program Memory . . . . . . . . . . . . . . . . . . . . . . . .                                  | 12    |
| Data Memory . . . . . . . . . . . . . . . . . . . . . . . . . . .                               | 13    |
| Memory Mapped Registers (New to the ADSP-2185M) . . . . . . . . . . . . . . . . . . . . . . . . | 13    |
| I/O Space (Full Memory Mode) . . . . . . . . . . . . .                                          | 13    |
| Composite Memory Select ( CMS ) . . . . . . . . . . .                                           | 14    |
|                                                                                                 | 14    |
| Byte Memory Select ( BMS ) . . . . . . . . . . . . . . . . .                                    |       |
| Byte Memory . . . . . . . . . . . . . . . . . . . . . . . . . .                                 | 14    |
| Internal Memory DMA Port                                                                        | 15    |
| (IDMA Port; Host Memory Mode) . . . . . . . . . . . . . . . . . . . . . . .                     | 15    |
| Bootstrap Loading (Booting) IDMA Port Booting . . . . . . . . . . . . . . . . . . . . . .       | 16    |
| Bus Request and Bus Grant . . . . . . . . . . . . . . . .                                       | 16    |
| Flag I/O Pins . . . . . . . . . . . . . . . . . . . . . . . . . . .                             | 16    |
| Instruction Set                                                                                 | 16    |
| Description . . . . . . . . . . . . . . . . DESIGNING AN EZ-ICE-COMPATIBLE SYSTEM               | 16    |
| Target Board Connector for EZ-ICE Probe . . . .                                                 |       |
| Target Memory Interface . . . . . . . . . . . . . . . . .                                       | 17 17 |
| . PM, DM, BM, IOM, AND CM . . . . . . . . . . . . . .                                           | 17    |
| Target System Interface Signals . . . . . . . . . . . . .                                       | 17    |

RECOMMENDED OPERATING CONDITIONS . . . . . 18

ELECTRICAL CHARACTERISTICS . . . . . . . . . . . . . . . 18

ABSOLUTE MAXIMUM RATINGS  . . . . . . . . . . . . . . . 19

TIMING SPECIFICATIONS  . . . . . . . . . . . . . . . . . . . . . 19

GENERAL NOTES  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 19

TIMING NOTES  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 19

MEMORY TIMING SPECIFICATIONS  . . . . . . . . . . . . 19

FREQUENCY DEPENDENCY FOR

TIMING SPECIFICATIONS . . . . . . . . . . . . . . . . . . . . 20

ENVIRONMENTAL CONDITIONS  . . . . . . . . . . . . . . . 20

POWER DISSIPATION . . . . . . . . . . . . . . . . . . . . . . . . . . 20

Output Drive Currents . . . . . . . . . . . . . . . . . . . . . . . . . . 20

Capacitive Loading

. . . . . . . . . . . . . . . . . . . . . . . . . . . . 21

TEST CONDITIONS  . . . . . . . . . . . . . . . . . . . . . . . . . . . 22

Output Disable Time  . . . . . . . . . . . . . . . . . . . . . . . . . . . 22

Output Enable Time

. . . . . . . . . . . . . . . . . . . . . . . . . . . 22

Clock Signals and Reset  . . . . . . . . . . . . . . . . . . . . . . . . . 23

Interrupts and Flags  . . . . . . . . . . . . . . . . . . . . . . . . . . . . 24

Bus Request-Bus Grant  . . . . . . . . . . . . . . . . . . . . . . . . . 25

Memory Read

. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 26

Memory Write  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 27

Serial Ports . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 28

IDMA Address Latch . . . . . . . . . . . . . . . . . . . . . . . . . . . 29

IDMA Write, Short Write Cycle

. . . . . . . . . . . . . . . . . . 30

IDMA Write, Long Write Cycle . . . . . . . . . . . . . . . . . . . 31

IDMA Read, Long Read Cycle

. . . . . . . . . . . . . . . . . . . 32

IDMA Read, Short Read Cycle  . . . . . . . . . . . . . . . . . . . 33

IDMA Read, Short Read Cycle in Short Read

Only Mode  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 34

100-LEAD LQFP PIN CONFIGURATION  . . . . . . . . . . 35

LQFP Package Pinout  . . . . . . . . . . . . . . . . . . . . . . . . . . . . 36

144-Ball Mini-BGA Package Pinout  . . . . . . . . . . . . . . . . . 37

Mini-BGA Package Pinout

. . . . . . . . . . . . . . . . . . . . . . . . 38

OUTLINE DIMENSIONS

100-Lead Metric Thin Plastic Quad Flatpack

(LQFP) (ST-100)  . . . . . . . . . . . . . . . . . . . . . . . . . . . 39

OUTLINE DIMENSIONS

144-Ball Mini-BGA (CA-144)  . . . . . . . . . . . . . . . . . . . . 40

ORDERING GUIDE  . . . . . . . . . . . . . . . . . . . . . . . . . . . . 40

Tables

Table I.

Interrupt Priority and Interrupt

Vector Addresses  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9

Table II.

Modes of Operation  . . . . . . . . . . . . . . . . . . . . . . 11

Table III.

Table IV.

Table V.

Table VI.

PMOVLAY Bits  . . . . . . . . . . . . . . . . . . . . . . . . 12

DMOVLAY Bits  . . . . . . . . . . . . . . . . . . . . . . . . 13

Wait States  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14

Data Formats  . . . . . . . . . . . . . . . . . . . . . . . . . . 14

## GENERAL DESCRIPTION

The ADSP-2185M is a single-chip microcomputer optimized for digital signal processing (DSP) and other high-speed numeric processing applications.

The ADSP-2185M combines the ADSP-2100 family base architecture (three computational units, data address generators, and a program sequencer) with two serial ports, a 16-bit internal DMA port, a byte DMA port, a programmable timer, Flag I/O, extensive interrupt capabilities, and on-chip program and data memory.

The ADSP-2185M integrates 80K bytes of on-chip memory configured as 16K words (24-bit) of program RAM, and 16K words (16-bit) of data RAM. Power-down circuitry is also provided to meet the low power needs of battery-operated portable equipment. The ADSP-2185M is available in a 100-lead LQFP package and 144 Ball Mini-BGA.

In addition, the ADSP-2185M supports new instructions, which include bit manipulations-bit set, bit clear, bit toggle, bit testnew ALU constants, new multiplication instruction ( × squared), biased rounding, result-free ALU operations, I/O memory transfers, and global interrupt masking, for increased flexibility.

Fabricated in a high-speed, low-power, CMOS process, the ADSP-2185M operates with a 13.3 ns instruction cycle time. Every instruction can execute in a single processor cycle.

The ADSP-2185M's flexible architecture and comprehensive instruction set allow the processor to perform multiple operations in parallel. In one processor cycle, the ADSP-2185M can:

- Generate the next program address
- Fetch the next instruction
- Perform one or two data moves
- Update one or two data address pointers
- Perform a computational operation

This takes place while the processor continues to:

- Receive and transmit data through the two serial ports
- Receive and/or transmit data through the internal DMA port
- Receive and/or transmit data through the byte DMA port
- Decrement timer

## DEVELOPMENT SYSTEM

The ADSP-2100 Family Development Software, a complete set of tools for software and hardware system development, supports the ADSP-2185M. The System Builder provides a high-level method for defining the architecture of systems under development. The Assembler has an algebraic syntax that is easy to program and debug. The Linker combines object files into an executable file. The Simulator provides an interactive instructionlevel simulation with a reconfigurable user interface to display different portions of the hardware environment.

## ADSP-2185M

The EZ-KIT Lite is a hardware/software kit offering a complete evaluation environment for the ADSP-218x family: an ADSP2189M-based evaluation board with PC monitor software plus assembler, linker, simulator, and PROM splitter software. The ADSP-2189M EZ-KIT Lite is a low cost, easy to use hardware platform on which you can quickly get started with your DSP software design. The EZ-KIT Lite includes the following features:

- 75 MHz ADSP-2189M
- Full 16-Bit Stereo Audio I/O with AD73322 Codec
- RS-232 Interface
- EZ-ICE Connector for Emulator Control
- DSP Demo Programs
- Evaluation Suite of VisualDSP

The ADSP-218x EZ-ICE ®  Emulator aids in the hardware debugging of an ADSP-2185M system. The ADSP-2185M integrates on-chip emulation support with a 14-pin ICE-Port interface. This interface provides a simpler target board connection that requires fewer mechanical clearance considerations than other ADSP-2100 Family EZ-ICEs. The ADSP-2185M device need not be removed from the target system when using the EZ-ICE, nor are any adapters needed. Due to the small footprint of the EZ-ICE connector, emulation can be supported in final board designs.

The EZ-ICE performs a full range of functions, including:

- In-target operation
- Up to 20 breakpoints
- Single-step or full-speed operation
- Registers and memory values can be examined and altered
- PC upload and download functions
- Instruction-level emulation of program booting and execution
- Complete assembly and disassembly of instructions
- C source-level debugging

See Designing An EZ-ICE-Compatible Target System in the ADSP-2100 Family EZ-Tools Manual (ADSP-2181 sections) as well as the Designing an EZ-ICE-Compatible System section of this data sheet for the exact specifications of the EZ-ICE target board connector.

## Additional Information

This data sheet provides a general overview of ADSP-2185M functionality. For additional information on the architecture and instruction set of the processor, refer to the ADSP-2100 Family User's Manual . For more information about the development tools, refer to the ADSP-2100 Family Development Tools data sheet.

Figure 1. Functional Block Diagram

<!-- image -->

(indirect addressing), it is post-modified by the value of one of four possible modify registers. A length value may be associated with each pointer to implement automatic modulo addressing for circular buffers.

Efficient data transfer is achieved with the use of five internal buses:

- Program Memory Address (PMA) Bus
- Program Memory Data (PMD) Bus
- Data Memory Address (DMA) Bus
- Data Memory Data (DMD) Bus
- Result (R) Bus

The two address buses (PMA and DMA) share a single external address bus, allowing memory to be expanded off-chip, and the two data buses (PMD and DMD) share a single external data bus. Byte memory space and I/O memory space also share the external buses.

Program memory can store both instructions and data, permitting the ADSP-2185M to fetch two operands in a single cycle, one from program memory and one from data memory. The ADSP-2185M can fetch an operand from program memory and the next instruction in the same cycle.

In lieu of the address and data bus for external memory connection, the ADSP-2185M may be configured for 16-bit Internal DMA port (IDMA port) connection to external systems. The IDMA port is made up of 16 data/address pins and five control pins. The IDMA port provides transparent, direct access to the DSPs on-chip program and data RAM.

An interface to low-cost byte-wide memory is provided by the Byte DMA port (BDMA port). The BDMA port is bidirectional and can directly address up to four megabytes of external RAM or ROM for off-chip storage of program overlays or data tables.

The byte memory and I/O memory space interface supports slow memories and I/O memory-mapped peripherals with programmable wait state generation. External devices can gain control of

## ARCHITECTURE OVERVIEW

The ADSP-2185M instruction set provides flexible data moves and multifunction (one or two data moves with a computation) instructions. Every instruction can be executed in a single processor cycle. The ADSP-2185M assembly language uses an algebraic syntax for ease of coding and readability. A comprehensive set of development tools supports program development.

Figure 1 is an overall block diagram of the ADSP-2185M. The processor contains three independent computational units: the ALU, the multiplier/accumulator (MAC), and the shifter. The computational units process 16-bit data directly and have provisions to support multiprecision computations. The ALU performs a standard set of arithmetic and logic operations; division primitives are also supported. The MAC performs single-cycle multiply, multiply/add, and multiply/subtract operations with 40 bits of accumulation. The shifter performs logical and arithmetic shifts, normalization, denormalization, and derive exponent operations.

The shifter can be used to efficiently implement numeric format control, including multiword and block floating-point representations.

The internal result (R) bus connects the computational units so that the output of any unit may be the input of any unit on the next cycle.

A powerful program sequencer and two dedicated data address generators ensure efficient delivery of operands to these computational units. The sequencer supports conditional jumps, subroutine calls, and returns in a single cycle. With internal loop counters and loop stacks, the ADSP-2185M executes looped code with zero overhead; no explicit jump instructions are required to maintain loops.

Two data address generators (DAGs) provide addresses for simultaneous dual operand fetches (from data memory and program memory). Each DAG maintains and updates four address pointers. Whenever the pointer is used to access data

external buses with bus request/grant signals ( BR , BGH , and BG ). One execution mode (Go Mode) allows the ADSP-2185M to continue running from on-chip memory. Normal execution mode requires the processor to halt while buses are granted.

The ADSP-2185M can respond to eleven interrupts. There can be up to six external interrupts (one edge-sensitive, two levelsensitive, and three configurable) and seven internal interrupts generated by the timer, the serial ports (SPORTs), the Byte DMA port, and the power-down circuitry. There is also a master RESET signal. The two serial ports provide a complete synchronous serial interface with optional companding in hardware and a wide variety of framed or frameless data transmit and receive modes of operation.

Each port can generate an internal programmable serial clock or accept an external serial clock.

The ADSP-2185M provides up to 13 general-purpose flag pins. The data input and output pins on SPORT1 can be alternatively configured as an input flag and an output flag. In addition, eight flags are programmable as inputs or outputs, and three flags are always outputs.

A programmable interval timer generates periodic interrupts. A 16-bit count register (TCOUNT) decrements every n processor cycle, where n is a scaling value stored in an 8-bit register (TSCALE). When the value of the count register reaches zero, an interrupt is generated and the count register is reloaded from a 16-bit period register (TPERIOD).

## Serial Ports

The ADSP-2185M incorporates two complete synchronous serial ports (SPORT0 and SPORT1) for serial communications and multiprocessor communication.

Here is a brief list of the capabilities of the ADSP-2185M SPORTs. For additional information on Serial Ports, refer to the ADSP-2100 Family User's Manual .

- SPORTs are bidirectional and have a separate, doublebuffered transmit and receive section.

## ADSP-2185M

- SPORTs can use an external serial clock or generate their own serial clock internally.
- SPORTs have independent framing for the receive and transmit sections. Sections run in a frameless mode or with frame synchronization signals internally or externally generated. Frame sync signals are active high or inverted, with either of two pulsewidths and timings.
- SPORTs support serial data word lengths from 3 to 16 bits and provide optional A-law and µ -law companding according to CCITT recommendation G.711.
- SPORT receive and transmit sections can generate unique interrupts on completing a data word transfer.
- SPORTs can receive and transmit an entire circular buffer of data with only one overhead cycle per data word. An interrupt is generated after a data buffer transfer.
- SPORT0 has a multichannel interface to selectively receive and transmit a 24 or 32 word, time- division multiplexed, serial bitstream.
- SPORT1 can be configured to have two external interrupts ( IRQ0 and IRQ1 ) and the FI and FO signals. The internally generated serial clock may still be used in this configuration.

## PIN DESCRIPTIONS

The ADSP-2185M is available in a 100-lead LQFP package and a 144-Ball Mini-BGA package. In order to maintain maximum functionality and reduce package size and pin count, some serial port, programmable flag, interrupt and external bus pins have dual, multiplexed functionality. The external bus pins are configured during RESET only, while serial port pins are software configurable during program execution. Flag and interrupt functionality is retained concurrently on multiplexed pins. In cases where pin functionality is reconfigurable, the default state is shown in plain text; alternate functionality is shown in italics.

## ADSP-2185M

## Common-Mode Pins

| Pin Name                             | # of Pins         | I/O               |                                                                                                                                                                                                                             |
|--------------------------------------|-------------------|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RESET BR BG BGH DMS PMS IOMS BMS CMS | 1 1 1 1 1 1 1 1 1 | I I O O O O O O O | Function Processor Reset Input Bus Request Input Bus Grant Output Bus Grant Hung Output Data Memory Select Output Program Memory Select Output Memory Select Output Byte Memory Select Output Combined Memory Select Output |
| IRQ2 PF7 IRQL1 PF6                   | 1 1               | I I/O I I/O       | Edge- or Level-Sensitive Interrupt Request 1 Programmable I/O Pin Level-Sensitive Interrupt Requests 1 Programmable I/O Pin                                                                                                 |
| PF3 Mode C PF2                       | 1                 | I/O I I/O         | Programmable I/O Pin During Normal Operation Mode Select Input-Checked Only During RESET Programmable I/O Pin During Normal Operation                                                                                       |
| Mode                                 | 1                 | I                 | Mode Select Input-Checked Only During RESET                                                                                                                                                                                 |
| CLKIN, CLKOUT                        | 2                 | I                 | Programmable I/O Pin During Normal Clock or Quartz Crystal Input                                                                                                                                                            |
| XTAL SPORT0                          | 1 5               | O I/O             | Processor Clock Output Serial Port I/O Pins Serial Port I/O Pins 2                                                                                                                                                          |
| SPORT1                               |                   | I/O               | Edge- or Level-Sensitive Interrupts, FI, FO Power-Down Control Input                                                                                                                                                        |
| IRQ1:0, FI, FO                       |                   |                   |                                                                                                                                                                                                                             |
| PWD                                  |                   | O                 | Power-Down Control Output Output Flags                                                                                                                                                                                      |
| PWDACK                               |                   | I                 | Internal V DD (2.5 V) Power (LQFP)                                                                                                                                                                                          |
| FL0, FL1, FL2 V DDINT                |                   | I                 | External V DD (2.5 V or 3.3 V) Power Ground (LQFP)                                                                                                                                                                          |
|                                      | 10                | I                 | Internal V DD (2.5 V) Power (Mini-BGA)                                                                                                                                                                                      |
| GND V DDINT                          |                   | I I               | External V DD (2.5 V or 3.3 V) Power                                                                                                                                                                                        |
| A PF0                                |                   |                   | (LQFP)                                                                                                                                                                                                                      |
|                                      |                   | I/O               | Operation                                                                                                                                                                                                                   |
|                                      |                   | I                 |                                                                                                                                                                                                                             |
|                                      | 5                 |                   |                                                                                                                                                                                                                             |
|                                      | 1                 |                   |                                                                                                                                                                                                                             |
|                                      |                   | O                 |                                                                                                                                                                                                                             |
|                                      | 1 3               |                   |                                                                                                                                                                                                                             |
|                                      | 2                 |                   |                                                                                                                                                                                                                             |
| V DDEXT                              | 4                 |                   |                                                                                                                                                                                                                             |
|                                      | 4                 |                   |                                                                                                                                                                                                                             |
| V DDEXT                              | 7                 | I                 | (Mini-BGA) Ground (Mini-BGA)                                                                                                                                                                                                |
| GND                                  | 20                |                   |                                                                                                                                                                                                                             |
|                                      |                   |                   | For Emulation Use                                                                                                                                                                                                           |
| EZ-Port                              | 9                 | I/O               |                                                                                                                                                                                                                             |

NOTES

1 Interrupt/Flag pins retain both functions concurrently. If IMASK is set to enable the corresponding interrupts, then the DSP will vector to the appropriate interrupt vector address when the pin is asserted, either by external devices, or set as a programmable flag.

2 SPORT configuration determined by the DSP System Control Register. Software configurable.

## Memory Interface Pins

The ADSP-2185M processor can be used in one of two modes: Full Memory Mode, which allows BDMA operation with full external overlay memory and I/O capability, or Host Mode, which allows IDMA operation with limited external addressing capabilities. The operating mode is determined by the state of the Mode C pin during RESET and cannot be changed while the processor is running.

The following tables list the active signals at specific pins of the DSP during either of the two operating modes (Full Memory or Host). A signal in one table shares a pin with a signal from the other table, with the active signal determined by the mode set. For the shared pins and their alternate signals (e.g., A4/IAD3), refer to the package pinout tables.

## Full Memory Mode Pins (Mode C = 0)

| Pin Name   |   # of Pins | I/O   | Function                                                                                               |
|------------|-------------|-------|--------------------------------------------------------------------------------------------------------|
| A13:0      |          14 | O     | Address Output Pins for Program, Data, Byte, and I/O Spaces                                            |
| D23:0      |          24 | I/O   | Data I/O Pins for Program, Data, Byte, and I/O Spaces (8 MSBs are also used as Byte Memory Addresses.) |

## Host Mode Pins (Mode C = 1)

| Pin Name   |   # of Pins | I/O   | Function                                                      |
|------------|-------------|-------|---------------------------------------------------------------|
| IAD15:0    |          16 | I/O   | IDMA Port Address/Data Bus                                    |
| A0         |           1 | O     | Address Pin for External I/O, Program, Data, or Byte Access 1 |
| D23:8      |          16 | I/O   | Data I/O Pins for Program, Data, Byte, and I/O Spaces         |
| IWR        |           1 | I     | IDMA Write Enable                                             |
| IRD        |           1 | I     | IDMA Read Enable                                              |
| IAL        |           1 | I     | IDMA Address Latch Pin                                        |
| IS         |           1 | I     | IDMA Select                                                   |
| IACK       |           1 | O     | IDMA Port Acknowledge Configurable in Mode D; Open Drain      |

NOTE

1 In Host Mode, external peripheral addresses can be decoded using the A0, CMS , PMS , DMS , and IOMS signals.

## ADSP-2185M

## ADSP-2185M

## Terminating  Unused  Pins

The following table shows the recommendations for terminating unused pins.

## Pin Terminations

| Pin Name    | I/O 3-State (Z)   | Reset State   | Hi-Z * Caused By   | Unused Configuration                                              |
|-------------|-------------------|---------------|--------------------|-------------------------------------------------------------------|
| XTAL        | I                 | I             |                    | Float                                                             |
| CLKOUT      | O                 | O             |                    | Float                                                             |
| A13:1 or    | O (Z)             | Hi-Z          | BR , EBR           | Float                                                             |
| IAD 12:0    | I/O (Z)           | Hi-Z          | IS                 | Float                                                             |
| A0          | O (Z)             | Hi-Z          | BR , EBR           | Float                                                             |
| D23:8       | I/O (Z)           | Hi-Z          | BR , EBR           | Float                                                             |
| D7 or       | I/O (Z)           | Hi-Z          | BR , EBR           | Float                                                             |
| IWR         | I                 | I             |                    | High (Inactive)                                                   |
| D6 or       | I/O (Z)           | Hi-Z          | BR , EBR           | Float                                                             |
| IRD         | I                 | I             | BR , EBR           | High (Inactive)                                                   |
| D5 or       | I/O (Z)           | Hi-Z          |                    | Float                                                             |
| IAL         | I                 | I             |                    | Low (Inactive)                                                    |
| D4 or       | I/O (Z)           | Hi-Z          | BR , EBR           | Float                                                             |
| IS          | I                 | I             |                    | High (Inactive)                                                   |
| D3 or       | I/O (Z)           | Hi-Z          | BR , EBR           | Float                                                             |
| IACK        |                   |               |                    | Float                                                             |
| D2:0 or     | I/O (Z)           | Hi-Z          | BR , EBR           | Float                                                             |
| IAD15:13    | I/O (Z)           | Hi-Z          | IS                 | Float                                                             |
| PMS         | O (Z)             | O             | BR , EBR           | Float                                                             |
| DMS         | O (Z)             | O             | BR , EBR           | Float                                                             |
| BMS         | O (Z)             | O             | BR , EBR           | Float                                                             |
| IOMS        | O (Z)             | O             | BR , EBR           | Float                                                             |
| CMS         | O (Z)             | O             | BR , EBR           | Float                                                             |
| RD          | O (Z)             | O             | BR , EBR           | Float                                                             |
| WR          | O (Z)             | O             | BR , EBR           | Float                                                             |
| BR          | I                 | I             |                    | High (Inactive)                                                   |
| BG          | O (Z)             | O             | EE                 | Float                                                             |
| BGH         | O                 | O             |                    | Float                                                             |
| IRQ2 / PF7  | I/O (Z)           | I             |                    | Input = High (Inactive) or Program as Output, Set to 1, Let Float |
| IRQL1 / PF6 | I/O (Z)           | I             |                    | Input = High (Inactive) or Program as Output, Set to 1, Let Float |
| IRQL0 / PF5 | I/O (Z)           | I             |                    | Input = High (Inactive) or Program as Output, Set to 1, Let Float |
| IRQE / PF4  | I/O (Z)           | I             |                    | Input = High (Inactive) or Program as Output, Set to 1, Let Float |
| SCLK0       | I/O               | I             |                    | Input = High or Low, Output = Float                               |
| RFS0        | I/O               | I             |                    | High or Low                                                       |
| DR0         | I                 | I             |                    | High or Low                                                       |
| TFS0        | I/O               | I             |                    | High or Low                                                       |
| DT0         | O                 | O             |                    | Float                                                             |
| SCLK1       | I/O               | I             |                    | Input = High or Low, Output = Float                               |
| RFS1/ IRQ0  | I/O               | I             |                    | High or Low                                                       |
| DR1/FI      | I                 | I             |                    | High or Low                                                       |
| TFS1/ IRQ1  | I/O               | I             |                    | High or Low                                                       |
| DT1/FO      | O                 | O             |                    | Float                                                             |
| EE          | I                 | I             |                    | Float                                                             |
| EBR         | I                 | I             |                    | Float                                                             |
| EBG         | O                 | O             |                    | Float                                                             |
| ERESET      | I                 | I             |                    | Float                                                             |
| EMS         | O                 | O             |                    | Float                                                             |
| EINT        | I                 | I             |                    | Float                                                             |
| ECLK        | I                 | I             |                    | Float                                                             |
| ELIN        | I                 | I O           |                    | Float                                                             |
| ELOUT       | O                 |               |                    | Float                                                             |

## NOTES

* Hi-Z = High Impedance.

1. If the CLKOUT pin is not used, turn it OFF, using CLKODIS in SPORT0 autobuffer control register.

2. If the Interrupt/Programmable Flag pins are not used, there are two options: Option 1: When these pins are configured as INPUTS at reset and function as interrupts and input flag pins, pull the pins High (inactive). Option 2: Program the unused pins as OUTPUTS, set them to 1, prior to enabling interrupts, and let pins float.

3. All bidirectional pins have three-stated outputs. When the pin is configured as an output, the output is Hi-Z (high impedance) when inactive.

4. CLKIN, RESET , and PF3:0/MODE D:A are not included in the table because these pins must be used.

## Interrupts

The interrupt controller allows the processor to respond to the 11 possible interrupts and reset with minimum overhead. The ADSP-2185M provides four dedicated external interrupt input pins: IRQ2 , IRQL0 , IRQL1 , and IRQE (shared with the PF7:4 pins). In addition, SPORT1 may be reconfigured for IRQ0 , IRQ1 , FI and FO, for a total of six external interrupts. The ADSP-2185M also supports internal interrupts from the timer, the byte DMA port, the two serial ports, software, and the powerdown control circuit. The interrupt levels are internally prioritized and individually maskable (except power- down and reset). The IRQ2 , IRQ0 , and IRQ1 input pins can be programmed to be either level- or edge-sensitive. IRQL0 and IRQL1 are levelsensitive and IRQE is edge-sensitive. The priorities and vector addresses of all interrupts are shown in Table I.

Table I. Interrupt Priority and Interrupt Vector Addresses

| Source Of Interrupt                                                                                                                                                                 | Interrupt Vector Address (Hex)                                                                   |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| Reset (or Power-Up with PUCR = 1) Power-Down (Nonmaskable) IRQ2 IRQL1 IRQL0 SPORT0 Transmit SPORT0 Receive IRQE BDMA Interrupt SPORT1 Transmit or IRQ1 SPORT1 Receive or IRQ0 Timer | 0000 (Highest Priority) 002C 0004 0008 000C 0010 0014 0018 001C 0020 0024 0028 (Lowest Priority) |

Interrupt routines can either be nested with higher priority interrupts taking precedence or processed sequentially. Interrupts can be masked or unmasked with the IMASK register. Individual interrupt requests are logically ANDed with the bits in IMASK; the highest priority unmasked interrupt is then selected. The power-down interrupt is nonmaskable.

The ADSP-2185M masks all interrupts for one instruction cycle following the execution of an instruction that modifies the IMASK register. This does not affect serial port autobuffering or DMA transfers.

The interrupt control register, ICNTL, controls interrupt nesting and defines the IRQ0 , IRQ1 , and IRQ2 external interrupts to be either edge- or level-sensitive. The IRQE pin is an external edge sensitive interrupt and can be forced and cleared. The IRQL0 and IRQL1 pins are external level sensitive interrupts.

The IFC register is a write-only register used to force and clear interrupts. On-chip stacks preserve the processor status and are automatically maintained during interrupt handling. The stacks are twelve levels deep to allow interrupt, loop, and subroutine nesting. The following instructions allow global enable or disable servicing of the interrupts (including power down), regardless of the state of IMASK. Disabling the interrupts does not affect serial port autobuffering or DMA.

## ENA INTS; DIS INTS;

When the processor is reset, interrupt servicing is enabled.

## LOW POWER OPERATION

The ADSP-2185M has three low power modes that significantly reduce the power dissipation when the device operates under standby conditions. These modes are:

- Power-Down
- Idle
- Slow Idle

The CLKOUT pin may also be disabled to reduce external power dissipation.

## Power-Down

The ADSP-2185M processor has a low power feature that lets the processor enter a very low-power dormant state through hardware or software control. Following is a brief list of powerdown features. Refer to the ADSP-2100 Family User's Manual , 'System Interface' chapter, for detailed information about the power-down feature.

- Quick recovery from power-down. The processor begins executing instructions in as few as 200 CLKIN cycles.
- Support for an externally generated TTL or CMOS processor clock. The external clock can continue running during powerdown without affecting the lowest power rating and 200 CLKIN cycle recovery.
- Support for crystal operation includes disabling the oscillator to save power (the processor automatically waits approximately 4096 CLKIN cycles for the crystal oscillator to start or stabilize), and letting the oscillator run to allow 200 CLKIN cycle start-up.
- Power-down is initiated by either the power-down pin ( PWD ) or the software power-down force bit. Interrupt support allows an unlimited number of instructions to be executed before optionally powering down. The power-down interrupt also can be used as a nonmaskable, edge-sensitive interrupt.
- Context clear/save control allows the processor to continue where it left off or start with a clean context when leaving the power-down state.
- The RESET pin also can be used to terminate power-down.
- Power-down acknowledge pin indicates when the processor has entered power-down.

## Idle

When the ADSP-2185M is in the Idle Mode, the processor waits indefinitely in a low-power state until an interrupt occurs. When an unmasked interrupt occurs, it is serviced; execution then continues with the instruction following the IDLE instruction. In Idle mode IDMA, BDMA and autobuffer cycle steals still occur.

## ADSP-2185M

## Slow Idle

The IDLE instruction is enhanced on the ADSP-2185M to let the processor's internal clock signal be slowed, further reducing power consumption. The reduced clock frequency, a programmable fraction of the normal clock rate, is specified by a selectable divisor given in the IDLE instruction.

The format of the instruction is:

IDLE (n);

where n = 16, 32, 64, or 128. This instruction keeps the processor fully functional, but operating at the slower clock rate. While it is in this state, the processor's other internal clock signals, such as SCLK, CLKOUT, and timer clock, are reduced by the same ratio. The default form of the instruction, when no clock divisor is given, is the standard IDLE instruction.

When the IDLE (n) instruction is used, it effectively slows down the processor's internal clock and thus its response time to incoming interrupts. The one-cycle response time of the standard idle state is increased by n, the clock divisor. When an enabled interrupt is received, the ADSP-2185M will remain in the idle state for up to a maximum of n processor cycles (n = 16, 32, 64, or 128) before resuming normal operation.

When the IDLE (n) instruction is used in systems that have an externally generated serial clock (SCLK), the serial clock rate may be faster than the processor's reduced internal clock rate. Under these conditions, interrupts must not be generated at a faster than can be serviced, due to the additional time the processor takes to come out of the idle state (a maximum of n processor cycles).

## SYSTEM INTERFACE

Figure 2 shows typical basic system configurations with the ADSP-2185M, two serial devices, a byte-wide EPROM, and optional external program and data overlay memories (modeselectable). Programmable wait state generation allows the processor to connect easily to slow peripheral devices. The

ADSP-2185M also provides four external interrupts and two serial ports or six external interrupts and one serial port. Host Memory Mode allows access to the full external data bus, but limits addressing to a single address bit (A0). Through the use of external hardware, additional system peripherals can be added in this mode to generate and latch address signals.

## Clock Signals

The ADSP-2185M can be clocked by either a crystal or a TTL-compatible clock signal.

The CLKIN input cannot be halted, changed during operation, nor operated below the specified frequency during normal operation. The only exception is while the processor is in the power-down state. For additional information, refer to Chapter 9, ADSP-2100 Family User's Manual, for detailed information on this power-down feature.

If an external clock is used, it should be a TTL-compatible signal running at half the instruction rate. The signal is connected to the processor's CLKIN input. When an external clock is used, the XTAL input must be left unconnected.

The ADSP-2185M uses an input clock with a frequency equal to half the instruction rate; a 37.50 MHz input clock yields a 13 ns processor cycle (which is equivalent to 75 MHz). Normally, instructions are executed in a single processor cycle. All device timing is relative to the internal instruction clock rate, which is indicated by the CLKOUT signal when enabled.

Because the ADSP-2185M includes an on-chip oscillator circuit, an external crystal may be used. The crystal should be connected across the CLKIN and XTAL pins, with two capacitors connected as shown in Figure 3. Capacitor values are dependent on crystal type and should be specified by the crystal manufacturer. A parallel-resonant, fundamental frequency, microprocessorgrade crystal should be used.

A clock output (CLKOUT) signal is generated by the processor at the processor's cycle rate. This can be enabled and disabled by the CLKODIS bit in the SPORT0 Autobuffer Control Register.

Figure 2.  Basic System Interface

<!-- image -->

16

## RESET

The RESET signal initiates a master reset of the ADSP-2185M. The RESET signal must be asserted during the power-up sequence to assure proper initialization. RESET during initial power-up must be held long enough to allow the internal clock to stabilize. If RESET is activated any time after power-up, the clock continues to run and does not require stabilization time.

The power-up sequence is defined as the total time required for the crystal oscillator circuit to stabilize after a valid VDD is applied to the processor, and for the internal phase-locked loop (PLL) to lock onto the specific crystal frequency. A minimum of 2000 CLKIN cycles ensures that the PLL has locked but does not include the crystal oscillator start-up time. During this power-up sequence the RESET signal should be held low. On any subsequent resets, the RESET signal must meet the minimum pulsewidth specification, t RSP.

The RESET input contains some hysteresis; however, if an RC circuit is used to generate the RESET signal, the use of an external Schmidt trigger is recommended.

The master reset sets all internal stack pointers to the empty stack condition, masks all interrupts, and clears the MSTAT register. When RESET is released, if there is no pending bus request and the chip is configured for booting, the boot-loading sequence is performed. The first instruction is fetched from on-chip program memory location 0x0000 once boot loading completes.

## Power Supplies

The ADSP-2185M has separate power supply connections for the internal (VDDINT) and external (VDDEXT) power supplies. The internal supply must meet the 2.5 V requirement. The external supply can be connected to either a 2.5 V or 3.3 V supply. All external supply pins must be connected to the same supply. All input and I/O pins can tolerate input voltages up to 3.6 V, regardless of the external supply voltage. This feature provides maximum flexibility in mixing 2.5 V and 3.3 V components.

## MODES OF OPERATION

## Setting Memory Mode

Memory Mode selection for the ADSP-2185M is made during chip reset through the use of the Mode C pin. This pin is multiplexed with the DSP's PF2 pin, so care must be taken in how the mode selection is made. The two methods for selecting the value of Mode C are active and passive.

## Passive Configuration

Passive Configuration involves the use a pull-up or pull-down resistor connected to the Mode C pin. To minimize power consumption, or if the PF2 pin is to be used as an output in the DSP application, a weak pull-up or pull-down, on the order of 10 k Ω , can be used. This value should be sufficient to pull the pin to the desired level and still allow the pin to operate as a programmable flag output without undue strain on the processor's output driver. For minimum power consumption during power-down, reconfigure PF2 to be an input, as the pull-up or pull-down will hold the pin in a known state, and will not switch.

## Table II. Modes of Operation

| MODED   |   MODEC |   MODEB |   MODEA | Booting Method                                                                                                                                                                                                                                                    |
|---------|---------|---------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| X       |       0 |       0 |       0 | BDMA feature is used to load the first 32 program memory words from the byte memory space. Program execution is held off until all 32 words have been loaded. Chip is configured in Full Memory Mode. 1                                                           |
| X       |       0 |       1 |       0 | No automatic boot operations occur. Program execution starts at external memory location 0. Chip is configured in Full Memory Mode. BDMA can still be used, but the processor does not automatically use or wait for these operations.                            |
| 0       |       1 |       0 |       0 | BDMA feature is used to load the first 32 program memory words from the byte memory space. Program execution is held off until all 32 words have been loaded. Chip is configured in Host Mode. IACK has active pull-down. (REQUIRES ADDITIONAL HARDWARE).         |
| 0       |       1 |       0 |       1 | IDMA feature is used to load any internal memory as desired. Program execution is held off until internal program memory location 0 is written to. Chip is configured in Host Mode. IACK has active pull-down. 1                                                  |
| 1       |       1 |       0 |       0 | BDMA feature is used to load the first 32 program memory words from the byte memory space. Program execution is held off until all 32 words have been loaded. Chip is configured in Host Mode; IACK requires exter- nal pull down. (REQUIRES ADDITIONAL HARDWARE) |
| 1       |       1 |       0 |       1 | IDMA feature is used to load any internal memory as desired. Program execution is held off until internal program memory location 0 is written to. Chip is configured in Host Mode. IACK requires external pull-down. 1                                           |

## NOTE

1 Considered as standard operating settings. Using these configurations allows for easier design and better memory management.

Figure 3. External Crystal Connections

<!-- image -->

## ADSP-2185M

## Active Configuration

Active Configuration involves the use of a three-statable external driver connected to the Mode C pin. A driver's output enable should be connected to the DSP's RESET signal such that it only drives the PF2 pin when RESET is active (low). When RESET is deasserted, the driver should three-state, thus allowing full use of the PF2 pin as either an input or output. To minimize power consumption during power-down, configure the programmable flag as an output when connected to a threestated buffer. This ensures that the pin will be held at a constant level, and will not oscillate should the three-state driver's level hover around the logic switching point.

## IACK Configuration

Mode D = 0 and in host mode: IACK is an active, driven signal and cannot be 'wire OR'd.'

Mode D = 1 and in host mode: IACK is an open drain and requires an external pull-down, but multiple IACK pins can be 'wire OR'd' together.

## MEMORY ARCHITECTURE

The ADSP-2185M provides a variety of memory and peripheral interface options. The key functional groups are Program Memory, Data Memory, Byte Memory, and I/O. Refer to the following figures and tables for PM and DM memory allocations in the ADSP-2185M.

## Program Memory

Program Memory (Full Memory Mode) is a 24-bit-wide space for storing both instruction opcodes and data. The ADSP2185M has 16K words of Program Memory RAM on chip, and the capability of accessing up to two 8K external memory overlay spaces using the external data bus.

Program Memory (Host Mode) allows access to all internal memory. External overlay access is limited by a single external address line (A0). External program execution is not available in host mode due to a restricted data bus that is 16 bits wide only.

Figure 4.  Program Memory

<!-- image -->

## Table III. PMOVLAY Bits

| PMOVLAY   | Memory                                         | A13                | A12:0                                                                                                    |
|-----------|------------------------------------------------|--------------------|----------------------------------------------------------------------------------------------------------|
| 0 1 2     | Internal External Overlay 1 External Overlay 2 | Not Applicable 0 1 | Not Applicable 13 LSBs of Address Between 0x2000 and 0x3FFF 13 LSBs of Address Between 0x2000 and 0x3FFF |

## Data Memory

Data Memory (Full Memory Mode) is a 16-bit-wide space used for the storage of data variables and for memory-mapped control registers. The ADSP-2185M has 16K words on Data Memory RAM on-chip. Part of this space is used by 32 memory-mapped registers. Support also exists for up to two 8K external memory overlay spaces through the external data bus. All internal accesses

## ADSP-2185M

complete in one cycle. Accesses to external memory are timed using the wait states specified by the DWAIT register and the wait state mode bit.

Data Memory (Host Mode) allows access to all internal memory. External overlay access is limited by a single external address line (A0).

Figure 5.  Data Memory Map

<!-- image -->

Table IV. DMOVLAY Bits

| DMOVLAY   | Memory                                         | A13                | A12:0                                                                                                    |
|-----------|------------------------------------------------|--------------------|----------------------------------------------------------------------------------------------------------|
| 0 1 2     | Internal External Overlay 1 External Overlay 2 | Not Applicable 0 1 | Not Applicable 13 LSBs of Address Between 0x2000 and 0x3FFF 13 LSBs of Address Between 0x2000 and 0x3FFF |

## Memory Mapped Registers (New to the ADSP-2185M)

The ADSP-2185M has three memory mapped registers that differ from other ADSP-21xx Family DSPs. The slight modifications to these registers (Wait State Control, Programmable Flag and Composite Select Control, and System Control) provide the ADSP-2185M's wait state and BMS control features. Default bit values at reset are shown; if no value is shown, the bit is undefined at reset. Reserved bits are shown on a grey field. These bits should always be written with zeros.

<!-- image -->

## WAIT STATE MODE SELECT

- 0 = NORMAL MODE (PWAIT, DWAIT, IOWAIT0-3 = N WAIT STATES, RANGING FROM 0 TO 7)
- 1 = 2N + 1 MODE (PWAIT, DWAIT, IOWAIT0-3 = 2N + 1 WAIT STATES, RANGING FROM 0 TO 15)

Figure 6. Wait State Control Register

<!-- image -->

Figure 7. Programmable Flag and Composite Control Register

Figure 8. System Control Register

<!-- image -->

## I/O Space (Full Memory Mode)

The ADSP-2185M supports an additional external memory space called I/O space. This space is designed to support simple connections to peripherals (such as data converters and external registers) or to bus interface ASIC data registers. I/O space supports 2048 locations of 16-bit wide data. The lower eleven bits of the external address bus are used; the upper three bits are undefined. Two instructions were added to the core ADSP-2100 Family instruction set to read from and write to I/O memory space. The I/O space also has four dedicated three-bit wait state registers, IOWAIT0-3, which in combination with the wait state mode bit, specify up to 15 wait states to be automatically generated for each of four regions. The wait states act on address ranges as shown in Table V.

## ADSP-2185M

Table V. Wait States

| Address Range                                   | Wait State Register                                                                                                                                         |
|-------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0x000-0x1FF 0x200-0x3FF 0x400-0x5FF 0x600-0x7FF | IOWAIT0 and Wait State Mode Select Bit IOWAIT1 and Wait State Mode Select Bit IOWAIT2 and Wait State Mode Select Bit IOWAIT3 and Wait State Mode Select Bit |

## Composite Memory Select ( CMS )

The ADSP-2185M has a programmable memory select signal that is useful for generating memory select signals for memories mapped to more than one space. The CMS signal is generated to have the same timing as each of the individual memory select signals ( PMS , DMS , BMS , IOMS ) but can combine their functionality.

Each bit in the CMSSEL register, when set, causes the CMS signal to be asserted when the selected memory select is asserted. For example, to use a 32K word memory to act as both program and data memory, set the PMS and DMS bits in the CMSSEL register and use the CMS pin to drive the chip select of the memory, and use either DMS or PMS as the additional address bit.

The CMS pin functions like the other memory select signals with the same timing and bus request logic. A 1 in the enable bit causes the assertion of the CMS signal at the same time as the selected memory select signal. All enable bits default to 1 at reset, except the BMS bit.

## Byte Memory Select ( BMS )

The ADSP-2185M's BMS disable feature combined with the CMS pin allows use of multiple memories in the byte memory space. For example, an EPROM could be attached to the BMS select, and an SRAM could be connected to CMS . Because at reset BMS is enabled, the EPROM would be used for booting. After booting, software could disable BMS and set the CMS signal to respond to BMS , enabling the SRAM.

## Byte Memory

The byte memory space is a bidirectional, 8-bit-wide, external memory space used to store programs and data. Byte memory is accessed using the BDMA feature. The byte memory space consists of 256 pages, each of which is 16K × 8.

The byte memory space on the ADSP-2185M supports read and write operations as well as four different data formats. The byte memory uses data bits 15:8 for data. The byte memory uses data bits 23:16 and address bits 13:0 to create a 22-bit address. This allows up to a 4 meg × 8 (32 megabit) ROM or RAM to be used without glue logic. All byte memory accesses are timed by the BMWAIT register and the wait state mode bit.

## Byte Memory DMA (BDMA, Full Memory Mode)

The byte memory DMA controller allows loading and storing of program instructions and data using the byte memory space. The BDMA circuit is able to access the byte memory space while the processor is operating normally and steals only one DSP cycle per 8-, 16- or 24-bit word transferred.

Figure 9. BDMA Control Register

<!-- image -->

The BDMA circuit supports four different data formats that are selected by the BTYPE register field. The appropriate number of 8-bit accesses are done from the byte memory space to build the word size selected. Table VI shows the data formats supported by the BDMA circuit.

Table VI. Data Formats

|   BTYPE | Internal Memory Space   |   Word Size | Alignment   |
|---------|-------------------------|-------------|-------------|
|      00 | Program Memory          |          24 | Full Word   |
|      01 | Data Memory             |          16 | Full Word   |
|      10 | Data Memory             |           8 | MSBs        |
|      11 | Data Memory             |           8 | LSBs        |

Unused bits in the 8-bit data memory formats are filled with 0s. The BIAD register field is used to specify the starting address for the on-chip memory involved with the transfer. The 14-bit BEAD register specifies the starting address for the external byte memory space. The 8-bit BMPAGE register specifies the starting page for the external byte memory space. The BDIR register field selects the direction of the transfer. Finally, the 14-bit BWCOUNT register specifies the number of DSP words to transfer and initiates the BDMA circuit transfers.

BDMA accesses can cross page boundaries during sequential addressing. A BDMA interrupt is generated on the completion of the number of transfers specified by the BWCOUNT register.

The BWCOUNT register is updated after each transfer so it can be used to check the status of the transfers. When it reaches zero, the transfers have finished and a BDMA interrupt is generated. The BMPAGE and BEAD registers must not be accessed by the DSP during BDMA operations.

The source or destination of a BDMA transfer will always be on-chip program or data memory.

When the BWCOUNT register is written with a nonzero value the BDMA circuit starts executing byte memory accesses with wait states set by BMWAIT. These accesses continue until the count reaches zero. When enough accesses have occurred to create a destination word, it is transferred to or from on-chip memory. The transfer takes one DSP cycle. DSP accesses to external memory have priority over BDMA byte memory accesses.

The BDMA Context Reset bit (BCR) controls whether the processor is held off while the BDMA accesses are occurring. Setting the BCR bit to 0 allows the processor to continue operations. Setting the BCR bit to 1 causes the processor to stop execution while the BDMA accesses are occurring, to clear the context of the processor, and start execution at address 0 when the BDMA accesses have completed.

The BDMA overlay bits specify the OVLAY memory blocks to be accessed for internal memory. For ADSP-2185M, set to zero BDMA overlay bits in BDMA control register.

The BMWAIT field, which has 4 bits on ADSP-2185M, allows selection up to 15 wait states for BDMA transfers.

## Internal Memory DMA Port (IDMA Port; Host Memory Mode)

The IDMA Port provides an efficient means of communication between a host system and the ADSP-2185M. The port is used to access the on-chip program memory and data memory of the DSP with only one DSP cycle per word overhead. The IDMA port cannot, however, be used to write to the DSP's memorymapped control registers. A typical IDMA transfer process is described as follows:

1. Host starts IDMA transfer
2. Host checks IACK control line to see if the DSP is busy
3. Host uses IS and IAL control lines to latch either the DMA starting address (IDMAA) or the PM/DM OVLAY selection into the DSP's IDMA control registers. If Bit 15 = 1, the value of bits 7:0 represent the IDMA overlay: bits 14:8 must be set to 0. If Bit 15 = 0, the value of Bits 13:0 represent the starting address of internal memory to be accessed and Bit 14 reflects PM or DM for access.  For ADSP-2185M, IDDMOVLAY and IDPMOVLAY bits in IDMA overlay register should be set to zero.
4. Host uses IS and IRD (or IWR ) to read (or write) DSP internal memory (PM or DM).
5. Host checks IACK line to see if the DSP has completed the previous IDMA operation.
6. Host ends IDMA transfer.

The IDMA port has a 16-bit multiplexed address and data bus and supports 24-bit program memory. The IDMA port is completely asynchronous and can be written while the ADSP-2185M is operating at full speed.

The DSP memory address is latched and then automatically incremented after each IDMA transaction. An external device can therefore access a block of sequentially addressed memory by specifying only the starting address of the block. This increases throughput as the address does not have to be sent for each memory access.

IDMA Port access occurs in two phases. The first is the IDMA Address Latch cycle. When the acknowledge is asserted, a 14-bit address and 1-bit destination type can be driven onto the bus by an external device. The address specifies an on-chip memory location, the destination type specifies whether it is a DM or PM access. The falling edge of the IDMA address latch signal (IAL) or the missing edge of the IDMA select signal ( IS ) latches this value into the IDMAA register.

Once the address is stored, data can be read from, or written to, the ADSP-2185M's on-chip memory. Asserting the select line ( IS ) and the appropriate read or write line ( IRD and IWR respectively) signals the ADSP-2185M that a particular transaction is required. In either case, there is a one-processor-cycle delay for synchronization. The memory access consumes one additional processor cycle.

Once an access has occurred, the latched address is automatically incremented, and another access can occur.

## ADSP-2185M

Through the IDMAA register, the DSP can also specify the starting address and data format for DMA operation. Asserting the IDMA port select ( IS ) and address latch enable (IAL) directs the ADSP-2185M to write the address onto the IAD0-14 bus into the IDMA Control Register. If Bit 15 is set to 0, IDMA latches the address. If Bit 15 is set to 1, IDMA latches into the OVLAY register. This register, shown below, is memory mapped at address DM (0x3FE0). Note that the latched address (IDMAA) cannot be read back by the host. When Bit 14 in 0x3FE7 is set to 1, timing in Figure 31 applies for short reads. When Bit 14 in 0x3FE7 is set to zero, short reads use the timing shown in Figure 32. For ADSP-2185M, IDDMOVLAY and IDPMOVLAY bits in IDMA overlay register should be set to zero.

Refer to the following figures for more information on IDMA and DMA memory maps.

<!-- image -->

NOTES: RESERVED BITS ARE SHOWN ON A GRAY FIELD.  THESE BITS SHOULD ALWAYS BE WRITTEN WITH ZEROS.

Figure 10. IDMA Control/OVLAY Registers

<!-- image -->

NOTE: IDMA AND BDMA HAVE SEPARATE DMA CONTROL REGISTERS.

Figure 11. Direct Memory Access-PM and DM Memory Maps

## Bootstrap Loading (Booting)

The ADSP-2185M has two mechanisms to allow automatic loading of the internal program memory after reset. The method for booting is controlled by the Mode A, B, and C configuration bits.

When the MODE pins specify BDMA booting, the ADSP-2185M initiates a BDMA boot sequence when reset is released.

The BDMA interface is set up during reset to the following defaults when BDMA booting is specified: the BDIR, BMPAGE, BIAD, and BEAD registers are set to 0, the BTYPE register is set to 0 to specify program memory 24-bit words, and the BWCOUNT register is set to 32. This causes 32 words of on-chip program memory to be loaded from byte memory.

## ADSP-2185M

These 32 words are used to set up the BDMA to load in the remaining program code. The BCR bit is also set to 1, which causes program execution to be held off until all 32 words are loaded into on-chip program memory. Execution then begins at address 0.

The ADSP-2100 Family development software (Revision 5.02 and later) fully supports the BDMA booting feature and can generate byte memory space compatible boot code.

The IDLE instruction can also be used to allow the processor to hold off execution while booting continues through the BDMA interface. For BDMA accesses while in Host Mode, the addresses to boot memory must be constructed externally to the ADSP-2185M. The only memory address bit provided by the processor is A0.

## IDMA Port Booting

The ADSP-2185M can also boot programs through its Internal DMA port. If Mode C = 1, Mode B = 0, and Mode A = 1, the ADSP-2185M boots from the IDMA port. IDMA feature can load as much on-chip memory as desired. Program execution is held off until on-chip program memory location 0 is written to.

## Bus Request and Bus Grant

The ADSP-2185M can relinquish control of the data and address buses to an external device. When the external device requires access to memory, it asserts the bus request ( BR ) signal. If the ADSP-2185M is not performing an external memory access, it responds to the active BR input in the following processor cycle by:

- Three-stating the data and address buses and the PMS , DMS , BMS , CMS , IOMS , RD , WR output drivers,
- Asserting the bus grant ( BG ) signal, and
- Halting program execution.

If Go Mode is enabled, the ADSP-2185M will not halt program execution until it encounters an instruction that requires an external memory access.

If the ADSP-2185M is performing an external memory access when the external device asserts the BR signal, it will not threestate the memory interfaces nor assert the BG signal until the processor cycle after the access completes. The instruction does not need to be completed when the bus is granted. If a single instruction requires two external memory accesses, the bus will be granted between the two accesses.

When the BR signal is released, the processor releases the BG signal, re-enables the output drivers, and continues program execution from the point at which it stopped.

The bus request feature operates at all times, including when the processor is booting and when RESET is active.

The BGH pin is asserted when the ADSP-2185M requires the external bus for a memory or BDMA access, but is stopped. The other device can release the bus by deasserting bus request. Once the bus is released, the ADSP-2185M deasserts BG and BGH and executes the external memory access.

## Flag I/O Pins

The ADSP-2185M has eight general purpose programmable input/output flag pins. They are controlled by two memory mapped registers. The PFTYPE register determines the direction, 1 = output and 0 = input. The PFDATA register is used to read and write the values on the pins. Data being read from a pin configured as an input is synchronized to the ADSP-2185M's clock. Bits that are programmed as outputs will read the value being output. The PF pins default to input during reset.

In addition to the programmable flags, the ADSP-2185M has five fixed-mode flags, FI, FO, FL0, FL1, and FL2. FL0-FL2 are dedicated output flags. FI and FO are available as an alternate configuration of SPORT1.

Note: Pins PF0, PF1, PF2, and PF3 are also used for device configuration during reset.

## Instruction Set Description

The ADSP-2185M assembly language instruction set has an algebraic syntax that was designed for ease of coding and readability. The assembly language, which takes full advantage of the processor's unique architecture, offers the following benefits:

- The algebraic syntax eliminates the need to remember cryptic assembler mnemonics. For example, a typical arithmetic add instruction, such as AR = AX0 + AY0, resembles a simple equation.
- Every instruction assembles into a single, 24-bit word that can execute in a single instruction cycle.
- The syntax is a superset ADSP-2100 Family assembly language and is completely source and object code compatible with other family members. Programs may need to be relocated to utilize on-chip memory and conform to the ADSP-2185M's interrupt vector and reset vector map.
- Sixteen condition codes are available. For conditional jump, call, return, or arithmetic instructions, the condition can be checked and the operation executed in the same instruction cycle.
- Multifunction instructions allow parallel execution of an arithmetic instruction with up to two fetches or one write to processor memory space during a single instruction cycle.

## DESIGNING AN EZ-ICE-COMPATIBLE SYSTEM

The ADSP-2185M has on-chip emulation support and an ICE-Port, a special set of pins that interface to the EZ-ICE. These features allow in-circuit emulation without replacing the target system processor by using only a 14-pin connection from the target system to the EZ-ICE. Target systems must have a 14-pin connector to accept the EZ-ICE's in-circuit probe, a 14-pin plug.

Issuing the chip reset command during emulation causes the DSP to perform a full chip reset, including a reset of its memory mode. Therefore, it is vital that the mode pins are set correctly PRIOR to issuing a chip reset command from the emulator user interface. If a passive method of maintaining mode information is being used (as discussed in Setting Memory Modes), it does not matter that the mode information is latched by an emulator reset. However, if the RESET pin is being used as a method of setting the value of the mode pins, the effects of an emulator reset must be taken into consideration.

One method of ensuring that the values located on the mode pins are those desired is to construct a circuit like the one shown in Figure 12. This circuit forces the value located on the Mode A pin to logic high; regardless of whether it is latched via the RESET or ERESET pin.

Figure 12. Mode A Pin/EZ-ICE Circuit

<!-- image -->

See the ADSP-2100 Family EZ-Tools data sheet for complete information on ICE products.

The ICE-Port interface consists of the following ADSP-2185M pins: EBR , EINT , EE, EBG , ECLK, ERESET , ELIN, EMS , and ELOUT

These ADSP-2185M pins must be connected only to the EZ-ICE connector in the target system. These pins have no function except during emulation, and do not require pull-up or pull-down resistors. The traces for these signals between the ADSP-2185M and the connector must be kept as short as possible, no longer than 3 inches.

The following pins are also used by the EZ-ICE: BR , BG , RESET , and GND.

The EZ-ICE uses the EE (emulator enable) signal to take control of the ADSP-2185M in the target system. This causes the processor to use its ERESET , EBR , and EBG pins instead of the RESET , BR , and BG pins. The BG output is three-stated. These signals do not need to be jumper-isolated in your system.

The EZ-ICE connects to your target system via a ribbon cable and a 14-pin female plug. The female plug is plugged onto the 14-pin connector (a pin strip header) on the target board.

## Target Board Connector for EZ-ICE Probe

The EZ-ICE connector (a standard pin strip header) is shown in Figure 13. You must add this connector to your target board design if you intend to use the EZ-ICE. Be sure to allow enough room in your system to fit the EZ-ICE probe onto the 14-pin connector.

Figure 13. Target Board Connector for EZ-ICE

<!-- image -->

## ADSP-2185M

The 14-pin, 2-row pin strip header is keyed at the Pin 7 location-Pin 7 must be removed from the header. The pins must be 0.025 inch square and at least 0.20 inch in length. Pin spacing should be 0.1 × 0.1 inches. The pin strip header must have at least 0.15 inch clearance on all sides to accept the EZ-ICE probe plug.

Pin strip headers are available from vendors such as 3M, McKenzie, and Samtec.

## Target Memory Interface

For your target system to be compatible with the EZ-ICE emulator, it must comply with the memory interface guidelines listed below.

## PM, DM, BM, IOM, AND CM

Design your Program Memory (PM), Data Memory (DM), Byte Memory (BM), I/O Memory (IOM), and Composite Memory (CM) external interfaces to comply with worst case device timing requirements and switching characteristics as specified in this data sheet. The performance of the EZ- ICE may approach published worst-case specification for some memory access timing requirements and switching characteristics.

Note: If your target does not meet the worst-case chip specification for memory access parameters, you may not be able to emulate your circuitry at the desired CLKIN frequency. Depending on the severity of the specification violation, you may have trouble manufacturing your system as DSP components statistically vary in switching characteristic and timing requirements within published limits.

Restriction: All memory strobe signals on the ADSP-2185M ( RD , WR , PMS , DMS , BMS , CMS , and IOMS ) used in your target system must have 10 k Ω pull-up resistors connected when the EZ-ICE is being used. The pull-up resistors are necessary because there are no internal pull-ups to guarantee their state during prolonged three-state conditions resulting from typical EZ-ICE debugging sessions. These resistors may be removed at your option when the EZ-ICE is not being used.

## Target System Interface Signals

When the EZ-ICE board is installed, the performance on some system signals change. Design your system to be compatible with the following system interface signal changes introduced by the EZ-ICE board:

- EZ-ICE emulation introduces an 8 ns propagation delay between your target circuitry and the DSP on the RESET signal.
- EZ-ICE emulation introduces an 8 ns propagation delay between your target circuitry and the DSP on the BR signal.
- EZ-ICE emulation ignores RESET and BR when singlestepping.
- EZ-ICE emulation ignores RESET and BR when in Emulator Space (DSP halted).
- EZ-ICE emulation ignores the state of target BR in certain modes. As a result, the target system may take control of the DSP's external memory bus only if bus grant ( BG ) is asserted by the EZ- ICE board's DSP.

## ADSP-2185M-SPECIFICATIONS RECOMMENDED OPERATING CONDITIONS

|           | K Grade     | K Grade     | B Grade     | B Grade     |      |
|-----------|-------------|-------------|-------------|-------------|------|
| Parameter | Min         | Max         | Min         | Max         | Unit |
| V DDINT   | 2.37        | 2.63        | 2.25        | 2.75        | V    |
| V DDEXT   | 2.37        | 3.6         | 2.25        | 3.6         | V    |
| V INPUT 1 | V IL = -0.3 | V IH = +3.6 | V IL = -0.3 | V IH = +3.6 | V    |
| T AMB     | 0           | +70         | -40         | +85         | ° C  |

## NOTES

1 The ADSP-2185M is 3.3 V tolerant (always accepts up to 3.6 V max V IH), but voltage compliance (on outputs, VOH) depends on the input VDDEXT; because VOH (max) ≈ VDDEXT (max). This applies to bidirectional pins (D0-D23, RFS0, RFS1, SCLK0, SCLK1, TFS0, TFS1, A1-A13, PF0-PF7) and input only pins (CLKIN, RESET , BR , DR0, DR1, PWD ).

Specifications subject to change without notice.

## ELECTRICAL CHARACTERISTICS

| Parameter   | Parameter                           | Test Conditions                                    | Min       | K/B Grades Typ   | Max   | Unit   |
|-------------|-------------------------------------|----------------------------------------------------|-----------|------------------|-------|--------|
| V IH        | Hi-Level Input Voltage 1, 2         | @V DDINT = max                                     | 1.5       |                  |       | V      |
| V IH        | Hi-Level CLKIN Voltage              | @V DDINT = max                                     | 2.0       |                  |       | V      |
| V IL        | Lo-Level Input Voltage 1, 3         | @V DDINT = min                                     |           |                  | 0.7   | V      |
| V OH        | Hi-Level Output Voltage 1, 4, 5     | @V DDEXT = min, I OH = -0.5 mA                     | 2.0       |                  |       | V      |
|             |                                     | @V DDEXT = 3.0 V, I OH = -0.5 mA                   | 2.4       |                  |       | V      |
|             |                                     | @V DDEXT = min, I OH = -100 µ A 6                  | V DDEXT - | 0.3              |       | V      |
| V OL        | Lo-Level Output Voltage 1, 4, 5     | @V DDEXT = min, I OL = 2 mA                        |           |                  | 0.4   | V      |
| I IH        | Hi-Level Input Current 3            | @V DDINT = max, V IN = 3.6 V                       |           |                  | 10    | µ A    |
| I IL        | Lo-Level Input Current 3            | @V DDINT = max, V IN = 0 V                         |           |                  | 10    | µ A    |
| I OZH       | Three-State Leakage Current 7       | @V DDEXT = max, V IN = 3.6 V 8                     |           |                  | 10    | µ A    |
| I OZL       | Three-State Leakage Current 7       | @V DDEXT = max, V IN = 0 V 8                       |           |                  | 10    | µ A    |
| I DD        | Supply Current (Idle) 9             | @V DDINT = 2.5, t CK = 15 ns                       |           | 9                |       | mA     |
| I DD        | Supply Current (Idle) 9             | @V DDINT = 2.5, t CK = 13.3 ns                     |           | 10               |       | mA     |
| I DD        | Supply Current (Dynamic) 10         | @V DDINT = 2.5, t CK = 15 ns 11 , T AMB = 25 ° C   |           | 35               |       | mA     |
| I DD        | Supply Current (Dynamic) 10         | @V DDINT = 2.5, t CK = 13.3 ns 11 , T AMB = 25 ° C |           | 38               |       | mA     |
| I DD        | Supply Current (Power-Down) 12      | @V DDINT = 2.5, T AMB = 25 ° C in Lowest           |           | 100              |       | µ A    |
| C I         | Input Pin Capacitance 3, 6          | @V IN = 2.5 V, f IN = 1.0 MHz, T AMB = 25 ° C      |           |                  | 8     | pF     |
| C O         | Output Pin Capacitance 6, 7, 12, 13 | @V IN = 2.5 V, f IN = 1.0 MHz, T AMB = 25 ° C      |           |                  | 8     | pF     |

## NOTES

1 Bidirectional pins: D0-D23, RFS0, RFS1, SCLK0, SCLK1, TFS0, TFS1, A1-A13, PF0-PF7.

2 Input only pins: RESET , BR , DR0, DR1, PWD .

3 Input only pins: CLKIN, RESET , BR , DR0, DR1, PWD .

4 Output pins: BG , PMS , DMS , BMS , IOMS , CMS , RD , WR , PWDACK, A0, DT0, DT1, CLKOUT, FL2-0, BGH .

5 Although specified for TTL outputs, all ADSP-2185M outputs are CMOS-compatible and will drive to VDDEXT and GND, assuming no dc loads.

6 Guaranteed but not tested.

7 Three-statable pins: A0-A13, D0-D23, PMS , DMS , BMS , IOMS , CMS , RD , WR , DT0, DT1, SCLK0, SCLK1, TFS0, TFS1, RFS0, RFS1, PF0-PF7.

8 0 V on BR .

9 Idle refers to ADSP-2185M state of operation during execution of IDLE instruction. Deasserted pins are driven to either V DD or GND.

10 IDD measurement taken with all instructions executing from internal memory. 50% of the instructions are multifunction (Types 1, 4, 5, 12, 13, 14), 30% are Type 2 and Type 6, and 20% are idle instructions.

11 VIN = 0 V and 3 V. For typical figures for supply currents, refer to Power Dissipation section.

12 See Chapter 9 of the ADSP-2100 Family User's Manual for details.

13 Output pin capacitance is the capacitive load for any three-stated output pin.

Specifications subject to change without notice.

## ABSOLUTE MAXIMUM RATINGS 1

|                                    | Value   | Value           |
|------------------------------------|---------|-----------------|
| Parameter                          | Min     | Max             |
| Internal Supply Voltage (V DDINT ) | -0.3 V  | +3.0 V          |
| External Supply Voltage (V DDEXT ) | -0.3 V  | +4.0 V          |
| Input Voltage 2                    | -0.5 V  | +4.0 V          |
| Output Voltage Swing 3             | -0.5 V  | V DDEXT + 0.5 V |
| Operating Temperature Range        | -40 ° C | +85 ° C         |
| Storage Temperature Range          | -65 ° C | +150 ° C        |
| Lead Temperature (5 sec) LQFP      |         | 280 ° C         |

## ESD SENSITIVITY

ESD (electrostatic  discharge)  sensitive  device.  Electrostatic  charges  as  high  as  4000 V  readily accumulate on the human body and test equipment and can discharge without detection. Although the ADSP-2185M features proprietary ESD protection circuitry, permanent damage may occur on devices subjected to high-energy electrostatic discharges. Therefore, proper ESD precautions are recommended to avoid performance degradation or loss of functionality.

## TIMING SPECIFICATIONS

## GENERAL NOTES

Use the exact timing information given. Do not attempt to derive parameters from the addition or subtraction of others. While addition or subtraction would yield meaningful results for an individual device, the values given in this data sheet reflect statistical variations and worst cases. Consequently, you cannot meaningfully add up parameters to derive longer times.

## TIMING NOTES

Switching characteristics specify how the processor changes its signals. You have no control over this timing-circuitry external to the processor must be designed for compatibility with these signal characteristics. Switching characteristics tell you what the processor will do in a given circumstance. You can also use switching characteristics to ensure that any timing requirement of a device connected to the processor (such as memory) is satisfied.

## NOTES

1

Stresses  greater  than  those  listed  may  cause  permanent  damage  to  the  device. These are stress ratings only; functional operation of the device at these or any other conditions greater than those indicated in the operational sections of this specification  is  not  implied.  Exposure  to  absolute  maximum  rating  conditions  for extended periods may affect device reliability.

2 Applies to Bidirectional pins (D0-D23, RFS0, RFS1, SCLK0, SCLK1, TFS0, TFS1, A1-A13, PF0-PF7) and Input only pins (CLKIN, RESET , BR ,  DR0, DR1, PWD ).

- 3 Applies to Output pins ( BG , PMS , DMS , BMS , IOMS , CMS , RD , WR ,  PWDACK, A0, DT0, DT1, CLKOUT, FL2-0, BGH ).

<!-- image -->

Timing requirements apply to signals that are controlled by circuitry external to the processor, such as the data input for a read operation. Timing requirements guarantee that the processor operates correctly with other devices.

## MEMORY TIMING SPECIFICATIONS

The table below shows common memory device specifications and the corresponding ADSP-2185M timing parameters, for your convenience.

| Memory Device Specification   | Parameter   | Timing Parameter Definition 1          |
|-------------------------------|-------------|----------------------------------------|
| Address Setup to Write Start  | t ASW       | A0-A13, xMS Setup before WR Low        |
| Address Setup to Write End    | t AW        | A0-A13, xMS Setup before WR Deasserted |
| Address Hold Time             | t WRA       | A0-A13, xMS Hold before WR Low         |
| Data Setup Time               | t DW        | Data Setup before WR High              |
| Data Hold Time                | t DH        | Data Hold after WR High                |
| OE to Data Valid              | t RDD       | RD Low to Data Valid                   |
| Address Access Time           | t AA        | A0-A13, xMS to Data Valid              |

## NOTE

1 xMS = PMS , DMS , BMS , CMS or IOMS .

## ADSP-2185M

## ADSP-2185M

## FREQUENCY DEPENDENCY FOR TIMING SPECIFICATIONS

tCK is defined as 0.5 tCKI. The ADSP-2185M uses an input clock with a frequency equal to half the instruction rate. For example, a 37.50 MHz input clock (which is equivalent to 26.6 ns) yields a 13.3 ns processor cycle (equivalent to 75 MHz). tCK values within the range of 0.5 t CKI period should be substituted for all relevant timing parameters to obtain the specification value.

Example: tCKH = 0.5 tCK - 2 ns = 0.5 (15 ns) - 2 ns = 5.5 ns

## ENVIRONMENTAL  CONDITIONS 1

| Rating Description                       | Symbol   | LQFP     | Mini-BGA   |
|------------------------------------------|----------|----------|------------|
| Thermal Resistance (Case-to-Ambient)     | θ CA     | 48 ° C/W | 63.3 ° C/W |
| Thermal Resistance (Junction-to-Ambient) | θ JA     | 50 ° C/W | 70.7 ° C/W |
| Thermal Resistance (Junction-to-Case)    | θ JC     | 2 ° C/W  | 7.4 ° C/W  |

## NOTE

1 Where the Ambient Temperature Rating (TAMB) is:

TAMB = TCASE - (PD × θ CA)

TCASE = Case Temperature in ° C

PD = Power Dissipation in W

## POWER DISSIPATION

To determine total power dissipation in a specific application, the following equation should be applied for each output:

<!-- formula-not-decoded -->

C = load capacitance, f = output switching frequency.

## Example:

In an application where external data memory is used and no other outputs are active, power dissipation is calculated as follows:

## Assumptions:

- External data memory is accessed every cycle with 50% of the address pins switching.
- External data memory writes occur every other cycle with 50% of the data pins switching.
- Each address and data pin has a 10 pF total load at the pin.
- The application operates at VDDEXT = 3.3 V and tCK = 30 ns.

Total Power Dissipation = PINT + ( C × VDDEXT 2 × f )

PINT = internal power dissipation from Power vs. Frequency graph (Figure 15).

( C × VDDEXT 2 × f ) is calculated for each output:

| Parameters                     | # of Pins   | × C pF      | × V DDEXT 2 V           | × f MHz                | PD mW                  |
|--------------------------------|-------------|-------------|-------------------------|------------------------|------------------------|
| Address Data Output, WR RD DMS | 7 1         | 10 10 10 10 | 3.3 2 3.3 2 3.3 2 3.3 2 | 16.67 16.67 16.67 33.3 | 12.7 16.3 1.8 7.2 38.0 |
|                                | 9           |             |                         |                        |                        |
| CLKOUT,                        | 2           |             |                         |                        |                        |
| CLKOUT,                        |             |             |                         |                        |                        |

Total power dissipation for this example is PINT + 38.0 mW.

## Output Drive Currents

Figure 14 shows typical I-V characteristics for the output drivers on the ADSP-2185M. The curves represent the current drive capability of the output drivers as a function of output voltage.

Figure 14. Typical Output Driver Characteristics

<!-- image -->

<!-- image -->

## NOTES:

VALID FOR ALL TEMPERATURE GRADES.

- 1 POWER REFLECTS DEVICE OPERATING WITH NO OUTPUT LOADS.
- 2 TYPICAL POWER DISSIPATION AT 2.5V V DDINT  AND 25 ° C, EXCEPT WHERE SPECIFIED.
- 3 I DD  MEASUREMENT TAKEN WITH ALL INSTRUCTIONS EXECUTING FROM INTERNAL MEMORY. 50% OF THE INSTRUCTIONS ARE MULTIFUNCTION (TYPES 1, 4, 5, 12, 13, 14), 30% ARE TYPE 2 AND TYPE 6, AND 20% ARE IDLE INSTRUCTIONS.
- 4 IDLE REFERS TO STATE OF OPERATION DURING EXECUTION OF IDLE INSTRUCTION. DEASSERTED PINS ARE DRIVEN TO EITHER V DD OR GND.

Figure 15. Power vs. Frequency

## Capacitive Loading

Figure 16 and Figure 17 show the capacitive loading characteristics of the ADSP-2185M.

Figure 16. Typical Output Rise Time vs. Load Capacitance (at Maximum Ambient Operating Temperature)

<!-- image -->

Figure 17. Typical Output Valid Delay or Hold vs. Load Capacitance, CL (at Maximum Ambient Operating Temperature)

<!-- image -->

## ADSP-2185M

## TEST CONDITIONS

## Output Disable Time

Output pins are considered to be disabled when they have stopped driving and started a transition from the measured output high or low voltage to a high impedance state. The output disable time (tDIS) is the difference of tMEASURED and tDECAY, as shown in the Output Enable/Disable diagram. The time is the interval from when a reference signal reaches a high or low voltage level to when the output voltages have changed by 0.5 V from the measured output high or low voltage.

The decay time, tDECAY, is dependent on the capacitive load, CL, and the current load, iL, on the output pin. It can be approximated by the following equation:

<!-- formula-not-decoded -->

from which

<!-- formula-not-decoded -->

is calculated. If multiple pins (such as the data bus) are disabled, the measurement value is that of the last pin to stop driving.

Figure 18. Voltage Reference Levels for AC Measurements (Except Output Enable/Disable)

<!-- image -->

## Output Enable Time

Output pins are considered to be enabled when they have made a transition from a high-impedance state to when they start driving. The output enable time (tENA) is the interval from when a reference signal reaches a high or low voltage level to when the output has reached a specified high or low trip point, as shown Figure 19. If multiple pins (such as the data bus) are enabled, the measurement value is that of the first pin to start driving.

<!-- image -->

HIGH-IMPEDANCE STATE. TEST CONDITIONS CAUSE THIS VOLTAGE LEVEL TO BE APPROXIMATELY 1.5V.

Figure 19. Output Enable/Disable

<!-- image -->

Figure 20. Equivalent Loading for AC Measurements (Including All Fixtures)

## ADSP-2185M

| Parameter               | Min                          | Max         | Unit   |
|-------------------------|------------------------------|-------------|--------|
| Clock Signals and Reset |                              |             |        |
| Timing Requirements:    |                              |             |        |
| t CKI                   | CLKIN Period                 | 26.6 80     | ns     |
| t CKIL                  | CLKIN Width Low              | 8           | ns     |
| t CKIH                  | CLKIN Width High             | 8           | ns     |
| Switching               | Characteristics:             |             |        |
| t CKL                   | CLKOUT Width Low             | 0.5t CK - 2 | ns     |
| t CKH                   | CLKOUT Width High            | 0.5t CK - 2 | ns     |
| t CKOH                  | CLKIN High to CLKOUT High    | 0 13        | ns     |
| Control Signals Timing  | Requirements :               |             |        |
| t RSP                   | RESET Width Low              | 5t CK 1     | ns     |
| t MS                    | Mode Setup before RESET High | 2           | ns     |
| t MH                    | Mode Hold after RESET High   | 5           | ns     |

## NOTE

1 Applies after power-up sequence is complete. Internal phase lock loop requires no more than 2000 CLKIN cycles assuming stable CLKIN (not including crystal oscillator start-up time).

<!-- image -->

*

PF3 IS MODE D, PF2 IS MODE C, PF1 IS MODE B, PF0 IS MODE A

Figure 21. Clock Signals

## ADSP-2185M

| Parameter                  | Min                                                  | Max           | Unit   |
|----------------------------|------------------------------------------------------|---------------|--------|
| Interrupts and             | Flags                                                |               |        |
| Timing Requirements:       |                                                      |               |        |
| t IFS                      | IRQx , FI, or PFx Setup before CLKOUT Low 1, 2, 3, 4 | 0.25t CK + 10 | ns     |
| t IFH                      | IRQx , FI, or PFx Hold after CLKOUT High 1, 2, 3, 4  | 0.25t CK      | ns     |
| Switching Characteristics: |                                                      |               |        |
| t FOH                      | Flag Output Hold after CLKOUT Low 5                  | 0.5t CK - 5   | ns     |
| t FOD                      | Flag Output Delay from CLKOUT Low 5                  | 0.5t CK       | ns     |

## NOTES

1 If IRQx and FI inputs meet tIFS and tIFH setup/hold requirements, they will be recognized during the current clock cycle; otherwise the signals will be recognized on the following cycle. (Refer to 'Interrupt Controller Operation' in the Program Control chapter of the ADSP-2100 Family User's Manual for further information on interrupt servicing.)

2 Edge-sensitive interrupts require pulsewidths greater than 10 ns; level-sensitive interrupts must be held low until serviced.

3 IRQx = IRQ0 , IRQ1 , IRQ2 , IRQL0 , IRQL1 , IRQLE .

4 PFx = PF0, PF1, PF2, PF3, PF4, PF5, PF6, PF7.

5 Flag Outputs = PFx, FL0, FL1, FL2, FO.

Figure 22. Interrupts and Flags

<!-- image -->

## ADSP-2185M

| Parameter                  | Min                                       | Max          | Unit   |
|----------------------------|-------------------------------------------|--------------|--------|
| Bus Request-Bus Grant      |                                           |              |        |
| Timing Requirements:       |                                           |              |        |
| t BH                       | BR Hold after CLKOUT High 1 0.25t         |              | ns     |
| t BS                       | BR Setup before CLKOUT Low 1 0.25t        |              | ns     |
| Switching Characteristics: |                                           |              |        |
| t SD                       | CLKOUT High to xMS , RD , WR Disable      | 0.25t CK + 8 | ns     |
| t SDB                      | xMS , RD , WR Disable to BG Low 0         |              | ns     |
| t SE                       | BG High to xMS , RD , WR Enable 0         |              | ns     |
| t SEC                      | xMS , RD , WR Enable to CLKOUT High 0.25t |              | ns     |
| t SDBH xMS , RD            | , WR Disable to BGH Low 2 0               |              | ns     |
| t SEH BGH High             | to xMS , RD , WR Enable 2 0               |              | ns     |

## NOTES

## xMS = PMS , DMS , CMS , IOMS , BMS .

1 BR is an asynchronous signal. If BR meets the setup/hold requirements, it will be recognized during the current clock cycle; otherwise the signal will be recognized on the following cycle. Refer to the ADSP-2100 Family User's Manual for BR / BG cycle relationships.

2 BGH is asserted when the bus is granted and the processor or BDMA requires control of the bus to continue.

Figure 23. Bus Request-Bus Grant

<!-- image -->

## ADSP-2185M

| Parameter            | Min                                  | Max             | Unit                |
|----------------------|--------------------------------------|-----------------|---------------------|
| Memory Read          |                                      |                 |                     |
| Timing Requirements: |                                      |                 |                     |
| t RDD                | RD Low to Data Valid                 |                 | 0.5t CK - 5 + w ns  |
| t AA                 | A0-A13, xMS to Data Valid            |                 | 0.75t CK - 6 + w ns |
| t RDH                | Data Hold from RD High               | 0               | ns                  |
| Switching            | Characteristics:                     |                 |                     |
| t RP                 | RD Pulsewidth                        | 0.5t CK - 3 + w | ns                  |
| t CRD                | CLKOUT High to RD Low                | 0.25t CK - 2    | 0.25t CK + 4 ns     |
| t ASR                | A0-A13, xMS Setup before RD Low      | 0.25t CK - 3    | ns                  |
| t RDA                | A0-A13, xMS Hold after RD Deasserted | 0.25t CK - 3    | ns                  |
| t RWR                | RD High to RD or WR Low              | 0.5t CK - 3     | ns                  |

NOTES

w = wait states x tCK.

xMS = PMS , DMS , CMS , IOMS , BMS .

Figure 24. Memory Read

<!-- image -->

## ADSP-2185M

| Parameter                  |                                          | Min Max                    | Unit   |
|----------------------------|------------------------------------------|----------------------------|--------|
| Memory Write               |                                          |                            |        |
| Switching Characteristics: |                                          |                            |        |
| t DW                       | Data Setup before WR High                | 0.5t CK - 4 + w            | ns     |
| t DH                       | Data Hold after WR High                  | 0.25t CK - 1               | ns     |
| t WP                       | WR Pulsewidth                            | 0.5t CK - 3 + w            | ns     |
| t WDE                      | WR Low to Data Enabled                   | 0                          | ns     |
| t ASW                      | A0-A13, xMS Setup before WR Low          | 0.25t CK - 3               | ns     |
| t DDR                      | Data Disable before WR or RD Low         | 0.25t CK - 3               | ns     |
| t CWR                      | CLKOUT High to WR Low                    | 0.25t CK - 2 0.25 t CK + 4 | ns     |
| t AW                       | A0-A13, xMS , Setup before WR Deasserted | 0.75t CK - 5 + w           | ns     |
| t WRA                      | A0-A13, xMS Hold after WR Deasserted     | 0.25t CK - 1               | ns     |
| t WWR                      | WR High to RD or WR Low                  | 0.5t CK - 3                | ns     |

## NOTES

w = wait states x t CK.

xMS = PMS , DMS , CMS , IOMS , BMS .

Figure 25. Memory Write

<!-- image -->

## ADSP-2185M

## Serial Ports

Figure 26. Serial Ports

| Parameter                   |                                                  | Min      | Max          | Unit   |
|-----------------------------|--------------------------------------------------|----------|--------------|--------|
| Serial Ports                |                                                  |          |              |        |
| Timing Requirements:        | Timing Requirements:                             |          |              |        |
| t SCK                       | SCLK Period                                      | 26.6     |              | ns     |
| t SCS                       | DR/TFS/RFS Setup before SCLK Low                 | 4        |              | ns     |
| t SCH                       | DR/TFS/RFS Hold after SCLK Low                   | 7        |              | ns     |
| t SCP                       | SCLKIN Width                                     | 12       |              | ns     |
| Switching Characteristics : | Switching Characteristics :                      |          |              |        |
| t CC                        | CLKOUT High to SCLKOUT                           | 0.25t CK | 0.25t CK + 6 | ns     |
| t SCDE                      | SCLK High to DT Enable                           | 0        |              | ns     |
| t SCDV                      | SCLK High to DT Valid                            |          | 12           | ns     |
| t RH                        | TFS/RFS OUT Hold after SCLK High                 | 0        |              | ns     |
| t RD                        | TFS/RFS OUT Delay from SCLK High                 |          | 12           | ns     |
| t SCDH                      | DT Hold after SCLK High                          | 0        |              | ns     |
| t TDE                       | TFS (Alt) to DT Enable                           | 0        |              | ns     |
| t TDV                       | TFS (Alt) to DT Valid                            |          | 12           | ns     |
| t SCDD                      | SCLK High to DT Disable                          |          | 12           | ns     |
| t RDV                       | RFS (Multichannel, Frame Delay Zero) to DT Valid |          | 12           | ns     |

<!-- image -->

## ADSP-2185M

| Parameter            | Parameter                                           | Min   | Max   | Unit   |
|----------------------|-----------------------------------------------------|-------|-------|--------|
| IDMA Address Latch   | IDMA Address Latch                                  |       |       |        |
| Timing Requirements: | Timing Requirements:                                |       |       |        |
| t IALP               | Duration of Address Latch 1, 2                      | 10    |       | ns     |
| t IASU               | IAD15-0 Address Setup before Address Latch End 2    | 5     |       | ns     |
| t IAH                | IAD15-0 Address Hold after Address Latch End 2      | 3     |       | ns     |
| t IKA                | IACK Low before Start of Address Latch 2, 3         | 0     |       | ns     |
| t IALS               | Start of Write or Read after Address Latch End 2, 3 | 3     |       | ns     |
| t IALD               | Address Latch Start after Address Latch End 1, 2    | 2     |       | ns     |

## NOTES

1 Start of Address Latch = IS Low and IAL High.

2 End of Address Latch = IS High or IAL Low.

3 Start of Write or Read = IS Low and IWR Low or IRD Low.

Figure 27. IDMA Address Latch

<!-- image -->

## ADSP-2185M

| Parameter                     | Min                                 | Max   | Unit   |
|-------------------------------|-------------------------------------|-------|--------|
| IDMA Write, Short Write Cycle |                                     |       |        |
| Timing Requirements:          |                                     |       |        |
| t IKW                         | IACK Low before Start of Write 1 0  |       | ns     |
| t IWP Duration of Write       | 1, 2 10                             |       | ns     |
| t IDSU IAD15-0 Data           | Setup before End of Write 2, 3, 4 3 |       | ns     |
| t IDH IAD15-0 Data            | Hold after End of Write 2, 3, 4 2   |       | ns     |
| Switching                     | Characteristic :                    |       |        |
| t IKHW                        | Start of Write to IACK High         | 10    | ns     |

## NOTES

1 Start of Write = IS Low and IWR Low.

2 End of Write =

IS High or IWR High.

3 If Write Pulse ends before IACK Low, use specifications t IDSU, t IDH.

4 If Write Pulse ends after IACK Low, use specifications t IKSU, t IKH.

Figure 28. IDMA Write, Short Write Cycle

<!-- image -->

## ADSP-2185M

| Parameter                    | Min                                        | Max   | Unit   |
|------------------------------|--------------------------------------------|-------|--------|
| IDMA Write, Long Write Cycle |                                            |       |        |
| Timing                       | Requirements:                              |       |        |
| t IKW                        | IACK Low before Start of Write 1 0         |       | ns     |
| t IKSU IAD15-0 Data          | Setup before End of Write 2, 3, 4 0.5 t CK |       | ns     |
| t IKH IAD15-0 Data           | Hold after End of Write 2, 3, 4 0          |       | ns     |
| Switching                    | Characteristics :                          |       |        |
| t IKLW                       | Start of Write to IACK Low 4 1.5 t CK      |       | ns     |
| t IKHW                       | Start of Write to IACK High                | 10    | ns     |

## NOTES

1 Start of Write = IS Low and IWR Low.

2 If Write Pulse ends before IACK Low, use specifications tIDSU, tIDH.

3 If Write Pulse ends after IACK Low, use specifications tIKSU, tIKH.

4 This is the earliest time for IACK Low from Start of Write. For IDMA Write cycle relationships, please refer to the ADSP-2100 Family User's Manual .

Figure 29. IDMA Write, Long Write Cycle

<!-- image -->

## ADSP-2185M

| Parameter                  |                                                           | Min         | Max   | Unit   |
|----------------------------|-----------------------------------------------------------|-------------|-------|--------|
| IDMA Read, Long Read Cycle | IDMA Read, Long Read Cycle                                |             |       |        |
| Timing Requirements:       | Timing Requirements:                                      |             |       |        |
| t IKR                      | IACK Low before Start of Read 1                           | 0           |       | ns     |
| t IRK                      | End of read after IACK Low 2                              | 2           |       | ns     |
| Switching Characteristics: | Switching Characteristics:                                |             |       |        |
| t IKHR                     | IACK High after Start of Read 1                           |             | 10    | ns     |
| t IKDS                     | IAD15-0 Data Setup before IACK Low                        | 0.5t CK - 2 |       | ns     |
| t IKDH                     | IAD15-0 Data Hold after End of Read 2                     | 0           |       | ns     |
| t IKDD                     | IAD15-0 Data Disabled after End of Read 2                 |             | 10    | ns     |
| t IRDE                     | IAD15-0 Previous Data Enabled after Start of Read         | 0           |       | ns     |
| t IRDV                     | IAD15-0 Previous Data Valid after Start of Read           |             | 11    | ns     |
| t IRDH1                    | IAD15-0 Previous Data Hold after Start of Read (DM/PM1) 3 | 2t CK - 5   |       | ns     |
| t IRDH2                    | IAD15-0 Previous Data Hold after Start of Read (PM2) 4    | t CK - 5    |       | ns     |

## NOTES

1 Start of Read = IS Low and IRD Low.

2 End of Read = IS High or IRD High.

3 DM read or first half of PM read.

4 Second half of PM read.

Figure 30. IDMA Read, Long Read Cycle

<!-- image -->

Figure 31. IDMA Read, Short Read Cycle

<!-- image -->

## ADSP-2185M

| Parameter                        | Min                                               | Max          | Unit   |
|----------------------------------|---------------------------------------------------|--------------|--------|
| IDMA Read, Short Read Cycle 1, 2 |                                                   |              |        |
| Timing Requirements:             |                                                   |              |        |
| t IKR                            | IACK Low before Start of Read 3                   | 0            | ns     |
| t IRP1                           | Duration of Read (DM/PM1) 4                       | 10 2t CK - 5 | ns     |
| t IRP2                           | Duration of Read (PM2) 5                          | 10 t CK - 5  | ns     |
| Switching Characteristics        | :                                                 |              |        |
| t IKHR                           | IACK High after Start of Read 3                   | 10           | ns     |
| t IKDH                           | IAD15-0 Data Hold after End of Read 6             | 0            | ns     |
| t IKDD                           | IAD15-0 Data Disabled after End of Read 6         | 10           | ns     |
| t IRDE                           | IAD15-0 Previous Data Enabled after Start of Read | 0            | ns     |
| t IRDV                           | IAD15-0 Previous Data Valid after Start of Read   | 10           | ns     |

## NOTES

1 Short Read Only must be disabled in the IDMA Overlay memory mapped register.

2 Consider using the Short Read Only mode, instead, because Short Read mode is not applicable at high clock frequencies.

3 Start of Read = IS Low and IRD Low.

4 DM Read or first half of PM Read.

5 Second half of PM Read.

6 End of Read = IS High or IRD High.

## ADSP-2185M

| Parameter                                                                | Min                                                 | Max   | Unit   |
|--------------------------------------------------------------------------|-----------------------------------------------------|-------|--------|
| IDMA Read, Short Read Cycle in Short Read Only Mode Timing Requirements: | 1                                                   |       |        |
| t IKR                                                                    | IACK Low before Start of Read 2 0                   |       | ns     |
| t IRP Duration of Read 3                                                 | 10                                                  |       | ns     |
| Switching Characteristics:                                               |                                                     |       |        |
| t IKHR                                                                   | IACK High after Start of Read 2                     | 10    | ns     |
| t IKDH                                                                   | IAD15-0 Previous Data Hold after End of Read 3 0    |       | ns     |
| t IKDD                                                                   | IAD15-0 Previous Data Disabled after End of Read 3  | 10    | ns     |
| t IRDE                                                                   | IAD15-0 Previous Data Enabled after Start of Read 0 |       | ns     |
| t IRDV                                                                   | IAD15-0 Previous Data Valid after Start of Read     | 10    | ns     |

## NOTES

1 Short Read Only is enabled by setting Bit 14 of the IDMA Overlay Register to 1 (0x3FE7). Short Read Only can be enabled by the processor core writing to the register or by an external host writing to the register. Disabled by default.

2 Start of Read = IS Low and IRD Low. Previous data remains until end of read.

3 End of Read = IS High or IRD High.

Figure 32. IDMA Read, Short Read Only Cycle

<!-- image -->

## ADSP-2185M

## 100-LEAD LQFP PIN CONFIGURATION

<!-- image -->

## ADSP-2185M

The LQFP package pinout is shown in the table below. Pin names in bold text replace the plain text named functions when Mode C = 1. A + sign separates two functions when either function can be active for either major I/O mode. Signals enclosed in brackets [ ] are state bits latched from the value of the pin at the deassertion of RESET .

The multiplexed pins DT1/FO, TFS1/ IRQ1 , RFS1/ IRQ0 , and DR1/FI, are mode selectable by setting Bit 10 (SPORT1 configure) of the System Control Register. If Bit 10 = 1, these pins have serial port functionality. If Bit 10 = 0, these pins are the external interrupt and flag pins. This bit is set to 1 by default upon reset.

LQFP Package Pinout

|   Pin No. | Pin Name   |   Pin No. | Pin Name    |   Pin No. | Pin Name   |   Pin No. | Pin Name     |
|-----------|------------|-----------|-------------|-----------|------------|-----------|--------------|
|         1 | A4/ IAD3   |        26 | IRQE + PF4  |        51 | EBR        |        76 | D16          |
|         2 | A5/ IAD4   |        27 | IRQL0 + PF5 |        52 | BR         |        77 | D17          |
|         3 | GND        |        28 | GND         |        53 | EBG        |        78 | D18          |
|         4 | A6 /IAD5   |        29 | IRQL1 + PF6 |        54 | BG         |        79 | D19          |
|         5 | A7/ IAD6   |        30 | IRQ2 + PF7  |        55 | D0/ IAD13  |        80 | GND          |
|         6 | A8/ IAD7   |        31 | DT0         |        56 | D1/ IAD14  |        81 | D20          |
|         7 | A9/ IAD8   |        32 | TFS0        |        57 | D2/ IAD15  |        82 | D21          |
|         8 | A10/ IAD9  |        33 | RFS0        |        58 | D3/ IACK   |        83 | D22          |
|         9 | A11/ IAD10 |        34 | DR0         |        59 | V DDINT    |        84 | D23          |
|        10 | A12/ IAD11 |        35 | SCLK0       |        60 | GND        |        85 | FL2          |
|        11 | A13/ IAD12 |        36 | V DDEXT     |        61 | D4/ IS     |        86 | FL1          |
|        12 | GND        |        37 | DT1/FO      |        62 | D5/ IAL    |        87 | FL0          |
|        13 | CLKIN      |        38 | TFS1/ IRQ1  |        63 | D6/ IRD    |        88 | PF3 [MODE D] |
|        14 | XTAL       |        39 | RFS1/ IRQ0  |        64 | D7/ IWR    |        89 | PF2 [MODE C] |
|        15 | V DDEXT    |        40 | DR1/FI      |        65 | D8         |        90 | V DDEXT      |
|        16 | CLKOUT     |        41 | GND         |        66 | GND        |        91 | PWD          |
|        17 | GND        |        42 | SCLK1       |        67 | V DDEXT    |        92 | GND          |
|        18 | V DDINT    |        43 | ERESET      |        68 | D9         |        93 | PF1 [MODE B] |
|        19 | WR         |        44 | RESET       |        69 | D10        |        94 | PF0 [MODE A] |
|        20 | RD         |        45 | EMS         |        70 | D11        |        95 | BGH          |
|        21 | BMS        |        46 | EE          |        71 | GND        |        96 | PWDACK       |
|        22 | DMS        |        47 | ECLK        |        72 | D12        |        97 | A0           |
|        23 | PMS        |        48 | ELOUT       |        73 | D13        |        98 | A1/ IAD0     |
|        24 | IOMS       |        49 | ELIN        |        74 | D14        |        99 | A2/ IAD1     |
|        25 | CMS        |        50 | EINT        |        75 | D15        |       100 | A3/ IAD2     |

## 144-Ball Mini-BGA Package Pinout (Bottom View)

| 12      | 11      | 10       | 9        | 8          | 7            | 6            | 5            | 4         | 3           | 2          | 1           |    |
|---------|---------|----------|----------|------------|--------------|--------------|--------------|-----------|-------------|------------|-------------|----|
| GND     | GND     | D22      | NC       | NC         | NC           | GND          | NC           | A0        | GND         | A1/IAD0    | A2/IAD1     | A  |
| D16     | D17     | D18      | D20      | D23        | V DDEXT      | GND          | NC           | NC        | GND         | A3/IAD2    | A4/IAD3     | B  |
| D14     | NC      | D15      | D19      | D21        | V DDEXT      | PWD          | A7/IAD6      | A5/IAD4   | RD          | A6/IAD5    | PWDACK      | C  |
| GND     | NC      | D12      | D13      | NC         | PF2 [MODE C] | PF1 [MODE B] | A9/IAD8      | BGH       | NC          | WR         | NC          | D  |
| D10     | GND     | V DDEXT  | GND      | GND        | PF3 [MODE D] | FL2          | PF0 [MODE A] | FL0       | A8/IAD7     | V DDEXT    | V DDEXT     | E  |
| D9      | NC      | D8       | D11      | D7/ IWR    | NC           | NC           | FL1          | A11/IAD10 | A12/IAD11   | NC         | A13/IAD12   | F  |
| D4/ IS  | NC      | NC       | D5/IAL   | D6/ IRD    | NC           | NC           | NC           | A10/IAD9  | GND         | NC         | XTAL        | G  |
| GND     | NC      | GND      | D3/ IACK | D2/IAD15   | TFS0         | DT0          | V DDINT      | GND       | GND         | GND        | CLKIN       | H  |
| V DDINT | V DDINT | D1/IAD14 | BG       | RFS1/ IRQ0 | D0/IAD13     | SCLK0        | V DDEXT      | V DDEXT   | NC          | V DDINT    | CLKOUT      | J  |
| EBG     | BR      | EBR      | ERESET   | SCLK1      | TFS1/ IRQ1   | RFS0         | DMS          | BMS       | NC          | NC         | NC          | K  |
| EINT    | ELOUT   | ELIN     | RESET    | GND        | DR0          | PMS          | GND          | IOMS      | IRQL1 + PF6 | NC         | IRQE + PF4  | L  |
| ECLK    | EE      | EMS      | NC       | GND        | DR1/FI       | DT1/FO       | GND          | CMS       | NC          | IRQ2 + PF7 | IRQL0 + PF5 | M  |

## ADSP-2185M

## ADSP-2185M

The Mini-BGA package pinout is shown in the table below. Pin names in bold text replace the plain text named functions when Mode C = 1. A + sign separates two functions when either function can be active for either major I/O mode. Signals enclosed in brackets [  ] are state bits latched from the value of the pin at the deassertion of RESET .

The multiplexed pins DT1/FO, TFS1/ IRQ1 , RFS1/ IRQ0 , and DR1/FI, are mode selectable by setting Bit 10 (SPORT1 configure) of the System Control Register. If Bit 10 = 1, these pins have serial port functionality. If Bit 10 = 0, these pins are the external interrupt and flag pins. This bit is set to 1 by default upon reset.

## Mini-BGA Package Pinout

| Ball #   | Pin Name   | Ball #   | Pin Name     | Ball #   | Pin Name   | Ball #   | Pin Name    |
|----------|------------|----------|--------------|----------|------------|----------|-------------|
| A01      | A2/ IAD1   | D01      | NC           | G01      | XTAL       | K01      | NC          |
| A02      | A1/ IAD0   | D02      | WR           | G02      | NC         | K02      | NC          |
| A03      | GND        | D03      | NC           | G03      | GND        | K03      | NC          |
| A04      | A0         | D04      | BGH          | G04      | A10/ IAD9  | K04      | BMS         |
| A05      | NC         | D05      | A9/ IAD8     | G05      | NC         | K05      | DMS         |
| A06      | GND        | D06      | PF1 [MODE B] | G06      | NC         | K06      | RFS0        |
| A07      | NC         | D07      | PF2 [MODE C] | G07      | NC         | K07      | TFS1/ IRQ1  |
| A08      | NC         | D08      | NC           | G08      | D6/ IRD    | K08      | SCLK1       |
| A09      | NC         | D09      | D13          | G09      | D5/ IAL    | K09      | ERESET      |
| A10      | D22        | D10      | D12          | G10      | NC         | K10      | EBR         |
| A11      | GND        | D11      | NC           | G11      | NC         | K11      | BR          |
| A12      | GND        | D12      | GND          | G12      | D4/ IS     | K12      | EBG         |
| B01      | A4/ IAD3   | E01      | V DDEXT      | H01      | CLKIN      | L01      | IRQE + PF4  |
| B02      | A3/ IAD2   | E02      | V DDEXT      | H02      | GND        | L02      | NC          |
| B03      | GND        | E03      | A8/ IAD7     | H03      | GND        | L03      | IRQL1 + PF6 |
| B04      | NC         | E04      | FL0          | H04      | GND        | L04      | IOMS        |
| B05      | NC         | E05      | PF0 [MODE A] | H05      | V DDINT    | L05      | GND         |
| B06      | GND        | E06      | FL2          | H06      | DT0        | L06      | PMS         |
| B07      | V DDEXT    | E07      | PF3 [MODE D] | H07      | TFS0       | L07      | DR0         |
| B08      | D23        | E08      | GND          | H08      | D2/ IAD15  | L08      | GND         |
| B09      | D20        | E09      | GND          | H09      | D3/ IACK   | L09      | RESET       |
| B10      | D18        | E10      | V DDEXT      | H10      | GND        | L10      | ELIN        |
| B11      | D17        | E11      | GND          | H11      | NC         | L11      | ELOUT       |
| B12      | D16        | E12      | D10          | H12      | GND        | L12      | EINT        |
| C01      | PWDACK     | F01      | A13/ IAD12   | J01      | CLKOUT     | M01      | IRQL0 + PF5 |
| C02      | A6/ IAD5   | F02      | NC           | J02      | V DDINT    | M02      | IRQL2 + PF7 |
| C03      | RD         | F03      | A12/ IAD11   | J03      | NC         | M03      | NC          |
| C04      | A5/ IAD4   | F04      | A11/ IAD10   | J04      | V DDEXT    | M04      | CMS         |
| C05      | A7/ IAD6   | F05      | FL1          | J05      | V DDEXT    | M05      | GND         |
| C06      | PWD        | F06      | NC           | J06      | SCLK0      | M06      | DT1/FO      |
| C07      | V DDEXT    | F07      | NC           | J07      | D0/ IAD13  | M07      | DR1/FI      |
| C08      | D21        | F08      | D7/ IWR      | J08      | RFS1/ IRQ0 | M08      | GND         |
| C09      | D19        | F09      | D11          | J09      | BG         | M09      | NC          |
| C10      | D15        | F10      | D8           | J10      | D1/ IAD14  | M10      | EMS         |
| C11      | NC         | F11      | NC           | J11      | V DDINT    | M11      | EE          |
| C12      | D14        | F12      | D9           | J12      | V DDINT    | M12      | ECLK        |

## OUTLINE DIMENSIONS

Dimensions shown in millimeters.

## 100-Lead Metric Thin Plastic Quad Flatpack (LQFP) (ST-100)

NOTE:

<!-- image -->

THE ACTUAL POSITION OF EACH LEAD IS WITHIN 0.08 FROM ITS IDEAL POSITION WHEN MEASURED IN THE LATERAL DIRECTION.

## ADSP-2185M

## OUTLINE DIMENSIONS

Dimensions shown in millimeters.

144-Ball Mini-BGA (CA-144)

<!-- image -->

## NOTES:

- THE ACTUAL POSITION OF THE BALL POPULATION IS WITHIN 0.150 OF ITS IDEAL POSITION RELATIVE TO THE PACKAGE EDGES. 1.
- THE ACTUAL POSITION OF EACH BALL IS WITHIN 0.08 OF ITS IDEAL POSITION RELATIVE TO THE BALL POPULATION. 2.

<!-- image -->

## ORDERING GUIDE

| Part Number       | Ambient Temperature Range   |   Instruction Rate | Package Description *   | Package Option   |
|-------------------|-----------------------------|--------------------|-------------------------|------------------|
| ADSP-2185MKST-300 | 0 ° C to 70 ° C             |                 75 | 100-Lead LQFP           | ST-100           |
| ADSP-2185MBST-266 | -40 ° C to +85 ° C          |                 66 | 100-Lead LQFP           | ST-100           |
| ADSP-2185MKCA-300 | 0 ° C to 70 ° C             |                 75 | 144-Ball Mini-BGA       | CA-144           |
| ADSP-2185MBCA-266 | -40 ° C to +85 ° C          |                 66 | 144-Ball Mini-BGA       | CA-144           |