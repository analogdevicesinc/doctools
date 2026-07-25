<!-- lastmod 2022-08-02 -->
## MAX15158Z Evaluation Kit

## General Description

The MAX15158Z evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX15158Z,  a  high-voltage  multiphase  boost  controller  designed  to  support  up  to  two MOSFET drivers and four external MOSFETs in singlephase  or  dual-phase  inverting-buck-boost  configuration. The  EV  kit  operates  from  a  -8V  to  -60V  input  voltage range and supports output voltage range of 3.3V to 60V. The EV kit uses the MAX15158Z on a proven six-layer PCB design. Two pieces of MAX15013 are used as the MOSFET driver for the EV kit. The EV kit also features an onboard buck converter MAX17552 to provide 10V supply voltage to MAX15158Z and the MOSFET driver.

## Features

- -8V to -60V Input Voltage Range for Inverting BuckBoost Configuration
- 3.3V to 60V Output Voltage Range on Top of Input Voltage
- -40°C to 125°C Temperature Range
- Banana Jacks for Input and Output Voltage
- Configurable Output Voltage and Compensation Parameters
- Adjustable Current Limit
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX15158Z

## Quick Start

## Required Equipment

- MAX15158Z EV kit assembly
- One 60V DC power supply (PS1)
- Voltmeters

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Verify that a shunt is installed across jumpers J3 and J4.
- 2) Verify that a shunt is installed between pins 2 and 3 on jumper J6.
- 3) Turn on power-supply PS1 and set the supply to 48V, then disable the power supply.
- 4) Connect  the  positive  terminal  of  power-supply  PS1 to the VIN+ banana jack on the EV kit. Connect the negative  terminal  of  the  power  supply  to  the  VINbanana jack.
- 5) Enable the power supply.
- 6) Verify  that  the  voltage  between  the  VOUT\_P  and VOUT\_N test points is 35V.
- 7) The EV kit is now ready for additional evaluation.

<!-- image -->

## Detailed Description of Hardware

The  MAX15158Z  EV  kit  provides  a  proven  design  to evaluate the MAX15158Z, fully integrated, highly efficient, two-phase switching regulator. The EV kit can be easily connected between power input and the load using the banana jacks and connectors provided for the input and output. Test points and connectors are provided to moni -tor  and  control  the  device  signals.  The  EV  kit  operates between input voltage -8V to -60V. The EV kit regulates the  output  voltage  between  3.3V  to  60V.  The  output voltage is set to 35V by default on the EV kit. The output voltage  can  be  changed  by  changing  resistor  divider between VOUT+ pin and OUTP pin. Make sure that the correct compensation is selected for stable operation.

## EN/UVLO Input for the MAX15158Z

The  device's  enable  input  (EN/UVLO)  is  controlled  by resistor divider ratio between R19 and R20. The divider ratio  is  chosen  so  that  the  VIN  UVLO  threshold  is  set at  21V  by  default.  If  EN/UVLO  pin  voltage  is  above 1V,  MAX15158Z  will  power  up.  EN/UVLO  pin  can  be connected to VIN- to disable the regulation. Additionally, a test point (EN) is also provided to drive the EN/UVLO pin. While changing the UVLO threshold, make sure that the UVLO threshold of MAX15158Z is higher than the UVLO threshold of the onboard DRV supply MAX17552 (U4).

## DRV Supply Selection

MAX15158Z and MAX15013 requires a secondary 8V-12V power  supply  (DRV)  for  the  LDO  and  gate  drive.  The supply for DRV pin can be selected from onboard supply by installing shuts across jumpers J3 and J4. Alternatively, an external power supply can be used by applying and 8V-12V between test points VDRV and PGND.

Table 1. J3 and J4 Jumper Selection

| JUMPER CONNECTIONS                    | VLDOIN VOLTAGE        |
|---------------------------------------|-----------------------|
| J3 installed and J4 installed*        | Onboard Power supply  |
| J3 not installed and J4 not installed | External Power Supply |

