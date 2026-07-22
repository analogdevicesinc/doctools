<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX1662 Evaluation Kit/Evaluation System

## General Description

The MAX1662 evaluation system (EV system) consists of a MAX1662 evaluation kit (EV kit) and a companion Maxim SMBus™ Interface Board. The MAX1662 EV kit is  an  assembled and tested PC board that demonstrates the MAX1662 load-switch controller.

In  addition  to  controlling  power-plane  load  switches, the MAX1662 is useful for many different SMBus I/O expansion tasks, such as controlling voltage regulators or detecting the state of mechanical switches.

The Maxim SMBus interface board (MAXSMBUS) allows an IBM-compatible personal computer to use its parallel  port  to  emulate  an  Intel  System  Management Bus (SMBus)™ two-wire interface. Windows 3.1/ Windows 95™ software provide a user-friendly interface to  exercise the MAX1662's features. The program is menu-driven and offers a graphics interface with control buttons and status display.

The MAX1662 EV system can also be used to evaluate the MAX1661 or MAX1663. Contact the factory to order a free MAX1661EUB or MAX1663EUB sample.

Order the MAX1662EVSYS for complete IBM PC-based evaluation of the MAX1662.

Order the MAX1662EVKIT if you already have an SMBus interface.

## MAX1662EVKIT \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION      |   QTY | DESCRIPTION                                                    |
|------------------|-------|----------------------------------------------------------------|
| C1, C2, C3       |     0 | Not installed                                                  |
| C4               |     1 | 0.1µF ceramic capacitor                                        |
| J1               |     1 | 2 x 10 right-angle female receptacle                           |
| JU1              |     1 | 3-pin jumper                                                   |
| LED1, LED2, LED3 |     3 | Red light-emitting diodes                                      |
| R1, R4, R7       |     3 | 10k Ω , 5% resistors                                           |
| R2, R5, R8       |     3 | 200k Ω , 5% resistors                                          |
| R10              |     1 | 100 Ω , 5% resistor                                            |
| R3, R6, R9       |     3 | 1k Ω , 5% resistors                                            |
| P1, P2, P3       |     3 | Logic-level, P-channel MOSFETs International Rectifier IRF7406 |
| SW1              |     1 | Slide switch                                                   |
| U1               |     1 | Maxim MAX1662EUB                                               |
| None             |     1 | 3 1/2" software disk 'MAX1662 Evaluation Kit'                  |

SMBus is a trademark of Intel Corp. Windows is a trademark of Microsoft Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

Features

- ' Controls up to Three Load Switches Independently
- ' Configurable for Three General-Purpose Input/Outputs (GPIO)
- ' Includes Three 30V, 4A P-Channel MOSFET Switches
- ' SMBus Compatible
- ' Easy-to-Use Menu Driven Software
- ' Assembled and Tested Surface-Mount Board

## Ordering Information

| PART         | INTERFACE TYPE   | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX1662EVKIT | User-Supplied    | 10 µMAX      |
| MAX1662EVSYS | Windows Software | 10 µMAX      |

Note:  The MAX1662 software can be used only with the complete evaluation system MAX1662EVSYS, which includes the MAXSMBUS interface board and the MAX1662EVKIT.

## MAX1662EVSYS \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION   |   QTY | DESCRIPTION   |
|---------------|-------|---------------|
| None          |     1 | MAX1662EVKIT  |
| None          |     1 | MAXSMBUS      |

## Component Suppliers

| SUPPLIER*               | PHONE          | FAX            |
|-------------------------|----------------|----------------|
| International Rectifier | (310) 322-3331 | (310) 322-3332 |

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 408-737-7600 ext. 3468.

## MAX1662 Evaluation Kit/Evaluation System

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

## Required Equipment

Before you begin, you will need the following equipment:

- An IBM PC-compatible computer capable of running Windows 3.1 or Windows 95
- A spare parallel printer port (this is a 25-pin socket on the back of the computer)
- A standard 25-pin, straight-through, male-to-female cable to connect the computer's parallel port to the Maxim SMBus interface board
- A small DC power supply capable of supplying 7V to 20V at 100mA

## Procedure

