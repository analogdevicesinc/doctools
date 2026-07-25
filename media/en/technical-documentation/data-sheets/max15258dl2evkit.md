<!-- lastmod 2022-11-23 -->
## Evaluates: MAX15258

## General Description

The MAX15258 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX15258,  a  high-voltage multiphase  boost  controller  with  I 2 C  digital  interface designed  to  support  up  to  four  MOSFET  drivers  and eight external MOSFETs in a single-phase, dual-phase, triple-phase, or quad-phase inverting-buck-boost configuration using discrete inductors. The  EV  kit operates from a -36V to -60V input voltage range and supports a 24V to 50V output voltage range. The EV kit uses the MAX15258 on a proven six-layer PCB design. Two MAX15013 ICs are used as the MOSFET driver for the  EV  kit.  The  EV  kit  also  features  an  onboard MAX17760  buck  converter  to  provide  a  10V  supply voltage to the MAX15258 and the MOSFET drivers. An external MAX32625PICO board is used to communicate between  the  MAX15258  and  MAX15258  GUI.  Two MAX15258 EV kits are required for triple-phase or quadphase operation.

## MAX15258 EV Kit Top View

<!-- image -->

<!-- image -->

## Features

- -36V to -60V Input Voltage Range for Inverting BuckBoost Configuration
- 24V to 50V Output Voltage Range on Top of Input Voltage
- -40 ° C to +125 ° C Temperature Range
- Banana Jacks for Input and Output Voltage
- Configurable  Output  Voltage  and  Compensation Parameters
- Adjustable Current Limit
- Flexibility  of  Adjusting  Output  Voltage  Enabled  by REFIN Feature and MAX15258 I 2 C Digital Interface
- Programmable  Internal  V REF   through  I 2 C  Digital Interface
- Fully Assembled and Tested

## MAX15258 Evaluation Kit

## MAX15258 Evaluation Kit

## Quick Start

## Required Equipment

- MAX15258 EV Kit
- MAX32625PICO Board
- One 80V DC Power Supply (PS1)
- One Optional 6V DC Power Supply (PS2)
- 0 to 16A Load
- Digital Voltmeters
- Oscilloscope and Probes

## Procedure

The EV kit is fully assembled and tested. Use the following steps to verify board operation:

## Caution: Do not turn on the power supply until all connections are completed.

1.  Verify that a shunt is installed across jumpers J3 and J4.
2.  Verify that only one shunt is installed on jumper J6 to select one of the three secondary controller addresses provided on the EV kit.
3.  Set the power supply (PS1) to 48V, connect the positive terminal of the power supply (PS1) to the VIN+ banana jack on the EV kit and connect the negative terminal of the power supply (PS1) to the VIN- banana jack.
4.  If an internal reference voltage is not used (R9 is not installed), set another power supply (PS2) to 2.0V, connect the positive terminal of the power supply (PS2) to the test point REFIN, and connect the negative terminal of the power supply (PS2) to the test point AGND.
5.  Connect the positive terminal of the load to the VOUT+ banana jack, and connect the negative terminal of the load to the VOUT- banana jack.
6.  Turn on power supply PS2, if it is used.
7.  Turn on power supply PS1.
8.  Position the SW1 toggle switch to ON to enable the IC.
9.  Verify that the voltage between the VOUT\_P and VOUT\_N test points is 48V.

The EV kit is now ready for additional evaluation.

Evaluates: MAX15258

## Detailed Description of Hardware

This evaluation kit should be used with the following documents:

- MAX15258 Data Sheet
- MAX32625PICO Application Platform Data Sheet
- MAX15258 EV Kit Data Sheet (this document)

The MAX15258 EV kit provides a proven design to evaluate the MAX15258 fully integrated, highly efficient, two-phase switching regulator. The EV kit can easily be connected between the power input and the load using the banana jacks and connectors provided for the input and output. Test points and connectors are provided to monitor and control the device signals.

The EV kit operates in the -36V to -60V input voltage range. The EV kit regulates the output voltage between 24V to 50V. The output voltage is set to 48V by default on the EV kit. The output voltage can be adjusted by changing the resistordivider between the VOUT+ and OUTP pins. Make sure that the correct compensation is selected for stable operation.

The EV kit uses the MAX32625PICO as a I 2 C digital interface to provide programmable internal V REF , programmable overcurrent fault limit, readback for V IN , V OUT  and phase current reporting, and fault status.

## EN/UVLO Input for the MAX15258

The device's enable input (EN/UVLO) is controlled by a resistor-divider ratio between R19 and R20. The divider ratio is chosen so that the VIN UVLO threshold is set at 34.2V by default. If the EN/UVLO pin voltage is above 1V, the MAX15258 will power up. The EN/UVLO pin can be connected to VIN- to disable the regulation. Additionally, a test point (EN) is also provided to drive the EN/UVLO pin. While changing the UVLO threshold, make sure that the UVLO threshold of the MAX15258 is higher than the UVLO threshold of the MAX17760 onboard DRV supply (U4).

