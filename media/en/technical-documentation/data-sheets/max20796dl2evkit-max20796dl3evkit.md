<!-- lastmod 2022-08-04 -->
## MAX20796 Discrete Inductor Evaluation Kit

## General Description

The  MAX20796  Discrete  Inductor  evaluation  kit  (EV  kit) provides a proven design to evaluate the MAX20796 fullyintegrated, two-phase switching regulator. The MAX20766 can be installed on the EV kit for a three-phase switching regulator operation. The EV kit operates from a 4.5V to 16V input voltage range and supports an output voltage range of 1.8V to 5V. The board uses the MAX20796 on a proven eight-layer PCB design.

## Features

- ● 4.5V to 16V Input Voltage Range
- ● 1.8V to 5V Output Voltage Range
- ● Banana Jacks for Input and Output Voltage
- ● SMB Coaxial Cable Jacks for Output Voltage Measurement and SYNC Clock Input and Output
- ● Configurable Output Voltage and Compensation Parameters
- ● Adjustable Current Limit
- ● PMBus Header for Connection to the MAXPOWERTOOL002# Dongle
- ● FAULT and PG Outputs
- ● Enable Input and Enable Debounce Circuit
- ● Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX20796 and MAX20766

## Quick Start

## Required Equipment

- ● MAX20796 EV kit assembly
- ● One 12V DC power supply (PS1) capable of delivering 20A current
- ● Voltmeters

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Verify that a shunt is installed across jumpers JP1 and J13.
- 2) Make sure switches S1 and S2 are in the off position.
- 3) Turn on power-supply PS1 and set the supply to 12V, then disable the power supply.
- 4) Connect  the  positive  terminal  of  power-supply  PS1 to  the  J5  banana  jack  on  the  EV  kit.  Connect  the negative  terminal  of  the  power  supply  to  the  J8 banana jack.
- 5) Enable the power supply.
- 6) Toggle the S1 switch in the On position. The switch should turn GREEN.
- 7) Toggle the S2 switch in the On position. The switch should turn GREEN.
- 8) Verify that the voltage between the V OUT  and GND pins at jumper JP2 is 3.3V.
- 9) The EV kit is now ready for additional evaluation.

<!-- image -->

## MAX20796 Discrete Inductor Evaluation Kit

## Detailed Description of Hardware

The MAX20796 Discrete Inductor EV kit provides a proven design to evaluate the MAX20796, fully integrated, highly efficient,  two-phase  switching  regulator.  MAX20766  can be  installed  on  the  EV  kit  for  a  three-phase  switching regulator operation. The power input and load can be easily connected using the banana jacks and connectors provided for the input and output. Test points and connectors are provided to monitor and control the device signals. The EV  kit  operates  between  input  voltage  of  4.5V  to  16V. The EV kit regulates the output voltage between 1.8V to 5V. The EV kit must always be operated within SOA limit defined in MAX20796 data sheet.

## Two and Three-Phase Operation

The  schematic  is  drawn  for  3-phase  (3PH)  operation by  default.  For  2-phase  (2PH)  operation,  the  schematic annotates  the  changes  in  the  components'  values.  For 2PH operation, MAX20766 is DNI and two discrete inductors are used.

## AUX3P3 Power Supply for the EV Kit

The  EV  kit  AUX3P3  power  supply  enable  input  is controlled  by  switch  S1.  If  S1  is  in  the  off  position,  the EN  pin  is  forced  to  GND  and  the  device  regulation  is disabled. If S1 is in the on position, the EN pin is pulled up

## Table 1. JP1 Jumper Selection

| SHUNT POSITION   | AUX3P3 POWER SUPPLY TO THE BOARD   |
|------------------|------------------------------------|
| Installed*       | Connected                          |
| Not installed    | Not connected                      |

*Default position.

## Table 2. J1 and J2 Jumper Selection

| JUMPER CONNECTIONS                     | VLDOIN VOLTAGE                                 |
|----------------------------------------|------------------------------------------------|
| J1 not installed and J2 not installed* | 3.0V regulated by the EB pin and external NFET |
| J1 installed and J2 not installed      | V IN                                           |
| J1 not installed and J2 installed      | 3.3V powered by the AUX3P3 supply on board     |

## Table 3. J13 Jumper Selection: Pullup for SCL, SDA and ALERT pins

| SHUNT POSITION   | PULLUP TO 3.3V   |
|------------------|------------------|
| Installed*       | Enabled          |
| Not installed    | Disabled         |

*Default position.

## Evaluates: MAX20796 and MAX20766

to V IN  and the device regulation is enabled. A JP1 jumper is  also  provided  on  board  to  connect  or  disconnect  this power supply from the rest of the board. See Table 1 for JP1 settings.

## EN Input for the MAX20796

The device's  enable  input  is  controlled  by  switch  S2.  If S2 is in the off position, the EN pin is forced to GND and device regulation is disabled. If S2 is in the On position, the EN pin is pulled up to 3.3V and device regulation is enabled. Additionally, a test point (EN) is also provided to drive the EN pin.

## LDO Input voltage selection (VLDOIN)

The LDO input range for this device is 2.97V to 16V. This board offers options to choose the LDO input from 3.3V (AUX3P3 supply), V IN , and 3.0V regulated by the EB pin and external NFET. Jumpers J1 and J2 are used for this selection. See Table 2 for J1 and J2 settings.

## 3.3V Pullup for SCL, SDA and ALERT

Jumper J13 is used to pull up the SCL, SDA, and ALERT pins to 3.3V. See Table 3 for J13 settings.

│

## MAX20796 Discrete Inductor Evaluation Kit

## Bode Plot

A 10Ω resistor is installed between the VOUT sense point and SNSP pin to measure the bode plot. TP3 and TP32 test  points  are  provided  on  the  board  on  either  side  of the  10Ω  resistor  for  small  signal  injection  and  ability  to measure bode plot.

## Output Regulation

TP38  and  TP40  are  provided  to  measure  the  V OUT regulation.

## Efficiency Measurement

VinEffP and VinEffN are provided to measure V IN  during efficiency  measurement. Additionally,  TP9  and  TP10  are provided to measure V OUT during efficiency measurement.

For accurate efficiency measurements, remove R23, dis -able the 3.3V supply U2 with switch S1, and remove JP1 to supply the AUX3P3 rail from a separate supply.

## Evaluates: MAX20796 and MAX20766

## Pin-Strap Programmability

The  EV  kit  provides  an  option  to  configure  the  part for  desired  application  using  PGMx  resistor  values. Appropriate values of resistors R15-R20 can be used for desired application.

## SYNC Feature

The EV kit provides an SMB pin for external SYNC\_IN signal  so  that  switching  frequency  can  be  set  using  an external source. The SYNC\_IN pin has 50Ω termination on  the  EV  kit. An  SMB  pin  for  an  external  SYNC\_OUT signal is present so that the EV kit can act as master for any other MAX20796 device and for setting its switching frequency. The SYNC\_OUT signal is disabled by default on the EV kit.

## Ordering Information

