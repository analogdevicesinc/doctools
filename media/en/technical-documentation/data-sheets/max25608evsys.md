<!-- lastmod 2022-08-02 -->
## MAX25608 Evaluation System

## General Description

The MAX25608 evaluation system (EV system) provides a  proven  design  to  evaluate  the  MAX25608  12  channel  LED  matrix  manager.  The  EV  system  includes  two instances of the MAX25608 each controlling 12 on-board LEDs connected in a series configuration. The MAX25601 boost-buck LED driver is included to drive the LEDs. The MAX3265PICO board and software GUI are included to communicate with the MAX25608 IC through the UART interface.

## MAX25608 Evaluation System Board Photo

<!-- image -->

<!-- image -->

## Features

- Two, 12 Channel Matrix Managers
- 24 On-Board White LEDs
- MAX25601 Boost-Buck LED Driver
- MAX32625PICO# Provides UART Communication to Control the Matrix Managers
- GUI for Easy Evaluation

Ordering Information appears at end of data sheet.

Evaluates: MAX25608

## MAX25608 Evaluation System

## Quick Start

## Required Equipment

- MAX25608 EV system
- MAX32625PICO# (included)
- Windows ®  10 computer with GUI installed
- 12V, 5A power supply

## Procedure

The  EV  system  is  fully  assembled  and  tested.  Use  the following steps to verify board operation.

Caution:  Do  not  turn  on  the  power  supply  until  all connections are made. Additional caution should be taken; the on-board LEDs are very bright when illuminated.

- 1) Connect the positive terminal of the +12V power supply to the VIN pad of the MAX25608 board.
- 2) Connect the ground terminal of the +12V power supply to the GND pad of the MAX25608 board.
- 3) Connect the positive terminal of the +12V power supply to the IN pad of the MAX25608 board.
- 4) Connect the ground terminal of the +12V power supply to the GND pad of the MAX25601 board.
- 5) Connect the LED+ pad of the MAX25601 board to the LED1+ pad of the MAX25608 board.
- 6) Connect the GND pad of the MAX25601 board to the LED1- pad of the MAX25608 board.
- 7) Connect the MAX32625PICO# to the MAX25608EVSYS using the included ribbon cable.
- 8) Connect the MAX32625PICO# to the computer with the included USB cable.
- 9) If the GUI is not yet installed, install the GUI.
- 10)  Run the GUI.
- 11)  Click the Connect button and choose device 08 to communicate with the MAX25608 IC driving the LEDs connected between LED1+ and LED1-.
- 12)  A separate current source needs to be used for driving the LEDs between LED2+ and LED2- pads. The MAX25608 IC device ID for this is 04.

Evaluates: MAX25608

## Detailed Description

The MAX25608 evaluation system (EV system) provides a  proven  design  to  evaluate  the  MAX25608  12  channel  LED  matrix  manager.  The  EV  system  includes  two instances of the MAX25608 controlling 12 on-board LEDs connected  in  a  series  configuration.  The  MAX25601 boost-buck LED driver is also included to drive one of the strings of 12 LEDs. A separate current source is needed to  drive  the  second  set  of  LEDs  connected  between LED2+ and LED2-.

## Table 1. MAX25601 Current Source Jumper Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                                                  |
|----------|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J1       | 1-2*             | Connects DIM pin to the resistive divider from VCC. Varying this pin voltage from 0.2V to 3.2V changes the PWM duty from 0% to 100%. Set this pin to >3.5V for 100% duty in this Matrix Manager application. |
| J1       | 2-3              | Connects DIM pin to GND.                                                                                                                                                                                     |
| J1       | Open             | Disconnects DIM from the voltage divider. Allows DIM to be driven by an external voltage source or PWM signal to drive the DIM pin.                                                                          |
| J2       | 1-2              | Connects VCC to the REFI pin. LED current is at the maximum value in this configuration.                                                                                                                     |
| J2       | 2-3*             | Connects REFI to a voltage-divider from VCC to ground. Adjusting R2 allows programming the LED current from 0 to 1.4A. The LED current is set at 1A in the board.                                            |
| J2       | Open             | Disconnects the REFI pin of the device from the external voltage-divider on the VCC pin. Allows REFI to be driven by an external voltage to set the LED current level.                                       |
| J9       | 1-2              | HUD dimming jumper.                                                                                                                                                                                          |
| J9       | Open*            | Disconnects HUD dimming. Default is Open.                                                                                                                                                                    |

Windows is a registered trademark and registered service mark of Microsoft Corporation.

