<!-- lastmod 2022-08-03 -->
## MAX25601 Evaluation Kit

## General Description

The MAX25601 evaluation kit (EV kit) provides a proven design to evaluate the MAX25601A/MAX25601C automotive  high-voltage,  high-brightness  LED  (HB  LED)  boostbuck controller. The front-end pre-boost operates from a 7.7V to 18V DC supply voltage, generating a 48V output. The buck supports 12x LEDs and lower, delivering up to 1.5A to one string of LEDs. The total voltage of the string can vary from 3V to 36V.

## Benefits and Features

- Configured for Pre-Boost and Buck Application
- Analog Dimming Control
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX25601A, MAX25601B,

MAX25601C, MAX25601D

## Quick Start

## Required Equipment

- MAX25601 EV kit
- 12V, 5A DC power supply
- A series-connected LED string rated at least 1.5A
- Oscilloscope with a current probe

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on power supply until all connections are made.

- 1) Verify that all jumpers are in their default positions, as shown in Table 1.
- 2) Connect the positive terminal of the 12V supply to the IN PCB pad and the negative terminal to the nearest GND PCB pad.
- 3) Connect the LED string across the LED+ and the nearest GND PCB pad.
- 4) Clip the current probe on the wire connected to the LED string.
- 5) Turn on the DC power supply.
- 6) Verify that the LEDs turn on.
- 7) Verify that the oscilloscope displays approximately 1A.
- 8) Monitor desired signals on headers J6 and J7.

<!-- image -->

## MAX25601 Evaluation Kit

## Detailed Description of Hardware

The MAX25601 evaluation kit (EV kit) provides a proven design to evaluate the MAX25601A/MAX25601C automotive  high-voltage,  high-brightness  LED  (HB  LED)  boostbuck controller. The front-end pre-boost operates from a 7.7V to 18V DC supply voltage, generating a 48V output. The buck supports 12x LEDs and lower, delivering up to 1.5A to one string of LEDs. The total voltage of the string can vary from 3V to 36V.

The combination of the number of LEDs and buck switching frequency determine the required input voltage for the buck, which is the output voltage of the boost. The boost regulator supports a maximum of around 50W of output power, or ~10A when operating down to 6V input.

## Analog Dimming Control (REFI)

The EV kit demonstrates the analog dimming feature of the  buck  controller.  R1  and  R2  form  a  resistor-divider between VCC and AGND. R1 is a 24.9kΩ resistor and R2

## Evaluates: MAX25601A, MAX25601B, MAX25601C, MAX25601D

is a 10kΩ potentiometer, with the wiper shorted to the high side of the potentiometer. Install the shunt on J2(2-3) (see Table 1 for jumper descriptions). Using a flat-blade screwdriver, turn the wiper-adjustment pin clockwise to increase the voltage on the REFI input. Turn the wiper-adjustment pin counterclockwise to decrease the voltage on the REFI input.  The  REFI  input  allows  for  analog  dimming  of  the HB LED string. A REFI input voltage of ≤ 0.2V turns off the LED driver, an input voltage between 0.2V and 1.2V provides  linear  dimming  of  the  HB  LED  string,  and  an input  voltage  &gt;  1.2V  sets  the  HB  LED  string  current  to maximum current (based on the current-sense resistor).

Alternatively, the analog dimming input can be set with a power supply. Remove the shunt on J1 and connect an external  power  supply  directly  to  the  REFI  pin  J7  pin  3 to perform analog dimming with a power supply. Do not violate the absolute maximum voltage rating of VCC+0.3V (refer  to  the  Absolute  Maximum  Ratings  section  in  the MAX25601 IC data sheet).

