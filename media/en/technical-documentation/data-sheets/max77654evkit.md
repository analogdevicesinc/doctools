<!-- lastmod 2022-08-03 -->
## MAX77654 Evaluation Kit

## General Description

The  MAX77654  evaluation  kit  (EV  kit)  allows  for  easy experimentation  with  various  MAX77654  features.  This includes the SIMO buck-boost regulator, linear regulators, analog multiplexer, smart battery charger, on/off controller, and I 2 C interface.

Windows ® -based software provides a user-friendly graphical  user  interface  (GUI)  as  well  as  a  detailed register-based  interface  to  exercise  the  features  of  the MAX77654.

Ordering Information appears at end of data sheet.

Evaluates: MAX77654

## Benefits and Features

- Easy to Use
- GUI Drives I 2 C Interface
- On-Board Thermistor
- GPIO LEDs
- Assembled and Fully Tested
- On-Board Electronic Loads
- Steady-State, Transient, and Random Modes
- Demonstrates End-to-End Analog Multiplexer Implementation
- On-Board ADC
- Evaluates Both Push-Button and Slide-Switch On-Key Options

Figure 1. MAX77654 EV Kit Photo

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

<!-- image -->

Evaluates: MAX77654

Figure 2. EV Kit Simple Block Diagram

<!-- image -->

Evaluates: MAX77654

Figure 3. MAX77654 EV Kit Top View

<!-- image -->

## Evaluates: MAX77654

Figure 4. MAX77654 EV Kit Bottom View

<!-- image -->

Figure 5. MAX77654 EV Kit Solution Area

<!-- image -->

## MAX77654 EV Kit Files

| FILE                                              | DESCRIPTION   |
|---------------------------------------------------|---------------|
| MAX77654_SOLDERDOWN_REVC_BOM_2019-06-10.xlsx      | BOM           |
| MAX77654_SOLDERDOWN_EVKIT_REVC_SCH_2019-06-10.pdf | Schematic     |
| MAX77654_SOLDERDOWN_EVKIT_REVC_PCB_2019-05-16.pdf | Layout        |

## Quick Start

Follow  this  procedure  to  familiarize  yourself  with  the EV kit.

Note: In the following sections, software-related items  are  identified  by  bolding.  Text  in bold refers  to items  directly  from  the  EV  kit  software.  Text  in bold and  underlined refers  to  items  from  the  Windows operating system.

## Required Equipment

- MAX77654 EV kit
- MAX77654 EV kit GUI
- Windows-based PC
- Power supply
- Ammeter
- DVM
- Micro-USB cable

## Procedure

- 1) Install  the  GUI  software.  Visit  the  product  webpage at https://www.maximintegrated.com/max -77654evkit and  navigate  to  Design  Resources  to download  the  latest  version  of  the  EV  kit  software.

Save the EV kit software to a temporary folder and extract the files from the ZIP file.

- 2) Install EV kit shunts according to Table 1.
- 3) Connect  a  Micro-B  USB  cable  between  the  EV  kit USB port labeled 'GUI' and your Windows-based PC.
- 4) Apply  a  3.7V  supply  (set  for  100mA  current  limit) through an ammeter (set for 10mA range) across the VBATT and GND2 terminals of the EV kit. Turn the supply on.
- 5) Open  the  GUI  and  select Device  Connect in  the upper-left corner. Wait for a CONNECTED\_DEVICE\_ LIST window to pop up, and then press the Connect button.
- 6) Press the on-key (SW1).
- 7) On the ADC/AMUX tab  of  the  GUI,  click  the Read buttons next to VSBB0, VSBB1, VSBB2, VLDO0, and VLDO1. For the MAX77654M, 1.8V, 1.1V, 3.3V, 1.6V, and 1.8V should appear, respectively (Figure 6).
- 8) Confirm with the ammeter that the quiescent current is approximately 48µA. Then, in the Global Resources tab on the GUI, set the Main Bias Low-Power Mode bit to '1' and click the Write button. Now, confirm that the quiescent current is approximately 9µA.

│

## MAX77654 Evaluation Kit

This  concludes  the  Quick  Start  procedure.  Users  are encouraged to explore the device and its register settings with the GUI. For guidance on configuring the charger and the GPIOs, see the Charger Quick Start and GPIO Quick Evaluates: MAX77654

Start sections. During general device evaluation, set the ammeter range to greater than or equal to 1A to minimize the impact of its series resistance.

For more information on the GUI, see the Software section.

Figure 6. Quick Start: Regulator Check with the ADC

<!-- image -->

## Table 1. Default Shunt Positions and Jumper Descriptions

