<!-- lastmod 2022-08-03 -->
## MAX77659 Evaluation Kit

## General Description

The  MAX77659  evaluation  kit  (EV  kit)  allows  for  easy experimentation with various MAX77659 features, including  a  switching  charger,  a  SIMO  buck-boost  regulator with  three  buck-boost  outputs,  a  linear  regulator,  on/off controller,  and  I 2 C  interface.  Windows ® -based  software provides a user-friendly graphical interface as well as a detailed register-based interface to exercise the features of the MAX77659.

Ordering Information appears at end of data sheet.

## Features

- Easy to Use
- GUI Drives I 2 C Interface
- GPIO LEDs
- Assembled and Fully Tested
- On-Board Electronic Loads · Steady-State, Transient, and Random Modes
- Evaluates Push-Button, Slide-Switch, and Logic Mode On-Key Options

Figure 1. MAX77659 EV Kit Photo

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

Evaluates: MAX77659

<!-- image -->

Evaluates: MAX77659

Figure 2. MAX77659 EV Kit Simplified Diagram

<!-- image -->

Figure 3. MAX77659 EV Kit-Top View

<!-- image -->

## MAX77659 Evaluation Kit

## Evaluates: MAX77659

Figure 4. MAX77659 EV Kit-Bottom View

<!-- image -->

Figure 5. MAX77659 EV Kit-Solution Area

<!-- image -->

## MAX77659 Evaluation Kit

## Quick Start

## Required Equipment

- MAX77659 EV Kit
- GUI
- Windows-based PC
- Power Supply
- Battery
- Ammeter
- DVM
- Micro-USB Cable

Follow this procedure to familiarize yourself with the EV kit.

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

- 1) Install the GUI software. Visit the product webpage at: http://www.maximintegrated.com/MAX77659evkit and navigate to Design Resources to download the latest version of the EV kit software. Save the EV kit software to a temporary folder and extract the files from the ZIP file.
- 2) Install EV kit shunts according to Table 1.
- 3) Connect a Micro-B USB cable between the EV kit USB port labeled 'GUI' and your Windows-based PC.
- 4) Apply a 3.7V supply (set for 100mA current limit) through an ammeter (set for 10mA range) across the VBATT and GND2 terminals of the EV kit. Turn the supply on.
- 5) Open the GUI and select Device  Connect in the upper-left corner. Wait for a Connected Device List window to pop up, and then press the Connect button.
- 6) Press the on-key (SW1).
- 7) On the ADC/AMUX tab of the GUI, click the Read buttons next to VSBB0, VSBB1, VSBB2, and VSBB3\_CHG.
- 8) Confirm on the ammeter that the quiescent current is approximately 40µA. Then in the Global Resources tab on the GUI, set the Main Bias Power Mode to '1' and click the Write button. Now confirm that the quiescent current is approximately 4µA.

Evaluates: MAX77659

This  concludes  the  Quick  Start  procedure.  Users  are encouraged to explore the device and its register settings with the GUI. For guidance on configuring the charger and the GPIOs, see the Charger Quick Start and GPIO Quick Start sections. During general device evaluation, set the ammeter range to greater than or equal to 1A to minimize the impact of its series resistance.

For  more  information  on  the  GUI,  see  the Detailed Description of Hardware (or Software) section.

Figure 6. Regulator Check with ADC/AMUX

<!-- image -->

│

## MAX77659 Evaluation Kit

Table 1. Default Shunt Postions and Jumper Descriptions

| REFERENCE DESIGNATOR   | DEFAULT POSITION   | FUNCTION                                                                                                                                         |
|------------------------|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| J3                     | 1-2                | 1-2: Connects nEN to SW1 (push-button). 2-3: Connects nEN to SW2 (slide-switch).                                                                 |
| J6                     | Open               | 1-2: Connects GUI VUSB to MAX77659 CHGIN. Install this jumper to power MAX77659 from the GUI USB.                                                |
| J16                    | Open               | 1-2: Bypasses the MAX14699 overvoltage protection.                                                                                               |
| J10                    | 2-3                | 1-2: Connects VIO to 3.3V. 2-3: Connects VIO to 1.8V.                                                                                            |
| J7                     | 3-4                | 1-2: Connects IN_LDO to SBB1.                                                                                                                    |
| J8                     | 3-4                | 1-2: Connects GPIO0 to VIO. 3-4: Connects GPIO0 to GUI GPIO0 (see the GPIO Quick Start section for more details). 5-6: Connects GPIO0 to ground. |
| J5                     | 3-4                | 1-2: Connects GPIO1 to VIO. 3-4: Connects GPIO1 to GUI GPIO1 (see the GPIO Quick Start section for more details). 5-6: Connects GPIO1 to ground. |
| J201                   | 1-2                | 1-2: Connects SBB0 to the onboard electronic load.                                                                                               |
| J203                   | 1-2                | 1-2: Connects SBB1 to the onboard electronic load.                                                                                               |
| J205                   | 1-2                | 1-2: Connects SBB2 to the onboard electronic load.                                                                                               |
| J207                   | 1-2                | 1-2: Connects SBB3_CHG to the onboard electronic load.                                                                                           |
| J12                    | 1-2                | 1-2: Connects LDO to the onboard electronic load.                                                                                                |
| J200                   | 1-2                | 1-2: Connects the gate of the Q200 load FET to the U200 amplifier.                                                                               |
| J202                   | 1-2                | 1-2: Connects the gate of the Q201 load FET to the U201 amplifier.                                                                               |
| J204                   | 1-2                | 1-2: Connects the gate of the Q202 load FET to the U202 amplifier.                                                                               |
| J206                   | 1-2                | 1-2: Connects the gate of the Q203 load FET to the U203 amplifier.                                                                               |
| J11                    | 1-2                | 1-2: Connects the gate of the Q2 load FET to the U204 amplifier.                                                                                 |

