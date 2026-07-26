<!-- lastmod 2022-08-02 -->
## MAX14820 Evaluation Kit

## General Description

The  MAX14820  evaluation  kit  (EV  kit)  consists  of  a MAX14820 evaluation board and software. The EV kit is a fully assembled and tested circuit board that evaluates the MAX14820 and MAX14821 IO-Link ®  device transceivers.

The EV kit includes Windows XP ® , Windows Vista ® , and Windows ®  7-compatible software that provides a graphical user interface (GUI) for exercising the features of the two devices. The EV kit is connected to a PC through a USB A-to-B cable.

IO-Link is a registered trademark of ifm electronic GmbH. Windows, Windows XP, and Windows Vista are registered trademarks of Microsoft Corp. SPI is a trademark of Motorola, Inc.

Evaluates: MAX14820/MAX14821

## Features

- IO-Link-Compliant Device Transceiver
- IO and SPI™ Interface Terminals
- Windows XP, Windows Vista, and Windows 7-Compatible Software
- USB-PC Connection (Cable Included)
- Proven PCB Layout
- Fully Assembled and Tested

Orderin g Information appears at end of data sheet.

<!-- image -->

## Quick Start

## Recommended Equipment

- MAX14820 EV kit (USB A-to-B cable included)
- User-supplied Windows XP, Windows Vista, or Windows 7 PC with a spare USB port
- 24V, 100mA DC power supply

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation before exercising the full features of the device:

- 1)  Visit www.maximintegrated.com/evkitsoftware to download  the  latest  version  of  the  EV  kit  software, 14820Rxx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2)  Install  the  EV  kit  software  and  USB  driver  on  your computer by running the INSTALL.EXE program inside the temporary folder. The program files are copied to your PC and icons are created in the Windows Start | Programs menu. During software installation, some versions  of  Windows  may  show  a  warning  message indicating that this software is from an unknown publisher. This  is  not  an  error  condition  and  it  is  safe  to proceed with installation. Administrator privileges are required to install the USB device driver on Windows.
- 3)  Verify that all the jumpers are in their default positions, as shown in Table 1.
- 4)  Connect the 24V DC power supply on the VCC and GND connectors on the EV kit board.
- 5)  Connect  the  USB  cable  from  the  PC  to  the  EV  kit board. A  Windows  message  appears  when  connecting the EV kit board to the PC for the first time. Each version of Windows has a slightly different message. If you see a Windows message stating ready to use , then  proceed  to  the  next  step.  Otherwise,  open  the USB\_Driver\_Help\_200.PDF document in the Windows Start | Programs menu to verify that the USB driver was installed successfully.

## Evaluates: MAX14820/MAX14821

- 6)  Start  the  EV  kit  software  by  opening  its  icon  in  the Windows Start | Programs menu. The EV kit software main window appears, as shown in Figure 1.
- 7)  Verify that Hardware: Connected is displayed on the status bar at the bottom of the main window.
- 8)  Press the Read or Write buttons on the GUI to access the device SPI registers.

## Detailed Description of Software

The main window of the  evaluation  software  (Figure  1) displays  the  SPI  registers  and  the  device  pins  that  are connected  to  the  on-board  MAXQ2000  microcontroller. The user can send read or write SPI commands to the device, configure the logic levels of the device input pins, and read back the logic levels of the device output pins.

To read an SPI register or an output pin logic level, press the Read button.

To  configure  an  SPI  register  or  an  input  pin  logic  level, first  click  on  the  desired radio button(s), and then press the Write button.

The software also automatically monitors the presence of the wake-up pulse on the WU pin and displays the result on the GUI.

The user can also change the SPI clock speed by clicking on the desired SPI Clock Speed radio button.

## Advanced User Interface

There  are  two  methods  for  communicating  with  the device. The first is through the window shown in Figure 1. The second is through the Advanced User Interface window shown in Figure 2. The Advanced User Interface window  becomes  available  by  selecting  the Options  | Interface (Advanced User) menu item and allows execution of serial commands manually.

