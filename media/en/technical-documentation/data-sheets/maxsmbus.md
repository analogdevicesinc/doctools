<!-- lastmod 2022-08-04 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

MAXSMBus is an interface between an IBM-compatible PC  and  System  Management  Bus  (SMBus™)compatible serial-interface devices such as temperature monitors, voltage regulators, or A/D converters (ADCs). The MAXSMBus interface board is connected between the PC parallel port and the device under test, converting parallel data into 2-wire, open-drain serial data. The board is provided for use with selected Maxim products and is not intended to replace commercially available SMBus hardware. MAXSMBus is shipped with a companion EV kit board, including all relevant software.

Note that the MAXSMBus board, combined with a PC, is  intended only for the functional evaluation of Maxim SMBus-interfaced devices. The PC functions as the only bus master, and does not yield to any other SMBus master. The SMBus emulation system is not designed to meet all of the SMBus specifications.

## MAXSMBus Interface Board \_\_\_\_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ \_ Component List

| DESIGNATION        |   QTY | DESCRIPTION                         |
|--------------------|-------|-------------------------------------|
| C1, C2, C3         |     3 | 0.1µF ceramic capacitors            |
| C4-C7, C9          |     5 | 3.3µF, 20V tantalum capacitors      |
| C8                 |     1 | 2.2µF, 35V tantalum capacitor       |
| D1                 |     1 | 1N4692 zener diode, 6.8V            |
| D2                 |     1 | 1N4688 zener diode, 4.7V            |
| D3                 |     1 | 1N4148 small-signal diode           |
| J1                 |     1 | DB25 right-angle plug               |
| J2                 |     0 | Not installed                       |
| P1                 |     1 | 2x10 right-angle male header        |
| R1, R2, R3, R8-R11 |     7 | 47k Ω ±5% resistors                 |
| R4-R7              |     4 | 4.7k Ω ±5% resistors                |
| U1                 |     1 | 74HCT05 hex open-collector inverter |
| U2                 |     1 | 74HCT04 hex inverter                |
| U3                 |     1 | 74HCT08 quad AND gate               |
| U4                 |     1 | 74HCT74 dual D flip-flop            |
| U5                 |     1 | +5V, 100mA regulator LM78L05ACM     |
| U6                 |     1 | MAX865EUA (8-pin µMAX)              |
| U7                 |     1 | MAX367CWN (18-pin SO)               |
| NONE               |     1 | PC board                            |

SMBus is a trademark of Intel Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ♦ SMBus-Compatible 2-Wire Interface
- ♦ SMBus Suspend Output
- ♦ Two SMBus Alert Inputs
- ♦ Overvoltage Fault Protection
- ♦ PC Parallel Port Interface

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART     | BOARD TYPE                        |
|----------|-----------------------------------|
| MAXSMBus | Companion Board for SMBus EV Kits |

## \_\_\_MAXSMBus Functionality Check

Follow these steps to verify that the MAXSMBus interface board is functioning properly. All necessary software is supplied on a disk with the companion EV kit. Instructions for  operating the software are included in the EV kit manual.

- 1) Connect a +9VDC supply (+7V minimum, +30V maximum) to the MAXSMBus interface board at the terminals labeled POS9 and GND in the lower left corner of the board.
- 2) Use a digital voltmeter to verify that the oval pad labeled POS5 is +5V (+4.75V minimum, +5.25V maximum). Also verify that the pads labeled SBDAT1, SBCLK1, SBSUS1, ALERT1, and ALERT2 are above +4V.
- 3) If these DC voltages are correct, MAXSMBus passes the functionality test.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAXSMBus interface board provides all of the interface signals necessary to interface an IBM PCcompatible computer with an SMBus-compliant device. A DB25 right-angle plug connects to the computer (Table 1). The companion board plugs into a 20-pin dual-row right-angle header at the edge of the board (Table 2). Alternatively, connection can be made by soldering wires to the oval pads as appropriate. This allows the companion board to be placed in an environmental chamber for evaluation over temperature.

Refer to the documentation of the companion Maxim EV kit for quick start and operating instructions.

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## 2-Wire Interface Board

## Power Supply

The interface board is powered by a 78L05 linear regulator.  The  companion board can draw about 20mA of +5V power through the circuit protector. Companion boards that require more power must provide their own regulator. The unregulated input to the 78L05 is available on the right-angle header.

## Fault-Protection Circuitry

Overvoltage fault protection is provided by a MAX367 fault  protector (U7). If any of the SMBus interface signals exceed the MAX367's power-supply rails, the MAX367 increases its resistance to prevent damage to the user's computer. A MAX865 dual charge pump (U6) and two zener diodes (D1 and D2) provide +7V and -3V supplies to the MAX367, thus allowing 0 and +5V signals to pass with a nominal resistance of 100 Ω .

