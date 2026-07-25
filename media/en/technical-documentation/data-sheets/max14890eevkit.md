<!-- lastmod 2022-08-02 -->
## MAX14890E Evalution Kit

## General Description

The MAX14890E evaluation kit (EV kit) is a fully assembled and tested PCB that contains the MAX14890E incremental encoder interface. The MAX14890E incremental encoder receiver contains four differential receivers and two singleended receivers for RS-422, HTL, TTL, and digital signals.

Power for the transceiver can be provided from a single +5V  source  or  from  an  on-board  24V  to  5V  step-down circuit.  The  MAX14890E  EV  kit  includes  terminal  blocks for motor and power connections.

On-board switches and jumpers are included to configure the  MAX14890E  in  pin-control  mode.  The  evaluation board is also designed with the Arduino ®  form-factor for easy software evaluation and development.

## Features

- Four Configurable Differential or Single-Ended Receivers
- SPI or Pin-Controlled Operation USB-PC Connection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Arduino is a registered trademark of Arduino, LLC.

Evaluates: MAX14890E

## Quick Start

## Recommended Equipment

- MAX14890E EV kit
- 5V, 500mA power supply
- Function generator or logic signal generator
- Oscilloscope

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation before exercising the full features of the device:

- 1)  Verify that all the jumpers are in their default positions, as shown in Table 1.
- 2)  Set the DC power supply to +5V and connect between the VCC and GND test points on the EV kit.
- 3)  Connect the function generator to the Z input on the T3 block terminator. Connect the Z input to ground. Set the function generator to generate a ±2V 100kHz signal.
- 4)  Connect the oscilloscope to the ZO output.
- 5)  Turn on the power supply.
- 6)  Turn on the function generator.
- 7)  Verify that ZO is switching as expected.
- 8)  Repeat with the A, A , B, B , DIY, and Y inputs.

<!-- image -->

## MAX14890E Evalution Kit

## Detailed Description

The  MAX14890E  EV  kit  is  a  fully  tested  circuit  board demonstrating the capabilities of the MAX14890E incremental encoder interface.

The  EV  kit  includes  an  on-board  24V-to-5V  step-down supply, fault indicator LEDs, jumpers for pin-mode control, and SPI-connections. The board is designed to operate either as a stand-alone board or with an external mbed ® or Arduino board (Figure 2).

## Table 1. Jumper Descriptions

| JUMPER   | SHUNT POSITON   | DESCRIPTION                                             |
|----------|-----------------|---------------------------------------------------------|
| J1       | Open            | VL is not connected to VCC                              |
| J1       | Closed*         | VL is connected to VCC                                  |
| J2       | Open*           | Output of 24V step-down circuit is not connected to VCC |
| J2       | Closed          | Output of 24V step-down circuit is connected to VCC     |
| J4       | Open            | 220Ω termination is connected between A and A           |
| J4       | Closed*         | 220Ω termination is not connected between A and A       |
| J5       | Open            | 220Ω termination is connected between B and B           |
| J5       | Closed*         | 220Ω termination is not connected between B and B       |
| J6       | Open            | 220Ω termination is connected between Z and Z           |
| J6       | Closed*         | 220Ω termination is not connected between Z and Z       |
| J7       | Open            | 220Ω termination is connected between DI/Y and Y        |
| J7       | Closed*         | 220Ω termination is not connected between DI/Y and Y    |
| J8       | 1-2             | DI/TTLY is high. See Table 2.                           |
| J8       | 2-3*            | DI/TTLY is low. See Table 2.                            |
| J9       | 1-2             | DI/TTL2 is high. RxD2 is in TTL mode.                   |
| J9       | 2-3*            | DI/TTL2 is low. RxD2 is in DI mode.                     |
| J10      | 1-2             | DI/TTL3 is high. RxD3 is in TTL mode.                   |
| J10      | 2-3*            | DI/TTL3 is low. RxD3 is in DI mode.                     |
| J11      | 1-2             | HITH/CSB is high.                                       |
| J11      | 2-3*            | HITH/CSB is low                                         |
| J12      | 1-2             | SNGL/CLK is high. See Table 2.                          |
| J12      | 2-3*            | SNGL/CLK is low. See Table 2.                           |
| J13      | 1-2*            | TTL/SDI is high. See Table 2.                           |
| J13      | 2-3             | TTL/SDI is low. See Table 2.                            |

