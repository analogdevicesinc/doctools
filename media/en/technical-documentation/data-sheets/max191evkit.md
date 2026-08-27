<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX191 Evaluation System/Evaluation Kit

## General Description

The MAX191 evaluation system (EV system) consists of a MAX191 evaluation kit (EV kit) connected to a Maxim 80C32 microcontroller (µC) module. The unit connects to  an  IBM-compatible personal computer running software provided with the MAX191 EV kit. Both boards come fully assembled and tested.

The MAX191 EV system can configure the MAX191 in a variety of ways: It can operate in serial- or parallel-interface mode and in unipolar or bipolar mode, and V SS can be connected to ground or -5V. All functions are controlled through keyboard commands entered on the personal computer.

The MAX191 EV system supersedes the MAX190 EV kit.  The  MAX190 kit was limited to the positive input range (0V to +4.096V) and serial-interface mode only.

Order the EV system (MAX191EVSYS-DIP) to evaluate the  MAX191  using  software.  Order  the  EV  kit (MAX191EVKIT-DIP) if the 80C32 module (80C32MODULE-DIP) has already been purchased separately or with another Maxim EV system. The MAX191 EV kit alone can be used for limited evaluation of the MAX191 (see the EV Kit Quick Start section).

Features

- ' EV System Includes EV Kit and 80C32 µC Module
- ' 12-Bit Resolution, 1/2LSB Linearity ADC
- ' MAX191 Operates in Single- or Dual-Supply Mode
- ' EV System Operates in: Unipolar- or Bipolar-Input Mode Serial- or Parallel-Interface Mode
- ' Fully Assembled and Tested
- ' Software Source-Code Provided
- ' Interfaces to IBM-Compatible Computer through RS-232 Communications Port
- ' Kit Supports Conversion Rates Beyond 50ksps

## Ordering Information

| PART            | TEMP. RANGE   | BOARD TYPE   |
|-----------------|---------------|--------------|
| MAX191EVSYS-DIP | 0°C to +70°C  | Through-Hole |
| MAX191EVKIT-DIP | 0°C to +70°C  | Through-Hole |
| 80C32MODULE-DIP | 0°C to +70°C  | Through-Hole |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_EV System

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

## MAX191 Evaluation System/Evaluation Kit

## EV System Component List

|   QTY | DESCRIPTION                             |
|-------|-----------------------------------------|
|     1 | MAX191 evaluation kit (MAX191EVKIT-DIP) |
|     1 | Maxim 80C32 µC module (80C32MODULE-DIP) |

## EV Kit Component List

| DESIGNATION             |   QTY | DESCRIPTION                      |
|-------------------------|-------|----------------------------------|
| C1                      |     1 | 200pF ceramic capacitor          |
| C2, C3, C4, C5, C6, C13 |     6 | 10µF 16V electrolytic capacitors |
| C7                      |     1 | 22µF ceramic capacitor           |
| C8, C9, C11, C12, C14   |     5 | 0.1µF ceramic capacitors         |
| C10                     |     1 | 0.01µF ceramic capacitor         |
| R1, R2                  |     2 | 1k Ω 5% resistors                |
| RS1                     |     1 | 10k Ω 9-resistor SIP             |
| U1                      |     1 | 74HCT157A                        |
| U2                      |     1 | Maxim DG413DJ                    |
| U3                      |     1 | Maxim ICL7660CPA                 |
| U4                      |     1 | Maxim MAX191BCNG                 |
| H1                      |     1 | 10-pin header                    |
| J1                      |     1 | Female data connector            |
| None                    |     1 | Software on 5 1/4" floppy disk   |
| None                    |     1 | 3.00" x 3.00" PC board           |
| None                    |     1 | MAX191 data sheet                |

## EV System Quick Start

The MAX191 EV system includes a Maxim 80C32 µC module and a MAX191 EV kit. The two connect through a 40-pin data connector on adjoining edges of the boards. The EV system then connects to an IBM-compatible computer running software provided with the MAX191 EV kit.

The following steps outline the procedure for using the MAX191 EV system:

