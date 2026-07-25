<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAXQ USB-to-JTAG Evaluation Kit

## Evaluates:  Programming Interface for MAXQ Microcontrollers

## General Description

The MAXQ M USB-to-JTAG evaluation kit (EV kit) is a preprogrammed interface board that acts as a USB-to-JTAG programming and debugging adapter for MAXQ microcontrollers.  With  the  included  board,  included  10-pin JTAG  interface  cable,  and  a  (user  supplied)  standard A-to-Mini-B USB cable, the EV kit can be used with compatible software tools running on a host PC to load and debug code on programmable MAXQ microcontrollers. Software packages that support the USB-to-JTAG adapter  include  IAR  Embedded  Workbench M IDE  for  C  programming,  Maxim's  free  MAX-IDE  for  assembly-based projects, and the Microcontroller Tool Kit (MTK) utility for loading and verifying precompiled Intel hex format files.

## EV Kit Contents

- S MAXQ USB-to-JTAG Evaluation Board
- S JTAG Interface Ribbon Cable

Features

- S 3.3V JTAG Port Interface
- S Easily Load Code and Debug Using USB-to-JTAG Interface
- S USB-to-JTAG Interface Provides In-Application Debugging Features
- S Step-by-Step Execution Tracing
- S Breakpointing by Code Address and Data Memory Address
- S Register and Data Memory View and Edit

## Ordering Information

| PART             | TYPE                    |
|------------------|-------------------------|
| MAXQUSBJTAG-KIT# | MAXQ USB-to-JTAG EV Kit |

#Denotes a RoHS-compliant device that may include lead that is exempt under the RoHS requirements.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                          |
|---------------|-------|------------------------------------------------------|
| C1, C2, C3    |     3 | 0.1 F F -20%/+80%, 16V capaci- tors (0603)           |
| C4            |     1 | 1 F F Q 10%, 6.3V capacitor (0603)                   |
| C5            |     1 | 4.7 F F Q 20%, 6.3V capacitor (0603)                 |
| D1            |     1 | Green surface-mount LED Lite-On IT LTST-C190GKT      |
| D2            |     1 | Red surface-mount LED Lite-On IT LTST-C190CKT        |
| J1            |     0 | Not populated                                        |
| J2            |     1 | 2 x 5, 0.100in-spaced header (JTAG) Molex 90131-0125 |

| DESIGNATION   |   QTY | DESCRIPTION                                                              |
|---------------|-------|--------------------------------------------------------------------------|
| J3            |     1 | USB mini-B connector Hirose Electric UX60-MB-5ST                         |
| R1, R2        |     2 | 680 I Q 5%, 1/10W resistors (0603)                                       |
| U1            |     1 | Low-power LCD microcontroller (56 TQFN-EP*) Maxim MAXQ2000-RBX+          |
| U2            |     1 | FTDI USB-to-UART converter FTDI FT232RL                                  |
| U3            |     1 | LDO linear voltage regulator (+2.5V output) (6 SOT23) Maxim MAX6329ZLUT+ |
| -             |     1 | PCB: MAXQUSBJTAGEVKIT#, REV B/REV C                                      |

## MAXQ USB-to-JTAG Evaluation Kit

## Evaluates:  Programming Interface for MAXQ Microcontrollers

Figure 1. MAXQ USB-to-JTAG EV Kit Board

<!-- image -->

## Detailed Description

The  MAXQ ®   USB-to-JTAG  EV  kit  is  designed  to  operate  as  a  USB-to-JTAG  adapter  between  programming/ debugging  tools  on  the  host  PC  (such  as  MAX-IDE, MTK, or  IAR  Embedded  Workbench ®   IDE)  and  a  programmable  MAXQ microcontroller.  The  FT232RL  USBto-UART converter allows the host PC to communicate with  the  MAXQ2000 on the USB-to-JTAG EV kit over a virtual COM port that is translated into a standard 10-bit, asynchronous, serial protocol running at 115,200 baud. The MAXQ2000 receives commands and data from the PC and handles the task of driving the four JTAG communication lines (TCK, TMS, TDO, and TDI) that connect to another MAXQ microcontroller on a separate kit board.

The MAXQ USB-to-JTAG EV kit has two off-board connectors. The first of these is a standard mini-B USB connector that is used to connect the USB-to-JTAG EV kit to a USB port  on  the  host  PC.  The  MAXQ  USB-to-JTAG  EV  kit  is powered directly over the USB cable. The second connector is the standard 10-pin JTAG interface used by all MAXQ microcontroller EV kits, allowing the MAXQ USB-to-JTAG EV kit to be connected to another MAXQ microcontroller using a  2  x  5-pin  header,  10-connector  ribbon  cable.  Table  1 defines the pins on the USB-to-JTAG interface.

## Power Supplies

The MAXQ USB-to-JTAG EV kit is powered directly from the VBUS supply (typically 5V) on the USB cable. This

MAXQ is a registered trademark of Maxim Integrated Products, Inc.

IAR Embedded Workbench is a registered trademark of IAR Systems AB.

