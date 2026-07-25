<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX6654 evaluation system (EV system) consists of a MAX6654 evaluation kit (EV kit) and a companion system management bus (SMBus™) interface board.

The MAX6654 EV kit is an assembled and tested PC board that demonstrates the MAX6654 temperature sensor. It monitors both the junction temperature of the MAX6654 and the temperature of an external diodeconnected transistor, and converts the temperature to 8-bit or 11-bit (extended resolution mode), 2-wire serial data. A 2N3906 temperature-sensor transistor comes soldered to the board in a SOT23 package, but it can be removed. The board can then be connected through a twisted pair to a remote diode close to your system.

The Maxim SMBus interface board (MAXSMBUS) allows an IBM-compatible PC to use its parallel port to emulate an Intel SMBus 2-wire interface. Windows ® 95/98/2000-compatible software provides a user-friendly  interface  to  exercise  the  features  of  the  MAX6654. The program is menu driven and offers a graphic interface with control buttons and status display.

Order the MAX6654EVSYS for a complete IBM PCbased  evaluation  of  the  MAX6654.  Order  the MAX6654EVKIT if you already have an SMBus interface.

Windows is a registered trademark of Microsoft Corp. SMBus is a trademark of Intel Corp.

I 2 C is a trademark of Philips Corp.

| DESIGNATION   |   QTY | DESCRIPTION                                                                            |
|---------------|-------|----------------------------------------------------------------------------------------|
| C1            |     1 | 0.1 µ F, 16V X7R ceramic capacitor Taiyo Yuden EMK107BJ104KA or Murata GRM39X7R104K016 |
| C2            |     1 | 2200pF, 50V X7R ceramic capacitor                                                      |
| J1            |     1 | 2 x 10 right-angle female receptacle                                                   |
| JU1, JU2, JU3 |     3 | 3-pin headers                                                                          |
| JU4, JU5, JU6 |     0 | Not installed                                                                          |

## Features

- ♦ Measures and Displays Remote Sensor Temperature
- ♦ Programmable Alarms and Configuration
- ♦ Operating Temperature Ranges -55°C to +125°C (Remote Sensor) 0°C to +70°C (Board)
- ♦ SMBus/I 2 C™-Compatible Interface
- ♦ Easy-to-Use Menu-Driven Software
- ♦ Assembled and Tested
- ♦ Includes Windows 95/98/2000-Compatible Software and Demo PC Board

## Ordering Information

| PART         | SMBus INTERFACE TYPE   | IC PACKAGE   |
|--------------|------------------------|--------------|
| MAX6654EVKIT | Not included           | 16 QSOP      |
| MAX6654EVSYS | MAXSMBUS               | 16 QSOP      |

Note: The MAX6654 EV kit software is provided with the MAX6654EVKIT. However, the MAXSMBUS board is required to interface the EV kit to the computer when using the software.

## MAX6654EVSYS Component List

| PART         |   QTY | DESCRIPTION           |
|--------------|-------|-----------------------|
| MAX6654EVKIT |     1 | MAX6654 EV kit        |
| MAXSMBUS     |     1 | SMBus interface board |

## MAX6654EVKIT Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                                                   |
|---------------|-------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Q1            |     1 | PNP transistor Central Semiconductor CMPT3906 or Fairchild MMBT3906 or General Semiconductor MMBT3906 or On Semiconductor MMBT3906 or Vishay/Lite-On MMBT3906 |
| R1            |     0 | Not installed                                                                                                                                                 |
| SW1           |     1 | Slide switch, 0.150in pitch                                                                                                                                   |
| U1            |     1 | MAX6654MEE                                                                                                                                                    |
| None          |     3 | Shunts                                                                                                                                                        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX6654 Evaluation System

## Quick Start

Before you begin, you will need the following equipment:

- An IBM PC-compatible computer running Windows 95/98/2000
- A parallel printer port (this is a 25-pin socket on the back of the computer)
- A standard 25-pin, straight-through, male-to-female cable (printer extension cable) to connect the computer's parallel port to the SMBus interface board
- A DC power supply capable of supplying any voltage between +7V and +20V at 100mA

## Procedure

- 1) Carefully connect the boards by aligning the 20-pin connector of the MAX6654 EV kit with the 20-pin header of the MAXSMBUS interface board. Gently press them together. The two boards should be flush against each other.
- 2) Make sure switch SW1 on the MAX6654 EV kit is in the OFF position.

## Do not turn on the power until all connections are made.

- 3) Connect the power supply to the pads labeled POS9 and GND1 of the SMBus interface board.
- 4) Make sure JU3 is set to the 1-2 position.
- 5) Connect a cable from the computer's parallel port to the SMBus interface board. Use a straight-through 25-pin female-to-male cable. To avoid damaging the EV kit or your computer, do not use a 25-pin SCSI port or any other connector that is physically similar to the 25-pin parallel printer port.
- 6) The MAX6654.EXE software program can be run from the floppy or hard drive. Use the Windows program manager to run the program. If desired, you may use the INSTALL.EXE program to copy the files  and  create icons for them in the Windows 95/98/2000 Start menu. An uninstall program is included with the software. Click on the UNINSTALL icon to remove the EV kit software from the hard drive.
- 7) Turn on the power supply.
- 8) Turn the EV kit on by moving SW1 to the ON position.
- 9) Start the MAX6654 program by opening its icon in the Start menu.
- 10) Observe as the program automatically detects the address of the MAX6654 and starts the main program.

Note: The MAX6654 reads the address select pins at device power-up only.

## Detailed Description

## User-Interface Panel

The user interface is easy to operate. Use the mouse, or  press  the  Tab  key  to  navigate  with  the  arrow  keys. Each of the buttons corresponds to bits in the command and configuration bytes. By clicking on them, the correct SMBus write operation is generated to update the internal registers.

