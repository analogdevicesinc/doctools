<!-- lastmod 2022-08-03 -->
## MAX20334 Evaluation Kit

## General Description

The MAX20334 evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the MAX20334 overvoltage  and  surge-protected  dual  SPDT  data  line switch device intended for use with portable devices. The EV kit comes with the MAX20334EWC+T installed.

## Features

- 2.7V to 5.5V Operating Voltage Range
- No Power Supply Needed Testing
- Power and FLAG LED Reading
- Proven PCB Layout
- Fully Assembled and Tested

## EV Kit Contents

- EV kit board containing a MAX20334

Ordering Information appears at end of data sheet.

Evaluates: MAX20334

## Quick Start

## Required Equipment

- MAX20334 EV kit
- Computer
- A-Male to B-Male USB cable
- USB storage

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Connect a USB cable from the computer to J1. Verify LED2 is on.
- 2) Connect the USB storage to J2. Verify the computer can read the device.
- 3) Connect the USB storage to J3. Verify the computer does not see the device.
- 4) Move shunts on JU5 and JU6 from the 2-3 to the 1-2 position. Verify the computer can read the device.

## Detailed Description

The  MAX20334  EV  kit  is  a  fully  assembled  and  tested circuit  board  demonstrating  the  MAX20334  overvoltage and surge-protected dual SPDT data line switch device in a 12-bump WLP package.

## LED Indicator

The EV kit features two LED indicators. LED1 indicates the status of FLAG and LED2 indicates the presence of a power source on VPU.

<!-- image -->

## MAX20334 Evaluation Kit

## FLAG

Jumper JU1 connects FLAG to the LED1 indicator and to VPU through a 10kΩ pullup resistor. In the OVP or ther -mal  shutdown  condition, FLAG is  driven  low  and  LED1 is on.

## Enable

Use  jumper  JU2  to  control  active-low  enable  input (Table 2).

## Table 1. JU1 Jumper Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                         |
|----------|------------------|-------------------------------------------------------------------------------------|
| JU1      | Installed*       | FLAG is connected to both the LED1 indicator and VPU using a 10k Ω pullup resistor. |
| JU1      | Not Installed    | FLAG is unconnected.                                                                |

## Table 2. JU2 Jumper Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                  |
|----------|------------------|--------------------------------------------------------------|
| JU2      | Installed*       | EN is pulled low. The switches are controlled by CSAand CSB. |
| JU2      | Not installed    | EN is pulled high and all switches are open.                 |

## Table 3. JU3, JU4, JU7, JU8 Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                           |
|----------|------------------|-------------------------------------------------------------------------------------------------------|
| JU3      | 1-2*             | Connect VB1 to VBUS                                                                                   |
| JU3      | 2-3              | J3 is not powered                                                                                     |
| JU4      | 1-2*             | Connect VB2 to VBUS                                                                                   |
| JU4      | 2-3              | J2 is not powered                                                                                     |
| JU7      | Installed*       | Connect V CC to VPU                                                                                   |
| JU7      | Not Installed    | Disconnect V CC from VPU. An external voltage source can be applied to TP10 to provide power for V CC |
| JU8      | 1-2              | Connect VPU to VEXT. An external source can be applied to TP4 to provide power for VPU                |
| JU8      | 2-3*             | Connect VPU to VBUS                                                                                   |

Evaluates: MAX20334

## VCC Power, VBUS, VPU

The EV kit is powered by an external power source or a USB cable. Use TP10 when applying an external power source to V CC  or use a USB cable to power on the EV kit with shunts in the default position (Table 3).

## Digital Inputs

Use jumper JU5 and JU6 to control digital inputs CSA and CSB (Table 4).

│

