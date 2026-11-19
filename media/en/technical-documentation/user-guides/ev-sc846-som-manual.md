<!-- lastmod 2026-07-29 -->
Analog Devices, Inc. One Analog Way Wilmington, MA 01887

## EV-SC846-SOM ® Manual

Revision 1.0, July 2026 Part Number 82-EV-SC846-SOM-01

<!-- image -->

## Copyright Information

© 2026 Analog Devices, Inc., ALL RIGHTS RESERVED. This document may not be reproduced in any form without prior, express written consent from Analog Devices, Inc.

## Disclaimer

Analog Devices, Inc. reserves the right to change this product without prior notice. Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use; nor for any infringement of patents or other rights of third parties which may result from its use. No license is granted by implication or otherwise under the patent rights of Analog Devices, Inc.

## Trademark and Service Mark Notice

The Analog Devices logo, Blackfin, Blackfin+, SHARC, SHARC+, CrossCore, VisualDSP++, EZ-KIT, EZ-Extender, and EngineerZone are registered trademarks of Analog Devices, Inc.

All other brand and product names are trademarks or service marks of their respective owners.

## Regulatory Compliance

The EV-SC846-SOM evaluation board is designed to be used solely in a laboratory environment. The board is not intended for use as a consumer-end product or as a portion of a consumer-end product. The board is an open system design, which does not include a shielded enclosure and, therefore, may cause interference to other electrical devices in close proximity. This board should not be used in or near any medical equipment or RF devices.

The EV-SC846-SOM evaluation board contains ESD (electrostatic discharge) sensitive devices. Electrostatic charges readily accumulate on the human body and equipment and can discharge without detection. Permanent damage may occur on devices subjected to high-energy discharges. Proper ESD precautions are recommended to avoid performance degradation or loss of functionality. Store unused boards in the protective shipping package.

<!-- image -->

## Contents

| Preface                                                                                                                                                                                                                                     |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Purpose of This Manual.................................................................................................................................1-1                                                                                  |
| Manual Contents ...........................................................................................................................................1-1                                                                              |
| Technical Support ..........................................................................................................................................1-2                                                                             |
| Supported Integrated Circuit .........................................................................................................................1-2                                                                                   |
| Supported Tools.............................................................................................................................................1-2                                                                             |
| Product Information......................................................................................................................................1-2                                                                                |
| Analog Devices Website..............................................................................................................................1-2                                                                                     |
| EngineerZone .............................................................................................................................................1-3                                                                               |
| Using the Board                                                                                                                                                                                                                             |
| Product Overview..........................................................................................................................................2-1                                                                               |
| Package Contents...........................................................................................................................................2-3                                                                              |
| Default Configuration ...................................................................................................................................2-3                                                                                |
| CrossCore Embedded Studio (CCES) Setup ..................................................................................................2-4                                                                                                |
| Debug Interface .............................................................................................................................................2-4                                                                            |
| Board Power ..................................................................................................................................................2-4                                                                           |
| Power-On-Self Test........................................................................................................................................2-5                                                                               |
| Example Programs .........................................................................................................................................2-5                                                                               |
| Reference Design Information .......................................................................................................................2-5                                                                                     |
| IS25WP02GG-RHLE- 2G-bit Serial Flash Memory with Dual and Quad SPI..............................................2-5                                                                                                                         |
| IS46LQ32256- 256Mx16x2 8Gb LPDDR4 ..................................................................................................2-6 IS72WVO32M8AWO256-200HLA2- 1.8V 256Mb OctalRAM + 1.8V 256Mb xSPI Flash..........................2-6 |
| MAX20406E - Automotive 36V, 6A, Fully Integrated Synchronous Silent Switcher Buck Converters ...........2-6                                                                                                                                 |
| MAX25228AFYB/VY+ ..................................................................................................................................2-7                                                                                      |
| Hardware Reference                                                                                                                                                                                                                          |
| System Architecture .......................................................................................................................................3-1                                                                              |

| Software-Controlled Switches (SoftConfig)....................................................................................................3-3                      |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Overview of SoftConfig..............................................................................................................................3-3               |
| SoftConfig on the Board.............................................................................................................................3-6               |
| Programming SoftConfig Switches .............................................................................................................3-6                      |
| Switches.........................................................................................................................................................3-7  |
| Boot Mode Select ( S2) ..............................................................................................................................3-8              |
| Reset Pushbutton ( S4) ..............................................................................................................................3-9              |
| Jumpers .........................................................................................................................................................3-9  |
| Power ........................................................................................................................................................3-9     |
| LEDs .............................................................................................................................................................3-9 |
| Fault ( DS9)..............................................................................................................................................3-10        |
| Power ( DS6)............................................................................................................................................3-10          |
| GPIO ( DS2, DS3, DS4. DS5) ........................................................................................................3-10                               |
| Reset ( DS11)...........................................................................................................................................3-10          |
| Connectors ..................................................................................................................................................3-10     |
| JTAG ( P4)...............................................................................................................................................3-12         |
| USB Type C Connector ( P2)...................................................................................................................3-12                     |
| SoM 2.0 Interface Connection ( Finger Edge Connector)............................................................3-12                                                 |

