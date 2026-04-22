<!-- lastmod 2023-03-16 -->
<!-- image -->

Evaluates: MAX77675

## General Description

The  MAX77675  evaluation  kit  (EV  kit)  allows  for  easy experimentation with the MAX77675 CCM single-inductor, multiple-output (SIMO) regulator, and I 2 C interface.

The  Windows ® -based  software  provides  a  user-friendly graphical  interface  as  well  as  a  detailed  register-based interface to exercise the features of the MAX77675.

Ordering Information appears at end of data sheet.

## MAX77675 Evaluation Kit

## Features

- Easy to Use
- GUI-Drives I 2 C Interface
- Assembled and Fully Tested
- On-Board Electronic Loads
- Electronic Loads with Steady-State, Transient, and Random Modes
- On-Board ADC
- Evaluation of Multiple On-Key Options
- Wide Inductor Pads for Wide Range of Case Codes

Figure 1. MAX77675 EV Kit Photograph

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

319-100986; Rev 0; 3/23

One  Analog  Way,  Wilmington,  MA  0187  U.S.A.    |      Tel:  781.329.4700      |      © 2023  Analog  Devices,  Inc.  All  rights  reserved. ©  2023 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

## Evaluates: MAX77675

Figure 2. EV Kit Simplified Block Diagram

<!-- image -->

## MAX77675 Evaluation Kit

## Evaluates: MAX77675

Figure 3. MAX77675 EV Kit Top View

<!-- image -->

│

Evaluates: MAX77675

Figure 4. MAX77675 EV Kit Bottom View

<!-- image -->

Figure 5. MAX77675 EV Kit Solution Area

<!-- image -->

│

## MAX77675 Evaluation Kit

## Quick Start

Perform  the  following  procedure  to  familiarize  yourself with the EV kit.

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Required Equipment

- MAX77675 EV kit
- MAX77675 EV kit GUI
- Windows-based PC
- Power supply
- DVM
- Micro-USB cable

## Procedure

- 1) Install the GUI software. Visit the product webpage at http://www.analog.com/MAX77675evkit and navigate to Design Resources to download the latest version of the EV kit software. Run the downloaded program to install the EV kit GUI on the computer.

Evaluates: MAX77675

- 2) Install EV kit shunts according to Table 1.
- 3) Connect a Micro-B USB cable between the EV kit USB port labeled 'GUI' and your Windows-based PC.
- 4) Apply a 3.7V supply (set for a 100mA current limit) across the IN and GND2 terminals of the EV kit. Turn the supply on.
- 5) Open the GUI and select Device→Connect in the upper-left corner. Wait for a CONNECTED\_DE -VICE\_LIST window to pop up, and then press the Connect button.
- 6) On the ADC/AMUX tab of the GUI, click the Read buttons next to VSBB0 , VSBB1 , VSBB2 , and VSBB3 . For the MAX77675A, 1.8V, 1.1V, 0.7V, and 3.3V should appear, respectively (Figure 6).
- 7) This concludes the Quick Start procedure. Users are encouraged to explore the device and its register settings with the GUI. During general device evaluation, set the ammeter range to at least 1A to minimize the impact of its series resistance.

For  more  information  on  the  GUI,  see  the Software section.

## Table 1. Default Shunt Positions and Jumper Descriptions

| REFERENCE DESIGNATOR   | DEFAULT POSITION   | FUNCTION                                                                                                         |
|------------------------|--------------------|------------------------------------------------------------------------------------------------------------------|
| J3                     | 3-4                | 1-2: Connects nEN to SW1 (Push-button) 3-4: Connects nEN to SW2 (Slide-switch) 5-6: Connects nEN to GUI (Logic). |
| J4                     | 5-6                | 1-2: Connects VLOGIC to 3.3V 3-4: Connects VLOGIC to SBB0 5-6: Connects VLOGIC to 1.8V                           |
| J5                     | OPEN               | 1-2: Connects 5V from GUI USB to device IN pin                                                                   |
| J201                   | 1-2                | 1-2: Connects SBB0 to the on-board electronic load andADC                                                        |
| J203                   | 1-2                | 1-2: Connects SBB1 to the on-board electronic load andADC                                                        |
| J205                   | 1-2                | 1-2: Connects SBB2 to the on-board electronic load andADC                                                        |
| J207                   | 1-2                | 1-2: Connects SBB3 to the on-board electronic load andADC                                                        |
| J200                   | 1-2                | 1-2: Connects the gate of the Q200 load FET to the U200 amplifier                                                |
| J202                   | 1-2                | 1-2: Connects the gate of the Q201 load FET to the U201 amplifier                                                |
| J204                   | 1-2                | 1-2: Connects the gate of the Q202 load FET to the U202 amplifier                                                |
| J206                   | 1-2                | 1-2: Connects the gate of the Q203 load FET to the U203 amplifier                                                |

│

