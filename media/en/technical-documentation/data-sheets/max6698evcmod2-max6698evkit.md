<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX6698 Evaluation Kit/Evaluation System

## General Description

The MAX6698 evaluation kit (EV kit) and evaluation system is an assembled and tested PC board with a mounted MAX6698. The EV kit allows full evaluation of the MAX6698 seven-channel temperature sensor. The MAX6698 monitors its own die temperature, the junction temperatures of three external diode-connected transistors, and the temperatures of three thermistors. It converts the temperature to 8-bit (or 11-bit for remote channel 1) 2-wire serial data that can be accessed over a 2wire serial  bus.  Refer  to  the  MAX6698 data sheet for additional information.

The MAX6698 EV kit includes external diode-connected transistors and thermistors soldered to the board, which can be removed. The board can then be connected through a twisted pair to remote diodes and thermistors close to your system.

The MAX6698 evaluation system consists of a Maxim command module (CMOD232) and a MAX6698 EV kit. The CMOD232 board connects to a computer's RS-232 serial  port  to  provide  a  computer  controlled SMBus™/I 2 C bus. Windows ® 95/98/2000/XP-compatible software provides a user-friendly interface to exercise the features of the MAX6698. The program is menu driven and offers a graphic interface with control buttons and status display.

Order the MAX6698EVCMOD2 for complete PC-based evaluation of the MAX6698. Order the MAX6698EVKIT if you already have a CMOD232 SMBus interface.

## MAX6698EVCMOD2 (MAX6698 EV System) Component List

| DESIGNATION   |   QTY | DESCRIPTION                              |
|---------------|-------|------------------------------------------|
| MAX6698EVKIT  |     1 | MAX6698 evaluation kit                   |
| CMOD232       |     1 | SMBus/I 2C interface board               |
| AC adapter    |     1 | 9VDC at 200mA (powers the CMOD232 board) |

SMBus is a trademark of Intel Corp. Windows is a registered trademark of Microsoft Corp.

## Features

- ♦ Three Thermal Diode Inputs and Three Thermistor Inputs
- ♦ Local Temperature Sensor
- ♦ Programmable Temperature Alarms
- ♦ SMBus/I 2 C Compatible
- ♦ Easy-to-Use Menu-Driven Software
- ♦ Fully Assembled and Tested
- ♦ Includes Windows 95/98/2000/XP-Compatible Software and Demo PC Board

## Ordering Information

| PART           | TEMP RANGE   | SMBus INTERFACE TYPE   |
|----------------|--------------|------------------------|
| MAX6698EVKIT   | 0°C to +70°C | Not included           |
| MAX6698EVCMOD2 | 0°C to +70°C | CMOD232                |

Note: The MAX6698 EV kit software is provided with the MAX6698EVKIT. However, the CMOD232 board is required to interface the EV kit to the computer when using the software.

## MAX6698EVKIT Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                   |
|---------------|-------|-------------------------------------------------------------------------------------------------------------------------------|
| C1            |     1 | 0.1µF ±10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C104KA01 TDK C1608X7R1C104K                                      |
| C2, C3, C4    |     3 | 2200pF ±10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H222K TDK C1608X7R1H222K                                       |
| C5, C6, C7    |     3 | 100pF ±50V, C0G, 0603 ceramic capacitors Murata GRM1885C1H101J TDK C1608CH1H101J                                              |
| J1            |     1 | 2 x 10 right-angle female receptacle                                                                                          |
| JU1-JU7       |     0 | Not installed                                                                                                                 |
| Q1, Q2, Q3    |     3 | 2N3906-type pnp transistors, SOT23 Central Semiconductor CMPT3906 Diodes Incorporated MMBT3906 Vishay Semiconductors MMBT3906 |
| R1, R2, R4    |     3 | 10k Ω ±5% resistors (0603)                                                                                                    |
| R3, R5        |     0 | Not installed, resistors (0603)                                                                                               |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

## MAX6698 Evaluation Kit/Evaluation System

## MAX6698EVKIT Component List (continued)