| REFERENCE DESIGNATOR   | DEFAULT POSITION   | FUNCTION                                                                                                                                              |
|------------------------|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| J3                     | 1-2                | 1-2: Connects nEN to SW1 (Push-button). 2-3: Connects nEN to SW2 (Slide-switch).                                                                      |
| J6                     | Open               | 1-2: Connects GUI VUSB to MAX77654 CHGIN. Install this jumper to power MAX77654 from the GUI USB.                                                     |
| J10                    | 2-3                | 1-2: Connects VIO to 3.3V. 2-3: Connects VIO to 1.8V                                                                                                  |
| J8                     | 3-4                | 1-2: Connects GPIO0 to VIO. 3-4: Connects GPIO0 to GUI GPIO0 (Refer to the GPIO Quick Start section for more details). 5-6: Connects GPIO0 to ground. |
| J5                     | 3-4                | 1-2: Connects GPIO1 to VIO. 3-4: Connects GPIO1 to GUI GPIO0 (Refer to the GPIO Quick Start section for more details). 5-6: Connects GPIO1 to ground. |
| J7                     | 3-4                | 1-2: Connects GPIO2 to VIO. 3-4: Connects GPIO2 to GUI GPIO0 (Refer to the GPIO Quick Start section for more details). 5-6: Connects GPIO2 to ground. |
| J201                   | 1-2                | 1-2: Connects SBB0 to the onboard electronic load and ADC.                                                                                            |
| J203                   | 1-2                | 1-2: Connects SBB1 to the onboard electronic load and ADC.                                                                                            |
| J205                   | 1-2                | 1-2: Connects SBB2 to the onboard electronic load and ADC.                                                                                            |
| J207                   | 1-2                | 1-2: Connects LDO0 to the onboard electronic load and ADC.                                                                                            |
| J12                    | 1-2                | 1-2: Connects LDO1 to the onboard electronic load and ADC.                                                                                            |
| J200                   | 1-2                | 1-2: Connects the gate of the Q200 load FET to the U200 amplifier.                                                                                    |
| J202                   | 1-2                | 1-2: Connects the gate of the Q201 load FET to the U201 amplifier.                                                                                    |
| J204                   | 1-2                | 1-2: Connects the gate of the Q202 load FET to the U202 amplifier.                                                                                    |
| J206                   | 1-2                | 1-2: Connects the gate of the Q203 load FET to the U203 amplifier.                                                                                    |
| J11                    | 1-2                | 1-2: Connects the gate of the Q2 load FET to the U204 amplifier.                                                                                      |

## MAX77654 Evaluation Kit

## Charger Quick Start

The Charger tab on the GUI has many settings to toggle depending  on  application  requirements;  however,  for  a quick start, follow the procedure below:

- 1) Determine  the  capacity  of  the  battery  to  identify  a safe  charge  current.  Maxim  recommends  charging at  0.75C  (e.g.,  charge  a  40mAh  battery  with  30mA charge  current).  Consult  the  battery  manufacturer's data sheet carefully to determine safe charging parameters.
- 2) In Charger Configuration E/F, move the Fast-Charge Current  (IFAST\_CHG)  slider  to  the  desired  charge current setting, and click the Write button.
- 3) In Charger Configuration G/H, move the Fast-Charge Voltage  (VFAST\_CHG) slider to the desired charge voltage setting, and click the Write button.
- 4) Make sure there is a 5V charge source connected to the  EV  kit.  Then,  enable  the  charger  by  setting  the switch-in Charger Configuration B-labeled Battery Charger Enable to '1' (Enabled) and click the Write button.
- 5) The  battery  should  now  be  charging  at  the  charge current set from step 2.

For  more  information  on  the  capabilities  of  the  battery charger, refer to the IC data sheet.

Figure 7. GPIO Headers

<!-- image -->

Figure 8. GPIO Input Value Box in GUI

<!-- image -->

## GPIO Quick Start

There are three GPIOs (GPIO0, GPIO1, and GPIO2) that can serve either as standard GPIOs or in their alternate functionalities.  Onboard  LEDs  light  up  depending  on  the GPIO state. To get started with the GPIOs, follow the procedure below:

- 1) In  the GPIO tab  of  the  GUI,  set  the  desired  GPIOs Alternate Mode Enable to 0 (Standard GPIO).
- 2) Set the Direction to 0 (Output).
- 3) Set the Driver Type to 1 (Push-Pull). If using 0 (OpenDrain),  make  sure  there  is  a  pullup  resistor  on  the GPIO pin.
- 4) Click the Write button.
- 5) Set the Data Output to 1 (Logic High) and click the Write button. The onboard LED should light up.
- 6) Now change the Direction to 1 (Input) and click the Write button.
- 7) Install the appropriate shunt on J8, J5, or J7 to connect the desired GPIO to the GUI GPIO.
- 8) From the GUI toggle the EV kit GPIO, clicking Write after  each  time.  Click Read to  observe  the GPIO Input Value update.

Evaluates: MAX77654

│

## Detailed Description of Hardware (or Software)

## On-Key Options

For applications that require the IC to enable with a userinteractable  switch,  the  EV  kit  comes  with  two  common types:  the  push-button  (momentary)  and  the  slide-switch (persistent).  The  active-low  enable  pin  (nEN)  has  an internal pullup resistor. Select which type of switch to use with  jumper  J3.  Refer  to  the  MAX77654  data  sheet  for more information on configuring the IC for momentary or persistent switches.

## Temperature Monitoring

Use the onboard thermistor RT1 to evaluate the charger's response  to  real  ambient  temperature.  The  NTC  beta parameter is 3380K. Temperature thresholds corresponding to this NTC beta are listed in Table 2.

The  MAX77654  automatically  biases  the  temperature monitoring  circuit  whenever  CHGIN  is  valid  and  the thermistor is enabled (THM\_EN = 1), or the MUX\_SEL[3:0] bitfield  configures  AMUX  to  output  the  TBIAS  or  THM voltage  (MUX\_SEL  =  0b0111  or  0b1000).  Refer  to  the Adjustable Thermistor Temperature Monitors section of the MAX77654 data sheet for more information.