## DRV Supply Selection

The MAX15258 and MAX15013 require a secondary 8.5V to 12V power supply (DRV) for the LDO and gate drive. The supply  for  the  DRV  pin  can  be  selected  from  the  onboard  supply  by  installing  shunts  across  jumpers  J3  and  J4. Alternatively, an external power supply can be used by applying 8.5V to 12V between test points VDRV and PGND.

## Table 1. J3 and J4 Jumper Selection

| JUMPER CONNECTIONS                    | DRV VOLTAGE           |
|---------------------------------------|-----------------------|
| J3 installed and J4 installed*        | Onboard power supply  |
| J3 not installed and J4 not installed | External power supply |

## Bode Plot

A 10Ω resistor is installed between the VOUT\_P sense point and OUTP pin to measure the Bode plot. BODE+ and BODEtest points are provided on the board on either side of the 10Ω resistor for small-signal injection and the ability to measure the Bode plot.

## Output Regulation

The VOUT\_P and VOUT\_N test points are provided to measure the V OUT  regulation.

## Efficiency Measurement

VIN\_P  and V IN\_N  are provided to measure V IN  during efficiency measurement. Also, V OUT\_P  and V OUT\_N  are provided to measure V OUT  during efficiency measurement.

## FREQ/CLK Pin

Switching frequency is selected by connecting the R16 resistor between the FREQ/CLK pin and VIN-. The switching frequency can also be selected by providing a 480kHz to 4MHz external clock (360kHz to 3MHz for triple phase) at this pin. A test point (CLOCK) is also provided to drive this pin.

Evaluates: MAX15258

## MAX15258 Evaluation Kit

## REFIN Pin

By default, the REFIN pin is connected to the BIAS supply through R9 (0 Ω resistor). R9 can be removed and REFIN can be connected to an external supply (between 1V and 2.2V) to change the VOUT reference and, therefore, change the output regulation voltage. The external supply should be applied between test point REFIN and AGND.

## ADDR Pin

The EV kit provides four selectable I 2 C addresses by installing a shunt on jumper J6. By default, J6 is not installed, and the I 2 C address is selected as 1010111.

Table 2. I 2 C Address Selection

| JUMPER CONNECTIONS                      |   I 2 C CONTROLLER ADDRESS |
|-----------------------------------------|----------------------------|
| Installed between pin 1 and pin 2 on J6 |                    1010101 |
| Installed between pin 3 and pin 4 on J6 |                    1010010 |
| Installed between pin 5 and pin 6 on J6 |                    1010000 |
| J6 not installed*                       |                    1010111 |

## Connecting Multiple EV Kits Together

The EV kit provides jumpers J1, J2, J8, J9, J10, and J11 to connect two EV kits together for three-phase or four-phase operation. As detailed in the MAX15258 data sheet, the EV kits can be configured for primary controller and secondary controller operation. The two EV kit's I 2 C addresses must be different.

## MAX32625PICO Board

The MAX15258 EV kit uses the MAX32625PICO microcontroller board on headers J7 and J13 as an I 2 C digital interface to provide programmable internal V REF , programmable overcurrent fault limit, readback for V IN  and V OUT , phase current reporting, and fault status with downloaded firmware and the GUI. Note that the MAX32625PICO must be soldered on the J7 and J13 connectors to function with the MAX15258, as shown in Figure 1 . The MAX32625PICO EV kit can be ordered from the MAX32625PICO web page, and the GUI and firmware of the MAX15258 can be downloaded from the MAX15258 web page. Refer to MAX32625PICO EV kit data sheet for programming the MAX32625PICO board with the downloaded firmware file.

The EV kit software can be installed on the computer by running the MAX15258Setup\_1.0.35.exe program inside a temporary folder. This copies the program files and creates an icon in the Windows Start menu.

Evaluates: MAX15258

## MAX15258 Evaluation Kit

## Evaluates: MAX15258

Figure 1. MAX32625PICO Connection on the MAX15258 EV Kit

<!-- image -->

## MAX15258 Evaluation Kit

## Detailed Description of Software

In the MAX15258 GUI, make sure the MAX32625PICO board is connected to the PC USB port through a cable. Click on the Connection dropdown list and select the COM port that has appeared; then click on Connect button to connect the MAX32625PICO board. When the board is connected, the Connect button in the Comm Settings window on the left side of the GUI will be changed to Disconnect , and the I2C Address window will display the selected address of the MAX15258 IC. In the MAX15258 GUI, the bottom of the window will show the PICO board version, and the bottom right side will show 'MAX15258 EV System Ready.' The MAX15258 GUI also gives users the option to display the format in either HEX or numeric.

