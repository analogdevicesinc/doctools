<!-- lastmod 2022-08-02 -->
## MAX14819 Evaluation Kit

## General Description

The  MAX14819  evaluation  kit  (EV  kit)  consists  of  the evaluation board and software. The EV kit is a fully assembled and  tested  circuit  board  that  evaluates  the  MAX14819A IO-Link ®  dual-channel master transceiver.

The EV kit includes Windows ®  7-compatible software that provides  a  graphical  user  interface  (GUI)  for  exercising the features of the device. The EV kit is connected to a PC through a USB A-to- micro B cable.

The MAX14819 EV kit can also be used to evaluate the MAX14819.

## Features

- IO-Link-Compliant Device Transceiver
- IO and SPI Interface Terminals
- Windows 7-Compatible Software
- USB-PC Connection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX14819 EV Kit Block Diagram

IO-Link is a registered trademark of Profibus User Organization (PNO).

<!-- image -->

Windows, Windows XP, and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

<!-- image -->

## Evaluates: MAX14819/MAX14819A

## Quick Start

## Recommended Equipment

- MAX14819 EV kit (USB A-to-B cable included)
- User-supplied Windows 7 PC with a spare USB port
- 24V, 1A DC power supply*
- Multimeter/voltmeter

*L+A and L+B are each configured for a 1A (typ) current limit,  so  a  higher  load-capable  power  supply  may  be required for testing.

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation before exercising the full features of the device:

- 1)  Visit www.maximintegrated.com/evkitsoftware to download  the  latest  version  of  the  EV  kit  software, MAX14819EVKITSetupVx.xx.ZIP . Save the EV kit software to a temporary folder and uncompress the ZIP file.

## MAX14819 Evaluation Kit

- 2)  Install  the  EV  kit  software  and  USB  driver  on  your computer  by  running  the  MAX14819EVKITSetupVx. xx.EXE  program  inside  the  temporary  folder.  The program  files  are  copied  to  your  PC  and  icons  are created  in  the  Windows Start  |  Programs  |  Maxim Integrated menu.  During  software  installation,  some versions  of  Windows  may  show  a  warning  message indicating  that  this  software  is  from  an  unknown publisher. This is not an error condition and it is safe to proceed with installation. Administrator privileges are required to install the USB device driver on Windows.
- 3)  Verify that all the jumpers are in their default positions, as shown in Table 1.
- 4)  Connect the 24V DC power supply on the VCC and GND connectors on the EV kit board.
- 5)  Connect the multimeter to the V5 testpoint (TP22)
- 6)  Connect  the  USB  cable  from  the  PC  to  the  EV  kit board. A Windows message appears when connecting the  EV  kit  board  to  the  PC  for  the  first  time.  Each version of Windows has a slightly different message. If you see a Windows message stating ready to use , then proceed to the next step.
- 7)  Start  the  EV  kit  software  by  opening  its  icon  in  the Windows Start | Programs | Maxim Integrated menu. The EV kit software main window appears, as shown in Figure 1.
- 8)  Verify that Status: MAX14819EVKIT A Connected is displayed on the status bar at the bottom of the main window (Figure 1).
- 9)  Turn  on  the  24V  supply.  Ensure  that  the  V5  voltage (TP22) is 5V.
- 10)  Click on the Read All button to read all of the registers in the device.
- 11)  Select a register in the register table to access the bits in that register by clicking on the register name.
- 12)  Using the Register Bit Description table that pops up, set the individual bits by selecting the required setting from the drop-down menu for each bit.
- 13)  Press  the Write  Changes button  on  the  GUI  to write  the  registers  that  have  been  changed  to  the MAX14819.

## Detailed Description of Software

## Configuring the Registers

Click on a register name in the register table to access the individual bits in that register. When the register name is selected in the register table, a corresponding Register Bit  Description  table  appears,  allowing  access  to  set individual bits. Click on the drop-down menu next to each bit  in  the  Register  Bit  Description  table  to  select  the  bit