## Electronic Load

The EV kit comes with an electronic load allowing the user to  evaluate  the  SIMO  and  LDO  load  current  capabilities. Onboard  circuits  set  the  load  current  through  I 2 C.  J201, J203, J205, J207, and J12 connect the load to the output of the SBB0, SBB1, SBB2, LDO0, and LDO1, respectively. To load SYS, remove J207 and connect pin 1 of the header (marked  by  a  white  triangle)  to  VSYS.  To  exercise  the load  transient  response,  remove  J200  (for  SBB0),  J202 (for SBB1), J204 (for SBB2), J206 (for LDO0), or J11 (for LDO1) and connect a signal generator to the gate of the

## Table 2. Trip Thresholds for β = 3380K Thermistor

|   TRIP VOLTAGE (V) |   TRIP TEMPERATURES (°C) |
|--------------------|--------------------------|
|              1.024 |                      -10 |
|              0.976 |                       -5 |
|              0.923 |                        0 |
|              0.867 |                        5 |
|              0.807 |                       10 |
|              0.747 |                       15 |
|              0.511 |                       35 |
|              0.459 |                       40 |
|              0.411 |                       45 |
|              0.367 |                       50 |
|              0.327 |                       55 |
|              0.291 |                       60 |

load MOSFET (pin 2 of the respective header). Drive the gate with a signal between 1V (off) and 3V (fully on) to apply transients to the output of the SIMO or LDO. Note that there are 1Ω sense resistors with test points (called VIL\_SBB0, VIL\_SBB1,  VIL\_SBB2,  VIL\_LDO0,  and  VIL\_LDO1)  for  a 1:1 conversion of load current to voltage. See the Software section to learn how to set the load current from the GUI.

## On-Board ADC (MAX11614)

An onboard ADC is available  to  convert  the  output  voltages of SBB0, SBB1, SBB2, and LDO. The AMUX pin of the  MAX77654  and  test  points AIN1  and AIN7  are  also measured.  The  GUI  does  the  appropriate  conversions. See  the Software section  for  how  to  read  these  values from the GUI.

Figure 9. Electronic Load Block Diagram

<!-- image -->

│

## MAX77654 Evaluation Kit

## Software

The  graphical-user  interface  (GUI)  software  allows  for a  convenient,  quick,  and  thorough  evaluation  of  the MAX77654.

The GUI has individual tabs for each functional block of the device (global resources, interrupts/status, watchdog, GPIO,  charger,  SIMO,  LDO)  and  two  additional  tabs  for controlling EV kit hardware (load control and ADC/AMUX). In addition, the FPS Configuration tab contains a plot of the power-up and power-down sequences. See Figure 10 for a screenshot of the GUI upon opening.

## Installation

Visit  the  product  webpage  at www.maximintegrated. com/max77654evkit and  navigate  to  Design  Resources to download the latest version of the EV kit software. Save the EV kit software to a temporary folder and decompress the ZIP file.

## Windows Drivers

Upon connection of a Micro-USB cable between your PC and  the  EV  kit  for  the  first  time,  wait  a  few  minutes  for Windows to automatically install drivers.

Evaluates: MAX77654

## Graphical User Interface Details (GUI)

The GUI drives I 2 C communication with the EV kit. Every control in the GUI (excluding the Load Control and ADC/ AMUX tabs)  corresponds directly to a register within the MAX77654. Hover your cursor over control names for a description of that register. Refer to the IC data sheet for the complete register map.

## Load Control Tab

The Load Control tab contains controls for load currents on  the  regulator  outputs.  The  GUI  is  capable  of  setting steady-state, transient, and random load currents. To set a  load  current,  use  the  slider  bar  or  text  field  to  input  a value (mA) and check the Enable box. Shuffle through the modes to exercise different load conditions.

The offset and gain values are set by Maxim and do not need to be altered.

## ADC/AMUX Tab

This  tab  allows  users  to  convert  important  voltage  and current signals to digital readings. To read a signal, click the Read button  and  examine  the Interpreted  Value column.

Figure 10. MAX77654 EV Kit GUI

<!-- image -->

│

## Ordering Information

| PART           | IC            | TYPE   |
|----------------|---------------|--------|
| MAX77654EVKIT# | MAX77654MENV+ | EV Kit |

# Denotes a RoHS-compliant device that may include lead(Pb) that is exempt under the RoHS requirements.

## MAX77654 EV Kit Bill of Materials

