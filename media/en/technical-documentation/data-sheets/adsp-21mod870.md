<!-- lastmod 2025-09-05 -->
<!-- image -->

## FEATURES

## PERFORMANCE

Complete Single-Chip Internet Gateway Processor (No External Memory Required)

Implements V.34/V.90 Data/FAX Modem Including Controller and Datapump

19 ns Instruction Cycle Time @ 3.3 V, 52 MIPS Sustained Performance

Open Architecture Platform Extensible to Voice Over IP and Other Applications

Low Power Dissipation, 80 mW (Typical) for Digital Modem

Power-Down Mode Featuring Low CMOS Standby Power Dissipation

## INTEGRATION

ADSP-2100 Family Code Compatible, with Instruction Set Extensions

160K Bytes of On-Chip RAM, Configured as 32K Words On-Chip Program Memory RAM and 32K Words OnChip Data Memory RAM

Dual Purpose Program Memory for Both Instruction and Data Storage

Independent ALU, Multiplier/Accumulator and Barrel Shifter Computational Units

Two Independent Data Address Generators

Powerful Program Sequencer Provides Zero Overhead Looping Conditional Instruction Execution

Programmable 16-Bit Interval Timer with Prescaler 100-Lead LQFP with 0.4 Square Inch (256 mm 2 ) Footprint

## SYSTEM INTERFACE

- 16-Bit Internal DMA Port for High Speed Access to OnChip Memory (Mode Selectable)
- Two Double-Buffered Serial Ports with Companding Hardware and Automatic Data Buffering

Programmable Multichannel Serial Port Supports 24/32 Channels

Automatic Booting of On-Chip Program Memory Through Internal DMA Port

Six External Interrupts

- 13 Programmable Flag Pins Provide Flexible System Signaling

ICE-Port™ Emulator Interface Supports Debugging in Final Systems

ICE-Port is a trademark of Analog Devices, Inc. All other trademarks are the property of their respective holders .

## REV. 0

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties which may result from its use. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices.

## Internet Gateway Processor

## ADSP-21mod870

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

## GENERAL DESCRIPTION

The ADSP-21mod870 is a single-chip Internet gateway processor optimized for implementation of a complete V.34/56K modem. All data pump and controller functions can be implemented on a single chip, offering the lowest power consumption and highest possible modem port density.

The ADSP-21mod870, shown in the Functional Block Diagram, combines the ADSP-2100 family base architecture (three computational units, data address generators and a program sequencer) with two serial ports, a 16-bit internal DMA port, a byte DMA port, a programmable timer, Flag I/O, extensive interrupt capabilities and on-chip program and data memory.

The ADSP-21mod870 integrates 160K bytes of on-chip memory configured as 32K words (24-bit) of program RAM, and 32K words (16-bit) of data RAM. Power-down circuitry is also provided to meet the low power needs of battery operated portable equipment. The ADSP-21mod870 is available in 100-lead LQFP package.

Fabricated in a high speed, low power, CMOS process, the ADSP-21mod870 operates with a 19 ns instruction cycle time. Every instruction can execute in a single processor cycle.

The ADSP-21mod870's flexible architecture and comprehensive instruction set allow the processor to perform multiple operations in parallel. In one processor cycle the ADSP-21mod870 can:

- Generate the next program address
- Fetch the next instruction
- Perform one or two data moves
- Update one or two data address pointers
- Perform a computational operation

## ADSP-21mod870

This takes place while the processor continues to:

- Receive and transmit data through the two serial ports
- Receive and/or transmit data through the internal DMA port
- Receive and/or transmit data through the byte DMA port
- Decrement timer

## Modem Software

The modem software executes general modem control, command sets, error correction and data compression, data modulations (for example, V.90 and V.34), and host interface functions. The host interface allows system access to modem statistics such as call progress, connect speed, retrain count, symbol rate and other modulation parameters.

The modem data pump and controller software reside in onchip SRAM and do not require external memory. You can configure the ADSP-21mod870 dynamically by downloading software from the host through the 16-bit DMA interface. This SRAM-based architecture provides a software upgrade path to future standards and applications, such as voice over IP.

The modem software is available as object code.

## DEVELOPMENT SYSTEM

The ADSP-2100 Family Development Software, a complete set of tools for software and hardware system development, supports the ADSP-21mod870. The System Builder provides a high level method for defining the architecture of systems under development. The Assembler has an algebraic syntax that is easy to program and debug. The Linker combines object files into an executable file. The Simulator provides an interactive instruction-level simulation with a reconfigurable user interface to display different portions of the hardware environment.

A PROM Splitter generates PROM programmer compatible files. The C Compiler, based on the Free Software Foundation's GNU C Compiler, generates ADSP-21mod870 assembly source code. The source code debugger allows programs to be corrected in the C environment. The Runtime Library includes over 100 ANSI-standard mathematical and DSP-specific functions.

The ADSP-218x EZ-ICE ®  Emulator aids in the hardware debugging of an ADSP-21mod870 system. The emulator consists of hardware, host computer resident software, and the target board connector. The ADSP-21mod870 integrates on-chip emulation support with a 14-pin ICE-Port interface. This interface provides a simpler target board connection that requires fewer mechanical clearance considerations than other ADSP-2100 Family EZ-ICEs. The ADSP-21mod870 device need not be removed from the target system when using the EZICE, nor are any adapters needed. Due to the small footprint of the EZ-ICE connector, emulation can be supported in final board designs.

The EZ-ICE performs a full range of functions, including:

- In-target operation
- Up to 20 breakpoints
- Single-step or full speed operation
- Registers and memory values can be examined and altered
- PC upload and download functions
- Instruction-level emulation of program booting and execution
- Complete assembly and disassembly of instructions
- C source-level debugging

See Designing An EZ-ICE-Compatible Target System in the ADSP-2100 Family EZ-Tools Manual (ADSP-2181 sections) as well as the Designing an EZ-ICE Compatible System section of this data sheet for the exact specifications of the EZ-ICE target board connector.

## ADSP-21mod870 Reference Design/Evaluation Kit

The ADSP-21mod870-EV1 is a reference design/evaluation kit that includes an ISA bus PC card that has an ADSP-21061L SHARC ®  processor as a host, four ADSP-21mod870 Internet gateway processors and a T1 interface. The board is shipped with an evaluation copy of the modem software and software that runs on the PC. The PC software provides a user interface that lets you run a modem session 'right out of the box.' When you run the modem in keyboard mode, characters typed on the keyboard are transmitted to the other modem and characters sent by the other modem are displayed on the screen. Data can also be streamed through the COM port of the PC to send and receive files and perform automated testing.

The modem system contains four ADSP-21mod870s connected to an ADSP-21061 SHARC host processor. This design is extensible to 32 ADSP-21mod870s. The ADSP-21mod870s are connected to a T1 interface. This accommodates testing with a digital line. A diagram of the system is shown below in Figure 1.

The SHARC processor communicates to the PC through the ISA bus. The SHARC acts as the modem system host and controls the ADSP-21mod870-based modems connected to a DMA bus. The code, written in C, runs on the SHARC and provides an example of how the host loads code into the ADSP-21mod870s, how data is passed, and how commands and status information are communicated. You can port this C code to whatever host processor you are using in your system. The SHARC also controls an ADSP-2181 connected to the DMA bus. The ADSP-2181 controls the T1 interface. The PCM serial stream from the T1 interface is connected to the serial ports of the ADSP-21mod870s.

Figure 1. Evaluation/Reference Design Board

<!-- image -->

A debugger is provided that lets you download code and data to the SHARC and examine register and memory contents. Monitor software is also included so you can run a modem session immediately 'out of the box' without writing extra layers of software or adding to the configuration.

## Additional Information

This data sheet provides a general overview of ADSP-21mod870 functionality. For additional information on the architecture and instruction set of the processor, refer to the ADSP-2100 Family User's Manual, Third Edition . For more information about the development tools, refer to the ADSP-2100 Family Development Tools data sheet.

For more information about the modem software refer to ADSP-21mod870-100 Modem Software data sheet.

## ARCHITECTURE OVERVIEW

The ADSP-21mod870 instruction set provides flexible data moves and multifunction (one or two data moves with a computation) instructions. Every instruction can be executed in a single processor cycle. The ADSP-21mod870 assembly language uses an algebraic syntax for ease of coding and readability. A comprehensive set of development tools supports program development.

Figure 2. Functional Block Diagram

<!-- image -->

Figure 2 is an overall block diagram of the ADSP-21mod870. The processor contains three independent computational units: the ALU, the multiplier/accumulator (MAC) and the shifter. The computational units process 16-bit data directly and have provisions to support multiprecision computations. The ALU performs a standard set of arithmetic and logic operations; division primitives are also supported. The MAC performs single-cycle multiply, multiply/add and multiply/subtract operations with 40 bits of accumulation. The shifter performs logical and arithmetic shifts, normalization, denormalization and derive exponent operations.

The shifter can be used to efficiently implement numeric format control including multiword and block floating-point representations.

## ADSP-21mod870

The internal result (R) bus connects the computational units so that the output of any unit may be the input of any unit on the next cycle.

A powerful program sequencer and two dedicated data address generators ensure efficient delivery of operands to these computational units. The sequencer supports conditional jumps, subroutine calls and returns in a single cycle. With internal loop counters and loop stacks, the ADSP-21mod870 executes looped code with zero overhead; no explicit jump instructions are required to maintain loops.

Two data address generators (DAGs) provide addresses for simultaneous dual operand fetches (from data memory and program memory). Each DAG maintains and updates four address pointers. Whenever the pointer is used to access data (indirect addressing), it is post-modified by the value of one of four possible modify registers. A length value may be associated with each pointer to implement automatic modulo addressing for circular buffers.

Efficient data transfer is achieved with the use of five internal buses:

- Program Memory Address (PMA) Bus
- Program Memory Data (PMD) Bus
- Data Memory Address (DMA) Bus
- Data Memory Data (DMD) Bus
- Result (R) Bus

The two address buses (PMA and DMA) share a single external address bus, allowing memory to be expanded off-chip, and the two data buses (PMD and DMD) share a single external data bus. Byte and I/O memory space also share the external buses.

Program memory can store both instructions and data, permitting the ADSP-21mod870 to fetch two operands in a single cycle, one from program memory and one from data memory. The ADSP-21mod870 can fetch an operand from program memory and the next instruction in the same cycle.

In lieu of the address and data bus for external memory connection, the ADSP-21mod870 may be configured for 16-bit Internal DMA port (IDMA port) connection to external systems. The IDMA port is made up of 16 data/address pins and five control pins. The IDMA port provides transparent, direct access to the DSPs on-chip program and data RAM.

An interface to low cost byte-wide memory is provided by the Byte DMA port (BDMA port). The BDMA port is bidirectional and can directly address up to four megabytes of external RAM or ROM for off-chip storage of program overlays or data tables.

The byte memory and I/O memory space interface supports slow memories and I/O memory-mapped peripherals with programmable wait state generation. External devices can gain control of external buses with bus request/grant signals ( BR , BGH , and BG ). One execution mode (Go Mode) allows the ADSP-21mod870 to continue running from on-chip memory. Normal execution mode requires the processor to halt while buses are granted.

