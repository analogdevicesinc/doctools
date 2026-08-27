<!-- lastmod 2022-08-04 -->
## MAX22344-MAX22346 Evaluation Kits

## General Description

The  MAX22344-MAX22346  evaluation  kits  (EV  kits) provide  a  proven  design  to  evaluate  the  MAX22344MAX22346,  reinforced,  four-channel,  galvanic  digital isolators.  Two  types  of  evaluation  boards  are  available to  support different channel direction configurations and different  ENA  polarities  of  the  MAX22344-MAX22346 family. The MAX22345CSEVKIT# is fully assembled and tested, and comes populated with the MAX22345CAAP+ (Figure  1).  The  MAX2234XSEVKIT#  is  a  generic  board which has U1 unpopulated allowing the user to select a device from the MAX22344-MAX22346 family (Figure 2). Both evaluation boards support the 20-pin SSOP package type. See Table 1 for EV kit options.

The  EV  kits  should  be  powered  from  two  independent isolated  power  supplies  with  nominal  output  voltage  in range  from  1.71V  to  5.5V.  For  evaluating  the  electrical parameters of the device without any isolation between the two sides, a single power supply can also be used.

The MAX2234XSEVKIT# comes with U1 unpopulated and supports the following digital isolators: MAX22344BAAP+, MAX22344CAAP+,  MAX22345BAAP+,  MAX22345CAAP+, MAX22345RAAP+,  MAX22345SAAP+,  MAX22346BAAP+,

MAX22346CAAP+.

Note : When ordering the MAX2234XS EV kit, the engineer should  request  a  sample  of  the  desired  MAX22344MAX22346 isolator IC that can be soldered to the PCB.

## Table 1. EV Kit Options

| EVKIT PART #     | TARGET DEVICE   | PACKAGE TYPE   | COMMENT                                     |
|------------------|-----------------|----------------|---------------------------------------------|
| MAX22345CSEVKIT# | MAX22345CAAP+   | 20-Pin SSOP    | 200Mbps IC Populated                        |
| MAX2234XSEVKIT#  | Not Populated   | 20-Pin SSOP    | Request Samples of Target Device from Maxim |

<!-- image -->

Evaluates: MAX22344-MAX22346

## Features

- Broad Range of Data Transfer Rates (from DC to 200Mbps)
- Four Unidirectional Channels with 3 Different Channel Direction Configurations
- SMA Connectors for Easy Connection to External Equipment
- Wide Power Supply Voltage Range from 1.71V to 5.5V
- Guaranteed Up to 3.75kV RMS  Isolation for 60s
- -40°C to +125°C Temperature Range
- Proven PCB Layout

Ordering Information appears at end of data sheet.

## MAX22344-MAX22346 Evaluation Kits

Figure 1. MAX22345CS EV KIT

<!-- image -->

## Quick Start

## Required Equipment

- MAX22345CS, or MAX2234XS EV kit
- MAX22344-MAX22346 device, if EV kit is not populated
- Two DC power supplies with output range of 1.71V to 5.5V
- Signal/function generator
- Oscilloscope

## Evaluates: MAX22344-MAX22346

Figure 2. MAX2234XS EV KIT

<!-- image -->

## Procedure

The MAX22345CS EV kit is fully assembled and ready for  evaluation.  The  MAX2234XS  EV  kit  has  everything except  the  DUT  (U1)  installed.  The  user  can  install  the desired  version  of  the  MAX22344-MAX22346  family  of reinforced,  four-channel,  unidirectional  digital  isolators. Once  installed,  follow  the  steps  below  to  verify  board functionality:

│

## MAX22344-MAX22346 Evaluation Kits

- 1) Verify jumper settings. See T able 2 for all shunt positions. · J1 and J2 are closed.
- Jumper ENA is either in 1-2 position if U1 ENA (pin 8) has active-high polarity, or in 2-3 position if U1 ENA (pin 8) has active-low polarity.
- Jumper ENB is in 1-2 position.
- Jumper DEFA and DEFB are in 2-3 position.
- 2) Connect one DC power supply between the EV kit's TP\_VDDA  and TP1\_GNDA test points; connect the other DC power supply between TP\_VDDB and TP1\_ GNDB test points.
- 3) Set  both  DC  power  supply  outputs  between  1.71V and 5.5V, and then enable the power supply output.

Note: It is also possible to power the EV kits from a single power supply to test electrical parameters but this invalidates the digital isolation of the IC.

