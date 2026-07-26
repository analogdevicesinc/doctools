<!-- lastmod 2022-08-02 -->
## MAX17271 Evaluation Kit

## General Description

The  MAX17271  evaluation  kit  (EV  kit)  evaluates  the MAX17271.  The  MAX17271  is  a  3-output  switching regulator that regulates three outputs using a single, small 2.2µH inductor. The MAX17271 includes an I 2 C interface to configure the output voltages.

The MAX17271 EV kit features two independent circuits to evaluate two different IC packages of the MAX17271. Both circuits on the EV kit operates over an input range of 2.7V to 5.5V. Each circuit features an I 2 C interface to set the three output channels to voltages from 0.8V to 5.175V for each output channel. Each circuit output on the EV kit delivers up to 50mA/75mA/80mA of current depending on the input voltage to the output voltage ratio.

The MAX17271 EV kit includes a graphical user interface (GUI) that provides communication over I 2 C with an onboard IC.

The  EV  kit  comes  with  the  MAX17271ETE+  and  the MAX17271ENE+ installed.

## Features

- Two Independent Circuits on One Board
- Evaluates the MAX17271 IC in a 16-pin TQFN
- Evaluates the MAX17271 IC in a 4 x 4 Bump, 0.4mm Pitch WLP
- Two Independent On-board I 2 C Interface Circuits
- Windows XP, Windows 7/8/8.1/10-Compatible Software
- 2.7V to 5.5V Input Range
- 0.8V to 5.175V Configurable Output Voltage
- Up to 50mA/75mA/80mA Output Current
- Proven 4-Layer 1oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assemble and Tested

Ordering Information appears at end of data sheet.

Windows are registered trademarks and registered service marks of Microsoft Corporation.

Evaluates: MAX17271

## Quick Start

## Required Equipment

- MAX17271 EV kit (includes micro-USB cable)
- 2.7V to 5.5V, 1A DC power supply
- Electronic load capable of 100mA
- Digital voltmeter (DVM)

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure (Testing the TQFN Circuit)

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution: Do not turn on power supply until all connections are completed.

- 1) Visit http://www.maximintegrated.com/max17271EVKIT and navigate to the Design Resources tab to download the latest version of the EV kit software, 17271EVKit.ZIP. Save the EV kit software to a temporary folder and unzip the ZIP file.
- 2) Verify  that  header  J1  have  shunts  in  their  default positions, as shown in Table 1.
- 3) Connect the 2.7V to 5.5V power supply between the IN1 and nearest PGND1 terminal posts.
- 4) Turn on the power supply and set the power supply output to 3V.
- 5) Connect  the  USB  cable  from  the  PC  to  the  USB1 connector on the MAX17271 EV kit board.
- 6) Open  the  EV  kit  GUI,  MAX17271EVKit.exe  and select File → Connect . See Figure 1.
- 7) Click the Enable Channel 1 checkbox.
- 8) Select 0.5A in the Channel Peak Current drop-down list.
- 9) Enter 1000mV in the Channel Target Output Voltage edit box, and click the Write button.
- 10)  Verify  that  the  output  voltage  at  OUT1  and  nearest PGND1 terminal posts is 1.0V.
- 11)  Connect  the  electronic  load  between  OUT1  and PGND1. Set the electronic load to 50mA
- 12)  Enable the electronic load and verify that OUT1 is still 1.0V.

<!-- image -->

## MAX17271 EV Kit Files

| FILE                   | DECRIPTION              |
|------------------------|-------------------------|
| MAX17271 EV BOM        | EV Kit Bill of Material |
| MAX17271 EV PCB Layout | EV Kit Layout           |
| MAX17271 EV Schematic  | EV Kit Schematic        |

## Procedure (Testing the WLP Circuit)

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution: Do not turn on power supply until all connections are completed.

- 13)  Visit http://www.maximintegrated.com/max17271EVKIT and navigate to the Design Resources tab to download the latest version of the EV kit software, 17271EVKit.ZIP. Save the EV kit software to a temporary folder and unzip the ZIP file.
- 14)  Verify that header J101 have shunts in their default positions, as shown in Table 2.

