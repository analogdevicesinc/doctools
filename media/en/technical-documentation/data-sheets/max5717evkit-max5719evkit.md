<!-- lastmod 2022-08-05 -->
## MAX5717 Evaluation Kit

## General Description

The MAX5717/MAX5719 evaluation kit (EV kit) demonstrates the MAX5717/MAX5719, 16/20-bit DAC. The EV kit includes a graphical user interface (GUI) that provides communication over SPI with an on-board master IC.

The  MAX5717  EV  kit  comes  with  the  MAX5717GSD+ installed  and  the  MAX5719 comes with the MAX5719GSD+ installed.

## Features

- On-Board SPI Controller
- On-Board Output Buffer (MAX9632)
- On-Board +4.096V Reference Voltage (MAX6126)
- Windows XP ® , Windows ®  7/8/8.1/10-Compatible Software

## Board Photo

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

Windows XP is a registered trademark and registered service mark of Microsoft Corporation.

Evaluates: MAX5717/MAX5719

## Quick Start

## Required Equipment

- MAX5717/MAX5719 EV kit (includes micro-USB cable)
- Windows PC
- Digital Oscilloscope

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Visit HERE to download the latest version of the EV kit software, 5717EVKit.ZIP . Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Verify that all jumpers on the EV kit are in their default positions, as shown in Table 1.
- 3) Connect a probe from the oscilloscope at the OUT test point.
- 4) Connect the USB cable from the PC to the MAX5717/MAX5719 EV kit board.
- 5) Open the EV kit GUI, MAX5717EVKit.exe and select Device-&gt;MAX5717PMB option (or MAX5719PMB).
- 6) Click the Scan Adapters button. Then select the option PMODxxxxxx (where xxxxxx is numeric) and click the Connect button. See Figure 1 and Figure 2.
- 7) Click the Sample Once button and verify the oscilloscope waveform form matches that of the GUI.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX5717 Evaluation Kit

## Table 1. Jumper Descriptions

| JuMPER   | SHuNT POSiTiON   | DESCRiPTiON                                                                                                                                                                            |
|----------|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J2       | Installed        | Used for a buffered reference voltage. Connects the output voltage from the MAX6126 to the input of the MAX9632.                                                                       |
| J2       | Not installed*   | Disconnects the output voltage from the MAX6126 to the input of the MAX9632.                                                                                                           |
| J3       | Installed*       | Powers the MAX6126 using USB supply.                                                                                                                                                   |
| J3       | Not installed    | Disconnects the USB supply from the MAX6126. User must apply 5V at the IN_U12 test point to use the MAX6126.                                                                           |
| J4       | 1-2*             | Connects the output voltage from the MAX6126.                                                                                                                                          |
| J4       | 2-3              | User-Supplied Voltage Reference. Connects to the MAX9632 output. User must apply voltage reference at the EXT_REF test point and 5V at the OP2+ test point to power the MAX9632 (U13). |
| J5       | 1-2*             | Powers the MAX9632's V CC pin using USB supply.                                                                                                                                        |
| J5       | 2-3              | User-supplied power to the MAX9632 (U4). Apply 5V to 15V at the OP+ test point. Recommended for use in bipolar mode.                                                                   |
| J6       | 1-2*             | DIN from on-board master.                                                                                                                                                              |
| J6       | 2-3              | User-supplied DIN. Apply respective signal at DIN test point.                                                                                                                          |
| J7       | 1-2*             | SCLK from on-board master.                                                                                                                                                             |
| J7       | 2-3              | User-supplied SCLK. Apply respective signal at SCLK test point.                                                                                                                        |
| J8       | 1-2*             | Connects the negative input to the output of the MAX9632.                                                                                                                              |
| J8       | 2-3              | Connects the MAX5717/MAX5719's INV pin to the negative input of the MAX9632.                                                                                                           |
| J9       | 1-2*             | CS from on-board master.                                                                                                                                                               |
| J9       | 2-3              | User-Supplied CS. Apply respective signal at CS test point.                                                                                                                            |
| J10      | 1-2*             | LDAC from On-Board Master.                                                                                                                                                             |
| J10      | 2-3              | User-Supplied LDAC. Apply respective signal at LDAC test point.                                                                                                                        |
| J11      | 1-2              | Do Not Use                                                                                                                                                                             |
| J11      | 2-3*             | User-Supplied Power to the MAX9632 (U4). Apply -5V to -15V at the OP- test point. Recommended for use in bipolar mode.                                                                 |
| J12      | Installed*       | Connects the MAX5717/MAX5719's RFB pin to the MAX9632's output.                                                                                                                        |
| J12      | Not installed    | Disconnects the MAX5717/MAX5719's RFB pin to the MAX9632's output.                                                                                                                     |
| J13      | Installed*       | Powers the MAX5717/MAX5719 using the USB power.                                                                                                                                        |
| J13      | Not installed    | User-supplied power. Apply 5V at the V DD test point.                                                                                                                                  |
| J14      | Installed*       | Connects the MAX5717/MAX5719's OUT pin to the MAX9632's IN+ pin.                                                                                                                       |
| J14      | Not installed    | Disconnects the MAX5717/MAX5719's OUT pin to the MAX9632's IN+ pin.                                                                                                                    |

