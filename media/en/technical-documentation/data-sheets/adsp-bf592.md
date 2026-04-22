<!-- lastmod 2025-09-05 -->
<!-- image -->

## FEATURES

Up to 400 MHz high performance Blackfin processor Two 16-bit MACs, two 40-bit ALUs, four 8-bit video ALUs, 40-bit shifter

RISC-like register and instruction model for ease of programming and compiler-friendly support

Advanced debug, trace, and performance monitoring

Accepts a wide range of supply voltages for internal and I/O operations, see Operating Conditions

Off-chip voltage regulator interface

64-lead (9 mm × 9 mm body and 0.85 mm package height) LFCSP package

## MEMORY

68K bytes of core-accessible memory

(See Table 1 for L1 and L3 memory size details) 64K byte L1 instruction ROM

Flexible booting options from internal L1 ROM and SPI memory or from host devices including SPI, PPI, and UART Memory management unit providing memory protection

Figure 1. Processor Block Diagram

<!-- image -->

Blackfin and the Blackfin logo are registered trademarks of Analog Devices, Inc.

## Document Feedback

Information  furnished  by  Analog  Devices  is  believed  to  be  accurate  and  reliable. However,  no  responsibility  is  assumed  by  Analog  Devices  for  its  use,  nor  for  any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective companies.

## PERIPHERALS

Four 32-bit timers/counters, three with PWM support

- 2 dual-channel, full-duplex synchronous serial ports (SPORT), supporting eight stereo I 2 S channels
- 2 serial peripheral interface (SPI) compatible ports
- 1 UART with IrDA support

Parallel peripheral interface (PPI), supporting ITU-R 656 video data formats

- 2-wire interface (TWI) controller

9 peripheral DMAs

- 2 memory-to-memory DMA channels

Event handler with 28 interrupt inputs

- 32 general-purpose I/Os (GPIOs), with programmable hysteresis

Debug/JTAG interface

On-chip PLL capable of frequency multiplication

## Blackfin Embedded Processor

ADSP-BF592

## ADSP-BF592

## TABLE OF CONTENTS

| Features . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   | . 1   |
|------------------------------------------------------------------------------------|-------|
| Memory . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .       | . 1   |
| Peripherals . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .        | . 1   |
| Table of Contents . . . . . . . . . . . . . . . . . . . . . . . .                  | . 2   |
| Revision History . . . . . . . . . . . . . . . . . . . . . . . . .                 | . 2   |
| General Description . . . . . . . . . . . . . . . . . . . .                        | . 3   |
| Portable Low Power Architecture                                                    | . 3   |
| System Integration . . . . . . . . . . . . . . . . . . .                           | . 3   |
| Blackfin Processor Core . . . . . . . . . . . . .                                  | . 3   |
| Memory Architecture . . . . . . . . . . . . . . .                                  | . 5   |
| Event Handling . . . . . . . . . . . . . . . . . . . . . . .                       | . 5   |
| DMAControllers . . . . . . . . . . . . . . . . . . . . .                           | . 6   |
| Processor Peripherals . . . . . . . . . . . . . . . .                              | . 6   |
| Dynamic Power Management . . . . .                                                 | . 8   |
| Voltage Regulation . . . . . . . . . . . . . . . . . . .                           | . 9   |
| Clock Signals . . . . . . . . . . . . . . . . . . . . . . . . . .                  | . 9   |
| Booting Modes . . . . . . . . . . . . . . . . . . . . . . . .                      | 11    |
| Instruction Set Description . . . . . . . .                                        | 12    |

## REVISION HISTORY

12/23-Rev. C to Rev. D

Analog Devices is in the process of updating documentation to provide terminology and language that is culturally appropriate. This is a process with a wide scope and will be phased in as quickly as possible. Thank you for your patience.

Changed package diagram in Outline Dimensions  .........  42

Development Tools ..............................................  12

Additional Information  ........................................  13

Related Signal Chains  ...........................................  13

Signal Descriptions  .................................................  14

Specifications  ........................................................  16

Operating Conditions ...........................................  16

Electrical Characteristics  .......................................  18

Absolute Maximum Ratings ...................................  20

ESD Sensitivity  ...................................................  20

Timing Specifications ...........................................  21

Output Drive Currents  .........................................  35

Test Conditions  ..................................................  36

Environmental Conditions  ....................................  39

64-Lead LFCSP Lead Assignment ...............................  40

Outline Dimensions ................................................  42

Ordering Guide  .....................................................  42

## GENERAL DESCRIPTION

The ADSP-BF592 processor is a member of the Blackfin ® family of products, incorporating the Analog Devices/Intel Micro Signal Architecture (MSA). Blackfin processors combine a dualMAC state-of-the-art signal processing engine, the advantages of a clean, orthogonal RISC-like microprocessor instruction set, and single-instruction, multiple-data (SIMD) multimedia capabilities into a single instruction-set architecture.

The ADSP-BF592 processor is completely code compatible with other Blackfin processors. The ADSP-BF592 processor offers performance up to 400 MHz and reduced static power consumption. The processor features are shown in Table 1.

## Table 1. Processor Features

| Feature                                                                                                                                 | ADSP-BF592    |
|-----------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Timer/Counters withPWM SPORTs SPIs UART Parallel Peripheral TWI GPIOs Memory (bytes) L1 Instruction SRAM L1 InstructionROM L1 Data SRAM | 3             |
|                                                                                                                                         | 2             |
|                                                                                                                                         | 2             |
|                                                                                                                                         | 1             |
| Interface                                                                                                                               | 1             |
|                                                                                                                                         | 1             |
|                                                                                                                                         | 32            |
|                                                                                                                                         | 32K           |
|                                                                                                                                         | 64K           |
|                                                                                                                                         | 32K           |
| L1 Scratchpad SRAM                                                                                                                      | 4K            |
| L3 BootROM                                                                                                                              | 4K            |
| Maximum Instruction Rate 1                                                                                                              | 400MHz        |
| Maximum System Clock Speed                                                                                                              | 100MHz        |
| Package Options                                                                                                                         | 64-Lead LFCSP |

1 Maximum instruction rate is not available with every possible SCLK selection.

By integrating a rich set of industry-leading system peripherals and memory, Blackfin processors are the platform of choice for next-generation applications that require RISC-like programmability, multimedia support, and leading-edge signal processing in one integrated package.

## PORTABLE LOW POWER ARCHITECTURE

Blackfin processors provide world-class power management and performance. They are produced with a low power and low voltage design methodology and feature on-chip dynamic power management, which provides the ability to vary both the voltage and frequency of operation to significantly lower overall power consumption. This capability can result in a substantial reduction in power consumption, compared with just varying the frequency of operation. This allows longer battery life for portable appliances.

## SYSTEM INTEGRATION

The ADSP-BF592 processor is a highly integrated system-on-achip solution for the next generation of digital communication and consumer multimedia applications. By combining industry standard interfaces with a high performance signal processing core, cost-effective applications can be developed quickly, without the need for costly external components. The system peripherals include a watchdog timer; three 32-bit timers/ counters with PWM support; two dual-channel, full-duplex synchronous serial ports (SPORTs); two serial peripheral interface (SPI) compatible ports; one UART ® with IrDA support; a parallel peripheral interface (PPI); and a 2-wire interface (TWI) controller.

## BLACKFIN PROCESSOR CORE

As shown in Figure 2, the Blackfin processor core contains two 16-bit multipliers, two 40-bit accumulators, two 40-bit ALUs, four video ALUs, and a 40-bit shifter. The computation units process 8-, 16-, or 32-bit data from the register file.

The compute register file contains eight 32-bit registers. When performing compute operations on 16-bit operand data, the register file operates as 16 independent 16-bit registers. All operands for compute operations come from the multiported register file and instruction constant fields.

Each MAC can perform a 16-bit by 16-bit multiply in each cycle, accumulating the results into the 40-bit accumulators. Signed and unsigned formats, rounding, and saturation are supported.

The ALUs perform a traditional set of arithmetic and logical operations on 16-bit or 32-bit data. In addition, many special instructions are included to accelerate various signal processing tasks. These include bit operations such as field extract and population count, modulo 2 32 multiply, divide primitives, saturation and rounding, and sign/exponent detection. The set of video instructions includes byte alignment and packing operations, 16-bit and 8-bit adds with clipping, 8-bit average operations, and 8-bit subtract/absolute value/accumulate (SAA) operations. The compare/select and vector search instructions are also provided.

For certain instructions, two 16-bit ALU operations can be performed simultaneously on register pairs (a 16-bit high half and 16-bit low half of a compute register). If the second ALU is used, quad 16-bit operations are possible.

The 40-bit shifter can perform shifts and rotates and is used to support normalization, field extract, and field deposit instructions.

The program sequencer controls the flow of instruction execution, including instruction alignment and decoding. For program flow control, the sequencer supports PC relative and indirect conditional jumps (with static branch prediction) and subroutine calls. Hardware is provided to support zero

## ADSP-BF592

overhead looping. The architecture is fully interlocked, meaning that the programmer need not manage the pipeline when executing instructions with data dependencies.

The address arithmetic unit provides two addresses for simultaneous dual fetches from memory. It contains a multiported register file consisting of four sets of 32-bit index, modify, length, and base registers (for circular buffering) and eight additional 32-bit pointer registers (for C-style indexed stack manipulation).

Blackfin processors support a modified Harvard architecture in combination with a hierarchical memory structure. Level 1 (L1) memories are those that typically operate at the full processor speed with little or no latency. At the L1 level, the instruction memory holds instructions only. Data memory holds data, and a dedicated scratchpad data memory stores stack and local variable information.

Multiple L1 memory blocks are provided. The memory management unit (MMU) provides memory protection for individual tasks that may be operating on the core and can protect system registers from unintended access.

The architecture provides three modes of operation: user mode, supervisor mode, and emulation mode. User mode has restricted access to certain system resources, thus providing a protected software environment, while supervisor mode has unrestricted access to the system and core resources.

The Blackfin processor instruction set has been optimized so that 16-bit opcodes represent the most frequently used instructions, resulting in excellent compiled code density. Complex DSP instructions are encoded into 32-bit opcodes, representing fully featured multifunction instructions. Blackfin processors support a limited multi-issue capability, where a 32-bit instruction can be issued in parallel with two 16-bit instructions, allowing the programmer to use many of the core resources in a single instruction cycle.

The Blackfin processor assembly language uses an algebraic syntax for ease of coding and readability. The architecture has been optimized for use in conjunction with the C/C++ compiler, resulting in fast and efficient software implementations.

Figure 2. Blackfin Processor Core

<!-- image -->

## MEMORY ARCHITECTURE

The Blackfin processor views memory as a single unified 4G byte address space, using 32-bit addresses. All resources, including internal memory and I/O control registers, occupy separate sections of this common address space. See Figure 3.

The core-accessible L1 memory system is high performance internal memory that operates at the core clock frequency. The external bus interface unit (EBIU) provides access to the boot ROM.

The memory DMA controller provides high bandwidth datamovement capability. It can perform block transfers of code or data between the L1 Instruction SRAM and L1 Data SRAM memory spaces.

Figure 3. Internal/External Memory Map

<!-- image -->

## Internal (Core-Accessible) Memory

The processor has three blocks of core-accessible memory, providing high bandwidth access to the core.

The first block is the L1 instruction memory, consisting of 32K bytes SRAM. This memory is accessed at full processor speed.

The second core-accessible memory block is the L1 data memory, consisting of 32K bytes. This memory block is accessed at full processor speed.

The third memory block is a 4K byte L1 scratchpad SRAM, which runs at the same speed as the other L1 memories.

## L1 Utility ROM

The L1 instruction ROM contains utility ROM code. This includes the TMK (VDK core), C run-time libraries, and DSP libraries. See the VisualDSP++ documentation for more information.

## Custom ROM (Optional)

The on-chip L1 Instruction ROM on the ADSP-BF592 may be customized to contain user code with the following features:

- 64K bytes of L1 Instruction ROM available for custom code
- Ability to restrict access to all or specific segments of the on-chip ROM

Customers wishing to customize the on-chip ROM for their own application needs should contact ADI sales for more information on terms and conditions and details on the technical implementation.

## I/O Memory Space

The processor does not define a separate I/O space. All resources are mapped through the flat 32-bit address space. On-chip I/O devices have their control registers mapped into memory-mapped registers (MMRs) at addresses near the top of the 4G byte address space. These are separated into two smaller blocks, one which contains the control MMRs for all core functions, and the other which contains the registers needed for setup and control of the on-chip peripherals outside of the core. The MMRs are accessible only in supervisor mode and appear as reserved space to on-chip peripherals.

## Booting from ROM

The processor contains a small on-chip boot kernel, which configures the appropriate peripheral for booting. If the processor is configured to boot from boot ROM memory space, the processor starts executing from the on-chip boot ROM. For more information, see Booting Modes.

## EVENT HANDLING

The event controller on the processor handles all asynchronous and synchronous events to the processor. The processor provides event handling that supports both nesting and prioritization. Nesting allows multiple event service routines to be active simultaneously. Prioritization ensures that servicing of a higher-priority event takes precedence over servicing of a lowerpriority event. The controller provides support for five different types of events:

- Emulation - An emulation event causes the processor to enter emulation mode, allowing command and control of the processor via the JTAG interface.
- RESET - This event resets the processor.
- Nonmaskable Interrupt (NMI) - The NMI event can be generated by the software watchdog timer or by the NMI input signal to the processor. The NMI event is frequently used as a power-down indicator to initiate an orderly shutdown of the system.

## ADSP-BF592

- Exceptions - Events that occur synchronously to program flow (in other words, the exception is taken before the instruction is allowed to complete). Conditions such as data alignment violations and undefined instructions cause exceptions.
- Interrupts - Events that occur asynchronously to program flow. They are caused by input signals, timers, and other peripherals, as well as by an explicit software instruction.

Each event type has an associated register to hold the return address and an associated return-from-event instruction. When an event is triggered, the state of the processor is saved on the supervisor stack.

The processor event controller consists of two stages: the core event controller (CEC) and the system interrupt controller (SIC). The core event controller works with the system interrupt controller to prioritize and control all system events. Conceptually, interrupts from the peripherals enter into the SIC and are then routed directly into the general-purpose interrupts of the CEC.

## Core Event Controller (CEC)

The CEC supports nine general-purpose interrupts (IVG15-7), in addition to the dedicated interrupt and exception events. Of these general-purpose interrupts, the two lowest priority interrupts (IVG15-14) are recommended to be reserved for software interrupt handlers, leaving seven prioritized interrupt inputs to support the peripherals of the processor. The inputs to the CEC, their names in the event vector table (EVT), and their priorities are described in the ADSP-BF59x Blackfin Processor Hardware Reference , 'System Interrupts' chapter.

## System Interrupt Controller (SIC)

The system interrupt controller provides the mapping and routing of events from the many peripheral interrupt sources to the prioritized general-purpose interrupt inputs of the CEC. Although the processor provides a default mapping, the user can alter the mappings and priorities of interrupt events by writing the appropriate values into the interrupt assignment registers (SIC\_IARx). The inputs into the SIC and the default mappings into the CEC are described in the ADSP-BF59x Blackfin Processor Hardware Reference , 'System Interrupts' chapter.

The SIC allows further control of event processing by providing three pairs of 32-bit interrupt control and status registers. Each register contains a bit, corresponding to each peripheral interrupt event. For more information, see the ADSP-BF59x Blackfin Processor Hardware Reference , 'System Interrupts' chapter.

## DMA CONTROLLERS

The processor has multiple, independent DMA channels that support automated data transfers with minimal overhead for the processor core. DMA transfers can occur between the processor's internal memories and any of its DMA-capable peripherals. DMA-capable peripherals include the SPORTs, SPI ports, UART, and PPI. Each individual DMA-capable peripheral has at least one dedicated DMA channel.

The processor DMA controller supports both one-dimensional (1-D) and two-dimensional (2-D) DMA transfers. DMA transfer initialization can be implemented from registers or from sets of parameters called descriptor blocks.

The 2-D DMA capability supports arbitrary row and column sizes up to 64K elements by 64K elements, and arbitrary row and column step sizes up to ±32K elements. Furthermore, the column step size can be less than the row step size, allowing implementation of interleaved data streams. This feature is especially useful in video applications where data can be deinterleaved on the fly.

Examples of DMA types supported by the processor DMA controller include:

- A single, linear buffer that stops upon completion
- A circular, auto-refreshing buffer that interrupts on each full or fractionally full buffer
- 1-D or 2-D DMA using a linked list of descriptors
- 2-D DMA using an array of descriptors, specifying only the base DMA address within a common page

In addition to the dedicated peripheral DMA channels, there are two memory DMA channels, which are provided for transfers between the various memories of the processor system with minimal processor intervention. Memory DMA transfers can be controlled by a very flexible descriptor-based methodology or by a standard register-based autobuffer mechanism.

## PROCESSOR PERIPHERALS

The ADSP-BF592 processor contains a rich set of peripherals connected to the core via several high bandwidth buses, providing flexibility in system configuration, as well as excellent overall system performance (see Figure 1). The processor also contains dedicated communication modules and high speed serial and parallel ports, an interrupt controller for flexible management of interrupts from the on-chip peripherals or external sources, and power management control functions to tailor the performance and power characteristics of the processor and system to many application scenarios.

The SPORTs, SPIs, UART, and PPI peripherals are supported by a flexible DMA structure. There are also separate memory DMA channels dedicated to data transfers between the processor's various memory spaces, including boot ROM. Multiple on-chip buses running at up to 100 MHz provide enough bandwidth to keep the processor core running along with activity on all of the on-chip and external peripherals.

The ADSP-BF592 processor includes an interface to an off-chip voltage regulator in support of the processor's dynamic power management capability.

## Watchdog Timer

The processor includes a 32-bit timer that can be used to implement a software watchdog function. A software watchdog can improve system availability by forcing the processor to a known state through generation of a hardware reset, nonmaskable interrupt (NMI), or general-purpose interrupt, if the timer expires before being reset by software. The programmer

initializes the count value of the timer, enables the appropriate interrupt, then enables the timer. Thereafter, the software must reload the counter before it counts to zero from the programmed value. This protects the system from remaining in an unknown state where software, which would normally reset the timer, has stopped running due to an external noise condition or software error.

If configured to generate a hardware reset, the watchdog timer resets both the core and the processor peripherals. After a reset, software can determine whether the watchdog was the source of the hardware reset by interrogating a status bit in the watchdog timer control register.

The timer is clocked by the system clock (SCLK) at a maximum frequency of fSCLK .

## Timers

There are four general-purpose programmable timer units in the processor. Three timers have an external pin that can be configured either as a pulse width modulator (PWM) or timer output, as an input to clock the timer, or as a mechanism for measuring pulse widths and periods of external events. These timers can be synchronized to an external clock input to the several other associated PF pins, to an external clock input to the PPI\_CLK input pin, or to the internal SCLK.

The timer units can be used in conjunction with the UART to measure the width of the pulses in the data stream to provide a software auto-baud detect function for the respective serial channels.

The timers can generate interrupts to the processor core providing periodic events for synchronization, either to the system clock or to a count of external signals.

In addition to the three general-purpose programmable timers, a fourth timer is also provided. This extra timer is clocked by the internal processor clock and is typically used as a system tick clock for generation of operating system periodic interrupts.

## Serial Ports

The ADSP-BF592 processor incorporates two dual-channel synchronous serial ports (SPORT0 and SPORT1) for serial and multiprocessor communications.

Serial port data can be automatically transferred to and from on-chip memory/external memory via dedicated DMA channels. Each of the serial ports can work in conjunction with another serial port to provide TDM support. In this configuration, one SPORT provides two transmit signals while the other SPORT provides the two receive signals. The frame sync and clock are shared.

Serial ports operate in five modes:

- Standard DSP serial mode
- Multichannel (TDM) mode
- I 2 S mode
- Packed I 2 S mode
- Left-justified mode

## Serial Peripheral Interface (SPI) Ports

The processor has two SPI-compatible ports that enable the processor to communicate with multiple SPI-compatible devices.

The SPI interface uses three pins for transferring data: two data pins (Master Output-Slave Input, MOSI, and Master InputSlave Output, MISO) and a clock pin (serial clock, SCK). An SPI chip select input pin (SPIx\_SS) lets other SPI devices select the processor, and many SPI chip select output pins (SPIx\_SEL7-1) let the processor select other SPI devices. The SPI select pins are reconfigured general-purpose I/O pins. Using these pins, the SPI port provides a full-duplex, synchronous serial interface, which supports both master/slave modes and multimaster environments.

## UART Port

The ADSP-BF592 processor provides a full-duplex universal asynchronous receiver/transmitter (UART) port, which is fully compatible with PC-standard UARTs. The UART port provides a simplified UART interface to other peripherals or hosts, supporting full-duplex, DMA-supported, asynchronous transfers of serial data. The UART port includes support for five to eight data bits, one or two stop bits, and none, even, or odd parity. The UART port supports two modes of operation:

- PIO (programmed I/O) - The processor sends or receives data by writing or reading I/O mapped UART registers. The data is double-buffered on both transmit and receive.
- DMA (direct memory access) - The DMA controller transfers both transmit and receive data. This reduces the number and frequency of interrupts required to transfer data to and from memory. The UART has two dedicated DMA channels, one for transmit and one for receive. These DMA channels have lower default priority than most DMA channels because of their relatively low service rates.

## Parallel Peripheral Interface (PPI)

The processor provides a parallel peripheral interface (PPI) that can connect directly to parallel analog-to-digital and digital-toanalog converters, video encoders and decoders, and other general-purpose peripherals. The PPI consists of a dedicated input clock pin, up to three frame synchronization pins, and up to 16 data pins. The input clock supports parallel data rates up to half the system clock rate, and the synchronization signals can be configured as either inputs or outputs.

The PPI supports a variety of general-purpose and ITU-R 656 modes of operation. In general-purpose mode, the PPI provides half-duplex, bidirectional data transfer with up to 16 bits of data. Up to three frame synchronization signals are also provided. In ITU-R 656 mode, the PPI provides half-duplex bidirectional transfer of 8- or 10-bit video data. Additionally, on-chip decode of embedded start-of-line (SOL) and start-offield (SOF) preamble packets is supported.

## ADSP-BF592

## General-Purpose Mode Descriptions

The general-purpose modes of the PPI are intended to suit a wide variety of data capture and transmission applications. Three distinct submodes are supported:

- Input mode - Frame syncs and data are inputs into the PPI. Input mode is intended for ADC applications, as well as video communication with hardware signaling.
- Frame capture mode - Frame syncs are outputs from the PPI, but data are inputs. This mode allows the video source(s) to act as a target (for frame capture for example).
- Output mode - Frame syncs and data are outputs from the PPI. Output mode is used for transmitting video or other data with up to three output frame syncs.

## ITU-R 656 Mode Descriptions

The ITU-R 656 modes of the PPI are intended to suit a wide variety of video capture, processing, and transmission applications. Three distinct submodes are supported:

- Active video only mode - Active video only mode is used when only the active video portion of a field is of interest and not any of the blanking intervals.
- Vertical blanking only mode - In this mode, the PPI only transfers vertical blanking interval (VBI) data.
- Entire field mode - In this mode, the entire incoming bit stream is read in through the PPI.

## TWI Controller Interface

The processor includes a 2-wire interface (TWI) module for providing a simple exchange method of control data between multiple devices. The TWI is functionally compatible with the widely used I 2 C ® bus standard. The TWI module offers the capabilities of simultaneous controller and target operation and support for both 7-bit addressing and multimedia data arbitration. The TWI interface utilizes two pins for transferring clock (SCL) and data (SDA) and supports the protocol at speeds up to 400K bits/sec.

The TWI module is compatible with serial camera control bus (SCCB) functionality for easier control of various CMOS camera sensor devices.

## Ports

The processor groups the many peripheral signals to two ports-Port F and Port G. Most of the associated pins are shared by multiple signals. The ports function as multiplexer controls.

## General-Purpose I/O (GPIO)

The processor has 32 bidirectional, general-purpose I/O (GPIO) pins allocated across two separate GPIO modules-PORTFIO and PORTGIO, associated with Port F and Port G respectively. Each GPIO-capable pin shares functionality with other processor peripherals via a multiplexing scheme; however, the GPIO functionality is the default state of the device upon power-up. Neither GPIO output nor input drivers are active by default. Each general-purpose port pin can be individually controlled by manipulation of the port control, status, and interrupt registers.

## DYNAMIC POWER MANAGEMENT

The processor provides five operating modes, each with a different performance/power profile. In addition, dynamic power management provides the control functions to dynamically alter the processor core supply voltage, further reducing power dissipation. When configured for a 0 V core supply voltage, the processor enters the hibernate state. Control of clocking to each of the processor peripherals also reduces power consumption. See Table 2 for a summary of the power settings for each mode.

## Table 2. Power Settings

| Mode/State   | PLL               | PLL Bypassed   | Core Clock (CCLK)   | System Clock (SCLK)   | Core Power   |
|--------------|-------------------|----------------|---------------------|-----------------------|--------------|
| Full On      | Enabled           | No             | Enabled             | Enabled               | On           |
| Active       | Enabled/ Disabled | Yes            | Enabled             | Enabled               | On           |
| Sleep        | Enabled           | -              | Disabled            | Enabled               | On           |
| Deep Sleep   | Disabled          | -              | Disabled            | Disabled              | On           |
| Hibernate    | Disabled          | -              | Disabled            | Disabled              | Off          |

## Full-On Operating Mode-Maximum Performance

In the full-on mode, the PLL is enabled and is not bypassed, providing capability for maximum operational frequency. This is the power-up default execution state in which maximum performance can be achieved. The processor core and all enabled peripherals run at full speed.

## Active Operating Mode-Moderate Dynamic Power Savings

In the active mode, the PLL is enabled but bypassed. Because the PLL is bypassed, the processor's core clock (CCLK) and system clock (SCLK) run at the input clock (CLKIN) frequency. DMA access is available to appropriately configured L1 memories.

For more information about PLL controls, see the 'Dynamic Power Management' chapter in the ADSP-BF59x Blackfin Processor Hardware Reference .

## Sleep Operating Mode-High Dynamic Power Savings

The sleep mode reduces dynamic power dissipation by disabling the clock to the processor core (CCLK). The PLL and system clock (SCLK), however, continue to operate in this mode. Typically, an external event wakes up the processor.

System DMA access to L1 memory is not supported in sleep mode.

