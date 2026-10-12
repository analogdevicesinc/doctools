<!-- lastmod 2022-08-03 -->
## MAX77642 Evaluation Kit

## General Description

The  MAX77642  evaluation  kit  (EV  kit)  allows  for  easy experimentation with various MAX77642 features including  the  resistor  programmability  of  the  SIMO  and  onboard electronic loads.

The  Windows ® -based  software  provides  a  user-friendly graphical  interface  to  manage  the  on-board  electronic loads.

Ordering Information appears at end of data sheet.

Evaluates: MAX77642

## Benefits and Features

- ● Easy to Use
- ● GUI-Driven I 2 C Interface
- ● Assembled and Fully Tested
- ● On-Board Electronic Loads
- Steady-State, Transient, and Random Modes
- ● Demonstration  of End-to-End  Analog  Multiplexer Implementation
- ● On-Board ADC

Figure 1. MAX77642 EV Kit Photo

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

<!-- image -->

Evaluates: MAX77642

Figure 2. EV Kit Simple Block Diagram

<!-- image -->

Evaluates: MAX77642

Figure 3. MAX77642 EV Kit Top View

<!-- image -->

Evaluates: MAX77642

Figure 4. MAX77642 EV Kit Bottom View

<!-- image -->

│

Figure 5. MAX77642 EV Kit Solution Area

<!-- image -->

## MAX77642 EV Kit Files

| FILE                                               | DECRIPTION   |
|----------------------------------------------------|--------------|
| MAX77642_SOLDERDOWN_EVKIT_REVB_BOM_2019-10-31.xlsx | BOM          |
| MAX77642_SOLDERDOWN_EVKIT_REVB_SCH_2019-10-31.pdf  | Schematic    |
| MAX77642_SOLDERDOWN_EVKIT_REVB_PCB_2019-10-31.pdf  | Layout       |

│

## MAX77642 Evaluation Kit

## Quick Start

Follow this procedure to become familiar with the EV kit.

Note: In  the  following  sections,  software-related  items are  identified  by bolding .  T ext  in bold and underlined refers to items directly from the EV kit software. Text in italics  and  underlined refers  to  items  from  the  Windows operating system.

## Required Equipment

- ● MAX77642 EV Kit
- ● MAX77642 EV Kit GUI
- ● Windows-Based PC
- ● Power Supply
- ● Ammeter
- ● DVM
- ● Micro-USB Cable

## Procedure

- 1) Install the GUI software. Visit the product webpage at http://www.maximintegrated.com/MAX77642evkit and navigate to Design Resources to download the latest version of the EV kit software. Save the EV kit software  to  a  temporary  folder  and  extract  the  files from the ZIP file.
- 2) Install EV kit shunts according to Table 1.
- 3) Connect  a  Micro-B  USB  cable  between  the  EV  kit USB port labelled 'GUI' and the Windows-based PC.
- 4) Apply  a  3.7V  supply  (set  for  100mA  current  limit) through an ammeter (set for 10mA range) across the VBATT and GND2 terminals of the EV kit. Turn the supply on.
- 5) Open  the  GUI  and  select Device  Connect in  the upper-left corner. Wait for a CONNECTED\_DEVICE\_ LIST window to pop up, and then press the Connect button.
- 6) Measure  the  voltages  on  SBB0,  SBB1,  SBB2,  and LDO with a DMM.

Evaluates: MAX77642

This concludes the Quick Start procedure. During general device evaluation, set the ammeter range to greater than or equal to 1A to minimize the impact of its series resistance.

For  more  information  on  the  GUI,  see  the Software section.

## Table 1. Default Shunt Positions and Jumper Descriptions

| REFERENCE DESIGNATOR   | DEFAULT POSITION   | FUNCTION                                                                                                                                                                                                                                                                                                                                      |
|------------------------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J2                     | 3-4                | 1-2: Connects RSEL_SBB2 to 0kΩ which programs SBB2 to 0.5V. 3-4: Connects RSEL_SBB2 to 14kΩ which programs SBB2 to 1.2V. 5-6: Connects RSEL_SBB2 to the on-board potentiometer to program SBB2's output voltage. Refer to the 'SIMO Output Voltage Configuration' section of the MAX77642/MAX77643 data sheet for more information.           |
| J3                     | 3-4                | 1-2: Connects RSEL_LDO to 7.15kΩ which programs the LDO to 0.8V. 3-4: Connects RSEL_LDO to 80.6kΩ which programs the LDO to 1.8V. 5-6: Connects RSEL_LDO to the on-board potentiometer to program the LDO's output voltage. Refer to the 'LDO Output Voltage Configuration' section of the MAX77642/MAX77643 data sheet for more information. |
| J4                     | 1-2                | 1-2: Connects INLDO to SBB0.                                                                                                                                                                                                                                                                                                                  |
| J5                     | 3-4                | 1-2: Connects RSEL_SBB1 to 14kΩ which programs SBB1 to 1.2V. 3-4: Connects RSEL_SBB1 to 28kΩ which programs SBB1 to 1.8V. 5-6: Connects RSEL_SBB1 to the on-board potentiometer to program SBB1's output voltage. Refer to the 'SIMO Output Voltage Configuration' section of the MAX77642/MAX77643 data sheet for more information.          |

