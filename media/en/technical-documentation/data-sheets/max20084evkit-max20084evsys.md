<!-- lastmod 2022-08-05 -->
<!-- image -->

## Evaluates: MAX20084/ MAX20084B

## General Description

The MAX20084 evaluation kit (EV kit) is a fully assembled and  tested  surface-mount  PCB  used  to  evaluate  the MAX20084/MAX20084B automotive dual-antenna power supply with I 2 C interface. Each channel can be independently configured to operate either as a switch or as an LDO with regulated adjustable output voltage using I 2 C. The EV kit demonstrates the device's features: adjustable current  limit,  adjustable  overcurrent  detection,  adjustable open-load detection, and adjustable warning-current detection.  The  output  current  of  each  channel  can  be monitored  using  I 2 C  or  by  measuring  an  analog  output voltage.  The  EV  kit  exposes  an  I 2 C  interface  that  can operate in conjunction with either the MINIQUSB+ adapter or  a  third-party  I 2 C  master,  such  as  a  general-purpose microcontroller.  The  EV  kit  also  includes  Windowscompatible software that provides a simple graphical user interface (GUI) for exercising the features of the IC. The EV system includes both the EV kit and the MINIQUSB+ adapter board.

## Benefits and Features

- 4.5V to 28V Wide Input Voltage Range (40V Load-Dump Tolerant)
- 2-Channel LDO/Switch
- Adjustable Output Voltage using I 2 C
- Output Current Monitoring
- Analog Output
- I 2 C ADC
- Open-Drain Fault Indicator
- High-Voltage Enable Control Input (EN)
- Proven PCB Layout
- Fully Assembled and Tested

## MAX20084 EV Kit Files

| FILE                    | DECRIPTION            |
|-------------------------|-----------------------|
| MAX20084GUISetupVxx.exe | Windows GUI Installer |

Ordering Information appears at end of data sheet.

Click here to ask an associate for production status of specific part numbers.

## MAX20084 Evaluation Kit/ MAX20084 Evaluation System

## Quick Start

## Required Equipment

- MAX20084 EV kit
- 12V, 1A power supply
- Voltmeter
- MINIQUSB+ interface board with USB cable
- User-supplied Windows-compatible PC with spare USB port

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Perform the following steps to verify board operation:

- 1) Install the EV kit software (GUI) on your PC by running  the  MAX20084GUISetupVxx.exe  program. The EV kit software application is installed complete with the required MINIQUSB+ drivers.
- 2) Verify that shunts are installed across pins 1 and 2 on jumpers J2-J5.
- 3) Connect the MINIQUSB+ interface board's P3 header to the J1 header on the EV kit.
- 4) Connect the positive terminal of the power supply to the  VIN  PCB  pad  and  the  negative  terminal  to  the GND3 PCB pad.
- 5) Set the power supply V IN  at 12V.
- 6) Turn on the power supply.
- 7) Verify that the green LED (DS2) is on.
- 8) Launch the EV kit software application.
- 9) From  the  EV  kit  software  toolbar,  select Device  → Scan for Address .  The  GUI  scans  the  I 2 C  bus  for available slave addresses on the bus and selects the first  one  (in  this  case,  the  MAX20084  I 2 C  address). Press OK once the MAX20084 I 2 C address has been found.

319-100238; Rev 2; 9/21

## MAX20084 Evaluation Kit/ MAX20084 Evaluation System

- 10) Verify  that  the  status  bar  in  the  bottom-right  corner of the GUI displays EV Kit: Connected , as shown in Figure 1 .
- 11) In the GENERAL  SETTINGS group  box,  check MASKOL and then press the EN\_ALL button.

Evaluates: MAX2084/

M

A

X

2

0

8

4

B

- 12) Both channels should be turned on and outputting 5V; FAULT PIN status should be green.
- 13) For more details on how to use the GUI and all available features, click on the GUI Help menu item.

Figure 1. MAX20084 Evaluation Kit Software (GUI)

<!-- image -->

## MAX20084 Evaluation Kit/ MAX20084 Evaluation System

## Detailed Description of Hardware

Example jumper settings in the following tables illustrate features of the MAX20084 EV kit.

## Digital Domain Voltage (J2)

The EV kit exposes open-drain digital signals (FLT, SDA, and SCL) that are pulled up to what is referred to as the digital domain voltage.

Digital  domain  voltage  can  be  selected  between  the MAX20084/MAX20084B  internal-regulator  voltage  (PVL) and the fixed 3.3V provided by the  MINQUSB+. Alternatively, you can force an external voltage as digital reference (see Table 1) .

