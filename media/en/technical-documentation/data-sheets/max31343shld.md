<!-- lastmod 2022-08-03 -->
## MAX31343 Shield

## General Description

The  MAX31343  shield  is  a  fully  assembled  and  tested PCB  to  evaluate  the  MAX31343,  low-cost,  extremely accurate,  real-time  clock  (RTC)  with  an  I 2 C  interface and  power  management.  The  shield  operates  from  a single supply, either from a USB or external power supply,  and  the  integrated  microelectromechanical  systems (MEMS) resonator enhances the long-term accuracy and eliminates the external crystal requirement in the system. This  device  is  accessed  through  an  I 2 C  serial  interface provided by a MAX32625 PICO board.

The  MAX31343 shield  provides  the  hardware  and  software  user  interface  (GUI)  necessary  to  evaluate  the MAX31343. The  shield  includes  a  MAX31343EKA+T.  It connects to the PC through a MAX32625 PICO board and a Micro USB cable.

## Features

- Easy Evaluation of the MAX31343
- +1.6V to +5.5V Single-Supply Operation
- Proven PCB Layout
- Fully Assembled and Tested
- Arduino ® /Mbed ®  Platform Compatible

## Shield Photo

<!-- image -->

Arduino is a registered trademark of Arduino, LLC. Mbed is a registered trademark of Arm Limited. Windows is a registered trademark of Microsoft Corporation.

## Shield Contents

- Assembled MAX32625 PICO controller board
- Micro USB cable
- Assembled circuit board including MAX31343EKA+T

## Quick Start

## Required Equipment

- One pico ammeter for measuring the current
- One oscilloscope and one oscilloscope probe
- One PC or laptop with Microsoft Windows ®  7 or later
- One USB A male to Micro-B male cable
- One assembled and programmed MAX32625 PICO board
- One MAX31343 shield

Ordering Information appears at end of data sheet.

## PICO Board Photo

<!-- image -->

<!-- image -->

Evaluates: MAX31343

## MAX31343 Shield

## Procedure

The shield is fully assembled and tested. Use the following steps to verify board operation.

- 1) Place the MAX31343 shield on a nonconductive surface to ensure that nothing on the PCB gets shorted to the workspace.
- 2) Verify that all jumpers are in their default position as shown in Table 1.
- 3) Connect the MAX32625 PICO board to the shield at the location shown as MAX32625 PICO (Figure 1).
- 4) Connect the USB Type A male to Micro-B male cable between the MAX32625 PICO board and PC/laptop.
- 5) Go to the MAX31343 shield product page to download and install the latest version of the MAX31343 RTC SHIELD Software.
- 6) Open the MAX31343 RTC SHIELD Software, shown in Figure 2.

## Table 1. Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                       |
|----------|------------------|-------------------------------------------------------------------|
| JU1      | 1-2*             | Connects clock output to pin 6 of P2 Arduino/Mbed connector       |
| JU1      | Open             | Disconnects clock output from Arduino/Mbed connector              |
| JU2      | 1-2              | Connects backup supply to external DC supply                      |
| JU2      | 1-3              | Connects backup supply to supercapacitor                          |
| JU2      | 1-4*             | Connects backup supply to ground                                  |
| JU2      | Open             | Disconnects backup supply                                         |
| JU3      | 1-2*             | Connects interrupt signal to pin 3 of P2 Arduino/Mbed connector   |
| JU3      | Open             | Disconnects interrupt signal from Arduino/Mbed connector          |
| JU4      | 1-2              | Connects VCC supply to +1.8V on-board supply                      |
| JU4      | 1-3*             | Connects VCC supply to +3.3V on-board supply                      |
| JU4      | 1-4              | Connects VCC supply to +5.0V on-board supply                      |
| JU4      | 1-5              | Connects VCC supply to external DC supply                         |
| JU4      | Open             | Disconnects VCC                                                   |
| JU5      | 1-2*             | Connects VCC to MAX31343 IC WLP package (U1)                      |
| JU5      | Open             | Disconnects VCC from MAX31343 IC WLP package (U1)                 |
| JU8      | 1-2*             | Connects square-wave output to pin 4 of P2 Arduino/Mbed connector |
| JU8      | Open             | Disconnects square-wave output from Arduino/Mbed connector        |
| JU10     | 1-2*             | Sets MAX31343 WLP package (U1) IC under test                      |
| JU10     | 2-3              | Sets MAX31343 TDFN package (U2) IC under test                     |
| JU11     | 1-2*             | Connects VCC to MAX31343 IC TDFN package (U2)                     |
| JU11     | Open             | Disconnects VCC from MX31343 IC TDFN package (U2)                 |
| JU12     | 1-2*             | Connects VBAT to MAX31343 IC WLP package (U1)                     |
| JU12     | Open             | Disconnects VBAT from MAX31343 IC WLP package (U1)                |
| JU13     | 1-2*             | Connects VBAT to MAX31343 IC TDFN package (U2)                    |
| JU13     | Open             | Disconnects VBAT from MAX31343 IC TDFN package (U2)               |