│

## MAX77642 Evaluation Kit

Evaluates: MAX77642

Table 1. Default Shunt Positions and Jumper Descriptions (continued)

| REFERENCE DESIGNATOR   | DEFAULT POSITION   | FUNCTION                                                                                                                                                                                                                                                                                                                               |
|------------------------|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J6                     | 1-2                | 1-2: Connects RSET_IPK to 7.15kΩ. 3-4: Connects RSET_IPK to 8.45kΩ. 5-6: Connects RSET_IPK to an open-through-hole radial lead for through-hole resistors. Refer to the 'Peak Current Configuration' section in the MAX77642/MAX77643 data sheet for more information on how to set the peak current limit of the SIMO.                |
| J7                     | 1-2                | 1-2: Connects EN0 to SYSA, enabling SBB0. 2-3: Connects EN0 to GND, disabling SBB0.                                                                                                                                                                                                                                                    |
| J8                     | 1-2                | 1-2: Connects RSEL_SBB0 to 113kΩ which programs SBB1 to 3.0V. 3-4: Connects RSEL_SBB0 to 536kΩ which programs SBB1 to 4.4V. 5-6: Connects RSEL_SBB0 to the on-board potentiometer to program SBB0's output voltage. Refer to the 'SIMO Output Voltage Configuration' section of the MAX77642/MAX77643 data sheet for more information. |
| J9                     | 1-2                | 1-2: Connects EN1 to SYSA, enabling SBB1. 2-3: Connects EN1 to GND, disabling SBB1.                                                                                                                                                                                                                                                    |
| J10                    | 1-2                | 1-2: Connects SYSA to the VL side of the on-board level shifter                                                                                                                                                                                                                                                                        |
| J11                    | 1-2                | 1-2: Connects EN2 to SYSA, enabling SBB2. 2-3: Connects EN2 to GND, disabling SBB2.                                                                                                                                                                                                                                                    |
| J12                    | 1-2                | 1-2: Connects ENLDO to SYSA, enabling the LDO. 2-3: Connects ENLDO to GND, disabling the LDO.                                                                                                                                                                                                                                          |
| J201                   | 1-2                | 1-2: Connects SBB0 to the onboard electronic load and ADC.                                                                                                                                                                                                                                                                             |
| J203                   | 1-2                | 1-2: Connects SBB1 to the onboard electronic load and ADC.                                                                                                                                                                                                                                                                             |
| J205                   | 1-2                | 1-2: Connects SBB2 to the onboard electronic load and ADC.                                                                                                                                                                                                                                                                             |
| J207                   | 1-2                | 1-2: Connects LDO0 to the onboard electronic load and ADC.                                                                                                                                                                                                                                                                             |
| J200                   | 1-2                | 1-2: Connects the gate of the Q200 load FET to the U200 amplifier.                                                                                                                                                                                                                                                                     |
| J202                   | 1-2                | 1-2: Connects the gate of the Q201 load FET to the U201 amplifier.                                                                                                                                                                                                                                                                     |
| J204                   | 1-2                | 1-2: Connects the gate of the Q202 load FET to the U202 amplifier.                                                                                                                                                                                                                                                                     |
| J206                   | 1-2                | 1-2: Connects the gate of the Q203 load FET to the U203 amplifier.                                                                                                                                                                                                                                                                     |

│

## Detailed Description of Hardware (or Software)

## Enable Key Options

The MAX77642 features individual hardware enable pins for each of the SIMO outputs and the LDO. These enable pins  can  be  connected  to  SYSA  (to  enable  the  corresponding resource) or GND (to disable the corresponding resource) through jumpers in J7, J9, J11, and J12.

## Programming the Output Voltages

The SIMO's and LDO's output voltages are programmed by  connecting  resistors  from  their  corresponding  RSEL pins  to  ground.  The  EV  kit  features  pre-selected  resistors  which  can  be  tied  to  RSEL  pins  through  jumpers J2, J3, J5, and J8. Additionally, on-board potentiometers can be used to program the entire output voltage range. Refer to the SIMO Output Voltage Configuration and LDO Output Voltage Configuration sections of the M AX77642/ MAX77643 data sheet for more information.

