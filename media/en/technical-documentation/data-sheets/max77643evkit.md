<!-- lastmod 2022-08-03 -->
## MAX77643 Evaluation Kit

## General Description

The  MAX77643  evaluation  kit  (EV  kit)  allows  for  easy experimentation with various MAX77643 features, including the SIMO buck-boost regulator, linear regulators, on/ off controller, and I 2 C interface.

The  Windows ® -based  software  provides  a  user-friendly graphical  interface  as  well  as  a  detailed  register-based interface to exercise the features of the MAX77643.

Ordering Information appears at end of data sheet.

Evaluates: MAX77643

## Benefits and Features

- Easy to use
- GUI-Driven I 2 C Interface
- GPIO LEDs
- Assembled and Fully Tested
- On-Board Electronic Loads · Steady-State, Transient, and Random Modes
- Evaluation of Push-Button and Slide-Switch On-Key Options

Figure 1. MAX77643 EV Kit Board

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

<!-- image -->

Evaluates: MAX77643

Figure 2. EV Kit Simple Block Diagram

<!-- image -->

Evaluates: MAX77643

Figure 3. MAX77643 EV Kit Top View

<!-- image -->

Evaluates: MAX77643

Figure 4. MAX77643 EV Kit Bottom View

<!-- image -->

Figure 5. MAX77643 EV Kit Solution Area

<!-- image -->

## MAX77643 EV Kit Files

| FILE                                               | DECRIPTION   |
|----------------------------------------------------|--------------|
| MAX77643_SOLDERDOWN_EVKIT_REVA_BOM_2019-10-31.xlsx | BOM          |
| MAX77643_SOLDERDOWN_EVKIT_REVA_SCH_2019-10-31.pdf  | Schematic    |
| MAX77643_SOLDERDOWN_EVKIT_REVA_PCB_2019-10-31.pdf  | Layout       |

│

## MAX77643 Evaluation Kit

## Quick Start

Follow this procedure to become familiar with the EV kit.

Note: In the following sections, software-related items are identified by bolding. Text in bold and underlined refers to  items  directly  from  the  EV  kit  software. Text  in italics and underlined refers to items from the Windows operating system.

## Required Equipment

- MAX77643 EV Kit
- MAX77643 EV Kit GUI
- Windows-Based PC
- Power Supply
- Ammeter
- DVM
- Micro-USB Cable

## Procedure

- 1) Install the GUI software. Visit the product webpage at http://www.maximintegrated.com/MAX -77643evkit and navigate to Design Resources to download the latest version of the EV kit software. Save the EV kit software to a temporary folder and extract the files from the ZIP file.
- 2) Install EV kit shunts according to Table 1.
- 3) Connect a Micro-B USB cable between the EV kit USB port labelled 'GUI' and the Windows-based PC.
- 4) Apply a 3.7V supply (set for 100mA current limit) through an ammeter (set for 10mA range) across the VBATT and GND2 terminals of the EV kit. Turn the supply on.
- 5) Open the GUI and select Device  Connect in the upper-left corner. Wait for a CONNECTED\_DE -VICE\_LIST window to pop up, and then press the Connect button.
- 6) Press the on-key (SW1).
- 7) Measure SBB0, SBB1, and SBB2 with a voltmeter to ensure that the device is on.

Evaluates: MAX77643

This  concludes  the  Quick  Start  procedure.  Users  are encouraged to explore the device and its register settings with  the  GUI.  For  guidance  on  configuring  the  GPIOs, see the GPIO Quick Start section. During general device evaluation,  set  the  ammeter  range  to  greater  than  or equal to 1A to minimize the impact of its series resistance.

For more information on the GUI, see the Software section.

## Table 1. Default Shunt Positions and Jumper Descriptions

| REFERENCE DESIGNATOR   | DEFAULT POSITION   | FUNCTION                                                                                                                                          |
|------------------------|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| J3                     | 1-2                | 1-2: Connects nEN to SW1 (Push-button). 2-3: Connects nEN to SW2 (Slide-switch).                                                                  |
| J4                     | 1-2                | 1-2: Connects INLDO to SBB0.                                                                                                                      |
| J5                     | 3-4                | 1-2: Connects GPIO0 to V IO . 3-4: Connects GPIO0 to GUI GPIO0 (See the GPIO Quick Start section for more details) 5-6: Connects GPIO0 to ground. |
| J8                     | 3-4                | 1-2: Connects GPIO1 to V IO . 3-4: Connects GPIO1 to GUI GPIO0 (See the GPIO Quick Start section for more details) 5-6: Connects GPIO1 to ground. |
| J6                     | 1-2                | 1-2: Connects VIO pin to V IO .                                                                                                                   |
| J7                     | 1-2                | 1-2: Connects NIRQ's open drain output to V IO through a 100kΩ pullup resistor.                                                                   |
| J9                     | 1-2                | 1-2: Connects NRST's open drain output to V IO through a 10kΩ pullup resistor.                                                                    |
| J10                    | 2-3                | 1-2: Connects V IO to an on-board 3.3V LDO (used for 3.3V logic). 2-3: Connects V IO to an on-board 1.8V LDO (used for 1.8V logic).               |
| J11                    | 1-2                | 1-2: Connects SCL to the on-board FT2232 UART through the MAX3395 level shifter.                                                                  |
| J12                    | 1-2                | 1-2: Connects SDAto the on-board FT2232 UART through the MAX3395 level shifter                                                                    |
| J201                   | 1-2                | 1-2: Connects SBB0 to the on-board electronic load.                                                                                               |

