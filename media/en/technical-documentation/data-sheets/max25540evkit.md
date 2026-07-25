<!-- lastmod 2022-08-02 -->
<!-- image -->

Evaluates: MAX25540

## General Description

The MAX25540 evaluation kit (EV kit) is a fully assembled and  tested  surface-mount  PCB  used  to  evaluate  the MAX25540  automotive  4-output  display-power  solution. The MAX25540 is a 4-channel power management integrated circuit (PMIC) designed to accommodate the main rails used in modern automotive thin-film transistor (TFT) displays. The MAX25540 integrates a high-voltage buck converter  that  transforms  battery  voltages  into  a  3.3V intermediate  rail.  In  addition,  a  high-voltage,  always-on, low-quiescent-current  linear  regulator  supplies  power at  3.3V. The low-voltage section consists of a fully integrated  DC/DC  converter  and  a  low  dropout  (LDO)  running  off  the  intermediate  rail.  The  low-voltage  DC/DC converter provides 1V, while the LDO produces 1.8V. A single START control pin initiates the start-up sequence, thereby  simplifying  device  control.  The  MAX25540's external PMOSFET control block allows battery voltage to be switched to a downstream device, such as a backlight boost converter. The MAX25540 also embeds selectable switching frequencies with spread spectrum.

## Benefits and Features

- High Integration
- Complete Display Power Solution from Automotive Battery
- One High-Voltage 2.1A Buck Converter (3.3V)
- One High-Voltage 100mA Low-IQ Linear Regulator (3.3V)
- One Low-Voltage 1.6A Buck Converter (1V)
- One Low-Voltage 175mA Linear Regulator (1.8V)
-  Power-Good Outputs
- Robust and Low electromagnetic interference (EMI)
- Programmable Switching Frequency
- Internal Spread Spectrum Oscillator
- Slew-Rate Controlled Switching
- Thermal Shutdown Protection
- Proven PCB Layout
- Fully Assembled and Tested
- Automotive CISPR25 CLASS5 compliant
- -40°C to +105°C Operating Temperature Range

©

## MAX25540 Evaluation Kit

## Quick Start

## Required Equipment

- MAX25540 EV kit
- 4.5V to 36V, 2A power supply
- Voltmeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that shunts are installed across pins 1-2 on jumpers J1-J2, J5-J7, J9, J12-J13, J19.
- 2) Verify that shunts are installed across pins 2-3 on jumpers J3, J10.
- 3) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the GND1 PCB pad.
- 4) Set the power supply VIN to 12V.
- 5) Turn on the power supply.
- 6) Verify that the green LEDs (DS1, DS2, DS3, DS4, DS6) are all on.
- 7) Verify that the red LEDs (DS5, DS7, DS8) are all off.
- 8) The EV kit by default is equipped with the MAX25540GTP/V+, which regulates the following voltage rails:
- 3.3V High-Voltage LDO
- 3.3V High-Voltage Buck
- 1V Low-Voltage Buck
- 1.8V Low-Voltage LDO

Ordering Information appears at end of data sheet.

319-100833; Rev 0; 10/21

## MAX25540 Evaluation Kit

## Detailed Description of Hardware

The jumper settings in the following tables show the features of the MAX25540 EV kit.

## Power LEDs Enable (J7, J6)

The  green  LEDs  (DS6,  DS4)  are  used  to  indicate  that the EV kit is powered on. DS6 on indicates that the input power is present and DS4 on indicates that the LDO1 output is on. The LEDs can be disconnected from the power supply, which allows a precise current-consumption evaluation. For more details, see the Table 1.

## Output power LEDs (J1, J2, J5)

The green LEDs (DS2, DS3, DS1) are used to indicate that the outputs are powered on. The LEDs can be disconnected from the power supply, which allows a precise current-consumption evaluation. For more details, see the Table 2.

## Table 1. Jumper Functions (J7, J6)

| SHUNT POSITION   | LED_EN (J7)      | LDO1 (J6)        |
|------------------|------------------|------------------|
| 1-2*             | DS6 connected    | DS4 connected    |
| Open             | DS6 disconnected | DS4 disconnected |

