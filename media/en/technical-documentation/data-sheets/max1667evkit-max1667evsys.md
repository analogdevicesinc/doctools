<!-- lastmod 2022-08-04 -->
<!-- image -->

## General Description

The MAX1667 evaluation system (EV system) consists of a MAX1667 evaluation kit (EV kit) and a companion Maxim SMBus ® Interface Board. The MAX1667 EV kit simplifies evaluation of the MAX1667 chemistryindependent Level 2 smart battery charger.

The Maxim SMBus interface board (MAXSMBUS) allows an IBM ® -Compatible personal computer to use its  parallel  port  to  emulate  an  Intel ® system management bus (SMBus) 2-wire interface. Windows ® 95/98 software provides a user friendly interface to exercise the MAX1667's features.

Order the MAX1667 EV system for complete IBM PCbased evaluation of the MAX1667. Order the MAX1667 EV kit if you already have an SMBus interface.

| DESIGNATION         |   QTY | DESCRIPTION                                                   |
|---------------------|-------|---------------------------------------------------------------|
| C1, C15             |     2 | 33µF, 25V low-ESR tantalum capacitors Sprague 594D336X0025D2T |
| C2, C4, C5, C7, C11 |     5 | 0.1µF ceramic capacitors                                      |
| C3                  |     1 | 0.047µF ceramic capacitor                                     |
| C6, C12             |     2 | 22µF, 35V low-ESR tantalum capacitors AVX TPSE226M035R0200    |
| C8                  |     1 | 0.022µF ceramic capacitor                                     |
| C9                  |     1 | 1µF, 50V ceramic capacitor Murata GRM42-2X7R105K050AB         |
| C10                 |     1 | 1500pF ceramic capacitor                                      |
| C14, C17            |     2 | 1µF, 10V (min) ceramic capacitors                             |
| D1, D4              |     2 | 40V, 5A Schottky diodes Central Semiconductor CMSH5-40        |
| D2, D3              |     2 | Small-signal Schottky diodes Central Semiconductor CMPSH-3    |
| JU1                 |     1 | 3-pin header                                                  |
| L1                  |     1 | 33µH, 5.5A inductor Coilcraft DO5022P-333                     |
| LED1                |     1 | Red LED                                                       |

## Features

- ♦ Charges Any Battery Chemistry: Li+, NiCd, NiMH, Lead Acid, etc.
- ♦ SMBus-Compatible 2-Wire Serial Interface
- ♦ 4A, 3A, or 1A (max) Battery Charge Current
- ♦ Up to 18.4V Battery Voltage
- ♦ Up to +28V Input Voltage
- ♦ Easy-to-Use Software Included
- ♦ Proven PC Board Layout
- ♦ Fully Assembled and Tested Surface-Mount Board

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX1667EVKIT | 0°C to +70°C | 20 SSOP      |
| MAX1667EVSYS | 0°C to +70°C | 20 SSOP      |

## Component List

| DESIGNATION    |   QTY | DESCRIPTION                                    |
|----------------|-------|------------------------------------------------|
| N1             |     1 | 30V, 11.5A N-channel MOSFET Fairchild FDS6680  |
| N2             |     1 | Small-signal N-channel MOSFET 2N7002           |
| P1             |     1 | 2 x 10 right-angle female header               |
| P2             |     1 | 5-element terminal block                       |
| R1             |     1 | 40m Ω ±1%, 1W resistor Dale WSL-2512/40m Ω /1% |
| R2, R4, R7, R8 |     4 | 10k Ω ±5% resistors                            |
| R3             |     1 | 10k Ω ±1% resistor                             |
| R5, R6         |     2 | 33 Ω ±5% resistors                             |
| R9             |     1 | 1k Ω ±5% resistor                              |
| U1             |     1 | MAX1667EAP                                     |
| None           |     1 | Shunt (JU1)                                    |
| None           |     1 | MAX1667 PC board                               |
| None           |     1 | MAX1667 data sheet                             |
| None           |     1 | MAX1667 EV kit data sheet                      |
| None           |     1 | MAX1667 EV kit software disk                   |
| None           |     1 | MAX1667 EV kit                                 |
| None           |     1 | MAXSMBus                                       |

Component Suppliers Table  appears at end of data sheet. Windows 95/98 are registered trademarks of Microsoft Corp. SMBus is a registered trademark of SBS Implementers Forum. IBM is a registered trademark of IBM Corp. Intel is a registered trademark of Intel Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## MAX1667 Evaluation System

## Table 1. Required Equipment

| EQUIPMENT                                                  | DESCRIPTION                                                                |
|------------------------------------------------------------|----------------------------------------------------------------------------|
| An IBM PC-compatible computer                              | Capable of running Windows 95/98                                           |
| A parallel printer port                                    | This is a 25-pin socket on the back of the computer.                       |
| A standard 25-pin, straight- through, male-to-female cable | To connect the computer's parallel port to the Maxim SMBus Interface Board |
| A DC power supply                                          | Capable of supplying +20V to +28V at 4A                                    |
| A standard smart battery pack or an electronic load        | Capable of sinking 4A                                                      |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

