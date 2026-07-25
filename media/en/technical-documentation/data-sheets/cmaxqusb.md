<!-- lastmod 2022-10-10 -->
<!-- image -->

## CMAXQUSB User's Guide

## General Description

The Maxim Command Module (CMAXQUSB) receives commands from an IBM PC through the USB to create an SPI™ or SMBus™/I 2 C-compatible interface. Maxim evaluation  kits  (EV  kits)  that  make  use  of  the CMAXQUSB require custom software and can be ordered together as an evaluation system (EV system). Ordering information for EV systems is included in the EV kit's corresponding data sheet.

An EV system is an EV kit combined with an interface board such as a CMAXQUSB and custom software. Refer to the appropriate EV kit data sheet for quick start and detailed operating instructions.

The use of the CMAXQUSB as a MAXQ2000 development target is not supported. Rather, use the MAXQ2000 EV kit (available at www.maxim-ic.com/MAXQ2000-KIT ) for this purpose.

The CMAXQUSB has been tested on Windows® 98 Second Edition, Windows 2000, and Windows XP®.

| DESIGNATION                         |   QTY | DESCRIPTION                                                                                                              |
|-------------------------------------|-------|--------------------------------------------------------------------------------------------------------------------------|
| C1, C2, C3                          |     3 | 22µF ±10%, 16V X5R ceramic capacitors (1210) TDK C3225X5R1C226K                                                          |
| C4                                  |     1 | 4.7µF ±10%, 10V X7R ceramic capacitor (0805) TDK C2012X5R1A475K                                                          |
| C5                                  |     1 | 0.033µF ±10%, 6.3V (min) X7R ceramic capacitor (0603) TDK C1608X7R1E333K Murata GRM188R71E333K Taiyo Yuden EMK107BJ333KA |
| C6, C7                              |     2 | 22pF ±5% C0G ceramic capacitors (0603) TDK C1608C0G1H220J Murata GRM1885C1H220J                                          |
| C8, C9                              |     2 | 10pF ±5% C0G ceramic capacitors (0603) Murata GRM1885C1H100J TDK C1608C0G1H100J                                          |
| C10-C16, C23-C32 (on back of board) |    17 | 0.1µF ±10%, 10V (min) X7R ceramic capacitors (0603) TDK C1608X7R1E104K                                                   |

SPI is a trademark of Motorola, Inc.

SMBus is a trademark of Intel Corp.

Windows and Windows XP are registered trademarks of Microsoft Corp.

Features

- ♦ PC-Controlled I/O Platform

- ♦ USB Powered

- ♦ Provides 2.5V, 3.3V, or 5V to EV Kit

- ♦

- SPI Bus: 8MHz Burst

- ♦ I 2 C/2-Wire Bus: Fast 400kHz/Standard 100kHz

- ♦ Optional 1.5k Ω I 2 C Bus Pullup Resistors

## Ordering Information

| PART      | PC INTERFACE   | OPERATING SYSTEMS SUPPORTED   |
|-----------|----------------|-------------------------------|
| CMAXQUSB+ | USB            | Windows 98SE/2000/XP          |

## Component List

| DESIGNATION                |   QTY | DESCRIPTION                                                                                                      |
|----------------------------|-------|------------------------------------------------------------------------------------------------------------------|
| C17-C22 (on back of board) |     6 | 1µF, 6.3V (min) X7R ceramic capacitors (0603) TDK C1608X5R0J105K Murata GRM188R60J105K Taiyo Yuden JMK107BJ105MA |
| D1                         |     1 | 100V, 1A bridge rectifier (D-70/DIP-6) Diodes Inc. DF005M                                                        |
| J2, J3, JU2-JU5            |     0 | Not installed, 2-pin headers                                                                                     |
| LED1, LED2                 |     2 | Red LEDs (T1-3/4) Panasonic LN21RPH                                                                              |
| LED3                       |     1 | Yellow (amber) LED (T1-3/4) Panasonic LN41YPH                                                                    |
| LED4                       |     1 | Green LED (T1-3/4) Panasonic LN31GCPH                                                                            |
| P2                         |     1 | USB type-B, right-angle PC-mount receptacle                                                                      |
| P3                         |     1 | 20-pin (2 x 10) right-angle male header                                                                          |
| P4                         |     1 | 40-pin (2 x 20) right-angle male header                                                                          |
| P5 (JTAG)                  |     1 | 10-pin (2 x 5) vertical header, keyed pin 7                                                                      |

