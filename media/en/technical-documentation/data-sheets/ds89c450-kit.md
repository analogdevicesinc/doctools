<!-- lastmod 2022-08-03 -->
<!-- image -->

## www.maxim-ic.com

## GENERAL DESCRIPTION

The  DS89C450  evaluation  kit  (EV  kit)  is  a  proven platform  to  conveniently  evaluate  the  capabilities  of the ultra-high-speed flash microcontroller family. The kit contains the DS89C450 in a DIP-40 socket, 128kB of SRAM mapped through a preprogrammed CPLD, a power-supply regulator, two DB9 serial connectors, and switches and LEDs to control and display board operation. With the addition of a power supply and an RS-232 cable connected to a personal computer, the EV kit provides a completely functional system ideal for application development and debug.

The  DS89C450  EV  kit  can  also  be  used  as  a programming and development platform for the DS5000(T). Quick-start instructions and sample programs  for  the  DS5000(T)  can  be  obtained  from the  DS5000  directory  on  the  software  tool  disk,  or from Maxim technical support at https://support.maxim-ic.com/micro.

## EVALUATION KIT CONTENTS

-  DS89C450 Evaluation Kit Board with Processor and 16.384MHz Crystal Installed
-  8051-Based Microcontroller Software Eval Disk

## DS89C450-KIT# DS89C450 Evaluation Kit

## FEATURES

-  Easily Load Code Using Bootstrap Loader and Serial 0 Port (DB9, J2)
-  Two DB9 RS-232 Serial Connectors
-  DB9 Serial Cable
-  Two Internal Serial Ports
-  On-Board Power Supply Regulator
-  128kB of On-Board Program + Data RAM
-  Preprogrammed Xilinx CPLD Handles Address Multiplexing and RAM Mapping
-  LED Display of Port 0 Levels
-  Pushbutton Switches for Reset and Interrupt Generation
-  Prototyping Area
-  Board Schematics Included to Provide a Convenient Reference Design

## ORDERING INFORMATION

| PART          | TEMP RANGE   | DIMENSIONS          |
|---------------|--------------|---------------------|
| DS89C450-KIT# | Room         | Approx. 16cm x 10cm |

# Denotes a RoHS-compliant device that may include lead(Pb) that is exempt under the RoHS requirements.

Figure 1. DS89C450 Evaluation Kit Board

<!-- image -->

## COMPONENT LIST

| DESIGNATION        | QTY   | DESCRIPTION                            | SUPPLIER   | PART               |
|--------------------|-------|----------------------------------------|------------|--------------------|
| C1, C6             | 2     | 100  F, 25V radial capacitors         | Panasonic  | ECA-1EM101         |
| C2, C7             | 2     | 22  F, 10V tantalum capacitors        | Panasonic  | ECS-T1AX226R       |
| C3, C4, C5, C8-C15 | 11    | 0.1  F capacitors (0805)              | Generic    | -                  |
| C16, C17           | 2     | 22pF capacitors                        | Panasonic  | ECJ-2VC1H220J      |
| J1                 | 1     | 2mm male power-barrel connector        | CUI Inc.   | PJ-002A            |
| J2, J3             | 2     | DB9 RS-232 female connectors           | Amp/Tyco   | 745781-4           |
| J4                 | 1     | Micro header pins (unpopulated)        | -          | -                  |
| J5                 | 1     | Spare input header pins (unpopulated)  | -          | -                  |
| JP1, JP2           | 2     | Solder pad jumpers (closed)            | -          | -                  |
| R1, R4             | 2     | 1.1k  resistors (0805)                | Generic    | -                  |
| R2, R3             | 2     | 10k  resistors (0805)                 | Generic    | -                  |
| R5                 | 1     | 680  resistor (0805)                  | Generic    | -                  |
| RN1, RN3, RN4      | 3     | 330  resistor pack (8)                | CTS        | 770101331          |
| RN2                | 1     | 3.3k  resistor pack (8)               | CTS        | 770101332          |
| SW1, SW4, SW5      | 3     | DIP switches x8                        | C&K        | SDA08H1BD          |
| SW2, SW3           | 2     | SPST pushbutton                        | Panasonic  | EVQ-PAC04M         |
| U1                 | 1     | 350mA linear regulator (5V)            | Maxim      | MAX1659ESA+        |
| U2                 | 1     | 350mA linear regulator (3.3V)          | Maxim      | MAX1658ESA+        |
| U3                 | 1     | DS89C450 microcontroller (40-pin PDIP) | Maxim      | DS89C450-MNL+      |
| U4                 | 1     | Quad buffer                            | Fairchild  | 74AC125            |
| U5                 | 1     | Preprogrammed 44-pin CPLD              | Xilinx     | XC9536XL- 10PCG44C |
| U6                 | 1     | 128k x 8 asynchronous cache SRAM       | Cypress    | CY7C1009D-10VXI    |
| U7                 | -     | Unpopulated                            | -          | -                  |
| U8                 | 1     | RS-232 transceiver (2 Tx, 2 Rx)        | Maxim      | MAX233ACWP+        |
| U9                 | 1     | Inverting octal buffer                 | Fairchild  | 74AC540            |
| U10                | 1     | LED x10 display (Port 1 + power)       | Lumex      | SSA-LXB10IW-GF/LP  |
| Y1                 | 1     | 16.384MHz crystal (socketed)           | Citizen    | HC49US16.384MABJ   |

