<!-- lastmod 2022-08-03 -->
## MAX16923 Evaluation Kit

## General Description

The MAX16923 evaluation kit (EV kit) is a fully assembled and  tested  surface-mount  PCB  used  to  evaluate  the MAX16923  automotive  4-output  display-power  solution. The  MAX16923  is  a  4-channel  power-management  IC designed to accommodate the main rails used in modern automotive  TFT  displays.  The  MAX16923  integrates a  high-voltage  buck  converter  that  transforms  battery voltages into a 5V or 3.3V intermediate rail. In addition, a  high-voltage,  always-on,  low-quiescent-current  linear regulator supplies power at 3.3V. The low-voltage section consists of a fully-integrated DC/DC converter and an LDO running off the intermediate rail. A single START control pin  initiates  the  start-up  sequence,  thereby  simplifying device  control.  The  MAX16923's  external  PMOSFET control  block  allows  battery  voltage  to  be  switched  to  a downstream device, such as a backlight boost converter. The  MAX16923  also  embeds  a  watchdog  timer  and selectable switching frequencies with spread spectrum.

## Benefits and Features

- 4.5V to 36V Wide Input Voltage Range (40V Load-Dump Tolerant)
- One High-Voltage 2.1A Buck Converter (5V or 3.3V)
- One High-Voltage 100mA Low-IQ Linear Regulator (3.3V)
- One Low-Voltage 1.6A Buck Converter (3.3V, 1.8V, 1.2V, or 1.1V)
- One Low-Voltage 180mA Linear Regulator (3.3V, 1.8V, 1.5V or 1.1V)
- Power-Good Outputs
- Integrated Watchdog Timer
- Programmable Switching Frequency (400Khz, 440Khz, 2Mhz, 2.2MHz)
- Spread Spectrum
- Proven PCB Layout
- Automotive CISPR25 CLASS5 compliant
- Fully Assembled and Tested

Evaluates: MAX16923/MAX16926

## Quick Start

## Required Equipment

- MAX169 23 EV kit
- 12V, 2A power supply

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that shunts are installed across pins 1-2 on jumpers J1-J2, J5-J7, J9, J16, J19.
- 2) Verify that shunts are installed across pins 2-3 on jumpers J3, J8, J10.
- 3) Connect the positive terminal of the power supply to the V IN  PCB pad and the negative terminal to the GND1 PCB pad.
- 4) Set the power supply V IN  to 12V.
- 5) Turn on the power supply.
- 6) Verify that the green LEDs (DS1, DS2, DS3, DS4, DS6) are all on.
- 7) The EV kit by default is equipped with the MAX16923GTPA, which regulates the following voltage rails:
- 3.3V High-Voltage LDO
- 5V High-Voltage Buck
- 3.3V Low-Voltage Buck
- 3.3V Low-Voltage LDO

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX16923 Evaluation Kit

## Detailed Description of Hardware

The jumper settings in the following tables illustrate features of the MAX16923 EV kit.

## Digital Domain Voltage (J3)

The EV kit exposes open-drain power-good signals (PG1, PGB and PGOOD) that are pulled up to what is referred to as the digital-domain voltage.

Digital-domain  voltage  can  be  selected  between  the MAX16923  high-voltage  LDO  (LDO1)  and  an  external voltage applied to the EXT\_DVDD pad (see Table 1).

## Table 1. Jumper Functions (J3)

| SHUNT POSITION   | DIGITAL DOMAIN   |
|------------------|------------------|
| 1-2              | EXT_DVDD         |
| 2-3*             | LDO1             |

## Table 2. Jumper Functions (J8, J9, J10)

| SHUNT POSITION   | MAX20084              |
|------------------|-----------------------|
| 1-2*             | High                  |
| 2-3**            | Low                   |
| Open             | Externally controlled |

## Table 3. Jumper Functions (J11-J16)

| INSTALLED JUMPER   | HV SWITCHING FREQUNCY   | LV SWITCHING FREQUENCY   | WHATCHDOG FUNCTIONALITY   |
|--------------------|-------------------------|--------------------------|---------------------------|
| J11                | 400Khz                  | 2Mhz                     | Enabled                   |
| J12                | 440Khz                  | 2.2Mhz                   | Enabled                   |
| J13                | 2Mhz                    | 2Mhz                     | Enabled                   |
| J14                | 2.2Mhz                  | 2.2Mhz                   | Enabled                   |
| J15                | 400Khz                  | 2Mhz                     | Disabled                  |
| J16                | 2.2Mhz                  | 2.2Mhz                   | Disabled                  |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16923EVKIT# | EV Kit |

