<!-- lastmod 2022-08-02 -->
## MAX22513 Evaluation Kit

## General Description

The  MAX22513  evaluation  kit  (EV  kit)  consists  of  the evaluation board and software. The EV kit is a fully assembled and  tested  circuit  board  that  evaluates  the  MAX22513 IO-Link ®   device  transceiver  with  integrated  DC-DC buck regulators.

The EV kit includes Windows ® -compatible software that provides  a  graphical  user  interface  (GUI)  for  exercising the features of the MAX22513. The EV kit is connected to a PC through a USB-A-to-micro-B cable.

## Features

- IO-Link-Compliant Device Transceiver
- I/O, I 2 C, and SPI Interface Terminals
- Arduino® Compatible Connector
- Windows 10-Compatible Software
- USB-PC Connection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Arduino is a registered trademark of Arduino, LLC. IO-Link is a registered trademark of Profibus User Organization (PNO). Windows is registered trademark and registered service mark of

Microsoft Corporation.

## MAX22513 EV Kit Block Diagram

<!-- image -->

<!-- image -->

Evaluates: MAX22513

## Quick Start

## Recommended Equipment

- MAX22513 EV kit (USB-A-to-micro-B cable included)
- User-supplied Windows 10 PC with a spare USB port
- 24V, 1A DC power supply
- Multimeter/voltmeter

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation before exercising the full features of the device:

- 1)  Visit www.maximintegrated.com/evkitsoftware to download  the  latest  version  of  the  EV  kit  software, MAX22513EVKITSetupVx.xx.ZIP . Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2)  Install  the  EV  kit  software  and  USB  driver  on  your computer  by  running  the  MAX22513EVKITSetupVx. xx.EXE  program  inside  the  temporary  folder.  The program  files  are  copied  to  your  PC  and  icons  are created  in  the  Windows Start  |  Programs  |  Maxim Integrated menu.  During  software  installation,  some versions  of  Windows  can  show  a  warning  message indicating  that  this  software  is  from  an  unknown publisher. This is not an error condition and it is safe to proceed with installation. Administrator privileges are required to install the USB device driver on Windows.

## MAX22513 Evaluation Kit

- 3)  Verify that all the jumpers are in their default positions, as shown in Table 1.
- 4)  Connect the 24V DC power supply to the V 24  (TP24) and GND (TP7) barrel connectors or to the V 24  (TP1) and GND (TP9) test points on the EV kit board.
- 5)  Connect the multimeter to the V 5  testpoint (TP22)
- 6)  Turn on the V 24  power supply.  Ensure that the voltage on V 5  (TP22) is 5V.
- 7)  Connect the USB cable from the PC to the EV kit board. A Windows message appears when connecting the EV kit.
- 8)  Start  the  EV  kit  software  by  opening  its  icon  in  the Windows Start | Programs | Maxim Integrated menu. The EV kit software main window appears, as shown in Figure 1.
- 9)  Verify that Status: MAX32660 Connected, MAX22513 ADR  =  0x68 is  displayed  on  the  status  bar  at  the bottom left of the main window (Figure 1).
- 10)  Click on the Include Interrupt Register box to include the  INTERRUPT  register  in  serial  interface  reads. Click on the Read All button to read all of the registers in the device.
- 11)  Select a register in the top register table to access the bits in that register.
- 12)  Set  the  individual  bits  for  that  register  by  selecting available settings from the drop-down menu for each bit in the lower register table.
- 13)  Press the Write Modified button on the GUI to write the registers that have been changed to the MAX22513.

## Detailed Description of Software

## Configuring the Registers

Click on a register name in the top register table to access the individual bits in that register. When the register name is  selected  in  the  register  table,  the  lower  register  table shows the individual bits for that register. Click on the dropdown menu next to each bit in the lower table to select the bit setting. When all of the bits are set as desired, click on the Write Modified button to write the changed bit settings to the MAX22513 over the I 2 C interface.

Note that full IO-Link communication is not available using the EV kit GUI.

## I/O Pin Control