## Evaluates: MAX14819/MAX14819A

setting. When all of the bits are set as desired, click on the Write Changes button to write the changed bit settings to the MAX14819A over the SPI interface.

Note that full IO-Link communication is not available using the EV kit GUI. Please use the MAXREFDES145 for full IO-Link communication with the MAX14819A.

## Interrupt Response ( IRQ )

The MAX14819A features an integrated active-low interrupt indicator pin to actively notify the controller when an interrupt or  error  condition  occurs.  Enable  interrupts  in  the  by setting the bits in the InterruptEn register.

When  an  interrupt  is  triggered,  the  IRQ  bit  in  the  SPI communication is set and the IRQ in the SPI Response box of the GUI turns red. On the EV kit PCB, the IRQ LED (DS6) also turns on.

## Detailed Description of Hardware

The  MAX14819  EV  kit  includes  the  MAX14819A  dualchannel  IO-Link  master  transceiver  and  the  external components for evaluating the device. All logic-level I/Os and  IO-Link  capable  I/Os  are  available  on  yellow  test points.

## Logic-Level Power Supply

The  MAX14819A  features  an  internal  5V  linear  regulator which can drive loads up to 20mA. When REGEN is unconnected, this 5V output is available on the V5 test point  (TP22).  Leave  J13  open  and  close  the  J5  jumper to use this internal 5V regulator to power the logic level supply (VL).

To use a different logic-level voltage supply, open the J5 jumper and apply the external supply to the VL testpoint (TP23).

## Selecting the Device Address

The MAX14819A includes two address pins for SPI addressing, allowing up to four devices on a single bus. Set the SPI address for the MAX14819A on the MAX14819EVKIT by setting the A1 and A0 jumpers (J11 and J12, respectively). Set the device SPI address in the GUI to the same value by selecting the corresponding address in the drop-down menu in the SPI Address box.

## Using SPI Interface with an External Master Controller

The MAX14819 EV kit includes an isolated USB-to-SPI interface circuit for communication with the PC/GUI.

To  use  an  external  SPI  master  controller  with  the MAX14819A, open all of the channels on SW1, and connect an the external SPI master to the J20 header. Note that the J20 header is not isolated from the MAX14819A.

Figure 1. MAX14819 EV Kit Software, EV Kit is Connected

<!-- image -->

Figure 2. MAX14819 EV Kit Software, Register Bit Description Table

<!-- image -->

## Table 1. Jumper Descriptions

| JUMPER   | SHUNT POSITON   | DESCRIPTION                                                                                               |
|----------|-----------------|-----------------------------------------------------------------------------------------------------------|
| J5       | Open            | VL is powered by an external supply. Apply an external voltage to the VL test point for normal operation. |
| J5       | Closed*         | VL is connected to V5.                                                                                    |
| J6       | Open            | IRQ is not pulled to VL through an LED                                                                    |
| J6       | Closed*         | IRQ is pulled up to VL through an LED                                                                     |
| J7       | Open            | RXRDYA /LD1A is not pulled to VL through an LED                                                           |
| J7       | Closed*         | RXRDYA /LD1A is pulled up to VL through an LED                                                            |
| J8       | Open            | RXERRA /LD2A is not pulled to VL through an LED                                                           |
| J8       | Closed*         | RXERRA /LD2A is pulled up to VL through an LED                                                            |
| J9       | Open            | RXERRB /LD2B is not pulled to VL through an LED                                                           |
| J9       | Closed*         | RXERRB /LD2B is pulled up to VL through an LED                                                            |
| J10      | Open            | RXRDYB /LD1B is not pulled to VL through an LED                                                           |
| J10      | Closed*         | RXRDYB /LD1B is pulled up to VL through an LED                                                            |
| J11      | 1-2             | A1 is connected to VL (high). Chip address pin A1 is 1.                                                   |
| J11      | 2-3*            | A1 is connected to GND (low). Chip address pin A1 is 0.                                                   |
| J12      | 1-2             | A0 is connected to VL (high). Chip address pin A0 is 1.                                                   |
| J12      | 2-3*            | A0 is connected to GND (low). Chip address pin A0 is 0.                                                   |
| J13      | Open*           | REGEN is unconnected. Internal 5V regulator is enabled.                                                   |
| J13      | Closed          | REGEN is connected to GND. Internal 5V regulator is disabled.                                             |
| J14      | Open            | TXENA is connected to VL (high)                                                                           |
| J14      | Closed*         | TXENA is connected to GND (low)                                                                           |
| J16      | Open            | TXENB is connected to VL (high)                                                                           |
| J16      | Closed*         | TXENB is connected to GND (low)                                                                           |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14819EVKIT# | EV Kit |

