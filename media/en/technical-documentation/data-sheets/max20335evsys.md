<!-- lastmod 2022-08-02 -->
<!-- image -->

Evaluates: MAX20335

## General Description

The MAX20335 evaluation system (EV system) is a fully assembled and tested circuit board that demonstrates the MAX20335 low-power wearable power management integrated circuit (PMIC). The MAX20335 features two bucks, three linear regulators, and a battery charger.

The  EV  system  comes  with  the  MAX20335  board,  the MAXPICO2PMB# board, and two USB micro-B  cables. The  EV  system  comes  with  the  MAX20335BEWX+ installed. The MAX20335 is configurable through an I 2 C interface  that  allows  for  programming  various  functions and reading the device status. The EV system GUI application sends commands to the MAXPICO2PMB# adapter board to configure the device.

## Features

- USB Power Option
- Flexible Configuration
- On-Board LED Indicator and Battery Simulation
- Sense Test Point for Output-Voltage Measurement
- Windows ®  8/10-Compatible GUI Software
- Fully Assembled and Tested

## EV System Contents

- MAX20335 EV system
- MAXPICO2PMB# board
- Two USB A-to-USB micro-B cables

## EV System Contents

| PART                       | TYPE           |
|----------------------------|----------------|
| MAX20335EVKitSetupVxxx.exe | PC GUI Program |

Ordering Information appears at end of data sheet.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

©

## MAX20335 Evaluation System

## Quick Start

## Required Equipment

Note: In the following sections, software-related items are identified by bold text. Text in bold refers to items directly from the EV system software installation.

- MAX20335 EV system
- Windows PC with USB ports
- One USB A-to-USB micro-B cable and MAXPICO2PMB# adapter board
- One USB A-to-USB micro-B cable or power supply (for battery simulation or battery voltage)
- Optional one USB A-to-USB micro-B cable or power supply (for charger input CHGIN)
- Voltmeter

## Procedure

The EV system is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Visit https://www.maximintegrated.com to download the latest version of the EV system software, MAX20335EVKitSetupVxxx.zip located on the MAX20335 EV system web page. Download the EV system software to a temporary folder and unzip the zip file.
- 2) Install the EV system software on the computer by running the MAX20335EVKitSetupVxxx.exe program inside the temporary folder.
- 3) Verify that all jumpers are in their default positions, as shown in Table 1.
- 4) Connect the type-A end of a cable to the PC and micro-USB end of a cable to MAXPICO2PMB# board, and connect the MAXPICO2PMB# to J13 located on lower left of the EV system board.
- 5) Connect a USB A-to-micro-B cable from the computer to J21 on upper-right corner of the EV system board to use VBUS to power the battery simulation circuits on the board, or to power the battery simulation circuits from the VHC test point. (The user can also use a Li-ion battery or power source to evaluate the device if not using the battery simulation circuits. Connect the battery or power source to J2 on the EV system board. Skip step 6 if not using the battery simulation.)

319-100862; Rev 0; 12/21

One  Analog  Way,  Wilmington,  MA  0187  U.S.A.    |      Tel:  781.329.4700      |      © 2021  Analog  Devices,  Inc.  All  rights  reserved. 2021 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

## MAX20335 Evaluation System

- 6) Use a voltmeter to check that VHC is about 5V and BATSIM test point is about 3.7V. To adjust the BATSIM voltage, turn the R58 BATSIM potentiometer.
- 7) On the computer, open the MAX20335 GUI. It should look like Figure 1; the status bar on the bottom displays MAX20335 Not Found .
- 8) Place a shunt on J15, then confirm that TP BAT is set to BATSIM voltage. The GUI status bar on the bottom displays Connected .
- 9) Check the SYS, B1OUT, and B2OUT test points have no voltage.
- 10)  A CHGIN insertion turns on the device. Connect a USB A-to-micro-B cable from the computer to J1 on

Evaluates: MAX20335

lower-right corner of the EV system board to use VBUS to power CHGIN and shunt J3 jumper, the device then enters ON mode. When the device is ON, SYS is about 4.4V if CHGIN voltage is still present, SYS is about 3.7V (BAT voltage) if CHGIN voltage is removed, B1OUT is about 1.8V, and B2OUT is about 1.2V.

