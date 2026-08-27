<!-- lastmod 2022-08-03 -->
## MAX77860 Evaluation System

## General Description

The MAX77860 evaluation system (EV system) is a fully assembled and tested surface-mount printed circuit board (PCB)  that  evaluates  the  single  input  switched-mode battery charger featuring USB Type-C CC detection and charging capability in addition to reverse boost capability and a safeout LDO.

The MAX77860 EV system includes the integrated circuit (IC) evaluation board with an integrated I 2 C interface and a  MINIQUSB  communication  device.  Windows ®   based graphical  user  interface  (GUI)  software  is  available  for use  with  the  EV  system  and  can  be  downloaded  from the  MAX77860  product  page  on  the  Maxim  website. A Windows 7 or newer operating system is required to use the EV kit GUI software.

## MAX77860 EV System Files

| FILE                      | DESCRIPTION                 |
|---------------------------|-----------------------------|
| MAX77860GUISetupx.x.x.exe | Installs EV kit files on PC |

## MAX77860 EV System Component List

| PART                             |   QTY | DESCRIPTION              |
|----------------------------------|-------|--------------------------|
| MAX77860EVKIT                    |     1 | MAX77860 evaluation kit  |
| MAXIM MINIQUSB                   |     1 | MINIQUSB interface board |
| USB HIGH-SPEED A-TO-B CABLES 6FT |     1 | MINIQUSB cable           |

Windows is a registered is a registered trademark and service mark of Microsoft Corporation.

## Features

- Evaluates MAX77860 Single-Input Switch Mode Charger
- Demonstrates 4.0V to 13.5V Input Operation Range
- Demonstrates USB Type-C Charging Up to 3.15A
- Demonstrates Adapter Detection
- Demonstrates USB-OTG Functionality
- Assembled and Tested
- I 2 C Serial Interface

Ordering Information appears at end of data sheet.

Evaluates: MAX77860

<!-- image -->

## MAX77860 Evaluation System

## Quick Start

## Required Equipment

- MAX77860 EV kit
- Single-cell Lithium-ion (Li-ion) battery pack
- Charging wall adapter or DC power supply capable of supplying 15.0V/3A
- Standard USB Type A to Type B cable (included in the EV system)
- PC running Windows 7 or above

## Setup Overview

A  typical  bench  setup  for  the  MAX77860  EV  system  is shown in Figure 1.

## Procedure

Note: Do not turn on the DC power supplies until all connections are made.

- 1) Carefully connect the boards by inserting the 20-pin female connector of the MAX77860 EV system with the 20-pin male header of the MINIQUSB interface board. The two boards should be flush with each other.
- 2) Use the USB cable provided in the EV system to connect the MINIQUSB interface board to the PC's USB port.
- 3) Install the MAX77860 graphical user interface (GUI) from the MAX77860 product page on the Maxim website.
- 4) Verify whether the jumper settings follow the default configuration See Jumper Settings section.
- 5) Connect a Li-ion battery to the pads labeled BATT and BATTGND.
- 6) Connect a USB wall adapter to the USB Type C port on the board.
- 7) Launch the MAX77860 GUI software.
- 8) Select Device &gt; Connect from the window options to connect to the EV system.

Figure 1. MAX77860 Bench Setup

<!-- image -->

## Evaluates: MAX77860

│

## MAX77860 Evaluation System

## Detailed Description of Software

The  MAX77860  GUI  software  provides  an  easy-to-use interface to control the function blocks of the IC.

## Software Installation

The software requires Windows 7 or newer operating system .NET 4.5 is required for operation and is automatically installed if an older version of .NET is detected. To install the evaluation software, exit all programs currently running and unzip the provided MAX77860 GUI setup zipped file.

Evaluates: MAX77860

Double  click  the MAX77860GUISetupx.x.xx.exe icon  to begin the installation process. Follow the prompts to complete the installation. The evaluation software can be uninstalled in the Add/Remove Programs tool in the Control Panel . After the installation is complete, open the Maxim Integrated/MAX77860 folder  and  run MAX77860.exe or select MAX77860 from the program menu. A splash screen containing information about the evaluation kit appears as the program is being loaded (Figure 2).

Figure 2. MAX77860 GUI Splash Screen

