<!-- lastmod 2022-11-23 -->
<!-- image -->

Evaluates: MAX77658

## General Description

The  MAX77658  evaluation  kit  (EV  kit)  allows  for  easy experimentation with various MAX77658 features, including a linear charger, fuel gauge, SIMO buck-boost regulator, linear regulators, on/off controller, and I 2 C interface.

Windows ® -based software provides a user-friendly graphical interface as well as a detailed register-based interface to exercise the features of the MAX77658.

Ordering Information appears at end of data sheet.

Figure 1. MAX77658 EV Kit Photo

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

©

Click here to ask an associate for production status of specific part numbers.

## MAX77658 Evaluation Kit

## Benefits and Features

- Easy to Use
- GUI Drives I 2 C Interface
- GPIO LEDs
- Assembled and Fully Tested
- On-Board Electronic Loads
- Steady-State, Transient, and Random Modes
- Evaluates Push-Button, Slide-Switch, and Logic Mode On-Key Options

319-100835; Rev 1; 7/22

One  Analog  Way,  Wilmington,  MA  01887  U.SA.    | Tel: 781.329470 | © 201  Analog  Devices,  Inc.  All  rights  reserved. 201 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

Evaluates: MAX77658

Figure 2. MAX77658 EV Kit Simplified Diagram

<!-- image -->

Figure 3. MAX77658 EV Kit-Top View

<!-- image -->

│

## MAX77658 Evaluation Kit

## Evaluates: MAX77658

Figure 4. MAX77658 EV Kit-Bottom View

<!-- image -->

Figure 5. MAX77658 EV Kit-Solution Area

<!-- image -->

│

## MAX77658 Evaluation Kit

## MAX77658 EV Kit Files

| FILE                               | DECRIPTION   |
|------------------------------------|--------------|
| MAX77658_EVKIT_B_BOM.xlsx          | BOM          |
| MAX77658_EVKIT_B_SCH.pdf           | Schematic    |
| MAX77658_EVKIT_B_MARKETING_PCB.pdf | Layout       |

## Quick Start

## Required Equipment

- MAX77658 EV Kit
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

- 1) Install the GUI software. Visit the product webpage at: http://www.maximintegrated.com/products/ MAX77658 and navigate to Design Resources to download the latest version of the EV kit software. Save the EV kit software to a temporary folder and extract the files from the ZIP file.
- 2) Install EV kit shunts according to Table 1.
- 3) Connect a Micro-B USB cable between the EV kit USB port labeled 'GUI' and your Windows-based PC.
- 4) Apply a 3.7V supply (set for 100mA current limit) through an ammeter (set for 10mA range) across the VBATT and GND2 terminals of the EV kit. Turn the supply on.
- 5) Open the GUI and select Device  Connect in the upper-left corner. Wait for a Connected Device List window to pop up, and then press the Connect button.
- 6) Press the on-key (SW1).
- 7) On the ADC/AMUX tab of the GUI, click the Read buttons next to VSBB0, VSBB1, VSBB2, VLDO0, and VLDO1.
- 8) Confirm on the ammeter that the quiescent current is approximately 50µA. Then in the Global Resources tab on the GUI, set the Main Bias Power Mode to '1' and click the Write button . Now confirm that the quies -cent current is approximately 10µA.

This  concludes  the  Quick  Start  procedure.  Users  are encouraged to explore the device and its register settings with  the  GUI.  For  guidance  on  configuring  the  charger, fuel  gauge,  and  GPIOs,  see  the Charger  Quick  Start , Fuel Gauge Quick Start , and GPIO Quick Start sections. During general device evaluation, set the ammeter range to greater than or equal to 1A to minimize the impact of its series resistance.

For  more  information  on  the  GUI,  see  the Software section.

Figure 6. Regulator Check with ADC/AMUX

<!-- image -->

Evaluates: MAX77658

│

Table 1. Default Shunt Postions and Jumper Descriptions