## Table 4. JU5, JU6 Jumper Settings for J1, J2, J3 Data Line Path

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                       |
|----------|------------------|-------------------------------------------------------------------|
| JU5      | 1-2              | Selects P2 path for Channel A on J1-J3. CSAis pulled up to VPU    |
| JU5      | 2-3*             | Selects P1 path for Channel A on J1-J2. CSAis pulled low to GND.  |
| JU6      | 1-2              | Selects P2 path for Channel B on J1-J3. CSB is pulled up to VPU.  |
| JU6      | 2-3*             | Selects P1 path for Channel B on J1-J2. CSB is pulled low to GND. |

## Table 5. Functional Truth Table

|        | EN        | EN        | EN        | EN        | EN        |
|--------|-----------|-----------|-----------|-----------|-----------|
|        | 0         | 0         | 0         | 0         | 1         |
|        | [CSA:CSB] | [CSA:CSB] | [CSA:CSB] | [CSA:CSB] | [CSA:CSB] |
|        | 00        | 01        | 10        | 11        | D.C.      |
| COMA=  | PA1       | PA1       | PA2       | PA2       | OPEN      |
| COMB = | PB1       | PB2       | PB1       | PB2       | OPEN      |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20334EVKIT# | EV Kit |

# Denotes RoHS compliant.

Evaluates: MAX20334

│

## MAX20334 Evaluation Kit

## MAX20334 EV Kit BOM

