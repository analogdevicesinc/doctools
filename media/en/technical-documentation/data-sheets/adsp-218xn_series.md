<!-- lastmod 2025-09-05 -->
<!-- image -->

## PERFORMANCE FEATURES

12.5 ns Instruction cycle time @1.8 V (internal), 80 MIPS sustained performance

Single-cycle instruction execution

Single-cycle context switch

3-bus architecture allows dual operand fetches in every instruction cycle

Multifunction instructions

Power-down mode featuring low CMOS standby power dissipation with 200 CLKIN cycle recovery from power-down condition

Low power dissipation in idle mode

## INTEGRATION FEATURES

ADSP-2100 family code compatible (easy to use algebraic syntax), with instruction set extensions

Up to 256K byte of on-chip RAM, configured

Up to 48K words program memory RAM

Up to 56K words data memory RAM

Dual-purpose program memory for both instruction and data storage

Independent ALU, multiplier/accumulator, and barrel shifter computational units

Two independent data address generators

Powerful program sequencer provides zero overhead loop- ing conditional instruction execution

Programmable 16-bit interval timer with prescaler

100-lead LQFP and 144-ball BGA

Figure 1. Functional Block Diagram

<!-- image -->

One Technology Way, P.O.Box 9106,  Norwood, MA  02062-9106 U.S.A. Tel: 781.329.4700 www.analog.com Fax: 781.461.3113 © 2006 Analog Devices, Inc. All rights reserved.

ICE-Port is a trademark of Analog Devices, Inc.

## Rev. A

Information  furnished  by  Analog  Devices  is  believed  to  be  accurate  and  reliable. However,  no  responsibility  is  assumed  by  Analog  Devices  for  its  use,  nor  for  any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## DSP Microcomputer

## ADSP-218xN Series

## SYSTEM INTERFACE FEATURES

Flexible I/O allows 1.8 V, 2.5 V or 3.3 V operation

All inputs tolerate up to 3.6 V regardless of mode

16-bit internal DMA port for high-speed access to on-chip memory (mode selectable)

4M-byte memory interface for storage of data tables and program overlays (mode selectable)

8-bit DMA to byte memory for transparent program and data memory transfers (mode selectable)

Programmable memory strobe and separate I/O memory space permits 'glueless' system design

Programmable wait state generation

Two double-buffered serial ports with companding hardware and automatic data buffering

Automatic booting of on-chip program memory from bytewide external memory, for example, EPROM, or through internal DMA Port

Six external interrupts

13 programmable flag pins provide flexible system signaling UART emulation through software SPORT reconfiguration ICE-Port™ emulator interface supports debugging in final systems

## ADSP-218xN

## TABLE OF CONTENTS

| General Description . . . . . . . . . . . . . . . . . . . . . . . .                     | . . 3   |
|-----------------------------------------------------------------------------------------|---------|
| Architecture Overview . . . . . . . . . . . . . . . . . .                               | . . 3   |
| Modes Of Operation . . . . . . . . . . . . . . . . . . . . .                            | . . 5   |
| Interrupts . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .          | . . 5   |
| Low-power Operation . . . . . . . . . . . . . . . . . . .                               | . . 6   |
| System Interface . . . . . . . . . . . . . . . . . . . . . . . . . .                    | . . 7   |
| Reset . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | . . 8   |
| Power Supplies . . . . . . . . . . . . . . . . . . . . . . . . . . . .                  | . . 8   |
| Memory Architecture . . . . . . . . . . . . . . . . . . .                               | . . 9   |
| Bus Request and Bus Grant . . . . . . . . . . . .                                       | 14      |
| Flag I/O Pins . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .               | 15      |
| Instruction Set Description . . . . . . . . . . . .                                     | 15      |
| Development System . . . . . . . . . . . . . . . . . . . .                              | 15      |
| Additional Information . . . . . . . . . . . . . . . . .                                | 17      |
| Pin Descriptions . . . . . . . . . . . . . . . . . . . . . . . . . . . . .              | 18      |
| Memory Interface Pins . . . . . . . . . . . . . . . . . .                               | 19      |
| Terminating Unused Pins . . . . . . . . . . . . . .                                     | 19      |
| Specifications . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .        | 22      |
| Recommended Operating Conditions                                                        | 22      |
| Electrical Characteristics . . . . . . . . . . . . . . . .                              | 22      |
| Absolute Maximum Ratings . . . . . . . . . . .                                          | 23      |
| ESD Sensitivity . . . . . . . . . . . . . . . . . . . . . . . . . . . .                 | 23      |
| ESD Diode Protection . . . . . . . . . . . . . . . . . . .                              | 24      |
| Power Dissipation . . . . . . . . . . . . . . . . . . . . . . . .                       | 24      |
| Environmental Conditions . . . . . . . . . . . . .                                      | 25      |
| Test Conditions . . . . . . . . . . . . . . . . . . . . . . . . . . .                   | 25      |
| Timing Specifications . . . . . . . . . . . . . . . . . . .                             | 26      |
| LQFP Package Pinout . . . . . . . . . . . . . . . . . . .                               | 40      |
| BGA Package Pinout . . . . . . . . . . . . . . . . . . . .                              | 42      |
| Outline Dimensions . . . . . . . . . . . . . . . . . . . . . . . .                      | 45      |
| Surface Mount Design . . . . . . . . . . . . . . . . . . .                              | 46      |
| Ordering Guide . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .              | 47      |

## REVISION HISTORY

| 8/06-Rev. 0 to Rev.A                                                                                     |                       |
|----------------------------------------------------------------------------------------------------------|-----------------------|
| Miscellaneous Format Updates..........................                                                   | Universal             |
| Applied Corrections or Additional Information to:                                                        |                       |
| Clock Signals . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .    | . . . . . . . . . . 8 |
| External Crystal Connections . . . . . . . . . . . . . . . . . . . . . . .                               | . . . . . . . . . . 8 |
| ADSP-2185 Memory Architecture . . . . . . . . . . . . . . . . .                                          | . . . . . . . . . . 9 |
| Electrical Characteristics . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                     | . . . . . . . . . 22  |
| Absolute Maximum Ratings . . . . . . . . . . . . . . . . . . . . . . . . .                               | . . . . . . . . . 23  |
| ESD Diode Protection . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                     | . . . . . . . . . 24  |
| Memory Read . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .        | . . . . . . . . . 31  |
| Memory Write . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .         | . . . . . . . . . 32  |
| Serial Ports . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | . . . . . . . . . 33  |
| Outline Dimensions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                 | . . . . . . . . . 45  |
| Ordering Guide . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .           | . . . . . . . . . 47  |

## GENERAL DESCRIPTION

The ADSP-218xN series consists of six single chip microcomputers optimized for digital signal processing applications. The high-level block diagram for the ADSP-218xN series members appears on the previous page. All series members are pin-compatible and are differentiated solely by the amount of on-chip SRAM. This feature, combined with ADSP-21xx code compatibility, provides a great deal of flexibility in the design decision. Specific family members are shown in Table 1.

Table 1. ADSP-218xN DSP Microcomputer Family

| Device     |   ProgramMemory (K words) |   DataMemory (K words) |
|------------|---------------------------|------------------------|
| ADSP-2184N |                         4 |                      4 |
| ADSP-2185N |                        16 |                     16 |
| ADSP-2186N |                         8 |                      8 |
| ADSP-2187N |                        32 |                     32 |
| ADSP-2188N |                        48 |                     56 |
| ADSP-2189N |                        32 |                     48 |

ADSP-218xN series members combine the ADSP-2100 family base architecture (three computational units, data address generators, and a program sequencer) with two serial ports, a 16-bit internal DMA port, a byte DMA port, a programmable timer, Flag I/O, extensive interrupt capabilities, and on-chip program and data memory.

ADSP-218xN series members integrate up to 256K bytes of onchip memory configured as up to 48K words (24-bit) of program RAM, and up to 56K words (16-bit) of data RAM. Powerdown circuitry is also provided to meet the low power needs of battery-operated portable equipment. The ADSP-218xN is available in a 100-lead LQFP package and 144-ball BGA.

Fabricated in a high-speed, low-power, 0.18 µm CMOS process, ADSP-218xN series members operate with a 12.5 ns instruction cycle time. Every instruction can execute in a single processor cycle.

The ADSP-218xN's flexible architecture and comprehensive instruction set allow the processor to perform multiple operations in parallel. In one processor cycle, ADSP-218xN series members can:

- Generate the next program address
- Fetch the next instruction
- Perform one or two data moves
- Update one or two data address pointers
- Perform a computational operation

This takes place while the processor continues to:

- Receive and transmit data through the two serial ports
- Receive and/or transmit data through the internal DMAport
- Receive and/or transmit data through the byte DMA port
- Decrement timer

## ARCHITECTURE OVERVIEW

The ADSP-218xN series instruction set provides flexible data moves and multifunction (one or two data moves with a computation) instructions. Every instruction can be executed in a single processor cycle. The ADSP-218xN assembly language uses an algebraic syntax for ease of coding and readability. A comprehensive set of development tools supports program development.

The functional block diagram is an overall block diagram of the ADSP-218xN series. The processor contains three independent computational units: the ALU, the multiplier/accumulator (MAC), and the shifter. The computational units process 16-bit data directly and have provisions to support multiprecision computations. The ALU performs a standard set of arithmetic and logic operations; division primitives are also supported. The MAC performs single-cycle multiply, multiply/add, and multiply/subtract operations with 40 bits of accumulation. The shifter performs logical and arithmetic shifts, normalization, denormalization, and derive exponent operations.

The shifter can be used to efficiently implement numeric format control, including multiword and block floating-point representations.

The internal result (R) bus connects the computational units so that the output of any unit may be the input of any unit on the next cycle.

A powerful program sequencer and two dedicated data address generators ensure efficient delivery of operands to these computational units. The sequencer supports conditional jumps, subroutine calls, and returns in a single cycle. With internal loop counters and loop stacks, ADSP-218xN series members execute looped code with zero overhead; no explicit jump instructions are required to maintain loops.

Two data address generators (DAGs) provide addresses for simultaneous dual operand fetches (from data memory and program memory). Each DAG maintains and updates four address pointers. Whenever the pointer is used to access data (indirect addressing), it is post-modified by the value of one of four possible modify registers. A length value may be associated with each pointer to implement automatic modulo addressing for circular buffers.

Five internal buses provide efficient data transfer:

- Program Memory Address (PMA) Bus
- Program Memory Data (PMD) Bus
- Data Memory Address (DMA) Bus
- Data Memory Data (DMD) Bus
- Result (R) Bus

## ADSP-218xN

The two address buses (PMA and DMA) share a single external address bus, allowing memory to be expanded off-chip, and the two data buses (PMD and DMD) share a single external data bus. Byte memory space and I/O memory space also share the external buses.

Program memory can store both instructions and data, permitting ADSP-218xN series members to fetch two operands in a single cycle, one from program memory and one from data memory. ADSP-218xN series members can fetch an operand from program memory and the next instruction in the same cycle.

In lieu of the address and data bus for external memory connection, ADSP-218xN series members may be configured for 16-bit Internal DMA port (IDMA port) connection to external systems. The IDMA port is made up of 16 data/address pins and five control pins. The IDMA port provides transparent, direct access to the DSP's on-chip program and data RAM.

An interface to low-cost byte-wide memory is provided by the Byte DMA port (BDMA port). The BDMA port is bidirectional and can directly address up to four megabytes of external RAM or ROM for off-chip storage of program overlays or data tables.

The byte memory and I/O memory space interface supports slow memories and I/O memory-mapped peripherals with programmable wait state generation. External devices can gain control of external buses with bus request/grant signals (BR, BGH, and BG). One execution mode (Go Mode) allows the ADSP-218xN to continue running from on-chip memory. Normal execution mode requires the processor to halt while buses are granted.

ADSP-218xN series members can respond to eleven interrupts. There can be up to six external interrupts (one edge-sensitive, two level-sensitive, and three configurable) and seven internal interrupts generated by the timer, the serial ports (SPORT), the BDMA port, and the power-down circuitry. There is also a master RESET signal. The two serial ports provide a complete synchronous serial interface with optional companding in hardware and a wide variety of framed or frameless data transmit and receive modes of operation.

Each port can generate an internal programmable serial clock or accept an external serial clock.

ADSP-218xN series members provide up to 13 general-purpose flag pins. The data input and output pins on SPORT1 can be alternatively configured as an input flag and an output flag. In addition, eight flags are programmable as inputs or outputs, and three flags are always outputs.

A programmable interval timer generates periodic interrupts. A 16-bit count register (TCOUNT) decrements every n processor cycle, where n is a scaling value stored in an 8-bit register (TSCALE). When the value of the count register reaches zero, an interrupt is generated and the count register is reloaded from a 16-bit period register (TPERIOD).

## Serial Ports

ADSP-218xN series members incorporate two complete synchronous serial ports (SPORT0 and SPORT1) for serial communications and multiprocessor communication.

Following is a brief list of the capabilities of the ADSP-218xN SPORTs. For additional information on Serial Ports, refer to the ADSP-218x DSP Hardware Reference .

- SPORTs are bidirectional and have a separate, doublebuffered transmit and receive section.
- SPORTs can use an external serial clock or generate their own serial clock internally.
- SPORTs have independent framing for the receive and transmit sections. Sections run in a frameless mode or with frame synchronization signals internally or externally generated. Frame sync signals are active high or inverted, with either of two pulsewidths and timings.
- SPORTs support serial data word lengths from 3 bits to 16 bits and provide optional A-law and μ -law companding, according to CCITT recommendation G.711.
- SPORT receive and transmit sections can generate unique interrupts on completing a data word transfer.
- SPORTs can receive and transmit an entire circular buffer of data with only one overhead cycle per data word. An interrupt is generated after a data buffer transfer.
- SPORT0 has a multichannel interface to selectively receive and transmit a 24 word or 32-word, time-division multiplexed, serial bitstream.
- SPORT1 can be configured to have two external interrupts (IRQ0 and IRQ1) and the FI and FO signals. The internally generated serial clock may still be used in this configuration.