## Enable (J3)

The MAX20084/MAX20084B IC can be disabled by connecting the EN pin to ground, reducing the current consumption to its minimum value. Furthermore, an external digital  signal  can  be  used  to  enable/disable the IC (see Table 2 ).

## Table 1. Jumper Functions (J2)

| SHUNT POSITION   | DIGITAL DOMAIN                  |
|------------------|---------------------------------|
| 1-2*             | PVL                             |
| 2-3              | 3.3V (with MINIQUSB+ connected) |
| Open             | Externally provided (J2, pin 2) |

*Default Position

## Table 2. Jumper Functions (J3)

| SHUNT POSITION   | MAX20084/MAX20084B                                       |
|------------------|----------------------------------------------------------|
| 1-2*             | Enabled                                                  |
| 2-3              | Disabled                                                 |
| Open             | Externally controlled through digital signal (J3, pin 2) |

*Default Position

Evaluates: MAX2084/

M

A

X

2

0

8

4

B

## I 2 C Slave Address (J4)

The IC's 7-bit I 2 C slave address can be selected between four options through the J4 jumper setting (see Table 3 ). Note: Do not leave J4 open.

## Power LED Enable (J5)

A  green  LED  (DS2)  is  used  to  indicate  that  the  EV  kit is  powered  on.  The  LED  can  be  disconnected  from the  power  supply,  allowing  precise  current-consumption evaluation. See Table 4 for shunt positions.

## Table 3. Jumper Functions (J4)

| SHUNT POSITION   | 7-BIT I 2 C SLAVE ADDRESS   |
|------------------|-----------------------------|
| 1-2*             | 0x3C                        |
| 1-3              | 0x3D                        |
| 1-4              | 0x3B                        |
| 1-5              | 0x3A                        |

*Default Position

## Table 4. Jumper Functions (J5)

| SHUNT POSITION   | DS2 POWER LED   |
|------------------|-----------------|
| 1-2*             | Connected       |
| Open             | Disconnected    |

*Default Position

## Ordering Information

| PART           | TYPE      |
|----------------|-----------|
| MAX20084EVKIT# | EV Kit    |
| MAX20084EVSYS# | EV System |

#Denotes RoHS compliant.

│

## MAX20084 Evaluation Kit/ MAX20084 Evaluation System

## MAX20084 EV Kit Bill of Materials