Evaluates: MAX17271

- 15)  Connect the 2.7V to 5.5V power supply between the IN and nearest PGND terminal posts.
- 16)  Turn on the power supply and set the power supply output to 3V.
- 17)  Connect  the  USB  cable  from  the  PC  to  the  USB connector on the MAX17271 EV kit board.
- 18)  Open  the  EV  kit  GUI,  MAX17271EVKit.exe  and select File → Connect . See Figure 1.
- 19)  Click the Enable Channel 1 checkbox.
- 20)  Select 0.5A in the Channel Peak Current drop-down list.
- 21)  Enter 1000mV in the Channel Target Output Voltage edit box, and click the Write button.
- 22)  Verify that the output voltage at OUT101 and nearest PGND terminal posts is 1.0V.
- 23)  Connect  the  electronic  load  between  OUT101  and PGND. Set the electronic load to 50mA
- 24)  Enable the electronic load and verify that OUT101 is still 1.0V.

Figure 1.  MAX17271 Evaluation Kit Software Default (and Advance) Mode, Basic Panel Window

<!-- image -->

│

## Detailed Description of Software

The MAX17271 EV kit software GUI shown in Figure 1 provides a convenient means to control the MAX17271. The  MAX17271  EV  Kit  software  features  two  operation modes: Default and Advanced modes. The Default mode provides only one control panel, the Basic panel (Figure 1). While the Advanced mode provides three control panels, the  Basic,  the  SIMO  Buck-Boost,  and  the  Configuration and Interrupts panels (Figure 2 and Figure 3).

## Default Mode

The Default  mode  provide  one  control  panel,  the  Basic panel. The Basic panel divides the EV Kit functions into two  logical  blocks.  The  Channel  Control  block  and  the Register View block. The Channel Control block provides check  boxes  to  enable  or  disable  the  output  channels, drop-down boxes to select the channel peak currents, and edit  boxes  to  enter  the  channel  target  output  voltages. The  Write  buttons  are  used  to  enter  the  input  values, while the Read buttons are used to read back the current

## Explanation of 'Configuration and Interrupts'

## Evaluates: MAX17271

values for the Peak Currents and the Output Voltages of the respective channels.

The Register View block displays the contents, read from, and  write  to  the  MAX17271  registers.  The  left  bottom status bar indicates the I 2 C operation status. The center bottom  displays  the  software  version.  The  right  bottom status  bar  indicates  the  presence  or  absence  of  the MAX17271 IC.

## Advanced Mode

The  Advanced  mode  provide  three  control  panels,  the Basic, the SIMO Buck-Boost, and the Configuration and Interrupts panels. The Basic panel in the Advance mode is identical with that of the Default mode. The SIMO BuckBoost provide additional check boxes to enable or disable the  active  discharge  feature,  and  drop-down  boxes  to select the power-up and power-down delay.

The  Configuration  and  Interrupts  panel  features  three functional blocks: Global Configuration, Fault Mask, and Fault Indication. Refer to the MAX17271 IC data sheet for additional information.