| PART              | TYPE       |
|-------------------|------------|
| MAX20796DL2EVKIT# | 2PH EV kit |
| MAX20796DL3EVKIT# | 3PH EV kit |

#Denotes a RoHS-compliant device that may include lead that is exempt under the RoHS requirements.

## MAX20796 Discrete Inductor Evaluation Kit

Evaluates: MAX20796 and MAX20766

## MAX20796 Discrete Inductor EV Kit Bill of Materials -2 Phase

|   ITEM | REF_DES                            | DNI/DNP   |   QTY | MFG PART #                                                                                                                                   | MANUFACTURER                                                                         | VALUE   | DESCRIPTION                                                                                                 |
|--------|------------------------------------|-----------|-------|----------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|---------|-------------------------------------------------------------------------------------------------------------|
|      1 | ALERT_N, SCL, SDA, TP22-TP30, TP33 | -         |    13 | 5002                                                                                                                                         | KEYSTONE                                                                             | N/A     | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;       |
|      2 | C1, C11, C93, C94                  | -         |     4 | GMK105BJ104KV                                                                                                                                | TAIYO YUDEN                                                                          | 0.1UF   | CAPACITOR; SMT (0402); CERAMIC; 0.1UF; 35V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                        |
|      3 | C2, C12                            | -         |     2 | C1608X7R1H104K; ECJ-1VB1H104K; GRM188R71H104KA93; CGJ3E2X7R1H104K080AA; C1608X7R1H104K080AA; CL10B104KB8NNN; CL10B104KB8NFN                  | KEMET;TDK; PANASONIC; MURATA;TDK;TDK; SAMSUNG ELECTRO-MECHANICS; SAMSUNG ELECTRONICS | 0.1UF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V;TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;                  |
|      4 | C3, C4, C13, C14, C95, C96         | -         |     6 | C3216X5R1E226M160AB                                                                                                                          | TDK                                                                                  | 22UF    | CAPACITOR; SMT (1206); CERAMIC CHIP; 22UF; 25V; OL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R     |
|      5 | C5, C6, C15, C16, C84, C97, C98    | -         |     7 | C3216X5R1E476M160AC                                                                                                                          | TDK                                                                                  | 47UF    | CAPACITOR; SMT (1206); CERAMIC CHIP; 47UF; 25V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R ;  |
|      6 | C7                                 | -         |     1 | GRM155R71E472KA01                                                                                                                            | MURATA                                                                               | 4700PF  | CAPACITOR; SMT (0402); CERAMIC CHIP; 4700PF; 25V;TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                  |
|      7 | C8, C17, C25, C89-C92, C100        | -         |     8 | CGA2B3X7R1H104K050BB; C1005X7R1H104K050BB; GRM155R71H104KE14; GCM155R71H104KE02; C1005X7R1H104K050BE; UMK105B7104KV-FR; CGA2B3X7R1H104K050BE | TDK;TDK;MURATA; MURATA;TDK; TAIYO YUDEN;TDK                                          | 0.1UF   | CAPACITOR; SMT (0402); CERAMIC CHIP;0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                   |
|      8 | C9, C22, C23                       | -         |     3 | C1608X5R1E475K080AC; GRM188R61E475KE11                                                                                                       | TDK;MURATA                                                                           | 4.7UF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 25V;TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                    |
|      9 | C18, C24, C29, C30                 | -         |     4 | GRM155R60J475ME87; GRM153R60J475ME15                                                                                                         | MURATA;MURATA                                                                        | 4.7UF   | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 6.3V;TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                   |
|     10 | C19                                | -         |     1 | C0402C103K5RAC; GRM155R71H103KA88; C1005X7R1H103K050BE; CL05B103KB5NNN                                                                       | KEMET;MURATA;TDK; SAMSUNG ELECTRONIC                                                 | 0.01UF  | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 50V;TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                  |
|     11 | C20, C21, C99                      | -         |     3 | C0402C105K8PAC; CC0402KRX5R6BB105                                                                                                            | KEMET;YAGEO                                                                          | 1UF     | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 10V;TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                      |
|     12 | C26, C28, C101                     | -         |     3 | GRM155R71C224KA12                                                                                                                            | MURATA                                                                               | 0.22UF  | CAPACITOR; SMT (0402); CERAMIC; 0.22UF; 16V; TOL=10%;MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R     |
|     13 | C33, C45                           | -         |     2 | C0402C101J5GAC; NMC0402NPO101J; CC0402JRNPO9BN101; GRM1555C1H101JA01; C1005C0G1H101J050BA; CGA2B2C0G1H101J050BA                              | KEMET; NIC COMPONENTS CORP.; YAGEO PHICOMP; MURATA;TDK;TDK                           | 100PF   | CAPACITOR; SMT (0402); CERAMIC CHIP; 100PF; 50V;TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                    |
|     14 | C36, C37                           | -         |     2 | 16SEP330M                                                                                                                                    | PANASONIC                                                                            | 330UF   | CAPACITOR; THROUGH HOLE-RADIAL LEAD; ELECTROLYTIC- OSCON; 330UF; 16V; TOL=20%                               |
|     15 | C38-C41                            | -         |     4 | 20TQC100MYF                                                                                                                                  | PANASONIC                                                                            | 100UF   | CAPACITOR; SMT (7343); TANTALUM CHIP; 100UF; 20V;TOL=20%; TG=- 55 DEGC TO +105 DEGC LOW ESR                 |
|     16 | C42                                | -         |     1 | 6TPF330M9L                                                                                                                                   | PANASONIC                                                                            | 330UF   | CAPACITOR; SMT (7343); TANTALUM CHIP; 330UF; 6.3V; TOL=20%; MODEL=TPF SERIES; TG=-55 DEGC TO +105 DEGC      |
|     17 | C48, C51                           | -         |     2 | GRM155R61A103KA01                                                                                                                            | MURATA                                                                               | 0.01UF  | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 10V; TOL=10%;MODEL=GRM SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R |
|     18 | C55, C66, C72, C79, C81            | -         |     5 | EMK325ABJ107MM                                                                                                                               | TAIYO YUDEN                                                                          | 100UF   | CAPACITOR; SMT (1210); CERAMIC CHIP; 100UF; 16V;TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                    |
|     19 | C82, C83                           | -         |     2 | ANY                                                                                                                                          | ANY                                                                                  | 10UF    | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 16V; TOL=DEGC O +85 DEGC; TC=X5R; FORMFACTOR                     |
|     20 | C85, C87                           | -         |     2 | C0603C105K4RAC; GRM188R71C105KA12; C1608X7R1C105K080AC; EMK107B7105KA; GCM188R71C105KA64; CGA3E1X7R1C105K080AC                               | KEMET;MURATA; TDK;TAIYO YUDEN; MURATA;TDK                                            | 1UF     | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 16V; TOL=10%;MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R             |

│

## MAX20796 Discrete Inductor Evaluation Kit

Evaluates: MAX20796 and MAX20766

## MAX20796 Discrete Inductor EV Kit Bill of Materials -2 Phase (continued)