The IO-Link UART I/Os (TXEN, TX, RX, LO/LI) and notification interrupt ( IRQ and WU ) pins can be controlled and read on the MAX22513 EV kit GUI. Click on the toggle buttons next to TXEN, TX, and LO/LI (DO\_EN = 1) to set these pins on the EV kit board to high (V L ) or low (GND).

## Evaluates: MAX22513

When an interrupt is triggered, a bit in the INTERRUPT register is set and IRQ asserts low. A yellow tag appears in the I/O Pins box stating 'Interrupt Received' (Figure 2). Read the INTERRUPT register to clear the interrupt and deassert IRQ .

When  a  wake-up  event  is  detected,  and  the  WUINT  is not  masked  in  the  INTERRUPT  register  (WUM  =  0),  the wake-up interrupt bit is set in the INTERRUPT register and a yellow tag appears in the I/O Pins box stating 'Wak-Up Received.' IRQ also asserts. Read the INTERRUPT register to clear the interrupt and deassert IRQ . the green box next to WU flashes orange briefly and then turns green again.

## Detailed Description of Hardware

The MAX22513 EV kit includes the MAX22513 dual-channel IO-Link  transceiver  and  the  external  components  for evaluating  the  device.  The  EV  kit  is  configured  for  I 2 C operation  by  default.  All  logic-level  I/Os  and  IO-Link capable I/Os are available on yellow test points.

## Logic-Level Power Supply

The MAX22513 features an internal 3.3V linear regulator which can drive loads up to 50mA. Set V L  = 3.3V on the J6 jumper to set the logic level supply (V L ) for the I/O pins.

To use a different logic-level voltage supply, open the J6 jumper and apply the external supply to the V L  testpoint (TP23). Ensure that V L  does not exceed 3.3V to protect the MAX32660.

## Selecting the Device Address

The MAX22513 includes two address pins for  I 2 C  addressing, allowing  up  to  four  devices  on  a  single  bus.  Set  the  I 2 C address  for  the  MAX22513  on  the  MAX22513EVKIT  by setting the SDI/A1 and CS /A0 jumpers (J11 and J8, respectively). Click the Rescan I2C Adr button after the address has been changed to reestablish I 2 C communication.

## Using I 2 C or SPI Interface with an External Master Controller

The MAX22513 EV kit includes an isolated USB-to-serial interface circuit for communication with the PC/GUI, and is configured to operate with the I 2 C serial interface when using the on-board FTDI converter and Maxim MAX32660 microcontroller. Arduino headers are available to use the board with an external controller.

To use an external SPI or I 2 C controller with the MAX22513, open all the switches on SW1 (set all switches to the left) and connect the external controller to the P5, P6, P7, and P8 headers. The MAX22513 EV kit is configured for I 2 C communication  by  default.  To  enable  the  SPI  interface, remove the R23 resistor and place a 10kΩ resistor in R4 and remove the shunts on J8 and J11.

Figure 1. MAX22513 EV Kit Software, EV Kit is Connected

<!-- image -->

Figure 2. MAX22513 EV Kit Software, Interrupt Received

<!-- image -->

## Table 1. Jumper Descriptions

| JUMPER   | SHUNT POSITON   | DESCRIPTION                                                                       |
|----------|-----------------|-----------------------------------------------------------------------------------|
| J1       | 1-2*            | LIN is connected to the output of the DC-DC regulator.                            |
| J1       | 1-3             | LIN is connected to PV24.                                                         |
| J1       | 1-4             | LIN is connected to V 5 . Connect an external 5V supply to V 5 .                  |
| J2       | Open*           | FREQ is low                                                                       |
| J2       | Closed          | FREQ is high                                                                      |
| J3       | Open*           | RESET is pulled up to V L through a 10kΩ resistor.                                |
| J3       | Closed          | RESET is low                                                                      |
| J6       | 1-2             | V L is connected to V 5 ( V L = 5V)                                               |
| J6       | 2-3*            | V L is connected to V 33 ( V L = 3.3V)                                            |
| J8       | 1-2             | CS /A0 is high                                                                    |
| J8       | 2-3*            | CS /A0 is low                                                                     |
| J10      | 1-2*            | TXEN is high                                                                      |
| J10      | 2-3             | TXEN is low                                                                       |
| J11      | 1-2             | SDI/A1 is low                                                                     |
| J11      | 2-3*            | SDI/A1 is high                                                                    |
| J15      | Open            | Do not use.                                                                       |
| J16      | 1-2             | MCLK is connected to the 32KIN input of the MAX32660.                             |
| J16      | 2-3*            | Output of the on-board oscillator is connected to the 32KIN input of the MAX32660 |