|   NO. | CONFIGURATION        | BIT NAME                                   | EXPLANATION                                                                    |
|-------|----------------------|--------------------------------------------|--------------------------------------------------------------------------------|
|     1 | Global Configuration | Software Auto Restart Enable               | Enables/Disables Auto-Restart feature                                          |
|     2 | Global Configuration | Internal Bias Disable                      | Enables/Disables Internal Bias                                                 |
|     3 | Global Configuration | FBLO Idle Time                             | Allows selection of maximum idle time between pulses when V OUT < V OV         |
|     4 | Global Configuration | SIMO Drive Strength                        | Allows selection of four different transition time (slowest to faster) for EMI |
|     5 | Fault Mask           | ON Pin Rising Edge Interrupt Mask Enable   | Enables/Disables detection of rising edge interrupt on ON pin                  |
|     6 | Fault Mask           | VSUP Supply Overvoltage Fault Mask Enable  | Enables/Disables detection of VSUP Supply Overvoltage interrupt                |
|     7 | Fault Mask           | VSUP Supply Undervoltage Fault Mask Enable | Enables/Disables detection of VSUP Supply Undervoltage interrupt               |
|     8 | Fault Mask           | OUT3 Power Regulation Fault Mask Enable    | Enables/Disables detection of OUT3PowerRegulation interrupt                    |
|     9 | Fault Mask           | OUT2 Power Regulation Fault Mask Enable    | Enables/Disables detection of OUT2 Power Regulation interrupt                  |
|    10 | Fault Mask           | OUT1 Power Regulation Fault Mask Enable    | Enables/Disables detection of OUT1 Power Regulation interrupt                  |
|    11 | Fault Mask           | Thermal Fault Mask Enable                  | Enables/Disables detection of Overtemperature interrupt                        |
|    12 | Fault Indication     | ON Pin Rising Edge Interrupt               | Determines rising edge interrupt on ON pin                                     |
|    13 | Fault Indication     | VSUP Supply Overvoltage Fault              | Determines VSUP Overvoltage fault                                              |
|    14 | Fault Indication     | VSUP Supply Undervoltage Fault             | Determines VSUP Undervoltage fault                                             |
|    15 | Fault Indication     | OUT3 Power Regulation fault                | Determines OUT3 Regulation fault                                               |
|    16 | Fault Indication     | OUT2 Power Regulation fault                | Determines OUT2 Regulation fault                                               |
|    17 | Fault Indication     | OUT1 Power Regulation fault                | Determines OUT1 Regulation fault                                               |
|    18 | Fault Indication     | Thermal Interrupt Fault                    | Determines Thermal interrupt                                                   |

│

Figure 2. MAX17271 Evaluation Kit Software Advance Mode, SIMO Buck-Boost Panel Window

<!-- image -->

Figure 3. MAX17271 Evaluation Kit Software Advance Mode, Configuration, and Interrupts Panel Window

<!-- image -->

## Detailed Description of Hardware

The  MAX17271  evaluation  kit  (EV  kit)  evaluates  the MAX17271.  The  MAX17271  is  a  3-output  switching regulator that regulates three outputs using a single, small 2.2µH inductor. The MAX17271 includes an I 2 C interface to configure the output voltages.

The MAX17271 EV kit features two independent circuits to evaluate two different IC packages of the MAX17271. Both circuits on the EV kit operates over an input range of 2.7V to 5.5V. Each circuit features an I 2 C interface to set  the  three  output  channels,  to  voltages  from  0.8V  to 5.175V  for  each  output  channel.  Each  circuit  output  on the  EV  kit  delivers  up  to  50mA/75mA/80mA  of  current depending on the input voltage to the output voltage ratio.

The MAX17271 EV kit includes a graphical user interface (GUI) that provides communication over I 2 C with an onboard IC.

The  EV  kit  comes  with  the  MAX17271ETE+  and  the MAX17271ENE+ installed.

│

## MAX17271 Evaluation Kit

## On-Board I 2 C for the MAX17271ETE+ (TQFN) Circuit

The  MAX17271  (TQFN)  circuit  on  the  EV  kit  contains an  on-board  USB  interface  to  communicate  with  the MAX17271ETE+  using  I 2 C  signals.  The  on-board  USB interface is connected to the MAX17271 (TQFN) through header  J1.  To  use  the  on-board  USB  interface,  install shunts on header J1, as shown in Table 1. To use external I 2 C,  remove all shunts from header J1 and connect the I 2 C signals on the respective test points.

Evaluates: MAX17271

## On-Board I 2 C for the MAX17271ENE+ (WLP) Circuit

The  MAX17271  (WLP)  circuit  on  the  EV  kit  contains an  on-board  USB  interface  to  communicate  with  the MAX17271ENE+ using I 2 C  signals.  The  on-board  USB interface is connected to the MAX17271 (WLP) through header J101. To use the on-board USB interface, install shunts on header J101, as shown in Table 2. To use external I 2 C, remove all shunts from header J101 and connect the I 2 C signals on the respective test points.

## Spare Inductors

