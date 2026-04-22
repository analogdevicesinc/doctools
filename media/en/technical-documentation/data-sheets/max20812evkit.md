<!-- lastmod 2024-02-22 -->
<!-- image -->

## Evaluates: MAX20812/MAX20812T

## General Description

The  MAX20812  evaluation  kit  (EV  kit)  is  a  reference platform  designed  for  the  evaluation  of  the  MAX20812/ MAX20812T, a dual-output, compact, low-cost, fully integrated, highly efficient, step-down DC-DC switching regu -lator IC. The IC is available in a 21-pin, 3.5mm x 4.6mm, 0.5mm pitch, FC2QFN package. This EV kit can deliver up  to  6A  load  per  output.  For  the  MAX20812,  the  two outputs can be connected as a single-output, dual-phase regulator that supports up to 12A load current. Refer to the MAX20812 IC data sheet for more information.

The EV kit comprises a fully assembled and tested PCB implementation  of  the  MAX20812/MAX20812T.  Jumper pins, test points, and input/output connectors are included for flexibility and convenience in a wide range of applications.

## MAX20812 EV Kit Board

<!-- image -->

319-100620; Rev 3; 10/22

©

## MAX20812 Evaluation Kit

## Benefits and Features

- 2.7V to 16V Input Voltage Range
- 0.5V to 5.8V Output Voltage Range
- High Efficiency and Power Density
- Low Component Count
- Dual-Output (MAX20812/MAX20812T) or SingleOutput Dual-Phase Operation (MAX20812)
- Optimized Performance
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX20812 Evaluation Kit

## Quick Start

## Required Equipment

- MAX20812 EV Kit
- 2.7V to 16V Power Supply with Optional 3.3V External Power Supply
- 0 to 12A Load
- Digital Voltmeters
- Oscilloscope and Probes

## Procedure

The EV kit is fully assembled and tested, and is preset with MAX20812/MAX20812T dual-output operation, having 1V on rail 1 and 1.8V on rail 2. Use the following steps to verify board operation.

For dual-output operation (MAX20812/MAX20812T):

- 1) Connect a powered-off 2.7V to 16V input supply to J5 (positive  terminal)  and  J8  (negative  terminal).  Optionally, connect  supply  sense  leads  to  TP5  (positive  sense) and TP6 (negative sense) for best accuracy. If external bias  is  preferred,  connect  a  powered-off  3.3V  power supply to J32 (positive terminal) and J33 (negative ter -minal) with jumper J34 installed.
- 2) Connect the load to edge connector J12 for rail 1 or J13 for rail 2 (positive on the top and negative on the bottom).
- 3) Connect the V OUT  scope probe/voltmeter to J2 for rail 1 or J3 for rail 2.
- 4) Turn on the power supply.
- 5) Position the SW1 or SW2 toggle switch to enable the IC.
- 6) Observe that V OUT1 = 1V and V OUT2 = 1.8V.
- 7) For efficiency measurements,  TP5  and  TP6  will be  used  to  measure  V IN ;  J2  and  J3  will  be  used  to measure V OUT1 and V OUT2.

For dual-phase operation (MAX20812 only):

- 1) When configured  to  dual-phase  operation,  only  the control loop for rail 1 will work and the control loop for rail 2 is bypassed. EN1 and PGOOD1 are used in dual-phase operation mode to enable the device and indicate power good status. EN2 and PGOOD2 can be disconnected.
- 2) Install  a  0Ω  resistor  for  R2,  R44,  R45,  and  R48  to short two rail outputs.
- 3) Remove R13 for rail 2 to disconnect the sense line,

## Evaluates: MAX20812/MAX20812T

and  install  a  0Ω  resistor  in  R34  to  pull  SNSP2  to AVDD.

- 4) Use  the  same  inductors  for  L1  and  L2,  or  replace them with one two-phase couple inductor.
- 5) Repeat steps 1-6 from the dual-output operation pro -cedure.

## Operation

## EV Kit Interface

The  MAX20812/MAX20812T  ICs  are  monolithic,  dualoutput,  high-frequency,  step-down  switching  regulators optimized  for  applications  requiring  small  size  and  high efficiency. Detailed product and application information is provided in the MAX20812 IC data sheet.

