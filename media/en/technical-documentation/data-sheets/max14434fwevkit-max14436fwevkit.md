<!-- lastmod 2022-08-04 -->
## MAX14434-MAX14436 Evaluation Kit

## General Description

The MAX14434-MAX14436  evaluation  kit (EV kit) provides  a  proven  design  to  evaluate  the  MAX14434MAX14436  four-channel  unidirectional  digital  isolators. Three  types  of  evaluation  boards  are  available  to  support different channel direction configurations of the MAX14434-MAX14436  family.  All  evaluation  boards support  the  wide-body  16-pin  SOIC  package  type.  See Table 1 for EV kit options.

The  EV  kit  should  be  powered  from  two  independent isolated  power  supplies  with  nominal  output  voltage  in range  from  1.71V  to  5.5V.  For  evaluating  the  electrical parameters of the device without any isolation between the two sides, a single power supply can also be used.

The MAX14434FWEVKIT# comes populated with MAX14434FAWE+,  but  can  also  be used to evaluate the following digital  isolators:  MAX14434BAWE+, MAX14434CAWE+, MAX14434EAWE+. The MAX14435FWEVKIT# comes populated with the MAX14435FAWE+  but  can  also  be  used  to  evaluate  the following isolators: MAX14435CAWE+, MAX14435BAWE+, MAX14435EAWE+, MAX14435RAWE+, MAX14435SAWE+, MAX14435UAWE+, and MAX14435VAWE+.

The MAX14436WEVKIT# comes populated with the  MAX14436FAWE+,  but can also be used to evaluate the following digital isolators: MAX14436BAWE+, MAX14436CAWE+, MAX14436EAWE+.

## Table 1. EV Kit Options

| EVKIT PART #     | TARGET DEVICE   | PACKAGE TYPE      | COMMENT              |
|------------------|-----------------|-------------------|----------------------|
| MAX14434FWEVKIT# | MAX14434FAWE+   | 16-SOIC wide-body | 200Mbps IC populated |
| MAX14435FWEVKIT# | MAX14435FAWE+   | 16-SOIC wide-body | 200Mbps IC populated |
| MAX14436FWEVKIT# | MAX14436FAWE+   | 16-SOIC wide-body | 200Mbps IC populated |

<!-- image -->

Evaluates: MAX14434-MAX14436

## Features

- Broad Range of Data Transfer Rates (from DC to 200Mbps)
- Four Unidirectional Channels with 3 Different Channel Direction Configurations
- SMA Connectors for Easy Connection to External Equipment
- Wide Power Supply Voltage Range from 1.71V to 5.5V
- Guaranteed Up to 5kV RMS  Isolation for the WideBody SOIC Package for 60s

Ordering Information appears at end of data sheet.

## Evaluates: MAX14434-MAX14436 MAX14434-MAX14436 Evaluation Kit

Figure 1. Photograph of Evaluation Kit

<!-- image -->

│

## MAX14434-MAX14436 Evaluation Kit

## Quick Start

## Required Equipment

- MAX14434FW, MAX14435FW, or MAX14436FW
- Two DC power supplies with output range of 1.71V to 5.5V
- Signal/function generator
- Oscilloscope

## Procedure

The  MAX14434FW,  MAX14435FW,  and  MAX14436FW EV kits are fully assembled and ready for evaluation. For manual verification  follow the steps below to verify board functionality:

- 1) Verify  jumper  settings.  See  Table  2  for  all  shunt positions.
- J1 and J2 are closed.
- Jumper ENA is either in 1-2 position if U1 ENA (pin 7) has active-high polarity, or in 2-3 position if U1 ENA (pin 7) has active-low polarity.
- Jumper ENB is in 1-2 position.
- 2) Connect one DC power supply between the EV kit's TP\_VDDA  and  TP\_GNDA  test  points;  connect  the other DC power supply between TP\_VDDB and TP\_ GNDB test points.
- 3) Set  both  DC  power  supply  outputs  between  1.71V and 5.5V, and then enable the power supply outputs. Note: It is also possible to power the EV kits from a single power supply to test electrical parameters but this invalidates the digital isolation of the IC.
- 4) Connect the signal/function generator to an input SMA connector or test point of side  A and observe the isolated signal on the corresponding side B output, using an oscilloscope.

