<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAXADClite Evaluation Kit

## General Description

## Features

The  MAXADClite  evaluation  kit  (EV  kit)  evaluates  the MAX11645,  Maxim's  smallest,  very-low-power,  12-bit, 2-channel analog-to-digital converter (ADC). The EV kit allows usage of the ADC's internal reference or an externally applied reference voltage.

The EV kit includes Windows XP®-, Windows Vista®-, and Windows®  7-compatible  software  for  data  acquisition through a USB cable.

## EV Kit Contents

The EV kit comes with the following components:

- MAXADClite	evaluation	board
- MAXADClite	GUI	application
- S Windows XP-, Windows Vista-, and Windows 7-Compatible Software
- S USB-PC Connection (Cable Not Included)
- S USB Powered (No External Power Supply Required)
- S Real-Time Data Acquisition Through the USB

## Ordering Information

| PART        | TYPE   |
|-------------|--------|
| MAXADClite# | EV Kit |

# Denotes RoHS compliant.

## Component List

| DESIGNATION       |   QTY | DESCRIPTION                                  |
|-------------------|-------|----------------------------------------------|
| C1, C2            |     2 | 18pF Q 5%, 50V ceramic capacitors (0603)     |
| C3, C5-C8         |     5 | 1 F F Q 10%, 16V ceramic capacitors (0603)   |
| C4, C10, C11, C12 |     4 | 0.1 F F Q 10%, 50V ceramic capacitors (0603) |
| C9                |     1 | 10 F F Q 10%, 10V ceramic capacitor (0805)   |
| D1                |     1 | Green LED (0603)                             |
| D2                |     1 | Yellow LED (0603)                            |
| J1                |     1 | Mini-USB type-B receptacle                   |
| J2                |     0 | Not installed, 10-pin JTAG connector         |
| J3                |     1 | 4-pin header, 100 mill centers               |
| J5-J8             |     0 | Not installed                                |
| R1, R2            |     2 | 27 I Q 5% resistors (0603)                   |

Windows, Windows XP, and Windows Vista are registered trademarks of Microsoft Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| DESIGNATION   |   QTY | DESCRIPTION                                                                  |
|---------------|-------|------------------------------------------------------------------------------|
| R3, R4        |     2 | 4.7k I Q 5% resistors (0603)                                                 |
| R5, R6        |     2 | 1k I Q 5% resistors (0603)                                                   |
| R7, R8        |     2 | 499k I Q 5% resistors (0603)                                                 |
| R9, R10       |     2 | 0 I Q 1% resistors (0603)                                                    |
| R11-R15       |     0 | Not installed, resistors (0402)                                              |
| U1            |     1 | 12-bit ADC with internal reference (12 WLP) Maxim MAX11645EWC+               |
| U2            |     1 | 16-bit microcontroller (64 LQFP) Maxim MAXQ622G-0000+                        |
| U3            |     1 | Ultra-low-noise, high-PSRR LDO linear regulator (5 SC70) Maxim MAX8511EXK33+ |
| Y1            |     1 | 12MHz crystal                                                                |
| -             |     1 | PCB: MAXADClite#                                                             |

1

## MAXADClite Evaluation Kit

## Quick Start

The  MAXADClite  EV  kit  board  is  a  plug-n-play  dataacquisition  kit  that  connects  to  the  PC  through  a  USB cable.  The  EV  kit  digitizes  two  different  analog  inputs and  does  not  require  an  external  power  supply  or  a USB device driver. The EV kit is preloaded with default firmware that communicates with the MAXADClite evaluation software. Software can be installed and run on any Windows-based system.

Note: In	 the	 following	 sections,	 software-related	 items are  identified  by  bolding.  Text  in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to acquire data through the EV kit:

- 1) Connect the EV kit board to a PC through the USB cable.  The  EV  kit  board  receives  power  from  the USB.
- 2) Connect	 the	 analog	 input(s)	 at	 AIN0	 or	 AIN1	 and AGND at J3. See Table 1 for more details.
- 3) Install	and	run	the	MAXADClite	GUI	application.
- 4) Once	the	status	bar	displays Hardware connected , select correct board rev of MAXADClite.
- 5) In Device Configuration options, make selections of the following:
- Reference : Internal (default) or External
- Channel : AIN0 (default) or AIN1
- Input Type : Single-Ended (default) or Differential
- Input Polarity : Unipolar (default) or Bipolar
- 6) Next, select the Number of Samples from the Data Logging group	box	drop-down	list.	Once	all	options are  set,  press  the Start  Conversion button  to proceed (Figure 1).