## MODES OF OPERATION

The ADSP-218xN series modes of operation appear in Table 2.

Table 2. Modes of Operation

| ModeD   |   ModeC |   ModeB |   ModeA | Booting Method                                                                                                                                                                                                                                   |
|---------|---------|---------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| X       |       0 |       0 |       0 | BDMAfeatureisusedtoloadthefirst32programmemorywordsfromthebytememory space. Program execution is held off until all 32 words have been loaded. Chip is configured in Full Memory Mode. 1                                                         |
| X       |       0 |       1 |       0 | No automatic boot operations occur. Program execution starts at external memory location 0. Chip is configured in Full Memory Mode. BDMAcan still be used, but the processor does not automatically use or wait for these operations.            |
| 0       |       1 |       0 |       0 | BDMAfeatureisusedtoloadthefirst32programmemorywordsfromthebytememory space. Program execution is held off until all 32 words have been loaded. Chip is configured in Host Mode. IACK has active pull-down. (Requires additonal hardware.)        |
| 0       |       1 |       0 |       1 | IDMAfeature is used to load any internal memoryasdesired. Program execution is held off until the host writes to internal program memory location 0. Chip is configured in Host Mode. IACK has active pull-down. 1                               |
| 1       |       1 |       0 |       0 | BDMAfeatureisusedtoloadthefirst32programmemorywordsfromthebytememory space. Program execution is held off until all 32 words have been loaded. Chip is configured in Host Mode; IACK requires external pull-down. (Requires additonal hardware.) |
| 1       |       1 |       0 |       1 | IDMAfeature is used to load any internal memoryasdesired. Program execution is held off until the host writes to internal program memory location 0. Chip is configured in Host Mode. IACK requires external pull-down. 1                        |

1 Considered as standard operating settings. Using these configurations allows for easier design and better memory management.

## Setting Memory Mode

Memory Mode selection for the ADSP-218xN series is made during chip reset through the use of the Mode C pin. This pin is multiplexed with the DSP's PF2 pin, so care must be taken in how the mode selection is made. The two methods for selecting the value of Mode C are active and passive.

## Passive Configuration

Passive Configuration involves the use of a pull-up or pulldown resistor connected to the Mode C pin. To minimize power consumption, or if the PF2 pin is to be used as an output in the DSP application, a weak pull-up or pull-down resistance, on the order of 10 k Ω , can be used. This value should be sufficient to pull the pin to the desired level and still allow the pin to operate as a programmable flag output without undue strain on the processor's output driver. For minimum power consumption during power-down, reconfigure PF2 to be an input, as the pullup or pull-down resistance will hold the pin in a known state, and will not switch.

## Active Configuration

Active Configuration involves the use of a three-statable external driver connected to the Mode C pin. A driver's output enable should be connected to the DSP's RESET signal such that it only drives the PF2 pin when RESET is active (low). When RESET is deasserted, the driver should be three-state, thus allowing full use of the PF2 pin as either an input or output. To minimize power consumption during power-down, configure the programmable flag as an output when connected to a threestated buffer. This ensures that the pin will be held at a constant level, and will not oscillate should the three-state driver's level hover around the logic switching point.

## IDMA ACK Configuration

Mode D = 0 and in host mode: IACK is an active, driven signal and cannot be 'wire-OR'ed.' Mode D = 1 and in host mode: IACK is an open drain and requires an external pull-down, but multiple IACK pins can be 'wire-OR'ed' together.

## INTERRUPTS

The interrupt controller allows the processor to respond to the eleven possible interrupts and reset with minimum overhead. ADSP-218xN series members provide four dedicated external interrupt input pins: IRQ2, IRQL0, IRQL1, and IRQE (shared with the PF7-4 pins). In addition, SPORT1 may be reconfigured for IRQ0, IRQ1, FI, and FO, for a total of six external interrupts. The ADSP-218xN also supports internal interrupts from the timer, the byte DMA port, the two serial ports, software, and the power-down control circuit. The interrupt levels are internally prioritized and individually maskable (except power-down and reset). The IRQ2, IRQ0, and IRQ1 input pins can be programmed to be either level- or edge-sensitive. IRQL0 and IRQL1 are level-sensitive and IRQE is edge-sensitive. The priorities and vector addresses of all interrupts are shown in Table 3.

## ADSP-218xN

## Table 3. Interrupt Priority and Interrupt Vector Addresses

| Source Of Interrupt               | Interrupt Vector Address (Hex)   |
|-----------------------------------|----------------------------------|
| Reset (or Power-Up with PUCR = 1) | 0x0000 (Highest Priority)        |
| Power-Down (Nonmaskable)          | 0x002C                           |
| IRQ2                              | 0x0004                           |
| IRQL1                             | 0x0008                           |
| IRQL0                             | 0x000C                           |
| SPORT0 Transmit                   | 0x0010                           |
| SPORT0 Receive                    | 0x0014                           |
| IRQE                              | 0x0018                           |
| BDMAInterrupt                     | 0x001C                           |
| SPORT1 Transmit or IRQ1           | 0x0020                           |
| SPORT1 Receive or IRQ0            | 0x0024                           |
| Timer                             | 0x0028 (Lowest Priority)         |

Interrupt routines can either be nested with higher priority interrupts taking precedence or processed sequentially. Interrupts can be masked or unmasked with the IMASK register. Individual interrupt requests are logically ANDed with the bits in IMASK; the highest priority unmasked interrupt is then selected. The power-down interrupt is nonmaskable.

ADSP-218xN series members mask all interrupts for one instruction cycle following the execution of an instruction that modifies the IMASK register. This does not affect serial port autobuffering or DMA transfers.

The interrupt control register, ICNTL, controls interrupt nesting and defines the IRQ0, IRQ1, and IRQ2 external interrupts to be either edge- or level-sensitive. The IRQE pin is an external edge-sensitive interrupt and can be forced and cleared. The IRQL0 and IRQL1 pins are external level sensitive interrupts.

The IFC register is a write-only register used to force and clear interrupts. On-chip stacks preserve the processor status and are automatically maintained during interrupt handling. The stacks are 12 levels deep to allow interrupt, loop, and subroutine nesting. The following instructions allow global enable or disable servicing of the interrupts (including power-down), regardless of the state of IMASK:

ENA INTS; DIS INTS;

Disabling the interrupts does not affect serial port autobuffering or DMA. When the processor is reset, interrupt servicing is enabled.

## LOW-POWER OPERATION

ADSP-218xN series members have three low-power modes that significantly reduce the power dissipation when the device operates under standby conditions. These modes are:

- Power-Down
- Idle
- Slow Idle

The CLKOUT pin may also be disabled to reduce external power dissipation.

## Power-Down

ADSP-218xN series members have a low-power feature that lets the processor enter a very low-power dormant state through hardware or software control. Following is a brief list of powerdown features. Refer to the ADSP-218x DSP Hardware Reference , 'System Interface' chapter, for detailed information about the power-down feature.

- Quick recovery from power-down. The processor begins executing instructions in as few as 200 CLKIN cycles.
- Support for an externally generated TTL or CMOS processor clock. The external clock can continue running during power-down without affecting the lowest power rating and 200 CLKIN cycle recovery.
- Support for crystal operation includes disabling the oscillator to save power (the processor automatically waits approximately 4096 CLKIN cycles for the crystal oscillator to start or stabilize), and letting the oscillator run to allow 200 CLKIN cycle start-up.
- Power-down is initiated by either the power-down pin (PWD) or the software power-down force bit. Interrupt support allows an unlimited number of instructions to be executed before optionally powering down. The powerdown interrupt also can be used as a nonmaskable, edgesensitive interrupt.
- Context clear/save control allows the processor to continue where it left off or start with a clean context when leaving the power-down state.
- The RESET pin also can be used to terminate power-down.
- Power-down acknowledge pin (PWDACK) indicates when the processor has entered power-down.

## Idle

When the ADSP-218xN is in the Idle Mode, the processor waits indefinitely in a low-power state until an interrupt occurs. When an unmasked interrupt occurs, it is serviced; execution then continues with the instruction following the IDLE instruction. In Idle mode IDMA, BDMA, and autobuffer cycle steals still occur.

## Slow Idle

The IDLE instruction is enhanced on ADSP-218xN series members to let the processor's internal clock signal be slowed, further reducing power consumption. The reduced clock frequency, a programmable fraction of the normal clock rate, is specified by a selectable divisor given in the IDLE instruction.

The format of the instruction is:

IDLE (n);

where n = 16, 32, 64, or 128. This instruction keeps the processor fully functional, but operating at the slower clock rate. While it is in this state, the processor's other internal clock signals,

such as SCLK, CLKOUT, and timer clock, are reduced by the same ratio. The default form of the instruction, when no clock divisor is given, is the standard IDLE instruction.

When the IDLE (n) instruction is used, it effectively slows down the processor's internal clock and thus its response time to incoming interrupts. The one-cycle response time of the standard idle state is increased by n, the clock divisor. When an enabled interrupt is received, ADSP-218xN series members remain in the idle state for up to a maximum of n processor cycles (n = 16, 32, 64, or 128) before resuming normal operation.

When the IDLE (n) instruction is used in systems that have an externally generated serial clock (SCLK), the serial clock rate may be faster than the processor's reduced internal clock rate. Under these conditions, interrupts must not be generated at a

## ADSP-218xN

faster rate than can be serviced, due to the additional time the processor takes to come out of the idle state (a maximum of n processor cycles).

## SYSTEM INTERFACE

Figure 2 shows typical basic system configurations with the ADSP-218xN series, two serial devices, a byte-wide EPROM, and optional external program and data overlay memories (mode-selectable). Programmable wait state generation allows the processor to connect easily to slow peripheral devices. ADSP-218xN series members also provide four external interrupts and two serial ports or six external interrupts and one serial port. Host Memory Mode allows access to the full external data bus, but limits addressing to a single address bit (A0). Through the use of external hardware, additional system peripherals can be added in this mode to generate and latch address signals.

Figure 2. Basic System Interface

<!-- image -->

## ADSP-218xN

## Clock Signals

ADSP-218xN series members can be clocked by either a crystal or a TTL-compatible clock signal.

The CLKIN input cannot be halted, changed during operation, nor operated below the specified frequency during normal operation. The only exception is while the processor is in the powerdown state. For additional information, refer to the ADSP-218x DSP Hardware Reference , for detailed information on this power-down feature.

If an external clock is used, it should be a TTL-compatible signal running at half the instruction rate. The signal is connected to the processor's CLKIN input. When an external clock is used, the XTAL pin must be left unconnected.

ADSP-218xN series members use an input clock with a frequency equal to half the instruction rate; a 40 MHz input clock yields a 12.5  ns processor cycle (which is equivalent to 80 MHz). Normally, instructions are executed in a single processor cycle. All device timing is relative to the internal instruction clock rate, which is indicated by the CLKOUT signal when enabled.

Because ADSP-218xN series members include an on-chip oscillator circuit, an external crystal may be used. The crystal should be connected across the CLKIN and XTAL pins, with two capacitors connected as shown in Figure 3. Capacitor values are dependent on crystal type and should be specified by the crystal manufacturer. A parallel-resonant, fundamental frequency, microprocessor-grade crystal should be used. To provide an adequate feedback path around the internal amplifier circuit, place a resistor in parallel with the circuit, as shown in Figure 3.

A clock output (CLKOUT) signal is generated by the processor at the processor's cycle rate. This can be enabled and disabled by the CLKODIS bit in the SPORT0 Autobuffer Control Register.

Figure 3. External Crystal Connections

<!-- image -->

## RESET

The RESET signal initiates a master reset of the ADSP-218xN. The RESET signal must be asserted during the power-up sequence to assure proper initialization. RESET during initial power-up must be held long enough to allow the internal clock to stabilize. If RESET is activated any time after power-up, the clock continues to run and does not require stabilization time.

The power-up sequence is defined as the total time required for the crystal oscillator circuit to stabilize after a valid V DD is applied to the processor, and for the internal phase-locked loop (PLL) to lock onto the specific crystal frequency. A minimum of

2000 CLKIN cycles ensures that the PLL has locked, but does not include the crystal oscillator start-up time. During this power-up sequence the RESET signal should be held low. On any subsequent resets, the RESET signal must meet the minimum pulse-width specification (tRSP).

The RESET input contains some hysteresis; however, if an RC circuit is used to generate the RESET signal, the use of an external Schmitt trigger is recommended.

The master reset sets all internal stack pointers to the empty stack condition, masks all interrupts, and clears the MSTAT register. When RESET is released, if there is no pending bus request and the chip is configured for booting, the boot-loading sequence is performed. The first instruction is fetched from onchip program memory location 0x0000 once boot loading completes.

## POWER SUPPLIES

ADSP-218xN series members have separate power supply connections for the internal (VDDINT) and external (VDDEXT) power supplies. The internal supply must meet the 1.8 V requirement. The external supply can be connected to a 1.8 V, 2.5 V, or 3.3 V supply. All external supply pins must be connected to the same supply. All input and I/O pins can tolerate input voltages up to 3.6 V, regardless of the external supply voltage. This feature provides maximum flexibility in mixing 1.8 V, 2.5 V, or 3.3 V components.

## MEMORY ARCHITECTURE

The ADSP-218xN series provides a variety of memory and peripheral interface options. The key functional groups are Program Memory, Data Memory, Byte Memory, and I/O. Refer to