#Denotes RoHS compliant.

│

## MAX14819 EV Kit Bill of Materials

| REF_DES                            | DNI/DNP   | QTY MFGPART #                                                                                            | MANUFACTURER                                      | VALUE                    | DESCRIPTION                                                                                   |
|------------------------------------|-----------|----------------------------------------------------------------------------------------------------------|---------------------------------------------------|--------------------------|-----------------------------------------------------------------------------------------------|
| 1 C1                               | -         | 1 C1005X7R1V103K050BB                                                                                    | TDK                                               | 0.01UF                   | CAP; SMT (0402); 0.01UF; 10%; 35V; X7R; CERAMIC                                               |
| 2 C2, C4, C8                       | -         | 3 C0603C475K8PAC;LMK107BJ475KA; CGB3B1X5R1A475K;C1608X5R1A475 K080AC;CL10A475KP8NNN;C1608X5 R1A475K080AE | KEMET;TAIYO YUDEN;TDK;TDK;SAMSUNG ELECTRONICS;TDK | 4.7UF                    | CAP; SMT (0603); 4.7UF; 10%; 10V; X5R; CERAMIC                                                |
| 3 C3, C7, C9-C16, C18-C21          | -         | 14 C0402C104J4RAC;GCM155R71C104J A55                                                                     | KEMET;MURATA                                      | 0.1UF                    | CAP; SMT (0402); 0.1UF; 5%; 16V; X7R; CERAMIC                                                 |
| 4 C5, C6                           | -         | 2 C0402C180J5GAC;GRM1555C1H180 JA01;C1005C0G1H180J050BA                                                  | KEMET;MURATA;TDK                                  | 18PF                     | CAP; SMT (0402); 18PF; 5%; 50V; C0G; CERAMIC                                                  |
| 5 C17                              | -         | 1 C0402C105K8PAC;CC0402KRX5R6BB 105                                                                      | KEMET;YAGEO                                       | 1UF                      | CAP; SMT (0402); 1UF; 10%; 10V; X5R; CERAMIC                                                  |
| 6 C22                              | -         | 1 C1608X5R1A106K080AC                                                                                    | TDK                                               | 10UF                     | CAP; SMT (0603); 10UF; 10%; 10V; X5R; CERAMIC                                                 |
| 7 C25, C27, C35                    | -         | 3 GMK107BJ105KA; C1608X5R1V105K080AB                                                                     | TAIYO YUDEN;TDK                                   | 1.0UF                    | CAP; SMT (0603); 1.0UF; 10%; 35V; X5R; CERAMIC                                                |
| 8 C28, C34                         | -         | 2 C2012X7S2A105K125AB;GRJ21BC72 A105KE11;GRM21BC72A105KE01                                               | TDK;MURATA;MURATA                                 | 1UF                      | CAP; SMT (0805); 1UF; 10%; 100V; X7S; CERAMIC                                                 |
| 9 C29-C32                          | -         | 4 VJ0603A271KXBCW1BC                                                                                     | VISHAY VITRAMON                                   | 270PF                    | CAP; SMT (0603); 270PF; 10%; 100V; C0G; CERAMIC                                               |
| 10 C33                             | -         | 1 C0603C104K8RAC                                                                                         | KEMET                                             | 0.1UF                    | CAP; SMT (0603); 0.1UF; 10%; 10V; X7R; CERAMIC                                                |
| 11 C36                             | -         | 1 C5750X7S2A106M230KB                                                                                    | TDK                                               | 10UF                     | CAP; SMT (2220); 10UF; 20%; 100V; X7S; CERAMIC                                                |
| 12 D2, D6-D10                      | -         | 6 SMCJ48A                                                                                                | ST MICROELECTRONICS                               | 48V                      | DIODE; TVS; SMC; VRM=48V; IPP=20A                                                             |
| 13 D11                             | -         | 1 SM30T39AY                                                                                              | ST MICROELECTRONICS                               | 38.6V                    | DIODE; TVS; SMC (DO-214AB); VRM=38.6V; IPP=56.3A                                              |
| 14 D12                             | -         | 1 SM30T33AY                                                                                              | ST MICROELECTRONICS                               | 32.7V                    | DIODE; TVS; SMC (DO-214AB); VRM= 32.7V; IPP=66.1A                                             |
| 15 DS1                             | -         | 1 LG L29K-G2J1-24                                                                                        | OSRAM                                             | LG L29K-G2J1-24          | DIODE; LED; SMT (0603); Vf=1.7V; If(test)=0.002A; -40 DEGC TO +100 DEGC                       |
| 16 DS6-DS10                        | -         | 5 LTST-C150CKT                                                                                           | LITE-ON INC.                                      | LTST-C150CKT 105017-0001 | DIODE; LED; STANDARD; RED; SMT (1206); PIV=1.8V; IF=0.02A CONNECTOR; FEMALE; SMT; MICRO-USB B |
| 17 J1                              | -         | 1 105017-0001                                                                                            | ELECTRONICS MOLEX                                 |                          | RECEPTACLE; RIGHT ANGLE; 5PINS CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY;                      |
| 19 J11, J12, J14, J16              | -         | 4 PCC03SAAN                                                                                              | SULLINS                                           | PCC03SAAN                | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC      |
| 20 L1                              | - -       | 1 BLM21AG601SN1                                                                                          | MURATA                                            |                          | 600 INDUCTOR; SMT (0805); FERRITE-BEAD; 600; TOL=+/- 25%; 0.2A                                |
| 21 MISC1                           | -         | 1 68784-0001                                                                                             | MOLEX                                             | 68784-0001               | CONNECTOR; MALE; USB; USB A PLUG TO MICRO B PLUG CABLE ASSY; STRAIGHT; 4PINS-5PINS            |
| Q1-Q3, Q5                          |           | 4                                                                                                        | ON SEMICONDUCTOR                                  | NTTFS5116PL              | TRAN; POWER MOSFET; PCH; WDFN8; PD-(40W); I-(- 20A); V-(-60V)                                 |
| 22                                 | -         | NTTFS5116PLTAG                                                                                           |                                                   |                          | 10 RES; SMT (0402); 10; 1%; +/-100PPM/DEGC; 0.1000W                                           |
| 23 R1, R2, R10-R13                 | -         | 6 ERJ-2RKF10R0                                                                                           | PANASONIC                                         |                          |                                                                                               |
| 24 R3, R9, R30, R38, R40, R56, R57 | -         | 7 RC0603JR-0710KL                                                                                        | YAGEO PHYCOMP                                     | 10K                      | RES; SMT (0603); 10K; 5%; +/-100PPM/DEGC; 0.1000W                                             |
| 25 R4                              | -         | 1 CRCW060315K0FK                                                                                         | VISHAY DALE                                       | 15K                      | RES; SMT (0603); 15K; 1%; +/-100PPM/DEGC; 0.1000W                                             |
| 26 R5, R16-R19, R54                | -         | 6 CRCW040210K0FK;RC0402FR- 0710KL                                                                        | VISHAY DALE;YAGEO PHICOMP                         | 10K                      | RES; SMT (0402); 10K; 1%; +/-100PPM/DEGC; 0.0630W                                             |
| 27 R6                              | -         | 1 CRCW04022K20FK;RC0402FR- 072K2L                                                                        | VISHAY DALE;YAGEO PHICOMP                         | 2.2K                     | RES; SMT (0402); 2.2K; 1%; +/-100PPM/DEGC; 0.0630W                                            |
| 28 R7                              | -         | 1 CRCW060312K0FK                                                                                         | VISHAY DALE                                       | 12K                      | RES; SMT (0603); 12K; 1%; +/-100PPM/DEGC; 0.1000W                                             |
| 29 R8                              | -         | 1 CRCW06034K70FK                                                                                         | VISHAY DALE                                       | 4.7K                     | RES; SMT (0603); 4.7K; 1%; +/-100PPM/DEGC; 0.1000W                                            |