* Default position

## Bode Plot

10Ω  resistor  is  installed  between  VOUT\_P  sense  point and OUTP pin to measure bode plot. BODE+ and BODEtest points are provided on the board on either side of 10Ω resistor  for  small-signal  injection  and  ability  to  measure bode plot.

## Output Regulation

VOUT\_P  and  VOUT\_N  test  points  are  provided  to measure the VOUT regulation.

## Efficiency Measurement

VIN\_P   and  V IN\_N   are  provided  to  measure  V IN   during efficiency  measurement.  Also,  V OUT\_P  and  V OUT\_N   are provided to measure V OUT during efficiency measurement.

## FREQ/CLK Pin

Switching frequency is selected by connecting R16 resistor  between  FREQ/CLK  pin  and  VIN-.  The  switching frequency can also be selected by providing a 480kHz to 4MHz external clock at this pin. A test point (CLOCK) is also provided to drive this pin.

## REFIN Pin

By  default,  REFIN  pin  is  connected  to  BIAS  supply through R9 (0Ω resistor). R9 can be removed and REFIN can be connected to external supply (between 1V to 2.2V) to  change  the  VOUT  reference  and  therefore  change output regulation voltage. The external supply should be applied between test point REFIN and AGND.

## Connecting Multiple EV Kits Together

The EV kit provides jumpers J1, J2, J8, J9, J10, and J11 to connect two EV kits together for four-phase operation. Based on the MAX15158Z data sheet, the EV kits can be configured for master and slave operation.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX15158ZEVKIT# | EV kit |

# Denotes RoHS Compliant

│

## MAX15158Z EV Kit Bill of Materials

