<!-- lastmod 2022-10-10 -->
<!-- image -->

## General Description

The Maxim command module (MINIQUSB) receives commands from a PC through the USB to create an SPI™ or SMBus™/I 2 C-compatible interface. Maxim evaluation kits (EV kits) that make use of the MINIQUSB require custom software, and can be ordered together as an evaluation system (EV system). Ordering information for EV systems is located in the EV kit data sheet.

An EV system is an EV kit combined with an interface board such as a MINIQUSB and custom software. Refer to the appropriate EV kit manual for quick start and detailed operating instructions.

The MINIQUSB module is provided as part of selected Maxim EV systems for the purpose of evaluating Maxim/Dallas parts only. The use of the MINIQUSB as a development target is not supported. Refer to the MAXQ2000 Evaluation Kit data sheet for this purpose.

For  Windows ® 95  or  Windows  NT  support,  the CMOD232 or CMAXQ232* should be used instead.

## Contents of MINIQUSB Box

|   QTY | DESCRIPTION                                  |
|-------|----------------------------------------------|
|     1 | MINIQUSB circuit board assembly              |
|     1 | MINIQUSB-XHV expander circuit board assembly |
|     1 | USB high-speed A-to-B cable 5ft (1.5m)       |

SMBus is a trademark of Intel Corp.

Windows is a registered trademark of Microsoft Corp.

*Future product-contact factory for availability.

Features

- ♦ PC-Controlled I/O Platform
- ♦ USB Powered
- ♦ Provides 3.3V at 80mA to EV Kit
- ♦ SPI Bus: 8MHz Burst
- ♦ I 2 C/2-Wire Bus: Fast 400kHz/Standard 100kHz
- ♦ Accepts I 2 C SCL Clock Stretching
- ♦ 1.5k Ω I 2 C Bus Pullup Resistors on Expander Board
- ♦ MINIQUSB-XHV Protects MINIQUSB Against I 2 C Bus Faults Exceeding 3.3V on SCL/SDA

## Ordering Information

| PART      | TYPE   |
|-----------|--------|
| MINIQUSB+ | EV Kit |

## Component Lists

## MINIQUSB PC Board Assembly

| DESIGNATION      |   QTY | DESCRIPTION                                                                              |
|------------------|-------|------------------------------------------------------------------------------------------|
| C1, C12, C14     |     3 | 10µF ±20%, 16V X5R ceramic capacitors (1206) Murata GRM31CR61C106M or TDK C3216X5R1C106M |
| C2, C3           |     2 | 22pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H220J or TDK C1608C0G1H220J  |
| C4               |     1 | 0.033µF ±10%, 16V X5R ceramic capacitor (0603) Taiyo Yuden EMK107BJ333KA                 |
| C5-C10, C17, C18 |     8 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C104K                         |
| C11, C13         |     2 | 1µF ±10%, 16V X5R ceramic capacitors (0603) TDK C1608X5R1C105K                           |
| C15, C16         |     2 | 10pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H100J or TDK C1608C0G1H100J  |

Component Lists continued on next page.

## Maxim MINIQUSB User Guide

## Component Lists (continued)

## MINIQUSB-X Expander Board PC Board Assembly

| DESIGNATION   |   QTY | DESCRIPTION                                            |
|---------------|-------|--------------------------------------------------------|
| D1, D2        |     2 | Schottky diodes, common anode (SOT23) Fairchild BAT54A |
| H1, H2        |     0 | Not installed (8-pin headers)                          |
| J1, J2        |     0 | Not installed (2-pin headers)                          |
| J3            |     1 | Vertical header, 2 x 8 pins                            |
| J4            |     1 | 8-pin straight single-row female receptacle            |
| P3            |     1 | 2 x10 right-angle male header                          |
| Q1, Q2        |     2 | 2N7002 FETs (SOT23) Central Semiconductor 2N7002FC     |
| R1, R2        |     2 | 4.7k Ω ±5% resistors (0805)                            |
| R3, R4        |     2 | 0 Ω ±5% resistors (0805)                               |
| R5, R6        |     2 | 10k Ω ±5% resistors (0805)                             |
| R7, R8        |     0 | Not installed, resistors (0805)                        |
| -             |     1 | PCB, MINIQUSB-XHV                                      |

## Component Suppliers

| SUPPLIER   | PHONE        | WEBSITE               |
|------------|--------------|-----------------------|
| Murata     | 770-436-1300 | www.murata.com        |
| TDK        | 847-803-6100 | www.component.tdk.com |

Note: Indicate you are using the MINIQUSB or MAXQ2000 when contacting these component suppliers.

## Quick Start

Maxim EV systems with ordering numbers ending in EVMINIQU are two-board sets, comprising a MINIQUSB interface board and an EV kit board specific to the device being evaluated. For example, the MAX6889EVMINIQU+ would be a two-board set consisting of the MAX6889EVKIT+ and the MINIQUSB. The following generic  quick  start  procedure  assumes  that  the MINIQUSB board is used with a companion EV kit.

## MINIQUSB PC Board Assembly

| DESIGNATION   |   QTY | DESCRIPTION                                                  |
|---------------|-------|--------------------------------------------------------------|
| J1            |     1 | USB series-B right-angle PC mount receptacle                 |
| J2            |     0 | Not installed, 2 x 5-pin JTAG header                         |
| J3            |     1 | 2 x 8-pin straight double-row female receptacle              |
| J4            |     1 | 8-pin header                                                 |
| L1            |     1 | Ferrite bead (0603) TDK MMZ1608R301A                         |
| R1, R2        |     2 | 27 Ω ±5% resistors (0603)                                    |
| R3            |     1 | 1.5k Ω ±5% resistor (0603)                                   |
| R4            |     1 | 470 Ω ±5% resistor (0603)                                    |
| R5            |     1 | 2.2k Ω ±5% resistor (0603)                                   |
| R6            |     1 | 10k Ω ±5% resistor (0603)                                    |
| R7, R8, R9    |     3 | 3.3k Ω ±5% resistors (0603)                                  |
| R10           |     1 | 169k Ω ±1% resistor (0603)                                   |
| R11           |     1 | 100k Ω ±1% resistor (0603)                                   |
| R12-R16       |     0 | Not installed; shorted by PCB trace (0402)                   |
| U1            |     1 | Microcontroller (68, 10mm x 10mm QFN-EP) Maxim MAXQ2000-RAX+ |
| U2            |     1 | Adjustable output LDO regulator (5 SC70) Maxim MAX8512EXK+T  |
| U3            |     1 | LDO regulator (5 SC70) Maxim MAX8511EXK25+T                  |
| U4            |     1 | USB UART (32, 7mm x 7mm TQFP) FTDI FT232BL                   |
| U5            |     1 | 93C46 type 3-wire EEPROM (8 SO) Atmel AT93C46A-10SU-2.7      |
| Y1            |     1 | 16.000MHz crystal Parallel resonant, 20pF load               |
| Y2            |     1 | 6.000MHz crystal Parallel resonant, 20pF load                |
| Y3            |     0 | Not installed (32.768kHz crystal)                            |
| -             |     1 | PCB, MINIQUSB                                                |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Maxim MINIQUSB User Guide

## Required Equipment

Before you begin, you need the following equipment:

- Any Maxim EV system with the EVMINIQU suffix, such as MAX6889EVMINIQU+

Device-specific EV kit board MINIQUSB interface board USB type A-B cable (included with MINIQUSB)

- Windows 98SE/2000/XP computer with a spare USB port
- Administrator privileges may be required when first installing the device on Windows 2000/XP

Note: In the following section(s), software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software. Text in bold and underlined refers to items from the Windows 98SE/2000/XP operating system.

## Procedure

Do not turn on the power until all connections are complete.

- 1) Visit  the  Maxim Integrated Products website (www.maxim-ic.com/evkitsoftware) to download the most recent version of the EV kit software. Save the EV kit software to a temporary folder and uncompress the file (if it is a .ZIP file).
- 2) Install the EV kit software on your computer by running the INSTALL.EXE program inside the temporary folder (or, if the download was a .MSI file instead of a .ZIP, just launch the .MSI file). The program files are copied and icons are created in the Windows Start | Programs menu.
- 3) Ensure that the companion EV kit board's jumper settings are correct. Refer to your companion EV kit's documentation.
- 4) Connect the boards together.
- 5) Connect the USB cable between the MINIQUSB and the computer. When you plug in the MINIQUSB board for the first time, the Windows plug-and-play system detects the new hardware and automatically runs the Add New Hardware Wizard .  (If  the Add New Hardware Wizard does not appear after a minute, unplug from the USB and plug it in again.) Make certain to specify the search location. Maxim software designed for MINIQUSB includes a copy of the device driver in the installed software directory. Refer to Application Note 3601: Troubleshooting Windows Plug-and-Play and USB for Maxim Evaluation Kits for more details.
- 6) During device driver installation, Windows XP shows a warning message indicating that the device driver Maxim uses does not contain a digital signature. This is not an error condition. It is safe to proceed with the installation.
- 7) Start  the  EV  kit  software  by  clicking  its  icon  in  the Windows Start menu.
- 8) Refer to the companion EV kit's documentation for further instructions demonstrating its custom software.