mbed is a registered trademark of ARM Limited LLC.

Evaluates: MAX14890E

## Powering the Board

The MAX14890E operates from a single +5V supply.  A separate  logic-supply  (V L )  is  also  available.  Apply  +5V to VCC (TP1) to power the board using a single supply. Shunt the J1 jumper to connect V L  to VCC, or apply a separate voltage as low as 1.62V to V L  (TP2) for a separate logic-supply.

The  EV  kit  also  includes  a  24V  step-down  circuit.  To power the board from an external +24V source, ensure that the J1 jumper is open and connect the +24V supply and GND lead to the T6 terminal block. Put a shunt across the J2 jumper to power VCC with the +5V generated from the step-down circuit.

│

## MAX14890E Evalution Kit

## Mode Selection

The  MAX14890E  operates  in  either  pin-control  or  SPI mode. The MAX14890E EV kit is designed to operate as a stand-alone board in pin-control mode, but can also be evaluated  in  SPI  mode.  Pin-control  mode  is  the  default state of the board.

Ensure that all switches are in the off state (to the left) for pin-control mode.

To  evaluate  the  board  in  SPI  mode,  set  all  of  the switches on the S1 switch to the on state (to the right). The  MAX14890E  EV  kit  has  been  designed  to  connect directly  to  an  Arduino  or  mbed  LPC1549Xpress  board for  easy  software  evaluation.  See  Maxim  Integrated's website for sample code and application notes.

## Pin-Control Mode

## Configuring the RxA, RxB, RxZ, and RxY Receivers

On-board  jumpers  are  available  for  pin-control  mode configuration. J12 sets the SNGL/CLK input. J13 sets the TTL/SDI input. J8 sets the DI/TTLY input.  See Table 2 for receiver configuration settings.

## Configuring the RxD2 and RxD3 Receivers

On-board jumpers are used to set the DI/TTL2 (J9) and DI/TTL3  (J10)  inputs  in  pin-control  mode.  These  inputs configure the D2 and D3 receivers, respecitively (Table 3).

## Cable Termination

Transmission  line  termination  is  required  for  RS-422, HTL,  and  TTL  high-speed  signals  on  long  cables.  The EV kit includes selectable termination for each of the  the RxA,  RxB,  RxZ,  and  RxY  receivers.  For  HTL  signals, 100pF/270Ω AC-termination with a series RC is available. For RS-422 and TTL signal levels, close the associated jumper (Table 4 ) to enable the on-board 200Ω termination for each receiver.

## Fault Indicators

The  MAX14890E  detects  common  RS-422/HTL/TTL/DI faults. These faults include low differential input signals, open-wire,  short-circuits,  and  inputs  voltages  that  are outside the normal operating voltage range (below -18V and +18V).  The EV kit includes on-board LEDs for visual indicators  when  a  fault  condition  occurs  on  any  of  the RxA, RxB, RxZ, RxY, RxD2, and RxD3 receivers. LEDs turn on when a fault condition occurs.

## Table 2. RxA, RxB, RxZ, RxY Receiver Mode Settings (Pin-Control Mode)

| INPUTS   | INPUTS   | INPUTS   | RECEIVER OPERATION   | RECEIVER OPERATION   |
|----------|----------|----------|----------------------|----------------------|
| SINGL    | TTL      | DI/TTLY  | RxA, RxB, RxZ        | RxY                  |
| L        | L        | L        | D-HTL                | TTL                  |
| L        | L        | H        | D-HTL                | DI                   |
| L        | H        | L        | RS-422               | RS-422               |
| L        | H        | H        | RS-422               | DI                   |
| H        | L        | L        | SE-HTL               | TTL                  |
| H        | L        | H        | SE-HTL               | DI                   |
| H        | H        | L        | TTL                  | TTL                  |
| H        | H        | H        | TTL                  | DI                   |