## TYPICAL OPERATING CIRCUIT

Figure 2. DS89C450 Evaluation Kit Board Layout

<!-- image -->

## DETAILED DESCRIPTION

The DS89C450 EV kit must be used with the DS89C430/DS89C450 ultra-high-speed flash microcontrollers IC data sheet and the Ultra-High-Speed Flash Microcontroller User's Guide (www.maxim-ic.com/user\_guides) . A complete description of the bootstrap loader commands and functions is located in Section 15 of the Ultra-High-Speed Flash Microcontroller User's Guide .

The  DS89C450  EV  kit  and  all  of  its  connectors  are  defined  in  the  schematics  provided  in  the  accompanying documentation disk. However, a short description of the major components of the board follows.

## Power Supplies

The EV kit accepts a DC input supply at J1. The supply should be a 6V to 9V DC supply, center post positive, with at least 300mA capacity. The exact DC input value of the supply is not important, as the on-board linear MAX1658 and MAX1659 regulators produce fixed 5V and 3.3V for use by the kit circuitry.

While it is possible to supply up to 16V at J1 (the maximum input voltage of the MAX1658 and MAX1659), doing so results in a large amount of heat dissipation from the board. A small heatsink plane is provided on the backside of the board beneath the linear regulators, but this may be inadequate at input voltages above 9V. If U1 and U2 are hot, lower the DC input voltage at J1. Note that many unregulated DC wall plug-in supplies may provide an output level much higher than their labeled output value if they are lightly loaded.

## Serial Ports

Both serial ports of the DS89C450 (Serial Port 0 and Serial Port 1) are translated to RS-232 levels and brought out to DB9 connectors at J2 and J3. Serial Port 0 (J2) must always be used when communicating with the bootloader.

## Memory

The  external  memory  of  the  DS89C450  on  this  EV  kit  is  designed  to  operate  with  the  address  and  data  bus multiplexed on P0 and P2. A 128kB x 8 SRAM is installed, which is accessed as both program and data memory by this multiplexed bus. Note that as the total memory space of the DS89C450 is only 64kB of program memory and 64K of data memory, port pin memory banking must be used to access the entire 128kB-memory space.

## CPLD

The CPLD device on the EV kit board is preprogrammed to perform several functions.

-  Address latching of the low 8 bits of the external memory address from port P0.
-  Performing port pin memory banking (optional).
-  Mapping together program and data memory.

The RTL code preprogrammed into the CPLD is as follows.

```
module Eval(AD, nRD, ALE, nPSEN, CFG0, CFG1, SW_IN, P1, A, A16, A17, nOE, SW_OUT); input  [7:0] AD;     // Multiplexed low-order address and data from micro input        nRD;    // Data memory read enable from micro input        ALE;    // Address latch enable from micro input        nPSEN;  // Program memory read enable from micro input        CFG0;   // Configuration input zero (from DIP switch) input        CFG1;   // Configuration input one (from DIP switch) input        SW_IN;  // Interrupt switch input (from pushbutton) inout  [7:0] P1;     // Port 1 from micro output [7:0] A;      // Demultiplexed low-order address to RAM output       A16;    // Address line to RAM output       A17;    // Address line to RAM output       nOE;    // Output enable to RAM output       SW_OUT; // Interrupt switch output (to micro) reg    [7:0] A; always @(negedge ALE) begin A <= AD; end assign A16    = (CFG0 == 0) ? P1[0] : 1'b0; assign A17    = (CFG0 == 0) ? P1[1] : 1'b0; assign P1[0]  = (CFG1 == 0) ?  SW_IN : 1'bz; assign P1[1]  = (CFG1 == 0) ?  SW_IN : 1'bz; assign P1[2]  = (CFG1 == 0) ?  SW_IN : 1'bz; assign P1[3]  = (CFG1 == 0) ?  SW_IN : 1'bz; assign P1[4]  = (CFG1 == 0) ? ~SW_IN : 1'bz; assign P1[5]  = (CFG1 == 0) ? ~SW_IN : 1'bz; assign P1[6]  = (CFG1 == 0) ? ~SW_IN : 1'bz; assign P1[7]  = (CFG1 == 0) ? ~SW_IN : 1'bz; assign nOE    = nRD & nPSEN; assign SW_OUT = SW_IN; endmodule
```

