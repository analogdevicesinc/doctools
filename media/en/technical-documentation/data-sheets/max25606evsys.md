<!-- lastmod 2022-08-03 -->
## MAX25606 Evaluation System

## General Description

The MAX25606 evaluation System (EV system) provides a proven design to evaluate the MAX25606 six-channel LED  matrix  manager.  The  EV  system  includes  two instances  of  the  MAX25606  controlling  twelve  on-board LEDs connected in a series configuration. The MAX25601 Boost-buck LED driver is also included to drive the LEDs.

Ordering Information appears at end of data sheet.

## MAX25606 Evaluation System Board Photo

<!-- image -->

<!-- image -->

## Features

- Two, Six-Channel Matrix Managers
- 12 On-Board White LEDs
- MAX25601 Boost-Buck LED Driver
- MAX32625PICO# Provides UART Communication to Control the Matrix Managers
- GUI for Easy Evaluation

Evaluates: MAX25606

## MAX25606 Evaluation System

## Quick Start

## Required Equipment

- MAX25606 evaluation system
- MAX32625PICO# (included)
- A  Windows ®  10 computer with GUI installed
- A 12V, 3A power supply

## Procedure

The EV system is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn  on  the  power  supply  until  all  connections  are made.  Additional  caution  should  be  taken;  the  onboard LEDs are very bright when illuminated.

- 1) Connect the positive terminal of the +12V power supply to the BAT\_VIN pad
- 2) Connect the positive terminal of the +12V power supply to the IN test point
- 3) Connect the negative terminal of the +12V power supply to the GND test point
- 5) Connect the MAX32625PICO# to the computer with the included USB cable.
- 6) If the GUI is not installed, Install the GUI
- 7) Run the GUI

Evaluates: MAX25606

## Detailed Description

The  MAX25606  evaluation  System  provides  a  proven design to evaluate the MAX25606 six-channel LED matrix manager. The EV system includes two instances of the MAX25606 controlling twelve on-board LEDs connected in a series configuration. the MAX25601 Boost-buck LED driver is also included to drive the LEDs.

## Analog Dimming Control (ICTRL)

When a shunt is installed across pins 2-3 of J2, the LED current is set by the R1/R2 resistor divider. The LED current is  linearly  proportional  to  the  voltage  on  the  ICTRL input. An ICTRL voltage of 200mV or less corresponds to I LED = 0A. An ICTRL voltage of 1.3V or more corresponds to I LED  = 0.8A. between 200mV and 1.3V, the LED current is linearly adjusted between 0A and 0.8A respectively.

- 4) Connect the MAX32625PICO# to the MAX25606EVSYS using the included ribbon cable

To set the LED current with an external reference, remove the shunt installed across J2, and instead apply a voltage across the ICTRL test point and the SGND pad.

## Table 1. MAX25606 EV System Jumper Descriptions

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                                                                                                                                                                        |
|----------|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J1       | 1-2*             | Connects V CC to the DIM pin. 100% PWM dimming is enabled in this configuration.                                                                                                                                                                                                                                                   |
| J1       | 2-3              | Connects DIM to a voltage-divider from V CC to ground. When DIM is above 3V, the buck regulator is fully on at 100% dim duty cycle. When DIM is between 0.2V and 3V, the buck regulator operates at a duty cycle proportional to the DIM voltage, at a frequency of 200Hz. When DIM is below 0.2V, the buck regulator is disabled. |
| J1       | Open             | Disconnects DIM from the voltage divider. Allows DIM to be driven by an external voltage source or PWM signal to drive the DIM pin.                                                                                                                                                                                                |
| J2       | 1-2              | Connects V CC to the REFI pin. LED current is at the maximum value of 0.74A in this configuration.                                                                                                                                                                                                                                 |
| J2       | 2-3*             | Connects REFI to a voltage-divider from V CC to ground. Adjusting R2 allows programming the LED current from 0 to 0.8A.                                                                                                                                                                                                            |
| J2       | open             | Disconnects the REFI pin of the device from the external voltage-divider on the V CC pin. Allows REFI to be driven by an external voltage to set the LED current level.                                                                                                                                                            |
| J3       | 1-2*             | Pullup resistor from UART_TX to 1.8V V DD .                                                                                                                                                                                                                                                                                        |
| J3       | open             | Pullup resistor to VDD not installed. In this case an external pullup should be added.                                                                                                                                                                                                                                             |
| J4       | 1-2*             | Pullup resistor from UART_RX to 1.8V V DD .                                                                                                                                                                                                                                                                                        |
| J4       | Open             | Pullup resistor to VDD not installed. In this case an external pullup should be added.                                                                                                                                                                                                                                             |

