<!-- lastmod 2022-08-02 -->
## MAX14591 Evaluation Kit

## General Description

The MAX14591 evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the functionality  of  the  MAX14591  high-speed,  open-drain  capable logic-level translator in both the 8-bump WLP and 8-pin TDFN  packages.  Only  the  TDFN  package  device  is installed in this EV kit. The EV kit enables direct evaluation of the device by multiple jumper-selectable methods. The highly configurable PCB allows the user to evaluate each package separately or both at once. Input power to the EV kit is provided by a micro-USB, type-B connector or an external 5V power supply. On-board LDO regulators provide the appropriate voltage for each component, and potentiometers allow the user to adjust the power supply for either side of the level translator independently.

## Features and Benefits

- ●
- Proven PCB Layout
- Decrease Evaluation Time
- Fully Assembled and Tested
- On-Board Adjustable Oscillators · Evaluate Without External Function Generator
- Jumper-Selectable Open-Drain and Push-Pull Buffers Enable Simple Evaluation

Ordering Information appears at end of data sheet.

Evaluates: MAX14591

## Quick Start

## Required Equipment

- MAX14591 EV kit
- Digital voltmeter (DVM)
- USB power source or another 5V external power supply
- Oscilloscope and at least one scope probe

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation and begin evaluation:

- 1)  If  using  a  USB  bus  to  power  the  board,  connect  the included  micro-USB  cable  between  the  micro-USB, type-B  connector  (J1)  and  the  USB  power  source, such as a computer or dedicated USB charging port, and install a shunt on jumper JP4 shorting pins 1-2.
- 2)  If using an external power source to power the board, connect the external power supply at the VBUS test point (TP26) and install a shunt on jumper JP4 shorting pins 2-3.
- 3)  Connect  the  DVM  between  GND  (TP6)  and  V CC (TP24). Adjust the first potentiometer (POT1) until the desired voltage for V CC  appears on the DVM by turning the screw on the potentiometer to the right or to the left.
- 4)  Connect the DVM between GND (TP6) and V L  (TP25). Adjust  the  second  potentiometer  (POT2)  until  the desired voltage for V L  appears on the DVM by turning the screw on the potentiometer to the right or to the left. Note that V L  should be lower than V CC .
- 5)  Connect the jumpers according to Table 1 to verify U2 (MAX14591ETA+) operation.
- 6)  Connect the oscilloscope probe to TP19 I/OVCC2 and TP21 I/OVCC1 to observe the translated voltage of the input signal.

<!-- image -->

## MAX14591 Evaluation Kit

Evaluates: MAX14591