Table 1. MAX25601 EV Kit Jumper Descriptions

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                                                                                                                                                                       |
|----------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J1       | 1-2*             | Connects DIM to a voltage-divider from VCC to ground. When DIM is above 3V, the buck regulator is fully on at 100% dim duty cycle. When DIM is between 0.2V and 3V, the buck regulator operates at a duty cycle proportional to the DIM voltage, at a frequency of 200Hz. When DIM is below 0.2V, the buck regulator is disabled. |
| J1       | 2-3              | Connects the DIM pin to ground to disable the buck regulator.                                                                                                                                                                                                                                                                     |
| J1       | Open             | Disconnects DIM from the voltage divider. Allows DIM to be driven by an external voltage source or PWM signal to drive the DIM pin.                                                                                                                                                                                               |
| J2       | 1-2              | Connects VCC to the REFI pin. LED current is at the maximum value of 1.5A in this configuration.                                                                                                                                                                                                                                  |
| J2       | 2-3*             | Connects REFI to a voltage-divider from VCC to ground. Adjusting R2 allows programming the LED current from 0 to 1.5A.                                                                                                                                                                                                            |
| J2       | Open             | Disconnects the REFI pin of the device from the external voltage-divider on the VCC pin. Allows REFI to be driven by an external voltage to set the LED current level.                                                                                                                                                            |
| J6       | Open*            | FLTB, RT/SYNCIN and PWM_HUD signals can be accessed.                                                                                                                                                                                                                                                                              |
| J7       | Open*            | PWMDIM, IOUTV, REFI and HUD_OUT signals can be accessed.                                                                                                                                                                                                                                                                          |
| J9       | 1-2              | HUD dimming jumper                                                                                                                                                                                                                                                                                                                |
| J9       | Open*            | Disconnects HUD dimming                                                                                                                                                                                                                                                                                                           |

*Default position.

│

## MAX25601 Evaluation Kit

## Pulse-Dimming Input (DIM)

The EV kit demonstrates the PWM dimming feature of the buck controller using either an external PWM signal, or a DC voltage at the DIM pin.

## Analog-to-PWM dimming:

- 1) Install a shunt across J1 (1-2).
- 2) Adjust the potentiometer R18 to set a DC voltage between 0.2V and 3V on the DIM pin.

The resultant 200Hz PWM dimming duty cycle is proportional to the voltage at DIM.

## Direct PWM dimming:

- 1) Leave J1 open and connect a PWM signal to the DIM pin on J7 pin 1.
- 2) Vary the duty cycle to increase or decrease the intensity of the HB LED string.

The DIM input of the device has a 2V (max) rising threshold and a 0.8V (min) falling threshold and is compatible with 3.3V and 5V logic-level signals.

## Fault Indicator

The EV kit demonstrates the fault-protection features of the buck controller, which offer shorted-LED, open-LED, and  overtemperature  protection.  The  FLT  output  is  an open-drain,  active-low  fault  indicator.  Refer  to  the  FLT Flag  section  in  the  MAX25601  IC  data  sheet  for  more information.

## Current Monitor Output

The  EV  kit  also  demonstrates  the  current-monitor  output  feature  of  the  buck  controller.  Refer  to  the  Current Monitor section in the MAX25601 IC data sheet for more information.

## Table 2. PWM\_HUD Control

| PWM_HUD   | HUD_OUT   | DESCRIPTION                              |
|-----------|-----------|------------------------------------------|
| Low       | High      | External FET on. HUD disabled (LED off). |
| High      | Low       | External FET off. HUD enabled (LED on).  |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX25601EVKIT# | EV Kit |

## Evaluates: MAX25601A, MAX25601B, MAX25601C, MAX25601D

## External VDRV input

The EV kit demonstrates operation of the buck controller with  an  external  VDRV  input.  In  this  case,  the  internal LDO  is  not  used.  Remove  R35  and  apply  an  external power supply between 4.6V and 5.5V on the VDRV PCB pad to allow switching of the device.

## HUD Applications

