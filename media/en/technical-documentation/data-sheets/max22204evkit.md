<!-- lastmod 2022-08-02 -->
<!-- image -->

Evaluates: MAX22204

## General Description

The MAX22204 evaluation kit (EV kit) provides a proven design to evaluate the +65V, 3.8A (peak) 2-phase stepper  motor  driver.  The  EV  kit  can  drive  a  single  stepper motor  and  provides  an  on-board  microcontroller  (MCU) and GUI to drive the MAX22204's inputs and configure the modes of operation. Microstep modes, decay modes, target  speeds,  and  acceleration  can  also  be  configured using the GUI.

Ordering Information appears at end of data sheet.

## Benefits

- Easy Evaluation of the MAX22204 Stepper Motor Driver
- On-Board MCU and GUI to Drive and Configure MAX22204
- Configurable Target Speed
- Configurable Acceleration Profiles
- Configurable Microstepping and Decay Modes
- Motor Coil Current Reporting
- Configurable Full-Scale Current
- On-Board +3.3V Regulator to Supply I/Os of the MAX22204
- Perforated Board and Headers Allows for Separation of MAX22204 Circuit
- Windows 7 ® /8 ® /10 ® -Compatible Software
- Fully Assembled and Tested
- Proven PCB Layout

4

Figure 1. MAX22204 EV Kit Photo

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

## MAX22204 Evaluation Kit

319-100845; Rev 0; 11/21

One  Analog  Way,  Wilmington,  MA  01887  U.S.A.    |      Tel:  781.329.4700      |      © 2021  Analog  Devices,  Inc.  All  rights  reserved. © 2021 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

## MAX22204 EV Kit Files

| FILE                          | DESCRIPTION      |
|-------------------------------|------------------|
| MAX22204_GUI_setup_v1.1.1.exe | GUI Install File |

## Quick Start

## Required Equipment

- MAX22204 EV kit
- USB Type A to micro-USB Type B male cable
- Up to +65V DC, 3.8A power supply
- Stepper motor

It is recommended that the user read MAX22204 IC data sheet prior to using the EV kit and GUI.

## Software Installation

Follow the steps to install the GUI software:

- 1) Save the MAX22204\_GUI\_setup\_v1.1.1.exe file to the PC and double click to begin the install.
- 2) Click the Next button in the welcome screen to begin the GUI installation.
- 3) Select the installation directory and folder name.
- 4) When installation is complete, click the Finish button to launch the MAX22200 EV kit GUI.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) As with all motor drive applications, stopping or braking the motor can cause a back EMF (BEMF) current and voltage surge. At high supply voltages, this can cause the supply to rise above the absolute maximum allowable voltage to the supply pins of a motor drive IC. It is highly recommended that the power supply of the MAX22204 be clamped below +70V to avoid damage to the motor driver IC.
- 2) Verify that the shunts are installed in the default positions (See Table 1).
- 3) Connect a stepper motor to the J6 terminal block.
- 4) Connect the MAX22204 EV kit board to the PC with a USB cable.
- 5) Connect upto +65V supply to VM and adjust the VM voltage to the desired operating voltage.
- 6) Launch the MAX22204 EV kit GUI.
- 7) Click on Device in the menu bar and select the COM port of the EV kit board.
- a) The GUI displays the Selected COM Port , Firmware Version and Connected in the bottom status bar, if the connection is a success.
- 8) Turn on the supply.
- 9) Click on the WAKE slider to wake the part from sleep mode.
- 10)  Click on the ENABLE slider to enable the part.
- 11)  Select the following settings in the Motor Control Graph to begin a first run of the stepper motor.
- a) Target Speed (PPS) = 200
- b) Acceleration Rate (PPSPS) = 100
- c) Acceleration Starting/Ending Speed (PPS) = 100
- d) Steps to Stop = 100
- e) # of Steps = 600
- f) Select Full Step Mode
- 12)  Click on the Move # of Steps slider and for a 200 steps/rotation, confirm that the motor shaft rotates 3 and a half times with the appropriate acceleration and deceleration profile.

## Detailed Description of Hardware