│

## MAX77643 Evaluation Kit

## Table 1. Default Shunt Positions and Jumper Descriptions

| REFERENCE DESIGNATOR   | DEFAULT POSITION   | FUNCTION                                                           |
|------------------------|--------------------|--------------------------------------------------------------------|
| J203                   | 1-2                | 1-2: Connects SBB1 to the on-board electronic load.                |
| J205                   | 1-2                | 1-2: Connects SBB2 to the on-board electronic load.                |
| J207                   | 1-2                | 1-2: Connects LDO to the on-board electronic load.                 |
| J200                   | 1-2                | 1-2: Connects the gate of the Q200 load FET to the U200 amplifier. |
| J202                   | 1-2                | 1-2: Connects the gate of the Q201 load FET to the U201 amplifier. |
| J204                   | 1-2                | 1-2: Connects the gate of the Q202 load FET to the U202 amplifier. |
| J206                   | 1-2                | 1-2: Connects the gate of the Q203 load FET to the U203 amplifier. |

## GPIO Quick Start

There are two GPIOs (GPIO0 and GPIO1) that can serve either  as  standard  GPIOs  or  in  their  alternate  functionalities.  On-board LEDs light up depending on the GPIO state. To get started with the GPIOs, follow the procedure below:

- 1) In the GPIO tab of the GUI, set GPIO0's Alternate Mode to 0 (SBB is Set by TV\_SBB0), and GPIO1's Alternate Mode to 0 (Standard GPIO).
- 2) Set the Direction to 0 (Output).
- 3) Set the Driver Type to 1 (Push-Pull). If using 0 (Open-Drain), make sure there is a pullup resistor on the GPIO pin.
- 4) Click the Write button.
- 5) Set the Data Output to 1 (Logic High) and click the Write button. The on-board LED should light up.
- 6) Now change the Direction to 1 (Input) and click the Write button.
- 7) Install the appropriate shunt on J5 or J8 to connect the desired GPIO to the GUI GPIO.
- 8) From the GUI, toggle the EV Kit GPIO , clicking Write after each time. Click Read to observe the GPIO Input Value update.

Figure 6. GPIO Headers

<!-- image -->

Evaluates: MAX77643

│

## Electronic Load

The EV kit comes with an electronic load allowing the user to evaluate the SIMO and LDO load current capabilities. On-board  circuits  set  the  load  current  through  the  I2C interface. J201, J203, J205, J207 are used to connect the load to the output of the SBB0, SBB1, SBB2, and LDO respectively.  To  exercise  the  load  transient  response, remove  J200  (for  SBB0),  J202  (for  SBB1),  J204  (for SBB2), and J206 (for LDO), and connect a signal generator to the gate of the load MOSFET (pin 2 of the respective header). Drive the gate with a signal between 1V (off) and 3V (fully on) to apply transients to the output of the SIMO or LDO. Note that there are 0.1Ω sense resistors with test points (called VIL\_SBB0, VIL\_SBB1, and VIL\_SBB2) and a 1Ω sense resistor with a test point (called VIL\_LDO) for a 10:1 and 1:1 conversion of load current to voltage.

Figure 7. GPIO Input Value Box in GUI

<!-- image -->

## Detailed Description of Hardware (or Software)

## On-Key Options

For applications that require the IC to enable with a userinteractable switch, the EV kit comes with two common types: the push-button (momentary) and the slide-switch (persistent).  The  active-low  enable  pin  (nEN)  has  an internal pullup resistor. Select which type of switch to use with  jumper  J3.  Refer  to  the  MAX77643  data  sheet  for more information on configuring the IC for momentary or persistent switches.

## Changing the Output Voltages

The GUI allows the user to change the output voltages of the SIMO and the LDO. Navigate to the 'SIMO BuckBoost' section or the 'LDO' section in the GUI. Drag the 'Target Output Voltage' slider until the desired output voltage is reached and click Write .

