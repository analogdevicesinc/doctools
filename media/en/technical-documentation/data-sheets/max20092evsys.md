<!-- lastmod 2022-08-03 -->
<!-- image -->

Evaluates: MAX20092

## General Description

The MAX20092 evaluation system is a matrix LED dimmer  system  featuring  the  MAX20092  12-switch  matrix LED dimmer IC. The system includes two MAX20092 ICs that each control a string of 12 series LEDs.  Each LED can be controlled  individually  or  grouped. The  user  can turn the LED on and off with or without fading. The two strings of 12 series LEDs are driven by the MAX20097, a  dual  buck  controller  IC,  with  a  current  of  0.5A.  The power  supply  for  the  dual  buck  controller  is  generated from the MAX16990, boost controller IC that is powered by an external 12V supply. For the detailed operation of the MAX20092 IC, refer to the MAX20092 IC data sheet.

## Features

- Operating Input Supply Range: 9V to 16V
- Individual and Group Control of LEDs for Turn On, Turn Off, and PWM Dimming
- Dimming With and Without Fade
- Phase Shift Capability
- LED Slew Rate Control for Turn On/Off
- Open and Short Indication for Each Individual LED
- Adjustable for Short Thresholds
- Open Trace Detection
- Adjustable for PWM Dimming Frequency
- Thermal Warning and Thermal Shutdown Indication
- Status Reporting on SPI Errors
- Individual, Global, or Cluster Write Modes Through the SPI Interface
- Reporting of LED Binning Resistor (R GRADE )
- Proven PCB Layout
- Fully Assembled and Tested

## MAX20092 EV Kit Files

| FILE              | DESCRIPTION           |
|-------------------|-----------------------|
| MAX20092EVKit.exe | Windows GUI Installer |

Ordering Information appears at end of data sheet.

One  Analog  Way,  Wilmington,  MA  0187  U.S.A.    |      Tel:  781.329.4700      |      © 2018  Analog  Devices,  Inc.  All  rights  reserved. ©  2018 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective

Click here to ask an associate for production status of specific part numbers.

## MAX20092 Evaluation System

## Quick Start

## Required Equipment

- MAX20092EVSYS# (includes the MAX20092 EV kit, MAX20092LED EV kit, MINIQUSB+ interface board, and USB cable)
- A PC with the MAX20092 GUI software uploaded
- 12V, 6A DC power supply
- Two digital voltmeters
- A small flat-head screwdriver to turn the potentiometer wiper adjustment pin

## Power-Up Procedure

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in  bold  and  underlined refers to items from the Windows operating system.

- Visit www.maximintegrated/evkitsoftware to download the latest version of the EV kit software, MAX20092EVKit.exe .
- Install the EV kit software (GUI) on your computer by running the MAX20092EVKit.exe program. The MAX20092 evaluation kit software app is installed together with the required MINIQUSB+ drivers.
- Verify jumper settings as in Table 1 for the MAX20092 EV kit board.
- Connect the 12V power supply to the BATVIN and GND terminals of the MAX20092 EV kit.
- Connect a voltmeter across REFI1 and AGND test points. Adjust the R23 potentiometer to set the voltage to 0.45V. This voltage on REFI1 sets the LED current on Channel 1 of the buck controller.
- The equation to set LED current is: I LED  = (V REFI1 - 0.2V)/0.5 with 0.45V the current is set to 0.5A. Connect a voltmeter between REFI2 and AGND. Use the potentiometer R5 to set the voltage at REFI2 test point. This sets the LED current on channel 2 of the buck controller.

The equation to set LED current is: I LED  = (V REFI1  0.2V)/0.5 with 0.45V the current is set to 0.5A.

owners.

## MAX20092 Evaluation System

- Caution: The setting of the LED current by the above procedure is important as the LEDs in the LED board are recommended for 0.5A operation nominally. Do not connect the LED board before this step.
- Disconnect the 12V power supply connected to BATVIN and GND terminals of the MAX20092 EV kit.
- Connect the MAX20092 LED EV kit board to the MAX20092 EV kit using the female header on the MAX200092 LED EV kit to the male connector in the MAX20092 EV kit board.
- Ensure the jumpers on the LED board are connected as shown in Table 2 .
- Connect the MINIQUSB+ board to J2 and J14 of the MAX20092 EV kit.
- Connect the MINIQUSB+ board to the computer running the software with the provided USB cable.
- Reconnect the 12V power supply to the BATVIN and GND terminals of the MAX20092 EV kit.
- Click on the MAX20092 EV kit GUI software icon installed in the PC.
- Click the Software Sync Enable Button in the GUI to enable the control of LEDs as shown in Figure 1 .

