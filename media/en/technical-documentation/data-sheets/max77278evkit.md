<!-- lastmod 2022-08-02 -->
## MAX77278 Evaluation Kit

## General Description

The MAX77278 evaluation kit (EV kit) is a fully assembled and tested printed circuit board (PCB) that demonstrates the MAX77278. The EV kit allows for easy evaluation of the  various  MAX77278  resources,  including  the  linear charger,  SIMO,  linear  regulator,  analog  multiplexer,  IR current sink, GPIOs and I 2 C interface.

Windows-based software provides a user-friendly graphical  interface  (GUI)  as  well  as  a  detailed  register-based interface to exercise the features of the MAX77278.

Ordering Information appears at end of data sheet.

Figure 1. MAX77278 EV Kit Photo

Windows is a registered trademark and registered service mark of Microsoft Corporation.

Evaluates: MAX77278

## Benefits and Features

- Easy to Use
- GUI Drives I 2 C Interface
- On-Board Thermistor
-  IR LED
- GPIO Bank with Push-Buttons
- Assembled and Fully Tested
- Emulates System Loading
- On-Board Electronic Load for LDO
- Electronic Load has Steady-State, Transient, and Random Modes
- Demonstrates End-to-End Analog Multiplexer Implementation
-  On-Board ADC
- Evaluates Both Push-Button and Slider-Switch On-Key Options

<!-- image -->

<!-- image -->

Figure 2. MAX77278 EV Kit Block Diagram

<!-- image -->

Figure 3. MAX77278 EV Kit Top View

<!-- image -->

│

Table 1. Default Shunt Positions and Jumper Descriptions

| REFERENCE DESIGNATOR   | DEFAULT POSITION   | FUNCTION                                                                                                                                                                                                             |
|------------------------|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J100                   | N/A                | Do not connect shunts to J100.                                                                                                                                                                                       |
| J101                   | 1-2                | 1-2: Connects a VIO to the 1.8V EV kit logic rail. 3-4: Connects a VIO to the 3.3V EV kit logic rail. 5-6: Connects a VIO to the SBB1 output.                                                                        |
| J200                   | 1-2                | 1-2: Connects the U200 amplifier to the gate of the Q200 load FET.                                                                                                                                                   |
| J201                   | 1-2                | 1-2: Connects VSBB0 to Load Cell and the on-board ADC.                                                                                                                                                               |
| J202                   | 1-2                | 1-2: Connects the U201 amplifier to the gate of the Q201 load FET.                                                                                                                                                   |
| J203                   | 1-2                | 1-2: Connects VSBB1 to Load Cell and the on-board ADC.                                                                                                                                                               |
| J204                   | 1-2                | 1-2: Connects the U202 amplifier to the gate of the Q202 load FET.                                                                                                                                                   |
| J205                   | 1-2                | 1-2: Connects VSBB2 to Load Cell and the on-board ADC.                                                                                                                                                               |
| J206                   | 1-2                | 1-2: Connects the U203 amplifier to the gate of the Q203 load FET.                                                                                                                                                   |
| J207                   | 1-2                | 1-2: Connects VLDO to Load Cell and the on-board ADC.                                                                                                                                                                |
| J208                   | 1-2                | 1-2: Bypasses the battery ammeter circuit.                                                                                                                                                                           |
| J1                     | N/A                | USB-Micro adapter for powering CHGIN.                                                                                                                                                                                |
| J2                     | N/A                | Do not connect shunts to J2.                                                                                                                                                                                         |
| J3                     | 3-4                | 1-2: Connects the THM pin to the divider through the potentiometer (R12). 3-4: Connects the THM pin to the divider through the on-board thermistor. 5-6: Connects the THM pin to the divider through a 10k resistor. |
| J6                     | N/A                | USB-Micro adapter for GUI communications.                                                                                                                                                                            |
| J10                    | Not Installed      | 1-2: Connects VUSB to CHGIN. Do not install jumper when CHGIN is powered externally (through a power supply).                                                                                                        |
| J20                    | N/A                | 1-2: Connects the remote LED DS2 to the CS pin.                                                                                                                                                                      |
| JU9                    | 2-3                | 1-2: Connects nEN to SW9. 2-3: Connects nEN to SW8.                                                                                                                                                                  |
| JU10                   | N/A                | 1-2: Connects CS_EN to VIO. 3-4: Connects CS_EN to GND.                                                                                                                                                              |

│

Evaluates: MAX77278

## MAX77278 Evaluation Kit

## Quick Start

Follow  this  procedure  to  familiarize  yourself  with  the EV kit.

## Required Equipment

- MAX77278 EV kit
- Windows-based PC
- Power supply
- Ammeter
- DVM
- Micro-USB cable
- GUI

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

