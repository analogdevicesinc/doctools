<!-- lastmod 2022-08-03 -->
## MAX187 Evaluation System/Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX187 evaluation system (EV system) consists of a MAX187 evaluation kit (EV kit) board plus a Maxim 68HC16 microcontroller (µC) module. Both boards come fully assembled and tested, and software is provided. The unit connects to an IBM-compatible personal computer.

The EV system can function as a data acquisition system, collecting samples from the MAX187, storing them in memory, and displaying the conversion results on the host computer. Conversions may be self-timed or synchronized to an external timebase. Waveforms can be digitized and displayed graphically versus time.

The EV system can also evaluate the MAX187's shutdown feature, and has provisions for monitoring the supply current in the various modes of operation (internal reference, external reference, or power-down).

Order the EV system (MAX187EVC16-DIP) for comprehensive evaluation of the MAX187 or MAX189. Order the standalone EV kit (MAX187EV KIT-DIP) for custom use or if the 68HC16 module (68HC16MODULE-DIP) has already been purchased with another Maxim EV system.  The MAX187 EV kit can also be used to perform limited evaluation on a stand-alone basis (see the MAX187 EV Kit Quick Start section). The EV system requires an external DC power source (such as a 12V DC wall transformer) and an IBM-compatible computer with a serial port and a 5 1/4" disk drive. To evaluate the MAX189, order the MAX187EVC16-DIP plus a free sample of the MAX189BCPA.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' Evaluates MAX187 and MAX189
- ' Complete Evaluation System Includes EV Kit and 68HC16 µC Module
- ' 12-Bit Resolution ADC
- ' QSPI Serial Interface
- ' 0V to 4.096V Input Range
- ' Internal Reference Voltage (MAX187)
- ' Low-Supply-Current Shutdown Mode
- ' Complete Source Code Provided
- ' Proven PC Board Layout
- ' Convenient Test Points Provided on Board
- ' User Prototype Area
- ' Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART             | TEMP. RANGE   | BOARD TYPE   |
|------------------|---------------|--------------|
| MAX187EVC16-DIP  | 0°C to +70°C  | Through-Hole |
| MAX187EVKIT-DIP  | 0°C to +70°C  | Through-Hole |
| 68HC16MODULE-DIP | 0°C to +70°C  | Through-Hole |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_EV System

<!-- image -->

™QSPI is a trademark of Motorola Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

Call toll free 1-800-998-8800 for free samples or literature.

## MAX187 Evaluation System/Evaluation Kit

## \_\_\_\_\_\_\_EV System Component List

|   QTY | DESCRIPTION                             |
|-------|-----------------------------------------|
|     1 | MAX187 evaluation kit (MAX187EVKIT-DIP) |
|     1 | 68HC16 µC module (68HC16MODULE-DIP)     |

## \_\_MAX187 EV System Quick Start

This section applies only to the use of the MAX187 EV kit operating with Maxim's 68HC16 module.

- 1) Copy the files from the distribution disk to your hard drive or to blank floppy disks. Store the MAX187 EV kit  software in its own directory to prevent conflicts with other Maxim EV kit files. The necessary files are in  the  root  directory  of  the  distribution  disk,  and ancillary files are located in the SOURCE and TMS320 subdirectories. These subdirectories are not required for EV kit operation, and are described in other sections of this manual.
- 2) Carefully connect the boards by aligning the 40-pin header of the MAX187 EV kit with the 40-pin connector of the 68HC16 µC module and gently press them together. The two boards should be flush against one another.
- 3) Use a small flat-blade screwdriver to connect a 9V to 15V DC power source to the µC module. The terminal block is located next to the on/off switch, in the  upper right corner of the module. Observe the polarity marked on the board.
- 4) Connect a cable from the computer's serial port to the µC module. If using a 9-pin serial port, use a straight-through 9-pin female-to-male cable. If the serial port uses a 25-pin connector, a standard 25pin to 9-pin adapter will be required.
- 5) Start up the MAX187 software on the IBM PC by setting the current directory to match the directory containing the Maxim programs, and then type the program name 'MAX187'.
- 6) The program allows the user to select which serial port is connected to the µC module. Press the space bar until the correct port is highlighted, then press ENTER.
- 7) The MAX187 program will switch to terminal-emulation mode. At this point, apply power to the 68HC16 module. The LED should light, and within 5 seconds

2

## \_\_\_\_\_\_\_\_\_\_\_\_EV Kit Component List

| DESIGNATION   |   QTY | DESCRIPTION                   |
|---------------|-------|-------------------------------|
| C1            |     1 | 0.1µF ceramic capacitor       |
| C2, C3        |     2 | 4.7µF electrolytic capacitors |
| J1            |     1 | Female 40-pin data connector  |
| J4            |     1 | 6-pin header                  |
| JU1           |     1 | 3-pin header                  |
| R1            |     1 | 10k Ω resistor                |
| U1            |     1 | Maxim MAX187ACPA              |
| None          |     4 | Rubber feet                   |
| None          |     1 | 8-pin socket for U1           |
| None          |     1 | MAX187 printed circuit board  |

the program will display a logon banner. The LED is a status indicator, not a power indicator; it will flash to indicate module readiness. Refer to the 68HC16 module self-check system.

- 8) To download and run the RAM resident code on the µC module, press ALT+L (i.e. hold down the ALT key and strike the L key). The program prompts for the file  name. Press the ENTER key to download and run the file KIT187.S19 on the 68HC16 module.
- 9) The KIT187.S19 RAM resident program offers a menu of commands, listed in Table 1.

## Stand-Alone MAX187 EV Kit \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

