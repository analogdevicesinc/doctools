<!-- lastmod 2024-04-03 -->
<!-- image -->

## Evaluates: MAX22910

## General Description

The MAX22910 evaluation kit (EV kit) provides a proven design to evaluate the MAX22910, a 21m Ω single-channel high-side switch with advanced diagnostics for industrial applications. The EV kit is powered from an external power supply at V DD , while the on-board LT3014 LDO generates a 3.3V for the logic input level of the MAX22910. The logic level  can  be  set  with  an  external  power  supply  at  V L , alternatively. The EV kit is preinstalled with ADuM342E0, a  four-channel  digital  isolator  with  default-low  output.  It provides digital isolation between the field and logic sides for logic control I/Os.

The  MAX22910  EV  kit  comes  with  an  output  clamping diode installed to protect the device from negative kickback voltage during switching off the inductive loads. The EV kit is  specified  for  EMC  protection  against  surge  and  ESD transients, EFT, and RF conducted immunity.

The  MAX22910  EV  kit  comes  with  MAX22910AFZ+ installed in  a  compact  4.5mm  x  5.75mm  FC2QFN package. The EV kit is specified for operation with up to +60V supply voltage at V DD   and  from  -40°C  to  +125°C operating temperature range.

## MAX22910 EV Kit Photo

<!-- image -->

319-101035; Rev 0; 11/23

## Features

- Robust Operation with Wide Range of Input Voltage up to +80V (max) and Load Current up to 9A (max)
- Safe Inductive Load Switching with Output Clamping
- Optional V DD -reference Output Clamping Diode
- Wire-Break and Overload Fault LED Indications
- On-Board Isolation between Logic and Field Sides
- On-Board 3.3V LDO to Supply Logic Input
- ±2kV  Surge  Transients,  ±8kV  Contact,  and  ±15kV Airgap ESD Protection
- ±4kV  EFT  Burst  and  10V RMS ,  10kHz  to  80MHz  RF Conducted Immunity
- -40°C to +125°C Operating Temperature Range
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX22910 Evaluation Kit

## Evaluates: MAX22910

## Quick Start

## Required Equipment

- MAX22910 EV kit
- +24V DC power supply
- Electronic load
- Optional +3.3V DC power supply
- Optional signal generator

## Procedure

The  MAX22910  EV  kit  is  fully  assembled  and  tested. Follow the steps below to verify the operation:

1.  Examine the EV kit and verify that all jumpers are in their default positions, as shown in Table 1 .
2.  Connect  the  +24V  supply  to  the  V DD   banana  plug; connect the ground return to the GND banana plug.
3.  Turn on the power supply.
4.  Verify the voltage at the V L  test point is +3.3V and the voltage at the V18 test point (TP21) is +1.8V.

## MAX22910 Evaluation Kit

6.  Connect a load between the OUT banana plug and the GND banana plug. Verify the WB test  point  is  +3.3V and DS2 is off due to the removal of wire broken.
7. Move  the  shunt  at  J5  to  the  2-3  position.  Move  the shunt at J2 to the 1-2 position to turn on the switch.
8.  Verify the OUT voltage is at +24V.
9.  Verify  the  load  current  and  that  the  IMON  output voltage reflects the amount of output load current using the equation in the MAX22910 data sheet.

(Optional) Test the on-board digital isolator:

10.  Connect  the  +3.3V  DC  power  supply  to  V\_ISO  test point and turn on the power supply.
11.  Move  the  shunts  at  J4  and  J6  to  the  1-2  position  to enable the isolator outputs. Remove the shunts at J2 and J5.
12.  Use IN\_ISO (TP22) and WBREQ\_ISO (TP23) to drive the MAX22910. Use /WB\_ISO (TP24) and /OVL\_ISO (TP25) to monitor the device diagnostics.
5.  Move the shunt at J5 to the 1-2 position to turn on the wire-break detection. Verify the WB test point is GND and DS2, and the red LED is on due to wire broken.

## Table 1. MAX22910 EV Kit Shunt Positions