The MAX22204 EV kit provides a proven layout, evaluation circuit, and software to evaluate the MAX22204 (U1) IC. The EV kit features a DSPIC33CH512MP508T (U3) microcontroller (MCU), a MCP2221A (U4) USB-to-UART/ I 2 C serial converter, and a MIC5528 (U6) +3.3V LDO that enables serial communication between the GUI and EV kit, provides power to the MCU circuit from the USB port and allows the user to drive and configure the logic inputs of  the  MAX22204 IC. The EV kit has perforations down the  middle  of  the  board  to  separate  the  microcontroller from the MAX22204 circuit.

## MAX22204 Evaluation Kit

## Table 1. Default Shunt Position

| HEADER   | SHUNT POSITION      | DESCRIPTION                                                                                                                                                      |
|----------|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J2       | Unpopulated*        | MCU debug header 1                                                                                                                                               |
| J4       | Unpopulated*        | External +5V probe header                                                                                                                                        |
| J8       | Unpopulated*        | MCU debug header 2                                                                                                                                               |
| J9       | Unpopulated*        | External +3.3V probe header                                                                                                                                      |
| J10      | Unpopulated*        | Debug RC capacitor isolation                                                                                                                                     |
| J11      | 3-4*                | MAX22204 ISENA current output connected to MCU ADC input                                                                                                         |
| J11      | 5-6*                | MAX22204 ISENB current output connected to MCU ADC input                                                                                                         |
| J11      | 7-8*                | GND side of REF pin resistor connected to MUC DAC output. If left unpopulated, install a shunt on header J14 to connect the GND side of the RREF resistor to GND |
| J11      | 9-10*               | MAX22204 enable input connected to MCU output                                                                                                                    |
| J11      | 11-12*              | MAX22204 TRQ input connected to MCU output                                                                                                                       |
| J11      | 13-14*              | MAX22204 STEP input connected to MCU output                                                                                                                      |
| J11      | 15-16*              | MAX22204 DIR input connected to MCU output                                                                                                                       |
| J11      | Pins 1 and 2        | +3.3V sourced from LDO option from J13                                                                                                                           |
| J11      | Pins 17, 18, 19, 20 | GND                                                                                                                                                              |
| J11      | All unpopulated     | Even row of pins allow access to the MAX22204 pins to be driven or monitored without the use of the on-board MCU                                                 |
| J12      | 3-4*                | MAX22204 DECAY0 input connected to MCU output                                                                                                                    |
| J12      | 5-6*                | MAX22204 DECAY1 input connected to MCU output                                                                                                                    |
| J12      | 7-8*                | MAX22204 DECAY2 input connected to MCU output                                                                                                                    |
| J12      | 9-10*               | MAX22204 NFAULT output connected to MCU input                                                                                                                    |
| J12      | 11-12*              | MAX22204 SLEEP input connected to MCU output                                                                                                                     |
| J12      | 13-14*              | MAX22204 MODE0 input connected to MCU output                                                                                                                     |
| J12      | 15-16*              | MAX22204 MODE1 input connected to MCU output                                                                                                                     |
| J12      | 17-18*              | MAX22204 MODE2 input connected to MCU output                                                                                                                     |
| J12      | Pins 1 and 2        | +3.3V sourced from LDO option from J13                                                                                                                           |
| J12      | Pins 19 and 20      | GND                                                                                                                                                              |
| J12      | All unpopulated     | Even row of pins allow access to the MAX22204 pins to be driven or monitored without the use of the on-board MCU                                                 |

Evaluates: MAX22204

Table 1. Default Shunt Position (continued)

| HEADER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                            |
|----------|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J13      | 1-2              | +3.3V sourced from external +3.3V test point (TP8)                                                                                                                     |
| J13      | 3-4*             | +3.3V sourced from +5V USB VBUS voltage                                                                                                                                |
| J13      | 5-6              | +3.3V sourced from VM voltage                                                                                                                                          |
| J14      | Unpopulated*     | Allows the MCU to adjust the GND side voltage of the MAX22204's REF resistor. Leave this head unpopulated when using the GUI to control the full-scale current         |
| J14      | 1-2              | Connects the GND side voltage of the MAX22204's REF resistor to GND. Populate this header with a shunt if the GUI is not being used to control the full-scale current. |
| J7       | Unpopulated*     | The MAX22204 outputs can be monitored using pins 1 through 4 of header J7.                                                                                             |
| SW1      | 1-2 (upwards)*   | Uses the USB VBUS voltage for the +5V to +3.3V LDO conversion                                                                                                          |
| SW1      | 2-3 (downwards)  | Uses an external +5V voltage applied to TP5 for the +5V to +3.3V LDO conversion                                                                                        |