- 1) Install GUI software. Vist the product webpage at www.maximintegrated.com/MAX77278evkit and navigate to Design Resources to download the latest version of the EV kit software. Save the EV kit software to a temporary folder and decompress the ZIP file.
- 2) Make sure shunts are installed on jumpers per Table 1.
- 3) Apply a 3.7V supply (set for 100mA current limit) through an ammeter (set for 1mA range) across the BATT and GND1 terminals of the EV kit. Turn the supply on.
- 4) Connect a Micro-B USB cable between the EV kit's J6 and your Windows-based PC.
- 5) Open the GUI and press the Connect button in the upper left corner. Wait for the device to respond, and in the Synchronize window, press the Read and Close button.
- 6) Press the on-key (SW8).
- 7) Measure each output voltage with a voltmeter to ensure they are at their nominal values.
- 8) Confirm with the ammeter that the quiescent current is approximately 48µA.
- 9) In the Global Resources tab of the GUI, set the 'Main Bias Low-Power Mode' bitfield to '1' (Enabled).
- 10) Confirm with the ammeter that the quiescent current is now approximately 14µA.
- 11)  Remove the supply from the BATT. Connect a partially discharged battery (or preloaded power supply) to BATT.
- 12)  Make sure that there is no jumper installed at J3. Apply a 5V supply (set for 1A current limit) through an ammeter (set for 1A range) to the CHGIN and GND1 terminals of the EV kit. Turn the supply on.
- 13)  In the GUI, set the VFAST\_CHG register to 4.2V, set the IFAST\_CHG register to some current that is safe for your battery (i.e., 30mA for a 45mAh cell). See Figure 4.
- 14)  Enable the charger with the CHG\_EN bit.
- 15) Confirm on the ammeter that the charger is sourcing the IFAST\_CHG current to the battery. Note that the current that appears on the ammeter should be the sum of IFAST\_CHG and the standby current of the charger (~1.2µA).

Evaluates: MAX77278

This concludes the Quick Start procedure. Users are now encouraged to explore the device and its register settings with the GUI.

For more information on the GUI, see the Software section.

Figure 4. Quick Configuration of the Charger

<!-- image -->

│

## EV Kit Features

## On-Key Options

For applications that require the IC to enable with a userinteractable switch, the EV kit comes with two common types: the push-button (momentary) and the slide-switch (persistent).  The  active-low  enable  pin  (nEN)  needs  an external pullup to SYS (one has already been installed on the EV kit). Select between either switch with the jumper JU9.  Refer  to  the  data  sheet  for  more  information  on configuring the IC for momentary or persistent switches.

## Temperature Monitoring

Jumper  J3  allows  selection  between  the  following  temperature monitoring options:

- 1) Potentiometer R12 (POT)
- 2) Fixed Resistor Divider R13/R15 (RES)
- 3) 3380K Negative Temperature Coeffecient Thermistor RT1 (NTC)

Use the potentiometer setting (POT) to quickly simulate a  changing  battery  temperature  to  evaluate  the  charger's  JEITA  safe  charging  response.  Turn  the  potentiometer  knob  counterclockwise  to  simulate  decreasing battery temperature. Turn the knob clockwise to simulate increasing temperature. Use the resistor setting (RES) to permanently simulate a normal temperature (25°C). Use the  thermistor  setting  (NTC)  to  evaluate  the  charger's response  to  actual  EV  kit  temperature.  The  NTC  beta parameter is 3380K. Temperature thresholds corresponding  to  this  NTC  beta  are  listed  in  Table  2.  Refer  to  the data sheet for guidance on how to design with different NTC beta.

The  MAX77278  automatically  biases  the  temperature monitoring circuit whenever CHGIN is valid or the MUX\_ SEL[3:0]  bitfield  is  connecting  the  TBIAS  or  THM  pins to the AMUX output. Refer to the Adjustable Thermistor Temperature  Monitors section  of  the  MAX77278  data sheet for more information.

## Electronic Load

The EV kit comes with four electronic loads that allow the user  to  easily  evaluate  each  of  the  DC-DC  regulators. An on-board DAC and op-amp configuration set the load current  through  I 2 C,  and  J200-J207  connect  the  loads to  the  outputs of the SIMO and the LDO. Emulate SYS loading  by  removing  J207  and  connecting  pin  1  of  the header to VSYS with a wire. To excerise the load transient response for any of the regulators, remove the respective MOSFET  gate  jumper  and  connect  a  signal  generator to  the  gate  of  the  load  MOSFET  (pin  2  of  the  header).

Drive the MOSFET gate with a signal between ~1V (off) and ~3V (fully on) to apply transients to the output of the regulator. Note that there is a 1Ω sense resistor with test point access (called VIL\_x) that allows for a 1:1 conversion of load current to voltage.

## On-Board ADC (MAX11614)

An  on-board  ADC  is  available  to  convert  the  voltage at  the  electronic  loads,  as  well  as  the AMUX  pin  of  the MAX77278.  Use  the  GUI  to  convert  these  voltages  to digital information.

## Table 2. Trip Thresholds for 3380K Beta Thermistor

