<!-- lastmod 2022-08-05 -->
## MAX77960/MAX77961 Evaluation Kit

## General Description

The  MAX77960/MAX77961  evaluation  kit  (EV  kit)  is  a fully assembled and tested surface-mount printed circuit board  (PCB)  that  evaluates  the  MAX77960/MAX77961, 3A/6A USB Type-C ®  buck-boost chargers.

The MAX77960/MAX77961 EV kit includes the IC evaluation board with integrated I 2 C communication interface and USB micro-B cable. Windows ® -based graphical user interface (GUI) software is available for use with the EV kit and can be downloaded from Maxim's website at www. maximintegrated.com/products/MAX77960 (under  the Design  Resources tab)  and www.maximintegrated. com/products/MAX77961 (under the Design Resources tab). Windows 7 or newer is required to use with the EV kit GUI software.

## Evaluates: MAX77960/MAX77961

## Features

- Evaluates  the  MAX77960/MAX77961  USB  Type-C Buck-Boost Chargers with Integrated FETs for 2S/3S Li-Ion Batteries
- Demonstrates 3.5V to 25.4V  Input Operating Range
- Demonstrates  Charging  Up  to  3A  (MAX77960)/6A (MAX77961)
- Demonstrates USB-OTG Functionality
- Demonstrates  JEITA Compliance  with  On-Board Dummy Thermistors
- Assembled and Tested
- I 2 C Serial Interface

Ordering Information appears at end of data sheet.

Figure 1. MAX77960/MAX77961 EV Kit Photo

<!-- image -->

USB Type-C is a registered trademark of USB Implementers Forum. Windows is a registered trademark and registered service mark of Microsoft Corporation.

<!-- image -->

## MAX77960/MAX77961 Evaluation Kit

## MAX77960/MAX77961 EV Kit Files

| FILE                               | DESCRIPTION                     |
|------------------------------------|---------------------------------|
| MAX77960_MAX77961GUISetupX.X.X.exe | Installs all EV kit files on PC |

## MAX77960/MAX77961 EV Kit

## Component List

| PART                        |   QTY | DESCRIPTION                      |
|-----------------------------|-------|----------------------------------|
| MAX77960/MAX77961EVKIT      |     1 | MAX77960/MAX77961 evaluation kit |
| USB high-speed A-to-B cable |     1 | USB Micro-B cable                |

## Quick Start

## Required Equipment

- MAX77960/MAX77961 EV kit
- Adjustable DC power supply
- Battery or simulated battery
- 2- or 3-cell Li-ion protected battery
- Simulated battery or preloaded power supply
- Oscilloscope
- Two voltmeters
- Two ammeters
- Lab cables with appropriate current rating
- USB Micro-B cable
- PC with Windows 7 or newer operating system and USB port

Figure 2. EV Kit Simple Block Diagram

<!-- image -->

Evaluates: MAX77960/MAX77961

## Setup Overview

A typical bench setup for the MAX77960/MAX77961 EV Kit is shown in Figure 2.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to  install  the  EV  kit  software,  make  required  hardware connections, and start operation of the kit. The EV kit software can be run without hardware attached. Note that after communication is established the IC must still be configured correctly for desired operation mode. Make sure the PC is connected to the internet throughout the process so that the USB driver can be automatically installed.

Note: Do not turn on the DC power supply until all connections are made.

- 1) Visit www.maximintegrated.com/products/MAX77960 or www.maximintegrated.com/products/MAX77961 under  the Design  Resources tab  to  download  the latest  version  of  the  MAX77960/MAX77961  EV  kit GUI software. Save the software to a temporary folder and unpack the zip file.
- 2) Install the EV kit software on your computer by running  the  MAX77960\_MAX77961GUISetupX.X.X.exe program  inside  the  temporary  folder.  The  program files are copied, and icons are created in the Windows Start menu. The software requires the .NET Framework 4.5 or later. If you are connected to the Internet, Windows automatically updates the .NET framework as needed.

│

## MAX77960/MAX77961 Evaluation Kit

- 3) The  EV  kit  software  launches  automatically  after installation,  or  alternatively,  it  can  be  launched  by clicking on the icon in the Windows Start menu.
- 4) Make  jumper  connections  based  on  the  Default Position  column  in  Table  1.  Change  it  later  when evaluating more features. If evaluation is with a 3-cell Li-ion battery or equivalent simulated battery, place J8 in 2-3 position so that the MAX77960/MAX77961 are configured for 3-cell.

