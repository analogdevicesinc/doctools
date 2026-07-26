<!-- lastmod 2022-08-05 -->
## MAX77640/MAX77641 Evaluation Kit

## General Description

The  MAX77640/MAX77641  evaluation  kit  (EV  kit)  is  a fully  assembled  and  tested  printed  circuit  board  (PCB) that demonstrates the MAX77640/MAX77641. The EV kit allows for easy evaluation of the MAX77640/MAX77641 resources, including the SIMO, LDO, GPIO, current sinks, and I 2 C interface.

Windows ® -based software provides a user-friendly graphical  interface  (GUI)  as  well  as  a  detailed  register-based interface  to  exercise  the  features  of  the  MAX77640/ MAX77641.

Ordering Information appears at end of data sheet.

Evaluates: MAX77640/MAX77641

## Benefits and Features

- Easy to Use
- GUI Drives I 2 C Interface
-  Red/Green/Blue LED
- Fully Assembled and Tested
- Emulates System Loading
- On-Board Electronic Load for LDO and SIMO Buck Boost Outputs
- Electronic Load has Steady-State, Transient, and Random Modes
- Evaluates Both Push-Button and Slider-Switch On-Key Options

Figure 1. MAX77640/MAX77641 EV Kit Photo

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

<!-- image -->

## Evaluates: MAX77640/MAX77641 MAX77640/MAX77641 Evaluation Kit

Figure 2. MAX77640/MAX77641 EV Kit Block Diagram

<!-- image -->

│

## Evaluates: MAX77640/MAX77641 MAX77640/MAX77641 Evaluation Kit

Figure 3. MAX77640/MAX77641 EV Kit Top View

<!-- image -->

Figure 4. MAX77640/MAX77641 EV Kit Bottom View

<!-- image -->

Evaluates: MAX77640/MAX77641

Table 1. Default Shunt Positions and Jumper Descriptions

| REFERENCE DESIGNATOR   | DEFAULT POSITION   | FUNCTION                                                                                                                                        |
|------------------------|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| J100                   | N/A                | Do not connect shunts to J100.                                                                                                                  |
| J101                   | 1-2                | 1-2: Connects a V IO to the 1.8V EV kit logic rail. 3-4: Connects a V IO to the 3.3V EV kit logic rail. 5-6: Connects a V IO to the LDO output. |
| J200                   | 1-2                | 1-2: Connects the U200 amplifier to the gate of the Q200 load FET.                                                                              |
| J201                   | 1-2                | 1-2: Connects SBB0 to load cell.                                                                                                                |
| J202                   | 1-2                | 1-2: Connects the U202 amplifier to the gate of the Q202 load FET.                                                                              |
| J203                   | 1-2                | 1-2: Connects SBB1 to load cell.                                                                                                                |
| J204                   | 1-2                | 1-2: Connects the U204 amplifier to the gate of the Q204 load FET.                                                                              |
| J205                   | 1-2                | 1-2: Connects SBB2 to load cell.                                                                                                                |
| J206                   | 1-2                | 1-2: Connects the U206 amplifier to the gate of the Q206 load FET.                                                                              |
| J207                   | 1-2                | 1-2: Connects LDO to load cell.                                                                                                                 |
| J2                     | N/A                | Do not connect shunts to J2.                                                                                                                    |
| J3                     | 1-2                | 1-2: Connects GPIO to V IO . 2-3: Connects GPIO to GND.                                                                                         |
| J4                     | 1-2                | 1-2: Connects PWRHLD to V IO . 2-3: Connects PWRHLD to GND.                                                                                     |
| J5                     | 2-3                | 1-2: Connects nEN to SW2. 2-3: Connects nEN to SW1.                                                                                             |
| J6                     | N/A                | USB-Micro adapter for communications to a user PC (and use the GUI).                                                                            |
| J8                     | 1-2                | 1-2: Connects nRST to PWRHLD through a 150Ω resistor.                                                                                           |

## Quick Start