## Detailed Description of Hardware

The  MAXADClite  EV  kit  board  is  loaded  with  the MAX11645, Maxim's smallest, lowest power, 12-bit ADC. The	ADC	communicates	through	an	I 2C interface to the 16-bit	 RISC	 MAXQ622	 microcontroller	 with	 integrated USB	 serial	 interface	 engine	 (SIE).	 This	 microcontroller can	 be	 configured	 as	 an	 HID	 device	 to	 communicate witht eh PC over USB (Figure 2).

The  EV  kit  microcontroller  is  preloaded  with  firmware that	communicates	with	the	EV	kit	GUI	application.	Upon receiving	the	logging	command	from	the	GUI,	it	acquires data	from	the	ADC	over	the	I 2C bus and sends it to the PC for display and further analysis.

## Table 1. MAXADClite Connector J3 Description

|   J3 PIN NO. | LABEL   | FUNCTION                                |
|--------------|---------|-----------------------------------------|
|            1 | AVDD    | 3.3V, 100mA supply for external circuit |
|            2 | AIN0    | ADC input to channel 0                  |
|            3 | AIN1    | ADC input to channel 1                  |
|            4 | AGND    | Analog ground pin                       |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAXADClite Evaluation Kit

Figure 1. MAXADClite GUI Application

<!-- image -->

Figure 2. MAXADClite Block Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAXADClite Evaluation Kit

## MAXADClite Extended Features

- The	ADC	on	the	EV	kit	board	can	be	selected	for internal  or  external  reference  mode.  The  internal 2.048V  reference  is  the  default  configuration.  The external  reference  mode  can  be  selected  through software. Apply an external voltage between 1V and VDD at J5 (see Table 2).
- The	input	range	of	the	EV	kit	software	is	selectable between a unipolar 0 to VREF or ±VREF/2 differential range.  The  input  type  is  also  software  selectable between two single-ended inputs or one differential

## Table 2. MAXADClite Connector J5 Description

|   J5 PIN NO. | LABEL   | FUNCTION                                    |
|--------------|---------|---------------------------------------------|
|            1 | VREF    | External reference voltage input to the ADC |
|            2 | AGND    | Analog ground pin                           |

## Table 3. MAXADClite Connector J6 Description

|   J6 PIN NO. | LABEL   | FUNCTION                                  |
|--------------|---------|-------------------------------------------|
|            1 | VUSB    | 5V, 300mA supply for the external circuit |
|            2 | GND     | Digital ground pin                        |

input. The default input configuration is single-ended	unipolar.	In	differential	mode,	the	input	needs	to be	connected	on	both	the	analog	inputs	(AIN0	and AIN1)	on	J3.	Refer	to	the	MAX11644/MAX11645	IC data sheet for more information.

- The	EV	kit	board	provides	an	external	5V	supply	at J6 to be used with any external circuit (see Table 3).
- The	microcontroller	on	the	EV	kit	board	can	also	be programmed with custom firmware through the J2 JTAG	connector	(see	Table	4).

## Table 4. MAXADClite Connector J2 Description

|   J2 PIN NO. | LABEL   | FUNCTION                             |
|--------------|---------|--------------------------------------|
|            1 | TCK     | Test clock                           |
|            2 | GND     | Digital ground pin                   |
|            3 | TDO     | Test data output                     |
|            4 | +3V3    | Supply voltage for reference only    |
|            5 | TMS     | Test mode select                     |
|            6 | RST     | MAXQ610 microcontroller reset pin    |
|            7 | N.C.    | No connect                           |
|            8 | VUSB*   | 5V supply for the JTAG debug adapter |
|            9 | TDI     | Test data input                      |
|           10 | GND     | Digital ground pin                   |

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAXADClite Evaluation Kit

Figure 3. MAXADClite EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAXADClite Evaluation Kit

<!-- image -->

Figure 4. MAXADClite Component Placement GuideComponent Side

<!-- image -->

Figure 5. MAXADClite Component Placement Guide-Solder Side

Figure 6. MAXADClite PCB Layout-Component Side

<!-- image -->

Figure 7. MAXADClite PCB Layout-Solder Side

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAXADClite Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                      | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------------------------|-----------------|
|                 0 | 10/10           | Initial release                                                                  | -               |
|                 1 | 8/11            | Updated Ordering Information , Component List , and replaced PCB layout diagrams | 1-5             |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.