Figure 5. Electronic Load Block Diagram

|   TRIP VOLTAGE (V) |   TRIP TEMPERATURES ( ° C) |
|--------------------|----------------------------|
|              1.024 |                        -10 |
|              0.976 |                         -5 |
|              0.923 |                          0 |
|              0.867 |                          5 |
|              0.807 |                         10 |
|              0.747 |                         15 |
|              0.511 |                         35 |
|              0.459 |                         40 |
|              0.411 |                         45 |
|              0.367 |                         50 |
|              0.327 |                         55 |
|              0.291 |                         60 |

<!-- image -->

## MAX77278 Evaluation Kit

## Software

The  graphical  user  interface  (GUI)  software  allows  for quick,  easy,  and  thorough  evalution  of  the  MAX77278. The GUI is designed to have individual tabs for each functional block of the device ( Global Resources , Interrupts/ Status , Charger , LDO , Current Sinks , AMUX/ADC ) and two additional tabs for controlling EV kit hardware ( Load Control, AMUX/ADC ). See Figure 6 for a screenshot of the GUI upon first opening.

## Installation

Visit www.maximintegrated.com/evkitsoftware to  download the latest version of the EV kit software. Save the EV kit software to a temporary folder and uncompress the ZIP file.

## Windows Drivers

Upon connection of a micro-USB cable between the PC and the EV kit for the first  time,  wait  a  few  minutes  for Windows to automatically install the necessary drivers.

Figure 6. MAX77278 EV Kit GUI Top-Level Interface

<!-- image -->

## Graphical User Interface (GUI) Details

The GUI drives I 2 C-communication with the EV kit. Every control  in  the  GUI  (excluding  the Load  Control and AMUX/ADC tabs) corresponds directly to a register within the  MAX77278. Refer to the register map in the device data sheet for a complete description of the registers. The Load  Control and AMUX/ADC tabs  provide  additional functionality with the EV kit.

## Load Control Tab

The Load Control tab  contains  controls  for  configuring the electronic loads. The GUI is capable of setting steady-

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX77278EVKIT# | EV Kit |

# Denotes a RoHS-compliant device that may include lead(Pb) that is exempt under the RoHS requirements.

Evaluates: MAX77278

state, transient, and random load currents. To set a load current,  use  the  slider  bar  or  text  field  to  input  a  value (mA) and press the Enable button.  Shuffle  through  the modes  to  exercise  different  load  conditions.  The  offset and gain values are set by Maxim and do not need to be altered.

## AMUX/ADC Tab

The AMUX/ADC tab  allows  users  to  convert  important  voltage  and  current  signals  to  digital  readings.  To read  a  signal,  press  the Read button  and  examine  the 'Interpreted Value' column.

│

## MAX77278 EV Kit Bill of Materials