|   ITEM | REF_DES                 | DNI/DNP   |   QTY | MFG PART #                                    | MANUFACTURER                          | VALUE                      | DESCRIPTION                                                                                    |
|--------|-------------------------|-----------|-------|-----------------------------------------------|---------------------------------------|----------------------------|------------------------------------------------------------------------------------------------|
|     21 | C88                     | -         |     1 | GRM155R71H332KA01                             | MURATA                                | 3300PF                     | CAPACITOR; SMT (0402); CERAMIC CHIP; 3300PF; 50V;TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R     |
|     22 | C102                    | -         |     1 | GRM155R61A102KA01                             | MURATA                                | 1000PF                     | CAPACITOR; SMT (0402); CERAMIC; 1000PF; 10V;TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R           |
|     23 | D1, D2                  | -         |     2 | MBRS540T3G                                    | ON SEMICONDUCTOR                      | MBRS540T3                  | DIODE; SCH; SURFACE MOUNT SCHOTTKY POWER RECTIFIER; SMC; PIV=40V; IF=5A                        |
|     24 | H1-H4                   | -         |     4 | 2212                                          | KEYSTONE                              | 2212; MCH_SO_F_ HEX_6-32X1 | STANDOFF; FEMALE-THREADED; HEX; 6-32; 1IN; ALUMINUM                                            |
|     25 | H5-H8                   | -         |     4 | PHILLIPS-FILLISTER_ D4.3MM/6-32X1/4IN         | MAXIM                                 | 146721                     | MACHINE SCREW; PHILLIPS; FILLISTER; D4.3MM/6-32; 1/4IN; 18-8 STAINLESS STEEL                   |
|     26 | J1, J2, J13, JP1, JP2   | -         |     5 | PREC002SAAN-RC                                | SULLINS                               | PREC002SAAN-RC             | CONNECTOR; MALE; THROUGH HOLE; HEADER; STRAIGHT; 2PINS                                         |
|     27 | J3, J4, J7, J9          | -         |     4 | 131-3701-266                                  | JOHNSON COMPONENTS                    | 131-3701-266               | CONNECTOR; MALE; THROUGH HOLE; SMB JACK VERTICAL PCB MOUNT; STRAIGHT; 5PINS                    |
|     28 | J5, J8                  | -         |     2 | 6095                                          | KEYSTONE                              | 6095                       | CONNECTOR; FEMALE; PANELMOUNT; NON-INSULATED RECESSED HEAD BANANA JACK; STRAIGHT THROUGH; 1PIN |
|     29 | J6                      | -         |     1 | PJ-102AH                                      | CUI INC.                              | PJ-102AH                   | CONNECTOR; FEMALE; THROUGH HOLE; DC POWER JACK; RIGHT ANGLE; 3PINS                             |
|     30 | J10                     | -         |     1 | TSW-108-07-T-D                                | SAMTEC                                | TSW-108-07-T-D             | CONNECTOR; MALE; THROUGH HOLE; TSW SERIES;0.0125INCH SQUARE POST HEADER; STRAIGHT; 16PINS      |
|     31 | J11                     | -         |     1 | UPS-08-01-01-L-RA                             | SAMTEC                                | UPS-08-01-01-L-RA          | CONNECTOR; FEMALE; THROUGH HOLE; DUAL LEAF POWER HEADER; RIGHT ANGLE; 8PINS                    |
|     32 | L2, L3                  | -         |     2 | 744309047                                     | WURTH ELECTRONICS INC                 | 470NH                      | INDUCTOR; SMT; MAGNETICALLY SHIELDED; 470NH; TOL=+/-20%; 47.5A                                 |
|     33 | L4                      | -         |     1 | LPS6235-333MR                                 | COILCRAFT                             | 33UH                       | INDUCTOR; SMT; MAGNETICALLY SHIELDED; 33UH; TOL=+/-20%; 1.3A                                   |
|     34 | Q1                      | -         |     1 | SQA410EJ-T1_GE3                               | VISHAY SILICONIX                      | SQA410EJ-T1_GE3            | TRAN; AUTOMOTIVE N-CHANNEL MOSFET; NCH; SC70-6; PD-(13.6W); I-(7.8A); V-(20V)                  |
|     35 | Q2                      | -         |     1 | 2N7002                                        | NXP                                   | 2N7002                     | TRAN; N-CHANNEL TRENCH MOSFET; NCH; SOT-23; PD-(0.83W); I-(0.3A); V-(60V)                      |
|     36 | R1                      | -         |     1 | CRCW04023R00FK                                | VISHAY DALE                           | 3                          | RESISTOR; 0402; 3 OHM; 1%; 100PPM; 0.063W; THICK FILM                                          |
|     37 | R3-R5, R7, R10, R52-R59 | -         |    13 | CRCW04020000Z0EDHP; RCS04020000Z0             | VISHAY DRALORIC; VISHAY DALE          | 0                          | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.2W; THICK FILM                                            |
|     38 | R13                     | -         |     1 | CRCW040233R0FK                                | VISHAY DALE                           | 33                         | RESISTOR, 0402, 33 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                        |
|     39 | R14, R26                | -         |     2 | CRCW040249R9FKEDHP                            | VISHAY DRALORIC                       | 49.9                       | RESISTOR; 0402; 49.9 OHM; 1%; 100PPM; 0.2W; THICK FILM                                         |
|     40 | R15                     | -         |     1 | ERJ-2RKF1400                                  | PANASONIC                             | 140                        | RESISTOR; 0402; 140 OHM; 1%; 100PPM; 0.1W; THICK FILM                                          |
|     41 | R16                     | -         |     1 | CRCW04023012FK; CRCW040230K1FK                | VISHAY DALE; VISHAY DALE              | 30.1K                      | RESISTOR; 0402; 30.1K; 1%; 100PPM; 0.0625W; THICK FILM                                         |
|     42 | R17                     | -         |     1 | CRCW040237R4FK; ERJ-2RKF37R4                  | VISHAY DALE; PANASONIC                | 37.4                       | RESISTOR; 0402; 37.4 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                      |
|     43 | R18                     | -         |     1 | ERJ-2RKF1690                                  | PANASONIC                             | 169                        | RESISTOR; 0402; 169 OHM; 1%; 100PPM; 0.1W; THICK FILM                                          |
|     44 | R19                     | -         |     1 | CRCW0402976RFK                                | VISHAY                                | 976                        | RES; SMT (0402); 976; 1%; +/-100PPM/DEGC; 0.063W                                               |
|     45 | R20                     | -         |     1 | CRCW040245R3FKEDHP                            | VISHAY                                | 45.3                       | RES; SMT (0402); 45.3; 1%;+/-100PPM/DEGC; 0.2W                                                 |
|     46 | R21                     | -         |     1 | CRCW04021K40FK; RC0402FR-071K4L               | VISHAY DALE; YAGEO PHICOMP            | 1.4K                       | RESISTOR; 0402; 1.4K OHM;1%; 100PPM; 1/6W; THICK FILM                                          |
|     47 | R22                     | -         |     1 | CR0402-16W-52R3FT; CRCW040252R3FK             | VENKEL LTD.; VISHAY DALE              | 52.3                       | RESISTOR; 0402; 52.3 OHM;1%; 100PPM; 0.063W; THICK FILM                                        |
|     48 | R23                     | -         |     1 | CRCW04021K00FK; RC0402FR-071KL; MCR01MZPF1001 | VISHAY DALE; YAGEO PHICOMP; ROHM SEMI | 1K                         | RESISTOR; 0402; 1K; 1%;100PPM; 0.0625W; THICK FILM                                             |
|     49 | R25, R47                | -         |     2 | CRCW040210R0FK; 9C04021A10R0FL                | VISHAY DALE; YAGEO                    | 10                         | RESISTOR; 0402; 10 OHM;1%; 100PPM; 0.0625W; THICK FILM                                         |
|     50 | R28                     | -         |     1 | ERJ-8GEYJ101V                                 | PANASONIC                             | 100                        | RESISTOR; 1206; 100 OHM; 5%; 200PPM; 0.25W; THICK FILM                                         |
|     51 | R30                     | -         |     1 | ANY                                           | ANY                                   | 100                        | RESISTOR; 0402; 100 OHM; 1%;100PPM; 0.0625W; THICK FILM; FORMFACTOR                            |
|     52 | R31, R34, R36-R40, R44  | -         |     8 | CRCW0402100KFK; RC0402FR-07100KL              | VISHAY;YAGEO                          | 100K                       | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM                                          |
|     53 | R32, R46                | -         |     2 | CRCW0402150RFK; 9C04021A1500FL                | VISHAY DALE; YAGEO                    | 150                        | RESISTOR; 0402; 150 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                       |
|     54 | R33                     | -         |     1 | CRCW040237K4FK                                | VISHAY DALE                           | 37.4K                      | RESISTOR; 0402; 37.4K OHM; 1%; 100PPM; 0.063W; THICK FILM                                      |