Figure 1. MAX20092 Evaluation Kit Software (GUI)

<!-- image -->

Table 1. Jumper Settings for MAX20092 EVKIT Board

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                  |
|----------|------------------|------------------------------------------------------------------------------|
| J3       | 1-2*             | Turns on the current source in the MAX20097 for Channel 2.                   |
| J3       | 2-3              | Turns off the current source in the MAX20097 for Channel 2.                  |
| J5       | 1-2*             | Turns on the current source in the MAX20097 for Channel 2.                   |
| J5       | 2-3              | Turns off the current source in the MAX20097 for Channel 2.                  |
| J6       | Closed*          | Sets MAX20097 Channel 1 LED current through REFI1 by a resistive divider.    |
| J6       | Open             | Allows for connecting an external power supply on REFI test point.           |
| J7       | Closed           | Connects the V IO pin of the MAX20097 to VCC                                 |
| J7       | Open*            | Disconnects the V IO pin of the MAX20097                                     |
| J8       | 1-2              | Allows for connecting an external 5V supply between the VIN_MM and GND pads. |
| J8       | 2-3*             | Connects the 5V output from the MAX20097 to the VIN of the MAX20092          |
| J10      | 1-2              | Connect VIN of the MAX20092 IC1 to GND                                       |
|          | 2-3*             | Connects VIN of the MAX20092 IC1 to supply                                   |
| J11      | 1-2              | Connect VIN of the MAX20092 IC2 to GND                                       |
| J11      | 2-3*             | Connects VIN of the MAX20092 IC2 to supply                                   |
| J15      | Closed*          | Connects FLTB of the MAX20097 to the FLTB test point                         |
| J19      | Closed*          | Enables the MAX16990 Boost Controller IC.                                    |
| J21      | 1-2*             | Connects the V IO pin of MAX20092 to 3.3V from the MINIQSB+ board            |
| J21      | 2-3              | Connects to 5V.                                                              |
| J23      | 1-2*             | Connects the MAX20092 IC1 ADDR1 pin to SDI                                   |
| J23      | 2-3              | Connects the MAX20092 IC1 ADDR1 pin to GND                                   |
| J24      | 1-2*             | Connects the MAX20092 IC1 ADDR2 pin to SDI                                   |
| J24      | 2-3              | Connects the MAX20092 IC1 ADDR2 pin to VIO                                   |
| J25      | 1-2              | Connects the MAX20092 IC2 ADDR1 pin to SDI                                   |
| J25      | 2-3*             | Connects the MAX20092 IC2 ADDR1 pin to GND                                   |
| J26      | 1-2              | Connects the MAX20092 IC2 ADDR2 pin to SDI                                   |
| J26      | 2-3*             | Connects the MAX20092 IC2 ADDR2 pin to VIO                                   |

Table 2. Jumper Settings for MAX20092 LED BOARD

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                |
|----------|------------------|--------------------------------------------|
| J1       | 2-3*             | For series connection of LEDs in Channel 1 |
| J2       | 2-3*             | For series connection of LEDs in Channel 1 |
| J3       | 2-3*             | For series connection of LEDs in Channel 1 |
| J4       | 2-3*             | For series connection of LEDs in Channel 2 |
| J5       | 2-3*             | For series connection of LEDs in Channel 2 |
| J7       | 2-3*             | For series connection of LEDs in Channel 2 |

Evaluates: MAX20092

## MAX20092 Evaluation System

## Detailed Description

The MAX20092 EV system demonstrates the capabilities of  the  MAX20092 LED matrix manager IC. There are 2 MAX20092  ICs.  Each  IC  controls  a  string  of  12  series LEDs.  The  2  string  of  12  series  LEDs  are  driven  by  a MAX20097 dual buck controller IC with 0.5A current. The MAX20097 is powered by a 52V supply that is generated from a MAX16990 boost controller IC using a 12V supply.  The  boost  controller  delivers  a  maximum  power  of approximately 50W. The EV board is shown in Figure 2 .

The MAX20092 IC features a serial peripheral interface (SPI)  for  serial  communication.  The  MAX20092  IC  is  a slave device that uses the SPI to communicate with an external  microcontroller  that  acts  as  the  master  device. The MAX20092 EV kit uses the MINIQUSB board as the microcontroller  to  communicate  with  the  MAX20092  IC. The  included  GUI  software  works  with  the  MINIQUSB

Evaluates: MAX20092

board  and  controls  the  MAX20092  IC.  Each  of  the  12 switches in the MAX20092 IC can be independently programmed  to  bypass  the  LEDs  in  the  string.  Each  LED can be turned fully on, fully off, or dimmed with or without fade-transition mode.

