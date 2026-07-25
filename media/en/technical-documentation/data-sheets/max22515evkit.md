<!-- lastmod 2022-08-02 -->
## MAX22515 Evaluation Kit

## General Description

The  MAX22515  evaluation  kit  (EV  kit)  consists  of  the evaluation board and software. The EV kit is a fully assembled and  tested  circuit  board  that  evaluates  the  MAX22515 IO-Link ®  dual-channel device transceiver.

The EV kit includes Windows ® -compatible software that provides  a  graphical  user  interface  (GUI)  for  exercising the features of the MAX22515. The EV kit is connected to a PC through a USB-A-to-micro-B cable.

## Features

- IO-Link-Compliant Device Transceiver
- I/O and I 2 C Interface Terminals
- Arduino ®  Compatible Connector
- Windows 10-Compatible Software
- USB-PC Connection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Arduino is a registered trademark of Arduino, LLC. IO-Link is a registered trademark of Profibus User Organization (PNO). Windows is registered trademark and registered service mark of

Microsoft Corporation.

## MAX22515 EV Kit Block Diagram

<!-- image -->

<!-- image -->

Evaluates: MAX22515

## Quick Start

## Recommended Equipment

- MAX22515 EV kit (USB-A-to-micro-B cable included)
- User-supplied Windows 10 PC with a spare USB port
- 24V, 1A DC power supply
- Multimeter/voltmeter

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation before exercising the full features of the device:

- 1) Visit www.maximintegrated.com/evkitsoftware to download  the  latest  version  of  the  EV  kit  software, MAX22513\_5EVKITSetupVx.xx.ZIP . Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install  the  EV  kit  software  and  USB  driver  on  your computer  by  running  the  MAX22513\_5EVKITSetupVx. xx.EXE  program  inside  the  temporary  folder.  The program files are copied to your PC and icons are created in the Windows Start | Programs | Maxim Integrated menu. During software installation, some versions of Windows can show a warning message indicating  that  this  software  is  from  an  unknown publisher.  This  is not  an  error  condition  and  it is  safe  to  proceed  with  installation.  Administrator privileges  are  required  to  install  the  USB  device driver on Windows.

- 3) Verify that all the jumpers  are  in  their  default positions, as shown in Table 1.
- 4) Connect the 24V DC power supply to the V 24  (TP6) and  GND  (TP7)  barrel  connectors  or  to  the  V 24 (TP1) and GND (TP9) test points on the EV kit board.
- 5) Connect the USB cable from the PC to the EV kit board. A Windows message appears when connecting the EV kit.
- 6) Start the EV kit software by opening its icon in the Windows Start  |  Programs  |  Maxim  Integrated menu. The EV kit software main window appears, as shown in Figure 1.
- 7) Verify that Status: MAX32660 Connected, MAX22515 ADR = 0x68 is  displayed  on  the  status bar at the bottom left of the main window (Figure 2).
- 8) Click on the Include Interrupt Register box to include the  INTERRUPT  register  in  serial  interface  reads. Click on the Read All button to read all of the registers in the device.
- 9) Select a register in the top register table to access the bits in that register.
- 10)  Set  the  individual  bits  for  that  register  by  selecting available settings from the drop-down menu for each bit in the lower register table.
- 11) Press  the Write  Modified button  on  the  GUI  to write  the  registers  that  have  been  changed  to  the MAX22515.

## Detailed Description of Software

## Configuring the Registers

Click on a register name in the top register table to access the individual bits in that register. When the register name is  selected  in  the  register  table,  the  lower  register  table shows the individual bits for that register. Click on the dropdown menu next to each bit in the lower table to select the bit setting. When all of the bits are set as desired, click on the Write Modified button to write the changed bit settings to the MAX22515 over the I 2 C interface.

Note that full IO-Link communication is not available using the EV kit GUI.

## I/O Pin Control

The IO-Link UART I/Os (TXEN, TX, RX, LI) and notification interrupt  ( WU / IRQ )  can  be  controlled  and  read  on  the MAX22515 EV kit GUI. Click on the toggle buttons next to TXEN, TX, and LI to set these pins on the EV kit board to high (V L ) or low (GND).

When  an  interrupt  is  triggered,  a  bit  in  the  INTERRUPT register is set and WU / IRQ asserts low. A yellow tag appears in  the  I/O  Pins  box stating 'Interrupt Received' (Figure  2). Read  the  INTERRUPT  register  to  clear  the  interrupt  and deassert WU / IRQ .