## MAX20796 Discrete Inductor Evaluation Kit

Evaluates: MAX20796 and MAX20766

## MAX20796 Discrete Inductor EV Kit Bill of Materials -2 Phase (continued)

|   ITEM | REF_DES                                                         | DNI/DNP   |   QTY | MFG PART #                                                                                   | MANUFACTURER                                     | VALUE         | DESCRIPTION                                                                                                                             |
|--------|-----------------------------------------------------------------|-----------|-------|----------------------------------------------------------------------------------------------|--------------------------------------------------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------|
|     55 | R41, R42                                                        | -         |     2 | CRCW04022K00FK; RK73H1ETTP2001F                                                              | VISHAY DALE; KOA SPEER                           | 2K            | RESISTOR; 0402; 2K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                     |
|     56 | R43                                                             | -         |     1 | CRCW040210K0FK; RC0402FR-0710KL                                                              | VISHAY DALE; YAGEO PHICOMP                       | 10K           | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                    |
|     57 | R45                                                             | -         |     1 | CRCW0402221RFK                                                                               | VISHAY DALE                                      | 221           | RESISTOR; 0402; 221 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                                                                |
|     58 | R48                                                             | -         |     1 | CRCW0402499RFK                                                                               | VISHAY DALE                                      | 499           | RESISTOR; 0402; 499 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                                                                |
|     59 | S1, S2                                                          | -         |     2 | G12JPCF                                                                                      | NKK SWITCHES                                     | G12JPCF       | SWITCH; SPDT; SMT; STRAIGHT; 28V; FULLY ILLUMINATED ULTRA-MINIATURE TOGGLE; RCOIL=0 OHM; RINSULATION=500M OHM; NKK SWITCHES             |
|     60 | ST1, ST2                                                        | -         |     2 | 7808                                                                                         | KEYSTONE                                         | 7808          | TERMINAL; BODY LENGTH=0.67IN; BODY WIDTH=0.47IN; HEIGHT=0.45IN; SCRW; BRASS                                                             |
|     61 | SW1                                                             | -         |     1 | TL3301AF160QJ                                                                                | E-SWITCH                                         | TL3301AF160QJ | SWITCH; SPST; SMT; STRAIGHT; 250V; 0.05A; TACT SWITCH; RCOIL=0 OHM; RINSULATION=500M OHM;E-SWITCH                                       |
|     62 | TP3, TP21, TP32                                                 | -         |     3 | 5012                                                                                         | KEYSTONE                                         | N/A           | TEST POINT; PIN DIA=0.125IN;TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN;WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                   |
|     63 | TP4, TP8                                                        | -         |     2 | 5010                                                                                         | N/A                                              | 5010          | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE                                                                                       |
|     64 | TP5, TP9, TP15, TP34-TP36, TP38, TP41                           | -         |     8 | 5000                                                                                         | KEYSTONE                                         | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN;RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                         |
|     65 | TP6, TP10, TP37, TP39, TP40                                     | -         |     5 | 5001                                                                                         | KEYSTONE                                         | N/A           | TEST POINT; PIN DIA=0.1IN; TOTALLENGTH=0.3IN; BOARD HOLE=0.04IN;BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                        |
|     66 | TP7, TP11-TP14                                                  | -         |     5 | 5011                                                                                         | KEYSTONE                                         | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                 |
|     67 | TP31                                                            | -         |     1 | 5126                                                                                         | KEYSTONE                                         | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; GREEN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                 |
|     68 | U1                                                              | -         |     1 | MAX20796                                                                                     | MAXIM                                            | MAX20796      | EVKIT PART -IC; INTEGRATED; TWO-PHASE; SINGLE SUPPLY; STEP-DOWN SWITCHING REGULATOR; WITH OPTIONAL THERMALLY ENHANCED PACKAGE; FC2QFN35 |
|     69 | U2                                                              | -         |     1 | MAX17501EATB+                                                                                | MAXIM                                            | MAX17501EATB+ | IC; CONV; ULTRA-SMALL; HIGH-EFFICIENCY; SYNCHRONOUS STEP-DOWN DC-DC CONVERTER; TDFN10-EP                                                |
|     70 | U3                                                              | -         |     1 | NC7WZ38K8X                                                                                   | FAIRCHILD SEMICONDUCTOR                          | NC7WZ38K8X    | IC; NAND; TINY LOGIC UHS DUAL 2-INPUT NAND GATE; OPEN DRAIN OUTPUT; VSSOP8                                                              |
|     71 | U4                                                              | -         |     1 | NC7SZ14M5X                                                                                   | FAIRCHILD SEMICONDUCTOR                          | NC7SZ14M5X    | IC; INV; TINYLOGIC UHS INVERTER WITH SCHMITT TRIGGER INPUT; SOT23-5                                                                     |
|     72 | U5                                                              | -         |     1 | NC7WZ02K8X                                                                                   | FAIRCHILD SEMICONDUCTOR                          | NC7WZ02K8X    | IC; NOR; TINYLOGIC UHS DUAL 2-INPUT NOR GATE;US8-8                                                                                      |
|     73 | PCB                                                             | -         |     1 | MAX20796DL                                                                                   | MAXIM                                            | PCB           | PCB:MAX20796DL                                                                                                                          |
|     74 | C10                                                             | DNP       |     0 | C1608X5R1E475K080AC; GRM188R61E475KE11                                                       | TDK;MURATA                                       | 4.7UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 25V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                               |
|     75 | C27, C34, C43                                                   | DNP       |     0 | 6TPF330M9L                                                                                   | PANASONIC                                        | 330UF         | CAPACITOR; SMT (7343); TANTALUM CHIP; 330UF; 6.3V; TOL=20%; MODEL=TPF SERIES; TG=-55 DEGC TO +105 DEGC                                  |
|     76 | C31                                                             | DNP       |     0 | C0402X5R6R3-105KNP; C1005X5R0J105K050BB; GRM155R60J105KE19; JMK105BJ105KV-F; JMK105BJ105KVHF | VENKEL LTD; TDK;MURATA; TAIYO YUDEN; TAIYO YUDEN | 1UF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R;                                               |
|     77 | C32                                                             | DNP       |     0 | GRM155R71C224KA12                                                                            | MURATA                                           | 0.22UF        | CAPACITOR; SMT (0402); CERAMIC; 0.22UF; 16V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                                |
|     78 | C52, C53, C58, C60, C62, C64, C65, C70, C71, C73, C77, C78, C80 | DNP       |     0 | EMK325ABJ107MM                                                                               | TAIYO YUDEN                                      | 100UF         | CAPACITOR; SMT (1210); CERAMIC CHIP; 100UF; 16V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                               |
|     79 | L1                                                              | DNP       |     0 | 744309047                                                                                    | WURTH ELECTRONICS INC                            | 470NH         | INDUCTOR; SMT; MAGNETICALLY SHIELDED; 470NH; TOL=+/-20%; 47.5A                                                                          |
|     80 | R2, R8, R9, R11, R12, R27, R29                                  | DNP       |     0 | CRCW04020000Z0EDHP; RCS04020000Z0                                                            | VISHAY DRALORIC; VISHAY DALE                     | 0             | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.2W; THICK FILM                                                                                     |
|     81 | R49                                                             | DNP       |     0 | CRCW04024R70FK                                                                               | VISHAY DALE                                      | 4.7           | RESISTOR, 0402, 4.7 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                |
|     82 | R50                                                             | DNP       |     0 | CRCW040210R0FK; 9C04021A10R0FL                                                               | VISHAY DALE; YAGEO                               | 10            | RESISTOR; 0402; 10 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                                                                 |
|     83 | U6 TOTAL                                                        | DNP       |     0 | MAX20766                                                                                     | MAXIM                                            | MAX20766      | EVKIT PART-IC; HPQFN16; MAX20766; PACKAGE OUTLINE: 21-0986                                                                              |