## Table 2. Jumper Functions (J1, J2, J5)

| SHUNT POSITION   | HV_BUCK (J1)     | LV_BUCK (J5)     | LDO2 (J2)        |
|------------------|------------------|------------------|------------------|
| 1-2*             | DS2 connected    | DS1 connected    | DS3 connected    |
| Open             | DS2 disconnected | DS1 disconnected | DS3 disconnected |

* Default position.

## Table 3. Jumper Functions (J3)

| SHUNT POSITION   | DIGITAL DOMAIN   |
|------------------|------------------|
| 1-2              | EXT_DVDD         |
| 2-3*             | LDO1             |

## Table 5. Jumper Functions (J9)

| SHUNT POSITION   | START=WAKE (J9)            |
|------------------|----------------------------|
| 1-2*             | WAKE shorted to START      |
| Open             | WAKE externally controlled |

* Default position.

Evaluates: MAX2540

## Digital Domain Voltage (J3)

The EV kit  exposes  the  open-drain  power-good  signals (PG1,  PGB and PGOOD) that are pulled up to what is referred to as the digital-domain voltage. Digital-domain voltage  can  be  selected  between  the  MAX25540  highvoltage LDO (LDO1) and an external voltage applied to the EXT\_DVDD pad. For more details, see the Table 3.

## START, WAKE and FIN Enable (J8, J9, J10, J13)

The MAX25540 digital input signals START, WAKE, and FIN can be driven externally using the respective PADS or forced high/low with the J8, J10 and J13 jumpers. For more details, see the Table 4.

For this application, it is advisable to connect START and WAKE together through the J9 jumper and drive only the START pin. For more details, see the Table 5.

## Table 4. Jumper Functions (J8, J10, J13)

| SHUNTPOSITION   | WAKE (J8), FIN (J10), START (J13)   |
|-----------------|-------------------------------------|
| 1-2*            | High                                |
| 2-3**           | Low                                 |
| Open***         | Externally controlled               |

│

## MAX25540 Evaluation Kit

## Frequency Selection (J11, J12)

The jumpers J11 and J12 are used to select the switching frequency. Only one jumper can be installed at a time. For more details, see the Table 6.

## Table 6. Jumper Functions (J11, J12)

| INSTALLED JUMPER   | HV BUCK SWITCHING FREQUENCY   | LV BUCK SWITCHING FREQUENCY   |
|--------------------|-------------------------------|-------------------------------|
| J11                | 400kHz                        | 2MHz                          |
| J12*               | 2.2MHz                        | 2.2MHz                        |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX25540EVKIT# | EV kit |

# Denotes RoHS-compliant.

Evaluates: MAX2540

## HV Buck 400kHz Switching-Frequency Operation

To operate the HV buck at 400kHz switching frequency, the  C4  capacitor  placeholder  must  be  populated  with a  ceramic  22μF  capacitor  and  the  L1  inductor  must  be replaced with a 10μH inductor.

│

## MAX25540 Evaluation Kit

## MAX25540 EV Kit Bill of Materials

