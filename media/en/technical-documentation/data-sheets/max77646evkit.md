<!-- lastmod 2023-08-09 -->
<!-- image -->

Evaluates: MAX77646

## General Description

The  MAX77646  evaluation  kit  (EV  kit)  allows  for  easy experimentation with various MAX77646 features, including the resistor programmability of the SIMO and onboard electronic loads.

The  Windows ® -based  software  provides  a  user-friendly graphical  interface  to  manage  the  onboard  electronic loads.

Ordering Information appears at end of data sheet.

## MAX77646 Evaluation Kit

## Features

- Easy to Use
- GUI-Driven I 2 C Interface
- Assembled and Fully Tested
- On-Board Electronic Loads
- Steady-State, Transient, and Random Modes
- Demonstration of End-to-End Analog Multiplexer Implementation
- On-Board ADC

Figure 1. MAX77646 EV Kit Photo

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

©

319-100996; Rev 0; 5/23

One  Analog  Way,  Wilmington,  MA  01887  U.S.A.    |      Tel:  781.329.470      |      © 203  Analog  Devices,  Inc.  All  rights  reserved. 203 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

Evaluates: MAX77646

Figure 2. EV Kit Simplified Block Diagram

<!-- image -->

## MAX77646 Evaluation Kit

Evaluates: MAX77646

Figure 3. MAX77646 EV Kit Top View

<!-- image -->

## MAX77646 Evaluation Kit

Evaluates: MAX77646

Figure 4. MAX77646 EV Kit Bottom View

<!-- image -->

Figure 5. MAX77646 EV Kit Solution Area

<!-- image -->

│

## MAX77646 Evaluation Kit

## MAX77658 EV Kit Files

| FILE                               | DESCRIPTION   |
|------------------------------------|---------------|
| MAX77646_EVKIT_B_BOM.xlsx          | BOM           |
| MAX77646_EVKIT_B_SCH.pdf           | Schematic     |
| MAX77646_EVKIT_B_MARKETING_PCB.pdf | Layout        |

## Quick Start

Follow this procedure to familiarize yourself with the EV kit.

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Required Equipment

- MAX77646 EV kit
- MAX77646 EV kit GUI
- Windows-based PC
- Power supply
- Ammeter
- DVM
- Micro-USB cable

## Procedure

- 1) Install the GUI software. Visit the product webpage at www.analog.com/max77646evkit and navigate to Design Resources to download the latest version of the EV kit software. Save the EV kit software to a temporary folder and extract the files from the ZIP file.
- 2) Install EV kit shunts according to Table 1.
- 3) Connect a Micro-B USB cable between the EV kit USB port labeled 'GUI' and your Windows-based PC.
- 4) Apply a 2.4V supply (set for 100mA current limit) through an ammeter (set for 10mA range) across the INSBB and GND2 terminals of the EV kit. Turn the supply on.
- 5) Open the GUI and select Device → Connect in the upper-left corner. Wait for a CONNECTED DEVICE LIST window to pop up, and then press the Connect button.
- 6) Measure the voltages on SBB0, SBB1, SBB2, and LDO with a DMM.

## Table 1. Default Shunt Positions and Jumper Descriptions

| REFERENCE DESIGNATOR   | DEFAULT POSITION   | FUNCTION                                                                                                                                                                                                                                                                                                                                                                             |
|------------------------|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J2                     | 3-4                | 1-2: Connects RSET_SBB2 to 0kΩ which programs SBB2 to 0.5V. 3-4: Connects RSET_SBB2 to 11.8kΩ which programs SBB2 to 1.1V. 5-6: Connects RSET_SBB2 to the onboard potentiometer to program SBB2's output voltage. Refer to the SIMO Output Voltage Configuration section of the MAX77646/MAX77647 data sheet for more information. RSET_<regulator> is connected to RSEL_<regulator> |
| J3                     | 3-4                | 1-2: Connects RSET_LDO to 7.15kΩ which programs the LDO to 0.8V. 3-4: Connects RSET_LDO to 80.6kΩ which programs the LDO to 1.8V. 5-6: Connects RSET_LDO to the onboard potentiometer to program the LDO's output voltage. Refer to the LDO Output Voltage Configuration section of the MAX77646/MAX77647 data sheet for more information.                                           |
| J4                     | 1-2                | 1-2: Connects INLDO to SBB0.                                                                                                                                                                                                                                                                                                                                                         |
| J5                     | 3-4                | 1-2: Connects RSET_SBB1 to 14kΩ which programs SBB1 to 1.2V. 3-4: Connects RSET_SBB1 to 28kΩ which programs SBB1 to 1.8V. 5-6: Connects RSET_SBB1 to the onboard potentiometer to program SBB1's output voltage. Refer to the SIMO Output Voltage Configuration section of the MAX77646/MAX77647 data sheet for more information.                                                    |

