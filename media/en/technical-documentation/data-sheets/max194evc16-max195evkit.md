<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX194 Evaluation System/Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX194 Evaluation System (MAX194EVC16-DIP) includes the MAX194 evaluation kit and Maxim's 68HC16 module. Evaluation software supplied with the kit  demonstrates the use of the MAX194 (or the MAX195) with Motorola's high-speed QSPI serial interface.  Complete source code is included. The EV system requires an IBM PC with a serial port and a 5 1/4" disk drive.

The stand-alone MAX194 Evaluation Kit (MAX194 EVKIT-DIP) is an assembled and tested PC board that embodies the standard application circuit. Separate power, digital, and analog ground planes minimize noise. Jumpers allow several operating modes. The board generates its own interface timing signals, or can be connected to a user-provided serial interface.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ♦ Proven PC Board Layout
- ♦ Complete Source Code Provided
- ♦ Shutdown-Mode Evaluation
- ♦ High-Speed Serial Interface
- ♦ Convenient Test Points Provided On-Board
- ♦ Operates from a Single 9V to 15V DC Power Supply
- ♦ Evaluates Both the 14-Bit MAX194 and the 16-Bit MAX195

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART            | TEMP. RANGE   | BOARD TYPE   |
|-----------------|---------------|--------------|
| MAX194EVC16-DIP | 0°C to +70°C  | Through-Hole |
| MAX194EVKIT-DIP | 0°C to +70°C  | Through-Hole |
| 68HC16MODULE    | 0°C to +70°C  | Through-Hole |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_EV System

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX194 Evaluation System/Evaluation Kit

## \_\_\_\_\_\_\_\_EV System Component List

|   QUANTITY | DESCRIPTION                             |
|------------|-----------------------------------------|
|          1 | MAX194 Evaluation Kit (MAX194EVKIT-DIP) |
|          1 | 68HC16 C Module (68HC16MODULE)          |

## \_\_\_MAX194 EV System Quick Start

This section applies only to the use of the MAX194 EV kit with the 68HC16 module.

- 1) Copy the files from the distribution disk to your hard disk.  Store  the  MAX194 EV kit software in its own directory.
- 2) Carefully align the 40-pin header of the MAX194 EV kit  with  the  40-pin  connector of the  µC module. Gently press them together. The two boards should be flush against each other. Note:  The MAX194 EV kit is not supported by the 80C32 module.
- 3) Make sure the jumpers are configured in accordance with Table 1.
- 4) Connect a 9V to 15V DC power source to the µC module, using a small screwdriver. The terminal block is located next to the on/off switch, in the upper right corner of the µC module. Plus and minus are marked on the board.
- 5) Connect a cable from the computer's serial port to the µC module. If using a 9-pin serial port, use a straight-through 9-pin female-to-male cable. If the

## Table 1.  Jumper Configuration when Used with 68HC16 Module

| JUMPER   | STATE   | FUNCTION                                                                                                                         |
|----------|---------|----------------------------------------------------------------------------------------------------------------------------------|
| JU1      | Closed  | Ground the SCLK pin                                                                                                              |
| JU3      | QSPI    | Conversion clock comes from QSPI clock                                                                                           |
| JU4      | QSPI    | Chip-select is driven by QSPI PCS0                                                                                               |
| JU5      | QSPI    | Conversion start is driven by QSPI PCS0                                                                                          |
| JU6      | Open    | Open = Normal Operation. Closed = Reset; do not close this jumper when using the µC module, because the µC drives the reset pin. |
| JU7      | AUTO    | 68HC16 module selects bipolar/ unipolar/shutdown modes                                                                           |

- available serial port uses a 25-pin connector, use a standard 25-pin to 9-pin adapter.
- 6) To start up the MAX194 software on the IBM PC, set the current directory to match the directory where the Maxim software is stored, and then type the program name 'MAX194'.
- 7) The program will ask which serial port is connected to the µC module. Press the space bar until the correct port is highlighted, then press ENTER. The MAX194 program will switch to terminal-emulation mode.
- 8) At  this  point,  apply  power  to  the  68HC16  module. The LED should light, and within 5 seconds the program will display a logon banner. Note that the LED is a status indicator, not a power light. It flashes to indicate module readiness.
- 9) To download and run the RAM resident code on the µC module, press ALT+L (that is, hold down the ALT key as you strike the L key). The program prompts for the file name. Press the ENTER key to download and run the file KIT194.S19 on the 68HC16 module.

