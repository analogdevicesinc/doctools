<!-- lastmod 2022-08-02 -->
## MAX17270 Evaluation Kit

## General Description

The  MAX17270  evaluation  kit  (EV  kit)  evaluates  the MAX17270.  The  MAX17270  is  a  3-output  switching regulator that regulates three outputs using a single, small 2.2µH inductor.

The MAX17270 EV kit features two independent circuits to evaluate two different IC packages of the MAX17270. Both circuits on the EV kit operates over an input range of  2.7V  to  5.5V.  Each  circuit  provides  three  jumperconfigurable  outputs,  with  voltages  from  0.8V  to  5V  for each  output  channel.  Each  circuit  output  on  the  EV  kit delivers up to 50mA/75mA/80mA of current depending on the input voltage to the output voltage ratio.

The  EV  kit  comes  with  the  MAX17270ETE+  and  the MAX17270ENE+ installed.

## Features

- Two Independent Circuits on One Board
- Evaluates the MAX17270 IC in a 16-pin TQFN
- Evaluates the MAX17270 IC in a 4 x 4 Bump, 0.4mm Pitch WLP
- 2.7V to 5.5V Input Range
- 0.8V to 5V Configurable Output Voltage
- Up to 50mA/75mA/80mA Output Current
- Proven 4-Layer 1oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assemble and Tested

Ordering Information appears at end of data sheet.

## MAX17270 EV Kit Files

| FILE                   | DECRIPTION               |
|------------------------|--------------------------|
| MAX17270 EV BOM        | EV Kit Bill of Materials |
| MAX17270 EV PCB Layout | EV Kit Layout            |
| MAX17270 EV Schematic  | EV Kit Schematic         |

Evaluates: MAX17270

## Quick Start

## Required Equipment

- MAX17270 EV kit
- 2.7V to 5.5V, 1A DC power supply
- Electronic load capable of 100mA
- Digital voltmeter (DVM)

## Procedure &lt;&lt;Testing the TQFN Circuit&gt;&gt;

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

## Caution:  Do  not  turn  on  power  supply  until  all connections are completed.

- 1) Verify  that  jumpers  JU1  to  JU6  are  in  their  default positions, as shown in Table 1 through Table 4 .
- 2) Connect the 2.7V to 5.5V power supply between the IN1 and nearest PGND1 terminal posts.
- 3) Turn on the power supply and set the power supply output to 3V.
- 4) Verify that the output voltage at OUT1 and nearest PGND1 terminal posts is 1.0V.
- 5) Verify that the output voltage at OUT2 and nearest PGND1 terminal posts is 1.8V.
- 6) Verify that the output voltage at OUT3 and nearest PGND1 terminal posts is 3.3V.
- 7) Connect  the  electronic  load  between  OUT1  and PGND1. Set the electronic load to 50mA
- 8) Enable the  electronic  load  and  verify  that  OUT1  is still 1.0V
- 9) Connect  the  electronic  load  between  OUT2  and PGND1. Set the electronic load to 75mA
- 10) Enable the  electronic  load  and  verify  that  OUT2  is still 1.8V
- 11) Connect  the  electronic  load  between  OUT3  and PGND1. Set the electronic load to 80mA
- 12) Enable the  electronic  load  and  verify  that  OUT3  is still 3.3V

<!-- image -->

## MAX17270 Evaluation Kit

## Procedure &lt;&lt;Testing the WLP Circuit&gt;&gt;

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution: Do not turn on power supply until all connections are completed.

- 13) Verify  that  jumpers  JU101  to  JU106  are  in  their default positions, as shown in Table 5 through Table 8 .
- 14)  Connect the 2.7V to 5.5V power supply between the IN and nearest PGND terminal posts.
- 15) Turn on the power supply and set the power supply output to 3V.
- 16)  Verify that the output voltage at OUT101 and nearest PGND terminal posts is 1.0V.
- 17) Verify that the output voltage at OUT102 and nearest PGND terminal posts is 1.8V.
- 18)  Verify that the output voltage at OUT103 and nearest PGND terminal posts is 3.3V.
- 19) Connect  the  electronic  load  between  OUT101  and PGND. Set the electronic load to 50mA.
- 20) Enable the electronic load and verify that OUT101 is still 1.0V.

Evaluates: MAX17270

- 21) Connect  the  electronic  load  between  OUT102  and PGND. Set the electronic load to 75mA.
- 22) Enable the electronic load and verify that OUT102 is still 1.8V.
- 23) Connect  the  electronic  load  between  OUT103  and PGND. Set the electronic load to 80mA.
- 24)  Enable the electronic load and verify that OUT103 is still 3.3V.

