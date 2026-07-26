<!-- lastmod 2022-08-03 -->
## MAX77826 Evaluation Kit

## General Description

The MAX77826 evaluation kit (EV kit) is a fully assembled  and  tested  PCB  that  evaluates  the  MAX77826 power-management IC. The MAX77826 includes 1 BUCK regulator, 1 BUCK-BOOST regulator, 15 LDOs (3 NMOS LDOs and 12 PMOS LDOs) and an I 2 C Interface. The I 2 C interface supports output-voltage setting , turning on/off of all regulators and reading interrupt/status registers.

The  MINIQUSB interface  board  can  be  used  to  enable PC  communication  through  the  USB  interface  board. Windows ®  2000-, Windows XP ® -, Windows Vista ® -, and Windows 7-compatible software along with an extender board allows  an  IBM-compatible  PC  to  use  to  the  USB port to emulate an I 2 C 2-wire interface. This menu-driven program offers a graphical user interface (GUI) with control buttons.

## Features

- Provides a Reference PCB Layout for Mobile Applications by Using Small Footprint External Components
- Jumpers for Chip Enable (CE)
- Jumpers for GPIO Enable for BUCK, BUCK BOOST, and LDO12
- Jumpers for Switching LDOs Input Supplies
- Built-In 1.8V LDO for VIO Supply

Windows, Windows Vista, and Windows XP are registered trademarks and registered service marks of Microsoft Corporation,

Ordering Information appears at end of data sheet.

Evaluates: MAX77826

## Quick Start

## Required Equipment

- Variable power supply capable of supplying up to 5.5V
- Multimeters
- PC with a spare USB port
- MINIQUSB+ command module (USB cable included)
- MAX77826 EV kit

## Procedure

The  MAX77826  EV  kit  is  a  fully  assembled  and  tested surface-mount  board.  Follow  the  steps  below  to  verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Visit www.maximintegrated.com/evkitsoftware to download the latest version of the EV kit software, xx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install the EV kit software on your computer by running the INSTALL.EXE program inside the temporary folder. The program files are copied and icons are created in the Windows Start | Programs menu.
- 3) Carefully connect the MINIQUSB+ command module with the MAX77826 EV kit by aligning the 16-pin connector J1 and 8-pin receptacle J2 of the MAX77826 EV kit with the 16-pin receptacle J3 and 8-pin header J4 of the MINIQUSB+ interface board, respectively.
- 4) Connect the USB cable from the PC to the MINIQUSB+ command module.
- 5) Preset the power supply to 3.7V. Turn off the power supply.
- 6) Connect the positive lead of the 3.7V power supply to the VBATT pad. Connect the negative lead of the 3.7V power supply to the GND pad.
- 7) Turn on the power supply.
- 8) Move Jumper JU6 from 2-3 to 1-2 (chip enable).
- 9) Start the MAX8904 program by opening its icon in the Start | Programs menu. The EV kit software main window appears, as shown in Figure 1.
- 10)  Wait until seeing Command Module Connected, Device Connected as shown in Figure 1.
- 11)  Click Turn on All Regulator button.
- 12)  Verify that all regulators output default voltage.

<!-- image -->

## MAX77826 Evaluation Kit

## Detailed Description of Software

The MAX77826 EV kit uses the MINIQUSB+ command module for an I 2 C interface to control the MAX77826 IC. The EV kit software displays six tabs to control and monitor  status  of  the  MAX77826  IC,  INTERRUPT,  STATUS, OPMD, CFG(1), CFG(2), and FREQ/UVLO/DEVICE\_ID.

## INTERRUPT Tab

The INTERRUPT tab sheet allows user to monitor interrupts (refer to MAX77826 data sheet for details) and mask each interrupt if needed.

Figure 1. MAX77826 EV Kit Software (INTERRUPT Tab)

<!-- image -->

Evaluates: MAX77826

│

## STATUS Tab

The STATUS tab sheet allows user to monitor status LDO, BUCK, and BUCK BOOST.

Figure 2. MAX77826 EV Kit Software (STATUS Tab)

<!-- image -->

## MAX77826 Evaluation Kit

## OPMD Tab

The OPMD tab sheet allows user to turn on/off LDO, BUCK, and BUCK BOOST. Also, it allows LDO and BUCK to be placed into LPM (low power mode).