Follow this procedure to familiarize yourself with the EV kit.

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Required Equipment

- MAX77640/MAX77641 EV kit
- Windows-based PC
- Power supply
- Ammeter
- DVM
- Micro-USB cable
- GUI

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Visit  the  product  webpage  at www.maximintegrat -ed.com/max77640evkit and navigate to Design Resources to download the latest version of the EV kit software. Save the EV kit software to a temporary folder and decompress the ZIP file.
- 2) Make sure shunts are installed on jumpers per Figure 1.
- 3) Connect a Micro-B USB cable between the EV kit's J6 and your Windows-based PC.
- 4) Apply  a  3.7V  supply  (set  for  100mA  current  limit) through  an  ammeter  (set  for  10mA  range)  across the SYS and GND2 terminals of the EV kit. Turn the supply on.
- 5) Open  the  GUI  and  press  the Connect button  in  the upper left corner. Wait for the device to respond, and in the Synchronize window, press the Read and close button.

│

## MAX77640/MAX77641 Evaluation Kit

- 6) Press the on-key (SW1).
- 7) Confirm with the ammeter that the quiescent current is approximately 40µA.
- 8) Connect  a  DVM  to  LDO,  SBB0,  SBB1,  and  SBB2. For the MAX77640A, 1.5V, 1.8V, 1.2V, and 3.3V appear,  respectively.  For  the  MAX77641A,  1.5V,  1.8V, 3.3V, and 5.0V appear, respectively.

This concludes the Quick Start procedure. Users are now encouraged to explore the device and its register settings with  the  GUI.  During  general  device  evaluation,  set  the ammeter range to greater than or equal to 1A to minimize the impact of its series resistance.

For more information on the GUI, see the Software section.

## EV Kit Features

## On-Key Options

For applications that require a user switch to enable the IC, the EV kit comes with two common types: the pushbutton  (momentary)  and  the  slider-switch  (persistent). The active-low enable pin (nEN) has an external pullup resistor  R2.  Select  which  type  of  switch  to  use  with  a

## Evaluates: MAX77640/MAX77641

jumper on J5. See the data sheet for more information on configuring the IC for momentary or persistent switches.

## Electronic Load

To easily evaluate the SIMO and LDO, the EV kit comes with  an  on-board,  electronic  load  controllable  with  the GUI. Through I 2 C, the GUI controls an on-board DAC and op-amp configuration to set the load current. Jumpers on J201, J203, J205, and J207 connect the load to the outputs of the SBB0, SBB1, SBB2, and LDO, respectively. Emulate  SYS  loading  by  removing  the  jumper  on  J207 and connecting pin 1 of J207 to V SYS . See the Software section for how to set the load current from the GUI.

To  simulate  load  transient  response,  connect  a  signal generator  to  pin  2  of  J200  (SBB0),  J202  (SBB1),  J204 (SBB2), or J206 (LDO). Drive the MOSFET gate with an analog signal between 1V (off) and 3V (fully on) to apply transients to the output of the SIMO or LDO. For manually  measuring  current,  measure  the  voltage  across  the sense  resistor  using  test  point  VIL\_SBB0,  VIL\_SBB1, VIL\_SBB2, or VIL\_LDO. Since the resistor is 1Ω, the volt -age to load current conversion is 1:1.

Figure 5. Electronic Load Block Diagram

<!-- image -->

│

## MAX77640/MAX77641 Evaluation Kit

## Software

The  graphical  user  interface  (GUI)  software  allows  for quick, easy, and thorough evaluation of the MAX77640/ MAX77641.

The  GUI  is  designed  to  have  individual  tabs  for  each functional  block  of  the  device  (MAX77640/MAX77641), Interrupts/Status, SIMO, and an additional tab for controlling  EV  kit  hardware  (Load  Control).  See  Figure 6  for  a screenshot of the GUI upon first opening.

## Installation

Visit  the  product  webpage  at www.maximintegrated. com/max77640evkit and navigate to Design Resources to download the latest version of the EV kit software. Save the EV kit software to a temporary folder and decompress the ZIP file.