## Table 1. Jumper Connection Guide

| JUMPER NUMBER   | PCB SILKSCREEN   | DEFAULT POSITION   | FUNCTION                                                                                                                                                                                               |
|-----------------|------------------|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J2              | SCL              | 1-2                | 1-2: Connects SCL with the on-board MAXUSB (USB-to-I 2 C interface) to allow communication with the GUI software. 2-3: Disconnects SCL from the on-board MAXUSB.                                       |
| J3              | SDA              | 1-2                | 1-2: Connects SDAwith the on-board MAXUSB to allow communication with the GUI software. 2-3: Disconnects SDAfrom the on-board MAXUSB.                                                                  |
| J4              | INTB             | 1-2                | 1-2: Connects INTB with the on-board MAXUSB to allow communication with the GUI software. 2-3: Disconnects INTB from the on-board MAXUSB.                                                              |
| J5              | OTG_EN           | 2-3                | 1-2: Connects OTG_EN to PVL. OTG function is enabled. 2-3: Connects OTG_EN to GND. OTG function enable is controlled by MODE[3:0] bitfield.                                                            |
| J6              | DISQBAT          | 2-3                | 1-2: Connects DISQBAT to PVL. Q BAT FET is disabled. 2-3: Connects DISQBAT to GND. Q BAT FET is controlled by the DISIBS bit and power-path state machine/internal logic control.                      |
| J7              | STBY             | 2-3                | 1-2: Connects STBY to PVL. DC-DC is disabled. 2-3: Connects STBY to GND. DC-DC is controlled by STBY_EN bit and power-path state machine/internal logic control.                                       |
| J8              | CNFG             | 1-2                | 1-2: Connects CNFG to PVL. Number of serially connected battery cells is configured as 2S. 2-3: Connects CNFG to R5. Number of serially connected battery cells is configured as 3S.                   |
| J9              | VSET             | 1-2                | 1-2: Connects VSET to PVL. Default charge termination voltage is same as decode of reset value of CHG_CV_PRM[5:0]. 2-3: Connects VSET to R49. Default charge termination voltage is programmed by R49. |

│

## Evaluates: MAX77960/MAX77961

- 5) Use the USB cable provided with the EV kit to connect the EV kit to the PC's USB port.
- 6) Connect a 2- or 3-cell Li-ion battery or simulated battery to the connectors labeled BATTP and BATTN.
- 7) Connect a DC power supply to the connectors labeled DCIN and GND.
- 8) Launch the MAX77960/MAX77961 GUI software.
- 9) Select Device &gt; Connect from the window options to connect to the EV kit.

## MAX77960/MAX77961 Evaluation Kit

## Table 1. Jumper Connection Guide (continued)

| JUMPER NUMBER   | PCB SILKSCREEN   | DEFAULT POSITION   | FUNCTION                                                                                                                                                                                                                                        |
|-----------------|------------------|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J10             | INLIM            | 1-2                | 1-2: Connects INLIM to PVL. Default input current limit is same as decode of reset value of CHGIN_ILIM[6:0]. 2-3: Connects INLIM to R51. Default input current limit is programmed by R51.                                                      |
| J11             | ITO              | 1-2                | 1-2: Connects ITO to PVL. Default top-off charge current is same as decode of reset value of TO_ITH[2:0]. 2-3: Connects ITO to R52. Default top-off charge current is programmed by R52.                                                        |
| J12             | ISET             | 1-2                | 1-2: Connects ISET to PVL. Default fast-charge current is same as decode of reset value CHGCC[5:0]. 2-3: Connects ISET to R53. Default fast-charge current is programmed by R53.                                                                |
| J13             | THM              | 2-3                | 1-2: Connects THM to potentiometer R39. Adjust resistance of R39 to emulate resistance change of a 10kΩ thermistor at different temperature. 2-3: Connects THM to a fixed 10kΩ resistor. This emulates resistance of a 10kΩ thermistor at 25°C. |

## Detailed Description of Software

The MAX77960/MAX77961 GUI software provides an easyto-use interface to control the function blocks of the IC.

## Software Installation