- 1) Carefully connect the boards by aligning the 20-pin connector of the MAX1662 EV kit with the 20-pin header of the MAXSMBUS interface board. Gently press them together. The two boards should be flush against each other.
- 2) Make sure switch SW1 on the MAX1662 EV kit is in the 'off' position.
- 3) Connect a +7V to +20V DC power supply to the pads labeled POS9 and GND1 of the SMBus interface board.
- 4) Make sure JU1 is set to the 1-2 position.
- 5) Connect a cable from the computer's parallel port to  the  SMBus interface board. Use a straightthrough 25-pin female-to-male cable. To avoid damaging the EV kit or your computer, do not use a  25-pin  SCSI port or any other connector that is physically similar to the 25-pin parallel printer port.
- 6) Run the MAX1662.EXE software program from either the floppy drive or the hard drive. Simply use the Windows Program Manager to run the program. If desired, you may use the INSTALL.EXE program to  copy  the  files  and  create  icons  for  them  in  the Windows 3.1 Program Manager (or the Windows 95 Start Menu). An uninstall program is included with the software. Simply click on the UNINSTALL icon to  remove the MAX1662 EV kit software from the hard drive.
- 7) Turn the EV kit on by moving SW1 to the 'on' position.
- 8) Start the MAX1662 program by opening its icon in the Program Manager (or Start Menu).
- 9) When the program prompts you to do so, select the correct parallel port. An auto-detect routine identi-

fies the port to which the EV kit is connected, and selects it  as  the  default  choice  by  highlighting  it. Verify that the correct port is highlighted; then select 'OK'.

- 10) Observe as the program automatically detects the address of the MAX1662 and starts the main program.

## Detailed Description \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_of Software

The software allows you to select between the IC's normal and suspend-mode registers. Configuration boxes allow for all interrupts (except Thermal Shutdown) to be individually  masked or unmasked and the three MOSFET switches to be independently switched on or off. A status box indicates the states of the I/O pins and is automatically updated several times a second. The automatic update feature can be turned off and the status updated manually.

Note:  In the following sections, words in bold face are user-selectable features in the software.

## Main Display

The Normal Configuration and Suspend Configuration boxes allow the user to configure the desired IC register settings.

The Normal Register is  selected  at  program start-up. To make changes to the suspend-mode register, click on Suspend Register with the mouse or use the TAB and arrow keys to navigate until the selection is highlighted.

Inside the configuration boxes are check-boxes that allow the interrupts to be masked or unmasked and the loads to be toggled on or off.

Changes to the configurations can be made only to the register  that  is  currently  highlighted.  The  changes  are sent to the IC only after the Write Config button is selected. Switching to the other register before selecting Write Config results in the reset of any changes to the previous condition.

The Status Box shows the state of the I/O pins and indicates a thermal shutdown. At program start-up the status  box  is  automatically  updated.  This  feature  can  be turned on or off with the Automatically Update Status check-box.

The Alert Box indicates if an interrupt occurred. When an interrupt condition is generated, a message appears in the alert box: 'ALERT! INT = LOW'. The alert condition  will  last  until Read Alert is  selected.  This  action reads the alert response address, returns the value of the MAX1662 address, and clears the interrupt.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1662 Evaluation Kit/Evaluation System

Note:  The seven most significant bits of the alert box are the address bits. The least significant bit is the read/write status bit.

The Reset button will set the MAX1662 and the software to a power-on reset state. If the address is changed on the MAX1662, selecting Reset will  also  find  the  new address. If in doubt, select the reset button.

## SMBus Menu

The SMBus menu allows individual SMBus operations such as Read Byte and Write Byte to be performed. When  using  SMBus  menu  operations,  turn  off Automatically Update Status to prevent errors.

The SMBus dialog boxes accept numeric data in binary,  decimal, or hexadecimal. Hexadecimal numbers must be prefixed by $ or 0x. Binary numbers must be exactly eight digits.

## Detailed Description \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_of Hardware

The MAX1662 EV kit provides a proven PC board layout to  facilitate  evaluation  of  the  MAX1662. It requires a power supply and appropriate timing signals to operate.

The Maxim SMBus interface board converts signals from the parallel port of a computer to open-drain SMBus clock and data. It also interfaces the alert ( ALERT) and suspend ( SMBSUS) pins to the computer and supplies power to the MAX1662 EV kit.

