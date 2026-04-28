<!-- lastmod 2023-06-23 -->
<!-- image -->

## General Description

The MAX77963 evaluation kit (EV kit) is a fully assembled and tested surface-mount printed circuit board (PCB) that evaluates  the  MAX77963,  a  3.2A  USB  Type-C ®   buckboost charger.

The MAX77963 EV kit includes the IC evaluation board with an integrated I 2 C-communication interface and USB micro-B cable. Windows ®  based graphical-user interface (GUI) software is available for use with the EV kit and can be downloaded from Analog Devices website at www.analog.com/max77963evkit .  Windows 7 or newer Windows operating system is required to use the EV kit software.

Ordering Information appears at end of data sheet.

## EV Kit Photo

<!-- image -->

USB Type-C is a registered trademark of USB Implementers Forum.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

## Features

- Evaluates the MAX77963 USB Type-C Buck-Boost Charger with Integrated FETs for 2S/3S Li-Ion Batteries
- Demonstrates 3.5V to 23V Input Operating Range
- Demonstrates Charging Up to 3.2A
- Demonstrates USB-OTG Functionality
- Demonstrates JEITA Compliance with On-Board Dummy Thermistors
- Demonstrates 8-Channel 12-Bit SAR ADC
- Demonstrates Spread Spectrum
- Fully Assembled and Tested
- I 2 C Serial Interface

## MAX77963 Evaluation Kit

319-100987; Rev 0; 3/23

## Evaluates: MAX77963

## MAX77963 EV Kit Files

| FILE                       | DESCRIPTION                         |
|----------------------------|-------------------------------------|
| MAX77963GUISetu pX.X.X.exe | Installs EV kit files onto computer |

## MAX77963 EV Kit Component List

| PART                        |   QTY | DESCRIPTION             |
|-----------------------------|-------|-------------------------|
| MAX77963EVKIT               |     1 | MAX77963 evaluation kit |
| USB high-speed A-to-B cable |     1 | USB Micro-B cable       |

## Quick Start

Follow this procedure to familiarize yourself with the EV kit. Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Required Equipment

- MAX77963 EV kit
- Adjustable DC power supply
- Battery or simulated battery
- o 2- or 3-cell Li-ion protected battery
- o Simulated battery or preloaded power supply
- Oscilloscope
- Two voltmeters
- Two ammeters
- Lab cables with appropriate current rating
- USB Micro-B cable
- PC with  Windows  7  or  newer  operating  system  and USB port

## Setup Overview

A typical bench setup for the MAX77963 EV kit is shown in Figure 1 .

<!-- image -->

## Procedure

The EV kit is fully assembled and tested. Follow the steps to install the EV kit software, make the required hardware connections, and start the operation of the kit. The EV kit software can be run without the hardware attached. Note that after communication is established, the IC must still be configured  correctly  for  desired  operation  mode.  Make sure the PC is connected to the internet throughout the process  so  that  the  USB  driver  can  be  automatically installed.

Note: Do  not  turn  on  the  DC  power  supply  until  all connections are made.

- 1) Visit https://www.analog.com/max77963evkit to download the latest version of the MAX77963 EV kit software. Save the software to a temporary folder and unpack the zip file.
- 2) Install the EV kit software on the computer by running the MAX77963GUISetupX.X.X.exe program  inside the temporary folder. This copies the program files and creates  an  icon  in  the  Windows Start menu.  The software requires the .NET Framework 4.5 or later. If connected  to  the  internet,  Windows  automatically updates the .NET Framework as needed.
- 3) The  EV  kit  software  launches  automatically  after installation, and it can be launched by clicking on its icon in the Windows Start menu.
- 4) Make  jumper  connections  based  on  the  Default Connection column in Table 1 . Change it later when evaluating more features.
- 5) Use the USB cable provided with the EV kit to connect the EV kit to the PC's USB port.
- 6) Connect  a  2-  or  3-cell  Li-ion  battery  or  simulated battery to the connectors labeled BATTP and BATTN.
- 7) Connect a DC power supply to the connectors labeled CHGIN and GND.
- 8) Launch the MAX77963 GUI software.
- 9) Select Device &gt; Connect from the window options to connect to the EV kit.

## MAX77963 Evaluation Kit

## Evaluates: MAX77963

## MAX77963 Evaluation Kit

Figure 1. MAX77963 EV Kit Board Connections

<!-- image -->

## Table 1. Jumper Connection Guide