## Output Enable (OE)

OE is used to enable/disable the output voltage. For dualoutput operation, rail 1 output voltage is enabled/disabled by SW1 and rail 2 output voltage is enabled/disabled by SW2.  For  single-output  dual-phase  operation,  EN1  is used and EN2 can be disconnected.

## Output-Voltage Selection

The MAX20812 EV kit is set up to initially boot up to an output voltage of 1V of rail 1 and 1.8V of rail 2. The device has a fixed 0.5V reference voltage, and the output volt -age is  accomplished by placing a voltage-divider  in  the feedback path.

<!-- formula-not-decoded -->

where:

V OUT  = Output voltage

V REF  = 0.5V fixed reference voltage

RFB1 = Top divider resistor

RFB2  = Bottom divider resistor

## Soft-Start

When VDDH and EN are above their rising thresholds, soft-start begins, and switching is enabled. The soft-start ramp time  is  3ms.  The  device  supports  smooth  startup with the output prebiased.

## Switching Frequency

Switching  frequency  is  programmable-parameters  and PGM0 are used to select the switching frequency. For the EV kit, the switching frequency is set to 1000kHz for rail 1 and 2000kHz for rail 2. Refer to the PGM0 Configurations table (Table 1) in the MAX20812 IC data sheet.

## MAX20812 Evaluation Kit

## Pin-Strap Programmability

The  EV  kit  provides  an  option  to  configure  the  part  for desired application using PGMx resistor values. Refer to the PGMx Configurations tables (Table 1 through Table 3) in  the  MAX20812  IC  data  sheet. Appropriate  values  of resistors R11, R21, and R35 can be used for the desired application.

## Status Monitoring

Whenever the part is actively  regulating  and  the  output voltage  is  within  the  power-good  window,  the  PGOOD pin is high. In all other conditions, including enabled but in a fault state, the PGOOD pin is pulled low. Refer to the MAX20812 IC data sheet for more details.

## Input-Voltage Monitoring

The input supply can be monitored on TP4 for VDDH and TP7 for GND.

## Switching-Voltage Monitoring

The switching waveform can be monitored on TP3 for LX1 and TP9 for LX2.

## Output-Voltage Monitoring

J2 and J3 monitor the output voltage of rail 1 and rail 2, respectively.  These  test  points  should  not  be  used  for loading.

## Efficiency Testing

TP5 (VIN\_EFF\_P) and TP6 (VIN\_EFF\_N) are provided to measure V IN  during efficiency measurement. Additionally, J2  and  J3  are  provided  to  measure  V OUT1 and  V OUT2 during efficiency measurement.

## Bode Plot

A  10Ω  resistor  is  installed  between  the  VOUTx  sense point and SNSPx pin to measure the Bode plot. TP13 and TP14 test points are provided on the board on either side of 10Ω resistor for small signal injection ad ability to mea -sure the Bode plot for V OUT1 . TP28 and TP16 test points are provided on the board on either side of 10Ω resistor for small signal injection and the ability to measure a Bode plot for V OUT2.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX20812EVKIT#  | EV Kit |
| MAX20812TEVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX20812 Evaluation Kit

## MAX20812 EV Kit Bill of Materials