This section applies only to the use of the MAX187 EV kit without the µC module.

- 1) Connect a regulated 5V DC power supply to the terminals labeled POS5 and GND. The GND pad is ground, and the POS5 pad is the 5V input. The board draws less than 5mA of supply current.
- 2) To enable the MAX187's internal reference, connect the SHDN pin to 5V. To use an external reference, leave the SHDN pin open and provide a reference voltage at the VREF pad. To put the MAX187 in shutdown mode, connect the SHDN pin to ground.
- 3) Connect the interface signals to the CS, SCK, and DOUT test points. Use the AGND test point as signal  ground. See the MAX187 data sheet for timing information.
- 4) Apply the input voltage to the terminals labeled INPUT and GND.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX187 Evaluation System/Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_of Software

## EPROM Resident Program

A small bootstrap program is stored in the EPROM located on the 68HC16 board. The EPROM resident program initializes the 68HC16, tests the static RAM, configures the chip-select logic, establishes serial communications with the host, and downloads a program into RAM. It starts operating on power-up or whenever the RESET button is pressed. After RESET, it tests the RAM and then waits to receive a character on its serial port before transmitting its identification banner.

## RAM Resident Program

KIT187.S19 and MIN187.S19 are 68HC16 RAM-resident programs that are transferred from disk to the static RAM on the 68HC16 module. They are used transparently by the example programs. The example programs that do not require the full command set of KIT187 download the MIN187 program, which is smaller and implements only the read and collect commands. Because the MIN187 occupies less user RAM, more sample data can be collected (MIN187 can collect approximately 400 more samples than KIT187 before it must upload the samples to  the  host.)  When the KIT187 program is running, it offers the commands listed in Table 1. The MIN187 program commands are listed in Table 2.

## Table 1.  Commands Available when KIT187.S19 is Running

| KEY   | FUNCTION                                                                                                      |
|-------|---------------------------------------------------------------------------------------------------------------|
| Space | Read the MAX187 and print result in decimal.                                                                  |
| V     | Repeatedly read the MAX187 and print result in decimal.                                                       |
| R     | Read the MAX187 and print result in hexadecimal.                                                              |
| O     | Oscilloscope test; observe system timing by operat- ing the MAX187 at high speed without processing the data. |
| S     | Set the state of the SHDN pin.                                                                                |
| L     | Display low-power menu.                                                                                       |
| D     | Set power-up delay and sleep time (low-power menu only).                                                      |
| T     | Test the accuracy using the current power-up delay and sleep time settings (low-power menu only).             |
| M     | Return to main menu (low-power menu only).                                                                    |
| ?     | List the available commands.                                                                                  |

<!-- image -->

## Personal Computer Program

MAX187.EXE, which runs on an IBM-compatible computer, is a terminal program that establishes communication with the 68HC16 module and allows the user to download and run a Maxim-provided RAM resident program. The serial communication baud rate is initiated at 1200 baud to ensure proper operation with slower systems.

The MAX187.EXE program provides several commands that are associated with the host computer. These functions are listed in Table 3.

The MAX187.EXE program can store the text of a terminal session in a log file. To begin recording the terminal session, press ALT+O [the letter O]. The program will ask for a file name. Press ENTER to accept the default file name, or type in a different name. If there is already a file with that name, the old file will be erased. To close the file, press ALT+C. The log file will contain the complete text of the terminal session from the time when the file is opened until the file is closed.

## Graphing Program

The program SAMPL187.BAS samples the MAX187 and draws a graph of voltage over time. Preset sample rates  range from 2.5ksps to 10ksps. The time base is approximate and there is no triggering mechanism, so this  program is only suitable for observing the waveforms of an external frequency generator.

## Table 2.  Commands Available after MIN187 has been Downloaded

| KEY   | FUNCTION                                                                                                                                                                                                                                                                                                 |
|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ?     | Print RAM resident program version and list of com- mands available.                                                                                                                                                                                                                                     |
| r     | Read the MAX187 and display the value as a 2-byte hexadecimal number.                                                                                                                                                                                                                                    |
| c     | Collect and upload a number of data samples to the host PC. Samples can be collected at full speed, or collected with a fixed delay, or collected in accor- dance with an external clock. Approximately 16,000 samples may be collected and they can be dis- played in either decimal or in hexadecimal. |
| ESC   | Exit the evaluation software.                                                                                                                                                                                                                                                                            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX187 Evaluation System/Evaluation Kit

## Table 3.  Commands Available in MAX187.EXE Terminal Program

| KEY   | FUNCTION                              |
|-------|---------------------------------------|
| ALT+L | Load and run resident code on 68HC16. |
| ALT+X | Exit to DOS.                          |
| ALT+P | Change port (COM1, COM2).             |
| ALT+R | Send RESET command to 68HC16.         |
| ALT+O | Open a log file.                      |
| ALT+C | Close the log file.                   |
| ALT+B | Display baud rate menu.               |
| ALT+1 | 1200 baud                             |
| ALT+4 | 4800 baud                             |
| ALT+9 | 9600 baud                             |
| ALT+2 | 19200 baud                            |

## Table 4.  Compiled Program Dependencies

| PROGRAM    | PROGRAM SECTION          | SOURCE FILES             |
|------------|--------------------------|--------------------------|
| SIMPLE.EXE | main program             | simple.c                 |
| SIMPLE.EXE | 68HC16 command interface | sercmd.c, sercmd.h       |
| SIMPLE.EXE | MAX187 EV kit commands   | max187.c, max187.h       |
| MAX187.EXE | main program             | shell.cpp, global.h      |
| MAX187.EXE | custom controls          | meters.cpp, meters.hpp   |
| MAX187.EXE | terminal + downloader    | download.cpp, download.h |
| MAX187.EXE | 68HC16 command interface | sercmd.c, sercmd.h       |
| MAX187.EXE | MAX187 EV kit commands   | max187.c, max187.h       |