Figure 4 through Figure 9, Table 4 on Page 11, and Table 5 on Page 11 for PM and DM memory allocations in the ADSP218xN series.

<!-- image -->

Figure 4. ADSP-2184 Memory Architecture

Figure 5. ADSP-2185 Memory Architecture

<!-- image -->

Figure 6. ADSP-2186 Memory Architecture

<!-- image -->

## ADSP-218xN

<!-- image -->

Figure 7. ADSP-2187 Memory Architecture

Figure 8. ADSP-2188 Memory Architecture

<!-- image -->

Figure 9. ADSP-2189 Memory Architecture

<!-- image -->

DSPs of this series have up to 48K words of Program Memory RAM on chip, and the capability of accessing up to two 8K external memory overlay spaces, using the external data bus.

## Program Memory

Program Memory (Full Memory Mode) is a 24-bit-wide space for storing both instruction opcodes and data. The member

Program Memory (Host Mode) allows access to all internal memory. External overlay access is limited by a single external address line (A0). External program execution is not available in host mode due to a restricted data bus that is only 16 bits wide.

## Table 4. PMOVLAY Bits

| Processor      | PMOVLAY                    | Memory             | A13            | A12-0                                        |
|----------------|----------------------------|--------------------|----------------|----------------------------------------------|
| ADSP-2184N     | No Internal Overlay Region | Not Applicable     | Not Applicable | Not Applicable                               |
| ADSP-2185N     | 0                          | Internal Overlay   | Not Applicable | Not Applicable                               |
| ADSP-2186N     | No Internal Overlay Region | Not Applicable     | Not Applicable | Not Applicable                               |
| ADSP-2187N     | 0, 4, 5                    | Internal Overlay   | Not Applicable | Not Applicable                               |
| ADSP-2188N     | 0, 4, 5, 6, 7              | Internal Overlay   | Not Applicable | Not Applicable                               |
| ADSP-2189N     | 0, 4, 5                    | Internal Overlay   | Not Applicable | Not Applicable                               |
| All Processors | 1                          | External Overlay 1 | 0              | 13 LSBs of Address Between 0x2000 and 0x3FFF |
| All Processors | 2                          | External Overlay 2 | 1              | 13 LSBs of Address Between 0x2000 and 0x3FFF |

## Data Memory

Data Memory (Full Memory Mode) is a 16-bit-wide space used for the storage of data variables and for memory-mapped control registers. The ADSP-218xN series has up to 56K words of Data Memory RAM on-chip. Part of this space is used by 32 memory-mapped registers. Support also exists for up to two 8K external memory overlay spaces through the external data bus.

## Table 5. DMOVLAY Bits

| Processor      | DMOVLAY                    | Memory             | A13            | A12-0                                        |
|----------------|----------------------------|--------------------|----------------|----------------------------------------------|
| ADSP-2184N     | No Internal Overlay Region | Not Applicable     | Not Applicable | Not Applicable                               |
| ADSP-2185N     | 0                          | Internal Overlay   | Not Applicable | Not Applicable                               |
| ADSP-2186N     | No Internal Overlay Region | Not Applicable     | Not Applicable | Not Applicable                               |
| ADSP-2187N     | 0, 4, 5                    | Internal Overlay   | Not Applicable | Not Applicable                               |
| ADSP-2188N     | 0, 4, 5, 6, 7, 8           | Internal Overlay   | Not Applicable | Not Applicable                               |
| ADSP-2189N     | 0, 4, 5, 6, 7              | Internal Overlay   | Not Applicable | Not Applicable                               |
| All Processors | 1                          | External Overlay 1 | 0              | 13 LSBs of Address Between 0x0000 and 0x1FFF |
| All Processors | 2                          | External Overlay 2 | 1              | 13 LSBs of Address Between 0x0000 and 0x1FFF |

## Memory-Mapped Registers (New to the ADSP-218xM and N series)

ADSP-218xN series members have three memory-mapped registers that differ from other ADSP-21xx Family DSPs. The slight modifications to these registers (Wait State Control, Programmable Flag and Composite Select Control, and System Control) provide the ADSP-218xN's wait state and BMS control features. Default bit values at reset are shown; if no value is shown, the bit is undefined at reset. Reserved bits are shown on a grey field. These bits should always be written with zeros.

## I/O Space (Full Memory Mode)

ADSP-218xN series members support an additional external memory space called I/O space. This space is designed to support simple connections to peripherals (such as data converters and external registers) or to bus interface ASIC data registers. I/O space supports 2048 locations of 16-bit wide data. The lower eleven bits of the external address bus are used; the upper three bits are undefined.

Two instructions were added to the core ADSP-2100 Family instruction set to read from and write to I/O memory space. The I/O space also has four dedicated three-bit wait state registers,

All internal accesses complete in one cycle. Accesses to external memory are timed using the wait states specified by the DWAIT register and the wait state mode bit.

Data Memory (Host Mode) allows access to all internal memory. External overlay access is limited by a single external address line (A0).

## ADSP-218xN

IOWAIT0-3 as shown in Figure 10, which in combination with the wait state mode bit, specify up to 15 wait states to be automatically generated for each of four regions. The wait states act on address ranges, as shown in Table 6.

Note : In Full Memory Mode, all 2048 locations of I/O space are directly addressable. In Host Memory Mode, only address pin A0 is available; therefore, additional logic is required externally to achieve complete addressability of the 2048 I/O space locations.

## Table 6. Wait States

Figure 10. Wait State Control Register

| Address Range   | Wait State Register                    |
|-----------------|----------------------------------------|
| 0x000-0x1FF     | IOWAIT0 and Wait State Mode Select Bit |
| 0x200-0x3FF     | IOWAIT1 and Wait State Mode Select Bit |
| 0x400-0x5FF     | IOWAIT2 and Wait State Mode Select Bit |
| 0x600-0x7FF     | IOWAIT3 and Wait State Mode Select Bit |

<!-- image -->

## Composite Memory Select

ADSP-218xN series members have a programmable memory select signal that is useful for generating memory select signals for memories mapped to more than one space. The CMS signal is generated to have the same timing as each of the individual memory select signals (PMS, DMS, BMS, IOMS) but can combine their functionality. Each bit in the CMSSEL register, when set, causes the CMS signal to be asserted when the selected memory select is asserted. For example, to use a 32K word memory to act as both program and data memory, set the PMS and DMS bits in the CMSSEL register and use the CMS pin to drive the chip select of the memory, and use either DMS or PMS as the additional address bit.

The CMS pin functions like the other memory select signals with the same timing and bus request logic. A 1 in the enable bit causes the assertion of the CMS signal at the same time as the selected memory select signal. All enable bits default to 1 at reset, except the BMS bit.

See Figure 11 and Figure 12 for illustration of the programmable flag and composite control register and the system control register.

## Byte Memory Select

The ADSP-218xN's BMS disable feature combined with the CMS pin allows use of multiple memories in the byte memory space. For example, an EPROM could be attached to the BMS

Figure 11. Programmable Flag and Composite Control Register

<!-- image -->

Figure 12. System Control Register

<!-- image -->

select, and a flash memory could be connected to CMS. Because at reset BMS is enabled, the EPROM would be used for booting. After booting, software could disable BMS and set the CMS signal to respond to BMS, enabling the flash memory.

## Byte Memory

The byte memory space is a bidirectional, 8-bit-wide, external memory space used to store programs and data. Byte memory is accessed using the BDMA feature. The byte memory space consists of 256 pages, each of which is 16K × 8 bits.

The byte memory space on the ADSP-218xN series supports read and write operations as well as four different data formats. The byte memory uses data bits 15-8 for data. The byte memory uses data bits 23-16 and address bits 13-0 to create a 22-bit address. This allows up to a 4 megabit × 8 (32 megabit) ROM or RAM to be used without glue logic. All byte memory accesses are timed by the BMWAIT register and the wait state mode bit.

## Byte Memory DMA (BDMA, Full Memory Mode)

The byte memory DMA controller (Figure 13) allows loading and storing of program instructions and data using the byte memory space. The BDMA circuit is able to access the byte memory space while the processor is operating normally and steals only one DSP cycle per 8-, 16-, or 24-bit word transferred.

Figure 13. BDMA Control Register

<!-- image -->

The BDMA circuit supports four different data formats that are selected by the BTYPE register field. The appropriate number of 8-bit accesses are done from the byte memory space to build the word size selected. Table 7 shows the data formats supported by the BDMA circuit.

## Table 7. Data Formats

|   BTYPE | InternalMemory Space   |   Word Size | Alignment   |
|---------|------------------------|-------------|-------------|
|      00 | Program Memory         |          24 | Full Word   |
|      01 | Data Memory            |          16 | Full Word   |
|      10 | Data Memory            |           8 | MSBs        |
|      11 | Data Memory            |           8 | LSBs        |

Unused bits in the 8-bit data memory formats are filled with 0s. The BIAD register field is used to specify the starting address for the on-chip memory involved with the transfer. The 14-bit BEAD register specifies the starting address for the external byte memory space. The 8-bit BMPAGE register specifies the starting page for the external byte memory space. The BDIR register field selects the direction of the transfer. Finally, the 14-bit BWCOUNT register specifies the number of DSP words to transfer and initiates the BDMA circuit transfers.

BDMA accesses can cross page boundaries during sequential addressing. A BDMA interrupt is generated on the completion of the number of transfers specified by the BWCOUNT register.

The BWCOUNT register is updated after each transfer so it can be used to check the status of the transfers. When it reaches zero, the transfers have finished and a BDMA interrupt is generated. The BMPAGE and BEAD registers must not be accessed by the DSP during BDMA operations.

The source or destination of a BDMA transfer will always be onchip program or data memory.

When the BWCOUNT register is written with a nonzero value the BDMA circuit starts executing byte memory accesses with wait states set by BMWAIT. These accesses continue until the count reaches zero. When enough accesses have occurred to create a destination word, it is transferred to or from on-chip memory. The transfer takes one DSP cycle. DSP accesses to external memory have priority over BDMA byte memory accesses.

The BDMA Context Reset bit (BCR) controls whether the processor is held off while the BDMA accesses are occurring. Setting the BCR bit to 0 allows the processor to continue operations. Setting the BCR bit to 1 causes the processor to stop execution while the BDMA accesses are occurring, to clear the context of the processor, and start execution at address 0 when the BDMA accesses have completed.

The BDMA overlay bits specify the OVLAY memory blocks to be accessed for internal memory. Set these bits as indicated in Figure 13.

Note : BDMA cannot access external overlay memory regions 1 and 2.

The BMWAIT field, which has four bits on ADSP-218xN series members, allows selection up to 15 wait states for BDMA transfers.

## Internal Memory DMA Port (IDMA Port; Host Memory Mode)

The IDMA Port provides an efficient means of communication between a host system and ADSP-218xN series members. The port is used to access the on-chip program memory and data memory of the DSP with only one DSP cycle per word overhead. The IDMA port cannot, however, be used to write to the DSP's memory-mapped control registers. A typical IDMA transfer process is shown as follows:

1. Host starts IDMA transfer.
2. Host checks IACK control line to see if the DSP is busy.
3. Host uses IS and IAL control lines to latch either the DMA starting address (IDMAA) or the PM/DM OVLAY selection into the DSP's IDMA control registers. If Bit 15 = 1, the values of Bits 7-0 represent the IDMA overlay; Bits 14-8 must be set to 0. If Bit 15 = 0, the value of Bits 13-0 represent the starting address of internal memory to be accessed and Bit 14 reflects PM or DM for access. Set IDDMOVLAY and IDPMOVLAY bits in the IDMA overlay register as indicted in Table 8.
4. Host uses IS and IRD (or IWR) to read (or write) DSP internal memory (PM or DM).
5. Host checks IACK line to see if the DSP has completed the previous IDMA operation.
6. Host ends IDMA transfer.

## Table 8. IDMA/BDMA Overlay Bits

| Processor   | IDMA/BDMA PMOVLAY   | IDMA/BDMA DMOVLAY   |
|-------------|---------------------|---------------------|
| ADSP-2184N  | 0                   | 0                   |
| ADSP-2185N  | 0                   | 0                   |
| ADSP-2186N  | 0                   | 0                   |
| ADSP-2187N  | 0, 4, 5             | 0, 4, 5             |
| ADSP-2188N  | 0, 4, 5, 6, 7       | 0, 4, 5, 6, 7, 8    |
| ADSP-2189N  | 0, 4, 5             | 0, 4, 5, 6, 7       |

## ADSP-218xN

The IDMA port has a 16-bit multiplexed address and data bus and supports 24-bit program memory. The IDMA port is completely asynchronous and can be written while the ADSP-218xN is operating at full speed.

The DSP memory address is latched and then automatically incremented after each IDMA transaction. An external device can therefore access a block of sequentially addressed memory by specifying only the starting address of the block. This increases throughput as the address does not have to be sent for each memory access.

IDMA port access occurs in two phases. The first is the IDMA Address Latch cycle. When the acknowledge is asserted, a 14-bit address and 1-bit destination type can be driven onto the bus by an external device. The address specifies an on-chip memory location, the destination type specifies whether it is a DM or PM access. The falling edge of the IDMA address latch signal (IAL) or the missing edge of the IDMA select signal (IS) latches this value into the IDMAA register.

Once the address is stored, data can be read from, or written to, the ADSP-218xN's on-chip memory. Asserting the select line (IS) and the appropriate read or write line (IRD and IWR respectively) signals the ADSP-218xN that a particular transaction is required. In either case, there is a one-processor-cycle delay for synchronization. The memory access consumes one additional processor cycle.

Once an access has occurred, the latched address is automatically incremented, and another access can occur.