| JUMPER   | SHUNT CONNECTION   | DESCRIPTION                                                                               |
|----------|--------------------|-------------------------------------------------------------------------------------------|
| J1       | 1-2*               | Connect DIAGEN to V L . Enable the OVL , WB , and IMON outputs.                           |
|          | 2-3                | Connect DIAGEN to GND. Disable the OVL , WB , and IMON outputs and set to high-impedance. |
| J2       | 1-2                | Connect IN to V L . Turn on the switch output.                                            |
|          | 2-3*               | Connect IN to GND. Turn off the switch output.                                            |
| J3       | 1-2*               | Connect LDO SHDN to V DD . Enable the 3.3V LDO output.                                    |
|          | 2-3                | Connect LDO SHDN to GND. Disable the 3.3V LDO output.                                     |
| J4       | 1-2                | Connect V E1 to V DD1 . Enable the isolator outputs on the V DD1 side.                    |
|          | 2-3*               | Connect V E1 to GND. Disable the isolator outputs on the V DD1 side.                      |
| J5       | 1-2                | Connect WBREQ to V L . Enable the wire-break detection.                                   |
|          | 2-3*               | Connect WBREQ to GND. Disable the wire-break detection.                                   |
| J6       | 1-2                | Connect V E2 to V DD2 . Enable the isolator outputs on the V DD2 side.                    |
|          | 2-3*               | Connect V E2 to GND. Disable the isolator outputs on the V DD2 side.                      |

## Evaluates: MAX22910

## Detailed Description of Hardware

The MAX22910 EV kit provides an easy-to-use solution for evaluating MAX22910, a 21m Ω sing le-channel high-side switch with advanced diagnostics for industrial applications. The EV kit is installed with an on-board LT3014 LDO to supply the logic levels and an ADuM342E0 isolator to enable users to evaluate MAX22910 with isolated inputs and outputs.

The MAX22910 EV kit is preinstalled with EMC-protection components and is specified for surge (level 3) and ESD (level 4) protection, EFT (level 4), and RF conducted (level 4) immunity. The EV kit also comes preinstalled with an output clamping diode to protect the MAX22910 against the negative kickback voltage during switching-off large inductive loads.

The MAX22910 EV kit is specified for operation with up to +60V voltage input at V DD  and from -40ºC to +125ºC operating temperature range.

## Power Supply

The EV kit can be powered by an external DC power supply with up to 60V at V DD . Connect the supply and ground return to the banana plugs on the board to support a large output current.

The TVS diode connected between V DD  and GND for EMC protection has a reverse standoff voltage of +58V. Remove the  TVS diode to operate MAX22910 with a supply voltage higher than 60V. The MAX22910 EV kit is specified for operation with up to +80V (max) supply voltage at V DD  if OUT does not go below GND.

## Logic Supply

An LT3014 LDO is installed on the EV kit to provide 3.3V logic input for MAX22910. Place a shunt at 1-2 position at J3 to enable the 3.3V LDO output.

Alternatively, a 1.6V to 5.5V logic level can be supplied at the V L  test point from an external DC supply. Place a shunt at 2-3 position at J3 to disable the LDO output and connect the external supply to V L .

V18 is the internal LDO output at 1.8V (typ). It is used for internal biasing and cannot be used to supply external circuits.

## Output Switch Control

Place a shunt at 1-2 position at J2 to close the switch. Place at 2-3 position to open the switch. Alternatively, use the IN test point (TP6) to control the switch. When doing so, remove the shunt at J2.

## Diagnostic Enable

Place a shunt at 1-2 position at J1 to enable the diagnostic outputs at OVL , WB , and IMON. Place at 2-3 position to set them to high impedance.

## Current Limit

The MAX22910 EV kit is preinstalled with a 3.3k Ω resistor at the CURLIM input, and the output current limit is set to 4.4A. During current limiting, the voltage at CURLIM is regulated at 0.7V (typ).

## Wire-Break Detection

