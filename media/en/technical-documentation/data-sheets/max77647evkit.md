<!-- lastmod 2023-08-09 -->
<!-- image -->

Evaluates: MAX77647

## General Description

The  MAX77647  evaluation  kit  (EV  kit)  allows  for  easy experimentation with various MAX77647 features, including the SIMO buck-boost regulator, a linear regulator, an on/off controller, and an I 2 C interface. Windows ® -based software  provides  a  user-friendly  graphical  interface  as well as a detailed register-based interface to exercise the features of the MAX77647.

Ordering Information appears at end of data sheet.

Figure 1. MAX77647 EV Kit Photo

<!-- image -->

Windows is a registered trademark of Microsoft Corporation.

©

## MAX77647 Evaluation Kit

## Features

- Easy to Use
- GUI-Driven I 2 C Interface
- Assembled and Fully Tested
- Evaluates Push-Button, Slide-Switch, and Logic Mode On-Key Options
- On-Board Electronic Loads
- Steady-State, Transient, and Random Modes

319-101004; Rev 0; 6/23

One  Analog  Way,  Wilmington,  MA  0187  U.S.A.    |      Tel:  781.329.470      |      ©  203  Analog  Devices,  Inc.  All  rights  reserved. 203 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

Evaluates: MAX77647

Figure 2. EV Kit Simplified Block Diagram

<!-- image -->

Evaluates: MAX77647

Figure 3. MAX77647 EV Kit Top View

<!-- image -->

Evaluates: MAX77647

Figure 4. MAX77647 EV Kit Bottom View

<!-- image -->

Figure 5. MAX77647 EV Kit Solution Area

<!-- image -->

│

## MAX77647 Evaluation Kit

## Quick Start

## Required Equipment

Follow this procedure to familiarize yourself with the EV kit.

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Required Equipment

- MAX77647 EV kit
- MAX77647 EV kit GUI
- Windows-based PC
- Power supply
- Ammeter
- DVM
- Micro-USB cable

## Procedure

- 1) Install the GUI software. Visit the product webpage at www.analog.com/MAX77647evkit and navigate to Design Resources to download the latest version of the EV kit software. Save the EV kit software to a temporary folder and extract the files from the ZIP file.

Evaluates: MAX77647

- 2) Install EV kit shunts according to Table 1.
- 3) Connect a Micro-B USB cable between the EV kit USB port labeled 'GUI' and your Windows-based PC.
- 4) Apply a 2.4V supply (set for 100mA current limit) through an ammeter (set for 10mA range) across the INSBB and GND2 terminals of the EV kit. Turn the supply on.
- 5) Open the GUI and select Device → Connect in the upper-left corner. Wait for a Connected Device List window to pop up, and then press the Connect button.
- 6) Press the on-key (SW1).
- 7) Measure SBB0, SBB1, and SBB2 with a DMM to ensure that the device is on.
- 8) On the ADC tab of the GUI, click the Read All button. For MAX77647AANP+, 1.8V should appear for VSBB1 (see Figure 6).

This  concludes  the Quick  Start procedure.  Users  are encouraged to explore the device and its register settings with  the  GUI.  For  guidance  on  configuring  the  GPIOs, see the GPIO Quick Start section. During general device evaluation, set the ammeter range to greater than or equal to 1A to minimize the impact of its series resistance.

For  more  information  on  the  GUI,  see  the Detailed Description of Hardware (or Software) section.

Figure 6. Regulator Check with ADC

<!-- image -->

│

Table 1. Default Shunt Positions and Jumper Descriptions