Double-click the MAX77960\_MAX77961GUISetup-X.X.X.exe icon  to  begin  the  installation  process.  Follow the  prompts  to  complete  the  installation.  The  evaluation  software  can  be  uninstalled  in  the Add/Remove Programs tool in the Control Panel . After the installation is  complete,  open  the Maxim  Integrated/MAX77960\_ MAX77961 folder  and  run MAX77960\_MAX77961.exe or  select  it  from  the  program  menu.  Figure  3  shows  a splash screen containing information about the evaluation kit that appears while the program is loading.

## Establish Communication

Power  up  the  MAX77960/MAX77961  by  connecting  a 2- or 3-cell Li-ion battery or simulated battery at BATTP/ BATTN.  Open  the  GUI  software  and  select Device  &gt; Connect . A window should pop up showing that a slave address  0xD2  has  been  found.  If  not,  check  the  USB connection and power. Choose Read and Close and the status bar displays 'Connected'  to signify active communication. An example of a successful connection is shown in Figure 4.

Figure 3. EV Kit Splash Screen

<!-- image -->

Evaluates: MAX77960/MAX77961

│

## MAX77960/MAX77961 Evaluation Kit

## Main Display

Status bits and programmable functions of the charger can be accessed through the interface tabs in the left column of the window (Figure 5).

Figure 4. MAX77960/MAX77961 Communication Window

<!-- image -->

Figure 5. MAX77960/MAX77961 Top-Level Registers

<!-- image -->

Evaluates: MAX77960/MAX77961

## MAX77960/MAX77961 Evaluation Kit

## Register Write Access

Modification of the charger registers are locked by default to prevent arbitrary changes. Therefore, changes made to the charger registers in the locked state are not applied to the EV kit. To unlock register writing, select the 0x3 = Unlocked option  in  the Charger  Settings  Protection dropdown  menu  from  the Charger  Configurations  6 register in the Configuration 4-7 tab, and then click Write (Figure 6). Read the register and the Charger Settings Protection setting should remain in the 0x3 = Unlocked state to signify open register access.

From this point onwards, modifications written to any of the registers apply to the EV kit. For example, the CHGIN Input  Current  Limit can  be  changed  in  the Charger Configurations 8 register by selecting the required value and clicking Write (Figure 7), but only after the registers have been unlocked.

Evaluates: MAX77960/MAX77961

## Detailed Description of Hardware

## Battery Charger Test Setup

- 1) Connect a 2- or 3-cell Li-Ion battery or simulated battery between BATTP and BATTN.
- 2) Adjust  voltage  and  current  limits  of  the  DC  power supply to 5.0V and 3.0A. Output of the power supply is off.
- 3) Connect the power supply between DCIN and GND on the EV kit board.
- 4) Open the EV kit GUI and connect to the EV kit.
- 5) In the Configuration 4-7 tab, set Charger Settings Protection in the Charger Configurations 6 register to 0x3 = Unlocked . Click Write to send the command to the charger.

Figure 6. Charger Register Write Access

<!-- image -->

│

## MAX77960/MAX77961 Evaluation Kit

- 6) Program  the  appropriate  charger  settings  for  your system.  In  the Configuration 8-10 tab,  set CHGIN Input Current Limit in the Charger Configurations 8 register. Press Write to send the command to the charger.  Note  that  the  maximum  setting  of CHGIN Input  Current  Limit for  the  MAX77960  is 0x40  = 3150mA .
- 7) In the Configuration 0-3 tab, set Fast Charge Current in the Charger Configurations 2 register. Press Write to send the command to the charger. Note that the maximum setting of Fast Charge Current for the

Evaluates: MAX77960/MAX77961

MAX77960 is 0x21 = 3000mA .

- 8) In  the Charger  Configuration  0 register of  the Configuration 0-3 tab, set Smart Power Selector to 0x5 = Charger = On, OTG = Off, and DCDC = On and click Write to enable charger mode.
- 9) Turn  on  the  DC  power  supply's  output  to  enable charging.
- 10)  Use data log equipment to log the charge current and battery  voltage  profile  while  charging  a  2-  or  3-cell Li-ion battery.

Figure 7. Change CHGIN Input Current Limit after Unlocking Charger Settings Protection

<!-- image -->

│

## MAX77960/MAX77961 Evaluation Kit

## Component Suppliers