## Evaluates: MAX14434-MAX14436

## Table 2. EV Kits Board Connectors and Shunt Positions

| CONNECTOR   | SHUNT POSITION   | DESCRIPTION                                                                                                           |
|-------------|------------------|-----------------------------------------------------------------------------------------------------------------------|
| HEADER1     | 1                | Test point or input header for V DDA                                                                                  |
| HEADER1     | 2                | Test point or input header for GNDA                                                                                   |
| HEADER1     | 3                | Test point or input header for I/O; same as A1 SMA                                                                    |
| HEADER1     | 4                | Test point or input header for I/O; same as A2 SMA                                                                    |
| HEADER1     | 5                | Test point or input header for I/O; same as A3 SMA                                                                    |
| HEADER1     | 6                | Test point or input header for I/O; same as A4 SMA                                                                    |
| HEADER1     | 7                | Test point or input header for side A enable; same as ENAjumper pin 2                                                 |
| HEADER1     | 8                | Test point or input header for GNDA                                                                                   |
| A1 (SMA)    | n/a              | I/O on side A                                                                                                         |
| A2 (SMA)    | n/a              | I/O on side A                                                                                                         |
| A3 (SMA)    | n/a              | I/O on side A                                                                                                         |
| A4 (SMA)    | n/a              | I/O on side A                                                                                                         |
| J1          | Open             | Use current meter to measure current of side A                                                                        |
| J1          | 1-2*             | Connect power supply to V DDA                                                                                         |
| ENA         | 1-2*             | Connect side A enable pin to V DDA ; side A outputs are enabled if ENAis active-high or high-impedance if active-low. |
| ENA         | 2-3              | Connect side A enable pin to GNDA; side A outputs are high-impedance if ENAis active-high or enabled if active-low.   |

│

## Table 2. EV Kits Board Connectors and Shunt Positions (continued)

| CONNECTOR   | SHUNT POSITION   | DESCRIPTION                                                                                                           |
|-------------|------------------|-----------------------------------------------------------------------------------------------------------------------|
|             | SIDE B           | SIDE B                                                                                                                |
| HEADER2     | 1                | Test point or input header for V DDB                                                                                  |
| HEADER2     | 2                | Test point or input header for GNDB                                                                                   |
| HEADER2     | 3                | Test point or input header for I/O; same as B1 SMA                                                                    |
| HEADER2     | 4                | Test point or input header for I/O; same as B2 SMA                                                                    |
| HEADER2     | 5                | Test point or input header for I/O; same as B3 SMA                                                                    |
| HEADER2     | 6                | Test point or input header for I/O; same as B4 SMA                                                                    |
| HEADER2     | 7                | Test point or input header for side B enable; same as ENB jumper pin 2                                                |
| HEADER2     | 8                | Test point or input header for GNDB                                                                                   |
| B1 (SMA)    | n/a              | I/O on side B                                                                                                         |
| B2 (SMA)    | n/a              | I/O on side B                                                                                                         |
| B3 (SMA)    | n/a              | I/O on side B                                                                                                         |
| B4 (SMA)    | n/a              | I/O on side B                                                                                                         |
| J2          | Open             | Use current meter to measure current of side B                                                                        |
| J2          | 1-2*             | Connect power supply to V DDB                                                                                         |
| ENB         | 1-2*             | Connect side B enable pin to V DDB ; side B outputs are enabled if ENB is active high or high-impedance if active-low |
| ENB         | 2-3              | Connect side B enable pin to GNDB; side B outputs are high-impedance.                                                 |

*Default configuration

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

## MAX14434-MAX14436 Evaluation Kit

## Detailed Description of Hardware

The  EV  kits  are  powered  from  two  power  supplies  as described below.

## External Power Supplies