| REF_DES VL, THM, AIN1, AIN7, TBIAS, LEDREM,                                                            | DNI/DNP   | QTY   | MFG PART #                                           | MANUFACTURER               | VALUE              | DESCRIPTION TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN;                                                                        |
|--------------------------------------------------------------------------------------------------------|-----------|-------|------------------------------------------------------|----------------------------|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| VIL_LDO, VIL_SBB0-VIL_SBB2 CS, NEN, SCL, SDA, AMUX, NIRQ, NRST, QSCL, QSDA, CS_EN, GPIO0-GPIO7, EN_EXT | - -       | 10 19 | 5000 5002                                            | KEYSTONE KEYSTONE          | N/A N/A            | RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER; |
| LDO, SBB0-SBB2, VSYS, BATTN, CHGIN, INLDO, VBATT, IN_SBB                                               | -         | 10    | 5010                                                 | KEYSTONE                   | N/A                | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                                                   |
| C1, C11, C15                                                                                           | -         | 3     | ANY                                                  | ANY                        | 22UF               | CAPACITOR; SMT (0603); CERAMIC CHIP; 22UF; 10V; TOL=20%; MODEL=CL SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR                                |
| C2                                                                                                     | -         | 1     | C1608X5R1E475K080AC; GRM188R61E475KE11               | TDK; MURATA                | 4.7UF              | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 25V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                            |
| C3, C12, C34, C38, C110-C113, C115, C118, C120, C158, C239-C242                                        | -         | 16    | ANY                                                  | ANY                        | 1UF                | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R ; FORMFACTOR                                |
| C4                                                                                                     | -         | 1     | C1005X5R1H332K050                                    | TDK                        | 3300PF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 3300PF; 50V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                           |
| C5, C6, C8, C9, C13, C17, C20, C36                                                                     | -         | 8     | ANY                                                  | ANY                        | 10UF               | CAPACITOR; SMT (0402); CERAMIC CHIP; 10UF; 6.3V; TOL=20%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR                                        |
| C7, C154                                                                                               | -         | 2     | ANY                                                  | ANY                        | 4.7UF              | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 10V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR to +                           |
| C10, C114                                                                                              | -         | 2     | ANY                                                  | ANY                        | 0.47UF             | CAPACITOR; SMT; 0603; CERAMIC; 0.47uF; 10V; 10%; X5R; -55degC 125degC, ; FORMFACTOR                                                                  |
| C14, C108, C150, C151, C155-C157, C159, C202, C207, C212, C217, C221-C224, C226, C229, C234-C237, C244 | -         | 23    | ANY                                                  | ANY                        | 0.1UF              | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R; FORMFACTOR                               |
| C25, C27-C29                                                                                           | -         | 4     | ANY                                                  | ANY                        | 0.1UF              | CAPACITOR; SMT; 0402; CERAMIC; 0.1uF; 10V; 10%; X5R; -55degC to + 125degC; 0 +/-30PPM/degC; FORMFACTOR ;                                             |
| C30-C33                                                                                                | -         | 4     | ANY                                                  | ANY                        | 0.01UF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 10V; TOL=10%; MODEL=C0402C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                                     |
| C35, C39                                                                                               | -         | 2     | GRM155R60J104KA01; C0402C104K9PAC                    | MURATA; KEMET              | 0.1UF              | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 6.3V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                           |
| C152, C153                                                                                             | -         | 2     | GRM1555C1H150FA01                                    | MURATA                     | 15PF               | CAPACITOR; SMT (0402); CERAMIC CHIP; 15PF; 50V; TOL=1%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                             |
| C200, C205, C210, C215, C220, C238, C248- C252                                                         | -         | 11    | C1005X5R1H472K050                                    | TDK                        | 4700PF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 4700PF; 50V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                           |
| C201, C206, C211, C216                                                                                 | -         | 4     | ANY                                                  | ANY                        | 1000PF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL=10%; MODEL=C0G; TG=-55 DEGC TO +125 DEGC; TC=+; FORMFACTOR                                     |
| C203, C204, C208, C209, C213, C214, C218, C219                                                         | -         | 8     | C0402C180J5GAC;GRM1555C1H180JA01J;C 1005C0G1H180J050 | KEMET/MURATA/TDK           | 18PF               | CAPACITOR; SMT (0402); CERAMIC CHIP; 18PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                             |
| C225                                                                                                   | -         | 1     | GRM1555C1H331GA01; C1005C0G1H331G050                 | MURATA/TDK                 | 330PF              | CAPACITOR; SMT (0402); CERAMIC CHIP; 330PF; 50V; TOL=2%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                            |
| C227                                                                                                   | -         | 1     | GRM1555C1H181GA01                                    | MURATA                     | 180PF              | CAPACITOR; SMT (0402); CERAMIC CHIP; 180PF; 50V; TOL=2%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                            |
| C228                                                                                                   | -         | 1     | ANY                                                  | ANY                        | 1UF                | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR                                          |
| D100, D101                                                                                             | -         | 2     | LTST-C190YKT                                         | LITE-ON ELECTRONICS; INC.  | LTST-C190YKT       | DIODE; LED; STANDARD; YELLOW; SMT (0603); PIV=5.0V; IF=0.02A; -55 DEGC TO +85 DEGC                                                                   |
| D102, D103                                                                                             | -         | 2     | LTST-C190CKT                                         | LITE-ON ELECTRONICS; INC.  | LTST-C190CKT       | DIODE; LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; -55 DEGC TO +85 DEGC                                                                      |
| DS1, DS2                                                                                               | -         | 2     | Q65111A2364                                          | OSRAM                      | Q65111A2364        | DIODE; LED; OSLON BLACK 850NM; BLACK; SMT; VF=1.5V; IF=1A                                                                                            |
| FB100                                                                                                  | -         | 1     | BLM18PG221SN1                                        | MURATA                     | 220                | INDUCTOR; SMT (0603); FERRITE-BEAD; 220; TOL=+/-25%; 1.4A; -55 DEGC TO +125 DEGC                                                                     |
| GND1, GND5-GND7                                                                                        | -         | 4     | 5011                                                 | KEYSTONE                   | N/A                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                              |
| GND2-GND4, GND8                                                                                        | -         | 4     | 9020 BUSS                                            | WEICO WIRE                 | MAXIMPAD           | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                             |
| J1, J6                                                                                                 | -         | 2     | 10103592-0001LF                                      | FCI CONNECT                | 10103592-0001LF    | CONNECTOR; FEMALE; SMT; MICRO USB B-TYPE REVERSE; RIGHT ANGLE; 5PINS                                                                                 |
| J2                                                                                                     | -         | 1     | PBC08SAAN                                            | SULLINS ELECTRONICS CORP.  | PBC08SAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 8PINS; -65 DEGC TO +125 DEGC                                                                     |
| J3, J101                                                                                               | -         | 2     | TSW-102-26-T-T                                       | SAMTEC                     | TSW-102-26-T-T     | CONNECTOR; THROUGH HOLE; TSW SERIES; TRIPLE ROW; STRAIGHT; 6PINS                                                                                     |
| J4, J5, J200-J208                                                                                      | -         | 11    | TSW-102-07-T-S                                       | SAMTEC                     | TSW-102-07-T-S     | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +105 DEGC                                                              |
| J7, J8                                                                                                 | -         | 2     | TSW-103-07-T-S                                       | SAMTEC                     | TSW-103-07-T-S     | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 3PINS                                                                                     |
| J9                                                                                                     | -         | 1     | S2B-PH-K-S(LF)(SN)                                   | JST MANUFACTURING          | S2B-PH-K-S(LF)(SN) | CONNECTOR; MALE; THROUGH HOLE; 2.0MM PITCH; DISCONNECTABLE CRIMP STYLE CONNECTOR; SIDE ENTRY TYPE; RIGHT ANGLE; 2PINS                                |
| J100                                                                                                   | -         | 1     | PBC06SAAN                                            | SULLINS ELECTRONICS CORP.  | PBC06SAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS; -65 DEGC TO +125 DEGC                                                                     |
| L1                                                                                                     | -         | 1     | DFE201210U-1R5M=P2                                   | TOKO                       | 1.5UH              | EVKIT PART-INDUCTOR; SMT (0805); METAL ALLOY CHIP; 1.5UH; TOL=+/- 20%; 1.9A; 2.00MMX1.20MMX1.00MM                                                    |
| L3                                                                                                     | -         | 1     | CIGT201208EH2R2MN                                    | SAMSUNG ELECTRONICS        | 2.2UH              | EVKIT PART-INDUCTOR; SMT (0805); METAL COMPOSITE CORE; 2.2UH; TOL=+/-20%; 1.8A; 2.00MMX1.25MMX0.80MM                                                 |
| L4                                                                                                     | -         | 1     | CIGT201610EH2R2MN                                    | SAMSUNG ELECTRONICS        | 2.2UH              | EVKIT PART-INDUCTOR; SMT (0806); METAL COMPOSITE CORE; 2.2UH; TOL=+/-20%; 2.7A; 2.00MMX1.60MMX1.00MM                                                 |
| L5                                                                                                     | -         | 1     | DFE252007F-2R2M=P2                                   | MURATA                     | 2.2UH              | EVKIT PART-INDUCTOR; SMT (1008); METAL ALLOY CHIP; 2.2UH; TOL=+/- 20%; 1.7A; 2.50MMX2.00MMX0.70MM                                                    |
| Q1, Q100, Q101                                                                                         | -         | 3     | FDY300NZ                                             | FAIRCHILD SEMICONDUCTOR    | FDY300NZ           | TRAN; SINGLE N-CHANNEL 2.5V SPECIFIED POWERTRENCH MOSFET; NCH; SC89; PD-(0.625W); I-(0.6A); V-(20V)                                                  |
| Q200-Q203                                                                                              | -         | 4     | IRFHM8337TRPBF                                       | INTERNATIONAL RECTIFIER    | IRFHM8337TRPBF     | TRAN; HEXFET POWER MOSFET; NCH; PQFN8; PD-(2.8W); I-(18A); V-(30V)                                                                                   |
| Q204                                                                                                   | -         | 1     | DMG3420U                                             | DIODES INCORPORATED        | DMG3420U           | TRAN; N-CHANNEL ENHANCEMENT MODE MOSFET; NCH; SOT-23; PD- (0.74W); I-(5.47A); V-(20V)                                                                |
| Q205                                                                                                   | -         | 1     | FDN360P                                              | FAIRCHILD SEMICONDUCTOR    | FDN360P            | TRANSISTOR, MOSFET P-CHANNEL, SUPERSOT-3, PD=0.5W, ID=-2.0A, VDSS=-30V,VGSS=+/-20V                                                                   |
| Q206                                                                                                   | -         | 1     | 2N7002                                               | GENERIC PART               | 2N7002             | TRAN; ; NCH; SOT-23; PD-(0.33W); IC-(0.5A); VCEO-(60V); -55 DEGC TO +150 DEGC                                                                        |
| R1, R2, R13, R15, R281, R282, R287, R288                                                               | -         | 8     | CRCW040210K0FK; RC0402FR-0710K                       | VISHAY DALE; YAGEO PHICOMP | 10K                | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                 |

