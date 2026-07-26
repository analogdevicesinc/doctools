<!-- lastmod 2022-08-03 -->
## MAX16141 Evaluation Kit

## General Description

The MAX16141 evaluation kit (EV kit) evaluates the MAX16141/MAX16141A.  The MAX16141 is a diode  controller  and  protection  device  that  protects systems against fault conditions, such as reverse-current, overcurrent, input overvoltage/undervoltage, short-circuit, and  overtemperature.  The  MAX16141  EV  kit  comes with the MAX16141AAF/V+ IC installed. The MAX16141 EV  kit  undervoltage/overvoltage  thresholds  are  set  to 8.6V/36.2V, respectively.

## Features

- 8.6V to 36.2V Undervoltage/Overvoltage Thresholds
- Output Short-Circuit Protection
- Resistor Adjustable Overvoltage and Undervoltage Trip Threshold
- Proven 2-Layer, 2oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

## MAX16141 EV Kit Files

| FILE                   | DECRIPTION              |
|------------------------|-------------------------|
| MAX16141 EV BOM        | EV Kit Bill of Material |
| MAX16141 EV PCB Layout | EV Kit Layout           |
| MAX16141 EV Schematic  | EV Kit Schematic        |

Ordering Information appears at end of data sheet.

Evaluates: MAX16141

MAX16141A

## Quick Start

## Required Equipment

- MAX16141 EV kit
- 40V, 10A DC power supply
- One digital multimeter (DMM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution: Do not turn on power supply until all connections are completed.

- 1) Verify that shunts are installed onto their respective default positions for jumpers JU1-JU3 (Table 1, Table 2, and Table 3).
- 2) Connect the power supply between the IN and SYSGND terminal posts.
- 3) Connect the DMM between the OUT and SYSGND terminal posts.
- 4) Turn on the power supply.
- 5) Manually sweep the power supply from 8.6V to 36.2V. Verify that the output voltage at OUT approximately follows the input voltage at IN.
- 6) Increase the input voltage to 37V.
- 7) Verify that the output voltage is 0V (overvoltage protection)
- 8) Set the input voltage to 12V and verify that OUT is also about 12V.
- 9) Using an insulated shorting cable, take caution to hold the insulated parts of the shorting cable while shorting OUT to SYSGND, and verify that the output voltage is 0V (Short circuit protection).
- 10)  Remove the shorting cable between OUT and SYSGND and verify that the output voltage is 12V.
- 11)  Decrease the input voltage to 7V.
- 12)  Verify that the output voltage is approximately 0V (undervoltage protection).

<!-- image -->

## MAX16141 Evaluation Kit

## Detailed Description of Hardware

The MAX16141 EV kit evaluates the MAX16141 IC. The MAX16141/MAX16141A is a diode controller and protection device that protects systems against fault conditions such as reverse current, overcurrent, input overvoltage/ undervoltage,  short  circuit  and  over  temperature.  The MAX16141 EV kit's undervoltage and overvoltage thresholds are configured to 8.6V and 36.2V, respectively.

The MAX16141 EV kit comes with the MAX16141ATE+ (16-TQFN) installed and is configured to operate normally between  8.6V  and  36.2V.  Under  normal  operation,  the output follows the input. The output will shut down (0V) when the input is risen above 36.2V (i.e., 37V or higher), or drop below 8.6V (i.e., 7V or lower). The output will also shut down when the load at the output goes above 5A, or in an event of a short circuit at the output.

## SHDN

The MAX16141 EV kit provides a jumper (JU1) to enable or  disable  the  MAX16141/MAX16141A. See Table 1 for JU1 jumper settings.

## Sleep Input

The MAX16141 EV kit provides a jumper (JU2) to allow low-power mode operation for either the MAX16141,activelow  sleep  input,  or  the  MAX16141A,  active-high  sleep input.  To  disable  the  sleep  mode  of  operation  in  the MAX16141,  install  JU2.  To  disable  the  sleep  mode  of operation in the MAX16141A, uninstall JU2. See  Table 2 for JU2 jumper settings.

## GATE Snubber

For  applications  that  require  slower  gate  rise  time  than what is achieved using a resistor from GRC to GND, an external resistor and capacitor (snubber) network can be added from GATE to GND. However, the recommended value is 1k Ω resistor in series with a 10nF cap.