The MAX22910 EV kit is preinstalled with a 35.7k Ω resistor at the WBSET input, and the wire-break threshold is set to 5mA. Place a shunt at 1-2 position at J5 to enable wire-break detection. Place at 2-3 position to disable it. Alternatively, use the WBREQ test point (TP7) to drive pulses at the WBREQ input. When doing so, remove the shunt at J5.

## Current Monitor

The MAX22910 EV kit is preinstalled with a 4.7k Ω resistor at IMON current output. Set DIAGEN high, and measure the IMON voltage at the IMON test point (TP4), and refer to the IMON Current Monitor section in the data sheet for calculating the load current.

## Overload and Wire-Break Faults

When the MAX22910 is in a fault condition such as overtemperature or wire-break, the OVL or WB diagnostic output is pulled to GND if the DIAGEN is set high. There are two red LEDs on-board to indicate these fault conditions.

## MAX22910 Evaluation Kit

## Evaluates: MAX22910

## Digital Isolation

The MAX22910 EV kit comes with an ADuM342E0BRWZ digital isolator between field and logic sides, providing isolation for four digital logic I/Os:

- OVL : the overload fault output;
- WB : the wire-break fault output;
- IN: the switch control input;
- WBREQ: the wire-break request input.

The field-side (V E1 ) of the isolator is powered by the same voltage powering the MAX22910 logic input. Use the on-board 3.3V LT3014 LDO output or connect an external supply at the V L  test point to power the field side. The logic-side (V E2 ) of the isolator is supplied by the voltage at the V\_ISO test point. Connect a voltage supply from 2.25V to 5.5V to power the logic side. Place the shunts at 1-2 position at J4 and J6 to enable the isolator outputs. When doing so, remove the shunts  at  J2  and  J5  and  use  IN\_ISO  (TP22)  and  WBREQ\_ISO  (TP24)  test  points  on  the  logic  side  to  control  the MAX22910.

Place the shunts at 2-3 position at J4 and J6 to disable the isolator output when it is not used.

The MAX22910 EV kit has a PE (Protective Earth) connection and two 1000pF Y-rated safety capacitors between the PE and the field-side GND.

## Switching Inductive Loads

The MAX22910 EV kit is preinstalled with a GND-referenced TVS diode, SM15T22A, to clamp the negative kickback voltage during switching-off inductive loads. There is an available footprint between V DD  and GND for an SMD diode for optional V DD -referenced clamping. Select a TVS diode that limits the (V DD -OUT) voltage to less than +85V (max).

Refer to the Inductive Load Switching section in the data sheet for more information.

## EMC Protection

The MAX22910 EV kit provides robust EMC transient protection against the following specifications:

- ±2kV, surge transients (IEC 61000-4-5) protection at V DD  and OUT.
- ±8kV, contact and ±15kV airgap ESD (IEC 61000-4-2) protection at V DD  and OUT.
- ±4kV, 5kHz and 100kHz EFT (IEC 61000-4-4) Immunity at WB and OUT.
- 10VRMS, 10kHz to 80MHz, Conducted RF (IEC 61000-4-6) Immunity at WB and OUT.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX22910EVKIT# | EV kit |

#Denotes RoHS Compliance.

## MAX22910 Evaluation Kit

Evaluates: MAX22910

## MAX22910 EV Kit Bill of Materials

