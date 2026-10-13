<!-- lastmod 2022-08-02 -->
## MAX77752 Evaluation Kit

## General Description

The MAX77752 evaluation kit (EV kit) is a fully assembled and tested printed circuit board (PCB) that demonstrates the  highly  integrated  MAX77752  PMIC. The  MAX77752 comprises  three  buck  converters,  a  low  dropout  linear regulator,  two  external  regulators  enable  outputs,  two dedicated load switch controllers,  and  an  inrush-current limiter  which  can  be  configured  as  a  third  load  switch controller using OTP.

The  EV  kit  also  includes  a  MAXQ2000  microcontroller command  module  that  provides  the  I 2 C  interface  to control power sequence, inrush current, individual output on/off, and setting regulator output voltage.

The MAX77752 evaluation software is provided for easy evaluation.

Evaluates: MAX77752

## Benefits and Features

- ● USB to I 2 C Converter Allows for Easy Communication
- ● Level Translator (MAX3395) Allows for Adjusting I 2 C Bus Voltage from 1.8V to 3.3V
- On-Board Electronics Load Allows for Easy Evaluation
- GUI Allows Static/Dynamic Load Adjustment for Buck Converters, LDO, LSWs, and SYS
- MOSFET can be Driven by External Function Generator to Evaluate Transient Performance for Each Regulator
- ● Proven PCB Reference Design and Layout
- ● Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Figure 1. MAX77752 EV Kit Photo

<!-- image -->

<!-- image -->

Evaluates: MAX77752

Figure 2. MAX77752 EV Kit Block Diagram

<!-- image -->

│

Figure 3: MAX77752 EV Kit Top View

<!-- image -->

## MAX77752 Evaluation Kit

Table 1. Default Shunt Positions and Jumper Descriptions

| REFERENCE DESIGNATOR   | DEFAULT POSITION   | FUNCTION                                                                |
|------------------------|--------------------|-------------------------------------------------------------------------|
| J1                     | OPEN               | 1-2: Connects LP_REQ to LP_MODE.                                        |
| J2                     | OPEN               | 1-2: Connects VSYS to external regulators.                              |
| J3                     | OPEN               | 1-2: Connects VL to GPIO expander pullup resistors.                     |
| J4                     | 2-3                | 1-2: Connects LP_MODE to VSYS. 2-3: Connects LP_MODE to GND.            |
| J5                     | OPEN               | 1-2: Connects IN_PHUP to VSYS.                                          |
| J6                     | OPEN               | 1-2: Connects VBUCK1 to Drain of LSW1 MOSFET.                           |
| J7                     | OPEN               | 1-2: Connects VBUCK2 to drain of LSW2 MOSFET.                           |
| J9                     | OPEN               | 1-2: Connects EREG_POK to GND.                                          |
| J10                    | 1-2                | 1-2: Connects VSYS to IN_LDO.                                           |
| J101                   | 2-3                | 1-2: Connects 3.3V to VL. 2-3: Connects 1.8V to VL.                     |
| J103                   | OPEN               | 1-2: Connects VIN to VUSB.                                              |
| J200                   | 1-2                | 1-2, 3-4: Connects the U200 amplifier to the gate of the Q200 load FET. |
| J208                   | 1-2                | 1-2, 3-4: Connects the U204 amplifier to the gate of the Q204 load FET. |
| J209                   | 1-2, 3-4           | 1-2, 3-4: Connects SYS to drain of the Q204 FET.                        |
| JU201                  | 1-2, 3-4           | 1-2, 3-4: Connects VBUCK1 to drain of Q200 load FET.                    |
| JU202                  | 1-2                | 1-2: Connects the U201 amplifier to the gate of the Q201 load FET.      |
| JU203                  | 1-2, 3-4           | 1-2, 3-4: Connects VBUCK2 to drain of Q201 load FET.                    |
| JU204                  | 1-2                | 1-2: Connects the U202 amplifier to the gate of the Q202 load FET.      |
| JU205                  | 1-2, 3-4           | 1-2, 3-4: Connects VBUCK3 to drain of Q202 load FET.                    |
| JU206                  | 1-2                | 1-2: Connects the U203 amplifier to the gate of the Q203 load FET.      |
| JU207                  | 1-2                | 1-2: Connects VLDO to drain of Q203 load FET.                           |