Table 1. Jumper Configuration (JP1-JP7, JP9-JP15, JP17-JP25)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                                     |
|----------|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JP1      | 1-2*             | Pullup resistor connect for I/OVL2 of U2. Connects a 1kΩ pullup resistor between V L and I/OVL2.                                                                                                |
| JP1      | Not installed    | Pullup resistor disconnect for I/OVL2 of U2. Disconnects the 1kΩ pullup resistor between V L and I/OVL2.                                                                                        |
| JP2      | 1-2*             | Connects open-drain buffer to driving signal bus for channel I/OVL1. The open-drain buffer is driven by the output of DS1090-16 (U4). The frequency of the signal is adjustable using POT3.     |
| JP2      | 1-3              | Connects external source connected at TP9 to driving signal bus for channel I/OVL1.                                                                                                             |
| JP2      | 1-4              | Connects push-pull buffer to driving signal bus for channel I/OVL1. The push-pull buffer is driven by the output of DS1090-1 (U5). The frequency of the signal is adjustable using POT4.        |
| JP3      | 1-2*             | Pullup resistor connect for I/OVCC2 of U2. Connects a 1kΩ pullup resistor between V CC and I/ OVCC2.                                                                                            |
| JP3      | Not installed    | Pullup resistor disconnect for I/OVCC2 of U2. Disconnects the 1kΩ pullup resistor between V CC and I/OVCC2.                                                                                     |
| JP4      | 1-2*             | Power to the board supplied at the micro-USB connector (J1).                                                                                                                                    |
| JP4      | 2-3              | Power to the board supplied at the external VBUS test point (TP26).                                                                                                                             |
| JP5      | 1-2*             | Connects the open-drain buffer to driving signal bus for channel I/OVL2. The open-drain buffer is driven by the output of DS1090-16 (U4). The frequency of the signal is adjustable using POT3. |
| JP5      | 1-3              | Connects external source connected at TP13 to driving signal bus for channel I/OVL2.                                                                                                            |
| JP5      | 1-4              | Connects push-pull buffer to driving signal bus for channel I/OVL2. The push-pull buffer is driven by the output of DS1090-1 (U5). The frequency of the signal is adjustable using POT4.        |
| JP6      | 1-2*             | Connects the TS pin of U1 to V L , placing the device's I/O pins in normal operating mode.                                                                                                      |
| JP6      | 2-3              | Connects the TS pin of U1 to GND, placing the device's I/O pins in high-impedance, three-state mode.                                                                                            |
| JP7      | 1-2              | Pullup resistor connect for I/OVCC1 of U1. Connects a 1kΩ pullup resistor between V CC and I/OVCC1.                                                                                             |
| JP7      | Not installed*   | Pullup resistor disconnect for I/OVCC1 of U1. Disconnects the 1kΩ pullup resistor between V CC and I/OVCC1.                                                                                     |
| JP9**    | 1-2              | Connects I/OVCC1 of U1 to the driving signal bus for channel I/OVCC1.                                                                                                                           |
| JP9**    | Not installed*   | Disconnects I/OVCC1 of U1 from the driving signal bus for channel I/OVCC1.                                                                                                                      |
| JP10**   | 1-2              | Connects I/OVCC1 of U2 to the driving signal bus for channel I/OVCC1.                                                                                                                           |
| JP10**   | Not installed*   | Disconnects I/OVCC1 of U2 from the driving signal bus for channel I/OVCC1.                                                                                                                      |
| JP11     | 1-2              | Pullup resistor connect for I/OVL1 U1. Connects a 1kΩ pullup resistor between V L and I/OVL1.                                                                                                   |
| JP11     | Not installed*   | Pullup resistor disconnect for I/OVL1 of U1. Disconnects the 1kΩ pullup resistor between V L and I/OVL1.                                                                                        |
| JP12     | 1-2*             | Connects open-drain buffer to driving signal bus for channel I/OVCC1. The open-drain buffer is driven by the output of DS1090-16 (U4). The frequency of the signal is adjustable using POT3.    |
| JP12     | 1-3              | Connects external source connected at TP16 to driving signal bus for channel I/OVCC1.                                                                                                           |
| JP12     | 1-4              | Connects push-pull buffer to driving signal bus for channel I/OVCC1. The push-pull buffer is driven by the output of DS1090-1 (U5). The frequency of the signal is adjustable using POT4.       |

│

Evaluates: MAX14591