## Deep Sleep Operating Mode-Maximum Dynamic Power Savings

The deep sleep mode maximizes dynamic power savings by disabling the clocks to the processor core (CCLK) and to all synchronous peripherals (SCLK). Asynchronous peripherals may still be running but cannot access internal resources or external memory. This powered-down mode can only be exited by assertion of the reset interrupt (RESET) or by an asynchronous interrupt generated by a GPIO pin.

Note that when a GPIO pin is used to trigger wake from deep sleep, the programmed wake level must linger for at least 10ns to guarantee detection.

## Hibernate State-Maximum Static Power Savings

The hibernate state maximizes static power savings by disabling clocks to the processor core (CCLK) and to all of the peripherals (SCLK), as well as signaling an external voltage regulator that VDDINT can be shut off. Any critical information stored internally (for example, memory contents, register contents, and other information) must be written to a nonvolatile storage device prior to removing power if the processor state is to be preserved. Writing b#0 to the HIBERNATE bit causes EXT\_WAKE to transition low, which can be used to signal an external voltage regulator to shut down.

Since VDDEXT can still be supplied in this mode, all of the external pins three-state, unless otherwise specified. This allows other devices that may be connected to the processor to still have power applied without drawing unwanted current.

As long as VDDEXT is applied, the VR\_CTL register maintains its state during hibernation. All other internal registers and memories, however, lose their content in the hibernate state.

## Power Savings

As shown in Table 3, the processor supports two different power domains, which maximizes flexibility while maintaining compliance with industry standards and conventions. By isolating the internal logic of the processor into its own power domain, separate from other I/O, the processor can take advantage of dynamic power management without affecting the other I/O devices. There are no sequencing requirements for the various power domains, but all domains must be powered according to the appropriate Specifications table for processor operating conditions, even if the feature/peripheral is not used.

## Table 3. Power Domains

| Power Domain                    | V DD Range   |
|---------------------------------|--------------|
| All internal logic and memories | V DDINT      |
| All other I/O                   | V DDEXT      |

The dynamic power management feature of the processor allows both the processor's input voltage (VDDINT) and clock frequency (fCCLK) to be dynamically controlled.

The power dissipated by a processor is largely a function of its clock frequency and the square of the operating voltage. For example, reducing the clock frequency by 25% results in a 25% reduction in dynamic power dissipation, while reducing the voltage by 25% reduces dynamic power dissipation by more than 40%. Further, these power savings are additive, in that if the clock frequency and supply voltage are both reduced, the power savings can be dramatic, as shown in the following equations.

Power Savings Factor

<!-- image -->

% Power Savings 1 Power Savings Factor -  100%  =

## where:

fCCLKNOM is the nominal core clock frequency f CCLKRED is the reduced core clock frequency

VDDINTNOM is the nominal internal supply voltage

VDDINTRED is the reduced internal supply voltage

TNOM is the duration running at fCCLKNOM

TRED is the duration running at fCCLKRED

## VOLTAGE REGULATION

The ADSP-BF592 processor requires an external voltage regulator to power the VDDINT domain. To reduce standby power consumption, the external voltage regulator can be signaled through EXT\_WAKE to remove power from the processor core. This signal is high-true for power-up and may be connected directly to the low-true shut-down input of many common regulators.

While in the hibernate state, the external supply, V DDEXT, can still be applied, eliminating the need for external buffers. The external voltage regulator can be activated from this powerdown state by asserting the RESET pin, which then initiates a boot sequence. EXT\_WAKE indicates a wakeup to the external voltage regulator.

The power good (PG) input signal allows the processor to start only after the internal voltage has reached a chosen level. In this way, the startup time of the external regulator is detected after hibernation. For a complete description of the power-good functionality, refer to the ADSP-BF59x Blackfin Processor Hardware Reference .

## CLOCK SIGNALS

The processor can be clocked by an external crystal, a sine wave input, or a buffered, shaped clock derived from an external clock oscillator.

If an external clock is used, it must not be halted, changed, or operated below the specified frequency during normal operation. This signal is connected to the processor's CLKIN pin. When an external clock is used, the XTAL pin must be left unconnected.

Alternatively, because the processor includes an on-chip oscillator circuit, an external crystal may be used. For fundamental frequency operation, use the circuit shown in Figure 4. A parallel-resonant, fundamental frequency, microprocessorgrade crystal is connected across the CLKIN and XTAL pins. The on-chip resistance between CLKIN and the XTAL pin is in

## ADSP-BF592

the 500 kΩ range. Further parallel resistors are typically not recommended. The two capacitors and the series resistor shown in Figure 4 fine tune phase and amplitude of the sine frequency.

The capacitor and resistor values shown in Figure 4 are typical values only. The capacitor values are dependent upon the crystal manufacturers' load capacitance recommendations and the PCB physical layout. The resistor value depends on the drive level specified by the crystal manufacturer. The user should verify the customized values based on careful investigations on multiple devices over temperature range.

<!-- image -->

NOTE: VALUES MARKED WITH * MUST BE CUSTOMIZED, DEPENDING ON THE CRYSTAL AND LAYOUT. PLEASE ANALYZE CAREFULLY. FOR FREQUENCIES ABOVE 33 MHz, THE SUGGESTED CAPACITOR VALUE OF 18 pF SHOULD BE TREATED AS A MAXIMUM, AND THE SUGGESTED RESISTOR VALUE SHOULD BE REDUCED TO 0 𝛀 .

Figure 4. External Crystal Connections

A third-overtone crystal can be used for frequencies above 25 MHz. The circuit is then modified to ensure crystal operation only at the third overtone, by adding a tuned inductor circuit as shown in Figure 4. A design procedure for third-overtone operation is discussed in detail in (EE-168) Using Third Overtone Crystals with the ADSP-218x DSP on the Analog Devices website (www.analog.com)-use site search on 'EE-168.'

The Blackfin core runs at a different clock rate than the on-chip peripherals. As shown in Figure 5, the core clock (CCLK) and system peripheral clock (SCLK) are derived from the input clock (CLKIN) signal. An on-chip PLL is capable of multiplying the CLKIN signal by a programmable 5× to 64× multiplication factor (bounded by specified minimum and maximum VCO frequencies). The default multiplier is 6×, but it can be modified by a software instruction sequence.

On-the-fly frequency changes can be effected by simply writing to the PLL\_DIV register. The maximum allowed CCLK and SCLK rates depend on the applied voltages VDDINT and VDDEXT; the VCO is always permitted to run up to the frequency specified by the part's instruction rate. The EXTCLK pin can be configured to output either the SCLK frequency or an inverted version of CLKIN, called CLKBUF. When configured to output SCLK (CLKOUT), the EXTCLK pin acts as a reference signal in many timing specifications. While three-stated by default, it can be enabled using the VRCTL register.

Figure 5. Frequency Modification Methods

<!-- image -->

All on-chip peripherals are clocked by the system clock (SCLK). The system clock frequency is programmable by means of the SSEL3-0 bits of the PLL\_DIV register. The values programmed into the SSEL fields define a divide ratio between the PLL output (VCO) and the system clock. SCLK divider values are 1 through 15. Table 4 illustrates typical system clock ratios.

## Table 4. Example System Clock Ratios

| SignalName   | Divider Ratio   | Example Frequency Ratios (MHz)   | Example Frequency Ratios (MHz)   |
|--------------|-----------------|----------------------------------|----------------------------------|
| SSEL3-0      | VCO/SCLK        | VCO                              | SCLK                             |
| 0010         | 2:1             | 100                              | 50                               |
| 0110         | 6:1             | 300                              | 50                               |
| 1010         | 10:1            | 400                              | 40                               |

Note that the divisor ratio must be chosen to limit the system clock frequency to its maximum of fSCLK. The SSEL value can be changed dynamically without any PLL lock latencies by writing the appropriate values to the PLL divisor register (PLL\_DIV).

The core clock (CCLK) frequency can also be dynamically changed by means of the CSEL1-0 bits of the PLL\_DIV register. Supported CCLK divider ratios are 1, 2, 4, and 8, as shown in Table 5. This programmable core clock capability is useful for fast core frequency modifications.

## Table 5. Core Clock Ratios

| SignalName   | Divider Ratio   | Example Frequency Ratios (MHz)   | Example Frequency Ratios (MHz)   |
|--------------|-----------------|----------------------------------|----------------------------------|
| CSEL1-0      | VCO/CCLK        | VCO                              | CCLK                             |
| 00           | 1:1             | 300                              | 300                              |
| 01           | 2:1             | 300                              | 150                              |
| 10           | 4:1             | 400                              | 100                              |
| 11           | 8:1             | 200                              | 25                               |

The maximum CCLK frequency both depends on the part's instruction rate (see Ordering Guide) and depends on the applied VDDINT voltage. See Table 8 for details. The maximal system clock rate (SCLK) depends on the chip package and the applied VDDINT and VDDEXT voltages (see Table 10).

## BOOTING MODES

The processor has several mechanisms (listed in Table 6) for automatically loading internal and external memory after a reset. The boot mode is defined by the BMODE input pins dedicated to this purpose. There are two categories of boot modes. In flash boot modes, the processor actively loads data from parallel or serial memories. In external host boot modes, the processor receives data from external host devices.

Table 6. Booting Modes

|   BMODE2-0 | Description                         |
|------------|-------------------------------------|
|        000 | Idle/No boot                        |
|        001 | Reserved                            |
|        010 | SPI1 flash using SPI1_SSEL5 on PG11 |
|        011 | External SPI1 host                  |
|        100 | SPI0 flash using SPI0_SSEL2 on PF8  |
|        101 | Boot from PPI port                  |
|        110 | Boot from UART host device          |
|        111 | Execute from internalL1ROM          |

The boot modes listed in Table 6 provide a number of mechanisms for automatically loading the processor's internal and external memories after a reset. By default, all boot modes use the slowest meaningful configuration settings. Default settings can be altered via the initialization code feature at boot time. The BMODE pins of the reset configuration register, sampled during power-on resets and software-initiated resets, implement the modes shown in Table 6.

- IDLE state/No boot (BMODE - 0x0) - In this mode, the boot kernel transitions the processor into Idle state. The processor can then be controlled through JTAG for recovery, debug, or other functions.
- SPI1 flash (BMODE = 0x2) - In this mode, SPI1 is configured to operate in master mode and to connect to 8-, 16-, 24-, or 32-bit addressable devices. The processor uses the PG11/SPI1\_SSEL5 to select a single SPI EEPROM/flash device, submits a read command and successive address bytes (0×00) until a valid 8-, 16-, 24-, or 32-bit addressable device is detected, and begins clocking data into the processor. Pull-up resistors are required on the SSEL and MISO pins. By default, a value of 0×85 is written to the SPI\_BAUD register.
- External SPI1 host (BMODE = 0x3) - In this mode, SPI1 is configured to operate in slave mode and to receive the bytes of the .LDR file from a SPI host (master) agent. To hold off the host device from transmitting while the boot ROM is busy, the Blackfin processor asserts a GPIO pin, called host wait (HWAIT), to signal to the host device not to send any more bytes until the pin is deasserted. The host must interrogate the HWAIT signal, available on PG4, before transmitting every data unit to the processor. A pullup resistor is required on the SPI1\_SS input. A pull-down on the serial clock may improve signal quality and booting robustness.
- SPI0 flash (BMODE = 0x4) - In this mode SPI0 is configured to operate in master mode and to connect to 8-, 16-, 24-, or 32-bit addressable devices. The processor uses the PF8/SPI0\_SSEL2 to select a single SPI EEPROM/flash device, submits a read command and successive address bytes (0×00) until a valid 8-, 16-, 24-, or 32-bit addressable device is detected, and begins clocking data into the processor. Pull-up resistors are required on the SSEL and MISO pins. By default, a value of 0×85 is written to the SPI\_BAUD register.
- Boot from PPI host device (BMODE = 0x5) - The processor operates in PPI slave mode and is configured to receive the bytes of the LDR file from a PPI host (master) agent.
- Boot from UART host device (BMODE = 0x6) - In this mode UART0 is used as the booting source. Using an autobaud handshake sequence, a boot-stream formatted program is downloaded by the host. The host selects a bit rate within the UART clocking capabilities. When performing the autobaud, the UART expects a '@' (0×40) character (eight bits data, one start bit, one stop bit, no parity bit) on the RXD pin to determine the bit rate. The UART then replies with an acknowledgment which is composed of 4 bytes (0xBF-the value of UART\_DLL) and (0×00-the value of UART\_DLH). The host can then download the boot stream. To hold off the host the processor signals the host with the boot host wait (HWAIT) signal. Therefore, the host must monitor the HWAIT, (on PG4), before every transmitted byte.
- Execute from internal L1 ROM (BMODE = 0x7) - In this mode the processor begins execution from the on-chip 64k byte L1 instruction ROM starting at address 0xFFA1 0000.

For each of the boot modes (except Execute from internal L1 ROM), a 16 byte header is first brought in from an external device. The header specifies the number of bytes to be transferred and the memory destination address. Multiple memory blocks may be loaded by any boot sequence. Once all blocks are loaded, program execution commences from the start of L1 instruction SRAM.

The boot kernel differentiates between a regular hardware reset and a wakeup-from-hibernate event to speed up booting in the latter case. Bits 7-4 in the system reset configuration (SYSCR) register can be used to bypass the boot kernel or simulate a wakeup-from-hibernate boot in case of a software reset.

