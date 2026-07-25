<!-- lastmod 2022-08-02 -->
## MAX22520 Evaluation Kit

## General Description

The MAX22520 evaluation kit (EV kit) is a fully assembled and  tested  circuit  board  that  evaluates  the  MAX22520 OTP programmable digital output (DO).

The EV kit includes Windows ® -compatible software that provides  a  graphical  user  interface  (GUI)  for  exercising the test and programming features of the MAX22520. The EV kit is connected to a PC through a USB-A-to-micro-B cable.

## Features

- OTP Progammable Digital Output (DO)
- 1-Wire Interface Terminals
- Windows 10-Compatible Software
- USB-PC Connection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Windows is registered trademark of Microsoft Corporation.

Evaluates: MAX22520

## Quick Start

## Recommended Equipment

- MAX22520 EV kit (USB-A-to-micro-B cable included)
- User-supplied Windows 10 PC with a spare USB port
- 24V, 1A DC power supply
- Two multimeters/voltmeters

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation before exercising the full features of the device:

- 1) Visit www.maximintegrated.com/evkitsoftware to download  the  latest  version  of  the  EV  kit  software, MAX22520EVKITSetupVx.xx.ZIP . Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install  the  EV  kit  software  and  USB  driver  on  your computer by running the MAX22520EVKITSetupVx. xx.EXE program  inside  the  temporary  folder.  The program files are copied to your PC and icons are created in the Windows Start | Programs | Maxim Integrated menu. During software installation, some versions of Windows can show a warning message indicating  that  this  software  is  from  an  unknown publisher.  This  is  not  an  error  condition  and  it  is safe to proceed with installation. Administrator privileges  are  required  to  install  the  USB  device  driver on Windows.

<!-- image -->

- 3) Verify  that  all  the  jumpers  are  in  their  default  positions, as shown in Table 1.
- 4) Connect one multimeter to the VCC testpoint (TP1).
- 5) Connect the other multimeter to the VLDO testpoint (TP2).
- 6) Connect the USB cable from the PC to the EV kit board. A Windows message appears when connecting the EV kit.
- 7) Start the EV kit software by opening its icon in the Windows Start  |  Programs  |  Maxim  Integrated menu.
- 8) Click  on  the Device menu  and  select Connect to connect to the board. Verify that Status: MAX22520 EV Kit Connected is displayed on the status bar at the bottom right of the main window (Figure 1). Note that  the  voltage  on  the  VCC  test  point  is  0V  (typ) when the board is connected.
- 9) Select the Test Mode radio button and click on the Enter Test Mode button to set the device into test mode. On-board LEDs turn off and on as the device enters  test  mode.  The  VCC  test  point  is  14.8V (typ) when the device is in test mode and ready for evaluation.  Verify  that OTP Ready for  Test  Mode Evaluation is  displayed  in  the  bottom  right  of  the main window.
- 10) Default  register  values  are  unknown  in  test  mode when  OTP  is  not  programmed.  Select  the 3.3V radio button in the VLDO box and click on the Write Registers button.  Verify  that  the  voltage  on  the VLDO test point is 3.3V (typ).
- 11)  Select the 5V radio button in the VLDO box and click on the Write Registers button. Verify that the voltage on the VLDO test point changes to 5V (typ).

## Detailed Description of Software

## Configuring the Registers in Test Mode

Once the EV kit is connected, select Test Mode to access the  MAX22520  in  OTP  test  mode.  The  EV  kit  software provides two ways to access the OTP registers when the device is in test mode: the OTP tab and the Registers tab.

In  the OTP tab  (Figure  1),  use  the  drop-down  menus, counters, and radio buttons to enable/disable functionality and  set  desired  thresholds.  Press  the Write  Registers button to write values to all of the registers in both OTP

1-Wire is a registered trademark of Maxim Integrated Products, Inc..

banks (C1 and C2). Press the Read Registers button to read all registers in both banks.

The Registers tab  includes  a  tabular  listing  of  available reigsters and bits (Figure 2). Click on a register name in the left register table to access the individual bits in that register. When the register name is selected in the register table, the right register table shows the individual bits for that register. Click on the drop-down menu next to each bit in the lower table to select the bit setting. When all of the bits are set as desired, click on the Write Registers button to write the selected bit settings to the OTP registers.

## Burn Mode

