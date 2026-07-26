<!-- lastmod 2022-08-03 -->
## MAX14871 Evaluation Kit

## General Description

The  MAX14871  evaluation  kit  (EV  kit)  consists  of  a MAX14871 evaluation board. The EV kit is a fully assembled and tested circuit board that evaluates the MAX14871 fullbridge DC motor driver

The EV kit is designed to work as either a stand-alone board or with a software interface, demonstrating all of the major features of the device.

## MAX14871 EV Kit Block Diagram

## Features

- Operates From a Wide 4.5V to 36V Supply
- Standalone or Software-Controlled Operation
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

<!-- image -->

<!-- image -->

Evaluates: MAX14871

## MAX14871 Evaluation Kit

## Quick Start

## Recommended Equipment

- MAX14871 EV kit
- User-supplied  Windows  XP ® ,  Windows  Vista ® ,  or Windows 7 PC with a spare USB port.
- 24V, 1A power supply
- DC brushed motor

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation before exercising the full features of the device:

- 1)  Verify that all jumpers are in their default positions, as shown in Table 1.
- 2)  Connect  the  24V  DC  power  supply  on  the  VCC  and GND connectors on the EV kit board.
- 3)  See application note Using the MAX14871EVKIT with software to configure the board for software operation.
- 4)  Connect  the  DC  brushed  motor  to  the  M1  and  M2 terminals in the J12 connector.
- 5)  Turn on the 24V power supply.

## Detailed Description of Hardware

The  MAX14871  EV  kit  is  a  fully  tested  circuit  board demonstrating  the  capabilities  of  the  MAX14871  motor driver.

## Stand-Alone Operation

Remove  all  of  the  shunts  on  the  P2  header  for  standalone operation. On-board LDOs generate logic rails and headers  are  included  for  device  configuration  in  standalone mode.

## On-Board LDO

The MAX15006 (U5) on-board LDO generates 3.3V for logic  signals  and  for  powering  the  fault  LED.  The  3.3V LDO  also  powers  the  on-board  ICM7556  PWM  signal generator.

Windows  Vista  and  Windows  XP  are  registered  trademarks  and registered service marks of Microsoft Corporation.

Evaluates: MAX14871

## On-Board PWM Generator

The  ICM7556  (U2)  general-purpose  timer  circuit  is available  to  generate  PWM  signals  for  switching  either the PWM or DIR inputs. Adjust the R1 potentiometer to change the duty cycle of the output signal.

The EV kit comes with the PWM frequency set up to 1kHz but  can  be  adjusted  up  to  10kHz  by  changing  the  C3 capacitor.  Set  the  PWM  frequency  using  the  following equation:

<!-- formula-not-decoded -->

## Motor Operation

The  MAX14871  is  capable  of  operating  in  any  one  of three current regulation modes: fast decay, slow decay, or 25% ripple current mode. To set the mode, apply a voltage to VMODE and VREF (Table 2).

## VREF

Set the V REF  voltage to limit the motor current using the following equation:

<!-- formula-not-decoded -->

For easy evaluation, J6 can be used to set the  V REF voltage to 3.3V or 0V. Connect 1-2 on J6 to set  V REF to 3.3V. Connect 2-3 on J6 to set  V REF to 0V.

## MODE

The J7 jumper can be used to set the MODE voltage high (3.3V) or low (0V).  For 25% ripple mode, however, the MODE voltage must be between 0.5V and 1V.  Apply an external voltage to the MODE test point, or connect a resistor divider on the R3 and R5 resistor pads to set the MODE voltage for this mode of operation.

## Fault Indicator LED

The FAULT output is connected to the 3.3V logic supply through R4. LED1 turns on during a fault condition.

│

## MAX14871 Evaluation Kit

Table 1. Jumper Descriptions