|   ITEM | REF_DES      | DNP   |   QTY | MFG PART #                                                                           | MANUFACTURER                          | VALUE               | DESCRIPTION                                                                        |
|--------|--------------|-------|-------|--------------------------------------------------------------------------------------|---------------------------------------|---------------------|------------------------------------------------------------------------------------|
|      1 | C1, C4, C7   | -     |     3 | C2012X7S2A105K 125AB;GRJ21BC7 2A105KE11;GRM2 1BC72A105KE01                           | TDK;MURATA;MU RATA                    | 1µF                 | CAP; SMT (0805); 1µF; 10%; 100V; X7S; CERAMIC                                      |
|      2 | C3           | -     |     1 | GRM188R71A225 KE15;CL10B225KP 8NNN;C1608X7R1 A225K080AC;C060 3C225K8RAC              | MURATA;SAMSUN G;TDK;KEMET             | 2.2µF               | CAP; SMT (0603); 2.2µF; 10%; 10V; X7R; CERAMIC                                     |
|      3 | C5, C10, C11 | -     |     3 | CC0603KRX7R0B B104;GRM188R72 A104KA35;HMK10 7B7104KA;06031C 104KAT2A;GRM18 8R72A104K | YAGEO;MURATA; TAIYO YUDEN;AVX;MUR ATA | 0.1µF               | CAP; SMT (0603); 0.1µF; 10%; 100V; X7R; CERAMIC                                    |
|      4 | C6           | -     |     1 | C0805C103K1RAC ;GRM21BR72A103 KA01;08055C103K AT2A                                   | KEMET;MURATA; AVX                     | 0.01µF              | CAP; SMT (0805); 0.01µF; 10%; 100V; X7R; CERAMIC                                   |
|      5 | C8, C9       | -     |     2 | VJ2220A102KXUS TX1                                                                   | VISHAY VITRAMON                       | 1000P F             | CAP; SMT (2220); 1000PF; 10%; 250V; C0G; CERAMIC                                   |
|      6 | D2, D4       | -     |     2 | 5.0SMDJ58A                                                                           | BOURNS                                | 58V                 | DIODE; TVS; SMC (DO-214AB); VRM = 58V; IPP = 53.5A                                 |
|      7 | D3           | -     |     1 | SM30T15AY                                                                            | ST MICROELECTRON ICS                  | 15V                 | DIODE; TVS; SMC (DO-214AB); VRM = 15V; IPP = 140A                                  |
|      8 | DS1, DS2     | -     |     2 | LTST-C193KRKT- 5A                                                                    | LITE-ON ELECTRONICS INC               | LTST- C193K RKT- 5A | DIODE; LED; WATER CLEAR; RED; SMT; VF = 2V; IF = 0.005A                            |
|      9 | J1-J6        | -     |     6 | PCC03SAAN                                                                            | SULLINS                               | PCC03 SAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65°C TO +125°C |
|     10 | R1, R2       | -     |     2 | ERJ-3GEYJ102                                                                         | PANASONIC                             | 1K                  | RES; SMT (0603); 1K; 5%; ±200PPM/°C; 0.1000W                                       |
|     11 | R3           | -     |     1 | CPF-A-0603B4K7E                                                                      | TE CONNECTIVITY                       | 4.7K                | RES; SMT (0603); 4.7K; 0.10%; ±25PPM/°C; 0.0630W                                   |
|     12 | R4           | -     |     1 | ERJ-3EKF3572                                                                         | PANASONIC                             | 35.7K               | RES; SMT (0603); 35.7K; 1%; ±100PPM/°C; 0.1000W                                    |
|     13 | R5           | -     |     1 | RCW06033K30FK; RC0603FR- 073K3L;RK73H1J3 301F                                        | VISHAY;YAGEO;VI SHAY                  | 3.3K                | RES; SMT (0603); 3.3K; 1%; ±100PPM/°C; 0.1000W                                     |
|     14 | R6           | -     |     1 | ERJ-3EKF1304                                                                         | PANASONIC                             | 1.3M                | RES; SMT (0603); 1.3M; 1%; ±100PPM/°C; 0.1000W                                     |
|     15 | R7           | -     |     1 | CRCW06032M20F K                                                                      | VISHAY DALE                           | 2.2M                | RES; SMT (0603); 2.2M; 1%; ±100PPM/°C; 0.1000W                                     |
|     16 | R8, R9       | -     |     2 | CRCW060320K0J N                                                                      | VISHAY DALE                           | 20K                 | RES; SMT (0603); 20K; 5%; ±200PPM/°K; 0.1000W                                      |

## MAX22910 Evaluation Kit

## Evaluates: MAX22910

## MAX22910 Evaluation Kit