|   ITEM | REF_DES                                                              | DNI/DNP   |   QTY | MFG PART #                                                                                                                       | MANUFACTURER                                                 | VALUE   | DESCRIPTION                                                                                          |
|--------|----------------------------------------------------------------------|-----------|-------|----------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|---------|------------------------------------------------------------------------------------------------------|
|      1 | C2                                                                   | -         |     1 | C1608X5R1E475K080AC; GRM188R61E475KE11                                                                                           | TDK; MURATA                                                  | 4.7UF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7µF; 25V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R            |
|      2 | C3, C5, C34                                                          | -         |     3 | TPSD107K020R0085                                                                                                                 | AVX                                                          | 100µF   | CAPACITOR; SMT; 7343; TANTALUM; 100µF; 20V; 10%; TPS; -55°C to +125°C                                |
|      3 | C4, C7, C16, C31                                                     | -         |     4 | GRM155R71E104ME14                                                                                                                | MURATA                                                       | 0.1µF   | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1µF; 25V; TOL = 20%; TG = -55°C TO +125°C; TC = X7R           |
|      4 | C6, C12, C13                                                         | -         |     3 | GRM188R71E105KA12; CGA3E1X7R1E105K; TMK107B7105KA; 06033C105KAT2A;' GCM188R71E105KA64; C1608X7R1E105K080AE; CGA3E1X7R1E105K080AC | MURATA; TDK; TAIYO YUDEN; AVX; MURATA; TAIYO YUDEN; TDK      | 1µF     | CAPACITOR; SMT (0603); CERAMIC CHIP; 1µF; 25V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R             |
|      5 | C8, C9                                                               | -         |     2 | GRM21BC71E106KE11                                                                                                                | MURATA                                                       | 10µF    | CAPACITOR; SMT (0805); CERAMIC CHIP; 10µF; 25V; TOL = 10%; TG = -55°C TO +125°C; TC = X7S            |
|      6 | C10, C11                                                             | -         |     2 | LMK105B7474KV; GRM155R71A474KE01                                                                                                 | PANASONIC; MURATA                                            | 0.47µF  | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.47µF; 10V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R          |
|      7 | C26, C30                                                             | -         |     2 | C0402C102K5GAC                                                                                                                   | KEMET                                                        | 1000PF  | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL = 10%; MODEL =; TG = -55°C TO +125°C; TC = C0G |
|      8 | C27                                                                  | -         |     1 | GRM188Z71C225KE43                                                                                                                | MURATA                                                       | 2.2µF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2µF; 16V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R           |
|      9 | C29, C45                                                             | -         |     2 | C0402C101J5GAC; NMC0402NPO101J; CC0402JRNPO9BN101; GRM1555C1H101JA01; C1005C0G1H101J050BA; CGA2B2C0G1H101J050BA                  | KEMET; NIC COMPONENTS CORP.; YAGEO PHICOMP; MURATA; TDK; TDK | 100PF   | CAPACITOR; SMT (0402); CERAMIC CHIP; 100PF; 50V; TOL = 5%; TG = -55°C TO +125°C; TC = C0G            |
|     10 | C35                                                                  | -         |     1 | GRM21BZ70J226ME44                                                                                                                | MURATA                                                       | 22µF    | CAP;SMT (0805); 22µF; 20%; 6.3V; X7R; CERAMIC CHIP; NOTE: PURCHASE DIRECT FROM THE MANUFACTURER      |
|     11 | C32, C36, C37, C39, C42, C46, C48, C50, C60, C63, C65, C67, C69, C71 | -         |    14 | GRM188C80J226ME15                                                                                                                | MURATA                                                       | 22µF    | CAP; SMT (0603); 22µF; 20%; 6.3V; X6S; CERAMIC CHIP                                                  |

Evalutes: MAX20812/MAX20812T