Through the IDMAA register, the DSP can also specify the starting address and data format for DMA operation. Asserting the IDMA port select (IS) and address latch enable (IAL) directs the ADSP-218xN to write the address onto the IAD14-0 bus into the IDMA Control Register (Figure 14). If Bit 15 is set to 0, IDMA latches the address. If Bit 15 is set to 1, IDMA latches into the OVLAY register. This register, also shown in Figure 14, is memory-mapped at address DM (0x3FE0). Note that the latched address (IDMAA) cannot be read back by the host.

When Bit 14 in 0x3FE7 is set to zero, short reads use the timing shown in Figure 36 on Page 38. When Bit 14 in 0x3FE7 is set to 1, timing in Figure 37 on Page 39 applies for short reads in short read only mode. Set IDDMOVLAY and IDPMOVLAY bits in the IDMA overlay register as indicated in Table 8. Refer to the ADSP-218x DSP Hardware Reference for additional details.

Note : In full memory mode all locations of 4M-byte memory space are directly addressable. In host memory mode, only address pin A0 is available, requiring additional external logic to provide address information for the byte.

## Bootstrap Loading (Booting)

ADSP-218xN series members have two mechanisms to allow automatic loading of the internal program memory after reset. The method for booting is controlled by the Mode A, B, and C configuration bits.

When the mode pins specify BDMA booting, the ADSP-218xN initiates a BDMA boot sequence when reset is released.

Figure 14. IDMA OVLAY/Control Registers

<!-- image -->

The BDMA interface is set up during reset to the following defaults when BDMA booting is specified: the BDIR, BMPAGE, BIAD, and BEAD registers are set to 0, the BTYPE register is set to 0 to specify program memory 24-bit words, and the BWCOUNT register is set to 32. This causes 32 words of onchip program memory to be loaded from byte memory. These 32 words are used to set up the BDMA to load in the remaining program code. The BCR bit is also set to 1, which causes program execution to be held off until all 32 words are loaded into on-chip program memory. Execution then begins at address 0.

The ADSP-2100 Family development software (Revision 5.02 and later) fully supports the BDMA booting feature and can generate byte memory space-compatible boot code.

The IDLE instruction can also be used to allow the processor to hold off execution while booting continues through the BDMA interface. For BDMA accesses while in Host Mode, the addresses to boot memory must be constructed externally to the ADSP-218xN. The only memory address bit provided by the processor is A0.

## IDMA Port Booting

ADSP-218xN series members can also boot programs through its internal DMA port. If Mode C = 1, Mode B = 0, and Mode A = 1, the ADSP-218xN boots from the IDMA port. IDMA feature can load as much on-chip memory as desired. Program execution is held off until the host writes to on-chip program memory location 0.

## BUS REQUEST AND BUS GRANT

ADSP-218xN series members can relinquish control of the data and address buses to an external device. When the external device requires access to memory, it asserts the Bus Request

(BR) signal. If the ADSP-218xN is not performing an external memory access, it responds to the active BR input in the following processor cycle by:

- Three-stating the data and address buses and the PMS, DMS, BMS, CMS, IOMS, RD, WR output drivers,
- Asserting the bus grant (BG) signal, and
- Halting program execution.

If Go Mode is enabled, the ADSP-218xN will not halt program execution until it encounters an instruction that requires an external memory access.

If an ADSP-218xN series member is performing an external memory access when the external device asserts the BR signal, it will not three-state the memory interfaces nor assert the BG signal until the processor cycle after the access completes. The instruction does not need to be completed when the bus is granted. If a single instruction requires two external memory accesses, the bus will be granted between the two accesses.

When the BR signal is released, the processor releases the BG signal, re-enables the output drivers, and continues program execution from the point at which it stopped.

The bus request feature operates at all times, including when the processor is booting and when RESET is active.

The BGH pin is asserted when an ADSP-218xN series member requires the external bus for a memory or BDMA access, but is stopped. The other device can release the bus by deasserting bus request. Once the bus is released, the ADSP-218xN deasserts BG and BGH and executes the external memory access.

## FLAG I/O PINS

ADSP-218xN series members have eight general-purpose programmable input/output flag pins. They are controlled by two memory-mapped registers. The PFTYPE register determines the direction, 1 = output and 0 = input. The PFDATA register is used to read and write the values on the pins. Data being read from a pin configured as an input is synchronized to the ADSP-218xN's clock. Bits that are programmed as outputs will read the value being output. The PF pins default to input during reset.

In addition to the programmable flags, ADSP-218xN series members have five fixed-mode flags, FI, FO, FL0, FL1, and FL2. FL0 to FL2 are dedicated output flags. FI and FO are available as an alternate configuration of SPORT1.

Note: Pins PF0, PF1, PF2, and PF3 are also used for device configuration during reset.

## INSTRUCTION SET DESCRIPTION

The ADSP-218xN series assembly language instruction set has an algebraic syntax that was designed for ease of coding and readability. The assembly language, which takes full advantage of the processor's unique architecture, offers the following benefits:

- The algebraic syntax eliminates the need to remember cryptic assembler mnemonics. For example, a typical arithmetic add instruction, such as AR = AX0 + AY0, resembles a simple equation.
- Every instruction assembles into a single, 24-bit word that can execute in a single instruction cycle.
- The syntax is a superset ADSP-2100 Family assembly language and is completely source and object code compatible with other family members. Programs may need to be relocated to utilize on-chip memory and conform to the ADSP-218xN's interrupt vector and reset vector map.
- Sixteen condition codes are available. For conditional jump, call, return, or arithmetic instructions, the condition can be checked and the operation executed in the same instruction cycle.
- Multifunction instructions allow parallel execution of an arithmetic instruction, with up to two fetches or one write to processor memory space, during a single instruction cycle.

## DEVELOPMENT SYSTEM

Analog Devices' wide range of software and hardware development tools supports the ADSP-218xN series. The DSP tools include an integrated development environment, an evaluation kit, and a serial port emulator.

VisualDSP++ ® † is an integrated development environment, allowing for fast and easy development, debug, and deployment. The VisualDSP++ project management environment lets programmers develop and debug an application. This environment includes an easy-to-use assembler that is based on an algebraic syntax; an archiver (librarian/library builder); a linker; a PROM-splitter utility; a cycle-accurate, instruction-level simulator; a C compiler; and a C run-time library that includes DSP and mathematical functions.

Debugging both C and assembly programs with the VisualDSP++ debugger, programmers can:

- View mixed C and assembly code (interleaved source and object information)
- Insert break points
- Set conditional breakpoints on registers, memory, and stacks
- Trace instruction execution

† VisualDSP++ is a registered trademark of Analog Devices, Inc.

## ADSP-218xN

- Fill and dump memory
- Source level debugging

The VisualDSP++ IDE lets programmers define and manage DSP software development. The dialog boxes and property pages let programmers configure and manage all of the ADSP218xN development tools, including the syntax highlighting in the VisualDSP++ editor. This capability controls how the development tools process inputs and generate outputs.

The ADSP-2189M EZ-KIT Lite ® † provides developers with a cost-effective method for initial evaluation of the powerful ADSP-218xN DSP family architecture. The ADSP-2189M EZKIT Lite includes a stand-alone ADSP-2189M DSP board supported by an evaluation suite of VisualDSP++. With this EZKIT Lite, users can learn about DSP hardware and software development and evaluate potential applications of the ADSP218xN series. The ADSP-2189M EZ-KIT Lite provides an evaluation suite of the VisualDSP++ development environment with the C compiler, assembler, and linker. The size of the DSP executable that can be built using the EZ-KIT Lite tools is limited to 8K words.

The EZ-KIT Lite includes the following features:

- 75 MHz ADSP-2189M
- Full 16-Bit Stereo Audio I/O with AD73322 Codec
- RS-232 Interface
- EZ-ICE Connector for Emulator Control
- DSP Demonstration Programs
- Evaluation Suite of VisualDSP++

The ADSP-218x EZ-ICE ® ‡ Emulator provides an easier and more cost-effective method for engineers to develop and optimize DSP systems, shortening product development cycles for faster time-to-market. ADSP-218xN series members integrate on-chip emulation support with a 14-pin ICE-Port interface. This interface provides a simpler target board connection that requires fewer mechanical clearance considerations than other ADSP-2100 Family EZ-ICEs. ADSP-218xN series members need not be removed from the target system when using the EZICE, nor are any adapters needed. Due to the small footprint of the EZ-ICE connector, emulation can be supported in final board designs.The EZ-ICE performs a full range of functions, including:

- In-target operation
- Up to 20 breakpoints
- Single-step or full-speed operation
- Registers and memory values can be examined and altered
- PC upload and download functions
- Instruction-level emulation of program booting and execution

† EZ-KIT Lite is a registered trademark of Analog Devices, Inc.

‡ EZ-ICE is a registered trademark of Analog Devices, Inc.

- Complete assembly and disassembly of instructions
- C source-level debugging

## Designing an EZ-ICE-Compatible System

ADSP-218xN series members have on-chip emulation support and an ICE-Port, a special set of pins that interface to the EZICE. These features allow in-circuit emulation without replacing the target system processor by using only a 14-pin connection from the target system to the EZ-ICE. Target systems must have a 14-pin connector to accept the EZ-ICE's incircuit probe, a 14-pin plug.

Note: The EZ-ICE uses the same VDD voltage as the VDD voltage used for VDDEXT. Because the input pins of the ADSP-218xN series members are tolerant to input voltages up to 3.6 V, regardless of the value of V DDEXT, the voltage setting for the EZICE must not exceed 3.3 V.

Issuing the chip reset command during emulation causes the DSP to perform a full chip reset, including a reset of its memory mode. Therefore, it is vital that the mode pins are set correctly PRIOR to issuing a chip reset command from the emulator user interface. If a passive method of maintaining mode information is being used (as discussed in Setting Memory Mode on Page 5), it does not matter that the mode information is latched by an emulator reset. However, if the RESET pin is being used as a method of setting the value of the mode pins, the effects of an emulator reset must be taken into consideration.

One method of ensuring that the values located on the mode pins are those desired is to construct a circuit like the one shown in Figure 15. This circuit forces the value located on the Mode A pin to logic high, regardless of whether it is latched via the RESET or ERESET pin.

Figure 15. Mode A Pin/EZ-ICE Circuit

<!-- image -->

The ICE-Port interface consists of the following ADSP-218xN pins: EBR, EINT, EE, EBG, ECLK, ERESET, ELIN, EMS, and ELOUT.

These ADSP-218xN pins must be connected only to the EZ-ICE connector in the target system. These pins have no function except during emulation, and do not require pull-up or pulldown resistors. The traces for these signals between the ADSP-218xN and the connector must be kept as short as possible, no longer than 3 inches.

The following pins are also used by the EZ-ICE: BR, BG, RESET, and GND.

The EZ-ICE uses the EE (emulator enable) signal to take control of the ADSP-218xN in the target system. This causes the processor to use its ERESET, EBR, and EBG pins instead of the RESET, BR, and BG pins. The BG output is three-stated. These signals do not need to be jumper-isolated in the system.

The EZ-ICE connects to the target system via a ribbon cable and a 14-pin female plug. The female plug is plugged onto the 14pin connector (a pin strip header) on the target board.

## Target Board Connector for EZ-ICE Probe

The EZ-ICE connector (a standard pin strip header) is shown in Figure 16. This connector must be added to the target board design to use the EZ-ICE. Be sure to allow enough room in the system to fit the EZ-ICE probe onto the 14-pin connector.

Figure 16. Target Board Connector for EZ-ICE

<!-- image -->

The 14-pin, 2-row pin strip header is keyed at the Pin 7 location-Pin 7 must be removed from the header. The pins must be 0.025 inch square and at least 0.20 inch in length. Pin spacing should be 0.1 × 0.1 inch. The pin strip header must have at least 0.15 inch clearance on all sides to accept the EZ-ICE probe plug.

Pin strip headers are available from vendors such as 3M, McKenzie, and Samtec.

## Target Memory Interface

For the target system to be compatible with the EZ-ICE emulator, it must comply with the following memory interface guidelines:

Design the Program Memory (PM), Data Memory (DM), Byte Memory (BM), I/O Memory (IOM), and Composite Memory (CM) external interfaces to comply with worst-case device timing requirements and switching characteristics as specified in this data sheet. The performance of the EZ-ICE may approach published worst-case specification for some memory access timing requirements and switching characteristics.

Note: If the target does not meet the worst-case chip specification for memory access parameters, the circuitry may not be able to be emulated at the desired CLKIN frequency. Depending on the severity of the specification violation, the system may be difficult to manufacture, as DSP components statistically vary in switching characteristic and timing requirements, within published limits.

Restriction: All memory strobe signals on the ADSP-218xN (RD, WR, PMS, DMS, BMS, CMS, and IOMS) used in the target system must have 10 k Ω pull-up resistors connected when the EZ-ICE is being used. The pull-up resistors are necessary because there are no internal pull-ups to guarantee their state during prolonged three-state conditions resulting from typical EZ-ICE debugging sessions. These resistors may be removed when the EZ-ICE is not being used.

## Target System Interface Signals

When the EZ-ICE board is installed, the performance on some system signals changes. Design the system to be compatible with the following system interface signal changes introduced by the EZ-ICE board:

- EZ-ICE emulation introduces an 8 ns propagation delay between the target circuitry and the DSP on the RESET signal.
- EZ-ICE emulation introduces an 8 ns propagation delay between the target circuitry and the DSP on the BR signal.
- EZ-ICE emulation ignores RESET and BR, when single-stepping.
- EZ-ICE emulation ignores RESET and BR when in Emulator Space (DSP halted).
- EZ-ICE emulation ignores the state of target BR in certain modes. As a result, the target system may take control of the DSP's external memory bus only if bus grant (BG) is asserted by the EZ-ICE board's DSP.

## ADDITIONAL INFORMATION

