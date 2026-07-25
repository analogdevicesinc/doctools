<!-- lastmod 2022-11-22 -->
<!-- image -->

## Evaluates: MAX15106A/

MAX15106B/MAX15106C

## General Description

The MAX15106 evaluation kit (EV kit) provides a proven design to evaluate the MAX15106A/MAX15106B/ MAX15106C  high-efficiency,  6A,  step-down  regulator with  integrated  switches  in  a  20-bump  wafer-level  package  (WLP).  The  EV  kit  is  preset  for  1.5V  output  at load  currents  up  to  6A  from  a  2.7V  to  5.5V  input supply.  The  device  features  a  1MHz  fixed  switching frequency, which  allows the EV  kit to achieve an all-ceramic capacitor design and fast transient responses.

Ordering Information appears at end of data sheet.

## MAX15106 EV Kit Board Photo

<!-- image -->

©

## MAX15106 Evaluation Kit

## Features

- Operates from a 2.7V to 5.5V Input Supply
- All-Ceramic Capacitor Design
- 0.9MHz, 1MHz, 1.1MHz Switching Frequency
- Output Voltage Range
- 0.6V Up to 0.94 x V IN  (Forced PWM)
- Enable Input/Power-Good Output
- Proven PCB Layout
- Fully Assembled and Tested

## MAX15106 Evaluation Kit

## Quick Start

## Recommended Equipment

- MAX15106 EV kit
- 5V, 5A DC power supply
- Load capable of sinking 6A
- Digital voltmeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below  to  verify  the  board  operation. Caution:  Do  not turn  on  the  power  supply  until  all  connections  are completed.

- 1)  Connect the positive terminal of the 5V supply to the IN PCB pad and the negative terminal to the nearest PGND PCB pad.
- 2)  Connect  the  positive  terminal  of  the  6A  load  to  the OUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3)  Connect the digital voltmeter across the OUT PCB pad and the nearest PGND PCB pad.
- 4)  Verify that a shunt is installed on jumper JU1.
- 5)  Turn on the DC power supply.
- 6)  Enable the load.
- 7)  Verify that the voltmeter displays 1.5V.

## Detailed Description of Hardware

The  MAX15106  EV  kit  provides  a  proven  design  to evaluate  the  MAX15106  high-efficiency,  6A,  step-down regulator  with  integrated  switches.  The  applications include distributed power systems, portable devices, and preregulators. The EV kit is preset for 1.5V output at load currents up to 6A from a 2.7V to 5.5V input supply. The device features a 1MHz fixed switching frequency, which allows  the  EV  kit  to  achieve  an  all-ceramic  capacitor design and fast transient responses. A placeholder for an input  aluminum  electrolytic  capacitor  (C22)  is  provided to  damp  the  input  if  long  wires  are  used;  they  are  not required in a tight system design.

## Soft-Start (SS)

The  device  utilizes  an  adjustable  soft-start  function  to limit  inrush  current  during  startup.  The  soft-start  time  is

## Evaluates: MAX15106A/ MAX15106B/MAX15106C

adjusted by the value of C16, the external capacitor from SS to GND. By default, C16 is currently 0.033µF, which gives a soft-start time of approximately 2ms. To adjust the soft-start time, determine C16 using the following formula:

<!-- formula-not-decoded -->

where t SS is the required soft-start time in seconds and C16 is in farads.

An  external  tracking  reference  with  a  steady-state  value between 0 and V IN  - 1.5V can be applied to SS. Refer to the Programmable Soft-Start (SS) section in the MAX15106 IC data sheet for a more detailed description.

## Setting the Output Voltage

The EV kit can be adjusted from 0.6V up to 0.94 x V IN (forced PWM) by changing the values of resistors R1 and R2.  To  determine  the  value  of  the  resistor-divider,  first select R2 between 1k Ω and 20kΩ. Then use the following equation to calculate R1:

<!-- formula-not-decoded -->

where V FB is the feedback threshold voltage (V FB = 0.6V) and V OUT  is the desired output.

When  R1  is  changed,  compensation  components  C14, R3,  and  C15  must  be  changed  to  ensure  loop  stability. Refer to the Compensation Design Guidelines section in the MAX15106 IC data sheet.

## Regulator Enable (EN)

The device features a regulator enable input. For normal operation,  a  shunt  should  be  installed  on  jumper  JU1. To disable the output, remove the shunt on JU1 and the EN pin will be pulled to PGND through resistor R4. See Table 1 for JU1 settings.

## Table 1. Regulator Enable (EN) Jumper JU1 Description

| SHUNT POSITION   | EN PIN                    | DEVICE OUTPUT   |
|------------------|---------------------------|-----------------|
| Installed*       | Connected to IN           | Enabled         |
| Not installed    | Pulled to PGND through R4 | Disabled        |

*Default position.

## MAX15106 Evaluation Kit

## Component Suppliers