Figure 8. SIMO Output Voltage Section

<!-- image -->

Figure 9. LDO Output Voltage Section

<!-- image -->

│

Evaluates: MAX77643

Figure 10. Electronic Load Block Diagram

<!-- image -->

Figure 11. MAX77643 EV Kit GUI

<!-- image -->

## Installation

Visit  the  product  webpage  at www.maximintegrated. com/MAX77643evkit and navigate to Design Resources to download the latest version of the EV kit software. Save the EV kit software to a temporary folder and decompress the ZIP file.

## Windows Drivers

Upon connection of a Micro-USB cable between the PC and the EV kit for the first  time,  wait  a  few  minutes  for Windows to automatically install drivers.

## Graphical User Interface Details (GUI)

The GUI drives I 2 C communication with the EV kit. Every control in the GUI (excluding the Load Control tab) corre-

## Ordering Information

| PART           | IC            | TYPE   |
|----------------|---------------|--------|
| MAX77643EVKIT# | MAX77643AANA+ | EV Kit |

# Denotes RoHS compliance.

sponds directly to a register within the MAX77643. Hover the cursor over the control names for a description of that register.  Refer  to  the  MAX77642/MAX77643  data  sheet for the complete register map.

## Load Control Tab

The Load Control tab contains controls for load currents on  the  regulator  outputs.  The  GUI  is  capable  of  setting steady-state, transient, and random load currents. To set a load current, use the slider bar or text field to input a value  (mA)  and  check  the Enable box.  Shuffle  through the modes to exercise different load conditions.

The offset and gain values are set by Maxim and do not need to be altered.

## MAX77643 Evaluation Kit

## MAX77643 EV Kit Bill of Materials