The ADSP-21mod870 can respond to eleven interrupts. There can be up to six external interrupts (one edge-sensitive, two level-sensitive, and three configurable) and seven internal interrupts generated by the timer, the serial ports (SPORTs), the Byte DMA port, and the power-down circuitry. There is also a master RESET signal. The two serial ports provide a complete

## ADSP-21mod870

synchronous serial interface with optional companding in hardware and a wide variety of framed or frameless data transmit and receive modes of operation.

Each port can generate an internal programmable serial clock or accept an external serial clock.

The ADSP-21mod870 provides up to 13 general-purpose flag pins. The data input and output pins on SPORT1 can be alternatively configured as an input flag and an output flag. In addition, there are eight flags that are programmable as inputs or outputs, and three flags that are always outputs.

A programmable interval timer generates periodic interrupts. A 16-bit count register (TCOUNT) decrements every n processor cycles, where n is a scaling value stored in an 8-bit register (TSCALE). When the value of the count register reaches zero, an interrupt is generated and the count register is reloaded from a 16-bit period register (TPERIOD).

## Serial Ports

The ADSP-21mod870 incorporates two complete synchronous serial ports (SPORT0 and SPORT1) for serial communications and multiprocessor communication.

Here is a brief list of the capabilities of the ADSP-21mod870 SPORTs. For additional information on Serial Ports, refer to the ADSP-2100 Family User's Manual, Third Edition .

- SPORTs are bidirectional and have a separate, doublebuffered transmit and receive section.
- SPORTs can use an external serial clock or generate their own serial clock internally.
- SPORTs have independent framing for the receive and transmit sections. Sections run in a frameless mode or with frame synchronization signals internally or externally generated. Frame sync signals are active high or inverted, with either of two pulsewidths and timings.
- SPORTs support serial data word lengths from 3 to 16 bits and provide optional A-law and m -law companding according to CCITT recommendation G.711.
- SPORT receive and transmit sections can generate unique interrupts on completing a data word transfer.
- SPORTs can receive and transmit an entire circular buffer of data with one overhead cycle per data word. An interrupt is generated after a data buffer transfer.
- SPORT0 has a multichannel interface to selectively receive and transmit a 24 or 32 word, time-division multiplexed, serial bitstream.
- SPORT1 can be configured to have two external interrupts ( IRQ0 and IRQ1 ) and the Flag In and Flag Out signals. The internally generated serial clock may still be used in this configuration.

## PIN DESCRIPTIONS

The ADSP-21mod870 is available in a 100-lead LQFP package. To maintain maximum functionality and reduce package size and pin count, some serial port, programmable flag, interrupt, and external bus pins have dual, multiplexed functionality. The external bus pins are configured during RESET, while serial port pins are software configurable during program execution. Flag and interrupt functionality is retained concurrently on multiplexed pins. The following table  shows the common-mode pins. When pin functionality is configurable, the default state is shown in plain text, alternate functionality is in italics.

## Common-Mode Pins

| Pin Name(s)              | # of Pins                | Input/ Out- put   | Function                                               |
|--------------------------|--------------------------|-------------------|--------------------------------------------------------|
| RESET                    | 1                        | I                 | Processor Reset Input                                  |
| BR                       | 1                        | I                 | Bus Request Input                                      |
| BG                       | 1                        | O                 | Bus Grant Output                                       |
| BGH                      | 1                        | O                 | Bus Grant Hung Output                                  |
| DMS                      | 1                        | O                 | Data Memory Select Output                              |
| PMS                      | 1                        | O                 | Program Memory Select Output                           |
| IOMS                     | 1                        | O                 | Memory Select Output                                   |
| BMS                      | 1                        | O                 | Byte Memory Select Output                              |
| CMS                      | 1                        | O                 | Combined Memory Select Output                          |
| RD                       | 1                        | O                 | Memory Read Enable Output                              |
| WR                       | 1                        | O                 | Memory Write Enable Output                             |
| IRQ2/                    | 1                        | I                 | Edge- or Level-Sensitive Interrupt Request 1           |
| PF7                      |                          | I/O               | Programmable I/O Pin                                   |
| IRQL1/                   | 1                        | I                 | Level-Sensitive Interrupt Requests                     |
| PF6                      |                          | I/O               | Programmable I/O Pin                                   |
| IRQL0/                   | 1                        | I                 | Level-Sensitive Interrupt Requests                     |
| PF5 IRQE/ PF4            |                          | I/O I/O           | Programmable I/O Pin 1 Programmable I/O Pin            |
|                          | 1                        | I                 | Edge-Sensitive Interrupt Requests                      |
| Mode D/                  | 1                        | I                 | Mode Select Input-Checked only During RESET            |
| PF3                      |                          | I/O               | Programmable I/O Pin During Normal Operation           |
| Mode C/                  | 1                        | I                 | Mode Select Input-Checked only During RESET            |
| PF2                      |                          | I/O               | Programmable I/O Pin During Normal Operation           |
| Mode B/                  | 1                        | I                 | Mode Select Input-Checked only During RESET            |
| PF1                      |                          | I/O               | Programmable I/O Pin During Normal Operation           |
| Mode A/                  | 1                        | I                 | Mode Select Input-Checked only During RESET            |
| PF0                      |                          | I/O               | Programmable I/O Pin During Normal Operation           |
| CLKIN, XTAL              | 2                        | I                 | Clock or Quartz Crystal Input                          |
| CLKOUT                   | 1                        | O                 | Processor Clock Output                                 |
| SPORT0                   | 5                        | I/O               | Serial Port 0 Pins ( TFS0 , RFS0 , DT0 , DR0 , SCLK0 ) |
| or Interrupts and Flags: | or Interrupts and Flags: |                   |                                                        |
| IRQ0 ( RFS1 )            | 1                        | I                 | External Interrupt Request #0                          |
| IRQ1 ( TFS1 )            | 1                        | I                 | External Interrupt Request #1                          |
| FI ( DR1 )               | 1                        | I                 | Flag Input Pin                                         |
| FO ( DT1 )               | 1                        | O                 | Flag Output Pin                                        |
| PWD                      | 1                        | I                 | Power-Down Control Input                               |
| PWDACK                   | 1                        | O                 | Power-Down Control Output                              |
| FL0, FL1, FL2            |                          | O                 | Output Flags                                           |
| V DD andGND              | 3 16                     | I                 | Power and Ground                                       |
| EZ-Port                  | 9                        | I/O               | For Emulation Use                                      |

NOTES

1 Interrupt/Flag pins retain both functions concurrently. If IMASK is set to enable the corresponding interrupts, the DSP will vector to the appropriate interrupt vector address when the pin is asserted, either by external devices or set as a programmable flag. 2 SPORT configuration determined by the DSP System Control Register. Software configurable.

## Memory Interface Pins

The ADSP-21mod870 processor can be used in one of two modes: Full Memory Mode, which allows BDMA operation with full external overlay memory and I/O capability, or Host Mode, which allows IDMA operation with limited external addressing capabilities. The operating mode is determined by the state of the Mode C pin during RESET and cannot be changed while the processor is running.

## Full Memory Mode Pins (Mode C = 0)

| Pin Name   |   # of Pins | Input/ Output   | Function                                                                                             |
|------------|-------------|-----------------|------------------------------------------------------------------------------------------------------|
| A13:0      |          14 | O               | Address Output Pins for Pro- gram, Data, Byte and I/O Spaces                                         |
| D23:0      |          24 | I/O             | Data I/O Pins for Program, Data, Byte and I/O Spaces (8 MSBs Are Also Used as Byte Memory Addresses) |

## Host Mode Pins (Mode C = 1)

| Pin Name   | # of Pins   | Input/ Output   | Function                                                                               |
|------------|-------------|-----------------|----------------------------------------------------------------------------------------|
| IAD15:0 A0 | 16 1        | I/O O           | IDMA Port Address/Data Bus Address Pin for External I/O, Program, Data, or Byte Access |
| D23:8      | 16          | I/O             | Data I/O Pins for Program, Data Byte and I/O Spaces                                    |
| IWR        | 1           | I               | IDMA Write Enable                                                                      |
| IRD        | 1           | I               | IDMA Read Enable                                                                       |
| IAL        | 1           | I               | IDMA Address Latch Pin                                                                 |
| IS         | 1           | I               | IDMA Select                                                                            |
| IACK       | 1           | O               | IDMA Port Acknowledge Configurable in Mode D; Open Drain                               |

In Host Mode, external peripheral addresses can be decoded using the A0, CMS , PMS , DMS and IOMS signals.

## Terminating Unused Pin

The following table shows the recommendations for terminating unused pins.

## Pin Terminations

| Pin Name                                                            | I/O 3-State (Z)                                               | Reset State                                  | Hi-Z* Caused By                                                   | Unused Configuration                                                                                 |
|---------------------------------------------------------------------|---------------------------------------------------------------|----------------------------------------------|-------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| XTAL CLKOUT A13:1 or IAD12:0 A0 D23:8 D7 or IWR D6 or IRD D5 or IAL | I O O (Z) I/O (Z) O (Z) I/O (Z) I/O (Z) I I/O (Z) I I/O (Z) I | I O Hi-Z Hi-Z Hi-Z Hi-Z Hi-Z I Hi-Z I Hi-Z I | BR , EBR IS BR , EBR BR , EBR BR , EBR BR , EBR BR , EBR BR , EBR | Float Float Float Float Float Float Float High (Inactive) Float High (Inactive) Float Low (Inactive) |

## ADSP-21mod870

| D4 or      | I/O (Z)   | Hi-Z   | BR , EBR   | Float                                                             |
|------------|-----------|--------|------------|-------------------------------------------------------------------|
| IS         | I         | I      |            | High (Inactive)                                                   |
| D3 or      | I/O (Z)   | Hi-Z   | BR , EBR   | Float                                                             |
| IACK       | **        | **     |            | Float                                                             |
| D2:0 or    | I/O (Z)   | Hi-Z   | BR , EBR   | Float                                                             |
| IAD15:13   | I/O (Z)   | Hi-Z   | IS         | Float                                                             |
| PMS        | O (Z)     | O      | BR , EBR   | Float                                                             |
| DMS        | O (Z)     | O      | BR , EBR   | Float                                                             |
| BMS        | O (Z)     | O      | BR , EBR   | Float                                                             |
| IOMS       | O (Z)     | O      | BR , EBR   | Float                                                             |
| CMS        | O (Z)     | O      | BR , EBR   | Float                                                             |
| RD         | O (Z)     | O      | BR , EBR   | Float                                                             |
| WR         | O (Z)     | O      | BR , EBR   | Float                                                             |
| BR         | I         | I      |            | High (Inactive)                                                   |
| BG         | O (Z)     | O      | EE         | Float                                                             |
| BGH        | O (Z)     | O      | EE         | Float                                                             |
| IRQ2 /PF7  | I/O (Z)   | I      |            | Input = High (Inactive) or Program as Output, Set to 1, Let Float |
| IRQL1 /PF6 | I/O (Z)   | I      |            | Input = High (Inactive) or Program as Output, Set to 1, Let Float |
| IRQL0 /PF5 | I/O (Z)   | I      |            | Input = High (Inactive) or Program as Output, Set to 1, Let Float |
| IRQE /PF4  | I/O (Z)   | I      |            | Input = High (Inactive) or Program as Output, Set to 1, Let Float |
| SCLK0      | I/O       | I      |            | Input = High or Low, Output = Float                               |
| RFS0       | I/O       | I      |            | High or Low                                                       |
| DR0        | I         | I      |            | High or Low                                                       |
| TFS0       | I/O       | O      |            | High or Low                                                       |
| DT0        | O         | O      |            | Float                                                             |
| SCLK1      | I/O       | I      |            | Input = High or Low, Output = Float                               |
| RFS1/ IRQ0 | I/O       | I      |            | High or Low                                                       |
| DR1/ FI    | I         | I      |            | High or Low                                                       |
| TFS1/ IRQ1 | I/O       | O      |            | High or Low                                                       |
| DT1/ FO    | O         | O      |            | Float                                                             |
| EE         | I         | I      |            |                                                                   |
| EBR        | I         | I      |            |                                                                   |
| EBG        | O         | O      |            |                                                                   |
| ERESET     | I         | I      |            |                                                                   |
| EMS        | O         | O      |            |                                                                   |
| EINT       | I         | I      |            |                                                                   |
| ECLK       | I         | I      |            |                                                                   |
| ELIN       | I         | I      |            |                                                                   |
| ELOUT      | O         | O      |            |                                                                   |

