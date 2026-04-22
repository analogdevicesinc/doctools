<!-- lastmod 2023-04-28 -->
<!-- image -->

Evaluates:MAX22163 - MAX22166, MAX22563 - MAX22566, MAX22663-MAX22666

## General Description

The  MAX22563 -MAX22566 evaluation kits (EV kits) provide a proven design to evaluate the MAX22563 -MAX22566, a family of reinforced, six-channel, galvanic digital isolators in a 20-pin SSOP package. Two types of evaluation boards are available to support different channel  direction configurations and  selectable output default settings of the MAX22563 -MAX22566 family. The MAX22565CAEVKIT# is fully assembled and tested, and comes  populated  with  the  MAX22565CAAP+  ( Figure  1 ). The MAX2256XAEVKIT# is a generic board that has U1 unpopulated, allowing to select a device from the MAX22563 -MAX22566 family ( Figure 2 ).  Both  evaluation boards support the 20-pin SSOP package type only. See Table 1 for EV kit options.

The MAX22163-MAX22166 and MAX22663-MAX22666 are functionally equivalent to MAX22563-MAX22566, but in  different  package  types.  The  MAX22163 -MAX22166 come in a 16-pin QSOP and MAX22663 -MAX22666 in a 16-pin wide SOIC package. The MAX22563 -MAX22566 EV  kits  can  be  used  to  evaluate  the  functionality  and electrical performance of the entire family of the devices.

The  EV  kits  should  be  powered  from  two  independent isolated power supplies with nominal output voltage in the range  from  1.71V  to  5.5V.  To  evaluate  the  electrical parameters of the device without any isolation between the two sides, a single power supply can also be used.

The MAX2256XAEVKIT# comes with U1 unpopulated and supports the following digital isolators: MAX22563BAAP+, MAX22563CAAP+, MAX22564BAAP+, MAX22564CAAP+, MAX22565BAAP+,  MAX22565CAAP+,  MAX22566BAAP+, and MAX22566CAAP+.

Note: When ordering the MAX2256XA EV kit, request a sample of the desired MAX22563 -MAX22566 isolator IC that can be soldered to the PCB.

## MAX22563 -MAX22566 Evaluation Kits

## Features

- Broad  Range  of  Data  Transfer  Rates  from  DC  to 200Mbps
- MAX22563 with 3:3 Channel Configuration MAX22564 with 4:2 Channel Configuration MAX22565 with 5:1 Channel Configuration MAX22566 with 6:0 Channel Configuration
- SMA Connectors for Easy Connection to External Equipment
- Wide Power Supply Voltage Range from 1.71V to 5.5V
- Guaranteed up to 3.75kVRMS Isolation for 60s
- -40°C to +125°C Temperature Range
- Proven PCB Layout

Ordering Information appears at end of data sheet.

319-100795; Rev 1; 02/23

## Evaluates:MAX22163 - MAX22166,

MAX22563 - MAX22566,

MAX22663-MAX22666

## EV Kit Photos

Figure 1. MAX22565CA EV Kit

<!-- image -->

Figure 2. MAX2256XA EV Kit

<!-- image -->

## Table 1. EV Kit Options

| EVKIT PART #     | TARGET DEVICE   | PACKAGE TYPE   | COMMENT                                              |
|------------------|-----------------|----------------|------------------------------------------------------|
| MAX22565CAEVKIT# | MAX22565CAAP+   | 20-pin SSOP    | 200Mbps IC Populated                                 |
| MAX2256XAEVKIT#  | Not Populated   | 20-pin SSOP    | Request Samples of Target Device from Analog Devices |

## MAX22563 -MAX22566

## Evaluation Kits

## Quick Start

## Required Equipment

- MAX22565CA or MAX2256XA EV kit
- MAX22563-MAX22566 device if U1 is unpopulated on EV kit
- Two DC power supplies with output range of 1.71V to 5.5V
- Signal/function generator
- Oscilloscope

## Procedures

The MAX22565CA EV kit is fully assembled and ready for evaluation. The MAX2256XA EV kit has everything except the  DUT (U1) installed. The user can install the desired version of the MAX22563-MAX22566 family of reinforced, six-channel, unidirectional digital isolators. Once installed, follow these steps to verify board functionality:

1. Verify  jumper  settings.  See Table  2 for  all  shunt positions. Jumpers ENA, ENB, DEFA, and DEFB are in 1-2 position. ENA is open if U1 is installed with the MAX22566.
2. Connect one DC power supply between the EV kit's VDDA and GNDA test points; connect the other  DC power supply between VDDB and GNDB test points.
3.  Set both DC power supply outputs between 1.71V and 5.5V, and then enable the power supply outputs. Note: It  is  also  possible  to  power  the  EV kits from a single power supply to test electrical parameters, but this invalidates the digital isolation of the IC.
4.  Connect the signal/function generator to an input SMA connector  or  test  point  of  side  A  and  observe  the isolated  signal  on  the  corresponding  side  B  output using  an  oscilloscope.  On  the  MAX22565CA  EV  kit, SMA connectors A1-A5 and B6 are inputs, and SMA connectors B1-B5 and A6 are outputs. See Table 3 for the SMA connector I/O configurations when a different MAX22563-MAX22566 device is installed as U1 on the MAX2256XA EV kit.

Evaluates:MAX22163 - MAX22166,

MAX22563

-

MAX22566,

MAX22663-MAX22666

## MAX22563 -MAX22566 Evaluation Kits

## Table 2. MAX22565CA and MAX2256XA EV Kits Shunt Positions

| CONNECTOR   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                 |
|-------------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SIDE A      | SIDE A           | SIDE A                                                                                                                                                                      |
| J1          | 1                | Test point or input header for VDDA.                                                                                                                                        |
| J1          | 2                | Test point or input header for I/O; same as A1 SMA.                                                                                                                         |
| J1          | 3                | Test point or input header for I/O; same as A2 SMA.                                                                                                                         |
| J1          | 4                | Test point or input header for I/O; same as A3 SMA.                                                                                                                         |
| J1          | 5                | Test point or input header for I/O; same as A4 SMA.                                                                                                                         |
| J1          | 6                | Test point or input header for I/O; same as A5 SMA.                                                                                                                         |
| J1          | 7                | Test point or input header for I/O; same as A6 SMA.                                                                                                                         |
| J1          | 8                | Test point or input header for GNDA.                                                                                                                                        |
| ENA         | 1-2*             | Connect side A enable pin ENA to VDDA. Side A outputs are enabled when ENA is connected to VDDA.                                                                            |
| ENA         | 2-3              | Connect side A enable pin ENA to GNDA. Side A outputs are high-impedance when ENA is connected to GNDA.                                                                     |
| ENA         | Open             | Side A enable pin is not connected when U1 is installed with the MAX22566.                                                                                                  |
| DEFA        | 1-2*             | Connect side A default control pin DEFA to VDDA. Side A output default is set to high when DEFA is connected to VDDA. Jumper DEFA must be set in the same position as DEFB. |
| DEFA        | 2-3              | Connect side A default control pin DEFA to GNDA. Side A output default is set to low when DEFA is connected to GNDA. Jumper DEFA must be set in the same position as DEFB.  |
| SIDE B      | SIDE B           | SIDE B                                                                                                                                                                      |
| J2          | 1                | Test point or input header for VDDB.                                                                                                                                        |
| J2          | 2                | Test point or input header for I/O; same as B1 SMA.                                                                                                                         |
| J2          | 3                | Test point or input header for I/O; same as B2 SMA.                                                                                                                         |
| J2          | 4                | Test point or input header for I/O; same as B3 SMA.                                                                                                                         |
| J2          | 5                | Test point or input header for I/O; same as B4 SMA.                                                                                                                         |
| J2          | 6                | Test point or input header for I/O; same as B5 SMA.                                                                                                                         |
| J2          | 7                | Test point or input header for I/O; same as B6 SMA.                                                                                                                         |
| J2          | 8                | Test point or input header for GNDB.                                                                                                                                        |
| ENA         | 1-2*             | Connect side B enable pin ENB to VDDB. Side B outputs are enabled when ENB is connected to VDDB.                                                                            |
| ENA         | 2-3              | Connect side B enable pin ENB to GNDB. Side B outputs are high-impedance when ENB is connected to GNDB.                                                                     |
| DEFB        | 1-2*             | Connect side B default control pin DEFB to VDDB. Side B output default is set to high when DEFB is connected to VDDB. Jumper DEFB must be set in the same position as DEFA. |
| DEFB        | 2-3              | Connect side B default control pin DEFB to GNDB. Side B output default is set to low when DEFB is connected to GNDB. Jumper DEFB must be set in the same position as DEFA.  |