│

Evaluates: MAX77659

## MAX77659 Evaluation Kit

## Charger Quick Start

The Charger tab on the GUI has many settings to toggle depending  on  application  requirements;  however,  for  a quick start, follow the procedure below:

- 1) Determine the capacity of the battery to identify a safe charge current. Maxim recommends charging at 0.75C (e.g., charge a 40mAh battery with a 30mA charge current). Consult the battery manufacturer's data sheet carefully to determine safe charging parameters.
- 2) In Charger Configuration E/F , move the FastCharge Current (IFAST\_CHG) slider to the desired charge current setting, and click the Write button.
- 3) In Charger Configuration G/H , move the FastCharge Voltage (VFAST\_CHG) slider to the desired charge voltage setting, and click the Write button.
- 4) Make sure there is a 5V charge source connected to the EV kit. Then, enable the charger by setting the switch-in charger Configuration B-labeled Battery Charger Enable to '1' (Enabled), and click the Write button.
- 5) The battery should now be charging at the charge current set from step 2).

For  more  information  on  the  capabilities  of  the  battery charger, refer to the IC data sheet.

## GPIO Quick Start

There  are  two  GPIOs  (GPIO0,  GPIO1)  that  can  serve either  as  standard  GPIOs  or  in  their  alternate  functionalities.  Onboard  LEDs  light  up  depending  on  the  GPIO state.  To  get  started  with  the  GPIOs,  use  the  following procedures:

- 1) In the GPIO tab of the GUI, set the desired GPIO's alternate mode enable to 0 (standard GPI or GPO).
- 2) Set the direction to 0 (output).
- 3) Set the driver type to 1 (push-pull). If using 0 (opendrain), make sure there is a pullup resistor on the GPIO pin.
- 4) Click the Write button.
- 5) Set the data output to '1' (logic-high) and click the Write button. The onboard LED should light up.
- 6) Now change the direction to '1' (input) and click the Write button.
- 7) Install the appropriate shunt on J5, J7, or J8 to connect the desired GPIO to the GUI GPIO (connect the jumper between 3 and 4).
- 8) From the GUI, toggle the EV kit GPIO by clicking Write after each time. Click Read to observe the GPIO Input Value update.

## Evaluates: MAX77659

Figure 7. GPIO Input Value Box in the GUI

<!-- image -->

Figure 8. GPIO Headers

<!-- image -->

│

## MAX77659 Evaluation Kit

## EV Kit Features

## On-Key Options

For applications that require the IC to enable with a userinteractable switch, the EV kit comes with two common types: the push-button (momentary) and the slide-switch (persistent).  The  active-low  enable  pin  (nEN)  has  an internal pullup resistor. Select which type of switch to use with  jumper  J3.  Refer  to  the  MAX77659  data  sheet  for more information on configuring the IC for momentary or persistent switches.

## Changing the Output Voltages

The GUI allows the user to change the output voltages of the SIMO and the LDO. Navigate to the SIMO BuckBoost section or the LDO section in the GUI. Drag the Target  Output  Voltage  slider until  the  desired  output voltage is reached and click Write .

## Electronic Load

The EV kit comes with an electronic load allowing the user to evaluate the SIMO and LDO load current capabilities. Onboard  circuits  set  the  load  current  through  I 2 C.  Use J201,  J203,  J205,  J207,  and  J12  to  connect  the  load to  the  output  of  the  SBB0,  SBB1,  SBB2,  SBB3\_CHG, and  LDO  respectively.  To  exercise  the  load  transient response, remove J200 (for SBB0), J202 (for SBB1), J204 (for SBB2), J206 (for LDO0), J11 (for LDO1) and connect a signal generator to the gate of the load MOSFET (pin 2 of the respective header). Drive the gate with a signal between 1V (off) and 3V (fully on) to apply transients to the output of the SIMO or LDO. Note that there are 0.1Ω sense resistors with test points (called I\_SBB0, I\_SBB1, I\_SBB2,  I\_SBB3,  I\_LDO)  for  a  10:1  conversion  of  load current to voltage.