Figure 2. MAX15258 GUI PICO Board Connection and EV Kit Detection

<!-- image -->

The MAX15258 GUI allows users to configure the internal reference  voltage  and  current-limit  threshold  through  the VREF\_COMMAND and OC\_FAULT\_LIMIT commands, respectively. VREF\_COMMAND allows users to program the value of internal reference voltage from 0 to 2.2V. By default, VREF\_COMMAND is set to 0V, and the internal reference voltage is set by the REFIN pin. Writing a nonzero value to VREF\_COMMAND will activate the command and set the internal  reference  voltage  value  to  VREF\_COMMAND.  In  multiphase  operation,  VREF\_COMMAND  is  active  for  the primary controller IC only and inactive for the secondary controller IC.

OC\_FAULT\_LIMIT allows users to program the overcurrent threshold (CSPx-CSNx) from 20mV to 100mV. By default, OC\_FAULT\_LIMIT  is  set  to  0V,  and  the  current-limit  threshold  is  set  by  R ILIM .  Writing  a  nonzero  value  to OC\_FAULT\_LIMIT  will  activate  the  command  and  set  the  current-limit  threshold  to  OC\_FAULT\_LIMIT.  When OC\_FAULT\_LIMIT is active, the NOCP threshold will be  -83% of the OC\_FAULT\_LIMIT threshold, and the FPOCP threshold  will  be  33%  higher  than  the  OC\_FAULT\_LIMIT  threshold.  The  fault  response  will  be  the  same  as  R ILIM configuration. In multiphase operation, each IC's OC\_FAULT\_LIMIT should be programmed separately.

Figure 3. Configure Internal Reference Voltage through VREF\_COMMAND

<!-- image -->

Figure 4. Configure Current-Limit Threshold through OC\_FAULT\_LIMIT

<!-- image -->

www.analog.com www.analog.com Analog Devices | 8

Figure 5. MAX15258 GUI Device Page for the Primary Controller IC

<!-- image -->

Figure 6. MAX15258 GUI Device Page for the Secondary Controller IC

<!-- image -->

## MAX15258 Evaluation Kit

Evaluates: MAX15258

The MAX15258 GUI is able to read back the feedback voltage, OUTN voltage, phase 1 and phase 2 current (in voltage format), and IC status. When a fault is detected, the corresponding light in the Status window will turn red. However, if there is no fault occurring, all of the lights in the Status window (except M/S) will be green. For M/S, a red light indicates the IC is the primary controller (M), while the green light indicates the IC is a secondary controller (S). The Clear Faults button below the Status window allows users to clear any fault indicated in the Status window.

The MAX15258 GUI also provides plots for voltage/current telemetry on the right of the GUI. In addition, the MAX15258 GUI allows real-time telemetry reading and plot display by selecting Auto Read in the Comm Settings window.

## MAX15258 Evaluation Kit

## MAX15258 EV Kit Bill of Materials

