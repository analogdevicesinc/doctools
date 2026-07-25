<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX1617A Temperature Sensor Evaluation Kit

## General Description

The MAX1617A evaluation kit (EV kit) is a demonstration platform for the MAX1617A temperature-sensor IC. It monitors both the junction temperature of the IC and the temperature of a remote (external) diode-connected transistor, and converts these temperatures to 8-bit, 2-wire serial data. A 2N3904 remote temperature-sensor transistor comes soldered to the board in a SOT23 package, but for more realistic experiments, it can easily be removed and connected through a twisted pair to the DXP and DXN terminals.

The EV kit is designed to be connected to a standard IBM-compatible PC parallel printer port. Signals from the parallel port are converted to open-drain SMBus™ clock and data by a 74HC05 logic chip on the board. An onboard MAX1615 linear regulator steps down the unregulated DC input to 5V to power the glue logic, the MAX1617A, and the SMBus pullup resistors.

The software runs under Windows™ 95, 98, or 2000. This user-friendly program is menu-driven and offers a graphic user interface with control buttons and numeric data displays. Note: Windows 2000 requires the installation  of  a  driver;  refer  to  Win2000.pdf  or  Win2000.txt located on the diskette.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                              |
|---------------|-------|------------------------------------------|
| C1, C11, C13  |     3 | 0.1µF, X7R ceramic capacitors            |
| C2            |     1 | 2200pF, X7R ceramic capacitor            |
| C12           |     1 | 4.7µF, 10V tantalum capacitor            |
| J1            |     1 | DB25 male right-angle connector          |
| JU1, JU2      |     2 | 3-pin headers                            |
| Q1            |     1 | NPN transistor On Semiconductor MMBT3904 |
| R1            |     1 | 6-pin SIP socket strip                   |
| R1            |     1 | 10k Ω , 6-pin SIP resistor pack          |
| R2            |     1 | 200 Ω , 5% resistor                      |
| R11, R12      |     2 | 4.7k Ω , 5% resistors                    |
| R13, R14, R15 |     3 | 47k Ω , 5% resistors                     |
| SW1           |     1 | Slide switch, 0,150" pitch               |
| U1            |     1 | MAX1617AMEE                              |
| U11           |     1 | MAX1615EUK SOT top mark = ABZD           |
| U12           |     1 | 74HCT05 open-drain hex inverter          |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ♦ Measures and Displays Sensor Temperature
- ♦ Simultaneously Monitors Package and a Remote Sensor
- ♦ Programs Alarms, Configuration, and Rate
- ♦ Operating Temperature Ranges -55°C to +125°C (remote sensor) 0°C to +70°C (board)
- ♦ Easy to Use
- ♦ Includes: Windows 95/98/2000 Software, Demo PC Board, 3.5 in. Floppy Disk

## Ordering Information

| PART          | TEMP RANGE   | IC PACKAGE   |
|---------------|--------------|--------------|
| MAX1617AEVKIT | 0°C to +70°C | 16 QSOP      |

## Quick Start

## Recommended Equipment

- A computer running Windows 95, 98, or 2000 ( Note: Windows 2000 requires the installation of a driver; refer to Win2000.pdf or Win2000.txt located on the diskette.)
- Parallel printer cable, straight-through 25-pin maleto-female type
- DC power supply, 9V at 50mA

## Procedure

The MAX1617A EV kit is fully assembled and tested. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Set up the hardware. Connect the parallel cable to the computer port and to the EV kit board (or else simply plug the board directly into the port without the cable). The parallel port is typically labeled LPT or  PRINTER. Adjust the power supply to 9VDC and connect it to the POS9 and ground terminals on the EV kit. Do not apply voltages higher than 28V.

Windows is a trademark of Microsoft Corp. SMBus is a trademark of Intel Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

## MAX1617A Temperature Sensor Evaluation Kit

- 2) Install  the  software.  The  MAX1617A.EXE software can be run from the floppy or from a hard drive. Simply use the Windows program manager to run the program. Another autodetect routine attempts to find the MAX1617A by cycling through the nine possible addresses.

After the parallel port and address are set up, the userinterface panel appears. The MAX1617A is now operating in its default power-on-reset (POR) mode, auto-converting at a 0.25Hz rate. The display shows the current temperature for both remote and local channels.

## Detailed Description

## User-Interface Panel

The user interface is easy to operate; use the mouse, or press the Tab key to navigate with the arrow keys. Each of  the  buttons  corresponds to bits in the command, conversion-rate, and configuration bytes. Clicking on them generates the correct SMBus write operation to update the internal registers. The program continually polls  the  device  for  new  temperature  data  and  status, and alerts at a rate faster than the fastest conversion rate.  To  change the THIGH and TLOW alarm-threshold comparison registers, select the appropriate data field and type in the new value. Pressing Enter after typing in the new values updates the internal registers.

To make single-shot conversions, click the Stop button under Configuration, and then click on the Measure Now button. Single-shot conversions can also be performed while the device is auto-converting. The singleshot command overrides the automatic conversion. After the single shot is complete, the device returns to automatic operation.

