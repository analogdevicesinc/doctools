<!-- lastmod 2022-08-03 -->
## MAX77655 Evaluation Kit

## General Description

The  MAX77655  evaluation  kit  (EV  kit)  allows  for  easy experimentation  with  the  MAX77655  CCM  single-inductor, multiple-output (SIMO) regulator and I 2 C interface.

The  Windows ® -based  software  provides  a  user-friendly graphical  interface  as  well  as  a  detailed  register-based interface to exercise the features of the MAX77655.

Ordering Information appears at end of data sheet.

## Features

- Easy to Use
- GUI-Driven I 2 C Interface
- Assembled and Fully Tested
- On-Board Electronic Loads
- Electronic  Loads  with  Steady-State,  Transient,  and Random Modes
- On-Board ADC
- Evaluation of Multiple On-Key Options
- Wide Inductor Pads for Wide Range of Case Codes

Figure 1. MAX77655 EV Kit Photograph

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corp.

Evaluates: MAX77655

<!-- image -->

Evaluates: MAX77655

Figure 2. EV Kit Simplified Block Diagram

<!-- image -->

## Evaluates: MAX77655

Figure 3. MAX77655 EV Kit Top View

<!-- image -->

## Evaluates: MAX77655

Figure 4. MAX77655 EV Kit Bottom View

<!-- image -->

Figure 5. MAX77655 EV Kit Solution Area

<!-- image -->

## MAX77655 Evaluation Kit

## MAX77655 EV Kit Files

| FILE                                               | DESCRIPTION   |
|----------------------------------------------------|---------------|
| MAX77655_SOLDERDOWN_EVKIT_REVD_BOM_2020-05-14.xlsx | BOM           |
| MAX77655_SOLDERDOWN_EVKIT_REVD_PCB_2020-05-14.PDF  | Schematic     |
| MAX77655_SOLDERDOWN_EVKIT_REVD_PCB_2020-05-14.PDF  | Layout        |

## Quick Start

Perform  the  following  procedure  to  familiarize  yourself with the EV kit.

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Required Equipment

- MAX77655 EV kit
- MAX77655 EV kit GUI
- Windows-based PC
- Power supply
- DVM
- Micro-USB cable

## Procedure .

- 1) Install the GUI software. Visit the product webpage at http://www.maximintegrated.com/max77655evkit and navigate to Design Resources to download the latest version of the EV kit software. Save the EV kit software to a temporary folder and decompress the ZIP file.
- 2) Install EV kit shunts according to Table 1.
- 3) Connect  a  Micro-B  USB  cable  between  the  EV  kit USB  port  labelled  'GUI'  and  your  Windows-based PC.
- 4) Apply  a  3.7V  supply  (set  for  100mA  current  limit) across the IN and GND2 terminals of the EV kit. Turn the supply on.
- 5) Open  the  GUI  and  select Device  Connect in  the upper-left corner. Wait for a CONNECTED\_DEVICE\_ LIST window to pop up, and then press the Connect button.
- 6) On the ADC/AMUX tab  of  the  GUI,  click  the  Read buttons next to VSBB0, VSBB1, VSBB2, and VSBB3. For the MAX77655A, 1.8V, 1.1V, 0.7V, and 3.3V should appear, respectively (Figure 6).

This  concludes  the  Quick  Start  procedure.  Users  are encouraged to explore the device and its register settings with  the  GUI.  During  general  device  evaluation,  set  the ammeter range to at least 1A to minimize the impact of its series resistance.

For  more  information  on  the  GUI,  see  the Software section.

Figure 6. Quick Start: Regulator Check with the ADC

<!-- image -->

│

Table 1. Default Shunt Positions and Jumper Descriptions

| REFERENCE DESIGNATOR   | DEFAULT POSITION   | FUNCTION                                                                                                           |
|------------------------|--------------------|--------------------------------------------------------------------------------------------------------------------|
| J3                     | 1-2                | 1-2: Connects nEN to SW1 (Push-button). 3-4: Connects nEN to SW2 (Slide-switch). 5-6: Connects nEN to GUI (Logic). |
| J4                     | 5-6                | 1-2: Connects VLOGIC to 3.3V. 3-4: Connects VLOGIC to SBB0. 5-6: Connects VLOGIC to 1.8V.                          |
| J5                     | OPEN               | 1-2: Connects 5V from GUI USB to device IN pin.                                                                    |
| J201                   | 1-2                | 1-2: Connects SBB0 to the on-board electronic load and ADC.                                                        |
| J203                   | 1-2                | 1-2: Connects SBB1 to the on-board electronic load and ADC.                                                        |
| J205                   | 1-2                | 1-2: Connects SBB2 to the on-board electronic load and ADC.                                                        |
| J207                   | 1-2                | 1-2: Connects SBB3 to the on-board electronic load and ADC.                                                        |
| J200                   | 1-2                | 1-2: Connects the gate of the Q200 load FET to the U200 amplifier.                                                 |
| J202                   | 1-2                | 1-2: Connects the gate of the Q201 load FET to the U201 amplifier.                                                 |
| J204                   | 1-2                | 1-2: Connects the gate of the Q202 load FET to the U202 amplifier.                                                 |
| J206                   | 1-2                | 1-2: Connects the gate of the Q203 load FET to the U203 amplifier.                                                 |

