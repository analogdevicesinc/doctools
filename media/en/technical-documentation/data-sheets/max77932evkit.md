<!-- lastmod 2022-08-02 -->
## MAX7932 Evaluation Kit

## General Description

The MAX77932 evaluation kit (EV kit) is a fully assembled and  tested  surface-mount  PCB  that  evaluates  the  8A dual-phase switched-capacitor converter MAX77932C.

The MAX77932 EV kit includes the IC evaluation board with  an  integrated  I 2 C  communication  interface  and  a USB  micro-B  cable.  Windows ®   based  graphical-user interface  (GUI)  software  is  available  for  use  with  the EV  kit  and  can  be  downloaded  from  Maxim's  website at www.maximintegrated.com/products/MAX77932C (under the Design Resources tab). Windows 7 or newer Windows operating system is required to use the EV kit software.

## Features and Benefits

- 8A Switched-Capacitor Converter
- 2S to 1S Battery Voltage Conversion
- Integrated Power Switch
- Soft-Start
- Programmable Protection Thresholds
- Thermal Alarm and Protection
- Chip Enabled
- I 2 C Interface with Interrupt Feature
- On-Board I 2 C Communication Interface
- Windows 7 or Newer Compatible Software
- Proven PCB Layout
- Fully Assembled and Tested

## MAX77932 EV Kit Files

| FILE                      | DESCRIPTION                         |
|---------------------------|-------------------------------------|
| MAX77932GUISetupX.X.X.exe | Installs EV kit files onto computer |

Ordering Information appears at end of data sheet.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

Evaluates: MAX7932C

## Quick Start

## Required Equipment

- MAX77932 EV kit
- Bench power supply or 2-series cell battery pack with protector
- Calibrated load box or system load for testing
- Calibrated 6½ digit or higher accuracy multimeter (optional for efficiency measurement)
- Lab cables with appropriate current rating
- 2-Pin jumper headers (included on the EV kit board)
- USB micro-B cable (included with the EV kit)
- PC with Windows 7 or newer operating system and USB port

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps to install the EV kit software, make required hardware connections, and start operation of the kit. The EV kit software can be run without hardware attached. Note that after communication is established, the IC must still be configured correctly for desired operation mode. Make sure the PC is connected to the internet throughout the process so that the USB driver can be automatically installed.

- 1) Visit www.maximintegrated.com/products/MAX77932C under  the Design  Resources tab  to  download  the latest version of the MAX77932 EV kit software. Save the  software  to  a  temporary  folder  and  unpack  the zip file.
- 2) Install the EV kit software on the computer by running the MAX77932GUISetupX.X.X.exe program  inside the  temporary  folder.  This  copies  the  program  files and creates an icon in the Windows Start menu. The software  requires  the  .NET  Framework  4.5  or  later. If  connected  to  the  internet,  Windows  automatically updates the .NET Framework as needed.
- 3) The EV kit software launches automatically after install, and it can be launched by clicking on its icon in the Windows Start menu.

<!-- image -->

## MAX77932 Evaluation Kit

- 4) Make  jumper  connections  based  on  the  Default Connection column in Table 1. This can be changed later when evaluating other features.
- 5) Make connections  to  the  EV  kit  board  as  shown  in Figure 1. Set the power supply voltage between 5V and 9V and power on. Make sure the load box is in the off state.
- 6) Connect the EV kit to a USB port on the PC using the USB cable.
- 7) Open  the  software  and  click Device &gt; Connect . Next, a window pops up showing that a slave address corresponding to MAX77932C has been found. If not, check the connection.
- 8) Enable  the  part  through  the  EN  pin  by  clicking  the SW1 button  or  follow  the Detailed  Description  of Software section to enable the part through the software. The multimeter at the output should show about ½ VIN. Apply system load to start evaluation.

## Table 1. Jumper Connection Guide

