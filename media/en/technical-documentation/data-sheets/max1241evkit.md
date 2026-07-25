<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX1241 Evaluation System/Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX1241 evaluation kit (EV kit) is an assembled and tested PC board that demonstrates the 3V, 12-bit MAX1241 analog-to-digital converter.

The MAX1241 evaluation system (EV system) is a complete, low-cost, single-channel data-acquisition system consisting of a MAX1241 EV kit and a Maxim 3V microcontroller (µC) module. IBM PC-compatible software provides a handy user interface to exercise the MAX1241's features. Source code is provided.

Order the EV system for comprehensive evaluation of the MAX1241 using a personal computer. Order the EV kit  if  you  have  already  purchased  the  3V  µC  module with another Maxim EV system, or for custom use in other µC-based systems.

The MAX1241 EV kit evaluates both the MAX1241 and the  MAX1240. To evaluate the MAX1240, order a free sample of the MAX1240BCPA along with the MAX1241 EV kit.

## \_\_MAX1241 EV Kit Component List

| DESIGNATION   |   QTY | DESCRIPTION       |
|---------------|-------|-------------------|
| C1            |     1 | 0.01µF capacitor  |
| C2, C3, C6    |     3 | 0.1µF capacitors  |
| C4            |     1 | 4.7µF capacitor   |
| C5            |     1 | 10µF capacitor    |
| C7            |     1 | 0.047µF capacitor |
| J1            |     1 | 2x20 header       |
| J7            |     1 | 6-pin header      |
| JU1, JU2      |     2 | 2-pin headers     |
| R1            |     1 | 1k Ω resistor     |
| U1            |     1 | MAX1241BCPA       |
| U2            |     1 | MAX872CPA         |
| None          |     1 | PC board          |

## \_\_MAX1241 EVL11 Component List

|   QTY | DESCRIPTION                       |
|-------|-----------------------------------|
|     1 | MAX1241EVKIT-DIP                  |
|     1 | 68L11D m C Module (68L11D MODULE) |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' Proven PC Board Layout
- ' Complete Evaluation System
- ' Convenient On-Board Test Points
- ' Data-Logging Software
- ' Source Code Provided
- ' Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART             | TEMP. RANGE   | BOARD TYPE   |
|------------------|---------------|--------------|
| MAX1241EVKIT-DIP | 0°C to +70°C  | Through-Hole |
| MAX1241EVL11-DIP | 0°C to +70°C  | Through-Hole |

## MAX1241 EV System \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX1241 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Copy the files from the distribution disk to your hard disk or to blank floppy disks. The MAX1241 EV kit software should be in its own directory. The necessary files are in the distribution disk's root directory, and the source code is in the SOURCE subdirectory.  The  SOURCE subdirectory is not required to operate the EV kit.
- 2) Make sure that jumper JU1 is open and JU2 is closed (Table 1).
- 3) Carefully connect the boards by aligning the MAX1241 EV kit's 40-pin header with the 68L11D module's 40-pin connector. Gently press them together. The two boards should be flush against one another.
- 4) Connect a 5V DC power source (16V max) to the µC module. This is located at the terminal block next to the on/off switch, in the upper-right corner of the µC module. Observe the polarity marked on the board.

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 408-737-7600 ext. 3468.

## MAX1241 Evaluation System/Evaluation Kit