## MAX14819 EV Kit Bill of Materials (continued)

| REF_DES                    | DNI/DNP   | MFGPART #                                                              | MANUFACTURER                   | VALUE         | DESCRIPTION                                                                                                              |
|----------------------------|-----------|------------------------------------------------------------------------|--------------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------|
| 30 R14, R15                | -         | 2 CRCW0603100RFK;ERJ- 3EKF1000;RC0603FR-07100RL                        | VISHAY DALE;PANASONIC          | 100           | RES; SMT (0603); 100; 1%; +/-100PPM/DEGC; 0.1000W                                                                        |
| 31 R21, R22, R24, R25, R28 | -         | 5 CRCW040210R0FK; 9C04021A10R0FL                                       | VISHAY DALE;YAGEO              | 10            | RES; SMT (0402); 10; 1%; +/-100PPM/DEGC; 0.0630W                                                                         |
| 32 R23, R39                | -         | 2 ERJ-8CWFR015                                                         | PANASONIC                      | 0.015         | RES; SMT (1206); 0.015; 1%; +/-75PPM/DEGC;1W                                                                             |
| 33 R26, R27, R29, R31      | -         | 4 RC0402JR-07100RL                                                     | YAGEO PHYCOMP                  | 100           | RES; SMT (0402); 100; 5%; +/-100PPM/DEGC; 0.0630W                                                                        |
| 34 R33-R37                 | -         | 5 CRCW0603680RFK                                                       | VISHAY DALE                    | 680           | RES; SMT (0603); 680; 1%; +/-100PPM/DEGC; 0.1000W                                                                        |
| 35 SU1, SU3-SU7, SU12-SU15 | -         | 10 STC02SYAN                                                           | SULLINS ELECTRONICS CORP.      | STC02SYAN     | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL; |
| 36 SW1                     | -         | 1 219-7MST                                                             | CTS                            | 219-7MST      | SWITCH; SPST; SMT; STRAIGHT; 20V; 0.1A; SURFACE MOUNTDIP SWITCH-AUTO PLACEABLE; RINSULATION=1000MOHM                     |
| 37 TP1-TP3, TP6-TP19       | -         | 17                                                                     | 5014 KEYSTONE                  | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 38 TP20, TP22, TP23        | -         | 3                                                                      | 5010 KEYSTONE                  | N/A           | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                       |
| 39 TP21, TP24, TP26, TP27  | -         | 4                                                                      | 5011 KEYSTONE                  | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
| 40 U1                      | -         | 1 93LC66BT-I/OT                                                        | MICROCHIP                      | 93LC66BT-I/OT | IC; EPROM; 4K MICROWIRE SERIAL EEPROM; SOT23-6                                                                           |
| 41 U2                      | -         | 1 FT2232HL                                                             | FUTURE TECHNOLOGY DEVICES INTL | FT2232HL      | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; LQFP64                                                          |
| 42 U3                      | -         | 1 MAX14931FASE+                                                        | MAXIM                          | MAX14931FASE+ | IC; DISO; 3/1 CHANNEL; 150MBPS; DEFAULT LOW; 2.75KVRMS DIGITAL ISOLATOR; NSOIC16 150MIL;                                 |
| 43 U4                      | -         | 1 MAX12930BASA+                                                        | MAXIM                          | MAX12930BASA+ | EVKIT PART - IC; DISO; 2/0 CHANNEL; 25MBPS; DEFAULT HIGH; 3.75KVRMS DIGITAL ISOLATOR; NSOIC8 ;                           |
| 44 U5                      | -         | 1 MAX15006AATT+                                                        | MAXIM                          | MAX15006AATT+ | IC; VREG; ULTRA-LOW QUIESCENT-CURRENT LINEAR REGULATOR; TDFN6-EP 3X3;                                                    |
| 45 U10                     |           | 1 MAX14819AATM+                                                        | MAXIM                          | MAX14819AATM+ | IC; TXRX; DUAL IO-LINK MASTER TRANSCEIVER WITH INTEGRATED FRAMERS AND L+ SUPPLY CONTROLLERS;                             |
| 46 Y1                      | - -       | 1 ABM7-12.000MHZ-D2Y-T                                                 | ABRACON                        | 12MHZ         | TQFN48-EP CRYSTAL; SMT ; 18PF; 12MHZ; +/-20PPM; +/-30PPM                                                                 |
| 47 Y2                      | -         | 1 MJ-14.74560-12-30/30/4085                                            | MERCURY ELECTONICS EUROPE      | 14.7456MHZ    | CRYSTAL; SMT; 12PF; 14.7456MHZ; +/-30PPM;                                                                                |
| 48 PCB                     | -         | 1 MAX                                                                  | MAXIM                          | PCB           | PCB:MAX                                                                                                                  |
| 49 C23, C24                | DNP       | 0 C0805C474K5RAC; GCM21BR71H474K; GRM21BR71H474KA88;GCM21BR71 H474KA55 | KEMET;MURATA;MURATA;MURATA     | 0.47UF        | CAP; SMT (0805); 0.47UF; 10%; 50V; X7R; CERAMIC                                                                          |
| 50 J20                     | DNP       | 0 PBC06SAAN                                                            | SULLINS ELECTRONICS CORP.      | PBC06SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS; -65 DEGC TO +125 DEGC                                         |

