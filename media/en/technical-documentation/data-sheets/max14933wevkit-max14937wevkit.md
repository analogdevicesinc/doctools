<!-- lastmod 2022-08-04 -->
## MAX14933/MAX14937 Evaluation Kit

## General Description

The MAX14933/MAX14937 evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the functionality of the MAX14933/MAX14937 2-channel digital  isolators  in  a  16-pin,  wide-body SOIC surface-mount package. The  EV  kit  features  two  independent  isolated power supplies independently adjustable to +5V.

Ordering Information appears at end of data sheet.

<!-- image -->

<!-- image -->

Evaluates: MAX14933, MAX14937

## Features

- Ease of Use
- Easy Powering Through Micro-USB or Test Points
- SMA Connectors to Connect to External Equipment
- Guaranteed 5kV RMS  Isolation
- Fully Assembled and Tested.

## MAX14933/MAX14937 Evaluation Kit

## Quick Start

## Required Equipment

- MAX14933/MAX14937 EV kit
- Two 5V DC power supplies or USB cables with a micro-B connector
- Signal/function generator
- Oscilloscope

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Connect the DC power supplies between the EV kit's VDDA/VDDB and GNDA/GNDB test points.
- 2) Turn on the DC power supply and set it to 5V, then enable the power-supply output.

Note: It is also possible to power the EV kit with standard USB ports. To do so, connect the microB end of the USB cables into PA/PB on the board. Connect the A-end of the USB cable into the USB ports.

- 3) Connect any signal to the SMA connectors or test points and observe the isolated signal on the other side using an oscilloscope.

## Detailed Description of Hardware (or Software)

The  MAX14933/MAX14937  EV  kit  is  a  fully  assembled and  tested  circuit  board  for  evaluating  the  MAX14933/ MAX14937 2-channel digital isolators in a 16-pin, widebody SOIC package. The EV kit is powered from two +5V supplies, as described below.

## External Power Supply

Power  on  the  EV  kit  is  derived  from  two  +5V  sources. Connect  external  supplies  to  the  +5V  and  GNDA  test points, or connect a micro-B USB cable to the on-board PA/PB connectors to provide the 5V supply. Both options have a reverse-current protection diode.

## Evaluates: MAX14933, MAX14937

The  devices  level-shift  the  data  and  control  signals, transmitting  them  across  the  isolation  barrier.  Each supply can be set independently and be present over the entire  specified  range  of  the  device,  regardless  of  the level or presence of the other supply.

The devices can be used to transmit signals on isolated I 2 C serial buses. Connect signals as shown in Table 1 to evaluate isolated I 2 C operation.

A simplified schematic showing the connections for evalu -ating the devices in an isolated I 2 C interface is attached to this data sheet. The devices level-shift the data and clock signals, transmitting them across the isolation barrier.

## Jumpers

Two  jumpers  (POWA/POWB)  are  provided  to  switch between powering the EV kit using micro-USB supplies or jumpers.  When  the  jumpers  are  connected,  the  EV  kit  is powered from the micro-USB ports. In this case, no external supply should be connected to VDDA/VDDB.

## Pullups

All  inputs  and  outputs  are  pulled  up  to  the  corresponding VDD with a 4.7K resistor. The user has the option of adding a resistor or capacitor to ground, or a series resistor depending on their particular needs.

Figure 1. Simplified Schematic

<!-- image -->

## Table 1. MAX14933/MAX14937 Connections for Isolated I 2 C Evaluation

| MAX14933/MAX14937 PIN   | TEST POINT CONNECTION   | DESCRIPTION   |
|-------------------------|-------------------------|---------------|
| I/OA1                   | TPA1                    | SDA           |
| I/OA2                   | TPA2                    | SCLK          |

│

## Component Information, PCB Files, and Schematic

See the following links for component information, PCB files, and schematics:

- MAX14933/MAX14937 EV BOM
- MAX14933/MAX14937 EV PCB
- MAX14933/MAX14937 EV Schematic

Evaluates: MAX14933, MAX14937

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX14933WEVKIT# | EV Kit |
| MAX14937WEVKIT# | EV Kit |

#Denotes RoHS compliant.

│

## MAX14933/MAX14937 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied  0a[im ,ntegrated reserves the right to change the circuitr\ and specifications without notice at an\ time

│

Evaluates: MAX14933, MAX14937

D

C

B

A

8

8

JP2

7

1

2

3

4

7

VDDA

R1

R2

GNDA

0

0

A1

142-0701-851

1

5

3

4

2

TPA1

GNDA

A2

142-0701-851