- 5) Connect a cable from the computer's serial port to the µC module. If using a 9-pin serial port, use a straight-through, 9-pin, female-to-male cable. If the only available serial port uses a 25-pin connector, a standard 25-pin to 9-pin adapter is required. The EV kit software checks the modem status lines (CTS, DSR, DCD) to confirm that the correct port has been selected.
- 6) Start the MAX1241 software on the IBM PC by setting  the  current  directory  to  match  the  directory containing the Maxim programs, then type the program name 'MAX1241'. Do not turn off or disconnect the µC module while the program is running; if you do, you will have to restart the program.
- 7) The program will ask which port the µC module is connected to. Press the space bar until the correct PC serial port is highlighted, then press ENTER. The MAX1241 program will be in terminal-emulation mode.
- 8) Turn on the power for the µC module. The module will display its logon banner and test its RAM.
- 9) Download and run the RAM resident program on the µC module by pressing ALT+L (i.e., hold down the ALT key as you strike the L key). The program prompts you for the file name. Press the ENTER key to download and run the file.
- 10) Press ALT+C to switch to the control-panel screen after the RAM resident program has been successfully downloaded.
- 11) Apply input signals to AIN on the MAX1241 EV kit board. Observe the readout on the screen. Table 2 lists the commands that are available from the control-panel screen.
- 12) Before turning off power to the MAX1241 EV kit, exit the program by pressing ALT+X.

## Detailed Description \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_of Hardware

## MAX1241 Stand-Alone EV Kit

The MAX1241 EV kit provides a proven PC board layout to facilitate evaluation of the MAX1241. It must be interfaced to appropriate timing signals for proper operation.  Refer to the MAX1241 data sheet for timing requirements.

## Evaluating the MAX1240

To evaluate the MAX1240, turn off power to the kit, remove  the  MAX1241,  and  replace  it  with  a MAX1240BCPA. Select the internal reference by opening JU2 and closing JU1.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Systems Using 3V and 5V Logic

Systems that have both 3V and 5V logic must provide level translation for the MAX1241's data output. No level translation is necessary on the inputs.

## Changing the Reference Voltage

The MAX872 is a 2.5V reference. To supply a different external reference, open JU2 and apply the reference voltage between VREF and GND. Refer to the MAX1241 data sheet for reference voltage requirements.

## Table 1. Jumper Settings

| JUMPER   | STATE            | FUNCTION                                                                                                          |
|----------|------------------|-------------------------------------------------------------------------------------------------------------------|
| JU1      | Closed           | The µC module controls the state of SHDN .                                                                        |
| JU1      | Open (default)   | Force SHDN to float. Disable internal reference (MAX1240).                                                        |
| JU2      | Closed (default) | Drive VREF with on-board MAX872 reference.                                                                        |
| JU2      | Open             | Disconnect MAX872 refer- ence. Use internal reference (MAX1240) or drive VREF pad with a user-supplied reference. |

## Detailed Description \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ of Software

The software allows the user to control the throughput rate,  power-up delay, and reference-range setting. It also provides for data logging. Refer to Table 2 for a complete listing of the available features.

The EV kit software program (KIT1241.L11) loaded into the 68L11D module operates at a 6.7ksps throughput.

For  faster  throughput,  download  the  program FAST1241.L11 at step 9 of the MAX1241 EV System Quick Start section. This program has a throughput rate of approximately 14ksps.

<!-- image -->

## MAX1241 Evaluation System/Evaluation Kit

Table 2. Command Reference

| KEY    | FUNCTION                                                                                                                                                                                                                                   |
|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| C      | Display the input codes in decimal format.                                                                                                                                                                                                 |
| D      | Delay between samples. Delays longer than one second are handled by the IBM PC; otherwise, the µC module handles the delay. Timing is approximate and should be verified with an oscilloscope.                                             |
| L      | Enable or disable data logging. If the -L command-line option was not specified, the L command prompts for a log-file name.                                                                                                                |
| O      | Oscilloscope demo. Samples are collected and discarded as quickly as possible. Observe waveforms and timing with an oscilloscope.                                                                                                          |
| P      | Power-up delay. Timing is approximate and should be verified with an oscilloscope. When VREF = V DD, power-up delay is not necessary and should be set to zero. Power-up delay is used regardless of which power-cycling mode is selected. |
| S      | Sample the input at high speed. The sampling rate is controlled by the P and D delays. Due to program overhead, the Oand S commands operate at different rates. Timing should be veri- fied with an oscilloscope.                          |
| V      | Display the input voltages.                                                                                                                                                                                                                |
| F3     | Write a marker into the data-log file.                                                                                                                                                                                                     |
| F5     | Change the assumed value of VREF.                                                                                                                                                                                                          |
| › , fl | Select power-down mode.                                                                                                                                                                                                                    |
| ALT+T  | Switch back to terminal mode.                                                                                                                                                                                                              |
| ALT+X  | Exit to DOS.                                                                                                                                                                                                                               |