Table 1. Jumper Configuration (JP1-JP7, JP9-JP15, JP17-JP25) (continued)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                                  |
|----------|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JP13     | 1-2              | Pullup resistor connect for I/OVL2 of MAX14591EWA+ (U1). Connects a 1kΩ pullup resistor between V L and I/OVL2.                                                                              |
| JP13     | Not installed*   | Pullup resistor disconnect for I/OVL2 of MAX14591EWA+ (U1). Disconnects the 1kΩ pullup resistor between V L and I/OVL2.                                                                      |
| JP14     | 1-2              | Pullup resistor connect for I/OVCC2 of MAX14591EWA+ (U1). Connects a 1kΩ pullup resistor between VCC and I/OVCC2.                                                                            |
| JP14     | Not installed*   | Pullup resistor disconnect for I/OVCC2 of MAX14591EWA+ (U1). Disconnects the 1kΩ pullup resistor between VCC and I/OVCC2.                                                                    |
| JP15**   | 1-2              | Connects I/OVCC2 of U1 to the driving signal bus for channel I/OVCC2.                                                                                                                        |
| JP15**   | Not installed*   | Disconnects I/OVCC2 of U1 from the driving signal bus for channel I/OVCC2.                                                                                                                   |
| JP17     | 1-2*             | Connects open-drain buffer to driving signal bus for channel I/OVCC2. The open-drain buffer is driven by the output of DS1090-16 (U4). The frequency of the signal is adjustable using POT3. |
| JP17     | 1-3              | Connects external source connected at TP17 to driving signal bus for channel I/OVCC2.                                                                                                        |
| JP17     | 1-4              | Connects push-pull buffer to driving signal bus for channel I/OVCC2. The push-pull buffer is driven by the output of DS1090-1 (U5). The frequency of the signal is adjustable using POT4.    |
| JP18     | 1-2*             | Pullup resistor connect for I/OVL1 of U2. Connects a 1kΩ pullup resistor between V L and I/OVL1.                                                                                             |
| JP18     | Not installed    | Pullup resistor disconnect for I/OVL1 of U2. Disconnects the 1kΩ pullup resistor between V L and I/OVL1.                                                                                     |
| JP19     | 1-2*             | Pullup resistor connect for I/OVCC1 of U2. Connects a 1kΩ pullup resistor between V CC and I/ OVCC1.                                                                                         |
| JP19     | Not installed    | Pullup resistor disconnect for I/OVCC1 of U2. Disconnects the 1kΩ pullup resistor between V CC and I/OVCC1.                                                                                  |
| JP20**   | 1-2              | Connects I/OVCC2 of U2 to the driving signal bus for channel I/OVCC2.                                                                                                                        |
| JP20**   | Not installed*   | Disconnects I/OVCC2 of U2 from the driving signal bus for channel I/OVCC2.                                                                                                                   |
| JP21**   | 1-2              | Connects I/OVL2 of U1 to the driving signal bus for channel I/OVL2.                                                                                                                          |
| JP21**   | Not installed*   | Disconnects I/OVL2 of U1 from the driving signal bus for channel I/OVL2.                                                                                                                     |
| JP22**   | 1-2*             | Connects I/OVL2 of U2 to the driving signal bus for channel I/OVL2.                                                                                                                          |
| JP22**   | Not installed    | Disconnects I/OVL2 of U2 from the driving signal bus for channel I/OVL2.                                                                                                                     |
| JP23**   | 1-2              | Connects I/OVL1 of U1 to the driving signal bus for channel I/OVL1.                                                                                                                          |
| JP23**   | Not installed*   | Disconnects I/OVL1 of U1 from the driving signal bus for channel I/OVL1.                                                                                                                     |
| JP24     | 1-2*             | Connects TS pin of U2 to V L , placing the device's I/O pins in normal operating mode.                                                                                                       |
| JP24     | 2-3              | Connects TS pin of U2 to GND, placing the device's I/O pins in high-impedance three-state mode.                                                                                              |
| JP25**   | 1-2*             | Connects I/OVL1 of U2 to the driving signal bus for channel I/OVL1.                                                                                                                          |
| JP25**   | Not installed    | Disconnects I/OVL1 of U2 from the driving signal bus for channel I/OVL1.                                                                                                                     |

│

## Detailed Description of Hardware

The  MAX14591  EV  kit  is  a  fully  assembled  and  tested circuit  board  that  demonstrates  the  functionality  of  the MAX14591  high-speed,  open-drain  capable  logic-level translator  in  both  the  8-bump  WLP  and  8-pin  TDFN packages. The EV kit features enables direct evaluation of the device by multiple jumper-selectable methods. The highly configurable PCB allows the user to evaluate each package separately or both at once. Input power to the EV kit is provided by a micro-USB, type-B connector or an external 5V power supply. On-board LDO regulators provide the appropriate voltage for each component, and potentiometers allow the user to adjust the power supply for  either  side  of  the  level  translator  independently. The EV kit's PCB is designed with 1oz copper.

## Power Supply

The EV kit is powered by a user-supplied 5V external DC power  supply  connected  between  the  V BUS   test  point (TP26) and GND, or the USB bus provided at the microUSB connector (J1). The power supply is then converted into three  independent  voltages.  The  pin-selectable  output voltage of the MAX8902A (U3) provides a 4.6V supply for peripherals such as the NC7WZ07 open-drain buffer, as well as for the DS1090 EconOscillators™. Two separate MAX8902B ICs are used to generate the power for the

## Component Suppliers