## Bus Driving Circuitry

A 74HCT05 open-drain inverter (U1) is used to pull down the SMBus interface signals. The 74HCT08 (U3), 74HCT74 (U4), and 74HCT04 (U2) buffer the signal to the IBM PC and provide the capability to mask the ALERT interrupts, detect an externally generated start condition, and capture data sent by an external bus master. Interface connections are listed in Table 1 and Table 2.

## Bus Monitoring Circuitry

Flip-flop U4A detects the start condition (falling edge of SMBDATA when SMBCLK is high). Flip-flop U4B detects the falling SMBCLK edge when enabled, and U1F holds SMBCLK low until the software releases it. To advance to the next data bit, the software uses U1A to assert and then release SMBCLK. A logic high at the input of U1A also resets flip-flop U4B. Because the IBM PC parallel port has a limited number of inputs, the start-detect circuit and the two alert inputs share a single interrupt input. The source of the interrupt is distinguished using U3A, U3B, and U3C.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Troubleshooting Guide

| SYMPTOM                        | CAUSE                                                              | SOLUTION                                                                                                                                                                                                                                                                                              |
|--------------------------------|--------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Can't Find the Interface Board | Board not connected to parallel printer port                       | Verify that the cable is a 25-pin parallel port I/O extension cable with a plug on one end and a socket on the other end. Verify that the cable is connected to a printer port, not a floppy disk, SCSI, or serial communications port.                                                               |
| Clock or Data Stuck Low        | Board is connected to cor- rect port, but SMBus is not functioning | Check power connections on the interface board. Check clock and data signal connections. Try operating the interface board without the companion Maxim evaluation kit-this should cause the address-not-acknowledged symptom described below.                                                         |
| Address Not Acknowledged       | SMBus is OK, but no response at expected SMBus address             | Verify that the companion board is connected to the MAXSMBus interface board. Verify that the companion board is powered. If the companion offers a choice of addresses, confirm that the soft- ware and hardware addresses match. Some devices only read the address select pins at device power-up. |
| Erratic Operation              | Conflict with local printer driver                                 | Disable print manager in the Windows printer control panel. Disable printer driver.                                                                                                                                                                                                                   |
| Erratic Operation              | Operating system conflict                                          | 1) Use computer with commercially available BIOS. 2) Make a bootable floppy disk, remove unnecessary device dri- vers from A:config.sys, and boot system from floppy.                                                                                                                                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Table 1. DB25 Connector Signals

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

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 2-Wire Interface Board

## 2-Wire Interface Board

Table 2. Right-Angle Header P1 Signals

|   PIN | NAME           | FUNCTION                                                                |
|-------|----------------|-------------------------------------------------------------------------|
|     1 | DUT +5V        | +5V at 1mA power supply to Maxim companion board                        |
|     2 | GND            | Signal ground return                                                    |
|     3 | DUT SDA        | SMBDATA interface signal                                                |
|     4 | GND            | Signal ground return                                                    |
|     5 | GND            | Signal ground return                                                    |
|     6 | GND            | Signal ground return                                                    |
|     7 | DUT SCL        | SMBCLK interface signal                                                 |
|     8 | GND            | Signal ground return                                                    |
|     9 | DUT SMBSUS     | SMBSUS interface signal                                                 |
|    10 | GND            | Signal ground return                                                    |
|    11 | DUT SMBALERT   | Primary ALERT interface signal                                          |
|    12 | GND            | Signal ground return                                                    |
|    13 | DUT ALERT2     | Secondary ALERT interface signal                                        |
|    14 | GND            | Signal ground return                                                    |
|    15 | SPARE OUTPUT A | Spare output from pin 1 of the DB25 connector                           |
|    16 | GND            | Signal ground return                                                    |
|    17 | SPARE OUTPUT B | Spare output from pin 14 of the DB25 connector                          |
|    18 | GND            | Signal ground return                                                    |
|    19 | GND            | Signal ground return                                                    |
|    20 | RAW POWER      | Unregulated, unprotected power-supply input to MAXSMBus interface board |

Note: Odd-numbered pins are on the outer row. Even-numbered pins are on the inner row. All right-angle header signals pass through the MAX367 circuit protector, except 20.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 2-Wire Interface Board

Figure 1a. MAXSMBus Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 2-Wire Interface Board

Figure 1b. MAXSMBus Schematic (continued)

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAXSMBus Component Placement GuideComponent Side

<!-- image -->

## 2-Wire Interface Board

Figure 3. MAXSMBus PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 2-Wire Interface Board

Figure 4. MAXSMBus PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

<!-- image -->