This data sheet provides a general overview of ADSP-218xN series functionality. For additional information on the architecture and instruction set of the processor, refer to the ADSP-218x DSP Hardware Reference and the ADSP-218x DSP Instruction Set Reference.

## PIN DESCRIPTIONS

ADSP-218xN series members are available in a 100-lead LQFP package and a 144-ball BGA package. In order to maintain maximum functionality and reduce package size and pin count, some serial port, programmable flag, interrupt and external bus pins have dual, multiplexed functionality. The external bus pins are configured during RESET only, while serial port pins are

Table 9. Common-Mode Pins

| PinName        | No. of Pins   | I/O   | Function                                            |
|----------------|---------------|-------|-----------------------------------------------------|
| RESET          | 1             | I     | Processor Reset Input                               |
| BR             | 1             | I     | Bus Request Input                                   |
| BG             | 1             | O     | Bus Grant Output                                    |
| BGH            | 1             | O     | Bus Grant Hung Output                               |
| DMS            | 1             | O     | Data Memory Select Output                           |
| PMS            | 1             | O     | Program Memory Select Output                        |
| IOMS           | 1             | O     | Memory Select Output                                |
| BMS            | 1             | O     | Byte Memory Select Output                           |
| CMS            | 1             | O     | Combined Memory Select Output                       |
| RD             | 1             | O     | Memory Read Enable Output                           |
| WR             | 1             | O     | Memory Write Enable Output                          |
| IRQ2           | 1             | I     | Edge- or Level-Sensitive Interrupt Request 1        |
| PF7            |               | I/O   | Programmable I/O Pin                                |
| IRQL1          | 1             | I     | Level-Sensitive Interrupt Requests 1                |
| PF6            |               | I/O   | Programmable I/O Pin                                |
| IRQL0          | 1             | I     | Level-Sensitive Interrupt Requests 1                |
| PF5            |               | I/O   | Programmable I/O Pin                                |
| IRQE           | 1             | I     | Edge-Sensitive Interrupt Requests 1                 |
| PF4            |               | I/O   | Programmable I/O Pin                                |
| ModeD          | 1             | I     | Mode Select Input-Checked Only During RESET         |
| PF3            |               | I/O   | Programmable I/O Pin During Normal Operation        |
| Mode C         | 1             | I     | Mode Select Input-Checked Only During RESET         |
| PF2            |               | I/O   | Programmable I/O Pin During Normal Operation        |
| Mode B         | 1             | I     | Mode Select Input-Checked Only During RESET         |
| PF1            |               | I/O   | Programmable I/O Pin During Normal Operation        |
| Mode A         | 1             | I     | Mode Select Input-Checked Only During RESET         |
| PF0            |               | I/O   | Programmable I/O Pin During Normal Operation        |
| CLKIN          | 1             | I     | Clock Input                                         |
| XTAL           | 1             | O     | Quartz Crystal Output                               |
| CLKOUT         | 1             | O     | Processor Clock Output                              |
| SPORT0         | 5             | I/O   | Serial Port I/O Pins                                |
| SPORT1         | 5             | I/O   | Serial Port I/O Pins                                |
| IRQ1-0, FI, FO |               |       | Edge- or Level-Sensitive Interrupts, FI, FO 2       |
| PWD            | 1             | I     | Power-Down Control Input                            |
| PWDACK         | 1             | O     | Power-Down Acknowledge Control Output               |
| FL0, FL1, FL2  | 3             | O     | Output Flags                                        |
| V DDINT        | 2             | I     | Internal V DD (1.8 V) Power (LQFP)                  |
| V DDEXT        | 4             | I     | External V DD (1.8 V, 2.5 V, or 3.3 V) Power (LQFP) |
| GND            | 10            | I     | Ground (LQFP)                                       |

software configurable during program execution. Flag and interrupt functionality is retained concurrently on multiplexed pins. In cases where pin functionality is reconfigurable, the default state is shown in plain text in Table 9, while alternate functionality is shown in italics .

Table 9. Common-Mode Pins   (Continued)

| PinName   |   No. of Pins | I/O   | Function                                           |
|-----------|---------------|-------|----------------------------------------------------|
| V DDINT   |             4 | I     | Internal V DD (1.8 V) Power (BGA)                  |
| V DDEXT   |             7 | I     | External V DD (1.8 V, 2.5 V, or 3.3 V) Power (BGA) |
| GND       |            20 | I     | Ground (BGA)                                       |
| EZ-Port   |             9 | I/O   | For Emulation Use                                  |

## MEMORY INTERFACE PINS

ADSP-218xN series members can be used in one of two modes: Full Memory Mode, which allows BDMA operation with full external overlay memory and I/O capability, or Host Mode, which allows IDMA operation with limited external addressing capabilities.

Table 10. Full Memory Mode Pins (Mode C = 0)

| PinName   |   No. of Pins | I/O   | Function                                                                                             |
|-----------|---------------|-------|------------------------------------------------------------------------------------------------------|
| A13-0     |            14 | O     | Address Output Pins for Program, Data, Byte, and I/O Spaces                                          |
| D23-0     |            24 | I/O   | Data I/O Pins for Program, Data, Byte, and I/O Spaces (8 MSBsare also used as ByteMemory Addresses.) |

Table 11. Host Mode Pins (Mode C = 1)

| PinName   |   No. of Pins | I/O   | Function                                                      |
|-----------|---------------|-------|---------------------------------------------------------------|
| IAD15-0   |            16 | I/O   | IDMA Port Address/Data Bus                                    |
| A0        |             1 | O     | Address Pin for External I/O, Program, Data, or Byte Access 1 |
| D23-8     |            16 | I/O   | Data I/O Pins for Program, Data, Byte, and I/O Spaces         |
| IWR       |             1 | I     | IDMA Write Enable                                             |
| IRD       |             1 | I     | IDMA Read Enable                                              |
| IAL       |             1 | I     | IDMA Address Latch Pin                                        |
| IS        |             1 | I     | IDMA Select                                                   |
| IACK      |             1 | O     | IDMA Port Acknowledge Configurable in Mode D; Open Drain      |

## TERMINATING UNUSED PINS

Table 12 shows the recommendations for terminating unused pins.

Table 12. Unused Pin Terminations

| PinName 1   | I/O 3-State (Z) 2   | Reset State   | Hi-Z 3 Caused By   | Unused Configuration   |
|-------------|---------------------|---------------|--------------------|------------------------|
| XTAL        | O                   | O             |                    | Float                  |
| CLKOUT      | O                   | O             |                    | Float 4                |
| A13-1 or    | O(Z)                | Hi-Z          | BR, EBR            | Float                  |
| IAD12-0     | I/O (Z)             | Hi-Z          | IS                 | Float                  |
| A0          | O(Z)                | Hi-Z          | BR, EBR            | Float                  |

The operating mode is determined by the state of the Mode C pin during RESET and cannot be changed while the processor is running. Table 10 and Table 11 list the active signals at specific pins of the DSP during either of the two operating modes (Full Memory or Host). A signal in one table shares a pin with a signal from the other table, with the active signal determined by the mode that is set. For the shared pins and their alternate signals (e.g., A4/IAD3), refer to the package pinouts in Table 27 on Page 41 and Table 28 on Page 43.

## ADSP-218xN

Table 12. Unused Pin Terminations  (Continued)

| PinName 1   | I/O 3-State (Z) 2   | Reset State   | Hi-Z 3 Caused By   | Unused Configuration                                              |
|-------------|---------------------|---------------|--------------------|-------------------------------------------------------------------|
| D23-8       | I/O (Z)             | Hi-Z          | BR, EBR            | Float                                                             |
| D7 or       | I/O (Z)             | Hi-Z          | BR, EBR            | Float                                                             |
| IWR         | I                   | I             |                    | High (Inactive)                                                   |
| D6 or       | I/O (Z)             | Hi-Z          | BR, EBR            | Float                                                             |
| IRD         | I                   | I             | BR, EBR            | High (Inactive)                                                   |
| D5 or       | I/O (Z)             | Hi-Z          |                    | Float                                                             |
| IAL         | I                   | I             |                    | Low (Inactive)                                                    |
| D4 or       | I/O (Z)             | Hi-Z          | BR, EBR            | Float                                                             |
| IS          | I                   | I             |                    | High (Inactive)                                                   |
| D3 or IACK  | I/O (Z)             | Hi-Z          | BR, EBR            | Float Float                                                       |
| D2-0 or     | I/O (Z)             | Hi-Z          | BR, EBR            | Float                                                             |
| IAD15-13    | I/O (Z)             | Hi-Z          | IS                 | Float                                                             |
| PMS         | O(Z)                | O             | BR, EBR            | Float                                                             |
| DMS         | O(Z)                | O             | BR, EBR            | Float                                                             |
| BMS         | O(Z)                | O             | BR, EBR            | Float                                                             |
| IOMS        | O(Z)                | O             | BR, EBR            | Float                                                             |
| CMS         | O(Z)                | O             | BR, EBR            | Float                                                             |
| RD          | O(Z)                | O             | BR, EBR            | Float                                                             |
| WR          | O(Z)                | O             | BR, EBR            | Float                                                             |
| BR          | I                   | I             |                    | High (Inactive)                                                   |
| BG          | O(Z)                | O             | EE                 | Float                                                             |
| BGH         | O                   | O             |                    | Float                                                             |
| IRQ2/ PF7   | I/O (Z)             | I             |                    | Input =High(Inactive) or Program as Output, Set to 1, Let Float 5 |
| IRQL1/ PF6  | I/O (Z)             | I             |                    | Input =High(Inactive) or Program as Output, Set to 1, Let Float 5 |
| IRQL0/ PF5  | I/O (Z)             | I             |                    | Input =High(Inactive) or Program as Output, Set to 1, Let Float 5 |
| IRQE/ PF4   | I/O (Z)             | I             |                    | Input =High(Inactive) or Program as Output, Set to 1, Let Float 5 |
| PWD         | I                   | I             |                    | High                                                              |
| SCLK0       | I/O                 | I             |                    | Input = High or Low, Output = Float                               |
| RFS0        | I/O                 | I             |                    | High or Low                                                       |
| DR0         | I                   | I             |                    | High or Low                                                       |
| TFS0        | I/O                 | I             |                    | High or Low                                                       |
| DT0         | O                   | O             |                    | Float                                                             |
| SCLK1       | I/O                 | I             |                    | Input = High or Low, Output = Float                               |
| RFS1/IRQ0   | I/O                 | I             |                    | High or Low                                                       |
| DR1/FI      | I                   | I             |                    | High or Low                                                       |
| TFS1/IRQ1   | I/O                 | I             |                    | High or Low                                                       |
| DT1/FO      | O                   | O             |                    | Float                                                             |
| EE          | I                   | I             |                    | Float                                                             |
| EBR         | I                   | I             |                    | Float                                                             |
| EBG         | O                   | O             |                    | Float                                                             |

Table 12. Unused Pin Terminations  (Continued)

| PinName 1   | I/O 3-State (Z) 2   | Reset State   | Hi-Z 3 Caused By   | Unused Configuration   |
|-------------|---------------------|---------------|--------------------|------------------------|
| ERESET      | I                   | I             |                    | Float                  |
| EMS         | O                   | O             |                    | Float                  |
| EINT        | I                   | I             |                    | Float                  |
| ECLK        | I                   | I             |                    | Float                  |
| ELIN        | I                   | I             |                    | Float                  |
| ELOUT       | O                   | O             |                    | Float                  |

## ADSP-218xN

## SPECIFICATIONS

## RECOMMENDED OPERATING CONDITIONS

|             | KGrade (Commercial)   | KGrade (Commercial)   | BGrade (Industrial)   | BGrade (Industrial)   |      |
|-------------|-----------------------|-----------------------|-----------------------|-----------------------|------|
| Parameter 1 | Min                   | Max                   | Min                   | Max                   | Unit |
| V DDINT     | 1.71                  | 1.89                  | 1.8                   | 2.0                   | V    |
| V DDEXT     | 1.71                  | 3.6                   | 1.8                   | 3.6                   | V    |
| V INPUT 2   | V IL = - 0.3          | V IH = + 3.6          | V IL = - 0.3          | V IH = + 3.6          | V    |
| T AMB       | 0                     | 70                    | -40                   | +85                   | ° C  |

## ELECTRICAL CHARACTERISTICS

| Parameter 1   | Description                     | Test Conditions                                      | Min           | Typ   | Max   | Unit   |
|---------------|---------------------------------|------------------------------------------------------|---------------|-------|-------|--------|
| V IH          | Hi-Level Input Voltage 2, 3     | @V DDEXT = 1.71 V to 2.0 V, V DDINT = max            | 1.25          |       |       | V      |
|               |                                 | @V DDEXT = 2.1 V to 3.6 V, V = max                   | 1.7           |       |       | V      |
| V IL          | Lo-Level Input Voltage 2, 3     | DDINT @V DDEXT ≤ 2.0 V, V DDINT = min                |               |       | 0.6   | V      |
|               |                                 | @V DDEXT ≥ 2.0 V, V DDINT = min                      |               |       | 0.7   | V      |
| V OH          | Hi-Level Output Voltage 2, 4, 5 | @V DDEXT = 1.71 V to 2.0 V, I = - 0.5mA              | 1.35          |       |       | V      |
|               |                                 | OH @V DDEXT = 2.1 V to 2.9 V, I OH = - 0.5mA         | 2.0           |       |       | V      |
|               |                                 | @V DDEXT = 3.0 V to 3.6 V, I = - 0.5mA               | 2.4           |       |       | V      |
|               |                                 | OH @V DDEXT = 1.71 V to 3.6 V, I OH = - 100 μ A 6    | V DDEXT - 0.3 |       |       | V      |
| V OL          | Lo-Level Output Voltage 2, 4, 5 | @V DDEXT = 1.71 V to 3.6 V, I OL = 2.0mA             |               |       | 0.4   | V      |
| I IH          | Hi-Level Input Current 3        | @V DDINT = max, V IN = 3.6 V                         |               |       | 10    | μ A    |
| I IL          | Lo-Level Input Current 3        | @V DDINT = max, V IN = 0 V                           |               |       | 10    | μ A    |
| I OZH         | Three-State Leakage Current 7   | @V DDEXT = max, V IN = 3.6 V 8                       |               |       | 10    | μ A    |
| I OZL         | Three-State Leakage Current 7   | @V DDEXT = max, V IN = 0 V 8                         |               |       | 10    | μ A    |
| I DD          | Supply Current (Idle) 9         | @V DDINT = 1.8 V, t CK = 12.5 ns, T AMB = 25 ° C     |               | 6     |       | mA     |
| I DD          | Supply Current (Dynamic) 10     | @V DDINT = 1.8 V, t CK = 12.5 ns 11 , T AMB = 25 ° C |               | 25    |       | mA     |

