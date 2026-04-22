<!-- lastmod 2023-09-13 -->
<!-- image -->

Evaluates: MAX22210

## General Description

The MAX22210 evaluation kit (EV kit) provides a proven design  to  evaluate  the  +36V,  3.8A  (peak)  two-phase stepper-motor driver. The MAX22210 EV kit can drive a single stepper motor and provides an on-board microcontroller  (MCU)  and  GUI  to  drive  the  MAX22210's  inputs and configure the modes of operation. Microstep modes, decay modes, target speeds, and acceleration can also be configured using the GUI.

## Benefits and Features

- Easy Evaluation of the MAX22210 Stepper-Motor Driver
- On-Board MCU and GUI to Drive and Configure the MAX22210
- Configurable Target Speed
- Configurable Acceleration Profiles
- Configurable Microstepping and Decay Modes
- Motor-Coil Current Reporting
- Configurable Full-Scale Current
- On-Board +3.3V Regulator to Supply I/Os of the MAX22210
- Perforated Board and Headers Allows for Separation of the MAX22210 Circuit
- Windows ® 7-, 8-, 10-Compatible Software
- Fully Assembled and Tested
- Proven PCB Layout

Windows is a registered trademark of Microsoft Corporation.

©

## MAX22210 Evaluation Kit

## MAX22210 EV Kit Files

| FILE                          | DECRIPTION       |
|-------------------------------|------------------|
| MAX22210_GUI_setup_v1.2.3.exe | GUI Install File |

## Quick Start

## Required Equipment

- MAX22210 EV Kit
- USB Type-A to Micro USB Type-B Male Cable
- Up to +36V DC, 3.8A Power Supply
- Stepper Motor

It is recommended that the user reads the MAX22210 IC data sheet prior to using the EV kit and GUI.

Ordering Information appears at end of data sheet.

## EV Kit Board

Figure 1. MAX22210 EV Kit Board Photo-Top

<!-- image -->

Figure 2. MAX22210 EV Kit Board Photo-Bottom

<!-- image -->

Evaluates: MAX210

## MAX22210 Evaluation Kit

## Software Installation

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software.

Follow the steps to install the GUI software:

- 1) Save the MAX22210\_GUI\_setup\_v1.2.3.exe file to the user's PC and double click to begin the installation.
- 2) Click the Next button in the welcome screen to begin the GUI installation.
- 3) Select the install directory and Start Menu folder name.
- 4) When installation is complete, click the Finish button to launch the MAX22210 EV kit GUI.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) As with all motor-driver applications, stopping or braking the motor can cause a back EMF (BEMF) current and voltage surge. At high supply voltages, this can cause the supply to rise above the absolute maximum allowable voltage to the supply pins of a motor-driver IC. It is highly recommended that the power supply of the MAX22210 be clamped below +42V to avoid damage to the motor-driver IC.
- 2) Verify that shunts are installed in the default positions.
- 3) Connect a stepper motor to the J6 terminal block.
- 4) Connect the MAX22210 EV kit board to the PC with a USB cable.

## Evaluates: MAX210

- 5) Launch the MAX22210 EV kit GUI.
- 6) Click on Device in the menu bar and select the COM port of the EV kit board.
- a. The GUI displays the Selected COM Port , Firmware Version , and Connected in the bottom status bar if the connection was a success.
- 7) Connect a supply (up to +36V) to V M  and adjust the VM voltage to the desired operating voltage.
- 8) Turn on the V M  supply.
- 9) Click on the WAKE slider to wake the part from sleep mode.
- 10)  Click on the ENABLE slider to enable the part.
- 11) Select the following settings in the Motor Control Graph to begin a first run of the stepper motor.
- a. Target Speed (PPS) = 200
- b. Acceleration Rate (PPSPS) = 100
- c. Acceleration Starting/Ending Speed (PPS) = 100
- d. Steps to Stop = 100
- e. # of Steps = 500
- f.  Select Full Step in the Step Mode dropdown
- 12)  Click on the Move # of Steps slider and for a 200 steps/rotation, confirm that the motor shaft rotates three times with the appropriate acceleration and deceleration profile.

## MAX22210 Evaluation Kit

## Table 1. Default Shunt Positions

