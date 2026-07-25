<!-- lastmod 2022-08-03 -->
## MAX77734 Evaluation Kit

## General Description

The MAX77734 evaluation kit (EV kit) is a fully assembled and tested printed circuit board (PCB) that demonstrates the MAX77734. The EV kit allows for easy evaluation of the various MAX77734 features, including the linear charger, linear regulator, analog multiplexer, current sinks, and I 2 C interface.

Windows ® -based software provides a user-friendly graphical interface as well as a detailed register-based interface to exercise the features of the MAX77734.

Ordering Information appears at end of data sheet.

Evaluates: MAX77734

## Benefits and Features

- Easy to Use
- GUI Drives I 2 C Interface
- On-Board Thermistor
-  Red/Green LED
- Assembled and Fully Tested
- Emulates System Loading
- On-Board Electronic Load for LDO
- Electronic Load has Steady-State, Transient, and Random Modes
- Demonstrates End-to-End Analog Multiplexer Implementation
-  On-Board ADC
- Evaluates Both Push-Button and Slider-Switch On-Key Options

Figure 1. MAX77734 EV Kit Photo

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

<!-- image -->

Evaluates: MAX77734

Figure 2. MAX77734 EV Kit Block Diagram

<!-- image -->

Figure 3. MAX77734 EV Kit Top View

<!-- image -->

## MAX77734 Evaluation Kit

Table 1. Default Shunt Positions and Jumper Descriptions

| REFERENCE DESIGNATOR   | DEFAULT POSITION   | FUNCTION                                                                                                                                                                                                             |
|------------------------|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J100                   | N/A                | Do not connect shunts to J100.                                                                                                                                                                                       |
| J101                   | 1-2                | 1-2: Connects a VIO to the 1.8V EVKIT logic rail. 3-4: Connects a VIO to the 3.3V EVKIT logic rail. 5-6: Connects a VIO to the LDO output.                                                                           |
| J206                   | 1-2                | 1-2: Connects the U203 amplifier to the gate of the Q203 load FET.                                                                                                                                                   |
| J207                   | 1-2                | 1-2: Connects VLDO to load cell and the on-board ADC.                                                                                                                                                                |
| J1                     | N/A                | USB-Micro adapter for powering CHGIN.                                                                                                                                                                                |
| J2                     | 1-2                | 1-2: Connects PMLDO to VIO (normal mode when pin-controlled). 2-3: Connects PMLDO to GND (low-power mode when pin-controlled).                                                                                       |
| J3                     | Not Installed      | 1-2: Connects VUSB to CHGIN. Do not install jumper when CHGIN is powered externally (through a power supply).                                                                                                        |
| J4                     | 1-2                | 1-2: Connects the negative battery terminal to GND.                                                                                                                                                                  |
| J5                     | 2-3                | 1-2: Connects nENLDO to SW2. 2-3: Connects nENLDO to SW1.                                                                                                                                                            |
| J6                     | 1-2                | 1-2: Connects POKLDO to the LDO output. 3-4: Connects POKLDO to VIO. 5-6: Connects POKLDO to the 3.3V regulator on the EVKIT.                                                                                        |
| J7                     | 3-4                | 1-2: Connects the THM pin to the divider through the potentiometer (R12). 3-4: Connects the THM pin to the divider through the on-board thermistor. 5-6: Connects the THM pin to the divider through a 10k resistor. |
| J8                     | N/A                | USB-Micro adapter for communications to a user PC (and use the GUI).                                                                                                                                                 |
| J9                     | N/A                | Li+ battery connection.                                                                                                                                                                                              |

## Quick Start

Follow this procedure to familiarize yourself with the EV kit.

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Required Equipment

- MAX77734 EVKIT
- Windows-based PC
- Power supply
- Ammeter
- DVM
- Micro-USB cable
- GUI

## Procedure

