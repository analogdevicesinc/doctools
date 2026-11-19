<!-- lastmod 2026-07-28 -->
Analog Devices, Inc. One Analog Way Wilmington, MA 01887

## EV-SOMCRR2-EZKIT ® Manual

Revision 1.0, June 2026 Part Number 82-EV-SOMCRR-EZKIT-01

<!-- image -->

## Copyright Information

© 2026 Analog Devices, Inc., ALL RIGHTS RESERVED. This document may not be reproduced in any form without prior, express written consent from Analog Devices, Inc.

## Disclaimer

Analog Devices, Inc. reserves the right to change this product without prior notice. Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use; nor for any infringement of patents or other rights of third parties which may result from its use. No license is granted by implication or otherwise under the patent rights of Analog Devices, Inc.

## Trademark and Service Mark Notice

The Analog Devices logo, Blackfin, Blackfin+, SHARC, SHARC+, CrossCore, VisualDSP++, EZ-KIT, EZ-Extender, and EngineerZone are registered trademarks of Analog Devices, Inc.

All other brand and product names are trademarks or service marks of their respective owners.

## Regulatory Compliance

The EV-SOMCRR2-EZKIT evaluation board is designed to be used solely in a laboratory environment. The board is not intended for use as a consumer-end product or as a portion of a consumer-end product. The board is an open system design, which does not include a shielded enclosure and, therefore, may cause interference to other electrical devices in close proximity. This board should not be used in or near any medical equipment or RF devices.

The EV-SOMCRR2-EZKIT evaluation board contains ESD (electrostatic discharge) sensitive devices. Electrostatic charges readily accumulate on the human body and equipment and can discharge without detection. Permanent damage may occur on devices subjected to high-energy discharges. Proper ESD precautions are recommended to avoid performance degradation or loss of functionality. Store unused boards in the protective shipping package.

<!-- image -->

## Contents

| Preface                                                                                                                                                                                                                                                                                                         |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Purpose of This Manual.................................................................................................................................1-1                                                                                                                                                      |
| Manual Contents ...........................................................................................................................................1-1                                                                                                                                                  |
| Technical Support ..........................................................................................................................................1-2                                                                                                                                                 |
| Supported Tools.............................................................................................................................................1-2                                                                                                                                                 |
| Product Information......................................................................................................................................1-3                                                                                                                                                    |
| Analog Devices Website..............................................................................................................................1-3                                                                                                                                                         |
| EngineerZone .............................................................................................................................................1-3                                                                                                                                                   |
| Using the Board                                                                                                                                                                                                                                                                                                 |
| Product Overview..........................................................................................................................................2-1                                                                                                                                                   |
| Package Contents...........................................................................................................................................2-2                                                                                                                                                  |
| Default Configuration ...................................................................................................................................2-3                                                                                                                                                    |
| CrossCore Embedded Studio (CCES) Setup ..................................................................................................2-3                                                                                                                                                                    |
| Debug Agent..................................................................................................................................................2-3                                                                                                                                                |
| Power-On-Self Test........................................................................................................................................2-4                                                                                                                                                   |
| Reference Design Information .......................................................................................................................2-4                                                                                                                                                         |
| Automotive Audio Bus A 2 B Interface.............................................................................................................2-4                                                                                                                                                            |
| 25LC010AT - 1K SPI Serial EEPROM .........................................................................................................2-4                                                                                                                                                                   |
| ADAU1966A - 16 Channel, High Performance, 192kHz, 24-Bit DAC .........................................................2-5                                                                                                                                                                                       |
| ADAU1979 - Quad Analog-to-Digital Converter ..........................................................................................2-5                                                                                                                                                                       |
| ADM3056E - Signal and Power Isolated CAN Transceiver............................................................................2-5                                                                                                                                                                             |
| ADIN1300CCPZ- 10/100/1000 Ethernet Physical Layer .............................................................................2-6                                                                                                                                                                              |
| IS25LX256 - 256M-bit Serial Octal Flash Memory .......................................................................................2-6                                                                                                                                                                       |
| Hardware Reference                                                                                                                                                                                                                                                                                              |
| System Architecture .......................................................................................................................................3-1 Software-Controlled Switches (SoftConfig)....................................................................................................3-3 |

| Overview of SoftConfig..............................................................................................................................3-3                                                                                     |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SoftConfig on the Board.............................................................................................................................3-6                                                                                     |
| Programming SoftConfig Switches .............................................................................................................3-6                                                                                            |
| Switches.........................................................................................................................................................3-9                                                                        |
| Reset Pushbutton ( RESET) .....................................................................................................................3-10                                                                                         |
| GPIO Pushbuttons ( PB1, PB2, PB3, PB4) ....................................................................................3-10                                                                                                             |
| JTAG Interface ( S11)..............................................................................................................................3-10                                                                                     |
| Jumpers .......................................................................................................................................................3-11                                                                         |
| DAC Clock( P36) ....................................................................................................................................3-11                                                                                    |
| HADC ( P4 and P5)............................................................................................................................3-11                                                                                           |
| LEDs ...........................................................................................................................................................3-12                                                                        |
| A 2 B Interface LEDs ( DS7, DS8, DS9, DS10, DS11, DS12) ....................................................3-12                                                                                                                            |
| GPIO ( DS1, DS2, DS3, DS4, DS5, DS6, PB1_LED, PB2_LED, PB3_LED, PB4_LED ).. ...........................................................................................................................................................3-12 |
| Reset ( DS23) ...........................................................................................................................................3-13                                                                               |
| Connectors ..................................................................................................................................................3-13                                                                           |
| SoM 2.0 Interface Connection ( SOMA, SOMB) .....................................................................................3-14                                                                                                        |
| Audio Input/Output ( P13, P15, P16)..............................................................................................3-16                                                                                                       |
| Audio Output ( P11, P12, P13, P14) ............................................................................................3-17                                                                                                         |
| S/PDIF Digital ( J1, J2) ......................................................................................................................3-17                                                                                         |
| S/PDIF Optical Tx/RX ( M1, M2)..........................................................................................................3-17                                                                                                |
| MLB ( P38, P42) .................................................................................................................................3-17                                                                                       |
| Sigma Studio ( P30, P31) .....................................................................................................................3-17                                                                                          |
| A 2 B ( J4, J5, P3, P4) .....................................................................................................................3-17                                                                                           |
| Ethernet 10/100/1000 ( P1, P2) ...........................................................................................................3-18                                                                                              |
| Power Plug ( P7) ......................................................................................................................................3-18                                                                                 |

