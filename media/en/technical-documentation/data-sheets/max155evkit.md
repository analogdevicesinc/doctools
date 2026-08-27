<!-- lastmod 2022-08-03 -->
## General Description

The MAX155 evaluation kit (EV kit) is a functional 8channel, 8-bit data-acquisition system. The printed circuit board has an 80C32 microprocessor controlling the MAX155 analog-to-digital converter. Software run on an IBM-compatible personal computer communicates over an RS-232 link to perform analog-to-digital conversions and display the results.

The input channels can be configured in a variety of combinations of single-ended/differential  and unipolar/bipolar modes. All input channels are sampled simultaneously at the beginning of each conversion for low skew between channels. A single channel can be selected for conversion and display, or all channels can be read.

The board operates from a single 6V to 12V supply. A MAX660 generates the -5V supply needed for converting voltages below ground.

Features

- ♦ Fully Functional 8-Channel, 8-Bit DAS
- ♦ Eight Simultaneously Sampling Track/Hold Inputs
- ♦ 0 to 2.5V Unipolar or ±2.5V Bipolar Input Range
- ♦ Single-Ended or Differential Inputs
- ♦ Mixed Input Configurations are Possible
- ♦ +2.5V Reference Voltage
- ♦ EV Kit Operates from a Single Input Supply
- ♦ Software for IBM-Compatible Computers Included

<!-- image -->

## Ordering Information

| PART        | TEMP RANGE   | BOARD TYPE               |
|-------------|--------------|--------------------------|
| MAX155EVKIT | 0°C to +70°C | Plastic DIP-Through Hole |

## EV Kit

<!-- image -->

## Functional Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX155 Evaluation Kit

## Component List

| DESIGNATION                                                  |   QTY | DESCRIPTION                                       |
|--------------------------------------------------------------|-------|---------------------------------------------------|
| None                                                         |     1 | 8.0in x 5.5in MAX155 EV kit printed circuit board |
| IC1                                                          |     1 | MAX233ACPP                                        |
| IC2                                                          |     1 | MAX696CPE                                         |
| IC3                                                          |     1 | 80C32                                             |
| IC4                                                          |     1 | 74HCT573                                          |
| IC5                                                          |     1 | 74HCT08                                           |
| IC6                                                          |     1 | 74HCT139                                          |
| IC7                                                          |     1 | 27C64                                             |
| IC8                                                          |     1 | 6264LP                                            |
| IC9                                                          |     1 | 74HCT245                                          |
| IC10                                                         |     1 | MAX155BCPI                                        |
| IC11                                                         |     1 | MAX660                                            |
| IC12                                                         |     1 | 74HCT161                                          |
| IC13                                                         |     1 | 10MHz OSC                                         |
| IC14                                                         |     1 | MAX667CPA                                         |
| XX1                                                          |     1 | CTS CTX078 11.059MHz crystal                      |
| J1, J2                                                       |     2 | 2-pin header and shunts                           |
| Connector 1                                                  |     1 | 2-wire power connector                            |
| Connector 2                                                  |     1 | D9 right-angle female connector                   |
| R1                                                           |     1 | 32.4k Ω 1% resistor                               |
| R2                                                           |     1 | 13.0k Ω 1% resistor                               |
| R3                                                           |     1 | 10k Ω 5% resistor                                 |
| R4-R11                                                       |     8 | 1.0k Ω 5% resistors                               |
| C1, C2                                                       |     2 | 27pF capacitors                                   |
| C3, C6, C9, C11, C12, C13, C14, C16, C17, C18, C19, C20, C21 |    13 | 0.1µF 50V monolithic capacitors                   |
| C4, C5, C7, C8, C15                                          |     5 | 10µF 16V tantalum capacitors                      |
| C10, C22                                                     |     2 | 33µF 16V tantalum capacitors                      |
| RSIP1                                                        |     1 | 10-pin, 9-resistor 10k Ω SIP                      |
| None                                                         |     2 | 28-pin IC sockets for EPROM and MAX155            |
| None                                                         |     1 | MAX155 data sheet                                 |