## Windows Drivers

Upon connection of a micro-USB cable between your PC and the EV kit for the first  time,  wait  a  few  minutes  for Windows to automatically install the necessary drivers.

Figure 6. MAX77640/MAX77641 EV Kit GUI Top-Level Interface

<!-- image -->

## Evaluates: MAX77640/MAX77641

## Graphical User Interface (GUI) Details

The  GUI  drives  I 2 C  communication  with  the  EV  kit. Every  control  in  the  GUI  (excluding  the  Load  Control) corresponds directly to a register within the MAX77640/ MAX77641. Refer to the AN6516: MAX77640/MAX77641 Programmer's Guide for  a  complete  description  of  the registers.  The  Load  Control  and  tabs  provide  additional functionality with the EV kit.

## Load Control Tab

The Load Control tab contains controls for setting load on  the  SIMO  outputs.  The  GUI  is  capable  of  setting steady-state, transient, and random load currents. To set a load current, use the slider bar or text field to input a value (mA) and press the Enable button. Shuffle through the modes to exercise different load conditions. The offset and gain values are set by Maxim and do not need to be altered.

│

## Ordering Information

| PART           | IC            | TYPE   |
|----------------|---------------|--------|
| MAX77640EVKIT# | MAX77640AEWV+ | EV Kit |
| MAX77641EVKIT# | MAX77641AEWV+ | EV Kit |

## MAX77640/MAX77641 EV Kit Bill of Materials