| JUMPER   | PCB SILKSCREEN   | DEFAULT CONNECTION   | FEATURE                                                                                                                                                                                                |
|----------|------------------|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J2       | SCL              | 1-2                  | 1-2: Connects SCL with the onboard MAXUSB (USB-to-I 2 C interface) to allow communication with the GUI software. 2-3: Disconnects SCL from the onboard MAXUSB.                                         |
| J3       | SDA              | 1-2                  | 1-2: Connects SDA with the onboard MAXUSB to allow communication with the GUI software. 2-3: Disconnects SDA from the onboard MAXUSB.                                                                  |
| J4       | INTB1            | 1-2                  | 1-2: Connects INTB1 with the onboard MAXUSB to allow communication with the GUI software. 2-3: Disconnects INTB1 from the onboard MAXUSB.                                                              |
| J5       | INTB2            | 1-2                  | 1-2: Connects INTB2 with the onboard MAXUSB to allow communication with the GUI software. 2-3: Disconnects INTB2 from the onboard MAXUSB.                                                              |
| J6       | DISQBAT          | 2-3                  | 1-2: Connects DISQBAT to PVL. QBAT FET is disabled. 2-3: Connects DISQBAT to GND. QBAT FET is controlled by the DISIBS bit and power-path state machine/internal logic control.                        |
| J7       | STBY             | 2-3                  | 1-2: Connects STBY to PVL. DC-DC is disabled. 2-3: Connects STBY to GND. DC-DC is controlled by STBY_EN bit and power-path state machine/internal logic control.                                       |
| J8       | OTGEN            | 2-3                  | 1-2: Connects OTGEN to PVL. OTG function is enabled. 2-3: Connects OTGEN to GND. OTG function enable is controlled by MODE[3:0] bitfield.                                                              |
| J9       | VSET             | 1-2                  | 1-2: Connects VSET to PVL. Default charge termination voltage is same as decode of reset value of CHG_CV_PRM[7:0]. 2-3: Connects VSET to R25. Default charge termination voltage is programmed by R25. |

## Evaluates: MAX77963

## MAX77963 Evaluation Kit

| J10   | INLIM   | 1-2   | 1-2: Connects INLIM to PVL. Default input current limit is same as decode of reset value of CHGIN_ILIM[6:0]. 2-3: Connects INLIM to R29. Default input current limit is programmed by R29.                                                                                                                                                                                                                                            |
|-------|---------|-------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J11   | ITO     | 1-2   | 1-2: Connects ITO to PVL. Default top-off charge current is same as decode of reset value of TO_ITH[2:0]. 2-3: Connects ITO to R33. Default top-off charge current is programmed by R33.                                                                                                                                                                                                                                              |
| J12   | ISET    | 1-2   | 1-2: Connects ISET to PVL. Default fast-charge current is same as decode of reset value of CHGCC_MSB and CHGCC[7:0]. 2-3: Connects ISET to R34. Default fast-charge current is programmed by R34.                                                                                                                                                                                                                                     |
| J13   | THM     | 2-3   | 1-2: Connects THM to potentiometer R39. Adjust the resistance of R39 to emulate the resistance change of a 10k Ω thermistor at different temperatures. 2-3: Connects THM to a fixed 10k Ω resistor. This emulates the resistance of a 10k Ω thermistor at 25°C.                                                                                                                                                                       |
| J14   | ANA_IN  | 1-2   | 1-2: Connects ADCIN to an external input EXT_IN through a resistor divider. Voltage dividing ratio is (R20 + R21) / R21 = 20.1. Voltage of EXT_IN should be no higher than 25V to avoid saturating voltage sensing at ADCIN. 2-3: Connects ADCIN to CHGIN through a resistor divider. Voltage dividing ratio is (R20 + R21) / R21 = 20.1. Voltage of CHGIN should be no higher than 25V to avoid saturating voltage sensing at ADCIN. |
| J15   | CNFG    | 1-2   | 1-2: Connects CNFG to PVL. Number of serially connected battery cells is configured as 2S. Switching frequency is configured as 600kHz. Inductance is selected as 2.2 μ H or 3.3 μ H. 2-3: Connects CNFG to R23. Number of serially connected battery cells, switching frequency, and inductance selection are programmed by R23.                                                                                                     |

Default options are in bold .

## Evaluates: MAX77963

## Detailed Description of Software

The MAX77963 GUI software provides an easy-to-use interface to control the functional blocks of the IC.

## Software Installation