<!-- image -->

## Detailed Description of MINIQUSB

The low-voltage RISC microcontroller, MAXQ2000-RAX+ (U1), processes commands sent by a program running on the PC. Each particular EV kit has its own custom software specific to that kit. The USB 5V power is regulated down to 3.3V by U2. The 2.5V core voltage is regulated by U3. The FTDI FT232BL (U4) provides the USB engine. The connector pinout for J2 is compatible with the MAXQ2000 Evaluation Kit, MAXQ2000-K00 rev B.

## Platform Capabilities and Limitations

## SMBus/I 2 C/2-Wire Interface

The MINIQUSB module offers 'bit-banged' I 2 C at 400kHz (fast mode, the default) or 100kHz (standard mode). SCL/SDA pullup resistors must be provided on a companion EV kit board. Attainable throughput is limited by your PC and its software. The SMBus/I 2 C bus runs in bursts at rated speed, but there is some variable dead time between transfers, due to communications overhead. Properly written PC software can minimize this dead time but cannot completely eliminate it.

## SPI/3-Wire Interface

The MINIQUSB module offers SPI at up to 8MHz, using the default pin configuration. All four CPOL/CPHA modes are supported. Attainable throughput is limited by your PC and its software. The SPI bus runs in bursts at  rated  speed,  but  there  is  some  variable  dead  time between transfers, due to communications overhead. Properly written PC software can minimize this dead time, but cannot completely eliminate it.

## Power Supply

The MINIQUSB is powered by the host PC's USB port. The VDD system voltage is preset to 3.3V using an onboard linear regulator. Estimated power available to the companion EV kit is approximately 3.3V at 80mA.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Maxim MINIQUSB User Guide

## MSS Software GUI

The Maxim multipurpose SMBus software (MSS) has a graphic user interface that is comprised of tabs defined in a set of comma-spaced values (CSV) files. This entire user interface can be customized by editing the CSV files. The user interface is driven by a scripting language. The script language is rooted in certain fundamental commands and is extensible. Additional script commands can be created by simple substitution methods.

Information on the prebuilt user interface framework is available in the EV kit data sheet. For example, for the MAX1785 it exists on the MAX1785 EV kit data sheet. The MAX1785 EV kit software with prebuilt MAX1785 user interface framework can be downloaded at www.maxim-ic.com/evkitsoftware/.

## MINIQUSB Connector J2: JTAG Debug/Programming Interface

The J2 connector pinout is identical to the MAXQ2000 Evaluation Kit, MAXQ2000-K00 rev B. If connecting an external JTAG debugger to J2, first cut links R12-R16 to disconnect the on-board JTAG driver. See Table 1.

## Table 1. MINIQUSB Connector J2 Description (JTAG)

|   J2 | LABEL   | FUNCTION                                  |
|------|---------|-------------------------------------------|
|    1 | TCK     | TCK to MAXQ2000 test access port (P4.0)   |
|    2 | GND     | Ground return                             |
|    3 | TDO     | TDO to MAXQ2000 test access port (P4.3)   |
|    4 | VDDIO   | MAXQ2000 VDDIO power supply               |
|    5 | TMS     | TMS to MAXQ2000 test access port (P4.2)   |
|    6 | RESET   | Active-low RESET to MAXQ2000              |
|    7 | KEY     | No connection (pin is physically removed) |
|    8 | +5V     | No connection                             |
|    9 | TDI     | TDI from MAXQ2000 test access port (P4.1) |
|   10 | GND     | Ground return                             |

## Detailed Description of MINIQUSB-XHV

The optional expander board (MINIQUSB-XHV) adapts the MINIQUSB to connect with Maxim EV kit module designs that use a 2x10 connector. In addition, the expander board provides the I 2 C pullup resistors that are typically absent from these older EV kit boards. A small prototype  area  allows  custom  utilization  of  the MINIQUSB for devices that do not have an evaluation kit.

