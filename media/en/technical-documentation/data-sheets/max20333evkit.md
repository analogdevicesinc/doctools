<!-- lastmod 2022-08-03 -->
## MAX20333 Evaluation Kit

## General Description

The MAX20333 evaluation kit (EV kit) is a fully assembled and tested circuit board that demonstrates the MAX20333 0.2A  to  4.75A  adjustable  current-limit  switch  device.  The EV kit comes with the MAX20333ENL+ installed. The EV kit board can also be used to evaluate MAX20333A/B/C/D/ E/F/G/H/I/J/K/L/M/N.

## Features

- 3.5V to 22V Operating Voltage Range (3.3V to 22V for MAX20333L/M/N)
- Output and Flag LED Reading
- Adjustable Current Limit Setting
- Adjustable Blanking Time (PBT version)
- Proven PCB Layout
- Fully Assembled and Tested

## EV Kit Contents

- EV Kit Board Containing a MAX20333ENL+

Ordering Information appears at end of data sheet.

Evaluates: MAX20333/A/B/C/D/E/F/

G/H/I/J/K/L/M/N

## Quick Start

## Required Equipment

- MAX20333 EV kit
- 9V Power Supply
- 5V Power Supply
- Multimeter
- Load Box

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Connect 5V on V IO  TP14.
- 2) Connect  9V  on  INPUT  TP5.  Use  the  voltmeter  to check that the OUT TP6 voltage is 9V.
- 3) Connect  the  load  box  to  OUT.  Increase  the  load current  and  verify  that  the  OUT  voltage  goes  down when  output  current  goes  up  to  about  1A,  and  D3 turns on (when overcurrent is in normal mode, FLAG is asserted).
- 4) Remove  the  output  load.  Cycle  the  INPUT  power, verify D3 is off, and OUT voltage is 9V.
- 5) Change JU3 to the  1-2  position.  Connect  the  load box to OUT.
- 6) Increase the load current and verify the OUT voltage goes down when output current goes up to about 2A, and D3 turns on (when overcurrent is in high current mode, FLAG is asserted).

<!-- image -->

## MAX20333 Evaluation Kit

## Detailed Description

The  MAX20333  EV  kit  is  a  fully  assembled  and  tested circuit board demonstrating the MAX20333 0.2A to 4.75A adjustable current limit switch device in a 15-bump WLP package.

## LED Indicator

The EV kit features D2 to indicate power on output and D3 to indicate FLAG is asserted.

## Current Limit Threshold

The current limit is set with the SETI resistor. Use JU1 to select the desirable current limit in normal mode (NM) or high current mode (HCM).

## Table 1. Default Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                            |
|----------|------------------|--------------------------------------------------------|
| JU1      | 1-2*             | R SETI = 2kΩ (current limit: 1A in NM, 2A in HCM)      |
| JU1      | 3-4              | R SETI = 665Ω (current limit: 3A in NM, 5.5A in HCM)   |
| JU1      | 5-6              | R SETI = 442Ω (current limit: 4.5A in NM, 5.5A in HCM) |
| JU1      | 7-8              | Variable R SETI                                        |

## Table 2. JU2, JU3 Jumper Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION    |
|----------|------------------|----------------|
| JU2      | 1-2              | EN/ EN is low  |
| JU2      | 2-3*             | EN/ EN is high |
| JU3      | 1-2              | PG is low      |
| JU3      | 2-3*             | PG is high     |

## Evaluates: MAX20333/A/B/C/D/E/F/ G/H/I/J/K/L/M/N

## Enable Pin and Mode Selection

Use jumper JU2 and JU3 to enable the device and select the mode.

## NVP or PBT Version

Use jumper JU4 to connect NVP to the gate of external pFET or connect PBT to a capacitor for adjustable blanking time.

## Table 3. Functional Truth Table

| MAX20333/A/B/C/D/E   | MAX20333/A/B/C/D/E   | MAX20333/A/B/C/D/E   |
|----------------------|----------------------|----------------------|
| EN                   | PG                   | MODE                 |
| Low                  | Low                  | Shutdown (SHDN)      |
| High                 | Low                  | High current (HCM)   |
| High                 | High                 | Normal current (NM)  |
| Low                  | High                 | Low Power (LPM)      |