*Default Configuration.

Evaluates:MAX22163 - MAX22166, MAX22563 - MAX22566, MAX22663-MAX22666

Table 3. MAX22565CA and MAX2256XA EV Kits Connector Configurations

| CONNECTOR   | U1 DEVICE     | U1 DEVICE     | U1 DEVICE     | U1 DEVICE     |
|-------------|---------------|---------------|---------------|---------------|
|             | MAX22563      | MAX22564      | MAX22565      | MAX22566      |
| SIDE A      | SIDE A        | SIDE A        | SIDE A        | SIDE A        |
| A1 (SMA)    | IN1           | IN1           | IN1           | IN1           |
| A2 (SMA)    | IN2           | IN2           | IN2           | IN2           |
| A3 (SMA)    | IN3           | IN3           | IN3           | IN3           |
| A4 (SMA)    | OUT4          | IN4           | IN4           | IN4           |
| A5 (SMA)    | OUT5          | OUT5          | IN5           | IN5           |
| A6 (SMA)    | OUT6          | OUT6          | OUT6          | IN6           |
| REFA1 (SMA) | I/O on Side A | I/O on Side A | I/O on Side A | I/O on Side A |
| REFA2 (SMA) | I/O on Side A | I/O on Side A | I/O on Side A | I/O on Side A |
| SIDE B      | SIDE B        | SIDE B        | SIDE B        | SIDE B        |
| B1 (SMA)    | OUT1          | OUT1          | OUT1          | OUT1          |
| B2 (SMA)    | OUT2          | OUT2          | OUT2          | OUT2          |
| B3 (SMA)    | OUT3          | OUT3          | OUT3          | OUT3          |
| B4 (SMA)    | IN4           | OUT4          | OUT4          | OUT4          |
| B5 (SMA)    | IN5           | IN5           | OUT5          | OUT5          |
| B6 (SMA)    | IN6           | IN6           | IN6           | OUT6          |
| REFB1 (SMA) | I/O on Side B | I/O on Side B | I/O on Side B | I/O on Side B |
| REFB2 (SMA) | I/O on Side B | I/O on Side B | I/O on Side B | I/O on Side B |

## Evaluates:MAX22163 -MAX22166, MAX22563 -MAX22566, MAX22663-MAX22666

## Detailed Description of Hardware

The MAX22563-MAX22566 EV kits evaluate the features of the MAX22563-MAX22566, a family of reinforced, six -channel, galvanic digital isolators.

## External Power Supplies

Power to the MAX22565CA and MAX2256XA EV kits is derived from two external sources, which can both be between +1.71V and +5.5V. Connect one source between the VDDA and GNDA test points, and the other source between the VDDB and GNDB test points. Each supply can be set independently and can be present over the entire range from +1.71V to  +5.5V,  regardless  of  the  level  or  presence  of  the  other  supply.  The  MAX22563-MAX22566  level -shift  the  data, transmitting them across the isolation barrier.

Six SMA connectors on each side of the board allow easy connections to signal generator(s) and an oscilloscope. A typical test setup is shown in Figure 3 .

## Decoupling Capacitors

Each power supply is decoupled with a 1μF ceramic capacitor in parallel with a 0.1μF ceramic capacitor, which are placed close to the U1 VDDA and VDDB pins.

## Shunt Positions

Jumpers ENA and ENB are provided to enable or disable the outputs of the MAX22563-MAX22566 isolator channels.

Connect the ENA shunt to VDDA to enable side A outputs or connect to GNDA to disable them. Side A outputs are highimpedance when disabled. Connect the ENB shunt to VDDB to enable side B outputs or connect to GNDB to disable them. Side B outputs are high-impedance when disabled. Leave ENA open if U1 is installed with the MAX22566.

The MAX22563-MAX22566 feature user -selectable default-high or default-low outputs. To configure the default level of both side A and side B outputs to high, connect the DEFA shunt to VDDA and the DEFB shunt to VDDB. To configure the default level of the outputs to low, connect the DEFA shunt to GNDA and the DEFB shunt to GNDB. Ensure the logic state of the DEFA is the same as that for DEFB. Configure the DEFA and DEFB shunts before powering up the board and  do  not  toggle  them  during  normal  operation.  See Table  2 for  all  shunt  positions  and Table  3 for  connector configurations.

