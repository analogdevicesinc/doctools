<!-- lastmod 2022-08-03 -->
## MAX5X05 Evaluation Kit

## General Description

The  MAX5X05 evaluation  kit  (EV  kit)  demonstrates  the MAX5705  and  MAX5805  12-bit,  single-channel,  lowpower DACs with internal reference and buffered voltage output. The MAX5705 and the MAX5805 come in a 10-pin µMAX ®  package. The EV kit provides controls to change the DAC output, power operations, and references.

The  DAC  ICs  are  controlled  by  an  on-board  MAXQ microcontroller,  which  provides  two  different  interfaces: I 2 C  and  SPI.  The  EV  kit  features  Windows  XP ® -, Windows Vista ® -, and Windows ®  7-compatible software, which provides a simple graphical user interface (GUI) for exercising the MAX5705 and the MAX5805 features.

The  EV  kit  comes  with  the  MAX5705AAUB+  (SPI)  and the MAX5805AAUB+ (I 2 C) installed. Contact the factory for  samples  of  the  pin-compatible  MAX5703AUB+ (SPI, 8-bit),  MAX5704AUB+  (SPI,  10-bit),  MAX5705BAUB+ (SPI, 10-bit), MAX5803AUB+ (I 2 C, 8-bit), MAX5804AUB+ (I 2 C, 10-bit), MAX5805BAUB+ (I 2 C, 12-bit).

## Component List

| DESIGNATION                                                                                                          |   QTY | DESCRIPTION       |
|----------------------------------------------------------------------------------------------------------------------|-------|-------------------|
| ADDR, CSB, DIN, SCL, SCLK, SDA, U1_ AUX , U1_ LDAC , U1_OUT, U1_REF, U2_ AUX , U2_ LDAC , U2_OUT, U2_REF, VDD, VDDIO |    16 | Red test points   |
| AGND (x2), DGND (x2), GNDS (x2)                                                                                      |     6 | Black test points |

Windows, Windows XP, and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

Evaluates: MAX5703, MAX5704, MAX5705A, MAX5705B, MAX5803,

MAX5804, MAX5805A, MAX5805B

## Features

- Wide 2.7V to 5.5V Input Supply Range
- Demonstrates 6.3µs Settling Time of Buffered Output
- High Precision with ±1 LSB INL
- Selectable Output Termination: 1kΩ, 100kΩ, or High Impedance
- Precision 10ppm (max) Selectable Internal References: 2.048V, 2.500V, and 4.096V
- Demonstrates User-Supplied External Reference
- Supports Entire Family of I 2 C and SPI 12-/10-/8-Bit DACs
- Windows XP-, Windows Vista-, and Windows 7-Compatible Software
- USB-Powered (Cable Included)
- Fully Assembled and Tested with Proven PCB Layout

Ordering Information appears at end of data sheet.

| DESIGNATION                                |   QTY | DESCRIPTION                                                         |
|--------------------------------------------|-------|---------------------------------------------------------------------|
| C1, C6-C9, C19-C22, C24, C27, C28, C30-C32 |    15 | 1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C105K   |
| C2, C5, C12-C14, C18, C23, C29, C33        |     9 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K |
| C3, C11, C17                               |     0 | Not installed, ceramic capacitors (0603)                            |
| C4, C10, C25, C26                          |     4 | 200pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H201J  |
| C15, C16                                   |     2 | 18pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H180J   |

µMAX is a registered trademark of Maxim Integrated Products, Inc.

<!-- image -->

## MAX5X05 Evaluation Kit

## Component List (continued)

| DESIGNATION                              |   QTY | DESCRIPTION                             |
|------------------------------------------|-------|-----------------------------------------|
| H1                                       |     0 | Not installed, 4-pin header             |
| H2                                       |     1 | 10-pin (2 x 5) header                   |
| JU1, JU2, JU4, JU5, JU7-JU11, JU14, JU15 |    11 | 2-pin headers                           |
| JU3, JU6, JU12, JU13                     |     4 | 3-pin headers                           |
| JU_ID0- JU_ID3                           |     0 | Not installed, 2-pin headers            |
| L1                                       |     1 | Ferrite bead (0603) TDK MMZ1608R301A    |
| R1, R2                                   |     2 | 4.7kΩ ±5% resistors (0603)              |
| R3, R7, R15, R16                         |     4 | 1MΩ ±5% resistors (0603)                |
| R4-R6, R13                               |     4 | 1.5kΩ ±5% resistors (0603)              |
| R8                                       |     1 | 100Ω ±5% resistor (0603)                |
| R9                                       |     1 | 10kΩ ±5% resistor (0603)                |
| R10, R11                                 |     2 | 2kΩ ±5% resistors (0603)                |
| U1                                       |     1 | 12-bit DAC (10 µMAX) Maxim MAX5805AAUB+ |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Hong Kong X'tals Ltd.                  | 852-35112388 | www.hongkongcrystal.com     |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note:

Indicate that you are using the MAX5X05 EV kit when contacting these component suppliers.

## MAX5X05 EV Kit Files

| FILES               | DESCRIPTION                                |
|---------------------|--------------------------------------------|
| INSTALL.EXE         | Installs the EV kit files on your computer |
| MAX5X05.EXE         | Application program                        |
| USBConverterDLL.DLL | Application library                        |
| UNINSTALL.EXE       | Uninstalls the EV kit software             |

Evaluates: MAX5703, MAX5704,

MAX5705A, MAX5705B, MAX5803,

MAX5804, MAX5805A, MAX5805B

| DESIGNATION   |   QTY | DESCRIPTION                                     |
|---------------|-------|-------------------------------------------------|
| U2            |     1 | 12-bit DAC (10 µMAX) Maxim MAX5705AAUB+         |
| U3            |     0 | Not installed, 4.5V reference (6 SOT23)         |
| U4, U6, U9    |     3 | Level translators (10 µMAX) Maxim MAX1840EUB+   |
| U5            |     0 | ESD protector Not installed (6 SOT23)           |
| U7            |     1 | 3.3V LDO (5 SC70) Maxim MAX8511EXK33+           |
| U8            |     1 | Microcontroller (64 LQFP) Maxim MAXQ622G-0000+  |
| USB1          |     1 | Mini-USB type-B right-angle PC-mount receptacle |
| Y1            |     1 | 12MHz crystal (HCM49)                           |
| -             |     1 | MAX5X05 EV kit CD                               |
| -             |     1 | USB high-speed A-to-mini-B cable (6ft)          |
| -             |    15 | Shunts                                          |
| -             |     1 | PCB: MAX5X05 EVALUATION KIT                     |

│

## MAX5X05 Evaluation Kit

## Quick Start

## Required Equipment

- MAX5X05 EV kit (USB cable included)
- Windows XP, Windows Vista, or Windows 7 PC with a spare USB port
- Two digital voltmeters (DVM)

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that jumpers JU1-JU15 are in their default position, as shown in Table 1.
- 2) Connect the bottom GNDS pad to the negative terminal of the DVM #1 and connect the positive terminal to measure the voltage at the U2\_OUT test points.
- 3) Connect the GNDS pad for the negative terminal of the DVM #2 and connect the positive terminal to measure the voltage at the U1\_OUT test points.
- 4) Visit www.maximintegrated.com/evkitsoftware to download the most recent version of the EV kit software,  5X05Rxx.ZIP.  Save  the  EV  kit  software  to  a temporary folder and uncompress the ZIP file.
- 5) Install the EV kit software on your computer by running the INSTALL.EXE program inside the temporary folder. The program files are copied to your PC and icons are created in the Windows Start | Programs menu.
- 6) Connect  the  USB  cable  from  the  PC  to  the  EV  kit board; the USB driver is installed automatically.
- 7) Start  the  MAX5X05  EV  kit  software  by  opening  its icon in the Start | Programs menu. The EV kit software main window appears as shown in Figure 1.
- 8) Within  the Reference group  box,  select  the 2.500V radio button and press the Execute button.
- 9) Within the DAC group box, select the Code and Load selection from the Command drop-down list and drag the scrollbar to the right until the data reaches 0xFFF.
- 10) Verify that DVM #1 measured 2.5V.
- 11) Select the I2C radio button and the GUI automatically detects the I 2 C address.
- 12) Within  the Reference group  box,  the  2.500V  radio button is already selected. Press the Execute button.
- 13) Verify that DVM #2 measured 2.5V.

Evaluates: MAX5703, MAX5704, MAX5705A, MAX5705B, MAX5803, MAX5804, MAX5805A, MAX5805B

## Detailed Description of Software

The MAX5X05 EV kit software can evaluate all I 2 C and SPI interface family of devices. In addition to the interfaces, the software allows 12-/10-/8-bit DAC part selection.

## Part Selection