## Table 1. USB-to-JTAG Interface Pin Definitions

| HEADER PIN   | PIN NAME   | DESCRIPTION                                                                         |
|--------------|------------|-------------------------------------------------------------------------------------|
| 1            | TCK        | JTAG interface: test clock                                                          |
| 2, 10        | GND        | Ground                                                                              |
| 3            | TDO        | JTAG interface: test data out                                                       |
| 4            | VREF       | Not connected on this design. JTAG pins are driven at a fixed +3.3V level.          |
| 5            | TMS        | JTAG interface: test mode select                                                    |
| 6            | RST        | Active-low reset                                                                    |
| 7            | KEY        | No connection. This pin can be removed/cut to fit JTAG cables that have been keyed. |
| 8            | VP50       | Connected to the USB VBUS supply on this design.                                    |
| 9            | TDI        | JTAG interface: test data in                                                        |

supply voltage is also provided at pin 8 (VP50) on the outgoing  JTAG  interface  connector,  which  allows  the EV kit on the other end of the JTAG connector cable to also power itself from the USB bus supply if configured to do so.

The FT232RL outputs a regulated +3.3V supply that is, in turn, regulated down to a +2.5V supply by the MAX6329 LDO regulator. These supplies are only designed for use by  the  components  on  the  MAXQ  USB-to-JTAG  EV  kit and are not meant to power external circuitry.

## MAXQ USB-to-JTAG Evaluation Kit

## Evaluates:  Programming Interface for MAXQ Microcontrollers

Figure 2. MAXQ USB-to-JTAG Communications Interface

<!-- image -->

## Installing the Virtual COM Port (VCP) FTDI Drivers for Windows XP

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows M operating system.

Before  the  USB-to-JTAG  interface  on  the  MAXQ  USBto-JTAG EV kit can be used, the proper drivers must be installed  for  the  FT232RL  USB-to-serial  converter.  The following instructions provide a brief overview of installing  the  FTDI  drivers  for  PCs  using  the  Windows  XP M operating  system;  for  a  more  in-depth  explanation  as well as instructions on how to install the FTDI drivers for PCs using the Windows 2000 or Windows 98 operating systems,  refer  to  http://www.ftdichip.com/Documents/ InstallGuides.htm.

-    Download the latest VCP driver package for Windows XP  from  the  FTDI  website  at  http://www.ftdichip.com/ Drivers/VCP.htm. These are also referred to as the combined driver model (CDM) drivers.
-    Unzip the driver package into a working directory.

Windows and Windows XP are registered trademarks of Microsoft Corp.

-    If  you  are  running  Windows  XP  (with  no  service  packs installed) or Windows XP SP1, disconnect your computer from the Internet at this point. If running Windows XP SP2 or  later, Windows Update must  be  configured  to  ask permission  before  automatically  searching  for  drivers for a new device. This can be set from Start → Control Panel → System → Hardware → Windows  Update , as shown in Figure 3.
-    Connect the USB connector J3 to a USB port on your PC. The Found New Hardware Wizard dialog should automatically appear (Figure 4). Select No, not this time to keep the wizard from automatically searching for a driver, and then click Next to continue.
-    In  the  following  dialog,  select Install  from  a  list  or specific  location  (Advanced) (Figure  5)  and  click Next to continue.
-    Finally,  in  the  search  and  installation  options  dialog (Figure 6), select Search for the best driver in these locations. and enter the location of the working directory  containing  the  unzipped  VCP  driver  files.  Click Next to finish installing the driver.

## MAXQ USB-to-JTAG Evaluation Kit

## Evaluates:  Programming Interface for MAXQ Microcontrollers

Figure 3. Configuring Windows Update

<!-- image -->

-    After the first driver installation completes, the Found New Hardware Wizard dialog appears a second time (Figure 7). Repeat the previous steps using the same settings and driver file location.
-    Once  this  second  driver  installation  pass  has  com -pleted, the USB-to-JTAG interface should be installed and ready for use.

Figure 4. Found New Hardware Wizard Dialog

<!-- image -->

<!-- image -->

## Evaluates:  Programming Interface for MAXQ Microcontrollers MAXQ USB-to-JTAG Evaluation Kit

Figure 5. Driver Installation

<!-- image -->

Figure 6. Selecting Driver File Location for Installation

<!-- image -->

## MAXQ USB-to-JTAG Evaluation Kit

## Evaluates:  Programming Interface for MAXQ Microcontrollers

Figure 7. Secondary Driver Installation

<!-- image -->

Figure 8. USB Serial Port COM Location in Device Manager

<!-- image -->

## MAXQ USB-to-JTAG Evaluation Kit

## Evaluates:  Programming Interface for MAXQ Microcontrollers

Figure 9. MAXQ USB-to-JTAG EV Kit Schematic (Rev B/Rev C)

<!-- image -->

## Evaluates:  Programming Interface for MAXQ Microcontrollers MAXQ USB-to-JTAG Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                     | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------|-----------------|
|                 0 | 3/10            | Initial release                 | -               |
|                 1 | 11/10           | Updated the General Description | 1               |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

8