## Programming the Inductor Peak Current

The  SIMO's  inductor  peak  current  is  programmed  by connecting  resistors  from  RSEL\_IPK  to  ground.  Several preselected resistors are placed on the EV kit and can be tied to the RSEL\_IPK pin through the jumper J6. A throughhole resistor can be placed in R30 for additional options. See  the Inductor  Peak  Current  Setting section  of  the MAX77642/MAX77643 data sheet for more information.

## Electronic Load

The EV kit comes with an electronic load allowing the user to evaluate the SIMO and LDO load current capabilities. On-board  circuits  set  the  load  current  through  the  I 2 C interface. J201, J203, J205, J207 are used to connect the load to the output of the SBB0, SBB1, SBB2, and LDO respectively.  To  exercise  the  load  transient  response, remove  J200  (for  SBB0),  J202  (for  SBB1),  J204  (for SBB2), and J206 (for LDO), and connect a signal generator to the gate of the load MOSFET (pin 2 of the respective header). Drive the gate with a signal between 1V (off) and 3V (fully on) to apply transients to the output of the SIMO or LDO. Note that there are 0.1Ω sense resistors with test points (called VIL\_SBB0, VIL\_SBB1, and VIL\_SBB2) and a 1Ω sense resistor with a test point (called VIL\_LDO) for a 10:1 and 1:1 conversion of load current to voltage. See the Software section to learn how to set the load current from the GUI.

## Software

The graphical user interface (GUI) software allows for convenient, quick, and thorough evaluation of the MAX77642.

When the EV kit software detects that a MAX77642 EV kit is connected, only the 'Load Control' portion of the GUI can be accessed.

## Installation

Visit  the  product  webpage  at www.maximintegrated. com/MAX77642evkit and navigate to Design Resources to download the latest version of the EVKit software. Save the EVKit software to a temporary folder and decompress the ZIP file.

## Windows Drivers

Upon connection of a Micro-USB cable between your PC and the EV kit for the first  time,  wait  a  few  minutes  for Windows to automatically install drivers.

## Graphical User Interface Details (GUI)

The GUI drives I 2 C communication with the EV kit. Every control in the GUI (excluding the Load Control and ADC/ AMUX tabs) corresponds directly to a register within the MAX77642. Hover your cursor over control names for a description of that register. Refer to the IC data sheet for the complete register map.

## Load Control Tab

The Load Control tab contains controls for load currents on  the  regulator  outputs.  The  GUI  is  capable  of  setting steady-state, transient, and random load currents. To set a load current, use the slider bar or text field to input a value  (mA)  and  check  the Enable box.  Shuffle  through the modes to exercise different load conditions.

The offset and gain values are set by Maxim and do not need to be altered.

Figure 6. Electronic Load Block Diagram

<!-- image -->

│

## Evaluates: MAX77642

## Ordering Information

| PART           | IC           | TYPE   |
|----------------|--------------|--------|
| MAX77642EVKIT# | MAX77642ANA+ | EV Kit |

#Denotes RoHS compliant.

## MAX77642 EV Kit Bill of Materials

| ITEM   | REF_DES                                                                                                                                |   DNI/DNP QTY |      | MFG PART #                                                                            | MANUFACTURER                                                                         | VALUE           | DESCRIPTION                                                                                                             | COMMENTS   |
|--------|----------------------------------------------------------------------------------------------------------------------------------------|---------------|------|---------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------|------------|
| 1      | AIN0, AIN1, AIN6, AIN7, EN0-EN2, ENLDO, RSET_IPK, RSET_LDO, RSET_SB0- RSET_SB2, SCL, SDA, VIL_LDO0, VIL_SBB0-VIL_SBB2                  |            19 | 5002 |                                                                                       | KEYSTONE                                                                             | N/A             | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                   |            |
| 2      | C1, C9, C16, C29, C36, C41, C42, C239-C242, C269-C271                                                                                  |            14 |      | C0402C105K8PAC; CC0402KRX5R6BB105                                                     | KEMET;YAGEO                                                                          | 1UF             | CAP; SMT (0402); 1UF; 10%; 10V; X5R; CERAMIC                                                                            |            |
| 3      | C4                                                                                                                                     |             1 |      | C0402C103K5RAC; GRM155R71H103KA88; C1005X7R1H103K050BE; CL05B103KB5NNN; UMK105B7103KV | KEMET;MURATA;TDK;SAMSUNG ELECTRONIC;TAIYO YUDEN                                      | 0.01UF          | CAP; SMT (0402); 0.01UF; 10%; 50V; X7R; CERAMIC                                                                         |            |
| 4      | C5, C8, C11, C14                                                                                                                       |             4 |      | C1608X5R1A226M080AC; GRM188R61A226ME15                                                | TDK;MURATA                                                                           | 22UF            | CAP; SMT (0603); 22UF; 20%; 10V; X5R; CERAMIC                                                                           |            |
| 5      | C6                                                                                                                                     |             1 |      | 16TQC100MYF                                                                           | PANASONIC                                                                            | 100UF           | CAP; SMT (7343); 100UF; 20%; 16V; TANTALUM                                                                              |            |
| 6      | C7, C22, C25-C27, C30, C32-C35, C37-C39, C63, C65-C67, C73, C202, C207, C212, C217, C221-C223, C234, C235, C237, C244, C268, C272-C277 |            36 |      | GRM155R71E104KE14; C1005X7R1E104K050BB; TMK105B7104KVH; CGJ2B3X7R1E104K050BB          | MURATA;TDK;TAIYO YUDEN;TDK                                                           | 0.1UF           | CAP; SMT (0402); 0.1UF; 10%; 25V; X7R; CERAMIC                                                                          |            |
| 7      | C15                                                                                                                                    |             1 |      | GRM155R61C225KE44                                                                     | MURATA                                                                               | 2.2UF           | CAP; SMT (0402); 2.2UF; 10%; 16V; X5R; CERAMIC                                                                          |            |
| 8      | C21, C28, C31                                                                                                                          |             3 |      | C1005X5R1A475K050                                                                     | TDK                                                                                  | 4.7UF           | CAP; SMT (0402); 4.7UF; 10%; 10V; X5R; CERAMIC                                                                          |            |
| 9      | C23, C24                                                                                                                               |             2 |      | GRM0335C1H270JA01                                                                     | MURATA                                                                               | 27PF            | CAP; SMT (0201); 27PF; 5%; 50V; C0G; CERAMIC                                                                            |            |
| 10     | C68, C69, C71, C72                                                                                                                     |             4 |      | CL05B103KP5NNN                                                                        | SAMSUNG ELECTRONICS                                                                  | 0.01UF          | CAP; SMT (0402); 0.01UF; 10%; 10V; X7R; CERAMIC                                                                         |            |
| 11     | C200, C205, C210, C215, C220, C238, C248-C253                                                                                          |            12 |      | C0402C472K5RAC; GRM155R71H472KA01;                                                    | KEMET;MURATA;TDK                                                                     | 4700PF          | CAP; SMT (0402); 4700PF; 10%; 50V; X7R; CERAMIC;                                                                        |            |
| 12     | C201, C206, C211, C216                                                                                                                 |             4 |      | C1005X7R1H472K050BA C0402H102J5GAC                                                    | KEMET                                                                                | 1000PF          | CAP; SMT (0402); 1000PF; 5%; 50V; C0G; CERAMIC                                                                          |            |
| 13     | C203, C204, C208, C209, C213, C214, C218, C219                                                                                         |             8 |      | C0402C180J5GAC; GRM1555C1H180JA01; C1005C0G1H180J050BA                                | KEMET;MURATA;TDK                                                                     | 18PF            | CAP; SMT (0402); 18PF; 5%; 50V; C0G; CERAMIC                                                                            |            |
| 14     | DS2                                                                                                                                    |             1 |      | LTST-C190CKT                                                                          | LITE-ON ELECTRONICS INC.                                                             | LTST-C190CKT    | DIODE; LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; -55 DEGC TO +85 DEGC                                         |            |
| 15     | GND1, GND5-GND7                                                                                                                        |             4 |      | 5011                                                                                  | KEYSTONE                                                                             | N/A             | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
| 16     | GND2-GND4, GND8, GND10, INSBB                                                                                                          |             6 |      | 9020 BUSS                                                                             | WEICO WIRE                                                                           | MAXIMPAD        | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                |            |
| 17     | INLDO, LDO, SBB0-SBB2, SYSA, VUSB                                                                                                      |             7 |      | 5010                                                                                  | KEYSTONE                                                                             | N/A             | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                   |            |
| 18     | J1                                                                                                                                     |             1 |      | 10118193-0001LF                                                                       | FCI CONNECT                                                                          | 10118193-0001LF | CONNECTOR; FEMALE; SMT; MICRO USB B TYPE RECEPTACLE; RIGHT ANGLE; 5PINS                                                 |            |
| 19     | J2, J3, J5, J6, J8                                                                                                                     |             5 |      | TSW-103-07-L-D                                                                        | SAMTEC                                                                               | TSW-103-07-L-D  | CONNECTOR; MALE; THROUGH HOLE; THROUGH HOLE 0.025 POST HEADER; STRAIGHT; 6PINS                                          |            |
| 20     | J4, J10, J200-J207                                                                                                                     |            10 |      | TSW-102-07-T-S                                                                        | SAMTEC                                                                               | TSW-102-07-T-S  | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +105 DEGC                                 |            |
| 21     | J7, J9, J11, J12                                                                                                                       |             4 |      | PEC03SAAN                                                                             | SULLINS ELECTRONICS CORP.                                                            | PEC03SAAN       | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC;                            |            |
| 22 23  | L1 L5                                                                                                                                  |               |    1 | DFE201612E-1R5M                                                                       | MURATA                                                                               | 1.5UH           | INDUCTOR; SMT (0806); METAL; 1.5UH; 20%; 2.30A 0.5A                                                                     |            |
| 24     | L2, L4, L3                                                                                                                             |               |    3 | BLM18AG601SN1                                                                         | MURATA                                                                               | 600 2.2UH       | INDUCTOR; SMT (0603); FERRITE-BEAD; 600; TOL=+/-; EVKIT PART-INDUCTOR; SMT (0805); MAGNETICALLY                         |            |
| 25     |                                                                                                                                        |               |    1 | DFE201210S-2R2M=P2                                                                    | MURATA                                                                               |                 | SHIELDED; 2.2UH; TOL=+/-20%; 1.8A INDUCTOR; SMT (0805); METAL ALLOY CHIP;                                               |            |
|        | L7                                                                                                                                     |             1 |      | DFE201210U-1R5M=P2                                                                    | TOKO                                                                                 | 1.5UH           | 1.5UH; TOL=+/-20%; 1.9A                                                                                                 |            |
| 26     | L8                                                                                                                                     |             1 |      | DFE201612E-1R0M                                                                       | MURATA                                                                               | 1UH             | INDUCTOR; SMT (0806); WIREWOUND CHIP; 1UH; TOL=+/-20%; 2.9A                                                             |            |
| 27     | L9                                                                                                                                     |             1 |      | DFE201612E-2R2M                                                                       | MURATA                                                                               | 2.2UH           | INDUCTOR; SMT (0806); WIREWOUND CHIP; 2.2UH; TOL=+/-20%; 1.8A                                                           |            |
| 28     | MISC1                                                                                                                                  |             1 |      | AK67421-2                                                                             | ASSMANN                                                                              | AK67421-2       | CABLE; MALE; USB; USB2.0 MICRO CONNECTION CABLE; USB B MICRO MALE TO USB A MALE; 2000 MILLIMETERS; 5PINS-4PINS          |            |
| 29     | Q200-Q203                                                                                                                              |             4 |      | IRFHM8337TRPBF                                                                        | INTERNATIONAL RECTIFIER                                                              | IRFHM8337TRPBF  | TRAN; HEXFET POWER MOSFET; NCH; PQFN8; PD-(2.8W); I-(18A); V-(30V)                                                      |            |
| 30     | Q205                                                                                                                                   |             1 |      | FDN360P                                                                               | FAIRCHILD SEMICONDUCTOR                                                              | FDN360P         | TRANSISTOR, MOSFET P-CHANNEL, SUPERSOT-3, PD=0.5W, ID=-2.0A, VDSS=-30V,VGSS=+/-20V                                      |            |
| 31     | Q206                                                                                                                                   |             1 |      | 2N7002;2N7002; 2N7002;2N7002                                                          | DIODES INCORPORATED;ST MICROELECTRONICS;ON SEMICONDUCTOR;MICRO COMMERCIAL COMPONENTS | 2N7002          | TRAN; ; NCH; SOT-23; PD-(0.33W); IC-(0.5A); VCEO-(60V); -55 DEGC TO +150 DEGC                                           |            |
| 32     | R1                                                                                                                                     |             1 |      | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00; CR0603AJ/-000ELF                          | VISHAY;ROHM SEMICONDUCTOR;PANASONIC;BO URNS                                          | 0               | RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                                                             |            |
| 33     | R2, R19                                                                                                                                |             2 |      | ERJ-3EKF1402; CRCW060314K0FK                                                          | PANASONIC;VISHAY VISHAY DALE                                                         | 14K             | RES; SMT (0603); 14K; 1%; +/-100PPM/DEGC; 0.1000W RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                           |            |
| 34 35  | R3, R277, R279 R4, R7, R18, R26                                                                                                        |             3 |    4 | CRCW06030000Z0 3296Y-1-105LF                                                          | BOURNS                                                                               | 0 1M            | RES; THROUGH HOLE-RADIAL LEAD; 1M; 10%; +/-100PPM/DEGC; 0.5W                                                            |            |
| 36     | R5, R27                                                                                                                                |             2 |      | ERJ-3EKF7151                                                                          | PANASONIC                                                                            | 7.15K           | RES; SMT (0603); 7.15K; 1%; +/-100PPM/DEGC;                                                                             |            |
|        |                                                                                                                                        |               |      |                                                                                       |                                                                                      |                 | 0.1000W                                                                                                                 |            |
| 37     | R6                                                                                                                                     |             1 |      | CRCW060380K6FK; ERJ-3EKF8062; RC0603FR-0780K6L                                        | VISHAY;PANASONIC;YAGEO                                                               | 80.6K           | RES; SMT (0603); 80.6K; 1%; +/-100PPM/DEGK; 0.1000W                                                                     |            |