On the upper-left corner is a Part Selection group box. The  user  must  select  the  appropriate  radio  button  that corresponds to the installed Maxim IC DAC bits.

## Interface

The Interface group  box  allows  the  user  to  toggle between I 2 C and SPI DAC parts. By default, the software is configured to communicate using the SPI interface first. Once the I2C radio button selection is made, the software automatically  detects  the  correct  I 2 C  address  from  the drop-down  list  and  the  user  is  allowed  to  communicate using the I 2 C interface. See Table 2 for a list of the I 2 C addresses.

## Command

Choose the appropriate Command from  the  drop-down list  and  drag  the Data scrollbar  to  start  writing  data. Optionally,  the  user  can  enter  the  desired  data  in  the Data edit  box  and  press  the Execute button.  Refer  to the MAX5805 and MAX5705 IC data sheets for a list of possible commands.

## Asynchronous LDAC

A checked LDAC checkbox drives the LDAC pin  of  the MAX5705 or MAX5805 low, which allows the changes to the CODE register to change the DAC output. Unchecking the LDAC checkbox drives the LDAC pin of the MAX5705 or  MAX5805 high. To change the DAC output, the user must write to the CODE registers, and then write to the DAC registers.

## Software Reset

The Software Reset group box allows the user to issue several flexible software resets: END, GATE, CLEAR, and RESET.  Refer  to  the  MAX5805  and  MAX5705  IC  data sheets  for  a  detailed  description  of  the  software  reset command.

## Configuration

The Configuration group  box  controls  the AUX pin of  the  MAX5705  and/or  the  MAX5805.  The  different functions  include  GATE,  LOAD,  CLEAR,  and  NONE. Once the appropriate selection is made, the AUX pin can be  driven  high,  low,  or  pulsed.  Refer  to  the  MAX5805 and MAX5705 IC data sheets for a detailed description of AUX pin functions.

│

## MAX5X05 Evaluation Kit

Evaluates: MAX5703, MAX5704,

MAX5705A, MAX5705B, MAX5803,

MAX5804, MAX5805A, MAX5805B

Figure 1. MAX5X05 EV Kit Software Main Window (SPI)

<!-- image -->

│

## MAX5X05 Evaluation Kit

Evaluates: MAX5703, MAX5704,

MAX5705A, MAX5705B, MAX5803,

MAX5804, MAX5805A, MAX5805B

Figure 2. MAX5X05 EV Kit Software Main Window (I 2 C)

<!-- image -->

│

## MAX5X05 Evaluation Kit

## Reference

The user can select from an external or internal reference using  software  commands.  When  setting  the  reference, confirm  that  the  VDD  supply  is  greater  or  equal  to  the voltage  reference  selected  for  proper  operation.  To  use the external reference, the user must select the EXT radio button and enter a valid voltage in the edit box. The internal reference options include 2.048V, 2.500V, and 4.096V. Select the Always ON radio button if the reference needs to always be on. The Default radio button selection powers down when the DAC powers down. Selecting the Yes radio button drives the internal reference circuit and draws an  additional  25µA  of  current  when  powered.  Once  the appropriate selection is made, press the Execute button.

## DAC Outputs

When the output of the DAC is not in normal operation, the output can be powered down with 1kΩ termination to GND, 100kΩ te rmination to GND, or high impedance

## Default

The Default drop-down  list  sets  the  default  value  for the  DAC  and  can  be  set  to  the  POR  state,  zero  scale, midscale, full scale, or return register values. Use these functions  after  performing  a  GATE  or  CLEAR  in  the configuration settings.

