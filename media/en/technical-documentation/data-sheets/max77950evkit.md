<!-- lastmod 2022-08-03 -->
## MAX77950 Evaluation Kit

## General Description

The MAX77950 evaluation kit (EV kit) is a fully assembled and tested PCB that evaluates the MAX77950 advanced wireless power receiver IC. The IC meets the specification requirements  for  WPC  low-power  (v1.2)  and  PMA  SR1 (v2.0) communication protocols and operates using nearfield magnetic induction when coupled with WPC or PMA transmitters, providing up to 12W of output power.

The EV kit comes with a planar coil to receive or transmit power  wirelessly,  as  well  as  Windows ® -based  software that provides a graphical user interface (GUI) to evaluate the functions of the device.

## Benefits and Features

- Ready-to-Go EV Kit with Receiver Coil
- Multiple Test Points to Measure Output Voltage (V OUT ), Rectifier Output Voltage (V RECT ), and AC Voltage
- Graphical User Interface (GUI) Software for the Multifunction Test
- LED Indication to Monitor Operation
- RoHS Compliant
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

## Quick Start

Required Equipment

- MAX77950 EV kit
- Wireless power transmitter with WPC/PMA compliance
- Micro-USB cable
- Digital multimeter (DVM)
- Windows-based PC
- Optional: DC power supply
- Optional: Electronic load

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## MAX77950 EV Kit Photo

<!-- image -->

<!-- image -->

Evaluates: MAX77950

## MAX77950 Evaluation Kit

## Procedures

The EV kit is fully assembled and tested. The following steps are used to verify board operation.

## Install the EV Kit GUI

The EV kit GUI allows the user to communicate with the EV kit. The GUI connects to the EV kit through an I 2 C and USB interface to monitor and control the IC by changing the  register-related  functions  such  as  FOD  coefficient, VRECT target for WPC/PMA, and LDO output voltage.

- 1) Visit www.maximintegrated.com/evkitsoftware to download  the  latest  version  of  the  EV  kit  software, MAX77950\_EVKIT\_GUI\_1.70207.0D-x86.zip. Save the EV kit software to a temporary folder and uncompress the file.
- 2) Unzip  and  run  the  execution  file  and  follow  the  in -structions to finish the installation.

## Startup

- 3) Ensure that  the  EV  kit  has  the  desired  jumper  settings, as shown in Table 1.
- 4) Connect to a PC using the Micro-USB cable (see the MAX77950 EV Kit Photo ).
- 5) Turn on the WPC/PMA transmitter to provide power to the EV kit.

## Table 1. Default Jumper Settings

| JUMPER   | NODE OR FUNCTION   | SHUNT POSITION   | FUNCTION                                |
|----------|--------------------|------------------|-----------------------------------------|
| J1       | WP_EN              | 1-2              | The device is disabled.                 |
| J1       | WP_EN              | 2-3*             | The device is enabled.                  |
| J2       | P2P_EN             | 1-2              | Connecting P2P_EN to VIO.               |
| J2       | P2P_EN             | 2-3              | Not in use.                             |
| J2       | P2P_EN             | OPEN*            | PeerPower is disabled.                  |
| J3       | WP_DET             | 1-2*             | Connect WP_DET to LED.                  |
| J101     | VIO                | 1-2              | An external source (1.8V) supplies VIO. |
| J101     | VIO                | 2-3*             | On-board 1.8V LDO (U103) supplies VIO.  |

PeerPower is a trademark of Maxim Integrated Products, Inc.

## Evaluates: MAX77950

- 6) Place the EV kit on the transmitter and align properly.
- 7) Check  that  the  power-good  indicator  LED  (DS1) is on.
- 8) Launch the EV kit GUI. Press Connect under the Device menu to initiate the link with the EV kit as shown in Figure 1.

## PeerPower

Follow the  steps  below  to  operate  the  EV  kit  in  PeerPower TM mode:

- 9) Disconnect all power supplies from the EV kit.
- 10)  Make a jumper connection on P2P\_EN (J2) to VIO pins (1-2) to enable PeerPower mode.
- 11) Set J101 to pins 1-2 if an external voltage source is used to supply 1.8V to VIO; otherwise, set to pins 2-3 to use the on-board 1.8V.
- 12)  Preset a DC power supply to 5V (if you choose to use an external source to VIO, preset the other DC power supply to 1.8V).
- 13)  Connect the 5V DC power supply to V OUT and 1.8V to E\_VIO (see the MAX77950 EV Kit Photo )
- 14)  Turn on the power supply.
- 15)  The EV kit is now ready to operate as a transmitter.

*For VIO to use on-board 1.8V from LDO (U103), connect to a 5V source through the Micro-USB cable (J4).

## Detailed Description of Software

The  MAX77950  EV  kit  GUI  (Figure  2)  is  a  convenient tool  to  control  the  IC  through  the  I 2 C  communication. The GUI consists of six tabs, and each one combines the related functions. For example, in the RXMODE tab, the Evaluates: MAX77950

registers  related  to  receiver  mode  of  the  IC  are  shown and  controlled  by  using  a  slidebar  if  they  are  writable registers. The registers load the data from OTP when the IC restarts. The current register values are presented by clicking the Read button.

Figure 1. MAX77950 EV Kit GUI (Device Connect)

<!-- image -->

Figure 2. MAX77950 EV Kit GUI (STATUS Tab)

<!-- image -->

## MAX77950 Evaluation Kit

## RXMODE

In  the RXMODE tab,  the  registers  associated  with  the receiver mode function can be examined. Some registers are writable and can be changed by the user.