|   ITEM | REF_DES                                                                                                                | DNI/DNP   |   QTY | MFGPART #                                                                             | MANUFACTURER                                      | VALUE           | DESCRIPTION                                                                                                                   |
|--------|------------------------------------------------------------------------------------------------------------------------|-----------|-------|---------------------------------------------------------------------------------------|---------------------------------------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------|
|      1 | AIN0, AIN1, AIN6, AIN7, GPIO0, GPIO1, NEN, NIRQ, NRST, SCL, SDA, VIL_LDO0, VIL_SBB0-VIL_SBB2                           | -         |    15 | 5002                                                                                  | KEYSTONE                                          | N/A             | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                   |
|      2 | C1, C9, C10, C16, C29, C36, C40-C42, C239-C242, C269-C271                                                              | -         |    16 | C0402C105K8PAC; CC0402KRX5R6BB105                                                     | KEMET;YAGEO                                       | 1µF             | CAPACITOR;SMT (0402); CERAMIC; 1µF; 10V; TOL = 10%; TG = -55° C TO +85° C; TC = X5R                                           |
|      3 | C4                                                                                                                     | -         |     1 | C0402C103K5RAC; GRM155R71H103KA88; C1005X7R1H103K050BE; CL05B103KB5NNN; UMK105B7103KV | KEMET;MURATA; TDK;SAMSUNG ELECTRONIC; TAIYO YUDEN | 0.01µF          | CAPACITOR;SMT (0402); CERAMIC; 0.01µF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                         |
|      4 | C5, C8, C11, C14                                                                                                       | -         |     4 | C1608X5R1A226M080AC; GRM188R61A226ME15                                                | TDK;MURATA                                        | 22µF            | CAPACITOR;SMT (0603); CERAMIC; 22µF; 10V; TOL = 20%; TG = -55° C TO +85° C; TC = X5R                                          |
|      5 | C6                                                                                                                     | -         |     1 | 16TQC100MYF                                                                           | PANASONIC                                         | 100µF           | CAPACITOR;SMT (7343); TANTALUM; 100µF; 16V; TOL = 20%;MODEL = TQC SERIES                                                      |
|      6 | C15                                                                                                                    | -         |     1 | GRM155R61C225KE44                                                                     | MURATA                                            | 2.2µF           | CAPACITOR;SMT (0402); CERAMIC; 2.2µF; 16V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R                                           |
|      7 | C21, C28, C31                                                                                                          | -         |     3 | C1005X5R1A475K050                                                                     | TDK                                               | 4.7µF           | CAPACITOR;SMT (0402); CERAMIC; 4.7µF; 10V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R                                           |
|      8 | C22, C25-C27, C30, C32-C35, C37-C39, C43, C44, C63, C65-C67, C73, C202, C207, C212, C217, C221-C223, C234, C235, C237, | -         |    37 | GRM155R71E104KE14; C1005X7R1E104K050BB; TMK105B7104KVH; CGJ2B3X7R1E104K050BB          | MURATA;TDK; TAIYO YUDEN;TDK                       | 0.1µF           | CAP;SMT (0402); 0.1µF; 10%; 25V; X7R; CERAMIC                                                                                 |
|      9 | C23, C24                                                                                                               | -         |     2 | GRM0335C1H270JA01                                                                     | MURATA                                            | 27PF            | CAP;SMT (0201); 27PF; 5%; 50V; C0G; CERAMIC                                                                                   |
|     10 | C68, C69, C71, C72                                                                                                     | -         |     4 | CL05B103KP5NNN                                                                        | SAMSUNG ELECTRONICS                               | 0.01µF          | CAPACITOR;SMT (0402); CERAMIC; 0.01µF; 10V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                         |
|     11 | C200, C205, C210, C215, C220, C238, C248-C253                                                                          | -         |    12 | C0402C472K5RAC; GRM155R71H472KA01; C1005X7R1H472K050BA                                | KEMET; MURATA;TDK                                 | 4700PF          | CAPACITOR;SMT (0402); CERAMIC; 4700PF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R-                                        |
|     12 | C201, C206, C211, C216                                                                                                 | -         |     4 | C0402H102J5GAC                                                                        | KEMET                                             | 1000PF          | CAPACITOR;SMT (0402); CERAMIC; 1000PF; 50V; TOL = 5%; MODEL = HT SERIES; TG = -55°C TO +200°C; TC = C0G                       |
|     13 | C203, C204, C208, C209, C213, C214, C218, C219                                                                         | -         |     8 | C0402C180J5GAC; GRM1555C1H180JA01; C1005C0G1H180J050BA                                | KEMET; MURATA;TDK                                 | 18PF            | CAPACITOR;SMT (0402); CERAMIC; 18PF; 50V; TOL = 5%; TG = -55°C TO +125°C; TC = C0G                                            |
|     14 | DS1-DS3                                                                                                                | -         |     3 | LTST-C190CKT                                                                          | LITE-ON ELECTRONICS INC.                          | LTST-C190CKT    | DIODE; LED; STANDARD; RED;SMT (0603); PIV = 5.0V; IF = 0.04A; -55° C TO +85° C                                                |
|     15 | DS4                                                                                                                    | -         |     1 | LTST-C190YKT                                                                          | LITE-ON ELECTRONICS INC.                          | LTST-C190YKT    | DIODE; LED; STANDARD; YELLOW;SMT (0603); PIV = 5.0V; IF = 0.02A; -55° C TO +85° C                                             |
|     16 | GND1, GND5-GND7                                                                                                        | -         |     4 | 5011                                                                                  | KEYSTONE                                          | N/A             | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|     17 | GND2-GND4, GND8, GND10, INSBB                                                                                          | -         |     6 | 9020 BUSS                                                                             | WEICO WIRE                                        | MAXIMPAD        | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWNBUSTYPE-S;20AWG                                         |
|     18 | INLDO, LDO, SBB0-SBB2, SYSA, VUSB                                                                                      | -         |     7 | 5010                                                                                  | KEYSTONE                                          | N/A             | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; RED;PHOSPHOR BRONZE WIRE SIL;                    |
|     19 | J1                                                                                                                     | -         |     1 | 10118193-0001LF                                                                       | FCICONNECT                                        | 10118193-0001LF | CONNECTOR; FEMALE; SMT; MICRO USB B TYPE RECEPTACLE; RIGHT ANGLE; 5PINS                                                       |
|     20 | J2                                                                                                                     | -         |     1 | PBC09SAAN                                                                             | SULLINS ELECTRONICS CORP                          | PBC09SAAN       | CONNECTOR; MALE;THROUGH HOLE; BREAKAWAY; STRAIGHT; 9PINS; -65°C TO +125°C                                                     |

Evaluates: MAX77643

