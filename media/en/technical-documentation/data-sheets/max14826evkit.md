<!-- lastmod 2022-08-03 -->
## MAX14826 Evalution Kit

## General Description

The  MAX14826  evaluation  kit  (EV  kit)  consists  of  the evaluation board and software. The EV kit is a fully assembled and  tested  circuit  board  that  evaluates  the  MAX14826 IO-Link ®  device transceiver.

The  EV  kit  includes  Windows  XP ® -,  Windows  Vista ® -, and  Windows ®   7-compatible  software  that  provides  a graphical user interface (GUI) for exercising the features of the device. The EV kit is connected to a PC through a USB A-to-B cable.

## Features

- IO-Link-Compliant Device Transceiver
- IO and SPI Interface Terminals
- Windows XP-, Windows Vista-, and Windows 7-Compatible Software
- USB-PC Connection (Cable Included)
- Proven PCB Layout
- Fully Assembled and Tested

## MAX14826 EV Kit Files

| FILE                    | DESCRIPTION                                |
|-------------------------|--------------------------------------------|
| INSTALL.EXE             | Installs the EV kit files on your computer |
| 14826.EXE               | Application program                        |
| CDM20600.EXE            | Installs the USB device driver             |
| UNINST.EXE              | Uninstalls the EV kit software             |
| USB_Driver_Help_200.PDF | USB driver installation help file          |

Ordering Information appears at end of data sheet.

IO-Link is a registered trademark of Profibus User Organization (PNO). Windows, Windows XP, and Windows Vista are registered

trademarks and registered service marks of Microsoft Corporation.

Evaluates: MAX14826

## Quick Start

## Recommended Equipment

- MAX14826 EV kit (USB A-to-B cable included)
- User-supplied Windows XP, Windows Vista, or Windows 7 PC with a spare USB port
- 24V, 100mA DC power supply

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation before exercising the full features of the device:

- 1)  Visit www.maximintegrated.com/evkitsoftware to download  the  latest  version  of  the  EV  kit  software, 14826Rxx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2)  Install  the  EV  kit  software  and  USB  driver  on  your computer  by  running  the  INSTALL.EXE  program  inside the  temporary  folder.  The  program  files  are  copied  to your  PC  and  icons  are  created  in  the  Windows Start |  Programs menu.  During  software  installation,  some versions  of  Windows  may  show  a  warning  message indicating that this software is from an unknown publisher. This is not an error condition and it is safe to proceed with installation. Administrator privileges are required to install the USB device driver on Windows.
- 3)  Verify that all the jumpers are in their default positions, as shown in Table 1.
- 4)  Connect the 24V DC power supply on the VCC and GND connectors on the EV kit board.
- 5)  Connect  the  USB  cable  from  the  PC  to  the  EV  kit board. A Windows message appears when connecting the  EV  kit  board  to  the  PC  for  the  first  time.  Each version of Windows has a slightly different message. If you see a Windows message stating ready to use , then  proceed  to  the  next  step.  Otherwise,  open  the USB\_Driver\_Help\_200.PDF document in the Windows Start | Programs menu to verify that the USB driver was installed successfully.

<!-- image -->

## MAX14826 Evalution Kit

- 6)  Start  the  EV  kit  software  by  opening  its  icon  in  the Windows Start | Programs menu. The EV kit software main window appears, as shown in Figure 1.
- 7)  Verify that Hardware: Connected is displayed on the status bar at the bottom of the main window.
- 8)  Press the Read or Write buttons on the GUI to access the device SPI registers.

## Detailed Description of Software

## Operating in SPI Mode

To operate the device through the SPI interface, using the on-board microcontroller, set JU9 to 1-2 and ensure that all  shunts  on  JU10  are  closed.  JU11,  JU12,  JU13,  and JU16 must be open in this mode.

## Operating in Pin Mode

To operate the device in pin mode, set JU9 to 2-3 and ensure that all shunts on JU10 are open.