1

5

3

4

2

TPA2

GNDA

6

6

VDDA

TP1

TP2

VDDA

R3

4.7K

C1

0.01UF

DNI

VDDA

R4

4.7K

C2

0.01UF

DNI

J4

10103593-0001LF

1

2

3

4

5

SOCKET\_TER

SOCKET\_TER

1

2

3

4

5

6

7

SHIELD

11

GNDA

VDDA

R5

4.7K

DNI

R6

4.7K

DNI

10

9

8

J5

1

2

VDDA

GNDA

C4

0.1UF

GNDA

TP5

TP6

GNDA

5

5

D2

MBR130T1G

C3

10UF

D1

MBR130T1G

VDDA

GNDA

U1

MAX14933/

MAX14937

1

16

2

3

4

5

6

7

8

15

14

13

12

11

10

9

VDDB

TP7

1

4

J6

10103593-0001LF

1

2

3

4

5

SOCKET\_TER

SOCKET\_TER

SHIELD

11

10

9

J7

2

GNDB

GNDB

C5

0.1UF

GNDB

TP8

8

GNDB

VDDB

4

1

2

3

4

5

6

7

D4

MBR130T1G

C6

10UF

D3

MBR130T1G

C7

0.01UF

DNI

C8

0.01UF

DNI

R7

4.7K

DNI

VDDB

R8

4.7K

DNI

VDDB

GNDB

VDDB

TP9

VDDB

R9

4.7K

R10

4.7K

TP10

TPB1

TPB2

3

B1

142-0701-851

2

4

3

5

GNDB

B2

142-0701-851

2

3

5

4

GNDB

3

1

1

R11

R12

VDDB

0

0

GNDB

1

2

3

4

JP1

2

PROJECT TITLE:

MAX1493X W BIDI EVKIT

DRAWING TITLE:

SIZE

&lt;HARDWARE\_NUMBER&gt;

HARDWARE NUMBER:

B B

ENGINEER:

DRAWN BY:

&lt;ENGINEER&gt;

2

&lt;DRAWN\_BY&gt;

TEMPLATE REV:

1.5

1

1

DATE:

02/24/15

REV:

A

SHEET 1 OF 1

D

C

B

A

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## BILL OF MATERIALS (BOM)

|   ITEM |   QTY | REF DES                | DESCRIPTION                                                                    | MFG PART #        |
|--------|-------|------------------------|--------------------------------------------------------------------------------|-------------------|
|      1 |     4 | A1, A2, B1, B2         | CONNECTOR; END LAUNCH JACK RECEPTACLE; BOARDMOUNT; STRAIGHT THROUGH; 2PINS;    | 142-0701-801      |
|      2 |     2 | C3, C6                 | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 10V;                                | LMK212F106ZG-T    |
|      3 |     2 | C4, C5                 | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 16V;                               | EMK107BJ104KAH    |
|      4 |     4 | D1-D4                  | DIODE; SCH; SCHOTTKY POWER RECTIFIER; SMT (SOD-123); PIV=30V; IF=1.0A          | MBR130T1G         |
|      5 |     2 | J4, J6                 | CONNECTOR; FEMALE; BOARDMOUNT; MICRO USB B-TYPE MID- MOUNT; RIGHT ANGLE; 5PINS | 10103593-0001LF   |
|      6 |     2 | J5, J7                 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                      | 961102-6404-AR    |
|      7 |     2 | JP1, JP2               | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                      | 961104-6804-AR    |
|      8 |     4 | R1, R2, R11, R12       | RESISTOR; 0805; 0 OHM; 5%; JUMPER; 0.125W; THICK FILM                          | AC0805FR-070RL    |
|      9 |     4 | R3, R4, R9, R10        | RESISTOR; 0805; 4.7K OHM; 5%; 200PPM; 0.25W; THICK FILM                        | ERJ-P06J472V      |
|     10 |     4 | TP1, TP2, TP9, TP10    | TEST POINT                                                                     | 5000              |
|     11 |     4 | TP5-TP8                | TEST POINT                                                                     | 5001              |
|     12 |     4 | TPA1, TPA2, TPB1, TPB2 | TEST POINT                                                                     | 5004              |
|     14 |     4 | C1, C2, C7, C8         | CAPACITOR; SMT; 0805; CERAMIC; 0.01uF; 50V; 5%;                                | GRM2195C1H103JA01 |
|     15 |     4 | R5-R8                  | RESISTOR; 0805; 4.7K OHM; 5%; 200PPM; 0.25W; THICK FILM                        | ERJ-P06J472V      |