## Table 2. Default Voltages (CID4 = 0x07)

| REGULATOR   | EXPECTED VOLTAGE (V) (OPTION1)   |
|-------------|----------------------------------|
| BUCK1       | 1.8                              |
| BUCK2       | 1.35                             |
| BUCK3       | 1.05                             |
| LDO         | 1.8                              |
| LSW1        | 1.35                             |
| LSW2        | OFF                              |

│

Evaluates: MAX77752

## MAX77752 Evaluation Kit

## Quick Start

Follow this procedure to familiarize yourself with the EV kit.

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Required Equipment

- ● MAX77752 EV kit
- ● Windows ® -based PC
- ● Power supply
- ● Ammeter
- ● DVM
- ● Micro-USB cable
- ● GUI

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Install all shunts as recommended in Table 1.
- 2) Connect a disabled 5.0V bench power supply through an ammeter to VIN and GND wire loops.  Set the input current limit of the bench supply to 3A. Do not enable the output of the bench supply until prompted.
- 3) Using a jumper wire, connect LSW1 to BUCK2.
- 4) Enable the output of the 5V and 1.8V bench power supply. Quiescent current of the 5V supply should be approximately 370µA (300µA with USB connected).
- 5) Connect a Micro-B USB cable between the EV kit and the PC.
- 6) Wait a few seconds for your computer to install the USB driver. Once the driver is successfully installed, a Window's pop-up message shows that the 'USB Serial Converter' is ready to use.
- 7) Open the MAX77752 GUI.
- 8) In  the  upper  left  corner  of  the  GUI,  select Device . Connect as shown in Figure  4.  Once  connected,  a pop-up window is shown (see Figure 5). Click on the Read and close button.
- 9) Check the LDO, BUCK1 and BUCK2 regulators, and LSW are on by measuring their output (see Table 2.)

Figure 4. Quick Start: Regulator Check with the ADC

<!-- image -->

Figure 5. Connecting to the MAX77752 PMIC

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

│

## MAX77752 Evaluation Kit

## EV Kit Features

## Electronic Load

The EV kit comes with six electronic loads that allow the user to easily evaluate each regulator simultaneously. An on-board  DAC  and  op-amp  configuration  sets  the  load current through I 2 C via the MAX77752 GUI.

The EV kit also includes resistive loads (18Ω and 180Ω) for  the  load  switches  and  two  external  LDO  regulators (see Figure 7). This is done by sending a high signal from the  GPIO  expander  to  drive  the  gate  of  the  MOSFET which allows current to flow through the load resistor.

## INRUSH/LSW3 Configuration

When  configuring  either  INRUSH  or  LSW3,  follow  the configurations as shown in Table 3.

## Software

The  graphical  user  interface  (GUI)  software  allows  for quick, easy, and thorough evaluation of the MAX77734. The GUI is designed to have individual tabs for each functional block of the device (Global Resources, Interrupts/ Status, LDO, and Load Switches) and one additional tab for controlling EV kit hardware (Load Control).

## Installation

Visit www.maximintegrated.com/evkitsoftware to download the latest version of the EV kit software. Save the EV kit software to a temporary folder and uncompress the ZIP file.

## Windows Drivers

Upon connection of a Micro-USB cable between your PC and the EV kit for the first  time,  wait  a  few  minutes  for Windows to automatically install the necessary drivers.

## Graphical User Interface (GUI) Details

The GUI drives I 2 C communication with the EVKIT. Every control  in  the  GUI  (excluding  the  Load  Control)  corresponds directly to a register within the MAX77752. Refer to the register map in the device data sheet for a complete description  of  the  registers.  The Load Control tab  provides additional functionality with the EV kit.

## Load Control Tab

The Load Control tab contains controls for setting load on the regulators' output. The GUI is capable of setting steady-state, transient, and random load currents. To set a load current, use the slider bar or text field to input a value (mA) and press the Enable button. Shuffle through the modes to exercise different load conditions. The offset and gain values are set by Maxim and do not need to be altered.