|   ITEM | REF_DES                                                                                                       | DNI/DNP   |   QTY | MFG PART #                                                                                                           | MANUFACTURER                                                                  | VALUE                                             | DESCRIPTION                                                                                                          | COMMENTS   |
|--------|---------------------------------------------------------------------------------------------------------------|-----------|-------|----------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|---------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|------------|
|      1 | BATT, DVDD, TP_HV_BUCK, TP_LDO1, TP_LDO2, TP_LV_BUCK, TP_PGATE, VIN_FILT                                      |           |     8 | 5005 KEYSTONE                                                                                                        | 5005 KEYSTONE                                                                 | N/A                                               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
|      2 | C1, C9, C34, C36, C38, C41                                                                                    |           |     6 | GRM21BR71H105KA12; CL21B105KBFNNN; C2012X7R1H105K085AC; UMK212B7105KG                                                | MURATA;SAMSUNG ELECTRONICS; TDK;TAIYO YUDEN                                   | 1UF                                               | CAP; SMT (0805); 1UF; 10%; 50V; X7R; CERAMIC                                                                         |            |
|      3 | C2, C7, C8, C10, C18, C19, C22, C33, C37, C40                                                                 |           |    10 | C1608X7S2A104K080AB                                                                                                  | TDK                                                                           | 0.1UF                                             | CAP; SMT (0603); 0.1UF; 10%; 100V; X7S; CERAMIC                                                                      |            |
|      4 | C5, C6, C23, C24, C39                                                                                         |           |     5 | GRM32ER71E226KE15; CL32B226KAJNFN; CL32B226KAJNNW; TMK325B7226KM; C1210C226K3RAC7210                                 | MURATA;SAMSUNG;SAMSUNG; TAIYO YUDEN;KEMET                                     | 22UF                                              | CAP; SMT (1210); 22UF; 10%; 25V; X7R; CERAMIC                                                                        |            |
|      5 | C13                                                                                                           |           |     1 | MAL214699103E3                                                                                                       | VISHAY BCCOMPONENTS                                                           | 100UF                                             | CAP; SMT; 100UF; 20%; 50V; CERAMIC                                                                                   |            |
|      6 | C14                                                                                                           |           |     1 | GRM188R71A105K; C0603X7R100-105; C1608X7R1A105K080AC; LMK107B7105KA; CL10B105KP8NFN; LMK107B7105KAH; C0603C105K8RAC; | MURATA;VENKEL LTD;TDK; TAIYO YUDEN;SAMSUNG ELECTRONICS;TAIYO YUDEN;+KEMET;AVX | 1UF                                               | CAP; SMT (0603); 1UF; 10%; 10V; X7R; CERAMIC;                                                                        |            |
|      7 | C16                                                                                                           |           |     1 | GRM155R71E104KE14; C1005X7R1E104K050BB; TMK105B7104KVH;                                                              | MURATA;TDK;TAIYO YUDEN;TDK                                                    | 0.1UF                                             | CAP; SMT (0402); 0.1UF; 10%; 25V; X7R; CERAMIC                                                                       |            |
|      8 | C17                                                                                                           |           |     1 | GRJ32ER71H106KE11                                                                                                    | MURATA                                                                        | 10UF                                              | CAP; SMT (1210); 10UF; 10%; 50V; X7R; CERAMIC                                                                        |            |
|      9 | C21                                                                                                           |           |     1 | CGA4J1X7S1E106K125AC                                                                                                 | TDK                                                                           | 10UF                                              | CAP; SMT (0805); 10UF; 10%; 25V; X7S; CERAMIC                                                                        |            |
|     10 | C32                                                                                                           |           |     1 | GRM32ER71J106KA12                                                                                                    | MURATA                                                                        | 10UF                                              | CAP; SMT (1210); 10UF; 10%; 63V; X7R; CERAMIC                                                                        |            |
|     11 | D1                                                                                                            |           |     1 | PDS1040                                                                                                              | DIODES INCORPORATED                                                           | PDS1040                                           | DIODE; SCH; SMT (POWERDI-5); PIV=40V; IF=10A                                                                         |            |
|     12 | D2                                                                                                            |           |     1 | B350A-13-F                                                                                                           | DIODES INCORPORATED                                                           | B350A                                             | DIODE; SCH; SMA (DO-214AC); PIV=50V; IF=3A                                                                           |            |
|     13 | D3                                                                                                            |           |     1 | BZT52C18-7-F                                                                                                         | DIODES INCORPORATED                                                           | 18V                                               | DIODE; ZNR; SMT (SOD-123); Vz=18V; Izm=0.005A; -65 DEGC TO +150 DEGC                                                 |            |
|     14 | D4                                                                                                            |           |     1 | BZX84C 4V7                                                                                                           | FAIRCHILD SEMICONDUCTOR                                                       | 4.7V                                              | DIODE; ZNR; SMT (SOT-23); PIV=4.7V; IF=0.25A                                                                         |            |
|     15 | D5                                                                                                            |           |     1 | BZT52C7V5-7-F                                                                                                        | DIODES INCORPORATED                                                           | 7.5V                                              | DIODE; ZNR; SMT (SOD-123); VZ=7.5V; IZ=0.005A                                                                        |            |
|     16 | D6                                                                                                            |           |     1 | MM3Z12VT1G                                                                                                           | ON SEMICONDUCTOR                                                              | 12V                                               | DIODE; ZNR; SMT (SOD-323); PIV=12V; IZ=0.005A                                                                        |            |
|     17 | D8                                                                                                            |           |     1 | BAS70-04FILM                                                                                                         | STMICROELECTRONICS                                                            | BAS70-04                                          | DIODE, SCHOTTKY , SMALL SIGNAL, PIV=70V, IF(max)=0.070A, PD=0.25W                                                    |            |
|     18 | DS1-DS4, DS6                                                                                                  |           |     5 | LTST-C170GKT                                                                                                         | LITE-ON ELECTRONICS INC                                                       | LTST-C170GKT                                      | DIODE; LED; STANDARD; GREEN; SMT (0805); PIV=2.1V; IF=0.01A                                                          | GREEN      |
|     19 | DS5, DS7, DS8                                                                                                 |           |     3 | LTST-C170EKT                                                                                                         | LITE-ON ELECTRONICS INC                                                       | LTST-C170EKT                                      | DIODE; LED; STANDARD; RED; SMT (0805); PIV=2.0V; IF=0.02A                                                            | RED        |
|     20 | EXT_DVDD, FIN, GND1-GND6, HV_BUCK, LDO1, LDO2, LV_BUCK, PG1, PGB, PGOOD, START, SW_HV_BUCK, SW_VIN, VIN, WAKE |           |    20 | 9020 BUSS                                                                                                            | WEICO WIRE                                                                    | MAXIMPAD                                          | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                             |            |
|     21 | J1, J2, J5-J7, J9, J11, J12, J17-J19                                                                          |           |    11 | PEC02SAAN                                                                                                            | SULLINS ELECTRONICS CORP.                                                     | PEC02SAAN                                         | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS;                                                |            |
|     22 | J3, J4, J8, J10, J13                                                                                          |           |     5 | PEC03SAAN                                                                                                            | SULLINS                                                                       | PEC03SAAN                                         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                            |            |
|     23 | L1                                                                                                            |           |     1 | 74437346022 WURTH ELECTRONICS INC                                                                                    | 74437346022 WURTH ELECTRONICS INC                                             | 2.2UH                                             | INDUCTOR; SMT; SHIELDED; 2.2UH; 20%; 6.5A                                                                            |            |
|     24 | L2                                                                                                            |           |     1 | 74438357022                                                                                                          | WURTH ELECTRONICS INC                                                         | 2.2UH                                             | INDUCTOR; SMT; SHIELDED; 2.2UH; TOL=+/-20%; 5.2A                                                                     |            |
|     25 | L3                                                                                                            |           |     1 | VLS4012CX-1R0M-1                                                                                                     | TDK                                                                           | 1UH                                               | INDUCTOR; SMT; COMPOSITE; 1UH; 20%; 3.44A                                                                            |            |
|     26 | L4                                                                                                            |           |     1 | 74279223560 WURTH ELECTRONICS INC                                                                                    | 74279223560 WURTH ELECTRONICS INC                                             | 56 INDUCTOR; SMT; FERRITE-BEAD; 56 AT 100MHZ; 10A | 56 INDUCTOR; SMT; FERRITE-BEAD; 56 AT 100MHZ; 10A                                                                    |            |
|     27 | Q1                                                                                                            |           |     1 | SUM55P06-19L-E3                                                                                                      | VISHAY SILICONIX                                                              | SUM55P06-19L-E3                                   | TRAN; P-CHANNEL 60V D-S ENHANCEMENT MODE MOSFET; PCH; TO- 263-3; PD-(3.75W); I-(-55A); V-(-60V)                      |            |
|     28 | Q2                                                                                                            |           |     1 | BSS138LT1G                                                                                                           | ON SEMICONDUCTOR                                                              | BSS138LT1G                                        | TRAN; POWER MOSFET; N-CHANNEL; NCH; SOT-23; PD-(0.225W); I-(0.2A); V-(50V)                                           |            |