## Hardware

## On-Key Options

For applications that require the IC to enable with a userinteractable switch or electrical signal, the EV kit comes with three options: push-button (momentary), slide-switch (persistent), and logic (electrical). The active-low enable pin  (nEN)  has  an  internal  pullup  resistor.  Select  which type  of  on-key  to  use  with  jumper  J3.  Refer  to  the MAX77655 data sheet for more information on configuring the nEN pin.

When  jumper  J3  is  installed  to  position  5-6,  The  GUI Output to nEN control in the Global Resources tab can be used to manually apply a HIGH or LOW signal to nEN.

## Electronic Load

The  EV  kit  comes  with  an  electronic  load  that  allows the user to evaluate the SIMO load current capabilities. On-board  circuits  set  the  load  current  through  the  I 2 C (see  Table  2).  There  are  two  options  to  exercise  load transient  response.  In  the  Load  Control  tab,  the  GUI offers load transient controls. If faster rise and fall times are required, remove J200 (for SBB0), J202 (for SBB1), J204 (for SBB2), or J206 (for SBB3) and connect a signal generator to the gate of the load MOSFET (pin 1 of the respective header). Drive the gate with a signal between 1V (off) and 3V (fully on) to apply transients to the output

## Table 2. Electronic Load Jumpers and Sense Points

| OUTPUT   | JUMPER A   | JUMPER B   | SENSE              |
|----------|------------|------------|--------------------|
| SBB0     | J200       | J201       | VIL_SBB0 GNDS_SBB0 |
| SBB1     | J202       | J203       | VIL_SBB1 GNDS_SBB1 |
| SBB2     | J204       | J205       | VIL_SBB2 GNDS_SBB2 |
| SBB3     | J206       | J206       | VIL_SBB3 GNDS_SBB3 |

of  the  SIMO  or  LDO.  Note  that  there  are  0.1Ω  sense resistors  with  test  points  (called  VIL\_SBB0,  VIL\_SBB1, VIL\_SBB2, and VIL\_SBB3) for a 1:10 conversion of load current to voltage. See the Software section to learn how to set the load current from the GUI.

## On-Board ADC

An on-board ADC is available to convert the output voltages of SBB0, SBB1, SBB2, and SBB3. Test points AIN0, AIN1, AIN6, and AIN7 are also measured. The GUI does the appropriate conversions. See the Software section for how to read these values from the GUI.

Evaluates: MAX77655

Figure 7. Electronic Load Block Diagram

<!-- image -->

Figure 8. MAX77655 EV Kit GUI

<!-- image -->

## Software

The graphical user interface (GUI) software allows for convenient, quick, and thorough evaluation of the MAX77655.

The GUI has individual tabs for each functional block of the device (global resources, interrupts/status, and SIMO) and two additional tabs for controlling the EV kit hardware (load control and ADC). In addition, the FPS Configuration tab  contains  a  plot  of  the  power-up  and  power-down sequences.  See  Figure  8  for  a  screenshot  of  the  GUI upon opening.

## Evaluates: MAX77655

## MAX77655 Evaluation Kit

## Installation

Visit  the  product  webpage  at http://www.maximintegrated.com/max77655evkit and  navigate  to  Design Resources to download the latest  version  of  the  EV  kit software. Save the EV kit software to a temporary folder and decompress the ZIP file.

## Windows Drivers

Upon connection of a Micro-USB cable between your PC and the EV kit for the first  time,  wait  a  few  minutes  for Windows to automatically install drivers.

## Graphical User Interface (GUI) Details

The GUI drives I 2 C communication with the EV kit. Every control  in  the  GUI  (excluding  GUI  Output  to  nEN,  the Load Control tab, and the ADC tab) corresponds directly to  a  register  within  the  MAX77655.  Hover  your  cursor over control names for a description of that register. The complete register map is available in the Register Map tab of the GUI and the IC data sheet.

## Load Control Tab

The Load Control tab contains controls for load currents on  the  regulator  outputs.  The  GUI  is  capable  of  setting steady-state, transient, and random load currents. To set a load current, use the slider bar or text field to input a value  (mA)  and  check  the Enable box.  Shuffle  through the modes to exercise different load conditions.

The offset and gain values are set by Maxim and do not need to be altered.

## ADC Tab

The ADC tab allows users to convert important  voltage and current signals to digital readings. To read a signal, click the Read button and examine the Value column.

## Tips

## Testing Custom Power Sequences

To  test  custom  power  sequences,  send  the  device  to standby state by setting the 'Software Control Functions' control to 'Software Standby' in the Global Resources tab. All  channels  on  the  power  sequence  should  power down.

Then, use the 'SBBx Enable Control for SIMO' controls in either the SIMO Buck-Boost or FPS Configuration tab.

Finally, exit standby state and trigger the power sequence using one of the following methods:

- Send a 'Software Exit Standby' command using the 'Software Control Functions' control.
- Press the on-board on-key or toggle the slide switch if using either push-button or slide-switch mode.

## Measuring Quiescent Current

The on-board electronic load and voltage dividers for the ADCs may affect quiescent current measurements while the device is in low-power mode. Remove jumpers J201, J203,  J205,  and  J207  before  making  quiescent  current measurements in low-power mode.

For stable, accurate measurements, set the input current ammeter to 100NPLC and monitor the average reading.

If no settings are changed on the MAX77655 EV kit, the quiescent current after applying power to IN is about 7μA.

## Applying Fast Line Transients

A large bulk capacitor (C2) is located at the power input connection  points  to  attenuate  any  ringing  on  the  input voltage  due  to  long  cables  between  the  board  and  a bench supply. Before applying fast line transients, remove this capacitor.

## Ordering Information

| PART           | IC            | TYPE   |
|----------------|---------------|--------|
| MAX77655EVKIT# | MAX77655AEWE+ | EV Kit |

+ Denotes a lead(Pb)-free/RoHS-compliant package.

# Denotes a RoHS-compliant device that may include lead(Pb) that is exempt under the RoHS requirements.

## MAX77655 EV Kit Bill of Materials

|   ITEM | REF_DES                                                            | DNI/DNP   |   QTY | MFG PART #                                                                            | MANUFACTURER                                       | VALUE   | DESCRIPTION                                                                                                               |
|--------|--------------------------------------------------------------------|-----------|-------|---------------------------------------------------------------------------------------|----------------------------------------------------|---------|---------------------------------------------------------------------------------------------------------------------------|
|      1 | AIN0, AIN1, AIN6, AIN7, NEN_EXT, NIRQ, SCL, SDA, VIL_SBB0-VIL_SBB3 | -         |    12 | 5002                                                                                  | KEYSTONE                                           | N/A     | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 00.3IN; BOARD HOLE = 00.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;             |
|      2 | B0_SNS, B1_SNS-B3_SNS, IN_SNS                                      | -         |     5 | 5000                                                                                  | KEYSTONE                                           | N/A     | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 00.3IN; BOARD HOLE = 00.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
|      3 | C1, C234, C235                                                     | -         |     3 | GRM155R61C104KA88                                                                     | MURATA                                             | 0.1µF   | CAPACITOR; SMT (0402); CERAMIC; 0.1µF; 16V; TOL = 10%; MODEL = GRM SERIES; TG = -55°C to +85°C; TC = X5R                  |
|      4 | C2                                                                 | -         |     1 | 16TQC100MYF                                                                           | PANASONIC                                          | 100µF   | CAPACITOR; SMT (7343); TANTALUM CHIP; 100UF; 16V; TOL = 20%; MODEL = TQC SERIES                                           |
|      5 | C3                                                                 | -         |     1 | GRM155R61A106ME44; GRM155R61A106ME11; 0402ZD106MAT2A; CL05A106MP5NUNC                 | MURATA; MURATA; AVX; SAMSUNG                       | 10µF    | CAPACITOR; SMT (0402); CERAMIC CHIP; 10µF; 10V; TOL = 20%; TG = -55°C TO +85°C; TC = X5R                                  |
|      6 | C4                                                                 | -         |     1 | C0402C103K5RAC; GRM155R71H103KA88; C1005X7R1H103K050BE; CL05B103KB5NNN; UMK105B7103KV | KEMET;MURATA; TDK; SAMSUNG ELECTRONIC; TAIYO YUDEN | 0.01µF  | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01µF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                               |
|      7 | C5                                                                 | -         |     1 | ANY                                                                                   | ANY                                                | 22µF    | CAPACITOR; SMT (0603); CERAMIC CHIP; 22µF; 10V; TOL = 20%; MODEL = CL SERIES; TG = -55°C TO +85°C; TC = X5R; FORM FACTOR  |
|      8 | C6, C14                                                            | -         |     2 | C1608X5R1A226M080AC; GRM188R61A226ME15                                                | TDK;MURATA                                         | 22µF    | CAPACITOR; SMT (0603); CERAMIC CHIP; 22µF; 10V; TOL = 20%; TG = -55°C TO +85°C; TC = X5R                                  |
|      9 | C7, C9, C200, C205, C210, C215, C220, C238, C248, C250-C252        | -         |    12 | C0402C472J5RAC                                                                        | KEMET                                              | 4700PF  | CAPACITOR; SMT; 0402; CERAMIC; 4700pF; 50V; 5%; X7R; -55°C to + 125°C; 0 ± 15%°C MAX.                                     |
|     10 | C8, C11                                                            | -         |     2 | GRM188R60J476ME15                                                                     | MURATA                                             | 47µF    | CAPACITOR; SMT (0603); CERAMIC CHIP; 47µF; 6.3V; TOL = 20%; TG = -55°C TO +85°C; TC = X5R                                 |
|     11 | C10, C16, C29, C36, C41, C42                                       | -         |     6 | C0402C105K8PAC; CC0402KRX5R6BB105                                                     | KEMET;YAGEO                                        | 1µF     | CAPACITOR; SMT (0402); CERAMIC CHIP; 1µF; 10V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R                                   |
|     12 | C19                                                                | -         |     1 | C0402C152K5RAC; GRM155R71H152KA01                                                     | KEMET;MURATA                                       | 1500PF  | CAPACITOR; SMT (0402); CERAMIC CHIP; 1500PF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                               |
|     13 | C21, C28, C31                                                      | -         |     3 | C1005X5R1A475K050                                                                     | TDK                                                | 4.7µF   | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 10V; TOL = 10%; TG = -55°C TO +85°C; TC = X5R                                 |
|     14 | C22, C25-C27, C30, C32-C35, C37-C39, C44, C73                      | -         |    14 | GRM155R71A104JA01                                                                     | MURATA                                             | 0.1µF   | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1µF; 10V; TOL = 5%; TG = -55°C TO +125°C; TC = X7R                                 |
|     15 | C23, C24                                                           | -         |     2 | C0402C0G500270JNP; GRM1555C1H270JA01                                                  | VENKEL LTD.;MURATA                                 | 27PF    | CAPACITOR; SMT; 0402; CERAMIC; 27pF; 50V; 5%; C0G; -55°C to + 125°C; 0 ± 30PPM/°C                                         |
|     16 | C63, C65-C67                                                       | -         |     4 | ANY                                                                                   | ANY                                                | 0.1µF   | CAPACITOR; SMT; 0402; CERAMIC; 0.1µF; 10V; 10%; X5R; -55°C to + 125°C; 0 ±30PPM/°C; FORMFACTOR ;                          |
|     17 | C68, C69, C71, C72, C201, C206, C211, C216                         | -         |     8 | ANY                                                                                   | ANY                                                | 0.01µF  | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01µF; 10V; TOL = 10%; MODEL = C0402C SERIES; TG = -55°C TO +125°C; TC = X7R        |
|     18 | C202, C207, C212, C217, C221-C223, C237, C244, C268, C272-C277     | -         |    16 | ANY                                                                                   | ANY                                                | 0.1µF   | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1µF; 25V; TOL = 10%; MODEL = C SERIES; TG = -55°C TO +125°C; TC = X7R; FORM FACTOR |
|     19 | C203, C204, C208, C209, C213, C214, C218, C219                     | -         |     8 | GRM155R71H102JA01; GCM155R71H102JA37                                                  | MURATA;MURATA                                      | 1000PF  | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL = 5%; MODEL = GRM SERIES; TG = -55°C TO +125°C; TC = X7R            |
|     20 | C239-C242                                                          | -         |     4 | ANY                                                                                   | ANY                                                | 1µF     | CAPACITOR; SMT (0402); CERAMIC CHIP; 1µF; 6.3V; TOL = 20%; MODEL = C SERIES; TG = -55°C TO +85°C; TC = X5R ; FORM FACTOR  |