187

## MAX20796 Discrete Inductor Evaluation Kit

Evaluates: MAX20796 and MAX20766

## MAX20796 Discrete Inductor EV Kit Bill of Materials -3 Phase

|   ITEM | REF_DES                            | DNI/DNP   |   QTY | MFG PART #                                                                                                                                   | MANUFACTURER                                                                         | VALUE   | DESCRIPTION                                                                                                            |
|--------|------------------------------------|-----------|-------|----------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|---------|------------------------------------------------------------------------------------------------------------------------|
|      1 | ALERT_N, SCL, SDA, TP22-TP30, TP33 | -         |    13 | 5002                                                                                                                                         | KEYSTONE                                                                             | N/A     | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                  |
|      2 | C1, C11, C93, C94                  | -         |     4 | GMK105BJ104KV                                                                                                                                | TAIYO YUDEN                                                                          | 0.1UF   | CAPACITOR; SMT (0402); CERAMIC; 0.1UF; 35V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                   |
|      3 | C2, C12                            | -         |     2 | C0603C104K5RAC; C1608X7R1H104K; ECJ-1VB1H104K; GRM188R71H104KA93; CGJ3E2X7R1H104K080AA; C1608X7R1H104K080AA; CL10B104KB8NNN; CL10B104KB8NFN  | KEMET;TDK; PANASONIC; MURATA;TDK;TDK; SAMSUNG ELECTRO-MECHANICS; SAMSUNG ELECTRONICS | 0.1UF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;                            |
|      4 | C3, C4, C13, C14, C95, C96         | -         |     6 | C3216X5R1E226M160AB                                                                                                                          | TDK                                                                                  | 22UF    | CAPACITOR; SMT (1206); CERAMIC CHIP; 22UF; 25V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R               |
|      5 | C5, C6, C15, C16, C84, C97, C98    | -         |     7 | C3216X5R1E476M160AC                                                                                                                          | TDK                                                                                  | 47UF    | CAPACITOR; SMT (1206); CERAMIC CHIP; 47UF; 25V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R ;             |
|      6 | C7                                 | -         |     1 | GRM155R71E472KA01                                                                                                                            | MURATA                                                                               | 4700PF  | CAPACITOR; SMT (0402); CERAMIC CHIP; 4700PF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                            |
|      7 | C8, C17, C25, C89-C92, C100        | -         |     8 | CGA2B3X7R1H104K050BB; C1005X7R1H104K050BB; GRM155R71H104KE14; GCM155R71H104KE02; C1005X7R1H104K050BE; UMK105B7104KV-FR; CGA2B3X7R1H104K050BE | TDK;TDK;MURATA; MURATA TDK; TAIYO YUDEN;TDK                                          | 0.1UF   | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                             |
|      8 | C9, C22, C23                       | -         |     3 | C1608X5R1E475K080AC; GRM188R61E475KE11                                                                                                       | TDK;MURATA                                                                           | 4.7UF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 25V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                              |
|      9 | C18, C24, C29, C30                 | -         |     4 | GRM155R60J475ME87; GRM153R60J475ME15                                                                                                         | MURATA;MURATA                                                                        | 4.7UF   | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 6.3V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                             |
|     10 | C19                                | -         |     1 | C0402C103K5RAC; GRM155R71H103KA88; C1005X7R1H103K050BE; CL05B103KB5NNN                                                                       | KEMET;MURATA;TDK; SAMSUNG ELECTRONIC                                                 | 0.01UF  | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                            |
|     11 | C20, C21, C99                      | -         |     3 | C0402C105K8PAC; CC0402KRX5R6BB105                                                                                                            | KEMET;YAGEO                                                                          | 1UF     | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 10V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                |
|     12 | C26, C28, C101                     | -         |     3 | GRM155R71C224KA12                                                                                                                            | MURATA                                                                               | 0.22UF  | CAPACITOR; SMT (0402); CERAMIC; 0.22UF; 16V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R               |
|     13 | C33, C45                           | -         |     2 | C0402C101J5GAC; NMC0402NPO101J; CC0402JRNPO9BN101; GRM1555C1H101JA01; C1005C0G1H101J050BA; CGA2B2C0G1H101J050BA                              | KEMET; NIC COMPONENTS CORP.; YAGEO PHICOMP; MURATA;TDK;TDK                           | 100PF   | CAPACITOR; SMT (0402); CERAMIC CHIP; 100PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                              |
|     14 | C36, C37                           | -         |     2 | 16SEP330M                                                                                                                                    | PANASONIC                                                                            | 330UF   | CAPACITOR; THROUGH HOLE-RADIAL LEAD; ELECTROLYTIC-OSCON; 330UF; 16V; TOL=20%                                           |
|     15 | C38-C41                            | -         |     4 | 20TQC100MYF                                                                                                                                  | PANASONIC                                                                            | 100UF   | CAPACITOR; SMT (7343); TANTALUM CHIP; 100UF; 20V; TOL=20%; TG=-55 DEGC TO +105 DEGC LOW ESR                            |
|     16 | C42                                | -         |     1 | 6TPF330M9L                                                                                                                                   | PANASONIC                                                                            | 330UF   | CAPACITOR; SMT (7343); TANTALUM CHIP; 330UF; 6.3V; TOL=20%; MODEL=TPF SERIES; TG=-55 DEGC TO +105 DEGC                 |
|     17 | C48, C51                           | -         |     2 | GRM155R61A103KA01                                                                                                                            | MURATA                                                                               | 0.01UF  | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 10V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R           |
|     18 | C55, C66, C72, C79, C81            | -         |     5 | EMK325ABJ107MM                                                                                                                               | TAIYO YUDEN                                                                          | 100UF   | CAPACITOR; SMT (1210); CERAMIC CHIP; 100UF; 16V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                              |
|     19 | C82, C83                           | -         |     2 | ANY                                                                                                                                          | ANY                                                                                  | 10UF    | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 16V; TOL=20%; MODEL=GRM SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR |
|     20 | C85, C87                           | -         |     2 | C0603C105K4RAC; GRM188R71C105KA12; C1608X7R1C105K080AC; EMK107B7105KA; GCM188R71C105KA64; CGA3E1X7R1C105K080AC                               | KEMET;MURATA; TDK;TAIYO YUDEN; MURATA;TDK                                            | 1UF     | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 16V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                       |