## NOTES

**Hi-Z = High Impedance.

**Determined by MODE D pin: Mode D = 0 and in host mode: IACK is an active, driven signal and cannot be 'wire ORed.' Mode D = 1 and in host mode: IACK is an open source and requires an external pull-down, but multiple IACK pins can be 'wire ORed' together.

1. If the CLKOUT pin is not used, turn it OFF.

2. If the Interrupt/Programmable Flag pins are not used, there are two options: Option 1: When these pins are configured as INPUTS at reset and function as interrupts and input flag pins, pull the pins High (inactive).

Option 2: Program the unused pins as OUTPUTS, set them to 1, and let them float.

3. All bidirectional pins have three-stated outputs. When the pins is configured as an output, the output is Hi-Z (high impedance).

4. CLKIN, RESET, and PF3:0 are not included in the table because these pins must be used.

## ADSP-21mod870

## Interrupts

The interrupt controller allows the processor to respond to the eleven possible interrupts and reset with minimum overhead. The ADSP-21mod870 provides four dedicated external interrupt input pins, IRQ2 , IRQL0 , IRQL1 , and IRQE (shared with the PF7:4 pins). In addition, SPORT1 may be reconfigured for IRQ0 , IRQ1 , FLAG\_IN and FLAG\_OUT, for a total of six external interrupts. The ADSP-21mod870 also supports internal interrupts from the timer, the byte DMA port, the two serial ports, software and the power-down control circuit. The interrupt levels are internally prioritized and individually maskable (except power down and reset). The IRQ2 , IRQ0 and IRQ1 input pins can be programmed to be either level- or edgesensitive. IRQL0 and IRQL1 are level-sensitive and IRQE is edge-sensitive. The priorities and vector addresses of all interrupts are shown in Table I.

Table I. Interrupt Priority and Interrupt Vector Addresses

| Source of Interrupt                                                                                                                                                                 | Interrupt Vector Address (Hex)                                                                   |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| Reset (or Power-Up with PUCR = 1) Power-Down (Nonmaskable) IRQ2 IRQL1 IRQL0 SPORT0 Transmit SPORT0 Receive IRQE BDMA Interrupt SPORT1 Transmit or IRQ1 SPORT1 Receive or IRQ0 Timer | 0000 (Highest Priority) 002C 0004 0008 000C 0010 0014 0018 001C 0020 0024 0028 (Lowest Priority) |

Interrupt routines can either be nested with higher priority interrupts taking precedence or processed sequentially. Interrupts can be masked or unmasked with the IMASK register. Individual interrupt requests are logically ANDed with the bits in IMASK; the highest priority unmasked interrupt is then selected. The power-down interrupt is nonmaskable.

The ADSP-21mod870 masks all interrupts for one instruction cycle following the execution of an instruction that modifies the IMASK register. This does not affect serial port autobuffering or DMA transfers.

The interrupt control register, ICNTL, controls interrupt nesting and defines the IRQ0 , IRQ1 and IRQ2 external interrupts to be either edge- or level-sensitive. The IRQE pin is an external edge sensitive interrupt and can be forced and cleared. The IRQL0 and IRQL1 pins are external level-sensitive interrupts.

The IFC register is a write-only register used to force and clear interrupts. On-chip stacks preserve the processor status and are automatically maintained during interrupt handling. The stacks are twelve levels deep to allow interrupt, loop, and subroutine nesting. The following instructions allow global enable or disable servicing of the interrupts (including power down), regardless of the state of IMASK. Disabling the interrupts does not affect serial port autobuffering or DMA.

## ENA INTS;

## DIS INTS;

When the processor is reset, interrupt servicing is enabled.

## LOW POWER OPERATION

The ADSP-21mod870 has three low power modes that significantly reduce the power dissipation when the device operates under standby conditions. These modes are:

- Power-Down
- Idle
- Slow Idle

The CLKOUT pin may also be disabled to reduce external power dissipation.

## Power-Down

The ADSP-21mod870 Internet gateway processor has a low power feature that lets the processor enter a very low power dormant state through hardware or software control. Here is a brief list of power-down features. Refer to the ADSP-2100 Family User's Manual, Third Edition , 'System Interface' chapter, for detailed information about the power-down feature.

- Quick recovery from power-down. The processor begins executing instructions in as few as 400 CLKIN cycles.
- Support for an externally generated TTL or CMOS processor clock. The external clock can continue running during powerdown without affecting the lowest power rating and 400 CLKIN cycle recovery.
- Support for crystal operation includes disabling the oscillator to save power (the processor automatically waits approximately 4096 CLKIN cycles for the crystal oscillator to start or stabilize), and letting the oscillator run to allow 400 CLKIN cycle startup.
- Power-down is initiated by either the power-down pin (PWD) or the software power-down force bit. Interrupt support allows an unlimited number of instructions to be executed before optionally powering down. The power-down interrupt also can be used as a nonmaskable, edge-sensitive interrupt.
- Context clear/save control allows the processor to continue where it left off or start with a clean context when leaving the power-down state.
- The RESET pin also can be used to terminate power-down.
- Power-down acknowledge pin indicates when the processor has entered power-down.

## Idle

When the ADSP-21mod870 is in the Idle Mode, the processor waits indefinitely in a low power state until an interrupt occurs. When an unmasked interrupt occurs, it is serviced; execution then continues with the instruction following the IDLE instruction. In Idle Mode IDMA, BDMA and autobuffer cycle steals still occur.

## Slow Idle

The IDLE instruction is enhanced on the ADSP-21mod870 to let the processor's internal clock signal be slowed, further reducing power consumption. The reduced clock frequency, a programmable fraction of the normal clock rate, is specified by a selectable divisor given in the IDLE instruction.

The format of the instruction is

IDLE ( n );

where n = 16, 32, 64 or 128. This instruction keeps the processor fully functional, but operating at the slower clock rate. While it is in this state, the processor's other internal clock signals, such as SCLK, CLKOUT and timer clock, are reduced by the same ratio. The default form of the instruction, when no clock divisor is given, is the standard IDLE instruction.

When the IDLE ( n ) instruction is used, it effectively slows down the processor's internal clock and thus its response time to incoming interrupts. The one-cycle response time of the standard idle state is increased by n, the clock divisor. When an enabled interrupt is received, the ADSP-21mod870 will remain in the idle state for up to a maximum of n processor cycles ( n = 16, 32, 64, or 128) before resuming normal operation.

When the IDLE ( n ) instruction is used in systems that have an externally generated serial clock (SCLK), the serial clock rate may be faster than the processor's reduced internal clock rate. Under these conditions, interrupts must not be generated at a faster rate than can be serviced, due to the additional time the processor takes to come out of the idle state (a maximum of n processor cycles).

## SYSTEM INTERFACE

Figure 3 shows a typical multichannel modem configuration with the ADSP-21mod870. A line interface can be used to connect the multichannel subscriber or client data stream to the multichannel serial port of the ADSP-21mod870. The ADSP21mod870 can support 24 or 32 channels. The IDMA port of the ADSP-21mod870 is used to give a host processor full access to the internal memory of the ADSP-21mod870. This lets the host dynamically configure the ADSP-21mod870 by loading code and data into its internal memory. This configuration also lets the host access server data directly from the ADSP-21mod870's internal memory. In this configuration, the ADSP-21mod870 should be put into host memory mode where Mode C = 1, Mode B = 0 and Mode A = 1 (see Table II).

## CLOCK SIGNALS

The ADSP-21mod870 can be clocked by either a crystal or a TTL-compatible clock signal.

The CLKIN input cannot be halted, changed during operation, or operated below the specified frequency during normal operation. The only exception is while the processor is in the powerdown state. For additional information, refer to Chapter 9, ADSP-2100 Family User's Manual, Third Edition, for detailed information on this power-down feature.

If an external clock is used, it should be a TTL-compatible signal running at half the instruction rate. The signal is connected to the processor's CLKIN input. When an external clock is used, the XTAL input must be left unconnected.

The ADSP-21mod870 uses an input clock with a frequency equal to half the instruction rate; a 26 MHz input clock yields a 19 ns processor cycle (which is equivalent to 52 MHz). Normally, instructions are executed in a single processor cycle. All device timing is relative to the internal instruction clock rate, which is indicated by the CLKOUT signal when enabled.

Because the ADSP-21mod870 includes an on-chip oscillator circuit, an external crystal may be used. The crystal should be connected across the CLKIN and XTAL pins, with two capacitors connected as shown in Figure 4. Capacitor values are dependent on crystal type and should be specified by the crystal manufacturer. A parallel-resonant, fundamental frequency, microprocessor-grade crystal should be used.

A clock output (CLKOUT) signal is generated by the processor at the processor's cycle rate. This is enabled and disabled by the CLKODIS bit in the SPORT0 Autobuffer Control Register.

Figure 3. Network Access System

<!-- image -->

Figure 4. External Crystal Connections

<!-- image -->

## ADSP-21mod870

## ADSP-21mod870

## Reset

The RESET signal initiates a master reset of the ADSP21mod870. The RESET signal must be asserted during the power-up sequence to assure proper initialization. RESET during initial power-up must be held long enough to allow the internal clock to stabilize. If RESET is activated any time after power-up, the clock continues to run and does not require stabilization time.

The power-up sequence is defined as the total time required for the crystal oscillator circuit to stabilize after a valid VDD is applied to the processor, and for the internal phase-locked loop (PLL) to lock onto the specific crystal frequency. A minimum of 2000 CLKIN cycles ensures that the PLL has locked but does not include the crystal oscillator start-up time. During this power-up sequence the RESET signal should be held low. On any subsequent resets, the RESET signal must meet the minimum pulsewidth specification, tRSP.

The RESET input contains some hysteresis; however, if you use an RC circuit to generate your RESET signal, the use of an external Schmidt trigger is recommended.

## MODES OF OPERATION

Table II summarizes the ADSP-21mod870 memory modes.

## Setting Memory Mode