The KIT194.S19 RAM resident program offers a menu of commands listed in Table 2.

To evaluate the MAX195, replace U1 with the MAX195.

## Table 2.  List of Commands Available in KIT194.S19

| COMMAND   | FUNCTION                                                                                                                      |
|-----------|-------------------------------------------------------------------------------------------------------------------------------|
| ?         | List available commands.                                                                                                      |
| R         | Read the MAX194.                                                                                                              |
| -         | Perform continuous conversions.                                                                                               |
| O         | Oscilloscope demonstration-observe system timing relationships by operating the MAX194 at full speed without processing data. |
| !         | Reset the MAX194.                                                                                                             |
| B         | Select bipolar mode.                                                                                                          |
| U         | Select unipolar mode.                                                                                                         |
| H         | Select hexadecimal output.                                                                                                    |
| D         | Select decimal output.                                                                                                        |
| L         | Toggle low-power mode on/off.                                                                                                 |
| T         | Set power-up delay and sleep time.                                                                                            |
| S         | Collect a fixed number of samples.                                                                                            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX194 Evaluation System/Evaluation Kit

## Stand-Alone EV Kit \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION                            |   QTY | DESCRIPTION                                      |
|----------------------------------------|-------|--------------------------------------------------|
| C1, C2, C4, C5, C19, C20, C23-C26, C29 |    11 | 0.1µF ceramic capacitors                         |
| C3                                     |     1 | 1µF ceramic capacitor                            |
| C6, C7                                 |     2 | 15µF, 20V low-ESR capacitors Sanyo OS-CON 20SA14 |
| C8-C11, C13-C16, C21                   |     9 | 10µF, 25V tantalum capaci- tors                  |
| C12, C18, C27                          |     3 | 100µF, 25V electrolytic capacitors               |
| C17, C171                              |     2 | 0.01µF ceramic capacitors                        |
| C22                                    |     1 | 47µF low-ESR capacitor Sanyo OS-CON 6SA47M       |
| D1, D2                                 |     2 | 1N5819 Schottky diodes                           |
| J1                                     |     1 | 2x20 female data connector                       |
| J2                                     |     1 | 10-pin header                                    |
| JU1, JU6                               |     2 | 2-pin headers                                    |
| JU3, JU7                               |     2 | 3-way headers                                    |
| JU4, JU5                               |     2 | 3-pin headers                                    |
| R1, R2                                 |     2 | 10 Ω , 5% resistors                              |
| R3, R8                                 |     2 | 680 Ω , 5% resistors                             |
| R4, R41                                |     2 | 22 Ω , 5% resistors                              |
| R5, R51                                |     2 | 47k Ω , 5% resistors                             |
| R6, R10, R11, R13, R61                 |     5 | 1k Ω , 5% resistors                              |
| R7                                     |     1 | 10k Ω , 5% resistor                              |
| R9                                     |     1 | 10M Ω , 5% resistor                              |
| U1                                     |     1 | Maxim MAX194                                     |
| U2                                     |     1 | Maxim MAX874                                     |
| U3                                     |     1 | 79L05 negative linear regulator                  |
| U4                                     |     1 | Optional crystal oscillator                      |
| U5, U8                                 |     2 | Maxim MAX400                                     |
| U6                                     |     1 | 78L05 positive linear regulator                  |
| U7                                     |     1 | ICL7662 inverter                                 |

<!-- image -->

## Stand-Alone MAX194 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_EV Kit Quick Start

This section applies only to the use of the MAX194 EV kit by itself, without the µC module.