Figure 3. MAX77826 EV Kit Software (OPMD Tab)

<!-- image -->

## CFG(1) Tab

The CFG(1) tab sheet allows user to change LDO output voltage (LDO1-LDO12) and turn on/off active discharge function.

Figure 4. MAX77826 EV Kit Software (CFG(1) Tab)

<!-- image -->

## MAX77826 Evaluation Kit

## CFG(2) Tab

The CFG(2) tab sheet allows user to change output voltage of LDO (LDO13-LDO15), BUCK, and BUCK BOOST. It also provides turn on/off active discharge function of each regulators and selects BUCK and BUCK BOOST operation modes.

Figure 5. MAX77826 EV Kit Software (CFG(2) Tab)

<!-- image -->

Evaluates: MAX77826

## FREQ/UVLO/DEVICE\_ID Tab

The FREQ/UVLO/DEVICE\_ID tab sheet allows user to change BUCK switching frequency and soft-start slew rate. Also, it provides interface to change UVLO\_F threshold and read DEVICE\_ID.

Figure 6. MAX77826 EV Kit Software (FREQ/UVLO/DEVICE\_ID)

<!-- image -->

## Detailed Description of Software

## BUCK Regulator

The MAX77826 includes a 3A current-mode BUCK regulator.  In  normal  operation,  BUCK  consumes  only  22µA quiescent current. In low power mode, the quiescent current decreases to 8µA with reduced load capability.

The summary of features is:

- 3A (max) output current rating
- 2.6V to 5.5V input voltage range
- Output voltage range from 0.50V to 1.80V in 6.25mV steps
- ±1% (typ) output voltage DC accuracy
- 2MHz (typ) switching frequency
- Automatic SKIP/PWM or forced PWM modes · 90% peak efficiency
- Programmable slew rate for increasing output voltage settings

## BUCK BOOST Regulator

The MAX77826 BUCK BOOST regulator utilizes a fourswitch  H-bridge  configuration  to  realize  BUCK,  BUCKBOOST, and BOOST operating modes. In this way, this topology  maintains  output  voltage  regulation  when  the input  voltage  is  greater  than,  equal  to,  or  less  than  the output  voltage.  The  MAX77826  BUCK-BOOST  is  ideal in  Li-ion  battery  powered  applications,  providing  2.6V to  4.1875V  output  voltage  and  up  to  2A  output  current across the input voltage range. High switching frequency and a unique control algorithm allow the smallest solution size,  low  output  noise,  and  highest  efficiency  across  a wide input voltage and output current range.

## LDO Regulator

The  MAX77826  provides  15  low-dropout  linear  regulators, including 3 NMOS LDOs, 6 PMOSLV LDOs, and 6 PMOSLS  LDOs.  Each  of  these  regulators  draws  27µA /  18µA  (NMOS /  PMOS) of quiescent current in normal operating mode and &lt; 5µA in Low Power mode. PMOSLV LDOs allow input voltages as low as 1.7V for optimized system efficiency.

All regulators can be operated in Low Power mode which supports up to 5mA of maximum load current.

The summary of features is:

- 3 NMOS LDOs (VOUT Range: 0.6V to 2.1875V with 12.5mV Step)
- 1 x 150mA
- 1 x 450mA
- 1 x 600mA
- 6 PMOSLV LDOs (VOUT Range: 0.8V to 3.975V with 25mV Step)
- 3 x 150mA
- 3 x 300mA
- 6 PMOSLS LDOs (VOUT Range: 0.8V to 3.975V with 25mV Step)
- 3 x 150mA
- 3 x 300mA
- ±1.5% Typical Output Voltage DC Accuracy
- 70dB PSRR at 1kHz

## Evaluates: MAX77826

## MAX77826 Evaluation Kit

## Component List