Select Burn  Mode in  the Mode  Select box  after  the MAX22520 has entered test mode and the desired register values have been written to the device. Click on the Verify Burn Ready button  to  verify  that  the  C1  and  C2 banks are ready for OTP burn. Once the GUI has verified that the MAX22520 is ready to program, click on the OTP Bank 1 Burn or OTP Bank 2 Burn button to program the desired OTP registers.

Note that  Bank  C1  and  Bank  C2  must  be  programmed separately. After a bank is programmed, the VCC voltage on the MAX22520 EV kit drops to 0V and the part must be accessed in test mode again. Repeat the burn process for the unprogrammed bank.

## Detailed Description of Hardware

The  MAX22520  EV  kit  includes  the  MAX22520  OTP programmable digital output (DO) and the external components for writing to and evaluating the device. All logiclevel  I/Os  and  the  digital  output  are  available  on  yellow test points.

## 1-Wire Interface

The MAX22520 is 1-Wire OTP programmable using the VCC, DO, and GND pins. The MAX22520 EV kit uses the FT2232 USB-to-I 2 C transceiver to communicate with the PC and the DS2484 1-Wire master to communicate with the MAX22520.

Close the J2 and J3 jumpers on the MAX22520 EV kit for 1-Wire communication with the MAX22520. Remove the shunts on J2 and J3 to evaluate the part after the part has been programmed and the Exit Test Mode button on the GUI has been pressed, or after OTP programming.

## MAX22520 Evaluation Kit

## Power

## On-Board Power Supplies

The  MAX22520  EV  kit  includes  the  power  circuitry required  to  evaluate  the  device  in  test  mode  and  for programming the OTP registers. Close the J3 jumper to power the MAX22520 using the on-board supplies.

The MAX8880 low-dropout linear regulator generates the 4V (typ) needed to enter test mode. After the Enter Test Mode button is pressed, the MAX22520 is connected to this supply.

The MAX17062 DC-DC circuit generates 15V (typ). The VCC input of the MAX22520 is connected to this voltage after the device has successfully entered test mode.

## Evaluating the EV Kit with an External Supply

To evaluate the MAX22520 in test mode with a V CC  voltage other than 15V use the on-board power circuitry to set the device in test mode. After the IC is in test mode, set an external power supply to 15V and connect it to the open J3 jumper and change the voltage of the external supply to the desired V CC  voltage.

Evaluates: MAX22520

Click on the Exit Test Mode button  and remove the J2 jumper to evaluate DO functionality after the OTP registers have been programmed.

## Digipot (RT, WP, RB)

The  MAX22520  features  an  integrated  digipot.  Place  a shunt on the J4 jumper to connect RT to V LDO . Place a shunt on the J8 jumper to connect RB to ground. Remove the shunts on J4 and J8 to connect RT and RB to other voltages, respectively. Ensure that V RT  &gt; V RB  and V RT ≤ V LDO when using external voltages for the digipot.

## Open-Drain Logic Outputs (LO1, LO2, LO3)

The  MAX22520  includes  three  configurable  open-drain logic outputs, LO1, LO2, and LO3. Each logic output on the EV kit is connected to a current-limiting resistor and LED for visual feedback. Program the logic outputs (LO\_) by selecting the required function from a drop-down menu (LO1  and  LO2),  or  selecting  the  desired  radio  button (LO3).  Click  on  the Write  Registers button  to  program the OTP regsiters in the GUI.

Figure 1. MAX22520 EV Kit Software, EV Kit is Connected

<!-- image -->

│

Figure 2. MAX22520 EV Kit Software, Interrupt Received

<!-- image -->

## Table 1. Jumper Descriptions

| JUMPER   | SHUNT POSITON   | DESCRIPTION                                                                                               |
|----------|-----------------|-----------------------------------------------------------------------------------------------------------|
| J2       | Open            | The on-board 1-Wire transceiver is not connected to DO.                                                   |
| J2       | Closed*         | The on-board 1-Wire transceiver is connected to DO. Use this configuration to access OTP registers.       |
| J3       | Open            | The MAX22520 is not connected to the on-board power supplies.                                             |
| J3       | Closed*         | The MAX22520 is connected to the on-board power supplies. Use this configuration to access OTP registers. |
| J4       | Open            | RT is not connected to V LDO .                                                                            |
| J4       | Closed*         | RT is connected to V LDO .                                                                                |
| J5       | Open*           | REGEN is unconnected.                                                                                     |
| J5       | Closed          | REGEN is connected to ground.                                                                             |
| J6       | Open            | AIN is not connected to the on-board potentiometer (R21).                                                 |
| J6       | Closed*         | AIN is connected to the on-board potentiometer (R21).                                                     |
| J7       | Open*           | DO is not connected to an LED.                                                                            |
| J7       | Closed          | DO is connected to an LED.                                                                                |
| J8       | Open            | RB is not connected to ground.                                                                            |
| J8       | Closed*         | RB is connected to ground.                                                                                |
| J11      | Open*           | PWM output is not connected to an LED.                                                                    |
| J11      | Closed          | PWM output is connected to an LED.                                                                        |

