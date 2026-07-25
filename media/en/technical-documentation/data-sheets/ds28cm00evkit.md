<!-- lastmod 2022-08-03 -->
<!-- image -->

## DS28CM00 Evaluation System

## Evaluates:  DS28CM00

## General Description

The DS28CM00 evaluation system (EV system) consists of  a  DS28CM00  evaluation  board  (EV  board)  and  a Maxim CMAXQUSB command module. The DS28CM00 is a low-cost, electronic registration number providing an absolutely  unique  identity  that  can  be  determined  with the  industry-standard  I 2 C  and  SMBus™  interface.  The registration number is a factory-lasered, 64-bit ROM that includes  a  unique  48-bit  serial  number,  an  8-bit  CRC, and an 8-bit family code. The evaluation software runs under Windows XP M or Windows M 2000 operating system (OS), providing a handy user interface to exercise the features of the DS28CM00.

Order the DS28CM00EVKIT for the complete EV system to evaluate the DS28CM00 using a PC. Evaluation software for the EV system is also available on our website at: www.maximintegrated.com/EVkitsoftware .

## Contents List

|   QTY | DESCRIPTION                                               |
|-------|-----------------------------------------------------------|
|     1 | DS28CM00 EV Board: Daughtercard containing Maxim DS28CM00 |
|     1 | CMAXQUSB: Command module with USB cable                   |

Features

- S Proven PCB Layout
- S Complete Evaluation System
- S Convenient On-Board Test Points
- S Fully Assembled and Tested
- S Downloadable Evaluation Software

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| DS28CM00EVKIT | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                       |
|---------------|-------|-------------------------------------------------------------------|
| J1            |     1 | 100-mil centers, 20-pin female right-angle header                 |
| U1            |     1 | I 2 C/SMBus silicon serial number (5 SOT23) Maxim DS28CM00R-A00+T |
| -             |     1 | PCB: DS28CM00 EVAL BOARD                                          |

## DS28CM00 Evaluation System

## Evaluates:  DS28CM00

Figure 1. Typical Setup

<!-- image -->

## Quick Start

Note: In  the  following  sections,  software-related  items are  identified  by  bolding.  Text  in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Required Equipment

-    PC  running  Windows  XP  or  2000  OS  with  Microsoft .NET Framework Version 1.1 installed
-  Spare USB port on the PC

## Evaluation Board

The DS28CM00 EV board provides a proven PCB layout to facilitate evaluation of the DS28CM00. It must be interfaced to appropriate timing signals for proper operation. The  DS28CM00  EV  board  is  a  simple  circuit  with  the DS28CM00  located  on  top  of  the  board  and  a  rightangle, 20-pin, female connector located on the leftmost side  of  the  board.  This  female  20-pin  connector  plugs into  the  CMAXQUSB  command  module  and  connects the  power  (VC),  ground  return  (GN),  data  (SD),  and clock (SC) pins of the DS28CM00. See the DS28CM00 Evaluation Board Schematic .

## Evaluation System

The DS28CM00 EV system is defined to be the DS28CM00 EV board coupled with the CMAXQUSB command module  and  the  evaluation  software.  The  DS28CM00  EV board connects to the appropriately labeled pins on the CMAXQUSB command module. See location P3 labeled 'MAX  SMBus  COMPATIBLE  INTERFACE'  in  Figure 2.  The  evaluation  software  runs  under  the  Windows XP/2000  OS,  interfacing  to  the  EV  board  through  the computer's  USB  port.  See  the Quick-Start  Sequence section for setup and operating instructions.

## Quick-Start Sequence

- 1)    Before beginning, make sure the following equipment is available:
-    DS28CM00  EV  system  (contains  DS28CM00  EV board and CMAXQUSB module)
-    PC running Windows XP/2000 OS with a spare USB port

## Evaluates:  DS28CM00 DS28CM00 Evaluation System

Figure 2. CMAXQUSB with DS28CM00 Evaluation Board

<!-- image -->