Switch SW4.1 automatically activates the run/load signals. For loader mode, turn SW4.1 ON. For run mode, turn SW4.1 OFF. DIP switches SW4.3 and SW4.4 are used as configuration inputs by the CPLD program. Normally, these switches should be OFF for proper operation. Turning DIP switch SW4.3 ON causes the high address lines A16 and A17 to be set to the values at port pins P1.0 and P1.1. This can be used for address banking, but is not required for normal operation. Turning DIP switch SW4.4 on puts the CPLD into a test mode; press SW3 to toggle the LEDs.

## Pushbuttons

Reset and interrupt pushbuttons are provided. The reset button resets the DS89C450, while the interrupt button can be configured to pull down either the INT0 (by setting SW1.4 ON) or T0 (by setting SW1.5 ON) inputs to the microcontroller when pressed.

## Header Pins and Prototyping Area

Header J4 provides access to all pins of the DS89C450, including power and ground. This header is adjacent to a 0.100'-spaced grid prototyping area for circuit development.

## GETTING STARTED

Before  using  the  DS89C450  EV  kit,  the  Microcontroller  Tool  Kit  (MTK)  application  should  be  installed.  MTK  is included on the CD and is available at www.maxim-ic.com/products/microcontrollers/software/index.cfm.

- 1) Connect the DC 6V-9V, center post positive power supply to the power plug J1.
- 2) Connect a DB9 straight-through serial cable between the PC COM1 port and connector J2.
- 3) Set DIP switches SW1.1, SW1.2, SW1.3, SW4.1, and SW4.2 ON. All other DIP switches should be OFF.
- 4) Turn power ON. All the LEDs should light except for the second from the right.
- 5) Open MTK. In the initial dialog box, select the type of processor you are using (DS89C430, DS89C440, or DS89C450).
- 6) Select Options  Configure Serial Port from the menu. Enter COM1 and 14400 baud.
- 7) Select Target  Open COM1 at 14400 baud .
- 8) Select Target  Connect to Loader .
- 9) A loader banner should appear, as shown in Figure 3.

Refer to the user's guide for more details on the bootloader commands for the DS89C450. To load an application into the DS89C450 flash memory, first enter 'K' at the bootloader prompt to erase the flash, then select File -&gt; Load Flash and open the .hex file you wish to load. The Help menu in MTK provides additional information.

The bootloader also allows you to write to Port 1 directly by entering 'W P1 xx,' where xx is a hex byte value. If you enter a value such as 'W P1 55' or 'W P1 AA,' the LED display will change to reflect the new outputs at Port 1.

Figure 3. Microcontroller Tool Kit Output

<!-- image -->

## USING THE DS89C450 EV KIT WITH THE DS5000(T)

To  use  the  DS89C450  EV  kit  as  the  evaluation  board  for  the  DS5000(T),  it  is  necessary  to  first  unsolder  the DS89C450  from  the  EV  kit.  A  40-pin  ZIF  socket  can  then  be  soldered  into  its  place  to  allow  for  multiple programming of the DS5000(T).

## DS89C450 INFORMATION

For more information on the DS89C450 and to download the IC data sheet, go to www.maxim-ic.com/DS89C450.

## SCHEMATICS

The DS89C450 EV kit schematics are featured in the following pages.

## REVISION HISTORY