| REF_DES                                                                   | DNI/DNP   |   MAX77640EVKIT QTY |   MAX77641EVKIT QTY | MFG PART #                                            | MANUFACTURER              | VALUE                                                                               | DESCRIPTION                                                                                                             |
|---------------------------------------------------------------------------|-----------|---------------------|---------------------|-------------------------------------------------------|---------------------------|-------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| C1, C30                                                                   | -         |                   2 |                   2 |                                                       |                           | 22UF                                                                                | CAPACITOR; SMT (0603); CERAMIC CHIP; 22UF; 10V; TOL=20%; MODEL=CL SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR   |
| C2, C31-C33                                                               | -         |                   4 |                   4 |                                                       |                           | 0.01UF                                                                              | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 10V; TOL=10%; MODEL=C0402C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R        |
| C4                                                                        | -         |                   1 |                   1 | GRM155R71H332KA01                                     | MURATA                    | 3300PF                                                                              | CAPACITOR; SMT (0402); CERAMIC CHIP; 3300PF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R MODEL=; TG=-                |
| C5, C6, C8, C9, C13, C17, C20                                             | -         |                   7 |                   7 |                                                       |                           | 10UF                                                                                | CAPACITOR; SMT (0402); CERAMIC CHIP; 10UF; 6.3V; TOL=20%; 55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR                       |
| C12, C110-C113, C115, C118, C120, C158, C239-C242                         | -         |                  13 |                  13 |                                                       |                           | 1UF                                                                                 | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R ; FORMFACTOR   |
| C14, C108, C150, C151, C155-C157, C159, C202, C207, C212, C217, C221-C223 | -         |                  15 |                  15 |                                                       |                           | 0.1UF                                                                               | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R; FORMFACTOR  |
| C25, C27-C29                                                              | -         |                   4 |                   4 |                                                       |                           | 0.1UF                                                                               | CAPACITOR; SMT; 0402; CERAMIC; 0.1uF; 10V; 10%; X5R; -55degC to + 125degC; 0 +/-30PPM/degC; FORMFACTOR ;                |
| C114                                                                      | -         |                   1 |                   1 |                                                       |                           | 0.47UF                                                                              | CAPACITOR; SMT; 0603; CERAMIC; 0.47uF; 10V; 10%; X5R; -55degC to + 125degC, ; FORMFACTOR                                |
| C152, C153                                                                | -         |                   2 |                   2 | GRM1555C1H150FA01                                     | MURATA                    | 15PF                                                                                | CAPACITOR; SMT (0402); CERAMIC CHIP; 15PF; 50V; TOL=1%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                |
| C154                                                                      | -         |                   1 |                   1 |                                                       |                           | 4.7UF                                                                               | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 10V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR   |
| C200, C248, C250, C251                                                    | -         |                   4 |                   4 | C1005X5R1H472K050                                     | TDK                       | 4700PF                                                                              | CAPACITOR; SMT (0402); CERAMIC CHIP; 4700PF; 50V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                              |
| C201, C206, C211, C216                                                    | -         |                   4 |                   4 |                                                       |                           | 1000PF                                                                              | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL=10%; MODEL=C0G; TG=-55 DEGC TO +125 DEGC; TC=+; FORMFACTOR        |
| C203, C204, C208, C209, C213, C214, C218, C219                            | -         |                   8 |                   8 | C0402C180J5GAC; GRM1555C1H180JA01J;C1005C0G1H 180J050 | KEMET/MURATA/TDK          | 18PF                                                                                | CAPACITOR; SMT (0402); CERAMIC CHIP; 18PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                |
| D100, D101                                                                | -         |                   2 |                   2 | LTST-C190YKT                                          | LITE-ON ELECTRONICS; INC. | LTST-C190YKT                                                                        | DIODE; LED; STANDARD; YELLOW; SMT (0603); PIV=5.0V; IF=0.02A; -55 DEGC TO +85 DEGC                                      |
| D102, D103                                                                | -         |                   2 |                   2 | LTST-C190CKT                                          | LITE-ON ELECTRONICS; INC. | LTST-C190CKT                                                                        | DIODE; LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; -55 DEGC TO +85 DEGC                                         |
| DS1                                                                       | -         |                   1 |                   1 | 19-337/R6GHBHC-A01/2T                                 | EVERLIGHT                 | 19-337/R6GHBHC-A01/2T DIODE; LED; SMD-B; RED/GREEN/BLUE; SMT; PIV=2V-3.3V; IF=0.02A | 19-337/R6GHBHC-A01/2T DIODE; LED; SMD-B; RED/GREEN/BLUE; SMT; PIV=2V-3.3V; IF=0.02A                                     |
| LDO, SBB0-SBB2, VSYS, INLDO, EN_EXT                                       | -         |                   7 |                   7 | 5010                                                  | KEYSTONE                  |                                                                                     | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                      |
| FB100                                                                     | -         |                   1 |                   1 | BLM18PG221SN1                                         | MURATA                    | 220                                                                                 | INDUCTOR; SMT (0603); FERRITE-BEAD; 220; TOL=+/-25%; 1.4A; -55 DEGC TO +125 DEGC                                        |
| GND1, GND5-GND7                                                           | -         |                   4 |                   4 | 5011                                                  | KEYSTONE                  |                                                                                     | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| GND2-GND4, GND8                                                           | -         |                   4 |                   4 | 9020 BUSS                                             | WEICO WIRE                | MAXIMPAD                                                                            | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                |
| NEN, SCL, SDA, GPIO, NIRQ, NRST, PWRHLD                                   | -         |                   7 |                   7 | 5002                                                  | KEYSTONE                  |                                                                                     | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                   |
| J2                                                                        | -         |                   1 |                   1 | PBC10SAAN                                             | SULLINS ELECTRONICS CORP. | PBC10SAAN                                                                           | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 10PINS; -65 DEGC TO +125 DEGC                                       |
| J3-J5                                                                     | -         |                   3 |                   3 | TSW-103-07-T-S                                        | SAMTEC                    | TSW-103-07-T-S                                                                      | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 3PINS                                                        |
| J6                                                                        | -         |                   1 |                   1 | 10103592-0001LF                                       | FCI CONNECT               | 10103592-0001LF                                                                     | CONNECTOR; FEMALE; SMT; MICRO USB B-TYPE REVERSE; RIGHT ANGLE; 5PINS                                                    |
| J8, J200-J207                                                             | -         |                   9 |                   9 | TSW-102-07-T-S                                        | SAMTEC                    | TSW-102-07-T-S                                                                      | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; - 55 DEGC TO +105 DEGC                                |
| J100                                                                      | -         |                   1 |                   1 | PBC06SAAN                                             | SULLINS ELECTRONICS CORP. | PBC06SAAN                                                                           | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS; -65 DEGC TO +125 DEGC                                        |
| J101                                                                      | -         |                   1 |                   1 | TSW-102-26-T-T                                        | SAMTEC                    | TSW-102-26-T-T                                                                      | CONNECTOR; THROUGH HOLE; TSW SERIES; TRIPLE ROW; STRAIGHT; 6PINS                                                        |
| L1                                                                        | -         |                   1 |                   1 | DFE201210U-1R5M=P2                                    | TOKO                      | 1.5UH                                                                               | EVKIT PART-INDUCTOR; SMT (0805); METAL ALLOY CHIP; 1.5UH; TOL=+/-20%; 1.9A; 2.00MMX1.20MMX1.00MM                        |
| L3                                                                        | -         |                   1 |                   1 | CIGT201208EH2R2MN                                     | SAMSUNG ELECTRONICS       | 2.2UH                                                                               | EVKIT PART-INDUCTOR; SMT (0805); METAL COMPOSITE CORE; 2.2UH; TOL=+/-20%; 1.8A; 2.00MMX1.25MMX0.80MM                    |
| L4                                                                        | -         |                   1 |                   1 | CIGT201610EH2R2MN                                     | SAMSUNG ELECTRONICS       | 2.2UH                                                                               | EVKIT PART-INDUCTOR; SMT (0806); METAL COMPOSITE CORE; 2.2UH; TOL=+/-20%; 2.7A; 2.00MMX1.60MMX1.00MM                    |
| L5                                                                        | -         |                   1 |                   1 | DFE252007F-2R2M=P2                                    | MURATA                    | 2.2UH                                                                               | EVKIT PART-INDUCTOR; SMT (1008); METAL ALLOY CHIP; 2.2UH; TOL=+/-20%; 1.7A; 2.50MMX2.00MMX0.70MM                        |
| Q1                                                                        | -         |                   1 |                   1 | FDY300NZ                                              | FAIRCHILD SEMICONDUCTOR   | FDY300NZ                                                                            | TRAN; SINGLE N-CHANNEL 2.5V SPECIFIED POWERTRENCH MOSFET; NCH; SC89; PD-(0.625W); I-(0.6A); V-(20V)                     |
| Q200-Q203                                                                 | -         |                   4 |                   4 | IRFHM8337TRPBF                                        | INTERNATIONAL RECTIFIER   | IRFHM8337TRPBF                                                                      | TRAN; HEXFET POWER MOSFET; NCH; PQFN8; PD-(2.8W); I-(18A); V-(30V)                                                      |