## Device Select and Write Modes

The MAX20092 EV kit comes with 2 MAX20092 ICs. The ICs have ADDR0, ADDR1 and ADDR2 pins to assign different addresses to the ICs. These pins of the 2 ICs are connected  such  that  their  device  addresses  are  0x0E and 0x17. Select each device under the Device Select section and turn on the Software Sync Enable button to enable the LED control. There is a Write Mode section that  has  3  buttons: Individual , Cluster ,  and General . Push the Individual button to select one of the ICs. Push the Group or Cluster button to write to both ICs.

Figure 2. MAX20092 Evaluation Kit Board

<!-- image -->

│

## MAX20092 Evaluation System

## Individual Control of the LEDs

Each of the individual LEDs can be turned on with the programmed duty cycle. Fade can be enable when turning  on  and  off.  The Time Period dimming update can be chosen from the pulldown menu in the GUI. See the Individual tab in the GUI ( Figure 3 ). Each of the phases Evaluates: MAX20092

of  the  LED  switching  can  be  shifted  in  phase  by  the slider  in  the Phase  Shift button.  Phase  shift  in  steps of 30 degrees is possible between LED switching. The PSFT\_RST button sets all the 12 LEDs switching shifted in phase by 30 degrees.

Figure 3. GUI-Individual LED Control

<!-- image -->

## MAX20092 Evaluation System

## Group Control of LEDs

LEDs can be grouped in Group A, B, C, and D configurations as seen in the GUI. Each of the groups can be set to a different duty cycle and can be dimmed with and without fading. Figure 4 shows a GUI screenshot in which all the 12 LEDs are selected in Group A configuration and set to 30% duty cycle and fade enabled with 32 PWM time period.

## Monitoring of Individual LEDs

Any fault on the LEDs can be monitored on the General/ Status tab of the GUI. Open and Short faults for individual LEDs can be monitored. In addition, any open in the traces/wires running from the MAX20092 EV kit board to the LED board are also reported on the General/Status tab as an Open Trace Fault . The Open LED Override button disables reporting of open LED fault for the selected LED.

The Fault Mask section allows which LED can be selected for whose faults can be masked.

## Slew Rate, PWM Dimming Frequency, and Fault Thresholds

Turning  the  LED  on  and  off  at  a  controlled  slew  rate reduces EMI as well as reduces the peak voltage ringing across the switches. The MAX20092 IC has 8 settings for the  slew  rate.  It  ranges  from  0.5V/µs  to  10V/µs.  These options  are  there  in  the  pulldown  menu  in  the General Configuration section.  The  PWM  dimming  frequency has  4  options:  250Hz,  500Hz,  1kHz,  and  2kHz  for  frequency divider settings  4096,  8192,  16384,  and  32768, respectively. If an external PWM dimming clock is used, the  final  PWM  dimming  frequency  for  the  LEDs  is  the external clock frequency divided by the frequency divider number selected in the pulldown menu. For example, if an external clock frequency of 819.2kHz is used with the frequency divider selected as 4096, the LED PWM dimming frequency is 200Hz. The LED short can be detected with 2 short thresholds from which to choose.

Figure 4. GUI-Group LED Control

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20092EVSYS# | EV KIT |

│

## MAX20092 Evaluation System

## MAX20092 EV Kit Bill of Materials