| JUMPER   | SHUNT POSITON   | DESCRIPTION                                                                            |
|----------|-----------------|----------------------------------------------------------------------------------------|
| J1       | 1-2             | PWM is high.                                                                           |
| J1       | 2-3             | PWM is low.                                                                            |
| J2       | 1-2             | DIR is high.                                                                           |
| J2       | 2-3             | DIR is low.                                                                            |
| J3       | 1-2*            | SNS is connected to COM.                                                               |
| J3       | 2-3             | SNS is connected to GND.                                                               |
| J4       | 1-2             | Output of the on-board pulse generator circuit is connected to PWM.                    |
| J4       | 2-3             | Output of the on-board pulse generator circuit is connected to DIR.                    |
| J5       | 1-2             | EN is high.                                                                            |
| J5       | 2-3             | EN is low.                                                                             |
| J6       | 1-2             | VREF is connected to 3.3V.                                                             |
| J6       | 2-3             | VREF is connected to 0V.                                                               |
| J7       | 1-2             | MODE is connected to 3.3V.                                                             |
| J7       | 2-3             | MODE is connected to 0V.                                                               |
| J7       | Open*           | V MODE is set by the software or by the R3 and R5 voltage divider. R3 and R5 are DNI.  |
| J8       | Open*           | COM is not shorted to ground.                                                          |
| J8       | Closed          | COM is shorted to ground.                                                              |
| J9       | Open*           | This jumper is used to program the on-board microcontroller. Do not shunt this jumper. |
| J9       | Closed          | This jumper is used to program the on-board microcontroller. Do not shunt this jumper. |
| J10      | Open*           | This jumper is used to program the on-board microcontroller. Do not shunt this jumper. |
| J10      | Closed          | This jumper is used to program the on-board microcontroller. Do not shunt this jumper. |
| J11      | Open*           | This jumper is used to program the on-board microcontroller. Do not shunt this jumper. |
| J11      | Closed          | This jumper is used to program the on-board microcontroller. Do not shunt this jumper. |
| J13      | 1-2*            | VREF is set by the on-board microcontroller circuitry.                                 |
| J13      | 3-4*            | MODE is set by the on-board microcontroller circuitry.                                 |
| J13      | 5-6*            | FAULT is connected to the microcontroller.                                             |
| J13      | 7-8*            | PWM signal is generated by the on-board microcontroller.                               |
| J13      | 9-10*           | DIR signal is generated by the on-board microcontroller.                               |
| J13      | 11-12*          | EN signal is generated by the on-board microcontroller.                                |

Evaluates: MAX14871

Table 2. Current Regulation Logic

| INPUTS   | INPUTS   | INPUTS             | INPUTS       | OPERATING MODE                                                                                       |
|----------|----------|--------------------|--------------|------------------------------------------------------------------------------------------------------|
| EN       | V REF    | MODE               | V SNS        | OPERATING MODE                                                                                       |
| 0        | < 0.2V   | X                  | < 0.1V       | Normal PWM Operation. No current regulation.                                                         |
| 0        | < 0.2V   | V MODE < 0.5V      | > 0.1V       | Current regulation based on 15μs (typ) fixed off-time control with fast decay using internal V REF . |
| 0        | < 0.2V   | 0.5V < V MODE < 1V | > 0.1V       | Current regulation based on 25% current ripple fast decay using internal V REF .                     |
| 0        | < 0.2V   | V MODE > 1.5V      | > 0.1V       | Current regulation based on 15μs (typ) fixed off-time control with slow decay using internal V REF . |
| 0        | > 0.4V   | X                  | < V VREF /10 | Normal PWM Operation. No current regulation.                                                         |
| 0        | > 0.4V   | V MODE < 0.5V      | > V VREF /10 | Current regulation based on fixed TOFF-time control with fast decay using external V REF .           |
| 0        | > 0.4V   | 0.5V < V MODE < 1V | > V VREF /10 | Current regulation based on 25% current ripple fast decay using external V REF .                     |
| 0        | > 0.4V   | V MODE > 1.5V      | > V VREF /10 | Current regulation based on fixed TOFF-time control with slow decay using external V REF .           |

X = Don't care

Evaluates: MAX14871

│

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14871EVKIT# | EV Kit |

#Denotes RoHS compliant.

## Component Information

See the following links for component information, PCB files, and schematics:

- MAX14871 EV BOM
- MAX14871 EV Schematic
- MAX14871 EV PCB

Evaluates: MAX14871

## MAX14871 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied  0axim ,ntegrated reserYes the right to change the circuitry and specifications without notice at any time

│

Evaluates: MAX14871

GNDU

SPI\_SS

SPI\_MOSI

SPI\_SCK

MD\_MODE0

IN

MD\_MODE1

R9

1K

TP\_MODE\_1

IN

IN

IN

IN

IN

GNDU

V5VU

C1

0.1UF

GNDU

3

4

5

C6

0.1UF

10

ADDA

9

6

12

4

5

C12

1UF

GNDU

ADDB

INH

COM