The  EV  kit  can  also  be  tested  for  HUD  applications. Remove capacitor C19 on the output. The output capacitor  is  now  reduced  to  0.1µF.  Keep  the  DIM  pin  voltage above 3V for 100% operation. The LEDs can be turned on and off extremely fast by applying the PWM signal on the PWM\_HUD pin on J6 pin 3. REFI should have a fixed voltage. The DIM input of the device can be synchronized to the leading edge of the PWM\_HUD signal by AC coupling DIM to PWM\_HUD.

## Additional Boost Regulator Configuration

The boost regulator slope compensation level, load line and integrator operating mode are set by the resistor on DL2 and SYNCOUT as detailed in Table 3 and Table 4 below.

## Table 3. Boost Regulator Slope Selection

| DL2 RESISTOR TO PGND (R32)   | DESCRIPTION                                            |
|------------------------------|--------------------------------------------------------|
| 100kΩ                        | Larger slope comp for boost output voltages above 45V  |
| 30kΩ                         | Smaller slope comp for boost output voltages below 45V |

## Table 4. Boost Regulator Mode Selection

| SYNCOUT RESISTOR TO PGND (R31)   | DESCRIPTION                        |
|----------------------------------|------------------------------------|
| 35kΩ                             | Single-Phase or Dual-Phase Master. |
| 5kΩ                              | Dual-Phase Slave.                  |

│

## MAX25601 EV Kit Bill of Materials