The MAX1662 EV kit is configured with three P-channel logic-level MOSFET switches. MOSFET P1 is controlled by I/O1 of the MAX1662, P2 by I/O2, and P3 by I/O3. For evaluation purposes each MOSFET drives an LED; however, an external load can be used in place of the LEDs. See the section Driving an External Load.

The MAX1662 EV kit is initially set up to switch 5V at 20mA to power three LEDs. Each MOSFET can be reconfigured.  For  example,  disconnecting  the MOSFETs from the +5V supply isolates them from each other,  making it  possible to switch a different voltage with each one. For switching up to 15V, follow the directions under Switching Voltages Higher than 5V. To switch up to 28V, refer to the section Switching 28V.

## Jumper Settings

The 3-pin header JU1 controls the address (pin 6) on the IC (Table 1).

<!-- image -->

## Table 1.  JU1 Shunt Settings for SMBus Address

| JUMPER   | STATE   | ADDRESS   | ADDRESS   | ADDRESS   |
|----------|---------|-----------|-----------|-----------|
| JUMPER   | STATE   | MAX1661   | MAX1662   | MAX1663   |
| JU1      | GND     | 0100000   | 0100001   | 0100010   |
| JU1      | Open    | 0111100   | 0111101   | 0111110   |
| JU1      | VCC     | 1001000   | 1001001   | 1001010   |

Note:  When changing JU1's setting, move switch SW1 off, then on. Also note that the MAX1662 reads the address select pin at device power-up only.

## Table 2.  External Load Configuration

| I/O   | MOSFET   | CONNECT LOAD TO PADS   | CUT TRACE   |
|-------|----------|------------------------|-------------|
| I/O1  | P1       | D1-GND                 | JU4         |
| I/O2  | P2       | D2-GND                 | JU7         |
| I/O3  | P3       | D3-GND                 | JU10        |

Table 3.  External Power Supply Configuration

| I/O   | MOSFET   | APPLY VOLTAGE TO PADS   | CUT TRACE   |
|-------|----------|-------------------------|-------------|
| I/O1  | P1       | S1-GND                  | JU3         |
| I/O2  | P2       | S2-GND                  | JU6         |
| I/O3  | P3       | S3-GND                  | JU9         |

## Driving an External Load

To configure an output to drive an external load, remove the LED from the circuit (Table 2).

Note:  The 5V supplied by the Maxim SMBus interface board is limited to approximately 20mA. If more current is needed, follow the directions listed in Switching Voltages Higher than 5V, and use an external power supply.

## Switching Voltages Higher than 5V

To configure an output to switch 15V across the loads, isolate the MOSFETs from the +5V supply and apply an external voltage from MOSFET source to GND (Table 3).

Note:  The IRF7406 MOSFET has a 20V gate-to-source voltage limit.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1662 Evaluation Kit/Evaluation System

## Switching Voltages Lower than 5V

To switch lower voltages, such as 3.3V supply, replace the IRF7406 MOSFETs with devices having lower threshold voltages (such as the IRF7404). In addition, isolate  the  MOSFET source connections from the +5V supply (Table 3).

## Switching 28V

The MAX1662 EV kit can switch 28V if a voltage divider is  used to prevent the gate-to-source voltage from exceeding the MOSFET's rating. Follow the procedure in Switching Voltages Higher than 5V to isolate the

Table 4.  Jumper Function Table

| JUMPER                     | STATE                   | FUNCTION                            |
|----------------------------|-------------------------|-------------------------------------|
| JU1                        | 1-2*                    | Address pin connected to V CC .     |
| JU1                        | 2-3                     | Address pin connected to GND.       |
| JU1                        | Open                    | Address pin floating.               |
| JU2                        | Open                    | Configure for GPIO.                 |
| JU2                        | Closed (Default Trace)* | Use supplied MOSFET.                |
| JU3                        | Open                    | Use a higher voltage on the MOSFET. |
| JU3                        | Closed (Default Trace)* | Drive MOSFET with the boards 5V.    |
| JU4                        | Open                    | Drive an external load.             |
| JU4                        | Closed (Default Trace)* | Use LED1.                           |
| JU5                        | Open                    | Configure for GPIO.                 |
| JU5                        | Closed (Default Trace)* | Use supplied MOSFET.                |
| JU6                        | Open                    | Use a higher voltage on the MOSFET. |
| JU6                        | Closed (Default Trace)* | Drive MOSFET with the boards 5V.    |
| JU7                        | Open                    | Drive an external load.             |
| JU7                        | Closed (Default Trace)* | Use LED2.                           |
| JU8                        | Open                    | Configure for GPIO.                 |
| JU8                        | Closed (Default Trace)* | Use supplied MOSFET.                |
| JU9                        | Open                    | Use a higher voltage on the MOSFET. |
| JU9                        | Closed (Default Trace)* | Drive MOSFET with the boards 5V.    |
| default jumper state. JU10 | Open                    | Drive an external load.             |
| default jumper state. JU10 | Closed (Default Trace)* | Use LED3.                           |