| REFERENCE DESIGNATOR   | DEFAULT POSITION   | FUNCTION                                                                                                                                         |
|------------------------|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| J3                     | 1-2                | 1-2: Connects nEN to SW1 (Push-button). 2-3: Connects nEN to SW2 (Slide-switch).                                                                 |
| J4                     | 1-2                | 1-2: Connects INLDO to SBB0.                                                                                                                     |
| J5                     | 3-4                | 1-2: Connects GPIO0 to VIO. 3-4: Connects GPIO0 to GUI GPIO0 (See the GPIO Quick Start section for more details.) 5-6: Connects GPIO0 to ground. |
| J8                     | 3-4                | 1-2: Connects GPIO1 to VIO. 3-4: Connects GPIO1 to GUI GPIO1 (See the GPIO Quick Start section for more details.) 5-6: Connects GPIO1 to ground. |
| J6                     | 1-2                | 1-2: Connects VIO pin to VIO.                                                                                                                    |
| J7                     | 1-2                | 1-2: Connects nIRQ's open drain output to VIO through a 100kΩ pullup resistor.                                                                   |
| J9                     | 1-2                | 1-2: Connects nRST's open drain output to VIO through a 10kΩ pullup resistor.                                                                    |
| J10                    | 2-3                | 1-2: Connects VIO to an onboard 3.3V LDO (used for 3.3V logic). 2-3: Connects VIO to an onboard 1.8V LDO (used for 1.8V logic).                  |
| J11                    | 1-2                | 1-2: Connects SCL to the onboard FT2232 UART through the MAX3395 level shifter.                                                                  |
| J12                    | 1-2                | 1-2: Connects SDAto the onboard FT2232 UART through the MAX3395 level shifter.                                                                   |
| J13                    | 1-2                | 1-2: Connects nIRQ to the onboard FT2232 UART through the MAX3395 level shifter.                                                                 |
| J201                   | 1-2                | 1-2: Connects SBB0 to the onboard electronic load.                                                                                               |
| J203                   | 1-2                | 1-2: Connects SBB1 to the onboard electronic load.                                                                                               |
| J205                   | 1-2                | 1-2: Connects SBB2 to the onboard electronic load.                                                                                               |
| J207                   | 1-2                | 1-2: Connects LDO to the onboard electronic load.                                                                                                |
| J200                   | 1-2                | 1-2: Connects the gate of the Q200 load FET to the U200 amplifier.                                                                               |
| J202                   | 1-2                | 1-2: Connects the gate of the Q201 load FET to the U201 amplifier.                                                                               |
| J204                   | 1-2                | 1-2: Connects the gate of the Q202 load FET to the U202 amplifier.                                                                               |
| J206                   | 1-2                | 1-2: Connects the gate of the Q203 load FET to the U203 amplifier.                                                                               |

Evaluates: MAX77647

## MAX77647 Evaluation Kit

## GPIO Quick Start

There  are  two  GPIOs  (GPIO0,  GPIO1)  that  can  serve either  as  standard  GPIOs  or  in  their  alternate  functionalities.  To  get  started  with  the  GPIOs,  use  the  following procedure:

- 1) In the GPIO tab of the GUI, set the desired GPIO's alternate mode enable to 0 (standard GPI or GPO). Make sure the power mode is set to 1.
- 2) Remove jumpers from J5 and J8. Set the direction to 0 (output).
- 3) Set the driver type to 1 (push-pull). If using 0 (opendrain), make sure there is a pullup resistor on the GPIO pin.

Evaluates: MAX77647

- 4) Click the Write button. Place a DMM on the GPIO0 test point on the EV kit. The DMM should read 0V.
- 5) Set the data output to 1 (logic-high) and click the Write button. The DMM should read approximately 1.8V.
- 6) Now set the data output to 0 (logic-low) and click the Write button. The DMM should read 0V.
- 7) Install the appropriate shunt on J5 or J8 to connect the desired GPIO to the GUI GPIO (connect the jumper between 3 and 4) as shown in Figure 8.
- 8) From the GUI, toggle the EV kit GPIO by clicking Write after each time. Click Read to observe the GPIO Input Value update.

Figure 7. GPIO Output Value Box in the GUI

<!-- image -->

Figure 8. GPIO Headers

<!-- image -->

│

## Detailed Description of Hardware (or Software)

## On-Key Options

For applications that require the IC to enable with a userinteractable switch, the EV kit comes with two common types: the push-button (momentary) and the slide-switch (persistent).  The  active-low  enable  pin  (nEN)  has  an internal pullup resistor. Select which type of switch to use with  jumper  J3.  Refer  to  the  MAX77647  data  sheet  for more information on configuring the IC for momentary or persistent switches.

## Changing the Output Voltages

