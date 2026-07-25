<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The  MAX3710  evaluation  kit  (EV  kit)  is  an  assembled demonstration  board  that  provides  electrical  and  optical  evaluation  of  the  MAX3710  125Mbps  to  2.5Gbps integrated limiting amplifier/burst mode laser driver with dual-loop  power  control.  The  controlling  software  communicates  with  the  EV  kit  through  the  USB  port  of  the included card and provides simplified control of all functions of the MAX3710. The EV kit can be fully powered by the USB port, or the user can choose to power the MAX3710 by an external 3.3V supply while the USB port supplies  the  included  HFRD46-1  USB  daughter  card. The laser connection on the EV board allows attachment of lasers in TO-header packages.

| DESIGNATION                                                      |   QTY | DESCRIPTION                             |
|------------------------------------------------------------------|-------|-----------------------------------------|
| C1, C4, C5, C8, C26, C27, C38                                    |     7 | 1000pF ±10% ceramic capacitors (0402)   |
| C2, C3, C6, C7                                                   |     4 | 1 F F ±10% ceramic capacitors (0402)    |
| C9                                                               |     1 | 1pF ±0.25pF ceramic capacitor (0402)    |
| C10                                                              |     1 | 6.8pF ±5% ceramic capacitor (0402)      |
| C11                                                              |     1 | 22pF ±10% ceramic capacitor (0402)      |
| C12, C13, C28, C30                                               |     4 | 0.01 F F ±10% ceramic capacitors (0402) |
| C14                                                              |     1 | 8.2pF ±0.25pF ceramic capacitor (0402)  |
| C15                                                              |     1 | 100pF ±5% ceramic capacitor (0402)      |
| C23, C29                                                         |     2 | 10 F F ±20% ceramic capacitors (0603)   |
| C24, C25, C31, C35, C37                                          |     5 | 0.1 F F ±10% ceramic capacitors (0402)  |
| D1, D2, D3                                                       |     3 | Red LEDs                                |
| D4, D7                                                           |     2 | Green LEDs                              |
| D5                                                               |     1 | Laser, user installed                   |
| J1-J8                                                            |     8 | SMA connectors, edge mount              |
| J9, J10                                                          |     8 | SMB connectors, PC mount                |
| J13, J15, TP1- TP6, TP9-TP13, TP17, TP18, TP19, TP21, TP22, TP25 |    19 | Test points                             |
| J14                                                              |     1 | Micro-pitch connector                   |
| JU19, JU20, JU21                                                 |     3 | 2 -in headers, 0.1in centers            |
| JU26                                                             |     1 | 3-pin header, 0.1in centers             |

## MAX3710 Evaluation Kit

## Evaluates: MAX3710

Features

- S Software Control of the MAX3710
- S Power Supplied Through USB or External Connection
- S Connection for Lasers in TO Packages

## EV Kit Contents

- S MAX3710 EV Kit Board

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION                    |   QTY | DESCRIPTION                                                     |
|--------------------------------|-------|-----------------------------------------------------------------|
| L1                             |     1 | Ferrite bead (0402) Murata BLM15HG102                           |
| L3, L5, L6                     |     3 | 4.7 F H ±20% inductors                                          |
| Q1, Q2, Q3                     |     3 | npn transistors                                                 |
| R1, R3, R19                    |     3 | 4.7k I ±5% resistors (0402)                                     |
| R2, R26, R32, R35-R38, R43-R46 |    11 | Not installed, resistors                                        |
| R4, R51                        |     2 | 10.0k I ±1% resistors (0402)                                    |
| R5, R6, R39-R42                |     6 | 0 I resistors (0402)                                            |
| R7                             |     1 | 10 I ±5% resistor (0402)                                        |
| R8                             |     1 | 6.04k I ±1% resistor (0402)                                     |
| R9                             |     1 | 470 I ±5% resistor (0402)                                       |
| R10                            |     1 | 82 I ±5% resistor (0402)                                        |
| R12                            |     1 | 39 I ±5% resistor (0402)                                        |
| R14                            |     1 | 22 I ±5% resistor (0402)                                        |
| R15                            |     1 | 27 I ±5% resistor (0402)                                        |
| R17, R50, R52-R55              |     6 | 1.00k I ±1% resistors (0402)                                    |
| R24, R25                       |     2 | 100 I ±1% resistors (0402)                                      |
| S1, S2                         |     2 | SP3T switches                                                   |
| U1                             |     1 | Limiting amplifier/laser driver (24 TQFN-EP*) Maxim MAX3710ETG+ |
| U2                             |     1 | EEPROM Atmel                                                    |
| -                              |     1 | HFRD46-1 USB interface card                                     |
| -                              |     1 | PCB: MAX3710 EVALUATION BOARD+, REV A                           |