|   ITEM | REF_DES                                                                                                                               | DNI/DNP   |   QTY | MFR PART#                                                                             | MANUFACTURER                                        | VALUE              | DESCRIPTION                                                                                                                                                                        |
|--------|---------------------------------------------------------------------------------------------------------------------------------------|-----------|-------|---------------------------------------------------------------------------------------|-----------------------------------------------------|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 | AGND, CLOCK, PGND, VDRV                                                                                                               | --        |     4 | 9020 BUSS                                                                             | WEICO WIRE                                          | MAXIMPAD           | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                                                           |
|      2 | AGND1-AGND6, BIAS, BODE+, BODE-, COMP, EN, FB, PGOOD, REFIN, SS, SYNC, VIN_N, VIN_P, VOUT_N, VOUT_P                                   | --        |    20 | 5125                                                                                  | KEYSTONE                                            | N/A                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BROWN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |
|      3 | C1, C44                                                                                                                               | --        |     2 | EEV-FK2A680Q                                                                          | PANASONIC                                           | 68UF               | CAP; SMT (CASE_H13); 68UF; 20%; 100V; ALUMINUM-ELECTROLYTIC                                                                                                                        |
|      4 | C2, C39, C45                                                                                                                          | --        |     3 | TMK107B7105KA; 06033C105KAT2A; C1608X7R1E105K080AE                                    | MURATA; TAIYO YUDEN; AVX; TAIYO YUDEN               | 1UF                | CAP; SMT (0603); 1UF; 10%; 25V; X7R; CERAMIC                                                                                                                                       |
|      5 | C3, C6, C8-C12, C14, C18-C21, C23, C25, C28, C30, C31, C34, C37, C38, C41, C42, C46, C49, C51- C55, C59, C69, C72, C74, C76-C78, C83- | --        |    42 | CGA6M3X7S2A475K200AE; CGA6M3X7S2A475K200AB; GCM32DC72A475KE02                         | TDK; TDK; MURATA                                    | 4.7UF              | CAP; SMT (1210); 4.7UF; 10%; 100V; X7S; CERAMIC                                                                                                                                    |
|      6 | C4, C13, C47, C58, C73, C90, C100, C103                                                                                               | --        |     8 | CC0603KRX7R0BB104; GRM188R72A104KA35; HMK107B7104KA; 06031C104KAT2A; GRM188R72A104K   | YAGEO; MURATA; TAIYO YUDEN; AVX; MURATA             | 0.1UF              | CAP; SMT (0603); 0.1UF; 10%; 100V; X7R; CERAMIC                                                                                                                                    |
|      7 | C5, C7                                                                                                                                | --        |     2 | C0603C101J2GAC                                                                        | KEMET                                               | 100PF              | CAP; SMT (0603); 100PF; 5%; 200V; C0G; CERAMIC                                                                                                                                     |
|      8 | C16, C26, C27, C48                                                                                                                    | --        |     4 | GRM1555C1E102JA01; C1005C0G1E102J050BA                                                | MURATA; TDK                                         | 1000PF             | CAP; SMT (0402); 1000PF; 5%; 25V; C0G; CERAMIC                                                                                                                                     |
|      9 | C17, C36, C50                                                                                                                         | --        |     3 | CC0402KRX7R8BB682; C0402X7R250-682KN                                                  | YAGEO; VENKEL LTD                                   | 6800PF             | CAP; SMT (0402); 6800PF; 10%; 25V; X7R; CERAMIC                                                                                                                                    |
|     10 | C29                                                                                                                                   | --        |     1 | GRM155R71H102JA01; GCM155R71H102JA37                                                  | MURATA; MURATA                                      | 1000PF             | CAP; SMT (0402); 1000PF; 5%; 50V; X7R; CERAMIC                                                                                                                                     |
|     11 | C32                                                                                                                                   | --        |     1 | C0402C103K5RAC; GRM155R71H103KA88; C1005X7R1H103K050BE; CL05B103KB5NNN; UMK105B7103KV | KEMET; MURATA; TDK; SAMSUNG ELECTRONIC; TAIYO YUDEN | 0.01UF             | CAP; SMT (0402); 0.01UF; 10%; 50V; X7R; CERAMIC                                                                                                                                    |
|     12 | C33                                                                                                                                   | --        |     1 | C1005X7R1E473K050BC; GRM155R71E473K; GCM155R71E473KA55                                | TDK; MURATA; MURATA                                 | 0.047UF            | CAP; SMT (0402); 0.047UF; 10%; 25V; X7R; CERAMIC                                                                                                                                   |
|     13 | C35                                                                                                                                   | --        |     1 | GRM155R71H683KE14; GCM155R71H683KE02                                                  | MURATA; MURATA                                      | 0.068UF            | CAP; SMT (0402); 0.068UF; 10%; 50V; X7R; CERAMIC                                                                                                                                   |
|     14 | C40                                                                                                                                   | --        |     1 | GRM188C71E225KE11                                                                     | MURATA                                              | 2.2UF              | CAP; SMT (0603); 2.2UF; 10%; 25V; X7S; CERAMIC                                                                                                                                     |
|     15 | C43, C89, C104, C106                                                                                                                  | --        |     4 | EEH-ZS1J151P                                                                          | PANASONIC                                           | 150UF              | CAP; SMT (CASE_G16); 150UF; 20%; 63V; N/A; ALUMINUM-ELECTROLYTIC                                                                                                                   |
|     16 | C56                                                                                                                                   | --        |     1 | EEE-FK2A220P                                                                          | PANASONIC                                           | 22UF               | CAP; SMT (CASE_F); 22UF; 20%; 100V; ALUMINUM-ELECTROLYTIC                                                                                                                          |
|     17 | C57                                                                                                                                   | --        |     1 | C3216X7R2A105K160AA; GCH31CR72A105KE01; HMK316B7105KLH                                | MURATA; TDK; MURATA; TAIYO YUDEN                    | 1UF                | CAP; SMT (1206); 1UF; 10%; 100V; X7R; CERAMIC                                                                                                                                      |
|     18 | C60                                                                                                                                   | --        |     1 | GRT155R61C105KE01                                                                     | MURATA                                              | 1UF                | CAP; SMT (0402); 1UF; 10%; 16V; X5R; CERAMIC                                                                                                                                       |
|     19 | C61, C64, C105                                                                                                                        | --        |     3 | GRM219R6YA475KA73                                                                     | MURATA                                              | 4.7UF              | CAP; SMT (0805); 4.7UF; 10%; 35V; X5R; CERAMIC                                                                                                                                     |
|     20 | C63, C68                                                                                                                              | --        |     2 | 04025C470KAT2A                                                                        | AVX                                                 | 47PF               | CAP; SMT (0402); 47PF; 10%; 50V; X7R; CERAMIC                                                                                                                                      |
|     21 | C107                                                                                                                                  | --        |     1 | C0402C103J3RAC                                                                        | KEMET                                               | 0.01UF             | CAP; SMT (0402); 0.01UF; 5%; 25V; X7R; CERAMIC                                                                                                                                     |
|     22 | C108                                                                                                                                  | --        |     1 | C0402C104J4RAC; GCM155R71C104JA55                                                     | KEMET; MURATA                                       | 0.1UF              | CAP; SMT (0402); 0.1UF; 5%; 16V; X7R; CERAMIC                                                                                                                                      |
|     23 | C109                                                                                                                                  | --        |     1 | C0402X7R250-562KNE; GRM155R71E562KA01; GMD155R71E562KA01                              | VENKEL LTD; MURATA; MURATA                          | 5600PF             | CAP; SMT (0402); 5600PF; 10%; 25V; X7R; CERAMIC                                                                                                                                    |
|     24 | D1-D4                                                                                                                                 | --        |     4 | BAV16WS-7-F                                                                           | DIODES INCORPORATED                                 | BAV16WS            | DIODE; SWT; SMT (SOD-323); PIV=75V; IF=0.3A                                                                                                                                        |
|     25 | D5                                                                                                                                    | --        |     1 | SMAJ64A                                                                               | LITTELFUSE                                          | 64V                | DIODE; TVS; SMA (DO-214AC); PIV=64V; IF=3.9A                                                                                                                                       |
|     26 | J1, J8, J10                                                                                                                           | --        |     3 | LS2-110-01-S-D-RA1                                                                    | SAMTEC                                              | LS2-110-01-S-D-RA1 | CONNECTOR; THROUGH HOLE; SELF MATING HERMAPHRODITIC STRIP SHROUD DOWN; RIGHT ANGLE; 20PINS                                                                                         |
|     27 | J2, J9, J11                                                                                                                           | --        |     3 | LS2-110-01-S-D-RA2                                                                    | SAMTEC                                              | LS2-110-01-S-D-RA2 | CONNECTOR; THROUGH HOLE; SELF MATING HERMAPHRODITIC STRIP SHROUD UP; RIGHT ANGLE; 20PINS                                                                                           |
|     28 | J3, J4, J12                                                                                                                           | --        |     3 | PEC02SAAN                                                                             | SULLINS                                             | PEC02SAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                                                                          |
|     29 | J6                                                                                                                                    | --        |     1 | TSW-102-26-T-T                                                                        | SAMTEC                                              | TSW-102-26-T-T     | CONNECTOR; THROUGH HOLE; TSW SERIES; TRIPLE ROW; STRAIGHT; 6PINS                                                                                                                   |
|     30 | J7, J13                                                                                                                               | --        |     2 | TSW-110-09-G-S                                                                        | SAMTEC                                              | TSW-110-09-G-S     | CONNECTOR; MALE; THROUGH HOLE; 0.025 IN SQ POST HEADER; STRAIGHT; 10PINS                                                                                                           |
|     31 | L1, L2                                                                                                                                | --        |     2 | SER2918H-103KL                                                                        | COILCRAFT                                           | 10UH               | INDUCTOR; SMT; FERRITE; 10UH; 10%; 28A                                                                                                                                             |
|     32 | L3                                                                                                                                    | --        |     1 | 74408943101                                                                           | WURTH ELECTRONICS INC.                              | 100UH              | INDUCTOR; SMT; MAGNETICALLY SHIELDED FERRITE BOBBIN CORE;                                                                                                                          |