The main window of the  evaluation  software  (Figure  1) displays  the  SPI  registers  and  the  device  pins  that  are connected  to  the  on-board  MAXQ2000  microcontroller. The user can send read or write SPI commands to the device, configure the logic levels of the device input pins, and read back the logic levels of the device output pins.

To read an SPI register or an output pin logic level, press the Read button.

To  configure  an  SPI  register  or  an  input  pin  logic  level, first  click  on  the  desired radio button(s), and then press the Write button.

The software also automatically monitors the presence of the wake-up pulse on the WU/THSD pin and displays the result on the GUI.

The user can also change the SPI clock speed by clicking on the desired SPI Clock Speed radio button.

## Advanced User Interface

There  are  two  methods  for  communicating  with  the device. The first is through the window shown in Figure 1. The  second  is  through  the Advanced  User  Interface window shown in Figure 2. The Advanced User Interface window  becomes  available  by  selecting  the Options  | Interface (Advanced User) menu item and allows execution of serial commands manually.

The Advanced User Interface window can also be used as a debug tool because it is capable of manually reading and writing to every register and logic pin of the device.

## Detailed Description of Hardware

The MAX14826 EV kit provides a proven layout for the MAX14826 IO-Link device transceiver.

All  the  power-supply  and  regulator  input  and  output pins  are  connected  to  convenient  connectors  for  easy probing. The device logic input and output pins are also provided with convenient connectors for logic testing.

The transceiver's C/Q, DO, and DI pins are protected by Semtech SDC36 TVS diodes.

See  Table  1  for  a  description  of  all  the  EV  kit  jumper configurations.

Figure 1. MAX14826 EV Kit Software Main Window

<!-- image -->

Figure 2. MAX14826 EV Kit Software Advanced User Interface Window

<!-- image -->

## MAX14826 Evalution Kit

## Table 1. Jumper Descriptions

| JUMPER   | SHUNT POSITON   | DESCRIPTION                                                              |
|----------|-----------------|--------------------------------------------------------------------------|
| JU1      | Closed*         | Enables the C/Q LED indicator                                            |
| JU1      | Open            | Disables the C/Q LED indicator                                           |
| JU2      | Closed*         | Enables the DO LED indicator                                             |
| JU2      | Open            | Disables the DO LED indicator                                            |
| JU3      | 1-2*            | Device is powered by the internal LDO                                    |
| JU3      | 2-3             | Device is powered by external 5V connected on TP8                        |
| JU4      | 1-2*            | Device VL is connected to LDO33                                          |
| JU4      | 2-3             | Device VL is connected to V5                                             |
| JU5      | 1-2*            | TXEN pin is connected to VL                                              |
| JU5      | 2-3             | TXEN pin is connected to GND                                             |
| JU6      | 1-2*            | DODIS pin is connected to VL                                             |
| JU6      | 2-3             | DODIS pin is connected to GND                                            |
| JU7      | 1-2*            | TX pin is connected to VL                                                |
| JU7      | 2-3             | TX pin is connected to GND                                               |
| JU8      | 1-2*            | LO pin is connected to VL                                                |
| JU8      | 2-3             | LO pin is connected to GND                                               |
| JU9      | 1-2             | SPI/ PAR is connected to VL. Device is in SPI mode.                      |
| JU9      | 2-3             | SPI/ PAR is connected to GND. Device is in Pin Control mode.             |
| JU10     | 1-2*            | Device logic IO pins are connected to the on-board microcontroller.      |
| JU10     | 2-3             | Device logic IO pins are disconnected from the on-board microcontroller. |
| JU11     | 1-2             | SCLK/CQPP is connected to VL                                             |
| JU11     | 2-3             | SCLK/CQPP is connected to GND                                            |
| JU13     | 1-2             | CS /PNP is connected to VL                                               |
| JU13     | 2-3             | CS /PNP is connected to GND                                              |
| JU14     | Open            | Enables the WU /THSD LED indicator                                       |
| JU14     | Closed*         | Disables the WU /THSD LED indicator                                      |
| JU15     | Open            | Enables the IRQ / CQOC LED indicator                                     |
| JU15     | Closed*         | Disables the IRQ / CQOC LED indicator                                    |
| JU16     | Open            | Enables the SDO/ DOOC LED indicator                                      |
|          | Closed*         | Disables the SDO/ DOOC LED indicator                                     |
| JU17     | Open            | Enables the DI LED indicator                                             |
| JU17     | Closed*         | Disables the DI LED indicator                                            |