## Table 3. RxD2/RxD3 Receiver Input Modes

| DI/TTL2   | RxD2 MODE OF OPERATION   |
|-----------|--------------------------|
| L         | TTL                      |
| H         | DI                       |

## Table 4. Enable Receiver Input Termination

| JUMPER   | RECEIVER   |
|----------|------------|
| J4       | RxA        |
| J5       | RxB        |
| J6       | RxZ        |
| J7       | RxY        |

│

Evaluates: MAX14890E

Figure 1. MAX14890E EV Kit Block Diagram

<!-- image -->

Evaluates: MAX14890E

Figure 2. MAX14890E EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

Figure 3. MAX14890E EV Kit PCB Layout-Top Layer

<!-- image -->

Evaluates: MAX14890E

Figure 4. MAX14890E EV Kit PCB Layout-Ground

<!-- image -->

Figure 5. MAX14890E EV Kit PCB Layout-Power

<!-- image -->

Evaluates: MAX14890E

Figure 6. MAX14890E EV Kit PCB Layout-Bottom Layer

<!-- image -->

Figure 7. MAX14890E EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## Component Information and Schematic

See  the  following  links  for  component  information  and schematic:

- MAX14890E EV BOM
- MAX14890E EV Schematic

Evaluates: MAX14890E

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX14890EEVKIT# | EV Kit |

#Denotes RoHS compliant.

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitr\ and speci¿cations without notice at an\ time.

│

Evaluates: MAX14890E

A

B

C

D

VCC

SPI\_PARB

HITH\_CSB

SNGL\_CLK

TTL\_SDI

D3FLTB\_SDO

D2FLTB\_IRQB

VL

PIQ102

SPI\_PARB

NLSPI0PARB

NLHITH0CSB

HITH\_CSB

NLSNGL0CLK

SNGL\_CLK

NLTTL0SDI

TTL\_SDI

NLD3FLTB0SDO

D3FLTB\_SDO

NLD2FLTB0IRQB

D2FLTB\_IRQB

COQ1

Q1

PIQ102

PIQ101

PIQ101

COR15

R15

510

GND

COLED6

LED6

PILED602

PILED602

D2FLTB\_IRQB

COJ12

+5V

+5V

LOGIC CIRCUITRY

SPI\_PARB

PIR1702

PIR1702

COR17

R17

100k

PIR1701

PIR1701

GND

SNGL\_CLK

S1

COS1

1

2

PIS101

PIS101

HITH\_CSB

PIS102

PIS102

PIS103

3

D3FLTB\_SDO

4

PIS103

TTL\_SDI

PIS104

PIS104

PIS105

5

D2FLTB\_IRQB

6

PIS105

PIS106

PIS106

PIS107

PIS107

7

8

PIS108

PIS108

SW DIP-8

COR26

R26

10k

PIR2601

PIR2601

COR16

R16

510

GND

COLED5

LED5

PILED502

PILED502

SNGL\_CLK

J12

VL

PIJ1203

PIJ1203

PIJ1202

PIJ1202

PIJ1201

PIJ1201

GND

PIR2302

PIR2302

COJ11

D3FLTB\_SDO

VL

J11

PIJ1103

PIJ1103

PIJ1102

PIJ1102

PIJ1101

PIJ1101

GND

HITH\_CSB

1

1

VCC

PIQ103

PIQ103

PIR1502

PIR1502

PIR1501

PIR1501

PILED601

PILED601

COR23

R23

10k

PIR2301

PIR2301

VL

PIQ202

Q2

COQ2

PIQ202

PIQ201

PIQ201

PIQ203

PIQ203

PIR1602

PIR1602

PIR1601

PIR1601

PILED501

PILED501

PIR2602

PIR2602

COJ13

VL

J13

PIJ1303