- 11)  The EV system is now ready for additional evaluation.
- 12)  To evaluate the battery charger, the user can shunt J3 and plug in a USB micro-B cable to J1 of the EV system to use USB VBUS power, or externally supply the charging power on TP CHGIN.

Figure 1. MAX20335 Not Found Status

<!-- image -->

│

## MAX20335 Evaluation System

Evaluates: MAX20335

Figure 2. Connected Status

<!-- image -->

## MAX20335 Evaluation System

## Detailed Description of Software

## Software Startup

Upon starting the program, the EV system software automatically searches for the USB interface circuit and then for the IC device addresses. The EV system enters normal operating mode when the connection is established and addresses are found. If  the  USB  connection  is  not detected, the status bar displays Not Connected .  If  the USB  connection  is  detected,  but  the  MAX20335  is  not found, the status bar shows MAX20335 Not Found .

## ToolStrip Menu Bar

The ToolStrip menu bar (Figure 3) is located at the top of  the  GUI  window.  This  bar  comprises File , Device , Options ,  and Help menus whose functions are detailed in the following sections.

## File Menu

The File menu contains the option to exit out of the GUI program.

## Device Menu

The Device menu provides the ability to connect or disconnect  the  EV  system  to  the  GUI.  The Advanced  → I 2 C Read/Write menu allows to read from or write to a selected register with a specified slave address.

## Options Menu

In the Options menu, the Disable Polling option lets the user read the registers manually instead of getting automatically frequent register updates from the IC. The Use USB2PMB2# option should be checked if using with the USB2PMB2# adapter board.

## Help Menu

The Help menu  contains  the About option,  which  displays the GUI splash screen indicative of the GUI version being used.

## Tab Controls

The  MAX20335  EV  system  software  GUI  provides  a convenient  way  to  test  the  features  of  the  MAX20335. Each tab contains controls relevant to various blocks of the  device.  Changing  these  interactive  controls  triggers a write operation to the MAX20335 to update the register contents.  The Read All button  reads  all  the  configura -tion registers that are visible on the current tab page. All statuses are polled continuously. The polling feature can be disabled in the Options section  of  the  menu  bar  by selecting Disable Polling .

## General Tab

The General tab  (Figure  4)  provides  information  on device  info,  set  power  reset  command,  SYS  minimum voltage threshold, CHGIN input current limit, input current limiter status, MON setting, PFNs, and MPCs status.

Figure 3. The ToolStrip Menu Items

<!-- image -->

Evaluates: MAX20335

│

## MAX20335 Evaluation System

Figure 4. General Tab

<!-- image -->

## MAX20335 Evaluation System

## Buck1/2 Tab

In the Buck1 and Buck2 tabs (Figure 5 and Figure 6), the user can enable bucks, set buck voltages, inductor current settings, and some additional settings.

Figure 5. Buck1 Tab

<!-- image -->

## MAX20335 Evaluation System

Evaluates: MAX20335

Figure 6. Buck2 Tab

<!-- image -->

## MAX20335 Evaluation System

## LDOs Tab

The LDOs tab (Figure 7) lets the user enable LDOs, set LDO voltages, change to load switch mode.

Figure 7. LDOs Tab

<!-- image -->

## MAX20335 Evaluation System

## Charger Tab

The Charger tab  (Figure  8)  lets  the  user  set  charger and  thermistor  monitor  configurations.  The  charger  and thermistor status section constantly polls the charger and Evaluates: MAX20335

thermistor status and displays any changes. The polling happens even when the Charger tab is not selected. The polling  can  be  disabled  by  selecting Disable Polling in the Options menu at the top of the application.

Figure 8. Charger Tab

<!-- image -->

│

## MAX20335 Evaluation System

## Register Map Tab

The Register Map tab allows for the configuration of all I 2 C  registers,  including  those  not  configurable  in  other tabs.  The  register  to  be  read  from  or  written  to  can  be selected in the left table. The right table contains descriptions for each register field of the selected 8-bit register. All bits, along with their field names, are displayed at the bottom of the page.