Table 1. Default Shunt Positions and Jumper Descriptions (continued)

| REFERENCE DESIGNATOR   | DEFAULT POSITION   | FUNCTION                                                                                                                                                                                                                                                                                                                                                 |
|------------------------|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J6                     | 1-2                | 1-2: Connects RSET_IPK to 47.5kΩ. 3-4: Connects RSET_IPK to 56.2kΩ. 5-6: Connects RSET_IPK to an open-through-hole radial lead for through-hole resistors. Refer to the Peak Current Configuration section in the MAX77646/MAX77647 data sheet for more information on how to set the peak current limit of the SIMO. RSET_IPK is connected to RSEL_IPK. |
| J7                     | 1-2                | 1-2: Connects EN0 to INSBB, enabling SBB0. 2-3: Connects EN0 to GND, disabling SBB0.                                                                                                                                                                                                                                                                     |
| J8                     | 1-2                | 1-2: Connects RSET_SBB0 to 191kΩ which programs to 3.3V. 3-4: Connects RSET_SBB0 to 768kΩ which programs SBB1 to 5.0V. 5-6: Connects RSET_SBB0 to the onboard potentiometer to program SBB0's output voltage. Refer to the SIMO Output Voltage Configuration section of the MAX77646/MAX77647 data sheet for more information.                           |
| J9                     | 1-2                | 1-2: Connects EN1 to INSBB, enabling SBB1. 2-3: Connects EN1 to GND, disabling SBB1.                                                                                                                                                                                                                                                                     |
| J10                    | 1-2                | 1-2: Connects INSBB to the VL side of the onboard level shifter.                                                                                                                                                                                                                                                                                         |
| J11                    | 1-2                | 1-2: Connects EN2 to INSBB, enabling SBB2 and LDO. 2-3: Connects EN2 to GND, disabling SBB2 and LDO.                                                                                                                                                                                                                                                     |
| J201                   | 1-2                | 1-2: Connects SBB0 to the onboard electronic load and ADC.                                                                                                                                                                                                                                                                                               |
| J203                   | 1-2                | 1-2: Connects SBB1 to the onboard electronic load and ADC.                                                                                                                                                                                                                                                                                               |
| J205                   | 1-2                | 1-2: Connects SBB2 to the onboard electronic load and ADC.                                                                                                                                                                                                                                                                                               |
| J207                   | 1-2                | 1-2: Connects LDO to the onboard electronic load and ADC.                                                                                                                                                                                                                                                                                                |
| J200                   | 1-2                | 1-2: Connects the gate of the Q200 load FET to the U200 amplifier.                                                                                                                                                                                                                                                                                       |
| J202                   | 1-2                | 1-2: Connects the gate of the Q201 load FET to the U201 amplifier.                                                                                                                                                                                                                                                                                       |
| J204                   | 1-2                | 1-2: Connects the gate of the Q202 load FET to the U202 amplifier.                                                                                                                                                                                                                                                                                       |
| J206                   | 1-2                | 1-2: Connects the gate of the Q203 load FET to the U203 amplifier.                                                                                                                                                                                                                                                                                       |

## Detailed Description of Hardware (or Software)

## Enable Key Options

The MAX77646 features individual hardware enable pins for each of the SIMO outputs. Note that SBB2 and LDO are connected to the same enable pin. These enable pins can be connected to INSBB (to enable the corresponding resource) or GND (to disable the corresponding resource) through jumpers in J7, J9, and J11.

## Changing the Output Voltages

The SIMO's and LDO's output voltages are programmed by  connecting  resistors  from  their  corresponding  RSEL pins to ground. The EV kit features pre-selected resistors which can be tied to RSEL pins through jumpers J2, J3, J5, and J8. Additionally, onboard potentiometers can be used to  program  the  entire  output  voltage  range.  Refer to the SIMO Output Voltage Configuration and the LDO Output Voltage Configuration sections of the MAX77646/ MAX77647 data sheet for more information.

## Programming the Inductor Peak Current

The SIMO's inductor peak current is programmed by connecting resistors from RSEL\_IPK to ground. Several preselected resistors are placed on the EV kit and can be tied to  the  RSEL\_IPK pin through the jumper J6. A throughhole resistor can be placed in R30 for additional options. See  the Inductor  Peak  Current  Setting section  of  the MAX77646/MAX77647 data sheet for more information.

