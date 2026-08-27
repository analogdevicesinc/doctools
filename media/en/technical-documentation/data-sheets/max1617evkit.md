<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX1617 Temperature Sensor Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Equipment Needed

The MAX1617 evaluation kit (EV kit) is a demonstration platform for the MAX1617 temperature-sensor IC. It monitors both the junction temperature of the IC and the temperature of a remote (external) diode-connected transistor, and converts these temperatures to 8-bit, 2-wire serial data. A 2N3904 remote temperature-sensor transistor comes soldered to the board in a SOT23 package, but for more realistic experiments, it can easily be removed and connected via a twisted pair to the DXP and DXN terminals.

The EV kit is designed to be connected to a standard IBMcompatible PC parallel printer port. Signals from the parallel port are converted to open-drain SMBus™ clock and data by a 74HC05 logic chip on the board. An on-board MAX883 linear regulator with reverse voltage protection steps down the unregulated DC input to 5V to power the glue logic, the MAX1617, and the SMBus pull-up resistors.

The software runs under Windows™ 3.1 or 95. This userfriendly program is menu-driven and offers a graphic user interface with control buttons and numeric data displays.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' Measures and Displays Sensor Temperature
- ' Simultaneously Monitors Package and a Remote Sensor
- ' Programs Alarms, Configuration, and Rate
- ' Operating Temperature Ranges: -55°C to +125°C (remote sensor) 0°C to +70°C (board)
- ' Easy to Use
- ' Includes: Windows 3.1/95 Software

Demo PC Board 3.5 in. Floppy Disk

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART              | TEMP. RANGE   | BOARD TYPE    |
|-------------------|---------------|---------------|
| MAX1617EVKIT-QSOP | 0°C to +70°C  | Surface Mount |

Windows is a trademark of Microsoft Corp. SMBus is a trademark of Intel Corp.

- IBM-compatible PC, 386 at 20MHz or better
- Windows 3.1 or Windows 95
- Parallel printer cable, straight-through 25-pin male-to-female type
- DC power supply, 9V at 50mA

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

- 1) Set up the hardware. Connect the parallel cable to the computer port and to the EV kit board (or else simply plug the board directly into the port without the cable). The parallel port is typically labeled LPT or PRINTER. Adjust the power supply to +9VDC and connect it to the POS9 and ground terminals on the EV kit. Do not apply voltages higher than +11V.
- 2) Install the software. The MAX1617.EXE software can be run from the floppy or from a hard drive. Simply use the Windows program manager to run the program. The program prompts you to select the correct parallel port. An auto-detect routine attempts to identify  the  correct  port  and  highlights  it  as  the default choice. Another auto-detect routine attempts to  find  the  MAX1617 by cycling through the nine possible addresses.

After the parallel port and address are set up, the user interface panel appears. The MAX1617 is now operating in its default power-on-reset (POR) mode, auto-converting at a 0.25Hz rate. The display shows the current temperature for both remote and local channels.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## User-Interface Panel

The user interface is easy to operate; use the mouse, or press the Tab key to navigate with the arrow keys. Each of  the  buttons  corresponds to bits in the command, conversion rate, and configuration bytes. Clicking on them generates the correct SMBus write operation to update the internal registers. The program continually polls  the  device  for  new  temperature  data  and  status, and alerts at a rate faster than the fastest conversion rate.  To  change the THIGH and TLOW alarm-threshold comparison registers, select the appropriate data field and type in the new value. Pressing Enter after typing in the new values updates the internal registers.

To make single-shot conversions, click the Stop button under Configuration, and then click on the Measure Now button. Single-shot conversions can also be performed while the device is auto-converting. The singleshot command overrides the automatic conversion. After the single shot is complete, the device returns to automatic operation.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 408-737-7600 ext. 3468.

## MAX1617 Temperature Sensor Evaluation Kit

If  an  interrupt  condition  is  generated,  typically  by  the temperature crossing one of the alarm threshold levels, a  message appears in the alert box: 'ALERT! INT = LOW'. To clear the interrupt, first eliminate the condition  that  caused  it  (typically  by  resetting  the  alarm threshold) and then click on Read Alert. This action reads the Alert Response address, returns the value of the  current  MAX1617 slave address, and clears the interrupt.

## Simple SMBus Commands

There are two methods for communicating with the MAX1617: via the normal user-interface panel, or via the simple SMBus commands available from the SMBus pull-down menu. The menu lists simple SMBus protocols, such as Read Byte and Write Byte. To stop normal user-interface execution so that it does not override  the  manually set values, turn off the update timer that slaves the program to the conversion rate by clicking the Automatically Update Displays button.