## Detailed Description of Hardware

The  MAX17270  EV  kit  evaluates  the  MAX17270.  The MAX17270 is a 3-output switching regulator that regulates three outputs using a single, small 2.2µH inductor.

The MAX17270 EV kit features two independent circuits to evaluate two different IC packages of the MAX17270, the 16-pin TQFN and the 4x4 bump, 0.4mm pitch, WLP. Both circuits on the EV kit operates over an input voltage range of 2.7V to 5.5V. Each circuit provides three output channels. Each output channel provides an output with a jumper-configurable voltage from 0.8V to 5V. Each circuit output channel delivers up to 50mA/75mA/80mA of current depending on the input voltage to the output voltage ratio.

The  EV  kit  comes  with  the  MAX17270ETE+  and  the MAX17270ENE+ installed.

## Table 1. EN1-EN3 (JU1 - JU3) on MAX17270 (TQFN) Circuit

| JU1 - JU3 SHUNT POSITION   | DESCRIPTION                                   |
|----------------------------|-----------------------------------------------|
| 1-2*                       | Enabled. EN_ = IN1                            |
| 2-3                        | Disabled. EN_ = PGND1                         |
| OPEN                       | Enabled. EN_ = high (through internal pullup) |

## Table 2. RSEL1 (JU4) on MAX17270 (TQFN) Circuit

| JU4 SHUNT POSITION   | RSEL1 CONNECTED TO   | OUT1   | OUT1 CURRENT LIMIT   |
|----------------------|----------------------|--------|----------------------|
| 1-2                  | R4 = 1M              | 0.8V   | 0.5A                 |
| 1-3*                 | R5 = 768k            | 1.0V   | 0.5A                 |
| 1- 4                 | R6 = 536k            | 1.2V   | 0.5A                 |

* Default position.

## Table 3. RSEL2 (JU5) on MAX17270 (TQFN) Circuit

| JU5 SHUNT POSITION   | RSEL2 CONNECTED TO   | OUT2   | OUT2 CURRENT LIMIT   |
|----------------------|----------------------|--------|----------------------|
| 1-2                  | R7 = 20k             | 1.5V   | 1A                   |
| 1-3*                 | R8 = 16.9k           | 1.8V   | 1A                   |
| 1- 4                 | R9 = 14k             | 2.2V   | 1A                   |

## Table 4. RSEL3 (JU6) on MAX17270 (TQFN) Circuit

| JU6 SHUNT POSITION   | RSEL3 CONNECTED TO   | OUT3   | OUT3 CURRENT LIMIT   |
|----------------------|----------------------|--------|----------------------|
| 1-2                  | R10 = 11.8k          | 2.5V   | 1A                   |
| 1-3*                 | R11 = 8.45k          | 3.3V   | 1A                   |
| 1- 4                 | R12 = 0              | 5V     | 1A                   |

## Table 5. EN101-EN103 (JU101-JU103) on MAX17270 (WLP) Circuit

| JU101-JU103 SHUNT POSITION   | DESCRIPTION                                |
|------------------------------|--------------------------------------------|
| 1-2*                         | Enabled. EN_ = IN                          |
| 2-3                          | Disabled. EN_ = PGND                       |
| OPEN                         | Enabled. EN_ = high (via internal pull up) |

## Table 6. RSEL101 (JU104) on MAX17270 (WLP) Circuit

| JU104 SHUNT POSITION   | RSEL101 CONNECTED TO   | OUT101   | OUT101 CURRENT LIMIT   |
|------------------------|------------------------|----------|------------------------|
| 1-2                    | R104 = 1M              | 0.8V     | 0.5A                   |
| 1-3*                   | R105 = 768k            | 1.0V     | 0.5A                   |
| 1- 4                   | R106 = 536k            | 1.2V     | 0.5A                   |

## Table 7. RSEL102 (JU105) on MAX17270 (WLP) Circuit

| JU105 SHUNT POSITION   | RSEL102 CONNECTED TO   | OUT102   | OUT102 CURRENT LIMIT   |
|------------------------|------------------------|----------|------------------------|
| 1-2                    | R107 = 20k             | 1.5V     | 1A                     |
| 1-3*                   | R108 = 16.9k           | 1.8V     | 1A                     |
| 1- 4                   | R109 = 14k             | 2.2V     | 1A                     |

## Table 8. RSEL103 (JU106) on MAX17270 (WLP) Circuit