## MAX77675 Evaluation Kit

Figure 6. Quick Start: Regulator Check with the ADC

<!-- image -->

## EV Kit Features

## On-Key Options

For  applications  that  require  the  IC  to  be  enabled  with a  user-interactable  switch  or  electrical  signal,  the  EV kit  comes  with  three  options:  push-button  (momentary), slide-switch (persistent), and logic (electrical). The activelow  enable  pin  (nEN)  has  an  internal  pullup  resistor. Select which type of on-key to use with jumper J3. Refer to the MAX77675 data sheet for more information on configuring the nEN pin.

When  jumper  J3  is  installed  to  position  5-6,  the  'GUI Output to nEN' control in the Global Resources tab can be used to manually apply a HIGH or LOW signal to nEN.

## Electronic Load

The  EV  kit  comes  with  an  electronic  load  that  allows the user to evaluate the SIMO load current capabilities. On-board circuits set the load current through I 2 C. J201, J203, J205, and J207 connect the load to the output of the  SBB0, SBB1, SBB2, and SBB3, respectively. There are  two  options  to  exercise  load  transient  response.  In the Load  Control tab  of  the  GUI  offers  load  transient controls. If faster rise and fall times are required, remove J200  (for  SBB0),  J202  (for  SBB1),  J204  (for  SBB2),  or J206  (for  SBB3)  and  connect  a  signal  generator  to  the gate of the load MOSFET (pin 2 of the respective header). Drive  the  gate  with  a  signal  between  1V  (off)  and  3V (fully  on)  to  apply  transients  to  the  output  of  the  SIMO or  LDO.  Note  that  there  are  0.2Ω  sense  resistors  with test points (called VIL\_SBB0, VIL\_SBB1, VIL\_SBB2, and VIL\_SBB3) for a 1:5 conversion of load current to voltage. See the Software section to learn how to set the load current from the GUI.

## On-Board ADC (MAX11614)

An on-board ADC is available to convert the output voltages of SBB0, SBB1, SBB2, and SBB3. Test points AIN0, AIN1, AIN6, and AIN7 are also measured. The GUI does the appropriate conversions. See the Software section for how to read these values from the GUI.

## Software

The graphical user interface (GUI) software allows for convenient, quick, and thorough evaluation of the MAX77675.

The  GUI  has  individual  tabs  for  each  functional  block of  the  device  (global  resources,  interrupts/status,  power sequencing, SIMO) and two additional tabs for controlling EV kit hardware (load control and ADC). In addition, the FPS Configuration tab contains a plot of the power-up and power-down sequences. See Figure 8 and Figure 9 for screenshots of the GUI upon opening.

│

<!-- image -->

Figure 7. Electronic Load Block Diagram

Figure 8. MAX77655/75 EV Kit Selection

<!-- image -->

Figure 9. MAX77675 EV Kit GUI

<!-- image -->

## Installation

Visit  the  product  webpage  at http://www.analog.com/ max77675evkit and  navigate  to  Design  Resources  to download the latest version of the EV kit software. Save the EV kit software to a temporary folder and decompress the ZIP file.

## Windows Drivers

Upon connection of a Micro-USB cable between your PC and the EV kit for the first  time,  wait  a  few  minutes  for Windows to automatically install drivers.

## Graphical User Interface (GUI) Details

The GUI drives I 2 C communication with the EV kit. Every control  in  the  GUI  (excluding  GUI  Output  to  nEN,  the Load Control tab, and the ADC tab) corresponds directly to a register within the MAX77675. Hover your cursor over control names for a description of that register. The complete register map is available in the Register Map tab of the GUI and the IC data sheet.

## Load Control Tab

The Load Control tab contains controls for load currents on  the  regulator  outputs.  The  GUI  is  capable  of  setting steady-state, transient, and random load currents. To set a load current, use the slider bar or text field to input a value  (mA)  and  check  the Enable box.  Shuffle  through the modes to exercise different load conditions.

The offset and gain values are set by Analog Devices and do not need to be altered.

## ADC Tab

The ADC tab  allows  users  to  convert  important  voltage and current signals to digital readings. To read a signal, click the Read button and examine the Value column.

## Tips

## Testing Custom Power-Up Sequences

To test custom power-up sequences, send the device to standby state by setting the 'Software Control Functions' control to 'Software Standby' in the Global Resources tab. All  channels  on  the  power  sequence  should  power down.

Then, use the 'SBBx Enable Control for SIMO' controls in either the SIMO Buck-Boost or FPS Configuration tab.

Finally, exit standby state and trigger the power sequence using one of the following methods:

- Send a 'Software Exit Standby' command using the 'Software Control Functions' control.
- Press the on-board on-key or toggle the slide switch if using either push-button or slide-switch mode.

## Measuring Quiescent Current