The GUI allows the user to change the output voltages of the SIMO and the LDO. Navigate to the SIMO BuckBoost section or the LDO section in the GUI. Drag the Target  Output  Voltage slider  until  the  desired  output voltage is reached and click Write .

## Electronic Load

The EV kit comes with an electronic load allowing the user to evaluate the SIMO and LDO load current capabilities. On-board  circuits  set  the  load  current  through  the  I 2 C interface. J201, J203, J205, and J207 are used to connect the load to the output of the SBB0, SBB1, SBB2, and LDO respectively.  To  exercise  the  load  transient  response, remove  J200  (for  SBB0),  J202  (for  SBB1),  J204  (for SBB2), and J206 (for LDO), and connect a signal generator to the gate of the load MOSFET (pin 2 of the respective header). Drive the gate with a signal between 1V (off) and 3V (fully on) to apply transients to the output of the SIMO or LDO. Note that there are 0.1Ω sense resistors with test points (called VIL\_SBB0, VIL\_SBB1, and VIL\_SBB2) and a 0.5Ω sense resistor with a test point (called VIL\_LDO) for a 10:1 and 2:1 conversion of load current to voltage.

<!-- image -->

Figure 9. SIMO Output Voltage Section

Figure 10. LDO Output Voltage Section

<!-- image -->

Figure 11. Electronic Load Block Diagram

<!-- image -->

│

## Installation

Visit the product webpage at www.analog.com/ MAX77647evkit and  navigate  to Design  Resources to download the latest version of the EV kit software. Save the EV kit software to a temporary folder and decompress the ZIP file.

## Windows Drivers

Upon connection of a Micro-USB cable between your PC and the EV kit for the first  time,  wait  a  few  minutes  for Windows to automatically install drivers.

## Graphical User Interface (GUI) Details

The GUI drives I 2 C-communication with the EV kit. Every control in the GUI (excluding the Load Control tab) corresponds  directly  to  a  register  within  the  MAX77647.

## Ordering Information

| PART           | IC            | TYPE   |
|----------------|---------------|--------|
| MAX77647EVKIT# | MAX77647AANP+ | EV Kit |

# Denotes RoHS compliant.

Hover your cursor over control names for a description of that register. Refer to the IC data sheet for the complete register map.

## Load Control Tab

The Load Control tab contains controls for load currents on  the  regulator  outputs.  The  GUI  is  capable  of  setting steady-state, transient, and random load currents. To set a load current, use the slider bar or text field to input a value  (mA)  and  check  the Enable box.  Shuffle  through the modes to exercise different load conditions.

The offset and gain values are set by Analog Devices and do not need to be altered.

## MAX77647 EV Kit Bill of Materials