GND

7

GNDU

U7

MAX8880ETT+

IN

OUT

FB

POK

EP

7

CS

DIN

SCLK

SHDN

GND

2

GNDU

V3V3M

6

VDD

GND

2

GNDU

V5VU

1

V+

NC

2

NC

8

EP

9

U4

MAX4704EGC+

NO0

11

NO1

NO2

NO3

EP

13

3

1

6

5

3

4

V3V3U

R13

10K

R15

6.04K

GNDU

GNDU

U1

MAX5394LATA+

H

8

W

L

7

1

R2

10K

IN

TP\_VREF\_1

V3V3U

R6

34K

R7

10K

GNDU

C11

4.7UF

GNDU

TP\_PWM

TP\_EN

MD\_PWM

MD\_DIR

MD\_EN

IN

IN

IN

IN

IN

2

2

V3V3M

1

3

GNDU

V3V3M

1

3

GNDU

TP\_VREF\_1

IN

TP\_MODE\_1

OS\_FLT

1

2

3

4

IN

IN

RP

1K

J1

PCC03SAAN

J5

PCC03SAAN

8

7

6

5

TP\_DIR

TP\_VREF

IN

IN

2

2

J13

PEC06DAAN

1

2

3

5

7

9

11

4

6

8

10

12

1

3

5

7

9

11

V3V3M

1

3

GNDU

V3V3M

1

3

GNDU

2

4

6

8

10

12

J2

PCC03SAAN

TP\_SNS

J6

PCC03SAAN

IN

TP\_VREF

IN

IN

IN

IN

IN

TP\_MODE

MD\_FLT

TP\_PWM

TP\_DIR

TP\_EN

IN

2

COM

1

3

GNDU

TP\_MODE

TP\_EN

TP\_PWM

IN

IN

IN

TP\_DIR

IN

TP\_MODE

C8

220PF

GNDU

J3

PCC03SAAN

R3

OPEN

R5

OPEN

IN

TP\_SNS

GNDU

2

IN

V3V3M

1

3

GNDU

VDD

C4

1UF

GNDU

11

6

7

8

9

5

C5

1UF

EN

PWM

DIR

MODE

TCOFF

SNS

TP1

TP5

TP9

VDD

GND

J7

PCC03SAAN

R32

13K

4

VDD

13

12

VDD

EP

17

GNDU

TP\_SNS

IN

TP\_M1

TP\_M2

IN

IN

VDD

1

+

VREF

C13

330UF

2

GNDU

C31

0.01UF

GNDU

C3

0.01UF

GNDU

C7

0.1UF

GNDU

U3

MAX14871EUE+

FAULT

10

COM

COM

M1

M1

M2

M2

1

16

2

3

14

15

SNS

M1

M2

TP\_M1

TP\_M2

V3V3M

R8

OPEN

IN

IN

OUTA

IN

GNDU

IN

TP\_VREF

V3V3M

R4

270

LED1

597-3111-407F

A

RED

C

IN

TP\_M1

TP\_M2

TP\_EN

TP\_MODE

MD\_FLT

IN

1

2

3

4

5

6

IN

IN

IN

J12

1935200

IN

R29

120K

1

2

3

4

5

6

7

MD\_FLT

DISCHARGE

THRESHOLD

CONTROL\_VOLTAGE

RESET

OUTPUT

TRIGGER

GND

COM

EN

MODE

FAULT

R10

0.1

1

U2

ICM7556ISD+

J8

PCC02SAAN

TP\_VREF

IN

TP\_PWM

TP\_DIR

IN

IN

2

V+

DISCHARGE

THRESHOLD

CONTROL\_VOLTAGE

RESET

OUTPUT

TRIGGER

GNDU

V3V3M

14

13

12

11

10

9

8

IN

VDD

C2

0.1UF

OUTA

1

2

C10

0.1UF

GNDU

VREF

PWM

DIR

GNDU

V3V3M

R31

0

U5

MAX15006AATT+

IN

OUT

IN

OUT

NC

3

GND

EP

4

7

GNDU

2

2

5

6

2

V3V3M

1

1

3

3

TP\_PWM

IN

1

3

IN

TP\_DIR

V3V3M

C9

2.2UF

R1

10K

GNDU

C29

0.1UF

GNDU

C30

0.01UF

GNDU

J4

PCC03SAAN

10

11

<!-- image -->

<!-- image -->