## I/O Traces Impedance Control

The input and output traces of all six isolation channel s have an impedance control of 50Ω. A 20Ω series resistor is added to all input and output channels; along with the internal series resistance, it can provide 50Ω impedance matching with external equipment such as function generators or oscilloscopes.

## Output Load

Each output has an unpopulated 0402 SMT resistor (RA1 -RA6, RB1 -RB6) and an unpopulated 0402 SMT capacitor (CA1 -CA6, CB1 -CB6) to GND\_ to allow different loads based on customer requirements.

## Calibration Channels

Two reference channels (REFA1 -REFB1, REFA2 -REFB2) are implemented on the EV kits to help calibrate the test setup for timing measurements such as propagation delay. Measure the propagation delay (tPD\_REF) using the reference channel first to determine the delay introduced by the test setup. Measure the propagation delay (tPD\_ISO) again using one of the MAX22563-MAX22566 data channels. The calibrated isolator delay is t PD\_ISO - tPD\_REF.

## MAX22563 -MAX22566 Evaluation Kits

Evaluates:MAX22163 -MAX22166, MAX22563 -MAX22566, MAX22663-MAX22666

Figure 3. MAX22565CA EV Kit Typical Test Setup

<!-- image -->

## U1 on the MAX2256XA EV Kit

U1 on the MAX2256XAEVKIT# is not installed. The user can install the desired version of the MAX22563-MAX22566 family of sixchannel unidirectional digital isolators. The MAX22563-MAX22566 family offers four unidirectional channel configurations. The MAX22566 features all six channels transferring digital signals in one direction. SMA connectors A1-A6 on side A are input connectors and B1B6 on side B are output connectors if the MAX22566 is installed as U1. The MAX22565 has five channels transmitting data in one direction and one channel transmitting in the opposite direction.

Evaluates:MAX22163 -MAX22166, MAX22563 -MAX22566, MAX22663-MAX22666

## MAX22563 -MAX22566 Evaluation Kits

SMA connectors A1 -A5 and B6 are input connectors and B1 -B5 and A6 are output connectors if the MAX22565 is installed as U1. The MAX22564 has four channels transmitting data in one direction and two channels transmitting in the opposite direction. SMA connectors A1 -A4 and B5 -B6 are input connectors and B1 -B4 and A5 -A6 are output connectors if the MAX22564 is installed as U1. The MAX22563 provides three channels in each direction. SMA connectors A1 -A3 and B4 -B6 are input connectors and B1 -B3 and A4 -A6 are output connectors if the MAX22563 is installed as U1. See Table 3 for SMA connector I/O configurations with different U1 selection.

When installing U1, make sure pin 1 of the device is mounted onto pin 1 of U1 on the PCB. Pin 1 is located at the upper left corner of U1, denoted by a white dot on the silkscreen.

## Ordering Information

| PART             | TYPE                                |
|------------------|-------------------------------------|
| MAX22565CAEVKIT# | EV Kit with Installed MAX22565CAAP+ |
| MAX2256XAEVKIT#  | EV Kit for 20-pin SSOP Package      |

#Denotes RoHS-compliant.

Evaluates:MAX22163 - MAX22166,

MAX22563 - MAX22566,

MAX22663-MAX22666

## MAX22563 -MAX22566 EV Kit Bill of Materials

