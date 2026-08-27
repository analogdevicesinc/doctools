<!-- lastmod 2022-08-02 -->
<!-- image -->

## 68HC16 Module

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
| J4            |     0 | Open                                                       |
| JU1           |     0 | Open                                                       |
| JU2           |     0 | Reference designator, not used                             |
| JU3           |     0 | Open                                                       |
| JU4           |     0 | Open                                                       |
| JU5           |     0 | Open                                                       |
| L1            |     0 | Open                                                       |
| L2            |     0 | Open                                                       |
| LED1          |     1 | Light-emitting diode                                       |
| R1            |     1 | 10M Ω , 5% resistor                                        |

## 68HC16 Module \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The 68HC16 module is an assembled and tested printed-circuit board intended for use with Maxim's highspeed serial-interface evaluation kits (EV kits). The module uses an inexpensive 8-bit implementation of Motorola's MC68HC16Z1 microcontroller (µC) to collect data samples at high speed using the QSPI™ interface. It  requires  an  IBM-compatible personal computer and an external DC power supply, typically 12V DC or as specified in EV kit manual.

Maxim's 68HC16 module is provided to allow customers to evaluate selected Maxim products. It is not intended to  be used as a microprocessor development platform, and such use is not supported by Maxim.

QSPI is a trademark of Motorola Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

| DESIGNATION   |   QTY | DESCRIPTION                                                |
|---------------|-------|------------------------------------------------------------|
| R2            |     1 | 330k Ω , 5% resistor                                       |
| R3, R4        |     2 | 10k Ω , 5% resistors                                       |
| R5            |     1 | 470 Ω , 5% resistor                                        |
| R6            |     1 | 10k Ω SIP resistor                                         |
| SW1           |     1 | Slide switch                                               |
| SW2           |     1 | Momentary pushbutton switch                                |
| U1            |     1 | 68HC16 µC MC68HC16Z1CFC16 (132-pin plastic quad flat pack) |
| U2            |     1 | Maxim MAX233CPP                                            |
| U3            |     1 | 27C256 EPROM containing monitor program                    |
| U4            |     1 | 7805 regulator, TO-220 size                                |
| U5            |     1 | 62256 (32K x 8) static RAM                                 |
| U6            |     1 | 74HCT245 bidirectional buffer                              |
| U7            |     1 | Maxim MAX707CPA                                            |
| Y1            |     1 | 32.768kHz watch crystal                                    |
| None          |     4 | Rubber feet                                                |
| None          |     1 | 28-pin socket for U3                                       |
| None          |     1 | 20-pin socket for U6                                       |
| None          |     1 | 3" x 5" printed circuit board                              |
| None          |     1 | Heatsink for U4, thermalloy # 6078                         |

## 68HC16 Module \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Power Input Connector J2

The 68HC16 module draws its power from a user-supplied power source connected to terminal block J2. Be sure to note the positive and negative markings on the board. A three-terminal 5V regulator allows input voltages between 8V and an absolute maximum of 20V. The 68HC16 module typically requires 200mA of input current.

## 68HC16 Microcontroller

U1 is Motorola's 68HC16Z1 µC. Contact Motorola for µC information, development, and support. Maxim EV kits use the high-speed queued serial peripheral interface (QSPI) and the internal chip-select generation.

A MAX707 on the module monitors the 5V logic supply, generates the power-on reset, and produces a reset pulse whenever the reset button is pressed.

1

For free samples and the latest literature, visit www.maxim-ic.com or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

## 68HC16 Module

The 68HC16 uses a phase-locked loop (PLL) to set its bus speed. Crystal Y1 is a 32.768kHz frequency reference. The internal oscillator runs 256 times faster than the external crystal. When the 68HC16 is reset, it waits for the PLL to lock before it executes any software. After the PLL locks onto the reference frequency, the software doubles the clock speed by writing to the clock synthesizer control register, selecting a bus speed of 16.78MHz.