- 1) Install  GUI  software.  Visit www.maximintegrated.com/ evkitsoftware or  the  product  folder  at www.maximinte -grated.com/max77734evkit to  download  the  latest  version of the EV kit software. Save the EV kit software to a temporary folder and decompress the ZIP file.
- 2) Install EV kit shunts per Table 1.
- 3) Apply  a  3.7V  supply  (set  for  100mA  current  limit) through an ammeter (set for 1mA range) across the BATT  and  GND1  terminals  of  the  EV  kit.  Turn  the supply on.
- 4) Connect a Micro-B USB cable between the EV kit's J8 and your Windows-based PC.
- 5) Open the GUI and press the Connect button in the upper left corner. Wait for the device to respond, and in  the Synchronize window,  press  the Read  and close button.
- 6) Press the on-key (SW1).

Evaluates: MAX77734

│

## MAX77734 Evaluation Kit

- 7) On the AMUX/ADC tab  of  the  GUI,  click  the Read button for VLDO. For the MAX77734C you should see 3.3V (see Figure 4).
- 8) Confirm with the ammeter that the quiescent current is approximately 17µA.
- 9) In the LDO tab of the GUI, set the LDO Power Mode Control bitfield to 0x0 = Forced Low-Power Mode.
- 10) Confirm with the ammeter that the quiescent current is now approximately 4.5µA.
- 11)  Remove the supply from the BATT. Connect a partially discharged battery (or preloaded power supply) to BATT.
- 12)  Make sure that there is no jumper installed at J3. Apply a 5V supply (set for 1A current limit) through an ammeter (set for 1A range) to the CHGIN and GND1 terminals of the EV kit. Turn the supply on.
- 13)  In  the  GUI,  set  the  VFAST\_CHG  register  to  4.2V, set the IFAST\_CHG register to some current that is safe  for  your  battery  (e.g.,  30mA  for  a  45mAh  cell) (see Figure 5).
- 14)  Enable the charger with the CHG\_EN bit.
- 15) Confirm on the ammeter that the charger is sourcing the IFAST\_CHG current to the battery. Note that the current that appears on the ammeter should be the sum of IFAST\_CHG and the quiescent current of the charger (~1.2mA).

## Evaluates: MAX77734

This concludes the Quick Start procedure. Users are now encouraged to explore the device and its register settings with the GUI.

For  more  information  on  the  GUI,  see  the Software section.

Figure 4. Quick Start: Regulator Check with the ADC

<!-- image -->

│

## MAX77734 Evaluation Kit

Figure 5. Quick Configuration of the Charger

<!-- image -->

## EV Kit Features

## On-Key Options

For applications that require the IC to enable with a userinteractable switch, the EV kit comes with two common types: the push-button (momentary) and the slide-switch (persistent). The active-low enable pin (nENLDO) has an internal pullup resistor. Select between either switch with the jumper J5. See the data sheet for more information on configuring the IC for momentary or persistent switches.

## Temperature Monitoring

Jumper  J7  allows  selection  between  the  following  temperature monitoring options:

- 1) Potentiometer R12 (POT)
- 2) Fixed resistor divider R13 (RES)
- 3) 3380K negative temperature coefficient thermistor RT1 (NTC)

Use the potentiometer setting (POT) to quickly simulate a  changing  battery  temperature  to  evaluate  the  charger's  JEITA  safe  charging  response.  Turn  the  potentiometer  knob  counter  clock-wise  to  simulate  decreasing battery temperature. Turn the knob clockwise to simulate increasing temperature. Use the resistor setting (RES) to permanently simulate a normal temperature (25°C). Use the  thermistor  setting  (NTC)  to  evaluate  the  charger's response  to  actual  EVK  temperature.  The  NTC  beta parameter is 3380K. Temperature thresholds corresponding  to  this  NTC  beta  are  listed  in  Table  2.  Refer  to  the

## Table 2. Trip Thresholds for 3380K Beta Thermistor

|   TRIP VOLTAGE (V) |   TRIP TEMPERATURE ( ° C) |
|--------------------|---------------------------|
|              1.024 |                       -10 |
|              0.976 |                        -5 |
|              0.923 |                         0 |
|              0.867 |                         5 |
|              0.807 |                        10 |
|              0.747 |                        15 |
|              0.511 |                        35 |
|              0.459 |                        40 |
|              0.411 |                        45 |
|              0.367 |                        50 |
|              0.327 |                        55 |
|              0.291 |                        60 |