Evaluates: MAX14826

## Component Suppliers

| SUPPLIER              | WEBSITE                 |
|-----------------------|-------------------------|
| Hong Kong X'tals Ltd. | www.hongkongcrystal.com |
| Murata Americas       | www.murata.com          |
| Semtech Corporation   | www.semtech.com         |

Note: Indicate that you are using the MAX14826 or MAX14821 when contacting these component suppliers.

## Component List, PCB Files, and Schematics

See the following links for component information, PCB files and schematics:

- MAX14826 EV BOM
- MAX14826 EV PCB Files
- MAX14826 EV Schematic

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14826EVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX14826

## MAX14826 Evalution Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses aUe iPSlieG  0a[iP InteJUateG UeseUYes the UiJht to FhanJe the FiUFXitU\ anG sSeFifiFations ZithoXt notiFe at an\ tiPe

│

Evaluates: MAX14826

|   ITEM Bill of | QTY REF DES Materials - DATE:   | Var Status 10/22/2014   | MAXINV                | MFG PART #                                                                                     | MANUFA CTURER VALUE                                                                            | DESCRIPTION                                                                                                    |
|----------------|---------------------------------|-------------------------|-----------------------|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|
|              1 | 3 C1-C3                         | Pref                    | 20-0470P- J0          | FCP0805H 471J-J1                                                                               | Cornell Dubilier 470PF                                                                         | CAPACITOR; SMT (0805); CERAMIC CHIP; 470PF; 50V; TOL=5%; MODEL=PPS; TG=-55 DEGC TO +125 DEGC; TC=+/-           |
|              2 | 2 C4,C6                         | Pref                    | 20-0001U- 04          | GRM21BR 71H105Ka 12                                                                            | Murata 1UF                                                                                     | CAPACITOR; SMT; 0805; CERAMIC; 1uF; 50V; 10%; X7R; -55degC to + 125degC; 0 +/-15% degC MAX.                    |
|              3 | 12 C7,C8,C10,C 15,C18- C24,C26  | Pref                    | 20-000U1- 18          | GRM188R 61C104KA 01                                                                            | Murata 0.1UF                                                                                   | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X5R;            |
|              4 | 1 C9                            | Pref                    | 20-0001U- 18          | GRM188R 61C105K                                                                                | Murata 1UF                                                                                     | CAPACITOR; SMT; 0603; CERAMIC; 1uF; 16V; 10%; X5R; -55degC to + 85degC; 0 +/-15% degC MAX.                     |
|              5 | 1 C11                           | Pref                    | 20-0U033- 11          | GRM188R 71C333KA 01                                                                            | Murata 0.033UF                                                                                 | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.033UF; 16V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R |
|              6 | 2 C12,C13                       | Pref                    | 20-0010P- 25          | GRM1888 5C1H100J A01                                                                           | Murata 10PF                                                                                    | CAPACITOR; SMT; 0603; CERAMIC; 10pF; 50V; 5%; C0G; -55degC to + 125degC,                                       |
|              7 | 2 C14,C25                       | Pref                    | 20-0010U- X3          | GRM188R 60J106ME 47                                                                            | Murata 10UF                                                                                    | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 6.3V; TOL=20%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X5R             |
|              8 | 2 C16,C17                       | Pref                    | 20-0022P- 77          | GRM39C0 G220J50V                                                                               | Murata 22PF                                                                                    | CAPACITOR; SMT (0603); CERAMIC CHIP; 22PF; 50V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G               |
|              9 | 8 D1,D2,D4- D6,D11-D13          | Pref                    | 30- LGL29KG2 J124Z-00 | LGL29K- G2J1-24-Z OSRAM LGL29K- G2J1-24-Z DIODE; LED; SMARTLED; GREEN; SMT; PIV=1.7V; IF=0.02A | LGL29K- G2J1-24-Z OSRAM LGL29K- G2J1-24-Z DIODE; LED; SMARTLED; GREEN; SMT; PIV=1.7V; IF=0.02A | LGL29K- G2J1-24-Z OSRAM LGL29K- G2J1-24-Z DIODE; LED; SMARTLED; GREEN; SMT; PIV=1.7V; IF=0.02A                 |