| ITEM   | REF_DES                                                                                                                             | DNI/DNP   | QTY   | MFG PART #                                                        | MANUFACTURER                       | VALUE              | DESCRIPTION                                                                                                                                                    |
|--------|-------------------------------------------------------------------------------------------------------------------------------------|-----------|-------|-------------------------------------------------------------------|------------------------------------|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | 3P3, 3P3_GND, AGND, CLOCK, PGND, VDRV                                                                                               | -         | 6     | 9020 BUSS                                                         | WEICO WIRE                         | MAXIMPAD           | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                                       |
| 2      | BODE+, BODE-, COMP, EN, FB, PGOOD, REFIN, SS, V4V6, VIN_N, VIN_P, VOUT_N, VOUT_P                                                    | -         | 13    | 5011                                                              | KEYSTONE                           | N/A                | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                  |
| 3      | C1, C44                                                                                                                             | -         | 2     | EEV-FK2A680Q                                                      | PANASONIC                          | 68UF               | CAPACITOR; SMT (CASE_H13); ALUMINUM-ELECTROLYTIC; 68UF; 100V; TOL = 20%; MODEL = EEV SERIES                                                                    |
| 4 5    | C2, C39, C45 C3, C6, C8-C12, C14, C18-C21, C23, C25, C28, C30, C31, C34, C37, C38, C41, C42, C46, C49, C51-C55, C59, C69, C72, C74, | - -       | 3     | CGA3E1X7R1E105K; TMK107B7105KA; 06033C105KAT2A; GCM188R71E105KA64 | MURATA;TDK;TAIYO YUDEN; AVX;MURATA | 1UF 4.7UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 25V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                                                       |
|        | C76-C78, C83-C85, C93-C95                                                                                                           |           | 42    | CGA6M3X7S2A475K200AE; CGA6M3X7S2A475K200AB                        | TDK;TDK                            |                    | CAPACITOR; SMT (1210); CERAMIC CHIP; 4.7UF; 100V; TOL = 10%; TG = -55°C TO +125°C; TC = X7S; AUTO                                                              |
| 6      | C4, C13, C24, C47, C58, C73                                                                                                         | -         | 6     | CC0603KRX7R0BB104; GRM188R72A104KA35; GCJ188R72A104KA01           | YAGEO;MURATA; MURATA               | 0.1UF              | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                                                    |
| 7      | C5, C7                                                                                                                              | -         | 2     | C0603C101J2GAC                                                    | KEMET                              | 100PF              | CAPACITOR; SMT (0603); CERAMIC CHIP; 100PF; 200V; TOL = 5%; TG = -55°C TO +125°C; TC = C0G                                                                     |
| 8      | C16, C17, C26, C27, C48, C50                                                                                                        | -         | 6     | GRM1555C1E102JA01D; C1005C0G1E102J050BA                           | MURATA;TDK                         | 1000PF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 25V; TOL = 5%; TG = -55°C TO +125°C; TC = C0G                                                                     |
| 9      | C22                                                                                                                                 | -         | 1     | GRM32ER71J106KA12                                                 | MURATA                             | 10UF               | CAPACITOR; SMT (1210); CERAMIC CHIP; 10UF; 63V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                                                      |
| 10     | C29                                                                                                                                 | -         | 1     | C1005X5R1E474K050                                                 | TDK                                | 0.47UF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.47UF; 25V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R ;                                                                   |
| 11     | C32                                                                                                                                 | -         | 1     | C0402C103K5RAC; GRM155R71H103KA88; C1005X7R1H103K050BE            | KEMET;MURATA;TDK                   | 0.01UF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                                                    |
| 12     | C33                                                                                                                                 | -         | 1     | C1005X7R1E473K; GRM155R71E473K                                    | TDK;MURATA                         | 0.047UF            | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.047UF; 25V; TOL = 10%; TG = -55°C TO +125°C                                                                             |
| 13     | C35                                                                                                                                 | -         | 1     | GRM155R71H683KE14                                                 | MURATA                             | 0.068UF            | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.068UF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R CAPACITOR; SMT; 0402; CERAMIC; 100pF; 50V; 10%;                   |
| 14     | C36 C40                                                                                                                             | -         | 1     | C0402C101K5GAC; C1005C0G1H101K050BA                               | KEMET;TDK                          | 100PF              | C0G; -55°C to + 125°C; 0 ± 30PPM/°C CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2UF; 25V; TOL = 10%; TG = -55°C TO +125°C; TC = X7S                                 |
| 15     |                                                                                                                                     | -         | 1     | GRM188C71E225KE11                                                 | MURATA                             | 2.2UF              | CAPACITOR; SMT (CASE_H13); ALUMINUM-ELECTROLYTIC; 220UF; 63V; TOL = 20%; TG = -55°C TO +105°C                                                                  |
| 16     | C43, C89                                                                                                                            | -         | 2     | AFK227M63H32T; EEV-FK1J221Q                                       | CORNELL DUBILIER; PANASONIC        | 220UF              |                                                                                                                                                                |
| 17     | C56                                                                                                                                 | -         | 1     | EEE-FK2A220P                                                      | PANASONIC                          | 22UF               | CAPACITOR; SMT (CASE_F); ALUMINUM-ELECTROLYTIC; 22UF; 100V; TOL = 20%; MODEL = EEV SERIES; TG = -55°C TO +105°C                                                |
| 18     | C57                                                                                                                                 | -         | 1     | GRM31CR72A105KA01L; C3216X7R2A105K160                             | MURATA;TDK                         | 1UF                | CAPACITOR; SMT; 1206; CERAMIC; 1uF; 100V; 10%; X7R; -55°C to + 125°C CAPACITOR; SMT (0805); CERAMIC CHIP; 4.7UF; 35V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R |
| 19 20  | C61, C64 C90                                                                                                                        | - -       | 2 1   | GRM219R6YA475KA73 C1210C475K1R2C;                                 | MURATA KEMET;MURATA                | 4.7UF 4.7UF        | CAPACITOR; SMT (1210); CERAMIC CHIP; 4.7UF; 100V;                                                                                                              |
| 21     | D1-D4                                                                                                                               | -         | 4     | GRM32ER72A475KE14 BAV16WS-7-F                                     | DIODES INCORPORATED                | BAV16WS            | TOL = 10%; MODEL =; TG = -55°C TO +125°C; TC = X7R DIODE; SWT; SMT (SOD-323); PIV = 75V; IF = 0.3A                                                             |
| 22     | D5                                                                                                                                  | -         | 1     | SMAJ64A                                                           | LITTELFUSE                         | 64V                | DIODE; TVS; SMA (DO-214AC); PIV = 64V; IF = 3.9A                                                                                                               |
| 23     | J1, J8, J10                                                                                                                         | -         | 3     | LS2-110-01-S-D-RA1                                                | SAMTEC                             | LS2-110-01-S-D-RA1 | CONNECTOR; THROUGH HOLE; SELF MATING HERMAPHRODITIC STRIP SHROUD DOWN; RIGHT ANGLE; 20PINS                                                                     |
| 24     | J2, J9, J11                                                                                                                         | -         | 3     | LS2-110-01-S-D-RA2                                                | SAMTEC                             | LS2-110-01-S-D-RA2 | CONNECTOR; THROUGH HOLE; SELF MATING HERMAPHRODITIC STRIP SHROUD UP; RIGHT ANGLE; 20PINS                                                                       |
| 25     | J3-J5, J7, J12                                                                                                                      | -         | 5     | PEC02SAAN                                                         | SULLINS                            | PEC02SAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                                                      |
|        |                                                                                                                                     |           |       |                                                                   |                                    | PBC03SAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65°C TO +125°C                                                                                     |
| 26     | J6                                                                                                                                  | -         | 1     | PBC03SAAN                                                         | SULLINS                            |                    |                                                                                                                                                                |
| 27 28  | L1, L2 L3                                                                                                                           | - -       | 2 1   | SER2915H-103KL                                                    | COILCRAFT COILCRAFT                | 10UH 150UH         | INDUCTOR; SMT; FERRITE; 10UH; 10%; 30A INDUCTOR; SMT; SHIELDED; 150UH; TOL = ± 20%; 0.57A                                                                      |
|        | MH1-MH4                                                                                                                             | -         | 4     | LPS5030-154MR 91772A108;                                          |                                    | N/A                | MACHINE SCREW; PHILLIPS; PAN; 4-40; 3/8IN;                                                                                                                     |
| 29     |                                                                                                                                     |           |       | PHILLIPS-PAN_4-40X3/8IN; PMSSS4400038PH; 9901                     | GENERIC PART                       |                    | 18-8 STAINLESS STEEL                                                                                                                                           |
| 30     | MH1-MH4                                                                                                                             | -         | 4     | MCH_SO_F_HEX_4-40X1/2                                             | GENERIC PART                       | N/A                | STANDOFF; FEMALE-THREADED; HEX; 4-40; 1/2IN; ALUMINUM                                                                                                          |
| 31 32  | Q1, Q2, Q5, Q6 R1, R2, R28, R29                                                                                                     | - -       | 4 4   | BSC110N15NS5 CRCW0402221RFK                                       | INFINEON VISHAY DALE               | BSC110N15NS5 221   | TRAN; NCH; PG-TDSON8; PD-(125W); I-(76A); V-(150V) RESISTOR; 0402; 221Ω; 1%; 100PPM; 0.0625W; THICK FILM                                                       |
| 33     | R3, R4, R33, R34                                                                                                                    | -         | 4     | CRCW04020000Z0EDHP;                                               | VISHAY DRALORIC;                   | 0                  | RESISTOR; 0402; 0Ω; 0%; JUMPER; 0.2W; THICK FILM                                                                                                               |
|        |                                                                                                                                     |           |       | RCS04020000Z0                                                     | VISHAY DALE                        |                    |                                                                                                                                                                |
| 34     | R6, R7, R36, R37                                                                                                                    | -         | 4     | CRCW040210R0FK; 9C04021A10R0FL                                    | VISHAY DALE;YAGEO                  | 10                 | RESISTOR; 0402; 10Ω; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                           |
| 35     | R8                                                                                                                                  | -         | 1     | CRCW0402100KFK; RC0402FR-07100KL                                  | VISHAY DALE; YAGEO PHICOMP         | 100K               | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                          |
| 36     | R9, R23, R57-R59, R61-R63, R65                                                                                                      | -         | 9     | ERJ-2GE0R00X                                                      | PANASONIC                          | 0                  | RESISTOR; 0402; 0Ω; 0%; JUMPER; 0.10W; THICK FILM                                                                                                              |