- 2)  Do the following before connecting to the PC:
- a.    Select +5V logic by setting the CMAXQUSB VDD SELECT jumper.
- b.    Connect the EV board to the CMAXQUSB board with the 20-pin connector at location P3 (the I 2 C/ SMBus pins).
- 3)    Download  the  evaluation  software  from  Maxim's  EV kit software page or from the EV system's QuickView: www.maximintegrated.com/DS28CM00EVKIT .  The evaluation software is provided as a .zip archive file. Unzip the archive's contents into an empty or newly created directory.
- 4)    Connect  the  USB  cable  between  the  CMAXQUSB and the computer. When you plug in the CMAXQUSB board for the first time, the Windows Plug-and-Play system  detects  the  new  hardware  and  automatically runs the Add New Hardware Wizard .  Be sure to  specify  the  search  location  for  the  device  driver, which is the directory where the evaluation software files were unzipped.
- 5)    During  device  driver  installation,  Windows  displays a warning message indicating that the device driver Maxim uses does not contain a digital signature. This is not an error condition. It is safe to proceed with the installation.
- 6)    The Microsoft  .NET  Framework  Version  1.1 is required for the program to run. If it is not installed, refer  to  the  following  website  for  download  and installation  instructions:  http://msdn.microsoft.com/ netframework/downloads/framework1\_1/.
- 7)    Start  the  EV  system  software  by  double-clicking DS28CM00\_Evaluation\_Program.exe in the file folder  containing  the  unzipped  evaluation  software files.
- 8)    If  any  problems  occur  during  device  driver  installation, refer to Application Note 3601: Troubleshooting Windows Plug-and-Play and USB for Maxim Evaluation Kits for more details.

## Detailed Description of Software

The software window is a single screen with three different  sections  enabling the customer to perform three different activities.

- 1)    In  the CMAXQUSB Connect section,  the  customer can connect to the CMAXQUSB EV board by clicking on the Connect button. A status bar message at the bottom of the screen gives the connection status. If connected, the status bar text displays an appropriate message, along with the firmware version string read from the CMAXQUSB board.

## Evaluates:  DS28CM00 DS28CM00 Evaluation System

To disconnect from the board, choose the Disconnect button.  An  appropriate  disconnect  message  then appears in the status bar text. If the program is not connected to the CMAXQUSB board, all the read and write buttons on the software window, when clicked, respond  with  a  message  indicating  that  the  board should first be connected before attempting to read or write to the DS28CM00.

- 2)    The  part's  silicon  serial  number  is  shown  under the DS28CM00  Read  Silicon  Serial  Number section.  This  includes  the  family  code  of  the  part,  the serial  number,  the  CRC-8  (for  error  checking),  and the  control  register  (which  determines  whether  the part provides SMBus timeouts or keeps from timing out  according  to  I 2 C  specifications).  Clicking  the Read  Device button  initiates  a  simple  read  of  the DS28CM00's  silicon  serial  number.  The  program returns the silicon serial number broken down by family code, serial number, CRC-8, and the control register. Note that the device cannot be read without first connecting to the CMAXQUSB board (see step 1).
- 3)    In  the DS28CM00  Control  Register section,  the customer  can  write  to  or  read  the  control  register (which  can  be  either  '0'  or  '1').  When  the  control register is set to 1 (power-on default), the device is in SMBus mode, which enables the bus timeout function. Setting the control register to 0 puts the device in I²C mode, where the timeout function is disabled. Again, note that the device cannot be written to nor read  without  first  connecting  to  the  CMAXQUSB board (see step 1).

The application  also  has File and Help menu  options. The File option  only  allows  a  user  to  exit  the  program, and the Help option only allows a user to bring up the About box containing versioning data for the program.

## Online Resources

DS28CM00  IC  Data  Sheet: www.maximintegrated.com/ DS28CM00

CMAXQUSB  User's  Guide: www.maximintegrated.com/ CMAXQUSB

Figure 3. Main Software Window

<!-- image -->

## DS28CM00 Evaluation System

## Evaluates:  DS28CM00

## DS28CM00 Evaluation Board Layout

<!-- image -->

## DS28CM00 Evaluation Board Schematic

<!-- image -->

## Evaluates:  DS28CM00 DS28CM00 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                              | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------|-----------------|
|                 1 | 10/09           | Created newer template-style data sheet. | All             |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

6