## Quick Reference

Setup and operation of the MAX155 EV kit involves the following steps:

1. Assemble the printed circuit board using the procedure in the Board Assembly section.
2. Copy the MAX155 EV kit floppy disk to another disk and store the original in a safe place. Use the copy for normal operation.
3. Read the README file for updates and changes.
4. Connect a cable between a serial port (COM1 or COM2) of the personal computer and the MAX155 EV kit printed circuit board. If a 9-pin (D9) connector  is  available,  a  straight-through  cable  can  be used. If the only available connector is a 25-pin (D25) connector, an adapter is required.
5. Start the MAX155 EV software program on the personal computer and set the indicated active port to  agree with the cable location. The status line at the bottom of the display shows the COM port and board status.
6. Apply power to the printed circuit board and make sure the board status display in the lower right corner indicates READY. If not, see the Troubleshooting Guide section.
7. Connect the input signals to the analog input(s) and the system is ready for operation.

## Detailed Description

## Hardware Architecture

The following is an overview of the various circuits found on the MAX155 EV kit printed circuit board. Refer to the individual device data sheets for complete descriptions.

## Power Supply

The MAX155 EV kit requires a 6V to 12V input supply. The board typically draws 80mA of current; however, the input supply should be capable of 150mA. The input supply passes through D1 and is regulated to +5.0V by the MAX667. The current available for additional user circuits in the prototype area is limited by the capabilities of the MAX667. Refer to the MAX667 data sheet for detailed information before connecting loads greater than 20mA.

The MAX155 VSS pin can be connected to ground in many applications. The -5V supply is necessary only when the system requires inputs below ground (bipolar, single-ended mode with ±2.5V input range). The EV kit includes a MAX660 to generate the -5V needed to enable this feature. Additional circuits can draw power from this source as long as the load is no more than 10mA. For more current, the 10µF capacitors around

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

the MAX660 must be increased to 150µF. Refer to the MAX660 data sheet for more information.

## Microprocessor Supervision

A MAX696 is used to generate the reset pulse and for the watchdog function. The microprocessor (µP) is held in reset for 50ms after the voltage on the low-line input (LLIN) exceeds its threshold. The values of R1 and R2 are selected so that a 4.25V supply voltage (±0.24V) trips the LLIN comparator.

The watchdog monitoring function issues a reset pulse if the watchdog input is not toggled within the specified period of time. By leaving the MAX696 OSC IN and OSC SEL pins disconnected, the MAX696 watchdog period is set to 1s. If the watchdog-enable jumper is installed  (see  the Jumper Options section for details), the µP must toggle the watchdog input once a second to  prevent  a  reset  pulse.  Removing this  jumper while the system is running causes a reset.

For a complete description of the reset and watchdog functions, refer to the MAX696 data sheet.

## 80C32 Microcontroller

The MAX155 EV kit uses the 80C32 controller. The 80C32 is a member of the 8051 family that requires external ROM for program storage. Internally, it has 256 bytes of RAM and four 8-bit input/output (I/O) ports. Two of these ports (P0 and P2) are for operating the address and data lines required by the external ROM, RAM, and MAX155. A third (P3) is needed for the serial link and I/O control lines. One of the pins of the remaining port is for the watchdog circuit. The others are available for the control of additional user circuits.

The on-board memory consists of 8kB of EPROM (the 27C64) holding the instructions for normal operations, and 8kB of CMOS RAM (the 6264) to store conversion results.

The user initiates a conversion at the keyboard of a personal computer running the MAX155 EV program. The program sends an encoded conversion command over the  RS-232 link to the board. The 80C32 receives the command, performs the MAX155 conversion, and returns the results for display.

## Address Decoding

The 80C32 has a 16-bit address range (0000h to FFFFh). The data bits on the 80C32 pins 32-39 multiplex the lower eight address bits. The 74CT573 latches the address bits, and ROM and RAM use them as A0-A7. The upper eight bits of the address field are not multiplexed. Six of these bits, A8-A13, are sent directly to the memory-address pins.