Evaluates: MAX15258

## MAX15258 Evaluation Kit

## Evaluates: MAX15258

|    |                                                    |     |    |                                                  |                                       |                   | 100UH; TOL=+/-20%; 0.52A; -40 DEGC TO +125 DEGC                                                                                              |
|----|----------------------------------------------------|-----|----|--------------------------------------------------|---------------------------------------|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| 33 | MH1-MH4                                            | --  |  4 | P440.375                                         | GENERIC PART                          | N/A               | MACHINE SCREW; SLOTTED; PAN; 4- 40IN; 3/8IN; NYLON                                                                                           |
| 34 | MH1-MH4                                            | --  |  4 | 1902B                                            | GENERIC PART                          | N/A               | STANDOFF; FEMALE-THREADED; HEX; 4- 40IN; 3/8IN; NYLON                                                                                        |
| 35 | Q1-Q8                                              | --  |  8 | BSC160N15NS5ATMA1                                | INFINEON                              | BSC160N15NS5ATMA1 | TRAN; NCH; PG-TDSON8; PD-(96W); I- (56A); V-(150V) ;NOTE:PURCHASE DIRECT FROM THE MANUFACTURER                                               |
| 36 | R1, R2, R28, R29                                   | --  |  4 | CRCW0402221RFK                                   | VISHAY DALE                           | 221               | RES; SMT (0402); 221; 1%; +/- 100PPM/DEGC; 0.0630W                                                                                           |
| 37 | R3, R4, R33, R34, R47-R50                          | --  |  8 | CRCW04022R0FK; CRCW04022R00FK                    | VISHAY DALE; VISHAY DALE              | 2                 | RES; SMT (0402); 2; 1%; +/-100PPM/DEGC; 0.0630W                                                                                              |
| 38 | R6, R7, R36, R37                                   | --  |  4 | 9C04021A10R0FL                                   | YAGEO                                 | 10                | RES; SMT (0402); 10; 1%; +/- 100PPM/DEGC; 0.0630W                                                                                            |
| 39 | R8, R17                                            | --  |  2 | CRCW0402100KFK; RC0402FR-07100KL                 | VISHAY; YAGEO                         | 100K              | RES; SMT (0402); 100K; 1%; +/- 100PPM/DEGC; 0.0630W                                                                                          |
| 40 | R9, R23, R42, R57- R59, R61-R63, R65, R68-R74, R77 | --  | 18 | ERJ-2GE0R00                                      | PANASONIC                             | 0                 | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                                                  |
| 41 | R12                                                | --  |  1 | RC0402FR-0722RL                                  | YAGEO PHYCOMP                         | 22                | RES; SMT (0402); 22; 1%; +/- 100PPM/DEGC; 0.0630W                                                                                            |
| 42 | R14, R39                                           | --  |  2 | WSL20103L000F                                    | VISHAY DALE                           | 0.003             | RES; SMT (2010); 0.003; 1%; +/- 150PPM/DEGC; 0.5000W                                                                                         |
| 43 | R15                                                | --  |  1 | CR0402-FX-1783GLF                                | BOURNS                                | 178K              | RES; SMT (0402); 178K; 1%; +/- 100PPM/DEGC; 0.0630W                                                                                          |
| 44 | R16                                                | --  |  1 | CRCW040241K2FK                                   | VISHAY DALE                           | 41.2K             | RES; SMT (0402); 41.2K; 1%; +/- 100PPM/DEGK; 0.0630W                                                                                         |
| 45 | R18                                                | --  |  1 | CRCW04023322FK; CRCW040233K2FK; RC0402FR-0733K2L | VISHAY; VISHAY; YAGEO                 | 33.2K             | RES; SMT (0402); 33.2K; 1%; +/- 100PPM/DEGC; 0.0630W                                                                                         |
| 46 | R19                                                | --  |  1 | CRCW0402332KFK                                   | VISHAY DALE                           | 332K              | RES; SMT (0402); 332K; 1%; +/- 100PPM/DEGK; 0.0630W                                                                                          |
| 47 | R20                                                | --  |  1 | ERJ-2RKF1002                                     | PANASONIC                             | 10K               | RES; SMT (0402); 10K; 1%; +/- 100PPM/DEGC; 0.1000W                                                                                           |
| 48 | R21                                                | --  |  1 | ERJ-2RKF3922                                     | PANASONIC                             | 39.2K             | RES; SMT (0402); 39.2K; 1%; +/- 100PPM/DEGC; 0.1000W                                                                                         |
| 49 | R22                                                | --  |  1 | CRCW04026K20FK                                   | VISHAY DALE                           | 6.2K              | RES; SMT (0402); 6.2K; 1%; +/- 100PPM/DEGC; 0.0630W                                                                                          |
| 50 | R24, R76                                           | --  |  2 | ERJ-2RKF1001                                     | PANASONIC                             | 1K                | RES; SMT (0402); 1K; 1%; +/- 100PPM/DEGC; 0.1000W                                                                                            |
| 51 | R25, R40                                           | --  |  2 | ERJ-2RKF1202                                     | PANASONIC                             | 12K               | RES; SMT (0402); 12K; 1%; +/- 100PPM/DEGC; 0.1000W                                                                                           |
| 52 | R27, R51, R52                                      | --  |  3 | CRCW060310R0FK; MCR03EZPFX10R0; ERJ-3EKF10R0     | VISHAY DALE; ROHM                     | 10                | RES; SMT (0603); 10; 1%; +/- 100PPM/DEGC; 0.1000W                                                                                            |
| 53 | R30                                                | --  |  1 | CR0402-16W-3013FT;CRCW0402301KFK                 | VENKEL LTD.; VISHAY DALE              | 301K              | RES; SMT (0402); 301K; 1%; +/- 100PPM/DEGC; 0.0630W                                                                                          |
| 54 | R31                                                | --  |  1 | ERJ-2RKF6982                                     | PANASONIC                             | 69.8K             | RES; SMT (0402); 69.8K; 1%; +/- 100PPM/DEGC; 0.1000W                                                                                         |
| 55 | R32                                                | --  |  1 | CRCW0402249KFK                                   | VISHAY DALE                           | 249K              | RES; SMT (0402); 249K; 1%; +/- 100PPM/DEGC; 0.0630W                                                                                          |
| 56 | R35                                                | --  |  1 | CRCW04023M01FK                                   | VISHAY DALE                           | 3.01M             | RES; SMT (0402); 3.01M; 1%; +/- 100PPM/DEGC; 0.0630W                                                                                         |
| 57 | R38                                                | --  |  1 | CRCW040222K1FK                                   | VISHAY DALE                           | 22.1K             | RES; SMT (0402); 22.1K; 1%; +/- 100PPM/DEGC; 0.0630W                                                                                         |
| 58 | R41                                                | --  |  1 | CRCW040282K0FK;MCR01MZPF8202                     | VISHAY DALE; ROHM                     | 82K               | RES; SMT (0402); 82K; 1%; +/- 100PPM/DEGC; 0.0630W                                                                                           |
| 59 | R43-R46                                            | --  |  4 | ERJ-2RKF4701                                     | PANASONIC                             | 4.7K              | RES; SMT (0402); 4.7K; 1%; +/- 100PPM/DEGC; 0.1000W                                                                                          |
| 60 | R53, R55                                           | --  |  2 | CRCW04023K00FK                                   | VISHAY DALE                           | 3K                | RES; SMT (0402); 3K; 1%; +/- 100PPM/DEGC; 0.0630W                                                                                            |
| 61 | R54, R56                                           | --  |  2 | RC0402FR-071KL; MCR01MZPF1001                    | YAGEO; ROHM SEMICONDUCTOR             | 1K                | RES; SMT (0402); 1K; 1%; +/- 100PPM/DEGC; 0.0630W                                                                                            |
| 62 | R79, R80                                           | --  |  1 | RC1608J000CS;CR0603-J/- 000ELF;RC0603JR-070RL    | SAMSUNG ELECTRONICS; BOURNS; YAGEO PH | 0                 | RES; SMT (0603); 0; 5%; JUMPER; 0.1000W                                                                                                      |
| 63 | SW1                                                | --  |  1 | GT21MCBE                                         | C&K COMPONENTS                        | GT21MCBE          | SWITCH; DPDT; THROUGH HOLE; 20V; 0.4VA; GT SERIES; SEALED ULTRAMINIATURE TOGGLE SWITCH; RCOIL= 0.05 OHM; RINSULATION=10G OHM; C&K COMPONENTS |
| 64 | U1, U3                                             | --  |  2 | MAX15013CASA+                                    | ANALOG DEVICES                        | MAX15013CASA+     | IC; DRV; 175V/2A; HIGH-SPEED; HALF- BRIDGE MOSFET DRIVER; NSOIC8-EP                                                                          |
| 65 | U2                                                 | --  |  1 | MAX15258ATX+                                     | ANALOG DEVICES                        | MAX15258ATX+      | EVKIT PART - IC; MAX15258; TEMPORARY FOOTPRINT                                                                                               |
| 66 | U4                                                 | --  |  1 | MAX17760ATC+                                     | ANALOG DEVICES                        | MAX17760ATC+      | IC; VCON; 4.5V TO 76V; 300MILLI-AMP; HIGH-EFFICIENCY; SYNCHRONOUS STEP-DOWN DC-DC CONVERTER; TDFN12-EP                                       |
| 67 | U5                                                 | --  |  1 | MAX14933ASE+                                     | ANALOG DEVICES                        | MAX14933ASE+      | IC; ISO; TWO-CHANNEL; 2.75KV I2C ISOLATOR; NSOIC16                                                                                           |
| 68 | VIN+, VIN-, VOUT+, VOUT-                           | --  |  4 | 111-2223-001                                     | EMERSON NETWORK POWER                 | 111-2223-001      | MACHINE SCREW; THUMBSCREW; BANANA; 1/4-32IN; 11/32IN; NICKEL PLATED BRASS                                                                    |
| 69 | PCB                                                | --  |  1 | MAX15258DL                                       | ANALOG DEVICES                        | PCB               | PCB:MAX15258DL                                                                                                                               |
| 70 | C15                                                | DNP |  1 | C0402C102K5GAC                                   | KEMET                                 | 1000PF            | CAP; SMT (0402); 1000PF; 10%; 50V; C0G; CERAMIC                                                                                              |