Power to the MAX14434FW, MAX14435FW, and MAX14436FW EV kits is  derived  from  two  external  sources which  can  both  be  between  +1.71V  and  +5.5V.  Connect one source between the V DDA  and GNDA test points, and the other source between the V DDB  and GNDB test points. Each supply can be set independently and can be present over  the  entire  range  from  1.71V  to  5.5V,  regardless  of the level or presence of the other supply. The MAX14434MAX14436  level-shift  the  data,  transmitting  them  across the isolation barrier.

Four  SMA  connectors  on  each  side  of  the  board  allow easy connections to signal generator(s) and oscilloscope. A typical test setup is shown in Figure 2.

## Decoupling Capacitors

Each  power  supply  is  decoupled  with  a  10µF  ceramic capacitor in parallel with a 0.1µF ceramic capacitor, which are placed close to the U1 V DDA  and V DDB  pin.

## Evaluates: MAX14434-MAX14436

## Termination

Each  input  and  output  has  an  unpopulated  0603  SMT resistor (RA1-RA4, RB1-RB4) and an unpopulated 0603 SMT capacitor (CA1-CA4, CB1-CB4) to GND\_ to allow termination based on customer requirements.

## Shunt Positions

Jumpers  J1  and  J2  are  installed  between  the  external power supplies and U1 power supply pins to allow supply current measurement. Uninstall the J1 and J2 shunts and connect current meters on both side A and side B to measure the MAX14434-MAX14436 supply current.

Jumper ENA is provided to enable or disable the side A of the isolator channels. To enable the devices with activehigh enable pin on the side A (MAX1443\_B/C/E/F), connect the ENA shunt to V DDA . To enable the devices with active-low enable pin on the side A (MAX14435R/S/U/V), connect the ENA shunt to GNDA. The side A outputs are high-impedance when disabled.

Jumper ENB is provided to enable or disable the side B of the isolator channels. Connect the ENB shunt to V DDB  to enable the side B channels, or connect to GNDB to disable the side B channels. The side B outputs are high-impedance when disabled. See Table 2 for all shunt positions.

Figure 2. EV Kit Typical Test Setup

<!-- image -->

│

## Ordering Information

| PART             | TYPE                               |
|------------------|------------------------------------|
| MAX14434FWEVKIT# | EVKIT with installed MAX14434FAWE+ |
| MAX14435FWEVKIT# | EVKIT with installed MAX14435FAWE+ |
| MAX14436FWEVKIT# | EVKIT with installed MAX14436FAWE+ |

#Denotes RoHS compliant.

## MAX14434-MAX14436 EV Kit Bill of Materials