Evaluates: MAX2540

## MAX25540 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                          | DNI/DNP   |   QTY | MFG PART #                                                                         | MANUFACTURER                              | VALUE                                                 | DESCRIPTION                                                                                                            | COMMENTS   |
|--------|----------------------------------|-----------|-------|------------------------------------------------------------------------------------|-------------------------------------------|-------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|------------|
|     29 | Q3, Q6                           | -         |     2 | IRLML6346                                                                          | INTERNATIONAL RECTIFIER                   | IRLML6346                                             | TRAN; HEXFETPOWER MOSFET; NCH; SOT-23; PD-(1.3W); I-(0.00025A); V-(30V)                                                |            |
|     30 | Q4                               | -         |     1 | SQ2310ES-T1_GE3                                                                    | VISHAY SILICONIX                          | SQ2310ES-T1_GE3                                       | TRAN; NCH; SOT-23; PD-(2W); I-(6A); V-(20V)                                                                            |            |
|     31 | Q5                               | -         |     1 | BSS84                                                                              | FAIRCHILD SEMICONDUCTOR                   | BSS84                                                 | ENHANCEMENT MODE FIELD EFFECT TRANSISTOR, P-CHANNEL, SOT-23, PD=0.36W, ID=-0.13A, VDSS=-50V, -55degC TO +150degC       |            |
|     32 | R1, R2, R8, R10, R12             | -         |     5 | CRCW0603330RFK                                                                     | VISHAY DALE                               | 330 RES; SMT (0603); 330; 1%; +/-100PPM/DEGC; 0.1000W | 330 RES; SMT (0603); 330; 1%; +/-100PPM/DEGC; 0.1000W                                                                  |            |
|     33 | R5                               | -         |     1 | ERJ-2GE0R00                                                                        | PANASONIC                                 | 0 RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W         | 0 RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                          |            |
|     34 | R6                               | -         |     1 | CRCW060318K0FK                                                                     | VISHAY DALE                               | 18K                                                   | RES; SMT (0603); 18K; 1%; +/-100PPM/DEGC; 0.1000W                                                                      |            |
|     35 | R7, R20, R22, R26, R30, R32, R37 | -         |     7 | CRCW0603100KFK; RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL | VISHAY DALE;YAGEO;YAGEO; PANASONIC        | 100K                                                  | RES; SMT (0603); 100K; 1%; +/-100PPM/DEGC; 0.1000W                                                                     |            |
|     36 | R9, R19, R36                     | -         |     3 | CRCW06031K00FK; ERJ-3EKF1001; CR0603AFX-1001ELF                                    | VISHAY; PANASONIC;BOURNS                  | 1K                                                    | RES; SMT (0603); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                       |            |
|     37 | R11, R14, R15                    | -         |     3 | CRCW0603750RFK; ERJ-3EKF7500                                                       | VISHAY DALE;PANASONIC                     |                                                       | 750 RES; SMT (0603); 750; 1%; +/-100PPM/DEGC; 0.1000W                                                                  |            |
|     38 | R13                              | -         |     1 | CRCW08058K20FK                                                                     | VISHAY DALE                               | 8.2K                                                  | RES; SMT (0805); 8.2K; 1%; +/-100PPM/DEGC; 0.1250W                                                                     |            |
|     39 | R16, R17, R31, R33               | -         |     4 | CRCW060310K0FK; ERJ-3EKF1002; AC0603FR-0710KL; RMCF0603FT10K0                      | VISHAY DALE;PANASONIC;YAGEO               | 10K                                                   | RES; SMT (0603); 10K; 1%; +/-100PPM/DEGC; 0.1000W                                                                      |            |
|     40 | R18                              | -         |     1 | CRCW060330K0FK                                                                     | VISHAY DALE                               | 30K                                                   | RES; SMT (0603); 30K; 1%; +/-100PPM/DEGC; 0.1000W                                                                      |            |
|     41 | R34                              | -         |     1 | CRCW06030000Z0                                                                     | VISHAY DALE                               |                                                       | 0 RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                                                          |            |
|     42 | R50                              | -         |     1 | CRCW06031K40FK                                                                     | VISHAY DALE                               | 1.4K                                                  | RES; SMT (0603); 1.4K; 1%; +/-100PPM/DEGC; 0.1000W                                                                     |            |
|     43 | SPACER1-SPACER4                  | -         |     4 |                                                                                    | 9032 KEYSTONE                             |                                                       | 9032 MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                         |            |
|     44 | TP_GND                           | -         |     1 |                                                                                    | 5121 KEYSTONE                             | N/A                                                   | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; GREEN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
|     45 | U1                               | -         |     1 | MAX25540GTP/V+                                                                     | MAXIM                                     | MAX25540GTP/V+                                        | IC; PWRM; AUTOMOTIVE 4-OUTPUT DISPLAYPOWER SOLUTION; PACKAGE OUTLINE: 21-100172; LAND PATTERN: 90- 0409; TQFN20-EP     |            |
|     46 | PCB                              | -         |     1 | MAX25540                                                                           | MAXIM                                     | PCB                                                   | PCB:MAX25540                                                                                                           | -          |
|     47 | C3, C4                           | DNP       |     0 | CL32B226KAJNFN; CL32B226KAJNNW; TMK325B7226KM; C1210C226K3RAC7210                  | MURATA;SAMSUNG;SAMSUNG; TAIYO YUDEN;KEMET | 22UF                                                  | CAP; SMT (1210); 22UF; 10%; 25V; X7R; CERAMIC                                                                          |            |
|     48 | C11, C12, C28, C29, C31, C35     | DNP       |     0 | C1608X7S2A104K080AB                                                                | TDK                                       | 0.1UF                                                 | CAP; SMT (0603); 0.1UF; 10%; 100V; X7S; CERAMIC                                                                        |            |
|     49 | C15, C26, C27, C30               | DNP       |     0 | GRJ32ER71H106KE11                                                                  | MURATA                                    | 10UF                                                  | CAP; SMT (1210); 10UF; 10%; 50V; X7R; CERAMIC                                                                          |            |
|     50 | C20                              | DNP       |     0 | CGA4J1X7S1E106K125AC                                                               | TDK                                       | 10UF                                                  | CAP; SMT (0805); 10UF; 10%; 25V; X7S; CERAMIC                                                                          |            |
|     51 | C25                              | DNP       |     0 | MAL214699103E3                                                                     | VISHAY BCCOMPONENTS                       | 100UF                                                 | CAP; SMT; 100UF; 20%; 50V; CERAMIC                                                                                     |            |
|     52 | D7                               | DNP       |     0 | BAS70-04FILM                                                                       | STMICROELECTRONICS                        | BAS70-04                                              | DIODE, SCHOTTKY , SMALL SIGNAL, PIV=70V, IF(max)=0.070A, PD=0.25W                                                      |            |
|     53 | R3, R4, R23, R24                 | DNP       |     0 | CRCW06030000Z0                                                                     | VISHAY DALE                               |                                                       | 0 RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                                                          |            |
|     54 | R35                              | DNP       |     0 | CRCW06031K00FK; ERJ-3EKF1001; CR0603AFX-1001ELF                                    | VISHAY; PANASONIC;BOURNS                  | 1K                                                    | RES; SMT (0603); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                       |            |

Evaluates: MAX2540

## MAX25540 EV Kit Schematic Diagram

<!-- image -->

## MAX25540 EV Kit Schematic Diagram (continued)

<!-- image -->

## MAX25540 EV Kit PCB Layout Diagrams

MAX25540 EV Kit Component Placement Guide - Top Silkscreen

<!-- image -->

Evaluates: MAX2540

MAX25540 EV Kit PCB Layout - Top Layer

<!-- image -->

MAX25540 EV Kit PCB Layout - Internal Layer 2

<!-- image -->

│

## MAX25540 EV Kit PCB Layout Diagrams (continued)

MAX25540 EV Kit PCB Layout - Internal Layer 3

<!-- image -->

MAX25540 EV Kit PCB Layout - Bottom Layer

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/21           | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

│

Evaluates: MAX2540