## ADSP-218xN

| Parameter 1   | Description                         | Test Conditions                                       | Min   | Typ   | Max   | Unit   |
|---------------|-------------------------------------|-------------------------------------------------------|-------|-------|-------|--------|
| I DD          | Supply Current (Idle) 9             | @V DDINT = 1.9 V, t CK = 12.5 ns, T AMB = 25 ° C      |       | 6.5   |       | mA     |
| I DD          | Supply Current (Dynamic) 10         | @V DDINT = 1.9 V, t CK = 12.5 ns 11 , T AMB = 25 ° C  |       | 26    |       | mA     |
| I DD          | Supply Current (Power-Down) 12      | @V DDINT = 1.8 V, T AMB = 25 ° C in Lowest Power Mode |       | 100   |       | μ A    |
| C I           | Input Pin Capacitance 3, 6          | @V IN = 1.8 V, f IN = 1.0 MHz, T AMB = 25 ° C         |       |       | 8     | pF     |
| C O           | Output Pin Capacitance 6, 7, 12, 13 | @V IN = 1.8 V, f IN = 1.0 MHz, T AMB = 25 ° C         |       |       | 8     | pF     |

## ABSOLUTE MAXIMUM RATINGS

| Parameter                            | Rating                   |
|--------------------------------------|--------------------------|
| Internal Supply Voltage (V DDINT ) 1 | -0.3 V to +2.2 V         |
| External Supply Voltage (V DDEXT )   | -0.3 V to +4.0 V         |
| Input Voltage 2                      | -0.5 V to +4.0 V         |
| Output Voltage Swing 3               | -0.5 V to V DDEXT +0.5 V |
| Operating Temperature Range          | -40°C to +85°C           |
| Storage Temperature Range            | -65°C to +150°C          |

## ESD SENSITIVITY

## CAUTION

ESD (electrostatic discharge) sensitive device. Electrostatic charges as high as 4000 V readily accumulate on the human body and test equipment and can discharge without detection. Although the ADSP-218xN features proprietary ESD protection circuitry, permanent damage may occur on devices subjected to high energy electrostatic discharges. Therefore, proper ESD precautions are recommended to avoid performance degradation or loss of functionality.

<!-- image -->

## ADSP-218xN

## ESD DIODE PROTECTION

During the power-up sequence of the DSP, differences in the ramp-up rates and activation time between the two supplies can cause current to flow in the I/O ESD protection circuitry. To prevent damage to the ESD diode protection circuitry, Analog Devices recommends including a bootstrap Schottky diode.

The bootstrap Schottky diode is connected between the core and I/O power supplies, as shown in Figure 17. It protects the ADSP-218xN processor from partially powering the I/O supply. Including a Schottky diode will shorten the delay between the supply ramps and thus prevent damage to the ESD diode protection circuitry. With this technique, if the core rail rises ahead of the I/O rail, the Schottky diode pulls the I/O rail along with the core rail.

Figure 17. Dual Voltage Schottky Diode

<!-- image -->

Table 13. Example Power Dissipation Calculation 1

| Parameters     | No. of Pins   | × C (pF)   | × V DDEXT 2 (V)   | × f (MHz)   |   PD(mW) |
|----------------|---------------|------------|-------------------|-------------|----------|
| Address        | 7             | 10         | 3.3 2             | 20.0        |    15.25 |
| Data Output,WR | 9             | 10         | 3.3 2             | 20.0        |    19.59 |
| RD             | 1             | 10         | 3.3 2             | 20.0        |     2.18 |
| CLKOUT,DMS     | 2             | 10         | 3.3 2             | 40.0        |     8.7  |
|                |               |            |                   |             |    45.72 |

## POWER DISSIPATION

To determine total power dissipation in a specific application, the following equation should be applied for each output: C × VDD 2 × f where:

C = load capacitance.

f = output switching frequency.

Example: In an application where external data memory is used and no other outputs are active, power dissipation is calculated as follows:

## Assumptions:

- External data memory is accessed every cycle with 50% of the address pins switching.
- External data memory writes occur every other cycle with 50% of the data pins switching.
- Each address and data pin has a 10 pF total load at the pin.
- Application operates at VDDEXT = 3.3 V and t CK = 30 ns.

Total Power Dissipation = PINT + ( C × VDDEXT 2 × f)

P

(C × VDDEXT × f) is calculated for each output, as in the example in Table 13.

INT = internal power dissipation from Figure 22 on Page 27. 2

## ENVIRONMENTAL CONDITIONS

Table 14. Thermal Resistance

| Rating Description 1                     | Symbol   |   LQFP ( ° C/W) |   BGA ( ° C/W) |
|------------------------------------------|----------|-----------------|----------------|
| Thermal Resistance (Case- to-Ambient)    | θ CA     |              48 |           63.3 |
| Thermal Resistance (Junction-to-Ambient) | θ JA     |              50 |           70.7 |
| Thermal Resistance (Junction-to-Case)    | θ JC     |               2 |            7.4 |

TAMB = TCASE - (PD ×

θ

CA)

TCASE = Case Temperature in ° C

PD = Power Dissipation in W

## TEST CONDITIONS

<!-- image -->

Figure 18. Voltage Reference Levels for AC Measurements (Except Output Enable/Disable)

<!-- image -->

Figure 19. Equivalent Loading for AC Measurements (Including All Fixtures)

<!-- image -->

HIGH-IMPEDANCE STATE. TEST CONDITIONS CAUSE THIS VOLTAGE LEVEL TO BE APPROXIMATELY 1.5V.

Figure 20. Output Enable/Disable

## Output Disable Time

Output pins are considered to be disabled when they have stopped driving and started a transition from the measured output high or low voltage to a high impedance state. The output disable time (t DIS ) is the difference of t MEASURED and tDECAY, as shown in Figure 20. The time is the interval from when a reference signal reaches a high or low voltage level to when the output voltages have changed by 0.5 V from the measured output high or low voltage.

The decay time, tDECAY, is dependent on the capacitive load, CL, and the current load, i L , on the output pin. It can be approximated by the following equation:

<!-- formula-not-decoded -->

from which

<!-- formula-not-decoded -->

is calculated. If multiple pins (such as the data bus) are disabled, the measurement value is that of the last pin to stop driving.

## Output Enable Time

Output pins are considered to be enabled when they have made a transition from a high-impedance state to when they start driving. The output enable time (tENA) is the interval from when a reference signal reaches a high or low voltage level to when the output has reached a specified high or low trip point, as shown in Figure 20. If multiple pins (such as the data bus) are enabled, the measurement value is that of the first pin to start driving.

## ADSP-218xN

## TIMING SPECIFICATIONS

This section contains timing information for the DSP's external signals.

## General Notes

Use the exact timing information given. Do not attempt to derive parameters from the addition or subtraction of others. While addition or subtraction would yield meaningful results for an individual device, the values given in this data sheet reflect statistical variations and worst cases. Consequently, parameters cannot be added up meaningfully to derive longer times.

## Timing Notes

Switching characteristics specify how the processor changes its signals. Designers have no control over this timing-circuitry external to the processor must be designed for compatibility with these signal characteristics. Switching characteristics tell what the processor will do in a given circumstance. Switching characteristics can also be used to ensure that any timing requirement of a device connected to the processor (such as memory) is satisfied.

Timing requirements apply to signals that are controlled by circuitry external to the processor, such as the data input for a read operation. Timing requirements guarantee that the processor operates correctly with other devices.

## Frequency Dependency For Timing Specifications

tCK is defined as 0.5 tCKI. The ADSP-218xN uses an input clock with a frequency equal to half the instruction rate. For example, a 40 MHz input clock (which is equivalent to 25 ns) yields a 12.5 ns processor cycle (equivalent to 80 MHz). tCK values within the range of 0.5 t CKI period should be substituted for all relevant timing parameters to obtain the specification value.

Example: tCKH = 0.5 tCK - 2 ns = 0.5 (12.5 ns) - 2 ns = 4.25 ns

## Output Drive Currents

Figure 21 shows typical I-V characteristics for the output drivers on the ADSP-218xN series.The curves represent the current drive capability of the output drivers as a function of output voltage.

Figure 23 shows the typical power-down supply current.

## Capacitive Loading

Figure 24 and Figure 25 show the capacitive loading characteristics of the ADSP-218xN.

Figure 21. Typical Output Driver Characteristics for V DDEXT at 3.6 V, 3.3 V, 2.5 V, and 1.8 V

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## NOTES

- VALID FOR ALL TEMPERATURE GRADES.
- POWER REFLECTS DEVICE OPERATING WITH NO OUTPUT LOADS. 1
- TYPICAL POWER DISSIPATION AT 1.8V OR 1.9V VDDINT AND 25°C, EXCEPT WHERE SPECIFIED. 2
- IDD MEASUREMENT TAKEN WITH ALL INSTRUCTIONS EXECUTING FROM INTERNAL MEMORY. 50% OF THE INSTRUCTIONS ARE MULTIFUNCTION (TYPES 1, 4, 5, 12, 13, 14), 30% ARE TYPE 2 AND TYPE 6, AND 20% ARE IDLE INSTRUCTIONS. 3
- IDLE REFERS TO STATE OF OPERATION DURING EXECUTION OF IDLE INSTRUCTION. DEASSERTED PINS ARE DRIVEN TO EITHER VDD OR GND. 4

Figure 22. Power vs. Frequency

NOTES

## ADSP-218xN

<!-- image -->

1. REFLECTS ADSP-218xN OPERATION IN LOWEST POWER MODE. (SEE THE "SYSTEM INTERFACE" CHAPTER OF THE ADSP-218x DSP HARDWARE REFERENCE FOR DETAILS.)
2. CURRENT REFLECTS DEVICE OPERATING WITH NO INPUT LOADS.

Figure 23. Typical Power-Down Current

<!-- image -->

Figure 24. Typical Output Rise Time vs. Load Capacitance (at Maximum Ambient Operating Temperature)

Figure 25. Typical Output Valid Delay or Hold vs. Load Capacitance, CL (at Maximum Ambient Operating Temperature)

<!-- image -->

## ADSP-218xN

## Clock Signals and Reset

Table 15. Clock Signals and Reset

| Parameter                            |                                      | Min         | Max   | Unit   |
|--------------------------------------|--------------------------------------|-------------|-------|--------|
| Timing Requirements:                 | Timing Requirements:                 |             |       |        |
| t CKI                                | CLKIN Period                         | 25          | 40    | ns     |
| t CKIL                               | CLKIN Width Low                      | 8           |       | ns     |
| t CKIH                               | CLKIN Width High                     | 8           |       | ns     |
| Switching Characteristics:           | Switching Characteristics:           |             |       |        |
| t CKL                                | CLKOUT Width Low                     | 0.5t CK - 3 |       | ns     |
| t CKH                                | CLKOUT Width High                    | 0.5t CK - 3 |       | ns     |
| t CKOH                               | CLKIN High to CLKOUT High            | 0           | 8     | ns     |
| Control Signals Timing Requirements: | Control Signals Timing Requirements: |             |       |        |
| t RSP                                | RESET Width Low                      | 5t CK 1     |       | ns     |
| t MS                                 | Mode Setup before RESET High         | 7           |       | ns     |
| t MH                                 | Mode Hold after RESET High           | 5           |       | ns     |

Figure 26. Clock Signals and Reset

<!-- image -->

## Interrupts and Flags

Table 16. Interrupts and Flags

| Parameter                  | Min                                                 | Max           | Unit   |
|----------------------------|-----------------------------------------------------|---------------|--------|
| Timing Requirements:       |                                                     |               |        |
| t IFS                      | IRQx, FI, or PFx Setup before CLKOUT Low 1, 2, 3, 4 | 0.25t CK + 10 | ns     |
| t IFH                      | IRQx, FI, or PFx Hold after CLKOUT High 1, 2, 3, 4  | 0.25t CK      | ns     |
| Switching Characteristics: |                                                     |               |        |
| t FOH                      | Flag Output Hold after CLKOUT Low 5                 | 0.5t CK - 5   | ns     |
| t FOD                      | Flag Output Delay from CLKOUT Low 5                 | 0.5t CK + 4   | ns     |

Figure 27. Interrupts and Flags

<!-- image -->

## ADSP-218xN

## Bus Request-Bus Grant

Table 17. Bus Request-Bus Grant