| SUPPLIER                           | PHONE        | WEBSITE                             |
|------------------------------------|--------------|-------------------------------------|
| MURATA                             | 770-436-1300 | www.murata-northamerica.com         |
| SAMTEC                             | 800-726-8329 | www.samtec.com                      |
| SULLINS ELECTRONICS CORP           | 760-774-0125 | www.sullinselectronics.com          |
| TAIYO-YUDEN                        | 603-669-7587 | www.t-yuden.com                     |
| TDK                                | 847-803-6100 | www.tdk.com                         |
| VISHAY                             | 408-970-5852 | www.vishay.com                      |
| COILCRAFT                          | 847-639-6400 | www.coilcraft.com                   |
| PANASONIC                          | 800-344-2112 | https://na.industrial.panasonic.com |
| FUTURE TECHNOLOGY DEVICES INTL LTD | 503-547-0988 | www.ftdichip.com                    |

Note: Indicate that you are using the MAX77960/MAX77961 when contacting these component suppliers.

## Ordering Information

| PART              | TYPE   |
|-------------------|--------|
| MAX77960EVKIT-06# | EV Kit |
| MAX77961EVKIT-06# | EV Kit |

Evaluates: MAX77960/MAX77961

│

## MAX77960/MAX77961 Evaluation Kit

## MAX77960\_06 EV Kit Bill of Materials

| REF_DES                                                                                               |   QTY | MFG PART #        | DESCRIPTION                                                |
|-------------------------------------------------------------------------------------------------------|-------|-------------------|------------------------------------------------------------|
| AVL, BATSP, CHGINS, CSINN, CSINP, DISQBAT, INOKB, INTB, OTG_EN, PVL, SCL, SDA, STAT, STBY, THM, VSYSS |    16 | 5000              | RED MINI TESTPOINTS                                        |
| BATTN, BATTP, DCIN, GND, GND1-GND3, VSYS                                                              |     8 | 9020 BUSS         | WIRE, BUSS 20G PLATED SOLID COPPER                         |
| BATSN, PGND1S, PGNDS                                                                                  |     3 | 5011              | BLACK BIG TESTPOINTS                                       |
| C1, C15, C18-C21, C23-C29, C35                                                                        |    14 | GRM155R71A104JA01 | CAP+, 0.1µF, 10%, 6.3V, X5R, 0402                          |
| C2, C3, C12, C13, C22                                                                                 |     5 | GRM155R61A475MEAA | CAP+, 4.7µF, 20%, 10V, X5R, 0402                           |
| C4                                                                                                    |     1 | GRM32ER7YA106KA12 | CAP+, 10µF, 10%, 35V, X7R, 1210                            |
| C5                                                                                                    |     1 | GRM155C81E105KE11 | CAP+, 1µF, 10%,25V, X6S, 0402                              |
| C6                                                                                                    |     1 | TMK212BBJ106KG-T  | CAP+, 10µF, 10%, 25V, X5R, 0805                            |
| C7, C8                                                                                                |     2 | GRM155R71C224KA12 | CAP+, 0.22µF, 10%,16V, X7R, 0402                           |
| C9, C10                                                                                               |     2 | TMK325ABJ476MM    | CAP+, 47µF, 20%, 25V, X5R,1210                             |
| C11, C14                                                                                              |     2 | GRM1555C1H270JA01 | CAP+, 27pF, 5%, 50V, COG, 0402                             |
| C16, C17, C30-C32                                                                                     |     5 | C0402C105K8PAC    | CAP+, 1µF, 10%, 10V, X5R, 0402                             |
| C34, C36                                                                                              |     2 | GRM155R71H153KA12 | CAP+, 0.015µF, 20%, 50V, X7R, 0402                         |
| C42                                                                                                   |     1 | GRM155R71E473K    | CAP+, 0.047µF, 10%, 25V, X7R, 0402                         |
| D1                                                                                                    |     1 | PMEG4050EP        | DIODE+, SCH, 40V, 5A, SOD-128                              |
| DS2                                                                                                   |     1 | LTST-C190CKT      | LED+, SURFACE MOUNT, RED OSLON 2.2V, 350mA, 3X3MM          |
| DS3                                                                                                   |     1 | LTST-C190KFK      | LED+, SURFACE MOUNT, ORANGE                                |
| J1                                                                                                    |     1 | 10118193-0001LF   | RCPT+, MICRO B USB 2.0,5 POS                               |
| J2-J13                                                                                                |    12 | PEC03SAAN         | HEADER+, 3POS,. 100', SNGL, TIN R/A, TH                    |
| L1                                                                                                    |     1 | PA5007.332NLT     | INDUCTOR+, 3.3µH, 20%, 10A                                 |
| L2-L4                                                                                                 |     3 | BLM18AG601SN1     | FERRITE-BEAD, 600nH, 0.5A, 0603 µH, 20%, 5.8A, 4.1 x 4.1MM |
| Q1                                                                                                    |     1 | DMN3016LFDE       | TRAN, NCH, 10A, 30V                                        |
| R1, R7, R14-R16, R18, R22, R24, R26, R32, R43, R44, R46, R47                                          |    14 | ERJ-2GE0R00       | RES+, 0 Ω , 0%, 0402                                       |