Note that in places where the slave address asks for an 8-bit  value,  it  must  be  the  7-bit  slave  address  of  the MAX1617 as determined by ADD0 and ADD1 with the last LSB bit always set to one.

Table 1.  Troubleshooting Guide

| SYMPTOM                                                                                                           | POSSIBLE PROBLEM                                           | SOLUTION                                                                                                                             |
|-------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| No SMBus Hardware Detected message                                                                                | Bad connections                                            | Check the parallel cable. If it is a straight-through type, try a different cable or connect directly to the port with no cable.     |
| No SMBus Hardware Detected message                                                                                | Power supply                                               | Check the supply voltage setting for correct polarity. Use a DMMto check the voltage directly at the board.                          |
| Question marks displayed in status and temperature data fields                                                    | No MAX1617 connected                                       | Check the connections to the device. The SMBus interface is working, but the MAX1617 is not. Check the position of the slide switch. |
| SMB Clock Stuck Low or SMB Data Stuck Low message                                                                 | Short circuit                                              | Use a DMMto monitor the SMBCLK and SMBDATA terminals. They may be accidentally shorted.                                              |
| Both channels always read 0°C, or new limits are not accepted, or ALERT inter- rupts are not seen by the program. | Bad power supply                                           | Check the +9V supply. The board may be parasitically deriving power from the parallel-port logic signals.                            |
| The supply voltage at V CC is too low (<4.5V) but is higher than 1V.                                              | Bad power supply                                           | Check the +9V supply. The board may be parasitically deriving power from the parallel-port logic signals.                            |
| Remote diode always reads 0°C.                                                                                    | DXP and DXN are shorted together, or DXP is shorted to GND | Check remote diode connections.                                                                                                      |
| Remote diode always reads +127°C.                                                                                 | DXP open                                                   | Check remote diode connections.                                                                                                      |
| Remote diode reads a value that is too high.                                                                      | Excess resistance                                          | Check resistance in diode path.                                                                                                      |
| Remote diode reads a value that is too high.                                                                      | Excess capacitance                                         | Check capacitance from DXP to DXN.                                                                                                   |
| Remote diode reads a value that is too high.                                                                      | Poor-quality diode                                         | Use a good-quality, diode-connected, small-signal transistor.                                                                        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Data Logging

Data logging commands are accessed via the pull-down menu labeled 'MAX1617'. Data logging saves temperature data for both channels to a text file that includes a time/date stamp next to each data point. At high conversion rates, not every data point is logged, depending on the speed of the disk drive where the file is being written. To stop data logging, select Logging from the pull-down menu.

## Jumper and Switch Settings

Two jumpers set the MAX1617 slave address. The default address is 0101 010 (ADD0 = ADD1 = high-Z); to  get  other  settings,  jumper  JU1  and/or  JU2  must  be installed  (Figure  1).  JU1  responds  to  ADD0 and JU2 corresponds to ADD1; see Table 8 in the MAX1617 data sheet for a complete list of slave addresses. The MAX1617 must undergo a power-on reset for the new address to become effective.

A slide switch, SW1, is provided as a means to force a power-on reset of the MAX1617. This switch simply disables power to the device.

The STBY hardware standby control input is hard-wired to VCC. In order to apply an external disabling signal to STBY , the narrow PC board trace at JU3 must first be cut. Figure 2 is a component placement guide. Figures 3 and 4 are the PC board layout.

## MAX1617 Temperature Sensor Evaluation Kit

Figure 1.  MAX1617 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## MAX1617 Temperature Sensor Evaluation Kit

## Operating Temperature Range

The operating temperature range of this kit is 0°C to +70°C, although the MAX1617 itself is rated for -55°C to +125°C. The limitation is due to the maximum ratings of  other  components on the board, such as the connector and the logic chips. Specifications aside, the

Figure 2.  MAX1617 EV Kit Component Placement Guide

<!-- image -->

Figure 3.  MAX1617 EV Kit PC Board Layout-Component Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

- 4 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600
- © 1998 Maxim Integrated Products

board can tolerate -55°C to +125°C temperatures. To facilitate testing the MAX1617 in a temperature chamber, cut the PC board along the dotted line and attach wires between the five terminals along the break. Thus, the MAX1617 can be heated or cooled without the parallel cable or interface in the chamber.

Figure 4.  MAX1617 EV Kit PC Board Layout-Solder Side

<!-- image -->