- 1) Copy the MAX191 software disk to another disk or to  a  hard-disk  directory  in  the  personal  computer. Store the original disk in a safe location.
- 2) Read the README text file found on the floppy disk. It contains information on any hardware or software changes made after this manual was written.
- 3) Connect the MAX191 evaluation board to the 40-pin data connector on the Maxim 80C32 module.
- 4) Connect an 8V to 16V source to the 2-pin power connector on the 80C32 module. The positive lead connects to the terminal marked VIN. The Maxim 80C32 module requires approximately 100mA. The MAX191 evaluation board draws less than 10mA.
- 5) Connect a cable from the personal computer to the 9-pin connector on the 80C32 module. If the serial port on the personal computer has a standard 9-pin connector, a straight-through cable is used to attach the board. Computers with a 25-pin serial port  connector need an adapter or adapter cable (D25 female to D9 male); both are available at most computer stores.
- 6) Turn on the power to the 80C32 module. The switch is located near the 2-pin power connector. The LED indicates power from the on-board regulator.
- 7) To start the Maxim EV system software on the personal computer, set the default drive or directory to match the storage location of the Maxim programs, then enter the program name '191EVKIT'.
- 8) Set the active serial port, shown on the bottom line, to indicate the port connected to the Maxim 80C32 module. The Ctrl-T command toggles the active port between COM1 and COM2. A list of commands affecting the communications link appears at the bottom of the screen.
- 9) The 80C32 module will transmit a logon message and RAM test results when communications are initialized.  The  MAX191 RAM resident program will then be downloaded automatically. The system is ready for use when the MAX191 revision banner appears and the status indication on the bottom display line changes to '*** READY ***'.
- 10) Enter a '?' to display a menu of available MAX191 conversion commands. This help list is available whenever the MAX191 system is ready for use.
- 11) Connect an analog input across the MAX191 inputs (AIN+ and AIN-). The input range is 0V to +4.096V for  unipolar  and -2.048V to +2.047V for bipolar operation.
- 12) Single conversions are displayed whenever the Enter key is pressed. Continuous conversions are initialized  with  a  'C'  and  continue  until  any  key  is pressed.

## MAX191 Evaluation System/Evaluation Kit

## EV Kit Quick Start

Without the 80C32 module, the MAX191 evaluation board can perform a limited evaluation of the MAX191 using external signals. To evaluate the device in the serial-interface mode, refer to the timing diagram in Figure 10b of the MAX191 data sheet and connect the board as follows:

- 1) Connect a +5V power supply to the marked pads (GND and +5V) on the board.
- 2) Ground the PAR pin on the 10-pin header to set the MAX191 in the serial-interface mode.
- 3) Connect the clock signal (0.1MHz to 1.6MHz) to the SCK pin on the 10-pin header.
- 4) Connect the chip-select signal ( CS )  to  the  serial chip-select pin (SCS) on the 10-pin header.
- 5) Connect an oscilloscope to the serial data pin (SDAT) on the 10-pin header.
- 6) The MAX191 V SS voltage can be changed to -5V by grounding the V SS select pin (VSEL) on the 10-pin header. The V SS voltage is 0V when this pin is left open.
- 7) Leaving the BIP pin of the 10-pin header open will operate the MAX191 in bipolar mode. Grounding the pin will change the mode to unipolar.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## VSS Circuit

An ICL7660 +5V to -5V converter and a DG413 analog switch are the means for switching the MAX191's V SS voltage between ground and -5V. The analog switch is not  required  for  most  application  circuits  because  the VSS voltage will  be  fixed  at  either  -5V  or  ground.  The MAX191 requires a negative supply only if the input voltage is expected to go below ground.

The ICL7660 provides a -5V source with minimal additional  circuitry.  The  ICL7660  converter  circuit  on  the MAX191 EV kit is the standard application circuit for +5V to -5V conversions. Its 10mA output capacity is much more than the 100µA needed for the MAX191 EV kit. The additional current is available for user circuits in the prototyping area. For applications where the MAX191 is the only load, the 10µF capacitors may be reduced to 0.1µF.

<!-- image -->

## Table 1.  Port 1 Bit Functions