data sheet for guidance about how to design with different NTC beta.

The  MAX77734  automatically  biases  the  temperature monitoring circuit whenever CHGIN is valid or the MUX\_ SEL[3:0]  bitfield  is  connecting  the  TBIAS  or  THM  pins to the AMUX output. Refer to the Adjustable Thermistor Temperature  Monitors section  of  the  MAX77734  data sheet for more information.

│

## MAX77734 Evaluation Kit

## Battery Terminal Jumper

There is a removable jumper (default installed, J4) near the Li+ battery connector (J9) that can be used to measure current from a real battery. The jumper is in series with  the  negative  terminal  of  the  battery  connector. Remove J4 and place an ammeter across the two pins to measure current through the battery.

## Electronic Load

The EV kit comes with an electronic load that allows the user to easily evaluate the LDO. An on-board DAC and op-amp  configuration  set  the  load  current  through  I 2 C, and  J207  connects  the  load  to  the  output  of  the  LDO. Emulate  SYS  loading  by  removing  J207  and  connecting pin 1 of the header to VSYS with a wire. To exercise the  load  transient  response  of  the  LDO,  remove  J206 and  connect  a  signal  generator  to  the  gate  of  the  load MOSFET (pin 2 of the header). Drive the MOSFET gate with a signal between ~1V (off) and ~3V (fully on) to apply transients  to  the  output  of  the  LDO  (assuming  J207  is installed). Note that there is a 1 ohm sense resistor that has test point access (called SNS) that allows for a 1:1 conversion of load current to voltage.

## Evaluates: MAX77734

## On-Board ADC (MAX11644)

An on-board ADC is available to convert the voltage at the electronic load (LDO if J207 is installed) and the AMUX pin of the MAX77734. Use the GUI to convert these voltages to digital information.

## Software

The  graphical  user  interface  (GUI)  software  allows  for quick, easy, and thorough evaluation of the MAX77734. The GUI is designed to have individual tabs for each functional  block  of  the  device  (global  resources,  interrupts/ status, charger, LDO, current sinks, and AMUX/ADC) and two additional tabs for controlling EV kit hardware (load control and AMUX/ADC). See Figure 7 for a screenshot of the GUI upon first opening.

## Installation

Visit www.maximintegrated.com/evkitsoftware or the  product  folder  at www.maximintegrated.com/max -77734evkit to  download the latest version of the EV kit software. Save the EV kit software to a temporary folder and uncompress the ZIP file.

Figure 6. Electronic Load Block Diagram

<!-- image -->

│

## Load Control Tab

The Load Control tab contains controls for setting load on the LDO output. The GUI is capable of setting steadystate, transient, and random load currents. To set a load current,  use  the  slider  bar  or  text  field  to  input  a  value (mA) and press the Enable button.  Shuffle  through  the modes  to  exercise  different  load  conditions.  The  offset and gain values are set by Maxim and do not need to be altered.

## AMUX/ADC Tab

The AMUX/ADC tab  allows  users  to  convert  important voltage and current signals to digital readings. To read a signal, click the Read button and examine the Interpreted Value column.

│

Figure 7. MAX77734 EV Kit GUI Top-Level Interface

<!-- image -->

## Windows Drivers

Upon connection of a Micro-USB cable between your PC and the EV kit for the first time, you need to wait a few minutes  for  Windows  to  automatically  install  the  necessary drivers.

## Graphical User Interface (GUI) Details

The GUI drives I 2 C communication with the EV kit. Every control  in  the  GUI  (excluding  the Load  Control and AMUX/ADC tabs) corresponds directly to a register within the  MAX77734. Refer to the register map in the device data sheet for a complete description of the registers. The Load  Control and AMUX/ADC tabs  provide  additional functionality with the EV kit.

## MAX77734 EV Kit Bill of Materials