Evaluates: MAX77655

## MAX77655 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                                     | DNI/DNP   |   QTY | MFGPART #                    | MANUFACTURER                                                                           | VALUE                | DESCRIPTION                                                                                                                   |
|--------|---------------------------------------------|-----------|-------|------------------------------|----------------------------------------------------------------------------------------|----------------------|-------------------------------------------------------------------------------------------------------------------------------|
|     21 | C269-C271                                   | -         |     3 | ANY                          | ANY                                                                                    | 1µF                  | CAPACITOR;SMT (0402); CERAMIC CHIP; 1µF; 16V; TOL = 10%; MODEL = C SERIES; TG = -55°C TO +85°C; TC = X5R; FORM FACTOR         |
|     22 | D1                                          | -         |     1 | B0530W-7-F                   | DIODES INCORPORATED                                                                    | B0530W               | DIODE; SCH;SMT (SOD-123); PIV = 30V; IF = 0.5A                                                                                |
|     23 | DS1, DS2                                    | -         |     2 | LTST-C190CKT                 | LITE-ON ELECTRONICS INC.                                                               | LTST-C190CKT         | DIODE; LED; STANDARD; RED;SMT (0603); PIV = 5.0V; IF = 0.04A; -55°C TO +85°C                                                  |
|     24 | GND1, GND5-GND7                             | -         |     4 | 5011                         | KEYSTONE                                                                               | N/A                  | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|     25 | GND2-GND4, GND8, GND10, IN                  | -         |     6 | 9020 BUSS                    | WEICO WIRE                                                                             | MAXIMPAD             | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWNBUSTYPE-S;20AWG                                         |
|     26 | GNDS_SBB0- GNDS_SBB3, GND_SNS               | -         |     5 | 5001                         | KEYSTONE                                                                               | N/A                  | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;      |
|     27 | J1                                          | -         |     1 | 10118193-0001LF              | FCICONNECT                                                                             | 10118193-0001LF      | CONNECTOR; FEMALE; SMT; MICRO USB B TYPE RECEPTACLE; RIGHT ANGLE; 5PINS                                                       |
|     28 | J2                                          | -         |     1 | PBC06SAAN                    | SULLINS ELECTRONICS CORP.                                                              | PBC06SAAN            | CONNECTOR; MALE;THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS; -65°C TO +125°C                                                     |
|     29 | J3, J4                                      | -         |     2 | PBC03DAAN                    | SULLINS ELECTRONICS CORP.                                                              | PBC03DAAN            | CONNECTOR; MALE;THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS; -65°C TO +125°C                                                     |
|     30 | J5, J200-J207                               | -         |     9 | TSW-102-07-T-S               | SAMTEC                                                                                 | TSW-102-07-T-S       | CONNECTOR;THROUGH HOLE;TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55°C TO +105°C                                               |
|     31 | J9                                          | -         |     1 | S2B-PH-K-S(LF)(SN)           | JST MANUFACTURING                                                                      | S2B-PH-K-S(LF)(SN)   | CONNECTOR; MALE;THROUGH HOLE; 2.0MM PITCH; DISCONNECTABLE CRIMP STYLE CONNECTOR; SIDE ENTRY TYPE; RIGHT ANGLE; 2PINS          |
|     32 | L1                                          | -         |     1 | DFE201610E-1R5M = P2         | MURATA                                                                                 | 1.5µH                | INDµCTOR;SMT (0806); MAGNETICALLY SHIELDED; 1.5µH; TOL = ±20%; 2.1A                                                           |
|     33 | L2, L4, L5                                  | -         |     3 | BLM18AG601SN1                | MURATA                                                                                 | 600                  | INDUCTOR;SMT (0603); FERRITE-BEAD; 600; TOL = ±; 0.5A                                                                         |
|     34 | L3                                          | -         |     1 | DFE201210S-1R5M              | MURATA                                                                                 | 1.5µH                | INDUCTOR;SMT (0805); METAL; 1.5µH; 20%; 2.0A                                                                                  |
|     35 | L7                                          | -         |     1 | CIGT252012LM1R0MNE           | SAMSUNG                                                                                | 1µH                  | INDUCTOR;SMT (1008); METAL; 1µH; 20%; 3.8A                                                                                    |
|     36 | L8                                          | -         |     1 | DFE252012F-2R2M              | MURATA                                                                                 | 2.2µH                | INDUCTOR;SMT (1008); SHIELDED; 2.2µH; 20%; 2.3A                                                                               |
|     37 | L9                                          | -         |     1 | MAMK2520H2R2M                | TAIYO YUDEN                                                                            | 2.2µH                | INDUCTOR;SMT (1008); WIREWOµND; 2.2µH; 20%; 2.2A                                                                              |
|     38 | PVDD, SBB0-SBB3, VDD, VUSB                  | -         |     7 | 5010                         | KEYSTONE                                                                               | N/A                  | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; RED;PHOSPHOR BRONZE WIRE SIL;                    |
|     39 | Q1, Q2                                      | -         |     2 | BSS138                       | ON SEMICONDUCTOR                                                                       | BSS138               | TRAN; LOGIC LEVEL ENHANCEMENT MODEFIELD EFFECT TRANSISTOR; NCH; SOT-23; PD-(0.36W); I-(0.22A); V-(50V); -55°C TO +150°C       |
|     40 | Q200-Q203                                   | -         |     4 | IPC100N04S5L1R1ATMA1         | INFINEON                                                                               | IPC100N04S5L1R1ATMA1 | TRAN; OPTIMOS 5 POWER-TRANSISTOR; NCH; PG-TDSON-8-34; PD-(150W); I-(100A); V-(40V)                                            |
|     41 | Q205                                        | -         |     1 | FDN360P                      | FAIRCHILD SEMICONDUCTOR                                                                | FDN360P              | TRANSISTOR, MOSFET P-CHANNEL, SUPERSOT-3, PD = 0.5W, ID = -2.0A, VDSS = -30V,VGSS = ±20V                                      |
|     42 | Q206                                        | -         |     1 | 2N7002;2N7002; 2N7002;2N7002 | DIODES INCORPORATED; ST MICROELECTRONICS; ONSEMICONDUCTOR; MICRO COMMERCIAL COMPONENTS | 2N7002               | TRAN; ; NCH; SOT-23; PD-(0.33W); IC-(0.5A); VCEO-(60V); -55°C TO +150°C                                                       |
|     43 | R1, R204, R225, R238, R251, R286, R302-R306 | -         |    11 | ANY                          | ANY                                                                                    | 0                    | RESISTOR; 0402; 0 Ω ; 1%; 100PPM; 0.0625W; THICK FILM;FORMFACTOR                                                              |