Double-click the MAX77963GUISetupX.X.X.exe icon to begin the installation process. Follow the prompts to complete the installation. The evaluation software can be uninstalled in the Add/Remove Programs tool in the Control Panel . After the installation is complete, open the Maxim Integrated/MAX77963 folder and run MAX77963.exe or select it from the program menu. Figure 2 shows a splash screen containing information about the evaluation kit that appears while the program is loading.

Figure 2. Splash Screen

<!-- image -->

## Establish Communication

Power up the MAX77963 by connecting a 2- or 3-cell Li-ion battery or simulated battery at BATTP/BATTN. Open the GUI software and select Device &gt; Connect . A window should pop up showing that a slave address 0x69 (7-bit address) has been  found.  If  not,  check  the  USB  connection  and  power.  Choose Read  and  Close and  the  status  bar  displays 'Connected' to signify active communication. An example o f a successful connection is shown in Figure 3 .

## Evaluates: MAX77963

## MAX77963 Evaluation Kit

Figure 3. Communication Window

<!-- image -->

## Main Display

Status bits and programmable functions of the charger can be accessed through the interface tabs in the left column of the window ( Figure 4 ).

Figure 4. Top-Level Registers

<!-- image -->

www.analog.com

## Evaluates: MAX77963

## Register Write Access

Modification of the charger registers is locked by default to prevent arbitrary changes. Therefore, changes made to the charger registers in the locked state are not applied to the EV kit. To unlock register writing, select the 0x3 = Unlocked option  in  the Charger  Settings  Protection dropdown  menu  from  the Charger  Configurations  6 register  in  the Configuration 4-7 tab, and then click Write ( Figure 5 ). Read the register and the Charger Settings Protection setting should remain in the 0x3 = Unlocked state to signify open register access.

From this point onwards, modifications written to any of the registers apply to the EV kit. For example, the CHGIN Input Current Limit can be changed in the Charger Configurations 8 register by selecting the required value and clicking Write ( Figure 6 ), but only after the registers have been unlocked.

Figure 5. Charger Register Write Access

<!-- image -->

## MAX77963 Evaluation Kit

## Evaluates: MAX77963

## MAX77963 Evaluation Kit

Figure 6. Change CHGIN Input Current Limit after Unlocking Charger Settings Protection

<!-- image -->

## Detailed Description of Hardware

## Battery Charger Test Setup

- 1) Connect a 2- or 3-cell Li-Ion battery or simulated battery between BATTP and BATTN.
- 2) Adjust the voltage and current limits of the DC power supply to 5.0V and 3.0A. The output of the power supply is off.
- 3) Connect the power supply between CHGIN and GND on the EV kit board.
- 4) Open the EV kit GUI and connect to the EV kit.
- 5) In the Configuration 4-7 tab, set Charger Settings Protection in the Charger Configurations 6 register to 0x3 = Unlocked . Click Write to send the command to the charger.
- 6) Program the appropriate charger settings for your system. In the Configuration 8-11 tab, set CHGIN Input Current Limit in the Charger Configurations 8 register. Click Write to send the command to the charger.
- 7) The 9-bit Fast Charge Current bitfield resides in two registers ( CHGCC\_MSB of the CHG\_CNFG\_08 register and CHGCC[7:0] of the CHG\_CNFG\_02 register). To guarantee an atomic operation, a write-enable bit CHGCC\_WR\_EN is provided in the CHG\_CNFG\_06 register. Writing 1 to this bit makes the value of the Fast Charge Current take effect. For changing the fast-charge current, perform the following steps ( Figure 7 ):
- a. The EV kit GUI has been optimized by concatenating CHGCC\_MSB and CHGCC[7:0] in the same setting. In the Configuration 0-3 tab, set Fast Charge Current in the Charger Configurations 2 register. Click Write to send the command to the charger.
- b. To apply the fast-charge current, enable Fast Charge Current Write Command in the Charger Configurations 6 register under the Configuration 4-7 tab. Toggle the button to Enabled and click Write .
- 8) In the Charger Configuration 0 register of the Configuration 0-3 tab, set Smart Power Selector to 0x5 = Charger = On , OTG = Off, and DCDC = On , and click Write to enable charger mode.
- 9) Turn on the DC power supply's output to enable charging.
- 10)  Use data log equipment to log the charge current and battery voltage profile while charging a 2- or 3-cell Li-ion battery.

Figure 7. Write Fast-Charge Current

<!-- image -->

## ADC Test Setup