The MAX17271 EV kit provides spare inductors  on  the PCB's bottom side. The spare inductors can be used to reconfigure the EV kit output current ratings.

Table 1. On-Board I 2 C (J1) on MAX17271 (TQFN) Circuit

| J1 SHUNT POSITION   | INSTALLED*                                         | NOT INSTALLED   |
|---------------------|----------------------------------------------------|-----------------|
| 1-2                 | VIO1 = +3.3V1 = +3.3V_M1 (On-board LDO)            | VIO1 = OPEN     |
| 3-4                 | SCL1 = SCL_M1 (On-board I 2 C clock)               | SCL1 = OPEN     |
| 5-6                 | SDA1 = SDA_M1 (On-board I 2 C data)                | SDA1 = OPEN     |
| 7-8                 | IRQB1 = IRQB_M1 (On-board I 2 C interrupt request) | IRQB1 = OPEN    |
| 9-10                | DGND1 pins (No shunt required)                     | DGND1 pins      |

*Default Position

## Table 2. On-Board I 2 C (J101) on MAX17271 (WLP) Circuit

| J101 SHUNT POSITION   | INSTALLED*                                       | NOT INSTALLED   |
|-----------------------|--------------------------------------------------|-----------------|
| 1-2                   | VIO = +3.3V = +3.3V_M (On-Board LDO)             | VIO = OPEN      |
| 3-4                   | SCL = SCL_M (On-board I 2 C clock)               | SCL = OPEN      |
| 5-6                   | SDA= SDA_M (On-board I 2 C data)                 | SDA= OPEN       |
| 7-8                   | IRQB = IRQB_M (On-board I 2 C interrupt request) | IRQB = OPEN     |
| 9-10                  | DGND pins (No shunt required)                    | DGND pins       |

*Default Position

## Component Suppliers

| SUPPLIER         | WEBSITE           |
|------------------|-------------------|
| Coilcraft        | www.coilcraft.com |
| Murata/TOKO      | www.murata.com    |
| TDK              | www.tdk.com       |
| Wurth Elektronik | www.we-online.com |

Note: Indicate that you are using the MAX17271 when contact- ing these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17271EVKIT# | EV Kit |

#Denotes RoHS compliant.

│

## MAX17271 EV Kit Bill of Materials