## MAX77643 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                                                                      | DNI/DNP   |   QTY | MFGPART #                                         | MANUFACTURER                                                                           | VALUE          | DESCRIPTION                                                                              |
|--------|------------------------------------------------------------------------------|-----------|-------|---------------------------------------------------|----------------------------------------------------------------------------------------|----------------|------------------------------------------------------------------------------------------|
|     21 | J3                                                                           | -         |     1 | TSW-103-07-T-S                                    | SAMTEC                                                                                 | TSW-103-07-T-S | CONNECTOR;THROUGH HOLE;TSW SERIES; SINGLE ROW; STRAIGHT; 3PINS                           |
|     22 | J4, J6, J7, J9, J11, J12, J200-J207                                          | -         |    14 | TSW-102-07-T-S                                    | SAMTEC                                                                                 | TSW-102-07-T-S | CONNECTOR;THROUGH HOLE;TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55°C TO +105°C          |
|     23 | J5, J8                                                                       | -         |     2 | TSW-103-07-L-D                                    | SAMTEC                                                                                 | TSW-103-07-L-D | CONNECTOR; MALE;THROUGH HOLE;THROUGH HOLE 0.025 POST HEADER; STRAIGHT; 6PINS             |
|     24 | J10                                                                          | -         |     1 | PEC03SAAN                                         | SULLINS ELECTRONICS CORP                                                               | PEC03SAAN      | EVKIT PART-CONNECTOR; MALE;THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65° C TO +125° C;  |
|     25 | L1, L9                                                                       | -         |     2 | DFE201612E-1R5M                                   | MURATA                                                                                 | 1.5µH          | INDUCTOR;SMT (0806); METAL; 1.5µH; 20%; 2.30A                                            |
|     26 | L2, L4, L5                                                                   | -         |     3 | BLM18AG601SN1                                     | MURATA                                                                                 | 600            | INDUCTOR;SMT (0603); FERRITE-BEAD; 600; TOL = ± ; 0.5A                                   |
|     27 | L3                                                                           | -         |     1 | DFE201210S-2R2M = P2                              | MURATA                                                                                 | 2.2µH          | EVKIT PART-INDUCTOR;SMT (0805); MAGNETICALLY SHIELDED; 2.2µH; TOL = ±20%; 1.8A           |
|     28 | L7                                                                           | -         |     1 | DFE201210U-1R5M = P2                              | TOKO                                                                                   | 1.5µH          | INDUCTOR;SMT (0805); METAL ALLOY CHIP; 1.5µH; TOL = ±20%; 1.9A                           |
|     29 | L8                                                                           | -         |     1 | DFE201612E-1R0M                                   | MURATA                                                                                 | 1µH            | INDUCTOR;SMT (0806);WIREWOUND CHIP; 1µH; TOL = ±20%; 2.9A                                |
|     30 | Q3                                                                           | -         |     1 | EM6K6                                             | ROHM SEMICONDUCTOR                                                                     | EM6K6          | TRAN; NCH; DUAL; MOSFET; SOT563-6; PD-(0.15W); I-(±0.3A); V-(20V)                        |
|     31 | Q200-Q203                                                                    | -         |     4 | IRFHM8337TRPBF                                    | INTERNATIONAL RECTIFIER                                                                | IRFHM8337TRPBF | TRAN; HEXFET POWERMOSFET;NCH; PQFN8; PD-(2.8W); I-(18A); V-(30V)                         |
|     32 | Q205                                                                         | -         |     1 | FDN360P                                           | FAIRCHILD SEMICONDUCTOR                                                                | FDN360P        | TRANSISTOR, MOSFET P-CHANNEL, SUPERSOT-3, PD = 0.5W, ID = -2.0A, VDSS = -30V,VGSS = ±20V |
|     33 | Q206                                                                         | -         |     1 | 2N7002;2N7002; 2N7002;2N7002                      | DIODES INCORPORATED; ST MICROELECTRONICS; ONSEMICONDUCTOR; MICRO COMMERCIAL COMPONENTS | 2N7002         | TRAN; ; NCH; SOT-23; PD-(0.33W); IC-(0.5A); VCEO-(60V); -55°C TO +150°C                  |
|     34 | R3, R277, R279                                                               | -         |     3 | CRCW06030000Z0                                    | VISHAY DALE                                                                            | 0              | RESISTOR; 0603; 0 Ω ; 0%; JUMPER; 0.1W; THICK FILM                                       |
|     35 | R8, R281, R282, R287, R288                                                   | -         |     5 | CRCW040210K0FK; RC0402FR-0710KL                   | VISHAY DALE; YAGEO PHICOMP                                                             | 10K            | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                     |
|     36 | R10, R11                                                                     | -         |     2 | ERJ-2RKF27R0X; RC0402FR-0727RL; CRCW040227R0FK    | PANASONIC; YAGEO PHICOMP; VISHAY DALE                                                  | 27             | RESISTOR, 0402, 27Ω, 1%, 100PPM, 0.0625W, THICK FILM                                     |
|     37 | R12                                                                          | -         |     1 | ERJ-2RKF1202                                      | PANASONIC                                                                              | 12K            | RESISTOR; 0402; 12KΩ; 1%; 100PPM; 0.1W; THICK FILM                                       |
|     38 | R13, R55, R56, R210, R231, R244, R257, R291, R301, R307                      | -         |    10 | CRCW04021M00FK                                    | VISHAY DALE                                                                            | 1M             | RESISTOR; 0402; 1M; 1%; 100PPM; 0.0625W; THICK FILM                                      |
|     39 | R14, R207, R208, R229, R230, R242, R243, R254, R255                          | -         |     9 | ERJ-2RKF1001                                      | PANASONIC                                                                              | 1K             | RESISTOR; 0402; 1KΩ; 1%; 100PPM; 0.10W; THICK FILM                                       |
|     40 | R16                                                                          | -         |     1 | CRCW04024752FK; 9C04021A4752FLHF3; CRCW040247K5FK | VISHAY DALE; YAGEO; VISHAY DALE                                                        | 47.5K          | RESISTOR; 0402; 47.5K; 1%; 100PPM; 0.0625W; THICK FILM                                   |
|     41 | R5, R214, R283, R17, R24                                                     | -         |     5 | CRCW0402100KFK; RC0402FR-07100KL                  | VISHAY;YAGEO                                                                           | 100K           | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM                                    |
|     42 | R18, R47                                                                     | -         |     2 | CRCW0402150RFK; 9C04021A1500FL                    | VISHAY DALE; YAGEO                                                                     | 150            | RESISTOR; 0402; 150Ω; 1%; 100PPM; 0.0625W; THICK FILM                                    |
|     43 | R19, R20, R52-R54, R204, R225, R238, R251, R259, R286, R290, R292, R302-R306 | -         |    18 | ERJ-2GE0R00                                       | PANASONIC                                                                              | 0              | RESISTOR; 0402; 0Ω; 0%; JUMPER; 0.10W; THICK FILM                                        |
|     44 | R21, R22                                                                     | -         |     2 | ERJ-2GEJ472                                       | PANASONIC                                                                              | 4.7K           | RESISTOR; 0402; 4.7KΩ; 5%; 200PPM; 0.10W; THICK FILM                                     |
|     45 | R23                                                                          | -         |     1 | CRCW0402169KFK                                    | VISHAY DALE                                                                            | 169K           | RESISTOR; 0402; 169KΩ; 1%; 100PPM; 0.063W; THICK FILM                                    |
|     46 | R25, R26                                                                     | -         |     2 | CRCW04022K20FK; RC0402FR-072K2L                   | VISHAY DALE; YAGEO PHICOMP                                                             | 2.2K           | RESISTOR, 0402, 2.2KΩ, 1%, 100PPM, 0.0625W, THICK FILM                                   |

