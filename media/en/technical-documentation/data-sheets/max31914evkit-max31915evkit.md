<!-- lastmod 2022-08-05 -->
## MAX31914/MAX31915 Evaluation Kits

## General Description

The MAX31914/MAX31915 evaluation kits (EV kits) provide the hardware necessary to evaluate the MAX31914 and MAX31915 industrial octal digital input translators. There is no software required for this EV kit.

## EV Kit Contents

- Assembled circuit board including MAX31915

## MAX31915 EV Kit Photo

<!-- image -->

<!-- image -->

## Features

- Easy Evaluation of the MAX31914 and MAX31915
- RoHS Compliant
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

o

Evaluate: MAX31914

MAX31915

## MAX31914/MAX31915 Evaluation Kits

## Quick Start

## Required Equipment

- MAX31914 and MAX31915 EV kits
- EV kit hardware (included)
- Screwdriver
- Wire
- 24V power supply

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Install a jumper on RIREF (J2).
- 2) Set the EV kit hardware on a nonconductive surface to ensure that nothing on the PCB gets shorted to the workspace.
- 3) Use the wires to connect J1 (VCC and GND) to a 24V power supply and tighten the screws on the wire.
- 4) Connect  field  inputs  to  J5  or  install  jumpers  on FIN1-FIN8 to get the CMOS translation on J3 pins OP1-OP8.

## Table 1. Description of Jumpers

| JUMPER    | DESCRIPTION                                                                                                                                                      |
|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J2        | RIREF: Connects R1 to the RIREF pin.                                                                                                                             |
| J6*       | DB0: Pulls DB0 down to GND. Used to select digital glitch filter.                                                                                                |
| J6*       | DB1: Pulls DB1 down to GND. Used to select digital glitch filter.                                                                                                |
| J6*       | VTSELECT: Pulls VTSELECT down to GND to set the field input trip points to CMOS-compatible logic. See the CMOS Logic-Compatible Levels section for more details. |
| J7        | Bypass LEDs: Connects return path RTX to GND to bypass the LED.                                                                                                  |
| FIN1-FIN8 | Field Inputs Pullup: Connects field input FINX to VIN.                                                                                                           |

Evaluate: MAX31914

MAX31915

## Detailed Description of Hardware

## Connect Field Inputs

To  connect  field  inputs  to  the  PCB,  remove  all  pullup jumpers (FIN1-FIN8). Connect the field inputs to screw terminal J5 or to the left pin of jumpers FIN1-FIN8.

## Adjust Current Limit

To adjust the current limit, remove the jumper on J2 and connect  an  external  resistor  to  the  RIREF  pin  on  J2. Connect  the  other  end  of  the  resistor  to  GND. Another option is to keep the jumper on J2 populated and change the value of R1.

## CMOS Logic Compatible Levels

To  set  the  input  trip  points  to  CMOS  logic  compatiable levels,  populate the VTSELECT jumper on J6. When in this mode, the RTX pins must be grounded by poplulating the jumpers on J7 to bypass the LEDs. The reference resistor (R1) must also be changed to 100kΩ to adjust the current limit.

## Table 2. Description of LEDs (D1-D11)

| LED   | COLOR   | DESCRIPTION                                                                                                                   |
|-------|---------|-------------------------------------------------------------------------------------------------------------------------------|
| D1-D8 | Red     | Field Inputs: Field input is logic-high.                                                                                      |
| D10   | Red     | FAULT : The device has detected a fault. Either the field-supply voltage is too low, the IC temperature is too high, or both. |
| D11   | Red     | UVFAULT : The device has an undervoltage fault indicat- ing the field supply voltage is too low.                              |

## MAX31914/MAX31915 Evaluation KitV

## Component Suppliers