Evaluates: MAX77278

## MAX77278 EV Kit Bill of Materials (continued)

| REF_DES                                                                                                                                                     | DNI/DNP   | QTY   | MFG PART #                                     | MANUFACTURER                      | VALUE                     | DESCRIPTION                                                                                                                  |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-------|------------------------------------------------|-----------------------------------|---------------------------|------------------------------------------------------------------------------------------------------------------------------|
| R3, R5, R142, R277, R279                                                                                                                                    | -         | 5     | ANY                                            | ANY                               | 0                         | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM; FORMFACTOR                                                             |
| R4, R122                                                                                                                                                    | -         | 2     | ANY                                            | ANY                               | 1M                        | RESISTOR; 0603; 1M; 1%; 100PPM; 0.10W; THICK FILM; FORMFACTOR                                                                |
| R9                                                                                                                                                          | - -       | 1 6   | CRCW12060000ZS; ERJ-8GEY0R00V ERJ-2RKF4703X    | VISHAY DALE/PANASONIC             | 0 470K                    | RESISTOR; 1206; 0 OHM; 0%; JUMPER; 0.25W; THICK FILM RESISTOR, 0402, 470K OHM, 1%, 100PPM, 0.0625W, THICK FILM               |
| R10, R14, R293, R295, R297, R299 R11, R17, R135, R136, R139, R141, R143, R148, R152, R155, R162-R164, R166, R204, R212, R225, R227, R238, R246, R251, R259, | -         | 31    |                                                | PANASONIC                         | 0                         | RESISTOR; 0402; 0 OHM; 1%; 100PPM; 0.0625W; THICK FORMFACTOR                                                                 |
| R285, R286, R302-R308                                                                                                                                       | -         |       | ANY                                            | ANY                               |                           | FILM; RESISTOR; THROUGH HOLE-RADIAL LEAD; 3296 SERIES; 200K OHM; 10%;                                                        |
| R12                                                                                                                                                         | -         | 1 2   | 3296Y-1-204LF                                  | BOURNS                            | 200K                      | 100PPM; 0.5W RESISTOR, 0402, 4.7K OHM, 1%, 100PPM, 0.0625W, THICK FILM; FORMFACTOR                                           |
| R100, R118                                                                                                                                                  |           |       | ANY                                            | ANY                               | 4.7K                      | RESISTOR, 0402, 22 OHM, 1%, 100PPM, 0.0625W, THICK FILM;                                                                     |
| R103, R123, R150                                                                                                                                            | -         | 3     | ANY                                            | ANY                               | 22                        | FORMFACTOR RESISTOR, 0402, 2.2K OHM, 1%, 100PPM, 0.0625W, THICK FILM;                                                        |
| R107, R108                                                                                                                                                  | - -       | 2 7   | ANY ANY                                        | ANY ANY                           | 2.2K 100                  | FORMFACTOR RESISTOR; 0402; 100 OHM; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                              |
| R23, R201, R222, R235, R248, R109, R111 R110                                                                                                                | -         | 1     | CRCW0402470RFK                                 | VISHAY DALE                       | 470                       | RESISTOR, 0402, 470 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                     |
| R6-R8, R16, R18-R22, R284, R115, R157, R159, R161, R214, R280, R283                                                                                         | -         | 17    | ANY                                            | ANY                               | 100K                      | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                                            |
| R137,                                                                                                                                                       |           | 2     | ANY                                            |                                   | 49.9                      | RESISTOR; 0402; 49.9 OHM; 1%; 100PPM; 0.0625W; THICK FILM;                                                                   |
| R138                                                                                                                                                        | -         |       |                                                | ANY                               |                           | FORMFACTOR                                                                                                                   |
| R151 R156                                                                                                                                                   | - -       | 1 1   | CRCW0402150RFK; 9C04021A1500FL CRCW0402105KFK  | VISHAY DALE VISHAY DALE           | 150 105K                  | RESISTOR; 0402; 150 OHM; 1%; 100PPM; 0.0625W; THICK FILM RESISTOR; 0402; 105K OHM; 1%; 100PPM; 0.063W ; THICK FILM           |
| R158                                                                                                                                                        | -         | 1     | CRCW0402169KFK                                 | VISHAY DALE                       | 169K                      | RESISTOR; 0402; 169K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                     |
| R160                                                                                                                                                        | -         | 1     | CRCW04024752FK; 9C04021A4752FLHF3;             | VISHAY DALE                       | 47.5K                     | RESISTOR; 0402; 47.5K; 1%; 100PPM; 0.0625W; THICK FILM                                                                       |
| R202, R223, R236, R249                                                                                                                                      | -         | 4     | CRCW040247K5FK CRCW0402680RFK;RC0402FR-07680RL | VISHAY DALE/YAGEO PHICOMP         | 680                       | RESISTOR, 0402, 680 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                     |
| R205, R206, R226, R228, R239, R240, R252, R253                                                                                                              | -         | 4 8   | CRCW040220K0FK CRCW04024991FK                  | VISHAY DALE                       | 20K 4.99K                 | RESISTOR; 0402; 20K OHM; 1%; 100PPM; 0.063W; THICK FILM RESISTOR; 0402; 4.99K; 1%; 100PPM; 0.0625W; THICK FILM               |
| R203, R224, R237, R250 R210, R231, R244, R257, R301                                                                                                         | - -       | 5     | CRCW04021M00FK                                 | VISHAY DALE VISHAY DALE           | 1M                        | RESISTOR; 0402; 1M; 1%; 100PPM; 0.0625W; THICK FILM                                                                          |
| R211, R233, R245, R258                                                                                                                                      | - -       | 4     | ERJ-3RQF1R0V                                   | PANASONIC                         | 1                         | RESISTOR, 0603, 1 OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                         |
| R261                                                                                                                                                        | -         | 1     | CSR0603FKR100                                  | STACKPOLE ELECTRONICS INC         | 0.1 10                    | RESISTOR; 0603; 0.1 OHM; 1%; 300PPM; 0.125W; THICK FILM RESISTOR; 0603; 10 OHM; 1%; 100PPM; 0.10W; THICK FILM                |
| R262                                                                                                                                                        |           | 1     | CRCW060310R0FK; MCR03EZPFX10R0                 | VISHAY DALE/ROHM                  | 64.9K                     |                                                                                                                              |
| R265-R268                                                                                                                                                   | -         | 4     | CRCW040264K9FK                                 | VISHAY DALE                       |                           | RESISTOR; 0402; 64.9K OHM; 1%; 100PPM; 0.063W; METAL FILM                                                                    |
| R207, R208, R229, R230, R242, R243, R254,                                                                                                                   | -         | 11    | CRCW04021K00FK;RC0402FR-071KL                  | VISHAYDALE;YAGEOPHICOMP           | 1K                        | RESISTOR;0402;1K;1%;100PPM;0.0625W;THICKFILM                                                                                 |
| R255, R263, R264, R269                                                                                                                                      |           |       |                                                |                                   |                           |                                                                                                                              |
| R294, R296, R298, R300                                                                                                                                      | - -       | 4 1   | CRCW0402649KFK                                 | VISHAY DALE MURATA                | 649K 10K                  | RESISTOR; 0402; 649K OHM; 1%; 100PPM; 0.063W; THICK FILM THERMISTOR; SMT (0402); THICK FILM (NICKEL PLATED); 10K; TOL=+/-1%  |
| RT1 SW0-SW8                                                                                                                                                 | -         | 9     | NCP15XH103F03RC EVQ-Q2K03W                     |                                   | EVQ-Q2K03W                | SWITCH; SPST; SMT; 15V; 0.02A; LIGHT TOUCH SWITCH; RCOIL= OHM; RINSULATION= OHM; PANASONIC                                   |
| SW9                                                                                                                                                         |           |       |                                                |                                   |                           | SWITCH; SPDT; SMT; 12V; 0.02A; CL-SB SERIES; SLIDE OHM; RINSULATION=100M OHM; NIDEC COPAL                                    |
|                                                                                                                                                             | -         | 1     | CL-SB-12B-11                                   | PANASONIC NIDEC COPAL ELECTRONICS | CL-SB-12B-11              | SWITCH; RCOIL=0.05 ELECTRONICS CORP                                                                                          |
| U1                                                                                                                                                          | -         | 1 1   | MAX77278EWB+                                   | MAXIM MAXIM                       | MAX77278EWB+              | EVKIT PART - IC; LOW POWER PMIC FOR WEARABLE AND HANDHELD DEVICES; PACKAGE OUTLINE: 21-100152; PACKAGE CODE: W352C3+1; WLP35 |
| U100                                                                                                                                                        | -         |       | MAXQ2000-RBX+                                  |                                   | MAXQ2000-RBX+             | IC; CTRL; LOW-POWER LCD MICROCONTROLLER; TQFN56-EP 8X8                                                                       |
| U101 U102-U104                                                                                                                                              | - -       | 1 3   | FT232RQ MAX8512EXK+                            | FUTURE TECHNOLOGY DEVICES MAXIM   | FT232RQ MAX8512EXK        | IC; INFC; UART INTERFACE IC USB TO SERIAL; QFN32-EP 5X5 IC, VREG, Ultra-Low-Noise, High PSRR, Adjustable Vout, SC70-5        |
| U107                                                                                                                                                        | -         | 1     | MAX3395EETC+                                   | MAXIM                             | MAX3395EETC               | IC; TRANS; 15KV ESD-PROTECTED HIGH-DRIVE CURRENT QUAD-LEVEL TRANSLATOR WITH SPEED-UP CIRCUITRY; TQFN12 4X4                   |
| U108                                                                                                                                                        | -         | 1     | 24AA02T-I/OT                                   | MICROCHIP                         | 24AA02T-I/OT              | IC; EPROM; 2K I2C SERIAL EEPROM; SOT23-5                                                                                     |
| U200-U204 U205                                                                                                                                              | - -       | 5 1   | MAX44251AUA+ MAX5815AAUD+                      | MAXIM MAXIM                       | MAX44251AUA+ MAX5815AAUD+ | IC; OPAMP; ULTRA-PRECISION; LOW-NOISE OP AMP; UMAX8 IC; DAC; ULTRA-SMALL; QUAD-CHANNEL; 12-BIT BUFFERED OUTPUT DAC           |
| U206                                                                                                                                                        | -         | 1     | MAX14689EWL+                                   | MAXIM                             | MAX14689EWL+              | IC; ASW; 0.125A; FREQUENCY-SELECTSBLE; SWITCHED-CAPACITOR VOLTAGE CONVERTER; WLP9 1.2X1.2                                    |
| U207                                                                                                                                                        | -         | 1     | MAX4238AUT+                                    | MAXIM                             | MAX4238AUT+               | IC; OPAMP; IC; ULTRA-LOW OFFSET/DRIFT; LOW-NOISE; PRECISION SOT23 AMPLIFIER; SOT23-6                                         |
| U209                                                                                                                                                        | -         | 1     | MAX11614EEE+                                   | MAXIM                             | MAX11614EEE+              | IC; ADC; LOW-POWER; 8-CHANNEL; I2C; 12-BIT ADC IN ULTRA-SMALL PACKAGE; QSOP16                                                |
| U210                                                                                                                                                        | -         | 1     | MAX6037BAUK41+                                 | MAXIM                             | MAX6037BAUK41+            | IC; VREF; LOW-POWER; FIXED; ADJUSTABLE REFERENCE WITH SHUTDOWN;                                                              |
| Y101                                                                                                                                                        | -         | 1     | CX3225SB16000D0FLJZZ                           |                                   | 16MHZ                     | SOT23-5                                                                                                                      |
| PCB                                                                                                                                                         | -         | 1     | MAX77278_SOLDERDOWN_REVA                       | KYOCERA-KINSEKI MAXIM             |                           | CRYSTAL; SMT (3225) 3.2X2.5; 8PF; 16MHZ; +/-10PPM; +/-15PPM PCB:MAX77278_SOLDERDOWN_REVA 0.8A                                |
| L2                                                                                                                                                          | DNP       | 0     | MLP1608VR47D                                   | TDK                               | PCB 0.47UH                | INDUCTOR; SMT (0603); SHIELDED; 0.47UH; TOL=+/-0.3nH;                                                                        |
| C16 C18, C19, C21-C24, C26, C37, C129, C134                                                                                                                 | DNP DNP   | 0 0   | N/A                                            | N/A                               | OPEN                      | CAPACITOR; SMT (0603); OPEN; FORMFACTOR CAPACITOR; SMT (0402); OPEN; FORMFACTOR                                              |
| R165, R213, R234, R247, R260                                                                                                                                | DNP       | 0     | N/A N/A                                        | N/A N/A                           | OPEN OPEN                 | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                             |