Evaluates: MAX77642

## MAX77642 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES                                                                      | DNI/DNP   | QTY   | MFG PART #                                        | MANUFACTURER                          | VALUE          | DESCRIPTION                                                                                                                                                                             | COMMENTS   |
|--------|------------------------------------------------------------------------------|-----------|-------|---------------------------------------------------|---------------------------------------|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 38     | R8                                                                           | -         | 1     | ERJ-3EKF1133                                      | PANASONIC                             | 113K           | RES; SMT (0603); 113K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                      |            |
| 39     | R9                                                                           | -         | 1     | ERJ-3EKF5363                                      | PANASONIC                             | 536K           | RES; SMT (0603); 536K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                      |            |
| 40     | R10, R11                                                                     | -         | 2     | ERJ-2RKF27R0X; RC0402FR-0727RL; CRCW040227R0FK    | PANASONIC;YAGEO PHICOMP;VISHAY DALE   | 27             | RES; SMT (0402); 27; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                        |            |
| 41     | R12                                                                          | -         | 1     | ERJ-2RKF1202                                      | PANASONIC                             | 12K            | RES; SMT (0402); 12K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                       |            |
| 42     | R13, R210, R231, R244, R257, R291, R301, R307                                | -         | 8     | CRCW04021M00FK                                    | VISHAY DALE                           | 1M             | RES; SMT (0402); 1M; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                        |            |
| 43     | R14, R207, R208, R229, R230, R242, R243, R254, R255                          | -         | 9     | ERJ-2RKF1001                                      | PANASONIC                             | 1K             | RES; SMT (0402); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                        |            |
| 44     | R16                                                                          | -         | 1     | CRCW04024752FK; 9C04021A4752FLHF3; CRCW040247K5FK | VISHAY DALE;YAGEO;VISHAY              | DALE 47.5K     | RES; SMT (0402); 47.5K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                     |            |
| 45     | R20, R33, R52-R54, R204, R225, R238, R251, R259, R286, R290, R292, R302-R306 | -         | 18    | ERJ-2GE0R00                                       | PANASONIC                             | 0              | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                                                                                             |            |
| 46     | R21, R22                                                                     | -         | 2     | ERJ-2GEJ472                                       | PANASONIC                             | 4.7K           | RES; SMT (0402); 4.7K; 5%; +/-200PPM/DEGC; 0.1000W                                                                                                                                      |            |
| 47     | R23                                                                          | -         | 1     | CRCW0402169KFK                                    | VISHAY DALE                           | 169K           | RES; SMT (0402); 169K; 1%; +/-100PPM/DEGK; 0.0630W                                                                                                                                      |            |
| 48     | R25                                                                          | -         | 1     | CRCW060328K0FK                                    | VISHAY                                | 28K            | RES; SMT (0603); 28K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                       |            |
| 49     | R28                                                                          | -         | 1     | CRCW0402470RFK                                    | VISHAY DALE                           | 470            | RES; SMT (0402); 470; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                       |            |
| 50     | R29                                                                          | -         | 1     | RC0603FR-078K45L                                  | YAGEO PHYCOMP                         | 8.45K          | RES; SMT (0603); 8.45K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                     |            |
| 51     | R31, R32                                                                     | -         | 2     | CRCW04022K20FK; RC0402FR-072K2L                   | VISHAY DALE;YAGEO PHICOMP             | 2.2K           | RES; SMT (0402); 2.2K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                      |            |
| 52     | R201, R222, R235, R248, R289                                                 | -         | 5     | 9C04021A1000FL; RC0402FR-07100RL                  | PANASONIC;YAGEO PHYCOMP               | 100            | RES; SMT (0402); 100; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                       |            |
| 53     | R202, R223, R236, R249                                                       | -         | 4     | CRCW0402680RFK; RC0402FR-07680RL                  | VISHAY DALE;YAGEO PHICOMP             | 680            | RES; SMT (0402); 680; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                       |            |
| 54     | R203, R205, R206, R224, R226, R228, R237, R239, R240, R250, R252, R253       | -         | 12    | ERJ-2RKF2002                                      | PANASONIC                             | 20K            | RES; SMT (0402); 20K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                       |            |
| 55     | R211, R233, R245                                                             | -         | 3     | CRL1206-JW-R100ELF                                | BOURNS                                | 0.1            | RES; SMT (1206); 0.1; 1%; +/-200PPM/DEGC; 0.2500W                                                                                                                                       |            |
| 56     | R212, R213, R227, R234, R246, R247                                           | -         | 6     | CRCW0402787KFK                                    | VISHAY DALE                           | 787K           | RES; SMT (0402); 787K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                      |            |
| 57     | R17, R24, R214, R283                                                         | -         | 4     | ANY                                               | ANY                                   | 100K           | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                                                                                                       |            |
| 58     | R258                                                                         | -         | 1     | CSR1206FT1R00                                     | STACKPOLE ELECTRONICS INC.            | 1              | RES; SMT (1206); 1; 1%; +/-100PPM/DEGC; 0.5000W                                                                                                                                         |            |
| 59     | R281, R282, R287, R288                                                       | -         | 4     | CRCW040210K0FK; RC0402FR-0710KL                   | VISHAY DALE;YAGEO PHICOMP             | 10K            | RES; SMT (0402); 10K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                       |            |
| 60     | R293, R295, R297, R299                                                       | -         | 4     | ERJ-2RKF4703                                      | PANASONIC                             | 470K           | RES; SMT (0402); 470K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                      |            |
| 61     | R294, R296, R298, R300                                                       | -         | 4     | CRCW0402649KFK                                    | VISHAY DALE                           | 649K           | RES; SMT (0402); 649K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                      |            |
| 62     | SU1-SU19                                                                     | -         | 19    | S1100-B;SX1100-B; STC02SYAN                       | KYCON;KYCON;SULLINS ELECTRONICS CORP. | SX1100-B       | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                                                                 |            |
| 63     | U1                                                                           | -         | 1     | MAX77642ANA+                                      | MAXIM                                 | MAX77642ANA+   | EVKIT PART - IC; PMIC; ULTRA-LOW POWER PMIC FEATURING HIGHLY EFFICIENCY; SINGLE-INDUCTOR; 3-OUTPUT BUCK-BOOST; 1-LDO; WLP25; PACKAGE OUTLINE DRAWING: 21-100480; PACKAGE CODE: N252B2+1 |            |
| 64     | U2                                                                           | -         | 1     | FT2232HL                                          | FUTURE TECHNOLOGY DEVICES INTL LTD.   | FT2232HL       | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; LQFP64                                                                                                                         |            |
| 65     | U3, U4                                                                       | -         | 2     | MAX8512EXK+                                       | MAXIM                                 | MAX8512EXK     | IC, VREG, Ultra-Low-Noise, High PSRR, Adjustable Vout, SC70-5                                                                                                                           |            |
| 66     | U5                                                                           | -         | 1     | MAX14611ETD+                                      | MAXIM                                 | MAX14611ETD+   | IC; TRANS; QUAD BIDIRECTIONAL LOW-VOLTAGE LOGIC LEVEL TRANSLATOR; TDFN14-EP                                                                                                             |            |
| 67     | U7                                                                           | -         | 1     | AT24CS02-SSHM                                     | MICROCHIP                             | AT24CS02-SSHM  | IC; EPROM; I2C-COMPATIBLE TWO-WIRE SERIAL EEPROM; 150MIL; NSOIC8                                                                                                                        |            |
| 68     | U200-U203                                                                    | -         | 4     | MAX44251AUA+                                      | MAXIM                                 | MAX44251AUA+   | IC; OPAMP; ULTRA-PRECISION; LOW-NOISE OP AMP; UMAX8                                                                                                                                     |            |
| 69     | U205                                                                         | -         | 1     | MAX5825AWP+                                       | MAXIM                                 | MAX5825AWP+T   | IC; DAC; ULTRA-SMALL; OCTAL CHANNEL; 12-BIT BUFFERED OUTPUT DAC WITH INTERNAL REFERENCE AND I2C INTERFACE; WLP20                                                                        |            |
| 70     | U209                                                                         | -         | 1     | MAX11614EEE+                                      | MAXIM                                 | MAX11614EEE+   | IC; ADC; LOW-POWER; 8-CHANNEL; I2C; 12-BIT ADC IN ULTRA-SMALL PACKAGE; QSOP16                                                                                                           |            |
| 71     | U210                                                                         | -         | 1     | MAX6071AAUT41+                                    | MAXIM                                 | MAX6071AAUT41+ | IC; VREF; LOW NOISE; HIGH-PRECISION SERIES VOLTAGE REFERENCE; SOT23-6                                                                                                                   |            |
| 72     | U211                                                                         | -         | 1     | MAX1697UEUT+                                      | MAXIM                                 | MAX1697UEUT+   | IC; INV; INVERTING CHARGE PUMP WITH SHUTDOWN; SOT23-6                                                                                                                                   |            |
| 73     | Y1                                                                           | -         | 1     | 7M-12.000MAAJ                                     | TXC CORPORATION                       | 12MHZ          | CRYSTAL; SMT; 18PF; 12MHZ; +/-30PPM; +/-30PPM                                                                                                                                           |            |
| 74     | PCB                                                                          | -         | 1     | MAX77642                                          | MAXIM                                 | PCB            | PCB:MAX77642                                                                                                                                                                            | -          |
| 75 76  | R30                                                                          | DNI       | 2     | 0667-0-15-01-30-27-10-0 MLP1608VR47D              | MILL-MAX                              | N/A            | PIN RECEPTACLE; PIN DIA=0.025IN; TOTAL LENGTH=0.161IN; BOARD HOLE=0.057IN; GOLD OVER NICKEL PLATE FINISH                                                                                |            |
|        | L6                                                                           | DNP       | 0     | N/A                                               | TDK                                   | 0.47UH         | INDUCTOR; SMT (0603); SHIELDED; 0.47UH; TOL=+/-0.3nH; 0.8A                                                                                                                              |            |
| 77 78  | C2, C3, C18, C53, C54, C56-C59, C61, C62                                     | DNP DNP   | 0 0   | N/A                                               | N/A                                   | OPEN           | CAPACITOR; SMT (0402); OPEN; FORMFACTOR RESISTOR; 0402; OPEN; FORMFACTOR                                                                                                                |            |
| 79     | R15, R260 R30                                                                | DNP       | 0     | N/A                                               | N/A                                   | OPEN OPEN      | RES; THROUGH HOLE-RADIAL LEAD; OPEN; N/A;                                                                                                                                               |            |
| TOTAL  |                                                                              |           | 308   |                                                   | N/A                                   |                | N/A; N/A                                                                                                                                                                                |            |