│

Evaluates: MAX77643

## MAX77643 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                                                                | DNI/DNP   |   QTY | MFGPART #                                     | MANUFACTURER                            | VALUE          | DESCRIPTION                                                                                                                                                                                                                 |
|--------|------------------------------------------------------------------------|-----------|-------|-----------------------------------------------|-----------------------------------------|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     47 | R27                                                                    | -         |     1 | RC0402FR-0722RL                               | YAGEO PHYCOMP                           | 22             | RESISTOR; 0402; 22Ω; 1%; 100PPM; 0.063W; THICK FILM                                                                                                                                                                         |
|     48 | R28                                                                    | -         |     1 | CRCW0402470RFK                                | VISHAY DALE                             | 470            | RESISTOR, 0402, 470Ω, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                                                                       |
|     49 | R46, R48                                                               | -         |     2 | CRCW04021R00FK                                | VISHAY DALE                             | 1              | RESISTOR, 0402, 1Ω, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                                                                         |
|     50 | R49                                                                    | -         |     1 | CRCW0402120RFK; RC0402FR-07120RL              | VISHAY DALE; YAGEO                      | 120            | RESISTOR; 0402; 120Ω; 1%; ±100PPM; 0.063W; THICK FILM                                                                                                                                                                       |
|     51 | R201, R222, R235, R248, R289                                           | -         |     5 | 9C04021A1000FL; RC0402FR-07100RL              | PANASONIC; YAGEO PHYCOMP                | 100            | RESISTOR; 0402; 100Ω; 1%; 100PPM; 0.063W; THICK FILM                                                                                                                                                                        |
|     52 | R202, R223, R236, R249                                                 | -         |     4 | CRCW0402680RFK; RC0402FR-07680RL              | VISHAY DALE; YAGEO PHICOMP              | 680            | RESISTOR, 0402, 680Ω, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                                                                       |
|     53 | R203, R205, R206, R224, R226, R228, R237, R239, R240, R250, R252, R253 | -         |    12 | ERJ-2RKF2002                                  | PANASONIC                               | 20K            | RESISTOR; 0402; 20KΩ; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                                                                          |
|     54 | R211, R233, R245                                                       | -         |     3 | CRL1206-JW-R100ELF                            | BOURNS                                  | 0.1            | RESISTOR, 1206, 0.1Ω, 1%, 200PPM, 0.25W, THICK FILM                                                                                                                                                                         |
|     55 | R212, R213, R227, R234, R246, R247                                     | -         |     6 | CRCW0402787KFK                                | VISHAY DALE                             | 787K           | RESISTOR; 0402; 787KΩ; 1%; 100PPM; 0.063W; METAL FILM                                                                                                                                                                       |
|     56 | R258                                                                   | -         |     1 | CSR1206FT1R00                                 | STACKPOLE ELECTRONICS INC.              | 1              | RESISTOR; 1206; 1Ω; 1%; 100PPM; 0.5W; THICK FILM                                                                                                                                                                            |
|     57 | R293, R295, R297, R299                                                 | -         |     4 | ERJ-2RKF4703                                  | PANASONIC                               | 470K           | RESISTOR, 0402, 470KΩ, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                                                                      |
|     58 | R294, R296, R298, R300                                                 | -         |     4 | CRCW0402649KFK                                | VISHAY DALE                             | 649K           | RESISTOR; 0402; 649KΩ; 1%; 100PPM; 0.063W; THICK FILM                                                                                                                                                                       |
|     59 | SW1                                                                    | -         |     1 | EVQ-Q2K03W                                    | PANASONIC                               | EVQ-Q2K03W     | SWITCH; SPST; SMT; 15V; 0.02A; LIGHT TOUCH SWITCH; RCOIL = Ω; RINSULATION = Ω; PANASONIC                                                                                                                                    |
|     60 | SW2                                                                    | -         |     1 | CL-SB-12B-11                                  | NIDEC COPAL ELECTRONICS CORP            | CL-SB-12B-11   | SWITCH; SPDT; SMT; 12V; 0.2A; CL-SB SERIES; SLIDE SWITCH; RCOIL = 0.05Ω; RINSULATION = 100MΩ                                                                                                                                |
|     61 | U1                                                                     | -         |     1 | MAX77643AANA+                                 | MAXIM                                   | MAX77643AANA+  | EVKIT PART - IC; PMIC; ULTRA-LOW POWER PMIC FEATURING 93% PEAK EFFICIENCY SINGLE-INDUCTOR; 3-OUTPUT BUCK-BOOST; 1-LDO FOR LONG BATTERY LIFE APPLICATIONS; PACKAGE OUTLINE DRAWING: 21-100480; PACKAGE CODE: N252B2+1; WLP25 |
|     62 | U2                                                                     | -         |     1 | FT2232HL                                      | FUTURE TECHNOLOGY DEVICES INTL LTD.     | FT2232HL       | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; LQFP64                                                                                                                                                             |
|     63 | U3, U4                                                                 | -         |     2 | MAX8512EXK+                                   | MAXIM                                   | MAX8512EXK     | IC, VREG, Ultra-Low-Noise, High PSRR, Adjustable Vout, SC70-5                                                                                                                                                               |
|     64 | U5, U6                                                                 | -         |     2 | MAX3395EETC+                                  | MAXIM                                   | MAX3395EETC    | IC; TRANS; 15KV ESD-PROTECTED HIGH-DRIVE CURRENT QUAD-LEVEL TRANSLATOR WITH SPEED-UP CIRCUITRY; TQFN12 4X4                                                                                                                  |
|     65 | U7                                                                     | -         |     1 | AT24CS02-SSHM                                 | MICROCHIP                               | AT24CS02-SSHM  | IC; EPROM; I2C-COMPATIBLE TWO-WIRE SERIAL EEPROM; 150MIL; NSOIC8                                                                                                                                                            |
|     66 | U200-U203                                                              | -         |     4 | MAX44251AUA+                                  | MAXIM                                   | MAX44251AUA+   | IC; OPAMP; ULTRA-PRECISION; LOW-NOISE OP AMP; UMAX8                                                                                                                                                                         |
|     67 | U205                                                                   | -         |     1 | MAX5825AWP+                                   | MAXIM                                   | MAX5825AWP+T   | IC; DAC; ULTRA-SMALL; OCTAL CHANNEL; 12-BIT BUFFERED OUTPUT DAC WITH INTERNAL REFERENCE AND I2C INTERFACE; WLP20                                                                                                            |
|     68 | U209                                                                   | -         |     1 | MAX11614EEE+                                  | MAXIM                                   | MAX11614EEE+   | IC; ADC; LOW-POWER; 8-CHANNEL; I2C; 12-BIT ADC IN ULTRA-SMALL PACKAGE; QSOP16                                                                                                                                               |
|     69 | U210                                                                   | -         |     1 | MAX6071AAUT41+                                | MAXIM                                   | MAX6071AAUT41+ | IC; VREF;LOW NOISE; HIGH-PRECISION SERIES VOLTAGE REFERENCE; SOT23-6                                                                                                                                                        |
|     70 | U211                                                                   | -         |     1 | MAX1697UEUT+                                  | MAXIM                                   | MAX1697UEUT+   | IC; INV; INVERTING CHARGE PUMP WITH SHUTDOWN; SOT23-6                                                                                                                                                                       |
|     71 | Y1                                                                     | -         |     1 | 7M-12.000MAAJ                                 | TXC CORPORATION                         | 12MHZ          | CRYSTAL; SMT; 18PF; 12MHZ; ±30PPM; ±30PPM                                                                                                                                                                                   |
|     72 | PCB                                                                    | -         |     1 | MAX77643                                      | MAXIM                                   | PCB            | PCB:MAX77643                                                                                                                                                                                                                |
|     73 | C7                                                                     | DNP       |     0 | CL32A107MPVNNN; C1210C107M8PAC; LMK325BJ107MM | SAMSUNG ELECTRONICS; KEMET; TAIYO YUDEN | 100UF          | CAPACITOR;SMT (1210); CERAMIC; 100UF; 10V; TOL = 20%; TG = -55°C TO +85°C; TC = X5R                                                                                                                                         |
|     74 | L6                                                                     | DNP       |     0 | MLP1608VR47D                                  | TDK                                     | 0.47UH         | INDUCTOR; SMT (0603); SHIELDED; 0.47µH; TOL = ±0.3nH; 0.8A                                                                                                                                                                  |
|     75 | C2, C3, C18, C53, C54, C56-C59, C61, C62                               | DNP       |     0 | N/A                                           | N/A                                     | OPEN           | CAPACITOR;SMT (0402); OPEN;FORMFACTOR                                                                                                                                                                                       |
|     76 | R15, R37, R260                                                         | DNP       |     0 | N/A                                           | N/A                                     | OPEN           | RESISTOR; 0402; OPEN;FORMFACTOR                                                                                                                                                                                             |