- 1) Follow the steps above to connect equipment and the GUI to the EV kit. Configure the IC by using the Charger configuration tabs.
- 2) In  the Configurations tab,  select  channel(s)  of  ADC  for  sampling  and  conversion  in  the ADC Configuration 0 register. Click Write to send the command to the charger.
- 3) Set single measurement or continuous measurement and other ADC configurations in the ADC Configuration 1 register. Click Write to send the command to the charger ( Figure 8 ).
- 4) In the ADC Data tab, click Read Once or Start Auto Read . Readback data of ADC channel(s) enabled is presented ( Figure 9 ).

Figure 8. ADC Configurations

<!-- image -->

## Evaluates: MAX77963

## MAX77963 Evaluation Kit

Figure 9. ADC Readback Data

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX77963EVKIT# | EV Kit |

#Denotes RoHS-compliant.

Evaluates: MAX77963

## MAX77963 EV Kit Bill of Materials

| REF_DES                                                                                                                                           |   QTY | MFG PART #           | DESCRIPTION                                           |
|---------------------------------------------------------------------------------------------------------------------------------------------------|-------|----------------------|-------------------------------------------------------|
| ADCIN, ANA_IN, AVL, BATSP, BST1, BST2, BYPS, CHGINS, DISQBAT, EXT_IN, INOKB, INTB1, INTB2, LX1, LX2, OTGEN, PVL, SCL, SDA, STAT, STBY, THM, VSYSS |    23 | 5000                 | RED TEST POINT                                        |
| BATSN, PGND1S, PGND2S, PGNDS                                                                                                                      |     4 | 5011                 | BLACK TEST POINT                                      |
| BATTN, BATTP, BYP, CHGIN, GND, GND1-GND5, VSYS                                                                                                    |    11 | 9020 BUSS            | WIRE, BUSS 20G PLATED SOLID COPPER                    |
| C1, C15, C18-C21, C23-C29                                                                                                                         |    13 | GRM155R71A104JA01    | CAP+, 0.1μF,10%, 6.3V, X5R, 0402                      |
| C2, C3, C12, C13, C22                                                                                                                             |     5 | GRM155R61A475MEAA    | CAP+, 4.7μF, 20%, 10V, X5R, 0402                      |
| C4                                                                                                                                                |     1 | GRM188R6YA225KA12    | CAP+, 2.2μF, 10%, 35V, X5R, 0603                      |
| C5                                                                                                                                                |     1 | GRM155C81E105KE11    | CAP+, 1μF, 10%, 25V, X6S, 0402                        |
| C6                                                                                                                                                |     1 | GRM21BR61E106K       | CAP+, 10μF, 10%, 25V, X5R, 0805                       |
| C7, C8                                                                                                                                            |     2 | GRM155R71C224KA12    | CAP+, 0.22μF, 10%, 16V, X7R, 0402                     |
| C9, C10                                                                                                                                           |     2 | TMK325ABJ476MM       | CAP+, 47μF, 20%, 25V, X5R, 1210                       |
| C11, C14                                                                                                                                          |     2 | GRM1555C1H270JA01    | CAP+, 27pF, 5%, 50V, C0G, 0402                        |
| C16, C17, C30-C32                                                                                                                                 |     5 | C0402C105K8PAC       | CAP+, 1μF, 10%, 10V, X5R, 0402                        |
| C36, C37                                                                                                                                          |     2 | CGA5L1X7R1V106K160AC | CAP+, 10μF, 10%, 35V, X7R, 1206                       |
| DS1                                                                                                                                               |     1 | LTST-C190CKT         | LED+, SURFACE MOUNT, RED                              |
| DS2                                                                                                                                               |     1 | LTST-C191TBKT        | LED+, SURFACE MOUNT, BLUE                             |
| DS3                                                                                                                                               |     1 | LTST-C190KFK         | LED+, SURFACE MOUNT, ORANGE                           |
| J1                                                                                                                                                |     1 | 10118193-0001LF      | RCPT+, MICRO B USB 2.0, 5 POS                         |
| J2-J15                                                                                                                                            |    14 | TSW-103-07-T-S       | HEADER+, 3POS, .100', SNGL                            |
| L1                                                                                                                                                |     1 | XAL4030-332ME        | INDUCTOR+, 3.3μH, 20%, 5.0A                           |
| L2-L4                                                                                                                                             |     3 | BLM18AG601SN1        | FERRITE BEAD, 600nH, 0.5A, 0603, 20%, 5.8A, 4.1x4.1MM |
| R1, R7, R14-R16, R18, R22, R24, R26, R32, R43, R44, R46, R47, R57                                                                                 |    15 | ERJ-2GE0R00          | RES+, 0Ω, 0%, 0402                                    |
| R2, R19, R31, R41, R45, R58                                                                                                                       |     6 | CRCW0402100KFK       | RES+, 100KΩ, 1%, 0402                                 |
| R4, R5                                                                                                                                            |     2 | CRCW0402200KFK       | RES+, 200KΩ, 1%, 0402                                 |
| R6                                                                                                                                                |     1 | CRCW04024R70FK       | RES+, 4.7Ω, 1%, 0402                                  |
| R8                                                                                                                                                |     1 | CRCW040212K0FK       | RES+, 12KΩ, 1%, 0402                                  |
| R9, R13                                                                                                                                           |     2 | CRCW040227R0FK       | RES+, 27Ω, 1%, 0402                                   |
| R10                                                                                                                                               |     1 | CRCW04021M00FK       | RES+, 1MΩ, 1%, 0402                                   |
| R11                                                                                                                                               |     1 | CRCW04021K00FK       | RES+, 1KΩ, 1%, 0402                                   |