|   ITEM |   QTY | REF DES                        | VAR STATUS   | MAXINV              | MFG PART #                                              | MANUFACTURER        | VALUE        | DESCRIPTION                                                                                                        | COMMENTS   |
|--------|-------|--------------------------------|--------------|---------------------|---------------------------------------------------------|---------------------|--------------|--------------------------------------------------------------------------------------------------------------------|------------|
|      1 |     7 | AGND, GND1-GND4, LED1+, LED2+  | Pref         | 01-9020BUSS20AWG-00 | 9020 BUSS                                               | WEICO WIRE          | MAXIMPAD     | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                           |            |
|      2 |     2 | C1, C28                        | Pref         | 20-0001U-CA96       | CGA4J3X7R1H105M125AB                                    | TDK                 | 1UF          | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 50V; TOL=20%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                     |            |
|      3 |     6 | C2, C6, C14, C16, C23, C27     | Pref         | 20-000U1-DA52       | CGA3E2X7R1H104K080AE                                    | TDK                 | 0.1UF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO; SOFT TERMINATION |            |
|      4 |     2 | C3, C26                        | Pref         | 20-1000P-CA80       | CGA3E2C0G2A102J080AA                                    | TDK                 | 1000PF       | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 100V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G; AUTO                  |            |
|      5 |     2 | C4, C20                        | Pref         | 20-0001U-CA22       | CGA3E1X7R1V105K                                         | TDK                 | 1UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 35V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                     |            |
|      6 |     4 | C9, C11, C17, C21              | Pref         | 20-004U7-CA59       | CGA6M3X7S2A475K200AE; CGA6M3X7S2A475K200AB              | TDK;TDK             | 4.7UF        | CAPACITOR; SMT (1210); CERAMIC CHIP; 4.7UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S; AUTO                  |            |
|      7 |     2 | C10, C19                       | Pref         | 20-00U22-BA63       | CGA3E3X7R1H224K080AB; GCM188R71H224KA49                 | TDK;MURATA          | 0.22UF       | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.22UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                  |            |
|      8 |     1 | C13                            | Pref         | 20-002U2-CA73       | CGA3E1X7R0J225K080AC                                    | TDK                 | 2.2UF        | CAPACITOR; SMT (0603); CERAMIC; 2.2UF; 6.3V; TOL=10%; TG=- 55 DEGC TO +125 DEGC; TC=X7R; AUTO                      |            |
|      9 |     1 | C15                            | Pref         | 20-000U1-CA82       | CGA4J2X7R2A104K125AA                                    | TDK                 | 0.1UF        | CAPACITOR; SMT (0805); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                  |            |
|     10 |     4 | C31-C33, C35                   | Pref         | 20-0010U-A20        | GRM21BR70J106K; C2012X7R0J106K125AB                     | MURATA;TDK          | 10UF         | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 6.3V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R       |            |
|     11 |     7 | C34, C36-C40, C56              | Pref         | 20-000U1-BA63       | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA | MURATA; MURATA;TDK  | 0.1UF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                   |            |
|     12 |     1 | C41                            | Pref         | 20-000U1-P6B        | C1608X7R1E104K080AA                                     | TDK                 | 0.1UF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R         |            |
|     13 |    14 | C42, C44-C47, C51-C55, C59-C62 | Pref         | 20-004U7-BA52       | C3225X7S2A475M200AB                                     | TDK                 | 4.7UF        | CAPACITOR; SMT (1210); CERAMIC CHIP; 4.7UF; 100V; TOL=20%; TG=-55 DEGC TO +125 DEGC; TC=X7S                        |            |
|     14 |     1 | C43                            | Pref         | 20-002U2-BA97       | GRM188C71E225KE11                                       | MURATA              | 2.2UF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S                         |            |
|     15 |     1 | C48                            | Pref         | 20-0100P-77H        | C0603H101J5GAC                                          | KEMET               | 100PF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 100PF; 50V; TOL=5%; MODEL=HT SERIES; TG=-55 DEGC TO +200 DEGC; TC=C0G         |            |
|     16 |     1 | C49                            | Pref         | 20-0100P-B69        | C0603C101J1GAC; GRM1885C2A101JA01                       | KEMET;MURATA        | 100PF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 100PF; 100V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G                 |            |
|     17 |     1 | C50                            | Pref         | 20-0U022-03         | C0603C223K3RAC                                          | KEMET               | 22000PF      | CAPACITOR; SMT; 0603; CERAMIC; 22000pF; 25V; 10%; X7R; - 55degC to + 125degC; +/-15% from - 55degC to +125degC     |            |
|     18 |     1 | C58                            | Pref         | 20-0001U-A54        | EMK107B7105MA                                           | TAIYO YUDEN         | 1UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 16V; TOL=20%; MODEL=M SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R           |            |
|     19 |     1 | C64                            | Pref         | 20-000U1-DA84       | CGA3E3X7S2A104K080AB                                    | TDK                 | 0.1UF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S                        |            |
|     20 |     3 | D1, D4, D7                     | Pref         | 30-1N4448WS7F-00    | 1N4448WS-7-F                                            | DIODES INCORPORATED | 1N4448WS-7-F | DIODE; SWT; SOD-323; PIV=75V; IF=0.5A                                                                              |            |

Evaluates: MAX20092

## MAX20092 EV Kit Bill of Materials (continued)