The ADSP-21mod870 uses the Mode C pin to make a Memory Mode selection during chip reset. This pin is multiplexed with the processor's PF2 pin, so exercise care when selecting a mode. The two methods for selecting the value of Mode C are active and passive.

Passive configuration uses a pull-up or pull-down resistor connected to the Mode C pin. To minimize power consumption, or if the PF2 pin is used as an output in the DSP application, use a weak pull-up or pull-down, on the order of 100 k W . This value should be sufficient to pull the pin to the desired level and still let the pin operate as a programmable flag output without undue strain on the processor's output driver. For minimum power consumption during power-down, reconfigure PF2 as an input, as the pull-up or pull-down will hold the pin in a known state, and will not switch.

The master reset sets all internal stack pointers to the empty stack condition, masks all interrupts and clears the MSTAT register. When RESET is released, if there is no pending bus request and the chip is configured for booting, the boot-loading sequence is performed. The first instruction is fetched from on-chip program memory location 0x0000 once boot loading completes.

Active configuration uses a three-statable external driver connected to the Mode C pin. A driver's output enable should be connected to the processor's RESET signal so it only drives the PF2 pin when RESET is active (low). When RESET is de-asserted, the driver should three-state, allowing the PF2 pin to be an input or output. To minimize power consumption during power-down, configure the programmable flag as an output when connected to a three-stated buffer. This ensures that the pin is

## Table II. Modes of Operation 1

| MODED 2   |   MODEC 3 |   MODEB 4 |   MODEA 5 | Booting Method                                                                                                                                                                                                                                                    |
|-----------|-----------|-----------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| X         |         0 |         0 |         0 | BDMA feature is used to load the first 32 program memory words from the byte memory space. Program execution is held off until all 32 words have been loaded. Chip is configured in Full Memory Mode. 6                                                           |
| X         |         0 |         1 |         0 | No automatic boot operations occur. Program execution starts at external memory location 0. Chip is configured in Full Memory Mode. BDMA can still be used but the processor does not automatically use or wait for these operations.                             |
| 0         |         1 |         0 |         0 | BDMA feature is used to load the first 32 program memory words from the byte memory space. Program execution is held off until all 32 words have been loaded. Chip is configured in Host Mode. IACK has active pull-down. (REQUIRES ADDITIONAL HARDWARE).         |
| 0         |         1 |         0 |         1 | IDMA feature is used to load any internal memory as desired. Program ex- ecution is held off until internal program memory location 0 is written to. Chip is configured in Host Mode. 6 IACK has active pull-down.                                                |
| 1         |         1 |         0 |         0 | BDMA feature is used to load the first 32 program memory words from the byte memory space. Program execution is held off until all 32 words have been loaded. Chip is configured in Host Mode; IACK requires external pull- down. (REQUIRES ADDITIONAL HARDWARE). |
| 1         |         1 |         0 |         1 | IDMA feature is used to load any internal memory as desired. Program ex- ecution is held off until internal program memory location 0 is written to. Chip is configured in Host Mode. IACK requires external pull-down. 6                                         |

held at a constant level and will not oscillate if the three-state driver's level hovers around the logic switching point.

## MEMORY ARCHITECTURE

The ADSP-21mod870 provides a variety of memory and peripheral interface options. The key functional groups are Program Memory, Data Memory, Byte Memory and I/O. Refer to the following figures and tables for PM and DM memory allocations in the ADSP-21mod870.

## Program Memory

The Program Memory map is shown in Figure 5.

Program Memory (Full Memory Mode) is a 24-bit space for storing both instruction op codes and data. The ADSP-21mod870 has 32K words of Program Memory RAM on chip, and the capability of accessing up to two 8K external memory overlay spaces using the external data bus.

## ADSP-21mod870

Program Memory (Host Mode) allows access to all internal memory. External overlay access is limited by a single external address line (A0). External program execution is not available in host mode due to a restricted data bus that is 16 bits wide only. The PMOVLAY bits are defined in Table III.

## Table III. PMOVLAY Bits

| PMOVLAY     | Memory                                         | A13                  | A12:0                                                                                                    |
|-------------|------------------------------------------------|----------------------|----------------------------------------------------------------------------------------------------------|
| 0, 4, 5 1 2 | Internal External Overlay 1 External Overlay 2 | Not Applicable 0 1 1 | Not Applicable 13 LSBs of Address Between 0x2000 and 0x3FFF 13 LSBs of Address Between 0x2000 and 0x3FFF |

## Data Memory

The Data Memory map is shown in Figure 6.

Figure 5. Program Memory

<!-- image -->

Figure 6. Data Memory Map

<!-- image -->

## ADSP-21mod870

Data Memory (Full Memory Mode) is a 16-bit-wide space used for the storage of data variables and for memory-mapped control registers. The ADSP-21mod870 has 32K words on Data Memory RAM on chip, consisting of 16,352 user-accessible locations and 32 memory-mapped registers. Support also exists for up to two 8K external memory overlay spaces through the external data bus. All internal accesses complete in one cycle. Accesses to external memory are timed using the wait states specified by the DWAIT register.

Data Memory (Host Mode) allows access to all internal memory. External overlay access is limited by a single external address line (A0). The DMOVLAY bits are defined in Table IV.

Table IV. DMOVLAY Bits

| DMOVLAY     | Memory                                         | A13                | A12:0                                                                                                    |
|-------------|------------------------------------------------|--------------------|----------------------------------------------------------------------------------------------------------|
| 0, 4, 5 1 2 | Internal External Overlay 1 External Overlay 2 | Not Applicable 0 1 | Not Applicable 13 LSBs of Address Between 0x2000 and 0x3FFF 13 LSBs of Address Between 0x2000 and 0x3FFF |

## I/O Space (Full Memory Mode)

The ADSP-21mod870 supports an additional external memory space called I/O space. This space is designed to support simple connections to peripherals (such as data converters and external registers) or to bus interface ASIC data registers. I/O space supports 2048 locations of 16-bit-wide data. The lower eleven bits of the external address bus are used; the upper 3 bits are undefined. Two instructions were added to the core ADSP-2100 Family instruction set to read from and write to I/O memory space. The I/O space also has four dedicated three-bit wait state registers, IOWAIT0-3, which specify up to seven wait states to be automatically generated for each of four regions. The wait states act on address ranges as shown in Table V.

Table V. Wait States

| Address Range                                   | Wait State Register             |
|-------------------------------------------------|---------------------------------|
| 0x000-0x1FF 0x200-0x3FF 0x400-0x5FF 0x600-0x7FF | IOWAIT0 IOWAIT1 IOWAIT2 IOWAIT3 |

## Composite Memory Select ( CMS )

The ADSP-21mod870 has a programmable memory select signal that is useful for generating memory select signals for memories mapped to more than one space. The CMS signal is generated to have the same timing as each of the individual memory select signals ( PMS , DMS , BMS , IOMS ) but can combine their functionality.

Each bit in the CMSSEL register, when set, causes the CMS signal to be asserted when the selected memory select is asserted. For example, to use a 32K word memory to act as both program and data memory, set the PMS and DMS bits in the CMSSEL register and use the CMS pin to drive the chip select of the memory, and use either DMS or PMS as the additional address bit.

The CMS pin functions like the other memory select signals with the same timing and bus request logic. A 1 in the enable bit causes the assertion of the CMS signal at the same time as the selected memory select signal. All enable bits default to 1 at reset, except BMS .

## Boot Memory Select ( BMS ) Disable

The ADSP-21mod870 lets you boot the processor from one external memory space while using a different external memory space for BDMA transfers during normal operation. You can use the CMS to select the first external memory space for BDMA transfers and BMS to select the second external space for booting. The BMS signal can be disabled by setting Bit 3 of the system control register to 1. The system control register is illustrated in Figure 7.

Figure 7. System Control Register

<!-- image -->

## Byte Memory

The byte memory space is a bidirectional, 8-bit-wide, external memory space used to store programs and data. Byte memory is accessed using the BDMA feature. The byte memory space consists of 256 pages, each of which is 16K · 8.

The byte memory space on the ADSP-21mod870 supports read and write operations as well as four different data formats. The byte memory uses data bits 15:8 for data. The byte memory uses data bits 23:16 and address bits 13:0 to create a 22-bit address. This allows up to a 4 meg · 8 (32 megabit) ROM or RAM to be used without glue logic. All byte memory accesses are timed by the BMWAIT register.

## Byte Memory DMA (BDMA, Full Memory Mode)

The byte memory DMA controller allows loading and storing of program instructions and data using the byte memory space. The BDMA circuit is able to access the byte memory space while the processor is operating normally and steals only one processor cycle per 8-, 16- or 24-bit word transferred.

Figure 8. BDMA Control Register

<!-- image -->

The BDMA circuit supports four different data formats which are selected by the BTYPE register field. The appropriate number of 8-bit accesses are done from the byte memory space to build the word size selected. Table VI shows the data formats supported by the BDMA circuit.

Unused bits in the 8-bit data memory formats are filled with 0s. The BIAD register field is used to specify the starting address for the on-chip memory involved with the transfer. The 14-bit BEAD register specifies the starting address for the external byte memory space. The 8-bit BMPAGE register specifies the starting page for the external byte memory space. The BDIR register field selects the direction of the transfer. Finally the, 14-bit BWCOUNT register specifies the number of DSP words to transfer and initiates the BDMA circuit transfers.

Table VI. Data Formats

|   BTYPE | Internal Memory Space   |   Word Size | Alignment   |
|---------|-------------------------|-------------|-------------|
|      00 | Program Memory          |          24 | Full Word   |
|      01 | Data Memory             |          16 | Full Word   |
|      10 | Data Memory             |           8 | MSBs        |
|      11 | Data Memory             |           8 | LSBs        |

BDMA accesses can cross page boundaries during sequential addressing. A BDMA interrupt is generated on the completion of the number of transfers specified by the BWCOUNT register.

The BWCOUNT register is updated after each transfer so it can be used to check the status of the transfers. When it reaches zero, the transfers have finished and a BDMA interrupt is generated. The BMPAGE and BEAD registers must not be accessed by the processor during BDMA operations.

The source or destination of a BDMA transfer will always be on-chip program or data memory.

When the BWCOUNT register is written with a nonzero value, the BDMA circuit starts executing byte memory accesses with wait states set by BMWAIT. These accesses continue until the count reaches zero. When enough accesses have occurred to create a destination word, it is transferred to or from on-chip memory. The transfer takes one processor cycle. Processor accesses to external memory have priority over BDMA byte memory accesses.

The BDMA Context Reset bit (BCR) controls whether the processor is held off while the BDMA accesses are occurring. Setting the BCR bit to 0 allows the processor to continue operations. Setting the BCR bit to 1 causes the processor to stop execution while the BDMA accesses are occurring, to clear the context of the processor, and start execution at address 0 when the BDMA accesses have completed. The BDMA overlay bits specify the OVLAY memory blocks to be accessed for internal memory.

## Internal Memory DMA Port (IDMA Port; Host Memory Mode)

The IDMA Port provides an efficient means of communication between a host system and the ADSP-21mod870. The port is used to access the on-chip program memory and data memory of the processor with only one processor cycle per word overhead. The IDMA port cannot be used, however, to write to the

## ADSP-21mod870

processor's memory-mapped control registers. A typical IDMA transfer process is described as follows:

1. Host starts IDMA transfer.
2. Host checks IACK control line to see if the processor is busy.
3. 3 . Host uses IS and IAL control lines to latch either the DMA starting address (IDMAA) or the PM/DM OVLAY selection into the processor's IDMA control registers.

If IAD[15] = 1, the value of IAD[7:0] represents the IDMA overlay: Bits 14:8 must be set to 0.

If IAD[15] = 0, the value of IAD[13:0] represents the starting address of internal memory to be accessed and IAD[14] reflects PM or DM for access.

- 4 . Host uses IS and IRD (or IWR ) to read (or write) processor internal memory (PM or DM).
- 5 . Host checks IACK line to see if the processor has completed the previous IDMA operation.
6. Host ends IDMA transfer.

The IDMA port has a 16-bit multiplexed address and data bus and supports 24-bit program memory. The IDMA port is completely asynchronous and can be written to while the ADSP21mod870 is operating at full speed.

The processor memory address is latched and is then automatically incremented after each IDMA transaction. An external device can therefore access a block of sequentially addressed memory by specifying only the starting address of the block. This increases throughput as the address does not have to be sent for each memory access.

IDMA Port access occurs in two phases. The first is the IDMA Address Latch cycle. When the acknowledge is asserted, a 14-bit address and 1-bit destination type can be driven onto the bus by an external device. The address specifies an on-chip memory location; the destination type specifies whether it is a DM or PM access. The falling edge of the address latch signal latches this value into the IDMAA register.

Once the address is stored, data can then be either read from, or written to, the ADSP-21mod870's on-chip memory. Asserting the select line ( IS ) and the appropriate read or write line ( IRD and IWR respectively) signals the ADSP-21mod870 that a particular transaction is required. In either case, there is a oneprocessor-cycle delay for synchronization. The memory access consumes one additional processor cycle.

Once an access has occurred, the latched address is automatically incremented, and another access can occur.

Through the IDMAA register, the processor can also specify the starting address and data format for DMA operation. Asserting the IDMA port select ( IS ) and address latch enable (IAL) directs the ADSP-21mod870 to write the address onto the IAD[14:0] bus into the IDMA Control Register. If IAD[15] is set to 0, IDMA latches the address. If IAD[15] is set to 1, IDMA latches OVLAY memory. This register, shown below, is memory mapped at address DM (0x3FE0). Note that the latched address (IDMAA) cannot be read back by the host.

## ADSP-21mod870

Figure 9 shows the IDMA Control and OVLAY Registers, Figure 10 shows the bus usage during IDMA transfers, and Figure 11 shows the DMA memory maps.

Figure 10. Bus Usage During IDMA Transfers

<!-- image -->

Figure 11. Direct Memory Access-PM and DM Memory Maps

<!-- image -->

## Bootstrap Loading (Booting)

The ADSP-21mod870 has two mechanisms to allow automatic loading of the internal program memory after reset. The method for booting is controlled by the Mode A, B and C configuration bits.

When the MODE pins specify BDMA booting, the ADSP21mod870 initiates a BDMA boot sequence when reset is released.

The BDMA interface is set up during reset to the following defaults when BDMA booting is specified: the BDIR, BMPAGE, BIAD and BEAD registers are set to 0, the BTYPE register is set to 0 to specify program memory 24-bit words, and the BWCOUNT register is set to 32. This causes 32 words of onchip program memory to be loaded from byte memory. These 32 words are used to set up the BDMA to load in the remaining program code. The BCR bit is also set to 1, which causes program execution to be held off until all 32 words are loaded into on-chip program memory. Execution then begins at Address 0.

The ADSP-2100 Family development software (Revision 5.02 and later) fully supports the BDMA booting feature and can generate boot code compatible with byte memory space.

The IDLE instruction can also be used to allow the processor to hold off execution while booting continues through the BDMA interface. For BDMA accesses while in Host Mode, the addresses to boot memory must be constructed externally to the ADSP-21mod870. The only memory address bit provided by the processor is A0.

## IDMA Port Booting

The ADSP-21mod870 can also boot programs through its Internal DMA port. If Mode C = 1, Mode B = 0, and Mode A = 1, the ADSP-21mod870 boots from the IDMA port. IDMA feature can load as much on-chip memory as desired. Program execution is held off until data is written to on-chip program memory location 0.

## Bus Request and Bus Grant

The ADSP-21mod870 can relinquish control of the data and address buses to an external device. When the external device requires access to memory, it asserts the bus request ( BR ) signal. If the ADSP-21mod870 is not performing an external memory access, it responds to the active BR input in the following processor cycle by:

- Three-stating the data and address buses and the PMS , DMS , BMS , CMS , IOMS , RD , WR output drivers,
- Asserting the bus grant ( BG ) signal and
- Halting program execution.

If Go Mode is enabled, the ADSP-21mod870 will not halt program execution until it encounters an instruction that requires an external memory access.

If the ADSP-21mod870 is performing an external memory access when the external device asserts the BR signal, it will not threestate the memory interfaces or assert the BG signal until the processor cycle after the access completes. The instruction does not need to be completed when the bus is granted. If a single instruction requires two external memory accesses, the bus will be granted between the two accesses.

When the BR signal is released, the processor releases the BG signal, reenables the output drivers and continues program execution from the point at which it stopped.

The bus request feature operates at all times, including when the processor is booting and when RESET is active.

The BGH pin is asserted when the ADSP-21mod870 is ready to execute an instruction but is stopped because the external bus is already granted to another device. The other device can release the bus by deasserting bus request. Once the bus is released, the ADSP-21mod870 deasserts BG and BGH and executes the external memory access.

## Flag I/O Pins

The ADSP-21mod870 has eight general purpose programmable input/output flag pins. They are controlled by two memory mapped registers. The PFTYPE register determines the direction, 1 = output and 0 = input. The PFDATA register is used to read and write the values on the pins. Data being read from a pin configured as an input is synchronized to the ADSP-21mod870's clock. Bits that are programmed as outputs will read the value being output. The PF pins default to input during reset.

In addition to the programmable flags, the ADSP-21mod870 has five fixed-mode flags, FLAG\_IN, FLAG\_OUT, FL0, FL1, and FL2. FL0-FL2 are dedicated output flags. FLAG\_IN and FLAG\_OUT are available as an alternate configuration of SPORT1.

Note: Pins PF0, PF1, PF2 and PF3 are also used for device configuration during reset.

## Instruction Set Description

The ADSP-21mod870 assembly language instruction set has an algebraic syntax that was designed for ease of coding and readability. The assembly language, which takes full advantage of the processor's unique architecture, offers the following benefits:

- The algebraic syntax eliminates the need to remember cryptic assembler mnemonics. For example, a typical arithmetic add instruction, such as AR = AX0 + AY0, resembles a simple equation.
- Every instruction assembles into a single, 24-bit word that can execute in a single instruction cycle.
- The syntax is a superset ADSP-2100 Family assembly language and is completely source and object code compatible with other family members. Programs may need to be relocated to utilize on-chip memory and conform to the ADSP21mod870's interrupt vector and reset vector map.
- Sixteen condition codes are available. For conditional jump, call, return or arithmetic instructions, the condition can be checked and the operation executed in the same instruction cycle.
- Multifunction instructions allow parallel execution of an arithmetic instruction with up to two fetches or one write to processor memory space during a single instruction cycle.

## DESIGNING AN EZ-ICE-COMPATIBLE SYSTEM

The ADSP-21mod870 has on-chip emulation support and an ICE-Port, a special set of pins that interface to the EZ-ICE. These features allow in-circuit emulation without replacing the target system processor by using only a 14-pin connection from

## ADSP-21mod870

the target system to the EZ-ICE. Target systems must have a 14-pin connector to accept the EZ-ICE's in-circuit probe, a 14pin plug. See the ADSP-2100 Family EZ-Tools data sheet for complete information on ICE products.

Issuing the 'chip reset' command during emulation causes the DSP processor to perform a full chip reset, including a reset of its memory mode. Therefore, it is vital that the mode pins are set correctly PRIOR to issuing a chip reset command from the emulator user interface. As the mode pins share functionality with PF0:2 (and PF3 on the ADSP-21mod870), it may be necessary to reset the target hardware separately to insure the proper mode selection state on emulator chip reset.

If you are using a passive method of maintaining mode information (as discussed in the Setting Memory Modes section), it does not matter that mode information is latched by an emulator reset. However, if you are using the RESET pin as a method of setting the value of the mode pins, then you must consider the effects of an emulator reset.

One method of ensuring that the values located on the mode pins is correct is to construct a circuit like the one shown below. This circuit will force the value located on the mode A pin to zero, regardless of whether  it latched via the RESET or ERESET pin.

Figure 12. RESET , ERESET Circuit

<!-- image -->

See the ADSP-2100 Family EZ-Tools data sheet for complete information on ICE products.

The ICE-Port interface consists of the following ADSP-21mod870 pins:

| EBR    | EMS   | ELIN   |
|--------|-------|--------|
| EBG    | EINT  | ELOUT  |
| ERESET | ECLK  | EE     |

These ADSP-21mod870 pins must be connected only to the EZICE connector in the target system. These pins have no function except during emulation, and do not require pull-up or pulldown resistors. The traces for these signals between the ADSP21mod870 and the connector must be kept as short as possible, no longer that three inches.

The following pins are also used by the EZ-ICE:

BR

RESET

BG GND

The EZ-ICE uses the EE (emulator enable) signal to take control of the ADSP-21mod870 in the target system. This causes the processor to use its ERESET , EBR and EBG pins instead of the RESET , BR and BG pins. The BG output is three-stated. These signals do not need to be jumper-isolated in your system.

## ADSP-21mod870

The EZ-ICE connects to your target system via a ribbon cable and a 14-pin female plug. The ribbon cable is ten inches long with one end fixed to the EZ-ICE. The female plug is plugged onto the 14-pin connector (a pin strip header) on the target board.

## Target Board Connector for EZ-ICE Probe

The EZ-ICE connector (a standard pin strip header) is shown in Figure 13. You must add this connector to your target board design if you intend to use the EZ-ICE. Be sure to allow enough room in your system to fit the EZ-ICE probe onto the 14-pin connector.

The 14-pin, 2-row pin strip header is keyed at the Pin 7 location-you must remove Pin 7 from the header. The pins must be 0.025 inch square and at least 0.20 inch in length. Pin spacing should be 0.1 · 0.1 inches. The pin strip header must have at least 0.15 inch clearance on all sides to accept the EZ-ICE probe plug.

Pin strip headers are available from vendors such as 3M, McKenzie and Samtec.

## Target Memory Interface

For your target system to be compatible with the EZ-ICE emulator, it must comply with the memory interface guidelines listed below.

Figure 13. Target Board Connector for EZ-ICE

<!-- image -->

## PM, DM, BM, IOM and CM

Design your Program Memory (PM), Data Memory (DM), Byte Memory (BM), I/O Memory (IOM), and Composite Memory (CM) external interfaces to comply with worst case device timing requirements and switching characteristics as specified in this data sheet. The performance of the EZ-ICE may approach published worst case specification for some memory access timing requirements and switching characteristics.

Note: If your target does not meet the worst case chip specification for memory access parameters, you may not be able to emulate your circuitry at the desired CLKIN frequency. Depending on the severity of the specification violation, you may have trouble manufacturing your system as processor components statistically vary in switching characteristic and timing requirements within published limits.

Restriction: All memory strobe signals on the ADSP-21mod870 (RD , WR , PMS , DMS , BMS , CMS and IOMS ) used in your target system must have 10 k W pull-up resistors connected when the EZ-ICE is being used. The pull-up resistors are necessary because there are no internal pull-ups to guarantee their state during prolonged three-state conditions resulting from typical EZ-ICE debugging sessions. These resistors may be removed at your option when the EZ-ICE is not being used.

## Target System Interface Signals

When the EZ-ICE board is installed, the performance on some system signals changes. Design your system to be compatible with the following system interface signal changes introduced by the EZ-ICE board:

- EZ-ICE emulation introduces an 8 ns propagation delay between your target circuitry and the processor on the RESET signal.
- EZ-ICE emulation introduces an 8 ns propagation delay between your target circuitry and the processor on the BR signal.
- EZ-ICE emulation ignores RESET and BR when singlestepping.
- EZ-ICE emulation ignores RESET and BR when in Emulator Space (processor halted).
- EZ-ICE emulation ignores the state of target BR in certain modes. As a result, the target system may take control of the processor's external memory bus only if bus grant ( BG ) is asserted by the EZ-ICE board's processor.

## SPECIFICATIONS

## RECOMMENDED OPERATING CONDITIONS

|           | K Grade   | K Grade   |      |
|-----------|-----------|-----------|------|
| Parameter | Min       | Max       | Unit |
| V DD      | 3.15      | 3.45      | V    |
| T AMB     | 0         | +70       | C    |

## ELECTRICAL CHARACTERISTICS

| Parameter           |                                                                                                                | Test Conditions                                                                                                                                                                                                                                                                        | K/B Grades Typ             |         |   Max | Unit         |
|---------------------|----------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------|---------|-------|--------------|
| V IH V IH V IL V OH | Hi-Level Input Voltage 1, 2 Hi-Level CLKIN Voltage Lo-Level Input Voltage 1, 3 Hi-Level Output Voltage 1, 4, 5 | @V DD = max @V DD = max @V DD = min @V DD = min I OH = -0.5 mA @V DD = min I OH = -100 m A 6 @V DD = min I OL = 2 mA @V DD = max V IN = V DD max @V DD = max V IN = 0 V @V DD = max V IN = V DD max 8 @V DD = max V IN = 0 V 8 , t CK = 25 @V DD = 3.3 t CK = 19 ns 10 t CK = 25 ns 10 | Min 2.0 2.2 2.4 V DD - 0.3 | 8       |   0.8 | V V V V V mA |
| V OL                | Lo-Level Output Voltage 1, 4, 5                                                                                |                                                                                                                                                                                                                                                                                        |                            |         |   0.4 | m A          |
| I IH                | Hi-Level Input Current 3                                                                                       |                                                                                                                                                                                                                                                                                        |                            |         |    10 | m A          |
| I IL                | Lo-Level Input Current 3 Three-State Leakage Current 7                                                         |                                                                                                                                                                                                                                                                                        |                            |         |    10 | m A          |
| I OZH               | 7                                                                                                              |                                                                                                                                                                                                                                                                                        |                            |         |    10 | m A          |
| I OZL               | Three-State Leakage Current                                                                                    | ns                                                                                                                                                                                                                                                                                     |                            |         |       | m A          |
| I DD                | Supply Current (Idle) 9                                                                                        |                                                                                                                                                                                                                                                                                        |                            | 10      |    10 | mA           |
| I DD                | Supply Current (Dynamic) 11                                                                                    | t CK = 30 ns @V DD = 3.3 T AMB = +25 C t CK = 19 ns 10 t CK = 25 ns 10                                                                                                                                                                                                                 |                            | 7 51 41 |       | mA mA mA     |
|                     | 3, 6, 12 Output Pin Capacitance 6, 7, 12, 13                                                                   | t CK = 30 ns 10 T AMB = +25 C @V IN = 2.5 V, f IN = 1.0 MHz, T AMB = +25 C                                                                                                                                                                                                             |                            | 34      |       | mA           |
| C I C O             | Input Pin Capacitance                                                                                          | @V IN = 2.5 V, f IN = 1.0 MHz,                                                                                                                                                                                                                                                         |                            |         |     8 | pF           |
|                     |                                                                                                                |                                                                                                                                                                                                                                                                                        |                            |         |     8 | pF           |

NOTES

1 Bidirectional pins: D0-D23, RFS0, RFS1, SCLK0, SCLK1, TFS0, TFS1, A1-A13, PF0-PF7.

2 Input only pins: RESET , BR , DR0, DR1, PWD .

3 Input only pins: CLKIN, RESET , BR , DR0, DR1, PWD .

4 Output pins: BG , PMS , DMS , BMS , IOMS , CMS , RD , WR , PWDACK, A0, DT0, DT1, CLKOUT, FL2-0, BGH .

5 Although specified for TTL outputs, all ADSP-21mod870 outputs are CMOS-compatible and will drive to V DD and GND, assuming no dc loads.

6 Guaranteed but not tested.

7 Three-statable pins: A0-A13, D0-D23, PMS , DMS , BMS , IOMS , CMS , RD , WR , DT0, DT1, SCLK0, SCLK1, TFS0, TFS1, RFS0, RSF1, PF0-PF7.

8 0 V on

BR .

9 Idle refers to ADSP-21mod870 state of operation during execution of IDLE instruction. Deasserted pins are driven to either V DD or GND.

10 VIN = 0 V and 3 V. For typical figures for supply currents, refer to Power Dissipation section.

11 IDD measurement taken with all instructions executing from internal memory. 50% of the instructions are multifunction (types 1, 4, 5, 12, 13, 14), 30% are type 2 and type 6, and 20% are idle instructions.

12 Applies to LQFP package type.

13 Output pin capacitance is the capacitive load for any three-stated output pin.

Specifications subject to change without notice.

## ADSP-21mod870

## ABSOLUTE MAXIMUM RATINGS*

| Supply Voltage . . . . . . . . . . . . . . . . . . . .   | . . . -0.3 V to +4.6 V     |
|----------------------------------------------------------|----------------------------|
| Input Voltage . . . . . . . . . . . . . . . . . . . .    | -0.5 V to V DD + 0.5 V     |
| Output Voltage Swing . . . . . . . . . . . . .           | -0.5 V to V DD + 0.5 V     |
| Operating Temperature Range (Ambient)                    | . . -40 C to +85 C         |
| Storage Temperature Range . . . . . . . . .              | . . . -65 C to +150 C      |
| Lead Temperature (5 sec) LQFP . . . . . .                | . . . . . . . . . . +280 C |

*Stresses above those listed under Absolute Maximum Ratings may cause permanent damage to the device. These are stress ratings only; functional operation of the device at these or any other conditions above those indicated in the operational sections of this specification is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## TIMING PARAMETERS

## GENERAL NOTES

Use the exact timing information given. Do not attempt to derive parameters from the addition or subtraction of others. While addition or subtraction would yield meaningful results for an individual device, the values given in this data sheet reflect statistical variations and worst cases. Consequently, you cannot meaningfully add up parameters to derive longer times.

## TIMING NOTES

Switching characteristics specify how the processor changes its signals. You have no control over this timing-circuitry external to the processor must be designed for compatibility with these signal characteristics. Switching characteristics tell you what the processor will do in a given circumstance. You can also use switching characteristics to ensure that any timing requirement of a device connected to the processor (such as memory) is satisfied.

Timing requirements apply to signals that are controlled by circuitry external to the processor, such as the data input for a read operation. Timing requirements guarantee that the processor operates correctly with other devices.

## MEMORY TIMING SPECIFICATIONS

The table below shows common memory device specifications and the corresponding ADSP-21mod870 timing parameter.

## ESD SENSITIVITY

The ADSP-21mod870 is an ESD (electrostatic discharge) sensitive device. Electrostatic charges readily  accumulate  on  the  human  body  and  equipment  and  can  discharge  without  detection. Permanent damage may occur to devices subjected to high energy electrostatic discharges.

The  ADSP-21mod870  features  proprietary  ESD  protection  circuitry  to  dissipate  high  energy discharges (Human Body Model) per method 3015 of MIL-STD-883. Proper ESD precautions are recommended to avoid performance degradation or loss of functionality. Unused devices must be stored in conductive foam or shunts, and the foam should be discharged to the destination before devices are removed.

| Memory Device Specification   | ADSP- 21mod870 Timing Parameter   | Timing Parameter Definition            |
|-------------------------------|-----------------------------------|----------------------------------------|
| Address Setup to Write Start  | t ASW                             | A0-A13, xMS Setup before WR Low        |
| Address Setup to Write End    | t AW                              | A0-A13, xMS Setup before WR Deasserted |
| Address Hold Time             | t WRA                             | A0-A13, xMS Hold before WR Low         |
| Data Setup Time               | t DW                              | Data Setup before WR High              |
| Data Hold Time                | t DH                              | Data Hold after WR High                |
| OE to Data Valid              | t RDD                             | RD Low to Data Valid                   |
| Address Access Time           | t AA                              | A0-A13, xMS to Data Valid              |

Note: xMS = PMS , DMS , BMS , CMS , IOMS .

## FREQUENCY DEPENDENCY FOR TIMING SPECIFICATIONS

tCK is defined as 0.5 tCKI. The ADSP-21mod870 uses an input clock with a frequency equal to half the instruction rate: a 26 MHz input clock (which is equivalent to 38 ns) yields a 19 ns processor cycle (equivalent to 52 MHz). tCK values within the range of 0.5 tCKI period should be substituted for all relevant timing parameters to obtain the specification value.

Example: tCKH = 0.5 tCK - 7 ns = 0.5 (19 ns) - 7 ns = 2.5 ns

## ENVIRONMENTAL CONDITIONS

Ambient Temperature Rating:

TAMB =

TCASE - (PD · q CA)

TCASE =

Case Temperature in C

PD =

Power Dissipation in W

q CA =

Thermal Resistance (Case-to-Ambient)

q JA =

Thermal Resistance (Junction-to-Ambient)

q JC =

Thermal Resistance (Junction-to-Case)

| Package   | u JA   | u JC   | u CA   |
|-----------|--------|--------|--------|
| LQFP      | 50 C/W | 2 C/W  | 48 C/W |

<!-- image -->

## OUTPUT DRIVE CURRENTS

Figure 14 shows typical I-V characteristics for the output drivers of the ADSP-21mod870. The curves represent the current drive capability of the output drivers as a function of output voltage.

Figure 14. Typical Drive Currents

<!-- image -->

## POWER DISSIPATION

To determine total power dissipation in a specific application, the following equation should be applied for each output:

<!-- formula-not-decoded -->

C = load capacitance, f = output switching frequency.

## Example

In an application where external data memory is used and no other outputs are active, power dissipation is calculated as follows:

## Assumptions

- External data memory is accessed every cycle with 50% of the address pins switching.
- External data memory writes occur every other cycle with 50% of the data pins switching.
- Each address and data pin has a 10 pF total load at the pin.
- The application operates at VDD = 3.3 V and tCK = 30 ns.

<!-- formula-not-decoded -->

