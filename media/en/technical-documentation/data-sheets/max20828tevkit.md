<!-- lastmod 2023-04-06 -->
<!-- image -->

## General Description

The  MAX20828T  evaluation  kit  (EV  kit)  is  a  reference platform designed for the evaluation of the MAX20828T, a dual-output,  compact,  low-cost,  fully  integrated,  highly efficient, step-down DC-DC switching regulator IC. The IC is  in  a  21-pin,  3.5mm  x  4.6mm,  0.5mm  pitch,  FC2QFN package. This EV kit can deliver up to 8A load per output. The  two  outputs  can  be  connected  as  a  single-output, dual-phase regulator that supports up to 16A load current. For  more  information,  refer  to  the  MAX20828T  IC  data sheet.

The EV kit comprises a fully assembled and tested PCB implementation of the MAX20828T. The jumper pins, test points,  and  the  input/output  connectors  are  included  to provide a flexible and convenient use in a wide range of applications.

## Benefits and Features

- 2.7V to 16V Input Voltage Range
- 0.5V to 5.8V Output Voltage Range
- High Efficiency and Power Density
- Low Component Count
- Dual-Output or Single-Output Dual-Phase Operation
- Optimized Performance
- Proven PCB Layout
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX20828T EV kit
- 2.7V to 16V power supply with optional 3.3V external power supply
- 0 to 16A load
- Digital voltmeters
- Oscilloscope and probes

## Procedure

The EV kit is fully assembled and tested. The EV kit is preset with the MAX20828T dual-output operation with 1V on rail 1 and 1.8V on rail 2. Follow the steps below to verify board operation.

For dual-output operation:

Evaluates: MAX20828T

1.  Connect a powered-off 2.7V to 16V input supply to J5 (positive terminal) and J8 (negative terminal). Optionally, connect supply sense leads to TP5 (positive  sense)  and  TP6  (negative  sense)  for  best accuracy.  If  external  bias  is  preferred,  connect  a powered-off 3.3V power supply to J32 (positive terminal) and J33 (negative terminal) with jumper J34 installed.
2.  Connect the load to the edge connector J12 for rail 1 or  J13  for  rail  2  (positive  on  top  and  negative  on bottom).
3.  Connect the VOUT scope probe/voltmeter to J2 for rail 1 or J3 for rail 2.
4.  Turn on the power supply.
5.  Position the SW1 or SW2 toggle switch to enable the IC.
6.  Observe that VOUT1 = 1V and VOUT2 = 1.8V.
7.  For efficiency measurements, TP5 and TP6 are used to measure VIN; J2 and J3 are used to measure VOUT1 and VOUT2.

## For dual-phase operation:

1.  When  configured  to  dual-phase  operation,  only  the control loop for rail 1 works and the control loop for rail 2  is  bypassed.  The  EN1  and  PGOOD1  are  used  in dual-phase operation mode to enable the device and indicate the power good status. The EN2  and PGOOD2 can be disconnected.
2.  Install a zero-ohm resistor for R2, R44, R45, and R48 to short two rail outputs.
3.  Remove R13 for rail 2 to disconnect the sense line and install  a  zero-ohm  resistor  in  R34  to  pull  SNSP2  to AVDD.
4.  Use the same inductors for L1 and L2.
5.  Connect a powered-off 2.7V to 16V input supply to J5 (positive terminal) and J8 (negative terminal). Optionally, connect supply sense leads to TP5 (positive  sense)  and  TP6  (negative  sense)  for  best accuracy.  If  external  bias  is  preferred,  connect  a powered-off 3.3V power supply to J32 (positive terminal) and J33 (negative terminal) with jumper J34 installed.
6.  Connect the load to the edge connector J12 (positive on top and negative on bottom).
7.  Connect the VOUT scope probe/voltmeter to J2 or J3.
8.  Turn on the power supply.
9.  Position the SW1 toggle switch to enable the IC.
10. Observe that VOUT = 1V.

319-100937; Rev 0; 07/22

## MAX20828T Evaluation Kit

Evaluates: MAX20828T

www.analog.com

Analog Devices | 2