| PART                                      |   QTY | DESCRIPTION                                                                  |
|-------------------------------------------|-------|------------------------------------------------------------------------------|
| C1, C3                                    |     2 | 10μF ±10%, 6.3V, X5R ceramic capacitor (0603), Taiyo Yuden, JMK107ABJ106MA-L |
| C12, C16, C17, C18,C20, C21, C23, C24,C25 |     9 | 4.7µF ±10%, 6.3V, X5R, ceramic capacitor (0402), Murata, GRM155R60J475KE19D  |
| C19, C22, C28, C29, C30                   |     5 | 1μF, 6.3V, X5R, ceramic capacitor (0402), Taiyo Yuden, JMK105BJ105KA         |
| C2, C4, C5                                |     3 | 22μF, 6.3V, X5R, ceramic capacitor (0603), Taiyo Yuden, JMK107BBJ226MA-T     |
| C26, C27                                  |     2 | 0.1μF ±20%, 10V, X5R, ceramic capacitor (0402), Taiyo-Yuden, LMK105BJ104MA   |
| C6, C7, C8, C9, C10, C11, C13, C14, C15   |     9 | 2.2μF, 6.3V, X5R, ceramic capacitor (0402), Murata, GRM155R60J225ME19D       |
| CON1                                      |     1 | 20-pin, right-angle connector, Sullins, PPTC102LJBN-RC                       |

## Component Suppliers

| SUPPLIER                  | PHONE        | WEBSITE                     |
|---------------------------|--------------|-----------------------------|
| TDK                       | 847-803-6100 | www.comopnent.tdk.com       |
| Murata                    | 770-436-1300 | www.murata-northamerica.com |
| Taiyo-Yuden               | 603-669-7587 | www.t-yuden.com             |
| Sullins Electronics Corp. | 760-774-0125 | www.sullinselectronics.com  |
| Samtec                    | 800-726-8329 | www.samtec.com              |
| Toko                      | 847-297-0070 | www.toko.com                |

Note:

Indicate that you are using the MAX77826 when contacting these component suppliers.

## Schematic and PCB

See the links for information on the schematic and PCB layout.

- MAX77826 Schematic
- MAX77826 PCB

## Ordering Information

| PART           | TYPE           |
|----------------|----------------|
| MAX77826EVKIT# | EV kit         |
| MINIQUSB+      | Command Module |

Evaluates: MAX77826

| PART                                                 |   QTY | DESCRIPTION                                                                       |
|------------------------------------------------------|-------|-----------------------------------------------------------------------------------|
| JU1, JU2, JU3, JU4, JU5, JU6, JU10, JU12, JU13, JU14 |    10 | 3-pin header, Samtec, TSW- 103-07-L-S                                             |
| JU7, JU8, JU9, JU11                                  |     4 | 2-pin header, Samtec, TSW- 102-07-T-S                                             |
| LB                                                   |     1 | 0.47μH inductor (2016), DCR = 37 mΩ, I SAT = 3.5A, TOKO, DFE201610-H-R47N         |
| LBB                                                  |     1 | 1 μ H ±30% inductor (2016), DCR = 60 mΩ, I SAT = 3.6A, TDK, TFM201610GHM- 1R0MTAA |
| R1                                                   |     1 | 100k Ω resistor (0402)                                                            |
| R2, R3                                               |     2 | 2.2k Ω resistor (0402)                                                            |
| U1                                                   |     1 | PMIC (49 WLP) MAXIM, MAX77826                                                     |
| U2                                                   |     1 | Voltage Regulator (5 SC70), MAXIM, MAX8511EXK18+                                  |

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im Integrated reserYes the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX77826

D

C

B

A

6

[1]

[1]

VBATT

VBATT

LDO15

Test Point Big, Red

LDO14

Test Point Big, Red

LDO13

Test Point Big, Red

LDO12

Test Point Big, Red

LDO11

Test Point Big, Red

[1]

VBATT

JU13

JU14

1

2

3

1

2

3

JU12

1

2

3

5

VBATT

[1]

PGNDB

Test Point Big, Black

VOUTB

Test Point Big, Red

VOUTB

[1]

ENB

Test Point Small, Red

ENBB

Test Point Small, Red

VBATT

[1]

PGNDBB

Test Point Big, Black

VOUTBB

Test Point Big, Red

VOUTBB

[1]

ENL12

Test Point Small, Red

C10

2.2uF

6.3V

0402

C9

2.2uF

6.3V

0402

C5

22uF

6.3V

0603

C8

2.2uF

6.3V

0402

C2

22uF

6.3V

0603

C4

22uF

6.3V

0603

C1

10uF

6.3V

0603

LB

0.47uH

35mohm, 4A, 2016

C3

10uF

6.3V

0603

LBB

1uH

60mohm,3.6A, 2016

C7

2.2uF

6.3V

0402

1.2V/3A

