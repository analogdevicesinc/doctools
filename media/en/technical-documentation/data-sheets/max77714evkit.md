<!-- lastmod 2022-08-02 -->
## MAX77714 Evaluation Kit

## General Description

The MAX77714 evaluation kit (EV kit) is a fully assembled and tested printed circuit board (PCB) that demonstrates the  highly-integrated  MAX77714  PMIC. The  device  is  a complete power-management IC (PMIC) for mobile devices using System-on-Chip (SOC) applications processors. The device includes four buck regulators, nine low-dropout linear regulators, eight GPIOs, real-time clock (RTC), backup battery  charger,  bidirectional  reset  I/O,  interrupt output, and a system watchdog timer.

The  EV  kit  also  includes  a  MAXQ2000  microcontroller command module that provides the I 2 C interface to control  power  sequence,  individual  regulator  output  on/off, GPIOs, RTC, and setting regulator output voltage.

The MAX77714 evaluation software is provided for easy evaluation.

## Evaluates: MAX77714 Multichannel Integrated Power-Management IC

## Benefits and Features

- USB to I 2 C Converter Allows for Easy Communication
- Level Translator (MAX3395) Allows for Adjusting I 2 C Bus Voltage from 1.8V to 3.3V
- On-Board Electronics Load Allows for Easy Evaluation
- GUI Allows Static/Dynamic Load Adjustment for Buck Converters and LDOs
- MOSFET can be Driven by External Function Generator to Evaluate Transient Performance for Each Regulator
- Proven PCB Reference Design and Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Figure 1. MAX77714 EV Kit Photo

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

<!-- image -->

## MAX77714 Evaluation Kit

## Quick Start

Follow this procedure to familiarize yourself with the EV kit. Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Required Equipment

- MAX77714 EV kit
- Dual power supply with 6V and 5A capability
- Digital voltmeter (DVM)
- Ammeter
- Micro-USB cable

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Install GUI software. Visit www.maximintegrated. com/evkitsoftware to download the latest version of the EV kit software. Save the EV kit software to a temporary folder and decompress the ZIP file.
- 2) Install all shunts as recommended in Table 1.
- 3) Connect a disabled 3.6V bench power supply through an ammeter to VIN and GND wire loops. Set the input current limit of the bench supply to 3A. Do not enable the output of the bench supply until prompted.
- 4) Enable the output of the 3.6V bench power supply.
- 5) Connect a Micro-B USB cable between the EV kit and the PC and EV kit.
- 6) Wait a few seconds for the computer to install the USB driver. Once the driver is successfully installed, a Windows pop-up message appears saying that the 'USB Serial Converter' is ready to use.
- 7) Open the GUI, and in the upper left corner, select Device and then select Connect as shown in Figure 2. Once connected, a pop-up window appears as shown in Figure 3. Press the Read and Close button.
- 8) Using an external power supply, apply 1.8V to EN0.
- 9) Refer to Table 2 for default voltages and FPS settings.

## Using the MAX77714 EV Kit

## Table 1. Default Shunt Positions and Jumper Descriptions

| REFERENCE DESIGNATOR   | DEFAULT POSITION   | FUNCTION                    |
|------------------------|--------------------|-----------------------------|
| J1                     | Open               | EN0 driven by logic signal. |
| J3                     | 2-3                | EN1 = low                   |
| J5                     | 2-3                | SHDN = low                  |

│

## Evaluates: MAX77714 Multichannel Integrated Power-Management IC

Figure 2: Connecting to the EV Kit

<!-- image -->

Figure 3: Connecting to the MAX77714

<!-- image -->

This concludes the initial setup procedure. Users are now encouraged to explore the device and its register settings with the GUI.  During this exploration, be mindful of the power  supply  current  limit  and  input  current  ammeter's range  so  as  not  to  interfere  with  the  operation  of  the device under test.

## Table 1. Default Shunt Positions and Jumper Descriptions (continued)

| REFERENCE DESIGNATOR   | DEFAULT POSITION   | FUNCTION                                                      |
|------------------------|--------------------|---------------------------------------------------------------|
| J6                     | 2-3                | Connect BBATT to supercapacitor.                              |
| J200                   | 1-2                | Connects amplifier to the gate of the load FET for SD0.       |
| J201                   | 1-2, 2-3           | Connects SD1 to load FET.                                     |
| J202                   | 1-2                | Connects amplifier to the gate of the load FET for SD1.       |
| J203                   | 1-2, 3-4           | Connects SD1 to load FET.                                     |
| J204                   | 1-2                | Connects amplifier to the gate of the load FET for SD2.       |
| J205                   | 1-2, 3-4           | Connects SD2 to load FET.                                     |
| J206                   | 1-2                | Connects amplifier to the gate of the load FET for SD3.       |
| J207                   | 1-2, 3-4           | Connects SD3 to load FET.                                     |
| J208                   | 1-2                | Connects amplifier to the gate of the load FET for LDO.       |
| J210                   | 1-2                | Connects amplifier to the gate of the load FET for FINE load. |
| JU101                  | 2-3                | Sets VLOGIC to 1.8V.                                          |