## CMAXQUSB User's Guide

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| P1            |     0 | Not installed (2mm power jack)                                     |
| P6            |     1 | 3-pin header                                                       |
| P7            |     1 | 4-pin header                                                       |
| P8            |     1 | 6-pin header                                                       |
| R1            |     1 | 2.2k ±5% resistor (1206)                                           |
| R2, R5, R6    |     3 | 1.5k ±5% resistors (1206)                                          |
| R7, R8-R11    |     5 | 470k ±5% resistors (1206)                                          |
| R12, R13      |     2 | 27 ±5% resistors (1206)                                            |
| R14           |     1 | 10k ±5% resistor (1206)                                            |
| R18           |     1 | 4.7k ±5% resistor (1206)                                           |
| R19           |     1 | 100k ±5% resistor (1206)                                           |
| SW1           |     1 | 2-circuit DIP switch (DIP-4)                                       |
| U1            |     1 | Low-power microcontroller (68 QFN) Maxim MAXQ2000-RAX+             |
| U2            |     1 | FTDI FT232BL (32 TQFP, 7mm x 7mm)                                  |
| U3            |     1 | LDO linear regulator (5 SC70) Maxim MAX8511EXK25+T (Top Mark: ADV) |
| U4            |     1 | 93C46 type 3-wire EEPROM (8 SO) 16-bit architecture                |
| U5            |     1 | Low-voltage, p-channel MOSFET (8 SO) Maxim MAX890LESA+             |
| U6, U7, U8    |     3 | 8-channel level translators (20 TSSOP) Maxim MAX3001EEUP+          |

| DESIGNATION   |   QTY | DESCRIPTION                                                                    |
|---------------|-------|--------------------------------------------------------------------------------|
| U9            |     1 | Low-voltage level translator (8 SOT23) Maxim MAX3373EEKA+T (Top Mark: AAKS)    |
| U10           |     1 | Low-voltage level translator (14 TSSOP) Maxim MAX3390EEUD+                     |
| U11           |     1 | LDO linear regulator (5 SC70) Maxim MAX8511EXK33+T (Top Mark: AEI)             |
| Y1            |     1 | 16MHz crystal (HC49/US) Parallel resonant, 20pF load Suntsu SCS20B-16.000MHz-I |
| Y2            |     1 | 6MHz crystal (HC49/US) Parallel resonant, 20pF load Suntsu SCS22B-6.000MHz-I   |
| Y3            |     0 | Not installed, 32.768kHz crystal                                               |
| -             |     1 | Vertical header 2 x 3 pins                                                     |
| -             |     4 | Rubber bumpers, 0.100in H x 0.400in W square                                   |
| -             |     1 | USB high-speed A-to-B cable, 5ft (1.5m)                                        |
| -             |     1 | Shunt                                                                          |
| -             |     1 | PCB: COMMAND MODULE (CMAXQUSB)                                                 |

## CMAXQUSB User's Guide

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| Suntsu Frequency Control               | 949-305-0220 | www.suntsuinc.com           |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the CMAXQUSB or MAXQ2000 when contacting these component suppliers.

## Quick Start

Maxim EV systems whose ordering number ends in EVCMAXQU  are  two-board  sets,  comprising  a CMAXQUSB interface board and an EV kit board specific  to  the  device being evaluated. For example, the MAX6870EVCMAXQU would be a two-board set consisting of the MAX6870EVKIT and the CMAXQUSB. The following generic quick start procedure assumes that the CMAXQUSB board will be used with a companion EV kit.

## Required Equipment

- Any Maxim EV system with the EVCMAXQU suffix, such as the MAX6870EVCMAXQU Device-specific EV kit board CMAXQUSB interface board USB type A-to-B cable (included with the CMAXQUSB)
- Computer running Windows 98SE/2000/XP with a spare USB port

Administrator privileges may be required when first installing the device on Windows 2000/XP.

## Procedure

## Do not turn on the power until all connections are complete.

- 1) Select 2.5V, 3.3V, or 5V logic by setting the CMAXQUSB VDD SELECT jumper. See the Jumper Tables section.
- 2) Ensure that the companion EV kit board's jumper settings are correct. Refer to your companion EV kit's documentation.
- 3) Connect the boards together.
- 4) Install the evaluation software on your computer by running the INSTALL.EXE program on the installation  disk.  The  program files  are  copied  and  icons are created for them in the Windows Start menu.
- 5) Connect the USB cable between the CMAXQUSB and the computer. When you plug in the CMAXQUSB