| REVISION DATE   | DESCRIPTION                                                                                                                                                                                                                                                                                                | PAGES CHANGED   |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
| 071707          | Changed U6 Cypress part number to CY7C1009BN-12VC in the Components List and in the schematic sheet 4 of 6                                                                                                                                                                                                 | 2               |
| 080907          | Added information about switch SW4.1; updated schematic sheet 6 of 6 (corrected references of SW1.1-SW1.8 to SW4.1-SW1.8)                                                                                                                                                                                  | 5               |
| 090707          | Added 'for the DS500(T)' to the General Description describing where to go for DS5000(T) instructions and sample programs (for clarification)                                                                                                                                                              | 1               |
| 8/10            | Changed the ordering number from DS89C450-K00 to DS89C450-KIT# (added RoHS changes); updated the Component Lis t part numbers for SW1 and U5, and changed the part numbers to lead(Pb)-free for U1, U2, U3, and U8; changed the Technical Suppor t section to Using the DS89C450 EV Kit with the DS5000(T) | 1, 2, 6         |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

1

2

3

4

5

VCC5

XTAL1

J4

XTAL2

D

nRD

20

nWR

19

18

GND

P3[5..0]

P35

17

XTAL1

VCC

XTAL2

P0.0/AD0

40

16

P3.7/nRD

P0.1/AD1

39

P34

15

P3.6/nWR

P0.2/AD2

38

AD0

P33

14

P3.5/T1

P0.3/AD3

37

AD1

AD[7..0]

D

P32

13

P3.4/T0

P0.4/AD4

36

AD2

P31

12

P3.3/nINT1

P0.5/AD5

35

AD3

P30

11

P3.2/nINT0

P0.6

34

AD4

VUNREG

RST

P17

10

P3.1/TXD0

P0.7

33

AD5

J1

32

AD6

AD7

1

2

IN

9

P16

8

P3.0/RXD0

EA/VPP

31

nEA\_IN

RST

ALE/PROG

30

P15

7

P1.7/nINT5

PSEN

P14

P13

6

P1.6/INT4

P2.7

29

5

P1.5/nINT3

P2.6

28

P12

4

P1.4/INT2

P2.5

27

A15

ALE

C

P11

3

P1.3/TXD1

P2.4

26

A14

nPSEN

TP9

GND

1

3

G1

G2

2

PJ-002A

P10

2

P1.2/RXD1

P2.3

25

A13

1

P1.1/T2EX

P2.2

24

A12

P1.0/T2

P2.1

23

A11

P2.0

22

A10

21

A9

A8

C

P1[7..0]

A[15..8]

Header 2x20

VCC3

JP2

VUNREG

VCC5

JP1

VUNREG

MAX1658

U2

MAX1659

U1

2

1

4

5

OUT4

IN3

B

TP8

VCC3

1

2

Solder Jumper (closed)

1

8

OUT5

SET

IN6

3

GND

IN7

6

SHDN

2

7

TP7

VCC5

1

2

Solder Jumper (closed)

1

2

1

4

5

OUT4

OUT5

IN3

8

SET

IN6

3

6

GND

IN7

7

SHDN

2

B

1

1

C7

1

C6

+

C2

1

C1

+

22uF

100uF, 25v

22uF

100uF, 25v

10v

2

2

10v

2

2

VCC5

C14

1

A

Rev B

DS89C450 Evaluation Kit - Power and Header

100nF

A

10v

2

Copyright (C) 2003 - Dallas Semiconductor / MAXIM

87-2C420-KIT

Document Number

A

Size

6

of

1

Sheet

Friday, August 03, 2007

1

2

3

4

5

1

2

3

4

5

VCC5

40

U3

D

AD[7..0]

AD0

AD1

AD2

39

38

P0.0/AD0

AD3

37

P0.1/AD1

VCC

P3.0/RXD0

P3.1/TXD0

10

11

P30

AD4

36

P0.2/AD2

AD5

35

P0.3/AD3

P3.2/INT0

AD6

34

P0.4/AD4

P3.3/INT1

12

P31

P3[5..0]

D

13

P32

AD7

33

P0.5/AD5

P3.4T0

32

P0.6/AD6

P3.5/T1

14

P33

15

P34

P0.7/AD7

P3.6/WR

P3.7/RD

16

P35

17

nWR

nRD

A[15..8]

A8

A9

A10

21

22

P2.0/A8

P1.0/T2

A11

23

A12

24

P2.1/A9

P2.2/A10

P1.1/T2EX

1

A13

25

P2.3/A11

P1.2/RXD1

2

P10

3

P11

P1[7..0]

A14

26

P2.4/A12

P1.3/TXD1

4

P12

A15

27

P2.5/A13

P1.4/INT2

5

P13