## Table 1. Jumper Settings (JU1  -JU15)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                    |
|----------|------------------|------------------------------------------------------------------------------------------------|
| JU1      | Installed*       | Connects pullup resistor R1 to the I 2 C SDAsignal.                                            |
| JU1      | Not installed    | Disconnects pullup resistor R1 from the SDApin of IC U1.                                       |
| JU2      | Installed*       | Connects pullup resistor R2 to the I 2 C SCL signal.                                           |
| JU2      | Not installed    | Disconnects pullup resistor R2 from the SCL pin of IC U1.                                      |
| JU3      | 1-2*             | ConnectsADDR pin of IC U1 to VDDIO to determine the I 2 C address (see Table 2).               |
| JU3      | 2-3              | ConnectsADDR pin of IC U1 to DGND to determine the I 2 C address (see Table 2).                |
| JU3      | Not installed    | ADDR pin of IC U1 is not connected to determine the I 2 C address (see Table 2).               |
| JU4      | Installed*       | Connects the AUX signal of the on-board microcontroller to the AUX pin of IC U1.               |
| JU4      | Not installed    | Disconnects the AUX signal of the on-board microcontroller to the AUX pin of IC U1.            |
| JU5      | Installed        | Connects load capacitor C25 and resistor R10 to the DAC output of IC U1.                       |
| JU5      | Not installed*   | Disconnects load capacitor C25 and resistor R10 to the DAC output of IC U1.                    |
| JU6      | 1-2*             | Connects the VDD pins of IC U1 and U2 to the on-board +3.3V supply.                            |
| JU6      | 1-3              | Connects the VDD pins of IC U1 and U2 to a user-supplied power supply between +2.5V and +5.5V. |
| JU6      | Not installed    | User-supplied VDD. The user must apply a voltage at the VDD test point.                        |
| JU7      | Installed*       | Connects the DIN signal of the on-board microcontroller to the DIN pin of IC U2.               |
| JU7      | Not installed    | Disconnects the DIN signal of the on-board microcontroller to the DIN pin of IC U2.            |
| JU8      | Installed*       | Connects the SCLK signal of the on-board microcontroller to the DIN pin of IC U2.              |
| JU8      | Not installed    | Disconnects the SCLK signal of the on-board microcontroller to the SCLK pin of IC U2.          |
| JU9      | Installed*       | Connects the CSB signal of the on-board microcontroller to the CS pin of IC U2.                |
| JU9      | Not installed    | Disconnects the CSB signal of the on-board microcontroller to the CS pin of IC U2.             |

│

Evaluates: MAX5703, MAX5704, MAX5705A, MAX5705B, MAX5803,

MAX5804, MAX5805A, MAX5805B

## Read Back (I 2 C Only)

When the I 2 C part is selected, the product ID is read when an address is detected.

Within the DAC group box, press the Read Back button and the code and voltage of the DAC is displayed.

Within  the Features group  box,  press  the Read  Back button  and  the  configuration,  reference,  output,  and default registers are read.

## Multiple EV Kits

The software can communicate to multiple MAX5X05 EV kits connected to the USB ports of the PC. The status bar at the bottom of the GUI shows the number of boards that are connected. If all boards that are connected to the PC are  not  connected  to  the  GUI,  click  the Connect menu and  the  status  bar  should  be  updated.  Use  the Board Index drop-down list to select the appropriate EV kit for communications.

## Detailed Description of Hardware

The  MAX5X05  EV  kit  provides  a  proven  layout  for  the MAX5705  and  the  MAX5805.  An  on-board  MAXQ622 microcontroller  and  jumpers  to  disconnect  the  on-board microcontroller are included on the EV kit.

## MAX5X05 Evaluation Kit

## Table 1. Jumper Settings (JU1  -JU15) (continued)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                           |
|----------|------------------|-------------------------------------------------------------------------------------------------------|
| JU10     | Installed*       | Connects the AUX signal of the on-board microcontroller to the AUX pin of IC U2.                      |
| JU10     | Not installed    | Disconnects the AUX signal of the on-board microcontroller to the AUX pin of IC U2.                   |
| JU11     | Installed        | Connects load capacitor C26 and resistor R11 to the DAC output of IC U2.                              |
| JU11     | Not installed*   | Disconnects load capacitor C26 and resistor R11 to the DAC output of IC U2.                           |
| JU12     | 1-2*             | Connects on-board voltage reference IC (U3) to the REF pin of IC U1.                                  |
| JU12     | 2-3              | Connects on-board voltage reference IC (U3) to the REF pin of IC U2.                                  |
| JU12     | Not installed    | User-supplied REF. The user must apply a voltage reference at the U1_REF and/or U2_REF test point(s). |
| JU13     | 1-2*             | Connects the VDDIO pins of IC U1 and U2 to the on-board +3.3V supply.                                 |
| JU13     | 1-3              | Connects the VDDIO pins of IC U1 and U2 to a user-supplied power supply between +2.5V and +5.5V.      |
| JU13     | Not installed    | User-supplied VDDIO. The user must apply a voltage at VDDIO test point.                               |
| JU14     | Installed*       | Connects the LDAC signal of the on-board microcontroller to the LDAC pin of IC U1.                    |
| JU14     | Not installed    | Disconnects the LDAC signal of the on-board microcontroller to the LDAC pin of IC U1.                 |
| JU15     | Installed*       | Connects the LDAC signal of the on-board microcontroller to the LDAC pin of IC U2.                    |
| JU15     | Not installed    | Disconnects the LDAC signal of the on-board microcontroller to the LDAC pin of IC U2.                 |