The on-board electronic load and voltage dividers for the ADCs may affect quiescent current measurements while the device is in low-power mode. Remove jumpers J201, J203,  J205,  and  J207  before  making  quiescent  current measurements in low-power mode.

For stable, accurate measurements, set the input current ammeter to 100NPLC and monitor the average reading.

If no settings are changed on the MAX77675 EV kit, the quiescent  current  after  applying  power  to  IN  is  about 300nA. After waking up the device, quiescent current is about 4.3μA.

## Applying Fast Line Transients

A large bulk capacitor (C2) is located at the power input connection  points  to  attenuate  any  ringing  on  the  input voltage  due  to  long  cables  between  the  board  and  the supply.  Before  applying  fast  line  transients,  remove  this capacitor.

## Ordering Information

| PART           | IC            | TYPE   |
|----------------|---------------|--------|
| MAX77675EVKIT# | MAX77675AEWE+ | EV kit |

#Denotes RoHS compliance.

## MAX77675 EV Kit Bill of Materials

| ITEM   | REF_DES                                                            | DNI/DNP   | QTY   | MFG PART #                                                                            | MANUFACTURER                                      | VALUE        | DESCRIPTION                                                                                                                                                        |
|--------|--------------------------------------------------------------------|-----------|-------|---------------------------------------------------------------------------------------|---------------------------------------------------|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | C3, C10                                                            | -         | 2     | GRM155R61A106ME44; GRM155R61A106ME11; 0402ZD106MAT2A; CL05A106MP5NUNC                 | MURATA;MURATA; AVX;SAMSUNG                        | 10UF         | CAP; SMT (0402); 10UF; 20%; 10V; X5R; CERAMIC                                                                                                                      |
| 2      | C4                                                                 | -         | 1     | C0402C103K5RAC; GRM155R71H103KA88; C1005X7R1H103K050BE; CL05B103KB5NNN; UMK105B7103KV | KEMET;MURATA;TDK; SAMSUNG ELECTRONIC; TAIYO YUDEN | 0.01UF       | CAP; SMT (0402); 0.01UF; 10%; 50V; X7R; CERAMIC                                                                                                                    |
| 4      | C5, C6, C14                                                        | -         | 2     | C1608X5R1A226M080AC; GRM188R61A226ME15; CL10A226MPCNUBE; CL10A226MPMNUB               | TDK;MURATA; SAMSUNG; SAMSUNG ELECTRO-MECHANICS    | 22UF         | CAP; SMT (0603); 22UF; 20%; 10V; X5R; CERAMIC                                                                                                                      |
| 5      | C8, C11                                                            | -         | 2     | GRM188R60J476ME15                                                                     | MURATA                                            | 47UF         | CAP; SMT (0603); 47UF; 20%; 6.3V; X5R; CERAMIC                                                                                                                     |
| 6      | L1                                                                 | -         | 1     | DFE201610E-1R5M=P2                                                                    | MURATA                                            | 1.5UH        | INDUCTOR; SMT (0806); MAGNETICALLY SHIELDED; 1.5UH; TOL=+/-20%; 2.1A                                                                                               |
| 7      | U1                                                                 | -         | 1     | MAX77675AEWE+                                                                         | MAXIM                                             | MAX77675     | EVKIT PART - IC; MAX77675; LOWIQ SIMO PMIC WITH 0.5V TO 5.5V OUTPUTS DELIVERING UP TO 700MA TOTAL OUTPUT CURRENT; PACKAGE OUTLINE DRAWING: 21-100374               |
|        | EVALUATION                                                         |           |       |                                                                                       |                                                   |              |                                                                                                                                                                    |
| 1      | AIN0, AIN1, AIN6, AIN7, NEN_EXT, NIRQ, SCL, SDA, VIL_SBB0-VIL_SBB3 | -         | 12    | 5002                                                                                  | KEYSTONE                                          | N/A          | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                                                              |
| 2      | B0_SNS, B1_SNS-B3_SNS,                                             | -         | 5     | 5000                                                                                  | KEYSTONE                                          | N/A          | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER                                                                 |
| 3      | IN_SNS C1, C234, C235                                              | -         | 3     | GRM155R61C104KA88                                                                     | MURATA                                            | 0.1UF        | PLATE FINISH; CAP; SMT (0402); 0.1UF; 10%; 16V; X5R; CERAMIC                                                                                                       |
| 4      | C2                                                                 | -         | 1     | 16TQC100MYF C0402C103K5RAC;                                                           | PANASONIC                                         | 100UF        | CAP; SMT (7343); 100UF; 20%; 16V; TANTALUM                                                                                                                         |
| 5      | C19, C20, C40, C43, C45-C50                                        | -         | 10    | GRM155R71H103KA88; C1005X7R1H103K050BE; CL05B103KB5NNN; UMK105B7103KV                 | KEMET;MURATA; TDK;SAMSUNG ELECTRONIC; TAIYO YUDEN | 0.01UF       | CAP; SMT (0402); 0.01UF; 10%; 50V; X7R; CERAMIC                                                                                                                    |
| 6      | C7, C9, C200, C205, C210, C215,C220, C238, C248, C250-C252         | -         | 12    | C0402C472J5RAC                                                                        | KEMET                                             | 4700PF       | CAP; SMT (0402); 4700PF; 5%; 50V; X7R; CERAMIC                                                                                                                     |
| 7      | C16, C29, C36,                                                     | -         | 5     | C0402C105K8PAC;                                                                       | KEMET;YAGEO                                       | 1UF          | CAP; SMT (0402); 1UF; 10%; 10V; X5R; CERAMIC                                                                                                                       |
| 8      | C41, C42 C21, C28, C31                                             | -         | 3     | CC0402KRX5R6BB105 C1005X5R1A475K050                                                   | TDK                                               | 4.7UF        | CAP; SMT (0402); 4.7UF; 10%; 10V; X5R; CERAMIC                                                                                                                     |
| 9      | C22, C25-C27, C30, C32- C35, C37-C39,C44, C73                      | -         | 14    | GRM155R71A104JA01                                                                     | MURATA                                            | 0.1UF        | CAP; SMT (0402); 0.1UF; 5%; 10V; X7R; CERAMIC                                                                                                                      |
| 10     | C23, C24                                                           | -         | 2     | C0402C0G500270JNP; GRM1555C1H270JA01                                                  | VENKEL LTD.;MURATA                                | 27PF         | CAP; SMT (0402); 27PF; 5%; 50V; C0G; CERAMIC                                                                                                                       |
| 11     | C63, C65-C67                                                       | -         | 4     | ANY                                                                                   | ANY                                               | 0.1UF        | CAPACITOR; SMT; 0402; CERAMIC; 0.1uF; 10V; 10%; X5R; - 55degC to + 125degC; 0 +/-30PPM/degC; FORMFACTOR ; CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 10V;        |
| 12     | C68, C69, C71, C72, C201, C206, C211, C216                         | -         | 8     | ANY                                                                                   | ANY                                               | 0.01UF       | TOL=10%; MODEL=C0402C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; |
| 13     | C202, C207, C212, C217, C221-C223, C237, C244, C268, C272-C277     | -         | 16    | ANY                                                                                   | ANY                                               | 0.1UF        | TC=X7R; FORMFACTOR                                                                                                                                                 |
| 14     | C203, C204, C208, C209, C213, C214, C218, C219                     | -         | 8     | GRM155R71H102JA01; GCM155R71H102JA37                                                  | MURATA;MURATA                                     | 1000PF       | CAP; SMT (0402); 1000PF; 5%; 50V; X7R; CERAMIC                                                                                                                     |
| 15     | C239-C242                                                          | -         | 4     | ANY                                                                                   | ANY                                               | 1UF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR                                               |
| 16     | C269-C271                                                          | -         | 3     | ANY                                                                                   | ANY                                               | 1UF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 16V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR                                                |
| 17     | D1                                                                 | -         | 1     | B0530W-7-F                                                                            | DIODES INCORPORATED                               | B0530W       | DIODE; SCH; SMT (SOD-123); PIV=30V; IF=0.5A                                                                                                                        |
| 18     | DS1, DS2                                                           | -         | 2     | LTST-C190CKT                                                                          | LITE-ON ELECTRONICS INC.                          | LTST-C190CKT | DIODE; LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; -55 DEGC TO +85 DEGC                                                                                    |
| 19     | GND1, GND5-GND7 GND2-GND4,                                         | - -       | 4 6   | 5011 9020                                                                             | KEYSTONE WEICO WIRE                               | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                            |
| 20     | GND8, GND10, IN                                                    |           |       | BUSS                                                                                  |                                                   | MAXIMPAD     | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWNBUS TYPE-S; 20AWG                                                                            |