|   ITEM | REF_DES                                                                                                                                           | DNI/DNP   |   QTY | MFG PART #                                                                   | MANUFACTURER                | VALUE        | DESCRIPTION                                                                                                                   |
|--------|---------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-------|------------------------------------------------------------------------------|-----------------------------|--------------|-------------------------------------------------------------------------------------------------------------------------------|
|      1 | AIN1, AIN7, AMUX, GPIO0-GPIO2, I_LDO0, I_LDO1, I_SBB0-I_SBB2, NEN, NIRQ, NRST, SCL, SDA, TBIAS, THM, VL                                           | -         |    19 | 5002                                                                         | KEYSTONE                    | N/A          | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                   |
|      2 | C1                                                                                                                                                | -         |     1 | GRM188R71E474KA12; GCM188R71E474KA64                                         | MURATA;MURATA               | 0.47µF       | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.47µF; 25V; TOL = 10%; MODEL = GRM SERIES; TG = -55°C TO +125°C; TC = X7R               |
|      3 | C3, C7                                                                                                                                            | -         |     2 | C1608X5R1E475K080AC; GRM188R61E475KE11                                       | TDK;MURATA                  | 4.7µF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7µF; 25V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R                                     |
|      4 | C4                                                                                                                                                | -         |     1 | GRM033R71C332KA88                                                            | MURATA                      | 3300PF       | CAP; SMT (0201); 3300PF; 10%; 16V; X7R; CERAMIC CHIP                                                                          |
|      5 | C5, C8, C11, C13, C14, C20                                                                                                                        | -         |     6 | C1608X5R1A226M080AC; GRM188R61A226ME15                                       | TDK;MURATA                  | 22µF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 22µF; 10V; TOL = 20%; TG = -55°C TO +85°C; TC = X5R                                      |
|      6 | C6, C9, C10, C16, C17, C29, C36, C40-C42, C51, C239-C242, C269-C271                                                                               | -         |    18 | C0402C105K8PAC; CC0402KRX5R6BB105                                            | KEMET;YAGEO                 | 1µF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 1µF; 10V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R                                       |
|      7 | C12, C15                                                                                                                                          | -         |     2 | GRM155R61C225KE44                                                            | MURATA                      | 2.2µF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 2.2µF; 16V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R                                     |
|      8 | C21, C28, C31                                                                                                                                     | -         |     3 | C1005X5R1A475K050                                                            | TDK                         | 4.7µF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7µF; 10V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R                                     |
|      9 | C22, C25-C27, C30, C32-C35, C37-C39, C43, C44, C47, C48, C63-C67, C73, C202, C207, C212, C217, C221-C223, C234, C235, C237, C244, C268, C272-C277 | -         |    40 | GRM155R71E104KE14; C1005X7R1E104K050BB; TMK105B7104KVH; CGJ2B3X7R1E104K050BB | MURATA;TDK; TAIYO YUDEN;TDK | 0.1µF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1µF; 25V; TOL = 10%; MODEL = GRM SERIES; TG = -55°C TO +125°C; TC = X7R                |
|     10 | C23, C24                                                                                                                                          | -         |     2 | GRM0335C1H270JA01                                                            | MURATA                      | 27PF         | CAP; SMT (0201); 27PF; 5%; 50V; C0G; CERAMIC CHIP                                                                             |
|     11 | C45, C52, C200, C205, C210, C215, C220, C238, C248-C252                                                                                           | -         |    13 | C0402C472K5RAC; GRM155R71H472KA01; C1005X7R1H472K050BA                       | KEMET; MURATA;TDK           | 4700PF       | CAPACITOR; SMT (0402); CERAMIC CHIP; 4700PF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R-                                  |
|     12 | C46, C201, C206, C211, C216                                                                                                                       | -         |     5 | C0402H102J5GAC                                                               | KEMET                       | 1000PF       | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL = 5%; MODEL = HT SERIES; TG = -55°C TO +200°C; TC = C0G                 |
|     13 | C49, C50, C203, C204, C208, C209, C213, C214, C218, C219                                                                                          | -         |    10 | C0402C180J5GAC; GRM1555C1H180JA01; C1005C0G1H180J050BA                       | KEMET; MURATA;TDK           | 18PF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 18PF; 50V; TOL = 5%; TG = -55°C TO +125°C; TC = C0G                                      |
|     14 | C68-C72                                                                                                                                           | -         |     5 | CL05B103KP5NNN                                                               | SAMSUNG ELECTRONICS         | 0.01µF       | CAPACITOR; SMT (0402); CERAMIC; 0.01UF; 10V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                        |
|     15 | CHGIN, INLDO0, INLDO1, IN_SBB, LDO0, LDO1, SBB0-SBB2, VBATT, VSYS, VUSB                                                                           | -         |    12 | 5010                                                                         | KEYSTONE                    | N/A          | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                   |
|     16 | D1                                                                                                                                                | -         |     1 | B0530W-7-F                                                                   | DIODES INCORPORATED         | B0530W       | DIODE; SCH; SMT (SOD-123); PIV = 30V; IF = 0.5A                                                                               |
|     17 | DS1-DS3                                                                                                                                           | -         |     3 | LTST-C190CKT                                                                 | LITE-ON ELECTRONICS INC.    | LTST-C190CKT | DIODE; LED; STANDARD; RED; SMT (0603); PIV = 5.0V; IF=0.04A; -55°C TO +85°C                                                   |
|     18 | DS4                                                                                                                                               | -         |     1 | LTST-C190YKT                                                                 | LITE-ON ELECTRONICS INC.    | LTST-C190YKT | DIODE; LED; STANDARD; YELLOW; SMT (0603); PIV = 5.0V; IF = 0.02A; -55°C TO +85°C                                              |
|     19 | DS5                                                                                                                                               | -         |     1 | LTST-C190GKT                                                                 | LITE-ON ELECTRONICS INC.    | LTST-C190GKT | DIODE; LED; WATER CLEAR GREEN; SMT (0603); VF = 2.1V; IF = 0.03A; -55°C TO +85°C                                              |
|     20 | GND1, GND5-GND7                                                                                                                                   | -         |     4 | 5011                                                                         | KEYSTONE                    | N/A          | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |

Evaluates: MAX77654

## MAX77654 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                                                                                                | DNI/DNP   |   QTY | MFG PART #                                     | MANUFACTURER                                                                             | VALUE              | DESCRIPTION                                                                                                           |
|--------|--------------------------------------------------------------------------------------------------------|-----------|-------|------------------------------------------------|------------------------------------------------------------------------------------------|--------------------|-----------------------------------------------------------------------------------------------------------------------|
|     21 | GND2-GND4, GND8, GND10                                                                                 | -         |     5 | 9020 BUSS                                      | WEICO WIRE                                                                               | MAXIMPAD           | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                              |
|     22 | J1, J4                                                                                                 | -         |     2 | 10118193-0001LF                                | FCI CONNECT                                                                              | 10118193-0001LF    | CONNECTOR; FEMALE; SMT; MICRO USB B TYPE RECEPTACLE; RIGHT ANGLE; 5PINS                                               |
|     23 | J2                                                                                                     | -         |     1 | PBC11SAAN                                      | SULLINS ELECTRONICS CORP.                                                                | PBC11SAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 11PINS; -65°C TO +125°C                                           |
|     24 | J3                                                                                                     | -         |     1 | TSW-103-07-T-S                                 | SAMTEC                                                                                   | TSW-103-07-T-S     | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 3PINS                                                      |
|     25 | J5, J7, J8                                                                                             | -         |     3 | TSW-103-07-L-D                                 | SAMTEC                                                                                   | TSW-103-07-L-D     | CONNECTOR; MALE; THROUGH HOLE; THROUGH HOLE 0.025 POST HEADER; STRAIGHT; 6PINS                                        |
|     26 | J6, J11, J12, J200-J207                                                                                | -         |    11 | TSW-102-07-T-S                                 | SAMTEC                                                                                   | TSW-102-07-T-S     | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55°C TO +105°C                                     |
|     27 | J9                                                                                                     | -         |     1 | S2B-PH-K-S(LF)(SN)                             | JST MANUFACTURING                                                                        | S2B-PH-K-S(LF)(SN) | CONNECTOR; MALE; THROUGH HOLE; 2.0MM PITCH; DISCONNECTABLE CRIMP STYLE CONNECTOR; SIDE ENTRY TYPE; RIGHT ANGLE; 2PINS |
|     28 | J10                                                                                                    | -         |     1 | PEC03SAAN                                      | SULLINS ELECTRONICS CORP.                                                                | PEC03SAAN          | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65°C TO +125°C;                                |
|     29 | L1                                                                                                     | -         |     1 | DFE201612E-2R2M                                | MURATA                                                                                   | 2.2µH              | INDUCTOR; SMT (0806); WIREWOUND CHIP; 2.2µH; TOL = ± 20%; 1.8A                                                        |
|     30 | L2, L4, L5                                                                                             | -         |     3 | BLM18AG601SN1                                  | MURATA                                                                                   | 600                | INDUCTOR; SMT (0603); FERRITE-BEAD; 600; TOL = ±; 0.5A                                                                |
|     31 | L3                                                                                                     | -         |     1 | DFE201210S-2R2M = P2                           | MURATA                                                                                   | 2.2µH              | EVKIT PART-INDUCTOR; SMT (0805); MAGNETICALLY SHIELDED; 2.2µH; TOL = ±20%; 1.8A                                       |
|     32 | L7                                                                                                     | -         |     1 | DFE201210U-1R5M = P2                           | TOKO                                                                                     | 1.5µH              | INDUCTOR; SMT (0805); METAL ALLOY CHIP; 1.5µH; TOL = ±20%; 1.9A                                                       |
|     33 | L8                                                                                                     | -         |     1 | DFE201612E-1R0M                                | MURATA                                                                                   | 1µH                | INDUCTOR; SMT (0806); WIREWOUND CHIP; 1µH; TOL = ±20%; 2.9A                                                           |
|     34 | L9                                                                                                     | -         |     1 | DFE201612E-1R5M                                | MURATA                                                                                   | 1.5UH              | INDUCTOR; SMT (0806); METAL; 1.5µH; 20%; 2.30A                                                                        |
|     35 | Q2, Q200-Q203                                                                                          | -         |     5 | IRFHM8337TRPBF                                 | INTERNATIONAL RECTIFIER                                                                  | IRFHM8337TRPBF     | TRAN; HEXFET POWER MOSFET; NCH; PQFN8; PD-(2.8W); I-(18A); V-(30V)                                                    |
|     36 | Q3, Q4                                                                                                 | -         |     2 | DMN2005DLP4K                                   | DIODES INCORPORATED                                                                      | DMN2005DLP4K       | TRAN; DUAL N-CHANNEL ENHANCEMENT MODE MOSFET; NCH; DFN1310-6; PD-(0.4W); I-(0.3A); V-(20V)                            |
|     37 | Q205                                                                                                   | -         |     1 | FDN360P                                        | FAIRCHILD SEMICONDUCTOR                                                                  | FDN360P            | TRANSISTOR, MOSFET P-CHANNEL, SUPERSOT-3, PD = 0.5W, ID = -2.0A, VDSS = -30V,VGSS = ± 20V                             |
|     38 | Q206                                                                                                   | -         |     1 | 2N7002;2N7002; 2N7002;2N7002                   | DIODES INCORPORATED; ST MICRO ELECTRONICS; ON SEMICONDUCTOR; MICRO COMMERCIAL COMPONENTS | 2N7002             | TRAN; ; NCH; SOT-23; PD-(0.33W); IC-(0.5A); VCEO-(60V); -55°C TO +150°C                                               |
|     39 | R1, R3, R277, R279                                                                                     | -         |     4 | CRCW06030000Z0                                 | VISHAY DALE                                                                              | 0                  | RESISTOR; 0603; 0 Ω ; 0%; JUMPER; 0.1W; THICK FILM                                                                    |
|     40 | R2                                                                                                     | -         |     1 | ANY                                            | ANY                                                                                      | 1M                 | RESISTOR; 0603; 1M; 1%; 100PPM; 0.10W; THICK FILM; FORMFACTOR                                                         |
|     41 | R4, R6, R7, R19, R20, R29, R30, R33, R44, R52-R54, R204, R225, R238, R251, R259, R285, R286, R302-R306 | -         |    24 | ERJ-2GE0R00                                    | PANASONIC                                                                                | 0                  | RESISTOR; 0402; 0 Ω ; 0%; JUMPER; 0.10W; THICK FILM                                                                   |
|     42 | R8, R9, R281, R282, R287, R288                                                                         | -         |     6 | CRCW040210K0FK; RC0402FR-0710KL                | VISHAY DALE; YAGEO PHICOMP                                                               | 10K                | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                                                  |
|     43 | R10, R11                                                                                               | -         |     2 | ERJ-2RKF27R0X; RC0402FR-0727RL; CRCW040227R0FK | PANASONIC; YAGEO PHICOMP; VISHAY DALE                                                    | 27                 | RESISTOR, 0402, 27 Ω , 1%, 100PPM, 0.0625W, THICK FILM                                                                |
|     44 | R12                                                                                                    | -         |     1 | ERJ-2RKF1202                                   | PANASONIC                                                                                | 12K                | RESISTOR; 0402; 12K Ω ; 1%; 100PPM; 0.1W; THICK FILM                                                                  |
|     45 | R13, R42, R55-R57, R210, R231, R244, R257, R301                                                        | -         |    10 | CRCW04021M00FK                                 | VISHAY DALE                                                                              | 1M                 | RESISTOR; 0402; 1M; 1%; 100PPM; 0.0625W; THICK FILM                                                                   |

