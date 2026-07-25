<!-- lastmod 2022-08-02 -->
M

A

X

7

1

0

2

E

V

K

#

## General Description

The  MAX71020AEVK1#  evaluation  kit  (EV  kit)  demonstrates  the  capabilities  of  the  MAX71020A  embedded energy measurement (EM) device.  The EVK can measure AC and/or DC current and voltage utilizing a surface mount resistive shunt and resistive voltage divider.

The EV kit provides an isolated SPI interface to the device over USB.  A provided Windows ®  graphical user interface (GUI) handles translation from the USB to device-specific SPI protocols.

<!-- image -->

<!-- image -->

## SAFETY AND ESD NOTES

THE  DEMO  SYSTEM  IS  ESD  SENSITIVE!  TAKE  ESD  PRECAUTIONS  WHEN  HANDLING  THE  DEMO BOARD! CONNECTING LIVE VOLTAGES TO THE DEMO BOARD SYSTEM WILL RESULT IN POTENTIALLY HAZARDOUS VOLTAGES ON THE DEMO BOARD.

TAKE EXTREME CAUTION WHEN HANDLING THE DEMO BOARD AFTER IT IS CONNECTED TO LIVE VOLTAGES! BOARD GROUND IS DIRECTLY CONNECTED TO LINE VOLTAGE!  ANY TEST EQUIPMENT CONNECTED TO THE DEMO BOARD WHEN THE BOARD IS CONNECTED TO LIVE VOLTAGES MUST BE ELECTRICALLY ISOLATED FROM THE AC MAINS.  FAILURE TO OBSERVE THIS MAY RESULT IN DESTRUCTION OF THE DEMO BOARD AND THE TEST EQUIPMENT, AND IN PERSONAL INJURY OR DEATH.

Windows is a registered trademark of Microsoft Corp.

Ordering Information appears at end of data sheet.

<!-- image -->

Evaluates: MAX7102

## Benefits and Features

- Allows Evaluation of the MAX71020A Embedded Energy Measurement Device in a Safe and Simple Manner
- Isolated SPI/USB for User Safety
- Windows Graphical User Interface (GUI) Handles All Common Tasks
- Easy Hook Up to Test Equipment or Other Test Environments
- Fully Assembled and Tested
- Precalibrated with Utility Meter Grade Equipment
- Highly Accurate AFE for Testing
- AC 2000:1 Dynamic Current Range at 0.5% Accuracy
- DC Voltage and/or Current Measurement

## MAX71020AEVK1#

## EV Kit Contents

- 1x MAX71020 EM REV 3 evaluation board
- 1x USB A to B cable
- USB flash drive with relevant collateral

<!-- image -->

## Evaluates: MAX71020A

## Connection and Jumper Descriptions

The PCB has several jumpers and connections to allow measurement and communication with an external host.

## Table 1. Connections and Jumpers

| NAME   | DEFAULT   | DESCRIPTION                                                   |
|--------|-----------|---------------------------------------------------------------|
| J1     | 1-2       | Selects isolated USB power (1-2 default) supply               |
| J17    | 1-2       | SCK connection jumper                                         |
| J18    | 1-2       | MOSI connection jumper                                        |
| J19    | 1-2       | SSB connection jumper                                         |
| J20    | 1-2       | MISO connection jumper                                        |
| J54    | 1-2       | Grounds VB/XTEMP                                              |
| J57    | 1-2       | Connects neutralAC current source to NeutralAC voltage source |
| J58    | 1-2       | Grounds IBP/DC reference                                      |
| J59    | 1-2       | Grounds IBN/DC reference                                      |
| J56    | N/A       | NeutralAC current-source connection                           |
| J55    | N/A       | NeutralAC current load connection                             |
| J49    | N/A       | NeutralAC voltage source connection (optional)                |
| J50    | N/A       | LineAC voltage connection                                     |
| J16    | N/A       | External isolated SPI headers                                 |
| J60    | N/A       | MAX71020 DIO headers                                          |