Evaluates: MAX22513

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX22513EVKIT# | EV Kit |

#Denotes a RoHS-compliant device that may include lead that is exempt under the RoHS requirements.

│

## MAX22513 EV Kit Bill of Materials

| ITEM REF_DES                       | DNI/DNP   | QTY MFG PART #                                                                                                | MANUFACTURER                                                     | VALUE                       | DESCRIPTION                                                                                                                                                                                                               |
|------------------------------------|-----------|---------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|-----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1 C1                               | -         | 1 CGA3EANP02A103J080AC                                                                                        | TDK                                                              | 0.01UF                      | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 100V; TOL=5%; MODEL=MULTILAYER CERAMIC CHIP CAPACITOR; TC=NPO                                                                                                                |
| 2 C2                               | -         | 1 UMK107AB7105KA;CC0603KRX7R9BB105                                                                            | TAIYO YUDEN;YAGEO                                                | 1UF                         | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                                                  |
| 3 C3, C5, C8                       | -         | 3 CL05B105KQ5NQNC; GRM155R70J105KA12                                                                          | SAMSUNG ELECTRONICS;MURATA                                       | 1UF                         | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                                                 |
| 4 C4                               | -         | 1 C3216X5R1H685K160AB                                                                                         | TDK                                                              | 6.8UF                       | CAPACITOR; SMT (1206); CERAMIC CHIP; 6.8UF; 50V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                                                                                 |
| 5 C6, C7,                          |           | C0402X7R500-                                                                                                  |                                                                  |                             | CAPACITOR; SMT (0402); CERAMIC CHIP; 330PF; 50V; TOL=10%; TG=-55 DEGC TO +125                                                                                                                                             |
| C10, C11 6 C9                      | - -       | 4 331KNE;GRM155R71H331KA01;ECJ-0EB1H331K 1 GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA            | VENKEL LTD;MURATA;PANASONIC MURATA;MURATA;TDK                    | 330PF 0.1UF                 | DEGC; TC=X7R CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                                                                                                             |
| 7 C14                              | -         | 1 C0603C105K4RAC;GRM188R71C105KA12;C1608 X7R1C105K080AC;EMK107B7105KA;GCM188R7 1C105KA64;CGA3E1X7R1C105K080AC | KEMET;MURATA;TDK;TAIYO YUDEN;MURATA;TDK                          | 1UF                         | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 16V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                                          |
| 8 C15                              | -         | 1 KTS250B336M55N0T00                                                                                          | NIPPON CHEMI-CON                                                 | 33UF                        | CAPACITOR; SMT (2220); CERAMIC; 33UF; 25V; TOL=20%; MODEL=X7R; TG=-55 DEGC TO +125 DEGC; TC=+/-                                                                                                                           |
| 9 C16                              | -         | 1 GRM155R71H332KA01                                                                                           | MURATA                                                           | 3300PF                      | CAPACITOR; SMT (0402); CERAMIC CHIP; 3300PF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                                               |
| 10 C17                             | -         | 1 EMK107B7105MA                                                                                               | TAIYO YUDEN                                                      | 1UF                         | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 16V; TOL=20%; MODEL=M SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                                  |
| 11 C18                             | -         | 1 GRM21BR61A106KE19;ECJ- 2FB1A106;CL21A106KPCLQNC;GRM219R61A10 6KE44                                          | MURATA;PANASONIC;SAMSUNG ELECTRONICS;MURATA                      | 10UF                        | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                                                                          |
|                                    |           | 1 C0603X7R1A103K030BA;GRM033R71A103KA01 ;GCM033R71A103KA03;CGA1A2X7R1A103K030 BA;0201ZC103KAT2A               |                                                                  |                             | CAPACITOR; SMT (0201); CERAMIC CHIP; 0.01UF; 10V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                                               |
| 12 C19                             | -         |                                                                                                               | TDK;MURATA;MURATA;TDK;AVX                                        | 0.01UF                      | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 10V; TOL=+80%-20%; MODEL=GRM                                                                                                                                                  |
| 13 C20                             | -         | 1 GRM188F51A475Z                                                                                              | MURATA                                                           | 4.7UF                       | SERIES; TG=-30 DEGC TO +85 DEGC; TC=Y5V                                                                                                                                                                                   |
| 14 C21, C25                        | -         | 2 GRM033R61A104KE15; LMK063BJ104KP                                                                            | MURATA;TAIYO YUDEN                                               | 0.1UF                       | CAPACITOR; SMT (0201); CERAMIC CHIP; 0.1UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X5R                                                                                                                        |
| 15 C22, C23                        | -         | 2 GRM0335C1E470JA01                                                                                           | MURATA                                                           | 47PF                        | CAPACITOR; SMT (0201); CERAMIC CHIP; 47PF; 25V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                                                                                                  |
| 16 C24                             | -         | 1 C0201C104K9PAC;GRM033R60J104KE19;C0603 X5R0J104K030BC;C0201X5R6R3-104KNP                                    | KEMET;MURATA;VENKEL;TDK                                          | 0.1UF                       | CAPACITOR; SMT (0201); CERAMIC CHIP; 0.1UF; 6.3V; TOL=10%; MODEL=X5R; TG=-25 DEGC TO +85 DEGC; TC=+/                                                                                                                      |
| 17 C26, C27                        | -         | 2 C0402C105K8PAC;CC0402KRX5R6BB105                                                                            | KEMET;YAGEO                                                      | 1UF                         | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 10V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                                                                                   |
| 18 J1                              | -         | 1 TSW-104-07-L-S                                                                                              | SAMTEC                                                           | TSW-104-07-L-S              | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 4PINS                                                                                                                                         |
| 19 J2, J3                          | -         | 2 TSW-102-07-T-S                                                                                              | SAMTEC                                                           | TSW-102-07-T-S              | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +105 DEGC                                                                                                                                   |
| 20 J6, J8, J10, J11, J16           | -         | 5 TSW-103-07-T-S                                                                                              | SAMTEC                                                           | TSW-103-07-T-S              | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 3PINS                                                                                                                                                          |
| 21 J7 22 J9                        | - -       | 1 09 0431 212 04 1 ZX62D-AB-5P8                                                                               | BINDER HIROSE ELECTRIC CO LTD.                                   | 09 0431 212 04 ZX62D-AB-5P8 | CONNECTOR; MALE; TH; MALE RECEPTACLE; THREADED; PCB SOLDER; STRAIGHT; 4PINS; CONNECTOR; FEMALE; SMT; USB MICRO CONNECTOR; RIGHT ANGLE; 5PINS                                                                              |
| 23 J15                             | -         | 1 FTSH-105-01-L-DV-K                                                                                          | SAMTEC                                                           | FTSH-105-01-L-DV-K          | CONNECTOR; MALE; SMT; 0.05 (1.27MM) SMT MICRO HEADER; STRAIGHT; 10PINS                                                                                                                                                    |
| 24 L1                              | - -       | 1 LPS4018-183MR 1 LPS6235-333MR                                                                               | COILCRAFT COILCRAFT                                              | 18UH 33UH                   | INDUCTOR; SMT; FERRITE; 18UH; 20%; 1.00A INDUCTOR; SMT; MAGNETICALLY SHIELDED; 33UH; TOL=+/-20%;                                                                                                                          |
| 25 L2 26 L3                        | -         | 1 BLM21AG601SN1                                                                                               | MURATA                                                           | 600                         | 1.3A INDUCTOR; SMT (0805); FERRITE-BEAD; 600; TOL=+/-25%; 0.2A                                                                                                                                                            |
|                                    | -         |                                                                                                               |                                                                  | 68784-0001                  | CONNECTOR; MALE; USB; USB A PLUG TO MICRO B PLUG CABLE ASSY; STRAIGHT; 4PINS-                                                                                                                                             |
| 27 MISC1 28 R1                     | -         | 1 68784-0001 1 CRCW0402100KFK;RC0402FR-07100KL                                                                | MOLEX VISHAY;YAGEO                                               | 100K                        | 5PINS RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                                                               |
| 29 R2, R3, R7, R9, R21, R23, 30 R5 | - -       | 7 CRCW040210K0FK;RC0402FR-0710KL 1 CPF0603F309KC                                                              | VISHAY DALE;YAGEO PHICOMP TE CONNECTIVITY                        | 10K 309K 54.9K              | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM RES; SMT (0603); 309K; 1%; +/-50PPM/DEGC; 0.063W RES; SMT (0603); 54.9K; 1%; +/-100PPM/DEGC; 0.1W                                                                    |
| 31 R6                              | -         | 1 CRCW060354K9FK CRCW0402100RFK; 9C04021A1000FL; RC0402FR-                                                    | VISHAY DALE                                                      |                             | 100 RESISTOR; 0402; 100 OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                                                                                                               |
| 32 R8, R10                         | -         | 2 07100RL CRCW0603499RFK;RK73H1J4990FT;ERJ-                                                                   | VISHAY DALE;PANASONIC;YAGEO PHYCOMP KOA;VISHAY;PANASONIC;SAMSUNG |                             | 499 RESISTOR; 0603; 499 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                                                |
| 33 R22 R25, R28, R30, R31, R34,    | -         | 1 3EKF4990;RC1608F4990                                                                                        | PANASONIC                                                        | 220                         | RESISTOR; 0402; 220 OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                                                                     |
| 34 R40 35 R26, R27                 | -         | 10 ERJ-2RKF2200 2 CRCW040210R0FK;                                                                             | VISHAY DALE;YAGEO                                                |                             | 10 RESISTOR; 0402; 10 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                                                                |
| 36 R32, R33                        | - -       | 9C04021A10R0FL 2 ERJ-1GNF27R0 CRCW04021K00FK; RC0402FR-                                                       | PANASONIC                                                        | 27                          | RESISTOR; 0201; 27 OHM; 1%; 200PPM; 0.05W; THICK FILM                                                                                                                                                                     |
| 37 R41, R42                        | -         | 2 071KL;MCR01MZPF1001                                                                                         | VISHAY DALE;YAGEO PHICOMP;ROHM SEMI                              | 1K                          | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                                                                       |
| 38 SU1-SU8                         | -         | 8 STC02SYAN                                                                                                   | SULLINS ELECTRONICS CORP.                                        | STC02SYAN                   | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL SWITCH; SPST; SMT; STRAIGHT; 20V; 0.1A; SURFACE MOUNT DIP                                         |
| 39 SW1                             | -         | 1 219-10MST                                                                                                   | CTS                                                              | 219-10MST                   | SWITCH-AUTO PLACEABLE; RINSULATION=1000MOHM TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED;                                                                                                   |
| 40 TP1, TP3-TP5, TP8               | -         | 5 5010                                                                                                        | KEYSTONE                                                         | N/A                         | PHOSPHOR BRONZE WIRE SIL;                                                                                                                                                                                                 |
| 41 TP6                             | -         | 1 571-0500                                                                                                    | DELTRON                                                          | 571-0500                    | CONNECTOR; FEMALE; THROUGH HOLE; BANANA 4MMSOCKET; RIGHT ANGLE; 2PINS                                                                                                                                                     |
| 42 TP7                             | -         | 1 571-0100                                                                                                    | DELTRON                                                          | 571-0100                    | CONNECTOR; FEMALE; THROUGH HOLE; BANANA 4MMSOCKET; RIGHT ANGLE; 2PINS TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK;                                                                       |
| 43 TP9-TP11                        | -         | 3 5011                                                                                                        | KEYSTONE                                                         | N/A                         | PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW;                                                                                                  |
| 44 TP13-TP19, TP21-TP23            | -         | 10                                                                                                            | KEYSTONE                                                         | N/A                         | PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                                                                                                                                 |
|                                    | -         | 5014                                                                                                          |                                                                  |                             |                                                                                                                                                                                                                           |
| 45 U1                              |           | 1 MAX22513ATI+                                                                                                | MAXIM                                                            | MAX22513ATI+                | EVKIT PART - IC; TXRX; EMC PROTECTED DUAL DRIVER IO-LINK DEVICE TRANSCEIVER WITH DC/DC; PACKAGE OUTLINE: 21-0184; PACKAGE CODE: T283555+1C; TQFN28-EP IC; CONV; ULTRA-SMALL; HIGH-EFFICIENCY; SYNCHRONOUS STEP-DOWN DC-DC |
| 46 U2                              | - -       | 1 MAX17501EATB+ 1 ASV-50.000MHZ-EJT                                                                           | MAXIM ABRACON                                                    | MAX17501EATB+ 50MHZ         | CONVERTER; TDFN10-EP OSCILLATOR; SMT 5X7; 15PF; 50MHZ; N/A; +/-20PPM                                                                                                                                                      |
| 47 U3                              | -         | 1 MAX32660                                                                                                    | MAXIM FUTURE TECHNOLOGY DEVICES                                  | MAX32660 FT234XD PCB        | EVKIT PART; IC; LOW POWER ARM CORTEX-M4 WITH FPU-BASED SOC FOR WEARABLE SENSORS; PACKAGE OUTLINE DRAWING: 21-0139; PACKAGE CODE: T2044-5C; PACKAGE LAND PATTERN: 90-0429                                                  |
| 48 U4 49 U6                        | -         | 1 FT234XD 1 MAX22513                                                                                          | INTL LTD MAXIM                                                   |                             | IC; INFC; USB TO BASIC UART; DFN12-EP PCB:MAX22513                                                                                                                                                                        |
| 50 PCB                             |           | 0                                                                                                             | VISHAY DALE;YAGEO PHICOMP                                        | 10K                         |                                                                                                                                                                                                                           |
| 51 R4 52 U5                        | - DNP     | CRCW040210K0FK;RC0402FR-0710KL 0 ARDUINO_UNO_R3                                                               | ARDUINO                                                          | ARDUINO_UNO_R3              | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM MODULE; ARDUINO_UNO_R3                                                                                                                                               |
| 53 VR1                             | DNP DNP   | 0 VC060326A580DP 104                                                                                          | AVX                                                              | VC060326A580DP              | VARISTOR; TVS; SMT (0603); VB=34.5V; IP=30A                                                                                                                                                                               |
| TOTAL                              |           |                                                                                                               |                                                                  |                             |                                                                                                                                                                                                                           |

Evaluates: MAX22513

## MAX22513 EV Kit Schematic

<!-- image -->

## MAX22513 EV Kit Schematic (continued)

<!-- image -->

## MAX22513 EV Kit PCB Layout Diagrams

MAX22513 EV Kit PCB Layout -Top Silkscreen

<!-- image -->

MAX22513 EV Kit PCB Layout -Top Layer

<!-- image -->

│

## MAX22513 EV Kit PCB Layout Diagrams (continued)

MAX22513 EV Kit -Ground Layer

<!-- image -->

MAX22513 EV Kit -Power Layer

<!-- image -->

│

## MAX22513 EV Kit PCB Layout Diagrams (continued)

MAX22513 EV Kit -Bottom Layer

<!-- image -->

MAX22513 EV Kit -Bottom Silkscreen

<!-- image -->

│

## MAX22513 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im ,ntegrated reserves the right to change the circuitr\ and speci¿cations Zithout notice at an\ time.

│

Evaluates: MAX22513