## MAX77640/MAX77641 EV Kit Bill of Materials (continued)

| REF_DES                                                                                     | DNI/DNP   | MAX77640EVKIT QTY   | MAX77641EVKIT QTY   | MFG PART #                                        | MANUFACTURER                          | VALUE         | DESCRIPTION                                                                                                                   |
|---------------------------------------------------------------------------------------------|-----------|---------------------|---------------------|---------------------------------------------------|---------------------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------|
| R1, R3, R14, R115, R157, R159, R214, R283                                                   | -         | 8                   | 8                   |                                                   |                                       | 100K          | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                                             |
| R2, R10                                                                                     | -         | 2                   | 2                   | CRCW040210K0FK; RC0402FR-0710K                    | VISHAY DALE; YAGEO PHICOMP            | 10K           | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                                                          |
| R6-R9, R142                                                                                 | -         | 5                   | 5                   |                                                   |                                       | 0             | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM; FORMFACTOR                                                              |
| R11, R17, R135, R136, R143, R148, R152, R155, R162-R164, R204, R225, R238, R251, R305, R306 | -         | 17                  | 17                  |                                                   |                                       | 0             | RESISTOR; 0402; 0 OHM; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                                            |
| R16                                                                                         | -         | 1                   | 1                   | CRCW0402150RFK; 9C04021A1500FL                    | VISHAY DALE                           | 150           | RESISTOR; 0402; 150 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                                                      |
| R100, R118                                                                                  | -         | 2                   | 2                   |                                                   |                                       | 4.7K          | RESISTOR, 0402, 4.7K OHM, 1%, 100PPM, 0.0625W, THICK FILM; FORMFACTOR                                                         |
| R103, R123, R150                                                                            | -         | 3                   | 3                   |                                                   |                                       | 22            | RESISTOR, 0402, 22 OHM, 1%, 100PPM, 0.0625W, THICK FILM; FORMFACTOR                                                           |
| R107, R108                                                                                  | -         | 2                   | 2                   |                                                   |                                       | 2.2K          | RESISTOR, 0402, 2.2K OHM, 1%, 100PPM, 0.0625W, THICK FILM; FORMFACTOR                                                         |
| R109, R111                                                                                  | -         | 2                   | 2                   |                                                   |                                       | 100           | RESISTOR; 0402; 100 OHM; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                                          |
| R110, R161                                                                                  | -         | 2                   | 2                   | CRCW0402470RFK                                    | VISHAY DALE                           | 470           | RESISTOR, 0402, 470 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                      |
| R122 R156                                                                                   | - -       | 1 1                 | 1 1                 | ANY CRCW0402105KFK                                | ANY VISHAY DALE                       | 1M 105K       | RESISTOR; 0603; 1M; 1%; 100PPM; 0.10W; THICK FILM; FORMFACTOR RESISTOR; 0402; 105K OHM;                                       |
| R158                                                                                        | -         | 1                   | 1                   | CRCW0402169KFK                                    | VISHAY DALE                           | 169K          | 1%; 100PPM; 0.063W ; THICK FILM RESISTOR; 0402; 169K OHM; 1%; 100PPM; 0.063W; THICK FILM                                      |
| R160                                                                                        | -         | 1                   | 1                   | CRCW04024752FK; 9C04021A4752FLHF3; CRCW040247K5FK | VISHAY DALE                           | 47.5K         | RESISTOR; 0402; 47.5K; 1%; 100PPM; 0.0625W; THICK FILM                                                                        |
| R201, R222, R235, R248                                                                      | -         | 4                   | 4                   | CRCW0402100RFK; 9C04021A1000FL; RC0402FR- 07100RL | VISHAY DALE; PANASONIC; YAGEO PHYCOMP | 100           | RESISTOR; 0402; 100 OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                       |
| R202, R223, R236, R249                                                                      | -         | 4                   | 4                   | CRCW0402680RFK;RC0402FR- 07680RL                  | VISHAY DALE/YAGEO PHICOMP             | 680           | RESISTOR, 0402, 680 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                      |
| R203, R224, R237, R250                                                                      | -         | 4                   | 4                   | CRCW040220K0FK                                    | VISHAY DALE                           | 20K           | RESISTOR; 0402; 20K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                       |
| R205, R206, R226, R228, R239, R240, R252, R253                                              | -         | 8                   | 8                   | CRCW04024991FK                                    | VISHAY DALE                           | 4.99K         | RESISTOR; 0402; 4.99K; 1%; 100PPM; 0.0625W; THICK FILM                                                                        |
| R207, R208, R229, R230, R242, R243, R254, R255                                              | -         | 8                   | 8                   | ANY                                               | ANY                                   | 1K            | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                                               |
| R210, R231, R244, R257                                                                      | -         | 4                   | 4                   | CRCW04021M00FK                                    | VISHAY DALE                           | 1M            | RESISTOR; 0402; 1M; 1%; 100PPM; 0.0625W; THICK FILM                                                                           |
| R211, R233, R245, R258                                                                      | -         | 4                   | 4                   | ERJ-3RQF1R0V                                      | PANASONIC                             | 1             | RESISTOR, 0603, 1 OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                          |
| R293, R295, R297, R299                                                                      | -         | 4                   | 4                   | ERJ-2RKF4703X                                     | PANASONIC                             | 470K          | RESISTOR, 0402, 470K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                     |
| R294, R296, R298, R300                                                                      | -         | 4                   | 4                   | CRCW0402649KFK                                    | VISHAY DALE                           | 649K          | RESISTOR; 0402; 649K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                      |
| SW1                                                                                         | -         | 1                   | 1                   | EVQ-Q2K03W                                        | PANASONIC                             | EVQ-Q2K03W    | SWITCH; SPST; SMT; 15V; 0.02A; LIGHT TOUCH SWITCH; RCOIL= OHM; RINSULATION= OHM; PANASONIC                                    |
| SW2                                                                                         | -         | 1 1                 | 1                   | CL-SB-12B-11                                      | NIDEC COPAL ELECTRONICS CORP          | CL-SB-12B-11  | SWITCH; SPDT; SMT; 12V; 0.02A; CL-SB SERIES; SLIDE SWITCH; RCOIL=0.05 OHM; RINSULATION=100M OHM; NIDEC COPAL ELECTRONICS CORP |
| U1(MAX77640)                                                                                | DNI       |                     | 0                   | MAX77640AEWV+                                     | MAXIM                                 | MAX77640      | EVKIT PART-IC; WLP30; PACKAGKE CODE: W302H2+1; CL30_SIMO                                                                      |
| U1(MAX77641)                                                                                | DNI       | 0                   | 1                   | MAX77641AEWV+                                     | MAXIM                                 | MAX77641      | EVKIT PART-IC; WLP30; PACKAGKE CODE: W302H2+1; CL30_SIMO                                                                      |
| U100                                                                                        | -         | 1                   | 1                   | MAXQ2000-RBX+                                     | MAXIM                                 | MAXQ2000-RBX+ | IC; CTRL; LOW-POWER LCD MICROCONTROLLER; TQFN56-EP 8X8                                                                        |
| U101                                                                                        | -         | 1                   | 1                   | FT232RQ                                           | FUTURE TECHNOLOGY DEVICES INTL LTD.   | FT232RQ       | IC; INFC; UART INTERFACE IC USB TO SERIAL; QFN32-EP 5X5                                                                       |
| U102-U104                                                                                   | -         | 3                   | 3                   | MAX8512EXK                                        | MAXIM                                 | MAX8512EXK    | IC, VREG, Ultra-Low-Noise, High PSRR, Adjustable Vout, SC70-5                                                                 |
| U107                                                                                        | -         | 1                   | 1                   | MAX3395EETC                                       | MAXIM                                 | MAX3395EETC   | IC; TRANS; 15KV ESD-PROTECTED HIGH-DRIVE CURRENT QUAD-LEVEL TRANSLATOR WITH SPEED-UP CIRCUITRY; TQFN12 4X4                    |
| U108                                                                                        | -         | 1                   | 1                   | 24AA02T-I/OT                                      | MICROCHIP                             | 24AA02T-I/OT  | IC; EPROM; 2K I2C SERIAL EEPROM; SOT23-5                                                                                      |
| U200-U203                                                                                   | -         | 4                   | 4                   | MAX44251AUA+                                      | MAXIM                                 | MAX44251AUA+  | IC; OPAMP; ULTRA-PRECISION; LOW-NOISE OP AMP; UMAX8                                                                           |
| U205                                                                                        | -         | 1                   | 1                   | MAX5815AAUD+                                      | MAXIM                                 | MAX5815AAUD+  | IC; DAC; ULTRA-SMALL; QUAD-CHANNEL; 12-BIT BUFFERED OUTPUT DAC WITH INTERNAL REFERENCE AND I2C INTERFACE; TSSOP14             |
| VIL_LDO, VIL_SBB0-VIL_SBB2                                                                  | -         | 4                   | 4                   | 5000                                              | KEYSTONE                              |               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;              |
| Y101                                                                                        |           | 1                   |                     |                                                   |                                       |               | CRYSTAL; SMT (3225) 3.2X2.5; 8PF; 16MHZ; +/-10PPM;                                                                            |
|                                                                                             | -         |                     | 1                   | CX3225SB16000D0FLJZZ                              | KYOCERA-KINSEKI                       | 16MHZ         | +/-15PPM                                                                                                                      |
| PCB L2                                                                                      | - DNP     | 1 0                 | 1                   | MAX77640EVKIT_REVA                                | MAXIM TDK                             | PCB 0.47UH    | PCB:MAX77640EVKIT_REVA INDUCTOR; SMT (0603); SHIELDED; 0.47UH; TOL=+/-0.3nH;                                                  |
| C18, C19, C21-C24, C26                                                                      | DNI/DNP   | 0                   | 0 0                 | MLP1608VR47D                                      |                                       | OPEN          | 0.8A CAPACITOR; SMT (0402); OPEN; FORMFACTOR                                                                                  |