| DESIGNATION            |   QTY | DESCRIPTION                                                                    |
|------------------------|-------|--------------------------------------------------------------------------------|
| REXT1, REXT2, REXT3    |     3 | 1.60k Ω ±1% resistors (0805)                                                   |
| RTHER1, RTHER2, RTHER3 |     3 | 10k Ω ±1% through-hole, 0.095in diameter thermistors BetaTHERM Sensors 10K3A1C |
| U1                     |     1 | MAX6698EE99 (16-pin QSOP)                                                      |
| -                      |     1 | MAX6698 EV kit PC board                                                        |

## Quick Start

## Recommended Equipment

Before you begin, the following equipment is needed. Do not turn on the power until all connections are made:

- One computer running Windows 95, 98, 2000, or XP
- One RS-232 serial port (this is a 9-pin socket on the back of the computer)
- One standard 9-pin, straight-through, male-tofemale cable to connect the computer's serial port to the Maxim CMOD232 board
- One 3.3V, 100mA DC power supply

## Procedures

- 1) Carefully connect the boards by aligning the 20-pin connector of the MAX6698 EV kit with the 20-pin header of the CMOD232 board. Gently press them together.
- 2) Disable the pullup resistors on the CMOD232 board by moving switch SW1 to the OFF position.
- 3) Connect a cable from the computer's serial port to the CMOD232 board. Use a straight-through, 9-pin, male-to-female cable.
- 4) Install the software by running the INSTALL.EXE program. The install program copies the files and creates icons for them in the Windows 95/98/2000/XP Start  menu. (To remove the software at any time, click on the UNINSTALL icon.)
- 5) Connect the 9V adapter to the CMOD232 board.
- 6) Connect the +3.3V supply to the pads labeled VIN and GND on the MAX6698 EV kit.
- 7) Turn on the power supply.
- 8) Start  the  MAX6698 program by opening its icon in the Start menu.
- 9) Wait until the program automatically detects the address of the MAX6698 and displays the user-interface panel (Figure 1).

## Detailed Description

## User-Interface Panel

The user interface is easy to operate; use the mouse, or press the Tab and arrow keys to navigate. The checkboxes, edit fields, and radio buttons correspond to bits in  the  MAX6698 registers. Clicking on them generates the correct SMBus command and updates the registers.

Note: Words in boldface are user-selectable features in the software.

## Temperature

The MAX6698 monitors its own die temperature, the junction temperatures of three external diode-connected transistors, and the temperatures of three thermistors.  The  temperature measurements are capable of either  8-bit  (or  11-bit  for  remote  channel  1)  resolution; 8-bit  resolution results in temperature resolution of 1°C/LSB and 11-bit resolution results in temperature resolution of 0.125°C/LSB. Enable 11-bit resolution by selecting the Extended Resolution checkbox.

Read the temperatures by clicking on the Read Temp buttons. The temperature is shown to the right of the buttons.

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          | WEBSITE               |
|-----------------------|--------------|--------------|-----------------------|
| BetaTHERM             | 508-842-0516 | 508-842-0748 | www.betatherm.com     |
| Central Semiconductor | 631-435-1110 | 631-435-1824 | www.centralsemi.com   |
| Diodes Incorporated   | 805-446-4800 | 805-446-4850 | www.diodes.com        |
| Murata                | 770-436-1300 | 770-436-3030 | www.murata.com        |
| TDK                   | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| Vishay Semiconductors | 402-564-3131 | 402-563-6296 | www.vishay.com        |

Note: Indicate you are using the MAX6698 when contacting these manufacturers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6698 Evaluation Kit/Evaluation System

## External Diodes

The MAX6698 remote temperature sensor is optimized for use with a diode-connected transistor whose ideality factor is equal to 1.008. Transistors with different ideality  factors  produce  different  remote  temperature readings. Some typical discrete transistors may produce readings that vary up to 3°C from the correct value. Refer to the Maxim website (maxim-ic.com) Application Note: Compensating for Ideality Factor and Series Resistance Differences Between Thermal Sense Diodes for additional information.

## Thermistors

The MAX6698 reads up to three external thermistors. Each thermistor is combined with an external resistor to form a voltage-divider that is connected to a reference voltage (VREF). Thermistor readings are voltage values and are directly related to temperature. However, because thermistors are very nonlinear, these values are not calibrated to temperature in degrees C. Refer to the MAX6698 data sheet for more information.

## ALERT and OVERT Temperature Limits