*Indicates default jumper state.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

MOSFETs from the +5V supply. To use I/O1, cut the trace across JU2 and solder an 8.2k Ω resistor  in  its place. For I/O2 or I/O3, cut the trace across JU5 or JU8, respectively, and solder in a 8.2k Ω resistor.

Note:  The MAX1662 has an absolute maximum rating of 30V between I/O and GND.

## Configuring the Board for GPIO

To configure the board for general-purpose I/O (GPIO), isolate  the  MAX1662's I/O pins by cutting PC board traces JU2, JU5, and JU8 and by using the pads labeled I/O1, I/O2, or I/O3.

<!-- image -->

Figure 1.  MAX1662 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5

## MAX1662 Evaluation Kit/Evaluation System

Figure 2.  MAX1662 EV Kit Component Placement Guide

<!-- image -->

Figure 3.  MAX1662 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1662 Evaluation Kit/Evaluation System

Figure 4.  MAX1662 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1662 Evaluation Kit/Evaluation System

NOTES

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

© 1998 Maxim Integrated Products

<!-- image -->

## Two-Wire Interface Board

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

MAXSMBus is an interface between an IBM-compatible PC  and  System  Management  Bus  (SMBus)™compatible serial-interface devices such as temperature monitors, voltage regulators, or A/D converters (ADCs). The MAXSMBus interface board is connected between the PC parallel port and the device under test, converting parallel data into two-wire, open-drain serial data. The board is provided for use with selected Maxim products and is not intended to replace commercially available SMBus hardware. MAXSMBus is shipped with a companion EV kit board, including all relevant software.

## Maxim SMBus Interface Board \_\_\_\_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ Component List

| DESIGNATION          |   QTY | DESCRIPTION                        |
|----------------------|-------|------------------------------------|
| C1, C2, C3           |     3 | 0.1µF ceramic capacitors           |
| C4-C9                |     6 | 3.3µF, 25V tantalum capacitors     |
| D1                   |     1 | 1N5235B zener diode, 6.8V          |
| D2                   |     1 | 1N5229B zener diode, 4.3V          |
| D3                   |     1 | 1N4148 small signal diode          |
| J1                   |     1 | DB25 right angle plug              |
| J2                   |     1 | Not installed                      |
| P1                   |     1 | 2 x 10 right angle male header     |
| R1, R2, R3, R10, R11 |     5 | 47k Ω , 5% resistors               |
| R4-R7                |     4 | 4.7k Ω , 5% resistors              |
| R8, R9               |     2 | 1k Ω , 5% resistors                |
| U1                   |     1 | 74HC05 hex open-collector inverter |
| U2                   |     1 | 74HC04 hex inverter                |
| U3                   |     1 | 74HC08 quad AND gate               |
| U4                   |     1 | 74HC74 dual D flip-flop            |
| U5                   |     1 | +5V, 100mA regulator, LM78L05ACM   |
| U6                   |     1 | MAX865EUA (8 µMAX)                 |
| U7                   |     1 | MAX367CWN (18 SO)                  |
| NONE                 |     1 | PC board                           |

SMBus is a trademark of Intel Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

- ' SMBus-Compatible Two-Wire Interface
- ' SMBus Suspend Output
- ' Two SMBus Alert Inputs
- ' Overvoltage Fault Protection
- ' PC Parallel Port Interface

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART     | BOARD TYPE                        |
|----------|-----------------------------------|
| MAXSMBus | Companion Board for SMBus EV Kits |

## \_\_\_MAXSMBus Functionality Check

Follow these steps to verify that the MAXSMBus interface board is functioning properly. All necessary software is supplied on a disk with the companion EV kit. Instructions for  operating the software are included in the EV kit manual.