3.5V/2A

3.3V/150mA

3.3V/150mA

3.3V/300mA

3.3V/300mA

2.8V/150mA

C6

2.2uF

6.3V

0402

4

A1

A2

C1

C2

B1

B2

B3

D5

E6

G7

F7

F5

G5

F3

G3

F6

G6

G4

F4

E5

E4

D2

E2

E1

D1

G2

INB

INB

PGNDB

PGNDB

LXB

LXB

FB\_B

ENB

ENBB

INBB

INBB

PGNDBB

PGNDBB

OUTBB

OUTBB

LXBB1

LXBB1

LXBB2

LXBB2

FB\_BB

ENL12

LDO15

LDO14

LDO13

LDO12

LDO11

1

1

U1

CL26-0P4MM-7X7

M1

MTHOLE

M3

MTHOLE

1

1

SYS

REFBYP

GND

VIO

IRQB

SDA

SCL

CE

INL1

INL2

INL3

INL4

INL5

LDO1

LDO2

LDO3

LDO4

LDO5

LDO6

LDO7

LDO8

LDO9

LDO10

M2

MTHOLE

M4

MTHOLE

A3

C5

E7

C3

E3

D3

D4

C4

B4

B5

C7

F2

F1

A4

C6

A5

D7

B7

A7

A6

B6

D6

G1

C28

1uF

6.3V

0402

C26

0.1uF

0402

C21

4.7uF

6.3V

0402

1V/500mA

1V/150mA

1V/300mA

1.5V/300mA

1.8V/300mA

C16

4.7uF

6.3V

0402

[1]

VBATT

C27

0.1uF

0402

10V

10V

C22

1uF

6.3V

0402

C17

4.7uF

6.3V

0402

1.8V/150mA

1.8V/300mA

1.8V/150mA

1.8V/150mA

2.8V/300mA

C11

2.2uF

6.3V

0402

C12

4.7uF

6.3V

0402

3

R1

100k

1

JU11

2

0402

C23

4.7uF

6.3V

0402

C18

4.7uF

6.3V

0402

C13

2.2uF

6.3V

0402

[1]

VBATT1

VBATT

Test Point Small, Red

REFBYP

1P8V

[1]

VIO

Test Point Big, Red

VIO

VOUTB

C24

4.7uF

6.3V

0402

C19

1uF

6.3V

0402

C14

2.2uF

6.3V

0402

DRAWN:

CHECKED:

QUALITY CONTROL:

RELEASED:

[1]

C20

4.7uF

6.3V

0402

C15

2.2uF

6.3V

0402

VLOGIC

[1]

R3

2.2k

0402

JU7

3

JU1

1

2

C25

4.7uF

6.3V

0402

LDO1

Test Point Big, Red

LDO2

Test Point Big, Red

LDO3

Test Point Big, Red

LDO4

Test Point Big, Red

LDO5

Test Point Big, Red

LDO6

Test Point Big, Red

LDO7

Test Point Big, Red

LDO8

Test Point Big, Red

LDO9

Test Point Big, Red

LDO10

Test Point Big, Red

DATED:

Jan 03 2014

DATED:

DATED:

DATED:

2

1

2

3

JU2

1

1

JU10

2

R2

2.2k

0402

JU8

2

2

1

2

3

1

JU6

3

3

JU3

1

2

2

3

JU5

1

COMPANY:

TITLE:

SCALE:

VIO

[1]

VBATT

[1]

Test Point Small, Red

IRQB

SDA

[1]

Test Point Small, Red SCL

Test Point Small, Red

VIO

EXT-INL3

Test Point Big, Red

2

3

JU4

1

CODE:

[1]

JU9

2

VLOGIC

1

CON1

1

3

5

7

9

11

13

15

17

19

VOUTBB

VBATT

CON\_20PIN\_SMBUS

[1]

[1]

2

4

6

8

10

12

14

16

18

20

C29

1uF

6.3V

0402

1

3

IN

SHDN

2

GND

NC

4

MAXIM, MAX8511EXK18+T

GND1

GND2

GND3

GND4

MAXIM INTEGRATED

MAX77826 EV KIT SCH

SIZE:

C

DRAWING NO:

SHEET:     OF

1

U3

1

OUT

5

1

C30

1uF

6.3V

0402

1P8V

[1]

REV:

P0

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