## DOS Development Platform

For applications that require custom software, the MAX187 EV kit includes a set of programs that can be used as a development platform to extend the functionality of the basic kit. Source code is in the SOURCE subdirectory of the MAX187 EV kit disk. Advanced C or C++ programmers should see Table 4 for the makefile dependencies.

The simplest program that accesses the MAX187 EV kit is SIMPLE.EXE, which loads the small RAM resident program into the 68HC16 module and then performs continuous conversions, until the user presses a key.

To run the SIMPLE.EXE program, enter the command SIMPLE from the DOS prompt. The program will ask which serial port is connected to the µC module. Press the '1' number key to select COM1, or press the '2' number key to select COM2. To terminate the program, press the ESC key.

Figure 1.  QSPI Interface Schematic

<!-- image -->

## Programming Languages Used

The IBM PC programs were compiled under Borland C++ version 3.1. The EPROM and RAM resident 68HC16 programs were assembled using the Motorola 68HC macro assembler version 4.1, which comes with Motorola's 68HC16Z1EVB evaluation board. Contact the Motorola Microprocessor and Memory Technologies Group at (512) 891-2628.

The BASIC programs are written in Mircosoft QuickBasic 1.0, which comes with MS-DOS 5.0 and later versions.

Using the QSPI to Read the MAX187 The 68HC16 module uses its queued serial peripheral interface (QSPI) in master mode to read the MAX187 between conversions. Figure 1 shows the schematic of the QSPI interface connections. The MAX187 EV kit software uses the following algorithm (provided on disk in the SOURCE subdirectory, file MIN187.ASM):

- 1) Initialize QSPI parameters as follows: Master Mode

SPBR = 2 (4.192MHz serial clock)

CPOL = 0, CPHA = 1

BITS = 13 bits per transfer

DTL = 1 (1.9µs delay after transfer)

(DSCKL is not used)

Control RAM entry must enable BITS and DTL; CS = 0 when active.

- 2) Assert CS low.
- 3) Wait  8.5µs  (maximum conversion time for the MAX187) or until MISO goes high. (Since DSCKL is only 7 bits, the maximum delay-before-clock available for a 16.78MHz 68HC16 is 128/16.78MHz = 7.628µs. Thus, the QSPI's DSCKL parameter cannot be used unless the system clock frequency is reduced.)
- 4) Start QSPI transfer.
- 5) Wait until QSPI transfer is complete.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX187 Evaluation System/Evaluation Kit

## Listing 1.  Using the QSPI to Read the MAX187

```
* Compiled under Motorola 68HC macro assembler version 4.1 * Complete source code is in file KIT187.ASM in SoURCE sub-directory * Pin assignment for MAX187 EVKIT ￥ ShdnMask EQU8 ；/SHDN/= OC1 = pin 30 (P1.3 on 80c32 module) Dout187 EQU 1 Inog！ = MISO =pin 35 (N/A on 80c32) Sclk187 EQU4 ；SCLK =SCK =pin 37(N/A on 80c32) Cs187 EQU8 ；/CS/ = PCs0/\SS\ = pin 38 (N/A on 80C32) * QSPI initialization parameters * CPOL EQU0 CPHA EQU 1 SPBR EQU $2 QSPI baud rate =(16.78MHz/(2*SPBR)) = 4.195 MHz BITS EQU $D 13 bits per transfer; enabled by CRBITSE field DSCKL EQU$O ： delaybefore Sck--not used DTL EQU $1 ： delay after transfer =(DTL*32/16.78MHz) = 1.9 usec NEWQP EQU$O pointer to first valid queue entry ENDQP EQU $O ；pointer tolastvalid queue entry * Initialize the GPT module as an I/O port BSET GPTPDR,#ShdnMask ；take \SHDN\ high to turn MAX187 ON BSET PDDR,#ShdnMask ；make sure\SHDN\is an output * Initialize the QSPI module LDAA #Cs187 STAA QPDR;pins that are high by default LDAA #Sclk187!Dout187!Cs187 STAA QPAR;pins that are assigned to the QSPI LDAA #Cs187!ScIk187 STAA QDDR ；pins that are outputs LDAA #$60 ；enable BIT and DTL STAA CRO ；control ram entry CLR SPCR3 LDD #$B502 ;BITS=13,SPBR=2,MASTER,CPOL=0,CPHA=1 STD SPCRO LDD #$0001;DTL=1,DSCK=0 STD SPCR1 LDD #$0000；NEWQP=0,ENDQP=0 STD SPCR2 *ReadMAX187: * Use the QSPI to read the value of the MAx187. * *On Entry: * QSPIparameters must beinitialized * *On Exit: * D = 12 bit value，right justified ReadMAX187: BCLR QPDR,#CS187 ；take\cs\（ow Wait1:E BRCLR QPDR,#Dout187,Wait1 ;wait for start bit BSETW SPCR1,#QSPIEnable； start the QSPI transfer WaitForQSPI: ipoll the QSPI until it is finished BRCLR SPSR,#SPSRSPIF,WaitForQSPI BSET( QPDR,#Cs187 ；take\cs\high LDD RRO ;get result from receive ram ANDD #$OFFF ；mask off start bit RTS
```

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5

## MAX187 Evaluation System/Evaluation Kit