| HEADER   | SHUNT POSITION    | DESCRIPTION                                                                                                                                                          |
|----------|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J2       | Not installed*    | MCU debug header 1                                                                                                                                                   |
| J4       | Not installed*    | External +5V probe header                                                                                                                                            |
| J8       | Not installed*    | MCU debug header 2                                                                                                                                                   |
| J9       | Not installed*    | External +3.3V probe header                                                                                                                                          |
| J10      | Not installed*    | Debug RC capacitor isolation                                                                                                                                         |
| J11      | 3-4*              | MAX22210 ISENA current output connected to MCUADC input                                                                                                              |
| J11      | 5-6*              | MAX22210 ISENB current output connected to MCUADC input                                                                                                              |
| J11      | 7-8*              | GND side of REF pin resistor connected to MCU DAC output. If left not installed, install a shunt on header J14 to connect the GND side of the R REF resistor to GND. |
| J11      | 9-10*             | MAX22210 HFS input connected to MCU output                                                                                                                           |
| J11      | 11-12*            | MAX22210 STEP input connected to MCU output                                                                                                                          |
| J11      | 13-14*            | MAX22210 DIR input connected to MCU output                                                                                                                           |
| J11      | 15-16*            | MAX22210 TRIGA output connected to MCU output                                                                                                                        |
| J11      | 17-18*            | MAX22210 TRIGB output connected to MCU output                                                                                                                        |
| J11      | Pins 1 and 2      | +3.3V sourced from LDO option from J13                                                                                                                               |
| J11      | Pins 19 and 20    | GND                                                                                                                                                                  |
| J11      | All not installed | Even row of pins allow access to the MAX22210 pins to be driven or monitored without the use of the on-board MCU                                                     |
| J12      | 3-4*              | MAX22210 DECAY1 input connected to MCU output                                                                                                                        |
| J12      | 5-6*              | MAX22210 DECAY2 input connected to MCU output                                                                                                                        |
| J12      | 7-8*              | MAX22210 FAULT output connected to MCU output                                                                                                                        |
| J12      | 9-10*             | MAX22210 EN input connected to MCU input                                                                                                                             |
| J12      | 11-12*            | MAX22210 SLEEP input connected to MCU output                                                                                                                         |
| J12      | 13-14*            | MAX22210 MODE0 input connected to MCU output                                                                                                                         |
| J12      | 15-16*            | MAX22210 MODE1 input connected to MCU output                                                                                                                         |
| J12      | 17-18*            | MAX22210 MODE2 input connected to MCU output                                                                                                                         |
| J12      | Pins 1 and 2      | +3.3V sourced from LDO option from J13                                                                                                                               |
| J12      | Pins 19 and 20    | GND                                                                                                                                                                  |
| J12      | All not installed | Even row of pins allow access to the MAX22210 pins to be driven or monitored without the use of the on-board MCU                                                     |
| J13      | 1-2               | +3.3V sourced from external +3.3V test point (TP8)                                                                                                                   |
| J13      | 3-4*              | +3.3V sourced from +5V USB VBUS voltage                                                                                                                              |
| J13      | 5-6               | +3.3V sourced from V M voltage                                                                                                                                       |

Evaluates: MAX210

Table 1. Default Shunt Positions (continued)

| HEADER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                |
|----------|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J14      | Not installed*   | Allows the MCU to adjust the GND side voltage of the MAX22210's REF resistor. Leave this head not installed when using the GUI to control the full-scale current.          |
| J14      | 1-2              | Connects the GND side voltage of the MAX22210's 18kΩ REF resistor to GND. Install this header with a shunt if the GUI is not being used to control the full-scale current. |
| J7       | Not installed*   | The MAX22210 outputs can be monitored using pins 1 through 4 of header J7                                                                                                  |
| SW1      | 1-2 (upwards)*   | Uses the USB VBUS voltage for the +5V to +3.3V LDO conversion                                                                                                              |
| SW1      | 2-3 (downwards)  | Uses an external +5V voltage applied to TP5 for the +5V to +3.3V LDO conversion                                                                                            |

* Indicates default position.

## Detailed Description of Hardware

The MAX22210 EV kit provides a proven layout, evaluation circuit, and software to evaluate the MAX22210 (U1) IC. The EV kit features a DSPIC33CH512MP508T (U3) microcontroller (MCU), a MCP2221A (U4) USB-to-UART/ I 2 C serial converter, and a MIC5528 (U6) +3.3V LDO that enables serial communication between the GUI and EV kit, provides power to the MCU circuit from the USB port, and allows the user to drive and configure the logic inputs of  the  MAX22210 IC. The EV kit has perforations down the  middle  of  the  board  to  separate  the  microcontroller from the MAX22210 circuit.