## Table 2. Default FPS Setting

| OUTPUT   | EXPECTED VOLTAGE (OPTION1)   | FPS SETTING     | FPS SETTING      |
|----------|------------------------------|-----------------|------------------|
| OUTPUT   | EXPECTED VOLTAGE (OPTION1)   | POWER UP (SLOT) | POWER DOWN(SLOT) |
| SD0      | 0.9                          | 1               | 1                |
| SD1      | 1.25                         | 3               | 3                |
| SD2      | 1.825                        | 5               | 5                |
| SD3      | 0.9                          | 2               | 2                |
| LDO0     | 1.8                          | 6               | 6                |
| LDO1     | 0.9                          | 6               | 6                |
| LDO2     | 3.3                          | 6               | 6                |
| LDO3     | 3.0                          | 6               | 6                |
| LDO4     | 0.9                          | 6               | 6                |
| LDO5     | 3.3                          | 6               | 6                |
| LDO6     | 1.8                          | 4               | 4                |
| LDO7     | 3.3                          | 6               | 6                |
| LDO8     | 2.9                          | 7               | 7                |
| GPIO0    | N/A                          | 0               | 0                |
| GPIO1    | N/A                          | N/A             | N/A              |
| GPIO2    | N/A                          | N/A             | N/A              |
| GPIO3    | N/A                          | N/A             | N/A              |
| GPIO4    | N/A                          | N/A             | N/A              |
| GPIO5    | N/A                          | N/A             | N/A              |
| GPIO6    | N/A                          | N/A             | N/A              |
| GPIO7    | N/A                          | N/A             | N/A              |

│

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX77714EVKIT# | EVKIT  |

#Denotes RoHS compliant.

│

## MAX77714 EV Kit Bill of Materials