<!-- image -->

Table 3. Command-Line Options when Starting MAX1241 Software

| COMMAND    | FUNCTION                                                                     |
|------------|------------------------------------------------------------------------------|
| 1          | Default to COM1 PC serial port.                                              |
| 2          | Default to COM2 PC serial port.                                              |
| MONO       | For use with LCD or monochrome display.                                      |
| -Lfilename | Open file 'filename' for data logging, and enable the data-logging commands. |
| VREF vvv   | Specify the actual measured voltage at the REF pin (nominally 2.5V).         |
| ?          | List command-line options.                                                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1.  MAX1241 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1241 Evaluation System/Evaluation Kit

<!-- image -->

Figure 2.  MAX1241 EV Kit Component Placement Guide

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1241 Evaluation System/Evaluation Kit

Figure 3.  MAX1241 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1241 Evaluation System/Evaluation Kit

<!-- image -->

Figure 4.  MAX1241 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1241 Evaluation System/Evaluation Kit

NOTES

8

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The 68L11D module is an assembled and tested PC board intended for use with Maxim's low-voltage dataacquisition evaluation kits (EV kits). The module uses Motorola's MC68L11D0FN2 microcontroller (µC) to collect data samples using the SPI interface. It requires an IBM PC computer and an external DC power supply of +5V to +16V, or as specified in the appropriate EV kit manual.

Maxim's 68L11D module allows customers to evaluate selected Maxim products. It is not intended to be a microprocessor development platform, and Maxim does not support such use.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Getting Started

All system components are guaranteed by their various manufacturers over the +3V to +3.6V power-supply range. Not all system components are guaranteed over the entire 2.5V to 5V VDD power-supply adjustment range. Verify correct operation using the following procedures:

- 1) Connect a +5V DC power source (16V max) to the µC module at the terminal block located next to the on/off switch, in the upper-right corner of the µC module. Turn the power switch on.
- 2) Connect a cable from the computer's serial port to the µC module. If using a 9-pin serial port, use a straight-through, 9-pin, female-to-male cable. If the only available serial port uses a 25-pin connector, a standard 25-pin to 9-pin adapter is required.
- 3) Start the evaluation kit software on the IBM PC. When the program asks which port the µC module is connected to, press the space bar until the correct port is highlighted, and then press ENTER. The software will be in terminal-emulation mode. (If using a generic terminal-emulation program instead of Maxim EV kit software, select 1200 baud, eight-bit character, no parity, one stop bit. Send a space character to start the monitor program.)
- 4) Adjust trim potentiometer R2 for the desired VDD supply voltage. Measure VDD between test point TP1 and ground. The mounting hole next to R2 is grounded.
- 5) To verify correct system operation, press the ESC key, type a capital 'T', and then select the countdown memory test. If the memory test fails or any other malfunction is reported, the VDD voltage is too low; increase VDD and repeat from step 4.
- 6) Turn the power switch off and connect the µC board to an appropriate Maxim EV kit board.

<!-- image -->