## 1 Preface

Thank you for purchasing the Analog Devices, Inc. EV-SOMCRR2-EZKIT carrier evaluation board.

The EV-SOMCRR2-EZKIT carrier board is a backplane plug-in card designed for use with System on Module (SoM) evaluation boards. Together, these boards create a full evaluation system to demonstrate Analog Devices embedded processor feature sets. The SoM module features the processor, required power, and external memory circuitry; and the carrier board provides all the peripheral functionality necessary to evaluate an embedded application.

The EV-SOMCRR2-EZKIT carrier board is compatible with numerous SoM boards and works with the Analog Devices development tools to test the capabilities of Analog Devices processors.

The evaluation board is designed to be used in conjunction with the CrossCore Embedded Studio ® development environment for advanced application code development and debug, with features that enable the ability to:

- Create, compile, assemble, and link application programs written in C++, C, and assembly
- Load, run, step, halt, and set breakpoints in application programs
- Read and write data and program memory
- Read and write core and peripheral registers

In addition to the system peripherals, there is an on-board debugger on the EV-SOMCRR2-EZKIT carrier board. The on-board debugger eliminates the need to purchase the In-Circuit Emulator (ICE) that is necessary when using a SoM module in standalone mode.

## Purpose of This Manual

This manual provides instructions for installing the product hardware (board). This manual describes the operation and configuration of board components and provides guidelines for running code on the board.

## Manual Contents

The manual consists of:

- Using the board

Provides basic board information.

- Hardware Reference

Provides information about the hardware aspects of the board.

- Bill of Materials

A companion file in PDF format that lists all of the components used on the board is available on the website at http://www.analog.com/EV-SOMCRR2-EZKIT.

- Schematic

A companion file in PDF format documenting all of the circuits used on the board is available on the website at http://www.analog.com/EV-SOMCRR2-EZKIT.

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

## Supported Tools

Information about code development tools for the EV-SOMCRR2-EZKIT evaluation board and SHARC-FX product family is available at:

[http://www.analog.com/EV-SOMCRR2-EZKIT](http://www.analog.com/EV-SOMCRR-EZKIT)

## Product Information

Product information can be obtained from the Analog Devices website and the online help system.

Information about the ADI product family is available at:

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

Below is an image of the EV-SOMCRR2-EZKIT carrier board.

Figure 2-1: Board View

<!-- image -->

## The board features:

- System-on-Module 2.0 (SoM 2.0) connector
- Compatible with Analog Devices DSP SoMs
- xSPI flash (xSPI1) memory

- ISSI IS72WVO32M8AWO256-200HLA2
- 256Mbit MCP
- xSPI Flash and RAM combo
- SPI EEPROM
- Microchip
- Audio
- Analog Devices ADAU1966A
- Analog Devices ADAU1979 - Quad Analog-to-Digital Converter
- 9 3.5mm Stereo connectors: 16 outputs, 8 inputs
- DB25 for TASCAM25 interface
- A 2 B
- Two A 2 B interface connectors for the A 2 B mini modules per SOM location
- Ethernet
- ADIN1300 10/100/1000 Gigabit Ethernet
- Debug Interface (JTAG)
- On-Board debug agent
- LEDs
- 24 LEDs: one board reset (red), 10 general-purpose (amber), 12 A 2 B LEDs, and one RGB LED for on-board debug agent
- Pushbuttons
- Three pushbuttons: one reset and two IRQ/Flag
- External power supply
- CE compliant
- 12V @1.6 Amps

## Package Contents

Your EV-SOMCRR2-EZKIT package contains the following items.

- EV-SOMCRR2-EZKIT board
- Universal 12V DC power supply

- Three USB 2.0 type A to C cable

Contact the vendor where you purchased your EV-SOMCRR2-EZKIT evaluation board or contact Analog Devices, Inc. if any item is missing.

## Default Configuration

The Default Hardware Setup figure shows the default settings for jumpers and switches and the location of the jumpers, switches, connectors, and LEDs. Confirm that your board is in the default configuration before using the board.

Figure 2-2: Default Hardware Setup

<!-- image -->

## CrossCore Embedded Studio (CCES) Setup

Information on using the CCES tools is available at: https://analog.com/cces-quickstart

## Debug Agent

The EV-SOMCRR2-EZKIT provides a JTAG connection via an onboard Debug Agent. The Debug Agent uses a USB connection to the PC and allows debugging of Analog Devices DSPs without the need of an external ICE.

To use this Debug Agent, all positions on SW1 must be in the ON position. If using an external ICE, such as the ICE-1500, all positions on SW1 must be in the OFF position.

## Power-On-Self Test

The Power-On-Self-Test Program (POST) tests all the EZ-KIT carrier board peripherals and validates functionality as well as connectivity to the processor. Once assembled, each EZ-KIT carrier board is fully tested for an extended period of time with POST for all the compatible SoM modules. All EZ-KIT carrier boards are shipped with POST preloaded into flash memory. The POST is executed by resetting the board and connecting the USB To UART to your PC with an open terminal window. The POST also can be used as a reference for a custom software design or hardware troubleshooting.

Note that the source code for the POST program is included in the Board Support Package (BSP) along with the readme file that describes how the board is configured to run POST.

## Reference Design Information

A reference design info package is available for download on the Analog Devices Web site. The package provides information on the schematic design, layout, fabrication, and assembly of the board.

The information can be found at:

[http://www.analog.com/EV-SOMCRR2-EZKIT](http://www.analog.com/EV-SOMCRR-EZKIT)

## Automotive Audio Bus A 2 B Interface

The Automotive Audio Bus (A 2 B ® ) provides a multichannel, I 2 S/TDM link over distances of up to 15 m between nodes. It embeds bidirectional synchronous pulse-code modulation (PCM) data (for example, digital audio), clock, and synchronization signals onto a single differential wire pair. A 2 B supports a direct point to point connection and allows multiple, daisy-chained nodes at different locations to contribute and/or consume time division multiplexed channel content.

The A 2 B Interface connects processor evaluation boards, such as the EV-SOMCRR-EZKIT to A 2 B daugher cards, such as the ADZS-AD2428MINI board. This allows for an expandable and configurable evaluation system for ADI DSPs and A 2 B technologies.

## 25LC010AT - 1K SPI Serial EEPROM

The Microchip Technology Inc. 25LC010AT is a 1 Kbit Serial Electrically Erasable Programmable Read-Only Memory (EEPROM). The memory is accessed via a simple Serial Peripheral Interface (SPI) compatible serial bus. The bus signals required are a clock input (SCK) plus separate data in (SI) and data out (SO) lines. Access to the device is controlled through a Chip Select (CS) input.

## ADAU1966A - 16 Channel, High Performance, 192kHz, 24-Bit DAC

The ADAU1966A is a high performance, single-chip digital-to-analog converter (DAC) that provides 16 DACs with differential or single-ended output using the patented Analog Devices, Inc., sigma-delta (Σ-Δ) architecture. A SPI/I 2 C port is included, allowing a micro-controller to adjust volume and many other parameters. The ADAU1966A operates from 2.5 V digital and 3.3 V analog supplies. A linear regulator is included to generate the digital supply voltage from the analog supply voltage.

The ADAU1966A is designed for low EMI. This consideration is apparent in both the system and circuit design architectures. By using the on-board PLL to derive the internal master clock from an external LRCLK, the ADAU1966A can eliminate the need for a separate high frequency master clock and can be used with or without a bit clock. The DACs are designed using the latest Analog Devices continuous time architectures to further minimize EMI.

## ADAU1979 - Quad Analog-to-Digital Converter

The ADAU1979 incorporates four high performance, analog-to-digital converters (ADCs) with 4.5 V rms capable ac-coupled inputs. The ADCs use a multibit sigma-delta (Σ-Δ) architecture with continuous time front end for low EMI. An I 2 C/SPI control port is included that allows a microcontroller to adjust volume and many other parameters. The ADAU1979 uses only a single 3.3 V supply. The device internally generates the required digital DVDD supply. The low power architecture reduces the power consumption. The on-chip PLL can derive the master clock from an external clock input or frame clock (sample rate clock). When fed with the frame clock, it eliminates the need for a separate high frequency master clock in the system.

## ADM3056E - Signal and Power Isolated CAN Transceiver

The ADM3056E is a 5.7 kV rms isolated controller area network (CAN) physical layer transceiver. The ADM3056E fully meets the CAN-FD ISO 11898-2: 2016 requirements and is further capable of supporting data rates as high as 12 Mbps.

The device employs Analog Devices, Inc., iCoupler® technology to combine a highly robust 3-channel isolator and a CAN transceiver into a single SOIC, surface-mount package. The ADM3056E provides galvanic isolation between the CAN controller and physical layer bus.

Safety and regulatory approvals (pending) for 5.7 kV rms isolation withstand voltage, 849 VPEAK working insulation voltage, 8 kV surge, and 8.3 mm creepage and clearance, ensure that the ADM3056E meets isolation requirements for high voltage applications.

Low propagation delays through the isolation support longer bus cables. Slope control mode is available for standard CAN at low data rates. Standby mode can minimize power consumption when the bus is idle, or if the node goes offline. Silent mode allows the TXD input to be ignored for listen only functionality.

Dominant timeout functionality protects against bus lock-up in a fault condition, and current limiting and thermal shutdown features protect against output short circuits. The device is fully specified over the -40°C to +125°C industrial temperature range and is available in a 16-lead, increased creepage, wide-body SOIC package.

## ADIN1300CCPZ- 10/100/1000 Ethernet Physical Layer

The ADIN1300 is a low power, single port, Gigabit Ethernet transceiver with low latency and power consumption specifications primarily designed for industrial Ethernet applications).

This design integrates an energy efficient Ethernet (EEE) physical layer device (PHY) core with all associated common analog circuitry, input and output clock buffering, management interface and subsystem registers, and MAC interface and control logic to manage the reset and clock control and pin configuration.

The ADIN1300 is available in a 6 mm × 6 mm, 40-lead lead frame chip scale package (LFCSP). The device operates with a minimum of 2 power supplies, 0.9 V and 3.3 V, assuming the use of a 3.3 V MAC interface supply. For maximum flexibility in system level design, a separate VDDIO supply enables the management data input/output (MDIO) and MAC interface supply voltages to be configured independently of the other circuitry on the ADIN1300, allowing operation at 1.8 V, 2.5 V, or 3.3 V. At power-up, the ADIN1300 is held in hardware reset until each of the supplies has crossed its minimum rising threshold value. Brown-out protection is provided by monitoring the supplies to detect if one or more supply drops below a minimum falling threshold (see Table 19 on the datasheet), and holding the device in hardware reset until the power supplies return and satisfy the power-on reset (POR) circuit.

The MII management interface (also referred to as MDIO interface) provides a 2-wire serial interface between a host processor or MAC (also known as management station (STA)) and the ADIN1300, allowing access to control and status information in the PHY core management registers. The interface is compatible with both the IEEE 802.3 Standard Clause 22 and Clause 45 management frame structures.

The ADIN1300 can support cable lengths up to 150 meters at Gigabit speeds and 180 meters when operating at 100 Mbps or 10 Mbps.

## IS25LX256 - 256M-bit Serial Octal Flash Memory

The IS25LX256/128 and IS25WX256/128 Serial Flash memory offer a versatile storage solution with high flexibility and performance in a simplified pin count package. ISSI's "Industry Standard Serial Interface" Flash is for systems that require limited space, a low pin count, and low power consumption. The device is compliant with JEDEC Standard xSPI (eXpanded Serial Peripheral Interface).

Nonvolatile and volatile configuration registers enable respective default and temporary settings such as READ operation dummy cycles and wrap modes, memory protection, output buffer impedance, SPI protocol type, and XIP mode.

Memory is organized as uniform 128KB sectors, 4KB and 32KB subsectors, and 256 byte pages. Optional 64KB sectors are also supported.

Direct boot in Octal DDR protocol provides high performance and ease of use, enabling communication between host and device without need to configure extended SPI protocol operations. However, the devices still support both extended SPI and Octal DDR protocols to ensure legacy system support and easy migration path. The extended SPI protocol supports address and data transmission on one or eight data lines, depending on the command.

## 3 Hardware Reference

This chapter describes the hardware design of the EV-SOMCRR2-EZKIT carrier board.

## System Architecture

The board's configuration is shown in the Block Diagram figure.

Figure 3-1: Block Diagram

<!-- image -->

This Carrier board is designed to demonstrate the connected System on Module processor's capabilities. The peripherals help evalaute the processor's features with audio DAC and ADCs, S/PDIF, 10/100/1000 ethernet, CAN, and A 2 B expansion.

User I/O to the processor is provided in the form of two pushbuttons and three LEDs.

The software-controlled switches (SoftConfig) facilitate the switch multi-functionality by disconnecting the pushbuttons from their associated processor pins and reusing the pins elsewhere on the board.

## Software-Controlled Switches (SoftConfig)

On the board, most of the traditional mechanical switches and jumpers have been replaced by I 2 C software-controlled switches. The remaining mechanical switches are provided for the boot mode and pushbuttons. Reference any SoftConfig*.c file found in the installation directory for an example of how to set up the SoftConfig feature of the board through software. The SoftConfig section of this manual serves as a reference to any user that intends to modify an existing software example. If software provided by ADI is used, there should be little need to reference this section.

NOTE: Care should be taken when changing SoftConfig settings not to create a conflict with interfaces. This is especially true when connecting extender cards.

## Overview of SoftConfig

In order to further clarify the use of electronic single FET switches and multi-channel bus switches, an example of each is illustrated and compared to a traditional mechanical switching solution. This is a generic example that uses similar FET and bus switch components that are on the board.

After this generic discussion, there is a detailed explanation of the SoftConfig interface specific to the EVSOMCRR2-EZKIT carrier board.

The Example of Individual FET Switches figure shows two individual FET switches (Pericom PI3A125CEX) with reference designators UA and UB. Net names ENABLE\_A and ENABLE\_B control UA and UB. The default FET switch enable settings in this example are controlled by resistors RA and RB, which pull the enable pin 1 of UA and UB to ground (low), respectively. In a real example, these enable signals are controlled by the Microchip I/O expander. The default pull-down resistors connects the signals EXAMPLE\_SIGNAL\_A and EXAMPLE\_SIGNAL\_B and also connects signals EXAMPLE\_SIGNAL\_C and EXAMPLE\_SIGNAL\_D. To disconnect EXAMPLE\_SIGNAL\_A from EXAMPLE\_SIGNAL\_B, the Microchip I/O expander is used to change ENABLE\_A to a logic 1 through software that interfaces with the Microchip I/O expander. The same procedure for ENABLE\_B disconnects EXAMPLE\_SIGNAL\_C from EXAMPLE\_SIGNAL\_D.

Figure 3-2: Example of Individual FET Switches

<!-- image -->

The following figure shows the equivalent circuit to the Example of Individual FET Switches figure but utilizes mechanical switches that are in the same package. Notice the default is shown by black boxes located closer to the ON label of the switches. In order to disconnect these switches, physically move the switch to the OFF position.

Figure 3-3: Example of a Mechanical Switch (Equivalent to Example of Individual FET Switches Figure)

<!-- image -->

The Example of Bus Switch figure shows a bus switch example, reference designator UC (Pericom PI3LVD512ZHE), selecting between lettered functionality and numbered functionality. The signals on the left side are multiplexed signals with naming convention letter\_number. The right side of the circuit shows the signals separated into letter and number, with the number on the lower group (0B1) and the letter on the upper group (0B2). The default setting is controlled by the signal CONTROL\_LETTER\_NUMBER which is pulled low. This selects the number signals on the right to be connected to the multiplexed signals on the left by default. In this example, the Microchip IO expander is not shown but controls the signal CONTROL\_LETTER\_NUMBER and allows the user to change the selection through software.

Figure 3-4: Example of a Bus Switch

<!-- image -->

The following figure shows the equivalent circuit to the Example of Bus Switch figure but utilizes mechanical switches. Notice the default for reference designators SWC and SWD is illustrated by black boxes located closer to the ON label of the switches to enable the number signals by default. Also notice the default setting for reference designators SWE and SWF is OFF. In order to connect the letters instead of the numbers, the user physically changes all switches on SWC and SWD to the OFF position and all switches on SWE and SEF to the ON position.

Figure 3-5: Example of a Mechanical Switch (Equivalent to Example of Bus Switch)

<!-- image -->

## SoftConfig on the Board

Two Microchip ADP5587 GPIO expanders provide control for individual electronic switches. The TWI interface of the processor communicates with the Microchip devices. There are individual switches with default settings that enable basic board functionality.

The Default Processor Interface Availability table lists the processor and board interfaces that are available by default. Note that only interfaces affected by software switches are listed in the table.

Table 3-1: Default Processor Interface Availability

| Interface            | Availability by Default   |
|----------------------|---------------------------|
| SPDIF Analog         | Disabled                  |
| SPDIF Digital        | Disabled                  |
| ADAU1966 Reset       | Enabled                   |
| ADAU19179_A Reset    | Enabled                   |
| ADAU19179_B Reset    | Enabled                   |
| ADC1 Route           | Connected to SOM A        |
| ADC2 Route           | Connected to SOM A        |
| Push Buttons Enabled | Enabled                   |

## Programming SoftConfig Switches

On the board, an ADI ADP5587-1 devices exist. The ADP5587 can be configured as a GPIO extender or a keypad interface. It is used as a GPIO Extended on the System on Module evaluation board.

Refer to the ASP5587-1 datasheet for programming information. https://www.analog.com/media/en/technical-documentation/data-sheets/adp5587.pdf

Each example in the Board Support Software (BSP) includes source files that program the soft switches, even if the default settings are being used. The README for each example identifies only the signals that are being changed from their default values. The code that programs the soft switches is located in the SoftConfig\_XXX.c file in each example where XXX is the name of the baord.

The part number of the ADP5587-1 determines the address of the IC. The ADP5587ACPZ has (I 2 C Hardware Address 0x68 and the ADP5587ACPZ-1 has I 2 C Hardware Address 0x60).

Table below Output Signals of ADP5587-1 GPIO Expander (U8) show the output signals of the ADI GPIO extender (U8), with a TWI address of 0110 100X, where X represents the read or write bit. The signals that control an individual FET have an entry in the FET column. The Component Connected column shows the board IC that is connected if the FET is enabled. The (U8) is controlling the enable signal of a FET switch. Also note that if a particular functionality of the processor signal is being used, it is in bold font in the Processor Signal column.

Table 3-2: Output Signals of ADP5587-1 GPIO Extender (U8) for SOM A

| Con- nec- tion   | Signal Name               | Description                     | FET           | Processor Signal (if applicable)   | Connected   | Default   |
|------------------|---------------------------|---------------------------------|---------------|------------------------------------|-------------|-----------|
| R0               | ETH0_RESET*               | ADIN1300 Reset                  |               | None                               | U1          | High      |
| R1               | SPDIF1_EN                 | SPDIF1 Enable                   | U67           | None                               | M1          | High      |
| R2               | ADAU1966A_R ESET_SOM_A    | ADAU1966A DAC Reset             |               | None                               | U33         | High      |
| R3               | ADAU1979_A_ RESET_SOM_A   | ADAU1979 A Reset                |               | None                               | U18         | High      |
| R4               | ADAU19179_B _RESET_SOM_ A | ADAU1979 B Reset                |               | None                               | U19         | High      |
| R5               | PUSHBUTTON_ A_EN          | Enable Pushbuttons on SOM A     | U7            |                                    |             | High      |
| R6               | SPDIF1_OPT_ EN            | Enables SPDIF Optical on SOM A  | U74           |                                    | M1          | High      |
| R0               | SPDIF1_COAX _EN           | Enables SPDIF COAX on SOM A     | U74           |                                    | U70         | High      |
| C0               | ADC1_ROUTE                | Sets which SOM ADC1 is rout- ed | U34, U35      |                                    | U18         | High      |
| C1               | ADC2_ROUTE                | Sets which SOM ADC2 is rout- ed | U36, U37      |                                    | U19         | High      |
| C2               | DAC Route                 | Sets which SOM DAC is routed    | U38, U39, U40 |                                    | U33         | High      |

Table 3-2: Output Signals of ADP5587-1 GPIO Extender (U8) for SOM A (Continued)

| Con- nec- tion   | Signal Name   | Description                                                               | FET      | Processor Signal (if applicable)               | Connected                             | Default   |
|------------------|---------------|---------------------------------------------------------------------------|----------|------------------------------------------------|---------------------------------------|-----------|
| C3               | DAI1_ROUTE    | Route DAI1 signals between A2B connectors or between SOM A and B modules. | U45, U47 | DAI1_PIN17, DAI1_PIN18, DAI1_PIN19, DAI1_PIN20 | SOM A2B Connector s or SOM A to SOM B | High      |
| C4               | QSPI_ROUTE    | Route SQPI signals between A2B connectors or between SOM A and B modules. | U46, U48 | QSPI_CLK, QSPI_CITO, QSPI_COTI, QSPI_SEL1      | SOM A2B Connector s or SOM A to SOM B | High      |
| C5               | A2B1_IO1      | A2B1 IO1 Signal.                                                          |          |                                                |                                       | High      |
| C6               | A2B1_IO1      | A2B1 IO2 Signal.                                                          |          |                                                |                                       | High      |
| C7               | A2B1_IO7      | A2B1 IO7 Signal.                                                          |          |                                                |                                       | High      |
| C8               | A2B2_IO1      | A2B2 IO1 Signal.                                                          |          |                                                |                                       | High      |
| C9               | A2B2_IO2      | A2B2 IO2 Signal.                                                          |          |                                                |                                       | High      |

Table 3-3: Output Signals of ADP5587-1 GPIO Extender (U51) for SOM B

| Con- nec- tion   | Signal Name               | Description                    | FET   | Processor Signal (if applicable)   | Connected   | Default   |
|------------------|---------------------------|--------------------------------|-------|------------------------------------|-------------|-----------|
| R0               | ETH0_RESET*               | ADIN1300 Reset                 |       | None                               | U2          | High      |
| R1               | SPDIF2_EN                 | SPDIF2 Enable                  | U69   | None                               | M2          | High      |
| R2               | ADAU1966A_R ESET_SOM_B    | ADAU1966A DAC Reset            |       | None                               | U33         | High      |
| R3               | ADAU1979_A_ RESET_SOM_B   | ADAU1979 B Reset               |       | None                               | U18         | High      |
| R4               | ADAU19179_B _RESET_SOM_ B | ADAU1979 B Reset               |       | None                               | U19         | High      |
| R5               | PUSHBUTTON_ B_EN          | Enable Pushbuttons on SOM B    | U7    |                                    |             | High      |
| R6               | SPDIF2_OPT_ EN            | Enables SPDIF Optical on SOM B | U75   | DAI0_PIN19, DAI0_PIN20             | M2          | High      |
| R0               | SPDIF2_COAX _EN           | Enables SPDIF COAX on SOM B    | U75   | DAI0_PIN19, DAI0_PIN20             | U72         | High      |
| C0               |                           |                                |       |                                    |             |           |

Table 3-3: Output Signals of ADP5587-1 GPIO Extender (U51) for SOM B (Continued)

| Con- nec- tion   | Signal Name   | Description      | FET   | Processor Signal (if applicable)   | Connected   | Default   |
|------------------|---------------|------------------|-------|------------------------------------|-------------|-----------|
| C1               |               |                  |       |                                    |             |           |
| C2               |               |                  |       |                                    |             |           |
| C3               |               |                  |       |                                    |             |           |
| C4               |               |                  |       |                                    |             |           |
| C5               | A2B1_IO1      | A2B1 IO1 Signal. |       |                                    |             | High      |
| C6               | A2B1_IO1      | A2B1 IO2 Signal. |       |                                    |             | High      |
| C7               | A2B1_IO7      | A2B1 IO7 Signal. |       |                                    |             | High      |
| C8               | A2B2_IO1      | A2B2 IO1 Signal. |       |                                    |             | High      |
| C9               | A2B2_IO2      | A2B2 IO2 Signal. |       |                                    |             | High      |

## Switches

This section describes operation of the switches. The switch locations are shown in the Switch/Jumper Locations figure.

Figure 3-6: Switch/Jumper Locations

<!-- image -->

## Reset Pushbutton ( RESET)

The reset pushbutton resets the ADI processor. The reset signal also is connected to the SoM interface connectors via the SYS\_HWRST signal. Reset ( DS23) is used to indicate when the board is in reset.

## GPIO Pushbuttons ( PB1, PB2, PB3, PB4)

The GPIO pushbuttons are connected to the processor's signals GPIO1 and GPIO2, respectively.

The GPIO pushbuttons can be disconnected from the processor by setting SoftConfig. See Software-Controlled Switches (SoftConfig) for more information.

## JTAG Interface ( S11)

The JTAG Interface switch enables/disables the on-board debug agent. When in the disabled configuration, an ICE can be attached to the JTAG header on the SoM module to provide on-chip debug capabilities.

Table 3-4: Debug Agent Enable

| Location   | Position   |
|------------|------------|
| SW11.1     | ON         |
| SW11.2     | ON         |
| SW11.3     | ON         |
| SW11.4     | ON         |
| SW11.5     | ON         |
| SW11.6     | ON         |
| SW11.7     | OFF        |
| SW11.8     | OFF        |

Table 3-5: Debug Agent Disable

| Location   | Position   |
|------------|------------|
| SW11.1     | OFF        |
| SW11.2     | OFF        |
| SW11.3     | OFF        |
| SW11.4     | OFF        |
| SW11.5     | OFF        |
| SW11.6     | OFF        |
| SW11.7     | OFF        |
| SW11.8     | OFF        |

The EV-SOMCRR2-EZKIT has a JTAG routing circuit that can routing the Debug Agent (or emulator) to SOM A or SOM B, or Daisy Chain them both into the same route.

Table 3-6: JTAG Routing Direct to SOM A

| Location   | Position   |
|------------|------------|
| S1         | 1-2        |
| S2         | 1-2        |

Table 3-7: JTAG Routing Direct to SOM B

| Location   | Position   |
|------------|------------|
| S1         | 1-2        |
| S2         | 2-3        |

Table 3-8: JTAG Routing Daisy Chain

| Location   | Position   |
|------------|------------|
| S1         | 2-3        |
| S2         | 1-2        |

## Jumpers

This section describes the functionality of the configuration jumpers. The Switch/Jumper Locations figure shows the jumper locations.

## DAC Clock( P36)

The DAC Clock jumper connects 24.576 MHz to the MCLKI of the ADAU1966A DAC. This also connects to the DAC\_AUDIO\_CLK signal.

## HADC ( P4 and P5)

The HADC jumper is used to connect the HADC of the processor to various voltages using jumper wires.

| P4 Jumper   | Voltage   |
|-------------|-----------|
| 1 and 2     | GND       |
| 3 and 4     | GND       |
| 5 and 6     | GND       |
| 7 and 8     | GND       |
| 9 and 10    | GND       |

| P4 Jumper   | Voltage   |
|-------------|-----------|
| 11 and 12   | GND       |
| 13 and 14   | GND       |
| 15 and 16   | GND       |

## LEDs

This section describes the on-board LEDs. The LED Locations figure shows the LED locations.

Figure 3-7: LED Locations

<!-- image -->

## A 2 B Interface LEDs ( DS7, DS8, DS9, DS10, DS11, DS12)

The A 2 B Interface LEDs are driven by the connected A2B daughter card on the A2B Interface Connectors. These are connected to A2B IRQ and GPIO signals. Refere to the schematics of the connected A2B or related daughter card for more information.

## GPIO ( DS1, DS2, DS3, DS4, DS5, DS6, PB1\_LED, PB2\_LED, PB3\_LED, PB4\_LED )

5 LEDs are connected to the general-purpose I/O pins of the processor in each of the SOM connectors.(see the GPIO LEDs table). The LEDs are active high and are turned ON (amber) by writing a 1 to the correct processor signal.

Table 3-9: GPIO LEDs

| Reference Designator   | Programmable Flag Pin   |
|------------------------|-------------------------|
| DS1                    | MLB_CLK_SOM_A           |
| DS2                    | MLB_SIG_SOM_A           |
| DS3                    | MLB_DAT_SOM_A           |
| PB1_LED                | PB1_LED                 |
| PB2_LED                | PB2_LED                 |
| DS4                    | MLB_CLK_SOM_B           |
| DS5                    | MLB_SIG_SOM_B           |
| DS6                    | MLB_DAT_SOM_B           |
| PB3_LED                | PB3_LED                 |
| PB4_LED                | PB4_LED                 |

## Reset ( DS23)

When ON (red), it indicates that the board is in reset. A master reset is asserted by pressing RESET, which activates the LED. For more information, see Reset Pushbutton ( RESET).

## Connectors

This section describes connector functionality and provides information about mating connectors. The connector locations are shown in the Connector Top and Connector Bottom figures.

Figure 3-8: Connector Top

<!-- image -->

Figure 3-9: Connector Bottom

<!-- image -->

## SoM 2.0 Interface Connection ( SOMA, SOMB)

The SoM 2.0 Interface Connector is a PCB Finger Edge connector designs to connect to the Amphenol ICC 10151114-001TLF. This interface

Table 3-10: SoM 2.0 Interface (Finger Edge)

| Pin   | Signal           |   Pin | Signal     |   Pin | Signal   |   Pin | Signal   |   Pin | Signal   |
|-------|------------------|-------|------------|-------|----------|-------|----------|-------|----------|
| E1    | VDD_SOM +5V      |    57 | DAI1_PIN04 |   117 | PC_07    |   177 |          |   237 | PG_14    |
| E2    | VDD_SOM +5V      |    58 | DAI1_PIN14 |   118 | PC_12    |   178 | PD_06    |   238 | GND      |
| E3    | GND              |    59 | DAI1_PIN05 |   119 | PB_09    |   179 |          |   239 | PG_15    |
| E4    | GND              |    60 | DAI1_PIN15 |   120 | PC_14    |   180 | GND      |   240 |          |
| 1     | TRACE0_CLK       |    61 | DAI1_PIN06 |   121 | GND      |   181 | GND      |   241 | PH_00    |
| 2     | XSPI1_DQS_RW DS* |    62 | DAI1_PIN16 |   122 | PC_13    |   182 | PD_09    |   242 |          |
| 3     | TRACE0_D00       |    63 | DAI1_PIN07 |   123 | PG_01    |   183 |          |   243 | BMODE0   |
| 4     | XSPI1_COTI_D0    |    64 | DAI1_PIN17 |   124 | GND      |   184 | PD_08    |   244 |          |
| 5     | TRACE0_D01       |    65 | DAI1_PIN08 |   125 | PG_00    |   185 |          |   245 | BMODE1   |
| 6     | XSPI1_CITO_D1    |    66 | DAI1_PIN18 |   126 | N/A      |   186 | GND      |   246 |          |
| 7     | TRACE0_D02       |    67 | DAI1_PIN09 |   127 | N/A      |   187 |          |   247 | BMODE2   |
| 8     | XSPI1_D2         |    68 | DAI1_PIN19 |   128 | N/A      |   188 | PA_00    |   248 |          |

Table 3-10: SoM 2.0 Interface (Finger Edge) (Continued)

|   Pin | Signal      |   Pin | Signal     |   Pin | Signal          |   Pin | Signal   |   Pin | Signal            |
|-------|-------------|-------|------------|-------|-----------------|-------|----------|-------|-------------------|
|     9 | TRACE0_D03  |    69 | DAI1_PIN10 |   129 | N/A             |   189 |          |   249 | BMODE3            |
|    10 | XSPI1_D3    |    70 | DAI1_PIN20 |   130 | N/A             |   190 | PA_01    |   250 |                   |
|    11 | TRACE0_D04  |    71 | GND        |   131 | N/A             |   191 | GND      |   251 | GND               |
|    12 | XSPI1_D4    |    72 | GND        |   132 | N/A             |   192 | PA_02    |   252 |                   |
|    13 | TRACE0_D05  |    73 | GND        |   133 | GND             |   193 | GND      |   253 | PF_04             |
|    14 | XSPI1_D5    |    74 | HADC_VIN0  |   134 | GND             |   194 | PA_03    |   254 |                   |
|    15 | TRACE0_D06  |    75 | PH_01      |   135 |                 |   195 |          |   255 | PF_05             |
|    16 | XSPI1_D6    |    76 | HADC_VIN1  |   136 | JTG_TMS         |   196 | GND      |   256 |                   |
|    17 | TRACE0_D07  |    77 | PG_02      |   137 |                 |   197 |          |   257 | PF_06             |
|    18 | XSPI1_D7    |    78 | HADC_VIN2  |   138 | JTG_TCK         |   198 | PA_05    |   258 |                   |
|    19 |             |    79 | PG_03      |   139 |                 |   199 |          |   259 | PF_07             |
|    20 | XSPI1_SEL1* |    80 | HADC_VIN3  |   140 | JTG_TDO         |   200 | PA_04    |   260 |                   |
|    21 | PD_04       |    81 | PG_08      |   141 |                 |   201 |          |   261 | PF_08             |
|    22 | XSPI1_SEL2* |    82 | HADC_VIN4  |   142 | JTG_TDI         |   202 | PA_06    |   262 | CARRIER_DE- TECT* |
|    23 | PB_07       |    83 | PG_09      |   143 |                 |   203 | GND      |   263 | PF_09             |
|    24 | XSPI1_CLK*  |    84 | HADC_VIN5  |   144 | JTG_TRST*       |   204 | PA_07    |   264 | EEPROM_ID0        |
|    25 | PB_08       |    85 | GND        |   145 | GND             |   205 |          |   265 | GND               |
|    26 | XSPI1_CLK   |    86 | HADC_VIN6  |   146 | TARGET_RE- SET* |   206 | GND      |   266 | EEPROM_ID1        |
|    27 | GND         |    87 | PG_04      |   147 |                 |   207 |          |   267 | PF_10             |
|    28 | GND         |    88 | HADC_VIN7  |   148 | GND             |   208 | PH_07    |   268 | GND               |
|    29 | DAI0_PIN01  |    89 | PG_06      |   149 |                 |   209 |          |   269 | PF_11             |
|    30 | DAI0_PIN11  |    90 | GND        |   150 | PA_09           |   210 | PH_06    |   270 |                   |
|    31 | DAI0_PIN02  |    91 | PG_07      |   151 |                 |   211 |          |   271 | PF_12             |
|    32 | DAI0_OIN12  |    92 | PC_04      |   152 | PA_08           |   212 | PH_08    |   272 | GND               |
|    33 | DAI0_PIN03  |    93 | PG_12      |   153 |                 |   213 | GND      |   273 | PF_13             |
|    34 | DAI0_PIN13  |    94 | PC_00      |   154 | GND             |   214 | PH_09    |   274 | TARGET_RE- SET*   |
|    35 | DAI0_PIN04  |    95 | PG_13      |   155 |                 |   215 |          |   275 | PF_14             |
|    36 | DAI0_PIN14  |    96 | PC_01      |   156 | PA_11           |   216 | GND      |   276 | SYS_FAULT*        |
|    37 | DAI0_PIN05  |    97 | GND        |   157 | GND             |   217 |          |   277 | PF_15             |

Table 3-10: SoM 2.0 Interface (Finger Edge) (Continued)

|   Pin | Signal     |   Pin | Signal   |   Pin | Signal   |   Pin | Signal   |   Pin | Signal   |
|-------|------------|-------|----------|-------|----------|-------|----------|-------|----------|
|    38 | DAI0_PIN15 |    98 | PC_02    |   158 | PA_10    |   218 |          |   278 | GND      |
|    39 | DAI0_PIN06 |    99 | PG_05    |   159 |          |   219 |          |   279 | GND      |
|    40 | DAI0_PIN16 |   100 | PC_03    |   160 | GND      |   220 |          |   280 | GND      |
|    41 | DAI0_PIN07 |   101 | PG_11    |   161 |          |   221 |          |   281 | GND      |
|    42 | DAI0_PIN17 |   102 | PC_05    |   162 | PA_13    |   222 |          |       |          |
|    43 | DAI0_PIN08 |   103 | PG_10    |   163 |          |   223 | GND      |       |          |
|    44 | DAI0_PIN18 |   104 | PC_06    |   164 | PA_12    |   224 |          |       |          |
|    45 | DAI0_PIN09 |   105 | PH_02    |   165 |          |   225 | PA_15    |       |          |
|    46 | DAI0_PIN19 |   106 | PC_07    |   166 | GND      |   226 |          |       |          |
|    47 | DAI0_PIN10 |   107 | PH_03    |   167 |          |   227 | PA_14    |       |          |
|    48 | DAI0_PIN20 |   108 | PC_08    |   168 | PB_06    |   228 |          |       |          |
|    49 | GND        |   109 | GND      |   169 | GND      |   229 | GND      |       |          |
|    50 | GND        |   110 | GND      |   170 | PB_05    |   230 |          |       |          |
|    51 | DAI1_PIN01 |   111 | PH_05    |   171 |          |   231 | PB_01    |       |          |
|    52 | DAI1_PIN11 |   112 | PC_09    |   172 | PB_04    |   232 |          |       |          |
|    53 | DAI1_PIN02 |   113 | PH_04    |   173 |          |   233 | PB_00    |       |          |
|    54 | DAI1_PIN12 |   114 | PC_10    |   174 | GND      |   234 |          |       |          |
|    55 | DAI1_PIN03 |   115 | PC_06    |   175 |          |   235 | GND      |       |          |
|    56 | DAI1_PIN13 |   116 | PC_11    |   176 | PD_07    |   236 |          |       |          |

Table 3-11: Mating Connector

| Part Description    | Manufacturer     | Part Number      |
|---------------------|------------------|------------------|
| 314 Pin MXM 3.0     |                  | PCB Edge         |
| Mating Connector    | Mating Connector | Mating Connector |
| 314 Pin PCI Express | Amphenol         | 10151114-001TLF  |

## Audio Input/Output ( P13, P15, P16)

| Part Description    | Manufacturer   | Part Number      |
|---------------------|----------------|------------------|
| 3.5mm Stereo female | Kycon, Inc.    | STX-4335-5BGP-S1 |
| DB25 connector      | NorComp, Inc.  | 178-025-513R571  |
| Mating Cable        | Mating Cable   | Mating Cable     |

Part Description

Standard 3.5mm stereo cable Manufacturer Part Number

## Audio Output ( P11, P12, P13, P14)

Part Description

3.5mm Stereo female Manufacturer Part Number Kycon, Inc.

STX-4335-5BGP-S1

Standard 3.5mm stereo cable Mating Cable

## S/PDIF Digital ( J1, J2)

Part Description

RCA 1x2 female Manufacturer Part Number Switchcraft PJRAS1X2S02X

Mating Cable

Standard S/PDIF cable with RCA connectors

## S/PDIF Optical Tx/RX ( M1, M2)

Part Description Manufacturer Part Number

Fiber optic transmitter CLIFF Electronics FC6842135TR

Standard TOSLINK optical digital cable Mating Cable

## MLB ( P38, P42)

| Part Description   | Manufacturer   | Part Number     |
|--------------------|----------------|-----------------|
| 4 Pin              | Samtec         | TSM-104-01-T-SV |

## Sigma Studio ( P30, P31)

This connector interfaces with SigmaStudio ® through the EVAL-ADUSB2EBZ board. The connector is a 0.1" header. The pinout can be found in the schematic.

## A 2 B ( J4, J5, P3, P4)

| Part Description   | Manufacturer     | Part Number         |
|--------------------|------------------|---------------------|
| 100-pin, 0.64mm    | SAMTEC           | LSS-150-01-L-DV-A-K |
| Mating Connector   | Mating Connector | Mating Connector    |
| 100-pin, 0.64mm    | SAMTEC           | LSS-150-01-L-DV-A-K |

## Ethernet 10/100/1000 ( P1, P2)

| Part Description              | Manufacturer                  | Part Number                   |
|-------------------------------|-------------------------------|-------------------------------|
| RJ45                          | WURTH                         | 7499511440                    |
| Mating Cable                  | Mating Cable                  | Mating Cable                  |
| Standard CAT5e Ethernet cable | Standard CAT5e Ethernet cable | Standard CAT5e Ethernet cable |

## Power Plug ( P7)

| Part Description          | Manufacturer   | Part Number        |
|---------------------------|----------------|--------------------|
| 2.1 mm power jack         | CUI            | PJ-102AH           |
| Mating Cable              | Mating Cable   | Mating Cable       |
| 12.0VDC@1.5A power supply | CUI            | EMSA120150-P5RP-SZ |