Evaluates: MAX5717/MAX5719

│

## General Description of Software

The  main  window  of  the  MAX5717/MAX5719  EV  kit software contains controls to evaluate the MAX5717 and MAX5719  ICs.  Included  is  a  waveform  generator  that allows the user to quickly evaluate the device.

## uSB2PMB Adapter

The  controls  within  the uSB2PMB groupbox  allow  the user to select the appropriate USB2PMB devices. When Scan  Adapters button  is  pressed,  it  will  update  the dropdown  list  with  all  USB2PMB  devices.  With  the  EV kit connected to the PC, PMODxxxxxx (where xxxxxx is numeric) will appear within the dropdown list. Make the appropriate selection respective of the IC and press on the Connect button.

## Sample

The Sample groupbox contains the sample rate and SPI SCLK options applicable to EV kit. Sample rate ranges from 5000sps to 200000sps. The SPI SCLK is selectable from  80kHz  to  15MHz.  Once  configured,  the  user  can either  press  the  Sample  Once  or  Sample  Continuous button.

## Transfer Function

The EV kit can work in either unipolar or bipolar mode. Please refer to Unipolar and Bipolar section of the data sheet.

## Plot Configuration

The  Scope  display  can  plot  the  waveform  generator's data  in  units  of  LSBs  or  voltage  in  a  time  domain.  In addition,  provides  an  FFT  plot  of  the  raw  data  for  the MAX5717 or MAX5719.

## Signal Setup

The Signal  Setup controls  are  similar  to  a  function generator  and  can  be  used  to  quickly  evaluate  the  EV kit. It provides waveforms in sine, left and right sawtooth, triangle, square, and white noise. Amplitude, Offset, and Frequency can be adjusted for each waveform.

## General Description of Hardware

The MAX5717/MAX5719  EV  kit demonstrates the MAX5717/MAX5719, 16/20-bit DAC. The EV kit includes an on-board master IC for all SPI and I/O communication.

## user-Supplied SPi

To evaluate the EV kit with a user-supplied SPI bus, place shunts on the 2-3 position of jumper J6, J7, J9, and J10. Apply  the  user-supplied  SPI  signals  to  the  SCLK,  CS, DIN, and LDAC test points. Make sure the return ground is the same as the MAX5717/MAX5719's ground.

## user-Supplied VDD

The  MAX5717/MAX5719  is  powered  through  USB  by default. For user-supplied V DD , remove the shunt of the jumper J13 and apply +5V at the V DD  test point.

## User-Supplied Power for Voltage Reference (u12)

The voltage reference is powered through USB by default. For user-supplied power, remove the shunt of the jumper J3 and apply +5V at the IN\_U12 test point.

## User-Supplied Voltage Reference