11.  For efficiency measurements, TP5 and TP6 are used to measure VIN; J2 or J3 is used to measure VOUT.

Ordering Information appears at end of data sheet.

## EV Kit Photo

Evaluates: MAX20828T

<!-- image -->

Table 1. Jumper Connection Guide

| JUMPER   | DEFAULT CONNECTION   | FEATURE                            |
|----------|----------------------|------------------------------------|
| J10      | INSTALLED            | Installed for EN2.                 |
| J11      | INSTALLED            | Installed for PGOOD2.              |
| J34      | INSTALLED            | Installed for external 3.3V input. |

Default options are bold.

## MAX20828T Evaluation Kit

## Operation

The MAX20828T IC is a monolithic, dual-output high-frequency step-down switching regulator optimized for applications that require a small size and high efficiency. For detailed product and application information, refer to the MAX20828T IC data sheet.

## Output Enable (OE)

The OE is used to enable/disable the output voltage. For dual-output operation, rail 1 output voltage is enabled/disabled by SW1, and rail 2 output voltage is enabled/disabled by SW2. For single-output dual-phase operation, EN1 is used and EN2 can be disconnected.

## Output-Voltage Selection

The MAX20828T EV kit is set up to initially boot up to an output voltage of 1V of rail 1 and 1.8V of rail 2. The device has a fixed 0.5V reference voltage, and the output voltage is accomplished by placing a voltage divider in the feedback path.

<!-- formula-not-decoded -->

## where:

𝑉𝑂𝑈𝑇 = Output voltage

𝑉𝑅𝐸𝐹 = 0.5V fixed reference voltage

𝑅𝐹𝐵1 = Top divider resistor

𝑅𝐹𝐵2 = Bottom divider resistor

## Soft-Start

When VDDH and EN are above their rising thresholds, the soft-start begins, and switching is enabled. The soft-start ramp time is 3ms. The device supports smooth startup with output pre-biased.

## Switching Frequency

The switching frequency is programmable parameters and PGM0 is used to select the switching frequency. For the EV kit, the switching frequency is set to 1000kHz for rail 1 and 2000kHz for rail 2. For more information, refer to Table 1. PGM0 Switching Frequency, AMS, and DCM Selections in the MAX20828T IC data sheet.

## Pin-Strap Programmability

The EV kit provides an option to configure the part for the desired application using PGMx resistor values. For more information, refer to Table 1. PGM0 Switching Frequency, AMS, and DCM Selections, Table 2. PGM1 Configurations for OUTPUT1 or Dual-Phase Operation, and Table 3. PGM2 Configurations for OUTPUT2 in the MAX20828T IC data sheet. The appropriate values of the resistors R11, R21, and R35 can be used for the desired application.

## Status Monitoring

Whenever the part is actively regulating, and the output voltage is within the power-good window, the PGOOD pin is high. In all other conditions, including enabled but in a fault state, the PGOOD pin is pulled low. For more information, refer to the MAX20828T IC data sheet.

## Input-Voltage Monitoring

The input supply can be monitored on TP4 for VDDH and TP7 for GND.

Evaluates: MAX20828T

## MAX20828T Evaluation Kit

## Switching-Voltage Monitoring

The switching waveform can be monitored on TP3 for LX1 and TP9 for LX2.

## Output-Voltage Monitoring

The jumpers J2 and J3 monitor the output voltage of rail 1 and rail 2, respectively.

Note: These test points should not be used for loading.

## Efficiency Testing

The TP5 (VIN\_EFF\_P) and TP6 (VIN\_EFF\_N) test points are provided to measure VIN during efficiency measurement. Additionally, J2 and J3 are provided to measure VOUT1 and VOUT2 during efficiency measurement.

## Bode Plot

A 10Ω resistor is installed between the V OUTx sense point and SNSPx pin to measure the bode plot. The TP13 and TP14 test points are provided on the board on either side of the 10Ω resistor for small signal injection and abil ity to measure bode plot for VOUT1 . The TP28 and TP16 test points are provided on the board on either side of the 10Ω resistor for small signal injection and ability to measure bode plot for VOUT2.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX20828TEVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX20828T