| BIT   | NAME   | FUNCTION                                                                     |
|-------|--------|------------------------------------------------------------------------------|
| P1.0  | SCK    | Clock signal for serial mode                                                 |
| P1.1  | VSEL   | Selects 0V or -5V for MAX191's V SS pin: Low = 0V, High = -5                 |
| P1.2  | BSY    | The MAX191 BUSY output                                                       |
| P1.3  | PAR    | The MAX191 PARallel mode select pin. Also controls the 74HCT157 multiplexer. |
| P1.4  | BIP    | The MAX191 BIPolar pin                                                       |
| P1.5  | HBE    | The MAX191 HBEN (high-byte enable) pin                                       |
| P1.6  | SRD    | The MAX191 D7/SDATA (serial data) pin                                        |
| P1.7  | SCS    | Serial mode chip-select signal                                               |

## Interface Modes

Communications between the 80C32 module and the MAX191 can be in serial or parallel mode. A 74HC157 multiplexer is used to toggle the MAX191 chip-select signal ( CS ) between the serial chip select ( SCS , P1.7) and a decoded address signal ( CS0 ).  In  either mode, the MAX191 BIP, PAR, and HBEN pins are controlled by the 80C32 port 1 programmable bits. In serial mode, port 1 also toggles the clock pin and receives the serial data. Table 1 lists the functions of the port 1 bits.

## Reference Circuit

The MAX191 EV kit is configured to operate with the MAX191's internal 4.096V reference, using external reference compensation mode ( PD pin floating-see MAX191 data sheet). Access to the PD pin is provided via connector location JJ1.

To evaluate the MAX191 in internal reference compensation mode, remove the reference compensation capacitors C7 and C11, and force the PD pin high at location JJ1.

To place the MAX191 in its low-current power-down mode, connect PD to ground using JJ1.

## Monitoring the MAX191 Supply Current

A jumper position (JJ2) included on the MAX191 EV kit printed circuit  board provides a convenient place to monitor the MAX191's V DD supply current. To insert a current meter, cut the trace across the position marked

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX191 Evaluation System/Evaluation Kit

JJ2 and connect the meter using the two holes present. The circuit can be returned to normal by soldering a short piece of wire between the two holes. To evaluate the MAX191 in its low-current shutdown mode, connect PD to ground using jumper location JJ1.

## Analog Inputs

The MAX191's analog inputs are brought to pads marked AIN+ and AIN-. An optional input filter consisting of 1k Ω resistors  (R1  and  R2)  is  in  series  with  the input and a 0.01µF capacitor (C10) across the input pins. A wire may be inserted across jumper JJ3 to connect AIN- to ground if the MAX191 is limited to singleended input operation.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Software

## 191EVKIT Program

The 191EVKIT program is one of two separate programs supplied with the MAX191 EV kit. The program, which runs on a personal computer, handles the user interface, controls communications with the 80C32 module, and displays conversion results. It was written in  the  C  language  using  Microsoft's  QuickC software package. The EV System Quick Start section gives instructions for starting the program as well as for making connections to the boards.

The following commands are available whenever the 191EVKIT program is running. A list of these commands is displayed at the bottom of the screen.

Esc..........Clears the data field and redraws the screen.

Ctrl-T... ...Toggles  the  active  serial  communications port  between COM1 and COM2. The active port is identified on the bottom status line.

Ctrl-R... ...Changes the baud rate of the active serial port. The board and program initialize at 1200. If the program is exited with another rate active, the board must be manually reset. Higher baud rates are usable for data uploading and on personal computers with faster video operations. Data will be lost if the rate is set too high.

Ctrl-U... ...Downloads the RAM resident program. Can be used to force reloading of the RAM resident program.

Ctrl-X... ...Exits  the  191EVKIT  program and returns to DOS.

4

## MAX191 RAM Resident Program

The second program supplied with the kit is an 80C32 assembly language program that is transferred to the 80C32 module and controls the MAX191 converter. Both  the  source  code  (191RAM.ASM)  and  hex (191RAM.MAX) files are on the floppy disk supplied with the EV kit. The hex file is downloaded automatically when communications with the module are initiated. It transmits a logon banner, displays a command prompt, and changes the lower right-hand corner of the display to  indicate  '****  READY ****' when program loading has been completed.