Evaluates: MAX31343

Figure 1. Connection and Setup

<!-- image -->

│

Figure 2. MAX31343 RTC SHIELD Software-Configuration &amp; Time Tab

<!-- image -->

## MAX31343 Shield

## Detailed Description

The  MAX31343  shield  is  a  low-cost,  extremely  accurate RTC. It is driven by an internal temperature-compensated microelectromechanical  systems  (MEMS)  resonator.  The oscillator  provides  a  stable  and  accurate  reference  clock and  maintains  the  RTC  to  within  ±0.432  seconds-perday  accuracy  from  -40°C  to  +85°C.  The  RTC  device  is accessed through an I 2 C serial interface.

The RTC maintains seconds, minutes, hours, day, date, month, year, and century information. The date at the end of  the  month  is  automatically  adjusted  for  months  with fewer  than  31  days,  including  corrections  for  leap  year up to the year 2199. The clock operates in the 24-hour format. Other features including two programmable timeof-day  alarms,  interrupt  output,  uncompensated  programmable clock output, and temperature-compensated programmable square-wave output. A voltage reference and comparator circuit monitor the status of VCC to detect power  failures  and  automatically  switch  to  the  backup supply when necessary.

## Detailed Description of Software and Functional Test Procedure

## Real Time Monitoring

To  monitor  the  time  and  date,  on  the Configuration  &amp; Time tab, in the RTC Configuration group box, enable the Oscillator  Enable  toggle button,  and  in  the Real Time  Monitoring group  box,  check  the Continuous Read checkbox for continuous reading.

Evaluates: MAX31343

## Current Draw in Timekeeping Mode

To  measure the current draw under normal RTC conditions without any interrupt or CLKO output:

- 1) Remove the jumper from JU5.
- 2) With the output set to +3.3V and disabled, connect the negative terminal of the pico ammeter to the pin 1 of JU5 (marked as a white dot) and the positive terminal to pin 2 of JU5.
- 3) On the Configuration &amp; Time tab, in the Date/Time Configuration group box, click the Read button. In the RTC Configuration group box, disable the CLKOUT toggle button, and select 1Hz in SQW Frequency drop-down list. In the Real Time Monitoring section, uncheck the Continuous Read checkbox.
- 4) The reading on the pico ammeter is the current consumed by the MAX31343 IC only. It should be around 940nA.

## CLKOUT Frequency

On  the Configuration  &amp;  Time tab  of  the  software,  in the RTC Configuration group box, enable the CLKOUT toggle button and select the desired frequency. The clock output can be monitored using an oscilloscope connected to  the  CLKO  test  point  (TP7). A  frequency  counter  can also be used to measure the clock frequency accurately.

## Alarm and Timer Configuration

Use the Alarm &amp; Timer Configuration tab to configure Alarm 1, Alarm 2, and timer. (Figure 3)

│

Figure 3. MAX31343 RTC SHIELD Software-Alarms &amp; Timer Page

<!-- image -->

## Registers Tab

Write  and  read  the  MAX31343  IC  register  map  in  the Register tab. (Figure 4)

Figure 4. MAX31343 RTC SHIELD Software-Registers Tab

<!-- image -->

## Ordering Information

#Denotes RoHS compliance.

| PART          | TYPE   |
|---------------|--------|
| MAX31343SHLD# | Shield |

## MAX31343 Shield Bill of Materials