board for the first time, the Windows plug-and-play system detects the new hardware and automatically runs the Add New Hardware Wizard (if the Add New Hardware Wizard does not appear after a minute, unplug the board from the USB and plug it in again). Make certain to specify the search location. Maxim software designed for CMAXQUSB includes a copy of the device driver in the installed software directory. Refer to Application Note 3601: Troubleshooting Windows  Plug-and-Play  and  USB  for  Maxim Evaluation Kits for more details.

- 6) During device driver installation, Windows XP shows a warning message indicating that the device driver Maxim uses does not contain a digital signature. This is  not  an  error  condition  and  it  is  safe  to  proceed with the installation.
- 7) Start  the  EV  kit  software  by  clicking  its  icon  in  the Windows Start menu.
- 8) Refer to the companion EV kit's documentation for further instructions demonstrating its custom software.

## Detailed Description of Hardware

The low-voltage RISC microcontroller, MAXQ2000-RAX (U1), processes commands sent by a program running on the PC. Each particular EV kit has its own custom software specific to that kit.

The FTDI FT232BM (U2) provides the USB engine. The USB 5V power is regulated down to 3.3V by U11 and down to 2.5V by U3. LED1 indicates USB 5V power is present. LED2, LED3, LED4 are general-purpose indicators.

Level translators U6-U10 convert the MAXQ2000's 2.5V logic signals to the external VDD logic level, which is jumper-selectable for 2.5V, 3.3V, or 5V logic. U9, the MAX3372, is a bidirectional level translator specially designed for the I 2 C bus. DIP switch SW1 optionally disables the on-board 1.5k Ω termination resistors, allowing the use of external, user-supplied I 2 C pullup resistors. Level translator U10 is designed for SPI.

## CMAXQUSB User's Guide

Connectors P3 and P4 are designed to allow hardware compatibility with previous Maxim EV kit module designs. Headers P7 and P8 allow convenient probing of SMBus/I 2 C and SPI bus signals.

Connector P5 is used during factory test to program the MAXQ2000 in-circuit using the JTAG interface. The connector pinout is compatible with the MAXQ2000 EV kit's MAXQ-JTAG-001 board.

## Platform Capabilities and Limitations

## General-Purpose Input and Output (GPIO) Pins

LED1 is lit when VDD is powered. LED2, LED3, and LED4 are general-purpose software-controlled indicators, which also connect to GPIO lines. When driven as inputs, the output impedance should be less than 6000 Ω .

## SMBus/I 2 C/2-Wire Interface

The CMAXQUSB module offers 'bit-banged' I 2 C at 400kHz (full speed, the default) or 100kHz (slow speed). Optional user-switchable SCL/SDA pullup resistors are provided on-board. Your PC and its software limits attainable throughput. The SMBus/I 2 C bus runs in bursts at rated speed, but there is some variable 'dead time' between transfers due to communications overhead. Properly written PC software can minimize this dead time but cannot completely eliminate it.

## SPI/3-Wire Interface

The CMAXQUSB module offers SPI at up to 8MHz, using the default pin configuration. All four CPOL/CPHA modes are supported. Your PC and its software limits attainable throughput. The SPI bus runs in bursts at rated speed, but there is some variable 'dead time' between transfers, due to communications overhead. Properly written PC software can minimize this dead time but cannot completely eliminate it.

## Power Supply

The CMAXQUSB is powered by the host PC's universal serial bus (USB). The VDD system voltage can be configured for direct USB 5V power, 3.3V, or 2.5V using one of two on-board linear regulators. An optional external 9V DC plug-in transformer ('wall wart') can be connected for any EV kit board that requires this unregulated 9V DC power supply. Both the unregulated 9V DC and regulated VDD power-supply voltages are provided to the EV kit board on the 2 x 10 (P3) and 2 x 20 (P4) connectors. Current available to a companion EV kit is 80mA.

During USB suspend, the FT232BM drives the MAX890 into  a  partially  powered mode, bringing VDD up to approximately 1.8V. No commands are sent to the firmware during this mode, so there is no impact. However, custom designs not requiring USB suspend should consider removing the MAX890 to avoid this problem.