Windows is a registered trademark and registered service mark of Microsoft Corporation.

│

## MAX25606 Evaluation System

## Pulse-Dimming Input (PWMDIM)

Typically for matrix manager applications, the LED driver PWM dimming is not used. Therefore the default J1 position  across  pins  1-2  is  sufficient.  The  matrix  managers implement any desired PWM dimming on a per LED basis through the UART interface.

## Graphical User Interface (GUI)

The EV system includes a GUI to facilitate evaluation of the MAX25606 Matrix manager device. Once the board is  powered up and the PICO board is connected to the EV kit, click Connect .  The  Device 0 and Device 1 field

Evaluates: MAX25606

should  populate  with  the  appropriate  device  IDs  of  the MAX25606 devices.

## Dimming

Individual  channel  PWM  dimming  can  be  controlled  on the individual tab. The SW\_GO\_EN bit must be set to 1 before any switch programming can occur.

## Register Map

The full register map is available on the Register tab. This tab  also  supports Read and Write commands for  each register.

Figure 1. MAX25606 EV system Graphical User Interface

<!-- image -->

│

## MAX25606 Evaluation System

## Scripting

The EV system GUI features the ability to run scripts that contain UART write commands and delay commands. Lighting animations can now be easily created and tested. Click the Load Script button to open a file navigator and select the desired .json file. The name of the script file will be populated in the Script Name field. Click Run Script and the commands in the script file begin executing in sequence until the script is complete.

Figure 2. MAX25606 EV system Graphical User Interface (Scripting Tab)

<!-- image -->

## Ordering Information

<!-- image -->

| PART           | TYPE      |
|----------------|-----------|
| MAX25606EVSYS# | EV System |

# Denotes RoHS compliant

Evaluates: MAX25606

## MAX25606 Evaluation System

## MAX25606 EV System Bill of Materials

|   QTY | REF DES                                                                                                                        | MFG PART #                                                                                    | MANUFACTURER                     | VALUE    | DESCRIPTION                                                                                                                                                                      |
|-------|--------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|----------------------------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    18 | A0_U1, A0_U2, A1_U1, A1_U2, A2_U1, A2_U2, AIN_1, AIN_3, EXTCLK, FLTB_U1, FLTB_U2, P3_2, P3_3, P3_7, RX_2, TX_2, VDD_U1, VDD_U2 | 5122                                                                                          | KEYSTONE                         | N/A      | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; BLUE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |
|    20 | BAT_VIN, GND1, GND3, GND4, IN, J5-J7, J9-J11, LED+, LED1_K, LED6_A, LED7_K, LED9_A, LED10_K, LED12_A, VDRV,                    | 9020 BUSS                                                                                     | WEICO WIRE                       | MAXIMPAD | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                                                         |
|     9 | C3, C7, C8, C10, C18, C35-C38                                                                                                  | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA; CGA3E2X7R1H104K080AD; CL10B104KB8WPN | MURATA; MURATA; TDK;TDK; SAMSUNG | 0.1UF    | CAP; SMT (0603); 0.1UF; 10%; 50V; X7R; CERAMIC                                                                                                                                   |
|     6 | C4, C5, C11-C13, C15                                                                                                           | CGA6M3X7S2A475K200AE; CGA6M3X7S2A475K200AB; GCM32DC72A475KE02                                 | TDK;TDK; MURATA                  | 4.7UF    | CAP; SMT (1210); 4.7UF; 10%; 100V; X7S; CERAMIC                                                                                                                                  |
|     1 | C6                                                                                                                             | C1608X5R1E475K080AC; GRM188R61E475KE11                                                        | TDK; MURATA                      | 4.7UF    | CAP; SMT (0603); 4.7UF; 10%; 25V; X5R; CERAMIC                                                                                                                                   |
|     5 | C9, C39-C42                                                                                                                    | C0603X7R500103JNP; C0603C103J5RAC                                                             | VENKEL LTD; KEMET                | 0.01UF   | CAP; SMT (0603); 0.01UF; 5%; 50V; X7R; CERAMIC                                                                                                                                   |

Evaluates: MAX25606

## MAX25606 EV System Bill of Materials (continued)