| REF_DES                                                                | DNI/DNP   |   QTY | MFG PART #                                           | MANUFACTURER                            | VALUE DESCRIPTION                                                                                                        |
|------------------------------------------------------------------------|-----------|-------|------------------------------------------------------|-----------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| AV_SD, VIL_LDO, VIL_SD0- VIL_SD3, VIL_FINE                             |           |     7 | 5000                                                 | KEYSTONE N/A                            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;         |
| SD0-SD3, LDO0-LDO8, VLDO, BBATT, INI2C, IN_SD, VFINE, IN_SD3, IN_GPIOB |           |    20 | 5010                                                 | KEYSTONE N/A                            | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                       |
| C10, C16                                                               |           |     2 | C1005X7S0J225K050BC; GRM155C70J225KE11               | TDK/MURATA 2.2UF                        | CAPACITOR; SMT (0402); CERAMIC CHIP; 2.2UF; 6.3V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7S              |
| C11                                                                    |           |     1 | TCJB107M006R0070                                     | AVX 100UF                               | CAPACITOR; SMT (3528); TANTALUM CHIP; 100UF; 6.3V; TOL=20%; MODEL=TCJ SERIES                                             |
| C13-C15, C17, C18, C21-C25, C28                                        |           |    11 | ANY                                                  | ANY 1UF                                 | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R;                         |
| C26, C27, C31, C32                                                     |           |     4 | GRM152C80J104KE19                                    | MURATA 0.1UF                            | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 6.3V; TOL=10%; TG=-55 DEGC TO +105 DEGC; TC=X6S                              |
| C29, C30, C33                                                          |           |     3 | GRM188R60J106KE47                                    | MURATA 10UF                             | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 6.3V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R                        |
| C34, C36, C37, C40-C42, C54                                            |           |     7 | JMK212BJ226KG                                        | TAIYO YUDEN 22UF                        | CAPACITOR; SMT (0805); CERAMIC CHIP; 22UF; 6.3V; TOL=10%; MODEL=M SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R                |
| C35                                                                    |           |     1 | GRM21BR70J106K; C2012X7R0J106K125AB                  | MURATA/TDK 10UF                         | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 6.3V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R             |
| C38, C39                                                               |           |     2 | C1608X5R0J226M080AC                                  | TDK 22UF                                | CAPACITOR; SMT (0603); CERAMIC CHIP; 22UF; 6.3V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R                |
| C43-C45, C55                                                           |           |     4 | GRM155R61A103KA01                                    | MURATA 0.01UF                           | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 10V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R             |
| C46-C48, C56                                                           |           |     4 | GRM155R60J104KA01; C0402C104K9PAC                    | MURATA; KEMET 0.1UF                     | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 6.3V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                               |
| C53                                                                    |           |     1 | XH311HU IV07E                                        | SEIKO INSTRUMENTS INC 0.035F            | CAPACITOR; SMT; ELECTRIC DOUBLE LAYER CAPACITOR; 0.035F; 3.3V; TOL=20%; TG=-20 DEGC TO +60 DEGC; TC=NO DATA;             |
| C59                                                                    |           |     1 | GRM155R61A106ME44; GRM155R61A106ME11; 0402ZD106MAT2A | MURATA; AVX 10UF                        | CAPACITOR; SMT (0402); CERAMIC CHIP; 10UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                 |
| C108, C135, C150, C151, C155- C157, C159                               |           |     8 | ANY                                                  | ANY 0.1UF                               | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; MODEL=CGA SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R; FORMFACTOR |
| C110-C113, C115, C118, C120, C158, C248-C250                           |           |    11 | ANY                                                  | ANY 1UF                                 | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R;                        |
| C114                                                                   |           |     1 | ANY                                                  | ANY 0.47UF                              | CAPACITOR; SMT; 0603; CERAMIC; 0.47uF; 10V; 10%; X5R; -55degC to + 125degC, ; FORMFACTOR                                 |
| C152, C153                                                             |           |     2 | C0402C0G500-150JNP; GRM1555C1H150JA01                | VENKEL LTD./MURATA 15PF                 | CAPACITOR; SMT (0402); CERAMIC CHIP; 15PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                 |
| C12, C154                                                              |           |     2 | ANY                                                  | ANY 4.7UF                               | CAPACITOR;SMT(0402);CERAMICCHIP;4.7UF;10V;TOL=20 %;MODEL=CSERIES;TG=-                                                    |
| C200, C207, C214, C221, C238, C255                                     |           |     6 | GRM155R71E472KA01                                    | MURATA 4700PF                           | CAPACITOR; SMT (0402); CERAMIC CHIP; 4700PF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;                             |
| C201, C208, C215, C222, C239, C257                                     |           |     6 | ANY                                                  | ANY 1000PF                              | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL=10%; MODEL=C0G; TG=-55 DEGC TO +125 DEGC; TC=+; FORMFACTOR         |
| C202, C210, C217, C224, C228- C230, C241, C245-C247, C256              |           |    12 | ANY                                                  | ANY 0.1UF                               | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R; FORMFACTOR   |
| C204, C205, C211, C212, C218, C219, C242, C243                         |           |     8 | ECJ-0EB1H101K; CC0402KRX7R9BB101                     | PANASONIC; YAGEO PHYCOMP 100PF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 100PF; 50V; TOL=10%; MODEL=ECJ SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R             |
| C206, C213, C220, C227, C244, C260                                     |           |     6 | ANY                                                  | ANY 1UF                                 | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R ; FORMFACTOR    |
| C225, C226, C258, C259                                                 |           |     4 | C0402C680J5GAC;GRM1555C1H680J A01                    | KEMET/MURATA 68PF                       | CAPACITOR; SMT; 0402; CERAMIC; 68pF; 50V; 5%; C0G; - 55degC to + 125degC; 0 +/-30PPM/degC                                |
| D100, D101                                                             |           |     2 | LTST-C190YKT                                         | LITE-ON ELECTRONICS; INC. LTST- C190YKT | DIODE; LED; STANDARD; YELLOW; SMT (0603); PIV=5.0V; IF=0.02A; -55 DEGC TO +85 DEGC                                       |
| D102, D103                                                             |           |     2 | LTST-C190CKT                                         | LITE-ON ELECTRONICS; INC. LTST- C190CKT | DIODE; LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; -55 DEGC TO +85 DEGC                                          |
| D104                                                                   |           |     1 | CMHSH5-4                                             | CENTRAL SEMICONDUCTOR CORP. CMHSH5-4    | DIODE; SCH; SMT (SOD-123); PIV=40V; IF=0.5A; -65 DEGC TO +125 DEGC                                                       |
| EN0, EN1, SCL, SDA, NIRQ, SHDN, GPIO0-GPIO7, EN_EXT, NRST_IO           |           |    16 | 5002                                                 | KEYSTONE N/A                            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE                            |
| FB100                                                                  |           |     1 | BLM18PG221SN1                                        | MURATA 220                              | INDUCTOR; SMT (0603); FERRITE-BEAD; 220; TOL=+/- 25%; 1.4A; -55 DEGC TO +125 DEGC                                        |
| GND0-GND3, GND5, GND6, MBATT                                           |           |     7 | 9020 BUSS                                            | WEICO WIRE MAXIMPAD WEICO               | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                       |

## MAX77714 EV Kit Bill of Materials (continued)