Evaluates: MAX77655

## MAX77655 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                                             | DNI/DNP   |   QTY | MFG PART #                                        | MANUFACTURER                        | VALUE   | DESCRIPTION                                                     |
|--------|-----------------------------------------------------|-----------|-------|---------------------------------------------------|-------------------------------------|---------|-----------------------------------------------------------------|
|     44 | R2, R6                                              | -         |     2 | ERJ-2GEJ103                                       | PANASONIC                           | 10K     | RESISTOR; 0402; 10KΩ; 5%; 200PPM; 0.10W; THICK FILM             |
|     45 | R3, R8, R33                                         | -         |     3 | CRCW040210M0FK                                    | VISHAY DALE                         | 10M     | RESISTOR, 0402, 10MΩ, 1%, 100PPM, 0.0625W, THICK FILM           |
|     46 | R4, R13, R210, R231, R244, R257, R301               | -         |     7 | CRCW04021M00FK                                    | VISHAY DALE                         | 1M      | RESISTOR; 0402; 1M; 1%; 100PPM; 0.0625W; THICK FILM             |
|     47 | R7, R32                                             | -         |     2 | CRCW04021R00FK                                    | VISHAY DALE                         | 1       | RESISTOR, 0402, 1Ω, 1%, 100PPM, 0.0625W, THICK FILM             |
|     48 | R9, R19, R20, R29-R31, R52-R54                      | -         |     9 | ERJ-2GE0R00                                       | PANASONIC                           | 0       | RESISTOR; 0402; 0Ω; 0%; JUMPER; 0.10W; THICK FILM               |
|     49 | R10, R11                                            | -         |     2 | ERJ-2RKF27R0X; RC0402FR-0727RL; CRCW040227R0FK    | PANASONIC;YAGEO PHICOMP;VISHAY DALE | 27      | RESISTOR, 0402, 27Ω, 1%, 100PPM, 0.0625W, THICK FILM            |
|     50 | R12                                                 | -         |     1 | CRCW040212K0FK; MCR01MZPF1202                     | VISHAY DALE; ROHM SEMICONDUCTOR     | 12K     | RESISTOR, 0402, 12KΩ, 1%, 100PPM, 0.0625W, THICK FILM           |
|     51 | R16                                                 | -         |     1 | CRCW04024752FK; 9C04021A4752FLHF3; CRCW040247K5FK | VISHAY DALE; YAGEO; VISHAY DALE     | 47.5K   | RESISTOR; 0402; 47.5K; 1%; 100PPM; 0.0625W; THICK FILM          |
|     52 | R5, R214, R283, R17, R24                            | -         |     5 | CRCW0402100KFK; RC0402FR-07100KL                  | VISHAY;YAGEO                        | 100K    | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM           |
|     53 | R18                                                 | -         |     1 | CRCW0402150RFK; 9C04021A1500FL                    | VISHAY DALE;YAGEO                   | 150     | RESISTOR; 0402; 150Ω; 1%; 100PPM; 0.0625W; THICK FILM           |
|     54 | R21, R22                                            | -         |     2 | CRCW04024K70FK; MCR01MZPF4701                     | VISHAY DALE; ROHM SEMICONDUCTOR     | 4.7K    | RESISTOR, 0402, 4.7KΩ, 1%, 100PPM, 0.0625W, THICK FILM          |
|     55 | R23                                                 | -         |     1 | CRCW0402169KFK                                    | VISHAY DALE                         | 169K    | RESISTOR; 0402; 169KΩ; 1%; 100PPM; 0.063W; THICK FILM           |
|     56 | R25, R26                                            | -         |     2 | CRCW04022K20FK; RC0402FR-072K2L                   | VISHAY DALE; YAGEO PHICOMP          | 2.2K    | RESISTOR, 0402, 2.2KΩ, 1%, 100PPM, 0.0625W, THICK FILM          |
|     57 | R27                                                 | -         |     1 | CRCW040222R0FK                                    | VISHAY DALE                         | 22      | RESISTOR, 0402, 22Ω, 1%, 100PPM, 0.0625W, THICK FILM            |
|     58 | R28                                                 | -         |     1 | CRCW0402470RFK                                    | VISHAY DALE                         | 470     | RESISTOR, 0402, 470Ω, 1%, 100PPM, 0.0625W, THICK FILM           |
|     59 | R34                                                 | -         |     1 | CRCW04023R90FN                                    | VISHAY DALE                         | 3.9     | RESISTOR, 0402, 3.9Ω, 1%, 100PPM, 0.0625W, THICK FILM           |
|     60 | R201, R222, R235, R248, R289                        | -         |     5 | 9C04021A1000FL; RC0402FR-07100RL                  | PANASONIC; YAGEO PHYCOMP            | 100     | RESISTOR; 0402; 100Ω; 1%; 100PPM; 0.063W; THICK FILM            |
|     61 | R202, R223, R236, R249                              | -         |     4 | CRCW0402680RFK; RC0402FR-07680RL                  | VISHAY DALE; YAGEO PHICOMP          | 680     | RESISTOR, 0402, 680Ω, 1%, 100PPM, 0.0625W, THICK FILM           |
|     62 | R203, R224, R237, R250                              | -         |     4 | CRCW040220K0FK                                    | VISHAY DALE                         | 20K     | RESISTOR; 0402; 20KΩ; 1%; 100PPM; 0.063W; THICK FILM            |
|     63 | R205, R206, R226, R228, R239, R240, R252, R253      | -         |     8 | ERJ-2RKF2002                                      | PANASONIC                           | 20K     | RESISTOR; 0402; 20KΩ; 1%; 100PPM; 0.1W; THICK FILM              |
|     64 | R14, R207, R208, R229, R230, R242, R243, R254, R255 | -         |     9 | ANY                                               | ANY                                 | 1K      | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR |
|     65 | R211, R233, R245, R258                              | -         |     4 | CRL1206-JW-R100ELF                                | BOURNS                              | 0.1     | RESISTOR, 1206, 0.1Ω, 1%, 200PPM, 0.25W, THICK FILM             |
|     66 | R212, R213, R227, R234, R246, R247, R259, R260      | -         |     8 | CRCW0402787KFK                                    | VISHAY DALE                         | 787K    | RESISTOR; 0402; 787KΩ; 1%; 100PPM; 0.063W; METAL FILM           |
|     67 | R277, R279                                          | -         |     2 | ANY                                               | ANY                                 | 0       | RESISTOR; 0603; 0Ω; 0%; JUMPER; 0.10W; THICK FILM; FORMFACTOR   |
|     68 | R281, R282, R287, R288                              | -         |     4 | CRCW040210K0FK; RC0402FR-0710KL                   | VISHAY DALE; YAGEO PHICOMP          | 10K     | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM            |
|     69 | R293, R295, R297, R299                              | -         |     4 | ERJ-2RKF4703                                      | PANASONIC                           | 470K    | RESISTOR, 0402, 470KΩ, 1%, 100PPM, 0.0625W, THICK FILM          |

