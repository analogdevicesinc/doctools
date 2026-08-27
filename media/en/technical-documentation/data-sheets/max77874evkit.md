<!-- lastmod 2022-08-02 -->
## MAX77874 Evaluation Kit

## General Description

The MAX77874 evaluation kit (EV kit) is a fully assembled and tested printed circuit board (PCB) that demonstrates the MAX77874. The EV kit allows for easy evaluation of the  MAX77874 quad-phase core buck regulator by providing access to the I 2 C bus and including an on-board load pulse generator circuit. The EV kit also serves as a guide for layout and design with the MAX77874.

Windows ® -based software provides a user-friendly graphical interface as well as a detailed register-based interface to exercise the features of the MAX77874.

Ordering Information appears at end of data sheet.

## MAX77874 EV Kit

## Features

- Quad-Phase Core Buck Regulator
- Test Points for Both Local Output and Remote Sense
- Exercise DVS with Simple GUI Tool
- On-Board Load Pulse Generator Circuit
- Adjust Load Current with Parallel Resistor Loads
- Easily Perform Load Transients with the Press of a Button
- I 2 C Interface
- Access Through USB Port or Directly Through SDA and SCL Test Points
- Lead-Free and RoHS Compliant
- Software GUI and Command Module
- Assembled and Tested

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corp.

Evaluates: MAX77874

<!-- image -->

## EV Kit Detail

Figure 1. MAX77874 EV Kit Top View

<!-- image -->

## MAX77874 Evaluation Kit

Figure 2. MAX77874 Top View Main Components

<!-- image -->

## Quick Start

Follow this procedure to become familiar with the EV kit.

## Required Equipment

- MAX77874 EV kit
- Windows-based PC
- Power supply
- Ammeter
- DVM
- Micro-USB cable
- GUI

## Procedure

- 1) Install GUI software. Visit www.maximintegrated. com/evkitsoftware to download the latest version of the EV kit software. Save the EV kit software to a temporary folder and unzip the ZIP file.
- 2) Ensure that shunts are installed on the jumpers per Table 1.
- 3) Apply a 3.7V supply (set for 100mA current limit) through an ammeter (set for 100mA range) across the VSYS and PGND terminals of the EV kit.
- 4) Connect a micro-USB cable between the EV kit's J4 and your Windows-based PC.
- 5) Turn on the power supply.
- 6) Open the GUI and press the Connect button in the upper-left corner. If the Connect button does not appear, first press File , then click Show Menu Shortcuts . Wait for the device to respond, and in the Synchronize window, press the Read and Close button.
- 7) Measure the output voltage with the DVM. Ensure it is 0.9V.
- 8) Check that the quiescent current on the ammeter is approximately 400μA.
- 9) In the GUI, move the slider for Output Voltage (DVS = 0) to 1100mV and click the Write button. Ensure that the output now reads 1.1V.
- 10)  Note that there is a shunt connected to J200. Press and hold SW200, and check the ammeter reads approximately 23mA. This verifies that the pulse generator is working properly.
- 11)  This concludes the Quick Start procedure. Users are now encouraged to explore the device and its register settings with the GUI.

│

Table 1. Default Shunt Positions and Jumper Descriptions