Before you begin, you will need the equipment listed in Table 1.

## Procedure

See Figure 1, which is a diagram of the MAX1667 EV kit system, as you follow these steps:

- 1) Carefully connect the boards by aligning the 20-pin connector of the MAX1667 EV kit with the 20-pin header of the MAXSMBus interface board. Gently press them together. The two boards should be flush against each other.

## Table 2. Jumper Functions

| JUMPER   | STATE   | FUNCTION                                       |
|----------|---------|------------------------------------------------|
| JU1      | 1-2*    | SEL tied to VL, full-scale cur- rent set to 4A |
| JU1      | 2-3     | SEL tied to GND, full-scale current set to 1A  |
| JU1      | Open    | SEL floating, full-scale current set to 3A     |

- 2) Configure desired charger current using jumper JU1 (Table 2).

## Important: Do not turn on the power until all connections are made.

- 3) Connect a +20V to +28V DC power supply between the VIN pad and the adjacent GND pad on the MAX1667 EV kit board.
- 4) Connect a cable from the computer's parallel port to the  SMBus interface board. Use a straight-through 25-pin female-to-male cable. To avoid damaging the EV kit or your computer, do not use a 25-pin SCSI port or any other connector that is physically similar to the 25-pin parallel printer port.
- 5) Install the MAX1667 EV kit software on your computer by running the INSTALL.EXE program on the floppy disk. This program copies the MAX1667 program file and creates an icon for it.

Figure 1. Functional Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1667 Evaluation Kit

Figure 2. MAX1667 EV Kit Software Command Panel

<!-- image -->

- 6) Turn on the power supply. Verify that LED1 turns on.
- 7) Start  the  MAX1667 program by opening its icon in the Start Menu. The EV kit software automatically detects the correct port by testing for the pin 5 to pin 13 loopback. Verify that LED1 turns off, signifying that communication between the PC and the MAX1667 has been established.
- 8) The software command panel should appear (Figure 2). Verify that Charging Voltage = 65535mV, Charging Current = 7mA; POWER\_FAIL\_MASK, HOT\_STOP, and Enable Polling are checked; and the following checkboxes are checked in the Charger Status panel: VOLTAGE\_NOTREG, VOLT-AGE\_OR, THERMISTOR\_OR, THERMISTOR\_COLD, and AC\_PRESENT.

<!-- image -->

## Detailed Description

Upon execution of the MAX1667 program, the software automatically resolves the SMBus address of the device. The software enables the command panel (Figure 2), after which the user may issue any of the allowed SMBus commands to the MAX1667. Refer to the MAX1667 data sheet for more information regarding the allowed SMBus commands.

## Command Panel

## ChargingVoltage()

To issue the ChargingVoltage() command to the MAX1667, enter the desired voltage, in millivolts, into the Charging Voltage text edit box and select the adjacent [Send] button.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1667 Evaluation System

Figure 3. MAX1667 EV Kit Smart Battery Window

<!-- image -->

## ChargingCurrent()

To issue the ChargingCurrent() command to the MAX1667, enter the desired current, in milliamperes, into  the  Charging Current text edit box and select the adjacent [Send] button.

## ChargerMode()

To  issue  the  ChargerMode()  command  to  the MAX1667, select the checkbox beside one of the five available Charger Mode operations. Checkboxes in the Charger Mode panel of commands may be either checked or unchecked; the software writes a 0 to the MAX1667 in each bit position corresponding to operations  that  are  unchecked, and writes a 1 in each bit position corresponding to checked operations.

## ChargerStatus()

On the right-hand side of the command panel, locate the Enable Polling checkbox and the Charger Status panel. If  the  Enable Polling checkbox is checked (the default setting),  the  software  automatically  issues  the ChargerStatus() command three times a second, in which case the checkboxes in the Charger Status panel are automatically updated and always represent the charger's current status. Unchecking the Enable Polling checkbox disables automatic software polling. If polling is disabled, the user can issue the ChargerStatus() command to the MAX1667 by selecting the [Charger Status] button, which is adjacent to the Enable Polling checkbox.

## AlertResponse()

The MAX1667 has an external interrupt pin that is polled by the software if the Enable Polling checkbox is checked. When an interrupt occurs, LED1 on the EV kit board illuminates. If polling is enabled, the software determines which event triggered the interrupt, clears the interrupt,  and  prints  a  diagnostic  message in the Interrupts box. If polling is disabled and an interrupt occurs, the user can manually service the interrupt by selecting the [Alert Response] button.