To operate the MAX22210 circuit without the use of the MCU or GUI, depopulate the shunts on headers J11 and J12 and install a shunt on header J14. This sets the maximum fixed IFS current to 2A. The maximum fixed IFS cur -rent can be adjusted by changing the R REF resistor to a value from 12kΩ to 60kΩ as shown in the equation below where K IFS  = 36KV and HFS\_VALUE = 1 when the HFS logic input pin is low, or HFS\_VALUE = 0.5 when the HFS logic input pin is high:

<!-- formula-not-decoded -->

Evaluates: MAX210

The value of the full-scale current is proportional to the current flowing from the REF pin of the MAX22210 IC to GND through  the  R REF resistor.  When  using  the  MCU and GUI, the maximum fixed IFS current is scaled from 0% to 100% by applying a voltage (VREF) in the range of 0V to 0.9V to the GND side of the R REF resistor connected to pin 1 of header J14. The IFS value is determined using the following equation:

<!-- formula-not-decoded -->

Where IFS\_MAX = the fixed maximum full-scale current (IFS)  as  configured  by  the  R REF resistor  on  the  EV  kit board and VREF is the voltage applied to pin 1 of J14. The EV kit board is shipped with R REF = 18kΩ, which sets the fixed maximum full-scale current to 2A or 1A depend -ing on the state of the HFS pin. Refer to the MAX22210 IC data sheet for more information regarding the full-scale current settings.

## Detailed Description of Software

The MAX22210 EV kit GUI allows the user to control and communicate with the MAX22210 IC using a PC.

Figure 3. MAX22210 EV Kit GUI

<!-- image -->

Evaluates: MAX210

## MAX22210 Evaluation Kit

## Control Settings

The Control  Settings group  box  allows  the  user  to enable or disable the MAX22210 or enter and exit sleep mode (see Figure 4 ).

## Motor-Control Graph