Evaluates: MAX20335

To set a bit, click the bit label. Bold text represents logic 1  and  regular  text  represents  logic  0.  To  configure  the changes to the device, click the Write button at the bottom right.

The user can click Read All to perform a burst read of all registers.

Figure 9. Register Map Tab

<!-- image -->

│

## MAX20335 Evaluation System

## Detailed Description of Hardware

The MAX20335 EV system evaluates the MAX20335 lowpower wearable PMIC, which communicates over the I 2 C interface.  The  EV  system  demonstrates  the  IC  features such as bucks, linear regulators, LED indicator, and battery  charger. The EV system uses the IC in a 36-bump wafer-level package on a proven, four-layer PCB design.

## Evaluates: MAX20335

The EV system can use USB VBUS +5V DC for battery and  charger  input-power  source.  Alternatively,  the  EV system can be powered from an external power supply. Figure 10 and Figure 11 show the EV system and block annotated pictures.

Figure 10. MAX20335 EV System Board Picture

<!-- image -->

│

## MAX20335 Evaluation System

Figure 11. MAX20335 EV System Block Annotated Picture

<!-- image -->

│

## MAX20335 Evaluation System

## Hardware Setup

To use the EV system with GUI, connect the MAXPICO2PMB#  to  the  PMOD  connector  in  the  bottom left corner of the board. The MAXPICO2PMB# also provides 3.3V to the logic voltage VIO of the EV system when shunting J20. The user can use J21 USB VBUS to power the battery simulation circuits on the EV system to supply BAT of the IC. Turning the R58 potentiometer can change the BATSIM voltage. Connect BATSIM to BAT of the IC with a shunt on J15. Alternatively, instead of using battery simulation circuits on board, the user can connect their Li-ion battery on the J2 connector. The user can use J1 USB VBUS as CHGIN source and place a shunt on J3.

## PFNs and MPCs States

The  PFNs  and  MPCs  can  be  pulled  up  to  VIO  or  connected to ground through a 100kΩ resistor.

## Regulators and Peripherals

All  regulator  outputs  are  made  available  on  test  points. The inputs to the LDO1, LDO2, and LDO3 must be supplied externally, or use J10, J14, J16 to power LDO1, 2, 3 from SYS voltage. The buck1 and buck2 outputs have sense test points which provide easy voltage measuring.

## Thermistor and SET Adjustment

When the J4 shunt is installed, THM is pulled up to TPU through a 10kΩ resistor. Header J5 is used to select the pulldown resistor for THM. When pin 1 and 2 is shunted,

## Table 1. Jumper Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                  |
|----------|------------------|----------------------------------------------|
| J3       | 1-2              | CHGIN connect to USB VBUS from J1            |
| J4       | 1-2*             | THM connect to CAP for thermistor monitoring |
| J5       | 1-2              | THM connect to potentiometer                 |
| J5       | 2-3*             | THM connect to 15kΩ (60%/room zone)          |
| J6       | 1-2              | MPC1 pulldown to ground                      |
| J6       | 1-3              | MPC1 connect to GPIO4                        |
| J6       | 1-4              | MPC1 pullup to VIO                           |
| J7       | 1-2              | MPC0 pulldown to ground                      |
| J7       | 1-3              | MPC0 connect to GPIO3                        |
| J7       | 1-4              | MPC0 pullup to VIO                           |
| J8       | 1-2              | PFN2 pulldown to ground                      |
| J8       | 1-3              | PFN2 connect to GPIO2                        |
| J8       | 1-4              | PFN2 pullup to VIO                           |

│

Evaluates: MAX20335

potentiometer  R31  is  used  to  simulate  a  thermistor  at THM. When pin 2 and 3 is shunted, a fixed 15kΩ resistor is connected between THM and ground.

Header J18 is used to select the resistor for R ISET  which sets  the  fast  charge  current  I FCHG .  Shunting  pin  1  and 2  selects  potentiometer  R63  and  the  user  can  change RISET  to change I FCHG . Shunting pin 2 and 3 selects a fixed 39kΩ resistor, which sets the fast charge current to 51mA.