|   ITEM | REF_DES              | DNI/DNP   |   QTY | MFG PART #                                                   | MANUFACTURER                        | VALUE                | DESCRIPTION                                                                                                                                         | COMMENTS   |
|--------|----------------------|-----------|-------|--------------------------------------------------------------|-------------------------------------|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|------------|
|      1 | C1-C3                | -         |     3 | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA      | MURATA;MURATA;TDK                   | 0.1UF                | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                                                    |            |
|      2 | C4-C6                | -         |     3 | C1210C105K5RAC                                               | KEMET                               | 1UF                  | CAPACITOR; SMT; 1210; CERAMIC; 1uF; 50V; 10%; X7R; - 55degC to + 125degC;                                                                           |            |
|      3 | J1, J5               | -         |     2 | 897-43-004-90-000000                                         | MILL-MAX                            | 897-43-004-90-000000 | CONNECTOR; FEMALE; THROUGH HOLE; USB 2.0; TYPE B; RIGHT ANGLE; 4PINS                                                                                |            |
|      4 | J2-J4                | -         |     3 | 87520-0010BLF                                                | FCI CONNECT                         | 87520-0010BLF        | CONNECTOR; FEMALE; THROUGH HOLE; USB RECEPTACLE; RIGHT ANGLE; 4PINS                                                                                 |            |
|      5 | JU1, JU2, JU7        | -         |     3 | PBC02SAAN                                                    | SULLINS ELECTRONICS CORP.           | PBC02SAAN            | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                                           |            |
|      6 | JU3-JU6, JU8         | -         |     5 | PBC03SAAN                                                    | SULLINS                             | PBC03SAAN            | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                                                                    |            |
|      7 | LED1                 | -         |     1 | SML-LX1206IW                                                 | LUMEX OPTOCOMPONENTS INC            | SML-LX1206IW         | DIODE; LED; 635NM RED LED; MILKY WHITE DIFFUSED LENS; RED; SMT (1206); VF=2V; IF=0.1A                                                               |            |
|      8 | LED2                 | -         |     1 | SML-LX1206GW-TR                                              | LUMEX OPTOCOMPONENTS INC            | SML-LX1206GW-TR      | DIODE; LED; STANDARD; GREEN; SMT (1206); PIV=2.2V; IF=0.02A; -40 DEGC TO +85 DEGC                                                                   |            |
|      9 | R1, R8               | -         |     2 | CRCW080510K0FK; MCR10EZHF1002; ERJ-6ENF1002; RC0805FR-0710KL | CRCW080510K0FK; MCR10EZHF1002; ERJ- | 10K                  | RESISTOR; 0805; 10K; 1%; 100PPM; 0.125W; THICK FILM                                                                                                 |            |
|     10 | R2, R3               | -         |     2 | CRCW08051K00FK; ERJ-6ENF1001; MCR10EZHF1001; RC0805FR-071KL  | VISHAY DALE;PANASONIC; ROHM;YAGEO   | 1K                   | RESISTOR; 0805; 1K; 1%; 100PPM; 0.125W; THICK FILM                                                                                                  |            |
|     11 | R4-R6                | -         |     3 | CRCW0805100KFK; RK73H2ATTD1003; ERJ-6ENF1003                 | VISHAY DALE;KOA SPEER; PANASONIC    | 100K                 | RESISTOR; 0805; 100K; 1%; 100PPM; 0.125W; THICK FILM                                                                                                |            |
|     12 | TP1, TP2             | -         |     2 | 5116 KEYSTONE                                                | 5116 KEYSTONE                       | N/A                  | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; GREEN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                  |            |
|     13 | TP3, TP5, TP11, TP12 | -         |     4 | 5011                                                         | KEYSTONE                            | N/A                  | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                             |            |
|     14 | TP4, TP10            | -         |     2 | 5010                                                         | KEYSTONE                            | N/A                  | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                               |            |
|     15 | TP6, TP7             | -         |     2 | 5002                                                         | KEYSTONE                            | N/A                  | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                                               |            |
|     16 | TP8, TP9             | -         |     2 | 5004                                                         | KEYSTONE                            | N/A                  | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                 |            |
|     17 | U1                   | -         |     1 | MAX20334EWC+                                                 | MAXIM                               | MAX20334EWC+         | EVKIT PART-IC; ASW; OVERVOLTAGE AND SURGE- PROTECTED; DUAL SPDT DATA LINE SWITCH; PACKAGE OUTLINE DRAWING: 21-100286; PACKAGE CODE: W121C1+1; WLP12 |            |
|     18 | U2                   | -         |     1 | NC7WZ07P6X                                                   | FAIRCHILD SEMICONDUCTOR             | NC7WZ07P6X           | IC; BUF; TINY LOGIC ULTRA-HIGH SPEED DUAL BUFFER; SC70-6                                                                                            |            |
|     19 | PCB                  | -         |     1 | MAX20334                                                     | MAXIM                               | PCB                  | PCB:MAX20334                                                                                                                                        | -          |
|     20 | MH1-MH4              | DNI       |     4 | 9032 KEYSTONE                                                | 9032 KEYSTONE                       | 9032                 | MACHINE FABRICATED; NO                                                                                                                              |            |
|     21 | LED3                 | DNP       |     0 |                                                              |                                     |                      | ROUND-THRU HOLE SPACER; THREAD; M3.5; 5/8IN; NYLON                                                                                                  |            |
|     22 | R7                   | DNP       |     0 | SML-LX1206GW-TR N/A                                          | LUMEX OPTOCOMPONENTS INC            | SML-LX1206GW-TR      | DIODE; LED; STANDARD; GREEN; SMT (1206); PIV=2.2V; IF=0.02A; -40 DEGC TO +85 DEGC                                                                   |            |
|        |                      |           |       |                                                              | N/A                                 | OPEN                 | RESISTOR; 0805; OPEN; FORMFACTOR                                                                                                                    |            |

Evaluates: MAX20334

## MAX20334 EV Kit Schematic

<!-- image -->

│

## MAX20334 EV Kit PCB Layout

MAX20334 EV Kit -Top Silkscreen

<!-- image -->

MAX20334 EV Kit -Top Layer

<!-- image -->

│

## MAX20334 EV Kit PCB Layout (continued)

MAX20334 EV Kit-Layer 2 Ground

<!-- image -->

MAX20334 EV Kit-Layer 3 Power

<!-- image -->

│

## MAX20334 EV Kit PCB Layout (continued)

MAX20334 EV Kit -Bottom Layer

<!-- image -->

MAX20334 EV Kit -Bottom Silkscreen

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are iPplieG. 0a[iP IntegrateG reserYes the right to Fhange the FirFuitr\ anG speFi¿Fations Zithout notiFe at an\ tiPe.

<!-- image -->

│

Evaluates: MAX20334