<!-- image -->

## MAX155 Evaluation Kit

The two most significant bits of the address are decoded and used to selectively enable ROM, RAM, or the MAX155. The next two bits of the address field (A13 and A12) are also used in decoding the address range for the MAX155. The MAX155 is accessed whenever a location between C000h and CFFFh is addressed. Table 1 shows the address range for each device.

## Table 1. Address Range in Hexadecimal

|   A14, A15 | ADDRESS RANGE   | DEVICE ENABLED   |
|------------|-----------------|------------------|
|         00 | 0000 → 3FFF     | ROM              |
|         01 | 4000 → 7FFF     | RAM              |
|         10 | 8000 → BFFF     | Not used         |
|         11 | C000 → CFFF     | MAX155           |
|         11 | D000 → FFFF     | Not used         |

## MAX155

The MAX155 on the EV kit is configured to use its internal reference and to allow a bipolar input range. The MAX155 internal reference can be replaced by cutting the trace across J6 and providing an external reference voltage. The bipolar input range is facilitated by a -5V source connected to VSS (pin 6). The MAX155 MODE selection pin is open circuited to place the input range selection under program control. See the Jumper Selection section for details regarding the MODE selection pin.

The eight analog inputs are available at the board's edge. Each input has a 1k Ω resistor in series as protection  against excessive short-circuit currents. The highi nput  impedance allows this precaution without introducing additional errors. There are two input ranges for the MAX155. Either the unipolar (0 to 2.5V) or bipolar (-2.5V to +2.5V) range can be selected under program control. It is possible to hardwire the range selection for other applications. In bipolar/differential mode, the readings reflect the voltage between the two analog inputs. For example, if the VIN- pin is referenced to +2.5V, input range is 0 to +5.0V. The output readings (-2.50V to +2.49V) indicate the differential voltage between VIN+ and VIN-. This allows bipolar/differential operation with single supplies. See the MAX155 data sheet for details.

Maxim took several precautions to reduce the system's noise level.  Users should consider noise reduction as part of their design.

The data bus to the MAX155 is buffered by IC9, a 74HCT245 octal transceiver. This device isolates the MAX155 from the digital signals constantly present on the data bus. This reduces the noise level of any analog-to-digital  converter  (ADC)  in  a  digital  environment.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX155 Evaluation Kit

However, an 8-bit device like the MAX155 does not require data-bus isolation in many applications.

Precautions were also taken to avoid digital noise in the ground and +5V supply lines to the MAX155. On the board layout, both traces to the MAX155 are wide traces that return directly to the regulator output. In general, supply lines to ADC devices should avoid the current spikes found on supply lines to digital circuits.

## Software Architecture

The software driver for the MAX155 EV kit is divided into two elements. One is the ROM code written for the 80C32 controller. The other is a program written in C that  runs  on  an  IBM-compatible personal computer. The disk supplied with the kit contains the instruction manuals and source code for each program.

The disk also holds two other important files. The first is a README file describing any changes to the hardware or software. Be sure to read the file as soon as possible.  The  other  file  is  an  update  registration  form.  Be sure to fill  out  and  return  the  update  form  for  future package updates.

## ROM Firmware

The 80C32 code was written using the AVOCET 8051 Assembler. The output code is stored in a 27C64 EPROM placed on the MAX155 EV kit board, The EPROM code initializes the 80C32 after a reset and establishes communications over the RS-232 serial link. After reset, the program continuously transmits an A5(hex)  character  until  the  proper  response  is received. It  then  waits  for  the  command  for  a  conversion or other function. The list of available commands is in the disk documentation.

## Personal Computer Software

The MAX155EV.exe program runs on an IBM-compatible computer. It displays the EV kit status and conversion results. The program establishes the communications link  with  the  EV  kit  board.  The  status  flag  in  the  lower right  corner of the screen indicates READY when communication has been established.

A menu of available commands appears at the bottom of the screen during operation. For a detailed explanation  of  the  commands, read the SOFTWARE.doc file found on the disk.

