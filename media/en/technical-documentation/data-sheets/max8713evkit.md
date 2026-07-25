<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX8713 Evaluation Kit/Evaluation System

## General Description

The MAX8713 evaluation kit (EV kit) is an efficient, multichemistry battery charger. It uses the Intel system management bus (SMBus™) to control the battery regulation voltage and charger current output.

The MAX8713 EV kit can charge one, two, three, or four series Li+ cells with a current up to 2A.

The MAX8713 evaluation system (EV system) consists of  a  MAX8713 EV kit and the Maxim SMBUSMON2 board. The MAX8713 EV kit includes Windows ® 95-/98/2000-/XP-compatible software to provide a userfriendly interface.

| DESIGNATION   |   QTY | DESCRIPTION                                                                             |
|---------------|-------|-----------------------------------------------------------------------------------------|
| C1            |     1 | 0.1µF ±10%, 50V X7R (1206) ceramic capacitor Murata GRM319R71H104K TDK C3216X7R1H104K   |
| C2, C6, C8    |     3 | 1µF ±10%, 10V X5R (0603) ceramic capacitors Murata GRM188R61A105K TDK C1608X5R1A105K    |
| C3, C4, C10   |     3 | 0.01µF ±10%, 50V X7R (0603) ceramic capacitors Murata GRM188R71H103K TDK C1608X7R1H103K |
| C5, C11       |     2 | 22µF ±20%, 25V X5R (1812) ceramic capacitors TDK C4532X5R1E226M                         |

SMBus is a trademark of Intel Corp.

Windows is a registered trademark of Microsoft Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Features

- ♦ 0.6% Battery Voltage Accuracy
- ♦ 5% Battery Charge-Current Accuracy
- ♦ Up to 2A Battery Charge Current
- ♦ +8V to +25V Input Voltage Range
- ♦ Charge Li+, NiCd, and NiMH Battery Chemistries
- ♦ Cycle-by-Cycle Current Limiting
- ♦ SMBus-Compatible 2-Wire Serial Interface
- ♦ Includes Windows 95-/98-/2000-/XP-Compatible Software and Demo PC Board
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE             | IC PACKAGE   | SMBus INTERFACE TYPE   |
|--------------|------------------------|--------------|------------------------|
| 0°C to +70°C | 24 Thin QFN, 4mm x 4mm | Not included | MAX8713EVKIT           |
| 0°C to +70°C | 24 Thin QFN, 4mm x 4mm | SMBUSMON2    | MAX8713EVSYS           |

Note: The MAX8713 EV kit software is provided with the MAX8713EVKIT. However, to use the software, the SMBUSMON2 board is required to interface the EV kit to the computer.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                     |
|---------------|-------|-------------------------------------------------------------------------------------------------|
| C7, C9        |     2 | 0.1µF ±10%, 25V X7R (0603) ceramic capacitors Murata GRM188R71E104K TDK C1608X7R1E104K          |
| C12, C13, C14 |     0 | Not installed, 0603                                                                             |
| D1            |     1 | Schottky diode, 3A, 40V SMA Central Semiconductor CMSH3-40MA Diodes Inc. B340A                  |
| D2, D3        |     2 | Diodes, 1N4148-type, SOD-123 Diodes Inc. 1N4148W Fairchild Semiconductor MMSD4148               |
| J1            |     1 | 2 x 10 right-angle female receptacle                                                            |
| J2            |     1 | Smart-battery header assembly, right angle, keyless, 5 position TYCO Electronics (AMP) 787441-1 |

Maxim Integrated Products

1

## MAX8713 Evaluation Kit/Evaluation System

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                                    |
|---------------|-------|------------------------------------------------------------------------------------------------|
| L1            |     1 | 22µH, 2.6A, 75m Ω inductor Sumida CDRH8D43-220NC                                               |
| N1A, N1B      |     2 | MOSFETs, dual n-channel, 7.5A, 30V, 8-pin SO Fairchild Semiconductor FDS6990A                  |
| R1            |     1 | 10k Ω ±5% (0603) resistor                                                                      |
| R2            |     1 | 33 Ω ±5% (0603) resistor                                                                       |
| R3            |     1 | 100k Ω ±5% (0603) resistor                                                                     |
| R4            |     1 | 0.04 Ω ±1%, 0.5W (2010) sense resistor Vishay Dale WSL2010 0.040 1.0% IRC LRC-LR2010-01-R040-F |
| R5-R8         |     0 | Not installed, 0603                                                                            |
| U1            |     1 | MAX8713ETG, 24-pin, 4mm x 4mm, thin QFN                                                        |
| None          |     1 | PC board MAX8713 EV kit                                                                        |

## Quick Start

## Recommended Equipment

- DC source to supply the input current to the charger-this source must be capable of supplying a voltage greater than the battery-voltage set point and have sufficient current rating
- Voltmeter
- Smart battery
- Computer running Windows 95, 98, 2000, or XP
- 9-pin serial extension cable
- SMBUSMON2 board
- 4) Install the software by running the INSTALL.EXE program. The install program copies the files and creates icons for them in the Windows 95/98/2000/XP Start menu. An uninstall program is included with the software. Click on the UNINSTALL icon to remove the EV kit software from the hard drive.
- 5) Connect power to the SMBUSMON2 board.
- 6) Connect the input-current supply across the ADAPTER\_IN and PGND pads.
- 7) Connect a smart battery to connector J2.
- 8) Turn on the power supply.
- 9) Start the MAX8713 EV kit software.
- 10) Verify current is being delivered to the battery.