<!-- image -->

│

## MAX77860 Evaluation System

## Communication

The  software  automatically  finds  the  EV  system  board through  USB  identification.  If  the  connection  cannot  be found,  then  a Not  Connected message  is  displayed. Once the micro-USB cable is attached, click on the main window option, Device &gt; Connect , and a synchronization

Evaluates: MAX77860

window appears. This window shows the IC sub-blocks and their corresponding slave addresses. Choose Read and  Close and  the  status  bar  displays Connected to signify active communication. An example of a successful connection is shown in Figure 3.

Figure 3. MAX77860 Communication Window

<!-- image -->

│

## MAX77860 Evaluation System

## Main Display

Status  bits  and  programmable  functions  of  charger, master-slave, ADC,  and  USB  Type-C  can  be  accessed

Evaluates: MAX77860

through  their  respective  interface  tabs  from  the  left  column of the window (Figure 4).

Figure 4. MAX77860 Top-Level Registers

<!-- image -->

## MAX77860 Evaluation System

## Register Write Access

Modification of the charger registers are locked by default to prevent arbitrary changes. Therefore, changes made to the charger registers in the locked state are not applied to  the  EV  system.  To  unlock  register  writing,  select  the Unlocked option  from  the  drop-down  list  of CHGPROT in  the CHG  Config  06/07/09 tab,  and  then  click  on Write .  Read the register and CHGPROT should remain

Evaluates: MAX77860

in Unlocked state, signifying open register access. From this point onwards, modifications that are written to any of the registers are applied to the EV system. For example, the maximum input current limit can be changed from the CHG Config 09 register by selecting the required value and clicking Write , but only after the registers have been unlocked from CHG Config 06 (Figure 5).

Figure 5. Charger Register Write Access

<!-- image -->

│

## MAX77860 Evaluation System

## Detailed Description of Hardware

## Battery Charger Test Setup

- 1) Power Source:
- a. If the charging source is a DC power supply, then adjust its voltage and current limits to 5.0V and 3.0A, respectively. Connect the power supply between VBUS and GND on the EV kit board.
- b. If the charging source is a wall adapter, then either the USB Type-C port or micro-USB port can be used for charging. Note that high current charging (up to 3A) requires an adapter and cable capable of high-power delivery.
- 2) Connect a single cell Li-ion battery between BATT and BATTGND.

## Jumper Settings

| JUMPER NO.   | PCB SILKSCREEN   | DEFAULT POSITION   | FUNCTION                                                                                        |
|--------------|------------------|--------------------|-------------------------------------------------------------------------------------------------|
| J3           | SLAVE            | 2-3                | 1-2: Connect to slave charger 2-3: Slave charger not present                                    |
| J4           | FLED1            | Open               | Reserved, leave open                                                                            |
| J5           | FLED2            | Open               | Reserved, leave open                                                                            |
| J6           | THM              | 1-2                | 1-2: Connect THM to potentiometer 2-3: Connect THM to thermistor                                |
| J7           | VIO              | 1-2                | 1-2: Connect VIO to VSYS 2-3: Connect VIO to external I 2 C pullup                              |
| J8           | DETBATB          | 2-3                | 1-2: Connect DETBATB to VIO 2-3: Connect DETBATB to GND                                         |
| J9, J17      | GND              | Open               | Open: Disable SYS to input of U4 (Type-C block) Close: Enable SYS to input of U4 (Type-C block) |
| J10          | THMB             | Close              | Open: Disconnect THMB from potentiometer Close: Connect THMB to potentiometer                   |
| J11          | ONKEY            | 2-3                | 1-2: Disable ONKEY control of button SW-ONKEY 2-3: Enable ONKEY control of button SW-ONKEY      |
| J12          | CC1              | Open               | Open: Disable on-board Type-C emulation setting Close: Enable on-board Type-C emulation setting |
| J13          | CC2              | Open               | Open: Disable on-board Type C emulation setting Close: Enable on-board Type C emulation setting |
| J15          | VBUSDET          | Open               | Open: Disconnect CHGIN and VBUSDET Close: Connect CHGIN and VBUSDET                             |

│

Evaluates: MAX77860

