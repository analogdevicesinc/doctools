<!-- lastmod 2022-08-03 -->
## MAX22505 Evalution Kit

## General Description

The MAX22505 evaluation kit (EV kit) is a fully assembled and  tested  circuit  board  that  evaluates  the  MAX22505 ±40V USB port protector.

The  EV  kit  consists  of  3  independent  sections: A  highpower peripheral section, a low-power peripheral section, and a high-power host section. Each section demonstrates protecting a USB bus from overvoltage conditions on the USB lines.

The high-power peripheral section adds external MOSFET switches  to  the  low-power  peripheral  circuit,  reducing losses to power delivered to the peripheral.

The EV kit powers completely from the USB host, such as  a  laptop,  and  requires  no  other  power  source.  For peripheral  applications,  an  isolated  supply  is  offered  for convenience but is not necessary in customer applications. Test access points are provided to optionally power each circuit section externally.

## Features

- Derives Power From a USB Host
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

<!-- image -->

Evaluates: MAX22505

## Quick Start

## Recommended Equipment

- MAX22505 EV kit
- Laptop with USB port
- Standard USB cable (A to B)
- High-speed USB peripheral, such as a thumb drive

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation before exercising the full features of the device:

- 1)  Verify that all the jumpers are in their default positions, as shown in Table 1.
- 2)  Using a USB cable, connect a laptop USB port to P1.
- 3) Connect a thumb drive to P2.
- 4) Verify that the laptop detects the thumb drive. Transfer a file to or from the thumb drive.
- 5)  Repeat  steps  2  through  4,  connecting  the  laptop  to P101 and the thumb drive to P102.
- 6)  Repeat  steps  2  through  4,  connecting  the  laptop  to P202 and the thumb drive to P201.

## Detailed Description

The  MAX22505  EV  kit  is  a  fully  tested  circuit  board demonstrating  the  capabilities  of  the  MAX22505  ±40V USB port protector.

## On-Board Isolated Power

The  supply  power  for  the  MAX22505  shares  the  same power  domain  as  the  protected  side  signals.  For  this reason,  to  obtain  supply  power  from  the  host  side,  an isolated  supply  circuit  must  be  used  in  the  case  of  the protected peripherals.

## Evaluates: MAX22505

A MAX258 (U2, U102) transformer driver feeds power to an isolation transformer (T1, T101), through to a MAX8719 (U3,  U103)  LDO,  providing  an  isolated  5  volts  for  the MAX22505.

An indicator  (LED2,  LED102,  LED202)  illuminates  green when power is supplied to the corresponding MAX22505 EV kit section.

To  provide  external  power  to  the  high  power  peripheral section, move jumper JU3 to the 1-2 position, and provide isolated 5 volts between TP6 (EXT 5V) and TP7 (GND).

To  provide  external  power  to  the  low  power  peripheral section,  move  jumper  JU103  to  the  1-2  position,  and provide  isolated  5  volts  between  TP106  (EXT  5V)  and TP107 (GND).

To  provide  external  power  to  the  protected  host  section, move jumper JU202 to the 2-3 position, and provide 5 volts between TP208 (EXT 5V) and TP203 (GND).

## Fault Indicator LED

The  FLTB  open-drain  output  assserts  active  low  when any overvoltage could be presented to the protected side (PVBUS, PDP, PDN, GND).

Should this occur, a FAULT indicator illuminates red (LED3, LED103, LED203) until the overvoltage is removed.

## High Common Mode Indicator LED

The HCMB open-drain output asserts active-low when a high common mode voltage is present which has caused the MAX22505 to force USB traffic to full-speed mode.

Should  this  occur,  an  HCMB  indicator  illuminates  red (LED1, LED101, LED201).

The  MAX22505  EV  kit  defaults  to  high-speed  fallback enabled.  To  disable  this  feature,  short  the  appropriate jumper  (JU1,  JU101,  JU201)  before  power-up  for  the MAX22505 EV kit. In this case, the corresponding HCMB LED  will  remain  illuminated  until  the  jumper  short  is removed.

│

## Table 1. Jumper Descriptions

| JUMPER   | SHUNT POSITON   | DESCRIPTION                                                 |
|----------|-----------------|-------------------------------------------------------------|
| JU1      | Open*           | High power peripheral section full-speed fallback enable    |
| JU1      | Closed          | High power peripheral section full-speed fallback disable   |
| JU2      | Open            | High power peripheral section isolated power disable        |
| JU2      | Closed*         | High power peripheral section isolated power enable         |
| JU3      | 1-2             | High power peripheral section uses external power from TP6  |
| JU3      | 2-3*            | High power peripheral section uses built-in isolated power  |
| JU101    | Open*           | Low power peripheral section full-speed fallback enable     |
| JU101    | Closed          | Low power peripheral section full-speed fallback disable    |
| JU102    | Open            | Low power peripheral section isolated power disable         |
| JU102    | Closed*         | Low power peripheral section isolated power enable          |
| JU103    | 1-2             | Low power peripheral section uses external power from TP106 |
| JU103    | 2-3*            | Low power peripheral section uses built-in isolated power   |
| JU201    | Open*           | Protected host section full-speed fallback enable           |
| JU201    | Closed          | Protected host section full-speed fallback disable          |
| JU202    | 1-2*            | Protected host section uses power from USB host via P202    |
| JU202    | 2-3             | Protected host section uses external power from TP208       |

Table 2. Test Point Description

| TEST POINT   | DESCRIPTION                                                                   |
|--------------|-------------------------------------------------------------------------------|
| TP1 (GRN)    | UGND, high power peripheral section; potentially unsafe ground from USB host  |
| TP2 (BLK)    | GND, high power peripheral section; protected ground to USB peripheral        |
| TP3 (BLK)    | GND, high power peripheral section; protected ground to USB peripheral        |
| TP4 (YEL)    | HCMB output, high power peripheral section                                    |
| TP5 (YEL)    | FLTB ouput, high power peripheral section                                     |
| TP6 (RED)    | External 5V input, high power peripheral section (see JU3 description above)  |
| TP7 (BLK)    | GND, high power peripheral section; protected ground to USB peripheral        |
| TP101 (GRN)  | UGND, low power peripheral section; potentially unsafe ground from USB host   |
| TP102 (BLK)  | GND,low power peripheral section; protected ground to USB peripheral          |
| TP103 (BLK)  | GND, low power peripheral section; protected ground to USB peripheral         |
| TP104 (YEL)  | HCMB output, low power peripheral section                                     |
| TP105 (YEL)  | FLTB ouput, low power peripheral section                                      |
| TP106 (RED)  | External 5V input, low power peripheral section (see JU103 description above) |
| TP107 (BLK)  | GND, low power peripheral section; protected ground to USB peripheral         |
| TP201 (GRN)  | UGND, protected host section; potentially unsafe ground from USB peripheral   |
| TP202 (BLK)  | GND, protected host section; protected ground to USB host                     |
| TP203 (BLK)  | GND, protected host section; protected ground to USB host                     |
| TP204 (YEL)  | HCMB output, protected host section                                           |
| TP205 (YEL)  | FLTB ouput, protected host section                                            |
| TP208 (ORG)  | External 5V input, Protected host section (see JU202 description above)       |

Evaluates: MAX22505

## MAX22505 EV Kit Bill of Materials

|   ITEM | REF_DES                                         | DNI/ DNP   |   QTY | MFG PART #         | MFG        | VALUE                          | DESCRIPTION                                                                                |
|--------|-------------------------------------------------|------------|-------|--------------------|------------|--------------------------------|--------------------------------------------------------------------------------------------|
|        | 1 C1, C7, C10, C101, C107, C109, C110, C207     | -          |     8 | CL10B10 5KP8NN NC  | Samsung    | 1UF                            | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 10V; TC=X7R                                      |
|      2 | C2, C5, C102, C105, C202, C205                  | -          |     6 | R71H104 KA57D      | Murata     | 0.1UF                          | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TC=X7R                                    |
|      3 | C4, C104                                        | -          |     2 | R71H472 KA01D      | Murata     | 4700PF                         | CAPACITOR; SMT (0603); CERAMIC CHIP; 4700PF; 50V; TC=C0G                                   |
|      4 | C6, C106, C206                                  | -          |     3 | R71H475 KA12L      | Murata     | 4.7UF                          | CAPACITOR; SMT; 1206; CERAMIC; 4.7uF; 50V; X7R CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; |
|      5 | C8, C108, C208                                  | -          |     3 | 04K8RA CTU         | Kemet      | 0.1UF                          | 10V; TC=X7R                                                                                |
|      6 | C9, C209                                        | -          |     2 | R71C475 KA73L      | Murata     | 4.7UF                          | CAPACITOR; SMT (0805); CERAMIC CHIP; 4.7UF; 16V; TC=X7R                                    |
|      7 | C11, C111 C12, C13,                             | -          |     2 | R71H105 KA88L      | Murata     | 1UF                            | CAPACITOR; SMT (1206); CERAMIC CHIP; 1UF; 50V; TC=X7R                                      |
|      8 | C112, C113                                      | -          |     4 | R71C106 KA01L      | Murata     | 10UF                           | CAPACITOR; SMT (1210); CERAMIC CHIP; 10UF; 16V; MODEL=X7R                                  |
|      9 | C201                                            | -          |     1 | FK1E101 XP         | Panasonic  | 100UF                          | CAPACITOR; SMT (XXXX); ALUM; 100UF; 25V                                                    |
|     10 | D1, D3, D101, D103, D201, D203                  | -          |     6 | D5V0M1 U2S9-7      | Diodes Inc | 5.5V                           | DIODE; TVS; SOD923; VWM=5.5V; VC=11V                                                       |
|     11 | D2, D102, D202                                  | -          |     3 | 7                  | Doides Inc | 85V                            | DIODE; TVS; SOT363; VWM=85V                                                                |
|     12 | D5, D105                                        | -          |     2 | MB1S               | Fairchild  | 100V                           | IP=0.5A                                                                                    |
|     13 | D6, D106, D206                                  | -          |     3 | SMAJ40 CA-13-F     | Diodes Inc | 40V                            | DIODE; TVS; SMA; VWM=40V                                                                   |
|     14 | JU1, JU2, JU101, JU102, JU201                   | -          |     5 | 2.2E+07            | Molex      | 22284363                       | CONN HDR; 100<IL; PINS=2                                                                   |
|     15 | JU3, JU103, JU202                               | -          |     3 | 2.2E+07            | Molex      | 22284363                       | CONN HDR; 100<IL; PINS=3                                                                   |
|     16 | L1, L2, L101. L102, L201, L202                  | -          |     6 | N20NJ00 D          | Murata     | 20nH                           | INDUCTOR; SMT (0603); FERRITE; 20NH; 160MOHM; 550MA                                        |
|     17 | LED1, LED3, LED101, LED103, LED201, LED203      | -          |     6 | SML- P12UTT8 6     | Rohm       | SML- P12UTT86                  | LED; 0402; RED CLEAR; 10MA                                                                 |
|     18 | LED2, LED102, LED202                            | -          |     3 | P12PTT8 6          | Rohm       | SML- P12PTT86                  | LED; 0402; GRN CLEAR; 10MA                                                                 |
|     19 | P1, P101, P202                                  | -          |     3 | 004-90- 000000     | Mill-Max   | 897-43-004- 90-000000          | CONNECTOR; THROUGH HOLE; USB YTPE B; RECEPTACLE; RIGHT ANGLE; 4PINS                        |
|     20 | P2, P102, P201                                  | -          |     3 | 004-00- 000000     | Mill-Max   | 896-43-004- 00-000000 H6327XTS | CONNECTOR; SMT; USB YTPE A; RECEPTACLE; RIGHT ANGLE; 4PINS                                 |
|     21 | Q1-Q4, Q201-Q204                                | -          |     8 | NH6327X TSA1       | Infineon   | A1                             | TRAN; MOSFET; NCH; SC59; I-(-2.3A); V-(-60V)                                               |
|     22 | R1, R101                                        | -          |     2 | 8ENF100 2V         | Panasonic  | 10K OHM                        | RESISTOR; 1206; 10K OHM; 1%; 0.25W                                                         |
|     23 | R3, R103, R203                                  | -          |     3 | AS12J1R 00ET       | Ohmite     | 1 OHM                          | RESISTOR, 1206, 1 OHM,5%, 0.5W; SURGE                                                      |
|     24 | R4                                              | -          |     1 | 8CWFR0 50V         | Panasonic  | 0.05 OHM                       | RESISTOR; 1206; 0.05OHM; 1%; 1W                                                            |
|     25 | R5, R105                                        | -          |     2 | 2RKF309 2X         | Panasonic  | 30.9K OHM                      | RESISTOR, 0402, 30.9K OHM, 1%, 0.1W                                                        |
|     26 | R6, R106                                        | -          |     2 | 2RKF102 2X         | Panasonic  | 10.2K OHM                      | RESISTOR, 0402, 10.2K OHM, 1%, 0.10W                                                       |
|     27 | R7, R10, R107, R110, R207, R210                 | -          |     6 | 2RKF100 2X         | Panasonic  | 10K OHM                        | RESISTOR; 0402; 10.0K; 1%; 0.10W                                                           |
|     28 | R8, R9, R11, R108, R109, R111, R208, R209, R211 | -          |     9 | ERJ- 2RKF301 1X    | Panasonic  | 3.01K OHM                      | RESISTOR; 0402; 3.01K OHM; 1%; 0.10W                                                       |
|     29 | R104                                            | -          |     1 | 06R200F KEA 8CWFR0 | Vishay     | 0.2 OHM                        | RESISTOR; 1206; 0.20OHM; 1%; 0.5W                                                          |
|     30 | R204                                            | -          |     1 | 25V                | Panasonic  | 0.025 OHM                      | RESISTOR; 1206; 0.025 OHM; 1%; 1W                                                          |

## MAX22505 EV Kit Bill of Materials (continued)

| ITEM                                                         | REF_DES                                                      | DNI/ DNP                                                     | QTY                                                          | MFG PART #                                                   | MFG                                                          | VALUE                                                        | DESCRIPTION                                                  |
|--------------------------------------------------------------|--------------------------------------------------------------|--------------------------------------------------------------|--------------------------------------------------------------|--------------------------------------------------------------|--------------------------------------------------------------|--------------------------------------------------------------|--------------------------------------------------------------|
| 31                                                           | T1, T101                                                     | -                                                            | 2                                                            | TGM- 030P3RL                                                 | Halo Electronics                                             | TGM- 030P3RL                                                 | TRANSFORMER; 1:1:1.5; ISOL=600V                              |
| 32                                                           | TP1, TP101, TP201                                            | -                                                            | 3                                                            | 5121                                                         | Keystone                                                     | 5121                                                         | TEST POINT; JUMPER; STR; GREEN                               |
| 33                                                           | TP2, TP3, TP7, TP102, TP103, TP107, TP202, TP203             | -                                                            | 8                                                            | 5011                                                         | Keystone                                                     | 5011                                                         | TEST POINT; JUMPER; STR; BLACK                               |
| 34                                                           | TP4, TP5, TP104, TP105, TP204, TP205                         | -                                                            | 6                                                            | 5009                                                         | Keystone                                                     | 5009                                                         | TEST POINT; JUMPER; STR; YELLOW                              |
| 35                                                           | TP6, TP106                                                   | -                                                            | 2                                                            | 5010                                                         | Keystone                                                     | 5010                                                         | TEST POINT; JUMPER; STR; RED                                 |
| 36                                                           | TP208                                                        | -                                                            | 1                                                            | 5008                                                         | Keystone                                                     | 5008                                                         | TEST POINT; JUMPER; STR; ORANGE                              |
| 37                                                           | U1, U101, U201                                               | -                                                            | 3                                                            | 5                                                            | Maxim                                                        | MAX22505                                                     | IC; ANALOG SW; USB PROTECTOR; TQFN4X4L24                     |
| 38                                                           | U2, U102                                                     | -                                                            | 2                                                            | MAX258 ATA+                                                  | Maxim                                                        | MAX258AT A+                                                  | IC; XFMR DRV; TDFN2X3L8                                      |
| 39                                                           | U3, U103                                                     | -                                                            | 2                                                            | MAX8719 ETA+                                                 | Maxim                                                        | MAX8719E TA+                                                 | IC; VRM LDO; TDFN3X3L8                                       |
| 40                                                           | JU2, JU3, JU102, JU103, JU202                                | -                                                            | 5                                                            | QPC02S XGN-RC                                                | Sullins                                                      | QPC02SX GN-RC                                                | JUMPER SHUNTS                                                |
| 41                                                           | PCB                                                          | -                                                            | 1                                                            | 5                                                            | MAXIM                                                        | PCB                                                          | PCB:MAX22505                                                 |
| TOTAL                                                        |                                                              |                                                              | 144                                                          |                                                              |                                                              |                                                              |                                                              |
| NOTE: DNI--> DO NOT INSTALL(PACKOUT) ; DNP--> DO NOT PROCURE | NOTE: DNI--> DO NOT INSTALL(PACKOUT) ; DNP--> DO NOT PROCURE | NOTE: DNI--> DO NOT INSTALL(PACKOUT) ; DNP--> DO NOT PROCURE | NOTE: DNI--> DO NOT INSTALL(PACKOUT) ; DNP--> DO NOT PROCURE | NOTE: DNI--> DO NOT INSTALL(PACKOUT) ; DNP--> DO NOT PROCURE | NOTE: DNI--> DO NOT INSTALL(PACKOUT) ; DNP--> DO NOT PROCURE | NOTE: DNI--> DO NOT INSTALL(PACKOUT) ; DNP--> DO NOT PROCURE | NOTE: DNI--> DO NOT INSTALL(PACKOUT) ; DNP--> DO NOT PROCURE |

## MAX22505 EV Kit PCB Layout Diagrams

MAX22505 EV Kit-Component Placement Top

<!-- image -->

MAX22505 EV Kit-Middle Layer 1

<!-- image -->

MAX22505 EV Kit-Component Placement Bottom

<!-- image -->

MAX22505 EV Kit-Middle Layer 2

<!-- image -->

│

## MAX22505 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX22505 EV Kit-Top Solder Mask

<!-- image -->

MAX22505 EV Kit-Top Copper

MAX22505 EV Kit-Bottom Solder Mask

<!-- image -->

MAX22505 EV Kit-Bottom Copper

<!-- image -->

│

## MAX22505 EV Kit Schematic

<!-- image -->

│

Evaluates: MAX22505

## MAX22505 EV Kit Schematic (continued)

<!-- image -->

│

## MAX22505 EV Kit Schematic (continued)

<!-- image -->

│

## MAX22505 EV Kit Schematic (continued)

<!-- image -->

│

## MAX22505 EV Kit Schematic (continued)

<!-- image -->

│

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX22505EVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluates: MAX22505

## MAX22505 Evalution Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

│

Evaluates: MAX22505