When  a  wake-up  event  is  detected,  and  the  WUINT  is not  masked  in  the  INTERRUPT  register  (WUM  =  0),  the wake-up interrupt bit is set in the INTERRUPT register and a yellow tag appears in the I/O Pins box stating 'Wak-Up Received.' WU / IRQ also  asserts.  Read  the  INTERRUPT register  to  clear  the  interrupt  and  deassert WU / IRQ .  the green box next to WU flashes orange briefly and then turns green again.

## Detailed Description of Hardware

The MAX22515 EV kit includes the MAX22515 dual-channel IO-Link  transceiver  and  the  external  components  for evaluating  the  device.  The  EV  kit  is  configured  for  I 2 C operation  by  default.  All  logic-level  I/Os  and  IO-Link capable I/Os are available on yellow test points.

## Logic-Level Power Supply

The MAX22515 features an internal 3.3V linear regulator which can drive loads up to 50mA. Set V L  = 3.3V on the J6 jumper to set the logic level supply (V L ) for the I/O pins.

To use a different logic-level voltage supply, open the J6 jumper  and  apply  the  external  supply  to  the  V L   pin  on the J6 jumper. Ensure that V L  does not exceed 3.3V to protect the MAX32660.

## Selecting the Device Address

The MAX22515 includes one address pin for I 2 C addressing, allowing  up  to  two  devices  on  a  single  bus.  Set  the  I 2 C address for the MAX22515 on the MAX22515EVKIT by setting the A0/CLKEN jumper (J8). Click the Rescan I2C Adr button after the address has been changed to reestablish I 2 C communication.

## Using I 2 C Interface with an External Master Controller

The MAX22515 EV kit includes an isolated USB-to-serial interface circuit for communication with the PC/GUI, and is configured to operate with the I 2 C serial interface when using the on-board FTDI converter and Maxim MAX32660 microcontroller. Arduino headers are available to use the board with an external controller.

To  use  an  external  I 2 C  controller  with  the  MAX22515, open all the switches on SW1 (set all switches to the left) and connect the external controller to the P5, P6, P7, and P8 headers.

Figure 1. MAX22515 EV Kit Software, EV Kit is Connected

<!-- image -->

Figure 2. MAX22515 EV Kit Software, Interrupt Received

<!-- image -->

## MAX22515 Evaluation Kit

## Table 1. Jumper Descriptions

| JUMPER   | SHUNT POSITON   | DESCRIPTION                                                                                               |
|----------|-----------------|-----------------------------------------------------------------------------------------------------------|
| J1       | Open*           | Leave this jumper open when operating the device in I 2 C mode.                                           |
| J1       | 1-2             | SCL/100MA is high. The current limit on the C/Q driver is set to 100mA (typ).                             |
| J1       | 2-3             | SCL/100MA is low. The current limit on the C/Q driver is set to 200mA (typ).                              |
| J2       | Open*           | MAX22515 operates in I 2 C mode.                                                                          |
| J2       | Closed          | MAX22515 operates in pin-control mode.                                                                    |
| J3       | Open*           | EN/POK is pulled high. The MAX22515 is enabled.                                                           |
| J3       | Closed          | EN/POK is pulled low. The MAX22515 is disabled.                                                           |
| J4       | 1-2             | LIN is connected to V 5 . Apply an external voltage to the V 5 pin on the J6 header for normal operation. |
| J4       | 2-3*            | LIN is connected to V 24 .                                                                                |
| J6       | 1-2             | V L is connected to V 5 (V L = 5V).                                                                       |
| J6       | 2-3*            | V L is connected to V 33 (V L = 3.3V).                                                                    |
| J8       | 1-2             | A0/CLKEN is high.                                                                                         |
| J8       | 2-3*            | A0/CLKEN is low.                                                                                          |
| J10      | 1-2*            | TXEN is high.                                                                                             |
| J10      | 2-3*            | TXEN is low.                                                                                              |
| J15      | Open*           | Do not use.                                                                                               |
| J16      | 1-2             | MCLK is connected to the 32KIN input of the MAX32660.                                                     |
| J16      | 2-3*            | Output of the on-board oscillator is connected to the 32KIN input of the MAX32660                         |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX22515EVKIT# | EV Kit |

#Denotes a RoHS-compliant device that may include lead that is exempt under the RoHS requirements.

Evaluates: MAX22515

│

## MAX22515 EV Kit Bill of Materials