| REF_DES                                                                                                                       | DNI/DNP   | QTY   | MFG PART #                                | MANUFACTURER                           | VALUE             | DESCRIPTION                                                                                                                 |
|-------------------------------------------------------------------------------------------------------------------------------|-----------|-------|-------------------------------------------|----------------------------------------|-------------------|-----------------------------------------------------------------------------------------------------------------------------|
| GND4, GND7, GND8                                                                                                              |           | 3     | 5011                                      | KEYSTONE                               | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;     |
| QSCL, QSDA, SD0S-SD3S, INLDO01, INLDO2, IN_SDS, INLDO35, INLDO46, INLDO78,                                                    |           | 13    | USE FOR COLD TEST: 5015                   | KEYSTONE                               | N/A               | TEST POINT; SMT; PIN LENGTH=0.135IN; PIN WIDTH=0.07IN; PIN HEIGHT=0.06IN; SILVER; PHOSPHOR BRONZE WITH SILVER PLATE CONTACT |
| J1, J3, J5, J6                                                                                                                |           | 4     | TSW-103-07-L-S                            | SAMTEC                                 | TSW-103- 07-L-S   | CONNECTOR; THROUGH HOLE; SINGLE ROW; STRAIGHT; 3PINS                                                                        |
| J100                                                                                                                          |           | 1     | PBC06SAAN                                 | SULLINS ELECTRONICS CORP.              | PBC06SAA N        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS; -65 DEGC TO +125 DEGC                                            |
| J101                                                                                                                          |           | 1     | PBC03SABN                                 | SULLINS                                | PBC03SAB N        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                   |
| J102                                                                                                                          |           | 1     | 10103592-0001LF                           | FCI CONNECT                            | 10103592- 0001LF  | CONNECTOR; FEMALE; SMT; MICRO USB B-TYPE REVERSE; RIGHT ANGLE; 5PINS                                                        |
| J103, J200, J202, J204, J206, J208, J210                                                                                      |           | 7     | TSW-102-07-T-S                            | SAMTEC                                 | TSW-102- 07-T-S   | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +105 DEGC                                     |
| J201, J203, J205, J207                                                                                                        |           | 4     | PBC02DABN                                 | SULLINS ELECTRONIC CORP.               | PBC02DAB N        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                                   |
| L0                                                                                                                            |           | 1     | DFE322520F-1R0M                           | MURATA                                 | 1UH               | INDUCTOR; SMT (2010); METAL ALLOY CHIP; 1UH; TOL=+/-20%; 6.3A                                                               |
| L1                                                                                                                            |           | 1     | CIGT252010EH1R0M                          | SAMSUNG ELECTRONICS                    | 1UH               | INDUCTOR; SMT (1008); MAGNETICALLY SHIELDED; 1UH; TOL=+/-20%; 4.3A                                                          |
| L2, L3                                                                                                                        |           | 2     | PIFE20161T-1R0MDR                         | CYNTEC                                 | 1UH               | INDUCTOR; SMT; FERRITE BOBBIN CORE; 1UH; TOL=+/- 20%; 2.8A; -55 DEGC TO +125 DEGC; FORMFACTOR                               |
| Q2, Q100, Q101                                                                                                                |           | 3     | FDY300NZ                                  | FAIRCHILD SEMICONDUCTOR                | FDY300NZ          | TRAN; SINGLE N-CHANNEL 2.5V SPECIFIED POWERTRENCH MOSFET; NCH; SC89; PD-(0.625W); I-                                        |
| Q200-Q203                                                                                                                     |           | 4     | IRLR8259TRPBF                             | INTERNATIONAL RECTIFIER                | IRLR8259T RPBF    | TRAN; HEXFET POWER MOSFET; NCH; DPAK; PD-(48W); I- (57A); V-(25V)                                                           |
| Q205                                                                                                                          |           | 1     | DMG3420U                                  | DIODES INCORPORATED                    | DMG3420U          | TRAN; N-CHANNEL ENHANCEMENT MODE MOSFET; NCH; SOT-23; PD-(0.74W); I-(5.47A); V-(20V)                                        |
| Q206                                                                                                                          |           | 1     | IRFHM8337TRPBF                            | INTERNATIONAL RECTIFIER                | IRFHM8337 TRPBF   | TRAN; HEXFET POWER MOSFET; NCH; PQFN8; PD- (2.8W); I-(18A); V-(30V)                                                         |
| Q300-Q308                                                                                                                     |           | 9     | SIA914ADJ-T1-GE3                          | VISHAY SILICONIX                       | SIA914ADJ- T1-GE3 | TRAN; DUAL N-CHANNEL 20 V (D-S) MOSFET; NCH; SC70- 6; PD-(7.8W); I-(4.5A); V-(20V)                                          |
| R1, R34 R5-R9, R17, R37, R41, R142 R12-R15, R38-R40, R42,                                                                     |           | 2 9   | CRCW08050000Z0EAHP CRCW06030000Z0         | VISHAY DRALORIC VISHAY DALE            | 0 0               | RESISTOR; 0805; 0 OHM; 0%; JUMPER; 0.5W; THICK FILM RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.1W; THICK FILM                     |
| R116, R135, R136, R139-R141, R143, R148, R155, R162-R164, R166, R203, R213, R223, R233, R252,                                 |           | 31    | ERJ-2GE0R00X                              | PANASONIC                              | 0                 | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                        |
| R260, R261, R265, R267, R290 R2, R10, R11, R16, R113, R18, R20, R22, R25, R32, R115, R157, R159, R161, R262, R263, R266, R268 |           | 18    | ANY                                       | ANY                                    | 100K              | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                                           |
| R100, R118                                                                                                                    |           | 2     | ANY                                       | ANY                                    | 4.7K              | RESISTOR, 0402, 4.7K OHM, 1%, 100PPM, 0.0625W, THICK FILM; FORMFACTOR                                                       |
| R103, R123                                                                                                                    |           | 2     | ANY                                       | ANY                                    | 22                | RESISTOR, 0402, 22 OHM, 1%, 100PPM, 0.0625W, THICK FILM; FORMFACTOR                                                         |
| R107, R108                                                                                                                    |           | 2     | ANY                                       | ANY                                    | 2.2K              | RESISTOR, 0402, 2.2K OHM, 1%, 100PPM, 0.0625W, THICK FILM; FORMFACTOR                                                       |
| R110, R117                                                                                                                    |           | 2     | CRCW0402470RFK                            | VISHAY DALE                            | 470               | RESISTOR, 0402, 470 OHM, 1%, 100PPM, 0.0625W,                                                                               |
| R114, R318-R336                                                                                                               |           | 20    | CRCW040210K0FK; RC0402FR-0710K            | VISHAY DALE; YAGEO PHICOMP             | 10K               | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                                                        |
| R122                                                                                                                          |           | 1     | ANY                                       | ANY                                    | 1M                | RESISTOR; 0603; 1M; 1%; 100PPM; 0.10W; THICK FILM; FORMFACTOR                                                               |
| R137, R138                                                                                                                    |           | 2     | ANY                                       | ANY                                    | 49.9              | RESISTOR; 0402; 49.9 OHM; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                                       |
| R156                                                                                                                          |           | 1     | CRCW0402105KFK                            | VISHAY DALE                            | 105K              | RESISTOR; 0402; 105K OHM; 1%; 100PPM; 0.063W ;                                                                              |
| R158                                                                                                                          |           | 1     | CRCW0402169KFK                            | VISHAY DALE                            | 169K              | RESISTOR; 0402; 169K OHM; 1%; 100PPM; 0.063W;                                                                               |
| R160                                                                                                                          |           | 1     | CRCW04024752FK; 9C04021A4752FLHF3;        | VISHAY DALE                            | 47.5K             | RESISTOR; 0402; 47.5K; 1%; 100PPM; 0.0625W; THICK FILM                                                                      |
| R200, R210, R214, R215, R220,                                                                                                 |           | 8     | CRCW040220K0FK                            | VISHAY DALE                            | 20K               | RESISTOR; 0402; 20K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                     |
| R230, R250, R270 R109, R111, R201, R211, R221, R231, R251, R271                                                               |           | 8     | CRCW0402100RFK; 9C04021A1000FL; RC0402FR- | VISHAY DALE; PANASONIC; YAGEO PHYCOMP  | 100               | RESISTOR; 0402; 100 OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                     |
| R202, R212, R222, R232, R253, R272                                                                                            |           | 6     | CRCW0402680RFK;RC0402FR- 07680RL          | VISHAY DALE/YAGEO PHICOMP              | 680               | RESISTOR, 0402, 680 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                    |
| R204, R205                                                                                                                    |           | 2     | CR0402-16W-1622FT;                        | VENKEL LTD./VISHAY DALE                | 16.2K             | RESISTOR; 0402; 16.2K OHM; 1%; 100PPM; 0.063W;                                                                              |
| R206, R216, R226, R236, R256, R207, R208, R217, R218, R227,                                                                   |           | 6     | CRCW04021M00FK ANY                        | VISHAY DALE                            | 1M                | RESISTOR; 0402; 1M; 1%; 100PPM; 0.0625W; THICK FILM RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM;                    |
| R228, R237, R238, R257, R258, R292, R295                                                                                      |           | 12    |                                           | ANY                                    | 1K                | FORMFACTOR RESISTOR; 2512; 0.02 OHM; 1%; 75PPM; 1.0W; THICK                                                                 |
| R209, R219 R235                                                                                                               |           | 2     | WSL2512R0200F CRCW04024K75FK              | N/A                                    | 0.02              | RESISTOR; 0402; 4.75K; 1%; 100PPM; 0.0625W; THICK                                                                           |
| R224, R225, R234, R229, R239                                                                                                  |           | 4 2   | CRA2512-FZ-R100ELF                        | VISHAY DALE BOURNS                     | 4.75K 0.1         | RESISTOR; 2512; 0.1 OHM; 1%; 75PPM; 3W; METAL FILM                                                                          |
| R254, R255 R259, R280                                                                                                         |           | 2 2   | CRCW040276K8FK CSR1206FT1R00              | VISHAY DALE STACKPOLE ELECTRONICS INC. | 76.8K 1           | RESISTOR; 0402; 76.8K OHM; 1%; 100PPM; 0.063W; RESISTOR; 1206; 1 OHM; 1%; 100PPM; 0.5W; THICK FILM                          |