Evaluates: MAX16923/MAX16926

## START, WAKE and FIN Enable (J8, J9, J10)

The MAX16923 digital input signals START, WAKE, and FIN can be driven externally using the respective PADS, or forced high/low with the J8, J9, and J10 jumpers.

## Switching Frequency Selection (J11-J16)

Jumpers J11 to J16 are used to select the switching frequency and enable the watchdog functionality. Only one jumper can be installed at time, as shown in Table 3.

## HV Buck 400/440Khz Switching-Frequency Operation

In  order  to  operate  the  HV  buck  at  400Khz  or  440Khz switching  frequency,  the  C4  capacitor  placeholder  must be populated with a ceramic 22µF capacitor and the L1 inductor must be replaced with a 10µH inductor.

│

## MAX16923 EV Kit Bill of Materials

| ITEM   | REF_DES                                                                                                            | DNI/DNP   | QTY   | MFG PART #                                                                                                          | MANUFACTURER                                                               | VALUE           | DESCRIPTION                                                                                                          | COMMENTS   |
|--------|--------------------------------------------------------------------------------------------------------------------|-----------|-------|---------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------|------------|
| 1      | BATT, DVDD, TP_HV_BUCK, TP_LDO1, TP_LDO2, TP_LV_BUCK, TP_PGATE, VIN_FILT                                           | -         | 8     | 5005 KEYSTONE                                                                                                       | 5005 KEYSTONE                                                              | N/A             | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
| 2      | C1, C9, C34, C36, C38, C41                                                                                         | -         | 6     | GRM21BR71H105KA12; CL21B105KBFNNN; C2012X7R1H105K085AC; UMK212B7105KG; CGA4J3X7R1H105K125AB                         | MURATA; SAMSUNG ELECTRONICS; TDK;TAIY                                      | 1UF             | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                             |            |
| 3      | C2, C7, C8, C10, C18, C19, C22, C33, C37, C40                                                                      | -         | 10    | CGA3E3X7S2A104K080AB; C1608X7S2A104K080AB                                                                           | TDK;TDK                                                                    | 0.1UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S                          |            |
| 4      | C5, C6, C23, C24, C39                                                                                              | -         | 5     | GRM32ER71E226KE15; CL32B226KAJNFN; CL32B226KAJNNW; TMK325B7226KM                                                    | MURATA; SAMSUNG ELECTRO-MECHANICS;TA                                       | 22UF            | CAPACITOR; SMT (1210); CERAMIC CHIP; 22UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                            |            |
| 5      | C13                                                                                                                | -         | 1     | MAL214699103E3                                                                                                      | VISHAY BCCOMPONENTS                                                        | 100UF           | CAPACITOR; SMT; ALUMINUM-ELECTROLYTIC; 100UF; 50V; TOL=20%                                                           |            |
| 6      | C14                                                                                                                | -         | 1     | GRM188R71A105K; C0603X7R100-105; C1608X7R1A105K080AC; LMK107B7105KA; CL10B105KP8NFN; LMK107B7105KAH; C0603C105K8RAC | MURATA;VENKEL LTD; TDK;TAIYO YUDEN; SAMSUNG ELECTRONICS; TAIYO YUDEN;KEMET | 1UF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 10V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;                            |            |
| 7      | C16                                                                                                                | -         | 1     | GRM155R71E104KE14; C1005X7R1E104K050BB; TMK105B7104KVH; CGJ2B3X7R1E104K050BB                                        | MURATA;TDK; TAIYO YUDEN;TDK                                                | 0.1UF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R         |            |
| 8      | C17                                                                                                                | -         | 1     | GRJ32ER71H106KE11                                                                                                   | MURATA                                                                     | 10UF            | CAPACITOR; SMT (1210); CERAMIC CHIP; 10UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                            |            |
| 9      | C20, C21                                                                                                           | -         | 2     | TMK212BBJ106KG-T; CL21A106KAFN3N                                                                                    | TAIYO YUDEN; SAMSUNG ELECTRO-MECHANI                                       | 10UF            | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 25V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R                     |            |
| 10     | C32                                                                                                                | -         | 1     | GRM32ER71J106KA12                                                                                                   | MURATA                                                                     | 10UF            | CAPACITOR; SMT (1210); CERAMIC CHIP; 10UF; 63V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                            |            |
| 11     | D1                                                                                                                 | -         | 1     | PDS1040                                                                                                             | DIODES INCORPORATED                                                        | PDS1040         | DIODE; SCH; SMT (POWERDI-5); PIV=40V; IF=10A                                                                         |            |
| 12     | D2                                                                                                                 | -         | 1     | B350A-13-F                                                                                                          | DIODES INCORPORATED                                                        | B350A           | DIODE; SCH; SMA (DO-214AC); PIV=50V; IF=3A                                                                           |            |
| 13     | D3                                                                                                                 | -         | 1     | BZT52C18-7-F                                                                                                        | DIODES INCORPORATED                                                        | 18V             | DIODE; ZNR; SMT (SOD-123); Vz=18V; Izm=0.005A; -65 DEGC TO +150 DEGC                                                 |            |
| 14     | D4                                                                                                                 | -         | 1     | BZX84C 4V7                                                                                                          | FAIRCHILD SEMICONDUCTOR                                                    | 4.7V            | DIODE; ZNR; SMT (SOT-23); PIV=4.7V; IF=0.25A                                                                         |            |
| 15     | D5                                                                                                                 | -         | 1     | BZT52C7V5-7-F                                                                                                       | DIODES INCORPORATED                                                        | 7.5V            | DIODE; ZNR; SMT (SOD-123); VZ=7.5V; IZ=0.005A                                                                        |            |
| 16 17  | D6                                                                                                                 | -         | 1 1   | MM3Z12VT1G BAS70-04FILM                                                                                             | ON SEMICONDUCTOR STMICROELECTRONICS                                        | 12V BAS70-04    | DIODE; ZNR; SMT (SOD-323); PIV=12V; IZ=0.005A DIODE, SCHOTTKY , SMALL SIGNAL, PIV=70V, IF(max)=0.070A,               |            |
|        | D8                                                                                                                 | -         | 5     |                                                                                                                     | LITE-ON ELECTRONICS INC                                                    | LTST-C170GKT    | PD=0.25W DIODE; LED; STANDARD; GREEN; SMT (0805); PIV=2.1V;                                                          | GREEN      |
| 18 19  | DS1-DS4, DS6 DS5, DS7, DS8                                                                                         | - -       | 3     | LTST-C170GKT                                                                                                        | LITE-ON ELECTRONICS INC                                                    | LTST-C170EKT    | IF=0.01A DIODE; LED; STANDARD; RED; SMT (0805); PIV=2.0V; IF=0.02A                                                   | RED        |
| 20     | EXT_DVDD, FIN, GND1-GND6, HV_BUCK, LDO1, LDO2, LV_BUCK, PG1, PGB, PGOOD, START, SW_HV_BUCK, SW_VIN, VIN, WAKE, WDI | -         | 21    | LTST-C170EKT 9020 BUSS                                                                                              | WEICO WIRE                                                                 | MAXIMPAD        | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                             |            |
| 21     | J1, J2, J5-J7, J11-J19                                                                                             | -         | 14    | PBC02SAAN                                                                                                           | SULLINS ELECTRONICS CORP.                                                  | PBC02SAAN       | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65 DEGC TO +125 DEGC;                         |            |
| 22     | J3, J4, J8-J10                                                                                                     | -         | 5     | PEC03SAAN                                                                                                           | SULLINS ELECTRONICS CORP.                                                  | PEC03SAAN       | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC;                         |            |
| 23     | L1                                                                                                                 | -         | 1     | 74437346022                                                                                                         | WURTH ELECTRONICS INC                                                      | 2.2UH           | INDUCTOR; SMT; SHIELDED; 2.2UH; 20%; 6.5A                                                                            |            |
| 24     | L2                                                                                                                 | -         | 1     | 74438357022                                                                                                         | WURTH ELECTRONICS INC                                                      | 2.2UH           | INDUCTOR; SMT; SHIELDED; 2.2UH; TOL=+/-20%; 5.2A                                                                     |            |
| 25     | L3                                                                                                                 | -         | 1     | VLF5010ST-1R0N2R5                                                                                                   | TDK                                                                        | 1UH             | INDUCTOR; SMT; MAGNETICALLY SHIELDED FERRITE BOBBIN CORE; 1UH; TOL=+/-30%; 2.7A; -40 DEGC TO +105 DEGC               |            |
| 26     | L4                                                                                                                 | -         | 1     | 74279223560                                                                                                         | WURTH ELECTRONICS INC                                                      |                 | 56 INDUCTOR; SMT; FERRITE-BEAD; 56 AT 100MHZ; 10A                                                                    |            |
| 27     | Q1                                                                                                                 | -         | 1     | SUM55P06-19L-E3                                                                                                     | VISHAY SILICONIX                                                           | SUM55P06-19L-E3 | TRAN; P-CHANNEL 60V D-S ENHANCEMENT MODE MOSFET; PCH; TO-263-3; PD-(3.75W); I-(-55A); V-(-60V)                       |            |