- 1) Make sure the jumpers are configured in accordance with Table 3.
- 2) Connect the oscilloscope's channel A probe to the EOC test  point  on  header  J2,  and  the  channel  B probe to the DOUT test point. Ground the scope probes to the DGND test point or to the GND power pad. Trigger on the positive edge of channel A. Set the time base to 2µs per division, and set the vertical gain to 2V per division.
- 3) Apply +12V DC to the terminals labeled +12V and GROUND. The board draws less than 30mA of supply current.
- 4) Momentarily close JU6 to reset the MAX194 EV kit. Leave JU6 open for normal operation.
- 5) Apply a 0V to 4V signal source between the terminals labeled INPUT+ and INPUT-. The conversion codes may be observed on the oscilloscope's channel A. See the appropriate data sheet for timing information.

## Table 3.  Jumper Configuration for StandAlone MAX194 EV Kit

| JUMPER   | STATE   | FUNCTION                                              |
|----------|---------|-------------------------------------------------------|
| JU1      | Closed  | Ground the SCLK pin                                   |
| JU3      | OSC     | Conversion clock comes from crystal oscillator module |
| JU4      | GND     | Tie CS to GND, enabling data output on DOUT           |
| JU5      | CONT    | Tie CONV to EOC , continuous-conver- sion mode        |
| JU6      | Open    | Open = Normal Operation Closed = Reset                |
| JU7      | UNI     | Select unipolar mode                                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX194 Evaluation System/Evaluation Kit

## \_\_Detailed Description of Software

## EPROM Resident Program

A small bootstrap program is stored in the EPROM located on the 68HC16 board. The EPROM resident program initializes  the  68HC16, tests the static RAM, configures the chip-select logic, establishes serial communications with the host, and downloads program KIT194 into RAM. It  starts  operating on power-up or whenever the RESET button is pressed. After RESET, it tests the RAM, then waits to receive a serial character on its serial port before transmitting its identification banner.

## RAM Resident Program

KIT194.S19 is a 68HC16 RAM-resident program that is transferred from disk to the static RAM on the 68HC16 module. When the KIT194 program is running, it offers the commands listed in Table 2.

## Personal Computer Program

MAX194.EXE, which runs on an IBM-compatible computer, is a terminal program that establishes communication with the 68HC16 module and allows the user to download and run the Maxim-provided RAM resident program. The serial communication baud rate is initiated at 1200 baud (default setting) to ensure proper operation with basic systems.

The MAX194.EXE program provides several commands that are associated with the host computer. These commands are listed in Table 4.

The MAX194.EXE program can store the text of a terminal session in a log file. To begin recording the terminal session, press ALT+O [the letter O]. The program will ask for a file name. Press ENTER to accept the default file name, or type in a different name. If a file with that

## Table 4.  Commands Available in MAX194.EXE Terminal Program

| KEY   | COMMAND                               |
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

name already exists, the old file will be erased. To close the file, press ALT+C. The log file will contain the complete text of the terminal session from the time the file is opened until it is closed.

## Using the QSPI to Read the MAX194

The 68HC16 module uses its Queued Serial Peripheral Interface  (QSPI)  in  master  mode  to  read  the  MAX194. The MAX194 EV kit software uses the algorithm described below. Refer to the example program of Listing 1, which assigns QSPI entries 0 and 1 and programmable chip-select PCS0 to the MAX194. Note: This interface scheme requires that the QSPI clock be active during the MAX194 reset (see Reset and Calibration Procedure section).

- 1) Initialize the QSPI parameters as follows:
- 2) Verify that EOC is low before starting the conversion.
- 3) Start the QSPI transfer.
- 4) Wait until QSPI transfer is complete. The CPU may perform other tasks while waiting.
- 5) Extract the significant bits from QSPI RAM. Bits B13-B06 are located in QSPI receive RAM entry RR0 bits 7-0, and bits B05-B00 are located in entry RR1 bits 9-4. RR1 bits 3-2 are the sub-LSB bits of the MAX194 (see Table 5).

