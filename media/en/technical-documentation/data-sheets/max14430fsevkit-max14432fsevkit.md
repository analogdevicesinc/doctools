<!-- lastmod 2022-08-04 -->
## MAX14430-MAX14432 Evaluation Kit

## General Description

The MAX14430-MAX14432 evaluation kit (EV kit) provides a  proven  design  to  evaluate  the  MAX14430-MAX14432 four-channel unidirectional digital isolators. Three types of evaluation boards are available to support different channel direction configurations of the MAX14430-MAX14432 family.  All  evaluation  boards  support  the  narrow-body 16-pin SOIC package type. See Table 1 for EV kit options.

The  EV  kit  should  be  powered  from  two  independent isolated  power  supplies  with  nominal  output  voltage  in range  from  1.71V  to  5.5V.  For  evaluating  the  electrical parameters of the device without any isolation between the two sides, a single power supply can also be used.

The  MAX14430FSEVKIT#  comes  populated  with  a MAX14430FASE+, but can also be used to evaluate the following digital isolators:

MAX14430BASE+

MAX14430CASE+

MAX14430EASE+

The  MAX14431FSEVKIT#  comes  populated  with  the MAX14431FASE+, but can also be used to evaluate the following digital isolators:

MAX14431BASE+, MAX14431CASE+

MAX14431EASE+, MAX14431RASE+

MAX14431SASE+, MAX14431UASE+,

MAX14431VASE+

## Table 1. EV Kit Options

| EVKITPARTNUMBER   | TARGET DEVICE   | PACKAGE TYPE        | COMMENT              |
|-------------------|-----------------|---------------------|----------------------|
| MAX14430FSEVKIT#  | MAX14430FASE+   | 16-SOIC narrow-body | 200Mbps IC populated |
| MAX14431FSEVKIT#  | MAX14431FASE+   | 16-SOIC narrow-body | 200Mbps IC populated |
| MAX14432FSEVKIT#  | MAX14432FASE+   | 16-SOIC narrow-body | 200Mbps IC populated |

<!-- image -->

## Evaluates: MAX14430-MAX14432

The  MAX14432FSEVKIT#  comes  populated  with  the MAX14432FASE+, but can also be used to evaluate the following digital isolators:

MAX14432BASE+

MAX14432CASE+

MAX14432EASE+

The  MAX14430EAEE+  and  MAX14431CAEE+  have the  same  functionality  and  electrical  performance  as the  MAX14430EASE+  and  MAX14431CASE+,  but  in a  16-QSOP  package.  The  MAX14432FSEVKIT#  can be  used  to  evaluate  the  electrical  performance  of  the MAX14430EAEE+  and MAX14431CAEE+  with the MAX14430EASE+ or MAX14431CASE+ installed as U1.

## Features

- Broad Range of Data Transfer Rates (from DC to 200Mbps)
- Four Unidirectional Channels with 3 Different Channel Direction Configurations
- SMA Connectors for Easy Connection to External Equipment
- Wide Power Supply Voltage Range from 1.71V to 5.5V
- Guaranteed Up to 3.75kV RMS  Isolation for the Narrow-Body SOIC Package for 60s

Ordering Information appears at end of data sheet.

## Evaluates: MAX14430-MAX14432 MAX14430-MAX14432 Evaluation Kit

Figure 1. Narrow-Body MAX14431FSEVKIT#

<!-- image -->

│

## MAX14430-MAX14432 Evaluation Kit

## Quick Start

## Required Equipment

- MAX14430FS, MAX14431FS, or MAX14432FS EV kit
- Two DC power supplies with output range of 1.71V to 5.5V
- Signal/function generator
- Oscilloscope

## Procedure

The  MAX14430FS,  MAX14431FS,  and  MAX14432FS EV kits are fully assembled and ready for evaluation. For manual verification follow the steps below to verify board functionality:

- 1) Verify jumper settings. See T able 2 for all shunt positions.
- J1 and J2 are closed.
- Jumper ENA is either in 1-2 position if U1 ENA (pin 7) has active-high polarity, or in 2-3 position if U1 ENA (pin 7) has active-low polarity.
- Jumper ENB is in 1-2 position.

## Table 2. MAX1443XS EV Kits Board Connectors and Shunt Positions

| CONNECTOR   | SHUNT POSITION   | DESCRIPTION                                                                                                                                      |
|-------------|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
|             | SIDE A           | SIDE A                                                                                                                                           |
| HEADER1     | 1                | Test point or input header for V DDA                                                                                                             |
| HEADER1     | 2                | Test point or input header for GNDA                                                                                                              |
| HEADER1     | 3                | Test point or input header for I/O; same as A1 SMA                                                                                               |
| HEADER1     | 4                | Test point or input header for I/O; same as A2 SMA                                                                                               |
| HEADER1     | 5                | Test point or input header for I/O; same as A3 SMA                                                                                               |
| HEADER1     | 6                | Test point or input header for I/O; same as A4 SMA                                                                                               |
| HEADER1     | 7                | Test point or input header for side A enable; same as ENAjumper pin 2                                                                            |
| HEADER1     | 8                | Test point or input header for GNDA                                                                                                              |
| A1 (SMA)    | n/a              | I/O on side A                                                                                                                                    |
| A2 (SMA)    | n/a              | I/O on side A                                                                                                                                    |
| A3 (SMA)    | n/a              | I/O on side A                                                                                                                                    |
| A4 (SMA)    | n/a              | I/O on side A                                                                                                                                    |
| J1          | Open             | Use current meter to measure current of side A                                                                                                   |
| J1          | 1-2*             | Connect power supply to V DDA                                                                                                                    |
| ENA         | 1-2*             | Connect side A enable pin to V DDA ; side A outputs are enabled if ENAis active-high or high-impedance if active-low. Default setting on EV kits |
| ENA         | 2-3              | Connect side A enable pin to GNDA; side A outputs are high-impedance if ENAis active- high or enabled if active-low.                             |

│

## Evaluates: MAX14430-MAX14432

- 2) Connect one DC power supply between the EV kit's TP\_VDDA  and  TP\_GNDA  test  points;  connect  the other DC power supply between TP\_VDDB and TP\_ GNDB test points.
- 3) Set  both  DC  power  supply  outputs  between  1.71V and 5.5V, and then enable the power supply outputs. Note: It is also possible to power the EV kits from a single power supply to test electrical parameters but this invalidates the digital isolation of the IC.
- 4) Connect  the  signal/function  generator  to  the  SMA connector  or  test  point  of  side  A  and  observe  the isolated  signal  on  the  corresponding  side  B  output, using an oscilloscope.

Table 2. MAX1443XS EV Kits Board Connectors and Shunt Positions (continued)

| CONNECTOR   | SHUNT POSITION   | DESCRIPTION                                                                                 |
|-------------|------------------|---------------------------------------------------------------------------------------------|
| SIDE B      | SIDE B           | SIDE B                                                                                      |
| HEADER2     | 1                | Test point or input header for V DDB                                                        |
| HEADER2     | 2                | Test point or input header for GNDB                                                         |
| HEADER2     | 3                | Test point or input header for I/O; same as B1 SMA                                          |
| HEADER2     | 4                | Test point or input header for I/O; same as B2 SMA                                          |
| HEADER2     | 5                | Test point or input header for I/O; same as B3 SMA                                          |
| HEADER2     | 6                | Test point or input header for I/O; same as B4 SMA                                          |
| HEADER2     | 7                | Test point or input header for side B enable; same as ENB jumper pin 2                      |
| HEADER2     | 8                | Test point or input header for GNDB                                                         |
| B1 (SMA)    | n/a              | I/O on side B                                                                               |
| B2 (SMA)    | n/a              | I/O on side B                                                                               |
| B3 (SMA)    | n/a              | I/O on side B                                                                               |
| B4 (SMA)    | n/a              | I/O on side B                                                                               |
| J2          | Open             | Use current meter to measure current of side B                                              |
| J2          | 1-2*             | Connect power supply to V DDB                                                               |
| ENB         | 1-2*             | Connect side B enable pin to V DDB ; side B outputs are enabled. Default setting on EV kits |
| ENB         | 2-3              | Connect side B enable pin to GNDB; side B outputs are high-impedance.                       |

## Table 3. EV Kits Test Points

| TEST POINT   | DESCRIPTION                     |
|--------------|---------------------------------|
| SIDE A       | SIDE A                          |
| TP_VDDA      | Test point for V DDA            |
| TP_GNDA      | Test point for GNDA             |
| TPA1         | Test point for SMAconnector A1  |
| TPA2         | Test point for SMAconnector A2  |
| TPA3         | Test point for SMAconnector A3  |
| TPA4         | Test point for SMAconnector A4  |
| TP_ENA       | Test point for jumper ENApin 2  |
| SIDE B       | SIDE B                          |
| TP_VDDB      | Test point for V DDB            |
| TP_GNDB      | Test point for GNDB             |
| TPB1         | Test point for SMAconnector B1  |
| TPB2         | Test point for SMAconnector B2  |
| TPB3         | Test point for SMAconnector B3  |
| TPB4         | Test point for SMAconnector B4  |
| TP_ENB       | Test point for jumper ENB pin 2 |

│

## MAX14430-MAX14432 Evaluation Kit

## Detailed Description of Hardware

The  EV  kits  are  powered  from  two  power  supplies  as described below.

## External Power Supplies

Power to the MAX14430FS, MAX14431FS, and MAX14432FS EV kits are derived from two external sources which  can  both  be  between  +1.71V  and  +5.5V.  Connect one source between the V DDA  and GNDA test points, and the other source between the V DDB  and GNDB test points. Each supply can be set independently and can be present over the entire range from 1.71V to 5.5V, regardless of the level  or  presence  of  the  other  supply.  The  MAX14430MAX14432  level-shift  the  data,  transmitting  them  across the isolation barrier.

Four  SMA  connectors  on  each  side  of  the  board  allow easy connections to signal generator(s) and oscilloscope. A typical test setup is shown in Figure 2.

## Decoupling Capacitors

Each  power  supply  is  decoupled  with  a  10µF  ceramic capacitor in parallel with a 0.1µF ceramic capacitor, which are placed close to the U1 V DDA  or V DDB  pin.

## Evaluates: MAX14430-MAX14432

## Termination

Each  input  and  output  has  an  unpopulated  0603  SMT resistor (RA1-RA4, RB1-RB4) and an unpopulated 0603 SMT capacitor  (CA1-CA4,  CB1-CB4)  to  GND\_  to  allow termination based on customer requirements.

## Shunt Positions

Jumpers  J1  and  J2  are  installed  between  the  external power supplies and U1 power supply pins to allow supply current measurement. Uninstall the J1 and J2 shunts and connect current meters on both side A and side B to measure the MAX14430-MAX14432 supply current.

Jumper  ENA  is  provided  to  enable  or  disable  the  side A  of  the  isolator  channels.  To  enable  the  devices  with active-high enable pin on the side A (MAX1443\_B/C/E/F), connect the ENA shunt to V DDA . To enable the devices with active-low enable pin on the side A (MAX14431R/S/ U/V), connect the ENA shunt to GNDA. The side A outputs are high-impedance when disabled.

Jumper ENB is provided to enable or disable the side B of the isolator channels. Connect the ENB shunt to V DDB  to enable the side B channels, or connect to GNDB to disable the side B channels. The side B outputs are high-impedance when disabled. See Table 2 for all shunt positions.

Figure 2. MAX14431FS EV Kit Typical Test Setup

<!-- image -->

│

## Ordering Information

| PART              | TYPE                                |
|-------------------|-------------------------------------|
| MAX14430FSEVKIT#* | EV kit with installed MAX14430FASE+ |
| MAX14431FSEVKIT#* | EV kit with installed MAX14431FASE+ |
| MAX14432FSEVKIT#  | EV kit with installed MAX14432FASE+ |

#Denotes RoHS compliant.

*Future Product-Contact factory for availability.

## MAX14430-MAX14432 EV Kit Bill of Materials

|   ITEM | REF_DES               | DNI/ DNP   |   QTY | MFG PART #                                                                                                | MFG                             | VALUE                    | DESCRIPTION                                                                                                             |
|--------|-----------------------|------------|-------|-----------------------------------------------------------------------------------------------------------|---------------------------------|--------------------------|-------------------------------------------------------------------------------------------------------------------------|
|      1 | A1-A4, B1-B4          | -          |     8 | 142-0701-851                                                                                              | JOHNSON COMPONENTS              | 142-0701-851             | CONNECTOR; END LAUNCH JACK RECEPTACLE; BOARDMOUNT; STRAIGHT THROUGH; 2PINS;                                             |
|      2 | C1, C2                | -          |     2 | ECJ-1VB1H104K; GRM188R71H104KA; CGJ3E2X7R1H104K080AA; C1608X7R1H104K080AA; CL10B104KB8NFN; CL10B104KB8NNN | PANASONIC; MURATA; TDK; SAMSUNG | 0.1UF                    | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;                             |
|      3 | C3, C4                | -          |     2 | CL21B106KOQNNN                                                                                            | SAMSUNG ELECTRONICS             | 10UF                     | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                               |
|      4 | ENA, ENB              | -          |     2 | PEC03SAAN                                                                                                 | SULLINS                         | PEC03SAAN                | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                               |
|      5 | HEADER1, HEADER2      | -          |     2 | PEC08SAAN                                                                                                 | SULLINS ELECTRONICS CORP.       | PEC08SAAN                | CONNECTOR; MALE; THROUGH HOLE; .100IN CONTACT CENTER; MALE BREAKAWAY HEADER ; STRAIGHT; 8PINS                           |
|      6 | J1, J2                | -          |     2 | PEC02SAAN                                                                                                 | SULLINS                         | PEC02SAAN                | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                               |
|      7 | MTH1-MTH4             | -          |     4 | EVKIT_STANDOFF_4- 40_3/8                                                                                  | ?                               | EVKIT_STAND OFF_4-40_3/8 | KIT; ASSY-STANDOFF 3/8IN; 1PC. STANDOFF/FEM/HEX/4-40IN/(3/8IN)/NYLON; 1PC. SCREW/SLOT/PAN/4-40IN/(3/8IN)/NYLON          |
|      8 | SU1-SU4               | -          |     4 | STC02SYAN                                                                                                 | SULLINS ELECTRONICS CORP.       | STC02SYAN                | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL |
|      9 | TPA1-TPA4, TPB1- TPB4 | -          |     8 | 5004                                                                                                      | KEYSTONE                        | N/A                      | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;     |
|     10 | TP_ENA, TP_ENB        | -          |     2 | 5002                                                                                                      | KEYSTONE                        | N/A                      | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                   |

TEST POINT; PIN DIA=0.1IN; TOTAL

LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK;

PHOSPHOR BRONZE WIRE SILVER PLATE

FINISH;

TEST POINT; PIN DIA=0.1IN; TOTAL

LENGTH=0.3IN; BOARD HOLE=0.04IN; RED;

PHOSPHOR BRONZE WIRE SILVER PLATE

FINISH;

EVKIT PART-IC; MAX1443X SERIES; PACKAGE

DWG NO.: 21-0041; PACKAGE LAND PATTERN:

90-0442; NSOIC16

PACKAGE OUTLINE 0603 NON-POLAR

CAPACITOR

PACKAGE OUTLINE 0603 RESISTOR

PCB Board:MAX1443X S EVALUATION KIT

11

12

13

14

15

16

TOTAL

TP\_GNDA,

TP\_GNDB

TP\_VDDA,

TP\_VDDB

U1

CA1-CA4, CB1-CB4

RA1-RA4, RB1-RB4

PCB

-

-

-

DNP

DNP

-

2

2

1

0

0

1

42

5001

5000

MAX1443X\_S

N/A

N/A

MAX1443XS

KEYSTONE

KEYSTONE

MAXIM

N/A

N/A

MAXIM

Evaluates: MAX14430-MAX14432

N/A

N/A

MAX1443X\_S

OPEN

OPEN

PCB

## MAX14430-MAX14432 EV Kit Schematic

<!-- image -->

│

## Evaluates: MAX14430-MAX14432 MAX14430-MAX14432 Evaluation Kit

## MAX14430-MAX14432 EV Kit PCB Layout Diagrams

MAX14430-MAX14432 EV Kit-Top Silkscreen

<!-- image -->

MAX14430-MAX14432 EV Kit-Top

<!-- image -->

│

## Evaluates: MAX14430-MAX14432 MAX14430-MAX14432 Evaluation Kit

## MAX14430-MAX14432 EV Kit PCB Layout Diagrams (continued)

MAX14430-MAX14432 EV Kit-L2 GND

<!-- image -->

MAX14430-MAX14432 EV Kit-L3 PWR

<!-- image -->

## Evaluates: MAX14430-MAX14432 MAX14430-MAX14432 Evaluation Kit

## MAX14430-MAX14432 EV Kit PCB Layout Diagrams (continued)

MAX14430-MAX14432 EV Kit-Bottom

<!-- image -->

│

## MAX14430-MAX14432 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                        | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------|-----------------|
|                 0 | 2/18            | Initial release                                    | -               |
|                 1 | 9/19            | Updated General Description , Ordering Information | 1, 6            |
|                 2 | 9/19            | Updated General Description , Ordering Information | 1, 6            |
|                 3 | 9/20            | Updated General Description                        | 1               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied  0a[im ,nteJrated reserves the riJht to chanJe the circuitry and specifications without notice at any time

│

Evaluates: MAX14430-MAX14432