* Indicates default position

To operate the MAX22204 circuit without the use of the MCU  or  GUI,  depopulate  the  shunts  on  headers  J11 and J12 and install a shunt on header J14. This sets the maximum fixed IFS current to 2A. The maximum fixed IFS current can be adjusted by changing the RREF resistor to a value from 12k to 60k as shown in the equation below where KIFS = 36KV and TRQ\_VALUE = 1 when the TRQ logic input pin is low or TRQ\_VALUE = 0.5 when the TRQ logic input pin is high:

<!-- formula-not-decoded -->

The value of the full-scale current is proportional to the current flowing from the REF pin of the MAX22204 IC to GND via the RREF resistor. When using the MCU and GUI, the maximum fixed IFS current is scaled from 0% to 100% by applying a voltage (VREF) in the range of 0V to

0.9V to the GND side of the REF resistor connected to pin 1 of header J14. The IFS value is determined using the following equation:

<!-- formula-not-decoded -->

Where IFS\_MAX = the fixed maximum full-scale current (IFS) as configured by the RREF resistor on the EV kit board and VREF is the voltage applied to pin 1 of J14. The EV kit board is shipped with RREF = 18kΩ which sets the fixed maximum full-scale current to 2A or 1A depending  on  the  state  of  the  TRQ  pin.  Please  refer  to  the  IC data  sheet  for  more  information  regarding  the  full-scale current settings.

## Detailed Description of Software

The MAX22204 EV kit GUI allows the user to control and communicate with the MAX22204 IC using a PC.

Figure 2. MAX22204 EV kit GUI

<!-- image -->

## Control Settings

The Control  Settings group  box  allows  the  user  to enable or disable the MAX22204 or enter and exit sleep mode. See Figure 3 .

## Motor Control Graph

The Motor Control Graph group box allows the user to configure the speed and acceleration of the stepper motor. The user can select the Target Speed, Acceleration and Deceleration profiles, and the number of steps to travel.

The acceleration  profiles  have  a  starting  speed  and  an ending  speed  which  is  user-defined  with  an  accelera -tion  rate  that  applies  to  both  the  acceleration  ramp  and deceleration  ramp.  The  user  can  choose  to  have  the motor stop after the # of Steps have been traveled, or an additional number of Steps to Stop can be added, which will run after the deceleration profile is completed and the # of Steps have been traveled. Additional steps prior to the motor stop can be added by entering the value in the Steps to Stop field.

│

## MAX22204 Evaluation Kit

## Start/Stop

The Start/Stop group  box  allows  the  user  to  move  the motor  in  one  of  three  modes  (See Figure  4 ).  Enabling Free Running mode follows the acceleration profile used to  reach  the  target  speed  and  runs  until Free Running mode is disabled. Enabling Move # of Steps mode will follow the Acceleration Rate and Deceleration Rate pro -files, Target Speed, and Steps to Stop selections until the number of steps and steps to stop have been traveled. Enabling Reciprocate mode will follow the Acceleration Rate and Deceleration Rate profiles, Target Speed, and Step to selections until the user defined number of steps have been traveled and then will reverse direction with the same behavior until the Reciprocate slider is disabled.

## Status Output

The Status  Output indicator  shows  the  status  of  the fault pin (See Figure 5 ). Under normal operation, the onscreen indicator will be green. During fault conditions, the on-screen indicator will be red.

Figure 3. Control Settings Group Box

<!-- image -->

Figure 4. Control Settings Group Box

<!-- image -->

## Motor Control Parameters