| REFERENCE DESIGNATOR   | DEFAULT POSITION   | FUNCTION                                                                                                      |
|------------------------|--------------------|---------------------------------------------------------------------------------------------------------------|
| J2                     | 2-3                | 1-2: Connect DVS to VIO. 2-3: Connect DVS to GND.                                                             |
| J3                     | 1-2                | 1-2: Connect EN to VIO. 2-3: Connect EN to GND.                                                               |
| J100                   | -                  | Do not connect shunts to J100.                                                                                |
| J101                   | 1-2                | 1-2: Connect VIO to the 3.3V EV kit logic rail. 2-3: Connect VIO to the 1.8V EV kit logic rail.               |
| J200                   | 1-2                | Connect a 0.5Ω resistor in the load pulse generator circuit from VOUT to Q200.                                |
| J201                   | -                  | Connect a 0.5Ω resistor in the load pulse generator circuit from VOUT to Q200.                                |
| J202                   | -                  | Connect a 0.5Ω resistor in the load pulse generator circuit from VOUT to Q200.                                |
| J203                   | -                  | Connect a 0.5Ω resistor in the load pulse generator circuit from VOUT to Q200.                                |
| J204                   | -                  | Connect a 0.5Ω resistor in the load pulse generator circuit from VOUT to Q200.                                |
| J205                   | -                  | Connect a 0.5Ω resistor in the load pulse generator circuit from VOUT to Q200.                                |
| J206                   | -                  | Connect a 0.5Ω resistor in the load pulse generator circuit from VOUT to Q200.                                |
| J207                   | 1-2                | Connect the 5V USB rail to the supply of the 555 timer of the load pulse generator circuit.                   |
| J208                   | -                  | Connect a shunt to select the 100 µ s period for the pulse generator.                                         |
| J209                   | 1-2                | Connect a shunt to select the 1ms period for the pulse generator.                                             |
| J210                   | -                  | Connect a shunt to select the 10ms period for the pulse generator.                                            |
| J211                   | -                  | Connect a shunt to select the 100ms period for the pulse generator.                                           |
| J212                   | -                  | Connect a shunt to select the 1% duty cycle setting for the pulse generator.                                  |
| J213                   | -                  | Connect a shunt to select the 1.5% duty cycle setting for the pulse generator.                                |
| J214                   | -                  | Connect a shunt to select the 2% duty cycle setting for the pulse generator.                                  |
| J215                   | 1-2                | Connect a shunt to select the 3% duty cycle setting for the pulse generator.                                  |
| J216                   | -                  | Connect a shunt to select the 5% duty cycle setting for the pulse generator.                                  |
| J217                   | -                  | Connect a shunt to select the 7% duty cycle setting for the pulse generator.                                  |
| J218                   | 1-2                | 1-2: Drive the load FET with the pulse generator circuit. 2-3: Drive the load FET externally with EXT_PLS_IN. |

Evaluates: MAX77874

## MAX77874 Evaluation Kit

## Software

The  graphical  user  interface  (GUI)  software  allows  for quick, easy, and thorough evaluation of the MAX77874.

The GUI is designed to be very simple, with all necessary controls on a single page. See Figure 3 for a screenshot of the GUI upon first opening.

## Installation

Visit www.maximintegrated.com/evkitsoftware to download the latest version of the EV kit software. Save the EV kit software to a temporary folder and decompress the ZIP file.

## Windows Drivers

Upon connection of a micro-USB cable between your PC and the EV kit for the first  time,  wait  a  few  minutes  for Windows to automatically install the necessary drivers.

## Graphical User Interface Details (GUI)

The GUI drives I2C communication with the EV kit. Every control in the GUI corresponds to a register setting within the MAX77874. Refer to the register map within the device data sheet for a complete description of the registers.

Figure 3. MAX77874 Evaluation Kit GUI Top-Level Interface

<!-- image -->

│

## On-Board Load Pulse Generator

To facilitate quick evaluation of the load transient response of the MAX77874, the EV kit includes a pulse generator circuit that connects a parallel array of 0.5Ω resistors to the output.

To  operate  the  load  pulse  circuit,  attach  shunts  to  the various  jumpers  to  select  the  effective  load  resistance, and  period/duty  cycle  of  the  pulse  train.  Use  jumpers J200-J206 to connect a desired combination of resistors to the output, J208-211 to select a period, and J212-J217 to select a duty cycle. Note that the EV kit defaults to 3% on a 1ms period or a 30μs pulse width. Once the settings are correct, press the SW200 button to connect the resistors to the output through a FET that is switching at the

## Ordering Information

| PART NUMBER    | TYPE   |
|----------------|--------|
| MAX77874EVKIT# | EV kit |

#Denotes RoHS compliant.

specified duty cycle and period, loading the buck regulator. Since the is generating many load pulses very quickly, the button does not need to be held down for long.

If a custom load pattern is desired, simply move the shunt on J218 to position (2-3). This connects the gate of the FET to a 50Ω resistor to GND. Then, attach a function generator with 50Ω termination to EXT\_PLS\_IN to drive the switch.

To properly view the transient response, ensure that the scope is triggered off of the gate of the load switch (J218, pin  2),  and  connect  another  scope  probe  to  the  at  the sense terminals (VOUTS and PGNDS test points on the EV kit).

## MAX77874 EV System Bill of Materials