Evaluates: MAX22520

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX22520EVKIT# | EV Kit |

#Denotes RoHS-compliance.

## MAX22520 EV Kit Bill of Materials

|   ITEM | REF_DES                                         | DNI/DNP   |   QTY | MFG PART #                                                                                                                                  | MANUFACTURER                                   | VALUE   | DESCRIPTION                                                                                                   |
|--------|-------------------------------------------------|-----------|-------|---------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|---------|---------------------------------------------------------------------------------------------------------------|
|      1 | C1                                              | -         |     1 | NMC0402X7R103K16TRP; GRM155R71C103KA01; CC0402KRX7R7BB103; C0402C103K4RACAUTO                                                               | NIC COMPONENTS CORP.; MURATA;YAGEO; KEMET      | 0.01UF  | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 16V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R           |
|      2 | C2, C5, C6, C8, C9, C12, C15-C18, C24, C38, C39 | -         |    13 | C0402C104J4RAC; GCM155R71C104JA55                                                                                                           | KEMET;MURATA                                   | 0.1UF   | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 16V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R             |
|      3 | C3                                              | -         |     1 | CL21A106KOQNNN; GRM21BR61C106KE15; EMK212ABJ106KD                                                                                           | SAMSUNG ELECTRONICS; MURATA;TAIYO YUDEN        | 10UF    | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 16V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                      |
|      4 | C4                                              | -         |     1 | C0805C226M9PAC; GRM21BR60J226ME39; JMK212BJ226MG; CL21A226MQCLQN                                                                            | KEMET;MURATA; TAIYO YUDEN; SAMSUNG EL          | 22UF    | CAPACITOR; SMT (0805); CERAMIC CHIP; 22UF; 6.3V; TOL=20%; TG=-55 DEGC TO +125 DEGC; TC=X5R                    |
|      5 | C7, C13, C14                                    | -         |     3 | C1005X5R1A475K050                                                                                                                           | TDK                                            | 4.7UF   | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 10V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                     |
|      6 | C10, C11                                        | -         |     2 | C1005C0G1H330J050BA; GRM1555C1H330JA01                                                                                                      | TDK;MURATA                                     | 33PF    | CAPACITOR; SMT; 0402; CERAMIC; 33pF; 50V; 5%; C0G; - 55degC to + 125degC; 0 +/- 30PPM/degC                    |
|      7 | C19, C20, C28                                   | -         |     3 | C0603C475K8PAC; LMK107BJ475KA;CGB3B1X5R1A4 75K;C1608X5R1A475K080AC;CL1 0A475KP8NNN                                                          | KEMET;TAIYO YUDEN;TDK; TDK;SAMSUNG ELECTRONICS | 4.7UF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 10V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                     |
|      8 | C21, C22, C30, C32                              | -         |     4 | C0603C105K4RAC; GRM188R71C105KA12;C1608X7R 1C105K080AC;EMK107B7105KA; GCM188R71C105KA64;CGA3E1X 7R1C105K080AC                               | KEMET;MURATA;TDK; TAIYO YUDEN;MURATA;TDK       | 1UF     | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 16V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R              |
|      9 | C23                                             | -         |     1 | EMK107BJ333KA                                                                                                                               | TAIYO YUDEN                                    | 0.033UF | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.033UF; 16V; TOL=10%; MODEL=M SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R   |
|     10 | C25, C26                                        | -         |     2 | C1608X5R1E106M080AC; CL10A106MA8NRNC;GRM188R61 E106MA73;ZRB18AR61E106ME01 ;GRT188R61E106ME13                                                | TDK;SAMSUNG ELECTRONICS; MURATA;;MURATA        | 10UF    | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 25V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                      |
|     11 | C27                                             | -         |     1 | C0402C561K5GAC                                                                                                                              | KEMET                                          | 560PF   | CAPACITOR; SMT (0402); CERAMIC CHIP; 560PF; 50V; TOL=10%; MODEL=C0G; TG=-55 DEGC TO +125 DEGC; TC=+/          |
|     12 | C29, C31                                        | -         |     2 | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA                                                                                     | MURATA;MURATA;TDK                              | 0.1UF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO              |
|     13 | C33                                             | -         |     1 | C0603C102K5RAC; GRM188R71H102KA01; C0603X7R500-102KNE                                                                                       | KEMET;MURATA;VENKEL                            | 1000PF  | CAPACITOR; SMT; 0603; CERAMIC; 1000pF; 50V; 10%; X7R; - 55degC to + 125degC; +/-15% from - 55degC to +125degC |
|     14 | C34                                             | -         |     1 | CGA2B3X7R1H104K050BB; C1005X7R1H104K050BB;GRM155 R71H104KE14;GCM155R71H104K E02;C1005X7R1H104K050BE;UM K105B7104KV- FR;CGA2B3X7R1H104K050BE | TDK;TDK;MURATA; MURATA;TDK;TAIYO YUDEN;TDK     | 0.1UF   | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                    |
|     15 | C35                                             | -         |     1 | C0402C105K8PAC; CC0402KRX5R6BB105                                                                                                           | KEMET;YAGEO                                    | 1UF     | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 10V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                       |
|     16 | C37                                             | -         |     1 | GRM1885C1H102JA01; C1608C0G1H102J080AA; GCM1885C1H102JA16                                                                                   | MURATA;TDK;MURATA                              | 1000PF  | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC                            |
|     17 | D1                                              | -         |     1 | CMS03                                                                                                                                       | TOSHIBA                                        | CMS03   | DIODE; SCH; SCHOTTKY BARRIER RECTIFIER; 3-4E1A; PIV=30V; IF=3A; -40 DEGC TO +150 DEGC                         |
|     18 | D2                                              | -         |     1 | PLVA650A                                                                                                                                    | NXP                                            | 5V      | DIODE; ZNR; SMT (SOT-23); VZ=5V; IZ=0.00025A; PD=0.25W                                                        |