| REF_DES                                                                         | DNI/DNP   |   QTY | MFG PART #                                            | MANUFACTURER              | VALUE            | DESCRIPTION                                                                                                            |
|---------------------------------------------------------------------------------|-----------|-------|-------------------------------------------------------|---------------------------|------------------|------------------------------------------------------------------------------------------------------------------------|
| NEN, SCL, SDA, AMUX, NIRQ, EN_EXT, POKLDO                                       |           |     7 | 5002                                                  | KEYSTONE                  | N/A              | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                  |
| VL, LDO, SYS, VIO, BATT, BATTN, CHGIN, INLDO                                    |           |     8 | 5010                                                  | KEYSTONE                  | N/A              | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                     |
| C1                                                                              |           |     1 | C1005X5R1E225K050                                     | TDK                       | 2.2UF            | CAPACITOR; SMT (0402); CERAMIC CHIP; 2.2UF; 25V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                              |
| C2                                                                              |           |     1 | GRM155R60J475ME87; GRM153R60J475ME15                  | MURATA                    | 4.7UF            | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 6.3V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                             |
| C3                                                                              |           |     1 | GRM155R70J105MA12                                     | MURATA                    | 1UF              | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=20%; TG=- 55 DEGC TO +125 DEGC; TC=X7R                             |
| C4                                                                              |           |     1 | GRM155C80J225KE95                                     | MURATA                    | 2.2UF            | CAPACITOR; SMT (0402); CERAMIC CHIP; 2.2UF; 6.3V; TOL=10%; TG=-55 DEGC TO +105 DEGC; TC=X6S                            |
| C5, C11                                                                         |           |     2 | ANY                                                   | ANY                       | 0.1UF            | CAPACITOR; SMT; 0402; CERAMIC; 0.1uF; 10V; 10%; X5R; -55degC to + 125degC; 0 +/-30PPM/degC; FORMFACTOR ;               |
| C6                                                                              |           |     1 | C1608X5R0J226M080AC                                   | TDK                       | 22UF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 22UF; 6.3V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R              |
| C7                                                                              |           |     1 | ANY                                                   | ANY                       | 10UF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 10UF; 6.3V; TOL=20%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR          |
| C10, C114                                                                       |           |     2 | ANY                                                   | ANY                       | 0.47UF           | CAPACITOR; SMT; 0603; CERAMIC; 0.47uF; 10V; 10%; X5R; -55degC to + 125degC, ; FORMFACTOR                               |
| C12                                                                             |           |     1 | ANY                                                   | ANY                       | 0.01UF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 6.3V; TOL=10%; MODEL=C0402C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R      |
| C14, C108, C150, C151, C155-C157, C159, C217, C221-C223, C234, C235, C237, C244 |           |    16 | ANY                                                   | ANY                       | 0.1UF            | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R; FORMFACTOR |
| C15                                                                             |           |     1 | GRM188R61A105KA61; C1608X5R1A105K                     | MURATA/TDK                | 1UF              | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R;                       |
| C110-C113, C115, C118, C120, C158, C242                                         |           |     9 | ANY                                                   | ANY                       | 1UF              | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R ; FORMFACTOR  |
| C152, C153                                                                      |           |     2 | GRM1555C1H150FA01                                     | MURATA                    | 15PF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 15PF; 50V; TOL=1%; TG=- 55 DEGC TO +125 DEGC; TC=C0G                              |
| C154                                                                            |           |     1 | ANY                                                   | ANY                       | 4.7UF            | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 10V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R; FORMFACTOR  |
| C216                                                                            |           |     1 | ANY                                                   | ANY                       | 1000PF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL=10%; MODEL=C0G; TG=-55 DEGC TO +125 DEGC; TC=+; FORMFACTOR       |
| C218, C219                                                                      |           |     2 | C0402C180J5GAC; GRM1555C1H180JA01J;C10 05C0G1H180J050 | KEMET/MURATA/TDK          | 18PF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 18PF; 50V; TOL=5%; TG=- 55 DEGC TO +125 DEGC; TC=C0G                              |
| C220, C249, C251                                                                |           |     3 | C1005X5R1H472K050                                     | TDK                       | 4700PF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 4700PF; 50V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                             |
| D1                                                                              |           |     1 | HSMF-C163                                             | AVAGO TECHNOLOGIES        | HSMF- C163       | DIODE; LED; MINIATURE BI-COLOR SURFACE MOUNT CHIPLED; RED- GREEN; SMT (0603); VF=1.9V; 3.4V; IF=0.02A; 0.01A           |
| D100, D101                                                                      |           |     2 | LTST-C190YKT                                          | LITE-ON ELECTRONICS; INC. | LTST- C190YKT    | DIODE; LED; STANDARD; YELLOW; SMT (0603); PIV=5.0V; IF=0.02A; 55 DEGC TO +85 DEGC                                      |
| D102, D103                                                                      |           |     2 | LTST-C190CKT                                          | LITE-ON ELECTRONICS; INC. | LTST- C190CKT    | DIODE; LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; -55 DEGC TO +85 DEGC                                        |
| FB100                                                                           |           |     1 | BLM18PG221SN1                                         | MURATA                    | 220              | INDUCTOR; SMT (0603); FERRITE-BEAD; 220; TOL=+/-25%; 1.4A; -55 DEGC TO +125 DEGC                                       |
| GND1-GND4                                                                       |           |     4 | 9020 BUSS                                             | WEICO WIRE                | MAXIMPA D        | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                               |
| SNS, THM, SINK1, SINK2, TBIAS, IN_SINK                                          |           |     6 | 5000                                                  | KEYSTONE                  | N/A              | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;       |
| J1, J8                                                                          |           |     2 | 10103592-0001LF                                       | FCI CONNECT               | 10103592- 0001LF | CONNECTOR; FEMALE; SMT; MICRO USB B-TYPE REVERSE; RIGHT ANGLE; 5PINS                                                   |