| SUPPLIER                   | WEBSITE                    |
|----------------------------|----------------------------|
| Hirose Electric Co., Ltd.  | www.hirose-connectors.com  |
| Murata Americas            | www.murataamericas.com     |
| Stanley Electric Co., Ltd. | www.stanley-components.com |

Note: Indicate that you are using the MAX14591 when contacting these component suppliers.

EconOscillator is a trademark of Maxim Integrated Products, Inc.

## Evaluates: MAX14591

VCC and VL  supplies on the MAX14591. The V CC  supply is generated by U6, which also provides power to the push-pull buffer for the V CC  channels (U10). The VL supply is generated by U7, which also provides power to the push-pull buffer for the V L  channels (U8).

## On-Board Oscillators

The EV kit features two on-board oscillators to generate input signals to the device. The DS1090-1 (U5) is used to generate a potentiometer-adjustable clock from 4MHz to 8MHz, while the DS1090-16 (U4) generates a potentiometer adjustable clock from 250kHz to 500kHz. These clock  signals  can  be  connected  to  individual  channels using 4-way jumpers JP2, JP5, JP12, and JP17 (Table 1).

## Push-Pull and Open-Drain Evaluation

Each channel can be driven in either push-pull mode or open-drain  mode.  For  evaluation  of  push-pull  operation or  low-speed  open-drain  operation,  use  the  on-board oscillators.  Simply  connect  the  open-drain  buffer  or push-pullbuffer through one of the 4-way jumpers to the channel  to  be  driven  to  begin  evaluation.  See  Table  1 for  jumper  configurations.  For  high-speed  open-drain operation, an external function generator is required.

## MAX14591 Evaluation Kit

## MAX14591 EV Kit Bill of Materials