│

## MAX20796 Discrete Inductor Evaluation Kit

Evaluates: MAX20796 and MAX20766

## MAX20796 Discrete Inductor EV Kit Bill of Materials -3 Phase (continued)

|   ITEM | REF_DES                 | DNI/DNP   |   QTY | MFG PART #                                    | MANUFACTURER                          | VALUE                      | DESCRIPTION                                                                                    |
|--------|-------------------------|-----------|-------|-----------------------------------------------|---------------------------------------|----------------------------|------------------------------------------------------------------------------------------------|
|     21 | C88                     | -         |     1 | GRM155R71H332KA01                             | MURATA                                | 3300PF                     | CAPACITOR; SMT (0402); CERAMIC CHIP; 3300PF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R    |
|     22 | C102                    | -         |     1 | GRM155R61A102KA01                             | MURATA                                | 1000PF                     | CAPACITOR; SMT (0402); CERAMIC; 1000PF; 10V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R          |
|     23 | D1, D2                  | -         |     2 | MBRS540T3G                                    | ON SEMICONDUCTOR                      | MBRS540T3                  | DIODE; SCH; SURFACE MOUNT SCHOTTKY POWER RECTIFIER; SMC; PIV=40V; IF=5A                        |
|     24 | H1-H4                   | -         |     4 | 2212                                          | KEYSTONE                              | 2212; MCH_SO_F_ HEX_6-32X1 | STANDOFF; FEMALE-THREADED; HEX; 6-32; 1IN; ALUMINUM                                            |
|     25 | H5-H8                   | -         |     4 | PHILLIPS-FILLISTER_ D4.3MM/6-32X1/4IN         | MAXIM                                 | 146721                     | MACHINE SCREW; PHILLIPS; FILLISTER; D4.3MM/6-32; 1/4IN; 18-8 STAINLESS STEEL                   |
|     26 | J1, J2, J13, JP1, JP2   | -         |     5 | PREC002SAAN-RC                                | SULLINS                               | PREC002SAAN-RC             | CONNECTOR; MALE; THROUGH HOLE; HEADER; STRAIGHT; 2PINS                                         |
|     27 | J3, J4, J7, J9          | -         |     4 | 131-3701-266                                  | JOHNSON COMPONENTS                    | 131-3701-266               | CONNECTOR; MALE; THROUGH HOLE; SMB JACK VERTICAL PCB MOUNT; STRAIGHT; 5PINS                    |
|     28 | J5, J8                  | -         |     2 | 6095                                          | KEYSTONE                              | 6095                       | CONNECTOR; FEMALE; PANELMOUNT; NON-INSULATED RECESSED HEAD BANANA JACK; STRAIGHT THROUGH; 1PIN |
|     29 | J6                      | -         |     1 | PJ-102AH                                      | CUI INC.                              | PJ-102AH                   | CONNECTOR; FEMALE; THROUGH HOLE; DC POWER JACK; RIGHT ANGLE; 3PINS                             |
|     30 | J10                     | -         |     1 | TSW-108-07-T-D                                | SAMTEC                                | TSW-108-07-T-D             | CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; 0.0125INCH SQUARE POST HEADER; STRAIGHT; 16PINS     |
|     31 | J11                     | -         |     1 | UPS-08-01-01-L-RA                             | SAMTEC                                | UPS-08-01-01-L-RA          | CONNECTOR; FEMALE; THROUGH HOLE; DUAL LEAF POWER HEADER; RIGHT ANGLE; 8PINS                    |
|     32 | L1-L3                   | -         |     3 | 744309047                                     | WURTH ELECTRONICS INC                 | 470NH                      | INDUCTOR; SMT; MAGNETICALLY SHIELDED; 470NH; TOL=+/-20%; 47.5A                                 |
|     33 | L4                      | -         |     1 | LPS6235-333MR                                 | COILCRAFT                             | 33UH                       | INDUCTOR; SMT; MAGNETICALLY SHIELDED; 33UH; TOL=+/-20%; 1.3A                                   |
|     34 | Q1                      | -         |     1 | SQA410EJ-T1_GE3                               | VISHAY SILICONIX                      | SQA410EJ-T1_GE3            | TRAN; AUTOMOTIVE N-CHANNEL MOSFET; NCH; SC70-6; PD-(13.6W); I-(7.8A); V-(20V)                  |
|     35 | Q2                      | -         |     1 | 2N7002                                        | NXP                                   | 2N7002                     | TRAN; N-CHANNEL TRENCH MOSFET; NCH; SOT-23; PD-(0.83W); I-(0.3A); V-(60V)                      |
|     36 | R1                      | -         |     1 | CRCW04023R00FK                                | VISHAY DALE                           | 3                          | RESISTOR; 0402; 3 OHM; 1%; 100PPM; 0.063W; THICK FILM                                          |
|     37 | R3-R5, R7, R10, R54-R59 | -         |    11 | CRCW04020000Z0EDHP; RCS04020000Z0             | VISHAY DRALORIC; VISHAY DALE          | 0                          | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.2W; THICK FILM                                            |
|     38 | R13                     | -         |     1 | CRCW040233R0FK                                | VISHAY DALE                           | 33                         | RESISTOR, 0402, 33 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                        |
|     39 | R14, R26                | -         |     2 | CRCW040249R9FKEDHP                            | VISHAY DRALORIC                       | 49.9                       | RESISTOR; 0402; 49.9 OHM; 1%; 100PPM; 0.2W; THICK FILM                                         |
|     40 | R15                     | -         |     1 | ERJ-2RKF1400                                  | PANASONIC                             | 140                        | RESISTOR; 0402; 140 OHM; 1%; 100PPM; 0.1W; THICK FILM                                          |
|     41 | R16                     | -         |     1 | CRCW04023012FK; CRCW040230K1FK                | VISHAY DALE; VISHAY DALE              | 30.1K                      | RESISTOR; 0402; 30.1K; 1%; 100PPM; 0.0625W; THICK FILM                                         |
|     42 | R17                     | -         |     1 | CRCW040237R4FK; ERJ-2RKF37R4                  | VISHAY DALE; PANASONIC                | 37.4                       | RESISTOR; 0402; 37.4 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                      |
|     43 | R18                     | -         |     1 | ERJ-2RKF1690                                  | PANASONIC                             | 169                        | RESISTOR; 0402; 169 OHM; 1%; 100PPM; 0.1W; THICK FILM                                          |
|     44 | R19                     | -         |     1 | CRCW0402976RFK                                | VISHAY                                | 976                        | RES; SMT (0402); 976; 1%; +/-100PPM/DEGC; 0.063W                                               |
|     45 | R20                     | -         |     1 | CRCW040245R3FKEDHP                            | VISHAY                                | 45.3                       | RES; SMT (0402); 45.3; 1%; +/-100PPM/DEGC; 0.2W                                                |
|     46 | R21                     | -         |     1 | CRCW04021K40FK; RC0402FR-071K4L               | VISHAY DALE; YAGEO PHICOMP            | 1.4K                       | RESISTOR; 0402; 1.4K OHM; 1%; 100PPM; 1/6W; THICK FILM                                         |
|     47 | R22                     | -         |     1 | CR0402-16W-52R3FT; CRCW040252R3FK             | VENKEL LTD.; VISHAY DALE              | 52.3                       | RESISTOR; 0402; 52.3 OHM; 1%; 100PPM; 0.063W; THICK FILM                                       |
|     48 | R23                     | -         |     1 | CRCW04021K00FK; RC0402FR-071KL; MCR01MZPF1001 | VISHAY DALE; YAGEO PHICOMP; ROHM SEMI | 1K                         | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM                                            |
|     49 | R25, R47                | -         |     2 | CRCW040210R0FK; 9C04021A10R0FL                | VISHAY DALE; YAGEO                    | 10                         | RESISTOR; 0402; 10 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                        |
|     50 | R28                     | -         |     1 | ERJ-8GEYJ101V                                 | PANASONIC                             | 100                        | RESISTOR; 1206; 100 OHM; 5%; 200PPM; 0.25W; THICK FILM                                         |
|     51 | R30                     | -         |     1 | ANY                                           | ANY                                   | 100                        | RESISTOR; 0402; 100 OHM; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                           |
|     52 | R31, R34, R36-R40, R44  | -         |     8 | CRCW0402100KFK; RC0402FR-07100KL              | VISHAY;YAGEO                          | 100K                       | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM                                          |
|     53 | R32, R46                | -         |     2 | CRCW0402150RFK; 9C04021A1500FL                | VISHAY DALE; YAGEO                    | 150                        | RESISTOR; 0402; 150 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                       |
|     54 | R33                     | -         |     1 | CRCW040237K4FK                                | VISHAY DALE                           | 37.4K                      | RESISTOR; 0402; 37.4K OHM; 1%; 100PPM; 0.063W; THICK FILM                                      |