│

Evaluates: MAX77960/MAX77961

## MAX77960/MAX77961 Evaluation Kit

## MAX77960\_06 EV Kit Bill of Materials (continued)

| REF_DES                 |   QTY | MFG PART #         | DESCRIPTION                   |
|-------------------------|-------|--------------------|-------------------------------|
| R2                      |     1 | CRA2512-FZ-R010ELF | RES+, 0.01Ω, 1%, 3W, 2512     |
| R4, R36                 |     2 | CRCW0402200KFK     | RES+, 200KΩ, 1%, 0402         |
| R5                      |     1 | CRCW04028K66FK     | RES+, 8.66KΩ, 1%, 0402        |
| R6                      |     1 | CRCW04024R70FK     | RES+, 4.7Ω, 1%, 0402          |
| R8                      |     1 | CRCW040212K0FK     | RES+, 12KΩ, 1%, 0402          |
| R9, R13                 |     2 | CRCW040227R0FK     | RES+, 27Ω, 1%, 0402           |
| R10                     |     1 | CRCW04021M00FK     | RES+, 1MΩ, 1%, 0402           |
| R11, R23                |     2 | CRCW04021K00FK     | RES+, 1KΩ, 1%, 0402           |
| R12, R54                |     2 | CRCW040210K0FK     | RES+, 10KΩ, 1%, 0402          |
| R17                     |     1 | CRCW04024752FK     | RES+, 47.5KΩ, 1%, 0402        |
| R19, R31, R41, R45      |     4 | CRCW0402100KFK     | RES+, 100KΩ, 1%, 0402         |
| R20, R21                |     2 | CRCW04024752FK     | RES+, 10Ω, 1%, 0402           |
| R27, R28                |     2 | CRCW04024K70FK     | RES+, 4.7KΩ, 1%, 0402         |
| R29                     |     1 | ERJ-2GEJ474        | RES+, 470KΩ, 5%, 0402         |
| R30                     |     1 | CRCW0402169KFK     | RES+, 169KΩ, 1%, 0402         |
| R35                     |     1 | CRCW0402470RFK     | RES+, 470Ω, 1%, 0402          |
| R37                     |     1 | ERJ-2RKF2203       | RES+, 220KΩ, 1%, 0402         |
| R38, R42                |     2 | CRCW04022K20FK     | RES+, 2.2KΩ, 1%, 0402         |
| R39                     |     1 | 3296Y-1-503LF      | RES+, POT, 50KΩ               |
| R48                     |     1 | ERJ-2GEJ132        | RES+, 1.3KΩ, 5%, 0402         |
| U1                      |     1 | MAX77960           | MAX77960EFV06+                |
| U2                      |     1 | FT2232HL           | FT2232HL                      |
| U4                      |     1 | MAX14611           | MAX14611ETD+                  |
| U5, U6                  |     2 | MAX8512            | MAX8512EXK+                   |
| Y1                      |     1 | 7M-12.000MAAJ      | CRYSTAL+, SMT,12MHz, +/-30PPM |
| C33, C37, C38, C40, C41 |     5 | OPEN               | N/A                           |
| R25                     |     1 | OPEN               | RES+, 0Ω, 0%, 0805            |
| R3, R40, R49, R51-R53   |     6 | OPEN               | N/A                           |

│

Evaluates: MAX77960/MAX77961

## MAX77960/MAX77961 Evaluation Kit