| MAX20333F/G/H/I/J/K/L/M/N   | MAX20333F/G/H/I/J/K/L/M/N   | MAX20333F/G/H/I/J/K/L/M/N   |
|-----------------------------|-----------------------------|-----------------------------|
| EN                          | PG                          | MODE                        |
| High                        | Low                         | Shutdown (SHDN)             |
| Low                         | Low                         | High current (HCM)          |
| Low                         | High                        | Normal current (NM)         |
| High                        | High                        | Low Power (LPM)             |

## Table 4. JU4 Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                           |
|----------|------------------|-------------------------------------------------------|
| JU4      | 1-2*             | For PBT version. Connect PBT to C PBT                 |
| JU4      | 2-3              | For NVP version. Connect NVP to gate of external pFET |

│

## MAX20333 Evaluation Kit

## Blanking Time Setting

The  PBT  versions  have  adjustable  blanking  time.  Use JU5 to set different blanking times.

## pFET Gate

Use JU6 to have pFET Q1 stay on.

## OUT Load and LED Indicator

Use  JU7  to  add  load  capacitor  to  OUT.  Use  JU8  to connect D2 to OUT. D2 indicates there is power on OUT.

## Table 5. JU5 Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION                           |
|----------|------------------|---------------------------------------|
| JU5      | 1-2*             | C PBT = 0.33µF, blanking time = 100ms |
| JU5      | 3-4              | C PBT = 0.1µF, blanking time = 30ms   |
| JU5      | 5-6              | C PBT = 0.033µF, blanking time = 10ms |

## Evaluates: MAX20333/A/B/C/D/E/F/ G/H/I/J/K/L/M/N

## Table 6. JU6 Setting

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                  |
|----------|------------------|----------------------------------------------|
| JU6      | Installed        | Gate of Q1 is pulled to ground (pFET is on). |
| JU6      | Not installed*   | Gate of Q1 is not ground                     |

## Table 7. JU7, JU8 Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                 |
|----------|------------------|---------------------------------------------|
| JU7      | Installed        | C9 and C10 connected to OUT                 |
| JU7      | Not installed*   | C9 and C10 not connected to OUT             |
| JU8      | Installed        | D2 connected to OUT D2 not connected to OUT |
| JU8      | Not installed*   |                                             |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20333EVKIT# | EV Kit |

│

## MAX20333 EV Kit Bill of Materials