- 1) Connect a +9V DC supply (+7V minimum, +20V maximum) to the MAXSMBus interface board at the terminals labeled 'POS9' and 'GND' in the lower left corner of the board.
- 2) Use a digital voltmeter to verify that the oval pad labeled 'POS5' is +5V (+4.75V minimum, +5.25V maximum). Also verify that the pads labeled 'SBDAT1,' 'SBCLK1,' 'SBSUS1,' 'ALERT1,' and 'ALERT2' are above +4V.
- 3) If these DC voltages are correct, MAXSMBus passes the functionality test.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAXSMBus interface board provides all of the interface signals necessary to interface an IBM PCcompatible computer with an SMBus-compliant device. A DB25 right-angle plug connects to the computer (Table 1). The companion board plugs into a 20-pin dual-row right-angle header at the edge of the board (Table 2). Alternatively, connection can be made by soldering wires to the oval pads as appropriate. This allows the companion board to be placed in an environmental chamber for evaluation over temperature.

Refer to the documentation of the companion Maxim EV kit for quick start and operating instructions.

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 408-737-7600 ext. 3468.

## Two-Wire Interface Board

## Power Supply

The interface board is powered by a 78L05 linear regulator.  The  companion board can draw about 20mA of +5V power through the circuit protector. Companion boards that require more power must provide their own regulator. The unregulated input to the 78L05 is available on the right-angle header.

## Fault Protection Circuitry

Overvoltage fault protection is provided by a MAX367 fault  protector  (U7).  If  any  of  the  SMBus  interface  signals exceed the MAX367's power supply rails, the MAX367 increases its resistance to prevent damage to the user's computer. A MAX865 dual charge pump (U6) and two zener diodes (D1 and D2) provide +7V and -3V supplies to the MAX367, thus allowing 0V and +5V signals to pass with a nominal resistance of 100 Ω .

## Bus Driving Circuitry

A 74HC05 open-drain inverter (U1) is used to pull down the SMBus interface signals. The 74HC08 (U3), 74HC74 (U4), and 74HC04 (U2) buffer the signal to the IBM PC and provide the capability to mask the ALERT interrupts,  detect  an  externally  generated  start  condition, and capture data sent by an external bus master. Interface connections are listed in Table 1 and Table 2.

## Bus Monitoring Circuitry

Flip-flop U4A detects the start condition (falling edge of SMBDATA when SMBCLK is high). Flip-flop U4B detects the falling SMBCLK edge when enabled, and U1F holds SMBCLK low until the software releases it. To advance to the next data bit, the software uses U1A to assert and then release SMBCLK. A logic high at the input of U1A also resets flip-flop U4B. Because the IBM PC parallel port has a limited number of inputs, the start-detect circuit and the two alert inputs share a single interrupt input. The source of the interrupt is distinguished using U3A, U3B, and U3C.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Troubleshooting Guide

| SYMPTOMS                       | CAUSE                                                              | SOLUTION                                                                                                                                                                                                                                                                                              |
|--------------------------------|--------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Can't Find the Interface Board | Board not connected to parallel printer port                       | Verify that the cable is a 25-pin parallel port I/O extension cable with a plug on one end and a socket on the other end. Verify that the cable is connected to a printer port, not a floppy disk, SCSI, or serial communications port.                                                               |
| Clock or Data Stuck Low        | Board is connected to cor- rect port, but SMBus is not functioning | Check power connections on the interface board. Check clock and data signal connections. Try operating the interface board without the companion Maxim evaluation kit-this should cause the address-not-acknowledged symptom described below.                                                         |
| Address Not Acknowledged       | SMBus is OK, but no response at expected SMBus address             | Verify that the companion board is connected to the MAXSMBus interface board. Verify that the companion board is powered. If the companion offers a choice of addresses, confirm that the soft- ware and hardware addresses match. Some devices only read the address select pins at device power-up. |
| Erratic Operation              | Conflict with local printer driver                                 | Disable print manager in Windows printer control panel. Disable printer driver.                                                                                                                                                                                                                       |
| Erratic Operation              | Operating system conflict                                          | 1) Use computer with commercially available BIOS. 2) Make a bootable floppy disk, remove unnecessary device dri- vers from A:config.sys, and boot system from floppy.                                                                                                                                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 1.  DB25 Connector Signals