| PARAMETER   | VALUE   | EXPLANATION                                                                                |
|-------------|---------|--------------------------------------------------------------------------------------------|
| SPBR        | 5       | 1.68MHz serial clock                                                                       |
| CPOL        | 0       | Serial clock is low when idle                                                              |
| CPHA        | 1       | CPOL ≠ CPHA, data valid on falling clock edge                                              |
| BITS        | $0A     | Ten bits per QSPI transfer. Use two consecutive QSPI transfers to read the MAX194.         |
| DSCKL       | 2       | Delay 119ns between CS and first clock in the first QSPI transfer to satisfy MAX194 t DA . |
| COMD.0      | $D0     | Control RAM for first QSPI trans- fer: CONT = 1, BITSE = 1, DTL = 0, DSCK = 1, PSC0 = 0    |
| COMD.1      | $40     | Control RAM for second QSPI transfer: CONT = 0, BITSE = 1, DTL = 0, DSCK = 0, PSC0 = 0     |
| NEWQP       | 0       | Index of first queue entry to execute                                                      |
| ENDQP       | 1       | Index of last valid queue entry                                                            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX194 Evaluation System/Evaluation Kit

```
;Code Fragment to show how to read the MAx194 with the 68Hc16 QSPI. ;Compiled under Motorola 68HC Macro Assembler, Version 4.1 INII: LDAA #$30 ；ResetPin, ShdnPin high STAA GPTPDR LDAA#$30 ; ResetPin, ShdnPin are outputs STAA PDDR LDAA #$08 ;clock idle state is low STAA QPDR LDAA #$OF ;QSPI useS CS, SCK, MISO, MOSI STAA QPAR LDAA #$OE ;outputs are CS, ScK, MOSI STAA QDDR LDAA #$DO ;continue + BITSE + DSCK,PSCO=low STAA CRO QSPIcontrol ram for first half ofMAx194read LDAA #$40 ;BITSE,PCSO=low STAA CR1 ： QSPI control ram for second half of MAx194 read CLR SPCR3 ： set upQsPIin master mode LDD #$A905 ；BITS=10, SPBR=5,MaSter Mode，CPOL=0,CPHA=1 STD SPCRO LDD #$0200 ；DSCKL=2 STD SPCR1 LDD #$0100 ；ENDQP=1, NEWQP=0 STD SPCR2 ： setup queue, no wrap JSR ResetMAX194 ; re-calibrate the MAx194 now that everything's settled MAIN: JSR ReadMAX194 ；Read the MAX194 BRA MAIN This demo loop doesn't do anything with the value read ReSetMAX194: ；Reset（Re-calibrate)the MAx194: LDD #$6100 continuous QsPI transfers STD SPCR2 LDAA #$D1 ;continue + BITSE + DSCK，PSCO=high STAA CRO QSPI control ram entry 0 LDAA #$41 ： BITSE，PCSO=high STAA CR1 ；QspI control ram entry 1 BCLR GPTPDR,#ReSetPin ；take MAX194RESETpinlow ;Start the conversionclock inbackground BSETW SPCR1,#$8000 ；setQSPIEnablebit BCLR SPSR,#$80 ;clear SPIF bit WaitHigh1: BRCLR GPTPDR,#EOCPin,WaitHigh1；wait until EOC goeS high BSET GPTPDR,#ReSetPin ； take MAX194 RESET pin high WaitLow1: BRSET GPTPDR,#EOCPin,WaitLow1;wait until EOC goeS low LDD #$0100 STD SPCR2 ; setup queue for no wrap Resetwait: ;wait until SPIF bit is set BRCLR SPSR,#$80,ReSetWait LDAA #$DO ；restore MAx194 STAA CRO ；QSPI control ram LDAA #$60 STAA CR1 RTS ReadMAX194: ;Read the MAx194 in Unipolar mode: ;Verify that Eoc is low before we begin. BRSET GPTPDR,#EOCPin,ReadMAX194NotReady BSET GPTPDR,#ShdnPin ; take SHDN high to turn MAx187 on in unipolar mode BSET PDDR,#ShdnPin ;make sure SHDN is an output LDD #$0100 ； Set up QSPI to read the MAx194 once STD SPCR2 BSETW SPCR1,#$8000 ;start the QSPI BCLR SPSR,#$80 ;clear SPIF bit WaitForQSPI: : wait until the QSPI finishes BRCLR SPSR,#$80,WaitForQSPI LDD RR1 ; get 16 bit result RORD ；from QspI receive ram RORD ; and left-justify the result LDAA RRO+1 TSTD ;clear carry to indicate success RTS ReadMAX194NotReady: COMD ；set carry flag RTS ;to indicate MAx194 not ready
```