## INT and RST LED Indicators

Shunts can be installed on J11 and J12 to show the status of INT and RST as LED indicators, DS2 and DS3.  When the corresponding LED luminates, it means the active-low output is pulled low.

## LED Charger State Indicator

The LED current sink (DS4) is an indicator of the charger  state.  The  LED  is  on,  off,  or  blink,  depends  on  the charger state. Refer to the Charger State Diagram in the MAX20335 IC data sheet.

## Jumper Setting

Table  1  shows  the  detailed  jumper  setting,  and Table  2 shows the connector description.

## MAX20335 Evaluation System

## Table 1. Jumper Setting (continued)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                      |
|----------|------------------|--------------------------------------------------|
| J9       | 1-2              | PFN1 pulldown to ground                          |
| J9       | 1-3              | PFN1 connect to GPIO1                            |
| J9       | 1-4              | PFN1 pullup to VIO                               |
| J10      | 1-2              | L1IN connects to SYS                             |
| J11      | 1-2*             | INT connect to pullup VIO and DS2.               |
| J12      | 1-2*             | RST connect to pullup VIO and DS3.               |
| J14      | 1-2              | L2IN connect to SYS                              |
| J15      | 1-2              | BATSIM connect to BAT                            |
| J16      | 1-2              | L3IN connect to SYS                              |
| J18      | 1-2              | ISET connect to potentiometer                    |
| J18      | 2-3*             | ISET connect to 39kΩ (fast charge current 0.05A) |
| J20      | 1-2*             | VIO connect to 3.3V from PMOD                    |
| J22      | 1-2*             | VHC connect to USB VBUS from J21                 |
| J23      | 1-2*             | LED supply from VIO                              |
| J39      | 1-2              | SDAconnect to ground                             |
| J39      | 2-3              | SCL connect to ground                            |

## Table 2. Connectors Description

| CONNECTOR   | DESCRIPTION                                     |
|-------------|-------------------------------------------------|
| J1          | Connect to the USB cable for CHGIN voltage      |
| J2          | Connect to Battery                              |
| J13         | Connect to the MAXPICO2PMB#                     |
| J21         | Connect to the USB cable for battery simulation |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20335EVSYS# | EV Kit |

#Denotes RoHS compliance.

Evaluates: MAX20335

│

## MAX20335 EV System Bill of Materials