| REFERENCE DESIGNATOR   | DEFAULT POSITION   | FUNCTION                                                                                                                                        |
|------------------------|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| J3                     | 1-2                | 1-2: Connects nEN to SW1 (push-button). 2-3: Connects nEN to SW2 (slide-switch).                                                                |
| J6                     | Open               | 1-2: Connects GUI VUSB to MAX77658 CHGIN. Install this jumper to power MAX77658 from the GUI USB.                                               |
| J10                    | 2-3                | 1-2: Connects VIO to 3.3V 2-3: Connects VIO to 1.8V                                                                                             |
| J7                     | 3-4                | 1-2: Connects GPIO0 to VIO. 3-4: Connects GPIO0 to GUI GPIO0 (see the GPIO Quick Start section for more details) 5-6: Connects GPIO0 to ground. |
| J5                     | 3-4                | 1-2: Connects GPIO1 to VIO. 3-4: Connects GPIO1 to GUI GPIO0 (see the GPIO Quick Start section for more details) 5-6: Connects GPIO1 to ground. |
| J8                     | 3-4                | 1-2: Connects GPIO2 to VIO. 3-4: Connects GPIO2 to GUI GPIO0 (see the GPIO Quick Start section for more details) 5-6: Connects GPIO2 to ground. |
| J201                   | 1-2                | 1-2: Connects SBB0 to the onboard electronic load.                                                                                              |
| J203                   | 1-2                | 1-2: Connects SBB1 to the onboard electronic load.                                                                                              |
| J205                   | 1-2                | 1-2: Connects SBB2 to the onboard electronic load.                                                                                              |
| J207                   | 1-2                | 1-2: Connects LDO0 to the onboard electronic load.                                                                                              |
| J12                    | 1-2                | 1-2: Connects LDO1 to the onboard electronic load.                                                                                              |
| J200                   | 1-2                | 1-2: Connects the gate of the Q200 load FET to the U200 amplifier.                                                                              |
| J202                   | 1-2                | 1-2: Connects the gate of the Q201 load FET to the U201 amplifier.                                                                              |
| J204                   | 1-2                | 1-2: Connects the gate of the Q202 load FET to the U202 amplifier.                                                                              |
| J206                   | 1-2                | 1-2: Connects the gate of the Q203 load FET to the U203 amplifier.                                                                              |
| J11                    | 1-2                | 1-2: Connects the gate of the Q2 load FET to the U204 amplifier.                                                                                |

Evaluates: MAX77658

## MAX77658 Evaluation Kit

## Charger Quick Start

The Charger tab on the GUI has many settings to toggle depending  on  application  requirements;  however,  for  a quick start, use the following procedure:

- 1) Determine the capacity of the battery to identify a safe charge current. Maxim recommends charging at 0.75C (e.g., charge a 40mAh battery with a 30mA charge current). Consult the battery manufacturer's data sheet carefully to determine safe charging parameters.
- 2) In Charger Configuration E/F , move the FastCharge Current (IFAST\_CHG) slider to the desired charge current setting, and click the Write button.
- 3) In Charger Configuration G/H , move the FastCharge Voltage (VFAST\_CHG) slider to the desired charge voltage setting, and click the Write button.
- 4) Make sure there is a 5V charge source connected to the EV kit. Then, enable the charger by setting the switch-in charger Configuration B-labeled Battery Charger Enable to '1' (Enabled), and click the Write button.
- 5) The battery should now be charging at the charge current set from step 2.

For  more  information  on  the  capabilities  of  the  battery charger, refer to the IC data sheet.

## GPIO Quick Start

There  are  three  GPIOs  (GPIO0,  GPIO1,  GPIO2)  that can serve either as standard GPIOs or in their alternate functionalities. Onboard LEDs light up depending on the GPIO state. To get started with the GPIOs, use the following procedures:

- 1) In the GPIO tab of the GUI, set the desired GPIO's alternate mode enable to '0' (standard GPI or GPO).
- 2) Set the direction to '0' (output).
- 3) Set the driver type to '1' (push-pull). If using '0' (open-drain), make sure there is a pullup resistor on the GPIO pin.
- 4) Click the Write button.

## Evaluates: MAX77658

- 5) Set the data output to '1' (logic-high) and click the Write button. The onboard LED should light up.
- 6) Now change the direction to '1' (input) and click the Write button.
- 7) Install the appropriate shunt on J5, J7, or J8 to connect the desired GPIO to the GUI GPIO (connect the jumper between 3 and 4).
- 8) From the GUI, toggle the EV kit GPIO by clicking Write after each time. Click Read to observe the GPIO Input Value update.

Figure 7. GPIO Input Value Box in the GUI

<!-- image -->

Figure 8. GPIO Headers

<!-- image -->

│

## MAX77658 Evaluation Kit

## Fuel Gauge Quick Start

All functions of the fuel gauge program are divided under four sub-tabs in the Fuel Gauge tab. Click on the appropriate  sub-tab  to  move  to  the  desired  function  page. Located on the ModelGauge m5 tab is the primary fuel gauge  information  measured  and  calculated  by  the  IC. The Graphs tab visually displays the fuel-gauge register changes over time. The Registers tab allows the user to modify common fuel-gauge registers one at a time. The Configure tab allows for special operations such as initializing the fuel-gauge logging and performing fuel-gauge reset.

The ModelGauge m5 tab  displays  the  important  output information read from the fuel gauge. Figure 9 shows the format of the ModelGauge m5 tab. Information is grouped by function and each is detailed separately.

Evaluates: MAX77658