| SUPPLIER         | WEBSITE                |
|------------------|------------------------|
| Bourns           | www.bourns.com         |
| ON Semiconductor | www.onsemi.com         |
| Phoenix Contact  | www.phoenixcontact.com |
| TE Connectivity  | www.te.com             |
| TDK Corp.        | www.tdk.com            |
| Vishay           | www.vishay.com         |

Note:

Indicate that you are using the MAX31915 when contacting these component suppliers..

## Component List, PCB Files and Schematics

See the following links for component information, PCB files, and schematics:

- MAX31914/MAX31915 EV BOM
- MAX31914/MAX31915 EV PCB Files
- MAX31914/MAX31915 EV Schematics

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX31914EVKIT# | EV Kit |
| MAX31915EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluate: MAX31914

MAX31915

## MAX31914/MAX31915 Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                     | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------|-----------------|
|                 0 | 8/13            | Initial release                                 | -               |
|                 1 | 5/15            | Added MAX31914 information to EV kit data sheet | 1-7             |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VSHFL¿FDWLRQV ZLWKRXW QRWLFH DW DQ\ WLPH

Evaluate: MAX31914

MAX31915

A

B

C

D

CO0

*

MAXIM

MAXIM\_Logo COTP1

TP1

GND

1

COTP2

TP2

PITP201

GND

PITP201

PITP101

PITP101

GND

Field Power

24V IN

1

2

PIJ101

PIJ101

PIJ102

PIJ102

GND

Input Filter Bank

FIN1

COR3

R3

PIR301

PIR302

PIR301

PIR302

2.2k 1/4w MELF

P/N: MMA02040C2201FB300

FIN2

COR4

R4

PIR401

PIR402

2.2k 1/4w MELF

PIR401

PIR402

P/N: MMA02040C2201FB300

FIN3

R5

COR5

PIR501

PIR502

PIR501

PIR502

2.2k 1/4w MELF

P/N: MMA02040C2201FB300

FIN4

R6

COR6

PIR601

2.2k 1/4w MELF

PIR602

PIR601

PIR602

P/N: MMA02040C2201FB300

FIN5

R7

COR7

PIR701

2.2k 1/4w MELF

PIR702

PIR701

PIR702

P/N: MMA02040C2201FB300

FIN6

R8

COR8

PIR801

2.2k 1/4w MELF

PIR802

PIR801

PIR802

P/N: MMA02040C2201FB300

FIN7

R9

COR9

PIR901

2.2k 1/4w MELF

PIR902

PIR901

PIR902

P/N: MMA02040C2201FB300

FIN8

R10

COR10

PIR1001

2.2k 1/4w MELF

PIR1002

PIR1001

PIR1002

P/N: MMA02040C2201FB300

GND

1

COJ1

J1

PIC1402

PIC1402

PIC301

PIC301

PIC302

PIC302

PIC401

PIC401

PIC402

PIC402

PIC501

PIC501

PIC502

PIC502

PIC601

PIC601

PIC602

PIC602

PIC701

PIC701

PIC702

PIC702

PIC801

PIC801

PIC802

PIC802

PIC901

PIC901

PIC902

PIC902

PIC1001

PIC1001

PIC1002

PIC1002

COR2

R2

PIR201

PIR202

PIR201

PIR202

150 1/3w MELF

COC14

C14

PIC1401

4.7nF 2kV

PIC1401

GND'

IN1

COC3

C3

1nF 100V - DNP

IN2

COC4

C4

1nF 100V - DNP

IN3

COC5

C5

1nF 100V - DNP

IN4

COC6

C6

1nF 100V - DNP

IN5

COC7

C7

1nF 100V - DNP

IN6

COC8

C8

1nF 100V - DNP

IN7

COC9

C9

1nF 100V - DNP

IN8

COC10

C10

1nF 100V - DNP

PIR102

PIR102

RIREF

COJ2

J2

1

PIJ201

PIJ201

2

PIJ202

PIJ202

COR1

R1

PIR101

PIR101

15k 1/8w

GND

COD9

D9

36V ZEN