|   ITEM | REF_DES                                               | DNI/DNP   |   QTY | MFG PART #                                                               | MANUFACTURER                              | VALUE                                                                          | DESCRIPTION                                                                                                                                | COMMENTS   |
|--------|-------------------------------------------------------|-----------|-------|--------------------------------------------------------------------------|-------------------------------------------|--------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|------------|
|      1 | B1OUT_S, B2OUT_S, TP14, TP15                          | -         |     4 | 5002                                                                     | KEYSTONE                                  | N/A                                                                            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                                      |            |
|      2 | BATSIM, TP1-TP6, TP18, TP19                           | -         |     9 | 5003                                                                     | KEYSTONE                                  | N/A                                                                            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                        |            |
|      3 | C1-C9                                                 | -         |     9 | C1005X5R1V225K050BC                                                      | TDK                                       | 2.2UF                                                                          | CAP; SMT (0402); 2.2UF; 10%; 35V; X5R; CERAMIC                                                                                             |            |
|      4 | C10-C12                                               | -         |     3 | GRM188R60J226ME15 GRM31CR71H475KA12;                                     | MURATA                                    | 22UF                                                                           | CAP; SMT (0603); 22UF; 20%; 6.3V; X5R; CERAMIC;                                                                                            |            |
|      5 | C23, C27                                              | -         |     2 | GRJ31CR71H475KE11; GXM31CR71H475KA10; UMK316AB7475KL; GRM31CR71H475KA12L | MURATA;MURATA; MURATA; TAIYO YUDEN;MURATA | 4.7UF                                                                          | CAP; SMT (1206); 4.7UF; 10%; 50V; X7R; CERAMIC                                                                                             |            |
|      6 | C26                                                   | -         |     1 | C0603C225K9PAC; GRM188R60J225KE01; C1608X5R0J225K080AB                   | KEMET; MURATA;TDK                         | 2.2UF                                                                          | CAP; SMT (0603); 2.2UF; 10%; 6.3V; X5R; CERAMIC;                                                                                           |            |
|      7 | C28                                                   | -         |     1 | C0603C475K9PAC                                                           | KEMET                                     | 4.7UF                                                                          | CAP; SMT (0603); 4.7UF; 10%; 6.3V; X5R; CERAMIC;                                                                                           |            |
|      8 | C29                                                   | -         |     1 | C0402X7R500-222KNE; GRM155R71H222KA01; C1005X7R1H222K050BA               | VENKEL LTD.; MURATA;TDK                   | 2200PF                                                                         | CAP; SMT (0402); 2200PF; 10%; 50V; X7R; CERAMIC                                                                                            |            |
|      9 | C30                                                   | -         |     1 | C0603C104K8RAC                                                           | KEMET                                     | 0.1UF                                                                          | CAP; SMT (0603); 0.1UF; 10%; 10V; X7R; CERAMIC                                                                                             |            |
|     10 | C31                                                   | -         |     1 | C3216X5R1C476M160AB; GRM31CR61C476ME44                                   | TDK;MURATA                                | 47UF                                                                           | CAP; SMT (1206); 47UF; 20%; 16V; X5R; CERAMIC                                                                                              |            |
|     11 | C32                                                   | -         |     1 | C3216X5R1H106K160AB; GRM31CR61H106KA12                                   | TDK;MURATA                                | 10UF                                                                           | CAP; SMT (1206); 10UF; 10%; 50V; X5R; CERAMIC                                                                                              |            |
|     12 | C33                                                   | -         |     1 | C1608X5R1H104K080AA                                                      | TDK                                       | 0.1UF                                                                          | CAP; SMT (0603); 0.1UF; 10%; 50V; X5R; CERAMIC                                                                                             |            |
|     13 | C34                                                   | -         |     1 | GRM188R60J105KA01                                                        | MURATA                                    | 1UF                                                                            | CAP; SMT (0603); 1UF; 10%; 6.3V; X5R; CERAMIC;                                                                                             |            |
|     14 | DS1-DS4, DS10                                         | -         |     5 | LG L29K-G2J1-24                                                          | OSRAM                                     | LG L29K-G2J1-24                                                                | DIODE; LED; SMT (0603); Vf=1.7V; If(test)=0.002A; -40 DEGC TO +100 DEGC                                                                    |            |
|     15 | J1, J21                                               | -         |     2 | ZX62D-B-5P8                                                              | HIROSE ELECTRIC CO LTD.                   | ZX62D-B-5P8                                                                    | CONNECTOR; MALE; SMT; MICRO UNIVERSAL SERIES BUS B-TYPE CONNECTOR; RIGHT ANGLE; 5PINS                                                      |            |
|     16 | J2                                                    | -         |     1 | 800-10-002-10-001000                                                     | MILLMAX                                   | 800-10-002-10-001000 CONNECTOR; MALE; TH; SINGLE ROW; STRAIGHT; 2PINS          | 800-10-002-10-001000 CONNECTOR; MALE; TH; SINGLE ROW; STRAIGHT; 2PINS                                                                      |            |
|     17 | J3, J4, J10-J12, J14-J16, J20, J22, J23               | -         |    11 | PBC02SAAN                                                                | SULLINS ELECTRONICS CORP.                 | PBC02SAAN                                                                      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                                  |            |
|     18 | J5, J18, J39                                          | -         |     3 | PBC03SAAN                                                                | SULLINS                                   | PBC03SAAN                                                                      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                                                           |            |
|     19 | J6-J9                                                 | -         |     4 | TSW-104-07-L-S                                                           | SAMTEC                                    | TSW-104-07-L-S                                                                 | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 4PINS                                                          |            |
|     20 | J13                                                   | -         |     1 | PBC06DBAN                                                                | SULLINS ELECTRONICS CORP.                 | PBC06DBAN                                                                      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; RIGHT ANGLE; 12PINS; 12PINS - ALTERNATE PIN NUMBERING                                            |            |
|     21 | L1, L2                                                | -         |     2 | DFE201610E-2R2M                                                          | TOKO                                      | 2.2UH                                                                          | INDUCTOR; SMT (2016); METAL ALLOY CHIP; 2.2UH; TOL=+/-20%; 2.6A                                                                            |            |
|     22 | MH1-MH4                                               | -         |     4 | 9032 KEYSTONE                                                            | 9032 KEYSTONE                             | 9032 MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON | 9032 MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                             |            |
|     23 | PB1                                                   | -         |     1 | 1825910-6                                                                | TE CONNECTIVITY                           | 1825910-6                                                                      | SWITCH; SPST; THROUGH HOLE; 24V; 0.05A; TACTILE SWITCH; RCOIL=0 OHM; RINSULATION=100M OHM; TE CONNECTIVITY                                 |            |
|     24 | R1, R17, R18, R21, R37                                | -         |     5 | CRCW0402499RFK                                                           | VISHAY DALE                               | 499 RES; SMT (0402); 499; 1%; +/-100PPM/DEGC; 0.0630W                          | 499 RES; SMT (0402); 499; 1%; +/-100PPM/DEGC; 0.0630W                                                                                      |            |
|     25 | R2                                                    | -         |     1 | CRCW040215K0FK                                                           | VISHAY DALE                               | 15K                                                                            | RES; SMT (0402); 15K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                          |            |
|     26 | R3, R19, R20, R49, R53 R4, R6, R7, R9, R10, R12, R13, | - -       |     5 | RC0402FR-0710KL                                                          | YAGEO PHICOMP                             | 10K                                                                            | RES; SMT (0402); 10K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                          |            |
|     27 | R15, R45, R46, R48, R50, R57                          |           |    13 | ERJ-2GEJ104                                                              | PANASONIC                                 | 100K                                                                           | RES; SMT (0402); 100K; 5%; +/-200PPM/DEGC; 0.1000W                                                                                         |            |
|     28 | R5, R8, R11, R14                                      | -         |     4 | ERJ-2RKF1001                                                             | PANASONIC                                 | 1K                                                                             | RES; SMT (0402); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                           |            |
|     29 | R31, R63                                              | -         |     2 | PV36Y105C01B00                                                           | MURATA                                    | 1M                                                                             | RESISTOR; THROUGH-HOLE-RADIAL LEAD; PV36 SERIES; 1MOHM; 10%; 100PPM; 0.5W; TRIMMER POTENTIOMETER; 25 TURNS; MOLDER CERAMIC OVER METAL FILM |            |
|     30 | R51                                                   | -         |     1 | ERJ-2GE0R00                                                              | PANASONIC                                 |                                                                                | 0 RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                                              |            |