Figure 6. Electronic Load Block Diagram

<!-- image -->

Figure 7. Electronic Load Block Diagram

<!-- image -->

## Table 3. INRUSH and LSW3 Configuration

| DESIGNATOR   | INRUSH                   | LSW3    |
|--------------|--------------------------|---------|
| DNI          | 0Ω                       | R2      |
| 0Ω           | DNI                      | R15     |
| DNI          | 0Ω                       | R19     |
| 0Ω           | DNI                      | R20     |
|              | 0Ω ( CRCW08050000Z0EAHP) | R22 DNI |

│

## Evaluates: MAX77752

Figure 8. MAX77752 EV Kit GUI Top-Level Interface

<!-- image -->

## MAX77752 EV Kit Bill of Materials

| REF_DES                                                                                                                                                                                      | DNI/DNP   |   QTY | MFG PART #                            | MANUFACTURER              | VALUE           | DESCRIPTION                                                                                                              |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-------|---------------------------------------|---------------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------|
| B1S-B3S, R1S, SCL, SDA, WP_L, PGOOD, VSYSS, LP_ACK, LP_REQ, VIL_B1-VIL_B3, LP_MODE, LSW1DRV, LSW2DRV, RESET_L, VIL_LDO, VIL_SYS, VL_FINE, EREG_EN1, EREG_EN2, EREG_POK, EREG1_OUT, EREG2_OUT |           |    26 | 5000                                  | KEYSTONE                  | N/A             | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;         |
| LDO, GND1-GND3, LSW1-LSW3, BUCK1-BUCK3, VFINE, BLD_IO, INR_DRV, INR_OUT, IN_PHUP                                                                                                             |           |    15 | 5010                                  | KEYSTONE                  | N/A             | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                       |
| C1, C3, C5                                                                                                                                                                                   |           |     3 | C1608X5R1A106K                        | TDK                       | 10UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R                         |
| C2, C4, C6, C8, C10                                                                                                                                                                          |           |     5 | ANY                                   | ANY                       | 22UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 22UF; 6.3V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR    |
| C7, C9                                                                                                                                                                                       |           |     2 | ANY                                   | ANY                       | 2.2UF           | CAPACITOR; SMT (0402); CERAMIC; 2.2UF; 6.3V; TOL=[10%]; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R                  |
| C14, C15                                                                                                                                                                                     |           |     2 | ANY                                   | ANY                       | 1UF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR              |
| C16, C17, C154                                                                                                                                                                               |           |     3 | ANY                                   | ANY                       | 4.7UF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 10V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR    |
| C22, C23, C35                                                                                                                                                                                |           |     3 | TCJB107M006R0070                      | AVX                       | 100UF           | CAPACITOR; SMT (3528); TANTALUM CHIP; 100UF; 6.3V; TOL=20%; MODEL=TCJ SERIES                                             |
| C25-C27, C110-C113, C115, C118, C120, C158, C248-C250                                                                                                                                        |           |    14 | C0402C105K8PAC                        | KEMET                     | 1UF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 10V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                  |
| C28-C30, C38                                                                                                                                                                                 |           |     4 | ANY                                   | ANY                       | 0.01UF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 10V; TOL=10%; MODEL=C0402C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R         |
| C31-C33, C39                                                                                                                                                                                 |           |     4 | ANY                                   | ANY                       | 0.1UF           | CAPACITOR; SMT; 0402; CERAMIC; 0.1uF; 10V; 10%; X5R; -55degC to + 125degC; 0 +/-30PPM/degC; FORMFACTOR ;                 |
| C108, C150, C151, C155-C157, C159, C203, C209, C216, C223, C233, C240                                                                                                                        |           |    13 | ANY                                   | ANY                       | 0.1UF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; MODEL=CGA SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R; FORMFACTOR |
| C114                                                                                                                                                                                         |           |     1 | C0603C474K4RAC; GRM188R71C474K        | KEMET/MURATA              | 0.47UF          | CAPACITOR; SMT; 0603; CERAMIC; 0.47uF; 16V; 10%; X7R; -55degC to + 125degC; 0 +/-15% degC MAX. 50V; TOL=5%;              |
| C152, C153                                                                                                                                                                                   |           |     2 | C0402C0G500-150JNP; GRM1555C1H150JA01 | VENKEL LTD./MURATA        | 15PF            | CAPACITOR; SMT (0402); CERAMIC CHIP; 15PF; TG=-55 DEGC TO +125 DEGC; TC=C0G                                              |
| C200, C207, C214, C221, C231, C238                                                                                                                                                           |           |     6 | C1005X5R1H472K050                     | TDK                       | 4700PF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 4700PF; 50V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                               |
| C201, C208, C215, C222, C232, C239                                                                                                                                                           |           |     6 | ANY                                   | ANY                       | 1000PF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL=10%; MODEL=C0G; TG=-55 DEGC TO +125 DEGC; TC=+; FORMFACTOR         |
| C202, C210, C217, C224, C228- C230, C234, C241, C245-C247, C260, C262, C265                                                                                                                  |           |    15 | ANY                                   | ANY                       | 0.1UF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R; FORMFACTOR   |
| C204, C205, C211, C212, C218, C219, C235, C236, C242, C243                                                                                                                                   |           |    10 | GRM1555C1E101GA01                     | MURATA                    | 100PF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 100PF; 25V; TOL=2%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=C0G              |
| C206, C213, C220, C227, C237, C244, C261, C263, C264                                                                                                                                         |           |     9 | ANY                                   | ANY                       | 1UF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R ; FORMFACTOR    |
| C225, C226                                                                                                                                                                                   |           |     2 | C0402C680J5GAC;GRM1555C1 H680JA01     | KEMET/MURATA              | 68PF            | CAPACITOR; SMT; 0402; CERAMIC; 68pF; 50V; 5%; C0G; -55degC to + 125degC; 0 +/-30PPM/degC                                 |
| D100, D101                                                                                                                                                                                   |           |     2 | LTST-C190YKT                          | LITE-ON ELECTRONICS; INC. | LTST-C190YKT    | DIODE; LED; STANDARD; YELLOW; SMT (0603); PIV=5.0V; IF=0.02A; -55 DEGC TO +85 DEGC                                       |
| D102, D103                                                                                                                                                                                   |           |     2 | LTST-C190CKT                          | LITE-ON ELECTRONICS; INC. | LTST-C190CKT    | DIODE; LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; -55 DEGC TO +85 DEGC                                          |
| FB100                                                                                                                                                                                        |           |     1 | BLM18PG221SN1                         | MURATA                    | 220             | INDUCTOR; SMT (0603); FERRITE-BEAD; 220; TOL=+/-25%; 1.4A; -55 DEGC TO +125 DEGC                                         |
| GND, VIN, GND4-GND7, VSYS                                                                                                                                                                    |           |     7 | 9020 BUSS                             | WEICO WIRE                | MAXIMPAD        | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                 |
| J1-J3, J5-J7, J10, J103, J200, J202, J204, J206-J208, J210                                                                                                                                   |           |    15 | TSW-102-07-T-S                        | SAMTEC                    | TSW-102-07-T- S | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +105 DEGC                                  |
| J4, J9, J101                                                                                                                                                                                 |           |     3 | PBC03SABN                             | SULLINS                   | PBC03SABN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                |