- 1) The Measurements group box displays the main output information from the fuel gauge: state-ofcharge of the battery cell, remaining capacity, time-to-full, and time-to-empty. Information related to the health of the cell such as the cell's age, internal resistance, and present capacity is also included in the Measurements group box. Other than that, measurements that are used by the fuel gauge to determine the battery state of charge are displayed on the right-hand side of the box.
- 2) The At Rate group box allows the user to input a hypothetical load current and the fuel gauge calculates the corresponding hypothetical Qresidual, TTE, AvSOC, and AvCap values.
- 3) The Alerts group box tracks all nine possible alert triggering conditions. If an alert occurs, the corresponding checkbox is checked for the user to see. Clicking the Clear button resets all alert flags.

Figure 9. ModelGauge m5 Tab in the GUI

<!-- image -->

│

## EV Kit Features

## On-Key Options

For applications that require the IC to enable with a userinteractable switch, the EV kit comes with two common types: the push-button (momentary) and the slide-switch (persistent).  The  active-low  enable  pin  (nEN)  has  an internal pullup resistor. Select which type of switch to use with  jumper  J3.  Refer  to  the  MAX77658  data  sheet  for more information on configuring the IC for momentary or persistent switches.

## Changing the Output Voltages

The GUI allows the user to change the output voltages of the SIMO and the LDO. Navigate to the SIMO BuckBoost section or the LDO section in the GUI. Drag the Target  Output  Voltage slider  until  the  desired  output voltage is reached and click Write .

## Electronic Load

The EV kit comes with an electronic load allowing the user to evaluate the SIMO and LDO load current capabilities. Onboard  circuits  set  the  load  current  through  I 2 C.  Use J201, J203, J205, J207, and J12 to connect the load to the output of the SBB0, SBB1, SBB2, LDO0, and LDO1 respectively.  To  exercise  the  load  transient  response, remove  J200  (for  SBB0),  J202  (for  SBB1),  J204  (for SBB2), J206 (for LDO0), J11 (for LDO1) and connect a signal generator to the gate of the load MOSFET (pin 2 of  the  respective  header).  Drive  the  gate  with  a  signal between 1V (off) and 3V (fully on) to apply transients to the output of the SIMO or LDO. Note that there are 0.1Ω sense resistors with test points (called I\_SBB0, I\_SBB1, I\_SBB2, I\_LDO0, I\_LDO1) for a 10:1 conversion of load current to voltage. See the Software section to learn how to set the load current from the GUI.

<!-- image -->

Figure 10. SIMO Output Voltage Section

Figure 11. LDO Output Voltage Section

<!-- image -->

Figure 12. Electronic Load Block Diagram

<!-- image -->

Evaluates: MAX77658

│

## Software

## Installation

Visit the product webpage at http://www.maximintegrated.com/products/MAX77658 and  navigate  to Design Resources to  download  the  latest  version  of  the  EV  kit software. Save the EV kit software to a temporary folder and decompress the ZIP file.

## Windows Drivers

Upon connection of a Micro-USB cable between your PC and the EV kit for the first  time,  wait  a  few  minutes  for Windows to automatically install drivers.

## Graphical User Interface Details (GUI)

The GUI drives I 2 C communication with the EV kit. Every control  in  the  GUI  (excluding  the Load  Control tab)

## Ordering Information

| PART           | IC            | TYPE   |
|----------------|---------------|--------|
| MAX77658EVKIT# | MAX77658BANX+ | EV Kit |

#Denotes RoHS compliant.

corresponds directly to a register within the MAX77658. Hover your cursor over control names for a description of that register. Refer to the IC data sheet for the complete register map.

## Load Control Tab

The Load Control tab contains controls for load currents on  the  regulator  outputs.  The  GUI  is  capable  of  setting steady-state, transient, and random load currents. To set a load current, use the slider bar or text field to input a value  (mA)  and  check  the Enable box.  Shuffle  through the modes to exercise different load conditions.

The offset and gain values are set by Maxim and do not need to be altered.

## MAX77658 EV Kit Bill of Materials