| ITEM   | REF_DES                                        | DNI/DNP   | QTY   | MFG PART #                                                                                      | MANUFACTURER                    | VALUE                           | DESCRIPTION                                                                                                                          | COMMENTS   |
|--------|------------------------------------------------|-----------|-------|-------------------------------------------------------------------------------------------------|---------------------------------|---------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|------------|
| 1      | C3, C7, C8, C10, C18                           | -         | 5     | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA                                         | MURATA;MURATA;TDK               | 0.1UF                           | CAPACITOR; SMT (0603); CERAMIC CHIP;0.1UF; 50V;TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                                       |            |
| 2      | C4, C5, C11-C13, C15                           | -         | 6     | CGA6M3X7S2A475K200AE; CGA6M3X7S2A475K200AB; GCM32DC72A475KE02                                   | TDK;TDK;MURATA                  | 4.7UF                           | CAPACITOR; SMT (1210); CERAMIC CHIP; 4.7UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S; AUTO                                    |            |
| 3      | C6                                             | -         | 1     | C1608X5R1E475K080AC; GRM188R61E475KE11                                                          | TDK;MURATA                      | 4.7UF                           | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 25V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                            |            |
| 4      | C9                                             | -         | 1     | C0603X7R500103JNP; C0603C103J5RAC                                                               | VENKEL LTD;KEMET                | 0.01UF                          | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 50V; TOL=5%; MODEL=X7R; TG=-55 DEGC TO +125 DEGC; TC=+/                                 |            |
| 5      | C14, C27                                       | -         | 2     | CGA3E2X7R2A103K; C0603C103K1RA; GRM188R72A103KA01                                               | TDK;KEMET;MURATA                | 0.01UF                          | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 100V; TOL=10%; MODEL=X7R; TG=-55 DEGC TO +125 DEGC; TC= USE 20-00u01-M8                 |            |
| 6      | C16                                            | -         | 1     | 06035A471JAT2A                                                                                  | AVX                             | 470PF                           | CAPACITOR; SMT (0603); CERAMIC CHIP; 470PF; 50V; TOL=5%; MODEL=C0G; TG=-55 DEGC TO +125 DEGC; TC=+/                                  |            |
| 7      | C19                                            | -         | 1     | GRM31CR72A105KA01; C3216X7R2A105K160AA; GCH31CR72A105KE01; HMK316B7105KLH                       | MURATA;TDK;MURATA; TAIYO YUDEN  | 1UF                             | CAPACITOR; SMT; 1206; CERAMIC; 1uF; 100V; 10%; X7R; -55 DEGC TO +125 DEGC                                                            |            |
| 8      | C20                                            | -         | 1     | C0805C104K1RAC; C2012X7R2A104K125AA; GCM21BR72A104KA37; GRM21BR72A104KAC4; CGA4J2X7R2A104K125AA | KEMET;TDK;MURATA; MURATA;TDK    | 0.1UF                           | CAPACITOR; SMT (0805); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                          |            |
| 9      | C22                                            | -         | 1     | C0603C223K5RAC; GRM188R71H223K; C1608X7R1H223K080AA; GCJ188R71H223KA01                          | KEMET;MURATA;TDK; MURATA        | 0.022UF                         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.022UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                         |            |
| 10     | C23, C66                                       | -         | 2     | EEE-TG2A220UP                                                                                   | PANASONIC                       | 22UF                            | CAPACITOR; SMT (CASE_F); ALUMINUM-ELECTROLYTIC; 22UF; 100V; TOL=20%; MODEL=TG SERIES; TG=-40 DEGC TO +125 DEGC                       |            |
| 11     | C25                                            | -         | 1     | C1608X5R1A106K080AC                                                                             | TDK                             | 10UF                            | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R                                     |            |
| 12     | C26                                            | -         | 1     | C0603C222K1RAC                                                                                  | KEMET                           | 2200PF                          | CAPACITOR; SMT (0603); CERAMIC CHIP; 2200PF; 100V; TOL=10%; MODEL=X7R; TG=-55 DEGC TO +125 DEGC; TC=                                 |            |
| 13     | C30                                            | -         | 1     | CGA3E3X7S2A104K080AB; C1608X7S2A104K080AB UMK107BJ105KA;                                        | TDK;TDK                         | 0.1UF                           | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7S                                          |            |
| 14     | C64                                            | -         | 1     | C1608X5R1H105K080AB; CL10A105KB8NNN; GRM188R61H105KAAL                                          | TAIYO YUDEN;TDK; SAMSUNG;MURATA | 1UF                             | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 50V; TOL=10%; MODEL=_MK SERIES; TG=-55 DEGC TO +85 DEGC                                    |            |
| 15     | D1                                             | -         | 1     | DFLS1100-7                                                                                      | DIODES INCORPORATED             | DFLS1100-7                      | DIODE; SCHOTTKY; SMT; PIV=100V; IF=1A                                                                                                |            |
| 16 17  | D2, D4, D6-D8 D3, D5                           | - -       | 5 2   | 1N4148WS-7 BAT46WJ                                                                              | DIODES INCORPORATED NXP         | 1N4148WS-7-F BAT46WJ,115        | DIODE; SWT; SMT (SOD-323); PIV=75V; IF=0.3A DIODE; SCH; SMT (SOD-323F); PIV=100V; IF=0.25A                                           |            |
| 18     | FB, UVEN                                       | -         | 2     | 5000                                                                                            | KEYSTONE                        | N/A                             | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                     |            |
| 19     | GND1-GND4, HUD_DIM, IN, LED+, VDRV, VOUT_BOOST | -         | 9     | 9020 BUSS                                                                                       | WEICO WIRE                      | MAXIMPAD                        | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWNBUS TYPE-S; 20AWG                                              |            |
| 20     | J1, J2                                         | -         | 2     | PCC03SAAN                                                                                       | SULLINS                         | PCC03SAAN                       | CONNECTOR; MALE; THROUGHHOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                              |            |
| 21     | J6                                             | -         | 1     | PBC03SAAN                                                                                       | SULLINS                         | PBC03SAAN                       | CONNECTOR; MALE; THROUGHHOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                                                      |            |
| 22     | J7                                             | -         | 1     | PBC04SAAN                                                                                       | SULLINS ELECTRONICS CORP.       | PBC04SAAN                       | CONNECTOR; MALE; THROUGHHOLE; BREAKAWAY; STRAIGHT; 4PINS; -65 DEGC TO +125 DEGC                                                      |            |
| 23     | J9                                             | -         | 1     | PCC02SAAN                                                                                       | SULLINS                         |                                 | CONNECTOR; MALE; THROUGHHOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                              |            |
| 24     | L1                                             | -         | 1     | MSS1278-103ML                                                                                   | COILCRAFT                       | PCC02SAAN 10UH                  | INDUCTOR; SMT; FERRITE CORE; 10UH;TOL=+/-20%; 5.7A                                                                                   |            |
| 25     | L3                                             | -         | 1     | MSS1278-104ML                                                                                   | COILCRAFT                       | 100UH                           | INDUCTOR; SMT; FERRITE CORE; 100UH;TOL=+/-20%; 1.5A                                                                                  |            |
| 26     | MH1-MH4                                        | -         | 4     | 9032                                                                                            | KEYSTONE                        | 9032                            | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                            |            |
| 27     | Q1, Q2                                         | -         | 2     | SQJA60EP-T1_GE3                                                                                 | VISHAY SILICONIX                |                                 | TRAN; NCH; SO-8L; PD-(45W); I-(30A); V-(60V)                                                                                         |            |
| 28     | Q3, Q5                                         | -         | 2     | SQJ158EP-T1_GE3                                                                                 | VISHAY SILICONIX                | SQJA60EP-T1_GE3 SQJ158EP-T1_GE3 | TRAN; NCH; SO-8L; PD-(45W); I-(23A); V-(60V)                                                                                         |            |
| 29     | Q4                                             | -         | 1     | SQSA80ENW-T1-GE3                                                                                | VISHAY SILICONIX                | SQSA80ENW-T1-GE3                | TRAN; AUTOMOTIVE N-CHANNEL 80V 175DEGC MOSFET; NCH; POWERPAK1212-8; PD-(62.5W); I-(18A); V-(80V)                                     |            |
| 30     | R1, R11                                        | -         | 2     | CRCW060324K9FK; ERJ-3EKF2492                                                                    | VISHAY DALE;PANASONIC           | 24.9K                           | RESISTOR; 0603; 24.9K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                             |            |
|        | R2, R18                                        | -         | 2     | 3296W-1-103LF                                                                                   | BOURNS                          | 10K                             | RESISTOR; THROUGH-HOLE-RADIAL LEAD; 3296 SERIES; 10K OHM; 10%; 100PPM; 0.5W; SQUARE TRIMMING POTENTIOMETER; 25 TURNS; MOLDER CERAMIC |            |
| 31     |                                                |           |       |                                                                                                 |                                 |                                 | OVER METAL FILM                                                                                                                      |            |

