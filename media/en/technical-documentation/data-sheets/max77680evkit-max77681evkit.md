<!-- lastmod 2022-08-04 -->
## MAX77680/MAX77681 Evaluation Kit

## General Description

The  MAX77680/MAX77681  evaluation  kit  (EV  kit)  is  a fully  assembled  and  tested  printed  circuit  board  (PCB) that demonstrates the MAX77680/MAX77681. The EV kit allows for easy evaluation of the MAX77680/MAX77681 resources, including the SIMO and I 2 C interface.

Windows ® -based software provides a user-friendly graphical interface as well as a detailed register-based interface to exercise the features of the MAX77680/MAX77681.

Ordering Information appears at end of data sheet.

Evaluates: MAX77680/MAX77681

## Benefits and Features

- Easy to Use
- GUI Drives I 2 C Interface
- Fully Assembled and Tested
- Emulates System Loading
- On-Board Electronic Load for SIMO Buck-Boost Outputs
- Electronic Load has Steady-State, Transient, and Random Modes
- Evaluates Both Push-Button and Slider-Switch On-Key Options

Figure 1. MAX77680/MAX77681 EV Kit Photo

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

<!-- image -->

Evaluates: MAX77680/MAX77681

Figure 2. MAX77680/MAX77681 EV Kit Block Diagram

<!-- image -->

Evaluates: MAX77680/MAX77681

Figure 3. MAX77680/MAX77681 EV Kit Top View

<!-- image -->

│

Evaluates: MAX77680/MAX77681

Figure 4. MAX77680/MAX77681 EV Kit Bottom View

<!-- image -->

## MAX77680/MAX77681 Evaluation Kit

## Quick Start

Follow this procedure to familiarize yourself with the EV kit. Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Required Equipment

- MAX77680/MAX77681 EV kit
- Windows-based PC
- Power supply
- Ammeter
- DVM
- Micro-USB cable
- GUI

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

- 1) Visit the product webpage at www.maximinte -grated.com/max77680evkit and navigate to Design Resources to download the latest version of the EV kit software. Save the EV kit software to a temporary folder and decompress the ZIP file.
- 2) Install all shunts as recommended in Table 1.
- 3) Connect a Micro-B USB cable between the EV kit's J6 and your Windows-based PC.
- 4) Apply a 3.7V supply (set for 100mA current limit) through an ammeter (set for 10mA range) across the SYS and GND2 terminals of the EV kit. Turn the supply on.
- 5) Open the GUI and press the Connect button in the upper left corner. Wait for the device to respond, and in the Synchronize window, press the Read and close button.
- 6) Press the on-key (SW1) for approximately 1 second, then release the on-key.
- 7) Confirm with the ammeter that the quiescent current is approximately 37.5µA.
- 8) Connect a DVM to SBB0, SBB1, and SBB2. For the MAX77680A, 1.8V, 1.2V, and 3.3V appear, respectively. For the MAX77681A, 1.8V, 3.3V, and 5.0V appear, respectively.

## Evaluates: MAX77680/MAX77681

This concludes the Quick Start procedure. Users are now encouraged to explore the device and its register settings with  the  GUI.  During  general  device  evaluation,  set  the ammeter range to greater than or equal to 1A to minimize the impact of its series resistance.

For more information on the GUI, see the Software section.

## Table 1. Default Shunt Positions and Jumper Descriptions

| REFERENCE DESIGNATOR   | DEFAULT POSITION   | FUNCTION                                                                                                |
|------------------------|--------------------|---------------------------------------------------------------------------------------------------------|
| J100                   | N/A                | Do not connect shunts to J100.                                                                          |
| J101                   | 1-2                | 1-2: Connects a V IO to the 3.3V EV kit logic rail. 3-4: Connects a V IO to the 1.8V EV kit logic rail. |
| J200                   | 1-2                | 1-2: Connects the U200 amplifier to the gate of the Q200 load FET.                                      |
| J201                   | 1-2                | 1-2: Connects SBB0 to load cell.                                                                        |
| J202                   | 1-2                | 1-2: Connects the U202 amplifier to the gate of the Q202 load FET.                                      |
| J203                   | 1-2                | 1-2: Connects SBB1 to load cell.                                                                        |
| J204                   | 1-2                | 1-2: Connects the U204 amplifier to the gate of the Q204 load FET.                                      |
| J205                   | 1-2                | 1-2: Connects SBB2 to load cell.                                                                        |
| J2                     | N/A                | Do not connect shunts to J2.                                                                            |
| J4                     | 1-2                | 1-2: Connects PWRHLD to V IO . 2-3: Connects PWRHLD to GND.                                             |
| J5                     | 2-3                | 1-2: Connects nEN to SW2. 2-3: Connects nEN to SW1.                                                     |
| J6                     | N/A                | USB-Micro adapter for communications to a user PC (and use the GUI).                                    |
| J8                     | 1-2                | 1-2: Connects nRST to PWRHLD through a 150Ω resistor.                                                   |