The boot process can be further customized by 'initialization code.' This is a piece of code that is loaded and executed prior to the regular application boot. Typically, this is used to speed up booting by managing the PLL, clock frequencies, or serial bit rates.

The boot ROM also features C-callable functions that can be called by the user application at run time. This enables second stage boot or boot management schemes to be implemented with ease.

## ADSP-BF592

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

The newest IDE, CrossCore Embedded Studio, is based on the Eclipse TM framework. Supporting most Analog Devices processor families, it is the IDE of choice for future processors, including multicore devices. CrossCore Embedded Studio seamlessly integrates available software add-ins to support real time operating systems, file systems, TCP/IP stacks, USB stacks, algorithmic software modules, and evaluation hardware board support packages. For more information, visit www.analog.com/cces.

The other Analog Devices IDE, VisualDSP++, supports processor families introduced prior to the release of CrossCore Embedded Studio. This IDE includes the Analog Devices VDK real time operating system and an open source TCP/IP stack. For more information visit www.analog.com/visualdsp. Note that VisualDSP++ will not support future Analog Devices processors.

## EZ-KIT Lite Evaluation Board

For processor evaluation, Analog Devices provides wide range of EZ-KIT Lite ® evaluation boards. Including the processor and key peripherals, the evaluation board also supports on-chip emulation capabilities and other evaluation and development features. Also available are various EZ-Extenders ® , which are daughter cards delivering additional specialized functionality, including audio and video processing. For more information visit www.analog.com and search on 'ezkit' or 'ezextender'.

## EZ-KIT Lite Evaluation Kits

For a cost-effective way to learn more about developing with Analog Devices processors, Analog Devices offer a range of EZKIT Lite evaluation kits. Each evaluation kit includes an EZ-KIT Lite evaluation board, directions for downloading an evaluation version of the available IDE(s), a USB cable, and a power supply. The USB controller on the EZ-KIT Lite board connects to the USB port of the user's PC, enabling the chosen IDE evaluation suite to emulate the on-board processor in-circuit. This permits the customer to download, execute, and debug programs for the EZ-KIT Lite system. It also supports in-circuit programming of the on-board Flash device to store user-specific boot code, enabling standalone operation. With the full version of CrossCore Embedded Studio or VisualDSP++ installed (sold separately), engineers can develop software for supported EZKITs or any custom system utilizing supported Analog Devices processors.

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

## Designing an Emulator-Compatible DSP Board (Target)

For embedded system test and debug, Analog Devices provides a family of emulators. On each JTAG DSP, Analog Devices supplies an IEEE 1149.1 JTAG Test Access Port (TAP). In-circuit emulation is facilitated by use of this JTAG interface. The emulator accesses the processor's internal features via the processor's TAP, allowing the developer to load code, set breakpoints, and view variables, memory, and registers. The processor must be halted to send data and commands, but once an operation is completed by the emulator, the DSP system is set to run at full speed with no impact on system timing. The emulators require the target board to include a header that supports connection of the DSP's JTAG port to the emulator.

For details on target board design issues including mechanical layout, single processor connections, signal buffering, signal termination, and emulator pod logic, see the Engineer-to-Engineer Note 'Analog Devices JTAG Emulation Technical Reference ' (EE-68) on the Analog Devices website (www.analog.com)-use site search on 'EE-68.' This document is updated regularly to keep pace with improvements to emulator support.

## ADDITIONAL INFORMATION

The following publications that describe the ADSP-BF592 processor (and related processors) can be ordered from any Analog Devices sales office or accessed electronically on our website:

- Getting Started With Blackfin Processors
- ADSP-BF59x Blackfin Processor Hardware Reference
- Blackfin Processor Programming Reference
- ADSP-BF592 Blackfin Processor Anomaly List

## RELATED SIGNAL CHAINS

A signal chain is a series of signal conditioning electronic components that receive input (data acquired from sampling either real-time phenomena or from stored data) in tandem, with the output of one portion of the chain supplying input to the next.

Signal chains are often used in signal processing applications to gather and process data or to apply system controls based on analysis of real-time phenomena.

Analog Devices eases signal processing system development by providing signal processing components that are designed to work together well. A tool for viewing relationships between specific applications and related components is available on the www.analog.com website.

The Circuits from the Lab ® site (www.analog.com\circuits) provides:

- Graphical circuit block diagram presentation of signal chains for a variety of circuit types and applications
- Drill down links for components in each chain to selection guides and application information
- Reference designs applying best practice design techniques

## ADSP-BF592

## SIGNAL DESCRIPTIONS

Signal definitions for the ADSP-BF592 processor are listed in Table 7. In order to maintain maximum function and reduce package size and pin count, some pins have dual, multiplexed functions. In cases where pin function is reconfigurable, the default state is shown in plain text, while the alternate function is shown in italics.

During and immediately after reset, all processor signals are three-stated with the following exceptions: EXT\_WAKE is driven high and XTAL is driven in conjunction with CLKIN to

Table 7. Signal Descriptions