NOTE: DNI--&gt; DO NOT INSTALL (PACKOUT); DNP--&gt; DO NOT PROCURE

## MAX77640/MAX77641 EV Kit Schematic

| Part Number     | Configuration            | 7-bit                  | 8-bit Write                        | 8-bit Read       |
|-----------------|--------------------------|------------------------|------------------------------------|------------------|
| MAX77640 (PMIC) | set for 0 ADDR OTP bit   | 0x40 0b100 0000        | 0x80 0b1000 0000                   | 0b1000 0001 0x81 |
| MAX77640 (PMIC) | set for 1 ADDR OTP bit   | 0x48 0b100 1000        | 0x90 0b1001 0000                   | 0x91 0b1001 0001 |
| MAX77640 (PMIC) | Maxim internal test mode | 0x49 0b100 1001        | 0x92 0b1001 0010                   | 0x93 0b1001 0011 |
| (DAC) MAX5815   | ADDR1=ADDR0=GND          | 0b001 1111 0x1F        | 0b0001 0000 0x10* 0b0011 1110 0x3E | 0x3F 0b0011 1111 |
| (EEPROM) 24AA02 | N/A                      | 0b1010xxx 0x50 to 0x57 | 0b1010xxx0                         | 0b1010xxx1       |

*MAX5815 ALSO RESPONDS TO AN I2C BROADCAST ADDRESS 0b0001 0000