| Parameter                  |                                     | Min Max      | Unit         |    |
|----------------------------|-------------------------------------|--------------|--------------|----|
| Timing Requirements:       | Timing Requirements:                |              |              |    |
| t BH                       | BR Hold after CLKOUT High 1         | 0.25t CK + 2 |              | ns |
| t BS                       | BR Setup before CLKOUT Low 1        | 0.25t CK + 8 |              | ns |
| Switching Characteristics: | Switching Characteristics:          |              |              |    |
| t SD                       | CLKOUT High to xMS, RD, WRDisable 2 |              | 0.25t CK + 8 | ns |
| t SDB                      | xMS, RD, WRDisable to BG Low        | 0            |              | ns |
| t SE                       | BG High to xMS, RD, WREnable        | 0            |              | ns |
| t SEC                      | xMS, RD, WREnable to CLKOUT High    | 0.25t CK - 3 |              | ns |
| t SDBH                     | xMS, RD, WRDisable to BGH Low 3     | 0            |              | ns |
| t SEH                      | BGH High to xMS, RD, WREnable 3     | 0            |              | ns |

Figure 28. Bus Request-Bus Grant

<!-- image -->

## Memory Read

Table 18. Memory Read

| Parameter                  |                                     | Min          | Max           | Unit   |
|----------------------------|-------------------------------------|--------------|---------------|--------|
| Timing Requirements:       | Timing Requirements:                |              |               |        |
| t RDD                      | RD Low to Data Valid 1              |              | 0.5t CK -5+w  | ns     |
| t AA                       | A13-0, xMS to Data Valid 2          |              | 0.75t CK -6+w | ns     |
| t RDH                      | Data Hold from RD High              | 0            |               | ns     |
| Switching Characteristics: | Switching Characteristics:          |              |               |        |
| t RP                       | RD Pulse Width                      | 0.5t CK -3+w |               | ns     |
| t CRD                      | CLKOUT High to RD Low               | 0.25t CK - 2 | 0.25t CK + 4  | ns     |
| t ASR                      | A13-0, xMS Setup before RD Low      | 0.25t CK - 3 |               | ns     |
| t RDA                      | A13-0, xMS Hold after RD Deasserted | 0.25t CK - 3 |               | ns     |
| t RWR                      | RD High to RD orWRLow               | 0.5t CK - 3  |               | ns     |

Figure 29. Memory Read

<!-- image -->

## ADSP-218xN

## Memory Write

Table 19. Memory Write

| Parameter                  |                                      | Min           | Max          | Unit   |
|----------------------------|--------------------------------------|---------------|--------------|--------|
| Switching Characteristics: | Switching Characteristics:           |               |              |        |
| t DW                       | Data Setup before WRHigh 1           | 0.5t CK -4+w  |              | ns     |
| t DH                       | Data Hold after WRHigh               | 0.25t CK - 1  |              | ns     |
| t WP                       | WRPulse Width                        | 0.5t CK -3+w  |              | ns     |
| t WDE                      | WRLowto Data Enabled                 | 0             |              | ns     |
| t ASW                      | A13-0, xMS Setup beforeWRLow 2       | 0.25t CK - 3  |              | ns     |
| t DDR                      | Data Disable before WRor RD Low      | 0.25t CK - 3  |              | ns     |
| t CWR                      | CLKOUT High toWRLow                  | 0.25t CK - 2  | 0.25t CK + 4 | ns     |
| t AW                       | A13-0, xMS Setup before WRDeasserted | 0.75t CK -5+w |              | ns     |
| t WRA                      | A13-0, xMS Hold after WRDeasserted   | 0.25t CK - 1  |              | ns     |
| t WWR                      | WRHigh to RD orWRLow                 | 0.5t CK - 3   |              | ns     |

<!-- image -->

2 DATA LINES FOR ACCESSES ARE: BDMA: D15-8 I/O SPACE: D23-8 EXTERNAL DM: D23-8 EXTERNAL PM: D23-0

Figure 30. Memory Write

## Serial Ports

## Table 20. Serial Ports

Figure 31. Serial Ports

| Parameter                  |                                                  | Min      | Max          | Unit   |
|----------------------------|--------------------------------------------------|----------|--------------|--------|
| Timing Requirements:       | Timing Requirements:                             |          |              |        |
| t SCK                      | SCLK Period                                      | 30       |              | ns     |
| t SCS                      | DR/TFS/RFS Setup Before SCLK Low                 | 4        |              | ns     |
| t SCH                      | DR/TFS/RFS Hold After SCLK Low                   | 7        |              | ns     |
| t SCP                      | SCLKIN Width                                     | 12       |              | ns     |
| Switching Characteristics: | Switching Characteristics:                       |          |              |        |
| t CC                       | CLKOUT High to SCLKOUT                           | 0.25t CK | 0.25t CK + 6 | ns     |
| t SCDE                     | SCLK High to DT Enable                           | 0        |              | ns     |
| t SCDV                     | SCLK High to DT Valid                            |          | 7            | ns     |
| t RH                       | TFS/RFS OUT Hold after SCLK High                 | 0        |              | ns     |
| t RD                       | TFS/RFS OUT Delay from SCLK High                 |          | 7            | ns     |
| t SCDH                     | DT Hold after SCLK High                          | 0        |              | ns     |
| t TDE                      | TFS (Alt) to DT Enable                           | 0        |              | ns     |
| t TDV                      | TFS (Alt) to DT Valid                            |          | 7            | ns     |
| t SCDD                     | SCLK High to DT Disable                          |          | 7            | ns     |
| t RDV                      | RFS (Multichannel, Frame Delay Zero) to DT Valid |          | 7            | ns     |

<!-- image -->

## ADSP-218xN

## IDMA Address Latch

## Table 21. IDMA Address Latch

| Parameter            |                                                     | Min   | Max   | Unit   |
|----------------------|-----------------------------------------------------|-------|-------|--------|
| Timing Requirements: | Timing Requirements:                                |       |       |        |
| t IALP               | Duration of Address Latch 1, 2                      | 10    |       | ns     |
| t IASU               | IAD15-0 Address Setup Before Address Latch End 2    | 5     |       | ns     |
| t IAH                | IAD15-0 Address Hold After Address Latch End 2      | 3     |       | ns     |
| t IKA                | IACK Low before Start of Address Latch 2, 3         | 0     |       | ns     |
| t IALS               | Start of Write or Read After Address Latch End 2, 3 | 3     |       | ns     |
| t IALD               | Address Latch Start After Address Latch End 1, 2    | 2     |       | ns     |

Figure 32. IDMA Address Latch

<!-- image -->

## IDMA Write, Short Write Cycle

Table 22. IDMA Write, Short Write Cycle

| Parameter                 |                                                | Min   | Max   | Unit   |
|---------------------------|------------------------------------------------|-------|-------|--------|
| Timing Requirements:      | Timing Requirements:                           |       |       |        |
| t IKW                     | IACK Low Before Start of Write 1               | 0     |       | ns     |
| t IWP                     | Duration of Write 1, 2                         | 10    |       | ns     |
| t IDSU                    | IAD15-0 Data Setup Before End of Write 2, 3, 4 | 3     |       | ns     |
| t IDH                     | IAD15-0 Data Hold After End of Write 2, 3, 4   | 2     |       | ns     |
| Switching Characteristic: | Switching Characteristic:                      |       |       |        |
| t IKHW                    | Start of Write to IACK High                    |       | 10    | ns     |

Figure 33. IDMA Write, Short Write Cycle

<!-- image -->

## ADSP-218xN

## IDMA Write, Long Write Cycle

## Table 23. IDMA Write, Long Write Cycle

| Parameter                  |                                                | Min         | Max   | Unit   |
|----------------------------|------------------------------------------------|-------------|-------|--------|
| Timing Requirements:       | Timing Requirements:                           |             |       |        |
| t IKW                      | IACK Low Before Start of Write 1               | 0           |       | ns     |
| t IKSU                     | IAD15-0 Data Setup Before End of Write 2, 3, 4 | 0.5t CK + 5 |       | ns     |
| t IKH                      | IAD15-0 Data Hold After End of Write 2, 3, 4   | 0           |       | ns     |
| Switching Characteristics: | Switching Characteristics:                     |             |       |        |
| t IKLW                     | Start of Write to IACK Low 4                   | 1.5t CK     |       | ns     |
| t IKHW                     | Start of Write to IACK High                    |             | 10    | ns     |

Figure 34. IDMA Write, Long Write Cycle

<!-- image -->

## IDMA Read, Long Read Cycle

## Table 24. IDMA Read, Long Read Cycle

| Parameter                  |                                                         | Min         | Max   | Unit   |
|----------------------------|---------------------------------------------------------|-------------|-------|--------|
| Timing Requirements:       | Timing Requirements:                                    |             |       |        |
| t IKR                      | IACK Low Before Start of Read 1                         | 0           |       | ns     |
| t IRK                      | End of read After IACK Low 2                            | 2           |       | ns     |
| Switching Characteristics: | Switching Characteristics:                              |             |       |        |
| t IKHR                     | IACK High After Start of Read 1                         |             | 10    | ns     |
| t IKDS                     | IAD15-0 Data Setup Before IACK Low                      | 0.5t CK - 3 |       | ns     |
| t IKDH                     | IAD15-0 Data Hold After End of Read 2                   | 0           |       | ns     |
| t IKDD                     | IAD15-0 Data Disabled After End of Read 2               |             | 10    | ns     |
| t IRDE                     | IAD15-0 Previous Data Enabled After Start of Read       | 0           |       | ns     |
| t IRDV                     | IAD15-0 Previous Data Valid After Start of Read         |             | 11    | ns     |
| t IRDH1                    | IAD15-0 Previous Data Hold After Start of Read (DM/PM1) | 2t CK - 5   |       | ns     |
| t IRDH2                    | IAD15-0 Previous Data Hold After Start of Read (PM2) 4  | t CK - 5    |       | ns     |

Figure 35. IDMA Read, Long Read Cycle

<!-- image -->

## ADSP-218xN

## IDMA Read, Short Read Cycle

## Table 25. IDMA Read, Short Read Cycle

| Parameter 1, 2             |                                                   | Min   | Max       | Unit   |
|----------------------------|---------------------------------------------------|-------|-----------|--------|
| Timing Requirements:       | Timing Requirements:                              |       |           |        |
| t IKR                      | IACK Low Before Start of Read 3                   | 0     |           | ns     |
| t IRP1                     | Duration of Read (DM/PM1) 4                       | 10    | 2t CK - 5 | ns     |
| t IRP2                     | Duration of Read (PM2) 5                          | 10    | t CK - 5  | ns     |
| Switching Characteristics: | Switching Characteristics:                        |       |           |        |
| t IKHR                     | IACK High After Start of Read 3                   |       | 10        | ns     |
| t IKDH                     | IAD15-0 Data Hold After End of Read 6             | 0     |           | ns     |
| t IKDD                     | IAD15-0 Data Disabled After End of Read 6         |       | 10        | ns     |
| t IRDE                     | IAD15-0 Previous Data Enabled After Start of Read | 0     |           | ns     |
| t IRDV                     | IAD15-0 Previous Data Valid After Start of Read   |       | 10        | ns     |

Figure 36. IDMA Read, Short Read Cycle

<!-- image -->

## IDMA Read, Short Read Cycle in Short Read Only Mode

## Table 26. IDMA Read, Short Read Cycle in Short Read Only Mode

| Parameter 1                |                                                    | Min Max   |    | Unit   |
|----------------------------|----------------------------------------------------|-----------|----|--------|
| Timing Requirements:       | Timing Requirements:                               |           |    |        |
| t IKR                      | IACK Low Before Start of Read 2                    | 0         |    | ns     |
| t IRP                      | Duration of Read 3                                 | 10        |    | ns     |
| Switching Characteristics: | Switching Characteristics:                         |           |    |        |
| t IKHR                     | IACK High After Start of Read 2                    |           | 10 | ns     |
| t IKDH                     | IAD15-0 Previous Data Hold After End of Read 3     | 0         |    | ns     |
| t IKDD                     | IAD15-0 Previous Data Disabled After End of Read 3 |           | 10 | ns     |
| t IRDE                     | IAD15-0 Previous Data Enabled After Start of Read  | 0         |    | ns     |
| t IRDV                     | IAD15-0 Previous Data Valid After Start of Read    |           | 10 | ns     |

Figure 37. IDMA Read, Short Read Cycle in Short Read Only Mode

<!-- image -->

## ADSP-218xN

## LQFP PACKAGE PINOUT

The LQFP package pinout is shown Figure 38 and in Table 27. Pin names in bold text in the table replace the plain-text-named functions when Mode C = 1. A + sign separates two functions when either function can be active for either major I/O mode. Signals enclosed in brackets [ ] are state bits latched from the value of the pin at the deassertion of RESET. The multiplexed pins DT1/FO, TFS1/IRQ1, RFS1/IRQ0, and DR1/FI, are mode selectable by setting Bit 10 (SPORT1 configure) of the System Control Register. If Bit 10 = 1, these pins have serial port functionality. If Bit 10 = 0, these pins are the external interrupt and flag pins. This bit is set to 1 by default, upon reset.

Figure 38. 100-Lead LQFP Pin Configuration

<!-- image -->

Table 27. LQFP Package Pinout

Table 27. LQFP Package Pinout  (Continued)