|   QTY | REF DES        | MFG PART #                                                                                      | MANUFACTURER                       | VALUE        | DESCRIPTION                                                                                             |
|-------|----------------|-------------------------------------------------------------------------------------------------|------------------------------------|--------------|---------------------------------------------------------------------------------------------------------|
|     2 | C14, C27       | CGA3E2X7R2A103K; C0603C103K1RA; GRM188R72A103KA01; C1608X7R2A103K080AA                          | TDK;KEMET; MURATA;TDK              | 0.01UF       | CAP; SMT (0603); 0.01UF; 10%; 100V; X7R; CERAMIC; NOTE: NOT RECOMMENDED FOR NEW DESIGN. USE 20-00u01-M8 |
|     1 | C16            | 06035A471JAT2A                                                                                  | AVX                                | 470PF        | CAP; SMT (0603); 470PF; 5%; 50V; C0G; CERAMIC                                                           |
|     1 | C19            | GRM21BR71H105KA12; CL21B105KBFNNN; C2012X7R1H105K085AC; UMK212B7105KG                           | MURATA; SAMSUNG ELECTRONICS; TDK   | 1UF          | CAP; SMT (0805); 1UF; 10%; 50V; X7R; CERAMIC                                                            |
|     2 | C20, C67       | C0805C104K1RAC; C2012X7R2A104K125AA; GRM21BR72A104KAC4; CGA4J2X7R2A104K125AA; GCD21BR72A104KA01 | KEMET; TDK; MURATA; TDK; MURATA    | 0.1UF        | CAP; SMT (0805); 0.1UF; 10%; 100V; X7R; CERAMIC                                                         |
|     1 | C22            | C0603C223K5RAC; GRM188R71H223K; C1608X7R1H223K080AA; GCJ188R71H223KA01                          | KEMET; MURATA; TDK; MURATA         | 0.022UF      | CAP; SMT (0603); 0.022UF; 10%; 50V; X7R; CERAMIC                                                        |
|     2 | C23, C66       | EEE-TG2A220UP                                                                                   | PANASONIC                          | 22UF         | CAP; SMT (CASE_F); 22UF; 20%; 100V; ALUMINUM- ELECTROLYTIC                                              |
|     1 | C25            | C1608X5R1A106K080AC                                                                             | TDK                                | 10UF         | CAP; SMT (0603); 10UF; 10%; 10V; X5R; CERAMIC                                                           |
|     1 | C26            | C0603C222K1RAC                                                                                  | KEMET                              | 2200PF       | CAP; SMT (0603); 2200PF; 10%; 100V; X7R; CERAMIC                                                        |
|     1 | C30            | C1608X7S2A104K080AB                                                                             | TDK                                | 0.1UF        | CAP; SMT (0603); 0.1UF; 10%; 100V; X7S; CERAMIC                                                         |
|     2 | C33, C34       | C1608X5R1E225K; TMK107ABJ225KA; TMK107BJ225KA; GRM188R61E225KA12                                | TDK;TAIYO YUDEN;TAIYO YUDEN;MURATA | 2.2UF        | CAP; SMT (0603); 2.2UF; 10%; 25V; X5R; CERAMIC                                                          |
|     1 | C64            | UMK107BJ105KA; C1608X5R1H105K080AB; CL10A105KB8NNN; GRM188R61H105KAAL                           | TAIYO YUDEN; TDK; SAMSUNG; MURATA  | 1UF          | CAP; SMT (0603); 1UF; 10%; 50V; X5R; CERAMIC                                                            |
|     1 | D1             | DFLS1100-7                                                                                      | DIODES INCORPORATED                | DFLS1100-7   | DIODE; SCHOTTKY; SMT; PIV=100V; IF=1A                                                                   |
|     4 | D2, D4, D6, D7 | 1N4148WS-7-F                                                                                    | DIODES INCORPORATED                | 1N4148WS-7-F | DIODE; SWT; SMT (SOD-323); PIV=75V; IF=0.3A                                                             |

│

Evaluates: MAX25606

## MAX25606 Evaluation System

## MAX25606 EV System Bill of Materials (continued)