For information on program installation, see the section titled Loading the Software .

Table 2. MAX155 EV Software Command List

| 0-7   | Select a channel               |
|-------|--------------------------------|
| S     | Set single-ended mode          |
| D     | Set differential mode          |
| U     | Set unipolar mode              |
| B     | Set bipolar mode               |
| H     | Set hexadecimal output format  |
| R     | Collect sample and save in RAM |
| E     | Examine the RAM contents       |
| C     | Continuous conversion          |
| CR    | Single conversion              |

## Application Information

## Power Requirements

The typical EV kit board consumes 80mA from a 6V to 12V external power supply. The supply can be an adjustable laboratory supply, a 9V alkaline battery, or an isolated wall-mounted DC power supply.

## Jumper Options

## Manual Reset

J1 on the printed circuit board is the MANUAL RESET jumper. These pins are connected to the MAX696's LLIN input and ground. If the LLIN input  is  lower  than 1.30V, a reset pulse is generated. To manually reset the board, briefly place a short across the pins and remove. After reset, the board attempts to establish communications with the host system.

These pins should never be connected to other parts of the circuit.

## Watchdog Enable

J2 is the watchdog-enable jumper (WDI ENABLE). If enabled, the watchdog function resets the µP if it fails to  toggle  the  watchdog input once every second. A shunt is normally installed across the jumper pins to enable the watchdog. It can be removed (before power-up) to avoid unwanted resets while debugging 80C32 software. See the MAX696 data sheet for more information.

## Clock Selection

A 74HCT161 binary counter divides the 10MHz clock signal.  This  device's  four  outputs  are  selectable  with J10-J13. The boards are built with a trace across J10

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

to  get  the  5MHz signal (10MHz divided by 2). Other ratios can be used by cutting J10 and installing a jumper across one of the other options (J11, J12, J13).

## Negative Supply Voltage

J4 and J5 select the MAX155 VSS voltage. The trace across J4 connects the -5V output of the MAX660 to the MAX155's VSS pin. This configuration is required for the bipolar input range. If J4 is opened and J5 shorted, VSS is  connected to ground. When VSS is grounded, the inputs to the MAX155 should not be pulled below 0V.

## External Reference

J6 connects the MAX155 internal 2.5V reference to the reference input pin. An external 2.5V reference can be used by cutting the trace across J6 and connecting the external source to the pad marked VREF IN.

## MAX155 Mode Selection

J7 and J8 are connected to the MAX155 MODE pin. Software selects the input range it both J7 and J8 are left  open. If fixed input ranges are desired, the appropriate jumper can be installed.

Table 3. Jumper-Selected Hardwired Modes

| MODE JUMPER   | V SS JUMPER   | V SS   | CONVERSION TYPE                                                                                           |
|---------------|---------------|--------|-----------------------------------------------------------------------------------------------------------|
| OPEN          | J4            | -5V    | Software-controlled, multiplexer mode (default mode)                                                      |
| OPEN          | J5            | GND    | Software-controlled, SE or differential mode, unipolar, or bipolar mode (all analog inputs above ground). |
| J7            | J4            | -5V    | 4-channel differential bipolar mode                                                                       |
| J7            | J5            | GND    | 4-channel differential unipolar mode                                                                      |
| J8            | J4            | -5V    | 8-channel single-ended bipolar mode                                                                       |
| J8            | J5            | GND    | 8-channel single-ended bipolar mode                                                                       |

<!-- image -->

## MAX155 Evaluation Kit

The MAX155 EV software cannot read the state of jumpers J4-J8. The program must be manually configured to agree with the hardwired mode if the jumpers differ from the default condition.

## Board Assembly

The MAX155 EV kit board is shipped unassembled. The only assembly tools needed are a standard soldering iron with a grounded tip and wire cutters. Assembly takes about an hour. The builder must have basic electronic skills  such as soldering and the ability to determine component values.

Remove the board and parts from the box and perform the following steps:

- 1) Verify that all parts on the component list are present.
- 2) Mount and solder the D9 and power connectors onto the board.
- 3) Solder all resistors in place and trim their leads.
- 4) Solder all capacitors in place and trim their leads. Observe the polarity of the tantalum capacitors. Insert the positive pin into the pad with the adjacent '+' sign.
- 5) Solder the 10k Ω 10-lead SIP (RSIP1) into place. Polarity is marked on the board by the rounded end of the legend. Match this end with the marked end of the SIP (usually marked with a dot or a notch).
- 6) Solder the 11.059MHz crystal in position.
- 7) Solder D1 (the 1N4001 diode) in place. Align the polarity bands on the diode and printed circuit board.
- 8) Solder the 28-pin IC socket in the position marked IC7 27C64 and IC10 MAX155. All other ICs may be socketed if desired.
- 9) Solder a jumper set in J1 (MANUAL RESET) and J2 (WDI ENABLE). Place the first shunt across the J2 jumper. Place the second shunt on one pin of J1 (leaving J1 open).

```
R1 . . . . . . . . . . . . . . . . . . . 32.4k Ω 1% R2 . . . . . . . . . . . . . . . . . . . 13.0k Ω 1% R3 . . . . . . . . . . . . . . . . . . . 10k Ω 5% R4-R11 . . . . . . . . . . . . . . . 1k Ω 5%
```

```
C1, C2. . . . . . . . . . . . . . . . 27pF C3, C6, C9, C11, C12, C13, C14, C16, C17, C18, C19, C20, C21 . . . . . 0.1µF C4, C5, C7, C8, C15 . . . . . . . . . . . . . . . . . . 10µF TANTALUM C10, C22. . . . . . . . . . . . . . 33µF TANTALUM
```

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX155 Evaluation Kit

10) Install each IC and solder in place if not in sockets. Examine each device after soldering to ensure there are no solder bridges shorting between pins. Proper ESD prevention techniques should be followed when handling any of the semiconductors.

| IC1 IC2   |    | . . . . . .   |     |     | .   | . .   | .   | . .   |     | .     | .     | . . .MAX233           |
|-----------|----|---------------|-----|-----|-----|-------|-----|-------|-----|-------|-------|-----------------------|
|           | .  | .             | . . | .   | .   | .     | . . | .     | .   | . .   | . .   | . .MAX696             |
| IC3       | .  | .             | . . | .   | .   | .     | .   | .     | . . | . .   | . .   | . .80C32              |
| IC4       | .  | .             | . . | .   | .   | .     | . . | .     | .   | .     | .     | . .74HCT573           |
| IC5       | .  | .             | .   | . . | .   | .     | .   | . .   | .   | . . . | . . . | . .74HCT08            |
| IC6       | .  | .             | .   | . . | .   | .     | . . | .     | .   | .     | . .   | . .74HCT139           |
| IC7       | .  | .             | . . | .   | .   | . .   | .   | .     | .   | . . . | .     | . . .27C64 (socketed) |
| IC8       | .  | .             | . . | .   | .   | .     | . . | .     | .   | . .   | . .   | . .6264               |
| IC9       | .  | .             | . . | .   | .   | .     | . . | .     | .   | . .   | . .   | . .74HCT245           |
| IC10      |    | .             | . . | .   | .   | .     | . . |       | . . | .     | .     | . . .MAX155           |
| IC11      |    | .             | . . | .   | .   | .     | .   | .     | . . | . . . | . .   | . .MAX660             |
| IC12      | .  | .             | .   | .   | .   | .     | . . | .     | .   | .     | . .   | . .74HCT161           |
| IC13      | .  | .             | .   | .   | .   | .     | .   | .     | . . | . . . | .     | . . .10MHz Oscillator |
| IC14      |    | .             | . . | .   | .   | .     | .   | . .   | .   | . .   | . .   | . .MAX667             |

When assembly is complete, carefully examine the board for possible solder shorts and misinserted parts, Verify  that  all  ICs  are  in  their  proper  position  and  not reversed. Verify that all tantalum capacitors are inserted with their positive pin aligned with the '+' sign on the board. Verify that D1 is not reversed.