- The LDO output voltage (V OUTSET ) and the LDO current  limit  (LDO\_ILMITSET)  can  be  changed  by  the user. As seen in box #1 in Figure 3, the default value of V OUT  is 5V.
- Click Read to  ensure that the current value in the register is properly displayed.
- Adjust  the  slide  bar  to  set  the  value  desired  and send  the  changes  to  the  IC  by  clicking  the Write button next to the slide bar.
- Repeat the steps to change the LDO current limit (box #2).
- The  end-power-transfer  (EPT)  packet  can  be  sent manually by the GUI along with the reason for EPT. The reason for EPT must be set before sending the EPT packet (Figure 3).
- By sliding the cursor, the reason for EPT can be selected. Click Write to fix the values of EPT reason on the EPT\_REASON register (box #3).

Evaluates: MAX77950

- To send the EPT packet, toggle the switch next to the Send EPT in  box  #4  and  then  click  the Write button (#5) in the RX\_COM group box.
- The proprietary packet (PPP) can also be sent by the IC. The user can practice sending a PPP using the GUI.  In  WPC  specifications,  several  PPPs  are  de -fined and they have a message length up to 20 bytes. The IC supports the PPP that supports up to 5 bytes of the message.

The  following  example  procedure  is  for  sending  a  PPP with the GUI:

- Decide on the PPP with the designed message length (in this example, it is 3)
- Write the PPP\_HEADER as 0x38 because the PPP that starts with the 0x38 header is defined to have 3 bytes of the message in the specification (box #6).
- Write  3  bytes  of  message  in  the  RX\_DATA\_VAL-UE0/1/2 (box #7).
- Toggle on the SEND\_RX\_DATA bit (box #8) and send by clicking the Write button (box #5).

Figure 3. MAX77950 EV Kit GUI (RXMODE Tab)

<!-- image -->

## MAX77950 Evaluation Kit

## FOD-RX

As  required  by  the  WPC  specifications,  foreign  object detection (FOD) is a function of the IC. The coefficient for the FOD can be modified in the FOD-RX tab (Figure 4).

Evaluates: MAX77950

- Click  the FOD-RX tab  in  the  left  sidebar.  Read  the registers to see the current FOD coefficients.
- Adjust the coefficients as desired by dragging the cur -sor on the slide bars. Then, click the Write button to send the changes to the IC (to decide the FOD coefficients, refer to the MAX77950 IC data sheet).

Figure 4. MAX77950 EV Kit GUI (FOD-RX Tab)

<!-- image -->

## MAX77950 Evaluation Kit

## VRECT-RX

The EV kit GUI offers a way to adjust the targeted V RECT values.  In  the VRECT-RX tab  (Figure  5),  four  sub-tabs can be found. The purpose of these tabs are to control the V RECT  values only, such as V RECT  X, V RECT  Y for WPC, and VRECT Y for PMA respectively. The targeted values are to be set either in the V RECT  tab or the specific V RECT  tabs. The following procedures are to set the VRECT target for the IC.

Evaluates: MAX77950

- 1) Change the target values by moving the cursor on the slide bars. In the specific V RECT tab, shown in Figure 6 ,  the user can check the actual electrical representation translated from hexadecimal (Figure 6 ). The MAX77950 data sheet provides detailed information about the V RECT target values.
- 2) To apply the change, click the Write button.

Figure 5. MAX77950 EV Kit GUI (VRECT-RX Tab)

<!-- image -->

Figure 6. MAX77950 EV Kit GUI (VRECT-RX Tab)

<!-- image -->

## MAX77950 Evaluation Kit

## TXMODE

The  TXMODE  tab  is  dedicated  to  PeerPower  mode  in which  the  IC  operates  as  a  transmitter.  In  this  tab,  the current  limit  and  the  ping  operating  frequency  can  be defined by the GUI. In addition, the user can check the Evaluates: MAX77950

packets delivered from a receiver. As shown in Figure 7, the current limit (box #1) and the ping operation frequency (box #2) can be set by sliding cursors, respectively. The detailed  description  on  PeerPower  can  be  found  in  the MAX77950 IC data sheet.

Figure 7. MAX77950 EV Kit GUI (TXMODE Tab)

<!-- image -->

## MAX77950 Evaluation Kit

## MONITOR

The EV kit GUI provides the user with the MONITOR tab to see the current information of the IC during its operation. The information includes V OUT , V RECT , die temper- Evaluates: MAX77950

ature, load current read by ADC, and operating frequency. Click the Refresh or Read button to update the readings.

Figure 8. MAX77950 EV Kit GUI (MONITOR Tab)

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX77950EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX77950 Evaluation Kit

## MAX77950 EV Kit Bill of Materials

| PART                              |   QTY | DESCRIPTION                                                                                                               |
|-----------------------------------|-------|---------------------------------------------------------------------------------------------------------------------------|
| C1-C4                             |     4 | SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; Kemet C0603C104K5RAC; TDK C1608X7R1H104K |
| C5, C6, C12, C13                  |     4 | SMT (0402); CERAMIC CHIP; 0.047UF; 50V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R; TDK C1005X5R1H473K050                   |
| C7, C14                           |     2 | SMT (0402); CERAMIC CHIP; 0.015UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; Murata GRM155R71H153KA12               |
| C8, C9, C11, C20, C21             |     5 | SMT (0805); CERAMIC CHIP; 10UF; 25V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R; Taiyo-Yuden TMK212BBJ106KG-T       |
| C10                               |     1 | SMT (0402); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; TDK CGA2B3X7R1H104K                      |
| C15                               |     1 | CAPACITOR; SMT (0402); OPEN                                                                                               |
| C16-C19                           |     4 | SMT (0402); CERAMIC CHIP; 1UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R; Murata GRM155R61A105KE15            |
| C22                               |     1 | CAPACITOR; SMT (0603); OPEN                                                                                               |
| C23                               |     1 | SMT (0402); CERAMIC CHIP; 0.01UF; 50V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R; TDK C1005X5R1H103K050                    |
| C24                               |     1 | SMT (0402); CERAMIC CHIP; 2200PF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; Murata GRM155R71H222KA01                |
| C25                               |     1 | SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL=10%; MODEL=C0G; TG=-55 DEGC TO +125 DEGC; TC=+; Kemet C0402C102K5GAC           |
| C108, C150, C151, C155-C157, C159 |     7 | SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R; TDK C1005X7R1E104K050BB  |
| C110-C113, C115, C118, C158       |     7 | SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R;                                    |
| C114                              |     1 | CAPACITOR; SMT; 0603; CERAMIC; 0.47uF; 10V; 10%; X5R; -55DEGC to + 125DEGC; Kemet C0603C474K8PAC                          |
| C120                              |     1 | SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R; TDK C1005X5R0J105M050BB    |
| C152, C153                        |     2 | SMT; 0402; CERAMIC; 8.2pF; 50V; 0.25%; C0G; -55DEGC to + 125DEGC; 0 +/- 30PPM/DEGC; Kemet C0402C829C5GAC                  |

Evaluates: MAX77950

## MAX77950 Evaluation Kit

## MAX77950 EV Kit Bill of Materials (continued)

| PART                |   QTY | DESCRIPTION                                                                                                                      |
|---------------------|-------|----------------------------------------------------------------------------------------------------------------------------------|
| C154                |     1 | SMT (0603); CERAMIC CHIP; 4.7UF; 16V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R; TDK C1608X5R1C475K080AC                  |
| D1                  |     1 | SCH; SCHOTTKY BARRIER DIODE; SMT (SOD-723); PIV=30V; IF=0.1A; RB520G-30                                                          |
| D2, D7              |     2 | TVS; SMT (SOD882); VRM=12V; IPP=7.8A; NXP PESD12VV1BL; OPEN                                                                      |
| D3-D6               |     4 | SCH; SCHOTTKY BARIER DIODE; SMT; OPEN                                                                                            |
| D8-D11              |     4 | SCH; SCHOTTKY BARIER DIODE; SMT; OPEN                                                                                            |
| D100, D101          |     2 | LED; STANDARD; YELLOW; SMT (0603); PIV=5.0V; IF=0.02A; -55 DEGC TO +85 DEGC; Lite-On Electronics LTST-C190YKT                    |
| DS1, D103           |     2 | LED; STANDARD; RED; SMT (0603); PIV=5.0V; IF=0.04A; -55 DEGC TO +85 DEGC; Lite-On Electronics LTST-C190CKT                       |
| FB100               |     1 | INDUCTOR; SMT (0603); FERRITE-BEAD; 220; TOL=+/-25%; 1.4A; -55 DEGC TO +125 DEGC; Murata BLM18PG221SN1                           |
| GND1-GND4           |     4 | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG; Weico Wire 9020 BUSS                   |
| J1, J2              |     2 | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC; Sullins Electronics Corp. PEC03SAAN |
| J3                  |     1 | THROUGH HOLE; C-GRID III SINGLE ROW STRAIGHT PIN HEADER; STRAIGHT THROUGH; Molex 90120-0762                                      |
| J4                  |     1 | CONNECTOR; FEMALE; SMT; MICRO USB B-TYPE REVERSE; RIGHTANGLE; 5PINS FCI Connect 10103592-0001LF                                  |
| J5, J101            |     2 | THROUGH HOLE; SINGLE ROW; STRAIGHT; 3PINS Samtec TSW-103-07-L-S                                                                  |
| PGND2, VOUT2, VRECT |     3 | EVK KIT PARTS; MAXIM PAD; NO WIRE TO BE SOLDERED ON THE MAXIMPAD                                                                 |
| Q1                  |     1 | POWER MOSFET; SINGLE N-CHANNEL; NCH; SC70; PD-(1W); I-(4A); V-(30V) ON Semiconductor MCH3474-TL-W                                |
| R1,R7               |     2 | RESISTOR; 0402; OPEN                                                                                                             |
| R2, R11, R13, R15   |     4 | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM Vishay Dale CRCW0402100KFK                                                 |
| R3, R129, R130      |     3 | RESISTOR; 0402; 100 OHM; 1%; 100PPM; 0.063W; THICK FILM; Vishay Dale CRCW0402100RFK                                              |

Evaluates: MAX77950

## MAX77950 Evaluation Kit

## MAX77950 EV Kit Bill of Materials (continued)

| PART                        |   QTY | DESCRIPTION                                                                                                                             |
|-----------------------------|-------|-----------------------------------------------------------------------------------------------------------------------------------------|
| R4, R5                      |     2 | RESISTOR, 0402, 2.2K OHM, 1%, 100PPM, 0.0625W, THICK FILM; Vishay Dale CRCW04022K20FK                                                   |
| R6                          |     1 | RESISTOR; 0402; 620 OHM; 1%; 100PPM; 0.063W; THICK FILM; Vishay Dale CRCW0402620RFK                                                     |
| R9                          |     1 | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.063W; THICK FILM; Vishay Dale CRCW04020000ZS                                                       |
| R10                         |     1 | RESISTOR; 0402; 20K OHM; 1%; 100PPM; 0.063W; THICK FILM; Vishay Dale CRCW040220K0FK                                                     |
| R14                         |     1 | RESISTOR; 0402; OPEN                                                                                                                    |
| R102                        |     1 | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                    |
| R103                        |     1 | RESISTOR; 0603; 1M; 1%; 100PPM; 0.10W; THICK FILM                                                                                       |
| R104, R105                  |     2 | RESISTOR, 0402, 22 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                 |
| R107, R108, R112, R115-R119 |     8 | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                    |
| R109, R110                  |     2 | RESISTOR, 0402, 4.7K OHM, 1%, 100PPM, 0.0625W, THICK FILM Vishay Dale CRCW04024K70FK                                                    |
| R111                        |     1 | RESISTOR, 0402, 470 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                |
| Coil                        |     1 | COIL; 760308102207; Wurth                                                                                                               |
| U1                          |     1 | IC; MAX77950; PACKAGE OUTLINE 52 BUMPS WLP PKG. 0.40MM PITCH; W546A9+1; PKG. DWG. NO.: 21-100082; Maxim Integrated MAX77950EWW          |
| U100                        |     1 | IC; CTRL; LOW-POWER LCD MICROCONTROLLER; TQFN56-EP 8X8 Maxim Integrated MAXQ2000-RBX+                                                   |
| U101                        |     1 | IC; INFC; UART INTERFACE IC USB TO SERIAL; QFN32-EP 5X5 Future Technology Devices International LTD.FT232RQ                             |
| U102                        |     1 | IC; VREG; ULTRA-LOW-NOISE, HIGH PSRR, LOW-DROPOUT, LINEAR REGULATOR; SC70-5; -40 DEGC TO +85 DEGC; Maxim Integrated MAX8511EXK33+       |
| U103                        |     1 | IC; VREG; ULTRA-LOW-NOISE; HIGH PSRR; LOW=DROPOUT; LINEAR REGULATOR; SC70-5 Maxim Integrated MAX8511EXK18+                              |
| U104                        |     1 | IC; VREG; ULTRA-LOW-NOISE HIGH PSRR LOW-DROPOUT LINEAR REGULATOR; SC70-5; -40 DEGC TO +85 DEGC; Maxim Integrated MAX8511EXK25+          |
| U107                        |     1 | IC; TRANS; 15KV ESD-PROTECTED HIGH-DRIVE CURRENT QUAD-LEVEL TRANSLATOR WITH SPEED-UP CIRCUITRY; TQFN12 4X4 Maxim Integrated MAX3395EETC |
| Y101                        |     1 | CRYSTAL; SMT (3225) 3.2X2.5; 8PF; 16MHZ; +/-10PPM; +/-15PPM Kyocera-Kinseki CX3225SB16000D0FLJZZ                                        |
| PCB                         |     1 | PCB: MAX77950 EVKIT                                                                                                                     |

Evaluates: MAX77950

## MAX77950 EV Kit Schematic

<!-- image -->

## MAX77950 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX77950

## MAX77950 Evaluation Kit

## MAX77950 EV Kit PCB Layouts

MAX77950 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX77950 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

Evaluates: MAX77950

MAX77950 EV Kit PCB Layout-Top Layer

<!-- image -->

MAX77950 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

## MAX77950 EV Kit PCB Layouts (continued)

MAX77950 EV Kit PCB Layout-Internal Layer 3

<!-- image -->

MAX77950 EV Kit PCB Layout-Bottom Layer

<!-- image -->

## MAX77950 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX77950