|   ITEM | REF_DES                  | DNI/DNP   |   QTY | MFG PART #                                                                                                     | MANUFACTURER                                  | VALUE              | DESCRIPTION                                                                                                      |
|--------|--------------------------|-----------|-------|----------------------------------------------------------------------------------------------------------------|-----------------------------------------------|--------------------|------------------------------------------------------------------------------------------------------------------|
|      1 | C1, C3                   | -         |     2 | CGA3EANP02A103J080AC                                                                                           | TDK                                           | 0.01UF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 100V; TOL=5%; MODEL=MULTILAYER CERAMIC CHIP CAPACITOR; TC=NPO       |
|      2 | C2, C8                   | -         |     2 | CL05B105KQ5NQNC; GRM155R70J105KA12                                                                             | SAMSUNG ELECTRONICS; MURATA                   | 1UF                | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=10%; TG=- 55 DEGC TO +125 DEGC; TC=X7R                       |
|      3 | C5                       | -         |     1 | C0402C104J4RAC; GCM155R71C104JA55                                                                              | KEMET;MURATA                                  | 0.1UF              | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 16V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                |
|      4 | C6, C7, C10, C11         | -         |     4 | C0402X7R500-331KNE; GRM155R71H331KA01; ECJ-0EB1H331K                                                           | VENKEL LTD;MURATA; PANASONIC                  | 330PF              | CAPACITOR; SMT (0402); CERAMIC CHIP; 330PF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                       |
|      5 | C14                      | -         |     1 | C0603C105K4RAC; GRM188R71C105KA12; C1608X7R1C105K080AC; EMK107B7105KA; GCM188R71C105KA64; CGA3E1X7R1C105K080AC | KEMET;MURATA;TDK; TAIYO YUDEN;MURATA; TDK     | 1UF                | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 16V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                 |
|      6 | C15                      | -         |     1 | KTS250B336M55N0T00                                                                                             | NIPPON CHEMI-CON                              | 33UF               | CAPACITOR; SMT (2220); CERAMIC; 33UF; 25V; TOL=20%; MODEL=X7R; TG=-55 DEGC TO +125 DEGC; TC=+/-                  |
|      7 | C16                      | -         |     1 | GRM15XR71C332KA86                                                                                              | MURATA                                        | 3300PF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 3300PF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                      |
|      8 | C17                      | -         |     1 | EMK107B7105MA                                                                                                  | TAIYO YUDEN                                   | 1UF                | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 16V; TOL=20%; MODEL=M SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R         |
|      9 | C18                      | -         |     1 | GRM21BR61A106KE19; ECJ-2FB1A106; CL21A106KPCLQNC; GRM219R61A106KE44                                            | MURATA;PANASONIC; SAMSUNG ELECTRONICS; MURATA | 10UF               | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R                 |
|     10 | C19                      | -         |     1 | C0603X7R1A103K030BA; GRM033R71A103KA01; GCM033R71A103KA03; CGA1A2X7R1A103K030BA; 0201ZC103KAT2A                | TDK;MURATA;MURATA; TDK;AVX                    | 0.01UF             | CAPACITOR; SMT (0201); CERAMIC CHIP; 0.01UF; 10V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                      |
|     11 | C20                      | -         |     1 | GRM188F51A475Z                                                                                                 | MURATA                                        | 4.7UF              | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 10V; TOL=+80%-20%; MODEL=GRM SERIES; TG=-30 DEGC TO +85 DEGC; TC=Y5V |
|     12 | C21                      | -         |     1 | GRM033R61A104KE15; LMK063BJ104KP                                                                               | MURATA;TAIYO YUDEN                            | 0.1UF              | CAPACITOR; SMT (0201); CERAMIC CHIP; 0.1UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X5R               |
|     13 | C22, C23                 | -         |     2 | GRM0335C1E470JA01                                                                                              | MURATA                                        | 47PF               | CAPACITOR; SMT (0201); CERAMIC CHIP; 47PF; 25V; TOL=5%; TG=- 55 DEGC TO +125 DEGC; TC=C0G                        |
|     14 | C24                      | -         |     1 | C0201C104K9PAC; GRM033R60J104KE19; C0603X5R0J104K030BC; C0201X5R6R3-104KNP                                     | KEMET;MURATA; VENKEL;TDK                      | 0.1UF              | CAPACITOR; SMT (0201); CERAMIC CHIP; 0.1UF; 6.3V; TOL=10%; MODEL=X5R; TG=-25 DEGC TO +85 DEGC; TC=+/             |
|     15 | C26, C27                 | -         |     2 | C0402C105K8PAC; CC0402KRX5R6BB105                                                                              | KEMET;YAGEO                                   | 1UF                | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 10V; TOL=10%; TG=- 55 DEGC TO +85 DEGC; TC=X5R                         |
|     16 | J1, J4, J6, J8, J10, J16 | -         |     6 | TSW-103-07-T-S                                                                                                 | SAMTEC                                        | TSW-103-07-T-S     | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 3PINS                                                 |
|     17 | J2, J3                   | -         |     2 | TSW-102-07-T-S                                                                                                 | SAMTEC                                        | TSW-102-07-T-S     | CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 2PINS; -55 DEGC TO +105 DEGC                          |
|     18 | J7                       | -         |     1 | 09 0431 212 04                                                                                                 | BINDER                                        | 09 0431 212 04     | CONNECTOR; MALE; TH; MALE RECEPTACLE; THREADED; PCB SOLDER; STRAIGHT; 4PINS;                                     |
|     19 | J9                       | -         |     1 | ZX62D-AB-5P8                                                                                                   | HIROSE ELECTRIC CO LTD.                       | ZX62D-AB-5P8       | CONNECTOR; FEMALE; SMT; USB MICRO CONNECTOR; RIGHT ANGLE; 5PINS                                                  |
|     20 | J15                      | -         |     1 | FTSH-105-01-L-DV-K                                                                                             | SAMTEC                                        | FTSH-105-01-L-DV-K | CONNECTOR; MALE; SMT; 0.05 (1.27MM) SMT MICRO HEADER; STRAIGHT; 10PINS                                           |