Evaluates: MAX77642

## MAX77642 EV Schematic Diagrams

| Part Number       | Configuration     | 7-bit              | 8-bit Write                         | 8-bit Read       |
|-------------------|-------------------|--------------------|-------------------------------------|------------------|
| (ADC) MAX11614    | N/A               | 0x33 0b011 0011    | 0x66 0b0110 0110                    | 0x67 0b0110 0111 |
| (DAC) MAX5825     | ADDR1=ADDR0=VDDIO | 0x1F 0b001 1111    | 0b0011 1110 0x10 * 0b0010 1000 0x3E | 0x3F 0b0011 1111 |
| AT24CS02 (EEPROM) | A0=A1=A2=GND      | 0x50 ** 0b101 0000 | 0b1010 0000                         | 0b1010 0001      |

*MAX5825 ALSO RESPONDS TO AN I2C BROADCAST ADDRESS 0b0010 1000

**AT24CS02 ALSO RESPONDS TO 0b1011 0001 FOR READING THE SERIAL NUMBER

│

## MAX77642 EV Kit Schematic Diagrams (continued)

<!-- image -->

## MAX77642 EV Kit Schematic Diagrams (continued)

<!-- image -->

│

## MAX77642 EV Kit Schematic Diagrams (continued)

<!-- image -->

Evaluates: MAX77642

## MAX77642 EV Kit Schematic Diagrams (continued)

<!-- image -->

│

## MAX77642 EV Kit Schematic Diagrams (continued)

<!-- image -->

│

## MAX77642 EV Kit PCB Layout Diagrams

MAX77642 EV Kit PCB Layout - Top Silkscreen

<!-- image -->

│

## MAX77642 EV Kit PCB Layout Diagrams (continued)

MAX77642 EV Kit PCB Layout - Top View

<!-- image -->

│

## MAX77642 EV Kit PCB Layout Diagrams (continued)

MAX77642 EV Kit PCB Layout - Internal Layer 2

<!-- image -->

│

## MAX77642 EV Kit PCB Layout Diagrams (continued)

MAX77642 EV Kit PCB Layout - Internal Layer 3

<!-- image -->

│

## MAX77642 EV Kit PCB Layout Diagrams (continued)

MAX77642 EV Kit PCB Layout - Bottom View

<!-- image -->

│

## MAX77642 EV Kit PCB Layout Diagrams (continued)

MAX77642 EV Kit PCB Layout - Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/20           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX77642