|   QTY | REF DES                                  | MFG PART #         | MANUFACTURER               | VALUE               | DESCRIPTION                                                                                                                                                                 |
|-------|------------------------------------------|--------------------|----------------------------|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     2 | D3, D5                                   | BAT46WJ            | NXP                        | BAT46WJ,115         | DIODE; SCH; SMT (SOD-323F); PIV=100V; IF=0.25A                                                                                                                              |
|     7 | DIM, FB, FLTB, IOUTV, REFI, SYNCIN, UVEN | 5000               | KEYSTONE                   | N/A                 | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |
|     3 | DS1-DS3                                  | SML-LXT0805GW      | LUMEX OPTO COMPONENTS INC. | SML- LXT0805GW- TR  | DIODE; LIGHT EMITTING GREEN; SMT (0805); IF(PEAK)=0.15A; I(STEADY)=0.025A; PD=0.105W; VF=2.0V                                                                               |
|     2 | J1, J2                                   | PCC03SAAN          | SULLINS                    | PCC03SAAN           | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                                                                    |
|     2 | J3, J4                                   | PCC02SAAN          | SULLINS                    | PCC02SAAN           | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                                                                    |
|     1 | J8                                       | FTSH-105-01-L-DV-K | SAMTEC                     | FTSH-105-01- L-DV-K | CONNECTOR; MALE; SMT; 0.05 (1.27MM) SMT MICRO HEADER; STRAIGHT; 10PINS                                                                                                      |
|     1 | J20                                      | PEC04SBAN          | SULLINS ELECTRONICS CORP.  | PEC04SBAN           | CONNECTOR; MALE; THROUGH HOLE; 0.100INCH CONTACT CENTERS; MALE BREAKAWAY HEADERS; RIGHTANGLE; NO MOUNTING; 4PINS                                                            |
|     1 | J21                                      | SMH-104-02-G-S     | SAMTEC                     | SMH-104-02- G-S     | CONNECTOR; FEMALE; SMT; SMH SERIES; SMT HORIZONTAL SOCKET; RIGHT ANGLE; 4PINS                                                                                               |
|     1 | L1                                       | MSS1278-103ML      | COILCRAFT                  | 10UH                | INDUCTOR; SMT; FERRITE CORE; 10UH; TOL=+/-20%; 5.7A                                                                                                                         |

│

Evaluates: MAX25606

## MAX25606 EV System Bill of Materials (continued)

|   QTY | REF DES      | MFG PART #                                                                         | MANUFACTURER                         | VALUE                                 | DESCRIPTION                                                                                                                                           |
|-------|--------------|------------------------------------------------------------------------------------|--------------------------------------|---------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
|     1 | L3           | MSS1278-104ML                                                                      | COILCRAFT                            | 100UH                                 | INDUCTOR; SMT; FERRITE CORE; 100UH; TOL=+/-20%; 1.5A                                                                                                  |
|    12 | LED1-LED12   | KW CELNM1.TG-Z5NF6- EBVFFCBB46-15B3                                                | OSRAM                                | KW CELNM1. TG-Z5NF6- EBVFFCBB46- 15B3 | DIODE; LED; WHITE; SMT; VF=3V; IF=1A;NOTE:SPECIAL ORDER ONLY;PURCHASE DIRECT FROM THE MANUFACTURER                                                    |
|     6 | MH1-MH6      | 9032                                                                               | KEYSTONE                             | 9032                                  | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                             |
|     2 | Q1, Q3       | SQJQ960EL-T1_GE3                                                                   | VISHAY                               | SQJQ960EL- T1_GE3                     | TRAN; NCH; POWERPAK8X8L; PD-(71W); I-(63A); V-(60V)                                                                                                   |
|     2 | R1, R11      | CRCW060324K9FK;ERJ- 3EKF2492                                                       | VISHAY DALE;PANASONIC                | 24.9K                                 | RES; SMT (0603); 24.9K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                   |
|     2 | R2, R18      | 3296W-1-103LF                                                                      | BOURNS                               | 10K                                   | RESISTOR; THROUGH-HOLE- RADIAL LEAD; 3296 SERIES; 10K OHM; 10%; 100PPM; 0.5W; SQUARE TRIMMING POTENTIOMETER; 25 TURNS; MOLDER CERAMIC OVER METAL FILM |
|     1 | R3           | ERJ-3EKF6492                                                                       | PANASONIC                            | 64.9K                                 | RES; SMT (0603); 64.9K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                   |
|     1 | R4           | ERJ-3EKF1242                                                                       | PANASONIC                            | 12.4K                                 | RES; SMT (0603); 12.4K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                   |
|     3 | R5, R17, R32 | CRCW0603100KFK; RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL | VISHAY DALE; YAGEO; YAGEO; PANASONIC | 100K                                  | RES; SMT (0603); 100K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                    |
|     1 | R6           | CRCW060330K0FK                                                                     | VISHAY DALE                          | 30K                                   | RES; SMT (0603); 30K; 1%; +/- 100PPM/DEGC; 0.1000W                                                                                                    |
|     2 | R7, R35      | ERJ-P03F10R0V                                                                      | PANASONIC                            | 10                                    | RES; SMT (0603); 10; 1%; +/- 200PPM/DEGC; 0.2000W                                                                                                     |
|     1 | R8           | CSR1206-0R007F1                                                                    | RIEDON INC.                          | 0.007                                 | RES; SMT (1206); 0.007; 1%; +/-50PPM/DEGC; 1W                                                                                                         |
|     1 | R9           | ERJ-8BQFR27                                                                        | PANASONIC                            | 0.27                                  | RESISTOR; 1206; 0.27 OHM; 1%; 250PPM; 0.5W; THICK FILM                                                                                                |