|   10 |                         | 3 D7-D9   | Pref                | 30- SDC36CTC T-00   | SDC36C.T CT   | SEMTECH SDC36C.T CT                                      | DIODE; TVS; TVS DIODE ARRAY FOR PROXIMITY SWITCH INPUT PROTECTION; SMT (SOT-23); PIV=35V; IF=4A   |
|------|-------------------------|-----------|---------------------|---------------------|---------------|----------------------------------------------------------|---------------------------------------------------------------------------------------------------|
|   11 | 1 FB1                   | Pref      | 50-00030- SM2       | BLM18PG 300SN1D     | MURATA        | 30 INDUCTOR; SMT (0603); FERRITE-BEAD; 30; TOL=+/-;      | 1.0A                                                                                              |
|   12 | 1 J3                    | Pref      | 01- AUY1007R 4P-26  | AU-Y1007- R         | ASSMANN       | AU-Y1007- R                                              | CONNECTOR; FEMALE; THROUGH HOLE; USB B-TYPE CONNECTOR; RIGHT ANGLE; 4PINS; -55 DEGC TO +85 DEGC   |
|   13 | 6 JU1,JU2,JU1 4-JU17    | Pref      | 01- PEC02SAA N2P-21 | PEC02SAA N          | SULLINS       | PEC02SAA N                                               | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65 DEGC TO +125 DEGC                  |
|   14 | 10 JU3- JU9,JU11- JU13  | Pref      | 01- PEC03SAA N3P-21 | PEC03SAA N          | SULLINS       | PEC03SAA N                                               | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                  |
|   15 | 1 JU10                  | Pref      | 01- 10897282 28P-21 | 10-89- 7282         | MOLEX         | 10-89- 7282                                              | CONNECTOR, TH, MALE, SALES ASSY-HIGH TEMP DUALROW WAFER WITH BREAK-OFF OPTION, 28PINS, STR        |
|   16 | 3 R1,R2,R8              | Pref      | 80-0020K- 53        | N/A                 | ?             | 20K                                                      | RESISTOR; 0603; 20K OHM; 5%; 200PPM; 0.10W; METAL FILM                                            |
|   17 | 1 R3                    | Pref      | 80-0010R- 24        | N/A                 | ?             | 10 RESISTOR; 0603; 10 OHM; 1%; 100PPM; 0.10W; THICK FILM | 10 RESISTOR; 0603; 10 OHM; 1%; 100PPM; 0.10W; THICK FILM                                          |
|   18 | 6 R4,R6,R7,R1 0,R11,R17 | Pref      | 80-001K5- 53        | N/A                 | ?             | 1.5K                                                     | RESISTOR; 0603; 1.5K OHM; 5%; 200PPM; 0.10W; METAL FILM                                           |
|   19 | 2 R5,R14                | Pref      | 80-0010K- A4        | N/A                 | ?             | 10K                                                      | RESISTOR, 0603, 10K OHM, 5%, 200PPM, 1/16W, THICK FILM                                            |
|   20 | 1 R12                   | Pref      | 80-002K2- 53        | N/A                 | ?             | 2.2K                                                     | RESISTOR; 0603; 2.2K OHM; 5%; 200PPM; 0.10W; THICK FILM                                           |
|   21 | 1 R13                   | Pref      | 80-0470R- 53        | N/A                 | ?             | RESISTOR; 0603; 470 OHM; 5%; 200PPM; 0.10W; METAL FILM   | 470                                                                                               |
|   22 | 2 R15,R16               | Pref      | 80-0000R- 27A       | N/A                 | ?             |                                                          | 0 RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM                                            |
|   23 | 2 R18,R19               | Pref      | 80-0027R- 53        | N/A                 | ?             |                                                          | 27 RESISTOR; 0603; 27 OHM; 5%; 200PPM; 0.10W; METAL FILM                                          |