The command prompt gives the present operating mode of the MAX191. It indicates the output format (DECimal or HEXadecimal), the input mode (UNIpolar or  BIPolar),  the  interface  mode  (PARallel  or  SERial), and the MAX191 V SS voltage (0V or -5V). For example, the  following  command prompt indicates decimal output format, unipolar input mode, parallel interface mode, and V SS = 0V.

MAX191:DEC:UNI:PAR:V SS  = 0V: &gt;

Any of the following commands may be entered whenever the prompt is displayed. A command help list will appear when a question mark '?' is entered.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Software Commands

The following commands are available whenever the MAX191 RAM resident program has been downloaded to the 80C32 module. Entering a question mark '?' produces a help list.

## MAX191 Conversion-Mode Selection Commands

- U.............The MAX191 interprets the input as a unipo- lar (0V to +4.096V) voltage.

- B .............The MAX191 interprets the input as a bipolar (-2.048V to +2.047V) voltage.

- P............Changes the interface mode between the 80C32 and the MAX191 to parallel.

- S............Changes the interface mode between the 80C32 and the MAX191 to serial.

- V .............Sets the MAX191 V SS voltage to -5V. The -5V supply must be used when the MAX191 input is expected to go negative.

- Z .............Sets the MAX191 V SS voltage to 0V.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX191 Evaluation System/Evaluation Kit

- H.............Changes the format of the displayed results. For hexadecimal format, the range is 0 to FFFF (0 to full scale) for unipolar mode, and 8000 to 7FFF (negative full scale to positive full scale) for bipolar.

- D............Changes the format of the displayed results. For  decimal format, the range is 0V to +4.096V for unipolar and -2.048V to +2.047V for bipolar.

## MAX191 Conversion Commands

- CR..........Striking  the  carriage  return  (the  'Enter'  key on the PC keyboard) or the space bar per- forms a single conversion and displays the results.

- C............Performs  continuous conversions and dis- plays the results until any key on the key- board is pressed.

- L ..........Performs  continuous  conversions  and ignores the results. This allows the user to observe the timing relationships with an oscil- loscope. The function terminates when a key is pressed.

- R .............Collects conversion results in the RAM locat- ed on the 80C32 module. See the following commands for details.

- O...........Retrieves previously stored values in the 80C32 module RAM and displays the results. Changing the MAX191 conversion mode (unipolar/bipolar) after conversions are col- lected will cause an erroneous display.

- N ............Sets  the  number  of  readings  collected  with the 'R' command and displayed with the 'O' command between 1 and 4100.

- W............Sets the period between conversions as they are collected and stored in the RAM. Each count increases the delay by approximately 2µs. The delay period also occurs between conversions following the 'L' command.

- F..............Retrieves the contents of the 80C32 RAM and stores the readings in a file. The readings are stored in text (ASCII) format with a single reading per line. The output file may be viewed with a wordprocessing program or imported by a spreadsheet program.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1.  MAX191 EV Kit Schematic

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX191 Evaluation System/Evaluation Kit

<!-- image -->

Figure 2.  MAX191 EV Kit Component Placement Guide

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX191 Evaluation System/Evaluation Kit

Figure 3.  MAX191 EV Kit Component-Side Layout

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX191 Evaluation System/Evaluation Kit

<!-- image -->

Figure 4.  MAX191 EV Kit Solder-Side Layout

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX191 Evaluation System/Evaluation Kit

## \_\_\_\_80C32 Module Component List