## Quick Start

Note: In the following section, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows ®  operating system.

## Initial Setup

- 1)  Install  the  MAX3710  EV  kit  software  on  a  computer by attaching the USB daughter card to the computer using the supplied USB cable. After the USB device has been detected and installed by the operating system, a flash drive becomes available in the Devices with Removable Storage section  of My Computer . Search the flash drive for the MAX3710 EV kit.ZIP file. Copy this file to the desktop or another known folder and unzip the file. Locate the newly created MAX3710 EV kit folder and run setup.EXE .
- 2)  After installation  is  complete,  follow  this  path  to start  the  program: Start → All Programs → Maxim Integrated Products → MAX3710 EV Kit GUI .  The software is a graphical user interface, or GUI, meant to simplify control of the MAX3710.
- 3)  A USB daughter card is included with the MAX3710 EV kit (HFRD46-1). Insert this card into the connector J14.
- 4)  Set  jumper  on  JU26  to  the  desired  power  supply option (USB or external supply).
- 5)  If  an  external  power  supply  is  used,  set  the  voltage to 3.3V, the current limit to 300mA, and connect the supply to the board.
- 6)  Connect the computer to the USB daughter card with a  USB cable (A-male to Mini-B-Male). Several LEDs should  illuminate  indicating  that  the  USB  source  is powered. Click the Initialize button in the software to initiate  communication to  the  EVkit.  When  communication is established the Status indicator on the GUI turns green.

## Transmitter Evaluation

For transmitter evaluation follow these steps:

- 1)  Solder a laser to connection D5. See Figure 1 for more information about the laser connection.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

## MAX3710 Evaluation Kit

## Evaluates: MAX3710

- 2)  Determine  whether  to  connect  a  high-speed  source to the BEN inputs (J5 and J6), or whether to manually control the BEN input.
- a)   If using the input SMA connectors, the default EV kit components are set up for a CML or LVDS source. If  you  have  a  different  source  or  would  like  operate the EV kit single-ended, refer to Figure 3 in the MAX3710 IC data sheet for information on how to configure the BEN input.
- b)   If you choose manual control, remove the differential  input  resistor  at  R25  and  add a 10k I resistor at R26. Doing so allows direct control of the BEN input  by  switch  S2,  or  by  the  software  GUI  if  the switch S2 is set to the mid position.
- 3)  Connect a 50 I source to TIN+ and TIN- (J7 and J8). Set the source differential amplitude to 500mV P-P . Set the source common-mode voltage to 2V or use external DC-blocks.
- 4)  If BEN is to be operated through the SMA connectors, connect a 50 I source to BEN+ and BEN- (J5 and J6). Set the source differential amplitude to 500mV P-P  and the common-mode voltage to 2V. See Figure 1 of the MAX3710 IC data sheet for more information on the acceptable  differential  and  common-mode  voltages at BEN.
- 5)  Connect  the  output  from  the  TOSA  to  an  optical receiver (optical-to-electrical converter or optical input head on an oscilloscope).
- 6)  All controls of the MAX3710 are available in the software. Fault and warning indicators are displayed on the right side of the GUI window. When a hard fault has  occurred  the  part  goes  into  latched  shutdown. The source of the  fault  should  be  removed  and  the DISABLE button should be toggled to reset the part.
- 7)  The  registers  contain  a  default  setting  and  can  be read  using  the Block Read All button.  For  detailed register functions, refer to the MAX3710 IC data sheet.
- 8)  Note  that  the  GUI  software  automatically  sets  the MAX3710 into 'setup mode' before writing to a register. If the Enable Block Write checkbox is checked, multiple writes can be buffered by the GUI and written all at once when the TX Block Write or Block Write All button is clicked.