## Table 2. MAX2234XS EV Kits Board Connectors and Shunt Positions

| CONNECTOR   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                       |
|-------------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SIDE A      | SIDE A           | SIDE A                                                                                                                                                                            |
| J3          | 1                | Test point or input header for V DDA                                                                                                                                              |
| J3          | 2                | Test point or input header for GNDA                                                                                                                                               |
| J3          | 3                | Test point or input header for I/O; same as A1 SMA                                                                                                                                |
| J3          | 4                | Test point or input header for I/O; same as A2 SMA                                                                                                                                |
| J3          | 5                | Test point or input header for I/O; same as A3 SMA                                                                                                                                |
| J3          | 6                | Test point or input header for I/O; same as A4 SMA                                                                                                                                |
| J3          | 7                | Test point or input header for side A default control; same as DEFA jumper pin 2                                                                                                  |
| J3          | 8                | Test point or input header for side A enable; same as ENAjumper pin 2                                                                                                             |
| J3          | 9                | Test point or input header for GNDA                                                                                                                                               |
| J3          | 10               | Test point or input header for GNDA                                                                                                                                               |
| A1 (SMA)    | n/a              | I/O on side A                                                                                                                                                                     |
| A2 (SMA)    | n/a              | I/O on side A                                                                                                                                                                     |
| A3 (SMA)    | n/a              | I/O on side A                                                                                                                                                                     |
| A4 (SMA)    | n/a              | I/O on side A                                                                                                                                                                     |
| J1          | Open             | Use current meter to measure current of side A                                                                                                                                    |
| J1          | 1-2*             | Connect power supply to V DDA                                                                                                                                                     |
| DEFA        | 1-2              | Connect side A default control pin to V DDA ; side A output default is set to high. Jumper DEFA must be set in the same position as DEFB                                          |
| DEFA        | 2-3*             | Connect side A default control pin to GNDA; side A output default is set to low. Jumper DEFA must be set in the same position as DEFB. Default setting on MAX22345CSEVKIT#        |
| ENA         | 1-2*             | Connect sideAenable pin toV DDA ; sideAoutputs are enabled if ENAis active-high (MAX2234_B/C), or high-impedance if active-low (MAX22345R/S). Default setting on MAX22345CSEVKIT# |
| ENA         | 2-3              | Connect side A enable pin to GNDA; side A outputs are high-impedance if ENAis active-high (MAX2234_B/C), or enabled if active-low (MAX22345R/S)                                   |
| ENA         | Open             | Side A enable pin not connected; default setting on MAX2234XSEVKIT#                                                                                                               |

│

## Evaluates: MAX22344-MAX22346

- 4) Connect  the  signal/function  generator  to  an  input SMA connector or test point of side A and observe the isolated signal on the corresponding side B output, using an oscilloscope. On the MAX22345CS EV kit, SMA connectors A1, A2, A3, and B4 are inputs, and SMA  connectors  B1,  B2,  B3,  and  A4  are  outputs. Refer to Table 3 for the SMA connector I/O configura -tions and jumper ENA configuration when a different MAX22344-MAX22346 device is installed as U1 on the MAX2234XS EV kit.

Table 2. MAX2234XS EV Kits Board Connectors and Shunt Positions (continued)

| CONNECTOR   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                |
|-------------|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SIDE B      | SIDE B           | SIDE B                                                                                                                                                                     |
| J4          | 1                | Test point or input header for V DDB                                                                                                                                       |
| J4          | 2                | Test point or input header for GNDB                                                                                                                                        |
| J4          | 3                | Test point or input header for I/O; same as B1 SMA                                                                                                                         |
| J4          | 4                | Test point or input header for I/O; same as B2 SMA                                                                                                                         |
| J4          | 5                | Test point or input header for I/O; same as B3 SMA                                                                                                                         |
| J4          | 6                | Test point or input header for I/O; same as B4 SMA                                                                                                                         |
| J4          | 7                | Test point or input header for side B default control; same as DEFB jumper pin 2                                                                                           |
| J4          | 8                | Test point or input header for side B enable; same as ENB jumper pin 2                                                                                                     |
| J4          | 9                | Test point or input header for GNDB                                                                                                                                        |
| J4          | 10               | Test point or input header for GNDB                                                                                                                                        |
| B1 (SMA)    | n/a              | I/O on side B                                                                                                                                                              |
| B2 (SMA)    | n/a              | I/O on side B                                                                                                                                                              |
| B3 (SMA)    | n/a              | I/O on side B                                                                                                                                                              |
| B4 (SMA)    | n/a              | I/O on side B                                                                                                                                                              |
| J2          | Open             | Use current meter to measure current of side B                                                                                                                             |
| J2          | 1-2*             | Connect power supply to V DDB                                                                                                                                              |
| DEFB        | 1-2              | Connect side B default control pin to V DDB ; side B output default is set to high. Jumper DEFB must be set in the same position as DEFA                                   |
| DEFB        | 2-3*             | Connect side B default control pin to GNDB; side B output default is set to low. Jumper DEFB must be set in the same position as DEFA. Default setting on MAX22345CSEVKIT# |
| ENB         | 1-2*             | Connect side B enable pin to V DDB ; side B outputs are enabled. Default setting on MAX22345CSEVKIT#                                                                       |
| ENB         | 2-3              | Connect side B enable pin to GNDB; side B outputs are high-impedance                                                                                                       |