<!-- image -->

Figure 9. SIMO Output Voltage Section

Figure 10. LDO Output Voltage Section

<!-- image -->

Figure 11. Electronic Load Schematic Diagram

<!-- image -->

Evaluates: MAX77659

│

## Software

## Installation

Visit  the  product  webpage  at http://www.maximintegrated.com/MAX77659evkit and  navigate  to Design Resources to  download  the  latest  version  of  the  EV  kit software. Save the EV kit software to a temporary folder and decompress the ZIP file.

## Windows Drivers

Upon connection of a Micro-USB cable between your PC and the EV kit for the first  time,  wait  a  few  minutes  for Windows to automatically install drivers.

## Graphical User Interface Details (GUI)

The GUI drives I 2 C communication with the EV kit. Every control  in  the  GUI  (excluding  the Load  Control tab)

## Ordering Information

| PART           | IC           | TYPE   |
|----------------|--------------|--------|
| MAX77659EVKIT# | MAX77659EVN+ | EV Kit |

#Denotes RoHS compliant.

corresponds directly to a register within the MAX77659. Hover your cursor over control names for a description of that register. Refer to the IC data sheet for the complete Register map.

## Load Control Tab

The Load Control tab contains controls for load currents on  the  regulator  outputs.  The  GUI  is  capable  of  setting steady-state, transient, and random load currents. To set a load current, use the slider bar or text field to input a value  (mA)  and  check  the Enable box.  Shuffle  through the modes to exercise different load conditions.

The offset and gain values are set by Maxim and do not need to be altered.

## MAX77659 EV Kit Bill of Materials