Figure 2.  MAX187 to QSPI Interface Timing (CPOL = 0, CHPA = 1)

<!-- image -->

- 6) Set CS high.
- 7) Extract the 12 significant bits from the read queue. The data is right-justified.

Figure 2 is the timing diagram for the QSPI interface. Listing 1 is an assembly-code listing that shows how to use the QSPI to read the MAX187.

Using Bit-Pushing to Read the MAX187 The QSPI is not required by the MAX187. The MAX187 may be read by any equivalent bit-pushing algorithm. The following algorithm reads the MAX187 by setting and clearing I/O bits, and is functionally equivalent to the QSPI.

- 1) Assert SCK low.
- 2) Assert CS low.
- 3) Clear a 16-bit register that will be used to store the reading.
- 4) Wait until DOUT becomes high.
- 5) Set SCK high.
- 6) Assert SCK low.
- 7) Repeat 12 times:
8. 7.1) Set SCK high.
9. 7.2) Rotate the 16-bit reading register left one bit (i.e. multiply by two).
10. 7.3) Read DOUT into least significant bit of reading register.
11. 7.4) Clear SCK low.
- 8) Set CS high.
- 9) Extract the 12 significant bits from the 16-bit result register. The data is right-justified.

## \_\_\_\_\_\_\_\_\_\_\_\_Evaluating the MAX189

The MAX187 EV kit supports both the MAX187 and MAX189 ICs. The only difference between the two devices is that the MAX189 requires an external reference. Refer to the MAX187/MAX189 data sheet for the MAX189 reference requirements.

## Detailed Description \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_of Hardware

## MAX187 ADC

The central component of the evaluation board is the MAX187 analog-to-digital converter (ADC). Capacitor C1 is close to pin 1, C3 is close to pin 4, and analog ground is star grounded at pin 5. DC offset error may be improved by adding a 0.1µF capacitor between INPUT and AGND.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

6

## MAX187 Evaluation System/Evaluation Kit

Table 5.  Data-Interface Connections for 68HC16

| PIN No.   | 68HC16 SIGNAL   | MAX187 SIGNAL   | FUNCTION                              |
|-----------|-----------------|-----------------|---------------------------------------|
| 1-4       | GND             | AGND            | Ground                                |
| 7-8       | +5V             | +5V             | +5V Supply to MAX187 Evaluation Board |
| 30        | OC1             | SHDN            | Shutdown Pin                          |
| 35        | MISO            | DOUT            | Serial Data Output from MAX187        |
| 37        | SCK             | SCLK            | Serial Clock from 68HC16              |
| 38        | PSC0            | CS              | Chip Select from 68HC16               |

All other pins are reserved.

## Measuring Supply Current

To measure the amount of supply current drawn by the MAX187, use the following procedure:

- 1) Turn off the power to the EV system.
- 2) Carefully cut the trace at J2.
- 3) Install a 2-pin header at J2.
- 4) Connect a current meter in series with J2.

The direction of current flow is marked with an arrow. Do not connect or disconnect the current meter while the power is on.

After observing supply current in operating and in shutdown modes, the board may be restored by installing a shunt at J2.

## Data-Connector Interface

The 68HC16 and MAX187 communicate through the QSPI port on the 40-pin data connector. Table 5 lists the function of each bit when interfaced to the 68HC16 module. Figure 1b shows the QSPI interface schematic diagram.

<!-- image -->

## Table 6.  68HC11/SPI Interface Connections

| SPI SIGNAL   | MAX187 SIGNAL   | FUNCTION                                               |
|--------------|-----------------|--------------------------------------------------------|
| SPARE I/O    | SHDN            | Shutdown Pin                                           |
| SPARE OUTPUT | CS              | Chip Select from 68HC11                                |
| MISO         | DOUT            | Serial Data Output from MAX187                         |
| SCK          | SCLK            | Serial Clock from 68HC11                               |
| SS           | -               | Slave Select Input to 68HC11; must be pulled up to 5V. |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_SPI Interface

A 68HC11 can use its SPI™ (serial peripheral interface)  to  read  a  MAX187.  Table  6  lists  the  interface connections required by the SPI serial interface. Figure 2 is a schematic diagram of the SPI interface. Listing 2 shows how to use the SPI to read the MAX187. The algorithm is as follows:

- 1) Initialize SPI parameters: Master Mode SPR = 00 (1MHz serial clock) CPOL = 0, CPHA = 0
- 2) Assert CS low.
- 3) Wait until MISO goes high.
- 4) Begin SPI transfer.
- 5) Wait until SPI transfer is complete.
- 6) Save the first 8 bits in temporary storage. This first SPI byte contains the start bit followed by MAX187 data bits 11-5.
- 7) Continue the SPI transfer.
- 8) Wait until SPI transfer is complete.
- 9) Negate CS high.
- 10) Extract the 12 significant bits from the 16 bits that the SPI read. The second SPI byte contains MAX187 data bits 4-0 followed by three zero bits.

™SPI is a trademark of Motorola Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7

## MAX187 Evaluation System/Evaluation Kit

## Listing 2.  Using the SPI to Read the MAX187