The MAX6698 has ALERT and OVERT (overtemperature) limit registers. Temperature exceeding the ALERT limit register generates an alert interrupt. Exceeding the

OVERT limit sets the overtemperature bit in the status register and asserts the OVERT output pin. Note: OVERT limit only applies to remote channel 1, thermistor 1, thermistor 2, and thermistor 3.

Read the limits by clicking on the Read buttons. The value is shown to the right of the button. Change the limits  by  entering  the  value  into  the  appropriate  edit field and clicking on the Write button. Note that OVERT has 4°C of hysteresis. The temperature must decrease 4°C below the value set in the OVERT limit register to deassert the OVERT output.

## Configurations 1, 2, and 3

The configuration 1 register controls the STOP bit, the power-on-reset (POR ) bit, the SMB timeout disabled bit, the remote 1 fast conversion bit, and the resistance cancellation bit. Configuration 2 enables or disables the ALERT interrupt. Configuration 3 enables or disables the OVERT outputs.

Figure 2 shows the checkboxes for the configuration 1 register.  Each checkbox corresponds to a bit in the register.  Tables  1,  2,  and  3  describe  the  function  for each checkbox in configurations 1, 2, and 3.

Read the register by clicking on the Read button. Change the register by selecting or deselecting the desired functions and clicking on the Write button.

Table 1. Configuration 1 Register Checkboxes

|   BIT | NAME                     | STATE      | DESCRIPTION                                                                                                                                                         |
|-------|--------------------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     7 | STOP                     | Checked    | Places the MAX6698 in software standby mode.                                                                                                                        |
|     7 | STOP                     | Unchecked* | Places the MAX6698 in operational mode.                                                                                                                             |
|     6 | POR                      | Checked    | Resets all registers to their default values including the configuration 1 register. After selecting the POR checkbox, the checkbox returns to the unchecked state. |
|     6 | POR                      | Unchecked* | Normal operation.                                                                                                                                                   |
|     5 | SMB Timeout Disabled     | Checked    | Disables the SMBus timeout, as well as alert response, thus providing true I 2C compatibility.                                                                      |
|     5 | SMB Timeout Disabled     | Unchecked* | Enables the SMBus timeout.                                                                                                                                          |
|     4 | Remote 1 Fast Conversion | Checked    | Enables more frequent conversions on remote channel 1.                                                                                                              |
|     4 | Remote 1 Fast Conversion | Unchecked* | Disables fast conversion.                                                                                                                                           |
|     3 | Resistance Cancellation  | Checked    | The MAX6698 cancels series resistance in the remote channel 1 diode.                                                                                                |
|     3 | Resistance Cancellation  | Unchecked* | Disables resistance cancellation.                                                                                                                                   |
|     2 | Reserved                 | -          | Not used.                                                                                                                                                           |
|     1 | Reserved                 | -          | Not used.                                                                                                                                                           |
|     0 | Reserved                 | -          | Not used.                                                                                                                                                           |

* POR state.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6698 Evaluation Kit/Evaluation System

## Table 2. Configuration 2 Register Checkboxes

|   BIT | NAME                      | STATE      | DESCRIPTION                                  |
|-------|---------------------------|------------|----------------------------------------------|
|     7 | Reserved                  | -          | Not used.                                    |
|     6 | Mask Local ALERT          | Checked    | Disables the local ALERT interrupt.          |
|     6 | Mask Local ALERT          | Unchecked* | Enables the local ALERT interrupt.           |
|     5 | Mask Thermistor 3 ALERT   | Checked    | Disables the thermistor 3 ALERT interrupt.   |
|     5 | Mask Thermistor 3 ALERT   | Unchecked* | Enables the thermistor 3 ALERT interrupt.    |
|     4 | Mask Thermistor 2 ALERT   | Checked    | Disables the thermistor 2 ALERT interrupt.   |
|     4 | Mask Thermistor 2 ALERT   | Unchecked* | Enables the thermistor 2 ALERT interrupt.    |
|     3 | Mask Thermistor 1 ALERT   | Checked    | Disables the thermistor 1 ALERT interrupt.   |
|     3 | Mask Thermistor 1 ALERT   | Unchecked* | Enables the thermistor 1 ALERT interrupt.    |
|     2 | Mask Remote-Diode 3 ALERT | Checked    | Disables the remote-diode 3 ALERT interrupt. |
|     2 | Mask Remote-Diode 3 ALERT | Unchecked* | Enables the remote-diode 3 ALERT interrupt.  |
|     1 | Mask Remote-Diode 2 ALERT | Checked    | Disables the remote-diode 2 ALERT interrupt. |
|     1 | Mask Remote-Diode 2 ALERT | Unchecked* | Enables the remote-diode 2 ALERT interrupt.  |
|     0 | Mask Remote-Diode 1 ALERT | Checked    | Disables the remote-diode 1 ALERT interrupt. |
|     0 | Mask Remote-Diode 1 ALERT | Unchecked* | Enables the remote-diode 1 ALERT interrupt.  |