| SignalName                               | Type   | Function                                                                                                                      | Driver Type   |
|------------------------------------------|--------|-------------------------------------------------------------------------------------------------------------------------------|---------------|
| Port F: GPIO and Multiplexed Peripherals |        |                                                                                                                               |               |
| PF0-GPIO/ DR1SEC / PPI_D8 / WAKEN1       | I/O    | GPIO/ SPORT1 Receive Data Secondary / PPI Data 8 / WakeEnable 1                                                               | A             |
| PF1-GPIO/ DR1PRI / PPI_D9                | I/O    | GPIO/ SPORT1 Receive Data Primary / PPI Data 9                                                                                | A             |
| PF2-GPIO/ RSCLK1 / PPI_D10               | I/O    | GPIO/ SPORT1 Receive Serial Clock / PPI Data 10                                                                               | A             |
| PF3-GPIO/ RFS1 / PPI_D11                 | I/O    | GPIO/ SPORT1 Receive Frame Sync / PPI Data 11                                                                                 | A             |
| PF4-GPIO/ DT1SEC / PPI_D12               | I/O    | GPIO/ SPORT1 Transmit Data Secondary / PPI Data 12                                                                            | A             |
| PF5-GPIO/ DT1PRI / PPI_D13               | I/O    | GPIO/ SPORT1 Transmit Data Primary / PPI Data 13                                                                              | A             |
| PF6-GPIO/ TSCLK1 / PPI_D14               | I/O    | GPIO/ SPORT1 Transmit Serial Clock / PPI Data 14                                                                              | A             |
| PF7-GPIO/ TFS1 / PPI_D15                 | I/O    | GPIO/ SPORT1 Transmit Frame Sync / PPI Data 15                                                                                | A             |
| PF8-GPIO/ TMR2 / SPI0_SSEL2 / WAKEN0     | I/O    | GPIO/ Timer 2/SPI0 Slave Select Enable 2 / WakeEnable 0                                                                       | A             |
| PF9-GPIO/ TMR0 / PPI_FS1 /SPI0_SSEL3     | I/O    | GPIO/ Timer 0 / PPI Frame Sync 1 / SPI0 Slave Select Enable 3                                                                 | A             |
| PF10-GPIO/ TMR1 / PPI_FS2                | I/O    | GPIO/ Timer 1 / PPI Frame Sync 2                                                                                              | A             |
| PF11-GPIO/ UA_TX / SPI0_SSEL4            | I/O    | GPIO/ UARTTransmit / SPI0 Slave Select Enable 4                                                                               | A             |
| PF12-GPIO/ UA_RX / SPI0_SSEL7 / TACI2-0  | I/O    | GPIO/ UARTReceive / SPI0 Slave Select Enable 7 / Timers 2-0 Alternate Input Capture                                           | A             |
| PF13-GPIO/ SPI0_MOSI / SPI1_SSEL3        | I/O    | GPIO/ SPI0 Master Out Slave In / SPI1 Slave Select Enable 3                                                                   | A             |
| PF14-GPIO/ SPI0_MISO / SPI1_SSEL4        | I/O    | GPIO/ SPI0 Master In Slave Out / SPI1 Slave Select Enable 4 (This pin should always be pulled high through a 4.7 kΩ resistor, | A             |
| PF15-GPIO/ SPI0_SCK / SPI1_SSEL5         | I/O    | GPIO/ SPI0 Clock / SPI1 Slave Select Enable 5                                                                                 | A             |
| Port G: GPIO and Multiplexed Peripherals |        |                                                                                                                               |               |
| PG0-GPIO/ DR0SEC / SPI0_SSEL1 / SPI0_SS  | I/O    | GPIO/ SPORT0 Receive Data Secondary / SPI0 Slave Select Enable 1 / SPI0 Slave Select Input                                    | A             |
| PG1-GPIO/ DR0PRI / SPI1_SSEL1 / WAKEN3   | I/O    | GPIO/ SPORT0 Receive Data Primary / SPI1 Slave Select Enable 1 / WakeEnable 3                                                 | A             |
| PG2-GPIO/ RSCLK0 / SPI0_SSEL5            | I/O    | GPIO/ SPORT0 Receive Serial Clock / SPI0 Slave Select Enable 5                                                                | A             |
| PG3-GPIO/ RFS0 / PPI_FS3                 | I/O    | GPIO/ SPORT0 Receive Frame Sync / PPI Frame Sync 3                                                                            | A             |
| PG4-GPIO(HWAIT)/ DT0SEC / SPI0_SSEL6     | I/O    | GPIO (HWAIT output for Slave Boot Modes)/ SPORT0 Transmit Data Secondary / SPI0 Slave Select Enable 6                         | A             |
| PG5-GPIO/ DT0PRI / SPI1_SSEL6            | I/O    | GPIO/ SPORT0 Transmit Data Primary / SPI1 Slave Select Enable 6                                                               | A             |
| PG6-GPIO/ TSCLK0                         | I/O    | GPIO/ SPORT0 Transmit Serial Clock                                                                                            | A             |
| PG7-GPIO/ TFS0 / SPI1_SSEL7              | I/O    | GPIO/ SPORT0 Transmit Frame Sync / SPI1 Slave Select Enable 7                                                                 | A             |
| PG8-GPIO/ SPI1_SCK / PPI_D0              | I/O    | GPIO/ SPI1 Clock / PPI Data 0                                                                                                 | A             |
| PG9-GPIO/ SPI1_MOSI / PPI_D1             | I/O    | GPIO/ SPI1 Master Out Slave In / PPI Data 1                                                                                   | A             |

create a crystal oscillator circuit. During hibernate, all signals are three-stated with the following exceptions: EXT\_WAKE is driven low and XTAL is driven to a solid logic level.

During and immediately after reset, all I/O pins have their input buffers disabled with the exception of the pins that need pullups or pull-downs, as noted in Table 7.

Adding a parallel termination to EXTCLK may prove useful in further enhancing signal integrity. Be sure to verify overshoot/undershoot and signal integrity specifications on actual hardware.

Table 7. Signal Descriptions (Continued)

| SignalName                               | Type Function   | Type Function                                                                                                                                                         | Driver Type   |
|------------------------------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| PG10-GPIO/ SPI1_MISO / PPI_D2            | I/O             | GPIO/ SPI1 Master In Slave Out / PPI Data 2 (This pin should always bepulled high through a 4.7 kΩresistor if booting via the SPI port.)                              | A             |
| PG11-GPIO/ SPI1_SSEL5 / PPI_D3           | I/O             | GPIO/ SPI1 Slave Select Enable 5 / PPI Data 3                                                                                                                         | A             |
| PG12-GPIO/ SPI1_SSEL2 / PPI_D4 / WAKEN2  | I/O             | GPIO/ SPI1 Slave Select Enable 2 Output / PPI Data 4 / WakeEnable 2                                                                                                   | A             |
| PG13-GPIO/ SPI1_SSEL1 / SPI1_SS / PPI_D5 | I/O             | GPIO/ SPI1 Slave Select Enable 1 Output / PPI Data 5 / SPI1 Slave Select Input                                                                                        | A             |
| PG14-GPIO/ SPI1_SSEL4 / PPI_D6 / TACLK1  | I/O             | GPIO/ SPI1 Slave Select Enable 4 / PPI Data 6 / Timer 1 Auxiliary Clock Input                                                                                         | A             |
| PG15-GPIO/ SPI1_SSEL6 / PPI_D7 / TACLK2  | I/O             | GPIO/ SPI1 Slave Select Enable 6 / PPI Data 7 / Timer 2 Auxiliary Clock Input                                                                                         | A             |
| TWI                                      |                 |                                                                                                                                                                       |               |
| SCL                                      | I/O             | TWI Serial Clock (This signal is an open-drain output and requires a pull-up resistor. Consult version 2.1 of the I 2 C specification for the proper resistor value.) | B             |
| SDA                                      | I/O             | TWI Serial Data (This signal is an open-drain output and requires a pull-up resistor. Consult version 2.1 of the I 2 C specification for the proper resistor value.)  | B             |
| JTAG Port                                |                 |                                                                                                                                                                       |               |
| TCK                                      | I               | JTAG CLK                                                                                                                                                              |               |
| TDO                                      | O               | JTAG Serial Data Out                                                                                                                                                  | A             |
| TDI                                      | I               | JTAG Serial Data In                                                                                                                                                   |               |
| TMS                                      | I               | JTAG Mode Select                                                                                                                                                      |               |
| TRST                                     | I               | JTAG Reset                                                                                                                                                            |               |
| EMU                                      | O               | Emulation Output                                                                                                                                                      | A             |
| Clock                                    |                 |                                                                                                                                                                       |               |
| CLKIN                                    | I               | CLK/Crystal In                                                                                                                                                        |               |
| XTAL                                     | O               | Crystal Output                                                                                                                                                        |               |
| EXTCLK                                   | O               | External Clock Output pin/System Clock Output                                                                                                                         | C             |
| ModeControls                             |                 |                                                                                                                                                                       |               |
| RESET                                    | I               | Reset                                                                                                                                                                 |               |
| NMI                                      | I               | Nonmaskable Interrupt                                                                                                                                                 |               |
| BMODE2-0                                 | I               | Boot Mode Strap 2-0                                                                                                                                                   |               |
| PPI_CLK                                  | I               | PPI Clock Input                                                                                                                                                       |               |
| External Regulator Control               |                 |                                                                                                                                                                       |               |
| PG                                       | I               | Power Good indication                                                                                                                                                 |               |
| EXT_WAKE                                 | O               | Wake up Indication                                                                                                                                                    | A             |
| Power Supplies                           |                 | ALL SUPPLIESMUSTBEPOWERED See Operating Conditions.                                                                                                                   |               |
| V DDEXT                                  | P               | I/O Power Supply                                                                                                                                                      |               |
| V DDINT                                  | P               | Internal Power Supply                                                                                                                                                 |               |
| GND                                      | G               | Ground for All Supplies (Back Side of LFCSP Package.)                                                                                                                 |               |

## ADSP-BF592

## ADSP-BF592

## SPECIFICATIONS

Specifications are subject to change without notice.

## OPERATING CONDITIONS

| Parameter   | Parameter                     | Conditions                                | Min           | Nominal     | Max           | Unit   |
|-------------|-------------------------------|-------------------------------------------|---------------|-------------|---------------|--------|
| V DDINT     | Internal Supply Voltage       |                                           | 1.1           |             | 1.47          | V      |
| V DDEXT     | External Supply Voltage       |                                           | 1.7           | 1.8/2.5/3.3 | 3.6           | V      |
| V IH        | High Level Input Voltage 1, 2 | V DDEXT = 1.9 V                           | 1.1           |             |               | V      |
| V IHCLKIN   | High Level Input Voltage 1, 2 | V DDEXT = 1.9 V                           | 1.2           |             |               | V      |
| V IH        | High Level Input Voltage 1, 2 | V DDEXT = 2.75 V                          | 1.7           |             |               | V      |
| V IH        | High Level Input Voltage 1, 2 | V DDEXT = 3.6 V                           | 2.0           |             |               | V      |
| V IHCLKIN   | High Level Input Voltage 1, 2 | V DDEXT = 3.6 V                           | 2.2           |             |               | V      |
| V IHTWI     | High Level Input Voltage 3    | V DDEXT = 1.90 V/2.75 V/3.6 V             | 0.7 × V DDEXT |             | 3.6           | V      |
| V IL        | Low Level Input Voltage 1, 2  | V DDEXT = 1.7 V                           |               |             | 0.6           | V      |
| V IL        | Low Level Input Voltage 1, 2  | V DDEXT = 2.25 V                          |               |             | 0.7           | V      |
| V IL        | Low Level Input Voltage 1, 2  | V DDEXT = 3.0 V                           |               |             | 0.8           | V      |
| V ILTWI     | Low Level Input Voltage 3     | V DDEXT = Minimum                         |               |             | 0.3 × V DDEXT | V      |
| T J         | Junction Temperature          | 64-Lead LFCSP@T AMBIENT = 0°C to +70°C    | 0             |             | 80            | °C     |
| T J         | Junction Temperature          | 64-Lead LFCSP@T AMBIENT = -40°C to +85°C  | -40           |             | +95           | °C     |
| T J         | Junction Temperature          | 64-Lead LFCSP@T AMBIENT = -40°C to +105°C | -40           |             | +115          | °C     |

## ADSP-BF592 Clock Related Operating Conditions

Table 8 describes the core clock timing requirements for the ADSP-BF592 processor. Take care in selecting MSEL, SSEL, and CSEL ratios so as not to exceed the maximum core clock and system clock (see Table 10). Table 9 describes phase-locked loop operating conditions.

## Table 8. Core Clock (CCLK) Requirements

| Parameter   | Parameter                                           | MinV DDINT   | NomV DDINT   | MaxCCLK Frequency   | Unit   |
|-------------|-----------------------------------------------------|--------------|--------------|---------------------|--------|
| f CCLK      | Core Clock Frequency (All Models)                   | 1.33 V       | 1.400 V      | 400                 | MHz    |
|             | Core Clock Frequency (Industrial/Commercial Models) | 1.16 V       | 1.225 V      | 300                 | MHz    |
|             | Core Clock Frequency (Industrial/Commercial Models) | 1.10 V       | 1.150 V      | 250 1               | MHz    |

## Table 9. Phase-Locked Loop Operating Conditions

| Parameter   | Min                                              | Max              | Unit   |
|-------------|--------------------------------------------------|------------------|--------|
| f VCO       | Voltage Controlled Oscillator (VCO) Frequency 72 | Instruction Rate | MHz    |

## Table 10. Maximum SCLK Conditions

| Parameter 1   |                                          |   V DDEXT 1.8 V/2.5 V/3.3 VNominal | Unit   |
|---------------|------------------------------------------|------------------------------------|--------|
| f SCLK        | CLKOUT/SCLK Frequency (V DDINT  1.16 V) |                                100 | MHz    |
|               | CLKOUT/SCLK Frequency (V DDINT <1.16 V)  |                                 80 | MHz    |

## ADSP-BF592

## ELECTRICAL CHARACTERISTICS

| Parameter       |                                    | Test Conditions                                                                      | Min   | Typical   | Max                        | Unit   |
|-----------------|------------------------------------|--------------------------------------------------------------------------------------|-------|-----------|----------------------------|--------|
| V OH            | High Level Output Voltage          | V DDEXT = 1.7 V, I OH = -0.5mA                                                       | 1.35  |           |                            | V      |
| V OH            | High Level Output Voltage          | V DDEXT = 2.25 V, I OH = -0.5mA                                                      | 2.0   |           |                            | V      |
| V OH            | High Level Output Voltage          | V DDEXT = 3.0 V, I OH = -0.5mA                                                       | 2.4   |           |                            | V      |
| V OL            | Low Level Output Voltage           | V DDEXT = 1.7 V/2.25 V/3.0 V, I OL = 2.0mA                                           |       |           | 0.4                        | V      |
| V OLTWI         | Low Level Output Voltage           | V DDEXT = 1.7 V/2.25 V/3.0 V, I OL = 2.0mA                                           |       |           | 0.4                        | V V    |
| I IH            | High Level Input Current 1         | V DDEXT =3.6 V, V IN = 3.6 V                                                         |       |           | 10                         | µA     |
| I IL            | Low Level Input Current 1          | V DDEXT =3.6 V, V IN = 0 V                                                           |       |           | 10                         | µA     |
| I IHP           | High Level Input Current JTAG 2    | V DDEXT = 3.6 V, V IN = 3.6 V                                                        | 10    |           | 50                         | µA     |
| I OZH           | Three-State Leakage Current 3      | V DDEXT = 3.6 V, V IN = 3.6 V                                                        |       |           | 10                         | µA     |
| I OZHTWI        | Three-State Leakage Current 4      | V DDEXT =3.0 V, V IN = 3.6 V                                                         |       |           | 10                         | µA     |
| I OZL           | Three-State Leakage Current 3      | V DDEXT = 3.6 V, V IN = 0 V                                                          |       |           | 10                         | µA     |
| C IN            | Input Capacitance 5                | f IN = 1 MHz, T AMBIENT = 25°C, V IN = 2.5 V                                         |       | 4         | 8 6                        | pF     |
| I DDDEEPSLEEP 7 | V DDINT Current in Deep Sleep Mode | V DDINT =1.2V, f CCLK =0MHz,f SCLK = 0 MHz, T J = 25°C, ASF = 0.00                   |       | 0.8       |                            | mA     |
| I DDSLEEP       | V DDINT Current in Sleep Mode      | V DDINT = 1.2 V, f SCLK = 25 MHz, T J = 25°C                                         |       | 4         |                            | mA     |
| I DD-IDLE       | V DDINT Current in Idle            | V DDINT = 1.2 V, f CCLK = 50 MHz, T J = 25°C, ASF = 0.35                             |       | 6         |                            | mA     |
| I DD-TYP        | V DDINT Current                    | V DDINT = 1.3 V, f CCLK = 200 MHz, T J = 25°C, ASF = 1.00                            |       | 40        |                            | mA     |
| I DD-TYP        | V DDINT Current                    | V DDINT = 1.3 V, f CCLK = 300 MHz, T J = 25°C, ASF = 1.00                            |       | 66        |                            | mA     |
| I DD-TYP        | V DDINT Current                    | V DDINT = 1.4 V, f CCLK = 400 MHz, T J = 25°C, ASF = 1.00                            |       | 91        |                            | mA     |
| I DDHIBERNATE 7 | Hibernate State Current            | V DDEXT =3.3 V, T J = 25°C, CLKIN = 0 MHz with voltage regulator off (V DDINT = 0 V) |       | 20        |                            | μA     |
| I DDDEEPSLEEP 7 | V DDINT Current in Deep Sleep Mode | f CCLK = 0 MHz, f SCLK = 0 MHz                                                       |       |           | Table 12                   | mA     |
| I DDINT 8       | V DDINT Current                    | f CCLK  0 MHz, f SCLK  0MHz                                                       |       |           | Table 12 + (Table 13 ×ASF) | mA     |

## Total Power Dissipation

Total power dissipation has two components:

1. Static, including leakage current
2. Dynamic, due to transistor switching characteristics

Many operating conditions can also affect power dissipation, including temperature, voltage, operating frequency, and processor activity. Electrical Characteristics shows the current dissipation for internal circuitry (V DDINT). I DDDEEPSLEEP specifies static power dissipation as a function of voltage (V DDINT) and temperature (see Table 12), and IDDINT specifies the total power specification for the listed test conditions, including the dynamic component as a function of voltage (VDDINT) and frequency (Table 13).

There are two parts to the dynamic component. The first part is due to transistor switching in the core clock (CCLK) domain. This part is subject to an Activity Scaling Factor (ASF), which represents application code running on the processor core and L1 memories (Table 11).

Table 12. Static Current - IDD-DEEPSLEEP (mA)

|            | Voltage (V DDINT ) 1   | Voltage (V DDINT ) 1   | Voltage (V DDINT ) 1   | Voltage (V DDINT ) 1   | Voltage (V DDINT ) 1   | Voltage (V DDINT ) 1   | Voltage (V DDINT ) 1   | Voltage (V DDINT ) 1   |
|------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|
| T J (°C) 1 | 1.15V                  | 1.20V                  | 1.25V                  | 1.30V                  | 1.35V                  | 1.40V                  | 1.45V                  | 1.50V                  |
| 25         | 0.85                   | 0.98                   | 1.13                   | 1.29                   | 1.46                   | 1.62                   | 1.85                   | 2.07                   |
| 40         | 1.57                   | 1.8                    | 2.01                   | 2.16                   | 2.51                   | 2.74                   | 3.05                   | 3.36                   |
| 55         | 2.57                   | 2.88                   | 3.2                    | 3.5                    | 3.84                   | 4.22                   | 4.63                   | 5.05                   |
| 70         | 4.04                   | 4.45                   | 4.86                   | 5.3                    | 5.81                   | 6.31                   | 6.87                   | 7.45                   |
| 85         | 6.52                   | 7.12                   | 7.73                   | 8.36                   | 9.09                   | 9.86                   | 10.67                  | 11.54                  |
| 100        | 9.67                   | 10.51                  | 11.37                  | 12.24                  | 13.21                  | 14.26                  | 15.37                  | 16.55                  |
| 115        | 14.18                  | 15.29                  | 16.45                  | 17.71                  | 19.05                  | 20.45                  | 21.96                  | 23.56                  |

1 Valid temperature and voltage ranges are model-specific. See Operating Conditions.

Table 13. Dynamic Current in CCLK Domain (mA, with ASF = 1.0) 1

| f CCLK (MHz) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   | Voltage (V DDINT ) 2   |
|------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|
| f CCLK (MHz) 2   | 1.15V                  | 1.20V                  | 1.25V                  | 1.30V                  | 1.35V                  | 1.40V                  | 1.45V                  | 1.50V                  |
| 400              | N/A                    | N/A                    | N/A                    | N/A                    | 85.31                  | 88.96                  | 92.81                  | 96.63                  |
| 350              | N/A                    | N/A                    | N/A                    | 72.08                  | 75.41                  | 78.70                  | 82.07                  | 85.46                  |
| 300              | N/A                    | 57.52                  | 60.38                  | 63.22                  | 66.14                  | 69.02                  | 71.93                  | 75.05                  |
| 250              | 46.10                  | 48.43                  | 50.76                  | 53.19                  | 55.68                  | 58.17                  | 60.69                  | 63.23                  |
| 200              | 37.86                  | 39.80                  | 41.76                  | 43.79                  | 45.81                  | 47.85                  | 49.97                  | 52.09                  |
| 100              | 21.45                  | 22.56                  | 23.78                  | 24.98                  | 25.97                  | 26.64                  | 27.92                  | 29.98                  |

The ASF is combined with the CCLK frequency and VDDINT dependent data in Table 13 to calculate this part. The second part is due to transistor switching in the system clock (SCLK) domain, which is included in the IDDINT specification equation.

Table 11. Activity Scaling Factors (ASF) 1

| I DDINT Power Vector   |   Activity Scaling Factor (ASF) |
|------------------------|---------------------------------|
| I DD-PEAK              |                            1.29 |
| I DD-HIGH              |                            1.26 |
| I DD-TYP               |                            1    |
| I DD-APP               |                            0.83 |
| I DD-NOP               |                            0.66 |
| I DD-IDLE              |                            0.33 |

1 See Estimating Power for ASDP-BF534/BF536/BF537 Blackfin Processors (EE-297) . The power vector information also applies to the ADSP-BF592 processor.

## ADSP-BF592

## ABSOLUTE MAXIMUM RATINGS

Stresses greater than those listed in Table 14 may cause permanent damage to the device. These are stress ratings only. Functional operation of the device at these or any other conditions greater than those indicated in the operational sections of this specification is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

Table 14. Absolute Maximum Ratings

| Parameter                                | Rating                   |
|------------------------------------------|--------------------------|
| Internal Supply Voltage (V DDINT )       | -0.3 V to +1.50 V        |
| External (I/O) Supply Voltage (V DDEXT ) | -0.3 V to +3.8 V         |
| Input Voltage 1, 2                       | -0.5 V to +3.6 V         |
| Output Voltage Swing                     | -0.5 V to V DDEXT +0.5 V |
| I OH /I OL Current per Pin Group         | 55 mA(Max)               |
| I OH /I OL Current per Individual Pin    | 25 mA(Max)               |
| Storage Temperature Range                | -65°C to +150°C          |
| Junction Temperature While Biased        | +110°C                   |

Table 15. Maximum Duty Cycle for Input Transient Voltage 1

|   V IN Min (V) 2 |   V IN Max(V) 2 | MaximumDutyCycle 3   |
|------------------|-----------------|----------------------|
|             -0.5 |             3.8 | 100%                 |
|             -0.7 |             4   | 40%                  |
|             -0.8 |             4.1 | 25%                  |
|             -0.9 |             4.2 | 15%                  |
|             -1   |             4.3 | 10%                  |

Table 14 specifies the maximum total source/sink (IOH/IOL) current for a group of pins and for individual pins. Permanent damage can occur if this value is exceeded. To understand this specification, if pins PF0 and PF1 from Group 1 in Table 16 were sourcing or sinking 10 mA each, the total current for those pins would be 20 mA. This would allow up to 35 mA total that could be sourced or sunk by the remaining pins in the group without damaging the device. It should also be noted that the maximum source or sink current for an individual pin cannot exceed 25 mA. The list of all groups and their pins are shown in

Table 16. Note that the VOH and VOL specifications have separate per-pin maximum current requirements, see the Electrical Characteristics table.

Table 16. Total Current Pin Groups-VDDEXT Groups

|   Group | Pins in Group                             |
|---------|-------------------------------------------|
|       1 | PF0, PF1, PF2, PF3                        |
|       2 | PF4, PF5, PF6, PF7                        |
|       3 | PF8, PF9, PF10, PF11                      |
|       4 | PF12, PF13, PF14, PF15                    |
|       5 | PG3, PG2, PG1, PG0                        |
|       6 | PG7, PG6, PG5, PG4                        |
|       7 | PG11, PG10, PG9, PG8                      |
|       8 | PG15, PG14, PG13, PG12                    |
|       9 | TDI, TDO, EMU, TCK, TRST, TMS             |
|      10 | BMODE2, BMODE1, BMODE0                    |
|      11 | EXT_WAKE, PG, RESET, NMI, PPI_CLK, EXTCLK |
|      12 | SDA, SCL, CLKIN, XTAL                     |

## ESD SENSITIVITY

## ESD (electrostatic discharge) sensitive device.

<!-- image -->

Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## TIMING SPECIFICATIONS

Specifications are subject to change without notice.

## Clock and Reset Timing

Table 17 and Figure 6 describe clock and reset operations. Per the CCLK and SCLK timing specifications in Table 8 to Table 10, combinations of CLKIN and clock multipliers must not select core/peripheral clocks in excess of the processor's instruction rate.

Table 17. Clock and Reset Timing

| Parameter                |                                  | V DDEXT 1.8 Min Max   | VNominal   | V DDEXT 2.5 V/3.3 Min Max   | VNominal   | Unit   |
|--------------------------|----------------------------------|-----------------------|------------|-----------------------------|------------|--------|
| Timing Requirement s     | Timing Requirement s             |                       |            |                             |            |        |
| f CKIN                   | CLKIN Period 1, 2, 3, 4          | 12                    | 50         | 12                          | 50         | MHz    |
| t CKINL                  | CLKIN Low Pulse 1                | 10                    |            | 10                          |            | ns     |
| t CKINH                  | CLKIN High Pulse 1               | 10                    |            | 10                          |            | ns     |
| t WRST                   | RESET Asserted Pulse Width Low 5 | 11 × t CKIN           |            | 11 × t CKIN                 |            | ns     |
| Switching Characteristic | Switching Characteristic         |                       |            |                             |            |        |
| t BUFDLAY                | CLKIN to CLKBUF 6 Delay          | 11                    |            |                             | 10         | ns     |

Figure 6. Clock and Reset Timing

<!-- image -->

## ADSP-BF592

## Table 18. Power-Up Reset Timing

| Parameter          | Parameter                                                                                         | Min           | Max   | Unit   |
|--------------------|---------------------------------------------------------------------------------------------------|---------------|-------|--------|
| Timing Requirement | Timing Requirement                                                                                |               |       |        |
| t RST_IN_PWR       | RESET Deasserted after the V DDINT , V DDEXT , and CLKIN Pins are Stable and within Specification | 3500 × t CKIN |       | μs     |

Figure 7. Power-Up Reset Timing

<!-- image -->

## Parallel Peripheral Interface Timing

Table 19 and Figure 8 through Figure 12 describe parallel peripheral interface operations.

## Table 19. Parallel Peripheral Interface Timing

| Parameter                                                   |                                                                                          | V DDEXT = 1.8V Min Max   | V DDEXT = 2.5 V/3.3V Min Max   | Unit   |
|-------------------------------------------------------------|------------------------------------------------------------------------------------------|--------------------------|--------------------------------|--------|
| Timing Requirements                                         | Timing Requirements                                                                      |                          |                                |        |
| t PCLKW                                                     | PPI_CLK Width 1                                                                          | t SCLK -1.5              | t SCLK -1.5                    | ns     |
| t PCLK                                                      | PPI_CLK Period 1                                                                         | 2 × t SCLK -1.5          | 2 × t SCLK -1.5                | ns     |
| Timing Requirements-GP Input and Frame Capture Modes        | Timing Requirements-GP Input and Frame Capture Modes                                     |                          |                                |        |
| t PSUD                                                      | External Frame Sync Startup Delay 2                                                      | 4 × t PCLK               | 4 × t PCLK                     | ns     |
| t SFSPE                                                     | External Frame Sync Setup Before PPI_CLK (Nonsampling Edge for Rx, Sampling Edge for Tx) | 6.7                      | 6.7                            | ns     |
| t HFSPE                                                     | External Frame Sync Hold After PPI_CLK                                                   | 1.8                      | 1.6                            | ns     |
| t SDRPE                                                     | Receive Data Setup Before PPI_CLK                                                        | 4.1                      | 3.5                            | ns     |
| t HDRPE                                                     | Receive Data Hold After PPI_CLK                                                          | 2                        | 1.6                            | ns     |
| Switching Characteristics-GP Output and Frame Capture Modes | Switching Characteristics-GP Output and Frame Capture Modes                              |                          |                                |        |
| t DFSPE                                                     | Internal Frame Sync Delay After PPI_CLK                                                  | 9.0                      | 8.0                            | ns     |
| t HOFSPE                                                    | Internal Frame Sync Hold After PPI_CLK                                                   | 1.7                      | 1.7                            | ns     |
| t DDTPE                                                     | Transmit Data Delay After PPI_CLK                                                        | 8.7                      | 8.0                            | ns     |
| t HDTPE                                                     | Transmit Data Hold After PPI_CLK                                                         | 2.3                      | 1.9                            | ns     |

Figure 8. PPI with External Frame Sync Timing

<!-- image -->

Figure 9. PPI GP Rx Mode with External Frame Sync Timing

<!-- image -->

## ADSP-BF592

<!-- image -->

Figure 10. PPI GP Tx Mode with External Frame Sync Timing

Figure 11. PPI GP Rx Mode with Internal Frame Sync Timing

<!-- image -->

Figure 12. PPI GP Tx Mode with Internal Frame Sync Timing

<!-- image -->

## Serial Ports

Table 20 through Table 24 and Figure 13 through Figure 17 describe serial port operations.

## Table 20. Serial Ports-External Clock

| Parameter                 |                                                                        | Min          | V DDEXT 1.8V Nominal Max   | V DDEXT 2.5 V/3.3V Nominal Min Max   |    | Unit   |
|---------------------------|------------------------------------------------------------------------|--------------|----------------------------|--------------------------------------|----|--------|
| Timing Requirements       | Timing Requirements                                                    |              |                            |                                      |    |        |
| t SFSE                    | TFSx/RFSx Setup Before TSCLKx/RSCLKx 1                                 | 3            |                            | 3                                    |    | ns     |
| t HFSE                    | TFSx/RFSx Hold After TSCLKx/RSCLKx 1                                   | 3            |                            | 3                                    |    | ns     |
| t SDRE                    | Receive Data Setup Before RSCLKx 1                                     | 3            |                            | 3                                    |    | ns     |
| t HDRE                    | Receive Data Hold After RSCLKx 1                                       | 3.5          |                            | 3                                    |    | ns     |
| t SCLKEW                  | TSCLKx/RSCLKx Width                                                    | 4.5          |                            | 4.5                                  |    | ns     |
| t SCLKE                   | TSCLKx/RSCLKx Period                                                   | 2 × t SCLK   |                            | 2 × t SCLK                           |    | ns     |
| t SUDTE                   | Start-Up Delay From SPORT Enable To First External TFSx 2              | 4 × t TSCLKE |                            | 4 × t TSCLKE                         |    | ns     |
| t SUDRE                   | Start-Up Delay From SPORT Enable To First External RFSx 2              | 4 × t RSCLKE |                            | 4 × t RSCLKE                         |    | ns     |
| Switching Characteristics | Switching Characteristics                                              |              |                            |                                      |    |        |
| t DFSE                    | TFSx/RFSx Delay After TSCLKx/RSCLKx (Internally Generated TFSx/RFSx) 3 | 10           |                            |                                      | 10 | ns     |
| t HOFSE                   | TFSx/RFSx Hold After TSCLKx/RSCLKx (Internally Generated TFSx/RFSx) 1  | 0            |                            | 0                                    |    | ns     |
| t DDTE                    | Transmit Data Delay After TSCLKx 1                                     |              | 11                         |                                      | 10 | ns     |
| t HDTE                    | Transmit Data Hold After TSCLKx 1                                      | 0            |                            | 0                                    |    | ns     |

1 Referenced to sample edge.

2 Verified in design but untested.

3 Referenced to drive edge.

## Table 21. Serial Ports-Internal Clock

|                           |                                                                        | V DDEXT 1.8V Nominal   |     | V DDEXT 2.5 V/3.3V Nominal   |     |      |
|---------------------------|------------------------------------------------------------------------|------------------------|-----|------------------------------|-----|------|
| Parameter                 |                                                                        | Min                    | Max | Min                          | Max | Unit |
| Timing Requirements       | Timing Requirements                                                    |                        |     |                              |     |      |
| t SFSI                    | TFSx/RFSx Setup Before TSCLKx/RSCLKx 1                                 | 11.5                   |     | 9.6                          | ns  |      |
| t HFSI                    | TFSx/RFSx Hold After TSCLKx/RSCLKx 1                                   | -1.5                   |     | -1.5                         | ns  |      |
| t SDRI                    | Receive Data Setup Before RSCLKx 1                                     | 11.5                   |     | 11.3                         | ns  |      |
| t HDRI                    | Receive Data Hold After RSCLKx 1                                       | -1.5                   |     | -1.5                         | ns  |      |
| Switching Characteristics | Switching Characteristics                                              |                        |     |                              |     |      |
| t SCLKIW                  | TSCLKx/RSCLKx Width                                                    | 7                      |     | 8                            |     | ns   |
| t DFSI                    | TFSx/RFSx Delay After TSCLKx/RSCLKx (Internally Generated TFSx/RFSx) 2 |                        | 4   |                              | 3   | ns   |
| t HOFSI                   | TFSx/RFSx Hold After TSCLKx/RSCLKx (Internally Generated TFSx/RFSx) 2  | -2                     |     | -2                           |     | ns   |
| t DDTI                    | Transmit Data Delay After TSCLKx 2                                     |                        | 4   |                              | 3   | ns   |
| t HDTI                    | Transmit Data Hold After TSCLKx 2                                      | -1.8                   |     | -1.5                         | ns  |      |

1 Referenced to sample edge.

2 Referenced to drive edge.

## ADSP-BF592

Figure 14. Serial Port Start Up with External Clock and Frame Sync

<!-- image -->

## Table 22. Serial Ports-Enable and Three-State

| Parameter                 |                                           | V DDEXT 1.8V Nominal Min Max   | V DDEXT 1.8V Nominal Min Max   | V DDEXT 2.5 V/3.3V Nominal Min Max   | V DDEXT 2.5 V/3.3V Nominal Min Max   | Unit   |
|---------------------------|-------------------------------------------|--------------------------------|--------------------------------|--------------------------------------|--------------------------------------|--------|
| Switching Characteristics | Switching Characteristics                 |                                |                                |                                      |                                      |        |
| t DTENE                   | Data Enable Delay from External TSCLKx 1  | 0                              |                                | 0                                    |                                      | ns     |
| t DDTTE                   | Data Disable Delay from External TSCLKx 1 |                                | t SCLK + 1                     |                                      | t SCLK + 1                           | ns     |
| t DTENI                   | Data Enable Delay from Internal TSCLKx 1  | -2                             |                                | -2                                   |                                      | ns     |
| t DDTTI                   | Data Disable Delay from Internal TSCLKx 1 |                                | t SCLK + 1                     |                                      | t SCLK + 1                           | ns     |

Figure 15. Serial Ports - Enable and Three-State

<!-- image -->

## ADSP-BF592

## ADSP-BF592

## Table 23. Serial Ports-External Late Frame Sync

| Parameter                 | Parameter                                                    | Min   | V DDEXT 1.8V Nominal Max   | V DDEXT 2.5 V/3.3V Nominal Min Max   | Unit   |
|---------------------------|--------------------------------------------------------------|-------|----------------------------|--------------------------------------|--------|
| Switching Characteristics | Switching Characteristics                                    |       |                            |                                      |        |
| t DDTLFSE                 | Data Delay from Late External TFSx                           |       | 12                         | 10                                   | ns     |
| t DTENLFSE                | DataEnablefromExternalRFSxinmulti-channelmodewith MFD=0 1, 2 | 0     |                            | 0                                    | ns     |

Figure 16. Serial Ports - External Late Frame Sync

<!-- image -->

## Table 24. Serial Ports-Gated Clock Mode

|                           |                                             | V DDEXT 1.8V Nominal Min Max   | Parameter   | V DDEXT 2.5 V/3.3 VNominal Min Max   | Unit   |
|---------------------------|---------------------------------------------|--------------------------------|-------------|--------------------------------------|--------|
| Timing Requirements       | Timing Requirements                         |                                |             |                                      |        |
| t SDRI                    | Receive Data Setup Before TSCLKx            | 11.3                           |             | 8.7                                  | ns     |
| t HDRI                    | Receive Hold After TSCLKx                   | 0                              |             | 0                                    | ns     |
| Switching Characteristics | Switching Characteristics                   |                                |             |                                      |        |
| t DDTI                    | Transmit Data Delay After TSCLKx            | 3                              |             | 3                                    | ns     |
| t HDTI                    | Transmit Data Hold After TSCLKx             | -1.8                           |             | -1.8                                 | ns     |
| t DFTSCLKCNV              | First TSCLKx edge delay after TFSx/TMR1 Low | 0.5 × t TSCLK - 3              |             | 0.5 × t TSCLK - 3                    | ns     |
| t DCNVLTSCLK              | TFSx/TMR1 High Delay After Last TSCLKx Edge | t TSCLK - 3                    |             | t TSCLK - 3                          | ns     |

## GATED CLOCK MODE DATA RECEIVE

Figure 17. Serial Ports Gated Clock Mode

<!-- image -->

## ADSP-BF592

## ADSP-BF592

## Serial Peripheral Interface (SPI) Port-Master Timing

Table 25 and Figure 18 describe SPI port master operations.

## Table 25. Serial Peripheral Interface (SPI) Port-Master Timing

Figure 18. Serial Peripheral Interface (SPI) Port-Master Timing

|                           |                                                 | V DDEXT 1.8V Nominal   | 2.5   | V DDEXT V/3.3V Nominal   |     |      |
|---------------------------|-------------------------------------------------|------------------------|-------|--------------------------|-----|------|
| Parameter                 |                                                 | Min                    | Max   | Min                      | Max | Unit |
| Timing Requirements       | Timing Requirements                             |                        |       |                          |     |      |
| t SSPIDM                  | Data Input Valid to SCK Edge (Data Input Setup) | 11.6                   |       | 9.6                      | ns  |      |
| t HSPIDM                  | SCK Sampling Edge to Data Input Invalid         | -1.5                   |       | -1.5                     | ns  |      |
| Switching Characteristics | Switching Characteristics                       |                        |       |                          |     |      |
| t SDSCIM                  | SPI_SELx low to First SCK Edge                  | 2 × t SCLK - 1.5       |       | 2 × t SCLK - 1.5         | ns  |      |
| t SPICHM                  | Serial Clock High Period                        | 2 × t SCLK - 1.5       |       | 2 × t SCLK - 1.5         | ns  |      |
| t SPICLM                  | Serial Clock Low Period                         | 2 × t SCLK - 1.5       |       | 2 × t SCLK - 1.5         | ns  |      |
| t SPICLK                  | Serial Clock Period                             | 4 × t SCLK - 1.5       |       | 4 × t SCLK - 1.5         | ns  |      |
| t HDSM                    | Last SCK Edge to SPI_SELx High                  | 2 × t SCLK - 2         |       | 2 × t SCLK - 1.5         | ns  |      |
| t SPITDM                  | Sequential Transfer Delay                       | 2 × t SCLK - 1.5       |       | 2 × t SCLK - 1.5         |     | ns   |
| t DDSPIDM                 | SCK Edge to Data Out Valid (Data Out Delay)     | 0                      | 6     | 0                        | 6   | ns   |
| t HDSPIDM                 | SCK Edge to Data Out Invalid (Data Out Hold)    | -1                     |       | -1                       | ns  |      |

<!-- image -->

## Serial Peripheral Interface (SPI) Port-Slave Timing

Table 26 and Figure 19 describe SPI port slave operations.

## Table 26. Serial Peripheral Interface (SPI) Port-Slave Timing

Figure 19. Serial Peripheral Interface (SPI) Port-Slave Timing

| Parameter                 |                                                 | V DDEXT 1.8V Nominal Min   | 2.5 V/3.3V Max Min   | V DDEXT Nominal Max   | Unit   |
|---------------------------|-------------------------------------------------|----------------------------|----------------------|-----------------------|--------|
| Timing Requirements       | Timing Requirements                             |                            |                      |                       |        |
| t SPICHS                  | Serial Clock High Period                        | 2 × t SCLK - 1.5           |                      | 2 × t SCLK - 1.5      | ns     |
| t SPICLS                  | Serial Clock Low Period                         | 2 × t SCLK - 1.5           |                      | 2 × t SCLK - 1.5      | ns     |
| t SPICLK                  | Serial Clock Period                             | 4 × t SCLK                 |                      | 4 × t SCLK            | ns     |
| t HDS                     | Last SCK Edge to SPI_SS Not Asserted            | 2 × t SCLK - 1.5           |                      | 2 × t SCLK - 1.5      | ns     |
| t SPITDS                  | Sequential Transfer Delay                       | 2 × t SCLK - 1.5           |                      | 2 × t SCLK - 1.5      | ns     |
| t SDSCI                   | SPI_SS Assertion to First SCK Edge              | 2 × t SCLK - 1.5           |                      | 2 × t SCLK - 1.5      | ns     |
| t SSPID                   | Data Input Valid to SCK Edge (Data Input Setup) | 1.6                        |                      | 1.6                   | ns     |
| t HSPID                   | SCK Sampling Edge to Data Input Invalid         | 2                          |                      | 1.6                   | ns     |
| Switching Characteristics | Switching Characteristics                       |                            |                      |                       |        |
| t DSOE                    | SPI_SS Assertion to Data Out Active             | 0                          | 12                   | 0 10.3                | ns     |
| t DSDHI                   | SPI_SS Deassertion to Data High Impedance       | 0                          | 11                   | 0 9                   | ns     |
| t DDSPID                  | SCK Edge to Data Out Valid (Data Out Delay)     |                            | 10                   | 10                    | ns     |
| t HDSPID                  | SCK Edge to Data Out Invalid (Data Out Hold)    | 0                          |                      | 0                     | ns     |

<!-- image -->

## ADSP-BF592

## Universal Asynchronous Receiver-Transmitter (UART) Ports-Receive and Transmit Timing

The UART ports receive and transmit operations are described in the ADSP-BF59x Hardware Reference Manual .

## General-Purpose Port Timing

Table 27 and Figure 20 describe general-purpose port operations.

## Table 27. General-Purpose Port Timing

Figure 20. General-Purpose Port Timing

|                          | V DDEXT 1.8V/2.5 V/3.3V Nominal   | V DDEXT 1.8V/2.5 V/3.3V Nominal   |      |
|--------------------------|-----------------------------------|-----------------------------------|------|
| Parameter                | Min                               | Max                               | Unit |
| Timing Requirement       |                                   |                                   |      |
| t WFI General-Purpose    | t SCLK + 1                        | ns                                |      |
| Switching Characteristic |                                   |                                   |      |
| t GPOD General-Purpose   | 0                                 | 11                                | ns   |

<!-- image -->

## Timer Cycle Timing

Table 28 and Figure 21 describe timer expired operations. The input signal is asynchronous in 'width capture mode' and 'external clock mode' and has an absolute maximum input frequency of (fSCLK/2) MHz.

## Table 28. Timer Cycle Timing

|                           |                                                          | V DDEXT 1.8V Nominal   |                     | V 2.5 V/3.3V   | DDEXT Nominal       |      |
|---------------------------|----------------------------------------------------------|------------------------|---------------------|----------------|---------------------|------|
| Parameter                 |                                                          | Min                    | Max                 | Min            | Max                 | Unit |
| Timing Requirements       | Timing Requirements                                      |                        |                     |                |                     |      |
| t WL                      | Timer Pulse Width Input Low (Measured In SCLK Cycles) 1  | 1 × t SCLK             |                     | 1 × t SCLK     |                     | ns   |
| t WH                      | Timer Pulse Width Input High (Measured In SCLK Cycles) 1 | 1 × t SCLK             |                     | 1 × t SCLK     |                     | ns   |
| t TIS                     | Timer Input Setup Time Before CLKOUT Low 2               | 10                     |                     | 8              |                     | ns   |
| t TIH                     | Timer Input Hold Time After CLKOUT Low 2                 | -2                     |                     | -2             |                     | ns   |
| Switching Characteristics | Switching Characteristics                                |                        |                     |                |                     |      |
| t HTO                     | Timer Pulse Width Output (Measured In SCLK Cycles)       | 1 × t SCLK - 2         | (2 32 - 1) × t SCLK | t SCLK - 1.5   | (2 32 - 1) × t SCLK | ns   |
| t TOD                     | Timer Output Update Delay After CLKOUT High              |                        | 6                   |                | 6                   | ns   |

Figure 21. Timer Cycle Timing

<!-- image -->

## Timer Clock Timing

Table 29 and Figure 22 describe timer clock timing.

## Table 29. Timer Clock Timing

Figure 22. Timer Clock Timing

|                          | V DDEXT = 1.8V Max   | V DDEXT = 2.5V/3.3V   | V DDEXT = 2.5V/3.3V   |      |
|--------------------------|----------------------|-----------------------|-----------------------|------|
| Parameter                |                      | Min                   | Max                   | Unit |
| Switching Characteristic |                      |                       |                       |      |
| t TODP Timer Output      | 12.64                |                       | 12.64                 | ns   |

<!-- image -->

## ADSP-BF592

## JTAG Test And Emulation Port Timing

Table 30 and Figure 23 describe JTAG port operations.

## Table 30. JTAG Port Timing

| Parameter                 |                                             | V DDEXT 1.8V Nominal Min   | Max   | V DDEXT 2.5 V/3.3V Nominal Min Max   | Unit   |
|---------------------------|---------------------------------------------|----------------------------|-------|--------------------------------------|--------|
| Timing Requirements       |                                             |                            |       |                                      |        |
| t TCK                     | TCK Period                                  | 20                         |       | 20                                   | ns     |
| t STAP                    | TDI, TMS Setup Before TCK High              | 4                          |       | 4                                    | ns     |
| t HTAP                    | TDI, TMS Hold After TCK High                | 4                          |       | 4                                    | ns     |
| t SSYS                    | System Inputs Setup Before TCK High 1       | 4                          |       | 5                                    | ns     |
| t HSYS                    | System Inputs Hold After TCK High 1         | 5                          |       | 5                                    | ns     |
| t TRSTW                   | TRST Pulse Width 2 (measured in TCK cycles) | 4                          |       | 4                                    | TCK    |
| Switching Characteristics | Switching Characteristics                   |                            |       |                                      |        |
| t DTDO                    | TDODelay from TCK Low                       |                            | 10    | 10                                   | ns     |
| t DSYS                    | System Outputs Delay After TCK Low 3        |                            | 13    | 13                                   | ns     |

Figure 23. JTAG Port Timing

<!-- image -->

## OUTPUT DRIVE CURRENTS

Figure 24 through Figure 32 show typical current-voltage characteristics for the output drivers of the ADSP-BF592 processor. The curves represent the current drive capability of the output drivers. See Table 7 for information about which driver type corresponds to a particular pin.

Figure 24. Driver Type A Current (3.3V VDDEXT )

<!-- image -->

Figure 25. Drive Type A Current (2.5V VDDEXT )

<!-- image -->

## ADSP-BF592

<!-- image -->

Figure 26. Driver Type A Current (1.8V V DDEXT )

Figure 27. Driver Type B Current (3.3V VDDEXT )

<!-- image -->

Figure 28. Driver Type B Current (2.5V VDDEXT )

<!-- image -->

## ADSP-BF592

<!-- image -->

Figure 29. Driver Type B Current (1.8V VDDEXT )

<!-- image -->

Figure 30. Driver Type C Current (3.3V VDDEXT )

Figure 31. Driver Type C Current (2.5V V DDEXT )

<!-- image -->

Figure 32. Driver Type C Current (1.8V VDDEXT )

<!-- image -->

## TEST CONDITIONS

All timing parameters appearing in this data sheet were measured under the conditions described in this section. Figure 33 shows the measurement point for ac measurements (except output enable/disable). The measurement point VMEAS is VDDEXT/2 for VDDEXT (nominal) = 1.8 V/2.5 V/3.3 V.

Figure 33. Voltage Reference Levels for AC Measurements (Except Output Enable/Disable)

<!-- image -->

## Output Enable Time Measurement

Output pins are considered to be enabled when they have made a transition from a high impedance state to the point when they start driving.

The output enable time tENA is the interval from the point when a reference signal reaches a high or low voltage level to the point when the output starts driving as shown on the right side of Figure 34.

<!-- image -->

HIGH IMPEDANCE STATE

Figure 34. Output Enable/Disable

The time tENA\_MEASURED is the interval from when the reference signal switches to when the output voltage reaches VTRIP(high) or VTRIP(low) and is shown below.

- VDDEXT (nominal) = 1.8 V, VTRIP (high) is 1.05 V, VTRIP (low) is 0.75 V
- VDDEXT (nominal) = 2.5 V, VTRIP (high) is 1.5 V, VTRIP (low) is 1.0 V
- VDDEXT (nominal) = 3.3 V, VTRIP (high) is 1.9 V, VTRIP (low) is 1.4 V

Time tTRIP is the interval from when the output starts driving to when the output reaches the VTRIP(high) or VTRIP(low) trip voltage.

Time tENA is calculated as shown in the equation:

<!-- formula-not-decoded -->

If multiple pins are enabled, the measurement value is that of the first lead to start driving.

## Output Disable Time Measurement

Output pins are considered to be disabled when they stop driving, go into a high impedance state, and start to decay from their output high or low voltage. The output disable time tDIS is the difference between tDIS\_MEASURED and t DECAY as shown on the left side of Figure 34.

<!-- formula-not-decoded -->

The time for the voltage on the bus to decay by ΔV is dependent on the capacitive load CL and the load current IL. This decay time can be approximated by the equation:

<!-- formula-not-decoded -->

The time tDECAY is calculated with test loads C L and I L , and with ΔV equal to 0.25 V for VDDEXT (nominal) = 2.5 V/3.3 V and 0.15 V for VDDEXT (nominal) = 1.8V.

The time tDIS\_MEASURED is the interval from when the reference signal switches to when the output voltage decays ΔV from the measured output high or output low voltage.

## Example System Hold Time Calculation

To determine the data output hold time in a particular system, first calculate tDECAY using the equation given above. Choose ΔV to be the difference between the processor's output voltage and the input threshold for the device requiring the hold time. CL is the total bus capacitance (per data line), and I L is the total leakage or three-state current (per data line). The hold time will be t DECAY plus the various output disable times as specified in the Timing Specifications.

## Capacitive Loading

Output delays and holds are based on standard capacitive loads of an average of 6 pF on all pins (see Figure 35). V LOAD is equal to (VDDEXT)/2.

<!-- image -->

NOTES:

THE WORST CASE TRANSMISSION LINE DELAY IS SHOWN AND CAN BE USED FOR THE OUTPUT TIMING ANALYSIS TO REFLECT THE TRANSMISSION LINE EFFECT AND MUST BE CONSIDERED. THE TRANSMISSION LINE (TD) IS FOR LOAD ONLY AND DOES NOT AFFECT THE DATA SHEET TIMING SPECIFICATIONS.

ANALOG DEVICES RECOMMENDS USING THE IBIS MODEL TIMING FOR A GIVEN SYSTEM REQUIREMENT. IF NECESSARY, A SYSTEM MAY INCORPORATE EXTERNAL DRIVERS TO COMPENSATE FOR ANY TIMING DIFFERENCES.

Figure 35. Equivalent Device Loading for AC Measurements (Includes All Fixtures)

The graphs of Figure 36 through Figure 41 show how output rise time varies with capacitance. The delay and hold specifications given should be derated by a factor derived from these figures. The graphs in these figures may not be linear outside the ranges shown.

Figure 36. Driver Type A Typical Rise and Fall Times (10%-90%) vs. Load Capacitance (1.8V VDDEXT)

<!-- image -->

## ADSP-BF592

<!-- image -->

Figure 37. Driver Type A Typical Rise and Fall Times (10%-90%) vs. Load Capacitance (2.5V VDDEXT)

<!-- image -->

Figure 38. Driver Type A Typical Rise and Fall Times (10%-90%) vs. Load Capacitance (3.3V VDDEXT)

<!-- image -->

Figure 39. Driver Type C Typical Rise and Fall Times (10%-90%) vs. Load Capacitance (1.8V VDDEXT)

Figure 40. Driver Type C Typical Rise and Fall Times (10%-90%) vs. Load Capacitance (2.5V VDDEXT)

<!-- image -->

Figure 41. Driver Type C Typical Rise and Fall Times (10%-90%) vs. Load Capacitance (3.3V VDDEXT)

<!-- image -->

## ENVIRONMENTAL CONDITIONS

To determine the junction temperature on the application printed circuit board use:

<!-- formula-not-decoded -->

where:

TJ = junction temperature (°C)

TCASE = case temperature (°C) measured by customer at top center of package.

 JT = from Table 31

PD = power dissipation (see Total Power Dissipation for the method to calculate PD)

Table 31. Thermal Characteristics

| Parameter   | Condition             |   Typical | Unit   |
|-------------|-----------------------|-----------|--------|
| θ JA        | 0 linear m/s air flow |     23.5  | °C/W   |
| θ JMA       | 1 linear m/s air flow |     20.9  | °C/W   |
| θ JMA       | 2 linear m/s air flow |     20.2  | °C/W   |
| θ JB        |                       |     11.2  | °C/W   |
| θ JC        |                       |      9.5  | °C/W   |
| Ψ JT        | 0 linear m/s air flow |      0.21 | °C/W   |
| Ψ JT        | 1 linear m/s air flow |      0.36 | °C/W   |
| Ψ JT        | 2 linear m/s air flow |      0.43 | °C/W   |

Values of  JA are provided for package comparison and printed circuit board design considerations.  JA can be used for a first order approximation of TJ by the equation:

<!-- formula-not-decoded -->

where:

TA = ambient temperature (°C)

Values of  JC are provided for package comparison and printed circuit board design considerations when an external heat sink is required.

Values of  JB are provided for package comparison and printed circuit board design considerations.

In Table 31, airflow measurements comply with JEDEC standards JESD51-2 and JESD51-6, and the junction-to-board measurement complies with JESD51-8. The junction-to-case measurement complies with MIL-STD-883 (Method 1012.1). All measurements use a 2S2P JEDEC test board.

## ADSP-BF592

## 64-LEAD LFCSP LEAD ASSIGNMENT

Table 32 lists the LFCSP leads by signal mnemonic. Table 33 lists the LFCSP by lead number.

Table 32. 64-Lead LFCSP Lead Assignment (Alphabetical by Signal)

| Signal      | Lead No.   | Signal   | Lead No.   | Signal   | Lead No.   | Signal   |   Lead No. |
|-------------|------------|----------|------------|----------|------------|----------|------------|
| BMODE0      | 29         | PF7      | 7          | PG6      | 38         | TDO      |         23 |
| BMODE1      | 28         | PF8      | 10         | PG7      | 39         | TMS      |         21 |
| BMODE2      | 27         | PF9      | 11         | PG8      | 42         | TRST     |         20 |
| EXTCLK/SCLK | 57         | PF10     | 12         | PG9      | 43         | V DDEXT  |          3 |
| CLKIN       | 61         | PF11     | 13         | PG10     | 44         | V DDEXT  |         14 |
| EMU         | 19         | PF12     | 15         | PG11     | 45         | V DDEXT  |         25 |
| EXT_WAKE    | 51         | PF13     | 16         | PG12     | 47         | V DDEXT  |         35 |
| GND         | 30         | PF14     | 17         | PG13     | 48         | V DDEXT  |         46 |
| NMI         | 54         | PF15     | 18         | PG14     | 49         | V DDEXT  |         58 |
| PF0         | 63         | PG       | 52         | PG15     | 50         | V DDINT  |          8 |
| PF1         | 64         | PG0      | 31         | PPI_CLK  | 56         | V DDINT  |          9 |
| PF2         | 1          | PG1      | 32         | RESET    | 53         | V DDINT  |         26 |
| PF3         | 2          | PG2      | 33         | SCL      | 60         | V DDINT  |         40 |
| PF4         | 4          | PG3      | 34         | SDA      | 59         | V DDINT  |         41 |
| PF5         | 5          | PG4      | 36         | TCK      | 24         | V DDINT  |         55 |
| PF6         | 6          | PG5      | 37         | TDI      | 22         | XTAL     |         62 |
|             |            |          |            |          |            | GND *    |         65 |

Table 33. 64-Lead LFCSP Lead Assignment (Numerical by Lead Number)

| Lead No.   | Signal   | Lead No.   | Signal   | Lead No.   | Signal   |   Lead No. | Signal      |
|------------|----------|------------|----------|------------|----------|------------|-------------|
| 1          | PF2      | 17         | PF14     | 33         | PG2      |         49 | PG14        |
| 2          | PF3      | 18         | PF15     | 34         | PG3      |         50 | PG15        |
| 3          | V DDEXT  | 19         | EMU      | 35         | V DDEXT  |         51 | EXT_WAKE    |
| 4          | PF4      | 20         | TRST     | 36         | PG4      |         52 | PG          |
| 5          | PF5      | 21         | TMS      | 37         | PG5      |         53 | RESET       |
| 6          | PF6      | 22         | TDI      | 38         | PG6      |         54 | NMI         |
| 7          | PF7      | 23         | TDO      | 39         | PG7      |         55 | V DDINT     |
| 8          | V DDINT  | 24         | TCK      | 40         | V DDINT  |         56 | PPI_CLK     |
| 9          | V DDINT  | 25         | V DDEXT  | 41         | V DDINT  |         57 | EXTCLK/SCLK |
| 10         | PF8      | 26         | V DDINT  | 42         | PG8      |         58 | V DDEXT     |
| 11         | PF9      | 27         | BMODE2   | 43         | PG9      |         59 | SDA         |
| 12         | PF10     | 28         | BMODE1   | 44         | PG10     |         60 | SCL         |
| 13         | PF11     | 29         | BMODE0   | 45         | PG11     |         61 | CLKIN       |
| 14         | V DDEXT  | 30         | GND      | 46         | V DDEXT  |         62 | XTAL        |
| 15         | PF12     | 31         | PG0      | 47         | PG12     |         63 | PF0         |
| 16         | PF13     | 32         | PG1      | 48         | PG13     |         64 | PF1         |
|            |          |            |          |            |          |         65 | GND *       |

Figure 42 shows the top view of the LFCSP lead configuration. Figure 43 shows the bottom view of the LFCSP lead configuration.

Figure 42. 64-Lead LFCSP Lead Configuration (Top View)

<!-- image -->

Figure 43. 64-Lead LFCSP Lead Configuration (Bottom View)

<!-- image -->

## ADSP-BF592

## OUTLINE DIMENSIONS

Dimensions in Figure 44 are shown in millimeters.

<!-- image -->

COMPLIANT TO JEDEC STANDARDS MO-220-VMMD-4

Figure 44. 64-Lead Lead Frame Chip Scale Package [LFCSP] 9 × 9 mm Body and 0.85 mm Package Height (CP-64-4) Dimensions shown in millimeters

PKG 006709/6712

## ORDERING GUIDE

| Model 1, 2       | Temperature Range 3   | Instruction Rate (Max)   | Package Description   | Package Option   |
|------------------|-----------------------|--------------------------|-----------------------|------------------|
| ADSP-BF592KCPZ-2 | 0ºC to +70ºC          | 200 MHz                  | 64-Lead LFCSP         | CP-64-4          |
| ADSP-BF592KCPZ   | 0ºC to +70ºC          | 400 MHz                  | 64-Lead LFCSP         | CP-64-4          |
| ADSP-BF592BCPZ-2 | -40ºC to +85ºC        | 200 MHz                  | 64-Lead LFCSP         | CP-64-4          |
| ADSP-BF592BCPZ   | -40ºC to +85ºC        | 400 MHz                  | 64-Lead LFCSP         | CP-64-4          |

<!-- image -->