| JU106 SHUNT POSITION   | RSEL1032 CONNECTED TO   | OUT103   | OUT103 CURRENT LIMIT   |
|------------------------|-------------------------|----------|------------------------|
| 1-2                    | R110 = 11.8k            | 2.5V     | 1A                     |
| 1-3*                   | R111 = 8.45k            | 3.3V     | 1A                     |
| 1- 4                   | R112 = 0                | 5V       | 1A                     |

## MAX17270 Evaluation Kit

## Enable Function for the MAX17270ETE+ (TQFN) Circuit

The  MAX17270  (TQFN)  circuit  on  the  EV  kit  provides three jumpers JU1, JU2, and JU3 to individually enable or disable each output channel. Refer to Table 1 for jumper setting of jumpers JU1, JU2, and JU3.

## Output Voltage Selection for the MAX17270ETE+ (TQFN) Circuit

The  MAX17270  (TQFN)  circuit  on  the  EV  kit  provides three  jumpers  JU4,  JU5,  and  JU6  (RSEL1,  RSEL2 and RSEL3) to configure the output voltage for each output channel. Refer to Table 2 , Table 3 , and Table 4 for jumper setting of jumpers JU4, JU5, and JU6.

## Enable Function for the MAX17270ENE+ (WLP) Circuit

The  MAX17270  (WLP)  circuit  on  the  EV  kit  provides three  jumpers JU101, JU102, and JU103 to individually enable or disable each output channel. Refer to Table 5 for jumper setting of jumpers JU101-JU103.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX17270EVKIT# | EV Kit |

#Denotes RoHS compliant.

## Output Voltage Selection for the MAX17270ENE+ (WLP) Circuit

The MAX17270 (WLP) circuit on the EV kit provides three jumpers JU104, JU105, and JU106 (RSEL101, RSEL102, and RSEL103) to configure the output voltage for each output channel. Refer to Table 6 , Table 7 , and Table 8 for jumper setting of jumpers JU104, JU105, and JU106.

## Spare Inductors

The MAX17270 EV kit provides spare inductors  on  the PCB's bottom side. The spare inductors can be used to reconfigure the EV kit output current ratings.

## Component Suppliers

| SUPPLIER         | WEBSITE           |
|------------------|-------------------|
| Coilcraft        | www.coilcraft.com |
| Murata/TOKO      | www.murata.com    |
| TDK              | www.tdk.com       |
| Wurth Elektronik | www.we-online.com |

Note: Indicate that you are using the MAX17270 when contacting these component suppliers.

## MAX17270 EV Kit Bill of Materials