## MAX20828T Evaluation Kit

## MAX20828T EV Kit Bill of Materials

|   ITEM | REF_DES          | DNI/DNP   |   QTY | MFG PART #                                                                                                                          | MANUFACTURER                                               | VALUE   | DESCRIPTION                                                                                         |
|--------|------------------|-----------|-------|-------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|---------|-----------------------------------------------------------------------------------------------------|
|      1 | C2               | -         |     1 | C1608X5R1E475K080 AC; GRM188R61E475KE11                                                                                             | TDK; MURATA                                                | 4.7UF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 25V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R           |
|      2 | C3, C5, C34      | -         |     3 | TPSD107K020R0085                                                                                                                    | AVX                                                        | 100UF   | CAPACITOR; SMT; 7343; TANTALUM; 100uF; 20V; 10%; TPS; -55degC to +125degC                           |
|      3 | C4, C7, C16, C31 | -         |     4 | GRM155R71E104ME1 4                                                                                                                  | MURATA                                                     | 0.1UF   | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=20%; TG=-55 DEGC TO +125 DEGC; TC=X7R          |
|      4 | C6, C12, C13     | -         |     3 | GRM188R71E105KA12 ; CGA3E1X7R1E105K; TMK107B7105KA; 06033C105KAT2A; GCM188R71E105KA64 ; C1608X7R1E105K080 AE; CGA3E1X7R1E105K08 0AC | MURATA;TDK; TAIYO YUDEN;AVX; MURATA;TAIYO YUDEN;TDK        | 1UF     | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R            |
|      5 | C8, C9           | -         |     2 | GRM21BC71E106KE1 1                                                                                                                  | MURATA                                                     | 10UF    | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S           |
|      6 | C10, C11         | -         |     2 | CL05B224KP5NNN                                                                                                                      | SAMSUNG ELECTRONICS                                        | 0.22UF  | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.22UF; 10V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R         |
|      7 | C26, C30         | -         |     2 | C0402C102K5GAC                                                                                                                      | KEMET                                                      | 1000PF  | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G |
|      8 | C27              | -         |     1 | GRM188Z71C225KE43                                                                                                                   | MURATA                                                     | 2.2UF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R          |
|      9 | C29, C45         | -         |     2 | C0402C101J5GAC; NMC0402NPO101J; CC0402JRNPO9BN101 ; GRM1555C1H101JA01 ; C1005C0G1H101J050 BA;                                       | KEMET; NIC COMPONENTS CORP.; YAGEO PHICOMP; MURATA;TDK;TDK | 100PF   | CAPACITOR; SMT (0402); CERAMIC CHIP; 100PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G           |

www.analog.com

Evaluates: MAX20828T

## MAX20828T Evaluation Kit

Evaluates: MAX20828T

| ITEM   | REF_DES                                                     | DNI/DNP   | QTY   | MFG PART #                                                                      | MANUFACTURER                | VALUE             | DESCRIPTION                                                                                     |
|--------|-------------------------------------------------------------|-----------|-------|---------------------------------------------------------------------------------|-----------------------------|-------------------|-------------------------------------------------------------------------------------------------|
|        |                                                             |           |       | CGA2B2C0G1H101J05 0BA                                                           |                             |                   |                                                                                                 |
| 10     | C35                                                         | -         | 1     | GRM21BZ70J226ME44                                                               | MURATA                      | 22UF              | CAP;SMT (0805);22UF;20%;6.3V;X7 R;CERAMIC CHIP; NOTE: PURCHASE DIRECT FROM THE MANUFACTURER     |
| 11     | C32, C36, C37, C39, C42, C46, C48, C50, C60, C63, C65, C67, | -         | 14    | GRM188C80J226ME15                                                               | MURATA                      | 22UF              | CAP; SMT (0603); 22UF; 20%; 6.3V; X6S; CERAMIC CHIP                                             |
| 12     | C41, C43 C59, C62                                           | -         | 4     | C0805C476M9PAC; GRM21BR60J476ME1 5                                              | KEMET;MURATA                | 47UF              | CAPACITOR; SMT (0805); CERAMIC CHIP; ; 6.3V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R           |
| 13     | C47, C61                                                    | -         | 2     | GRM155R71E104KE14 ; C1005X7R1E104K050 BB; TMK105B7104KVH; CGJ2B3X7R1E104K05 0BB | MURATA;TDK;TAI YO YUDEN;TDK | 0.1UF             | MURATA;TDK;TAIYO YUDEN;TDK                                                                      |
| 14     | D1, D3, D4                                                  | -         | 3     | MBRS540T3G                                                                      | ON SEMICONDUCTO R           | MBRS540T 3        | DIODE; SCH; SURFACE MOUNT SCHOTTKY POWER RECTIFIER; SMC; PIV=40V; IF=5A                         |
| 15     | DS1, DS2                                                    | -         | 2     | LGL29K-G2J1-24-Z                                                                | OSRAM                       | LGL29K- G2J1-24-Z | DIODE; LED; SMARTLED; GREEN; SMT; PIV=1.7V; IF=0.02A                                            |
| 16     | J2, J3, J10, J11, J34                                       | -         | 5     | TSW-101-22-L-D                                                                  | SAMTEC                      | TSW-101- 22-L-D   | CONNECTOR; MALE; THROUGH HOLE; .025IN SQ POST HEADER; STRAIGHT; 2PINS                           |
| 17     | J4, J9                                                      | -         | 2     | 131-3701-266                                                                    | JOHNSON COMPONENTS          | 131-3701- 266     | CONNECTOR; MALE; THROUGH HOLE; SMB JACK VERTICAL PCB MOUNT; STRAIGHT; 5PINS                     |
| 18     | J5, J8, J32, J33                                            | -         | 4     | 6095                                                                            | KEYSTONE                    | 6095              | CONNECTOR; FEMALE; PANELMOUNT; NON- INSULATED RECESSED HEAD BANANA JACK; STRAIGHT THROUGH; 1PIN |
| 19     | L1, L2                                                      | -         | 2     | PA5003.471NLT                                                                   | PULSE                       | 0.47UH            | INDUCTOR; SMT; COMPOSITE; 0.47UH; 20%; 18.4A                                                    |
| 20     | MH1-MH4                                                     | -         | 4     | 9032                                                                            | KEYSTONE                    | 9032              | MACHINE FABRICATED; ROUND-THRU HOLE                                                             |

## MAX20828T Evaluation Kit

Evaluates: MAX20828T