## MAX77714 EV Kit Bill of Materials (continued)

| REF_DES                                                   | DNI/DNP   |   QTY | MFG PART #                                   | MANUFACTURER                        | VALUE          | DESCRIPTION                                                                                                       |
|-----------------------------------------------------------|-----------|-------|----------------------------------------------|-------------------------------------|----------------|-------------------------------------------------------------------------------------------------------------------|
| R264, R276, R278, R282, R286,                             |           |     6 | CRCW0402649KFK                               | VISHAY DALE                         | 649K           | RESISTOR; 0402; 649K OHM; 1%; 100PPM; 0.063W;                                                                     |
| R274, R296                                                |           |     2 | CR0402-16W-3161FT;                           | VENKEL LTD./VISHAY DALE             | 3.16K          | RESISTOR; 0402; 3.16K OHM; 1%; 100PPM; 0.063W;                                                                    |
| R275, R277, R279, R281, R285, R294                        |           |     6 | ERJ-2RKF4703X                                | PANASONIC                           | 470K           | RESISTOR, 0402, 470K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                         |
| R300, R302                                                |           |     2 | CRCW251220R0JN                               | VISHAY DALE                         | 20             | RESISTOR, 2512, 20OHMS, 5%, 200PPM, 1.0W, THICK                                                                   |
| R301, R303                                                |           |     2 | CRCW060378R7FK                               | VISHAY DALE                         | 78.7           | RESISTOR; 0603; 78.7 OHM; 1%; 100PPM; 0.10W; THICK                                                                |
| R304, R310, R312                                          |           |     3 | RMCP2010FT33R0                               | STACKPOLE ELECTRONICS INC           | 33             | RESISTOR; 2010; 33 OHM; 1%; 100PPM; 1W; THICK FILM                                                                |
| R305, R311, R313                                          |           |     3 | CRCW0603133RFK                               | VISHAY DALE                         | 133            | RESISTOR; 0603; 133 OHM; 1%; 100PPM; 0.10W; THICK                                                                 |
| R306                                                      |           |     1 | CRCW251216R0FKEGHP                           | VISHAY DRALORIC                     | 16             | RESISTOR; 2512; 16 OHM; 1%; 100PPM; 1.5W; THICK                                                                   |
| R307                                                      |           |     1 | TNPW060366R5BE                               | VISHAY DALE                         | 66.5           | RESISTOR; 0603; 66.5 OHM; 0.1%; 25PPM; 0.10W; THIN                                                                |
| R308                                                      |           |     1 | CRCW121010R0FK                               | VISHAY DALE                         | 10             | RESISTOR; 1210; 10 OHM; 1%; 100PPM; 0.5W; THICK                                                                   |
| R309                                                      |           |     1 | CRCW060342R2FK                               | VISHAY DALE                         | 42.2           | RESISTOR; 0603; 42.2 OHM; 1%; 100PPM; 0.10W; THICK                                                                |
| R314                                                      |           |     1 | SR733ATTE6R04F                               | KOA SPEER ELECTRONICS INC.          | 6.04           | RESISTOR; 2512; 6.04 OHM; 1%; 100PPM; 1.0W; THICK                                                                 |
| R315                                                      |           |     1 | CRCW060326R1FK;                              | VISHAY DALE                         | 26.1           | RESISTOR; 0603; 26.1 OHM; 1%; 100PPM; 0.10W; THICK                                                                |
| R316                                                      |           |     1 | CRCW25128R06FN                               | VISHAY DALE                         | 8.06           | RESISTOR; 2512; 8.06 OHM; 1%; 200PPM; 1.0W; THICK                                                                 |
| R317                                                      |           |     1 | CRCW060339R0FK                               | VISHAY DALE                         | 39             | RESISTOR, 0603, 39 OHM, 1%, 100PPM, 0.10W, THICK                                                                  |
| SW-EN0, SW-NRSTIO                                         |           |     2 | EVQ-Q2K03W                                   | PANASONIC                           | EVQ- Q2K03W    | SWITCH; SPST; SMT; 15V; 0.02A; LIGHT TOUCH SWITCH; RCOIL= OHM; RINSULATION= OHM; PANASONIC                        |
| SW3                                                       |           |     1 | CL-SB-12A-11                                 | NIDEC COPAL ELECTRONICS CORP        | CL-SB-12A- 11  | SWITCH; SPDT; SMT; STRAIGHT; 12V; 0.2A; CL-SB SERIES; RCOIL=0.05 OHM; RINSULATION=100MOHM                         |
| U1                                                        |           |     1 | MAX77714EWC+                                 | MAXIM                               | MAX77714 EWC+  | EVKIT PART-IC; PACKAGE OUTLINE 21-100187; PACKAGE CODE W703A4+1                                                   |
| U100                                                      |           |     1 | MAXQ2000-RBX+                                | MAXIM                               | MAXQ2000- RBX+ | IC; CTRL; LOW-POWER LCD MICROCONTROLLER; TQFN56- EP 8X8                                                           |
| U101                                                      |           |     1 | FT232RQ                                      | FUTURE TECHNOLOGY DEVICES INTL LTD. | FT232RQ        | IC; INFC; UART INTERFACE IC USB TO SERIAL; QFN32-EP 5X5                                                           |
| U102-U104                                                 |           |     3 | MAX8512EXK+                                  | MAXIM                               | MAX8512E XK    | IC, VREG, Ultra-Low-Noise, High PSRR, Adjustable Vout, SC70-5                                                     |
| U107                                                      |           |     1 | MAX3395EETC+                                 | MAXIM                               | MAX3395E ETC   | IC; TRANS; 15KV ESD-PROTECTED HIGH-DRIVE CURRENT QUAD-LEVEL TRANSLATOR WITH SPEED-UP CIRCUITRY;                   |
| U108                                                      |           |     1 | 24AA02T-I/OT                                 | MICROCHIP                           | 24AA02T- I/OT  | IC; EPROM; 2K I2C SERIAL EEPROM; SOT23-5                                                                          |
| U200-U203, U205, U209                                     |           |     6 | MAX44251AUA+                                 | MAXIM                               | MAX44251 AUA+  | IC; OPAMP; ULTRA-PRECISION; LOW-NOISE OP AMP; UMAX8                                                               |
| U206, U207                                                |           |     2 | MAX5815AAUD+                                 | MAXIM                               | MAX5815A AUD+  | IC; DAC; ULTRA-SMALL; QUAD-CHANNEL; 12-BIT BUFFERED OUTPUT DAC WITH INTERNAL REFERENCE AND I2C INTERFACE; TSSOP14 |
| U208                                                      |           |     1 | SX1503I091TRT                                | SEMTECH                             | SX1503I091 TRT | IC; XPND; 16 CHANNEL LOW VOLTAGE GPIO; QFN28-EP                                                                   |
| U210                                                      |           |     1 | SX1502I087TRT                                | SEMTECH                             | SX1502I087 TRT | IC; XPND; 8-CHANNEL LOW VOLTAGE GPIO EXPANDER; UTQFN20-EP 3X3                                                     |
| Y1                                                        |           |     1 | CC7V-T1A 32.768KHZ 9.0PF;FC-135 32.7680KA-A3 | EPSON;MICRO CRYSTAL                 | 32.768KHZ      | CRYSTAL; SMT (1206) 3.2MM x 1.5MM; 12.5PF; 32.768KHZ; +/-20PPM; +/-50PPM; -40 DEGC TO +85                         |
| Y101                                                      |           |     1 | CX3225SB16000D0FLJZZ                         | KYOCERA-KINSEKI                     | 16MHZ          | CRYSTAL; SMT (3225) 3.2X2.5; 8PF; 16MHZ; +/-10PPM; +/-15PPM                                                       |
| PCB                                                       |           |     1 | MAXMD14_SOLDERDOWN                           | MAXIM                               | PCB            | PCB:MAXMD14_SOLDERDOWN                                                                                            |
| BT1                                                       | DNP       |     0 | ML614S/F9F                                   | PANASONIC                           | ML614S/F9 F    | BATTERY; SMT; DIA=6.8MM; HT=1.45MM; 3V; 0.01A; LITHIUM;                                                           |
| C1-C9, C19, C20, C129, C134                               | DNP       |     0 | N/A                                          | N/A                                 | OPEN           | CAPACITOR; SMT (0402); OPEN; FORMFACTOR                                                                           |
| C49-C52, C57, C58                                         | DNP       |     0 | N/A                                          | N/A                                 | OPEN           | CAPACITOR; SMT (0603); OPEN; FORMFACTOR                                                                           |
| R3, R4, R19, R21, R23, R24, R26- R31, R33, R35, R36, R165 | DNP       |     0 | N/A                                          | N/A                                 | OPEN           | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                  |