28

P2.6/A14

P1.5/INT3

P2.7/A15

P1.6/INT4

6

P14

7

P15

P1.7/INT5

8

P16

P17

C

ALE

30

ALE

RST

9

RST

C

XTAL1

19

XTAL1

EA

31

nEA\_IN

XTAL2

18

XTAL2

GND

PSEN

29

nPSEN

Y1

2

1

DS89C4X0

DS89C4x0 DIP-40

20

nLOADER

16.384 MHz SOCKETED

VCC5

C17

1

C16

1

1

U4A

22pF

10v

2

22pF

10v

2

3

2

14

7

B

VCC5

74AC125

B

4

6

14

5

VCC5

VCC5

7

10

13

U4C

U4B

74AC125

14

14

9

8

11

12

7

7

U4D

74AC125

74AC125

nEA\_OUT

A

Rev B

DS89C450 Evaluation Kit - Processor

A

Copyright (C) 2003 - Dallas Semiconductor / MAXIM

87-2C420-KIT

Document Number

A

Size

6

of

2

Sheet

Friday, August 03, 2007

1

2

3

4

5

1

2

3

4

5

D

D

1

TP1

TCK

VCC3

TP3

+3 V

1

1

TP2

TDI

1

TP4

TDO

32

41

21

U5

VCCIO

VCCINTb

VCCINTa

TCK

TDI

TDO

17

15

30

TMS

16

1

TP5

TMS

A[7..0]

A0

C

A1

A2

26

A3

1

43

A0

A1

AD0

A4

24

A2

AD1

36

A5

3

A3

AD2

37

AD0

AD[7..0]

34

AD1

A6

8

A4

AD3

33

AD2

C

A7

11

A5

AD4

39

AD3

14

A6

AD5

42

AD4

A7

AD6

27

AD5

AD7

44

AD6

AD7

A16

A17

38

35

A16

A17

nRD

ALE

4

5

nRD

nOE

29

nOE

nPSEN

2

ALE

CFG0

22

nPSEN

SW\_OUT

20

SW\_OUT

CFG1

40

CFG0

SW\_IN

25

CFG1

SW\_IN

P10

P11

6

19

P10

B

P12

7

P11

P13

28

P12

P14

18

P13

P15

9

P14

B

GNDc

GNDb

GNDa

P16

P17

13

P15

12

P16

P17

P1[7..0]

XC9536XL

31

23

10

TP6

GND

1

A

Rev B

DS89C450 Evaluation Kit - CPLD

A

Copyright (C) 2003 - Dallas Semiconductor / MAXIM

87-2C420-KIT

Document Number

A

Size

6

of

3

Sheet

Friday, August 03, 2007

1

2

3

4

5

1

2

3

4

5

D

D

AD[7..0]

OPTIONAL SECOND RAM

AD[7..0]

VCC5

VCC5

32

U7

A17

32

U6

VCC

CE2

30

A0

A1

12

11

A0

C

A2

10

A1

A[7..0]

VCC

CE2

30

A0

A3

9

A2

A4

8

A3

A1

12

A5

7

A4

A2

11

A0

D0

D1

D2

13

14

D0

A6

6

A5

A3

10

A1

A[7..0]

D3

15

D1

A7

5

A6

A4

9

A2

A5

8

A3

7

A4

C

D4

17

D2

A8

27

A7

D5

D6

18

D3

A9

26

A8

A10

23

A9

A[15..8]

D0

D1

D2

13

19

D7

20

D4

D5

A11

21

D6

A12

25

4

A11

A10

D3

14

D0

A6

6

A5

A7

5

A6

D4

17

15

D1

D2

A8

D7

A13

28

A12

A14

3

A13

D5

18

D3

A9

27

A7

26

A8

A[15..8]

A15

31

A14

D6

19

D4

A10

23

A9

D7

20

D5

A11

25

A10

21

D6

A12

4

A11

D7

A13

28

A12

A14

3

A13

A15

31

A14

A16

2

A15

A16

A16

2

A15

A16

nOE

24

nOE

nOE

24

nOE

B

nWE

29

nWR

nWE

29

nWR

B

NC

1

NC

1

GND

nCE1

22

GND

nCE1

22

A17

16

CY7C1009BN-12VC

16

CY7C1009BN-12VC

A

Rev B

DS89C450 Evaluation Kit - RAM

A

Copyright (C) 2003 - Dallas Semiconductor / MAXIM

87-2C420-KIT