## MAX15258 Evaluation Kit

## Evaluates: MAX15258

|   71 | C22, C24, C101, C102                       | DNP   |   4 | GJM1555C1HR10WB01                                                                  | MURATA                                                  | 0.1PF   | CAP; SMT (0402); 0.1PF; 50V; C0G; CERAMIC            |
|------|--------------------------------------------|-------|-----|------------------------------------------------------------------------------------|---------------------------------------------------------|---------|------------------------------------------------------|
|   72 | C62, C67                                   | DNP   |   2 | GRM155R72A221KA01                                                                  | MURATA                                                  | 220PF   | CAP; SMT (0402); 220PF; 10%; 100V; X7R; CERAMIC      |
|   73 | C65, C66                                   | DNP   |   2 | C0402C0G500-470JNE; CC0402JRNPO9BN470; GRM1555C1H470JA01; CL05C470JB5NNN           | VENKEL LTD.; YAGEO PHYCOMP; MURATA; SAMSUNG ELECTRONICS | 47PF    | CAP; SMT (0402); 47PF; 5%; 50V; C0G; CERAMIC         |
|   74 | C70, C71                                   | DNP   |   2 | C1005X7R1H104K050BB; GRM155R71H104KE14; C1005X7R1H104K050BE; UMK105B7104KV-FR      | TDK; MURATA; TDK; TAIYO YUDEN                           | 0.1UF   | CAP; SMT (0402); 0.1UF; 10%; 50V; X7R; CERAMIC       |
|   75 | C75, C79-C82, C86- C88, C91, C92, C96- C99 | DNP   |  14 | CGA6M3X7S2A475K200AE; CGA6M3X7S2A475K200AB; GCM32DC72A475KE02                      | TDK; TDK; MURATA                                        | 4.7UF   | CAP; SMT (1210); 4.7UF; 10%; 100V; X7S; CERAMIC      |
|   76 | R5                                         | DNP   |   1 | CRCW0603100KFK; RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL | VISHAY DALE; YAGEO; YAGEO; PANASONIC                    | 100K    | RES; SMT (0603); 100K; 1%; +/- 100PPM/DEGC; 0.1000W  |
|   77 | R10, R11, R13, R64, R75, R78               | DNP   |   6 | ERJ-2GE0R00                                                                        | PANASONIC                                               | 0       | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W          |
|   78 | R26, R60                                   | DNP   |   2 | CRCW06030000ZS;MCR03EZPJ000;ERJ- 3GEY0R00;CR0603AJ/-000ELF                         | VISHAY; ROHM SEMICONDUCTOR; PANASONIC; BOURNS           | 0       | RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W          |
|   79 | R66, R67                                   | DNP   |   2 | WSL20103L000F                                                                      | VISHAY DALE                                             | 0.003   | RES; SMT (2010); 0.003; 1%; +/- 150PPM/DEGC; 0.5000W |