| ITEM   | REF_DES                                                                                                                                       | DNI/DNP   | QTY   | MFG PART #                                                                  | MANUFACTURER                                       | VALUE           | DESCRIPTION                                                                                                             | COMMENTS   |
|--------|-----------------------------------------------------------------------------------------------------------------------------------------------|-----------|-------|-----------------------------------------------------------------------------|----------------------------------------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------|------------|
| 1      | AIN0, AIN1, AIN6, AIN7, GPIO0, GPIO1, NEN, NIRQ, NRST, SCL, SDA, VIL_LDO0, VIL_SBB0- VIL_SBB2                                                 | -         | 15    | 5002                                                                        | KEYSTONE                                           | N/A             | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                   |            |
| 2      | C1, C8, C11, C14                                                                                                                              | -         | 4     | C1608X5R1A226M080AC;GRM188R61 A226ME15;CL10A226MPCNUBE;CL10 A226MPMNUB      | TDK;MURATA;SAMSUNG;SA MSUNG ELECTRO- MECHANICS     | 22UF            | CAP; SMT (0603); 22UF; 20%; 10V; X5R; CERAMIC                                                                           |            |
| 3      | C4, C22, C25-C27, C30, C32- C35, C37-C39, C43, C44, C63, C65-C67, C73, C202, C207, C212, C217, C221-C223, C234, C235, C237, C244, C268, C272- | -         | 38    | GRM155R71E104KE14;C1005X7R1E1 04K050BB;TMK105B7104KVH;CGJ2B3 X7R1E104K050BB | MURATA;TDK;TAIYO YUDEN;TDK                         | 0.1UF           | CAP; SMT (0402); 0.1UF; 10%; 25V; X7R; CERAMIC                                                                          |            |
| 4      | C277 C6                                                                                                                                       | -         | 1     | 16TQC100MYF                                                                 | PANASONIC                                          | 100UF           | CAP; SMT (7343); 100UF; 20%; 16V; TANTALUM                                                                              |            |
| 5      | C9, C10, C16, C29, C36, C40- C42, C239-C242, C269-C271                                                                                        | -         | 15    | C0402C105K8PAC;CC0402KRX5R6BB 105                                           | KEMET;YAGEO                                        | 1UF             | CAP; SMT (0402); 1UF; 10%; 10V; X5R; CERAMIC                                                                            |            |
| 6      | C15                                                                                                                                           | -         | 1     | GRM155R61C225KE44;GRM155R61C 225KE11                                        | MURATA;MURATA                                      | 2.2UF           | CAP; SMT (0402); 2.2UF; 10%; 16V; X5R; CERAMIC                                                                          |            |
| 7      | C21, C28, C31                                                                                                                                 | -         | 3     | C1005X5R1A475K050                                                           | TDK                                                | 4.7UF           | CAP; SMT (0402); 4.7UF; 10%; 10V; X5R; CERAMIC                                                                          |            |
| 8      | C23, C24                                                                                                                                      | -         | 2     | GRM0335C1H270JA01                                                           | MURATA                                             | 27PF            | CAP; SMT (0201); 27PF; 5%; 50V; C0G; CERAMIC                                                                            |            |
| 9      | C68, C69, C71, C72                                                                                                                            | -         | 4     | CL05B103KP5NNN                                                              | SAMSUNG ELECTRONICS                                | 0.01UF          | CAP; SMT (0402); 0.01UF; 10%; 10V; X7R; CERAMIC                                                                         |            |
| 10     | C200, C205, C210, C215, C220, C238, C248-C253                                                                                                 | -         | 12    | C0402C472K5RAC;GRM155R71H472K A01;C1005X7R1H472K050BA                       | KEMET;MURATA;TDK                                   | 4700PF          | CAP; SMT (0402); 4700PF; 10%; 50V; X7R; CERAMIC;                                                                        |            |
| 11     | C201, C206, C211, C216                                                                                                                        | -         | 4     | C0402H102J5GAC                                                              | KEMET                                              | 1000PF          | CAP; SMT (0402); 1000PF; 5%; 50V; C0G; CERAMIC                                                                          |            |
| 12     | C203, C204, C208, C209, C213, C214, C218, C219                                                                                                | -         | 8     | C0402C180J5GAC;GRM1555C1H180J A01;C1005C0G1H180J050BA                       | KEMET;MURATA;TDK                                   | 18PF            | CAP; SMT (0402); 18PF; 5%; 50V; C0G; CERAMIC                                                                            |            |
| 13     | DS1, DS2                                                                                                                                      | -         | 2     | LTST-C190CKT                                                                | LITE-ON ELECTRONICS INC.                           | LTST-C190CKT    | DIODE; LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; -55 DEGC TO +85 DEGC                                         |            |
| 14     | GND1, GND5-GND7                                                                                                                               | -         | 4     | 5011                                                                        | KEYSTONE                                           | N/A             | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
| 15     | GND2-GND4, GND8, GND10, INSBB                                                                                                                 | -         | 6     | 9020 BUSS                                                                   | WEICO WIRE                                         | MAXIMPAD        | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                |            |
| 16     | INLDO, LDO, SBB0-SBB2, VUSB                                                                                                                   | -         | 6     | 5010                                                                        | KEYSTONE                                           | N/A             | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                   |            |
| 17     | INSBBS                                                                                                                                        | -         | 1     | 5000                                                                        | KEYSTONE                                           | N/A             | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;        |            |
| 18     | J1                                                                                                                                            | -         | 1     | 10118193-0001LF                                                             | FCICONNECT                                         | 10118193-0001LF | CONNECTOR; FEMALE; SMT; MICRO USB B TYPE RECEPTACLE; RIGHT ANGLE; 5PINS                                                 |            |
| 19     | J2                                                                                                                                            | -         | 1     | PBC09SAAN                                                                   | SULLINS ELECTRONICS CORP                           | PBC09SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 9PINS; -65 DEGC TO +125 DEGC                                        |            |
| 20     | J3                                                                                                                                            | -         | 1     | TSW-103-07-T-S                                                              | SAMTEC                                             | TSW-103-07-T-S  | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 3PINS                                                        |            |
| 21     | J4, J6, J7, J9, J11-J13, J200- J207                                                                                                           | -         | 15    | TSW-102-07-T-S                                                              | SAMTEC                                             | TSW-102-07-T-S  | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +105 DEGC                                 |            |
| 22     | J5, J8                                                                                                                                        | -         | 2     | TSW-103-07-L-D                                                              | SAMTEC                                             | TSW-103-07-L-D  | CONNECTOR; MALE; THROUGH HOLE; THROUGH HOLE 0.025 POST HEADER; STRAIGHT; 6PINS                                          |            |
| 23     | J10                                                                                                                                           | -         | 1     | PBC03SAAN                                                                   | SULLINS                                            | PBC03SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                                        |            |
| 24     | L1, L9                                                                                                                                        | -         | 2     | DFE201612E-1R5M                                                             | MURATA                                             | 1.5UH           | INDUCTOR; SMT (0806); METAL; 1.5UH; 20%; 2.30A                                                                          |            |
| 25     | L2, L4, L5                                                                                                                                    | -         | 3     | BLM18AG601SN1                                                               | MURATA                                             | 600             | INDUCTOR; SMT (0603); FERRITE-BEAD; 600; TOL=+/-; 0.5A                                                                  |            |
| 26     | L3                                                                                                                                            | -         | 1     | DFE201210S-2R2M=P2                                                          | MURATA                                             | 2.2UH           | EVKIT PART-INDUCTOR; SMT (0805); MAGNETICALLY SHIELDED; 2.2UH; TOL=+/-20%; 1.8A                                         |            |
| 27     | L6                                                                                                                                            | -         | 1     | DFE18SBN1R0ME0                                                              | MURATA                                             | 1UH             | INDUCTOR; SMT (0603); METAL ALLOY; 1UH; 20%; 1.8A                                                                       |            |
| 28     | L7                                                                                                                                            | -         | 1     | DFE201210U-1R5M=P2                                                          | TOKO                                               | 1.5UH           | INDUCTOR; SMT (0805); METAL ALLOY CHIP; 1.5UH; TOL=+/-20%; 1.9A                                                         |            |
| 29     | L8                                                                                                                                            | -         | 1     | DFE201612E-1R0M                                                             | MURATA                                             | 1UH             | INDUCTOR; SMT (0806); WIREWOUND CHIP; 1UH; TOL=+/-20%; 2.9A                                                             |            |
| 30     | L10                                                                                                                                           | -         | 1     | MCEE1005T1R0MHN                                                             | TAIYO YUDEN                                        | 1UH             | INDUCTOR; SMT (0402); METAL; 1UH; 20%; 0.80A                                                                            |            |
| 32     | Q200-Q203                                                                                                                                     | -         | 4     |                                                                             | INTERNATIONAL                                      |                 | TRAN; HEXFET POWER MOSFET; NCH; PQFN8;                                                                                  |            |
|        |                                                                                                                                               |           |       | IRFHM8337TRPBF                                                              |                                                    | IRFHM8337TRPBF  |                                                                                                                         |            |
| 33     | Q205                                                                                                                                          | -         | 1     | FDN360P                                                                     | RECTIFIER                                          |                 | PD-(2.8W); I-(18A); V-(30V)                                                                                             |            |
| 34     | Q206                                                                                                                                          | -         | 1     | 2N7002;2N7002;2N7002;2N7002                                                 | ON SEMICONDUCTOR DIODES INCORPORATED;ST            | FDN360P         | TRANSISTOR, MOSFET P-CHANNEL, SUPERSOT- 3, PD=0.5W, ID=-2.0A, VDSS=-30V,VGSS=+/-20V                                     |            |
|        |                                                                                                                                               | -         |       |                                                                             | MICROELECTRONICS;ON SEMICONDUCTOR;MICRO COMMERCIAL | 2N7002          | TRAN; ; NCH; SOT-23; PD-(0.33W); IC-(0.5A); VCEO- (60V); -55 DEGC TO +150 DEGC                                          |            |
| 35     | R5, R17, R24, R214, R283                                                                                                                      |           | 5     | CRCW0402100KFK;RC0402FR- 07100KL                                            | COMPONENTS VISHAY;YAGEO                            | 100K            | RES; SMT (0402); 100K; 1%; +/-100PPM/DEGC; 0.0630W                                                                      |            |
| 36     | R8, R281, R282, R287, R288                                                                                                                    | -         | 5     | RC0402FR-0710KL;CR0402-FX- 1002GLF                                          | YAGEO;BOURNS                                       | 10K             | RES; SMT (0402); 10K; 1%; +/-100PPM/DEGC; 0.0630W                                                                       |            |
| 37     | R10, R11                                                                                                                                      | -         | 2     | RC0402FR-0727RL                                                             | YAGEO                                              | 27              | RES; SMT (0402); 27; 1%; +/-100PPM/DEGC; 0.0630W                                                                        |            |

