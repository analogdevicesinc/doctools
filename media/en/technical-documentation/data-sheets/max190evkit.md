<!-- lastmod 2022-08-03 -->
## EV Kit General Description

TheMAX190evaluationkit(EVkit)presentsan80C32basedhardwaredesignthatdemonstratestheoperation of the MAX190 low-power, single +5V-powered, 12-bit sampling analog-to-digital converter (ADC) in its serial interface mode.

The EV kit allows the user to select various MAX190 operatingmodesandperformconversionsthroughan RS-232 data link. The results are displayed on an IBMcompatiblepersonalcomputerrunningeitheraterminal emulatorprogram ora dumbterminal.

TheMAX190EVkitcanalsodemonstrateMAX191 performance. The MAx191 offers a few improvements over the MAX190, including a bipolar input range when usedwithdual supplies.Itwillperform thesameas the MAX190whenusedintheMAX190EVkit.However,the evaluationkitcannotdemonstratetheMAX191'sbipolar feature.A MAX191 EV kit will be available by May 1993.

## Features

- ←12-Bit Resolution, 1/2LSB Linearity
- ← Proven Printed Circuit Board Layout
- ← Debugged Software Source Code
- ← Operates from a Single +6V to +10V Supply
- ←Built-In Track/Hold
- Interface to IBM-Compatible Computer through RS-232 Port

## MAX190 Evaluation Kit

## Ordering Information

| PART             | TEMP. RANGE   | BOARD TYPE   |
|------------------|---------------|--------------|
| MAX190EVKIT-DIP* | 0'℃to+70℃     | Through-Hole |

ToevaluatetheMAX191,orderafreesampleof the MAX191BCNGby calling toll free 1-800-998-8800\_or retuming on of the request cards found inside every A/D ConverterDesign Guide.

## EV Kit

<!-- image -->

## Functional Diagram

<!-- image -->

## MAX190 Evaluation Kit

## Component List

| DESIGNATION                   |   QUANTITY | DESCRIPTION                   |
|-------------------------------|------------|-------------------------------|
| BT1                           |          1 | Battery holder                |
| C3, C4                        |          2 | 15pFcapacitors                |
| C1, C5-C7,C9-C13, C15,C18-C22 |         15 | 0.1μF capacitors              |
| C8                            |          2 | 47uF capacitors               |
| C2,C17,C16                    |          3 | 4.7uFcapacitors               |
| C14                           |          1 | 100uFcapacitor                |
| CR1,CR2                       |          2 | 1N4001 diodes                 |
| CR3,CR4                       |          2 | 1N4148diodes                  |
| CR5                           |          1 | 1N5817diode                   |
| J1                            |          1 | 2-wire connector              |
|                               |          1 | On-Shore Technologies' ED1603 |
| J2                            |          1 | D25femaleconnector            |
| JU1                           |          1 | 3-pinheader                   |
| JU2                           |          1 | 2-pinheader                   |
| Q1                            |          1 | 2N7000                        |
| R1, R2, R4                    |          3 | 100kQresistor                 |
| R3                            |          1 | 10kQresistor                  |
| R5                            |          1 | 10kQresistor                  |
| R6                            |          1 | 20kQresistor                  |
| RP1                           |          1 | 10kQ9-resistorSIP             |
| RP2                           |          1 | 100kQ9-resistorSIP            |
| S1                            |          1 | Switch, SPST                  |
|                               |          1 | C&K7101SD9ABE                 |
| U1                            |          1 | 74HCT138                      |
| U2                            |          1 | 80C32-P                       |
| U3                            |          1 | 74HCT393                      |
| U4                            |          1 | 74HC373                       |
| U5                            |          1 | MAX190                        |
| U6                            |          1 | MAX667                        |
| U7                            |          1 | MAX699                        |
| U8                            |          1 | 27C64                         |
| U9                            |          1 | 6264LP                        |
| U10                           |          1 | MAX233                        |
| U11                           |          1 | 74HCT266                      |
| U12                           |          1 | 74HC74                        |
| Y1                            |          1 | 11.0592MHzCTS CTX078          |
| None                          |          1 | 28-pin IC socket              |
| None                          |          1 | 40-pinIC socket               |

## Quick Reference

Setup and operation of the MAX190 EV kit involves the following steps:

1. Assemble the printed circuit board using the procedureintheAssemblyInstructionssection.
2. Copy the MAX190 EV kit floppy disk to another disk and store the original in a safe place. Use the copy for normal operation.
3. Read the README file for updates and changes.
4. Connect a cable between a serial port (COM1 or COM2) of the personal computer and the MAX190 EV kit printed circuit board. If a 25-pin (D25) connector is available, a straight-through cable can be used. If only a 9-pin (D9) connector is available, an adapter is required.
5. Start the SERCOMM program on the personal computer and set the indicated active port to agree with the cable location.
6. Tum on the printed circuit board power.
7. Type a SPACE to initialize communication with the EV kit board. The board should respond with a logon message. lf not, refer to the trouble-shooting guide in thismanual.
8. Enter a '? for a list of available commands.
9. Connect the input signals to the analog input(s) and the system is ready for operation.

## Detailed Description Board Archltecturo

## Power Supply

The evaluation board is powered by a 9V alkaline battery, such as an NEMA-1604A, or by an extermal DC power supply (not included).

The MAx667 low-dropout voltage regulator provides the +5V supply required by the other devices on the board.

The MAx667's shutdown feature can be used by the attached terminal's DTR signal to remotely tum the evaluationboard onand off.

## Suporvision

The MAX699 low-cost power-on reset and watchdogtimer controller provides on-board system supervision for the microprocessor(μP). The MAX699 generates a RESET signal at power-on and if the μP's firmware fails to generate a transition at least once a second. Refer to the Watchdog-EnableJumperBlocksectioninthismanual and theMAx699datasheetformoreinformation.

<!-- image -->

## RS-232 Interface

The RS-232 interface connects an extemal terminal to the evaluation board. The MAX233 no-extemal-component, +5V-powered,dual RS-232transmitter and receiver interface IC performs the level shifting required for the 80C32's integrated serial port.

One of the RS-232 receivers is not used in the design and is available for prototyping options.

## Microprocessor

The 80C32 receives the user's commands over the RS232connection,performs therequested command,and then returns the results to the user over the RS-232 link. A full listofcommands andresponsesisdiscussed inthe Commands Set section.

Memory for the 80C32 is composed of a 27C64 8kbytes ROM and an optional 6264LP-15 8kbytes RAM. The ROM stores the 80C32's firmware (monitor). The RAM is used to buffer the results of analog-to-digital conversions. The firmware's 8051 assembly language source code is provided on diskette.

The memory-decoding circuitry has an associated jumper thatdetermines thelengthofboth the device enable signal sent to the ROM and RAM, and the extra memorydecoding signals(2000-3FFF,4000-5FFF,80009FFF,A000-BFFF,C000-DFFF,E000-FFFF),which are provided for prototype expansion. The Jumper Options section discusses the setting of this jumper.

The 80C32's 8-bit data bus and the control signals (PSEN, RD, WR, &amp; ANYRD) are provided at labeled pads for prototyping.

The 80C32's PORT 1 (P1) is a general-purpose input/output (l/O) port. The bits have been assigned the following :sesn

- Bit O-Serialdata from theMAX190
- Bit 1 - Serial clock from the MAX190
- Bit 2 - Chip select to the MAX190
- Bit 3 - High-byte enable to the MAX190
- Bit 4-Read to the MAX190
- Bit 5 - Bipolar input select to the MAX190
- Bit 6-Power-down to theMAX190
- Bit 7 - Programmed heartbeat to the MAx699 watchdog

The user can cut the power-down jumper, discussed in the Jumper Options section, and use Bit 6 for other purposes.

<!-- image -->

## MAX190 Evaluation Kit

The 80C32 uses an 11.0592MHz crystal. This frequency allows the μP to execute most of its instructions in 1.085us, and provides an exact integer multiple for the standard baud rates.

## Frequency Divider and Synchronization Circuit

The μP's 0scillator output is sent to a 74HCT393 for predivision.Running theMAX190fromaclocksignalthat is derived from and synchronized with the μP's clock minimizestheamountofdigitalnoiseinducedintothe ADC. The 74HCT393's output (A2D FAST CLK) is sent to a 74HC74.

The 74HC74 provides two functions. First, it divides the A2D FAST CLK by two to produce A2D CLK at a frequency of 86,400kHz with a 50% duty cycle. This is a relatively low clock frequency for the MAx190. However, it is about as fast a frequency as the 80c32 can keep up with when the 80C32 inputs the serial data with a firmware routine. The driver firmware will be discussed later. Second, it synchronizes the asynchronous chip-select request from the μP (A2D-CS) with the ADC's clock (A2D CLK). The MAX190 design specifies its chip select occurring no earlier than 5us before, and no later than 50us after the falling edge of the clock.

## MAX190 Low-Power, Single-Supply, 12-Bit Sampling ADC

The MAX190's analog input pins are brought out to a pair of solderpads marked AlN+ and AIN-.The solder mask indicates on which pads an input resistor (R3) and a filter capacitor (C10) can be installed to form a lowpass filter. Typical values for these parts are 10kQ and 0.1ouF. A shorting trace by the MAX190's AIN+ pin must be cut when R3 is installed.

The EV kit's jumper, marked -AIN:GND, connects AIN- to analog ground. This jumper must be cut for the MAX190 to operate in the pseudo-differential input mode. See the Pseudo-Differential Input sectionof the MAX190data sheet for a discussion of this mode.

Pads and jumpers are provided to allow extermal referencevoltage adjustments.

## Firmware Structure

The source code for the evaluation board's firmware is provided on a diskette. The program is in assembly language and operates with an 80c32.assembler. The program being executed on the board will be referred to as the monitor.

## MAX190 Evaluation Kit

The monitor enters its main control loop after initialization. This code starts at the label main.Main calls'get\_com-mand'whichhandleskeyboard entryfor the monitor. Commands that simply change the state of the monitor (for instance the'H' command, which is used to set the outputmodetohexadecimal)arehandledwithinthe 'get\_command. Commands requiring action, such as making analog-to-digital conversions or testing RAM, retum function request codes to main. Main then calls the functionassociatedwiththerequestcode.

The monitor can be extended by the user to add new commandsortomodifytheexistingones.Theeasiest way to extend the monitor is to add a new command recognition to'get\_command' and have it retum a new function request code.

There are some general-purpose functions in the monitor that are useful if you choose to modify it. These include functions towriteabyte-ornull-terminatedstringtothe terminal,functions to perform analog-to-digital conversions, and a function to display the results of the conversions.

## 80C32/MAX190 Intorfaco

The MAX190 is connected to the 80C32with the μP's 8-bit databusandcommunicatesserially.Thefollowingcode sequenceisextracted from thesourcecodeanddemonstrates the bit-banging serial interface. The MAX190 is commanded to do a conversion in the current mode(BIP or UNI).

The results are stored in 1E and 1F registers, a2d\_hi and a2d\_low respectively.

## Application Information Attaching the Torminal

The board operates as data communications equipment (DcE), referred to as a modem, and expects to be connected to data terminal equipment (DTE). A standard modem cable attaches the board to a personal computer running emulation software or a straightthrough cable connects the board to a dumb terminal. Maxim supplies a terminal emulation softwarepackage called Sercomm,but any terminal emulation software is acceptable.

Figure 1. Timing Diagram

<!-- image -->

## MAX190 Evaluation Kit

## MAX190 Code Listing

```
IO_PORT reg P1 SDATA equ 01h ; A2D's Serial Data bit b_SDATA reg P1.0 SCLK equ 02h ; A2D's Serial Clock bit b_SCLK reg P1.1 ncs equ 04h A2D's Chip Select (neg true) b_ncs reg P1.2 nHBEN equ 08h ; A2D's High-Byte Enable (neg true) b_nHBEN P1.3 nRD equ 10h A2D's Read Enable (neg true) b_nRD reg P1.4 BIP nba 20h ： A2D's Bipolar (not unipolar) Select reg P1.5 PD equ 40h : A2D's Power-Down αaa reg P1.6 TIC_TOC equ 80h ; Watchog-timer reset pulse b_TIc_roc reg P1.7 START equ SDATA+SCLK+PD+nHBEN+TIC_TOC STOP equ SDATA+SCLK+PD+nHBEN+nCS a2d_start reg 1ch Starts A2D conversion pattern a2d_stop reg 1dh Ends A2D conversion pattern a2d_hi reg 1eh ： A2D conversion result MSB a2dlow reg 1fh ： A2D conversion result LSB Register 20 holds the output-mode flags. output _flags reg 20h hex_flag reg 20h.0 ； Set ifi in HEx output mode dec_flag reg 20h.1 ； Set if in Ascil output mode bin_flag reg 20h.2 ； Set if in BINARY output mode Register 21 holds other general-purpose flags. gp_flags reg 21h bip_flag 'bax 21h.0 ; Set=bipolar; reset=unipolar ram_present reg' 21h.1 ; Set=sample & dump are OK READ_BIT macro clr c ; clears the carry $1: jnb b_SCLK, $1 ; Waits for the ciocK to rise orl C, b_SDATA ; Moves the data to carry rlc A ; Rotates it in $2: jb b_SCLK, $2 ; Waits for clock to drop endm
```

MAXIM

5

## MAX190 Evaluation Kit

```
MAX190 Code Listing (continued) convert equ $ ; Establishes the start and stop PoRT-l bit patterns. A,#START jnb bip_flag, con_1 orl A, #BIP con_1 AOm a2d_start, A A, #STOP jnb bip_flag, con_2 orl A, BIP con_2 Aow a2d_stop, A ; Starts a conversion clr A ; Clears the accumulato) Io_PoRT, a2d_start ; Starts the conversion ; Gets the leading zeros and the first 6 bits rd_bit_lz1 READ_BIT rdbit 1z2 READ_BIT rd bit_11 READ_BIT rd_bit_10 READ_BIT rd bit9 READ_BIT rd_bit_8 READ BIT mov a2d_hi, A ; Stores MsByte in bit order: 7 6 5432 1 0 0 0LZ LZ1110 9 8 ; Fetches the remaining 8 LSbits rd_bit_7 READ_BIT rdbit_6 READ_BIT rd bit_5 READ_BIT rd bit_4 READ_BIT rd_bit3 READ BIT rd bit2 READ BIT rd_bit_1 READ BIT rd_bit_o READ_BIT mov a2d_low, A ; Fetches MSByte AOw I0_PORT, a2d_stop ret
```

6

The following diagrams show the connections between theterminal and theMAX190EVkit.

For D25 (25-pin) to D25 connectors (standard adapters are availablefor thisconfiguration):

| Terminai Connector(DTE)   | Terminai Connector(DTE)   | MAX190 Connector (DCE)   | MAX190 Connector (DCE)   |
|---------------------------|---------------------------|--------------------------|--------------------------|
| Signal                    | Pin                       | Pin                      | Signal                   |
| Ground                    | 1                         | -1                       | Ground                   |
| TxD                       | 2                         | 2                        | TxD                      |
| RxD                       | 3                         | 3                        | RxD                      |
| RTS                       | 4                         | 4                        | RTS                      |
| CTS                       | 5                         | 5                        | CTS                      |
| DSR                       | 6                         | 6                        | DSR                      |
| Ground                    | 7                         | 7                        | Ground                   |
| DCD                       | 8                         | 8                        | DCD                      |
| DTR                       |                           | 20 --- 20                | DTR                      |
| (RI)                      |                           | 22 --- 22                | (RI)                     |

For D9 (9-pin) to D9 connectors (standard adapters are available for this configuration):

| Terminal Connector (DTE)   | Terminal Connector (DTE)   | MAX190 Connector (DCE)   | MAX190 Connector (DCE)   |
|----------------------------|----------------------------|--------------------------|--------------------------|
| Signal                     | Pin                        | Pin                      | Signal                   |
| DCD                        | 1- 8                       | 1- 8                     | DCD                      |
| RxD                        | 2 -3                       | 2 -3                     | RxD                      |
| TxD                        | -2                         | -2                       | TxD                      |
| DTR                        | - 20                       | - 20                     | DTR                      |
| Ground                     | - 7                        | - 7                      | Ground                   |
| DSR                        | --6                        | --6                      | DSR                      |
| RTS                        | 7 -- - 4                   | 7 -- - 4                 | RTS                      |
| CTS                        | 8 -- 5                     | 8 -- 5                   | CTS                      |
| (RI)                       | -22                        | -22                      | (RI)                     |

For Macintosh mini 8-pin DIN to D25 connectors:

| Terminal Connector (DTE)   | Terminal Connector (DTE)   | MAX190 Connector (DCE)   | MAX190 Connector (DCE)   |
|----------------------------|----------------------------|--------------------------|--------------------------|
| Signal                     | Pin                        | Pin                      | Signal                   |
| DTR                        | -20                        | -20                      | DTR                      |
| CTS                        | 2 5                        | 2 5                      | CTS                      |
| TxD                        | 3 2                        | 3 2                      | TxD                      |
| Ground                     | 4                          | 4                        | Ground                   |
| RxD                        | 5 3                        | 5 3                      | RxD                      |
| not used                   | 6                          | 6                        |                          |
| not used                   | 7                          | 7                        |                          |
| not used                   | 8                          | 8                        |                          |

The board supplies a fixed DATA SET READY (DSR), CLEAR TO SEND (CTS) and CARRIER DETECT (CD) to the interface at all times when it is powered up.

The board ignores the REQUEST TO SEND (RTS) signal from the terminal. The signal is brought out at RS-232 voltage levels to a pad marked RTS, and this line can be used for prototyping.

## MAX190 Evaluation Kit

As the board is shipped, the DATA TERMINAL READY (DTR) signal is also ignored by the board. If the DTE-CTL jumperiscut,however,useDTRto turn theboard on and off, assuming the on/off switch is in the on position. This optioncauses theboardtopower-downwhenyouturn offyourdumbterminalorexityourterminalemulation program, thus extending battery life. This function is useful for battery-operated systems.

## Autobaud

Before tuming on the evaluation board, set your terminal for an 8-bit, no-parity, full-duplex operation. You can set your terminal to any standard baud rate from 300Bd to 9600Bd.

Maxim supplies theSercomm terminal emulationprogram for operation with Maxim's EV kits. The SERCOMM.EXE program on the diskette can be copied to a hard disk drive or started from the floppy disk. The program will display a help menu for the available options.

When theboard is firstpowered up,thefirmware does some initialization and then enters an automatic baud-rate detection mode. The autobaud routine examines the first character received to determine the incoming baud rate.

## THEFIRSTCHARACTER RECEIVEDBY THEBOARD AFTER POWER-UP MUST BE A SPACE.

The space character (20 hex) is expected by the autobaudroutine.Sendingadifferentcharacterwillcause theautobaudfunctiontocalculateadifferentbaudrate from that of your terminal, and gibberish will appear on your screen. If you inadvertently press some other key first,tum theboard offtocorrecttheproblem.

Once the communication link is established, the monitor displays its sign-on banner and a prompt. The banner consists of the copyright notice and the ROM version information. The message will look something like this:

Copyright MAXIM INTEGRATED PRODUCTS, 1992 Version 1.00Released January 9, 1992

Type'?'for thehelp menu

After the log-in procedure is completed, the system displays a descriptiveprompt.

## Prompt

The monitor's prompt takes the form:

MAX190: &lt;current output fommat:current input mode&gt;. where the current output format can be HEX, DEC or BIN, and the current input mode is either UNl or BIP.

## MAX190 Evaluation Kit

The monitor has commands to set the current output and input modes. These commands are discussed in the Command Setsection.

You can determine the monitor's current operating mode by simply looking at the prompt. For instance, if the prompt reads

## MAX190:HEX:BIP&gt;

you know the MAX190 is encoding data using signed twos- complement 12-bit coding (presumably in pseudodifferential mode) and the output format is inASCil hexadecimal.

## Command Set

The monitor has an 8-byte input buffer. You will receive the monitor's error message '? if more than 8 characters are sent to the monitor without an ENTER (carriage retum). You will aiso receive the error message if the monitor receives an unknown command. All commands are single characters followed by ENTER (carriage retum). The '? command accesses help. The help screen lists all of the commands displayed in functional groups, as follows:

- ?-Help screen

Display Output Mode Selection Commands:

- H - Hexadecimal format
- D - ASCll decimal format
- ^B -- Binary values (12bits/2bytes, MSByte 1st)

MAX190 Conversion Mode Selection Commands:

- U - Unipolar mode
- B -- Bipolar mode

## MakeConversionCommands:

- C-( Continuously converts and displays until key is pressed
- M - Makes a single conversion and displays result.A carriageretumwith noother character also makes a conversion.

## RAMRelatedCommands:

- R - RAM test
- O - Outputs the values stored in RAM buffer
- S - Stores conversions in RAM buffer until full

The RAM related commands 'S' and 'O' appear only if the RAM chip is present on the evaluation board.

The Display Output Mode Selection commands are used to set the display format of the result of MAX190 conversions. When the MAX190 performs a conversion, the result is always 12 bits long. The 12 bits of data are presented as follows:

H-Hexadecimal fomat

8

The 12-bit value is converted into ASCll hexadecimal format with a dynamic range of ooo to FFF. The present input mode has no effect on theoutputdata in HEX mode.This meansthat FFF equals a count of -1 in the bipolar (BIP) mode or 4095 counts in the unipolar (UNl) mode.

## D - ASCll decimal format

The 12-bit value is converted into ASCH decimal format. The dynamic range depends on the current input mode, as follows:

INPUT MODE

DYNAMIC RANGE

Unipolar (UNI)

0 ... 4.095

Bipolar (BIP)

-2.048 ... 2..047

^B (Control B) - Binary values (12bits/2bytes, MSByte 1st)

The ^B command causes the binary values to be output asrawbinary data(i.e.unformatted) in a 2-byte packet.The first byte hasfour leading zeros followed by the conversion's most significant 4 bits.The second byteholds the conversion's least significant 8 bits.

As with the HEX output mode, the input mode does not change the format of the data. The dynamic range of the output, expressed as a binary-bit pattem, is:

0000 0000 0000 0000...0000 1111 1111 1111

Input mode is useful when capturing data to a disk log file, but do not send this data to your display screen because the binary values will have unpredictable control effects on your screen.

The Conversion Mode Selection commands are used to tell the MAX190 which data transfer function it should use to present the conversion result.

## B -Bipolar mode

In bipolar mode, the MAX190 outputs a signed 12-bit twos-complement number.TheMAX190 is now operating in pseudo-differential mode, and the AIN- to analog ground jumper is cut open. See the MAX190 data sheet for a discussion of pseudo-differential input, output data format, dynamic performance, and unipoiar/bipolar transfer functions.

U - Unipolar mode

Unipolar mode is the monitor's default operating mode. The input voltage is expected to range from 0V to +4.095V.

MAXIM

The main function of the EV kit is to make the MAX190 perform a conversion and to display the results.

- M-Makes a single conversion and displays result. A carriage return with no other characteralsomakesaconversion.

The MAX190 is commanded to make one conversion in thecurrentinputmode,and theresult isdisplayed in the current output mode.

- C - Continuously converts and displays result Like the M command, conversions are perfomed,

but they continue until any key is pressed.

If your terminal cannot accept the data at full speed, data will be lost. TheXOFFor any other characterwill terminate this command. If you have a problem, try operating your terminal at a slower baud rate. This waming also applies to theRAMoutput'O'command.

TheRAM Related commandsareusefulwhentheoptional 8kbyte RAM chip is installed in the evaluation board.

## R -RAM test

The monitor continuously fills the RAM with the following bit pattems, and then reads the data back to verify RAM integrity:

|   BINARY | HEX   |
|----------|-------|
|        0 | 00    |
| 11111111 | FF    |
| 01010101 | 55    |
| 10101010 | AA    |

The RAM test runs until the monitor receives any character. The results are displayed as errors, which are detected at the beginning of each test pattern run.

- S - Stores conversions in RAM buffer until full 4096 conversions are made in the current mode (UNl or BIP), and the results are stored in the RAM as raw 12-bit data.

O - Outputs the values stored in RAM buffer TheRAM'scurrentcontentsareformattedper the current output mode (HEX, DEC or BIN), and theresultsaresent to theterminal.

There are a few things tokeep in mind when outputting the contents of the RAM buffer. If you use decimal formatting, DO NOT change between UNI and BIP input modes betweenthe timeyou takea sample(S) and do the output(O), because the output coding will not match the input coding.

## Power Requirements

The MAXt90 evaluation board can be powered by a 9V alkaline battery, such as an NEMA 1604A, or by an extermal

<!-- image -->

## MAX190 Evaluation Kit

DC power supply. If an external power suppiy is used, the input voltage should be between 6.30V and 11.0V. Keep the input voltage at or below the high limit. The more currentthatisrequired,thelowertheinputvoltageshould be, due to power dissipation limitations of the package. Foradditional information referto the MAX667 data sheet.

The evaluation board draws 50mA to 80mA when operating with normal memory-cycle lengths. The current requirementsincreasewithextended memory-cycledecoding and with current demands of the circuitry added in the prototype area. The total current load must not exceed the limits of the MAX667. Refer to theMAX667 data sheet if additional current is required.

## Jumpor Optlons

Two jumper blocks permit shunts to be set on or off to affect the board's operation. In addition, three traces that canbecut,and a wire jumpercanbesoldered intoset options on the board.

## Cycle-Length Jumpor Block

In the normal configuration, the address decoder'soutput (U1,74HCT138)is asserted only for the duration of the 80C32's RD, WR or PSEN signals. This enables the ROM and RAM devices only for short periods of time.

If U1's pin 5 is grounded, the output stays asserted from the time memory in a specific block is first accessed until memoryin anotherblockis accessed.This increases the board'scurrentrequirementstoapproximately150mA, and the input voltage range must be limited (see the MAX667 data sheet). It is recommended that this operation be used only if additional circuitry require long address-enable signals.

## Watchdog-Enable Jumper Block

The watchdog-enable jumper block is normally installed. In this watchdog-enable mode,theμPautomatically resetsif itsfirmwarefailstosend a heartbeat to thewatchdog. Remove this jumper to defeat the automatic reset feature during firmware development.

## DTE Control Jumper

If the DTE control jumper is cut, use the terminal's DTR signal totumon theevaluationboard and toreset it.The board ignores DTR if the jumper is not cut.

## External Reforonce Jumper

The intermal reference jumper is open when the board is shipped, which enables the intermal reference. Soldering a wirebetween thepads to+5Vdisables the intemal referenceandallowstheuseofanextemalreferenceat the MAX190's VREF pin.

## MAX190 Evaluation Kit

## Analog Ground

As shipped, the MAX190's AlN- input is connected to AGND with a jumper. Cut this jumper to use the pseudodifferential input (BIP).

When using BIP mode, cut the AIN- to ground jumper. Then offset the AiN- input to +2.5V for proper BIP mode operation.

## Assembly Instructions

The MAX190 EV kit is shipped unassembled. To assemble the kit you will need a small-tipped, grounded soldering iron,wire cutters,anda screwdriver.You should have basic prototyping skills such as soldering and determining component values.Follow the directions carefully and verify your work at each step.

Trimtheleadsofthediodes,resistors andcapacitorsafter they have been soldered in position.

1. Remove theboard and parts from thebox and verify that all components on the parts list are present.
2. Insert and solder the diodes in place.Be sure to align the cathode band on the diode with the markings on the printed circuit board.
3. Insert and solder the resistors.
4. Insert and solder the 28-pin socket for U8, the 27C64 ROM.
5. Insert and solder the 24-pin socket for U5, the MAX190.
6. Insert and solder the non-polarized capacitors.
7. Insert and solder the polarized capacitors. MAKE SURETHEPOSITIVETERMINALOFTHECAPACITOR ALIGNS WITH THE POSITIVE PAD (marked with a + sign).
8. Insert and solder the 11.059MHz crystal.

CR1, CR2

..1N4001

CR3, CR4

..1N4148

CR5...

..1N5817

R1, R2, R4

.100kΩ5%

R6 ...

20kΩ 5%

R3, R5 ...

10kΩ5%

C3, C4

....15pF

C1, C5-C7, C9-C13, .

C15, C18-C22 ...........0.1μF

C2, C16, C17 ...........

4.7μF

C8.....

47μF

C14 ...

....100μF

10

9. Mount and solder into position the power switch, the power connector (J1), and the 25-pin RS-232 connector (J2).
10. Mount the battery holder into position using the twosided tape. Make sure the two terminal leads go through the board. Solder the terminal leads.
11. Insert and solder the two resistor SiP packages RP1 and RP2. Align the marked end of the SiP with theendof theoutlinemarkedwithabar.
12. Insert and solder the 2N7000 transistor. Align the case with the outlinedrawnon theprinted circuitboard.
13. Insert and solder the 2-pin header on JU2, Watchdog Enable. Place a shunt across the two pins.
14. Insert and solder the 3-pin header on JU1, Cycle Length. Place a shunt across the two inside pins.
15. Insert and solder the following devices. Align the notched end of thepackagewith thenotchedend of theoutlineontheboard.

RP1... 10kQ

RP2..

.100kQ

Sockets may be soldered in for each device.

U1...

..74HCT138

U2..

80C32

U3...

74HCT393

U4..

74HCT373

MAX667

MAX699

6264

U10...

MAX233

U11...

74HCT7266

U12....

.74HC74

16. Insert the 27C64 ROM at U8 and the MAX190 at U5 into their sockets.

When assembly has been completed, carefully examine the board for mis-inserted components and soldering faults.Remove excessflux andread the setup instructions.

Proceed to the Setup Section for board operations.

## Trouble-Shooting Guide Digita! Soctlon

With a terminal attached to the D25 connector, apply power to the evaluation board. Type a space before typing any other character. You should see the sign-on bannerdisplayedonyourscreeninresponseto the space. If you do not get the sign-on banner, use the following suggestions to isolate the problem.

MAXIM

If gibberish appears, either the terminal is not set to 8-bit, no-parity operation, or the first character sent to the board was not a space. Reset the board and press the spacebar. If each character that you type appears twice on the terminal, you are in half-duplex mode. Change the setting to full duplex.

If there is no response, check the following:

## Terminal Connection

Remove theRS-232cablefromtheevaluationboardand connect pins 2 and 3 together. When you type on the terminal, you should see the characters echoing on the screen.If not, the problem is somewhere in the terminal or cable.

## Power

Is there 5V on the +5V prototype pads? Measure the +5V on theprinted circuit board.Measurebetween theDGND and +5V traces found on the edge of the prototype area. If it is lower than 4.95V, verify the following:

Make sure the switch is tumed on.

Verify that the input voltage to the MAX667 (pin 8) is greater than 6.oV. If not, the problem is the power source.

Are you using a battery? Is the battery good? Try a new 9V alkaline battery. Its loaded output voltage is typically greater than 7V.

If you are using an extemal power supply, is it tumed on and connected with the proper polarity (positive to Vin)?

If the MAX667 input (pin 8 &gt; 6V) is okay but its output (pin 2) is low, check the following:

Has the DTE-CTL trace been cut to enable DTR control of power? If YES, is DTR being asserted by your terminal? Reconnect the DTE-CTL pads and try again. Pin 5 of the MAx667 needs to be pulled down to 0V to operate.

If the MAX667 output is 0V and it is warm,the output might be shorted. Examine the board for shorts and verify that all devices are inserted correctly.

## Microprocessor-Related Problems

If the 5V supply is okay, use a scope to check pin 5 of U3 (the 74HCT393) to verify that the oscillator is running. If not,the 80C32 or the reset circuit could be at fault.

Verify that P1.0 (pin 1 of the 80C32) toggles regularly. If not, the basic digital system is not operating properly. Check the following:

Verity that the reset circuit is operating properly. Pin 7 of the MAX699 shouid be low for 140ms to 500ms after power-up, then go high. If not, make sure its output is not overloaded.

<!-- image -->

## MAX190 Evaluation Kit

Verify that the ADo address line has a signal on it. If the μP is functioning properly, the address line will change states regularly.

Verify that the μP control lines are not overloaded.With a scope, observe the operation of the PSEN, ALE, WR, and RD lines. Thefirst two will toggle about every microsecond. The WR and RD lines will remain high while waiting for a character from the terminal.

Verify that the lower 8 bits of the address are being latched by the74HCT373.

Verify that the ROM output of the address-decode logic (pin 15 of the 74HCT139) toggles low during the PSEN pulse.

Verify that the RS-232 signals are inverted as they are passed through the MAX233 (see the schematic for pins) and that the RS- 232 levels on the 25-pin connector are correct.

## Analog Soctlon

If the board establishes communication with the terminal but fails to make conversions, check the following:

If the system hangs when you command it to do a conversion,check pin23 of theMAX190 tobe sure it is receiving its divided-down clock.

If the MAX190 is driven with a known input but the output value is not quite correct, check the voltages on the MAX190's pins for VDD = +5V, VsS = -5V, and DGND = DV.

If the output value never changes, be sure the MAx190's SDATA line is connected.Also check that AIN+ and AiNarenot shorted together.

If the output value goes from O to fufl scale with an input change of oV to 1omV, check that VREF is approximately 4.1V. If it is not, check that the EXT REF jumper is not in place and that the EXT REF pin 5 is OV.

Verify that the data-bus buffer (the 74HCT245) is gated by the A2D-SEL and RD signals.

If the input voltage is not current limited to less than 10mA and exceeds either supply rail, the input structure mightbe damaged.

The MAX667 will be the warmest IC; all other parts should be at room temperature. lf any part gets hot, tum the power off, let the board cool, and recheck. If still hot, check for shorts and replace the IC.

When in BIP mode, AIN- must be offset by 2.5V to allow a -2.048V input. Without the offset, only about -200mV will be 'ndino

## MAX190 Evaluation Kit

<!-- image -->

MAXIM

## MAX190 Evaluation Kit

<!-- image -->

MAX190 EV Kit

## MAX190 Evaluation Kit

<!-- image -->

WIXVW

## MAX190 Evaluation Kit

<!-- image -->

## MAx190Evaluation Kit

Figure 3.MAX190 Demo Board

<!-- image -->

Maximcannotassumeresponsibilityforuseofany circuitryotherthancircuitry entirelyembodiedinaMaximproductNocircuitpatent licensesareimplied. Maxinreservestherighttochangethecircuitryandspecificationswithoutnoticeatanytime.

16

1992Maxim Integrated Products MaximIntegratedProducts,120SanGabrielDrive,Sunnyvale,CA 94086(408)737-7600

Printed USA

MMIxlMis aregistered trademark of MaximIntegratedProducts.