<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX3711 evaluation kit (EV kit) is a fully assembled and  tested  demonstration  board  that  provides  electrical  and  optical  evaluation  of  the  MAX3711,  which  is a  125Mbps  to  3.125Gbps  integrated  limiting  amplifier with  a  dual-loop  laser  driver.  The  controlling  software communicates with the  EV  kit  through  the  USB  port  of the included card and provides simplified control of all functions of the device. The EV kit can be fully powered by  the  USB  port  or  the  user  can  choose  to  power  the device with an external 3.3V supply while the USB port supplies  the  included  HFRD-46-1  USB  daughter  card. The  laser  connection  on  the  evaluation  board  allows attachment of lasers in TOSA packages.

| DESIGNATION                             |   QTY | DESCRIPTION                              |
|-----------------------------------------|-------|------------------------------------------|
| C1, C4, C5, C8, C26, C27, C38           |     7 | 1000pF Q 10% ceramic capacitors (0402)   |
| C2, C3, C6, C7, C12, C13, C16, C17, C28 |     9 | 0.01 F F Q 10% ceramic capacitors (0402) |
| C9                                      |     1 | 1pF Q 0.25pF ceramic capacitor (0402)    |
| C10                                     |     1 | 6.8pF Q 5% ceramic capacitor (0402)      |
| C11                                     |     1 | 22pF Q 10% ceramic capacitor (0402)      |
| C14                                     |     1 | 8.2pF Q 0.25pF ceramic capacitor (0402)  |
| C15                                     |     1 | 100pF Q 5% ceramic capacitor (0402)      |
| C18                                     |     1 | 12pF Q 10% ceramic capacitor (0402)      |
| C23, C29                                |     2 | 10 F F Q 20% ceramic capacitors (0603)   |
| C24, C25, C31, C35, C37                 |     5 | 0.1 F F Q 10% ceramic capacitors (0402)  |
| D1, D2                                  |     2 | Red LEDs                                 |
| D4, D7                                  |     2 | Green LEDs                               |
| D5                                      |     1 | Laser (user installed)                   |

## MAX3711 Evaluation Kit

## Evaluates: MAX3711

Features

- S Software Control of the Device
- S Power Supplied through the USB or an External Connection
- S Connection for Lasers in TOSA Packages
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION                                              |   QTY | DESCRIPTION                           |
|----------------------------------------------------------|-------|---------------------------------------|
| J1-J4, J7, J8                                            |     6 | Edge-mount SMA connectors             |
| J10                                                      |     1 | PC-mount SMB connector                |
| J13, J15, TP1-TP6, TP9-TP13, TP17-TP19, TP21, TP22, TP25 |    19 | Test points                           |
| J14                                                      |     1 | Micropitch connector                  |
| JU19-JU21                                                |     3 | 2-pin headers, 0.1in centers          |
| JU26                                                     |     1 | 3-pin header, 0.1in centers           |
| L1                                                       |     1 | Ferrite bead (0402) Murata BLM15HG102 |
| L2                                                       |     1 | 47nH Q 20% inductor                   |
| L3, L5, L6                                               |     3 | 4.7 F H Q 20% inductors               |
| Q1, Q2                                                   |     2 | npn transistors Zetex FMMT491A        |
| R1, R3                                                   |     2 | 4.7k I Q 5% resistors (0402)          |
| R2                                                       |     0 | Not installed, resistor (0402)        |
| R4, R51                                                  |     2 | 10.0k I Q 1% resistors (0402)         |
| R5, R6                                                   |     2 | 0 I resistors (0402)                  |
| R8                                                       |     1 | 6.04k I Q 1% resistor (0402)          |
| R9                                                       |     1 | 47 I Q 5% resistor (0402)             |
| R10                                                      |     1 | 82 I Q 5% resistor (0402)             |
| R11                                                      |     1 | 220 I Q 5% resistor (0402)            |