Evaluates: MAX77734

## MAX77734 EV Kit Bill of Materials (continued)

| REF_DES                                                                                             | DNI/DNP   |   QTY | MFG PART #                                        | MANUFACTURER                       | VALUE               | DESCRIPTION                                                                                                           |
|-----------------------------------------------------------------------------------------------------|-----------|-------|---------------------------------------------------|------------------------------------|---------------------|-----------------------------------------------------------------------------------------------------------------------|
| J2, J5                                                                                              |           |     2 | TSW-103-07-T-S                                    | SAMTEC                             | TSW-103- 07-T-S     | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 3PINS                                                      |
| J3, J4, J206, J207                                                                                  |           |     4 | TSW-102-07-T-S                                    | SAMTEC                             | TSW-102- 07-T-S     | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +105 DEGC                               |
| J6, J7, J101                                                                                        |           |     3 | TSW-103-07-L-D                                    | SAMTEC                             | TSW-103- 07-L-D     | CONNECTOR; MALE; THROUGH HOLE; THROUGH HOLE 0.025 POST HEADER; STRAIGHT; 6PINS                                        |
| J9                                                                                                  |           |     1 | S2B-PH-K-S(LF)(SN)                                | JST MANUFACTURING                  | S2B-PH-K- S(LF)(SN) | CONNECTOR; MALE; THROUGH HOLE; 2.0MM PITCH; DISCONNECTABLE CRIMP STYLE CONNECTOR; SIDE ENTRY TYPE; RIGHT ANGLE; 2PINS |
| J100                                                                                                |           |     1 | PEC08SAAN                                         | SULLINS ELECTRONICS CORP.          | PEC08SAA N          | CONNECTOR; MALE; THROUGH HOLE; .100IN CONTACT CENTER; MALE BREAKAWAY HEADER ; STRAIGHT; 8PINS                         |
| Q1                                                                                                  |           |     1 | FDY300NZ                                          | FAIRCHILD SEMICONDUCTOR            | FDY300NZ            | TRAN; SINGLE N-CHANNEL 2.5V SPECIFIED POWERTRENCH MOSFET; NCH; SC89; PD-(0.625W); I-(0.6A); V-(20V)                   |
| Q203                                                                                                |           |     1 | IRFHM8337TRPBF                                    | INTERNATIONAL RECTIFIER            | IRFHM833 7TRPBF     | TRAN; HEXFET POWER MOSFET; NCH; PQFN8; PD-(2.8W); I-(18A); V- (30V)                                                   |
| Q205                                                                                                |           |     1 | FDN360P                                           | FAIRCHILD SEMICONDUCTOR            | FDN360P             | TRANSISTOR, MOSFET P-CHANNEL, SUPERSOT-3, PD=0.5W, ID=- 2.0A, VDSS=-30V,VGSS=+/-20V -55 DEGC                          |
| Q206                                                                                                |           |     1 | 2N7002                                            | N/A                                | 2N7002              | TRAN; ; NCH; SOT-23; PD-(0.33W); IC-(0.5A); VCEO-(60V); TO +150 DEGC                                                  |
| R1, R13, R15, R287, R288                                                                            |           |     5 | CRCW040210K0FK; RC0402FR-0710K                    | VISHAY DALE; YAGEO PHICOMP         | 10K                 | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICKFILM                                                                   |
| R3, R142, R277, R279                                                                                |           |     4 | ANY                                               | ANY                                | 0                   | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM; FORMFACTOR                                                      |
| R4, R122                                                                                            |           |     2 | ANY                                               | ANY                                | 1M                  | RESISTOR; 0603; 1M; 1%; 100PPM; 0.10W; THICK FILM; FORMFACTOR                                                         |
| R5, R7, R8, R14                                                                                     |           |     4 | CRCW06030000Z0                                    | VISHAY DALE                        | 0                   | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.1W; THICK FILM                                                                   |
| R12                                                                                                 |           |     1 | 3296Y-1-204LF                                     | BOURNS                             | 200K                | RESISTOR; THROUGH HOLE-RADIAL LEAD; 3296 SERIES; 200K OHM; 10%; 100PPM; 0.5W                                          |
| R100, R118                                                                                          |           |     2 | ANY                                               | ANY                                | 4.7K                | RESISTOR, 0402, 4.7K OHM, 1%, 100PPM, 0.0625W, THICK FILM; FORMFACTOR                                                 |
| R103, R123, R150                                                                                    |           |     3 | ANY                                               | ANY                                | 22                  | RESISTOR, 0402, 22 OHM, 1%, 100PPM, 0.0625W, THICKFILM; FORMFACTOR                                                    |
| R107, R108                                                                                          |           |     2 | ANY                                               | ANY                                | 2.2K                | RESISTOR, 0402, 2.2K OHM, 1%, 100PPM, 0.0625W, THICK FILM; FORMFACTOR                                                 |
| R110                                                                                                |           |     1 | CRCW0402470RFK                                    | VISHAY DALE                        | 470                 | RESISTOR, 0402, 470 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                              |
| R2, R6, R9-R11, R115, R132, R157, R159, R161, R214, R280, R283                                      |           |    13 | ANY                                               | ANY                                | 100K                | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                                     |
| R133, R135, R136, R143, R148, R152, R155, R162-R165, R210- R213, R251, R259, R285, R286, R303, R304 |           |    21 | ANY                                               | ANY                                | 0                   | RESISTOR; 0402; 0 OHM; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                                    |
| R151                                                                                                |           |     1 | CRCW0402150RFK; 9C04021A1500FL                    | VISHAY DALE                        | 150                 | RESISTOR; 0402; 150 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                                              |
| R156                                                                                                |           |     1 | CRCW0402105KFK                                    | VISHAY DALE                        | 105K                | RESISTOR; 0402; 105K OHM; 1%; 100PPM; 0.063W ; THICK FILM                                                             |
| R158                                                                                                |           |     1 | CRCW0402169KFK                                    | VISHAY DALE                        | 169K                | RESISTOR; 0402; 169K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                              |
| R160                                                                                                |           |     1 | CRCW04024752FK; 9C04021A4752FLHF3; CRCW040247K5FK | VISHAY DALE                        | 47.5K               | RESISTOR; 0402; 47.5K; 1%; 100PPM; 0.0625W; THICK FILM                                                                |
| R109, R111, R248                                                                                    |           |     3 | CRCW0402100RFK;9C04021 A1000FL;RC0402FR- 07100RL  | VISHAYDALE;PANASONI C;YAGEOPHYCOMP | 100                 | RESISTOR;0402;100OHM;1%;100PPM;0.063W;THICKFILM                                                                       |
| R249                                                                                                |           |     1 | CRCW0402680RFK;RC0402F R-07680RL                  | VISHAY DALE/YAGEO PHICOMP          | 680                 | RESISTOR, 0402, 680 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                              |
| R250                                                                                                |           |     1 | CRCW040220K0FK                                    | VISHAY DALE                        | 20K                 | RESISTOR; 0402; 20K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                               |
| R252, R253                                                                                          |           |     2 | CRCW04024991FK                                    | VISHAY DALE                        | 4.99K               | RESISTOR; 0402; 4.99K; 1%; 100PPM; 0.0625W; THICK FILM                                                                |
| R254, R255                                                                                          |           |     2 | ANY                                               | ANY                                | 1K                  | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM; FORMFACTOR                                                       |
| R257                                                                                                |           |     1 | CRCW04021M00FK                                    | VISHAY DALE                        | 1M                  | RESISTOR; 0402; 1M; 1%; 100PPM; 0.0625W; THICK FILM                                                                   |
| R258                                                                                                |           |     1 | CSR1206FT1R00                                     | STACKPOLE ELECTRONICS INC.         | 1                   | RESISTOR; 1206; 1 OHM; 1%; 100PPM; 0.5W; THICK FILM                                                                   |