Listing 1.  Sample Code for 68HC16 Interface

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX194 Evaluation System/Evaluation Kit

## Using Bit-Pushing to Read the MAX194

The MAX194 may be interfaced using a bit-pushing algorithm, such as the following:

- 1) Verify that EOC is low before starting the conversion.
- 2) Assert CONV low to begin conversion.
- 3) Wait until EOC becomes high. Conversion has begun.
- 4) Set CONV high.
- 5) Wait until EOC becomes low. Conversion is complete.
- 6) Assert SCLK low.
- 7) Assert CS low.
- 8) Clear the 16-bit result register.
- 9) Repeat 16 times:
10. 9-1. Set SCLK high.
11. 9-2. Rotate the 16-bit result register left.
12. 9-3. Read DOUT into least significant bit of the result register.
13. 9-4. Assert SCLK low.
- 10) Set CS high.

## Reset and Calibration Procedure

When the MAX194 is installed in an environment with an unregulated temperature, thermal variation can cause DC offset errors. Transients on the power supply or reference during the power-on calibration are also a source of DC offset error. These errors can be eliminated by performing re-calibration, as outlined below:

- 1) Assert the MAX194 RESET pin low.
- 2) Run the conversion clock until EOC becomes high.
- 3) Set the MAX194 RESET pin high.
- 4) Run the conversion clock until EOC becomes low.

For best accuracy, a typical application circuit should allow time for the power supply and ambient temperature to settle before re-calibrating the MAX194. Refer to the Calibration section of the MAX194 data sheet.

## Table 5.  QSPI Receive Format for MAX194

| ADDR   | 15   | 14   | 13   | 12   | 11   | 10   | 9   | 8   | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
|--------|------|------|------|------|------|------|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| RR0    | x    | x    | x    | x    | x    | x    | x   | x   | B13 | B12 | B11 | B10 | B9  | B8  | B7  | B6  |
| RR1    | x    | x    | x    | x    | x    | x    | B5  | B4  | B3  | B2  | B1  | B0  | sub | sub | x   | x   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## \_Detailed Description of Hardware

## Jumper Options

Several jumper blocks allow different configurations of the MAX194. Jumper functions are listed in Table 6. See the Voltage Reference and Measuring Supply Current sections.

## Table 6.  Jumper Settings

| JUMPER   | POSITION   | FUNCTION                                                                                                       |
|----------|------------|----------------------------------------------------------------------------------------------------------------|
| JU1      | Closed     | Ground the SCLK pin.                                                                                           |
| JU1      | Open       | Allows the SCLK pin to be driven by the user.                                                                  |
| JU3      | 'OSC'      | Conversion clock is driven by crystal oscillator U4.                                                           |
| JU3      | 'EXT'      | Conversion clock is driven by the EXTCLK input pad.                                                            |
| JU3      | 'QSPI'     | Conversion clock is driven by the QSPI serial clock.                                                           |
| JU4      | 'QSPI'     | Connects CS to QSPI chip-select PCS0.                                                                          |
| JU4      | 'GND'      | Connects CS to ground; data output is always enabled.                                                          |
| JU5      | 'QSPI'     | Connects CONV to QSPI chip-select PCS0.                                                                        |
| JU5      | 'CONT'     | Connects CONV to EOC for continu- ous conversion mode.                                                         |
| JU6      | Open       | Normal operating mode.                                                                                         |
| JU6      | Closed     | Momentary closure resets and re-calibrates the MAX194. Do not close this jumper if the µC module is connected. |
| JU7      | 'SHDN'     | Select shutdown mode.                                                                                          |
| JU7      | 'AUTO'     | Lets 68HC16 drive the BP/UP/ SHDN pin. If no µC is connected, bipolar input mode is selected.                  |
| JU7      | 'UNI'      | Select unipolar mode.                                                                                          |
| JU7      | Open       | Select bipolar mode.                                                                                           |

## Data Connector Interface

The 68HC16 module and MAX194 communicate through the QSPI port on the 40-pin data connector. Table 7 lists the function of each pin.