| ITEM     | REF_DES                                                                                                                        | DNI/DNP QTY   | MFG PART #                                                                                    | MANUFACTURER                                                                           | VALUE              | DESCRIPTION                                                                                                                                                  | COMMENTS   |
|----------|--------------------------------------------------------------------------------------------------------------------------------|---------------|-----------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 1        | AIN1, AIN7, ALRT, AMUX, BATT_CHGR, GPIO0-GPIO2, I_LDO0, I_LDO1, I_SBB0-I_SBB2, NEN, NIRQ, NRST, SCL, SDA, THM, VIO, VL         | 21            | 5002                                                                                          | KEYSTONE                                                                               | N/A                | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                                                        |            |
| 2        | BATT, CHGIN, INLDO0, INLDO1, IN_SBB, LDO0, LDO1, SBB0- SBB2, SYS, VUSB                                                         | 12            | 5010                                                                                          | KEYSTONE                                                                               | N/A                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                        |            |
| 3 4      | C1 C3, C7                                                                                                                      | 1 2           | GRM188R71E474KA12;GCM188R71E474KA64 C1608X5R1E475K080AC; GRM188R61E475KE11                    | MURATA;MURATA TDK;MURATA                                                               | 0.47UF 4.7UF       | CAP; SMT (0603); 0.47UF; 10%; 25V; X7R; CERAMIC CAP; SMT (0603); 4.7UF; 10%; 25V; X5R; CERAMIC                                                               |            |
| 5        | C4                                                                                                                             | 1             | C0603X7R1A103K030BA;GRM033R71A103KA01; GCM033R71A103KA03;CGA1A2X7R1A103K030BA;0201 ZC103KAT2A | TDK;MURATA;MURATA;TDK;AVX                                                              | 0.01UF             | CAP; SMT (0201); 0.01UF; 10%; 10V; X7R; CERAMIC                                                                                                              |            |
| 6        | C5, C8, C11, C13, C14                                                                                                          | 5             | C1608X5R1A226M080AC; GRM188R61A226ME15                                                        | TDK;MURATA                                                                             | 22UF               | CAP; SMT (0603); 22UF; 20%; 10V; X5R; CERAMIC                                                                                                                |            |
| 7        | C6, C9, C10, C16, C17, C29, C36, C40-C42, C51,                                                                                 | 18            | C0402C105K8PAC;CC0402KRX5R6BB105                                                              | KEMET;YAGEO                                                                            | 1UF                | CAP; SMT (0402); 1UF; 10%; 10V; X5R; CERAMIC                                                                                                                 |            |
| 8        | C239-C242, C269-C271 C18                                                                                                       | 1             | C1005X5R1E474K050;GRT155R61E474KE01                                                           | TDK;MURATA                                                                             | 0.47UF             | CAP; SMT (0402); 0.47UF; 10%; 25V; X5R; CERAMIC                                                                                                              |            |
| 9 10     | C19 C20, C22, C25-C27, C30, C32-C35, C37-C39, C43, C44, C47, C48, C63-C67, C73, C207, C212, C217, C221-C223, C234, C235, C237, | 1             | 16TQC100MYF 05B7104KVH;CGJ2B3X7R1E104K050BB                                                   | PANASONIC                                                                              | 100UF              | CAP; SMT (7343); 100UF; 20%; 16V; TANTALUM                                                                                                                   |            |
|          | C202, C244, C268, C272-C277                                                                                                    | 41            | GRM155R71E104KE14;C1005X7R1E104K050BB;TMK1                                                    | MURATA;TDK;TAIYO YUDEN;TDK                                                             | 0.1UF              | CAP; SMT (0402); 0.1UF; 10%; 25V; X7R; CERAMIC                                                                                                               |            |
| 11 12    | C21, C28, C31 C23, C24                                                                                                         | 3 2           | C1005X5R1A475K050 GRM0335C1H270JA01                                                           | TDK MURATA                                                                             | 4.7UF 27PF         | CAP; SMT (0402); 4.7UF; 10%; 10V; X5R; CERAMIC CAP; SMT (0201); 27PF; 5%; 50V; C0G; CERAMIC                                                                  |            |
|          | C45, C52, C200, C205, C210,                                                                                                    | 13            |                                                                                               | KEMET;MURATA;TDK                                                                       | 4700PF             | CAP; SMT (0402); 4700PF; 10%; 50V; X7R; CERAMIC;                                                                                                             |            |
| 13 14    | C215, C220, C238, C248-C252 C46, C201, C206, C211, C216 C49, C50, C203, C204,                                                  | 5             | C0402C472K5RAC;GRM155R71H472KA01; C1005X7R1H472K050BA C0402H102J5GAC                          | KEMET                                                                                  | 1000PF             | CAP; SMT (0402); 1000PF; 5%; 50V; C0G; CERAMIC                                                                                                               |            |
| 15 16 17 | C208, C209, C213, C214, C218, C219                                                                                             | 10            | C0402C180J5GAC;GRM1555C1H180JA01; C1005C0G1H180J050BA                                         | KEMET;MURATA;TDK                                                                       | 18PF               | CAP; SMT (0402); 18PF; 5%; 50V; C0G; CERAMIC                                                                                                                 |            |
|          | C68-C72 D1                                                                                                                     | 5 1           | CL05B103KP5NNN B0530W-7-F                                                                     | SAMSUNG ELECTRONICS DIODES INCORPORATED                                                | 0.01UF B0530W      | CAP; SMT (0402); 0.01UF; 10%; 10V; X7R; CERAMIC DIODE; SCH; SMT (SOD-123); PIV=30V; IF=0.5A                                                                  |            |
| 18       | DS1-DS3, DS6                                                                                                                   | 4             | LTST-C190CKT                                                                                  | LITE-ON ELECTRONICS INC.                                                               | LTST-C190CKT       | DIODE; LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; -55 DEGC TO +85 DEGC                                                                              |            |
| 19       | DS4                                                                                                                            | 1             | LTST-C190YKT                                                                                  | LITE-ON ELECTRONICS INC.                                                               | LTST-C190YKT       | DIODE; LED; STANDARD; YELLOW; SMT (0603); PIV=5.0V; IF=0.02A; -55 DEGC TO +85 DEGC                                                                           |            |
| 20       | DS5                                                                                                                            | 1             | LTST-C190GKT                                                                                  | LITE-ON ELECTRONICS INC.                                                               | LTST-C190GKT       | DIODE; LED; WATER CLEAR GREEN; SMT (0603); VF=2.1V; IF=0.03A; -55 DEGC TO +85 DEGC                                                                           |            |
| 21       | GND1, GND5-GND7                                                                                                                | 4             | 5011                                                                                          | KEYSTONE                                                                               | N/A                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                      |            |
| 22       | GND2-GND4, GND8, GND10                                                                                                         | 5             | 9020 BUSS                                                                                     | WEICO WIRE                                                                             | MAXIMPAD           | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                                     |            |
| 23       | J1, J4                                                                                                                         | 2             | 10118193-0001LF                                                                               | FCICONNECT                                                                             | 10118193-0001LF    | CONNECTOR; FEMALE; SMT; MICRO USB B TYPE RECEPTACLE; RIGHT ANGLE; 5PINS                                                                                      |            |
| 24       | J2                                                                                                                             | 1             | PBC11SAAN                                                                                     | SULLINS ELECTRONICS CORP.                                                              | PBC11SAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 11PINS; -65 DEGC TO +125 DEGC                                                                            |            |
| 25       | J3                                                                                                                             | 1             | TSW-103-07-T-S                                                                                | SAMTEC                                                                                 | TSW-103-07-T-S     | CONNECTOR; THROUGH HOLE;TSW SERIES; SINGLE ROW; STRAIGHT; 3PINS                                                                                              |            |
| 26       | J5, J7, J8                                                                                                                     | 3             | TSW-103-07-L-D                                                                                | SAMTEC                                                                                 | TSW-103-07-L-D     | CONNECTOR; MALE; THROUGH HOLE; THROUGH HOLE 0.025 POST HEADER; STRAIGHT; 6PINS                                                                               |            |
| 27 28    | J6, J11-J14, J200-J207                                                                                                         | 13            | TSW-102-07-T-S S2B-PH-K-S(LF)(SN)                                                             | SAMTEC                                                                                 | TSW-102-07-T-S     | STRAIGHT; 2PINS; -55 DEGC TO +105 DEGC CONNECTOR; MALE; THROUGH HOLE; 2.0MM PITCH; DISCONNECTABLE CRIMP STYLE CONNECTOR; SIDE ENTRY TYPE; RIGHT ANGLE; 2PINS |            |
|          | J9                                                                                                                             | 1             |                                                                                               | JST MANUFACTURING                                                                      | S2B-PH-K-S(LF)(SN) |                                                                                                                                                              |            |
| 29       | J10                                                                                                                            | 1             | PEC03SAAN                                                                                     | SULLINS ELECTRONICS CORP.                                                              | PEC03SAAN          | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC;                                                                 |            |
| 30       | L1                                                                                                                             | 1             | DFE201610E-1R5M=P2                                                                            | MURATA                                                                                 | 1.5UH              | INDUCTOR; SMT (0806); MAGNETICALLY SHIELDED; 1.5UH; TOL=+/-20%; 2.1A                                                                                         |            |
| 31       | L2, L4, L5                                                                                                                     | 3             | BLM18AG601SN1                                                                                 | MURATA                                                                                 | 600                | INDUCTOR; SMT (0603); FERRITE-BEAD; 600; TOL=+/-; 0.5A                                                                                                       |            |
| 32       | L3                                                                                                                             | 1             | DFE201210S-2R2M=P2                                                                            | MURATA                                                                                 | 2.2UH              | EVKIT PART-INDUCTOR; SMT (0805); MAGNETICALLY SHIELDED; 2.2UH; TOL=+/-20%; 1.8A                                                                              |            |
| 33       | L7                                                                                                                             | 1             | DFE201210U-1R5M=P2                                                                            | TOKO                                                                                   | 1.5UH              | INDUCTOR; SMT (0805); METAL ALLOY CHIP; 1.5UH; TOL=+/- 20%; 1.9A                                                                                             |            |
| 34       | L8                                                                                                                             | 1             | DFE201612E-1R0M                                                                               | MURATA                                                                                 | 1UH                | INDUCTOR; SMT (0806); WIREWOUND CHIP; 1UH; TOL=+/- 20%; 2.9A                                                                                                 |            |
| 35       | L9                                                                                                                             | 1             | DFE201612E-1R5M                                                                               | MURATA                                                                                 | 1.5UH              | INDUCTOR; SMT (0806); METAL; 1.5UH; 20%; 2.30A                                                                                                               |            |
| 36       | Q2, Q200-Q203                                                                                                                  | 5             | IRFHM8337TRPBF                                                                                | INTERNATIONAL RECTIFIER                                                                | IRFHM8337TRPBF     | TRAN; HEXFET POWER MOSFET; NCH; PQFN8; PD-(2.8W); I-(18A); V-(30V) TRAN; NCH; DUAL N-CHANNEL ENHANCEMENT MODE                                                |            |
| 37       | Q3, Q4                                                                                                                         | 2             | DMN601DWK                                                                                     | DIODES INCORPORATED                                                                    | DMN601DWK          | FIELD EFFECT TRANSISTOR; SOT-363; PD-(0.2W); I-(0.3A); V-(60V)                                                                                               |            |
| 38       | Q205                                                                                                                           | 1             | FDN360P                                                                                       | FAIRCHILD SEMICONDUCTOR                                                                | FDN360P            | TRANSISTOR, MOSFET P-CHANNEL, SUPERSOT-3, PD=0.5W, ID=-2.0A, VDSS=-30V,VGSS=+/-20V                                                                           |            |
| 39       | Q206                                                                                                                           | 1             | 2N7002;2N7002;2N7002;2N7002                                                                   | DIODES INCORPORATED;ST MICROELECTRONICS; ON SEMICONDUCTOR; MICRO COMMERCIAL COMPONENTS | 2N7002             | TRAN; ; NCH; SOT-23; PD-(0.33W); IC-(0.5A); VCEO-(60V); -55 DEGC TO +150 DEGC                                                                                |            |
| 40 41    | R1, R3, R277, R279 R2                                                                                                          | 4 1           | CRCW06030000Z0 ANY                                                                            | VISHAY DALE ANY                                                                        | 0 1M               | RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W RESISTOR; 0603; 1M; 1%; 100PPM; 0.10W; THICK FILM;                                                               |            |
| 42       | R4, R6, R7, R19, R20, R27, R33, R52-R54, R61, R204, R225, R238, R251, R285, R286, R302-R306                                    | 22            | ERJ-2GE0R00                                                                                   | PANASONIC                                                                              |                    | FORMFACTOR RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                                                       |            |
| 43       | R8, R281, R282, R287, R288                                                                                                     |               | ERJ-2RKF27R0X;RC0402FR-                                                                       | VISHAY DALE;YAGEO                                                                      | 0                  |                                                                                                                                                              |            |
|          |                                                                                                                                | 5             | CRCW040210K0FK;RC0402FR-0710KL                                                                | PHICOMP PANASONIC;YAGEO PHICOMP;                                                       | 10K                | RES; SMT (0402); 10K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                            |            |
| 44 45    | R10, R11 R12                                                                                                                   | 2 1           | 0727RL;CRCW040227R0FK ERJ-2RKF1202                                                            | VISHAY DALE PANASONIC                                                                  | 27 12K             | RES; SMT (0402); 27; 1%; +/-100PPM/DEGC; 0.0630W RES; SMT (0402); 12K; 1%; +/-100PPM/DEGC; 0.1000W                                                           |            |