| PIN   | NAME              | FUNCTION                                                                                                                                                |
|-------|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1     | SPARE OUTPUT A    | Spare output                                                                                                                                            |
| 2     | SMBCLK _ - OUT    | When high, drives SMBCLK signal low                                                                                                                     |
| 3     | SMBDATA _ - OUT   | When high, drives SMBDATA signal low                                                                                                                    |
| 4     | SMBUS_OUT         | When high, drives SMBSUS signal low                                                                                                                     |
| 5     | LOOPBACK          | Loopback connection for port verification                                                                                                               |
| 6     | MASK _ - ALERT1   | When high, allows ALERT1 to trigger INT low                                                                                                             |
| 7     | MASK _ - ALERT2   | When high, allows ALERT2 to trigger INT low                                                                                                             |
| 8     | MASK _ - START    | When high, allows a start condition to trigger INT low                                                                                                  |
| 9     | CAPTURE_ENABLE    | When high, enables slave / bus monitor circuitry. This circuit waits until SMBCLK is pulled low, and then it holds SMBCLK until the software resets it. |
| 10    | INT               | Active low interrupt input                                                                                                                              |
| 11    | SMBDATA _ - IN    | When high, indicates that SMBDATA is low                                                                                                                |
| 12    | SMBCLK _ - IN     | When high, indicates that SMBCLK is low                                                                                                                 |
| 13    | LOOPBACK          | Loopback connection for port verification                                                                                                               |
| 14    | SPARE OUTPUT B    | Spare output                                                                                                                                            |
| 15    | HOLDING _ - CLOCK | When low, indicates that interface board is holding SMBCLK low                                                                                          |
| 16    | UNUSED            | Not used                                                                                                                                                |
| 17    | UNUSED            | Not used                                                                                                                                                |
| 18-25 | GND               | Signal ground return                                                                                                                                    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Two-Wire Interface Board

## Two-Wire Interface Board

Table 2.  Right-Angle Header P1 Signals

|   PIN | NAME           | FUNCTION                                                                |
|-------|----------------|-------------------------------------------------------------------------|
|     1 | DUT +5V        | +5V at 20mA power supply to Maxim companion board                       |
|     2 | GND            | Signal ground return                                                    |
|     3 | DUT SDA        | SMBDATA interface signal                                                |
|     4 | GND            | Signal ground return                                                    |
|     5 | GND            | Signal ground return                                                    |
|     6 | GND            | Signal ground return                                                    |
|     7 | DUT SCL        | SMBCLK interface signal                                                 |
|     8 | GND            | Signal ground return                                                    |
|     9 | DUTSMBSUS      | SMBSUS interface signal                                                 |
|    10 | GND            | Signal ground return                                                    |
|    11 | DUTSMBALERT    | Primary ALERT interface signal                                          |
|    12 | GND            | Signal ground return                                                    |
|    13 | DUTALERT2      | Secondary ALERT interface signal                                        |
|    14 | GND            | Signal ground return                                                    |
|    15 | SPARE OUTPUT A | Spare output from pin 1 of the DB25 connector                           |
|    16 | GND            | Signal ground return                                                    |
|    17 | SPARE OUTPUT B | Spare output from pin 14 of the DB25 connector                          |
|    18 | GND            | Signal ground return                                                    |
|    19 | GND            | Signal ground return                                                    |
|    20 | RAW POWER      | Unregulated, unprotected power-supply input to MAXSMBus interface board |

Note: Odd-numbered pins are on the outer row. Even-numbered pins are on the inner row. All right-angle header signals pass through the MAX367 circuit protector, except 20.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Two-Wire Interface Board

Figure 1.  MAXSMBus Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Two-Wire Interface Board

Figure 1.  MAXSMBus Schematic (continued)

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Two-Wire Interface Board

Figure 2.  MAXSMBus Component Placement Guide

<!-- image -->

Figure 3.  MAXSMBus PC Board Layout-Component Side

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Two-Wire Interface Board

Figure 4.  MAXSMBus PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time. Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time. Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 8 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 8 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

© 1998 Maxim Integrated Products Printed USA is a registered trademark of Maxim Integrated Products. © 1998 Maxim Integrated Products Printed USA is a registered trademark of Maxim Integrated Products. © 1998 Maxim Integrated Products Printed USA is a registered trademark of Maxim Integrated Products.