| DESIGNATION                           |   QTY | DESCRIPTION                               |
|---------------------------------------|-------|-------------------------------------------|
| C1, C2                                |     2 | 15pF ceramic capacitors                   |
| C4, C5, C6, C7, C8, C9, C10, C11, C12 |     9 | 0.1µF, 50V ceramic capacitors             |
| C3, C13, C14                          |     3 | 22µF, 16V radial electrolytic capacitors  |
| D1                                    |     1 | 1N4001 diode                              |
| J1                                    |     1 | 40-pin right-angle male connector         |
| J2                                    |     1 | DB9 right-angle socket                    |
| R1                                    |     1 | 620 Ω resistor                            |
| RS1                                   |     1 | Reset switch                              |
| SW1                                   |     1 | Reset switch                              |
| SW2                                   |     1 | 80C32                                     |
| IC1                                   |     1 | MAX233CPP                                 |
| IC2                                   |     1 | MAX233CPP                                 |
| IC3                                   |     1 | 27C64                                     |
| IC4                                   |     1 | 74HCT573                                  |
| IC5                                   |     1 | 74HCT139                                  |
| IC6                                   |     1 | 74HCT08                                   |
| IC7                                   |     1 | 74HCT245                                  |
| IC8                                   |     1 | 62256                                     |
| IC9                                   |     1 | 78M05                                     |
| IC10                                  |     1 | MAX707CPA                                 |
| Y1                                    |     1 | 11.059MHz crystal                         |
| None                                  |     1 | 2-pin power connector                     |
| None                                  |     1 | 28-pin 600-mil socket for IC3 (the EPROM) |
| None                                  |     4 | Rubber feet                               |
| None                                  |     1 | 3.00" x 5.50" PC board                    |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_80C32 Module

## 80C32 Module General Description

The Maxim 80C32 microcontroller (µC) module is intended for use with this and other Maxim evaluation kits  (EV  kits).  It  contains  the  80C32  µC,  RS-232  interface, 8kbytes of EPROM, 32kbytes of static RAM, and address decoding logic. A 40-pin connector mates with a connector found on Maxim EV kits designed to interface with the 80C32 module.

The module is connected to an IBM-compatible personal computer over a serial communications port. Software provided with each EV kit runs on the computer and controls the unit consisting of the 80C32 module and EV kit. The program uses a routine stored in the 27C64 EPROM to download special 80C32 code for each kit. The downloaded code controls the EV kit and, together with the program running on the personal computer, displays the output data.

The board operates from a single 8V to 22V supply. Both the pre-regulated and regulated +5V levels are available to the EV kit through the 40-pin connector.

## 80C32 Module Power Supply

The Maxim 80C32 module requires an input of 8V to 22V for normal operation. An on-board 78M05 power regulator supplies the 5V required for the logic on the module, and any 5V requirements for the EV kit attached to the 40-pin connector. The pre-regulated voltage is also available on the data connector. The source must be capable of supplying 100mA for the module and meeting the load requirements of the EV kit.

## Microprocessor Supervisor

A MAX707 on the module monitors the 5V logic supply, generates the power-on reset, and produces a reset pulse whenever the reset button is pressed. A watchdog function was not included because they frequently interfere while debugging programs, and debugging is a prime function of this board.

## 80C32 Microcontroller

The 80C32 is a member of the popular Intel 8051 family of  µCs.  It  is  a  low-power  CMOS  version  that  requires external ROM for program storage, 256 bytes of internal RAM, and four 8-bit I/O ports. Three of the ports are required by the system for serial communications and memory control. The fourth port (P1) is available through the data connector.

The 80C32 communicates with the PC over a serial RS232 link. A MAX233 acts as a level shifter between the ±15V RS-232 signals and the TTL levels of the 80C32. The MAX233 also generates the output voltages necessary to drive RS-232 lines.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX191 Evaluation System/Evaluation Kit

Port 0 (pins 32-39) of the 80C32 multiplexes the lower eight bits of memory address and the eight bits of read/write data. The lower eight bits of address data are latched during each I/O cycle by the 74HCT573 octal latch. The latch is controlled by the address latch enable (ALE) signal of the 80C32. Port 2 (pins 21-28) of the 80C32 supplies the upper eight bits of address information.

The port 3 pins (10-17) provide several unrelated functions.  Pins  10  and  11  are  used  as  the  receive  data (RxD) and transmit data (TxD) pins of the RS-232 link. Pins 16 and 17 act as the write ( WR )  and  read  ( RD ) control signals for the data I/O cycles. Four other pins are configured as interrupt and timer controls, but are not used on this board.

## Memory

The board has a 27C64 EPROM containing code for initializing  the  80C32  and downloading additional program code to the 62256 RAM. After a reset, the EPROM resident code initializes the 80C32, determines the address range of the RAM, sets the RS-232 baud  rate to  1200,  and waits for communications from the PC. Receiving any character will prompt the program to send an initial banner that includes the program name, revision level, and boundaries of the on-board RAM.

