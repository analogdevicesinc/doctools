<!-- lastmod 2022-08-03 -->
## MAX14727 Evaluation Kit

## General Description

The MAX14727 evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the MAX14727 dual-input, bidirectional overvoltage protection with automatic  path  control  device.  The  EV  kit  comes  with  the MAX14727EWV+ installed. To evaluate the MAX14728/ MAX14731, request  a  sample  from  Maxim  and  replace the MAX14727 with the MAX14728/MAX14731.

## Features

- 3V to 28V Operating Voltage Range
- LEDs Showing INAOK , INBOK
- Proven PCB Layout
- Fully Assembled and Tested

## EV Kit Contents

- EV Kit Board Containing a MAX14727

Ordering Information appears at end of data sheet.

Evaluates: MAX14727/

MAX14728/MAX14731

## Quick Start

## Required Equipment

- MAX14727 EV kit
- Two 15V DC power supply
- USB Cable or 5V power supply
- Multimeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Connect one power supply to INA and one power supply to INB.
- 2) Connect voltmeter to OUT.
- 3) Connect USB cable to J1 or connect 5V power supply on TP1 to source VIO.
- 4) Supply 4.5V to INA. Verify OUT is 4.5V and LED1 is on.
- 5) Increase voltage on INA and verify OUT voltage follows INA voltage. Keep increasing INA voltage, when INA reaches OVLO threshold 13.75V, OUT voltage goes down and LED1 is off.
- 6) Decrease INA voltage, then OUT comes back to be the same as INA voltage and LED1 is on. Turn off INA power supply.
- 7) Supply 4.5V to INB. Verify OUT is 4.5V an LED2 is on.
- 8) Increase voltage on INB and verify OUT voltage follows INB voltage. Keep increasing INB voltage, when INB reaches OVLO threshold 13.75V, OUT voltage goes down and LED2 is off.
- 9) Decrease INB voltage, then OUT comes back to be the same as INB voltage and LED2 is on.
- 10)  Set INB voltage to 5V and verify OUT is 5V.
- 11)  Set INA voltage to 3V and turn on INA power supply. Verify OUT is still 5V.
- 12)  Increase INA voltage. Verify when INA goes to about 4.5V, LED1 is on and OUT voltage is the same as INA voltage.

<!-- image -->

## MAX14727 Evaluation Kit

## Detailed Description

The  MAX14727  EV  kit  is  a  fully  assembled  and  tested circuit  board  demonstrating  the  MAX14727  dual-input, bidirectional  overvoltage  protection  with  automatic  path control device in a 30-bump WLP package.

## LEDs

LED1/LED2 turns on when INAOK / INBOK is asserted.

## Table 1. JU1, JU4, JU7, JU8 Jumper Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                  |
|----------|------------------|----------------------------------------------|
| JU1      | Installed        | PCON is high (no beak before make time)      |
| JU1      | Not installed*   | PCON is low (break before make time enabled) |
| JU4      | Installed        | EN is high (device disabled)                 |
| JU4      | Not installed*   | EN is low (device enabled)                   |
| JU7      | Installed        | OTG_ENB high (channel B OTG enabled)         |
| JU7      | Not installed*   | OTG_ENB low (channel B OTG disabled)         |
| JU8      | Installed        | OTG_ENAhigh (channelAOTG enabled)            |
| JU8      | Not installed*   | OTG_ENAlow (channelAOTG disabled)            |

## Table 2. JU3, JU5 Jumper Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION                             |
|----------|------------------|-----------------------------------------|
| JU3      | Installed        | 100µF capacitor is connected to OUT     |
| JU3      | Not installed*   | 100µF capacitor is not connected to OUT |
| JU5      | Installed        | 50Ω resistor is connected to OUT        |
| JU5      | Not installed*   | 50Ω resistor is not connected to OUT    |

## Table 3. JU9, JU10 Jumper Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                   |
|----------|------------------|-------------------------------------------------------------------------------|
| JU9      | 1-2              | OVLOAis connected to resistor divider. Using external overvoltage threshold.  |
| JU9      | 2-3*             | OVLOAis connected to ground. Using internal overvoltage threshold.            |
| JU10     | 1-2              | OVLOB is connected to resistor divider. Using external overvoltage threshold. |
| JU10     | 2-3*             | OVLOB is connected to ground. Using internal overvoltage threshold.           |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14727EVKIT# | EVKIT  |