| ITEM   | QTY   | REF DES                                                      | VAR STATUS   | MAXINV                  | MFG PART #                                     | MANUFACTURER                | VALUE              | DESCRIPTION                                                                                                                                                                       | COMMENTS   |
|--------|-------|--------------------------------------------------------------|--------------|-------------------------|------------------------------------------------|-----------------------------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 21     | 4     | D2, D3, D5, D6                                               | Pref         | 30-B18013F-00           | B180-13-F                                      | DIODES INCORPORATED         | B180-13-F          | DIODE; SCH; SCHOTTKY BARRIER RECTIFIER; SMA; PIV=80V; IF=1A                                                                                                                       |            |
| 22     | 1     | D8                                                           | Pref         | 30-DFLS2100-00          | DFLS2100                                       | DIODES INCORPORATED         | DFLS2100           | DIODE; SCH; SMT (POWERDI-123); PIV=100V; IF=2A                                                                                                                                    |            |
| 23     | 17    | DIM1, DIM2, FLTB, IOUTV1, IOUTV2, REFI1, REFI2, TP1-TP9, VCC | Pref         | 02-TPCOMP5007-00        |                                                | 5007 KEYSTONE               | N/A                | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |            |
| 24     | 5     | J1, J6, J7, J15, J18                                         | Pref         | 01-PCC02SAAN2P-21       | PCC02SAAN                                      | SULLINS                     | PCC02SAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                                                                          |            |
| 25     | 1     | J2                                                           | Pref         | 01-SSQ10823GS8P-17      | SSQ-108-23-G-S                                 | SAMTEC                      | SSQ-108-23-G-S     | CONNECTOR; FEMALE; THROUGH HOLE; SSQ SERIES; STRAIGHT; 8PINS                                                                                                                      |            |
| 26     | 11    | J3, J5, J8, J10, J11, J19, J21, J23-J26                      | Pref         | 01-PCC03SAAN3P-21       | PCC03SAAN                                      | SULLINS                     | PCC03SAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                                                                          |            |
| 27     | 1     | J12                                                          | Pref         | 01-PEC17DBAN34P-21      | PEC17DBAN                                      | SULLINS ELECTRONICS CORP.   | PEC17DBAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; RIGHT ANGLE; 34PINS; -65 DEGC TO +125 DEGC                                                                                              |            |
| 28     | 1     | J13                                                          | Pref         | 01-1089734234P-21       | 10-89-7342                                     | MOLEX                       | 10-89-7342         | CONNECTOR, TH, MALE, SALES ASSY-HIGH TEMP DUAL ROW WAFER WITH BREAK-OFF OPTION, 34PINS, STR                                                                                       |            |
| 29     | 1     | J14                                                          | Pref         | 01-PEC08DAAN16P-21      | PEC08DAAN                                      | SULLINS ELECTRONICS CORP.   | PEC08DAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 16PINS; -65 DEGC TO +125 DEGC                                                                                                 |            |
| 30     | 1     | J22                                                          | Pref         | 01-B6BPHK6P-19          | B6B-PH-K-S(LF)(SN)                             | JST MANUFACTURING           | B6B-PH-K-S(LF)(SN) | CONNECTOR; MALE; THROUGH HOLE; PH SERIES; STRAIGHT; 6PINS                                                                                                                         |            |
| 31     | 2     | L1, L2                                                       | Pref         | 50-0047U-S44A           | MSS1278T-473ML                                 | COILCRAFT                   | 47UH               | INDUCTOR; SMT; FERRITE BOBBIN CORE; 47UH; TOL=+/-20%; 5.4A                                                                                                                        |            |
| 32     | 1     | L3                                                           | Pref         | 50-0033U-0ST            | DO5040H-333ML                                  | COILCRAFT                   | 33UH               | INDUCTOR; SMT; FERRITE; 33UH; 20%; 4.50A                                                                                                                                          |            |
| 33     | 4     | Q1-Q4                                                        | Pref         | 90-BUK9Y10780E-21       | BUK9Y107-80E                                   | NXP                         | BUK9Y107-80E       | TRAN; N-CHANNEL 80V; 107MOHM LOGIC LEVEL MOSFET; NCH; LFPAK; PD-(37W); I-(11.8A); V-(80V)                                                                                         |            |
| 34     | 1     | Q5                                                           | Pref         | 90-SQJA82EPT1GE3-23     | SQJA82EP-T1-GE3                                | VISHAY SILICONIX            | SQJA82EP-T1-GE3    | TRAN; AUTOMOTIVE N-CHANNEL MOSFET; NCH; SO-8L; PD-(68W); I-(60A); V-(80V)                                                                                                         |            |
| 35     | 2     | R1, R24                                                      | Pref         | 80-0453K-24             | ERJ-3EKF4533V                                  | PANASONIC                   | 453K               | RESISTOR; 0603; 453K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                           |            |
| 36     | 4     | R2, R3, R21, R25                                             | Pref         | 80-024K9-24             | CRCW060324K9FK                                 | VISHAY DALE                 | 24.9K              | RESISTOR; 0603; 24.9K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                          |            |
| 37     | 5     | R4, R14, R22, R29, R30                                       | Pref         | 80-0010K-24             | CRCW060310K0FK; ERJ-3EKF1002                   | VISHAY DALE; PANASONIC      | 10K                | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                |            |
| 38     | 2     | R5, R23                                                      | Pref         | 80-0010K-39A            | 3296W-1-103LF                                  | BOURNS                      | 10K                | RESISTOR; THROUGH-HOLE- RADIAL LEAD; 3296 SERIES; 10K OHM; 10%; 100PPM; 0.5W; SQUARE TRIMMING POTENTIOMETER; 25 TURNS; MOLDER CERAMIC OVER METAL FILM                             |            |
| 39     | 2     | R6, R20                                                      | Pref         | 80-000R1-CA25           | RUW3216FR100                                   | SAMSUNG ELECTRONICS         |                    | 0.1 RESISTOR; 1206; 0.1 OHM; 1%; 150PPM; 1W; THICK FILM                                                                                                                           |            |
| 40     | 8     | R7, R8, R10, R16, R18, R19, R31, R32                         | Pref         | 80-0000R-27             | CRCW06030000ZS; MCR03EZPJ000;ERJ-3GEY0R00      | VISHAY DALE; ROHM;PANASONIC |                    | 0 RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                                                            |            |
| 41     | 4     | R11-R13, R15                                                 | Pref         | 80-004R7-19             | CRCW06034R70FN                                 | VISHAY DALE                 |                    | 4.7 RESISTOR; 0603; 4.7 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                        |            |
| 42     | 7     | R26, R27, R40, R44, R56, R57, R59                            | Pref         | 80-0000R-AA6            | CRCW06030000Z0                                 | VISHAY DALE                 |                    | 0 RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.1W; THICK FILM                                                                                                                             |            |
| 43     | 2     | R28, R33                                                     | Pref         | 80-0100K-H9A            | TNPU0603100KAZEN00                             | VISHAY DRALORIC             | 100K               | RESISTOR; 0603; 100K OHM; 0.05%; 5PPM; 0.10W; THIN FILM                                                                                                                           |            |
| 44     | 2     | R34, R35                                                     | Pref         | 80-0020K-24             | MCR03EZPFX2002; ERJ-3EKF2002;CR0603-FX-2002ELF | ROHM;PANASONIC; BOURNS      | 20K                | RESISTOR; 0603; 20K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                            |            |
| 45     | 4     | R36, R46, R52, R58                                           | Pref         | 80-0010K-A4             | 301-10K-RC                                     | XICON                       | 10K                | RESISTOR, 0603, 10K OHM, 5%, 200PPM, 1/16W, THICK FILM                                                                                                                            |            |
| 46     | 3     | R37-R39                                                      | Pref         | 80-04K75-24             | CRCW06034K75FK; ERJ-3EKF4751                   | VISHAY DALE; PANASONIC      | 4.75K              | RESISTOR; 0603; 4.75K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                              |            |
| 47     | 1     |                                                              | Pref         | 80-0140K-24             | ERJ-3EKF1403V                                  |                             | 140K               | RESISTOR; 0603; 140K OHM; 1%;                                                                                                                                                     |            |
|        |       | R41                                                          |              |                         |                                                | PANASONIC                   |                    | 100PPM; 0.10W; THICK FILM                                                                                                                                                         |            |
| 48     | 1     | R43                                                          | Pref         | 80-07K15-24             | ERJ-3EKF7151V                                  | PANASONIC                   | 7.15K              | RESISTOR; 0603; 7.15K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                          |            |
| 49 50  | 1 3   | R45                                                          | Pref Pref    | 80-001K5-71 80-00R05-26 | ERA-3YEB152V                                   | PANASONIC                   | 1.5K               | 25PPM; 0.10W; THICK FILM 0.05 RESISTOR; 1206; 0.05 OHM; 1%;                                                                                                                       |            |
|        |       | R47-R49                                                      |              |                         | LRC-LR1206LF-01-R050-F                         | TT ELECTRONICS              |                    | 100PPM; 0.5W; THICK FILM                                                                                                                                                          |            |