## MAX194 Evaluation System/Evaluation Kit

## Analog Input Buffer

The analog input to the MAX194 may be buffered by U8. A MAX400 is used because of its low VOS drift. The feedback circuit consists of four passive components: R41, R61, C171, and R51. R41 isolates the op-amp's output from the dynamic capacitive load at the AIN input. R61 makes the network accurate at the reference input (without R61, the reference voltage would appear at  the  output  of  the  op  amp).  C171  compensates the high-frequency response by making R51 dominate at high frequencies.

Input offset  may be improved by adding a 1000pF to 0.01µF ceramic capacitor at site C28.

## Voltage Reference

The voltage reference U2 provides a 4.096V reference, which is buffered by U5. The buffer isolates the reference from the MAX194's capacitive switching load. To eliminate the buffer circuit, cut traces JU8 and JU9 and connect a wire from JU9 pin 1 to the VREF pad.

## Reference Buffer

The reference input to the MAX194 may be buffered by U5. The MAX400 op amp is used because of its low VOS drift. By using a bipolar (instead of CMOS) op amp, the substrate can be connected to the quiet analog ground, reducing the noise coupled through the power supplies. The feedback circuit consists of four passive components:  R4, R6, C17, and R5. R4 isolates the op-amp's output from the heavy capacitive load that  bypasses the VREF pin. R6 makes the network accurate at the reference input (without R6, the reference voltage would appear at the output of the op

Table 7.  Data-Interface Connections

| PIN NO.    | 68HC16 SIGNAL   | MAX194 SIGNAL   | FUNCTION                                          |
|------------|-----------------|-----------------|---------------------------------------------------|
| 1-4        | GND             | GND             | Ground                                            |
| 5, 6       | +12V            | +12V            | Unregulated 12V DC Supply                         |
| 7, 8       | +5V             | VDDD            | Regulated +5V DC from 68HC16 Module               |
| 9-26       | Reserved        | Reserved        | Reserved                                          |
| 27         | IC1             | EOC             | End-of-Conversion Output from MAX194              |
| 28, 29, 30 | Reserved        | Reserved        | Reserved                                          |
| 31         | OC2             | RESET           | Active-Low RESET to MAX194                        |
| 32         | OC3             | BP/UP/ SHDN     | Shutdown/Bipolar/Unipolar Input to MAX194         |
| 33, 34     | Reserved        | Reserved        | Reserved                                          |
| 35         | MISO            | DOUT            | QSPI Master Input; Serial Data Output from MAX194 |
| 36         | Reserved        | Reserved        | Reserved                                          |
| 37         | SCK             | CLK             | QSPI Serial Clock from 68HC16                     |
| 38         | PCS0            | CS              | QSPI Chip-Select from 68HC16                      |
| 39, 40     | Reserved        | Reserved        | Reserved                                          |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

amp). C17 compensates the high-frequency response by making R5 dominate at high frequencies.

The reference buffer U5 draws its power through the lowpass filter formed by R3 and C18. The filter provides the necessary power-supply rejection. U5 is powered by the unregulated input supply to ensure enough headroom to buffer the 4.096V reference.

## Layout, Power Supplies, and Grounding

Good PC board layout necessary to achieve specified performance, and an analog ground plane is essential for  optimum performance. The PC board layout artist must be provided with explicit instructions, preferably a pencil sketch of the placement of sensitive analog components and the routing of ground connections. See the EV kit PC board layout for an example. Use the following guidelines:

- 1) At the schematic level, keep the analog power supplies  and grounds separate from all other power supplies and grounds. Digital power may be connected to analog power through a 10 Ω series resistor to attenuate digital noise.
- 2) Cluster the MAX194, the voltage reference, and any input or reference buffers near the site where the analog signal enters the board. Place 0.1µF ceramic decoupling capacitors within 10mm of the MAX194's power-supply and voltage-reference pins.
- 3) Keep the analog-input signal ground return separate  from  the  analog  ground  plane,  connecting to analog  ground  only  at  the  AGND  pin  of  the MAX194. The analog input and its signal groundreturn  traces  should  both  follow  the  same  route  to help reject common-mode noise.