│

Evaluates: MAX77655

## MAX77655 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES                                         | DNI/DNP   |   QTY | MFG PART #           | MANUFACTURER                       | VALUE          | DESCRIPTION                                                                                                                                                          |
|--------|-------------------------------------------------|-----------|-------|----------------------|------------------------------------|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 70     | R294, R296, R298, R300                          | -         |     4 | CRCW0402649KFK       | VISHAYDALE                         | 649K           | RESISTOR; 0402; 649KΩ; 1%; 100PPM; 0.063W; THICK FILM                                                                                                                |
| 71     | SW1                                             | -         |     1 | EVQ-Q2K03W           | PANASONIC                          | EVQ-Q2K03W     | SWITCH; SPST; SMT; 15V; 0.02A; LIGHT TOUCH SWITCH; RCOIL = Ω; RINSULATION = Ω; PANASONIC                                                                             |
| 72     | SW2                                             | -         |     1 | CL-SB-12B-11         | NIDEC COPAL ELECTRONICSCORP        | CL-SB-12B-11   | SWITCH; SPDT; SMT; 12V; 0.2A; CL-SB SERIES; SLIDE SWITCH; RCOIL = 0.05Ω; RINSULATION = 100MΩ                                                                         |
| 73     | U1                                              | -         |     1 | MAX77655AEWE+        | MAXIM                              | MAX77655AEWE+  | EVKIT PART - IC; MAX77655AEWE+; LOWIQ SIMO PMIC WITH 4-OUTPUTS DELIVERING UPTO700MA TOTAL OUTPUT CURRENT; PACKAGE OUTLINE DRAWING: 21-100374; PACKAGE CODE: W161N1+1 |
| 74     | U2                                              | -         |     1 | FT2232HL             | FUTURETECHNOLOGY DEVICES INTL LTD. | FT2232HL       | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; LQFP64                                                                                                      |
| 75     | U3, U4                                          | -         |     2 | MAX8512EXK+          | MAXIM                              | MAX8512EXK     | IC, VREG, Ultra-Low-Noise, High PSRR, Adjustable Vout, SC70-5                                                                                                        |
| 76     | U5                                              | -         |     1 | MAX3395EETC+         | MAXIM                              | MAX3395EETC    | IC; TRANS; 15KV ESD-PROTECTED HIGH-DRIVE CURRENT QUAD-LEVEL TRANSLATOR WITH SPEED-UP CIRCUITRY; TQFN12 4X4                                                           |
| 77     | U7                                              | -         |     1 | AT24CS02-SSHM        | MICROCHIP                          | AT24CS02-SSHM  | IC; EPROM; I2C-COMPATIBLE TWO-WIRE SERIAL EEPROM; 150MIL; NSOIC8                                                                                                     |
| 78     | U200-U203                                       | -         |     4 | MAX44251AUA+         | MAXIM                              | MAX44251AUA+   | IC; OPAMP; ULTRA-PRECISION; LOW-NOISE OP AMP; UMAX8                                                                                                                  |
| 79     | U205                                            | -         |     1 | MAX5825AWP+          | MAXIM                              | MAX5825AWP+T   | IC; DAC; ULTRA-SMALL; OCTAL CHANNEL; 12-BIT BUFFERED OUTPUT DAC WITH INTERNAL REFERENCE AND I2C INTERFACE; WLP20                                                     |
| 80     | U209                                            | -         |     1 | MAX11614EEE+         | MAXIM                              | MAX11614EEE+   | IC; ADC; LOW-POWER; 8-CHANNEL; I2C; 12-BIT ADC IN ULTRA-SMALL PACKAGE; QSOP16                                                                                        |
| 81     | U210                                            | -         |     1 | MAX6071AAUT41+       | MAXIM                              | MAX6071AAUT41+ | IC; VREF; LOWNOISE; HIGH-PRECISION SERIES VOLTAGE REFERENCE; SOT23-6                                                                                                 |
| 82     | U211                                            | -         |     1 | MAX1697UEUT+         | MAXIM                              | MAX1697UEUT+   | IC; INV; INVERTING CHARGE PUMP WITH SHUTDOWN; SOT23-6                                                                                                                |
| 83     | Y1                                              | -         |     1 | 7M-12.000MAAJ        | TXC CORPORATION                    | 12MHZ          | CRYSTAL; SMT; 18PF; 12MHZ; ±30PPM; ±30PPM                                                                                                                            |
| 84     | PCB                                             | -         |     1 | MAX77655             | MAXIM                              | PCB            | PCB:MAX77655                                                                                                                                                         |
| 85     | B0_S, B1_S-B3_S                                 | DNP       |     0 | U.FL-R-SMT-1         | HIROSE ELECTRIC COLTD.             | U.FL-R-SMT-1   | CONNECTOR; MALE; SMT; ULTRA SMALL SURFACE MOUNTCOAXIAL CONNECTOR; STRAIGHT; 2PINS                                                                                    |
| 86     | C12                                             | DNP       |     0 | TPSD107K020R0085     | AVX                                | 100UF          | CAPACITOR; SMT; 7343; TANTALUM; 100uF; 20V; 10%; TPS; -55°C to +125°C                                                                                                |
| 87     | L6                                              | DNP       |     0 | DFE201610E-1R5M = P2 | MURATA                             | 1.5UH          | INDµCTOR; SMT (0806); MAGNETICALLY SHIELDED; 1.5µH; TOL = ±20%; 2.1A                                                                                                 |
| 88     | C13, C15, C17, C18, C53, C54, C56-C59, C61, C62 | DNP       |     0 | N/A                  | N/A                                | OPEN           | CAPACITOR; SMT (0402); OPEN; FORMFACTOR                                                                                                                              |
| 89     | R15, R37                                        | DNP       |     0 | N/A                  | N/A                                | OPEN           | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                                                                     |
| TOTAL  |                                                 |           |   290 |                      |                                    |                |                                                                                                                                                                      |

