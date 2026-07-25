<!-- lastmod 2022-08-03 -->
## MAX31342 SHIELD

## General Description

The  MAX31342  shield  is  a  fully  assembled  and  tested PCB  to  evaluate  the  MAX31342,  low-current,  real-time clock  (RTC)  with  I 2 C  interface.  The  shield  operates from a single supply, either from USB or external power supply,  and  the  onboard  crystal  provides  a  32.768kHz clock  signal.  This  device  is  accessed  through  an  I 2 C serial interface.

The MAX31342 shield provides the hardware and software graphical user interface (GUI) necessary to evaluate the MAX31342.  The  shield  includes  a  MAX31342EWA+T installed.  The  shield  connects  to  the  PC  through  a MAX32625PICO Board and a micro-USB cable.

## Features

- Easy Evaluation of the MAX31342
- +1.6V to 3.6V Single-Supply Operation
- Proven PCB Layout
- Mbed/Arduino Platform Compatible
- Fully Assembled and Tested

## Shield Contents

- Assembled MAX32625PICO controller board
- Micro-USB cable
- Assembled circuit board includes the MAX31342EWA+T

Ordering Information appears at end of data sheet.

Evaluates: MAX31342

## Quick Start

## Required Equipment

- One Pico Ammeter for measuring the current
- One oscilloscope with probe
- One PC with Microsoft Windows 7, or later
- One USB A male to micro B USB cable
- One assembled and programmed MAX32625PICO board
- One MAX31342 Shield

## Shield Board

<!-- image -->

## MAX32625PICO Board

<!-- image -->

<!-- image -->

## MAX31342 SHIELD

## Procedure

The shield is fully assembled and tested. Follow the steps below to verify board operation.

- 1) Place the MAX31342 shield on a nonconductive surface to ensure that nothing on the PCB gets shorted to the workspace.
- 2) Set the jumpers of JU4, JU6, and JU7 to their default positions. Leave the jumper JU1 open.
- 3) Connect the MAX32625PICO Board to the shield as shown in Figure 1.
- 4) Connect the USB A male to micro B male cable between the MAX32625PICO board and PC/laptop.
- 5) Go to the MAX31342 Shield product page to download and install the latest version of the MAX31342 RTC Shield software.
- 6) Open the MAX31342 RTC Shield software. Configuration and Time tab will be shown Figure 2.

Figure 1. Connection and Setup

<!-- image -->

Figure 2. MAX31342 RTC Shield Software-Configuration and Time Tab

<!-- image -->

│

## Detailed Description

The MAX31342 shield is a fully assembled and tested PCB to  evaluate  the  MAX31342,  low-current,  real-time  clock (RTC) with I 2 C interface. The shield operates from a single supply, either from USB or external power supply, and the onboard  crystal  provides  a  32.768kHz  clock  signal.  This device is accessed through an I 2 C serial interface.

The MAX31342 shield provides the hardware and software graphical user interface (GUI) necessary to evaluate the MAX31342.  The  shield  includes  a  MAX31342EWA+T installed.  The  shield  connects  to  the  PC  through  a MAX32625PICO board and a micro-USB cable.

## Functional Test Procedure

## Real-Time Monitoring

To monitor the time and date, on Configuration and Time tab, in RTC Configuration group box, enable Oscillator Enable ,  and  under Real  Time  Monitoring group  box, press Read button for one-time reading or check the Auto Update checkbox for continuous reading.

The time and date values can be updated by selecting the required  values  in  the Date/Time  Configuration group box and clicking the Set button.

The time stops counting when enabling Data Retention in RTC  Configuration group  box  and  restarts  when disabling Data Retention and toggling Oscillator Enable . The time  resets  to 00:00:00 by  enabling Soft  Reset in RTC Configuration group box and it restarts by disabling Soft Reset .

## Current Draw at Time-Keeping Mode

To  measure  the  current  draw  under  normal  Real-Time Clock condition, without any interrupt or clock input/output:

- 1) Remove the jumper from JU7 on the shield.
- 2) With the output set to the desired DC voltage (1.6V to 3.6V) and disabled, connect the positive terminal of the DC supply, through the pico ammeter, to pin 1 of JU7 and negative terminal to the ground of the shield.
- 3) In Configuration and Time tab of the software, under RTC Configuration group box, press Read button, disable the CLKIN and CLKOUT , and select 1Hz for CLKIN Frequency and CLKOUT Frequency . Under Real Time Monitoring , uncheck Auto Update .
- 4) The reading on the pico ammeter is the current drawn by MAX31342 only.

Note: All instruments need to be disconnected from the I/O ports of the IC, since any loading would increase current con -sumption.

## CLKOUT Frequency

In Configuration  and  Time tab  of  the  software,  under RTC Configuration group box, select CLKOUT and the desired CLKOUT Frequency .  The  clock  output  can  be monitored using an oscilloscope connected to the INTB / CLKOUT test point. A frequency counter can also be used to measure the clock frequency accurately.

## Alarm Configuration

On the MAX31342 shield board, set jumper JU1 to 1-2 and jumper JU6 to 1-4.

In Alarms and Timer tab of the software, under Alarm 1 Configuration group  box,  select  the  Repetition  Rate  to set the alarm, and make selections for all other relevant fields (such as Min, Sec, etc.). In Interrupts and Flags group  box,  enable    alarm  1  by  checking  the Alarm  1 Interrupt check box. When the Real-Time clock reaches the alarm1 match condition, INTA /CLKIN will go from high to  low.  Under Flags group  box,  press Read button  to read the status and clear the alarm flag bit if it has been previously set.

Repeat the same steps for Alarm 2 but measure the alarm interrupt output at INTB /CLKOUT test point.

Note: When testing alarm interrupts, CLKIN and CLKOUT need to be disabled under RTC Configuration group box in Configuration and Time tab of the software.

For  more  detail  on  using  the  software,  refer  to  the MAX31342 shield software user's guide.

Figure 3. MAX31342 RTC Shield Software-Alarms and Timer Tab

<!-- image -->

Figure 4. MAX31342 RTC Shield Software-Registers Tab

<!-- image -->

## MAX31342 SHIELD

## Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                         |
|----------|------------------|---------------------------------------------------------------------------------------------------------------------|
| JU1      | 1-2              | INTB /CLKOUT pin of U1 is connected to IO V CC2 pin of the level translator (U2)                                    |
| JU1      | OPEN*            | INTB /CLKOUT pin of U1 is unconnected                                                                               |
| JU4      | 1-2              | System V CC powered by VCC_EXT test point                                                                           |
| JU4      | 2-3*             | System V CC powered by 3.3V supply on mbed/Arduino platform                                                         |
| JU6      | 1-2              | INTA /CLKIN pin of U1 is connected to ground                                                                        |
| JU6      | 1-3              | INTA /CLKIN pin of U1 is connected to IO V CC1 pin of the level translator (U2)                                     |
| JU6      | 1-4*             | INTA /CLKIN is connected to TP4 test point and a 4.7KΩ pullup resistor to system V CC                               |
| JU7      | 1-2*             | V CC pin of U1 is powered by system V CC                                                                            |
| JU7      | OPEN             | V CC pin of U1 is unconnected. Connect an ammeter between the pins of JU7 to measure the current consumption of U1. |

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX31342SHLD# | SHIELD |

# Denotes RoHS compliant.

Evaluates: MAX31342

│

## MAX31342 SHIELD Bill of Materials

