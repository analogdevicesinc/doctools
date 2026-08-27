<!-- lastmod 2022-08-03 -->
## ABRIDGED EV KIT DATA SHEET

<!-- image -->

## Features

- ♦ Easily Load Code Using Bootstrap Loader and Serial 0 Port (DB-9, J2)
- ♦ Two DB-9 RS-232 Serial Connectors
- ♦ Four Available Serial Ports Two Internal Serial Ports Two Using External UART Device
- ♦ On-Board Power Supply Regulator
- ♦ Header for Smart Card Socket
- ♦ Security Access Module (SAM) Socket
- ♦ Support for LCD Module
- ♦ Pushbutton Switches for Keypad Simulation, Data Entry, and Board Control
- ♦ Board Schematics Included to Provide a Convenient Reference Design

## Ordering Information

| PART       | TEMP RANGE   | DIMENSIONS   |
|------------|--------------|--------------|
| DS5250-KIT | Room         | 16cm x 10cm  |

## Typical Operating Circuit

<!-- image -->

Maxim Integrated Products

1

## General Description

The DS5250 evaluation kit (EV) is a proven platform to conveniently evaluate the capabilities of the DS5250 high-speed secure microcontroller. It contains the microprocessor, 1MB of battery-backed SRAM, 1MB flash memory, a power-supply regulator, two DB-9 serial connectors, and switches and LEDs to  control  and  display  board  operation.  With  the addition  of  a  power  supply  and  an  RS-232  cable connected to a personal computer, the kit provides a completely functional system ideal for evaluating the capabilities of the DS5250.

## Applications

The evaluation board allows the user to easily  load and execute code on the DS5250 processor. The kit is delivered with a customized Keil Software debugger that can be used to debug application code prior to availability of the end  target hardware. Schematic diagrams for the board are also included to provide a convenient reference design (go to www.maxim-ic.com/support).  The  DS5250 processor is ideal for applications requiring a trusted computing environment for private or secret information such as card terminals, PIN pads, access control units, and similar applications.

## Component List