The Motor  Control  Parameters group  box  allows  the user  to  select  the Step  Mode , Decay  Mode , Torque (TRQ) ,  and Direction (DIR) . (See Figure  6 ).  These parameters  correspond to logic input pins on the MAX22204  IC  and  the  GUI  allows  the  user  to  drive these pins through the on-board MCU. The Step Mode drop-down menu allows the user to select a step mode from  full  step  up  to  1/128  step.  See  Table  2 below  for more  details  about  the  microstep  modes.  The Decay Mode drop-down  menu  allows  the  user  to  select  from various  decay  modes  of  the  MAX22204.  See  Table  3 below and the Adaptive Decay Modes section of the IC data sheet for more details about the decay modes. The Torque (TRQ) and Direction (DIR) selections allow the user  to  select  the  torque  scaling  factor  and  direction  of rotation. The MCU drives the MAX22204 IC's TRQ and DIR pin according to selections made.

Figure 5. Status Output Group Box

<!-- image -->

Figure 6. Motor Control Group Box

<!-- image -->

│

## MAX22204 Evaluation Kit

## Full-Scale Current

The Full-Scale  Current group  box  allows  the  user  to scale  the  maximum  full-scale  current  used  to  drive  the

## Table 2. Step Mode Selection

|   MODE2 |   MODE1 |   MODE0 | STEP MODE               |
|---------|---------|---------|-------------------------|
|       0 |       0 |       0 | Full Step (71% current) |
|       0 |       0 |       1 | 1/2 Step                |
|       0 |       1 |       0 | 1/4 Step                |
|       0 |       1 |       1 | 1/8 Step                |
|       1 |       0 |       0 | 1/16 Step               |
|       1 |       0 |       1 | 1/32 Step               |
|       1 |       1 |       0 | 1/64 Step               |
|       1 |       1 |       1 | 1/128 Step              |

## Table 3. Decay Modes

Figure 7. Motor Control Group Box

|   DECAY2 |   DECAY1 |   DECAY0 | INCREASING STEPS   | DECREASING STEPS   |
|----------|----------|----------|--------------------|--------------------|
|        0 |        0 |        0 | Slow               | Mixed 30% Fast     |
|        0 |        0 |        1 | Mixed 30% Fast     | Mixed 30% Fast     |
|        0 |        1 |        0 | Mixed 60% Fast     | Mixed 60% Fast     |
|        0 |        1 |        1 | Slow               | Slow               |
|        1 |        0 |        0 | Fast               | Fast               |
|        1 |        0 |        1 | Adaptive 1         | Adaptive 1         |
|        1 |        1 |        0 | Adaptive 2         | Adaptive 2         |
|        1 |        1 |        1 | Adaptive 3         | Adaptive 3         |

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX22204EVKIT# | EV Kit |

#Denotes RoHS compliance.

Evaluates: MAX22204

stepper motor from 0% to 100% (See Figure 7 ). The maximum full-scale current is set to 2A by the on-board RREF resistor and can be scaled using the I\_FS slider.

│

## MAX22204 Evaluation Kit

## MAX22204 EV Kit Bill of Materials