| Pin No.   | PinName     | Pin No.   | PinName      |
|-----------|-------------|-----------|--------------|
| 1         | A4/ IAD3    | 51        | EBR          |
| 2         | A5/ IAD4    | 52        | BR           |
| 3         | GND         | 53        | EBG          |
| 4         | A6/ IAD5    | 54        | BG           |
| 5         | A7/ IAD6    | 55        | D0/ IAD13    |
| 6         | A8/ IAD7    | 56        | D1/ IAD14    |
| 7         | A9/ IAD8    | 57        | D2/ IAD15    |
| 8         | A10/ IAD9   | 58        | D3/ IACK     |
| 9         | A11/ IAD10  | 59        | V DDINT      |
| 10        | A12/ IAD11  | 60        | GND          |
| 11        | A13/ IAD12  | 61        | D4/ IS       |
| 12        | GND         | 62        | D5/ IAL      |
| 13        | CLKIN       | 63        | D6/ IRD      |
| 14        | XTAL        | 64        | D7/ IWR      |
| 15        | V DDEXT     | 65        | D8           |
| 16        | CLKOUT      | 66        | GND          |
| 17        | GND         | 67        | V DDEXT      |
| 18        | V DDINT     | 68        | D9           |
| 19        | WR          | 69        | D10          |
| 20        | RD          | 70        | D11          |
| 21        | BMS         | 71        | GND          |
| 22        | DMS         | 72        | D12          |
| 23        | PMS         | 73        | D13          |
| 24        | IOMS        | 74        | D14          |
| 25        | CMS         | 75        | D15          |
| 26        | IRQE + PF4  | 76        | D16          |
| 27        | IRQL0 + PF5 | 77        | D17          |
| 28        | GND         | 78        | D18          |
| 29        | IRQL1 + PF6 | 79        | D19          |
| 30        | IRQ2 + PF7  | 80        | GND          |
| 31        | DT0         | 81        | D20          |
| 32        | TFS0        | 82        | D21          |
| 33        | RFS0        | 83        | D22          |
| 34        | DR0         | 84        | D23          |
| 35        | SCLK0       | 85        | FL2          |
| 36        | V DDEXT     | 86        | FL1          |
| 37        | DT1/FO      | 87        | FL0          |
| 38        | TFS1/IRQ1   | 88        | PF3 [Mode D] |
| 39        | RFS1/IRQ0   | 89        | PF2 [Mode C] |
| 40        | DR1/FI      | 90        | V DDEXT      |
| 41        | GND         | 91        | PWD          |
| 42        | SCLK1       | 92        | GND          |
| 43        | ERESET      | 93        | PF1 [Mode B] |
| 44        | RESET       | 94        | PF0 [Mode A] |
| 45        | EMS         | 95        | BGH          |
| 46        | EE          | 96        | PWDACK       |
| 47        | ECLK        | 97        | A0           |
| 48        | ELOUT       | 98        | A1/ IAD0     |
| 49 50     | ELIN EINT   | 99 100    | A2/ IAD1     |
|           |             |           | A3/ IAD2     |

## ADSP-218xN

## BGA PACKAGE PINOUT

The BGA package pinout is shown in Figure 39 and in Table 28. Pin names in bold text in the table replace the plain text named functions when Mode C = 1. A + sign separates two functions when either function can be active for either major I/O mode. Signals enclosed in brackets [ ] are state bits latched from the value of the pin at the deassertion of RESET. The multiplexed pins DT1/FO, TFS1/IRQ1, RFS1/IRQ0, and DR1/FI, are mode selectable by setting Bit 10 (SPORT1 configure) of the System Control Register. If Bit 10 = 1, these pins have serial port functionality. If Bit 10 = 0, these pins are the external interrupt and flag pins. This bit is set to 1 by default upon reset.

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

Figure 39. 144-Ball BGA Package Pinout (Bottom View)

Table 28. BGA Package Pinout

Table 28. BGA Package Pinout (Continued)

| Ball No.   | PinName      | Ball No.   | PinName      |
|------------|--------------|------------|--------------|
| A01        | A2/ IAD1     | E02        | V DDEXT      |
| A02        | A1/ IAD0     | E03        | A8/ IAD7     |
| A03        | GND          | E04        | FL0          |
| A04        | A0           | E05        | PF0 [MODE A] |
| A05        | NC           | E06        | FL2          |
| A06        | GND          | E07        | PF3 [MODE D] |
| A07        | NC           | E08        | GND          |
| A08        | NC           | E09        | GND          |
| A09        | NC           | E10        | V DDEXT      |
| A10        | D22          | E11        | GND          |
| A11        | GND          | E12        | D10          |
| A12        | GND          | F01        | A13/ IAD12   |
| B01        | A4/ IAD3     | F02        | NC           |
| B02        | A3/ IAD2     | F03        | A12/ IAD11   |
| B03        | GND          | F04        | A11/ IAD10   |
| B04        | NC           | F05        | FL1          |
| B05        | NC           | F06        | NC           |
| B06        | GND          | F07        | NC           |
| B07        | V DDEXT      | F08        | D7/ IWR      |
| B08        | D23          | F09        | D11          |
| B09        | D20          | F10        | D8           |
| B10        | D18          | F11        | NC           |
| B11        | D17          | F12        | D9           |
| B12        | D16          | G01        | XTAL         |
| C01        | PWDACK       | G02        | NC           |
| C02        | A6/ IAD5     | G03        | GND          |
| C03        | RD           | G04        | A10/ IAD9    |
| C04        | A5/ IAD4     | G05        | NC           |
| C05        | A7/ IAD6     | G06        | NC           |
| C06        | PWD          | G07        | NC           |
| C07        | V DDEXT      | G08        | D6/ IRD      |
| C08        | D21          | G09        | D5/ IAL      |
| C09        | D19          | G10        | NC           |
| C10        | D15          | G11        | NC           |
| C11        | NC           | G12        | D4/ IS       |
| C12        | D14          | H01        | CLKIN        |
| D01        | NC           | H02        | GND          |
| D02        | WR           | H03        | GND          |
| D03        | NC           | H04        | GND          |
| D04        | BGH          | H05        | V DDINT      |
| D05        | A9/ IAD8     | H06        | DT0          |
| D06        | PF1 [MODE B] | H07        | TFS0         |
| D07        | PF2 [MODE C] | H08        | D2/ IAD15    |
| D08        | NC           | H09        | D3/ IACK     |
| D09        | D13          | H10        | GND          |
| D10        | D12          | H11        | NC           |
| D11 D12    | NC GND       | H12 J01    | GND CLKOUT   |
| E01        | V DDEXT      | J02        | V DDINT      |

## ADSP-218xN

Table 28. BGA Package Pinout (Continued)

| Ball No.   | PinName     |
|------------|-------------|
| J03        | NC          |
| J04        | V DDEXT     |
| J05        | V DDEXT     |
| J06        | SCLK0       |
| J07        | D0/ IAD13   |
| J08        | RFS1/IRQ0   |
| J09        | BG          |
| J10        | D1/ IAD14   |
| J11        | V DDINT     |
| J12        | V DDINT     |
| K01        | NC          |
| K02        | NC          |
| K03        | NC          |
| K04        | BMS         |
| K05        | DMS         |
| K06        | RFS0        |
| K07        | TFS1/IRQ1   |
| K08        | SCLK1       |
| K09        | ERESET      |
| K10        | EBR         |
| K11        | BR          |
| K12        | EBG         |
| L01        | IRQE + PF4  |
| L02        | NC          |
| L03        | IRQL1 + PF6 |
| L04        | IOMS        |
| L05        | GND         |
| L06        | PMS         |
| L07        | DR0         |
| L08        | GND         |
| L09        | RESET       |
| L10        | ELIN        |
| L11        | ELOUT       |
| L12        | EINT        |
| M01        | IRQL0 + PF5 |
| M02        | IRQL2 + PF7 |
| M03        | NC          |
| M04        | CMS         |
| M05        | GND         |
| M06        | DT1/FO      |
| M07        | DR1/FI      |
| M08        | GND         |
| M09        | NC          |
| M10        | EMS         |
| M11        | EE          |
| M12        | ECLK        |

## OUTLINE DIMENSIONS

<!-- image -->

Figure 40. 144-Ball BGA  [CSP\_BGA] (BC-144-6)

<!-- image -->

COMPLIANT TO JEDEC STANDARDS MS-026-BED THE ACTUAL POSITION OF EACH LEAD IS WITHIN 0.08 OF ITS IDEAL POSITION WHEN MEASURED IN THE LATERAL DIRECTION.

Figure 41. 100-Lead Low Profile Quad Flat Package [LQFP] (ST-100-1)

## ADSP-218xN

## SURFACE MOUNT DESIGN

Table 29 is provided as an aid to PCB design. For industry-standard design recommendations, refer to IPC-7351, Generic Requirements for Surface Mount Design and Land Pattern Standard .

Table 29. BGA Data for Use with Surface Mount Design

| Package      | Ball Attach Type   | Solder Mask Opening   | Ball Pad Size   |
|--------------|--------------------|-----------------------|-----------------|
| 144-Ball BGA | Solder Mask        | 0.40mm                | 0.50mm          |
| (BC-144-6)   | Defined            | diameter              | diameter        |

## ORDERING GUIDE

| Model                | Temperature Range 1   |   Instruction Rate (MHz) | Package Description   | Package Option   |
|----------------------|-----------------------|--------------------------|-----------------------|------------------|
| ADSP-2184NBCA-320    | -40°C to +85°C        |                       80 | 144-Ball CSP_BGA      | BC-144-6         |
| ADSP-2184NBST-320    | -40°C to +85°C        |                       80 | 100-Lead LQFP         | ST-100-1         |
| ADSP-2184NKCA-320    | 0°C to 70°C           |                       80 | 144-Ball CSP_BGA      | BC-144-6         |
| ADSP-2184NKST-320    | 0°C to 70°C           |                       80 | 100-Lead LQFP         | ST-100-1         |
| ADSP-2184NKSTZ-320 2 | 0°C to 70°C           |                       80 | 100-Lead LQFP         | ST-100-1         |
| ADSP-2185NBCA-320    | -40°C to +85°C        |                       80 | 144-Ball CSP_BGA      | BC-144-6         |
| ADSP-2185NBST-320    | -40°C to +85°C        |                       80 | 100-Lead LQFP         | ST-100-1         |
| ADSP-2185NBSTZ-320 2 | -40°C to +85°C        |                       80 | 100-Lead LQFP         | ST-100-1         |
| ADSP-2185NKCA-320    | 0°C to 70°C           |                       80 | 144-Ball CSP_BGA      | BC-144-6         |
| ADSP-2185NKST-320    | 0°C to 70°C           |                       80 | 100-Lead LQFP         | ST-100-1         |
| ADSP-2185NKSTZ-320 2 | 0°C to 70°C           |                       80 | 100-Lead LQFP         | ST-100-1         |
| ADSP-2186NBCA-320    | -40°C to +85°C        |                       80 | 144-Ball CSP_BGA      | BC-144-6         |
| ADSP-2186NBST-320    | -40°C to +85°C        |                       80 | 100-Lead LQFP         | ST-100-1         |
| ADSP-2186NBSTZ-320 2 | -40°C to +85°C        |                       80 | 100-Lead LQFP         | ST-100-1         |
| ADSP-2186NKCA-320    | 0°C to 70°C           |                       80 | 144-Ball CSP_BGA      | BC-144-6         |
| ADSP-2186NKST-320    | 0°C to 70°C           |                       80 | 100-Lead LQFP         | ST-100-1         |
| ADSP-2186NKSTZ-320 2 | 0°C to 70°C           |                       80 | 100-Lead LQFP         | ST-100-1         |
| ADSP-2187NBCA-320    | -40°C to +85°C        |                       80 | 144-Ball CSP_BGA      | BC-144-6         |
| ADSP-2187NBST-320    | -40°C to +85°C        |                       80 | 100-Lead LQFP         | ST-100-1         |
| ADSP-2187NBSTZ-320 2 | -40°C to +85°C        |                       80 | 100-Lead LQFP         | ST-100-1         |
| ADSP-2187NKCA-320    | 0°C to 70°C           |                       80 | 144-Ball CSP_BGA      | BC-144-6         |
| ADSP-2187NKST-320    | 0°C to 70°C           |                       80 | 100-Lead LQFP         | ST-100-1         |
| ADSP-2187NKSTZ-320 2 | 0°C to 70°C           |                       80 | 100-Lead LQFP         | ST-100-1         |
| ADSP-2188NBCA-320    | -40°C to +85°C        |                       80 | 144-Ball CSP_BGA      | BC-144-6         |
| ADSP-2188NBST-320    | -40°C to +85°C        |                       80 | 100-Lead LQFP         | ST-100-1         |
| ADSP-2188NBSTZ-320 2 | -40°C to +85°C        |                       80 | 100-Lead LQFP         | ST-100-1         |
| ADSP-2188NKCA-320    | 0°C to 70°C           |                       80 | 144-Ball CSP_BGA      | BC-144-6         |
| ADSP-2188NKCAZ-320 2 | 0°C to 70°C           |                       80 | 144-Ball CSP_BGA      | BC-144-6         |
| ADSP-2188NKST-320    | 0°C to 70°C           |                       80 | 100-Lead LQFP         | ST-100-1         |
| ADSP-2188NKSTZ-320 2 | 0°C to 70°C           |                       80 | 100-Lead LQFP         | ST-100-1         |
| ADSP-2189NBCA-320    | -40°C to +85°C        |                       80 | 144-Ball CSP_BGA      | BC-144-6         |
| ADSP-2189NBCAZ-320 2 | -40°C to +85°C        |                       80 | 144-Ball CSP_BGA      | BC-144-6         |
| ADSP-2189NBST-320    | -40°C to +85°C        |                       80 | 100-Lead LQFP         | ST-100-1         |
| ADSP-2189NBSTZ-320 2 | -40°C to +85°C        |                       80 | 100-Lead LQFP         | ST-100-1         |
| ADSP-2189NKCA-320    | 0°C to 70°C           |                       80 | 144-Ball CSP_BGA      | BC-144-6         |
| ADSP-2189NKCAZ-320 2 | 0°C to 70°C           |                       80 | 144-Ball CSP_BGA      | BC-144-6         |
| ADSP-2189NKST-320    | 0°C to 70°C           |                       80 | 100-Lead LQFP         | ST-100-1         |
| ADSP-2189NKSTZ-320 2 | 0°C to 70°C           |                       80 | 100-Lead LQFP         | ST-100-1         |

ADSP-218xN

<!-- image -->