## MAX77658 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES                                                       |   DNI/DNP QTY | MFG PART #                                        | MANUFACTURER                        |                | VALUE DESCRIPTION                                                                                                | COMMENTS   |
|--------|---------------------------------------------------------------|---------------|---------------------------------------------------|-------------------------------------|----------------|------------------------------------------------------------------------------------------------------------------|------------|
| 46     | R13, R42, R55-R57, R210, R231, R244, R257, R301               |            10 | CRCW04021M00FK                                    | VISHAY DALE                         | 1M             | RES; SMT (0402); 1M; 1%; +/-100PPM/DEGC; 0.0630W                                                                 |            |
| 47     | R14, R40, R41, R207, R208, R229, R230, R242, R243, R254, R255 |            11 | ERJ-2RKF1001                                      | PANASONIC                           | 1K             | RES; SMT (0402); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                 |            |
| 48     | R16                                                           |             1 | CRCW04024752FK; 9C04021A4752FLHF3; CRCW040247K5FK | VISHAY DALE;YAGEO;VISHAY DALE       | 47.5K          | RES; SMT (0402); 47.5K; 1%; +/-100PPM/DEGC; 0.0630W                                                              |            |
| 49     | R5, R58, R214, R283, R17, R24                                 |             6 | CRCW0402100KFK;RC0402FR-07100KL                   | VISHAY;YAGEO                        | 100K           | RES; SMT (0402); 100K; 1%; +/-100PPM/DEGC; 0.0630W                                                               |            |
| 50     | R18, R47, R60                                                 |             3 | CRCW0402150RFK; 9C04021A1500FL                    | VISHAY DALE;YAGEO                   | 150            | RES; SMT (0402); 150; 1%; +/-100PPM/DEGC; 0.0630W                                                                |            |
| 51     | R21, R22                                                      |             2 | ERJ-2GEJ472                                       | PANASONIC                           | 4.7K           | RES; SMT (0402); 4.7K; 5%; +/-200PPM/DEGC; 0.1000W                                                               |            |
| 52     | R23                                                           |             1 | CRCW0402169KFK                                    | VISHAY DALE                         | 169K           | RES; SMT (0402); 169K; 1%; +/-100PPM/DEGK; 0.0630W                                                               |            |
| 53     | R25, R26                                                      |             2 | CRCW04022K20FK;RC0402FR-072K2L                    | VISHAY DALE;YAGEO PHICOMP           | 2.2K           | RES; SMT (0402); 2.2K; 1%; +/-100PPM/DEGC; 0.0630W                                                               |            |
| 54     | R28                                                           |             1 | CRCW0402470RFK                                    | VISHAY DALE                         | 470            | RES; SMT (0402); 470; 1%; +/-100PPM/DEGC; 0.0630W                                                                |            |
| 55     | R31, R203, R224, R237, R250                                   |             5 | ERJ-2RKF2002                                      | PANASONIC                           | 20K            | RES; SMT (0402); 20K; 1%; +/-100PPM/DEGC; 0.1000W                                                                |            |
| 56     | R32, R201, R222, R235, R248, R289                             |             6 | 9C04021A1000FL; RC0402FR-07100RL                  | PANASONIC;YAGEO PHYCOMP             | 100            | RES; SMT (0402); 100; 1%; +/-100PPM/DEGC; 0.0630W                                                                |            |
| 57     | R34, R202, R223, R236, R249                                   |             5 | CRCW0402680RFK;RC0402FR-07680RL                   | VISHAY DALE;YAGEO PHICOMP           | 680            | RES; SMT (0402); 680; 1%; +/-100PPM/DEGC; 0.0630W                                                                |            |
| 58     | R35, R36, R205, R206, R226, R228, R239, R240, R252,           |            10 | ERJ-2RKF3302                                      | PANASONIC                           | 33K            | RES; SMT (0402); 33K; 1%; +/-100PPM/DEGC; 0.0630W                                                                |            |
| 59     | R253 R38, R293, R295, R297, R299                              |             5 | ERJ-2RKF4703                                      | PANASONIC                           | 470K           | RES; SMT (0402); 470K; 1%; +/-100PPM/DEGC; 0.0630W                                                               |            |
| 60     | R39, R294, R296, R298, R300                                   |             5 | CRCW0402649KFK                                    | VISHAY DALE                         | 649K           | RES; SMT (0402); 649K; 1%; +/-100PPM/DEGC; 0.0630W                                                               |            |
| 61     | R43, R211, R233, R245, R258                                   |             5 | CRL1206-JW-R100ELF                                | BOURNS                              | 0.1            | RES; SMT (1206); 0.1; 1%; +/-200PPM/DEGC; 0.2500W                                                                |            |
| 62     | R44, R45, R212, R213, R227, R234, R246, R247, R259, R260      |            10 | CRCW0402787KFK                                    | VISHAY DALE                         | 787K           | RES; SMT (0402); 787K; 1%; +/-100PPM/DEGC; 0.0630W                                                               |            |
| 63     | R46, R48, R50                                                 |             3 | CRCW04021R00FK                                    | VISHAY DALE                         | 1              | RES; SMT (0402); 1; 1%; +/-100PPM/DEGC; 0.0630W                                                                  |            |
| 64     | R49, R51                                                      |             2 | CRCW0402120RFK;RC0402FR-07120RL                   | VISHAY DALE;YAGEO                   | 120            | RES; SMT (0402); 120; 1%; +/-100PPM/DEGC; 0.0630W                                                                |            |
| 65     | RT1                                                           |             1 | NCP15XH103F03                                     | MURATA                              | 10K            | THERMISTOR; SMT (0402); THICK FILM (NICKEL PLATED); 10K; TOL=+/-1%                                               |            |
| 66     | SW1                                                           |             1 | EVQ-Q2K03W                                        | PANASONIC                           | EVQ-Q2K03W     | SWITCH; SPST; SMT; 15V; 0.02A; LIGHT TOUCH SWITCH; RCOIL= OHM; RINSULATION= OHM; PANASONIC                       |            |
| 67     | SW2                                                           |             1 | CL-SB-12B-11                                      | NIDEC COPAL ELECTRONICS CORP        | CL-SB-12B-11   | SWITCH; SPDT; SMT; 12V; 0.2A; CL-SB SERIES; SLIDE SWITCH; RCOIL=0.05 OHM; RINSULATION=100MOHM                    |            |
| 68     | U1                                                            |             1 | MAX77658                                          | MAXIM                               | MAX77658BANX+  | EVKIT PART - IC; MAX77658; WLP36                                                                                 |            |
| 69     | U2                                                            |             1 | FT2232HL                                          | FUTURE TECHNOLOGY DEVICES INTL LTD. | FT2232HL       | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; LQFP64                                                  |            |
| 70     | U3, U4                                                        |             2 | MAX8512EXK+                                       | MAXIM                               | MAX8512EXK     | IC, VREG, Ultra-Low-Noise, High PSRR, Adjustable Vout, SC70-5                                                    |            |
| 71     | U5, U6                                                        |             2 | MAX3395EETC+                                      | MAXIM                               | MAX3395EETC    | IC; TRANS; 15KV ESD-PROTECTED HIGH-DRIVE CURRENT QUAD-LEVEL TRANSLATOR WITH SPEED-UP CIRCUITRY;                  |            |
| 72     | U7                                                            |             1 | AT24CS02-SSHM                                     | MICROCHIP                           | AT24CS02-SSHM  | TQFN12 4X4 IC; EPROM; I2C-COMPATIBLE TWO-WIRE SERIAL EEPROM; 150MIL; NSOIC8                                      |            |
| 73     | U200-U204                                                     |             5 | MAX44251AUA+                                      | MAXIM                               | MAX44251AUA+   | IC; OPAMP; ULTRA-PRECISION; LOW-NOISE OP AMP; UMAX8                                                              |            |
| 74     | U205                                                          |             1 | MAX5825AWP+                                       | MAXIM                               | MAX5825AWP+T   | IC; DAC; ULTRA-SMALL; OCTAL CHANNEL; 12-BIT BUFFERED OUTPUT DAC WITH INTERNAL REFERENCE AND I2C INTERFACE; WLP20 |            |
| 75     | U209                                                          |             1 | MAX11614EEE+                                      | MAXIM                               | MAX11614EEE+   | IC; ADC; LOW-POWER; 8-CHANNEL; I2C; 12-BIT ADC IN ULTRA-SMALL PACKAGE; QSOP16                                    |            |
| 76     | U210                                                          |             1 | MAX6071AAUT41+                                    | MAXIM                               | MAX6071AAUT41+ | IC; VREF; LOW NOISE; HIGH-PRECISION SERIES VOLTAGE REFERENCE; SOT23-6                                            |            |
| 77     | U211                                                          |             1 | MAX1697UEUT+                                      | MAXIM                               | MAX1697UEUT+   | IC; INV; INVERTING CHARGE PUMP WITH SHUTDOWN; SOT23-6                                                            |            |
| 78     | Y1                                                            |             1 | 7M-12.000MAAJ                                     | TXC CORPORATION                     | 12MHZ          | CRYSTAL; SMT; 18PF; 12MHZ; +/-30PPM; +/-30PPM                                                                    |            |
| 79     | PCB                                                           |             1 | MAX77658                                          | MAXIM                               | PCB            | PCB:MAX77658                                                                                                     | -          |
| 80     | L6                                                            |             0 | MLP1608VR47D                                      | TDK                                 | 0.47UH         | INDUCTOR; SMT (0603); SHIELDED; 0.47UH; TOL=+/-0.3nH; 0.8A                                                       |            |
| 81     | C2, C12, C15, C53-C62                                         |             0 | N/A                                               | N/A                                 | OPEN           | CAPACITOR; SMT (0402); OPEN; FORMFACTOR                                                                          |            |
| 82     | R15, R37                                                      |             0 | N/A                                               | N/A                                 | OPEN           |                                                                                                                  |            |
| TOTAL  |                                                               |           345 |                                                   |                                     |                | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                 |            |

Evaluates: MAX77658

## MAX77658 EV Kit Schematic

<!-- image -->

## MAX77658 EV Kit Schematic (continued)

<!-- image -->

## MAX77658 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX77658

## MAX77658 EV Kit Schematic (continued)

<!-- image -->

│

Evaluates: MAX77658

## MAX77658 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX77658

## MAX77658 Evaluation Kit

## MAX77658 EV Kit PCB Layouts

MAX77658 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX77658 EV Kit PCB Layout-Top Layer

<!-- image -->

Evaluates: MAX77658

MAX77658 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

MAX77658 EV Kit PCB Layout-Internal Layer 3

<!-- image -->

│

## MAX77658 EV Kit PCB Layouts (continued)

MAX77658 EV Kit PCB Layout-Bottom Layer

<!-- image -->

Evaluates: MAX77658

MAX77658 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                           | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 10/21           | Initial release                                                                                       | -               |
|                 1 | 7/22            | Updated Procedure and Installation sections, Ordering Information table, and EV Kit Bill of Materials | 4, 9, 11        |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

│

Evaluates: MAX77658