|   ITEM | REF_DES                                                                                        | DNI/DNP   |   QTY | MFG PART #                                              | MANUFACTURER              | VALUE       | DESCRIPTION                                                                                                        | COMMENTS   |
|--------|------------------------------------------------------------------------------------------------|-----------|-------|---------------------------------------------------------|---------------------------|-------------|--------------------------------------------------------------------------------------------------------------------|------------|
|      1 | VIO, VBUS, VIO1, VBUS1, +3.3V_M, +3.3V_M1                                                      | -         |     6 | 5000 KEYSTONE                                           | 5000 KEYSTONE             | N/A         | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   |            |
|      2 | C1, C101                                                                                       | -         |     2 | CGA2B3X7R1H104K; C1005X7R1H104K050BB; GRM155R71H104KE14 | TDK;TDK;MURATA            | 0.1UF       | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                         |            |
|      3 | C3, C8, C14-C18, C21, C22, C103, C108, C114-C118, C121, C122                                   | -         |    18 | GRM188R61A105KA61; C1608X5R1A105K                       | MURATA;TDK                | 1UF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R;                   |            |
|      4 | C4, C104                                                                                       | -         |     2 | C1608X5R1A106K                                          | TDK                       | 10UF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R                   |            |
|      5 | C5-C7, C105-C107                                                                               | -         |     6 | C1608X5R1A226M080AC; GRM188R61A226ME15                  | TDK;MURATA                | 22UF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 22UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                           |            |
|      6 | C19, C20, C119, C120                                                                           | -         |     4 | C0603C0G500-180JNE; C1608C0G1H180J; GRM1885C1H180J      | VENKEL LTD.;TDK; MURATA   | 18PF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 18PF; 50V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G                   |            |
|      7 | C23, C123                                                                                      | -         |     2 | GRM155R71E104KE14                                       | MURATA                    | 0.1UF       | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R       |            |
|      8 | DGND, DGND1, TP_GND1_U1, TP_GND_U101                                                           | -         |     4 | 5001                                                    | KEYSTONE                  | N/A         | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
|      9 | ON, ON1, SCL, SDA, IRQB, RSTB, SCL1, SDA1, VSUP, GPIO1, IRQB1, RSTB1, VSUP1, GPIO101           | -         |    14 | 5002                                                    | KEYSTONE                  | N/A         | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;              |            |
|     10 | IN, IN1, OUT1-OUT3, PGND, PGND1, OUT101-OUT103, PGND1_OUT1-PGND1_OUT3, PGND_OUT101-PGND_OUT103 | -         |    16 | 1514-2                                                  | KEYSTONE                  | 1514-2      | TERMINAL; TURRET; PIN DIA=0.090IN; TOTAL LENGTH=0.105IN; BOARD HOLE=0.098IN; BRASS; TIN PLATING;                   |            |
|     11 | LXA, LXB, LXA1, LXB1, IN1_JACK, OUT1_JACK-OUT3_JACK, IN101_JACK, OUT101_JACK-OUT103_JACK       | -         |    12 | 131-4353-00                                             | TEKTRONICS                | 131-4353-00 | CONNECTOR; WIREMOUNT; CIRCUIT BOARD TEST POINT MINIATURE PROBE; STRAIGHT; 4PINS                                    |            |
|     12 | J1, J2, J101, J102                                                                             | -         |     4 | PEC05DAAN                                               | SULLINS ELECTRONICS CORP. | PEC05DAAN   | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 10PINS; -65 DEGC TO +125 DEGC                                  |            |
|     13 | L1, L101                                                                                       | -         |     2 | XFL4020-222ME                                           | COILCRAFT                 | 2.2UH       | INDUCTOR; SMT; METAL COMPOSITE CORE; 2.2UH; TOL=+/-20%; 8A; -40 DEGC TO +125 DEGC                                  |            |
|     14 | L1A                                                                                            | -         |     1 | MLP1005M1R0DT0S1                                        | TDK                       | 1UH         | INDUCTOR; SMT (0402); FERRITE CHIP; 1UH; TOL=+/-20%; 0.5A                                                          |            |
|     15 | L1B                                                                                            | -         |     1 | DFE160808S-1R0M=P2                                      | MURATA                    | 1UH         | INDUCTOR; SMT (0603); MAGNETICALLY SHIELDED; 1UH; TOL=+/-20%; 1.9A                                                 |            |
|     16 | L1C                                                                                            | -         |     1 | DFM18PAN2R2MG0L                                         | MURATA                    | 2.2UH       | INDUCTOR; SMT (0603); CERAMIC CHIP; 2.2UH; TOL=+/-20%; 1.1A;                                                       |            |
|     17 | L1D                                                                                            | -         |     1 | DFE201612E-1R0M                                         | MURATA                    | 1UH         | INDUCTOR; SMT (0806); WIREWOUND CHIP; 1UH; TOL=+/-20%; 2.9A                                                        |            |
|     18 | L1E                                                                                            | -         |     1 | 74479299222                                             | WURTH ELECTRONICS INC     | 2.2UH       | INDUCTOR; SMT (1210); MOLDED CHIP; 2.2UH; TOL=+/-20%; 2.1A                                                         |            |
|     19 | L1F                                                                                            | -         |     1 | 74438357022                                             | WURTH ELECTRONICS INC     | 2.2UH       | EVKIT PART-INDUCTOR; SMT; SHIELDED; 2.2UH; TOL=+/-20%; 5.2A;                                                       |            |

Evaluates: MAX17271