The MAX16141 EV Kit provides a jumper (JU3) to add or remove the snubber at the power MOSFET gates. Refer to Table 3 for jumper settings.

## Evaluates: MAX16141 MAX16141A

## Overvoltage Protection

The MAX16141 EV kit shuts down the output when the input  voltage  exceeds  the  upper  input  voltage  limit  set by resistors R11 and R9 between the TERM and OVSET pins of the MAX16141. Refer to the equation below to set the overvoltage limit for the MAX16141 EV kit.

<!-- formula-not-decoded -->

where,

VOV\_TH is the desired overvoltage threshold.

<!-- formula-not-decoded -->

VTH =  0.5V  (typ)  threshold for OVSET and 700Ω is the TERM switch typical resistance.

## Table 1. SHDN (JU1)

| JU1 SHUNT POSITION   | DESCRIPTION                                         |
|----------------------|-----------------------------------------------------|
| Installed*           | Enabled. SHDN = VCC (through pullup resistor R12)   |
| Not Installed        | Disabled. SHDN = SYSGND (through internal pulldown) |

## Table 2. Sleep Mode Jumper (JU2)

| JU2 SHUNT POSITION   | DESCRIPTION                                                       |
|----------------------|-------------------------------------------------------------------|
| Installed*           | Sleep Mode active for the MAX16141A and disabled for the MAX16141 |
| Not Installed        | Sleep Mode disabled for the MAX16141A and active for the MAX16141 |

## Table 3. GATE Snubber (JU3)

| JU3 SHUNT POSITION   | DESCRIPTION                      |
|----------------------|----------------------------------|
| Installed            | GATE snubber (R3 and C7) added   |
| Not Installed*       | GATE snubber (R3 and C7) removed |

Note: Larger cap values will decrease the gate fall time during reverse-voltage fault.

│

## MAX16141 Evaluation Kit

## Undervoltage Protection

The MAX16141 EV kit shuts down the output when the input voltage drops below the lower input voltage limit set by resistors R10 and R8 between the TERM and UVSET pins of the MAX16141. Refer to the equation below to set the undervoltage limit for the MAX16141 EV kit.

<!-- formula-not-decoded -->

where,

VUV\_TH is the desired undervoltage threshold. R8 = 10kΩ

VTH =  0.5V  (typ)  threshold  for  UVSET and 700Ω is the TERM switch typical resistance.

## Overcurrent Protection

The  MAX16141  EV  kit  shuts  down  the  output  when the  load  current  exceeds  the  current  limit  set  by  the OC\_THRESHOLD (refer  to  the  MAX16141  data  sheet) and the sense resistor R1 between the RS and OUT pins of the MAX16141. See below equation to set the overcurrent limit for the MAX16141 EV kit.

RSENSE = V(RS-OUT)/IOCTH

where,

RSENSE is the sense resistor between RS and OUT in Ω ,

V(RS-OUT) is the overcurrent threshold in V (refer to the IC data sheet for the proper value)

IOCTH is the desired overcurrent threshold in A.

## Component Suppliers

| SUPPLIER              | WEBSITE             |
|-----------------------|---------------------|
| Central Semiconductor | www.centralsemi.com |
| Kemet                 | www.kemet.com       |
| Murata/TOKO           | www.murata.com      |
| NXP                   | www.nxp.com         |
| ON Semiconductor      | www.onsemi.com      |
| Panasonic             | www.we-online.com   |

Note:

Indicate that you are using the MAX16141 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16141EVKIT# | EV Kit |

# Denotes RoHS

## Evaluates: MAX16141 MAX16141A

## Short-Circuit Protection

The  MAX16141  EV  kit  shuts  down  the  output  in  event the output is shorted to ground. The output will resume normal  level,  same  as  the  input,  when  the  short  at  the output is removed.

## Evaluating other ICs in the MAX16141/ MAX16141A Family

The MAX16141 EV kit comes with the MAX16141AAF/ V+  installed.  To  evaluate  other  ICs  in  the  MAX16141/ MAX16141A  IC  family,  replace  U1  with  the  desired  IC and  refer  to  the  MAX16141/MAX16141A  IC  data  sheet for additional detail.

│

## MAX16141 EV Kit Bill of Materials