Evaluates: MAX77647

## MAX77647 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES                                                                      | DNI/DNP   | QTY   | MFG PART #                                        | MANUFACTURER                        | VALUE          | DESCRIPTION                                                                                                                                                                                                      | COMMENTS   |
|--------|------------------------------------------------------------------------------|-----------|-------|---------------------------------------------------|-------------------------------------|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 38     | R12                                                                          | -         | 1     | ERJ-2RKF1202                                      | PANASONIC                           | 12K            | RES; SMT (0402); 12K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                                |            |
| 39     | R13, R210, R231, R244, R257, R291, R301, R307                                | -         | 8     | CRCW04021M00FK                                    | VISHAY DALE                         | 1M             | RES; SMT (0402); 1M; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                                 |            |
| 40     | R14, R207, R208, R229, R230, R242, R243, R254, R255                          | -         | 9     | ERJ-2RKF1001                                      | PANASONIC                           | 1K             | RES; SMT (0402); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                                 |            |
| 41     | R16                                                                          | -         | 1     | CRCW04024752FK; 9C04021A4752FLHF3; CRCW040247K5FK | VISHAY DALE;YAGEO;VISHAY DALE       | 47.5K          | RES; SMT (0402); 47.5K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                              |            |
| 42     | R18                                                                          | -         | 1     | RCC-0402PW4500F                                   | INTERNATIONAL MANUFACTURING SERVICE | 450            | RES; SMT (0402); 450; 1%; +/-100PPM/DEGK; 0.0800W                                                                                                                                                                |            |
| 43     | R19, R20, R52-R54, R204, R225, R238, R251, R259, R286, R290, R292, R302-R306 | -         | 18    | ERJ-2GE0R00                                       | PANASONIC                           | 0              | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                                                                                                                      |            |
| 44     | R21, R22                                                                     | -         | 2     | ERJ-2GEJ472                                       | PANASONIC                           | 4.7K           | RES; SMT (0402); 4.7K; 5%; +/-200PPM/DEGC; 0.1000W                                                                                                                                                               |            |
| 45     | R23                                                                          | -         | 1     | CRCW0402169KFK                                    | VISHAY DALE                         | 169K           | RES; SMT (0402); 169K; 1%; +/-100PPM/DEGK; 0.0630W                                                                                                                                                               |            |
| 46     | R25, R26                                                                     | -         | 2     | RC0402FR-072K2L                                   | YAGEO                               | 2.2K           | RES; SMT (0402); 2.2K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                               |            |
| 47     | R28                                                                          | -         | 1     | CRCW0402470RFK                                    | VISHAY DALE                         | 470            | RES; SMT (0402); 470; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                                |            |
| 48     | R201, R222, R235, R248, R289                                                 | -         | 5     | 9C04021A1000FL; RC0402FR- 07100RL                 | PANASONIC;YAGEO PHYCOMP             | 100            | RES; SMT (0402); 100; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                                |            |
| 49     | R202, R223, R236, R249                                                       | -         | 4     | RC0402FR-07680RL                                  | YAGEO                               | 680            | RES; SMT (0402); 680; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                                |            |
| 50     | R203, R205, R206, R224, R226, R228, R237, R239, R240, R250, R252, R253       | -         | 12    | ERJ-2RKF2002                                      | PANASONIC                           | 20K            | RES; SMT (0402); 20K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                                |            |
| 51     | R211, R233, R245                                                             | -         | 3     | CRL1206-JW-R100ELF                                | BOURNS                              | 0.1            | RES; SMT (1206); 0.1; 1%; +/-200PPM/DEGC; 0.2500W                                                                                                                                                                |            |
| 52     | R212, R213, R227, R234, R246, R247                                           | -         | 6     | CRCW0402787KFK                                    | VISHAY DALE                         | 787K           | RES; SMT (0402); 787K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                               |            |
| 53     | R258                                                                         | -         | 1     | CSR1206FTR500                                     | STACKPOLE ELECTRONICS INC.          | 0.5            | RES; SMT (1206); 0.5; 1%; +/-100PPM/DEGC; 0.5000W                                                                                                                                                                |            |
| 54     | R277, R279                                                                   | -         | 2     | CRCW06030000Z0                                    | VISHAY DALE                         | 0              | RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                                                                                                                                                      |            |
| 55     | R293, R295, R297, R299                                                       | -         | 4     | ERJ-2RKF4703                                      | PANASONIC                           | 470K           | RES; SMT (0402); 470K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                               |            |
| 56     | R294, R296, R298, R300                                                       | -         | 4     | CRCW0402649KFK                                    | VISHAY DALE                         | 649K           | RES; SMT (0402); 649K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                               |            |
| 57     | SPACER1-SPACER4                                                              | -         | 4     | 9032                                              | KEYSTONE                            | 9032           | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                                                                        |            |
| 58     | SW1                                                                          | -         | 1     | EVQ-Q2K03W                                        | PANASONIC                           | EVQ-Q2K03W     | SWITCH; SPST; SMT; 15V; 0.02A; LIGHT TOUCH SWITCH; RCOIL= OHM; RINSULATION= OHM; PANASONIC                                                                                                                       |            |
| 59     | SW2                                                                          | -         | 1     | CL-SB-12B-11                                      | NIDEC COPAL ELECTRONICS CORP        | CL-SB-12B-11   | SWITCH; SPDT; SMT; 12V; 0.2A; CL-SB SERIES; SLIDE SWITCH; RCOIL=0.05 OHM; RINSULATION=100M OHM                                                                                                                   |            |
| 60     | U1                                                                           | -         | 1     | MAX77647AANP+                                     | MAXIM                               | MAX77647       | EVKIT PART - IC; MAX77647; ULTRA CONFIGURABLE SIMO PMIC FEATURING 3- OUTPUT BUCK-BOOST; 1-LDO FOR LONG BATTERY LIFE PRIMARY CELL APPLICATIONS; PACKAGE OUTLINE DRAWING: 21-100601; PACKAGE CODE: N201C2+1; WLP20 |            |
| 61     | U2                                                                           | -         | 1     | FT2232HL                                          | FUTURE TECHNOLOGY DEVICES INTL LTD. | FT2232HL       | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; LQFP64                                                                                                                                                  |            |
| 62     | U3, U4                                                                       | -         | 2     | MAX8512EXK+                                       | MAXIM                               | MAX8512EXK     | IC, VREG, Ultra-Low-Noise, High PSRR, Adjustable Vout, SC70-5                                                                                                                                                    |            |
| 63     | U5, U6                                                                       | -         | 2     | MAX3395EETC+                                      | MAXIM                               | MAX3395EETC    | IC; TRANS; 15KV ESD-PROTECTED HIGH-DRIVE CURRENT QUAD-LEVEL TRANSLATOR WITH SPEED-UP CIRCUITRY; TQFN12 4X4                                                                                                       |            |
| 64     | U7                                                                           | -         | 1     | AT24CS02-SSHM                                     | MICROCHIP                           | AT24CS02-SSHM  | IC; EPROM; I2C-COMPATIBLE TWO-WIRE SERIAL EEPROM; 150MIL; NSOIC8                                                                                                                                                 |            |
| 65     | U200-U203                                                                    | -         | 4     | MAX44251AUA+                                      | MAXIM                               | MAX44251AUA+   | IC; OPAMP; ULTRA-PRECISION; LOW-NOISE OP AMP; UMAX8                                                                                                                                                              |            |
| 66     | U205                                                                         | -         | 1     | MAX5825AWP+                                       | MAXIM                               | MAX5825AWP+T   | IC; DAC; ULTRA-SMALL; OCTAL CHANNEL; 12-BIT BUFFERED OUTPUT DAC WITH INTERNAL REFERENCE AND I2C INTERFACE; WLP20                                                                                                 |            |
| 67     | U209                                                                         | -         | 1     | MAX11614EEE+                                      | MAXIM                               | MAX11614EEE+   | IC; ADC; LOW-POWER; 8-CHANNEL; I2C; 12-BIT ADC IN ULTRA-SMALL PACKAGE; QSOP16                                                                                                                                    |            |
| 68     | U210                                                                         | -         | 1     | MAX6071AAUT41+                                    | MAXIM                               | MAX6071AAUT41+ | IC; VREF; LOW NOISE; HIGH-PRECISION SERIES VOLTAGE REFERENCE; SOT23-6                                                                                                                                            |            |
| 69     | U211                                                                         | -         | 1     | MAX1697UEUT+                                      | MAXIM                               | MAX1697UEUT+   | IC; INV; INVERTING CHARGE PUMP WITH SHUTDOWN; SOT23-6                                                                                                                                                            |            |
| 70     | Y1                                                                           | -         | 1     | 7M-12.000MAAJ                                     | TXC CORPORATION                     | 12MHZ          | CRYSTAL; SMT; 12MHZ; 18PF; TOL = +/-30PPM; STABILITY = +/-30PPM                                                                                                                                                  |            |
| 71     | PCB                                                                          | -         | 1     | MAX77647                                          | MAXIM                               | PCB            | PCB:MAX77647                                                                                                                                                                                                     | -          |
| 72     | EV_KIT_BOX1, EV_KIT_BOX2                                                     | -         | 18    | NPC02SXON-RC                                      | SULLINS ELECTRONICS CORP.           |                | CONNECTOR; FEMALE; MINI SHUNT; 0.100IN CC; OPEN TOP; JUMPER; STRAIGHT; 2PINS                                                                                                                                     |            |
| 73     | C7                                                                           | DNP       | 0     | CL32A107MPVNNN;C1210C107M8PA C;LMK325BJ107MM      | SAMSUNG ELECTRONICS;KEMET;TAIY      | 100UF          | CAP; SMT (1210); 100UF; 20%; 10V; X5R; CERAMIC                                                                                                                                                                   |            |
|        |                                                                              |           |       |                                                   | O YUDEN                             |                |                                                                                                                                                                                                                  |            |
| 75     | C59, C61, C62 C5                                                             | DNP       | 0     | N/A                                               | N/A                                 | OPEN           | CAPACITOR; SMT (0603); OPEN; FORMFACTOR                                                                                                                                                                          |            |
| 76     | R15, R37, R260                                                               | DNP       | 0     | N/A                                               | N/A                                 | OPEN           | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                                                                                                                 |            |

Evaluates: MAX77647

## MAX77647 Evaluation Kit

## MAX77647 EV Kit Schematic

<!-- image -->

Evaluates: MAX77647

## MAX77647 EV Kit Schematic (continued)

<!-- image -->

│

Evaluates: MAX77647

## MAX77647 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX77647

## MAX77647 EV Kit Schematic (continued)

<!-- image -->

│

Evaluates: MAX77647

## MAX77647 EV Kit Schematic (continued)

<!-- image -->

## MAX77647 Evaluation Kit

## MAX77647 EV Kit PCB Layouts

MAX77647 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX77647 EV Kit PCB Layout-Top View

<!-- image -->

MAX77647 EV Kit PCB Layout-Internal 2

<!-- image -->

MAX77647 EV Kit PCB Layout-Internal 3

<!-- image -->

│

## MAX77647 EV Kit PCB Layouts (continued)

MAX77647 EV Kit PCB Layout-Bottom View

<!-- image -->

MAX77647 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/23            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX77647