## MAX14819 EV Kit Schematic

<!-- image -->

## MAX14819 EV Kit Schematic (continued)

<!-- image -->

## MAX14819 EV Kit PCB Layout Diagrams

MAX14819 EV Kit PCB Layout -Top Silkscreen

<!-- image -->

MAX14819 EV Kit PCB Layout -Top

<!-- image -->

│

## MAX14819 EV Kit PCB Layout Diagrams (continued)

MAX14819 EV Kit -Ground

<!-- image -->

MAX14819 EV Kit -Power

<!-- image -->

│

## MAX14819 EV Kit PCB Layout Diagrams (continued)

MAX14819 EV Kit -Bottom

<!-- image -->

MAX14819 EV Kit -Bottom Silkscreen

<!-- image -->

│

## MAX14819 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                                                                                                         | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 3/17            | Initial release                                                                                                                                                                                                                                                                                     | -               |
|                 1 | 9/17            | Updated schematic and bill of materials                                                                                                                                                                                                                                                             | 5, 9            |
|                 2 | 3/20            | Updated title and General Description                                                                                                                                                                                                                                                               | 1-12            |
|                 3 | 2/21            | Updated the General Description, Block Diagram, Configuring the Registers, Interrupt Response ( IRQ ), Detailed Description of Hardware, Logic-Level Power Supply, Selecting the Device Address, Using SPI Interface with an External Master Controller, Bill of Materials, and Schematics sections | 1-2, 5-8        |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

│

Evaluates: MAX14819/MAX14819A