PINT = internal power dissipation from Power vs. Frequency graph (Figure 15).

( C · VDD 2 · f ) is calculated for each output:

|                                        | # of Pins   | 3 C                             | 3 V DD 2                                | 3 f                                                     |                                  |
|----------------------------------------|-------------|---------------------------------|-----------------------------------------|---------------------------------------------------------|----------------------------------|
| Address, DMS Data Output, WR RD CLKOUT | 8 9 1 1     | · 10 pF · 10 pF · 10 pF · 10 pF | · 3.3 2 V · 3.3 2 V · 3.3 2 V · 3.3 2 V | · 33.3 2 MHz = · 16.67 MHz = · 16.67 MHz = · 33.3 MHz = | 29.0mW 16.3mW 1.8mW 3.6mW 50.7mW |

Total power dissipation for this example is PINT + 50.7 mW.

## ADSP-21mod870

<!-- image -->

VALID FOR ALL TEMPERATURE GRADES.

1 POWER REFLECTS DEVICE OPERATING WITH NO OUTPUT LOADS.

2 IDLE REFERS TO ADSP-21mod870 STATE OF OPERATION DURING EXECUTION OF

IDLE INSTRUCTION. DEASSERTED PINS ARE DRIVEN TO EITHER V DD  OR GND.

3 TYPICAL POWER DISSIPATION AT 3.3V V DD  AND +25

8

C, EXCEPT WHERE SPECIFIED.

- 4 I DD  MEASUREMENT TAKEN WITH ALL INSTRUCTIONS EXECUTING FROM INTERNAL MEMORY. 50% OF THE INSTRUCTIONS ARE MULTIFUNCTION (TYPES 1, 4, 5, 12, 13, 14), 30% ARE TYPE 2 AND TYPE 6, AND 20% ARE IDLE INSTRUCTIONS.

Figure 15. Power vs. Frequency

## ADSP-21mod870

## CAPACITIVE LOADING

Figures 16 and 17 show the capacitive loading characteristics of the ADSP-21mod870.

<!-- image -->

Figure 16. Typical Output Rise Time vs. Load Capacitance, CL (at Maximum Ambient Operating Temperature)

Figure 17. Typical Output Valid Delay or Hold vs. Load Capacitance, CL (at Maximum Ambient Operating Temperature)

<!-- image -->

Figure 18. Voltage Reference Levels for AC Measurements  (Except Output Enable/Disable)

<!-- image -->

## TEST CONDITIONS

## Output Disable Time

Output pins are considered to be disabled when they have stopped driving and started a transition from the measured output high or low voltage to a high impedance state. The output disable time (t DIS) is the difference of tMEASURED and tDECAY. The time is the interval from when a reference signal reaches a high or low voltage level to when the output voltages have changed by 0.5 V from the measured output high or low voltage, see Figure 19.

The decay time, tDECAY, is dependent on the capacitive load, CL, and the current load, iL, on the output pin. It can be approximated by the following equation:

from which

<!-- formula-not-decoded -->

is calculated. If multiple pins (such as the data bus) are disabled, the measurement value is that of the last pin to stop driving.

## Output Enable Time

Output pins are considered to be enabled when they have made a transition from a high-impedance state to when they start driving. The output enable time (tENA) is the interval from when a reference signal reaches a high or low voltage level to when the output has reached a specified high or low trip point, see Figure 19. If multiple pins (such as the data bus) are enabled, the measurement value is that of the first pin to start driving. Figure 20 shows the equivalent device loading for ac measurements.

Figure 19. Output Enable/Disable

<!-- image -->

Figure 20. Equivalent Device Loading for AC Measurements (Including All Fixtures)

<!-- image -->

<!-- formula-not-decoded -->

## TIMING PARAMETERS

| Parameter                  |                              | Min          | Unit   |
|----------------------------|------------------------------|--------------|--------|
| Clock Signals and          | Reset                        |              |        |
| Timing Requirements        | :                            |              |        |
| t CKI                      | CLKIN Period                 | 38           | ns     |
| t CKIL                     | CLKIN Width Low              | 15           | ns     |
| t CKIH                     | CLKIN Width High             | 15           | ns     |
| Switching Characteristics: |                              |              |        |
| t CKL                      | CLKOUT Width Low             | 0.5 t CK - 7 | ns     |
| t CKH                      | CLKOUT Width High            | 0.5 t CK - 7 | ns     |
| t CKOH                     | CLKIN High to CLKOUT High    | 0            | ns     |
| Control Signals            |                              |              |        |
| Timing Requirements        | :                            |              |        |
| t RSP                      | RESET Width Low              | 5 t CK 1     | ns     |
| t MS                       | Mode Setup before RESET High | 2            | ns     |
| t MH                       | Mode Setup after RESET High  | 5            | ns     |

## NOTE

1 Applies after power-up sequence is complete. Internal phase lock loop requires no more than 2000 CLKIN cycles assuming stable CLKIN (not including crystal oscillator start-up time).

<!-- image -->

*PF3 IS MODE D, PF2 IS MODE C, PF1 IS MODE B, PF0 IS MODE A

Figure 21. Clock Signals

## ADSP-21mod870

## ADSP-21mod870

## TIMING PARAMETERS

| Parameter                 | Min                                                  | Max            | Unit   |
|---------------------------|------------------------------------------------------|----------------|--------|
| Interrupts and Flags      |                                                      |                |        |
| Timing Requirements       | :                                                    |                |        |
| t IFS                     | IRQx , FI, or PFx Setup before CLKOUT Low 1, 2, 3, 4 | 0.25 t CK + 15 | ns     |
| t IFH                     | IRQx , FI, or PFx Hold after CLKOUT High 1, 2, 3, 4  | 0.25 t CK      | ns     |
| Switching Characteristics | :                                                    |                |        |
| t FOH                     | Flag Output Hold after CLKOUT Low 5                  | 0.25 t CK - 7  | ns     |
| t FOD                     | Flag Output Delay from CLKOUT Low 5                  | 0.5 t CK       | ns     |

## NOTES