By design, the MINIQUSB, CMAXQUSB, CMODUSB, and CMOD232 are intended to be interchangeable; however, Maxim does not make any blanket statement respecting compatibility. Because hardware and firmware differ from one design to another, incompatible operation can result in some cases. For guaranteed operation, please use the module listed on the EV kit data sheet.

## SMBus/I 2 C/2-Wire Bus Pullup Resistors

SMBus/I 2 C require a pullup resistor on both SCL and SDA. Typical  EV  kits  that  are  designed  for  the MINIQUSB provide these SCL/SDA pullup resistors on the EV kit board. Typical EV kits that are designed for CMAXQUSB, CMODUSB, or CMOD232 do not provide SCL/SDA resistors on the EV kit board.

The MINIQUSB-XHV expander board provides 1.5k Ω pullup resistors. If there are pullup resistors already on the bus, disable R1 and R2 by cutting apart the traces at jumpers J1 and J2 on the MINIQUSB-XHV board. If desired, these connections can be restored by installing standard 0.1in header pins and shunts.

## SCL/SDA Protector Circuit

The 2N7002 FET (Q1, Q2) is configured to allow SCL/SDA to be pulled low by either the 3.3V logic or the external 5V logic bus, while protecting the 3.3V side against overvoltage faults. The gate is pulled to the 5V USB supply through R7 and R8 (PCB shorted traces). The SCL/SDA signals are pulled high on the 3.3V side by R1 and R2, and are pulled high on the 5V side by R5 and R6. Diode D1 ensures that the external VDD bus is powered with at least 3V, even if no external supply is provided. When SCL/SDA are driven low by the 3.3V bus, Q1/Q2 source is pulled below the gate voltage, exceeding the Vgs threshold and pulling the drain side low. When SCL/SDA are driven low by the external 5V bus, Q1/Q2 body diode is forward-biased, pulling the 3.3V logic below its VIL max threshold. Diode D2 prevents the internal SCL/SDA from going negative.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Maxim MINIQUSB User Guide

## MINIQUSB-XHV Connector P3

Connector P3 is a 20-pin dual-row header that connects to SMBus/I 2 C-based kits. The pinout is compatible with Maxim's previous SMBus/I 2 C solutions, the MAXSMBUS board, CMODUSB, CMOD232, and CMAXQUSB. See Table 2.

If designing a custom EV kit board, beware: the ground return system does not connect to pin 20.

## MINIQUSB-XHV Headers H1 and H2

A small prototype area allows custom utilization of the MINIQUSB for devices that do not have an EV kit. Header locations H1 and H2 provide access to the general-purpose I/O pins and SPI bus, in addition to the power and I 2 C bus available on connector P3. See Tables 3 and 4.

## Table 2. MINIQUSB-XHV Connector P3 Description

|   P3 | LABEL   | FUNCTION                                                                                                                                                                                 |
|------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    1 | EXTVDD  | External logic level power supply between 3.3V and 5V. MINIQUSB will supply 3.3V at 80mA through Schottky diode D1. Can be overdriven by external power supply in the 3.3V to 22V range. |
|    2 | GND     | Ground return                                                                                                                                                                            |
|    3 | SDA     | SMBus/I 2 C SDA (data), level-shifted to EXTVDD                                                                                                                                          |
|    4 | GND     | Ground return                                                                                                                                                                            |
|    5 | GND     | Ground return                                                                                                                                                                            |
|    6 | GND     | Ground return                                                                                                                                                                            |
|    7 | SCL     | SMBus/I 2 C SCL (clock), level-shifted to EXTVDD                                                                                                                                         |
|    8 | GND     | Ground return                                                                                                                                                                            |

|   P3 | LABEL   | FUNCTION                                                                   |
|------|---------|----------------------------------------------------------------------------|
|    9 | K6      | General-purpose I/O designated as K6, can be used for SMBus SUSPEND output |
|   10 | GND     | Ground return                                                              |
|   11 | K1      | General-purpose I/O designated as K1, can be used for SMBus ALERT input    |
|   12 | GND     | Ground return                                                              |
|   13 | K2      | General-purpose I/O designated as K2                                       |
|   14 | GND     | Ground return                                                              |
|   15 | K3      | General-purpose I/O designated as K3                                       |
|   16 | GND     | Ground return                                                              |
|   17 | K4      | General-purpose I/O designated as K4                                       |
|   18 | GND     | Ground return                                                              |
|   19 | GND     | Ground return                                                              |
|   20 | -       | Reserved, do not connect this pin                                          |

## Table 3. MINIQUSB-XHV Connector H1 Description