The Alert Response operation works as follows: The SMBus specification revision 1.0 describes an optional wired-OR signal called SMBALERT that, in a typical system, is connected to all the devices and then pulled up to VDD. A SLAVE device can use this signal to notify the bus MASTER that it wants to communicate. It does this  by  pulling  the  SMBALERT line LOW. When the MASTER sees the SMBALERT line go LOW, it knows that one of the SLAVE devices wants attention, but not which one. To determine which SLAVE pulled the SMBALERT line LOW, the MASTER broadcasts the Alert  Response Address (0x18) to all of the SLAVE devices on the bus using a modified RECEIVE BYTE operation. The SLAVE device wanting to communicate with the MASTER responds with its SMBus address (0x13) during the second byte of the modified RECEIVE BYTE operation.

## AlarmWarning()

To issue the AlarmWarning() command to the MAX1667, select the [Alarm Warning] button. This operation sends the AlarmWarning() command byte with a data word of 0x8000.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1667 Evaluation System

## Communication with a Smart Battery

If a Smart Battery is connected to the MAX1667 EV kit, the user may observe the status of the Smart Battery by selecting the [Battery] button. At this point, the Smart Battery window appears (Figure 3). If software polling of  the  charger's  status  is  enabled,  the  software  also automatically polls the status of the Smart Battery, and the parameters displayed in the Smart Battery window always represent the current status of the Smart Battery. If  polling  is  disabled,  the  user  can  manually query the Smart Battery by selecting the [Update] button. When finished, select the [Done] button to return to the main MAX1667 user interface window.

## Serial Communications Interface

When the user issues a command, the MAX1667 software first  determines the command byte; then, if the command is a Write-Word type, it determines the data word corresponding to the selected function. The software and MAX1667 device communicate serially via the MAXSMBus board. Refer to the MAX1667 data sheet for more information regarding the serial communications protocol.

## Detailed Description of Hardware

## Selecting Maximum Output Current

The MAX1667 EV kit can be configured to provide a maximum of 1A, 3A, or 4A output current. Jumper JU1 sets the maximum current. See Table 2 for a description of the JU1 jumper settings. The EV kit is optimized for 4A of output current. If the maximum output current is  set  lower  than  4A  and a smaller inductor is desired due to board space or cost constraints, the following inductors are suggested for L1: for 3A, the Sumida CDRH127-330; for 1A, the Sumida CDR105B-330.

## Connecting a Smart Battery

The MAX1667 EV kit includes a five-element terminal block to facilitate connecting the EV kit to a smart battery. Refer to the Smart Battery Specification to identify the type of smart battery connector suited to your application.  Make sure that the EV kit power is turned off, and connect the (+), C, D, T, and (-) terminals across from the EV kit board to the smart battery connector using no more than 2 inches of wire. Attach a smart battery to the smart battery connector and turn the EV kit power back on. See Figure 1 if necessary.

<!-- image -->

## Connecting an Electronic Load

If a Smart Battery is unavailable, an electronic load can be connected across the BATT and GND pads on the MAX1667 EV kit board. Make sure that the EV kit power is  turned  off  before  connecting a load. Connect the T pin to the (-) pin of P2 through a 10k Ω resistor (this makes it appear to the MAX1667 as if a Smart Battery were connected to the socket). After the load is connected, program the load in voltage mode and set the electronic load to clamp at 5V. Turn on the power to the EV kit, and program the MAX1667 with a Charging Voltage of 12V at the maximum Charging Current (4A in the default case). Verify that the MAX1667 is supplying the maximum current to the load. Increase the electronic load clamp voltage in 1V increments, and verify that as the electronic load voltage crosses 12V, the MAX1667 transitions from current regulation to voltage regulation; as the electronic load voltage increases beyond 12V, the BATT voltage should remain fixed at 12V.

## Layout Considerations

The MAX1667 EV kit layout is optimized for fast switching and high currents. The traces connecting the power components must be able to carry at least 4A. Take care to ensure that C6 and C12 (the input capacitors), D1 (the rectifier diode), and C1 and C15 (the output capacitors) are all connected to GND at a common point, and to isolate the power GND from the quiet analog GND. Additionally, place the current-sense resistor as close to the IC as possible to keep the current-sense traces short, and use Kelvin connections to connect the current-sense resistor terminals to the CS and BATT pins of the IC. Because the SMBus communications line is especially susceptible to noise, the power components and SMBus signal traces are strategically placed on opposite sides of the PC board.

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          |
|-----------------------|--------------|--------------|
| AVX                   | 803-946-0690 | 803-626-3123 |
| Central Semiconductor | 516-435-1110 | 516-435-1824 |
| Coilcraft             | 847-639-6400 | 847-639-1469 |
| Dale                  | 402-564-3131 | 402-563-6418 |
| Fairchild             | 408-822-2000 | 408-822-2102 |
| Murata                | 814-237-1431 | 814-238-0490 |
| Sprague               | 603-224-1961 | 603-224-1430 |

Note: Please indicate that you are using the MAX1667 when contacting the above component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1667 Evaluation System

Figure 4. MAX1667 EV Kit Schematic

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1667 Evaluation System

Figure 5. MAX1667 EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 6. MAX1667 EV Kit PC Board Layout-Component Side

Figure 7. MAX1667 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7