*Default configuration

Table 3. MAX2234XS EV Kits Connector Configurations

| CONNECTOR           | U1 DEVICE   | U1 DEVICE   | U1 DEVICE   | U1 DEVICE   |
|---------------------|-------------|-------------|-------------|-------------|
| CONNECTOR           | MAX22344B/C | MAX22345B/C | MAX22345R/S | MAX22346B/C |
| SIDE A              |             |             |             |             |
| A1 (SMA)            | IN1         | IN1         | IN1         | IN1         |
| A2 (SMA)            | IN2         | IN2         | IN2         | IN2         |
| A3 (SMA)            | IN3         | IN3         | IN3         | OUT3        |
| A4 (SMA)            | IN4         | OUT4        | OUT4        | OUT4        |
| J3 PIN 8, ENAPIN 2  | ENA         | ENA         | ENA         | ENA         |
| SIDE B              |             |             |             |             |
| B1 (SMA)            | OUT1        | OUT1        | OUT1        | OUT1        |
| B2 (SMA)            | OUT2        | OUT2        | OUT2        | OUT2        |
| B3 (SMA)            | OUT3        | OUT3        | OUT3        | IN3         |
| B4 (SMA)            | OUT4        | IN4         | IN4         | IN4         |
| J4 PIN 8, ENB PIN 2 | ENB         | ENB         | ENB         | ENB         |

│

## MAX22344-MAX22346 Evaluation Kits

## Detailed Description of Hardware

The  MAX22344-MAX22346  EV  kits  allow  the  user  to evaluate the features of the MAX22344-MAX22346 fourchannel digital isolators.

## External Power Supplies

Power  to  the  MAX22345CS  and  MAX2234XS  EV  kits  is derived from two external sources which can both be between +1.71V and +5.5V. Connect one source between the V DDA

## Evaluates: MAX22344-MAX22346

and GNDA test points, and the other source between the VDDB  and  GNDB  test  points.  Each  supply  can  be  set independently  and  can  be  present  over  the  entire  range from +1.71V to +5.5V, regardless of the level or presence of the other supply. The MAX22344-MAX22346 level-shift the data, transmitting them across the isolation barrier.

Four  SMA  connectors  on  each  side  of  the  board  allow easy connections to signal generator(s) and oscilloscope. A typical test setup is shown in Figure 3.

Figure 3. MAX2234XS EV Kit Typical Test Setup

<!-- image -->

│

## Decoupling Capacitors

Each  power  supply  is  decoupled  with  a  1µF  ceramic capacitor in parallel with a 0.1µF ceramic capacitor, which are placed close to the U1 V DDA  and V DDB  pin.

## Shunt Positions

Jumpers  J1  and  J2  are  installed  between  the  external power supplies and U1 power supply pins to allow supply current  measurement.  Uninstall  the  J1  and  J2  shunts and connect current meters on both side A and side B to measure the MAX22344-MAX22346 supply current.

Jumper ENA and ENB are provided to enable or disable the outputs  of  the  MAX22344-MAX22346  isolator  channels. To enable devices with an active-high enable pin (ENA) on side A (MAX2234\_B/C), connect the ENA shunt to V DDA . To enable devices with an active-low enable pin ( ENA ) on side A (MAX22345R/S), connect the ENA shunt to GNDA. Side A outputs are high-impedance when disabled. Connect the ENB shunt to V DDB  to enable side B channels or connect to GNDB to disable side B channels. Side B outputs are highimpedance when disabled.