Evaluates: MAX20092

## MAX20092 EV Kit Bill of Materials (continued)

| ITEM   |   QTY | REF DES   | VAR STATUS   | MAXINV             | MFG PART #                     | MANUFACTURER                       | VALUE           | DESCRIPTION                                                                                                                              | COMMENTS   |
|--------|-------|-----------|--------------|--------------------|--------------------------------|------------------------------------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 51     |     1 | R50       | Pref         | 80-0510K-24        | CRCW0603510KFK                 | VISHAY DALE                        | 510K            | RESISTOR; 0603; 510K; 1%; 100PPM; 0.10W; THICK FILM                                                                                      |            |
| 52     |     1 | R51       | Pref         | 80-0010K-77        | TNPW060310K0BE; RN731JTTD1002B | VISHAY DALE; KOA SPEER ELECTRONICS | 10K             | RESISTOR; 0603; 10K OHM; 0.1%; 25PPM; 0.1W; THICK FILM                                                                                   |            |
| 53     |     1 | R54       | Pref         | 80-0020R-24        | CRCW060320R0FK; ERJ-3EKF20R0V  | VISHAY DALE; PANASONIC             |                 | 20 RESISTOR, 0603, 20 OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                                 |            |
| 54     |     1 | TP10      | Pref         | 01-70061P-80       |                                | 7006 KEYSTONE                      |                 | 7006 CONNECTOR; PANELMOUNT; BINDING POST; STRAIGHT THROUGH; 1PIN; RED                                                                    |            |
| 55     |     1 | TP11      | Pref         | 01-70071P-80       |                                | 7007 KEYSTONE                      |                 | 7007 CONNECTOR; PANELMOUNT; BINDING POST; STRAIGHT THROUGH; 1PIN; BLACK                                                                  |            |
| 56     |     1 | U1        | Pref         | 00-SAMPLE-01       | MAX20096AHI+                   | MAXIM                              | MAX20096AHI+    | EVKIT PART-IC; DRV; DUAL CHANNEL HIGH VOLTAGE BUCK LED DRIVER WITH SPI INTERFACE; PACKAGE OUTLINE: 21-0066; PACKAGE CODE: U28-1; TSSOP28 |            |
| 57     |     2 | U2, U3    | Pref         | 00-SAMPLE-02       | MAX20092                       | MAXIM                              | MAX20092        | EVKIT PART-IC; 12 SWITCH MATRIX MANAGER FOR AUTOMOTIVE LIGHTING; PACKAGE OUTLINE: 21- 100210; TQFN32-EP                                  |            |
| 58     |     1 | U4        | Pref         | 10-MAX16990ATCEV-T | MAX16990ATCE/V+                | MAXIM                              | MAX16990ATCE/V+ | IC; CTRL; 220KHZ TO 1MHZ AUTOMOTIVE BOOST/SEPIC CONTROLLER; TQFN12-EP                                                                    |            |
| 59     |     1 | U5        | Pref         | 10-NC7WZ07P6X-X    | NC7WZ07P6X                     | FAIRCHILD SEMICONDUCTOR            | NC7WZ07P6X      | IC; BUF; TINY LOGIC ULTRA-HIGH SPEED DUAL BUFFER; SC70-6                                                                                 |            |
| 60     |     1 | PCB       | -            | EPCB20092          | MAX20092                       | MAXIM                              | PCB             | PCB:MAX20092                                                                                                                             |            |
| TOTAL  |   175 |           |              |                    |                                |                                    |                 |                                                                                                                                          |            |