## Electronic Load

The  EV  kit  comes  with  an  electronic  load  allowing  the user to evaluate the SIMO and LDO load current capabilities. Onboard circuits set the load current through the I 2 C  interface.  J201,  J203,  J205,  and  J207  are  used  to connect the load to the output of the SBB0, SBB1, SBB2, and  LDO  respectively.  To  exercise  the  load  transient response,  remove  J200  (for  SBB0),  J202  (for  SBB1), J204 (for SBB2), and J206 (for LDO) and connect a signal generator to the gate of the load MOSFET (pin 2 of the respective header). Drive the gate with a signal between 1V (off) and 3V (fully on) to apply transients to the output of the SIMO or LDO. Note that there are 0.1Ω sense resis -tors  with  test  points  (called  VIL\_SBB0,  VIL\_SBB1,  and VIL\_SBB2) and a 0.5Ω sense resistor  with  a  test  point (called  VIL\_LDO) for a 10:1 and 2:1 conversion of load current to voltage.

## Installation

Visit  the  product  webpage  at www.analog.com/max77646evkit and navigate to Design Resources to download  the  latest  version  of  the  EV  kit  software.  Save  the

EV  kit  software  to  a  temporary  folder  and  decompress the ZIP file.

## Windows Drivers

Upon connection of a Micro-USB cable between your PC and the EV kit for the first  time,  wait  a  few  minutes  for Windows to automatically install drivers.

## Graphical User Interface (GUI) Details

The GUI software allows for a convenient, quick, and thorough evaluation of the MAX77646. When the EV kit software detects that a MAX77646 EV kit is connected, only the 'Load Control' portion of the GUI can be accessed.

## Load Control Tab

The Load Control tab contains controls for load currents on  the  regulator  outputs.  The  GUI  is  capable  of  setting steady-state, transient, and random load currents. To set a load current, use the slider bar or text field to input a value  (mA)  and  check  the Enable box.  Shuffle  through the modes to exercise different load conditions.

The offset and gain values are set by Analog Devices and do not need to be altered.

Figure 6. Electronic Load Block Diagram

<!-- image -->

## Ordering Information

| PART           | IC           | TYPE   |
|----------------|--------------|--------|
| MAX77646EVKIT# | MAX77646ANP+ | EV Kit |

#Denotes RoHS compliant.

│

## MAX77646 EV Kit Bill of Materials