| ITEM     | REF_DES                     | DNI/DNP   |   QTY | MFG PART #                                                                                | MANUFACTURER                              | VALUE         | DESCRIPTION                                                                                                                                   | COMMENTS                            |
|----------|-----------------------------|-----------|-------|-------------------------------------------------------------------------------------------|-------------------------------------------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| 1        | C1                          | -         |     1 | GMK107B7104KAH                                                                            | TAIYO YUDEN                               | 0.1µF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1µF; 35V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                                    |                                     |
| 2        | C2                          | -         |     1 | CGA4J1X7R1V155M125AC                                                                      | TDK                                       | 1.5µF         | CAP; SMT (0805); 1.5µF; 20%; 35V; X7R; CERAMIC CHIP                                                                                           |                                     |
| 3        | C3                          | -         |     1 | C0603C334K4RAC                                                                            | KEMET                                     | 0.33µUF       | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.33µF; 16V; TOL = 10%; MODEL =; TG = -55°C TO +125°C; TC = X7R                                          |                                     |
| 4        | C4                          | -         |     1 | C0603C105K4RAC; GRM188R71C105KA12; C1608X7R1C105K080AC; EMK107B7105KA; GCM188R71C105KA64; | KEMET;MURATA;TDK; TAIYO YUDEN; MURATA;TDK | 1µF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 1µF; 16V; TOL = 10%; MODEL =; TG = -55°C TO +125°C; TC = X7R                                             |                                     |
| 5        | C6                          | -         |     1 | VJ0603Y104JXQCW1BC                                                                        | VISHAY                                    | 0.1µF         | CAP; SMT (0603); 0.1µF; 5%; 10V; X7R; CERAMIC CHIP                                                                                            |                                     |
| 6        | C7                          | -         |     1 | C0603C333K8RAC                                                                            | KEMET                                     | 0.033µF       | CAP; SMT (0603); 0.033µF; 10%; 10V; X7R; CERAMIC CHIP                                                                                         |                                     |
| 7        | C8                          | -         |     1 | C1608X7R1V105K080AC; CGA3E1X7R1V105K080AC                                                 | TDK;TDK                                   | 1µF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 1µF; 35V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                                      |                                     |
| 8        | C9                          | -         |     1 | EEU-EB1H331                                                                               | PANASONIC                                 | 330µF         | CAPACITOR; THROUGH HOLE-RADIAL LEAD; ALUMINUM-ELECTROLYTIC; 330µF; 50V; TOL = 20%; MODEL = EB SERIES; TG = -40°C TO +105°C                    |                                     |
| 9        | D2                          | -         |     1 | LTST-C150KGKT                                                                             | LITE-ON ELECTRONICS INC.                  | LTST-C150KGKT | DIODE; LED; STANDARD; GREEN; SMT (1206); PIV = 2V; IF = 0.02A; -55°C TO +85°C                                                                 |                                     |
| 10       | D3                          | -         |     1 | LTST-C150KRKT                                                                             | LITE-ON ELECTRONICS INC.                  | LTST-C150KRKT | DIODE; LED; STANDARD; RED; SMT (1206); PIV = 2V; IF = 0.02A; -30°C TO +85°C                                                                   |                                     |
| 11       | JU1                         | -         |     1 | PEC04DAAN                                                                                 | SULLINS ELECTRONICS CORP.                 | PEC04DAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 8PINS                                                                                     |                                     |
| 12       | JU2-JU4                     | -         |     3 | PEC03SAAN                                                                                 | SULLINS                                   | PEC03SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                     |                                     |
| 13       | JU5                         | -         |     1 | PEC03DAAN                                                                                 | SULLINS ELECTRONICS CORP.                 | PEC03DAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 6PINS; -65°C TO +125°C                                                            |                                     |
| 14       | JU6-JU8                     | -         |     3 | PEC02SAAN                                                                                 | SULLINS                                   | PEC02SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                                     |                                     |
| 15       | MH1-MH4                     | -         |     4 | 9032                                                                                      | KEYSTONE                                  | 9032          | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                     |                                     |
| 16       | Q1                          | -         |     1 | CXDM4060P                                                                                 | CENTRAL SEMICONDUCTOR                     | CXDM4060P     | TRAN; PCH; ENHANCEMENT-MODE MOSFET; SOT-89; PD-(1.2W); I-(-6A); V-(-40V)                                                                      |                                     |
| 17       | R1, R2, R4                  | -         |     3 | CRCW060310K0FK;                                                                           | VISHAY DALE;                              | 10K           | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                                            |                                     |
| 18       | R3, R11                     | -         |     2 | ERJ-3EKF1002 ERJ-3GEYJ102                                                                 | PANASONIC PANASONIC                       | 1K            | RESISTOR; 0603; 1K Ω ; 5%; 200PPM; 0.10W; THICK FILM                                                                                          |                                     |
| 19       | R7                          | -         |     1 | CRCW08052K00FK                                                                            | VISHAY DALE                               | 2K            | RESISTOR; 0805; 2K; 1%; 100PPM; 0.125W; THICK FILM                                                                                            |                                     |
| 20       | R8                          | -         |     1 | CRCW0805665RFK                                                                            | VISHAY DALE                               | 665           | RESISTOR; 0805; 665Ω; 1%; 100PPM; 0.125W; THICK FILM                                                                                          |                                     |
| 21       | R9                          | -         |     1 | CRCW0805442RFK                                                                            | VISHAY DALE                               | 442           | RESISTOR; 0805; 442Ω; 1%; 100PPM; 0.125W; THICK FILM                                                                                          |                                     |
| 22       | R10                         | -         |     1 | PV37W103C01B00                                                                            | BOURNS                                    | 10K           | RES; THROUGH HOLE-RADIAL LEAD; 10K; 10%; ± 150PPM/°C; 0.25W                                                                                   |                                     |
| 23       | TB1-TB3                     | -         |     3 | 398800302                                                                                 | MOLEX                                     | 398800302     | CONNECTOR; FEMALE; THROUGH HOLE; 5.08/.200 EUROSTYLE LOW; SINGLE ROW FIXED BLOCK; RIGHT ANGLE; 2PINS                                          |                                     |
| 24       | TP5, TP7, TP6, TP8          | -         |     4 | 5000                                                                                      | KEYSTONE                                  | N/A           | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                        | (TP5,TP7:INPUT) (TP6,TP8:OUTPUT)    |
| 25       | TP9, TP10, TP11, TP12, TP13 | -         |     5 | 5002                                                                                      | KEYSTONE                                  | N/A           | TESTPOINT; PINDIA = 0.1IN;TOTAL LENGTH = 0.3IN; BOARDHOLE = 0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER; NOT FOR COLD TEST                     | (TP9:FLAGB) (TP10:EN/ENB) (TP13:PG) |
| 26       | TP14-TP16                   | -         |     3 | 5003                                                                                      | KEYSTONE                                  | N/A           | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                     |                                     |
| 27       | TP1-TP4, TP17, TP18         | -         |     6 | 5001                                                                                      | KEYSTONE                                  | N/A           | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                      | (TP1-TP4:GND)                       |
| 28       | U1                          | -         |     1 | MAX20333ENL+                                                                              | MAXIM                                     | MAX20333ENL+  | EVKIT PART - IC; MAX20333ENL+; ADJUSTABLE CURRENT LIMIT SWITCH WITH LOW POWER MODE; PACKAGE OUTLINE: 21-100295; PACKAGE CODE: N151A2+1; WLP15 |                                     |
| 29       | PCB                         | -         |     1 | MAX20333                                                                                  | MAXIM                                     | PCB           | PCB:MAX20333                                                                                                                                  | -                                   |
| 30       | C10                         | DNP       |     0 | EEU-EB1H331                                                                               | PANASONIC                                 | 330UF         | CAPACITOR; THROUGH HOLE-RADIAL LEAD; ALUMINUM-ELECTROLYTIC; 330µF; 50V; TOL = 20%; MODEL = EB SERIES; TG = -40°C TO +105°C                    | OPEN                                |
| 31 TOTAL | D1                          | DNP       |     0 | B530C-13-F                                                                                | DIODES INCORPORATED                       | B530C-13-F    | DIODE; SCH; SMC; PIV = 30V; IF = 5A                                                                                                           |                                     |