## MAX77680/MAX77681 Evaluation Kit

## EV Kit Features

## On-Key Options

For applications that require the IC to enable with a userinteractable switch, the EV kit comes with two common types: the push-button (momentary) and the slide-switch (persistent). The active-low enable pin (nEN) has an internal pullup resistor. Select between either switch with the jumper J5. Refer to the data sheet for more information on configuring the IC for momentary or persistent switches.

## Electronic Load

The  EV  kit  comes  with  an  electronic  load  that  allows the user to easily evaluate the SIMO regulators. An onboard DAC and op-amp configuration set the load current through I 2 C, and J201, J203, and J205 connects the load to  the  output  of  SBB0,  SBB1,  and  SBB2,  respectively. Emulate  SYS  loading  by  removing  J201  and  connecting pin 1 of the header to VSYS with a wire. To exercise the load transient response of a regulator, remove J200, J202, or J204 and connect a signal generator to the gate of  the  load  MOSFET  (pin  2  of  the  header).  Drive  the MOSFET gate with a signal between ~1V (off) and ~3V (fully on) to apply transients to the output of the regulator (assuming J201, J203, J205, or J207 is installed). Note that there is a 1Ω sense resistor that has test point access (called VIL\_SBBx) that allows for a 1:1 conversion of load current to voltage.

## Evaluates: MAX77680/MAX77681

## Software

The  graphical  user  interface  (GUI)  software  allows  for quick,  easy,  and  thorough  evalution  of  the  MAX77680/ MAX77681.

The  GUI  is  designed  to  have  individual  tabs  for  each functional  block  of  the  device  ( MAX77680/MAX77681 , Interrupts/Status ,  and SIMO )  and  an  additional  tab  for controlling EV kit hardware ( Load Control ). See Figure 6 for a screenshot of the GUI upon first opening.

## Installation

Visit  the  product  webpage  at www.maximintegrated. com/max77680evkit and navigate to Design Resources to download the latest version of the EV kit software. Save the EV kit software to a temporary folder and decompress the ZIP file.

## Windows Drivers

Upon connection of a micro-USB cable between your PC and the EV kit for the first  time,  wait  a  few  minutes  for Windows to automatically install the necessary drivers.

## Graphical User Interface (GUI) Details

The  GUI  drives  I 2 C-communication  with  the  EV  kit. Every  control  in  the  GUI  (excluding  the Load  Control ) corresponds directly to a register within the MAX77680/ MAX77681. Refer to the AN6473: MAX77680/MAX77681 I 2 C-Compatible Serial Interface Implementation Guide for  a  complete  description  of  the  registers.  The Load Control and tabs provide additional functionality with the EV kit.

Figure 5. Electronic Load Circuit

<!-- image -->

│

## MAX77680/MAX77681 Evaluation Kit

## Load Control Tab

The Load Control tab contains controls for setting load on  the  SIMO  outputs.  The  GUI  is  capable  of  setting steady-state, transient, and random load currents. To set

Evaluates: MAX77680/MAX77681

a load current, use the slider-bar or text field to input a value (mA) and press the Enable button. Shuffle through the modes to exercise different load conditions. The offset and gain values are set by Maxim and do not need to be altered.

Figure 6. MAX77680/MAX77681 EV Kit GUI Top-Level Interface

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX77680EVKIT# | EV KIT |
| MAX77681EVKIT# | EV KIT |

# Denotes a RoHS-compliant device that may include lead(Pb) that is exempt under the RoHS requirements.

│

## MAX77680/MAX77681 Evaluation Kit

## MAX77680/MAX77681 EV Kit Bill of Materials