## Scripting and Data Acquisition

The CMAXQUSB can store a script of commands in its internal memory to eliminate communication 'dead time.'  A  script  may  be  repeated  up  to  256  times,  but branching and decision making are not supported. A script may also have a maximum of 126 command/data bytes. Up to 1024 bytes of data may be collected.

## SMBus/I 2 C/2-Wire Bus Pullup Resistors

SMBus/I 2 C requires a pullup resistor on both SCL and SDA. The CMAXQUSB provides 1.5k Ω pullup resistors, enabled by setting both circuits of DIP switch SW1 'ON.' If there are pullup resistors already on the bus, disable the CMAXQUSB's pullup resistors by setting both circuits of SW1 'OFF.'

## Jumper Tables

| JUMPER              | POSITION   | FUNCTION                                                                                        |
|---------------------|------------|-------------------------------------------------------------------------------------------------|
| JU1 VDD SELECT      | 2.5V       | V DD = 2.5V                                                                                     |
| JU1 VDD SELECT      | 3.3V       | V DD = 3.3V                                                                                     |
| JU1 VDD SELECT      | 5V         | V DD = 5V                                                                                       |
| J2 (underneath SW1) | Open       | Factory assembly option: replaces SW1-1.                                                        |
| J3 (underneath SW1) | Open       | Factory assembly option: replaces SW1-2.                                                        |
| JU2                 | Closed     | Connects MAXQ2000 P6.2 to P6.3, supporting the Maxim 1-Wire® interface.                         |
| JU4                 | Open       | JTAG connector P5 does not connect to the +5V supply.                                           |
| JU4                 | Closed     | JTAG connector P5 connects to the +5V supply.                                                   |
| JU5                 | Open       | Optional higher voltage unregulated power supply is left unconnected; connector P1 is not used. |
| JU5                 | Closed     | Enable optional unregulated power supply from P1 to connectors P3 and P4.                       |

## CMAXQUSB User's Guide

## Connector P3

Connector P3 is a 20-pin, dual-row header that connects to SMBus/I 2 C-based kits. The pinout is compatible with Maxim's previous SMBus/I 2 C solution, the MAXSMBus board. See Table 1.

If  designing a custom EV kit board, beware: the ground return system does not connect pin 20 .

## Table 1. Connector P3 Description

| P3 PIN                                | LABEL   | FUNCTION                                                                                                                                                                              |
|---------------------------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1                                     | VDD     | Power Supply. 2.5V, 3.3V, or 5V selected by CMAXQUSB VDD select jumper.                                                                                                               |
| 2, 4, 5, 6, 8, 10, 12, 14, 16, 18, 19 | GND     | Ground Return                                                                                                                                                                         |
| 3                                     | SDA     | SMBus/I 2 C SDA (Data)                                                                                                                                                                |
| 7                                     | SCL     | SMBus/I 2 C SCL (Clock)                                                                                                                                                               |
| 9                                     | K6      | General-Purpose I/O Designated as K6. Can be used for SMBus SUSPEND output.                                                                                                           |
| 11                                    | K1      | General-Purpose I/O Designated as K1. Can be used for SMBus ALERT input.                                                                                                              |
| 13                                    | K2      | General-Purpose I/O Designated as K2                                                                                                                                                  |
| 15                                    | K3      | General-Purpose I/O Designated as K3                                                                                                                                                  |
| 17                                    | K4      | General-Purpose I/O Designated as K4                                                                                                                                                  |
| 20                                    | +12V*   | Optional Unregulated Higher Voltage (7.5V to 16.5V) Power Supply. Enabled only if CMAXQUSB jumper JU5 is installed and closed, and if external power is applied through connector P1. |

## Table 2. Connector P4 Description