|   ITEM | REF_DES                                               | DNI/DNP   |   QTY | MFG PART #                                                                                                                                                                                                    | MANUFACTURER                                                                                                                                | VALUE          | DESCRIPTION                                                                                                                                                                      |
|--------|-------------------------------------------------------|-----------|-------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 | C1, C3, C5, C7, C12, C14, C16, C23                    | -         |     8 | C0402C103J3RAC                                                                                                                                                                                                | KEMET                                                                                                                                       | 0.01UF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 25V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                       |
|      2 | C2, C4, C6, C8, C10, C13, C15, C17, C20-C22, C24, C25 | -         |    13 | C1005X7R1C104K050BC;ATC530L104KT16; 0402YC104KAT2A;CGA2B1X7R1C104K050BC; GCM155R71C104KA55;C0402X7R160-104KNE; CL05B104KO5NNNC;GRM155R71C104KA88; C1005X7R1C104K;CC0402KRX7R7BB104; EMK105B7104KV;CL05B104KO5 | TDK;AMERICAN TECHNICAL CERAMICS; AVK;TDK;MURATA;VENKEL LTD.; SAMSUNG ELECTRONICS;MURATA; TDK;YAGEO PHICOMP;TAIYO YUDEN; SAMSUNG ELECTRONICS | 0.1UF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                       |
|      3 | C9, C19                                               | -         |     2 | CL05B105KQ5NQNC; GRM155R70J105KA12                                                                                                                                                                            | SAMSUNG ELECTRONICS;MURATA                                                                                                                  | 1UF            | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                        |
|      4 | C11, C18                                              | -         |     2 | GRM155R61A106ME44;GRM155R61A106ME11; 0402ZD106MAT2A;CL05A106MP5NUNC                                                                                                                                           | MURATA;MURATA;AVX;SAMSUNG                                                                                                                   | 10UF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 10UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                                         |
|      5 | JU1, JU3, JU5-JU8, JU11-JU13                          | -         |     9 | PCC02SAAN                                                                                                                                                                                                     | SULLINS                                                                                                                                     | PCC02SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                                                                         |
|      6 | JU2                                                   | -         |     1 | PEC04SAAN                                                                                                                                                                                                     | SULLINS ELECTRONICS CORP.                                                                                                                   | PEC04SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                                                                                        |
|      7 | JU4                                                   | -         |     1 | TSW-105-07-L-S                                                                                                                                                                                                | SAMTEC                                                                                                                                      | TSW-105-07-L-S | EVKIT PART-CONNECTOR; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 5PINS                                                                                                      |
|      8 | JU10                                                  | -         |     1 | PBC03SAAN                                                                                                                                                                                                     | SULLINS                                                                                                                                     | PBC03SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                                                                                                 |
|      9 | P1                                                    | -         |     1 | SSQ-110-04-G-S                                                                                                                                                                                                | SAMTEC                                                                                                                                      | SSQ-110-04-G-S | CONNECTOR; FEMALE; THROUGH HOLE; .025IN SQ POST SOCKET; STRAIGHT; 10PINS ;                                                                                                       |
|     10 | P2, P4                                                | -         |     2 | SSQ-108-04-G-S                                                                                                                                                                                                | SAMTEC                                                                                                                                      | SSQ-108-04-G-S | CONNECTOR; FEMALE; THROUGH HOLE; .025IN SQ POST SOCKET; STRAIGHT; 8PINS ;                                                                                                        |
|     11 | P3                                                    | -         |     1 | SSQ-106-04-G-S                                                                                                                                                                                                | SAMTEC                                                                                                                                      | SSQ-106-04-G-S | CONNECTOR; FEMALE; THROUGH HOLE; .025IN SQ POST SOCKET; STRAIGHT; 6PINS ;                                                                                                        |
|     12 | P5, P6                                                | -         |     2 | PPPC101LFBN-RC                                                                                                                                                                                                | SULLINS ELECTRONICS CORP.                                                                                                                   | PPPC101LFBN-RC | CONNECTOR; FEMALE; THROUGH HOLE; HEADER CONNECTOR; STRAIGHT; 10PINS                                                                                                              |
|     13 | R1-R4, R7-R11                                         | -         |     9 | ERJ-2GEJ103                                                                                                                                                                                                   | PANASONIC                                                                                                                                   | 10K            | RESISTOR; 0402; 10K OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                                                                           |
|     14 | R5                                                    | -         |     1 | ERJ-2GE0R00                                                                                                                                                                                                   | PANASONIC                                                                                                                                   | 0              | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                                                             |
|     15 | SUPER_CAP                                             | -         |     1 | KW-5R5C334-R                                                                                                                                                                                                  | EATON POWERING BUSINESS WORLDWIDE                                                                                                           | 0.33F          | CAP; THROUGH HOLE-RADIAL LEAD; 0.33F; +80%/-20%; 5.5V; ALUMINUM-ELECTROLYTIC ;                                                                                                   |
|     16 | TP1, TP4                                              | -         |     2 | 5011                                                                                                                                                                                                          | KEYSTONE                                                                                                                                    | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                          |
|     17 | TP2, TP3                                              | -         |     2 | 5010                                                                                                                                                                                                          | KEYSTONE                                                                                                                                    | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                                            |
|     18 | TP5-TP9                                               | -         |     5 | 5012                                                                                                                                                                                                          | KEYSTONE                                                                                                                                    | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                          |
|     19 | U1                                                    | -         |     1 | MAX31343EKA+                                                                                                                                                                                                  | MAXIM                                                                                                                                       | MAX31343EKA+   | EVKIT PART-IC; MAX31343EKA+; +/-4PPM; I2C REAL-TIME CLOCK WITH INTEGRATED MEMS OSCILLATOR; PACKAGE OUTLINE: 21-100336; PACKAGE CODE: K82A2+1                                     |
|     20 | U2                                                    | DNI       |     1 | MAX31343ETAY+                                                                                                                                                                                                 | MAXIM                                                                                                                                       | MAX31343ETAY+  | EVKIT PART-IC; MAX31343ETAY+; +/-4PPM; I2C REAL-TIME CLOCK WITH INTEGRATED MEMS OSCILLATOR; PACKAGE OUTLINE: 21-100322; PACKAGE LAND PATTERN: 90-100121; PACKAGE CODE: T834MKY+1 |
|     21 | U3, U5                                                | -         |     2 | NLSX4373MUTAG                                                                                                                                                                                                 | ON SEMICONDUCTOR                                                                                                                            | NLSX4373MUTAG  | IC; TRANS; 2-BIT 20 MB/S DUAL-SUPPLY LEVEL TRANSLATOR; UDFN8                                                                                                                     |
|     22 | U4                                                    | -         |     1 | NLSX4401MU1TCG                                                                                                                                                                                                | ON SEMICONDUCTOR                                                                                                                            | NLSX4401MU1TCG | IC; TRANS; 1-BIT 20 MB/S DUAL-SUPPLY LEVEL TRANSLATOR; UDFN6                                                                                                                     |
|     23 | U6-U8                                                 | -         |     3 | MAX14689AETB+                                                                                                                                                                                                 | MAXIM                                                                                                                                       | MAX14689AETB+  | IC; ASW; ULTRA-SMALL LOW-RON BEYOND-THE-RAILS SWITCHES; TDFN10-EP                                                                                                                |
|     24 | PCB                                                   | -         |     1 | MAX31343SHIELD                                                                                                                                                                                                | MAXIM                                                                                                                                       | PCB            | DPDT ANALOG PCB:MAX31343SHIELD                                                                                                                                                   |
|     25 | P7                                                    | DNP       |     0 | SSQ-103-03-G-D                                                                                                                                                                                                | SAMTEC                                                                                                                                      | SSQ-103-03-G-D | CONNECTOR; FEMALE; THROUGH HOLE; SSQ SERIES ; STRAIGHT; 6PINS                                                                                                                    |
|     26 | R6                                                    | DNP       |     0 | N/A                                                                                                                                                                                                           | N/A                                                                                                                                         | OPEN           | PACKAGE OUTLINE 0402 RESISTOR                                                                                                                                                    |

Evaluates: MAX31343

## MAX31343 Shield Schematics

<!-- image -->

## MAX31343 Shield Schematics (continued)

<!-- image -->

## MAX31343 Shield

## MAX31343 Shield PCB Layouts

MAX31343 Shield Component Placement Guide-Top Silkscreen

<!-- image -->

MAX31343 Shield PCB Layout-Bottom

<!-- image -->

MAX31343 Shield PCB Layout-Top

<!-- image -->

MAX31343 Shield Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## MAX31343 Shield

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                 | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------------------------------------|-----------------|
|                 0 | 5/20            | Initial release                                                                             | -               |
|                 1 | 5/20            | Updated title, Features, and Detailed Description of Software and Functional Test Procedure | All             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

│

Evaluates: MAX31343