|   ITEM | REF_DES              | DNI/DNP   | QT   | MFG PART #                                                                                                | MANUFACTURER                    | VALUE                   | DESCRIPTION                                                                                                             | COMMENTS   |
|--------|----------------------|-----------|------|-----------------------------------------------------------------------------------------------------------|---------------------------------|-------------------------|-------------------------------------------------------------------------------------------------------------------------|------------|
|      1 | A1-A4, B1-B4         | -         | Y 8  | 142-0701-851                                                                                              | JOHNSON COMPONENTS              | 142-0701-851            | CONNECTOR; END LAUNCH JACK RECEPTACLE; BOARDMOUNT; STRAIGHT THROUGH; 2PINS;                                             |            |
|      2 | C1, C2               | -         | 2    | ECJ-1VB1H104K; GRM188R71H104KA; CGJ3E2X7R1H104K080AA; C1608X7R1H104K080AA; CL10B104KB8NFN; CL10B104KB8NNN | PANASONIC; MURATA; TDK; SAMSUNG | 0.1UF                   | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;                             |            |
|      3 | C3, C4               | -         | 2    | CL21B106KOQNNN                                                                                            | SAMSUNG ELECTRONICS             | 10UF                    | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                               |            |
|      4 | ENA, ENB             | -         | 2    | PEC03SAAN                                                                                                 | SULLINS                         | PEC03SAAN               | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                               |            |
|      5 | HEADER1, HEADER2     | -         | 2    | PEC08SAAN                                                                                                 | SULLINS ELECTRONICS CORP.       | PEC08SAAN               | CONNECTOR; MALE; THROUGH HOLE; .100IN CONTACT CENTER; MALE BREAKAWAY HEADER ; STRAIGHT; 8PINS                           |            |
|      6 | J1, J2               | -         | 2    | PEC02SAAN                                                                                                 | SULLINS                         | PEC02SAAN               | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                               |            |
|      7 | MTH1-MTH4            | -         | 4    | EVKIT_STANDOFF_4-40_3/8                                                                                   | ?                               | EVKIT_STANDOFF_4-40_3/8 | KIT; ASSY-STANDOFF 3/8IN; 1PC. STANDOFF/FEM/HEX/4-40IN/ (3/8IN)/NYLON; 1PC. SCREW/SLOT/PAN/4-40IN/(3/8IN)/NYLON         |            |
|      8 | SU1-SU4              | -         | 4    | STC02SYAN                                                                                                 | SULLINS ELECTRONICS CORP.       | STC02SYAN               | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL |            |
|      9 | TPA1-TPA4, TPB1-TPB4 | -         | 8    | 5004                                                                                                      | KEYSTONE                        | N/A                     | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;     |            |
|     10 | TP_ENA, TP_ENB       | -         | 2    | 5002                                                                                                      | KEYSTONE                        | N/A                     | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                   |            |
|     11 | TP_GNDA, TP_GNDB     | -         | 2    | 5001                                                                                                      | KEYSTONE                        | N/A                     | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;      |            |
|     12 | TP_VDDA, TP_VDDB     | -         | 2    | 5000                                                                                                      | KEYSTONE                        | N/A                     | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;        |            |
|     13 | U1                   | -         | 1    | MAX1443X_W                                                                                                | MAXIM                           | MAX1443X_W              | EVKIT PART-IC; MAX1443X SERIES; PACKAGE DWG NO.: 21- 0042; PACKAGE LAND PATTERN: 90-0107; WSOIC16                       |            |
|     14 | CA1-CA4, CB1-CB4     | DNP       | 0    | N/A                                                                                                       | N/A                             | OPEN                    | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                |            |

15

16

TOTAL

RA1-RA4, RB1-RB4

PCB

DNP

-

0

1

42

N/A

MAX1443XW

N/A

MAXIM

OPEN

PCB

PACKAGE OUTLINE 0603 RESISTOR

PCB Board:MAX1443X W EVALUATION KIT

## Evaluates: MAX14434-MAX14436 MAX14434-MAX14436 Evaluation Kit

## MAX14434-MAX14436 EV Kit Schematic

<!-- image -->

│

## Evaluates: MAX14434-MAX14436 MAX14434-MAX14436 Evaluation Kit

## MAX14434-MAX14436 EV Kit PCB Layout Diagrams

MAX14434-MAX14436 EV Kit-Top Silkscreen

<!-- image -->

MAX14434-MAX14436 EV Kit-Top

<!-- image -->

│

## Evaluates: MAX14434-MAX14436 MAX14434-MAX14436 Evaluation Kit

## MAX14434-MAX14436 EV Kit PCB Layout Diagrams (continued)

MAX14434-MAX14436 EV Kit-L2 GND

<!-- image -->

MAX14434-MAX14436 EV Kit-L3 PWR

<!-- image -->

## Evaluates: MAX14434-MAX14436 MAX14434-MAX14436 Evaluation Kit

## MAX14434-MAX14436 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX14434-MAX14436 EV Kit-Bottom

## MAX14434-MAX14436 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------------------------------------|-----------------|
|                 0 | 7/17            | Initial release                                                                            | -               |
|                 1 | 2/19            | Removed future product designation from MAX14434FWEVKIT# in the Ordering Information table | 6               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied  0a[im ,nteJrated reserves the riJht to chanJe the circuitry and specifications without notice at any time

│

Evaluates: MAX14434-MAX14436