| DESIGNATION   |   QTY | DESCRIPTION                 |
|---------------|-------|-----------------------------|
| R12           |     1 | 39 I Q 5% resistor (0402)   |
| R14, R15      |     2 | 22 I Q 5% resistors (0402)  |
| R24           |     1 | 100 I Q 1% resistor (0402)  |
| R32, R35-R38  |     0 | Not installed, resistors    |
| R50, R52-R54  |     4 | 1k I Q 1% resistors (0402)  |
| S1            |     1 | SP3T switch Alps SSSS211900 |

- MAX3711 EV kit
- Windows M PC
- Oscilloscope
- Pattern generator

Note: In  the  following  sections,  software-related  items are  identified  by  bolding.  Text  in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Procedure for Initial Setup

- 1) Install  the  EV  kit  software  on  a  computer by attaching  the  USB  daughter  card  to  the  computer  using the  supplied  USB  cable.  After  the  USB  device has  been  detected  and  installed  by  the  operating system,  a  flash  drive  becomes  available  in  the Devices  with  Removable  Storage section  of My Computer .  Search  the  flash  drive  for  the MAX3711 EV kit.zip file. Copy this file to the desktop or another known  folder  and  unzip  the  file.  Locate  the  newly created MAX3711 EV kit folder and run setup.exe.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

## MAX3711 Evaluation Kit

## Evaluates: MAX3711

## Component List (continued)

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| U1            |     1 | Limiting amplifier and laser driver (24 TQFN-EP*) Maxim MAX3711ETG+ |
| U2            |     1 | EEPROM                                                              |
| -             |     1 | HFRD-46-1 USB interface card                                        |
| -             |     1 | PCB: MAX3711 EVALUATION BOARD+                                      |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Diodes Incorporated (Zetex)            | 805-446-4800 | www.diodes.com              |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX3711 when contacting these component suppliers.

## Quick Start

## Required Equipment

- 2) After installation  is  complete,  follow  this  path  to start  the  program: Start  |  All  Programs  |  Maxim Integrated  Products  |    MAX3711  EV  Kit  GUI .  The software is a graphical user interface (GUI) meant to simplify control of the device.
- 3)  Insert  the  USB  daughter  card  (HFRD-46-1)  into connector J14 on the EV kit.
- 4)  Set the jumper on JU26 to the desired power-supply option (USB or external supply).
- 5)  If  an  external power supply is used, set the voltage to 3.3V, the current limit to 300mA, and connect the supply to the board.
- 6)  Connect the computer to the USB daughter card with a USB cable (A-male to mini-B-male). Several LEDs should  illuminate,  indicating  that  the  USB  source  is powered. Press the Initialize button  in  the  software to initiate communication to the EV kit. When communication is established, the STATUS indicator on the GUI turns green.

## Procedure for Transmitter Evaluation

- 1) Solder  a  laser  to  connection  D5.  See  Figure  1  for more information about the laser connection.
- 2)  Connect a 50 I source to TIN+ and TIN- (J7 and J8). Set  the  source  differential  amplitude  to  500mVP-P. Set the source common-mode voltage to 2V or use external DC blocks.

- 3)  Connect  the  output  from  the  TOSA  to  an  optical receiver  (either  an  optical-to-electrical  converter  or an optical input head on an oscilloscope).
- 4) All controls of the device  are  available  in the software. Fault and warning indicators are displayed on the right side of the GUI window. When a hard fault has occurred, the part goes into latched shutdown. The source of the fault should be removed and the DISABLE box should be toggled to reset the part.
- 5) The  registers  contain  a  default  setting  and  can  be read using the Block Read All button.  For  detailed register  functions,  refer  to  the  MAX3711  IC  data sheet.
- 6) Note  that  the  GUI  software  automatically  sets  the device into 'setup mode' before writing to a register. If  the Enable  Block  Write checkbox  is  checked,

## MAX3711 Evaluation Kit

## Evaluates: MAX3711