The MAX22344-MAX22346  feature user-selectable default-high  or  default-low  outputs.  To  configure  the default  level  of  both  side A  and  side  B  outputs  to  high, connect the DEFA shunt to V DDA  and the DEFB shunt to VDDB. To configure the default level of the outputs to low, connect the DEFA shunt to GNDA and the DEFB shunt to GNDB. Ensure the logic state of DEFA is the same as that for  DEFB.  Configure  DEFA  and  DEFB  before  powering up the board and do not toggle DEFA and DEFB during normal operation. See Table 2 for all shunt positions and Table 3 for connector configurations.

## I/O Traces Impedance Control

The input and output traces of all four isolation channels have an impedance control of 50Ω. A 20Ω series resistor is added to all input and output channels; along with the internal series resistance, it can provide 50Ω impedance matching with external equipment such as function generators or oscilloscopes.

## Ordering Information

| PART              | TYPE                                |
|-------------------|-------------------------------------|
| MAX22345CSEVKIT#* | EV Kit with installed MAX22345CAAP+ |
| MAX2234XSEVKIT#   | EV Kit for 20-pin SSOP package      |

#Denotes RoHS compliant.

*Future product-contact factory for availability.

## Evaluates: MAX22344-MAX22346

## Output Load

Each  output  has  an  unpopulated  0603  SMT  resistor (RA1-RA4,  RB1-RB4)  and  an  unpopulated  0603  SMT capacitor  (CA1-CA4,  CB1-CB4)  to  GND\_  to  allow different loads based on customer requirements.

## Calibration Channels

Two reference channels  (REFA1-REFB1,  REFA2REFB2) are implemented on the EV kits to help calibrate the test setup for timing measurements such as propagation delay. Measure  the propagation delay (t PD\_REF ) using the reference channel first to determine the delay introduced by the test setup. Measure the  propagation  delay  (t PD\_ISO )  again  using  one  of  the MAX22344-MAX22346  data  channels.  The  calibrated isolator delay is t PD\_ISO  - t PD\_REF .

## U1 on the MAX2234XS EV Kit

U1  on  the  MAX2234XSEVKIT#  is  not  installed.  The user  can  install  the  desired  version  of  the  MAX22344MAX22346  family  of  four-channel  unidirectional  digital isolators. The MAX22344-MAX22346 family offers three unidirectional  channel  configurations.  The  MAX22344 features  all  four  channels  transferring  digital  signals  in one direction. SMA connectors A1-A4 on side A are input connectors and B1-B4 on side B are output connectors if  the MAX22344 is installed as U1. The MAX22345 has three  channels  transmitting  data  in  one  direction  and one channel transmitting in the opposite direction. SMA connectors  A1-A3  and  B4  are  input  connectors  and B1-B3 and A4 are output connectors if the MAX22345 is installed  as  U1.  The  MAX22346  provides  two  channels in  each  direction.  SMA  connectors A1, A2,  B3,  and  B4 are input connectors and B1, B2, A3 and A4 are output connectors  if  the  MAX22346  is  installed  as  U1.  Refer to  Table  3  for  SMA  connector  I/O  configurations  with different U1 selection.

When  installing  U1,  make  sure  pin  1  of  the  device  is mounted onto pin 1 of U1 on the PCB. Pin 1 is located at the upper-left corner of U1, denoted by a white dot on the silkscreen.

## MAX22344-MAX22346 EV Kit Bill of Materials