Evaluates: MAX77675

## MAX77675 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES                                             | DNI/DNP   | QTY   | MFG PART #                                        | MANUFACTURER                                                                           | VALUE                | DESCRIPTION                                                                                                                   |
|--------|-----------------------------------------------------|-----------|-------|---------------------------------------------------|----------------------------------------------------------------------------------------|----------------------|-------------------------------------------------------------------------------------------------------------------------------|
| 21     | GNDS_SBB0-GNDS_SBB3, GND_SNS                        | -         | 5     | 5001                                              | KEYSTONE                                                                               | N/A                  | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;            |
| 22     | J1                                                  | -         | 1     | 10118193-0001LF                                   | FCI CONNECT                                                                            | 10118193-0001LF      | CONNECTOR; FEMALE; SMT; MICRO USB B TYPE RECEPTACLE; RIGHT ANGLE; 5PINS                                                       |
| 23     | J2                                                  | -         | 1     | PBC06SAAN                                         | SULLINS ELECTRONICS CORP.                                                              | PBC06SAAN            | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS; -65 DEGC TO +125 DEGC                                              |
| 24     | J3, J4                                              | -         | 2     | PBC03DAAN                                         | SULLINS ELECTRONICS CORP.                                                              | PBC03DAAN            | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS; -65 DEGC TO +125 DEGC                                              |
| 25     | J5, J200-J207                                       | -         | 9     | TSW-102-07-T-S                                    | SAMTEC                                                                                 | TSW-102-07-T-S       | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +105 DEGC                                       |
| 26     | J9                                                  | -         | 1     | S2B-PH-K-S(LF)(SN)                                | JST MANUFACTURING                                                                      | S2B-PH-K-S(LF)(SN)   | CONNECTOR; MALE; THROUGH HOLE; 2.0MM PITCH; DISCONNECTABLE CRIMP STYLE CONNECTOR; SIDE ENTRY TYPE; RIGHT ANGLE; 2PINS         |
| 27     | L2, L4, L5                                          | -         | 3     | BLM18AG601SN1                                     | MURATA                                                                                 | 600                  | INDUCTOR; SMT (0603); FERRITE-BEAD; 600; TOL=+/-; 0.5A                                                                        |
| 28     | L3                                                  | -         | 1     | HTEG2012FE-1R5MDR                                 | CYNTEC                                                                                 | 1.5UH                | INDUCTOR; SMT (0805); FERRITE; 1.5UH; 20%; 1.6A                                                                               |
| 29     | L7                                                  | -         | 1     | HMLQ20161T-1R0MDR                                 | CYNTEC                                                                                 | 1UH                  | INDUCTOR; SMT (0806); COMPOSITE; 1UH; 20%; 3.9A                                                                               |
| 30     | L8                                                  | -         | 1     | DFE252012F-2R2M                                   | MURATA                                                                                 | 2.2UH                | INDUCTOR; SMT (1008); SHIELDED; 2.2UH; 20%; 2.3A                                                                              |
| 31     | L9                                                  | -         | 1     | MAMK2520H2R2M                                     | TAIYO YUDEN                                                                            | 2.2UH                | INDUCTOR; SMT (1008); WIREWOUND; 2.2UH; 20%; 2.2A                                                                             |
| 32     | MISC1                                               | -         | 1     | AK67421-2                                         | ASSMANN                                                                                | AK67421-2            | CABLE; MALE; USB; USB2.0 MICRO CONNECTION CABLE; USB B MICRO MALE TO USB A MALE; 2000 MILLIMETERS; 5PINS-4PINS                |
| 33     | PVDD, SBB0-SBB3, VDD, VUSB                          | -         | 7     | 5010                                              | KEYSTONE                                                                               | N/A                  | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                         |
| 34     | Q1, Q2                                              | -         | 2     | BSS138                                            | ONSEMICONDUCTOR                                                                        | BSS138               | TRAN; LOGIC LEVEL ENHANCEMENT MODEFIELD EFFECT TRANSISTOR; NCH; SOT-23; PD-(0.36W); I-(0.22A); V-(50V); -55 DEGC TO +150 DEGC |
| 35     | Q200-Q203                                           | -         | 4     | IPC100N04S5L1R1ATMA1                              | INFINEON                                                                               | IPC100N04S5L1R1ATMA1 | TRAN; OPTIMOS 5 POWER-TRANSISTOR; NCH; PG-TDSON-8-34; PD-(150W); I-(100A); V-(40V)                                            |
| 36     | Q205                                                | -         | 1     | FDN360P                                           | ONSEMICONDUCTOR                                                                        | FDN360P              | TRANSISTOR, MOSFET P-CHANNEL, SUPERSOT-3, PD=0.5W, ID=-2.0A, VDSS=-30V,VGSS=+/-20V                                            |
| 37     | Q206                                                | -         | 1     | 2N7002;2N7002; 2N7002;2N7002                      | DIODES INCORPORATED; ST MICROELECTRONICS; ONSEMICONDUCTOR; MICRO COMMERCIAL COMPONENTS | 2N7002               | TRAN; ; NCH; SOT-23; PD-(0.33W); IC-(0.5A); VCEO-(60V); -55 DEGC TO +150 DEGC                                                 |
| 38     | R1, R286, R302-R306                                 | -         | 7     | ANY                                               | ANY                                                                                    | 0                    | RESISTOR; 0402; 0 OHM; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                                            |
| 39     | R2, R6                                              | -         | 2     | ERJ-2GEJ103                                       | PANASONIC                                                                              | 10K                  | RES; SMT (0402); 10K; 5%; +/-200PPM/DEGC; 0.1000W                                                                             |
| 40     | R3, R8, R33                                         | -         | 3     | CRCW040210M0FK                                    | VISHAY DALE                                                                            | 10M                  | RES; SMT (0402); 10M; 1%; +/-100PPM/DEGC; 0.0630W                                                                             |
| 41     | R4, R13, R210, R231, R244, R257, R301               | -         | 7     | CRCW04021M00FK                                    | VISHAY DALE                                                                            | 1M                   | RES; SMT (0402); 1M; 1%; +/-100PPM/DEGC; 0.0630W                                                                              |
| 42     | R5, R17, R24, R214,                                 | -         | 5     | ANY                                               | ANY                                                                                    | 100K                 | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                                             |
| 43     | R283 R7, R32                                        | -         | 2     | CRCW04021R00FK                                    | VISHAY DALE                                                                            | 1                    | RES; SMT (0402); 1; 1%; +/-100PPM/DEGC; 0.0630W                                                                               |
| 44     | R9, R19, R20, R29, R30, R34, R52-R54                | -         | 9     | ERJ-2GE0R00                                       | PANASONIC                                                                              | 0                    | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                                   |
| 45     | R10, R11                                            | -         | 2     | RC0402FR-0727RL                                   | YAGEO                                                                                  | 27                   | RES; SMT (0402); 27; 1%; +/-100PPM/DEGC; 0.0630W                                                                              |
| 46     | R12                                                 | -         | 1     | CRCW040212K0FK; MCR01MZPF1202                     | VISHAY DALE; ROHM SEMICONDUCTOR                                                        | 12K                  | RES; SMT (0402); 12K; 1%; +/-100PPM/DEGC; 0.0630W                                                                             |
| 47     | R14, R207, R208, R229, R230, R242, R243, R254, R255 | -         | 9     | ANY                                               | ANY                                                                                    | 1K                   | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                                               |
| 48     | R16                                                 | -         | 1     | CRCW04024752FK; 9C04021A4752FLHF3; CRCW040247K5FK | VISHAY DALE; YAGEO;VISHAY DALE                                                         | 47.5K                | RES; SMT (0402); 47.5K; 1%; +/-100PPM/DEGC; 0.0630W                                                                           |
| 49     | R18                                                 | -         | 1     | RC0402FR-07150RL                                  | YAGEO                                                                                  | 150                  | RES; SMT (0402); 150; 1%; +/-100PPM/DEGC; 0.0630W                                                                             |
| 50     | R21,                                                | -         | 2     | CRCW04024K70FK; MCR01MZPF4701                     | VISHAY DALE;                                                                           |                      | RES; SMT (0402); 4.7K; 1%; +/-100PPM/DEGC;                                                                                    |
|        | R22                                                 |           |       |                                                   | ROHM SEMICONDUCTOR                                                                     | 4.7K                 | 0.0630W                                                                                                                       |