PIJ1303

PIJ1302

PIJ1302

PIJ1301

PIJ1301

GND

TTL\_SDI

ON

16

15

PIS1016

PIS1016

PIS1015

PIS1015

PIS1014

14

13

PIS1014

PIS1013

PIS1013

PIS1012

12

11

PIS1012

PIS1011

PIS1011

PIS1010

10

9

PIS1010

PIS109

PIS109

2

VL

2

COR18

R18

PIR1801

PIR1801

1k

COR19

R19

PIR1901

PIR1901

1k

COR20

R20

PIR2001

PIR2001

1k

COR21

R21

PIR2101

PIR2101

1k

COR22

R22

PIR2201

PIR2201

1k

COR24

R24

PIR2401

PIR2401

100

COR25

R25

PIR2501

PIR2501

100

NLSCLK

PIR1802

SCLK

PIR1802

NLCS

PIR1902

PIR1902

CS

NLMISO

PIR2002

MISO

PIR2002

NLMOSI

PIR2102

PIR2102

MOSI

NLIRQB

PIR2202

PIR2202

IRQB

VL

PIR2402

PIR2402

PIR2502

PIR2502

VL

PGND

PIC802

PIC802

PIC801

PIC801

24V

3

24V to 5V POWER

PIC901

PIC901

COC8

C8

33uF

COC9

C9

PIC902

PIC902

1uF

PIR1302

PIR1302

PIC1101

PIC1101

COC11

C11

1uF

COR13

R13

PIR1301

PIR1301

100k PIC1102

PIC1102

GND

Title

Size

A

Date:

File:

3

1

2

U3

COU3

PIU301

PGND

PIU301

PIU302

PIU302

PIU303

3

4

PIU303

PIU304

VIN

EN/UVLO

VCC

PIU304

PIU305

FB/VO

5

PIU305

MAX17501B

LX

GND

/RST

N.C.

SS

GND

GND

COL1

L1

10

9

PIU3010

PIU3010

PIU309

PIU309

PIU308

8

7

PIU308

PIU307

PIU307

PIU306

PIU306

6

PIU3011

PIL101

PIL101

PIC1201

PIC1201

24V

+5V

GND

COC12

C12

PIC1202

PIC1202

GND

GND

PGND

MAX14890EVKIT, LOGIC and POWER

Number

MAX14890

12/1/2014

Sheet    of

C:\Users\..\MAX14890E EV Kit Logic Select\_0r2.SchDoc

4

Drawn By:

3300pF

COT6

T6

1

PIT601

PIT601

2

PIT602

PIT602

3

PIT603

PIT603

4

PIT604

PIT604

4-pin Screw Terminal

47uH

PIL102

PIL102

10uF

PIC1002

PIC1002

COC10

C10

PIC1001

PIR1402

PIC1001

PID301

PID301

+5V

PID302

PID302

PIR1402

COR14

R14

100

PIR1401

PIR1401

PGND

Revision

1.0

2 of 3

ST

COD3

D3

4

A

B

C

D

A

B

C

D

1

1

<!-- image -->

<!-- image -->

2

<!-- image -->

<!-- image -->

<!-- image -->

2

3

## ARDUINO/LPCXPRESS CONNECTIONS

J16 aligns with J6 on the LPCXpresso1549 board

J17 aligns with J1 on the LPCXpresso1549 board

J18 aligns with J7 on the LPCXpresso1549 board

J19 aligns with J2 on the LPCXpresso1549 board

<!-- image -->

<!-- image -->

| Title MAX14890EVKIT, LPCXpresso1549 Connections   | Title MAX14890EVKIT, LPCXpresso1549 Connections       | Title MAX14890EVKIT, LPCXpresso1549 Connections   |
|---------------------------------------------------|-------------------------------------------------------|---------------------------------------------------|
| Size A                                            | Number MAX14890                                       | Revision 1.0                                      |
| Date:                                             | 12/1/2014 Sheet                                       | of 3 of 3                                         |
| File:                                             | C:\Users\..\MAX14890E EV Kit LPC1549.SchDoc Drawn By: | ST                                                |

3

4

4

A

B

C

D

A

B

C

D

COJ8

VCC

SPI\_PARB

HITH\_CSB

SNGL\_CLK

TTL\_SDI

D3FLTB\_SDO

D2FLTB\_IRQB

VL

J8

PIJ803

PIJ803

PIJ802

PIJ802

PIJ801

PIJ801

GND

1

COT1

T1

COT2

T2

COT3

T3

COT4

T4

COT5

T5

VCC

NLSPI0PARB

SPI\_PARB

NLHITH0CSB

HITH\_CSB

NLSNGL0CLK

SNGL\_CLK

NLTTL0SDI

TTL\_SDI

NLD3FLTB0SDO

D3FLTB\_SDO

NLD2FLTB0IRQB

D2FLTB\_IRQB

1

PIT101

PIT101

2

PIT102

PIT102

2

PIT202

PIT202

1

PIT201

PIT201

2

PIT302

PIT302

1

PIT301

PIT301

1

PIT401

PIT401

2

PIT402

PIT402

1

PIT501

PIT501

2

PIT502

PIT502

DI\_TTLY

1

COJ9

J9

PIJ903

PIJ903

PIJ902

PIJ902

PIJ901

PIJ901

GND

+5V

VL

+5V

DI\_TTL2

PIR501

PIR501

PIC301

PIC301

PIC302

PIC302

PIC401

PIC401

PIC402

PIC402

PIR702

PIR702

PIR701

PIR701

PIC502

PIC502

PIC501

PIC501

PIR901

PIR901

PIR902

PIR902

PIR1102

PIR1102

PIR1101

PIR1101

PIC601

PIC601

PIC602

PIC602

AO

/AFLT

BO

/BFLT

ZO

/ZFLT

YO

/YFLT

LO2

LO3

PIR502

PIR502

COR5

R5

270

COC3

C3

100pF

COC4

C4

100pF

COR7

R7

270

COC5

C5

100pF

COR9

R9

270

COR11

R11

270

COC6

C6

100pF

COJ10

J10

PIR601

PIR601

PIJ402

PIJ402

PIJ401

COJ4

PIJ401

PIJ502

PIJ502

PIJ501

PIR802

PIJ501

PIR802

PIR801

PIR801

PIR1001

PIR1001

PIR1002

PIR1002

PIJ602

PIJ602

PIJ602

COJ6

PIR1202

PIR1202

PIR1201

PIR1201

PIJ702

PIJ702

PIJ701

PIJ701

PIJ1003

PIJ1003

PIJ1002

PIJ1002

PIJ1001

PIJ1001

GND

COJ7

COJ5

AO

NLAO

NL0AFLT

/AFLT

NLBO

BO

NL0BFLT

/BFLT

NLZO

ZO

NL0ZFLT

/ZFLT

NLYO

YO

NL0YFLT

/YFLT

NLLO2

LO2

NLLO3

LO3

PIR602

PIR602

COR6

R6

120

J4

J5

COR8

R8

120

COR10

R10

120

J6

COR12

R12

120

J7

VL

2

DI\_TTL3

2

SPI\_PARB

HITH\_CSB

SNGL\_CLK

23

C1

COC1

PIC101

PIC102

PIC101

PIC102

100nF

GND

PIU1023

PIU1023

4

SPI

PIU104

PIU104

5

TTL\_SDI

PIU105

PIU105

PIU106

6

D3FLTB\_SDO

3

PIU106

PIU103

PIU103

PIU107

D2FLTB\_IRQB

7

PIU107

NLA

A

NL0A

/A

NLB

B

NL0B

/B

NLZ

Z

NL0Z

/Z

NLDI0TTLY

DI\_TTLY

NLDI0Y

DI\_Y

NL0Y

/Y

NLDI0TTL2

DI\_TTL2

32

31

PIU1032

PIU1032

PIU1031

PIU1031

9

10

PIU109

PIU109