|   ITEM | REF_DES                                      | DNI/DNP   |   QTY | MFG PART #                                        | MANUFACTURER               | VALUE        | DESCRIPTION                                                                                                        | COMMENTS   |
|--------|----------------------------------------------|-----------|-------|---------------------------------------------------|----------------------------|--------------|--------------------------------------------------------------------------------------------------------------------|------------|
|      1 | C1, C2                                       | -         |     2 | GRM31CR72E104KW03                                 | MURATA                     | 0.1UF        | CAPACITOR; SMT (1206); CERAMIC CHIP; 0.1UF; 250V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                        |            |
|      2 | C3                                           | -         |     1 | GRM43DR72E334KW01                                 | MURATA                     | 0.33UF       | CAPACITOR; SMT (1812); CERAMIC CHIP; 0.33UF; 250V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                       |            |
|      3 | C4                                           | -         |     1 | EEE-FK1V331GP                                     | PANASONIC                  | 330UF        | CAPACITOR; SMT (CASE_G); ALUMINUM- ELECTROLYTIC; 330UF; 35V; TOL=20%                                               |            |
|      4 | C7                                           | -         |     1 | C0805C103K1RAC; GRM21BR72A103KA01;08 055C103KAT2A | KEMET;MURATA;AVX           | 0.01UF       | CAPACITOR; SMT (0805); CERAMIC CHIP; 0.01UF; 100V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R               |            |
|      5 | C8                                           | -         |     1 | GRM1885C1H102JA01; C1608C0G1H102J080              | MURATA;TDK                 | 1000PF       | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC                                 |            |
|      6 | COM, IN_PAD, OUT_PAD, SYSGND, SYSGND_PAD_OUT | -         |     5 | MAXIMPAD                                          | N/A                        | MAXIMPAD     | EVK KIT PARTS; MAXIM PAD; NO WIRE TO BE SOLDERED ON THE MAXIMPAD                                                   |            |
|      7 | COM_TP1, COM_TP2                             | -         |     2 | 5001                                              | KEYSTONE                   | N/A          | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
|      8 | D1                                           | -         |     1 | CMPZ5245B                                         | CENTRAL SEMICONDUCTOR      | 15V          | DIODE; ZNR; SMT (SOT-23); VZ=15V; IZ=0.0085A                                                                       |            |
|      9 | D2, D3                                       | -         |     2 | CMHZ5231B                                         | CENTRAL SEMICONDUCTOR      | 5.1V         | DIODE; ZNR; SMT (SOD-123); VZ=5.1V; IZ=0.02A                                                                       |            |
|     10 | D4                                           | -         |     1 | BAV300                                            | VISHAY                     | BAV300       | DIODE; SS; SMT (MICROMELF); PIV=60V; IF=0.25A                                                                      |            |
|     11 | EN, FAULT, GATE, OVSET, SLEEP, UVSET         | -         |     6 | 5002                                              | KEYSTONE                   | N/A          | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;              |            |
|     12 | IN, OUT, SYSGND_OUT, TP1                     | -         |     4 | 108-0740-001                                      | EMERSON NETWORK POWER      | 108-0740-001 | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                           |            |
|     13 | JU1-JU3                                      | -         |     3 | PEC02SAAN                                         | SULLINS                    | PEC02SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                          |            |
|     14 | N1, N2                                       | -         |     2 | NVD6824NLT4G                                      | ON SEMICONDUCTOR           | NVD6824NLT4G | TRAN; POWER MOSFET; NCH; DPAK; PD-(90W); I-(41A); V-(100V)                                                         |            |
|     15 | R1                                           | -         |     1 | CSSH2728FT5L00                                    | STACKPOLE ELECTRONICS INC. | 0.005        | RESISTOR; 2728; 0.005 OHM; 1%; 25PPM; 4W; METAL FOIL                                                               |            |
|     16 | R2                                           | -         |     1 | CRCW121010R0FK                                    | VISHAY DALE                |              | 10 RESISTOR; 1210; 10 OHM; 1%; 100PPM; 0.5W; THICK FILM                                                            |            |
|     17 | R3                                           | -         |     1 | TNPW06031K00BE; RG1608P-102-B                     | VISHAY DALE;SUSUMU CO LTD. | 1K           | RESISTOR; 0603; 1K OHM; 0.1%; 25PPM; 0.10W; THICK FILM                                                             |            |
|     18 | R4                                           | -         |     1 | RG1608P-101-B; ERA-3YEB101V                       | SUSUMU CO LTD.;PANASONIC   |              | 100 RESISTOR; 0603; 100 OHM; 0.1%; 25PPM; 0.1W; THICK FILM                                                         |            |
|     19 | R6-R9                                        | -         |     4 | CHPHT0603K1002FGT                                 | VISHAY SFERNICE            | 10K          | RESISTOR; 0603; 10K OHM; 1%; 100PPM; 0.0125W; THICK FILM                                                           |            |
|     20 | R10                                          | -         |     1 | CRCW0603162KFK                                    | VISHAY DALE                | 162K         | RESISTOR; 0603; 162K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                             |            |