| ITEM   | REF_DES      | DNI/DNP   | QTY   | MFG PART #                                     | MANUFACTURER              | VALUE    | DESCRIPTION                                                                                                                     |
|--------|--------------|-----------|-------|------------------------------------------------|---------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------|
|        |              |           |       |                                                |                           |          | SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                           |
| 21     | Q1, Q2       | -         | 2     | BSS138                                         | ON SEMICONDUCTO R         | BSS138   | TRAN; LOGIC LEVEL ENHANCEMENT MODE FIELD EFFECT TRANSISTOR; NCH; SOT- 23; PD-(0.36W); I-(0.22A); V-(50V); -55 DEGC TO +150 DEGC |
| 22     | R1           | -         | 1     | CRCW04024R70FK                                 | VISHAY DALE               | 4.7      | RESISTOR, 0402, 4.7 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                        |
| 23     | R3           | -         | 1     | RC0402JR-070RL; CR0402-16W-000RJT              | YAGEO PHYCOMP; VENKEL LTD | 0        | RESISTOR; 0402; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM                                                                           |
| 24     | R9, R10, R12 | -         | 3     | CRCW04023K01FK                                 | VISHAY DALE               | 3.01K    | RESISTOR; 0402; 3.01 K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                      |
| 25     | R11          | -         | 1     | ERJ-2RKF7680                                   | PANASONIC                 | 768      | RES; SMT (0402); 768; 1%; +/-100PPM/DEGC; 0.1W                                                                                  |
| 26     | R13          | -         | 1     | ERJ-2RKF7871                                   | PANASONIC                 | 7.87K    | RES;SMT (0402);7.87K;1%;+/- 100PPM/DEGK;0.1W                                                                                    |
| 27     | R14, R47     | -         | 2     | CRCW040210R0FK; 9C04021A10R0FL                 | VISHAY DALE;YAGEO         | 10       | RESISTOR; 0402; 10 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                                                         |
| 28     | R25, R26     | -         | 2     | CRCW040249R9FKED HP                            | VISHAY DRALORIC           | 49.9     | RESISTOR; 0402; 49.9 OHM; 1%; 100PPM; 0.2W; THICK FILM                                                                          |
| 29     | R21, R35     | -         | 2     | ERJ-2RKF2491                                   | PANASONIC                 | 2.49K    | RESISTOR; 0402; 2.49K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                        |
| 30     | R39, R40     | -         | 2     | ERJ-2RKF1002                                   | PANASONIC                 | 10K      | RESISTOR; 0402; 10K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                          |
| 31     | R41, R52     | -         | 2     | CRCW040220K0FK                                 | VISHAY DALE               | 20K      | RESISTOR; 0402; 20K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                         |
| 32     | R42, R53     | -         | 2     | CRCW0603100RFK; ERJ-3EKF1000; RC0603FR-07100RL | VISHAY DALE; PANASONIC    | 100      | RESISTOR; 0603; 100 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                          |
| 33     | R51, R54     | -         | 2     | ERJ-3EKF2100                                   | PANASONIC                 | 210      | RESISTOR; 0603; 210 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                          |
| 34     | ST1-ST4      | -         | 4     | 7808                                           | KEYSTONE                  | 7808     | TERMINAL; BODY LENGTH=0.67IN; BODY WIDTH=0.47IN; HEIGHT=0.45IN; SCRW; BRASS                                                     |
| 35     | SU1-SU3      | -         | 3     | S1100-B; SX1100-B; STC02SYAN                   | KYCON; KYCON;             | SX1100-B | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK;                                                                            |

www.analog.com

## MAX20828T Evaluation Kit

Evaluates: MAX20828T

| ITEM   | REF_DES                            | DNI/DNP   | QTY   | MFG PART #   | MANUFACTURER             | VALUE      | DESCRIPTION                                                                                                                                                                        |
|--------|------------------------------------|-----------|-------|--------------|--------------------------|------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        |                                    |           |       |              | SULLINS ELECTRONICS CORP |            | INSULATION=PBT;PHOS PHOR BRONZE CONTACT=GOLD PLATED                                                                                                                                |
| 36     | SW1, SW2                           | -         | 2     | GT21MCBE     | C&K COMPONENTS           | GT21MCB E  | SWITCH; DPDT; THROUGH HOLE; 20V; 0.4VA; GT SERIES; SEALED ULTRAMINIATURE TOGGLE SWITCH; RCOIL= 0.05 OHM; RINSULATION=10G OHM; C&K COMPONENTS                                       |
| 37     | TP1, TP2, TP7, TP11, TP25, TP32    | -         | 6     | 5011         | KEYSTONE                 | N/A        | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |
| 38     | TP3, TP5, TP6, TP9                 | -         | 4     | PBC01SAAN    | SULLINS ELECTRONICS CORP | PBC01SAA N | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 1PIN                                                                                                                           |
| 39     | TP4, TP10, TP12, TP18, TP27        | -         | 5     | 5010         | KEYSTONE                 | N/A        | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL; NOT FOR COLD TEST                                                            |
| 40     | TP13, TP14, TP16, TP21, TP28, TP31 | -         | 6     | 5012         | KEYSTONE                 | N/A        | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |
| 41     | TP29, TP30                         | -         | 2     | 5126         | KEYSTONE                 | N/A        | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; GREEN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR                                            |

## MAX20828T Evaluation Kit

Evaluates: MAX20828T