Evaluates: MAX77643

## MAX77643 Evaluation Kit

## MAX77643 EV Kit Schematics

| 8-bit Read    | 0x81 0b1000 0001       | 0x91 0b1001 0001       | 0x93 0b1001 0011         | 0x67 0b0110 0111   | 0x3F 0b0011 1111                    | 0b1010 0001        |
|---------------|------------------------|------------------------|--------------------------|--------------------|-------------------------------------|--------------------|
| 8-bit Write   | 0x80 0b1000 0000       | 0x90 0b1001 0000       | 0x92 0b1001 0010         | 0x66 0b0110 0110   | 0b0011 1110 0x10 * 0b0010 1000 0x3E | 0b1010 0000        |
| 7-bit         | 0x40 0b100 0000        | 0x48 0b100 1000        | 0x49 0b100 1001          | 0x33 0b011 0011    | 0x1F 0b001 1111                     | 0x50 ** 0b101 0000 |
| Configuration | ADDR OTP bit set for 0 | ADDR OTP bit set for 1 | Maxim internal test mode | N/A                | ADDR1=ADDR0=VDDIO                   | A0=A1=A2=GND       |
| Part Number   | MAX77643 (PMIC)        | MAX77643 (PMIC)        | MAX77643 (PMIC)          | MAX11614 (ADC)     | (DAC) MAX5825                       | AT24CS02 (EEPROM)  |