Evaluates: MAX25606

## MAX25606 Evaluation System

## MAX25606 EV System Bill of Materials (continued)

|   QTY | REF DES                           | MFG PART #                                                      | MANUFACTURER                                  | VALUE   | DESCRIPTION                                         |
|-------|-----------------------------------|-----------------------------------------------------------------|-----------------------------------------------|---------|-----------------------------------------------------|
|     1 | R10                               | CRCW0603422KFK                                                  | VISHAY DALE                                   | 422K    | RES; SMT (0603); 422K; 1%; +/-100PPM/DEGC; 0.1000W  |
|     6 | R12, R21, R23, R41, R46, R48      | CRCW060310K0FK;ERJ- 3EKF1002;AC0603FR- 0710KL;RMCF0603FT10K0    | VISHAY DALE; PANASONIC; YAGEO                 | 10K     | RES; SMT (0603); 10K; 1%; +/- 100PPM/DEGC; 0.1000W  |
|     1 | R13                               | CRCW06034K99FK; ERJ-3EKF4991                                    | VISHAY DALE; PANASONIC                        | 4.99K   | RES; SMT (0603); 4.99K; 1%; +/-100PPM/DEGC; 0.1000W |
|     5 | R14, R27-R29, R40                 | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL                  | SAMSUNG ELECTRONICS; BOURNS; YAGEO PH         | 0       | RES; SMT (0603); 0; 5%; JUMPER; 0.1000W             |
|     1 | R15                               | CRCW06032K0FK;ERJ- 3EKF2001;RC0603FR- 072KL;CRCW06032K00FK      | VISHAY; PANASONIC; YAGEO; VISHAY              | 2K      | RES; SMT (0603); 2K; 1%; +/- 100PPM/DEGC; 0.1000W   |
|     2 | R16, R22                          | ERJ-3RQF3R3                                                     | PANASONIC                                     | 3.3     | RES; SMT (0603); 3.3; 1%; +/- 100PPM/DEGC; 0.1000W  |
|     1 | R19                               | CRCW0603470KFK                                                  | VISHAY DALE                                   | 470K    | RES; SMT (0603); 470K; 1%; +/-100PPM/DEGC; 0.1000W  |
|     2 | R24, R25                          | CRCW06030000Z0                                                  | VISHAY DALE                                   | 0       | RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W         |
|     3 | R26, R33, R34                     | CRCW0603100RFK; ERJ-3EKF1000; RC0603FR-07100RL                  | VISHAY DALE; PANASONIC                        | 100     | RES; SMT (0603); 100; 1%; +/- 100PPM/DEGC; 0.1000W  |
|     1 | R31                               | ERJ-3EKF3482; RC0603FR-0734K8L                                  | PANASONIC; YAGEO                              | 34.8K   | RES; SMT (0603); 34.8K; 1%; +/-100PPM/DEGC; 0.1000W |
|     7 | R42, R43, R57, R59, R60, R62, R63 | CRCW060395R3FK                                                  | VISHAY DALE                                   | 95.3    | RES; SMT (0603); 95.3; 1%; +/- 100PPM/DEGC; 0.1000W |
|     2 | R44, R58                          | CRCW0603909RFK                                                  | VISHAY DALE                                   | 909     | RES; SMT (0603); 909; 1%; +/- 100PPM/DEGC; 0.1000W  |
|    10 | R45, R47, R49-R56                 | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00; CR0603AJ/-000ELF    | VISHAY; ROHM SEMICONDUCTOR; PANASONIC; BOURNS | 0       | RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W         |
|    12 | R64-R69, R70-R75                  | MCR03EZPFX2002; ERJ-3EKF2002; CR0603-FX-2002ELF; CRCW060320K0FK | ROHM;PANASONI C;BOURNS;VISHA YDALE            | 20K     | RES;SMT(0603);20K;1%;+/- 100PPM/DEGC;0.1000W        |

