<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The  MAX1669  evaluation  system  consists  of  a MAX1669 evaluation kit (EV kit) and a companion Maxim SMBus™ interface board.

The MAX1669 EV kit is an assembled and tested PC board that demonstrates the MAX1669 fan controller and temperature sensor. The MAX1669, in conjunction with external power components, controls the speed of a DC brushless fan with either a PWM signal or a variable DC control voltage. A small fan is included with the EV kit.

The MAX1669 also monitors the temperature of an external diode-connected transistor and converts the temperature to an 8-bit, 2-wire serial data. A 2N3906 temperature-sensor transistor comes soldered to the board in a SOT23 package. Removing the transistor allows the board to connect through a twisted pair, to a remote diode closer to your system for more realistic experiments.

The Maxim SMBus interface board (MAXSMBUS) allows an IBM-compatible PC to use its parallel port to emulate an Intel (SMBus) 2-wire interface. Windows ® 95/98/2000-compatible software provides a user-friendly interface to exercise the MAX1669 features. The program is menu driven and offers a graphics interface with control buttons and status display.

Order the MAX1669EVSYS for complete PC-based evaluation of the MAX1669. Order the MAX1669EVKIT if you already have an SMBus interface.

## Component List

| DESIGNATION                     |   QTY | DESCRIPTION                                                                           |
|---------------------------------|-------|---------------------------------------------------------------------------------------|
| C1                              |     1 | 0.1 µ F, 16V X7R ceramic capacitor Taiyo YudenEMK107BJ104KA or Murata GRM39X7R104K016 |
| C2                              |     1 | 2200pF, 50V X7R ceramic capacitor                                                     |
| J1                              |     1 | 2 x 10 right-angle female receptacle                                                  |
| J2, J3, JU1, JU2, JU3, JU5, JU7 |     7 | 3-pin headers                                                                         |
| JU4, JU6                        |     0 | Not installed                                                                         |
| N1                              |     1 | N-channel MOSFET (2.7A, 30V) Fairchild FDN359AN                                       |
| P1                              |     1 | P-channelMOSFET(SO8) (-3.0A,60V) Fairchild NDS9407                                    |

## Features

- ♦ Measures and Displays Remote Sensor Temperature
- ♦ Flexible Fan-Speed Control: Linear or PWM
- ♦ Programmable Alarms and Configuration
- ♦ Operating Temperature Ranges -55°C to +125°C (Remote Sensor) 0°C to +70°C (Board)
- ♦ I 2 C™/SMBus Compatible
- ♦ Easy-to-Use Menu-Driven Software
- ♦ Assembled and Tested
- ♦ Includes Windows 95/98/2000-Compatible Software and Demo PC Board

## Ordering Information

| PART         | SMBus INTERFACE TYPE   | IC PACKAGE   |
|--------------|------------------------|--------------|
| MAX1669EVKIT | User supplied          | 16 QSOP      |
| MAX1669EVSYS | MAXSMBUS               | 16 QSOP      |

Note: The MAX1669 EV kit software is provided with the MAX1669EVKIT. However, to use the software, the MAXSMBUS board is required to interface the EV kit to the computer.

## MAX1669EVSYS Component List

| PART         |   QTY | DESCRIPTION           |
|--------------|-------|-----------------------|
| MAX1669EVKIT |     1 | MAX1669 EV kit        |
| MAXSMBUS     |     1 | SMBus interface board |

## Component Suppliers

| SUPPLIER                  | PHONE        | FAX          |
|---------------------------|--------------|--------------|
| Central Semiconductor     | 515-435-1110 | 515-435-1824 |
| Fairchild                 | 408-822-2000 | 408-822-2102 |
| General Semiconductor     | 631-847-3000 | 631-847-3236 |
| Motorola                  | 303-675-2140 | 303-675-2150 |
| Taiyo Yuden               | 408-573-4150 | 408-573-4159 |
| Vishay Liteon/Diodes Inc. | 805-446-4800 | 805-446-4850 |

Note: Please indicate you are using the MAX1669 when contacting these manufacturers.

SMBus is a trademark of Intel Corp. Windows is a registered trademark of Microsoft Corp. I 2 C is a trademark of Philips Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For price, delivery, and to place orders, please contact Maxim Distribution at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX1669 Evaluation System

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                                                         |
|---------------|-------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Q1            |     1 | PNP bipolar transistor Fairchild MMBT3906, Central Semiconductor CMPT3906, General Semiconductor MMBT3906, Motorola MMBT3906, or Vishay Liteon/Diodes Inc. MMBT3906 |
| Q2            |     1 | NPN bipolar transistor Fairchild MMBT3904, Central Semiconductor CMPT3904, General Semiconductor MMBT3904, Motorola MMBT3904, or Vishay Liteon/Diodes Inc. MMBT3904 |
| R1, R3, R7    |     3 | 100k Ω 5% resistors                                                                                                                                                 |
| R2            |     1 | 1M Ω ±5% resistor                                                                                                                                                   |
| R4            |     1 | 10k Ω ±5% resistor                                                                                                                                                  |
| R5            |     1 | 221k Ω ±1% resistor                                                                                                                                                 |
| R6            |     1 | 100k Ω ±1% resistor                                                                                                                                                 |
| R8            |     1 | 2.43k Ω ±1% resistor                                                                                                                                                |
| R9            |     1 | 1.21k Ω ±1% resistor                                                                                                                                                |
| SW1           |     1 | Slide switch                                                                                                                                                        |
| U1            |     1 | MAX1669EEE                                                                                                                                                          |
| None          |     5 | Shunts                                                                                                                                                              |
| None          |     1 | Fan, 40 x 40 x 20mm, 12V, 170mA                                                                                                                                     |
| None          |     1 | 3.5in software disk (MAX1669 EV kit)                                                                                                                                |

## Quick Start

## Required Equipment

The following equipment is needed before you begin:

- IBM PC-compatible computer running Windows 95/98/2000
- Parallel-printer  port  (25-pin  socket  on  the  back  of the computer)
- Standard 25-pin, straight-through, male-to-female cable to connect the computer's parallel port to the Maxim SMBus interface board
- DC power supply capable of supplying +7V to +20V at 100mA for the SMBus interface board
- +5V, 100mA power supply for the MAX1669 IC
- +12V, 250mA power supply for the fan

## Procedure

- 1) Carefully connect the boards by aligning the 20-pin connector of the MAX1669 EV kit with the 20-pin header of the MAXSMBUS interface board. Gently press them together. The two boards should be flush against each other.

Make sure switch SW1 on the MAX1669 EV kit is in the OFF position. Do not turn on the power until all connections are made.

- 2) Plug the fan into J3.
- 3) Connect a cable from the computer's parallel port to  the  SMBus interface board. Use a straightthrough 25-pin male-to-female cable. To avoid damaging the EV kit or your computer, do not use a 25pin SCSI port or any other connector that is physically similar to the 25-pin parallel printer port.
- 4) Run the MAX1669.EXE software program from the floppy or hard drive by using the Windows program manager to run the program. If desired, use the INSTALL.EXE program to copy the files and create icons for them in the Windows 95/98 Start menu. An uninstall program is included with the software. Click on the UNINSTALL icon to remove the EV kit software from the hard drive.
- 5) Connect a +7VDC to +20VDC power supply to the pads labeled POS9 and GND1 of the SMBus interface board.
- 6) Connect the +5V power supply to the pads labeled VCC and GND.
- 7) Connect the +12V supply to the pads labeled +12VSUP and SUPGND.
- 8) Turn on all power supplies.
- 9) Turn the EV kit on by moving SW1 to the ON position.
- 10) Start the MAX1669 program by opening its icon in the Start menu.
- 11) The program automatically detects the address of the MAX1669 and starts the main program. Figure 1 shows the main display for the MAX1669 EV kit.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1669 Evaluation System

Figure 1. Main Display for MAX1669 EV Kit

<!-- image -->

## Detailed Software Description

## User-Interface Panel

The user interface is easy to operate; use the mouse, or press the Tab key to navigate with the arrow keys. Each of the buttons corresponds to bits in the command and configuration bytes. Clicking on them generates the correct SMBus write operation to update the internal registers.  The program continually polls the device for new temperature data and status, and monitors for alert conditions. To change the THIGH, TLOW, and TCRIT threshold comparison registers, select the appropriate data field, and type in the new value. After typing in the new values, press Enter to update the internal registers.

To make single-shot conversions, check the STBY checkbox under Configuration Byte, and then click on the One-Shot button. Single-shot conversions can also be performed while the device is autoconverting. The single-shot command overrides the automatic conversion. After the single shot is complete, the device returns to STBY mode.

<!-- image -->

If  the  temperature  crosses  one  of  the  alarm  threshold levels, an interrupt condition is generated, and a message appears in the alert box (ALERT). To clear the interrupt, first eliminate the condition that caused it, and then click on Read Alert .  This  action  reads  the  Alert Response address, returns the value of the current MAX1669 slave address, and clears the interrupt.

Note: The least significant bit of the address is the read/write status bit; therefore, the address returned will be 1 higher.

## Simple SMBus Commands

There are two methods for communicating with the MAX1669: through the normal user-interface panel, or through the SMBus commands available from pressing the MAXSMBUS button. A display will pop up that allows the SMBus protocols, such as Read-Byte and Write-Byte to be executed. To stop normal user-interface execution so that it does not override the manually set values, turn off the update timer that slaves the program to the conversion rate by unchecking the Automatic Read checkbox.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1669 Evaluation System

The SMBus dialog boxes accept numeric data in binary,  decimal, or hexadecimal. Hexadecimal numbers should be prefixed by $ or 0x. Binary numbers must be exactly eight digits.

Note: In places where the slave address asks for an 8-bit value, it must be the 7-bit slave address of the MAX1669 as determined by ADD0, ADD1, and ADD2 with the last read/write bit always set to zero (Table 1).

## Demonstration Routine

A demonstration routine is provided that shows the changes of fan speed with changes in temperature. To open  the  demonstration  routine,  click  on  the Demonstration button. First, two temperature parameters  will  need  to  be  set;  the  temperature  that  the  fan turns on (6.67% Duty Factor or 0.0625 ✕ VCC), and the temperature that the fan is on full speed (100% Duty Factor or 0.9375 ✕ VCC). As the sensor temperature varies between these two temperatures, the speed of the fan will change proportionally (Figure 2).

Note: Some fans will not start at low PWM duty factors or  low  voltages.  The  fan  included  with  the  EV  kit  will start up at low duty factors.

## Data Logging

Data logging is activated by checking the Data Logging checkbox. Data logging saves temperature and status data to a text file that includes a time/date stamp next to each data point. If Automatic Read is enabled, data is sampled at 2Hz. The data is logged to the file  only  if  the  temperature  or  status  change.  This slows the growth of the data-logging file. When Automatic Read is disabled, the data is logged each time the Read All button is clicked. To stop data logging, uncheck the Data Logging checkbox.

Table 1. JU1, JU2, and JU3 Shunt Settings for SMBus Address

| SHUNT LOCATION   | SHUNT LOCATION   | SHUNT LOCATION   | MAX1669 ADDRESS   | MAX1669 ADDRESS   |
|------------------|------------------|------------------|-------------------|-------------------|
| JU1              | JU2              | JU3              | BINARY            | HEX               |
| 2-3              | 2-3              | 2-3              | 0011              | 0x30              |
| 2-3              | 2-3              | 1-2              | 0011              | 0x32              |
| 2-3              | 1-2              | 2-3              | 0011              | 0x34              |
| 2-3              | 1-2              | 1-2              | 0101              | 0x52              |
| 1-2              | 2-3              | 2-3              | 0101              | 0x54              |
| 1-2              | 2-3              | 1-2              | 0101              | 0x56              |
| 1-2              | 1-2              | 2-3              | 1001              | 0x98              |
| 1-2*             | 1-2*             | 1-2*             | 1001 101          | 0x9A              |

*Default

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Detailed Hardware

## Description

## Jumper and Switch Settings

Three jumpers set the MAX1669 slave address. The default address is 1001 101 (ADD0 = ADD1 = ADD2 = VCC). JU1 corresponds to ADD0, JU2 corresponds to ADD1, and JU3 corresponds to ADD2; see Table 1 for a complete list of addresses.

Jumper JU5 connects pin 11 (FAN) of the MAX1669 to either the PWM or linear fan control portion of the EV kit (Table 2).

Jumper position 2-3 is for linear operation. Position 1-2 is  for  PWM operation. See the Linear and PWM Fan Control section.

Jumpers JU6 and JU7 provide a feedback path from the fan to pin 1 (I/O1) of the IC for monitoring the fan. Jumper JU7, position 1-2, connects the linear portion of the EV kit to the feedback. Position 2-3 connects the PWM portion to the path.

This path can be broken and I/O1 used for other purposes by cutting the trace that shorts the two pins of JU6 and using the pad labeled I/O1.

A slide switch, SW1, is provided as a means to force a power-on reset of the MAX1669. This switch disables power to the device.

## Linear and PWM Fan Control

The linear portion of the MAX1669 EV kit consists of the MOSFET P1, transistor Q2, and resistors R4, R7, R8, and R9. The MAX1669 controls the fan speed through a DC control voltage, which can vary from 0 to 0.9375 ✕ VCC in 16 steps. Note that VCC is the reference voltage

Table 2. JU5 and JU7 Shunt Settings

| JUMPER   | SHUNT LOCATION   | SHUNT LOCATION   |
|----------|------------------|------------------|
|          | PWM              | LINEAR           |
| JU5      | 1-2*             | 2-3              |
| JU7      | 2-3*             | 1-2              |

*Default

<!-- image -->

## MAX1669 Evaluation System

Figure 2. Demonstration Routine

<!-- image -->

for the DAC, and the EV kit has been set up for a VCC of +5V.

To evaluate the MAX1669 with a different VCC, resistor R8 must be changed to compensate for the change to the DAC output voltage. Use the equation below to calculate the value.

Let VFAN = 12V (the voltage for the fan), R9 = 1.21k Ω ±1%:

<!-- formula-not-decoded -->

Example: For VCC = 3.3V, R8 = 4856 Ω ,  use a 4.87k Ω ±1% resistor.

Connect the fan supplied with the EV kit to J3 for linear operation. If desired, a different fan can be used by connecting to the pads labeled LINFAN+ and LINFAN-; however, it should not exceed 600mA at 12V.

The PWM portion consists of the MOSFET N1. The MAX1669 controls the fan speed through a low-fre-

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

quency PWM signal where the duty factor can vary from 0% to 100% in 16 steps.

For PWM operation, connect the fan supplied with the EV kit to J2. If desired, a different fan can be used by connecting to the pads labeled PWMFAN+ and PWMFAN-; however, the current it demands should not exceed 2.7A.

Note: Some fans will not start at low PWM duty factors or low voltages.

## MAX1669 Evaluation System

Figure 3. MAX1669 EV Kit Schematic

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1669 Evaluation System

Figure 4. MAX1669 EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 5. MAX1669 EV Kit PC Board Layout-Component Side

Figure 6. MAX1669 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

7