| ITEM   | REF_DES                                                                                                                            | DNI/DNP   | QTY   | MFG PART #                                                                          | MANUFACTURER                                                | VALUE        | DESCRIPTION                                                                                                                                                                                                 |
|--------|------------------------------------------------------------------------------------------------------------------------------------|-----------|-------|-------------------------------------------------------------------------------------|-------------------------------------------------------------|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | C1, C101                                                                                                                           | -         | 2     | CGA2B3X7R1H104K; C1005X7R1H104K050BB; GRM155R71H104KE14                             | TDK;TDK;MURATA                                              | 0.1µF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1µF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                                                                                                  |
| 2      | C3, C103                                                                                                                           | -         | 2     | GRM188R71A105K; C0603X7R100-105; C1608X7R1A105K080AC; LMK107B7105KA; CL10B105KP8NFN | MURATA;VENKEL LTD;TDK; TAIYO YUDEN; SAMSUNG ELECTRONICS     | 1µF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 1µF; 10V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R;                                                                                                                   |
| 3      | C4, C104                                                                                                                           | -         | 2     | C1608X5R1A106K                                                                      | TDK                                                         | 10µF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 10µF; 10V; TOL = 10%; MODEL=; TG = -55°C TO +85°C; TC = X5R                                                                                                            |
| 4      | C5-C7, C105-C107                                                                                                                   | -         | 6     | C1608X5R1A226M080AC; GRM188R61A226ME15                                              | TDK;MURATA                                                  | 22µF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 22µF; 10V; TOL = 20%; TG = -55°C TO +85°C; TC = X5R                                                                                                                    |
| 5      | EN1-EN3, EN101-EN103                                                                                                               | -         | 6     | PEC03SAAN                                                                           | SULLINS                                                     | PEC03SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                                                                                   |
| 6      | IN, IN1, OUT1-OUT3, PGND, PGND1, OUT101-OUT103, PGND1_OUT1-PGND1_OUT3, PGND_OUT101-PGND_OUT103                                     | -         | 16    | 1514-2                                                                              | KEYSTONE                                                    | 1514-2       | TERMINAL; TURRET; PIN DIA = 0.090IN; TOTAL LENGTH = 0.105IN; BOARD HOLE = 0.098IN; BRASS; TIN PLATING;                                                                                                      |
| 7      | LXA, LXB, LXA1, LXB1, IN1_JACK, OUT1_JACK-OUT3_JACK, IN101_JACK, OUT101_JACK-OUT103_JACK                                           | -         | 12    | 131-4353-00                                                                         | TEKTRONICS                                                  | 131-4353-00  | CONNECTOR; WIREMOUNT; CIRCUIT BOARD TEST POINT MINIATURE PROBE; STRAIGHT; 4PINS                                                                                                                             |
| 8      | L1, L101                                                                                                                           | -         | 2     | XFL4020-222ME                                                                       | COILCRAFT                                                   | 2.2UH        | INDUCTOR; SMT; METAL COMPOSITE CORE; 2.2µH; TOL = ± 20%; 8A; -40°C TO +125°C                                                                                                                                |
| 9      | L1A                                                                                                                                | -         | 1     | MLP1005M1R0DT0S1                                                                    | TDK                                                         | 1µH          | INDUCTOR; SMT (0402); FERRITE CHIP; 1µH; TOL = ±20%; 0.5A                                                                                                                                                   |
| 10     | L1B                                                                                                                                | -         | 1     | DFE160808S-1R0M=P2                                                                  | MURATA                                                      | 1µH          | INDUCTOR; SMT (0603); MAGNETICALLY SHIELDED; 1µH; TOL = ±20%; 1.9A                                                                                                                                          |
| 11     | L1C                                                                                                                                | -         | 1     | DFM18PAN2R2MG0L                                                                     | MURATA                                                      | 2.2µH        | INDUCTOR; SMT (0603); CERAMIC CHIP; 2.2µH; TOL = ±20%; 1.1A;                                                                                                                                                |
| 12     | L1D                                                                                                                                | -         | 1     | DFE201612E-1R0M                                                                     | MURATA                                                      | 1µH          | INDUCTOR; SMT (0806); WIREWOUND CHIP; 1µH; TOL = ±20%; 2.9A                                                                                                                                                 |
| 13     | L1E                                                                                                                                | -         | 1     | 74479299222                                                                         | WURTH ELECTRONICS INC                                       | 2.2µH        | INDUCTOR; SMT (1210); MOLDED CHIP; 2.2µH; TOL = ±20%; 2.1A                                                                                                                                                  |
| 14     | L1F                                                                                                                                | -         | 1     | 74438357022                                                                         | WURTH ELECTRONICS INC                                       | 2.2µH        | EVKIT PART-INDUCTOR; SMT; SHIELDED; 2.2µH; TOL = ±20%; 5.2A;                                                                                                                                                |
| 15     | L1G                                                                                                                                | -         | 1     | DFE201612E-2R2M                                                                     | MURATA                                                      | 2.2µH        | INDUCTOR; SMT (0806); WIREWOUND CHIP; 2.2µH; TOL = ±20%; 1.8A                                                                                                                                               |
| 16     | R4, R104                                                                                                                           | -         | 2     | CRCW06031M00FK; MCR03EZPFX1004                                                      | VISHAY DALE;ROHM                                            | 1M           | RESISTOR, 0603, 1M OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                                                                                                       |
| 17     | R5, R105                                                                                                                           | -         | 2     | CRCW0603768KFK                                                                      | VISHAY DALE                                                 | 768K         | RESISTOR; 0603; 768K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                                                      |
| 18     | R6, R106                                                                                                                           | -         | 2     | ERJ-3EKF5363                                                                        | PANASONIC                                                   | 536K         | RESISTOR; 0603; 536K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                                                      |
| 19     | R7, R107                                                                                                                           | -         | 2     | MCR03EZPFX2002; ERJ-3EKF2002; CR0603-FX-2002ELF                                     | ROHM;PANASONIC;BOURNS                                       | 20K          | RESISTOR; 0603; 20K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                                      |
| 20 21  | R8, R108 R9, R109                                                                                                                  | - -       | 2 2   | RC0603FR-0716K9 RCI-0603-1402F                                                      | PANASONIC;YAGEO PHYCOMP INTERNATIONAL MANUFACTURING SERVICE | 16.9K 14K    | RESISTOR; 0603; 16.9K OHM; 1%; 100PPM; 0.10W; THICK FILM RESISTOR, 0603, 14K OHM, 1%, 100PPM, 0.1W                                                                                                          |
| 22 23  | R10, R110 R11, R111                                                                                                                | - -       | 2 2   | ERJ-3EKF1182 RC0603FR-078K45L                                                       | PANASONIC YAGEO PHYCOMP                                     | 11.8K 8.45K  | RESISTOR; 0603; 11.8K OHM; 1%; 100PPM; 0.1W; THICK FILM RESISTOR; 0603; 8.45K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                            |
| 24     | R12, R13, R112, R113                                                                                                               | -         | 4     | CRCW06030000ZS;                                                                     | VISHAY DALE;ROHM;PANASONIC                                  | 0            | RESISTOR; 0603; 0Ω; 0%; JUMPER; 0.10W; THICK FILM                                                                                                                                                           |
| 25     | RSEL1-RSEL3,                                                                                                                       | -         | 6     | MCR03EZPJ000;ERJ-3GEY0R00                                                           | MOLEX                                                       | 22-28-4043   | CONNECTOR; MALE; THROUGH HOLE; FLAT VERTICAL BREAKAWAY; STRAIGHT; 4PINS                                                                                                                                     |
| 26     | RSEL101-RSEL103 SU1-SU6, SU101-SU106                                                                                               | -         |       | 22-28-4043                                                                          |                                                             | SX1100-B     | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.24IN;                                                                                                                                                             |
|        |                                                                                                                                    |           | 12    | S1100-B;SX1100-B                                                                    | KYCON;KYCON                                                 |              | BLACK; INSULATION = PBT; PHOSPHOR BRONZE CONTACT = GOLD PLATED                                                                                                                                              |
| 27     | TP_GND1_U1, TP_GND_U101                                                                                                            | -         | 2     | 5001                                                                                | KEYSTONE                                                    | N/A          | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                                    |
| 28     | U1                                                                                                                                 | -         | 1     | MAX17270ETE+                                                                        | MAXIM                                                       | MAX17270ETE+ | EVKIT PART-IC; NANOPOWER TRIPLE/DUAL-OUTPUT SINGLE INDUCTOR MULTIPLE-OUTPUT (SIMO) BUCK BOOST REGULATOR; TQFN16-EP; PKG. CODE: T1633+5; PKG. OUTLINE DWG. NO.: 21-100136; PKG. LAND PATTERN NUMBER: 90-0032 |
| 29     | U101                                                                                                                               | -         | 1     | MAX17270ENE+                                                                        | MAXIM                                                       | MAX17270ENE+ | EVKIT PART-IC; ULTRA-LOW POWER TRIPLE-OUTPUT SINGLE INDUCTOR MULTIPLE OUTPUT (SIMO) BUCK BOOST REGULATOR; WLP16; 0.40MM PITCH; PACKAGE CODE: N161A1+1; PACKAGE OUTLINE DRAWING: 21-100190                   |
| 30 31  | VSUP, VSUP1 PCB                                                                                                                    | - -       | 2     | 5002 MAX17270                                                                       | KEYSTONE MAXIM                                              | N/A PCB      | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER; PCB:MAX17270                                                                                    |
| 32     | JU7, JU107                                                                                                                         | DNP       | 1 0   | PEC02SAAN                                                                           | SULLINS                                                     | PEC02SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS INDUCTOR; SMT; METAL COMPOSITE CORE; 2.2µH;                                                                                                       |
| 33     | L2, L102                                                                                                                           | DNP       | 0     | XFL4020-222ME                                                                       | COILCRAFT                                                   | 2.2UH        | TOL = ± 20%; 8A; -40°C TO +125°C                                                                                                                                                                            |
| 34     | TP_IN, TP_IN1, TP_OUT1-TP_OUT3, TP_PGND, TP_PGND1, TP_OUT101-TP_OUT103, TP_PGND1_OUT1-TP_PGND1_OUT3, TP_PGND_OUT101-TP_PGND_OUT103 | DNP       | 0     | 5000                                                                                | KEYSTONE                                                    | N/A          | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                                          |

Evaluates: MAX17270

## MAX17270 EV Kit Schematic

<!-- image -->

## MAX17270 EV Kit PCB Layout Diagrams

MAX17270 EV PCB-Top Silkscreen

<!-- image -->

## MAX17270 EV Kit PCB Layout Diagrams (continued)

MAX17270 EV PCB-Top Layer

<!-- image -->

## MAX17270 EV Kit PCB Layout Diagrams (continued)

MAX17270 EV PCB-Internal 2

<!-- image -->

## MAX17270 EV Kit PCB Layout Diagrams (continued)

MAX17270 EV PCB-Internal 3

<!-- image -->

## MAX17270 EV Kit PCB Layout Diagrams (continued)

MAX17270 EV PCB-Bottom Layer

<!-- image -->

## MAX17270 EV Kit PCB Layout Diagrams (continued)

MAX17270 EV PCB-Bottom Silkscreen

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-462, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX17270