Note: Words in bold are user-selectable features in the software.

The program continually polls the device for new temperature data and status, and monitors for alert conditions. To disable the continuous polling of data, uncheck the Automatic Read checkbox. To change the THIGH and TLOW threshold comparison registers, select the appropriate data field and type in the new value. Pressing Enter, after typing in the new values, updates the internal registers.

If  an  interrupt  condition  is  generated  by  the  temperature crossing one of the alarm threshold levels, the message ALERT will appear. To clear the interrupt, first eliminate the condition that caused it and then click on

Read Alert .  This  action  reads the Alert Response address, returns the value of the current MAX6654 slave address, and clears the interrupt. Note: The least significant bit (LSB) of the address is the read/write status bit; therefore, the address returned will be 1 higher.

To make single-shot conversions, check the STOP checkbox under Configuration Byte, and then click on the One-Shot button. Single-shot conversions can also be performed while the device is autoconverting. The

## Component Suppliers

| SUPPLIER                    | PHONE        | FAX          |
|-----------------------------|--------------|--------------|
| Central Semiconductor       | 515-435-1110 | 515-435-1824 |
| Fairchild                   | 408-822-2000 | 408-822-2102 |
| General Semiconductor       | 631-847-3000 | 631-847-3236 |
| Murata                      | 814-237-1431 | 814-238-0490 |
| On Semiconductor            | 602-303-5454 | 602-994-6430 |
| Taiyo Yuden                 | 408-573-4150 | 408-573-4159 |
| Vishay/Lite-On Diodes, Inc. | 805-446-4800 | 805-446-4850 |

Note: Please indicate you are using the MAX6654 when contacting  these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6654 Evaluation System

single-shot command overrides the automatic conversion. After the single shot is complete, the device returns to automatic operation.

## Simple SMBus Commands

There are two methods for communicating with the MAX6654: through the normal user-interface panel or through the SMBus commands available from pressing the MAXSMBUS button. A display pops up that allows the SMBus protocols, such as Read Byte and Write Byte, to be executed. To stop normal user-interface execution so that it does not override the manually set values, turn off the update timer that slaves the program to the conversion rate by unchecking the Automatic Read checkbox.

The SMBus dialog boxes accept numeric data in binary,  decimal, or hexadecimal. Hexadecimal numbers should be prefixed by $ or 0x. Binary numbers must be exactly eight digits. Note: In  places where the slave address asks for an 8-bit value, it must be the 7-bit slave address of the MAX6654 as determined by ADD0 and ADD1 with the last bit always set to 1.

## Data Logging

Check the Data Logging checkbox to activate data logging. Data logging saves temperature and status data to a text file that includes a time/date stamp next to each data point. If Automatic Read is enabled, data is  sampled at 2Hz; however, the data is logged to the file only if either the temperature or status change. This slows the growth of the data-logging file. When Automatic Read is disabled, the data is logged each time the Read All button is clicked. To stop data logging, uncheck the Data Logging checkbox.

## Table 1. JU1 and JU2 Shunt Settings for SMBus Address

| SHUNT LOCATION   | SHUNT LOCATION   |                 |
|------------------|------------------|-----------------|
| JU1 (ADD0)       | JU2 (ADD1)       | MAX6654 ADDRESS |
| 2-3              | 2-3              | 0011 000        |
| 2-3              | Open             | 0011 001        |
| 2-3              | 1-2              | 0011 010        |
| Open             | 2-3              | 0101 001        |
| Open             | Open             | 0101 010        |
| Open             | 1-2              | 0101 011        |
| 1-2              | 2-3              | 1001 100        |
| 1-2              | Open             | 1001 101        |
| 1-2              | 1-2              | 1001 110        |

<!-- image -->

## Jumper and Switch Settings

Two jumpers set the MAX6654 slave address. The default address is 1001 110 (ADD0 = ADD1 = VCC). JU1 corresponds to ADD0 and JU2 corresponds to ADD1; see Table 1 for a complete list of addresses. The MAX6654 must undergo a power-on reset for the new address to become effective.

The +5V supply voltage for the MAX6654 comes from the  SMBus interface board. To evaluate the MAX6654 with  a  different  voltage,  cut  the  trace  shorting  the  two pins of JU4 and apply a voltage to the VCC pad. A slide  switch,  SW1,  is  provided  as  a  means  to  force  a power-on reset of the MAX6654. This switch disables power to the device.

## Evaluating PRC Mode

The MAX6654 includes a parasitic resistance cancellation  (PRC) mode. In PRC mode, the effect of series resistance on the leads of the external diode is canceled. To test this feature, cut the trace shorting the two pins of JU5 and solder a 100 Ω resistor at the R1 location  on  the  board.  Then  check the Parasitic Cancel checkbox on the main display.

## Using a Remote-Diode Sensor

The MAX6654 EV kit can be connected through a twisted pair to a remote diode close to your system. Cut the trace shorting the two pins of JU6 and solder the twisted pair from your remote diode to the pads labeled DXP and DXN.

Table 2. JU3 Shunt Settings for STBY

| SHUNT LOCATION   | STBY PIN                           | FUNCTION        |
|------------------|------------------------------------|-----------------|
| 1-2              | Connected to VCC                   | In operate mode |
| Open             | Connect an external signal to STBY |                 |
| 2-3              | Connected to GND                   | In standby mode |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6654 Evaluation System

Figure 1. Main Display for MAX6654EVKIT

<!-- image -->

Figure 2. MAX6654 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6654 Evaluation System

Figure 3. MAX6654 EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 4. MAX6654 EV Kit PC Board Layout- Component Side

Figure 5. MAX6654 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.