| JUMPER   | DEFAULT CONNECTION   | FEATURE                                                                                                                                                                                                                    |
|----------|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J1       | Open                 | Open: Disable power VIO from IN through U2 LDO. VIO power from USB through U5 LDO Closed: Enable power VIO from IN through U2 LDO. Need to depopulate R21 beforehand to disable VIO power through USB                      |
| J2       | Pin 1 and 2          | Open: Disconnect VIO from any power source Pin 1 and 2: VIO power from USB or IN, depending on J1, R21 Pin 2 and 3: VIO power from external power supply                                                                   |
| J3       | Pin 1 and 2          | Open: Disable EN button feature Pin 1 and 2: Default Pin 2 and 3: Do not configure                                                                                                                                         |
| J4       | Open                 | Open: Disable power good LED indication Closed: Enable power good LED indication                                                                                                                                           |
| J6       | Open                 | Open: Default Closed: Do not configure                                                                                                                                                                                     |
| J9       | Closed               | Open: Disconnect IC SCL from on-board I 2 C interface to allow communication with host device through SCL and SDAtest points Closed: Connect IC SCL with on-board I 2 C interface to allow communication with the software |
| J10      | Closed               | Open: Disconnect IC SDAfrom on-board I 2 C interface to allow communication with host device through SCL and SDAtest points Closed: Connect IC SDA with on-board I 2 C interface to allow communication with the software  |
| J11      | Open                 | Open: Does not matter Closed: Does not matter                                                                                                                                                                              |
| J13      | Open                 | Open: Disable fault interrupt LED indication Closed: Enable fault interrupt LED indication                                                                                                                                 |

Default options are bold

Figure 1. MAX77932 EV Kit Board Connections

<!-- image -->

│

## MAX77932 Evaluation Kit

## Detailed Description of Software

The MAX77932 EV kit software gives the user complete control of all functions of the MAX77932C and provides ease of use.

## Software Installation

Double  click  the MAX77932GUISetupX.X.X.exe icon to  begin  the  installation  and  follow  the  prompts  to complete  the  process.  The  evaluation  software  can  be uninstalled  in  the Add/Remove programs  tool  in  the

Evaluates: MAX77932C

Control Panel . After the installation is complete, open the Maxim Integrated/MAX77932 folder and run MAX77932. exe or select it from the program menu. A splash screen showing information about the EV kit appears while the program is loading, as shown in Figure 2.

## Establish Communication

Install default jumper setting, power the device by applying  VIN  voltage  above  4.9V  and  below  9.5V,  then  click Device &gt; Connect to communicate to the IC.

Figure 2. EV Kit Splash Screen

<!-- image -->

Figure 3. Connect Device Window

<!-- image -->

│

## MAX77932 Evaluation Kit

## Control Tab

The Control tab  displays  the  important  configuration settings  for  the  IC  as  shown  in  Figure  4.  Information  is grouped  by  function  and  is  detailed  separately.  Before configuring,  click Read  Once to  make  sure  all  the displayed configurations are in sync with the IC configu -ration state. Alternatively, click Start Auto Read and set corresponding  read  frequency  to  keep  this  page  up  to date all the time. Follow the guidance on the MAX77932C IC data sheet for the usage of each register.

## Device Status

The Device  Status tab  shows  the  status  of  the  IC.  It shows all the interrupt information of the IC and the user

Figure 4. Control Tab

<!-- image -->

Figure 5. Device Status Tab

<!-- image -->

Evaluates: MAX77932C

can  configure  the  Interrupt  Mask  to  enable/disable  the physical  interrupt  pin.  The  masked  interrupt  feature  is reflected in the IRQB pin output. The unmasked interrupt feature  only  triggers  software  interrupt  bit  change  and does not reflect on the IRQB pin output.

## Load or Save Register Dump

When a device is connected, click File &gt; Save Register Map to save the current register data into a .rmap file and click File &gt; Load Register Map to load a saved register map into the IC. This function can be used to quickly save and resume evaluation with the same settings.

│

## MAX77932 Evaluation Kit

## Script Automation