## MAX15158Z EV Kit Bill of Materials (continued)

| ITEM   | REF_DES                          | DNI/DNP   | QTY   | MFG PART #                                                                     | MANUFACTURER                                  | VALUE                     | DESCRIPTION                                                                                                                        |
|--------|----------------------------------|-----------|-------|--------------------------------------------------------------------------------|-----------------------------------------------|---------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| 37     | R14, R39                         | -         | 2     | WSL20103L000F                                                                  | VISHAY DALE                                   | 0.003                     |                                                                                                                                    |
| 38     | R15                              | -         | 1     | CRCW0603267KFK                                                                 | VISHAY DALE                                   | 267K                      |                                                                                                                                    |
| 39     | R16                              | -         | 1     | CRCW040241K2FK                                                                 | VISHAY DALE                                   | 41.2K                     |                                                                                                                                    |
| 40     | R17                              | -         | 1     | CRCW040249K9FK; 9C04021A4992FLHF3                                              | VISHAY DALE; YAGEO                            | 49.9K                     | RESISTOR; 0402; 49.9K; 1%; 100PPM; 0.0625W; THICK FILM                                                                             |
| 41     | R18                              | -         | 1     | CRCW04023322FK                                                                 | VISHAY DALE                                   | 33.2K                     | RESISTOR; 0402; 33.2K; 1%; 100PPM; 0.0625W; THICK FILM                                                                             |
| 42     | R19                              | -         | 1     | ERJ-2RKF6193                                                                   | PANASONIC                                     | 619K                      | RES; SMT (0402); 619K; 1%; ± 100PPM/DEGC; 0.1W                                                                                     |
| 43     | R20                              | -         | 1     | CRCW04023012FK; CRCW040230K1FK                                                 | VISHAY DALE; VISHAY DALE                      | 30.1K                     | RESISTOR; 0402; 30.1K; 1%; 100PPM; 0.0625W; THICK FILM                                                                             |
| 44     | R21                              | -         | 1     | ERJ-2RKF3922X                                                                  | PANASONIC                                     | 39.2K                     |                                                                                                                                    |
| 45     | R22                              | -         | 1     | CRCW04026K20FK                                                                 | VISHAY DALE                                   | 6.2K                      |                                                                                                                                    |
| 46     | R24                              | -         | 1     | CRCW04022K00FK; RK73H1ETTP2001F                                                | VISHAY DALE; KOA SPEER                        | 2K                        | RESISTOR; 0402; 2K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                |
| 47     | R25                              | -         | 1     | CRCW0402200RFK                                                                 | VISHAY DALE                                   | 200                       |                                                                                                                                    |
| 48     | R26, R60                         | -         | 2     | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00                                     | VISHAY DALE;ROHM; PANASONIC                   | 0                         |                                                                                                                                    |
| 49     | R27, R51, R52                    | -         | 3     | CRCW060310R0FK; MCR03EZPFX10R0                                                 | VISHAY DALE;ROHM                              | 10                        |                                                                                                                                    |
| 50     | R30                              | -         | 1     | CR0402-16W-3013FT; CRCW0402301KFK                                              | VENKEL LTD.; VISHAY DALE                      | 301K                      |                                                                                                                                    |
| 51     | R31                              | -         | 1     | CRCW0402110KFK                                                                 | VISHAY DALE                                   | 110K                      |                                                                                                                                    |
| 52     | R32                              | -         | 1     | CRCW0402249KFK                                                                 | VISHAY DALE                                   | 249K                      |                                                                                                                                    |
| 53     | R35                              | -         | 1     | CRCW04023M01FK                                                                 | VISHAY DALE                                   | 3.01M                     |                                                                                                                                    |
| 54     | R38                              | -         | 1     | CRCW040222K1FK                                                                 | VISHAY DALE                                   | 22.1K                     |                                                                                                                                    |
| 55     | R40                              | -         | 1     | CRCW040234K8FK                                                                 | VISHAY DALE                                   | 34.8K                     |                                                                                                                                    |
| 56     | R42                              | -         | 1     | CRCW06031K50FK                                                                 | VISHAY DALE                                   | 1.5K                      | RESISTOR; 0603; 1.5K; 1%; 100PPM; 0.10W; THICK FILM                                                                                |
| 57     | R43                              | -         | 1     | CRCW06033K90FK                                                                 | VISHAY DALE                                   | 3.9K                      |                                                                                                                                    |
| 58     | R44                              | -         | 1     | 3223W-1-104                                                                    | BOURNS                                        | 100K                      | RESISTOR; SMT J-LEAD; TRIMMING POTENTIOMETER;                                                                                      |
| 59     | R45                              | - -       | 1     | ERJ-3EKF5902 CRCW0603100KFK; RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; | PANASONIC VISHAY;YAGEO;YAGEO; PANASONIC;YAGEO | 59K 100K                  | RESISTOR; 0603; 100K; 1%; 100PPM; 0.10W; THICK FILM                                                                                |
| 60 61  | R46 R47-R50                      | -         | 1 4   | AC0603FR-07100KL CRCW04022R0FK                                                 | VISHAY DALE                                   | 2                         |                                                                                                                                    |
| 62     | R53, R55                         | -         | 2     | CRCW04023K00FK                                                                 | VISHAY DALE                                   | 3K                        |                                                                                                                                    |
| 63     | R54, R56                         | -         | 2     | CRCW04021K00FK;                                                                | VISHAY DALE; YAGEO PHICOMP                    | 1K                        | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                |
|        |                                  |           |       | RC0402FR-071KL                                                                 |                                               |                           |                                                                                                                                    |
| 65     | U2                               | -         | 1     | MAX15158ZATJ+                                                                  | MAXIM                                         | MAX15158ZATJ+             | EVKIT -IC; MAX15158ZATJ+; PACKAGE OUTLINE: 21-0140; PACKAGE LAND PATTERN: 90-0603; PACKAGE CODE: T3255-6                           |
| 66     | U4                               | -         | 1     | MAX17552AUB+                                                                   | MAXIM                                         | MAX17552AUB+ MAX17651AZT+ | IC; CONV; 60V; 100MA; ULTRA-SMALL; HIGH EFFICIENCY; SYNCHRONOUS STEP-DOWN DC-DC CONVERTER WITH 22UA NO-LOAD SUPPLY CURRENT; UMAX10 |
| 67     | U5                               | -         | 1     | MAX17651AZT+                                                                   | MAXIM                                         |                           | IC; REG; ULTRA-LOW QUIESCENT CURRENT; LINEAR REGULATOR; TSOT6                                                                      |
| 68     | VIN+, VIN-, VOUT+, VOUT-         | -         | 4     | 111-2223-001                                                                   | EMERSON NETWORK POWER                         | 111-2223-001              | MACHINE SCREW; THUMBSCREW; BANANA; 1/4-32IN; 11/32IN; NICKEL PLATED BRASS                                                          |
| 69     | PCB                              | -         | 1     | MAX15158Z                                                                      | MAXIM                                         | PCB                       | PCB:MAX15158Z                                                                                                                      |
| 70     | C15                              | DNP       | 0 0   | C0402C102K5GAC GRM155R71C224KA12                                               | KEMET                                         | 1000PF                    | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL = 10%; MODEL =; TG = -55°C TO +125°C; TC = C0G                               |
| 71     | C60                              | DNP       |       |                                                                                | MURATA                                        | 0.22UF                    | CAPACITOR; SMT (0402); CERAMIC; 0.22UF; 16V; TOL = 10%; MODEL = GRM SERIES; TG = -55°C TO +125°C; TC = X7R                         |
| 72     | C62, C63, C67, C68               | DNP       | 0     | GRM155R72A221KA01                                                              | MURATA                                        | 220PF                     | CAPACITOR; SMT (0402); CERAMIC; 220PF; 100V; TOL = 10%; MODEL = GRM SERIES; TG = -55°C TO +125°C; TC = X7R                         |
| 73     | C65, C66                         | DNP       | 0     | C0402C0G500-470JNE; CC0402JRNPO9BN470; GRM1555C1H470JA01                       | VENKEL LTD.; YAGEO PHYCOMP;MURATA             | 47PF                      | CAPACITOR; SMT (0402); CERAMIC CHIP; 47PF; 50V; TOL = 5%; MODEL =; TG = -55°C TO +125°C; TC = C0G                                  |
| 74     | C70, C71                         | DNP       | 0     | CGA2B3X7R1H104K; C1005X7R1H104K050BB; GRM155R71H104KE14; GCM155R71H104KE02     | TDK;TDK;MURATA;MURATA                         | 0.1UF                     | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                         |
| 76     | C91, C92, C96-C99 Q3, Q4, Q7, Q8 | DNP       | 0     | CGA6M3X7S2A475K200AB BSC110N15NS5 CRCW0603100KFK;                              | INFINEON                                      | BSC110N15NS5              | TOL = 10%; TG = -55°C TO +125°C; TC = X7S; AUTO TRAN; NCH; PG-TDSON8; PD-(125W); I-(76A); V-(150V)                                 |
| 77     | R5                               | DNP       | 0     | RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL             | VISHAY;YAGEO;YAGEO; PANASONIC;YAGEO           | 100K                      | RESISTOR; 0603; 100K; 1%; 100PPM; 0.10W; THICK FILM                                                                                |
| 78     | R10-R13, R64                     | DNP       | 0     | ERJ-2GE0R00X                                                                   | PANASONIC                                     | 0                         |                                                                                                                                    |
| 79     | R66, R67 TOTAL                   | DNP       | 0 194 | WSL20103L000F                                                                  | VISHAY DALE                                   | 0.003                     |                                                                                                                                    |