## MAX77963 Evaluation Kit

## Evaluates: MAX77963

## MAX77963 Evaluation Kit

| R12, R54                |   2 | CRCW040210K0FK   | RES+, 10KΩ, 1%, 0402   |
|-------------------------|-----|------------------|------------------------|
| R17                     |   1 | CRCW04024752FK   | RES+, 47.5KΩ, 1%, 0402 |
| R20                     |   1 | CRCW0603953KFK   | RES+, 953KΩ, 1%, 0603  |
| R21                     |   1 | ERJ-2RKF4992     | RES+, 49.9KΩ, 1%, 0402 |
| R23, R25, R29, R33, R34 |   5 | 3296W-1-254LF    | RES+, POT, 250KΩ       |
| R27, R28                |   2 | CRCW04024K70FK   | RES+, 4.7KΩ, 1%, 0402  |
| R30                     |   1 | CRCW0402169KFK   | RES+, 169KΩ, 1%, 0402  |
| R35                     |   1 | CRCW0402470RFK   | RES+, 470Ω, 1%, 0402   |
| R36                     |   1 | RC0402JR-070RL   | RES+, 0Ω, 5%, 0402     |
| R38, R42                |   2 | RC0402FR-072K2L  | RES+, 2.2KΩ, 1%, 0402  |
| R39                     |   1 | 3296Y-1-503LF    | RES+, POT, 50KΩ        |
| R48, R59                |   2 | ERJ-2GEJ132      | RES+, 1.3KΩ, 5%, 0402  |
| U1                      |   1 | MAX77963EWJ+     | MAX77963EWJ+           |
| U2                      |   1 | FT2232HL         | FT2232HL               |
| U4                      |   1 | MAX14611ETD+     | MAX14611ETD+           |
| U5, U6                  |   2 | MAX8512EXK+      | MAX8512EXK+            |
| Y1                      |   1 | 7M-12.000MAAJ    | 7M-12.000MAAJ          |
| D1, D2                  |   2 | OPEN             | N/A                    |
| C33-C35, C40, C41       |   5 | OPEN             | N/A                    |
| R3, R40, R49, R51-R53   |   6 | OPEN             | N/A                    |

## Evaluates: MAX77963

## MAX77963 EV Kit Schematic

<!-- image -->

## MAX77963 Evaluation Kit

Evaluates: MAX77963

## MAX77963 EV Kit Schematic (continued)

<!-- image -->

## Evaluates: MAX77963

## MAX77963 EV Kit PCB Layout

MAX77963 EV Kit Component Placement Guide -Top Silkscreen

<!-- image -->

MAX77963 EV Kit PCB Layout -Top Layer

<!-- image -->

## MAX77963 Evaluation Kit

MAX77963 EV Kit PCB Layout -Layer 2

<!-- image -->

MAX77963 EV Kit PCB Layout -Layer 3

<!-- image -->

## Evaluates: MAX77963

## MAX77963 EV Kit PCB Layout (continued)

<!-- image -->

MAX77963 EV Kit PCB Layout -Layer 4

<!-- image -->

MAX77963 EV Kit PCB Layout -Layer 5

MAX77963 EV Kit PCB Layout -Bottom Layer

<!-- image -->

MAX77963 EV Kit Component Placement Guide -Bottom Silkscreen

<!-- image -->

## Evaluates: MAX77963

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/23            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## MAX77963 Evaluation Kit