* POR state.

## Table 3. Configuration 3 Register Checkboxes

|   BIT | NAME                         | STATE      | DESCRIPTION                                                   |
|-------|------------------------------|------------|---------------------------------------------------------------|
|     7 | Reserved                     | -          | Not used.                                                     |
|     6 | Reserved                     | -          | Not used.                                                     |
|     5 | Mask Thermistor 3 Overtemp   | Checked    | Prevents OVERT from being asserted by a thermistor 3 fault.   |
|     5 | Mask Thermistor 3 Overtemp   | Unchecked* | Allows OVERT to be asserted by a thermistor 3 fault.          |
|     4 | Mask Thermistor 2 Overtemp   | Checked    | Prevents OVERT from being asserted by a thermistor 2 fault.   |
|     4 | Mask Thermistor 2 Overtemp   | Unchecked* | Allows OVERT to be asserted by a thermistor 1 fault.          |
|     3 | Mask Thermistor 1 Overtemp   | Checked    | Prevents OVERT from being asserted by a thermistor 1 fault.   |
|     3 | Mask Thermistor 1 Overtemp   | Unchecked* | Allows OVERT to be asserted by a thermistor 1 fault.          |
|     2 | Reserved                     | -          | Not used.                                                     |
|     1 | Reserved                     | -          | Not used.                                                     |
|     0 | Mask Remote-Diode 1 Overtemp | Checked    | Prevents OVERT from being asserted by a remote-diode 1 fault. |
|     0 | Mask Remote-Diode 1 Overtemp | Unchecked* | Allows OVERT to be asserted by a remote-diode 1 fault.        |

* POR state.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6698 Evaluation Kit/Evaluation System

## Status 1, 2, and 3

The status 1, 2, and 3 boxes display the critical and fault conditions that occur. Each line corresponds to a

## Table 4. Status 1 Register

|   BIT | NAME                 | DESCRIPTION                                                                                          |
|-------|----------------------|------------------------------------------------------------------------------------------------------|
|     7 | Reserved             | Not used.                                                                                            |
|     6 | Local ALERT          | The temperature of the MAX6698 is above the value set in the local ALERT limit register.             |
|     5 | Thermistor 3 ALERT   | The voltage of thermistor 3 is above the value set in the thermistor 3 ALERT limit register.         |
|     4 | Thermistor 2 ALERT   | The voltage of thermistor 2 is above the value set in the thermistor 2 ALERT limit register.         |
|     3 | Thermistor 1 ALERT   | The voltage of thermistor 1 is above the value set in the thermistor 1 ALERT limit register.         |
|     2 | Remote-Diode 3 ALERT | The temperature of remote-diode 3 is above the value set in the remote-diode 3 ALERT limit register. |
|     1 | Remote-Diode 2 ALERT | The temperature of remote-diode 2 is above the value set in the remote-diode 2 ALERT limit register. |
|     0 | Remote-Diode 1 ALERT | The temperature of remote-diode 1 is above the value set in the remote-diode 1 ALERT limit register. |

## Table 5. Status 2 Register

|   BIT | NAME                    | DESCRIPTION                                                                                                    |
|-------|-------------------------|----------------------------------------------------------------------------------------------------------------|
|     7 | Reserved                | Not used.                                                                                                      |
|     6 | Reserved                | Not used.                                                                                                      |
|     5 | Thermistor 3 Overtemp   | The voltage of thermistor 3 is above the value set in the thermistor 3 overtemperature limit register.         |
|     4 | Thermistor 2 Overtemp   | The voltage of thermistor 2 is above the value set in the thermistor 2 overtemperature limit register.         |
|     3 | Thermistor 1 Overtemp   | The voltage of thermistor 1 is above the value set in the thermistor 1 overtemperature limit register.         |
|     2 | Reserved                | Not used.                                                                                                      |
|     1 | Reserved                | Not used.                                                                                                      |
|     0 | Remote-Diode 1 Overtemp | The temperature of remote-diode 1 is above the value set in the remote-diode 1 overtemperature limit register. |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

bit in the registers. See Tables 4, 5, and 6 for a list of the status conditions.

Read the status by clicking on the Read Status button.

## MAX6698 Evaluation Kit/Evaluation System

## Table 6. Status 3 Register

|   BIT | NAME                 | DESCRIPTION                                       |
|-------|----------------------|---------------------------------------------------|
|     7 | Reserved             | Not used.                                         |
|     6 | Reserved             | Not used.                                         |
|     5 | Reserved             | Not used.                                         |
|     4 | Reserved             | Not used.                                         |
|     3 | Reserved             | Not used.                                         |
|     2 | Remote-Diode 3 Fault | DXP3 and DXN3 are either shorted or open circuit. |
|     1 | Remote-Diode 2 Fault | DXP2 and DXN2 are either shorted or open circuit. |
|     0 | Remote-Diode 1 Fault | DXP1 and DXN1 are either shorted or open circuit. |

## Alert

The message ALERT appears in the Alert box when an interrupt condition occurs unless the configuration register is set to mask the alert. The cause of the interrupt is shown in the status boxes. To clear the interrupt, first eliminate the condition that caused it and click on Read Alert .

## Automatic Read

The program polls the device for new temperature and status data a maximum of two times a second (2Hz). To disable the polling of data, deselect Automatic Read on the Action menu.

## Data Logging

Select Data Logging on the Action menu to activate data logging. Data logging saves temperature, voltage, and status data to a text file that includes a time/date stamp next to each data point. If automatic read is enabled, data is sampled at 2Hz; however, the data is logged to the file only if the temperature or status has changed. This slows the growth of the data-logging file. When automatic read is disabled, the data is logged each time Read All is selected on the Action menu. To stop data logging, deselect Data Logging on the Action menu.

## Simple SMBus Commands

There are two methods for communicating with the MAX6698-through the normal user-interface panel or through the SMBus commands available by selecting

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Interface on the Debug menu. A display pops up that allows the SMBus protocols, such as read byte and write  byte  to  be  executed.  To  stop  normal  user-interface execution so that it does not override the manually set  values,  turn  off  the  update  timer  by  deselecting Automatic Read on the Action menu.

The SMBus dialog boxes accept numeric data in binary,  decimal, or hexadecimal. Hexadecimal numbers should be prefixed by $ or 0x. Binary numbers must be exactly eight digits. Note: In  places where the slave address asks for an 8-bit value, it must be the 7-bit slave address of the MAX6698 with the last bit set to 1 for a read operation and zero for a write.

## Jumpers JU1, JU2, JU3

Jumpers JU1, JU2, and JU3 connect the onboard 2N3906 transistors as the external diodes. To use different diodes, cut the trace shorting the two pins of each jumper and connect the diodes (through twistedpair wire) to the MAX6698 EV kit.

## Jumpers JU4, JU5, JU6

Jumpers JU4, JU5, and JU6 connect the onboard thermistors to the MAX6698. To use different thermistors, cut the trace shorting the two pins of each jumper and connect the thermistors (through twisted-pair wire) to the MAX6698 EV kit.

## MAX6698 Evaluation Kit/Evaluation System

Figure 1. Main Window for the MAX6698 EV Kit Software

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6698 Evaluation Kit/Evaluation System

Figure 2. MAX6698 EV Kit Software Showing the Configuration Panel

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6698 Evaluation Kit/Evaluation System

<!-- image -->

Figure 3. MAX6698 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6698 Evaluation Kit/Evaluation System

Figure 4. MAX6698 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 5. MAX6698 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6698 Evaluation Kit/Evaluation System

Figure 6. MAX6698 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

11