| REF_DES                                                             | DNI/DNP   |   MAX77680 EVKIT QTY |   MAX77681 EVKIT QTY | MFG PART #                                            | MANUFACTURER               | VALUE                           | DESCRIPTION                                                                                                             |
|---------------------------------------------------------------------|-----------|----------------------|----------------------|-------------------------------------------------------|----------------------------|---------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| C1, C30                                                             | -         |                    2 |                    2 | ANY                                                   | ANY                        | 22UF                            | CAPACITOR; SMT (0603); CERAMIC CHIP; 22UF; 10V; TOL=20%; MODEL=CL SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR   |
| C2, C31, C32                                                        | -         |                    3 |                    3 | ANY                                                   | ANY                        | 0.01UF                          | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 10V; TOL=10%; MODEL=C0402C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R        |
| C4                                                                  | -         |                    1 |                    1 | GRM155R71H332KA01                                     | MURATA                     | 3300PF                          | CAPACITOR; SMT (0402); CERAMIC CHIP; 3300PF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                             |
| C6, C8, C9, C20                                                     | -         |                    4 |                    4 | ANY                                                   | ANY                        | 10UF                            | CAPACITOR; SMT (0402); CERAMIC CHIP; 10UF; 6.3V; TOL=20%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR           |
| C12, C110-C113, C115, C118, C120, C158, C239-C241                   | -         |                   12 |                   12 | ANY                                                   | ANY                        | 1UF                             | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R ; FORMFACTOR   |
| C14, C108, C150, C151, C155-C157, C159, C202, C207, C212, C221-C223 | -         |                   14 |                   14 | ANY                                                   | ANY                        | 0.1UF                           | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R; FORMFACTOR  |
| C27-C29                                                             | -         |                    3 |                    3 | ANY                                                   | ANY                        | 0.1UF                           | CAPACITOR; SMT; 0402; CERAMIC; 0.1uF; 10V; 10%; X5R; - 55degC to + 125degC; 0 +/-30PPM/degC; FORMFACTOR ;               |
| C114                                                                | -         |                    1 |                    1 | ANY                                                   | ANY                        | 0.47UF                          | CAPACITOR; SMT; 0603; CERAMIC; 0.47uF; 10V; 10%; X5R; - 55degC to + 125degC, ; FORMFACTOR                               |
| C152, C153                                                          | -         |                    2 |                    2 | GRM1555C1H150FA01                                     | MURATA                     | 15PF                            | CAPACITOR; SMT (0402); CERAMIC CHIP; 15PF; 50V; TOL=1%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                |
| C154                                                                | -         |                    1 |                    1 | ANY                                                   | ANY                        | 4.7UF                           | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 10V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR   |
| C200, C248, C250                                                    | -         |                    3 |                    3 | C1005X5R1H472K050                                     | TDK                        | 4700PF                          | CAPACITOR; SMT (0402); CERAMIC CHIP; 4700PF; 50V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                              |
| C201, C206, C211                                                    | -         |                    3 |                    3 | ANY                                                   | ANY                        | 1000PF                          | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL=10%; MODEL=C0G; TG=-55 DEGC TO +125 DEGC; TC=+; FORMFACTOR        |
| C203, C204, C208, C209, C213, C214                                  | -         |                    6 |                    6 | C0402C180J5GAC; GRM1555C1H180JA01J; C1005C0G1H180J050 | KEMET/MURATA/TDK           | 18PF                            | CAPACITOR; SMT (0402); CERAMIC CHIP; 18PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                |
| D100, D101                                                          | -         |                    2 |                    2 | LTST-C190YKT                                          | LITE-ON ELECTRONICS; INC.  | LTST-C190YKT                    | DIODE; LED; STANDARD; YELLOW; SMT (0603); PIV=5.0V; IF=0.02A; -55 DEGC TO +85 DEGC                                      |
| D102, D103                                                          | -         |                    2 |                    2 | LTST-C190CKT                                          | LITE-ON ELECTRONICS; INC.  | LTST-C190CKT                    | DIODE; LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; -55 DEGC TO +85 DEGC                                         |
| SBB0-SBB2, VSYS, EN_EXT                                             | -         |                    5 |                    5 | 5010                                                  | KEYSTONE                   | N/A                             | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                      |
| FB100                                                               | -         |                    1 |                    1 | BLM18PG221SN1                                         | MURATA                     | 220                             | INDUCTOR; SMT (0603); FERRITE-BEAD; 220; TOL=+/-25%; 1.4A; -55 DEGC TO +125 DEGC                                        |
| GND1, GND5-GND7                                                     | -         |                    4 |                    4 | 5011                                                  | KEYSTONE                   | N/A                             | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| GND2-GND4, GND8                                                     | -         |                    4 |                    4 | 9020 BUSS                                             | WEICO WIRE                 | MAXIMPAD                        | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                |
| J2                                                                  | -         |                    1 |                    1 | PBC10SAAN                                             | SULLINS ELECTRONICS CORP.  | PBC10SAAN                       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 10PINS; -65 DEGC TO +125 DEGC                                       |
| J4, J5, J101                                                        | -         |                    3 |                    3 | TSW-103-07-T-S                                        | SAMTEC                     | TSW-103-07-T-S                  | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 3PINS                                                        |
| J6                                                                  | -         |                    1 |                    1 | 10103592-0001LF                                       | FCI CONNECT                | 10103592-0001LF                 | CONNECTOR; FEMALE; SMT; MICRO USB B-TYPE REVERSE; RIGHT ANGLE; 5PINS                                                    |
| J8, J200-J205                                                       | -         |                    7 |                    7 | TSW-102-07-T-S                                        | SAMTEC                     | TSW-102-07-T-S                  | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +105 DEGC                                 |
| J100                                                                | -         |                    1 |                    1 | PBC06SAAN                                             | SULLINS ELECTRONICS CORP.  | PBC06SAAN                       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS; -65 DEGC TO +125 DEGC                                        |
| L1                                                                  | -         |                    1 |                    1 | DFE201210U-1R5M=P2                                    | TOKO                       | 1.5UH                           | EVKIT PART-INDUCTOR; SMT (0805); METAL ALLOY CHIP; 1.5UH; TOL=+/-20%; 1.9A; 2.00MMX1.20MMX1.00MM                        |
| L3                                                                  | -         |                    1 |                    1 | CIGT201208EH2R2MN                                     | SAMSUNG ELECTRONICS        | 2.2UH                           | EVKIT PART-INDUCTOR; SMT (0805); METAL COMPOSITE CORE; 2.2UH; TOL=+/-20%; 1.8A; 2.00MMX1.25MMX0.80MM                    |
| L4                                                                  | -         |                    1 |                    1 | CIGT201610EH2R2MN                                     | SAMSUNG ELECTRONICS        | 2.2UH                           | EVKIT PART-INDUCTOR; SMT (0806); METAL COMPOSITE CORE; 2.2UH; TOL=+/-20%; 2.7A; 2.00MMX1.60MMX1.00MM                    |
| L5                                                                  | -         |                    1 |                    1 | DFE252007F-2R2M=P2                                    | MURATA                     | 2.2UH                           | EVKIT PART-INDUCTOR; SMT (1008); METAL ALLOY CHIP; 2.2UH; TOL=+/-20%; 1.7A; 2.50MMX2.00MMX0.70MM                        |
| NEN, SCL, SDA, NIRQ, NRST, PWRHLD                                   | -         |                    6 |                    6 | 5002                                                  | KEYSTONE                   | N/A                             | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                   |
| Q1                                                                  | -         |                    1 |                    1 | FDY300NZ                                              | FAIRCHILD SEMICONDUCTOR    | FDY300NZ                        | TRAN; SINGLE N-CHANNEL 2.5V SPECIFIED POWERTRENCH MOSFET; NCH; SC89; PD-(0.625W); I-(0.6A); V-(20V)                     |
| Q200-Q202                                                           | -         |                    3 |                    3 | IRFHM8337TRPBF                                        | INTERNATIONAL RECTIFIER    | TRAN; HEXFET POWER MOSFET; NCH; | PQFN8; PD-(2.8W); I-                                                                                                    |
| R1, R3, R14, R115,                                                  |           |                    8 |                    8 |                                                       |                            | IRFHM8337TRPBF (18A); V-(30V)   | IRFHM8337TRPBF (18A); V-(30V)                                                                                           |
| R157, R159, R214, R283                                              | -         |                      |                      | ANY                                                   | ANY                        | 100K                            | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                                       |
| R2, R10                                                             | -         |                    2 |                    2 | CRCW040210K0FK; RC0402FR-0710K                        | VISHAY DALE; YAGEO PHICOMP | 10K                             | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                                                    |
| R16                                                                 | -         |                    1 |                    1 | CRCW0402150RFK; 9C04021A1500FL                        | VISHAY DALE                | 150                             | RESISTOR; 0402; 150 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                                                |