│

Evaluates: MAX77655

## MAX77655 EV Kit Schematic Diagram

| 8-bit Read    | 0x81,0x89,0x91 OR 0xA5   | 0b100x xx01   | 0x93 0b1001 0011         | 0b0110 0111 0x67   | 0b0011 1111 0x3F                    | 0b1010 0001        |
|---------------|--------------------------|---------------|--------------------------|--------------------|-------------------------------------|--------------------|
| 8-bit Write   | 0x80,0x88,0x90 OR 0xA4   | 0b100x xx00   | 0b1001 0010 0x92         | 0b0110 0110 0x66   | 0b0010 1000 0x10 * 0b0011 1110 0x3E | 0b1010 0000        |
| 7-bit         | OR 0x52 0x40,0x44,0x48   | 0b100 xxx0    | 0x49 0b100 1001          | 0b011 0011 0x33    | 0b001 1111 0x1F                     | 0b101 0000 0x50 ** |
| Configuration | ADDR[1:0] OTP            | Bitfield      | Maxim internal test mode | N/A                | ADDR1=ADDR0=VDDIO                   | A0=A1=A2=GND       |
| Part Number   | MAX77655                 | (PMIC)        | (PMIC) MAX77655          | (ADC) MAX11614     | (DAC) MAX5825                       | (EEPROM) AT24CS02  |