## MAX20796 Discrete Inductor Evaluation Kit

Evaluates: MAX20796 and MAX20766

## MAX20796 Discrete Inductor EV Kit Bill of Materials -3 Phase (continued)

|   ITEM | REF_DES                                                         | DNI/DNP   |   QTY | MFG PART #                                                                                   | MANUFACTURER                                     | VALUE         | DESCRIPTION                                                                                                                             |
|--------|-----------------------------------------------------------------|-----------|-------|----------------------------------------------------------------------------------------------|--------------------------------------------------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------|
|     55 | R41, R42                                                        | -         |     2 | CRCW04022K00FK; RK73H1ETTP2001F                                                              | VISHAY DALE; KOA SPEER                           | 2K            | RESISTOR; 0402; 2K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                     |
|     56 | R43                                                             | -         |     1 | CRCW040210K0FK; RC0402FR-0710KL                                                              | VISHAY DALE; YAGEO PHICOMP                       | 10K           | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                    |
|     57 | R45                                                             | -         |     1 | CRCW0402221RFK                                                                               | VISHAY DALE                                      | 221           | RESISTOR; 0402; 221 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                                                                |
|     58 | R48                                                             | -         |     1 | CRCW0402499RFK                                                                               | VISHAY DALE                                      | 499           | RESISTOR; 0402; 499 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                                                                |
|     59 | R49                                                             | -         |     1 | CRCW04024R70FK                                                                               | VISHAY DALE                                      | 4.7           | RESISTOR, 0402, 4.7 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                |
|     60 | S1, S2                                                          | -         |     2 | G12JPCF                                                                                      | NKK SWITCHES                                     | G12JPCF       | SWITCH; SPDT; SMT; STRAIGHT; 28V; FULLY ILLUMINATED ULTRA-MINIATURE TOGGLE; RCOIL=0 OHM; RINSULATION=500M OHM; NKK SWITCHES             |
|     61 | ST1, ST2                                                        | -         |     2 | 7808                                                                                         | KEYSTONE                                         | 7808          | TERMINAL; BODY LENGTH=0.67IN; BODY WIDTH=0.47IN; HEIGHT=0.45IN; SCRW; BRASS                                                             |
|     62 | SW1                                                             | -         |     1 | TL3301AF160QJ                                                                                | E-SWITCH                                         | TL3301AF160QJ | SWITCH; SPST; SMT; STRAIGHT; 250V; 0.05A; TACT SWITCH; RCOIL=0 OHM; RINSULATION=500M OHM; E-SWITCH                                      |
|     63 | TP3, TP21, TP32                                                 | -         |     3 | 5012                                                                                         | KEYSTONE                                         | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                 |
|     64 | TP4, TP8                                                        | -         |     2 | 5010                                                                                         | N/A                                              | 5010          | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE                                                                                       |
|     65 | TP5, TP9, TP15, TP34-TP36, TP38, TP41                           | -         |     8 | 5000                                                                                         | KEYSTONE                                         | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                        |
|     66 | TP6, TP10, TP37, TP39, TP40                                     | -         |     5 | 5001                                                                                         | KEYSTONE                                         | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                      |
|     67 | TP7, TP11-TP14                                                  | -         |     5 | 5011                                                                                         | KEYSTONE                                         | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                 |
|     68 | TP31                                                            | -         |     1 | 5126                                                                                         | KEYSTONE                                         | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; GREEN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                 |
|     69 | U1                                                              | -         |     1 | MAX20796                                                                                     | MAXIM                                            | MAX20796      | EVKIT PART -IC; INTEGRATED; TWO-PHASE; SINGLE SUPPLY; STEP-DOWN SWITCHING REGULATOR; WITH OPTIONAL THERMALLY ENHANCED PACKAGE; FC2QFN35 |
|     70 | U2                                                              | -         |     1 | MAX17501EATB+                                                                                | MAXIM                                            | MAX17501EATB+ | IC; CONV; ULTRA-SMALL; HIGH-EFFICIENCY; SYNCHRONOUS STEP-DOWN DC-DC CONVERTER; TDFN10-EP                                                |
|     71 | U3                                                              | -         |     1 | NC7WZ38K8X                                                                                   | FAIRCHILD SEMICONDUCTOR                          | NC7WZ38K8X    | IC; NAND; TINY LOGIC UHS DUAL 2-INPUT NAND GATE; OPEN DRAIN OUTPUT; VSSOP8                                                              |
|     72 | U4                                                              | -         |     1 | NC7SZ14M5X                                                                                   | FAIRCHILD SEMICONDUCTOR                          | NC7SZ14M5X    | IC; INV; TINYLOGIC UHS INVERTER WITH SCHMITT TRIGGER INPUT; SOT23-5                                                                     |
|     73 | U5                                                              | -         |     1 | NC7WZ02K8X                                                                                   | FAIRCHILD SEMICONDUCTOR                          | NC7WZ02K8X    | IC; NOR; TINYLOGIC UHS DUAL 2-INPUT NOR GATE; US8-8                                                                                     |
|     74 | U6                                                              | -         |     1 | MAX20766                                                                                     | MAXIM                                            | MAX20766      | EVKIT PART-IC; HPQFN16; MAX20766; PACKAGE OUTLINE: 21-0986                                                                              |
|     75 | PCB                                                             | -         |     1 | MAX20796DL                                                                                   | MAXIM                                            | PCB           | PCB:MAX20796DL                                                                                                                          |
|     76 | C10                                                             | DNP       |     0 | C1608X5R1E475K080AC; GRM188R61E475KE11                                                       | TDK;MURATA                                       | 4.7UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 25V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                               |
|     77 | C27, C34, C43                                                   | DNP       |     0 | 6TPF330M9L                                                                                   | PANASONIC                                        | 330UF         | CAPACITOR; SMT (7343); TANTALUM CHIP; 330UF; 6.3V; TOL=20%; MODEL=TPF SERIES; TG=-55 DEGC TO +105 DEGC                                  |
|     78 | C31                                                             | DNP       |     0 | C0402X5R6R3-105KNP; C1005X5R0J105K050BB; GRM155R60J105KE19; JMK105BJ105KV-F; JMK105BJ105KVHF | VENKEL LTD; TDK;MURATA; TAIYO YUDEN; TAIYO YUDEN | 1UF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R;                                               |
|     79 | C32                                                             | DNP       |     0 | GRM155R71C224KA12                                                                            | MURATA                                           | 0.22UF        | CAPACITOR; SMT (0402); CERAMIC; 0.22UF; 16V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                                |
|     80 | C52, C53, C58, C60, C62, C64, C65, C70, C71, C73, C77, C78, C80 | DNP       |     0 | EMK325ABJ107MM                                                                               | TAIYO YUDEN                                      | 100UF         | CAPACITOR; SMT (1210); CERAMIC CHIP; 100UF; 16V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                               |
|     81 | R2, R8, R9, R11, R12, R27, R29, R52, R53                        | DNP       |     0 | CRCW04020000Z0EDHP; RCS04020000Z0                                                            | VISHAY DRALORIC; VISHAY DALE                     | 0             | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.2W; THICK FILM                                                                                     |
|     82 | R50                                                             |           |     0 | CRCW040210R0FK; 9C04021A10R0FL                                                               | VISHAY DALE;YAGEO                                | 10            | RESISTOR; 0402; 10 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                                                                 |
|        |                                                                 | DNP       |       |                                                                                              |                                                  |               |                                                                                                                                         |