Evaluates: MAX77643

*MAX5825 ALSO RESPONDS TO AN I2C BROADCAST ADDRESS 0b0010 1000

**AT24CS02 ALSO RESPONDS TO 0b1011 0001 FOR READING THE SERIAL NUMBER

│

## MAX77643 EV Kit Schematics (continued)

<!-- image -->

│

## MAX77643 EV Kit Schematics (continued)

<!-- image -->

## MAX77643 EV Kit Schematics (continued)

<!-- image -->

## MAX77643 EV Kit Schematics (continued)

<!-- image -->

│

## MAX77643 EV Kit Schematics (continued)

<!-- image -->

Evaluates: MAX77643

## MAX77643 EV Kit PCB Layouts

Silk Top

<!-- image -->

Top

<!-- image -->

Internal2

<!-- image -->

Internal3

<!-- image -->

│

## MAX77643 EV Kit PCB Layouts (continued)

Bottom

<!-- image -->

Silk Bottom

<!-- image -->

│

## MAX77643 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                   | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------------------------|-----------------|
|                 0 | 5/20            | Initial release                                                               | -               |
|                 1 | 9/20            | Updated Ordering Information table, EV Kit Bill of Materials , and Schematics | 10-18           |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0axim Integrated reserYes the right to change the circuitr\ and specifications without notice at an\ time.

│

Evaluates: MAX77643