| ITEM        | REF_DES                                                                  | DNI/DNP   | QTY    | MFGPART #                                                          | MANUFACTURER                   | VALUE                | DESCRIPTION                                                                                                                                        | COMMENTS   |
|-------------|--------------------------------------------------------------------------|-----------|--------|--------------------------------------------------------------------|--------------------------------|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 1           | IN, ENP, SCL, SDA, VIN, /FLT, GND1-GND4, OUT1, OUT2, VAOUT, VOUT1, VOUT2 | -         | 15     | 9020 BUSS                                                          | WEICO WIRE                     | MAXIMPAD             | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                           |            |
| 2           | FB1, FB2, OUT, PVL, ADDR, VREFLN, DIG_VDD, TP_OUT1, TP_OUT2              | -         | 9      | 5005                                                               | KEYSTONE                       | N/A                  | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                               |            |
| 3           | C1, C6, C8, C9, C16                                                      | -         | 5      | CGA3E3X7S2A104K080AB                                               | TDK                            | 0.1UF                | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S                                                        |            |
| 4           | C2                                                                       | -         | 1      | GRM188R71H221KA01                                                  | MURATA                         | 220PF                | CAPACITOR; SMT (0603); CERAMIC CHIP; 220PF; 50V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                                       |            |
| 5           | C3                                                                       | -         | 1      | MAL214699103E3                                                     | VISHAY BCCOMPONENTS            | 100UF                | CAPACITOR; SMT; ALUMINUM-ELECTROLYTIC; 100UF; 50V; TOL=20%                                                                                         |            |
| 6           | C4                                                                       | -         | 1      | C2012X5R1H475K125AB                                                | TDK                            | 4.7UF                | CAPACITOR; SMT (0805); CERAMIC CHIP; 4.7UF; 50V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                  |            |
| 7           | C7                                                                       | -         | 1      | GRM188R71E105KA12D; CGA3E1X7R1E105K; TMK107B7105KA; 06033C105KAT2A | MURATA;TDK; TAIYO YUDEN; AVX   | 1UF                  | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                           |            |
| 8           | C10, C11                                                                 | -         | 2      | GRM21BZ71E106KE15                                                  | MURATA                         | 10UF                 | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 25V;                                                                                                    |            |
| 9           | D1                                                                       | -         | 1      | B160-13-F                                                          | DIODES INCORPORATED            | B160-13-F            | TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R DIODE; SCH; SMA; PIV=60V; IF=1A                                                                          |            |
| 10          | D2                                                                       | -         | 1      | BZX84C 4V7                                                         | FAIRCHILD SEMICONDUCTOR        | 4.7V                 | DIODE; ZNR; SMT (SOT-23); PIV=4.7V; IF=0.25A                                                                                                       |            |
| 11          | D3, D4                                                                   | -         | 2      | MSS1P2L-M3/89A                                                     | VISHAY GENERAL SEMICONDUCTOR   | MSS1P2L-M3/89A       | DIODE; SCH; SMT (MICROSMP); PIV=20V; IF=1A                                                                                                         |            |
| 12          | DS1                                                                      | -         | 1      | LTST-C170EKT                                                       | LITE-ON ELECTRONICS INC        | LTST-C170EKT         | DIODE; LED; STANDARD; RED; SMT (0805); PIV=2.0V; IF=0.02A                                                                                          | RED        |
| 13          | DS2                                                                      | -         | 1      | LTST-C170GKT                                                       | LITE-ON ELECTRONICS INC        | LTST-C170GKT         | DIODE; LED; STANDARD; GREEN; SMT (0805); PIV=2.1V; IF=0.01A                                                                                        | GREEN      |
| 14          | GND                                                                      | -         | 1      | 5006                                                               | KEYSTONE                       | N/A                  | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                             |            |
| 15          | J1                                                                       | -         | 1      | 803-87-020-20-001101                                               | PRECI-DIP SA                   | 803-87-020-20-001101 | EVKIT PART-CONNECTOR; FEMALE; TH; DOUBLE ROW; 2.54MM; RIGHT ANGLE SOLDER TAIL; MATING PIN DIA 0.76MM; RIGHT ANGLE; 20PINS;                         |            |
| 16          | J2, J3                                                                   | -         | 2      | PEC03SAAN                                                          | SULLINS ELECTRONICS CORP.      | PEC03SAAN            | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC;                                                       |            |
| 17          | J4                                                                       | -         | 1      | PBC05SAAN                                                          | SULLINS ELECTRONICS CORP.      | PBC05SAAN            | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 5PINS; -65 DEGC TO +125 DEGC                                                                   |            |
| 18          | J5                                                                       | -         | 1      | PBC02SAAN                                                          | SULLINS ELECTRONICS CORP.      | PBC02SAAN            | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65 DEGC TO +125 DEGC;                                                       |            |
| 19          | J10-J13                                                                  | -         | 4      | 73391-0060                                                         | MOLEX                          | 73391-0060           | CONNECTOR; FEMALE; THROUGH HOLE; SMA JACK CONNECTOR; STRAIGHT; 5PINS                                                                               |            |
| 20          | Q1                                                                       | -         | 1      | BSS138LT1G                                                         | ON SEMICONDUCTOR               | BSS138LT1G           | TRAN; POWER MOSFET; N-CHANNEL; NCH; SOT-23; PD-(0.225W); I-(0.2A); V-(50V)                                                                         |            |
| 21          | R1, R2                                                                   | -         | 2      | CRCW06031K50JN                                                     | VISHAY DALE                    | 1.5K                 | RESISTOR; 0603; 1.5K OHM; 5%; 200PPM; 0.10W; METAL FILM                                                                                            |            |
| 22          | R3                                                                       | -         | 1      | CRCW0603100RFKEAHP                                                 | VISHAY DRALORIC                | 100                  | RESISTOR; 0603; 100 OHM; 1%; 100PPM; 0.25W; THICK FILM                                                                                             |            |
| 23          | R4                                                                       | -         | 1      | ERJ-3GEYJ102V                                                      | PANASONIC                      | 1K                   | RESISTOR; 0603; 1K OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                                              |            |
| 24          | R5                                                                       | -         | 1      | RC0603FR-0710KL                                                    | YAGEO                          | 10K                  | RESISTOR; 0603; 10K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                              |            |
| 25          | R6, R7                                                                   | -         | 2      | CR0805-10W-000                                                     | VENKEL LTD.                    | 0                    | RESISTOR; 0805; 0 OHM; 0.1W; THIN FILM                                                                                                             |            |
| 26          | R8                                                                       | -         | 1      | CRCW0603330RFK                                                     | VISHAY DALE                    | 330                  | RESISTOR; 0603; 330 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                             |            |
| 27          | R9                                                                       | -         | 1      | CRCW08058K20FK                                                     | VISHAY DALE                    | 8.2K                 | RESISTOR; 0805; 8.2K OHM; 1%; 100PPM; 0.125W; THICK FILM                                                                                           |            |
| 28          | R10, R11                                                                 | -         | 2      | CRCW06030000Z0EAHP                                                 | VISHAY DRALORIC                | 0                    | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.25W; THICK FILM                                                                                               |            |
| 29          | R12                                                                      | -         | 1      | ERJ-3EKF5102                                                       | PANASONIC                      | 51K                  | RESISTOR; 0603; 51K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                              |            |
| 30          | R13                                                                      | -         | 1      | ERJ-3EKF9102                                                       | PANASONIC                      | 91K                  | RESISTOR; 0603; 91K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                              |            |
| 31          | R14                                                                      | -         | 1      | ERJ-3EKF1003                                                       | PANASONIC                      | 100K                 | RESISTOR; 0603; 100K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                             |            |
| 32          | SW1                                                                      | -         | 1      | EVQ-Q2K03W                                                         | PANASONIC                      | EVQ-Q2K03W           | SWITCH; SPST; SMT; 15V; 0.02A; LIGHT TOUCH SWITCH; RCOIL= OHM; RINSULATION= OHM; PANASONIC                                                         |            |
| 33          | U1                                                                       | -         | 1      | MAX20084 BA TEA/VY+                                                | MAXIM                          | MAX20084 BA TEA/VY+  | EVKIT PART-IC; INFC; AUTOMOTIVE DUAL ANTENNA POWER SUPPLY WITH SERIAL INTERFACE; PACKAGE CODE: T1644Y-4C; PACKAGE LAND PATTERN: 90-0070; TQFN16-EP |            |
| 34          | PCB                                                                      | -         | 1      | MAX20084                                                           | MAXIM                          | PCB                  | PCB:MAX20084                                                                                                                                       | -          |
| 35          | C5                                                                       | DNP       | 0      | CGA4J3X7S2A105K125AB                                               | TDK                            | 1UF                  | CAPACITOR; SMT (0805); CERAMIC; 1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S; AUTO                                                         |            |
| 36          | C12, C13, C17, C18                                                       | DNP       | 0      | GRM21BZ71E106KE15                                                  | MURATA                         |                      | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 25V;                                                                                                    |            |
|             |                                                                          |           |        |                                                                    |                                | 10UF                 | TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                          |            |
| 37          | C14, C15                                                                 | DNP       | 0      | CGJ4J3X7T2D104K125                                                 | TDK                            | 0.1UF                | CAPACITOR; SMT (0805); CERAMIC CHIP; 0.1UF; 200V; TOL=10%; MODEL=CGJ SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7T                                      |            |
| 38 39 TOTAL | L1, L2 L3, L4                                                            | DNP DNP   | 0 0 69 | 74477130 AIML-1206HC-2R2M                                          | WURTH ELECTRONICS INC. ABRACON | 1000UH 2.2UH         | INDUCTOR; SMT; SHIELDED; 1000UH; 20%; 0.43A INDUCTOR; SMT (1206); FERRITE CHIP; 2.2UH; TOL=+/-20%; 1.3A                                            |            |

Evaluates: MAX2084/

M

A

X

2

0

8

4

B

## MAX20084 Evaluation Kit/ MAX20084 Evaluation System

## MAX20084 EV Kit Schematic

<!-- image -->

M

A

X

2

0

8

4

B

## MAX20084 Evaluation Kit/ MAX20084 Evaluation System

## MAX20084 EV PCB Layouts

Silk\_Top

<!-- image -->

Bottom

<!-- image -->

Evaluates: MAX2084/

M

A

X

2

0

8

4

B

Top

<!-- image -->

Silk\_Bottom

<!-- image -->

│

## MAXIM INTEGRATED CONFIDENTIAL/DISTRIBUTE ONLY UNDE

## MAX20084 Evaluation Kit/ MAX20084 Evaluation System

Evaluates: MAX2084/

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                 | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 8/18            | Initial release                                                                                                                             | -               |
|                 1 | 9/18            | Updated part number, Ordering Information , and MAX20084 EV Kit Bill of Materials                                                           | 1-7             |
|                 2 | 9/21            | Added reference to MAX20084B; updated title, General Description , Detailed Description of Hardware , and MAX20084 EV Kit Bill of Materials | 1-7             |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

│

M

A

X

2

0

8

4

B