A  Python-based  script  system  is  embedded  in  the  software to allow automating or configuring multiple registers sequentially  with  ease.  To  evaluate  with  Python-based commands, click Tools &gt; Run Script File . A script window pops up, as shown in Figure 6. The first tab consists of a script editor and an embedded Python terminal interface.  The  second  tab  provides  the  Python  I/O  console. The  third  tab  provides  a  coding  tutorial  for  this  script window. Click the Run button to execute the script. The script feature helps with testing a sequence of configurations automatically.

## Optional Tools

For I 2 C-communication debugging, more tools are available at Tools &gt; Direct Access and Tools &gt; Advanced UI . With the proper test set-up procedure described in this document, these tools do not need to be used to evaluate the  MAX77932C.  However,  other  slave  devices  can  be tested with the I 2 C debugging tools and the MAX77932C software  when  connected  to  the  MAX77932C  with  the SDA and SCL pins. If successful, you can automate multiple slave devices through the script window.

Figure 6. Script Tool Window

<!-- image -->

│

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX77932EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX77932C

## MAX77932 EV Kit Bill of Materials

| REF_DES                                                                                                                          | DNI/DNP   | QTY   | MFG PART #                                                                 | MANUFACTURER                                    | VALUE            | DESCRIPTION                                                                                                                                   |
|----------------------------------------------------------------------------------------------------------------------------------|-----------|-------|----------------------------------------------------------------------------|-------------------------------------------------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| AVDD, BST1N, BST1P, BST2N, BST2P, C1N, C1P, C2N, C2P, EN, EXTVIO, HVDD, IRQB, PGNDINS, PGNDOS, PGOOD, SCL, SDA, VINS, VIO, VOUTS |           | 21    | 5000                                                                       | KEYSTONE                                        | N/A              | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                              |
| C1, C51                                                                                                                          |           | 2     | GRM32EC81C476KE15                                                          | MURATA                                          | 47UF             | CAP; SMT (1210); 47UF; 10%; 16V; X6S; CERAMIC CHIP                                                                                            |
| C2, C5                                                                                                                           |           | 2     | C0402X5R100-105KNE; GRM155R61A105KE15                                      | VENKEL LTD.;MURATA                              | 1UF              | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R                                               |
| C6, C7                                                                                                                           |           | 2     | CL05A475MO5NUN                                                             | SAMSUNG ELECTRO-MECHANICS                       | 4.7UF            | CAP; SMT (0402); 4.7UF; 20%; 16V; X5R; CERAMIC CHIP                                                                                           |
| C9, C24, C49                                                                                                                     |           | 3     | ANY                                                                        | ANY                                             | 1UF              | CAPACITOR; SMT (0201); CERAMIC CHIP; 1UF; 10V; TOL=20%; MODEL=CL SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR                          |
| C10, C14, C15, C19                                                                                                               |           | 4     | ANY                                                                        | ANY                                             | 0.047UF          | CAPACITOR; SMT (0201); CERAMIC CHIP; 0.047UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR                       |
| C11, C12, C16, C17                                                                                                               |           | 4     | GRM188R60J476ME15 GRM155R60J106ME44;                                       | MURATA                                          | 47UF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 47UF; 6.3V; TOL=20%; TG=- 55 DEGC TO +85 DEGC; TC=X5R                                                    |
| C20, C21                                                                                                                         |           | 2     | GRM155R60J106ME47; C1005X5R0J106M050BC; CL05A106MQ5NUN;                    | MURATA;MURATA;TDK;SAMSUN G ELECTRONICS;KEMET    | 10UF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 10UF; 6.3V; TOL=20%; TG=- 55 DEGC TO +85 DEGC; TC=X5R                                                    |
| C25                                                                                                                              |           | 1     | C0402C106M9PAC GRM21BR61A476ME15                                           | MURATA                                          | 47UF             | CAP; SMT (0805); 47UF; 20%; 10V; X5R; CERAMIC CHIP                                                                                            |
| C26-C29, C35, C37-C39, C42-C44, C47, C48                                                                                         |           | 13    | GRM155R71A104JA01                                                          | MURATA                                          | 0.1UF            | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 10V; TOL=5%; TG=- 55 DEGC TO +125 DEGC; TC=X7R                                                    |
| C30-C32, C45, C46                                                                                                                |           | 5     | C0402C105K8PAC;CC0402KRX5R6BB105                                           | KEMET;YAGEO                                     | 1UF              | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 10V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                       |
| C33, C36                                                                                                                         |           | 2     | C0402C0G500270JNP; GRM1555C1H270JA01                                       | VENKEL LTD.;MURATA                              | 27PF             | CAPACITOR; SMT; 0402; CERAMIC; 27pF; 50V; 5%; C0G; -55degC to + 125degC; 0 +/-30PPM/degC                                                      |
| C34, C40, C41                                                                                                                    |           | 3     | C1005X5R1A475K050                                                          | TDK                                             | 4.7UF            | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 10V; TOL=10%; TG=- 55 DEGC TO +85 DEGC; TC=X5R                                                    |
| C56                                                                                                                              |           | 1     | GRM155R71E104KE14;C1005X7R1E104K050BB ;TMK105B7104KVH;CGJ2B3X7R1E104K050BB | MURATA;TDK;TAIYO YUDEN;TDK                      | 0.1UF            | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                                  |
| C57                                                                                                                              |           | 1     | NMC0402X7R103K16TRP; GRM155R71C103KA01; CC0402KRX7R7BB103                  | NIC COMPONENTS CORP.;MURATA;YAGEO               | 0.01UF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 16V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                                           |
| DS1, DS2                                                                                                                         |           | 2     | LTST-C190GKT                                                               | LITE-ON ELECTRONICS INC.                        | LTST-C190GKT     | DIODE; LED; WATER CLEAR GREEN; SMT (0603); VF=2.1V; IF=0.03A; - 55 DEGC TO +85 DEGC                                                           |
| DS3                                                                                                                              |           | 1     | LTST-C190CKT                                                               | LITE-ON ELECTRONICS INC.                        | LTST-C190CKT     | DIODE; LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; -55 DEGC TO +85 DEGC SOLID; WEICO WIRE;                                            |
| IN, OUT, PGND, PGND1-PGND5                                                                                                       |           | 8     | 9020 BUSS                                                                  | WEICO WIRE                                      | MAXIMPAD         | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOFT DRAWN BUS TYPE-S; 20AWG                                                                         |
| J1, J4, J9-J11, J13                                                                                                              |           | 6     | PREC002SAAN-RC                                                             | SULLINS                                         | PREC002SAAN-RC   | CONNECTOR; MALE; THROUGH HOLE; HEADER; STRAIGHT; 2PINS                                                                                        |
| J2, J3                                                                                                                           |           | 2     | PEC03SAAN                                                                  | SULLINS                                         | PEC03SAAN        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                     |
| J5                                                                                                                               |           | 1     | 10118193-0001LF                                                            | FCI CONNECT                                     | 10118193-0001LF  | CONNECTOR; FEMALE; SMT; MICRO USB B TYPE RECEPTACLE; RIGHT ANGLE; 5PINS                                                                       |
| J7, J8, J12, J14                                                                                                                 |           | 4     | U.FL-R-SMT-1                                                               | HIROSE ELECTRIC CO LTD.                         | U.FL-R-SMT-1     | CONNECTOR; MALE; SMT; ULTRA SMALL SURFACE MOUNT COAXIAL CONNECTOR; STRAIGHT; 2PINS                                                            |
| L2-L4                                                                                                                            |           | 3     | BLM18AG601SN1                                                              | MURATA                                          | 600              | INDUCTOR; SMT (0603); FERRITE-BEAD; 600; TOL=+/-; 0.5A                                                                                        |
| Q1                                                                                                                               |           | 1     | MCH3474-TL-W                                                               | ON SEMICONDUCTOR                                | MCH3474-TL-W     | TRAN; POWER MOSFET; SINGLE N-CHANNEL; NCH; SC70; PD-(1W); I- (4A); V-(30V)                                                                    |
| R1, R2                                                                                                                           |           | 2 2   | CRCW04021K50JN                                                             | VISHAY DALE                                     | 1.5K             | RESISTOR; 0402; 1.5K OHM; 5%; 200PPM; 0.063W; METAL FILM RESISTOR; 0402; 100K OHM; 5%; 200PPM; 0.063W; THICK FILM                             |
| R3, R12 R4, R7, R14-R16, R18, R20-R23, R32, R44 R6                                                                               |           | 12 1  | CRCW0402100KJN ERJ-2GE0R00 CRCW0402620RFK; RC0402FR-07620RL                | VISHAY DALE PANASONIC VISHAY DALE;YAGEO PHICOMP | 100K 0 620       | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM RESISTOR; 0402; 620 OHM; 1%; 100PPM; 0.063W; THICK FILM                                  |
| R8                                                                                                                               |           | 1     | CRCW040212K0FK;MCR01MZPF1202                                               | VISHAY DALE;ROHM SEMICONDUCTOR                  | 12K              | RESISTOR, 0402, 12K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                      |
| R9, R13                                                                                                                          |           | 2     | ERJ-2RKF27R0X;RC0402FR-                                                    | PANASONIC;YAGEO                                 | 27               | RESISTOR, 0402, 27 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                       |
| R10                                                                                                                              |           | 1     | 0727RL;CRCW040227R0FK CRCW04021M00FK                                       | PHICOMP;VISHAY DALE VISHAY DALE                 | 1M               | RESISTOR; 0402; 1M; 1%; 100PPM; 0.0625W; THICK FILM                                                                                           |
| R11, R24                                                                                                                         |           | 2     | CRCW04021K00FK; RC0402FR- 071KL;MCR01MZPF1001                              | VISHAY DALE;YAGEO PHICOMP;ROHM SEMI             | 1K               | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                           |
| R17                                                                                                                              |           | 1     | CRCW04024752FK; 9C04021A4752FLHF3; CRCW040247K5FK                          | VISHAY DALE;YAGEO;VISHAY DALE                   | 47.5K            | RESISTOR; 0402; 47.5K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                        |
| R19, R31, R41                                                                                                                    |           | 3     | CRCW0402100KFK;RC0402FR-07100KL                                            | VISHAY;YAGEO INTERNATIONAL                      | 100K             | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                         |
| R25 R27, R28                                                                                                                     |           | 1     | RCC-0402PW1001F                                                            | MANUFACTURING SERVICE                           | 1K               | RESISTOR; 0402; 1K OHM; 1%; 100PPM; 0.080W; THICK FILM                                                                                        |
|                                                                                                                                  |           | 2     | CRCW04024K70FK;MCR01MZPF4701                                               | VISHAY DALE;ROHM SEMICONDUCTOR                  | 4.7K             | RESISTOR, 0402, 4.7K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                     |
| R30                                                                                                                              |           | 1 1   | CRCW0402169KFK CRCW0402470RFK                                              | VISHAY DALE VISHAY                              | 169K             | RESISTOR; 0402; 169K OHM; 1%; 100PPM; 0.063W; THICK FILM THICK FILM                                                                           |
| R35 R48                                                                                                                          |           | 1     | CRCW040220R0FK                                                             | DALE VISHAY DALE                                | 470 20           | RESISTOR, 0402, 470 OHM, 1%, 100PPM, 0.0625W, RESISTOR; 0402; 20 OHM; 1%; 100PPM; 0.063W; THICK FILM                                          |
| SW1                                                                                                                              |           | 1     | EVQ-Q2K03W                                                                 | PANASONIC                                       | EVQ-Q2K03W       | SWITCH; SPST; SMT; 15V; 0.02A; LIGHT TOUCH SWITCH; RCOIL= OHM; RINSULATION= OHM; PANASONIC EVKIT PART - IC; MAX77932C; 8A DUAL-PHASE SWITCHED |
| U1                                                                                                                               |           | 1     | MAX77932CEWO+                                                              | MAXIM                                           | MAX77932CEWO+    | CAPACITOR CONVERTER WITH INTEGRATED PROTECTION; PACKAGE OUTLINE DRAWING: 21-100293; PACKAGE CODE: W422D2+1; 0.4MM                             |
| U2                                                                                                                               |           | 1     | MAX8881EUT18+                                                              | MAXIM                                           | MAX8881EUT18+    | PITCH; WLP42 IC; VREG; ULTRA-LOW-IQ, LOW-DROPOUT LINEAR REGULATORS                                                                            |
| U3                                                                                                                               |           | 1     | FT2232HL                                                                   | FUTURE TECHNOLOGY DEVICES INTL LTD.             | FT2232HL         | WITH POK; SOT23-6 IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; LQFP64                                                             |
| U4                                                                                                                               |           | 1     | MAX14611ETD+                                                               | MAXIM                                           | MAX14611ETD+     | IC; TRANS; QUAD BIDIRECTIONAL LOW-VOLTAGE LOGIC LEVEL TRANSLATOR; TDFN14-EP                                                                   |
| U5, U6                                                                                                                           |           | 2     | MAX8512EXK+                                                                | MAXIM                                           | MAX8512EXK 12MHZ | IC, VREG, Ultra-Low-Noise, High PSRR, Adjustable Vout, SC70-5                                                                                 |
| Y1 PCB                                                                                                                           |           | 1 1   | 7M-12.000MAAJ MAX77932                                                     | TXC CORPORATION MAXIM                           | PCB              | CRYSTAL; SMT; 18PF; 12MHZ; +/-30PPM; +/-30PPM PCB:MAX77932                                                                                    |
| C50, C53-C55                                                                                                                     | DNP       | 0     | CL32A107MPVNNN;C1210C107M8PAC;LMK32 5BJ107MM                               | SAMSUNG ELECTRONICS;KEMET;TAIYO YUDEN           | 100UF            | CAPACITOR; SMT (1210); CERAMIC CHIP; 100UF; 10V; TOL=20%; TG=- 55 DEGC TO +85 DEGC; TC=X5R                                                    |
| C52                                                                                                                              | DNP       | 0     | GRM033C81E104KE14                                                          | MURATA                                          | 0.1UF            | CAPACITOR; SMT (0201); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; TG=- 55 DEGC TO +105 DEGC; TC=X6S                                                   |
| C3, C4, C13, C18, C22, C23 R5                                                                                                    | DNP DNP   | 0 0   | N/A N/A                                                                    | N/A N/A                                         | OPEN OPEN        | CAPACITOR; SMT (0603); OPEN; FORMFACTOR RESISTOR; 0402; OPEN; FORMFACTOR                                                                      |

NOTE: DNI--&gt; DO NOT INSTALL(PACKOUT); DNP--&gt; DO NOT PROCURE

Evaluates: MAX77932C

## MAX77932 EV Kit Schematic

<!-- image -->

Evaluates: MAX77932C

## MAX77932 EV Kit Schematic Diagram

<!-- image -->

## MAX77932 EV Kit Schematic Diagram

<!-- image -->

## MAX77932 EV Kit PCB Layouts

MAX77932 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX77932 EV Kit PCB Layout-Top

<!-- image -->

│

## MAX77932 EV Kit PCB Layouts (continued)

MAX77932 EV Kit PCB Layout-Layer 2

<!-- image -->

MAX77932 EV Kit PCB Layout-Layer 3

<!-- image -->

MAX77932 EV Kit PCB Layout-Bottom View

<!-- image -->

│

## MAX77932 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                   | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------|-----------------|
|                 0 | 6/20            | Initial release               | -               |
|                 1 | 6/20            | Corrected typo in part number | 2, 7, 8         |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0axim Integrated reserYes the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX77932C