| SUPPLIER        | PHONE        | WEBSITE               |
|-----------------|--------------|-----------------------|
| Murata Americas | 770-436-1300 | www.muratamericas.com |
| Taiyo Yuden     | 800-348-2496 | www.t-yuden.com       |
| TDK Corp.       | 847-803-6100 | www.component.tdk.com |
| Vishay          | 402-563-6866 | www.vishay.com        |

Note: Indicate that you are using the MAX15106 when contacting these component suppliers.

## MAX15106 EV Kit Bill of Materials

|   ITEM |   QTY | REF DES       | VAR STATUS   | MAXINV              | MFG PART #                                                                                                                                 | MANUFACTURER                                                                        | VALUE    | DESCRIPTION                                                                                            |
|--------|-------|---------------|--------------|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|----------|--------------------------------------------------------------------------------------------------------|
|      1 |     3 | C1, C2, C19   | Pref         | 20-0010U-B9A        | GRM188R60J106KE47; C1608X5R0J106K080AE                                                                                                     | MURATA; TDK                                                                         | 10UF     | CAP; SMT (0603); 10UF; 10%; 6.3V; X5R; CERAMIC                                                         |
|      2 |     4 | C5, C7-C9     | Pref         | 20-0047U-B57        | C1206C476M9PAC; GRM31CR60J476ME19; C3216X5R0J476M160AC                                                                                     | KEMET; MURATA; TDK                                                                  | 47UF     | CAP; SMT (1206); 47UF; 20%; 6.3V; X5R; CERAMIC                                                         |
|      3 |     1 | C6            | Pref         | 20-2200P-91         | C0603C222K5RAC; GCM188R71H222K; CGA3E2X7R1H222K080AD; GRM39X7R222K50V; C1608X7R1H222K                                                      | KEMET; MURATA; TDK; MURATA; TDK                                                     | 2200PF   | CAP; SMT (0603); 2200PF; 10%; 50V; X7R; CERAMIC; NOTE: NOT RECOMMENDED FOR NEW DESIGN. USE 20-2200p-E5 |
|      4 |     1 | C10           | Pref         | 20-000U1-R1         | C0603C104K9RAC; GRM188R70J104KA01                                                                                                          | KEMET; MURATA                                                                       | 0.1UF    | CAP; SMT (0603); 0.1UF; 10%; 6.3V; X7R; CERAMIC; NOTE: NOT RECOMMENDED FOR NEW DESIGN. USE 20-000u1-01 |
|      5 |     1 | C14           | Pref         | 20-0100P-77         | C0603C101J5GAC; ECJ-1VC1H101J; C1608C0G1H101J080AA; GRM1885C1H101JA01; CL10C101JB81PN                                                      | KEMET; PANASONIC; TDK; MURATA; SAMSUNG                                              | 100PF    | CAP; SMT (0603); 100PF; 5%; 50V; C0G; CERAMIC                                                          |
|      6 |     1 | C15           | Pref         | 20-4700P-91         | C0603X7R500-472KNE; GRM188R71H472KA01                                                                                                      | VENKEL LTD.; MURATA                                                                 | 4700PF   | CAP; SMT (0603); 4700PF; 10%; 50V; X7R; CERAMIC                                                        |
|      7 |     1 | C16           | Pref         | 20-0U033-11         | GRM188R71C333KA01                                                                                                                          | MURATA                                                                              | 0.033UF  | CAP; SMT (0603); 0.033UF; 10%; 16V; X7R; CERAMIC                                                       |
|      8 |     1 | C20           | Pref         | 20-0001U-R1         | GRM188R70J105KA01; CL10B105KQ8NNNC                                                                                                         | MURATA; SAMSUNG ELECTRONICS                                                         | 1.0UF    | CAP; SMT (0603); 1.0UF; 10%; 6.3V; X7R; CERAMIC; NOTE: NOT RECOMMENDED FOR NEW DESIGN. USE 20-0001u-63 |
|      9 |     1 | C23           | Pref         | 20-000U1-11         | C0603C104K4RAC; GCM188R71C104KA37; C1608X7R1C104K; GRM188R71C104KA01; C0603X7R160-104KNE; VJ0603Y104KXJCW1BC; 0603YC104KAT4A; 885012206046 | KEMET; MURATA; TDK;MURATA; VENKEL LTD; VISHAY DALE; AVX; WURTH ELECTRONICS INC; TDK | 0.1UF    | CAP; SMT (0603); 0.1UF; 10%; 16V; X7R; CERAMIC; NOTE: NOT RECOMMENDED FOR NEW DESIGN. USE 20-000u1-01  |
|     10 |     3 | EN, PGOOD, SS | Pref         | 01-9020BUSS20AWG-00 | 9020 BUSS                                                                                                                                  | WEICO WIRE                                                                          | MAXIMPAD | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG               |

│

## Ordering Information

| PART            | TYPE   | SWITCHING FREQUENCY   |
|-----------------|--------|-----------------------|
| MAX15106AEVKIT# | EV Kit | 0.9MHz                |
| MAX15106BEVKIT# | EV Kit | 1.0MHz                |
| MAX15106CEVKIT# | EV Kit | 1.1MHz                |

#Denotes RoHS compliant.

