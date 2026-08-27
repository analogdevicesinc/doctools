<!-- lastmod 2022-08-03 -->
## General Description

The MAX7428 evaluation kit (EV kit) is an assembled and tested circuit board that demonstrates the MAX7428 standard-definition video reconstruction filter and buffer. Windows ® 98/2000 software provides a handy user interface to exercise the features of the MAX7428.

Order the complete EV system (MAX7428EVC16) for comprehensive evaluation of the MAX7428 using a PC. Order the EV kit (MAX7428EVKIT) if the 68HC16MODULE module has already been purchased with a previous Maxim EV system, or for custom use in other microcontroller (µC) based systems.

## MAX7428EVC16 Parts List

|   QTY | DESCRIPTION      |
|-------|------------------|
|     1 | MAX7428EVKIT     |
|     1 | 68HC16MODULE-DIP |

| REFERENCE                                            |   QTY | DESCRIPTION                                                          |
|------------------------------------------------------|-------|----------------------------------------------------------------------|
| C1, C4-C12                                           |    10 | 0.1µF, 10V X7R ceramic capacitors (0805)                             |
| C2                                                   |     1 | 0.01µF, 10V X7R ceramic capacitor (0805)                             |
| C3                                                   |     1 | 1000pF, 10V X7R ceramic capacitor (0805)                             |
| C13                                                  |     1 | 10µF, 10V tantalum capacitor (B)                                     |
| C14, C15, C16                                        |     3 | 220µF, 6V aluminum electrolytic capacitors (8 × 10.5) Sanyo 6CV220EX |
| C17, C18, C19                                        |     0 | Open (reserved for Sanyo 4CV820EX)                                   |
| FB1, FB2                                             |     2 | Ferrite beads (0805) Murata BLM21A102S                               |
| INA1, INA2, INA3, INB1, INB2, INB3, OUT1, OUT2, OUT3 |     9 | BNC female jacks                                                     |

Windows is a registered trademark of Microsoft Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Features

- ♦ Proven PC Board Layout
- ♦ Convenient On-Board Test Points
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | INTERFACE TYPE   |
|--------------|--------------|------------------|
| MAX7428EVKIT | 0°C to +70°C | User supplied    |
| MAX7428EVC16 | 0°C to +70°C | Windows software |

## Component Supplier

| SUPPLIER   | TELEPHONE    | FAX          | WEBSITE       |
|------------|--------------|--------------|---------------|
| Sanyo USA  | 619-661-6835 | 619-661-1055 | www.sanyo.com |

## Component List

| REFERENCE   |   QTY | DESCRIPTION                                         |
|-------------|-------|-----------------------------------------------------|
| J1          |     1 | 2 × 20 right-angle socket                           |
| JU1-JU4     |     4 | 2-pin headers                                       |
| R1, R2, R3  |     3 | 301k Ω ± 1% surface-mount resistors (1206)          |
| R4, R5, R6  |     3 | 75 Ω ± 1% surface-mount resistors (1206)            |
| R7          |     1 | 10k Ω ± 5% surface-mount resistor (1206)            |
| R8-R13      |     6 | 1M Ω ± 5% surface-mount resistors (1206) (optional) |
| TB1         |     1 | 0.200in screw terminal block                        |
| U1, U2, U3  |     3 | MAX7428EKA                                          |
| None        |     1 | PC board                                            |
| None        |     1 | 3.5in software disk                                 |

## Quick Start

## Recommended Equipment

Before you begin, the following equipment is needed:

- MAX7428EVKIT and 68HC16MODULE interface board
- A small DC power supply, such as a 12VDC 0.25A plug-in transformer, or a 9V battery

Maxim Integrated Products 1

## MAX7428 Evaluation Kit

- A computer running Windows 98/2000
- A spare serial communications port, preferably a 9-pin plug
- A serial cable to connect the computer's serial port to the 68HC16MODULE
- 1) With the power off, connect a 7VDC to 20VDC power supply to the µC module at the terminal block located next to the on/off switch, along the top edge of the µC module. Observe the polarity marked on the board.
- 2) Carefully connect the boards by aligning the 40-pin header of the MAX7428 EV kit with the 40-pin connector of the 68HC16MODULE-DIP module. Gently press them together. The two boards should be flush against one another.
- 3) Connect a cable from the computer's serial port to the µC module. If using a 9-pin serial port, use a straight-through, 9-pin female-to-male cable. If the only available serial port uses a 25-pin connector, a standard 9-pin to 25-pin adapter is required. The EV kit software checks the modem status lines (CTS, DSR, DCD) to confirm that the correct port has been selected.
- 4) Install the EV system software on your computer by running the INSTALL.EXE program on the floppy

## Table 1. Jumper Functions

| JUMPER   | POSITION   | FUNCTION                                                                  |
|----------|------------|---------------------------------------------------------------------------|
| JU1      | Closed     | U1 common sync                                                            |
| JU1      | Open*      | U1 sync open                                                              |
| JU2      | Closed     | U2 common sync                                                            |
| JU2      | Open*      | U2 sync open                                                              |
| JU3      | Closed     | U3 common sync                                                            |
| JU3      | Open*      | U3 sync open                                                              |
| JU4      | Closed*    | U1, U2, U3 are powered by 5V from the 68HC16 module                       |
| JU4      | Open       | U1, U2, U3 require external 5V power source applied at terminal block TB1 |