│

Evaluates: MAX77654

## MAX77654 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                                                       | DNI/DNP   |   QTY | MFG PART #                                        | MANUFACTURER                         | VALUE   | DESCRIPTION                                             |
|--------|---------------------------------------------------------------|-----------|-------|---------------------------------------------------|--------------------------------------|---------|---------------------------------------------------------|
|     46 | R14, R40, R41, R207, R208, R229, R230, R242, R243, R254, R255 | -         |    11 | ERJ-2RKF1001                                      | PANASONIC                            | 1K      | RESISTOR; 0402; 1KΩ; 1%; 100PPM; 0.10W; THICK FILM      |
|     47 | R16                                                           | -         |     1 | CRCW04024752FK; 9C04021A4752FLHF3; CRCW040247K5FK | VISHAY DALE; YAGEO; VISHAY DALE      | 47.5K   | RESISTOR; 0402; 47.5K; 1%; 100PPM; 0.0625W; THICK FILM  |
|     48 | R5, R214, R283, R17, R24                                      | -         |     5 | CRCW0402100KFK; RC0402FR-07100KL                  | VISHAY;YAGEO                         | 100K    | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM   |
|     49 | R18, R47                                                      | -         |     2 | CRCW0402150RFK; 9C04021A1500FL                    | VISHAY DALE; YAGEO                   | 150     | RESISTOR; 0402; 150 Ω ; 1%; 100PPM; 0.0625W; THICK FILM |
|     50 | R21, R22                                                      | -         |     2 | ERJ-2GEJ472                                       | PANASONIC                            | 4.7K    | RESISTOR; 0402; 4.7KΩ; 5%; 200PPM; 0.10W; THICK FILM    |
|     51 | R23                                                           | -         |     1 | CRCW0402169KFK                                    | VISHAY DALE                          | 169K    | RESISTOR; 0402; 169KΩ; 1%; 100PPM; 0.063W; THICK FILM   |
|     52 | R25, R26                                                      | -         |     2 | CRCW04022K20FK; RC0402FR-072K2L                   | VISHAY DALE; YAGEO PHICOMP           | 2.2K    | RESISTOR, 0402, 2.2KΩ, 1%, 100PPM, 0.0625W, THICK FILM  |
|     53 | R27                                                           | -         |     1 | RC0402FR-0722RL                                   | YAGEO PHYCOMP                        | 22      | RESISTOR; 0402; 22Ω; 1%; 100PPM; 0.063W; THICK FILM     |
|     54 | R28                                                           | -         |     1 | CRCW0402470RFK                                    | VISHAY DALE                          | 470     | RESISTOR, 0402, 470Ω, 1%, 100PPM, 0.0625W, THICK FILM   |
|     55 | R31, R203, R224, R237, R250                                   | -         |     5 | ERJ-2RKF2002                                      | PANASONIC                            | 20K     | RESISTOR; 0402; 20KΩ; 1%; 100PPM; 0.1W; THICK FILM      |
|     56 | R32, R201, R222, R235, R248, R289                             | -         |     6 | CRCW0402100RFK; 9C04021A1000FL; RC0402FR-07100RL  | VISHAY DALE;PANASONIC; YAGEO PHYCOMP | 100     | RESISTOR; 0402; 100Ω; 1%; 100PPM; 0.063W; THICK FILM    |
|     57 | R34, R202, R223, R236, R249                                   | -         |     5 | CRCW0402680RFK; RC0402FR-07680RL                  | VISHAY DALE;YAGEO PHICOMP            | 680     | RESISTOR, 0402, 680 Ω , 1%, 100PPM, 0.0625W, THICK FILM |
|     58 | R35, R36, R205, R206, R226, R228, R239, R240, R252, R253      | -         |    10 | ERJ-2RKF3301                                      | PANASONIC                            | 3.3K    | RESISTOR; 0402; 3.3KΩ; 1%; 100PPM; 0.10W; THICK FILM    |
|     59 | R38, R293, R295, R297, R299                                   | -         |     5 | ERJ-2RKF4703                                      | PANASONIC                            | 470K    | RESISTOR, 0402, 470KΩ, 1%, 100PPM, 0.0625W, THICK FILM  |
|     60 | R39, R294, R296, R298, R300                                   | -         |     5 | CRCW0402649KFK                                    | VISHAY DALE                          | 649K    | RESISTOR; 0402; 649K Ω ; 1%; 100PPM; 0.063W; THICK FILM |
|     61 | R43, R211, R233, R245, R258                                   | -         |     5 | CSR1206FT1R00                                     | STACKPOLE ELECTRONICS INC.           | 1       | RESISTOR; 1206; 1 Ω ; 1%; 100PPM; 0.5W; THICK FILM      |
|     62 | R46, R48, R50                                                 | -         |     3 | CRCW04021R00FK                                    | VISHAY DALE                          | 1       | RESISTOR, 0402, 1Ω, 1%, 100PPM, 0.0625W, THICK FILM     |
|     63 | R49, R51                                                      | -         |     2 | CRCW0402120RFK; RC0402FR-07120RL                  | VISHAY DALE; YAGEO                   | 120     | RESISTOR; 0402; 120Ω; 1%; ± 100PPM; 0.063W; THICK FILM  |
|     64 | R212, R213, R227, R234, R246, R247                            | -         |     6 | CRCW0402787KFK                                    | VISHAY DALE                          | 787K    | RESISTOR; 0402; 787K Ω ; 1%; 100PPM; 0.063W; METAL FILM |