│

## MAX25608 Evaluation System

## Analog Dimming Control (ICTRL)

The MAX25601 current source board is set up for 1A LED current. This can be adjusted by adjusting the potentiometer R2. The current can be set to a maximum of 1.4A.

## Pulse-Dimming Input (PWMDIM)

Typically for matrix manager applications, the LED driver PWM dimming is not used. Therefore, the default J1 position across pins 1-2 in the MAX25601 board is sufficient. The matrix managers implement any desired PWM dimming on a per LED basis through the UART interface.

Evaluates: MAX25608

## Graphical User Interface (GUI)

The MAX25608 EV system comes with a GUI to facilitate evaluation  of  the  MAX25608  matrix  manager  device. Once  the  board  is  powered  up  and  the  PICO  board  is connected to the EV kit, click  the Connect button.  The Device0 and Device1 fields  should  populate  with  the appropriate device IDs of the MAX25608 devices.

Figure 1. MAX25608 EV System Graphical User Interface

<!-- image -->

│

## MAX25608 Evaluation System

## Individual Dimming and Group Dimming

Individual  channel  PWM  dimming  can  be  controlled  on the Individual tab.  Group  PWM  dimming  can  be  controlled on the Group tab. LEDs can be grouped in Group A  and  B.  The  SW\_GO\_EN  bit  must  be  set  to  1  before any switch programming can occur. This is the Software Sync Enable button in the GUI.

## Slew Rate Control

The switches across the LEDs can be turned ON and OFF in a slew rate controlled manner. This allows the LED current  to  have  minimum overshoots and undershoots and improves the EMI performance. The LED slew pulldown menu shows all the settings for the slew rate control.

Note: Each  time  the  slew  rate  control  is  changed,  the SW\_GO\_EN bit needs to be set to zero. This is applicable for the change in the Open LED and Short LED threshold settings as well.

Figure 2. Individual Tab

<!-- image -->

## Register Map

The  full  register  map  is  available  on  the Register tab. This tab also supports read and write commands for each register.

## Scripting

The MAX25608 GUI features the ability to run the scripts which  contain  UART  write  commands  and  delay  commands. This allows for easily creating and testing lighting animations. Click  the Load Script button  to  open  a  file navigator and select the desired .json file. The name of the script file is populated in the Script Name field. Click the Run Script and the commands in the script file, begin executing in sequence until the script is complete.

Evaluates: MAX25608

│

Evaluates: MAX25608

Figure 3. Scripting Tab

<!-- image -->

## Ordering Information

#Denotes RoHS compliance.

| PART           | TYPE      |
|----------------|-----------|
| MAX25608EVSYS# | EV System |

## MAX25608 EV Kit Bill of Materials