*MAX5825 ALSO RESPONDS TO AN I2C BROADCAST ADDRESS 0b0010 1000

Evaluates: MAX77655

**AT24CS02 ALSO RESPONDS TO 0b1011 0001 FOR READING THE SERIAL NUMBER

│

## MAX77655 EV Kit Schematic Diagram (continued)

<!-- image -->

## MAX77655 EV Kit Schematic Diagram (continued)

<!-- image -->

## MAX77655 EV Kit Schematic Diagram (continued)

<!-- image -->

## MAX77655 EV Kit Schematic Diagram (continued)

<!-- image -->

│

## MAX77655 EV Kit Schematic Diagram (continued)

<!-- image -->

## MAX77655 EV Kit PCB Layout Diagrams

MAX77655 EV Kit PCB Layout - Silkscreen Top

<!-- image -->

MAX77655 EV Kit PCB Layout - Top Layer

<!-- image -->

│

## MAX77655 EV Kit PCB Layout Diagrams (continued)

MAX77655 EV Kit PCB Layout - Internal 2

<!-- image -->

MAX77655 EV Kit PCB Layout - Internal 3

<!-- image -->

│

## MAX77655 EV Kit PCB Layout Diagrams (continued)

MAX77655 EV Kit PCB Layout - Bottom Layer

<!-- image -->

MAX77655 EV Kit PCB Layout - Silkscreen Bottom

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserYes the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX77655