| DESCRIPTION CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 6.3V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X5R;   | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEG; TC=X7R   | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;                                                       | DIODE; LED; 1112H SERIES; RED; SMT(0805); PIV=4.0V; IF=0.025A   | CONNECTOR; MALE; THROUGH HOLE; MICRO-USB CONNECTOR; RIGHT ANGLE; 5PINS   | CONNECTOR; MALE; THROUGH HOLE; FLAT VERTICAL BREAKAWAY; STRAIGHT; 2PINS   | CONNECTOR; MALE; THROUGH HOLE; FLAT VERTICAL BREAKAWAY; STRAIGHT; 4PINS CONNECTOR; MALE; THROUGH HOLE; FLAT VERTICAL BREAKAWAY; STRAIGHT; 3PINS   | RESISTOR; THROUGH-HOLE-RADIAL LEAD; 500K OHM; 10%; 150PPM; 0.25W; MOLDER CERAMIC OVER METAL FILM   | RESISTOR; THROUGH-HOLE-RADIAL LEAD; 50K OHM; 10%; 150PPM; 0.25W; MOLDER CERAMIC OVER METAL FILM RESISTOR; 0805; 470 OHM; 5%; 200PPM; 0.125W; THICK FILM   | RESISTOR, 0805, 1.5K OHM, 1%, 100PPM, 0.125W, THICK FILM   | RESISTOR, 0805, 120K OHM, 1%, 100PPM, 0.125W, THICK FILM RESISTOR; 0805; 43K OHM; 5%; 200PPM; 0.125W; THICK FILM   | RESISTOR; 0805; 80.6K OHM; 1%; 100PPM; 0.125W; THICK FILM   | RESISTOR; 0805; 68K OHM; 1%; 100PPM; 0.125W; THICK FILM   | RESISTOR; 0805; 100K OHM; 5%; 200PPM; 0.125W; THICK FILM   | RESISTOR; 0805; 1K; 1%; 100PPM; 0.125W; THICK FILM TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   |
|-------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|--------------------------------------------------------------------------|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|-----------------------------------------------------------|------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| VALUE 10UF                                                                                                        | 0.01UF                                                                                       | 0.1UF                                                                                                                                             | BR1112H-TR                                                      | ZX62D-B-5PA8                                                             | " 22-28-4023" 22-28-4043"                                                 | " " 22-28-4033"                                                                                                                                   | 500K                                                                                               | 50K 470                                                                                                                                                   | 1.5K                                                       | 120K 43K                                                                                                           | 80.6K                                                       | 68K                                                       | 100K                                                       | 1K N/A                                                                                                                                                                       | N/A                                                                                                                                                                                                                                                |
| MFG KEMET;MURATA                                                                                                  | MURATA;PANAS ONIC;SAMSUNG; MURATA                                                            | KEMET; MURATA; TDK; MURATA;VENKEL LTD; KEMET; VISHAY DALE; AVX; WURTH ELECTRONICS INC                                                             | STANLEY ELECTRIC CO. HIROSE                                     | ELECTRIC CO LTD.                                                         | MOLEX MOLEX                                                               | MOLEX                                                                                                                                             | MURATA                                                                                             | MURATA PANASONIC                                                                                                                                          | VISHAY DALE/ROHM                                           | VISHAY DALE PANASONIC                                                                                              | VISHAY DALE                                                 | VISHAY DALE                                               | PANASONIC VISHAY DALE;PANASONI                             | C;ROHM;YAGEO 5011 KEYSTONE                                                                                                                                                   | 5014 KEYSTONE                                                                                                                                                                                                                                      |
| QTY MFG PART # 6 C0805C106K9PAC; GRM21BR60J106K                                                                   | 3 GRM188R71C103KA01; ECJ-1VB1C10; CL10B103KO8NNN; GCJ188R71C103KA01 C0603C104K4RAC;          | 10 GCM188R71C104KA37; C1608X7R1C104K; GRM188R71C104KA01; C0603X7R160-104KNE; C0603C104K4RACAUTO; VJ0603Y104KXJCW1BC; 0603YC104KAT4A; 885012206046 | 1 BR1112H-TR                                                    | 1 ZX62D-B-5PA8                                                           | 16 " 22-28-4023" 4 " 22-28-4043"                                          | 3 " 22-28-4033"                                                                                                                                   | 2 PV37W504C01B00                                                                                   | 2 PV37W503C01B00 1 ERJ-6GEYJ471                                                                                                                           | 1 CRCW08051K50FK; MCR10EZPF1501                            | 1 CRCW0805120KFK 2 ERJ-6GEYJ433                                                                                    | 1 CRCW080580K6FK                                            | 1 CRCW080568K0FK                                          | 4 ERJ-6GEYJ104 CRCW08051K00FK;ERJ- 6ENF1001;MCR10EZHF100   | 8 1;RC0805FR-071KL 5                                                                                                                                                         | 8                                                                                                                                                                                                                                                  |
| DNI/DNP                                                                                                           | -                                                                                            | -                                                                                                                                                 | -                                                               | -                                                                        | - -                                                                       | -                                                                                                                                                 | -                                                                                                  | - -                                                                                                                                                       | -                                                          | - -                                                                                                                | -                                                           | -                                                         | -                                                          | - -                                                                                                                                                                          | -                                                                                                                                                                                                                                                  |
| ITEM REF_DES 1 C1, C3, C4, C6, C9, C11 -                                                                          | 2 C2, C5, C10                                                                                | 3 C7, C8, C12-C19                                                                                                                                 | 4 D1                                                            | 5 J1 JP1, JP3, JP7, JP9-                                                 | 6 JP23, JP25 7 JP2, JP5, JP12, JP17                                       | 8 JP4, JP6, JP24                                                                                                                                  | 9 POT1, POT2                                                                                       | 10 POT3, POT4 11 R1                                                                                                                                       | 12 R2                                                      | 13 R3 14 R4, R5                                                                                                    | 15 R6                                                       | 16 R7                                                     | 17 R8, R9, R18, R19                                        | 18 R10-R17 19 TP4-TP8                                                                                                                                                        | 21 TP11, TP12, TP14, TP15, TP18-TP21                                                                                                                                                                                                               |

│

## MAX14591 Evaluation Kit

## MAX14591 EV Kit Bill of Materials