|   ITEM | REF_DES            | DNI/DNP   |   QTY | MFG PART #                         | MANUFACTURER                 | VALUE      | DESCRIPTION                                                                                                                                                                                                               |
|--------|--------------------|-----------|-------|------------------------------------|------------------------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     42 | U1                 | -         |     1 | MAX20828TAFH+                      | MAXIM                        | MAX20828 T | NOT FOR COLD TEST EVKIT PART - IC; MAX20828TAFH+; DUAL- OUTPUT 8A; 3MHZ; 2.7V - 16V STEP-DOWN SWITCHING REGULATOR; PACKAGE OUTLINE DRAWING NUMBER: 21-100513; LAND PATTERN: 90- 100184; PACKAGE CODE: F213A4F+2; FC2QFN21 |
|     43 | PCB                | -         |     1 | MAX20828T                          | MAXIM                        | PCB        | PCB:MAX20828T                                                                                                                                                                                                             |
|     44 | C56, C58           | DNP       |     2 | GRM188C80J226ME15                  | MURATA                       | 22UF       | CAP; SMT (0603); 22UF; 20%; 6.3V; X6S; CERAMIC CHIP                                                                                                                                                                       |
|     45 | C33, C38, C55, C57 | DNP       |     4 | GRM31CD80J107ME3 9                 | MURATA                       | 100UF      | CAP; SMT (1206); 100UF; 20%; 6.3V; X6T; CERAMIC CHIP                                                                                                                                                                      |
|     46 | C40, C54           | DNP       |     2 | T491X477K010AT                     | KEMET                        | 470UF      | CAPACITOR; SMT (7343); TANTALUM CHIP; 470UF; 10V; TOL=10%; MODEL=T491 SERIES                                                                                                                                              |
|     47 | C44, C49, C64, C66 | DNP       |     4 | C0805C476M9PAC; GRM21BR60J476ME1 5 | KEMET;MURATA                 | 47UF       | CAPACITOR; SMT (0805); CERAMIC CHIP; ; 6.3V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                                                                                     |
|     48 | R27-R30            | DNP       |     4 | CRCW04020000Z0ED HP; RCS04020000Z0 | VISHAY DRALORIC; VISHAY DALE | 0          | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.2W; THICK FILM                                                                                                                                                                       |
|     49 | R4, R5             | DNP       |     2 | ERJ-P08J101                        | PANASONIC                    | 100        | RESISTOR; 1206; 100 OHM; 5%; 200PPM; 0.66W; THICK FILM                                                                                                                                                                    |
|     50 | R34                | DNP       |     1 | RC0402JR-070RL; CR0402-16W-000RJT  | YAGEO PHYCOMP; VENKEL LTD    | 0          | RESISTOR; 0402; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM                                                                                                                                                                     |
|     51 | R2, R44, R45, R48  | DNP       |     4 | CRCW25120000ZS                     | VISHAY DALE                  | 0          | RESISTOR; 2512; 0 OHM; 1%; JUMPER; 1.0W; METAL FILM                                                                                                                                                                       |
|     52 | J1                 | DNP       |     1 | PEC03SAAN                          | SULLINS                      | PEC03SAA N | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                                                                                                 |

## MAX20828T Evaluation Kit

## MAX20828T EV Kit Schematic

<!-- image -->

Evaluates: MAX20828T

## MAX20828T EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX20828T

## MAX20828T EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX20828T

## MAX20828T Evaluation Kit

## MAX20828T EV Kit PCB Layout

MAX20828T EV Kit Component Placement Guide -Top Silkscreen

<!-- image -->

MAX20828T EV Kit PCB Layout -Layer 2

<!-- image -->

## Evaluates: MAX20828T

MAX20828T EV Kit PCB Layout -Top

<!-- image -->

MAX20828T EV Kit PCB Layout -Layer 3

<!-- image -->

## MAX20828T Evaluation Kit

## MAX20828T EV Kit PCB Layout (continued)

MAX20828T EV Kit PCB Layout -Layer 4

<!-- image -->

MAX20828T EV Kit PCB Layout -Bottom

<!-- image -->

Evaluates: MAX20828T

MAX20828T EV Kit PCB Layout -Layer 5

<!-- image -->

MAX20828T EV Kit Component Placement Guide -Bottom Silkscreen

<!-- image -->

## MAX20828T Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 07/22           | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

Evaluates: MAX20828T