If  an  interrupt  condition  is  generated,  typically  by  the temperature crossing one of the alarm threshold levels, a message appears in the alert box: 'ALERT! INT = LOW'. To clear the interrupt, first eliminate the condition that caused it (typically by resetting the alarm threshold) and then click on Read Alert. This action reads the Alert Response address, returns the value of the current MAX1617A slave address, and clears the interrupt.

## Simple SMBus Commands

There are two methods for communicating with the MAX1617A: via the normal user-interface panel, or via the simple SMBus commands available from the SMBus pulldown menu. To stop normal user-interface execution so that it does not override the manually set values, turn off the update timer that slaves the program  to  the  conversion  rate  by  clicking  the Automatically Update Displays button.

Note that in places where the slave address asks for an 8-bit  value,  it  must  be  the  7-bit  slave  address  of  the MAX1617A as determined by ADD0 and ADD1 with the last LSB bit always set to one.

## Data Logging

Data logging commands are accessed via the pulldown menu labeled 'MAX1617A'. Data logging saves temperature data for both channels to a text file that includes a time/date stamp next to each data point. At high conversion rates, not every data point is logged, depending on the speed of the disk drive where the file is  being  written.  To  stop  data  logging,  select  Logging from the pull-down menu.

## Jumper and Switch Settings

Two jumpers set the MAX1617A slave address. The default address is 0101 010 (ADD0 = ADD1 = high-Z); to  get  other  settings,  jumper  JU1  and/or  JU2  must  be installed  (Figure  1).  JU1  responds to ADD0 and JU2 corresponds to ADD1; see Table 8 in the MAX1617A data sheet for a complete list of slave addresses. The MAX1617A must undergo a power-on reset for the new address to become effective.

A slide switch, SW1, is provided as a means to force a power-on reset of the MAX1617A. This switch simply disables power to the device.

The STBY hardware standby control input is hard-wired to VCC. In order to apply an external disabling signal to STBY , the narrow PC board trace at JU3 must first be cut. Figure 2 is a component placement guide. Figures 3 and 4 are the PC board layout.

## Operating Temperature Range

The operating temperature range of this kit is 0°C to +70°C, although the MAX1617A itself is rated for -55°C to +125°C. The limitation is due to the maximum ratings of other components on the board, such as the connector and the logic chips. Specifications aside, the board can tolerate -55°C to +125°C temperatures. To facilitate testing  the  MAX1617A in a temperature chamber, cut the PC board along the dotted line and attach wires between the five terminals along the break. Thus, the MAX1617A can be heated or cooled without the parallel cable or interface in the chamber.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1617A Temperature Sensor Evaluation Kit

Table 1. Troubleshooting Guide

| SYMPTOM                                                                                                         | POSSIBLE PROBLEM                                           | SOLUTION                                                                                                                              |
|-----------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| No SMBus Hardware Detected message                                                                              | Bad connections                                            | Check the parallel cable. If it is a straight-through type, try a different cable or connect directly to the port with no cable.      |
| No SMBus Hardware Detected message                                                                              | Power supply                                               | Check the supply voltage setting for correct polarity. Use a DMM to check the voltage directly at the board.                          |
| Question marks displayed in status and temperature data fields                                                  | No MAX1617A connected                                      | Check the connections to the device. The SMBus interface is working, but the MAX1617A is not. Check the position of the slide switch. |
| SMB Clock Stuck Low or SMB Data Stuck Low message                                                               | Short circuit                                              | Use a DMM to monitor the SMBCLK and SMBDATA terminals. They may be accidentally shorted.                                              |
| Both channels always read 0°C, or new limits are not accepted, or ALERT interrupts are not seen by the program. | Bad power supply                                           | Check the 9V supply. The board may be parasitically deriving power from the parallel-port logic signals.                              |
| The supply voltage at VCC is too low (<4.5V) but is higher than 1V.                                             | Bad power supply                                           | Check the 9V supply. The board may be parasitically deriving power from the parallel-port logic signals.                              |
| Remote diode always reads 0°C.                                                                                  | DXP and DXN are shorted together, or DXP is shorted to GND | Check remote diode connections.                                                                                                       |
| Remote diode always reads +127°C.                                                                               | DXP open                                                   | Check remote diode connections.                                                                                                       |
| Remote diode reads a value that is too high.                                                                    | Excess resistance                                          | Check resistance in diode path.                                                                                                       |
| Remote diode reads a value that is too high.                                                                    | Excess capacitance                                         | Check capacitance from DXP to DXN.                                                                                                    |
| Remote diode reads a value that is too high.                                                                    | Poor-quality diode                                         | Use a good-quality, diode-connected, small-signal                                                                                     |

## Component Suppliers

| SUPPLIER         | PHONE        | FAX          | WEBSITE        |
|------------------|--------------|--------------|----------------|
| On Semiconductor | 602-244-6600 | 602-244-4545 | www.onsemi.com |
| Sprague          | 402-563-6866 | 402-563-6296 | www.vishay.com |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1617A Temperature Sensor Evaluation Kit

Figure 1.  MAX1617A EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1617A Temperature Sensor Evaluation Kit

<!-- image -->

Figure 2.  MAX1617A EV Kit Component Placement Guide

<!-- image -->

Figure 3.  MAX1617A EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1617A Temperature Sensor Evaluation Kit

Figure 4.  MAX1617A EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

© 2002 Maxim Integrated Products