| REF_DES                                  | DNI/DNP   |   QTY | MFG PART #                                                                 | MANUFACTURER                          | VALUE         | DESCRIPTION                                                                                                           | COMMENTS       |
|------------------------------------------|-----------|-------|----------------------------------------------------------------------------|---------------------------------------|---------------|-----------------------------------------------------------------------------------------------------------------------|----------------|
| C1-C4, C110-C113, C115, C118, C120, C158 | -         |    12 | GRM155R60J105KE19D                                                         | MURATA                                | 1UF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R;                     |                |
| C5-C8, C17-C20                           | -         |     8 | GRM155R60J106ME15                                                          | MURATA                                | 10UF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 10UF; 6.3V; TOL=20%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR         |                |
| C9-C16                                   | -         |     8 | GRM155R60G226ME11                                                          | MURATA                                | 22UF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 22UF; 4V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                               |                |
| C21-C23                                  | -         |     3 | GRM155R61A475MEAA                                                          | MURATA                                | 4.7UF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 10V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR |                |
| C24, C25                                 | -         |     2 | GRM033R61A105ME15D                                                         | MURATA                                | 1UF           | CAPACITOR; SMT (0201); CERAMIC CHIP; 1UF; 10V; TOL=20%; MODEL=CL SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR  |                |
| C26-C29                                  | -         |     4 |                                                                            |                                       | OPEN          | CAPACITOR; SMT (0201); OPEN; FORMFACTOR                                                                               | Do not install |
| C30                                      | -         |     1 | GRM188R60J106ME47; CC0603MRX5R5BB106; C1608X5R0J106M080; CL10A106MQ8NNN    | MURATA/YAGEO/TDK/ SAMSUNG ELECTRONICS | 10UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 6.3V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                             |                |
| C31                                      | -         |     1 | C1210C107M9PAC; C1210X5R6R3-107MNE; GRM32ER60J107ME20; C3225X5R0J107M250AC | KEMET; VENKEL LTD.; MURATA; TDK       | 100UF         | CAPACITOR; SMT (1210); CERAMIC CHIP; 100UF; 6.3V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                            |                |
| C32-C35                                  | -         |     4 |                                                                            |                                       | OPEN          | CAPACITOR; SMT (0402); OPEN; FORMFACTOR                                                                               | Do not install |
| C36                                      | -         |     1 | 6TPD470M                                                                   | PANASONIC                             | 470UF         | CAPACITOR; SMT (CASE_D4D); TANTALUM CHIP; 470UF; 6.3V; TOL=20%                                                        |                |
| C108, C150, C151, C155- C157, C159       | -         |     7 | GRM155R71C104KA88D                                                         | MURATA                                | 0.1UF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R-                   |                |
| C114                                     | -         |     1 | C0603C474K4RAC; GRM188R71C474K                                             | KEMET/MURATA                          | 0.47UF        | CAPACITOR; SMT; 0603; CERAMIC; 0.47uF; 16V; 10%; X7R; -55degC to + 125degC; 0 +/- 15% degC MAX.                       |                |
| C152, C153                               | -         |     2 | C0402C0G500-150JNP; GRM1555C1H150JA01                                      | VENKEL LTD./MURATA                    | 15PF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 15PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                              |                |
| C154                                     | -         |     1 | C1608X5R1C475K080AC                                                        | TDK/TAIYO YUDEN                       | 4.7UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 16V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R                     |                |
| C200, C203, C218                         | -         |     3 | GRM188R71E105KA12D; CGA3E1X7R1E105K; TMK107B7105KA                         | MURATA; TDK; TAIYO YUDEN              | 1UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 25V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R            |                |
| C201                                     | -         |     1 | C0402C103K3RAC; GRM155R71E103KA01D; C1005X7R1E103K                         | KEMET; MURATA; TDK                    | 0.01UF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;                          |                |
| C202                                     | -         |     1 | GRM155R71E104KE14                                                          | MURATA                                | 0.1UF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R          |                |
| C204                                     | -         |     1 | TMK212BBJ106KG-T; CL21A106KAFN3N                                           | TAIYO YUDEN                           | 10UF          | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 25V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R                      |                |
| C205                                     | -         |     1 |                                                                            |                                       | OPEN          | CAPACITOR; SMT (0805); OPEN; IPC MAXIMUM LAND PATTERN                                                                 | Do not install |
| D100, D101                               | -         |     2 | LTST-C190YKT                                                               | LITE-ON ELECTRONICS; INC.             | LTST- C190YKT | DIODE; LED; STANDARD; YELLOW; SMT (0603); PIV=5.0V; IF=0.02A; -55 DEGC TO +85 DEGC                                    |                |