## MAX17271 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                                                                                                                            | DNI/DNP   | QTY   | MFG PART #                                       | MANUFACTURER                         | VALUE             | DESCRIPTION                                                                                                                                                                                               | COMMENTS   |
|--------|------------------------------------------------------------------------------------------------------------------------------------|-----------|-------|--------------------------------------------------|--------------------------------------|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
|     20 | L1G                                                                                                                                | -         | 1     | DFE201612E-2R2M                                  | MURATA                               | 2.2UH             | INDUCTOR; SMT (0806); WIREWOUND CHIP; 2.2UH; TOL=+/-20%; 1.8A                                                                                                                                             |            |
|     21 | L3, L103                                                                                                                           | -         | 2     | MMZ1608R301AT                                    | TDK                                  |                   | 300 INDUCTOR; SMT (0603); FERRITE-BEAD; 300; TOL=+/-25%; 0.5A; -55 DEGC TO +125 DEGC                                                                                                                      |            |
|     22 | R13, R113                                                                                                                          | -         | 2     | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00       | VISHAY DALE; ROHM;PANASONIC          |                   | 0 RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                                                                                    |            |
|     23 | R14, R15, R114, R115                                                                                                               | -         | 4     | ERJ-3EKF1003                                     | PANASONIC                            | 100K              | RESISTOR; 0603; 100K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                                                    |            |
|     24 | R16-R18, R116-R118                                                                                                                 | -         | 6     | CRCW06032K20FK                                   | VISHAY DALE                          | 2.2K              | RESISTOR, 0603, 2.2K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                                                                                                   |            |
|     25 | R19, R119                                                                                                                          | -         | 2     | CRCW0402100RFK; 9C04021A1000FL; RC0402FR-07100RL | VISHAY DALE;PANASONIC; YAGEO PHYCOMP | 100               | RESISTOR; 0402; 100 OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                                                                                                   |            |
|     26 | R20, R120                                                                                                                          | -         | 2     | ERJ-2RKF1002                                     | PANASONIC                            | 10K               | RESISTOR; 0402; 10K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                                    |            |
|     27 | R21, R22, R24, R121, R122, R124                                                                                                    | -         | 6     | CRCW06030000Z0                                   | VISHAY DALE                          |                   | 0 RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.1W; THICK FILM                                                                                                                                                     |            |
|     28 | SU1-SU4, SU101-SU104                                                                                                               | -         | 8     | S1100-B;SX1100-B                                 | KYCON;KYCON                          | SX1100-B          | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                                                                                   |            |
|     29 | SW1, SW101                                                                                                                         | -         | 2     | 1.14.002.111/0000                                | RAFI GMBH & CO. KG                   | 1.14.002.111/0000 | SWITCH; SPST; SMT; STRAIGHT; 35V; 0.1A; MICON 5 SERIES; RCOIL=0.1 OHM; RINSULATION=1GOHM                                                                                                                  |            |
|     30 | U1                                                                                                                                 | -         | 1     | MAX17271ETE+                                     | MAXIM                                | MAX17271ETE+      | EVKIT PART-IC; NANOPOWER TRIPLE/DUAL-OUTPUT SINGLE INDUCTOR MULTIPLE OUTPUT (SIMO) BUCK-BOOST REGULATOR; TQFN16-EP; PKG. CODE: T1633+5; PKG. OUTLINE DWG. NO.: 21-0136; PKG. LAND PATTERN NUMBER: 90-0032 |            |
|     31 | U2, U102                                                                                                                           | -         | 2     | MAXQ622G-0000+                                   | MAXIM                                | MAXQ622G-0000+    | IC; CTRL; 16-BIT MICROCONTROLLER WITH INFRARED MODULE AND OPTIONAL USB; LQFP64                                                                                                                            |            |
|     32 | U3, U103                                                                                                                           | -         | 2     | MAX8511EXK33+                                    | MAXIM                                | MAX8511EXK33      | IC; VREG; ULTRA-LOW-NOISE, HIGH PSRR, LOW-DROPOUT, LINEAR REGULATOR; SC70-5 ; -40 DEGC TO +85 DEGC                                                                                                        |            |
|     33 | U101                                                                                                                               | -         | 1     | MAX17271ENE+                                     | MAXIM                                | MAX17271ENE+      | EVKIT PART-IC; ULTRA-LOW POWER TRIPLE-OUTPUT SINGLE INDUCTOR MULTIPLE OUTPUT (SIMO) BUCK BOOST REGULATOR; WLP16; 0.40MM PITCH; PKG. CODE:N161A1+1; PKG. OUTLINE DWG. NO.:21-100190                        |            |
|     34 | USB, USB1                                                                                                                          | -         | 2     | ZX62RD-AB-5P8(30)                                | HIROSE ELECTRIC CO LTD.              | ZX62RD-AB-5P8(30) | CONNECTOR; MALE; THROUGH HOLE; MICRO-USB CONNECTOR MEETING REQUIREMENTS OF USB 2.0 STANDARD; RIGHT ANGLE; 5PINS                                                                                           |            |
|     35 | Y1, Y101                                                                                                                           | -         | 2     | ECS-120-18-4VX                                   | ECS INC                              | 12MHZ             | CRYSTAL; HC49US; 18PF; 12MHZ; +/-30PPM; +/-50PPM                                                                                                                                                          |            |
|     36 | PCB                                                                                                                                | - DNP     | 1 0   | N/A                                              | MAXIM N/A                            | PCB OPEN          | PCB:MAX17271 PACKAGE OUTLINE 0603 NON-POLAR                                                                                                                                                               | -          |
|     37 | C24, C124                                                                                                                          |           |       | MAX17271                                         |                                      |                   | CAPACITOR                                                                                                                                                                                                 |            |
|     38 | J3, J103                                                                                                                           | DNP       | 0     | PEC04SAAN                                        | SULLINS ELECTRONICS CORP.            | PEC04SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                                                                                                                 |            |
|     39 | JU7, JU107, JU_ID0-JU_ID3, JU_ID100-JU_ID103                                                                                       | DNP       | 0     | PEC02SAAN                                        | SULLINS                              | PEC02SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                                                                                                 |            |
|     40 | L2, L102                                                                                                                           | DNP       | 0     | XFL4020-222ME                                    | COILCRAFT                            | 2.2UH             | INDUCTOR; SMT; METAL COMPOSITE CORE; 2.2UH; TOL=+/-20%; 8A; -40 DEGC TO +125 DEGC                                                                                                                         |            |
|     41 | TP_IN, TP_IN1, TP_OUT1-TP_OUT3, TP_PGND, TP_PGND1, TP_OUT101-TP_OUT103, TP_PGND1_OUT1-TP_PGND1_OUT3, TP_PGND_OUT101-TP_PGND_OUT103 | DNP       | 0     |                                                  | 5000 KEYSTONE                        | N/A               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                                          |            |
|     42 | U4, U104                                                                                                                           | DNP       | 0     | MAX3207EAUT+                                     | MAXIM                                | MAX3207EAUT       | IC; PROT; DUAL, QUAD, AND HEX HIGH-SPEED DIFFERENTIAL ESD-PROTECTION IC; SOT23-6                                                                                                                          |            |

Evaluates: MAX17271

## MAX17271 EV Kit Schematic

<!-- image -->

Evaluates: MAX17271

## MAX17271 EV Kit Schematic (continued)

<!-- image -->

Evaluates: MAX17271

## MAX17271 EV PCB Layout Diagrams

MAX17271 EV Kit-Top Silkscreen

<!-- image -->

MAX17271 EV Kit-SIG\_L3

<!-- image -->

MAX17271 EV Kit-Top

<!-- image -->

MAX17271 EV Kit-SIG\_L5

<!-- image -->

│

## MAX17271 EV PCB Layout Diagrams (continued)

MAX17271 EV Kit-Bottom

<!-- image -->

MAX17271 EV Kit-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                        | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------|-----------------|
|                 0 | 2/18            | Initial release                    | -               |
|                 1 | 7/19            | Minor edits and updated hyperlinks | 1, 2            |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are imSlied  0a[im ,ntegrated reserYes tKe rigKt to cKange tKe circuitr\ and sSecifications witKout notice at an\ time  7Ke Sarametric Yalues (min and ma[ li sKown in tKe (lectrical CKaracteristics table are guaranteed Other parametric values quoted in this data sheet are provided for guidance.

│

Evaluates: MAX17271