Document Number

A

Size

6

of

4

Sheet

Friday, August 03, 2007

1

2

3

4

5

1

2

3

4

5

J2

5

VCC5

DB9 RS232 FEMALE

9

D

SERIAL PORT 0

4

DTR0

LOADER

8

CTS0

3

7

RTS0

RX0\_232

7

U11

D

2

6

1

DSR0

TX0\_232

5

18

T1OUT

T2OUT

VCC

T1IN

T2IN

2

1

TX0

TX1

DCD0

TX1\_232

RX1\_232

4

19

R1IN

R2IN

R1OUT

R2OUT

3

20

RX0

RX1

J3

12

15

C2+

5

16

C2b+

C1+

DB9 RS232 FEMALE

9

SERIAL PORT 1

4

DTR1

8

CTS1

11

C2-

C1-

13

14

C2b-

V-

10

Vb-

17

V+

8

3

7

RTS1

RX1\_232

9

GNDb

GNDa

6

2

C

6

DSR1

TX1\_232

1

DCD1

MAX203ECWP

C

VCC5

nLED

20

U9

P1[7..0]

VCC5

VCC3

RN4

U10

VCC

nOE1

nOE2

1

19

SW5

RN3

B

R5

1

1

2

1

20

3

680 Ohm

4

2

19

18

17

nO0

5

3

18

16

nO1

I0

4

17

15

nO2

I1

2

6

5

16

14

nO3

I2

3

P10

2

7

6

15

13

nO4

I3

4

P11

P10

8

7

14

12

nO5

I4

5

P12

P11

2

I5

6

P13

P12

3

1

B

9

8

13

11

nO6

nO7

GND

I6

7

P14

P13

4

I7

8

P15

P14

5

9

P16

P15

6

P17

P16

7

P17

8

9

10

9

12

10

10

11

74AC540

10

SW DIP-8

RESISTOR SIP - 330 OHM

RESISTOR SIP - 330 OHM

LXB10XX

TURN ON TO PULL

PORT 1 LINES LOW

10-SEGMENT RED LED

A

Rev B

DS89C450 Evaluation Kit - Serial / Port 1

A

Copyright (C) 2003 - Dallas Semiconductor / MAXIM

87-2C420-KIT

Document Number

A

Size

6

of

5

Sheet

Friday, August 03, 2007

1

2

3

4

5

1

2

3

4

5

J5

SPARE INPUTS

1

2

3

nLOADER

nLED

VCC5

4

CFG0

CFG1

1

D

R1

D

1.1 K

VCC5

RN2

SW4

RN1

SW1

2

1

2

2

3

4

3

1

nEA\_IN

P30

nEA\_OUT

4

5

5

P31

RX0

6

6

P32

TX0

7

7

P34

SW\_OUT

8

8

P12

9

9

P13

RX1

10

10

RX1\_232

TX1

TX1\_232

SW DIP-8

RESISTOR SIP - 330 OHM

SW DIP-8

RESISTOR SIP - 3.3 K

C

C

SW4.1 - ON FOR LOADER MODE

SW1.1 - ON FOR DS89C4x0

SW4.2 - ON TO ENABLE LEDs

SW1.2 - ON TO USE SERIAL PORT 0 / LOADER

SW4.3 - OFF FOR NORMAL USE

SW1.3 - ON TO USE SERIAL PORT 0 / LOADER

SW4.4 - OFF FOR NORMAL USE

SW1.4 - ON TO CONNECT SW3 AND nINT0

SW4.5 - UNUSED

SW1.5 - ON TO CONNECT SW3 AND T0

SW4.6 - UNUSED

SW1.6 - ON TO USE SERIAL PORT 1

SW4.7 - UNUSED

SW1.7 - ON TO USE SERIAL PORT 1

SW4.8 - UNUSED

SW1.8 - OFF FOR NORMAL USE

VCC5

1

B

VCC5

R3

10k

B

SW2

1

RST

4

3

R2

10k

SW\_IN

2

SW3

4

3

RESET PUSHBUTTON

2

1

2

INTERRUPT PUSHBUTTON

2

1

1

B3FS-1000

B3FS-1000

R4

1.1k

2

A

Rev B

DS89C450 Evaluation Kit - Switches/Config

A

Copyright (C) 2003 - Dallas Semiconductor / MAXIM

87-2C420-KIT

Document Number

A

Size

6

of

6

Sheet

Friday, August 03, 2007

1

2

3

4

5