55

## MAX20333 EV Kit Schematic

<!-- image -->

## MAX20333 EV Kit PCB Layout Diagrams

MAX20333 EV PCB Layout-Top Silkscreen

<!-- image -->

│

## MAX20333 EV Kit PCB Layout Diagrams (continued)

MAX20333 EV PCB Layout-Top Layer

<!-- image -->

│

## MAX20333 EV Kit PCB Layout Diagrams (continued)

MAX20333 EV PCB Layout-Layer 2

<!-- image -->

│

## MAX20333 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX20333 EV PCB Layout-Layer 3

│

## MAX20333 EV Kit PCB Layout Diagrams (continued)

MAX20333 EV PCB Layout-Bottom Layer

<!-- image -->

│

## MAX20333 EV Kit PCB Layout Diagrams (continued)

MAX20333 EV PCB Layout-Bottom Silkscreen

<!-- image -->

│

## MAX20333 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                     | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------|-----------------|
|                 0 | 7/19            | Initial release                                 | -               |
|                 1 | 2/21            | Update the title, Features section, and Table 3 | 1-12            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are imSlied. 0a[im ,ntegrated reserves tKe rigKt to cKange tKe circuitry and sSeci¿cations ZitKout notice at any time.

│

Evaluates: MAX20333/A/B/C/D/E/F/