| P4 PIN     | LABEL   | GPIO DESIGNATOR   | FUNCTION                                                                                                                                                                |
|------------|---------|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1-4        | GND     | -                 | Ground Return                                                                                                                                                           |
| 5, 6       | +12V*   | -                 | Optional Unregulated Higher Voltage (7.5V to 16.5V) Power Supply. Enabled only if CMAXQUSB jumper JU5 is closed, and if external power is applied through connector P1. |
| 7, 8       | VDD     | -                 | Power Supply. 2.5V, 3.3V, or 5V selected by CMAXQUSB VDD select jumper.                                                                                                 |
| 9          | RD      | K13 when K0 = 1   | Active-Low Read Strobe                                                                                                                                                  |
| 10         | WR      | K14 when K0 = 1   | Active-Low Write Strobe                                                                                                                                                 |
| 11         | CS0     | K15 when K0 = 1   | Active-Low Memory Chip-Select Strobe                                                                                                                                    |
| 12, 13, 14 | -       | -                 | No Connection. Reserved for additional memory chip-select strobes.                                                                                                      |
| 15         | A0      | K9 when K0 = 1    | Memory Address LSB                                                                                                                                                      |
| 16         | A1      | K10 when K0 = 1   | Memory Address                                                                                                                                                          |
| 17         | A2      | K11 when K0 = 1   | Memory Address                                                                                                                                                          |
| 18         | A3      | K12 when K0 = 1   | Memory Address MSB                                                                                                                                                      |
| 19         | D0      | K1 when K0 = 1    | Memory Data LSB                                                                                                                                                         |

## Connector P4

Connector P4 is a 40-pin, dual-row header that connects to SPI and 8-bit parallel kits. The pinout is compatible  with  Maxim's  previous  SPI  solution,  the 68HC16MODULE board. See Table 2.

GPIO pins K1-K8 and K1'-K15' must be driven with a 4.7k Ω or  lower  impedance source to turn around the bidirectional level translators.

## CMAXQUSB User's Guide

## Table 2. Connector P4 Description (continued)

|   P4 PIN | LABEL   | GPIO DESIGNATOR   | FUNCTION                                                 |
|----------|---------|-------------------|----------------------------------------------------------|
|       20 | D1      | K2 when K0 = 1    | Memory Data                                              |
|       21 | D2      | K3 when K0 = 1    | Memory Data                                              |
|       22 | D3      | K4 when K0 = 1    | Memory Data                                              |
|       23 | D4      | K5 when K0 = 1    | Memory Data                                              |
|       24 | D5      | K6 when K0 = 1    | Memory Data                                              |
|       25 | D6      | K7 when K0 = 1    | Memory Data                                              |
|       26 | D7      | K8 when K0 = 1    | Memory Data MSB                                          |
|       27 | K1      | K1                | General-Purpose I/O                                      |
|       28 | K2      | K2                | General-Purpose I/O                                      |
|       29 | K3      | K3                | General-Purpose I/O                                      |
|       30 | K4      | K4                | General-Purpose I/O                                      |
|       31 | K5      | K5                | General-Purpose I/O                                      |
|       32 | K6      | K6                | General-Purpose I/O                                      |
|       33 | K7      | K7                | General-Purpose I/O                                      |
|       34 | K8      | K8                | General-Purpose I/O                                      |
|       35 | MISO    | K11               | SPI Master-In, Slave-Out (MISO) Data                     |
|       36 | MOSI    | K12               | SPI Master-Out, Slave-In (MOSI) Data                     |
|       37 | SCLK    | K10               | SPI Clock                                                |
|       38 | CS      | K9                | SPI Chip Select. Configurable active high or active low. |
|       39 | OW      | K15               | General-Purpose I/O, Maxim 1-Wire Bus                    |
|       40 | -       | -                 | No Connection                                            |

## Connector P5: JTAG Debug/Programming Interface

Connector P5 is used during factory test to program the firmware into the MAXQ2000. This connector pinout is identical to the MAXQ2000 EV kit, MAXQ2000-KIT. See Table 3.

Table 3. Connector P5 Description

| P5 PIN   | LABEL   | FUNCTION                                  |
|----------|---------|-------------------------------------------|
| 1        | TCK     | TCK to MAXQ2000 Test Access Port (P4.0)   |
| 2, 10    | GND     | Ground Return                             |
| 3        | TDO     | TDO to MAXQ2000 Test Access Port (P4.3)   |
| 4        | VDDIO   | MAXQ2000 VDDIO Power Supply               |
| 5        | TMS     | TMS to MAXQ2000 Test Access Port (P4.2)   |
| 6        | RESET   | Active-High Reset to MAXQ2000             |
| 7        | KEY     | No Connection. Pin is physically removed. |
| 8        | +5V     | Optional +5V Connection                   |
| 9        | TDI     | TDI from MAXQ2000 Test Access Port        |

## Connector P6: Maxim 1-Wire Interface