The Advanced User Interface window can also be used as a debug tool because it is capable of manually reading and writing to every register and logic pin of the device.

Figure 1. MAX14820 EV Kit Software Main Window

<!-- image -->

Figure 2. MAX14820 EV Kit Software Advanced User Interface Window

<!-- image -->

## Detailed Description of Hardware

The MAX14820 EV kit provides a proven layout for the MAX14820/MAX14821 IO-Link device transceivers.

All the power-supply and regulator input and output pins are connected to convenient connectors for easy probing. The device logic input and output pins are also provided with convenient connectors for logic testing.

As  an  option,  the  user  can  also  connect  their  own  SPI controller to access the device registers.

The transceiver's C/Q, DO, and DI pins are protected by Semtech SDC36C TVS diodes.

See  Table  1  for  a  description  of  all  the  EV  kit  jumper configurations.

│

## Table 1. Jumper Descriptions

| JUMPER    | SHUNT POSITON   | DESCRIPTION                                                             |
|-----------|-----------------|-------------------------------------------------------------------------|
| JU1       | Closed*         | Enables the C/Q LED indicator                                           |
| JU1       | Open            | Disables the C/Q LED indicator                                          |
| JU2       | Closed*         | Enables the DO LED indicator                                            |
| JU2       | Open            | Disables the DO LED indicator                                           |
| JU4       | 1-2*            | Device is powered by the internal LDO                                   |
|           | 1-3             | Device is powered by external 5V connected on TP8                       |
| JU5       | 1-2*            | Device VL is connected to LDO33                                         |
|           | 2-3             | Device VL is connected to V5                                            |
| JU6       | 1-3*            | TXEN pin is controlled by the microcontroller through the GUI           |
| JU6       | 1-2             | TXEN pin is connected to VL                                             |
| JU6       | 1-4             | TXEN pin is connected to GND                                            |
| JU7       | 1-3*            | TXQ pin is controlled by the microcontroller through the GUI            |
| JU7       | 1-2             | TXQ pin is connected to VL                                              |
| JU7       | 1-4             | TXQ pin is connected to GND                                             |
| JU8       | 1-3*            | TXC pin is controlled by the microcontroller through the GUI            |
| JU8       | 1-2             | TXC pin is connected to VL                                              |
| JU8       | 1-4             | TXC pin is connected to GND                                             |
| JU9       | 1-3*            | LO pin is controlled by the microcontroller through the GUI             |
| JU9       | 1-2             | LO pin is connected to VL                                               |
| JU9       | 1-4             | LO pin is connected to GND                                              |
| JU10      | Closed*         | Device logic IO pins are connected to the on-board microcontroller      |
| JU10      | Open            | Device logic IO pins are disconnected from the on-board microcontroller |
| JU11      | Closed*         | Enables the WU LED indicator                                            |
| JU11      | Open            | Disables the WU LED indicator                                           |
| JU13      | Closed*         | Enables the IRQ LED indicator                                           |
|           | Open            | Disables the IRQ LED indicator                                          |
| JU14      | Closed*         | Enables the LI LED indicator                                            |
|           | Open            | Disables the LI LED indicator                                           |
| JU15      | Closed*         | Enables the RX LED indicator                                            |
| JU15      | Open            | Disables the RX LED indicator                                           |
| JU16-JU19 | Closed*         | Device uses the on-board SPI interface                                  |
| JU16-JU19 | Open            | Device uses an external SPI interface                                   |
| JU23      | Closed*         | Device LDOIN is bypassed by the 0.1µF capacitor                         |
| JU23      | Open            | Device LDOIN has no bypass capacitor                                    |

*Default position.

## MAX14820 EV Kit Files