NOTE: DNI--&gt; DO NOT INSTALL (PACKOUT) ; DNP--&gt; DO NOT PROCURE

## MAX77278 EV Kit Schematic

| Part Number     | Configuration            | 7-bit                  | 8-bit Write                          | 8-bit Read       |
|-----------------|--------------------------|------------------------|--------------------------------------|------------------|
| MAX77278 (PMIC) | ADDR OTP bit set for 0   | 0x40 0b100 0000        | 0x80 0b1000 0000                     | 0x81 0b1000 0001 |
| MAX77278 (PMIC) | ADDR OTP bit set for 1   | 0x48 0b100 1000        | 0x90 0b1001 0000                     | 0x91 0b1001 0001 |
| MAX77278 (PMIC) | Maxim internal test mode | 0x49 0b100 1001        | 0x92 0b1001 0010                     | 0x93 0b1001 0011 |
| MAX11614 (ADC)  | N/A                      | 0x33 0b011 0011        | 0x66 0b0110 0110                     | 0x67 0b0110 0111 |
| MAX5815 (DAC)   | ADDR1=ADDR0=GND          | 0x1F 0b001 1111        | 0x3E 0b00 10 11 11 0x10* 0b0001 0000 | 0x3F 0b0011 1111 |
| (EEPROM) 24AA02 | N/A                      | 0x50 to 0x57 0b1010xxx | 0b1010xxx0                           | 0b1010xxx1       |

*MAX5815 ALSO RESPONDS TO AN I2C BROADCAST ADDRESS 0b0001 0000

│

## MAX77278 EV Kit Schematic (continued)

<!-- image -->

│

## MAX77278 EV Kit Schematic (continued)

<!-- image -->

│

## MAX77278 EV Kit Schematic (continued)

<!-- image -->

## MAX77278 EV Kit Schematic (continued)

<!-- image -->

## MAX77278 EV Kit Schematic (continued)

<!-- image -->

│

Evaluates: MAX77278

## MAX77278 EV Kit PCB Layouts

MAX77278 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX77278 EV Kit PCB Layout-Top Layer

<!-- image -->

MAX77278 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

MAX77278 EV Kit PCB Layout-Internal Layer 3

<!-- image -->

│

## MAX77278 EV Kit PCB Layouts (continued)

MAX77278 EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX77278 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/18            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX77278