## MAX25601 EV Kit Bill of Materials (continued)

| ITEM 32   | REF_DES R3             | DNI/DNP -   |   QTY 1 | MFG PART # ERJ-3EKF6492                                                            | MANUFACTURER PANASONIC                 | VALUE 64.9K   | DESCRIPTION RES; SMT (0603); 64.9K; 1%; +/-100PPM/DEGC; 0.1W                                                                             | COMMENTS   |
|-----------|------------------------|-------------|---------|------------------------------------------------------------------------------------|----------------------------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 33        | R4                     | -           |       1 | ERJ-3EKF1242                                                                       | PANASONIC                              | 12.4K         | RESISTOR; 0603; 12.4K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                 |            |
| 34        | R5, R17, R32           | -           |       3 | CRCW0603100KFK; RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL | VISHAY DALE;YAGEO; YAGEO;PANASONIC     | 100K          | RESISTOR; 0603; 100K; 1%; 100PPM; 0.10W; THICK FILM                                                                                      |            |
| 35        | R6                     | -           |       1 | CRCW060330K0FK                                                                     | VISHAY DALE                            | 30K           | RESISTOR; 0603; 30K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                   |            |
| 36        | R7, R35                | -           |       2 | ERJ-P03F10R0V                                                                      | PANASONIC                              | 10            | RESISTOR; 0603; 10 OHM; 1%; 200PPM;                                                                                                      |            |
| 37        | R8                     | -           |       1 | CSR1206-0R007F1                                                                    | RIEDON INC.                            | 0.007         | 0.20W; THICK FILM RES; SMT (1206); 0.007; 1%; +/-50PPM/DEGC; 1W                                                                          |            |
| 38        | R9                     | -           |       1 | ERJ-8BSFR15                                                                        | PANASONIC                              | 0.15          | RES; SMT (1206); 0.15; 1%; +/-250PPM/DEGC; 0.5W                                                                                          |            |
| 39        | R10                    | -           |       1 | CRCW0603422KFK                                                                     | VISHAY DALE                            | 422K          | RESISTOR, 0603, 422K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                                  |            |
| 40        | R12, R21               | -           |       2 | CRCW060310K0FK; ERJ-3EKF1002                                                       | VISHAY DALE;PANASONIC                  | 10K           | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                                       |            |
| 41        | R13                    | -           |       1 | CRCW06034K99FK; ERJ-3EKF4991                                                       | VISHAY DALE;PANASONIC                  | 4.99K         | RESISTOR; 0603; 4.99K; 1%; 100PPM; 0.10W; THICK FILM                                                                                     |            |
| 42        | R14, R15, R27-R29, R40 | -           |       6 | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL                                     | SAMSUNG ELECTRONICS; BOURNS;YAGEO PH   | 0             | RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM                                                                                     |            |
| 43        | R16, R22               | -           |       2 | ERJ-3RQF3R3V                                                                       | PANASONIC                              | 3.3           | RESISTOR, 0603, 3.3 OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                                   |            |
| 44        | R19                    | -           |       1 | CRCW0603470KFK                                                                     | VISHAY DALE                            | 470K          | RESISTOR, 0603, 470K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                                  |            |
| 45        | R23                    | -           |       1 | CRCW06031M00JN                                                                     | VISHAY DALE                            | 1M            | RESISTOR; 0603; 1MOHM; 5%; 200PPM; 0.10W; METAL FILM                                                                                     |            |
| 46        | R24, R25               | -           |       2 | CRCW06030000Z0                                                                     | VISHAY DALE                            | 0             | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.1W; THICK FILM                                                                                      |            |
| 47        | R26, R33, R34          | -           |       3 | CRCW0603100RFK; ERJ-3EKF1000; RC0603FR-07100RL                                     | VISHAY DALE;PANASONIC                  | 100           | RESISTOR; 0603; 100 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                   |            |
| 48        | R31                    | -           |       1 | ERJ-3EKF3482                                                                       | PANASONIC                              | 34.8K         | RESISTOR; 0603; 34.8K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                  |            |
| 49        | SU1, SU2, SU5          | -           |       3 | S1100-B;SX1100-B; STC02SYAN                                                        | KYCON;KYCON; SULLINS ELECTRONICS CORP. | SX1100-B      | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                  |            |
| 50        | TP1                    | -           |       1 | 7006                                                                               | KEYSTONE                               | 7006          | CONNECTOR; PANELMOUNT; BINDING POST; STRAIGHT THROUGH; 1PIN; RED                                                                         |            |
| 51        | TP2                    | -           |       1 | 7007                                                                               | KEYSTONE                               | 7007          | CONNECTOR; PANELMOUNT; BINDING POST; STRAIGHT THROUGH; 1PIN; BLACK EVKIT PART - IC; MAX25601; SYNCHRONOUS                                |            |
| 52        | U1                     | -           |       1 | MAX25601AATJ+                                                                      | MAXIM                                  | MAX25601AATJ+ | BOOST AND SYNCHRONOUS BUCK LED CONTROLLER TQFN32-EP; PACKAGE CODE T3255Y+6C; PACKAGE OUTLINE: 21-100041; PACKAGE LAND PATTERN: 90-100066 |            |
| 53        | PCB                    | -           |       1 | MAX25601                                                                           | MAXIM                                  | PCB           | PCB:MAX25601                                                                                                                             | -          |
| 54        | C1, C17                | DNP         |       0 | GRM1885C1H102JA01; C1608C0G1H102J080AA; GCM1885C1H102JA16                          | MURATA;TDK;MURATA                      | 1000PF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC                                                       |            |
| 55        | C2                     | DNP         |       0 | C0603X7R500103JNP; C0603C103J5RAC                                                  | VENKEL LTD;KEMET                       | 0.01UF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 50V; TOL=5%; MODEL=X7R; TG=-55 DEGC TO +125 DEGC; TC=+/                                     |            |
| 56        | C21, C24, C29          | DNP         |       0 | GRM1885C1H102FA01                                                                  | MURATA                                 | 1000PF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 50V; TOL=1%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=C0G                             |            |
| 57        | C28                    | DNP         |       0 | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA                            | MURATA;MURATA;TDK                      | 0.1UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                                         |            |
| 58        | C31                    | DNP         |       0 | C0603C101K1GAC                                                                     | KEMET                                  | 100PF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 100PF; 100V; TOL=10%; MODEL=C0G; TG=-55 DEGC TO +125 DEGC; TC=+                                     |            |
| 59        | C32, C53, C68, C69     | DNP         |       0 | C0603C332K1RAC                                                                     | KEMET                                  | 3300PF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 3300PF; 100V; TOL=10%; MODEL=X7R; TG=-55 DEGC TO +125 DEGC; TC=                                     |            |
| 60        | R20                    | DNP         |       0 | CRCW06031M00JN                                                                     | VISHAY DALE                            | 1M            | RESISTOR; 0603; 1MOHM; 5%; 200PPM; 0.10W; METAL FILM                                                                                     |            |
| 61        | R30, R79               | DNP         |       0 | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL                                     | SAMSUNG ELECTRONICS; BOURNS;YAGEO PH   | 0             | RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM                                                                                     |            |
| 62        | R36                    | DNP         |       0 | CSR1206-0R007F1                                                                    | RIEDON INC.                            | 0.007         | RES; SMT (1206); 0.007; 1%; +/-50PPM/DEGC; 1W                                                                                            |            |
| 63        | R37-R39, R61           |             |       0 | CRCW12062R00FK                                                                     |                                        |               | RESISTOR, 1206, 2OHMS, 1%, 100PPM, 0.25W, THICK FILM                                                                                     |            |
| TOTAL     |                        | DNP         |     101 |                                                                                    | VISHAY DALE                            | 2             |                                                                                                                                          |            |

## MAX25601 EV Kit Schematic

<!-- image -->

## MAX25601 Evaluation Kit

## MAX25601 EV Kit PCB Layout Diagrams

MAX25601 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX25601 EV Kit PCB Layout-Internal2

<!-- image -->

Evaluates: MAX25601A, MAX25601B,

MAX25601C, MAX25601D

MAX25601 EV Kit PCB Layout-Top View

<!-- image -->

MAX25601 EV Kit PCB Layout-Internal3

<!-- image -->

│

Evaluates: MAX25601A, MAX25601B,

## MAX25601 EV Kit PCB Layout Diagrams (continued)

MAX25601 EV Kit PCB Layout-Bottom View

<!-- image -->

MAX25601 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## MAX25601 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                      | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------|-----------------|
|                 0 | 10/19           | Initial release                                  | -               |
|                 1 | 3/20            | Added MAX25601C to evaluated parts               | 1-9             |
|                 2 | 7/20            | Added MAX25601B and MAX25601D to evaluated parts | 1-9             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0axim Integrated reserves the right to change the circuitr\ and specifications without notice at an\ time.

│

Evaluates: MAX25601A, MAX25601B,

MAX25601C, MAX25601D