Although there are currently no mating EV kits that use this  feature,  the  MAXQ2000's 1-Wire interface signal connects to header P6. See Table 4.

Table 4. Connector P6 Description

|   P6 PIN | LABEL   | FUNCTION                                            |
|----------|---------|-----------------------------------------------------|
|        1 | VDD     | VDD Power Supply                                    |
|        2 | OW      | Maxim 1-Wire Interface, Through Level Translator U6 |
|        3 | GND     | Ground Return                                       |

## CMAXQUSB User's Guide

## Connector P7: SMBus/I 2 C Test Points

For convenience, the SMBus/I 2 C interface signals are connected to labeled pins on header P7. See Table 5.

## Detailed Description of Firmware

## Table 5. Connector P7 Description

|   P7 PIN | LABEL   | FUNCTION                |
|----------|---------|-------------------------|
|        1 | VDD     | VDD Power Supply        |
|        2 | SDA     | SMBus/I 2 C SDA (Data)  |
|        3 | GND     | Ground Return           |
|        4 | SCL     | SMBus/I 2 C SCL (Clock) |

## Connector P8: SPI Test Points

For convenience, the SPI interface signals are connected to labeled pins on header P8. See Table 6.

## Table 6. Connector P8 Description

|   P8 PIN | LABEL   | FUNCTION                                             |
|----------|---------|------------------------------------------------------|
|        1 | VDD     | VDD Power Supply                                     |
|        2 | MISO    | Master-In, Slave-Out Data                            |
|        3 | MOSI    | Master-Out, Slave-In Data                            |
|        4 | SCLK    | SPI Clock                                            |
|        5 | CS      | Chip Select. Configurable active high or active low. |
|        6 | GND     | Ground Return                                        |

The  CMAXQUSB firmware was developed using t he  MAX-IDE  assembly  language  development environment. Full  source  code  is  available  at www.maxim-ic.com/tools/evkit under the project name CMAXQUSB Firmware .

If  designing  a  custom  EV  kit  board  requiring  an  interrupt  service  routine  in  custom  firmware,  GPIO  signals K5-K8 are the suggested locations for the interrupt signal.  The  standard CMAXQUSB firmware does not service interrupts on any GPIO pins.

## Troubleshooting

Problem: Software reports it cannot find the board.

- Verify that the CMAXQUSB power LED is lit.
- Verify that the USB cable is connected.
- Verify that Windows plug-and-play detected the board. Bring up Control Panel -&gt; System -&gt; Device Manager, and look at what device nodes are indicated for the USB. If there is an 'unknown device' node attached to the USB, delete it-this forces plug-andplay to try again.
- Verify that the SCL and SDA signals are pulled up to VDD. CMAXQUSB DIP switch SW1 enables the onboard resistors. There must be pullup resistors somewhere on the bus.
- If  using  wires  to  connect  the  CMAXQUSB  to  your target board, make certain that you have not swapped the SCL and SDA signals. Verify that the ground return is connected.

Problem:

Unable to find SMBus/I 2 C device.

## CMAXQUSB User's Guide

Figure 1a. CMAXQUSB Schematic (Sheet 1 of 4)

<!-- image -->

## CMAXQUSB User's Guide

Figure 1b. CMAXQUSB Schematic (Sheet 2 of 4)

<!-- image -->

## CMAXQUSB User's Guide

Figure 1c. CMAXQUSB Schematic (Sheet 3 of 4)

<!-- image -->

## CMAXQUSB User's Guide

Figure 1d. CMAXQUSB Schematic (Sheet 4 of 4)

<!-- image -->

## CMAXQUSB User's Guide

Figure 2. CMAXQUSB Component Placement Guide-Component Side (Top Silkscreen)

<!-- image -->

## CMAXQUSB User's Guide

Figure 3. CMAXQUSB Component Placement Guide-Solder Side  (Bottom Silkscreen)

<!-- image -->

## CMAXQUSB User's Guide

Figure 4. CMAXQUSB PCB Layout-Component Side

<!-- image -->

## CMAXQUSB User's Guide

Figure 5. CMAXQUSB PCB Layout-Solder Side

<!-- image -->

## CMAXQUSB User's Guide

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------|-----------------|
|                 2 | 12/10           | Updated Y3 in Component List and Figure 1a | 2, 8            |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

16

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, Inc.  160 Rio Robles, San Jose, CA 95134 USA  1-408-601-1000