Evaluates: MAX20335

## MAX20335 EV System Bill of Materials (continued)

| ITEM   | REF_DES                    | DNI/DNP   |   QTY | MFG PART #                    | MANUFACTURER             | VALUE          | DESCRIPTION                                                                                                                                          | COMMENTS   |
|--------|----------------------------|-----------|-------|-------------------------------|--------------------------|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 31     | R52                        | -         |     1 | ERJ-2RKF5100                  | PANASONIC                | 510            | RES; SMT (0402); 510; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                    |            |
| 32     | R54, R56                   | -         |     2 | WSL0805R1000FEA18             | VISHAY DALE              |                | 0.1 RES; SMT (0805); 0.1; 1%; +/-75PPM/DEGC; 0.1250W                                                                                                 |            |
| 33     | R58                        | -         |     1 | 3296Y-1-253LF                 | BOURNS                   | 25K            | RESISTOR; THROUGH-HOLE-RADIAL LEAD; 3296 SERIES; 25K OHM; 10%; 100PPM; 0.5W; SQUARE TRIMMING POTENTIOMETER; 25 TURNS; MOLDER CERAMIC OVER METAL FILM |            |
| 34     | R59                        | -         |     1 | ERJ-2RKF1152                  | PANASONIC                | 11.5K          | RES; SMT (0402); 11.5K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                  |            |
| 35     | R61                        | -         |     1 | CRCW04023K40FK                | VISHAY DALE              | 3.4K           | RES; SMT (0402); 3.4K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                   |            |
| 36     | R62                        | -         |     1 | ERJ-2RKF3902X; CRCW040239K0FK | PANASONIC; VISHAY DALE   | 39K            | RES; SMT (0402); 39K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                    |            |
| 37     | TP7-TP10, VHC              | -         |     5 | 5000                          | KEYSTONE                 | N/A            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                     |            |
| 38     | TP11-TP13, TP16, TP22-TP33 | -         |    16 | 5001                          | KEYSTONE                 | N/A            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                   |            |
| 39     | U1                         | -         |     1 | MAX20335BEWX+                 | MAXIM                    | MAX20335BEWX+  | IC; PWRM; PMIC WITH ULTRA-LOW IQ VOLTAGE REGULATORS AND BATTERY CHARGERS FOR SMALL LITHIUM ION SYSTEMS; WLP36                                        |            |
| 40     | U2                         | -         |     1 | OPA569AIDWPR                  | TEXAS INSTRUMENTS        | OPA569AIDWPR   | IC; AMP; RAIL-TO-RAIL I/O; POWER AMPLIFIER; WSOIC20-EP 300MIL                                                                                        |            |
| 41     | U3                         | -         |     1 | MAX8880EUT+                   | MAXIM                    | MAX8880EUT+    | IC; VREG; ULTRA-LOW-IQ LOW-DROPOUT LINEAR REGULATOR WITH POK; SOT23-6                                                                                |            |
| 42     | U4                         | -         |     1 | NC7WZ07P6X                    | FAIRCHILD SEMICONDUCTOR  | NC7WZ07P6X     | IC; BUF; TINY LOGIC ULTRA-HIGH SPEED DUAL BUFFER; SC70-6                                                                                             |            |
| 43     | PCB                        | -         |     1 | MAX20335SYS                   | MAXIM                    | PCB            | PCB:MAX20335SYS                                                                                                                                      | -          |
| 44     | MAXPICO                    | DNI       |     1 | MAXPICO2PMB#                  | MAXIM                    | MAXPICO2PMB#   | ACCESSORY; BRD; PACKOUT; MAXPICO2PMB ADAPTER BOARD                                                                                                   |            |
| 45     | USBCABLE1, USBCABLE2       | DNI       |     2 | 3025010-03                    | QUALTEK ELECTRONICS CORP | 3025010-03     | CONNECTOR; MALE; USB-A_MINI-B; USB 4P(A)/M - USB MINI 5P(B)/M; STRAIGHT; 36IN                                                                        |            |
| 46     | Q1                         | DNP       |     0 | SI8429DB-T1-E1                | VISHAY                   | SI8429DB-T1-E1 | TRAN; P-CHANNEL 8V (D-S) MOSFET; PCH; SMT; PD-(6.25W); I-(-11.7A); V-(-8V)                                                                           | OPEN       |
| TOTAL  |                            |           |   136 |                               |                          |                |                                                                                                                                                      |            |

Evaluates: MAX20335

## MAX20335 Evaluation System

## MAX20335 EV System Schematics

<!-- image -->

Evaluates: MAX20335

## MAX20335 EV System Schematics (continued)

<!-- image -->

## MAX20335 EV System Schematics (continued)

<!-- image -->

## MAX20335 Evaluation System

## MAX20335 EV System PCB Layouts

MAX20335 EV System Component Placement Guide-Top Silkscreen

<!-- image -->

MAX20335 EV System PCB Layout-Top

<!-- image -->

Evaluates: MAX20335

│

## MAX20335 Evaluation System

## MAX20335 EV System PCB Layouts (continued)

<!-- image -->

MAX20335 EV System Component Placement Guide-GND

MAX20335 EV System PCB Layout-SYS

<!-- image -->

│

## MAX20335 Evaluation System

## MAX20335 EV System PCB Layouts (continued)

<!-- image -->

MAX20335 EV System PCB Layout- Bottom

│

## MAX20335 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/21           | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

Evaluates: MAX20335