Evaluates: MAX77675

## MAX77675 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES                                                                | DNI/DNP   | QTY   | MFG PART #                         | MANUFACTURER                        | VALUE          | DESCRIPTION                                                                                                      |
|--------|------------------------------------------------------------------------|-----------|-------|------------------------------------|-------------------------------------|----------------|------------------------------------------------------------------------------------------------------------------|
| 51     | R23                                                                    | -         | 1     | CRCW0402169KFK                     | VISHAY DALE                         | 169K           | RES; SMT (0402); 169K; 1%; +/-100PPM/DEGK; 0.0630W                                                               |
| 52     | R25, R26                                                               | -         | 2     | RC0402FR-072K2L                    | YAGEO                               | 2.2K           | RES; SMT (0402); 2.2K; 1%; +/-100PPM/DEGC; 0.0630W                                                               |
| 53     | R27                                                                    | -         | 1     | CRCW040222R0FK                     | VISHAY DALE                         | 22             | RES; SMT (0402); 22; 1%; +/-100PPM/DEGC; 0.0630W                                                                 |
| 54     | R28                                                                    | -         | 1     | CRCW0402470RFK                     | VISHAY DALE                         | 470            | RES; SMT (0402); 470; 1%; +/-100PPM/DEGC; 0.0630W                                                                |
| 55     | R201, R222, R235, R248, R289                                           | -         | 5     | 9C04021A1000FL; RC0402FR-07100RL   | PANASONIC; YAGEO PHYCOMP            | 100            | RES; SMT (0402); 100; 1%; +/-100PPM/DEGC; 0.0630W                                                                |
| 56     | R202, R223, R236, R249                                                 | -         | 4     | RC0402FR-07680RL                   | YAGEO                               | 680            | RES; SMT (0402); 680; 1%; +/-100PPM/DEGC; 0.0630W                                                                |
| 57     | R203, R224, R237, R250                                                 | -         | 4     | CRCW040220K0FK                     | VISHAY DALE                         | 20K            | RES; SMT (0402); 20K; 1%; +/-100PPM/DEGC; 0.0630W                                                                |
| 58     | R204, R225, R238, R251                                                 | -         | 4     | CRCW040210R0JN                     | VISHAY DALE                         | 10             | RES; SMT (0402); 10; 5%; +/-200PPM/DEGK; 0.0630W                                                                 |
| 59     | R205, R206, R226, R228, R239, R240, R252, R253, R281, R282, R287, R288 | -         | 12    | RC0402FR-0710KL; CR0402-FX-1002GLF | YAGEO;BOURNS                        | 10K            | RES; SMT (0402); 10K; 1%; +/-100PPM/DEGC; 0.0630W                                                                |
| 60     | R211, R233, R245, R258                                                 | -         | 4     | LRC-LR1206LF-01-R200-F             | TT ELECTRONICS                      | 0.2            | RES; SMT (1206); 0.2; 1%; +/-100PPM/DEGC; 0.5000W                                                                |
| 61     | R212, R213, R227, R234, R246, R247,R259, R260                          | -         | 8     | CRCW0402787KFK                     | VISHAY DALE                         | 787K           | RES; SMT (0402); 787K; 1%; +/-100PPM/DEGC; 0.0630W                                                               |
| 62     | R277, R279                                                             | -         | 2     | ANY                                | ANY                                 | 0              | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM; FORMFACTOR                                                 |
| 63     | R293, R295, R297, R299                                                 | -         | 4     | ERJ-2RKF4703                       | PANASONIC                           | 470K           | RES; SMT (0402); 470K; 1%; +/-100PPM/DEGC; 0.0630W                                                               |
| 64     | R294, R296, R298, R300                                                 | -         | 4     | CRCW0402649KFK                     | VISHAY DALE                         | 649K           | RES; SMT (0402); 649K; 1%; +/-100PPM/DEGC; 0.0630W                                                               |
| 65     | SW1                                                                    | -         | 1     | EVQ-Q2K03W                         | PANASONIC                           | EVQ-Q2K03W     | SWITCH; SPST; SMT; 15V; 0.02A; LIGHT TOUCH SWITCH; RCOIL= OHM; RINSULATION= OHM; PANASONIC                       |
| 66     | SW2                                                                    | -         | 1     | CL-SB-12B-11                       | NIDEC COPAL ELECTRONICS CORP        | CL-SB-12B-11   | SWITCH; SPDT; SMT; 12V; 0.2A; CL-SB SERIES; SLIDE SWITCH; RCOIL=0.05 OHM; RINSULATION=100MOHM                    |
| 67     | U2                                                                     | -         | 1     | FT2232HL                           | FUTURE TECHNOLOGY DEVICES INTL LTD. | FT2232HL       | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; LQFP64                                                  |
| 68     | U3, U4                                                                 | -         | 2     | MAX8512EXK+                        | MAXIM                               | MAX8512EXK     | IC, VREG, Ultra-Low-Noise, High PSRR, Adjustable Vout, SC70-5                                                    |
| 69     | U5                                                                     | -         | 1     | MAX3395EETC+                       | MAXIM                               | MAX3395EETC    | IC; TRANS; 15KV ESD-PROTECTED HIGH-DRIVE CURRENT QUAD- LEVEL TRANSLATOR WITH SPEED-UP CIRCUITRY; TQFN12 4X4      |
| 70     | U7                                                                     | -         | 1     | AT24CS02-SSHM                      | MICROCHIP                           | AT24CS02-SSHM  | IC; EPROM; I2C-COMPATIBLE TWO-WIRE SERIAL EEPROM; 150MIL; NSOIC8                                                 |
| 71     | U200-U203                                                              | -         | 4     | MAX44251AUA+                       | MAXIM                               | MAX44251AUA+   | IC; OPAMP; ULTRA-PRECISION; LOW-NOISE OP AMP; UMAX8                                                              |
| 72     | U205                                                                   | -         | 1     | MAX5825AWP+                        | MAXIM                               | MAX5825AWP+T   | IC; DAC; ULTRA-SMALL; OCTAL CHANNEL; 12-BIT BUFFERED OUTPUT DAC WITH INTERNAL REFERENCE AND I2C INTERFACE; WLP20 |
| 73     | U209                                                                   | -         | 1     | MAX11614EEE+                       | MAXIM                               | MAX11614EEE+   | IC; ADC; LOW-POWER; 8-CHANNEL; I2C; 12-BIT ADC IN ULTRA-SMALL PACKAGE; QSOP16                                    |
| 74     | U210                                                                   | -         | 1     | MAX6071AAUT41+                     | MAXIM                               | MAX6071AAUT41+ | IC; VREF; LOWNOISE; HIGH-PRECISION SERIES VOLTAGE REFERENCE; SOT23-6                                             |
| 75     | U211                                                                   | -         | 1     | MAX1697UEUT+                       | MAXIM                               | MAX1697UEUT+   | IC; INV; INVERTING CHARGE PUMP WITH SHUTDOWN; SOT23-6                                                            |
| 76     | Y1                                                                     | -         | 1     | 7M-12.000MAAJ                      | TXC CORPORATION                     | 12MHZ          | CRYSTAL; SMT; 12MHZ; 18PF; TOL = +/-30PPM; STABILITY = +/-30PPM                                                  |
| 77     | PCB                                                                    | -         | 1     | MAX77675                           | MAXIM                               | PCB            | PCB:MAX77675                                                                                                     |
| 78     | EV_KIT_BOX1                                                            | -         | 10    | NPC02SXON-RC                       | SULLINS ELECTRONICS CORP.           |                | CONNECTOR; FEMALE; MINI SHUNT; 0.100IN CC; OPEN TOP; JUMPER; STRAIGHT; 2PINS                                     |
| 79     | B0_S, B1_S-B3_S                                                        | DNP       | 0     | U.FL-R-SMT-1                       | HIROSE ELECTRIC CO LTD.             | U.FL-R-SMT-1   | CONNECTOR; MALE; SMT; ULTRA SMALL SURFACE                                                                        |
| 80     | C12                                                                    | DNP       | 0     | TPSD107K020R0085                   | AVX                                 | 100UF          | MOUNTCOAXIAL CONNECTOR; STRAIGHT; 2PINS CAP; SMT (7343); 100UF; 10%; 20V; TANTALUM                               |
| 81     | L6                                                                     | DNP       | 0     | DFE201610E-1R5M=P2                 | MURATA                              | 1.5UH          | INDUCTOR; SMT (0806); MAGNETICALLY SHIELDED; 1.5UH; TOL=+/-20%; 2.1A                                             |
| 82     | C13, C15, C17, C18, C53,                                               | DNP       | 0     | N/A                                | N/A                                 | OPEN           | CAPACITOR; SMT (0402); OPEN; FORMFACTOR                                                                          |
| 83     | C54, C56-C59, C61, C62                                                 | DNP       | 0     |                                    | N/A                                 |                | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                 |
|        | R15                                                                    |           |       | N/A                                |                                     | OPEN           |                                                                                                                  |
| 84     | R37                                                                    | DNP       | 0     | N/A                                | N/A                                 | OPEN           | RESISTOR; 0603; OPEN; FORMFACTOR                                                                                 |