│

## MAX71020A PCB Layout

<!-- image -->

│

## MAX71020AEVK1#

## Block Diagram

<!-- image -->

│

Evaluates: MAX71020A

Evaluates: MAX71020A

Figure 1. MAX71020A EV Board Layout-Top Layer

<!-- image -->

Figure 2. MAX71020A EV Board Layout-Bottom Layer

<!-- image -->

Figure 3. MAX71020A EV Board Layout-Top Soldermask

<!-- image -->

Evaluates: MAX71020A

Figure 4. MAX71020A EV Board Layout-Bottom Soldermask

<!-- image -->

Evaluates: MAX71020A

Figure 5. MAX71020A EV Board Layout-Solder Paste Top

<!-- image -->

Evaluates: MAX71020A

Figure 6. MAX71020A EV Board Layout-Top Silkscreen

<!-- image -->

Figure 7. MAX71020A EV Board LayoutTBD

<!-- image -->

## Component Information and Schematics

See  the  following  links  for  component  information  and schematics:

- MAX71020AEVKIT1# BOM
- MAX71020AEVKIT1# Schematic

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX71020AEVK1# | EV kit |

# Denotes RoHS compliant.

Evaluates: MAX71020A

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied  0a[im InteJrated reserves the riJht to chanJe the circXitr\ and specifications ZithoXt notice at an\ time

│

Evaluates: MAX71020A

|   Item Quantity Bill of Materials | Reference (BOM) (Rev 0, 6/15)           | Part          | Footprint         | DigiKeyPN         | Manufacturer   | ManufacturerPN         | Tolerance   | Rating   | HDR DNP   |
|-----------------------------------|-----------------------------------------|---------------|-------------------|-------------------|----------------|------------------------|-------------|----------|-----------|
|                                 1 | 2 C1,C3                                 | 30pF          | CC0402_RLP100-N   | 490-7755-1-ND     | Murata         | GRM1555C1H330GA01J     | ±5%         | 50V      |           |
|                                 2 | 9 C2,C22,C23,C24,C26,C28,C199,C200,C202 | 0.1uF         | 603               | 445-1314-1-ND     | TDK            | C1608X7R1H104K080AA    | ±10%        | 50V      |           |
|                                 3 | 2 C4,C7                                 | 1000pF        | CC0402_RLP100-N   | 490-6366-1-ND     | Murata         | GRM155R72A102KA01D     | ±10%        | 100V     |           |
|                                 4 | 2 C5,C8                                 | 0.1uF         | CC0402_RLP100-N   | 445-5942-2-ND     | TDK            | C1005X5R1H104K050BB    | ±10%        | 50V      |           |
|                                 5 | 2 C6,C9                                 | 10uF          | CC0603_RLP132-N   | 587-1256-1-ND     | Taiyo Yuden    | JMK107BJ106MA-T        | ±10%        | 6.3V     |           |
|                                 6 | 3 C12,C42,C207                          | 1000pF        |                   | 603 490-1451-1-ND | Murata         | GRM1885C1H102JA01D     |             |          |           |
|                                 7 | 4 C20,C21,C27,C201                      | 10uF          |                   | 805 490-3340-2-ND | Murata         | GRM219R60J106KE19D     |             | 10% 6.3V |           |
|                                 8 | 1 C25                                   | 0.033uF       | 603               | 445-5093-1-ND     | TDK            | C1608X7R1H333K080AA    | ±10%        | 50V      |           |
|                                 9 | 1 C203                                  | 0.1uF         | CAPC1005(0402)56N | 445-5942-2-ND     | TDK            | C1005X5R1H104K050BB    | ±10%        | 50V      |           |
|                                10 | 1 J1                                    | CON3          | SIP100P3          | S1012E-36-ND      | Sullins        | PBC36SAAN              |             |          | 3         |
|                                11 | 1 J16                                   | CON6          | SIP100P6          | S1012E-36-ND      | Sullins        | PBC36SAAN              |             |          | 6         |
|                                12 | 5 J17,J18,J19,J20,J57                   | CON2          | SIP100P2          | S1012E-36-ND      | Sullins        | PBC36SAAN              |             |          | 2         |
|                                13 | 1 J21                                   | CON6          | USBB              | 609-3657-ND       | FCI            | 61729-1011BLF          |             |          |           |
|                                14 | 4 J49,J50,J55,J56                       | CON4          | STERM             | 8191K-ND          | KEYSTONE       | 8191                   |             |          |           |
|                                15 | 1 J54                                   | CON2          |                   | S1012E-36-ND      | Sullins        | PBC36SAAN              |             |          | 2         |
|                                16 | 2 J58,J59                               | CON2          | SIP/.1C/2P        | S1012E-36-ND      | Sullins        | PBC36SAAN              |             |          | 2         |
|                                17 | 1 J60                                   | CON6          | SIP/6P            | S1012E-36-ND      | Sullins        | PBC36SAAN              |             |          | 6         |
|                                18 | 1 R3                                    | 47K           |                   | 603 P47KGCT-ND    | Panasonic      | ERJ-3GEYJ473V          |             |          |           |
|                                19 | 1 R4                                    | NC            |                   | 603               |                |                        |             |          | x         |
|                                20 | 1 R15                                   | 750 0.1%      |                   | 603 P750DBTR-ND   | Panasonic      | ERA-3AEB751V           |             |          |           |
|                                21 | 2 R16,R17                               | 1M0.1%        | 1206W             | P1.0MBCCT-ND      | Panasonic      | ERA-8AEB105V           |             |          |           |
|                                22 | 2 R46,R47                               | 2.2K          |                   | 603 P2.20KHCT-ND  | Panasonic      | ERJ-3EKF2201V          |             |          |           |
|                                23 | 5 R48,R49,R90,R94,R95                   |               | 0                 | 603 P0.0GCT-ND    | Panasonic      | ERJ-3GEY0R00V          |             |          |           |
|                                24 | 1 R50                                   | 1M            |                   | 603 P1.00MHCT-ND  | Panasonic      | ERJ-3EKF1004V          |             |          |           |
|                                25 | 3 R53,R92,R93                           | 10K           |                   | 603 P10KGCT-ND    | Panasonic      | ERJ-3GEYJ103V          |             |          |           |
|                                26 | 1 R91                                   |               | 470               | 603 P470HCT-ND    | Panasonic      | ERJ-3EKF4700V          |             |          |           |
|                                27 | 1 R96                                   | 0.001 1% 2.5W | 2512P             | 696-1185-1-ND     | RIEDON         | CSR2512C0R001F         |             |          |           |
|                                28 |                                         |               |                   | 603 P750DBTR-ND   | Panasonic      | ERA-3AEB751V           |             |          |           |
|                                29 | 2 R97,R100                              | 750 1%        | EP11              | CKN4006-ND        | C&K            | EP11SD1CBE             |             |          |           |
|                                30 | 1 SW1 2 TP1,TP4                         | PUSHBUTTON TP | TP_500X_MINITURE  |                   |                |                        |             |          | x         |
|                                31 | 1 U3                                    | FT2232C       | TQFP48            | 768-1010-1-ND     | FTDI           | FT2232D                |             |          |           |
|                                32 | 1 U4                                    | SI8420        | ADUM3201          | 336-1753-5-ND     | Silicon Labs   | SI8420AB-D-IS          |             |          |           |
|                                33 | 1 U5                                    | SI8421        | ADUM3201          | 336-1755-5-ND     | Silicon Labs   | SI8421AB-D-IS          |             |          |           |
|                                34 | 1 U6                                    | 71020_TQFN    | 28TQFN            | MAX71020AETI+-ND  | Maxim          | MAX71020AETI+          |             |          |           |
|                                35 | 1 VR1                                   | MAX5091BASA+  | SOIC8             | MAX5091BASA+-ND   | Maxim          | MAX5091BASA+           |             |          |           |
|                                36 | 1 VR2                                   | VBT1-5V       | VBT1              | 102-2688-1-ND     | CUI Inc        | PDS1-S5-S5-M-TR        |             |          |           |
|                                37 | 1 Y1                                    | 9.8304 MHz    | XTAL_ABM7_6x3-5   | 535-9832-1-ND     | Abracom        | ABM7-9.8304MHZ-D-2-Y-T |             | 30ppm    |           |
|                                38 | 1 Y2                                    | CSTCRG6M00    | CSTCR             | 490-1204-1-ND     | Murata         | CSTCR6M00G53-R0        |             |          |           |

D

C

B

A

TP4

GND

5

+5VISO

C199

0.1uF

0603

V3P3  De-Coupling

+3.3V

C4

1

2

3

RCT

4

C202

0.1uF

0603

C5

1000pF

0.1uF

Place near Pins 27 and 28

GND

VPP IN

TP1

1

1

5

VPP

IAN

IAP

VPP

GND

GND

+5VISO

VR1

MAX5091BASA+

MAX5091BASA+-ND

SOIC8

VIN

SI

EN

CT

VOUT

SO

RES

C6

10uF

J59

CON2

J58

CON2

1

2

1

2

GND

5

GND

GND

8

7

6

1

2

IBN

IBP

IAN

IAP

RESETb

3

4

J1

CON3

SIP100P3

GND

+3.3V

100ma Max

Reset  &lt;  +2.9V

C201

10uF

0805

445-3458-1-ND

VA

U6

IBN

IBP

IAN

IAP

TEST1

RESETZ

VPP

4

1

2

3

4

5

6

7

VA

28

27

R4

NC

0603

C200

0.1uF

0603

CON2

J54

2

1

26

V3P3A

GNDA

DIO3/YPULSE

25

VA

GND

8

DIO3

24

VB

CSB

9

SDO

10

11

SDI

SCK

12

13

NC

14

23

TEST0

22

XOUT

XIN

+3.3V

R3

47K

0603

SW1

EP11

MS 611-EP11-003

C203

0.1uF

Open: measure temp

Close: not measure temp

XOUT

XIN

V3P3D

VDD

DIO0/WPULSE

DIO1/VPULSE

DIO2/XPULSE

INTZ

21

20

19

18

17

16

NC

15

71020\_TQFN

SCK

MOSI

MISO

SSB

GND

GND

DIO0

DIO1

DIO2

INTZ

SCK

MOSI

MISO

SSB

3

DIO0

DIO1

DIO2

DIO3

INTZ

3

V3P3SYS  De-Coupling

C7

C8

1000pF

0.1uF

GND

J60

CON6

GND

1

2

3

4

5

6

DIO0

DIO1

DIO2

DIO3

INTZ

GND

C9

10uF

VDD

C2

0.1uF

0603

GND

+3.3V

Pin  20

2

Tie GND to nearest ground pin to XIN and XOUT

C1

GND

GND

XIN

Y1

9.8304 MHz

XOUT

30pF

Copyright © 2014 - Maxim Integrated Products

Copyright © 2014 - Maxim Integrated Products

Copyright © 2014 - Maxim Integrated Products

Title

Title

Title DB71020 - AM48

DB71020 - AM48

DB71020 - AM48

Document  Number

Document  Number

Document  Number

Monday, March 09, 2015

Monday, March 09, 2015

Monday, March 09, 2015

2

30pF

C3

Size

Size

Size

B

B

B

Date:

Date:

Date:

2

1

1

Sheet

Sheet

Sheet

1

2

2

2

of

of

of

4

4

4

Rev

Rev

Rev

A

A

A

D

C

B

A

D

C

B

A

SCK

MOSI

SSB

MISO

SCK

MOSI

SSB

MISO

.

+5VISO

SCK

MOSI

SSB

MISO

5

+5VISO

C20

10uF

0805

445-3458-1-ND

J17

CON2

SIP100P2

J18

CON2

SIP100P2

J19

CON2

SIP100P2

J20

CON2

SIP100P2

5

2

2

2

2

1

1

1

1

C28

0.1uF

0603

GND

+3.3V

5

4

GND

Isolation

VR2

VBT1-5V

VBT1

102-2688-1-ND

VOUT

VGND

NC4

8

8

7

6

5

GND

8

7

6

5

GND

V2

VOA

VOB

G2

VIN

GND

V1

1

VIA

VIB

ND1

U4

SI8420

ADUM3201

336-1754-5-ND

V2

V1

1

VOA

VIB

G2

VIA

VOB

ND1

U5

SI8421

ADUM3201

336-1756-5-ND

2

3

4

2

3

4

2

1

4

5VIN

C21

10uF

0805

445-3458-1-ND

UGND

SCK\_5V

MOSI\_5V

C26

0.1uF

0603

SSB\_5V

MISO\_5V

4

Optional  External

SPI/RS232/RS485

6

1

2

3

4

5

RX

TX

DIR

J16

CON6

SIP100P6

5VIN

R94

0

0603

R93

10K

0603

R95

0

0603

SCK\_5V

MOSI\_5V

R90

0

0603

R48

0

0603

SSB\_5V

MISO\_5V

R49

0

0603

R92

10K

0603

SBBFTDI

3

C23

0.1uF

0603

SCKFTDI

RXFTDI

3

C22

0.1uF

0603

UGND

24

23

22

21

20

19

17

16

15

13

12

11

10

40

39

38

37

36

35

33

32

30

29

28

27

26

U3

FT2232C

TQFP48

MS 895-FT2232D

AD0

AD1

AD2

AD3

AD4

AD5

AD6

AD7

AC0

AC1

AC2

AC3

S1/WUA

BD0

BD1

BD2

BD3

BD4

BD5

BD6

BD7

BC0

BC1

BC2

BC3

SI/WUB

UGND

31

14

VCCIOB

VCCIOA

GND4

34

42

3

VCC2

GND3

VCC1

GND2

GND1

25

9

18

UGND

46

AVCC

AGND

45

5VUSB

R91

470

0603

AVCC

C24

0.1uF

0603

UGND

PWREN

41

3V3OUT

RESETB

USBDM

USBDP

RSTOUTB

XTIN

XTOUT

EESK

EECS

EEDATA

TEST

6

4

8

7

5

43

44

1

48

2

47

USB3

USBDM

USBDP

RSTOB

XTI

R50

1M

0603

XTO

R53

10K

0603

2

C25

0.033uF

0603

UGND

2

1

3

R46

2.2K

0603

R47

2.2K

0603

UGND

Y2

CSTCRG6M00

CSTCR

MS 81-CSTCR6M00G53

2

Size

Size

Size

B

B

B

Date:

Date:

Date:

500 ma Max

C27

10uF

0805

445-3458-1-ND

UGND

MOUSER 571-1487588-2   1.5M A/B White Cable

Copyright © 2014 - Maxim Integrated Products

Copyright © 2014 - Maxim Integrated Products

Copyright © 2014 - Maxim Integrated Products

Title

Title

Title DB71020 - AM48

DB71020 - AM48

DB71020 - AM48

Document  Number

Document  Number

Document  Number

Monday, March 09, 2015

Monday, March 09, 2015

Monday, March 09, 2015

J21

CON6

USBB

MS 154-2442-E

1

2

USB

3

4

5

6

SPI &amp;

UART

1

Sheet

Sheet

Sheet

1

3

3

3

of

of

of

4

4

4

Rev

Rev

Rev

2.0

2.0

2.0

D

C

B

A

5

4

<!-- image -->

B

A

5

4

Layout  Note:

The GND symbolS on this page must have a private PCB trace connecting back to the GND pin on the AM48.

3

3

2

2

1

<!-- image -->

1

D

C

B

A