## Table 2. I 2 C Address Setting (JU3)

| SHUNT POSITION (ADDR)   | MAX5805 ADDRESS (hex)   | MAX5805 ADDRESS (hex)   |
|-------------------------|-------------------------|-------------------------|
| SHUNT POSITION (ADDR)   | WRITE                   | READ                    |
| 1-2*                    | 0x36                    | 0x37                    |
| 2-3                     | 0x30                    | 0x31                    |
| Not installed           | 0x34                    | 0x35                    |

## I 2 C Address

The I 2 C  address  of  the  MAX5805  is  determined  by  the shunt setting of jumper JU3. See Table 2 for all possible hexadecimal addresses.

## User-Supplied Power Supply

The EV kit is powered completely from the USB port by default.  To  power  the  MAX5705  and  MAX5805  with  a user-supplied power supply, remove the shunt on jumper JU6 and apply a 2.7V to 5.5V power supply at the VDD test point and the nearest AGND test point on the EV kit.

A user-supplied VDDIO power supply can also be used by removing the shunt on jumper JU13 and applying 2.5V to 5.5V to the VDDIO test point and the nearest AGND test point on the EV kit.

## User-Supplied Reference

The  user  can  apply  a  user-supplied  voltage  reference  by removing the shunt on jumper JU12 and applying 2V to VDD at the U1\_REF and/or U2\_REF test points on the EV kit.

Evaluates: MAX5703, MAX5704,

MAX5705A, MAX5705B, MAX5803,

MAX5804, MAX5805A, MAX5805B

## User-Supplied SPI

To  evaluate  the  EV  kit  with  a  user-supplied  SPI  bus, remove shunts from jumpers JU7-JU9. Apply the usersupplied  SPI  signals  to  the  DIN,  SCLK,  and  CSB  test points and use the nearest DGND test point for the return ground on the EV kit.

## User-Supplied I 2 C

To  evaluate  the  EV  kit  with  a  user-supplied  I 2 C  bus, remove  shunts  from  jumpers  JU1  and  JU2.  Apply  the user-supplied I 2 C signals to the SCL and SDA test points and use the nearest DGND test point for the return ground on the EV kit. If pullup resistors are on the user-supplied interface, resistors R1 and R2 should be removed.

## User-Supplied LDAC

A  user-supplied LDAC signal  can  be  used  by  removing shunts  from  jumper  JU14  and/or  JU15. Apply  the  usersupplied LDAC signal  to  U1\_ LDAC for  the  MAX5805 and/or U2\_ LDAC for the MAX5705, and use the nearest DGND test point for the return ground on the EV kit.

## User-Supplied AUX

A  user-supplied AUX signal  can  be  used  by  removing shunts  from  jumper  JU4  and/or  JU10.  Apply  the  usersupplied AUX signal  to  U1\_ AUX for  the  MAX5805  and/ or U2\_ AUX for the MAX5705, and use the nearest DGND test point for the return ground on the EV kit.

│

Figure 3a. MAX5X05 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

Figure 3b. MAX5X05 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

## MAX5X05 Evaluation Kit

Evaluates: MAX5703, MAX5704, MAX5705A, MAX5705B, MAX5803,

MAX5804, MAX5805A, MAX5805B

Figure 4. MAX5X05 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 5. MAX5X05 EV Kit PCB Layout-Component Side

<!-- image -->

│

## MAX5X05 Evaluation Kit

Evaluates: MAX5703, MAX5704,

MAX5705A, MAX5705B, MAX5803,

MAX5804, MAX5805A, MAX5805B

Figure 6. MAX5X05 EV Kit PCB Layout-Solder Side

<!-- image -->

│

## MAX5X05 Evaluation Kit

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX5X05EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX5703, MAX5704, MAX5705A, MAX5705B, MAX5803,

MAX5804, MAX5805A, MAX5805B

│

## MAX5X05 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                 | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------|-----------------|
|                 0 | 1/13            | Initial release                             | -               |
|                 1 | 1/13            | Corrected second bullet in Features section | 1               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX5703, MAX5704,

MAX5705A, MAX5705B, MAX5803,

MAX5804, MAX5805A, MAX5805B