| ITEM     | REF_DES                                  |          | QTY      | MFG PART #                                                             | MANUFACTURER                               | VALUE        | DESCRIPTION                                                                                                                     | COMMENTS   |
|----------|------------------------------------------|----------|----------|------------------------------------------------------------------------|--------------------------------------------|--------------|---------------------------------------------------------------------------------------------------------------------------------|------------|
| 1        | A1-A4, B1-B4, REFA1, REFA2, REFB1, REFB2 |          | 12       | 142-0701-851                                                           | JOHNSON COMPONENTS                         | 142-0701-851 | CONNECTOR; END LAUNCH JACK RECEPTACLE; BOARDMOUNT; STRAIGHT THROUGH; 2PINS;                                                     |            |
| 2        | C1, C2                                   |          | 2        | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA                | MURATA;MURATA;TDK                          | 0.1µF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1µF; 50V; TOL=10%; TG=-55°C TO +125°C; TC=X7R; AUTO                                      |            |
| 3        | C3, C4                                   |          | 2        | GRM21BR71H105KA12; CL21B105KBFNNNE; C2012X7R1H105K085AC; UMK212B7105KG | MURATA;SAMSUNG ELECTRONICS;TDK;TAIYO YUDEN | 1µF          | CAPACITOR; SMT (0805); CERAMIC CHIP; 1µF; 50V; TOL=10%; TG=-55°C TO +125°C; TC=X7R                                              |            |
| 4        | ENA, ENB, DEFA, DEFB                     |          | 4        | PEC03SAAN                                                              | SULLINS                                    | PEC03SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                       |            |
| 5        | J1, J2                                   |          | 2        | PEC02SAAN                                                              | SULLINS                                    | PEC02SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                       |            |
| 6        | J3, J4                                   |          | 2        | 1-1241150-0                                                            | TE CONNECTIVITY                            | 1-1241150-0  | CONNECTOR; MALE; SMT; AMPMODU II PIN HEADER; SINGLE ROW; PACKED IN BLISTER; STRAIGHT; 10PINS                                    |            |
| 7        | R1-R8                                    |          | 8        | CRCW040220R0FK                                                         | VISHAY DALE                                | 20           | RESISTOR; 0402; 20 OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                          |            |
| 8        | SU1-SU6                                  |          | 6        | STC02SYAN                                                              | SULLINS ELECTRONICS CORP.                  | STC02SYAN    | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL         |            |
| 9        | TP1_GNDA, TP1_GNDB, TP2_GNDA, TP2_GNDB   |          | 4        | 5011                                                                   | KEYSTONE                                   | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;         |            |
| 10       | TP_VDDA, TP_VDDB                         |          | 2        | 5013                                                                   | KEYSTONE                                   | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;        |            |
| 11       | U1                                       |          | 1        | MAX2234X                                                               | MAXIM                                      | MAX2234X     | EVKIT PART - IC; MAX2234X SERIES; PACKAGE DRAWING NUMBER: 21-0056; PACKAGE LAND PATTERN: 90-0094; PACKAGE CODE: A20MS+6; SSOP20 |            |
| 12       | PCB                                      |          | 1        | MAX2234XS                                                              | MAXIM                                      | PCB          | PCB:MAX2234XS                                                                                                                   | -          |
| 13       | MTH1-MTH4                                | DNI      | 4        | 1902B                                                                  | GENERIC PART                               | N/A          | STANDOFF; FEMALE-THREADED; HEX; 4-40IN; 3/8IN; NYLON                                                                            |            |
| 14       | MTH1-MTH4                                | DNI      | 4        | P440.375                                                               | GENERIC PART                               | N/A          | MACHINE SCREW; SLOTTED; PAN; 4- 40IN; 3/8IN; NYLON                                                                              |            |
| 15       | RA1-RA4, RB1-RB4                         | DNP      | 0        | N/A                                                                    | N/A                                        | OPEN         | PACKAGE OUTLINE 0402 RESISTOR                                                                                                   |            |
| 16       | CA1-CA4, CB1-CB4                         | DNP      | 0        | N/A                                                                    | N/A                                        | OPEN         | PACKAGE OUTLINE 0402 NON-POLAR CAPACITOR                                                                                        |            |
| TOTAL 54 | TOTAL 54                                 | TOTAL 54 | TOTAL 54 | TOTAL 54                                                               | TOTAL 54                                   | TOTAL 54     | TOTAL 54                                                                                                                        | TOTAL 54   |

│

Evaluates: MAX22344-MAX22346

## MAX22344-MAX22346 EV Kit Schematic

<!-- image -->

## MAX22344-MAX22346 EV Kit PCB Layout Diagrams

MAX22344-MAX22346 EV Kit-Top Silkscreen

<!-- image -->

MAX22344-MAX22346 EV Kit-Top

<!-- image -->

│

## MAX22344-MAX22346 EV Kit PCB Layout Diagrams (continued)

MAX22344-MAX22346 EV Kit-L2 GND

<!-- image -->

MAX22344-MAX22346 EV Kit-L3 PWR

<!-- image -->

│

## MAX22344-MAX22346 EV Kit PCB Layout Diagrams (continued)

MAX22344-MAX22346 EV Kit-Bottom

<!-- image -->

│

## MAX22344-MAX22346 Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                            | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------------------------------|-----------------|
|                 0 | 3/18            | Initial release                                                                        | -               |
|                 1 | 10/18           | Added future product designation to MAX22345CSEVKIT# in the Ordering Information table | 6               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html .

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitr\ and specifications without notice at an\ time.

│

Evaluates: MAX22344-MAX22346