multiple writes can be buffered by the GUI and written  all  at  once  when  the TX Block Write or Block Write All button is clicked.

## Procedure for Receiver Evaluation

- 1)  Connect a 50 I source to RIN+ and RIN- (J3 and J4).
- 2)  Connect outputs ROUT+ and ROUT- (J1 and J2) to 50 I oscilloscope inputs.
- 3)  The receiver controls are located in the RECEIVER section of the GUI.
- 4) Note  that  the  GUI  software  automatically  sets  the device into 'setup mode' before writing to a register. If  the Enable  Block  Write checkbox  is  checked, multiple  writes  can  be  buffered  by  the  GUI  and written all at once when the RX Block Write or Block Write All button is clicked.

Figure 1. TOSA Connection

<!-- image -->

## MAX3711 Evaluation Kit

## Evaluates: MAX3711

Figure 2. MAX3711 EV Kit Software

<!-- image -->

## Detailed Description of Software

## Graphical User Interface (GUI)

The  GUI  consists  of  four  main  sections: RECEIVER , TRANSMITTER , DUAL POWER CONTROL , and Block Read and Write .

## Receiver

All the controls for the receiver portion of the device are included  in  the RECEIVER block.  The  SET\_CML  and SET\_LOS registers are written to by inserting the desired decimal value for the register in the appropriate checkbox and pressing the LOAD button.

## Transmitter

The TRANSMITTER block allows control of the transmitter's general settings. Pressing the TX Read button reads all the registers shown in the transmitter section.

## Dual Power Control

The DUAL POWER CONTROL block allows adjustment and  monitoring  of  the  transmitter's  dual  power-control loops. A sub-block in this section ( DATA REPORTING ) uses  the  device's  registers  to  calculate  the  apparent average power (NAPC), the apparent extinction ratio (IR), and  the  average  MD  current  (IMDAVG).  The  MD0REG and MD1REG values shown in the GUI are 16 bit and range from 0 to 255 in steps of 0.0039.

## Block Read and Write

The Block  Read  and  Write section  allows  the  user  to read/write to more than one register at a time. Pressing any of the Block Read buttons causes the GUI to execute a block read of the appropriate group of registers. By checking the Enable Block Write checkbox, the user is able to change multiple registers without a write being executed  each  time.  The  GUI  buffers  the  commands and  executes  them  in  a  single  write  command  once the appropriate Block Write button  has  been pressed. Note  that  if  a Block  Write button  is  not  pressed,  individual bits are written any time a checkbox is checked or unchecked.

## MAX3711 Evaluation Kit

## Evaluates: MAX3711

Figure 3a. MAX3711 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

## MAX3711 Evaluation Kit

## Evaluates: MAX3711

Figure 3b. MAX3711 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

## MAX3711 Evaluation Kit

## Evaluates: MAX3711

Figure 4. MAX3711 EV Kit Component Placement Guide-Component Side

<!-- image -->

## MAX3711 Evaluation Kit

## Evaluates: MAX3711

Figure 5. MAX3711 EV Kit PCB Layout-Top Side

<!-- image -->

## MAX3711 Evaluation Kit

## Evaluates: MAX3711

Figure 6. MAX3711 EV Kit PCB Layout-Ground Plane

<!-- image -->

## MAX3711 Evaluation Kit

## Evaluates: MAX3711

Figure 7. MAX3711 EV Kit PCB Layout-Power Plane

<!-- image -->

## MAX3711 Evaluation Kit

## Evaluates: MAX3711

Figure 8. MAX3711 EV Kit PCB Layout-Solder Side

<!-- image -->

## MAX3711 Evaluation Kit

## Evaluates: MAX3711

Figure 9. MAX3711 EV Kit Component Placement Guide-Solder Side

<!-- image -->

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX3711EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX3711 Evaluation Kit

## Evaluates: MAX3711

## MAX3711 Evaluation Kit

## Evaluates: MAX3711

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/12            | Initial release | -               |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.