1 If IRQx and FI inputs meet tIFS and t IFH setup/hold requirements, they will be recognized during the current clock cycle; otherwise the signals will be recognized on the following cycle. (Refer to Interrupt Controller Operation in the Program Control chapter of the ADSP-2100 Family User's Manual, Third Edition, for further information on interrupt servicing.)

- 2 Edge-sensitive interrupts require pulsewidths greater than 10 ns; level-sensitive interrupts must be held low until serviced.
- 3 IRQx = IRQ0 , IRQ1 , IRQ2 , IRQL0 , IRQL1 , IRQE .

4 PFx = PF0, PF1, PF2, PF3, PF4, PF5, PF6, PF7.

- 5 Flag outputs = PFx, FL0, FL1, FL2, Flag\_out.

Figure 22. Interrupts and Flags

<!-- image -->

## ADSP-21mod870

| Parameter             | Min                                  | Max            | Unit   |
|-----------------------|--------------------------------------|----------------|--------|
| Bus Request-Bus Grant |                                      |                |        |
| Timing Requirements : |                                      |                |        |
| t BH                  | BR Hold after CLKOUT High 1          | 0.25 t CK + 2  | ns     |
| t BS                  | BR Setup before CLKOUT Low 1         | 0.25 t CK + 17 | ns     |
| Switching             | Characteristics :                    |                |        |
| t SD                  | CLKOUT High to xMS , RD , WR Disable | 0.25 t CK + 10 | ns     |
| t SDB                 | xMS , RD , WR Disable to BG Low      | 0              | ns     |
| t SE                  | BG High to xMS , RD , WR Enable      | 0              | ns     |
| t SEC                 | xMS , RD , WR Enable to CLKOUT High  | 0.25 t CK - 4  | ns     |
| t SDBH                | xMS , RD , WR Disable to BGH Low 2   | 0              | ns     |
| t SEH                 | BGH High to xMS , RD , WR Enable 2   | 0              | ns     |

## NOTES

## xMS = PMS , DMS , CMS , IOMS , BMS .

1 BR is an asynchronous signal. If BR meets the setup/hold requirements, it will be recognized during the current clock cycle; otherwise the signal will be recognized on the following cycle. Refer to the ADSP-2100 Family User's Manual, Third Edition, for BR / BG cycle relationships.

2 BGH is asserted when the bus is granted and the processor requires control of the bus to continue.

Figure 23. Bus Request-Bus Grant

<!-- image -->

## ADSP-21mod870

## TIMING PARAMETERS

| Parameter                                                                                                            | Min Max                                                                                                  | Unit                    |
|----------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------|
| Memory Read                                                                                                          |                                                                                                          |                         |
| Timing Requirements :                                                                                                |                                                                                                          |                         |
| t RDD RD t AA A0-A13, t RDH Data Switching Characteristics t RP RD t CRD CLKOUT t ASR A0-A13, t RDA A0-A13, t RWR RD | 0.5 t CK - 0.75 t CK 0 0.5 t CK - 5 + w 0.25 t CK - 5 0.25 t CK 0.25 t CK - 6 0.25 t CK - 3 0.5 t CK - 5 | ns ns ns ns ns ns ns ns |

w = wait states · tCK.

xMS = PMS , DMS , CMS , IOMS , BMS .

Figure 24. Memory Read

<!-- image -->

## ADSP-21mod870

| Parameter                                                                                                                                         | Min                                                                                                                                                                                                                                           | Max           | Unit                          |
|---------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|-------------------------------|
| Memory Write                                                                                                                                      |                                                                                                                                                                                                                                               |               |                               |
| Switching Characteristics                                                                                                                         |                                                                                                                                                                                                                                               |               |                               |
| t DW Data Setup t DH Data Hold t WP WR t WDE WR Low to t ASW A0-A13, xMS t DDR Data Disable t CWR CLKOUT t AW A0-A13, xMS t WRA A0-A13, xMS t WWR | : before WR High 0.5 t after WR High 0.25 Pulsewidth 0.5 t Data Enabled 0 Setup before WR Low 0.25 before WR or RD Low 0.25 High to WR Low 0.25 , Setup before WR Deasserted 0.75 Hold after WR Deasserted 0.25 WR High to RD or WR Low 0.5 t | 0.25 t CK + 7 | ns ns ns ns ns ns ns ns ns ns |

w = wait states · tCK. xMS = PMS , DMS , CMS , IOMS , BMS .

Figure 25. Memory Write

<!-- image -->

## ADSP-21mod870

## TIMING PARAMETERS

Figure 26. Serial Ports

| Parameter                   |                                                 | Min Max   |                | Unit   |
|-----------------------------|-------------------------------------------------|-----------|----------------|--------|
| Serial Ports                |                                                 |           |                |        |
| Timing Requirements :       | Timing Requirements :                           |           |                |        |
| t SCK                       | SCLK Period                                     | 38        |                | ns     |
| t SCS                       | DR/TFS/RFS Setup before SCLK Low                | 4         |                | ns     |
| t SCH                       | DR/TFS/RFS Hold after SCLK Low                  | 7         |                | ns     |
| t SCP                       | SCLK IN Width                                   | 15        |                | ns     |
| Switching Characteristics : | Switching Characteristics :                     |           |                |        |
| t CC                        | CLKOUT High to SCLK OUT                         | 0.25 t CK | 0.25 t CK + 10 | ns     |
| t SCDE                      | SCLK High to DT Enable                          | 0         |                | ns     |
| t SCDV                      | SCLK High to DT Valid                           |           | 15             | ns     |
| t RH                        | TFS/RFS OUT Hold after SCLK High                | 0         |                | ns     |
| t RD                        | TFS/RFS OUT Delay from SCLK High                |           | 15             | ns     |
| t SCDH                      | DT Hold after SCLK High                         | 0         |                | ns     |
| t TDE                       | TFS (Alt) to DT Enable                          | 0         |                | ns     |
| t TDV                       | TFS (Alt) to DT Valid                           |           | 14             | ns     |
| t SCDD                      | SCLK High to DT Disable                         |           | 15             | ns     |
| t RDV                       | RFS(Multichannel, Frame Delay Zero) to DT Valid |           | 15             | ns     |

<!-- image -->

## ADSP-21mod870

| Parameter             | Parameter                                           |   Min | Max   | Unit   |
|-----------------------|-----------------------------------------------------|-------|-------|--------|
| IDMA Address Latch    | IDMA Address Latch                                  |       |       |        |
| Timing Requirements : | Timing Requirements :                               |       |       |        |
| t IALP                | Duration of Address Latch 1, 2                      |    10 |       | ns     |
| t IASU                | IAD15-0 Address Setup before Address Latch End 2    |     5 |       | ns     |
| t IAH                 | IAD15-0 Address Hold after Address Latch End 2      |     2 |       | ns     |
| t IKA                 | IACK Low before Start of Address Latch 2, 3         |     0 |       | ns     |
| t IALS                | Start of Write or Read after Address Latch End 1, 2 |     3 |       | ns     |
| t IALD                | Address Latch Start after Address Latch End 1, 2    |     2 |       | ns     |

## NOTES

1 Start of Address Latch = IS Low and IAL High.

2 End of Address Latch = IS High or IAL Low.

3 Start of Write or Read = IS Low and IWR Low or IRD Low.

Figure 27. IDMA Address Latch

<!-- image -->

## ADSP-21mod870

## TIMING PARAMETERS

| Parameter                     | Min                                            | Max   | Unit   |
|-------------------------------|------------------------------------------------|-------|--------|
| IDMA Write, Short Write Cycle |                                                |       |        |
| Timing Requirements :         |                                                |       |        |
| t IKW                         | IACK Low before Start of Write 1               | 0     | ns     |
| t IWP                         | Duration of Write 1, 2                         | 15    | ns     |
| t IDSU                        | IAD15-0 Data Setup before End of Write 2, 3, 4 | 5     | ns     |
| t IDH                         | IAD15-0 Data Hold after End of Write 2, 3, 4   | 2     | ns     |
| Switching                     | Characteristics :                              |       |        |
| t IKHW                        | Start of Write to IACK High                    | 4 15  | ns     |

## NOTES

1 Start of Write = IS Low and IWR Low.

2 End of Write = IS High or IWR High.

3 If Write Pulse ends before IACK Low, use specifications t IDSU , t IDH.

4 If Write Pulse ends after IACK Low, use specifications t IKSU , t IKH.

Figure 28. IDMA Write, Short Write Cycle

<!-- image -->

## ADSP-21mod870

| Parameter                    | Min                                        | Max           | Unit   |
|------------------------------|--------------------------------------------|---------------|--------|
| IDMA Write, Long Write Cycle |                                            |               |        |
| Timing Requirements          | :                                          |               |        |
| t IKW                        | IACK Low before Start of Write 1           | 0             | ns     |
| t IKSU                       | IAD15-0 Data Setup before IACK Low 2, 3, 4 | 0.5 t CK + 10 | ns     |
| t IKH                        | IAD15-0 Data Hold after IACK Low 2, 3, 4   | 2             | ns     |
| Switching Characteristics    | :                                          |               |        |
| t IKLW                       | Start of Write to IACK Low 4               | 1.5 t CK      | ns     |
| t IKHW                       | Start of Write to IACK High                | 4 15          | ns     |

## NOTES

1 Start of Write = IS Low and IWR Low.

2 If Write Pulse ends before IACK Low, use specifications t IDSU , t IDH .

4 This is the earliest time for IACK Low from Start of Write. For IDMA Write cycle relationships, please refer to the ADSP-2100 Family User's Manual, Third Edition .

3 If Write Pulse ends after IACK Low, use specifications t IKSU , t IKH .

Figure 29. IDMA Write, Long Write Cycle

<!-- image -->

## ADSP-21mod870

| Parameter                   | Min                                                 |   Max | Unit   |
|-----------------------------|-----------------------------------------------------|-------|--------|
| IDMA Read, Short Read Cycle |                                                     |       |        |
| Timing Requirements :       |                                                     |       |        |
| t IKR                       | IACK Low before Start of Read 1 0                   |       | ns     |
| t IRP Duration of Read      | 15                                                  |       | ns     |
| Switching Characteristics : |                                                     |       |        |
| t IKHR                      | IACK High after Start of Read 1 4                   |    15 | ns     |
| t IKDH                      | IAD15-0 Data Hold after End of Read 2 0             |       | ns     |
| t IKDD                      | IAD15-0 Data Disabled after End of Read 2           |    10 | ns     |
| t IRDE                      | IAD15-0 Previous Data Enabled after Start of Read 0 |       | ns     |
| t IRDV                      | IAD15-0 Previous Data Valid after Start of Read     |    10 | ns     |

NOTES

1 Start of Read = IS Low and IRD Low.

2 End of Read = IS High or IRD High.

Figure 30. IDMA Read, Short Read Cycle

<!-- image -->

## TIMING PARAMETERS

| Parameter                   | Min                                                         |   Max | Unit   |
|-----------------------------|-------------------------------------------------------------|-------|--------|
| IDMA Read, Long Read Cycle  |                                                             |       |        |
| Timing                      | Requirements :                                              |       |        |
| t IKR                       | IACK Low before Start of Read 1 0                           |       | ns     |
| t IRK End of Read after     | IACK Low 2 2                                                |       | ns     |
| Switching Characteristics : |                                                             |       |        |
| t IKHR                      | IACK High after Start of Read 1 4                           |    15 | ns     |
| t IKDS                      | IAD15-0 Data Setup before IACK Low 0.5                      |       | ns     |
| t IKDH                      | IAD15-0 Data Hold after End of Read 3 0                     |       | ns     |
| t IKDD                      | IAD15-0 Data Disabled after End of Read 3                   |    10 | ns     |
| t IRDE IAD15-0 Previous     | Data Enabled after Start of Read 0                          |       | ns     |
| t IRDV                      | IAD15-0 Previous Data Valid after Start of Read             |    10 | ns     |
| t IRDH1                     | IAD15-0 Previous Data Hold after Start of Read (DM/PM1) 2 2 |       | ns     |
| t IRDH2                     | IAD15-0 Previous Data Hold after Start of Read (PM2) 4 t CK |       | ns     |

## ADSP-21mod870

Figure 31. IDMA Read, Long Read Cycle

<!-- image -->

## 100-Lead LQFP Package Pinout

<!-- image -->

## ADSP-21mod870

The ADSP-21mod870 package pinout is shown in the table below. Pin names in bold text replace the plain text named functions when Mode C = 1. A + sign separates two functions when either function can be active for either major I/O mode. Signals enclosed in brackets [␣ ] are state bits latched from the value of the pin at the deassertion of RESET .

## LQFP Pin Configurations

|   LQFP Number | Pin Name   |   LQFP Number | Pin Name    |   LQFP Number | Pin Name   |   LQFP Number | Pin Name     |
|---------------|------------|---------------|-------------|---------------|------------|---------------|--------------|
|             1 | A4/ IAD3   |            26 | IRQE + PF4  |            51 | EBR        |            76 | D16          |
|             2 | A5/ IAD4   |            27 | IRQL0 + PF5 |            52 | BR         |            77 | D17          |
|             3 | GND        |            28 | GND         |            53 | EBG        |            78 | D18          |
|             4 | A6/ IAD5   |            29 | IRQL1 + PF6 |            54 | BG         |            79 | D19          |
|             5 | A7/ IAD6   |            30 | IRQ2 + PF7  |            55 | D0/ IAD13  |            80 | GND          |
|             6 | A8/ IAD7   |            31 | DT0         |            56 | D1/ IAD14  |            81 | D20          |
|             7 | A9/ IAD8   |            32 | TFS0        |            57 | D2/ IAD15  |            82 | D21          |
|             8 | A10/ IAD9  |            33 | RFS0        |            58 | D3/ IACK   |            83 | D22          |
|             9 | A11/ IAD10 |            34 | DR0         |            59 | V DD       |            84 | D23          |
|            10 | A12/ IAD11 |            35 | SCLK0       |            60 | GND        |            85 | FL2          |
|            11 | A13/ IAD12 |            36 | V DD        |            61 | D4/ IS     |            86 | FL1          |
|            12 | GND        |            37 | DT1/FO      |            62 | D5/ IAL    |            87 | FL0          |
|            13 | CLKIN      |            38 | TFS1/IRQ1   |            63 | D6/ IRD    |            88 | PF3 [Mode D] |
|            14 | XTAL       |            39 | RFS1/ IRQ0  |            64 | D7/ IWR    |            89 | PF2 [Mode C] |
|            15 | V DD       |            40 | DR1/FI      |            65 | D8         |            90 | V DD         |
|            16 | CLKOUT     |            41 | GND         |            66 | GND        |            91 | PWD          |
|            17 | GND        |            42 | SCLK1       |            67 | V DD       |            92 | GND          |
|            18 | V DD       |            43 | ERESET      |            68 | D9         |            93 | PF1 [Mode B] |
|            19 | WR         |            44 | RESET       |            69 | D10        |            94 | PF0 [Mode A] |
|            20 | RD         |            45 | EMS         |            70 | D11        |            95 | BGH          |
|            21 | BMS        |            46 | EE          |            71 | GND        |            96 | PWDACK       |
|            22 | DMS        |            47 | ECLK        |            72 | D12        |            97 | A0           |
|            23 | PMS        |            48 | ELOUT       |            73 | D13        |            98 | A1/ IAD0     |
|            24 | IOMS       |            49 | ELIN        |            74 | D14        |            99 | A2/ IAD1     |
|            25 | CMS        |            50 | EINT        |            75 | D15        |           100 | A3/ IAD2     |

## OUTLINE DIMENSIONS

Dimensions shown in inches and (mm).

## 100-Lead Metric Thin Plastic Quad Flatpack (LQFP) (ST-100)

<!-- image -->

## NOTE:

THE ACTUAL POSITION OF EACH LEAD IS WITHIN 0.0032 (0.08) FROM ITS IDEAL POSITION WHEN MEASURED IN THE LATERAL DIRECTION. CENTER FIGURES ARE TYPICAL UNLESS OTHERWISE NOTED.

## ORDERING GUIDE

| Part Number       | Ambient Temperature Range   |   Instruction Rate (MHz) | Package Description               | Package Option   |
|-------------------|-----------------------------|--------------------------|-----------------------------------|------------------|
| ADSP-21mod870-000 | 0 C to +70 C                |                     52.0 | Plastic Thin Quad Flatpack (LQFP) | ST-100           |