## Detailed Description of Software

The MAX8713 program provides easy access to the MAX8713 registers. It is also capable of reading the registers of a smart battery and monitoring SMBus traffic.

Upon execution of the program, the software enables the MAX8713 smart-charger command panel (Figure 1),  after  which  any  of  the  allowed  SMBus  commands can be sent to the MAX8713. Refer to the MAX8713 data sheet for more information regarding the allowed SMBus commands.

## Smart Charger Command Panel

## ChargeVoltage()

To  issue  the  ChargeVoltage()  command  to  the MAX8713, enter the desired voltage, in millivolts, into the Charging Voltage edit field and select the adjacent Write button.

## ChargeCurrent()

To  issue  the  ChargeCurrent()  command  to  the MAX8713, enter the desired current, in milliamps, into the Charging Current edit field and select the adjacent Write button.

## ManufacturerID()

ManufacturerID() returns the manufacturer ID (0x004D) from the MAX8713. This command is available through the Other Bitmapped Charger Registers... panel (Figure 2).  Select  manufacturer ID by picking it from the pulldown list located directly under the Other Bitmapped Charger Registers... label. Issue a ManufacturerID() command by selecting the Read button. The returned hexadecimal value is shown at the bottom of the panel.

<!-- image -->

## Procedure

The MAX8713 EV kit is a fully assembled and tested board. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed. Observe all precautions on the battery manufacturer's data sheet.

- 1) Set the VPP jumper on the SMBUSMON2 board to VCC5.
- 2) Carefully connect the boards by aligning the 20-pin connector of the MAX8713 EV kit with the 20-pin header of the SMBUSMON2 board. Gently press them together.
- 3) Connect a cable from the computer's serial port to the  SMBUSMON2  interface  board.  Use  a straight-through 9-pin female-to-male cable.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8713 Evaluation Kit/Evaluation System

## DeviceID()

DeviceID() returns the device ID (0x0007) from the MAX8713. This command is available through the Other Bitmapped Charger Registers... panel (Figure 2). Select device ID by picking it from the pulldown list located directly under the Other Bitmapped Charger Registers... label. Issue a DeviceID() command by selecting the Read button. The returned hexadecimal value is shown at the bottom of the panel.

## Smart-Battery Command Panel

The software is capable of reading the registers of a smart battery. The smart-battery page of the software is shown in Figure 3. The software only reads the registers selected with checkmarks. By default, the registers are automatically read once every 2s. Disable this feature by unselecting the Active Read: Battery checkbox located on the Timer panel. Change the refresh time by entering a new value into the Timer Interval edit box and select the Set Interval button. When autorefresh is disabled, read the battery by selecting the Refresh button.

## Detailed Description of Hardware

The MAX8713 includes all of the functions necessary to charge a smart battery. The EV kit is capable of charging with a maximum 2.016A current and a maximum 19.2V voltage. For more information on the operation of the MAX8713, refer to the Detailed Description section of the MAX8713 data sheet.

## Connecting a Smart Battery

The MAX8713 EV kit includes a five-pin smart-battery connector. To connect a smart battery to the EV kit, turn off power to the EV kit and connect the battery, making sure to correctly orient the connectors.

## Evaluating the MAX8713 Above 25V

To evaluate the MAX8713 with an input voltage greater than 25V (up to 28V), capacitor C5 must be replaced with a higher-voltage-rating part.

## Component Suppliers

| SUPPLIER                          | PHONE        | FAX          | WEBSITE               |
|-----------------------------------|--------------|--------------|-----------------------|
| Central Semiconductor             | 631-435-1110 | 631-435-1824 | www.centralsemi.com   |
| Diodes Inc.                       | 805-446-4800 | 805-446-4850 | www.diodes.com        |
| Fairchild Semiconductor           | 888-522-5372 | -            | www.fairchildsemi.com |
| International Resistive Co. (IRC) | 361-992-7900 | 361-992-3377 | www.irctt.com         |
| Murata                            | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Sumida                            | 847-545-6700 | 847-545-6720 | www.sumida.com        |
| TDK                               | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| Vishay Dale                       | 402-564-3131 | 402-563-6296 | www.vishay.com        |

Note: Indicate you are using the MAX8713 when contacting these manufacturers.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8713 Evaluation Kit/Evaluation System

Figure 1. MAX8713 Smart-Charger Command Panel

<!-- image -->

- 4 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8713 Evaluation Kit/Evaluation System

Figure 2. MAX8713 Smart-Charger Command Panel Showing the Pulldown List for Manufacturer ID and Device ID

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5

## MAX8713 Evaluation Kit/Evaluation System

Figure 3. Smart-Battery Command Panel

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8713 Evaluation Kit/Evaluation System

<!-- image -->

Figure 4. MAX8713 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8713 Evaluation Kit/Evaluation System

Figure 5. MAX8713 EV Kit Schematic-Smart-Battery Connector

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8713 Evaluation Kit/Evaluation System

<!-- image -->

Figure 6. MAX8713 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 7. MAX8713 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8713 Evaluation Kit/Evaluation System

Figure 8. MAX8713 EV Kit PC Board Layout-VDD and Power Ground Plane

<!-- image -->

Figure 9. MAX8713 EV Kit PC Board Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8713 Evaluation Kit/Evaluation System

Figure 10. MAX8713 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

11