Evaluates: MAX77680/MAX77681

## MAX77680/MAX77681 Evaluation Kit

Evaluates: MAX77680/MAX77681

## MAX77680/MAX77681 EV Kit Bill of Materials (continued)

| REF_DES                                                                           | DNI/DNP   | MAX77680 EVKIT QTY   | MAX77681 EVKIT QTY   | MFG PART #                                        | MANUFACTURER                          | VALUE         | DESCRIPTION                                                                                                                   |
|-----------------------------------------------------------------------------------|-----------|----------------------|----------------------|---------------------------------------------------|---------------------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------|
| R17, R135, R136, R143, R148, R152, R155, R162- R165, R204, R225, R238, R305, R306 | -         | 16                   | 16                   | ANY                                               | ANY                                   | 0             | RESISTOR; 0402; 0 OHM; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                                            |
| R100, R118                                                                        | -         | 2                    | 2                    | ANY                                               | ANY                                   | 4.7K          | RESISTOR, 0402, 4.7K OHM, 1%, 100PPM, 0.0625W, THICK FILM; FORMFACTOR                                                         |
| R103, R123, R150                                                                  | -         | 3                    | 3                    | ANY                                               | ANY                                   | 22            | RESISTOR, 0402, 22 OHM, 1%, 100PPM, 0.0625W, THICK FILM; FORMFACTOR                                                           |
| R107, R108                                                                        | -         | 2                    | 2                    | ANY                                               | ANY                                   | 2.2K          | RESISTOR, 0402, 2.2K OHM, 1%, 100PPM, 0.0625W, THICK FILM; FORMFACTOR                                                         |
| R110, R161                                                                        | -         | 2                    | 2                    | CRCW0402470RFK                                    | VISHAY DALE                           | 470           | RESISTOR, 0402, 470 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                      |
| R122                                                                              | -         | 1                    | 1                    | ANY                                               | ANY                                   | 1M            | RESISTOR; 0603; 1M; 1%; 100PPM; 0.10W; THICK FILM; FORMFACTOR                                                                 |
| R142                                                                              | -         | 1                    | 1                    | ANY                                               | ANY                                   | 0             | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM; FORMFACTOR                                                              |
| R156                                                                              | -         | 1                    | 1                    | CRCW0402105KFK                                    | VISHAY DALE                           | 105K          | RESISTOR; 0402; 105K OHM; 1%; 100PPM; 0.063W ; THICK FILM                                                                     |
| R158                                                                              | -         | 1                    | 1                    | CRCW0402169KFK                                    | VISHAY DALE                           | 169K          | RESISTOR; 0402; 169K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                      |
| R160                                                                              | -         | 1                    | 1                    | CRCW04024752FK; 9C04021A4752FLHF3; CRCW040247K5FK | VISHAY DALE                           | 47.5K         | RESISTOR; 0402; 47.5K; 1%; 100PPM; 0.0625W; THICK FILM                                                                        |
| R109, R111, R201, R222, R235                                                      | -         | 5                    | 5                    | CRCW0402100RFK; 9C04021A1000FL; RC0402FR-07100RL  | VISHAY DALE; PANASONIC; YAGEO PHYCOMP | 100           | RESISTOR; 0402; 100 OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                       |
| R202, R223, R236                                                                  | -         | 3                    | 3                    | CRCW0402680RFK; RC0402FR-07680RL                  | VISHAY DALE/YAGEO PHICOMP             | 680           | RESISTOR, 0402, 680 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                      |
| R203, R224, R237                                                                  | -         | 3                    | 3                    | CRCW040220K0FK                                    | VISHAY DALE                           | 20K           | RESISTOR; 0402; 20K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                       |
| R205, R206, R226, R228, R239, R240                                                | -         | 6                    | 6                    | CRCW04024991FK                                    | VISHAY DALE                           | 4.99K         | RESISTOR; 0402; 4.99K; 1%; 100PPM; 0.0625W; THICK FILM                                                                        |
| R207, R208, R229, R230, R242, R243                                                | -         | 6                    | 6                    | ANY                                               | ANY                                   | 1K            | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                                               |
| R210, R231, R244                                                                  | -         | 3                    | 3                    | CRCW04021M00FK                                    | VISHAY DALE                           | 1M            | RESISTOR; 0402; 1M; 1%; 100PPM; 0.0625W; THICK FILM                                                                           |
| R211, R233, R245                                                                  | -         | 3                    | 3                    | ERJ-3RQF1R0V                                      | PANASONIC                             | 1             | RESISTOR, 0603, 1 OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                          |
| R293, R295, R297                                                                  | -         | 3                    | 3                    | ERJ-2RKF4703X                                     | PANASONIC                             | 470K          | RESISTOR, 0402, 470K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                     |
| R294, R296, R298                                                                  | -         | 3                    | 3                    | CRCW0402649KFK                                    | VISHAY DALE                           | 649K          | RESISTOR; 0402; 649K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                      |
| SW1                                                                               | -         | 1                    | 1                    | EVQ-Q2K03W                                        | PANASONIC                             | EVQ-Q2K03W    | SWITCH; SPST; SMT; 15V; 0.02A; LIGHT TOUCH SWITCH; RCOIL= OHM; RINSULATION= OHM; PANASONIC                                    |
| SW2                                                                               | -         | 1                    | 1                    | CL-SB-12B-11                                      | NIDEC COPAL ELECTRONICS CORP          | CL-SB-12B-11  | SWITCH; SPDT; SMT; 12V; 0.02A; CL-SB SERIES; SLIDE SWITCH; RCOIL=0.05 OHM; RINSULATION=100M OHM; NIDEC COPAL ELECTRONICS CORP |
| U1(MAX77680)                                                                      | -         | 1                    | 0                    | MAX77680AEWV+                                     | MAXIM                                 | MAX77680      | EVKIT PART-IC; WLP30; PACKAGKE CODE: W302H2+1; CL30_SIMO                                                                      |
| U1(MAX77681)                                                                      | -         | 0                    | 1                    | MAX77681AEWV+                                     | MAXIM                                 | MAX77681      | EVKIT PART-IC; WLP30; PACKAGKE CODE: W302H2+1; CL30_SIMO                                                                      |
| U100                                                                              | -         | 1                    | 1                    | MAXQ2000-RBX+                                     | MAXIM                                 | MAXQ2000-RBX+ | IC; CTRL; LOW-POWER LCD MICROCONTROLLER; TQFN56- EP 8X8                                                                       |
| U101                                                                              | -         | 1                    | 1                    | FT232RQ                                           | FUTURE TECHNOLOGY DEVICES INTL LTD.   | FT232RQ       | IC; INFC; UART INTERFACE IC USB TO SERIAL; QFN32-EP 5X5                                                                       |
| U102-U104                                                                         | -         | 3                    | 3                    | MAX8512EXK                                        | MAXIM                                 | MAX8512EXK    | IC, VREG, Ultra-Low-Noise, High PSRR, Adjustable Vout, SC70-5                                                                 |
| U107                                                                              | -         | 1                    | 1                    | MAX3395EETC                                       | MAXIM                                 | MAX3395EETC   | IC; TRANS; 15KV ESD-PROTECTED HIGH-DRIVE CURRENT QUAD-LEVEL TRANSLATOR WITH SPEED-UP CIRCUITRY; TQFN12 4X4                    |
| U108                                                                              | -         | 1                    | 1                    | 24AA02T-I/OT                                      | MICROCHIP                             | 24AA02T-I/OT  | IC; EPROM; 2K I2C SERIAL EEPROM; SOT23-5                                                                                      |
| U200-U202                                                                         | -         | 3                    | 3                    | MAX44251AUA+                                      | MAXIM                                 | MAX44251AUA+  | IC; OPAMP; ULTRA-PRECISION; LOW-NOISE OP AMP; UMAX8                                                                           |
| U205                                                                              | -         | 1                    | 1                    | MAX5815AAUD+                                      | MAXIM                                 | MAX5815AAUD+  | IC; DAC; ULTRA-SMALL; QUAD-CHANNEL; 12-BIT BUFFERED OUTPUT DAC WITH INTERNAL REFERENCE AND I2C INTERFACE; TSSOP14             |
| VIL_SBB0-VIL_SBB2                                                                 | -         | 3                    | 3                    | 5000                                              | KEYSTONE                              | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;              |
| Y101                                                                              | -         | 1                    | 1                    | CX3225SB16000D0FLJZZ                              | KYOCERA-KINSEKI                       | 16MHZ         | CRYSTAL; SMT (3225) 3.2X2.5; 8PF; 16MHZ; +/-10PPM; +/- 15PPM                                                                  |
| PCB                                                                               | -         | 1                    | 1                    | MAX77680                                          | MAXIM                                 | PCB           | PCB:MAX77680 INDUCTOR; SMT (0603); SHIELDED; 0.47UH; TOL=+/-0.3nH;                                                            |
| L2                                                                                | DNP       | 0 0                  | 0 0                  | MLP1608VR47D                                      | TDK                                   | 0.47UH        | 0.8A                                                                                                                          |
| C19, C21, C22, C24, C26                                                           | DNP       |                      |                      | N/A                                               | N/A                                   | OPEN          | CAPACITOR; SMT (0402); OPEN; FORMFACTOR                                                                                       |