DO NOT PURCHASE(DNP)

ITEM

QTY

REF DES

1

2

3

4

5

6

7

8

TOTAL

2

1

1

1

1

1

8

2

17

PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)

ITEM

TOTAL

QTY

0

REF DES

VAR STATUS

MAXINV

C12, C18

C57

C63

R42

R53

R55

C5, C7, C8, C22, C24,

C25, C29, C30

R9, R17

VAR STATUS

DNP

DNP

DNP

DNP

DNP

DNP

DNP

DNP

MAXINV

20-1000P-CA80

20-0U022-08

20-0120P-E4

80-0010K-A4

80-0002R-24

80-0000R-AA6

N/A

N/A

MFG PART #

CGA3E2C0G2A102J080AA

GRM188R72A223KAC4;

C0603C223K1RAC;

HMK107B7223KA;

C1608X7R2A223K080AA

C0603C121K1GAC

301-10K-RC

CRCW06032R00FN

CRCW06030000Z0

N/A

N/A

MFG PART #

MANUFACTURER

TDK

MURATA;KEMET;

TAIYO YUDEN;TDK

KEMET

XICON

VISHAY DALE

VISHAY DALE

N/A

N/A

MANUFACTURER

1000PF

22000PF

120PF

10K

OPEN

OPEN

VALUE

VALUE

Evaluates: MAX20092

2

0

DESCRIPTION

CAPACITOR; SMT (0603);

CERAMIC CHIP; 1000PF; 100V;

TOL=5%; TG=-55 DEGC TO +125