## MAX15258 Evaluation Kit

## MAX15258 EV Kit Schematics

<!-- image -->

Evaluates: MAX15258

## MAX15258 EV Kit Schematics (continued)

<!-- image -->

Evaluates: MAX15258

## MAX15258 EV Kit PCB Layout Diagrams

MAX15258 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

## MAX15258 EV Kit PCB Layout Diagrams (continued)

MAX15258 EV Kit PCB Layout-Top Layer

<!-- image -->

## MAX15258 Evaluation Kit

## MAX15258 EV Kit PCB Layout Diagrams (continued)

MAX15258 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

Evaluates: MAX15258

## MAX15258 EV Kit PCB Layout Diagrams (continued)

MAX15258 EV Kit PCB Layout-Internal Layer 3

<!-- image -->

## MAX15258 EV Kit PCB Layout Diagrams (continued)

MAX15258 EV Kit PCB Layout-Internal Layer 4

<!-- image -->

Evaluates: MAX15258

## MAX15258 EV Kit PCB Layout Diagrams (continued)

MAX15258 EV Kit PCB Layout-Internal Layer 5

<!-- image -->

## MAX15258 EV Kit PCB Layout Diagrams (continued)

MAX15258 EV Kit PCB Layout-Bottom Layer

<!-- image -->

Evaluates: MAX15258

## MAX15258 Evaluation Kit

## MAX15258 EV Kit PCB Layout Diagrams (continued)

MAX15258 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

Evaluates: MAX15258

## MAX15258 Evaluation Kit

## Ordering Information

| PART NUMBER       | TYPE   |
|-------------------|--------|
| MAX15258DL2EVKIT# | EV Kit |

# Denotes RoHS-compliant.

Evaluates: MAX15258

## MAX15258 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/22            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

Evaluates: MAX15258