|   24 | 1 R23                        | Pref              | 80-0001R- J1A       | N/A             | ?                            | 1               | RESISTOR; 2010; 1 OHM; 1%; 100PPM; 1W; THICK FILM                                                                                                                |
|------|------------------------------|-------------------|---------------------|-----------------|------------------------------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|   25 | 23 SU1- SU14,SU19- SU27 Pref | JMPFSTC0 2SYAN-00 | 02-                 | STC02SYA N      | SULLINS ELECTRON ICS CORP. N | STC02SYA        | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL                                          |
|   26 | 7 TP1,TP6- TP10,TP22         | Pref              | 02- TPMINI50 10-00  | 5010            | Keystone                     | 5010            | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE                                                                                                                |
|   27 | 3 TP2,TP11,TP 21             | Pref              | 02- TPMINI50 11-00  | 5011            | Keystone                     | 5011            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN  |
|   28 | 12 TP3- TP5,TP12- TP20       | Pref              | 02- TPMINI50 14-00  | 5014            | Keystone                     | 5014            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN |
|   29 | 1 U1                         | Pref              | MAX1482 6ETG+       | MAX1482 6ETG+   | MAXIM                        | MAX1482 6ETG+   | IC; TXRX; IO-LINK DEVICE TRANSCEIVER; TQFN24-EP 4X4                                                                                                              |
|   30 | 1 U2                         | Pref              | MAXQ200 0-RAX+      | MAXQ200 0-RAX+  | MAXIM                        | MAXQ200 0-RAX   | IC, CTRL, LOW-POWER LCD MICROCONTROLLER, QFN68                                                                                                                   |
|   31 | 1 U3                         | Pref              | MAX8511 EXK25+      | MAX8511 EXK25+  | MAXIM                        | MAX8511 EXK25-T | IC; VREG; ULTRA-LOW-NOISE HIGH PSRR LOW-DROPOUT LINEAR REGULATOR; SC70-5 ; -40 DEGC TO +85 DEGC                                                                  |
|   32 | 1 U4                         | Pref              | 10- FT232BL-C       | FT232BL         | FTDI                         | FT232BL         | IC, INFC, UART INTERFACE IC USB TO SERIAL, LQFP32 7X7                                                                                                            |
|   33 | 1 U5                         | Pref              | 10- AT93C46E NSHB-S | AT93C46E N-SH-B | ATMEL                        | AT93C46E N-SH-B | IC; EPROM; 3-WIRE SERIAL ELECTRICALLY ERASABLE PROGRAMABLE READ-ONLY MEMORY; NSOIC8 150MIL                                                                       |
|   34 | 1 U6                         | Pref              | MAX8511 EXK33+      | MAX8511 EXK33+  | MAXIM                        | MAX8511 EXK33   | IC; VREG; ULTRA-LOW-NOISE, HIGH PSRR, LOW-DROPOUT, LINEAR REGULATOR; SC70-5 ; -40 DEGC TO +85 DEGC                                                               |

| 35    | 1 Y1   | Pref   | 60-0016M- 12B   | SSM16000 N1HK188F 0-0   | HONG KONG CRYSTALS   | 16MHZ   | CRYSTAL; SMT ; HC49US; 12PF; 16MHZ; +/-30PPM; +/-50PPM; -10 DEGC TO +60 DEGC   |
|-------|--------|--------|-----------------|-------------------------|----------------------|---------|--------------------------------------------------------------------------------|
| 36    | 1 Y2   | Pref   | 60-0006M- 12A   | SSL60000 N1HK188F 0-0   | HONG KONG CRYSTALS   | 6MHZ    | CRYSTAL; SMT ; 12PF; 6MHZ; +/-30PPM; +/-50PPM; -10 DEGC TO +60 DEGC            |
| 37    | 1      | Pref   | EPCB1482 6      | EPCB1482 6              | MAXIM                | PCB     | PCB: EPCB14826                                                                 |
| TOTAL | 128    |        |                 |                         |                      |         |                                                                                |

