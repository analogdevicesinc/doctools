<!-- lastmod 2022-08-03 -->
## MAX14870 Evaluation Kit

## General Description

The MAX14870 evaluation kit (EV kit) is a fully assembled and tested circuit board that evaluates the MAX14870 fullbridge DC motor driver.

The EV kit can also be used to evaluate the MAX14872.

## Features

- Operates from a Wide 4.5V to 36V Supply
- Standalone or Software-Controlled Operation
- Proven PCB Layout
- Fully Assembled and Tested
- PMOD Compatible Connector

Ordering Information appears at end of data sheet.

Evaluates: MAX14870, MAX14872

## Quick Start

## Recommended Equipment

- MAX14870 EV kit
- 100kHz function generator
- 24V, 2A power supply
- 3.3V, 100mA power supply
- DC brushed motor

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation before exercising the full features of the device:

- 1)  Verify that all the jumpers are in their default positions, as shown in Table 1.
- 2)  Connect the 24V supply to the VDD test point (TP8) and the ground test point (TP5) on the EV kit.
- 3)  Connect one wire of the the motor to the J3 terminal block (M1).
- 4)  Connect the other wire of the motor to the J3 terminal block (M2).
- 5)  Connect the oscilloscope to the M1 test point (TP11), the M2 test point (TP12), and the PWM test point (TP3).
- 6)  Connect DIR (TP2) to ground.
- 7)  Turn on the 24V power supply.
- 8)  Using the function generator, connect a 0V to 3V, 10kHz switching signal to the PWM test point (TP3).
- 9)  Monitor M1, M2, and PWM.
- 10)  Change the duty cycle on the PWM input to increase/ decrease the speed of the motor.

<!-- image -->

## MAX14870 Evaluation Kit

## Detailed Description of Hardware

The MAX14870 EV kit is a fully tested circuit board demonstrating the capabilities of the MAX14870 motor driver.

## Current Regulation

A 100mΩ resistor is connected between COM and ground for current regulation. To disable current regulation, place a shunt on the J1 jumper and connect J4 to 2-3 to con -nect COM and SNS, respectively, to ground.

## Current Sensing

Connect the J4 jumper to 1-2 to monitor the motor current during operation when J1 is open.

## Table 1. Jumper Descriptions

| JUMPER   | SHUNT POSITON   | DESCRIPTION                                                 |
|----------|-----------------|-------------------------------------------------------------|
| J1       | Open*           | COM is connected to ground through a 100mΩ resistor.        |
| J1       | Closed          | COM is connected to ground.                                 |
| J4       | 1-2*            | SNS is connected to COM.                                    |
| J4       | 2-3             | SNS is connected to ground. Current regulation is disabled. |

## Evaluates: MAX14870, MAX14872

## High-Voltage Transient Protection

The  EV  kit  includes  pads  for  two  diodes,  D1  and  D2. These diodes are not required during normal operation, but can be added for protection against high-voltage transients during short-circuit events.

## Fault Indicator LED

The FAULT output is connected to the 3.3V logic supply through  R4.  A  fault  is  generated  when  an  overcurrent condition occurs on M1 and/or M2. LED1 turns on during a fault condition.

NOTE: To ensure that LED1 turns on during a short-circuit event, use a power supply capable of supply at least 6A when testing short-circuit functionality.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14870EVKIT# | EV Kit |

#Denotes RoHS compliant.

│

## MAX14870 EV Kit Bill of Materials