## MAX15158Z EV Kit Schematics

<!-- image -->

## MAX15158Z EV Kit Schematics (continued)

<!-- image -->

│

## MAX15158Z EV Kit PCB Layout Diagrams

MAX15158Z EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

│

## MAX15158Z EV Kit PCB Layout Diagrams (continued)

MAX15158Z EV Kit PCB Layout-Top Layer

<!-- image -->

## MAX15158Z EV Kit PCB Layout Diagrams (continued)

MAX15158Z EV Kit PCB Layout-Internal Layer 2

<!-- image -->

│

## MAX15158Z EV Kit PCB Layout Diagrams (continued)

MAX15158Z EV Kit PCB Layout-Internal Layer 3

<!-- image -->

│

## MAX15158Z EV Kit PCB Layout Diagrams (continued)

MAX15158Z EV Kit PCB Layout-Internal Layer 4

<!-- image -->

Evaluates: MAX15158Z

│

## MAX15158Z EV Kit PCB Layout Diagrams (continued)

MAX15158Z EV Kit PCB Layout-Internal Layer 5

<!-- image -->

│

## MAX15158Z EV Kit PCB Layout Diagrams (continued)

MAX15158Z EV Kit PCB Layout-Bottom Layer

<!-- image -->

│

## MAX15158Z EV Kit PCB Layout Diagrams (continued)

MAX15158Z EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

Evaluates: MAX15158Z

│

## MAX15158Z Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                       | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------|-----------------|
|                 0 | 5/19            | Initial release                                                                   | -               |
|                 1 | 6/19            | Changed part number to MAX15158Z, updated BOM, schematic, and PCB layout diagrams | 1-15            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX15158Z