|   17 | SPACER1- SPACER4          | -   |   4 | 9032                        | KEYSTONE                               | 9032            | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                        |
|------|---------------------------|-----|-----|-----------------------------|----------------------------------------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|   18 | SU1-SU6                   | -   |   6 | S1100-B;SX1100- B;STC02SYAN | KYCON;KYCON;S ULLINS ELECTRONICS CORP. | SX110 0-B       | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.24IN; BLACK; INSULATION = PBT; PHOSPHOR BRONZE CONTACT = GOLD PLATED                                                   |
|   19 | TP1-TP5, TP24, TP25       | -   |   7 | 5008                        | KEYSTONE                               | N/A             | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.35IN; BOARD HOLE = 0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                    |
|   20 | TP6-TP8, TP22, TP23, TP29 | -   |   6 | 5007                        | KEYSTONE                               | N/A             | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.35IN; BOARD HOLE = 0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                     |
|   21 | TP9-TP14, TP26- TP28      | -   |   9 | 5006                        | KEYSTONE                               | N/A             | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.35IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                     |
|   22 | TP15, TP16, TP21          | -   |   3 | 5005                        | KEYSTONE                               | N/A             | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.35IN; BOARD HOLE = 0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                       |
|   23 | TP17- TP20                | -   |   4 | 6095                        | KEYSTONE                               | 6095            | CONNECTOR; FEMALE; PANELMOUNT; NON- INSULATED RECESSED HEAD BANANA JACK; STRAIGHT THROUGH; 1PIN                                                                  |
|   24 | U1                        | -   |   1 | MAX22910                    | ANALOG DEVICES                         | MAX22 910       | EVKIT PART - IC; 20 MILLI-OHM HIGH-SIDE SWITCH FOR APPLICATIONS UP TO 80V; PACKAGE OUTLINE DRAWING NUMBER: 21-100606; LAND PATTERN NUMBER: 90-100213             |
|   25 | U2                        | -   |   1 | LT3014HVES5                 | LINEAR TECHNOLOGY                      | LT3014 HVES5    | IC, LINEAR REGULATOR, 20mA OUTPUT CURRENT, 1.22V TO 60V ADJUSTABLE OUTPUT, OPERATES FROM 3V TO 80V INPUT VOLTAGE RANGE, VIN(MAX) = ±80V, SOT-23, -40°C TO +125°C |
|   26 | U3                        | -   |   1 | ADUM342E0BRWZ               | ANALOG DEVICES                         | ADUM 342E0 BRWZ | IC; ISO; 5.7 KV RMS QUAD DIGITAL ISOLATORS; WSOIC16                                                                                                              |
|   27 | PCB                       | -   |   1 | MAX22910                    | MAXIM                                  | PCB             | PCB:MAX22910                                                                                                                                                     |
|   28 | D1                        | DNP |   0 | 5.0SMDJ58A                  | BOURNS                                 | 58V             | DIODE; TVS; SMC (DO-214AB); VRM = 58V; IPP = 53.5A                                                                                                               |
|   29 | R10                       | DNP |   0 | CRCW25120000Z0 EGHP         | VISHAY DRALORIC                        | 0               | RES; SMT (2512); 0; JUMPER; JUMPER; 1.5000W                                                                                                                      |

## Evaluates: MAX22910

## MAX22910 EV Kit Schematic

<!-- image -->

## MAX22910 Evaluation Kit

## Evaluates: MAX22910

## MAX22910 EV Kit PCB Layouts

MAX22910 EV Kit PCB Layout -Top Silkscreen

<!-- image -->

MAX22910 EV Kit PCB Layout -Top

<!-- image -->

## MAX22910 Evaluation Kit

MAX22910 EV Kit PCB Layout -Layer 2

<!-- image -->

MAX22910 EV Kit PCB Layout -Layer 3

<!-- image -->

## Evaluates: MAX22910

## MAX22910 EV Kit PCB Layouts

MAX22910 EV Kit PCB Layout -Bottom

<!-- image -->

## MAX22910 Evaluation Kit

MAX22910 EV Kit PCB Layout -Bottom Silkscreen

<!-- image -->

## Evaluates: MAX22910

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/23           | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## MAX22910 Evaluation Kit