## MAX194 Evaluation System/Evaluation Kit

The MAX194 evaluation board generates its own highquality  power supplies from a single DC input (8V to 20V), such as a plug-in wall transformer. When the MAX194 evaluation board is connected to the 68HC16 µC module, the µC module uses the unregulated input supply to generate its own separate +5V digital supply.

U6 converts the unfiltered input down to +5V to provide the VDDA analog supply. Current spikes from the digital supply VDDD are attenuated by R1. Schottky diode D1 protects the device substrate. U7 inverts the +12V to -12V, and U3 regulates the -12V to -5V, providing the VSSA analog supply.

## Measuring Supply Current

To measure the supply current drawn by the MAX194, turn  off  the  power  and  prepare  the  board  by  carefully cutting the traces at IS1, IS2, IS3, and IS4, and installing 2-pin headers and shunts (see Table 8).

Table 8.  Current-Sense Jumpers

| JUMPER   | POWER SUPPLY   | DESCRIPTION   |
|----------|----------------|---------------|
| IS1      | VDDA           | Analog +5V    |
| IS2      | VSSA           | Analog -5V    |
| IS3      | VSSD           | Digital -5V   |
| IS4      | VDDD           | Digital +5V   |

Each supply may be measured by replacing the corresponding shunt with a current-meter connection. For example, to measure the current drawn by the +5V digital  supply,  replace the shunt at IS4 with a current meter. The direction of current flow is marked with arrows on the silkscreen. Do not connect or disconnect the current meter while the power is on.

After  observing supply current in operating and shutdown modes, the board may be restored by installing shunts at IS1-IS4.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX194 Evaluation System/Evaluation Kit

<!-- image -->

Figure 1.  MAX194 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX194 Evaluation System/Evaluation Kit

Figure 1.  MAX194 EV Kit Schematic (continued)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX194 Evaluation System/Evaluation Kit

<!-- image -->

Figure 1.  MAX194 EV Kit Schematic (continued)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX194 Evaluation System/Evaluation Kit

Figure 2.  MAX194 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX194 Evaluation System/Evaluation Kit

<!-- image -->

Figure 3.  MAX194 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX194 Evaluation System/Evaluation Kit

Figure 4.  MAX194 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX194 Evaluation System/Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_68HC16 Module Component List

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

The 68HC16 module is an assembled and tested printed-circuit  board intended for use with Maxim's highspeed serial-interface evaluation kits (EV kits). The module uses an inexpensive 8-bit implementation of Motorola's MC68HC16Z1 microcontroller (µC) to collect data samples at high speed using the QSPI™ interface. It  requires  an  IBM-compatible personal computer and an external DC power supply, typically 12V DC or as specified in EV kit manual.

Maxim's 68HC16 module is provided to allow customers to evaluate selected Maxim products. It is not intended to be used as a microprocessor development platform, and such use is not supported by Maxim.

™ QSPI is a trademark of Motorola Corp.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

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

## 68HC16 Module \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Power Input Connector J2

The 68HC16 module draws its power from a user-supplied power source connected to terminal block J2. Be sure to note the positive and negative markings on the board. A three-terminal 5V regulator allows input voltages between 8V and an absolute maximum of 20V. The 68HC16 module typically requires 200mA of input current.

## 68HC16 Microcontroller

U1 is Motorola's 68HC16Z1 µC. Contact Motorola for µC information, development, and support. Maxim EV kits use the high-speed queued serial peripheral interface (QSPI) and the internal chip-select generation.

A MAX707 on the module monitors the 5V logic supply, generates the power-on reset, and produces a reset pulse whenever the reset button is pressed.

## MAX194 Evaluation System/Evaluation Kit

The 68HC16 uses a phase-locked loop (PLL) to set its bus speed. Crystal Y1 is a 32.768kHz frequency reference. The internal oscillator runs 256 times faster than the external crystal. When the 68HC16 is reset, it waits for the PLL to lock before it executes any software. After the PLL locks onto the reference frequency, the software doubles the clock speed by writing to the clock synthesizer control register, selecting a bus speed of 16.78MHz.

U5, the user RAM area, is a 32kbyte CMOS static RAM.