HARDWARE NAME:MAX14871\_EVKIT\_A

HARDWARE NUMBER:EPCB14871

DATE:

This document contains information considered proprietary,

and shall not be reproduced wholly or in part,

nor disclosed to others without specific written permission.

ODB++/GERBER:

SILK\_TOP

12/16/2014

<!-- image -->

1"

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

HARDWARE NAME:MAX14871\_EVKIT\_A

HARDWARE NUMBER:EPCB14871

DATE:

This document contains information considered proprietary,

and shall not be reproduced wholly or in part,

nor disclosed to others without specific written permission.

ODB++/GERBER:

TOP

12/16/2014

<!-- image -->

1"

<!-- image -->

BOTTOM

ODB++/GERBER:

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## Bill of Materials

DATE: 01/08/2015

DESIGN: max14871\_evkit\_a

Revision\_Type : PRODUCTION

|   ITEM |   QTY | REF DES                               | MFG PART #      | MANUFACTUR ER             | VALUE     | DESCRIPTION                                                                                                                                                                         |
|--------|-------|---------------------------------------|-----------------|---------------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 |     8 | C1,C2,C6,C7,C19,C25,C26,C29           |                 |                           | 0.1UF     | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R; NOT RECOMMENDED FOR NEW DESIGN USE 20-000u1-01                                  |
|      2 |     3 | C3,C30,C31                            |                 |                           | 0.01UF    | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 50V; TOL=5%; MODEL=X7R; TG=-55 DEGC TO +125 DEGC; TC=+/                                                                                |
|      3 |     2 | C4,C5                                 |                 |                           | 1UF       | CAPACITOR; SMT (1206); CERAMIC CHIP; 1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                            |
|      4 |     1 | C8                                    |                 |                           | 220PF     | CAPACITOR; SMT (0603); CERAMIC CHIP; 220PF; 50V; TOL=5%; MODEL=PPS; TG=-55 DEGC TO +85 DEGC; TC=+/-                                                                                 |
|      5 |     1 | C9                                    |                 |                           | 2.2UF     | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2UF; 25V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V;                                  |
|      6 |     1 | C10                                   |                 |                           | 0.1UF     | TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                                                                            |
|      7 |     4 | C11,C15,C17,C23                       |                 |                           | 4.7UF     | CAPACITOR; SMT; 0603; CERAMIC; 4.7uF; 10V; 10%; X5R; 55degC to + 85degC; 0 +/-15% degC MAX.                                                                                         |
|      8 |     7 | C12,C14,C16,C20-C22,C24               |                 |                           | 1UF       | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 25V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                          |
|      9 |     1 | C13                                   |                 |                           | 330UF     | CAPACITOR; THROUGH HOLE-RADIAL LEAD; ALUMINUM- ELECTROLYTIC; 330UF; 50V; TOL=20%; MODEL=EB SERIES; TG=-40 DEGC TO +105 DEGC                                                         |
|     10 |     2 | C27,C28                               |                 |                           | 18PF      | CAPACITOR; SMT (0603); CERAMIC CHIP; 18PF; 50V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                                                    |
|     11 |     9 | EN,M1,M2,DIR,PWM,SNS,MOD E,VREF,FAULT | 5014            | KEYSTONE                  | N/A       | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |
|     12 |     4 | GND,TP1,TP5,TP9                       | 5011            | KEYSTONE                  | N/A       | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST  |
|     13 |     7 | J1-J7                                 | PCC03SAAN       | SULLINS                   | PCC03SAAN | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                                                                            |
|     14 |     1 | J8                                    | PCC02SAAN       | SULLINS                   | PCC02SAAN | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                                                                            |
|     15 |     3 | J9-J11                                | PEC02SAAN       | SULLINS                   | PEC02SAAN | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65 DEGC TO +125 DEGC                                                                                                    |
|     16 |     1 | J12                                   | 1935200         | PHOENIX CONTACT           | 1935200   | CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; STRAIGHT; 6PINS                                                                                                              |
|     17 |     1 | J13                                   | PEC06DAAN       | SULLINS ELECTRONICS CORP. | PEC06DAAN | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 12PINS; -65 DEGC TO +125 DEGC                                                                                                   |
|     18 |     1 | L1                                    | BLM21AG601SN 1D | MURATA                    | 600       | INDUCTOR; SMT (0805); FERRITE-BEAD; 600; TOL=+/-25%; 0.2A                                                                                                                           |

|   19 |   3 | LED1-LED3                 | 597-3111-407F    | DIALIGHT                            | 597-3111-407F   | DIODE; LED; SMT LED; RED; SMT (1206); PIV=4V; IF=0.03A                                                                  |
|------|-----|---------------------------|------------------|-------------------------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------|
|   20 |   1 | LED4                      | 597-3311-407F    | DIALIGHT                            | 597-3311-407F   | DIODE; LED; STANDARD; GREEN; SMT (1206); PIV=2.1V; IF=0.02A                                                             |
|   21 |   1 | P4                        | 10118193- 0001LF | FCI CONNECT                         | 10118193-0001LF | CONNECTOR; FEMALE; SMT; MICRO USB B TYPE RECEPTACLE; RIGHT ANGLE; 5PINS IC=0.2A,                                        |
|   22 |   2 | Q2,Q3                     | MMBT3904         | N/A                                 | MMBT3904        | TRANSISTOR, NPN, SOT-23, PD=0.225W, VCEO=40V RESISTOR; SMT J-LEAD; TRIMMER POTENTIOMETER;                               |
|   23 |   1 | R1                        | PVZ3A103C01      | ?                                   | 10K             | 1 TURN; 10K OHM; 30%; 500PPM; 0.1W; TADJ; CARBON FILM                                                                   |
|   24 |   8 | R2,R7,R13,R21-R23,R27,R28 |                  |                                     | 10K             | RESISTOR; 0603; 10K OHM; 1%; 100PPM; 0.0125W; THICK FILM                                                                |
|   25 |   1 | R4                        |                  |                                     | 270             | RESISTOR, 0805, 270 OHM, 1%, 100PPM, 0.125W, THICK FILM                                                                 |
|   26 |   1 | R6                        |                  |                                     | 34K             | RESISTOR; 0603; 34K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                  |
|   27 |   2 | R9,R26                    |                  |                                     | 1K              | RESISTOR; 0603; 1K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                   |
|   28 |   1 | R10                       |                  |                                     | 0.1             | RESISTOR; 2512; 0.1 OHM; 1%; 75PPM; 3W; METAL FILM                                                                      |
|   29 |   1 | R11                       |                  |                                     | 10K             | RESISTOR; 0402; 10K; 1%; 100PPM; 0.0625W; THICK FILM                                                                    |
|   30 |   1 | R15                       |                  |                                     | 6.04K           | RESISTOR; 0603; 6.04K; 1%; 100PPM; 0.10W; THICK FILM                                                                    |
|   31 |   1 | R16                       |                  |                                     | 3.92K           | RESISTOR, 0603, 3.92K OHM, 0.1%, 25PPM, 0.10W, THICK FILM                                                               |
|   32 |   1 | R17                       |                  |                                     | 39.2K           | RESISTOR; 0603; 39.2K; 1%; 100PPM; 0.10W; THICK FILM                                                                    |
|   33 |   1 | R18                       |                  |                                     | 332             | RESISTOR; 0603; 332 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                  |
|   34 |   1 | R19                       |                  |                                     | 102K            | RESISTOR; 0603; 102K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                 |
|   35 |   1 | R20                       |                  |                                     | 1.5K            | RESISTOR; 0603; 1.5K; 1%; 100PPM; 0.10W; THICK FILM RESISTOR; 0805; 137 OHM; 1%; 100PPM; 0.125W; THICK                  |
|   36 |   2 | R24,R25                   |                  |                                     | 137             | FILM RESISTOR, 0603, 120K OHM, 1%, 100PPM, 0.10W, THICK                                                                 |
|   37 |   1 | R29                       |                  |                                     | 120K            | FILM                                                                                                                    |
|   38 |   1 | R31                       |                  |                                     | 0               | RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM                                                                    |
|   39 |   1 | R32                       |                  |                                     | 13K             | RESISTOR, 0603, 13KOHMS, 1%, 100PPM, 0.1W, THICK FILM                                                                   |
|   40 |   1 | RP                        |                  |                                     | 1K              | RESISTOR; ARRAY; 0402; 1K OHM; 5%; 200PPM; 0.063W; THICK FILM                                                           |
|   41 |  10 | SU1-SU10                  | STC02SYAN        | SULLINS ELECTRONICS CORP.           | STC02SYAN       | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL |
|   42 |   1 | U1                        | MAX5394LATA+     | MAXIM                               | MAX5394LATA+    | IC; DPOT; SINGLE; 256-TAP VOLATILE; SPI; LOW-VOLTAGE TAPER DIGITAL POTENTIOMETER; TDFN8-EP2MMX2MM                       |
|   43 |   1 | U2                        | ICM7556ISD+      | MAXIM                               | ICM7556ISD+     | IC; TIMR; GENERAL PURPOSE TIMER; NSOIC14 150MIL IC; DRV; 12V FULL BRIDGE DC MOTOR DRIVER; TSSOP16-                      |
|   44 |   1 | U3                        | MAX14871EUE+     | MAXIM                               | MAX14871EUE+    | EP                                                                                                                      |
|   45 |   1 | U4                        | MAX4704EGC+      | MAXIM                               | MAX4704EGC+     | IC; AMUX; LOW-VOLTAGE; 60OHMS; 4:1 ANALOG MULTIPLEXER IN QFN; QFN12-EP 3X3                                              |
|   46 |   1 | U5                        | MAX15006AATT +   | MAXIM                               | MAX15006AATT+   | IC; VREG; ULTRA-LOW QUIESCENT-CURRENT LINEAR REGULATOR; TDFN6-EP 3X3                                                    |
|   47 |   1 | U7                        | MAX8880ETT+      | MAXIM                               | MAX8880ETT+     | IC; VREG; 12V; ULTRA-LOW-IQ; LOW-DROPOUT LINEAR REGULATOR WITH POK; TDFN6-EP 3X3                                        |
|   48 |   1 | U8                        | FT232RL          | FUTURE TECHNOLOGY DEVICES INTL LTD. | FT232RL         | IC; INFC; USB UART INTERFACE; SSOP28                                                                                    |

| 49              | 1               | U9                            | STM32F103RET6       | ST MICROELECTR ONICS      | STM32F103RET6   | IC; MMRY; HIGH-DENSITY PERFORMANCE LINE ARM- BASED 32-BIT MCUWITH 512KB FLASH; 11 TIMERS; 3 ADC; 13 COMMUNICATION INTERFACE; LQFP64 10X10   |
|-----------------|-----------------|-------------------------------|---------------------|---------------------------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| 50              | 1               | U10                           | MAX14585AEVB +      | MAXIM                     | MAX14585AEVB+   | IC; ASW; HI-SPEED USB AND AUDIO SWITCHES WITH NEGATIVE SIGNAL CAPABILITY AND HIGH-VOLATGE- TOLERABLE VBUS DETECTION; UTQFN10 1.4X1.8        |
| 51              | 1               | U11                           | NC7SZ125M5X         | FAIRCHILD SEMICONDUCT OR  | NC7SZ125M5X     | IIC; BUF; TINYLOGIC UHS BUFFER WITH THREE-STATE OUTPUT; SOT23-5                                                                             |
| 52              | 1               | VDD                           | 5010                | ?                         | N/A             | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE; NOT FOR COLD TEST                                                                        |
| 53              | 1               | Y1                            | HCM49- 8.000MABJ-UT | CITIZEN                   | 8MHZ            | CRYSTAL; SMT ; AT-CUT CRYSTAL UNIT; 18PF; 8MHZ; +/- 30PPM; +/-30PPM                                                                         |
| 54              | 1               |                               | EPCB14871           | MAXIM                     | PCB             | PCB: EPCB14871                                                                                                                              |
| TOTAL           | 114             |                               |                     |                           |                 |                                                                                                                                             |
| NOT INSERT(DNI) | NOT INSERT(DNI) |                               |                     |                           |                 |                                                                                                                                             |
| ITEM            | QTY             | REF DES                       | MFG PART #          | MANUFACTUR ER             | VALUE           | DESCRIPTION                                                                                                                                 |
| 1               | 1               | P5                            | PEC10SAAN           | SULLINS ELECTRONICS CORP. | PEC10SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 10PINS                                                                                  |
| 2               | 9               | P7,P9,P12-P14,PC0,PC1,PC6,PC7 | PEC01SAAN           | SULLINS ELECTRONICS CORP  | PEC01SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 1PIN                                                                                    |
| 3               | 3               | R3,R5,R8                      | N/A                 | N/A                       | OPEN            | PACKAGE OUTLINE 0603 RESISTOR - EVKIT                                                                                                       |
| TOTAL           | 13              |                               |                     |                           |                 |                                                                                                                                             |