| ITEM   | REF_DES                                    | DNI/DNP   | QTY MFG PART                                                                                             | #                                                          | MANUFACTURER                                 | VALUE             | DESCRIPTION                                                                                                      | COMMENTS   |
|--------|--------------------------------------------|-----------|----------------------------------------------------------------------------------------------------------|------------------------------------------------------------|----------------------------------------------|-------------------|------------------------------------------------------------------------------------------------------------------|------------|
| 1      | C1                                         | - 1       | CL05A105KO5NNN 1 CGA3E2X7R2A223K080AA                                                                    | SAMSUNG                                                    |                                              | 1UF               | CAP; SMT (0402); 1UF; 10%; 16V; X5R; CERAMIC CAP; SMT (0603); 0.022UF; 10%; 100V; X7R; CERAMIC                   |            |
| 2 3    | C2 C3                                      | - - 1     | TMK105BJ105MV                                                                                            | TDK TAIYO YUDEN                                            |                                              | 0.022UF 1UF       | CAP; SMT (0402); 1UF; 20%; 25V; X5R; CERAMIC                                                                     |            |
| 4      | C4, C16-C18, C25, C26                      | - 6       | GRT188R61C106KE13                                                                                        | MURATA                                                     |                                              | 10UF              | CAP; SMT (0603); 10UF; 10%; 16V; X5R; CERAMIC                                                                    |            |
| 5      | C6, C7                                     | - 2       | CGA2B2X7R1H222K050BA; GCM155R71H222KA37                                                                  | TDK;MURATA                                                 |                                              | 2200PF            | CAP; SMT (0402); 2200PF; 10%; 50V; X7R; CERAMIC                                                                  | DNI        |
| 6      | C8                                         | - 1       | GRM21BR70J106K; C2012X7R0J106K125AB; CGA4J1X7R0J106K125AC                                                | MURATA;TDK;TDK                                             |                                              | 10UF              | CAP; SMT (0805); 10UF; 10%; 6.3V; X7R; CERAMIC                                                                   |            |
| 7      | C9                                         | - 1       | C0805C224K1RAC; GRM21AR72A224KAC5                                                                        | KEMET;MURATA                                               |                                              | 0.22UF            | CAP; SMT (0805); 0.22UF; 10%; 100V; X7R; CERAMIC                                                                 |            |
| 8      | C10, C11                                   | -         | 2 C2012X7S2A105K125AB; GRJ21BC72A105KE11; GRM21BC72A105KE01                                              | TDK;MURATA;MURATA                                          |                                              | 1UF               | CAP; SMT (0805); 1UF; 10%; 100V; X7S; CERAMIC                                                                    |            |
| 9      | C12, C20, C23, C24, C27-C29, C34, C39, C45 | -         | 10 885012206071; C1608X7R1E104K080AA; C0603C104K3RAC; GRM188R71E104KA01; C1608X7R1E104K; 06033C104KAT2A  | WURTH ELECTRONICS INC; TDK;KEMET;MURATA;TDK;AVX            |                                              | 0.1UF             | CAP; SMT (0603); 0.1UF; 10%; 25V; X7R; CERAMIC                                                                   |            |
| 10     | C13-C15, C30, C32, C33, C35, C41, C46      | -         | 9 C0603X5R160-105KNP; EMK107BJ105KA; C1608X5R1C105K080AA; GRM188R61C105K; 0603YD105KAT2A; CL10A105KO8NNN | VENKEL LTD.;TAIYO YUDEN; TDK;MURATA;AVX; ELECTRO-MECHANICS | SAMSUNG                                      | 1UF               | CAP; SMT (0603); 1UF; 10%; 16V; X5R; CERAMIC;                                                                    |            |
| 11     | C19, C21                                   | - 2       | GRM188R71A225KE15; CL10B225KP8NNN; C1608X7R1A225K080AC; C0603C225K8RAC                                   | MURATA;SAMSUNG; TDK;KEMET                                  |                                              | 2.2UF             | CAP; SMT (0603); 2.2UF; 10%; 10V; X7R; CERAMIC                                                                   |            |
| 12     | C22, C31, C37, C42, C47                    | - 5       | C1608C0G1E103J080AA                                                                                      | TDK                                                        |                                              | 0.01UF            | CAP; SMT (0603); 0.01UF; 5%; 25V; C0G; CERAMIC;                                                                  |            |
| 13     | C36, C38, C40                              | -         | 3 C1210C476M4PAC; GRM32ER61C476ME15                                                                      | KEMET;MURATA                                               |                                              | 47UF              | CAP; SMT (1210); 47UF; 20%; 16V; X5R; CERAMIC                                                                    |            |
| 14     | C43                                        | - 1       | C0603C474K4RAC; GRM188R71C474K; EMK107B7474KA; C1608X7R1C474K080AC                                       | TAIYO                                                      | KEMET;MURATA; YUDEN;TDK                      | 0.47UF            | CAP; SMT (0603); 0.47UF; 10%; 16V; X7R; CERAMIC                                                                  |            |
| 15     | C48                                        | -         | 1 06033C104JAT2A                                                                                         |                                                            | AVX                                          | 0.1UF             | CAP; SMT (0603); 0.1UF; 5%; 25V; X7R; CERAMIC                                                                    |            |
| 16     | CB1                                        | -         | 1 EEV-FK2A101                                                                                            |                                                            | PANASONIC                                    | 100UF             | CAP; SMT (CASE_J16); 100UF; 20%; 100V; ALUMINUM-ELECTROLYTIC                                                     |            |
| 17     | D1                                         | -         | 1 SML-P11UTT86R                                                                                          |                                                            | ROHM SEMICONDUCTOR                           | SML-P11UTT86R     | DIODE; LED; RED CLEAR; PICOLED; SMT; VF=1.8V; IF=0.001A                                                          |            |
| 18     | D2                                         | - -       | 1 SMF5.0A                                                                                                |                                                            | MICRO COMMERCIAL COMPONENTS INC              | 5V                | DIODE; TVS; SMT (SOD-123FL); VRM=5V; IF=21.7A GREEN LIGHT EMITTING DIODE                                         |            |
| 19     |                                            |           | 1                                                                                                        | SSL-LX3044GD-12V                                           | LUMEX OPTOCOMPONENTS                         | LX3044GD-12V      |                                                                                                                  |            |
| 20     | DS1 J1                                     | - 1       |                                                                                                          | 1727010 PHOENIX                                            | CONTACT                                      |                   | 1727010 CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; RIGHT ANGLE; 2PINS CONNECTOR; MALE; THROUGH HOLE; |            |
| 21 22  | J2, J8                                     | -         | 2                                                                                                        | PBC06SFCN                                                  | SULLINS ELECTRONICS CORP.                    | PBC06SFCN         | .1IN CONTACT CENTER; BREAKAWAY HEADER; STRAIGHT; 6PINS CONNECTOR; MALE; THROUGH HOLE;                            |            |
| 23     | J3 J4, J9,                                 | - 1 -     | ZX62RD-AB-5P8(30) 4                                                                                      | HIROSE PBC02SAAN                                           | ELECTRIC CO LTD. CORP.                       | ZX62RD-AB-5P8(30) | MICRO-USB CONNECTOR MEETING REQUIREMENTS OF USB 2.0 STANDARD; RIGHT ANGLE; 5PINS                                 |            |
|        | J10, J14                                   |           |                                                                                                          |                                                            | SULLINS ELECTRONICS                          | PBC02SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                        |            |
| 24     | J5                                         | -         | 1                                                                                                        | PJ-102B                                                    | CUI INC.                                     | PJ-102B           | CONNECTOR; MALE; THROUGH HOLE; DC POWER JACK; RIGHT ANGLE; 3PIN                                                  |            |
| 25     | J6                                         | -         | 1                                                                                                        | OSTVN04A150                                                | ON-SHORE TECHNOLOGY INC                      | OSTVN04A150       | CONNECTOR; TERMINAL BLOCK; FEMALE; THROUGH HOLE; STRAIGHT; 4PINS                                                 |            |
| 26     | J7                                         | -         | 1                                                                                                        | PBC04SAAN                                                  | SULLINS ELECTRONICS CORP.                    | PBC04SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS; -65 DEGC TO +125 DEGC                                 |            |
| 27     | J11, J12                                   | -         | 2                                                                                                        | PBC10DAAN                                                  | SULLINS ELECTRONICS CORP                     | PBC10DAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 20PINS                                                       |            |
| 28     | J13                                        | -         | 1                                                                                                        | PEC03DAAN                                                  | CORP                                         |                   |                                                                                                                  |            |
|        |                                            |           |                                                                                                          |                                                            | SULLINS ELECTRONICS                          | PEC03DAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 6PINS; -65 DEGC TO +125 DEGC                         |            |
| 29     | R1                                         | -         | 1                                                                                                        | CRCW04021K40FK; RC0402FR-071K4L                            | VISHAY DALE;YAGEO PHICOMP                    | 1.4K              | RES; SMT (0402); 1.4K; 1%; +/-100PPM/DEGC; 0.0630W                                                               |            |
| 30     | R2, R7-R9, R12, R14, R15, R20, R21         | - 9       | MCR03EZPJ000; ERJ-3GEY0R00; CR0603AJ/-000ELF                                                             | CRCW06030000ZS;                                            | VISHAY; ROHM SEMICONDUCTOR; PANASONIC;BOURNS |                   | 0 RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                                                    |            |