## MAX15106 EV Kit Bill of Materials (continued)

|   ITEM |   QTY | REF DES   | VAR STATUS   | MAXINV            | MFG PART #                                     | MANUFACTURER                           | VALUE         | DESCRIPTION                                                                                              |
|--------|-------|-----------|--------------|-------------------|------------------------------------------------|----------------------------------------|---------------|----------------------------------------------------------------------------------------------------------|
|     11 |     1 | JU1       | Pref         | 01-PEC02SAAN2P-21 | PEC02SAAN                                      | SULLINS                                | PEC02SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                |
|     12 |     1 | L1        | Pref         | EL1324            | IHLP2525BDERR33M01                             | VISHAY                                 | 330NH         | INDUCTOR; SMT; SHIELDED; 330NH; 20%; 18A                                                                 |
|     13 |     4 | MH1-MH4   | Pref         | 02-SOM35016H-00   | 9032                                           | KEYSTONE                               | 9032          | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                |
|     14 |     1 | R1        | Pref         | 80-08K06-24       | CRCW06038K06FK; ERJ-3EKF8061                   | VISHAY DALE; PANASONIC                 | 8.06K         | RES; SMT (0603); 8.06K; 1%; +/-100PPM/DEGC; 0.1000W                                                      |
|     15 |     1 | R2        | Pref         | 80-05K36-24       | CRCW06035K36FK                                 | VISHAY DALE                            | 5.36K         | RES; SMT (0603); 5.36K; 1%; +/-100PPM/DEGK; 0.1000W                                                      |
|     16 |     1 | R3        | Pref         | 80-02K43-24       | CRCW06032K43FK; ERJ-3EKF2431                   | VISHAY DALE; PANASONIC                 | 2.43K         | RES; SMT (0603); 2.43K; 1%; +/-100PPM/DEGC; 0.1000W                                                      |
|     17 |     2 | R4, R5    | Pref         | 80-0100K-53       | ERJ-3GEYJ104; CRCW0603100KJN                   | PANASONIC; VISHAY                      | 100K          | RES; SMT (0603); 100K; 5%; +/-200PPM/DEGC; 0.1000W                                                       |
|     18 |     1 | R6        | Pref         | 80-0000R-27A      | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL | SAMSUNG ELECTRONICS; BOURNS; YAGEO PH  | 0             | RES; SMT (0603); 0; 5%; JUMPER; 0.1000W                                                                  |
|     19 |     1 | R8        | Pref         | ER0819            | LVC-LVC0805LF-1R00-F                           | TT ELECTRONICS                         | 1             | RES; SMT (0805); 1; 1%; +/-200PPM/DEGC; 0.125W                                                           |
|     20 |     1 | R9        | Pref         | 80-0001K-53       | ERJ-3GEYJ102                                   | PANASONIC                              | 1K            | RES; SMT (0603); 1K; 5%; +/-200PPM/DEGC; 0.1000W                                                         |
|     21 |     1 | SU1       | Pref         | 02-JMPFS1100B-00  | S1100-B; SX1100-B; STC02SYAN                   | KYCON;KYCON; SULLINS ELECTRONICS CORP. | SX1100-B      | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT; PHOSPHOR BRONZE CONTACT=GOLD PLATED |
|     22 |     1 | U1        | Pref         | 10-MAX15106BGWP-W | MAX15106BGWP+                                  | MAXIM                                  | MAX15106BGWP+ | IC; SWTCREG; HIGH-EFFICIENCY; 6A; CURRENT-MODE SYNCHRONOUS STEP-DOWN SWITCHING REGULATOR; WLP20          |
|     23 |     1 | PCB       | -            | EPCB15106B        | MAX15106B                                      | MAXIM                                  | PCB           | PCB:MAX15106B                                                                                            |

TOTAL

34

## MAX15106 Evaluation Kit

## MAX15106 EV Kit Schematic Diagram

<!-- image -->

## MAX15106 Evaluation Kit

## MAX15106 EV Kit PCB Layout Diagrams

MAX15106 EV Kit Component Placement GuideTop Silkscreen

<!-- image -->

MAX15106 EV Kit PCB Layout Diagram-Top View

<!-- image -->

## Evaluates: MAX15106A/ MAX15106B/MAX15106C

MAX15106 EV Kit PCB Layout Diagram-Internal 2

<!-- image -->

MAX15106 EV Kit PCB Layout Diagram-Internal 3

<!-- image -->

│

## MAX15106 Evaluation Kit

## MAX15106 EV Kit PCB Layout Diagrams

MAX15106 EV Kit PCB Layout Diagram-Bottom View

<!-- image -->

Evaluates: MAX15106A/

MAX15106 EV Kit PCB Layout Diagram-Bottom Silkscreen

<!-- image -->

│

## MAX15106 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                              | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------|-----------------|
|                 0 | 7/21            | Release for Market Intro                                 | -               |
|                 1 | 3/22            | Updated Evaluates parts to MAX15106A/MAX15106B/MAX15106C | All             |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX15106A/

MAX15106B/MAX15106C