| DESCRIPTION   | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;   | IC; TRANS; HIGH-SPEED; OPEN-DRAIN CAPABLE LOGIC-LEVEL TRANSLATOR; TDFN8 IC; VREG; LOW-NOISE LDO REGULATOR PIN-SELECTABLE OUTPUT VOLTAGE; TDFN8   | 2X2            | IC; PSCLR; 250KHZ TO 500KHZ; LOW-FREQUENCY; SPREAD-SPECTRUM; ECONOSCILLATOR; USOP8   | IC; PSCLR; 4MHZ TO 8MHZ; LOW-FREQUENCY; SPREAD-SPECTRUM; ECONOSCILLATOR; USOP8   | IC; VREG; LOW-NOISE LDO REGULATOR; TDFN8 2X2   | IC; INV; TINY LOGIC ULTRA-HIGH SPEED DUAL INVERTER; SC70-6   | IC; BUF; TINY LOGIC ULTRA-HIGH SPEED DUAL BUFFER; SC70-6   | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED PCB:MAX14591   | IC;        | TRANS; HIGH-SPEED; OPEN-DRAIN CAPABLE LOGIC-LEVEL TRANSLATOR; WLP8   |                        |
|---------------|------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|----------------|--------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|------------------------------------------------|--------------------------------------------------------------|------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|------------|----------------------------------------------------------------------|------------------------|
| VALUE         | N/A                                                  | MAX14591ETA+                                                                                                                                     | MAX8902AATA+   | DS1090U-16+                                                                          | DS1090U-1+                                                                       | MAX8902BATA+                                   | NC7WZ04P6X                                                   | NC7WZ07P6X                                                 | SX1100-B                                                                                                               | PCB        | MAX14591EWA+                                                         |                        |
| MFG           | KEYSTONE                                             | MAXIM                                                                                                                                            | MAXIM          | MAXIM                                                                                | MAXIM                                                                            | MAXIM                                          | FAIRCHILD SEMI                                               | FAIRCHILD SEMI                                             | KYCON; KYCON; SULLINS ELECTRONICS CORP.                                                                                | MAXIM      | MAXIM                                                                |                        |
| MFG PART #    | 5010                                                 | 1 MAX14591ETA+                                                                                                                                   | 1 MAX8902AATA+ | 1 DS1090U-16+                                                                        | 1 DS1090U-1+                                                                     | 2 MAX8902BATA+                                 | 2 NC7WZ04P6X                                                 | NC7WZ07P6X                                                 | 17 S1100-B;SX1100- B;STC02SYAN                                                                                         | 1 MAX14591 | 0 MAX14591EWA+                                                       | DNP--> DO NOT PROCURE  |
| DNI/DNP QTY   | - 4                                                  | -                                                                                                                                                | -              | -                                                                                    | -                                                                                | -                                              | -                                                            | - 2                                                        | -                                                                                                                      | -          | DNP                                                                  | 118 INSTALL(PACKOUT) ; |
|               | TP23-TP26                                            | U2                                                                                                                                               |                | U4                                                                                   |                                                                                  | U7                                             | U8, U10                                                      |                                                            | XJP1-XJP7, XJP9- XJP11, XJP13, XJP14, XJP18, XJP19, XJP23- XJP25                                                       |            |                                                                      | DO NOT                 |
| ITEM REF_DES  | 22                                                   | 23                                                                                                                                               | 24 U3          | 25                                                                                   | 26 U5                                                                            | 27 U6,                                         | 28                                                           | 29 U9, U11                                                 | 30                                                                                                                     | 31 PCB     | 32 U1                                                                | NOTE: DNI--> TOTAL     |

Evaluates: MAX14591

## MAX14591 EV Kit Schematic

Evaluates: MAX14591

<!-- image -->

## MAX14591 EV Kit PCB Layout Diagrams

MAX14591 EV Kit Component Placement Guide

<!-- image -->

MAX14591 EV Kit Layout-Solder Side

<!-- image -->

MAX14591 EV Kit Layout-Component Side

<!-- image -->

## Ordering Information

# Denotes RoHS compliant.

| PART           | TYPE   |
|----------------|--------|
| MAX14591EVKIT# | EV Kit |

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                          | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------------------------------|-----------------|
|                 0 | 10/13           | Initial release                                                                      | -               |
|                 1 | 3/19            | Updated General Description, Quick Start, Table 1, Bill of Materials , and Schematic | 1-6             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPplied. Ma[iP Integrated reserves the right to change the circuitry and speci¿cations without notice at any tiPe.

│

Evaluates: MAX14591