Evaluates: MAX22204

## MAX22204 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES                  | DNI/DNP QTY   | DNI/DNP QTY     | MFG PART #                                                           | MANUFACTURER                            | VALUE                                     | DESCRIPTION                                                                                                                       | COMMENTS   |
|--------|--------------------------|---------------|-----------------|----------------------------------------------------------------------|-----------------------------------------|-------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|------------|
| 31     | R4, R18                  | -             | 2               | CRCW06034K70FK                                                       | VISHAY DALE                             | 4.7K                                      | RES; SMT (0603); 4.7K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                |            |
| 32     | R10                      | -             | 1 ERJ-3EKF1003; | CRCW0603100KFK; RC0603FR-07100KL; RC0603FR-13100KL; AC0603FR-07100KL | VISHAY DALE;YAGEO; YAGEO;PANASONIC      | 100K                                      | RES; SMT (0603); 100K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                |            |
| 33     | R11                      | -             | 1 ERJ-3EKF6200  |                                                                      | PANASONIC                               | 620 RES; SMT (0603);                      | 620; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                  |            |
| 34     | R13, R19                 | -             | 2               | CRCW06031K00FK; ERJ-3EKF1001; CR0603AFX-1001ELF                      | VISHAY; PANASONIC;BOURNS                | 1K                                        | RES; SMT (0603); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                  |            |
| 35     | R17                      | -             | 1 CSR1206FTR500 |                                                                      | STACKPOLE ELECTRONICS INC.              | 0.5 RES; SMT                              | (1206); 0.5; 1%; +/-100PPM/DEGC; 0.5000W                                                                                          |            |
| 36     | R22, R23                 | -             | 2               | CRCW12060000ZS                                                       | VISHAY DALE                             |                                           | 0 RES; SMT (1206); 0; JUMPER; JUMPER; 0.2500W                                                                                     |            |
| 37     | R24-R69                  | -             | 46              | RC0402FR-0710KL                                                      | YAGEO PHICOMP                           | 10K                                       | RES; SMT (0402); 10K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                 |            |
| 38     | RISENA, RISENB           | -             | 2               | ERA-2AEB3741X                                                        | PANASONIC                               | 3.74K                                     | RES; SMT (0402); 3.74K; 0.10%; +/-25PPM/DEGC; 0.0630W                                                                             |            |
| 39     | ROFF                     | -             | 1 ERJ-2RKF3002  |                                                                      | PANASONIC                               | 30K                                       | RES; SMT (0402); 30K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                 |            |
| 40     | RREF                     | -             | 1 ERJ-2RKF1802  |                                                                      | PANASONIC                               | 18K                                       | RES; SMT (0402); 18K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                 |            |
| 41     | SPACER1-SPACER8          | -             | 8               | 9032                                                                 | KEYSTONE                                | 9032 MACHINE FABRICATED;                  | ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                             |            |
| 42     | SW1                      | -             | 1 NK236         |                                                                      | APEM                                    | NK236                                     | SWITCH; SPDT; THROUGH HOLE; 12V; 0.5A; NK SERIES; RCOIL= OHM; RINSULATION= OHM; APEM                                              |            |
| 43     | SW2                      | -             | 1               | PTS645SK50SMTR92LFS                                                  | C&K COMPONENTS                          |                                           | SWITCH; SPST; SMT; STRAIGHT; 12V; 0.05A; TACT                                                                                     |            |
| 44     | TP1, TP5, TP8            | -             | 3               | 5010                                                                 | KEYSTONE                                | PTS645SK50SMTR92LFS N/A TEST POINT; BOARD | SWITCHES; RCOIL=0.1 OHM; RINSULATION=100G OHM PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL; |            |
| 45     | TP2, TP6, TP7, TP22-TP24 | -             | 6               | 5011                                                                 | KEYSTONE                                | N/A                                       | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;           |            |
| 46     | TP3, TP4, TP9-TP21       | -             | 15              |                                                                      | 5012 KEYSTONE                           | N/A                                       | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;           |            |
| 47     | U1                       | -             | 1               | MAX22204                                                             | MAXIM                                   | MAX22204                                  | EVKIT PART - IC; MAX22204; PACKAGE OUTLINE DRAWING: 21-0172; PACKAGE LAND PATTERN: 90-0076; PACKAGE CODE: T3857+1; TQFN38-EP      |            |
| 48     | U2                       | -             | 1               | MAX6765TTSD2+                                                        | MAXIM                                   | MAX6765TTSD2+                             | IC; VREG; AUTOMOTIVE MICROPOWER LINEAR REGULATOR WITH SUPERVISOR; TDFN6-EP                                                        |            |
| 49     | U3                       | -             | 1               | DSPIC33CH512MP508T-I/PT                                              | MICROCHIP                               | DSPIC33CH512MP508T-I/PT                   | IC; CTRL; 16-BIT DIGITAL SIGNAL CONTROLLERS WITH HIGH- RESOLUTION PWM AND CAN FLEXIBLE DATA-RATE; TQFP80-EP                       |            |
| 50     | U4                       | -             | 1               | MCP2221A-I/ST                                                        | MICROCHIP                               | MCP2221A-I/ST                             | IC; CONV; USB 2.0 TO I2C/UART PROTOCOL CONVERTER WITH GPIO; TSSOP14                                                               |            |
| 51     | U5                       | -             | 1               | SI8422AB-D-IS                                                        | SILICON LABORATORIES                    | SI8422AB-D-IS                             | IC; DISO; LOW-POWER; SINGLE AND DUAL-CHANNEL DIGITAL ISOLATORS; NSOIC8                                                            |            |
| 52     | U6                       | -             | 1               | MIC5528-3.3YMT                                                       | MICROCHIP                               | MIC5528-3.3YMT                            | IC; VREG; HIGH PERFORMANCE 500 MA LDO; TDFN6-EP                                                                                   |            |
| 53     | Y1                       | -             | 1               | DSC6011JI1A-008.0000                                                 | MICROCHIP                               | DSC6011JI1A-008.0000                      | OSCILLATOR; SMT 2.5X2.0; 8MHZ; +/-50PPM;                                                                                          |            |
| 54     | PCB                      | -             | 1               | MAX22204                                                             | MAXIM                                   | PCB                                       | PCB:MAX22204                                                                                                                      | -          |
| 55 56  | C5                       | DNP DNP       | 0 0             | GRM155R61C104KA88 C0603C473K3RAC; GRM188R71E473KA01                  | MURATA                                  | 0.1UF CAP; SMT                            | (0402); 0.1UF; 10%; 16V; X5R; CERAMIC CAP; SMT (0603); 0.047UF; 10%; 25V; X7R; CERAMIC;                                           | DNI        |
|        | C44                      |               |                 |                                                                      | KEMET;MURATA                            | 0.047UF                                   |                                                                                                                                   |            |
| 57     | R5                       | DNP           | 0               | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00;                          | ROHM                                    |                                           | RES; SMT (0603); 0; JUMPER; JUMPER;                                                                                               | DNI        |
|        | R3,                      |               |                 | CR0603AJ/-000ELF CRCW0603100KFK;                                     | VISHAY; SEMICONDUCTOR; PANASONIC;BOURNS | 0                                         | 0.1000W                                                                                                                           |            |
| 58     | R6                       | DNP           | 0               | RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003;                    | VISHAY DALE;YAGEO; YAGEO;PANASONIC      | 100K                                      | RES; SMT (0603); 100K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                |            |
| 59     | R16                      | DNP           | 0               | AC0603FR-07100KL CRCW12060000ZS                                      | VISHAY DALE                             |                                           | 0 RES; SMT (1206); 0; JUMPER; JUMPER; 0.2500W                                                                                     |            |
| TOTAL  | TOTAL                    | 175           | 175             | 175                                                                  |                                         |                                           |                                                                                                                                   |            |

Evaluates: MAX22204

## MAX22204 EV Kit Schematics

<!-- image -->

## MAX22204 EV Kit Schematics (continued)

<!-- image -->

## MAX22204 EV Kit Schematics (continued)

<!-- image -->

│

Evaluates: MAX22204

## MAX22204 Evaluation Kit

## MAX22204 EV Kit Schematics (continued)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

│

## MAX22204 EV Kit PCB Layouts

MAX22204 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX22204 EV Kit PCB Layout-Top

<!-- image -->

│

## MAX22204 EV Kit PCB Layouts (continued)

MAX22204 EV Kit PCB Layout-Internal2

<!-- image -->

MAX22204 EV Kit PCB Layout-Internal3

<!-- image -->

│

## MAX22204 EV Kit PCB Layouts (continued)

MAX22204 EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX22204 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/21           | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

│

Evaluates: MAX22204