## MAX20812 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES               | DNI/DNP   |   QTY | MFG PART #                                                                   | MANUFACTURER                  | VALUE             | DESCRIPTION                                                                                                              |
|--------|-----------------------|-----------|-------|------------------------------------------------------------------------------|-------------------------------|-------------------|--------------------------------------------------------------------------------------------------------------------------|
|     12 | C47, C61              | -         |     2 | GRM155R71E104KE14; C1005X7R1E104K050BB; TMK105B7104KVH; CGJ2B3X7R1E104K050BB | MURATA; TDK; TAIYO YUDEN; TDK | 0.1µF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1µF; 25V; TOL = 10%; MODEL = GRM SERIES; TG = -55°C TO +125°C; TC = X7R           |
|     13 | D1, D3, D4            | -         |     3 | MBRS540T3G                                                                   | ON SEMICONDUCTOR              | MBRS540T3         | DIODE; SCH; SURFACE MOUNT SCHOTTKY POWER RECTIFIER; SMC; PIV = 40V; IF = 5A                                              |
|     14 | DS1, DS2              | -         |     2 | LGL29K-G2J1-24-Z                                                             | OSRAM                         | LGL29K- G2J1-24-Z | DIODE; LED; SMARTLED; GREEN; SMT; PIV = 1.7V; IF = 0.02A                                                                 |
|     15 | J1                    | -         |     1 | PEC03SAAN                                                                    | SULLINS                       | PEC03SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                |
|     16 | J2, J3, J10, J11, J34 | -         |     5 | TSW-101-22-L-D                                                               | SAMTEC                        | TSW-101- 22-L-D   | CONNECTOR; MALE; THROUGH HOLE; .025IN SQ POST HEADER; STRAIGHT; 2PINS                                                    |
|     17 | J4, J9                | -         |     2 | 131-3701-266                                                                 | JOHNSON COMPONENTS            | 131-3701- 266     | CONNECTOR; MALE; THROUGH HOLE; SMB JACK VERTICAL PCB MOUNT; STRAIGHT; 5PINS                                              |
|     18 | J5, J8, J32, J33      | -         |     4 | 6095                                                                         | KEYSTONE                      | 6095              | CONNECTOR; FEMALE; PANELMOUNT; NON-INSULATED RECESSED HEAD BANANAJACK; STRAIGHT THROUGH; 1PIN                            |
|     19 | L1, L2                | -         |     2 | PA5003.471NLT                                                                | PULSE                         | 0.47µH            | INDUCTOR; SMT; COMPOSITE; 0.47µH; 20%; 18.4A                                                                             |
|     20 | MH1-MH4               | -         |     4 | 9032                                                                         | KEYSTONE                      | 9032              | MACHINE FABRICATED; ROUND- THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                               |
|     21 | Q1, Q2                | -         |     2 | BSS138                                                                       | ON SEMICONDUCTOR              | BSS138            | TRAN; LOGIC LEVEL ENHANCEMENT MODE FIELD EFFECT TRANSISTOR; NCH; SOT-23; PD-(0.36W); I-(0.22A); V-(50V); -55°C TO +150°C |
|     22 | R1                    | -         |     1 | CRCW04024R70FK                                                               | VISHAY DALE                   | 4.7               | RESISTOR, 0402, 4.7 Ω , 1%, 100PPM, 0.0625W, THICK FILM                                                                  |
|     23 | R3, R15               | -         |     2 | RC0402JR-070RL; CR0402-16W-000RJT                                            | YAGEO PHYCOMP; VENKEL LTD.    | 0                 | RESISTOR; 0402; 0 Ω ; 5%; JUMPER; 0.063W; THICK FILM                                                                     |
|     24 | R9, R10, R12          | -         |     3 | CRCW04023K01FK                                                               | VISHAY DALE                   | 3.01K             | RESISTOR; 0402; 3.01K Ω ; 1%; 100PPM; 0.063W; THICK FILM                                                                 |
|     25 | R11                   | -         |     1 | ERJ-2RKF7680                                                                 | PANASONIC                     | 768               | RES; SMT (0402); 768; 1%; ± 100PPM/°C; 0.1W                                                                              |
|     26 | R13                   | -         |     1 | ERJ-2RKF7871                                                                 | PANASONIC                     | 7.87K             | RES;SMT (0402); 7.87K; 1%; ± 100PPM/°K; 0.1W                                                                             |

Evalutes: MAX20812/MAX20812T