## MAX77752 EV Kit Bill of Materials (continued)

| REF_DES                                                                                              | DNI/DNP   |   QTY | MFG PART #                                        | MANUFACTURER                          | VALUE            | DESCRIPTION                                                                                           |
|------------------------------------------------------------------------------------------------------|-----------|-------|---------------------------------------------------|---------------------------------------|------------------|-------------------------------------------------------------------------------------------------------|
| J100                                                                                                 |           |     1 | PBC06SAAN                                         | SULLINS ELECTRONICS CORP.             | PBC06SAAN        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS; -65 DEGC TO +125 DEGC                      |
| J102                                                                                                 |           |     1 | 10103592-0001LF                                   | FCI CONNECT                           | 10103592- 0001LF | CONNECTOR; FEMALE; SMT; MICRO USB B-TYPE REVERSE; RIGHT ANGLE; 5PINS                                  |
| J201, J203, J205, J209                                                                               |           |     4 | PBC02DABN                                         | SULLINS ELECTRONIC CORP.              | PBC02DABN        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                             |
| L1, L2                                                                                               |           |     2 | PIFE20161T-1R0MDR                                 | CYNTEC                                | 1UH              | INDUCTOR; SMT; FERRITE BOBBIN CORE; 1UH; TOL=+/-20%; 2.8A; -55 DEGC TO +125 DEGC; FORMFACTOR          |
| L3                                                                                                   |           |     1 | CIGT252010EH1R0M                                  | SAMSUNG ELECTRONICS                   | 1UH              | INDUCTOR; SMT (1008); MAGNETICALLY SHIELDED; 1UH; TOL=+/-20%; 4.3A                                    |
| Q1-Q4, Q205                                                                                          |           |     5 | DMG3420U                                          | DIODES INCORPORATED                   | DMG3420U         | TRAN; N-CHANNEL ENHANCEMENT MODE MOSFET; NCH; SOT-23; PD-(0.74W); I-(5.47A); V-(20V)                  |
| Q100, Q101                                                                                           |           |     2 | FDY300NZ                                          | FAIRCHILD SEMICONDUCTOR               | FDY300NZ         | TRAN; SINGLE N-CHANNEL 2.5V SPECIFIED POWERTRENCH MOSFET; NCH; SC89; PD-(0.625W); I-(0.6A); V-(20V)   |
| Q200-Q202, Q204                                                                                      |           |     4 | IRLR8259TRPBF                                     | INTERNATIONAL RECTIFIER               | IRLR8259TRPB F   | TRAN; HEXFET POWER MOSFET; NCH; DPAK; PD-(48W); I- (57A); V-(25V)                                     |
| Q203                                                                                                 |           |     1 | IRFHM8337TRPBF                                    | INTERNATIONAL RECTIFIER               | IRFHM8337TR PBF  | TRAN; HEXFET POWER MOSFET; NCH; PQFN8; PD-(2.8W); I- (18A); V-(30V)                                   |
| Q206-Q209                                                                                            |           |     4 | FDY3000NZ                                         | FAIRCHILD SEMICONDUCTOR               | FDY3000NZ        | TRAN; DUAL N-CHANNEL 2.5V SPECIFIED POWERTRENCH MOSFET; NCH; SOT563-6; PD-(0.625W); I-(0.6A); V-(20V) |
| QSCL, QSDA                                                                                           |           |     2 | 5002                                              | KEYSTONE                              | N/A              | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER; |
| R1                                                                                                   |           |     1 | WSL0805R0200FEA18                                 | VISHAY DALE                           | 0.02             | RESISTOR; 0805; 0.02 OHM; 1%; 75PPM; 0.25W; THICK FILM                                                |
| R2, R3, R13-R20, R23-R25, R30, R31, R33, R34, R36-R39                                                |           |    21 | ERJ-2GE0R00X                                      | PANASONIC                             | 0                | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                  |
| R21, R142                                                                                            |           |     2 | ANY                                               | ANY                                   | 0                | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM; FORMFACTOR                                      |
| R100, R118                                                                                           |           |     2 | ANY                                               | ANY                                   | 4.7K             | RESISTOR, 0402, 4.7K OHM, 1%, 100PPM, 0.0625W, THICK FILM; FORMFACTOR                                 |
| R107, R108                                                                                           |           |     2 | ANY                                               | ANY                                   | 2.2K             | RESISTOR, 0402, 2.2K OHM, 1%, 100PPM, 0.0625W, THICK FILM; FORMFACTOR                                 |
| R110, R117                                                                                           |           |     2 | CRCW0402470RFK                                    | VISHAY DALE                           | 470              | RESISTOR, 0402, 470 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                              |
| R113, R290-R297                                                                                      |           |     9 | CRCW040210K0FK; RC0402FR-0710K                    | VISHAY DALE; YAGEO PHICOMP            | 10K              | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                                  |
| R103, R123, R114, R116                                                                               |           |     4 | CRCW040222R0FK                                    | VISHAY DALE                           | 22               | RESISTOR, 0402, 22 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                               |
| R4-R12, R32, R35, R115, R157, R159, R161, R262, R263, R266, R268                                     |           |    19 | ANY                                               | ANY                                   | 100K             | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                     |
| R122                                                                                                 |           |     1 | ANY                                               | ANY                                   | 1M               | RESISTOR; 0603; 1M; 1%; 100PPM; 0.10W; THICK FILM; FORMFACTOR                                         |
| R135, R136, R139, R141, R143, R148, R155, R203, R213, R223, R233, R242, R252, R260, R261, R265, R267 |           |    17 | ANY                                               | ANY                                   | 0                | RESISTOR; 0402; 0 OHM; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                    |
| R26-R29, R137, R138                                                                                  |           |     6 | ANY                                               | ANY                                   | 49.9             | RESISTOR; 0402; 49.9 OHM; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                 |
| R156                                                                                                 |           |     1 | CRCW0402105KFK                                    | VISHAY DALE                           | 105K             | RESISTOR; 0402; 105K OHM; 1%; 100PPM; 0.063W ; THICK FILM                                             |
| R158                                                                                                 |           |     1 | CRCW0402169KFK                                    | VISHAY DALE                           | 169K             | RESISTOR; 0402; 169K OHM; 1%; 100PPM; 0.063W; THICK FILM                                              |
| R160                                                                                                 |           |     1 | CRCW04024752FK; 9C04021A4752FLHF3; CRCW040247K5FK | VISHAY DALE                           | 47.5K            | RESISTOR; 0402; 47.5K; 1%; 100PPM; 0.0625W; THICK FILM                                                |
| R200, R210, R220, R224, R225, R230, R240, R250                                                       |           |     8 | CRCW040220K0FK                                    | VISHAY DALE                           | 20K              | RESISTOR; 0402; 20K OHM; 1%; 100PPM; 0.063W; THICK FILM                                               |
| R109, R111, R201, R211, R221, R231, R241, R251, R289                                                 |           |     9 | CRCW0402100RFK; 9C04021A1000FL; RC0402FR-07100RL  | VISHAY DALE; PANASONIC; YAGEO PHYCOMP | 100              | RESISTOR; 0402; 100 OHM; 1%; 100PPM; 0.063W; THICK FILM                                               |
| R202, R212, R222, R232, R243, R253                                                                   |           |     6 | CRCW0402680RFK;RC0402FR- 07680RL                  | VISHAY DALE/YAGEO PHICOMP             | 680              | RESISTOR, 0402, 680 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                              |
| R204, R205, R214, R215, R244, R245                                                                   |           |     6 | CRCW04024K75FK                                    | VISHAY DALE                           | 4.75K            | RESISTOR; 0402; 4.75K; 1%; 100PPM; 0.0625W; THICK FILM                                                |
| R206, R216, R226, R236, R246, R256                                                                   |           |     6 | CRCW04021M00FK                                    | VISHAY DALE                           | 1M               | RESISTOR; 0402; 1M; 1%; 100PPM; 0.0625W; THICK FILM                                                   |