Evaluates: MAX16141

MAX16141A

## MAX16141 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES   | DNI/DNP   |   QTY | MFG PART #                        | MANUFACTURER              | VALUE          | DESCRIPTION                                                                                                                                                                                  | COMMENTS   |
|--------|-----------|-----------|-------|-----------------------------------|---------------------------|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 21     | R11       | -         |     1 | CRCW0603715KFK                    | VISHAY DALE               | 715K           | RESISTOR; 0603; 715K OHM; 1%; 100PPM; 0.10W; METAL FILM                                                                                                                                      |            |
| 22     | R12-R14   | -         |     3 | ERJ-3EKF1003                      | PANASONIC                 | 100K           | RESISTOR; 0603; 100K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                                       |            |
| 23     | R18       | -         |     1 | RC0402JR-070RL; CR0402-16W-000RJT | YAGEO PHYCOMP;VENKEL LTD. |                | 0 RESISTOR; 0402; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM                                                                                                                                      |            |
| 24     | SU1-SU3   | -         |     3 | S1100-B;SX1100-B                  | KYCON;KYCON               | SX1100-B       | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                                                                      |            |
| 25     | U1        | -         |     1 | MAX16141AAF/V+                    | MAXIM                     | MAX16141AAF/V+ | EVKIT PART - IC; CONTROLLER; IDEAL DIODE CONTROLLER WITH VOLTAGE AND CURRENT CIRCUIT BREAKER; TQFN16- EP; PACKAGE OUTLINE NO.: 21-0139; PACKAGE CODE: T1644-4; PACKAGE LAND PATTERN: 90-0070 |            |
| 26     | PCB       | -         |     1 | MAX16141                          | MAXIM                     | PCB            | PCB:MAX16141                                                                                                                                                                                 | -          |
| 27     | D5        | DNP       |     0 | CMZ5938B                          | CENTRAL SEMICONDUCTOR     | 36V            | DIODE; ZNR; SMA (DO-214AC); VZ=36V; IZ=0.0104A                                                                                                                                               |            |
| 28     | D6        | DNP       |     0 | CMZ5944B                          | CENTRAL SEMICONDUCTOR     | 62V            | DIODE; ZNR; SMA (DO-214AC); VZ=62V; IZ=0.006A                                                                                                                                                |            |
| 29     | C5, C6    | DNP       |     0 | N/A                               | N/A                       | OPEN           | PACKAGE OUTLINE 0805 NON-POLAR CAPACITOR                                                                                                                                                     |            |
| 30     | R15, R16  | DNP       |     0 | N/A                               | N/A                       | OPEN           | PACKAGE OUTLINE 0603 RESISTOR                                                                                                                                                                |            |
| TOTAL  |           |           |    51 |                                   |                           |                |                                                                                                                                                                                              |            |

## MAX16141 Evaluation Kit

## MAX16141 EV Kit Schematics

<!-- image -->

│

Evaluates: MAX16141

MAX16141A

## MAX16141 Evaluation Kit

## MAX16141 EV Kit PCB Layout Diagrams

MAX16141 EV Kit-Top Silkscreen

<!-- image -->

MAX16141 EV Kit-Top

<!-- image -->

MAX16141 EV Kit-Bottom

<!-- image -->

│

## MAX16141 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                   | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------|-----------------|
|                 0 | 8/18            | Initial release               | -               |
|                 1 | 12/19           | Added MAX16141A to data sheet | 1-8             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im ,ntegrated reserves the right to change the circuitry and specifications Zithout notice at any time.

<!-- image -->

│

Evaluates: MAX16141

MAX16141A