U5, the user RAM area, is a 32kbyte CMOS static RAM.

The 74HCT245 octal buffer lets the 68HC16 module access an 8-bit port on the 40-pin interface connector. This memory-mapped port consists of separate read and write strobes, four chip selects, four address LSBs, and eight data bits.

## Serial Communications

J3 is an RS-232 serial port, designed to be compatible with the IBM PC 9-pin serial port. Use a straightthrough DB9 male-to-female cable to connect J3 to this port. If the only available serial port has a 25-pin connector, you may use a standard 25-pin to 9-pin adapter. Table 1 shows the pinout of J3.

The MAX233 is an RS-232 interface voltage level shifter with two transmitters and two receivers. It includes a built-in charge pump with internal capacitors that generates the output voltages necessary to drive RS-232 lines.

## 40-Pin Data Connector J1

The 20 x 2 pin header connects the 68HC16 module to a Maxim EV kit. Table 2 lists the function of each pin. Note that 68HC16 object code is not compatible with 68HC11 object code. Use the 68HC16 module only with those modules that are designed to support it, and only download code that is targeted for the 68HC16 module. Downloading incorrect object code into the 68HC16 module will have unpredictable results.

## Address Ranges

The 68HC16 µC generates various enable signals for different address ranges. The ROM and RAM enable signals are fed directly to the respective chips. Several additional signals (J1.11-J1.14) are available on the data connector to be used by Maxim EV kits. Table 3 outlines the address ranges for each of the elements found on the 68HC16 module, and Table 4 is a truth table that describes the logic for each of the 68HC16's chip-select outputs. Because the addresses are not completely decoded, the boot ROM and user RAM have shadows.

Table 1.  Serial Communications Port J3

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

## Table 2.  40-Pin Data-Connector Signals

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

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 3. 68HC16 Module Memory Map (all address values are in 20-bit hex)

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

## 68HC16 Module

## Boot ROM

The boot ROM, U3, is configured as an 8-bit memory device. Resistor R4 pulls data bit 0 low during system reset, forcing the µC to fetch instructions using only the upper eight data bits. The boot ROM checks the system and waits for commands from the host. Refer to the EV kit manual for specific start-up procedures.

## Software

All  software is supplied on a disk with the EV kit. Instructions for  operating the software are included in the EV kit manual. Refer to the EV kit manual for more information.

## 68HC16 Module Self Check

To test the 68HC16 module's integrity, connect the power supply to the power terminals (J2). Do not connect anything to J1 or J3. Slide the power switch SW1 to the 'ON' position. The LED will light up, and will flash within 5 seconds.

If the LED flashes with a 50%-on/50%-off duty cycle, then it passed its self check. Note that this test does not exercise the RS-232 port or the EV kit 40-pin interface, but it does confirm that the power supply, microprocessor, ROM, and RAM passed the self test.

If  the  LED  flashes  with  a  10%-on/90%-off  duty  cycle, then it  failed  its  self  check.  Most  likely,  the  RAM  chip (U5) is bad.

If the LED remains on and does not flash, then the problem is either U3 (the EPROM), U1 (the microprocessor), U4 (the regulator), the MAX707 reset generator, or the power supply. Use a voltmeter to verify that the power supplies are good. Check the power-supply input and the +5V output from the regulator. Use an oscilloscope to see if the 32.768kHz reference oscillator is running.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 68HC16 Module

## Table 4.  68HC16 Chip-Select Outputs Truth Table

Figure 1. 68HC16 Module Schematic

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

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 68HC16 Module

Figure 1. 68HC16 Module Schematic (continued)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 68HC16 Module

Figure 1. 68HC16 Module Schematic (continued)

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 68HC16 Module

<!-- image -->

Figure 2.  68HC16 Module Component Placement Guide

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 68HC16 Module

Figure 3.  68HC16 Module PC Board Layout-Component Side

<!-- image -->

Figure 4.  68HC16 Module PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

© 2000 Maxim Integrated Products