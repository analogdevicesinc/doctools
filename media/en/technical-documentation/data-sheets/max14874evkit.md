<!-- lastmod 2022-08-02 -->
## MAX14874 Evalution Kit

## General Description

The MAX14874 evaluation kit (EV kit) is a fully assembled and  tested  circuit  board  that  evaluates  the  MAX14874 dual relay/valve/motor driver

The EV kit operates from a single 4.5V to 36V supply and features an on-board linear regulator to generate a 3.3V logic supply. A terminal block allows for easy connections to evaluate operation with relays, valves, and/or motors.

## Features

- Operates from a Wide 4.5V to 36V Supply
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX14874

## Quick Start

## Recommended Equipment

- MAX14874 EV kit
- 24V, 2A power supply
- 50kHz function generator
- DC brushed motor

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation before exercising the full features of the device:

- 1)  Verify that all the jumpers are in their default positions, as shown in Table 1.
- 2)  Connect the EN1 jumper (J5) to 1-2, so the M1 driver is enabled.
- 3)  Connect  the  24V  DC  power  supply  on  the  VDD  and GND connectors on the EV kit board.
- 4)  Connect the DC brushed motor to the M1 and GND terminals on the J8 connector.
- 5)  Set the function generator to output a 0V-3.3V 50kHz signal.
- 6) Remove the shunt on the J3 jumper and connect the function generator to the IN1 test point (TP3).
- 7)  Turn on the 24V supply.
- 8)  Turn on the function generator.

<!-- image -->

## MAX14874 Evalution Kit

## Detailed Description

The  MAX14874  EV  kit  is  a  fully  tested  circuit  board demonstrating  the  capabilities  of  the  MAX14874  relay/ valve/motor driver.

## On-Board LDO

The  MAX15006A  (U1)  on-board  LDO  generates  3.3V for the logic supply (VL). Close the J2 jumper to use the MAX15006 to power VL.

To use an external supply for VL, open the J2 jumper and connect the external supply to pin 2 of the jumper.

## Table 1. Jumper Descriptions

| JUMPER   | SHUNT POSITON   | DESCRIPTION                                           |
|----------|-----------------|-------------------------------------------------------|
| J2       | Open            | VL is open.                                           |
| J2       | Closed*         | VL is connected to the MAX15006A circuit. VL is 3.3V. |
| J3       | 1-2             | IN1 is connected to VL.                               |
| J3       | 2-3*            | IN1 is connected to GND.                              |
| J4       | 1-2             | IN2 is connected to VL.                               |
| J4       | 2-3*            | IN2 is connected to GND.                              |
| J5       | 1-2             | EN1 is connected to VL. M1 driver is enabled.         |
| J5       | 2-3*            | EN1 is connected to GND. M1 driver is disabled.       |
| J6       | 1-2             | EN2 is connected to VL. M2 driver is enabled.         |
| J6       | 2-3*            | EN2 is connected to GND. M2 driver is disabled.       |
| J7       | Open*           | COM1 is not connected to COM2.                        |
| J7       | Closed          | COM1 is connected to COM2.                            |

## Fault Indicator LED

The FAULT output  asserts  low  when  an  overcurrent condition  exists  on  M1  or  M2  or  when  the  device  goes into  thermal  shutdown.  The  on-board  LED  (DS1)  turns on when FAULT asserts. The LED turns off when FAULT deasserts.

## Monitoring the M1/M2 Current

Both COM1 and COM2 are connected to GND through 100mΩ  resistors,  for  easy  current  monitoring.  Connect a scope probe to the COM1 or COM2 pins (or on the J7 header) to monitor the current through the driver.

Evaluates: MAX14874

│

## MAX14874 EV Kit Bill of Materials