## MAX77752 EV Kit Bill of Materials (continued)

| REF_DES                                                                | DNI/DNP   |   QTY | MFG PART #                        | MANUFACTURER                        | VALUE          | DESCRIPTION                                                                                                       |
|------------------------------------------------------------------------|-----------|-------|-----------------------------------|-------------------------------------|----------------|-------------------------------------------------------------------------------------------------------------------|
| R207, R208, R217, R218, R227, R228, R237, R238, R247, R248, R257, R258 |           |    12 | ANY                               | ANY                                 | 1K             | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                                   |
| R209, R219, R249                                                       |           |     3 | CRA2512-FZ-R100ELF                | BOURNS                              | 0.1            | RESISTOR; 2512; 0.1 OHM; 1%; 75PPM; 3W; METAL FILM                                                                |
| R229                                                                   |           |     1 | WSL2512R0200F                     | N/A                                 | 0.02           | RESISTOR; 2512; 0.02 OHM; 1%; 75PPM; 1.0W; THICK FILM                                                             |
| R234, R235                                                             |           |     2 | CR0402-16W-3161FT; CRCW04023K16FK | VENKEL LTD./VISHAY DALE             | 3.16K          | RESISTOR; 0402; 3.16K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                         |
| R239, R259                                                             |           |     2 | CSR1206FT1R00                     | STACKPOLE ELECTRONICS INC.          | 1              | RESISTOR; 1206; 1 OHM; 1%; 100PPM; 0.5W; THICK FILM                                                               |
| R254, R255                                                             |           |     2 | CRCW040276K8FK                    | VISHAY DALE                         | 76.8K          | RESISTOR; 0402; 76.8K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                         |
| R269, R271, R273, R287, R288                                           |           |     5 | CRCW060318R0FK                    | VISHAY DALE                         | 18             | RESISTOR, 0603, 18 OHM, 1%, 100PPM, 0.10W, THICK FILM                                                             |
| R270, R272, R274                                                       |           |     3 | CRCW0603180RFK                    | VISHAY DALE                         | 180            | RESISTOR, 0603, 180 OHM, 1%, 100PPM, 0.10W, THICK FILM                                                            |
| R275, R277, R279, R281, R283, R285                                     |           |     6 | ERJ-2RKF4703X                     | PANASONIC                           | 470K           | RESISTOR, 0402, 470K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                         |
| R276, R278, R280, R282, R284, R286                                     |           |     6 | CRCW0402649KFK                    | VISHAY DALE                         | 649K           | RESISTOR; 0402; 649K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                          |
| U1                                                                     |           |     1 | MAX77752                          | MAXIM                               | MAX77752       | EVKIT PART; IC; OUTLINE DRAWING: 21-0140; PACKAGE CODE: T4055-1C; TQFN40-EP; CID4 = 0x07                          |
| U2, U3                                                                 |           |     2 | MAX1818EUT18+                     | MAXIM                               | MAX1818EUT1 8+ | IC; VREG; 0.5A LOW-DROPOUT LINEAR REGULATOR; SOT23-6                                                              |
| U100                                                                   |           |     1 | MAXQ2000-RBX+                     | MAXIM                               | MAXQ2000- RBX+ | IC; CTRL; LOW-POWER LCD MICROCONTROLLER; TQFN56-EP 8X8                                                            |
| U101                                                                   |           |     1 | FT232RQ                           | FUTURE TECHNOLOGY DEVICES INTL LTD. | FT232RQ        | IC; INFC; UART INTERFACE IC USB TO SERIAL; QFN32-EP 5X5                                                           |
| U102-U104                                                              |           |     3 | MAX8512EXK                        | MAXIM                               | MAX8512EXK     | IC, VREG, Ultra-Low-Noise, High PSRR, Adjustable Vout, SC70-5                                                     |
| U107                                                                   |           |     1 | MAX3395EETC                       | MAXIM                               | MAX3395EETC    | IC; TRANS; 15KV ESD-PROTECTED HIGH-DRIVE CURRENT QUAD-LEVEL TRANSLATOR WITH SPEED-UP CIRCUITRY; TQFN12 4X4        |
| U200-U205                                                              |           |     6 | MAX44251AUA+                      | MAXIM                               | MAX44251AU A+  | IC; OPAMP; ULTRA-PRECISION; LOW-NOISE OP AMP; UMAX8                                                               |
| U206, U207                                                             |           |     2 | MAX5815AAUD+                      | MAXIM                               | MAX5815AAU D+  | IC; DAC; ULTRA-SMALL; QUAD-CHANNEL; 12-BIT BUFFERED OUTPUT DAC WITH INTERNAL REFERENCE AND I2C INTERFACE; TSSOP14 |
| U208, U210                                                             |           |     2 | SX1502I087TRT                     | SEMTECH                             | SX1502I087TR T | IC; XPND; 8-CHANNEL LOW VOLTAGE GPIO EXPANDER; UTQFN20-EP 3X3                                                     |
| U209                                                                   |           |     1 | MAX1697UEUT+                      | MAXIM                               | MAX1697UEUT +  | IC; INV; INVERTING CHARGE PUMP WITH SHUTDOWN; SOT23-6                                                             |
| VB1S-VB3S, VLDOS                                                       |           |     4 | U.FL-R-SMT-1                      | HIROSE ELECTRIC CO LTD.             | U.FL-R-SMT-1   | CONNECTOR; MALE; SMT; ULTRA SMALL SURFACE MOUNT COAXIAL CONNECTOR; STRAIGHT; 2PINS                                |
| Y101                                                                   |           |     1 | CX3225SB16000D0FLJZZ              | KYOCERA-KINSEKI                     | 16MHZ          | CRYSTAL; SMT (3225) 3.2X2.5; 8PF; 16MHZ; +/-10PPM; +/-15PPM                                                       |
| PCB                                                                    |           |     1 | MAX77752_REVB                     | MAXIM                               | PCB            | PCB:MAX77752_REVB                                                                                                 |
| R22                                                                    | DNP       |     0 | CRCW08050000Z0EAHP                | VISHAY DRALORIC                     | 0              | RESISTOR; 0805; 0 OHM; 0%; JUMPER; 0.5W; THICK FILM                                                               |
| C11-C13, C18, C24, C40 C19-C21, C34, C36, C37, C129,                   | DNP       |     0 | N/A                               | N/A                                 | OPEN           | CAPACITOR; SMT (0603); OPEN; FORMFACTOR                                                                           |
| C134                                                                   | DNP       |     0 | N/A                               | N/A                                 | OPEN           | CAPACITOR; SMT (0402); OPEN; FORMFACTOR                                                                           |