- 3) Open software screen and program the charger settings adequate to your system.
- 4) In the Charger tab, disable the USB Type C CTRL over CHG bit in the CHG\_Config\_00 to enable charging using the USB Type-C port or the micro-USB port.
- 5) In the USB Type C tab, enable NoAutoIBUS in the BC\_CONTROL1 register so that the current limit setting can be manually controlled by I 2 C.
- 6) Set the maximum input current limit in the CHG Config 09 register, and then select the required fast charge current in the CHG Config 02 register.
- 7) Use data logging equipment to log charge current and VBATT profile while charging a fully discharged single cell Li-ion battery.

## MAX77860 Evaluation System

## MAX77860 EV System Component List

| DESIGNATION                                                                   |   QTY | DESCRIPTION                             | MANUFACTURER PART NO.                |
|-------------------------------------------------------------------------------|-------|-----------------------------------------|--------------------------------------|
| D+, D-, AVL, BST, CC1, CC2, CSN, CSP, PVL, SCL, SDA, SW1, SW2, THM, VIO, BYPS |    16 | TESTPOINT, PC MINI-RED                  | 5000                                 |
| BYP, BATT, GND1-GND4, PGND, VBUS, VSYS, CHGIN, BATTGND                        |    11 | WIRE, BUSS 20G PLATED SOLID COPPER      | 9020 BUSS                            |
| C1                                                                            |     1 | CAP+, 1000pF, 10%, 50V, C0G, 0402       | ANY                                  |
| C2, C12, C19, C20                                                             |     4 | CAP+, 1uF, 10%, 6.3V, X5R, 0402         | ANY                                  |
| C3                                                                            |     1 | CAP+, 100pF, 5%, 50V, C0G, 0402         | ANY                                  |
| C4                                                                            |     1 | CAP+, 2.2UF, 10%, 6.3V, X5R, 0402       | ANY                                  |
| C5                                                                            |     1 | CAP#, 10uF, 20%, 6.3V, X5R, 0402        | ANY                                  |
| C6                                                                            |     1 | CAP+, 2.2UF, 10%, 25V, X5R, 0603        | ANY                                  |
| C7*                                                                           |     1 | CAP+, 4.7uF, 20%, 10V, X5R, 0402        | ANY                                  |
| C8, C9                                                                        |     2 | CAP+, 0.1uF, 10%, 25V, X7R, 0402        | GRM155R71E104KE14                    |
| C10, C15                                                                      |     2 | CAP+, 10UF, 20%, 16V, X5R, 0603         | ANY                                  |
| C11, C13                                                                      |     2 | CAP+, 10uF, 20%, 25V, X5R, 0603         | C1608X5R1E106M080AC; CL10A106MA8NRNC |
| C14                                                                           |     1 | CAP+, 22uF, 20%, 10V, X5R, 0603         | ANY                                  |
| C17                                                                           |     1 | CAP+, 100uF, 20%, 6.3V, TANT, 1210      | TCJB107M006R0070                     |
| C21                                                                           |     1 | CAP+, 1UF, 20%, 25V, X5R, 0402          | ANY                                  |
| C22                                                                           |     1 | CAP+, 10uF, 10%, 6.3V, X7R, 0805        | GRM21BR70J106K; C2012X7R0J106K125AB  |
| C23                                                                           |     1 | CAP+, 0.1uF, 10%, 10V, X5R, 0402        | ANY                                  |
| C24                                                                           |     1 | CAP+, 22UF 20% 10V TANT                 | PSLB31A226M                          |
| CHGGNDS                                                                       |     1 | BLACK MINI TEST POINTS                  | 5001                                 |
| D3-D6                                                                         |     4 | DIODE+, TVS, 25V, 4A, 0402              | RCLAMP0521PA                         |
| D10*, D11*                                                                    |     2 | LED+, YELLOW, OSLON 2.2V, 350mA, 3X3MM  | GWCSSRM1.EC-MQMS-5H7I-1              |
| D12                                                                           |     1 | LED+, SURFACE MOUNT GREEN (0603)        | LTST-C190GKT                         |
| INFLED*                                                                       |     1 | PC TEST POINT RED                       | 5010                                 |
| J1                                                                            |     1 | RCPT+, MICRO B USB 2.0, 5 POS, SMD, R/A | 10103592-0001LF                      |
| J2                                                                            |     1 | SOCKET+,0.1', 2X10POS, FEMALE, R/A,TH   | PPTC102LJBN-RC                       |
| J3, J6-J8, J11                                                                |     5 | HEADER#, 3POS,. 100', SNGL, TIN         | TSW-103-07-T-S                       |
| J4*, J5*, J9, J10, J12, J13, J15-J17                                          |     9 | HEADER#, 2POS,.100', SNGL, TIN          | TSW-102-07-T-S                       |
| J14                                                                           |     1 | CONN+, USB 3.1 RCPT, 24 POS, RA, TH     | 898-43-024-90-310000                 |
| L1                                                                            |     1 | INDCTR+, 1 uH, 20%,4.1A, 1008           | CIGT252010EH1R0M                     |