│

Evaluates: MAX77654

## MAX77654 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES               | DNI/DNP   |   QTY | MFG PART #     | MANUFACTURER                        | VALUE          | DESCRIPTION                                                                                                      |
|--------|-----------------------|-----------|-------|----------------|-------------------------------------|----------------|------------------------------------------------------------------------------------------------------------------|
| 65     | RT1                   | -         |     1 | NCP15XH103F03  | MURATA                              | 10K            | THERMISTOR; SMT (0402); THICK FILM (NICKEL PLATED); 10K; TOL = ± 1%                                              |
| 66     | SW1                   | -         |     1 | EVQ-Q2K03W     | PANASONIC                           | EVQ-Q2K03W     | SWITCH; SPST; SMT; 15V; 0.02A; LIGHT TOUCH SWITCH; RCOIL = Ω ; RINSULATION = Ω; PANASONIC                        |
| 67     | SW2                   | -         |     1 | CL-SB-12B-11   | NIDEC COPAL ELECTRONICS CORP        | CL-SB-12B-11   | SWITCH; SPDT; SMT; 12V; 0.2A; CL-SB SERIES; SLIDE SWITCH; RCOIL = 0.05Ω; RINSULATION = 100MΩ                     |
| 68     | U1                    | -         |     1 | MAX77654MENV+  | MAXIM                               | MAX77654MENV+  | EVKIT PART - IC; MAX77654MENV+ ; WLP30; PACKAGE CODE: N302C2+1; PACKAGE OUTLINE DRAWING: 21-100307               |
| 69     | U2                    | -         |     1 | FT2232HL       | FUTURE TECHNOLOGY DEVICES INTL LTD. | FT2232HL       | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; LQFP64                                                  |
| 70     | U3, U4                | -         |     2 | MAX8512EXK+    | MAXIM                               | MAX8512EXK     | IC, VREG, Ultra-Low-Noise, High PSRR, Adjustable Vout, SC70-5                                                    |
| 71     | U5, U6                | -         |     2 | MAX3395EETC+   | MAXIM                               | MAX3395EETC    | IC; TRANS; 15KV ESD-PROTECTED HIGH-DRIVE CURRENT QUAD-LEVEL TRANSLATOR WITH SPEED-UP CIRCUITRY; TQFN12 4X4       |
| 72     | U7                    | -         |     1 | AT24CS02-SSHM  | MICROCHIP                           | AT24CS02-SSHM  | IC; EPROM; I2C-COMPATIBLE TWO-WIRE SERIAL EEPROM; 150MIL; NSOIC8                                                 |
| 73     | U200-U204             | -         |     5 | MAX44251AUA+   | MAXIM                               | MAX44251AUA+   | IC; OPAMP; ULTRA-PRECISION; LOW-NOISE OP AMP; UMAX8                                                              |
| 74     | U205                  | -         |     1 | MAX5825AWP+    | MAXIM                               | MAX5825AWP+T   | IC; DAC; ULTRA-SMALL; OCTAL CHANNEL; 12-BIT BUFFERED OUTPUT DAC WITH INTERNAL REFERENCE AND I2C INTERFACE; WLP20 |
| 75     | U209                  | -         |     1 | MAX11614EEE+   | MAXIM                               | MAX11614EEE+   | IC; ADC; LOW-POWER; 8-CHANNEL; I2C; 12-BIT ADC IN ULTRA-SMALL PACKAGE; QSOP16                                    |
| 76     | U210                  | -         |     1 | MAX6071AAUT41+ | MAXIM                               | MAX6071AAUT41+ | IC; VREF; LOW NOISE; HIGH-PRECISION SERIES VOLTAGE REFERENCE; SOT23-6                                            |
| 77     | U211                  | -         |     1 | MAX1697UEUT+   | MAXIM                               | MAX1697UEUT+   | IC; INV; INVERTING CHARGE PUMP WITH SHUTDOWN; SOT23-6                                                            |
| 78     | Y1                    | -         |     1 | 7M-12.000MAAJ  | TXC CORPORATION                     | 12MHZ          | CRYSTAL; SMT; 18PF; 12MHZ; ± 30PPM; ±30PPM                                                                       |
| 79     | PCB                   | -         |     1 | MAX77654       | MAXIM                               | PCB            | PCB: MAX77654                                                                                                    |
| 80     | L6                    | DNP       |     0 | MLP1608VR47D   | TDK                                 | 0.47µH         | INDUCTOR; SMT (0603); SHIELDED; 0.47µH; TOL = ± 0.3nH; 0.8A                                                      |
| 81     | C2, C18, C19, C53-C62 | DNP       |     0 | N/A            | N/A                                 | OPEN           | CAPACITOR; SMT (0402); OPEN; FORMFACTOR                                                                          |
| 82     | R15, R37, R45, R260   | DNP       |     0 | N/A            | N/A                                 | OPEN           | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                 |
| TOTAL  |                       |           |   338 |                |                                     |                |                                                                                                                  |