## MAX16923 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES                      | DNI/DNP QTY   | DNI/DNP QTY   | MFG PART #                                                         | MANUFACTURER                        | VALUE             | DESCRIPTION                                                                                                            | COMMENTS   |
|--------|------------------------------|---------------|---------------|--------------------------------------------------------------------|-------------------------------------|-------------------|------------------------------------------------------------------------------------------------------------------------|------------|
| 28     | Q2                           | -             | 1             | BSS138LT1G                                                         | ON SEMICONDUCTOR                    | BSS138LT1G        | TRAN; POWER MOSFET; N-CHANNEL; NCH; SOT-23; PD-(0.225W); I-(0.2A); V-(50V)                                             |            |
| 29     | Q3, Q6                       | -             | 2             | IRLML6346                                                          | INTERNATIONAL RECTIFIER             | IRLML6346         | TRAN; HEXFET POWER MOSFET; NCH; SOT-23; PD-(1.3W); I-(0.00025A); V-(30V)                                               |            |
| 30     | Q4                           | -             | 1             | SQ2310ES-T1_GE3                                                    | VISHAY SILICONIX                    | SQ2310ES-T1_GE3   | TRAN; NCH; SOT-23; PD-(2W); I-(6A); V-(20V)                                                                            |            |
| 31     | Q5                           | -             | 1             | BSS84                                                              | FAIRCHILD SEMICONDUCTOR             | BSS84             | ENHANCEMENT MODE FIELD EFFECT TRANSISTOR, P-CHANNEL, SOT-23, PD=0.36W, ID=-0.13A, VDSS=-50V, -55degC TO +150degC       |            |
| 32     | R1, R2, R8, R10, R12         | -             | 5             | CRCW0603330RFK                                                     | VISHAY DALE                         |                   | 330 RESISTOR; 0603; 330 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                             |            |
| 33     | R5                           | -             | 1             | ERJ-2GE0R00                                                        | PANASONIC                           |                   | 0 RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                 |            |
| 34     | R6                           | -             | 1             | CRCW060318K0FK                                                     | VISHAY DALE                         | 18K               | RESISTOR, 0603, 18K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                 |            |
| 35     | R9                           | -             | 1             | CRCW060382K0FK                                                     | VISHAY DALE                         | 82K               | RESISTOR, 0603, 82K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                 |            |
| 36     | R11, R14, R15                | -             | 3             | CRCW0603750RFK; ERJ-3EKF7500                                       | VISHAY DALE;PANASONIC               |                   | 750 RESISTOR, 0603, 750 OHM, 1%, 100PPM, 0.10W, THICK FILM                                                             |            |
| 37     | R13                          | -             | 1             | CRCW08058K20FK                                                     | VISHAY DALE                         | 8.2K              | RESISTOR; 0805; 8.2K OHM; 1%; 100PPM; 0.125W; THICK FILM                                                               |            |
| 38     | R16, R17, R31, R33           | -             | 4             | CRCW060310K0FK; ERJ-3EKF1002                                       | VISHAY DALE;PANASONIC               | 10K               | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                     |            |
| 39     | R18                          | -             | 1             | CRCW060330K0FK                                                     | VISHAY DALE                         | 30K               | RESISTOR; 0603; 30K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                 |            |
| 40     | R19                          | -             | 1             | CRCW060356K0FK                                                     | VISHAY DALE                         | 56K               | RESISTOR, 0603, 56K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                 |            |
| 41     | R20                          | -             | 1             | CRCW0603110KFK                                                     | VISHAY DALE                         | 110K              | RESISTOR, 0603, 110K, 1%, 100PPM, 0.10W, THICK FILM                                                                    |            |
| 42     | R21                          | -             | 1             | CRCW0603150KFK CRCW0603100KFK;                                     | VISHAY DALE                         | 150K              | RESISTOR, 0603, 150K OHM,1%, 100PPM, 0.10W, THICK FILM                                                                 |            |
| 43     | R22, R25-R28, R30, R32, R37  | -             | 8             | RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL | VISHAY DALE;YAGEO; YAGEO;PANASONIC  | 100K              | RESISTOR; 0603; 100K; 1%; 100PPM; 0.10W; THICK FILM                                                                    |            |
| 44 45  | R34 R36                      | - -           | 1 1           | CRCW06030000Z0 CRCW06031K00FK; ERJ-3EKF1001                        | VISHAY DALE VISHAY DALE;PANASONIC   | 1K                | 0 RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.1W; THICK FILM RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                |            |
| 46     | R50                          | -             | 1             | CRCW06031K40FK                                                     | VISHAY DALE                         | 1.4K              | RESISTOR; 0603; 1.4K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                 |            |
| 47     | TP_GND                       | -             | 1             | 5121                                                               | KEYSTONE                            | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; GREEN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
| 48     |                              | -             | 1             | MAX16923GTP A /V+                                                  | MAXIM                               | MAX16923GTP A /V+ | IC; PWRM; AUTOMOTIVE 4-OUTPUT DISPLAY POWER SOLUTION; TQFN20-EP; PACKAGE OUTLINE: 21-100172; LAND PATTERN: 90-0409     |            |
| 49     | U1 PCB                       | -             | 1             | MAX16923                                                           | MAXIM                               | PCB               | PCB:MAX16923                                                                                                           | -          |
| 50     | C3, C4                       | DNP           | 0             | GRM32ER71E226KE15; CL32B226KAJNFN; CL32B226KAJNNW;                 | MURATA;SAMSUNG ELECTRO-MECHANICS;TA | 22UF              | CAPACITOR; SMT (1210); CERAMIC CHIP; 22UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                              |            |
| 51     | C11, C12, C28, C29, C31, C35 | DNP           | 0             | TMK325B7226KM CGA3E3X7S2A104K080AB; C1608X7S2A104K080AB            | TDK;TDK                             | 0.1UF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S                            |            |
| 52     | C15, C26, C27, C30           | DNP           | 0             | GRJ32ER71H106KE11                                                  | MURATA                              | 10UF              | CAPACITOR; SMT (1210); CERAMIC CHIP; 10UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                              |            |
| 53     | C25                          | DNP           | 0             | MAL214699103E3                                                     | VISHAY BCCOMPONENTS                 | 100UF             | CAPACITOR; SMT; ALUMINUM-ELECTROLYTIC; 100UF; 50V; TOL=20%                                                             |            |
| 54     | D7                           | DNP           | 0             | BAS70-04FILM                                                       | STMICROELECTRONICS                  | BAS70-04          | DIODE, SCHOTTKY , SMALL SIGNAL, PIV=70V, IF(max)=0.070A, PD=0.25W                                                      |            |
| 55     | R3, R4, R23, R24             | DNP           | 0             | CRCW06030000Z0                                                     | VISHAY DALE                         |                   | 0 RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.1W; THICK FILM                                                                  |            |
| 56     | R35                          | DNP           | 0             | CRCW06031K00FK; ERJ-3EKF1001                                       | VISHAY DALE;PANASONIC               | 1K                | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                                                      |            |

## MAX16923 EV Kit Schematic

<!-- image -->

## MAX16923 EV Kit Schematic (continued)

<!-- image -->

## MAX16923 EV Kit Layout

MAX16923 EV Kit PCB Layout - Silk\_Top

<!-- image -->

MAX16923 EV Kit PCB Layout - Top

<!-- image -->

MAX16923 EV Kit PCB Layout - Internal2

<!-- image -->

MAX16923 EV Kit PCB Layout - Internal3

<!-- image -->

│

## MAX16923 EV Kit Layout (continued)

MAX16923 EV Kit PCB Layout - Bottom

<!-- image -->

MAX16923 EV Kit PCB Layout - Silk Bottom

<!-- image -->

│

## MAX16923 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION              | PAGES CHANGED   |
|-------------------|-----------------|--------------------------|-----------------|
|                 0 | 9/19            | Initial release          | -               |
|                 1 | 4/20            | Added MAX16926 to header | 1-8             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

<!-- image -->

│

Evaluates: MAX16923/MAX16926