Evaluates: MAX77874

## MAX77874 EV System Bill of Materials (continued)

| REF_DES                                                | DNI/DNP   |   QTY | MFG PART #         | MANUFACTURER              | VALUE            | DESCRIPTION                                                                                                             | COMMENTS       |
|--------------------------------------------------------|-----------|-------|--------------------|---------------------------|------------------|-------------------------------------------------------------------------------------------------------------------------|----------------|
| D102, D103                                             | -         |     2 | LTST-C190CKT       | LITE-ON ELECTRONICS; INC. | LTST- C190CKT    | DIODE; LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; 55 DEGC TO +85 DEGC                                          | -              |
| D200, D201                                             | -         |     2 | 1N4148W-V          |                           | 1N4148W- V       | DIODE, SMALL SIGNAL FAST SWITCHING, SMT (SOD-123), PIV=100V, IF=0.15A                                                   |                |
| EN, V+, DVS, SCL, SDA, VIO, NIRQ, VOUTS, VSYSS, DRAINS | -         |    10 | 5010               | KEYSTONE                  |                  | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                      |                |
| PLS_OUT, EXT_PLS_IN                                    | -         |     2 | 5000               | KEYSTONE                  |                  | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;        |                |
| FB100                                                  | -         |     1 | BLM18PG221SN1      | MURATA                    | 220              | INDUCTOR; SMT (0603); FERRITE-BEAD; 220; TOL=+/- 25%; 1.4A; -55 DEGC TO +125 DEGC                                       |                |
| GND                                                    | -         |     1 | 5001               | KEYSTONE                  |                  | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;      |                |
| GND4, GND5, PGND, VOUT, VSYS, PGND2                    | -         |     6 | 9020 BUSS          | WEICO WIRE                | MAXIMPAD         | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE- S; 20AWG                               |                |
| J2, J3, J101, J218                                     | -         |     4 | TSW-103-07-L-S     | SAMTEC                    | TSW-103- 07-L-S  | CONNECTOR; THROUGH HOLE; SINGLE ROW; STRAIGHT; 3PINS                                                                    |                |
| J4                                                     | -         |     1 | 10103592-0001LF    | FCI CONNECT               | 10103592- 0001LF | CONNECTOR; FEMALE; SMT; MICRO USB B-TYPE REVERSE; RIGHT ANGLE; 5PINS                                                    |                |
| J100                                                   | -         |     1 | TSW-105-07-L-S     | SAMTEC                    | TSW-105- 07-L-S  | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 5PINS                                                        |                |
| J200-J217                                              | -         |    18 | TSW-102-07-T-S     | SAMTEC                    | TSW-102- 07-T-S  | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +105 DEGC                                 |                |
| L1-L4                                                  | -         |     4 | DFE201210S-R24M    | MURATA                    | 0.24UH           | EVKIT PART-INDUCTOR; SMT (DFE2016_DFE2012 DUAL LEAST FOOTPRINT); METAL ALLOY CHIP; 0.24UH; TOL=+/- 20%; 4.9A;           |                |
| L5-L8                                                  | -         |     4 | DFE201610E-R24M    | TOKO                      | 0.24UH           | INDUCTOR; SMT (2016); METAL ALLOY CHIP; 0.24UH; TOL=+/- 20%; 7A                                                         |                |
| PGNDS                                                  | -         |     1 | 5011               | KEYSTONE                  |                  | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |                |
| Q100                                                   | -         |     1 | SSM6N44FE          | TOSHIBA                   | SSM6N44F E       | TRAN; SILICON DUAL N- CHANNEL MOS TYPE; FIELD EFFECT TRANSISTOR; NCH; SOT563-6; PD-(0.15W); I-(0.1A); V- (30V)          |                |
| Q200                                                   | -         |     1 | FDS6574A           | FAIRCHILD SEMICONDUCTOR   | FDS6574A         | TRAN; 20V N-CHANNEL POWER TRENCH MOSFET; NCH; NSOIC8; PD-(2.5W); I-(16A); V- (20V)                                      |                |
| R1, R2, R143, R147- R149, R152, R155                   | -         |     8 | CRCW04020000Z0EDHP | VISHAY                    | 0                | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM; FORMFACTOR                                                        |                |
| R3,R4,R212                                             | -         |     3 |                    |                           | OPEN             | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                        | Do not install |