|   ITEM | REF_DES                                                        | DNI/DNP   |   QTY | MFG PART #                                                                                    | MANUFACTURER                                 | VALUE                              | DESCRIPTION                                                            | COMMENTS     |
|--------|----------------------------------------------------------------|-----------|-------|-----------------------------------------------------------------------------------------------|----------------------------------------------|------------------------------------|------------------------------------------------------------------------|--------------|
|      1 | C1, C2, C5, C6, C35, C37                                       | -         |     6 | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA; CGA3E2X7R1H104K080AD; CL10B104KB8WPN | MURATA;MURATA;TDK; TDK;SAMSUNG               | 0.1UF                              | CAP; SMT (0603); 0.1UF; 10%; 50V; X7R; CERAMIC                         |              |
|      2 | C3, C19                                                        | -         |     2 | GRM21BR71H105KA12; CL21B105KBFNNN; C2012X7R1H105K085AC; UMK212B7105KG                         | MURATA;SAMSUNG ELECTRONICS; TDK; TAIYO YUDEN | 1UF                                | CAP; SMT (0805); 1UF; 10%; 50V; X7R; CERAMIC                           |              |
|      3 | C4, C34                                                        | -         |     2 | C1608X5R1E225K; TMK107ABJ225KA; TMK107BJ225KA; GRM188R61E225KA12                              | TDK;TAIYO YUDEN; TAIYO YUDEN;MURATA          | 2.2UF                              | CAP; SMT (0603); 2.2UF; 10%; 25V; X5R; CERAMIC                         |              |
|      4 | COVER1                                                         | -         |     1 | 80-100052                                                                                     | MAXIM                                        | 80-100052                          | COVER; LED_COVER_MAX25608_EVKIT; 5.00 X 1.58 IN                        |              |
|      5 | D1-D23, D34                                                    | -         |    24 | KWCELNM1.TG-Z5NF6 -EBVFFCBB46-15B3                                                            | OSRAM                                        | KWCELNM1.TG-Z5NF6 -EBVFFCBB46-15B3 | DIODE; LED; WHITE; SMT; VF=3V; IF=1A;                                  |              |
|      6 | J48                                                            | -         |     1 | FTSH-105-01-L-DV-K                                                                            | SAMTEC                                       | FTSH-105-01-L-DV-K                 | CONNECTOR; MALE; SMT; 0.05 (1.27MM) SMT MICRO HEADER; STRAIGHT; 10PINS |              |
|      7 | R1-R4, R19, R20, R24, R25, R50, R52                            | -         |    10 | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00; CR0603AJ/-000ELF                                  | VISHAY; ROHM SEMICONDUCTOR; PANASONIC;BOURNS |                                    | 0 RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                          |              |
|      8 | R5, R7-R11, R15, R16, R22, R29-R36, R64, R65, R67-R69, R6, R28 | -         |    24 | MCR03EZPFX2002; ERJ-3EKF2002; CR0603-FX-2002ELF; CRCW060320K0FK                               | ROHM;PANASONIC; BOURNS;VISHAY DALE           | 20K                                | RES; SMT (0603); 20K; 1%; +/- 100PPM/DEGC;0.1000W                      | (R6,R28:DNP) |
|      9 | R12, R13, R17                                                  | -         |     3 | CRCW06031K05FK                                                                                | VISHAY DALE                                  | 1.05K                              | RES; SMT (0603); 1.05K; 1%; +/-100PPM/DEGC;0.1000W                     |              |
|     10 | R14, R18                                                       | -         |     2 | CRCW0603432RFK                                                                                | VISHAY DALE                                  |                                    | 432 RES; SMT (0603); 432; 1%; +/-100PPM/DEGC;0.1000W                   |              |
|     11 | R21, R23, R41, R48                                             | -         |     4 | CRCW060310K0FK; ERJ-3EKF1002; AC0603FR-0710KL; RMCF0603FT10K0                                 | VISHAY DALE; PANASONIC;YAGEO                 | 10K                                | RES; SMT (0603); 10K; 1%; +/-100PPM/DEGC;0.1000W                       |              |
|     12 | R26, R27                                                       | -         |     2 | CRCW060349R9FK                                                                                | VISHAY DALE                                  |                                    | 49.9 RES; SMT (0603); 49.9; 1%; +/-100PPM/DEGC;0.1000W                 |              |
|     13 | R38, R39, R42, R43, R46, R49, R53, R54                         | -         |     8 | CRCW12060000Z0; RMCF1206ZT0R00                                                                | VISHAY DALE; STACKPOLE ELECTRONICS INC       |                                    | 0 RES; SMT (1206); 0; JUMPER; JUMPER; 0.2500W                          |              |
|     14 | R44                                                            | -         |     1 | ERJ-3EKF5360                                                                                  | PANASONIC                                    |                                    | 536 RES; SMT (0603); 536; 1%; +/-100PPM/DEGK;0.1000W                   |              |
|     15 | R45                                                            | -         |     1 | CRCW06030000Z0                                                                                | VISHAY DALE                                  |                                    | 0 RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                          |              |

Evaluates: MAX25608