PID902

PID902

PID901

PID901

COC12

C12

PIC1202

PIC1202

0.1uF 100V

GND

Input Indicator Bank

COD1

D1

RT1

RT2

RT3

RT4

RT5

RT6

RT7

RT8

PID101

PID102

PID102

PID101

LED

COD2

D2

PID201

PID202

PID202

PID201

LED

COD3

D3

PID301

PID302

PID302

PID301

LED

COD4

D4

PID401

PID402

PID402

PID401

LED

COD5

D5

PID501

PID502

PID502

PID501

LED

COD6

D6

PID601

PID602

PID602

PID601

LED

COD7

D7

PID701

PID702

PID702

PID701

LED

COD8

D8

PID801

PID802

PID802

PID801

LED

PIC1102

PIC1102

GND

GND

GND

PIC1201

PIC1201

2

VTSELECT

DB0

DB1

NLIN1

IN1

RT1

NLIN2

IN2

RT2

NLIN3

IN3

RT3

NLIN4

IN4

RT4

NLIN5

IN5

RT5

NLRIREF

RIREF

NLVCC24V

VCC24V

PIC1101

U1

COU1

PIU101

NC

PIU101

PIU102

PIU102

PIU103

PIU103

PIU104

PIU104

PIU105

PIU105

PIU106

PIU106

PIU107

PIU107

PIU108

PIU108

PIU109

PIU109

PIU1010

PIU1010

PIU1011

PIU1011

PIU1012

PIU1012

PIU1013

PIU1013

PIU1014

PIU1014

PIU1015

PIU1015

PIU1016

PIU1016

PIU1017

PIU1017

PIU1018

VTSELECT

NC

DB0

DB1

NC

IN1

RT1

IN2

RT2

IN3

RT3

IN4

RT4

IN5

RT5

RIREF

NC

GND

OP1

OP2

OP3

OP4

OP5

OP6

OP7

OP8

IN8

RT8

IN7

RT7

IN6

RT6

FAULT

UVFAULT

NC

PIU1018

PIU1019

PIU1019

COC11

C11

PIC1101

10uF 100V

PIC1301

PIC1302

C13

COC13

PIC1301

PIC1302

4.7nF 2kV

GND'

LED Bypass COJ7

J7

NLRT1

RT1

NLRT2

RT2

NLRT3

RT3

NLRT4

RT4

NLRT5

RT5

RT6

RT7

RT8

PIJ701

1

PIJ701

3

5

PIJ703

PIJ703

PIJ705

PIJ705

PIJ707

7

9

PIJ707

PIJ709

PIJ709

PIJ7011

11

13

PIJ7011

PIJ7013

PIJ702

PIU1038

PIU1038

OP1

PIU1037

PIU1037

OP2

PIU1036

PIU1036

OP3

OP4

PIU1035

PIU1035

PIU1034

PIU1034

PIU1033

OP5

PIU1033

OP6

PIU1032

PIU1032

OP7

OP8

PIU1031

PIU1031

PIU1030

PIU1030

IN8

NLIN8

NLRT8

PIU1029

PIU1029

RT8

NLIN7

PIU1028

PIU1028

IN7

NLRT7

PIU1027

PIU1027

RT7

NLIN6

PIU1026

PIU1026

IN6

NLRT6

PIU1025

PIU1025

RT6

PIU1024

PIU1024

FAULTB

PIU1023

PIU1023

UVFAULTB

PIU1022

PIU1022

PIU1021

PIU1021

PIU1020

PIU1020

2

PIJ702

4

6

PIJ704

PIJ704

PIJ706

PIJ706

PIJ708

8

10

PIJ708

PIJ7010

PIJ7010

PIJ7012

12

14

PIJ7012

PIJ7014

PIJ7014

PIJ7013

PIJ7015

PIJ7016

16

PIJ7016

PIJ7015

HDR\_16PIN

15

VCC24V