<!-- image -->

VL

TXEN

IN

IN

JU10

1

2

3

JU5

OPEN

CLOSED

VL

DODIS

U2\_P0.4/INT0

U2\_P0.5/INT1

U2\_P0.6/INT2

P1.0

U2\_P0.0

U2\_P0.1

U2\_P0.7/INT3

U2\_P0.2

U2\_P0.3

U2\_CS/PNP

U2\_SLCK/CQPP

U2\_MOSI

U2\_MISO

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

D4

R4

1.5K

JU14

VL

IN

2

1

IN

WU/THSD

1

2

3

JU6

R5

10K

VL

IN

IN

UV

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

21

23

25

27

D6

R6

1.5K

JU15

JU10

1

2

3

5

7

9

11

13

15

17

19

21

23

25

27

4

6

8

10

12

14

16

18

20

22

24

26

28

VL

IN

2

1

IN

IRQ/CQOC

VL

TX

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

22

24

26

28

JU16

R7

1.5K

D5

IN

IN

VL

IN

1

2

IN

SDO/DOOC

1

2

3

JU7

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

WU/THSD

UV

IRQ/CQOC

RX

TXEN

DODIS

TX

LI

LO

CS/PNP

SLCK/CQPP

SDI/DOPP

SDO/DOOC

VL

LO

IN

IN

JU3

JU4

2-3

VL=5V

NOTE:*=DEFAULT POSITION

1

1

2

3

JU8

1-2*

2-3

1-2*

TP12

TP13

TP14

TP15

TP16

TP17

TP18

TP19

TP20

TP21

MAX14826 LOGIC PINS DISCONNECTED FROM MAXQ2000

MAX14826 LOGIC PINS CONNECTED TO MAXQ2000

USE

INTERNAL 5V

LDO

USE EXTERNAL 5V APPLIED ON TP8

VL=3.3V

WU/THSD

UV

IRQ/CQOC

RX

TXEN

DODIS

TX

LI

LO

IN

IN

IN

IN

IN

IN

IN

IN

IN

TP11

GND

15

18

4

14

13

11

12

17

16

CS/PNP

6

IN

CS/PNP

JU4

2

TP10

LDO33

C9

1UF

WU/THSD

UV

IRQ/CQOC

RX

TXEN

DODIS

TX

LI

LO

3

LDO33

SCLK/CQPP

5

IN

SLCK/CQPP

3

TP9

VL

IN

VL

C8

0.1UF

9

VL

TP8

V5

C7

0.1UF

1

LDOIN

2

V5

U1

MAX14826ETG+

SDI/DOPP

SDO/DOOC

8

IN

SDI/DOPP

7

IN

SDO/DOOC

3

SPI/PAR

10

IN

SPI/PAR

JU3

2

24

VP

1

TP7

LDOIN

R3

10

EP

C6

1UF

VCC

GND

C/Q

DO

DI

TP6

VP

23

20

21

22

19

D7

A1

1

C4

1UF

C1

470PF

C2

470PF

C3

470PF

VL

SPI/PAR

VL

SLCK/CQPP

VL

SDI/DOPP

VL

CS/PNP

3

K

A2

2

IN

C/Q

R23

1

IN

R1

20K

IN

R2

20K

R8

20K

IN

IN

IN

IN

IN

IN

IN

IN

D8

C/Q

1

DO

1

1

1

2

3

1

2

3

1

2

3

1

2

3

A1

A2

1

2

IN

DO

3

K

TP22

VCC

JU1

JU2

JU17

JU9

JU11

JU12

JU13

2

2

2

D1

D2

D13

1

2

TP1

VCC

TP2

GND

TP3

C/Q

TP4

DO

TP5

DI

A1

A2

K

D9

3

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->