## 1 Preface

Thank you for purchasing the Analog Devices, Inc. System-on-Module (SoM) EV-SC846-SOM evaluation board.

The evaluation board is designed to be used in conjunction with the CrossCore Embedded Studio ® 3.1.0+ development environment for advanced application code development and debug, with features that enable the ability to:

- Create, compile, assemble, and link application programs written in C++, C, and assembly
- Load, run, step, halt, and set breakpoints in application programs
- Read and write data and program memory
- Read and write core and peripheral registers

## Purpose of This Manual

This manual provides instructions for installing the product hardware (board). This manual describes the operation and configuration of board components and provides guidelines for running code on the board.

## Manual Contents

The manual consists of:

- Using the board

Provides basic board information.

- Hardware Reference

Provides information about the hardware aspects of the board.

- Bill of Materials

A companion file in PDF format that lists all of the components used on the board is available on the website at http://www.analog.com/EV-SC846-SOM.

- Schematic

A companion file in PDF format documenting all of the circuits used on the board is available on the website at http://www.analog.com/EV-SC846-SOM.

## Technical Support

You can reach Analog Devices technical support in one of the following ways:

- Post your questions in the processors and DSP support community at EngineerZone ® :

[http://ez.analog.com/community/dsp](http://ez.analog.com/community/dsp)

- Submit your questions to technical support directly at:

[http://www.analog.com/support](http://www.analog.com/support)

- E-mail your questions about processors, DSPs, and tools development software from CrossCore Embedded Studio or VisualDSP++ ® :

If using CrossCore Embedded Studio or VisualDSP++ choose Help &gt; Email Support. This creates an e-mail to processor.tools.support@analog.com and automatically attaches your CrossCore Embedded Studio or VisualDSP++ version information and license.dat file.

- E-mail your questions about processors and processor applications to:

[processor.support@analog.com](mailto:processor.tools.support@analog.com)

- Contact your Analog Devices sales office or authorized distributor. Locate one at:

[http://www.analog.com/adi-sales](http://www.analog.com/adi-sales)

## Supported Integrated Circuit

This evaluation system supports the Analog Devices ADSP-SC846W IC.

## Supported Tools

Information about code development tools for the EV-SC846-SOM evaluation board and ADSP-SC84x product family is available at:

[http://www.analog.com/EV-SC846-SOM](http://www.analog.com/EV-SC598-SOM)

## Product Information

Product information can be obtained from the Analog Devices website and the online help system.

Information about the ADSP-SC846W product family is available at:

## Analog Devices Website

The Analog Devices website, http://www.analog.com, provides information about a broad range of products - analog integrated circuits, amplifiers, converters, transceivers, and digital signal processors.

To access a complete technical library for each processor family, go to http://www.analog.com/processors/techni-cal\_library. The manuals selection opens a list of current manuals related to the product as well as a link to the previous revisions of the manuals. When locating your manual title, note a possible errata check mark next to the title that leads to the current correction report against the manual.

Also note, MyAnalog.com is a free feature of the Analog Devices website that allows customization of a web page to display only the latest information about products you are interested in. You can choose to receive weekly e-mail notifications containing updates to the web pages that meet your interests, including documentation errata against all manuals. MyAnalog.com provides access to books, application notes, data sheets, code examples, and more.

Visit MyAnalog.com to sign up. If you are a registered user, just log on. Your user name is your e-mail address.

## EngineerZone

EngineerZone is a technical support forum from Analog Devices, Inc. It allows you direct access to ADI technical support engineers. You can search FAQs and technical information to get quick answers to your embedded processing and DSP design questions.

Use EngineerZone to connect with other DSP developers who face similar design challenges. You can also use this open forum to share knowledge and collaborate with the ADI support team and your peers. Visit http:// ez.analog.com to sign up.

## 2 Using the Board

This chapter provides information on the major components and peripherals on the board, along with instructions for installing and setting up the emulation software.

## Product Overview

Below is an image of the EV-SC846-SOM board.

Figure 2-1: Board View

<!-- image -->

The board features:

- Analog Devices ADSP-SC846 processor

- SHARC-FX Core
- Dual A55 Cores
- 484 ball BGA
- 25 MHz oscillator
- LPDDR4 Memory
- 256Mx16 bit x2 (8Gbit )
- ISSI IS46LQ32256B-062BLA3
- 1.1V
- SPI Flash Quad (SPI2) Memory
- 2Gbit
- ISSI IS25WP02GG-RHLE
- Single/Dual/Quad SPI
- xSPI Memory
- 256Mbit FLASH/256Mbit RAM
- ISSI IS72WVO32M8AWO256-200HLA2
- xSPI 8 bit MCP Device
- eMMC Memory
- 16GByte
- ISSI IS22TF16G-JCLA2
- USB-UART
- UART Interface
- Also provides power to SOM module for standalone mode.
- Debug Interface (JTAG)
- JTAG 10-pin 0.05" header
- LEDs
- Eight LEDs: one power (green), one board reset (red), four general-purpose (amber), one carrier detect (amber), one fault (red) and two UART leds (amber)
- Pushbuttons
- One pushbutton, RESET

- SoM Interface Connector
- DAI
- SPORT
- SPI
- UART
- TWI
- Link Port
- GPIO
- MLB
- JTAG
- Ethernet
- RESET
- Power

## Package Contents

Your EV-SC846-SOM package contains the following items.

- EV-SC846-SOM board

Contact the vendor where you purchased your EV-SC846-SOM evaluation board or contact Analog Devices, Inc. if any item is missing.

## Default Configuration

The Default Hardware Setup figure shows the default settings for jumpers and switches and the location of the jumpers, switches, connectors, and LEDs. Confirm that your board is in the default configuration before using the board.

Default Config

Figure 2-2: Default Hardware Setup

<!-- image -->

## CrossCore Embedded Studio (CCES) Setup

## Debug Interface

The EV-SC846-SOM provides a JTAG connection via P4. This is for attaching an emulator, such as the ICE-1000 or ICE-1500 for debugging.

A second JTAG connector P5 is used with a JLNIK emulator to connect to the HSM on the EV-SC846-SOM board.

## Board Power

The EV-SC846-SOM is powered via USB Type C when the board is in standalone mode. When in this mode the jumper on JP1 should be on Pins 1-2 to select power input from USB Type C. When the EV-SC846-SOM is connected to a carrier board the power is supplied via the carrier board. When in this mode the jumper on JP1 should be on Pins 2-3 to select power input from the carrier board.

P3 USB 2.0

## Power-On-Self Test

The Power-On-Self-Test Program (POST) tests all the EZ-KIT carrier board peripherals and validates functionality as well as connectivity to the processor. Once assembled, each EZ-KIT carrier board is fully tested for an extended period of time with POST for all the compatible SoM modules. All EZ-KIT carrier boards are shipped with POST preloaded into flash memory. The POST is executed by resetting the board and connecting the USB To UART to your PC with an open terminal window. The POST also can be used as a reference for a custom software design or hardware troubleshooting.

Note that the source code for the POST program is included in the Board Support Package (BSP) along with the readme file that describes how the board is configured to run POST.

## Example Programs

Example programs are provided with the EV-SC846-SOM Board Support Package (BSP) to demonstrate various capabilities of the product. The programs can be found in the EV-SC846-SOM\examples installation folder. Refer to the readme file provided with each example for more information.

## Reference Design Information

A reference design info package is available for download on the Analog Devices Web site. The package provides information on the schematic design, layout, fabrication, and assembly of the board.

The information can be found at:

[http://www.analog.com/EV-SC846-SOM](http://www.analog.com/EV-SC598-SOM)

## IS25WP02GG-RHLE- 2G-bit Serial Flash Memory with Dual and Quad SPI

The IS25LP02GG and IS25WP02GG Serial Flash memory offers a versatile storage solution with high flexibility and performance in a simplified pin count package. ISSI's "Industry Standard Serial Interface" Flash is for systems that require limited space, a low pin count, and low power consumption. The device is accessed through a 4-wire SPI Interface consisting of a Serial Data Input (SI), Serial Data Output (SO), Serial Clock (SCK), and Chip Enable (CE#) pins, which can also be configured to serve as multi-I/O (see pin descriptions).

The device supports Dual and Quad I/O as well as standard, Dual Output, and Quad Output SPI. Clock frequencies of up to 133MHz allow for equivalent clock rates of up to 532MHz (133MHz x 4) which equates to 83Mbytes/s of data throughput. The IS25xP series of Flash adds support for DTR (Double Transfer Rate) commands that transfer addresses and read data on both edges of the clock. These transfer rates can outperform 16-bit Parallel Flash memories allowing for efficient memory access to support XIP (execute in place) operation.

Initial state of the memory array is erased (all bits are set to 1) when shipped from the factory.

QPI (Quad Peripheral Interface) supports 2-cycle instruction further reducing instruction times. Pages can be erased in groups of 4Kbyte sectors, 32Kbyte blocks, 64K/256Kbyte blocks, and/or the entire chip. The uniform sector and block architecture allows for a high degree of flexibility so that the device can be utilized for a broad variety of applications requiring solid data retention

Datasheet: https://www.issi.com/WW/pdf/25LP-WP02GG.pdf

## IS46LQ32256- 256Mx16x2 8Gb LPDDR4

- The IS43/46LQ32256B and IS43/46LQ32256BL are 8Gbit CMOS LPDDR4 SDRAM. The device is organized as 2 channels per device, and each channel is 8-banks and 16-bits. This product uses a double data rate architecture to achieve high-speed operation. The double data rate architecture is essentially a 16N prefetch architecture with an interface designed to transfer two data words per clock cycle at the I/O pins. This product offers fully synchronous operations referenced to both rising and falling edges of the clock. The data paths are internally pipelined and 16n bits prefetched to achieve very high bandwidth.
- LPDDR4-SDRAM is a high-speed synchronous DRAM device internally configured with either 1 or 2 channels. Single-channel is comprised of 8-banks and it is defined from 1Gb to 16Gb in total density. Dual channel is comprised of 8-banks and it is defined from 2Gb to 32Gb in total density.
- Datasheet: https://www.issi.com/WW/pdf/43-46LQ32256B.pdf

## IS72WVO32M8AWO256-200HLA2- 1.8V 256Mb OctalRAM + 1.8V 256Mb xSPI Flash

IS72WVO32M8AWO256 MCP Features

- 256Mb OctalRAM (PSRAM)
- 256 xSPI Flash
- Temp Grades: Auto. A2 : -40°C to +105°C Auto. A3 : -40°C to +125°C(1, 2)
- Package: 6mm x 8mm 24-ball 5x5 array TFBGA

JEDEC standard xSPI interface - Supports Standard SPI(1-1-1), Multi- I/O SPI(1-8-8/1-1-8), Octal (8-8-8) Interface - Low Signal Counts :11 Signal pins (S#, C, DQS, DQ0~DQ7)+ optional W#, ERR# - Double Transfer Rate (DTR) Operation 200MHz (400MB/s) at 1.8V VCC 133MHz (266MB/s) at 3.0V VCC

## MAX20406E - Automotive 36V, 6A, Fully Integrated Synchronous Silent Switcher Buck Converters

The MAX20404/MAX20405/MAX20406/MAX20406E ICs are tiny, low EMI emission, synchronous Silent Switcher® buck converters with integrated high-side and low-side switches. The ICs are designed to deliver up to 6A with wide input voltages range from 3V to 36V. Voltage quality can be monitored by observing the PGOOD signal. The MAX20404/MAX20405/ MAX20406/MAX20406E can operate in dropout by running at 99% duty cycle, making them ideal for automotive and industrial applications.

The MAX20404/MAX20405/MAX20406/MAX20406E offer programmable or fixed output voltages of 5V and 3.3V. The frequency is internally fixed at 2.1MHz (or 400kHz, 2.3MHz, or 3MHz) which allows for small external components, reduced output ripple, and guarantees no AM interference.

The MAX20404/ MAX20405/MAX20406/MAX20406E automatically enter skip mode at light loads with ultralow quiescent current of 10μA at no load. This family of products (including the MAX20408/MAX20410) offers a pin-to-pin compatible offering from 4A to 10A in a single-phase configuration, and up to 20A in a dual-phase configuration.

These devices have also been optimized for dual-phase operation with very high current sharing accuracy. These devices can be ordered with spread-spectrum frequency modulation designed to minimize EMI- radiated emissions due to the modulation frequency.

This device features the MAXQ® power architecture, which provides precision transient performance and phase margin. This allows obtaining the maximum power, performance, and precision while minimizing system cost for any specific application.

The MAX20404/MAX20405/MAX20406/MAX20406E are available in a small 3.5mm x 3.75mm, 17-pin and 15pin FC2QFN packages and use very few external components.

## MAX25228AFYB/VY+

The MAX25229 is a high-efficiency, eight-output, low-voltage PMIC. OUT1 is a 1.6A boost converter which can boost a 3.3V input supply to 5V at up to 500mA output current, while four synchronous step-down converters provide an output voltage range of 0.5V to 2.0V at up to 4A for 1-phase and 8A for 2-phase operation. Three 600mA PMOS LDOs operate from an input voltage range of 2.7V to 5.5V and provide an output voltage of 0.5V to 3.68V. All DCDC converters achieve ±1% DC accuracy over load, line, and temperature range while the LDOs achieve ±3% AC+DC accuracy.

The device features a 2.1MHz fixed-frequency PWM mode for better noise immunity and load-transient response. The high switching frequency operation allows for the use of all ceramic capacitors and minimizes external components. The spread-spectrum frequency modulation minimizes radiated electromagnetic emissions. Integrated low RDS(ON) switches improve efficiency at heavy loads and simplify the layout with respect to discrete solutions. The MAXQTM architecture minimizes output capacitance for each output by individually optimizing each output for the application requirements and eliminating process variations which reduce performance.

The device is offered with factory-preset output voltages. See Ordering Information for options.

Benefits and Features

- Multiple Functions for Small Size
- Synchronous 5V Boost Converter - Up to 700mA Output Current (3.9V to 5V)

- Four 4A Buck Converters - OUT2-4: 0.5V to 2.0V - OUT5: 0.5V to 3.3V - Supports Dual-Phase Operation
- Three 600mA PMOS LDOs - Can be configured as voltage monitors · Five Programmable GPIO Pins · Challenge-Response Watchdog · I2C Fast Mode Plus Compatible Interface
- 2.1MHz Internal Operation with Spread Spectrum · High-Precision Performance
- ±1% Output Voltage Accuracy
- ±1% OV/UV Monitoring · Excellent Load-Transient Performance
- MAXQTM Architecture · Diagnostics and Redundant Circuits
- ASIL-D Compliant
- Redundant Reference
- Fail Safe on Open Pins · Packet Error Checking (PEC) on I2C
- Shorted Pin Detection on RESET
- AV Supply OV/UV Monitor
- Robust for the Automotive Environment
- Current-Mode, Forced-PWM Operation
- Over-temperature and Short-Circuit Protection
- 5mm x 5mm, 29-Pin FCQFN · -40°C to +125°C Grade 1 Automotive Temperature Range

## 3 Hardware Reference

This chapter describes the hardware design of the EV-SC846-SOM.

## System Architecture

The board's configuration is shown in the Block Diagram figure.

## EV-SC846-SOM Block Diagram

<!-- image -->

This System on Module is designed to demonstrate the ADSP-SC846W processor's capabilities. The board has a 25 MHz input clock and runs at a max core clock frequency of 1.2GHz.

User I/O to the processor is provided in the form of two pushbuttons and three LEDs.

The software-controlled switches (SoftConfig) facilitate the switch multi-functionality by disconnecting the pushbuttons from their associated processor pins and reusing the pins elsewhere on the board.

## Software-Controlled Switches (SoftConfig)

On the board, most of the traditional mechanical switches and jumpers have been replaced by I 2 C software-controlled switches. The remaining mechanical switches are provided for the boot mode and pushbuttons. Reference any SoftConfig*.c file found in the installation directory for an example of how to set up the SoftConfig feature of the board through software. The SoftConfig section of this manual serves as a reference to any user that intends to modify an existing software example. If software provided by ADI is used, there should be little need to reference this section.

NOTE: Care should be taken when changing SoftConfig settings not to create a conflict with interfaces. This is especially true when connecting extender cards.

## Overview of SoftConfig

In order to further clarify the use of electronic single FET switches and multi-channel bus switches, an example of each is illustrated and compared to a traditional mechanical switching solution. This is a generic example that uses similar FET and bus switch components that are on the board.

After this generic discussion there is a detailed explanation of the SoftConfig interface specific to the EV-SC846SOM.

The Example of Individual FET Switches figure shows two individual FET switches (Pericom PI3A125CEX) with reference designators UA and UB. Net names ENABLE\_A and ENABLE\_B control UA and UB. The default FET switch enable settings in this example are controlled by resistors RA and RB which pull the enable pin 1 of UA and UB to ground (low). In a real example, these enable signals are controlled by the IO expander. The default pull-down resistors connects the signals EXAMPLE\_SIGNAL\_A and EXAMPLE\_SIGNAL\_B and also connects signals EXAMPLE\_SIGNAL\_C and EXAMPLE\_SIGNAL\_D. To disconnect EXAMPLE\_SIGNAL\_A from EXAMPLE\_SIGNAL\_B, the IO expander is used to change ENABLE\_A to a logic 1 through software that interfaces with the Microchip. The same procedure for ENABLE\_B disconnects EXAMPLE\_SIGNAL\_C from EXAMPLE\_SIGNAL\_D.

Figure 3-2: Example of Individual FET Switches

<!-- image -->

The following figure shows the equivalent circuit to the Example of Individual FET Switches figure but utilizes mechanical switches that are in the same package. Notice the default is shown by black boxes located closer to the ON label of the switches. In order to disconnect these switches, physically move the switch to the OFF position.

Figure 3-3: Example of a Mechanical Switch (Equivalent to Example of Individual FET Switches Figure)

<!-- image -->

The Example of Bus Switch figure shows a bus switch example, reference designator UC (Pericom PI3LVD512ZHE), selecting between lettered functionality and numbered functionality. The signals on the left side are multiplexed signals with naming convention letter\_number. The right side of the circuit shows the signals separated into letter and number, with the number on the lower group (0B1) and the letter on the upper group (0B2). The default setting is controlled by the signal CONTROL\_LETTER\_NUMBER which is pulled low. This selects the number signals on the right to be connected to the multiplexed signals on the left by default. In this example, the IO expander is not shown but controls the signal CONTROL\_LETTER\_NUMBER and allows the user to change the selection through software.

Figure 3-4: Example of a Bus Switch

<!-- image -->

The following figure shows the equivalent circuit to the Example of Bus Switch figure but utilizes mechanical switches. Notice the default for reference designators SWC and SWD is illustrated by black boxes located closer to the ON label of the switches to enable the number signals by default. Also notice the default setting for reference designators SWE and SWF is OFF. In order to connect the letters instead of the numbers, the user physically changes all switches on SWC and SWD to the OFF position and all switches on SWE and SEF to the ON position.

Figure 3-5: Example of a Mechanical Switch (Equivalent to Example of Bus Switch)

<!-- image -->

## SoftConfig on the Board

The Analog Devices ADP5587-1 GPIO extenders provide control for individual electronic switches. The TWI interface of the processor communicates with the GPIO extender devices. There are individual switches with default settings that enable basic board functionality.

The Default Processor Interface Availability table lists the processor and board interfaces that are available by default. Note that only interfaces affected by software switches are listed in the table.

Table 3-1: Default Processor Interface Availability

| Interface     | Availability by Default                              |
|---------------|------------------------------------------------------|
| UART0         | USB to UART IC                                       |
| SD Card       | SD Card disabled by default, eMMC enabled by default |
| USB PHY Reset | USB PHY                                              |
| LEDs          | Enabled                                              |

## Programming SoftConfig Switches

On the board, an ADI ADP5587-1 devices exist. The ADP5587 can be configured as a GPIO extender or a keypad interface. It is used as a GPIO Extended on the System on Module evaluation board.

Refer to the ASP5587-1 datasheet for programming information. https://www.analog.com/media/en/technical-documentation/data-sheets/adp5587.pdf

Each example in the Board Support Software (BSP) includes source files that program the soft switches, even if the default settings are being used. The README for each example identifies only the signals that are being changed from their default values. The code that programs the soft switches is located in the SoftConfig\_XXX.c file in each example where XXX is the name of the baord.

The part number of the ADP5587 determines the address of the IC. The ADP5587-1ACPZ has (I 2 C Hardware Address 0x68 and the ADP5587ACPZ has I 2 C Hardware Address 0x60).

Table below Output Signals of ADP5587 GPIO Expander (U24) show the output signals of the ADI GPIO extender (U24), with a TWI address of 0110 100X, where X represents the read or write bit. The signals that control an individual FET have an entry in the FET column. The Component Connected column shows the board IC that is connected if the FET is enabled. The (U24) is controlling the enable signal of a FET switch. Also note that if a particular functionality of the processor signal is being used, it is in bold font in the Processor Signal column.

Table 3-2: Output Signals of ADP5587-1 GPIO Extender (U24)

| Con- nec- tion   | Signal Name     | Description                       | FET   | Processor Signal (if applicable)   | Connected   | Default   |
|------------------|-----------------|-----------------------------------|-------|------------------------------------|-------------|-----------|
| C9               | DS2             | GPIO LED                          |       | None                               | DS2         | High      |
| C8               | DS3             | GPIO LED                          |       | None                               | DS3         | High      |
| C7               | DS4             | GPIO LED                          |       | None                               | DS4         | High      |
| R3               | USB_PHY_RES ET* | Reset USB3317C                    |       | None                               | U22         | High      |
| R2               | SD_CARD_EN*     | Enable MicroSD Card Slot          | U7 U8 | eMSI Bus                           | U10/U9      | High      |
| R1               | UART0_EN        | Enable FTDI UART to USB           | U29   | PA_00/UART0_TX, PA_01/ UART0_RX    | U14         | Low       |
| R0               | UART0_FLOW_ EN  | Enables UART Flow Control on FTDI | U29   | PA_02/UART0_RTSb, PA_03/UART0_CTSb | U14         | Low       |

## Switches

This section describes operation of the switches. The switch locations are shown in the Switch/Jumper Locations figure.

Figure 3-6: Switch/Jumper Locations

<!-- image -->

## Boot Mode Select ( S2)

The Boot Mode selection switch selects between the different boot modes of the processor. The Boot Mode Switch table shows the available boot mode settings. By default, the processor boots from SPI2 master boot which uses the on-board SPI flash memory.

Table 3-3: Boot Mode Switch

|   Position | Processor Boot Mode       |
|------------|---------------------------|
|          0 | No Boot                   |
|          1 | SPI1 Flash Boot (Default) |
|          2 | SPI2 Host Boot            |
|          3 | UART0 Boot                |
|          4 | Link Port 0 Boot          |
|          5 | xSPI0 Flash Boot          |
|          6 | eMMC Boot                 |
|          7 | xSPI1 Flash Boot          |

## Reset Pushbutton ( S4)

The reset pushbutton resets the ADSP-SC846W processor. The reset signal also is connected to the expansion connectors via the SYS\_HWRSTsignal. Reset ( DS11) is used to indicate when the board is in reset.

## Jumpers

This section describes functionality of the configuration jumpers. The Switch/Jumper Locations figure shows the jumper locations.

## Power

The EV-SC846-SOM can be powered by either the USB-UART Port or through the SOM Interface Connector. There is a circuit on the EV-SC846-SOM that will automatically switch the power input source, with priority to the SOM connector.

## LEDs

This section describes the on-board LEDs. The LED Locations figure shows the LED locations.

DS2, DS3, DS4 GPIO LEDs

<!-- image -->

Figure 3-7: LED Locations

## Fault ( DS9)

When ON, it indicates a system fault. For more information, refer to the ADSP-SC84xHardware Reference Manual.

## Power ( DS6)

When ON (green), it indicates that power is being supplied to the board properly.

## GPIO ( DS2, DS3, DS4. DS5)

Three LEDs are connected to the SoftConfig(see the GPIO LEDs table). The LEDs are active low and are turned ON (amber) by writing to the U24 SoftConfig IC.

Table 3-4: GPIO LEDs

| Reference Designator   | Programmable Flag Pin   |
|------------------------|-------------------------|
| DS2                    | SoftSwitch              |
| DS3                    | SoftSwitch              |
| DS4                    | SoftSwitch              |
| DS5                    | GPIO                    |

## Reset ( DS11)

When ON (red), it indicates that the board is in reset. A master reset is asserted by pressing S4, which activates the LED. For more information, see Reset Pushbutton ( S4).

## Connectors

This section describes connector functionality and provides information about mating connectors. The connector locations are shown in the Connector Locations figure.

## SOM 2.0 Finger Edge Interface

Figure 3-8: Connector Locations Top View

<!-- image -->

Figure 3-9: Connector Locations Bottom View

<!-- image -->

## JTAG ( P4)

The JTAG header provides debug connectivity for the processor. This is a 0.05" shrouded through-hole connector from SAMTEC (SHF-105-01-L-D-SM-K). This connector mates with ICE- 1500, ICE-1000, and any newer Analog Devices emulators. For more information, see Debug Interface

## USB Type C Connector ( P2)

USB Type C Power Delivery for powering the SoM when JP1 is set to position 1-2. And USB to UART signals to Silicon Labs CP2102N-A02-GQFN28

| Part Description   | Manufacturer   | Part Number   |
|--------------------|----------------|---------------|
| USB Type C         | MOLEX          | 1054500101    |
| Mating Cable       | Mating Cable   | Mating Cable  |
| USB Type C         | ANY            | ANY           |

## SoM 2.0 Interface Connection ( Finger Edge Connector)

The SoM 2.0 Interface Connector is a PCB Finger Edge connector designs to connect to the Amphenol ICC 10151114-001TLF. This interface

Table 3-5: SoM 2.0 Interface (Finger Edge)

| Pin   | Signal           |   Pin | Signal     |   Pin | Signal    |   Pin | Signal   |   Pin | Signal            |
|-------|------------------|-------|------------|-------|-----------|-------|----------|-------|-------------------|
| E1    | VDD_SOM +5V      |    57 | DAI1_PIN04 |   117 | PC_07     |   177 |          |   237 | PG_14             |
| E2    | VDD_SOM +5V      |    58 | DAI1_PIN14 |   118 | PC_12     |   178 | PD_06    |   238 | GND               |
| E3    | GND              |    59 | DAI1_PIN05 |   119 | PB_09     |   179 |          |   239 | PG_15             |
| E4    | GND              |    60 | DAI1_PIN15 |   120 | PC_14     |   180 | GND      |   240 |                   |
| 1     | TRACE0_CLK       |    61 | DAI1_PIN06 |   121 | GND       |   181 | GND      |   241 | PH_00             |
| 2     | XSPI1_DQS_RW DS* |    62 | DAI1_PIN16 |   122 | PC_13     |   182 | PD_09    |   242 |                   |
| 3     | TRACE0_D00       |    63 | DAI1_PIN07 |   123 | PG_01     |   183 |          |   243 | BMODE0            |
| 4     | XSPI1_COTI_D0    |    64 | DAI1_PIN17 |   124 | GND       |   184 | PD_08    |   244 |                   |
| 5     | TRACE0_D01       |    65 | DAI1_PIN08 |   125 | PG_00     |   185 |          |   245 | BMODE1            |
| 6     | XSPI1_CITO_D1    |    66 | DAI1_PIN18 |   126 | N/A       |   186 | GND      |   246 |                   |
| 7     | TRACE0_D02       |    67 | DAI1_PIN09 |   127 | N/A       |   187 |          |   247 | BMODE2            |
| 8     | XSPI1_D2         |    68 | DAI1_PIN19 |   128 | N/A       |   188 | PA_00    |   248 |                   |
| 9     | TRACE0_D03       |    69 | DAI1_PIN10 |   129 | N/A       |   189 |          |   249 | BMODE3            |
| 10    | XSPI1_D3         |    70 | DAI1_PIN20 |   130 | N/A       |   190 | PA_01    |   250 |                   |
| 11    | TRACE0_D04       |    71 | GND        |   131 | N/A       |   191 | GND      |   251 | GND               |
| 12    | XSPI1_D4         |    72 | GND        |   132 | N/A       |   192 | PA_02    |   252 |                   |
| 13    | TRACE0_D05       |    73 | GND        |   133 | GND       |   193 | GND      |   253 | PF_04             |
| 14    | XSPI1_D5         |    74 | HADC_VIN0  |   134 | GND       |   194 | PA_03    |   254 |                   |
| 15    | TRACE0_D06       |    75 | PH_01      |   135 |           |   195 |          |   255 | PF_05             |
| 16    | XSPI1_D6         |    76 | HADC_VIN1  |   136 | JTG_TMS   |   196 | GND      |   256 |                   |
| 17    | TRACE0_D07       |    77 | PG_02      |   137 |           |   197 |          |   257 | PF_06             |
| 18    | XSPI1_D7         |    78 | HADC_VIN2  |   138 | JTG_TCK   |   198 | PA_05    |   258 |                   |
| 19    |                  |    79 | PG_03      |   139 |           |   199 |          |   259 | PF_07             |
| 20    | XSPI1_SEL1*      |    80 | HADC_VIN3  |   140 | JTG_TDO   |   200 | PA_04    |   260 |                   |
| 21    | PD_04            |    81 | PG_08      |   141 |           |   201 |          |   261 | PF_08             |
| 22    | XSPI1_SEL2*      |    82 | HADC_VIN4  |   142 | JTG_TDI   |   202 | PA_06    |   262 | CARRIER_DE- TECT* |
| 23    | PB_07            |    83 | PG_09      |   143 |           |   203 | GND      |   263 | PF_09             |
| 24    | XSPI1_CLK*       |    84 | HADC_VIN5  |   144 | JTG_TRST* |   204 | PA_07    |   264 | EEPROM_ID0        |

Table 3-5: SoM 2.0 Interface (Finger Edge) (Continued)

|   Pin | Signal     |   Pin | Signal    |   Pin | Signal          |   Pin | Signal   |   Pin | Signal          |
|-------|------------|-------|-----------|-------|-----------------|-------|----------|-------|-----------------|
|    25 | PB_08      |    85 | GND       |   145 | GND             |   205 |          |   265 | GND             |
|    26 | XSPI1_CLK  |    86 | HADC_VIN6 |   146 | TARGET_RE- SET* |   206 | GND      |   266 | EEPROM_ID1      |
|    27 | GND        |    87 | PG_04     |   147 |                 |   207 |          |   267 | PF_10           |
|    28 | GND        |    88 | HADC_VIN7 |   148 | GND             |   208 | PH_07    |   268 | GND             |
|    29 | DAI0_PIN01 |    89 | PG_06     |   149 |                 |   209 |          |   269 | PF_11           |
|    30 | DAI0_PIN11 |    90 | GND       |   150 | PA_09           |   210 | PH_06    |   270 |                 |
|    31 | DAI0_PIN02 |    91 | PG_07     |   151 |                 |   211 |          |   271 | PF_12           |
|    32 | DAI0_OIN12 |    92 | PC_04     |   152 | PA_08           |   212 | PH_08    |   272 | GND             |
|    33 | DAI0_PIN03 |    93 | PG_12     |   153 |                 |   213 | GND      |   273 | PF_13           |
|    34 | DAI0_PIN13 |    94 | PC_00     |   154 | GND             |   214 | PH_09    |   274 | TARGET_RE- SET* |
|    35 | DAI0_PIN04 |    95 | PG_13     |   155 |                 |   215 |          |   275 | PF_14           |
|    36 | DAI0_PIN14 |    96 | PC_01     |   156 | PA_11           |   216 | GND      |   276 | SYS_FAULT*      |
|    37 | DAI0_PIN05 |    97 | GND       |   157 | GND             |   217 |          |   277 | PF_15           |
|    38 | DAI0_PIN15 |    98 | PC_02     |   158 | PA_10           |   218 |          |   278 | GND             |
|    39 | DAI0_PIN06 |    99 | PG_05     |   159 |                 |   219 |          |   279 | GND             |
|    40 | DAI0_PIN16 |   100 | PC_03     |   160 | GND             |   220 |          |   280 | GND             |
|    41 | DAI0_PIN07 |   101 | PG_11     |   161 |                 |   221 |          |   281 | GND             |
|    42 | DAI0_PIN17 |   102 | PC_05     |   162 | PA_13           |   222 |          |       |                 |
|    43 | DAI0_PIN08 |   103 | PG_10     |   163 |                 |   223 | GND      |       |                 |
|    44 | DAI0_PIN18 |   104 | PC_06     |   164 | PA_12           |   224 |          |       |                 |
|    45 | DAI0_PIN09 |   105 | PH_02     |   165 |                 |   225 | PA_15    |       |                 |
|    46 | DAI0_PIN19 |   106 | PC_07     |   166 | GND             |   226 |          |       |                 |
|    47 | DAI0_PIN10 |   107 | PH_03     |   167 |                 |   227 | PA_14    |       |                 |
|    48 | DAI0_PIN20 |   108 | PC_08     |   168 | PB_06           |   228 |          |       |                 |
|    49 | GND        |   109 | GND       |   169 | GND             |   229 | GND      |       |                 |
|    50 | GND        |   110 | GND       |   170 | PB_05           |   230 |          |       |                 |
|    51 | DAI1_PIN01 |   111 | PH_05     |   171 |                 |   231 | PB_01    |       |                 |
|    52 | DAI1_PIN11 |   112 | PC_09     |   172 | PB_04           |   232 |          |       |                 |
|    53 | DAI1_PIN02 |   113 | PH_04     |   173 |                 |   233 | PB_00    |       |                 |
|    54 | DAI1_PIN12 |   114 | PC_10     |   174 | GND             |   234 |          |       |                 |

Table 3-5: SoM 2.0 Interface (Finger Edge) (Continued)

|   Pin | Signal     |   Pin | Signal   |   Pin | Signal   |   Pin | Signal   | Pin   | Signal   |
|-------|------------|-------|----------|-------|----------|-------|----------|-------|----------|
|    55 | DAI1_PIN03 |   115 | PC_06    |   175 |          |   235 | GND      |       |          |
|    56 | DAI1_PIN13 |   116 | PC_11    |   176 | PD_07    |   236 |          |       |          |

Table 3-6: Mating Connector

| Part Description    | Manufacturer     | Part Number      |
|---------------------|------------------|------------------|
| 314 Pin MXM 3.0     |                  | PCB Edge         |
| Mating Connector    | Mating Connector | Mating Connector |
| 314 Pin PCI Express | Amphenol         | 10151114-001TLF  |