PIU1010

PIU1010

25

26

PIU1025

PIU1025

PIU1026

PIU1026

18

16

PIU1018

PIU1018

PIU1016

PIU1016

PIU1015

15

PIU1015

14

13

PIU1014

PIU1014

PIU1013

PIU1013

NLDI0TTL3

DI\_TTL3

30

29

PIU1030

PIU1030

PIU1029

PIU1029

HITH/CSB

SNGL/CLK

TTL/SDI

D3FAULTB/SDO

D2FAULTB/IRQB

A

/A

B

/B

Z

/Z

DI/TTLY

DI/Y

/Y

DI/TTL2

DI2

DI/TTL3

DI3

AO

/AFAULT

BO

/BFAULT

ZO

/ZFAULT

YO

/YFAULT

LO2

EP

33

PIU1033

PIU1033

LO3

Title

Size

A

Date:

File:

3

VL

PIU1022

22

PIU1022

VL

GND

11

PIU1011

PIU1011

GND

PIJ101

PIJ101

COJ1

J1

3

VCC

PIJ102

PIJ102

PIJ201

PIJ201

PIJ202

PIJ202

COJ2

C2

COC2

J2

PIC201

PIC201

PIC202

PIC202

100nF

27

R1

COR1

PIR102

PIR102

/AFLT

1.8k

+5V

GND

COU1

U1

PIU1027

PIU1027

VCC

MAX14890

1

AO

2

PIU101

PIU101

PIU102

PIU102

8

21

/AFLT

BO

/BFLT

PIU108

PIU108

PIU1021

PIU1021

24

20

ZO

/ZFLT

PIU1024

PIU1024

PIU1020

PIU1020

17

19

YO

/YFLT

PIU1017

PIU1017

PIU1019

PIU1019

12

LO2

PIU1012

PIU1012

28

LO3

PIU1028

PIU1028

MAX14890EVKIT

Number

MAX14890

12/1/2014

C:\Users\..\MAX14890E EV Kit.SchDoc

PILED101

PILED101

COLED1

LED1

PILED102

PILED102

PIR101

PIR101

/BFLT

R2

COR2

PIR202

PIR202

1.8k PILED201

PILED201

PILED202

PILED202

PIR201

PIR201

/ZFLT

R3

COR3

PIR302

PIR302

1.8k

VCC

PID102

PID102

PID101

D1

COD1

PITP101

PID101

PITP101

AO

BO

TP1

COTP1

PITP301

PITP301

COTP3

TP3

PITP501

PITP501

ZO

TP5

COTP5

PITP701

PITP701

/AFLT

TP7

COTP7

PITP901

PITP901

/BFLT

TP9

COTP9

PITP1101

PITP1101

COTP11

TP11

GND

Sheet    of

Drawn By:

LED3

PILED302

PILED302

PIR301

PIR301

/YFLT

R4

COR4

PIR402

PIR402

1.8k

VL

PID202

PID202

PID201

D2

COD2

PITP201

PID201

PITP201

YO

LO2

TP2

COTP2

PITP401

PITP401

COTP4

TP4

PITP601

PITP601

LO3

TP6

COTP6

PITP801

PITP801

/ZFLT

TP8

COTP8

PITP1001

PITP1001

/YFLT

TP10

COTP10

PITP1201

PITP1201

COTP12

TP12

PITP1301

PITP1301

COTP13

TP13

PITP1401

PITP1401

COTP14

TP14

PITP1501

PITP1501

COTP15

TP15

PITP1601

PITP1601

COTP16

TP16

Revision

1.0

1 of 3

ST

4

VL

COLED2

LED2

4

PILED301

PILED301

COLED3

PILED401

PILED401

PILED402

PILED402

PIR401

PIR401

COLED4

LED4

A

B

C

D

## Bill of Materials (BOM)

DATE: 1/17/2015 DESIGN: max14890\_evkit\_A CALLOUT:

Revision\_Type : PROTOTYPE

ITEM

QTY

REF DES

1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

2

4