## MAX77961\_06 EV Kit Bill of Materials

| REF_DES                                                                                               |   QTY | MFG PART #         | DESCRIPTION                                                |
|-------------------------------------------------------------------------------------------------------|-------|--------------------|------------------------------------------------------------|
| AVL, BATSP, CHGINS, CSINN, CSINP, DISQBAT, INOKB, INTB, OTG_EN, PVL, SCL, SDA, STAT, STBY, THM, VSYSS |    16 | 5000               | RED MINI TESTPOINTS                                        |
| BATTN, BATTP, DCIN, GND, GND1-GND3, VSYS                                                              |     8 | 9020 BUSS          | WIRE, BUSS 20G PLATED SOLID COPPER                         |
| BATSN, PGND1S, PGNDS                                                                                  |     3 | 5011               | BLACK BIG TESTPOINTS                                       |
| C1, C15, C18-C21, C23-C29, C35                                                                        |    14 | GRM155R71A104JA01  | CAP+, 0.1µF, 10%, 6.3V, X5R, 0402                          |
| C2, C3, C12, C13, C22                                                                                 |     5 | GRM155R61A475MEAA  | CAP+, 4.7µF, 20%, 10V, X5R, 0402                           |
| C4                                                                                                    |     1 | GRM32ER7YA106KA12  | CAP+, 10µF, 10%, 35V, X7R, 1210                            |
| C5                                                                                                    |     1 | GRM155C81E105KE11  | CAP+, 1µF, 10%, 25V, X6S, 0402                             |
| C6                                                                                                    |     1 | TMK212BBJ106KG-T   | CAP+, 10µF, 10%, 25V, X5R, 0805                            |
| C7, C8                                                                                                |     2 | GRM155R71C224KA12  | CAP+, 0.22µF, 10%, 16V, X7R, 0402                          |
| C9, C10                                                                                               |     2 | TMK325ABJ476MM     | CAP+, 47µF, 20%, 25V, X5R,1210                             |
| C11, C14                                                                                              |     2 | GRM1555C1H270JA01  | CAP+, 27pF, 5%, 50V, COG, 0402                             |
| C16, C17, C30-C32                                                                                     |     5 | C0402C105K8PAC     | CAP+, 1µF, 10%, 10V, X5R, 0402                             |
| C34, C36                                                                                              |     2 | GRM155R71H153KA12  | CAP+, 0.015µF, 20%, 50V, X7R, 0402                         |
| C42                                                                                                   |     1 | GRM155R71E473K     | CAP+, 0.047µF, 10%, 25V, X7R, 0402                         |
| D1                                                                                                    |     1 | PMEG4050EP         | DIODE+, SCH,40V,5A, SOD-128                                |
| DS2                                                                                                   |     1 | LTST-C190CKT       | LED+, SURFACE MOUNT, RED OSLON 2.2V, 350mA, 3X3MM          |
| DS3                                                                                                   |     1 | LTST-C190KFK       | LED+, SURFACE MOUNT, ORANGE                                |
| J1                                                                                                    |     1 | 10118193-0001LF    | RCPT+, MICRO B USB 2.0, 5 POS                              |
| J2-J13                                                                                                |    12 | PEC03SAAN          | HEADER+, 3 POS,. 100', SNGL, TIN R/A, TH                   |
| L1                                                                                                    |     1 | PA5007.332NLT      | INDUCTOR+, 3.3µH, 20%, 10A                                 |
| L2-L4                                                                                                 |     3 | BLM18AG601SN1      | FERRITE-BEAD, 600nH, 0.5A, 0603 µH, 20%, 5.8A, 4.1 x 4.1MM |
| Q1                                                                                                    |     1 | DMN3016LFDE        | TRAN, NCH,10A, 30V                                         |
| R1, R7, R14-R16, R18, R22, R24, R26, R32, R43, R44, R46, R47                                          |    14 | ERJ-2GE0R00        | RES+, 0 Ω ,0%,0402                                         |
| R2                                                                                                    |     1 | CRA2512-FZ-R010ELF | RES+, 0.01Ω, 1%, 3W, 2512                                  |
| R4, R36                                                                                               |     2 | CRCW0402200KFK     | RES+, 200KΩ, 1%, 0402                                      |
| R5                                                                                                    |     1 | CRCW04028K66FK     | RES+, 8.66KΩ, 1%, 0402                                     |
| R6                                                                                                    |     1 | CRCW04024R70FK     | RES+, 4.7Ω, 1%, 0402                                       |
| R8                                                                                                    |     1 | CRCW040212K0FK     | RES+, 12KΩ, 1%, 0402                                       |