## MAX20796 Discrete Inductor EV Kit Schematic

<!-- image -->

Evaluates: MAX20796 and MAX20766

## MAX20796 Discrete Inductor EV Kit Schematic (continued)

<!-- image -->

│

## MAX20796 Discrete Inductor EV Kit Schematic (continued)

<!-- image -->

│

Evaluates: MAX20796 and MAX20766

## MAX20796 Discrete Inductor EV Kit Schematic (continued)

<!-- image -->

│

## MAX20796 Discrete Inductor EV Kit Schematic (continued)

<!-- image -->

│

## MAX20796 Discrete Inductor Evaluation Kit

Evaluates: MAX20796 and MAX20766

## MAX20796 Discrete Inductor EV Kit PCB Layout Diagrams

<!-- image -->

MAX20796 EV Kit PCB Layout-Top Silkscreen

│

## MAX20796 Discrete Inductor Evaluation Kit

Evaluates: MAX20796 and MAX20766

## MAX20796 Discrete Inductor EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX20796 EV Kit PCB Layout-Top

│

## MAX20796 Discrete Inductor Evaluation Kit

Evaluates: MAX20796 and MAX20766

## MAX20796 Discrete Inductor EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX20796 EV Kit PCB Layout-Level 2 GND

│

## MAX20796 Discrete Inductor Evaluation Kit

Evaluates: MAX20796 and MAX20766

## MAX20796 Discrete Inductor EV Kit PCB Layout Diagrams (continued)

MAX20796 EV Kit PCB Layout-Level 3 SIG

<!-- image -->

│

## MAX20796 Discrete Inductor Evaluation Kit

Evaluates: MAX20796 and MAX20766

## MAX20796 Discrete Inductor EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX20796 EV Kit PCB Layout-Level 4 PWR

│

## MAX20796 Discrete Inductor Evaluation Kit

Evaluates: MAX20796 and MAX20766

## MAX20796 Discrete Inductor EV Kit PCB Layout Diagrams (continued)

O

<!-- image -->

MAX20796 EV Kit PCB Layout-Level 5 PWR

│

## MAX20796 Discrete Inductor Evaluation Kit

Evaluates: MAX20796 and MAX20766

## MAX20796 Discrete Inductor EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX20796 EV Kit PCB Layout-Level 6 SIG

│

## MAX20796 Discrete Inductor Evaluation Kit

Evaluates: MAX20796 and MAX20766

## MAX20796 Discrete Inductor EV Kit PCB Layout Diagrams (continued)

O

<!-- image -->

MAX20796 EV Kit PCB Layout-Level 7 GND

│

Evaluates: MAX20796 and MAX20766

## MAX20796 Discrete Inductor EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX20796 EV Kit PCB Layout-Bottom

│

Evaluates: MAX20796 and MAX20766

## MAX20796 Discrete Inductor EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX20796 EV Kit PCB Layout-Bottom Silkscreen

│

## MAX20796 Discrete Inductor Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                       | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------------|-----------------|
|                 0 | 6/19            | Initial release                                                   | -               |
|                 1 | 4/20            | Updated Detailed Description of Hardware (Efficiency Measurement) | 3               |

For information on other Maxim Integrated products, visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX20796 and MAX20766