<!-- lastmod 2026-03-31 -->
<!-- image -->

## High Performance SHARC-FX DSP Core

## With Arm-Based Connectivity

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## On-board accelerators

Two FIR engines (up to 1 GHz, 4 taps per cycle)

Four IIR engines (up to 1 GHz, 6 cycles per biquad each)

## Security

Cryptographic hardware accelerators

Fast secure boot with IP protection

## PACKAGE, KEY PERIPHERALS, AND COMPATIBILITY

17 mm × 17 mm, 400-ball BGA\_ED (0.8 mm pitch), RoHS compliant

Ethernet, HyperBus, CAN-FD, HADC, I 2 C, ASRC/SPORT ADSP-2156x and ADSP-2159x layout-compatible options AEC-Q100 qualified for automotive applications

## APPLICATIONS

Automotive: audio for head units and amplifiers, ANC/RNC, digital cockpit, ICC, AEC/Mic beamforming, ADAS Consumer: speakers, sound bars, AVRs, conferencing systems, mixing consoles, microphone arrays

## SYSTEM FEATURES

SHARC-FX high performance  floating-point core

256-bit vector size

Peak performance at 1 GHz core frequency: 24 GFLOPS, 8 GMAC (32-bit float), 16 GMAC (16-bit fixed)

64/512 kB L1 instruction/data RAM with ECC

32/256 kB L1 instruction/data cache with ECC

Arm Cortex-M33 connectivity core

400 MHz frequency, 64/128 kB instruction/data RAM with parity protection

## Memory

Parallel operation with dedicated memory, DMA, and multichannel support

Up to 16 Mb (2 MB) on-chip L2 SRAM with ECC protection One Level 3 (L3) 16-bit interface to DDR3L SDRAM devices

Figure 1. ADSP-SC835 (Full-Featured Model) Processor Block Diagram

<!-- image -->

SHARC is a registered trademark of Analog Devices, Inc.

## Rev. A

## Document Feedback

Information  furnished  by  Analog  Devices  is  believed  to  be  accurate  and  reliable. However,  no  responsibility  is  assumed  by  Analog  Devices  for  its  use,  nor  for  any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## TABLE OF CONTENTS

| System Features . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                     | . . 1   |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| Package, Key Peripherals, and Compatibility . . . . . . . . . . . . . . . .                                                                                                   | . . 1   |
| Applications . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                | . . 1   |
| Table of Contents . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                       | . . 2   |
| Revision History . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                      | . . 2   |
| General Description . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                             | . . 3   |
| SHARC-FX Processor Core . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                                 | . . 5   |
| Arm Cortex-M33 Processor (ADSP-SC834/SC835 Only) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                | . . 6   |
| System Infrastructure . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                   | . . 7   |
| System Memory Map . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                       | . . 7   |
| Security Features . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                             | 10      |
| Security Features Disclaimer . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                              | 10      |
| Safety Features . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                         | 10      |
| Processor Peripherals . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                   | 11      |
| System Acceleration . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                   | 16      |
| System Design . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                         | 16      |
| System Debug . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                          | 18      |
| Development Tools . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                   | 18      |
| Additional Information . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                        | 19      |
| Related Signal Chains . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                     | 20      |
| ADSP-2183x/ADSP-SC83x Detailed Signal Descriptions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                | 21      |
| 400-Ball High Peripheral Count (HPC) BGA Signals . . . . . .                                                                                                                  | 25      |
| GPIO Multiplexing for 400-Ball HPC BGA Package . . . . . . .                                                                                                                  | 32      |
| 400-Ball Low Peripheral Count (LPC) BGA Signals . . . . . . . .                                                                                                               | 35      |
| REVISION HISTORY                                                                                                                                                              |         |
| 8/2025-Rev. 0 to Rev.A                                                                                                                                                        |         |
| Change in Conditions column for parameter f SCLK0 in Clock Operating Conditions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                     | 54      |
| Corrected N05 ball name to VDD_FPLLANA (from VDD_REF) in ADSP-21834/21835 400-Ball LPC BGA Ball Assignments (Numerical by Ball Number) . . . . . . . . . . . . . . . . . .    | 115     |
| Corrected N05 ball name to VDD_FPLLANA (from VDD_REF) in ADSP-21834/21835 400-Ball LPC BGA Ball Assignments (Alphabetical by Ball Name) . . . . . . . . . . . . . . . . . . . | 118     |

| GPIO Multiplexing for 400-Ball LPC BGA Package . . . .                                                                                                 | . 41   |
|--------------------------------------------------------------------------------------------------------------------------------------------------------|--------|
| ADSP-2183x/ADSP-SC583x Designer Quick Reference                                                                                                        | . 43   |
| Specifications . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                 | . 53   |
| Operating Conditions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                     | . 53   |
| Electrical Characteristics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                       | . 56   |
| HADC . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                               | . 60   |
| TMU . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                            | . 61   |
| Absolute Maximum Ratings . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                                 | . 61   |
| ESD Caution . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                        | . 61   |
| Timing Specifications . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                    | . 62   |
| Output Drive Currents . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                        | 104    |
| Test Conditions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                            | 106    |
| Environmental Conditions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                               | 107    |
| ADSP-21836/21837/ADSP-SC834/SC835 400-Ball HPC BGA Ball Assignments . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .        | 108    |
| Numerical by Ball Number . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                               | 108    |
| Alphabetical by Ball Name . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                            | 111    |
| ADSP-21834/21835 400-Ball LPC BGA Ball Assignments . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . | 115    |
| Numerical by Ball Number . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                               | 115    |
| Alphabetical by Ball Name . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                            | 118    |
| Outline Dimensions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                             | 122    |
| Surface-Mount Design . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                       | 122    |
| Automotive Products . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                                | 123    |
| Ordering Guide . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .                                       | 124    |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## GENERAL DESCRIPTION

The ADSP-2183x/ADSP-SC83x digital signal processors (DSPs) are members of the SHARC ® -FX family of products. The SHARC-FX core uses a single-instruction, multiple-data (SIMD) vector floating-point architecture and can issue up to four instructions per cycle in most combinations. The SHARCFX core inside the ADSP-2183x/ADSP-SC83x processors offers processing speeds of up to 1 GHz coupled with up to 2 MB of L2 memory for low latency applications. For applications seeking enhanced connectivity options such as Ethernet, the ADSPSC834/SC835 includes an Arm ® Cortex ® -M33 in addition to the SHARC-FX core. All members of the SHARC-FX family have on-board IIR and FIR accelerators as well as an efficient autovectorizing compiler for C/C++ programming.

The SHARC-FX core supports scalar and vector operations on all data types in vectors up to 256 bits, including integer, fixedpoint, floating-point, complex 16-bit/32-bit fixed-point and complex 32-bit/64-bit floating-point. Eight float32 multiply/accumulate operations are allowed per cycle, with no constraints on alignment. The SHARC-FX core also features

Table 1. DSP Core Comparison: SHARC+ vs. SHARC-FX

| Feature                          | SHARC+                                                         | SHARC-FX                                                                           |
|----------------------------------|----------------------------------------------------------------|------------------------------------------------------------------------------------|
| Float32 Operations Per Cycle     | 2 multiply and 2 add                                           | 8 fused multiply-add and 8 add                                                     |
| 1K Complex FFT Benchmark         | 11,000 cycles                                                  | 2,500 cycles                                                                       |
| Instruction Format               | One to four operations, 16 to 48 bits                          | One to four operations, 16 to 128 bits                                             |
| L1 Memory                        | 640 kB (4-bank shared by data RAM, instruction RAM, and cache) | 512 kB data RAM, 256 kB data cache, 64 kB instruction RAM, 32 kB instruction cache |
| Float64 Operations Per Cycle     | 2 every 6 cycles                                               | 4 each cycle                                                                       |
| Single Sample Biquad Performance | 2 channels and 2 stages every 8 cycles                         | 8 channels and 2 stages every 8 cycles                                             |
| Logf/expf Scalar Benchmark       | 50 cycles                                                      | 4 cycles                                                                           |

large register sets (32 data registers), thus reducing the need for stack save and restore. The peripherals and system architecture of the ADSP-2183x/ADSP-SC83x processors are compatible with previous SHARC processors, allowing for easy application porting.

By integrating a set of industry-leading system peripherals and memory, this family of processors is the platform of choice for applications that require leading-edge signal processing in one integrated package. These applications span a wide array of markets, including automotive, professional audio, and industrial-based applications that require high floating-point performance.

Table 1 provides a comparison between the previous-generation SHARC+ core and the SHARC-FX core.

Table 2 provides comparison information for features that vary across the standard processors.

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 2. Processor Features

|                                          | DSP Only                    | DSP Only                    | DSP Only            | DSP Only            | Enhanced Connectivity   | Enhanced Connectivity   |
|------------------------------------------|-----------------------------|-----------------------------|---------------------|---------------------|-------------------------|-------------------------|
| Processor Feature 1                      | ADSP-21834                  | ADSP-21835                  | ADSP-21836          | ADSP-21837          | ADSP-SC834              | ADSP-SC835              |
| SHARC-FX DSP Core (MHz, Maximum) 2       | 800                         | 800, 1000                   | 800                 | 800, 1000           | 800                     | 800, 1000               |
| L1 D-RAM/ I-RAM (kB)                     | 512/64                      | 512/64                      | 512/64              | 512/64              | 512/64                  | 512/64                  |
| L1 D-Cache/I-Cache (kB)                  | 256/32                      | 256/32                      | 256/32              | 256/32              | 256/32                  | 256/32                  |
| Arm Cortex-M33 Core (MHz, Maximum)       | N/A                         | N/A                         | N/A                 | N/A                 | 400                     | 400, 333                |
| L1 D-RAM/ I-RAM (kB)                     | N/A                         | N/A                         | N/A                 | N/A                 | 128/64                  | 128/64                  |
| System Memory                            |                             |                             |                     |                     |                         |                         |
| L2 SRAM (kB) DDR3L 3 Controller (16-Bit) | 1024 1                      | 2048 1                      | 1024 1              | 2048 1              | 1024 1                  | 2048 1                  |
| Hardware Accelerators                    |                             |                             |                     |                     |                         |                         |
| FIRs Per SHARC-FX Core                   | 2                           | 2                           | 2                   | 2                   | 2                       | 2                       |
| IIRs Per SHARC-FX Core                   | 4                           | 4                           | 4                   | 4                   | 4                       | 4                       |
| Security Crypto Engine                   | Yes                         | Yes                         | Yes                 | Yes                 | Yes                     | Yes                     |
| DAI (Includes SRU and DRU)               | 2                           | 2                           | 2                   | 2                   | 2                       | 2                       |
| Full SPORTs                              | 8 (4 per DAI)               | 8 (4 per DAI)               | 8 (4 per DAI)       | 8 (4 per DAI)       | 8 (4 per DAI)           | 8 (4 per DAI)           |
| S/PDIF Receive/Transmit                  | 2 (1 per DAI)               | 2 (1 per DAI)               | 2 (1 per DAI)       | 2 (1 per DAI)       | 2 (1 per DAI)           | 2 (1 per DAI)           |
| PCGs                                     | 8 (4 per DAI)               | 8 (4 per DAI)               | 8 (4 per DAI)       | 8 (4 per DAI)       | 8 (4 per DAI)           | 8 (4 per DAI)           |
| 4-Channel PDMMICInput                    | 2 (1 per DAI)               | 2 (1 per DAI)               | 2 (1 per DAI)       | 2 (1 per DAI)       | 2 (1 per DAI)           | 2 (1 per DAI)           |
| Pin Buffers                              | 28 (14 per DAI)             | 28 (14 per DAI)             | 40 (20 per DAI)     | 40 (20 per DAI)     | 40 (20 per DAI)         | 40 (20per DAI)          |
| Multiplexed Peripherals                  |                             |                             |                     |                     |                         |                         |
| MLB 3-Pin                                | 1 4                         | 1 4                         | 1 4                 | 1 4                 | 1 4                     | 1 4                     |
| Link Ports                               | 2                           | 2                           | 2                   | 2                   | 2                       | 2                       |
| GP Counter                               | 1                           | 1                           | 1                   | 1                   | 1                       | 1                       |
| Watchdog Timers                          | 3                           | 3                           | 3                   | 3                   | 3                       | 3                       |
| I 2 C (TWI)                              | 6                           | 6                           | 6                   | 6                   | 6                       | 6                       |
| GP Timers                                | 16 5                        | 16 5                        | 16 5                | 16 5                | 16 5                    | 16 5                    |
| xSPI with Octal and HyperBus Support     | 1                           | 1                           | 1                   | 1                   | 1                       | 1                       |
| Quad-Data Bit SPI                        | 2                           | 2                           | 2                   | 2                   | 2                       | 2                       |
| Dual-Data Bit SPI                        | 1                           | 1                           | 1                   | 1                   | 1                       | 1                       |
| UARTs                                    | 3                           | 3                           | 3                   | 3                   | 3                       | 3                       |
| EMAC Std/AVB + Timer IEEE 1588           | N/A                         | N/A                         | N/A                 | N/A                 | 10/100/1000             | 10/100/1000             |
| CAN FD                                   | N/A                         | N/A                         | N/A                 | N/A                 | 2 6                     | 2 6                     |
| ePWM HADC (12-Bit)                       | 8 outputs 4-channel         | 8 outputs 4-channel         | 8 outputs 8-channel | 8 outputs 8-channel | 8 outputs 8-channel     | 8 outputs 8-channel     |
| GPIO Ports                               | Port A to Port C E Port     | Port A to Port C            | Port A to Port E    | Port A to Port      | A to Port E             | Port A to Port E        |
| GPIO + DAI Pins                          | 40 + 28                     | 40 + 28                     | 80 + 40             | 80 + 40             | 80 + 40                 | 80 + 40                 |
| Package Options                          | 400-ball BGA_ED             | 400-ball BGA_ED             | 400-ball BGA_ED     | 400-ball BGA_ED     | 400-ball BGA_ED         | 400-ball BGA_ED         |
| Layout Compatibility                     | ADSP-2156x and ADSP-2159x 7 | ADSP-2156x and ADSP-2159x 7 | ADSP-2159x 8        | ADSP-2159x 8        | ADSP-2159x 8            | ADSP-2159x 8            |

3

DDR3L is supported in 1.39 V mode of operation.

4 Applies to automotive models only. See Automotive Products.

5 GP timer instances TIMER10-TIMER15 are not brought out to package pins and must only be configured for internal modes of operation.

6 CAN FD is not available on consumer grade (0°C to 125°C) models. See Ordering Guide.

7 Layout compatible with ADSP-21566/7/9 and ADSP-21593.

8 Layout compatible with ADSP-21594 and ADSP-SC592/4/6/8.

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## SHARC-FX PROCESSOR CORE

SHARC-FX is a DSP core (Figure 2) developed jointly by Analog Devices and Cadence, leveraging Cadence's Xtensa ® core technology. It is a follow-on to the SHARC and SHARC+ DSP cores from Analog Devices. The SHARC-FX core is not ISA compatible with the SHARC and SHARC+ DSP cores.

The following sections describe the key features of the SHARCFX core inside the ADSP-2183x/ADSP-SC83x processors.

## 4-Way VLIW

The 4-way VLIW issues one to four operations per cycle in an instruction that is 16 to 128 bits wide. In every cycle, a load or store or scalar ALU op, a second load or second ALU op, a vector ALU op, or a vector ALU or multiply/accumulate op can be executed.

## 256-Bit SIMD

This wide SIMD unit can be broken up into lanes that are 8, 16, 32, or 64 bits wide. For example, the unit can execute eight 32bit multiply-accumulates per cycle. Each lane of a vector is enabled or disabled by a boolean register for conditional operations. An entire vector is permuted for small table lookups. Support is also added for fast histograms.

## DSP Features

The SHARC-FX core supports loop counters, circular addressing, and fixed-point arithmetic with 20-, 40-, and 80-bit accumulators, binary-point shifts and rounding, and saturation.

## Fixed- and Floating-Point Data Types

The SHARC-FX core handles all major data types:

- 8-, 16-, 32-, and 64-bit integers
- 8-, 16-, and 32-bit fixed-point, both real and complex
- 32- and 64-bit floating-point, both real and complex.

## L1 Data Cache and RAM

The SHARC-FX core includes a 256 kB data cache, a 512 kB data RAM, a 32 kB instruction cache, and a 64 kB instruction RAM. The caches are write-back or write-through, use 64B lines and are four-way associative with LRU replacement. All memories are protected with ECC. Figure 4 shows the ADSP-2183x/ ADSP-SC83x memory map.

## Memory Protection Unit (MPU)

Although memory is physically addressed, an MPU of the ADSP-2183x/ADSP-SC83x controls the access and the caching behavior for up to 32 variable-sized address ranges.

<!-- image -->

SYSTEM FABRIC

Figure 2. SHARC-FX Processor Block Diagram

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## Advanced Arithmetic

The SHARC-FX core supports high accuracy, floating-point arithmetic via a fused multiply-add, and also has seeds for accurate square root and reciprocal. The processor core executes efficient but imprecise checking for floating-point errors and can also break on fixed-point saturation. The log2f and exp2f operations are executed in one cycle, and these operations are used for single-cycle reciprocal, square-root, divide, and power at less accuracy. The compiler recognizes vector versions of standard functions like sinf and sqrtf operations and can automatically vectorize loops containing them.

## Built-In Interrupt Controller

A 236-input vectored interrupt controller is available to the ADSP-2183x/ADSP-SC83x processor. Each input can be active high or low, edge or level, and can have one of 15 priority levels.

## Built-In Direct Memory Access Engine (iDMA)

A fast, low-latency DMA controller for moving blocks to and from the Data RAM is available.

## CoreSight Debugging

The ADSP-2183x/ADSP-SC83x uses the Arm ® CoreSight TM SoC-600 debug standard, with breakpoints, watchpoints, and PC tracing. It can also count a wide range of events such as cache misses and pipeline stalls for performance analysis. When used with a third-party emulator, the emulator must support CoreSight SoC-600.

## ARM CORTEX-M33 PROCESSOR (ADSP-SC834/SC835 ONLY)

The Arm Cortex-M33 processor (see Figure 3) is a low-gate count, highly energy-efficient processor with the following features:

- 64 kB instruction RAM and 128 kB data RAM
- In order issue pipeline
- Arm ® Thumb ® -2 technology
- Nested vectored interrupt controller (NVIC) closely integrated with the processor
- Floating-point unit (FPU) supporting single-precision arithmetic
- Trace support through an embedded trace macrocell (ETM) interface
- Arm ® TrustZone ® security extensions
- Armv8-M DSP extension
- Memory protection unit (MPU) with 16 secure regions and 16 nonsecure regions

Figure 3. Arm Cortex-M33Processor Integration Diagram

<!-- image -->

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## Nested Vectored Interrupt Controller (NVIC)

The nested vectored interrupt controller (NVIC) is closely integrated with the Arm Cortex-M33 core to achieve low latency interrupt processing. The functions of the NVIC include the following:

- Up to 236 external interrupts
- 16 levels of interrupt
- Dynamic reprioritization of interrupts
- Priority grouping which enables selection of preempting and nonpreempting interrupt levels
- Support for tail-chaining and late arrival of interrupts which enables back-to-back interrupt processing without the overhead of state saving restoration between interrupts
- Secure interrupts can be prioritized above any nonsecure interrupts

## SYSTEM INFRASTRUCTURE

The following sections describe the system infrastructure of the ADSP-2183x/ADSP-SC83x processors.

## System L2 Memory

A system L2 SRAM memory of up to 16 Mb (2 MB) is available to the SHARC-FX core, the Arm Cortex-M33 core, and the system DMA channels (see Table 4). The L2 SRAM block is

## SYSTEM MEMORY MAP

## Table 3. SHARC-FX L1 DRAM and IRAM Space

| Memory                    | SHARC-FX Private Addressing Space   | ArmCortex-M33 Addressing Space   | System Addressing Space   |
|---------------------------|-------------------------------------|----------------------------------|---------------------------|
| L1 Data RAM(512 KB)       | 0x2F780000-0x2F7FFFFF               | 0x28240000-0x282BFFFF            | 0x28240000-0x282BFFFF     |
| L1 Instruction RAM(64 KB) | 0x2F800000-0x2F80FFFF               | 0x282C0000-0x282CFFFF            | 0x282C0000-0x282CFFFF     |

## Table 4. SHARC-FX and Arm Cortex-M33 L2 Memory Addressing Map

| Memory         | SHARC-FX Addressing   | ArmCortex-M33 Addressing   | System Addressing     |
|----------------|-----------------------|----------------------------|-----------------------|
| L2 BootROM0    | 0x20200000-0x2020FFFF | 0x20200000-0x2020FFFF      | 0x20200000-0x2020FFFF |
| L2 RAM(2 MB) 1 | 0x20000000-0x201FFFFF | 0x20000000-0x201FFFFF      | 0x20000000-0x201FFFFF |
| L2 RAM(1 MB) 1 | 0x20100000-0x201FFFFF | 0x20100000-0x201FFFFF      | 0x20100000-0x201FFFFF |
| L2 BootROM1    | 0x20210000-0x2021FFFF | 0x20210000-0x2021FFFF      | 0x20210000-0x2021FFFF |

## Table 5. Arm Cortex-M33 Boot ROM, DRAM, and IRAM Space

| Memory                 | ArmCortex-M33 Private Addressing Space   | SHARC-FX Addressing Space   | System Addressing Space   |
|------------------------|------------------------------------------|-----------------------------|---------------------------|
| Data RAM(128 KB)       | 0x28AC0000-0x28ADFFFF                    | 0x28AC0000-0x28ADFFFF       | 0x28AC0000-0x28ADFFFF     |
| Instruction RAM(64 KB) | 0x00040000-0x0004FFFF                    | 0x28A80000-0x28A8FFFF       | 0x28A80000-0x28A8FFFF     |
| Boot ROM(64 KB)        | 0x00000000-0x0000FFFF                    | 0x28A40000-0x28A4FFFF       | 0x28A40000-0x28A4FFFF     |

## Table 6. Memory Map of Mapped I/Os

|                                | SHARC-FX Addressing   | ArmCortex-M33 Addressing   | System Addressing     |
|--------------------------------|-----------------------|----------------------------|-----------------------|
| SPI1/SPI2/xSPI Memory (512 MB) | 0x60000000-0x7FFFFFFF | 0x60000000-0x7FFFFFFF      | 0x60000000-0x7FFFFFFF |

subdivided into up to eight banks to support concurrent access to the L2 memory ports. Memory accesses to the L2 memory space are multicycle accesses by the SHARC-FX core.

The memory space is used for various situations including:

- Accelerator and peripheral sources and destination memory to avoid accessing data in the external memory
- A location for DMA descriptors
- Storage for additional data for the SHARC-FX core to avoid external memory latencies and reduce external memory bandwidth
- Storage for data cached by the SHARC-FX core

See the System Memory Protection Unit (SMPU) section for options in limiting access by specific cores and DMA requesters.

## One Time Programmable Memory (OTP)

The processors feature 7 kb of one time programmable (OTP) memory that is memory-map accessible. This memory can be programmed with custom keys and supports secure boot and secure operation.

## I/O Memory Space

Mapped I/Os include SPI1/SPI2/xSPI memory address space (see Table 6).

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## Table 7. DMC Memory Map

|             | SHARC-FX Addressing   | ArmCortex-M33 Addressing   | System Addressing     |
|-------------|-----------------------|----------------------------|-----------------------|
| DMC0 (1 GB) | 0x80000000-0xBFFFFFFF | 0x80000000-0xBFFFFFFF      | 0x80000000-0xBFFFFFFF |

## System Crossbars (SCBs)

The system crossbars (SCBs) are the fundamental building blocks of a switch fabric style for on-chip system bus interconnection. The SCBs connect system bus requesters to system bus completers, providing concurrent data transfer between multiple bus requesters and multiple bus completers. A hierarchical model-built from multiple SCBs-provides a power and area efficient system interconnection.

The SCBs provide the following features:

- Highly efficient, pipelined bus transfer protocol for sustained throughput
- Full-duplex bus operation for flexibility and reduced latency
- Concurrent bus transfer support to allow multiple bus requesters to access bus completers simultaneously
- Protection model (privileged/secure) support for selective bus interconnect protection

## Direct Memory Access (DMA)

The processor uses direct memory access (DMA) to transfer data within memory spaces or between a memory space and a peripheral. The processor can specify data transfer operations and return to normal processing while the fully integrated DMA controller carries out the data transfers independent of processor activity.

DMA transfers can occur between memory and a peripheral or between one memory and another memory. Each memory to memory DMA stream uses two channels: the source channel and the destination channel.

All DMA channels can transport data to and from all on-chip and off-chip memories. Programs can use two types of DMA transfers: descriptor-based or register-based. Register-based DMA allows the processors to program DMA control registers directly to initiate a DMA transfer. On completion, the DMA control registers automatically update with original setup values for continuous transfer. Descriptor-based DMA transfers require a set of parameters stored within memory to initiate a DMA sequence. Descriptor-based DMA transfers allow multiple DMA sequences to be chained together by programming a DMA channel to set up and start another DMA transfer automatically after the current sequence completes.

The DMA engine supports the following DMA operations:

- A single linear buffer that stops on completion
- A linear buffer with negative, positive, or zero stride length
- A circular autorefreshing buffer that interrupts when each buffer becomes full
- A similar circular buffer that interrupts on fractional buffers, such as at the halfway point

<!-- image -->

| 0x FFFF FFFF                      | RESERVED                                      |
|-----------------------------------|-----------------------------------------------|
| 0x C000 0000                      | DMC0 (1GB)                                    |
| 0x 8000 0000                      |                                               |
| 0x 6000 0000                      | SPI1/SPI2/xSPI0 FLASH ADDRESS SPACE (512MB)   |
| 0x 4000 0000                      |                                               |
| 0x 3000 0000                      | SYSTEM MMR                                    |
| 0x 2F80 FFFF                      | RESERVED                                      |
| 0x 2F80 0000                      | SHARC-FX I-RAM (64KB)                         |
| 0x 2F78 0000                      | SHARC-FX D-RAM (512KB)                        |
| 0x 28AD FFFF                      | RESERVED                                      |
| 0x 28AC 0000                      | ARM CORTEX M-33 D-RAM (128KB)                 |
| 0x 28A8 FFFF                      | RESERVED                                      |
| 0x 28A8 0000                      | ARM CORTEX M-33 I-RAM VIA MP SPACE            |
| 0x 28A4 FFFF                      | ARM CORTEX M-33 BOOTVIA MP SPACE              |
| 0x 28A4                           |                                               |
| 0000                              |                                               |
|                                   | SHARC-FX D-RAMVIA MP SPACE                    |
| 0x 2022 0000                      | RESERVED                                      |
|                                   | L2 BOOT ROM 1 (0.5Mb)                         |
| 0x 2021 0000                      | L2 BOOT ROM 0                                 |
|                                   | (0.5Mb)                                       |
| 0x 2020 0000                      |                                               |
| 0x 2000 0000                      | L2 SRAM (16Mb)                                |
| 0x 0004 FFFF SPACE                | RESERVED ARM CORTEX M-33 I-RAM (64KB)         |
| 0x 0004 0000 0x 0000 FFFF ADDRESS | RESERVED ARM CORTEX M-33 BOOT (64KB) RESERVED |
| 0x 0000 0000                      |                                               |

SHARC-FX

Figure 4. ADSP-2183x/ADSP-SC83x Memory Map

- A 1D DMA using a set of identical ping pong buffers defined by a linked ring of two-word descriptor sets, each containing a link pointer and an address
- A 1D DMA using a linked list of four-word descriptor sets containing a link pointer, an address, a length, and a configuration
- A 2D DMA using an array of one-word descriptor sets, specifying only the base DMA address
- A 2D DMA using a linked list of multiword descriptor sets, specifying all configurable parameters

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## Memory Direct Memory Access (MDMA)

The processor supports a total of eight MDMA channels for various memory direct memory access (MDMA) operations, including,

- Enhanced bandwidth MDMA channels with cyclic redundancy check (CRC) protection (32-bit bus width, run on SYSCLK)
- Enhanced bandwidth MDMA channel (32-bit bus width, runs on SYSCLK)
- Maximum bandwidth MDMA channel (64-bit bus width, runs on SYSCLK)

## Extended Memory DMA

Extended memory DMA supports various operating modes, such as delay line (which allows processor reads and writes to external delay line buffers and to the external memory), with limited core interaction and scatter/gather DMA (writes to and from noncontiguous memory blocks).

## Cyclic Redundancy Check (CRC) Protection

The cyclic redundancy check (CRC) protection modules allow system software to calculate the signature of code, data, or both in memory, the content of memory-mapped registers, or periodic communication message objects. Dedicated hardware circuitry compares the signature with precalculated values and triggers appropriate fault events.

For example, the system software initiates the signature calculation of the entire memory contents every 100 ms and compares this with expected, precalculated values. If a mismatch occurs, a fault condition is generated through the processor core or the trigger routing unit.

The CRC is a hardware module based on a CRC32 engine that computes the CRC value of the 32-bit data-words presented to it. The source channel of the memory to memory DMA (in memory scan mode) provides data. The data can be optionally forwarded to the destination channel (memory transfer mode). The main features of the CRC peripheral are as follows:

- Memory scan mode
- Memory transfer mode
- Data verify mode
- Data fill mode
- User-programmable CRC32 polynomial
- Bit and byte mirroring option (endianness)
- Fault and error interrupt mechanisms
- 1D and 2D fill block to initialize an array with constants
- 32-bit CRC signature of a block of memory or an MMR block

## Event Handling

The processor provides event handling that supports both nesting and prioritization. Nesting allows multiple event service routines to be active simultaneously. Prioritization ensures that servicing a higher priority event takes precedence over servicing a lower priority event.

The processor provides support for four different types of events:

- An emulation event causes the processors to enter emulation mode, allowing command and control of the processors through the JTAG interface.
- A reset event resets the processors.
- An exception event is caused by errors during execution. Synchronous exceptions, such as illegal instruction or data misalignment, do not permit the instruction to complete. Imprecise exceptions, such as floating-point or saturation errors or some error correcting code (ECC) errors, are reported after the instruction has completed. Exceptions cause the program counter to change to the value held in the EPC special register and are not affected by the interrupt priority level or status.
- An interrupt event occurs asynchronously to program flow. The interrupts are caused by input signals, timers, and other peripherals, as well as by an explicit software instruction.

## System Event Controller (SEC)

The SHARC-FX core event controller receives some interrupts from the system event controller (SEC), but most go directly to its built-in interrupt controller. The SEC features include the following:

- Comprehensive system event source management, including interrupt enable, fault enable, priority, core mapping, and source grouping
- A distributed programming model where each system event source control and all status fields are independent of each other
- Determinism where all system events have the same propagation delay and provide unique identification of a specific system event source
- A completer control port that provides access to all SEC registers for configuration, status, and interrupt and fault services
- Global locking that supports a register level protection model to prevent writes to locked registers
- Fault management including fault action configuration, time out, external indication, and system reset

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## Trigger Routing Unit (TRU)

The trigger routing unit (TRU) provides system level sequence control without core intervention. The TRU maps trigger generators to trigger receivers. Trigger receivers can be configured to respond to triggers in various ways. Common applications enabled by the TRU include,

- Automatically triggering the start of a DMA sequence after a sequence from another DMA channel completes
- Software triggering
- Synchronization of concurrent activities

## SECURITY FEATURES

The following sections describe the security features of the ADSP-2183x/ADSP-SC83x processors.

## Arm TrustZone

The ADSP-SC83x processors provide TrustZone technology that is integrated into the Arm Cortex-M33 processors. The TrustZone technology enables a secure state that is extended throughout the system fabric.

## Cryptographic Hardware Accelerators

The ADSP-2183x/ADSP-SC83x processors support standardsbased hardware accelerated encryption, decryption, authentication, and true random number generation.

Support for the hardware accelerated cryptographic ciphers includes the following:

- AES in ECB, CBC, ICM, and CTR modes with 128-bit, 192-bit, and 256-bit keys
- DES in ECB and CBC mode with 56-bit key
- 3DES in ECB and CBC mode with 3x 56-bit key
- ARC4 in stateful, stateless mode, up to 128-bit key

Support for the hardware accelerated hash functions includes the following:

- SHA-1
- SHA-2 with 224-bit and 256-bit digests
- HMAC transforms for SHA-1 and SHA-2
- MD5

Public key accelerator (PKA) is available to offload computation intensive public key cryptography operations.

Both a hardware-based nondeterministic random number generator and pseudorandom number generator are available.

Secure boot is also available with 224-bit and 256-bit elliptic curve digital signatures ensuring integrity and authenticity of the boot stream. Optionally, ensuring confidentiality through AES-128 encryption is available.

Password protected secure debug is also available to allow only trusted users to access the system with debug tools.

## CAUTION

<!-- image -->

This product includes security features that can be used  to  protect  embedded  nonvolatile  memory contents  and  prevent  execution  of  unauthorized code.  When  security  is  enabled  on  this  device (either  by  the  ordering  party  or  the  subsequent receiving parties), the ability of Analog Devices to conduct  failure  analysis  on  returned  devices  is limited. Contact Analog Devices for details on the failure analysis limitations for this device.

## System Protection Unit (SPU)

The system protection unit (SPU) guards against accidental or unwanted access to an MMR space of the peripheral by providing a write protection mechanism. The user can choose and configure the protected peripherals, as well as configure which of the system MMR requesters the peripherals are guarded against.

The SPU is also part of the security infrastructure. Along with providing write protection functionality, the SPU is employed to define which resources in the system are secure or nonsecure as well as block access to secure resources from nonsecure requesters.

## System Memory Protection Unit (SMPU)

The system memory protection unit (SMPU) provides memory protection against read and/or write transactions to defined regions of memory. There are SMPU units in the ADSP2183x/ADSP-SC83x processors for each memory space, except for SHARC-FX L1.

The SMPU is also part of the security infrastructure. It allows the user to protect against arbitrary read and/or write transactions and allows regions of memory to be defined as secure and prevent nonsecure requesters from accessing those memory regions.

## SECURITY FEATURES DISCLAIMER

Analog Devices does not guarantee that the Security Features described herein provide absolute security. ACCORDINGLY, ANALOG DEVICES HEREBY DISCLAIMS ANY AND ALL EXPRESS AND IMPLIED WARRANTIES THAT THE SECURITY FEATURES CANNOT BE BREACHED, COMPROMISED, OR OTHERWISE CIRCUMVENTED AND IN NO EVENT SHALL ANALOG DEVICES BE LIABLE FOR ANY LOSS, DAMAGE, DESTRUCTION, OR RELEASE OF DATA, INFORMATION, PHYSICAL PROPERTY, OR INTELLECTUAL PROPERTY.

## SAFETY FEATURES

The ADSP-2183x/ADSP-SC83x processors are designed to provide robust and fail-safe operation. The following safety primitives are provided by the processors.

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## Error Correcting Code (ECC) Protected SHARC-FX Core L1 Memories

The SRAMs and caches in the SHARC-FX L1 memory space are protected by SECDEC. Single-bit errors are automatically corrected and written back. Multiple-bit errors are retried several times, and then cause exceptions. The cache tags and BTB are protected the same way.

## Error Correcting Code (ECC) Protected L2 Memories

Error correcting code (ECC) corrects single event upsets. A single error correct/double error detect (SEC/DED) code protects the L2 memory. By default, ECC is enabled, but it can be disabled on a per bank basis. Single-bit errors correct transparently. If enabled, dual-bit errors can issue a system event or fault. ECC protection is fully transparent to the user, even if L2 memory is read or written by 8-bit or 16-bit entities.

## Parity and ECC Protected Peripheral Memories

Parity protection is added to the following peripheral memories:

- ASRC
- IIR
- FIR
- CRYPTO
- EMAC
- MLB
- TRACE

CAN FD memory is ECC protected.

## Cyclic Redundancy Check (CRC) Protected Memories

Whereas parity bit and ECC protection mainly protect against random soft errors in L1 and L2 memory cells, the CRC engines can protect against systematic errors (pointer errors) and static content (instruction code) of L1, L2, and even Level 3 (L3) memories (DDR3L). The processors feature two CRC engines that are embedded in the memory to memory DMA controllers.

CRC checksums can be calculated or compared automatically during memory transfers. Alternatively, single or multiple memory regions can be continuously scrubbed by a single DMA work unit as per DMA descriptor chain instructions. The CRC engine also protects data loaded during the boot process.

## Signal Watchdogs

The 16 general-purpose (GP) timers feature modes to monitor off-chip signals. The watchdog period mode monitors whether external signals toggle with a period within an expected range.

The watchdog width mode monitors whether the pulse widths of external signals are within an expected range. Both modes help detect undesired toggling or lack of toggling of system level signals.

## System Event Controller (SEC)

Besides system events, the system event controller (SEC) further supports fault management, including fault action configuration as timeout, internal indication by system interrupt, or external indication through the SYS\_FAULT pin and system reset.

## Memory Error Controller (MEC)

The memory error controller (MEC) manages memory parity/ECC errors and warnings from the cores and peripherals and sends out interrupts and triggers.

## PROCESSOR PERIPHERALS

The following sections describe the peripherals of the ADSP2183x/ADSP-SC83x processors.

## Dynamic Memory Controller (DMC)

The 16-bit dynamic memory controller (DMC) interfaces to DDR3L (JESD79-3F), 512 Mb to 8 Gb. See Table 7 for the DMC memory map.

There is an additional prefetch buffer (PFB) added to improve the performance for read accesses. When enabled on DDR, the prefetch buffer supports the optional predictive prefetch that improves performance for nonlinear access patterns. For noncontinuous (nonlinear) accesses (resulting in MISS), the prefetch buffer feature makes decisions on whether fetch and/or prefetch requests from the PFB to memory launch or give direct access for such read requests. The decision is based on the history of the read transactions received.

## Digital Audio Interface (DAI)

The processors support two identical digital audio interface (DAI) units. The DAI can connect various peripherals to any of the DAI pins.

The application code makes these connections using the signal routing unit (SRU), shown in Figure 1.

The SRU is a matrix routing unit (or group of multiplexers) that enables the peripherals provided by each DAI instance to interconnect under software control. This functionality allows easy use of the DAI associated peripherals for a wider variety of applications by using a larger set of algorithms than is possible with nonconfigurable signal paths.

The DAI includes the peripherals described in the following sections (SPORTs, ASRC, S/PDIF, PCG, and PDM). DAI Pin Buffer 20 and DAI Pin Buffer 19 can change the polarity of the input signals.

The DAI\_PINx pin buffers can also be used as GPIO pins. DAI input signals allow the triggering of interrupts on the rising edge, falling edge, or both.

See the Digital Audio Interface (DAI) chapter of the ADSP2183x/ADSP-SC83x SHARC-FX Processor Hardware Reference for complete information on the use of the DAIs and SRUs.

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## DAI Routing Unit (DRU)

The DAI routing unit (DRU) provides flexibility when routing signals across the two DAI units. All DAI0 SRU source signals are available as source signals for the DAI1 SRU, and all DAI1 SRU source signals are available as source signals for the DAI0 SRU.

## Serial Port (SPORT)

The processors feature eight synchronous serial ports (SPORTs), providing an inexpensive interface to a wide variety of digital and mixed-signal peripheral devices. These devices include Analog Devices AD19xx and ADAU19xx families of audio codecs, analog-to-digital converters (ADCs) and digitalto-analog converters (DACs). Two data lines, a clock, and a frame sync comprise a SPORT half. The data lines can be programmed to either transmit or receive data, and each data line has a dedicated DMA channel.

An individual SPORT module consists of two independently configurable SPORT halves with identical functionality. Two bidirectional data lines-primary (0) and secondary (1)-are available per SPORT half and are configurable as either transmitters or receivers. Therefore, each SPORT half permits two unidirectional streams into or out of the same SPORT. This bidirectional functionality provides greater flexibility for serial communications. For full-duplex configuration, one half SPORT provides two transmit data signals, and the other half SPORT provides two receive data signals. The frame sync and clock are shared.

Serial ports operate in the following six modes:

- Standard DSP serial mode
- Multichannel time division multiplexing (TDM) mode
- I 2 S mode
- Packed I 2 S mode
- Left justified mode
- Right justified mode

## Asynchronous Sample Rate Converter (ASRC)

The asynchronous sample rate converter (ASRC) contains 16 ASRC blocks. The ASRC provides up to 140 dB signal-tonoise ratio (SNR). The ASRC block performs synchronous or asynchronous sample rate conversion across independent stereo channels, without using internal processor resources. The ASRC blocks can also be configured to operate together to convert multichannel audio data without phase mismatches. Finally, the ASRC can clean up audio data from jittery clock sources such as the S/PDIF receiver.

## S/PDIF-Compatible Digital Audio Receiver/Transmitter

The Sony/Philips Digital Interface Format (S/PDIF) is a standard audio data transfer format that allows the transfer of digital audio signals from one device to another. There are two S/PDIF transmit/receive blocks on the processor. The digital audio interface carries three types of information: audio data, nonaudio data (compressed data), and timing information.

The S/PDIF interface supports one stereo channel or compressed audio streams. The S/PDIF transmitter and receiver are AES3 compliant and support the sample rate from 24 kHz to 192 kHz. The S/PDIF receiver supports professional jitter standards.

The S/PDIF receiver/transmitter has no separate DMA channels. It receives audio data in serial format and converts it into a biphase encoded signal. The serial data input to the receiver/ transmitter can be formatted as left justified, I 2 S, or right justified with word widths of 16, 18, 20, or 24 bits. The serial data, clock, and frame sync inputs to the S/PDIF receiver/transmitter are routed through the SRU. They can come from various sources, such as the SPORTs, external pins, and the precision clock generators (PCGs), and are controlled by the SRU control registers.

## Precision Clock Generators (PCG)

The precision clock generators (PCG) consist of eight units located in the two DAI blocks. The PCG can generate a pair of signals (clock and frame sync) derived from a clock input signal (CLKIN, SCLK0, or DAI pin buffer). Both units are identical in functionality and operate independently of each other. The two signals generated by each unit are normally used as a serial bit clock/frame sync pair.

## Pulse Density Modulation (PDM) Microphone Interface

The pulse density modulation (PDM) interface is used to convert digital PDM microphone data to I 2 S/TDM format. The microphone data in I 2 S/TDM format is then routed internally to the serial port/ASRC or externally via the DAI pins. The PDM microphone inputs include an internal decimation filter. Up to eight PDM microphones can be connected to the two dedicated digital microphone interfaces (one per DAI). Each PDM interface consists of one clock line and two data lines. Two microphones can share a single data line and be used along with a clock line to create a dual-input microphone port. Two dualinput lines can share a single clock line to support four microphone inputs.

## Universal Asynchronous Receiver/Transmitter (UART) Ports

The processors provide four full-duplex universal asynchronous receiver/transmitter (UART) ports, fully compatible with PC standard UARTs. Each UART port provides a simplified UART interface to other peripherals or hosts, supporting full-duplex, DMA supported, asynchronous transfers of serial data. A UART port includes support for five to eight data bits as well as no parity, even parity, or odd parity.

Optionally, an additional address bit can be transferred to interrupt only addressed nodes in multidrop bus (MDB) systems. A frame is terminated by a configurable number of stop bits.

The UART ports support automatic hardware flow control through the clear to send (CTS) input and request to send (RTS) output with programmable assertion first in, first out (FIFO) levels.

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

To help support the Local Interconnect Network (LIN) protocols, a special command causes the transmitter to queue a break command of programmable bit length into the transmit buffer. Similarly, the number of stop bits can be extended by a programmable interframe space.

## Serial Peripheral Interface (SPI) Ports

The processors have four industry-standard SPI-compatible ports that allow the processors to communicate with multiple SPI-compatible devices.

The baseline SPI peripheral is a synchronous, 4-wire interface consisting of two data pins, one device select pin, and a gated clock pin. The two data pins allow full-duplex operation to other SPI-compatible devices. An extra two (optional) data pins are provided to support quad-SPI operation. Enhanced modes of operation, such as flow control, fast mode, and dual-I/O mode (DIOM), are also supported. DMA mode allows for transferring several words with minimal CPU interaction.

With a range of configurable options, the SPI ports provide a glueless hardware interface with other SPI-compatible devices in master mode, slave mode, and multimaster environments. The SPI peripheral includes programmable baud rates, clock phase, and clock polarity. The peripheral can operate in a multimaster environment by interfacing with several other devices, acting as either a master device or a slave device. In a multimaster environment, the SPI peripheral uses open-drain outputs to avoid data bus contention. The flow control features enable slow slave devices to interface with fast master devices by providing an SPI ready pin (SPI\_RDY), which flexibly controls the transfers.

The baud rate and clock phase and polarities of the SPI port are programmable. The port has integrated DMA channels for both transmit and receive data streams.

## xSPI with Octal and HyperBus Support

The octal serial peripheral interface (xSPI/HyperBus) port provides an increased external memory data bus width (up to eight bits in parallel). The xSPI port supports dual data rate (DDR) modes of operation, which enable the transfer of up to 16 bits of data each clock cycle. The xSPI port provides overall data throughput and performance improvement, including faster boot time.

Features of the xSPI/HyperBus port include:

- Support for single-, dual-, quad-, or octal-I/O transfers
- Can be interfaced with octal flash, octal RAM, HyperFlash, and HyperRAM devices
- Can be interfaced with legacy flash devices including quad and SPINAND
- Auto command engine and minicontroller
- Built-in DMA support for high speed transfers
- Multi-threading support
- Support for execute in place (XIP): continuous mode
- Programmable page and block sizes
- Programmable write protected regions
- Programmable memory timing
- Support for DDR commands
- Support for PHY mode of operation to enable high speed transfers
- Support for DQS to increase robustness of data sampling at higher speeds

## Link Port (LP)

Two 8-bit wide link ports (LPs) can connect to the link ports of other DSPs or peripherals. Link ports are bidirectional and have two, four, or eight data lines, an acknowledge line, and a clock line. The data lines can operate in single data rate (SDR) or dual data rate (DDR) modes.

Link ports can operate in reduced pin mode, thereby reducing the number of pins required to interface between two processors. For example, two processors can be connected using the link port in 4-bit SDR and DDR modes.

## Ethernet Media Access Controller (EMAC)

The processor features an ethernet media access controller (EMAC): 10/100/1000 AVB Ethernet with precision time protocol (IEEE 1588).

The processors can directly connect to a network through embedded fast EMAC that supports 10Base-T (10 Mb/sec), 100Base-T (100 Mb/sec) and 1000Base-T (1 Gb/sec) operations.

Some standard features of the EMAC are as follows:

- Support of MII/RMII/RGMII protocols for external PHYs
- Full-duplex and half-duplex modes
- Media access management (in half-duplex operation)
- Flow control
- Station management, including the generation of MDC/MDIO frames for read/write access to PHY registers

Some advanced features of the EMAC include the following:

- Automatic checksum computation of IP header and IP payload fields of receive frames
- Independent 32-bit descriptor driven receive and transmit DMA channels
- Frame status delivery to memory through DMA, including frame completion semaphores for efficient buffer queue management in software
- Transmit DMA support for separate descriptors for MAC header and payload fields to eliminate buffer copy operations
- Convenient frame alignment modes
- 47 MAC management statistics counters with selectable clear on read behavior and programmable interrupts on half maximum value
- Advanced power management
- Magic packet detection and wakeup frame filtering
- Support for 802.3Q tagged VLAN frames
- Programmable MDC clock rate and preamble suppression

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## Audio Video Bridging (AVB) Support

The 10/100/1000 EMAC supports the following audio video bridging (AVB) features:

- Separate channels or queues for AV data transfer in 100 Mbps and 1000 Mbps modes
- IEEE 802.1-Qav specified credit-based shaper (CBS) algorithm for the additional transmit channels
- Configuring up to seven additional channels on the transmit and receive paths for AV traffic. Channel 0 is available by default and carries the legacy best effort Ethernet traffic on the transmit side.
- Separate DMA, transmit and receive FIFO for AVB latency class
- Programmable control to route received VLAN tagged nonAV packets to channels or queues

## Precision Time Protocol (PTP) IEEE 1588 Support

The IEEE 1588 standard is a precision clock synchronization protocol for networked measurement and control systems. The processors include hardware support for IEEE 1588 with an integrated precision time protocol synchronization engine (PTP\_TSYNC).

This engine provides hardware assisted time stamping to improve the accuracy of clock synchronization between PTP nodes. The main features of the engine include the following:

- Support for both IEEE 1588-2002 and IEEE 1588-2008 protocol standards
- Hardware assisted time stamping capable of up to 12.5 ns resolution
- Lock adjustment
- Automatic detection of IPv4 and IPv6 packets, as well as PTP messages
- Multiple input clock sources (SCLK0, RGMII, RMII, MII clock, and external clock)
- Programmable pulse per second (PPS) output
- Auxiliary snapshot to time stamp external events

## Controller Area Network with Flexible Data-Rate (CAN FD)

There are two controller area network (CAN) modules. A CAN controller implements the CAN with flexible data-rate (CAN FD) and the CAN 2.0B protocol supporting both standard and extended message frames and long payloads up to 64 bytes, transferred at rates of up to 8 Mbps. This protocol is an asynchronous communications protocol used in both industrial and automotive control systems. The CAN protocol is well suited for control applications due to the capability to communicate reliably over a network. This is because the protocol incorporates CRC checking, message error tracking, and fault node confinement.

The CAN FD controller offers the following features:

- Flexible mailboxes configurable to store 0 to 8, 16, 32, or 64 bytes
- Dedicated receiver masks for each mailbox
- Flexible message buffers up to 64 buffers of 8 bytes length each, configurable as receive or transmit
- Programmable transmission priority scheme
- Transceiver delay compensation when transmitting CAN FD messages at faster data rates
- Memory read accesses error detection and correction

An additional crystal is not required to supply the CAN clock because it is derived from a system clock through a programmable divider.

## Pulse Width Modulator (PWM) Units

The pulse width modulator (ePWM) module is a flexible and programmable waveform generator. With minimal CPU intervention, the PWM generates complex waveforms for motor control, pulse coded modulation (PCM), DAC conversions, power switching, and power conversion. The ePWM module has three PWM pairs with the following features:

- 16-bit center-based PWM generation unit
- Programmable PWM pulse width
- Single update mode with an option for asymmetric duty
- Programmable dead time and switching frequency
- Programmable dead time per channel
- Twos-complement implementation which permits smooth transition to full on and full off states
- Dedicated asynchronous PWM shutdown signal (PWM0\_TRIP)
- Support for synchronization using SYNC signal (PWM0\_SYNC)

## Timers

The processors include several timers that are described in the following sections.

## General-Purpose (GP) Timers (TIMER)

There is one general-purpose (GP) timer unit, providing 16 GP programmable timers. Each timer has an external pin that can be configured as PWM or timer output, as an input to clock the timer, or as a mechanism for measuring pulse widths and periods of external events. These timers can be synchronized to an external clock input on the TM\_TMR[n] pins, an external TM\_CLK input pin, or to the internal SCLK0.

These timer units can be used in conjunction with the UARTs to measure the width of the pulses in the data stream to provide a software autobaud detect function for the respective serial channels.

The GP timers can generate interrupts to the processor core, providing periodic events for synchronization to either the system clock or to external signals. Timer events can also trigger

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

other peripherals via the TRU (for instance, to signal a fault). Each timer can also be started and stopped by any trigger generator without core intervention.

## Watchdog Timer (WDT)

Three on-chip software watchdog timers (WDT) are used by the SHARC-FX core. A software watchdog can improve system availability by forcing the processors to a known state, via a general-purpose interrupt, or a fault, if the timer expires before being reset by software.

The programmer initializes the count value of the timer, enables the appropriate interrupt, then enables the timer. Thereafter, the software must reload the counter before it counts down to zero from the programmed value, protecting the system from remaining in an unknown state where software that normally resets the timer stops running due to an external noise condition or software error.

## General-Purpose Counters (CNT)

A 32-bit general-purpose counter (CNT) is provided that can operate in general-purpose up/down count modes and can sense 2-bit quadrature or binary codes as typically emitted by industrial drives or manual thumbwheels. Count direction is controlled by a level-sensitive input pin or by two edge detectors.

A third counter input can provide flexible zero marker support and can input the push button signal of thumbwheel devices. All three CNT0 pins have a programmable debouncing circuit.

Internal signals forwarded to a GP timer enable the timer to measure the intervals between count events. Boundary registers enable auto-zero operation or simple system warning by interrupts when programmed count values are exceeded.

## Housekeeping Analog-to-Digital Converter (HADC)

The housekeeping analog-to-digital converter (HADC) provides a general-purpose, multichannel, successive approximation ADC. The following baseline HADC features apply to all models:

- 12-bit ADC core with built in sample and hold
- Throughput rates up to 1 MSPS
- Single external reference with analog inputs between 0 V and 1.8 V
- Selectable ADC clock frequency including the ability to program a prescaler
- Adaptable conversion type; allows single or continuous conversion with option of autoscan
- Four single-ended input channels
- Autosequencing capability with up to four autoconversions in a single session. Each conversion can be programmed to select one to four input channels.
- Four data registers (individually addressable) to store conversion values

For the ADSP-2183x/ADSP-SC83x processors, 16 data registers (individually addressable) extend the baseline features listed above by storing conversion values.

## Media Local Bus (MediaLB)

The automotive model has a Microchip MediaLB (MLB) device interface that allows the processors to function as a media local bus device. It includes support for 3-pin media local bus protocols. The MLB 3-pin configuration supports speeds up to 1024 × FS. The MLB also supports up to 64 logical channels with up to 468 bytes of data per MLB frame.

The MLB interface supports MOST25, MOST50, and MOST150 data rates and operates in device mode only.

## 2-Wire Controller Interface (TWI)

The processors include six 2-wire interface (TWI) modules that provide a simple exchange method of control data between multiple devices. The TWI module is compatible with the widely used I 2 C bus standard. The TWI module offers the capabilities of simultaneous controller and target operation and support for both 7-bit addressing and multimedia data arbitration. The TWI interface utilizes two pins for transferring clock (TWI\_SCL) and data (TWI\_SDA) and supports the protocol at speeds up to 400 kbps. The TWI interface pins are compatible with 3.3 V logic levels.

Additionally, the TWI module is fully compatible with serial camera control bus (SCCB) functionality for easier control of various CMOS camera sensor devices.

## General-Purpose I/O (GPIO)

Each general-purpose port pin can be individually controlled by manipulating the port control, status, and interrupt registers:

- The GPIO direction control register specifies the direction of each individual GPIO pin as input or output.
- GPIO control and status registers have a write-one-tomodify mechanism that allows any combination of individual GPIO pins to be modified in a single instruction, without affecting the level of any other GPIO pins.
- GPIO interrupt mask registers allow each individual GPIO pin to function as an interrupt to the processors. GPIO pins defined as inputs can be configured to generate hardware interrupts, whereas output pins can be triggered by software interrupts.
- GPIO interrupt sensitivity registers specify whether individual pins are level or edge sensitive and specify, if edge sensitive, whether the rising edge or both the rising and falling edges of the signal are significant.

## Pin Interrupts

Every port pin on the processors can request interrupts in either an edge sensitive or a level sensitive manner with programmable polarity. Interrupt functionality is decoupled from GPIO operation. Three system level interrupt channels (PINT0-PINT2) are reserved for this purpose. Each of these interrupt channels can manage up to 32 interrupt pins. The assignment from pin to

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

interrupt is not performed on a pin by pin basis. Rather, groups of eight pins (half ports) are flexibly assigned to interrupt channels.

Every pin interrupt channel features a special set of 32-bit memory-mapped registers that enable half port assignment and interrupt management. This functionality includes masking, identification, and clearing of requests. These registers also enable access to the respective pin states and use of the interrupt latches, regardless of whether the interrupt is masked. Most control registers feature multiple MMR address entries to write one to set or write one to clear them individually.

## Fractional PLL (Frac-N PLL)

The processors generate precise and low-jitter audio clock frequency using the fractional PLL module. The audio clock can be synchronized with an input reference clock.

Frac-N PLL can be used to generate clock with frequency values which are fractional multiples of CLKIN frequency. For example, an audio controller clock of frequency 24.576 MHz can be generated with CLKIN frequency of 25 MHz.

Frac-N PLL consists of a digital filter/controller, also called DPLL, which can be combined with Frac-N PLL to create a dual-loop PLL. In this mode, DPLL provides fractional and integer parts of divider values to the Frac-N PLL block. Output clock of Frac-N PLL is fed back to DPLL for phase-alignment with the external reference clock. For example, 1 KHz PPS output from the EMAC block can be used as reference to generate 24.576 MHz audio clock phase-aligned to the PPS output.

The reference clock of the DPLL can be fed via any one of the sources-any DAI pin, GPIO pin PA\_15, or ETH\_PTPPPS[03]. The output of the Frac-N PLL can be routed externally to the chip via a DAI pin or routed internally to a DAI peripheral (for example, SPORT, ASRC, and so on).

One of the areas of application of Frac-N PLL can be networked applications requiring time synchronization, thereby removing the need for external PLL.

## SYSTEM ACCELERATION

The following sections describe the system acceleration blocks of the ADSP-2183x/ADSP-SC83x processors.

## Finite Impulse Response (FIR) Accelerator

The finite impulse response (FIR) accelerator consists of a 1024 word coefficient memory, a 1024 word deep delay line for the data, and four multiplier-accumulator (MAC) units. A controller manages the accelerator. The FIR accelerator runs at the SHARC-FX core clock frequency. The FIR accelerator can access all memory spaces and can run concurrently with the other accelerators on the processor.

Note that there are two FIR accelerators.

## Infinite Impulse Response (IIR) Accelerator

The infinite impulse response (IIR) accelerator consists of a 1440 word coefficient memory for storage of biquad coefficients, a data memory for storing the intermediate data, and one MAC unit. A controller manages the accelerator. The IIR

accelerator runs at the SHARC-FX core clock frequency. The IIR accelerator can access all memory spaces and run concurrently with the other accelerators on the processor.

Note that there are four IIR accelerators. Two of the IIR accelerators support coefficient slewing mechanism in the hardware.

## SYSTEM DESIGN

The following sections provide an introduction to system design features and power supply issues.

## Clock Management

The processors provide three operating modes, each with a different performance and power profile. Control of clocking to each of the processor peripherals reduces power consumption.

## Reset Control Unit (RCU)

Reset is the initial state of the whole processor, or the core, and is the result of a hardware or software triggered event. In this state, all control registers are set to default values and functional units are idle. Exiting a full system reset begins with the core ready to boot.

The reset control unit (RCU) controls how all the functional units enter and exit reset. Differences in functional requirements and clocking constraints define how reset signals are generated. Programs must guarantee that none of the reset functions put the system into an undefined state or cause resources to stall. This requirement is particularly important when the core resets (programs must ensure that there is no pending system activity involving the core when it is reset).

From a system perspective, reset is defined by both the reset target and the reset source.

The reset target is defined as the following:

- System reset-all functional units except the RCU are set to default states.
- Hardware reset-all functional units are set to default states without exception. History is lost.
- Core only reset-affects the core only. When in reset state, the core is not accessible by any bus requester.

The reset source is defined as the following:

- System reset-can be triggered by software (writing to the RCU\_CTL register) or by another functional unit, such as the dynamic power management (DPM) unit or any of the SEC, TRU, or emulator inputs.
- Hardware reset-the SYS\_HWRST input signal asserts active (pulled down).
- Trigger request (peripheral).

## Clock Generation Unit (CGU)

The ADSP-2183x/ADSP-SC83x processors support two independent PLLs. Each PLL is part of a clock generation unit (CGU).

Frequencies generated by each CGU are derived from a common multiplier with different divider values available for each output.

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

The CGU generates all on-chip clocks and synchronization signals. Multiplication factors are programmed to define the PLLCLK frequency.

Programmable values divide the PLLCLK frequency to generate the core clock (CCLK), the system clocks, the DDR3L clock (DCLK), and the output clock (OCLK). For more information on clocking, see the ADSP-2183x/ADSP-SC83x SHARC-FX Processor Hardware Reference.

Writing to the CGU control registers does not affect the behavior of the PLL immediately. Registers are first programmed with a new value and the PLL logic executes the changes to ensure smooth transitions from the current conditions to the new conditions.

## System Crystal Oscillator

The processor can be clocked by an external crystal (see Figure 5), a sine wave input, or a buffered, shaped clock derived from an external clock oscillator. If using an external clock, it must be compatible with the VIHCLKIN and VILCLKIN specifications and must not be halted, changed, or operated below the specified frequency during normal operation (see Operating Conditions). This signal is connected to the SYS\_CLKIN0 pin of the processor. When using an external clock, the SYS\_XTAL0 pin must be left unconnected. Alternatively, because the processor includes an on-chip oscillator circuit, an external crystal can be used.

NOTE: VALUES MARKED WITH * MUST BE CUSTOMIZED, DEPENDING ON THE CRYSTAL AND LAYOUT. ANALYZE CAREFULLY. VALID FREQUENCY RANGE IS 20 MHz TO 30 MHz FOR SYS\_CLKIN0.

<!-- image -->

Figure 5. External Crystal Connection

For fundamental frequency operation, use the circuit shown in Figure 5. A parallel resonant, fundamental frequency, microprocessor grade crystal is connected across the SYS\_CLKIN0 pin and the SYS\_XTAL0 pin.

The two capacitors and the series resistor, shown in Figure 5, fine tune phase and amplitude of the sine frequency. The capacitor and resistor values shown in Figure 5 are typical values only. The capacitor values are dependent upon the load capacitance recommendations of the crystal manufacturer and the physical layout of the printed circuit board (PCB). The resistor value depends on the drive level specified by the crystal manufacturer. The user must verify the customized values based on careful investigations on multiple devices over the required temperature range.

## Clock Distribution Unit (CDU)

The two clock generation units each provide outputs that feed a clock distribution unit (CDU). The clock outputs CLKO0-CLKO13 are connected to various targets. For more information, refer to the ADSP-2183x/ADSP-SC83x SHARCFX Processor Hardware Reference.

## Clock Out/External Clock

The SYS\_CLKOUT output pin has programmable options to output divided down versions of the on-chip clocks. By default, the SYS\_CLKOUT pin drives a buffered version of the SYS\_ CLKIN0 input. Refer to the ADSP-2183x/ADSP-SC83x SHARC-FX Processor Hardware Reference to change the default mapping of clocks.

## Booting

The processors have several mechanisms for automatically loading internal and external memory after a reset. The boot mode is defined by the SYS\_BMODE[n] input pins. There are two categories of boot modes. In flash boot modes, the processors actively load data from serial memories. In external host boot modes, the processors receive data over a serial interface from an external host device.

The boot modes are shown in Table 8. These modes are implemented by the SYS\_BMODE[n] bits of the reset configuration register and are sampled during power-on resets and software initiated resets.

## Table 8. Boot Modes

|   SYS_BMODE[n] Setting | BootMode            |
|------------------------|---------------------|
|                    000 | No boot             |
|                    001 | SPI1 flash          |
|                    010 | External SPI2 host  |
|                    011 | External UART0 host |
|                    100 | External LP0 host   |
|                    101 | xSPI flash          |
|                    110 | Extended LP0 host   |
|                    111 | Reserved            |

## Thermal Monitoring Unit (TMU)

The thermal monitoring unit (TMU) provides on-chip temperature measurement for applications that require substantial power consumption. The TMU is integrated into the processor die and digital infrastructure using an MMR-based system access to measure the die temperature variations in real-time.

TMU features include the following:

- On-chip temperature sensing
- Programmable over temperature and under temperature limits

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

- Programmable conversion rate
- Averaging feature available

## Power Supplies

The processors have separate power supply connections for

- Internal (VDD\_INT)
- External (VDD\_EXT)
- External (VDD\_REF)
- HADC/TMU (VDD\_ANA)
- DMC (VDD\_DMC)
- PLL (VDD\_PLL)
- Fractional PLL (VDD\_FPLLANA)

All power supplies must meet the specifications provided in the Operating Conditions section. All external supply pins must be connected to the same power supply.

## Power Management

As shown in Table 9, the processors support seven different power domains, which maximizes flexibility while maintaining compliance with industry standards and conventions.

The power dissipated by a processor is largely a function of the clock frequency and the square of the operating voltage. For example, reducing the clock frequency by 25% results in a 25% reduction in dynamic power dissipation.

## Table 9. Power Domains

| Power Domain                           | V DD Range   |
|----------------------------------------|--------------|
| All Internal Logic                     | V DD_INT     |
| DDR3L                                  | V DD_DMC     |
| HADC/TMU                               | V DD_ANA     |
| SYSCLKIN0                              | V DD_REF 1   |
| PLL0                                   | V DD_PLL     |
| Fractional PLL                         | V DD_FPLLANA |
| All Other I/O (Includes SYS, JTAG, and | V DD_EXT     |
| Ports Pins)                            |              |

## Power-Up and Power-Down Sequencing

At all times (including during power-up/power-down sequencing), the VDD\_REF, VDD\_ANA, and VDD\_EXT supplies must stay within the VDELTA\_EXT\_REF specification listed in the Operating Conditions table. SYS\_XTAL0 oscillations (SYS\_CLKIN0) start when power is applied to the VDD\_REF pins. The rising edge of SYS\_HWRST initiates the PLL locking sequence. The rising edge of SYS\_HWRST must occur after all voltage supplies and SYS\_CLKIN0 oscillations are valid. For further details and information, see the Power-Up Reset Timing section.

## Target Board JTAG Emulator Connector

The Analog Devices DSP tools product line of JTAG emulators uses the IEEE 1149.1 JTAG test access port of the processors to monitor and control the target board processor during emulation. The Analog Devices DSP tools product line of JTAG emulators provides emulation at full processor speed, allowing inspection and modification of memory, registers, and processor stacks. The processor JTAG interface ensures the emulator does not affect target system loading or timing.

For information on JTAG emulator operation, see the appropriate emulator hardware user's guide at SHARC Processors Software and Tools.

## SYSTEM DEBUG

The processors include various features that allow easy system debug. These are described in the following sections.

## System Watchpoint Unit (SWU)

The system watchpoint unit (SWU) is a single module that connects to a single system bus and provides transaction monitoring. One SWU is attached to the bus going to each system completer. The SWU provides ports for all system bus address channel signals. Each SWU contains four match groups of registers with associated hardware. These four SWU match groups operate independently but share common event (for example, interrupt and trigger) outputs.

## Debug Access Port (DAP)

The debug access port (DAP) provides IEEE 1149.1 JTAG interface support through the JTAG debug. The DAP provides an optional instrumentation trace for both the core and system. It provides a trace stream that conforms to MIPI System Trace Protocol version 2 (STPv2) .

## DEVELOPMENT TOOLS

Analog Devices supports its processors with a complete line of software and hardware development tools, including an integrated development environment, evaluation products, emulators, and a variety of software add-ins.

## Integrated Development Environments (IDEs)

For C/C++ software writing and editing, code generation, and debug support, Analog Devices offers the CrossCore ® Embedded Studio (CCES) integrated development environment (IDE). CCES contains support/help information for porting existing SHARC+ applications to the SHARC-FX platform.

CCES is based on the Eclipse framework. Supporting most Analog Devices processor families, CCES is the IDE of choice for processors, including multicore devices. CCES is available for Windows and Linux platforms.

CCES supports available middleware such as real-time operating systems, algorithmic software modules, and evaluation hardware board support packages (BSP). For more information, visit www.analog.com/cces.

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## EZ-KIT Evaluation System

For processor evaluation, Analog Devices provides EZ-KIT ® evaluation systems, which are comprised of a System on Module (SOM) board and a SOM carrier board.

The SOM boards (ADSP21835W-EV-SOM or ADSPSC835W-EV-SOM) are small and low-cost, featuring the audio processor, SDRAM and QSPI flash memories, FTDI USBto-UART, and USB power. SOM boards also include a JTAG debug connection such that they can be used standalone for debug/development using either the ADZS-ICE-2000 or ADZS-ICE-1000 in-circuit emulator (ICE).

SOM carrier boards (EV-SOMCRR-EZKIT or EV-SOMCRREZLITE) come with a power supply and feature high-speed connectors for the SOM, a comprehensive set of peripherals, and an on-board emulator. The USB controller on the carrier board connects to the USB port of the user's PC, enabling CCES to emulate the on-board processor in-circuit. This permits users to download, execute, and debug programs, as well as in-circuit program the on-board flash memory device to store user-specific boot code, thus enabling standalone operation.

Each EZ-KIT purchased includes an evaluation license for CCES. The CCES evaluation license type restricts CCES features to specific evaluation systems. With the full CCES license type (sold separately), engineers can develop software for any of the CCES-supported evaluation boards (including the SOM when used standalone or when connected to a different carrier board) or any custom system designed around supported Analog Devices processors. The full CCES license type also enables higher-performance debug capabilities via JTAG using an ICE.

For further information, see:

- www.analog.com/cces
- www.analog.com/ADSP21835W-EV-SOM
- www.analog.com/ADSPSC835W-EV-SOM
- www.analog.com/EV-SOMCRR-EZKIT
- www.analog.com/EV-SOMCRR-EZLITE

## Software Add-Ins for CCES

Analog Devices offers software add-ins which seamlessly integrate with CCES to extend the capabilities and reduce development time. Add-ins include BSPs for evaluation hardware, various middleware packages, and algorithmic modules. Documentation, help, configuration dialogs, and coding examples present in these add-ins are viewable through the CCES IDE upon add-in installation.

## Board Support Packages (BSPs) for Evaluation Hardware

Software support for the EZ-KIT evaluation systems is provided by software add-ins called board support packages (BSPs). The BSPs contain the required drivers, pertinent release notes, and select example code for the given evaluation hardware. A download link for a specific BSP is located on the web page for the associated SOM product.

## Middleware Packages

Analog Devices offers middleware add-ins such as real-time operating systems. For more information, see the Operating Systems and Middleware page.

## Algorithmic Modules

To speed development, Analog Devices offers add-ins that perform popular audio and video processing algorithms. These are available for use with CCES. For more information, visit the Software page in the Resource Library.

## Graphical Programming Using SigmaStudio+

SigmaStudio ® + is a next generation graphical programming and tuning tool for audio signal processing for the ADSP2183x/ADSP-SC83x processors. The tool supports in excess of 250 optimized audio algorithms such as filters, dynamic processors, and mixers. Individual algorithms can be dragged onto a canvas and then interconnected to form an audio signal chain which can then be downloaded onto the processor with the click of a button. All modules within the audio signal chain can be tuned in run time. The tool has a modern user interface that provides a rich user experience and supports several advanced features such as system design, scripting support, and integration with MATLAB. The tool also supports custom module creation by which custom IPs/algorithms may be seamlessly integrated into the SigmaStudio+ environment, thereby allowing them to be used as modules within the audio signal chain. For more information, visit SigmaStudio+.

## Designing an Emulator-Compatible DSP Board (Target)

For embedded system test and debug, Analog Devices provides a family of emulators. On each JTAG DSP, Analog Devices supplies an IEEE 1149.1 JTAG test access port (TAP). In-circuit emulation is facilitated by use of this JTAG interface. The emulator accesses the internal features of the processor via the TAP, allowing the developer to load code, set breakpoints, and view variables, memory, and registers.

The processor must be halted to send data and commands, but after an operation is completed by the emulator, the DSP system is set to run at full speed with no impact on system timing. The emulators require the target board to include a header that supports connection of the JTAG port of the DSP to the emulator.

For details on target board design issues including mechanical layout, single processor connections, signal buffering, signal termination, and emulator pod logic, see Analog Devices JTAG Emulation Technical Reference (EE-68).

## ADDITIONAL INFORMATION

This data sheet provides a general overview of the ADSP2183x/ADSP-SC83x architecture and functionality. For detailed information on the core architecture and instruction set, refer to the SHARC-FX core documentation which can be found along with the SHARC-FX compiler tools with the installation of CCES.

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## RELATED SIGNAL CHAINS

A signal chain is a series of signal conditioning electronic components that receive input (data acquired from sampling either real-time phenomena or from stored data) in tandem, with the output of one portion of the chain supplying input to the next. Signal chains are often used in signal processing applications to gather and process data or to apply system controls based on analysis of real-time phenomena.

Analog Devices eases signal processing system development by providing signal processing components that are designed to work together. See Reference Designs.

The application signal chains page at Circuits from the Lab ® provides the following:

- Graphical circuit block diagram presentation of signal chains for a variety of circuit types and applications
- Drill down links for components in each chain to selection guides and application information
- Reference designs applying best practice design techniques

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## ADSP-2183x/ADSP-SC83x DETAILED SIGNAL DESCRIPTIONS

Table 10 provides a detailed description of signals that map to pins on the package.

Table 10. ADSP-2183x/ADSP-SC83x Detailed Signal Descriptions

| SignalName 1   | Direction   | Description                                                                                                                                                                                                                                                      |
|----------------|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| C1_FLG[n]      | Output      | SHARC-FX Core Flag n.                                                                                                                                                                                                                                            |
| CANFD_RX       | Input       | Receive. Typically an externalCAN transceiver RX output.                                                                                                                                                                                                         |
| CANFD_TX       | Output      | Transmit. Typically an external CAN transceiver TX input.                                                                                                                                                                                                        |
| CNT_DG         | Input       | CountDownandGate. Depending on themodeof operation this input acts either as a countdown signal or a gate signal. Count Down-this input causes the GP counter to decrement. Gate-stops the GP counter from incrementing or decrementing.                         |
| CNT_UD         | Input       | Count UpandDirection. Depending on the mode of operation this input acts either as a count up signal or a direction signal. Count Up-this input causes the GP counter to increment.                                                                              |
| CNT_ZM         | Input       | Count Zero Marker. Input that connects to the zero marker output of a rotary device or detects the pressing of a pushbutton.                                                                                                                                     |
| DAI_PIN[nn]    | InOut       | Pin n. Thedigital applications interface (DAI0) connects various peripherals to any of the DAI0_PINxx pins. Programs makethese connections using the signal routing unit (SRU/DRU). DRUallows routing of any signal across the DAIs.                             |
| DMC_A[nn]      | Output      | Address n. Address bus.                                                                                                                                                                                                                                          |
| DMC_BA[n]      | Output      | Bank Address Input n. Defines which internal bank an activate, read, write, or prechargecommand is applied to on the dynamic memory. Bank Address n also defines which mode registers (MR, EMR, EMR2, and/or EMR3) load during the load master register command. |
| DMC_CAS        | Output      | Column Address Strobe. Defines the operation for external dynamic memory to perform in conjunction with other DMCcommandsignals. Connect to the CAS input of dynamic memory.                                                                                     |
| DMC_CK         | Output      | Clock. Outputs DCLK to external dynamic memory.                                                                                                                                                                                                                  |
| DMC_CK         | Output      | Clock (Complement). Complement of DMC_ CK.                                                                                                                                                                                                                       |
| DMC_CKE        | Output      | Clock Enable. Active high clock enables. Connects to the CKE input of the dynamic memory.                                                                                                                                                                        |
| DMC_CS[n]      | Output      | Chip Select n. Commands are recognized by the memory only when this signal is asserted.                                                                                                                                                                          |
| DMC_DQ[nn]     | InOut       | Data n. Bidirectional data bus.                                                                                                                                                                                                                                  |
| DMC_LDM        | Output      | Data MaskforLowerByte. Mask for DMC_DQ07:DMC_DQ00writedata whendriven high. Sampled on both edges of the data strobe by the dynamic memory.                                                                                                                      |
| DMC_LDQS       | InOut       | DataStrobeforLowerByte. DMC_DQ07:DMC_DQ00datastrobe.Outputwithwritedata.Inputwith read data. Can be single-ended or differential depending on register settings.                                                                                                 |
| DMC_LDQS       | InOut       | Data Strobe for LowerByte(Complement). Complement of DMC_LDQS. Not used in single-ended mode.                                                                                                                                                                    |
| DMC_ODT        | Output      | On-DieTermination. Enablesdynamicmemoryterminationresistanceswhendrivenhigh(assuming thememoryisproperlyconfigured).ODTisenabledordisabledregardlessofreadorwritecommands.                                                                                       |
| DMC_RAS        | Output      | RowAddressStrobe. Definestheoperationforexternaldynamicmemorytoperforminconjunction with other DMCcommandsignals. Connect to the RAS input of dynamic memory.                                                                                                    |
| DMC_RESET      | Output      | Reset. DDR 3L only.                                                                                                                                                                                                                                              |
| DMC_RZQ        | InOut       | External Calibration Resistor Connection.                                                                                                                                                                                                                        |
| DMC_UDM        | Output      | DataMaskforUpperByte. MaskforDMC_DQ15:DMC_DQ08writedatawhendrivenhigh.Sampled on both edges of the data strobe by the dynamic memory.                                                                                                                            |
| DMC_UDQS       | InOut       | DataStrobeforUpperByte. DMC_DQ15:DMC_DQ08datastrobe.OutputwithWritedata.Inputwith read data. Can be single-ended or differential depending on register settings.                                                                                                 |
| DMC_UDQS       | InOut       | DataStrobeforUpperByte(Complement). ComplementofDMC_UDQS.Notusedinsingle-ended mode.                                                                                                                                                                             |
| DMC_VREF[n]    | Input       | Voltage Reference. Connects to half of the VDD_DMC voltage.                                                                                                                                                                                                      |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 10. ADSP-2183x/ADSP-SC83x Detailed Signal Descriptions (Continued)

| SignalName 1           | Direction   | Description                                                                                                                                                                                                                                                                                                                                                                                               |
|------------------------|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DMC_WE                 | Output      | Write Enable. Defines the operation for external dynamic memory to perform in conjunction with other DMCcommandsignals. Connect to the WEinput of dynamic memory.                                                                                                                                                                                                                                         |
| ETH_COL                | Input       | MII Collision Detect. Collision detect input signal valid only in MII.                                                                                                                                                                                                                                                                                                                                    |
| ETH_CRS                | Input       | MII Carrier Sense. Asserted by the PHY when either the transmit or receive medium is not idle. Deasserted when both are idle. This signal is not used in RMII/RGMII modes.                                                                                                                                                                                                                                |
| ETH_MDC                | Output      | Management Channel Clock. Clocks the MDCinput of the PHY for RMII/RGMII.                                                                                                                                                                                                                                                                                                                                  |
| ETH_MDIO               | InOut       | Management Channel Serial Data. Bidirectional data bus for PHY control for RMII/RGMII.                                                                                                                                                                                                                                                                                                                    |
| ETH_PHY_INT            | Input       | PHYInterrupt. ThissignalcanbeconnectedtotheinterruptoutputsignalfromthePHY.PHYinterrupt inside theEMAC module is generated when a rising edge is detected on this pin.                                                                                                                                                                                                                                    |
| ETH_PTPAUX- _MCG_IN[n] | Input       | PTP Auxiliary/Media Clock Generation Trigger Input. Assert this signal to take an auxiliary snapshot of the time and store it in the auxiliary time stamp FIFO or capture the presentation time by sampling at positive, negative, or both edges of the trigger input when operating in media clock generation mode. Note that the PTP auxiliary and media clock generation modes are mutually exclusive. |
| ETH_PTPCLKIN[n]        | Input       | PTP Clock Input. Optional external PTP clock input.                                                                                                                                                                                                                                                                                                                                                       |
| ETH_PTPPPS[n]          | Output      | PTPPulsePerSecondOutput. Whentheadvancedtimestampfeatureenables,thissignalisasserted based on the PPS modeselected. Otherwise, this signal is asserted every time the seconds counter is incremented.                                                                                                                                                                                                     |
| ETH_RXCLK_REFCLK       | InOut       | RXCLK (GigE) or REFCLK (10/100).                                                                                                                                                                                                                                                                                                                                                                          |
| ETH_RXD[n]             | Input       | Receive Data n. Receive data bus.                                                                                                                                                                                                                                                                                                                                                                         |
| ETH_RXERR              | Input       | Receive Error.                                                                                                                                                                                                                                                                                                                                                                                            |
| ETH_TXCLK              | Output      | Transmit Clock.                                                                                                                                                                                                                                                                                                                                                                                           |
| ETH_TXCTL_TXEN         | InOut       | TXCTL (GigE) or TXEN(10/100).                                                                                                                                                                                                                                                                                                                                                                             |
| ETH_TXD[n]             | Output      | Transmit Data n. Transmit data bus.                                                                                                                                                                                                                                                                                                                                                                       |
| FRACNPLL_FLOCK         | Output      | Fract PLL Lock.                                                                                                                                                                                                                                                                                                                                                                                           |
| FRACNPLL_PTP_CLK       | Input       | External EMACPTPReference Clock.                                                                                                                                                                                                                                                                                                                                                                          |
| HADC_EOC_DOUT          | Output      | EndofConversion/Serial Data Out. Transitions high for one cycle of the HADCinternal clock at the end of every conversion. Alternatively, HADC serial data out can be seen by setting the appropriate bit in HADC_CTL.                                                                                                                                                                                     |
| HADC_VIN[n]            | Input       | Analog Input at Channel n. Analog voltage inputs for digital conversion.                                                                                                                                                                                                                                                                                                                                  |
| HADC_VREFN             | Input       | Ground Reference for ADC. Connect to an external voltage reference that meets data sheet specifications.                                                                                                                                                                                                                                                                                                  |
| HADC_VREFP             | Input       | External Reference for ADC. Connect to an external voltage reference that meets data sheet specifications.                                                                                                                                                                                                                                                                                                |
| JTG_TCK                | Input       | JTAG Clock. JTAG test access port clock.                                                                                                                                                                                                                                                                                                                                                                  |
| JTG_TDI                | Input       | JTAG Serial Data In. JTAG test access port data input.                                                                                                                                                                                                                                                                                                                                                    |
| JTG_TDO                | Output      | JTAG Serial Data Out. JTAG test access port data output.                                                                                                                                                                                                                                                                                                                                                  |
| JTG_TMS                | Input       | JTAG ModeSelect. JTAG test access port mode select.                                                                                                                                                                                                                                                                                                                                                       |
| JTG_TRST               | Input       | JTAG Reset. JTAG test access port reset.                                                                                                                                                                                                                                                                                                                                                                  |
| LP_ACK                 | InOut       | Acknowledge. Provideshandshaking.Whenthelinkportisconfiguredasareceiver,ACKisanoutput. When the link port is configured as a transmitter, ACK is an input.                                                                                                                                                                                                                                                |
| LP_CLK                 | InOut       | Clock. Whenthelinkport is configured as a receiver,CLK isan input. Whenthelinkport is configured as a transmitter, CLK is an output.                                                                                                                                                                                                                                                                      |
| LP_D[n]                | InOut       | Data n. Data bus. Input when receiving, output when transmitting.                                                                                                                                                                                                                                                                                                                                         |
| MLB_CLK                | InOut       | Single Ended Clock.                                                                                                                                                                                                                                                                                                                                                                                       |
| MLB_DAT                | InOut       | Single Ended Data.                                                                                                                                                                                                                                                                                                                                                                                        |
| PWM_AH                 | Output      | Channel AHighSide. High-side drive signal.                                                                                                                                                                                                                                                                                                                                                                |
| PWM_AL                 | Output      | Channel ALowSide. Low-side drive signal.                                                                                                                                                                                                                                                                                                                                                                  |

Table 10.

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

ADSP-2183x/ADSP-SC83x Detailed Signal Descriptions (Continued)

| SignalName 1   | Direction   | Description                                                                                                                                                                |
|----------------|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| PWM_BH         | Output      | ChannelB High Side. High-side drive signal.                                                                                                                                |
| PWM_BL         | Output      | Channel BLowSide. Low-side drive signal.                                                                                                                                   |
| PWM_CH         | Output      | Channel C High Side. High-side drive signal.                                                                                                                               |
| PWM_CL         | Output      | Channel C LowSide. Low-side drive signal.                                                                                                                                  |
| PWM_DH         | Output      | Channel DHighSide. High-side drive signal.                                                                                                                                 |
| PWM_DL         | Output      | Channel DLowSide. Low-side drive signal.                                                                                                                                   |
| PWM_SYNC       | InOut       | PWMTMRGrouped. Thisinputisforanexternallygeneratedsyncsignal.Ifthesyncsignalisinternally generated no connection is necessary.                                             |
| PWM_TRIP[n]    | Input       | Shutdown Input n. When asserted, the selected PWMchannel outputs are shut down immediately.                                                                                |
| SPI_CLK        | InOut       | Clock. Input in slave mode, output in master mode.                                                                                                                         |
| SPI_D2         | InOut       | Data 2. Transfers serial data in quad mode. Open-drain when ODMmodeis enabled.                                                                                             |
| SPI_D3         | InOut       | Data 3. Transfers serial data in quad mode. Open-drain when ODMmodeis enabled.                                                                                             |
| SPI_MISO       | InOut       | Master In, Slave Out. Transfers serial data. Operates in the same direction as SPI_MOSI in dual and quad modes. Open-drain when ODMmodeis enabled.                         |
| SPI_MOSI       | InOut       | Master Out, Slave In. Transfers serial data. Operates in the same direction as SPI_MISO in dual and quad modes. Open-drain when ODMmodeis enabled.                         |
| SPI_RDY        | InOut       | Ready. Optional flow signal. Output in slave mode, input in master mode.                                                                                                   |
| SPI_SEL[n]     | Output      | Slave Select Output n. Used in master mode to enable the desired slave.                                                                                                    |
| SPI_SS         | Input       | Slave Select Input. Slave mode-acts as the slave select input. Master mode-optionally serves as an error detection input for the SPI when there are multiple masters.      |
| SYS_BMODE[n]   | Input       | Boot ModeControl n. Selects the boot mode of the processor.                                                                                                                |
| SYS_CLKIN0     | Input       | Clock/Crystal Input.                                                                                                                                                       |
| SYS_CLKOUT     | Output      | ProcessorClockOutput. Outputs internal clocks.Clocksmaybedivideddown.SeetheCGUchapter of the ADSP-2183x/ADSP-SC83x SHARC-FX Processor Hardware Reference for more details. |
| SYS_FAULT      | InOut       | Active-High Fault Output. Indicates internal faults or senses external faults depending on the operating mode.                                                             |
| SYS_FAULT      | InOut       | Active-Low Fault Output. Indicates internal faults or senses external faults depending on the operating mode.                                                              |
| SYS_HWRST      | Input       | Processor Hardware Reset Control. Resets the device when asserted.                                                                                                         |
| SYS_RESOUT     | Output      | Reset Output. Indicates the device is in the reset state.                                                                                                                  |
| SYS_XTAL0      | Output      | Crystal Output.                                                                                                                                                            |
| TM_ACI[nn]     | Input       | AlternateCaptureInputn. ProvidesanadditionalinputforWIDCAP,WATCHDOG,andPININTmodes.                                                                                        |
| TM_ACLK[nn]    | Input       | Alternate Clock n. Provides an additional time base for an individual timer.                                                                                               |
| TM_CLK         | Input       | Clock. Provides an additional global time base for all GP timers.                                                                                                          |
| TM_TMR[nn]     | InOut       | Timer n. The main input/output signal for each timer.                                                                                                                      |
| TRACE_CLK      | InOut       | Trace Clock. Clock output.                                                                                                                                                 |
| TRACE_D[nn]    | InOut       | Trace Data n. Unidirectional data bus.                                                                                                                                     |
| TWI_SCL        | InOut       | Serial Clock. Clock output when controller, clock input when target.                                                                                                       |
| TWI_SDA        | InOut       | Serial Data. Receives or transmits data.                                                                                                                                   |
| UART_CTS       | Input       | Clear to Send. Flow control signal.                                                                                                                                        |
| UART_RTS       | Output      | Request to Send. Flow control signal.                                                                                                                                      |
| UART_RX        | Input       | Receive. Receive input. Typically connects to a transceiver that meets the electrical requirements of the device being communicated with.                                  |
| UART_TX        | Output      | Transmit. Transmit output. Typically connects to a transceiver thatmeets the electrical requirements of the device being communicated with.                                |
| xSPI_CLK       | InOut       | Clock. Input in slave mode, output in master mode.                                                                                                                         |
| xSPI_D2        | InOut       | Data 2. Transfers serial data in quad mode.                                                                                                                                |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 10. ADSP-2183x/ADSP-SC83x Detailed Signal Descriptions (Continued)

| SignalName 1   | Direction   | Description                                                                                                                |
|----------------|-------------|----------------------------------------------------------------------------------------------------------------------------|
| xSPI_D3        | InOut       | Data 3. Transfers serial data in quad mode.                                                                                |
| xSPI_D4        | InOut       | Data 4. Transfers serial data in octal mode.                                                                               |
| xSPI_D5        | InOut       | Data 5. Transfers serial data in octal mode.                                                                               |
| xSPI_D6        | InOut       | Data 6. Transfers serial data in octal mode.                                                                               |
| xSPI_D7        | InOut       | Data 7. Transfers serial data in octal mode.                                                                               |
| xSPI_DQS_RWDS  | InOut       | Read/Write Data Strobe. Used as strobe for write and sampling clock for read.                                              |
| xSPI_MISO      | InOut       | Master In, Slave Out. Transfers serial data. Operates in the samedirection as SPI_MOSI in dual, quad, and octal modes.     |
| xSPI_MOSI      | InOut       | Master Out, Slave Input. Transfers serial data. Operates in the same direction as SPI_MISO in dual, quad, and octal modes. |
| xSPI_SEL[n]    | Output      | Slave Select Output n. Used in master mode to enable the desired slave.                                                    |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## 400-BALL HIGH PERIPHERAL COUNT (HPC) BGA SIGNALS

The processor pin definitions are shown in Table 11 for the 400ball HPC BGA package for the ADSP-21836/21837/ADSPSC834/SC835 processors. The columns in this table provide the following information:

- The signal name column includes the signal name for every pin and the GPIO multiplexed pin function, where applicable.
- The description column provides a descriptive name for each signal.
- The port column shows whether or not a signal is multiplexed with other signals on a GPIO port pin.
- The pin name column identifies the name of the package pin (at power on reset) on which the signal is located (if a single function pin) or is multiplexed (if a GPIO pin).
- The DAI pins and their associated signal routing units (SRUs) connect inputs and outputs of the DAI peripherals (SPORT, ASRC, S/PDIF, and PCG). See the Digital Audio Interface (DAI) chapter of the ADSP-2183x/ADSP-SC83x SHARC-FX Processor Hardware Reference for complete information on the use of the DAI and SRUs.

Table 11. ADSP-21836/21837/ADSP-SC834/SC835 400-Ball HPC BGA Signal Mapping

| SignalName 1   | Description                 | Port      | PinName    |
|----------------|-----------------------------|-----------|------------|
| C1_FLG0        | SHARC-FX Core 1 Flag 0      | A         | PA_12      |
| C1_FLG1        | SHARC-FX Core 1 Flag 1      | A         | PA_13      |
| C1_FLG2        | SHARC-FX Core 1 Flag 2      | B         | PB_03      |
| C1_FLG3        | SHARC-FX Core 1 Flag 3      | B         | PB_02      |
| CANFD0_RX      | CANFD0 Receive              | E         | PE_03      |
| CANFD0_TX      | CANFD0 Transmit             | E         | PE_04      |
| CANFD1_RX      | CANFD1 Receive              | E         | PE_05      |
| CANFD1_TX      | CANFD1 Transmit             | E         | PE_06      |
| CNT0_DG        | CNT0 Count Down and Gate    | B         | PB_05      |
| CNT0_UD        | CNT0 Count up and Direction | B         | PB_03      |
| CNT0_ZM        | CNT0 Zero Marker            | B         | PB_04      |
| DAI0_PIN01     | DAI0 Pin 1                  | Not Muxed | DAI0_PIN01 |
| DAI0_PIN02     | DAI0 Pin 2                  | Not Muxed | DAI0_PIN02 |
| DAI0_PIN03     | DAI0 Pin 3                  | Not Muxed | DAI0_PIN03 |
| DAI0_PIN04     | DAI0 Pin 4                  | Not Muxed | DAI0_PIN04 |
| DAI0_PIN05     | DAI0 Pin 5                  | Not Muxed | DAI0_PIN05 |
| DAI0_PIN06     | DAI0 Pin 6                  | Not Muxed | DAI0_PIN06 |
| DAI0_PIN07     | DAI0 Pin 7                  | Not Muxed | DAI0_PIN07 |
| DAI0_PIN08     | DAI0 Pin 8                  | Not Muxed | DAI0_PIN08 |
| DAI0_PIN09     | DAI0 Pin 9                  | Not Muxed | DAI0_PIN09 |
| DAI0_PIN10     | DAI0 Pin 10                 | Not Muxed | DAI0_PIN10 |
| DAI0_PIN11     | DAI0 Pin 11                 | Not Muxed | DAI0_PIN11 |
| DAI0_PIN12     | DAI0 Pin 12                 | Not Muxed | DAI0_PIN12 |
| DAI0_PIN13     | DAI0 Pin 13                 | Not Muxed | DAI0_PIN13 |
| DAI0_PIN14     | DAI0 Pin 14                 | Not Muxed | DAI0_PIN14 |
| DAI0_PIN15     | DAI0 Pin 15                 | Not Muxed | DAI0_PIN15 |
| DAI0_PIN16     | DAI0 Pin 16                 | Not Muxed | DAI0_PIN16 |
| DAI0_PIN17     | DAI0 Pin 17                 | Not Muxed | DAI0_PIN17 |
| DAI0_PIN18     | DAI0 Pin 18                 | Not Muxed | DAI0_PIN18 |
| DAI0_PIN19     | DAI0 Pin 19                 | Not Muxed | DAI0_PIN19 |
| DAI0_PIN20     | DAI0 Pin 20                 | Not Muxed | DAI0_PIN20 |
| DAI1_PIN01     | DAI1 Pin 1                  | Not Muxed | DAI1_PIN01 |
| DAI1_PIN02     | DAI1 Pin 2                  | Not Muxed | DAI1_PIN02 |
| DAI1_PIN03     | DAI1 Pin 3                  | Not Muxed | DAI1_PIN03 |
| DAI1_PIN04     | DAI1 Pin 4                  | Not Muxed | DAI1_PIN04 |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 11. ADSP-21836/21837/ADSP-SC834/SC835 400-Ball HPC BGA Signal Mapping (Continued)

| SignalName 1   | Description               | Port      | PinName    |
|----------------|---------------------------|-----------|------------|
| DAI1_PIN05     | DAI1 Pin 5                | Not Muxed | DAI1_PIN05 |
| DAI1_PIN06     | DAI1 Pin 6                | Not Muxed | DAI1_PIN06 |
| DAI1_PIN07     | DAI1 Pin 7                | Not Muxed | DAI1_PIN07 |
| DAI1_PIN08     | DAI1 Pin 8                | Not Muxed | DAI1_PIN08 |
| DAI1_PIN09     | DAI1 Pin 9                | Not Muxed | DAI1_PIN09 |
| DAI1_PIN10     | DAI1 Pin 10               | Not Muxed | DAI1_PIN10 |
| DAI1_PIN11     | DAI1 Pin 11               | Not Muxed | DAI1_PIN11 |
| DAI1_PIN12     | DAI1 Pin 12               | Not Muxed | DAI1_PIN12 |
| DAI1_PIN13     | DAI1 Pin 13               | Not Muxed | DAI1_PIN13 |
| DAI1_PIN14     | DAI1 Pin 14               | Not Muxed | DAI1_PIN14 |
| DAI1_PIN15     | DAI1 Pin 15               | Not Muxed | DAI1_PIN15 |
| DAI1_PIN16     | DAI1 Pin 16               | Not Muxed | DAI1_PIN16 |
| DAI1_PIN17     | DAI1 Pin 17               | Not Muxed | DAI1_PIN17 |
| DAI1_PIN18     | DAI1 Pin 18               | Not Muxed | DAI1_PIN18 |
| DAI1_PIN19     | DAI1 Pin 19               | Not Muxed | DAI1_PIN19 |
| DAI1_PIN20     | DAI1 Pin 20               | Not Muxed | DAI1_PIN20 |
| DMC0_A00       | DMC0Address 0             | Not Muxed | DMC0_A00   |
| DMC0_A01       | DMC0Address 1             | Not Muxed | DMC0_A01   |
| DMC0_A02       | DMC0Address 2             | Not Muxed | DMC0_A02   |
| DMC0_A03       | DMC0Address 3             | Not Muxed | DMC0_A03   |
| DMC0_A04       | DMC0Address 4             | Not Muxed | DMC0_A04   |
| DMC0_A05       | DMC0Address 5             | Not Muxed | DMC0_A05   |
| DMC0_A06       | DMC0Address 6             | Not Muxed | DMC0_A06   |
| DMC0_A07       | DMC0Address 7             | Not Muxed | DMC0_A07   |
| DMC0_A08       | DMC0Address 8             | Not Muxed | DMC0_A08   |
| DMC0_A09       | DMC0Address 9             | Not Muxed | DMC0_A09   |
| DMC0_A10       | DMC0Address 10            | Not Muxed | DMC0_A10   |
| DMC0_A11       | DMC0Address 11            | Not Muxed | DMC0_A11   |
| DMC0_A12       | DMC0Address 12            | Not Muxed | DMC0_A12   |
| DMC0_A13       | DMC0Address 13            | Not Muxed | DMC0_A13   |
| DMC0_A14       | DMC0Address 14            | Not Muxed | DMC0_A14   |
| DMC0_A15       | DMC0Address 15            | Not Muxed | DMC0_A15   |
| DMC0_BA0       | DMC0Bank Address Input 0  | Not Muxed | DMC0_BA0   |
| DMC0_BA1       | DMC0Bank Address Input 1  | Not Muxed | DMC0_BA1   |
| DMC0_BA2       | DMC0Bank Address Input 2  | Not Muxed | DMC0_BA2   |
| DMC0_CAS       | DMC0Column Address Strobe | Not Muxed | DMC0_CAS   |
| DMC0_CK        | DMC0Clock                 | Not Muxed | DMC0_CK    |
| DMC0_CK        | DMC0Clock (Complement)    | Not Muxed | DMC0_CK    |
| DMC0_CKE       | DMC0Clock Enable          | Not Muxed | DMC0_CKE   |
| DMC0_CS0       | DMC0Chip Select 0         | Not Muxed | DMC0_CS0   |
| DMC0_DQ00      | DMC0Data 0                | Not Muxed | DMC0_DQ00  |
| DMC0_DQ01      | DMC0Data 1                | Not Muxed | DMC0_DQ01  |
| DMC0_DQ02      | DMC0Data 2                | Not Muxed | DMC0_DQ02  |
| DMC0_DQ03      | DMC0Data 3                | Not Muxed | DMC0_DQ03  |
| DMC0_DQ04      | DMC0Data 4                | Not Muxed | DMC0_DQ04  |
| DMC0_DQ05      | DMC0Data 5                | Not Muxed | DMC0_DQ05  |
| DMC0_DQ07      | DMC0Data 7                | Not Muxed |            |
|                |                           |           | DMC0_DQ07  |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 11. ADSP-21836/21837/ADSP-SC834/SC835 400-Ball HPC BGA Signal Mapping (Continued)

| SignalName 1             | Description                                  | Port      | PinName     |
|--------------------------|----------------------------------------------|-----------|-------------|
| DMC0_DQ08                | DMC0Data 8                                   | Not Muxed | DMC0_DQ08   |
| DMC0_DQ09                | DMC0Data 9                                   | Not Muxed | DMC0_DQ09   |
| DMC0_DQ10                | DMC0Data 10                                  | Not Muxed | DMC0_DQ10   |
| DMC0_DQ11                | DMC0Data 11                                  | Not Muxed | DMC0_DQ11   |
| DMC0_DQ12                | DMC0Data 12                                  | Not Muxed | DMC0_DQ12   |
| DMC0_DQ13                | DMC0Data 13                                  | Not Muxed | DMC0_DQ13   |
| DMC0_DQ14                | DMC0Data 14                                  | Not Muxed | DMC0_DQ14   |
| DMC0_DQ15                | DMC0Data 15                                  | Not Muxed | DMC0_DQ15   |
| DMC0_LDM                 | DMC0Data Mask for Lower Byte                 | Not Muxed | DMC0_LDM    |
| DMC0_LDQS                | DMC0Data Strobe for Lower Byte               | Not Muxed | DMC0_LDQS   |
| DMC0_LDQS                | DMC0Data Strobe for Lower Byte (Complement)  | Not Muxed | DMC0_LDQS   |
| DMC0_ODT                 | DMC0On-Die Termination                       | Not Muxed | DMC0_ODT    |
| DMC0_RAS                 | DMC0RowAddress Strobe                        | Not Muxed | DMC0_RAS    |
| DMC0_RESET               | DMC0Reset                                    | Not Muxed | DMC0_RESET  |
| DMC0_RZQ                 | DMC0External Calibration Resistor Connection | Not Muxed | DMC0_RZQ    |
| DMC0_UDM                 | DMC0Data Mask for Upper Byte                 | Not Muxed | DMC0_UDM    |
| DMC0_UDQS                | DMC0Data Strobe for Upper Byte               | Not Muxed | DMC0_UDQS   |
| DMC0_UDQS                | DMC0Data Strobe for Upper Byte (Complement)  | Not Muxed | DMC0_UDQS   |
| DMC0_VREF0               | DMC0Voltage Reference                        | Not Muxed | DMC0_VREF0  |
| DMC0_WE                  | DMC0Write Enable                             | Not Muxed | DMC0_WE     |
| ETH0_COL                 | EMAC0 MII Collision Detect                   | C         | PC_12       |
| ETH0_CRS                 | EMAC0 MII Carrier Sense                      | C         | PC_08       |
| ETH0_MDC                 | EMAC0 Management Channel Clock               | C         | PC_15       |
| ETH0_MDIO                | EMAC0 Management Channel Serial Data         | D         | PD_00       |
| ETH0_PHY_INT             | EMAC0 MII Carrier Sense                      | C         | PC_13       |
| ETH0_PTPAUX_MCG_IN0      | EMAC0 PTP Auxiliary Trigger Input 0          | D         | PD_14       |
| ETH0_PTPAUX_MCG_IN1      | EMAC0 PTP Auxiliary Trigger Input 1          | C         | PC_10       |
| ETH0_PTPAUX_MCG_IN2      | EMAC0 PTP Auxiliary Trigger Input 2          | C         | PC_09       |
| ETH0_PTPAUX_MCG_IN3      | EMAC0 PTP Auxiliary Trigger Input 3          | C         | PC_14       |
| ETH0_PTPCLKIN0           | EMAC0 PTP Clock Input 0                      | D         | PD_13       |
| ETH0_PTPPPS0             | EMAC0 PTP Pulse-Per-Second Output 0          | E         | PE_00       |
| ETH0_PTPPPS1             | EMAC0 PTP Pulse-Per-Second Output 1          | D         | PD_15       |
| ETH0_PTPPPS2             | EMAC0 PTP Pulse-Per-Second Output 2          | E         | PE_01       |
| ETH0_PTPPPS3             | EMAC0 PTP Pulse-Per-Second Output 3          | E         | PE_02       |
| ETH0_RXCLK_REFCLK        | EMAC0 RXCLK (GigE) or REFCLK (10/100)        | D         | PD_03       |
| ETH0_RXD0                | EMAC0 Receive Data 0                         | D         | PD_01       |
| ETH0_RXD1                | EMAC0 Receive Data 1                         | D         | PD_02       |
| ETH0_RXD2                | EMAC0 Receive Data 2                         | D         | PD_07       |
| ETH0_RXD3                | EMAC0 Receive Data 3                         | D         | PD_08       |
| ETH0_RXERR               | EMAC0 Receive Error                          | C         | PC_11       |
| ETH0_TXCLK               | EMAC0 Reference Clock                        | D         | PD_10       |
| ETH0_TXCTL_TXEN          | EMAC0 TXCTL (GigE) or TXEN (10/100)          | D         | PD_09       |
| ETH0_TXD0                | EMAC0 Transmit Data 0                        | D         | PD_05       |
| ETH0_TXD1                | EMAC0 Transmit Data 1                        | D         | PD_06       |
| ETH0_TXD2                | EMAC0 Transmit Data 2                        | D         | PD_11       |
| ETH0_TXD3 FRACNPLL_FLOCK | EMAC0 Transmit Data 3 FRACNPLL Lock          | D A       | PD_12 PA_05 |
| FRACNPLL_PTP_CLK         | FRACNPLL PTP Reference Clock                 | A         | PA_15       |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 11. ADSP-21836/21837/ADSP-SC834/SC835 400-Ball HPC BGA Signal Mapping (Continued)

| SignalName 1    | Description                                 | Port      | PinName     |
|-----------------|---------------------------------------------|-----------|-------------|
| HADC0_EOC_DOUT  | HADC0 HADC End of Conversion                | A         | PA_11       |
| HADC0_VIN0      | HADC0 Analog Input at Channel 0             | Not Muxed | HADC0_VIN0  |
| HADC0_VIN1      | HADC0 Analog Input at Channel 1             | Not Muxed | HADC0_VIN1  |
| HADC0_VIN2      | HADC0 Analog Input at Channel 2             | Not Muxed | HADC0_VIN2  |
| HADC0_VIN3      | HADC0 Analog Input at Channel 3             | Not Muxed | HADC0_VIN3  |
| HADC0_VIN4      | HADC0 Analog Input at Channel 4             | Not Muxed | HADC0_VIN4  |
| HADC0_VIN5      | HADC0 Analog Input at Channel 5             | Not Muxed | HADC0_VIN5  |
| HADC0_VIN6      | HADC0 Analog Input at Channel 6             | Not Muxed | HADC0_VIN6  |
| HADC0_VIN7      | HADC0 Analog Input at Channel 7             | Not Muxed | HADC0_VIN7  |
| HADC0_VREFN     | HADC0 Ground Reference for ADC              | Not Muxed | HADC0_VREFN |
| HADC0_VREFP     | HADC0 External Reference for ADC            | Not Muxed | HADC0_VREFP |
| JTG_TCK         | JTAG Clock                                  | Not Muxed | JTG_TCK     |
| JTG_TDI         | JTAG Serial Data In                         | Not Muxed | JTG_TDI     |
| JTG_TDO         | JTAG Serial Data Out                        | Not Muxed | JTG_TDO     |
| JTG_TMS         | JTAG Mode Select                            | Not Muxed | JTG_TMS     |
| JTG_TRST        | JTAG Reset                                  | Not Muxed | JTG_TRST    |
| LP0_ACK         | LP0 Acknowledge                             | B         | PB_04       |
| LP0_CLK         | LP0 Clock                                   | B         | PB_06       |
| LP0_D0          | LP0 Data 0                                  | B         | PB_07       |
| LP0_D1          | LP0 Data 1                                  | B         | PB_08       |
| LP0_D2          | LP0 Data 2                                  | B         | PB_09       |
| LP0_D3          | LP0 Data 3                                  | B         | PB_10       |
| LP0_D4          | LP0 Data 4                                  | B         | PB_11       |
| LP0_D5          | LP0 Data 5                                  | B         | PB_12       |
| LP0_D6          | LP0 Data 6                                  | B         | PB_13       |
| LP0_D7          | LP0 Data 7                                  | B         | PB_14       |
| LP1_ACK         | LP1 Acknowledge                             | B         | PB_02       |
| LP1_CLK         | LP1 Clock                                   | C         | PC_07       |
| LP1_D0          | LP1 Data 0                                  | B         | PB_15       |
| LP1_D1          | LP1 Data 1                                  | C         | PC_00       |
| LP1_D2          | LP1 Data 2                                  | C         | PC_01       |
| LP1_D3          | LP1 Data 3                                  | C         | PC_02       |
| LP1_D4          | LP1 Data 4                                  | C         | PC_03       |
| LP1_D5          | LP1 Data 5                                  | C         | PC_04       |
| LP1_D6          | LP1 Data 6                                  | C         | PC_05       |
| LP1_D7          | LP1 Data 7                                  | C         | PC_06       |
| MLB0_CLK        | MLB0 Single-Ended Clock                     | B         | PB_02       |
| MLB0_DAT        | MLB0 Single-Ended Data                      | B         | PB_00       |
| MLB0_SIG        | MLB0 Single-Ended Signal                    | B         | PB_01       |
| PWM0_AH         | PWM0Channel A High Side                     | A         | PA_00       |
| PWM0_AL         | PWM0Channel A Low Side                      | A         | PA_01       |
| PWM0_BH         | PWM0Channel B High Side                     | A         | PA_04       |
| PWM0_BL         | PWM0Channel B Low Side                      | B         | PB_06       |
| PWM0_CH         | PWM0Channel C High Side                     | B         | PB_10       |
| PWM0_CL         | PWM0Channel C Low Side                      | B         | PB_11       |
| PWM0_DH PWM0_DL | PWM0Channel DHigh Side PWM0Channel DLowSide | B B       | PB_12 PB_14 |
| PWM0_SYNC       | PWM0PWMTMRGrouped                           | C         | PC_04       |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 11. ADSP-21836/21837/ADSP-SC834/SC835 400-Ball HPC BGA Signal Mapping (Continued)

| SignalName 1           | Description                                   | Port                | PinName                |
|------------------------|-----------------------------------------------|---------------------|------------------------|
| PWM0_TRIP0             | PWM0Shutdown Input 0                          | C                   | PC_06                  |
| SPI0_CLK               | SPI0 Clock                                    | E                   | PE_12                  |
| SPI0_MISO              | SPI0 Master In, Slave Out                     | E                   | PE_13                  |
| SPI0_MOSI              | SPI0 Master Out, Slave In                     | A                   | PA_08                  |
| SPI0_RDY               | SPI0 Ready                                    | B                   | PB_11                  |
| SPI0_SEL1              | SPI0 Slave Select Output 1                    | A                   | PA_09                  |
| SPI0_SEL2              | SPI0 Slave Select Output 2                    | B                   | PB_05                  |
| SPI0_SEL3              | SPI0 Slave Select Output 3                    | C                   | PC_13                  |
| SPI0_SEL4              | SPI0 Slave Select Output 4                    | D                   | PD_13                  |
| SPI0_SS                | SPI0 Slave Select Input                       | A                   | PA_09                  |
| SPI1_CLK               | SPI1 Clock                                    | A                   | PA_10                  |
| SPI1_D2                | SPI1 Data 2                                   | A                   | PA_14                  |
| SPI1_D3                | SPI1 Data 3                                   | A                   | PA_15                  |
| SPI1_MISO              | SPI1 Master In, Slave Out                     | A                   | PA_11                  |
| SPI1_MOSI              | SPI1 Master Out, Slave In                     | A                   | PA_12                  |
| SPI1_RDY               | SPI1 Ready                                    | B                   | PB_04                  |
| SPI1_SEL1              | SPI1 Slave Select Output 1                    | A                   | PA_13                  |
| SPI1_SEL2              | SPI1 Slave Select Output 2                    | B                   | PB_10                  |
| SPI1_SEL3              | SPI1 Slave Select Output 3                    | B                   | PB_13                  |
| SPI1_SEL4              | SPI1 Slave Select Output 4                    | C                   | PC_00                  |
| SPI1_SEL5              | SPI1 Slave Select Output 5                    | B                   | PB_06                  |
| SPI1_SEL6              | SPI1 Slave Select Output 6                    | C                   | PC_02                  |
| SPI1_SEL7              | SPI1 Slave Select Output 7                    | B                   | PB_08                  |
| SPI1_SS                | SPI1 Slave Select Input                       | A                   | PA_13                  |
| SPI2_CLK               | SPI2 Clock                                    | E                   | PE_11                  |
| SPI2_D2                | SPI2 Data 2                                   | A                   | PA_02                  |
| SPI2_D3                | SPI2 Data 3                                   | A                   | PA_03                  |
| SPI2_MISO              | SPI2 Master In, Slave Out                     | A                   | PA_00                  |
| SPI2_MOSI              | SPI2 Master Out, Slave In                     | A                   | PA_01                  |
| SPI2_RDY               | SPI2 Ready                                    | B                   | PB_05                  |
| SPI2_SEL1              | SPI2 Slave Select Output 1                    | E                   | PE_02                  |
| SPI2_SEL2              | SPI2 Slave Select Output 2                    | B                   | PB_03                  |
| SPI2_SEL3              | SPI2 Slave Select Output 3                    | B                   | PB_12                  |
| SPI2_SEL4              | SPI2 Slave Select Output 4                    | C                   | PC_01                  |
| SPI2_SEL5              | SPI2 Slave Select Output 5                    | B                   | PB_07                  |
| SPI2_SEL6              | SPI2 Slave Select Output 6                    | C                   | PC_03                  |
| SPI2_SEL7              | SPI2 Slave Select Output 7                    | B                   | PB_09                  |
| SPI2_SS                | SPI2 Slave Select Input                       | A                   | PA_05                  |
| SYS_BMODE0             | Boot Mode Control Pin 0                       | Not Muxed           | SYS_BMODE0             |
| SYS_BMODE1             | Boot Mode Control Pin 1                       | Not Muxed           | SYS_BMODE1             |
| SYS_BMODE2             | Boot Mode Control Pin 2                       | Not Muxed           | SYS_BMODE2             |
| SYS_CLKIN0             | Clock/Crystal Input                           | Not Muxed           | SYS_CLKIN0             |
| SYS_CLKOUT             | Processor Clock Output                        | Not Muxed           | SYS_CLKOUT             |
| SYS_FAULT              | Active-High Fault Output                      | C                   | PC_07                  |
| SYS_FAULT              | Active-Low Fault Output                       | Not Muxed           | SYS_FAULT              |
| SYS_HWRST SYS_RESETOUT | Processor Hardware Reset Control Reset Output | Not Muxed Not Muxed | SYS_HWRST SYS_RESETOUT |
| SYS_XTAL0              | Crystal Output 0                              | Not Muxed           | SYS_XTAL0              |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 11. ADSP-21836/21837/ADSP-SC834/SC835 400-Ball HPC BGA Signal Mapping (Continued)

| SignalName 1        | Description                               | Port   | PinName     |
|---------------------|-------------------------------------------|--------|-------------|
| TM0_ACI00           | TIMER0 Alternate Capture Input 0          | A      | PA_07       |
| TM0_ACI01           | TIMER0 Alternate Capture Input 1          | E      | PE_01       |
| TM0_ACI02           | TIMER0 Alternate Capture Input 2          | B      | PB_11       |
| TM0_ACI03           | TIMER0 Alternate Capture Input 3          | E      | PE_05       |
| TM0_ACI04           | TIMER0 Alternate Capture 4                | A      | PA_11       |
| TM0_ACLK01          | TIMER0 Alternate Clock 1                  | A      | PA_06       |
| TM0_ACLK02          | TIMER0 Alternate Clock 2                  | A      | PA_08       |
| TM0_ACLK03          | TIMER0 Alternate Clock 3                  | A      | PA_02       |
| TM0_ACLK04          | TIMER0 Alternate Clock 4                  | B      | PB_02       |
| TM0_CLK             | TIMER0 Clock                              | B      | PB_01       |
| TM0_TMR00           | TIMER0 Timer 0                            | A      | PA_10       |
| TM0_TMR01           | TIMER0 Timer 1                            | A      | PA_12       |
| TM0_TMR02           | TIMER0 Timer 2                            | A      | PA_13       |
| TM0_TMR03           | TIMER0 Timer 3                            | B      | PB_03       |
| TM0_TMR04           | TIMER0 Timer 4                            | B      | PB_04       |
| TM0_TMR05           | TIMER0 Timer 5                            | B      | PB_05       |
| TM0_TMR06           | TIMER0 Timer 6                            | B      | PB_08       |
| TM0_TMR07           | TIMER0 Timer 7                            | B      | PB_09       |
| TM0_TMR08           | TIMER0 Timer 8                            | C      | PC_05       |
| TM0_TMR09           | TIMER0 Timer 9                            | C      | PC_07       |
| TRACE0_CLK          | TRACE0 Trace Clock                        | B      | PB_06       |
| TRACE0_D0           | TRACE0 Trace Data 0                       | B      | PB_07       |
| TRACE0_D1           | TRACE0 Trace Data 1                       | B      | PB_08       |
| TRACE0_D2           | TRACE0 Trace Data 2                       | B      | PB_09       |
| TRACE0_D3           | TRACE0 Trace Data 3                       | B      | PB_10       |
| TRACE0_D4           | TRACE0 Trace Data 4                       | C      | PC_00       |
| TRACE0_D5           | TRACE0 Trace Data 5                       | C      | PC_01       |
| TRACE0_D6           | TRACE0 Trace Data 6                       | C      | PC_02       |
| TRACE0_D7           | TRACE0 Trace Data 7                       | C      | PC_03       |
| TWI0_SCL            | TWI0 Serial Clock                         | A      | PA_10       |
| TWI0_SDA            | TWI0 Serial Data                          | E      | PE_10       |
| TWI1_SCL            | TWI1 Serial Clock                         | B      | PB_00       |
| TWI1_SDA            | TWI1 Serial Data                          | B      | PB_01       |
| TWI2_SCL            | TWI2 Serial Clock                         | A      | PA_14       |
| TWI2_SDA            | TWI2 Serial Data                          | A      | PA_15       |
| TWI3_SCL            | TWI3 Serial Clock                         | A      | PA_02       |
| TWI3_SDA            | TWI3 Serial Data                          | A      | PA_03       |
| TWI4_SCL            | TWI4 Serial Clock                         | C      | PC_00       |
| TWI4_SDA            | TWI4 Serial Data                          | C      | PC_01       |
| TWI5_SCL            | TWI5 Serial Clock                         | C      | PC_02       |
| TWI5_SDA            | TWI5 Serial Data                          | C      | PC_03       |
| UART0_CTS           | UART0 Clear to Send                       | A      | PA_09       |
| UART0_RTS           | UART0 Request to Send                     | A      | PA_08       |
| UART0_RX            | UART0 Receive                             | A      | PA_07       |
| UART0_TX            | UART0 Transmit                            | A      | PA_06       |
| UART1_CTS UART1_RTS | UART1 Clear to Send UART1 Request to Send | C B    | PC_10 PB_00 |
| UART1_RX            | UART1 Receive                             | E      | PE_01       |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 11. ADSP-21836/21837/ADSP-SC834/SC835 400-Ball HPC BGA Signal Mapping (Continued)

| SignalName 1   | Description                | Port   | PinName   |
|----------------|----------------------------|--------|-----------|
| UART1_TX       | UART1 Transmit             | D      | PD_15     |
| UART2_CTS      | UART2 Clear to Send        | B      | PB_14     |
| UART2_RTS      | UART2 Request to Send      | B      | PB_13     |
| UART2_RX       | UART2 Receive              | B      | PB_11     |
| UART2_TX       | UART2 Transmit             | B      | PB_12     |
| xSPI_CLK       | xSPI Clock                 | A      | PA_04     |
| xSPI_D2        | xSPI Data 2                | A      | PA_02     |
| xSPI_D3        | xSPI Data 3                | A      | PA_03     |
| xSPI_D4        | xSPI Data 4                | A      | PA_06     |
| xSPI_D5        | xSPI Data 5                | A      | PA_07     |
| xSPI_D6        | xSPI Data 6                | A      | PA_08     |
| xSPI_D7        | xSPI Data 7                | A      | PA_09     |
| xSPI_DQS_RWDS  | xSPI Date Strobe           | B      | PB_13     |
| xSPI_MISO      | xSPI Master In, Slave Out  | A      | PA_00     |
| xSPI_MOSI      | xSPI Master Out, Slave In  | A      | PA_01     |
| xSPI_SEL1      | xSPI Slave Select Output 1 | A      | PA_05     |
| xSPI_SEL2      | xSPI Slave Select Output 2 | C      | PC_04     |
| xSPI_SEL3      | xSPI Slave Select Output 3 | C      | PC_11     |
| xSPI_SEL4      | xSPI Slave Select Output 4 | C      | PC_12     |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## GPIO MULTIPLEXING FOR 400-BALL HPC BGA PACKAGE

Table 12 through Table 16 identify the pin functions that are multiplexed on the GPIO pins of the 400-ball HPC BGA package for the ADSP-21836/21837/ADSP-SC834/SC835 processors.

Table 12. ADSP-21836/21837/ADSP-SC834/SC835 Signal Multiplexing for Port A 1

| SignalName   | Multiplexed Function 0   | Multiplexed Function 1   | Multiplexed Function 2   | Multiplexed Function 3   | Multiplexed Function Input Tap   |
|--------------|--------------------------|--------------------------|--------------------------|--------------------------|----------------------------------|
| PA_00        | SPI2_MISO                | xSPI_MISO                | PWM0_AH                  |                          |                                  |
| PA_01        | SPI2_MOSI                | xSPI_MOSI                | PWM0_AL                  |                          |                                  |
| PA_02        | SPI2_D2                  | xSPI_D2                  | TWI3_SCL                 |                          | TM0_ACLK03                       |
| PA_03        | SPI2_D3                  | xSPI_D3                  | TWI3_SDA                 |                          |                                  |
| PA_04        | SPI2_CLK                 | xSPI_CLK                 | PWM0_BH                  |                          |                                  |
| PA_05        | SPI2_SEL1                | xSPI_SEL1                | FRACNPLL_FLOCK           |                          | SPI2_SS                          |
| PA_06        | SPI0_CLK                 | UART0_TX                 | xSPI_D4                  |                          | TM0_ACLK01                       |
| PA_07        | SPI0_MISO                | UART0_RX                 | xSPI_D5                  |                          | TM0_ACI00                        |
| PA_08        | SPI0_MOSI                | UART0_RTS                | xSPI_D6                  |                          | TM0_ACLK02                       |
| PA_09        | SPI0_SEL1                | UART0_CTS                | xSPI_D7                  |                          | SPI0_SS                          |
| PA_10        | TWI0_SCL                 | SPI1_CLK                 | TM0_TMR00                |                          |                                  |
| PA_11        | TWI0_SDA                 | SPI1_MISO                | HADC0_EOC_OUT            |                          | TM0_ACI04                        |
| PA_12        | C1_FLG0                  | SPI1_MOSI                | TM0_TMR01                |                          |                                  |
| PA_13        | C1_FLG1                  | SPI1_SEL1                | TM0_TMR02                |                          | SPI1_SS                          |
| PA_14        | TWI2_SCL                 | SPI1_D2                  | UART1_RX                 |                          | TM0_ACI01                        |
| PA_15        | TWI2_SDA                 | SPI1_D3                  | UART1_TX                 |                          | FRACNPLL_PTP_CLK                 |

Table 13. ADSP-21836/21837/ADSP-SC834/SC835 Signal Multiplexing for Port B 1

| SignalName   | Multiplexed Function 0   | Multiplexed Function 1   | Multiplexed Function 2   | Multiplexed Function 3   | Multiplexed Function Input Tap   |
|--------------|--------------------------|--------------------------|--------------------------|--------------------------|----------------------------------|
| PB_00        | MLB0_DAT                 | TWI1_SCL                 | UART1_RTS                |                          | TM0_ACI03                        |
| PB_01        | MLB0_SIG                 | TWI1_SDA                 | UART1_CTS                |                          | TM0_CLK                          |
| PB_02        | MLB0_CLK                 | C1_FLG3                  | LP1_ACK                  |                          | TM0_ACLK04                       |
| PB_03        | TM0_TMR03                | C1_FLG2                  | SPI2_SEL2                |                          | CNT0_UD                          |
| PB_04        | TM0_TMR04                | SPI1_RDY                 | LP0_ACK                  |                          | CNT0_ZM                          |
| PB_05        | TM0_TMR05                | SPI2_RDY                 | SPI0_SEL2                |                          | CNT0_DG                          |
| PB_06        | LP0_CLK                  | SPI1_SEL5                | PWM0_BL                  | TRACE0_CLK               |                                  |
| PB_07        | LP0_D0                   | SPI2_SEL5                |                          | TRACE0_D0                |                                  |
| PB_08        | LP0_D1                   | SPI1_SEL7                | TM0_TMR06                | TRACE0_D1                |                                  |
| PB_09        | LP0_D2                   | SPI2_SEL7                | TM0_TMR07                | TRACE0_D2                |                                  |
| PB_10        | LP0_D3                   | SPI1_SEL2                | PWM0_CH                  | TRACE0_D3                |                                  |
| PB_11        | LP0_D4                   | SPI0_RDY                 | PWM0_CL                  | UART2_RX                 | TM0_ACI02                        |
| PB_12        | LP0_D5                   | SPI2_SEL3                | PWM0_DH                  | UART2_TX                 |                                  |
| PB_13        | LP0_D6                   | SPI1_SEL3                | xSPI_DQS_RWDS            | UART2_RTS                |                                  |
| PB_14        | LP0_D7                   | SPI0_SEL3                | PWM0_DL                  | UART2_CTS                |                                  |
| PB_15        | LP1_D0                   | SPI0_SEL4                |                          |                          |                                  |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 14. ADSP-21836/21837/ADSP-SC834/SC835 Signal Multiplexing for Port C 1

| SignalName   | Multiplexed Function 0   | Multiplexed Function 1   | Multiplexed Function 2   | Multiplexed Function 3                  | Multiplexed Function Input Tap            |
|--------------|--------------------------|--------------------------|--------------------------|-----------------------------------------|-------------------------------------------|
| PC_00        | LP1_D1                   | TWI4_SCL                 | TRACE0_D4                | SPI1_SEL4 SPI2_SEL4 SPI1_SEL6 SPI2_SEL6 | EMAC0_PTPAUX_MCG_IN2 EMAC0_PTPAUX_MCG_IN1 |
| PC_01        | LP1_D2                   | TWI4_SDA                 | TRACE0_D5                |                                         | EMAC0_PTPAUX_MCG_IN2 EMAC0_PTPAUX_MCG_IN1 |
| PC_02        | LP1_D3                   | TWI5_SCL                 | TRACE0_D6                |                                         | EMAC0_PTPAUX_MCG_IN2 EMAC0_PTPAUX_MCG_IN1 |
| PC_03        | LP1_D4                   | TWI5_SDA                 | TRACE0_D7                |                                         | EMAC0_PTPAUX_MCG_IN2 EMAC0_PTPAUX_MCG_IN1 |
| PC_04        | LP1_D5                   | xSPI_SEL2                | PWM0_SYNC                |                                         | EMAC0_PTPAUX_MCG_IN2 EMAC0_PTPAUX_MCG_IN1 |
| PC_05        | LP1_D6                   | xSPI_SEL3                | TM0_TMR08                |                                         | EMAC0_PTPAUX_MCG_IN2 EMAC0_PTPAUX_MCG_IN1 |
| PC_06        | LP1_D7                   | SPI1_RDY                 | PWM0_TRIP0               |                                         | EMAC0_PTPAUX_MCG_IN2 EMAC0_PTPAUX_MCG_IN1 |
| PC_07        | LP1_CLK                  |                          | TM0_TMR09                | SYS_FAULT                               | EMAC0_PTPAUX_MCG_IN2 EMAC0_PTPAUX_MCG_IN1 |
| PC_08        | EMAC0_CRS                | xSPI_SEL2                |                          |                                         | EMAC0_PTPAUX_MCG_IN2 EMAC0_PTPAUX_MCG_IN1 |
| PC_09        | xSPI_DQS_RWDS            |                          | UART1_RTS                |                                         |                                           |
| PC_10        | LP0_ACK                  |                          | UART1_CTS                |                                         |                                           |
| PC_11        | EMAC0_RXERR              | xSPI_SEL3                |                          |                                         |                                           |
| PC_12        | EMAC0_COL                | xSPI_SEL4                |                          |                                         |                                           |
| PC_13        | EMAC0_PHY_INT            | SPI0_SEL3                |                          |                                         |                                           |
| PC_14        | LP1_ACK                  |                          |                          |                                         | EMAC0_PTPAUX_MCG_IN3                      |
| PC_15        | EMAC0_MDC                |                          |                          |                                         |                                           |

Table 15. ADSP-21836/21837/ADSP-SC834/SC835 Signal Multiplexing for Port D 1

| SignalName   | Multiplexed Function 0   | Multiplexed Function 1   | Multiplexed Function 2   | Multiplexed Function 3   | Multiplexed Function Input Tap   |
|--------------|--------------------------|--------------------------|--------------------------|--------------------------|----------------------------------|
| PD_00        | EMAC0_MDIO               |                          |                          |                          |                                  |
| PD_01        | EMAC0_RXD0               |                          |                          |                          |                                  |
| PD_02        | EMAC0_RXD1               |                          |                          |                          |                                  |
| PD_03        | EMAC0_RXCLK_REFCLK       |                          |                          |                          |                                  |
| PD_04        | EMAC0_RXCTL_RXDV         |                          |                          |                          |                                  |
| PD_05        | EMAC0_TXD0               |                          |                          |                          |                                  |
| PD_06        | EMAC0_TXD1               |                          |                          |                          |                                  |
| PD_07        | EMAC0_RXD2               |                          |                          |                          |                                  |
| PD_08        | EMAC0_RXD3               |                          |                          |                          |                                  |
| PD_09        | EMAC0_TXCTL_TXEN         |                          |                          |                          |                                  |
| PD_10        | EMAC0_TXCLK              |                          |                          |                          |                                  |
| PD_11        | EMAC0_TXD2               |                          |                          |                          |                                  |
| PD_12        | EMAC0_TXD3               |                          |                          |                          |                                  |
| PD_13        | EMAC0_PTPCLKIN0          | SPI0_SEL4                |                          |                          |                                  |
| PD_14        | EMAC0_PTPAUX_MCG_IN0     |                          |                          |                          |                                  |
| PD_15        | EMAC0_PTPPPS1            |                          | UART1_TX                 |                          |                                  |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 16. ADSP-21836/21837/ADSP-SC834/SC835 Signal Multiplexing for Port E 1

| SignalName   | Multiplexed Function 0   | Multiplexed Function 1   | Multiplexed Function 2   | Multiplexed Function 3   | Multiplexed Function Input Tap   |
|--------------|--------------------------|--------------------------|--------------------------|--------------------------|----------------------------------|
| PE_00        | EMAC0_PTPPPS0            |                          |                          |                          |                                  |
| PE_01        | EMAC0_PTPPPS2            |                          | UART1_RX                 |                          | TM0_ACI01                        |
| PE_02        | EMAC0_PTPPPS3            | SPI2_SEL1                |                          |                          | SPI2_SS                          |
| PE_03        | CANFD0_RX                |                          |                          |                          | TM0_ACI04                        |
| PE_04        | CANFD0_TX                |                          |                          |                          |                                  |
| PE_05        | CANFD1_RX                | SPI2_SEL4                |                          |                          | TM0_ACI03                        |
| PE_06        | CANFD1_TX                | SPI2_SEL6                |                          |                          |                                  |
| PE_07        | SPI2_MISO                |                          |                          |                          |                                  |
| PE_08        | SPI2_MOSI                |                          |                          |                          |                                  |
| PE_09        | SPI2_D2                  | TWI0_SCL                 |                          |                          |                                  |
| PE_10        | SPI2_D3                  | TWI0_SDA                 |                          |                          |                                  |
| PE_11        | SPI2_CLK                 |                          |                          |                          |                                  |
| PE_12        | SPI0_CLK                 |                          |                          |                          |                                  |
| PE_13        | SPI0_MISO                |                          |                          |                          |                                  |
| PE_14        | SPI0_MOSI                |                          |                          |                          |                                  |
| PE_15        | SPI0_SEL1                |                          |                          |                          | SPI0_SS                          |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## 400-BALL LOW PERIPHERAL COUNT (LPC) BGA SIGNALS

The processor pin definitions are shown in Table 17 for the 400ball LPC BGA package for the ADSP-21834/21835 processors. The columns in this table provide the following information:

- The signal name column includes the signal name for every pin and the GPIO multiplexed pin function, where applicable.
- The description column provides a descriptive name for each signal.
- The port column shows whether or not a signal is multiplexed with other signals on a GPIO port pin.
- The pin name column identifies the name of the package pin (at power on reset) on which the signal is located (if a single function pin) or is multiplexed (if a GPIO pin).
- The DAI pins and their associated signal routing units (SRUs) connect inputs and outputs of the DAI peripherals (SPORT, ASRC, S/PDIF, and PCG). See the Digital Audio Interface (DAI) chapter of the ADSP-2183x/ADSP-SC83x SHARC-FX Processor Hardware Reference for complete information on the use of the DAI and SRUs.

Table 17. ADSP-21834/21835 400-Ball LPC BGA Signal Mapping

| SignalName 1   | Description                 | Port      | PinName    |
|----------------|-----------------------------|-----------|------------|
| C1_FLG0        | SHARC-FX Core 1 Flag 0      | A         | PA_12      |
| C1_FLG1        | SHARC-FX Core 1 Flag 1      | A         | PA_13      |
| C1_FLG2        | SHARC-FX Core 1 Flag 2      | B         | PB_03      |
| C1_FLG3        | SHARC-FX Core 1 Flag 3      | B         | PB_02      |
| CNT0_DG        | CNT0 Count Down and Gate    | B         | PB_05      |
| CNT0_UD        | CNT0 Count up and Direction | B         | PB_03      |
| CNT0_ZM        | CNT0 Zero Marker            | B         | PB_04      |
| DAI0_PIN01     | DAI0 Pin 1                  | Not Muxed | DAI0_PIN01 |
| DAI0_PIN02     | DAI0 Pin 2                  | Not Muxed | DAI0_PIN02 |
| DAI0_PIN03     | DAI0 Pin 3                  | Not Muxed | DAI0_PIN03 |
| DAI0_PIN04     | DAI0 Pin 4                  | Not Muxed | DAI0_PIN04 |
| DAI0_PIN05     | DAI0 Pin 5                  | Not Muxed | DAI0_PIN05 |
| DAI0_PIN06     | DAI0 Pin 6                  | Not Muxed | DAI0_PIN06 |
| DAI0_PIN07     | DAI0 Pin 7                  | Not Muxed | DAI0_PIN07 |
| DAI0_PIN08     | DAI0 Pin 8                  | Not Muxed | DAI0_PIN08 |
| DAI0_PIN09     | DAI0 Pin 9                  | Not Muxed | DAI0_PIN09 |
| DAI0_PIN10     | DAI0 Pin 10                 | Not Muxed | DAI0_PIN10 |
| DAI0_PIN11     | DAI0 Pin 11                 | Not Muxed | DAI0_PIN11 |
| DAI0_PIN12     | DAI0 Pin 12                 | Not Muxed | DAI0_PIN12 |
| DAI0_PIN19     | DAI0 Pin 19                 | Not Muxed | DAI0_PIN19 |
| DAI0_PIN20     | DAI0 Pin 20                 | Not Muxed | DAI0_PIN20 |
| DAI1_PIN01     | DAI1 Pin 1                  | Not Muxed | DAI1_PIN01 |
| DAI1_PIN02     | DAI1 Pin 2                  | Not Muxed | DAI1_PIN02 |
| DAI1_PIN03     | DAI1 Pin 3                  | Not Muxed | DAI1_PIN03 |
| DAI1_PIN04     | DAI1 Pin 4                  | Not Muxed | DAI1_PIN04 |
| DAI1_PIN05     | DAI1 Pin 5                  | Not Muxed | DAI1_PIN05 |
| DAI1_PIN06     | DAI1 Pin 6                  | Not Muxed | DAI1_PIN06 |
| DAI1_PIN07     | DAI1 Pin 7                  | Not Muxed | DAI1_PIN07 |
| DAI1_PIN08     | DAI1 Pin 8                  | Not Muxed | DAI1_PIN08 |
| DAI1_PIN09     | DAI1 Pin 9                  | Not Muxed | DAI1_PIN09 |
| DAI1_PIN10     | DAI1 Pin 10                 | Not Muxed | DAI1_PIN10 |
| DAI1_PIN11     | DAI1 Pin 11                 | Not Muxed | DAI1_PIN11 |
| DAI1_PIN12     | DAI1 Pin 12                 | Not Muxed | DAI1_PIN12 |
| DAI1_PIN19     | DAI1 Pin 19                 | Not Muxed | DAI1_PIN19 |
| DAI1_PIN20     | DAI1 Pin 20                 | Not Muxed | DAI1_PIN20 |
| DMC0_A00       | DMC0Address 0               | Not Muxed | DMC0_A00   |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 17. ADSP-21834/21835 400-Ball LPC BGA Signal Mapping (Continued)

| SignalName 1   | Description                                  | Port      | PinName    |
|----------------|----------------------------------------------|-----------|------------|
| DMC0_A01       | DMC0Address 1                                | Not Muxed | DMC0_A01   |
| DMC0_A02       | DMC0Address 2                                | Not Muxed | DMC0_A02   |
| DMC0_A03       | DMC0Address 3                                | Not Muxed | DMC0_A03   |
| DMC0_A04       | DMC0Address 4                                | Not Muxed | DMC0_A04   |
| DMC0_A05       | DMC0Address 5                                | Not Muxed | DMC0_A05   |
| DMC0_A06       | DMC0Address 6                                | Not Muxed | DMC0_A06   |
| DMC0_A07       | DMC0Address 7                                | Not Muxed | DMC0_A07   |
| DMC0_A08       | DMC0Address 8                                | Not Muxed | DMC0_A08   |
| DMC0_A09       | DMC0Address 9                                | Not Muxed | DMC0_A09   |
| DMC0_A10       | DMC0Address 10                               | Not Muxed | DMC0_A10   |
| DMC0_A11       | DMC0Address 11                               | Not Muxed | DMC0_A11   |
| DMC0_A12       | DMC0Address 12                               | Not Muxed | DMC0_A12   |
| DMC0_A13       | DMC0Address 13                               | Not Muxed | DMC0_A13   |
| DMC0_A14       | DMC0Address 14                               | Not Muxed | DMC0_A14   |
| DMC0_A15       | DMC0Address 15                               | Not Muxed | DMC0_A15   |
| DMC0_BA0       | DMC0Bank Address Input 0                     | Not Muxed | DMC0_BA0   |
| DMC0_BA1       | DMC0Bank Address Input 1                     | Not Muxed | DMC0_BA1   |
| DMC0_BA2       | DMC0Bank Address Input 2                     | Not Muxed | DMC0_BA2   |
| DMC0_CAS       | DMC0Column Address Strobe                    | Not Muxed | DMC0_CAS   |
| DMC0_CK        | DMC0Clock                                    | Not Muxed | DMC0_CK    |
| DMC0_CKE       | DMC0Clock Enable                             | Not Muxed | DMC0_CKE   |
| DMC0_CS0       | DMC0Chip Select 0                            | Not Muxed | DMC0_CS0   |
| DMC0_DQ00      | DMC0Data 0                                   | Not Muxed | DMC0_DQ00  |
| DMC0_DQ01      | DMC0Data 1                                   | Not Muxed | DMC0_DQ01  |
| DMC0_DQ02      | DMC0Data 2                                   | Not Muxed | DMC0_DQ02  |
| DMC0_DQ03      | DMC0Data 3                                   | Not Muxed | DMC0_DQ03  |
| DMC0_DQ04      | DMC0Data 4                                   | Not Muxed | DMC0_DQ04  |
| DMC0_DQ05      | DMC0Data 5                                   | Not Muxed | DMC0_DQ05  |
| DMC0_DQ06      | DMC0Data 6                                   | Not Muxed | DMC0_DQ06  |
| DMC0_DQ07      | DMC0Data 7                                   | Not Muxed | DMC0_DQ07  |
| DMC0_DQ08      | DMC0Data 8                                   | Not Muxed | DMC0_DQ08  |
| DMC0_DQ09      | DMC0Data 9                                   | Not Muxed | DMC0_DQ09  |
| DMC0_DQ10      | DMC0Data 10                                  | Not Muxed | DMC0_DQ10  |
| DMC0_DQ11      | DMC0Data 11                                  | Not Muxed | DMC0_DQ11  |
| DMC0_DQ12      | DMC0Data 12                                  | Not Muxed | DMC0_DQ12  |
| DMC0_DQ13      | DMC0Data 13                                  | Not Muxed | DMC0_DQ13  |
| DMC0_DQ14      | DMC0Data 14                                  | Not Muxed | DMC0_DQ14  |
| DMC0_DQ15      | DMC0Data 15                                  | Not Muxed | DMC0_DQ15  |
| DMC0_LDM       | DMC0Data Mask for Lower Byte                 | Not Muxed | DMC0_LDM   |
| DMC0_LDQS      | DMC0Data Strobe for Lower Byte               | Not Muxed | DMC0_LDQS  |
| DMC0_ODT       | DMC0On-Die Termination                       | Not Muxed | DMC0_ODT   |
| DMC0_RAS       | DMC0RowAddress Strobe                        | Not Muxed | DMC0_RAS   |
| DMC0_RESET     | DMC0Reset                                    | Not Muxed | DMC0_RESET |
| DMC0_RZQ       | DMC0External Calibration Resistor Connection | Not Muxed | DMC0_RZQ   |
| DMC0_UDM       | DMC0Data Mask for Upper Byte                 | Not Muxed | DMC0_UDM   |
| DMC0_UDQS      | DMC0Data Strobe for Upper Byte               | Not Muxed | DMC0_UDQS  |
| DMC0_VREF1     | DMC0Voltage Reference                        | Not Muxed | DMC0_VREF1 |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 17. ADSP-21834/21835 400-Ball LPC BGA Signal Mapping (Continued)

| SignalName 1      | Description                            | Port      | PinName     |
|-------------------|----------------------------------------|-----------|-------------|
| DMC0_WE           | DMC0Write Enable                       | Not Muxed | DMC0_WE     |
| FRACNPLL_FLOCK    | FRACNPLL Lock                          | A         | PA_05       |
| FRACNPLL_PTP_CLK  | FRACNPLL PTP Reference Clock           | A         | PA_15       |
| HADC0_EOC_DOUT    | HADC0 HADC End of Conversion           | A         | PA_11       |
| HADC0_VIN0        | HADC0 Analog Input at Channel 0        | Not Muxed | HADC0_VIN0  |
| HADC0_VIN1        | HADC0 Analog Input at Channel 1        | Not Muxed | HADC0_VIN1  |
| HADC0_VIN2        | HADC0 Analog Input at Channel 2        | Not Muxed | HADC0_VIN2  |
| HADC0_VIN3        | HADC0 Analog Input at Channel 3        | Not Muxed | HADC0_VIN3  |
| HADC0_VREFN       | HADC0 Ground Reference for ADC         | Not Muxed | HADC0_VREFN |
| HADC0_VREFP       | HADC0 External Reference for ADC       | Not Muxed | HADC0_VREFP |
| JTG_TCK           | JTAG Clock                             | Not Muxed | JTG_TCK     |
| JTG_TDI           | JTAG Serial Data In                    | Not Muxed | JTG_TDI     |
| JTG_TDO           | JTAG Serial Data Out                   | Not Muxed | JTG_TDO     |
| JTG_TMS           | JTAG Mode Select                       | Not Muxed | JTG_TMS     |
| JTG_TRST          | JTAG Reset                             | Not Muxed | JTG_TRST    |
| LP0_ACK           | LP0 Acknowledge                        | B         | PB_04       |
| LP0_CLK           | LP0 Clock                              | B         | PB_06       |
| LP0_D0            | LP0 Data 0                             | B         | PB_07       |
| LP0_D1            | LP0 Data 1                             | B         | PB_08       |
| LP0_D2            | LP0 Data 2                             | B         | PB_09       |
| LP0_D3            | LP0 Data 3                             | B         | PB_10       |
| LP0_D4            | LP0 Data 4                             | B         | PB_11       |
| LP0_D5            | LP0 Data 5                             | B         | PB_12       |
| LP0_D6            | LP0 Data 6                             | B         | PB_13       |
| LP0_D7            | LP0 Data 7                             | B         | PB_14       |
| LP1_ACK           | LP1 Acknowledge                        | B         | PB_02       |
| LP1_CLK           | LP1 Clock                              | C         | PC_07       |
| LP1_D0            | LP1 Data 0                             | B         | PB_15       |
| LP1_D1            | LP1 Data 1                             | C         | PC_00       |
| LP1_D2            | LP1 Data 2                             | C         | PC_01       |
| LP1_D3            | LP1 Data 3                             | C         | PC_02       |
| LP1_D4            | LP1 Data 4                             | C         | PC_03       |
| LP1_D5            | LP1 Data 5                             | C         | PC_04       |
| LP1_D6            | LP1 Data 6                             | C         | PC_05       |
| LP1_D7            | LP1 Data 7                             | C         | PC_06       |
| MLB0_CLK          | MLB0 Single-Ended Clock                | B         | PB_02       |
| MLB0_DAT          | MLB0 Single-Ended Data                 | B         | PB_00       |
| MLB0_SIG          | MLB0 Single-Ended Signal               | B         | PB_01       |
| PWM0_AH           | PWM0Channel A High Side                | A         | PA_00       |
| PWM0_AL           | PWM0Channel A Low Side                 | A         | PA_01       |
| PWM0_BH           | PWM0Channel B High Side                | A         | PA_04       |
| PWM0_BL           | PWM0Channel B Low Side                 | B         | PB_06       |
| PWM0_CH           | PWM0Channel C High Side                | B         | PB_10       |
| PWM0_CL           | PWM0Channel C Low Side                 | B         | PB_11       |
| PWM0_DH           | PWM0Channel DHigh Side                 | B         | PB_12       |
| PWM0_DL PWM0_SYNC | PWM0Channel DLowSide PWM0PWMTMRGrouped | B C       | PB_14 PC_04 |
| PWM0_TRIP0        | PWM0Shutdown Input 0                   | C         | PC_06       |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 17. ADSP-21834/21835 400-Ball LPC BGA Signal Mapping (Continued)

| SignalName 1   | Description                      | Port      | PinName      |
|----------------|----------------------------------|-----------|--------------|
| SPI0_CLK       | SPI0 Clock                       | A         | PA_06        |
| SPI0_MISO      | SPI0 Master In, Slave Out        | A         | PA_07        |
| SPI0_MOSI      | SPI0 Master Out, Slave In        | A         | PA_08        |
| SPI0_RDY       | SPI0 Ready                       | B         | PB_11        |
| SPI0_SEL1      | SPI0 Slave Select Output 1       | A         | PA_09        |
| SPI0_SEL2      | SPI0 Slave Select Output 2       | B         | PB_05        |
| SPI0_SEL3      | SPI0 Slave Select Output 3       | B         | PB_14        |
| SPI0_SEL4      | SPI0 Slave Select Output 4       | B         | PB_15        |
| SPI0_SS        | SPI0 Slave Select                | A         | PA_09        |
| SPI1_CLK       | SPI1 Clock                       | A         | PA_10        |
| SPI1_D2        | SPI1 Data 2                      | A         | PA_14        |
| SPI1_D3        | SPI1 Data 3                      | A         | PA_15        |
| SPI1_MISO      | SPI1 Master In, Slave Out        | A         | PA_11        |
| SPI1_MOSI      | SPI1 Master Out, Slave In        | A         | PA_12        |
| SPI1_RDY       | SPI1 Ready                       | C         | PC_06        |
| SPI1_SEL1      | SPI1 Slave Select Output 1       | A         | PA_13        |
| SPI1_SEL2      | SPI1 Slave Select Output 2       | B         | PB_10        |
| SPI1_SEL3      | SPI1 Slave Select Output 3       | B         | PB_13        |
| SPI1_SEL4      | SPI1 Slave Select Output 4       | C         | PC_00        |
| SPI1_SEL5      | SPI1 Slave Select Output 5       | B         | PB_06        |
| SPI1_SEL6      | SPI1 Slave Select Output 6       | C         | PC_02        |
| SPI1_SEL7      | SPI1 Slave Select Output 7       | B         | PB_08        |
| SPI1_SS        | SPI1 Slave Select Input          | A         | PA_13        |
| SPI2_CLK       | SPI2 Clock                       | A         | PA_04        |
| SPI2_D2        | SPI2 Data 2                      | A         | PA_02        |
| SPI2_D3        | SPI2 Data 3                      | A         | PA_03        |
| SPI2_MISO      | SPI2 Master In, Slave Out        | A         | PA_00        |
| SPI2_MOSI      | SPI2 Master Out, SIave In        | A         | PA_01        |
| SPI2_RDY       | SPI2 Ready                       | B         | PB_05        |
| SPI2_SEL1      | SPI2 Slave Select Output 1       | A         | PA_05        |
| SPI2_SEL2      | SPI2 Slave Select Output 2       | B         | PB_03        |
| SPI2_SEL3      | SPI2 Slave Select Output 3       | B         | PB_12        |
| SPI2_SEL4      | SPI2 Slave Select Output 4       | C         | PC_01        |
| SPI2_SEL5      | SPI2 Slave Select Output 5       | B         | PB_07        |
| SPI2_SEL6      | SPI2 Slave Select Output 6       | C         | PC_03        |
| SPI2_SEL7      | SPI2 Slave Select Output 7       | B         | PB_09        |
| SPI2_SS        | SPI2 Slave Select Input          | A         | PA_05        |
| SYS_BMODE0     | Boot Mode Control Pin 0          | Not Muxed | SYS_BMODE0   |
| SYS_BMODE1     | Boot Mode Control Pin 1          | Not Muxed | SYS_BMODE1   |
| SYS_BMODE2     | Boot Mode Control Pin 2          | Not Muxed | SYS_BMODE2   |
| SYS_CLKIN0     | Clock/Crystal Input              | Not Muxed | SYS_CLKIN0   |
| SYS_CLKOUT     | Processor Clock Output           | Not Muxed | SYS_CLKOUT   |
| SYS_FAULT      | Active-High Fault Output         | C         | PC_07        |
| SYS_FAULT      | Active-Low Fault Output          | Not Muxed | SYS_FAULT    |
| SYS_HWRST      | Processor Hardware Reset Control | Not Muxed | SYS_HWRST    |
| SYS_RESETOUT   | Reset Output                     | Not Muxed | SYS_RESETOUT |
| TM0_ACI00      | TIMER0 Alternate Capture Input   | A         | PA_07        |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 17. ADSP-21834/21835 400-Ball LPC BGA Signal Mapping (Continued)

| SignalName 1       | Description                         | Port   | PinName     |
|--------------------|-------------------------------------|--------|-------------|
| TM0_ACI01          | TIMER0 Alternate Capture Input 1    | A      | PA_14       |
| TM0_ACI02          | TIMER0 Alternate Capture Input 2    | B      | PB_11       |
| TM0_ACI03          | TIMER0 Alternate Capture Input 3    | B      | PB_00       |
| TM0_ACI04          | TIMER0 Alternate Capture Input 4    | A      | PA_11       |
| TM0_ACLK01         | TIMER0 Alternate Clock 1            | A      | PA_06       |
| TM0_ACLK02         | TIMER0 Alternate Clock 2            | A      | PA_08       |
| TM0_ACLK03         | TIMER0 Alternate Clock 3            | A      | PA_02       |
| TM0_ACLK04         | TIMER0 Alternate Clock 4            | B      | PB_02       |
| TM0_CLK            | TIMER0 Clock                        | B      | PB_01       |
| TM0_TMR00          | TIMER0 Timer 0                      | A      | PA_10       |
| TM0_TMR01          | TIMER0 Timer 1                      | A      | PA_12       |
| TM0_TMR02          | TIMER0 Timer 2                      | A      | PA_13       |
| TM0_TMR03          | TIMER0 Timer 3                      | B      | PB_03       |
| TM0_TMR04          | TIMER0 Timer 4                      | B      | PB_04       |
| TM0_TMR05          | TIMER0 Timer 5                      | B      | PB_05       |
| TM0_TMR06          | TIMER0 Timer 6                      | B      | PB_08       |
| TM0_TMR07          | TIMER0 Timer 7                      | B      | PB_09       |
| TM0_TMR08          | TIMER0 Timer 8                      | C      | PC_05       |
| TM0_TMR09          | TIMER0 Timer 9                      | C      | PC_07       |
| TRACE0_CLK         | TRACE0 Trace Clock                  | B      | PB_06       |
| TRACE0_D0          | TRACE0 Trace Data 0                 | B      | PB_07       |
| TRACE0_D1          | TRACE0 Trace Data 1                 | B      | PB_08       |
| TRACE0_D2          | TRACE0 Trace Data 2                 | B      | PB_09       |
| TRACE0_D3          | TRACE0 Trace Data 3                 | B      | PB_10       |
| TRACE0_D4          | TRACE0 Trace Data 4                 | C      | PC_00       |
| TRACE0_D5          | TRACE0 Trace Data 5                 | C      | PC_01       |
| TRACE0_D6          | TRACE0 Trace Data 6                 | C      | PC_02       |
| TRACE0_D7          | TRACE0 Trace Data 7                 | C      | PC_03       |
| TWI0_SCL           | TWI0 Serial Clock                   | A      | PA_10       |
| TWI0_SDA           | TWI0 Serial Data                    | A      | PA_11       |
| TWI1_SCL           | TWI1 Serial Clock                   | B      | PB_00       |
| TWI1_SDA           | TWI1 Serial Data                    | B      | PB_01       |
| TWI2_SCL           | TWI2 Serial Clock                   | A      | PA_14       |
| TWI2_SDA           | TWI2 Serial Data                    | A      | PA_15       |
| TWI3_SCL           | TWI3 Serial Clock                   | A      | PA_02       |
| TWI3_SDA           | TWI3 Serial Data                    | A      | PA_03       |
| TWI4_SCL           | TWI4 Serial Clock                   | C      | PC_00       |
| TWI4_SDA           | TWI4 Serial Data                    | C      | PC_01       |
| TWI5_SCL           | TWI5 Serial Clock                   | C      | PC_02       |
| TWI5_SDA           | TWI5 Serial Data                    | C      | PC_03       |
| UART0_CTS          | UART0 Clear to Send                 | A      | PA_09       |
| UART0_RTS          | UART0 Request to Send               | A      | PA_08       |
| UART0_RX           | UART0 Receive                       | A      | PA_07       |
| UART0_TX           | UART0 Transmit                      | A      | PA_06       |
| UART1_CTS          | UART1 Clear to Send                 | B      | PB_01       |
| UART1_RTS UART1_RX | UART1 Request to Send UART1 Receive | B A    | PB_00 PA_14 |
| UART1_TX           | UART1 Transmit                      | A      | PA_15       |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 17. ADSP-21834/21835 400-Ball LPC BGA Signal Mapping (Continued)

| SignalName 1   | Description                | Port   | PinName   |
|----------------|----------------------------|--------|-----------|
| UART2_CTS      | UART2 Clear to Send        | B      | PB_14     |
| UART2_RTS      | UART2 Request to Send      | B      | PB_13     |
| UART2_RX       | UART2 Receive              | B      | PB_11     |
| UART2_TX       | UART2 Transmit             | B      | PB_12     |
| xSPI_CLK       | xSPI Clock                 | A      | PA_04     |
| xSPI_D2        | xSPI Data 2                | A      | PA_02     |
| xSPI_D3        | xSPI Data 3                | A      | PA_03     |
| xSPI_D4        | xSPI Data 4                | A      | PA_06     |
| xSPI_D5        | xSPI Data 5                | A      | PA_07     |
| xSPI_D6        | xSPI Data 6                | A      | PA_08     |
| xSPI_D7        | xSPI Data 7                | A      | PA_09     |
| xSPI_DQS_RWDS  | xSPI Data Strobe           | B      | PB_13     |
| xSPI_MISO      | xSPI Master In, Slave Out  | A      | PA_00     |
| xSPI_MOSI      | xSPI Master Out, SIave In  | A      | PA_01     |
| xSPI_SEL1      | xSPI Slave Select Output 1 | A      | PA_05     |
| xSPI_SEL2      | xSPI Slave Select Output 2 | C      | PC_04     |
| xSPI_SEL3      | xSPI Slave Select Output 3 | C      | PC_05     |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## GPIO MULTIPLEXING FOR 400-BALL LPC BGA PACKAGE

Table 18 through Table 20 identify the pin functions that are multiplexed on the GPIO pins of the 400-ball LPC BGA package for the ADSP-21834/21835 processors.

Table 18. ADSP-21834/21835 Signal Multiplexing for Port A 1

| SignalName   | Multiplexed Function 0   | Multiplexed Function 1   | Multiplexed Function 2   | Multiplexed Function 3   | Multiplexed Function Input Tap   |
|--------------|--------------------------|--------------------------|--------------------------|--------------------------|----------------------------------|
| PA_00        | SPI2_MISO                | xSPI_MISO                | PWM0_AH                  |                          |                                  |
| PA_01        | SPI2_MOSI                | xSPI_MOSI                | PWM0_AL                  |                          |                                  |
| PA_02        | SPI2_D2                  | xSPI_D2                  | TWI3_SCL                 |                          | TM0_ACLK03                       |
| PA_03        | SPI2_D3                  | xSPI_D3                  | TWI3_SDA                 |                          |                                  |
| PA_04        | SPI2_CLK                 | xSPI_CLK                 | PWM0_BH                  |                          |                                  |
| PA_05        | SPI2_SEL1                | xSPI_SEL1                | FRACNPLL_FLOCK           |                          | SPI2_SS                          |
| PA_06        | SPI0_CLK                 | UART0_TX                 | xSPI_D4                  |                          | TM0_ACLK01                       |
| PA_07        | SPI0_MISO                | UART0_RX                 | xSPI_D5                  |                          | TM0_ACI00                        |
| PA_08        | SPI0_MOSI                | UART0_RTS                | xSPI_D6                  |                          | TM0_ACLK02                       |
| PA_09        | SPI0_SEL1                | UART0_CTS                | xSPI_D7                  |                          | SPI0_SS                          |
| PA_10        | TWI0_SCL                 | SPI1_CLK                 | TM0_TMR00                |                          |                                  |
| PA_11        | TWI0_SDA                 | SPI1_MISO                | HADC0_EOC_OUT            |                          | TM0_ACI04                        |
| PA_12        | C1_FLG0                  | SPI1_MOSI                | TM0_TMR01                |                          |                                  |
| PA_13        | C1_FLG1                  | SPI1_SEL1                | TM0_TMR02                |                          | SPI1_SS                          |
| PA_14        | TWI2_SCL                 | SPI1_D2                  | UART1_RX                 |                          | TM0_ACI01                        |
| PA_15        | TWI2_SDA                 | SPI1_D3                  | UART1_TX                 |                          | FRACNPLL_PTP_CLK                 |

Table 19. ADSP-21834/21835 Signal Multiplexing for Port B 1

| SignalName   | Multiplexed Function 0   | Multiplexed Function 1   | Multiplexed Function 2   | Multiplexed Function 3   | Multiplexed Function Input Tap   |
|--------------|--------------------------|--------------------------|--------------------------|--------------------------|----------------------------------|
| PB_00        | MLB0_DAT                 | TWI1_SCL                 | UART1_RTS                |                          | TM0_ACI03                        |
| PB_01        | MLB0_SIG                 | TWI1_SDA                 | UART1_CTS                |                          | TM0_CLK                          |
| PB_02        | MLB0_CLK                 | C1_FLG3                  | LP1_ACK                  |                          | TM0_ACLK04                       |
| PB_03        | TM0_TMR03                | C1_FLG2                  | SPI2_SEL2                |                          | CNT0_UD                          |
| PB_04        | TM0_TMR04                | SPI1_RDY                 | LP0_ACK                  |                          | CNT0_ZM                          |
| PB_05        | TM0_TMR05                | SPI2_RDY                 | SPI0_SEL2                |                          | CNT0_DG                          |
| PB_06        | LP0_CLK                  | SPI1_SEL5                | PWM0_BL                  | TRACE0_CLK               |                                  |
| PB_07        | LP0_D0                   | SPI2_SEL5                |                          | TRACE0_D0                |                                  |
| PB_08        | LP0_D1                   | SPI1_SEL7                | TM0_TMR06                | TRACE0_D1                |                                  |
| PB_09        | LP0_D2                   | SPI2_SEL7                | TM0_TMR07                | TRACE0_D2                |                                  |
| PB_10        | LP0_D3                   | SPI1_SEL2                | PWM0_CH                  | TRACE0_D3                |                                  |
| PB_11        | LP0_D4                   | SPI0_RDY                 | PWM0_CL                  | UART2_RX                 | TM0_ACI02                        |
| PB_12        | LP0_D5                   | SPI2_SEL3                | PWM0_DH                  | UART2_TX                 |                                  |
| PB_13        | LP0_D6                   | SPI1_SEL3                | xSPI_DQS_RWDS            | UART2_RTS                |                                  |
| PB_14        | LP0_D7                   | SPI0_SEL3                | PWM0_DL                  | UART2_CTS                |                                  |
| PB_15        | LP1_D0                   | SPI0_SEL4                |                          |                          |                                  |

This GPIO multiplexing scheme is identical to that of the ADSP-21566, ADSP-21567, ADSP-21569, and ADSP-21593 processors.

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 20. ADSP-21834/21835 Signal Multiplexing for Port C 1

| SignalName   | Multiplexed Function 0   | Multiplexed Function 1   | Multiplexed Function 2   | Multiplexed Function 3   | Multiplexed Function Input Tap   |
|--------------|--------------------------|--------------------------|--------------------------|--------------------------|----------------------------------|
| PC_00        | LP1_D1                   | TWI4_SCL                 | TRACE0_D4                | SPI1_SEL4                |                                  |
| PC_01        | LP1_D2                   | TWI4_SDA                 | TRACE0_D5                | SPI2_SEL4                |                                  |
| PC_02        | LP1_D3                   | TWI5_SCL                 | TRACE0_D6                | SPI1_SEL6                |                                  |
| PC_03        | LP1_D4                   | TWI5_SDA                 | TRACE0_D7                | SPI2_SEL6                |                                  |
| PC_04        | LP1_D5                   | xSPI_SEL2                | PWM0_SYNC                |                          |                                  |
| PC_05        | LP1_D6                   | xSPI_SEL3                | TM0_TMR08                |                          |                                  |
| PC_06        | LP1_D7                   | SPI1_RDY                 | PWM0_TRIP0               |                          |                                  |
| PC_07        | LP1_CLK                  |                          | TM0_TMR09                | SYS_FAULT                |                                  |

Table 21 shows the internal timer signal routing. This table applies to both the 400-ball HPC and 400-ball LPC BGA packages.

Table 21. ADSP-2183x/ADSP-SC83x Internal Timer Signal Routing

| Timer Input Signal   | Internal Source   |
|----------------------|-------------------|
| TM0_ACLK0            | SYS_CLKIN0        |
| TM0_ACI5             | DAI0_PB04         |
| TM0_ACLK5            | DAI0_PB03         |
| TM0_ACI6             | DAI1_PB04         |
| TM0_ACLK6            | DAI1_PB03         |
| TM0_ACI7             | CNT0_TO           |
| TM0_ACLK7            | SYS_CLKIN0        |
| TM0_ACI8             | DAI0_PB06         |
| TM0_ACLK8            | DAI0_PB05         |
| TM0_ACI9             | DAI1_PB06         |
| TM0_ACLK9            | DAI1_PB05         |
| TM0_ACI14            | DAI0 Group C      |
| TM0_ACI15            | DAI1 Group C      |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## ADSP-2183x/ADSP-SC583x DESIGNER QUICK REFERENCE

Table 22 provides a quick reference summary of pin related information for circuit board design. The columns in this table provide the following information:

- The signal name column includes the signal name for every pin and the GPIO multiplexed pin function, where applicable.
- The type column identifies the I/O type or supply type of the pin. The abbreviations used in this column are analog (a), supply (s), ground (g) and Input, Output, and InOut.
- The driver type column identifies the driver type used by the corresponding pin. The driver types are defined in the Output Drive Currents section of this data sheet.
- The internal termination column specifies the termination present after the processor is powered up (both during reset and after reset).
- The reset termination column specifies the termination present when the processor is in the reset state.
- The reset drive column specifies the active drive on the signal when the processor is in the reset state.
- The power domain column specifies the power supply domain in which the signal resides.
- The description and notes column identifies any special requirements or characteristics for a signal. These recommendations apply whether or not the hardware block associated with the signal is featured on the product. If no special requirements are listed, the signal can be left unconnected if it is not used. For multiplexed GPIO pins, this column identifies the functions available on the pin.

Table 22. ADSP-2183x/ADSP-SC83x Designer Quick Reference

| SignalName   | Type   | Driver Type   | Internal Termination             | Reset Termination   | Reset Drive   | Power Domain   | Description and Notes               |
|--------------|--------|---------------|----------------------------------|---------------------|---------------|----------------|-------------------------------------|
| AGND         | g      |               | None                             | None                | None          |                | Desc: Analog ground Notes: No notes |
| DAI0_PIN01   | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: DAI0 Pin 1 Notes: See note 2  |
| DAI0_PIN02   | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: DAI0 Pin 2 Notes: See note 2  |
| DAI0_PIN03   | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: DAI0 Pin 3 Notes: See note 2  |
| DAI0_PIN04   | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: DAI0 Pin 4 Notes: See note 2  |
| DAI0_PIN05   | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: DAI0 Pin 5 Notes: See note 2  |
| DAI0_PIN06   | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: DAI0 Pin 6 Notes: See note 2  |
| DAI0_PIN07   | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: DAI0 Pin 7 Notes: See note 2  |
| DAI0_PIN08   | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: DAI0 Pin 8 Notes: See note 2  |
| DAI0_PIN09   | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: DAI0 Pin 9 Notes: See note 2  |
| DAI0_PIN10   | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: DAI0 Pin 10 Notes: See note 2 |
| DAI0_PIN11   | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: DAI0 Pin 11 Notes: See note 2 |
| DAI0_PIN12   | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: DAI0 Pin 12 Notes: See note 2 |
| DAI0_PIN19   | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: DAI0 Pin 19 Notes: See note 2 |
| DAI0_PIN20   | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: DAI0 Pin 20 Notes: See note 2 |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 22. ADSP-2183x/ADSP-SC83x Designer Quick Reference (Continued)

| SignalName   | Type   | Driver Type   | Internal Termination             | Reset Termination   | Reset Drive   | Power Domain   | Description and Notes               |
|--------------|--------|---------------|----------------------------------|---------------------|---------------|----------------|-------------------------------------|
| DAI1_PIN01   | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: DAI1 Pin 1 Notes: See note 2  |
| DAI1_PIN02   | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: DAI1 Pin 2 Notes: See note 2  |
| DAI1_PIN03   | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: DAI1 Pin 3 Notes: See note 2  |
| DAI1_PIN04   | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: DAI1 Pin 4 Notes: See note 2  |
| DAI1_PIN05   | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: DAI1 Pin 5 Notes: See note 2  |
| DAI1_PIN06   | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: DAI1 Pin 6 Notes: See note 2  |
| DAI1_PIN07   | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: DAI1 Pin 7 Notes: See note 2  |
| DAI1_PIN08   | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: DAI1 Pin 8 Notes: See note 2  |
| DAI1_PIN09   | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: DAI1 Pin 9 Notes: See note 2  |
| DAI1_PIN10   | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: DAI1 Pin 10 Notes: See note 2 |
| DAI1_PIN11   | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: DAI1 Pin 11 Notes: See note 2 |
| DAI1_PIN12   | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: DAI1 Pin 12 Notes: See note 2 |
| DAI1_PIN19   | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: DAI1 Pin 19 Notes: See note 2 |
| DAI1_PIN20   | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: DAI1 Pin 20 Notes: See note 2 |
| DMC0_A00     | Output | B             | None                             | None                | L             | VDD_DMC        | Desc: DMC0Address 0 Notes: No notes |
| DMC0_A01     | Output | B             | None                             | None                | L             | VDD_DMC        | Desc: DMC0Address 1 Notes: No notes |
| DMC0_A02     | Output | B             | None                             | None                | L             | VDD_DMC        | Desc: DMC0Address 2 Notes: No notes |
| DMC0_A03     | Output | B             | None                             | None                | L             | VDD_DMC        | Desc: DMC0Address 3 Notes: No notes |
| DMC0_A04     | Output | B             | None                             | None                | L             | VDD_DMC        | Desc: DMC0Address 4 Notes: No notes |
| DMC0_A05     | Output | B             | None                             | None                | L             | VDD_DMC        | Desc: DMC0Address 5 Notes: No notes |
| DMC0_A06     | Output | B             | None                             | None                | L             | VDD_DMC        | Desc: DMC0Address 6 Notes: No notes |
| DMC0_A07     | Output | B             | None                             | None                | L             | VDD_DMC        | Desc: DMC0Address 7 Notes: No notes |
| DMC0_A08     | Output | B             | None                             | None                | L             | VDD_DMC        | Desc: DMC0Address 8 Notes: No notes |
| DMC0_A09     | Output | B             | None                             | None                | L             | VDD_DMC        | Desc: DMC0Address 9 Notes: No notes |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 22. ADSP-2183x/ADSP-SC83x Designer Quick Reference (Continued)

| SignalName   | Type   | Driver Type   | Internal Termination                                    | Reset Termination   | Reset Drive   | Power Domain   | Description and Notes                           |
|--------------|--------|---------------|---------------------------------------------------------|---------------------|---------------|----------------|-------------------------------------------------|
| DMC0_A10     | Output | B             | None                                                    | None                | L             | VDD_DMC        | Desc: DMC0Address 10 Notes: No notes            |
| DMC0_A11     | Output | B             | None                                                    | None                | L             | VDD_DMC        | Desc: DMC0Address 11 Notes: No notes            |
| DMC0_A12     | Output | B             | None                                                    | None                | L             | VDD_DMC        | Desc: DMC0Address 12 Notes: No notes            |
| DMC0_A13     | Output | B             | None                                                    | None                | L             | VDD_DMC        | Desc: DMC0Address 13 Notes: No notes            |
| DMC0_A14     | Output | B             | None                                                    | None                | L             | VDD_DMC        | Desc: DMC0Address 14 Notes: No notes            |
| DMC0_A15     | Output | B             | None                                                    | None                | L             | VDD_DMC        | Desc: DMC0Address 15 Notes: No notes            |
| DMC0_BA0     | Output | B             | None                                                    | None                | L             | VDD_DMC        | Desc: DMC0Bank Address Input 0 Notes: No notes  |
| DMC0_BA1     | Output | B             | None                                                    | None                | L             | VDD_DMC        | Desc: DMC0Bank Address Input 1 Notes: No notes  |
| DMC0_BA2     | Output | B             | None                                                    | None                | L             | VDD_DMC        | Desc: DMC0Bank Address Input 2 Notes: No notes  |
| DMC0_CAS     | Output | B             | None                                                    | None                | L             | VDD_DMC        | Desc: DMC0Column Address Strobe Notes: No notes |
| DMC0_CK      | Output | C             | None                                                    | None                | L             | VDD_DMC        | Desc: DMC0Clock Notes: No notes                 |
| DMC0_CK      | Output | C             | None                                                    | None                | L             | VDD_DMC        | Desc: DMC0Clock (Complement) Notes: No notes    |
| DMC0_CKE     | Output | B             | None                                                    | None                | L             | VDD_DMC        | Desc: DMC0Clock Enable Notes: No notes          |
| DMC0_CS0     | Output | B             | None                                                    | None                | L             | VDD_DMC        | Desc: DMC0Chip Select 0 Notes: No notes         |
| DMC0_DQ00    | InOut  | B             | Internal logic ensures that input signal does not float | None                | None          | VDD_DMC        | Desc: DMC0Data 0 Notes: No notes                |
| DMC0_DQ01    | InOut  | B             | Internal logic ensures that input signal does not float | None                | None          | VDD_DMC        | Desc: DMC0Data 1 Notes: No notes                |
| DMC0_DQ02    | InOut  | B             | Internal logic ensures that input signal does not float | None                | None          | VDD_DMC        | Desc: DMC0Data 2 Notes: No notes                |
| DMC0_DQ03    | InOut  | B             | Internal logic ensures that input signal does not float | None                | None          | VDD_DMC        | Desc: DMC0Data 3 Notes: No notes                |
| DMC0_DQ04    | InOut  | B             | Internal logic ensures that input signal does not float | None                | None          | VDD_DMC        | Desc: DMC0Data 4 Notes: No notes                |
| DMC0_DQ05    | InOut  | B             | Internal logic ensures that input signal does not float | None                | None          | VDD_DMC        | Desc: DMC0Data 5 Notes: No notes                |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 22. ADSP-2183x/ADSP-SC83x Designer Quick Reference (Continued)

| SignalName   | Type   | Driver Type   | Internal Termination                                    | Reset Termination   | Reset Drive   | Power Domain   | Description and Notes                                                                          |
|--------------|--------|---------------|---------------------------------------------------------|---------------------|---------------|----------------|------------------------------------------------------------------------------------------------|
| DMC0_DQ06    | InOut  | B             | Internal logic ensures that input signal does not float | None                | None          | VDD_DMC        | Desc: DMC0Data 6 Notes: No notes                                                               |
| DMC0_DQ07    | InOut  | B             | Internal logic ensures that input signal does not float | None                | None          | VDD_DMC        | Desc: DMC0Data 7 Notes: No notes                                                               |
| DMC0_DQ08    | InOut  | B             | Internal logic ensures that input signal does not float | None                | None          | VDD_DMC        | Desc: DMC0Data 8 Notes: No notes                                                               |
| DMC0_DQ09    | InOut  | B             | Internal logic ensures that input signal does not float | None                | None          | VDD_DMC        | Desc: DMC0Data 9 Notes: No notes                                                               |
| DMC0_DQ10    | InOut  | B             | Internal logic ensures that input signal does not float | None                | None          | VDD_DMC        | Desc: DMC0Data 10 Notes: No notes                                                              |
| DMC0_DQ11    | InOut  | B             | Internal logic ensures that input signal does not float | None                | None          | VDD_DMC        | Desc: DMC0Data 11 Notes: No notes                                                              |
| DMC0_DQ12    | InOut  | B             | Internal logic ensures that input signal does not float | None                | None          | VDD_DMC        | Desc: DMC0Data 12 Notes: No notes                                                              |
| DMC0_DQ13    | InOut  | B             | Internal logic ensures that input signal does not float | None                | None          | VDD_DMC        | Desc: DMC0Data 13 Notes: No notes                                                              |
| DMC0_DQ14    | InOut  | B             | Internal logic ensures that input signal does not float | None                | None          | VDD_DMC        | Desc: DMC0Data 14 Notes: No notes                                                              |
| DMC0_DQ15    | InOut  | B             | Internal logic ensures that input signal does not float | None                | None          | VDD_DMC        | Desc: DMC0Data 15 Notes: No notes                                                              |
| DMC0_LDM     | Output | B             | None                                                    | None                | L             | VDD_DMC        | Desc: DMC0Data Mask for Lower Byte Notes: No notes                                             |
| DMC0_LDQS    | InOut  | C             | Internal logic ensures that input signal does not float | None                | None          | VDD_DMC        | Desc: DMC0Data Strobe for Lower Byte Notes: No notes                                           |
| DMC0_LDQS    | InOut  | C             | Internal logic ensures that input signal does not float | None                | None          | VDD_DMC        | Desc: DMC0Data Strobe for Lower Byte (Complement) Notes: No notes                              |
| DMC0_ODT     | Output | B             | None                                                    | None                | L             | VDD_DMC        | Desc: DMC0On-Die Termination Notes: No notes                                                   |
| DMC0_RAS     | Output | B             | None                                                    | None                | L             | VDD_DMC        | Desc: DMC0RowAddress Strobe Notes: No notes                                                    |
| DMC0_RESET   | Output | B             | None                                                    | None                | L             | VDD_DMC        | Desc: DMC0Reset Notes: No notes                                                                |
| DMC0_RZQ     | a      | B             | None                                                    | None                | None          | VDD_DMC        | Desc: DMC0External Calibration Resistor Connection Notes: 34 Ωexternal pull-down must be added |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 22. ADSP-2183x/ADSP-SC83x Designer Quick Reference (Continued)

| SignalName   | Type   | Driver Type   | Internal Termination                                    | Reset Termination   | Reset Drive   | Power Domain   | Description and Notes                                                              |
|--------------|--------|---------------|---------------------------------------------------------|---------------------|---------------|----------------|------------------------------------------------------------------------------------|
| DMC0_UDM     | Output | B             | None                                                    | None                | L             | VDD_DMC        | Desc: DMC0Data Mask for Upper Byte Notes: No notes                                 |
| DMC0_UDQS    | InOut  | C             | Internal logic ensures that input signal does not float | None                | None          | VDD_DMC        | Desc: DMC0Data Strobe for Upper Byte Notes: No notes                               |
| DMC0_UDQS    | InOut  | C             | Internal logic ensures that input signal does not float | None                | None          | VDD_DMC        | Desc: DMC0Data Strobe for Upper Byte (Complement) Notes: No notes                  |
| DMC0_VREF0   | a      |               | None                                                    | None                | None          | VDD_DMC        | Desc: DMC0Voltage Reference Notes: No notes                                        |
| DMC0_VREF1   | a      |               | None                                                    | None                | None          | VDD_DMC        | Desc: DMC0Voltage Reference Notes: No notes                                        |
| DMC0_WE      | Output | B             | None                                                    | None                | L             | VDD_DMC        | Desc: DMC0Write Enable Notes: No notes                                             |
| GND          | g      |               | None                                                    | None                | None          |                | Desc: Ground Notes: No notes                                                       |
| HADC0_VIN0   | a      | NA            | None                                                    | None                | None          | VDD_ANA        | Desc: HADC0 Analog Input 0 Notes: Connect to GNDifHADCandTMU are not used          |
| HADC0_VIN1   | a      | NA            | None                                                    | None                | None          | VDD_ANA        | Desc: HADC0 Analog Input 1 Notes: Connect to GNDifHADCandTMU are not used          |
| HADC0_VIN2   | a      | NA            | None                                                    | None                | None          | VDD_ANA        | Desc: HADC0 Analog Input 2 Notes: Connect to GNDifHADCandTMU are not used          |
| HADC0_VIN3   | a      | NA            | None                                                    | None                | None          | VDD_ANA        | Desc: HADC0 Analog Input 3 Notes: Connect to GNDifHADCandTMU are not used          |
| HADC0_VIN4   | a      | NA            | None                                                    | None                | None          | VDD_ANA        | Desc: HADC0 Analog Input 4 Notes: Connect to GNDifHADCandTMU are not used          |
| HADC0_VIN5   | a      | NA            | None                                                    | None                | None          | VDD_ANA        | Desc: HADC0 Analog Input 5 Notes: Connect to GNDifHADCandTMU are not used          |
| HADC0_VIN6   | a      | NA            | None                                                    | None                | None          | VDD_ANA        | Desc: HADC0 Analog Input 6 Notes: Connect to GNDifHADCandTMU are not used          |
| HADC0_VIN7   | a      | NA            | None                                                    | None                | None          | VDD_ANA        | Desc: HADC0 Analog Input 7 Notes: Connect to GNDifHADCandTMU are not used          |
| HADC0_VREFN  | s      | NA            | None                                                    | None                | None          | VDD_ANA        | Desc: HADC0 Ground Reference forADC Notes: Connect to GNDifHADCandTMU are not used |
| HADC0_VREFP  | s      | NA            | None                                                    | None                | None          | VDD_ANA        | Desc: HADC0 External Reference for ADC Notes: Connect to VDD_REF if HADCand        |
| JTG_TCK      | Input  |               | Pull-up                                                 | Pull-up             | None          | VDD_EXT        | Desc: JTAG Clock Notes: No notes                                                   |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 22. ADSP-2183x/ADSP-SC83x Designer Quick Reference (Continued)

| SignalName   | Type   | Driver Type   | Internal Termination             | Reset Termination                            | Reset Drive   | Power Domain   | Description and Notes                      |
|--------------|--------|---------------|----------------------------------|----------------------------------------------|---------------|----------------|--------------------------------------------|
| JTG_TDI      | Input  |               | Pull-up                          | Pull-up                                      | None          | VDD_EXT        | Desc: JTAG Serial Data In Notes: No notes  |
| JTG_TDO      | Output | A             | None                             | High-Z when JTG_TRST is low, not affected by | None          | VDD_EXT        | Desc: JTAG Serial Data Out Notes: No notes |
| JTG_TMS      | InOut  | A             | Pull-up                          | Pull-up                                      | None          | VDD_EXT        | Desc: JTAG Mode Select Notes: No notes     |
| JTG_TRST     | Input  |               | Pull-down                        | Pull-down                                    | None          | VDD_EXT        | Desc: JTAG Reset Notes: No notes           |
| PA_00        | InOut  | A             | Programmable pull-up/pull-down 1 | None                                         | None          | VDD_EXT        | Desc: Port A Position 0 Notes: See note 2  |
| PA_01        | InOut  | A             | Programmable pull-up/pull-down 1 | None                                         | None          | VDD_EXT        | Desc: Port A Position 1 Notes: See note 2  |
| PA_02        | InOut  | A             | Programmable pull-up/pull-down 1 | None                                         | None          | VDD_EXT        | Desc: Port A Position 2 Notes: See note 2  |
| PA_03        | InOut  | A             | Programmable pull-up/pull-down 1 | None                                         | None          | VDD_EXT        | Desc: Port A Position 3 Notes: See note 2  |
| PA_04        | InOut  | A             | Programmable pull-up/pull-down 1 | None                                         | None          | VDD_EXT        | Desc: Port A Position 4 Notes: See note 2  |
| PA_05        | InOut  | A             | Programmable pull-up/pull-down 1 | None                                         | None          | VDD_EXT        | Desc: Port A Position 5 Notes: See note 2  |
| PA_06        | InOut  | A             | Programmable pull-up/pull-down 1 | None                                         | None          | VDD_EXT        | Desc: Port A Position 6 Notes: See note 2  |
| PA_07        | InOut  | A             | Programmable pull-up/pull-down 1 | None                                         | None          | VDD_EXT        | Desc: Port A Position 7 Notes: See note 2  |
| PA_08        | InOut  | A             | Programmable pull-up/pull-down 1 | None                                         | None          | VDD_EXT        | Desc: Port A Position 8 Notes: See note 2  |
| PA_09        | InOut  | A             | Programmable pull-up/pull-down 1 | None                                         | None          | VDD_EXT        | Desc: Port A Position 9 Notes: See note 2  |
| PA_10        | InOut  | A             | Programmable pull-up/pull-down 1 | None                                         | None          | VDD_EXT        | Desc: Port A Position 10 Notes: See note 2 |
| PA_11        | InOut  | A             | Programmable pull-up/pull-down 1 | None                                         | None          | VDD_EXT        | Desc: Port A Position 11 Notes: See note 2 |
| PA_12        | InOut  | A             | Programmable pull-up/pull-down 1 | None                                         | None          | VDD_EXT        | Desc: Port A Position 12 Notes: See note 2 |
| PA_13        | InOut  | A             | Programmable pull-up/pull-down 1 | None                                         | None          | VDD_EXT        | Desc: Port A Position 13 Notes: See note 2 |
| PA_14        | InOut  | A             | Programmable pull-up/pull-down 1 | None                                         | None          | VDD_EXT        | Desc: Port A Position 14 Notes: See note 2 |
| PA_15        | InOut  | A             | Programmable pull-up/pull-down 1 | None                                         | None          | VDD_EXT        | Desc: Port A Position 15 Notes: See note 2 |
| PB_00        | InOut  | A             | Programmable pull-up/pull-down 1 | None                                         | None          | VDD_EXT        | Desc: Port B Position 0 Notes: See note 2  |
| PB_01        | InOut  | A             | Programmable pull-up/pull-down 1 | None                                         | None          | VDD_EXT        | Desc: Port B Position 1 Notes: See note 2  |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 22. ADSP-2183x/ADSP-SC83x Designer Quick Reference (Continued)

| SignalName   | Type   | Driver Type   | Internal Termination             | Reset Termination   | Reset Drive   | Power Domain   | Description and Notes                                                                                     |
|--------------|--------|---------------|----------------------------------|---------------------|---------------|----------------|-----------------------------------------------------------------------------------------------------------|
| PB_02        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port B Position 2 Notes: See note 2                                                                 |
| PB_03        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port B Position 3 Notes: See note 2                                                                 |
| PB_04        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port B Position 4 Notes: See note 2                                                                 |
| PB_05        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port B Position 5 Notes: See note 2                                                                 |
| PB_06        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port B Position 6 Notes: See note 2                                                                 |
| PB_07        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port B Position 7 Notes: See note 2                                                                 |
| PB_08        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port B Position 8 Notes: See note 2                                                                 |
| PB_09        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port B Position 9 Notes: See note 2                                                                 |
| PB_10        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port B Position 10 Notes: See note 2                                                                |
| PB_11        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port B Position 11 Notes: See note 2                                                                |
| PB_12        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port B Position 12 Notes: See note 2                                                                |
| PB_13        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port B Position 13 Notes: See note 2                                                                |
| PB_14        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port B Position 14 Notes: See note 2                                                                |
| PB_15        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port B Position 15 Notes: See note 2                                                                |
| PC_00        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port C Position 0 Notes: See note 2                                                                 |
| PC_01        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port C Position 1 Notes: See note 2                                                                 |
| PC_02        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port C Position 2 Notes: See note 2                                                                 |
| PC_03        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port C Position 3 Notes: See note 2                                                                 |
| PC_04        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port C Position 4 Notes: See note 2                                                                 |
| PC_05        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port C Position 5 Notes: See note 2                                                                 |
| PC_06        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port C Position 6 Notes: See note 2                                                                 |
| PC_07        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port C (default is SYS_FAULT) Notes: External pull-down required to keep signal in deasserted state |
| PC_08        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port C Position 8 Notes: See note 2                                                                 |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 22. ADSP-2183x/ADSP-SC83x Designer Quick Reference (Continued)

| SignalName   | Type   | Driver Type   | Internal Termination             | Reset Termination   | Reset Drive   | Power Domain   | Description and Notes                      |
|--------------|--------|---------------|----------------------------------|---------------------|---------------|----------------|--------------------------------------------|
| PC_09        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port C Position 9 Notes: See note 2  |
| PC_10        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port C Position 10 Notes: See note 2 |
| PC_11        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port C Position 11 Notes: See note 2 |
| PC_12        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port C Position 12 Notes: See note 2 |
| PC_13        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port C Position 13 Notes: See note 2 |
| PC_14        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port C Position 14 Notes: See note 2 |
| PC_15        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port C Position 15 Notes: See note 2 |
| PD_00        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port DPosition 0 Notes: See note 2   |
| PD_01        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port DPosition 1 Notes: See note 2   |
| PD_02        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port DPosition 2 Notes: See note 2   |
| PD_03        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port DPosition 3 Notes: See note 2   |
| PD_04        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port DPosition 4 Notes: See note 2   |
| PD_05        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port DPosition 5 Notes: See note 2   |
| PD_06        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port DPosition 6 Notes: See note 2   |
| PD_07        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port DPosition 7 Notes: See note 2   |
| PD_08        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port DPosition 8 Notes: See note 2   |
| PD_09        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port DPosition 9 Notes: See note 2   |
| PD_10        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port DPosition 10 Notes: See note 2  |
| PD_11        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port DPosition 11 Notes: See note 2  |
| PD_12        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port DPosition 12 Notes: See note 2  |
| PD_13        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port DPosition 13 Notes: See note 2  |
| PD_14        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port DPosition 14 Notes: See note 2  |
| PD_15        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port DPosition 15 Notes: See note 2  |
| PE_00        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port E Position 0 Notes: See note 2  |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 22. ADSP-2183x/ADSP-SC83x Designer Quick Reference (Continued)

| SignalName   | Type   | Driver Type   | Internal Termination             | Reset Termination   | Reset Drive   | Power Domain   | Description and Notes                                                                             |
|--------------|--------|---------------|----------------------------------|---------------------|---------------|----------------|---------------------------------------------------------------------------------------------------|
| PE_01        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port E Position 1 Notes: See note 2                                                         |
| PE_02        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port E Position 2 Notes: See note 2                                                         |
| PE_03        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port E Position 3 Notes: See note 2                                                         |
| PE_04        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port E Position 4 Notes: See note 2                                                         |
| PE_05        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port E Position 5 Notes: See note 2                                                         |
| PE_06        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port E Position 6 Notes: See note 2                                                         |
| PE_07        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port E Position 7 Notes: See note 2                                                         |
| PE_08        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port E Position 8 Notes: See note 2                                                         |
| PE_09        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port E Position 9 Notes: See note 2                                                         |
| PE_10        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port E Position 10 Notes: See note 2                                                        |
| PE_11        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port E Position 11 Notes: See note 2                                                        |
| PE_12        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port E Position 12 Notes: See note 2                                                        |
| PE_13        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port E Position 13 Notes: See note 2                                                        |
| PE_14        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port E Position 14 Notes: See note 2                                                        |
| PE_15        | InOut  | A             | Programmable pull-up/pull-down 1 | None                | None          | VDD_EXT        | Desc: Port E Position 15 Notes: See note 2                                                        |
| SYS_BMODE1   | Input  | NA            | None                             | None                | None          | VDD_EXT        | Desc: Boot Mode Control Pin 1 Notes: Cannot be left unconnected                                   |
| SYS_BMODE0   | Input  | NA            | None                             | None                | None          | VDD_EXT        | Desc: Boot Mode Control Pin 0 Notes: Cannot be left unconnected                                   |
| SYS_BMODE2   | Input  | NA            | None                             | None                | None          | VDD_EXT        | Desc: Boot Mode Control Pin 2 Notes: Cannot be left unconnected                                   |
| SYS_CLKIN0   | a      | NA            | None                             | None                | None          | VDD_REF        | Desc: Clock/Crystal Input Notes: Cannot be left unconnected                                       |
| SYS_CLKOUT   | a      | A             | None                             | None                | None          |                | Desc: Processor Clock Output Notes: No notes                                                      |
| SYS_FAULT    | InOut  | A             | None                             | None                | None          |                | Desc: Active Low Fault Output Notes: External pull-up required to keep signal in deasserted state |
| SYS_HWRST    | Input  | NA            | None                             | None                | None          | VDD_EXT        | Desc: Processor Hardware Reset Control Notes: Cannot be left unconnected                          |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 22. ADSP-2183x/ADSP-SC83x Designer Quick Reference (Continued)

| SignalName   | Type   | Driver Type   | Internal Termination   | Reset Termination   | Reset Drive   | Power Domain   | Description and Notes                                                                                                                                                                  |
|--------------|--------|---------------|------------------------|---------------------|---------------|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SYS_RESOUT   | Output | A             | None                   | None                | L             | VDD_EXT        | Desc: Reset Output Notes: No notes                                                                                                                                                     |
| SYS_XTAL0    | a      | NA            | None                   | None                | None          | VDD_REF        | Desc: Crystal Output Notes: Leave unconnected if an oscillator provides SYS_CLKIN0                                                                                                     |
| VDD_ANA      | s      |               | None                   | None                | None          |                | Desc: AnalogVDD Notes: For lower noise on VDD_ANA, filtering on VDD_REF is recommended before connecting to VDD_ANA.                                                                   |
| VDD_DMC      | s      |               | None                   | None                | None          |                | Desc:DMCVDD Notes: No notes                                                                                                                                                            |
| VDD_EXT      | s      |               | None                   | None                | None          |                | Desc: External Voltage Domain Notes: No notes                                                                                                                                          |
| VDD_FPLLANA  | s      |               | None                   | None                | None          |                | Desc: AnalogVDD for Frac-N PLL Notes: VDD_REF can be used to source VDD_FPLLANA. For lower noise on VDD_FPLLANA, filtering on VDD_REF is recommended before connecting to VDD_FPLLANA. |
| VDD_INT      | s      |               | None                   | None                | None          |                | Desc: Internal Voltage Domain Notes: No notes                                                                                                                                          |
| VDD_PLL      | s      |               | None                   | None                | None          |                | Desc: PLLVDD Notes: Connect to VDD_INT. For lower noiseonVDD_PLL,filteringonVDD_INTis recommended before connecting to VDD_PLL.                                                        |
| VDD_REF      | s      |               | None                   | None                | None          |                | Desc: External Voltage Domain Notes: No notes                                                                                                                                          |

## SPECIFICATIONS

Specifications are subject to change without notice. For information about product specifications, contact your Analog Devices, Inc. representative.

## OPERATING CONDITIONS

All specifications and characteristics apply across the entire operating conditions range unless otherwise noted.

| Parameter          |                                                   | Conditions        | Min                | Nominal         | Max                | Unit   |
|--------------------|---------------------------------------------------|-------------------|--------------------|-----------------|--------------------|--------|
| V DD_INT           | Internal (Core) Supply Voltage                    | 100MHz≤CCLK≤1GHz  | 0.95               | 1.00            | 1.05               | V      |
| V DD_PLL           | PLL Supply Voltage                                |                   | 0.95               | 1.00            | 1.05               | V      |
| V DD_FPLLANA       | Fractional PLL Supply Voltage                     |                   | 1.71               | 1.80            | 1.89               | V      |
| V DD_EXT           | External (I/O) Supply Voltage                     |                   | 3.13               | 3.30            | 3.47               | V      |
| V DD_ANA           | Analog Power Supply Voltage                       |                   | 1.71               | 1.80            | 1.89               | V      |
| V DD_DMC 1         | DDR3L Controller Supply Voltage                   |                   | 1.34               | 1.39            | 1.44               | V      |
| V DD_REF 2         | External (I/O) Reference Supply Voltage           |                   | 1.71               | 1.80            | 1.89               | V      |
| V DDR_VREF 3       | DDR3L Reference Voltage                           |                   | 0.49 × V DD_DMC    | 0.50 × V DD_DMC | 0.51 × V DD_DMC    | V      |
| V DELTA_EXT_REF 4  | (V DD_EXT - V DD_REF ) and (V DD_EXT - V DD_ANA ) |                   | -1.89              |                 | +1.89              | V      |
| V HADC_REF 5       | HADC Reference Voltage                            |                   | 1.71               | 1.80            | V DD_ANA           | V      |
| V HADC0_VINx       | HADC Input Voltage                                |                   | 0                  |                 | V HADC_REF + 0.09  | V      |
| V IH 6             | High Level Input Voltage                          | V DD_EXT = 3.47 V | 2.0                |                 |                    | V      |
| V IHCLKIN 2        | High Level Clock Input Voltage                    | V DD_REF = 1.89 V | 0.65 × V DD_REF    |                 | V DD_REF           | V      |
| V IL 6             | Low Level Input Voltage                           | V DD_EXT = 3.13 V |                    |                 | 0.8                | V      |
| V ILCLKIN 2        | Low Level Clock Input Voltage                     | V DD_REF = 1.71 V | -0.30              |                 | +0.35 × V DD_REF   | V      |
| V IL_DDR3L 7       | Low Level Input Voltage                           | V DD_DMC = 1.34 V |                    |                 | V DDR_VREF - 0.175 | V      |
| V IH_DDR3L 7       | High Level Input Voltage                          | V DD_DMC = 1.44 V | V DDR_VREF + 0.175 |                 |                    | V      |
| CONSUMER GRADE     | CONSUMER GRADE                                    |                   |                    |                 |                    |        |
| T J                | Junction Temperature 400-Ball BGA_ED              |                   | 0                  |                 | 125                | °C     |
| INDUSTRIAL GRADE   | INDUSTRIAL GRADE                                  |                   |                    |                 |                    |        |
| T J                | Junction Temperature 400-Ball BGA_ED              |                   | -40                |                 | +125               | °C     |
| AUTOMOTIVE GRADE 8 | AUTOMOTIVE GRADE 8                                |                   |                    |                 |                    |        |
| T J                | Junction Temperature 400-Ball BGA_ED              |                   | -40                |                 | +125               | °C     |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## Clock Related Operating Conditions

Table 23 describes the core clock, system clock, and peripheral clock timing requirements. The data presented in the table applies to all speed grades except where noted.

Table 23. Clock Operating Conditions

| Parameter       |                                                                                         | Conditions                                                                                           | Min   | Typ   | Max    | Unit     |
|-----------------|-----------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|-------|-------|--------|----------|
| f CCLK          | Core Clock (CCLK) Frequency 1                                                           | f CCLK = 2 × f SYSCLK                                                                                | 100   |       | 1000   | MHz      |
| f ARMCCLK       | Arm Cortex-M33 Core Clock (CCLK) Frequency                                              |                                                                                                      | 25    |       | 400    | MHz      |
| f SYSCLK        | SYSCLK Frequency 2                                                                      |                                                                                                      | 50    |       | 500    | MHz      |
| f SCLK0         | SCLK0 Frequency                                                                         | f SYSCLK =N×f SCLK0 whereN=2to6                                                                      | 30    |       | 125    | MHz      |
| f SCLK1         | SCLK1 Frequency                                                                         | f SYSCLK ≥ f SCLK1                                                                                   |       |       | 333.33 | MHz      |
| f DCLK          | DDR3L Clock (DCLK) Frequency 3                                                          | All combinations are supported except for: [f CCLK > 800 MHz and T j < 0°C and f CCLK :f DCLK = 2:1] | 300   |       | 800    | MHz      |
| f OCLK          | Output Clock (OCLK) Frequency 4                                                         |                                                                                                      |       |       | 125    | MHz      |
| f SYS_CLKOUTJ   | SYS_CLKOUT Period Jitter 5, 6                                                           |                                                                                                      |       | ±1    |        | %        |
| f FRACNPLL_CLKJ | FRACNPLL RMS Period Jitter 7, 8                                                         |                                                                                                      |       | 30    |        | ps (RMS) |
| f LCLKTPROG     | Programmed Link Port Transmit Clock                                                     |                                                                                                      |       |       | 125    | MHz      |
| f LCLKREXT      | External Link Port Receive Clock 9, 10                                                  | f LCLKREXT ≤ f OCLK_0                                                                                |       |       | 125    | MHz      |
| f SPTCLKPROG    | Programmed SPT Clock When Transmitting Data and Frame Sync                              |                                                                                                      |       |       | 62.5   | MHz      |
| f SPTCLKPROG    | Programmed SPT Clock When Receiving Data or Frame Sync                                  |                                                                                                      |       |       | 31.25  | MHz      |
| f SPTCLKPROG    | Programmed SPT Clock When Receiving Data or Frame Sync When RLRE Register Bit = 1 9, 10 | f SPTCLKEXT ≤ f SCLK0                                                                                |       |       | 62.5   | MHz      |
| f SPTCLKEXT     | External SPT Clock When Receiving Data and Frame Sync 9, 10                             | f SPTCLKEXT ≤ f SCLK0                                                                                |       |       | 62.5   | MHz      |
| f SPTCLKEXT     | External SPT Clock Transmitting Data or Frame Sync 9, 10                                | f SPTCLKEXT ≤ f SCLK0                                                                                |       |       | 31.25  | MHz      |
| f SPICLKPROG    | Programmed SPI Clock When Transmitting Data                                             | f SPICLK :f SCLK0 ratio = 1:1                                                                        |       |       | 75     | MHz      |
| f SPICLKPROG    | Programmed SPI Clock When Receiving Data                                                | f SPICLK :f SCLK0 ratio = 1:1                                                                        |       |       | 75     | MHz      |
| f SPICLKPROG    | Programmed SPI Clock When Transmitting Data                                             | f SPICLK :f SCLK0 ratio = 1:2                                                                        |       |       | 62.5   | MHz      |
| f SPICLKPROG    | Programmed SPI Clock When Receiving Data                                                | f SPICLK :f SCLK0 ratio = 1:2                                                                        |       |       | 62.5   | MHz      |
| f SPICLKEXT     | External SPI Clock When Receiving Data 9, 10                                            | f SPICLKEXT ≤ f CDU_CLKO6                                                                            |       |       | 62.5   | MHz      |
| f SPICLKEXT     | External SPI Clock When Transmitting Data 9, 10                                         | f SPICLKEXT ≤ f CDU_CLKO6                                                                            |       |       | 45     | MHz      |
| f xSPICLKPROG   | Programmed xSPI Clock With Data Training and Without DQS 11                             |                                                                                                      |       |       | 80     | MHz      |
| f xSPICLKPROG   | Programmed xSPI Clock With Data Training and With DQS 11                                |                                                                                                      |       |       | 125    | MHz      |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 23. Clock Operating Conditions (Continued)

| Parameter   |                                | Conditions                | Min   | Typ   |    Max | Unit   |
|-------------|--------------------------------|---------------------------|-------|-------|--------|--------|
| f TMRCLKEXT | External Timer Clock (TMx_CLK) | f TMRCLKEXT ≤ f SCLK0 / 4 |       |       | 31.25  | MHz    |
| f BCLK      | Bit Clock Input toPDM          |                           |       |       | 24.576 | MHz    |
| f PDM_CLK   | PDMOutput Clock                |                           |       |       |  6.144 | MHz    |

Table 24. Phase-Locked Loop (PLL) Operating Conditions

| Parameter   |                     |   Max | Unit   |
|-------------|---------------------|-------|--------|
| f PLLCLK    | PLL Clock Frequency |     2 | GHz    |

<!-- image -->

REFER TO THE ADSP-2183x/ADSP-SC83x SHARC-FX PROCESSOR HARDWARE REFERENCE FOR INFORMATION ABOUT ALLOWED DIVIDER VALUES AND PROGRAMMING MODELS.

Figure 6. Clock Relationships and Divider Values

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## ELECTRICAL CHARACTERISTICS

All specifications and characteristics apply across the entire operating conditions range unless otherwise noted.

| Parameter    |                                                           | Conditions                                                            | Min   | Typ   | Max   | Unit   |
|--------------|-----------------------------------------------------------|-----------------------------------------------------------------------|-------|-------|-------|--------|
| V OH         | High Level Output Voltage                                 | V DD_EXT = minimum, (I OH = -2.0 mA, DS1) 1 , (I OH = -4.0 mA, DS2) 2 | 2.4   |       |       | V      |
| V OL         | Low Level Output Voltage                                  | V DD_EXT = minimum, (I OL = 2.0 mA, DS1) 1 , (I OL = 4.0 mA, DS2) 2   |       |       | 0.4   | V      |
| V OH_XTAL 3  | High Level Output Voltage                                 | V DD_REF = minimum, I OH = -1.0mA                                     | 1.26  |       |       | V      |
| V OL_XTAL 3  | Low Level Output Voltage                                  | V DD_REF = minimum, I OL = 1.0mA                                      |       |       | 0.45  | V      |
| V OH_DDR3L 4 | High Level Output Voltage for DDR3L Drive Strength = 40Ω  | V DD_DDR = minimum, I OH = -2.5mA                                     | 1.02  |       |       | V      |
| V OL_DDR3L 4 | Low Level Output Voltage for DDR3L Drive Strength = 40Ω   | V DD_DDR = minimum, I OL = 2.5mA                                      |       |       | 0.32  | V      |
| V OH_DDR3L 4 | High Level Output Voltage for DDR3L Drive Strength = 60Ω  | V DD_DDR = minimum, I OH = -1.8mA                                     | 1.02  |       |       | V      |
| V OL_DDR3L 4 | Low Level Output Voltage for DDR3L Drive Strength = 60Ω   | V DD_DDR = minimum, I OL = 1.8mA                                      |       |       | 0.32  | V      |
| V OH_DDR3L 4 | High Level Output Voltage for DDR3L Drive Strength = 70Ω  | V DD_DDR = minimum, I OH = -1.5mA                                     | 1.02  |       |       | V      |
| V OL_DDR3L 4 | Low Level Output Voltage for DDR3L Drive Strength = 70Ω   | V DD_DDR = minimum, I OL = 1.5mA                                      |       |       | 0.32  | V      |
| V OH_DDR3L 4 | High Level Output Voltage for DDR3L Drive Strength = 90Ω  | V DD_DDR = minimum, I OH = -1.2mA                                     | 1.02  |       |       | V      |
| V OL_DDR3L 4 | Low Level Output Voltage for DDR3L Drive Strength = 90Ω   | V DD_DDR = minimum, I OL = 1.2mA                                      |       |       | 0.32  | V      |
| V OH_DDR3L 4 | High Level Output Voltage for DDR3L Drive Strength = 100Ω | V DD_DDR = minimum, I OH = -1.0mA                                     | 1.02  |       |       | V      |
| V OL_DDR3L 4 | Low Level Output Voltage for DDR3L Drive Strength = 100Ω  | V DD_DDR = minimum, I OL = 1.0mA                                      |       |       | 0.32  | V      |
| I IH 5       | High Level Input Current                                  | V DD_EXT = maximum, V IN = V DD_EXT maximum                           |       |       | 10    | µA     |
| I IL 5       | Low Level Input Current                                   | V DD_EXT = maximum, V IN = 0 V                                        |       |       | 10    | µA     |
| I IL_PU 6    | Low Level Input Current Pull-Up                           | V DD_EXT = maximum, V IN = 0 V                                        |       |       | 200   | µA     |
| I IH_PD 7    | High Level Input Current Pull-Down                        | V DD_EXT = maximum, V IN = V DD_EXT maximum                           |       |       | 200   | µA     |
| I OZH 8      | Three-State Leakage Current                               | V DD_EXT /V DD_DDR = maximum, V IN = V DD_EXT /V DD_DDR maximum       |       |       | 10    | µA     |
| I OZL 8      | Three-State Leakage Current                               | V DD_EXT /V DD_DDR = maximum, V IN = 0 V                              |       |       | 10    | µA     |
| C IN 9       | Input Capacitance                                         | T J = 25°C                                                            |       |       | 5     | pF     |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

| Parameter   |                          | Conditions                                                                                                                                                                                                                        | Min     | Unit   |
|-------------|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|--------|
| I DD_IDLE   | V DD_INT Current in Idle | f CCLK(SHARC-FX) = 1000 MHz f CCLK(M33) = 333MHz ASF SHARC-FX = 0.14 ASF M33 = 0.59 f SYSCLK = 500 MHz f SCLK0 = 125MHz f SCLK1 = 333.33 MHz (Other clocks are disabled) No peripheral or DMAactivity T J = 25°C V DD_INT = 1.0 V | 815 Typ | mA     |
| I DD_TYP    | V DD_INT Current         | f CCLK(SHARC-FX) = 1000 MHz f CCLK(M33) = 333MHz ASF SHARC-FX = 1 ASF M33 = 1 f SYSCLK = 500 MHz f SCLK0 = 125MHz f SCLK1 = 333.33 MHz (Other clocks are disabled) DMAdata rate = 453 MB/s T J = 25°C V DD_INT = 1.0 V            | 2674    | mA     |
| I DD_IDLE   | V DD_INT Current in Idle | f CCLK(SHARC-FX) = 800MHz f CCLK(M33) = 400MHz ASF SHARC-FX = 0.14 ASF M33 = 0.59 f SYSCLK = 400 MHz f SCLK0 = 100MHz f SCLK1 = 320MHz (Other clocks are disabled) No peripheral or DMAactivity T J = 25°C V DD_INT = 1.0 V       | 685     | mA     |
| I DD_TYP    | V DD_INT Current         | f CCLK(SHARC-FX) = 800MHz f CCLK(M33) = 400MHz ASF SHARC-FX = 1 ASF M33 = 1 f SYSCLK = 400 MHz f SCLK0 = 100MHz f SCLK1 = 320MHz (Other clocks are disabled) DMAdata rate = 453 MB/s T J = 25°C V DD_INT = 1.0 V                  | 2180    | mA     |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

| Parameter   | Conditions                           | Min   | Typ   | Max                                                                        | Unit   |
|-------------|--------------------------------------|-------|-------|----------------------------------------------------------------------------|--------|
| I DD_INT 10 | f CCLK  0MHz f SCLK0/SCLK1  0 MHz |       |       | I DD_INT_TOT See equation in the Total Internal Power Dissipation section. | mA     |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## Total Internal Power Dissipation

Total power dissipation has two components:

- Static, including leakage current
- Dynamic, due to transistor switching characteristics for each clock domain

Many operating conditions can also affect power dissipation, including temperature, voltage, operating frequency, and processor activity. The following equation describes the internal current consumption.

I DD\_INT\_TOT = I DD\_INT\_STATIC + I DD\_INT\_CCLK\_SHARCFX\_DYN + I DD\_INT\_CCLK\_M33\_DYN + I DD\_INT\_DCLK\_DYN + I DD\_INT\_SYSCLK\_DYN + IDD\_INT\_SCLK0\_DYN + I DD\_INT\_SCLK1\_DYN + I DD\_INT\_OCLK\_DYN + I DD\_INT\_ACCL\_DYN + I DD\_INT\_DMA\_DR\_DYN

where I DD\_INT\_STATIC is the sole contributor to the static power dissipation component and is specified as a function of voltage (VDD\_INT) and junction temperature (TJ) in Table 25.

Table 25. Static Current-IDD\_INT\_STATIC (mA)

|          | Voltage (V DD_INT )   | Voltage (V DD_INT )   | Voltage (V DD_INT )   |
|----------|-----------------------|-----------------------|-----------------------|
| T J (°C) | 0.95V                 | 1.00V                 | 1.05V                 |
| -40      | 14                    | 19                    | 26                    |
| -20      | 21                    | 28                    | 37                    |
| -10      | 27                    | 36                    | 47                    |
| 0        | 37                    | 47                    | 61                    |
| +10      | 50                    | 63                    | 80                    |
| +25      | 81                    | 99                    | 123                   |
| +40      | 131                   | 157                   | 191                   |
| +55      | 211                   | 251                   | 299                   |
| +70      | 337                   | 395                   | 465                   |
| +85      | 527                   | 612                   | 714                   |
| +100     | 807                   | 931                   | 1078                  |
| +105     | 935                   | 1075                  | 1244                  |
| +115     | 1234                  | 1414                  | 1632                  |
| +125     | 1626                  | 1864                  | 2150                  |

The other nine addends in the IDD\_INT\_TOT equation comprise the dynamic power dissipation component and fall into four broad categories: application dependent currents, clock currents, currents from high speed peripheral operation, and data transmission currents.

## Application Dependent Current

The application dependent currents include the dynamic current in the core clock domain of the SHARC-FX core and the Arm Cortex-M33, as well as the dynamic current in the accelerator block.

Dynamic current consumed by the core is subject to an activity scaling factor (ASF) that represents application code running on the processor core (see Table 26). The ASF is combined with the CCLK frequency and VDD\_INT dependent dynamic current data in Table 28 to calculate this portion of the total dynamic power dissipation component.

I DD\_INT\_CCLK\_SHARCFX\_DYN = Table 28 × ASFSHARCFX I DD\_INT\_CCLK\_M33\_DYN = Table 29 × ASFM33

Table 26. Activity Scaling Factors for the SHARC-FX Core (ASFSHARCFX)

| I DD_INT Power Vector   |   ASF |
|-------------------------|-------|
| I DD-IDLE               |  0.14 |
| I DD-NOP                |  0.36 |
| I DD-TYP_3070           |  0.61 |
| I DD-TYP_5050           |  0.79 |
| I DD-TYP_7030           |  1    |
| I DD-PEAK_100           |  1.28 |

Table 27. Activity Scaling Factors for the Arm Cortex-M33 Core (ASFM33)

| I DD_INT Power Vector   |   ASF |
|-------------------------|-------|
| I DD-IDLE               |  0.59 |
| I DD-DHRYSTONE          |  1    |

Table 28. Dynamic Current for SHARC-FX Core (mA, with ASF = 1.00)

|              | Voltage (V DD_INT )   | Voltage (V DD_INT )   | Voltage (V DD_INT )   |
|--------------|-----------------------|-----------------------|-----------------------|
| f CCLK (MHz) | 0.95V                 | 1.00V                 | 1.05V                 |
| 600          | 1206                  | 1269                  | 1332                  |
| 650          | 1306                  | 1375                  | 1443                  |
| 700          | 1406                  | 1481                  | 1555                  |
| 750          | 1507                  | 1586                  | 1666                  |
| 800          | 1607                  | 1692                  | 1777                  |
| 850          | 1708                  | 1798                  | 1888                  |
| 900          | 1808                  | 1904                  | 1999                  |
| 950          | 1909                  | 2009                  | 2110                  |
| 1000         | 2009                  | 2115                  | 2221                  |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 29. Dynamic Current for Arm Cortex-M33 Core (mA, with ASF = 1.00)

|              | Voltage (V DD_INT )   | Voltage (V DD_INT )   | Voltage (V DD_INT )   |
|--------------|-----------------------|-----------------------|-----------------------|
| f CCLK (MHz) | 0.95V                 | 1.00V                 | 1.05V                 |
| 25           | 2                     | 2                     | 3                     |
| 50           | 5                     | 5                     | 5                     |
| 100          | 9                     | 10                    | 10                    |
| 150          | 14                    | 15                    | 16                    |
| 200          | 19                    | 20                    | 21                    |
| 220          | 21                    | 22                    | 23                    |
| 240          | 23                    | 24                    | 25                    |
| 260          | 24                    | 26                    | 27                    |
| 280          | 26                    | 28                    | 29                    |
| 300          | 28                    | 30                    | 31                    |
| 320          | 30                    | 32                    | 33                    |
| 333          | 31                    | 33                    | 35                    |
| 360          | 34                    | 36                    | 37                    |
| 380          | 36                    | 38                    | 40                    |
| 400          | 38                    | 40                    | 42                    |

## Clock Current

The dynamic clock currents provide the total power dissipated by all transistors switching in the clock paths. The power dissipated by each clock domain is dependent on voltage (VDD\_INT), operating frequency, and a unique scaling factor.

I DD\_INT\_SYSCLK\_DYN (mA) = 0.652 × fSYSCLK (MHz) × VDD\_INT (V) I DD\_INT\_SCLK0\_DYN (mA) = 0.450 × fSCLK0 (MHz) × VDD\_INT (V) I DD\_INT\_SCLK1\_DYN (mA) = 0.013 × fSCLK1 (MHz) × VDD\_INT (V) I DD\_INT\_DCLK\_DYN (mA) = 0.106 × fDCLK (MHz) × VDD\_INT (V) I DD\_INT\_OCLK\_DYN (mA) = 0.025 × fOCLK (MHz) × VDD\_INT (V)

## Data Transmission Current

The data transmission current represents the power dissipated when moving data throughout the system via DMA. This current is proportional to the data rate. Refer to the power calculator available with Estimating Power for ADSP-2183x/ ADSP-SC83x SHARC-FX Processors (EE-465) to estimate I DD\_INT\_DMA\_DR\_DYN based on the bandwidth of the data transfer.

## HADC

## HADC Electrical Characteristics

## Table 30. HADC Electrical Characteristics

| Parameter           | Conditions                                                                   |   Typ | Unit   |
|---------------------|------------------------------------------------------------------------------|-------|--------|
| I DD_HADC_IDLE      | Current consumption on V DD_HADC HADC is powered on, but not converting      |   2   | mA     |
| I DD_HADC_ACTIVE    | Current consumption on V DD_HADC during a conversion                         |   2.5 | mA     |
| I DD_HADC_POWERDOWN | Current consumption on V DD_HADC Analog circuitry of the HADCis powered down |  40   | µA     |

## HADC DC Accuracy

Table 31. HADC DC Accuracy for BGA\_ED 1

| Parameter                       | Typ   | Unit 2   |
|---------------------------------|-------|----------|
| Resolution                      | 10    | Bits     |
| No Missing Codes (NMC)          | 10    | Bits     |
| Integral Nonlinearity (INL)     | ±3    | LSB      |
| Differential Nonlinearity (DNL) | ±1    | LSB      |
| Offset Error                    | ±10   | LSB      |
| Offset Error Matching           | ±10   | LSB      |
| Gain Error                      | ±3    | LSB      |
| Gain Error Matching             | ±5    | LSB      |

## HADC Timing Specifications

Table 32. HADC Timing Specifications

| Parameter         | Typ           | Max   | Unit   |
|-------------------|---------------|-------|--------|
| Conversion Time 1 | 20 × T SAMPLE |       | µs     |
| Throughput Range  |               | 1     | MSPS   |
| T WAKEUP          |               | 100   | µs     |

## TMU

## TMU Characteristics

## Table 33. TMU Characteristics

| Parameter   | Typ   | Unit   |
|-------------|-------|--------|
| Resolution  | 1     | °C     |
| Accuracy    | ±4.5  | °C     |

## Table 34. TMU Gain and Offset

| Junction Temperature Range   | TMU_GAIN TMU_OFFSET          |
|------------------------------|------------------------------|
| -40°C to +40°C               | Contact Analog Devices, Inc. |
| 40°C to 85°C                 | Contact Analog Devices, Inc. |
| 85°C to 125°C                | Contact Analog Devices, Inc. |

## ABSOLUTE MAXIMUM RATINGS

Stresses at or above those listed in Table 35 may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## Table 35. Absolute Maximum Ratings

| Parameter                                                            | Rating                     |
|----------------------------------------------------------------------|----------------------------|
| Internal (Core) Supply Voltage (V DD_INT )                           | -0.3 V to +1.05 V          |
| PLL Supply Voltage (V DD_PLL )                                       | -0.3 V to +1.05 V          |
| External (I/O) Supply Voltage (V DD_EXT )                            | -0.3 V to +3.47 V          |
| External (I/O) Reference Supply Voltage (V DD_REF )                  | -0.3 V to +1.89 V          |
| (V DD_EXT - V DD_REF ) and (V DD_EXT - V DD_ANA ) (V DELTA_EXT_REF ) | -1.89 V to +1.89 V         |
| DDR3L Controller Supply Voltage (V DD_DMC )                          | -0.3 V to +1.60 V          |
| Analog Supply Voltage (V DD_ANA )                                    | -0.3 V to +1.89 V          |
| Fractional PLL Supply Voltage (V DD_FPLLANA )                        | -0.3 V to +1.89 V          |
| HADC Reference Voltage (V HADC_REF )                                 | -0.3 V to +1.89 V          |
| DDR3L Input Voltage 1                                                | -0.3 V to +1.60 V          |
| Digital Input Voltage 1, 2                                           | -0.3 V to +3.47 V          |
| TWI Input Voltage 1, 3                                               | -0.3 V to +3.47 V          |
| Output Voltage Swing                                                 | -0.3 V to V DD_EXT +0.5 V  |
| Analog Input Voltage 4                                               | -0.2 V to V DD_ANA +0.09 V |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## Table 35. Absolute Maximum Ratings (Continued)

| Parameter                         | Rating              |
|-----------------------------------|---------------------|
| I OH /I OL Current per Signal 2   | 6 mA(maximum)       |
| Storage Temperature Range         | -65  C to +150  C |
| Junction Temperature While Biased | 125  C             |

1 Applies only when the related power supply (VDD\_DMC or VDD\_EXT) is within specification. When the power supply is below specification, the range is the voltage being applied to that power domain ± 0.2 V.

2 Applies to 100% transient duty cycle.

3 Applies to TWI\_SCL and TWI\_SDA.

- 4 Applies only when VDD\_ANA is within specifications and ≤ 1.8 V. When VDD\_ANA is within specifications and &gt; 1.8 V, the maximum rating is 1.89 V. When VDD\_ANA is below specifications, the range is VDD\_ANA ± 0.09 V.

## Table 36. Maximum Duty Cycle for Input Transient Voltage for VDD\_INT and VDD\_EXT

|   V DD_INT (V) 1 | V DD_EXT (V) 1   | MaximumDutyCycle 2   |
|------------------|------------------|----------------------|
|            1.12  |                  | 5%                   |
|            1.103 |                  | 10%                  |
|            1.086 |                  | 20%                  |
|            1.077 |                  | 30%                  |
|            1.065 |                  | 50%                  |
|            1.056 |                  | 75%                  |
|            1.05  | 3.470            | 100%                 |

1 The individual values cannot be combined for analysis of a single instance of overshoot or undershoot. The worst case observed value must fall within one of the voltages specified and the total duration of the overshoot or undershoot (exceeding the 100% case) must be less than or equal to the corresponding duty cycle.

2 Duty cycle refers to the percentage of time the signal exceeds the value for the 100% case. This is equivalent to the measured duration of a single instance of overshoot or undershoot as a percentage of the period of occurrence.

## Table 37. Maximum Duty Cycle for Input Transient Voltage

|   3.3VV IN Max(V) 1 |   1.8VV IN Max(V) 1 | MaximumDutyCycle 2   |
|---------------------|---------------------|----------------------|
|                3.47 |                1.89 | 100%                 |

1 The individual values cannot be combined for analysis of a single instance of overshoot or undershoot. The worst case observed value must fall within one of the voltages specified and the total duration of the overshoot or undershoot (exceeding the 100% case) must be less than or equal to the corresponding duty cycle.

2 Duty cycle refers to the percentage of time the signal exceeds the value for the 100% case. This is equivalent to the measured duration of a single instance of overshoot or undershoot as a percentage of the period of occurrence.

## ESD CAUTION

<!-- image -->

ESD  (electrostatic  discharge)  sensitive  device. Charged devi c es and c ir c uit boards c an dis c harge w ithout dete c tion. A l though this produ c t features patented or proprietary prote c tion c ir c uitry, damage may o cc ur on devi c es sub j e c ted to high energy ES D. T herefore, proper ES D pre c autions shou l d be ta k en to avoid performan c e degradation or l oss of fun c tiona l ity.

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## TIMING SPECIFICATIONS

All specifications and characteristics apply across the entire operating conditions range unless otherwise noted.

## Power-Up Reset Timing

Table 38 and Figure 7 show the relationship between power supply startup and processor reset timing, as relating to the clock generation unit (CGU) and the reset control unit (RCU).

In Figure 7, the VDD\_SUPPLIES are VDD\_INT, VDD\_EXT, VDD\_DMC, VDD\_REF, and VDD\_ANA. There are some considerations that system design must take into account:

1. The VDELTA\_EXT\_REF specification must be met at all times, including during power-up reset and when powering down the device (Figure 8).
2. Any I/O pin operating in the VDD\_EXT power domain, such as SYS\_HWRST, SYS\_RESOUT, and so on, may actually momentarily drive until the VDD\_SUPPLIES rail is powered up. Systems sharing these signals on the board must determine if there are any issues that need to be addressed based on this behavior.

## Table 38. Power-Up Reset Timing

Figure 7. Power-Up Reset Timing

| Parameter            |                                                                                                                                                     | Min Max     | Unit   |
|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|-------------|--------|
| Timing Requirement s | Timing Requirement s                                                                                                                                |             |        |
| t RST_IN_PWR         | SYS_HWRST Deasserted after V DD_SUPPLIES (V DD_INT , V DD_EXT , V DD_DMC , V DD_REF , V DD_ANA ) and SYS_CLKIN0 are Stable and Within Specification | 11 × t CKIN | ns     |
| t PWR_UP             | V DD_SUPPLIES Power Ramp Up                                                                                                                         | 100         | μs     |
| t PWR_DOWN           | V DD_SUPPLIES Power Ramp Down                                                                                                                       | 100         | μs     |

<!-- image -->

Figure 8. Power-Up and Power-Down Voltage Delta Requirement

<!-- image -->

## Clock and Reset Timing

Table 39 and Figure 9 describe clock and reset operations related to the CGU and RCU. Per the CCLK, SYSCLK, SCLKx, DCLK, and OCLK timing specifications in Table 23 (Clock Operating Conditions), combinations of SYS\_CLKIN0 and clock multipliers must not select clock rates in excess of the maximum instruction rate of the processor.

## Table 39. Clock and Reset Timing

| Parameter           |                                                 | Min Max     | Unit   |
|---------------------|-------------------------------------------------|-------------|--------|
| Timing Requirements | Timing Requirements                             |             |        |
| f CKIN              | SYS_CLKIN0 Frequency (Crystal) 1, 2             | 20 30       | MHz    |
|                     | SYS_CLKIN0 Frequency (External SYS_CLKIN0) 1, 2 | 20 30       | MHz    |
| t CKINL             | SYS_CLKIN0 Low Pulse 1                          | 16.67       | ns     |
| t CKINH             | SYS_CLKIN0 High Pulse 1                         | 16.67       | ns     |
| t WRST              | RESET Asserted Pulse Width Low 3                | 11 × t CKIN | ns     |

Figure 9. Clock and Reset Timing

<!-- image -->

## Dynamic Memory Controller (DMC)-Clock, Control, Write and Read Cycle Timing

The DMC clock, control, write and read timings comply with the JEDEC standards. To ensure proper operation of the DDR3L, all DDR3L guidelines must be strictly followed.

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## Link Ports (LPs)

In LP receive mode, the LP clock is supplied externally and is called fLCLKREXT, therefore the period can be represented by

<!-- formula-not-decoded -->

In LP transmit mode, the programmed LP clock (fLCLKTPROG) frequency in megahertz is set by the following equation where VALUE is a field in the LP\_DIV register that can be set from 1 to 255:

<!-- formula-not-decoded -->

In the case where VALUE = 0, fLCLKTPROG = fCDU\_CLKO8. For all settings of VALUE, the following equation is true:

<!-- formula-not-decoded -->

Calculation of the link receiver data setup and hold relative to the link clock is required to determine the maximum allowable skew that can be introduced in the transmission path length difference between LPx\_Dx and LPx\_CLK. Setup skew is the maximum delay that can be introduced in LPx\_Dx relative to LPx\_CLK (setup skew = tLCLKTWH minimum - tDLDCH - tSLDCL). Hold skew is the maximum delay that can be introduced in LPx\_CLK relative to LPx\_Dx (hold skew = tLCLKTWL minimum - tHLDCH - tHLDCL). See Table 41 for LPs transmit timing.

## Table 40. LPs-Receive 1

| Parameter                | Min                                   | Max                         | Unit   |
|--------------------------|---------------------------------------|-----------------------------|--------|
| Timing                   | Requirements                          |                             |        |
| f LCLKREXT               | LPx_CLK Frequency                     | 125                         | MHz    |
| t SLDCL                  | Data Setup Before LPx_CLK Low         | 1.5                         | ns     |
| t HLDCL                  | Data Hold After LPx_CLK Low           | 1.4                         | ns     |
| t LCLKEW                 | LPx_CLK Period 2                      | t LCLKREXT - 1              | ns     |
| t LCLKRWL                | LPx_CLK Width Low 2                   | 0.5 × t LCLKREXT            | ns     |
| t LCLKRWH                | LPx_CLK Width High 2                  | 0.5 × t LCLKREXT            | ns     |
| Switching Characteristic | Switching Characteristic              |                             |        |
| t DLALC                  | LPx_ACK Low Delay After LPx_CLK Low 3 | 1.5 × t CDU_CLKO8 + 4 2.5 × | ns     |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Figure 10. LPs-Receive

<!-- image -->

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 41. LPs-Transmit 1

| Parameter                 |                                      | Min                    | Max                                    | Unit   |
|---------------------------|--------------------------------------|------------------------|----------------------------------------|--------|
| Timing Requirements       | Timing Requirements                  |                        |                                        |        |
| t SLACH                   | LPx_ACK Setup Before LPx_CLK Low     | 2 × t CDU_CLKO8 + 13.5 |                                        | ns     |
| t HLACH                   | LPx_ACK Hold After LPx_CLK Low       | -2.5                   |                                        | ns     |
| Switching Characteristics | Switching Characteristics            |                        |                                        |        |
| t DLDCH                   | Data Delay After LPx_CLK High        |                        | 2.23                                   | ns     |
| t HLDCH                   | Data Hold After LPx_CLK High         | -1.04                  |                                        | ns     |
| t LCLKTWL 2               | LPx_CLK Width Low                    | 0.4 × t LCLKTPROG      | 0.63 × t LCLKTPROG                     | ns     |
| t LCLKTWH 2               | LPx_CLK Width High                   | 0.45 × t LCLKTPROG     | 0.63 × t LCLKTPROG                     | ns     |
| t LCLKTW 2                | LPx_CLK Period                       | N×t LCLKTPROG - 0.8    |                                        | ns     |
| t DLACLK                  | LPx_CLK Low Delay After LPx_ACK High | t CDU_CLKO8 + 4        | 2 × t CDU_CLKO8 + 1 × t CDU_CLKO8 + 10 | ns     |

<!-- image -->

NOTES The t SLACH and t HLACH specifications apply only to the LPx\_CLK falling edge.  If these specifications are met, LPx\_CLK extends and the dotted LPx\_CLK falling edge does not occur as shown.  The position of the dotted falling edge can be calculated using the t LCLKTWH specification.  t LCLKTWH Min must be used for t SLACH and t LCLKTWH Max for t HLACH .

Figure 11. LPs-Transmit

## LPs DDR Mode

Link ports DDR mode is a same edge protocol. It drives and samples data on the same edge of the clock. Positive-edge-driven data from Tx is sampled on the same positive edge by Rx, and negative-edge-driven data from Tx is sampled on the same negative edge by Rx.

## Table 42. LPs DDR-Receive 1

| Parameter                | Min                                   | Max                         | Unit   |
|--------------------------|---------------------------------------|-----------------------------|--------|
| Timing                   | Requirements                          |                             |        |
| f LCLKREXT               | LPx_CLK Frequency                     | 125                         | MHz    |
| t SLDCL                  | Data Setup Before LPx_CLK             | 0.85                        | ns     |
| t HLDCL                  | Data Hold After LPx_CLK               | 1.45                        | ns     |
| t LCLKEW                 | LPx_CLK Period 2                      | t LCLKREXT - 1              | ns     |
| t LCLKRWL                | LPx_CLK Width Low 2                   | 0.5 × t LCLKREXT            | ns     |
| t LCLKRWH                | LPx_CLK Width High 2                  | 0.5 × t LCLKREXT            | ns     |
| Switching Characteristic | Switching Characteristic              |                             |        |
| t DLALC                  | LPx_ACK Low Delay After LPx_CLK Low 3 | 1.5 × t CDU_CLKO8 + 4 2.5 × | ns     |

Figure 12. LPs DDR-Receive

<!-- image -->

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 43. LPs DDR-Transmit 1

| Parameter                 |                                      | Min                    | Max                                    | Unit   |
|---------------------------|--------------------------------------|------------------------|----------------------------------------|--------|
| Timing Requirements       | Timing Requirements                  |                        |                                        |        |
| t SLACH                   | LPx_ACK Setup Before LPx_CLK Low     | 2 × t CDU_CLKO8 + 13.5 |                                        | ns     |
| t HLACH                   | LPx_ACK Hold After LPx_CLK Low       | -2.5                   |                                        | ns     |
| Switching Characteristics | Switching Characteristics            |                        |                                        |        |
| t DLDCH                   | Data Delay After LPx_CLK             |                        | 2.95                                   | ns     |
| t HLDCH                   | Data Hold After LPx_CLK              | 1.45                   |                                        | ns     |
| t LCLKTWL 2               | LPx_CLK Width Low                    | 0.45 × t LCLKTPROG     | 0.55 × t LCLKTPROG                     | ns     |
| t LCLKTWH 2               | LPx_CLK Width High                   | 0.45 × t LCLKTPROG     | 0.55 × t LCLKTPROG                     | ns     |
| t LCLKTW 2                | LPx_CLK Period                       | N×t LCLKTPROG - 0.8    |                                        | ns     |
| t DLACLK                  | LPx_CLK Low Delay After LPx_ACK High | t CDU_CLKO8 + 4        | 2 × t CDU_CLKO8 + 1 × t CDU_CLKO8 + 10 | ns     |

Figure 13. LPs DDR-Transmit

<!-- image -->

## Serial Ports (SPORTs)

To determine whether a device is compatible with the SPORT at clock speed n, the following specifications must be confirmed: frame sync delay and frame sync setup and hold; data delay and data setup and hold; and serial clock (SPTx\_CLK) width. In Figure 14, either the rising edge or the falling edge of SPTx\_A/BCLK (external or internal) can be used as the active sampling edge.

When externally generated, the SPORT clock is called fSPTCLKEXT:

<!-- formula-not-decoded -->

When internally generated, the programmed SPORT clock (fSPTCLKPROG) frequency in megahertz is set by the following equation:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

where CLKDIV is a field in the SPORT\_DIV register that can be set from 0 to 65,535.

## Table 44. SPORTs-External Clock 1

| Parameter                 |                                                                                                         | Min                     | Max   | Unit   |
|---------------------------|---------------------------------------------------------------------------------------------------------|-------------------------|-------|--------|
| Timing Requirements       | Timing Requirements                                                                                     |                         |       |        |
| t SFSE                    | Frame Sync Setup Before SPTx_CLK (Externally Generated Frame Sync in Either Transmit or Receive Mode) 2 | 2                       |       | ns     |
| t HFSE                    | Frame Sync Hold After SPTx_CLK (Externally Generated Frame Sync in Either Transmit or Receive Mode) 2   | 3                       |       | ns     |
| t SDRE                    | Receive Data Setup Before Receive SPTx_CLK 2                                                            | 2                       |       | ns     |
| t HDRE                    | Receive Data Hold After SPTx_CLK 2                                                                      | 3                       |       | ns     |
| t SPTCLKW                 | SPTx_CLK Width 3                                                                                        | 0.5 × t SPTCLKEXT - 1.5 |       | ns     |
| t SPTCLK                  | SPTx_CLK Period 3                                                                                       | t SPTCLKEXT - 1.5       |       | ns     |
| Switching Characteristics | Switching Characteristics                                                                               |                         |       |        |
| t DFSE                    | Frame Sync Delay After SPTx_CLK (Internally Generated Frame Sync in Either Transmit or Receive Mode) 4  |                         | 12    | ns     |
| t HOFSE                   | Frame Sync Hold After SPTx_CLK (Internally Generated Frame Sync in Either Transmit or Receive Mode) 4   | 2                       |       | ns     |
| t DDTE                    | Transmit Data Delay After Transmit SPTx_CLK 4                                                           |                         | 12    | ns     |
| t HDTE                    | Transmit Data Hold After Transmit SPTx_CLK 4                                                            | 2                       |       | ns     |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 45. SPORTs-Internal Clock 1

| Parameter                 |                                                                                                         | Min                      | Max   | Unit   |
|---------------------------|---------------------------------------------------------------------------------------------------------|--------------------------|-------|--------|
| Timing Requirements       | Timing Requirements                                                                                     |                          |       |        |
| t SFSI                    | Frame Sync Setup Before SPTx_CLK (Externally Generated Frame Sync in Either Transmit or Receive Mode) 2 | 11                       |       | ns     |
| t HFSI                    | Frame Sync Hold After SPTx_CLK (Externally Generated Frame Sync in Either Transmit or Receive Mode) 2   | -0.5                     |       | ns     |
| t SDRI                    | Receive Data Setup Before SPTx_CLK 2                                                                    | 3.4                      |       | ns     |
| t HDRI                    | Receive Data Hold After SPTx_CLK 2                                                                      | 3.6                      |       | ns     |
| Switching Characteristics | Switching Characteristics                                                                               |                          |       |        |
| t DFSI                    | Frame Sync Delay After SPTx_CLK (Internally Generated Frame Sync in Transmit or Receive Mode) 3         |                          | 3.5   | ns     |
| t HOFSI                   | Frame Sync Hold After SPTx_CLK (Internally Generated Frame Sync in Transmit or Receive Mode) 3          | -3                       |       | ns     |
| t DDTI                    | Transmit Data Delay After SPTx_CLK 3                                                                    |                          | 3.5   | ns     |
| t HDTI                    | Transmit Data Hold After SPTx_CLK 3                                                                     | -3                       |       | ns     |
| t SPTCLKIW                | SPTx_CLK Width 4                                                                                        | 0.5 × t SPTCLKPROG - 1.5 |       | ns     |
| t SPTCLKW                 | SPTx_CLK Period 4                                                                                       | t SPTCLKPROG - 1.5       |       | ns     |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Figure 14. SPORTs

<!-- image -->

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 46. SPORTs-Enable and Three-State 1

| Parameter                 | Parameter                                      | Min   | Max   | Unit   |
|---------------------------|------------------------------------------------|-------|-------|--------|
| Switching Characteristics | Switching Characteristics                      |       |       |        |
| t DDTEN                   | Data Enable From External Transmit SPTx_CLK 2  | 1     |       | ns     |
| t DDTTE                   | Data Disable From External Transmit SPTx_CLK 2 |       | 14    | ns     |
| t DDTIN                   | Data Enable From Internal Transmit SPTx_CLK 2  | -2.5  |       | ns     |
| t DDTTI                   | Data Disable From Internal Transmit SPTx_CLK 2 |       | 2.8   | ns     |

Figure 15. SPORTs-Enable and Three-State

<!-- image -->

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

The SPTx\_TDV output signal becomes active in SPORT multichannel mode. During transmit slots (enabled with active channel selection registers) the SPTx\_TDV is asserted for communication with external devices.

## Table 47. SPORTs-Transmit Data Valid (TDV) 1

| Parameter                 | Parameter                                                    | Min   | Max   | Unit   |
|---------------------------|--------------------------------------------------------------|-------|-------|--------|
| Switching Characteristics | Switching Characteristics                                    |       |       |        |
| t DRDVEN                  | Data Valid Enable Delay From Drive Edge of External Clock 2  | 2     |       | ns     |
| t DFDVEN                  | Data Valid Disable Delay From Drive Edge of External Clock 2 |       | 14    | ns     |
| t DRDVIN                  | Data Valid Enable Delay From Drive Edge of Internal Clock 2  | -2.5  |       | ns     |
| t DFDVIN                  | Data Valid Disable Delay From Drive Edge of Internal Clock 2 |       | 3.5   | ns     |

Figure 16. SPORTs-Transmit Data Valid Internal and External Clock

<!-- image -->

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 48. SPORTs-External Late Frame Sync 1

| Parameter                 | Parameter                                                                                                      | Min   | Max   | Unit   |
|---------------------------|----------------------------------------------------------------------------------------------------------------|-------|-------|--------|
| Switching Characteristics | Switching Characteristics                                                                                      |       |       |        |
| t DDTLFSE                 | DataDelayFromLateExternalTransmitFrameSyncorExternalReceiveFrame Sync With SPORT_MCTL_A/B bits MCE = 1,MFD=0 2 |       | 14    | ns     |
| t DDTENFS                 | Data Enable for SPORT_MCTL_A/B bits MCE = 1,MFD=0 2                                                            | 0.5   |       | ns     |

Figure 17. External Late Frame Sync

<!-- image -->

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## Asynchronous Sample Rate Converter (ASRC)-Serial Input Port

The ASRC input signals are routed from the DAIx\_PINx pins using the SRU. Therefore, the timing specifications provided in Table 49 are valid at the DAIx\_PINx pins.

Table 49. ASRC, Serial Input Port

| Parameter           | Min                                              | Max         | Unit   |
|---------------------|--------------------------------------------------|-------------|--------|
| Timing Requirements |                                                  |             |        |
| t SRCSFS 1          | Frame Sync Setup Before Serial Clock Rising Edge | 4           | ns     |
| t SRCHFS 1          | Frame Sync Hold After Serial Clock Rising Edge   | 5.5         | ns     |
| t SRCSD 1           | Data Setup Before Serial Clock Rising Edge       | 4           | ns     |
| t SRCHD 1           | Data Hold After Serial Clock Rising Edge         | 5.5         | ns     |
| t SRCCLKW           | Clock Width                                      | t SCLK0 - 1 | ns     |
| t SRCCLK            | Clock Period                                     | 2 × t SCLK0 | ns     |

Figure 18. ASRC Serial Input Port Timing

<!-- image -->

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## Asynchronous Sample Rate Converter (ASRC)-Serial Output Port

For the serial output port, the frame sync is an input and it must meet setup and hold times with regard to SCLK0 on the output port. The serial data output has a hold time and delay specification with regard to the serial clock. In TDM mode, the ASRC drives at the rising edge and samples at the falling edge of the serial clock. In all other modes, the serial clock rising edge is the sampling edge, and the falling edge is the driving edge.

Table 50. ASRC, Serial Output Port

| Parameter                 | Min                                                 | Max         | Unit   |
|---------------------------|-----------------------------------------------------|-------------|--------|
| Timing Requirements       |                                                     |             |        |
| t SRCSFS 1                | Frame Sync Setup Before Serial Clock Rising Edge    | 4           | ns     |
| t SRCHFS 1                | Frame Sync Hold After Serial Clock Rising Edge      | 5.5         | ns     |
| t SRCCLKW                 | Clock Width                                         | t SCLK0 - 1 | ns     |
| t SRCCLK                  | Clock Period                                        | 2 × t SCLK0 | ns     |
| Switching Characteristics |                                                     |             |        |
| t SRCTDD 1                | Transmit Data Delay After Serial Clock Falling Edge | 13.3        | ns     |
| t SRCTDH 1                | Transmit Data Hold After Serial Clock Falling Edge  | 1           | ns     |

Figure 19. ASRC Serial Output Port Timing

<!-- image -->

## SPI Port-Master Timing

## SPI0, SPI1, and SPI2

Table 51 and Figure 20 describe the SPI port master operations.

When internally generated, the programmed SPI clock (fSPICLKPROG) frequency in megahertz is set by the following equation:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

where BAUD is a field in the SPIx\_CLK register that can be set from 0 to 65,535.

## Note that

- In dual-mode data transmit, the SPIx\_MISO signal is also an output.
- In quad-mode data transmit, the SPIx\_MISO, SPIx\_D2, and SPIx\_D3 signals are also outputs.
- In dual-mode data receive, the SPIx\_MOSI signal is also an input.
- In quad-mode data receive, the SPIx\_MOSI, SPIx\_D2, and SPIx\_D3 signals are also inputs.
- Quad mode is supported by SPI1 and SPI2.
- CPHA is a configuration bit in the SPI\_CTL register.

## Table 51. SPI Port-Master Timing 1

| Parameter                 |                                                      | Min                      | Max   | Unit   |
|---------------------------|------------------------------------------------------|--------------------------|-------|--------|
| Timing Requirements       | Timing Requirements                                  |                          |       |        |
| t SSPIDM                  | Data Input Valid to SPIx_CLK Edge (Data Input Setup) | 3.5                      |       | ns     |
| t HSPIDM                  | SPIx_CLK Sampling Edge to Data Input Invalid         | 2                        |       | ns     |
| Switching Characteristics | Switching Characteristics                            |                          |       |        |
| t SDSCIM                  | SPIx_SEL Low to First SPI_CLK Edge for CPHA = 1 2    | t SPICLKPROG - 5         |       | ns     |
|                           | SPIx_SEL Low to First SPI_CLK Edge for CPHA = 0 2    | 1.5 × t SPICLKPROG - 5   |       | ns     |
| t SPICHM                  | SPIx_CLK High Period 3                               | 0.5 × t SPICLKPROG - 1.5 |       | ns     |
| t SPICLM                  | SPIx_CLK Low Period 3                                | 0.5 × t SPICLKPROG - 1.5 |       | ns     |
| t SPICLK                  | SPIx_CLK Period 3                                    | t SPICLKPROG - 1.5       |       | ns     |
| t HDSM                    | Last SPIx_CLK Edge to SPIx_SEL High for CPHA = 1 2 2 | 1.5 × t SPICLKPROG - 5   |       | ns     |
|                           | Last SPIx_CLK Edge to SPIx_SEL High for CPHA = 0     | t SPICLKPROG - 5         |       | ns     |
| t SPITDM                  | Sequential Transfer Delay 2, 4                       | t SPICLKPROG - 1.5       |       | ns     |
| t DDSPIDM                 | SPIx_CLK Edge to Data Out Valid (Data Out Delay)     |                          | 2.7   | ns     |
| t HDSPIDM                 | SPIx_CLK Edge to Data Out Invalid (Data Out Hold)    | -3.75                    |       | ns     |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Figure 20. SPI Port-Master Timing

<!-- image -->

## SPI Port-Slave Timing

## SPI0, SPI1, and SPI2

Table 52 and Figure 21 describe SPI port slave operations. Note that

- In dual-mode data transmit, the SPIx\_MOSI signal is also an output.
- In quad-mode data transmit, the SPIx\_MOSI, SPIx\_D2, and SPIx\_D3 signals are also outputs.
- In dual-mode data receive, the SPIx\_MISO signal is also an input.
- In quad-mode data receive, the SPIx\_MISO, SPIx\_D2, and SPIx\_D3 signals are also inputs.
- In SPI slave mode, the SPI clock is supplied externally and is called fSPICLKEXT:

<!-- formula-not-decoded -->

- Quad mode is supported by SPI1 and SPI2.
- CPHA is a configuration bit in the SPI\_CTL register.

## Table 52. SPI Port-Slave Timing 1

| Parameter                 |                                                      | Min Max                 | Unit   |    |
|---------------------------|------------------------------------------------------|-------------------------|--------|----|
| Timing Requirements       | Timing Requirements                                  |                         |        |    |
| t SPICHS                  | SPIx_CLK High Period 2                               | 0.5 × t SPICLKEXT - 1.5 |        | ns |
| t SPICLS                  | SPIx_CLK Low Period 2                                | 0.5 × t SPICLKEXT - 1.5 |        | ns |
| t SPICLK                  | SPIx_CLK Period 2                                    | t SPICLKEXT - 1.5       |        | ns |
| t HDS                     | Last SPIx_CLK Edge to SPIx_SS Not Asserted           | 5                       |        | ns |
| t SPITDS                  | Sequential Transfer Delay                            | t SPICLKEXT - 1.5       |        | ns |
| t SDSCI                   | SPIx_SS Assertion to First SPIx_CLK Edge             | 11.7                    |        | ns |
| t SSPID                   | Data Input Valid to SPIx_CLK Edge (Data Input Setup) | 2                       |        | ns |
| t HSPID                   | SPIx_CLK Sampling Edge to Data Input Invalid         | 1.6                     |        | ns |
| Switching Characteristics | Switching Characteristics                            |                         |        |    |
| t DSOE                    | SPIx_SS Assertion to Data Out Active                 | 0                       | 14.12  | ns |
| t DSDHI                   | SPIx_SS Deassertion to Data High Impedance           | 0                       | 12.6   | ns |
| t DDSPID                  | SPIx_CLK Edge to Data Out Valid (Data Out Delay)     |                         | 14.16  | ns |
| t HDSPID                  | SPIx_CLK Edge to Data Out Invalid (Data Out Hold)    | 1.5                     |        | ns |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Figure 21. SPI Port-Slave Timing

<!-- image -->

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## SPI Port-SPIx\_RDY Slave Timing

SPIx\_RDY provides flow control. CPOL, CPHA, and FCCH are configuration bits in the SPIx\_CTL register.

## Table 53. SPI Port-SPIx\_RDY Slave Timing 1

| Parameter                                                              | Conditions   | Min             | Max                  | Unit   |
|------------------------------------------------------------------------|--------------|-----------------|----------------------|--------|
| Switching Characteristic                                               |              |                 |                      |        |
| t DSPISCKRDYS SPIx_RDY Deassertion From Last Valid Input SPIx_CLK Edge | FCCH = 0     | 3 × t CDU_CLKO6 | 4 × t CDU_CLKO6 + 10 | ns     |
|                                                                        | FCCH = 1     | 4 × t CDU_CLKO6 | 5 × t CDU_CLKO6 + 10 | ns     |

Figure 22. SPIx\_RDY Deassertion from Valid Input SPIx\_CLK Edge in Slave Mode

<!-- image -->

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## SPI Port-Open Drain Mode (ODM) Timing

In Figure 23 and Figure 24, the outputs can be SPIx\_MOSI, SPIx\_MISO, SPIx\_D2, and/or SPIx\_D3, depending on the mode of operation. CPOL and CPHA are configuration bits in the SPI\_CTL register.

## Table 54. SPI Port-ODM Master Mode Timing 1

| Parameter                 | Parameter                                           | Min   | Max   | Unit   |
|---------------------------|-----------------------------------------------------|-------|-------|--------|
| Switching Characteristics | Switching Characteristics                           |       |       |        |
| t HDSPIODMM               | SPIx_CLK Edge to High Impedance From Data Out Valid | -1.5  |       | ns     |
| t DDSPIODMM               | SPIx_CLK Edge to Data Out Valid From High Impedance |       | 6     | ns     |

Figure 23. ODM Master Mode

<!-- image -->

## Table 55. SPI Port-ODM Slave Mode 1

| Parameter                 | Parameter                                           | Min   | Max   | Unit   |
|---------------------------|-----------------------------------------------------|-------|-------|--------|
| Switching Characteristics | Switching Characteristics                           |       |       |        |
| t HDSPIODMS               | SPIx_CLK Edge to High Impedance From Data Out Valid | 0     |       | ns     |
| t DDSPIODMS               | SPIx_CLK Edge to Data Out Valid From High Impedance |       | 11    | ns     |

Figure 24. ODM Slave Mode

<!-- image -->

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## SPI Port-SPIx\_RDY Master Timing

SPIx\_RDY is used to provide flow control. CPOL and CPHA are configuration bits in the SPIx\_CTL register, whereas LEADX, LAGX, and STOP are configuration bits in the SPIx\_DLY register.

## Table 56. SPI Port-SPIx\_RDY Master Timing 1

| Parameter                | Parameter                                                                | Conditions         | Min                               | Max                                   | Unit   |
|--------------------------|--------------------------------------------------------------------------|--------------------|-----------------------------------|---------------------------------------|--------|
| Timing Requirement       | Timing Requirement                                                       |                    |                                   |                                       |        |
| t SRDYSCKM               | Setup Time for SPIx_RDY Deassertion Before Last Valid Data SPIx_CLK Edge |                    | (2+2×BAUD 2 )×t CDU_CLKO6 +11     | (2+2×BAUD 2 )×t CDU_CLKO6 +11         | ns     |
| Switching Characteristic | Switching Characteristic                                                 |                    |                                   |                                       |        |
| t DRDYSCKM 3             | Assertion of SPIx_RDY to First SPIx_CLK Edge of Next Transfer            | BAUD = 0, CPHA = 0 | 4.5 × t CDU_CLKO6                 | 5.5 × t CDU_CLKO6 + 12                | ns     |
|                          |                                                                          | BAUD = 0, CPHA = 1 | 4 × t CDU_CLKO6                   | 5 × t CDU_CLKO6 + 12                  | ns     |
|                          |                                                                          | BAUD > 0, CPHA = 0 | (1 + 1.5 × BAUD 2 ) × t CDU_CLKO6 | (2 + 2.5 × BAUD 2 ) × t CDU_CLKO6 +12 | ns     |
|                          |                                                                          | BAUD > 0, CPHA = 1 | (1 + 1 × BAUD 2 ) × t CDU_CLKO6   | (2 + 2 × BAUD 2 ) × t CDU_CLKO6 + 12  | ns     |

Figure 25. SPIx\_RDY Setup Before SPIx\_CLK

<!-- image -->

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Figure 26. SPIx\_CLK Switching Diagram after SPIx\_RDY Assertion

<!-- image -->

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## xSPI Port-Master Timing

## xSPI

Table 57 and Figure 27 describe the xSPI port master operations. Slave mode is not supported for xSPI.

When internally generated, the programmed xSPI clock (fxSPICLKPROG) frequency in megahertz is set by the following equations:

$$f SYSCLK f CDU_CLKO10 =$$

$$f x SPICLKPROG f SYSCLK PRG_MBD - - - - - - - - - - - - - - - - - =$$

$$t x SPICLKPROG 1 f x SPICLKPROG - - - - - - - - - - - - - - - - - - - - - =$$

where PRG\_MBD is the master mode baud rate divisor.

## Note that

- In dual-mode data transmit, the xSPI\_MISO signal is also an output.
- In quad-mode data transmit, the xSPI\_MISO, xSPI\_D2, and xSPI\_D3 signals are also outputs.
- In octal-mode data transmit, the xSPI\_MISO, xSPI\_D2, xSPI\_D3, xSPI\_D4, xSPI\_D5, xSPI\_D6, and xSPI\_D7 signals are also outputs.
- In dual-mode data receive, the xSPI\_MOSI signal is also an input.
- In quad-mode data receive, the xSPI\_MOSI, xSPI\_D2, and xSPI\_D3 signals are also inputs.
- In octal-mode data receive, the xSPI\_MISO, xSPI\_D2, xSPI\_D3, xSPI\_D4, xSPI\_D5, xSPI\_D6, and xSPI\_D7 signals are also outputs.

## Table 57. xSPI Port-Master Timing 1

| Parameter                   |                                                                            | Min Max                       | Unit   |
|-----------------------------|----------------------------------------------------------------------------|-------------------------------|--------|
| Timing Requirements         | Timing Requirements                                                        |                               |        |
| t SSPIDM                    | Data Input Valid to xSPI_CLK (Data Input Setup) Sampling Edge (DQS) 2      | -0.7                          | ns     |
| t HSPIDM                    | xSPI_CLK Sampling Edge (Data Input Hold) to Data Input Invalid (DQS) 2     | 2.8                           | ns     |
| t SSPIDM                    | Data Input Valid to xSPI_CLK (Data Input Setup) Sampling Edge (PHY CLK) 3  | -1.6                          | ns     |
| t HSPIDM                    | xSPI_CLK Sampling Edge (Data Input Hold) to Data Input Invalid (PHY CLK) 3 | 4.4                           | ns     |
| Switching Characteristics 4 | Switching Characteristics 4                                                |                               |        |
| t SDSCIM                    | xSPI_SEL Low to First xSPI_CLK Edge 5, 6                                   | PRG_CSSOT × t xSPICLKPROG - 2 | ns     |
| t SPICHM                    | xSPI_CLK High Period 6                                                     | 0.44 × t xSPICLKPROG          | ns     |
| t SPICLM                    | xSPI_CLK Low Period 6                                                      | 0.44 × t xSPICLKPROG          | ns     |
| t SPICLK                    | xSPI_CLK Period 6                                                          | t xSPICLKPROG - 0.8           | ns     |
| t HDSM                      | Last xSPI_CLK Edge to xSPI_SEL High for Mode = 0 6, 7, 8                   | PRG_CSEOT × t xSPICLKPROG - 4 | ns     |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 57. xSPI Port-Master Timing 1  (Continued)

| Parameter                                                                   | Min   | Max   | Unit   |
|-----------------------------------------------------------------------------|-------|-------|--------|
| t DDSPIDM xSPI_CLK Edge to Data Out Valid to Driving Edge (Data Out Delay)  | -3.6  | -1.6  | ns     |
| t HDSPIDM xSPI_CLK Edge to Data Out Invalid to Driving Edge (Data Out Hold) |       |       | ns     |

Figure 27. xSPI Port-Master Timing

<!-- image -->

## xSPI With Data Training

I/O timing requirements and switching characteristics are not applicable when xSPI is used with data training. See xSPI PHY Configuration and Training (EE-468) for additional information.

When xSPI is used with data training, the programmed xSPI clock (fxSPICLKPROG) frequency in megahertz (MHz) is set by the following equation:

f xSPICLKPROG f CDU\_CLKO10 =

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## Precision Clock Generator (PCG) (Direct Pin Routing)

This timing is only valid when the SRU is configured such that the precision clock generator (PCG) takes inputs directly from the DAI pins (via pin buffers) and sends outputs directly to the DAI pins. For the other cases, where the PCG inputs and outputs are not directly routed to/from DAI pins (via pin buffers), there is no timing data available. All timing parameters and switching characteristics apply to external DAI pins (DAIx\_PINx).

## Table 58. PCG (Direct Pin Routing)

| Parameter                 | Parameter                                                               | Min                             | Max                              | Unit   |
|---------------------------|-------------------------------------------------------------------------|---------------------------------|----------------------------------|--------|
| Timing Requirement s      | Timing Requirement s                                                    |                                 |                                  |        |
| t PCGIP                   | Input Clock Period                                                      | t SCLK0 × 2                     |                                  | ns     |
| t STRIG                   | PCG Trigger Setup Before Falling Edge of PCG Input Clock                | 4.5                             |                                  | ns     |
| t HTRIG                   | PCG Trigger Hold After Falling Edge of PCG Input Clock                  | 3                               |                                  | ns     |
| Switching Characteristics | Switching Characteristics                                               |                                 |                                  |        |
| t DPCGIO                  | PCG Output Clock and Frame Sync Active Edge Delay After PCG Input Clock | 2                               | 11                               | ns     |
| t DTRIGCLK                | PCG Output Clock Delay After PCG Trigger                                | 2 + (2.5 × t PCGIP )            | 13.5 + (2.5 × t PCGIP )          | ns     |
| t DTRIGFS 1               | PCG Frame Sync Delay After PCG Trigger                                  | 2.5 + ((2.5 + D-PH) × t PCGIP ) | 13.5 + ((2.5 + D-PH) × t PCGIP ) | ns     |
| t PCGOW 2                 | Output Clock Period                                                     | 2 × t PCGIP - 1                 |                                  | ns     |

Figure 28. PCG (Direct Pin Routing)

<!-- image -->

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## General-Purpose IO Port Timing

Table 59 and Figure 29 describe I/O timing, related to the general-purpose ports (PORT).

## Table 59. General-Purpose Port Timing

Figure 29. General-Purpose Port Timing

| Parameter             | Min               | Max   | Unit   |
|-----------------------|-------------------|-------|--------|
| Timing Requirement    |                   |       |        |
| t WFI General-Purpose | 2 × t SCLK0 - 1.5 |       | ns     |

<!-- image -->

## General-Purpose I/O Timer Cycle Timing

Table 60, Table 61, and Figure 30 describe timer expired operations related to the general-purpose timer (TIMER0). The width value is the timer period assigned in the TMx\_TMRn\_WIDTH register and can range from 1 to 2 32 - 1. When externally generated, the TMx\_CLK clock is called f TMRCLKEXT:

<!-- image -->

## Table 60. Timer Cycle Timing-Internal Mode

| Parameter                | Min                                                       | Max                           | Unit   |
|--------------------------|-----------------------------------------------------------|-------------------------------|--------|
| Timing Requirements      |                                                           |                               |        |
| t WL                     | Timer Pulse Width Input Low (Measured In SCLK0 Cycles) 1  | 2 × t SCLK0                   | ns     |
| t WH                     | Timer Pulse Width Input High (Measured In SCLK0 Cycles) 1 | 2 × t SCLK0                   | ns     |
| Switching Characteristic |                                                           |                               |        |
| t HTO                    | Timer Pulse Width Output (Measured In SCLK0 Cycles) 2     | t SCLK0 × WIDTH - 1.7 t SCLK0 | ns     |

## Table 61. Timer Cycle Timing-External Mode

| Parameter                | Min                                                         | Max                     | Unit                    |    |
|--------------------------|-------------------------------------------------------------|-------------------------|-------------------------|----|
| Timing Requirements      | Timing Requirements                                         |                         |                         |    |
| t WL                     | Timer Pulse Width Input Low (Measured In EXT_CLK Cycles) 1  | 2 × t EXT_CLK           |                         | ns |
| t WH                     | Timer Pulse Width Input High (Measured In EXT_CLK Cycles) 1 | 2 × t EXT_CLK           |                         | ns |
| t EXT_CLK                | Timer External Clock Period 2                               | t TMRCLKEXT             |                         | ns |
| Switching Characteristic | Switching Characteristic                                    |                         |                         |    |
| t HTO                    | Timer Pulse Width Output (Measured In EXT_CLK Cycles) 3     | t EXT_CLK × WIDTH - 1.5 | t EXT_CLK × WIDTH + 1.5 | ns |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Figure 30. Timer Cycle Timing

<!-- image -->

## DAIx Pin to DAIx Pin Direct Routing (DAI0 Block and DAI1 Block)

Table 62 and Figure 31 describe I/O timing related to the digital audio interface (DAI) for direct pin connections only (for example, DAIx\_PB01\_I to DAIx\_PB02\_O).

## Table 62. DAI Pin to DAI Pin Routing

Figure 31. DAI Pin to DAI Pin Direct Routing

| Parameter                                            | Min   | Max   | Unit   |
|------------------------------------------------------|-------|-------|--------|
| Switching Characteristic                             |       |       |        |
| t DPIO Delay DAI Pin Input Valid to DAI Output Valid | 1     | 12    | ns     |

<!-- image -->

## Up/Down Counter/Rotary Encoder Timing

Table 63 and Figure 32 describe timing related to the general-purpose counter (CNT).

## Table 63. Up/Down Counter/Rotary Encoder Timing

Figure 32. Up/Down Counter/Rotary Encoder Timing

| Parameter          | Min         | Max   | Unit   |
|--------------------|-------------|-------|--------|
| Timing Requirement |             |       |        |
| t WCOUNT           | 2 × t SCLK0 |       | ns     |

<!-- image -->

## Universal Asynchronous Receiver-Transmitter (UART) Ports-Receive and Transmit Timing

The UART ports receive and transmit operations are described in the ADSP-2183x/ADSP-SC83x SHARC-FX Processor Hardware Reference.

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## Controller Area Network FD (CANFD) Interface

The CANFD interface timing is described in the ADSP-2183x/ADSP-SC83x SHARC-FX Processor Hardware Reference.

## 10/100 EMAC Timing

Table 64, Table 65, Figure 33, and Figure 34 describe the MII EMAC operations.

## Table 64. 10/100 EMAC Timing: MII Receive Signal

|                     |                                                                  | V DDEXT 3.3V Nominal   | V DDEXT 3.3V Nominal   |      |
|---------------------|------------------------------------------------------------------|------------------------|------------------------|------|
| Parameter 1         |                                                                  | Min                    | Max                    | Unit |
| Timing Requirements |                                                                  |                        |                        |      |
| t ERXCLKF           | ETH0_RXCLK_REFCLK Frequency (f SCLK = SCLK Frequency)            | None                   | 25+1%                  | MHz  |
| t ERXCLKW           | ETH0_RXCLK_REFCLK Width (t ERxCLK = ETH0_RXCLK_REFCLK Period)    | t ERxCLK × 35%         | t ERxCLK × 65%         | ns   |
| t ERXCLKIS          | Rx Input Valid to ETH0_RXCLK_REFCLK Rising Edge (Data In Setup)  | 2                      |                        | ns   |
| t ERXCLKIH          | ETH0_RXCLK_REFCLK Rising Edge to Rx Input Invalid (Data In Hold) | 2.2                    |                        | ns   |

Figure 33. 10/100 EMAC Timing: MII Receive Signal

<!-- image -->

## Table 65. 10/100 EMAC Timing: MII Transmit Signal

|                           |                                                             | V DDEXT 3.3V Nominal   | V DDEXT 3.3V Nominal   |      |
|---------------------------|-------------------------------------------------------------|------------------------|------------------------|------|
| Parameter 1               |                                                             | Min                    | Max                    | Unit |
| Timing Requirements       |                                                             |                        |                        |      |
| t ETXCLKF                 | ETH0_TXCLK Frequency (f SCLK = SCLK Frequency)              | None                   | 25+1%                  | MHz  |
| t ETXCLKW                 | ETH0_TXCLK Width (t ETxCLK = ETH0_TXCLK Period)             | t ETxCLK × 35%         | t ETxCLK × 65%         | ns   |
| Switching Characteristics |                                                             |                        |                        |      |
| t ETXCLKOV                | ETH0_TXCLK Rising Edge to Tx Output Valid (Data Out Valid)  |                        | 11.4                   | ns   |
| t ETXCLKOH                | ETH0_TXCLK Rising Edge to Tx Output Invalid (Data Out Hold) | 2                      |                        | ns   |

Figure 34. 10/100 EMAC Timing: MII Transmit Signal

<!-- image -->

## 10/100 EMAC Timing

Table 66 through Table 68 and Figure 35 through Figure 37 describe the RMII EMAC operations.

## Table 66. 10/100 EMAC Timing-RMII Receive Signal

| Parameter 1         |                                                                    | Min Max         | Unit            |     |
|---------------------|--------------------------------------------------------------------|-----------------|-----------------|-----|
| Timing Requirements | Timing Requirements                                                |                 |                 |     |
| t REFCLKF           | ETH0_REFCLK Frequency (f SCLK0 = SCLK0 Frequency)                  |                 | 50+1%           | MHz |
| t REFCLKW           | ETH0_REFCLK Width (t REFCLKF = ETH0_REFCLK Period)                 | t REFCLKF × 35% | t REFCLKF × 65% | ns  |
| t REFCLKIS          | Rx Input Valid to RMII ETH0_REFCLK Rising Edge (Data Input Setup)  | 1.75            |                 | ns  |
| t REFCLKIH          | RMII ETH0_REFCLK Rising Edge to Rx Input Invalid (Data Input Hold) | 1.6             |                 | ns  |

Figure 35. 10/100 EMAC Controller Timing-RMII Receive Signal

<!-- image -->

Table 67. 10/100 EMAC Timing-RMII Transmit Signal

| Parameter 1               | Parameter 1                                                             | Min   | Max   | Unit   |
|---------------------------|-------------------------------------------------------------------------|-------|-------|--------|
| Switching Characteristics | Switching Characteristics                                               |       |       |        |
| t REFCLKOV                | RMII ETH0_REFCLK Rising Edge to Transmit Output Valid (Data Out Valid)  |       | 11.9  | ns     |
| t REFCLKOH                | RMII ETH0_REFCLK Rising Edge to Transmit Output Invalid (Data Out Hold) | 2     |       | ns     |

Figure 36. 10/100 EMAC Controller Timing-RMII Transmit Signal

<!-- image -->

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 68. EMAC Timing- Station Management

| Parameter 1               | Min                                                      | Max   | Unit   |
|---------------------------|----------------------------------------------------------|-------|--------|
| Timing Requirements       |                                                          |       |        |
| t MDIOS                   | ETH0_MDIO Input Valid to ETH0_MDC Rising Edge (Setup)    | 12.6  | ns     |
| t MDCIH                   | ETH0_MDC Rising Edge to ETH0_MDIO Input Invalid (Hold)   | 0     | ns     |
| Switching Characteristics |                                                          |       |        |
| t MDCOV                   | ETH0_MDC Falling Edge to ETH0_MDIO Output Valid          | 2     | ns     |
| t MDCOH                   | ETH0_MDC Falling Edge to ETH0_MDIO Output Invalid (Hold) | -4.9  | ns     |

Figure 37. Ethernet MAC Controller Timing- Station Management

<!-- image -->

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## 10/100/1000 EMAC Timing

Table 69 and Figure 38 describe the RGMII EMAC timing.

## Table 69. 10/100/1000 EMAC Timing-RGMII Receive and Transmit Signals

Figure 38. Gigabit EMAC Controller Timing-RGMII

| Parameter                 |                                          | Min Max                     | Unit   |
|---------------------------|------------------------------------------|-----------------------------|--------|
| Timing Requirements       |                                          |                             |        |
| t SETUPR                  | Data to Clock Input Setup at Receiver    | 1                           | ns     |
| t HOLDR                   | Data to Clock Input Hold at Receiver     | 1                           | ns     |
| t GREFCLKF                | RGMII Receive Clock Period               | 8                           | ns     |
| t GREFCLKW                | RGMII Receive Clock Pulse Width          | 4                           | ns     |
| Switching Characteristics |                                          |                             |        |
| t SKEWT                   | Data to Clock Output Skew at Transmitter | -0.5 +0.5                   | ns     |
| t CYC                     | Clock Cycle Duration                     | 7.2 8.8                     | ns     |
| t DUTY_G                  | Duty Cycle for RGMII Minimum             | t GREFCLKF × 45% t GREFCLKF | ns     |

<!-- image -->

<!-- image -->

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## Sony/Philips Digital Interface (S/PDIF) Transmitter

Serial data input to the S/PDIF transmitter can be formatted as left justified, I 2 S, or right justified with word widths of 16, 18, 20, or 24 bits. The following sections provide timing for the transmitter.

## S/PDIF Transmitter Serial Input Waveforms

Table 70 and Figure 39 show the right justified mode. Frame sync is high for the left channel and low for the right channel. Data is valid on the rising edge of the serial clock. The MSB is delayed the minimum in 24-bit output mode or the maximum in 16-bit output mode from a frame sync transition, so that when there are 64 serial clock periods per frame sync period, the LSB of the data is right justified to the next frame sync transition.

## Table 70. S/PDIF Transmitter Right Justified Mode

Figure 39. Right Justified Mode

| Parameter          | Conditions       | Nominal   | Unit   |
|--------------------|------------------|-----------|--------|
| Timing Requirement |                  |           |        |
| t RJD              | 16-bit word mode | 16        | SCLK0  |
|                    | 18-bit word mode | 14        | SCLK0  |
|                    | 20-bit word mode | 12        | SCLK0  |
|                    | 24-bit word mode | 8         | SCLK0  |

<!-- image -->

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Table 71 and Figure 40 show the default I 2 S justified mode. The frame sync is low for the left channel and high for the right channel. Data is valid on the rising edge of the serial clock. The MSB is left justified to the frame sync transition but with a delay.

## Table 71. S/PDIF Transmitter I 2 S Mode

Figure 40. I 2 S Justified Mode

| Parameter          | Nominal   | Unit   |
|--------------------|-----------|--------|
| Timing Requirement |           |        |
| t I2SD             | 1         | SCLK0  |

<!-- image -->

Table 72 and Figure 41 show the left justified mode. The frame sync is high for the left channel and low for the right channel. Data is valid on the rising edge of the serial clock. The MSB is left justified to the frame sync transition with no delay.

Table 72. S/PDIF Transmitter Left Justified Mode

| Parameter          | Nominal   | Unit   |
|--------------------|-----------|--------|
| Timing Requirement |           |        |
| t LJD              | 0         | SCLK0  |

Figure 41. Left Justified Mode

<!-- image -->

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## S/PDIF Transmitter Input Data Timing

The timing requirements for the S/PDIF transmitter are given in Table 73. Input signals are routed to the DAIx\_PINx pins using the SRU. Therefore, the timing specifications provided below are valid at the DAIx\_PINx pins.

## Table 73. S/PDIF Transmitter Input Data Timing

| Parameter           | Parameter                                        | Min   | Max   | Unit   |
|---------------------|--------------------------------------------------|-------|-------|--------|
| Timing Requirements | Timing Requirements                              |       |       |        |
| t SISFS 1           | Frame Sync Setup Before Serial Clock Rising Edge | 3.4   |       | ns     |
| t SIHFS 1           | Frame Sync Hold After Serial Clock Rising Edge   | 3     |       | ns     |
| t SISD 1            | Data Setup Before Serial Clock Rising Edge       | 3     |       | ns     |
| t SIHD 1            | Data Hold After Serial Clock Rising Edge         | 3     |       | ns     |
| t SITXCLKW          | Transmit Clock Width                             | 9     |       | ns     |
| t SITXCLK           | Transmit Clock Period                            | 20    |       | ns     |
| t SISCLKW           | Clock Width                                      | 36    |       | ns     |
| t SISCLK            | Clock Period                                     | 80    |       | ns     |

Figure 42. S/PDIF Transmitter Input Timing

<!-- image -->

## Oversampling Clock (TxCLK) Switching Characteristics

The S/PDIF transmitter requires an oversampling clock input. This high frequency clock (TxCLK) input is divided down to generate the internal biphase clock.

## Table 74. Oversampling Clock (TxCLK) Switching Characteristics

| Parameter                 | Max                                                                        | Unit   |
|---------------------------|----------------------------------------------------------------------------|--------|
| Switching Characteristics |                                                                            |        |
| f TXCLK_384 Frequency     | for TxCLK = 384 × Frame Sync Oversampling ratio × frame sync ≤ 1/t SITXCLK | MHz    |
| f TXCLK_256 Frequency     | for TxCLK = 256 × Frame Sync 49.2                                          | MHz    |
| f FS                      | Frame Rate (FS) 192                                                        | kHz    |

## S/PDIF Receiver

The following section describes timing as it relates to the S/PDIF receiver.

## Internal Digital PLL Mode

In the internal digital PLL mode, the internal digital PLL generates the 512 × FS clock.

Table 75. S/PDIF Receiver Internal Digital PLL Mode Timing

| Parameter                 | Min                                      | Max   | Unit   |
|---------------------------|------------------------------------------|-------|--------|
| Switching Characteristics |                                          |       |        |
| t DFSI                    | Frame Sync Delay After Serial Clock      | 5     | ns     |
| t HOFSI                   | Frame Sync Hold After Serial Clock -2    |       | ns     |
| t DDTI                    | Transmit Data Delay After Serial Clock   | 5     | ns     |
| t HDTI                    | Transmit Data Hold After Serial Clock -2 |       | ns     |

Figure 43. S/PDIF Receiver Internal Digital PLL Mode Timing

<!-- image -->

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## MediaLB (MLB)

All the numbers shown in Table 76 are applicable for all MLB speed modes (1024 FS, 512 FS, and 256 FS) for the 3-pin protocol, unless otherwise specified. Refer to the Media Local Bus Specification Version 4.2 for more details.

Table 76. 3-Pin MLB Interface Specifications

| Parameter   |                                                   | Min   | Typ   | Max Unit   |      |
|-------------|---------------------------------------------------|-------|-------|------------|------|
| t MLBCLK    | MLB Clock Period                                  |       |       |            |      |
|             | 1024 FS                                           |       | 20.3  |            | ns   |
|             | 512 FS                                            |       | 40    |            | ns   |
|             | 256 FS                                            |       | 81    |            | ns   |
| t MCKL      | MLBCLK Low Time                                   |       |       |            |      |
|             | 1024 FS                                           | 6.1   |       |            | ns   |
|             | 512 FS                                            | 14    |       |            | ns   |
|             | 256 FS                                            | 30    |       |            | ns   |
| t MCKH      | MLBCLK High Time                                  |       |       |            |      |
|             | 1024 FS                                           | 9.3   |       |            | ns   |
|             | 512 FS                                            | 14    |       |            | ns   |
|             | 256 FS                                            | 30    |       |            | ns   |
| t MCKR      | MLBCLK Rise Time (V IL to V IH )                  |       |       |            |      |
|             | 1024 FS                                           |       |       | 1          | ns   |
|             | 512 FS/256 FS                                     |       |       | 3          | ns   |
| t MCKF      | MLBCLK Fall Time (V IH to V IL )                  |       |       |            |      |
|             | 1024 FS                                           |       |       | 1          | ns   |
|             | 512 FS/256 FS                                     |       |       | 3          | ns   |
| t MPWV 1    | MLBCLK Pulse Width Variation                      |       |       |            |      |
|             | 1024 FS                                           |       |       | 0.7        | nspp |
|             | 512 FS/256                                        |       |       | 2.0        | nspp |
| t DSMCF     | DAT/SIG Input Setup Time                          | 1     |       |            | ns   |
| t DHMCF     | DAT/SIG Input Hold Time                           | 2     |       |            | ns   |
| t MCFDZ     | DAT/SIG Output Time to Three-State                | 0     |       | 15         | ns   |
| t MCDRV     | DAT/SIG Output Data Delay From MLBCLK Rising Edge |       |       | 8          | ns   |
| t MDZH 2    | Bus Hold Time                                     |       |       |            |      |
|             | 1024 FS                                           | 2     |       |            | ns   |
|             | 512 FS/256                                        | 4     |       |            | ns   |
| C MLB       | DAT/SIG Pin Load                                  |       |       |            |      |
|             | 1024 FS                                           |       |       | 40         | pf   |
|             | 512 FS/256                                        |       |       | 60         | pf   |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Figure 44. MLB Timing (3-Pin Interface)

<!-- image -->

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## Program Trace Macrocell (PTM) Timing

Table 77 and Figure 45 provide I/O timing related to the PTM.

## Table 77. TRACE0 Timing

Figure 45. Trace Timing

| Parameter                 | Parameter                                  | Min                           | Max                    | Unit   |
|---------------------------|--------------------------------------------|-------------------------------|------------------------|--------|
| Switching Characteristics | Switching Characteristics                  |                               |                        |        |
| t DTRD                    | TRACE0 Data Delay From Trace Clock Maximum | (TRACE0_EXTCTLOUT × t SCLK0 ) | + (0.5 × t SCLK0 ) + 3 | ns     |
| t HTRD                    | TRACE0 Data Hold From Trace Clock Minimum  | 0.5 × t SCLK0 - 2             | ns                     |        |
| t PTRCK                   | TRACE0 Clock Period Minimum                | 2 × t SCLK0 - 1               |                        | ns     |

<!-- image -->

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## Pulse Density Modulation (PDM) Timing

Table 78, Figure 46, and Figure 47 provide PDM and I 2 S/TDM interface timing.

## Table 78. PDM Timing

| Parameter                |                                                   | Min Max   |    | Unit   |
|--------------------------|---------------------------------------------------|-----------|----|--------|
| Timing Requirements      |                                                   |           |    |        |
| t LIS                    | FSYNC Setup Before BCLK                           | 3         |    | ns     |
| t LIH                    | FSYNC Hold After BCLK                             | 4         |    | ns     |
| t BIH                    | BCLK Pulse Width High                             | 10        |    | ns     |
| t BIL                    | BCLK Pulse Width Low                              | 10        |    | ns     |
| t SETUP                  | Data Setup Before PDM_CLK                         | 12        |    | ns     |
| t HOLD                   | Data Hold After PDM_CLK                           | 4         |    | ns     |
| Switching Characteristic | Switching Characteristic                          |           |    |        |
| t SODM                   | SDATA Maximum Output Delay From BCLK Falling Edge |           | 12 | ns     |

<!-- image -->

Figure 46. Serial Port Timing

<!-- image -->

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## Pulse Width Modulator (ePWM) AC Timing

Table 79 and Figure 48 describe timing, related to the ePWM.

## Table 79. ePWM Timing

| Parameter          | Min                                            | Max                             | Unit   |
|--------------------|------------------------------------------------|---------------------------------|--------|
| Timing Requirement |                                                |                                 |        |
| t ES               | External Sync Pulse Width                      | 2 × t SYSCLK                    | ns     |
| Switching          | Characteristics                                |                                 |        |
| t DODIS            | Output Inactive (Off) After Trip Input (Max) 1 | 15                              | ns     |
| t DOE              | Output Delay After External Sync 1, 2          | 2 × t SYSCLK + 5.5 5 × t SYSCLK | ns     |

Figure 48. ePWM Timing

<!-- image -->

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## Debug Interface (JTAG Emulation Port) Timing

Table 80 and Figure 49 provide I/O timing related to the debug interface (JTAG emulator port).

## Table 80. JTAG Emulation Port Timing

| Parameter                 |                                                     | Min   | Max   | Unit   |
|---------------------------|-----------------------------------------------------|-------|-------|--------|
| Timing Requirements       | Timing Requirements                                 |       |       |        |
| t TCK                     | JTG_TCK Period                                      | 20    |       | ns     |
| t STAP                    | JTG_TDI, JTG_TMS Setup Before JTG_TCK High          | 4     |       | ns     |
| t HTAP                    | JTG_TDI, JTG_TMS Hold After JTG_TCK High            | 4     |       | ns     |
| t SSYS                    | System Inputs Setup Before JTG_TCK High 1           | 4     |       | ns     |
| t HSYS                    | System Inputs Hold After JTG_TCK High 1             | 4     |       | ns     |
| t TRSTW                   | JTG_TRST Pulse Width (Measured in JTG_TCK Cycles) 2 | 4     |       | T CK   |
| Switching Characteristics | Switching Characteristics                           |       |       |        |
| t DTDO                    | JTG_TDO Delay From JTG_TCK Low                      |       | 12    | ns     |
| t DSYS                    | System Outputs Delay After JTG_TCK Low 3            |       | 17    | ns     |

Figure 49. JTAG Port Timing

<!-- image -->

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## OUTPUT DRIVE CURRENTS

Figure 50 through Figure 61 show typical current voltage characteristics for the output drivers of the ADSP-2183x/ADSPSC83x processors. The curves represent the current drive capability of the output drivers as a function of output voltage.

<!-- image -->

Figure 50. Driver Type A Current for All Pins Operating at Less Than or Equal to 62.5 MHz (3.3 V V DD\_EXT )

<!-- image -->

Figure 51. Driver Type A Current for All Pins Operating Above 62.5 MHz and Less Than or Equal to125 MHz (3.3 V VDD\_EXT)

<!-- image -->

Figure 52. Driver Type B and Driver Type C (DDR3L Drive Strength 40 Ω)

Figure 53. Driver Type B and Driver Type C (DDR3L Drive Strength 40 Ω)

<!-- image -->

Figure 54. Driver Type B and Driver Type C (DDR3L Drive Strength 60 Ω)

<!-- image -->

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

<!-- image -->

Figure 55. Driver Type B and Driver Type C (DDR3L Drive Strength 60 Ω)

<!-- image -->

Figure 56. Driver Type B and Driver Type C (DDR3L Drive Strength 70 Ω)

<!-- image -->

Figure 57. Driver Type B and Driver Type C (DDR3L Drive Strength 70 Ω)

<!-- image -->

Figure 58. Driver Type B and Driver Type C (DDR3L Drive Strength 90 Ω)

Figure 59. Driver Type B and Driver Type C (DDR3L Drive Strength 90 Ω)

<!-- image -->

Figure 60. Driver Type B and Driver Type C (DDR3L Drive Strength100 Ω)

<!-- image -->

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Figure 61. Driver Type B and Driver Type C (DDR3L Drive Strength 100 Ω)

<!-- image -->

## TEST CONDITIONS

All timing parameters appearing in this data sheet were measured under the conditions described in this section. Figure 62 shows the measurement point for AC measurements (except output enable/disable). The measurement point, VMEAS, is VDD\_EXT/2 for VDD\_EXT (nominal) = 3.3 V.

Figure 62. Voltage Reference Levels for AC Measurements (Except Output Enable/Disable)

<!-- image -->

## Output Enable Time Measurement

Output pins are considered enabled when they make a transition from a high impedance state to the point when they start driving.

The output enable time, tENA, is the interval from the point when a reference signal reaches a high or low voltage level to the point when the output starts driving, as shown on the right side of Figure 63. If multiple pins are enabled, the measurement value is that of the first pin to start driving.

Figure 63. Output Enable/Disable

<!-- image -->

## Output Disable Time Measurement

Output pins are considered disabled when they stop driving, enter a high impedance state, and start to decay from the output high or low voltage. The output disable time, tDIS, is the interval from when a reference signal reaches a high or low voltage level to the point when the output stops driving, as shown on the left side of Figure 63).

## Capacitive Loading

Output delays and holds are based on standard capacitive loads of an average of 6 pF on all pins (see Figure 64). VLOAD is equal to VDD\_EXT/2. Figure 65 through Figure 67 show how output rise time varies with capacitance. The delay and hold specifications given must be derated by a factor derived from these figures. The graphs in Figure 65 through Figure 67 cannot be linear outside the ranges shown.

<!-- image -->

## NOTES:

THE WORST-CASE TRANSMISSION LINE DELAY IS SHOWN AND CAN BE USED FOR THE OUTPUT TIMING ANALYSIS TO REFLECT THE TRANSMISSION LINE EFFECT AND MUST BE CONSIDERED. THE TRANSMISSION LINE (TD) IS FOR LOAD ONLY AND DOES NOT AFFECT THE DATA SHEET TIMING SPECIFICATIONS.

ANALOG DEVICES RECOMMENDS USING THE IBIS MODEL TIMING FOR A GIVEN SYSTEM REQUIREMENT. IF NECESSARY, THE SYSTEM CAN INCORPORATE EXTERNAL DRIVERS TO COMPENSATE FOR ANY TIMING DIFFERENCES.

Figure 64. Equivalent Device Loading for AC Measurements (Includes All Fixtures)

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

<!-- image -->

Figure 65. Driver Type A Rise and Fall Times (10% to 90%) vs. Load Capacitance for All Pins Operating Above 62.5 MHz and Less Than or Equal to 125 MHz

Figure 66. Driver Type A Rise and Fall Times (10% to 90%) vs. Load Capacitance for All Pins Operating at Less Than or Equal to 62.5 MHz

<!-- image -->

Figure 67. Driver Type B and Driver Type C Rise and Fall Times (10% to 90%) vs. Load Capacitance for DDR3L at 100 Ω

<!-- image -->

## ENVIRONMENTAL CONDITIONS

The ADSP-2183x/ADSP-SC83x processors are rated for performance over the temperature range specified in the Operating Conditions section.

Application system thermal simulation is required for accurate temperature analysis. The thermal simulation must account for all specific 3D system design features, including, but not limited to other heat sources, use of heat sinks, use of thermal interface materials, and the system enclosure details. Thermal models of the package are available from Analog Devices under the Tools and Simulations tab of the product web page. The thermal model(s) are compatible with all major thermal simulation tools.

The use of JEDEC  JA,  JC, or  JT  thermal parameters for application system thermal estimates is not recommended as indicated in the JEDEC51 specifications:

'This methodology is not meant to and will not predict the performance of a package in an application-specific environment.'

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## ADSP-21836/21837/ADSP-SC834/SC835 400-BALL HPC BGA BALL ASSIGNMENTS

The ADSP-21836/21837/ADSP-SC834/SC835 400-Ball HPC BGA Ball Assignments (Numerical by Ball Number) table lists the package by ball number.

The ADSP-21836/21837/ADSP-SC834/SC835 400-Ball HPC Ball Assignments (Alphabetical by Ball Name) table lists the package by ball name.

## ADSP-21836/21837/SC834/SC835 400-BALL HPC BGA BALL ASSIGNMENTS (NUMERICAL BY BALL NUMBER)

| Ball No.   | BallName   | Ball No.   | BallName   | Ball No.   | BallName   | Ball No.   | BallName   |
|------------|------------|------------|------------|------------|------------|------------|------------|
| A01        | GND        | C01        | PE_01      | E01        | DNC        | G01        | GND        |
| A02        | DNC        | C02        | DNC        | E02        | DNC        | G02        | SYS_BMODE1 |
| A03        | JTG_TDO    | C03        | GND        | E03        | PD_15      | G03        | PD_06      |
| A04        | JTG_TDI    | C04        | PB_05      | E04        | DNC        | G04        | PD_11      |
| A05        | DMC0_DQ00  | C05        | JTG_TRST   | E05        | GND        | G05        | DNC        |
| A06        | DMC0_LDQS  | C06        | DMC0_DQ01  | E06        | PB_04      | G06        | VDD_INT    |
| A07        | DMC0_LDQS  | C07        | DMC0_DQ05  | E07        | SYS_RESOUT | G07        | GND        |
| A08        | DMC0_DQ08  | C08        | DMC0_DQ04  | E08        | DMC0_LDM   | G08        | GND        |
| A09        | DMC0_UDQS  | C09        | DMC0_DQ11  | E09        | GND        | G09        | GND        |
| A10        | DMC0_UDQS  | C10        | DMC0_A14   | E10        | VDD_DMC    | G10        | GND        |
| A11        | DMC0_VREF0 | C11        | DMC0_A10   | E11        | VDD_DMC    | G11        | GND        |
| A12        | DMC0_DQ12  | C12        | DMC0_A15   | E12        | VDD_DMC    | G12        | VDD_INT    |
| A13        | DMC0_A13   | C13        | DMC0_A09   | E13        | GND        | G13        | VDD_INT    |
| A14        | DMC0_A08   | C14        | DMC0_A04   | E14        | DMC0_A02   | G14        | VDD_INT    |
| A15        | DMC0_A03   | C15        | DMC0_A00   | E15        | DMC0_BA2   | G15        | GND        |
| A16        | DMC0_A01   | C16        | DMC0_CS0   | E16        | GND        | G16        | SYS_FAULT  |
| A17        | DMC0_CK    | C17        | DMC0_CAS   | E17        | PB_01      | G17        | DNC        |
| A18        | DMC0_CK    | C18        | GND        | E18        | PE_13      | G18        | PE_07      |
| A19        | PB_00      | C19        | DNC        | E19        | PE_10      | G19        | DNC        |
| A20        | GND        | C20        | DNC        | E20        | DNC        | G20        | DAI1_PIN18 |
| B01        | DNC        | D01        | PD_13      | F01        | PD_04      | H01        | GND        |
| B02        | GND        | D02        | PE_00      | F02        | PD_00      | H02        | PD_01      |
| B03        | DNC        | D03        | DNC        | F03        | PD_07      | H03        | PD_05      |
| B04        | JTG_TCK    | D04        | GND        | F04        | PD_14      | H04        | PD_10      |
| B05        | JTG_TMS    | D05        | PB_03      | F05        | DNC        | H05        | PE_02      |
| B06        | DMC0_DQ02  | D06        | SYS_HWRST  | F06        | GND        | H06        | VDD_INT    |
| B07        | DMC0_DQ07  | D07        | DMC0_DQ03  | F07        | VDD_DMC    | H07        | VDD_EXT    |
| B08        | DMC0_DQ06  | D08        | DMC0_DQ09  | F08        | VDD_DMC    | H08        | VDD_INT    |
| B09        | DMC0_DQ10  | D09        | DMC0_DQ13  | F09        | VDD_DMC    | H09        | VDD_EXT    |
| B10        | DMC0_DQ15  | D10        | DMC0_RESET | F10        | VDD_DMC    | H10        | VDD_INT    |
| B11        | DMC0_A12   | D11        | DMC0_WE    | F11        | VDD_DMC    | H11        | VDD_EXT    |
| B12        | DMC0_DQ14  | D12        | DMC0_UDM   | F12        | VDD_DMC    | H12        | VDD_INT    |
| B13        | DMC0_A11   | D13        | DMC0_BA0   | F13        | VDD_DMC    | H13        | VDD_EXT    |
| B14        | DMC0_A06   | D14        | DMC0_BA1   | F14        | VDD_DMC    | H14        | VDD_EXT    |
| B15        | DMC0_A07   | D15        | DMC0_A05   | F15        | GND        | H15        | VDD_INT    |
| B16        | DMC0_RZQ   | D16        | DMC0_RAS   | F16        | PB_02      | H16        | PE_14      |
| B17        | DMC0_CKE   | D17        | GND        | F17        | DNC        | H17        | PE_08      |
| B18        | DMC0_ODT   |            | DNC        |            | PE_15      | H18        | DNC        |
| B19        | GND        | D18        |            | F18        |            |            | DAI1_PIN17 |
| B20        | DNC        | D19 D20    | DNC DNC    | F19 F20    | PE_09 DNC  | H19 H20    | DAI1_PIN14 |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

| Ball No.   | BallName   | Ball No.   | BallName   | Ball No.   | BallName            | Ball No.   | BallName    |
|------------|------------|------------|------------|------------|---------------------|------------|-------------|
| J01        | SYS_CLKIN0 | L08        | GND        | N15        | VDD_INT             | T02        | DNC         |
| J02        | SYS_CLKOUT | L09        | GND        | N16        | DAI0_PIN13          | T03        | PC_09       |
| J03        | PD_08      | L10        | GND        | N17        | DAI1_PIN11          | T04        | PC_12       |
| J04        | PD_09      | L11        | GND        | N18        | DAI1_PIN07          | T05        | GND         |
| J05        | PD_12      | L12        | GND        | N19        | HADC0_VIN7          | T06        | VDD_INT     |
| J06        | GND        | L13        | GND        | N20        | HADC0_VREFN         | T07        | VDD_INT     |
| J07        | GND        | L14        | GND        | P01        | GND                 | T08        | GND         |
| J08        | GND        | L15        | GND        | P02        | PA_08               | T09        | PA_15       |
| J09        | GND        | L16        | DAI1_PIN01 | P03        | DNC                 | T10        | PE_03       |
| J10        | GND        | L17        | DAI1_PIN04 | P04        | PC_08               | T11        | DNC         |
| J11        | GND        | L18        | DAI1_PIN05 | P05        | DNC                 | T12        | DNC         |
| J12        | GND        | L19        | HADC0_VIN3 | P06        | VDD_INT             | T13        | DAI0_PIN09  |
| J13        | GND        | L20        | HADC0_VIN1 | P07        | GND                 | T14        | VDD_INT     |
| J14        | GND        | M01        | GND        | P08        | GND                 | T15        | VDD_INT     |
| J15        | GND        | M02        | PA_05      | P09        | GND                 | T16        | GND         |
| J16        | PE_12      | M03        | PA_06      | P10        | VDD_FPLLANA         | T17        | PC_07       |
| J17        | DNC        | M04        | DNC        | P11        | VDD_REF             | T18        | DAI0_PIN16  |
| J18        | DAI1_PIN16 | M05        | PA_10      | P12        | VDD_REF             | T19        | DAI1_PIN12  |
| J19        | DAI1_PIN13 | M06        | VDD_INT    | P13        | GND                 | T20        | DAI1_PIN19  |
| J20        | DAI1_PIN02 | M07        | VDD_EXT    | P14        | GND                 | U01        | DNC         |
| K01        | GND        | M08        | VDD_PLL    | P15        | VDD_INT             | U02        | DNC         |
| K02        | PA_00      | M09        | VDD_PLL    | P16        | PC_05               | U03        | PC_11       |
| K03        | PC_15      | M10        | VDD_INT    | P17        | DAI0_PIN15          | U04        | GND         |
| K04        | PD_02      | M11        | VDD_INT    | P18        | DAI1_PIN08          | U05        | PB_10       |
| K05        | PD_03      | M12        | VDD_INT    | P19        | HADC0_VIN4          | U06        | PB_11       |
| K06        | VDD_INT    | M13        | VDD_INT    | P20        | HADC0_VIN5          | U07        | VDD_INT     |
| K07        | VDD_EXT    | M14        | VDD_EXT    | R01        | SYS_XTAL0           | U08        | PA_12       |
| K08        | VDD_PLL    | M15        | VDD_INT    | R02        | DNC                 | U09        | DNC         |
| K09        | VDD_PLL    | M16        | DAI1_PIN10 | R03        | DNC                 | U10        | DNC         |
| K10        | VDD_INT    | M17        | DAI1_PIN09 | R04        | DNC                 | U11        | PE_04       |
| K11        | VDD_INT    | M18        | DAI1_PIN06 | R05        | DNC                 | U12        | DNC         |
| K12        | VDD_INT    | M19        | HADC0_VIN6 | R06        | GND                 | U13        | DAI0_PIN01  |
| K13        | VDD_INT    | M20        | GND        | R07        | VDD_INT             | U14        | DAI0_PIN10  |
| K14        | VDD_EXT    | N01        | SYS_BMODE2 | R08        | VDD_INT             | U15        | VDD_INT     |
| K15        | VDD_INT    | N02        | PA_07      | R09        | VDD_INT             | U16        | PC_03       |
| K16        | PE_11      | N03        | PA_09      | R10        | VDD_INT             | U17        | GND         |
| K17        | DAI1_PIN15 | N04        | DNC        | R11        | VDD_INT             | U18        | PC_04       |
| K18        | DAI1_PIN03 | N05        | DNC        | R12        | VDD_INT             | U19        | DAI0_PIN18  |
| K19        | HADC0_VIN2 | N06        | VDD_INT    | R13        | VDD_INT             | U20        | DAI1_PIN20  |
| K20        | HADC0_VIN0 | N07        | VDD_EXT    | R14        | VDD_INT             | V01        | DNC         |
| L01        | SYS_BMODE0 | N08        | GND        | R15        | GND                 | V02        | DNC         |
| L02        | PA_02      | N09        | GND        | R16        | PC_06               | V03        | GND         |
| L03        | PA_01      | N10        | GND        | R17        | DAI0_PIN14          | V04        | PB_06       |
| L04        | PA_04      | N11        | GND        | R18        | DAI0_PIN17          | V05        | PB_12       |
| L05 L06    | PA_03 GND  | N12 N13    | GND GND    | R19 R20    | HADC0_VREFP VDD_ANA | V06 V07    | PA_14 PA_11 |
| L07        | GND        | N14        | VDD_EXT    | T01        | GND                 | V08        | DNC         |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

| Ball No.   | BallName   | Ball No.                   | BallName                   |
|------------|------------|----------------------------|----------------------------|
| V09        | DNC        | Y16                        | DAI0_PIN03                 |
| V10        | DNC        | Y17                        | DAI0_PIN06                 |
| V11        | PE_06      | Y18                        | DAI0_PIN12                 |
| V12        | DNC        | Y19                        | DAI0_PIN19                 |
| V13        | DNC        | Y20                        | GND                        |
| V14        | DAI0_PIN08 | DNC=Donotmakeanyelectrical | DNC=Donotmakeanyelectrical |
| V15        | DAI0_PIN05 | connection to this ball.   | connection to this ball.   |
| V16        | DAI0_PIN11 |                            |                            |
| V17        | PC_02      |                            |                            |
| V18        | GND        |                            |                            |
| V19        | PC_01      |                            |                            |
| V20        | PB_15      |                            |                            |
| W01        | PC_10      |                            |                            |
| W02        | GND        |                            |                            |
| W03        | DNC        |                            |                            |
| W04        | PC_13      |                            |                            |
| W05        | PB_13      |                            |                            |
| W06        | DNC        |                            |                            |
| W07        | DNC        |                            |                            |
| W08        | DNC        |                            |                            |
| W09        | DNC        |                            |                            |
| W10        | PC_14      |                            |                            |
| W11        | PE_05      |                            |                            |
| W12        | DNC        |                            |                            |
| W13        | DAI0_PIN04 |                            |                            |
| W14        | DNC        |                            |                            |
| W15        | DAI0_PIN02 |                            |                            |
| W16        | DAI0_PIN07 |                            |                            |
| W17        | PB_14      |                            |                            |
| W18        | DAI0_PIN20 |                            |                            |
| W19        | GND        |                            |                            |
| W20        | PC_00      |                            |                            |
| Y01        | GND        |                            |                            |
| Y02        | PB_08      |                            |                            |
| Y03        | PB_07      |                            |                            |
| Y04        | PB_09      |                            |                            |
| Y05        | PA_13      |                            |                            |
| Y06        | DNC        |                            |                            |
| Y07        | DNC        |                            |                            |
| Y08        | DNC        |                            |                            |
| Y09        | DNC        |                            |                            |
| Y10        | DNC        |                            |                            |
| Y11        | DNC        |                            |                            |
| Y12        | DNC        |                            |                            |
| Y13        | DNC        |                            |                            |
| Y14 Y15    | DNC DNC    |                            |                            |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## ADSP-21836/21837/SC834/SC835 400-BALL HPC BGA BALL ASSIGNMENTS (ALPHABETICAL BY BALL NAME)

| BallName          | Ball No.   | BallName             | Ball No.   | BallName   | Ball No.   | BallName   | Ball No.   |
|-------------------|------------|----------------------|------------|------------|------------|------------|------------|
| DAI0_PIN01        | U13        | DMC0_A06             | B14        | DNC        | A02        | DNC        | V13        |
| DAI0_PIN02        | W15        | DMC0_A07             | B15        | DNC        | B01        | DNC        | W03        |
| DAI0_PIN03        | Y16        | DMC0_A08             | A14        | DNC        | B03        | DNC        | W06        |
| DAI0_PIN04        | W13        | DMC0_A09             | C13        | DNC        | B20        | DNC        | W07        |
| DAI0_PIN05        | V15        | DMC0_A10             | C11        | DNC        | C02        | DNC        | W08        |
| DAI0_PIN06        | Y17        | DMC0_A11             | B13        | DNC        | C19        | DNC        | W09        |
| DAI0_PIN07        | W16        | DMC0_A12             | B11        | DNC        | C20        | DNC        | W12        |
| DAI0_PIN08        | V14        | DMC0_A13             | A13        | DNC        | D03        | DNC        | W14        |
| DAI0_PIN09        | T13        | DMC0_A14             | C10        | DNC        | D18        | DNC        | Y06        |
| DAI0_PIN10        | U14        | DMC0_A15             | C12        | DNC        | D19        | DNC        | Y07        |
| DAI0_PIN11        | V16        | DMC0_BA0             | D13        | DNC        | D20        | DNC        | Y08        |
| DAI0_PIN12        | Y18        | DMC0_BA1             | D14        | DNC        | E01        | DNC        | Y09        |
| DAI0_PIN13        | N16        | DMC0_BA2             | E15        | DNC        | E02        | DNC        | Y10        |
| DAI0_PIN14        | R17        | DMC0_CAS             | C17        | DNC        | E04        | DNC        | Y11        |
| DAI0_PIN15        | P17        | DMC0_CK              | A17        | DNC        | E20        | DNC        | Y12        |
| DAI0_PIN16        | T18        | DMC0_CK              | A18        | DNC        | F05        | DNC        | Y13        |
| DAI0_PIN17        | R18        | DMC0_CKE             | B17        | DNC        | F17        | DNC        | Y14        |
| DAI0_PIN18        | U19        | DMC0_CS0             | C16        | DNC        | F20        | DNC        | Y15        |
| DAI0_PIN19        | Y19        | DMC0_DQ00            | A05        | DNC        | G05        | GND        | A01        |
| DAI0_PIN20        | W18        | DMC0_DQ01            | C06        | DNC        | G17        | GND        | A20        |
| DAI1_PIN01        | L16        | DMC0_DQ02            | B06        | DNC        | G19        | GND        | B02        |
| DAI1_PIN02        | J20        | DMC0_DQ03            | D07        | DNC        | H18        | GND        | B19        |
| DAI1_PIN03        | K18        | DMC0_DQ04            | C08        | DNC        | J17        | GND        | C03        |
| DAI1_PIN04        | L17        | DMC0_DQ05            | C07        | DNC        | M04        | GND        | C18        |
| DAI1_PIN05        | L18        | DMC0_DQ06            | B08        | DNC        | N04        | GND        | D04        |
| DAI1_PIN06        | M18        | DMC0_DQ07            | B07        | DNC        | N05        | GND        | D17        |
| DAI1_PIN07        | N18        | DMC0_DQ08            | A08        | DNC        | P03        | GND        | E05        |
| DAI1_PIN08        | P18        | DMC0_DQ09            | D08        | DNC        | P05        | GND        | E09        |
| DAI1_PIN09        | M17        | DMC0_DQ10            | B09        | DNC        | R02        | GND        | E13        |
| DAI1_PIN10        | M16        | DMC0_DQ11            | C09        | DNC        | R03        | GND        | E16        |
| DAI1_PIN11        | N17        | DMC0_DQ12            | A12        | DNC        | R04        | GND        | F06        |
| DAI1_PIN12        | T19        | DMC0_DQ13            | D09        | DNC        | R05        | GND        | F15        |
| DAI1_PIN13        | J19        | DMC0_DQ14            | B12        | DNC        | T02        | GND        | G01        |
| DAI1_PIN14        | H20        | DMC0_DQ15            | B10        | DNC        | T11        | GND        | G07        |
| DAI1_PIN15        | K17        | DMC0_LDM             | E08        | DNC        | T12        | GND        | G08        |
| DAI1_PIN16        | J18        | DMC0_LDQS            | A06        | DNC        | U01        | GND        | G09        |
| DAI1_PIN17        | H19        | DMC0_LDQS            | A07        | DNC        | U02        | GND        | G10        |
| DAI1_PIN18        | G20        | DMC0_ODT             | B18        | DNC        | U09        | GND        | G11        |
| DAI1_PIN19        | T20        | DMC0_RAS             | D16        | DNC        | U10        | GND        | G15        |
| DAI1_PIN20        | U20        | DMC0_RESET           | D10        | DNC        | U12        | GND        | H01        |
| DMC0_A00          | C15        | DMC0_RZQ             | B16        | DNC        | V01        | GND        | J06        |
| DMC0_A01          | A16        | DMC0_UDM             | D12        | DNC        | V02        | GND        | J07        |
|                   |            |                      | A09        | DNC        | V08        | GND        |            |
| DMC0_A02          | E14        | DMC0_UDQS            |            |            |            |            | J08        |
| DMC0_A03 DMC0_A04 | A15 C14    | DMC0_UDQS DMC0_VREF0 | A10 A11    | DNC DNC    | V09 V10    | GND GND    | J09 J10    |
| DMC0_A05          | D15        | DMC0_WE              | D11        | DNC        | V12        | GND        | J11        |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

| BallName              | Ball No.   | BallName    | Ball No.   | BallName              | Ball No.   | BallName        | Ball No.    |
|-----------------------|------------|-------------|------------|-----------------------|------------|-----------------|-------------|
| GND                   | J12        | HADC0_VIN4  | P19        | PC_04                 | U18        | SYS_CLKIN0      | J01         |
| GND                   | J13        | HADC0_VIN5  | P20        | PC_05                 | P16        | SYS_CLKOUT      | J02         |
| GND                   | J14        | HADC0_VIN6  | M19        | PC_06                 | R16        | SYS_FAULT       | G16         |
| GND                   | J15        | HADC0_VIN7  | N19        | PC_07                 | T17        | SYS_HWRST       | D06         |
| GND                   | K01        | HADC0_VREFN | N20        | PC_08                 | P04        | SYS_RESOUT      | E07         |
| GND                   | L06        | HADC0_VREFP | R19        | PC_09                 | T03        | SYS_XTAL0       | R01         |
| GND                   | L07        | JTG_TCK     | B04        | PC_10                 | W01        | VDD_ANA         | R20         |
| GND                   | L08        | JTG_TDI     | A04        | PC_11                 | U03        | VDD_DMC         | E10         |
| GND                   | L09        | JTG_TDO     | A03        | PC_12                 | T04        | VDD_DMC         | E11         |
| GND                   | L10        | JTG_TMS     | B05        | PC_13                 | W04        | VDD_DMC         | E12         |
| GND                   | L11        | JTG_TRST    | C05        | PC_14                 | W10        | VDD_DMC         | F07         |
| GND                   | L12        | PA_00       | K02        | PC_15                 | K03        | VDD_DMC         | F08         |
| GND                   | L13        | PA_01       | L03        | PD_00                 | F02        | VDD_DMC         | F09         |
| GND                   | L14        | PA_02       | L02        | PD_01                 | H02        | VDD_DMC         | F10         |
| GND                   | L15        | PA_03       | L05        | PD_02                 | K04        | VDD_DMC         | F11         |
| GND                   | M01        | PA_04       | L04        | PD_03                 | K05        | VDD_DMC         | F12         |
| GND                   | M20        | PA_05       | M02        | PD_04                 | F01        | VDD_DMC         | F13         |
| GND                   | N08        | PA_06       | M03        | PD_05                 | H03        | VDD_DMC         | F14         |
| GND                   | N09        | PA_07       | N02        | PD_06                 | G03        | VDD_EXT         | H07         |
| GND                   | N10        | PA_08       | P02        | PD_07                 | F03        | VDD_EXT         | H09         |
| GND                   | N11        | PA_09       | N03        | PD_08                 | J03        | VDD_EXT         | H11         |
| GND                   | N12        | PA_10       | M05        | PD_09                 | J04        | VDD_EXT         | H13         |
| GND                   | N13        | PA_11       | V07        | PD_10                 | H04        | VDD_EXT         | H14         |
| GND                   | P01        | PA_12       | U08        | PD_11                 | G04        | VDD_EXT         | K07         |
| GND                   | P07        | PA_13       | Y05        | PD_12                 | J05        | VDD_EXT         | K14         |
| GND                   | P08        | PA_14       | V06        | PD_13                 | D01        | VDD_EXT         | M07         |
| GND                   | P09        | PA_15       | T09        | PD_14                 | F04        | VDD_EXT         | M14         |
| GND                   | P13        | PB_00       | A19        | PD_15                 | E03        | VDD_EXT         | N07         |
| GND                   | P14        | PB_01       | E17        | PE_00                 | D02        | VDD_EXT         | N14         |
| GND                   | R06        | PB_02       | F16        | PE_01                 | C01        | VDD_FPLLANA     | P10         |
| GND                   | R15        | PB_03       | D05        | PE_02                 | H05        | VDD_INT         | G06         |
| GND                   | T01        | PB_04       | E06        | PE_03                 | T10        | VDD_INT         | G12         |
| GND                   | T05        | PB_05       | C04        | PE_04                 | U11        | VDD_INT         | G13         |
| GND                   | T08        | PB_06       | V04        | PE_05                 | W11        | VDD_INT         | G14         |
| GND                   | T16        | PB_07       | Y03        | PE_06                 | V11        | VDD_INT         | H06         |
| GND                   | U04        | PB_08       | Y02        | PE_07                 | G18        | VDD_INT         | H08         |
| GND                   | U17        | PB_09       | Y04        | PE_08                 | H17        | VDD_INT         | H10         |
| GND                   | V03        | PB_10       | U05        | PE_09                 | F19        | VDD_INT         | H12         |
| GND                   | V18        | PB_11       | U06        | PE_10                 | E19        | VDD_INT         | H15         |
| GND                   | W02        | PB_12       | V05        | PE_11                 | K16        | VDD_INT         | K06         |
| GND                   | W19        | PB_13       | W05        | PE_12                 | J16        | VDD_INT         | K10         |
| GND                   | Y01        | PB_14       | W17        | PE_13                 | E18        | VDD_INT         | K11         |
| GND                   | Y20        | PB_15       | V20        | PE_14                 | H16        | VDD_INT         | K12         |
|                       |            |             |            | PE_15                 | F18        |                 | K13         |
| HADC0_VIN0            | K20        | PC_00       | W20        |                       |            | VDD_INT         |             |
| HADC0_VIN1 HADC0_VIN2 | L20 K19    | PC_01 PC_02 | V19 V17    | SYS_BMODE0 SYS_BMODE1 | L01 G02    | VDD_INT VDD_INT | K15 M06 M10 |
| HADC0_VIN3            | L19        | PC_03       | U16        | SYS_BMODE2            | N01        | VDD_INT         |             |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

| BallName   | Ball No.   |
|------------|------------|
| VDD_INT    | M11        |
| VDD_INT    | M12        |
| VDD_INT    | M13        |
| VDD_INT    | M15        |
| VDD_INT    | N06        |
| VDD_INT    | N15        |
| VDD_INT    | P06        |
| VDD_INT    | P15        |
| VDD_INT    | R07        |
| VDD_INT    | R08        |
| VDD_INT    | R09        |
| VDD_INT    | R10        |
| VDD_INT    | R11        |
| VDD_INT    | R12        |
| VDD_INT    | R13        |
| VDD_INT    | R14        |
| VDD_INT    | T06        |
| VDD_INT    | T07        |
| VDD_INT    | T14        |
| VDD_INT    | T15        |
| VDD_INT    | U07        |
| VDD_INT    | U15        |
| VDD_PLL    | K08        |
| VDD_PLL    | K09        |
| VDD_PLL    | M08        |
| VDD_PLL    | M09        |
| VDD_REF    | P11        |
| VDD_REF    | P12        |

DNC = Do not make any electrical connection to this ball.

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

Figure 68. ADSP-21836/21837/ADSP-SC834/SC835 400-Ball HPC BGA Configuration

<!-- image -->

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## ADSP-21834/21835 400-BALL LPC BGA BALL ASSIGNMENTS

The ADSP-21834/21835 400-Ball LPC BGA Ball Assignments (Numerical by Ball Number) table lists the package by ball number.

The ADSP-21834/21835 400-Ball LPC Ball Assignments (Alphabetical by Ball Name) table lists the package by ball name.

## ADSP-21834/21835 400-BALL LPC BGA BALL ASSIGNMENTS (NUMERICAL BY BALL NUMBER)

| Ball No.   | BallName   | Ball No.   | BallName   | Ball No.   | BallName   | Ball No.   | BallName   |
|------------|------------|------------|------------|------------|------------|------------|------------|
| A01        | GND        | C01        | DMC0_LDM   | E01        | DMC0_DQ05  | G01        | DMC0_DQ04  |
| A02        | DMC0_DQ11  | C02        | DMC0_DQ08  | E02        | DMC0_DQ06  | G02        | DMC0_DQ02  |
| A03        | DMC0_DQ10  | C03        | GND        | E03        | GND        | G03        | GND        |
| A04        | DMC0_UDQS  | C04        | GND        | E04        | VDD_INT    | G04        | VDD_INT    |
| A05        | DMC0_DQ15  | C05        | GND        | E05        | VDD_INT    | G05        | VDD_INT    |
| A06        | DMC0_UDM   | C06        | GND        | E06        | VDD_INT    | G06        | VDD_DMC    |
| A07        | PB_00      | C07        | PB_03      | E07        | VDD_INT    | G07        | VDD_DMC    |
| A08        | SYS_BMODE2 | C08        | PB_05      | E08        | VDD_INT    | G08        | VDD_DMC    |
| A09        | SYS_HWRST  | C09        | PB_01      | E09        | VDD_INT    | G09        | VDD_DMC    |
| A10        | JTG_TRST   | C10        | SYS_RESOUT | E10        | VDD_INT    | G10        | VDD_REF    |
| A11        | SYS_FAULT  | C11        | JTG_TDO    | E11        | VDD_INT    | G11        | VDD_REF    |
| A12        | DMC0_WE    | C12        | JTG_TMS    | E12        | VDD_INT    | G12        | VDD_DMC    |
| A13        | DMC0_A14   | C13        | JTG_TDI    | E13        | VDD_INT    | G13        | VDD_DMC    |
| A14        | DMC0_A13   | C14        | GND        | E14        | VDD_INT    | G14        | VDD_DMC    |
| A15        | DMC0_A10   | C15        | GND        | E15        | VDD_INT    | G15        | VDD_DMC    |
| A16        | DMC0_A08   | C16        | GND        | E16        | VDD_INT    | G16        | VDD_INT    |
| A17        | DMC0_BA1   | C17        | GND        | E17        | VDD_INT    | G17        | VDD_INT    |
| A18        | DMC0_A07   | C18        | GND        | E18        | GND        | G18        | GND        |
| A19        | DMC0_A04   | C19        | DMC0_A03   | E19        | DMC0_BA2   | G19        | DMC0_RZQ   |
| A20        | GND        | C20        | DMC0_A02   | E20        | DMC0_CAS   | G20        | DMC0_VREF1 |
| B01        | GND        | D01        | DMC0_DQ07  | F01        | DMC0_LDQS  | H01        | DMC0_DQ03  |
| B02        | GND        | D02        | GND        | F02        | DMC0_LDQS  | H02        | GND        |
| B03        | DMC0_DQ12  | D03        | DMC0_DQ09  | F03        | GND        | H03        | GND        |
| B04        | DMC0_UDQS  | D04        | GND        | F04        | VDD_INT    | H04        | VDD_INT    |
| B05        | DMC0_DQ14  | D05        | GND        | F05        | VDD_INT    | H05        | VDD_INT    |
| B06        | DMC0_DQ13  | D06        | GND        | F06        | VDD_DMC    | H06        | VDD_DMC    |
| B07        | PB_04      | D07        | GND        | F07        | VDD_DMC    | H07        | VDD_DMC    |
| B08        | PB_02      | D08        | VDD_EXT    | F08        | VDD_DMC    | H08        | GND        |
| B09        | SYS_BMODE1 | D09        | VDD_EXT    | F09        | VDD_DMC    | H09        | GND        |
| B10        | SYS_BMODE0 | D10        | VDD_EXT    | F10        | VDD_DMC    | H10        | GND        |
| B11        | JTG_TCK    | D11        | VDD_EXT    | F11        | VDD_DMC    | H11        | GND        |
| B12        | DMC0_RESET | D12        | GND        | F12        | VDD_DMC    | H12        | GND        |
| B13        | DMC0_A15   | D13        | GND        | F13        | VDD_DMC    | H13        | GND        |
| B14        | DMC0_A12   | D14        | GND        | F14        | VDD_DMC    | H14        | VDD_DMC    |
| B15        | DMC0_A11   | D15        | GND        | F15        | VDD_DMC    | H15        | VDD_DMC    |
| B16        | DMC0_A09   | D16        | GND        | F16        | VDD_INT    | H16        | VDD_INT    |
| B17        | DMC0_BA0   | D17        | GND        | F17        | VDD_INT    | H17        | VDD_INT    |
|            |            | D18        |            | F18        |            | H18        | GND        |
| B18        | DMC0_A06   |            | GND        |            | GND        |            |            |
| B20        | DMC0_A05   | D20        | DMC0_A01   | F20        | DMC0_CS0   | H20        | DMC0_CKE   |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

| Ball No.   | BallName        | Ball No.   | BallName    | Ball No.   | BallName              | Ball No.   | BallName         |
|------------|-----------------|------------|-------------|------------|-----------------------|------------|------------------|
| J01        | DMC0_DQ01       | L09        | GND         | N17        | GND                   | T05        | VDD_EXT          |
| J02        | DMC0_DQ00       | L10        | GND         | N18        | GND                   | T06        | VDD_REF          |
| J03        | GND             | L11        | GND         | N19        | HADC0_VIN0            | T07        | VDD_REF          |
| J04        | DMC0_VREF0      | L12        | GND         | N20        | HADC0_VIN1            | T08        | VDD_REF          |
| J05        | VDD_INT         | L13        | GND         | P01        | GND                   | T09        | VDD_REF          |
| J06        | VDD_DMC         | L14        | VDD_INT     | P02        | PA_02                 | T10        | VDD_REF          |
| J07        | VDD_DMC         | L15        | VDD_INT     | P03        | PA_01                 | T11        | VDD_REF          |
| J08        | GND             | L16        | GND         | P04        | VDD_EXT               | T12        | VDD_REF          |
| J09        | GND             | L17        | GND         | P05        | VDD_REF               | T13        | VDD_REF          |
| J10        | GND             | L18        | HADC0_VREFN | P06        | VDD_INT               | T14        | VDD_REF          |
| J11        | GND             | L19        | VDD_ANA     | P07        | VDD_INT               | T15        | VDD_REF          |
| J12        | GND             | L20        | HADC0_VREFP | P08        | VDD_INT               | T16        | VDD_EXT          |
| J13        | GND             | M01        | GND         | P09        | VDD_INT               | T17        | GND              |
| J14        | VDD_INT         | M02        | GND         | P10        | VDD_INT               | T18        | DAI1_PIN09       |
| J15        | VDD_INT         | M03        | SYS_CLKOUT  | P11        | VDD_INT               | T19        | DAI1_PIN06       |
| J16        | VDD_INT         | M04        | VDD_EXT     | P12        | VDD_INT               | T20        | DAI1_PIN04       |
| J17        | VDD_INT         | M05        | VDD_INT     | P13        | VDD_INT               | U01        | GND              |
| J18        | GND             | M06        | VDD_INT     | P14        | VDD_INT               | U02        | PA_10            |
| J19        | DMC0_CK         | M07        | VDD_PLL     | P15        | VDD_REF               | U03        | PA_08            |
| J20        | DMC0_CK         | M08        | GND         | P16        | VDD_EXT               | U04        | GND              |
| K01        | GND             | M09        | GND         | P17        | GND                   | U05        | GND              |
| K02        | GND             | M10        | GND         | P18        | DAI1_PIN02            | U06        | VDD_EXT          |
| K03        | GND             | M11        | GND         | P19        | GND                   | U07        | VDD_EXT          |
| K04        | VDD_EXT         | M12        | GND         | P20        | GND                   | U08        | VDD_EXT          |
| K05        | VDD_INT         | M13        | GND         | R01        | PA_04                 | U09        | VDD_EXT          |
| K06        | VDD_PLL         | M14        | VDD_INT     | R02        | GND                   | U10        | VDD_EXT          |
| K07        | VDD_DMC         | M15        | VDD_REF     | R03        | PA_03                 | U11        | VDD_EXT          |
| K08        | GND             | M16        | VDD_EXT     | R04        | VDD_EXT               | U12        | VDD_EXT          |
| K09        | GND             | M17        | GND         | R05        | VDD_REF               | U13        | VDD_EXT          |
| K10        | GND             | M18        | GND         | R06        | VDD_INT               | U14        | VDD_EXT          |
| K11        | GND             | M19        | HADC0_VIN2  | R07        | VDD_INT               | U15        | VDD_EXT          |
| K12        | GND             | M20        | HADC0_VIN3  | R08        | VDD_INT               | U16        | GND              |
| K13        | GND             | N01        | SYS_CLKIN0  | R09        | VDD_INT               | U17        | GND              |
| K14        | VDD_INT         | N02        | GND         | R10        | VDD_INT               | U18        | DAI1_PIN10       |
| K15        | VDD_INT         | N03        | PA_00       | R11        | VDD_INT               | U19        | DAI1_PIN07       |
| K16        | VDD_INT         | N04        | VDD_EXT     | R12        | VDD_INT               | U20        | DAI1_PIN05       |
| K17        | GND             | N05        | VDD_FPLLANA | R13        | VDD_INT               | V01        | PA_07            |
| K18        | GND             | N06        | VDD_INT     | R14        | VDD_INT               | V02        | PA_09            |
| K19        | GND             | N07        | VDD_INT     | R15        | VDD_REF               | V03        | GND              |
| K20        | GND             | N08        | GND         | R16        | VDD_EXT               | V04        | GND              |
| L01        | SYS_XTAL0       | N09        | GND         | R17        | GND                   | V05        | PB_06            |
| L02 L03    | GND             | N11        | GND         | R19        | DAI1_PIN03 DAI1_PIN08 | V07        | PB_09 PB_12      |
|            | GND             | N10        | GND         | R18        |                       | V06        |                  |
| L04        | VDD_EXT VDD_INT | N12 N13    | GND GND     | R20        | DAI1_PIN01            | V08        | PA_11 DAI0_PIN02 |
| L06        | VDD_PLL         | N14        | VDD_INT     | T02        | PA_05                 | V10        | DAI0_PIN06       |
| L05        |                 |            |             | T01        | GND                   | V09        |                  |
| L08        | GND             | N16        | VDD_EXT     | T04        | GND                   | V12        | DAI0_PIN20       |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

| Ball No.   | BallName   |
|------------|------------|
| V13        | PC_00      |
| V14        | PC_05      |
| V15        | GND        |
| V16        | GND        |
| V17        | DAI1_PIN19 |
| V18        | GND        |
| V19        | DAI1_PIN11 |
| V20        | DAI1_PIN12 |
| W01        | GND        |
| W02        | GND        |
| W03        | PB_08      |
| W04        | PB_07      |
| W05        | PB_13      |
| W06        | PA_12      |
| W07        | PA_14      |
| W08        | PA_15      |
| W09        | DAI0_PIN03 |
| W10        | DAI0_PIN05 |
| W11        | DAI0_PIN08 |
| W12        | DAI0_PIN12 |
| W13        | DAI0_PIN19 |
| W14        | PB_15      |
| W15        | PC_01      |
| W16        | PC_03      |
| W17        | PC_06      |
| W18        | DAI1_PIN20 |
| W19        | GND        |
| W20        | GND        |
| Y01        | GND        |
| Y02        | GND        |
| Y03        | PB_10      |
| Y04        | PB_11      |
| Y05        | GND        |
| Y06        | PA_13      |
| Y07        | GND        |
| Y08        | DAI0_PIN01 |
| Y09        | DAI0_PIN04 |
| Y10        | DAI0_PIN07 |
| Y11        | DAI0_PIN10 |
| Y12        | DAI0_PIN11 |
| Y13        | GND        |
| Y14        | PB_14      |
| Y15        | PC_02      |
| Y16        | GND        |
| Y17        | PC_04      |
| Y18        | PC_07      |
| Y19        | GND        |
| Y20        | GND        |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## ADSP-21834/21835 400-BALL LPC BGA BALL ASSIGNMENTS (ALPHABETICAL BY BALL NAME)

| BallName   | Ball No.   | BallName   | Ball No.   | BallName   | Ball No.   | BallName   | Ball No.   |
|------------|------------|------------|------------|------------|------------|------------|------------|
| DAI0_PIN01 | Y08        | DMC0_BA2   | E19        | GND        | C16        | GND        | K13        |
| DAI0_PIN02 | V09        | DMC0_CAS   | E20        | GND        | C17        | GND        | K17        |
| DAI0_PIN03 | W09        | DMC0_CK    | J19        | GND        | C18        | GND        | K18        |
| DAI0_PIN04 | Y09        | DMC0_CK    | J20        | GND        | D02        | GND        | K19        |
| DAI0_PIN05 | W10        | DMC0_CKE   | H20        | GND        | D04        | GND        | K20        |
| DAI0_PIN06 | V10        | DMC0_CS0   | F20        | GND        | D05        | GND        | L02        |
| DAI0_PIN07 | Y10        | DMC0_DQ00  | J02        | GND        | D06        | GND        | L03        |
| DAI0_PIN08 | W11        | DMC0_DQ01  | J01        | GND        | D07        | GND        | L08        |
| DAI0_PIN09 | V11        | DMC0_DQ02  | G02        | GND        | D12        | GND        | L09        |
| DAI0_PIN10 | Y11        | DMC0_DQ03  | H01        | GND        | D13        | GND        | L10        |
| DAI0_PIN11 | Y12        | DMC0_DQ04  | G01        | GND        | D14        | GND        | L11        |
| DAI0_PIN12 | W12        | DMC0_DQ05  | E01        | GND        | D15        | GND        | L12        |
| DAI0_PIN19 | W13        | DMC0_DQ06  | E02        | GND        | D16        | GND        | L13        |
| DAI0_PIN20 | V12        | DMC0_DQ07  | D01        | GND        | D17        | GND        | L16        |
| DAI1_PIN01 | R20        | DMC0_DQ08  | C02        | GND        | D18        | GND        | L17        |
| DAI1_PIN02 | P18        | DMC0_DQ09  | D03        | GND        | E03        | GND        | M01        |
| DAI1_PIN03 | R18        | DMC0_DQ10  | A03        | GND        | E18        | GND        | M02        |
| DAI1_PIN04 | T20        | DMC0_DQ11  | A02        | GND        | F03        | GND        | M08        |
| DAI1_PIN05 | U20        | DMC0_DQ12  | B03        | GND        | F18        | GND        | M09        |
| DAI1_PIN06 | T19        | DMC0_DQ13  | B06        | GND        | G03        | GND        | M10        |
| DAI1_PIN07 | U19        | DMC0_DQ14  | B05        | GND        | G18        | GND        | M11        |
| DAI1_PIN08 | R19        | DMC0_DQ15  | A05        | GND        | H02        | GND        | M12        |
| DAI1_PIN09 | T18        | DMC0_LDM   | C01        | GND        | H03        | GND        | M13        |
| DAI1_PIN10 | U18        | DMC0_LDQS  | F01        | GND        | H08        | GND        | M17        |
| DAI1_PIN11 | V19        | DMC0_LDQS  | F02        | GND        | H09        | GND        | M18        |
| DAI1_PIN12 | V20        | DMC0_ODT   | H19        | GND        | H10        | GND        | N02        |
| DAI1_PIN19 | V17        | DMC0_RAS   | F19        | GND        | H11        | GND        | N08        |
| DAI1_PIN20 | W18        | DMC0_RESET | B12        | GND        | H12        | GND        | N09        |
| DMC0_A00   | D19        | DMC0_RZQ   | G19        | GND        | H13        | GND        | N10        |
| DMC0_A01   | D20        | DMC0_UDM   | A06        | GND        | H18        | GND        | N11        |
| DMC0_A02   | C20        | DMC0_UDQS  | A04        | GND        | J03        | GND        | N12        |
| DMC0_A03   | C19        | DMC0_UDQS  | B04        | GND        | J08        | GND        | N13        |
| DMC0_A04   | A19        | DMC0_VREF0 | J04        | GND        | J09        | GND        | N17        |
| DMC0_A05   | B20        | DMC0_VREF1 | G20        | GND        | J10        | GND        | N18        |
| DMC0_A06   | B18        | DMC0_WE    | A12        | GND        | J11        | GND        | P01        |
| DMC0_A07   | A18        | GND        | A01        | GND        | J12        | GND        | P17        |
| DMC0_A08   | A16        | GND        | A20        | GND        | J13        | GND        | P19        |
| DMC0_A09   | B16        | GND        | B01        | GND        | J18        | GND        | P20        |
| DMC0_A10   | A15        | GND        | B02        | GND        | K01        | GND        | R02        |
| DMC0_A11   | B15        | GND        | B19        | GND        | K02        | GND        | R17        |
| DMC0_A12   | B14        | GND        | C03        | GND        | K03        | GND        | T01        |
| DMC0_A13   | A14        | GND        | C04        | GND        | K08        | GND        | T04        |
| DMC0_A14   | A13        | GND        | C05        | GND        | K09        | GND        | T17        |
| DMC0_BA0   | B17        | GND GND    | C14        | GND        | K11        | GND GND    | U04        |
| DMC0_BA1   | A17        |            | C15        | GND        | K12        |            | U05        |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

| BallName    | Ball No.   | BallName   | Ball No.   | BallName    | Ball No.   | BallName   | Ball No.   |
|-------------|------------|------------|------------|-------------|------------|------------|------------|
| GND         | U16        | PB_01      | C09        | VDD_DMC     | G12        | VDD_INT    | E13        |
| GND         | U17        | PB_02      | B08        | VDD_DMC     | G13        | VDD_INT    | E14        |
| GND         | V03        | PB_03      | C07        | VDD_DMC     | G14        | VDD_INT    | E15        |
| GND         | V04        | PB_04      | B07        | VDD_DMC     | G15        | VDD_INT    | E16        |
| GND         | V15        | PB_05      | C08        | VDD_DMC     | H06        | VDD_INT    | E17        |
| GND         | V16        | PB_06      | V05        | VDD_DMC     | H07        | VDD_INT    | F04        |
| GND         | V18        | PB_07      | W04        | VDD_DMC     | H14        | VDD_INT    | F05        |
| GND         | W01        | PB_08      | W03        | VDD_DMC     | H15        | VDD_INT    | F16        |
| GND         | W02        | PB_09      | V06        | VDD_DMC     | J06        | VDD_INT    | F17        |
| GND         | W19        | PB_10      | Y03        | VDD_DMC     | J07        | VDD_INT    | G04        |
| GND         | W20        | PB_11      | Y04        | VDD_DMC     | K07        | VDD_INT    | G05        |
| GND         | Y01        | PB_12      | V07        | VDD_EXT     | D08        | VDD_INT    | G16        |
| GND         | Y02        | PB_13      | W05        | VDD_EXT     | D09        | VDD_INT    | G17        |
| GND         | Y05        | PB_14      | Y14        | VDD_EXT     | D10        | VDD_INT    | H04        |
| GND         | Y07        | PB_15      | W14        | VDD_EXT     | D11        | VDD_INT    | H05        |
| GND         | Y13        | PC_00      | V13        | VDD_EXT     | K04        | VDD_INT    | H16        |
| GND         | Y16        | PC_01      | W15        | VDD_EXT     | L04        | VDD_INT    | H17        |
| GND         | Y19        | PC_02      | Y15        | VDD_EXT     | M04        | VDD_INT    | J05        |
| GND         | Y20        | PC_03      | W16        | VDD_EXT     | M16        | VDD_INT    | J14        |
| HADC0_VIN0  | N19        | PC_04      | Y17        | VDD_EXT     | N04        | VDD_INT    | J15        |
| HADC0_VIN1  | N20        | PC_05      | V14        | VDD_EXT     | N16        | VDD_INT    | J16        |
| HADC0_VIN2  | M19        | PC_06      | W17        | VDD_EXT     | P04        | VDD_INT    | J17        |
| HADC0_VIN3  | M20        | PC_07      | Y18        | VDD_EXT     | P16        | VDD_INT    | K05        |
| HADC0_VREFN | L18        | SYS_BMODE0 | B10        | VDD_EXT     | R04        | VDD_INT    | K14        |
| HADC0_VREFP | L20        | SYS_BMODE1 | B09        | VDD_EXT     | R16        | VDD_INT    | K15        |
| JTG_TCK     | B11        | SYS_BMODE2 | A08        | VDD_EXT     | T05        | VDD_INT    | K16        |
| JTG_TDI     | C13        | SYS_CLKIN0 | N01        | VDD_EXT     | T16        | VDD_INT    | L05        |
| JTG_TDO     | C11        | SYS_CLKOUT | M03        | VDD_EXT     | U06        | VDD_INT    | L14        |
| JTG_TMS     | C12        | SYS_FAULT  | A11        | VDD_EXT     | U07        | VDD_INT    | L15        |
| JTG_TRST    | A10        | SYS_HWRST  | A09        | VDD_EXT     | U08        | VDD_INT    | M05        |
| PA_00       | N03        | SYS_RESOUT | C10        | VDD_EXT     | U09        | VDD_INT    | M06        |
| PA_01       | P03        | SYS_XTAL0  | L01        | VDD_EXT     | U10        | VDD_INT    | M14        |
| PA_02       | P02        | VDD_ANA    | L19        | VDD_EXT     | U11        | VDD_INT    | N06        |
| PA_03       | R03        | VDD_DMC    | F06        | VDD_EXT     | U12        | VDD_INT    | N07        |
| PA_04       | R01        | VDD_DMC    | F07        | VDD_EXT     | U13        | VDD_INT    | N14        |
| PA_05       | T02        | VDD_DMC    | F08        | VDD_EXT     | U14        | VDD_INT    | P06        |
| PA_06       | T03        | VDD_DMC    | F09        | VDD_EXT     | U15        | VDD_INT    | P07        |
| PA_07       | V01        | VDD_DMC    | F10        | VDD_FPLLANA | N05        | VDD_INT    | P08        |
| PA_08       | U03        | VDD_DMC    | F11        | VDD_INT     | E04        | VDD_INT    | P09        |
| PA_09       | V02        | VDD_DMC    | F12        | VDD_INT     | E05        | VDD_INT    | P10        |
| PA_10       | U02        | VDD_DMC    | F13        | VDD_INT     | E06        | VDD_INT    | P11        |
| PA_11       | V08        | VDD_DMC    | F14        | VDD_INT     | E07        | VDD_INT    | P12        |
| PA_12       | W06        | VDD_DMC    | F15        | VDD_INT     | E08        | VDD_INT    | P13        |
|             |            | VDD_DMC    |            | VDD_INT     | E09        | VDD_INT    |            |
| PA_13       | Y06        |            | G06        |             |            |            | P14        |
| PB_00       | A07        |            | G09        | VDD_INT     | E12        |            | R08        |
|             |            | VDD_DMC    |            |             |            | VDD_INT    |            |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

| BallName   | Ball No.   |
|------------|------------|
| VDD_INT    | R09        |
| VDD_INT    | R10        |
| VDD_INT    | R11        |
| VDD_INT    | R12        |
| VDD_INT    | R13        |
| VDD_INT    | R14        |
| VDD_PLL    | K06        |
| VDD_PLL    | L06        |
| VDD_PLL    | L07        |
| VDD_PLL    | M07        |
| VDD_REF    | G10        |
| VDD_REF    | G11        |
| VDD_REF    | M15        |
| VDD_REF    | N15        |
| VDD_REF    | P05        |
| VDD_REF    | P15        |
| VDD_REF    | R05        |
| VDD_REF    | R15        |
| VDD_REF    | T06        |
| VDD_REF    | T07        |
| VDD_REF    | T08        |
| VDD_REF    | T09        |
| VDD_REF    | T10        |
| VDD_REF    | T11        |
| VDD_REF    | T12        |
| VDD_REF    | T13        |
| VDD_REF    | T14        |
| VDD_REF    | T15        |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

<!-- image -->

BOTTOM VIEW

Figure 69. ADSP-21834/21835 400-Ball LPC BGA Configuration

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## OUTLINE DIMENSIONS

Dimensions for the 17 mm × 17 mm 400-ball BGA\_ED package in Figure 70 are shown in millimeters.

Figure 70. 400-Ball Ball Grid Array, Thermally Enhanced [BGA\_ED]

<!-- image -->

(BP-400-3) Dimensions shown in millimeters

## SURFACE-MOUNT DESIGN

Table 81 is provided as an aid to PCB design. For industry-standard design recommendations, refer to IPC-7351, Generic Requirements for Surface-Mount Design and Land Pattern Standard .

Table 81. BGA Data for Use with Surface-Mount Design

| Package   | Package Ball Attach Type   | Package Solder Mask Opening   | Package Ball Pad Size   |
|-----------|----------------------------|-------------------------------|-------------------------|
| BP-400-3  | Solder Mask Defined        | 0.4 mmDiameter                | 0.5 mmDiameter          |

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## AUTOMOTIVE PRODUCTS

The following models are available with controlled manufacturing to support the quality and reliability requirements of automotive applications. Note that these automotive models may have specifications that differ from the nonautomotive models; therefore designers should review the Specifications section of this data sheet carefully. Only the automotive grade

Table 82. Automotive Products

| Model 1, 2                                            | DSPProcessor Instruction Rate (Max)   | ArmCortex-M33 Instruction Rate (Max) 3   | L2 SRAM     | Temperature Range 4                                                             | Package Description 5                                                                                | Package Option    |
|-------------------------------------------------------|---------------------------------------|------------------------------------------|-------------|---------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|-------------------|
| ADSP-21834WCBPZ8 ADSP-21834WCBPZ8RL                   | 800 MHz 800 MHz                       | N/A N/A                                  | 1MB 1MB     | -40°C to +125°C -40°C to +125°C                                                 | 400-Ball BGA_ED, LPC 400-Ball BGA_ED, LPC                                                            | BP-400-3 BP-400-3 |
| ADSP-21835WCBPZ8 ADSP-21835WCBPZ8RL ADSP-21835WCBPZ10 | 800 MHz 800 MHz 1 GHz                 | N/A N/A N/A                              | 2MB 2MB 2MB | -40°C to +125°C -40°C to +125°C -40°C to +125°C -40°C to +125°C -40°C to +125°C | 400-Ball BGA_ED, LPC 400-Ball BGA_ED, LPC 400-Ball BGA_ED, LPC 400-Ball BGA_ED, LPC 400-Ball BGA_ED, | BP-400-3          |
| ADSP21835WCBPZ10RL ADSP-21836WCBPZ8                   | 1 GHz 800 MHz                         | N/A                                      | 2MB         |                                                                                 | HPC 400-Ball BGA_ED, HPC                                                                             | BP-400-3 BP-400-3 |
|                                                       |                                       |                                          |             |                                                                                 |                                                                                                      | BP-400-3          |
|                                                       |                                       |                                          | 1MB         |                                                                                 |                                                                                                      |                   |
|                                                       |                                       | N/A                                      |             | -40°C to +125°C                                                                 |                                                                                                      | BP-400-3 BP-400-3 |
| ADSP-21836WCBPZ8RL                                    | 800 MHz                               | N/A                                      | 1MB         | -40°C to +125°C                                                                 |                                                                                                      |                   |
| ADSP-21837WCBPZ8                                      | 800 MHz                               | N/A                                      | 2MB         |                                                                                 | 400-Ball BGA_ED, HPC                                                                                 | BP-400-3          |
| ADSP-21837WCBPZ8RL                                    | 800 MHz                               | N/A                                      | 2MB         | -40°C to +125°C                                                                 | 400-Ball BGA_ED, HPC                                                                                 | BP-400-3          |
| ADSP-21837WCBPZ10                                     | 1 GHz                                 | N/A                                      | 2MB         | -40°C to +125°C                                                                 | 400-Ball BGA_ED, HPC                                                                                 | BP-400-3          |
| ADSP21837WCBPZ10RL ADSP-SC834WCBPZ8                   | 1 GHz 800 MHz                         | N/A 400 MHz                              | 2MB 1MB     | -40°C to +125°C -40°C to +125°C                                                 | 400-Ball BGA_ED, HPC 400-Ball BGA_ED, HPC                                                            | BP-400-3 BP-400-3 |
|                                                       | 800 MHz                               | 400 MHz                                  | 2MB         | -40°C to +125°C                                                                 | 400-Ball BGA_ED, HPC                                                                                 | BP-400-3          |
| ADSP-SC834WCBPZ8RL                                    | 800 MHz                               | 400 MHz                                  | 1MB         | -40°C to +125°C                                                                 | 400-Ball BGA_ED, HPC                                                                                 | BP-400-3          |
| ADSP-SC835WCBPZ8 ADSP-SC835WCBPZ8RL                   | 800 MHz                               | 400 MHz                                  | 2MB         | -40°C to +125°C                                                                 | 400-Ball BGA_ED, HPC                                                                                 | BP-400-3          |
|                                                       |                                       |                                          |             | -40°C to +125°C                                                                 | 400-Ball BGA_ED, HPC                                                                                 |                   |
| ADSP-SC835WCBPZ10                                     | 1 GHz                                 | 400 MHz                                  | 2MB         |                                                                                 |                                                                                                      | BP-400-3          |
| ADSPSC835WCBPZ10RL                                    | 1 GHz                                 | 400 MHz                                  | 2MB         | -40°C to +125°C                                                                 | 400-Ball BGA_ED, HPC                                                                                 | BP-400-3          |

products shown in Table 82 are available for use in automotive applications. Contact your local Analog Devices account representative for specific product ordering information and to obtain the specific Automotive Reliability reports for these models.

## ADSP-21834/21835/21836/21837/ADSP-SC834/SC835

## ORDERING GUIDE

| Model 1          | DSPProcessor Instruction Rate (Max)   | ArmCortex-M33 Instruction Rate (Max) 2   | L2 SRAM   | Temperature Range 3   | Package Description 4   | Package Option   |
|------------------|---------------------------------------|------------------------------------------|-----------|-----------------------|-------------------------|------------------|
| ADSP-21834KBPZ8  | 800 MHz                               | N/A                                      | 1MB       | 0°C to 125°C          | 400-Ball BGA_ED, LPC    | BP-400-3         |
| ADSP-21835KBPZ8  | 800 MHz                               | N/A                                      | 2MB       | 0°C to 125°C          | 400-Ball BGA_ED, LPC    | BP-400-3         |
| ADSP-21835KBPZ10 | 1 GHz                                 | N/A                                      | 2MB       | 0°C to 125°C          | 400-Ball BGA_ED, LPC    | BP-400-3         |
| ADSP-21836KBPZ8  | 800 MHz                               | N/A                                      | 1MB       | 0°C to 125°C          | 400-Ball BGA_ED, HPC    | BP-400-3         |
| ADSP-21837KBPZ8  | 800 MHz                               | N/A                                      | 2MB       | 0°C to 125°C          | 400-Ball BGA_ED, HPC    | BP-400-3         |
| ADSP-21837KBPZ10 | 1 GHz                                 | N/A                                      | 2MB       | 0°C to 125°C          | 400-Ball BGA_ED, HPC    | BP-400-3         |
| ADSP-SC834KBPZ8  | 800 MHz                               | 400 MHz                                  | 1MB       | 0°C to 125°C          | 400-Ball BGA_ED, HPC    | BP-400-3         |
| ADSP-SC835KBPZ8  | 800 MHz                               | 400 MHz                                  | 2MB       | 0°C to 125°C          | 400-Ball BGA_ED, HPC    | BP-400-3         |
| ADSP-SC835KBPZ10 | 1 GHz                                 | 400 MHz                                  | 2MB       | 0°C to 125°C          | 400-Ball BGA_ED, HPC    | BP-400-3         |

I 2 C refers to a communications protocol originally developed by Philips Semiconductors (now NXP Semiconductors).

© 2025  Analog  Devices,  Inc.  All  rights  reserved.  Trademarks  and registered trademarks are the property of their respective owners.

<!-- image -->