The Motor Control Graph group box allows the user to configure the speed and acceleration of the stepper motor ( Figure 5 ). The user can select the Target Speed (PPS) , acceleration  and  deceleration  profiles  ( Acceleration Rate  (PPS) and Acceleration  Starting/Ending  Speed

## Evaluates: MAX210

(PPS) ), and number of steps to travel ( # of Steps ). The acceleration profiles have a starting speed and an ending speed which is user defined with an acceleration rate that applies  to  both  the  acceleration  ramp  and  deceleration ramp. The user can choose to have the motor stop after the # of Steps have been traveled, or an additional number of Steps to Stop can be added, which run after the deceleration profile is completed and the # of Steps have been traveled. Additional steps prior to the motor stop can be added by entering the value in the Steps to Stop field.

Figure 4. Control-Settings Group Box

<!-- image -->

Figure 5. Motor-Control Graph

<!-- image -->

│

## MAX22210 Evaluation Kit

## Start/Stop

The Start / Stop group box allows the user to move the motor in one of three modes (see Figure 6 ). Enabling Free Running mode  follows  the  acceleration  profile  used  to reach the target speed and runs until Free Running mode is disabled.

Enabling Move # of Steps mode follows the acceleration and deceleration profiles ( Acceleration Rate (PPS) and Acceleration  Starting/Ending  Speed  (PPS) ), Target Speed  (PPS) ,  and Steps  to  Stop selections  until  the number of steps and steps to stop have been traveled.

Enabling Reciprocate mode  follows  the  acceleration and deceleration profiles ( Acceleration Rate (PPS) and Acceleration  Starting/Ending  Speed  (PPS) ), Target Speed  (PPS) ,  and Steps  to  Stop selections  until  the user-defined  number  of  steps  have  been  traveled  and then reverses direction with the same behavior until the Reciprocate slider is disabled.

## Status Output

The Status  Output indicator  shows  the  status  of  the FAULT pin  (see Figure  7 ).  Under  normal  operation,  the

Figure 6. Start/Stop Control-Settings Group Box

<!-- image -->

Evaluates: MAX210

on-screen indicator is green. During fault conditions, the on-screen indicator is red.

## Motor-Control Parameters

The Motor  Control  Parameters group  box  ( Figure  8 ) allows the user to select the Step Mode , Decay Mode , motor  current  scaling  factor  (HFS\_VALUE  ( HFS )),  and motor  direction  ( Direction  DIR ).  These  parameters  correspond  to  logic  input  pins  on  the  MAX22210  IC,  and the  GUI  allows  the  user  to  drive  these  pins  through  the on-board MCU. The Step Mode dropdown menu allows the user to select a step mode from Full Step up to 1/128 Step .  See Table  2 for  more  details  about  the  microstep modes. The Decay Mode dropdown menu allows the user to select from the various decay modes of the MAX22210. See Table 3 and the Adaptive Decay Modes section of the MAX22210 IC data sheet for more details about the decay modes. The HFS (output-current full scale) and Direction (DIR) selections allow the user to select the torque scal -ing  factor  and  direction  of  rotation.  The  MCU  drives  the MAX22210 IC's HFS and DIR pins according to the selec -tions made.

Figure 7. Status-Output Group Box

<!-- image -->

Figure 8. Motor-Control-Parameters Group Box

<!-- image -->

│

## MAX22210 Evaluation Kit

## Full-Scale Current

The Full  Scale  Current group  box  allows  the  user  to scale  the  maximum  full-scale  current  used  to  drive  the

Table 2. Step-Mode Selection

|   MODE2 |   MODE1 |   MODE0 | STEP MODE               |
|---------|---------|---------|-------------------------|
|       0 |       0 |       0 | Full Step (71% Current) |
|       0 |       0 |       1 | 1/2 Step                |
|       0 |       1 |       0 | 1/4 Step                |
|       0 |       1 |       1 | 1/8 Step                |
|       1 |       0 |       0 | 1/16 Step               |
|       1 |       0 |       1 | 1/32 Step               |
|       1 |       1 |       0 | 1/64 Step               |
|       1 |       1 |       1 | 1/128 Step              |

## Table 3. Decay Modes

Figure 9. Full-Scale Current, Motor-Control Group Box

|   DECAY2 |   DECAY1 | INCREASING STEPS   | DECREASING STEPS   |
|----------|----------|--------------------|--------------------|
|        0 |        0 | Slow               | Slow               |
|        0 |        1 | Mixed 30% Fast     | Mixed 30% Fast     |
|        1 |        0 | Mixed 60% Fast     | Mixed 60% Fast     |
|        1 |        1 | Adaptive           | Adaptive           |

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX22210EVKIT# | EV KIT |

# Denotes RoHS compliant.

Evaluates: MAX210

stepper motor from 0% to 100% (see Figure 9 ). The maximum full-scale current is set to 2A by the on-board R REF resistor and can be scaled using the I\_FS slider.

│

## MAX22210 EV Kit Bill of Materials

|   ITEM | REF_DES                                    | DNI/DNP   |   QTY | MFG PART #                                                                                             | MANUFACTURER                                                      | VALUE             | DESCRIPTION                                                                                                     | COMMENTS   |
|--------|--------------------------------------------|-----------|-------|--------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|-------------------|-----------------------------------------------------------------------------------------------------------------|------------|
|      1 | C1                                         | -         |     1 | CL05A105KO5NNN; CC0402KRX5R7BB105                                                                      | SAMSUNG;YAGEO                                                     | 1UF               | CAP; SMT (0402); 1UF; 10%; 16V; X5R; CERAMIC                                                                    |            |
|      2 | C2                                         | -         |     1 | CGA3E2X7R2A223K080AA                                                                                   | TDK                                                               | 0.022UF           | CAP; SMT (0603); 0.022UF; 10%; 100V; X7R; CERAMIC                                                               |            |
|      3 | C3                                         | -         |     1 | TMK105BJ105MV                                                                                          | TAIYO YUDEN                                                       | 1UF               | CAP; SMT (0402); 1UF; 20%; 25V; X5R; CERAMIC                                                                    |            |
|      4 | C4, C16-C18, C25, C26                      | -         |     6 | GRT188R61C106KE13                                                                                      | MURATA                                                            | 10UF              | CAP; SMT (0603); 10UF; 10%; 16V; X5R; CERAMIC                                                                   |            |
|      5 | C8                                         | -         |     1 | GRM21BR70J106K; C2012X7R0J106K125AB; CGA4J1X7R0J106K125AC                                              | MURATA;TDK;TDK                                                    | 10UF              | CAP; SMT (0805); 10UF; 10%; 6.3V; X7R; CERAMIC                                                                  |            |
|      6 | C9                                         | -         |     1 | C0805C224K1RAC; GRM21AR72A224KAC5                                                                      | KEMET;MURATA                                                      | 0.22UF            | CAP; SMT (0805); 0.22UF; 10%; 100V; X7R; CERAMIC                                                                |            |
|      7 | C10, C11                                   | -         |     2 | C2012X7S2A105K125AB; GRJ21BC72A105KE11; GRM21BC72A105KE01                                              | TDK;MURATA;MURATA                                                 | 1UF               | CAP; SMT (0805); 1UF; 10%; 100V; X7S; CERAMIC                                                                   |            |
|      8 | C12, C20, C23, C24, C27-C29, C34, C39, C45 | -         |    10 | 885012206071; C1608X7R1E104K080AA; C0603C104K3RAC; GRM188R71E104KA01; C1608X7R1E104K; 06033C104KAT2A   | WURTH ELECTRONICS INC; TDK;KEMET;MURATA;TDK;AVX                   | 0.1UF             | CAP; SMT (0603); 0.1UF; 10%; 25V; X7R; CERAMIC                                                                  |            |
|      9 | C13-C15, C30, C32, C33, C35, C41, C46      | -         |     9 | C0603X5R160-105KNP; EMK107BJ105KA; C1608X5R1C105K080AA; GRM188R61C105K; 0603YD105KAT2A; CL10A105KO8NNN | VENKEL LTD.;TAIYO YUDEN; TDK;MURATA;AVX;SAMSUNG ELECTRO-MECHANICS | 1UF               | CAP; SMT (0603); 1UF; 10%; 16V; X5R; CERAMIC;                                                                   |            |
|     10 | C19, C21                                   | -         |     2 | GRM188R71A225KE15; CL10B225KP8NNN; C1608X7R1A225K080AC; C0603C225K8RAC                                 | MURATA;SAMSUNG; TDK;KEMET                                         | 2.2UF             | CAP; SMT (0603); 2.2UF; 10%; 10V; X7R; CERAMIC                                                                  |            |
|     11 | C22, C31, C37, C42, C47                    | -         |     5 | C1608C0G1E103J080AA                                                                                    | TDK                                                               | 0.01UF            | CAP; SMT (0603); 0.01UF; 5%; 25V; C0G; CERAMIC;                                                                 |            |
|     12 | C36, C38, C40                              | -         |     3 | C1210C476M4PAC; GRM32ER61C476ME15                                                                      | KEMET;MURATA                                                      | 47UF              | CAP; SMT (1210); 47UF; 20%; 16V; X5R; CERAMIC                                                                   |            |
|     13 | C43                                        | -         |     1 | C0603C474K4RAC; GRM188R71C474K; EMK107B7474KA; C1608X7R1C474K080AC                                     | KEMET;MURATA;TAIYO YUDEN;TDK                                      | 0.47UF            | CAP; SMT (0603); 0.47UF; 10%; 16V; X7R; CERAMIC                                                                 |            |
|     14 | C48                                        | -         |     1 | 06033C104JAT2A                                                                                         | AVX                                                               | 0.1UF             | CAP; SMT (0603); 0.1UF; 5%; 25V; X7R; CERAMIC                                                                   |            |
|     15 | CB1                                        | -         |     1 | EEV-FK2A101                                                                                            | PANASONIC                                                         | 100UF             | CAP; SMT (CASE_J16); 100UF; 20%; 100V; ALUMINUM-ELECTROLYTIC                                                    |            |
|     16 | D1                                         | -         |     1 | SML-P11UTT86                                                                                           | ROHM                                                              | SML-P11UTT86      | DIODE; LED; SMT; PIV=1.8V; IF=0.02A ;                                                                           |            |
|     17 | D2                                         | -         |     1 | SMF5.0A                                                                                                | MICRO COMMERCIAL COMPONENTS                                       | 5V                | DIODE; TVS; SMT (SOD-123FL); VRM=5V; IF=21.7A                                                                   |            |
|     18 | DS1                                        | -         |     1 | SSL-LX3044GD-12V                                                                                       | LUMEX OPTOCOMPONENTS INC                                          | LX3044GD-12V      | GREEN LIGHT EMITTING DIODE                                                                                      |            |
|     19 | J1                                         | -         |     1 | 1727010                                                                                                | PHOENIX CONTACT                                                   |                   | 1727010 CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; RIGHT ANGLE; 2PINS                               |            |
|     20 | J2, J8                                     | -         |     2 | PBC06SFCN                                                                                              | SULLINS ELECTRONICS CORP.                                         | PBC06SFCN         | CONNECTOR; MALE; THROUGH HOLE; .1IN CONTACT CENTER; BREAKAWAY HEADER; STRAIGHT; 6PINS                           |            |
|     21 | J3                                         | -         |     1 | ZX62RD-AB-5P8(30)                                                                                      | HIROSE ELECTRIC CO LTD.                                           | ZX62RD-AB-5P8(30) | CONNECTOR; MALE; THROUGH HOLE; MICRO-USB CONNECTOR MEETING REQUIREMENTS OF USB 2.0 STANDARD; RIGHT ANGLE; 5PINS |            |
|     22 | J4, J9, J10, J14                           | -         |     4 | PBC02SAAN                                                                                              | SULLINS ELECTRONICS CORP.                                         | PBC02SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                       |            |
|     23 | J5                                         | -         |     1 | PJ-102B                                                                                                | CUI INC.                                                          | PJ-102B           | CONNECTOR; MALE; THROUGH HOLE; DC POWER JACK; RIGHT ANGLE; 3PIN                                                 |            |
|     24 | J6                                         | -         |     1 | OSTVN04A150                                                                                            | ON-SHORE TECHNOLOGY INC                                           | OSTVN04A150       | CONNECTOR; TERMINAL BLOCK; FEMALE; THROUGH HOLE; STRAIGHT; 4PINS                                                |            |
|     25 | J7                                         | -         |     1 | PBC04SAAN                                                                                              | SULLINS ELECTRONICS CORP.                                         | PBC04SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS; -65 DEGC TO +125 DEGC                                |            |
|     26 | J11, J12                                   | -         |     2 | PBC10DAAN                                                                                              | SULLINS ELECTRONICS CORP                                          | PBC10DAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 20PINS                                                      |            |
|     27 | J13                                        | -         |     1 | PEC03DAAN                                                                                              | SULLINS ELECTRONICS CORP.                                         | PEC03DAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 6PINS; -65 DEGC TO +125 DEGC                        |            |
|     28 | R1                                         | -         |     1 | CRCW04021K40FK; RC0402FR-071K4L                                                                        | VISHAY DALE;YAGEO PHICOMP                                         | 1.4K              | RES; SMT (0402); 1.4K; 1%; +/- 100PPM/DEGC; 0.0630W                                                             |            |
|     29 | R2, R7, R12, R14, R15, R20, R21            | -         |     7 | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00; CR0603AJ/-000ELF                                           | VISHAY;ROHM SEMICONDUCTOR; PANASONIC;BOURNS                       |                   | 0 RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                                                   |            |
|     30 | R4, R18                                    | -         |     2 | CRCW06034K70FK                                                                                         | VISHAY DALE                                                       | 4.7K              | RES; SMT (0603); 4.7K; 1%; +/- 100PPM/DEGC; 0.1000W                                                             |            |

Evaluates: MAX210

## MAX22210 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES                              | DNI/DNP   | QTY   | MFG PART #                                                         | MANUFACTURER                                        | VALUE                    | DESCRIPTION                                                                                                                                                                                | COMMENTS   |
|--------|--------------------------------------|-----------|-------|--------------------------------------------------------------------|-----------------------------------------------------|--------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 31     | R8, R9, R24-R26, R29, R30, R70-R74   | -         | 12    | ERJ-2GE0R00 CRCW0603100KFK;                                        | PANASONIC                                           |                          | 0 RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                                                                                              |            |
| 32     | R10                                  | - -       | 1     | RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL | VISHAY DALE;YAGEO;YAGEO; PANASONIC;YAGEO            | 100K                     | RES; SMT (0603); 100K; 1%; +/- 100PPM/DEGC; 0.1000W                                                                                                                                        |            |
| 33     | R11                                  |           | 1     | ERJ-3EKF6200                                                       | PANASONIC                                           | 620                      | RES; SMT (0603); 620; 1%; +/- 100PPM/DEGC; 0.1000W                                                                                                                                         |            |
| 34     | R13, R19                             | -         | 2     | CRCW06031K00FK; ERJ-3EKF1001; CR0603AFX-1001ELF; RMCF0603FT1K00    | VISHAY;PANASONIC;BOURNS; STACKPOLE ELECTRONICS INC. | 1K                       | RES; SMT (0603); 1K; 1%; +/- 100PPM/DEGC; 0.1000W                                                                                                                                          |            |
| 35     | R17                                  | -         | 1     | CSR1206FTR500                                                      | STACKPOLE ELECTRONICS INC.                          |                          | 0.5 RES; SMT (1206); 0.5; 1%; +/- 100PPM/DEGC; 0.5000W                                                                                                                                     |            |
| 36     | R22, R23                             | -         | 2     | CRCW12060000ZS                                                     | VISHAY DALE                                         |                          | 0 RES; SMT (1206); 0; JUMPER; JUMPER; 0.2500W                                                                                                                                              |            |
| 37     | R27, R28, R31-R69, R75, R76          | -         | 43    | RC0402FR-0710KL; CR0402-FX-1002GLF                                 | YAGEO;BOURNS                                        | 10K                      | RES; SMT (0402); 10K; 1%; +/- 100PPM/DEGC; 0.0630W                                                                                                                                         |            |
| 38     | RISENA, RISENB                       | -         | 2     | ERA-2AEB3741X                                                      | PANASONIC                                           | 3.74K                    | RES; SMT (0402); 3.74K; 0.10%; +/- 25PPM/DEGC; 0.0630W                                                                                                                                     |            |
| 39     | ROFF                                 | -         | 1     | ERJ-2RKF3002                                                       | PANASONIC                                           | 30K                      | RES; SMT (0402); 30K; 1%; +/- 100PPM/DEGC; 0.1000W                                                                                                                                         |            |
| 40     | RREF                                 | -         | 1     | ERJ-2RKF1802                                                       | PANASONIC                                           | 18K                      | RES; SMT (0402); 18K; 1%; +/- 100PPM/DEGC; 0.1000W                                                                                                                                         |            |
| 41     | SW1                                  | -         | 1     | NK236                                                              | APEM                                                | NK236                    | SWITCH; SPDT; THROUGH HOLE; 12V; 0.5A; NK SERIES; RCOIL= OHM; RINSULATION= OHM; APEM                                                                                                       |            |
| 42     | SW2                                  | -         | 1     | PTS645SK50SMTR92LFS                                                | C&K COMPONENTS                                      | PTS645SK50SMTR92LFS      | SWITCH; SPST; SMT; STRAIGHT; 12V; 0.05A; TACT SWITCHES; RCOIL=0.1 OHM; RINSULATION=100G OHM                                                                                                |            |
| 43     | TP1, TP5, TP8                        | -         | 3     | 5010                                                               | KEYSTONE                                            | N/A                      | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                                                      |            |
| 44     | TP2, TP6, TP7, TP22- TP24            | -         | 6     | 5011                                                               | KEYSTONE                                            | N/A                      | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                    |            |
| 45     | TP3, TP4, TP9, TP11-TP21, TP25, TP26 | -         | 16    | 5012                                                               | KEYSTONE                                            | N/A                      | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                    |            |
| 46     | U1                                   | -         | 1     | MAX22210_TQFN                                                      | ANALOG DEVICES                                      | MAX22210_TQFN            | EVKIT PART - IC; MAX22210; 36V; 3.8A STEPPER MOTOR DRIVER WITH INTEGRATED CURRENT SENSE AND 128 USTEPS INDEXER; PACKAGE OUTLINE DRAWING: 21-0140; PACKAGE LAND PATTERN: 90-0013; TQFN32-EP |            |
| 47     | U2                                   | -         | 1     | MAX6765TTSD2+                                                      | ANALOG DEVICES                                      | MAX6765TTSD2+            | IC; VREG; AUTOMOTIVE MICROPOWER LINEAR REGULATOR WITH SUPERVISOR; TDFN6-EP                                                                                                                 |            |
| 48     | U3                                   | -         | 1     | DSPIC33CH512MP508T-I/PT                                            | MICROCHIP                                           | DSPIC33CH512MP508T- I/PT | IC; CTRL; 16-BIT DIGITAL SIGNAL CONTROLLERS WITH HIGH-RESOLUTION PWM AND CAN FLEXIBLE DATA-RATE; TQFP80-EP                                                                                 |            |
| 49     | U4                                   | -         | 1     | MCP2221A-I/ST                                                      | MICROCHIP                                           | MCP2221A-I/ST            | IC; CONV; USB 2.0 TO I2C/UART PROTOCOL CONVERTER WITH GPIO; TSSOP14                                                                                                                        |            |
| 50     | U5                                   | -         | 1     | SI8422AB-D-IS                                                      | SILICON LABORATORIES                                | SI8422AB-D-IS            | IC; DISO; LOW-POWER; SINGLE AND DUAL-CHANNEL DIGITAL ISOLATORS; NSOIC8                                                                                                                     |            |
| 51     | U6                                   | -         | 1     | MIC5528-3.3YMT                                                     | MICROCHIP                                           | MIC5528-3.3YMT           | IC; VREG; HIGH PERFORMANCE 500 MA LDO; TDFN6-EP                                                                                                                                            |            |
| 52     | Y1                                   | -         | 1     | DSC6011JI1B-008.0000                                               | MICROCHIP                                           | DSC6011JI1B-008.0000     | OSCILLATOR; SMT 2.5X2.0; 8MHZ; +/- 50PPM;                                                                                                                                                  |            |
| 53     | PCB                                  | -         | 1     | MAX22210                                                           | ANALOG DEVICES                                      | PCB                      | PCB:MAX22210                                                                                                                                                                               | -          |
| 54     | C5                                   | DNP       | 0     | GRM155R61C104KA88                                                  | MURATA                                              | 0.1UF                    | CAP; SMT (0402); 0.1UF; 10%; 16V; X5R; CERAMIC                                                                                                                                             | DNI        |
| 55     | C6, C7                               | DNP       | 0     | C0402X7R500-222KNE; GRM155R71H222KA01; C1005X7R1H222K050BA         | VENKEL LTD.;MURATA;TDK                              | 2200PF                   | CAP; SMT (0402); 2200PF; 10%; 50V; X7R; CERAMIC                                                                                                                                            | DNI        |
| 56     | C44                                  | DNP       | 0     | C0603C473K3RAC; GRM188R71E473KA01                                  | KEMET;MURATA                                        | 0.047UF                  | CAP; SMT (0603); 0.047UF; 10%; 25V; X7R; CERAMIC;                                                                                                                                          |            |
| 57     | R3, R5                               | DNP       | 0     | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00;                        | VISHAY;ROHM SEMICONDUCTOR; PANASONIC;BOURNS         |                          | 0 RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                                                                                                                              |            |
|        |                                      |           | 0     | CR0603AJ/-000ELF CRCW0603100KFK; RC0603FR-07100KL;                 | VISHAY DALE;YAGEO;YAGEO;                            | 100K                     | RES; SMT (0603); 100K; 1%; +/-                                                                                                                                                             | DNI        |
| 58     | R6                                   | DNP       |       | RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL                   | PANASONIC;YAGEO                                     |                          | 100PPM/DEGC; 0.1000W                                                                                                                                                                       |            |
| 59     | R16                                  | DNP       | 0     | CRCW12060000ZS                                                     | VISHAY DALE                                         |                          | 0 RES; SMT (1206); 0; JUMPER; JUMPER; 0.2500W                                                                                                                                              |            |

Evaluates: MAX210

## MAX22210 Evaluation Kit

## MAX22210 EV Kit Schematic

<!-- image -->

│

Evaluates: MAX210

## MAX22210 EV Kit Schematic (continued)

<!-- image -->

│

Evaluates: MAX210

## MAX22210 EV Kit Schematic (continued)

<!-- image -->

│

## MAX22210 EV Kit PCB Layout

MAX22210 EV Kit PCB Layout-Top Silkscreen

<!-- image -->

MAX22210 EV Kit PCB Layout-Top Layer

<!-- image -->

Evaluates: MAX210

│

## MAX22210 EV Kit PCB Layout (continued)

MAX22210 EV Kit PCB Layout-GND Plane

<!-- image -->

MAX22210 EV Kit PCB Layout-Power Plane

<!-- image -->

Evaluates: MAX210

│

## MAX22210 EV Kit PCB Layout (continued)

MAX22210 EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX22210 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

Evaluates: MAX210

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/23            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX210