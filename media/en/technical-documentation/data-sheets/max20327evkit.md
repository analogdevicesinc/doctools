<!-- lastmod 2022-08-04 -->
## MAX20327 Evaluation Kit

## General Description

The MAX20327 evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the functionality of  the  MAX20327  double-pole,  double-throw  (DPDT) analog switches in a 9-bump wafer-level package (WLP). The  EV  kits  features  enable  evaluation  of  the  analog switches through audio jack inputs and outputs, as well as SMA connectors for AC characteristic evaluation. Input power to the EV kits is provided by a Micro-USB, type-B connector or an external power supply.

## Features

- Proven PCB Layout
- Decreased Evaluation Time
- Fully Assembled and Tested
- SMA and 3.5mm Audio Jack Connectors
- Directly Evaluate AC Characteristics Through SMA Connectors
- Quickly Evaluate Audio Performance with 3.5mm Audio Jack Connectors
- USB 5V Power with On-Board Adjustable LDO

Ordering Information appears at end of data sheet.

Evaluate: MAX20327

## Quick Start

## Required Equipment

- MAX20327 EV kit
- USB power supply or 1.6V to 5.5V power supply
- Audio source (e.g., MP3 player, computer, etc.)
- External speakers or headphones with 3.5mm audio jack

## Procedure

The  EV  kits  are  fully  assembled  and  tested.  Follow  the steps below to verify board operation and begin evaluation:

- 1)  If  using  a  USB  power  supply  to  power  the  board through  the  Micro-USB  connector  (J1),  verify  that  a shunt  is  installed  shorting  pins  3-4  on  jumper  JU2. This  powers  the  devices  from  the  output  of  the  onboard LDO. To adjust the LDO output voltage, connect a voltmeter at test point T3 and turn the screw on the potentiometer (R3) until reaching the desired value. To use the raw bus voltage as the power supply for the devices, place the shunt so that it is shorting pins 5-6 on JU2.
- 2)  If  an external power supply is used, apply the power at test point T2 and use the shunt to short pins 1-2 on JU2 to  provide  power  to  the  parts  from  the  external supply.
- 3)  Verify that jumper JU1 has a shunt installed shorting pins  2-3  and  that  jumper  JU4  has  a  shunt  installed shorting pins 2-3. Installing the shunts in these locations provides power from the source to the V CC  pin of the devices.
- 4)  Verify that jumper JU3 has a shunt installed shorting pins 1-2. This shorts the control bit (CB) on the devices to  GND,  electrically  connecting  NC1  to  COM1  and NC2 to COM2.
- 5)  Connect an audio source to the normally closed audio jack (P2), using the male-to-male 3.5mm audio cable included with the EV kit.

<!-- image -->

- 6)  Connect external speakers or headphones to the common audio jack (P3).
- 7)  When the audio source outputs the audio signal, and JU3 has a  shunt  shorting  pins  1-2,  the  audio  signal should  be  heard  on  the  speakers  or  headphones connected at P3.
- 8)  Move the shunt on JU3 from pins 1-2 to pins 2-3. The audio signal should no longer be heard on the speakers or headphones connected at P3.
- 9)  If  the  audio  source  connection  moves  from  the normally closed audio jack (P2) to the normally open audio jack (P1) with a shunt in position 2-3 on JU3, the audio signal on the common audio jack (P3) is heard on the speakers or headphones. If the shunt on J3 is in position 1-2, there is no audio signal heard on the speaker or headphones.

## Detailed Description of Hardware

The  MAX20327  EV  kit  is  fully  assembled  and  tested circuit  board  that  demonstrates  the  functionality  of  the MAX20327  DTDT  analog  switches  in  a  9-bump  WLP. The  EV  kit  features  enables  evaluation  of  the  analog switches through audio jack inputs and outputs, as well as SMA connectors for AC characteristic evaluation. Input power to the EV kits is provided by a Micro-USB, type-B connector or an external power supply. The EV kit PCBs are designed with 1oz copper.

## Power Supply

The EV kits are powered by a user-supplied 1.6V to 5.5V external  DC  power  supply  connected  between  V EXT and GND, the raw USB bus supplied at the micro-USB connector (J1), or the regulated output of the LDO (U2) that is powered by the USB bus.

## AC Evaluation

The EV kits have a secondary IC configured for evaluation of  the  AC  characteristics  of  devices.  SMA  connectors (J2-J5) allow for direct connection to a network analyzer. 50Ω termination resistors (R6, R7) provide termination to match the typical 50Ω source resistance of the network analyzer, allowing for easy evaluation of these parameters. The ability  to  connect  external  DC  bias  voltages  at  test points  T7  and  T8  further  simplifies  evaluation  of  AC characteristics while using a network analyzer that cannot provide DC offset voltages.

## VBUS Status LED

An  indicator  diode  (D1)  is  included  on  the  EV  kits, indicating  that  a  V BUS   voltage  is  present  on  the  microUSB connector  (J3).  If  the  LED  glows  green,  power  is present  at  J3  and  the  board  can  be  powered  by  either the LDO output or by the raw V BUS  supply (see Table 1 for jumper configurations). The status LED does not glow when a voltage is present on test point T2.

Table 1. Jumper Settings (J6, J7, JU1-JU4)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                         |
|----------|------------------|-------------------------------------------------------------------------------------|
| J6       | 1-2              | Connects NC1 on U2 to DC bias applied at test point T7 through a 475kΩ resistor     |
| J6       | 3-4              | Connects COM1 on U2 to DC bias applied at test point T7 through a 475kΩ resistor    |
| J7       | 1-2              | Connects NC2 on U2 to DC bias applied at test point T8 through a 475kΩ resistor     |
| J7       | 3-4              | Connects COM2 on U2 to DC bias applied at test point T8 through a 475kΩ resistor    |
| JU1      | 1-2              | Connects V CC of U1 to GND; places U1 in shutdown mode                              |
| JU1      | 2-3*             | Connects V CC of U1 to the power-supply bus; places U1 in normal, powered operation |
| JU2      | 1-2              | Connects the external power supply applied at T2 to the power-supply bus            |
| JU2      | 3-4*             | Connects the regulated LDO output to the power-supply bus                           |
| JU2      | 5-6              | Connects raw V BUS voltage from the USB to the power-supply bus                     |
| JU3      | 1-2*             | Connects CB of U1 and U2 to GND; NC_ and COM_ are electrically connected            |
| JU3      | 2-3              | Connects CB of U1 and U2 to V CC ; NO_ and COM_ are electrically connected          |
| JU4      | 1-2              | Connects V CC of U2 to GND; places U3 in shutdown mode                              |
| JU4      | 2-3*             | Connects V CC of U2 to power supply bus; places U3 in normal, powered operation     |

*Default Position

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20327EVKIT# | EV Kit |

#Denotes RoHS compliant.

Evaluate: MAX20327

│

## MAX20327 Evaluation Kit

## MAX20327 EV Kit Bill of Materials