NOTE: DNI--&gt; DO NOT INSTALL (PACKOUT); DNP--&gt; DO NOT PROCURE

## MAX77680/MAX77681 Evaluation Kit

## MAX77680/MAX77681 EV Kit Schematics

| Part Number     | Configuration            | 7-bit                  | 8-bit Write                        | 8-bit Read       |
|-----------------|--------------------------|------------------------|------------------------------------|------------------|
| (PMIC) MAX77680 | set for 0 ADDR OTP bit   | 0x40 0b100 0000        | 0b1000 0000 0x80                   | 0b1000 0001 0x81 |
| MAX77680 (PMIC) | ADDR OTP bit set for 1   | 0x48 0b100 1000        | 0x90 0b1001 0000                   | 0x91 0b1001 0001 |
| (PMIC) MAX77680 | Maxim internal test mode | 0b100 1001 0x49        | 0x92 0b1001 0010                   | 0b1001 0011 0x93 |
| (DAC) MAX5815   | ADDR1=ADDR0=GND          | 0b001 1111 0x1F        | 0b0011 1110 0b0001 0000 0x10* 0x3E | 0b0011 1111 0x3F |
| (EEPROM) 24AA02 | N/A                      | 0x50 to 0x57 0b1010xxx | 0b1010xxx0                         | 0b1010xxx1       |