Evaluates: MAX77860

## MAX77860 EV System Component List (continued)

| DESIGNATION          |   QTY | DESCRIPTION                             | MANUFACTURER PART NO.                            |
|----------------------|-------|-----------------------------------------|--------------------------------------------------|
| L2                   |     1 | INDCTR+, 1.2 uH, 20%, 5.8A, 4.1 X 4.1MM | 1127AS-1R2N                                      |
| R1, R2               |     2 | RES, 2.2KΩ,1%,0402                      | CRCW04022K20FK; RC0402FR-072K2L                  |
| R3                   |     1 | RES#, 1.2MΩ, 1%, 0402                   | RK73H1ETTP1204F                                  |
| R4                   |     1 | RES+, 120KΩ, 1%, 0402                   | CRCW0402120KFK                                   |
| R5, R6               |     2 | RES#, 200KΩ, 1%, 0402                   | CRCW0402200KFK; RF73H1ELTP2003                   |
| R7, R8, R13, R14     |     4 | RES#, 0Ω, 5%, 0402                      | ERJ-2GE0R00X                                     |
| R9                   |     1 | RES, 470Ω, 1%, 0402                     | CRCW0402470RFK                                   |
| R10                  |     1 | RES#, 10KΩ, 1%, 0402                    | CRCW040210K0FK; RC0402FR-0710K                   |
| R11                  |     1 | RES#, POT, 100KΩ, 10%, 9.53 X 4.83MM    | 3296Y-1-104LF                                    |
| R12                  |     1 | RES+, 0.005Ω, 1%, 1/2W, 0603            | RLM-0816-4F-R005-FNH                             |
| R16                  |     1 | RES#, 100Ω, 1%, 0402                    | CRCW0402100RFK; 9C04021A1000FL; RC0402FR-07100RL |
| R17, R18             |     2 | RES#, 56KΩ, 1%, 0402                    | ERJ-2RKF5602X                                    |
| RT1                  |     1 | RES#, THERM, 10K 0,1%, 0402             | NCP15XH103F03RC                                  |
| SW3*, SW4*, SW-ONKEY |     3 | PUSH BUTTON SWITCHES                    | EVQ-Q2K03W                                       |
| U1                   |     1 | MAX77860EWG+                            | MAX77860                                         |
| U2                   |     1 | MAX14699EWC+T                           | MAX14699EWC+T                                    |
| U3                   |     1 | MAX8511EXK18+                           | MAX8511EXK18+                                    |
| U4                   |     1 | MAX8815AETB+                            | MAX8815AETB+                                     |

Note:

Components marked with asterisk (*) are reserved for Maxim internal use.

## Ordering Information

| PART           | TYPE      |
|----------------|-----------|
| MAX77860EVKIT# | EV System |

# Denotes RoHS compliance.

Evaluates: MAX77860

## MAX77860 EV Kit Schematic

<!-- image -->

## MAX77860 EV Kit Schematic (continued)

<!-- image -->

│

Evaluates: MAX77860

## MAX77860 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                         | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------------|-----------------|
|                 0 | 2/19            | Initial release                                                     | -               |
|                 1 | 2/19            | Updated Ordering Information                                        | 9               |
|                 2 | 4/19            | Updated Jumper Settings and MAX77860 EV System Component List table | 7, 8-10, 12     |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPplied. Ma[iP Integrated reserYes the right to change the circuitry and specifications without notice at any tiPe.

│

Evaluates: MAX77860