## MAX77734 EV Kit Bill of Materials (continued)

| REF_DES            | DNI/DNP   |   QTY | MFG PART #                | MANUFACTURER                        | VALUE           | DESCRIPTION                                                                                                                   |
|--------------------|-----------|-------|---------------------------|-------------------------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------|
| R299               |           |     1 | ERJ-2RKF4703X             | PANASONIC                           | 470K            | RESISTOR, 0402, 470K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                     |
| R300               |           |     1 | CRCW0402649KFK            | VISHAY DALE                         | 649K            | RESISTOR; 0402; 649K OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                      |
| RT1                |           |     1 | NCP15XH103F03RC           | MURATA                              | 10K             | THERMISTOR; SMT (0402); THICK FILM (NICKEL PLATED); 10K; TOL=+/-1%                                                            |
| SW1                |           |     1 | EVQ-Q2K03W                | PANASONIC                           | EVQ- Q2K03W     | SWITCH; SPST; SMT; 15V; 0.02A; LIGHT TOUCH SWITCH; RCOIL= OHM; RINSULATION= OHM; PANASONIC                                    |
| SW2                |           |     1 | CL-SB-12B-11              | NIDEC COPAL ELECTRONICS CORP        | CL-SB-12B- 11   | SWITCH; SPDT; SMT; 12V; 0.02A; CL-SB SERIES; SLIDE SWITCH; RCOIL=0.05 OHM; RINSULATION=100M OHM; NIDEC COPAL ELECTRONICS CORP |
| U1                 |           |     1 | MAX77734CENP+T            | MAXIM                               | MAX77734 CENP+T | EVKIT PART-IC; MAX77734; MD34; 0.4MM PITCH PACKAGE; BGA20; PACKAGE OUTLINE: 21-100154; PACKAGE CODE: N201B2+1                 |
| U100               |           |     1 | MAXQ2000-RBX+             | MAXIM                               | MAXQ2000- RBX+  | IC; CTRL; LOW-POWER LCD MICROCONTROLLER; TQFN56-EP 8X8                                                                        |
| U101               |           |     1 | FT232RQ                   | FUTURE TECHNOLOGY DEVICES INTL LTD. | FT232RQ         | IC; INFC; UART INTERFACE IC USB TO SERIAL; QFN32-EP 5X5                                                                       |
| U102-U104          |           |     3 | MAX8512EXK                | MAXIM                               | MAX8512E XK     | IC, VREG, Ultra-Low-Noise, High PSRR, Adjustable Vout, SC70-5                                                                 |
| U107               |           |     1 | MAX3395EETC               | MAXIM                               | MAX3395E ETC    | IC; TRANS; 15KV ESD-PROTECTED HIGH-DRIVE CURRENT QUAD- LEVEL TRANSLATOR WITH SPEED-UP CIRCUITRY; TQFN12 4X4                   |
| U108               |           |     1 | 24AA02T-I/OT              | MICROCHIP                           | 24AA02T- I/OT   | IC; EPROM; 2K I2C SERIAL EEPROM; SOT23-5                                                                                      |
| U203               |           |     1 | MAX44251AUA+              | MAXIM                               | MAX44251 AUA+   | IC; OPAMP; ULTRA-PRECISION; LOW-NOISE OP AMP; UMAX8                                                                           |
| U205               |           |     1 | MAX5805AAUB+              | MAXIM                               | MAX5805A AUB+   | IC; DAC; ULTRA-SMALL, SINGLE-CHANNEL, 12-BIT BUFFERED OUTPUT DAC WITH INTERNAL REFERENCE AND I2C INTERFACE; UMAX10            |
| U209               |           |     1 | MAX11644EUA+              | MAXIM                               | MAX11644 EUA+   | IC; ADC; LOW-POWER; 2-CHANNEL; I2C; 12-BIT ADCS INULTRA- TINY 1.9MMX2.2MM PACKAGE; UMAX8 1.9X2.2                              |
| U210               |           |     1 | MAX6037BAUK41+            | MAXIM                               | MAX6037B AUK41+ | IC; VREF; LOW-POWER; FIXED; ADJUSTABLE REFERENCE WITH SHUTDOWN; SOT23-5                                                       |
| Y101               |           |     1 | CX3225SB16000D0FLJZZ      | KYOCERA-KINSEKI                     | 16MHZ           | CRYSTAL; SMT (3225) 3.2X2.5; 8PF; 16MHZ; +/-10PPM; +/-15PPM                                                                   |
| PCB                |           |     1 | MAX77734_SOLDERDOWN_ REVB | MAXIM                               | PCB             | PCB:MAX77734_SOLDERDOWN_REVB                                                                                                  |
| R260               | DNP       |     0 | N/A                       | N/A                                 | OPEN            | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                              |
| C8, C9, C129, C134 | DNP       |     0 | N/A                       | N/A                                 | OPEN            | CAPACITOR; SMT (0402); OPEN; FORMFACTOR                                                                                       |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX77734EVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX77734