*MAX5815 ALSO RESPONDS TO AN I2C BROADCAST ADDRESS 0b0001 0000

Evaluates: MAX77680/MAX77681

│

## MAX77680/MAX77681 EV Kit Schematics (continued)

<!-- image -->

│

Evaluates: MAX77680/MAX77681

## MAX77680/MAX77681 EV Kit Schematics (continued)

<!-- image -->

│

## MAX77680/MAX77681 EV Kit Schematics (continued)

<!-- image -->

│

## MAX77680/MAX77681 EV Kit Schematics (continued)

<!-- image -->

│

## MAX77680/MAX77681 EV Kit Schematics (continued)

<!-- image -->

MAX77680/MAX77681 EV Kit Component Placement GuideTop Silkscreen

MAX77680/MAX77681 EV Kit Component Placement GuideBottom Silkscreen

<!-- image -->

MAX77680/MAX77681 EV Kit PCB Layout-Fab Notes

<!-- image -->

│

## MAX77680/MAX77681 EV Kit PCB Layouts (continued)

<!-- image -->

MAX77680/MAX77681 EV Kit PCB Layout-Top Layer

MAX77680/MAX77681 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

MAX77680/MAX77681 EV Kit PCB Layout-Internal Layer 3

<!-- image -->

│

## MAX77680/MAX77681 EV Kit PCB Layouts (continued)

<!-- image -->

MAX77680/MAX77681 EV Kit PCB Layout-Bottom Layer

MAX77680/MAX77681 EV Kit PCB Layout-Paste Top

<!-- image -->

MAX77680/MAX77681 EV Kit PCB Layout-Paste Bottom

<!-- image -->

│

## MAX77680/MAX77681 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                        | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------|-----------------|
|                 0 | 6/18            | Initial release                    | -               |
|                 1 | 8/18            | Updated Ordering Information table | 7               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX77680/MAX77681