│

Evaluates: MAX77960/MAX77961

## MAX77960/MAX77961 Evaluation Kit

## MAX77961\_06 EV Kit Bill of Materials (continued)

| REF_DES                 |   QTY | MFG PART #     | DESCRIPTION                 |
|-------------------------|-------|----------------|-----------------------------|
| R9, R13                 |     2 | CRCW040227R0FK | RES+, 27Ω, 1%, 0402         |
| R10                     |     1 | CRCW04021M00FK | RES+, 1MΩ, 1%, 0402         |
| R11, R23                |     2 | CRCW04021K00FK | RES+, 1KΩ, 1%, 0402         |
| R12, R54                |     2 | CRCW040210K0FK | RES+, 10KΩ, 1%, 0402        |
| R17                     |     1 | CRCW04024752FK | RES+, 47.5KΩ, 1%, 0402      |
| R19, R31, R41, R45      |     4 | CRCW0402100KFK | RES+, 100KΩ, 1%, 0402       |
| R20, R21                |     2 | CRCW04024752FK | RES+, 10Ω, 1%, 0402         |
| R27, R28                |     2 | CRCW04024K70FK | RES+, 4.7KΩ, 1%, 0402       |
| R29                     |     1 | ERJ-2GEJ474    | RES+, 470KΩ, 5%, 0402       |
| R30                     |     1 | CRCW0402169KFK | RES+, 169KΩ, 1%, 0402       |
| R35                     |     1 | CRCW0402470RFK | RES+, 470Ω, 1%, 0402        |
| R37                     |     1 | ERJ-2RKF2203   | RES+, 220KΩ, 1%, 0402       |
| R38, R42                |     2 | CRCW04022K20FK | RES+, 2.2KΩ, 1%, 0402       |
| R39                     |     1 | 3296Y-1-503LF  | RES+, POT, 50KΩ             |
| R48                     |     1 | ERJ-2GEJ132    | RES+, 1.3KΩ, 5%, 0402       |
| U1                      |     1 | MAX77961       | MAX77961EFV06+              |
| U2                      |     1 | FT2232HL       | FT2232HL                    |
| U4                      |     1 | MAX14611       | MAX14611ETD+                |
| U5, U6                  |     2 | MAX8512        | MAX8512EXK+                 |
| Y1                      |     1 | 7M-12.000MAAJ  | CRYSTAL+, SMT,12MHz, ±30PPM |
| C33, C37, C38, C40, C41 |     5 | OPEN           | N/A                         |
| R25                     |     1 | OPEN           | RES+, 0Ω, 0%, 0805          |
| R3, R40, R49, R51-R53   |     6 | OPEN           | N/A                         |

│

Evaluates: MAX77960/MAX77961

## MAX77960/MAX77961 EV Kit Schematic Diagram

<!-- image -->

## MAX77960/MAX77961 EV Kit Schematic Diagram (continued)

<!-- image -->

│

Evaluates: MAX77960/MAX77961

## MAX77960/MAX77961 EV Kit PCB Layout Diagrams

<!-- image -->

MAX77960/MAX77961 EV Kit PCB Layout - Silkscreen Top

<!-- image -->

MAX77960/MAX77961 EV Kit PCB Layout - Top Layer

MAX77960/MAX77961 EV Kit PCB Layout - Inner Layer 2

<!-- image -->

MAX77960/MAX77961 EV Kit PCB Layout - Inner Layer 3

<!-- image -->

│

Evaluates: MAX77960/MAX77961

## MAX77960/MAX77961 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX77960/MAX77961 EV Kit PCB Layout - Inner Layer 4

<!-- image -->

MAX77960/MAX77961 EV Kit PCB Layout - Inner Layer 5

MAX77960/MAX77961 EV Kit PCB Layout - Bottom Layer

<!-- image -->

MAX77960/MAX77961 EV Kit PCB Layout - Silkscreen Bottom

<!-- image -->

│

## MAX77960/MAX77961

## Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim ,ntegrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX77960/MAX77961