## MAX20812 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                            | DNI/DNP   |   QTY | MFG PART #                                     | MANUFACTURER             | VALUE     | DESCRIPTION                                                                                                                                                                                |
|--------|------------------------------------|-----------|-------|------------------------------------------------|--------------------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     27 | R14, R47                           | -         |     2 | CRCW040210R0FK; 9C04021A10R0FL                 | VISHAY DALE; YAGEO       | 10        | RESISTOR; 0402; 10 Ω ; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                                     |
|     28 | R25, R26                           | -         |     2 | CRCW040249R9FKEDHP                             | VISHAY DRALORIC          | 49.9      | RESISTOR; 0402; 49.9 Ω ; 1%; 100PPM; 0.2W; THICK FILM                                                                                                                                      |
|     29 | R21, R35                           | -         |     2 | ERJ-2RKF2491                                   | PANASONIC                | 2.49K     | RESISTOR; 0402; 2.49K Ω ; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                    |
|     30 | R39, R40                           | -         |     2 | ERJ-2RKF1002                                   | PANASONIC                | 10K       | RESISTOR; 0402; 10K Ω ; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                      |
|     31 | R41, R52                           | -         |     2 | CRCW040220K0FK                                 | VISHAY DALE              | 20K       | RESISTOR; 0402; 20K Ω ; 1%; 100PPM; 0.063W; THICK FILM                                                                                                                                     |
|     32 | R42, R53                           | -         |     2 | CRCW0603100RFK; ERJ-3EKF1000; RC0603FR-07100RL | VISHAY DALE; PANASONIC   | 100       | RESISTOR; 0603; 100 Ω ; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                      |
|     33 | R51, R54                           | -         |     2 | ERJ-3EKF2100                                   | PANASONIC                | 210       | RESISTOR; 0603; 210 Ω ; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                      |
|     34 | ST1-ST4                            | -         |     4 | 7808                                           | KEYSTONE                 | 7808      | TERMINAL; BODY LENGTH = 0.67IN; BODY WIDTH = 0.47IN; HEIGHT = 0.45IN; SCRW; BRASS                                                                                                          |
|     35 | SW1, SW2                           | -         |     2 | GT21MCBE                                       | C&K COMPONENTS           | GT21MCBE  | SWITCH; DPDT; THROUGH HOLE; 20V; 0.4VA; GT SERIES; SEALED ULTRAMINIATURE TOGGLE SWITCH; RCOIL = 0.05 Ω ; RINSULATION = 10G Ω ; C&K COMPONENTS                                              |
|     36 | TP1, TP2, TP7, TP11, TP25, TP32    | -         |     6 | 5011                                           | KEYSTONE                 | N/A       | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS = 0.062IN; NOT FOR COLD TEST |
|     37 | TP3, TP5, TP6, TP9                 | -         |     4 | PBC01SAAN                                      | SULLINS ELECTRONICS CORP | PBC01SAAN | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 1PIN                                                                                                                                   |
|     38 | TP4, TP10, TP12, TP18, TP27        | -         |     5 | 5010                                           | KEYSTONE                 | N/A       | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; RED; PHOSPHOR BRONZE WIRE SIL; NOT FOR COLD TEST                                                              |
|     39 | TP13, TP14, TP16, TP21, TP28, TP31 | -         |     6 | 5012                                           | KEYSTONE                 | N/A       | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS = 0.062IN; NOT FOR COLD TEST |

## MAX20812 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                                | DNI/DNP   |   QTY | MFG PART #                        | MANUFACTURER                 | VALUE               | DESCRIPTION                                                                                                                                                                                |
|--------|----------------------------------------|-----------|-------|-----------------------------------|------------------------------|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     40 | TP29, TP30                             | -         |     2 | 5126                              | KEYSTONE                     | N/A                 | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; GREEN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS = 0.062IN; NOT FOR COLD TEST |
|     41 | U1                                     | -         |     1 | MAX20812AFH+/ MAX20812TAFH+       | ANALOG DEVICES               | MAX20812/ MAX20812T | EVKIT PART - IC; MAX20812AFH+/ MAX20812TAFH+; FC2QFN21; PACKAGE OUTLINE DRAWING NUMBER: 21-100394/21-100513; LAND PATTERN: 90-100134/90-100184; PACKAGE CODE: F213A4F+1/ F213A4F+2         |
|     42 | PCB                                    | -         |     1 | MAX20812                          | ANALOG DEVICES               | PCB                 | PCB:MAX20812                                                                                                                                                                               |
|     43 | C19, C20, C23-C25                      | DNP       |     5 | C0402C103J3RAC                    | KEMET                        | 0.01µF              | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01µF; 25V; TOL = 5%; TG = -55°C TO +125°C; TC = X7R                                                                                                 |
|     44 | C56, C58                               | DNP       |     2 | GRM188C80J226ME15                 | MURATA                       | 22µF                | CAP; SMT (0603); 22µF; 20%; 6.3V; X6S; CERAMIC CHIP                                                                                                                                        |
|     45 | C33, C38, C55, C57                     | DNP       |     4 | GRM31CD80J107ME39                 | MURATA                       | 100µF               | CAP; SMT (1206); 100µF; 20%; 6.3V; X6T; CERAMIC CHIP                                                                                                                                       |
|     46 | C40, C54                               | DNP       |     2 | T491X477K010AT                    | KEMET                        | 470µF               | CAPACITOR; SMT (7343); TANTALUM CHIP; 470µF; 10V; TOL = 10%; MODEL = T491 SERIES                                                                                                           |
|     47 | C41, C43, C44, C49, C59, C62, C64, C66 | DNP       |     8 | C0805C476M9PAC; GRM21BR60J476ME15 | KEMET; MURATA                | 47µF                | CAPACITOR; SMT (0805); CERAMIC CHIP; 47µF; 6.3V; TOL = 20%; TG = -55°C TO +85°C; TC = X5R                                                                                                  |
|     48 | L3                                     | DNP       |     1 | N/A                               | N/A                          | N/A                 | EVKIT PART-INDUCTOR; SMD; 10MMX5MM PACKAGE                                                                                                                                                 |
|     49 | R6-R8, R16, R34, R43, R50              | DNP       |     7 | RC0402JR-070RL; CR0402-16W-000RJT | YAGEO PHYCOMP; VENKEL LTD.   | 0                   | RESISTOR; 0402; 0 Ω ; 5%; JUMPER; 0.063W; THICK FILM                                                                                                                                       |
|     50 | R27-R30                                | DNP       |     4 | CRCW04020000Z0EDHP; RCS04020000Z0 | VISHAY DRALORIC; VISHAY DALE | 0                   | RESISTOR; 0402; 0 Ω ; 0%; JUMPER; 0.2W; THICK FILM                                                                                                                                         |
|     51 | R2, R44, R45, R48                      | DNP       |     4 | CRCW25120000ZS                    | VISHAY DALE                  | 0                   | RESISTOR; 2512; 0 Ω ; 1%; JUMPER; 1.0W; METAL FILM                                                                                                                                         |
|     52 | R4, R5                                 | DNP       |     2 | ERJ-P08J101                       | PANASONIC                    | 100                 | RESISTOR; 1206; 100 Ω ; 5%; 200PPM; 0.66W; THICK FILM                                                                                                                                      |

Evalutes: MAX20812/MAX20812T

## MAX20812 EV Kit Schematic Diagram

<!-- image -->

## MAX20812 EV Kit Schematic Diagram (continued)

<!-- image -->

## MAX20812 EV Kit Schematic Diagram (continued)

<!-- image -->

## MAX20812 EV Kit PCB Layout Diagrams

MAX20812 EV Kit PCB-Silkscreen Top Side

<!-- image -->

## MAX20812 EV Kit PCB Layout Diagrams (continued)

MAX20812 EV Kit PCB-Top Side

<!-- image -->

## MAX20812 EV Kit PCB Layout Diagrams (continued)

MAX20812 EV Kit PCB-Internal Layer 2

<!-- image -->

## MAX20812 EV Kit PCB Layout Diagrams (continued)

MAX20812 EV Kit PCB-Internal Layer 3

<!-- image -->

## MAX20812 EV Kit PCB Layout Diagrams (continued)

MAX20812 EV Kit PCB-Internal Layer 4

<!-- image -->

## MAX20812 EV Kit PCB Layout Diagrams (continued)

MAX20812 EV Kit PCB-Internal Layer 5

<!-- image -->

## MAX20812 EV Kit PCB Layout Diagrams (continued)

MAX20812 EV Kit PCB-Bottom Side

<!-- image -->

## MAX20812 EV Kit PCB Layout Diagrams (continued)

MAX20812 EV Kit PCB-Silkscreen Bottom Side

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                 | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------|-----------------|
|                 0 | 10/20           | Initial release                                             | -               |
|                 1 | 3/21            | Updated MAX20812AFH+ to MAX20812; updated Bill of Materials | All             |
|                 2 | 6/22            | Added MAX20812T                                             | All             |
|                 3 | 10/22           | Updated Bill of Materials and Schematic Diagram             | 6, 9            |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.