## Setup Instructions

## Attaching the Terminal

The MAX155 evaluation board connects to one of the two possible serial ports (COM1 or COM2) commonly found on an IBM-compatible personal computer. The user must determine and supply the type of cable needed to make the connection. The connector for these ports can be a D9 (9-pin) or D25 (25-pin) connector. The connector on the EV kit is a D9 connector. Consult the computer user manual for the information regarding the location and type of the serial communications connector(s) available on your system.

If  the  computer  has  a  D9  connector available, a standard straight-through cable can be used. If the only available COM port connector is a D25, an adapter is required. The necessary adapter is commonly used with other serial-operated devices and is readily available at computer supply stores.

The RS-232 protocol defines the function of each connector pin. It requires that the equipment on one end of a cable function as data terminal equipment (DTE) and the other as data communications equipment (DCE). The personal computer (PC) end is the DTE and the MAX155 EV kit is connected as DCE.

## Table 4. Serial Communication Cable Pin Functions

D9 to D9 connection (use straight-through cable)

| COMPUTER D9 CONNECTOR (RS-232 DTE)   |        | MAX155 EV KIT D9 CONNECTOR   |
|--------------------------------------|--------|------------------------------|
| DCD                                  | 1----1 |                              |
| RxD                                  | 2----2 | TxD                          |
| TxD                                  | 3----3 | RxD                          |
| DTR                                  | 4----4 |                              |
| GND                                  | 5----5 | GND                          |
| DSR                                  | 6----6 |                              |
| RTS                                  | 7----7 |                              |
| CTS                                  | 8----8 |                              |
| RI                                   | 9----9 | N.C.                         |

D25 to D9 connection (adapter required)

| COMPUTER D25 CONNECTOR (RS-232 DTE)   |         | MAX155 EV KIT D9 CONNECTOR   |
|---------------------------------------|---------|------------------------------|
| DCD                                   | 8----1  |                              |
| RxD                                   | 3----2  | TxD                          |
| TxD                                   | 2----3  | RxD                          |
| DTR                                   | 20----4 |                              |
| GND                                   | 7----5  | GND                          |
| DSR                                   | 6----6  |                              |
| RTS                                   | 4----7  |                              |
| CTS                                   | 5----8  |                              |
| RI                                    | 22----9 | N.C.                         |

## Loading the Software

Before doing anything else, make a copy of the disk provided with the MAX155 EV kit, Use the copy for all operations and keep the original in a safe place. If a hard disk is available, all files can be copied to a directory and executed from there.

If  the  files  are  to  be  accessed  from  a  floppy  drive, select the drive for default operation. For example, enter A: to use drive A. If the files have been copied to a hard disk, set the default directory to the one holding the MAX155 files.

The disk contains a README file that lists any changes to  the  hardware or software. Read the README file before proceeding. The MAX155 EV Kit Users Manual, which covers the operation of the program, is also on the disk (MAX155EV.doc). If a printer is available, print

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

both files by entering PRINT README and PRINT MAX155EV.doc. Either file can also be examined or printed using a word processing program.

After reading the MAX155EV.doc file, type MAX155EV to start the program. Set the program to the port to which the board is connected (COM1 or COM2). With the board connected, turn on the board power. The program displays the status of the communications link between the system and the board. If the status does not indicate READY, see the Troubleshooting Guide section.

Many different input configurations are possible for the MAX155's analog inputs. Consult the MAX155 data sheet for full details.

Apply the input levels to the eight inputs and use the software to configure the input multiplexer as desired. Enter a number (0-7) to select an input, then enter the command for the proper mode.

Read the MAX155EV.doc file for full information about program commands. Table 2 lists the available commands.

## Troubleshooting Guide

The following is a checklist to help isolate problems on the MAX155 EV kit board. It is recommended that each step be done in the order given. Do not proceed until each fault has been corrected. If the MAX155 EV program indicates that the board status is READY, but the conversions are erroneous, go to the following Analog Section .