NOTE: DNI-DO NOT INSTALL (PACKOUT); DNP-DO NOT PROCURE

F

E

D

C

B

A

## MAX77714 Evaluation Kit

## MAX77714 EV Kit Schematics 8 6 7

1

2

3

4

5

| Part Number               | Pin Strap              | 7-bit                  | 7-bit                  | 8-bit Write      | 8-bit Write      | 8-bit Read       | 8-bit Read       |
|---------------------------|------------------------|------------------------|------------------------|------------------|------------------|------------------|------------------|
| MAX77714 PMIC             | OTP_I2C_ADDR[1:0]=0b00 | RTC                    | 0b100 1000 0x48        | RTC              | 0b1001 0000 0x90 | RTC              | 0x91 0b1001 0001 |
| MAX77714 PMIC             | OTP_I2C_ADDR[1:0]=0b00 | PMIC/GPIO              | 0b001 1100 0x1C        | PMIC/GPIO        | 0b0011 1000 0x38 | PMIC/GPIO        | 0x39 0b0011 1001 |
| PMIC MAX77714             | OTP_I2C_ADDR[1:0]=0b01 | RTC                    | 0b100 1010 0x4A        | RTC              | 0b1001 0100 0x94 | RTC              | 0b1001 0101 0x95 |
| PMIC MAX77714             | OTP_I2C_ADDR[1:0]=0b01 | PMIC/GPIO              | 0x1C 0b001 1100        | PMIC/GPIO        | 0b0011 1100 0x3C | PMIC/GPIO        | 0x3D 0b0011 1101 |
| PMIC MAX77714             | OTP_I2C_ADDR[1:0]=0b10 | RTC                    | 0x68 0b110 1000        | RTC              | 0xD0 0b1101 0000 | RTC              | 0b1101 0001 0xD1 |
| PMIC MAX77714             | OTP_I2C_ADDR[1:0]=0b10 | PMIC/GPIO              | 0b011 1100 0x3C        | PMIC/GPIO        | 0b0111 1000 0x78 | PMIC/GPIO        | 0b0111 1001 0x79 |
| PMIC MAX77714             | OTP_I2C_ADDR[1:0]=0b11 | RTC                    | 0b110 1010 0x6A        | RTC              | 0b1101 0100 0xD4 | RTC              | 0xD5 0b1101 0101 |
| PMIC MAX77714             | OTP_I2C_ADDR[1:0]=0b11 | PMIC/GPIO              | 0x3E 0b011 1110        | PMIC/GPIO        | 0b0111 1100 0x7C | PMIC/GPIO        | 0b0111 1101 0x7D |
| MAX5815 U207 * (DAC)      | ADDR1=ADDR0=VDD        | 0b001 0000 0x10        | 0b001 0000 0x10        | 0x20 0b0010 0000 | 0x20 0b0010 0000 | 0x21 0b0010 0001 | 0x21 0b0010 0001 |
| U206 MAX5815 (DAC) *      | ADDR1=ADDR0=GND        | 0b001 1111 0x1F        | 0b001 1111 0x1F        | 0x3E 0b0011 1110 | 0x3E 0b0011 1110 | 0b0011 1111 0x3F | 0b0011 1111 0x3F |
| SX1503 U208 GPIO EXPANDER | N/A                    | 0b010 0000 0x20        | 0b010 0000 0x20        | 0b0100 0000 0x40 | 0b0100 0000 0x40 | 0x41 0b0100 0001 | 0x41 0b0100 0001 |
| SX1502 U210 GPIO EXPANDER | ADDR=3.3V              | 0b010 0001 0x21        | 0b010 0001 0x21        | 0b0100 0010 0x42 | 0b0100 0010 0x42 | 0b0100 0011 0x43 | 0b0100 0011 0x43 |
| 24AA02                    | N/A                    | 0b1010xxx 0x50 to 0x57 | 0b1010xxx 0x50 to 0x57 | 0b1010xxx0       | 0b1010xxx0       | 0b1010xxx1       | 0b1010xxx1       |

