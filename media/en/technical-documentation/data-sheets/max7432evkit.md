<!-- lastmod 2022-08-03 -->
## General Description

The MAX7432 evaluation kit (EV kit) is an assembled and tested circuit board that demonstrates the MAX7428, MAX7430, and MAX7432 standard definition video reconstruction filters and buffers. Windows ® 98/2000 software provides a handy-user interface to exercise the features of the MAX7428/MAX7430/ MAX7432.

Order the complete EV system (MAX7432EVC16) for comprehensive evaluation of the MAX7428/MAX7430/ MAX7432 using a personal computer. Order the EV kit (MAX7432EVKIT) if the 68HC16MODULE module has already been purchased with a previous Maxim EV system, or for custom use in other µC-based systems.

Windows is a registered trademark of Microsoft Corp.

## MAX7432EVC16 Parts List

|   QTY | PART             |
|-------|------------------|
|     1 | MAX7432EVKIT     |
|     1 | 68HC16MODULE-DIP |

| REFERENCE                       |   QTY | DESCRIPTION                                                           |
|---------------------------------|-------|-----------------------------------------------------------------------|
| C1, C4-C18                      |    16 | 0.1µF, 10V X7R ceramic capacitors (0805)                              |
| C2                              |     1 | 0.01µF, 10V X7R ceramic capacitor (0805)                              |
| C3                              |     1 | 1000pF, 10V X7R ceramic capacitor (0805)                              |
| C19-C24                         |     6 | 220µF, 6V aluminum electrolytic capacitors (8 x 10.5), Sanyo 6CV220EX |
| C25                             |     1 | 10µF, 10V tantalum capacitor (B)                                      |
| C26-C31                         |     6 | Open (reserved for Sanyo 4CV820EX)                                    |
| FB1, FB2                        |     2 | Ferrite beads (0805) Murata BLM21A102S                                |
| INA1-INA6, INB1-INB6, OUT1-OUT6 |    18 | BNC female jacks, 4 pin, 0.250in. spacing                             |
| J1                              |     1 | 2 x 20 right-angle socket                                             |
| JU1                             |     1 | 2-pin header                                                          |
| R1, R2, R3                      |     3 | 301k Ω ±1% surface-mount resistors (1206)                             |
| R4                              |     1 | 10k Ω ±5% surface-mount resistor (1206)                               |

- ♦ Proven PC Board Layout
- ♦ Convenient On-Board Test Points
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | INTERFACE TYPE   |
|--------------|--------------|------------------|
| MAX7432EVKIT | 0°C to +70°C | User-Supplied    |
| MAX7432EVC16 | 0°C to +70°C | Windows Software |

## Component Supplier

| SUPPLIER   | PHONE        | FAX          | WEBSITE       |
|------------|--------------|--------------|---------------|
| Sanyo USA  | 619-661-6835 | 619-661-1055 | www.sanyo.com |

Note: When contacting, please specify that you are using the MAX7428/MAX7430/MAX7432.

## Component List

| REFERENCE   |   QTY | DESCRIPTION                                           |
|-------------|-------|-------------------------------------------------------|
| R5-R10      |     6 | 75 Ω ±1% surface-mount resistors (1206)               |
| R11-R22     |    12 | 1M Ω ±5% surface-mount resistors (1206)               |
| R23-R34     |     0 | Open (reserved for 75 Ω ±5% surface- mount resistors) |
| TB1         |     1 | 0.200in. screw terminal block                         |
| U1          |     1 | Maxim MAX7428EKA                                      |
| U2          |     1 | Maxim MAX7430EUB                                      |
| U3          |     1 | Maxim MAX7432EUD                                      |
| None        |     1 | PC board, MAX7432 EV kit                              |
| None        |     1 | 3 1/2in. software disk, MAX7432 EV kit                |
| None        |     1 | MAX7428 data sheet                                    |
| None        |     1 | MAX7430 data sheet                                    |
| None        |     1 | MAX7432 data sheet                                    |
| None        |     1 | MAX7432 EV kit data sheet                             |
| None        |     1 | 68HC16MODULE-DIP data sheet                           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

<!-- image -->

Features

## MAX7432 Evaluation Kit

## Quick Start

## Recommended Equipment

Before you begin, you will need the following equipment:

- Maxim MAX7432EVKIT and 68HC16MODULE interface board
- A small DC power supply, such as a 12V DC 0.5A plug-in transformer, or a 9V battery
- A computer running Windows 98/2000
- A spare serial communications port, preferably a 9-pin plug
- A serial cable to connect the computer's serial port to the 68HC16MODULE
- 1) With the power off, connect a 7V to 20V DC power supply to the µC module at the terminal block located next to the on/off switch, along the top edge of the µC module. Observe the polarity marked on the board.
- 2) Carefully connect the boards by aligning the 40-pin header of the MAX7432 EV kit with the 40-pin connector of the 68HC16MODULE-DIP module. Gently press them together. The two boards should be flush against one another.
- 3) Connect a cable from the computer's serial port to the µC module. If using a 9-pin serial port, use a straight-through, 9-pin female-to-male cable. If the only available serial port uses a 25-pin connector, a standard 25-pin to 9-pin adapter will be required. The EV kit software checks the modem status lines (CTS, DSR, DCD) to confirm that the correct port has been selected.
- 4) Install the EV system software on your computer by running the INSTALL.EXE program on the floppy disk.  The  program files are copied and icons are created for them in the Windows Start Menu.
- 5) Ensure that JU1 is closed (Table 1).
- 6) Turn on the power supply.
- 7) Start  the  program by opening its icon in the Start Menu. The program prompts you to connect the µC module and turn its power on. Slide SW1 to the ON position. Select the correct serial port, and click OK. The program will automatically load code into the module.
- 8) Click on Initialize MAX7432EVKIT to initialize the three devices on the MAX7432EVKIT board.
- 9) Connect video signal sources to video inputs INA1-INA6 and INB1-INB6.
- 10) Connect video displays to OUT1 through OUT3.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 11) To verify the setup, switch all devices from input A to input B by selecting Input B in the Control Word and then clicking Broadcast.