MAX31914/15

5VOUT

2

PIU1039

PIU1039

EP

GND

GND

FAULT

PITP401

PITP401

COTP4

TP4

3

NLVTSELECT

VTSELECT

NLDB0

J6

COJ6

PIJ601

PIJ601

DB0

NLDB1

1

3

1

PIJ603

PIJ603

DB1

5V0

PIR1102

PIR1102

COR11

R11

3.3k

PIR1101

PIR1101

PID1001

COD10

PID1001

PID1002

PID1002

PIC101

PIC101

PIC102

C1

COC1

0.1uF

PIC102

GND

Field Input Pull ups

COJ15

J15

1

PIJ1501

PIJ1501

2

PIJ1502

PIJ1502

CON2

COJ16

J16

1

PIJ1601

PIJ1601

2

PIJ1602

PIJ1602

CON2

COJ17

J17

1

PIJ1701

PIJ1701

2

PIJ1702

PIJ1702

CON2

COJ18

J18

1

PIJ1801

PIJ1801

2

PIJ1802

PIJ1802

CON2

FIN1

FIN2

FIN3

FIN4

D10

LED

COTP3

TP3

PITP301

5

3

2

4

2

PIJ602

PIJ602

4

PIJ604

PIJ604

PIJ605

5

6

PIJ606

6

PIJ605

PIJ606

HDR\_6PIN

5V0

PIR1202

PIR1202

COR12

R12

3.3k

PID1101

PIR1201

PIR1201

COD11

PID1102

PID1102

PITP301

UVFAULT

5V0

PIC201

PIC201

PIC202

PIC202

PID1101

D11

LED

COC2

C2

4.7uF

24V IN

3

GND

COTP5

TP5

PITP501

PITP501

5V

FIN5

FIN6

FIN7

FIN8

GND

COJ19

J19

PIJ1901

1

PIJ1901

PIJ1902

2

PIJ1902

CON2

COJ20

J20

PIJ2001

PIJ2001

1

PIJ2002

PIJ2002

2

CON2

COJ21

J21

PIJ2101

PIJ2101

1

PIJ2102

2

PIJ2102

CON2

COJ22

J22

PIJ2201

PIJ2201

1

PIJ2202

2

PIJ2202

CON2

5V0

NLOP1

OP1

NLOP2

OP2

NLOP3

OP3

NLOP4

OP4

NLOP5

OP5

NLOP6

OP6

NLOP7

OP7

NLOP8

OP8

NLFAULTB

FAULTB

NLUVFAULTB

J3

COJ3

PIJ301

1

PIJ301

PIJ302

PIJ302

PIJ303

PIJ303

PIJ304

PIJ304

PIJ305

PIJ305

PIJ306

PIJ306

PIJ307

PIJ307

PIJ308

PIJ308

PIJ309

PIJ309

PIJ3010

2

3

4

5

6

7

8

9

COJ4

10

PIJ3010

PIJ401

PIJ401

PIJ402

PIJ402

24V IN

1

NLFIN8

FIN8

PIJ501

PIJ501

NLFIN7

FIN7

NLFIN6

FIN6

NLFIN5

FIN5

NLFIN4

FIN4

NLFIN3

FIN3

NLFIN2

FIN2

NLFIN1

FIN1

PIJ502

PIJ502

2

3

4

PIJ503

PIJ503

PIJ504

PIJ504

PIJ505

PIJ505

5

6

7

PIJ506

PIJ506

PIJ507

PIJ507

8

PIJ508

PIJ508

9

PIJ509

PIJ509

10

11

12

1

2

3

4

5

6

7

8

9

PIJ5010

10

PIJ5010

COJ5

J5

GND

UVFAULTB

FIN2

FIN3

FIN4

FIN5

FIN6

FIN7

FIN8

4

GND

COC15

C15

FIN1

PIC1501

PIC1502

PIC1501

PIC1502