RESISTOR; 0402; 100K; 1%;

100PPM; 0.0625W; THICK FILM;

FORMFACTOR

RESISTOR, 0402, 4.7K OHM, 1%,

100PPM, 0.0625W, THICK FILM

RESISTOR, 0402, 22 OHM, 1%,

100PPM, 0.0625W, THICK FILM;

FORMFACTOR

RESISTOR; 0402; 100 OHM; 1%;

100PPM; 0.063W; THICK FILM

R5, R115

R100, R106, R107, R118

R103, R123

R108, R109

-

-

-

-

2

4

2

2

RC0402FR-07100K

CRCW04024K70FK

RC0402FR-0722RL

CRCW0402100RFK;

9C04021A1000FL; RC0402FR-

07100RL

YAGEO

VISHAY DALE

YAGEO

VISHAY DALE;

PANASONIC; YAGEO

PHYCOMP

100K

4.7K

22

100

## MAX77874 EV System Bill of Materials (continued)

| REF_DES         | DNI/DNP   |   QTY | MFG PART #                                                 | MANUFACTURER                        | VALUE           | DESCRIPTION                                                                                                 | COMMENTS       |
|-----------------|-----------|-------|------------------------------------------------------------|-------------------------------------|-----------------|-------------------------------------------------------------------------------------------------------------|----------------|
| R110, R151      | -         |     2 | RC0402JR-07470RL                                           | YAGEO                               | 470             | RESISTOR, 0402, 470 OHM, 1%, 100PPM, 0.0625W, THICK FILM; FORMFACTOR                                        |                |
| R122            | -         |     1 | RC0603FR-071ML                                             | YAGEO                               | 1M              | RESISTOR; 0603; 1M; 1%; 100PPM; 0.10W; THICK FILM; FORMFACTOR                                               |                |
| R142            | -         |     1 | CRC06030000Z0EA                                            | VISHAY                              | 0               | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM; FORMFACTOR                                            |                |
| R153            | -         |     1 | CRCW040210K0FK; RC0402FR-0710K                             | VISHAY DALE; YAGEO PHICOMP          | 10K             | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                                        |                |
| R200-R205, R225 | -         |     7 | LRC-LR2512LF-01-R500-F                                     | TT ELECTRONICS                      | 0.5             | RESISTOR; 2512; 0.5 OHM; 1%; 100PPM; 2.0W; METAL FILM                                                       |                |
| R208            | -         |     1 | CRCW040249R9FK; RK73H1ETTP49R9F                            | VISHAY DALE/KOA SPEER               | 49.9            | RESISTOR; 0402; 49.9 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                                   |                |
| R211            | -         |     1 | CRCW0402100KFK; RC0402FR-07100KL                           | VISHAY DALE; YAGEO PHICOMP          | 100K            | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM                                                       |                |
| R213, R215-R222 | -         |     9 | RCC-0402PW1000F                                            | INTERNATIONAL MANUFACTURING SERVICE | 100             | RESISTOR; 0402; 100 OHMS; 1%; 100PPM; 0.080W; THICK FILM                                                    |                |
| R214            | -         |     1 | ERJ-2RKF68R1X                                              | PANASONIC                           | 68.1            | RESISTOR; 0402; 68.1 OHM; 1%; 50PPM; 0.063W; THICK FILM 3- LAYER ELECTRODE                                  |                |
| R223            | -         |     1 | CRCW0603499RFK; RK73H1J4990FT; ERJ- 3EKF4990V; RC1608F4990 | KOA; VISHAY; PANASONIC; SAMSUNG     | 499             | RESISTOR; 0603; 499 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                      |                |
| R224            | -         |     1 | CHPHT0603K1002FGT                                          | VISHAY SFERNICE                     | 10K             | RESISTOR; 0603; 10K OHM; 1%; 100PPM; 0.0125W; THICK FILM                                                    |                |
| SW200           | -         |     1 | EVQ-Q2K03W                                                 | PANASONIC                           | EVQ- Q2K03W     | SWITCH; SPST; SMT; 15V; 0.02A; LIGHT TOUCH SWITCH; RCOIL= OHM; RINSULATION= OHM; PANASONIC                  |                |
| U1              | -         |     1 | MAX77874                                                   | MAXIM                               | MAX77874        | EVKIT PART-IC; REG; QUAD- PHASE CORE BUCK REGULATOR; WLP48                                                  |                |
| U100            | -         |     1 | MAXQ2000-RBX+                                              | MAXIM                               | MAXQ2000- RBX+  | IC; CTRL; LOW-POWER LCD MICROCONTROLLER; TQFN56- EP 8X8                                                     |                |
| U101            | -         |     1 | FT232RQ                                                    | FUTURE TECHNOLOGY DEVICES INTL LTD. | FT232RQ         | IC; INFC; UART INTERFACE IC USB TO SERIAL; QFN32-EP 5X5                                                     |                |
| U102            | -         |     1 | MAX8511EXK33+                                              | MAXIM                               | MAX8511E XK33   | IC; VREG; ULTRA-LOW-NOISE, HIGH PSRR, LOW-DROPOUT, LINEAR REGULATOR; SC70-5 ; - 40 DEGC TO +85 DEGC         |                |
| U103            | -         |     1 | MAX8511EXK18+                                              | MAXIM                               | MAX8511E XK18+  | IC; VREG; ULTRA-LOW-NOISE; HIGH PSRR; LOW=DROPOUT; LINEAR REGULATOR; SC70-5                                 |                |
| U104            | -         |     1 | MAX8511EXK25+                                              | MAXIM                               | MAX8511E XK25-T | IC; VREG; ULTRA-LOW-NOISE HIGH PSRR LOW-DROPOUT LINEAR REGULATOR; SC70-5 ; - 40 DEGC TO +85 DEGC            |                |
| U107            | -         |     1 | MAX3395EETC                                                | MAXIM                               | MAX3395E ETC    | IC; TRANS; 15KV ESD- PROTECTED HIGH-DRIVE CURRENT QUAD-LEVEL TRANSLATOR WITH SPEED-UP CIRCUITRY; TQFN12 4X4 |                |
| U200            | -         |     1 | MIC1555YM5                                                 | MICREL                              | MIC1555Y M5     | IC; TIMR; ITTYBITTY RC TIMER/OSCILLATOR; SOT23-5                                                            |                |
| U201            | -         |     1 | MAX5048AATT+                                               | MAXIM                               | MAX5048A ATT+   | IC; DRV; MOSFET DRIVER; TDFN6-EP                                                                            |                |
| Y101            | -         |     1 | CX3225SB16000D0FLJZZ                                       | KYOCERA-KINSEKI                     | 16MHZ           | CRYSTAL; SMT (3225) 3.2X2.5; 8PF; 16MHZ; +/-10PPM; +/- 15PPM                                                |                |
| EXT-R           | DNP       |     0 | 9020 BUSS                                                  | WEICO WIRE                          | MAXIMPAD        | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE- S; 20AWG                   | Do not install |
| PCB             | -         |     1 | PB11_MAX77874_SOLDERD OWN_REVD                             | MAXIM                               | PCB             | PCB Board:                                                                                                  |                |

## MAX77874 EV System Schematic

<!-- image -->

│

## MAX77874 EV System Schematic (continued)

<!-- image -->

│

## MAX77874 EV System Schematic (continued)

<!-- image -->

│

## MAX77874 EV System PCB Layout

MAX77874 EV Top Silkscreen

<!-- image -->

MAX77874 EV Bottom Silkscreen

<!-- image -->

│

## MAX77874 EV System PCB Layout (continued)

MAX77874 EV Fab Notes

<!-- image -->

MAX77874 EV Top Layer

<!-- image -->

│

## MAX77874 EV System PCB Layout (continued)

MAX77874 EV Internal Layer 2

<!-- image -->

MAX77874 EV Internal Layer 3

<!-- image -->

│

## MAX77874 EV System PCB Layout (continued)

MAX77874 EV Bottom Layer

<!-- image -->

│

## MAX77874 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/16           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0axim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX77874