| ITEM   | REF_DES                                                                                                                 | DNI/DNP   |   QTY | MFG PART #                                                                                      | MANUFACTURER               | VALUE                             | DESCRIPTION                                                                                                                                                  | COMMENTS   |
|--------|-------------------------------------------------------------------------------------------------------------------------|-----------|-------|-------------------------------------------------------------------------------------------------|----------------------------|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 1      | ACOKB, AVL, PVL, TBIAS, THM, VIO                                                                                        | - 6       |       | 5000                                                                                            | KEYSTONE                   | N/A                               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                             |            |
| 2      | AIN1, AIN7, AMUX, GPIO0, GPIO1, I_LD0, I_SBB0-I_SBB3, NEN, NIRQ, NRST, SCL, SDA                                         | -         |    15 | 5002                                                                                            | KEYSTONE                   | N/A                               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                                                        |            |
| 3      | C1                                                                                                                      | -         |     1 | GRM188R71E474KA12                                                                               | MURATA                     | 0.47UF                            | CAP; SMT (0603); 0.47UF; 10%; 25V; X7R; CERAMIC                                                                                                              |            |
| 4      | C3                                                                                                                      | -         |     1 | GRM188R60J476ME15                                                                               | MURATA                     | 47UF                              | CAP; SMT (0603); 47UF; 20%; 6.3V; X5R; CERAMIC                                                                                                               |            |
| 5      | C4                                                                                                                      | -         |     1 | C0603X7R1A103K030BA; GRM033R71A103KA01; GCM033R71A103KA03; CGA1A2X7R1A103K030BA; 0201ZC103KAT2A | TDK;MURATA;MURATA;TDK;AVX  | 0.01UF                            | CAP; SMT (0201); 0.01UF; 10%; 10V; X7R; CERAMIC                                                                                                              |            |
| 6      | C5, C8, C11-C14, C20                                                                                                    | -         |     7 | C1608X5R1A226M080AC; GRM188R61A226ME15                                                          | TDK;MURATA                 | 22UF                              | CAP; SMT (0603); 22UF; 20%; 10V; X5R; CERAMIC                                                                                                                |            |
| 7      | C6, C9, C10, C16, C17, C29, C36, C40- C42, C51, C239-C242, C269-C271                                                    | -         |    18 | C0402C105K8PAC;CC0402KRX5 R6BB105                                                               | KEMET;YAGEO                | 1UF                               | CAP; SMT (0402); 1UF; 10%; 10V; X5R; CERAMIC                                                                                                                 |            |
| 8      | C7                                                                                                                      | -         |     1 | C1608X5R1E475K080AC; GRM188R61E475KE11                                                          | TDK;MURATA                 | 4.7UF                             | CAP; SMT (0603); 4.7UF; 10%; 25V; X5R; CERAMIC                                                                                                               |            |
| 9      | C15                                                                                                                     | -         |     1 | GRM155R61C225KE44                                                                               | MURATA                     | 2.2UF                             | CAP; SMT (0402); 2.2UF; 10%; 16V; X5R; CERAMIC                                                                                                               |            |
| 10     | C19                                                                                                                     | -         |     1 | 16TQC100MYF                                                                                     | PANASONIC                  | 100UF                             | CAP; SMT (7343); 100UF; 20%; 16V; TANTALUM                                                                                                                   |            |
| 11     | C21, C28, C31 C22, C25-C27, C30, C32-C35,                                                                               | -         |     3 | C1005X5R1A475K050                                                                               | TDK                        | 4.7UF                             | CAP; SMT (0402); 4.7UF; 10%; 10V; X5R; CERAMIC                                                                                                               |            |
| 12     | C37- C39, C43, C44, C47, C48, C63-C67, C73, C202, C207, C212, C217, C221- C223, C234, C235, C237, C244, C268, C272-C277 | -         |    40 | GRM155R71E104KE14;C1005X7 R1E104K050BB;TMK105B7104K VH;CGJ2B3X7R1E104K050BB                     | MURATA;TDK;TAIYO YUDEN;TDK | 0.1UF                             | CAP; SMT (0402); 0.1UF; 10%; 25V; X7R; CERAMIC                                                                                                               |            |
| 13     | C23, C24                                                                                                                | -         |     2 | GRM0335C1H270JA01                                                                               | MURATA                     | 27PF                              | CAP; SMT (0201); 27PF; 5%; 50V; C0G; CERAMIC                                                                                                                 |            |
| 14     | C45, C52, C200, C205, C210, C215, C220, C238, C248-C252                                                                 | -         |    13 | C0402C472K5RAC; GRM155R71H472KA01;                                                              | KEMET;MURATA;TDK           | 4700PF                            | CAP; SMT (0402); 4700PF; 10%; 50V; X7R; CERAMIC;                                                                                                             |            |
| 15     | C46, C201, C206, C211, C216                                                                                             | -         |     5 | C1005X7R1H472K050BA C0402H102J5GAC                                                              | KEMET                      | 1000PF                            | CAP; SMT (0402); 1000PF; 5%; 50V; C0G; CERAMIC                                                                                                               |            |
| 16     | C49, C50, C203, C204, C208, C209, C213, C214, C218, C219                                                                | -         |    10 | C0402C180J5GAC; GRM1555C1H180JA01; C1005C0G1H180J050BA                                          | KEMET;MURATA;TDK           | 18PF                              | CAP; SMT (0402); 18PF; 5%; 50V; C0G; CERAMIC                                                                                                                 |            |
| 17     | C68-C72                                                                                                                 | -         |     5 | CL05B103KP5NNN                                                                                  | SAMSUNG ELECTRONICS        | 0.01UF                            | CAP; SMT (0402); 0.01UF; 10%; 10V; X7R; CERAMIC                                                                                                              |            |
| 18     | C74                                                                                                                     | -         |     1 | C1005X7R1H104K050BB; GRM155R71H104KE14; C1005X7R1H104K050BE; UMK105B7104KV-FR                   | TDK;MURATA;TDK;TAIYO YUDEN | 0.1UF                             | CAP; SMT (0402); 0.1UF; 10%; 50V; X7R; CERAMIC                                                                                                               |            |
| 19     | C75                                                                                                                     | -         |     1 | GRM1555C1H120FA01                                                                               | MURATA                     | 12PF                              | CAP; SMT (0402); 12PF; 1%; 50V; C0G; CERAMIC ;                                                                                                               |            |
| 20     | CHGIN, INLDO0, IN_SBB, LDO, SBB0-SBB2, SBB3_CHG, VBATT, VSYS, VUSB                                                      | -         |    11 | 5010                                                                                            | KEYSTONE                   | N/A                               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                        |            |
| 21     | D1                                                                                                                      | -         |     1 | B0530W-7-F                                                                                      | DIODES INCORPORATED        | B0530W                            | DIODE; SCH; SMT (SOD-123); PIV=30V; IF=0.5A                                                                                                                  |            |
| 22     | DS1-DS3                                                                                                                 | -         |     3 | LTST-C190CKT                                                                                    | LITE-ON ELECTRONICS INC.   | LTST-C190CKT                      | DIODE; LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; -55 DEGC TO +85 DEGC                                                                              |            |
| 23     | DS4                                                                                                                     | -         |     1 | LTST-C190YKT                                                                                    | LITE-ON ELECTRONICS INC.   | LTST-C190YKT                      | DIODE; LED; STANDARD; YELLOW; SMT (0603); PIV=5.0V; IF=0.02A; - 55 DEGC TO +85 DEGC                                                                          |            |
| 24     | GND1, GND5-GND7                                                                                                         | -         |     4 | 5011                                                                                            | KEYSTONE                   | N/A                               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                      |            |
| 25     | GND2-GND4, GND8, GND10                                                                                                  | -         |     5 | 9020 BUSS                                                                                       | WEICO WIRE                 | MAXIMPAD                          | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                                     |            |
| 26     | J1, J4                                                                                                                  | -         |     2 | 10118193-0001LF                                                                                 | FCICONNECT                 | 10118193-0001LF                   | CONNECTOR; FEMALE; SMT; MICRO USB B TYPE RECEPTACLE; RIGHT ANGLE; 5PINS                                                                                      |            |
| 27     | J2                                                                                                                      | -         |     1 | PBC10SAAN                                                                                       | SULLINS ELECTRONICS CORP.  | PBC10SAAN                         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 10PINS; -65 DEGC TO +125 DEGC                                                                            |            |
| 28     | J3, J10                                                                                                                 | -         |     2 | TSW-103-07-T-S                                                                                  | SAMTEC                     | TSW-103-07-T-S                    | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 3PINS                                                                                             |            |
| 29     | J5, J8                                                                                                                  | -         |     2 | TSW-103-07-L-D                                                                                  | SAMTEC                     | TSW-103-07-L-D                    | CONNECTOR; MALE; THROUGH HOLE; THROUGH HOLE 0.025 POST HEADER; STRAIGHT; 6PINS CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW;                              |            |
| 30 31  | J6, J7, J11-J14, J200-J207 J9                                                                                           | - - 1     |    14 | TSW-102-07-T-S S2B-PH-K-S(LF)(SN)                                                               | SAMTEC JST MANUFACTURING   | TSW-102-07-T-S S2B-PH-K-S(LF)(SN) | STRAIGHT; 2PINS; -55 DEGC TO +105 DEGC CONNECTOR; MALE; THROUGH HOLE; 2.0MM PITCH; DISCONNECTABLE CRIMP STYLE CONNECTOR; SIDE ENTRY TYPE; RIGHT ANGLE; 2PINS |            |
| 32     | L1                                                                                                                      | -         |     1 | DFE201610E-1R5M=P2                                                                              | MURATA                     | 1.5UH                             | INDUCTOR; SMT (0806); MAGNETICALLY SHIELDED; 1.5UH; TOL=+/- 20%; 2.1A                                                                                        |            |
| 33     | L2 L3                                                                                                                   | - 1       |     1 | MCEE1005T1R0MHN                                                                                 | TAIYO YUDEN TAIYO YUDEN    | 1UH                               | INDUCTOR; SMT (0402); METAL; 1UH; 20%; 0.80A                                                                                                                 |            |
| 34 35  | L4                                                                                                                      | - -       |     1 | MCHK1608T1R5MKN DFE201210S-2R2M=P2                                                              | MURATA                     | 1.5UH 2.2UH                       | INDUCTOR; SMT (0603); SHIELDED; 1.5UH; 20%; 1.4A ; EVKIT PART-INDUCTOR; SMT (0805); MAGNETICALLY SHIELDED; 2.2UH; TOL=+/-20%; 1.8A                           |            |
| 36     | L5                                                                                                                      | -         |     1 | DFE201210U-1R5M=P2                                                                              | TOKO                       | 1.5UH                             | INDUCTOR; SMT (0805); METAL ALLOY CHIP; 1.5UH; TOL=+/-20%; 1.9A                                                                                              |            |
| 37     | L6                                                                                                                      | -         |     1 | DFE201612E-1R5M                                                                                 | MURATA                     | 1.5UH                             | INDUCTOR; SMT (0806); METAL; 1.5UH; 20%; 2.30A                                                                                                               |            |
| 38     | L7-L9                                                                                                                   | -         |     3 | BLM18AG601SN1                                                                                   | MURATA                     | 600                               | INDUCTOR; SMT (0603); FERRITE-BEAD; 600; TOL=+/-; I-                                                                                                         |            |
| 39     |                                                                                                                         | -         |     5 | BSZ0909NSATMA1                                                                                  | INFINEON                   |                                   | 0.5A TRAN; OPTIMOS POWER-MOSFET; NCH; PG-TSDSON8; PD-(25W);                                                                                                  |            |
| 40     | Q2, Q200-Q203                                                                                                           |           |       | DMN2005DLP4K                                                                                    |                            | BSZ0909NSATMA1                    | (36A); V-(34V) TRAN; DUAL N-CHANNEL ENHANCEMENT MODE MOSFET; NCH;                                                                                            |            |
|        | Q3                                                                                                                      | -         |     1 |                                                                                                 | DIODES INCORPORATED        | DMN2005DLP4K                      | DFN1310-6; PD-(0.4W); I-(0.3A); V-(20V)                                                                                                                      |            |