## 68L11D Module

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION    |   QTY | DESCRIPTION                                           |
|----------------|-------|-------------------------------------------------------|
| C1, C2         |     2 | 22pF ceramic capacitors                               |
| C3             |     1 | 0.01µF ceramic capacitor                              |
| C4-C9, C12-C18 |    13 | 0.1µF ceramic capacitors                              |
| C10, C11       |     2 | 22µF, 20V tantalum capacitors                         |
| D1             |     1 | 1N4001 diode                                          |
| J1             |     1 | 40-pin, right-angle header                            |
| J2             |     1 | 2-circuit terminal block                              |
| J3             |     1 | DB9 right-angle socket                                |
| JU1, JU2       |     2 | Open                                                  |
| LED1           |     1 | Light-emitting diode                                  |
| R1             |     1 | 10M Ω , 5% resistor                                   |
| R2             |     1 | 100k Ω potentiometer                                  |
| R3             |     1 | 274k Ω , 1% resistor                                  |
| R4             |     1 | 133k Ω , 1% resistor                                  |
| R5             |     1 | 200 Ω , 5% resistor                                   |
| R6             |     1 | 10k Ω SIP resistor pack, pin 1 common                 |
| SW1            |     1 | Slide switch                                          |
| SW2            |     1 | Momentary push-button switch                          |
| U1             |     1 | Motorola MC68L11D0FN2                                 |
| U2             |     1 | Maxim MAX3232CSE                                      |
| U3             |     1 | 74HC00                                                |
| U4             |     1 | Maxim MAX667CSA                                       |
| U5             |     1 | 32k x 8 static RAM 28-pin socket Motorola MCM6306DJ15 |
| U10            |     1 | 28-pin socket                                         |
| U6             |     1 | 74HCT245                                              |
| U7             |     1 | Maxim MAX708RCSA                                      |
| U8             |     1 | 74HC573                                               |
| U9             |     1 | 74HC139                                               |
| U10            |     1 | 3V, 8k x 8 ROM                                        |
| Y1             |     1 | 8MHz crystal                                          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 408-737-7600 ext. 3468.

## 68L11D Module

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Power Requirements

The 68L11D module draws its power from a user-supplied power source connected to terminal block J2. Note the positive and negative markings on the board. Nominal input voltages should be between +5V and +16V. The input current requirement for the 68L11D module is typically 20mA plus the current drawn by the evaluation kit (EV kit).

The VDD supply is set by U4, a MAX667 low-dropout CMOS regulator. Trim potentiometer R2 sets the supply voltage, with an adjustment range of approximately 2.5V to 5V.  Although the board is designed primarily for 3V applications, all of the circuitry is rated to withstand 5V levels.

## 68L11D Microcontroller (µC) Module Hardware

U1 is Motorola's 68L11D µC. Contact Motorola for µC information, development, and support.

A MAX708R supervisory circuit on the module monitors the VDD logic supply, generates the power-on reset, and produces a reset pulse whenever the manual reset button (SW2) is pressed. Note that the MAX708R resets the CPU if the supply voltage falls below 2.66V.

The module provides 32kbytes of external CMOS static RAM (U5).

The 74HCT245 octal buffer (U6) provides access to an eight-bit  port  on  the  40-pin  interface  connector.  This memory-mapped port consists of Intel-compatible read and write strobes, four chip selects, four address LSB's, and eight data bits. Table 3 lists the address ranges for each of the memory-mapped elements on the 68L11D module.

The MAX3232 is a 3V-powered, RS-232 interface voltage-level shifter. Its built-in charge pump uses external capacitors to generate the output voltages necessary to drive RS-232 lines.

The 20 x 2-pin header (J1) connects the 68L11D module to a Maxim EV kit. Table 2 lists the function of each pin. Use the 68L11D module only with EV kits that are designed to support it, and download only code that is targeted for the Maxim 68L11D module. Downloading incorrect object code into the 68L11D module will produce unpredictable results.

The 8k x 8 boot ROM (U10) checks the system and waits for commands from the host. Refer to the EV kit manual for specific startup procedures.

## Software

All  software is supplied on a disk with the EV kit. Software operating instructions are included in the EV kit manual.

## Serial Communications

J3 is an RS-232 serial port, designed to be compatible with the IBM PC 9-pin serial port. Use a straight-through DB9 male-to-female cable to connect J3 to the IBM PC serial port. If the only available serial port has a 25-pin connector, use a standard 25-pin to 9-pin adapter. Table 1 shows J3's pinout. The hardware-handshake lines are used by the evaluation software to confirm that the EV kit is connected to the correct serial port.