The 62256 CMOS (32kbyte) static RAM is used to hold program code for the various Maxim EV kits that use the 80C32 module as the controller. Programs are transferred from disk to the RAM using software running on a personal computer, such as MAXLOAD or other  programs  provided  with  Maxim  EV  kits. Programs written to execute from this RAM start at 4000 (HEX) and are typically less than 4kbytes long. The remaining RAM is available for data storage.

<!-- image -->

## Address Ranges

Logic on the module board generates various enable signals for different address ranges. The ROM and RAM enable signals are fed directly to the respective chips. Several additional signals (CS0-CS3) are available on the data connector to be used by Maxim EV kits. Table 2 outlines the address range for each of the elements found on the 80C32 module.

## Table 2.  Address Ranges in Hexadecimal

| ADDRESS RANGE (HEX)   | ADDRESS RANGE (HEX)   | ENABLE SIGNAL   |
|-----------------------|-----------------------|-----------------|
| 0000                  | 3FFF                  | ROM             |
| 4000                  | BFFF                  | RAM             |
| C000                  | CFFF                  | CS0             |
| D000                  | DFFF                  | CS1             |
| E000                  | EFFF                  | CS2             |
| F000                  | FFFF                  | CS3             |

## Data I/O Connector

A 40-pin connector mounted on the edge of the printed circuit  board provides connection between the µC module and other Maxim EV kits. Both power and digital signals are transferred via the connector. To join the module board with an EV kit, carefully align and insert the pins on the connector with the mating 40-pin female connector of the kit. The pin functions are listed in Table 3.

## Table 3.  I/O Connector Pin Functions

| PIN   | FUNCTION            | DESCRIPTION              |
|-------|---------------------|--------------------------|
| 1-4   | Ground              |                          |
| 5, 6  | Pre-regulator input |                          |
| 7, 8  | Regulated +5V       |                          |
| 9     | RD                  | Read strobe              |
| 10    | WR                  | Write strobe             |
| 11    | CS0                 | Address C000-CFFF        |
| 12    | CS1                 | Address D000-DFFF        |
| 13    | CS2                 | Address E000-EFFF        |
| 14    | CS3                 | Address F000-FFFF        |
| 15-18 | ADDR0-ADDR3         | Lowest 4 bits of address |
| 19-26 | DB0-DB7             | 8-bit data bus           |
| 27-34 | P1.0-P1.7           | 8 bits of port 1         |
| 35-40 | Reserved            |                          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX191 Evaluation System/Evaluation Kit

## Software Architecture

Software for EV kits using the Maxim 80C32 module is divided into three elements: the interface program running on an IBM-compatible PC, a module program located in EPROM, and a program supplied on disk that is transferred to the RAM located on the module.

## EPROM Resident Program

The EPROM resident program initializes the 80C32, establishes communications over the RS-232 link, verifies  the  static  RAM,  and  downloads  other programs. Its operation starts on power-up and whenever the reset button is pressed. After reset, the program waits indefinitely to receive a character over the RS-232 port. When the first character is received, a logon banner identifying the module and firmware revision is transmitted.

Immediately following transmission of the logon banner, the program runs a checker routine for the on-board 256kbit static RAM. The RAM is filled with several patterns and then read to verify that each pattern has been retained. A pass or fail indication is displayed on the personal computer after each pass. EV kit software requires proper operation of the RAM. Do not attempt to use the board if any of the RAM checks fail.

Two other programs for the EV kits are provided on a floppy disk shipped with each kit. One program acts as the user interface and transmits commands to the 80C32 module. The other is an 80C32 application program that executes from the RAM located on the module. The procedure for loading the programs varies with each kit, so follow the instructions provided.

Figure 5.  80C32 Module Component Placement Guide (x2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX191 Evaluation System/Evaluation Kit

<!-- image -->

Figure 6.  80C32 Module Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX191 Evaluation System/Evaluation Kit

Figure 6.  80C32 Module Schematic (continued)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 7.  80C32 Module Component-Side Layout (x2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX191 Evaluation System/Evaluation Kit

Figure 8.  80C32 Module Solder-Side Layout (x2)

<!-- image -->

16 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600