```
* Compiled under Motorola Freeware assember ASxx.EXE Ver 1.03. * * Code fragment to show how to read the MAx187 with the SP1. * Pin assignment: * PA6 = 0C2 = output /CS/activelowchipselecttoMAx187 * PD2 = MISO = input DOUTdataoutputfromMAx187 * PD4 = SCK = output SCLK clock input to MAx187 * PINOC2 EQU%01000000 PINMISO EQU%00000100 PINMOSI EQU %00001000 PINSCK EQU%00010000 SSNId EQU %00100000 Dout187 EQU PINMISO ;DOUT = MISO Sclk187 EQU PINSCK ；SCLK = SCK Cs187 EQU PINOC2 ；/CS/=0C2 *Initialize the SPI LDX #base ;68Hc11 register base BSET DDRD,X PINSCK+PINMOSI suidindanoids BCLR DDRD,X PINSS+PINMISO ;SPI input pins temp_value Ds 2 ;reserve 2 bytes of RAM for ReadMAx187 subroutine ******************************************************* * Use the SPI to read the value of the MAx187. * *On Entry: * X contains 68Hc11 register base address * * On Exit: * D = 12 bit right-justified value read from MAx187 * * SPI Parameters: * Master mode * CPOL=0,CPHA =0 * 1 MHz baud rate * * Uses temp_value * ReadMAX187: LDAA #$50 ；No interrupt, Enable SPI, Master Mode STAA Spcr ;CPOL=0, CPHA=0, SPR=00=1'MHz BCLR PortA,X Cs187 ；take \cs)（ow Wait1: ; wait until MisO goes high BRCLR PortD,X PINMISO Wait1 LDAA #%11101010 STAA Spdr ;dummy write to begin SPI transfer Wait2: ;wait until SPl finishes BRCLR Spsr,X Spsr_SPIF Wait2 LDAA Spdr ; get first 8 bits STAA temp_value LDAA#%11101010 STAA Spdr ;dummywrite to continue SPI transfer Wait3: ;wait until SPI finishes BRCLR Spsr,X Spsr_SPIF Wait3 LDAA Spdr ; get next 8 bits STAA temp_value+1 BSET PortA,X Cs187 ；take\cs\high LDD temp_value ;get result RORA ;locate the actual data field RORB RORA RORB RORA RORB ANDA #$OF ; mask off non-data bits RTS
```

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

8

## MAX187 Evaluation System/Evaluation Kit

Figure 3.  SPI Interface Schematic

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_TMS320 Interface

The TMS320 subdirectory of the program disk contains a demonstration program that interfaces the MAX187 to Texas Instruments' TMS320C3X Evaluation Module (EVM), as shown in Figure 3. This demonstration requires the additional software included with the TMS320C3X EVM board, and is provided for the convenience of programmers who are already familiar with Texas Instruments' TMS320 family of digital signal processors. To connect the MAX187 EV kit to the TMS320C3X EVM, install a 2 x 5 pin ribbon-cable header in the prototype area and wire it in accordance with Table 7. The SHDN pin should be tied to 5V for normal operation.

The demo software configures the TMS320C30 so that FSR1 and DR1 are inputs, and CLKR1 and XF1 are outputs. The software uses the XF1 output to start a conversion. The XF1 pulse drives the MAX187 chip-select input.  The  CLKR1 output provides the serial clock to the MAX187. Data output from the MAX187 is received on the DR1 input. The FSR1 frame-start signal is also tied to the data output, so the start bit from the MAX187 marks the beginning of the serial frame.

To read the MAX187, the software drives the XF1 output low, then waits 8.5µs (the maximum conversion time). It  then  enables the serial receive clock. The MAX187 sends its start bit, followed by the serial data. The demo software polls the serial receiver until a complete frame has been received. Since only 12 of the 16 bits  received  are  significant,  the  demo  software  rightjustifies  the  significant  bits  and  removes  the  start  bit, then writes the 12-bit word to the TMS320C3XEVM's host data port.

For the complete ribbon-cable pinout, consult the TMS320C3X Evaluation Module Technical Reference that came with your TMS320C3X EVM.

<!-- image -->

Figure 4.  MAX187 to SPI Interface Timing (CPOL = 0, CPHA = 0)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

9

## MAX187 Evaluation System/Evaluation Kit

Figure 5.  TMS320 Interface Schematic

<!-- image -->

Table 7.  TMS320C3X EVM Interface Connections

| TMS320C30 SIGNAL   |   TMS320C3X EVM CONNECTOR PIN No. | MAX187 SIGNAL   | FUNCTION                         |
|--------------------|-----------------------------------|-----------------|----------------------------------|
| GND                |                                 1 | AGND            | Signal Ground                    |
| DR                 |                                 4 | DOUT            | Data Received from MAX187        |
| XF1                |                                 8 | CS              | Active-Low Chip Select to MAX187 |
| FSR                |                                 2 | DOUT            | Frame-Start Input to TMS320      |
| CLKR               |                                 9 | SCLK            | Serial Clock to MAX187           |
| GND                |                                10 | AGND            | Signal Ground                    |

Note:  TMS320 FSR and DR both connected to MAX187 DOUT.

Figure 6.  MAX187 to TMS320 Interface Timing

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