NOTE: DNP-DO NOT PROCURE

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX77752EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX77752 Evaluation Kit

## MAX77752 EV Kit Schematic

| Part Number               | Pin Strap            | 7-bit           | 8-bit Write      | 8-bit Read       |
|---------------------------|----------------------|-----------------|------------------|------------------|
| MAX77752 PMIC OPTION A    | OTP_I2C_ADDR[0]=0b00 | 0x60 0b110 0000 | 0b1100 0000 0xC0 | 0b1100 0001 0xC1 |
| MAX77752 PMIC OPTION B    | OTP_I2C_ADDR[1]=0b01 | 0x61 0b110 0001 | 0xC2 0b1100 0010 | 0b1100 0011 0xC3 |
| MAX77752 PMIC OPTION C    | OTP_I2C_ADDR[1]=0b10 | 0x62 0b110 0010 | 0b1100 0100 0xC4 | 0b1100 0101 0xC5 |
| MAX77752 PMIC OPTION D    | OTP_I2C_ADDR[1]=0b11 | 0x63 0b110 0011 | 0b1100 0110 0xC6 | 0b1100 0111 0xC7 |
| MAX5815 U207 (DAC) *      | ADDR1=ADDR0=+3.3V    | 0b001 0000 0x10 | 0b0010 0000 0x20 | 0b0010 0001 0x21 |
| U205 (DAC) MAX5815 *      | ADDR1=ADDR0=GND      | 0b001 1111 0x1F | 0x3E 0b0011 1110 | 0b0011 1111 0x3F |
| GPIO EXPANDER SX1502 U210 | ADDR=GND             | 0b010 0000 0x20 | 0b0100 0000 0x40 | 0b0100 0001 0x41 |
| SX1502 U208 GPIO EXPANDER | ADDR=3.3V            | 0b010 0001 0x21 | 0b0100 0010 0x42 | 0b0100 0011 0x43 |

│

## MAX77752 EV Kit Schematic (continued)

<!-- image -->

## MAX77752 EV Kit Schematic (continued)

<!-- image -->

│

## MAX77752 EV Kit Schematic (continued)

<!-- image -->

│

## MAX77752 EV Kit Schematic (continued)

<!-- image -->

│

## MAX77752 EV Kit Schematic (continued)

<!-- image -->

│

Evaluates: MAX77752

## MAX77752 EV Kit PCB Layouts

MAX77752 EV Kit Component Placement GuideTop Silkscreen

<!-- image -->

MAX77752 EV Kit PCB Layout-Top Layer

<!-- image -->

MAX77752 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

│

## MAX77752 EV Kit PCB Layouts (continued)

MAX77752 EV Kit PCB Layout-Internal Layer 3

<!-- image -->

MAX77752 EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX77752 EV Kit Component Placement GuideBottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/17           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX77752