| FILE                    | DESCRIPTION                                |
|-------------------------|--------------------------------------------|
| INSTALL.EXE             | Installs the EV kit files on your computer |
| 14820.EXE               | Application program                        |
| CDM20600.EXE            | Installs the USB device driver             |
| UNINST.EXE              | Uninstalls the EV kit software             |
| USB_Driver_Help_200.PDF | USB driver installation help file          |

Evaluates: MAX14820/MAX14821

## Component Suppliers

| SUPPLIER              | WEBSITE                 |
|-----------------------|-------------------------|
| Hong Kong X'tals Ltd. | www.hongkongcrystal.com |
| Murata Americas       | www.murata.com          |
| Semtech Corporation   | www.semtech.com         |

Note: Indicate that you are using the MAX14820 or MAX14821 when contacting these component suppliers.

## MAX14820 EV Kit Bill of Materials

|   ITEM | DESCRIPTION                                                |   QTY | DESIGNATOR                          | MANUFACTURER / PART NUMBER          |
|--------|------------------------------------------------------------|-------|-------------------------------------|-------------------------------------|
|      1 | 470pF ±5%, 50V C0G ceramic capacitors (0805)               |     3 | C1-C3                               | Murata GRM2165C1H471J               |
|      2 | 1uF ±10%, 50V X7R ceramic capacitor (0805)                 |     2 | C4, C6                              | Murata GRM21BR71H105K               |
|      3 | 0.1uF ±10%, 50V X7R ceramic capacitors (0603)              |     2 | C28, C29                            | Murata GRM188R71H104K               |
|      4 | 0.1uF ±10%, 16V X5R ceramic capacitors (0603)              |    12 | C7, C8, C10, C15, C18-C24, C26      | Murata GRM188R61C104K               |
|      5 | 1uF ±10%, 16V X5R ceramic capacitor (0603)                 |     1 | C9                                  | Murata GRM188R61C105K               |
|      6 | 0.033uF ±10%, 16V X7R ceramic capacitor (0603)             |     1 | C11                                 | Murata GRM188R71C333K               |
|      7 | 10pF ±5%, 50V C0G ceramic capacitors (0603)                |     2 | C12, C13                            | MURATA GRM1885C1H100J               |
|      8 | 10uF ±20%, 6.3V X5R ceramic capacitors (0603)              |     2 | C14, C25                            | Murata GRM188R60J106M               |
|      9 | 22pF ±5%, 50V C0G ceramic capacitors (0603)                |     2 | C16, C17                            | MURATA GRM1885C1H220J               |
|     10 | Hyper-bright low current green LED (0603)                  |     8 | D1- D6, D11, D12                    | OSRAM OPTO LG L29K-G2J1-24-Z        |
|     11 | TVS diode, 33V,4A                                          |     3 | D7-D9                               | Semtech SDC36C.TCT                  |
|     12 | Ferrite beads, 0.1OHM DCR, 30OHM@100MHz                    |     1 | FB1                                 | MURATA BLM18PG300SN1                |
|     13 | USB type-B right angle receptacle                          |     1 | J3                                  | ASSMANN AU-Y1007-R                  |
|     14 | 2-pin headers (36 pin strip, cut to fit)                   |     6 | JU1, JU2, JU11, JU13-JU15           | Sullins PEC36SAAN                   |
|     15 | 3-pin headers (36 pin strip, cut to fit)                   |     2 | JU4, JU5                            | Sullins PEC36SAAN                   |
|     16 | 4-pin headers (36 pin strip, cut to fit)                   |     4 | JU6-JU9                             | Sullins PEC36SAAN                   |
|     17 | 28-pin (2x14) dual-row header (2x36 pin strip, cut to fit) |     1 | JU10                                | Sullins PEC36DAAN                   |
|     18 | 20k ±5% resistors (0603)                                   |     2 | R1, R2                              |                                     |
|     19 | 10 ±1% resistors (0603)                                    |     1 | R9                                  |                                     |
|     20 | 1.5k ±5% resistors (0603)                                  |     7 | R4, R6, R7, R10, R11, R17, R20      |                                     |
|     21 | 10k ±5% resistors (0603)                                   |     2 | R5, R14                             |                                     |
|     22 | 2.2k ±5% resistor (0603)                                   |     1 | R12                                 |                                     |
|     23 | 470 ±5% resistor (0603)                                    |     1 | R13                                 |                                     |
|     24 | 0 ±5% resistors (0603)                                     |     2 | R15, R16 R18,                       |                                     |
|     25 | 27 ±5% resistors (0603)                                    |     2 | R19                                 |                                     |
|     26 | 1 ±1% resistor (2010)                                      |     1 | R23                                 |                                     |
|     27 | Red multipurpose test points                               |    12 | TP1, TP6-TP10, TP22                 | Keystone 5010                       |
|     28 | Black multipurpose test points                             |     2 | TP2, TP11                           | Keystone 5011                       |
|     29 | Yellow multipurpose test points                            |    13 | TP3-TP5, TP12-TP21                  | Keystone 5014                       |
|     30 | IO-LINK device transceiver (24 TQFN-EP)                    |     1 | U1                                  | Maxim MAX14820ETG+                  |
|     31 | Microcontroller (68 QFN-EP)                                |     1 | U2                                  | Maxim MAXQ2000-RAX+                 |
|     32 | LDO regulator (5 SO70)                                     |     1 | U3                                  | Maxim MAX8511EXK25+                 |
|     33 | USB UART                                                   |     1 | U4                                  | FTDI FT232BL (32 TQFP)              |
|     34 | 93C46 type (64kx16) 3-wire EEPROM (8 SOIC)                 |     1 | U5                                  | Atmel AT93C46EN-SH-B                |
|     35 | LDO regulator (5 SO70)                                     |     1 | U6                                  | Maxim MAX8511EXK33+                 |
|     36 | 16MHz crystal                                              |     1 | Y1                                  | Hongkong X'tals SSM16000N1HK188F0-0 |
|     37 | 6MHz crystal                                               |     1 | Y2                                  | Hongkong X'tals SSL60000N1HK188F0-0 |
|     38 | Shunts, 2 position, 0.1 center                             |    26 | See Jumper Table                    | Kycon SX1100-B                      |
|     39 | Printed Circuit Board                                      |     1 | MAX14820/14821 EVALUATION KIT       | 1 oz copper                         |
|        | Not installed, 10-pin (2x5) dual-row header                |     0 | J1                                  |                                     |
|        | Not installed, 0603 resistor                               |     0 | R21                                 |                                     |
|        | Not installed, 0603 capacitor                              |     0 | C5                                  |                                     |
|        |                                                            |       | JUMPER TABLE                        | JUMPER TABLE                        |
|        |                                                            |       | Jumper                              | Shunt Location                      |
|        |                                                            |       | JU1, JU2, JU4, JU5, JU11, JU13-JU15 | pins 1-2                            |
|        |                                                            |       | JU10                                | all rows closed.                    |
|        |                                                            |       | JU6-JU9                             | pins 1-3                            |

## MAX14820 EV Kit Schematics

<!-- image -->

## MAX14820 EV Kit Schematics (continued)

<!-- image -->

## MAX14820 EV Kit PCB Layout Diagrams

<!-- image -->

│

MAX14820 EV Kit-Top Silkscreen

## MAX14820 EV Kit PCB Layout Diagrams (continued)

MAX14820 EV Kit-Component Side

<!-- image -->

│

## MAX14820 EV Kit PCB Layout Diagrams (continued)

MAX14820 EV Kit-Solder Side

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14820EVKIT# | EV Kit |

#Denotes RoHS compliant.

│

## MAX14820 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                             | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------|-----------------|
|                 0 | 6/11            | Initial release                         | -               |
|                 1 | 3/15            | Updated schematic, layout and BOM files | 1-2, 7-10       |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied  Ma[im InteJrated reserves the riJht to chanJe the circuitry and specifications Zithout notice at any time

│

Evaluates: MAX14820/MAX14821