```
;Compiled under TMS320c3x/4x COFF Assembler version 4.50 .data STCK .word 0809F00H;initialstack pointer CTRL .word 0808000H ： peripheralinterfacebase address HOST_DATA .word 0804000H ： hostdataport address IOF_AMASK .set 000OEH ： clearallxF1bitsinI0F register IOF_SET_XF1 .set 00060H make xF1 pin an output;value =1 IOF_RESET_XF1 .set 00020H makeXF1pin anoutput;value=0 SerGlob1 .word 08100280H SerPrtx1 .word 00H ;assign CLKx,DX,FSX pins as general inputs SerPrtR1 .word 0111H aSSign CLKR,DR,FSR to Serial port SerTim1 .word 03COH SerTim1val .word 010000H .text init LDI 0,ST :initialize status register LD1 0,DP point data page pointer into rom LDI @STCK,SP ： initialize stack pointer LD1 IOF,R1 startwith xF1high AND IOF_AMASK,R1 OR IOF_SET_XF1,R1 LD1 R1,1OF LD1 aCTRL,ARO :peripheral inferface address LD1 @HOST_DATA,AR1 ;host interface address LD1 @SerIim1val,R0 STI R0,*+AR0(86) ; serial ch1 timer period LDI @SerGlob1,R0 11S RO,*+AR0(80) ;serial global register LDI @SerPrtX1,R0 STI RO,*+AR0(82) ; serial transmit control register LDI aSerPrtR1,R0 STI RO,*+AR0(83) ;serial receive control register LDI aSerIim1,R0 ST1 RO,*+AR0(84) ;serial ch1 timer register next_sample: 107 IOF,R1 ;assert chip select AND IOF_AMASK,R1 OR IOF_RESET_XF1,R1 LDI R1,IOF LDI 61,R0 ;delay for 10 usec (30 MHz system clock) wait_for_conversion: SUBI 1,RO ；5 cycles= 166.6nsec per delay iteration BNZ wait_for_conversion LDI 03COH,R1 STI R1,*+AR0(84) ; turn on the serial receive clock Loop LDI *+AR0(80),R2 ；read global control register AND 01H,R2 ： testthereceiverreadybit BZ Loop ；loop until data is received LDI 0300H,R1 11S R1,*+ARO(84) ;turn off the serial receive clock LDI IOF,R1 ;negate chip select AND IOF_AMASK,R1 OR IOF_SET_XF1,R1 LD1 R1,10F LDI *+AR0(92),R3 ：copyreceived data intoR3 ROR R3 ；stripofftheleading one ROR R3 ROR R3 AND OFFFh,R3 SendToHost STI R3,*+AR1(0) ;send R3 to host LDI 9,R0 ;delay for 1.5 usec(30 MHz system clock) wait_for_ tracking: SUBI1,RO BNZ wait_for_tracking BR @next_sample ;this program runs forever .end
```

Listing 3.  Using the TMS320C3X EVM to Read the MAX187

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX187 Evaluation System/Evaluation Kit

Figure 7.  MAX186 EV Kit Component-Side Layout

<!-- image -->

12

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX187 Evaluation System/Evaluation Kit

<!-- image -->

Figure 8.  MAX187 EV Kit Component Placement Guide

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX187 Evaluation System/Evaluation Kit

Figure 9.  MAX187 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX187 Evaluation System/Evaluation Kit

<!-- image -->

Figure 10.  MAX187 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX187 Evaluation System/Evaluation Kit

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_68HC16 Module Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                |
|---------------|-------|------------------------------------------------------------|
| C1, C2, C3    |     3 | 1µF ceramic capacitors                                     |
| C4, C5        |     2 | 22µF, 25V radial-lead electrolytic capacitors              |
| C6, C7        |     2 | 22pF capacitors                                            |
| C8            |     1 | 0.01µF capacitor                                           |
| C9            |     0 | Reference designator, not used                             |
| C10-C14       |     5 | 0.1µF capacitors                                           |
| D1            |     1 | 1N4001 diode                                               |
| J1            |     1 | 40-pin right-angle male connector                          |
| J2            |     1 | 2-circuit terminal block                                   |
| J3            |     1 | Right-angle printed circuit board mount, DB9 female socket |
| J4            |     0 | Empty                                                      |
| JU1           |     0 | Empty                                                      |
| JU2           |     0 | Reference designator, not used                             |
| JU3           |     0 | Empty                                                      |
| JU4           |     0 | Empty                                                      |
| JU5           |     0 | Empty                                                      |
| L1            |     0 | Empty                                                      |
| L2            |     0 | Empty                                                      |
| LED1          |     1 | Light-emitting diode                                       |
| R1            |     1 | 10M Ω , 5% resistor                                        |

## 68HC16 Module \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The 68HC16 module is an assembled and tested printed-circuit board intended for use with Maxim's highspeed serial-interface evaluation kits (EV kits). The module uses an inexpensive 8-bit implementation of Motorola's MC68HC16Z1 microcontroller (µC) to collect data samples at high speed using the QSPI™ interface. It  requires  an  IBM-compatible personal computer and an external DC power supply, typically 12V DC or as specified in EV kit manual.

Maxim's 68HC16 module is provided to allow customers to evaluate selected Maxim products. It is not intended to  be used as a microprocessor development platform, and such use is not supported by Maxim.

™ QSPI is a trademark of Motorola Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| DESIGNATION   |   QTY | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| R2            |     1 | 330k Ω , 5% resistor                                               |
| R3, R4        |     2 | 10k Ω , 5% resistor                                                |
| R5            |     1 | 470 Ω , 5% resistor                                                |
| R6            |     1 | 10k Ω SIP resistor                                                 |
| SW1           |     1 | Slide switch                                                       |
| SW2           |     1 | Momentary pushbutton switch                                        |
| U1            |     1 | 68HC16 µC, part # MC68HC16Z1CFC16 (132-pin plastic quad flat pack) |
| U2            |     1 | Maxim MAX233CPP                                                    |
| U3            |     1 | 27C256 EPROM containing monitor program                            |
| U4            |     1 | 7805 regulator, TO-220 size                                        |
| U5            |     1 | 62256 (32K x 8) static RAM                                         |
| U6            |     1 | 74HCT245 bidirectional buffer                                      |
| U7            |     1 | Maxim MAX707CPA                                                    |
| Y1            |     1 | 32.768kHz watch crystal                                            |
| None          |     4 | Rubber feet                                                        |
| None          |     1 | 28-pin socket for U3                                               |
| None          |     1 | 20-pin socket for U6                                               |
| None          |     1 | 3" x 5" printed circuit board                                      |
| None          |     1 | Heatsink for U4, thermalloy # 6078                                 |