The MAX9632 (U13) is an optional buffer  for  the  reference of the MAX5717/MAX5719. Apply only +5V to the OP2+ test point when a voltage reference is applied at the EXT\_REF test point.

## user-Supplied Power for Buffer (u4)

The MAX9632 is an optional buffer for the output of the MAX5717/MAX5719. Place shunts on the 2-3 position of jumpers J5 and J11. Apply only +5V to +15V at the OP+ test point and -5V to -15V at the OP- test point.

## unipolar and Bipolar Output

When in unipolar output and the output buffer is in use, a shunt should be placed in the 2-3 position of jumper J5, 1-2 position of the jumper J8, 2-3 position of jumper J11, and open position of jumper 12. When in bipolar output, a shunt should be placed in the 2-3 position of jumper J5, 2-3 position of the jumper J8, 2-3 position of jumper J11, and closed position of jumper J12.

Figure 1. MAX5717 EV Kit Main Window

<!-- image -->

Figure 2. MAX5719 EV Kit Main Window

<!-- image -->

## Component information, PCB Layout, and Schematics

See the following links for component information, PCB layout diagrams, and schematic.

- MAX5717/MAX5719 EV BOM
- MAX5717/MAX5719 EV PCB Layout
- MAX5717/MAX5719 EV Schematic

Evaluates: MAX5717/MAX5719

## Ordering Information

| Part          | TYPE   |
|---------------|--------|
| MAX5717EVKIT# | EV KIT |
| MAX5719EVKIT# | EV KIT |

# Denotes RoHS compliant.

│

## Revision History