## Receiver Evaluation

For receiver evaluation follow these steps:

- 1)  Connect a 50 I source to RIN+ and RIN- (J3 and J4).
- 2)  Connect the outputs ROUT+ and ROUT- (J1 and J2) to 50 I oscilloscope inputs.
- 3)  The  receiver  controls  are  located  in  the RECEIVER section of the GUI.
- 4)  Note  that  the  GUI  software  automatically  sets  the MAX3710 into 'setup mode' before writing to a register. If the Enable Block Write checkbox is checked, multiple writes can be buffered by the GUI and written all at once when the RX Block Write or Block Write All button is clicked.

## Graphical User Interface (GUI)

The GUI consists of four main sections: receiver, transmitter,  dual  power  control,  and  block  read  and  write (Figure 2).

## Receiver

All the controls for the RECEIVER portion of the MAX3710 are included in this block. The SET\_CML and SET\_LOS registers are written to by inserting the desired decimal value for the register in the appropriate box and clicking the LOAD button.

## MAX3710 Evaluation Kit

## Evaluates: MAX3710

## Transmitter

The TRANSMITTER block allows control of transmitter's general settings. Clicking the TX Read button reads all the registers shown in the TRANSMITTER section.

## Dual Power Control

The Dual  Power  Control block  allows  adjustment  and monitoring of the transmitter's dual power-control loops. A subblock in this section, DATA REPORTING , uses the MAX3710's registers to calculate the apparent average power  ( NAPC ),  the  apparent  extinction  ratio  ( IR ),  and the  average  MD  current  ( IMDAVG ).  The  MD0REG  and MD1REG values shown in the GUI are 8bit.8bit so they range from 0 to 255 with 0.0039 granularity.

## Block Read and Write

The Block  Read and Write section  allows  the  user  to read/write to more than one register at a time. Clicking any of the Block Read buttons will cause the GUI to execute a block read of the appropriate group of registers. By clicking the Enable Block Write box, the user will be able  to  change  multiple  registers  without  a  write  being executed  each  time.  The  GUI  buffers  the  commands and executes them in a single write command once the appropriate Block Write button has been pressed. Note that if BIock Write is not selected, individual bits will be written any time a check box is checked or unchecked, or a field value is changed.

## MAX3710 Evaluation Kit

## Evaluates: MAX3710

Figure 1. TOSA Connection

<!-- image -->

Figure 2. MAX3710 EV Kit Software

<!-- image -->

## MAX3710 Evaluation Kit

## Evaluates: MAX3710

Figure 3. MAX3710 EV Kit Schematic

<!-- image -->

## MAX3710 Evaluation Kit

## Evaluates: MAX3710

Figure 4. MAX3710 EV Kit Component Placement Guide-Component Side

<!-- image -->

## MAX3710 Evaluation Kit

## Evaluates: MAX3710

Figure 5. MAX3710 EV Kit PCB Layout-Top Side

<!-- image -->

## MAX3710 Evaluation Kit

## Evaluates: MAX3710

Figure 6. MAX3710 EV Kit PCB Layout-Ground Plane

<!-- image -->

## MAX3710 Evaluation Kit

## Evaluates: MAX3710

Figure 7. MAX3710 EV Kit PCB Layout-Power Plane

<!-- image -->

## MAX3710 Evaluation Kit

## Evaluates: MAX3710

Figure 8. MAX3710 EV Kit PCB Layout-Solder Side

<!-- image -->

## MAX3710 Evaluation Kit

## Evaluates: MAX3710

Figure 9. MAX3710 EV Kit PC Component Placement Guide-Solder Side

<!-- image -->

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX3710EVKIT+ | EV Kit |

## MAX3710 Evaluation Kit

## Evaluates: MAX3710

## MAX3710 Evaluation Kit

## Evaluates: MAX3710

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                           | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------|-----------------|
|                 0 | 8/11            | Initial release                       | -               |
|                 1 | 10/12           | Updated resistor R2 in Component List | 1               |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.