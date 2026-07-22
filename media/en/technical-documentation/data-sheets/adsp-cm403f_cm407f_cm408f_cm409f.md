<!-- lastmod 2026-04-15 -->
<!-- image -->

## Mixed-Signal Control Processor with Arm Cortex-M4 and 16-Bit ADCs

## ADSP-CM403F/CM407F/CM408F/CM409F

## SYSTEM FEATURES

Up to 240 MHz Arm Cortex-M4 with floating-point unit 24-channel analog front end (AFE) with 16-bit ADCs

128K Byte to 384K Byte zero-wait-state L1 SRAM with

16K Byte L1 cache

Up to 2M Byte flash memory

Single 3.3 V power supply

Package Options:

176-lead (24 mm × 24 mm) LQFP package

120-lead (14 mm × 14 mm) LQFP package

212-ball (19 mm × 19 mm) BGA package

Static memory controller (SMC) with asynchronous memory interface that supports 8-bit and 16-bit memories Enhanced PWM units

Four 3 rd /4 th order SINC filter pairs for glueless connection of sigma-delta modulators

Hardware-based harmonic analysis engine

10/100 Ethernet MAC with IEEE 1588v2 support

Figure 1. Block Diagram

<!-- image -->

## [Document Feedback](https://form.analog.com/Form_Pages/feedback/documentfeedback.aspx?doc=ADSP-CM403F_CM407F_CM408F_CM409F.pdf&product=ADSP-CM403F%20ADSP-CM407F%20ADSP-CM408F%20ADSP-CM409F&rev=B)

Information  furnished  by  Analog  Devices  is  believed  to  be  accurate  and  reliable. However,  no  responsibility  is  assumed  by  Analog  Devices  for  its  use,  nor  for  any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

Full Speed USB on-the-go (OTG)

Two CAN (controller area network) 2.0B interfaces

Three UART ports

Two serial peripheral interface (SPI-compatible) ports

Three/four synchronous serial ports

Eight 32-bit GP timers, three capture timing units

Four encoder interfaces, 2 with frequency division

2 C bus standard

One TWI unit, fully compatible with I Lightweight security

## ANALOG FRONT END

Two 16-bit SAR ADCs with up to 24 multiplexed inputs, supporting dual simultaneous conversion in 380 ns (16-bit, no missing codes)

ADC controller (ADCC) and DAC controller (DACC)

Two 12-bit DACs

Two 2.5 V precision voltage reference outputs (For details, see ADC/DAC Specifications)

## ADSP-CM403F/CM407F/CM408F/CM409F

| TABLE OF CONTENTS                                                                                                                                                        |         |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| System Features . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                  | . . . 1 |
| Analog Front End . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                       | . . . 1 |
| Table of Contents . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                    | . . . 2 |
| Revision History . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                   | . . . 2 |
| General Description . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                          | . . . 3 |
| Analog Front End . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                             | . . . 4 |
| Arm Cortex-M4 Core . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                     | . . . 7 |
| EmbeddedICE . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                        | . . . 7 |
| Processor Infrastructure . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                     | . . . 8 |
| Memory Architecture . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                    | . . . 8 |
| System Acceleration . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                | . 10    |
| Security Features . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                          | . 10    |
| Security Features Disclaimer . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                           | . 11    |
| Processor Reliability Features . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                           | . 11    |
| Additional Processor Peripherals . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                   | . 11    |
| Clock and Power Management . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                   | . 14    |
| System Debug Unit (SDU) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                            | . 16    |
| Development Tools . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                | . 17    |
| Additional Information . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                     | . 17    |
| Related Signal Chains . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                  | . 17    |
| ADSP-CM40xF Detailed Signal Descriptions . . . . . . . . . . . . . . .                                                                                                   | . 18    |
| ADSP-CM403F 120-Lead LQFP Signal Descriptions . . . . .                                                                                                                  | . 22    |
| ADSP-CM403F GPIO Multiplexing for 120-Lead LQFP .                                                                                                                        | . 27    |
| ADSP-CM407F/ADSP-CM408F 176-Lead LQFP Signal Descriptions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .      | . 29    |
| REVISION HISTORY 4/2026-Rev. Ato Rev. B                                                                                                                                  |         |
| Changes to ADSP-CM40x Family Product Features . . . . . .                                                                                                                | . . . 3 |
| Changes to Boot Modes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                | . 10    |
| Changes to ADSP-CM40xF Detailed Signal Description .                                                                                                                     | . 18    |
| Changes to Operating Conditions . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                | . 64    |
| Changes to TWI0VSEL Settings and VDD_EXT/VBUSTWI . . . . . . . . . .                                                                                                     | . 64    |
| Changes to Flash Specifications . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                          | . 73    |
| Changes to Equivalent Device Loading for AC Measurements (Includes All Fixtures) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 107     |
| Changes to Environmental Conditions . . . . . . . . . . . . . . . . . . . . . . .                                                                                        | 107     |
| Changes to Ordering Guide . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                      | 123     |

| ADSP-CM407F/ADSP-CM408F GPIO Multiplexing for                                                                                                                  | 176-   |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|
| Lead LQFP . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                          | . 37   |
| ADSP-CM409F 212-Ball BGA Signal Descriptions . . . . . . .                                                                                                     | . 40   |
| ADSP-CM409F GPIO Multiplexing for 212-Ball BGA . . .                                                                                                           | . 48   |
| ADSP-CM40xF Designer Quick Reference . . . . . . . . . . . . . . . . .                                                                                         | . 51   |
| Specifications . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                     | . 64   |
| Operating Conditions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                         | . 64   |
| Electrical Characteristics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                           | . 66   |
| ADC/DAC Specifications . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                 | . 68   |
| Flash Specifications . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                   | . 73   |
| Absolute Maximum Ratings . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                     | . 74   |
| ESD Sensitivity . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                              | . 74   |
| Timing Specifications . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                        | . 75   |
| Output Drive Currents . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                            | 106    |
| Test Conditions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                | 106    |
| Environmental Conditions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                   | 107    |
| ADSP-CM403F 120-Lead LQFP Lead Assignments . . . . . .                                                                                                         | 109    |
| ADSP-CM407F/ADSP-CM408F 176-Lead LQFP Lead Assignments . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 112    |
| ADSP-CM409F 212-Ball BGA Ball Assignments . . . . . . . . . .                                                                                                  | 116    |
| Outline Dimensions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                 | 120    |
| Ordering Guide . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                           | 123    |

## GENERAL DESCRIPTION

The ADSP-CM40xF family of mixed-signal control processors is based on the Arm ® Cortex-M4 ® processor core with floatingpoint unit operating at frequencies up to 240 MHz and integrating up to 384 kB of SRAM memory, 2 MB of flash memory, accelerators and peripherals optimized for motor control and photo-voltaic (PV) inverter control and an analog module consisting of two 16-bit SAR ADCs and two 12-bit DACs. The ADSP-CM40xF family operates from a single voltage supply (VDD\_EXT/VDD\_ANA), generating its own internal voltage supplies using internal voltage regulators and an external pass transistor.

This family of mixed-signal control processors offers low static power consumption and is produced with a low power and low voltage design methodology, delivering world class processor and ADC performance with lower power consumption.

By integrating a rich set of industry-leading system peripherals and memory (shown in Table 1), the ADSP-CM40xF mixed-signal control processors are the platform of choice for next-generation applications that require RISC programmability, advanced communications and leading-edge signal processing in one integrated package. These applications span a wide array of markets including power/motor control, embedded industrial, instrumentation, medical and consumer.

Table 1. ADSP-CM40x Family Product Features

| Generic                 | ADSP-CM403F                   | ADSP-CM407F                    | ADSP-CM407F                    | ADSP-CM408F                    | ADSP-CM408F                    | ADSP-CM409F                    |
|-------------------------|-------------------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|--------------------------------|
| Package                 | 120-Lead LQFP                 | 176-Lead LQFP                  | 176-Lead LQFP                  | 176-Lead LQFP                  | 176-Lead LQFP                  | 212-Ball BGA                   |
| GPIOs                   | 40                            | 91                             | 91                             | 91                             | 91                             | 91                             |
| SMC                     | 16-Bit Asynchronous/5 Address | 16-Bit Asynchronous/24 Address | 16-Bit Asynchronous/24 Address | 16-Bit Asynchronous/24 Address | 16-Bit Asynchronous/24 Address | 16-Bit Asynchronous/24 Address |
| ADC ENOB (No Averaging) | 13+                           | 11+                            | 11+                            | 13+                            | 13+                            | 13+                            |
| ADC Inputs              | 24                            | 16                             | 16                             | 16                             | 16                             | 24                             |
| DAC Outputs             | 2                             | N/A                            | N/A                            | N/A                            | N/A                            | 2                              |
| SPORTs                  | 3 Half-SPORTs                 | 4 Half-SPORTs                  | 4 Half-SPORTs                  | 4 Half-SPORTs                  | 4 Half-SPORTs                  | 4 Half-SPORTs                  |
| Ethernet                | N/A                           | 1                              | N/A                            | 1                              | N/A                            | 1                              |
| USB                     | N/A                           | 1                              | 1                              | 1                              | 1                              | 1                              |
| External SPI            | 1                             | 2                              | 2                              | 2                              | 2                              | 2                              |
| HAE                     | 1                             | 1                              | 1                              | 1                              | 1                              | 1                              |
| CAN                     | 2                             | 2                              | 2                              | 2                              | 2                              | 2                              |
| UART                    | 3                             | 3                              | 3                              | 3                              | 3                              | 3                              |
| Feature Set Code        | C                             | A                              | B                              | A                              | B                              | A                              |
| L1 SRAM (kB)            | 384                           | 384                            | 384                            | 384                            | 384                            | 384                            |
| Flash (kB)              | 2048                          | 2048                           | 2048                           | 2048                           | 2048                           | 2048                           |
| Core Clock (MHz)        | 240                           | 240                            | 240                            | 240                            | 240                            | 240                            |
| Model                   | ADSP-CM403CSWZ-CF1            | ADSP-CM407CSWZ-AF1             | ADSP-CM407CSWZ-BF1             | ADSP-CM408CSWZ-AF1             | ADSP-CM408CSWZ-BF1             | ADSP-CM409CBCZ-AF1             |

## ADSP-CM403F/CM407F/CM408F/CM409F

Each ADSP-CM40xF family member contains the following modules.

- 8 GP timers with PWM output
- 3-phase PWM units with up to 4 output pairs per unit
- 2 CAN modules
- 1 two-wire interface (TWI) module
- 3 UARTs
- 1 ADC controller (ADCC) to control on-chip ADCs
- 1 DAC controller (DACC) to control on-chip DACs
- 4 Sinus Cardinalis (SINC) filter pairs
- 1 harmonic analysis engine (HAE)
- 2 SPI (1 connected to internal SPI flash memory)
- 3 half-SPORTs
- 1 watchdog timer unit
- 3 capture timer units
- 1 cyclic redundancy check (CRC)

Table 1 provides the additional product features shown by model.

## ADSP-CM403F/CM407F/CM408F/CM409F

## ANALOG FRONT END

The mixed-signal controllers contain two ADCs and two DACs. Control of these data converters is simplified by a powerful onchip analog-to-digital conversion controller (ADCC) and a digital-to-analog conversion controller (DACC). The ADCC and DACC are integrated seamlessly into the software programming model, and they efficiently manage the configuration and realtime operation of the ADCs and DACs.

For technical details, see ADC/DAC Specifications.

The ADCC provides the mechanism to precisely control execution of timing and analog sampling events on the ADCs. The ADCC supports two-channel (one each-ADC0, ADC1) simultaneous sampling of ADC inputs and can deliver 16 channels of ADC data to memory in 3 μs. Conversion data from the ADCs may be either routed via DMA to memory, or to a destination register via the processor. The ADCC can be configured so that the two ADCs sample and convert both analog inputs simultaneously or at different times and may be operated in asynchronous or synchronous modes. The best performance can be achieved in synchronous mode.

Likewise, the DACC interfaces to two DACs and has purpose of managing those DACs. Conversion data to the DACs may be either routed from memory through DMA, or from a source register via the processor.

Functional operation and programming for the ADCC and DACC are described in detail in the ADSP-CM40x Mixed-Signal Control Processor with Arm Cortex-M4 Hardware Reference .

ADC and DAC features and performance specifications differ by processor model. Simplified block diagrams of the ADCC/DACC and the ADC/DAC are shown in Figure 2 and Figure 3.

NOTE: DAC0 AND DAC1 CAN BE MUX SELECTED THROUGH AN INTERNAL PATH WITHIN THE CHIP. SEE THE HARDWARE REFERENCE MANUAL FOR PROGRAMMING DETAIL.

<!-- image -->

Figure 2. ADSP-CM403F/ADSP-CM409F Analog Front End Block Diagram

## ADSP-CM403F/CM407F/CM408F/CM409F

<!-- image -->

NOTE: DAC0 AND DAC1 CAN BE MUX SELECTED THROUGH AN INTERNAL PATH WITHIN THE CHIP. SEE THE HARDWARE REFERENCE MANUAL FOR PROGRAMMING DETAIL.

Figure 3. ADSP-CM407F/ADSP-CM408F Analog Subsystem Block Diagram

## Considerations for Best Converter Performance

As with any high performance analog/digital circuit, to achieve best performance, good circuit design and board layout practices should be followed. The power supply and its noise bypass (decoupling), ground return paths and pin connections, and analog/digital routing channel paths and signal shielding, are all of first-order consideration. For application hints on design best practice, see Figure 4 and the ADSP-CM40x Mixed-Signal Control Processor with Arm Cortex-M4 Hardware Reference . For more information about the VREG circuit, see Figure 9.

## ADC Module

The ADC module contains two 16-bit, high speed, low power successive approximation register (SAR) ADCs, allowing for dual simultaneous sampling with each ADC preceded by a 12-channel multiplexer. See ADC Specifications for detailed performance specifications. Input multiplexers enable conversion of up to a combined 26 analog input sources to the ADCs (12 analog inputs plus 1 DAC loopback input per ADC).

The voltage input range requirement for those analog inputs is from 0 V to 2.5 V. All analog inputs are of single-ended design. As with all single-ended inputs, signals from high impedance sources are the most difficult to measure, and depending on the electrical environment, may require an external buffer circuit for signal conditioning (see Figure 5). An on-chip pre-buffer between the multiplexer and ADC reduces the need for additional signal conditioning external to the processor. Additionally, each ADC has an on-chip 2.5 V reference that can be overdriven when an external voltage reference is preferred.

## DAC Module

The DAC is a 12-bit, low power, string DAC design. The output of the DAC is buffered, and can drive an R/C load to either ground or VDD\_ANA. See DAC Specifications for detailed performance specifications. It should be noted that on some models of the processor, the DAC outputs are not pinned out. However, these outputs are always available as one of the multiplexed inputs to the ADCs. This feature may be useful for functional self-check of the converters.

Note: On the ADSP-CM403F/CM409F processors, the DAC output is available to the ADC as channel 12; whereas on the ADSP-CM407F/CM408F processors, the DAC output is available to the ADC as Channel 8.

## ADSP-CM403F/CM407F/CM408F/CM409F

Figure 4. Typical Power Supply Configuration

<!-- image -->

Figure 5. Equivalent Single-Ended Input (Simplified)

<!-- image -->

## ARM CORTEX-M4 CORE

The Arm Cortex-M4, core shown in Figure 6, is a 32-bit reduced instruction set computer (RISC). It uses 32-bit buses for instruction and data. The length of the data can be 8 bits, 16 bits, or 32 bits. The length of the instruction word is 16 or 32 bits. The controller has the following features.

## Arm Cortex-M4 Architecture

- Thumb-2 ISA technology
- DSP and SIMD extensions
- Single cycle MAC (Up to 32 × 32 + 64 → 64)
- Hardware divide instructions
- Single-precision FPU
- NVIC interrupt controller (129 interrupts and 16 priorities)
- Memory protection unit (MPU)
- Full CoreSight TM debug, trace, breakpoints, watchpoints, and cross-triggers

## ADSP-CM403F/CM407F/CM408F/CM409F

## Microarchitecture

- 3-stage pipeline with branch speculation
- Low-latency interrupt processing with tail chaining

## Configurable For Ultra Low Power

- Deep sleep mode, dynamic power management
- Programmable clock generator unit

## EmbeddedICE

EmbeddedICE TM provides integrated on-chip support for the core. The EmbeddedICE module contains the breakpoint and watchpoint registers that allow code to be halted for debugging purposes. These registers are controlled through the JTAG test port.

When a breakpoint or watchpoint is encountered, the processor halts and enters debug state. Once in a debug state, the processor registers can be inspected as well as the Flash/EE, SRAM, and memory-mapped registers.

Figure 6. Arm Cortex-M4 Block Diagram

<!-- image -->

## ADSP-CM403F/CM407F/CM408F/CM409F

## PROCESSOR INFRASTRUCTURE

The following sections provide information on the primary infrastructure components of the ADSP-CM40xF processors.

## DMA Controllers (DDEs)

The processor contains 17 independent and concurrently operating peripheral DMA channels plus two MDMA streams. DDE Channel 0 to Channel 16 are for peripherals and Channel 17 to Channel 20 are for MDMA.

## System Event Controller (SEC)

The SEC manages the enabling and routing of system fault sources through its integrated fault management unit.

## Trigger Routing Unit (TRU)

The TRU provides system-level sequence control without core intervention. The TRU maps trigger masters (generators of triggers) to trigger slaves (receivers of triggers). Slave endpoints can be configured to respond to triggers in various ways. Common applications enabled by the TRU include:

- Initiating the ADC sampling periodically in each PWM period or based on external events
- Automatically triggering the start of a DMA sequence after a sequence from another DMA channel completes
- Software triggering
- Synchronization of concurrent activities

## Pin Interrupts (PINT)

Every port pin on the processor can request interrupts in either an edge-sensitive or a level-sensitive manner with programmable polarity. Interrupt functionality is decoupled from GPIO operation. Six system-level interrupt channels (PINT0 to PINT5) are reserved for this purpose. Each of these interrupt channels can manage up to 32 interrupt pins. The assignment from pin to interrupt is not performed on a pin-by-pin basis. Rather, groups of eight pins (half ports) can be flexibly assigned to interrupt channels.

Every pin interrupt channel features a special set of 32-bit memory-mapped registers that enable half-port assignment and interrupt management. This includes masking, identification, and clearing of requests. These registers also enable access to the respective pin states and use of the interrupt latches, regardless of whether the interrupt is masked or not. Most control registers feature multiple MMR address entries to write-one-to-set or write-one-to-clear them individually.

## General-Purpose I/O (GPIO)

Each general-purpose port pin can be individually controlled by manipulation of the port control, status, and interrupt registers:

- GPIO direction control register-Specifies the direction of each individual GPIO pin as input or output.
- GPIO control and status registers -A write one to modify mechanism allows any combination of individual GPIO pins to be modified in a single instruction, without affecting the level of any other GPIO pins.
- GPIO interrupt mask registers-Allow each individual GPIO pin to function as an interrupt to the processor. GPIO pins defined as inputs can be configured to generate hardware interrupts, while output pins can be triggered by software interrupts.
- GPIO interrupt sensitivity registers-Specify whether individual pins are level- or edge-sensitive and specify-if edge-sensitive-whether just the rising edge or both the rising and falling edges of the signal are significant.

## Pin Multiplexing

The processor supports a flexible multiplexing scheme that multiplexes the GPIO pins with various peripherals. A maximum of five peripherals plus GPIO functionality is shared by each GPIO pin. All GPIO pins have a bypass path feature-that is, when the output enable and the input enable of a GPIO pin are both active, the data signal before the pad driver is looped back to the receive path for the same GPIO pin.

For more information, see:

- ADSP-CM403F GPIO Multiplexing for 120-Lead LQFP
- ADSP-CM407F/ADSP-CM408F GPIO Multiplexing for 176-Lead LQFP
- ADSP-CM409F GPIO Multiplexing for 212-Ball BGA

## MEMORY ARCHITECTURE

The internal and external memory of the ADSP-CM40xF processor is shown in Figure 7 and described in the following sections.

## Arm Cortex-M4 Memory Subsystem

The memory map of the ADSP-CM40xF family is based on the Cortex-M4 model from Arm. By retaining the standardized memory mapping, it becomes easier to port applications across M4 platforms. Only the physical implementation of memories inside the model differs from other vendors.

ADSP-CM40xF application development is typically based on memory blocks across CODE/SRAM and external memory regions. Sufficient internal memory is available via internal SRAM and internal flash. Additional external memory devices may be interfaced via the SMC asynchronous memory port, as well as through the SPI0 serial memory interface.

## Code Region

Accesses in this region (0x0000\_0000 to 0x1FFF\_FFFF) are performed by the core on its ICODE and DCODE interfaces, and they target the memory and cache resources within the Cortex-M4F platform integration component.

- Boot ROM. A 32K byte boot ROM executed at system reset. This space supports read-only access by the M4F core only. Note that ROM memory contents cannot be modified by the user.
- Internal SRAM Code Region. This memory space contains the application instructions and literal (constant) data which must be executed real time. It supports read/write access by the M4F core and read/write DMA access by

## ADSP-CM403F/CM407F/CM408F/CM409F

system devices. Internal SRAM can be partitioned between CODE and DATA (SRAM region in M4 space) in 64K byte blocks. Access to this region occurs at core clock speed, with no wait states.

- Integrated Flash. This contains the 2M byte flash memory space interfaced via the SPI2 port of the processor. This memory space contains the application instructions and literal (constant) data. Reads from flash memory are directly cached via internal code cache. Direct memory-mapped reads are permitted through SPI memory-mapped protocol. Internal flash memory ships from the factory in an erased state except for Sector 0 and Sector 1 of the main flash array. Sector 0 and Sector 1 of the main flash array ships from the factory in an unknown state. An erase operation should be performed prior to programming this sector.
- Internal Code Cache. A zero-wait-state code cache SRAM memory is available internally (not visible in the memory map) to cache instruction access from internal flash as well as any externally connected serial flash and asynchronous memory.
- MEM-X/MEM-Y. These are virtual memory blocks which are used as cacheable memory for the code cache. No physical memory device resides inside these blocks. The application code must be compiled against these memory blocks to utilize the cache.

## SRAM Region

Accesses in this region (0x2000\_0000 to 0x3FFF\_FFFF) are performed by the Arm Cortex-M4F core on its SYS interface. The SRAM region of the core can otherwise act as a data region for an application.

- Internal SRAM Data Region. This space can contain read/write data. Internal SRAM can be partitioned between CODE and DATA (SRAM region in M4 space) in 64K byte blocks. Access to this region occurs at core clock speed, with no wait states. It supports read/write access by the M4F core and read/write DMA access by system devices. It supports exclusive memory accesses via the global exclusive access monitor within the Cortex-M4F platform. Bit-banding support is also available.

## System Memory Spaces

- External SPI Flash. Up to 16M byte of external serial quad flash memory optionally connected to the SPI0 port of the processor. Reads from flash memory are directly cached via internal code cache. Direct memory-mapped reads are permitted via SPI memory-mapped protocol.
- System MMRs. Various system MMRs reside in this region. Bit-banding support is available for MMRs.

<!-- image -->

| [ )))) ))))   | 5HVHUYHG                        |
|---------------|---------------------------------|
| [ )           | 0 3005 5HJLVWHUV %              |
| [ )           |                                 |
| [ (           |                                 |
| [ (           | 5HVHUYHG                        |
| [ ( ) )       | &RUH6LJKW 520 .%                |
| [ (           | $50 33% 'HYLFHV .%              |
| [ (           | $V\QF 0%                        |
| [ &           | 0HPRU\ %DQN                     |
| [ $           | 5HVHUYHG                        |
| [             | $V\QF 0HPRU\ %DQN 0%            |
| [             | 5HVHUYHG                        |
| [             | $V\QF 0HPRU\ %DQN 0%            |
| [             | 5HVHUYHG                        |
| [             | $V\QF 0HPRU\ %DQN 0%            |
|               | 5HVHUYHG                        |
| [             | 63, $GGUHVV 6SDFH 0%            |
|               | 5HVHUYHG                        |
| [ [           | 6\VWHP 005 %LW %DQG $OLDV 0%    |
| [             | 5HVHUYHG                        |
| [             | 6\VWHP 005 5HJLVWHUV 0%         |
| [ &           | 'DWD 65$0 %LW %DQG $OLDV PD[ 0% |
| [             |                                 |
| [             | 5HVHUYHG                        |
| [             | / 0DLQ 65$0 'DWD PD[ .%         |
| [ $           | 5HVHUYHG                        |
| [             | 0HP< 63, 60& &RGH 6SDFH 0%      |
| [             | 5HVHUYHG                        |
| [             | 0HP; 63, )ODVK 0%               |
| [             | 5HVHUYHG                        |
|               | / &RGH 65$0 PD[ .%              |
| [             |                                 |
| [             | / %RRW 520                      |
|               | .%                              |

## External Asynchronous Parallel Flash/RAM

- L2 Asynchronous Memory. Up to 32M byte × 4 banks of external memory can be optionally connected to the asynchronous memory port (SMC). Code execution from these memory blocks can be optionally cached via internal code cache. Direct R/W data access is also possible.

Figure 7. ADSP-CM40xF Memory Map

## ADSP-CM403F/CM407F/CM408F/CM409F

## System Region

Accesses in this region (0xE000\_0000 to 0xF7FF\_FFFF) are performed by the Arm Cortex-M4F core on its SYS interface, and are handled within the Cortex-M4F platform. The MPU may be programmed to limit access to this space to privileged mode only.

- CoreSight ROM. The ROM table entries point to the debug components of the processor.
- Arm PPB Peripherals. This space is defined by Arm and occupies the bottom 256K byte of the SYS region (0xE000\_0000 to 0xE004\_0000). The space supports read/write access by the M4F core to the Arm core's internal peripherals (MPU, ITM, DWT, FPB, SCS, TPIU, ETM) and the CoreSight ROM. It is not accessible by system DMA.
- Platform Control Registers. This space has registers within the Cortex-M4F platform integration component that control the Arm core, its memory, and the code cache. It is accessible by the M4F core via its SYS port (but is not accessible by system DMA).

## Static Memory Controller (SMC)

The SMC can be programmed to control up to four banks of external memories or memory-mapped devices, with very flexible timing parameters. On ADSP-CM407F/CM408F/CM409F processors, each bank can occupy a 32M byte segment regardless of the size of the device used.

## Booting (BOOT)

The processor has several mechanisms for automatically loading internal and external memory after a reset. The boot mode is defined by the SYS\_BMODE input pins dedicated for this purpose. There are two categories of boot modes. In master boot modes, the processor actively loads data from a serial memory. In slave boot modes, the processor receives data from external host devices.

The boot modes are shown in Table 2. These modes are implemented by the SYS\_BMODE bits of the RCU\_CTL register and are sampled during power-on resets and software-initiated resets.

Table 2. Boot Modes

|   SYS_BMODE[1:0] Setting | Description                                                                                                             |
|--------------------------|-------------------------------------------------------------------------------------------------------------------------|
|                       00 | NoBoot/FlashErase.Theprocessordoesnot boot. Rather, the boot kernel continually pollsforaflasheraseoperationviatheTAPC. |
|                       01 | Flash Boot. Boot from integrated Flash memory through the SPI2.                                                         |
|                       10 | SPI Slave Boot. Boot through the SPI0 peripheral configured as a slave.                                                 |
|                       11 | UART Boot. Boot through the UART0 peripheral configured as a slave.                                                     |

## SYSTEM ACCELERATION

The following sections describe the system acceleration blocks of the ADSP-CM40xF processors.

## Harmonic Analysis Engine (HAE)

The harmonic analysis engine (HAE) block receives 8 kHz input samples from two source signals whose frequencies are between 45 Hz and 65 Hz. The HAE will then process the input samples and produce output results. The output results consist of power quality measurements of the fundamental and up to 12 selectable harmonics.

## Sinus Cardinalis Filter (SINC)

The SINC module processes four bit streams using a pair of configurable SINC filters for each bitstream. The purpose of the primary SINC filter of each pair is to produce the filtered and decimated output for the pair. The output may be decimated to any integer rate between 8 and 256 times lower than the input rate. Greater decimation allows greater removal of noise and therefore greater ENOB.

Optional additional filtering outside the SINC module may be used to further increase ENOB. The primary SINC filter output is accessible through transfer to processor memory, or to another peripheral, via DMA.

Each of the four channels is also provided with a low-latency secondary filter with programmable positive and negative overrange detection comparators. These limit detection events can be used to interrupt the core, generate a trigger, or signal a system fault.

## SECURITY FEATURES

The processor provides lightweight security functionality which protects sensitive data and IP located in the internal flash memory. It includes password-protected slave boot modes (SPI and UART), as well as password-protected JTAG/SWD debug interfaces. One of the safeguards of the security feature is the ability to perform bulk erase of the entire flash memory. Another security measure provides the ability to control which boot modes are allowed so as to protect the flash contents from untrusted or non-secure boot modes. Programs can enable or disable security features depending upon the secure header configured in internal flash memory.

## CAUTION

This product includes security features that can be used  to  protect  embedded  nonvolatile  memory contents  and  prevent  execution  of  unauthorized code.  When  security  is  enabled  on  this  device (either  by  the  ordering  party  or  the  subsequent receiving parties), the ability of Analog Devices to conduct  failure  analysis  on  returned  devices  is limited. Contact Analog Devices for details on the failure analysis limitations for this device.

<!-- image -->

## ADSP-CM403F/CM407F/CM408F/CM409F

## SECURITY FEATURES DISCLAIMER

Analog Devices does not guarantee that the Security Features described herein provide absolute security. ACCORDINGLY, ANALOG DEVICES HEREBY DISCLAIMS ANY AND ALL EXPRESS AND IMPLIED WARRANTIES THAT THE SECURITY FEATURES CANNOT BE BREACHED, COMPROMISED, OR OTHERWISE CIRCUMVENTED AND IN NO EVENT SHALL ANALOG DEVICES BE LIABLE FOR ANY LOSS, DAMAGE, DESTRUCTION, OR RELEASE OF DATA, INFORMATION, PHYSICAL PROPERTY, OR INTELLECTUAL PROPERTY.

## PROCESSOR RELIABILITY FEATURES

The processor provides the following features which can enhance or help achieve certain levels of system safety and reliability. While the level of safety is mainly dominated by system considerations, the following features are provided to enhance robustness.

## Multi-Parity-Bit-Protected L1 Memories

In the processor's SRAM and cache L1 memory space, each word is protected by multiple parity bits to detect the single event upsets that occur in all RAMs.

## Cortex MPU

The MPU divides the memory map into a number of regions, and allows the system programmer to define the location, size, access permissions, and memory attributes of each region. It supports independent attribute settings for each region, overlapping regions, and export of memory attributes to the system.

For more information, refer to the Arm Infocenter web page.

## System Protection Unit (SPU)

All system resources and L2 memory banks can be controlled by either the processor core, memory-to-memory DMA, or the debug unit. A system protection unit (SPU) enables write accesses to specific resources that are locked to a given master. System protection is enabled in greater granularity for some modules through a global lock concept.

## Watchpoint Protection

The primary purpose of watchpoints and hardware breakpoints is to serve emulator needs. When enabled, they signal an emulator event whenever user-defined system resources are accessed or a core executes from user-defined addresses. Watchdog events can be configured such that they signal the events to the core or to the SEC.

## Software Watchdog

The on-chip watchdog timer can provide software-based supervision of the ADSP-CM40xF core.

## Signal Watchdogs

The eight general-purpose timers feature two modes to monitor off-chip signals. The watchdog period mode monitors whether external signals toggle with a period within an expected range. The watchdog width mode monitors whether the pulse widths of external signals are in an expected range. Both modes help to detect incorrect undesired toggling (or lack thereof) of system-level signals.

## Oscillator Watchdog

The oscillator watchdog monitors the external clock oscillator, and can detect the absence of clock as well as incorrect harmonic oscillation. The oscillator watchdog detection signal is routed to the fault management portion of the system event controller.

## Low-Latency Sinc Filter Over-range Detection

The SINC filter units provide a low-latency secondary filter with programmable positive and negative limit detectors for each input channel. These may be used to monitor an isolation ADC bitstream for overrange or underrange conditions with a filter group delay as low as 0.7 μs on a 10 MHz bitstream. The secondary SINC filter events can be used to interrupt the core, to trigger other events directly in hardware using the trigger routing unit (TRU), or to signal the fault management unit of a system fault.

## Up/Down Count Mismatch Detection

The GP counter can monitor external signal pairs, such as request/grant strobes. If the edge count mismatch exceeds the expected range, the up/down counter can flag this to the processor or to the system event controller (SEC).

## Fault Management

The fault management unit is part of the system event controller (SEC). Most system events can be defined as faults. If defined as such, the SEC forwards the event to its fault management unit which may automatically reset the entire device for reboot, or simply toggle the SYS\_FAULT output pin to signal off-chip hardware. Optionally, the fault management unit can delay the action taken via a keyed sequence, to provide a final chance for the core to resolve the crisis and to prevent the fault action from being taken.

## ADDITIONAL PROCESSOR PERIPHERALS

The processor contains a rich set of peripherals connected to the core via several concurrent high-bandwidth buses, providing flexibility in system configuration as well as excellent overall system performance (see Figure 1).

The processor contains high speed serial and parallel ports, an interrupt controller for flexible management of interrupts from the on-chip peripherals or external sources, and power management control functions to tailor the performance and power characteristics of the processor and system to many application scenarios.

The following sections describe additional peripherals that were not described in the previous sections.

## Timers

The processor includes several timers which are described in the following sections.

## ADSP-CM403F/CM407F/CM408F/CM409F

## General-Purpose Timers (TIMER)

The general-purpose (GP) timer unit provides eight generalpurpose programmable timers. Each timer has an external pin that can be configured either as a pulse width modulator (PWM) or timer output, as an input to clock the timer, or as a mechanism for measuring pulse widths and periods of external events. These timers can be synchronized to an external clock input on the TM0\_ACLKx pins, an external signal on the TM0\_CLK input pin, or to the internal SCLK.

The timer unit can be used in conjunction with the UARTs and the CAN controller to measure the width of the pulses in the data stream to provide a software auto-baud detect function for the respective serial channels.

The timer can generate interrupts to the processor core, providing periodic events for synchronization to either the system clock or to external signals. Timer events can also trigger other peripherals via the TRU (for instance, to signal a fault).

## Watchdog Timer (WDT)

The core includes a 32-bit timer, which may be used to implement a software watchdog function. A software watchdog can improve system availability by forcing the processor to a known state, via generation of a general-purpose interrupt, if the timer expires before being reset by software. The programmer initializes the count value of the timer, enables the appropriate interrupt, then enables the timer. Thereafter, the software must reload the counter before it counts to zero from the programmed value. This protects the system from remaining in an unknown state where software, which would normally reset the timer, has stopped running due to an external noise condition or software error. Optionally, the fault management unit (FMU) can directly initiate the processor reset upon the watchdog expiry event.

## Capture Timer (CPTMR)

The processor includes three instants of capture timers (CPTMR) to capture total on time. Each capture timer captures total on time of the input signal between two leading edges of the input trigger signal. Capture timer inputs to all the timers come from external pins and the input trigger signal comes from trigger routing unit (TRU).

The core of the timer is a 32-bit counter which is reset at leading edge of the trigger and counts when the input signal level is active. The total on time of the input signal is captured from the counter at the leading edge of the trigger pulse. Capture timer can generate data interrupts to the processor core at leading edges of trigger pulses and status interrupts to indicate counter overflow condition.

## 3-Phase Pulse Width Modulator Unit (PWM)

The pulse width modulator (PWM) unit provides duty cycle and phase control capabilities to a resolution of one system clock cycle (SCLK). The heightened precision PWM (HPPWM)

module provides increased performance to the PWM unit by increasing its resolution by several bits, resulting in enhanced precision levels. Additional features include:

- 16-bit center-based PWM generation unit
- Programmable PWM pulse width
- Single/double update modes
- Programmable dead time and switching frequency
- Twos-complement implementation which permits smooth transition to full on and full off states
- Dedicated asynchronous PWM trip signal

The eight PWM output signals (per PWM unit) consist of four high-side drive signals and four low-side drive signals. The polarity of a generated PWM signal can be set with software, so that either active high or active low PWM patterns can be produced.

Each PWM block integrates a flexible and programmable 3-phase PWM waveform generator that can be programmed to generate the required switching patterns to drive a 3-phase voltage source inverter for ac induction motor (ACIM) or permanent magnet synchronous motor (PMSM) control. In addition, the PWM block contains special functions that considerably simplify the generation of the required PWM switching patterns for control of the electronically commutated motor (ECM) or permanent magnet synchronous motor (PMSM) control. Software can enable a special mode for switched reluctance motors (SRM).

Each PWM unit features a dedicated asynchronous trip pin which (when brought low) instantaneously places all PWM outputs in the off state.

## Serial Ports (SPORTs)

The synchronous serial ports provide an inexpensive interface to a wide variety of digital and mixed-signal peripheral devices such as Analog Devices, Inc., audio codecs, ADCs, and DACs. The serial ports are made up of two data lines per direction, a clock, and frame sync. The data lines can be programmed to either transmit or receive and each data line has a dedicated DMA channel.

Serial port data can be automatically transferred to and from on-chip memory/external memory via dedicated DMA channels.For full-duplex operation, two half SPORTs can work in conjunction with clock and frame sync signals shared internally through the SPMUX block. In some operation modes, SPORT supports gated clock.

Serial ports operate in six modes:

- Standard DSP serial mode
- Multichannel (TDM) mode
- I 2 S mode
- Packed I 2 S mode
- Left-justified mode
- Right-justified mode

## General-Purpose Counters

The 32-bit counter can operate in general-purpose up/down count modes and can sense 2-bit quadrature or binary codes as typically emitted by industrial drives or manual thumbwheels. Count direction is either controlled by a level-sensitive input pin or by two edge detectors.

## ADSP-CM403F/CM407F/CM408F/CM409F

data. A UART port includes support for five to eight data bits, and none, even, or odd parity. Optionally, an additional address bit can be transferred to interrupt only addressed nodes in multi-drop bus (MDB) systems. A frame is terminated by one, one and a half, two or two and a half stop bits.

A third counter input can provide flexible zero marker support and can alternatively be used to input the push-button signal of thumb wheels. All three pins have a programmable debouncing circuit.

The GP counter can also support a programmable M/N frequency scaling of the CNT\_CUD and CNT\_CDG pins onto output pins in quadrature encoding mode.

Internal signals forwarded to each general-purpose timer enable these timers to measure the intervals between count events. Boundary registers enable auto-zero operation or simple system warning by interrupts when programmable count values are exceeded.

## Serial Peripheral Interface Ports (SPI)

The processor contains the SPI-compatible port that allows the processor to communicate with multiple SPI-compatible devices.

In its simplest mode, the SPI interface uses three pins for transferring data: two data pins master output-slave input and master input-slave output (SPI\_MOSI and SPI\_MISO) and a clock pin, SPI\_CLK. A SPI chip select input pin (SPI\_SS) lets other SPI devices select the processor, and three SPI chip select output pins (SPI\_SELn) let the processor select other SPI devices. The SPI select pins are reconfigured general-purpose I/O pins. Using these pins, the SPI provides a full-duplex, synchronous serial interface, which supports both master and slave modes and multimaster environments.

In a multimaster or multislave SPI system, the MOSI and MISO data output pins can be configured to behave as open drain outputs (using the ODM bit) to prevent contention and possible damage to pin drivers. An external pull-up resistor is required on both the MOSI and MISO pins when this option is selected.

When ODM is set and the SPI is configured as a master, the MOSI pin is three-stated when the data driven out on MOSI is a logic high. The MOSI pin is not three-stated when the driven data is a logic low. Similarly, when ODM is set and the SPI is configured as a slave, the MISO pin is three-stated if the data driven out on MISO is a logic high.

The SPI port's baud rate and clock phase/polarities are programmable, and it has integrated DMA channels for both transmit and receive data streams.

## Universal Asynchronous Receiver/Transmitter Ports (UART)

The processor provides full-duplex universal asynchronous receiver/transmitter (UART) ports, which are fully compatible with PC-standard UARTs. Each UART port provides a simplified UART interface to other peripherals or hosts, supporting full-duplex, DMA-supported, asynchronous transfers of serial The UART ports support automatic hardware flow control through the clear to send (CTS) input and request to send (RTS) output with programmable assertion FIFO levels.

To help support the local interconnect network (LIN) protocols, a special command causes the transmitter to queue a break command of programmable bit length into the transmit buffer. Similarly, the number of stop bits can be extended by a programmable inter-frame space.

The capabilities of the UARTs are further extended with support for the infrared data association (IrDA ® ) serial infrared physical layer link specification (SIR) protocol.

## 2-Wire Controller Interface (TWI)

The processor includes a 2-wire interface (TWI) module for providing a simple exchange method of control data between multiple devices. The TWI module is compatible with the widely used I 2 C bus standard. The TWI module offers the capabilities of simultaneous master and slave operation and support for both 7-bit addressing and multimedia data arbitration. The TWI interface utilizes two pins for transferring clock (TWI\_SCL) and data (TWI\_SDA) and supports the protocol at speeds up to 400k bits/sec. The TWI interface pins are compatible with 5 V logic levels.

Additionally, the TWI module is fully compatible with serial camera control bus (SCCB) functionality for easier control of various CMOS camera sensor devices.

## Controller Area Network (CAN)

The CAN controller implements the CAN 2.0B (active) protocol. This protocol is an asynchronous communications protocol used in both industrial and automotive control systems. The CAN protocol is well suited for control applications due to its capability to communicate reliably over a network. This is because the protocol incorporates CRC checking, message error tracking, and fault node confinement.

The CAN controller offers the following features:

- 32 mailboxes (8 receive only, 8 transmit only, 16 configurable for receive or transmit).
- Dedicated acceptance masks for each mailbox.
- Additional data filtering on first two bytes.
- Support for both the standard (11-bit) and extended (29-bit) identifier (ID) message formats.
- Support for remote frames.
- Active or passive network support.
- Interrupts, including: TX complete, RX complete, error and global.

An additional crystal is not required to supply the CAN clock, as the CAN clock is derived from a system clock through a programmable divider.

## ADSP-CM403F/CM407F/CM408F/CM409F

## 10/100 Ethernet MAC (EMAC)

The processor can directly connect to a network by way of an embedded fast Ethernet media access controller (MAC) that supports both 10-BaseT (10M bits/sec) and 100-BaseT (100M bits/sec) operation. The 10/100 Ethernet MAC peripheral on the processor is fully compliant to the IEEE 802.3-2002 standard. It provides programmable features designed to minimize supervision, bus use, or message processing by the rest of the processor system.

Some standard features are:

- Support for RMII protocols for external PHYs
- Full-duplex and half-duplex modes
- Media access management (in half-duplex operation)
- Flow control
- Station management: generation of MDC/MDIO frames for read-write access to PHY registers

Some advanced features are:

- Automatic checksum computation of IP header and IP payload fields of Rx frames
- Independent 32-bit descriptor-driven receive and transmit DMA channels
- Frame status delivery to memory through DMA, including frame completion semaphores for efficient buffer queue management in software
- Tx DMA support for separate descriptors for MAC header and payload to eliminate buffer copy operations
- Convenient frame alignment modes
- 47 MAC management statistics counters with selectable clear-on-read behavior and programmable interrupts on half maximum value
- Advanced power management
- Magic packet detection and wakeup frame filtering
- Support for 802.3Q tagged VLAN frames
- Programmable MDC clock rate and preamble suppression

## IEEE 1588 Support

The IEEE 1588 standard is a precision clock synchronization protocol for networked measurement and control systems. The processor includes hardware support for IEEE 1588 with an integrated precision time protocol synchronization engine. This engine provides hardware assisted time stamping to improve the accuracy of clock synchronization between PTP nodes. The main features of the engine are:

- Support for both IEEE 1588-2002 and IEEE 1588-2008 protocol standards
- 64-bit hardware assisted time stamping for transmit and receive frames capable of up to 10 ns resolution
- Identification of PTP message type, version, and PTP payload in frames sent directly over Ethernet and transmission of the status
- Coarse and fine correction methods for system time update
- Alarm features: target time can be set to interrupt when system time reaches target time
- Pulse-Per-Second (PPS) output for physical representation of the system time. Flexibility to control the pulse-per-second output signal including control of start time, stop time, PPS output width and interval
- Automatic detection and time stamping of PTP messages over IPv4, IPv6, and Ethernet packets
- Multiple input clock sources (SCLK, RMII clock, external clock)
- Auxiliary snapshot to time stamp external events

## USB 2.0 On-the-Go (OTG) Dual-Role Device Controller

The USB 2.0 on-the go (OTG) dual-role device controller provides a low-cost connectivity solution for the growing adoption of this bus standard in industrial applications, as well as consumer mobile devices such as cell phones, digital still cameras, and MP3 players. The USB 2.0 controller is a full-speed-only (FS) interface that allows these devices to transfer data using a point-to-point USB connection without the need for a PC host. The module can operate in a traditional USB peripheral-only mode as well as the host mode presented in the OTG supplement to the USB 2.0 specification.

## CLOCK AND POWER MANAGEMENT

The processor provides three operating modes, each with a different performance/power profile. Control of clocking to each of the processor peripherals also reduces power consumption. See Table 3 for a summary of the power settings for each mode.

## Table 3. Power Settings

| Mode       | CGUPLL   | CGUPLL Bypassed   | f CCLK   | f SCLK   | Core Power   |
|------------|----------|-------------------|----------|----------|--------------|
| Full On    | Enabled  | No                | Enabled  | Enabled  | On           |
| Active     | Enabled  | Yes               | Enabled  | Enabled  | On           |
|            | Disabled | Yes               | Enabled  | Enabled  | On           |
| Deep Sleep | Disabled | -                 | Disabled | Disabled | On           |

## Crystal Oscillator (SYS\_XTAL)

The processor can be clocked by an external crystal (see Figure 8), a sine wave input, or a buffered, shaped clock derived from an external clock oscillator. If an external clock is used, it should be a TTL compatible signal and must not be halted, changed, or operated below the specified frequency during normal operation. This signal is connected to the processor's SYS\_CLKIN pin. When an external clock is used, the SYS\_XTAL pin must be left unconnected. Alternatively, because the processor includes an on-chip oscillator circuit, an external crystal may be used.

For fundamental frequency operation, use the circuit shown in Figure 8. A parallel-resonant, fundamental frequency, microprocessor grade crystal is connected across the SYS\_CLKIN and

## ADSP-CM403F/CM407F/CM408F/CM409F

XTAL pins. The on-chip resistance between SYS\_CLKIN and the XTAL pin is in the 500 kΩ range. Further parallel resistors are typically not recommended.

Programmable values divide the PLLCLK frequency to generate the core clock (CCLK), the system clocks (SCLK), and the output clock (OCLK). This is illustrated in Figure 10.

<!-- image -->

NOTE: VALUES MARKED WITH * MUST BE CUSTOMIZED, DEPENDING ON THE CRYSTAL AND LAYOUT. ANALYZE CAREFULLY. FOR FREQUENCIES ABOVE 33 MHz, THE SUGGESTED CAPACITOR VALUE OF 18pF SHOULD BE TREATED AS A MAXIMUM, AND THE SUGGESTED 5(6,6725 9$/8( 6+28/' %( 5('8&amp;(' 72   ȍ

Figure 8. External Crystal Connection

The two capacitors and the 330 Ω series resistor shown in Figure 8 fine tune phase and amplitude of the sine frequency. The capacitor and resistor values shown in Figure 8 are typical values only. The capacitor values are dependent upon the crystal manufacturers' load capacitance recommendations and the PCB physical layout. The resistor value depends on the drive level specified by the crystal manufacturer. The user should verify the customized values based on careful investigations on multiple devices over temperature range.

A third-overtone crystal can be used for frequencies above 25 MHz. The circuit is then modified to ensure crystal operation only at the third overtone by adding a tuned inductor circuit as shown in Figure 8. A design procedure for third-overtone operation is discussed in detail in application note (EE-168) 'Using Third Overtone Crystals with the ADSP-218x DSP' (www.analog.com/ee-168).

## Oscillator Watchdog

A programmable oscillator watchdog unit is provided to allow verification of proper startup and harmonic mode of the external crystal. This allows the user to specify the expected frequency of oscillation, and to enable detection of non-oscillation and improper-oscillation faults. These events can be routed to the SYS\_FAULT output pin and/or to cause a reset of the part.

## Clock Generation Unit (CGU)

The clock generation unit (CGU) generates all on-chip clocks and synchronization signals. Multiplication factors are programmed to the PLLs to define the PLLCLK frequency.

Writing to the CGU control registers does not affect the behavior of the PLL immediately. Registers are first programmed with a new value, and the PLL logic executes the changes so that it transitions smoothly from the current conditions to the new ones.

SYS\_CLKIN oscillations start when power is applied to the VDD\_EXT pins. The rising edge of SYS\_HWRST can be applied as soon as all voltage supplies are within specifications (see Operating Conditions), and SYS\_CLKIN oscillations are stable.

## Clock Out/External Clock

A SYS\_CLKOUT output pin has programmable options to output divided-down versions of the on-chip clocks, including USB clocks. By default, the SYS\_CLKOUT pin drives a buffered version of the SYS\_CLKIN input. Clock generation faults (for example PLL unlock) may trigger a reset by hardware.

SYS\_CLKOUT can be used to output one of several different clocks used on the processor. The clocks shown in Table 4 can be outputs from SYS\_CLKOUT.

Table 4. SYS\_CLKOUT Source and Divider Options

| Clock Source        | Divider                     |
|---------------------|-----------------------------|
| CCLK (Core Clock)   | By 4                        |
| OCLK (Output Clock) | Programmable                |
| USBCLK              | Programmable                |
| CLKBUF              | None, direct from SYS_CLKIN |

## Power Management

As shown in Table 5 and Figure 4, the processor requires three different power domains, VDD\_INT, VDD\_EXT, and VDD\_ANA. By isolating the internal logic of the processor into its own power domain, separate from other I/O, the processor can take advantage of dynamic power management without affecting the other I/O devices. There are no sequencing requirements for the various power domains, but all domains must be powered according to the appropriate Specifications table for processor operating conditions; even if the feature/peripheral is not used.

The dynamic power management feature of the processor allows the processor's core clock frequency (fCCLK) to be dynamically controlled.

Table 5. Power Domains

| Power Domain       | V DD Range   |
|--------------------|--------------|
| All Internal Logic | V DD_INT     |
| Digital I/O        | V DD_EXT     |
| Analog             | V DD_ANA     |

## ADSP-CM403F/CM407F/CM408F/CM409F

The power dissipated by a processor is largely a function of its clock frequency and the square of the operating voltage. For example, reducing the clock frequency by 25% results in a 25% reduction in dynamic power dissipation. For more information on power pins, see Operating Conditions.

## Full-On Operating Mode-Maximum Performance

In the full-on mode, the PLL is enabled and is not bypassed, providing capability for maximum operational frequency. This is the execution state in which maximum performance can be achieved. The processor core and all enabled peripherals run at full speed.

For more information about PLL controls, see the 'Dynamic Power Management' chapter in the ADSP-CM40x Mixed-Signal Control Processor with Arm Cortex-M4 Hardware Reference .

## Deep Sleep Operating Mode-Maximum Dynamic Power Savings

The deep sleep mode maximizes dynamic power savings by disabling the clocks to the processor core and to all synchronous peripherals. Asynchronous peripherals may still be running but cannot access internal resources or external memory.

## Voltage Regulation for VDD\_INT

The internal voltage VDD\_INT to the ADSP-CM40xF processors can be generated either by using an on-chip voltage regulator or by an external voltage regulator.

The VDD\_INT of 1.2 V can be generated using the external I/O supply VDD\_VREG of 3.3 V, which is then used to generate VDD\_INT of 1.2 V. Figure 9 shows the external components required to complete the power management system for proper operation. For more details regarding component selection, refer to (EE-361) ADSP-CM40x Power Supply Transistor Selection Guidelines (www.analog.com/ee-361).

The internal voltage regulator can be bypassed and VDD\_INT can be supplied using an external regulator. When an external regulator is used, VDD\_VREG and VREG\_BASE must be tied to ground for zero current consumption.

Figure 9. Internal Voltage Regulator Circuit

<!-- image -->

## Reset Control Unit (RCU)

Reset is the initial state of the whole processor or of the core and is the result of a hardware or software triggered event. In this state, all control registers are set to their default values and functional units are idle. Exiting a core only reset starts with the core being ready to boot.

The reset control unit (RCU) controls how all the functional units enter and exit reset. Differences in functional requirements and clocking constraints define how reset signals are generated. Programs must guarantee that none of the reset functions puts the system into an undefined state or causes resources to stall.

From a system perspective reset is defined by both the reset target and the reset source as described below.

## Target defined:

- Hardware Reset-All functional units are set to their default states without exception. History is lost.
- System Reset-All functional units except the RCU are set to their default states.

## Source defined:

- Hardware Reset-The SYS\_HWRST input signal is asserted active (pulled down).
- System Reset-May be triggered by software (writing to the RCU\_CTL register) or by another functional unit such as the dynamic power management (DPM) unit or any of the system event controller (SEC), trigger routing unit (TRU), or emulator inputs.
- Trigger request (peripheral).

## SYSTEM DEBUG UNIT (SDU)

The processor includes various features that allow for easy system debug. These are described in the following sections.

## JTAG Debug and Serial Wire Debug Port (SWJ-DP)

SWJ-DP is a combined JTAG-DP and SW-DP that enables either a serial wire debug (SWD) or JTAG probe to be connected to a target. SWD signals share the same pins as JTAG. There is an auto detect mechanism that switches between JTAG-DP and SW-DP depending on which special data sequence is used the emulator pod transmits to the JTAG pins.The SWJ-DP behaves as a JTAG target if normal JTAG sequences are sent to it and as a single wire target if the SW\_DP sequence is transmitted.

## Embedded Trace Macrocell (ETM) and Instrumentation Trace Macrocell (ITM)

The ADSP-CM40xF processors support both embedded trace macrocell (ETM) and instrumentation trace macrocell (ITM). These both offer an optional debug component that enables logging of real-time instruction and data flow within the CPU core. This data is stored and read through special debugger pods that have the trace feature capability. The ITM is a single-data pin feature and the ETM is a 4-data pin feature.

## System Watchpoint Unit (SWU)

The system watchpoint unit (SWU) is a single module which connects to a single system bus and provides for transaction monitoring. One SWU is attached to the bus going to each system slave. The SWU provides ports for all system bus address channel signals. Each SWU contains four match groups of registers with associated hardware. These four SWU match groups operate independently, but share common event (interrupt and trigger) outputs.

## DEVELOPMENT TOOLS

The ADSP-CM40xF processor is supported with a set of highly sophisticated and easy-to-use development tools for embedded applications. For more information, see the Analog Devices website.

## ADDITIONAL INFORMATION

The following publications that describe the ADSP-CM40xF processors (and related processors) can be ordered from any Analog Devices sales office or accessed electronically on our website:

- ADSP-CM40x Mixed-Signal Control Processor with Arm Cortex-M4 Hardware Reference
- ADSP-CM402F/ADSPCM403F/CM407F/CM408F/CM409F Anomaly Sheet

This data sheet describes the Arm Cortex-M4 core and memory architecture used on the ADSP-CM40xF processor, but does not provide detailed programming information for the Arm processor. For more information about programming the Arm processor, visit the Arm Infocenter web page.

The applicable documentation for programming the Arm Cortex-M4 processor include:

- Cortex ® -M4 Devices Generic User Guide
- CoreSight TM ETM TM -M4 Technical Reference Manual
- Cortex ® -M4 Technical Reference Manual

## RELATED SIGNAL CHAINS

A signal chain is a series of signal-conditioning electronic components that receive input (data acquired from sampling either real-time phenomena or from stored data) in tandem, with the output of one portion of the chain supplying input to the next. Signal chains are often used in signal processing applications to gather and process data or to apply system controls based on analysis of real-time phenomena.

Analog Devices eases signal processing system development by providing signal processing components that are designed to work together well. A tool for viewing relationships between specific applications and related components is available on the www.analog.com website.

## ADSP-CM403F/CM407F/CM408F/CM409F

The application signal chains page in the Circuits from the Lab ® site (www.analog.com\circuits) provides:

- Graphical circuit block diagram presentation of signal chains for a variety of circuit types and applications
- Drill down links for components in each chain to selection guides and application information
- Reference designs applying best practice design techniques

## ADSP-CM403F/CM407F/CM408F/CM409F

## ADSP-CM40xF DETAILED SIGNAL DESCRIPTIONS

Table 6 provides a detailed description of each pin.

Table 6. ADSP-CM40xF Detailed Signal Description

| SignalName   | Direction Description   | Direction Description                                                                                                                                                                                                                             |
|--------------|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ADC_VINnn    | Input                   | Channel nn. Single-Ended Analog Input for ADCs. nn = 00 to 11 for each ADC                                                                                                                                                                        |
| BYP_An       |                         | On-chip Analog PowerRegulation Bypass Filter Nodefor ADC. Connect to decoupling capacitors. n =0, 1                                                                                                                                               |
| BYP_D0       |                         | On-chip Digital Power Regulation Bypass Filter Node for Analog Subsystem. Connect to decoupling capacitors.                                                                                                                                       |
| CAN_RX       | Input                   | CANReceive. Typically an external CAN transceiver's RX output.                                                                                                                                                                                    |
| CAN_TX       | Output                  | CANTransmit. Typically an external CAN transceiver's TX input.                                                                                                                                                                                    |
| CNT_OUTA     | Output                  | Counter Output Divider A. Frequency scaled output in Quadrature encoder mode of GP Counter                                                                                                                                                        |
| CNT_OUTB     | Output                  | Counter Output Divider B. Frequency scaled output in Quadrature encoder mode of GP Counter                                                                                                                                                        |
| CNT_DG       | Input                   | CNTCount DownandGate. Depending on the mode of operation this input acts either as a count down signal or a gate signal. Count Down: This input causes the GP counter to decrement. Gate: Stops the GP counter from incrementing or decrementing. |
| CNT_UD       | Input                   | Count UpandDirection. Depending on the modeof operation this input acts either as a count up signal or a direction signal. Count Up: This input causes the GP counter to increment.                                                               |
| CNT_ZM       | Input                   | Count Zero Marker. Input that connects to the zero marker output of a rotary device or detects the pressing of a push button.                                                                                                                     |
| CPTMR_INn    | Input                   | Capture Timer Input Pins. n = 0, 1, 2                                                                                                                                                                                                             |
| DACn_VOUT    | Output                  | DACOutput. Analog voltage output. n = 0, 1                                                                                                                                                                                                        |
| ETH_CRS      | Input                   | EMACCarrier Sense. Multiplexed on alternate clock cycles. CRS: Asserted by the PHY when either the transmit or receive medium is not idle. Deasserted when both are idle. RXDV: Asserted by the PHY when the data on RXDn is valid.               |
| ETH_MDC      | Output                  | EMACManagementChannelClock. Clocks the MDCinput of the PHY.                                                                                                                                                                                       |
| ETH_MDIO     | I/O                     | EMACManagementChannelSerial Data. Bidirectional data bus for PHY control.                                                                                                                                                                         |
| ETH_PTPAUXIN | Input                   | EMACPTPAuxiliaryTrigger Input. Assert this signal to take an auxiliary snapshot of the time and store it in the auxiliary time stamp FIFO.                                                                                                        |
| ETH_PTPCLKIN | Input                   | EMACPTPClock Input. Optional external PTP clock input.                                                                                                                                                                                            |
| ETH_PTPPPS   | Output                  | EMACPTPPulse-Per-Second Output. When the Advanced Time Stamp feature is enabled, this signal is asserted based on the PPS mode selected. Otherwise, PTPPPS is asserted every time the seconds counter is incremented.                             |
| ETH_REFCLK   | Input                   | EMACReference Clock. Externally supplied Ethernet clock.                                                                                                                                                                                          |
| ETH_RXDn     | Input                   | EMACReceive Data n. Receive data bus. n = 0, 1                                                                                                                                                                                                    |
| ETH_TXDn     | Output                  | EMACTransmit Data n. Transmit data bus. n = 0, 1                                                                                                                                                                                                  |
| ETH_TXEN     | I/O                     | EMACTransmit Enable. When asserted indicates that the data on TXDn is valid.                                                                                                                                                                      |
| JTG_SWCLK    | Input                   | Serial Wire Clock. Clocks data into and out of the target during debug.                                                                                                                                                                           |
| JTG_SWDIO    | I/O                     | Serial Wire Data IO. Sends and receives serial data to and from the target during debug.                                                                                                                                                          |
| JTG_SWO      | Output                  | Serial Wire Out. Provides trace data to the emulator.                                                                                                                                                                                             |
| JTG_TCK      | Input                   | JTAG Clock. JTAG test access port clock.                                                                                                                                                                                                          |
| JTG_TDI      | Input                   | JTAG Serial Data In. JTAG test access port data input.                                                                                                                                                                                            |
| JTG_TDO      | Output                  | JTAG Serial Data Out. JTAG test access port data output.                                                                                                                                                                                          |
| JTG_TMS      | Input                   | JTAG ModeSelect. JTAG test access port mode select.                                                                                                                                                                                               |

## ADSP-CM403F/CM407F/CM408F/CM409F

| SignalName   | Direction   | Description                                                                                                                                                                                                                                                       |
|--------------|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JTG_TRST     | Input       | JTAG Reset. JTAG test access port reset.                                                                                                                                                                                                                          |
| Px_nn        | I/O         | Position n. General purpose input/output. See the GP Ports chapter in the processor hardware reference for programming information.                                                                                                                               |
| PWM_AH       | Output      | PWMChannelAHighSide. High side drive signal.                                                                                                                                                                                                                      |
| PWM_AL       | Output      | PWMChannelALowSide. Low side drive signal.                                                                                                                                                                                                                        |
| PWM_BH       | Output      | PWMChannelBHighSide. High side drive signal.                                                                                                                                                                                                                      |
| PWM_BL       | Output      | PWMChannelBLowSide. Low side drive signal.                                                                                                                                                                                                                        |
| PWM_CH       | Output      | PWMChannelCHighSide. High side drive signal.                                                                                                                                                                                                                      |
| PWM_CL       | Output      | PWMChannelCLowSide. Low side drive signal.                                                                                                                                                                                                                        |
| PWM_DH       | Output      | PWMChannelDHighSide. High side drive signal.                                                                                                                                                                                                                      |
| PWM_DL       | Output      | PWMChannelDLowSide. Low side drive signal.                                                                                                                                                                                                                        |
| PWM_SYNC     | I/O         | PWMSynchronizationsignal. This is an inputpinwhenPWMisconfigured to receive external sync signal. It is an output pin whenPWMSync is generated internally.                                                                                                        |
| PWM_TRIPn    | Input       | PWMTripInput. When asserted the selected PWMchannel outputs are shut down immediately.                                                                                                                                                                            |
| REFCAP       | Analog      | Output of BandGap Generator Filter Node                                                                                                                                                                                                                           |
| SINC_CLKn    | Output      | SINC Clock n. n = 0, 1                                                                                                                                                                                                                                            |
| SINC_Dn      | Input       | SINC Data n. n = 0 to 3                                                                                                                                                                                                                                           |
| SMC_Ann      | Output      | SMCAddress n. Address bus. n = 0 to 24                                                                                                                                                                                                                            |
| SMC_ABEn     | Output      | SMCByteEnable n. Indicates whether the lower or upper byte of a memory is being accessed. Whenanasynchronouswriteismadetotheupperbyteofa16-bitmemory,SMC_ABE1=0andSMC_ABE0=1. Whenanasynchronouswriteismadetothelowerbyteofa16-bitmemory,SMC_ABE1=1andSMC_ABE0=0. |
| SMC_AMSn     | Output      | SMCMemorySelect n. Typically connects to the chip select of a memory device. n = 0, 1, 2, 3                                                                                                                                                                       |
| SMC_AOE      | Output      | SMCOutput Enable. Asserts at the beginning of the setup period of a read access.                                                                                                                                                                                  |
| SMC_ARDY     | Input       | SMCAsynchronousReady. FlowcontrolsignalusedbymemorydevicestoindicatetotheSMCwhenfurther transactions may proceed.                                                                                                                                                 |
| SMC_ARE      | Output      | SMCReadEnable. Asserts at the beginning of a read access.                                                                                                                                                                                                         |
| SMC_AWE      | Output      | SMCWrite Enable. Asserts for the duration of a write access period.                                                                                                                                                                                               |
| SMC_Dnn      | I/O         | SMCDatan. Bidirectional data bus. n = 0 to 15                                                                                                                                                                                                                     |
| SPI_CLK      | I/O         | SPI Clock. Input in slave mode, output in master mode.                                                                                                                                                                                                            |
| SPI_D2       | I/O         | SPI Data 2. Used to transfer serial data in quad mode. Open drain in ODMmode.                                                                                                                                                                                     |
| SPI_D3       | I/O         | SPI Data 3. Used to transfer serial data in quad mode. Open drain in ODMmode.                                                                                                                                                                                     |
| SPI_MISO     | I/O         | SPI MasterIn, Slave Out. Used to transfer serial data. Operates in the samedirection as SPI_MOSI in dual and quad modes. Open drain in ODMmode.                                                                                                                   |
| SPI_MOSI     | I/O         | SPI MasterOut,SlaveIn. Used to transfer serial data. Operates in the samedirection as SPI_MISO in dualand quad modes. Open drain in ODMmode.                                                                                                                      |
| SPI_RDY      | I/O         | SPI Ready. Optional flow signal to hold-off faster masters. Output in slave mode, input in master mode.                                                                                                                                                           |
| SPI_SELn     | Output      | SPI Slave Select Output n. Used in master mode to enable the desired slave.                                                                                                                                                                                       |
| SPI_SS       | Input       | SPI Slave Select Input. Slave mode: acts as the slave select input. Master mode: optionally serves as an error detection input for the SPI when there are multiple masters.                                                                                       |
| SPT_ACLK     | I/O         | SPORT AChannel Clock. Data and frame sync are driven/sampled with respect to this clock. This signal can be either internally or externally generated.                                                                                                            |
| SPT_AD0      | I/O         | SPORTAChannelData0. PrimarybidirectionaldataI/O.Thissignalcanbeconfiguredasanoutputtotransmit serial data, or as an input to receive serial data.                                                                                                                 |
| SPT_AD1      | I/O         | SPORT AChannel Data 1. Secondary bidirectional data I/O. This signal can be configured as an output to transmit serial data, or as an input to receive serial data.                                                                                               |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 6.

ADSP-CM40xF Detailed Signal Description (Continued)

| SignalName   | Direction Description   | Direction Description                                                                                                                                                                                                                                                      |
|--------------|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SPT_AFS      | I/O                     | SPORT AChannel Frame Sync. The frame sync pulse initiates shifting of serial data. This signal is either generated internally or externally.                                                                                                                               |
| SPT_ATDV     | Output                  | SPORT AChannel Transmit Data Valid. This signal is optional and only active when SPORT is configured in multi-channel transmit mode. It is asserted during enabled slots.                                                                                                  |
| SPT_BCLK     | I/O                     | SPORTBChannel Clock. Data and frame sync are driven/sampled with respect to this clock. This signal can be either internally or externally generated.                                                                                                                      |
| SPT_BD0      | I/O                     | SPORTBChannelData0. PrimarybidirectionaldataI/O.Thissignalcanbeconfiguredasanoutputtotransmit serial data, or as an input to receive serial data.                                                                                                                          |
| SPT_BD1      | I/O                     | SPORT BChannel Data 1. Secondary bidirectional data I/O. This signal can be configured as an output to transmit serial data, or as an input to receive serial data.                                                                                                        |
| SPT_BFS      | I/O                     | SPORT BChannel Frame Sync. The frame sync pulse initiates shifting of serial data. This signal is either generated internally or externally.                                                                                                                               |
| SPT_BTDV     | Output                  | SPORTBChannel Transmit Data Valid. This signal is optional and only active when SPORT is configured in multi-channel transmit mode. It is asserted during enabled slots.                                                                                                   |
| SYS_BMODEn   | Input                   | Boot ModeControl n. Selects the boot mode of the processor. n = 0, 1                                                                                                                                                                                                       |
| SYS_CLKIN    | Input                   | Processor Clock/Crystal Input. Connect to an external clock source or crystal.                                                                                                                                                                                             |
| SYS_CLKOUT   | Output                  | Processor Clock Output. Outputs internal clocks. Clocks may be divided down. See the CGU chapter in the processor hardware reference for more details.                                                                                                                     |
| SYS_DSWAKEn  | Input                   | System Deep Sleep Wakeupinputs. n = 0 to 3                                                                                                                                                                                                                                 |
| SYS_FAULT    | Output                  | System Fault. Indicates system fault.                                                                                                                                                                                                                                      |
| SYS_HWRST    | Input                   | Processor Hardware Reset Control. Resets the device when asserted.                                                                                                                                                                                                         |
| SYS_NMI      | Input                   | Non-maskable Interrupt. See the processor hardware and programming references for more details.                                                                                                                                                                            |
| SYS_RESOUT   | Output                  | Processor Reset Output. Indicates that the device is in the reset state.                                                                                                                                                                                                   |
| SYS_XTAL     | Output                  | System Crystal Output. Drives an external crystal. Must be left unconnected if an external clock is driving CLKIN.                                                                                                                                                         |
| TM_ACIn      | Input                   | GPTimerAlternateCaptureInputn. ProvidesanadditionalinputforGPTimersinWIDCAP,WATCHDOG,and PININT modes. n = 0 to 5                                                                                                                                                          |
| TM_ACLKn     | Input                   | GPTimer Alternate Clock n. Provides an additional time base for use by an individual timer. n = 0 to 5                                                                                                                                                                     |
| TM_CLK       | Input                   | GPTimer Clock. Provides an additional global time base for use by all the GP timers.                                                                                                                                                                                       |
| TM_TMRn      | I/O                     | GPTimerTimern. Themaininput/outputsignalforeachtimer.n=0to7.InPWMOUTmode,outputisdriven onthispin.InWidthcapturemode,itactsasinputandTimermeasureswidthand/orperiodofincomingsignal on this pin. In EXTCLK mode, Timer counts number of incoming signal edges on this pin. |
| TRACE_CLK    | Output                  | EmbeddedTrace Module Clock. Reference clock for the Trace Unit.                                                                                                                                                                                                            |
| TRACE_Dn     | Output                  | EmbeddedTraceModuleDatan. OutputdataforclockedmodesandchangesonbothedgesofTRACE_CLK. n = 0 to 3                                                                                                                                                                            |
| TWI_SCL      | I/O                     | TWI Serial Clock. Clock output when master, clock input when slave. Compatible with I 2 C bus standard.                                                                                                                                                                    |
| TWI_SDA      | I/O                     | TWI Serial Data. Receives or transmits data. Compatible with I 2 C bus standard.                                                                                                                                                                                           |
| UART_CTS     | Input                   | UARTClear to Send. Input Hardware Flow control signal. Transmitter initiates the transfer only when this signal is active.                                                                                                                                                 |
| UART_RTS     | Output                  | UARTRequest to Send. Output Hardware Flow control signal. Receiver activates this signal when it is ready to receive new transfers.                                                                                                                                        |
| UART_RX      | Input                   | UARTReceive. Receiveinput.Typicallyconnectstoatransceiverthatmeetstheelectricalrequirements of the device being communicated with.                                                                                                                                         |
| UART_TX      | Output                  | UARTTransmit. Transmit output. Typically connects to a transceiver that meets the electrical requirements of the device being communicated with.                                                                                                                           |
| USB_DM       | I/O                     | USBData -. Bidirectional differential data line.                                                                                                                                                                                                                           |
| USB_DP       | I/O                     | USBData + . Bidirectional differential data line.                                                                                                                                                                                                                          |

## ADSP-CM403F/CM407F/CM408F/CM409F

| Table 6. ADSP-CM40xF Detailed Signal Description (Continued)   | Table 6. ADSP-CM40xF Detailed Signal Description (Continued)   | Table 6. ADSP-CM40xF Detailed Signal Description (Continued)                                                                                                                                                                                                            |
|----------------------------------------------------------------|----------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SignalName                                                     | Direction                                                      | Description                                                                                                                                                                                                                                                             |
| USB_ID                                                         | Input                                                          | USBOTGID. Senses whether the controller is a host or device. This signal is pulled low when an A-type plug issensed (signifying that theUSBcontrolleristheAdevice),buttheinputishighwhenaB-typeplugissensed (signifying that the USB controller is the B device).       |
| USB_VBC                                                        | Output                                                         | USBVBUSControl. ControlsanexternalvoltagesourcetosupplyVBUSwheninhostmode.Maybeconfigured as open drain. Polarity is configurable as well.                                                                                                                              |
| USB_VBUS                                                       | I/O                                                            | USBBus Voltage. Connects to bus voltage in host and device modes.                                                                                                                                                                                                       |
| VREFn                                                          | I/O                                                            | VoltageReferenceforADC. Wheninternal reference is selected for ADC, the VREFpin is used for connecting bypass caps. Whenexternal reference is selected, an external reference device should be connected to these pins to supply the external reference voltage. n=0,1. |
| VREG_BASE                                                      | Output                                                         | Voltage RegulatorBase Node. Connected to Base of PNPtransistor whenusing internal VDD_INTreference.                                                                                                                                                                     |

## ADSP-CM403F/CM407F/CM408F/CM409F

## ADSP-CM403F 120-LEAD LQFP SIGNAL DESCRIPTIONS

The processor's pin definitions are shown in Table 7. The columns in this table provide the following information:

- Signal Name: The Signal Name column in the table includes the signal name for every pin and (where applicable) the GPIO multiplexed pin function for every pin.
- Description: The Description column in the table provides a verbose (descriptive) name for the signal.
- General-Purpose Port: The Port column in the table shows whether or not the signal is multiplexed with other signals on a general-purpose I/O port pin.
- Pin Name: The Pin Name column in the table identifies the name of the package pin (at power on reset) on which the signal is located (if a single function pin) or is multiplexed (if a general-purpose I/O pin).

Table 7. ADSP-CM403F 120-Lead LQFP Signal Descriptions

| SignalName   | Description                                                                                                  | Port      | PinName    |
|--------------|--------------------------------------------------------------------------------------------------------------|-----------|------------|
| ADC0_VIN00   | Channel 0 Single-Ended Analog Input for ADC0                                                                 | Not Muxed | ADC0_VIN00 |
| ADC0_VIN01   | Channel 1 Single-Ended Analog Input for ADC0                                                                 | Not Muxed | ADC0_VIN01 |
| ADC0_VIN02   | Channel 2 Single-Ended Analog Input for ADC0                                                                 | Not Muxed | ADC0_VIN02 |
| ADC0_VIN03   | Channel 3 Single-Ended Analog Input for ADC0                                                                 | Not Muxed | ADC0_VIN03 |
| ADC0_VIN04   | Channel 4 Single-Ended Analog Input for ADC0                                                                 | Not Muxed | ADC0_VIN04 |
| ADC0_VIN05   | Channel 5 Single-Ended Analog Input for ADC0                                                                 | Not Muxed | ADC0_VIN05 |
| ADC0_VIN06   | Channel 6 Single-Ended Analog Input for ADC0                                                                 | Not Muxed | ADC0_VIN06 |
| ADC0_VIN07   | Channel 7 Single-Ended Analog Input for ADC0                                                                 | Not Muxed | ADC0_VIN07 |
| ADC0_VIN08   | Channel 8 Single-Ended Analog Input for ADC0                                                                 | Not Muxed | ADC0_VIN08 |
| ADC0_VIN09   | Channel 9 Single-Ended Analog Input for ADC0                                                                 | Not Muxed | ADC0_VIN09 |
| ADC0_VIN10   | Channel 10 Single-Ended Analog Input for ADC0                                                                | Not Muxed | ADC0_VIN10 |
| ADC0_VIN11   | Channel 11 Single-Ended Analog Input for ADC0                                                                | Not Muxed | ADC0_VIN11 |
| ADC1_VIN00   | Channel 0 Single-Ended Analog Input for ADC1                                                                 | Not Muxed | ADC1_VIN00 |
| ADC1_VIN01   | Channel 1 Single-Ended Analog Input for ADC1                                                                 | Not Muxed | ADC1_VIN01 |
| ADC1_VIN02   | Channel 2 Single-Ended Analog Input for ADC1                                                                 | Not Muxed | ADC1_VIN02 |
| ADC1_VIN03   | Channel 3 Single-Ended Analog Input for ADC1                                                                 | Not Muxed | ADC1_VIN03 |
| ADC1_VIN04   | Channel 4 Single-Ended Analog Input for ADC1                                                                 | Not Muxed | ADC1_VIN04 |
| ADC1_VIN05   | Channel 5 Single-Ended Analog Input for ADC1                                                                 | Not Muxed | ADC1_VIN05 |
| ADC1_VIN06   | Channel 6 Single-Ended Analog Input for ADC1                                                                 | Not Muxed | ADC1_VIN06 |
| ADC1_VIN07   | Channel 7 Single-Ended Analog Input for ADC1                                                                 | Not Muxed | ADC1_VIN07 |
| ADC1_VIN08   | Channel 8 Single-Ended Analog Input for ADC1                                                                 | Not Muxed | ADC1_VIN08 |
| ADC1_VIN09   | Channel 9 Single-Ended Analog Input for ADC1                                                                 | Not Muxed | ADC1_VIN09 |
| ADC1_VIN10   | Channel 10 Single-Ended Analog Input for ADC1                                                                | Not Muxed | ADC1_VIN10 |
| ADC1_VIN11   | Channel 11 Single-Ended Analog Input for ADC1                                                                | Not Muxed | ADC1_VIN11 |
| BYP_A0       | On-chip Analog Power Regulation Bypass Filter Nodefor ADC0(see recommended bypass - Figure 4)                | Not Muxed | BYP_A0     |
| BYP_A1       | On-chip Analog Power Regulation Bypass Filter Nodefor ADC1(see recommended bypass - Figure 4)                | Not Muxed | BYP_A1     |
| BYP_D0       | On-chip Digital Power Regulation Bypass Filter Node for Analog Subsystem (see recommended bypass - Figure 4) | Not Muxed | BYP_D0     |
| CAN0_RX      | CAN0 Receive                                                                                                 | B         | PB_15      |
| CAN0_TX      | CAN0 Transmit                                                                                                | C         | PC_00      |
| CAN1_RX      | CAN1 Receive                                                                                                 | B         | PB_10      |
| CAN1_TX      | CAN1 Transmit                                                                                                | B         | PB_11      |
| CNT0_DG      | CNT0 Count Down and Gate                                                                                     | B         | PB_02      |
| CNT0_OUTA    | CNT0 Output Divider A                                                                                        | B         | PB_13      |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 7. ADSP-CM403F 120-Lead LQFP Signal Descriptions (Continued)

| SignalName    | Description                                                           | Port         | PinName       |
|---------------|-----------------------------------------------------------------------|--------------|---------------|
| CNT0_OUTB     | CNT0 Output Divider B                                                 | B            | PB_14         |
| CNT0_UD       | CNT0 Count Up and Direction                                           | B            | PB_01         |
| CNT0_ZM       | CNT0 Count Zero Marker                                                | B            | PB_00         |
| CNT1_DG       | CNT1 Count Down and Gate                                              | B            | PB_05         |
| CNT1_UD       | CNT1 Count Up and Direction                                           | B            | PB_04         |
| CNT1_ZM       | CNT1 Count Zero Marker                                                | B            | PB_03         |
| CPTMR0_IN0    | CPTMR0 Capture Timer0 Input 0                                         | B            | PB_07         |
| CPTMR0_IN1    | CPTMR0 Capture Timer0 Input 1                                         | B            | PB_08         |
| CPTMR0_IN2    | CPTMR0 Capture Timer0 Input 2                                         | B            | PB_09         |
| DAC0_VOUT     | Analog Voltage Output 0                                               | Not Muxed    | DAC0_VOUT     |
| DAC1_VOUT     | Analog Voltage Output 1                                               | Not Muxed    | DAC1_VOUT     |
| GND           | Digital Ground                                                        | Not Muxed    | GND           |
| GND_ANA0      | Analog Ground return for VDD_ANA0 (see recommended bypass - Figure 4) | Not Muxed    | GND_ANA0      |
| GND_ANA1      | Analog Ground return for VDD_ANA1 (see recommended bypass - Figure 4) | Not Muxed    | GND_ANA1      |
| GND_ANA2      | Analog Ground (see recommended bypass - Figure 4)                     | Not Muxed    | GND_ANA2      |
| GND_ANA3      | Analog Ground (see recommended bypass - Figure 4)                     | Not Muxed    | GND_ANA3      |
| GND_VREF0     | Ground return for VREF0 (see recommendedbypassfilter - Figure         | 4) Not Muxed | GND_VREF0     |
| GND_VREF1     | Ground return for VREF1 (see recommendedbypassfilter - Figure 4)      | Not Muxed    | GND_VREF1     |
| JTG_TCK/SWCLK | JTAG Clock/Serial Wire Clock                                          | Not Muxed    | JTG_TCK/SWCLK |
| JTG_TDI       | JTAG Serial Data In                                                   | Not Muxed    | JTG_TDI       |
| JTG_TDO/SWO   | JTAG Serial Data Out/Serial Wire Trace Output                         | Not Muxed    | JTG_TDO/SWO   |
| JTG_TMS/SWDIO | JTAG Mode Select/Serial Wire Debug Data I/O                           | Not Muxed    | JTG_TMS/SWDIO |
| JTG_TRST      | JTAG Reset                                                            | Not Muxed    | JTG_TRST      |
| PA_00-PA_15   | Port A Positions 0 - 15                                               | A            | PA_00 - PA_15 |
| PB_00-PB_15   | Port B Positions 0 - 15                                               | B            | PB_00 - PB_15 |
| PC_00-PC_07   | Port C Positions 0 - 7                                                | C            | PC_00 - PC_07 |
| PWM0_AH       | PWM0Channel A High Side                                               | A            | PA_02         |
| PWM0_AL       | PWM0Channel A Low Side                                                | A            | PA_03         |
| PWM0_BH       | PWM0Channel B High Side                                               | A            | PA_04         |
| PWM0_BL       | PWM0Channel B Low Side                                                | A            | PA_05         |
| PWM0_CH       | PWM0Channel C High Side                                               | A            | PA_06         |
| PWM0_CL       | PWM0Channel C Low Side                                                | A            | PA_07         |
| PWM0_DH       | PWM0Channel DHigh Side                                                | B            | PB_00         |
| PWM0_DL       | PWM0Channel DLowSide                                                  | B            | PB_01         |
| PWM0_SYNC     | PWM0Sync                                                              | A            | PA_00         |
| PWM0_TRIP0    | PWM0Trip Input 0                                                      | A            | PA_01         |
| PWM1_AH       | PWM1Channel A High Side                                               | A            | PA_12         |
| PWM1_AL       | PWM1Channel A Low Side                                                | A            | PA_13         |
| PWM1_BH       | PWM1Channel B High Side                                               | A            | PA_14         |
| PWM1_BL       | PWM1Channel B Low Side                                                | A            | PA_15         |
| PWM1_CH       | PWM1Channel C High Side                                               | A            | PA_08         |
| PWM1_CL       | PWM1Channel C Low Side                                                | A            | PA_09         |
| PWM1_DH       | PWM1Channel DHigh Side                                                | B            | PB_02         |
|               | PWM1Sync                                                              | A            | PA_10         |
| PWM1_SYNC     |                                                                       |              |               |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 7. ADSP-CM403F 120-Lead LQFP Signal Descriptions (Continued)

| SignalName   | Description                                              | Port      | PinName   |
|--------------|----------------------------------------------------------|-----------|-----------|
| PWM1_TRIP0   | PWM1Trip Input 0                                         | A         | PA_11     |
| PWM2_AH      | PWM2Channel A High Side                                  | B         | PB_06     |
| PWM2_AL      | PWM2Channel A Low Side                                   | B         | PB_07     |
| PWM2_BH      | PWM2Channel B High Side                                  | B         | PB_08     |
| PWM2_BL      | PWM2Channel B Low Side                                   | B         | PB_09     |
| PWM2_CH      | PWM2Channel C High Side                                  | C         | PC_03     |
| PWM2_CL      | PWM2Channel C Low Side                                   | C         | PC_04     |
| PWM2_DH      | PWM2Channel DHigh Side                                   | C         | PC_05     |
| PWM2_DL      | PWM2Channel DLowSide                                     | C         | PC_06     |
| PWM2_SYNC    | PWM2Sync                                                 | B         | PB_04     |
| PWM2_TRIP0   | PWM2Trip Input 0                                         | B         | PB_05     |
| REFCAP       | Output of BandGap Generator Filter Node (see recommended | Not Muxed | REFCAP    |
|              | bypass filter - Figure 4)                                |           |           |
| SINC0_CLK0   | SINC0 Clock 0                                            | B         | PB_10     |
| SINC0_CLK1   | SINC0 Clock 1                                            | C         | PC_07     |
| SINC0_D0     | SINC0 Data 0                                             | B         | PB_11     |
| SINC0_D1     | SINC0 Data 1                                             | B         | PB_12     |
| SINC0_D2     | SINC0 Data 2                                             | B         | PB_13     |
| SINC0_D3     | SINC0 Data 3                                             | B         | PB_14     |
| SMC0_A01     | SMC0 Address 1                                           | B         | PB_13     |
| SMC0_A02     | SMC0 Address 2                                           | B         | PB_14     |
| SMC0_A03     | SMC0 Address 3                                           | B         | PB_15     |
| SMC0_A04     | SMC0 Address 4                                           | C         | PC_00     |
| SMC0_A05     | SMC0 Address 5                                           | C         | PC_01     |
| SMC0_AMS0    | SMC0 Memory Select 0                                     | B         | PB_11     |
| SMC0_AMS2    | SMC0 Memory Select 2                                     | A         | PA_07     |
| SMC0_AOE     | SMC0 Output Enable                                       | B         | PB_12     |
| SMC0_ARDY    | SMC0 Asynchronous Ready                                  | B         | PB_08     |
| SMC0_ARE     | SMC0 Read Enable                                         | B         | PB_09     |
| SMC0_AWE     | SMC0 Write Enable                                        | B         | PB_10     |
| SMC0_D00     | SMC0 Data 0                                              | A         | PA_08     |
| SMC0_D01     | SMC0 Data 1                                              | A         | PA_09     |
| SMC0_D02     | SMC0 Data 2                                              | A         | PA_10     |
| SMC0_D03     | SMC0 Data 3                                              | A         | PA_11     |
| SMC0_D04     | SMC0 Data 4                                              | A         | PA_12     |
| SMC0_D05     | SMC0 Data 5                                              | A         | PA_13     |
| SMC0_D06     | SMC0 Data 6                                              | A         | PA_14     |
| SMC0_D07     | SMC0 Data 7                                              | A         | PA_15     |
| SMC0_D08     | SMC0 Data 8                                              | B         | PB_00     |
| SMC0_D09     | SMC0 Data 9                                              | B         | PB_01     |
| SMC0_D10     | SMC0 Data 10                                             | B         | PB_02     |
| SMC0_D11     | SMC0 Data 11                                             | B         | PB_03     |
| SMC0_D12     | SMC0 Data 12                                             | B         | PB_04     |
| SMC0_D13     | SMC0 Data 13                                             | B         | PB_05     |
| SMC0_D14     | SMC0 Data 14 SMC0 Data 15                                | B B       | PB_06     |
| SMC0_D15     |                                                          |           | PB_07     |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 7. ADSP-CM403F 120-Lead LQFP Signal Descriptions (Continued)

| SignalName   | Description                          | Port      | PinName    |
|--------------|--------------------------------------|-----------|------------|
| SPI0_CLK     | SPI0 Clock                           | C         | PC_03      |
| SPI0_D2      | SPI0 Data 2                          | B         | PB_10      |
| SPI0_D3      | SPI0 Data 3                          | B         | PB_11      |
| SPI0_MISO    | SPI0 Master In, Slave Out            | C         | PC_04      |
| SPI0_MOSI    | SPI0 Master Out, Slave In            | C         | PC_05      |
| SPI0_RDY     | SPI0 Ready                           | C         | PC_02      |
| SPI0_SEL1    | SPI0 Slave Select Output 1           | C         | PC_06      |
| SPI0_SEL2    | SPI0 Slave Select Output 2           | B         | PB_13      |
| SPI0_SEL3    | SPI0 Slave Select Output 3           | B         | PB_14      |
| SPI0_SS      | SPI0 Slave Select Input              | B         | PB_14      |
| SPT0_ACLK    | SPORT0 Channel A Clock               | B         | PB_00      |
| SPT0_AD0     | SPORT0 Channel A Data 0              | B         | PB_02      |
| SPT0_AD1     | SPORT0 Channel A Data 1              | B         | PB_03      |
| SPT0_AFS     | SPORT0 Channel A Frame Sync          | B         | PB_01      |
| SPT0_ATDV    | SPORT0 Channel A Transmit Data Valid | B         | PB_04      |
| SPT1_ACLK    | SPORT1 Channel A Clock               | A         | PA_00      |
| SPT1_AD0     | SPORT1 Channel A Data 0              | A         | PA_02      |
| SPT1_AD1     | SPORT1 Channel A Data 1              | A         | PA_03      |
| SPT1_AFS     | SPORT1 Channel A Frame Sync          | A         | PA_01      |
| SPT1_ATDV    | SPORT1 Channel A Transmit Data Valid | B         | PB_15      |
| SPT1_BCLK    | SPORT1 Channel B Clock               | A         | PA_04      |
| SPT1_BD0     | SPORT1 Channel B Data 0              | A         | PA_06      |
| SPT1_BD1     | SPORT1 Channel B Data 1              | A         | PA_07      |
| SPT1_BFS     | SPORT1 Channel B Frame Sync          | A         | PA_05      |
| SPT1_BTDV    | SPORT1 Channel B Transmit Data Valid | C         | PC_00      |
| SYS_BMODE0   | Boot Mode Control 0                  | Not Muxed | SYS_BMODE0 |
| SYS_BMODE1   | Boot Mode Control 1                  | Not Muxed | SYS_BMODE1 |
| SYS_CLKIN    | Clock/Crystal Input                  | Not Muxed | SYS_CLKIN  |
| SYS_CLKOUT   | Processor Clock Output               | Not Muxed | SYS_CLKOUT |
| SYS_DSWAKE0  | Deep Sleep Wake-up 0                 | C         | PC_06      |
| SYS_DSWAKE1  | Deep Sleep Wake-up 1                 | C         | PC_07      |
| SYS_DSWAKE2  | Deep Sleep Wake-up 2                 | B         | PB_14      |
| SYS_DSWAKE3  | Deep Sleep Wake-up 3                 | B         | PB_13      |
| SYS_FAULT    | System Fault Output                  | Not Muxed | SYS_FAULT  |
| SYS_HWRST    | Processor Hardware Reset Control     | Not Muxed | SYS_HWRST  |
| SYS_NMI      | Nonmaskable Interrupt                | Not Muxed | SYS_NMI    |
| SYS_RESOUT   | Reset Output                         | Not Muxed | SYS_RESOUT |
| SYS_XTAL     | Crystal Output                       | Not Muxed | SYS_XTAL   |
| TM0_ACI1     | TIMER0 Alternate Capture Input 1     | B         | PB_10      |
| TM0_ACI2     | TIMER0 Alternate Capture Input 2     | B         | PB_08      |
| TM0_ACI3     | TIMER0 Alternate Capture Input 3     | B         | PB_12      |
| TM0_ACI4     | TIMER0 Alternate Capture Input 4     | B         | PB_15      |
| TM0_ACI5     | TIMER0 Alternate Capture Input 5     | C         | PC_01      |
| TM0_ACLK0    | TIMER0 Alternate Clock 0             | B         | PB_13      |
| TM0_ACLK1    | TIMER0 Alternate Clock 1             | B         | PB_11      |
| TM0_ACLK2    | TIMER0 Alternate Clock 2             | A         | PA_11      |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 7. ADSP-CM403F 120-Lead LQFP Signal Descriptions (Continued)

| SignalName   | Description                                                                                     | Port      | PinName   |
|--------------|-------------------------------------------------------------------------------------------------|-----------|-----------|
| TM0_ACLK3    | TIMER0 Alternate Clock 3                                                                        | A         | PA_10     |
| TM0_ACLK4    | TIMER0 Alternate Clock 4                                                                        | A         | PA_09     |
| TM0_ACLK5    | TIMER0 Alternate Clock 5                                                                        | A         | PA_08     |
| TM0_CLK      | TIMER0 Clock                                                                                    | B         | PB_06     |
| TM0_TMR0     | TIMER0 Timer 0                                                                                  | B         | PB_07     |
| TM0_TMR1     | TIMER0 Timer 1                                                                                  | B         | PB_08     |
| TM0_TMR2     | TIMER0 Timer 2                                                                                  | B         | PB_09     |
| TM0_TMR3     | TIMER0 Timer 3                                                                                  | A         | PA_15     |
| TM0_TMR4     | TIMER0 Timer 4                                                                                  | A         | PA_12     |
| TM0_TMR5     | TIMER0 Timer 5                                                                                  | A         | PA_13     |
| TM0_TMR6     | TIMER0 Timer 6                                                                                  | A         | PA_14     |
| TM0_TMR7     | TIMER0 Timer 7                                                                                  | B         | PB_05     |
| TRACE_CLK    | Embedded Trace Module Clock                                                                     | B         | PB_00     |
| TRACE_D00    | Embedded Trace Module Data 0                                                                    | B         | PB_01     |
| TRACE_D01    | Embedded Trace Module Data 1                                                                    | B         | PB_02     |
| TRACE_D02    | Embedded Trace Module Data 2                                                                    | B         | PB_03     |
| TRACE_D03    | Embedded Trace Module Data 3                                                                    | C         | PC_02     |
| TWI0_SCL     | TWI0 Serial Clock                                                                               | Not Muxed | TWI0_SCL  |
| TWI0_SDA     | TWI0 Serial Data                                                                                | Not Muxed | TWI0_SDA  |
| UART0_CTS    | UART0 Clear to Send                                                                             | B         | PB_05     |
| UART0_RTS    | UART0 Request to Send                                                                           | B         | PB_04     |
| UART0_RX     | UART0 Receive                                                                                   | C         | PC_01     |
| UART0_TX     | UART0 Transmit                                                                                  | C         | PC_02     |
| UART1_CTS    | UART1 Clear to Send                                                                             | A         | PA_11     |
| UART1_RTS    | UART1 Request to Send                                                                           | C         | PC_07     |
| UART1_RX     | UART1 Receive                                                                                   | B         | PB_08     |
| UART1_RX     | UART1 Receive                                                                                   | B         | PB_15     |
| UART1_TX     | UART1 Transmit                                                                                  | B         | PB_09     |
| UART1_TX     | UART1 Transmit                                                                                  | C         | PC_00     |
| UART2_RX     | UART2 Receive                                                                                   | B         | PB_12     |
| UART2_TX     | UART2 Transmit                                                                                  | C         | PC_07     |
| VDD_ANA0     | Analog Voltage Domain (see recommended bypass - Figure 4)                                       | Not Muxed | VDD_ANA0  |
| VDD_ANA1     | Analog Voltage Domain (see recommended bypass - Figure 4)                                       | Not Muxed | VDD_ANA1  |
| VDD_EXT      | External Voltage Domain                                                                         | Not Muxed | VDD_EXT   |
| VDD_INT      | Internal Voltage Domain                                                                         | Not Muxed | VDD_INT   |
| VDD_VREG     | VREG Supply Voltage                                                                             | Not Muxed | VDD_VREG  |
| VREF0        | Voltage Reference for ADC0. Default configuration is Output (see recommended bypass - Figure 4) | Not Muxed | VREF0     |
| VREF1        | Voltage Reference for ADC1. Default configuration is Output (see recommended bypass - Figure 4) | Not Muxed | VREF1     |
| VREG_BASE    | Voltage Regulator Base Node                                                                     | Not Muxed | VREG_BASE |

## ADSP-CM403F/CM407F/CM408F/CM409F

## ADSP-CM403F GPIO MULTIPLEXING FOR 120-LEAD LQFP

Table 8 through Table 10 identify the pin functions that are multiplexed on the general-purpose I/O pins of the 120-lead LQFP package.

Table 8. Signal Multiplexing for Port A (120-Lead LQFP)

| SignalName   | Multiplexed Function 0   | Multiplexed Function 1   | Multiplexed Function 2   | Multiplexed Function 3   | Multiplexed Function Input Tap   |
|--------------|--------------------------|--------------------------|--------------------------|--------------------------|----------------------------------|
| PA_00        | PWM0_SYNC                |                          | SPT1_ACLK                |                          |                                  |
| PA_01        | PWM0_TRIP0               |                          | SPT1_AFS                 |                          |                                  |
| PA_02        | PWM0_AH                  |                          | SPT1_AD0                 |                          |                                  |
| PA_03        | PWM0_AL                  |                          | SPT1_AD1                 |                          |                                  |
| PA_04        | PWM0_BH                  |                          | SPT1_BCLK                |                          |                                  |
| PA_05        | PWM0_BL                  |                          | SPT1_BFS                 |                          |                                  |
| PA_06        | PWM0_CH                  |                          | SPT1_BD0                 |                          |                                  |
| PA_07        | PWM0_CL                  | SMC0_AMS2                | SPT1_BD1                 |                          |                                  |
| PA_08        | PWM1_CH                  |                          | SMC0_D00                 |                          | TM0_ACLK5                        |
| PA_09        | PWM1_CL                  |                          | SMC0_D01                 |                          | TM0_ACLK4                        |
| PA_10        | PWM1_SYNC                |                          | SMC0_D02                 |                          | TM0_ACLK3                        |
| PA_11        | PWM1_TRIP0               | UART1_CTS                | SMC0_D03                 |                          | TM0_ACLK2                        |
| PA_12        | PWM1_AH                  | TM0_TMR4                 | SMC0_D04                 |                          |                                  |
| PA_13        | PWM1_AL                  | TM0_TMR5                 | SMC0_D05                 |                          |                                  |
| PA_14        | PWM1_BH                  | TM0_TMR6                 | SMC0_D06                 |                          |                                  |
| PA_15        | PWM1_BL                  | TM0_TMR3                 | SMC0_D07                 |                          |                                  |

Table 9. Signal Multiplexing for Port B (120-Lead LQFP)

| SignalName   | Multiplexed Function 0   | Multiplexed Function 1   | Multiplexed Function 2   | Multiplexed Function 3   | Multiplexed Function Input Tap   |
|--------------|--------------------------|--------------------------|--------------------------|--------------------------|----------------------------------|
| PB_00        | PWM0_DH                  | TRACE_CLK                | SPT0_ACLK                | SMC0_D08                 | CNT0_ZM                          |
| PB_01        | PWM0_DL                  | TRACE_D00                | SPT0_AFS                 | SMC0_D09                 | CNT0_UD                          |
| PB_02        | PWM1_DH                  | TRACE_D01                | SPT0_AD0                 | SMC0_D10                 | CNT0_DG                          |
| PB_03        | PWM1_DL                  | TRACE_D02                | SPT0_AD1                 | SMC0_D11                 | CNT1_ZM                          |
| PB_04        | PWM2_SYNC                | UART0_RTS                | SPT0_ATDV                | SMC0_D12                 | CNT1_UD                          |
| PB_05        | PWM2_TRIP0               | UART0_CTS                | TM0_TMR7                 | SMC0_D13                 | CNT1_DG                          |
| PB_06        | PWM2_AH                  | TM0_CLK                  |                          | SMC0_D14                 |                                  |
| PB_07        | PWM2_AL                  | TM0_TMR0                 |                          | SMC0_D15                 | CPTMR0_IN0                       |
| PB_08        | PWM2_BH                  | TM0_TMR1                 | UART1_RX                 | SMC0_ARDY                | TM0_ACI2/ CPTMR0_IN1             |
| PB_09        | PWM2_BL                  | TM0_TMR2                 | UART1_TX                 | SMC0_ARE                 | CPTMR0_IN2                       |
| PB_10        | SINC0_CLK0               | SPI0_D2                  | CAN1_RX                  | SMC0_AWE                 | TM0_ACI1                         |
| PB_11        | SINC0_D0                 | SPI0_D3                  | CAN1_TX                  | SMC0_AMS0                | TM0_ACLK1                        |
| PB_12        | SINC0_D1                 |                          | UART2_RX                 | SMC0_AOE                 | TM0_ACI3                         |
| PB_13        | SINC0_D2                 | CNT0_OUTA                | SPI0_SEL2                | SMC0_A01                 | TM0_ACLK0/ SYS_DSWAKE3           |
| PB_14        | SINC0_D3                 | CNT0_OUTB                | SPI0_SEL3                | SMC0_A02                 | SPI0_SS/ SYS_DSWAKE2             |
| PB_15        | CAN0_RX                  | SPT1_ATDV                | UART1_RX                 | SMC0_A03                 | TM0_ACI4                         |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 10. Signal Multiplexing for Port C (120-Lead LQFP)

| SignalName   | Multiplexed Function 0   | Multiplexed Function 1   | Multiplexed Function 2   | Multiplexed Function 3   | Multiplexed Function Input Tap   |
|--------------|--------------------------|--------------------------|--------------------------|--------------------------|----------------------------------|
| PC_00        | CAN0_TX                  | SPT1_BTDV                | UART1_TX                 | SMC0_A04                 |                                  |
| PC_01        | UART0_RX                 |                          |                          | SMC0_A05                 | TM0_ACI5                         |
| PC_02        | UART0_TX                 | TRACE_D03                | SPI0_RDY                 |                          |                                  |
| PC_03        | SPI0_CLK                 | PWM2_CH                  |                          |                          |                                  |
| PC_04        | SPI0_MISO                | PWM2_CL                  |                          |                          |                                  |
| PC_05        | SPI0_MOSI                | PWM2_DH                  |                          |                          |                                  |
| PC_06        | SPI0_SEL1                | PWM2_DL                  |                          |                          | SYS_DSWAKE0                      |
| PC_07        | SINC0_CLK1               | UART2_TX                 | UART1_RTS                |                          | SYS_DSWAKE1                      |

## ADSP-CM403F/CM407F/CM408F/CM409F

## ADSP-CM407F/ADSP-CM408F 176-LEAD LQFP SIGNAL DESCRIPTIONS

The processor's pin definitions are shown Table 11. The columns in this table provide the following information:

- Signal Name: The Signal Name column in the table includes the signal name for every pin and (where applicable) the GPIO multiplexed pin function for every pin.
- General-Purpose Port: The Port column in the table shows whether or not the signal is multiplexed with other signals on a general-purpose I/O port pin.
- Description: The Description column in the table provides a verbose (descriptive) name for the signal.
- Pin Name: The Pin Name column in the table identifies the name of the package pin (at power on reset) on which the signal is located (if a single function pin) or is multiplexed (if a general-purpose I/O pin).

Table 11. ADSP-CM407F/ADSP-CM408F 176-Lead LQFP Signal Descriptions

| SignalName   | Description                                                                                                  | Port      | PinName    |
|--------------|--------------------------------------------------------------------------------------------------------------|-----------|------------|
| ADC0_VIN00   | Channel 0 Single-Ended Analog Input for ADC0                                                                 | Not Muxed | ADC0_VIN00 |
| ADC0_VIN01   | Channel 1 Single-Ended Analog Input for ADC0                                                                 | Not Muxed | ADC0_VIN01 |
| ADC0_VIN02   | Channel 2 Single-Ended Analog Input for ADC0                                                                 | Not Muxed | ADC0_VIN02 |
| ADC0_VIN03   | Channel 3 Single-Ended Analog Input for ADC0                                                                 | Not Muxed | ADC0_VIN03 |
| ADC0_VIN04   | Channel 4 Single-Ended Analog Input for ADC0                                                                 | Not Muxed | ADC0_VIN04 |
| ADC0_VIN05   | Channel 5 Single-Ended Analog Input for ADC0                                                                 | Not Muxed | ADC0_VIN05 |
| ADC0_VIN06   | Channel 6 Single-Ended Analog Input for ADC0                                                                 | Not Muxed | ADC0_VIN06 |
| ADC0_VIN07   | Channel 7 Single-Ended Analog Input for ADC0                                                                 | Not Muxed | ADC0_VIN07 |
| ADC1_VIN00   | Channel 0 Single-Ended Analog Input for ADC1                                                                 | Not Muxed | ADC1_VIN00 |
| ADC1_VIN01   | Channel 1 Single-Ended Analog Input for ADC1                                                                 | Not Muxed | ADC1_VIN01 |
| ADC1_VIN02   | Channel 2 Single-Ended Analog Input for ADC1                                                                 | Not Muxed | ADC1_VIN02 |
| ADC1_VIN03   | Channel 3 Single-Ended Analog Input for ADC1                                                                 | Not Muxed | ADC1_VIN03 |
| ADC1_VIN04   | Channel 4 Single-Ended Analog Input for ADC1                                                                 | Not Muxed | ADC1_VIN04 |
| ADC1_VIN05   | Channel 5 Single-Ended Analog Input for ADC1                                                                 | Not Muxed | ADC1_VIN05 |
| ADC1_VIN06   | Channel 6 Single-Ended Analog Input for ADC1                                                                 | Not Muxed | ADC1_VIN06 |
| ADC1_VIN07   | Channel 7 Single-Ended Analog Input for ADC1                                                                 | Not Muxed | ADC1_VIN07 |
| BYP_A0       | On-chipAnalogPowerRegulationBypassFilterNodeforADC0(see recommended bypass - Figure 4)                       | Not Muxed | BYP_A0     |
| BYP_A1       | On-chipAnalogPowerRegulationBypassFilterNodeforADC1(see recommended bypass - Figure 4)                       | Not Muxed | BYP_A1     |
| BYP_D0       | On-chip Digital Power Regulation Bypass Filter Node for Analog Subsystem (see recommended bypass - Figure 4) | Not Muxed | BYP_D0     |
| CAN0_RX      | CAN0 Receive                                                                                                 | B         | PB_15      |
| CAN0_TX      | CAN0 Transmit                                                                                                | C         | PC_00      |
| CAN1_RX      | CAN1 Receive                                                                                                 | B         | PB_10      |
| CAN1_TX      | CAN1 Transmit                                                                                                | B         | PB_11      |
| CNT0_DG      | CNT0 Count Down and Gate                                                                                     | B         | PB_02      |
| CNT0_OUTA    | CNT0 Output Divider A                                                                                        | B         | PB_13      |
| CNT0_OUTA    | CNT0 Output Divider A                                                                                        | F         | PF_00      |
| CNT0_OUTB    | CNT0 Output Divider B                                                                                        | B         | PB_14      |
| CNT0_OUTB    | CNT0 Output Divider B                                                                                        | F         | PF_01      |
| CNT0_UD      | CNT0 Count Up and Direction                                                                                  | B         | PB_01      |
| CNT0_ZM      | CNT0 Count Zero Marker                                                                                       | B         | PB_00      |
| CNT1_DG      | CNT1 Count Down and Gate                                                                                     | B         | PB_05      |
| CNT1_OUTA    | CNT1 Output Divider A                                                                                        | E         | PE_14      |
| CNT1_OUTB    | CNT1 Output Divider B                                                                                        | E         | PE_15      |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 11. ADSP-CM407F/ADSP-CM408F 176-Lead LQFP Signal Descriptions (Continued)

| SignalName    | Description                                                           | Port         | PinName       |
|---------------|-----------------------------------------------------------------------|--------------|---------------|
| CNT1_UD       | CNT1 Count Up and Direction                                           | B            | PB_04         |
| CNT1_ZM       | CNT1 Count Zero Marker                                                | B            | PB_03         |
| CNT2_DG       | CNT2 Count Down and Gate                                              | E            | PE_10         |
| CNT2_UD       | CNT2 Count Up and Direction                                           | E            | PE_09         |
| CNT2_ZM       | CNT2 Count Zero Marker                                                | E            | PE_08         |
| CNT3_DG       | CNT3 Count Down and Gate                                              | E            | PE_13         |
| CNT3_UD       | CNT3 Count Up and Direction                                           | E            | PE_12         |
| CNT3_ZM       | CNT3 Count Zero Marker                                                | E            | PE_11         |
| CPTMR0_IN0    | CPTMR0 Capture Timer0 Input 0                                         | B            | PB_07         |
| CPTMR0_IN1    | CPTMR0 Capture Timer0 Input 1                                         | B            | PB_08         |
| CPTMR0_IN2    | CPTMR0 Capture Timer0 Input 2                                         | B            | PB_09         |
| ETH0_CRS      | EMAC0 Carrier Sense/RMII Receive Data Valid                           | E            | PE_09         |
| ETH0_MDC      | EMAC0 Management Channel Clock                                        | E            | PE_11         |
| ETH0_MDIO     | EMAC0 Management Channel Serial Data                                  | E            | PE_10         |
| ETH0_PTPAUXIN | EMAC0 PTP Auxiliary Trigger Input                                     | E            | PE_07         |
| ETH0_PTPCLKIN | EMAC0 PTP Clock Input                                                 | E            | PE_06         |
| ETH0_PTPPPS   | EMAC0 PTP Pulse-Per-Second Output                                     | E            | PE_08         |
| ETH0_REFCLK   | EMAC0 Reference Clock                                                 | E            | PE_15         |
| ETH0_RXD0     | EMAC0 Receive Data 0                                                  | F            | PF_00         |
| ETH0_RXD1     | EMAC0 Receive Data 1                                                  | F            | PF_01         |
| ETH0_TXD0     | EMAC0 Transmit Data 0                                                 | E            | PE_12         |
| ETH0_TXD1     | EMAC0 Transmit Data 1                                                 | E            | PE_13         |
| ETH0_TXEN     | EMAC0 Transmit Enable                                                 | E            | PE_14         |
| GND           | Digital Ground                                                        | Not Muxed    | GND           |
| GND_ANA0      | Analog Ground return for VDD_ANA0 (see recommended bypass - Figure 4) | Not Muxed    | GND_ANA0      |
| GND_ANA1      | Analog Ground return for VDD_ANA1 (see recommended bypass - Figure 4) | Not Muxed    | GND_ANA1      |
| GND_ANA2      | Analog Ground (see recommended bypass - Figure 4)                     | Not Muxed    | GND_ANA2      |
| GND_ANA3      | Analog Ground (see recommended bypass - Figure 4)                     | Not Muxed    | GND_ANA3      |
| GND_VREF0     | Groundreturnfor VREF0(seerecommendedbypassfilter - Figure             | 4) Not Muxed | GND_VREF0     |
| GND_VREF1     | Groundreturnfor VREF1(seerecommendedbypassfilter - Figure 4)          | Not Muxed    | GND_VREF1     |
| JTG_TCK/SWCLK | JTAG Clock/Serial Wire Clock                                          | Not Muxed    | JTG_TCK/SWCLK |
| JTG_TDI       | JTAG Serial Data In                                                   | Not Muxed    | JTG_TDI       |
| JTG_TDO/SWO   | JTAG Serial Data Out/Serial Wire Trace Output                         | Not Muxed    | JTG_TDO/SWO   |
| JTG_TMS/SWDIO | JTAG Mode Select/Serial Wire Debug Data I/O                           | Not Muxed    | JTG_TMS/SWDIO |
| JTG_TRST      | JTAG Reset                                                            | Not Muxed    | JTG_TRST      |
| PA_00-PA_15   | Port A Positions 0 - 15                                               | A            | PA_00 - PA_15 |
| PB_00-PB_15   | Port B Positions 0 - 15                                               | B            | PB_00 - PB_15 |
| PC_00-PC_15   | Port C Positions 0 - 15                                               | C            | PC_00 - PC_15 |
| PD_00-PD_15   | Port DPositions 0 - 15                                                | D            | PD_00 - PD_15 |
| PE_00-PE_15   | Port E Positions 0 - 15                                               | E            | PE_00 - PE_15 |
| PF_00-PF_10   | Port F Positions 0 - 10                                               | F            | PF_00 - PF_10 |
| PWM0_AH       | PWM0Channel A High Side                                               | A            | PA_02         |
| PWM0_AL       | PWM0Channel A Low Side                                                | A            | PA_03         |
| PWM0_BH       | PWM0Channel B High Side                                               | A            | PA_04         |
| PWM0_BL       | PWM0Channel B Low Side                                                | A            | PA_05         |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 11. ADSP-CM407F/ADSP-CM408F 176-Lead LQFP Signal Descriptions (Continued)

| SignalName        | Description                                                                        | Port      | PinName     |
|-------------------|------------------------------------------------------------------------------------|-----------|-------------|
| PWM0_CH           | PWM0Channel C High Side                                                            | A         | PA_06       |
| PWM0_CL           | PWM0Channel C Low Side                                                             | A         | PA_07       |
| PWM0_DH           | PWM0Channel DHigh Side                                                             | B         | PB_00       |
| PWM0_DL           | PWM0Channel DLowSide                                                               | B         | PB_01       |
| PWM0_SYNC         | PWM0Sync                                                                           | A         | PA_00       |
| PWM0_TRIP0        | PWM0Trip Input 0                                                                   | A         | PA_01       |
| PWM1_AH           | PWM1Channel A High Side                                                            | A         | PA_12       |
| PWM1_AL           | PWM1Channel A Low Side                                                             | A         | PA_13       |
| PWM1_BH           | PWM1Channel B High Side                                                            | A         | PA_14       |
| PWM1_BL           | PWM1Channel B Low Side                                                             | A         | PA_15       |
| PWM1_CH           | PWM1Channel C High Side                                                            | A         | PA_08       |
| PWM1_CL           | PWM1Channel C Low Side                                                             | A         | PA_09       |
| PWM1_DH           | PWM1Channel DHigh Side                                                             | B         | PB_02       |
| PWM1_DL           | PWM1Channel DLowSide                                                               | B         | PB_03       |
| PWM1_SYNC         | PWM1Sync                                                                           | A         | PA_10       |
| PWM1_TRIP0        | PWM1Trip Input 0                                                                   | A         | PA_11       |
| PWM2_AH           | PWM2Channel A High Side                                                            | B         | PB_06       |
| PWM2_AL           | PWM2Channel A Low Side                                                             | B         | PB_07       |
| PWM2_BH           | PWM2Channel B High Side                                                            | B         | PB_08       |
| PWM2_BL           | PWM2Channel B Low Side                                                             | B         | PB_09       |
| PWM2_CH           | PWM2Channel C High Side                                                            | C         | PC_03       |
| PWM2_CL           | PWM2Channel C Low Side                                                             | C         | PC_04       |
| PWM2_DH           | PWM2Channel DHigh Side                                                             | C         | PC_05       |
| PWM2_DL           | PWM2Channel DLowSide                                                               | C         | PC_06       |
| PWM2_SYNC         | PWM2Sync                                                                           | B         | PB_04       |
| PWM2_TRIP0        | PWM2Trip Input 0                                                                   | B         | PB_05       |
| REFCAP            | Output of BandGap Generator Filter Node (see recommended bypass filter - Figure 4) | Not Muxed | REFCAP      |
| SINC0_CLK0        | SINC0 Clock 0                                                                      | B         | PB_10       |
| SINC0_CLK1        | SINC0 Clock 1                                                                      | C         | PC_07       |
| SINC0_D0          | SINC0 Data 0                                                                       | B         | PB_11       |
| SINC0_D1          | SINC0 Data 1                                                                       | B         | PB_12       |
| SINC0_D2          | SINC0 Data 2                                                                       | B         | PB_13       |
| SINC0_D3          | SINC0 Data 3                                                                       | B         | PB_14       |
| SMC0_A01          | SMC0 Address 1                                                                     | B         | PB_13       |
| SMC0_A01          | SMC0 Address 1                                                                     | F         | PF_05       |
| SMC0_A02          | SMC0 Address 2                                                                     | B         | PB_14       |
| SMC0_A02          | SMC0 Address 2                                                                     | F         | PF_06       |
| SMC0_A03          | SMC0 Address 3                                                                     | B         | PB_15       |
| SMC0_A03          | SMC0 Address 3                                                                     | F         | PF_07       |
| SMC0_A04          | SMC0 Address 4                                                                     | C         | PC_00       |
| SMC0_A04          | SMC0 Address 4                                                                     | F         | PF_08       |
| SMC0_A05          | SMC0 Address 5                                                                     | C         | PC_01       |
| SMC0_A05          | SMC0 Address 5                                                                     | F         | PF_09       |
| SMC0_A06 SMC0_A07 | SMC0 Address 6 SMC0 Address 7                                                      | D D       | PD_08 PD_09 |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 11. ADSP-CM407F/ADSP-CM408F 176-Lead LQFP Signal Descriptions (Continued)

| SignalName   | Description             | Port      | PinName   |
|--------------|-------------------------|-----------|-----------|
| SMC0_A08     | SMC0 Address 8          | D         | PD_10     |
| SMC0_A09     | SMC0 Address 9          | D         | PD_11     |
| SMC0_A10     | SMC0 Address 10         | D         | PD_12     |
| SMC0_A11     | SMC0 Address 11         | D         | PD_13     |
| SMC0_A12     | SMC0 Address 12         | D         | PD_14     |
| SMC0_A13     | SMC0 Address 13         | D         | PD_15     |
| SMC0_A14     | SMC0 Address 14         | E         | PE_00     |
| SMC0_A15     | SMC0 Address 15         | E         | PE_01     |
| SMC0_A16     | SMC0 Address 16         | E         | PE_02     |
| SMC0_A17     | SMC0 Address 17         | E         | PE_03     |
| SMC0_A18     | SMC0 Address 18         | E         | PE_04     |
| SMC0_A19     | SMC0 Address 19         | E         | PE_05     |
| SMC0_A20     | SMC0 Address 20         | E         | PE_06     |
| SMC0_A21     | SMC0 Address 21         | E         | PE_07     |
| SMC0_A22     | SMC0 Address 22         | E         | PE_08     |
| SMC0_A23     | SMC0 Address 23         | E         | PE_09     |
| SMC0_A24     | SMC0 Address 24         | E         | PE_11     |
| SMC0_ABE0    | SMC0 Byte Enable 0      | F         | PF_10     |
| SMC0_ABE1    | SMC0 Byte Enable 1      | F         | PF_02     |
| SMC0_AMS0    | SMC0 Memory Select 0    | B         | PB_11     |
| SMC0_AMS0    | SMC0 Memory Select 0    | Not Muxed | SMC0_AMS0 |
| SMC0_AMS1    | SMC0 Memory Select 1    | E         | PE_10     |
| SMC0_AMS2    | SMC0 Memory Select 2    | A         | PA_07     |
| SMC0_AMS3    | SMC0 Memory Select 3    | C         | PC_11     |
| SMC0_AOE     | SMC0 Output Enable      | B         | PB_12     |
| SMC0_AOE     | SMC0 Output Enable      | F         | PF_03     |
| SMC0_ARDY    | SMC0 Asynchronous Ready | B         | PB_08     |
| SMC0_ARDY    | SMC0 Asynchronous Ready | F         | PF_04     |
| SMC0_ARE     | SMC0 Read Enable        | B         | PB_09     |
| SMC0_ARE     | SMC0 Read Enable        | Not Muxed | SMC0_ARE  |
| SMC0_AWE     | SMC0 Write Enable       | B         | PB_10     |
| SMC0_AWE     | SMC0 Write Enable       | Not Muxed | SMC0_AWE  |
| SMC0_D00     | SMC0 Data 0             | A         | PA_08     |
| SMC0_D00     | SMC0 Data 0             | C         | PC_08     |
| SMC0_D01     | SMC0 Data 1             | A         | PA_09     |
| SMC0_D01     | SMC0 Data 1             | C         | PC_09     |
| SMC0_D02     | SMC0 Data 2             | A         | PA_10     |
| SMC0_D02     | SMC0 Data 2             | C         | PC_10     |
| SMC0_D03     | SMC0 Data 3             | A         | PA_11     |
| SMC0_D03     | SMC0 Data 3             | C         | PC_11     |
| SMC0_D04     | SMC0 Data 4             | A         | PA_12     |
| SMC0_D04     | SMC0 Data 4             | C         | PC_12     |
| SMC0_D05     | SMC0 Data 5             | A         | PA_13     |
| SMC0_D05     | SMC0 Data 5             | C         | PC_13     |
| SMC0_D06     | SMC0 Data 6             | A         | PA_14     |
| SMC0_D06     | SMC0 Data 6             | C         | PC_14     |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 11. ADSP-CM407F/ADSP-CM408F 176-Lead LQFP Signal Descriptions (Continued)

| SignalName   | Description                    | Port   | PinName   |
|--------------|--------------------------------|--------|-----------|
| SMC0_D07     | SMC0 Data 7                    | A      | PA_15     |
| SMC0_D07     | SMC0 Data 7                    | C      | PC_15     |
| SMC0_D08     | SMC0 Data 8                    | B      | PB_00     |
| SMC0_D08     | SMC0 Data 8                    | D      | PD_00     |
| SMC0_D09     | SMC0 Data 9                    | B      | PB_01     |
| SMC0_D09     | SMC0 Data 9                    | D      | PD_01     |
| SMC0_D10     | SMC0 Data 10                   | B      | PB_02     |
| SMC0_D10     | SMC0 Data 10                   | D      | PD_02     |
| SMC0_D11     | SMC0 Data 11                   | B      | PB_03     |
| SMC0_D11     | SMC0 Data 11                   | D      | PD_03     |
| SMC0_D12     | SMC0 Data 12                   | B      | PB_04     |
| SMC0_D12     | SMC0 Data 12                   | D      | PD_04     |
| SMC0_D13     | SMC0 Data 13                   | B      | PB_05     |
| SMC0_D13     | SMC0 Data 13                   | D      | PD_05     |
| SMC0_D14     | SMC0 Data 14                   | B      | PB_06     |
| SMC0_D14     | SMC0 Data 14                   | D      | PD_06     |
| SMC0_D15     | SMC0 Data 15                   | B      | PB_07     |
| SMC0_D15     | SMC0 Data 15                   | D      | PD_07     |
| SPI0_CLK     | SPI0 Clock                     | C      | PC_03     |
| SPI0_D2      | SPI0 Data 2                    | B      | PB_10     |
| SPI0_D3      | SPI0 Data 3                    | B      | PB_11     |
| SPI0_MISO    | SPI0 Master In, Slave Out      | C      | PC_04     |
| SPI0_MOSI    | SPI0 Master Out, Slave In      | C      | PC_05     |
| SPI0_RDY     | SPI0 Ready                     | C      | PC_02     |
| SPI0_SEL1    | SPI0 Slave Select Output 1     | C      | PC_06     |
| SPI0_SEL2    | SPI0 Slave Select Output 2     | B      | PB_13     |
| SPI0_SEL3    | SPI0 Slave Select Output 3     | B      | PB_14     |
| SPI0_SS      | SPI0 Slave Select Input        | B      | PB_14     |
| SPI1_CLK     | SPI1 Clock                     | C      | PC_12     |
| SPI1_MISO    | SPI1 Master In, Slave Out      | C      | PC_13     |
| SPI1_MOSI    | SPI1 Master Out, Slave In      | C      | PC_14     |
| SPI1_SEL1    | SPI1 Slave Select Output 1     | C      | PC_15     |
| SPI1_SEL2    | SPI1 Slave Select Output 2     | B      | PB_06     |
| SPI1_SEL3    | SPI1 Slave Select Output 3     | B      | PB_07     |
| SPI1_SS      | SPI1 Slave Select Input        | C      | PC_15     |
| SPT0_ACLK    | SPORT0 Channel A Clock         | B      | PB_00     |
| SPT0_ACLK    | SPORT0 Channel A Clock         | E      | PE_00     |
| SPT0_AD0     | SPORT0 Channel A Data 0        | B      | PB_02     |
| SPT0_AD0     | SPORT0 Channel A Data 0        | E      | PE_02     |
| SPT0_AD1     | SPORT0 Channel A Data 1        | B      | PB_03     |
| SPT0_AD1     | SPORT0 Channel A Data 1        | E      | PE_03     |
| SPT0_AFS     | SPORT0 Channel A Frame Sync    | B      | PB_01     |
| SPT0_AFS     | SPORT0 Channel A Frame Sync    | E      | PE_01     |
| SPT0_ATDV    | SPORT0 Channel A Transmit Data | B      | PB_04     |
| SPT0_BD0     | SPORT0 Channel B Data 0        | C      | PC_10     |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 11. ADSP-CM407F/ADSP-CM408F 176-Lead LQFP Signal Descriptions (Continued)

| SignalName   | Description                          | Port      | PinName    |
|--------------|--------------------------------------|-----------|------------|
| SPT0_BD1     | SPORT0 Channel B Data 1              | C         | PC_11      |
| SPT0_BFS     | SPORT0 Channel B Frame Sync          | C         | PC_09      |
| SPT0_BTDV    | SPORT0 Channel B Transmit Data Valid | B         | PB_12      |
| SPT1_ACLK    | SPORT1 Channel A Clock               | A         | PA_00      |
| SPT1_AD0     | SPORT1 Channel A Data 0              | A         | PA_02      |
| SPT1_AD1     | SPORT1 Channel A Data 1              | A         | PA_03      |
| SPT1_AFS     | SPORT1 Channel A Frame Sync          | A         | PA_01      |
| SPT1_ATDV    | SPORT1 Channel A Transmit Data Valid | B         | PB_15      |
| SPT1_BCLK    | SPORT1 Channel B Clock               | A         | PA_04      |
| SPT1_BD0     | SPORT1 Channel B Data 0              | A         | PA_06      |
| SPT1_BD1     | SPORT1 Channel B Data 1              | A         | PA_07      |
| SPT1_BFS     | SPORT1 Channel B Frame Sync          | A         | PA_05      |
| SPT1_BTDV    | SPORT1 Channel B Transmit Data Valid | C         | PC_00      |
| SYS_BMODE0   | Boot Mode Control 0                  | Not Muxed | SYS_BMODE0 |
| SYS_BMODE1   | Boot Mode Control 1                  | Not Muxed | SYS_BMODE1 |
| SYS_CLKIN    | Clock/Crystal Input                  | Not Muxed | SYS_CLKIN  |
| SYS_CLKOUT   | Processor Clock Output               | Not Muxed | SYS_CLKOUT |
| SYS_DSWAKE0  | Deep Sleep Wake-up 0                 | C         | PC_06      |
| SYS_DSWAKE1  | Deep Sleep Wake-up 1                 | C         | PC_07      |
| SYS_DSWAKE2  | Deep Sleep Wake-up 2                 | B         | PB_14      |
| SYS_DSWAKE3  | Deep Sleep Wake-up 3                 | B         | PB_13      |
| SYS_FAULT    | System Fault Output                  | Not Muxed | SYS_FAULT  |
| SYS_HWRST    | Processor Hardware Reset Control     | Not Muxed | SYS_HWRST  |
| SYS_NMI      | Nonmaskable Interrupt                | Not Muxed | SYS_NMI    |
| SYS_RESOUT   | Reset Output                         | Not Muxed | SYS_RESOUT |
| SYS_XTAL     | Crystal Output                       | Not Muxed | SYS_XTAL   |
| TM0_ACI1     | TIMER0 Alternate Capture Input 1     | B         | PB_10      |
| TM0_ACI1     | TIMER0 Alternate Capture Input 1     | D         | PD_13      |
| TM0_ACI2     | TIMER0 Alternate Capture Input 2     | B         | PB_08      |
| TM0_ACI2     | TIMER0 Alternate Capture Input 2     | D         | PD_12      |
| TM0_ACI3     | TIMER0 Alternate Capture Input 3     | B         | PB_12      |
| TM0_ACI3     | TIMER0 Alternate Capture Input 3     | D         | PD_11      |
| TM0_ACI4     | TIMER0 Alternate Capture Input 4     | B         | PB_15      |
| TM0_ACI4     | TIMER0 Alternate Capture Input 4     | D         | PD_10      |
| TM0_ACI5     | TIMER0 Alternate Capture Input 5     | C         | PC_01      |
| TM0_ACI5     | TIMER0 Alternate Capture Input 5     | D         | PD_09      |
| TM0_ACLK0    | TIMER0 Alternate Clock 0             | B         | PB_13      |
| TM0_ACLK1    | TIMER0 Alternate Clock 1             | B         | PB_11      |
| TM0_ACLK2    | TIMER0 Alternate Clock 2             | A         | PA_11      |
| TM0_ACLK3    | TIMER0 Alternate Clock 3             | A         | PA_10      |
| TM0_ACLK4    | TIMER0 Alternate Clock 4             | A         | PA_09      |
| TM0_ACLK5    | TIMER0 Alternate Clock 5             | A         | PA_08      |
| TM0_CLK      | TIMER0 Clock                         | B         | PB_06      |
| TM0_CLK      | TIMER0 Clock                         | D         | PD_08      |
| TM0_TMR0     | TIMER0 Timer 0                       | B         | PB_07      |
| TM0_TMR0     | TIMER0 Timer 0                       | D         | PD_00      |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 11. ADSP-CM407F/ADSP-CM408F 176-Lead LQFP Signal Descriptions (Continued)

| SignalName   | Description                                               | Port      | PinName   |
|--------------|-----------------------------------------------------------|-----------|-----------|
| TM0_TMR1     | TIMER0 Timer 1                                            | B         | PB_08     |
| TM0_TMR1     | TIMER0 Timer 1                                            | D         | PD_01     |
| TM0_TMR2     | TIMER0 Timer 2                                            | B         | PB_09     |
| TM0_TMR2     | TIMER0 Timer 2                                            | D         | PD_02     |
| TM0_TMR3     | TIMER0 Timer 3                                            | A         | PA_15     |
| TM0_TMR3     | TIMER0 Timer 3                                            | D         | PD_03     |
| TM0_TMR4     | TIMER0 Timer 4                                            | A         | PA_12     |
| TM0_TMR4     | TIMER0 Timer 4                                            | D         | PD_04     |
| TM0_TMR5     | TIMER0 Timer 5                                            | A         | PA_13     |
| TM0_TMR5     | TIMER0 Timer 5                                            | D         | PD_05     |
| TM0_TMR6     | TIMER0 Timer 6                                            | A         | PA_14     |
| TM0_TMR6     | TIMER0 Timer 6                                            | D         | PD_06     |
| TM0_TMR7     | TIMER0 Timer 7                                            | B         | PB_05     |
| TM0_TMR7     | TIMER0 Timer 7                                            | D         | PD_07     |
| TRACE_CLK    | Embedded Trace Module Clock                               | B         | PB_00     |
| TRACE_D00    | Embedded Trace Module Data 0                              | B         | PB_01     |
| TRACE_D01    | Embedded Trace Module Data 1                              | B         | PB_02     |
| TRACE_D02    | Embedded Trace Module Data 2                              | B         | PB_03     |
| TRACE_D03    | Embedded Trace Module Data 3                              | C         | PC_02     |
| TRACE_D03    | Embedded Trace Module Data 3                              | F         | PF_02     |
| TWI0_SCL     | TWI0 Serial Clock                                         | Not Muxed | TWI0_SCL  |
| TWI0_SDA     | TWI0 Serial Data                                          | Not Muxed | TWI0_SDA  |
| UART0_CTS    | UART0 Clear to Send                                       | B         | PB_05     |
| UART0_RTS    | UART0 Request to Send                                     | B         | PB_04     |
| UART0_RX     | UART0 Receive                                             | C         | PC_01     |
| UART0_TX     | UART0 Transmit                                            | C         | PC_02     |
| UART1_CTS    | UART1 Clear to Send                                       | A         | PA_11     |
| UART1_RTS    | UART1 Request to Send                                     | C         | PC_07     |
| UART1_RX     | UART1 Receive                                             | B         | PB_08     |
| UART1_RX     | UART1 Receive                                             | B         | PB_15     |
| UART1_TX     | UART1 Transmit                                            | B         | PB_09     |
| UART1_TX     | UART1 Transmit                                            | C         | PC_00     |
| UART2_RX     | UART2 Receive                                             | B         | PB_12     |
| UART2_TX     | UART2 Transmit                                            | C         | PC_07     |
| USB0_DM      | USB0 Data -                                               | Not Muxed | USB0_DM   |
| USB0_DP      | USB0 Data +                                               | Not Muxed | USB0_DP   |
| USB0_ID      | USB0 OTG ID                                               | Not Muxed | USB0_ID   |
| USB0_VBC     | USB0 VBUS Control                                         | F         | PF_02     |
| USB0_VBUS    | USB0 Bus Voltage                                          | Not Muxed | USB0_VBUS |
| VDD_ANA0     | Analog Voltage Domain (see recommended bypass - Figure 4) | Not Muxed | VDD_ANA0  |
| VDD_ANA1     | Analog Voltage Domain (see recommended bypass - Figure 4) | Not Muxed | VDD_ANA1  |
| VDD_EXT      | External Voltage Domain                                   | Not Muxed | VDD_EXT   |
| VDD_INT      | Internal Voltage Domain                                   | Not Muxed | VDD_INT   |
| VDD_VREG     | VREG Supply Voltage                                       | Not Muxed | VDD_VREG  |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 11. ADSP-CM407F/ADSP-CM408F 176-Lead LQFP Signal Descriptions (Continued)

| SignalName   | Description                                                                                     | Port      | PinName   |
|--------------|-------------------------------------------------------------------------------------------------|-----------|-----------|
| VREF0        | Voltage Reference for ADC0. Default configuration is Output (see recommended bypass - Figure 4) | Not Muxed | VREF0     |
| VREF1        | Voltage Reference for ADC1. Default configuration is Output (see recommended bypass - Figure 4) | Not Muxed | VREF1     |
| VREG_BASE    | Voltage Regulator Base Node                                                                     | Not Muxed | VREG_BASE |

## ADSP-CM403F/CM407F/CM408F/CM409F

## ADSP-CM407F/ADSP-CM408F GPIO MULTIPLEXING FOR 176-LEAD LQFP

Table 12 through Table 17 identify the pin functions that are multiplexed on the general-purpose I/O pins of the 176-lead LQFP package.

Table 12. Signal Multiplexing for Port A (176-Lead LQFP)

| SignalName   | Multiplexed Function 0   | Multiplexed Function 1   | Multiplexed Function 2   | Multiplexed Function 3   | Multiplexed Function Input Tap   |
|--------------|--------------------------|--------------------------|--------------------------|--------------------------|----------------------------------|
| PA_00        | PWM0_SYNC                |                          | SPT1_ACLK                |                          |                                  |
| PA_01        | PWM0_TRIP0               |                          | SPT1_AFS                 |                          |                                  |
| PA_02        | PWM0_AH                  |                          | SPT1_AD0                 |                          |                                  |
| PA_03        | PWM0_AL                  |                          | SPT1_AD1                 |                          |                                  |
| PA_04        | PWM0_BH                  |                          | SPT1_BCLK                |                          |                                  |
| PA_05        | PWM0_BL                  |                          | SPT1_BFS                 |                          |                                  |
| PA_06        | PWM0_CH                  |                          | SPT1_BD0                 |                          |                                  |
| PA_07        | PWM0_CL                  | SMC0_AMS2                | SPT1_BD1                 |                          |                                  |
| PA_08        | PWM1_CH                  |                          | SMC0_D00                 |                          | TM0_ACLK5                        |
| PA_09        | PWM1_CL                  |                          | SMC0_D01                 |                          | TM0_ACLK4                        |
| PA_10        | PWM1_SYNC                |                          | SMC0_D02                 |                          | TM0_ACLK3                        |
| PA_11        | PWM1_TRIP0               | UART1_CTS                | SMC0_D03                 |                          | TM0_ACLK2                        |
| PA_12        | PWM1_AH                  | TM0_TMR4                 | SMC0_D04                 |                          |                                  |
| PA_13        | PWM1_AL                  | TM0_TMR5                 | SMC0_D05                 |                          |                                  |
| PA_14        | PWM1_BH                  | TM0_TMR6                 | SMC0_D06                 |                          |                                  |
| PA_15        | PWM1_BL                  | TM0_TMR3                 | SMC0_D07                 |                          |                                  |

Table 13. Signal Multiplexing for Port B (176-Lead LQFP)

| SignalName   | Multiplexed Function 0   | Multiplexed Function 1   | Multiplexed Function 2   | Multiplexed Function 3   | Multiplexed Function Input Tap   |
|--------------|--------------------------|--------------------------|--------------------------|--------------------------|----------------------------------|
| PB_00        | PWM0_DH                  | TRACE_CLK                | SPT0_ACLK                | SMC0_D08                 | CNT0_ZM                          |
| PB_01        | PWM0_DL                  | TRACE_D00                | SPT0_AFS                 | SMC0_D09                 | CNT0_UD                          |
| PB_02        | PWM1_DH                  | TRACE_D01                | SPT0_AD0                 | SMC0_D10                 | CNT0_DG                          |
| PB_03        | PWM1_DL                  | TRACE_D02                | SPT0_AD1                 | SMC0_D11                 | CNT1_ZM                          |
| PB_04        | PWM2_SYNC                | UART0_RTS                | SPT0_ATDV                | SMC0_D12                 | CNT1_UD                          |
| PB_05        | PWM2_TRIP0               | UART0_CTS                | TM0_TMR7                 | SMC0_D13                 | CNT1_DG                          |
| PB_06        | PWM2_AH                  | TM0_CLK                  | SPI1_SEL2                | SMC0_D14                 |                                  |
| PB_07        | PWM2_AL                  | TM0_TMR0                 | SPI1_SEL3                | SMC0_D15                 | CPTMR0_IN0                       |
| PB_08        | PWM2_BH                  | TM0_TMR1                 | UART1_RX                 | SMC0_ARDY                | TM0_ACI2/ CPTMR0_IN1             |
| PB_09        | PWM2_BL                  | TM0_TMR2                 | UART1_TX                 | SMC0_ARE                 | CPTMR0_IN2                       |
| PB_10        | SINC0_CLK0               | SPI0_D2                  | CAN1_RX                  | SMC0_AWE                 | TM0_ACI1                         |
| PB_11        | SINC0_D0                 | SPI0_D3                  | CAN1_TX                  | SMC0_AMS0                | TM0_ACLK1                        |
| PB_12        | SINC0_D1                 | SPT0_BTDV                | UART2_RX                 | SMC0_AOE                 | TM0_ACI3                         |
| PB_13        | SINC0_D2                 | CNT0_OUTA                | SPI0_SEL2                | SMC0_A01                 | TM0_ACLK0/ SYS_DSWAKE3           |
| PB_14        | SINC0_D3                 | CNT0_OUTB                | SPI0_SEL3                | SMC0_A02                 | SPI0_SS/ SYS_DSWAKE2             |
| PB_15        | CAN0_RX                  | SPT1_ATDV                | UART1_RX                 | SMC0_A03                 | TM0_ACI4                         |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 14. Signal Multiplexing for Port C (176-Lead LQFP)

| SignalName   | Multiplexed Function 0   | Multiplexed Function 1   | Multiplexed Function 2   | Multiplexed Function 3   | Multiplexed Function Input Tap   |
|--------------|--------------------------|--------------------------|--------------------------|--------------------------|----------------------------------|
| PC_00        | CAN0_TX                  | SPT1_BTDV                | UART1_TX                 | SMC0_A04                 | TM0_ACI5                         |
| PC_01        | UART0_RX                 |                          |                          | SMC0_A05                 |                                  |
| PC_02        | UART0_TX                 | TRACE_D03                | SPI0_RDY                 |                          |                                  |
| PC_03        | SPI0_CLK                 | PWM2_CH                  |                          |                          |                                  |
| PC_04        | SPI0_MISO                | PWM2_CL                  |                          |                          |                                  |
| PC_05        | SPI0_MOSI                | PWM2_DH                  |                          |                          |                                  |
| PC_06        | SPI0_SEL1                | PWM2_DL                  |                          |                          | SYS_DSWAKE0                      |
| PC_07        | SINC0_CLK1               | UART2_TX                 | UART1_RTS                |                          | SYS_DSWAKE1                      |
| PC_08        |                          | SPT0_BCLK                | SMC0_D00                 |                          |                                  |
| PC_09        |                          | SPT0_BFS                 | SMC0_D01                 |                          |                                  |
| PC_10        |                          | SPT0_BD0                 | SMC0_D02                 |                          |                                  |
| PC_11        | SMC0_AMS3                | SPT0_BD1                 | SMC0_D03                 |                          |                                  |
| PC_12        |                          | SPI1_CLK                 | SMC0_D04                 |                          |                                  |
| PC_13        |                          | SPI1_MISO                | SMC0_D05                 |                          |                                  |
| PC_14        |                          | SPI1_MOSI                | SMC0_D06                 |                          |                                  |
| PC_15        |                          | SPI1_SEL1                | SMC0_D07                 |                          | SPI1_SS                          |

Table 15. Signal Multiplexing for Port D (176-Lead LQFP)

| SignalName   | Multiplexed Function 0   | Multiplexed Function 1   | Multiplexed Function 2   | Multiplexed Function 3   | Multiplexed Function Input Tap   |
|--------------|--------------------------|--------------------------|--------------------------|--------------------------|----------------------------------|
| PD_00        |                          |                          | SMC0_D08                 | TM0_TMR0                 |                                  |
| PD_01        |                          |                          | SMC0_D09                 | TM0_TMR1                 |                                  |
| PD_02        |                          |                          | SMC0_D10                 | TM0_TMR2                 |                                  |
| PD_03        |                          |                          | SMC0_D11                 | TM0_TMR3                 |                                  |
| PD_04        |                          |                          | SMC0_D12                 | TM0_TMR4                 |                                  |
| PD_05        |                          |                          | SMC0_D13                 | TM0_TMR5                 |                                  |
| PD_06        |                          |                          | SMC0_D14                 | TM0_TMR6                 |                                  |
| PD_07        |                          |                          | SMC0_D15                 | TM0_TMR7                 |                                  |
| PD_08        |                          |                          | SMC0_A06                 | TM0_CLK                  |                                  |
| PD_09        |                          |                          | SMC0_A07                 | TM0_ACI5                 |                                  |
| PD_10        |                          |                          | SMC0_A08                 | TM0_ACI4                 |                                  |
| PD_11        |                          |                          | SMC0_A09                 | TM0_ACI3                 |                                  |
| PD_12        |                          |                          | SMC0_A10                 | TM0_ACI2                 |                                  |
| PD_13        |                          |                          | SMC0_A11                 | TM0_ACI1                 |                                  |
| PD_14        |                          |                          | SMC0_A12                 |                          |                                  |
| PD_15        |                          |                          | SMC0_A13                 |                          |                                  |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 16. Signal Multiplexing for Port E (176-Lead LQFP)

| SignalName   | Multiplexed Function 0   | Multiplexed Function 1   | Multiplexed Function 2   | Multiplexed Function 3   | Multiplexed Function Input Tap   |
|--------------|--------------------------|--------------------------|--------------------------|--------------------------|----------------------------------|
| PE_00        |                          |                          | SMC0_A14                 | SPT0_ACLK                |                                  |
| PE_01        |                          |                          | SMC0_A15                 | SPT0_AFS                 |                                  |
| PE_02        |                          |                          | SMC0_A16                 | SPT0_AD0                 |                                  |
| PE_03        |                          |                          | SMC0_A17                 | SPT0_AD1                 |                                  |
| PE_04        |                          |                          | SMC0_A18                 |                          |                                  |
| PE_05        |                          |                          | SMC0_A19                 |                          |                                  |
| PE_06        |                          | ETH0_PTPCLKIN            | SMC0_A20                 |                          |                                  |
| PE_07        |                          | ETH0_PTPAUXIN            | SMC0_A21                 |                          |                                  |
| PE_08        |                          | ETH0_PTPPPS              | SMC0_A22                 |                          | CNT2_ZM                          |
| PE_09        |                          | ETH0_CRS                 | SMC0_A23                 |                          | CNT2_UD                          |
| PE_10        |                          | ETH0_MDIO                | SMC0_AMS1                |                          | CNT2_DG                          |
| PE_11        | ETH0_MDC                 |                          | SMC0_A24                 |                          | CNT3_ZM                          |
| PE_12        | ETH0_TXD0                |                          |                          |                          | CNT3_UD                          |
| PE_13        | ETH0_TXD1                |                          |                          |                          | CNT3_DG                          |
| PE_14        | ETH0_TXEN                | CNT1_OUTA                |                          |                          |                                  |
| PE_15        | ETH0_REFCLK              | CNT1_OUTB                |                          |                          |                                  |

Table 17. Signal Multiplexing for Port F (176-Lead LQFP)

| SignalName   | Multiplexed Function 0   | Multiplexed Function 1   | Multiplexed Function 2   | Multiplexed Function 3   | Multiplexed Function Input Tap   |
|--------------|--------------------------|--------------------------|--------------------------|--------------------------|----------------------------------|
| PF_00        | ETH0_RXD0                | CNT0_OUTA                |                          |                          |                                  |
| PF_01        | ETH0_RXD1                | CNT0_OUTB                |                          |                          |                                  |
| PF_02        | USB0_VBC                 | TRACE_D03                | SMC0_ABE1                |                          |                                  |
| PF_03        |                          |                          | SMC0_AOE                 |                          |                                  |
| PF_04        |                          |                          | SMC0_ARDY                |                          |                                  |
| PF_05        |                          |                          | SMC0_A01                 |                          |                                  |
| PF_06        |                          |                          | SMC0_A02                 |                          |                                  |
| PF_07        |                          |                          | SMC0_A03                 |                          |                                  |
| PF_08        |                          |                          | SMC0_A04                 |                          |                                  |
| PF_09        |                          |                          | SMC0_A05                 |                          |                                  |
| PF_10        |                          |                          | SMC0_ABE0                |                          |                                  |

## ADSP-CM403F/CM407F/CM408F/CM409F

## ADSP-CM409F 212-BALL BGA SIGNAL DESCRIPTIONS

The processor's pin definitions are shown in Table 18. The columns in this table provide the following information:

- Signal Name: The Signal Name column in the table includes the signal name for every pin and (where applicable) the GPIO multiplexed pin function for every pin.
- Description: The Description column in the table provides a verbose (descriptive) name for the signal.
- General-Purpose Port: The Port column in the table shows whether or not the signal is multiplexed with other signals on a general-purpose I/O port pin.
- Pin Name: The Pin Name column in the table identifies the name of the package pin (at power on reset) on which the signal is located (if a single function pin) or is multiplexed (if a general-purpose I/O pin).

Table 18. ADSP-CM409F 212-Ball BGA Signal Descriptions

| SignalName   | Description                                                                                                  | Port      | PinName    |
|--------------|--------------------------------------------------------------------------------------------------------------|-----------|------------|
| ADC0_VIN00   | Channel 0 Single-Ended Analog Input for ADC0                                                                 | Not Muxed | ADC0_VIN00 |
| ADC0_VIN01   | Channel 1 Single-Ended Analog Input for ADC0                                                                 | Not Muxed | ADC0_VIN01 |
| ADC0_VIN02   | Channel 2 Single-Ended Analog Input for ADC0                                                                 | Not Muxed | ADC0_VIN02 |
| ADC0_VIN03   | Channel 3 Single-Ended Analog Input for ADC0                                                                 | Not Muxed | ADC0_VIN03 |
| ADC0_VIN04   | Channel 4 Single-Ended Analog Input for ADC0                                                                 | Not Muxed | ADC0_VIN04 |
| ADC0_VIN05   | Channel 5 Single-Ended Analog Input for ADC0                                                                 | Not Muxed | ADC0_VIN05 |
| ADC0_VIN06   | Channel 6 Single-Ended Analog Input for ADC0                                                                 | Not Muxed | ADC0_VIN06 |
| ADC0_VIN07   | Channel 7 Single-Ended Analog Input for ADC0                                                                 | Not Muxed | ADC0_VIN07 |
| ADC0_VIN08   | Channel 8 Single-Ended Analog Input for ADC0                                                                 | Not Muxed | ADC0_VIN08 |
| ADC0_VIN09   | Channel 9 Single-Ended Analog Input for ADC0                                                                 | Not Muxed | ADC0_VIN09 |
| ADC0_VIN10   | Channel 10 Single-Ended Analog Input for ADC0                                                                | Not Muxed | ADC0_VIN10 |
| ADC0_VIN11   | Channel 11 Single-Ended Analog Input for ADC0                                                                | Not Muxed | ADC0_VIN11 |
| ADC1_VIN00   | Channel 0 Single-Ended Analog Input for ADC1                                                                 | Not Muxed | ADC1_VIN00 |
| ADC1_VIN01   | Channel 1 Single-Ended Analog Input for ADC1                                                                 | Not Muxed | ADC1_VIN01 |
| ADC1_VIN02   | Channel 2 Single-Ended Analog Input for ADC1                                                                 | Not Muxed | ADC1_VIN02 |
| ADC1_VIN03   | Channel 3 Single-Ended Analog Input for ADC1                                                                 | Not Muxed | ADC1_VIN03 |
| ADC1_VIN04   | Channel 4 Single-Ended Analog Input for ADC1                                                                 | Not Muxed | ADC1_VIN04 |
| ADC1_VIN05   | Channel 5 Single-Ended Analog Input for ADC1                                                                 | Not Muxed | ADC1_VIN05 |
| ADC1_VIN06   | Channel 6 Single-Ended Analog Input for ADC1                                                                 | Not Muxed | ADC1_VIN06 |
| ADC1_VIN07   | Channel 7 Single-Ended Analog Input for ADC1                                                                 | Not Muxed | ADC1_VIN07 |
| ADC1_VIN08   | Channel 8 Single-Ended Analog Input for ADC1                                                                 | Not Muxed | ADC1_VIN08 |
| ADC1_VIN09   | Channel 9 Single-Ended Analog Input for ADC1                                                                 | Not Muxed | ADC1_VIN09 |
| ADC1_VIN10   | Channel 10 Single-Ended Analog Input for ADC1                                                                | Not Muxed | ADC1_VIN10 |
| ADC1_VIN11   | Channel 11 Single-Ended Analog Input for ADC1                                                                | Not Muxed | ADC1_VIN11 |
| BYP_A0       | On-chip Analog Power Regulation Bypass Filter Nodefor ADC0(see recommended bypass - Figure 4)                | Not Muxed | BYP_A0     |
| BYP_A1       | On-chip Analog Power Regulation Bypass Filter Nodefor ADC1(see recommended bypass - Figure 4)                | Not Muxed | BYP_A1     |
| BYP_D0       | On-chip Digital Power Regulation Bypass Filter Node for Analog Subsystem (see recommended bypass - Figure 4) | Not Muxed | BYP_D0     |
| CAN0_RX      | CAN0 Receive                                                                                                 | B         | PB_15      |
| CAN0_TX      | CAN0 Transmit                                                                                                | C         | PC_00      |
| CAN1_RX      | CAN1 Receive                                                                                                 | B         | PB_10      |
| CAN1_TX      | CAN1 Transmit                                                                                                | B         | PB_11      |
| CNT0_DG      | CNT0 Count Down and Gate                                                                                     | B         | PB_02      |
| CNT0_OUTA    | CNT0 Output Divider A                                                                                        | B         | PB_13      |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 18. ADSP-CM409F 212-Ball BGA Signal Descriptions (Continued)

| SignalName    | Description                                                      | Port         | PinName       |
|---------------|------------------------------------------------------------------|--------------|---------------|
| CNT0_OUTA     | CNT0 Output Divider A                                            | F            | PF_00         |
| CNT0_OUTB     | CNT0 Output Divider B                                            | B            | PB_14         |
| CNT0_OUTB     | CNT0 Output Divider B                                            | F            | PF_01         |
| CNT0_UD       | CNT0 Count Up and Direction                                      | B            | PB_01         |
| CNT0_ZM       | CNT0 Count Zero Marker                                           | B            | PB_00         |
| CNT1_DG       | CNT1 Count Down and Gate                                         | B            | PB_05         |
| CNT1_OUTA     | CNT1 Output Divider A                                            | E            | PE_14         |
| CNT1_OUTB     | CNT1 Output Divider B                                            | E            | PE_15         |
| CNT1_UD       | CNT1 Count Up and Direction                                      | B            | PB_04         |
| CNT1_ZM       | CNT1 Count Zero Marker                                           | B            | PB_03         |
| CNT2_DG       | CNT2 Count Down and Gate                                         | E            | PE_10         |
| CNT2_UD       | CNT2 Count Up and Direction                                      | E            | PE_09         |
| CNT2_ZM       | CNT2 Count Zero Marker                                           | E            | PE_08         |
| CNT3_DG       | CNT3 Count Down and Gate                                         | E            | PE_13         |
| CNT3_UD       | CNT3 Count Up and Direction                                      | E            | PE_12         |
| CNT3_ZM       | CNT3 Count Zero Marker                                           | E            | PE_11         |
| CPTMR0_IN0    | CPTMR0 Capture Timer0 Input 0                                    | B            | PB_07         |
| CPTMR0_IN1    | CPTMR0 Capture Timer0 Input 1                                    | B            | PB_08         |
| CPTMR0_IN2    | CPTMR0 Capture Timer0 Input 2                                    | B            | PB_09         |
| DAC0_VOUT     | Analog Voltage Output 0                                          | Not Muxed    | DAC0_VOUT     |
| DAC1_VOUT     | Analog Voltage Output 1                                          | Not Muxed    | DAC1_VOUT     |
| ETH0_CRS      | EMAC0 Carrier Sense/RMII Receive Data Valid                      | E            | PE_09         |
| ETH0_MDC      | EMAC0 Management Channel Clock                                   | E            | PE_11         |
| ETH0_MDIO     | EMAC0 Management Channel Serial Data                             | E            | PE_10         |
| ETH0_PTPAUXIN | EMAC0 PTP Auxiliary Trigger Input                                | E            | PE_07         |
| ETH0_PTPCLKIN | EMAC0 PTP Clock Input                                            | E            | PE_06         |
| ETH0_PTPPPS   | EMAC0 PTP Pulse-Per-Second Output                                | E            | PE_08         |
| ETH0_REFCLK   | EMAC0 Reference Clock                                            | E            | PE_15         |
| ETH0_RXD0     | EMAC0 Receive Data 0                                             | F            | PF_00         |
| ETH0_RXD1     | EMAC0 Receive Data 1                                             | F            | PF_01         |
| ETH0_TXD0     | EMAC0 Transmit Data 0                                            | E            | PE_12         |
| ETH0_TXD1     | EMAC0 Transmit Data 1                                            | E            | PE_13         |
| ETH0_TXEN     | EMAC0 Transmit Enable                                            | E            | PE_14         |
| GND           | Digital Ground                                                   | Not Muxed    | GND           |
| GND_ANA       | Analog Ground returns for VDD_ANA domain                         | Not Muxed    | GND_ANA       |
| GND_VREF0     | Ground return for VREF0 (see recommendedbypassfilter - Figure 4) | Not Muxed    | GND_VREF0     |
| GND_VREF1     | Ground return for VREF1 (see recommendedbypassfilter - Figure    | 4) Not Muxed | GND_VREF1     |
| JTG_TCK/SWCLK | JTAG Clock/Serial Wire Clock                                     | Not Muxed    | JTG_TCK/SWCLK |
| JTG_TDI       | JTAG Serial Data In                                              | Not Muxed    | JTG_TDI       |
| JTG_TDO/SWO   | JTAG Serial Data Out/Serial Wire Trace Output                    | Not Muxed    | JTG_TDO/SWO   |
| JTG_TMS/SWDIO | JTAG Mode Select/Serial Wire Debug Data I/O                      | Not Muxed    | JTG_TMS/SWDIO |
| JTG_TRST      | JTAG Reset                                                       | Not Muxed    | JTG_TRST      |
| PA_00-PA_15   | Port A Positions 0 - 15                                          | A            | PA_00 - PA_15 |
| PB_00-PB_15   | Port B Positions 0 - 15                                          | B            | PB_00 - PB_15 |
| PC_00-PC_15   | Port C Positions 0 - 15                                          | C            | PC_00 - PC_15 |
| PD_00-PD_15   | Port DPositions 0 - 15                                           | D            | PD_00 - PD_15 |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 18. ADSP-CM409F 212-Ball BGA Signal Descriptions (Continued)

| SignalName   | Description                                                 | Port      | PinName       |
|--------------|-------------------------------------------------------------|-----------|---------------|
| PE_00-PE_15  | Port E Positions 0 - 15                                     | E         | PE_00 - PE_15 |
| PF_00-PF_10  | Port F Positions 0 - 15                                     | F         | PF_00 - PF_10 |
| PWM0_AH      | PWM0Channel A High Side                                     | A         | PA_02         |
| PWM0_AL      | PWM0Channel A Low Side                                      | A         | PA_03         |
| PWM0_BH      | PWM0Channel B High Side                                     | A         | PA_04         |
| PWM0_BL      | PWM0Channel B Low Side                                      | A         | PA_05         |
| PWM0_CH      | PWM0Channel C High Side                                     | A         | PA_06         |
| PWM0_CL      | PWM0Channel C Low Side                                      | A         | PA_07         |
| PWM0_DH      | PWM0Channel DHigh Side                                      | B         | PB_00         |
| PWM0_DL      | PWM0Channel DLowSide                                        | B         | PB_01         |
| PWM0_SYNC    | PWM0Sync                                                    | A         | PA_00         |
| PWM0_TRIP0   | PWM0Trip Input 0                                            | A         | PA_01         |
| PWM1_AH      | PWM1Channel A High Side                                     | A         | PA_12         |
| PWM1_AL      | PWM1Channel A Low Side                                      | A         | PA_13         |
| PWM1_BH      | PWM1Channel B High Side                                     | A         | PA_14         |
| PWM1_BL      | PWM1Channel B Low Side                                      | A         | PA_15         |
| PWM1_CH      | PWM1Channel C High Side                                     | A         | PA_08         |
| PWM1_CL      | PWM1Channel C Low Side                                      | A         | PA_09         |
| PWM1_DH      | PWM1Channel DHigh Side                                      | B         | PB_02         |
| PWM1_DL      | PWM1Channel DLowSide                                        | B         | PB_03         |
| PWM1_SYNC    | PWM1Sync                                                    | A         | PA_10         |
| PWM1_TRIP0   | PWM1Trip Input 0                                            | A         | PA_11         |
| PWM2_AH      | PWM2Channel A High Side                                     | B         | PB_06         |
| PWM2_AL      | PWM2Channel A Low Side                                      | B         | PB_07         |
| PWM2_BH      | PWM2Channel B High Side                                     | B         | PB_08         |
| PWM2_BL      | PWM2Channel B Low Side                                      | B         | PB_09         |
| PWM2_CH      | PWM2Channel C High Side                                     | C         | PC_03         |
| PWM2_CL      | PWM2Channel C Low Side                                      | C         | PC_04         |
| PWM2_DH      | PWM2Channel DHigh Side                                      | C         | PC_05         |
| PWM2_DL      | PWM2Channel DLowSide                                        | C         | PC_06         |
| PWM2_SYNC    | PWM2Sync                                                    | B         | PB_04         |
| PWM2_TRIP0   | PWM2Trip Input 0                                            | B         | PB_05         |
| REFCAP       | Output of BandGap Generator Filter Node (see recommended 4) | Not Muxed | REFCAP        |
|              | bypass filter - Figure                                      |           |               |
| SINC0_CLK0   | SINC0 Clock 0                                               | B         | PB_10         |
| SINC0_CLK1   | SINC0 Clock 1                                               | C         | PC_07         |
| SINC0_D0     | SINC0 Data 0                                                | B         | PB_11         |
| SINC0_D1     | SINC0 Data 1                                                | B         | PB_12         |
| SINC0_D2     | SINC0 Data 2                                                | B         | PB_13         |
| SINC0_D3     | SINC0 Data 3                                                | B         | PB_14         |
| SMC0_A01     | SMC0 Address 1                                              | B         | PB_13         |
| SMC0_A01     | SMC0 Address 1                                              | F         | PF_05         |
| SMC0_A02     | SMC0 Address 2                                              | B         | PB_14         |
| SMC0_A02     | SMC0 Address 2                                              | F         | PF_06         |
| SMC0_A03     | SMC0 Address 3                                              | B         | PB_15         |
| SMC0_A03     | SMC0 Address 3                                              | F         | PF_07         |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 18. ADSP-CM409F 212-Ball BGA Signal Descriptions (Continued)

| SignalName   | Description             | Port      | PinName   |
|--------------|-------------------------|-----------|-----------|
| SMC0_A04     | SMC0 Address 4          | C         | PC_00     |
| SMC0_A04     | SMC0 Address 4          | F         | PF_08     |
| SMC0_A05     | SMC0 Address 5          | C         | PC_01     |
| SMC0_A05     | SMC0 Address 5          | F         | PF_09     |
| SMC0_A06     | SMC0 Address 6          | D         | PD_08     |
| SMC0_A07     | SMC0 Address 7          | D         | PD_09     |
| SMC0_A08     | SMC0 Address 8          | D         | PD_10     |
| SMC0_A09     | SMC0 Address 9          | D         | PD_11     |
| SMC0_A10     | SMC0 Address 10         | D         | PD_12     |
| SMC0_A11     | SMC0 Address 11         | D         | PD_13     |
| SMC0_A12     | SMC0 Address 12         | D         | PD_14     |
| SMC0_A13     | SMC0 Address 13         | D         | PD_15     |
| SMC0_A14     | SMC0 Address 14         | E         | PE_00     |
| SMC0_A15     | SMC0 Address 15         | E         | PE_01     |
| SMC0_A16     | SMC0 Address 16         | E         | PE_02     |
| SMC0_A17     | SMC0 Address 17         | E         | PE_03     |
| SMC0_A18     | SMC0 Address 18         | E         | PE_04     |
| SMC0_A19     | SMC0 Address 19         | E         | PE_05     |
| SMC0_A20     | SMC0 Address 20         | E         | PE_06     |
| SMC0_A21     | SMC0 Address 21         | E         | PE_07     |
| SMC0_A22     | SMC0 Address 22         | E         | PE_08     |
| SMC0_A23     | SMC0 Address 23         | E         | PE_09     |
| SMC0_A24     | SMC0 Address 24         | E         | PE_11     |
| SMC0_ABE0    | SMC0 Byte Enable 0      | F         | PF_10     |
| SMC0_ABE1    | SMC0 Byte Enable 1      | F         | PF_02     |
| SMC0_AMS0    | SMC0 Memory Select 0    | B         | PB_11     |
| SMC0_AMS0    | SMC0 Memory Select 0    | Not Muxed | SMC0_AMS0 |
| SMC0_AMS1    | SMC0 Memory Select 1    | E         | PE_10     |
| SMC0_AMS2    | SMC0 Memory Select 2    | A         | PA_07     |
| SMC0_AMS3    | SMC0 Memory Select 3    | C         | PC_11     |
| SMC0_AOE     | SMC0 Output Enable      | B         | PB_12     |
| SMC0_AOE     | SMC0 Output Enable      | F         | PF_03     |
| SMC0_ARDY    | SMC0 Asynchronous Ready | B         | PB_08     |
| SMC0_ARDY    | SMC0 Asynchronous Ready | F         | PF_04     |
| SMC0_ARE     | SMC0 Read Enable        | B         | PB_09     |
| SMC0_ARE     | SMC0 Read Enable        | Not Muxed | SMC0_ARE  |
| SMC0_AWE     | SMC0 Write Enable       | B         | PB_10     |
| SMC0_AWE     | SMC0 Write Enable       | Not Muxed | SMC0_AWE  |
| SMC0_D00     | SMC0 Data 0             | A         | PA_08     |
| SMC0_D00     | SMC0 Data 0             | C         | PC_08     |
| SMC0_D01     | SMC0 Data 1             | A         | PA_09     |
| SMC0_D01     | SMC0 Data 1             | C         | PC_09     |
| SMC0_D02     | SMC0 Data 2             | A         | PA_10     |
| SMC0_D02     | SMC0 Data 2             | C         | PC_10     |
| SMC0_D03     | SMC0 Data 3             | A         | PA_11     |
| SMC0_D03     | SMC0 Data 3             | C         | PC_11     |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 18. ADSP-CM409F 212-Ball BGA Signal Descriptions (Continued)

| SignalName        | Description                                     | Port   | PinName     |
|-------------------|-------------------------------------------------|--------|-------------|
| SMC0_D04          | SMC0 Data 4                                     | A      | PA_12       |
| SMC0_D04          | SMC0 Data 4                                     | C      | PC_12       |
| SMC0_D05          | SMC0 Data 5                                     | A      | PA_13       |
| SMC0_D05          | SMC0 Data 5                                     | C      | PC_13       |
| SMC0_D06          | SMC0 Data 6                                     | A      | PA_14       |
| SMC0_D06          | SMC0 Data 6                                     | C      | PC_14       |
| SMC0_D07          | SMC0 Data 7                                     | A      | PA_15       |
| SMC0_D07          | SMC0 Data 7                                     | C      | PC_15       |
| SMC0_D08          | SMC0 Data 8                                     | B      | PB_00       |
| SMC0_D08          | SMC0 Data 8                                     | D      | PD_00       |
| SMC0_D09          | SMC0 Data 9                                     | B      | PB_01       |
| SMC0_D09          | SMC0 Data 9                                     | D      | PD_01       |
| SMC0_D10          | SMC0 Data 10                                    | B      | PB_02       |
| SMC0_D10          | SMC0 Data 10                                    | D      | PD_02       |
| SMC0_D11          | SMC0 Data 11                                    | B      | PB_03       |
| SMC0_D11          | SMC0 Data 11                                    | D      | PD_03       |
| SMC0_D12          | SMC0 Data 12                                    | B      | PB_04       |
| SMC0_D12          | SMC0 Data 12                                    | D      | PD_04       |
| SMC0_D13          | SMC0 Data 13                                    | B      | PB_05       |
| SMC0_D13          | SMC0 Data 13                                    | D      | PD_05       |
| SMC0_D14          | SMC0 Data 14                                    | B      | PB_06       |
| SMC0_D14          | SMC0 Data 14                                    | D      | PD_06       |
| SMC0_D15          | SMC0 Data 15                                    | B      | PB_07       |
| SMC0_D15          | SMC0 Data 15                                    | D      | PD_07       |
| SPI0_CLK          | SPI0 Clock                                      | C      | PC_03       |
| SPI0_D2           | SPI0 Data 2                                     | B      | PB_10       |
| SPI0_D3           | SPI0 Data 3                                     | B      | PB_11       |
| SPI0_MISO         | SPI0 Master In, Slave Out                       | C      | PC_04       |
| SPI0_MOSI         | SPI0 Master Out, Slave In                       | C      | PC_05       |
| SPI0_RDY          | SPI0 Ready                                      | C      | PC_02       |
| SPI0_SEL1         | SPI0 Slave Select Output 1                      | C      | PC_06       |
| SPI0_SEL2         | SPI0 Slave Select Output 2                      | B      | PB_13       |
| SPI0_SEL3         | SPI0 Slave Select Output 3                      | B      | PB_14       |
| SPI0_SS           | SPI0 Slave Select Input                         | B      | PB_14       |
| SPI1_CLK          | SPI1 Clock                                      | C      | PC_12       |
| SPI1_MISO         | SPI1 Master In, Slave Out                       | C      | PC_13       |
| SPI1_MOSI         | SPI1 Master Out, Slave In                       | C      | PC_14       |
| SPI1_SEL1         | SPI1 Slave Select Output 1                      | C      | PC_15       |
| SPI1_SEL2         | SPI1 Slave Select Output 2                      | B      | PB_06       |
| SPI1_SEL3         | SPI1 Slave Select Output 3                      | B      | PB_07       |
| SPI1_SS           | SPI1 Slave Select Input                         | C      | PC_15       |
| SPT0_ACLK         | SPORT0 Channel A Clock                          | B      | PB_00       |
| SPT0_ACLK         | SPORT0 Channel A Clock                          | E      | PE_00       |
| SPT0_AD0          | SPORT0 Channel A Data 0                         | B      | PB_02       |
| SPT0_AD0 SPT0_AD1 | SPORT0 Channel A Data 0 SPORT0 Channel A Data 1 | E B    | PE_02 PB_03 |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 18. ADSP-CM409F 212-Ball BGA Signal Descriptions (Continued)

| SignalName   | Description                          | Port      | PinName    |
|--------------|--------------------------------------|-----------|------------|
| SPT0_AD1     | SPORT0 Channel A Data 1              | E         | PE_03      |
| SPT0_AFS     | SPORT0 Channel A Frame Sync          | B         | PB_01      |
| SPT0_AFS     | SPORT0 Channel A Frame Sync          | E         | PE_01      |
| SPT0_ATDV    | SPORT0 Channel A Transmit Data Valid | B         | PB_04      |
| SPT0_BCLK    | SPORT0 Channel B Clock               | C         | PC_08      |
| SPT0_BD0     | SPORT0 Channel B Data 0              | C         | PC_10      |
| SPT0_BD1     | SPORT0 Channel B Data 1              | C         | PC_11      |
| SPT0_BFS     | SPORT0 Channel B Frame Sync          | C         | PC_09      |
| SPT0_BTDV    | SPORT0 Channel B Transmit Data Valid | B         | PB_12      |
| SPT1_ACLK    | SPORT1 Channel A Clock               | A         | PA_00      |
| SPT1_AD0     | SPORT1 Channel A Data 0              | A         | PA_02      |
| SPT1_AD1     | SPORT1 Channel A Data 1              | A         | PA_03      |
| SPT1_AFS     | SPORT1 Channel A Frame Sync          | A         | PA_01      |
| SPT1_ATDV    | SPORT1 Channel A Transmit Data Valid | B         | PB_15      |
| SPT1_BCLK    | SPORT1 Channel B Clock               | A         | PA_04      |
| SPT1_BD0     | SPORT1 Channel B Data 0              | A         | PA_06      |
| SPT1_BD1     | SPORT1 Channel B Data 1              | A         | PA_07      |
| SPT1_BFS     | SPORT1 Channel B Frame Sync          | A         | PA_05      |
| SPT1_BTDV    | SPORT1 Channel B Transmit Data Valid | C         | PC_00      |
| SYS_BMODE0   | Boot Mode Control 0                  | Not Muxed | SYS_BMODE0 |
| SYS_BMODE1   | Boot Mode Control 1                  | Not Muxed | SYS_BMODE1 |
| SYS_CLKIN    | Clock/Crystal Input                  | Not Muxed | SYS_CLKIN  |
| SYS_CLKOUT   | Processor Clock Output               | Not Muxed | SYS_CLKOUT |
| SYS_DSWAKE0  | Deep Sleep Wake-up 0                 | C         | PC_06      |
| SYS_DSWAKE1  | Deep Sleep Wake-up 1                 | C         | PC_07      |
| SYS_DSWAKE2  | Deep Sleep Wake-up 2                 | B         | PB_14      |
| SYS_DSWAKE3  | Deep Sleep Wake-up 3                 | B         | PB_13      |
| SYS_FAULT    | System Fault Output                  | Not Muxed | SYS_FAULT  |
| SYS_HWRST    | Processor Hardware Reset Control     | Not Muxed | SYS_HWRST  |
| SYS_NMI      | Nonmaskable Interrupt                | Not Muxed | SYS_NMI    |
| SYS_RESOUT   | Reset Output                         | Not Muxed | SYS_RESOUT |
| SYS_XTAL     | Crystal Output                       | Not Muxed | SYS_XTAL   |
| TM0_ACI1     | TIMER0 Alternate Capture Input 1     | B         | PB_10      |
| TM0_ACI1     | TIMER0 Alternate Capture Input 1     | D         | PD_13      |
| TM0_ACI2     | TIMER0 Alternate Capture Input 2     | B         | PB_08      |
| TM0_ACI2     | TIMER0 Alternate Capture Input 2     | D         | PD_12      |
| TM0_ACI3     | TIMER0 Alternate Capture Input 3     | B         | PB_12      |
| TM0_ACI3     | TIMER0 Alternate Capture Input 3     | D         | PD_11      |
| TM0_ACI4     | TIMER0 Alternate Capture Input 4     | B         | PB_15      |
| TM0_ACI4     | TIMER0 Alternate Capture Input 4     | D         | PD_10      |
| TM0_ACI5     | TIMER0 Alternate Capture Input 5     | C         | PC_01      |
| TM0_ACI5     | TIMER0 Alternate Capture Input 5     | D         | PD_09      |
| TM0_ACLK0    | TIMER0 Alternate Clock 0             | B         | PB_13      |
| TM0_ACLK1    | TIMER0 Alternate Clock 1             | B         | PB_11      |
| TM0_ACLK2    | TIMER0 Alternate Clock 2             | A         | PA_11      |
| TM0_ACLK3    | TIMER0 Alternate Clock 3             | A         | PA_10      |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 18. ADSP-CM409F 212-Ball BGA Signal Descriptions (Continued)

| SignalName   | Description                                               | Port      | PinName   |
|--------------|-----------------------------------------------------------|-----------|-----------|
| TM0_ACLK4    | TIMER0 Alternate Clock 4                                  | A         | PA_09     |
| TM0_ACLK5    | TIMER0 Alternate Clock 5                                  | A         | PA_08     |
| TM0_CLK      | TIMER0 Clock                                              | B         | PB_06     |
| TM0_CLK      | TIMER0 Clock                                              | D         | PD_08     |
| TM0_TMR0     | TIMER0 Timer 0                                            | B         | PB_07     |
| TM0_TMR0     | TIMER0 Timer 0                                            | D         | PD_00     |
| TM0_TMR1     | TIMER0 Timer 1                                            | B         | PB_08     |
| TM0_TMR1     | TIMER0 Timer 1                                            | D         | PD_01     |
| TM0_TMR2     | TIMER0 Timer 2                                            | B         | PB_09     |
| TM0_TMR2     | TIMER0 Timer 2                                            | D         | PD_02     |
| TM0_TMR3     | TIMER0 Timer 3                                            | A         | PA_15     |
| TM0_TMR3     | TIMER0 Timer 3                                            | D         | PD_03     |
| TM0_TMR4     | TIMER0 Timer 4                                            | A         | PA_12     |
| TM0_TMR4     | TIMER0 Timer 4                                            | D         | PD_04     |
| TM0_TMR5     | TIMER0 Timer 5                                            | A         | PA_13     |
| TM0_TMR5     | TIMER0 Timer 5                                            | D         | PD_05     |
| TM0_TMR6     | TIMER0 Timer 6                                            | A         | PA_14     |
| TM0_TMR6     | TIMER0 Timer 6                                            | D         | PD_06     |
| TM0_TMR7     | TIMER0 Timer 7                                            | B         | PB_05     |
| TM0_TMR7     | TIMER0 Timer 7                                            | D         | PD_07     |
| TRACE_CLK    | Embedded Trace Module Clock                               | B         | PB_00     |
| TRACE_D00    | Embedded Trace Module Data 0                              | B         | PB_01     |
| TRACE_D01    | Embedded Trace Module Data 1                              | B         | PB_02     |
| TRACE_D02    | Embedded Trace Module Data 2                              | B         | PB_03     |
| TRACE_D03    | Embedded Trace Module Data 3                              | C         | PC_02     |
| TRACE_D03    | Embedded Trace Module Data 3                              | F         | PF_02     |
| TWI0_SCL     | TWI0 Serial Clock                                         | Not Muxed | TWI0_SCL  |
| TWI0_SDA     | TWI0 Serial Data                                          | Not Muxed | TWI0_SDA  |
| UART0_CTS    | UART0 Clear to Send                                       | B         | PB_05     |
| UART0_RTS    | UART0 Request to Send                                     | B         | PB_04     |
| UART0_RX     | UART0 Receive                                             | C         | PC_01     |
| UART0_TX     | UART0 Transmit                                            | C         | PC_02     |
| UART1_CTS    | UART1 Clear to Send                                       | A         | PA_11     |
| UART1_RTS    | UART1 Request to Send                                     | C         | PC_07     |
| UART1_RX     | UART1 Receive                                             | B         | PB_08     |
| UART1_RX     | UART1 Receive                                             | B         | PB_15     |
| UART1_TX     | UART1 Transmit                                            | B         | PB_09     |
| UART1_TX     | UART1 Transmit                                            | C         | PC_00     |
| UART2_RX     | UART2 Receive                                             | B         | PB_12     |
| UART2_TX     | UART2 Transmit                                            | C         | PC_07     |
| USB0_DM      | USB0 Data -                                               | Not Muxed | USB0_DM   |
| USB0_DP      | USB0 Data +                                               | Not Muxed | USB0_DP   |
| USB0_ID      | USB0 OTG ID                                               | Not Muxed | USB0_ID   |
| USB0_VBC     | USB0 VBUS Control                                         | F         | PF_02     |
| USB0_VBUS    | USB0 Bus Voltage                                          | Not Muxed | USB0_VBUS |
| VDD_ANA0     | Analog Voltage Domain (see recommended bypass - Figure 4) | Not Muxed | VDD_ANA0  |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 18. ADSP-CM409F 212-Ball BGA Signal Descriptions (Continued)

| SignalName   | Description                                                                                     | Port      | PinName   |
|--------------|-------------------------------------------------------------------------------------------------|-----------|-----------|
| VDD_ANA1     | Analog Voltage Domain (see recommended bypass - Figure 4)                                       | Not Muxed | VDD_ANA1  |
| VDD_EXT      | External Voltage Domain                                                                         | Not Muxed | VDD_EXT   |
| VDD_INT      | Internal Voltage Domain                                                                         | Not Muxed | VDD_INT   |
| VDD_VREG     | VREG Supply Voltage                                                                             | Not Muxed | VDD_VREG  |
| VREF0        | Voltage Reference for ADC0. Default configuration is Output (see recommended bypass - Figure 4) | Not Muxed | VREF0     |
| VREF1        | Voltage Reference for ADC1. Default configuration is Output (see recommended bypass - Figure 4) | Not Muxed | VREF1     |
| VREG_BASE    | Voltage Regulator Base Node                                                                     | Not Muxed | VREG_BASE |

## ADSP-CM403F/CM407F/CM408F/CM409F

## ADSP-CM409F GPIO MULTIPLEXING FOR 212-BALL BGA

Table 19 through Table 24 identify the pin functions that are multiplexed on the general-purpose I/O pins of the 212-ball BGA package.

Table 19. Signal Multiplexing for Port A (212-Ball BGA)

| SignalName   | Multiplexed Function 0   | Multiplexed Function 1   | Multiplexed Function 2   | Multiplexed Function 3   | Multiplexed Function Input Tap   |
|--------------|--------------------------|--------------------------|--------------------------|--------------------------|----------------------------------|
| PA_00        | PWM0_SYNC                |                          | SPT1_ACLK                |                          |                                  |
| PA_01        | PWM0_TRIP0               |                          | SPT1_AFS                 |                          |                                  |
| PA_02        | PWM0_AH                  |                          | SPT1_AD0                 |                          |                                  |
| PA_03        | PWM0_AL                  |                          | SPT1_AD1                 |                          |                                  |
| PA_04        | PWM0_BH                  |                          | SPT1_BCLK                |                          |                                  |
| PA_05        | PWM0_BL                  |                          | SPT1_BFS                 |                          |                                  |
| PA_06        | PWM0_CH                  |                          | SPT1_BD0                 |                          |                                  |
| PA_07        | PWM0_CL                  | SMC0_AMS2                | SPT1_BD1                 |                          |                                  |
| PA_08        | PWM1_CH                  |                          | SMC0_D00                 |                          | TM0_ACLK5                        |
| PA_09        | PWM1_CL                  |                          | SMC0_D01                 |                          | TM0_ACLK4                        |
| PA_10        | PWM1_SYNC                |                          | SMC0_D02                 |                          | TM0_ACLK3                        |
| PA_11        | PWM1_TRIP0               | UART1_CTS                | SMC0_D03                 |                          | TM0_ACLK2                        |
| PA_12        | PWM1_AH                  | TM0_TMR4                 | SMC0_D04                 |                          |                                  |
| PA_13        | PWM1_AL                  | TM0_TMR5                 | SMC0_D05                 |                          |                                  |
| PA_14        | PWM1_BH                  | TM0_TMR6                 | SMC0_D06                 |                          |                                  |
| PA_15        | PWM1_BL                  | TM0_TMR3                 | SMC0_D07                 |                          |                                  |

Table 20. Signal Multiplexing for Port B (212-Ball BGA)

| SignalName   | Multiplexed Function 0   | Multiplexed Function 1   | Multiplexed Function 2   | Multiplexed Function 3   | Multiplexed Function Input Tap   |
|--------------|--------------------------|--------------------------|--------------------------|--------------------------|----------------------------------|
| PB_00        | PWM0_DH                  | TRACE_CLK                | SPT0_ACLK                | SMC0_D08                 | CNT0_ZM                          |
| PB_01        | PWM0_DL                  | TRACE_D00                | SPT0_AFS                 | SMC0_D09                 | CNT0_UD                          |
| PB_02        | PWM1_DH                  | TRACE_D01                | SPT0_AD0                 | SMC0_D10                 | CNT0_DG                          |
| PB_03        | PWM1_DL                  | TRACE_D02                | SPT0_AD1                 | SMC0_D11                 | CNT1_ZM                          |
| PB_04        | PWM2_SYNC                | UART0_RTS                | SPT0_ATDV                | SMC0_D12                 | CNT1_UD                          |
| PB_05        | PWM2_TRIP0               | UART0_CTS                | TM0_TMR7                 | SMC0_D13                 | CNT1_DG                          |
| PB_06        | PWM2_AH                  | TM0_CLK                  | SPI1_SEL2                | SMC0_D14                 |                                  |
| PB_07        | PWM2_AL                  | TM0_TMR0                 | SPI1_SEL3                | SMC0_D15                 | CPTMR0_IN0                       |
| PB_08        | PWM2_BH                  | TM0_TMR1                 | UART1_RX                 | SMC0_ARDY                | TM0_ACI2/ CPTMR0_IN1             |
| PB_09        | PWM2_BL                  | TM0_TMR2                 | UART1_TX                 | SMC0_ARE                 | CPTMR0_IN2                       |
| PB_10        | SINC0_CLK0               | SPI0_D2                  | CAN1_RX                  | SMC0_AWE                 | TM0_ACI1                         |
| PB_11        | SINC0_D0                 | SPI0_D3                  | CAN1_TX                  | SMC0_AMS0                | TM0_ACLK1                        |
| PB_12        | SINC0_D1                 | SPT0_BTDV                | UART2_RX                 | SMC0_AOE                 | TM0_ACI3                         |
| PB_13        | SINC0_D2                 | CNT0_OUTA                | SPI0_SEL2                | SMC0_A01                 | TM0_ACLK0/ SYS_DSWAKE3           |
| PB_14        | SINC0_D3                 | CNT0_OUTB                | SPI0_SEL3                | SMC0_A02                 | SPI0_SS/ SYS_DSWAKE2             |
| PB_15        | CAN0_RX                  | SPT1_ATDV                | UART1_RX                 | SMC0_A03                 | TM0_ACI4                         |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 21. Signal Multiplexing for Port C (212-Ball BGA)

| SignalName   | Multiplexed Function 0   | Multiplexed Function 1   | Multiplexed Function 2   | Multiplexed Function 3   | Multiplexed Function Input Tap   |
|--------------|--------------------------|--------------------------|--------------------------|--------------------------|----------------------------------|
| PC_00        | CAN0_TX                  | SPT1_BTDV                | UART1_TX                 | SMC0_A04                 |                                  |
| PC_01        | UART0_RX                 |                          |                          | SMC0_A05                 | TM0_ACI5                         |
| PC_02        | UART0_TX                 | TRACE_D03                | SPI0_RDY                 |                          |                                  |
| PC_03        | SPI0_CLK                 | PWM2_CH                  |                          |                          |                                  |
| PC_04        | SPI0_MISO                | PWM2_CL                  |                          |                          |                                  |
| PC_05        | SPI0_MOSI                | PWM2_DH                  |                          |                          |                                  |
| PC_06        | SPI0_SEL1                | PWM2_DL                  |                          |                          | SYS_DSWAKE0                      |
| PC_07        | SINC0_CLK1               | UART2_TX                 | UART1_RTS                |                          | SYS_DSWAKE1                      |
| PC_08        |                          | SPT0_BCLK                | SMC0_D00                 |                          |                                  |
| PC_09        |                          | SPT0_BFS                 | SMC0_D01                 |                          |                                  |
| PC_10        |                          | SPT0_BD0                 | SMC0_D02                 |                          |                                  |
| PC_11        | SMC0_AMS3                | SPT0_BD1                 | SMC0_D03                 |                          |                                  |
| PC_12        |                          | SPI1_CLK                 | SMC0_D04                 |                          |                                  |
| PC_13        |                          | SPI1_MISO                | SMC0_D05                 |                          |                                  |
| PC_14        |                          | SPI1_MOSI                | SMC0_D06                 |                          |                                  |
| PC_15        |                          | SPI1_SEL1                | SMC0_D07                 |                          | SPI1_SS                          |

Table 22. Signal Multiplexing for Port D (212-Ball BGA)

| SignalName   | Multiplexed Function 0   | Multiplexed Function 1   | Multiplexed Function 2   | Multiplexed Function 3   | Multiplexed Function Input Tap   |
|--------------|--------------------------|--------------------------|--------------------------|--------------------------|----------------------------------|
| PD_00        |                          |                          | SMC0_D08                 | TM0_TMR0                 |                                  |
| PD_01        |                          |                          | SMC0_D09                 | TM0_TMR1                 |                                  |
| PD_02        |                          |                          | SMC0_D10                 | TM0_TMR2                 |                                  |
| PD_03        |                          |                          | SMC0_D11                 | TM0_TMR3                 |                                  |
| PD_04        |                          |                          | SMC0_D12                 | TM0_TMR4                 |                                  |
| PD_05        |                          |                          | SMC0_D13                 | TM0_TMR5                 |                                  |
| PD_06        |                          |                          | SMC0_D14                 | TM0_TMR6                 |                                  |
| PD_07        |                          |                          | SMC0_D15                 | TM0_TMR7                 |                                  |
| PD_08        |                          |                          | SMC0_A06                 | TM0_CLK                  |                                  |
| PD_09        |                          |                          | SMC0_A07                 | TM0_ACI5                 |                                  |
| PD_10        |                          |                          | SMC0_A08                 | TM0_ACI4                 |                                  |
| PD_11        |                          |                          | SMC0_A09                 | TM0_ACI3                 |                                  |
| PD_12        |                          |                          | SMC0_A10                 | TM0_ACI2                 |                                  |
| PD_13        |                          |                          | SMC0_A11                 | TM0_ACI1                 |                                  |
| PD_14        |                          |                          | SMC0_A12                 |                          |                                  |
| PD_15        |                          |                          | SMC0_A13                 |                          |                                  |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 23. Signal Multiplexing for Port E (212-Ball BGA)

| SignalName   | Multiplexed Function 0   | Multiplexed Function 1   | Multiplexed Function 2   | Multiplexed Function 3   | Multiplexed Function Input Tap   |
|--------------|--------------------------|--------------------------|--------------------------|--------------------------|----------------------------------|
| PE_00        |                          |                          | SMC0_A14                 | SPT0_ACLK                |                                  |
| PE_01        |                          |                          | SMC0_A15                 | SPT0_AFS                 |                                  |
| PE_02        |                          |                          | SMC0_A16                 | SPT0_AD0                 |                                  |
| PE_03        |                          |                          | SMC0_A17                 | SPT0_AD1                 |                                  |
| PE_04        |                          |                          | SMC0_A18                 |                          |                                  |
| PE_05        |                          |                          | SMC0_A19                 |                          |                                  |
| PE_06        |                          | ETH0_PTPCLKIN            | SMC0_A20                 |                          |                                  |
| PE_07        |                          | ETH0_PTPAUXIN            | SMC0_A21                 |                          |                                  |
| PE_08        |                          | ETH0_PTPPPS              | SMC0_A22                 |                          | CNT2_ZM                          |
| PE_09        |                          | ETH0_CRS                 | SMC0_A23                 |                          | CNT2_UD                          |
| PE_10        |                          | ETH0_MDIO                | SMC0_AMS1                |                          | CNT2_DG                          |
| PE_11        | ETH0_MDC                 |                          | SMC0_A24                 |                          | CNT3_ZM                          |
| PE_12        | ETH0_TXD0                |                          |                          |                          | CNT3_UD                          |
| PE_13        | ETH0_TXD1                |                          |                          |                          | CNT3_DG                          |
| PE_14        | ETH0_TXEN                | CNT1_OUTA                |                          |                          |                                  |
| PE_15        | ETH0_REFCLK              | CNT1_OUTB                |                          |                          |                                  |

Table 24. Signal Multiplexing for Port F (212-Ball BGA)

| SignalName   | Multiplexed Function 0   | Multiplexed Function 1   | Multiplexed Function 2   | Multiplexed Function 3   | Multiplexed Function Input Tap   |
|--------------|--------------------------|--------------------------|--------------------------|--------------------------|----------------------------------|
| PF_00        | ETH0_RXD0                | CNT0_OUTA                |                          |                          |                                  |
| PF_01        | ETH0_RXD1                | CNT0_OUTB                |                          |                          |                                  |
| PF_02        | USB0_VBC                 | TRACE_D03                | SMC0_ABE1                |                          |                                  |
| PF_03        |                          |                          | SMC0_AOE                 |                          |                                  |
| PF_04        |                          |                          | SMC0_ARDY                |                          |                                  |
| PF_05        |                          |                          | SMC0_A01                 |                          |                                  |
| PF_06        |                          |                          | SMC0_A02                 |                          |                                  |
| PF_07        |                          |                          | SMC0_A03                 |                          |                                  |
| PF_08        |                          |                          | SMC0_A04                 |                          |                                  |
| PF_09        |                          |                          | SMC0_A05                 |                          |                                  |
| PF_10        |                          |                          | SMC0_ABE0                |                          |                                  |

## ADSP-CM403F/CM407F/CM408F/CM409F

## ADSP-CM40xF DESIGNER QUICK REFERENCE

Table 25 provides a quick reference summary of pin related information for circuit board design. The columns in this table provide the following information:

- Signal Name: The Signal Name column in the table includes the signal name for every pin and (where applicable) the GPIO multiplexed pin function for every pin.
- Pin Type: The Type column in the table identifies the I/O type or supply type of the pin. The abbreviations used in this column are na (none), I/O (input/output), a (analog), s (supply), and g (ground).
- Driver Type: The Driver Type column in the table identifies the driver type used by the pin. The driver types are defined in the output drive currents section of this data sheet.
- Internal Termination: The Int Term column in the table specifies the termination present when the processor is not in the reset state. The abbreviations used in this column are wk (weak keeper, weakly retains previous value driven on the pin), pu (pull-up), or pd (pull-down).
- Reset Termination: The Reset Term column in the table specifies the termination present when the processor is in the reset state. The abbreviations used in this column are wk (weak keeper, weakly retains previous value driven on the pin), pu (pull-up), or pd (pull-down).
- Reset Drive: The Reset Drive column in the table specifies the active drive on the signal when the processor is in the reset state.
- Power Domain: The Power Domain column in the table specifies the power supply domain in which the signal resides.
- Description and Notes: The Description and Notes column in the table identifies any special requirements or characteristics for the signal. If no special requirements are listed the signal may be left unconnected if it is not used. Also, for multiplexed general-purpose I/O pins, this column identifies the functions available on the pin.

Table 25. ADSP-CM40xF Designer Quick Reference

| SignalName   | Type   | Driver Type   | Int Term   | Reset Term   | Reset Drive   | Power Domain   | Description and Notes                                                |
|--------------|--------|---------------|------------|--------------|---------------|----------------|----------------------------------------------------------------------|
| ADC0_VIN00   | a      | na            | none       | none         | none          | VDD_ANA        | Desc: Channel 0 Single-Ended Analog Input for ADC0 Notes: No notes.  |
| ADC0_VIN01   | a      | na            | none       | none         | none          | VDD_ANA        | Desc: Channel 1 Single-Ended Analog Input for ADC0 Notes: No notes.  |
| ADC0_VIN02   | a      | na            | none       | none         | none          | VDD_ANA        | Desc: Channel 2 Single-Ended Analog Input for ADC0 Notes: No notes.  |
| ADC0_VIN03   | a      | na            | none       | none         | none          | VDD_ANA        | Desc: Channel 3 Single-Ended Analog Input for ADC0 Notes: No notes.  |
| ADC0_VIN04   | a      | na            | none       | none         | none          | VDD_ANA        | Desc: Channel 4 Single-Ended Analog Input for ADC0 Notes: No notes.  |
| ADC0_VIN05   | a      | na            | none       | none         | none          | VDD_ANA        | Desc: Channel 5 Single-Ended Analog Input for ADC0                   |
| ADC0_VIN06   | a      | na            | none       | none         | none          | VDD_ANA        | Desc: Channel 6 Single-Ended Analog Input for ADC0 Notes: No notes.  |
| ADC0_VIN07   | a      | na            | none       | none         | none          | VDD_ANA        | Desc: Channel 7 Single-Ended Analog Input for ADC0 Notes: No notes.  |
| ADC0_VIN08   | a      | na            | none       | none         | none          | VDD_ANA        | Desc: Channel 8 Single-Ended Analog Input for ADC0 Notes: No notes.  |
| ADC0_VIN09   | a      | na            | none       | none         | none          | VDD_ANA        | Desc: Channel 9 Single-Ended Analog Input for ADC0 Notes: No notes.  |
| ADC0_VIN10   | a      | na            | none       | none         | none          | VDD_ANA        | Desc: Channel 10 Single-Ended Analog Input for ADC0 Notes: No notes. |
| ADC0_VIN11   | a      | na            | none       | none         | none          | VDD_ANA        | Desc: Channel 11 Single-Ended Analog Input for ADC0 Notes: No notes. |
| ADC1_VIN00   | a      | na            | none       | none         | none          | VDD_ANA        | Desc: Channel 0 Single-Ended Analog Input for ADC1 Notes: No notes.  |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 25. ADSP-CM40xF Designer Quick Reference (Continued)

| SignalName   | Type   | Driver Type   | Int Term   | Reset Term   | Reset Drive   | Power Domain   | Description and Notes                                                                                                                                                                                                                        |
|--------------|--------|---------------|------------|--------------|---------------|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ADC1_VIN01   | a      | na            | none       | none         | none          | VDD_ANA        | Desc: Channel 1 Single-Ended Analog Input for ADC1 Notes: No notes.                                                                                                                                                                          |
| ADC1_VIN02   | a      | na            | none       | none         | none          | VDD_ANA        | Desc: Channel 2 Single-Ended Analog Input for ADC1 Notes: No notes.                                                                                                                                                                          |
| ADC1_VIN03   | a      | na            | none       | none         | none          | VDD_ANA        | Desc: Channel 3 Single-Ended Analog Input for ADC1 Notes: No notes.                                                                                                                                                                          |
| ADC1_VIN04   | a      | na            | none       | none         | none          | VDD_ANA        | Desc: Channel 4 Single-Ended Analog Input for ADC1 Notes: No notes.                                                                                                                                                                          |
| ADC1_VIN05   | a      | na            | none       | none         | none          | VDD_ANA        | Desc: Channel 5 Single-Ended Analog Input for ADC1 Notes: No notes.                                                                                                                                                                          |
| ADC1_VIN06   | a      | na            | none       | none         | none          | VDD_ANA        | Desc: Channel 6 Single-Ended Analog Input for ADC1 Notes: No notes.                                                                                                                                                                          |
| ADC1_VIN07   | a      | na            | none       | none         | none          | VDD_ANA        | Desc: Channel 7 Single-Ended Analog Input for ADC1 Notes: No notes.                                                                                                                                                                          |
| ADC1_VIN08   | a      | na            | none       | none         | none          | VDD_ANA        | Desc: Channel 8 Single-Ended Analog Input for ADC1 Notes: No notes.                                                                                                                                                                          |
| ADC1_VIN09   | a      | na            | none       | none         | none          | VDD_ANA        | Desc: Channel 9 Single-Ended Analog Input for ADC1 Notes: No notes.                                                                                                                                                                          |
| ADC1_VIN10   | a      | na            | none       | none         | none          | VDD_ANA        | Desc: Channel 10 Single-Ended Analog Input for ADC1 Notes: No notes.                                                                                                                                                                         |
| ADC1_VIN11   | a      | na            | none       | none         | none          | VDD_ANA        | Desc: Channel 11 Single-Ended Analog Input for ADC1 Notes: No notes.                                                                                                                                                                         |
| BYP_A0       | a      | na            | none       | none         | H             | VDD_ANA        | Desc: On-chip Analog Power Regulation Bypass Filter Node for ADC0 (see recommended bypass - Figure 4) Notes: This pin should never be loaded with resistive or inductive load or connected to anything but the recom- mended capacitor.      |
| BYP_A1       | a      | na            | none       | none         | H             | VDD_ANA        | Desc: On-chip Analog Power Regulation Bypass Filter Node for ADC1 (see recommended bypass - Figure 4) Notes: This pin should never be loaded with resistive or inductive load or connected to anything but the recom- mended capacitor.      |
| BYP_D0       | a      | na            | none       | none         | H             | VDD_EXT        | Desc:On-chipDigitalPowerRegulationBypassFilterNodefor Analog Subsystem (see recommended bypass - Figure 4) Notes: This pin should never be loaded with resistive or inductive load or connected to anything but the recom- mended capacitor. |
| DAC0_VOUT    | a      | na            | none       | none         | L             | VDD_ANA        | Desc: Analog Voltage Output 0 Notes: No notes.                                                                                                                                                                                               |
| DAC1_VOUT    | a      | na            | none       | none         | L             | VDD_ANA        | Desc: Analog Voltage Output 1 Notes: No notes.                                                                                                                                                                                               |
| GND          | g      | na            | none       | none         | none          | VDD_EXT and    | Desc: Digital Ground                                                                                                                                                                                                                         |
| GND_ANA      | g      | na            | none       | none         | none          | VDD_ANA        | Desc: Analog Ground returns for VDD_ANA domain Notes: No notes.                                                                                                                                                                              |
| GND_ANA0     | g      | na            | none       | none         | none          | VDD_ANA        | Desc: Analog Ground return for VDD_ANA0 (see recom- mended bypass - Figure 4) Notes: No notes                                                                                                                                                |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 25. ADSP-CM40xF Designer Quick Reference (Continued)

| SignalName    | Type   | Driver Type   | Int Term   | Reset Term   | Reset Drive   | Power Domain   | Description and Notes                                                                                                                                                                                                                          |
|---------------|--------|---------------|------------|--------------|---------------|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GND_ANA1      | g      | na            | none       | none         | none          | VDD_ANA        | Desc: Analog Ground return for VDD_ANA1 (see recom- mended bypass - Figure 4) Notes: No notes.                                                                                                                                                 |
| GND_ANA2      | g      | na            | none       | none         | none          | VDD_ANA        | Desc: Analog Ground (see recommended bypass - Figure 4) Notes: No notes.                                                                                                                                                                       |
| GND_ANA3      | g      | na            | none       | none         | none          | VDD_ANA        | Desc: Analog Ground (see recommended bypass - Figure 4) Notes: No notes.                                                                                                                                                                       |
| GND_VREF0     | g      | na            | none       | none         | none          | VDD_ANA        | Desc: Ground return for VREF0 (see recommended bypass filter - Figure 4) Notes: No notes.                                                                                                                                                      |
| GND_VREF1     | g      | na            | none       | none         | none          | VDD_ANA        | Desc: Ground return for VREF1 (see recommended bypass filter - Figure 4)                                                                                                                                                                       |
| JTG_TCK/SWCLK | I/O    | na            | pd         | pd           | none          | VDD_EXT        | Desc: JTAG Clock/Serial Wire Clock Notes: No notes.                                                                                                                                                                                            |
| JTG_TDI       | I/O    | na            | pu         | pu           | none          | VDD_EXT        | Desc: JTAG Serial Data In                                                                                                                                                                                                                      |
| JTG_TDO/SWO   | I/O    | A             | none       | none         | none          | VDD_EXT        | Desc: JTAG Serial Data Out/Serial Wire Trace Output Notes: No notes.                                                                                                                                                                           |
| JTG_TMS/SWDIO | I/O    | A             | pu         | pu           | none          | VDD_EXT        | Desc: JTAG Mode Select/Serial Wire Debug Data I/O Notes: No notes.                                                                                                                                                                             |
| JTG_TRST      | I/O    | A             | pu         | pu           | none          | VDD_EXT        | Desc: JTAG Reset Notes: Requires pull-up if using TRACE functionality; otherwise pull-down should be connected.                                                                                                                                |
| PA_00         | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PA Position 0 &#124; PWM0Sync &#124; SPORT1 Channel A Clock Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.                |
| PA_01         | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PA Position 1 &#124; PWM0Trip Input 0 &#124; SPORT1 Channel A Frame Sync Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.   |
| PA_02         | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PA Position 2 &#124; PWM0Channel A High Side &#124; SPORT1 Channel A Data 0 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                    |
| PA_03         | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | PORT_INEN and PADS_PCFG0 registers. Desc: PA Position 3 &#124; PWM0Channel A Low Side &#124; SPORT1 Channel A Data 1 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the |
| PA_04         | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PA Position 4 &#124; PWM0Channel B High Side &#124; SPORT1 Channel B Clock Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers. |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 25. ADSP-CM40xF Designer Quick Reference (Continued)

| SignalName   | Type   | Driver Type   | Int Term   | Reset Term   | Reset Drive   | Power Domain   | Description and Notes                                                                                                                                                                                                                                                              |
|--------------|--------|---------------|------------|--------------|---------------|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| PA_05        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PA Position 5 &#124; PWM0Channel B Low Side &#124; SPORT1 Channel B Frame Sync Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                                                     |
| PA_06        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PA Position 6 &#124; PWM0Channel C High Side &#124; SPORT1 Channel B Data 0 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                                                        |
| PA_07        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PA Position 7 &#124; PWM0Channel C Low Side &#124; SMC0 Memory Select 2 &#124; SPORT1 Channel B Data 1 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.         |
| PA_08        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PA Position 8 &#124; PWM1Channel C High Side &#124; SMC0Data 0 &#124; TM0 Timer5 Alternate Clock Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                                   |
| PA_09        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PA Position 9 &#124; PWM1Channel C Low Side &#124; SMC0 Data 1 &#124; TM0 Timer4 Alternate Clock Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                                   |
| PA_10        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PA Position10&#124;PWM1Sync&#124;SMC0Data2&#124;TM0Timer3 Alternate Clock Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                                                          |
| PA_11        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc:PAPosition11&#124;PWM1TripInput0&#124;UART1CleartoSend &#124; SMC0 Data 3 &#124; TM0 Timer2 Alternate Clock Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                         |
| PA_12        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc:PAPosition12&#124;PWM1ChannelAHighSide&#124;TM0Timer 4 &#124; SMC0 Data 4 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                                                           |
| PA_13        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | PORT_INEN and PADS_PCFG0 registers. Desc: PA Position13&#124;PWM1ChannelALowSide&#124; TM0Timer 5 &#124; SMC0 Data 5 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers. |
| PA_14        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc:PAPosition14&#124;PWM1ChannelBHighSide&#124;TM0Timer 6 &#124; SMC0 Data 6 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.                                       |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 25. ADSP-CM40xF Designer Quick Reference (Continued)

| SignalName   | Type   | Driver Type   | Int Term   | Reset Term   | Reset Drive   | Power Domain   | Description and Notes                                                                                                                                                                                                                                                                                                            |
|--------------|--------|---------------|------------|--------------|---------------|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| PA_15        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PA Position 15 &#124;PWM1ChannelBLowSide &#124; TM0Timer 3 &#124; SMC0 Data 7 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.                                                                                |
| PB_00        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PB Position0&#124;PWM0ChannelDHighSide&#124;Embedded Trace Module Clock &#124; SPORT0 Channel AClock &#124;SMC0 Data 8 &#124; CNT0 Count Zero Marker Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                             |
| PB_01        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PB Position 1 &#124; PWM0Channel DLowSide &#124; Embedded Trace Module Data 0 &#124; SPORT0 Channel AFrame Sync &#124; SMC0 Data 9 &#124; CNT0 Count Up and Direction Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                            |
| PB_02        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PB Position2&#124;PWM1ChannelDHighSide&#124;Embedded Trace Module Data 1 &#124; SPORT0 Channel AData 0 &#124; SMC0Data 10 &#124; CNT0 Count Down and Gate Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                        |
| PB_03        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PB Position 3 &#124; PWM1Channel DLowSide &#124; Embedded Trace Module Data 2 &#124; SPORT0 Channel AData 1 &#124; SMC0Data 11 &#124; CNT1 Count Zero Marker Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers. |
| PB_04        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PB Position 4 &#124; PWM2Sync &#124; UART0 Request to Send &#124; SPORT0ChannelATransmitDataValid&#124;SMC0Data12&#124;CNT1 Count Up and Direction Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.           |
| PB_05        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PB Position 5 &#124; PWM2TripInput 0 &#124; UART0Clear to Send &#124; TM0 Timer 7 &#124; SMC0 Data 13 &#124; CNT1 Count Down and Gate Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                                            |
| PB_06        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PB Position 6 &#124; PWM2Channel A High Side &#124; TM0 CommonClock &#124; SPI1 Slave Select Output 2 &#124; SMC0 Data 14 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                                                        |
| PB_07        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc:PBPosition7&#124;PWM2ChannelALowSide&#124;TM0Timer0 &#124; SPI1 Slave Select Output 3 &#124; SMC0 Data 15 &#124; Capture Timer0 Input 0 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.                       |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 25. ADSP-CM40xF Designer Quick Reference (Continued)

| SignalName   | Type   | Driver Type   | Int Term   | Reset Term   | Reset Drive   | Power Domain   | Description and Notes                                                                                                                                                                                                                                                                                                                                                       |
|--------------|--------|---------------|------------|--------------|---------------|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| PB_08        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PB Position 8 &#124; PWM2Channel B High Side &#124; TM0 Timer 1 &#124; UART1 Receive &#124; SMC0 Asynchronous Ready &#124; TM0 Timer2 Alternate Capture Input &#124; Capture Timer0 Input 1 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.             |
| PB_09        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc:PBPosition9&#124;PWM2ChannelBLowSide&#124;TM0Timer2 &#124;UART1Transmit&#124;SMC0ReadEnable&#124;CaptureTimer0Input2 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                                                                                                         |
| PB_10        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PB Position 10 &#124; SINC0 Clock 0 &#124; SPI0 Data 2 &#124; CAN1 Receive &#124; SMC0 Write Enable &#124; TM0Timer1 Alternate Capture Input Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                                                                                |
| PB_11        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PB Position 11 &#124; SINC0 Data 0 &#124; SPI0 Data 3 &#124; CAN1 Transmit &#124; SMC0 Memory Select 0 &#124; TM0 Timer1 Alternate Clock Notes: By default, the internal termination pull-up is active.                                                                                                                                                               |
| PB_12        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PB Position 12 &#124; SINC0 Data 1 &#124; SPORT0 Channel B Transmit Data Valid &#124; UART2 Receive &#124; SMC0 Output Enable &#124; TM0 Timer3 Alternate Capture Input Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.                                 |
| PB_13        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PB Position 13 &#124; SINC0 Data 2 &#124; CNT0 Output Divider A&#124; SPI0SlaveSelectOutput2&#124;SMC0Address1&#124;SYS0DeepSleep Wakeup 3 &#124; TM0 Timer0 Alternate Clock Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                                                |
| PB_14        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PB Position 14 &#124; SINC0 Data 3 &#124; CNT0 Output Divider B &#124; SPI0SlaveSelectOutput3&#124;SMC0Address2&#124;SYS0DeepSleep Wakeup 2 &#124; SPI0 Slave Select Input Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                                                  |
| PB_15        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | PORT_INEN and PADS_PCFG0 registers. Desc: PB Position 15 &#124; CAN0 Receive &#124; SPORT1 Channel A Transmit Data Valid &#124; UART1 Receive &#124; SMC0 Address 3 &#124; TM0 Timer4 Alternate Capture Input Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers. |
| PC_00        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PC Position 0 &#124; CAN0 Transmit &#124; SPORT1 Channel B Transmit Data Valid &#124; UART1 Transmit &#124; SMC0 Address 4 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.                                                                              |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 25. ADSP-CM40xF Designer Quick Reference (Continued)

| SignalName   | Type   | Driver Type   | Int Term   | Reset Term   | Reset Drive   | Power Domain   | Description and Notes                                                                                                                                                                                                                                                                     |
|--------------|--------|---------------|------------|--------------|---------------|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| PC_01        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PC Position 1 &#124; UART0 Receive &#124; SMC0 Address 5 &#124; TM0 Timer5 Alternate Capture Input Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                                        |
| PC_02        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PC Position 2 &#124; UART0 Transmit &#124; Embedded Trace Module Data 3 &#124; SPI0 Ready Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                                                 |
| PC_03        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PC Position 3 &#124; SPI0 Clock &#124; PWM2Channel C High Side Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.                                                        |
| PC_04        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc:PCPosition4&#124;SPI0MasterIn,SlaveOut&#124;PWM2Channel C Low Side Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                                                                         |
| PC_05        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc:PCPosition5&#124;SPI0MasterOut,SlaveIn&#124;PWM2Channel DHigh Side Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                                                                         |
| PC_06        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PC Position 6 &#124; SPI0 Slave Select Output 1 &#124;PWM2 Channel DLowSide &#124; SYS0 Deep Sleep Wakeup 0 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.           |
| PC_07        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PC Position 7 &#124; SINC0 Clock 1 &#124; UART2 Transmit &#124; UART1 Request to Send &#124; SYS0 Deep Sleep Wakeup 1 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers. |
| PC_08        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PC Position 8 &#124; SPORT0 Channel B Clock &#124; SMC0 Data 0 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                                                                            |
| PC_09        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PC Position 9 &#124; SPORT0 Channel B Frame Sync &#124; SMC0 Data 1 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.                                                   |
| PC_10        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc:PCPosition10&#124;SPORT0ChannelBData0&#124;SMC0Data2 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.                                                                   |
| PC_11        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PC Position 11 &#124; SMC0 Memory Select 3 &#124; SPT0 Channel B Data 1 &#124; SMC0 Data 3 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.                            |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 25. ADSP-CM40xF Designer Quick Reference (Continued)

| SignalName   | Type   | Driver Type   | Int Term   | Reset Term   | Reset Drive   | Power Domain   | Description and Notes                                                                                                                                                                                                                                                 |
|--------------|--------|---------------|------------|--------------|---------------|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| PC_12        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PC Position 12 &#124; SPI1 Clock &#124; SMC0 Data 4 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.                                               |
| PC_13        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PC Position 13 &#124; SPI1 Master In, Slave Out &#124; SMC0 Data 5 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.                                |
| PC_14        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PC Position 14 &#124; SPI1 Master Out, Slave In &#124; SMC0 Data 6 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                                                    |
| PC_15        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PC Position 15 &#124; SPI1 Slave Select Output 1 &#124; SMC0Data 7 &#124; SPI1 Slave Select Input Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers. |
| PD_00        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PD Position 0 &#124; SMC0 Data 8 &#124; TM0 Timer 0 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.                                               |
| PD_01        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PD Position 1 &#124; SMC0 Data 9 &#124; TM0 Timer 1 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.                                               |
| PD_02        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PD Position 2 &#124; SMC0 Data 10 &#124; TM0 Timer 2 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.                                              |
| PD_03        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PD Position 3 &#124; SMC0 Data 11 &#124; TM0 Timer 3 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.                                              |
| PD_04        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PD Position 4 &#124; SMC0 Data 12 &#124; TM0 Timer 4 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.                                              |
| PD_05        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PD Position 5 &#124; SMC0 Data 13 &#124; TM0 Timer 5 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                                                                  |
| PD_06        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PD Position 6 &#124; SMC0 Data 14 &#124; TM0 Timer 6 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                                                                  |
| PD_07        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PD Position 7 &#124; SMC0 Data 15 &#124; TM0 Timer 7 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.                                              |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 25. ADSP-CM40xF Designer Quick Reference (Continued)

| SignalName   | Type   | Driver Type   | Int Term   | Reset Term   | Reset Drive   | Power Domain   | Description and Notes                                                                                                                                                                                                                    |
|--------------|--------|---------------|------------|--------------|---------------|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| PD_08        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PD Position 8 &#124; SMC0 Address 6 &#124; TM0 CommonClock Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.           |
| PD_09        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PD Position 9 &#124; SMC0 Address 7 &#124; TM0 Timer5 Alternate Capture Input Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                            |
| PD_10        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc:PDPosition10&#124;SMC0Address8&#124;TM0Timer4Alternate Capture Input Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                      |
| PD_11        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc:PDPosition11&#124;SMC0Address9&#124;TM0Timer3Alternate Capture Input Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                      |
| PD_12        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc:PDPosition12&#124;SMC0Address10&#124;TM0Timer2Alternate Capture Input Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                     |
| PD_13        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc:PDPosition13&#124;SMC0Address11&#124;TM0Timer1Alternate Capture Input Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers. |
| PD_14        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PD Position 14 &#124; SMC0 Address 12 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                                                    |
| PD_15        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PD Position 15 &#124; SMC0 Address 13 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                                                    |
| PE_00        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PE Position 0 &#124; SMC0 Address 14 &#124; SPORT0 Channel A Clock Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                       |
| PE_01        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PE Position 1 &#124; SMC0 Address 15 &#124; SPORT0 Channel A Frame Sync Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                  |
| PE_02        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc:PEPosition2&#124;SMC0Address16&#124;SPORT0ChannelData0 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.                |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 25. ADSP-CM40xF Designer Quick Reference (Continued)

| SignalName   | Type   | Driver Type   | Int Term   | Reset Term   | Reset Drive   | Power Domain   | Description and Notes                                                                                                                                                                                                                                                                 |
|--------------|--------|---------------|------------|--------------|---------------|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| PE_03        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc:PEPosition3&#124;SMC0Address17&#124;SPORT0ChannelData1 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.                                                             |
| PE_04        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PE Position 4 &#124; SMC0 Address 18 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.                                                                              |
| PE_05        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PE Position 5 &#124; SMC0 Address 19 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.                                                                              |
| PE_06        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PE Position 6 &#124; ETH0 PTP Clock Input &#124;SMC0 Address 20 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.                                                   |
| PE_07        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PE Position 7 &#124; ETH0 PTP Auxiliary Trigger Input &#124; SMC0 Address 21 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.                                      |
| PE_08        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PE Position 8 &#124; ETH0 PTP Pulse-Per-Second Output &#124; SMC0 Address 22 &#124; CNT2 Count Zero Marker Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.        |
| PE_09        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PE Position 9 &#124; ETH0 Carrier Sense &#124; SMC0 Address 23 &#124; CNT2 Count Up and Direction Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.                 |
| PE_10        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PE Position10&#124;ETH0ManagementChannelSerialData &#124; SMC0 Memory Select 1 &#124; CNT2 Count Down and Gate Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                        |
| PE_11        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PE Position 11 &#124; ETH0 Management Channel Clock &#124; SMC0 Address 24 &#124; CNT3 Count Zero Marker Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                              |
| PE_12        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | PORT_INEN and PADS_PCFG0 registers. Desc: PE Position 12 &#124; ETH0 Transmit Data 0 &#124; CNT3 Count Up and Direction Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers. |
| PE_13        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PE Position 13 &#124; ETH0 Transmit Data 1 &#124; CNT3 Count Down and Gate Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.                                        |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 25. ADSP-CM40xF Designer Quick Reference (Continued)

| SignalName   | Type   | Driver Type   | Int Term   | Reset Term   | Reset Drive   | Power Domain   | Description and Notes                                                                                                                                                                                                                                                    |
|--------------|--------|---------------|------------|--------------|---------------|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| PE_14        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PE Position 14 &#124; ETH0 Transmit Enable &#124; CNT1 Output Divider A Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                                                  |
| PE_15        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PE Position 15 &#124; ETH0 Reference Clock &#124; CNT1 Output Divider B Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                                                  |
| PF_00        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PF Position 0 &#124; ETH0 Receive Data 0 &#124; CNT0 Output Divider A Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.                                |
| PF_01        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PF Position 1 &#124; ETH0 Receive Data 1 &#124; CNT0 Output Divider B Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the                                                                    |
| PF_02        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PF Position 2 &#124; USB0 VBUS Control &#124; Embedded Trace Module Data 3 &#124; SMC0 Byte Enable 1 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers. |
| PF_03        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PF Position 3 &#124; SMC0 Output Enable Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.                                                              |
| PF_04        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PF Position 4 &#124; SMC0 Asynchronous Ready Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.                                                         |
| PF_05        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PF Position 5 &#124; SMC0 Address 1 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.                                                                  |
| PF_06        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PF Position 6 &#124; SMC0 Address 2 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.                                                                  |
| PF_07        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PF Position 7 &#124; SMC0 Address 3 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.                                                                  |
| PF_08        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PF Position 8 &#124; SMC0 Address 4 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.                                                                  |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 25. ADSP-CM40xF Designer Quick Reference (Continued)

| SignalName   | Type   | Driver Type   | Int Term   | Reset Term   | Reset Drive   | Power Domain   | Description and Notes                                                                                                                                                                                        |
|--------------|--------|---------------|------------|--------------|---------------|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| PF_09        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PF Position 9 &#124; SMC0 Address 5 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers.      |
| PF_10        | I/O    | A             | pu or none | pu           | none          | VDD_EXT        | Desc: PF Position 10 &#124; SMC0 Byte Enable 0 Notes: By default, the internal termination pull-up is active. The state of pull-ups can be configured by configuring the PORT_INEN and PADS_PCFG0 registers. |
| REFCAP       | a      | na            | none       | none         | none          | VDD_ANA        | Desc: Output of BandGap Generator Filter Node (see recom- mended bypass filter - Figure 4) Notes: No notes.                                                                                                  |
| SMC0_AMS0    | I/O    | A             | pu         | pu           | none          | VDD_EXT        | Desc: SMC0 Memory Select 0 Notes: No notes.                                                                                                                                                                  |
| SMC0_ARE     | I/O    | A             | pu         | pu           | none          | VDD_EXT        | Desc: SMC0 Read Enable                                                                                                                                                                                       |
| SMC0_AWE     | I/O    | A             | pu         | pu           | none          | VDD_EXT        | Desc: SMC0 Write Enable Notes: No notes.                                                                                                                                                                     |
| SYS_BMODE0   | I/O    | na            | none       | none         | none          | VDD_EXT        | Desc: Boot Mode Control 0 Notes: No notes.                                                                                                                                                                   |
| SYS_BMODE1   | I/O    | na            | none       | none         | none          | VDD_EXT        | Desc: Boot Mode Control 1 Notes: No notes.                                                                                                                                                                   |
| SYS_CLKIN    | I/O    | na            | none       | none         | none          | VDD_EXT        | Desc: Clock/Crystal Input Notes: No notes.                                                                                                                                                                   |
| SYS_CLKOUT   | I/O    | na            | pu         | none         | L             | VDD_EXT        | Desc: Processor Clock Output Notes: No notes.                                                                                                                                                                |
| SYS_FAULT    | I/O    | A             | none       | none         | none          | VDD_EXT        | Desc: System Fault Output                                                                                                                                                                                    |
| SYS_HWRST    | I/O    | na            | none       | none         | none          | VDD_EXT        | Notes: Open drain, requires an external pull-up resistor. Desc: Processor Hardware Reset Control Notes: No notes.                                                                                            |
| SYS_NMI      | I/O    | A             | none       | none         | none          | VDD_EXT        | Desc: Non-maskable Interrupt Notes: Requires an external pull-up resistor.                                                                                                                                   |
| SYS_RESOUT   | I/O    | A             | pu         | none         | L             | VDD_EXT        | Desc: Reset Output                                                                                                                                                                                           |
| SYS_XTAL     | a      | na            | none       | none         | none          | VDD_EXT        | Desc: Crystal Output Notes: Leave unconnected if an oscillator is used to provide SYS_CLKIN. Active during reset.                                                                                            |
| TWI0_SCL     | I/O    | B             | none       | none         | none          | VDD_EXT        | Desc: TWI0 Serial Clock Notes: Open drain, requires external pullup resistor. Consult Version 2.1 of the I2C specification for the proper resistor                                                           |
| TWI0_SDA     | I/O    | B             | none       | none         | none          | VDD_EXT        | Desc: TWI0 Serial Data Notes: en drain, requires external pullup resistor. Consult Version 2.1 of the I2C specification for the proper resistor value. If TWI is not used, connect to ground.                |
| USB0_DM      | I/O    | D             | none       | none         | none          | VDD_EXT        | Desc: USB0 Data - Notes: Pull low if not using USB.                                                                                                                                                          |
| USB0_DP      | I/O    | D             | none       | none         | none          | VDD_EXT        | Desc: USB0 Data + Notes: Pull low if not using USB.                                                                                                                                                          |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 25. ADSP-CM40xF Designer Quick Reference (Continued)

| SignalName   | Type   | Driver Type   | Int Term   | Reset Term   | Reset Drive   | Power Domain   | Description and Notes                                                                                                                                                                                                                                                                                                                                       |
|--------------|--------|---------------|------------|--------------|---------------|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| USB0_ID      | I/O    | na            | none       | none         | none          | VDD_EXT        | Desc: USB0 OTG ID Notes: If USB is not used, connect to ground.                                                                                                                                                                                                                                                                                             |
| USB0_VBUS    | I/O    | E             | none       | none         | none          | VDD_EXT        | Desc: USB0 Bus Voltage Notes: If USB is not used, pull low.                                                                                                                                                                                                                                                                                                 |
| VDD_ANA0     | s      | na            | none       | none         | none          | na             | Desc: Analog Power Supply Voltage 3.13 V to 3.47 V (see recommended bypass - Figure 4) Notes: No notes.                                                                                                                                                                                                                                                     |
| VDD_ANA1     | s      | na            | none       | none         | none          | na             | Desc: Analog Power Supply Voltage 3.13 V to 3.47 V (see recommended bypass - Figure 4) Notes: No notes.                                                                                                                                                                                                                                                     |
| VDD_EXT      | s      | na            | none       | none         | none          | na             | Desc: External Voltage Domain Notes: No notes.                                                                                                                                                                                                                                                                                                              |
| VDD_INT      | s      | na            | none       | none         | none          | na             | Desc: Internal Voltage Domain Notes: No notes.                                                                                                                                                                                                                                                                                                              |
| VDD_VREG     | s      | na            | none       | none         | none          | na             | Desc: VREG Supply Voltage Notes: No notes.                                                                                                                                                                                                                                                                                                                  |
| VREF0        | a      | na            | none       | none         | none          | na             | Desc: Voltage Reference for ADC0. Default configuration is Output (see recommended bypass - Figure 4) Notes: When using internal ADC reference, this pin should neverbeloadedwithresistiveorinductiveloadorconnected to anything but the recommended capacitor. When using external ADC reference, connect to externally generated reference voltage supply |
| VREF1        | a      | na            | none       | none         | none          | na             | Desc: Voltage Reference for ADC1. Default configuration is Output (see recommended bypass - Figure 4) Notes: When using internal ADC reference, this pin should neverbeloadedwithresistiveorinductiveloadorconnected to anything but the recommended capacitor. When using external ADC reference, connect to externally generated reference voltage supply |
| VREG_BASE    | a      | na            | none       | none         | none          | na             | Desc: Voltage Regulator Base Node Notes: When unused, connect to GNDor pull low                                                                                                                                                                                                                                                                             |

## ADSP-CM403F/CM407F/CM408F/CM409F

## SPECIFICATIONS

For information about product specifications, contact your Analog Devices representative.

## OPERATING CONDITIONS

| Parameter    |                                 | Conditions        | Min             |   Nominal | Max             | Unit   |
|--------------|---------------------------------|-------------------|-----------------|-----------|-----------------|--------|
| V DD_INT     | Digital Internal Supply Voltage | f CCLK ≤ 240 MHz  | 1.14            |      1.20 | 1.26            | V      |
| V DD_EXT 1   | Digital External Supply Voltage |                   | 3.13            |      3.30 | 3.47            | V      |
| V DD_ANA 1   | Analog Supply Voltage           |                   | 3.13            |      3.30 | 3.47            | V      |
| V IH 2       | High Level Input Voltage        | V DD_EXT = 3.47 V | 2.0             |           |                 | V      |
| V IH_CLKIN 3 | High Level Input Voltage        | V DD_EXT = 3.47 V | 2.2             |           |                 | V      |
| V IHTWI 4, 5 | High Level Input Voltage        | V DD_EXT = 3.47 V | 0.7 × V VBUSTWI |           | V VBUSTWI       | V      |
| V IL 2       | Low Level Input Voltage         | V DD_EXT = 3.13 V |                 |           | 0.8             | V      |
| V ILTWI 4, 5 | Low Level Input Voltage         | V DD_EXT = 3.13 V |                 |           | 0.3 × V VBUSTWI | V      |
| T J          | Junction Temperature            |                   | -40             |           | +125            | °C     |

## Table 26. TWI0VSEL 1  Settings and VDD\_EXT/VBUSTWI

|          |                  | V BUSTWI   | V BUSTWI   | V BUSTWI   |      |
|----------|------------------|------------|------------|------------|------|
| TWI0VSEL | V DD_EXT Nominal | Min        | Nominal    | Max        | Unit |
| 0 2      | 3.30             | 3.13       | 3.30       | 3.47       | V    |
| 0        | 3.30             | 4.75       | 5.00       | 5.25       | V    |

## Clock Related Operating Conditions

Table 27 describes the core clock, system clock, and peripheral clock timing requirements. The data presented in the tables applies to all speed grades found in the Ordering Guide except where expressly noted. Figure 10 provides a graphical representation of the various clocks and their available multiplier or divider values.

Figure 10. Clock Relationships and Divider Values

<!-- image -->

Table 27. Clock Related Operating Conditions

| Parameter        |                                                            | Restriction              |   Min | Typ   |   Max | Unit   |
|------------------|------------------------------------------------------------|--------------------------|-------|-------|-------|--------|
| f PLLCLK         | PLL Clock Frequency                                        |                          |   250 |       |   960 | MHz    |
| f CCLK           | Core Clock Frequency                                       | f CCLK ≥ f SCLK          |       |       |   240 | MHz    |
| f SCLK           | SCLK Frequency 1, 2                                        |                          |       |       |   100 | MHz    |
| f USBCLK         | USBCLK Frequency 3, 4                                      | f SCLK ≥ f USBCLK        |       |       |    60 | MHz    |
| f OCLK           | Output Clock Frequency                                     |                          |       |       |    50 | MHz    |
| f TCK            | JTG_TCK Frequency                                          | f TCK ≤ f SCLK /2        |       |       |    50 | MHz    |
| f SYS_CLKOUTJ    | SYS_CLKOUT Period Jitter 5, 6                              |                          |       | ±1    |       | %      |
| f ADCC_ACLK_PROG | Programmed ADCC ADC0 (A) Clock                             |                          |       |       |    50 | MHz    |
| f ADCC_BCLK_PROG | Programmed ADCC ADC1 (B) Clock                             |                          |       |       |    50 | MHz    |
| f DACC_ACLK_PROG | Programmed DACC DAC0 (A) Clock                             |                          |       |       |    50 | MHz    |
| f DACC_BCLK_PROG | Programmed DACC DAC1 (B) Clock                             |                          |       |       |    50 | MHz    |
| f SPTCLKPROG     | ProgrammedSPTClockWhenTransmitting Data and Frame Sync     |                          |       |       |    50 | MHz    |
| f SPTCLKPROG     | Programmed SPT Clock When Receiving Data and Frame Sync    |                          |       |       |    50 | MHz    |
| f SPTCLKEXT      | ExternalSPTClockWhenTransmittingData and Frame Sync 7, 8   | f SPTCLKEXT ≤ f SCLK     |       |       |    50 | MHz    |
| f SPTCLKEXT      | External SPT Clock When Receiving Data and Frame Sync 7, 8 | f SPTCLKEXT ≤ f SCLK     |       |       |    50 | MHz    |
| f SPICLKPROG     | Programmed SPI Clock WhenTransmitting Data 7, 8            |                          |       |       |    50 | MHz    |
| f SPICLKPROG     | Programmed SPI Clock When Receiving Data                   |                          |       |       |    50 | MHz    |
| f SPICLKEXT      | External SPI Clock When Transmitting Data 7, 8             | f SPICLKEXT ≤ f SCLK     |       |       |    50 | MHz    |
| f SPICLKEXT      | External SPI Clock When Receiving Data 7, 8                | f SPICLKEXT ≤ f SCLK     |       |       |    50 | MHz    |
| f TMRCLKEXT      | External TMR Clock                                         | f TMRCLKEXT ≤ f SCLK /4  |       |       |    25 | MHz    |
| f SINCLKPROG     | Programmed SINC Clock                                      | f SINCLKPROG ≤ f SCLK /4 |       |       |    20 | MHz    |
| f REFCLKEXT      | External Ethernet MACClock                                 | f REFCLKEXT ≤ f SCLK     |       |       |    50 | MHz    |

## ADSP-CM403F/CM407F/CM408F/CM409F

## ADSP-CM403F/CM407F/CM408F/CM409F

## ELECTRICAL CHARACTERISTICS

| Parameter      | Parameter                                        | Conditions                                                                               |   Min | Typ           | Max                      | Unit   |
|----------------|--------------------------------------------------|------------------------------------------------------------------------------------------|-------|---------------|--------------------------|--------|
| V OH 1         | High Level Output Voltage                        | V DD_EXT = 3.13 V, I OH = -0.5mA                                                         |   2.4 |               |                          | V      |
| V OL 2         | Low Level Output Voltage                         | V DD_EXT = 3.13 V, I OL = 2.0mA                                                          |       |               | 0.4                      | V      |
| I IH 3         | High Level Input Current                         | V DD_EXT =3.47 V, V IN = 3.47 V                                                          |       |               | 10                       | µA     |
| I IL 3         | Low Level Input Current                          | V DD_EXT =3.47 V, V IN = 0 V                                                             |       |               | 10                       | µA     |
| I IH_PD 4      | High Level Input Current With Pull-down Resistor | V DD_EXT = 3.47 V, V IN = 3.47 V                                                         |    25 |               | 100                      | µA     |
| I IL_PU 5      | Low Level Input Current With Pull-up Resistor    | V DD_EXT = 3.47 V, V IN = 0 V                                                            |    25 |               | 100                      | µA     |
| I IL_USB0 6    | Low Level Input Current                          | V DD_EXT = 3.47 V, V IN = 0 V                                                            |       |               | 200                      | µA     |
| I OZH 7        | Three-State Leakage Current                      | V DD_EXT = 3.47 V, V IN = 3.47 V                                                         |       |               | 10                       | µA     |
| I OZL_PU 8     | Three-StateLeakageCurrentWithPull- up Resistor   | V DD_EXT = 3.47 V, V IN = 0 V                                                            |    25 |               | 100                      | µA     |
| I OZHTWI 9     | Three-State Leakage Current                      | V DD_EXT =3.47 V, V IN = 5.5 V                                                           |       |               | 10                       | µA     |
| I OZL 7        | Three-State Leakage Current                      | V DD_EXT = 3.47 V, V IN = 0 V                                                            |       |               | 10                       | µA     |
| C IN 10        | Input Capacitance                                | T J = 25°C                                                                               |       | 4.2           | 5.2                      | pF     |
| C IN_TWI 9     | Input Capacitance                                | T J = 25°C                                                                               |       | 8.3           | 8.6                      | pF     |
| I DDINT_STATIC | V DD_INT Static Current                          | f CCLK = 0MHz f SCLK = 0 MHz                                                             |       | See Figure 11 |                          | mA     |
| I DD_IDLE      | V DD_INT Current in Idle                         | f CCLK = 200MHz ASF = 0.31 (idle), f SCLK = 100 MHz No DMAactivity T J = 25°C            |       | 59            |                          | mA     |
| I DD_TYP       | V DD_INT Current                                 | f CCLK = 200MHz ASF = 1.0 (typical), f SCLK = 100 MHz DMAdata rate = 100 MB/s T J = 25°C |       | 97            |                          | mA     |
| I DD_TYP       | V DD_INT Current                                 | f CCLK = 240MHz ASF = 1.0 (typical), f SCLK = 96 MHz DMAdata rate = 100 MB/s T J = 25°C  |       | 104           |                          | mA     |
| I DD_INT       | V DD_INT Current                                 | f CCLK > 0MHz f SCLK ≥ 0 MHz                                                             |       |               | See I DDINT_TOT equation | mA     |
| I DD_EXT       | V DD_EXT Current                                 |                                                                                          |       |               | See I DDEXT_TOT equation | mA     |
| I DD_ANA       | V DD_ANA0 + V DD_ANA1 Current                    |                                                                                          |    60 |               | 70                       | mA     |

## Total Power Dissipation (PD)

Total power dissipation is the sum of power dissipation for each VDD domain, shown in the following equation.

<!-- formula-not-decoded -->

where:

PD\_INT = VDD\_INT × I DD\_INT -Internal voltage domain power dissipation

PD\_ANA = VDD\_ANA × IDD\_ANA -Analog 3.3 V voltage domain power dissipation

PD\_EXT = VDD\_EXT × I DD\_EXT -Digital 3.3 V voltage domain power dissipation

## Total External Power Dissipation (IDD\_EXT)

There are three different items that contribute to the digital 3.3 V supply power dissipation: I/O switching, flash subsystem (internal flash), and analog subsystem (digital portion), shown in the following equation.

<!-- formula-not-decoded -->

I DDEXT\_IO/ANA (mA) = Σ{ VDD\_EXT × CL f /2 × ( O × TR ) × U }-I/O switching current

The I/O switching current is the sum of the switching current for all of the enabled peripherals. For each peripheral the capacitive load of each pin in Farads (CL), operating frequency in MHz (f), number of output pins (O), toggle ratio for each pin (TR), and peripheral utilization (U) are considered.

I DDEXT\_FLASH (mA) = 25 mA (maximum flash subsystem current )

## Total Processor Internal Power Dissipation (IDD\_INT)

Many operating conditions affect power dissipation, including temperature, voltage, operating frequency, and processor activity. Total internal power dissipation for the processor subsystem has two components:

1. Static, including leakage current
2. Dynamic, due to transistors switching characteristics for each clock domain. Application-dependent currents, clock currents, and data transmission currents all contribute to dynamic power dissipation.

The following equation describes the internal current consumption.

<!-- formula-not-decoded -->

## Static Current

I DDINT\_STATIC is the current present in the device with all clocks stopped. IDDINT\_STATIC is specified as a function of temperature (see Figure 11).

## ADSP-CM403F/CM407F/CM408F/CM409F

Figure 11. Static Current -I DDINT\_STATIC (mA)

<!-- image -->

## Core Clock Application-Dependent Current

Core clock (CCLK) use is subject to an activity scaling factor (ASF) that represents application code running on the processor core and L1 memory (Table 28). The ASF is combined with the CCLK frequency to calculate this portion.

I DDINT\_CCLK\_DYN (mA) = 0.192 × f CCLK (MHz) × ASF × VDD\_INT (V)

## Table 28. Activity Scaling Factors (ASF)

| I DD_INT Power Vector   |   ASF |
|-------------------------|-------|
| I DD-PEAK               |  1.85 |
| I DD-COREMARK (typical) |   1.0 |
| I DD-IDLE               |  0.31 |

## System Clock Current

The power dissipated by the system clock domain is dependent on operating frequency and a unique scaling factor.

I DDINT\_SCLK\_DYN (mA) = 0.308 × f SCLK (MHz) × VDD\_INT (V)

## Data Transmission Current

The data transmission current represents the power dissipated when transmitting data. This current is expressed in terms of data rate. The calculation is performed by adding the data rate (MB/s) of each DMA and core driven access to peripherals and L2/external memory. This number is then multiplied by a coefficient. The following equation provides an estimate of all data transmission current.

IDDINT\_DMA\_DR\_DYN (mA) = 0.0475 × data rate (MB/s) × VDD\_INT (V)

## ADSP-CM403F/CM407F/CM408F/CM409F

## ADC/DAC SPECIFICATIONS

## ADC Specifications

Typical values assume VDD\_ANA = 3.3 V, VREF = 2.5 V.

| Parameter                         |   Min | Typ         | Max   | Unit   | Conditions                                                              |
|-----------------------------------|-------|-------------|-------|--------|-------------------------------------------------------------------------|
| ANALOG INPUT                      |       |             |       |        | ADC0_V IN, 00-11 , ADC1_V IN, 00-11                                     |
| Requirement                       |       |             |       |        |                                                                         |
| Single-Ended Input Voltage Range  |     0 | 2.5         | 2.75  | V      | For input voltage >2.5 V,mustuseexternal voltage reference (input mode) |
| Characteristic                    |       |             |       |        |                                                                         |
| DCLeakage Current                 |       |             | ±1    | μA     |                                                                         |
| Input Resistance                  |       | 85          |       | Ω      | See Figure 5                                                            |
| Input Capacitance                 |       | 9.0         |       | pF     | Condition 1 = track, See Figure 5 parasitic                             |
|                                   |       | 1.5         |       | pF     | Condition 2 = hold, includes all capacitances, See Figure 5             |
| VOLTAGE REFERENCE (OUTPUT MODE)   |       |             |       |        | V REF0 , V REF1                                                         |
| Characteristic                    |       |             |       |        |                                                                         |
| Output Voltage                    |       | 2.5 ± 0.25% |       | V      |                                                                         |
| Output Voltage Thermal Hysteresis |       | 50          |       | ppm    |                                                                         |
| Output Impedance                  |       | 0.5         | 1.0   | Ω      |                                                                         |
| Temperature Coefficient           |       | 20          |       | ppm/°C | T J = -40°C to +125°C                                                   |
| VOLTAGE REFERENCE (INPUT MODE)    |       |             |       |        | V REF0 , V REF1                                                         |
| Requirement                       |       |             |       |        |                                                                         |
| Input Voltage Range               |     0 | 2.5         | 2.75  | V      | Requires 750 μA capable source current                                  |
| DCLeakage Current                 |       |             | 300   | μA     |                                                                         |
| Input Capacitance                 |       | 0.6         |       | pF     |                                                                         |
| STATIC PERFORMANCE                |       |             |       |        |                                                                         |
| DC ACCURACY                       |       |             |       |        | ADC0_V IN, 00-11 , ADC1_V IN, 00-11                                     |
| Characteristic                    |       |             |       |        |                                                                         |
| Resolution                        |       | 16          |       | Bits   | No missing codes, natural binary coding                                 |
| ADSP-CM403F/ADSP-CM408F/          |       |             |       |        |                                                                         |
| ADSP-CM409F                       |       |             |       |        |                                                                         |
| Differential Nonlinearity (DNL)   | -0.99 |             | +1.5  | LSB    | See Figure 12                                                           |
| Integral Nonlinearity (INL)       |       | ±3.0        | ±5.0  | LSB    |                                                                         |
| Offset Error                      |       | ±5.0        | ±10   | LSB    |                                                                         |
| Offset Error Match                |       | ±2.0        |       | LSB    | Channel-to-channel, within one ADC                                      |
| Offset Drift                      |       | ±2.0        |       | ppm/°C |                                                                         |
| Gain Error                        |       | ±32         | ±250  | LSB    |                                                                         |
| Gain Error Match                  |       | ±2.0        |       | LSB    |                                                                         |
| ADSP-CM407F                       |       |             |       |        |                                                                         |
| Differential Nonlinearity (DNL)   | -0.99 |             | +2.0  | LSB    | See Figure 12                                                           |
| Integral Nonlinearity (INL)       |       | ±10.0       | ±12.0 | LSB    |                                                                         |
| Offset Error                      |       | ±10.0       | ±12.0 | LSB    |                                                                         |
| Offset Error Match                |       | ±2.0        |       | LSB    | Channel-to-channel, within one ADC                                      |
| Offset Drift                      |       | ±2.0        |       | ppm/°C |                                                                         |
| Gain Error                        |       | ±64         | ±300  | LSB    |                                                                         |
| Gain Error Match                  |       | ±2.0        |       | LSB    |                                                                         |

## ADSP-CM403F/CM407F/CM408F/CM409F

| Parameter                                      |   Min |   Typ |   Max | Unit   | Conditions                                                                                 |
|------------------------------------------------|-------|-------|-------|--------|--------------------------------------------------------------------------------------------|
| DYNAMIC PERFORMANCE                            |       |       |       |        |                                                                                            |
| Throughput                                     |       |       |  2.63 |        | ADC0_V IN, 00-11 , ADC1_V IN, 00-11                                                        |
| Conversion Rate                                |       |       |       | MSPS   |                                                                                            |
| Acquisition time AC ACCURACY                   |       |   150 |       | ns     | ADC0_V IN, 00-11 , ADC1_V IN, 00-11                                                        |
| Characteristic                                 |       |       |       |        |                                                                                            |
| 1                                              |       |       |       |        |                                                                                            |
| Signal-to-Noise Ratio (SNR)                    | 80.25 | 81.25 |       | dB     |                                                                                            |
| Signal-to-(Noise + Distortion) Ratio (SINAD) 1 |    80 |    81 |       | dB     |                                                                                            |
| Total Harmonic Distortion (THD) 1              |       |   -92 |       | dB     |                                                                                            |
| Spurious-Free Dynamic Range (SFDR) 1           |       |    90 |       | dBc    |                                                                                            |
| Dynamic Range                                  |    82 |    83 |       | dB     | V IN = V REF /2 (dc)                                                                       |
| Effective Number of Bits (ENOB)                |  13.0 |  13.2 |       | Bits   |                                                                                            |
| ADSP-CM407F                                    |       |       |       |        |                                                                                            |
| Signal-to-Noise Ratio (SNR) 1                  |    73 |    74 |       | dB     |                                                                                            |
| Signal-to-(Noise + Distortion) Ratio (SINAD) 1 |    72 |    73 |       | dB     |                                                                                            |
| Total Harmonic Distortion (THD) 1              |       |   -88 |       | dB     |                                                                                            |
| Spurious-Free Dynamic Range (SFDR) 1           |       |    88 |       | dBc    |                                                                                            |
| Dynamic Range                                  |  74.5 |  75.5 |       | dB     | V IN = V REF /2 (dc)                                                                       |
| Effective Number of Bits (ENOB)                |  11.6 |  11.8 |       | Bits   |                                                                                            |
| Channel-to-Channel Isolation                   |       |   -95 |       | dB     | Any channel pair referencedonsameADC Selected channel = 1 kHz, unselected channel = 10 kHz |
| ADC-to-ADC Isolation                           |       |  -100 |       | dB     | Any channel pair referenced on opposite ADC                                                |

1 fIN = 1 kHz, 0 V to 2.5 V input, 2.63 MSPS.

## ADSP-CM403F/CM407F/CM408F/CM409F

## DAC Specifications

Typical values assume VDD\_ANA = 3.3 V, VREF = 2.5 V.

| Parameter                                    | Min   | Typ        | Max        | Unit   | Conditions                                                         |
|----------------------------------------------|-------|------------|------------|--------|--------------------------------------------------------------------|
| ANALOG OUTPUT                                |       |            |            |        | DAC0_VOUT, DAC1_VOUT                                               |
| Characteristic                               |       |            |            |        |                                                                    |
| Output Voltage Range                         |       | 0.1 to 2.5 |            | V      |                                                                    |
| Output Impedance                             |       | 0.6 2 10   |            | Ω Ω Ω  | Normal operation DAC @full scale DAC @zero scale                   |
| Update Rate                                  |       |            | 50         | kHz    |                                                                    |
| Short Circuit Current toGND                  |       |            |            | mA     |                                                                    |
|                                              |       | 30         |            |        |                                                                    |
| Short Circuit Current to V DD                |       | 30         |            | mA     |                                                                    |
| STATIC PERFORMANCE                           |       |            |            |        |                                                                    |
| DC ACCURACY                                  |       |            |            |        | R L = 500 Ω, C L = 100 pF                                          |
| Characteristic                               |       |            |            |        |                                                                    |
| Resolution                                   |       | 12         |            | Bits   |                                                                    |
| Differential Nonlinearity (DNL)              |       | ±0.99      | -0.99/+1.2 | LSB    | Guaranteed monotonic                                               |
| Integral Nonlinearity (INL)                  |       | ±2.0       | ±3.5       | LSB    |                                                                    |
| Offset Error                                 |       | ±1.0       |            | mV     | Measured at Code 0x000                                             |
| Gain Error                                   |       | ±4.0       |            | %FSR   | %of full scale, measured at Code 0xFFF                             |
| DCIsolation                                  |       |            | 50         | uV     | Static output of DAC0_VOUT while DAC1_VOUT toggles 0 to full scale |
| DYNAMIC PERFORMANCE                          |       |            |            |        |                                                                    |
| AC ACCURACY                                  |       |            |            |        | R L = 500 Ω, C L = 100 pF                                          |
| Characteristic                               |       |            |            |        |                                                                    |
| Signal-to-Noise Ratio (SNR)                  |       | 67         | 65         | dB     |                                                                    |
| Signal-to-(Noise + Distortion) Ratio (SINAD) |       | 62         | 59         | dB     |                                                                    |
| Total Harmonic Distortion                    |       | 63         |            | dB     |                                                                    |
| Dynamic Range                                |       | 68         |            | dB     |                                                                    |
| Settling Time                                |       | 1.5        |            | μs     | From ¼to ¾full scale                                               |
| Slew Rate                                    |       | 1.5        |            | V/μs   |                                                                    |
| D/A Glitch Energy                            |       | 8          |            | nV-s   | Measured when code changes from 0x7FF to 0x800                     |

## ADSP-CM403F/CM407F/CM408F/CM409F

## ADC Typical Performance Characteristics

VDD\_ANA = 3.3 V, VREF = 2.5 V, TJ = 25°C, unless otherwise noted.

<!-- image -->

Figure 12. DNL vs. Code

<!-- image -->

Figure 13. Histogram of DC Input at Code Center (Internal Reference)

<!-- image -->

Figure 14. SINAD vs. Frequency, 0 V to 2.5 V Sine Wave Input

Figure 15. SINAD vs. Frequency, 0 V to 1.25 V Sine Wave Input

<!-- image -->

Figure 16. FFT Plot (Internal Reference)

<!-- image -->

## ADSP-CM403F/CM407F/CM408F/CM409F

<!-- image -->

Figure 17. THD vs. Frequency, 0 V to 2.5 V Sine Wave Input

<!-- image -->

Figure 18. THD vs. Frequency, 0 V to 1.25 V Sine Wave Input

Figure 19. ADC SINAD vs. Temperature, 0 V to 2.5 V (1 kHz) Sine Wave Input

<!-- image -->

Figure 20. ADC THD vs. Temperature, 0 V to 2.5 V (1 kHz) Sine Wave Input

<!-- image -->

## DAC Typical Performance Characteristics

VDD\_ANA = 3.3 V, VREF = 2.5 V, TJ = 25°C, unless otherwise noted.

Figure 21. DAC DNL Error vs. Code

<!-- image -->

Figure 22. DAC INL Error vs. Code

<!-- image -->

## FLASH SPECIFICATIONS

The Flash features include:

- 100,000 ERASE cycles per sector
- 20 years data retention

## Flash PROGRAM/ERASE SUSPEND Command

Table 29 lists parameters for the Flash suspend command.

## Table 29. Suspend Parameters

| Parameter                | Conditions                                                        |   Typ 1 | Max   | Unit   |
|--------------------------|-------------------------------------------------------------------|---------|-------|--------|
| Resume to Next Suspend 2 | Program resume to program suspend. Erase resume to erase suspend. |     400 |       | µs     |
| Suspend Latency          | Suspend to read ready                                             |     100 |       | µs     |

## Flash AC Characteristics and Operating Conditions

Table 30 identifies Flash specific operating conditions.

Table 30. AC Characteristics and Operating Conditions

| Parameter                                                                   | Symbol   | Min   |   Typ 1 |   Max | Unit   |
|-----------------------------------------------------------------------------|----------|-------|---------|-------|--------|
| Clock Frequency for All Commands other than Read (SPI-ER, QIO-SPI Protocol) | f C      | DC    |         |   100 | MHz    |
| Clock Frequency for Read Commands                                           | f R      | DC    |         |    50 | MHz    |
| Write Status Register Time                                                  | t W      |       |       2 |    15 | ms     |
| Page Program Cycle Time (256 bytes)                                         | t PP     |       |     0.2 |   0.8 | ms     |
| Sector Erase Cycle Time (4 K byte)                                          | t SE     |       |      70 |   300 | ms     |
| Block Erase Time (32 K byte)                                                | t BCKE   |       |     0.1 |   0.5 | sec    |
| Bulk Erase Cycle Time (16 Mb)                                               | t BE     |       |       4 |    12 | sec    |

## ADSP-CM403F/CM407F/CM408F/CM409F

## ADSP-CM403F/CM407F/CM408F/CM409F

## ABSOLUTE MAXIMUM RATINGS

Stresses at or above those listed in Table 31 may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

Table 31. Absolute Maximum Ratings

| Parameter                                 | Rating                      |
|-------------------------------------------|-----------------------------|
| Internal Supply Voltage (V DD_INT )       | -0.33 V to +1.32 V          |
| External (I/O) Supply Voltage (V DD_EXT ) | -0.33 V to +3.63 V          |
| Analog Supply Voltage (V DD_ANA )         | -0.33 V to +3.63 V          |
| Digital Input Voltage 1, 2                | -0.33 V to +3.63 V          |
| TWI Digital Input Voltage 1, 2, 3         | -0.33 V to +5.50 V          |
| Digital Output Voltage Swing              | -0.33 V to V DD_EXT + 0.5 V |
| Analog Input Voltage 4                    | -0.33 V to +3.63 V          |
| Voltage Reference Input Voltage           | -0.33 V to +2.75 V          |
| USB0_Dx Input                             | -0.33 V to +5.25 V          |
| USB0_VBUS Input Voltage                   | -0.33 V to +6.00 V          |
| I OH /I OL Current per Signal 1           | 6 mA(max)                   |
| Storage Temperature Range                 | -65°C to +150°C             |
| Junction Temperature While Biased         | +125°C                      |

Table 32. Maximum Duty Cycle for Input Transient Voltage 1

|   MaximumDutyCycle (%) 2 |   V IN Min (V) 3 |   V IN Max(V) 3 |
|--------------------------|------------------|-----------------|
|                      100 |            -0.33 |           +3.63 |
|                       50 |            -0.46 |           +3.78 |
|                       40 |            -0.52 |           +3.85 |
|                       25 |            -0.63 |           +3.96 |
|                       20 |            -0.67 |           +3.99 |
|                       15 |            -0.70 |           +4.03 |
|                       10 |            -0.73 |           +4.07 |

## ESD SENSITIVITY

<!-- image -->

ESD  (electrostatic  discharge)  sensitive  device. Charged  devices  and  circuit  boards  can  discharge without detection. Although  this product features patented  or  proprietary  protection  circuitry,  damage may  occur  on  devices  subjected  to  high  energy  ESD. Therefore, proper ESD precautions should be taken to avoid  performance  degradation or loss of functionality.

## TIMING SPECIFICATIONS

Specifications are subject to change without notice.

## Clock and Reset Timing

Table 33 and Figure 23 describe clock and reset operations related to the clock generation unit (CGU) and reset control unit (RCU). Per the CCLK, SCLK, USBCLK, and OCLK timing specifications in Table 27 (Clock Related Operating Conditions), combinations of SYS\_CLKIN and clock multipliers must not select clock rates in excess of the processor's maximum instruction rate.

## Table 33. Clock and Reset Timing

| Parameter           |                                                          | Min Max     | Unit   |
|---------------------|----------------------------------------------------------|-------------|--------|
| Timing Requirements |                                                          |             |        |
| f CKIN              | SYS_CLKIN Frequency (Using a Crystal) 1, 2, 3            | 20 50       | MHz    |
| f CKIN              | SYS_CLKIN Frequency (Using a Crystal Oscillator) 1, 2, 3 | 20 60       | MHz    |
| t CKINL             | SYS_CLKIN Low Pulse 1                                    | 6.67        | ns     |
| t CKINH             | SYS_CLKIN High Pulse 1                                   | 6.67        | ns     |
| t WRST              | SYS_HWRST Asserted Pulse Width Low 4                     | 11 × t CKIN | ns     |

Figure 23. Clock and Reset Timing

<!-- image -->

## ADSP-CM403F/CM407F/CM408F/CM409F

## ADSP-CM403F/CM407F/CM408F/CM409F

## Power-Up Reset Timing

Table 34 and Figure 24 show the relationship between power supply startup and processor reset timing, related to the clock generation unit (CGU) and reset control unit (RCU). In Figure 24, VDD\_SUPPLIES are VDD\_INT, VDD\_EXT, VDD\_VREG, VDD\_ANA0, and VDD\_ANA1.

## Table 34. Power-Up Reset Timing

Figure 24. Power-Up Reset Timing

| Parameter          | Parameter                                                                                                                                           | Min         | Max   | Unit   |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------|--------|
| Timing Requirement | Timing Requirement                                                                                                                                  |             |       |        |
| t RST_IN_PWR       | SYS_HWRST and JTG_TRST Deasserted after V DD_INT , V DD_EXT , V DD_VREG , V DD_ANA0 , V DD_ANA1 , and SYS_CLKIN are Stable and Within Specification | 11 × t CKIN |       | ns     |

<!-- image -->

## Asynchronous Read

Table 35 and Figure 25 show asynchronous memory read timing, related to the static memory controller (SMC).

Table 35. Asynchronous Memory Read (BxMODE = b#00)

| Parameter                 |                                                 | Min Max                            |                             | Unit   |
|---------------------------|-------------------------------------------------|------------------------------------|-----------------------------|--------|
| Timing Requirements       | Timing Requirements                             |                                    |                             |        |
| t SDATARE                 | DATA in Setup Before SMC0_ARE High              | 8.2                                |                             | ns     |
| t HDATARE                 | DATA in Hold After SMC0_ARE High                | 0                                  |                             | ns     |
| t DARDYARE                | SMC0_ARDY Valid After SMC0_ARE Low 1, 2         |                                    | (RAT - 2.5) × t SCLK - 17.5 | ns     |
| Switching Characteristics | Switching Characteristics                       |                                    |                             |        |
| t ADDRARE                 | SMC0_Ax/SMC0_AMSx Assertion Before              | (PREST + RST + PREAT) × t SCLK - 3 |                             | ns     |
| t AOEARE                  | SMC0_AOE Assertion Before SMC0_ARE Low          | (RST + PREAT) × t SCLK - 3         |                             | ns     |
| t HARE                    | Output 4 Hold After SMC0_ARE High 5             | RHT × t SCLK -2                    |                             | ns     |
| t WARE                    | SMC0_ARE Active Low Width 6                     | RAT × t SCLK - 2                   |                             | ns     |
| t DAREARDY                | SMC0_ARE High Delay After SMC0_ARDY Assertion 1 | 2.5 × t SCLK                       | 3.5 × t SCLK + 17.5         | ns     |

Figure 25. Asynchronous Read

<!-- image -->

## ADSP-CM403F/CM407F/CM408F/CM409F

## ADSP-CM403F/CM407F/CM408F/CM409F

## Asynchronous Flash Read

Table 36 and Figure 26 show asynchronous flash memory read timing, related to the static memory controller (SMC).

## Table 36. Asynchronous Flash Read

| Parameter                 | Min                                                         | Max                | Unit   |
|---------------------------|-------------------------------------------------------------|--------------------|--------|
| Switching Characteristics | Switching Characteristics                                   |                    |        |
| t AMSADV                  | SMC0_Ax (Address)/SMC0_AMSx Assertion Before SMC0_AOE Low 1 | PREST × t SCLK - 2 | ns     |
| t WADV                    | SMC0_AOE Active Low Width 2                                 | RST × t SCLK - 3   | ns     |
| t DADVARE                 | SMC0_ARE Low Delay From SMC0_AOE High 3                     | PREAT × t SCLK - 3 | ns     |
| t HARE                    | Output 4 Hold After SMC0_ARE High 5                         | RHT × t SCLK - 2   | ns     |
| t WARE 6                  | SMC0_ARE Active Low Width 7                                 | RAT × t SCLK - 2   | ns     |

Figure 26. Asynchronous Flash Read

<!-- image -->

## Asynchronous Page Mode Read

Table 37 and Figure 27 show asynchronous memory page mode read timing, related to the static memory controller (SMC).

Table 37. Asynchronous Page Mode Read

| Parameter                 | Min                                                                |                                          | Unit   |
|---------------------------|--------------------------------------------------------------------|------------------------------------------|--------|
| Switching Characteristics | Switching Characteristics                                          |                                          |        |
| t AV                      | SMC0_Ax (Address) Valid for First Address Min Width 1              | (PREST + RST + PREAT + RAT) × t SCLK - 2 | ns     |
| t AV1                     | SMC0_Ax (Address) Valid for Subsequent SMC0_Ax (Address) Min Width | PGWS×t SCLK - 2                          | ns     |
| t WADV                    | SMC0_AOE Active Low Width 2                                        | RST × t SCLK - 3                         | ns     |
| t HARE                    | Output 3 Hold After SMC0_ARE High 4                                | RHT × t SCLK - 2                         | ns     |
| t WARE 5                  | SMC0_ARE Active Low Width 6                                        | RAT × t SCLK - 2                         | ns     |

Figure 27. Asynchronous Page Mode Read

<!-- image -->

## ADSP-CM403F/CM407F/CM408F/CM409F

## ADSP-CM403F/CM407F/CM408F/CM409F

## Asynchronous Write

Table 38 and Figure 28 show asynchronous memory write timing, related to the static memory controller (SMC).

## Table 38. Asynchronous Memory Write (BxMODE = b#00)

| Parameter    | Min                                               | Max                                  | Unit   |
|--------------|---------------------------------------------------|--------------------------------------|--------|
| Timing       | Requirement                                       |                                      |        |
| t DARDYAWE 1 | SMC0_ARDY Valid After SMC0_AWE Low 2              | (WAT - 2.5) × t SCLK - 17.5          | ns     |
| Switching    | Characteristics                                   |                                      |        |
| t ENDAT      | DATA Enable After SMC0_AMSx Assertion             | -3                                   | ns     |
| t DDAT       | DATA Disable After SMC0_AMSx Deassertion          | 3                                    | ns     |
| t AMSAWE     | SMC0_Ax/SMC0_AMSx Assertion Before SMC0_AWE Low 3 | (PREST + WST + PREAT) × t SCLK - 6.4 | ns     |
| t HAWE       | Output 4 Hold After SMC0_AWE High 5               | WHT×t SCLK - 2                       | ns     |
| t WAWE 6     | SMC0_AWE Active Low Width 2                       | WAT × t SCLK - 2                     | ns     |
| t DAWEARDY 1 | SMC0_AWE High Delay After SMC0_ARDY Assertion 2.5 | × t SCLK 3.5 × t SCLK + 17.5         | ns     |

4

Output signals are DATA, SMC0\_Ax, SMC0\_AMSx, SMC0\_ABEx.

5 WHT value set using the SMC\_BxTIM.WHT bits.

6 SMC\_BxCTL.ARDYEN bit = 0.

Figure 28. Asynchronous Write

<!-- image -->

## Asynchronous Flash Write

Table 39 and Figure 29 show asynchronous flash memory write timing, related to the static memory controller (SMC).

## Table 39. Asynchronous Flash Write

| Parameter   | Min                                               | Max                  | Unit   |
|-------------|---------------------------------------------------|----------------------|--------|
| Switching   | Characteristics                                   |                      |        |
| t AMSADV    | SMC0_Ax/SMC0_AMSx Assertion Before SMC0_AOE Low 1 | PREST × t SCLK - 2   | ns     |
| t DADVAWE   | SMC0_AWE Low Delay From SMC0_AOE High 2           | PREAT × t SCLK - 6.2 | ns     |
| t WADV      | SMC0_AOE Active Low Width 3                       | WST × t SCLK - 3     | ns     |
| t HAWE      | Output 4 Hold After SMC0_AWE High 5               | WHT×t SCLK - 2       | ns     |
| t WAWE 6    | SMC0_AWE Active Low Width 7                       | WAT × t SCLK - 2     | ns     |

Figure 29. Asynchronous Flash Write

<!-- image -->

## All Accesses

Table 40 describes timing that applies to all memory accesses, related to the static memory controller (SMC).

## Table 40. All Accesses

| Parameter                       | Min                    | Max   | Unit   |
|---------------------------------|------------------------|-------|--------|
| Switching Characteristic        |                        |       |        |
| t TURN SMC0_AMSx Inactive Width | (IT + TT) × t SCLK - 2 |       | ns     |

## ADSP-CM403F/CM407F/CM408F/CM409F

## ADSP-CM403F/CM407F/CM408F/CM409F

## Serial Ports

To determine whether serial port (SPORT) communication is possible between two devices at clock speed n, the following specifications must be confirmed: 1) frame sync delay and frame sync setup and hold, 2) data delay and data setup and hold, and 3) serial clock (SPT\_CLK) width. In Figure 30 either the rising edge or the falling edge of SPT\_CLK (external or internal) can be used as the active sampling edge.

When externally generated the SPORT clock is called fSPTCLKEXT:

<!-- formula-not-decoded -->

When internally generated, the programmed SPORT clock (fSPTCLKPROG) frequency in MHz is set by the following equation where CLKDIV is a field in the SPORT\_DIV register that can be set from 0 to 65,535:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

Table 41. Serial Ports-External Clock

| Parameter                 |                                                                                                | Min                   |   Max | Unit   |
|---------------------------|------------------------------------------------------------------------------------------------|-----------------------|-------|--------|
| Timing Requirements       | Timing Requirements                                                                            |                       |       |        |
| t SFSE                    | Frame Sync Setup Before SPT_CLK (ExternallyGeneratedFrameSyncineitherTransmitorReceive Mode) 1 | 2                     |       | ns     |
| t HFSE                    | Frame Sync Hold After SPT_CLK (ExternallyGeneratedFrameSyncineitherTransmitorReceive Mode) 1   | 2.7                   |       | ns     |
| t SDRE                    | Receive Data Setup Before Receive SPT_CLK 1                                                    | 2                     |       | ns     |
| t HDRE                    | Receive Data Hold After SPT_CLK 1                                                              | 2.7                   |       | ns     |
| t SCLKW                   | SPT_CLK Width 2                                                                                | 0.5 × t SPTCLKEXT - 1 |       | ns     |
| t SPTCLK                  | SPT_CLK Period 2                                                                               | t SPTCLKEXT - 1       |       | ns     |
| Switching Characteristics | Switching Characteristics                                                                      |                       |       |        |
| t DFSE                    | Frame Sync Delay After SPT_CLK (InternallyGeneratedFrameSyncineitherTransmitorReceive Mode) 3  |                       |  14.5 | ns     |
| t HOFSE                   | Frame Sync Hold After SPT_CLK (InternallyGeneratedFrameSyncineitherTransmitorReceive Mode) 3   | 2                     |       | ns     |
| t DDTE                    | Transmit Data Delay After Transmit SPT_CLK 3                                                   |                       |    14 | ns     |
| t HDTE                    | Transmit Data Hold After Transmit SPT_CLK 3                                                    | 2                     |       | ns     |

Table 42. Serial Ports-Internal Clock

| Parameter                 |                                                                                                        | Min                    |   Max | Unit   |
|---------------------------|--------------------------------------------------------------------------------------------------------|------------------------|-------|--------|
| Timing Requirements       | Timing Requirements                                                                                    |                        |       |        |
| t SFSI                    | Frame Sync Setup Before SPT_CLK (Externally Generated Frame Sync in either Transmit or Receive Mode) 1 | 12                     |       | ns     |
| t HFSI                    | Frame Sync Hold After SPT_CLK (Externally Generated Frame Sync in either Transmit or Receive Mode) 1   | -0.5                   |       | ns     |
| t SDRI                    | Receive Data Setup Before SPT_CLK 1                                                                    | 3.4                    |       | ns     |
| t HDRI                    | Receive Data Hold After SPT_CLK 1                                                                      | 1.5                    |       | ns     |
| Switching Characteristics | Switching Characteristics                                                                              |                        |       |        |
| t DFSI                    | Frame Sync Delay After SPT_CLK (Internally Generated Frame Sync in Transmit or Receive Mode) 2         |                        |   3.5 | ns     |
| t HOFSI                   | Frame Sync Hold After SPT_CLK (Internally Generated Frame Sync in Transmit or Receive Mode) 2          | -1                     |       | ns     |
| t DDTI                    | Transmit Data Delay After SPT_CLK 2                                                                    |                        |   3.5 | ns     |
| t HDTI                    | Transmit Data Hold After SPT_CLK 2                                                                     | -1.25                  |       | ns     |
| t SCLKIW                  | SPT_CLK Width 3                                                                                        | 0.5 × t SPTCLKPROG - 1 |       | ns     |
| t SPTCLK                  | SPT_CLK Period 3                                                                                       | t SPTCLKPROG - 1       |       | ns     |

## ADSP-CM403F/CM407F/CM408F/CM409F

## ADSP-CM403F/CM407F/CM408F/CM409F

Figure 30. Serial Ports

<!-- image -->

Table 43. Serial Ports-Enable and Three-State

| Parameter                 | Min                                           |   Max | Unit   |
|---------------------------|-----------------------------------------------|-------|--------|
| Switching Characteristics | Switching Characteristics                     |       |        |
| t DDTEN                   | Data Enable from External Transmit SPT_CLK 1  |     1 | ns     |
| t DDTTE                   | Data Disable from External Transmit SPT_CLK 1 |    14 | ns     |
| t DDTIN                   | Data Enable from Internal Transmit SPT_CLK 1  |    -1 | ns     |
| t DDTTI                   | Data Disable from Internal Transmit SPT_CLK 1 |   2.8 | ns     |

Figure 31. Serial Ports-Enable and Three-State

<!-- image -->

## ADSP-CM403F/CM407F/CM408F/CM409F

## ADSP-CM403F/CM407F/CM408F/CM409F

The SPT\_TDV output signal becomes active in SPORT multichannel mode. During transmit slots (enabled with active channel selection registers) the SPT\_TDV is asserted for communication with external devices.

Table 44. Serial Ports-Transmit Data Valid (TDV)

| Parameter                 | Parameter                                                    |   Min |   Max | Unit   |
|---------------------------|--------------------------------------------------------------|-------|-------|--------|
| Switching Characteristics | Switching Characteristics                                    |       |       |        |
| t DRDVEN                  | Data-Valid Enable Delay from Drive Edge of External Clock 1  |     2 |       | ns     |
| t DFDVEN                  | Data-Valid Disable Delay from Drive Edge of External Clock 1 |       |    14 | ns     |
| t DRDVIN                  | Data-Valid Enable Delay from Drive Edge of Internal Clock 1  |    -1 |       | ns     |
| t DFDVIN                  | Data-Valid Disable Delay from Drive Edge of Internal Clock 1 |       |   3.5 | ns     |

SPT\_CLK

(SPORT CLOCK

EXTERNAL)

tDRDVEN

SPT\_A/BTDV

Figure 32. Serial Ports-Transmit Data Valid Internal and External Clock

<!-- image -->

DRIVE EDGE

DRIVE EDGE

tDFDVEN

Table 45. Serial Ports-External Late Frame Sync

| Parameter                 | Parameter                                                                                                                |   Min |   Max | Unit   |
|---------------------------|--------------------------------------------------------------------------------------------------------------------------|-------|-------|--------|
| Switching Characteristics | Switching Characteristics                                                                                                |       |       |        |
| t DDTLFSE                 | Dataand Data-Valid Enable Delay from Late External Transmit FrameSyncor External Receive Frame Sync with MCE = 1,MFD=0 1 |       |    14 | ns     |
| t DDTENFS                 | Data Enable for MCE = 1,MFD=0 1                                                                                          |   0.5 |       | ns     |

Figure 33. External Late Frame Sync

<!-- image -->

## ADSP-CM403F/CM407F/CM408F/CM409F

## ADSP-CM403F/CM407F/CM408F/CM409F

## Serial Peripheral Interface (SPI) Port-Master Timing

Table 46 and Figure 34 describe serial peripheral interface (SPI) port master operations.When internally generated, the programmed SPI clock (fSPICLKPROG) frequency in MHz is set by the following equation where BAUD is a field in the SPI\_CLK register that can be set from 0 to 65,535:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## Note that:

- In dual mode data transmit, the SPI\_MISO signal is also an output.
- In quad mode data transmit, the SPI\_MISO, SPI\_D2, and SPI\_D3 signals are also outputs.
- In dual mode data receive, the SPI\_MOSI signal is also an input.
- In quad mode data receive, the SPI\_MOSI, SPI\_D2, and SPI\_D3 signals are also inputs.

Table 46. Serial Peripheral Interface (SPI) Port-Master Timing

| Parameter                 |                                                                                                   | Min                                           | Unit   |
|---------------------------|---------------------------------------------------------------------------------------------------|-----------------------------------------------|--------|
| Timing Requirements       | Timing Requirements                                                                               |                                               |        |
| t SSPIDM                  | Data Input Valid to SPI_CLK Edge (Data Input Setup)                                               | 3.2                                           | ns     |
| t HSPIDM                  | SPI_CLK Sampling Edge to Data Input Invalid                                                       | 1.3                                           | ns     |
| Switching Characteristics | Switching Characteristics                                                                         |                                               |        |
| t SDSCIM                  | SPI_SEL low to First SPI_CLK Edge for CPHA = 1 1                                                  | [t SCLK - 2] or [18]                          | ns     |
| t SPICHM                  | SPI_CLK High Period 2                                                                             | 0.5 × t SPICLKPROG - 1                        | ns     |
| t SPICLM                  | SPI_CLK Low Period 2                                                                              | 0.5 × t SPICLKPROG - 1                        | ns     |
| t SPICLK                  | SPI_CLK Period 2                                                                                  | t SPICLKPROG - 1                              | ns     |
| t HDSM                    | Last SPI_CLK Edge to SPI_SEL High for CPHA = 1 1 Last SPI_CLK Edge to SPI_SEL High for CPHA = 0 1 | [1.5 × t SCLK -2] or [13] [t SCLK -2] or [18] | ns ns  |
| t SPITDM                  | Sequential Transfer Delay 1, 3                                                                    | [t SCLK - 1] or [19]                          | ns     |
| t DDSPIDM                 | SPI_CLK Edge to Data Out Valid (Data Out Delay)                                                   |                                               | ns     |
| t HDSPIDM                 | SPI_CLK Edge to Data Out Invalid (Data Out Hold)                                                  | -1.5                                          | ns     |

## ADSP-CM403F/CM407F/CM408F/CM409F

Figure 34. Serial Peripheral Interface (SPI) Port-Master Timing

<!-- image -->

## ADSP-CM403F/CM407F/CM408F/CM409F

## Serial Peripheral Interface (SPI) Port-Slave Timing

Table 47 and Figure 35 describe serial peripheral interface (SPI) port slave operations. Note that:

- In dual mode data transmit, the SPI\_MOSI signal is also an output.
- In quad mode data transmit, the SPI\_MOSI, SPI\_D2, and SPI\_D3 signals are also outputs.
- In dual mode data receive, the SPI\_MISO signal is also an input.
- In quad mode data receive, the SPI\_MISO, SPI\_D2, and SPI\_D3 signals are also inputs.
- In SPI slave mode, the SPI clock is supplied externally and is called f SPICLKEXT :

<!-- image -->

Table 47. Serial Peripheral Interface (SPI) Port-Slave Timing

| Parameter                 | Parameter                                           | Min                   |   Max | Unit   |
|---------------------------|-----------------------------------------------------|-----------------------|-------|--------|
| Timing Requirements       | Timing Requirements                                 |                       |       |        |
| t SPICHS                  | SPI_CLK High Period 1                               | 0.5 × t SPICLKEXT - 1 |       | ns     |
| t SPICLS                  | SPI_CLK Low Period 1                                | 0.5 × t SPICLKEXT - 1 |       | ns     |
| t SPICLK                  | SPI_CLK Period 1                                    | t SPICLKEXT - 1       |       | ns     |
| t HDS                     | Last SPI_CLK Edge to SPI_SS Not Asserted            | 5                     |       | ns     |
| t SPITDS                  | Sequential Transfer Delay                           | t SPICLK - 1          |       | ns     |
| t SDSCI                   | SPI_SS Assertion to First SPI_CLK Edge              | 10.5                  |       | ns     |
| t SSPID                   | Data Input Valid to SPI_CLK Edge (Data Input Setup) | 2                     |       | ns     |
| t HSPID                   | SPI_CLK Sampling Edge to Data Input Invalid         | 1.6                   |       | ns     |
| Switching Characteristics | Switching Characteristics                           |                       |       |        |
| t DSOE                    | SPI_SS Assertion to Data Out Active                 | 0                     |    14 | ns     |
| t DSDHI                   | SPI_SS Deassertion to Data High Impedance           | 0                     |  12.5 | ns     |
| t DDSPID                  | SPI_CLK Edge to Data Out Valid (Data Out Delay)     |                       |    14 | ns     |
| t HDSPID                  | SPI_CLK Edge to Data Out Invalid (Data Out Hold)    | 0                     |       | ns     |

## ADSP-CM403F/CM407F/CM408F/CM409F

Figure 35. Serial Peripheral Interface (SPI) Port-Slave Timing

<!-- image -->

## ADSP-CM403F/CM407F/CM408F/CM409F

## Serial Peripheral Interface (SPI) Port-SPI\_RDY Slave Timing

Table 48. SPI Port-SPI\_RDY Slave Timing

| Parameter                 | Parameter                                                               | Min        | Max             | Unit   |
|---------------------------|-------------------------------------------------------------------------|------------|-----------------|--------|
| Switching Characteristics | Switching Characteristics                                               |            |                 |        |
| t DSPISCKRDYSR            | SPI_RDY Deassertion from Last Input SPI_CLK Edge in Slave Mode Receive  | 3 × t SCLK | 4 × t SCLK + 10 | ns     |
| t DSPISCKRDYST            | SPI_RDY Deassertion from Last Input SPI_CLK Edge in Slave Mode Transmit | 4 × t SCLK | 5 × t SCLK + 10 | ns     |

<!-- image -->

Figure 36. SPI\_RDY Deassertion from Valid Input SPI\_CLK Edge in Slave Mode Receive (FCCH = 0)

Figure 37. SPI\_RDY Deassertion from Valid Input SPI\_CLK Edge in Slave Mode Transmit (FCCH = 1)

<!-- image -->

Table 50. SPI Port-ODM Slave Mode

| Parameter           | Parameter                                          |   Min |   Max | Unit   |
|---------------------|----------------------------------------------------|-------|-------|--------|
| Timing Requirements | Timing Requirements                                |       |       |        |
| t HDSPIODMS         | SPI_CLK Edge to High Impedance from Data Out Valid |     0 |       | ns     |
| t DDSPIODMS         | SPI_CLK Edge to Data Out Valid from High Impedance |       |    11 | ns     |

<!-- image -->

## ADSP-CM403F/CM407F/CM408F/CM409F

## Serial Peripheral Interface (SPI) Port-Open Drain Mode (ODM) Timing

In Figure 38 and Figure 39, the outputs can be SPI\_MOSI, SPI\_MISO, SPI\_D2, and/or SPI\_D3 depending on the mode of operation.

## Table 49. SPI Port-ODM Master Mode

Figure 38. ODM Master

| Parameter                 | Parameter                                          |   Min |   Max | Unit   |
|---------------------------|----------------------------------------------------|-------|-------|--------|
| Switching Characteristics | Switching Characteristics                          |       |       |        |
| t HDSPIODMM               | SPI_CLK Edge to High Impedance from Data Out Valid |    -1 |       | ns     |
| t DDSPIODMM               | SPI_CLK Edge to Data Out Valid from High Impedance |       |     6 | ns     |

<!-- image -->

## ADSP-CM403F/CM407F/CM408F/CM409F

## Serial Peripheral Interface (SPI) Port-SPI\_RDY Master Timing

SPI\_RDY is used to provide flow control. The CPOL and CPHA bits are set in SPI\_CTL, while LEADX, LAGX, and STOP are in SPI\_DLY.

Table 51. SPI Port-SPI\_RDY Master Timing

| Parameter                 | Parameter                                                                                                                                             | Min                             | Max                             | Unit   |
|---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------|---------------------------------|--------|
| Timing Requirements       | Timing Requirements                                                                                                                                   |                                 |                                 |        |
| t SRDYSCKM0               | Minimum Setup Time for SPI_RDY Deassertion in Master ModeBeforeLastValid SPI_CLK EdgeofValid Data Transfer to Block Subsequent Transfer with CPHA = 0 | (2 + 2 × BAUD 1 ) × t SCLK + 10 |                                 | ns     |
| t SRDYSCKM1               | Minimum Setup Time for SPI_RDY Deassertion in Master ModeBeforeLastValid SPI_CLK EdgeofValid Data Transfer to Block Subsequent Transfer with CPHA = 1 | (2 + 2 × BAUD 1 ) × t SCLK + 10 |                                 | ns     |
| Switching Characteristics | Switching Characteristics                                                                                                                             |                                 |                                 |        |
| t SRDYSCKM                | Time Between Assertion of SPI_RDY by Slave and First Edge of SPI_CLK for NewSPI Transfer with CPHA/CPOL = 0 and BAUD = 0 (STOP, LEAD, LAG = 0)        | 4.5 × t SCLK                    | 5.5 × t SCLK + 10               | ns     |
|                           | Time Between Assertion of SPI_RDY by Slave and First Edge of SPI_CLK for NewSPI Transfer with CPHA/CPOL = 1 and BAUD = 0 (STOP, LEAD, LAG = 0)        | 4 × t SCLK                      | 5 × t SCLK + 10                 | ns     |
|                           | Time Between Assertion of SPI_RDY by Slave and First Edge of SPI_CLK for NewSPI Transfer with CPHA/CPOL = 0 and BAUD ≥ 1 (STOP, LEAD, LAG = 0)        | (1 + 1.5 × BAUD 1 ) × t SCLK    | (2+2.5×BAUD 1 )×t SCLK +10      | ns     |
|                           | Time Between Assertion of SPI_RDY by Slave and First Edge of SPI_CLK for NewSPI Transfer with CPHA/CPOL = 1 and BAUD ≥ 1 (STOP, LEAD, LAG = 0)        | (1 + 1 × BAUD 1 ) × t SCLK      | (2 + 2 × BAUD 1 ) × t SCLK + 10 | ns     |

Figure 40. SPI\_RDY Setup Before SPI\_CLK with CPHA = 0

<!-- image -->

## ADSP-CM403F/CM407F/CM408F/CM409F

Figure 41. SPI\_RDY Setup Before SPI\_CLK with CPHA = 1

<!-- image -->

Figure 42. SPI\_CLK Switching Diagram after SPI\_RDY Assertion, CPHA = x

<!-- image -->

## ADSP-CM403F/CM407F/CM408F/CM409F

## Serial Peripheral Interface (SPI) Port-Memory Map Mode Timing

Table 52. SPI Port-Memory Map Mode Timing

| Parameter                | Parameter                               |   Min |   Max | Unit   |
|--------------------------|-----------------------------------------|-------|-------|--------|
| Switching Characteristic | Switching Characteristic                |       |       |        |
| t ZDSPIDM                | SPI_CLK Edge to Data-Out High Impedance |    -1 |    +8 | ns     |

<!-- image -->

Figure 43. SPI\_CLK Valid Edge to Data-Out High Impedance in Master Mode with CPHA = 0

Figure 44. SPI\_CLK Valid Edge to Data-Out High Impedance in Master Mode with CPHA = 1

<!-- image -->

## General-Purpose I/O Port Timing

Table 53 and Figure 45 describe I/O timing, related to the general-purpose ports (PORT).

Table 53. General-Purpose I/O Port Timing

| Parameter                                            | Min        | Max   | Unit   |
|------------------------------------------------------|------------|-------|--------|
| Timing Requirement                                   |            |       |        |
| t WFI General-Purpose I/O Port Pin Input Pulse Width | 2 × t SCLK |       | ns     |

Figure 45. General-Purpose Port Timing

<!-- image -->

## GPIO Timer Cycle Timing

Table 54, Table 55, and Figure 46 describe timer expired operations, related to the general-purpose timer (TIMER). The input signal is asynchronous in width capture mode and external clock mode and has an absolute maximum input frequency of (fSCLK/4) MHz. The width value is the timer period assigned in the TMx\_TMRn\_WIDTH register and can range from 1 to 2 32 - 1. Note that when externally generated, the TMR clock is called fTMRCLKEXT:

<!-- formula-not-decoded -->

Table 54. Timer Cycle Timing (Internal Mode)

| Parameter                | Min                                                      | Max                           | Unit   |
|--------------------------|----------------------------------------------------------|-------------------------------|--------|
| Timing Requirements      |                                                          |                               |        |
| t WL                     | Timer Pulse Width Input Low (Measured In SCLK Cycles) 1  | 2 × t SCLK                    | ns     |
| t WH                     | Timer Pulse Width Input High (Measured In SCLK Cycles) 1 | 2 × t SCLK                    | ns     |
| Switching Characteristic |                                                          |                               |        |
| t HTO                    | Timer Pulse Width Output (Measured In SCLK Cycles) 2     | t SCLK × WIDTH - 1.5 t SCLK × | ns     |

Table 55. Timer Cycle Timing (External Mode)

| Parameter                |                                                            | Min Max                 | Unit                    |    |
|--------------------------|------------------------------------------------------------|-------------------------|-------------------------|----|
| Timing Requirements      | Timing Requirements                                        |                         |                         |    |
| t WL                     | Timer Pulse Width Input Low (Measured In EXT_CLK Cycles) 1 | 2 × t EXT_CLK           |                         | ns |
| t WH                     | Timer Pulse Width Input High (Measured In EXT_CLK Cycles)  | 2 × t EXT_CLK           |                         | ns |
| t EXT_CLK                | Timer External Clock Period 2                              | t TMRCLKEXT             |                         | ns |
| Switching Characteristic | Switching Characteristic                                   |                         |                         |    |
| t HTO                    | Timer Pulse Width Output (Measured In EXT_CLK Cycles) 3    | t EXT_CLK × WIDTH - 1.5 | t EXT_CLK × WIDTH + 1.5 | ns |

## ADSP-CM403F/CM407F/CM408F/CM409F

## ADSP-CM403F/CM407F/CM408F/CM409F

<!-- image -->

## Up/Down Counter/Rotary Encoder Timing

Table 56 and Figure 47 describe timing, related to the general-purpose counter (CNT).

## Table 56. Up/Down Counter/Rotary Encoder Timing

Figure 47. Up/Down Counter/Rotary Encoder Timing

| Parameter          | Min        | Max   | Unit   |
|--------------------|------------|-------|--------|
| Timing Requirement |            |       |        |
| t WCOUNT           | 2 × t SCLK |       | ns     |

<!-- image -->

## Pulse Width Modulator (PWM) Timing

Table 57 and Figure 48 describe timing, related to the pulse width modulator (PWM).

## Table 57. PWM Timing

| Parameter                 | Min                                      | Max                           | Unit   |
|---------------------------|------------------------------------------|-------------------------------|--------|
| Timing Requirement        |                                          |                               |        |
| t ES                      | External Sync Pulse Width                | 2 × t SCLK                    | ns     |
| Switching Characteristics |                                          |                               |        |
| t DODIS                   | Output Inactive (Off) After Trip Input 1 | 15                            | ns     |
| t DOE                     | Output Delay After External Sync 1, 2    | 2 × t SCLK + 5.5 5 × t SCLK + | ns     |

Figure 48. PWM Timing

<!-- image -->

Figure 46. Timer Cycle Timing

## ADSP-CM403F/CM407F/CM408F/CM409F

## Pulse Width Modulator (PWM)- Heightened-Precision Mode Timing

Table 58, Table 59, Figure 49, and Figure 50 describe heightened-precision pulse width modulator (PWM) operations.

## Table 58. PWM-Heightened-Precision Mode, Output Pulse

| Parameter                              | Min                         | Max                         | Unit   |
|----------------------------------------|-----------------------------|-----------------------------|--------|
| Switching Characteristic               |                             |                             |        |
| t HPWMW HP-PWM Output Pulse Width 1, 2 | (N + m×0.25) × t SCLK - 0.5 | (N + m×0.25) × t SCLK + 0.5 | ns     |

Figure 49. PWM Heightened-Precision Mode Timing, Output Pulse

<!-- image -->

Table 59. PWM-Heightened-Precision Mode, Output Skew

| Parameter                  | Min   |   Max | Unit   |
|----------------------------|-------|-------|--------|
| Switching Characteristic   |       |       |        |
| t HPWMS HP-PWM Output Skew |       |   1.0 | ns     |

Figure 50. PWM Heightened-Precision Mode Timing, Output Skew

<!-- image -->

## ADSP-CM403F/CM407F/CM408F/CM409F

## Universal Asynchronous Receiver-Transmitter (UART) Ports-Receive and Transmit Timing

The universal asynchronous receiver-transmitter (UART) ports receive and transmit operations are described in the ADSP-CM40x Mixed-Signal Control Processor with Arm Cortex-M4 Hardware Reference .

## Controller Area Network (CAN) Interface

The controller area network (CAN) interface timing is described in the ADSP-CM40x Mixed-Signal Control Processor with Arm CortexM4 Hardware Reference .

## Universal Serial Bus (USB) On-The-Go-Receive and Transmit Timing

The universal serial bus (USB) on-the-go receive and transmit operations are described in the ADSP-CM40x Mixed-Signal Control Processor with Arm Cortex-M4 Hardware Reference .

## 10/100 Ethernet MAC Controller (EMAC) Timing

Table 60 through Table 62 and Figure 51 through Figure 53 describe the 10/100 Ethernet MAC controller operations. Note the externally generated Ethernet MAC clock is called fREFCLKEXT:

<!-- image -->

## Table 60. 10/100 Ethernet MAC Controller (EMAC) Timing: RMII Receive Signal

| Parameter 1         |                                                                 | Min Max           | Unit              |    |
|---------------------|-----------------------------------------------------------------|-------------------|-------------------|----|
| Timing Requirements | Timing Requirements                                             |                   |                   |    |
| t REFCLK            | ETHx_REFCLK Period 2                                            | t REFCLKEXT -1%   |                   | ns |
| t REFCLKW           | ETHx_REFCLK Width 2                                             | t REFCLKEXT × 35% | t REFCLKEXT × 65% | ns |
| t REFCLKIS          | Rx Input Valid to RMII ETHx_REFCLK Rising Edge (Data In Setup)  | 4                 |                   | ns |
| t REFCLKIH          | RMII ETHx_REFCLK Rising Edge to Rx Input Invalid (Data In Hold) | 2.0               |                   | ns |

Figure 51. 10/100 Ethernet MAC Controller Timing: RMII Receive Signal

<!-- image -->

Table 61. 10/100 Ethernet MAC Controller (EMAC) Timing: RMII Transmit Signal

| Parameter 1               | Parameter 1                                                             |   Min |   Max | Unit   |
|---------------------------|-------------------------------------------------------------------------|-------|-------|--------|
| Switching Characteristics | Switching Characteristics                                               |       |       |        |
| t REFCLKOV                | RMII ETHx_REFCLK Rising Edge to Transmit Output Valid (Data Out Valid)  |       |    14 | ns     |
| t REFCLKOH                | RMII ETHx_REFCLK Rising Edge to Transmit Output Invalid (Data Out Hold) |     2 |       | ns     |

Figure 52. 10/100 Ethernet MAC Controller Timing: RMII Transmit Signal

<!-- image -->

## ADSP-CM403F/CM407F/CM408F/CM409F

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 62. 10/100 Ethernet MAC Controller (EMAC) Timing: RMII Station Management

| Parameter 1               | Min                                                      | Max          | Unit   |
|---------------------------|----------------------------------------------------------|--------------|--------|
| Timing Requirements       |                                                          |              |        |
| t MDIOS                   | ETHx_MDIO Input Valid to ETHx_MDC Rising Edge (Setup)    | 14           | ns     |
| t MDCIH                   | ETHx_MDC Rising Edge to ETHx_MDIO Input Invalid (Hold)   | 0            | ns     |
| Switching Characteristics |                                                          |              |        |
| t MDCOV                   | ETHx_MDC Falling Edge to ETHx_MDIO Output Valid          | t SCLK + 5   | ns     |
| t MDCOH                   | ETHx_MDC Falling Edge to ETHx_MDIO Output Invalid (Hold) | t SCLK - 2.5 | ns     |

Figure 53. 10/100 Ethernet MAC Controller Timing: RMII Station Management

<!-- image -->

## Sinus Cardinalis (SINC) Filter Timing

The programmed sinus cardinalis (SINC) filter clock (fSINCLKPROG) frequency in MHz is set by the following equation where MDIV is a field in the CLK control register that can be set from 4 to 63:

$$f SINCLKPROG f SCLK MDIV - - - - - - - - - - - - - =$$

$$t SINCLKPROG 1 f SINCLKPROG - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - =$$

## Table 63. SINC Filter Timing

| Parameter                 | Min                                   | Max                      | Unit   |
|---------------------------|---------------------------------------|--------------------------|--------|
| Timing Requirements       |                                       |                          |        |
| t SSINC                   | SINC0_Dx Setup Before SINC0_CLKx Rise | 9                        | ns     |
| t HSINC                   | SINC0_Dx Hold After SINC0_CLKx Rise   | 0                        | ns     |
| Switching Characteristics |                                       |                          |        |
| t SINCLK                  | SINC0_CLKx Period 1                   | t SINCLKPROG - 2.5       | ns     |
| t SINCLKW                 | SINC0_CLKx Width 1                    | 0.5 × t SINCLKPROG - 2.5 | ns     |

Figure 54. SINC Filter Timing

<!-- image -->

## ADSP-CM403F/CM407F/CM408F/CM409F

## ADSP-CM403F/CM407F/CM408F/CM409F

## Trace Timing

## Table 64. Trace Timing

Figure 55. Trace Timing

| Parameter                 |                            | Min Max          | Unit   |
|---------------------------|----------------------------|------------------|--------|
| Switching Characteristics |                            |                  |        |
| t DDTRACE                 | Data Delay After TRACE_CLK | 0.5 × t SCLK + 2 | ns     |
| t HDTRACE                 | Data Hold After TRACE_CLK  | 0.5 × t SCLK - 2 | ns     |

<!-- image -->

## Serial Wire Debug (SWD) Timing

Table 65 and Figure 56 describe the serial wire debug (SWD) operations.

## Table 65. Serial Wire Debug (SWD) Timing

Figure 56. Serial Wire Debug (SWD) Timing

| Parameter                 |                               |   Min Max | Unit   |
|---------------------------|-------------------------------|-----------|--------|
| Timing Requirements       |                               |           |        |
| t SWCLK                   | SWCLK Period                  |        20 | ns     |
| t SSWDIO                  | SWDIO Setup Before SWCLK High |         4 | ns     |
| t HSWDIO                  | SWDIO Hold After SWCLK High   |         4 | ns     |
| Switching Characteristics |                               |           |        |
| t DSWDIO                  | SWDIO Delay After SWCLK High  |      12.5 | ns     |
| t HOSWDIO                 | SWDIO Hold After SWCLK High   |       3.5 | ns     |

<!-- image -->

## Debug Interface (JTAG Emulation Port) Timing

Table 66 and Figure 57 provide I/O timing, related to the debug interface (JTAG emulator port).

## Table 66. JTAG Emulation Port Timing

| Parameter                 |                                                   |   Min Max |      | Unit   |
|---------------------------|---------------------------------------------------|-----------|------|--------|
| Timing Requirements       |                                                   |           |      |        |
| t TCK                     | JTG_TCK Period                                    |        20 |      | ns     |
| t STAP                    | JTG_TDI, JTG_TMS Setup Before JTG_TCK High        |         4 |      | ns     |
| t HTAP                    | JTG_TDI, JTG_TMS Hold After JTG_TCK High          |         4 |      | ns     |
| t SSYS                    | System Inputs Setup Before JTG_TCK High 1         |        12 |      | ns     |
| t HSYS                    | System Inputs Hold After JTG_TCK High 1           |         5 |      | ns     |
| t TRSTW                   | JTG_TRST Pulse Width (Measured in JTG_TCK cycles) |         4 |      | t TCK  |
| Switching Characteristics | Switching Characteristics                         |           |      |        |
| t DTDO                    | JTG_TDO Delay from JTG_TCK Low                    |           | 13.5 | ns     |
| t DSYS                    | System Outputs Delay After JTG_TCK Low 3          |           |   17 | ns     |

Figure 57. JTAG Emulation Port Timing

<!-- image -->

## ADSP-CM403F/CM407F/CM408F/CM409F

## ADSP-CM403F/CM407F/CM408F/CM409F

## OUTPUT DRIVE CURRENTS

Figure 58 and Figure 59 show typical current voltage characteristics for the output drivers of the ADSP-CM40xF processors. The curves represent the current drive capability of the output drivers as a function of output voltage.

Figure 58. Driver Type A Current

<!-- image -->

Figure 59. Driver Type B Current

<!-- image -->

## TEST CONDITIONS

All timing parameters appearing in this data sheet were measured under the conditions described in this section. Figure 60 shows the measurement point for ac measurements (except output enable/disable). The measurement point, VMEAS, is VDD\_EXT/2 for VDD\_EXT (nominal) = 3.3 V.

Figure 60. Voltage Reference Levels for AC Measurements (Except Output Enable/Disable)

<!-- image -->

## Output Enable Time Measurement

Output pins are considered enabled when they make a transition from a high impedance state to the point when they start driving.

The output enable time, tENA, is the interval from the point when a reference signal reaches a high or low voltage level to the point when the output starts driving, as shown on the right side of Figure 61. If multiple pins are enabled, the measurement value is that of the first pin to start driving.

Figure 61. Output Enable/Disable

<!-- image -->

## Output Disable Time Measurement

Output pins are considered disabled when they stop driving, enter a high impedance state, and start to decay from the output high or low voltage. The output disable time, t DIS , is the interval from when a reference signal reaches a high or low voltage level to the point when the output stops driving, as shown on the left side of Figure 61.

## Capacitive Loading

Output delays and holds are based on standard capacitive loads of an average of 6 pF on all pins (see Figure 62). V LOAD is equal to (VDD\_EXT)/2.

## TESTER PIN ELECTRONICS

<!-- image -->

## NOTES:

THE WORST CASE TRANSMISSION LINE DELAY IS SHOWN AND CAN BE USED FOR THE OUTPUT TIMING ANALYSIS TO REFLECT THE TRANSMISSION LINE EFFECT AND MUST BE CONSIDERED. THE TRANSMISSION LINE (TD), IS FOR LOAD ONLY AND DOES NOT AFFECT THE DATA SHEET TIMING SPECIFICATIONS.

ANALOG DEVICES RECOMMENDS USING THE IBIS MODEL TIMING FOR A GIVEN SYSTEM REQUIREMENT. IF NECESSARY, A SYSTEM MAY INCORPORATE EXTERNAL DRIVERS TO COMPENSATE FOR ANY TIMING DIFFERENCES.

Figure 62. Equivalent Device Loading for AC Measurements (Includes All Fixtures)

Figure 63 shows how output rise time varies with capacitance. The delay and hold specifications given must be derated by a factor derived from this figure. The graph in Figure 63 cannot be linear outside the ranges shown.

Figure 63. Driver Type A Typical Rise and Fall Times (10% to 90%) vs. Load Capacitance

<!-- image -->

## ADSP-CM403F/CM407F/CM408F/CM409F

## ENVIRONMENTAL CONDITIONS

The ADSP-CM40xF processor is rated for performance over the temperature range specified in Operating Conditions.

The JESD51 package thermal characteristics in this section are provided for package comparison and estimation purposes only. They are not intended for accurate system temperature calculation. System thermal simulation is required for accurate temperature analysis that accounts for all specific 3D system design features, including, but not limited to other heat sources, use of heat-sinks, and the system enclosure. Contact Analog Devices for package thermal models that are intended for use with thermal simulation tools.

In Table 67, Table 68, and Table 69, airflow measurements comply with JEDEC standards JESD51-2 and JESD51-6, and the junction-to-board measurement complies with JESD51-8. Test board design complies with JEDEC standards JESD51-7 (for leaded surface mount packages). The junction-to-case measurement complies with MIL-STD-883 (Method 1012.1). All measurements use a 2S2P JEDEC test board.

To estimate the junction temperature of a single device while on a JEDEC 2S2P PCB, use:

<!-- formula-not-decoded -->

where:

TJ is the junction temperature (°C).

TCASE is the case temperature (°C) measured at the top center of the package.

Ψ JT is the typical value (junction-to-top of package characterization parameter) from Table 67, Table 68, and Table 69.

PD is the power dissipation (see the Total Power Dissipation (PD) section for the method to calculate PD ).

Values of θ JA are provided for package comparison and PCB design considerations. θ JA can be used for a first-order approximation of TJ by the equation:

<!-- formula-not-decoded -->

where:

TA is the ambient temperature (°C).

Values of θ JC are provided for package comparison and PCB design considerations when an external heat sink is required.

## ADSP-CM403F/CM407F/CM408F/CM409F

Note that the thermal characteristics values provided in Table 67, Table 68, and Table 69 are modeled values.

Table 67. Thermal Characteristics (120-Lead LQFP)

| Parameter   | Conditions            |   Typical | Unit   |
|-------------|-----------------------|-----------|--------|
| θ JA        | 0 linear m/s air flow |      21.5 | °C/W   |
| θ JA        | 1 linear m/s air flow |      19.2 | °C/W   |
| θ JA        | 2 linear m/s air flow |      18.4 | °C/W   |
| θ JC        |                       |      9.29 | °C/W   |
| Ψ JT        | 0 linear m/s air flow |      0.25 | °C/W   |
| Ψ JT        | 1 linear m/s air flow |      0.40 | °C/W   |
| Ψ JT        | 2 linear m/s air flow |      0.56 | °C/W   |

Table 68. Thermal Characteristics (176-Lead LQFP)

| Parameter   | Conditions            |   Typical | Unit   |
|-------------|-----------------------|-----------|--------|
| θ JA        | 0 linear m/s air flow |      21.5 | °C/W   |
| θ JA        | 1 linear m/s air flow |      19.3 | °C/W   |
| θ JA        | 2 linear m/s air flow |      18.5 | °C/W   |
| θ JC        |                       |      9.24 | °C/W   |
| Ψ JT        | 0 linear m/s air flow |      0.25 | °C/W   |
| Ψ JT        | 1 linear m/s air flow |      0.37 | °C/W   |
| Ψ JT        | 2 linear m/s air flow |      0.48 | °C/W   |

Table 69. Thermal Characteristics (212-Ball BGA)

| Parameter   | Conditions            |   Typical | Unit   |
|-------------|-----------------------|-----------|--------|
| θ JA        | 0 linear m/s air flow |      30.0 | °C/W   |
| θ JA        | 1 linear m/s air flow |      27.5 | °C/W   |
| θ JA        | 2 linear m/s air flow |      26.5 | °C/W   |
| θ JC        |                       |       9.2 | °C/W   |
| Ψ JT        | 0 linear m/s air flow |      0.15 | °C/W   |
| Ψ JT        | 1 linear m/s air flow |      0.24 | °C/W   |
| Ψ JT        | 2 linear m/s air flow |      0.27 | °C/W   |

## ADSP-CM403F/CM407F/CM408F/CM409F

## ADSP-CM403F 120-LEAD LQFP LEAD ASSIGNMENTS

Table 70 lists the 120-lead LQFP package by lead number and Table 71 lists the 120-lead LQFP package by pin name.

Table 70. ADSP-CM403F120-Lead LQFP Lead Assignments (Numerical by Lead Number)

|   Lead No. | PinName       |   Lead No. | PinName       |   Lead No. | PinName    |   Lead No. | PinName    |
|------------|---------------|------------|---------------|------------|------------|------------|------------|
|          1 | PA_13         |         32 | JTG_TRST      |         63 | ADC1_VIN05 |         94 | DAC0_VOUT  |
|          2 | VDD_EXT       |         33 | JTG_TDO/SWO   |         64 | ADC1_VIN06 |         95 | VDD_EXT    |
|          3 | PA_12         |         34 | JTG_TMS/SWDIO |         65 | ADC1_VIN07 |         96 | VDD_INT    |
|          4 | PA_11         |         35 | PC_07         |         66 | ADC1_VIN08 |         97 | VDD_EXT    |
|          5 | PA_10         |         36 | VDD_EXT       |         67 | ADC1_VIN09 |         98 | GND        |
|          6 | PA_09         |         37 | PC_06         |         68 | ADC1_VIN10 |         99 | SYS_NMI    |
|          7 | PA_08         |         38 | PC_05         |         69 | ADC1_VIN11 |        100 | VDD_EXT    |
|          8 | PA_07         |         39 | PC_04         |         70 | VDD_ANA1   |        101 | VDD_EXT    |
|          9 | VDD_EXT       |         40 | PC_03         |         71 | GND_ANA1   |        102 | PB_10      |
|         10 | PA_06         |         41 | PC_02         |         72 | BYP_A1     |        103 | PB_08      |
|         11 | PA_05         |         42 | PC_01         |         73 | VREF1      |        104 | PB_09      |
|         12 | PA_04         |         43 | VDD_EXT       |         74 | GND_VREF1  |        105 | PB_06      |
|         13 | PA_03         |         44 | VDD_INT       |         75 | REFCAP     |        106 | PB_07      |
|         14 | PA_02         |         45 | PC_00         |         76 | GND_VREF0  |        107 | PB_05      |
|         15 | PA_01         |         46 | PB_14         |         77 | VREF0      |        108 | VDD_INT    |
|         16 | VDD_INT       |         47 | PB_15         |         78 | BYP_A0     |        109 | VDD_EXT    |
|         17 | VDD_EXT       |         48 | PB_13         |         79 | GND_ANA0   |        110 | PB_04      |
|         18 | SYS_RESOUT    |         49 | VDD_EXT       |         80 | VDD_ANA0   |        111 | PB_03      |
|         19 | PA_00         |         50 | PB_11         |         81 | ADC0_VIN11 |        112 | PB_02      |
|         20 | SYS_FAULT     |         51 | PB_12         |         82 | ADC0_VIN10 |        113 | PB_01      |
|         21 | SYS_HWRST     |         52 | GND           |         83 | ADC0_VIN09 |        114 | PB_00      |
|         22 | VDD_EXT       |         53 | VDD_EXT       |         84 | ADC0_VIN08 |        115 | PA_15      |
|         23 | SYS_XTAL      |         54 | VDD_INT       |         85 | ADC0_VIN07 |        116 | VDD_EXT    |
|         24 | SYS_CLKIN     |         55 | BYP_D0        |         86 | ADC0_VIN06 |        117 | PA_14      |
|         25 | VREG_BASE     |         56 | DAC1_VOUT     |         87 | ADC0_VIN05 |        118 | SYS_CLKOUT |
|         26 | VDD_VREG      |         57 | ADC1_VIN00    |         88 | ADC0_VIN04 |        119 | SYS_BMODE1 |
|         27 | VDD_EXT       |         58 | ADC1_VIN01    |         89 | ADC0_VIN03 |        120 | SYS_BMODE0 |
|         28 | TWI0_SCL      |         59 | ADC1_VIN02    |         90 | GND_ANA2   |        121 | GND        |
|         29 | TWI0_SDA      |         60 | ADC1_VIN03    |         91 | ADC0_VIN02 |            |            |
|         30 | JTG_TDI       |         61 | GND_ANA3      |         92 | ADC0_VIN01 |            |            |
|         31 | JTG_TCK/SWCLK |         62 | ADC1_VIN04    |         93 | ADC0_VIN00 |            |            |

* Pin no. 121 is the GND supply (see Figure 65) for the processor; this pad must connect to GND.

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 71. ADSP-CM403F 120-Lead LQFP Lead Assignments (Alphabetical by Pin Name)

| PinName    |   Lead No. | PinName       |   Lead No. | PinName    |   Lead No. | PinName   |   Lead No. |
|------------|------------|---------------|------------|------------|------------|-----------|------------|
| ADC0_VIN00 |         93 | GND           |        121 | PB_03      |        111 | TWI0_SCL  |         28 |
| ADC0_VIN01 |         92 | GND_ANA0      |         79 | PB_04      |        110 | TWI0_SDA  |         29 |
| ADC0_VIN02 |         91 | GND_ANA1      |         71 | PB_05      |        107 | VDD_ANA0  |         80 |
| ADC0_VIN03 |         89 | GND_ANA2      |         90 | PB_06      |        105 | VDD_ANA1  |         70 |
| ADC0_VIN04 |         88 | GND_ANA3      |         61 | PB_07      |        106 | VDD_EXT   |          2 |
| ADC0_VIN05 |         87 | GND_VREF0     |         76 | PB_08      |        103 | VDD_EXT   |          9 |
| ADC0_VIN06 |         86 | GND_VREF1     |         74 | PB_09      |        104 | VDD_EXT   |         17 |
| ADC0_VIN07 |         85 | JTG_TCK/SWCLK |         31 | PB_10      |        102 | VDD_EXT   |         22 |
| ADC0_VIN08 |         84 | JTG_TDI       |         30 | PB_11      |         50 | VDD_EXT   |         27 |
| ADC0_VIN09 |         83 | JTG_TDO/SWO   |         33 | PB_12      |         51 | VDD_EXT   |         36 |
| ADC0_VIN10 |         82 | JTG_TMS/SWDIO |         34 | PB_13      |         48 | VDD_EXT   |         43 |
| ADC0_VIN11 |         81 | JTG_TRST      |         32 | PB_14      |         46 | VDD_EXT   |         49 |
| ADC1_VIN00 |         57 | PA_00         |         19 | PB_15      |         47 | VDD_EXT   |         53 |
| ADC1_VIN01 |         58 | PA_01         |         15 | PC_00      |         45 | VDD_EXT   |         95 |
| ADC1_VIN02 |         59 | PA_02         |         14 | PC_01      |         42 | VDD_EXT   |         97 |
| ADC1_VIN03 |         60 | PA_03         |         13 | PC_02      |         41 | VDD_EXT   |        100 |
| ADC1_VIN04 |         62 | PA_04         |         12 | PC_03      |         40 | VDD_EXT   |        101 |
| ADC1_VIN05 |         63 | PA_05         |         11 | PC_04      |         39 | VDD_EXT   |        109 |
| ADC1_VIN06 |         64 | PA_06         |         10 | PC_05      |         38 | VDD_EXT   |        116 |
| ADC1_VIN07 |         65 | PA_07         |          8 | PC_06      |         37 | VDD_INT   |         16 |
| ADC1_VIN08 |         66 | PA_08         |          7 | PC_07      |         35 | VDD_INT   |         44 |
| ADC1_VIN09 |         67 | PA_09         |          6 | REFCAP     |         75 | VDD_INT   |         54 |
| ADC1_VIN10 |         68 | PA_10         |          5 | SYS_BMODE0 |        120 | VDD_INT   |         96 |
| ADC1_VIN11 |         69 | PA_11         |          4 | SYS_BMODE1 |        119 | VDD_INT   |        108 |
| BYP_A0     |         78 | PA_12         |          3 | SYS_CLKIN  |         24 | VDD_VREG  |         26 |
| BYP_A1     |         72 | PA_13         |          1 | SYS_CLKOUT |        118 | VREF0     |         77 |
| BYP_D0     |         55 | PA_14         |        117 | SYS_FAULT  |         20 | VREF1     |         73 |
| DAC0_VOUT  |         94 | PA_15         |        115 | SYS_HWRST  |         21 | VREG_BASE |         25 |
| DAC1_VOUT  |         56 | PB_00         |        114 | SYS_NMI    |         99 |           |            |
| GND        |         52 | PB_01         |        113 | SYS_RESOUT |         18 |           |            |
| GND        |         98 | PB_02         |        112 | SYS_XTAL   |         23 |           |            |

## ADSP-CM403F/CM407F/CM408F/CM409F

Figure 64 shows the top view of the 120-lead LQFP package lead configuration and Figure 65 shows the bottom view of the 120-lead LQFP package lead configuration.

Figure 64. 120-Lead LQFP Lead Configuration (Top View)

<!-- image -->

Figure 65. 120-Lead LQFP Lead Configuration (Bottom View)

<!-- image -->

## ADSP-CM403F/CM407F/CM408F/CM409F

## ADSP-CM407F/ADSP-CM408F 176-LEAD LQFP LEAD ASSIGNMENTS

Table 72 lists the 176-lead LQFP package by lead number and Table 73 lists the 176-lead LQFP package by pin name.

Table 72. ADSP-CM407F/ADSP-CM408F 176-Lead LQFP Lead Assignments (Numerical by Lead Number)

|   Lead No. | PinName    |   Lead No. | PinName       |   Lead No. | PinName    |   Lead No. | PinName   |
|------------|------------|------------|---------------|------------|------------|------------|-----------|
|          1 | PA_13      |         46 | JTG_TRST      |         91 | PE_05      |        136 | VDD_EXT   |
|          2 | VDD_EXT    |         47 | JTG_TDO/SWO   |         92 | PE_04      |        137 | VDD_EXT   |
|          3 | PA_12      |         48 | JTG_TMS/SWDIO |         93 | VDD_EXT    |        138 | PD_12     |
|          4 | PA_11      |         49 | PC_07         |         94 | VDD_INT    |        139 | PD_13     |
|          5 | PC_15      |         50 | VDD_EXT       |         95 | BYP_D0     |        140 | PD_10     |
|          6 | PA_10      |         51 | PC_05         |         96 | GND_ANA3   |        141 | PD_11     |
|          7 | PC_14      |         52 | PC_06         |         97 | ADC1_VIN00 |        142 | PD_08     |
|          8 | VDD_EXT    |         53 | PF_10         |         98 | ADC1_VIN01 |        143 | PD_09     |
|          9 | PC_13      |         54 | PC_04         |         99 | ADC1_VIN02 |        144 | VDD_EXT   |
|         10 | PC_11      |         55 | PF_08         |        100 | ADC1_VIN03 |        145 | PD_07     |
|         11 | PC_12      |         56 | PF_09         |        101 | ADC1_VIN04 |        146 | PD_06     |
|         12 | PA_09      |         57 | VDD_EXT       |        102 | ADC1_VIN05 |        147 | SMC0_AMS0 |
|         13 | PA_08      |         58 | PF_06         |        103 | ADC1_VIN06 |        148 | SMC0_AWE  |
|         14 | PA_07      |         59 | PF_07         |        104 | ADC1_VIN07 |        149 | SMC0_ARE  |
|         15 | VDD_EXT    |         60 | PC_03         |        105 | VDD_ANA1   |        150 | VDD_EXT   |
|         16 | PA_06      |         61 | PF_05         |        106 | GND_ANA1   |        151 | PB_10     |
|         17 | PA_05      |         62 | PC_01         |        107 | BYP_A1     |        152 | PB_09     |
|         18 | PA_04      |         63 | PC_02         |        108 | VREF1      |        153 | PB_08     |
|         19 | PA_03      |         64 | VDD_EXT       |        109 | GND_VREF1  |        154 | PB_07     |
|         20 | PA_02      |         65 | VDD_INT       |        110 | REFCAP     |        155 | PB_06     |
|         21 | PA_01      |         66 | PC_00         |        111 | GND_VREF0  |        156 | PB_05     |
|         22 | VDD_INT    |         67 | PF_04         |        112 | VREF0      |        157 | VDD_INT   |
|         23 | VDD_EXT    |         68 | PF_03         |        113 | BYP_A0     |        158 | VDD_EXT   |
|         24 | SYS_RESOUT |         69 | PF_02         |        114 | GND_ANA0   |        159 | PB_03     |
|         25 | PA_00      |         70 | PF_01         |        115 | VDD_ANA0   |        160 | PB_04     |
|         26 | SYS_FAULT  |         71 | PF_00         |        116 | ADC0_VIN07 |        161 | PD_05     |
|         27 | SYS_HWRST  |         72 | VDD_EXT       |        117 | ADC0_VIN06 |        162 | PB_02     |
|         28 | VDD_EXT    |         73 | PE_15         |        118 | ADC0_VIN05 |        163 | PD_03     |
|         29 | SYS_XTAL   |         74 | PE_14         |        119 | ADC0_VIN04 |        164 | PD_04     |

* Pin no. 177 is the GND supply (see Figure 67) for the processor; this pad must connect to GND.

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 72. ADSP-CM407F/ADSP-CM408F 176-Lead LQFP Lead Assignments (Numerical by Lead Number) (Continued)

|   Lead No. | PinName       |   Lead No. | PinName   |   Lead No. | PinName    |   Lead No. | PinName    |
|------------|---------------|------------|-----------|------------|------------|------------|------------|
|         30 | SYS_CLKIN     |         75 | PE_13     |        120 | ADC0_VIN03 |        165 | VDD_EXT    |
|         31 | VREG_BASE     |         76 | PB_14     |        121 | ADC0_VIN02 |        166 | PD_01      |
|         32 | VDD_VREG      |         77 | PB_15     |        122 | ADC0_VIN01 |        167 | PD_02      |
|         33 | VDD_EXT       |         78 | PB_13     |        123 | ADC0_VIN00 |        168 | PB_01      |
|         34 | USB0_DM       |         79 | VDD_EXT   |        124 | GND_ANA2   |        169 | PD_00      |
|         35 | USB0_DP       |         80 | PB_11     |        125 | VDD_EXT    |        170 | PA_15      |
|         36 | USB0_VBUS     |         81 | PB_12     |        126 | PE_03      |        171 | PB_00      |
|         37 | USB0_ID       |         82 | PE_12     |        127 | PE_02      |        172 | VDD_EXT    |
|         38 | PC_10         |         83 | GND       |        128 | VDD_INT    |        173 | PA_14      |
|         39 | PC_08         |         84 | PE_11     |        129 | VDD_EXT    |        174 | SYS_CLKOUT |
|         40 | PC_09         |         85 | PE_10     |        130 | PE_01      |        175 | SYS_BMODE1 |
|         41 | VDD_EXT       |         86 | VDD_EXT   |        131 | GND        |        176 | SYS_BMODE0 |
|         42 | TWI0_SCL      |         87 | PE_09     |        132 | SYS_NMI    |        177 | GND        |
|         43 | TWI0_SDA      |         88 | PE_08     |        133 | PE_00      |            |            |
|         44 | JTG_TDI       |         89 | PE_07     |        134 | PD_15      |            |            |
|         45 | JTG_TCK/SWCLK |         90 | PE_06     |        135 | PD_14      |            |            |

* Pin no. 177 is the GND supply (see Figure 67) for the processor; this pad must connect to GND.

Table 73. ADSP-CM407F/ADSP-CM408F 176-Lead LQFP Lead Assignments (Alphabetical by Pin Name)

| PinName    |   Lead No. | PinName   |   Lead No. | PinName   |   Lead No. | PinName    |   Lead No. |
|------------|------------|-----------|------------|-----------|------------|------------|------------|
| ADC0_VIN00 |        123 | PA_12     |          3 | PD_09     |        143 | SYS_RESOUT |         24 |
| ADC0_VIN01 |        122 | PA_13     |          1 | PD_10     |        140 | SYS_XTAL   |         29 |
| ADC0_VIN02 |        121 | PA_14     |        173 | PD_11     |        141 | TWI0_SCL   |         42 |
| ADC0_VIN03 |        120 | PA_15     |        170 | PD_12     |        138 | TWI0_SDA   |         43 |
| ADC0_VIN04 |        119 | PB_00     |        171 | PD_13     |        139 | USB0_DM    |         34 |
| ADC0_VIN05 |        118 | PB_01     |        168 | PD_14     |        135 | USB0_DP    |         35 |
| ADC0_VIN06 |        117 | PB_02     |        162 | PD_15     |        134 | USB0_ID    |         37 |
| ADC0_VIN07 |        116 | PB_03     |        159 | PE_00     |        133 | USB0_VBUS  |         36 |
| ADC1_VIN00 |         97 | PB_04     |        160 | PE_01     |        130 | VDD_ANA0   |        115 |
| ADC1_VIN01 |         98 | PB_05     |        156 | PE_02     |        127 | VDD_ANA1   |        105 |
| ADC1_VIN02 |         99 | PB_06     |        155 | PE_03     |        126 | VDD_EXT    |          2 |
| ADC1_VIN03 |        100 | PB_07     |        154 | PE_04     |         92 | VDD_EXT    |          8 |
| ADC1_VIN04 |        101 | PB_08     |        153 | PE_05     |         91 | VDD_EXT    |         15 |
| ADC1_VIN05 |        102 | PB_09     |        152 | PE_06     |         90 | VDD_EXT    |         23 |
| ADC1_VIN06 |        103 | PB_10     |        151 | PE_07     |         89 | VDD_EXT    |         28 |
| ADC1_VIN07 |        104 | PB_11     |         80 | PE_08     |         88 | VDD_EXT    |         33 |
| BYP_A0     |        113 | PB_12     |         81 | PE_09     |         87 | VDD_EXT    |         41 |
| BYP_A1     |        107 | PB_13     |         78 | PE_10     |         85 | VDD_EXT    |         50 |
| BYP_D0     |         95 | PB_14     |         76 | PE_11     |         84 | VDD_EXT    |         57 |
| GND        |         83 | PB_15     |         77 | PE_12     |         82 | VDD_EXT    |         64 |
| GND        |        131 | PC_00     |         66 | PE_13     |         75 | VDD_EXT    |         72 |
| GND        |        177 | PC_01     |         62 | PE_14     |         74 | VDD_EXT    |         79 |
| GND_ANA0   |        114 | PC_02     |         63 | PE_15     |         73 | VDD_EXT    |         86 |
| GND_ANA1   |        106 | PC_03     |         60 | PF_00     |         71 | VDD_EXT    |         93 |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 73. ADSP-CM407F/ADSP-CM408F 176-Lead LQFP Lead Assignments (Alphabetical by Pin Name) (Continued)

| PinName       |   Lead No. | PinName   |   Lead No. | PinName    |   Lead No. | PinName   |   Lead No. |
|---------------|------------|-----------|------------|------------|------------|-----------|------------|
| GND_ANA2      |        124 | PC_04     |         54 | PF_01      |         70 | VDD_EXT   |        125 |
| GND_ANA3      |         96 | PC_05     |         51 | PF_02      |         69 | VDD_EXT   |        129 |
| GND_VREF0     |        111 | PC_06     |         52 | PF_03      |         68 | VDD_EXT   |        136 |
| GND_VREF1     |        109 | PC_07     |         49 | PF_04      |         67 | VDD_EXT   |        137 |
| JTG_TCK/SWCLK |         45 | PC_08     |         39 | PF_05      |         61 | VDD_EXT   |        144 |
| JTG_TDI       |         44 | PC_09     |         40 | PF_06      |         58 | VDD_EXT   |        150 |
| JTG_TDO/SWO   |         47 | PC_10     |         38 | PF_07      |         59 | VDD_EXT   |        158 |
| JTG_TMS/SWDIO |         48 | PC_11     |         10 | PF_08      |         55 | VDD_EXT   |        165 |
| JTG_TRST      |         46 | PC_12     |         11 | PF_09      |         56 | VDD_EXT   |        172 |
| PA_00         |         25 | PC_13     |          9 | PF_10      |         53 | VDD_INT   |         22 |
| PA_01         |         21 | PC_14     |          7 | REFCAP     |        110 | VDD_INT   |         65 |
| PA_02         |         20 | PC_15     |          5 | SMC0_AMS0  |        147 | VDD_INT   |         94 |
| PA_03         |         19 | PD_00     |        169 | SMC0_ARE   |        149 | VDD_INT   |        128 |
| PA_04         |         18 | PD_01     |        166 | SMC0_AWE   |        148 | VDD_INT   |        157 |
| PA_05         |         17 | PD_02     |        167 | SYS_BMODE0 |        176 | VDD_VREG  |         32 |
| PA_06         |         16 | PD_03     |        163 | SYS_BMODE1 |        175 | VREF0     |        112 |
| PA_07         |         14 | PD_04     |        164 | SYS_CLKIN  |         30 | VREF1     |        108 |
| PA_08         |         13 | PD_05     |        161 | SYS_CLKOUT |        174 | VREG_BASE |         31 |
| PA_09         |         12 | PD_06     |        146 | SYS_FAULT  |         26 |           |            |
| PA_10         |          6 | PD_07     |        145 | SYS_HWRST  |         27 |           |            |
| PA_11         |          4 | PD_08     |        142 | SYS_NMI    |        132 |           |            |

* Pin no. 177 is the GND supply (see Figure 67) for the processor; this pad must connect to GND.

## ADSP-CM403F/CM407F/CM408F/CM409F

Figure 66 shows the top view of the 176-lead LQFP lead configuration and Figure 67 shows the bottom view of the 176-lead LQFP lead configuration.

Figure 66. 176-Lead LQFP Lead Configuration (Top View)

<!-- image -->

Figure 67. 176-Lead LQFP Lead Configuration (Bottom View)

<!-- image -->

## ADSP-CM403F/CM407F/CM408F/CM409F

## ADSP-CM409F 212-BALL BGA BALL ASSIGNMENTS

Table 74 lists the 212-ball BGA package by ball number and Table 75 lists the 212-ball BGA package by ball name.

Table 74. ADSP-CM409F 212-Ball BGA Ball Assignments (Numerical by Ball Number)

| Ball No.   | BallName   | Ball No.   | BallName   | Ball No.   | BallName   | Ball No.   | BallName      |
|------------|------------|------------|------------|------------|------------|------------|---------------|
| A01        | GND        | D01        | PA_10      | K03        | VREG_BASE  | T05        | VDD_EXT       |
| A02        | PA_14      | D02        | PA_11      | K07        | GND        | T06        | PF_06         |
| A03        | PB_00      | D03        | PA_13      | K08        | GND        | T07        | PF_05         |
| A04        | PD_00      | D07        | VDD_INT    | K09        | GND        | T08        | PC_01         |
| A05        | PD_02      | D08        | VDD_EXT    | K11        | GND_ANA    | T09        | PF_02         |
| A06        | PD_03      | D09        | VDD_EXT    | K12        | GND_ANA    | T10        | PE_15         |
| A07        | PB_03      | D10        | VDD_EXT    | K16        | REFCAP     | T11        | PB_15         |
| A08        | PB_06      | D11        | VDD_EXT    | K17        | GND_ANA    | T12        | PB_11         |
| A09        | PB_09      | D12        | VDD_INT    | K18        | VDD_ANA1   | T13        | PE_11         |
| A10        | SMC0_AMS0  | D16        | DAC0_VOUT  | L01        | SYS_FAULT  | T14        | VDD_EXT       |
| A11        | SMC0_AWE   | D17        | ADC0_VIN03 | L02        | SYS_RESOUT | T15        | VDD_EXT       |
| A12        | PD_08      | D18        | ADC0_VIN04 | L03        | VDD_EXT    | T16        | GND_ANA       |
| A13        | PD_10      | E01        | PC_14      | L07        | GND        | T17        | ADC1_VIN01    |
| A14        | PD_14      | E02        | PC_13      | L08        | GND        | T18        | ADC1_VIN03    |
| A15        | PE_00      | E03        | PA_12      | L09        | GND        | U01        | JTG_TRST      |
| A16        | PE_02      | E16        | BYP_A0     | L11        | GND_ANA    | U02        | GND           |
| A17        | PE_03      | E17        | ADC0_VIN05 | L12        | GND_ANA    | U03        | JTG_TDO/SWO   |
| A18        | GND_ANA    | E18        | ADC0_VIN06 | L16        | VREF1      | U04        | PC_05         |
| B01        | SYS_BMODE1 | F01        | PA_09      | L17        | ADC1_VIN11 | U05        | PF_10         |
| B02        | GND        | F02        | PC_12      | L18        | GND_ANA    | U06        | PF_09         |
| B03        | SYS_CLKOUT | F03        | PC_11      | M01        | SYS_XTAL   | U07        | PC_03         |
| B04        | PA_15      | F16        | GND_ANA    | M02        | SYS_CLKIN  | U08        | PC_02         |
| B05        | PB_01      | F17        | ADC0_VIN07 | M03        | PA_00      | U09        | PF_03         |
| B06        | PD_04      | F18        | ADC0_VIN08 | M16        | GND_VREF1  | U10        | PF_00         |
| B07        | PB_02      | G01        | PA_07      | M17        | ADC1_VIN10 | U11        | PE_14         |
| B08        | PB_05      | G02        | PA_06      | M18        | ADC1_VIN09 | U12        | PB_13         |
| B09        | PB_08      | G03        | PA_08      | N01        | USB0_DM    | U13        | PB_12         |
| B10        | SMC0_ARE   | G16        | GND_VREF0  | N02        | USB0_VBUS  | U14        | PE_09         |
| B11        | PD_07      | G17        | ADC0_VIN10 | N03        | PC_10      | U15        | PE_08         |
| B12        | PD_11      | G18        | ADC0_VIN09 | N16        | GND_ANA    | U16        | PE_06         |
| B13        | PD_12      | H01        | PA_05      | N17        | ADC1_VIN07 | U17        | GND_ANA       |
| B14        | PD_15      | H02        | PA_04      | N18        | ADC1_VIN08 | U18        | ADC1_VIN00    |
| B15        | SYS_NMI    | H03        | VDD_INT    | P01        | USB0_DP    | V01        | GND           |
| B16        | PE_01      | H07        | GND        | P02        | USB0_ID    | V02        | JTG_TMS/SWDIO |
| B17        | GND_ANA    | H08        | GND        | P03        | PC_08      | V03        | PC_07         |
| B18        | ADC0_VIN00 | H09        | GND        | P16        | BYP_A1     | V04        | PC_06         |
| C01        | PC_15      | H11        | GND_ANA    | P17        | ADC1_VIN05 | V05        | PC_04         |
| C02        | SYS_BMODE0 | H12        | GND_ANA    | P18        | ADC1_VIN06 | V06        | PF_08         |
| C03        | GND        | H16        | VREF0      | R01        | TWI0_SDA   | V07        | PF_07         |
| C04        | VDD_EXT    | H17        | ADC0_VIN11 | R02        | TWI0_SCL   | V08        | PC_00         |
| C05        | VDD_EXT    | H18        | GND_ANA    |            | PC_09      | V09        | PF_04         |
| C06        | PD_01      | J01        | PA_03      | R03 R07    | VDD_EXT    | V10        | PF_01         |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 74. ADSP-CM409F 212-Ball BGA Ball Assignments (Numerical by Ball Number) (Continued)

| Ball No.   | BallName   | Ball No.   | BallName   | Ball No.   | BallName      | Ball No.   | BallName   |
|------------|------------|------------|------------|------------|---------------|------------|------------|
| C07        | PD_05      | J02        | PA_02      | R08        | VDD_INT       | V11        | PE_13      |
| C08        | PB_04      | J03        | VDD_VREG   | R09        | VDD_EXT       | V12        | PB_14      |
| C09        | PB_07      | J07        | GND        | R10        | VDD_INT       | V13        | PE_12      |
| C10        | PB_10      | J08        | GND        | R11        | GND           | V14        | PE_10      |
| C11        | PD_06      | J09        | GND        | R12        | BYP_D0        | V15        | PE_07      |
| C12        | PD_09      | J11        | GND_ANA    | R16        | DAC1_VOUT     | V16        | PE_05      |
| C13        | PD_13      | J12        | GND_ANA    | R17        | ADC1_VIN02    | V17        | PE_04      |
| C14        | GND        | J16        | GND_ANA    | R18        | ADC1_VIN04    | V18        | GND_ANA    |
| C15        | VDD_EXT    | J17        | GND_ANA    | T01        | JTG_TDI       |            |            |
| C16        | GND_ANA    | J18        | VDD_ANA0   | T02        | JTG_TCK/SWCLK |            |            |
| C17        | ADC0_VIN01 | K01        | PA_01      | T03        | GND           |            |            |
| C18        | ADC0_VIN02 | K02        | SYS_HWRST  | T04        | VDD_EXT       |            |            |

Table 75. ADSP-CM409F 212-Ball BGA Ball Assignments (Alphabetical by Ball Name)

| BallName   | Ball No.   | BallName      | Ball No.   | BallName   | Ball No.   | BallName   | Ball No.   |
|------------|------------|---------------|------------|------------|------------|------------|------------|
| ADC0_VIN00 | B18        | GND_ANA       | H12        | PB_15      | T11        | PF_05      | T07        |
| ADC0_VIN01 | C17        | GND_ANA       | H18        | PC_00      | V08        | PF_06      | T06        |
| ADC0_VIN02 | C18        | GND_ANA       | J11        | PC_01      | T08        | PF_07      | V07        |
| ADC0_VIN03 | D17        | GND_ANA       | J12        | PC_02      | U08        | PF_08      | V06        |
| ADC0_VIN04 | D18        | GND_ANA       | J16        | PC_03      | U07        | PF_09      | U06        |
| ADC0_VIN05 | E17        | GND_ANA       | J17        | PC_04      | V05        | PF_10      | U05        |
| ADC0_VIN06 | E18        | GND_ANA       | K11        | PC_05      | U04        | REFCAP     | K16        |
| ADC0_VIN07 | F17        | GND_ANA       | K12        | PC_06      | V04        | SMC0_AMS0  | A10        |
| ADC0_VIN08 | F18        | GND_ANA       | K17        | PC_07      | V03        | SMC0_ARE   | B10        |
| ADC0_VIN09 | G18        | GND_ANA       | L11        | PC_08      | P03        | SMC0_AWE   | A11        |
| ADC0_VIN10 | G17        | GND_ANA       | L12        | PC_09      | R03        | SYS_BMODE0 | C02        |
| ADC0_VIN11 | H17        | GND_ANA       | L18        | PC_10      | N03        | SYS_BMODE1 | B01        |
| ADC1_VIN00 | U18        | GND_ANA       | N16        | PC_11      | F03        | SYS_CLKIN  | M02        |
| ADC1_VIN01 | T17        | GND_ANA       | T16        | PC_12      | F02        | SYS_CLKOUT | B03        |
| ADC1_VIN02 | R17        | GND_ANA       | U17        | PC_13      | E02        | SYS_FAULT  | L01        |
| ADC1_VIN03 | T18        | GND_ANA       | V18        | PC_14      | E01        | SYS_HWRST  | K02        |
| ADC1_VIN04 | R18        | GND_VREF0     | G16        | PC_15      | C01        | SYS_NMI    | B15        |
| ADC1_VIN05 | P17        | GND_VREF1     | M16        | PD_00      | A04        | SYS_RESOUT | L02        |
| ADC1_VIN06 | P18        | JTG_TCK/SWCLK | T02        | PD_01      | C06        | SYS_XTAL   | M01        |
| ADC1_VIN07 | N17        | JTG_TDI       | T01        | PD_02      | A05        | TWI0_SCL   | R02        |
| ADC1_VIN08 | N18        | JTG_TDO/SWO   | U03        | PD_03      | A06        | TWI0_SDA   | R01        |
| ADC1_VIN09 | M18        | JTG_TMS/SWDIO | V02        | PD_04      | B06        | USB0_DM    | N01        |
| ADC1_VIN10 | M17        | JTG_TRST      | U01        | PD_05      | C07        | USB0_DP    | P01        |
| ADC1_VIN11 | L17        | PA_00         | M03        | PD_06      | C11        | USB0_ID    | P02        |
| BYP_A0     | E16        | PA_01         | K01        | PD_07      | B11        | USB0_VBUS  | N02        |
| BYP_A1     | P16        | PA_02         | J02        | PD_08      | A12        | VDD_ANA0   | J18        |
| BYP_D0     | R12        | PA_03         | J01        | PD_09      | C12        | VDD_ANA1   | K18        |
| DAC0_VOUT  | D16        | PA_04         | H02        | PD_10      | A13        | VDD_EXT    | C04        |
| DAC1_VOUT  | R16        | PA_05         | H01        | PD_11      | B12        | VDD_EXT    | C05        |
| GND        | A01        | PA_06         | G02        | PD_12      | B13        | VDD_EXT    | C15        |

## ADSP-CM403F/CM407F/CM408F/CM409F

Table 75. ADSP-CM409F 212-Ball BGA Ball Assignments (Alphabetical by Ball Name) (Continued)

| BallName   | Ball No.   | BallName   | Ball No.   | BallName   | Ball No.   | BallName   | Ball No.   |
|------------|------------|------------|------------|------------|------------|------------|------------|
| GND        | B02        | PA_07      | G01        | PD_13      | C13        | VDD_EXT    | D08        |
| GND        | C03        | PA_08      | G03        | PD_14      | A14        | VDD_EXT    | D09        |
| GND        | C14        | PA_09      | F01        | PD_15      | B14        | VDD_EXT    | D10        |
| GND        | H07        | PA_10      | D01        | PE_00      | A15        | VDD_EXT    | D11        |
| GND        | H08        | PA_11      | D02        | PE_01      | B16        | VDD_EXT    | L03        |
| GND        | H09        | PA_12      | E03        | PE_02      | A16        | VDD_EXT    | R07        |
| GND        | J07        | PA_13      | D03        | PE_03      | A17        | VDD_EXT    | R09        |
| GND        | J08        | PA_14      | A02        | PE_04      | V17        | VDD_EXT    | T04        |
| GND        | J09        | PA_15      | B04        | PE_05      | V16        | VDD_EXT    | T05        |
| GND        | K07        | PB_00      | A03        | PE_06      | U16        | VDD_EXT    | T14        |
| GND        | K08        | PB_01      | B05        | PE_07      | V15        | VDD_EXT    | T15        |
| GND        | K09        | PB_02      | B07        | PE_08      | U15        | VDD_INT    | D07        |
| GND        | L07        | PB_03      | A07        | PE_09      | U14        | VDD_INT    | D12        |
| GND        | L08        | PB_04      | C08        | PE_10      | V14        | VDD_INT    | H03        |
| GND        | L09        | PB_05      | B08        | PE_11      | T13        | VDD_INT    | R08        |
| GND        | R11        | PB_06      | A08        | PE_12      | V13        | VDD_INT    | R10        |
| GND        | T03        | PB_07      | C09        | PE_13      | V11        | VDD_VREG   | J03        |
| GND        | U02        | PB_08      | B09        | PE_14      | U11        | VREF0      | H16        |
| GND        | V01        | PB_09      | A09        | PE_15      | T10        | VREF1      | L16        |
| GND_ANA    | A18        | PB_10      | C10        | PF_00      | U10        | VREG_BASE  | K03        |
| GND_ANA    | B17        | PB_11      | T12        | PF_01      | V10        |            |            |
| GND_ANA    | C16        | PB_12      | U13        | PF_02      | T09        |            |            |
| GND_ANA    | F16        | PB_13      | U12        | PF_03      | U09        |            |            |
| GND_ANA    | H11        | PB_14      | V12        | PF_04      | V09        |            |            |

## ADSP-CM403F/CM407F/CM408F/CM409F

Figure 68 shows an overview of signal placement on the 212-ball CSP\_BGA package.

Figure 68. 212-Ball CSP\_BGA Ball Configuration

<!-- image -->

## ADSP-CM403F/CM407F/CM408F/CM409F

## OUTLINE DIMENSIONS

Dimensions in Figure 69 (for the 120-lead LQFP), Figure 70 (for the 176-lead LQFP) and Figure 71 (for the 212-ball BGA) are shown in millimeters.

<!-- image -->

COMPLIANT TO JEDEC STANDARDS MS-026-BEE-HD

Figure 69. 120-Lead Low Profile Quad Flat Package, Exposed Pad [LQFP\_EP] 1

(SW-120-3) Dimensions shown in millimeters

1 For information relating to the SW-120-3 package's exposed pad, see the table endnote in ADSP-CM403F 120-Lead LQFP Lead Assignments.

## ADSP-CM403F/CM407F/CM408F/CM409F

<!-- image -->

COMPLIANT TO JEDEC STANDARDS MS-026-BGA-HD

Figure 70. 176-Lead Low Profile Quad Flat Package, Exposed Pad [LQFP\_EP] (SW-176-3)

Dimensions shown in millimeters

1 For information relating to the SW-176-3 package's exposed pad, see the table endnote in ADSP-CM407F/ADSP-CM408F 176-Lead LQFP Lead Assignments.

1

## ADSP-CM403F/CM407F/CM408F/CM409F

<!-- image -->

TOP VIEW

<!-- image -->

<!-- image -->

<!-- image -->

COMPLIANT TO JEDEC STANDARDS MO-192-AAG-2 WITH EXCEPTION OF THE BALL COUNT.

Figure 71. 212-Ball Chip Scale Package Ball Grid Array [CSP\_BGA] (BC-212-1) Dimensions shown in millimeters

## ADSP-CM403F/CM407F/CM408F/CM409F

## ORDERING GUIDE

| Model 1            | Processor Instruction Rate (Max)   | ADC ENOB   | Ethernet   | Temperature Range 2   | Package Description                               | Package Option   |
|--------------------|------------------------------------|------------|------------|-----------------------|---------------------------------------------------|------------------|
| ADSP-CM403CSWZ-CF1 | 240MHz                             | 13+        | N/A        | -40°C to +125°C       | 120-Lead LowProfile QuadFlat Package, Exposed Pad | SW-120-3         |
| ADSP-CM407CSWZ-AF1 | 240MHz                             | 11+        | 1          | -40°C to +125°C       | 176-Lead LowProfile QuadFlat Package, Exposed Pad | SW-176-3         |
| ADSP-CM407CSWZ-BF1 | 240MHz                             | 11+        | N/A        | -40°C to +125°C       | 176-Lead LowProfile QuadFlat Package, Exposed Pad | SW-176-3         |
| ADSP-CM408CSWZ-AF1 | 240MHz                             | 13+        | 1          | -40°C to +125°C       | 176-Lead LowProfile QuadFlat Package, Exposed Pad | SW-176-3         |
| ADSP-CM408CSWZ-BF1 | 240MHz                             | 13+        | N/A        | -40°C to +125°C       | 176-Lead LowProfile QuadFlat Package, Exposed Pad | SW-176-3         |
| ADSP-CM409CBCZ-AF1 | 240MHz                             | 13+        | 1          | -40°C to +125°C       | 212-Ball Chip Scale Package Ball Grid Array       | BC-212-1         |

<!-- image -->