The 74HCT245 octal buffer lets the 68HC16 module access an 8-bit port on the 40-pin interface connector. This memory-mapped port consists of separate read and write strobes, four chip selects, four address LSBs, and eight data bits.

## Serial Communications

J3 is an RS-232 serial port, designed to be compatible with the IBM PC 9-pin serial port. Use a straight-through DB9 male-to-female cable to connect J3 to this port. If the only available serial port has a 25-pin connector, you may use a standard 25-pin to 9-pin adapter. Table 9 shows the pinout of J3.

The MAX233 is an RS-232 interface voltage level shifter with two transmitters and two receivers. It includes a built-in charge pump with internal capacitors that generates the output voltages necessary to drive RS-232 lines.

## 40-Pin Data Connector J1

The 20 x 2 pin header connects the 68HC16 module to a Maxim EV kit. Table 10 lists the function of each pin. Note that 68HC16 object code is not compatible with 68HC11 object code. Use the 68HC16 module only with those modules that are designed to support it, and only download code that is targeted for the 68HC16 module. Downloading incorrect object code into the 68HC16 module will have unpredictable results.

## Address Ranges

The 68HC16 µC generates various enable signals for different  address ranges. The ROM and RAM enable signals are fed directly to the respective chips. Several additional signals (J1.11-J1.14) are available on the data connector to be used by Maxim EV kits. Table 11 outlines  the  address ranges for each of the elements found on the 68HC16 module, and Table 12 is a truth table that describes the logic for each of the 68HC16's chip-select outputs. Because the addresses are not completely decoded, the boot ROM and user RAM have shadows.

Table 9.  Serial Communications Port J3

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

## Table 10.  40-Pin Data-Connector Signals

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

<!-- image -->

## MAX194 Evaluation System/Evaluation Kit

Table 11.  68HC16 Module Memory Map (all address values are in 20-bit hex)

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

<!-- image -->

## Boot ROM

The boot ROM, U3, is configured as an 8-bit memory device. Resistor R4 pulls data bit 0 low during system reset, forcing the µC to fetch instructions using only the upper eight data bits. The boot ROM checks the system and waits for commands from the host. Refer to the EV kit manual for specific start-up procedures.

## Software

All  software is supplied on a disk with the EV kit. Instructions for  operating the software are included in the EV kit manual. Refer to the EV kit manual for more information.

## \_\_\_\_\_\_\_68HC16 Module Self Check

To test the 68HC16 module's integrity, connect the power supply to the power terminals (J2). Do not connect anything to J1 or J3. Slide the power switch SW1 to the 'ON' position. The LED will light up, and will flash within 5 seconds.

If  the  LED  flashes  with  a  50%-on/50%-off  duty  cycle, then it  passed its  self  check.  Note  that  this  test  does not exercise the RS-232 port or the EV kit 40-pin interface, but it does confirm that the power supply, microprocessor, ROM, and RAM passed the self test.

If  the  LED  flashes  with  a  10%-on/90%-off  duty  cycle, then it  failed  its  self  check.  Most  likely,  the  RAM  chip (U5) is bad.

If  the  LED  remains on and does not flash, then the problem is either U3 (the EPROM), U1 (the microprocessor), U4 (the regulator), the MAX707 reset generator,  or  the  power  supply.  Use  a  voltmeter  to  verify that  the  power  supplies are good. Check the powersupply input and the +5V output from the regulator. Use an oscilloscope to see if the 32.768kHz reference oscillator is running.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX194 Evaluation System/Evaluation Kit

## Table 12.  68HC16 Chip-Select Outputs Truth Table

Figure 5.  68HC16 Module Schematic

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

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX194 Evaluation System/Evaluation Kit

<!-- image -->

Figure 5.  68HC16 Module Schematic (continued)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX194 Evaluation System/Evaluation Kit

Figure 5.  68HC16 Module Schematic (continued)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX194 Evaluation System/Evaluation Kit

<!-- image -->

Figure 6.  68HC16 Module Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX194 Evaluation System/Evaluation Kit

Figure 7.  68HC16 Module PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX194 Evaluation System/Evaluation Kit

Figure 8.  68HC16 Module PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_