* MAX5815 also responds to an I2C broadcast address 0b0001000

8

7

6

5

4

3

PROJECT TITLE:

DRAWING TITLE:

SIZE:

HARDWARE NUMBER:

&lt;HARDWARE\_NUMBER&gt;

C C

C

ENGINEER:

BRIAN ROSARIO

2

DRAWN BY:

LAKSHMI BHUJ

TEMPLATE REV.:

1.5

MAX77714 EVALUATION KIT

1

DATE:

REV.:

REVB

SHEET 1 OF 6

09/06/2017

F

E

D

C

B

A

## MAX77714 EV Kit Schematics (continued)

<!-- image -->

## MAX77714 EV Kit Schematics (continued)

<!-- image -->

│

## MAX77714 Evaluation Kit

## MAX77714 EV Kit Schematics (continued)

<!-- image -->

## MAX77714 EV Kit Schematics (continued)

<!-- image -->

## MAX77714 EV Kit Schematics (continued)

<!-- image -->

## MAX77714 Evaluation Kit

## MAX77714 EV Kit PCB Layouts

MAX77714 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

## Evaluates: MAX77714 Multichannel Integrated Power-Management IC

│

## MAX77714 Evaluation Kit

## MAX77714 EV Kit PCB Layouts (continued)

MAX77714 EV Kit PCB Layout-Top Layer

<!-- image -->

│

## MAX77714 Evaluation Kit

## MAX77714 EV Kit PCB Layouts (continued)

MAX77714 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

│

## MAX77714 Evaluation Kit

## MAX77714 EV Kit PCB Layouts (continued)

MAX77714 EV Kit PCB Layout-Internal Layer 3

<!-- image -->

│

## MAX77714 Evaluation Kit

## MAX77714 EV Kit PCB Layouts (continued)

MAX77714 EV Kit PCB Layout-Bottom Layer

<!-- image -->

│

## MAX77714 Evaluation Kit

## MAX77714 EV Kit PCB Layouts (continued)

MAX77714 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## MAX77714 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0axim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│