NOTE: DNI--&gt; DO NOT INSTALL (PACKOUT); DNP--&gt; DO NOT PROCURE

Evaluates: MAX77654

│

## MAX77654 EV Kit Schematic

| Part Number       | Configuration            | 7-bit              | 8-bit Write                         | 8-bit Read       |
|-------------------|--------------------------|--------------------|-------------------------------------|------------------|
| (PMIC) MAX77654   | ADDR OTP bit set for 0   | 0b100 0000 0x40    | 0x80 0b1000 0000                    | 0b1000 0001 0x81 |
| MAX77654 (PMIC)   | set for 1 ADDR OTP bit   | 0b100 1000 0x48    | 0b1001 0000 0x90                    | 0x91 0b1001 0001 |
| MAX77654 (PMIC)   | Maxim internal test mode | 0x49 0b100 1001    | 0b1001 0010 0x92                    | 0x93 0b1001 0011 |
| (ADC) MAX11614    | N/A                      | 0x33 0b011 0011    | 0x66 0b0110 0110                    | 0x67 0b0110 0111 |
| MAX5825 (DAC)     | ADDR1=ADDR0=VDDIO        | 0b001 1111 0x1F    | 0b0011 1110 0x3E 0b0010 1000 0x10 * | 0b0011 1111 0x3F |
| (EEPROM) AT24CS02 | A0=A1=A2=GND             | 0b101 0000 0x50 ** | 0b1010 0000                         | 0b1010 0001      |

*MAX5825 ALSO RESPONDS TO AN I2C BROADCAST ADDRESS 0b0010 1000

**AT24CS02 ALSO RESPONDS TO 0b1011 0001 FOR READING THE SERIAL NUMBER

Evaluates: MAX77654

│

## MAX77654 EV Kit Schematic (continued)

<!-- image -->

## MAX77654 EV Kit Schematic (continued)

<!-- image -->

## MAX77654 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX77654

## MAX77654 EV Kit Schematic (continued)

<!-- image -->

│

## MAX77654 EV Kit Schematic (continued)

<!-- image -->

## MAX77654 EV Kit PCB Layouts

MAX77654 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

│

## MAX77654 EV Kit PCB Layouts (continued)

MAX77654 EV Kit PCB Layout-Top Layer

<!-- image -->

│

## MAX77654 EV Kit PCB Layouts (continued)

MAX77654 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

│

## MAX77654 EV Kit PCB Layouts (continued)

MAX77654 EV Kit PCB Layout-Internal Layer 3

<!-- image -->

│

## MAX77654 EV Kit PCB Layouts (continued)

MAX77654 EV Kit PCB Layout-Bottom Layer

<!-- image -->

│

## MAX77654 EV Kit PCB Layouts (continued)

MAX77654 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

## MAX77654 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                | PAGES CHANGED    |
|-------------------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|
|                 0 | 7/19            | Initial release                                                                                                                                            | -                |
|                 1 | 10/19           | Updated Quick Start section, replaced Figure 6, updated Ordering Information table, MAX77654 EV Kit Bill of Materials table, and MAX77654 EV Kit Schematic | 5, 6, 10, 13, 15 |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0axim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX77654