|   ITEM | REF_DES       |     |   QTY | MFG PART #                                              | MANUFACTURER                     | VALUE           | DESCRIPTION                                                                                                             | COMMENTS   |
|--------|---------------|-----|-------|---------------------------------------------------------|----------------------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------|------------|
|      1 | C1, C4        |     |     2 | GRM188R71C103KA01; ECJ-1VB1C10; CL10B103KO8NNN          | MURATA; PANASONIC; SAMSUNG       | 0.01UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEG; TC=X7R                              |            |
|      2 | C2            |     |     1 | GRM21BR71A475KA73; LMK212B7475KG-T; C2012X7R1A475K125AC | MURATA; TAIYO YUDEN; TDK         | 4.7UF           | CAPACITOR; SMT (0805); CERAMIC CHIP; 4.7UF; 10V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                              |            |
|      3 | C3, C5-C7     |     |     4 | GRM188R61A105KA61; C1608X5R1A105K                       | MURATA/TDK                       | 1UF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R;                        |            |
|      4 | D1            |     |     1 | SML-LX1206GW-TR                                         | LUMEX OPTOCOMPONENTS INC         | SML-LX1206GW-TR | DIODE; LED; STANDARD; GREEN; SMT (1206); PIV=2.2V; IF=0.02A; -40 DEGC TO +85 DEGC                                       |            |
|      5 | H1-H4         |     |     4 | PMS_632_0031_PH                                         | GENERIC PART                     | PMS_632_0031_PH | MACHINE FABRICATED; PAN- ; 6-32; 5/16IN; 8.8 ZINC PLATED STEEL                                                          |            |
|      6 | J1            |     |     1 | ZX62D-B-5PA8                                            | HIROSE ELECTRIC CO LTD.          | ZX62D-B-5PA8    | CONNECTOR; MALE; THROUGH HOLE; MICRO-USB CONNECTOR; RIGHT ANGLE; 5PINS                                                  |            |
|      7 | J2-J5         |     |     4 | 142-0701-851                                            | JOHNSON COMPONENTS               | 142-0701-851    | CONNECTOR; END LAUNCH JACK RECEPTACLE; BOARDMOUNT; STRAIGHT THROUGH; 2PINS;                                             |            |
|      8 | J6, J7        |     |     2 | 929647-09-04-I                                          | SAMTEC                           | 929647-09-04-I  | CONNECTOR; MALE; THROUGH HOLE; 929 SERIES; STRAIGHT; 4PINS                                                              |            |
|      9 | JU1, JU3, JU4 |     |     3 | 929647-09-03-I                                          | 3M                               | 929647-09-03-I  | CONNECTOR; MALE; THROUGH HOLE; 929 SERIES; STRAIGHT; 3PINS                                                              |            |
|     10 | JU2           |     |     1 | 929665-09-03-I                                          | 3M                               | 929665-09-03-I  | CONNECTOR; MALE; THROUGH HOLE; 929 SERIES; STRAIGHT; 6PINS                                                              |            |
|     11 | P1-P3         |     |     3 | SJ1-3523NG                                              | CUI INC.                         | SJ1-3523NG      | CONNECTOR; FEMALE; THROUGH HOLE; 3.5MM NO SWITCH JACK STEREO, RIGHT ANGLE; 3PINS                                        |            |
|     12 | R1            |     |     1 | CRCW080531K6FK; ERJ-6ENF3162V                           | VISHAY DALE/PANASONIC            | 31.6K           | RESISTOR, 0805, 31.6K OHM, 1%, 100PPM, 0.125W, THICK FILM                                                               |            |
|     13 | R2            |     |     1 | CRCW08057K32FK                                          | VISHAY DALE                      | 7.32K           | RESISTOR; 0805; 7.32K OHM; 1%; 100PPM; 0.125W; THICK FILM                                                               |            |
|     14 | R3            |     |     1 | 3296W-1-104LF                                           | BOURNS                           | 100K            | RESISTOR; THROUGH-HOLE-RADIAL LEAD; 100K OHM; 10%; 100PPM; 0.5W; MOLDER CERAMIC OVER METAL FILM                         |            |
|     15 | R4            |     |     1 | CRCW0805100KFK; RK73H2ATTD1003; ERJ-6ENF1003V           | VISHAY DALE/KOA SPEER/ PANASONIC | 100K            | RESISTOR; 0805; 100K; 1%; 100PPM; 0.125W; THICK FILM                                                                    |            |
|     16 | R5            |     |     1 | ERJ-6GEYJ102V                                           | PANASONIC                        | 1K              | RESISTOR; 0805; 1K OHM; 5%; 200PPM; 0.125W; THICK FILM                                                                  |            |
|     17 | R6, R7        |     |     2 | CRCW080549R9FK; ERJ-6ENF49R9                            | VISHAY DALE; PANASONIC           | 49.9            | RESISTOR; 0805; 49.9 OHM; 1%; 100PPM; 0.125W; THICK FILM                                                                |            |
|     18 | R8-R11        |     |     4 | CRCW0805475KFK                                          | VISHAY DALE                      | 475K            | RESISTOR; 0805; 475K; 1%; 100PPM; 0.125W; THICK FILM                                                                    |            |
|     19 | SU1-SU8       |     |     8 | SX1100-B                                                | KYCON                            | SX1100-B        | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                 |            |
|     20 | TP1, TP4-TP6  |     |     4 |                                                         | 5011 ?                           | 5011            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
|     21 | TP2, TP3      |     |     2 |                                                         | 5010 ?                           |                 | 5010 TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE                                                                  |            |
|     22 | TP7, TP8      |     |     2 |                                                         | 5012 ?                           | 5012            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
|     23 | U1, U3        |     |     2 | MAX20327                                                | MAXIM                            | MAX20327        | EVKIT PART - IC; PACKAGE OUTLINE DRAWING: 21-100195; PACKAGE CODE: W91P1+1                                              |            |
|     24 | U2            |     |     1 | MAX8880EUT+                                             | MAXIM                            | MAX8880EUT+     | IC; VREG; ULTRA-LOW-IQ LOW-DROPOUT LINEAR REGULATOR WITH POK; SOT23-6                                                   |            |
|     25 | PCB           |     |     1 | MAX20327                                                | MAXIM                            | PCB             | PCB:MAX20327                                                                                                            | -          |
|     26 | MECH1, MECH2  | DNI |     2 | AK203-MM-R                                              | ASSMANN                          | AK203-MM-R      | CONNECTOR; MALE; WIREMOUNT; STEREO CONNECTION CABLE,2.0M, 3-PIN, 3.5MM STEREO MALE TO MALE; STRAIGHT; 3PINS             |            |
|     27 | MISC1         | DNI |     1 | 68784-0001                                              | MOLEX                            | 68784-0001      | CONNECTOR; MALE; USB; USB A PLUG TO MICRO B PLUG CABLE ASSY; STRAIGHT; 4PINS-5PINS                                      |            |

Evaluate: MAX20327

## MAX20327 EV Kit Schematic

<!-- image -->

Evaluate: MAX20327

## MAX20327 EV Kit PCB Layout Diagrams

MAX20327 EV Kit-Top Silkscreen

<!-- image -->

MAX20327 EV Kit-Top

<!-- image -->

## MAX20327 EV Kit PCB Layout Diagrams (continued)

MAX20327 EV Kit-Internal 2

<!-- image -->

MAX20327 EV Kit-Internal 3

<!-- image -->

│

## MAX20327 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX20327 EV Kit-Bottom

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/18            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied  Ma[im ,ntegrated reserves the right to change the circuitry and speci¿cations without notice at any time  The parametric values (min and ma[ limits) shown in the (lectrical Characteristics table are guaranteed Other parametric values quoted in this data sheet are provided for guidance.

<!-- image -->

│

Evaluate: MAX20327