| ITEM   | REF_DES                                                                                                                                   | DNI/DNP QTY   | MFG PART #                                                                  | MANUFACTURER                                                  | VALUE           | DESCRIPTION                                                                                                             | COMMENTS   |
|--------|-------------------------------------------------------------------------------------------------------------------------------------------|---------------|-----------------------------------------------------------------------------|---------------------------------------------------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------|------------|
| 1      | AIN0, AIN1, AIN6, AIN7, EN0-EN2, RSET_IPK, RSET_LDO, RSET_SB0-RSET_SB2, SCL, SDA, VIL_LDO0, VIL_SBB0- VIL SBB2 -                          | 18            | 5002                                                                        | KEYSTONE                                                      | N/A             | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                   |            |
| 2      | C1, C8, C11, C14 -                                                                                                                        | 4             | C1608X5R1A226M080AC;GRM1 88R61A226ME15;CL10A226MPC NUBE;CL10A226MPMNUB      | TDK;MURATA;SAMSUNG;SAMSUNG ELECTRO-MECHANICS                  | 22UF            | CAP; SMT (0603); 22UF; 20%; 10V; X5R; CERAMIC                                                                           |            |
| 3      | C4 -                                                                                                                                      | 1             | C0402C104J4RAC;GCM155R71 C104JA55                                           | KEMET;MURATA                                                  | 0.1UF           | CAP; SMT (0402); 0.1UF; 5%; 16V; X7R; CERAMIC                                                                           |            |
| 4      | C6 -                                                                                                                                      | 1             | 16TQC100MYF                                                                 | PANASONIC                                                     | 100UF           | CAP; SMT (7343); 100UF; 20%; 16V; TANTALUM                                                                              |            |
| 5      | C7, C22, C25-C27, C30, C32-C35, C37-C39, C63, C65-C67, C73, C202, C207, C212, C217, C221- C223, C234, C235, C237, C244, C268, C272-C277 - | 36            | GRM155R71E104KE14;C1005X7 R1E104K050BB;TMK105B7104K VH;CGJ2B3X7R1E104K050BB | MURATA;TDK;TAIYO YUDEN;TDK                                    | 0.1UF           | CAP; SMT (0402); 0.1UF; 10%; 25V; X7R; CERAMIC                                                                          |            |
| 6      | C9, C16, C29, C36, C41, C42, C239-C242, C269-C271 -                                                                                       | 13            | C0402C105K8PAC;CC0402KRX5 R6BB105                                           | KEMET;YAGEO                                                   | 1UF             | CAP; SMT (0402); 1UF; 10%; 10V; X5R; CERAMIC                                                                            |            |
| 7      | C15 -                                                                                                                                     | 1             | GRM155R61C225KE44;GRM155 R61C225KE11                                        | MURATA;MURATA                                                 | 2.2UF           | CAP; SMT (0402); 2.2UF; 10%; 16V; X5R; CERAMIC                                                                          |            |
| 8      | C21, C28, C31 -                                                                                                                           | 3             | C1005X5R1A475K050                                                           | TDK                                                           | 4.7UF           | CAP; SMT (0402); 4.7UF; 10%; 10V; X5R; CERAMIC                                                                          |            |
| 9 10   | C23, C24 - -                                                                                                                              | 2             | GRM0335C1H270JA01 CL05B103KP5NNN                                            | MURATA SAMSUNG ELECTRONICS                                    | 27PF 0.01UF     | CAP; SMT (0201); 27PF; 5%; 50V; C0G; CERAMIC CAP; SMT (0402); 0.01UF; 10%; 10V; X7R; CERAMIC                            |            |
|        | C68, C69, C71, C72                                                                                                                        | 4             | C0402C472K5RAC;GRM155R71                                                    |                                                               |                 | CAP; SMT (0402); 4700PF; 10%; 50V; X7R;                                                                                 |            |
| 11     | C200, C205, C210, C215, C220, C238, C248-C253 -                                                                                           | 12            | H472KA01;C1005X7R1H472K05 0BA                                               | KEMET;MURATA;TDK                                              | 4700PF          | CERAMIC;                                                                                                                |            |
| 12     | C201, C206, C211, C216 -                                                                                                                  | 4             | C0402H102J5GAC                                                              | KEMET                                                         | 1000PF          | CAP; SMT (0402); 1000PF; 5%; 50V; C0G; CERAMIC                                                                          |            |
| 13     | C203, C204, C208, C209, C213, C214, C218, C219 -                                                                                          | 8             | C0402C180J5GAC;GRM1555C1 H180JA01;C1005C0G1H180J050 BA                      | KEMET;MURATA;TDK                                              | 18PF            | CAP; SMT (0402); 18PF; 5%; 50V; C0G; CERAMIC                                                                            |            |
| 14     | DS2 -                                                                                                                                     | 1             | LTST-C190CKT                                                                | LITE-ON ELECTRONICS INC.                                      | LTST-C190CKT    | DIODE; LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; -55 DEGC TO +85 DEGC                                         |            |
| 15     | GND1, GND5-GND7 -                                                                                                                         | 4             | 5011                                                                        | KEYSTONE                                                      | N/A             | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
| 16 17  | GND2-GND4, GND8, GND10, INSBB -                                                                                                           | 6             | 9020 BUSS                                                                   | WEICO WIRE                                                    | MAXIMPAD        | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                |            |
| 18     | INLDO, IN_SBB, LDO, SBB0- SBB2, VUSB -                                                                                                    | 7             | 5010                                                                        | KEYSTONE                                                      | N/A             | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                   |            |
| 19     | J1 -                                                                                                                                      | 1             | 10118193-0001LF                                                             | FCI CONNECT                                                   | 10118193-0001LF | CONNECTOR; FEMALE; SMT; MICRO USB B TYPE RECEPTACLE; RIGHT ANGLE; 5PINS                                                 |            |
| 20     | J2, J3, J5, J6, J8 -                                                                                                                      | 5             | TSW-103-07-L-D                                                              | SAMTEC                                                        | TSW-103-07-L-D  | CONNECTOR; MALE; THROUGH HOLE; THROUGH HOLE 0.025 POST HEADER; STRAIGHT; 6PINS                                          |            |
| 21     | J4, J10, J200-J207 -                                                                                                                      | 10            | TSW-102-07-T-S                                                              | SAMTEC                                                        | TSW-102-07-T-S  | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +105 DEGC                                 |            |
| 22     | J7, J9, J11 -                                                                                                                             | 3             | PBC03SAAN                                                                   | SULLINS                                                       | PBC03SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                                        |            |
| 23     | L1 - L2, L4, L5 -                                                                                                                         | 1 3           | DFE201612E-1R5M                                                             | MURATA MURATA                                                 | 1.5UH           | INDUCTOR; SMT (0806); METAL; 1.5UH; 20%; 2.30A INDUCTOR; SMT (0603); FERRITE-BEAD; 600; TOL=+/-;                        |            |
| 24     | L3 -                                                                                                                                      | 1             | BLM18AG601SN1 DFE201210S-2R2M=P2                                            | MURATA                                                        | 600 2.2UH       | 0.5A EVKIT PART-INDUCTOR; SMT (0805); MAGNETICALLY SHIELDED;                                                            |            |
| 25     | L6 -                                                                                                                                      | 1             | DFE18SBN1R0ME0                                                              | MURATA                                                        | 1UH             | 2.2UH; TOL=+/-20%; 1.8A INDUCTOR; SMT (0603); METAL ALLOY; 1UH; 20%; 1.8A                                               |            |
| 26     | L7 -                                                                                                                                      | 1             | DFE201210U-1R5M=P2                                                          | TOKO                                                          | 1.5UH           | INDUCTOR; SMT (0805); METAL ALLOY CHIP; 1.5UH; TOL=+/-20%; 1.9A                                                         |            |
| 27     | L8 -                                                                                                                                      | 1             | DFE201612E-1R0M                                                             | MURATA                                                        | 1UH             | INDUCTOR; SMT (0806); WIREWOUND CHIP; 1UH; TOL=+/-20%; 2.9A                                                             |            |
| 28     | L9 -                                                                                                                                      | 1             | DFE201612E-2R2M                                                             | MURATA                                                        | 2.2UH           | INDUCTOR; SMT (0806); WIREWOUND CHIP; 2.2UH; TOL=+/-20%; 1.8A                                                           |            |
| 29     | L10 -                                                                                                                                     | 1             | MCEE1005T1R0MHN                                                             | TAIYO YUDEN                                                   | 1UH             | INDUCTOR; SMT (0402); METAL; 1UH; 20%; 0.80A                                                                            |            |
| 30     | MISC1 -                                                                                                                                   | 1             | AK67421-2                                                                   | ASSMANN                                                       | AK67421-2       | CABLE; MALE; USB; USB2.0 MICRO CONNECTION CABLE; USB B MICRO MALE TO USB A MALE; 2000 MILLIMETERS; 5PINS-4PINS          |            |
| 31     | Q200-Q203 -                                                                                                                               | 4             | IRFHM8337TRPBF                                                              | INTERNATIONAL RECTIFIER                                       | IRFHM8337TRPBF  | TRAN; HEXFET POWER MOSFET; NCH; PQFN8; PD-(2.8W); I-(18A); V- (30V)                                                     |            |
| 32     | Q205 -                                                                                                                                    | 1             | FDN360P                                                                     | ON SEMICONDUCTOR                                              | FDN360P         | TRANSISTOR, MOSFET P-CHANNEL, SUPERSOT-3, PD=0.5W, ID=- 2.0A, VDSS=-30V,VGSS=+/-20V                                     |            |
| 33     | Q206 -                                                                                                                                    | 1             | 2N7002;2N7002;2N7002;2N7002                                                 | MICROELECTRONICS;ON SEMICONDUCTOR;MICRO COMMERCIAL COMPONENTS | 2N7002          | TRAN; ; NCH; SOT-23; PD-(0.33W); IC-(0.5A); VCEO-(60V); -55 DEGC TO +150 DEGC                                           |            |
| 34     | R1 -                                                                                                                                      | 1             | CRCW06030000ZS;MCR03EZPJ 000;ERJ-3GEY0R00;CR0603AJ/- 000ELF                 | VISHAY;ROHM SEMICONDUCTOR;PANASONIC;BOURNS                    | 0               | RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                                                             |            |
| 35     | R2 -                                                                                                                                      | 1             | ERJ-2RKF1182                                                                | PANASONIC                                                     | 11.8K           | RES; SMT (0402); 11.8K; 1%; +/-100PPM/DEGC; 0.1000W RES; THROUGH HOLE-RADIAL LEAD; 1M; 10%; +/-100PPM/DEGC;             |            |
| 36     | R4, R7, R18, R26 -                                                                                                                        | 4             | 3296Y-1-105LF                                                               | BOURNS                                                        | 1M              | 0.5W                                                                                                                    |            |
| 37     | R5 -                                                                                                                                      | 1             | ERJ-3EKF7151                                                                | PANASONIC                                                     | 7.15K           | RES; SMT (0603); 7.15K; 1%; +/-100PPM/DEGC; 0.1000W                                                                     |            |
| 38     | R6 -                                                                                                                                      | 1             | CRCW060380K6FK;ERJ- 3EKF8062;RC0603FR-0780K6L                               | VISHAY;PANASONIC;YAGEO                                        | 80.6K           | RES; SMT (0603); 80.6K; 1%; +/-100PPM/DEGK; 0.1000W                                                                     |            |
| 39     | R8 -                                                                                                                                      | 1             | CRCW0402191KFK                                                              | VISHAY DALE                                                   | 191K            | RES; SMT (0402); 191K; 1%; +/-100PPM/DEGK; 0.0630W                                                                      |            |
| 40 41  | R9 - R10, -                                                                                                                               | 1             | CRCW0402768KFK RC0402FR-0727RL                                              | VISHAY DALE                                                   | 768K            | RES; SMT (0402); 768K; 1%; +/-100PPM/DEGK; 0.0630W                                                                      |            |
|        | R11 R12 -                                                                                                                                 | 2 1           | ERJ-2RKF1202                                                                | YAGEO PANASONIC                                               | 27 12K          | RES; SMT (0402); 27; 1%; +/-100PPM/DEGC; 0.0630W RES; SMT (0402); 12K; 1%; +/-100PPM/DEGC; 0.1000W                      |            |
| 42 43  | R13, R210, R231, R244, R257, -                                                                                                            | 8             | CRCW04021M00FK                                                              | VISHAY DALE                                                   | 1M              | RES; SMT (0402); 1M; 1%; +/-100PPM/DEGC; 0.0630W                                                                        |            |
| 44     | R291, R301, R307 R14, R207, R208, R229, R230, R242, R243, R254, R255 -                                                                    | 9             | CRCW04024752FK;                                                             | PANASONIC                                                     | 1K              | RES; SMT (0402); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                        |            |
|        |                                                                                                                                           |               | ERJ-2RKF1001                                                                |                                                               |                 |                                                                                                                         |            |
| 45 46  | R16, R27 - R17, R24, R214, R283 -                                                                                                         | 2 4           | 9C04021A4752FLHF3; CRCW040247K5FK CRCW0402100KFK;RC0402FR- 07100KL          | VISHAY DALE;YAGEO;VISHAY DALE VISHAY;YAGEO                    | 47.5K 100K      | RES; SMT (0402); 47.5K; 1%; +/-100PPM/DEGC; 0.0630W RES; SMT (0402); 100K; 1%; +/-100PPM/DEGC; 0.0630W                  |            |
| 47     |                                                                                                                                           |               | ERJ- 3EKF1402;CRCW060314K0FK;A C0603FR-0714KL                               | PANASONIC;VISHAY;YAGEO                                        | 14K             | RES; SMT (0603); 14K; 1%; +/-100PPM/DEGC; 0.1000W                                                                       |            |
|        | R19 -                                                                                                                                     | 1             |                                                                             |                                                               |                 |                                                                                                                         |            |
| 48     | R20, R33, R52-R54, R204, R225, R238, R251, R259, R286, R290, R292, R302-R306 -                                                            | 18            | ERJ-2GE0R00                                                                 | PANASONIC                                                     | 0               | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                             |            |
| 49 50  | R21, R22 - R23                                                                                                                            | 2 1           |                                                                             | PANASONIC                                                     | 4.7K 169K       | RES; SMT (0402); 4.7K; 5%; +/-200PPM/DEGC;                                                                              |            |
|        | -                                                                                                                                         |               | ERJ-2GEJ472                                                                 |                                                               |                 | 0.1000W                                                                                                                 |            |
|        |                                                                                                                                           |               | CRCW0402169KFK                                                              | VISHAY DALE                                                   |                 | RES; SMT (0402); 169K; 1%; +/-100PPM/DEGK; 0.0630W                                                                      |            |