Evaluates: MAX77675

## MAX77675 EV Kit Schematic Diagram

| 8-bit Read    | OR 0xA5 0x81,0x89,0x91             | 0x93 0b100x xx01   | 0b0110 0111 0b1001 0011 0x67   | 0b0011 1111 0x3F                    | 0b1010 0001        |
|---------------|------------------------------------|--------------------|--------------------------------|-------------------------------------|--------------------|
| 8-bit Write   | 0x80,0x88,0x90 0b100x xx00 OR 0xA4 | 0x92               | 0x66 0b1001 0010 0b0110 0110   | 0x3E 0b0010 1000 0x10 * 0b0011 1110 | 0b1010 0000        |
| 7-bit         | 0x40,0x44,0x48 OR 0x52 0b100 xxx0  | 0x49 0b100 1001    | 0x33 0b011 0011                | 0b001 1111 0x1F                     | 0b101 0000 0x50 ** |
| Configuration | Bitfield ADDR[1:0] OTP             | Internal Test mode | N/A                            | ADDR1=ADDR0=VDDIO                   | A0=A1=A2=GND       |
| Part Number   | (PMIC) MAX77675                    | (PMIC) MAX77675    | MAX11614 (ADC)                 | MAX5825 (DAC)                       | (EEPROM) AT24CS02  |