│

Evaluates: MAX25606

## MAX25606 EV System Bill of Materials (continued)

|   QTY | REF DES           | MFG PART #                  | MANUFACTURER                            | VALUE           | DESCRIPTION                                                                                                                                                                              |
|-------|-------------------|-----------------------------|-----------------------------------------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     5 | R76-R78, R81, R82 | CRCW08050000ZS; RC2012J000  | DIGI-KEY                                | 0               | RES; SMT (0805); 0; JUMPER; JUMPER; 0.1250W                                                                                                                                              |
|     1 | R80               | CRCW080510M0FK              | VISHAY DALE                             | 10M             | RES; SMT (0805); 10M; 1%; +/- 100PPM/DEGC; 0.1250W                                                                                                                                       |
|     3 | SU1, SU2, SU5     | S1100-B;SX1100-B; STC02SYAN | KYCON; KYCON; SULLINS ELECTRONICS CORP. | SX1100-B        | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                                                                  |
|     1 | TP1               | 7006                        | KEYSTONE                                | 7006            | CONNECTOR; PANELMOUNT; BINDING POST; STRAIGHT THROUGH; 1PIN; RED                                                                                                                         |
|     1 | TP2               | 7007                        | KEYSTONE                                | 7007            | CONNECTOR; PANELMOUNT; BINDING POST; STRAIGHT THROUGH; 1PIN; BLACK                                                                                                                       |
|     2 | U1, U2            | MAX25606ATP/VY+             | MAXIM                                   | MAX25606ATP/VY+ | EVKIT PART - IC; MAX25606ATP/VY+; 6 SWITCH MATRIX MANAGER; PACKAGE CODE: T2044Y+3C; PACKAGE OUTLINE NUMBER: 21-100068; LAND PATTERN NUMBER: 90-0037                                      |
|     1 | U3                | MAX25601DAUI/V+             | MAXIM                                   | MAX25601DAUI/V+ | EVKIT PART - IC; MAX25601DAUI/V+; SYNCHRONOUS BOOSTAND SYNCHRONOUS BUCK LED CONTROLLERS ; TSSOP28- EP; PACKAGE CODE U28+1C; LAND PATTERN: 90- 100069; PACKAGE OUTLINE DRAWING: 21-100182 |
|     2 | U4                | BCS-110-L-S-TE              | SAMTEC                                  |                 | CONNECTOR; FEMALE; THROUGH HOLE; TIGER CLAW PASS-THROUGH SOCKET; STRAIGHT; 10PINS                                                                                                        |
|     2 | U4                | TSW-110-07-F-S              | SAMTEC                                  |                 | CONNECTOR; MALE; THROUGH HOLE; 0.025 IN SQ POST HEADER; STRAIGHT; 10PINS                                                                                                                 |

Evaluates: MAX25606

## MAX25606 EV System Schematic Diagrams

<!-- image -->

## MAX25606 EV System Schematic Diagrams (continued)

<!-- image -->

Evaluates: MAX25606

## MAX25606 EV System Schematic Diagrams (continued)

<!-- image -->

│

Evaluates: MAX25606

## MAX25606 EV System PCB Layout Diagrams

MAX25606 EV System Component Placement Guide-Top Silkscreen

<!-- image -->

MAX25606 EV System PCB Layout Diagram-Top Layer

<!-- image -->

Evaluates: MAX25606

│

## MAX25606 EV System PCB Layout Diagrams (continued)

MAX25606 EV System PCB Layout Diagram-GND\_1

<!-- image -->

MAX25606 EV System PCB Layout Diagram-GND\_2

<!-- image -->

Evaluates: MAX25606

│

## MAX25606 EV System PCB Layout Diagrams (continued)

MAX25606 EV System PCB Layout Diagram-Bottom Layer

<!-- image -->

MAX25606 EV System PCB Layout Diagram-Bottom Silkscreen

<!-- image -->

│

## MAX25606 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION              | PAGES CHANGED   |
|-------------------|-----------------|--------------------------|-----------------|
|                 0 | 5/21            | Release for Market Intro | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitr\ and specifications Zithout notice at an\ time.

│

Evaluates: MAX25606