## Digital Section

## Power

Is the +5V okay?

Check the MAX667 output. Is the voltage on pin 2 between 4.8V and 5.2V? Go to next section if okay.

Is the input voltage (pin 8) between 5.5V and 11.5V?

If yes, the MAX667 may be damaged. Make sure all components are inserted correctly and no shorts exist.  If  not,  input  source  is  not  connected  or  not functioning. D1 could also be installed incorrectly.

## Microprocessor

Does the reset operate correctly?

The RESET line (pin 16 of the MAX696) should be high for 50ms after power-up (or whenever J1 is momentarily shorted), then go low. If not, make sure J1 is open and the MAX696 is correctly installed and undamaged.

<!-- image -->

## MAX155 Evaluation Kit

Is the 80C32's clock running?

Use a scope to check pin 19 of the 80C32. The 11.059MHz should appear distorted but present. If not, the crystal or the 80C32 might be damaged.

Does the 80C32 access the ROM?

Use the scope to check pin 40 of the 80C32 (the A0/D0 signal). It this signal does not toggle every microsecond, one of the following devices may be at fault:

IC3 80C32 controller

IC4 74HCT573 address latch

IC5 74HCT08

part of address decode

IC6 74HCT139

part of address decode

IC7 27C64 ROM

IC8 6264 RAM*

IC9 74HCT245 data-bus buffer

*IC8 AND IC9 CAN BE REMOVED FOR DEBUGGING.

## Terminal Connection

Does the board transmit a stream of A5(hex) characters after a reset?

Disconnect the cable to the PC and reset board. Then use a scope to look at pin 2 of the D9 connector. Normally, the output is at -10V. Every 280ms, a stream of bits lasting 3ms is transmitted. The voltage swings from -10V to +10V.

If okay, go to the next step.

If  the  output  is  stuck  at  +10V  or  -10V,  check  the input of the MAX233 (pin 2). If it is an inverted 0 to 5V copy of the above, the MAX233 is okay, and the ROM or the 80C32 is at fault.

If all of the above are operating correctly, the next step is  to  verify  the  connection  to  the  PC.  The  MAX155  EV program can be placed in an echo mode of sending characters typed on the keyboard and displaying those received from the COM port. Make sure the cable is connected to the proper serial port and to the board. Start the MAX155 EV program and type ^Q (Ctrl Q) to set echo mode. Each character typed on the keyboard should now be displayed on the screen. If not, perform the following checks:

Does pin 5 of the MAX233 swing greater than -5V to +5V whenever a character is entered? If not, the correct port is not selected or present. Try again with the other port.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Is pin 2 of the MAX233 an inverted 0 to 5V copy of the signal on pin 5? If not, the MAX233 is faulty.

Is pin 3 of the MAX233 an inverted 0 to 5V copy of the signal on pin 5? If so, the ROM or other parts of the board are at fault.

If  pin  3  is  okay,  check  pin  4.  Is  it  a  -10V  to  +10V inverted copy of the signal on pin 5? If not, the cable, the PC port, or the MAX233 could be at fault.

## Analog Section

This section assumes that the board communicates correctly with the host computer. However, the readings displayed by the MAX155 program do not correlate to the input voltages.

## -5V Power Supply

Use a DVM to read the MAX155 VSS voltage on pin 6. If the voltage is not more negative than -4.5V, the problem is the MAX660, J4 has been cut, or the MAX155 is defective. J4 can be cut to see if the MAX660 output returns to -5V.

## Conversion Problems

If the -5V is correct and readings are erroneous, check the following:

Make sure the reference input voltage on pin 22 is between 2.45V and 2.55V. If not, and J6 is intact, the MAX155 is at fault.

Make sure the input voltage is correct. Use a DVM to measure the input voltage while doing conversions. The reading agrees (within 8-bits resoIution) as long as the input voltage level is 0 to +2.5V. If not, the MAX155 or the 74HCT245 is at fault.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX155 Evaluation Kit

Figure 1. MAX155 EV Kit Schematic

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 9