## Evaluates: MAX22520

## MAX22520 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES         | DNI/DNP   |   QTY | MFG PART #                                     | MANUFACTURER                         | VALUE           | DESCRIPTION                                                                                           |
|--------|-----------------|-----------|-------|------------------------------------------------|--------------------------------------|-----------------|-------------------------------------------------------------------------------------------------------|
|     19 | D3              | -         |     1 | MBR230S1F-7                                    | DIODES INCORPORATED                  | MBR230S1F-7     | DIODE; RECT; SMT (SOD-123F); PIV=30V; IF=2A                                                           |
|     20 | DS1-DS6         | -         |     6 | LY L29K-J1K2-26                                | OSRAM                                | LY L29K-J1K2-26 | DIODE; LED; SMARTLED; GREEN; SMT (0603); VF=1.8V; IF=0.002A                                           |
|     21 | J1              | -         |     1 | 105017-0001                                    | MOLEX                                | 105017-0001     | CONNECTOR; FEMALE; SMT; MICRO-USB B RECEPTACLE; RIGHT ANGLE; 5PINS                                    |
|     22 | J2-J8, J11      | -         |     8 | TSW-102-07-T-S                                 | SAMTEC                               | TSW-102-07-T-S  | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +105 DEGC               |
|     23 | J9              | -         |     1 | 1727010                                        | PHOENIX CONTACT                      | 1727010         | CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; RIGHT ANGLE; 2PINS                             |
|     24 | L1              | -         |     1 | BLM21AG601SN1                                  | MURATA                               | 600             | INDUCTOR; SMT (0805); FERRITE-BEAD; 600; TOL=+/-25%; 0.2A                                             |
|     25 | L2              | -         |     1 | 1008CS-272XJL                                  | COILCRAFT                            | 2700NH          | INDUCTOR; SMT (1008); CERAMIC CHIP; 2700NH; TOL=+/-5%; 0.29A; -40 DEGC TO +125 DEGC                   |
|     26 | L3, L4          | -         |     2 | BLM21PG331SN1                                  | MURATA                               | 330             | INDUCTOR; SMT (0805); FERRITE-BEAD; 330; TOL=+/-25%; 1.5A                                             |
|     27 | L5              | -         |     1 | B82432T1332K000                                | TDK                                  | 3.3UH           | INDUCTOR; SMT (1812); FERRITE CORE; 3.3UH; TOL=+/-10%; 0.9A                                           |
|     28 | MISC1           | -         |     1 | 68784-0001                                     | MOLEX                                | 68784-0001      | CONNECTOR; MALE; USB; USB A PLUG TO MICRO B PLUG CABLE ASSY; STRAIGHT; 4PINS-                         |
|     29 | R1, R5, R25-R27 | -         |     5 | CRCW040210K0FK; RC0402FR-0710KL                | VISHAY DALE; YAGEO PHICOMP           | 10K             | 5PINS RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                            |
|     30 | R2              | -         |     1 | CRCW04022K20FK; RC0402FR-072K2L                | VISHAY DALE; YAGEO PHICOMP           | 2.2K            | RESISTOR, 0402, 2.2K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                             |
|     31 | R3, R4          | -         |     2 | ERJ-2RKF27R0X; RC0402FR-0727RL; CRCW040227R0FK | PANASONIC; YAGEO PHICOMP;VISHAY DALE | 27              | RESISTOR, 0402, 27 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                               |
|     32 | R6              | -         |     1 | CRCW040215K0FK                                 | VISHAY DALE                          | 15K             | RESISTOR; 0402; 15K; 1%; 100PPM; 0.0625W; THICK FILM                                                  |
|     33 | R7              | -         |     1 | ERJ-2RKF1202                                   | PANASONIC                            | 12K             | RESISTOR; 0402; 12K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                 |
|     34 | R8              | -         |     1 | CRCW060310R0FK; MCR03EZPFX10R0; ERJ-3EKF10R0   | VISHAY DALE;ROHM                     | 10              | RESISTOR; 0603; 10 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                 |
|     35 | R9, R10         | -         |     2 | CRCW06034K70FK                                 | VISHAY DALE                          | 4.7K            | RESISTOR; 0603; 4.7K; 1%; 100PPM; 0.10W; THICK FILM                                                   |
|     36 | R11             | -         |     1 | RK73H1ETTP1204F                                | KOA SPEER ELECTRONICS INC.           | 1.2M            | RESISTOR, 0402, 1.2M OHM, 1%, 100PPM, 0.0625W, THICK FILM                                             |
|     37 | R12             | -         |     1 | CRCW040247K0FK                                 | VISHAY DALE                          | 47K             | RESISTOR, 0402, 47K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                              |
|     38 | R13             | -         |     1 | CRCW04022M70FK                                 | VISHAY DALE                          | 2.7M            | RESISTOR, 0402, 2.7M OHM, 1%, 100PPM, 0.0625W, THICK FILM                                             |
|     39 | R15             | -         |     1 | CRCW040220K0FK                                 | VISHAY DALE                          | 20K             | RESISTOR; 0402; 20K OHM; 1%; 100PPM; 0.063W; THICK FILM                                               |
|     40 | R16             | -         |     1 | ERJ-2RKF2203                                   | PANASONIC                            | 220K            | RESISTOR; 0402; 220K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                |
|     41 | R17-R20, R29    | -         |     5 | ERJ-2RKF5600                                   | PANASONIC                            | 560             | RESISTOR, 0402, 560 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                              |
|     42 | R21             | -         |     1 | 3361P-1-103GLF                                 | BOURNS                               | 10K             | RESISTOR; SMT GULL-LEAD; 3361P SERIES; 10K OHM; 10%; 100PPM; 0.5W                                     |
|     43 | R22             | -         |     1 | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00     | VISHAY DALE;ROHM; PANASONIC          |                 | 0 RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                |
|     44 | R23             | -         |     1 | ERJ-3GEYJ242                                   | PANASONIC                            | 2.4K            | RESISTOR; 0603; 2.4K OHM; 5%; 200PPM; 0.10W; THICK FILM                                               |
|     45 | R28             | -         |     1 | CRCW0603100RFK; ERJ-3EKF1000; RC0603FR-07100RL | VISHAY DALE;PANASONIC                | 100             | RESISTOR; 0603; 100 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                |
|     46 | TP1, TP2        | -         |     2 |                                                | 5010 KEYSTONE                        | N/A             | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL; |