*MAX5825 ALSO RESPONDS TO AN I2C BROADCAST ADDRESS 0b0010 1000

Evaluates: MAX77675

**AT24CS02 ALSO RESPONDS TO 0b1011 0001 FOR READING THE SERIAL NUMBER

│

## MAX77675 EV Kit Schematic Diagram (continued)

<!-- image -->

Evaluates: MAX77675

## MAX77675 EV Kit Schematic Diagram (continued)

<!-- image -->

│

## MAX77675 EV Kit Schematic Diagram (continued)

<!-- image -->

Evaluates: MAX77675

## MAX77675 EV Kit Schematic Diagram (continued)

<!-- image -->

│

## MAX77675 EV Kit Schematic Diagram (continued)

<!-- image -->

│

Evaluates: MAX77675

## MAX77675 EV Kit PCB Layout Diagrams

MAX77675 EV Kit PCB Layout-Silkscreen Top

<!-- image -->

MAX77675 EV Kit PCB Layout-Top

<!-- image -->

MAX77675 EV Kit PCB Layout-Internal 2

<!-- image -->

│

## MAX77675 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX77675 EV Kit PCB Layout-Internal 3

MAX77675 EV Kit PCB Layout-Bottom

<!-- image -->

MAX77675 EV Kit PCB Layout-Silkscreen Bottom

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/23            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

Evaluates: MAX77675