## MAX25608 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES         | DNI/DNP   |   QTY | MFGPART #                      | MANUFACTURER                           | VALUE          | DESCRIPTION                                                                                                                                                                     | COMMENTS   |
|--------|-----------------|-----------|-------|--------------------------------|----------------------------------------|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 16     | R51             | -         |     1 | CRCW20100000ZS                 | VISHAY DALE                            |                | 0 RES; SMT (2010); 0; JUMPER; JUMPER; 0.7500W                                                                                                                                   |            |
| 17     | RT1, RT2        | -         |     2 | NTCG163JH103HT1                | TDK                                    | 10K            | THERMISTOR; SMT (0603); 10K; TOL=+/-3%                                                                                                                                          |            |
| 18     | SPACER1-SPACER4 | -         |     4 | 9032                           | KEYSTONE                               |                | 9032 MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                                  |            |
| 19     | TP1-TP19        | -         |    19 | USE FOR COLD TEST: 5016        | KEYSTONE                               | N/A            | TEST POINT; SMT; PIN LENGTH=0.185IN; PIN WIDTH=0.135IN; PIN HEIGHT=0.09IN; SILVER; PHOSPHOR BRONZE WITH SILVER PLATE CONTACT                                                    |            |
| 20     | U1, U2          | -         |     2 | MAX25608AUI/V+                 | MAXIM                                  | MAX25608AUI/V+ | EVKIT PART - IC; MNGR; 12 SWITCH HIGH BRIGHTNESS LED MATRIX MANAGER FOR AUTOMOTIVE FRONT LIGHTS; PACKAGE OUTLINE DRAWING: 21-0108; PACKAGE LAND PATTERN: 90-1000175; TSSOP28-EP |            |
| 21     | PCB             | -         |     1 | MAX25608                       | MAXIM                                  | PCB            | PCB:MAX25608                                                                                                                                                                    | -          |
| 22     | COVER1          | DNI       |     4 | MCH_SO_F_HEX_4-40X3/8          | GENERIC PART                           | N/A            | STANDOFF; FEMALE-THREADED; HEX; 4-40; 3/8IN; ALUMINUM                                                                                                                           |            |
| 23     | COVER1          | DNI       |     4 | 4C25MXPS;9900;91772A106        | MCMASTER-CARR; KEYSTONE; MCMASTER-CAR  | N/A            | MACHINE SCREW; PHILLIPS; PAN; 4-40; 1/4IN; 18-8 STAINLESS STEEL                                                                                                                 |            |
| 24     | COVER1          | DNI       |     4 | PHILLIPS-PAN_4-40X1/2IN        | GENERIC PART                           | N/A            | MACHINE SCREW; PHILLIPS; PAN; 4-40; 1/2IN; 18-8 STAINLESS STEEL                                                                                                                 |            |
| 25     | HS1             | DNP       |     0 | 80-100053                      | MAXIM                                  | 80-100053      | MACHINE FABRICATED; HSINK; HEAT SINK_MAX25608_EVKIT_P2; 127MMX80MMX8MM; ALUMINUM 6061-T6                                                                                        |            |
| 26     | R37, R40        | DNP       |     0 | CRCW12060000Z0; RMCF1206ZT0R00 | VISHAY DALE; STACKPOLE ELECTRONICS INC |                | 0 RES; SMT (1206); 0; JUMPER; JUMPER; 0.2500W                                                                                                                                   |            |
| 27     | R56, R57        | DNP       |     0 | CRCW060349R9FK                 | VISHAY DALE                            |                | 49.9 RES; SMT (0603); 49.9; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                         |            |
| TOTAL  |                 | 132       |       |                                |                                        |                |                                                                                                                                                                                 |            |

PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)

| ITEM   | REF_DES   | DNI/DNP QTY   | DNI/DNP QTY   | MFGPART #    | MANUFACTURER         | VALUE          | DESCRIPTION                                                                                                                                                                                                  | COMMENTS   |
|--------|-----------|---------------|---------------|--------------|----------------------|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 1      | U4        |               | - 1           | MAX32625PICO | MAXIM                | MAX32625PICO   | MODULE; BOARD; MAX32625PICO BOARD DESIGN FOR MAX32625ARM CORTEX-M4F; BOARD; LAMINATED PLASTIC WITH COPPER CLAD; NOTE: SOCKETED FOOTPRINT USING BCS-110-L-S-TE CONNECTOR WITH MATING CONNECTOR TSW-110-07-F-S |            |
| 2      | U5        |               | -             | 1            | MAX25601EVKIT# MAXIM | MAX25601EVKIT# | MAX25601 EVKIT; Current source for MAX25608 Matrix manager                                                                                                                                                   |            |
| TOTAL  |           |               |               | 134          |                      |                |                                                                                                                                                                                                              |            |

Evaluates: MAX25608

## MAX25608 EV Kit Schematics

<!-- image -->

Evaluates: MAX25608

## MAX25608 EV Kit Schematics (continued)

<!-- image -->

Evaluates: MAX25608

## MAX25608 EV Kit Schematics (continued)

<!-- image -->

## MAX25608 Evaluation System

## MAX25608 EV Kit PCB Layout Diagrams

MAX25608 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX25608 EV Kit PCB Layout-Top View

<!-- image -->

Evaluates: MAX25608

│

## MAX25608 EV Kit PCB Layout Diagrams (continued)

MAX25608 EV Kit Component Placement Guide-Bottom

<!-- image -->

Evaluates: MAX25608

│

## MAX25608 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/21            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitr\ and specifications Zithout notice at an\ time.

│

Evaluates: MAX25608