## 68HC16 Module \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Power Input Connector J2

The 68HC16 module draws its power from a user-supplied power source connected to terminal block J2. Be sure to note the positive and negative markings on the board. A three-terminal 5V regulator allows input voltages between 8V and an absolute maximum of 20V. The 68HC16 module typically requires 200mA of input current.

## 68HC16 Microcontroller

U1 is Motorola's 68HC16Z1 µC. Contact Motorola for µC information, development, and support. Maxim EV kits use the high-speed queued serial peripheral interface (QSPI) and the internal chip-select generation.

A MAX707 on the module monitors the 5V logic supply, generates the power-on reset, and produces a reset pulse whenever the reset button is pressed.

<!-- image -->

## MAX187 Evaluation System/Evaluation Kit

The 68HC16 uses a phase-locked loop (PLL) to set its bus speed. Crystal Y1 is a 32.768kHz frequency reference. The internal oscillator runs 256 times faster than the external crystal. When the 68HC16 is reset, it waits for the PLL to lock before it executes any software. After the PLL locks onto the reference frequency, the software doubles the clock speed by writing to the clock synthesizer control register, selecting a bus speed of 16.78MHz.

## U5, the user RAM area, is a 32kbyte CMOS static RAM.

The 74HCT245 octal buffer lets the 68HC16 module access an 8-bit port on the 40-pin interface connector. This memory-mapped port consists of separate read and write strobes, four chip selects, four address LSBs, and eight data bits.

## Serial Communications

J3 is an RS-232 serial port, designed to be compatible with the IBM PC 9-pin serial port. Use a straightthrough DB9 male-to-female cable to connect J3 to this port. If the only available serial port has a 25-pin connector, you may use a standard 25-pin to 9-pin adapter. Table 8 shows the pinout of J3.

The MAX233 is an RS-232 interface voltage level shifter with two transmitters and two receivers. It includes a built-in charge pump with internal capacitors that generates the output voltages necessary to drive RS-232 lines.

## 40-Pin Data Connector J1

The 20 x 2 pin header connects the 68HC16 module to a Maxim EV kit. Table 9 lists the function of each pin. Note that 68HC16 object code is not compatible with 68HC11 object code. Use the 68HC16 module only with those modules that are designed to support it, and only download code that is targeted for the 68HC16 module. Downloading incorrect object code into the 68HC16 module will have unpredictable results.

## Address Ranges

The 68HC16 µC generates various enable signals for different address ranges. The ROM and RAM enable signals are fed directly to the respective chips. Several additional signals (J1.11-J1.14) are available on the data connector to be used by Maxim EV kits. Table 10 outlines the address ranges for each of the elements found on the 68HC16 module, and Table 11 is a truth table that describes the logic for each of the 68HC16's chip-select outputs. Because the addresses are not completely decoded, the boot ROM and user RAM have shadows.

<!-- image -->

Table 8.  Serial Communications Port J3

|   PIN | NAME   | FUNCTION                                         |
|-------|--------|--------------------------------------------------|
|     1 | DCD    | Handshake; hard-wired to DTR and DSR             |
|     2 | RXD    | RS-232-compatible data output from 68HC16 module |
|     3 | TXD    | RS-232-compatible data input to 68HC16 module    |
|     4 | DTR    | Handshake; hard-wired to DCD and DSR             |
|     5 | GND    | Signal ground connection                         |
|     6 | DSR    | Handshake; hard-wired to DCD and DTR             |
|     7 | RTS    | Handshake; hard-wired to CTS                     |
|     8 | CTS    | Handshake; hard-wired to RTS                     |
|     9 | None   | Unused                                           |

Table 9.  40-Pin Data-Connector Signals

| PIN   | NAME    | FUNCTION                     |
|-------|---------|------------------------------|
| 1-4   | GND     | Ground                       |
| 5, 6  | VPREREG | Unregulated input voltage    |
| 7, 8  | VCC     | +5V from on-board regulator  |
| 9     | RD      | Read strobe                  |
| 10    | WR      | Write strobe                 |
| 11    | 7E000   | Chip select for 7E000-7E7FF  |
| 12    | 7E800   | Chip select for 7E800-7EFFF  |
| 13    | 7F000   | Chip select for 7F000-7F7FF  |
| 14    | 7F800   | Chip select for 7F800-7FFFF  |
| 15    | A00     | Address bit 0 (LSB)          |
| 16    | A01     | Address bit 1                |
| 17    | A02     | Address bit 2                |
| 18    | A03     | Address bit 3                |
| 19    | EXTD0   | Buffered data bus 0 (LSB)    |
| 20-26 | EXTD1-7 | Buffered data bus bits 1-7   |
| 27    | IC1     | General I/O port bit 0 (LSB) |
| 28    | IC2     | General I/O port bit 1       |
| 29    | IC3     | General I/O port bit 2       |
| 30    | OC1     | General I/O port bit 3       |
| 31    | OC2     | General I/O port bit 4       |
| 32    | OC3     | General I/O port bit 5       |
| 33    | OC4     | General I/O port bit 6       |
| 34    | IC4     | General I/O port bit 7       |
| 35    | MISO    | QSPI master-in, slave-out    |
| 36    | MOSI    | QSPI master-out, slave-in    |
| 37    | SCK     | QSPI serial clock            |
| 38    | PCS0/SS | QSPI chip-select output      |
| 39    | CLKOUT  | System clock output          |
| 40    | PWMA    | Pulse-width-modulator output |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX187 Evaluation System/Evaluation Kit