Evaluates: MAX22515

## MAX22515 EV Kit Bill of Materials (Continued)

|   ITEM | REF_DES                         | DNI/DNP   | QTY MFG PART #                                            | MANUFACTURER                          | VALUE          | DESCRIPTION                                                                                                                                                                         |
|--------|---------------------------------|-----------|-----------------------------------------------------------|---------------------------------------|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     21 | L2                              | -         | 1 LPS6235-333MR                                           | COILCRAFT                             | 33UH           | INDUCTOR; SMT; MAGNETICALLY SHIELDED; 33UH; TOL=+/-20%; 1.3A                                                                                                                        |
|     22 | L3                              | -         | 1 BLM21AG601SN1                                           | MURATA                                | 600            | INDUCTOR; SMT (0805); FERRITE-BEAD; 600; TOL=+/-25%; 0.2A                                                                                                                           |
|     23 | MISC1                           | -         | 1 68784-0001                                              | MOLEX                                 | 68784-0001     | CONNECTOR; MALE; USB; USB A PLUG TO MICRO B PLUG CABLE ASSY; STRAIGHT; 4PINS-5PINS                                                                                                  |
|     24 | R1-R3, R7, R9, R21, R24         | -         | 7 CRCW040210K0FK; RC0402FR-0710KL                         | VISHAY DALE; YAGEO PHICOMP            | 10K            | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                                |
|     25 | R8                              | -         | 1 CRCW0402100RFK; 9C04021A1000FL; RC0402FR-07100RL        | VISHAY DALE;PANASONIC; YAGEO PHYCOMP  | 100            | RESISTOR; 0402; 100 OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                                                                             |
|     26 | R22                             | -         | 1 CRCW0603499RFK; RK73H1J4990FT; ERJ-3EKF4990;RC1608F4990 | KOA;VISHAY;PANASONIC; SAMSUNG         | 499            | RESISTOR; 0603; 499 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                              |
|     27 | R25, R28, R30,R31, R34, R36-R40 | -         | 10 ERJ-2RKF2200                                           | PANASONIC                             | 220            | RESISTOR; 0402; 220 OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                               |
|     28 | R26, R27                        | -         | 2 CRCW040210R0FK; 9C04021A10R0FL                          | VISHAY DALE;YAGEO                     | 10             | RESISTOR; 0402; 10 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                             |
|     29 | R32, R33                        | -         | 2 ERJ-1GNF27R0                                            | PANASONIC                             | 27             | RESISTOR; 0201; 27 OHM; 1%; 200PPM; 0.05W; THICK FILM                                                                                                                               |
|     30 | R41, R42                        | -         | 2 CRCW04021K00FK; RC0402FR-071KL; MCR01MZPF1001           | VISHAY DALE; YAGEO PHICOMP; ROHM SEMI | 1K             | RESISTOR; 0402; 1K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                                 |
|     31 | SU1-SU8                         | -         | 8 2SN-BK-G                                                | SAMTEC                                | 2SN-BK-G       | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.175IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                                                            |
|     32 | SW1                             | -         | 1 219-10MST                                               | CTS                                   | 219-10MST      | SWITCH; SPST; SMT; STRAIGHT; 20V; 0.1A; SURFACE MOUNT DIP SWITCH-AUTO PLACEABLE; RINSULATION=1000MOHM                                                                               |
|     33 | TP1                             | -         | 1                                                         | 5010 KEYSTONE                         | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                                               |
|     34 | TP6                             | -         | 1 571-0500                                                | DELTRON                               | 571-0500       | CONNECTOR; FEMALE; THROUGH HOLE; BANANA 4MMSOCKET; RIGHT ANGLE; 2PINS                                                                                                               |
|     35 | TP7                             | -         | 1 571-0100                                                | DELTRON                               | 571-0100       | CONNECTOR; FEMALE; THROUGH HOLE; BANANA 4MMSOCKET; RIGHT ANGLE; 2PINS                                                                                                               |
|     36 | TP9-TP11                        | -         | 3                                                         | 5011 KEYSTONE                         | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                             |
|     37 | TP13-TP19, TP21, TP23           | -         | 9                                                         | 5014 KEYSTONE                         | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                            |
|     38 | U1                              | -         | 1 MAX22515ATG+                                            | MAXIM                                 | MAX22515ATG+   | EVKIT PART - IC; MAX22515ATG+; IO-LINK TRANSCEIVER WITH INTEGRATED PROTECTION; TQFN24-EP 4X4; PACKAGE OUTLINE DRAWING: 21-0139; LAND PATTERN NUMBER: 90-0022; PACKAGE CODE: T2444+4 |
|     39 | U2                              | -         | 1 MAX17501EATB+                                           | MAXIM                                 | MAX17501EATB+  | IC; CONV; ULTRA-SMALL; HIGH-EFFICIENCY; SYNCHRONOUS STEP- DOWNDC-DC CONVERTER; TDFN10-EP                                                                                            |
|     40 | U3                              | -         | 1 ECS-.327-6-12                                           | ECS INC                               | 32.768KHZ      | CRYSTAL; SMT 2.0 MMX1.2 MM; 6PF; 32.768KHZ; +/-20PPM; -0.03PPM/DEGC2                                                                                                                |
|     41 | U4                              | -         | 1 MAX32660GTP+                                            | MAXIM                                 | MAX32660GTP+   | IC; UCON; ULTRA-LOW POWER ARM CORTEX-M4 WITH FPU-BASED MICROCONTROLLER FOR WEARABLE AND IOT SENSORS; TQFN20-EP                                                                      |
|     42 | U6                              | -         | 1 FT234XD                                                 | FUTURE TECHNOLOGY DEVICES INTL LTD    | FT234XD        | IC; INFC; USB TO BASIC UART; DFN12-EP                                                                                                                                               |
|     43 | PCB                             | -         | 1 MAX22515                                                | MAXIM                                 | PCB            | PCB:MAX22515                                                                                                                                                                        |
|     44 | U5                              | DNP       | 0 ARDUINO_UNO_R3                                          | ARDUINO                               | ARDUINO_UNO_R3 | MODULE; ARDUINO_UNO_R3                                                                                                                                                              |
|     45 | VR1                             | DNP       | 0 VC060326A580DP                                          | AVX                                   | VC060326A580DP | VARISTOR; TVS; SMT (0603); VB=34.5V; IP=30A                                                                                                                                         |

Evaluates: MAX22515

-

## MAX22515 EV Kit Schematic

<!-- image -->

Evaluates: MAX22515

## MAX22515 EV Kit Schematic (continued)

<!-- image -->

## MAX22515 EV Kit PCB Layout Diagrams

MAX22515 EV Kit PCB Layout -Top Silkscreen

<!-- image -->

MAX22515 EV Kit PCB Layout -Top Layer

<!-- image -->

│

## MAX22515 EV Kit PCB Layout Diagrams (continued)

MAX22515 EV Kit -Internal 2

<!-- image -->

MAX22515 EV Kit -Internal 3

<!-- image -->

│

## MAX22515 EV Kit PCB Layout Diagrams (continued)

MAX22515 EV Kit -Bottom Layer

<!-- image -->

MAX22515 EV Kit -Bottom Silkscreen

<!-- image -->

│

## MAX22515 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/19           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

│

Evaluates: MAX22515