| REF_DES               | QTY                                                                      | MFG PART # MANUFACTURER                       | VALUE          | DESCRIPTION                                                                                                                                                  |
|-----------------------|--------------------------------------------------------------------------|-----------------------------------------------|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1 C1, C4, C5          | 3 GRM21BR71H105KA12; CL21B105KBFNNNE; C2012X7R1H105K085AC; UMK212B7105KG | MURATA; SAMSUNG ELECTRONICS; TDK; TAIYO YUDEN | 1UF            | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                     |
| 2 C2                  | 1 GRM188R72A104KA35; CC0603KRX7R0BB104                                   | MURATA; TDK                                   | 0.1UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                  |
| 3 C3                  | 1 GRM188R71A225KE15; CL10B225KP8NNN                                      | MURATA; SAMSUNG                               | 2.2UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2UF; 10V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                   |
| 4 D1, D2              | 2 MURA205T3G                                                             | ON SEMICONDUCTOR                              | MURA205T3G     | DIODE; RECT; SMA (DO-214AC); PIV=50V; IF=2A DIODE; LED; STANDARD; RED; SMT (0603);                                                                           |
| 5 DS1                 | 1 LTST-C190EKT                                                           | LITE-ON ELECTRONICS; INC.                     | LTST-C190EKT   | PIV=2V; IF=0.02A                                                                                                                                             |
| 6 J1                  | 1 PBC07SAAN                                                              | SULLINS ELECTRONICS CORP.                     | PBC07SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 7PINS; -65 DEGC TO +125 DEGC                                                                             |
| 7 J2, J7              | 2 PCC02SAAN                                                              | SULLINS                                       | PCC02SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                                                     |
| 8 J3-J6               | 4 PCC03SAAN                                                              | SULLINS                                       | PCC03SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                                                     |
| 9 J8                  | 1 OSTTC042162                                                            | ON-SHORE TECHNOLOGY INC                       | OSTTC042162    | CONNECTOR; FEMALE; THROUGH HOLE; TERMINAL BLOCK ONE PIECE WIRE PROTECTOR; COLOR BLUE; RIGHT ANGLE; 4PINS                                                     |
| 10 R1, R3             | 2 WSL2010R1000FEA18                                                      | VISHAY DALE                                   | 0.1            | RESISTOR; 2010; 0.1 OHM; 1%; 75PPM; 1W; THICK FILM                                                                                                           |
| 11 R2                 | 1 CRCW0603100RFK; ERJ- 3EKF1000                                          | VISHAY DALE/PANASONIC                         | 100            | RESISTOR; 0603; 100 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                       |
| 12 R4                 | 1 CR0603-16W-000T; CR0603- 16W-000RJT                                    | VENKEL LTD.                                   | 0              | RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM                                                                                                        |
| 13 SU1-SU7            | 7 STC02SYAN                                                              | SULLINS ELECTRONICS CORP.                     | STC02SYAN      | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL TESTPOINT WITH 1.80MM HOLE DIA, RED, |
| 14 TP1                | 1                                                                        | 5010 KEYSTONE                                 | N/A            | MULTIPURPOSE;                                                                                                                                                |
| 15 TP2, TP7           | 2                                                                        | 5011 KEYSTONE                                 | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                      |
| 16 TP3-TP6, TP10-TP12 | 7                                                                        | 5014 KEYSTONE                                 | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                     |
| 17 U1                 | 1 MAX15006AATT+                                                          | MAXIM                                         | MAX15006AAT T+ | IC; VREG; ULTRA-LOW QUIESCENT-CURRENT LINEAR REGULATOR; TDFN6-EP 3X3                                                                                         |
| 18 U2                 | 1 MAX14874ETC+                                                           | MAXIM                                         | MAX14874ETC +  | EVKIT PART-IC; TDFN12-EP; DUAL 1/2H BRIDGE VALVE/MOTOR DRIVER; PACKAGKE CODE: TD1233+1; PACKAGE OUTLINE: 21-0664                                             |
| 19 PCB                | 1 MAX14874                                                               | MAXIM                                         | PCB            | PCB:MAX14874                                                                                                                                                 |
|                       | 40                                                                       |                                               |                |                                                                                                                                                              |

## MAX14874 EV Kit Schematic

<!-- image -->

## MAX14874 EV Kit PCB Layout Diagrams

MAX14874 EV Kit-Top Silkscreen

<!-- image -->

MAX14874 EV Kit-Internal 2

<!-- image -->

MAX14874 EV Kit-Top

<!-- image -->

MAX14874 EV Kit-Internal 3

<!-- image -->

│

## MAX14874 EV Kit PCB Layout Diagrams (continued)

MAX14874 EV Kit-Bottom

<!-- image -->

MAX14874 EV Kit-Bottom Silkscreen

<!-- image -->

## Ordering Information

#Denotes RoHS compliant.

| PART           | TYPE   |
|----------------|--------|
| MAX14874EVKIT# | EV Kit |

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are imSOieG. 0a[im ,ntegrateG reserYes tKe rigKt to cKange tKe circuitry anG sSeci¿cations ZitKout notice at any time.

<!-- image -->

│

Evaluates: MAX14874