| H1   | J3    | LABEL   | GPIO DESIGNATOR   | FUNCTION                |
|------|-------|---------|-------------------|-------------------------|
| H1-1 | J3-16 | SDA     | -                 | I 2 C SDA/SMBus SMBDATA |
| H1-2 | J3-14 | SCL     | -                 | I 2 C SCL/SMBus SMBCLK  |
| H1-3 | J3-12 | -       | K6                | General-purpose I/O     |

<!-- image -->

| H1   | J3    | LABEL   | GPIO DESIGNATOR   | FUNCTION            |
|------|-------|---------|-------------------|---------------------|
| H1-4 | J3-10 | -       | K1                | General-purpose I/O |
| H1-5 | J3-8  | -       | K2                | General-purpose I/O |
| H1-6 | J3-6  | -       | K3                | General-purpose I/O |
| H1-7 | J3-4  | -       | K4                | General-purpose I/O |
| H1-8 | J3-2  | -       | K5                | General-purpose I/O |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Maxim MINIQUSB User Guide

## Table 4. MINIQUSB-XHV Connector H2 Description

| H2   | J3    | LABEL   | GPIO DESIGNATOR   | FUNCTION                             |
|------|-------|---------|-------------------|--------------------------------------|
| H2-1 | J3-15 | +3.3V   | -                 | +3.3V at 80mA power from MINIQUSB    |
| H2-2 | J3-13 | MISO    | K11               | SPI master-in, slave-out (MISO) data |
| H2-3 | J3-11 | SCLK    | K10               | SPI SCLK clock                       |
| H2-4 | J3-9  | CS      | K9                | SPI CS chip select                   |
| H2-5 | J3-7  | MOSI    | K12               | SPI master-out, slave-in (MOSI) data |
| H2-6 | J3-5  | -       | K8                | General-purpose I/O                  |
| H2-7 | J3-3  | -       | K7                | General-purpose I/O                  |
| H2-8 | J3-5  | GND     | -                 | Ground return                        |

## Detailed Description of Firmware

The MINIQUSB firmware was developed using the MAX-IDE assembly language development environment. Full source code is available online from www.maxim-ic.com/evkitsoftware under the project name MINIQUSB Firmware.

If  designing a custom EV kit board that requires an interrupt  service  routine  in  custom  firmware,  the  GPIO signals K5, K6, K7, and K8 are suggested locations for the  interrupt  signal.  The  standard  MINIQUSB firmware does not service interrupts on any GPIO pins.

## Troubleshooting

Problem: Software reports it cannot find the board.

- Verify the USB cable is connected.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- Verify that Windows plug-and-play detected the board. Bring up Control Panel I System I Device Manager ,  and look at what device nodes are indicated for the USB. If there is an 'unknown device' node attached to the USB, delete it. This action forces plug-and-play to try again.
- Verify  the  SCL  and SDA signals are pulled up to VDD. There must be pullup resistors somewhere on the bus.
- If using jumper wires to connect, verify that the SCL and SDA signals are not swapped. Verify the ground return is connected.

Problem: Unable to find SMBus/I 2 C device.

## Maxim MINIQUSB User Guide

<!-- image -->

Figure 1. MINIQUSB Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluates: SPI and SMBus/I 2 C-Compatible Parts

## Maxim MINIQUSB User Guide

<!-- image -->

Figure 2. MINIQUSB Component Placement GuideComponent Side

<!-- image -->

Figure 4. MINIQUSB PCB Layout-Component Side

Figure 3. MINIQUSB Component Placement Guide-Solder Side

<!-- image -->

Figure 5. MINIQUSB PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Maxim MINIQUSB User Guide

Figure 6. MINIQUSB-XHV Expander Board Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

9

## Evaluates: SPI and SMBus/I 2 C-Compatible Parts

## Maxim MINIQUSB User Guide

<!-- image -->

Figure 7. MINIQUSB-XHV Expander Board Component Placement Guide-Component Side

Figure 8. MINIQUSB-XHV Expander PCB Layout-Component Side

<!-- image -->

Figure 9. MINIQUSB-XHV Expander PCB Layout- Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Maxim MINIQUSB User Guide

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                       | PAGES CHANGED       |
|-------------------|-----------------|---------------------------------------------------|---------------------|
|                 0 | 8/06            | Initial release                                   | -                   |
|                 1 | 3/08            | Replaced MINIQUSB-X board with MINIQUSB-XHV board | 1, 2, 4, 5, 6, 8, 9 |

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 11