# Denotes RoHS compliant.

## Digital Inputs

Use USB cable or external power supply to power digital inputs.  Use  JU1,  JU4,  JU7,  and  JU8  to  control  digital inputs (Table 1).

## Output Load

Use  JU3,  and  JU5  to  add  output  capacitor  or  resistor (Table 2).

## Overvoltage Threshold

Use JU9, and JU10 to choose internal or external overvoltage threshold setting (Table 3).

Evaluates: MAX14727/

MAX14728/MAX14731

│

## MAX14727 EV Kit Bill of Materials

|   ITEM | REF_DES                        | DNI/DNP   |   QTY | MFG PART #                                                        | MANUFACTURER                         | VALUE         | DESCRIPTION                                                                                                              |
|--------|--------------------------------|-----------|-------|-------------------------------------------------------------------|--------------------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------|
|      1 | C1, C8                         | -         |     2 | C0603X5R160-105KNP; EMK107BJ105KA; C1608X5R1C105K; GRM188R61C105K | VENKEL LTD./TAIYO YUDEN/ TDK/MURATA  | 1UF           | CAPACITOR; SMT; 0603; CERAMIC; 1uF; 16V; 10%; X5R; -55degC to + 85degC; 0 +/-15% degC MAX.USE 20-0001u-63 FOR NEW DESIGN |
|      2 | C2                             | -         |     1 | C0805C475K4PAC; ECJ-2FB1C475K; CL21A475KOFNNN                     | KEMET/PANASONIC/ SAMSUNG ELECTRONICS | 4.7UF         | CAPACITOR; SMT; 0805; CERAMIC; 4.7uF; 16V; 10%; X5R; -55degC to + 85degC; 0 +/-15% degC MAX.                             |
|      3 | C3                             | -         |     1 | T495X107M020ATE100                                                | KEMET                                | 100UF         | CAPACITOR; SMT (7343-43); TANTALUM CHIP; 100UF; 20V; TOL=20%; TG=-55 DEGC TO +125 DEGC; AUTO; LOW ESR                    |
|      4 | C5                             | -         |     1 | GRM21BR61H105KA12                                                 | MURATA                               | 1UF           | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 50V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R                |
|      5 | C6, C7                         | -         |     2 | C0805C104K5RAC; GRM21BR71H104K; C2012X7R1H104K085AA               | KEMET; MURATA; TDK                   | 0.1UF         | CAPACITOR; SMT (0805); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R;                      |
|      6 | J1                             | -         |     1 | 61729-0010BLF                                                     | FCI CONNECT                          | 61729-0010BLF | CONNECTOR; FEMALE; THROUGH-HOLE; UNIVERSAL SERIES BUS B-TYPE CONNECTOR; RIGHT ANGLE; 4PINS                               |
|      7 | JU1, JU3-JU5, JU7, JU8         | -         |     6 | PEC02SAAN                                                         | SULLINS                              | PEC02SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                |
|      8 | JU9, JU10                      | -         |     2 | PEC03SAAN                                                         | SULLINS                              | PEC03SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                |
|      9 | LED1, LED2                     | -         |     2 | LG N971-KN-1                                                      | OSRAM                                | LG N971-KN-1  | DIODE; LED; SMT (1206); PIV=2.6V; IF=0.025A; -30 DEGC TO +85 DEGC; GREEN                                                 |
|     10 | R1, R7, R8, R10, R13, R15, R17 | -         |     7 | CRCW0805100KFK; RK73H2ATTD1003; ERJ-6ENF1003V                     | VISHAY DALE/KOA SPEER/ PANASONIC     | 100K          | RESISTOR; 0805; 100K; 1%; 100PPM; 0.125W; THICK FILM                                                                     |
|     11 | R2                             | -         |     1 | CRCW080510K0FK; MCR10EZHF1002; ERJ-6ENF1002V;                     | GENERIC PART                         | 10K           | RESISTOR; 0805; 10K; 1%; 100PPM; 0.125W; THICK FILM                                                                      |
|     12 | R3                             | -         |     1 | RC0805FR-0710KL CRCW08056K04FK; MCR10EZPF6041                     | VISHAYDALE/ROHM                      | 6.04K         | RESISTOR; 0805; 6.04K; 1%; 100PPM; 0.125W; THICK FILM                                                                    |
|     13 | R4                             | -         |     1 | RC0805JR-070RL                                                    | YAGEO PHYCOMP                        | 0             | RESISTOR; 0805; 0 OHM; 5%; JUMPER; 0.125W; THICK FILM                                                                    |
|     14 | R5, R6                         | -         |     2 | CRCW0805332RFK; MCR10EZHF3320                                     | VISHAYDALE/ROHM                      | 332           | RESISTOR; 0805; 332 OHM; 1%; 100PPM; 0.125W; THICK FILM                                                                  |
|     15 | R9, R12, R14, R16              | -         |     4 | CRCW08051K00FK; ERJ-6ENF1001V; MCR10EZHF1001; RC0805FR-071KL      | VISHAY DALE; PANASONIC; ROHM; YAGEO  | 1K            | RESISTOR; 0805; 1K; 1%; 100PPM; 0.125W; THICK FILM                                                                       |
|     16 | R11                            | -         |     1 | UB5C-50RF1                                                        | RIEDON INC                           | 50            | RESISTOR; THROUGH HOLE-AXIAL LEAD; 50R OHM; 1%; 20PPM; 5W; SILICON COATED WIREWOUND                                      |
|     17 | SU1-SU8                        | -         |     8 | STC02SYAN                                                         | SULLINS ELECTRONICS CORP.            | STC02SYAN     | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL  |
|     18 | TB1-TB3                        | -         |     3 | 398800302                                                         | MOLEX                                | 398800302     | CONNECTOR; FEMALE; THROUGH HOLE; 5.08/.200 EUROSTYLE LOW; SINGLE ROW FIXED BLOCK; RIGHT ANGLE; 2PINS                     |
|     19 | TP1, TP5, TP6, TP8, TP15       | -         |     5 | 5010                                                              | Keystone                             | 5010          | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE                                                                        |
|     20 | TP2-TP4, TP7, TP16             | -         |     5 | 5011                                                              | Keystone                             | 5011          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
|     21 | TP9-TP14, TP17, TP18           | -         |     8 | 5014                                                              | Keystone                             | 5014          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|     22 | U1                             | -         |     1 | MAX14727EWV+                                                      | MAXIM                                | MAX14727EWV+  | IC; PROT; 13.75V OVLO; DUAL INPUT; BIRECTIONAL OVERVOLTAGE PROTECTOR WITH AUTOMATIC PATH                                 |
|     23 | U2                             | -         |     1 | NC7WZ07P6X                                                        | FAIRCHILD SEMICONDUCTOR              | NC7WZ07P6X    | IC; BUF; TINY LOGIC ULTRA-HIGH SPEED DUAL BUFFER; SC70-6                                                                 |
|     24 | U3                             | -         |     1 | MAX8880EUT+                                                       | MAXIM                                | MAX8880EUT+   | IC; VREG; ULTRA-LOW-IQ LOW-DROPOUT LINEAR REGULATOR WITH POK; SOT23-6                                                    |
|     25 | PCB                            | -         |     1 | MAX14727                                                          | MAXIM                                | PCB           | PCB:MAX14727 -                                                                                                           |
|     26 | R18-R21                        | DNP       |     0 | N/A                                                               | N/A                                  | OPEN          | PACKAGE OUTLINE 0805 RESISTOR                                                                                            |

## MAX14727 EV Kit Schematic

<!-- image -->

## MAX14727 EV Kit PCB Layout Diagrams

MAX14727 EV Kit-Top Silkscreen

<!-- image -->

MAX14727 EV Kit-Top

<!-- image -->

│

## MAX14727 Evaluation Kit

## MAX14727 EV Kit PCB Layout Diagrams (continued)

MAX14727 EV Kit-Inner Layer2

<!-- image -->

MAX14727 EV Kit-Inner Layer3

<!-- image -->

│

## MAX14727 Evaluation Kit

## MAX14727 EV Kit PCB Layout Diagrams (continued)

MAX14727 EV Kit-Bottom

<!-- image -->

│

## MAX14727 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses Dre iPSOied  0D[iP ,nteJrDted reserYes tKe riJKt to cKDnJe tKe circXitr\ Dnd sSeci¿cDtions ZitKoXt notice Dt Dn\ tiPe

│

Evaluates: MAX14727/

MAX14728/MAX14731