## Table 10. 68HC16 Module Memory Map (all address values are in 20-bit hex)

| PIN         | FUNCTION                                      |
|-------------|-----------------------------------------------|
| 00000-07FFF | Boot ROM (U3, strobed by CSBOOT)              |
| 08000-0FFFF | Shadow of boot ROM                            |
| 10000-17FFF | User RAM (U5, strobed by CS0 and CS2)         |
| 18000-1FFFF | Shadow of user RAM                            |
| 20000-203FF | Internal standby RAM; 1kbyte                  |
| 20400-7DFFF | Unused                                        |
| 7E000-7E7FF | External chip select (J1 pin 11) (CS7)        |
| 7E800-7EFFF | External chip select (J1 pin 12) (CS8)        |
| 7F000-7F7FF | External chip select (J1 pin 13) (CS9)        |
| 7F800-7FFFF | External chip select (J1 pin 14) (CS10)       |
| 80000-F7FFF | Not accessed by the 68HC16                    |
| F8000-FF6FF | Unused                                        |
| FF700-FF73F | 68HC16's built-in ADC (not used)              |
| FF740-FF8FF | Unused                                        |
| FF900-FF93F | General-purpose timer module (GPT)            |
| FF940-FF9FF | Unused                                        |
| FFA00-FFA7F | System integration module (SIM)               |
| FFA80-FFAFF | Unused                                        |
| FFB00-FFB07 | Internal standby RAM (SRAM) control registers |
| FFB08-FFBFF | Unused                                        |
| FFC00-FFDFF | Queued serial module (QSM)                    |
| FFE00-FFFFF | Unused                                        |

## Boot ROM

The boot ROM, U3, is configured as an 8-bit memory device. Resistor R4 pulls data bit 0 low during system reset, forcing the µC to fetch instructions using only the upper eight data bits. The boot ROM checks the system and waits for commands from the host. Refer to the EV kit manual for specific start-up procedures.

## Software

All  software is supplied on a disk with the EV kit. Instructions  for  operating  the  software  are  included  in the EV kit manual. Refer to the EV kit manual for more information.

## \_\_\_\_\_\_\_68HC16 Module Self Check

To test the 68HC16 module's integrity, connect the power supply to the power terminals (J2). Do not connect anything to J1 or J3. Slide the power switch SW1 to the 'ON' position. The LED will light up, and will flash within 5 seconds.

If the LED flashes with a 50%-on/50%-off duty cycle, then it passed its self check. Note that this test does not exercise the RS-232 port or the EV kit 40-pin interface, but it does confirm that the power supply, microprocessor, ROM, and RAM passed the self test.

If  the  LED  flashes  with  a  10%-on/90%-off  duty  cycle, then it  failed  its  self  check.  Most  likely,  the  RAM  chip (U5) is bad.

If the LED remains on and does not flash, then the problem is either U3 (the EPROM), U1 (the microprocessor), U4 (the regulator), the MAX707 reset generator, or the power supply. Use a voltmeter to verify that the power supplies are good. Check the power-supply input and the +5V output from the regulator. Use an oscilloscope to see if the 32.768kHz reference oscillator is running.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX187 Evaluation System/Evaluation Kit

Table 11.  68HC16 Chip-Select Outputs Truth Table

| ADDRESS RANGE   | CSBOOT   | CS0   | CS1   | CS2   | CS5   | CS6   | CS7   | CS8   | CS9   | CS10   |
|-----------------|----------|-------|-------|-------|-------|-------|-------|-------|-------|--------|
| 0xxxx read      | L        | H     | H     | H     | H     | H     | H     | H     | H     | H      |
| 1xxxx read      | H        | H     | H     | L     | H     | H     | H     | H     | H     | H      |
| 1xxxx write     | H        | L     | H     | H     | H     | H     | H     | H     | H     | H      |
| 7E0xx read      | H        | H     | L     | H     | H     | L     | L     | H     | H     | H      |
| 7E0xx write     | H        | H     | H     | H     | L     | L     | L     | H     | H     | H      |
| 7E8xx read      | H        | H     | L     | H     | H     | L     | H     | L     | H     | H      |
| 7E8xx write     | H        | H     | H     | H     | L     | L     | H     | L     | H     | H      |
| 7F0xx read      | H        | H     | L     | H     | H     | L     | H     | H     | L     | H      |
| 7F0xx write     | H        | H     | H     | H     | L     | L     | H     | H     | L     | H      |
| 7F8xx read      | H        | H     | L     | H     | H     | L     | H     | H     | H     | L      |
| 7F8xx write     | H        | H     | H     | H     | L     | L     | H     | H     | H     | L      |

<!-- image -->

Figure 11. 68HC16 Module Schematic

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

19

## MAX187 Evaluation System/Evaluation Kit

Figure 11. 68HC16 Module Schematic (continued)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX187 Evaluation System/Evaluation Kit

<!-- image -->

Figure 11. 68HC16 Module Schematic (continued)

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

21

Evaluates: MAX187

## MAX187 Evaluation System/Evaluation Kit

Figure 12.  68HC16 Module Component Placement Guide

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX187 Evaluation System/Evaluation Kit

Figure 13.  68HC16 Module PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX187 Evaluation System/Evaluation Kit

Figure 14.  68HC16 Module PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit  patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

24

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600

© 1994 Maxim Integrated Products