| ITEM                 | REF_DES DNI/DNP   | QTY MFG                                                                                                 | MANUFACTURER                          | VALUE                                                                          | DESCRIPTION                                                                                                              |
|----------------------|-------------------|---------------------------------------------------------------------------------------------------------|---------------------------------------|--------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| 1 C1,                | C2 -              | PART # 2 GRM21BR71H105KA12 ; CL21B105KBFNNN; C2012X7R1H105K085A C; UMK212B7105KG; CGA4J3X7R1H105K125 AB | MURATA; SAMSUNG ELECTRONICS; TDK;TAIY | 1UF                                                                            | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                 |
| 2 J1                 | -                 | 1 PCC02SAAN                                                                                             | SULLINS                               | PCC02SAAN                                                                      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                 |
| 3 J2                 | -                 | 1 TSW-106-08-S-S-RA                                                                                     | SAMTEC                                | TSW-106-08-S-S-RA                                                              | CONNECTOR; MALE; THROUGH HOLE; 0.025 INCH SQUARE POST HEADER; RIGHT ANGLE; 6PINS                                         |
| 4 J3                 | -                 | 1 1935161                                                                                               | PHOENIX CONTACT                       | 1935161 CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; STRAIGHT; 2PINS | 1935161 CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; STRAIGHT; 2PINS                                           |
| 5 J4                 | -                 | 1 PCC03SAAN                                                                                             | SULLINS                               | PCC03SAAN                                                                      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                 |
| 6 LED1               | -                 | 1 597-3111-407F                                                                                         | DIALIGHT                              | 597-3111-407F                                                                  | DIODE; LED; SMT LED; RED; SMT (1206); PIV=4V; IF=0.03A                                                                   |
| 7 MH1-MH4            | -                 | 4 9032 KEYSTONE                                                                                         | 4 9032 KEYSTONE                       | 9032 MACHINE FABRICATED; ROUND-THRU HOLE SPACER;NO THREAD; M3.5; 5/8IN; NYLON  | 9032 MACHINE FABRICATED; ROUND-THRU HOLE SPACER;NO THREAD; M3.5; 5/8IN; NYLON                                            |
| 8 R1                 | -                 | 1 CRCW0402270RFK                                                                                        | VISHAY DALE                           | 270 RESISTOR; 0402; 270 OHM; 1%; 100PPM; 0.0625W; THICK FILM                   | 270 RESISTOR; 0402; 270 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                                             |
| 9 R2                 | -                 | 1 CRA2512-FZ-R100ELF                                                                                    | BOURNS                                | 0.1 RESISTOR; 2512; 0.1 OHM; 1%; 75PPM; 3W; METAL FILM                         | 0.1 RESISTOR; 2512; 0.1 OHM; 1%; 75PPM; 3W; METAL FILM                                                                   |
| 10 R3                | -                 | 1 CRCW040210K0FK; RC0402FR-0710KL                                                                       | VISHAY DALE; YAGEO PHICOMP            | 10K                                                                            | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                                                     |
| 11 R5, R6            | -                 | 2 CRCW06031K00FK; ERJ-3EKF1001                                                                          | VISHAY DALE; PANASONIC                | 1K                                                                             | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                                                        |
| 12 TP1-TP6, TP9-TP12 | -                 | 10                                                                                                      | 5014 KEYSTONE                         | N/A                                                                            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 13 TP8               | -                 | 1                                                                                                       | 5010 KEYSTONE                         | N/A                                                                            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                    |
| 14 U1                | -                 | 1 MAX14870ETC+                                                                                          | MAXIM                                 | MAX14870ETC+                                                                   | IC; DRV; FULL-BRIDGE DC MOTOR DRIVER; TDFN12-EP 3X3                                                                      |
| 15 PCB               | -                 | 1 MAX14870                                                                                              | MAXIM                                 | PCB                                                                            | PCB:MAX14870                                                                                                             |
| 16 D1, D2            | DNP               | 0 MURA205T3G                                                                                            | ONSEMICONDUCTOR                       | MURA205T3G                                                                     | DIODE; RECT; SMA (DO-214AC); PIV=50V; IF=2A                                                                              |
| TOTAL                |                   | 29                                                                                                      |                                       |                                                                                |                                                                                                                          |

## MAX14870 EV Kit Schematic

D

1

2

3

4

5

6

7

8

D

TP5

C

TP8

TP6

C

VDD

VL

C2

C1

R1

270

1UF

1UF

A

LED1

U1

10

3

ENB

TP1

C

MAX14870ETC+

TP9

FLTB

VDD

VDD

R3

10K

J2

TSW-106-08-S-S-RA

7

FAULT

EN

8

DIR

6

R2

TP10

COM

1

COM

DIR

6

ENB

PWM

5

4

12

COM

PWM

5

FLTB

3

2

B

B

0.1

2

M1

SNS

4

R5

DIR

TP2

1

11

M2

1K

VL

2

1

R6

PWM

TP3

A

A

J1

TP11

M1

EP

GND

1K

TP12

M2

13

9

J4

1

COM

2

SNS

TP4

1935161

2

1

MURA205T3G

C

A

D2

DNI

MURA205T3G

C

A

D1

DNI

3

PCC03SAAN

J3

PROJECT TITLE:

MAX14870\_EVKIT\_C

DRAWING TITLE:

DATE:

08/2019

HARDWARE NUMBER:

-

B

SIZE

REV:

DRAWN BY:

ENGINEER:

C

-

-

TEMPLATE REV:

SHEET 1 OF 1

A

1

2

3

4

5

6

7

8

## MAX14870 EV Kit PCB Layout Diagrams

MAX14870 EV Kit PCB Layout-Top Silkscreen

<!-- image -->

MAX14870 EV Kit PCB Layout-Top Layer

<!-- image -->

MAX14870 EV Kit PCB Layout-Layer 2

<!-- image -->

│

## MAX14870 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX14870 EV Kit PCB Layout-Layer 3

MAX14870 EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX14870 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

│

## MAX14870 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                       | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 6/15            | Initial release                                                                                                                   | -               |
|                 1 | 9/19            | Updated all sections                                                                                                              | 1-7             |
|                 2 | 10/19           | Updated the Quick Start section and added the Current Regulation, Current Sensing, and High-Voltage Transient Protection sections | 1-2             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are impOied. Ma[im ,ntegrated reserYes the right to change the circuitr\ and speci¿cations without notice at an\ time.

<!-- image -->

│

Evaluates: MAX14870, MAX14872