| NOTE: DNI--> DO NOT INSTALL(PACKOUT) ; DNP--> DO NOT PROCURE   | NOTE: DNI--> DO NOT INSTALL(PACKOUT) ; DNP--> DO NOT PROCURE   | NOTE: DNI--> DO NOT INSTALL(PACKOUT) ; DNP--> DO NOT PROCURE   | NOTE: DNI--> DO NOT INSTALL(PACKOUT) ; DNP--> DO NOT PROCURE   | NOTE: DNI--> DO NOT INSTALL(PACKOUT) ; DNP--> DO NOT PROCURE   | NOTE: DNI--> DO NOT INSTALL(PACKOUT) ; DNP--> DO NOT PROCURE   | NOTE: DNI--> DO NOT INSTALL(PACKOUT) ; DNP--> DO NOT PROCURE                                                                                                                                | NOTE: DNI--> DO NOT INSTALL(PACKOUT) ; DNP--> DO NOT PROCURE   |
|----------------------------------------------------------------|----------------------------------------------------------------|----------------------------------------------------------------|----------------------------------------------------------------|----------------------------------------------------------------|----------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| ITEM                                                           | REF_DES                                                        | QTY                                                            | MFG PART #                                                     | MANUFACTURER                                                   | VALUE                                                          | DESCRIPTION                                                                                                                                                                                 |                                                                |
| 1                                                              | C2, C5                                                         | 2                                                              | CL05B105KQ5NQNC; GRM155R70J105KA12                             | SAMSUNG ELECTRONICS; MURATA                                    | 1UF                                                            | CAPACITOR; SMT (0402); CERAMIC CHIP; 1UF; 6.3V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                   |                                                                |
| 2                                                              | C3, C7, C12, C14, C16, C18                                     | 6                                                              | GRM155R70J104KA01                                              | MURATA                                                         | 0.1UF                                                          | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 6.3V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R CAPACITOR; SMT (6032); TANTALUM CHIP; 10UF; 16V; TOL=10%; MODEL=TAJ SERIES; TG=-55 DEGC TO +125 |                                                                |
| 3                                                              | C6                                                             | 1                                                              | TAJC106K016RNJ                                                 | AVX                                                            | 10UF                                                           | DEGC                                                                                                                                                                                        |                                                                |
| 4                                                              | C11, C13, C15, C17                                             | 4                                                              | ATC520L103KT16T                                                | AMERICAN TECHNICAL CERAMICS                                    | 0.01UF                                                         | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 16V; TOL=10%; MODEL=ULTRA-BROADBAND; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                          |                                                                |
| 5                                                              | J1, J2                                                         | 2                                                              | PPPC101LFBN-RC                                                 | SULLINS ELECTRONICS CORP.                                      | PPPC101LFBN-RC                                                 | CONNECTOR; FEMALE; THROUGH HOLE; HEADER CONNECTOR; STRAIGHT; 10PINS                                                                                                                         |                                                                |
| 6                                                              | J3                                                             | 1                                                              | SSQ-110-04-G-S                                                 | SAMTEC                                                         | SSQ-110-04-G-S                                                 | CONNECTOR; FEMALE; THROUGH HOLE; .025IN SQ POST SOCKET; STRAIGHT; 10PINS ;                                                                                                                  |                                                                |
| 7                                                              | J4                                                             | 1                                                              | SSQ-106-04-G-S                                                 | SAMTEC                                                         | SSQ-106-04-G-S                                                 | CONNECTOR; FEMALE; THROUGH HOLE; .025IN SQ POST SOCKET; STRAIGHT; 6PINS ;                                                                                                                   |                                                                |
| 8                                                              | J6, J7                                                         | 2                                                              | SSQ-108-04-G-S                                                 | SAMTEC                                                         | SSQ-108-04-G-S                                                 | CONNECTOR; FEMALE; THROUGH HOLE; .025IN SQ POST SOCKET; STRAIGHT; 8PINS ;                                                                                                                   |                                                                |
| 9                                                              | JU1, JU7                                                       | 2                                                              | PBC02SAAN                                                      | SULLINS ELECTRONICS CORP.                                      | PBC02SAAN                                                      | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65 DEGC TO +125 DEGC;                                                                                                |                                                                |
| 10                                                             | JU4                                                            | 1                                                              | PEC03SAAN                                                      | SULLINS ELECTRONICS CORP.                                      | PEC03SAAN                                                      | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC;                                                                                                |                                                                |
| 11                                                             | JU6                                                            | 1                                                              | TSW-104-07-L-S                                                 | SAMTEC                                                         | TSW-104-07-L-S                                                 | EVKIT PART-CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; SINGLE ROW; STRAIGHT; 4PINS                                                                                                           |                                                                |
| 12                                                             | R1-R3, R5                                                      | 4                                                              | CRCW040210K0FK;RC04 02FR-0710KL                                | VISHAY DALE;YAGEO PHICOMP                                      | 10K                                                            | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                                        |                                                                |
| 13                                                             | R6                                                             | 1                                                              | RC0402JR-070RL; CR0402-16W-000RJT                              | YAGEO PHYCOMP;VENKEL LTD.                                      |                                                                | 0 RESISTOR; 0402; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM                                                                                                                                     |                                                                |
| 14                                                             | R13                                                            | 1                                                              | CRCW04024K70JN                                                 | VISHAY DALE                                                    | 4.7K                                                           | RESISTOR; 0402; 4.7K OHM; 5%; 200PPM; 0.063W; THICK FILM                                                                                                                                    |                                                                |
| 15                                                             | TP1, TP4-TP6                                                   | 4                                                              | 5010                                                           | KEYSTONE                                                       | N/A                                                            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                                                       |                                                                |
| 16                                                             | U1                                                             | 1                                                              | MAX31342EWA+                                                   | MAXIM                                                          | MAX31342EWA+                                                   | EVKIT PART-IC; MAX31342EWA+; LOW CURRENT REAL TIME CLOCK WITH I2C INTERFACE; PACKAGE OUTLINE: 21-100291; PACKAGE CODE: W80D1-1                                                              |                                                                |
| 17                                                             | U2, U3                                                         | 2                                                              | NLSX4373DR2G                                                   | ON SEMICONDUCTOR                                               | NLSX4373DR2G                                                   | IC; TRANS; 2-BIT 20 MB/S DUAL-SUPPLY LEVEL TRANSLATOR; NSOIC8                                                                                                                               |                                                                |
| 18                                                             | Y1                                                             | 1                                                              | ECS-.327-6-12                                                  | ECS INC                                                        | 32.768KHZ                                                      | CRYSTAL; SMT 2.0MM X 1.2 MM; 6PF; 32.768KHZ; +/-20PPM; -0.03PPM/DEGC2                                                                                                                       |                                                                |
| 19                                                             | PCB                                                            | 1                                                              | MAX31342SHIELD                                                 | MAXIM                                                          | PCB                                                            | PCB:MAX31342SHIELD                                                                                                                                                                          |                                                                |
| 20                                                             | R4                                                             | 0                                                              | N/A                                                            | N/A                                                            | OPEN                                                           | PACKAGE OUTLINE 0402 RESISTOR                                                                                                                                                               |                                                                |
| TOTAL                                                          |                                                                | 38                                                             |                                                                |                                                                |                                                                |                                                                                                                                                                                             |                                                                |

Evaluates: MAX31342

## MAX31342 SHIELD Schematic

<!-- image -->

Evaluates: MAX31342

## MAX31342 SHIELD PCB Layout Diagrams

MAX31342 Shield-Assembly Top Silkscreen

<!-- image -->

MAX31342 Shield-PCB Top Layer

<!-- image -->

MAX31342 Shield-PCB Bottom Layer

<!-- image -->

MAX31342 Shield-PCB Bottom Silkscreen

<!-- image -->

│

## MAX31342 SHIELD

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                              | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------|-----------------|
|                 0 | 2/19            | Initial release                          | -               |
|                 1 | 4/19            | Updated Figure 1, Figure 2, and Figure 3 | 2, 4, 5         |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im Integrated reserYes the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX31342