| DESIGNATOR(S)                               | QTY   | DESCRIPTION                                                       | MANUFACTURER/ PART NUMBER                      |
|---------------------------------------------|-------|-------------------------------------------------------------------|------------------------------------------------|
| B1                                          | 1     | 3V, 125mAh Lithium battery                                        | Panasonic CR1632                               |
| C1, C2, C9                                  | 3     | 10 μ F, 16V ceramic capacitors                                    | Panasonic ECJ-3YF1C106Z                        |
| C3-C8, C10-C17, C20, C21, C24-C27, C30, C31 | 22    | 0.1 μ F capacitors                                                | Panasonic ECJ-2VF1C104Z                        |
| C22, C23, C28, C29, C32, C35                | 6     | 100nF ± 10%, 16V capacitors                                       | Panasonic ECJ-2VF1C104Z                        |
| C18, C19, C33, C34                          | 4     | 22pF capacitors                                                   | Panasonic ECJ-2VC1H220J                        |
| J1                                          | 1     | Power barrel connector (2.0mm)                                    | CUI Inc. PJ-002A                               |
| J2, J3                                      | 2     | DB-9 female connectors                                            | Amp/Tyco 745781-4                              |
| J4                                          | 1     | SAM card socket                                                   | Amphenol C707-10M006-0492                      |
| J5, J8-J24                                  | 18    | Header pins (single row, 0.1in spaced) (Only port pins populated) | -                                              |
| J6, J7                                      | 2     | Header pins (double row, 0.1in spaced)                            | -                                              |
| JP1, JP2                                    | 2     | Solder pad jumpers (closed)                                       | -                                              |
| JP3, JP4, JP5                               | 3     | Solder pad jumpers (open)                                         | -                                              |
| Q1                                          | 1     | p-channel MOSFET                                                  | Fairchild NDS8434                              |
| R1, R2, R3                                  | 3     | 10k Ω resistors                                                   | -                                              |
| R4                                          | 1     | 330 Ω resistors                                                   | -                                              |
| R5                                          | 1     | 1M resistor                                                       | -                                              |
| R6, R8                                      | 2     | 1.5k Ω resistors                                                  | -                                              |
| R7                                          | 1     | 10k Ω trim resistor                                               | Panasonic EVN-D2AA03B14                        |
| RN1                                         | 1     | 330 Ω resistor SIP (9)                                            | CTS 770101331                                  |
| RN2                                         | 1     | 1k Ω resistor SIP (9)                                             | CTS 770101102                                  |
| SW1, SW21                                   | 2     | DIP switches x8 CTS208-8                                          | C&K SDA08H1KD                                  |
| SW2-SW20                                    | 19    | SPST pushbuttons                                                  | Omron B3FS-1000                                |
| TP1, TP2, TP3                               | 0     | Unpopulated test points                                           | -                                              |
| U1                                          | 1     | Linear regulator (5 V, 500 mA)                                    | MAX603CSA                                      |
| U2                                          | 1     | Hex inverter                                                      | Fairchild 74VHC04M                             |
| U3                                          | 1     | High-speed secure microprocessor                                  | DS5250F-125                                    |
| U4, U5                                      | 2     | 512k x 8 SRAM, 55ns                                               | Hitachi HM628512BLTT-5{,SL,UL}                 |
| U6                                          | 1     | 1M x 8 flash memory, 55ns                                         | AMD AM29F080B-55E{C,I,E}                       |
| U7, U9, U10                                 | 3     | RS-232 (5 in, 4 out) drivers                                      | MAX213ECWI                                     |
| U8                                          | 1     | Dual external UART                                                | National PC16552D                              |
| U11                                         | 1     | 14 x 1 unpopulated header (for LCD module)                        | Optrex DMC16207 LCD module (16 char x 2 lines) |
| U12                                         | 1     | Inverting octal buffer                                            | Fairchild 74AC540SC                            |
| U13                                         | 1     | LED x10 display (port 1/power)                                    | Lumex SSA-LXB10IW-GF/LP                        |
| U14                                         | 1     | Octal CMOS switch debouncer                                       | MAX6818EAP                                     |
| Y1                                          | 1     | 22.1184MHz socketed crystal                                       | Citizen HC49US22.1184MABJ                      |
| Y2 Y3                                       | 1 1   | 32.768 kHz crystal 18.432MHz socketed crystal                     | ECS ECS-.327-12.5-13 Citizen HC49US18.432MABJ  |

This component list is provided to the customer as an aid in building their own application and the listing of these components  does  not  guarantee  their  suitability  for  a  particular  application.  Any  component  listed  can  be substituted for equivalent product without notice.

## ABRIDGED EV KIT DATA SHEET

## ABRIDGED EV KIT DATA SHEET

Figure 1. DS5250 Evaluation Kit Board

<!-- image -->

## Detailed Description

This EV kit must be used in conjunction with the following documents:

- High-Speed Microcontroller User's Guide (www.maxim-ic.com/HSMUG)
- [DS5250 Data Sheet (www.maxim-ic.com/DS5250)](http://www.maxim-ic.com/DS5250)
- High-Speed Microcontroller User's Guide: DS5250 Supplement (www.maxim-ic.com/DS5250sup)

A  complete  description of the bootstrap loader commands  and  functions  is  located  in the High-Speed Microcontroller User's Guide: DS5250 Supplement .

The  DS5240  and  DS5250  are  high-speed  8051-compatible  microcontrollers  with  strong  cryptographic  features. These devices were designed to meet the security requirements of FIPS-140, Common Criteria, and PCI POS PED Derived Test Requirements. Due to their strong encryption capability, the DS5240 and DS5250 devices and their documentation are subject to the export control laws and regulations of the United States. To receive complete technical  information  on  these  secure  microcontrollers,  contact  the  microcontroller  technical  support  group  at www.maxim-ic.com/support.

The DS5250 evaluation board and all its connectors are defined in the schematics provided in the accompanying documentation disk. However, a short description of the major components of the board follows.

## Memory

Program memory on the evaluation board is contained in two battery-backed 512kB SRAMs, enabled by CE1 and CE2 . Data memory is contained in a 1MB flash memory enabled by CE3N .

## Keypad

The evaluation board incorporates a 4 x 4 keypad, row and column scanned by port 2.

## I/O Access

Ports 0, 1, 2, 3, and 4 are brought out on the board in rows of 0.025in square header pins. In addition, port 0 is optionally displayed on the LED bar graph U13. Note that the optional LCD module is connected to port 0 and, as a

## ABRIDGED EV KIT DATA SHEET

result,  the  LED  bar  graph  may  not  present  the  expected  output  when  the  LCD  module  is  connected  to  the evaluation board.

## Serial Ports

The  evaluation  board  has  four  serial  ports.  Serial  ports  0  and  1  correspond  to  the  internal  serial  ports  of  the DS5250 and are brought out to J3 and J2, respectively. A pair of MAX213E line driver/receivers creates serial ports 2 and 3, providing additional debug ports without sacrificing the internal serial ports. The signals for these ports are brought out on J6 and J7.

## Smart Card Interface

All  the  signals  necessary  to  interface  to  an  externally  mounted  smart  card  are  brought  out  in  a  row  of  0.025in square header pins.

## Security Access Module (SAM) Socket

The evaluation board has a socket for a general-purpose SAM that can be used by the application.

## LCD

The DS5250 evaluation board supports a standard parallel interface LCD such as the Optrex DMC16207 or similar product.

## Jumper Settings

The  DS5250  EV  kit  is  customized  by  two  banks  of  DIP  switches  and  individual  solder  jumpers.  Most  of  these jumpers are solder jumpers, which are closed by soldering the two contacts together.

Table 1. DIP Switch Bank A (SW1)

|   POSITION | ON                                     | OFF                                                                              |
|------------|----------------------------------------|----------------------------------------------------------------------------------|
|          1 | P3.0 is connected to serial port RXD0. | P3.0 is not connected to serial port RXD0 and available for general-purpose I/O. |
|          2 | P3.1 is connected to serial port RXD0. | P3.1 is not connected to serial port TXD0 and available for general-purpose I/O. |
|          3 | P1.2 is connected to serial port RXD0. | P1.2 is not connected to serial port RXD1 and available for general-purpose I/O. |
|          4 | P1.3 is connected to serial port RXD0. | P1.3 is not connected to serial port TXD1 and available for general-purpose I/O. |
|          5 | P4.0 is connected to serial port DTR0. | P4.0 is not connected to serial port DTR0 and available for general-purpose I/O. |
|          6 | P4.1 is connected to serial port CTS0. | P4.1 is not connected to serial port CTS0 and available for general-purpose I/O. |
|          7 | P4.3 is connected to serial port DSR0. | P4.3 is not connected to serial port DSR0 and available for general-purpose I/O. |
|          8 | P4.4 is connected to serial port RTS0. | P4.4 is not connected to serial port RTS0 and available for general-purpose I/O. |

## ABRIDGED EV KIT DATA SHEET

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ DS5250 Evaluation Kit

## Table 2. DIP Switch Bank B (SW21)

|   POSITION | ON                                                         | OFF                                                         |
|------------|------------------------------------------------------------|-------------------------------------------------------------|
|          1 | DS5250 bootstrap loader enabled.                           | DS5250 bootstrap loader disabled and device is in run mode. |
|          2 | LED bank (U13) connected to port 0.                        | LED bank disabled.                                          |
|          3 | P1.3 is connected to SCI/O signal on smart card interface. | P1.3 is available for general-purpose I/O.                  |
|          4 | P1.2 is connected to SCI/O signal on smart card interface. | P1.2 is available for general-purpose I/O.                  |
|          5 | P3.7 enables/disables power to smart card interface.       | P3.7 is available for general-purpose I/O.                  |
|          6 | SAM card socket power (+5V) on.                            | No power applied to SAM card socket.                        |
|          7 | SDI1 button connected to SDI1 pin on microcontroller.      | SDI1 button disconnected.                                   |
|          8 | SDI2 button connected to SDI1 pin on microcontroller.      | SDI2 button disconnected.                                   |

## Table 3. Individual Jumpers

| JUMPER   | WHEN IN PLACE:                                                     |
|----------|--------------------------------------------------------------------|
| JP1      | Connects DS5250 VCC to output of on-board 5V regulator.            |
| JP2      | Connects DS5250 VLI to on-board lithium cell.                      |
| JP3      | Connects serial port 2 interrupt from PC16552 to DS5250 INT2.      |
| JP4      | Connects serial port 3 interrupt from PC16552 to DS5250 INT2.      |
| JP5      | Enables DTR0 signal to activate bootstrap loader via the PROG pin. |

## Configuring the DS5250 for the Evaluation Board

The design of the evaluation board requires that the following memory configuration settings be initialized via the ROM loader before downloading software.

MSIZE = 10011010b = 9Ah Data Memory Size Bits = 011 (1MB) MSEL Pin Status = 1 (read only)

```
Program Memory Size Bits = 010 (512kB) MCON =11111x10b = FAh External Memory Partition = 1111 (ignored because PM = 1) Voltage Sensitivity = 1 (can be 1 or 0 for testing) x =indeterminate read value, writes ignored Partition Mode = 1 (nonpartitioned mode) Security Lock = 0 (Unlocked) MCEN = 04h Enable CE3N = 1 FCE3 = 01h Flash memory connected to CE3N.
```

## ABRIDGED EV KIT DATA SHEET

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ DS5250 Evaluation Kit

## Getting Started

- 1) Install Microcontroller Tool Kit (MTK) on the PC.
- 2) Make sure switches are set to the following:

A1 ON A2 ON A5 ON B1 ON B2 ON

- 3) Attach the DB-9 serial cable from the PC to Serial 0 (J3).
- 4) Connect a user-supplied power supply (6V to 9V DC, &gt; 300mA) to the evaluation board (connector J1).
- 5) Activate MTK and select DS5240/DS5250 as the device.
- 6) Under Options → Configure Serial Port select the desired the COM port. For initial checkout, leave speed at 9600 baud. This can be changed as soon as operation is verified.
- 7) Under Target select Open COMx at 9600 baud . The main window should switch from gray to white.
- 8) Select Target → Connect to Loader . The main window should display the ROM loader sign-on banner, similar to the following but with a unique LID:
- 9) Configure memory settings for the evaluation board as described above using the ROM Loader Write command.

```
DS5250 SECURE LOADER VERSION 1.0 COPYRIGHT (C) 2002 DALLAS SEMICONDUCTOR LID: 62C90E00000000F9 911F
```

W MSIZE 9C W MCON FC W MCEN 04 W FCE3 01

- 10) Load EV50\_CHK.HEX. Set switch B1 to OFF. The program should run, flashing all the bits of port 0 on LED U10, and then walking a single bit back and forth.

## Special Notes When Using Revision A Hardware

The revision A and revision B hardware are similar, with the primary exception being the pinout of the revision A Serial 2 and Serial 3 connectors as shown in Figure 2.

Figure 2. DS5250 Revision A Showing Pinout of J6 and J7

<!-- image -->

## ABRIDGED EV KIT DATA SHEET

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ DS5250 Evaluation Kit

## Schematics

For the complete schematics, email contact technical support at www.maxim-ic.com/support.