1

2

1

1

5

6

6

1

6

2

4

4

4

2

3

2

5

2

1

12

5

1

2

10

C1,C2

C3, C4, C5, C6

C8

C9, C11

C10

C12

D1, D2, D3, D4, D5

J1, J2, J4, J5, J6, J7

J8, J9, J10, J11,J12,

J13

L1

LED1, LED2, LED3,

LED4, LED5, LED6

Q1, Q2

R1, R2, R3, R4

R5, R7, R9, R11

R6, R8, R10, R12

R13, R17

R14, R24, R25

R15, R16

R18, R19, R20,

R21, R22

R23, R26

S1

SU1-SU12

T1, T2, T3, T4, T5

T6

TP1, TP2

TP3-TP12

MFG PART #

C1005X7R1E104K050BB

C1608C0G1H101J080AA

UQT1H330MCL1GS

C1608X5R1H105K080AB

C1608X5R1A106K

C0603C332K1RAC

MBRX120

PEC02SAAN

PCC03SAAN

VLP6045LT-470M

LTST-C193KRKT-2A

NTR1P02LT1-D

1825057-7

STC02SYAN

1935161

1935187

5010

5014

MANUFACTURER

TDK

TDK

NICHICON

TDK

TDK

KEMET

MICRO COMMERCIAL

COMPONENTS

SULLINS ELECTRONICS

CORP

SULLINS ELECTRONICS

CORP

TDK

Lite-On Technology

On Semi

TE CONNECTIVITY

SULLINS ELECTRONICS

CORP.

PHOENIX CONTACT

PHOENIX CONTACT

KEYSTONE

KEYSTONE

VALUE

0.1UF

100PF

33UF

1UF

10UF

3300PF

1.8k

270

220

100k

100

510

1k

10k

STC02SYAN

DESCRIPTION

(0402); CERAMIC

CHIP; 0.1UF; 25V;

(0603); CERAMIC

CHIP; 100PF; 50V;

ALUM ELECT; 33UF;

50V; TOL=20%; TG=-

(0603); CERAMIC

CHIP; 1UF; 50V;

(0603); CERAMIC

CHIP; 10UF; 10V;

(0603); CERAMIC

CHIP; 3300PF;

STANDARD;

20V,1A; SMT (SOD-

MALE; THROUGH

HOLE; BREAKAWAY;

MALE; THROUGH

HOLE; BREAKAWAY;

FERRITE; 200mohm;

TOL=+/-20%; 1.4A

LED; RED; SMT

(603); PIV=1.9V;

SIGNAL SURFACE

MOUNT

1.8K OHM; 1%;

100PPM; 0.0125W;

270 OHM; 1%;

100PPM; 0.0125W;

OHM; 1%; 100PPM;

0.0125W; THICK

100K OHM; 1%;

100PPM; 0.0125W;

100 OHM; 1%;

100PPM; 0.0125W;

510 OHM; 1%;

100PPM; 0.0125W;

OHM; 1%; 100PPM;

0.0125W; THICK

10K OHM; 1%;

100PPM; 0.0125W;

SPST; 24V; 0.1A;

SLIDE-ACTUATED

JUMPER; STR;

TOTAL

CONNECTER; TERM;

FEMALE; 2-PIN

TERM; FEMALE; 4-

PIN

0.125D; 0.445L;

0.063 BOARD HOLE;

0.125D; 0.445L;

0.063 BOARD HOLE;

27 4 TP13, TP14, TP15, TP16 5011 KEYSTONE 0.125D; 0.445L; 0.063 BOARD HOLE;

INCREMENTAL

ENCODER

28

1 U1

MAX14890EATJ+

MAXIM

29 1 U3 MAX17501BATB+ MAXIM CONVERTER; 10 TDFN-EP; MAXIM

30 100

PURCHA SE(DNP)

TOTAL QTY REF DES Var Status MAXINV MFG PART # MANUFACTURER VALUE

2 J16, J19 DNP

1 J17 DNP

1 J18 DNP

4