|   ITEM | REF_DES                                   | DNP   |   QTY | MFG PART #                                                                            | MANUFACTURER                            | VALUE        | DESCRIPTION                                                                                                                                                                                |
|--------|-------------------------------------------|-------|-------|---------------------------------------------------------------------------------------|-----------------------------------------|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 | A1-A6, B1- B6, REFA1, REFA2, REFB1, REFB2 |       |    16 | 142-0701-851                                                                          | JOHNSON COMPONENTS                      | 142-0701-851 | CONNECTOR; END LAUNCH JACK RECEPTACLE; BOARDMOUNT; STRAIGHT THROUGH; 2PINS;                                                                                                                |
|      2 | C1, C2                                    |       |     2 | CC0603KRX7R0BB 104; GRM188R72A104K A35; HMK107B7104KA;0 6031C104KAT2A; GRM188R72A104K | YAGEO; MURATA; TAIYO YUDEN; AVX; MURATA | 0.1UF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                |
|      3 | C3, C4                                    |       |     2 | GRM21BR71H105K A12; CL21B105KBFNNN; C2012X7R1H105K0 85AC; UMK212B7105KG               | MURATA; SAMSUNG ELECTRONICS; TDK        | 1UF          | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                   |
|      4 | DEFA, DEFB, ENA, ENB                      |       |     4 | PEC03SAAN                                                                             | SULLINS                                 | PEC03SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                                                                  |
|      5 | J1, J2                                    |       |     2 | 5-146128-6                                                                            | TE CONNECTIVITY                         | 5-146128-6   | CONNECTOR; MALE; SMT; BREAKAWAY; STRAIGHT; 8PINS                                                                                                                                           |
|      6 | R1-R12                                    |       |    12 | CRCW040220R0FK                                                                        | VISHAY DALE                             | 20           | RESISTOR; 0402; 20 OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                                                                                     |
|      7 | SPACER1- SPACER4                          |       |     4 | 9032                                                                                  | KEYSTONE                                | 9032         | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                                                  |
|      8 | SU1-SU4                                   |       |     4 | S1100-B; SX1100-B; STC02SYAN                                                          | KYCON; KYCON; SULLINS ELECTRONICS CORP. | SX1100-B     | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT; PHOSPHOR BRONZE CONTACT=GOLD PLATED                                                                                   |
|      9 | A, TP1_GND B, TP2_GND A, TP2_GND B        |       |     4 | 5011                                                                                  | KEYSTONE                                | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                    |
|     10 | U1                                        |       |     1 | MAX2256X                                                                              | MAXIM                                   | MAX2256X     | EVKIT PART - IC; MAX2256X; OPTION FOR IMPROVED HV ISOLATION; CLEARANCE/CREEPAGE OF 5.5MM; PACKAGE OUTLINE DRAWING: 21- 0056; LAND PATTERN DRAWING: 90- 0094; PACKAGE CODE: A20MS+7; SSOP20 |
|     11 | VDDA, VDDB                                |       |     2 | 5010                                                                                  | KEYSTONE                                | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                                                      |
|     12 | PCB                                       |       |     1 | MAX2256XA                                                                             | MAXIM                                   | PCB          | PCB:MAX2256XA                                                                                                                                                                              |
|     13 | RA1-RA6, RB1-RB6                          | DNP   |     0 | N/A                                                                                   | N/A                                     | OPEN         | PACKAGE OUTLINE 0402 RESISTOR                                                                                                                                                              |
|     14 | CA1-CA6, CB1-CB6                          | DNP   |     0 | N/A                                                                                   | N/A                                     | OPEN         | PACKAGE OUTLINE 0402 NON-POLAR CAPACITOR                                                                                                                                                   |

## MAX22563 -MAX22566 Evaluation Kits

Evaluates:MAX22163 - MAX22166, MAX22563 - MAX22566, MAX22663-MAX22666

## MAX22563 -MAX22566 EV Kit Schematic

<!-- image -->

## Evaluates:MAX22163 - MAX22166, MAX22563 - MAX22566, MAX22663-MAX22666

## MAX22563 -MAX22566 EV Kit PCB Layout

<!-- image -->

MAX22563 -MAX22566 EV Kit PCB Layout -Top Silkscreen        MAX22563

<!-- image -->

-MAX22566 EV Kit PCB Layout -Top Layer

Evaluates:MAX22163 - MAX22166,

MAX22563 - MAX22566,

MAX22663-MAX22666

<!-- image -->

## MAX22563 -MAX22566 Evaluation Kits

MAX22563 -MAX22566 EV Kit PCB Layout -Layer 2 GND            MAX22563

<!-- image -->

-MAX22566 EV Kit PCB Layout -Layer 3 PWR

MAX22563 -MAX22566 EV Kit PCB Layout -Bottom Layer

<!-- image -->

## Evaluates:MAX22163

- MAX22166,

MAX22563 - MAX22566,

MAX22663-MAX22666

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                  | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------|-----------------|
|                 0 | 10/21           | Release for Market Intro                                     | -               |
|                 1 | 02/23           | Added evaluation for MAX22163-MAX22166 and MAX22663-MAX22666 | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## MAX22563 -MAX22566

## Evaluation Kits