1nF, 1kV

COC16

C16

PIC1601

PIC1602

PIC1601

PIC1602

1nF, 1kV

COC17

C17

PIC1701

PIC1702

PIC1701

PIC1702

1nF, 1kV

COC18

C18

PIC1801

PIC1802

PIC1801

PIC1802

1nF, 1kV

COC19

C19

PIC1901

PIC1902

PIC1901

PIC1902

1nF, 1kV

COC20

C20

PIC2001

PIC2002

PIC2001

PIC2002

1nF, 1kV

COC21

C21

PIC2101

PIC2102

PIC2101

PIC2102

1nF, 1kV

COC22

C22

PIC2201

PIC2202

PIC2201

PIC2202

1nF, 1kV

4

A

B

C

D

CO0

<!-- image -->

CO0

<!-- image -->

CO0

<!-- image -->

## BILLS OF MATERIALS (BOM) 5/15 Revision

| Comment                                                          | Designator                                 |   Quan | PN#                 | MFG                          |
|------------------------------------------------------------------|--------------------------------------------|--------|---------------------|------------------------------|
| 0.1uF                                                            | C1, C12                                    |      2 | CGA4J2X7R2A104K     | TDK                          |
| 4.7uF                                                            | C2                                         |      1 | CGA4J3X5R1H475K     | TDK                          |
| 10uF 60V                                                         | C11                                        |      1 | C5750X7S2A106M      | TDK                          |
| 36V ZEN                                                          | D9                                         |      1 | 1SMB36AT3G          | ON Semi                      |
| LED                                                              | D1, D2, D3, D4, D5, D6, D7, D8, D10, D11   |     10 | HSMS-C170           | Avago Technologies           |
| Phoenix Contact 1984617                                          | J1                                         |      1 | 1984617             | Phoenix Contact              |
| CON10                                                            | J5                                         |      1 | 1-282834-0          | TE Connectivity              |
| RIREF, FIN1, FIN2, FIN3, FIN4, FIN5, FIN6, FIN7 FIN8, VCC, RIREF | J2, J15, J16, J17, J18, J19, J20, J21, J22 |      9 | 961102-6404-AR      | 3M                           |
| 15k 1/8w                                                         | R1                                         |      1 | CRCW080515K0FKEA    | Vishay/Dale                  |
| 150 1/3w MELF                                                    | R2                                         |      1 | MMB02070C1500FB20 0 | Vishay                       |
| 2.2k 1/4w MELF                                                   | R3, R4, R5, R6, R7, R8, R9, R10            |      8 | MMA02040C2201FB30 0 | Vishay                       |
| 3.3k                                                             | R11, R12                                   |      2 | CRCW0805560RFKEA    | Vishay/Dale                  |
| GND                                                              | TP1, TP2                                   |      2 | 5001                | Keystone (02- TPMINI5001-00) |
| 5V                                                               | TP5                                        |      1 | 5000                | Keystone (02- TPMINI5000-00) |
| 4700pF - 2kV Caps                                                | C13, C14                                   |      2 | 1812GC472KAT1A      | AVX                          |
| 1nF- 1kV                                                         | C21, C22                                   |      8 | C0805C102KDRACTU    | Kemet                        |
| Jumpers                                                          |                                            |      9 | 969102-0000-DA      | 3M                           |
| CON                                                              | J3                                         |        | M20-9991245         |                              |
|                                                                  |                                            |      1 |                     | Harwin                       |
| HDR_6PIN                                                         | J6                                         |      1 | 961206-6404-AR      | 3M                           |
| HDR_16PIN                                                        | J7                                         |      1 | 961216-6404-AR      | 3M                           |

| UVFAULT, FAULT   | TP3, TP4   |   2 | 5004   | Keystone (02- TPMINI5004-00)   |
|------------------|------------|-----|--------|--------------------------------|
| MAX31914/1 5     | U1         |   1 |        |                                |