│

## MAX77640/MAX77641 EV Kit Schematic (continued)

<!-- image -->

## MAX77640/MAX77641 EV Kit Schematic (continued)

<!-- image -->

│

## MAX77640/MAX77641 EV Kit Schematic (continued)

<!-- image -->

## MAX77640/MAX77641 EV Kit Schematic (continued)

<!-- image -->

│

## MAX77640/MAX77641 EV Kit PCB Layouts

MAX77640/MAX77641 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

│

## MAX77640/MAX77641 EV Kit PCB Layouts (continued)

MAX77640/MAX77641 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## MAX77640/MAX77641 EV Kit PCB Layouts (continued)

MAX77640/MAX77641 EV Kit PCB Layout-Fab Notes

<!-- image -->

│

## MAX77640/MAX77641 EV Kit PCB Layouts (continued)

MAX77640/MAX77641 EV Kit PCB Layout-Top Layer

<!-- image -->

│

## MAX77640/MAX77641 EV Kit PCB Layouts (continued)

MAX77640/MAX77641 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

│

## MAX77640/MAX77641 EV Kit PCB Layouts (continued)

MAX77640/MAX77641 EV Kit PCB Layout-Internal Layer 3

<!-- image -->

│

## MAX77640/MAX77641 EV Kit PCB Layouts (continued)

MAX77640/MAX77641 EV Kit PCB Layout-Bottom

<!-- image -->

│

## MAX77640/MAX77641 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX77640/MAX77641