Evaluates: MAX77659

## MAX77659 EV Kit Bill of Materials (continued)

| ITEM     | REF_DES                                                       | DNI/DNP   | QTY   | MFG PART #                                        | MANUFACTURER                                                                           | VALUE                     | DESCRIPTION TRANSISTOR, MOSFET P-CHANNEL, SUPERSOT-3, PD=0.5W, ID=-                                              | COMMENTS   |
|----------|---------------------------------------------------------------|-----------|-------|---------------------------------------------------|----------------------------------------------------------------------------------------|---------------------------|------------------------------------------------------------------------------------------------------------------|------------|
| 41       | Q205                                                          | -         | 1     | FDN360P                                           | FAIRCHILD SEMICONDUCTOR                                                                | FDN360P                   | 2.0A, VDSS=-30V,VGSS=+/-20V                                                                                      |            |
| 42       | Q206                                                          | -         | 1     | 2N7002;2N7002;2N7002;2N7002                       | DIODES INCORPORATED;ST MICROELECTRONICS; ON SEMICONDUCTOR; MICRO COMMERCIAL COMPONENTS | 2N7002                    | TRAN; ; NCH; SOT-23; PD-(0.33W); IC-(0.5A); VCEO-(60V); -55 DEGC TO +150 DEGC                                    |            |
| 43       | R1, R3, R4, R277, R279                                        | -         | 5     | CRCW06030000Z0                                    | VISHAY DALE                                                                            | 0                         | RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                                                      |            |
| 44       | R2                                                            | -         | 1     | ANY                                               | ANY                                                                                    | 1M                        | RESISTOR; 0603; 1M; 1%; 100PPM; 0.10W; THICK FILM; FORMFACTOR                                                    |            |
| 45       | R6                                                            | -         | 1     | RC0402JR-070RL; CR0402-16W-000RJT                 | YAGEO PHYCOMP;VENKEL LTD.                                                              | 0                         | RES; SMT (0402); 0; 5%; JUMPER; 0.0630W                                                                          |            |
| 46       | R7                                                            | -         | 1     | RNCF0402BTE40K0                                   | STACKPOLE ELECTRONICS INC                                                              | 40K                       | RES; SMT (0402); 40K; 0.10%; +/-25PPM/DEGC; 0.0630W;                                                             |            |
| 47       | R9, R29, R281, R282, R287, R288                               | -         | 6     | CRCW040210K0FK; RC0402FR-0710KL                   | VISHAY DALE;YAGEO PHICOMP                                                              | 10K                       | RES; SMT (0402); 10K; 1%; +/-100PPM/DEGC; 0.0630W                                                                |            |
| 48       | R10, R11                                                      | -         | 2     | ERJ-2RKF27R0X; RC0402FR-0727RL;                   | PANASONIC;YAGEO PHICOMP; VISHAY DALE                                                   | 27                        | RES; SMT (0402); 27; 1%; +/-100PPM/DEGC; 0.0630W                                                                 |            |
| 49       | R12                                                           | -         | 1     | CRCW040227R0FK ERJ-2RKF1202                       | PANASONIC                                                                              | 12K                       | RES; SMT (0402); 12K; 1%; +/-100PPM/DEGC; 0.1000W                                                                |            |
| 50       | R13, R42, R55, R56, R210, R231, R244, R257, R301              | -         | 9     | CRCW04021M00FK                                    | VISHAY DALE                                                                            | 1M                        | RES; SMT (0402); 1M; 1%; +/-100PPM/DEGC; 0.0630W                                                                 |            |
| 51       | R14, R40, R41, R207, R208, R229, R230, R242, R243, R254, R255 | -         | 11    | ERJ-2RKF1001                                      | PANASONIC                                                                              | 1K                        | RES; SMT (0402); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                 |            |
| 52       | R16                                                           | -         | 1     | CRCW04024752FK; 9C04021A4752FLHF3; CRCW040247K5FK | VISHAY DALE;YAGEO; VISHAY DALE                                                         | 47.5K                     | RES; SMT (0402); 47.5K; 1%; +/-100PPM/DEGC; 0.0630W                                                              |            |
| 53       | R5, R8, R214, R283, R17, R24                                  | -         | 6     | CRCW0402100KFK; RC0402FR-07100KL                  | VISHAY;YAGEO                                                                           | 100K                      | RES; SMT (0402); 100K; 1%; +/-100PPM/DEGC; 0.0630W                                                               |            |
| 54       | R18, R47                                                      | -         | 2     | CRCW0402150RFK; 9C04021A1500FL                    | VISHAY DALE;YAGEO                                                                      | 150                       | RES; SMT (0402); 150; 1%; +/-100PPM/DEGC; 0.0630W                                                                |            |
| 55       | R19, R20, R33, R52-R54, R204, R225, R238, R251, R285, R286,   | -         | 17    | ERJ-2GE0R00                                       | PANASONIC                                                                              | 0                         | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                      |            |
| 56       | R302-R306 R21, R22                                            | -         | 2     | ERJ-2GEJ472                                       | PANASONIC                                                                              | 4.7K                      | RES; SMT (0402); 4.7K; 5%; +/-200PPM/DEGC; 0.1000W                                                               |            |
| 57       | R23                                                           | -         | 1     | CRCW0402169KFK                                    | VISHAY DALE                                                                            | 169K                      | RES; SMT (0402); 169K; 1%; +/-100PPM/DEGK; 0.0630W                                                               |            |
| 58       | R25, R26                                                      | -         | 2     | CRCW04022K20FK; RC0402FR-072K2L                   | VISHAY DALE;YAGEO PHICOMP                                                              | 2.2K                      | RES; SMT (0402); 2.2K; 1%; +/-100PPM/DEGC; 0.0630W                                                               |            |
| 59 60    | R27                                                           | -         | 1     | RC0402FR-0722RL                                   | YAGEO PHYCOMP                                                                          | 22                        | RES; SMT (0402); 22; 1%; +/-100PPM/DEGC; 0.0630W                                                                 |            |
| 61       | R28 R31, R203, R224, R237, R250                               | - -       | 1 5   | CRCW0402470RFK ERJ-2RKF2002                       | VISHAY DALE PANASONIC                                                                  | 470 20K                   | RES; SMT (0402); 470; 1%; +/-100PPM/DEGC; 0.0630W RES; SMT (0402); 20K; 1%; +/-100PPM/DEGC; 0.1000W              |            |
| 62       | R32, R201, R222, R235, R248, R289                             | -         | 6     | 9C04021A1000FL; RC0402FR-07100RL                  | PANASONIC;YAGEO PHYCOMP                                                                | 100                       | RES; SMT (0402); 100; 1%; +/-100PPM/DEGC; 0.0630W                                                                |            |
| 63       | R34, R202, R223, R236, R249                                   | -         | 5     | CRCW0402680RFK; RC0402FR-07680RL                  | VISHAY DALE;YAGEO PHICOMP                                                              | 680                       | RES; SMT (0402); 680; 1%; +/-100PPM/DEGC; 0.0630W                                                                |            |
| 64       | R35, R36, R205, R206, R226, R228, R239, R240, R252, R253      | -         | 10    | ERJ-2RKF3302                                      | PANASONIC                                                                              | 33K                       | RES; SMT (0402); 33K; 1%; +/-100PPM/DEGC; 0.0630W                                                                |            |
| 65 66    | R38, R293, R295, R297, R299 R39, R294, R296, R298, R300       | -         | 5 5   | ERJ-2RKF4703 CRCW0402649KFK                       | PANASONIC VISHAY DALE                                                                  | 470K 649K                 | RES; SMT (0402); 470K; 1%; +/-100PPM/DEGC; 0.0630W RES; SMT (0402); 649K; 1%; +/-100PPM/DEGC; 0.0630W            |            |
| 67       | R43                                                           | - -       | 1     | CSR1206FTR500                                     | STACKPOLE ELECTRONICS INC.                                                             | 0.5                       | RES; SMT (1206); 0.5; 1%; +/-100PPM/DEGC; 0.5000W                                                                |            |
| 68       | R44, R45, R212, R213, R227, R234, R246, R247, R259, R260      | -         | 10    | CRCW0402787KFK                                    | VISHAY DALE                                                                            | 787K                      | RES; SMT (0402); 787K; 1%; +/-100PPM/DEGC; 0.0630W                                                               |            |
| 69       | R46, R48                                                      | - -       | 2 1   | CRCW04021R00FK CRCW0402120RFK;                    | VISHAY DALE                                                                            | 1 120                     | RES; SMT (0402); 1; 1%; +/-100PPM/DEGC; 0.0630W                                                                  |            |
| 70 71    | R49 R211, R233, R245, R258                                    | -         | 4     | RC0402FR-07120RL CRL1206-JW-R100ELF               | VISHAY DALE;YAGEO                                                                      | 0.1                       | RES; SMT (0402); 120; 1%; +/-100PPM/DEGC; 0.0630W RES; SMT (1206); 0.1; 1%; +/-200PPM/DEGC; 0.2500W              |            |
|          |                                                               | -         |       | NCP15XH103F03                                     | BOURNS MURATA                                                                          | 10K                       | THERMISTOR; SMT (0402); THICK FILM (NICKEL PLATED); 10K;                                                         |            |
| 72       | RT1 SW1                                                       | -         | 1     | EVQ-Q2K03W                                        | PANASONIC                                                                              | EVQ-Q2K03W                | TOL=+/-1%                                                                                                        |            |
| 73       | SW2                                                           | -         | 1     |                                                   | NIDEC COPAL                                                                            | CL-SB-12B-11              | SWITCH; SPST; SMT; 15V; 0.02A; LIGHT TOUCH SWITCH; RCOIL= OHM; RINSULATION= OHM; PANASONIC                       |            |
| 74       |                                                               |           | 1     | CL-SB-12B-11                                      | ELECTRONICS CORP                                                                       |                           | SWITCH; SPDT; SMT; 12V; 0.2A; CL-SB SERIES; SLIDE SWITCH; RCOIL=0.05 OHM; RINSULATION=100M OHM                   |            |
| 75 76    | U1                                                            | - -       | 1     | MAX77659EVN+ FT2232HL                             | MAXIM FUTURE TECHNOLOGY                                                                | MAX77659EVN+              | DRAWING: 21-100509; PACKAGE CODE: N302D2+1 IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; LQFP64       |            |
| 77       | U2 U3, U4                                                     | -         | 1 2   | MAX8512EXK+                                       | DEVICES INTL LTD. MAXIM                                                                | FT2232HL MAX8512EXK       | IC, VREG, Ultra-Low-Noise, High PSRR, Adjustable Vout, SC70-5                                                    |            |
| 78       | U5, U6                                                        | -         | 2     | MAX3395EETC+                                      | MAXIM                                                                                  | MAX3395EETC               | IC; TRANS; 15KV ESD-PROTECTED HIGH-DRIVE CURRENT QUAD- LEVEL TRANSLATOR WITH SPEED-UP CIRCUITRY; TQFN12 4X4      |            |
| 79       | U7                                                            | -         | 1     | AT24CS02-SSHM                                     | MICROCHIP                                                                              |                           | IC; EPROM; I2C-COMPATIBLE TWO-WIRE SERIAL EEPROM; 150MIL; NSOIC8                                                 |            |
| 80       | U8                                                            | -         | 1     | MAX14699EWC+                                      | MAXIM                                                                                  | AT24CS02-SSHM             | EVKIT PART-IC; PROT; HIGH ACCURACY; SURGE-PROTECTED                                                              |            |
| 81       | U200-U204                                                     | -         | 5     | MAX44251AUA+                                      | MAXIM                                                                                  | MAX14699EWC+ MAX44251AUA+ | OVERVOLTAGE PROTECTOR; WLP12 1.98X1.28 IC; OPAMP; ULTRA-PRECISION; LOW-NOISE OP AMP; UMAX8                       |            |
| 82       | U205                                                          | -         | 1     | MAX5825AWP+                                       | MAXIM                                                                                  | MAX5825AWP+T              | IC; DAC; ULTRA-SMALL; OCTAL CHANNEL; 12-BIT BUFFERED OUTPUT DAC WITH INTERNAL REFERENCE AND I2C WLP20            |            |
| 83       | U209                                                          | -         | 1     | MAX11614EEE+                                      | MAXIM                                                                                  | MAX11614EEE+              | INTERFACE; IC; ADC; LOW-POWER; 8-CHANNEL; I2C; 12-BIT ADC IN ULTRA- SMALL PACKAGE; QSOP16                        |            |
| 84       |                                                               | -         | 1     | MAX6071AAUT41+                                    | MAXIM                                                                                  |                           | IC; VREF; LOW NOISE; HIGH-PRECISION SERIES VOLTAGE REFERENCE; SOT23-6                                            |            |
| 85 86    | U211                                                          | -         | 1     | MAX1697UEUT+ 7M-12.000MAAJ                        | MAXIM                                                                                  | MAX1697UEUT+              | IC; INV; INVERTING CHARGE PUMP WITH SHUTDOWN; SOT23-6 CRYSTAL; SMT; 12MHZ; 18PF; TOL = +/-30PPM; STABILITY = +/- |            |
|          | U210                                                          |           |       |                                                   |                                                                                        | MAX6071AAUT41+            |                                                                                                                  |            |
| 87       | Y1 PCB                                                        | - -       | 1 1   | MAX77659                                          | TXC CORPORATION MAXIM                                                                  | 12MHZ PCB                 | 30PPM PCB:MAX77659                                                                                               | -          |
| 88       | J15                                                           |           | 0     | TSW-102-07-T-S                                    | SAMTEC                                                                                 | TSW-102-07-T-S            | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW;                                                                 |            |
| 89       |                                                               | DNP DNP   | 0     | N/A                                               | N/A                                                                                    | OPEN                      | STRAIGHT; 2PINS; -55 DEGC TO +105 DEGC CAPACITOR; SMT (0402); OPEN; FORMFACTOR                                   |            |
| 90 TOTAL | C2, C18, C53-C62 R15, R37                                     | DNP       | 0 342 | N/A                                               | N/A                                                                                    | OPEN                      | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                 |            |

Evaluates: MAX77659

## MAX77659 EV Kit Schematic

<!-- image -->

Evaluates: MAX77659

## MAX77659 EV Kit Schematic (continued)

<!-- image -->

│

## MAX77659 EV Kit Schematic (continued)

<!-- image -->

## MAX77659 EV Kit Schematic (continued)

<!-- image -->

│

## MAX77659 EV Kit Schematic (continued)

<!-- image -->

│

## MAX77659 EV Kit PCB Layouts

MAX77659 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX77659 EV Kit PCB Layout-Top Layer

<!-- image -->

MAX77659 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

MAX77659 EV Kit PCB Layout-Internal Layer 3

<!-- image -->

│

## MAX77659 EV Kit PCB Layouts (continued)

MAX77659 EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX77659 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## MAX77659 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/21            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX77659