Evaluates: MAX22520

## MAX22520 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES   | DNI/DNP   |   QTY | MFG PART #                        | MANUFACTURER                        | VALUE           | DESCRIPTION                                                                                                                                    |
|--------|-----------|-----------|-------|-----------------------------------|-------------------------------------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| 47     | TP4-TP7   | -         |     4 | 5011                              | KEYSTONE                            | N/A             | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                        |
| 48     | TP8-TP17  | -         |    10 | 5014                              | KEYSTONE                            | N/A             | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                       |
| 49     | U1        | -         |     1 | 93LC66BT-I/OT                     | MICROCHIP                           | 93LC66BT-I/OT   | IC; EPROM; 4K MICROWIRE SERIAL EEPROM; SOT23-6                                                                                                 |
| 50     | U2        | -         |     1 | MAX1556ETB+                       | MAXIM                               | MAX1556ETB+     | IC; CONV; PWMSTEP-DOWN DC-DC CONVERTER; TDFN10-EP 3X3                                                                                          |
| 51     | U3        | -         |     1 | FT2232HQ                          | FUTURE TECHNOLOGY DEVICES INTL LTD. | FT2232HQ        | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; QFN64-EP                                                                              |
| 52     | U4        | -         |     1 | MAX8880EUT+                       | MAXIM                               | MAX8880EUT+     | IC; VREG; ULTRA-LOW-IQ LOW-DROPOUT LINEAR REGULATOR WITH POK; SOT23-6                                                                          |
| 53     | U5        | -         |     1 | DS2484R+                          | MAXIM                               | DS2484R+        | IC; INFC; SINGLE-CHANNEL 1-WIRE MASTER WITH ADJUSTABLE TIMING AND SLEEP MODE; SOT23-6                                                          |
| 54     | U6        | -         |     1 | MAX17062ETB+                      | MAXIM                               | MAX17062ETB+    | IC; CONV; STEP UP DC-TO-DC CONVERTER; TDFN-EP10; TDFN10-EP ;                                                                                   |
| 55     | U7        | -         |     1 | MAX14761ETB+                      | MAXIM                               | MAX14761ETB+    | IC; ASW; ABOVE- AND BELOW-THE-RAILS LOW ON- RESISTANCE ANALOG SWITCH; TDFN10-EP                                                                |
| 56     | U9        | -         |     1 | MAX22520GWP+                      | MAXIM                               | MAX22520GWP+    | EVKIT PART - IC; DRV; ONE-TIME PROGRAMMABLE INDUCTRIAL SENSOR OUTPUT DRIVER; PACKAGE OUTLINE DRAWING: 21-100314; PACKAGE CODE: W201K2+1; WLP20 |
| 57     | Y1        | -         |     1 | ECS-120-20-33                     | ECS INC                             | 12MHZ           | CRYSTAL; SMT; 20PF; 12MHZ; +/-50PPM; +/-50PPM                                                                                                  |
| 58     | PCB       | -         |     1 | MAX22520                          | MAXIM                               | PCB             | PCB:MAX22520                                                                                                                                   |
| 59     | C36       | DNP       |     0 | C1608C0G1E103J080AA               | TDK                                 | 0.01UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 25V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G                                             |
| 60     | J10       | DNP       |     0 | 929500-01-03-RK                   | 3M                                  | 929500-01-03-RK | CONNECTOR; MALE; THROUGH HOLE; PIN STRIP HEADER; RIGHT ANGLE; 3PINS                                                                            |
| 61     | MH1-MH4   | DNP       |     0 |                                   | 9032 KEYSTONE                       | 9032            | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                      |
| 62     | R14       | DNP       |     0 | CRCW06031K00FK; ERJ-3EKF1001      | VISHAY DALE;PANASONIC               | 1K              | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                                                                              |
| 63     | R24       | DNP       |     0 | RC0402JR-070RL; CR0402-16W-000RJT | YAGEO PHYCOMP;VENKEL LTD.           |                 | 0 RESISTOR; 0402; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM                                                                                        |
| TOTAL  |           |           |   116 |                                   |                                     |                 |                                                                                                                                                |

Evaluates: MAX22520

## MAX22520 EV Kit Schematic

<!-- image -->

## MAX22520 EV Kit Schematic (continued)

<!-- image -->

## MAX22520 EV Kit Schematic (continued)

<!-- image -->

│

## MAX22520 EV Kit PCB Layout Diagrams

MAX22520 EV Kit PCB Layout -Top Silkscreen

<!-- image -->

MAX22520 EV Kit PCB Layout -Top Layer

<!-- image -->

│

## MAX22520 EV Kit PCB Layout Diagrams (continued)

MAX22520 EV Kit -Ground Layer

<!-- image -->

MAX22520 EV Kit -Power Layer

<!-- image -->

│

## MAX22520 EV Kit PCB Layout Diagrams (continued)

MAX22520 EV Kit -Bottom Layer

<!-- image -->

MAX22520 EV Kit -Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/19           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPSOied. 0a[iP ,ntegrated reserves the right to change the circuitr\ and sSecifications Zithout notice at an\ tiPe.

│

Evaluates: MAX22520