## Table 1. Serial Communications Port J3

|   PIN | NAME   | FUNCTION                                         |
|-------|--------|--------------------------------------------------|
|     1 | DCD    | Handshake; hard-wired to DTR and DSR             |
|     2 | RXD    | RS-232-compatible data output from 68L11D module |
|     3 | TXD    | RS-232-compatible data input to 68L11D module    |
|     4 | DTR    | Handshake; hard-wired to DCD and DSR             |
|     5 | GND    | Signal ground connection                         |
|     6 | DSR    | Handshake; hard-wired to DCD and DTR             |
|     7 | RTS    | Handshake; hard-wired to CTS                     |
|     8 | CTS    | Handshake; hard-wired to RTS                     |
|     9 | None   | Unused                                           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 2. 40-Pin Data-Connector Signals

| PIN   | NAME        | FUNCTION                            |
|-------|-------------|-------------------------------------|
| 1-4   | GND         | Ground                              |
| 5, 6  | V++         | Unregulated input voltage           |
| 7, 8  | V DD        | V DD from on-board MAX667 regulator |
| 9     | RD          | Read strobe                         |
| 10    | WR          | Write strobe                        |
| 11    | CS0         | Chip select for 8000-8FFF           |
| 12    | CS1         | Chip select for 9000-9FFF           |
| 13    | CS2         | Chip select for A000-AFFF           |
| 14    | CS3         | Chip select for B000-BFFF           |
| 15    | ADDR0       | Address bit 0 (LSB)                 |
| 16    | ADDR1       | Address bit 1                       |
| 17    | ADDR2       | Address bit 2                       |
| 18    | ADDR3       | Address bit 3                       |
| 19    | DB0         | Data bus bit 0 (LSB)                |
| 20-26 | DB1-DB7     | Data bus bits 1-7                   |
| 27    | PA0/IC3     | General I/O port bit 0 (LSB)        |
| 28    | PA1/IC2     | General I/O port                    |
| 29    | PA2/IC1     | General I/O port                    |
| 30    | PA3/IC4/OC5 | General I/O port                    |
| 31    | PA4/OC4     | General I/O port                    |
| 32    | PA5/OC3     | General I/O port                    |
| 33    | PA6/OC2     | General I/O port                    |
| 34    | PA7/OC1/PAI | General I/O port MSB                |
| 35    | MISO        | SPI master-in, slave-out            |
| 36    | MOSI        | SPI master-out, slave-in            |
| 37    | SCK         | SPI serial clock                    |
| 38    | RESERVED    | Reserved for factory use            |
| 39    | E           | System E-clock output               |
| 40    | SS          | SPI slave-select input              |

## 68L11D Module

Table 3. 68L11D Module Memory Map

| ADDRESS RANGE (HEX)   | FUNCTION                           |
|-----------------------|------------------------------------|
| 0000-7FFF             | User RAM area (U5)                 |
| 8000-8FFF             | External chip-select 0 (J1 pin 11) |
| 9000-9FFF             | External chip-select 1 (J1 pin 12) |
| A000-AFFF             | External chip-select 2 (J1 pin 13) |
| B000-BFFF             | External chip-select 3 (J1 pin 14) |
| C000-C03F             | Unused                             |
| C040-C0FF             | Internal RAM (U1)                  |
| C100-CFFF             | Unused                             |
| D000-D03F             | Internal register area (U1)        |
| D040-DFFF             | Unused                             |
| E000-FFFF             | Boot ROM (U10)                     |

Figure 1.  68L11D Module Schematic Diagram

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1.  68L11D Module Schematic Diagram (continued)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5

Figure 1.  68L11D Module Schematic Diagram (continued)

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2.  68L11D Module Component Placement Guide

<!-- image -->

Figure 3.  68L11D Module PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 68L11D Module

Figure 4.  68L11D Module PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600