Evaluates: MAX77646

## MAX77646 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES                                                                | DNI/DNP   | QTY   | MFG PART #                         | MANUFACTURER                          | VALUE          | DESCRIPTION                                                                                                                                                                                                     | COMMENTS   |
|--------|------------------------------------------------------------------------|-----------|-------|------------------------------------|---------------------------------------|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 51     | R25                                                                    | -         | 1     | CRCW060328K0FK                     | VISHAY                                | 28K            | RES; SMT (0603); 28K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                               |            |
| 52     | R28                                                                    | -         | 1     | CRCW0402470RFK                     | VISHAY DALE                           | 470            | RES; SMT (0402); 470; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                               |            |
| 53     | R29                                                                    | -         | 1     | CRCW040256K2FK                     | VISHAY                                | 56.2K          | RES; SMT (0402); 56.2K; 1%; +/-100PPM/DEGK; 0.0630W                                                                                                                                                             |            |
| 54     | R31, R32                                                               | -         | 2     | RC0402FR-072K2L                    | YAGEO                                 | 2.2K           | RES; SMT (0402); 2.2K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                              |            |
| 55     | R201, R222, R235, R248, R289                                           | -         | 5     | 9C04021A1000FL; RC0402FR- 07100RL  | PANASONIC;YAGEO PHYCOMP               | 100            | RES; SMT (0402); 100; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                               |            |
| 56     | R202, R223, R236, R249                                                 | -         | 4     | RC0402FR-07680RL                   | YAGEO                                 | 680            | RES; SMT (0402); 680; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                               |            |
| 57     | R203, R205, R206, R224, R226, R228, R237, R239, R240, R250, R252, R253 | -         | 12    | ERJ-2RKF2002                       | PANASONIC                             | 20K            | RES; SMT (0402); 20K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                               |            |
| 58     | R211, R233, R245                                                       | -         | 3     | CRL1206-JW-R100ELF                 | BOURNS                                | 0.1            | RES; SMT (1206); 0.1; 1%; +/-200PPM/DEGC; 0.2500W                                                                                                                                                               |            |
| 59     | R212, R213, R227, R234, R246, R247                                     | -         | 6     | CRCW0402787KFK                     | VISHAY DALE                           | 787K           | RES; SMT (0402); 787K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                              |            |
| 60     | R258                                                                   | -         | 1     | CSR1206FTR500                      | STACKPOLE ELECTRONICS INC.            | 0.5            | RES; SMT (1206); 0.5; 1%; +/-100PPM/DEGC; 0.5000W                                                                                                                                                               |            |
| 61     | R277, R279                                                             | -         | 2     | CRCW06030000Z0                     | VISHAY DALE                           | 0              | RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                                                                                                                                                     |            |
| 62     | R281, R282, R287, R288                                                 | -         | 4     | RC0402FR-0710KL;CR0402-FX- 1002GLF | YAGEO;BOURNS                          | 10K            | RES; SMT (0402); 10K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                               |            |
| 63     | R293, R295, R297, R299                                                 | -         | 4     | ERJ-2RKF4703                       | PANASONIC                             | 470K           | RES; SMT (0402); 470K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                              |            |
| 64     | R294, R296, R298, R300                                                 | -         | 4     | CRCW0402649KFK                     | VISHAY DALE                           | 649K           | RES; SMT (0402); 649K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                              |            |
| 65     | SU1-SU10, SU12-SU19                                                    | -         | 18    | S1100-B;SX1100-B;STC02SYAN         | KYCON;KYCON;SULLINS ELECTRONICS CORP. | SX1100-B       | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                                                                                         |            |
| 66     | U1                                                                     | -         | 1     | MAX77646ANP+                       | MAXIM                                 | MAX77646       | EVKIT PART - IC; MAX77646; ULTRA CONFIGURABLE SIMO PMIC FEATURING 3-OUTPUT BUCK-BOOST; 1-LDO FOR LONG BATTERY LIFE PRIMARY CELL APPLICATIONS; PACKAGE OUTLINE DRAWING: 21-100601; PACKAGE CODE: N201C2+1; WLP20 |            |
| 67     | U2                                                                     | -         | 1     | FT2232HL                           | FUTURE TECHNOLOGY DEVICES INTL LTD.   | FT2232HL       | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; LQFP64                                                                                                                                                 |            |
| 68     | U3, U4                                                                 | -         | 2     | MAX8512EXK+                        | MAXIM                                 | MAX8512EXK     | IC, VREG, Ultra-Low-Noise, High PSRR, Adjustable Vout, SC70-5                                                                                                                                                   |            |
| 69     | U5                                                                     | -         | 1     | MAX14611ETD+                       | MAXIM                                 | MAX14611ETD+   | IC; TRANS; QUAD BIDIRECTIONAL LOW-VOLTAGE LOGIC LEVEL TRANSLATOR; TDFN14-EP                                                                                                                                     |            |
| 70     | U7                                                                     | -         | 1     | AT24CS02-SSHM                      | MICROCHIP                             | AT24CS02-SSHM  | IC; EPROM; I2C-COMPATIBLE TWO-WIRE SERIAL EEPROM; 150MIL; NSOIC8                                                                                                                                                |            |
| 71     | U200-U203                                                              | -         | 4     | MAX44251AUA+                       | MAXIM                                 | MAX44251AUA+   | IC; OPAMP; ULTRA-PRECISION; LOW-NOISE OP AMP; UMAX8                                                                                                                                                             |            |
| 72     | U205                                                                   | -         | 1     | MAX5825AWP+                        | MAXIM                                 | MAX5825AWP+T   | IC; DAC; ULTRA-SMALL; OCTAL CHANNEL; 12-BIT BUFFERED OUTPUT DAC WITH INTERNAL REFERENCE AND I2C INTERFACE; WLP20                                                                                                |            |
| 73     | U209                                                                   | -         | 1     | MAX11614EEE+                       | MAXIM                                 | MAX11614EEE+   | IC; ADC; LOW-POWER; 8-CHANNEL; I2C; 12-BIT ADC IN ULTRA-SMALL PACKAGE; QSOP16                                                                                                                                   |            |
| 74     | U210                                                                   | -         | 1     | MAX6071AAUT41+                     | MAXIM                                 | MAX6071AAUT41+ | IC; VREF; LOW NOISE; HIGH-PRECISION SERIES VOLTAGE REFERENCE; SOT23-6                                                                                                                                           |            |
| 75     | U211                                                                   | -         | 1     | MAX1697UEUT+                       | MAXIM                                 | MAX1697UEUT+   | IC; INV; INVERTING CHARGE PUMP WITH SHUTDOWN; SOT23-6                                                                                                                                                           |            |
| 76     | Y1                                                                     | -         | 1     | 7M-12.000MAAJ                      | TXC CORPORATION                       | 12MHZ          | CRYSTAL; SMT; 12MHZ; 18PF; TOL = +/-30PPM; STABILITY = +/-30PPM                                                                                                                                                 |            |
| 77     | PCB                                                                    | -         | 1     | MAX77646                           | MAXIM                                 | PCB            | PCB:MAX77646                                                                                                                                                                                                    |            |
| 78     | R30                                                                    | DNI       | 2     | 0667-0-15-01-30-27-10-0            | MILL-MAX                              | N/A            | PIN RECEPTACLE; PIN DIA=0.025IN; TOTAL LENGTH=0.161IN; BOARD HOLE=0.057IN; GOLD OVER NICKEL PLATE FINISH                                                                                                        |            |
| 79     | C2, C3, C18, C53, C54, C56-C59, C61, C62                               | DNP       | 0     | N/A                                | N/A                                   | OPEN           | CAPACITOR; SMT (0402); OPEN; FORMFACTOR                                                                                                                                                                         |            |
| 80     | C5                                                                     | DNP       | 0     | N/A                                | N/A                                   | OPEN           | CAPACITOR; SMT (0603); OPEN; FORMFACTOR                                                                                                                                                                         |            |
| 81     | R15, R260                                                              | DNP       | 0     | N/A                                | N/A                                   | OPEN           | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                                                                                                                |            |
| 82     | R30                                                                    | DNP       | 0     | N/A                                | N/A                                   | OPEN           | RES; THROUGH HOLE-RADIAL LEAD;                                                                                                                                                                                  |            |
|        |                                                                        |           |       |                                    |                                       |                | OPEN; N/A; N/A; N/A                                                                                                                                                                                             |            |
| TOTAL  |                                                                        |           | 305   |                                    |                                       |                |                                                                                                                                                                                                                 |            |

Evaluates: MAX77646

## MAX77646 Evaluation Kit

## MAX77646 EV Kit Schematic

<!-- image -->

Evaluates: MAX77646

## MAX77646 EV Kit Schematic (continued)

<!-- image -->

│

## MAX77646 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX77646

## MAX77646 EV Kit Schematic (continued)

<!-- image -->

│

Evaluates: MAX77646

## MAX77646 EV Kit Schematic (continued)

<!-- image -->

│

Evaluates: MAX77646

## MAX77646 Evaluation Kit

## MAX77646 EV Kit PCB Layouts

MAX77646 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX77646 EV Kit PCB Layout-Top View

<!-- image -->

MAX77646 EV Kit PCB Layout-Internal 2

<!-- image -->

MAX77646 EV Kit PCB Layout-Internal 3

<!-- image -->

│

## MAX77646 EV Kit PCB Layouts (continued)

MAX77646 EV Kit PCB Layout-Bottom View

<!-- image -->

MAX77646 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/23            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX77646