## Detailed Description of Software

## Selecting the Device Address

At  power-on reset, all devices are assigned address 0000. To assign unique addresses, each device must be initialized,  starting  with  the  device  with  the  largest CEXT value. Clicking Initialize All Devices automatically assigns addresses from the Unused IDs list. Manually assign addresses by dragging the desired address from the Unused IDs list into the address assignment grid.

To reassign a chip's address, the chip must be reset. The Reset Chip button resets only the selected chip, while Reset All Chips broadcasts the reset command to all chips.

The EV kit is built with standard 20% capacitors, limiting the number of device addresses to seven. Applications requiring more than seven devices must use 10% capacitors. The EV kit software supports either 10% or 20% capacitor tolerance.

## Controlling the Devices

Select which chip to work with by picking it from the address assignment grid, or by dropping down the CEXT capacitor combo box.

Set the command word drop-down combo boxes (SYNCIO, Input A/B, Filtered/Unfiltered, etc.). To write to a single device, click the Write button. To write to all devices, click  the  Broadcast button. To read back the device configuration, click the Read button. Read-back data appears underneath the combo boxes. The SYNCIO bit is only active on the MAX7428.

## Detailed Description of Hardware

## Master/Slave Synchronization

One MAX7428 can control the clamping on another MAX7428. First, assign unique chip addresses by clicking Initialize MAX7428EVKIT. Next, set the configuration word to 'SYNCIO in' and click Broadcast. Finally, select the device that will be the master, and write configuration word with 'SYNCIO out', and connect the sync signals together. This application is demonstrated on the MAX7428EVKIT. This configuration is typically used for Y-C or Y-Pb-Pr systems. It allows the sync information on Y (luma) to be sent to the other channels.

<!-- image -->

Table 1. Jumper Functions

| JUMPER   | POSITION   | FUNCTION                                                                  |
|----------|------------|---------------------------------------------------------------------------|
| JU1      | Closed*    | U1, U2, U3 are powered by 5V from the 68HC16 module                       |
| JU1      | Open       | U1, U2, U3 require external 5V power source applied at terminal block TB1 |

<!-- image -->

Figure 1. MAX7432 EV Kit Software

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7432 Evaluation Kit

3

## MAX7432 Evaluation Kit

```
; Maxim Single Pin Bus Protocol used on MAX7432 (Excerpt) ; Complete source code is included on MAX7432 EVKIT disk. ; ; High-level GUI program sends commands to the MSPB code. ; On Entry: register Z points to null-terminated command string. ; On Exit: _readback contains the value read by the (R) bits. CmdWLoop: ldaa 0,z aiz  #1 cmpa #0 beq  CmdWDone ; Readback timing: ; From rising edge of prompt (0) to bus release: 1.0 us min, 2.3 us max ; Data valid window: 2.3 us to 4.7 us after rising edge of prompt ; From rising edge of prompt to bus assert: 4.7 us min, 13 us max cmpa #'R' bne  CmdWNotR BCLR PDDR,#BitBangPin ; make data an input... ldaa GPTPDR BCLR GPTPDR,#DebugReadPin ; debug strobe ; shift msb into carry aslw _readback+2,y rolw _readback,y ; rotate carry into lsb anda #BitBangPin ; drive I/O high cmpa #0 beq  CmdWRskip inc  _readback+3,y CmdWRskip: BSET GPTPDR,#DebugReadPin ; debug strobe BSET GPTPDR,#BitBangPin ; drive I/O high BSET PDDR,#BitBangPin ; make sure data is an output bra  CmdWLoop ; jump back to loop, process next character CmdWNotR: cmpa #'0' bne  CmdWNot0 ldd  #DoZeroTimingValue jsr  DoPulse_D bra  CmdWLoop ; jump back to loop, process next character CmdWNot0: cmpa #'1' bne  CmdWNot1 ldd  #DoOneTimingValue jsr  DoPulse_D bra  CmdWLoop ; jump back to loop, process next character CmdWNot1: cmpa #'2' bne  CmdWNot2 ldd  #DoWPTimingValue jsr  DoPulse_D bra  CmdWLoop ; jump back to loop, process next character CmdWNot2: cmpa #'A' bne  CmdWNotA jsr  EXECUTE_DELAY_A bra  CmdWLoop ; jump back to loop, process next character CmdWNotA: cmpa #'B' bne  CmdWNotB jsr  EXECUTE_DELAY_B bra  CmdWLoop ; jump back to loop, process next character CmdWNotB: cmpa #'H' bne  CmdWNotH ; delay for 5 usec ldd  #DoWH5usecTimingValue jsr  DoPulseDly bra  CmdWLoop ; jump back to loop, process next character CmdWNotH: bra  CmdWLoop ; jump back to loop, process next character CmdWDone: rts
```

Listing 1. Simplified Interface

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX7432 Evaluation Kit

<!-- image -->

Figure 2a. MAX7432 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7432 Evaluation Kit

Figure 2b. MAX7432 EV Kit Schematic

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7432 Evaluation Kit

<!-- image -->

Figure 2c. MAX7432 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7432 Evaluation Kit

Figure 3. MAX7432 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 4. MAX7432 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7432 Evaluation Kit

Figure 5. MAX7433 EV Kit PC Board Layout-Component Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

9