|   REViSiON NuMBER | REViSiON DATE   | DESCRiPTiON     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/16            | Initial Release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are LmplLed. 0a[Lm InteJrated reserYes the rLJht to chanJe the cLrcuLtry and specLficatLons ZLthout notLce at any tLme.

│

Evaluates: MAX5717/MAX5719

ITEM

QTY REF DES

MFG PART #

MANUFACTURER

VALUE

DESCRIPTION

1

3 AGND4 - AGND6

5011 ?

5011 TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN

2 7 CS, DIN, INV, OUT, LDAC, SCLK, BUF\_OUT

5012 ?

5012 TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN

3

10 C1, C3, C5 - C7, C21, C22, C29, C30, C56

C0603C104K3 RAC; GRM188R71E 104KA01; C1608X7R1E1 04K

KEMET/MURATA/T DK

0.1UF

CAPACITOR; SMT; 0603; CERAMIC; 0.1uF; 25V; 10%; X7R; - 55degC to + 125degC; +/ - 15% from - 55degC to +125degC; NOT RECOMMENDED FOR NEW DESIGN USE - 20 - 000u1 - 01

4

3 C2,

C4,

C20

GRM21BR61E 475KA

MURATA

4.7UF

CAPACITOR; SMT (0805); CERAMIC CHIP; 4.7UF; 25V; TOL=10%; MODEL=X5R; TG= - 55 DEGC TO +125 DEGC; TC=+/

5

7 C10, C18, C19, C44 - C47

C0603C104K4 RAC; GCM188R71C 104KA37; C1608X7R1C1 04K; GRM188R71C 104K; C0603X7R160 - 104KNE

KEMET/MURATA/T DK/VENKEL LTD.

0.1UF

CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; TG= - 55 DEGC TO +125 DEGC; TC=X7R; NOT RECOMMENDED FOR NEW DESIGN USE 20 - 000u1 - 01

6

1 C11

C0603C103K5 RAC; GRM188R71H 103K;C0603X7 R500 - 103KNE

KEMET/MURATA/V ENKEL LTD.

0.01UF

CAPACITOR; SMT; 0603; CERAMIC; 0.01uF; 50V; 10%; X7R; - 55degC to + 125degC; USE 20 - 00u01 - M8 FOR NEW DESIGN

7

1 C12

C0603C102K5 RAC; GRM188R71H 102KA01; C0603X7R500 - 102KNE

KEMET/MURATA/V ENKEL

1000PF

CAPACITOR; SMT; 0603; CERAMIC; 1000pF; 50V; 10%; X7R; - 55degC to + 125degC; +/ - 15% from - 55degC to +125degC, USE 20 - 1000p - E4 FOR NEW DESIGN

TITLE: Bill of Materials

DATE: 03/03/2016

DESIGN: max571x\_evkit\_a

VARIANT:dni

8

2 C13,

C17

C0603C0G500 - 181JNE; GRM1885C1H 181J

VENKEL LTD./MURATA

180PF

CAPACITOR; SMT (0603); CERAMIC CHIP; 180PF; 50V; TOL=5%; MODEL=; TG= - 55 DEGC TO +125 DEGC; TC=C0G

9

7 C23, C24, C27, C28, C41 - C43

C0603X5R160

-

105KNP;

EMK107BJ105

KA;

C1608X5R1C1 05K;

GRM188R61C

105K

VENKEL LTD./TAIYO YUDEN/TDK/MURA TA

1UF

CAPACITOR; SMT; 0603; CERAMIC; 1uF; 16V; 10%; X5R; - 55degC to + 85degC; 0 +/ - 15% degC MAX.USE 20 - 0001u - 63 FOR NEW DESIGN

10

1 C55

C0603C105K4 RAC; GRM188R71C 105KA12; C1608X7R1C1 05K; EMK107B7105 KA

KEMET/MURATA/T DK/TAIYO YUDEN

1UF

CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 16V; TOL=10%; MODEL=; TG= - 55 DEGC TO +125 DEGC; TC=X7R

11

1 C57

TMK212BBJ10 6KG - T; CL21A106KAF N3N

TAIYO YUDEN

10UF

CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 25V; TOL=10%; MODEL=; TG= - 55 DEGC TO +85 DEGC; TC=X5R

12

2 CB2,

CB3

C0603C0G500

-

180JNE;

C1608C0G1H1

80J;

GRM1885C1H 180J

VENKEL LTD./TDK/MURATA

18PF

CAPACITOR; SMT (0603); CERAMIC CHIP; 18PF; 50V; TOL=5%; MODEL=; TG= - 55 DEGC TO +125 DEGC; TC=C0G

13

1 D1

MBR0520L

FAIRCHILD SEMICONDUCTOR

MBR0520

L

DIODE, SCHOTTKY, SOD - 123, PIV=20V, Vf=0.385V@If=0.5A, If(ave)=0.5A

- 14 2 DGND, GNDS

5011 KEYSTONE

N/A

TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST

15

1 DGND2

5011 ?

5011 TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN

16

1 DSB1

LG L29K - G2J1 - 24

OSRAM

LG L29K - G2J1 - 24

DIODE; LED; SMT (0603); Vf=1.7V; If(test)=0.002A; - 40 DEGC TO +100 DEGC

- 17 3 OP2+, IN\_U12, EXT\_REF

5010 KEYSTONE

N/A

TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE; NOT FOR COLD TEST

18

1 J1

10118192 - 0001LF

FCI CONNECT

1011819 2 - 0001LF

CONNECTOR; FEMALE; SMT; MICRO USB B TYPE RECEPTACLE; RIGHT ANGLE; 5PINS

- 19 5 J2, J3, J12 - J14

PEC02SAAN PEC03SAAN

SULLINS

PEC02SA

CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS

- 20 8 J4 - J11

SULLINS

PEC03SA

CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS

|   21 | 1 L3                                    | MPZ1608S601 A                                         | TDK                                  | 600            | INDUCTOR; SMT (0603); FERRITE - BEAD; 600; TOL=+/ - 25%; 1A; - 55 DEGC TO +125 DEGC                                     |
|------|-----------------------------------------|-------------------------------------------------------|--------------------------------------|----------------|-------------------------------------------------------------------------------------------------------------------------|
|   22 | 5 OP+, OP - , VDD, REFF, REFS           | 5010 ?                                                | 5010 ?                               | 5010           | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE                                                                       |
|   23 | 6 R1, R2, RB7, RB9, RB14, RB16          | ERJ - 3EKF28R0V                                       | PANASONIC                            | 28             | RESISTOR; 0603; 28 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                   |
|   24 | 2 R4, R9                                | RC1608J000CS ; CR0603 - J/ - 000ELF;RC060 3JR - 070RL | SAMSUNG ELECTRONICS/BOU RNS/YAGEO PH | 0              | RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM                                                                    |
|   25 | 1 R7                                    | CRCW060310 K0JN; ERJ - 3GEYJ103V                      | VISHAY DALE; PANASONIC               | 10K            | RESISTOR; 0603; 10K OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                  |
|   26 | 1 RB3                                   | CRCW060312 K0FK                                       | VISHAY DALE                          | 12K            | RESISTOR, 0603, 12K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                  |
|   27 | 1 RB4                                   | CRCW060315 K0FK                                       | VISHAY DALE                          | 15K            | RESISTOR, 0603, 15K OHM,1%, 100PPM, 0.10W, THICK FILM                                                                   |
|   28 | 7 RB5, RB6, RB8, RB11, RB13, RB15, RB24 | CRCW060310 K0FK; 9C06031A100 2FK; ERJ - 3EKF1002      | VISHAY DALE/YAGEO PHICOMP/PANASO NIC | 10K            | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                      |
|   29 | 1 RB10                                  | CRCW06032K 20FK                                       | VISHAY DALE                          | 2.2K           | RESISTOR, 0603, 2.2K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                 |
|   30 | 1 RB17                                  | CRCW06034K 70FK                                       | VISHAY DALE                          | 4.7K           | RESISTOR; 0603; 4.7K; 1%; 100PPM; 0.10W; THICK FILM                                                                     |
|   31 | 1 U1                                    | MAX5719                                               | MAXIM                                | MAX5719        | EVKIT PART - IC; MAX5719; NSOIC14 150MIL; PKG. DWG. NO.: 21 - 0041                                                      |
|   32 | 2 U4, U13                               | MAX9632ASA +                                          | MAXIM                                | MAX9632 ASA+   | IC; OPAMP; PRECISION, LOW - NOISE, WIDE - BAND AMPLIFIER; NSOIC8 150MIL; - 40 DEGC TO +125 DEGC                         |
|   33 | 2 U6, U8                                | MAX1840EUB                                            | MAXIM                                | MAX1840 EUB    | IC; TRANS; LOW - VOLTAGE SIM/SMART CARD LEVEL TRANSLATOR; UMAX10                                                        |
|   34 | 1 U12                                   | MAX6126AAS A41+                                       | MAXIM                                | MAX6126 AASA41 | IC; VREF; ULTRA - HIGH PRECISION; ULTRA - LOW NOISE; SERIES VOLTAGE REFERENCE; NSOIC8 150MIL; - 40 DEGC TO +125 DEGC    |
|   35 | 1 U14                                   | MAX15006AA TT+                                        | MAXIM                                | MAX1500 6AATT+ | IC; VREG; ULTRA - LOW QUIESCENT - CURRENT LINEAR REGULATOR; TDFN6 - EP 3X3                                              |
|   36 | 1 UB1                                   | 93LC66BT - I/OT                                       | MICROCHIP                            | 93LC66BT I/OT  | - IC; EPROM; 4K MICROWIRE SERIAL EEPROM; SOT23 - 6                                                                      |
|   37 | 1 UB2                                   | FT2232HL                                              | FUTURE TECHNOLOGY DEVICES INTL LTD.  | FT2232HL       | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; LQFP64                                                         |
|   38 | 13 XJU1 - XJU13                         | STC02SYAN                                             | SULLINS ELECTRONICS CORP.            | STC02SYA N     | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL |

| 39                                                                                        | 1                                                                                         | YB1                                                                                       | ABRACON                                                                                   | 12MHZ                                                                                     | CRYSTAL; SMT ; 18PF; 12MHZ; +/ - 20PPM; +/ - 30PPM                                        |
|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| 40                                                                                        | 1                                                                                         | D2Y - T MAX                                                                               | MAXIM                                                                                     | PCB                                                                                       | PCB: MAX                                                                                  |
| TOTAL                                                                                     | 117                                                                                       |                                                                                           |                                                                                           |                                                                                           |                                                                                           |
| DO NOT PURCHASE(DNP)                                                                      | DO NOT PURCHASE(DNP)                                                                      | DO NOT PURCHASE(DNP)                                                                      | DO NOT PURCHASE(DNP)                                                                      | DO NOT PURCHASE(DNP)                                                                      | DO NOT PURCHASE(DNP)                                                                      |
| ITEM                                                                                      | QTY REF DES                                                                               | MFG PART #                                                                                | MANUFACTURER                                                                              | VALUE                                                                                     | DESCRIPTION                                                                               |
| 1                                                                                         | 3 C14 - C16                                                                               | N/A                                                                                       | N/A                                                                                       | OPEN                                                                                      | PACKAGE OUTLINE 0603 NON - POLAR CAPACITOR - EVKIT                                        |
| 2                                                                                         | 2 R3, R5                                                                                  | N/A                                                                                       | N/A                                                                                       | OPEN                                                                                      | PACKAGE OUTLINE 0603 RESISTOR - EVKIT                                                     |
| 3                                                                                         | 1 R6                                                                                      | N/A                                                                                       | N/A                                                                                       | SHORT                                                                                     | PACKAGE OUTLINE 0805 RESISTOR - EVKIT                                                     |
| TOTAL                                                                                     | 6                                                                                         |                                                                                           |                                                                                           |                                                                                           |                                                                                           |
| PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB) |
| ITEM                                                                                      | QTY REF DES                                                                               | MFG PART #                                                                                | MANUFACTURER                                                                              | VALUE                                                                                     | DESCRIPTION                                                                               |
| 1                                                                                         | 1 PACKOUT                                                                                 | 88 - 00711 - SML                                                                          | N/A                                                                                       | ?                                                                                         | BOX;SMALL BROWN 9 3/16X7X1 1/4 - PACKOUT                                                  |
| 2                                                                                         | 1 PACKOUT                                                                                 | 87 - 02162 - 00                                                                           | N/A                                                                                       | ?                                                                                         | ESD BAG;BAG;STATIC SHIELD ZIP 4inX6in;W/ESD LOGO - PACKOUT                                |
| 3                                                                                         | 1 PACKOUT                                                                                 | 85 - MAXKIT - PNK                                                                         | N/A                                                                                       | ?                                                                                         | PINK FOAM;FOAM;ANTI - STATIC PE 12inX12inX5MM - PACKOUT                                   |
| 4                                                                                         | 1 PACKOUT                                                                                 | EVINSERT                                                                                  | N/A                                                                                       | ?                                                                                         | WEB INSTRUCTIONS FOR MAXIM DATA SHEET                                                     |
| 5                                                                                         | 1 PACKOUT                                                                                 | 85 - 84003 - 006                                                                          | N/A                                                                                       | ?                                                                                         | LABEL(EV KIT BOX) - PACKOUT                                                               |
| 6                                                                                         | 1 X1                                                                                      | AK67421 - 1 - R                                                                           | ASSMANN                                                                                   | OR; MALE; USB; USB2.0 MICRO CONNECT ION CABLE; USB B MICRO MALE TO USB A                  |                                                                                           |

TOTAL

6

<!-- image -->

<!-- image -->

## TOP SILKSCREEN

<!-- image -->

<!-- image -->

## TOP PASTE

<!-- image -->

<!-- image -->

## TOP MASK

TOP

<!-- image -->

<!-- image -->

LAYER 2

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## LAYER 3

BOTTOM

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## BOTTOM MASK

<!-- image -->

<!-- image -->

## BOTTOM PASTE

<!-- image -->

<!-- image -->

## BOTTOM SILKSCREEN

<!-- image -->

<!-- image -->