DEGC; TC=C0G; AUTO

CAPACITOR; SMT (0603);

CERAMIC CHIP; 22000PF; 100V;

TOL=10%; TG=-55 DEGC TO +125

DEGC; TC=X7R

CAPACITOR; SMT (0603);

CERAMIC CHIP; 120PF; 100V;

TOL=10%; MODEL=C0G; TG=-55 DEGC

TO +125 DEGC; TC=+

RESISTOR, 0603, 10K OHM, 5%,

200PPM, 1/16W, THICK FILM

RESISTOR, 0603, 2 OHM, 1%,

100PPM, 0.10W, THICK FILM

RESISTOR; 0603; 0 OHM; 0%;

JUMPER; 0.1W; THICK FILM

CAPACITOR; SMT (0603); OPEN;

FORMFACTOR

RESISTOR; 0603; OPEN;

FORMFACTOR

DESCRIPTION

COMMENTS

COMMENTS

## MAX20092 EV Kit LED Bill of Materials

|   ITEM | QTY REF DES     | MAXINV                            | MFGPART #                | MANUFACTURER              | VALUE          | DESCRIPTION                                                                                |
|--------|-----------------|-----------------------------------|--------------------------|---------------------------|----------------|--------------------------------------------------------------------------------------------|
|      1 | 24 D1-D24       | None OSRAM COMPACT PL KWCELNM1.TG | OSRAM Opto Semiconductor |                           | None           | Oslon Compact PL, KWCELNM1.TG, LED components                                              |
|      2 | 6 J1-J5, J7     | 01-222320414P-22                  | 22-23-2041               | MOLEX                     | 22-23-2041     | CONNECTOR; MALE; THROUGH HOLE; FRICTION LOCK SOLID BODY; STRAIGHT THROUGH; 4PINS           |
|      3 | 1 J6            | 01-PPTC172LJBNRC34P-21            | PPTC172LJBN-RC           | SULLINS ELECTRONICS CORP. | PPTC172LJBN-RC | CONNECTOR; FEMALE; THROUGH HOLE; HEADER; RIGHT ANGLE; 34PINS; -40 DEGC TO +105 DEGC        |
|      4 | 1 J12           | 01-1089734234P-21                 | 10-89-7342               | MOLEX                     | 10-89-7342     | CONNECTOR, TH, MALE, SALES ASSY-HIGH TEMP DUAL ROWWAFER WITH BREAK-OFF OPTION, 34PINS, STR |
|      5 | 8 LED1+, LED2+, | 01-9020BUSS20AWG-00 9020 BUSS     | WEICO                    | WIRE                      | MAXIMPAD       | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG   |
|      6 | 24 R1-R24       | 80-0100K-AA4                      | ERJ3EKF1003              | PANASONIC                 | 100K           | RESISTOR; 0603; 100K OHM; 1%; 100PPM; 0.1W; THICK FILM                                     |
|      7 | 1 PCB           | EPCB                              | MAX                      | MAXIM                     | PCB            | PCB:MAX                                                                                    |

Evaluates: MAX20092

## MAX20092 Evaluation System

## MAX20092 EV Schematic

Figure 5. MAX20092 EV Kit Schematic (1 of 3)

<!-- image -->

Evaluates: MAX20092

## MAX20092 EV Schematic (continued)

Figure 6. MAX20092 EV Kit Schematic (2 of 3)

<!-- image -->

Evaluates: MAX20092

## MAX20092 EV Schematic (continued)

Figure 7. MAX20092 EV Kit Schematic (3 of 3)

<!-- image -->

Evaluates: MAX20092

## MAX20092 Evaluation System

## MAX20092 EV LED Schematic

Figure 8. MAX20092 EV Kit Schematic

<!-- image -->

Evaluates: MAX20092

│

## MAX20092 Evaluation System

## MAX20092 EV PCB Layouts

Figure 9. MAX20092 EV Kit Component PCB Layout-Component Side

<!-- image -->

Figure 10. MAX20092 EV Kit PCB Layout-Top Layer

<!-- image -->

## MAX20092 Evaluation System

## MAX20092 EV PCB Layouts (continued)

Figure 11. MAX20092 EV Kit PCB Layout-Inner Layer 1

<!-- image -->

Figure 12. MAX20092 EV Kit PCB Layout-Inner Layer 2

<!-- image -->

## MAX20092 Evaluation System

## MAX20092 EV PCB Layouts (continued)

Figure 13. MAX20092 EV Kit PCB Layout-Bottom Layer

<!-- image -->

Evaluates: MAX20092

## MAX20092 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/18            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

│

Evaluates: MAX20092