*Indicates default configuration

- disk.  The  program files are copied and icons are created for them in the Windows Start menu.
- 5) Ensure that the jumper settings are in the default position (Table 1).
- 6) Turn on the power supply.
- 7) Start  the  program by opening its icon in the Start menu. The program prompts you to connect the µC

Figure 1. MAX7428EVKIT Software

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

module and turns its power on. Slide SW1 to the ON position. Select the correct serial port, and click OK. The program automatically loads code into the module.

- 8) Click on Initialize MAX7428EVKIT to initialize the three devices on the MAX7428EVKIT board.
- 9) Connect video signal sources to INA1..INA3 and INB1..INB3.
- 10) Connect video display to OUT1..OUT3.
- 11) To verify the setup, switch all devices from input A to input B by selecting input B in the Control Word and then clicking Broadcast.

## Detailed Description of Software

## Selecting the Device Address

At power-on reset, all devices are assigned address 0000. To assign unique addresses, each device must be initialized, starting with the device with the largest CEXT value. Clicking Initialize All Devices automatically assigns addresses from the Unused IDs list. Manually assign addresses by dragging the desired address from the Unused IDs list into the address assignment grid.

To reassign a chip's address, the chip must be reset. The Reset Chip button resets only the selected chip, while Reset All Chips broadcasts the reset command to all chips.

Select the desired chip by picking it from the address assignment grid, or by dropping down the CEXT capacitor combo box.

## Controlling the MAX7428

Set the command word drop-down combo boxes (SYNCIO, Input A/B, Filtered/Unfiltered, etc.). To write to a single device, click the Write button. To write to all devices, click the Broadcast button. To read back the device configuration, click the Read button. Readback data appears underneath the combo boxes.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7428 Evaluation Kit

## Detailed Description of Hardware

## Master/Slave Synchronization

One MAX7428 can control the clamping on the other two. First,  assign  unique chip addresses by clicking Initialize  MAX7428EVKIT. Next, set the configuration word to SYNCIO in and click Broadcast. Finally, select the device that is the master, and write configuration word with SYNCIO out. Connect the sync signals together by closing jumpers JU1, JU2, and JU3.

## MAX7428 Evaluation Kit

Figure 2. MAX7428 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7428 Evaluation Kit

```
; Maxim One-Pin Protocol used on MAX7428 (Excerpt) ; Complete source code is included on MAX7428 EVKIT disk. ; ; High-level GUI program sends commands to the MOPP code. ; On Entry: register Z points to null-terminated command string. ; On Exit: _readback contains the value read by the (R) bits. CmdWLoop: ldaa 0,z ; get first character aiz  #1 ; increment string pointer cmpa #0 ; null character terminates command string beq  CmdWDone cmpa #'0' ; digit zero makes a 5usec pulse bne  CmdWNot0 ldd  #DoZeroTimingValue jsr  DoPulse_D ; call delay subroutine, delay value in register D bra  CmdWLoop ; jump back to loop, process next character CmdWNot0: cmpa #'1' ; digit one makes a 30usec pulse bne  CmdWNot1 ldd  #DoOneTimingValue jsr  DoPulse_D ; call delay subroutine, delay value in register D bra  CmdWLoop ; jump back to loop, process next character CmdWNot1: cmpa #'2' ; digit two makes a 100usec pulse bne  CmdWNot2 ldd  #DoWPTimingValue jsr  DoPulse_D ; call delay subroutine, delay value in register D bra  CmdWLoop ; jump back to loop, process next character CmdWNot2: cmpa #'A' ; letter A makes long delay before initialization bne  CmdWNotA jsr  EXECUTE_DELAY_A bra  CmdWLoop ; jump back to loop, process next character CmdWNotA: cmpa #'B' ; letter B makes long delay during initialization bne  CmdWNotB jsr  EXECUTE_DELAY_B bra  CmdWLoop ; jump back to loop, process next character CmdWNotB: cmpa #'H' ; letter H makes 5usec delay without pulsing the data signal bne  CmdWNotH ldd  #DoWH5usecTimingValue jsr  DoPulseDly ; call idle delay subroutine, delay value in register D bra  CmdWLoop ; jump back to loop, process next character CmdWNotH: cmpa #'R' ; letter R samples input from MAX7428 (LSB first) bne  CmdWNotR ; make data an input... BCLR PDDR,#BitBangPin ; make SHDN an input, so it floats. ; with no delay code: 5.20 usec from end of prompt to sample ; read data value... ldaa GPTPDR BCLR GPTPDR,#DebugReadPin ; debug strobe aslw _readback,y anda #BitBangPin ; drive I/O high cmpa #0 beq  CmdWRskip inc  _readback+1,y CmdWRskip: ; make data an output BSET GPTPDR,#DebugReadPin ; debug strobe BSET GPTPDR,#BitBangPin ; drive I/O high BSET PDDR,#BitBangPin ; make sure SHDN is an output bra  CmdWLoop ; jump back to loop, process next character CmdWNotR: ; all other characters are ignored bra  CmdWLoop ; jump back to loop, process next character CmdWDone: rts ; return to main program
```

Listing 1. Simplified Interface

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7428 Evaluation Kit

<!-- image -->

Figure 3. MAX7428 EV Kit Component Placement GuideComponent Side

Figure 4. MAX7428 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX7428 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600