│

## MAX77734 EV Kit Schematic

| PART NUMBER     | PIN STRAP        | 7-BIT                   | 8-BIT WRITE                           | 8-BIT READ              |
|-----------------|------------------|-------------------------|---------------------------------------|-------------------------|
| (PMIC) MAX77734 | ADDR OTP BIT = 0 | 0x40 0b100 0000         | 0x80 0b1000 0000                      | 0x81 0b1000 0001        |
| (PMIC) MAX77734 | ADDR OTP BIT = 1 | 0x48 0b100 0000         | 0b1001 0000 0x90                      | 0x91 0b1001 0001        |
| MAX11644 (ADC)  | N/A              | 0b011 0110 0x36         | 0b0110 1100 0x6C                      | 0x6D 0b0110 1101        |
| (DAC) MAX5805   | ADDR PIN = GND   | 0b001 1000 0x18         | 0x30 0x32 0b0011 0000 0b0011 0010 *** | 0x31 0b0011 0001        |
| 24AA02 (EEPROM) | N/A              | 0b101 0xxx 0x50 TO 0x57 | 0xA0...0xAE 0b1010 xxx0               | 0xA1...0xAF 0b1010 xxx1 |

*** MAX5805 also responds to Broadcast Address 0b0011 0010(8-bit)

<!-- image -->

│

## MAX77734 EV Kit Schematic (continued)

<!-- image -->

│

## MAX77734 EV Kit Schematic (continued)

<!-- image -->

│

## MAX77734 EV Kit Schematic (continued)

<!-- image -->

│

## MAX77734 Evaluation Kit

## MAX77734 EV Kit PCB Layouts

MAX77734 EV Kit Component Placement GuideTop Silkscreen

<!-- image -->

MAX77734 EV Kit PCB Layout-Top Layer

<!-- image -->

MAX77734 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

│

## MAX77734 EV Kit PCB Layouts (continued)

MAX77734 EV Kit PCB Layout-Internal Layer 3

<!-- image -->

MAX77734 EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX77734 EV Kit Component Placement GuideBottom Silkscreen

<!-- image -->

│

## MAX77734 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX77734