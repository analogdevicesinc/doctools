<!-- lastmod 2022-08-04 -->
## MAX22444-MAX22446 Evaluation Kits

## General Description

The  MAX22444-MAX22446  evaluation  kits  (EV  kits) provide  a  proven  design  to  evaluate  the  MAX22444MAX22446,  reinforced,  four-channel,  galvanic  digital isolators.  Two  types  of  evaluation  boards  are  available to  support  different  channel  direction  configurations, different  ENA  polarities  and  different  output  default settings of the MAX22444-MAX22446  family.  The MAX22445FWEVKIT# is fully assembled and tested, and comes populated with the MAX22445FAWE+ (Figure 1). The MAX2244XWEVKIT# is a generic board which has U1 unpopulated allowing the user to select a device from the MAX22444-MAX22446 family (Figure 2). Both evaluation boards support the wide-body 16-pin SOIC package type. See Table 1 for EV kit options.

The  EV  kits  should  be  powered  from  two  independent isolated  power  supplies  with  nominal  output  voltage  in range  from  1.71V  to  5.5V.  For  evaluating  the  electrical parameters of the device without any isolation between the two sides, a single power supply can also be used.

The MAX2244XWEVKIT# comes with U1 unpopulated and supports the following digital isolators: MAX22444BAWE+,

MAX22444CAWE+, MAX22444EAWE+, MAX22444FAWE+,

MAX22444MAWE+, MAX22444NAWE+, MAX22445BAWE+,

MAX22445CAWE+, MAX22445EAWE+, MAX22445FAWE+,

MAX22445MAWE+, MAX22445NAWE+, MAX22445RAWE+,

MAX22445SAWE+, MAX22445UAWE+, MAX22445VAWE+,

MAX22446BAWE+, MAX22446CAWE+, MAX22446EAWE+,

MAX22446FAWE+, MAX22446MAWE+, MAX22446NAWE+.

Note :  When ordering the MAX2244XW EV kit, the engineer should request a sample of the desired MAX22444-MAX22446 isolator IC that can be soldered to the PCB.

## Table 1. EV Kit Options

| EVKIT PART #     | TARGET DEVICE   | PACKAGE TYPE      | COMMENT                                     |
|------------------|-----------------|-------------------|---------------------------------------------|
| MAX22445FWEVKIT# | MAX22445FAWE+   | 16-SOIC Wide-Body | 200Mbps IC Populated                        |
| MAX2244XWEVKIT#  | Not Populated   | 16-SOIC Wide-Body | Request Samples of Target Device from Maxim |

<!-- image -->

Evaluates: MAX22444-MAX22446

## Features

- Broad Range of Data Transfer Rates (from DC to 200Mbps)
- Four Unidirectional Channels with 3 Different Channel Direction Configurations
- SMA Connectors for Easy Connection to External Equipment
- Wide Power Supply Voltage Range from 1.71V to 5.5V
- Guaranteed Up to 5kV RMS  Isolation for 60s
- -40°C to +125°C Temperature Range
- Proven PCB Layout

Ordering Information appears at end of data sheet.

## MAX22444-MAX22446 Evaluation Kits

Figure 1. MAX22445FW EV KIT

<!-- image -->

## Quick Start

## Required Equipment

- MAX22445FW or MAX2244XW EV kit
- MAX22444-MAX22446 device, if EV kit is not populated
- Two DC power supplies with output range of 1.71V to 5.5V
- Signal/function generator
- Oscilloscope

## Evaluates: MAX22444-MAX22446

Figure 2. MAX2244XW EV KIT

<!-- image -->

## Procedure

The MAX22445FW EV kit is fully assembled and ready for  evaluation.  The  MAX2244XW  EV  kit  has  everything except  the  DUT  (U1)  installed.  The  user  can  install  the desired  version  of  the  MAX22444-MAX22446  family  of reinforced,  four-channel,  unidirectional  digital  isolators. Once  installed,  follow  the  steps  below  to  verify  board functionality:

│

## MAX22444-MAX22446 Evaluation Kits

- 1) Verify jumper settings. See T able 2 for all shunt positions. · J1 and J2 are closed.
- J5 is either in 1-2 position if U1 pin 7 has activehigh ENA polarity, or in 2-3 position if U1 pin 7 has active-low ENA polarity.
- Jumper J6 is in 1-2 position.
- 2) Connect one DC power supply between the EV kit's TP\_VDDA  and TP1\_GNDA test points; connect the other DC power supply between TP\_VDDB and TP1\_ GNDB test points.
- 3) Set  both  DC  power  supply  outputs  between  1.71V and 5.5V, and then enable the power supply output.

Note: It is also possible to power the EV kits from a single power supply to test electrical parameters but this invalidates the digital isolation of the IC.

## Table 2. MAX2244XW EV Kits Board Connectors and Shunt Positions

| CONNECTOR   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                                             |
|-------------|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SIDE A      | SIDE A           | SIDE A                                                                                                                                                                                                                                                                                                                                                                                                                  |
| J3          | 1                | Test point or input header for V DDA                                                                                                                                                                                                                                                                                                                                                                                    |
| J3          | 2                | Test point or input header for GNDA                                                                                                                                                                                                                                                                                                                                                                                     |
| J3          | 3                | Test point or input header for I/O; same as A1 SMA                                                                                                                                                                                                                                                                                                                                                                      |
| J3          | 4                | Test point or input header for I/O; same as A2 SMA                                                                                                                                                                                                                                                                                                                                                                      |
| J3          | 5                | Test point or input header for I/O; same as A3 SMA                                                                                                                                                                                                                                                                                                                                                                      |
| J3          | 6                | Test point or input header for I/O; same as A4 SMA                                                                                                                                                                                                                                                                                                                                                                      |
| J3          | 7                | Test point or input header for side A enable or default control; same as J5 pin 2                                                                                                                                                                                                                                                                                                                                       |
| J3          | 8                | Test point or input header for GNDA                                                                                                                                                                                                                                                                                                                                                                                     |
| A1 (SMA)    | n/a              | I/O on side A                                                                                                                                                                                                                                                                                                                                                                                                           |
| A2 (SMA)    | n/a              | I/O on side A                                                                                                                                                                                                                                                                                                                                                                                                           |
| A3 (SMA)    | n/a              | I/O on side A                                                                                                                                                                                                                                                                                                                                                                                                           |
| A4 (SMA)    | n/a              | I/O on side A                                                                                                                                                                                                                                                                                                                                                                                                           |
| J1          | Open             | Use current meter to measure current of side A                                                                                                                                                                                                                                                                                                                                                                          |
| J1          | 1-2*             | Connect power supply to V DDA                                                                                                                                                                                                                                                                                                                                                                                           |
| J5          | 1-2*             | Connect side A enable pin ENAor ENA , or default control pin DEFA to V DDA . If U1 is installed with MAX2244_B/C/E/F, outputs are enabled when ENAis connected to V DDA . If U1 is installed with MAX22445R/S/U/V, outputs are high-impedance when ENA is connected to V DDA . If U1 is installed with MAX2244_M/N, output default is set to high when DEFA is connected to V DDA . Default setting on MAX22445FWEVKIT# |
| J5          | 2-3              | Connect side A enable pin ENAor ENA , or default control pin DEFA to GNDA; If U1 is installed with MAX2244_B/C/E/F, outputs are high-impedance when ENAis connected to GNDA. If U1 is installed with MAX22445R/S/U/V, outputs are enabled when ENA is con- nected to GNDA. If U1 is installed with MAX2244_M/N, output default is set to low when DEFA is connected to GNDA                                             |

│

## Evaluates: MAX22444-MAX22446

- 4) Connect  the  signal/function  generator  to  an  input SMA connector or test point of side A and observe the isolated signal on the corresponding side B output, using an oscilloscope. On the MAX22445FW EV kit, SMA connectors A1, A2, A3, and B4 are inputs, and SMA  connectors  B1,  B2,  B3,  and  A4  are  outputs. Refer to T able 3 for the SMA connector I/O configurations and  jumper  J3-J6  configurations  when  a  different MAX22444-MAX22446 device is installed as U1 on the MAX2244XW EV kit.

Table 2. MAX2244XW EV Kits Board Connectors and Shunt Positions (continued)

| CONNECTOR   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                                                                                                                                                         |
|-------------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SIDE B      | SIDE B           | SIDE B                                                                                                                                                                                                                                                                                                              |
| J4          | 1                | Test point or input header for V DDB                                                                                                                                                                                                                                                                                |
| J4          | 2                | Test point or input header for GNDB                                                                                                                                                                                                                                                                                 |
| J4          | 3                | Test point or input header for I/O; same as B1 SMA                                                                                                                                                                                                                                                                  |
| J4          | 4                | Test point or input header for I/O; same as B2 SMA                                                                                                                                                                                                                                                                  |
| J4          | 5                | Test point or input header for I/O; same as B3 SMA                                                                                                                                                                                                                                                                  |
| J4          | 6                | Test point or input header for I/O; same as B4 SMA                                                                                                                                                                                                                                                                  |
| J4          | 7                | Test point or input header for side B enable, or default control; same as J6 pin 2                                                                                                                                                                                                                                  |
| J4          | 8                | Test point or input header for GNDB                                                                                                                                                                                                                                                                                 |
| B1 (SMA)    | n/a              | I/O on side B                                                                                                                                                                                                                                                                                                       |
| B2 (SMA)    | n/a              | I/O on side B                                                                                                                                                                                                                                                                                                       |
| B3 (SMA)    | n/a              | I/O on side B                                                                                                                                                                                                                                                                                                       |
| B4 (SMA)    | n/a              | I/O on side B                                                                                                                                                                                                                                                                                                       |
| J2          | Open             | Use current meter to measure current of side B                                                                                                                                                                                                                                                                      |
| J2          | 1-2*             | Connect power supply to V DDB                                                                                                                                                                                                                                                                                       |
| J6          | 1-2*             | Connect side B enable pin ENB or default control pin DEFB to V DDB ; If U1 is installed with MAX2244_B/C/E/F/R/S/U/V, outputs are enabled when ENB is connected to V DDB . If U1 is installed with MAX2244_M/N, output default is set to high when DEFB is connected to V DDB . Default setting on MAX22445FWEVKIT# |
| J6          | 2-3              | Connect side B enable pin ENB or default control pin DEFB to GNDB; If U1 is installed with MAX2244_B/C/E/F/R/S/U/V, outputs are high-impedance when ENB is connected to GNDB. If U1 is installed with MAX2244_M/N, output default is set to low when DEFB is connected toGNDB                                       |

*Default configuration

Table 3. MAX2244XW EV Kits Connector Configurations

|                    | U1 DEVICE        | U1 DEVICE    | U1 DEVICE        | U1 DEVICE    | U1 DEVICE        | U1 DEVICE        | U1 DEVICE    |
|--------------------|------------------|--------------|------------------|--------------|------------------|------------------|--------------|
| CONNECTOR          | MAX22444 B/C/E/F | MAX22444 M/N | MAX22445 B/C/E/F | MAX22445 M/N | MAX22445 R/S/U/V | MAX22446 B/C/E/F | MAX22446 M/N |
| SIDE A             |                  |              |                  |              |                  |                  |              |
| A1 (SMA)           | IN1              | IN1          | IN1              | IN1          | IN1              | IN1              | IN1          |
| A2 (SMA)           | IN2              | IN2          | IN2              | IN2          | IN2              | IN2              | IN2          |
| A3 (SMA)           | IN3              | IN3          | IN3              | IN3          | IN3              | OUT3             | OUT3         |
| A4 (SMA)           | IN4              | IN4          | OUT4             | OUT4         | OUT4             | OUT4             | OUT4         |
| J3 PIN 7, J5 PIN 2 | ENA              | DEFA         | ENA              | DEFA         | ENA              | ENA              | DEFA         |
| SIDE B             |                  |              |                  |              |                  |                  |              |
| B1 (SMA)           | OUT1             | OUT1         | OUT1             | OUT1         | OUT1             | OUT1             | OUT1         |
| B2 (SMA)           | OUT2             | OUT2         | OUT2             | OUT2         | OUT2             | OUT2             | OUT2         |
| B3 (SMA)           | OUT3             | OUT3         | OUT3             | OUT3         | OUT3             | IN3              | IN3          |
| B4 (SMA)           | OUT4             | OUT4         | IN4              | IN4          | IN4              | IN4              | IN4          |
| J4 PIN 7, J6 PIN 2 | ENB              | DEFB         | ENB              | DEFB         | ENB              | ENB              | DEFB         |

│

## MAX22444-MAX22446 Evaluation Kits

## Detailed Description of Hardware

The  MAX22444-MAX22446  EV  kits  allow  the  user  to evaluate the features of the MAX22444-MAX22446 fourchannel digital isolators.

## External Power Supplies

Power  to  the  MAX22445FW  and  MAX2244XW EV kits is derived from two external sources which can both be between +1.71V and +5.5V. Connect one source between the V DDA

## Evaluates: MAX22444-MAX22446

and GNDA test points, and the other source between the VDDB  and  GNDB  test  points.  Each  supply  can  be  set independently  and  can  be  present  over  the  entire  range from +1.71V to +5.5V, regardless of the level or presence of the other supply. The MAX22444-MAX22446 level-shift the data, transmitting them across the isolation barrier.

Four  SMA  connectors  on  each  side  of  the  board  allow easy connections to signal generator(s) and oscilloscope. A typical test setup is shown in Figure 3.

Figure 3. MAX2244XW EV Kit Typical Test Setup

<!-- image -->

│

## Decoupling Capacitors

Each  power  supply  is  decoupled  with  a  1µF  ceramic capacitor in parallel with a 0.1µF ceramic capacitor, which are placed close to the U1 V DDA  and V DDB  pin.

## Shunt Positions

Jumpers J1 and J2 are installed between the external power supplies and U1 power supply pins to allow supply current measurement. Uninstall the J1 and J2 shunts and connect current meters on both side A and side B to measure the MAX22444-MAX22446 supply current.

Jumper  J5  and  J6  are  provided  to  enable  or  disable the  outputs  of  the  MAX2244\_B/C/E/F/R/S/U/V  isolator channels, or configure the default level (high or low) of the MAX2244\_M/N isolator outputs.

To enable devices with an active-high enable pin on side A (MAX2244\_B/C/E/F), connect the J5 shunt to V DDA . To enable  devices  with  an  active-low  enable  pin  on  side  A (MAX22445R/S/U/V), connect the J5 shunt to GNDA. Side A outputs are high-impedance when disabled. Connect the J6 shunt to V DDB  to enable side B channels or connect to GNDB to disable side B channels (MAX2244\_B/C/E/F/R/S/ U/V). Side B outputs are high-impedance when disabled.

All channels on the MAX2244\_M/N are always enabled. However,  the  output  default  level  is  configurable.  To configure  the  default  level  of  both  side  A  and  side  B outputs to high, connect J5 to V DDA  and J6 to V DDB . To configure the default level of the outputs to low, connect J5 to GNDA and J6 to GNDB. Ensure the logic state of J5 is the same as that for J6. Configure J5 and J6 before powering up the board and do not toggle J5 and J6 during normal operation. See Table 2 for all shunt positions and Table 3 for connector configurations.

## I/O Traces Impedance Control

The input and output traces of all four isolation channels have an impedance control of 50Ω. A 20Ω series resistor is added to all input and output channels; along with the internal series resistance, it can provide 50Ω impedance matching with external equipment such as function generators or oscilloscopes.

## Ordering Information

| PART             | TYPE                                |
|------------------|-------------------------------------|
| MAX22445FWEVKIT# | EV Kit with installed MAX22445FAWE+ |
| MAX2244XWEVKIT#  | EV Kit for wide-body SOIC package   |

#Denotes RoHS compliant.

## Output Load

Each  output  has  an  unpopulated  0603  SMT  resistor (RA1-RA4,  RB1-RB4)  and  an  unpopulated  0603  SMT capacitor  (CA1-CA4,  CB1-CB4)  to  GND\_  to  allow different loads based on customer requirements.

## Calibration Channels

Two reference channels (REFA1-REFB1, REFA2-REFB2) are  implemented  on  the  EV  kits  to  help  calibrate  the test  setup  for  timing  measurements  such  as  propagation  delay.  Measure  the  propagation  delay  (t PD\_REF ) using the reference channel first to determine the delay introduced  by  the  test  setup.  Measure  the  propagation delay  (t PD\_ISO )  again  using  one  of  the  MAX22444MAX22446 data channels. The calibrated isolator delay is t PD\_ISO  - t PD\_REF .

## U1 on the MAX2244XW EV Kit

U1  on  the  MAX2244XWEVKIT#  is  not  installed.  The user  can  install  the  desired  version  of  the  MAX22444MAX22446  family  of  four-channel  unidirectional  digital isolators. The MAX22444-MAX22446 family offers three unidirectional  channel  configurations.  The  MAX22444 features  all  four  channels  transferring  digital  signals  in one direction. SMA connectors A1-A4 on side A are input connectors and B1-B4 on side B are output connectors if  the MAX22444 is installed as U1. The MAX22445 has three channels transmitting data in one direction and one channel  transmitting  in  the  opposite  direction.  SMA connectors  A1-A3  and  B4  are  input  connectors  and B1-B3 and A4 are output connectors if the MAX22445 is installed  as  U1.  The  MAX22446  provides  two  channels in  each  direction.  SMA  connectors A1, A2,  B3,  and  B4 are input connectors and B1, B2, A3 and A4 are output connectors if the MAX22446 is installed as U1. Refer to Table 3 for SMA connector I/O configurations with different U1 selection.

When  installing  U1,  make  sure  pin  1  of  the  device  is mounted onto pin 1 of U1 on the PCB. Pin 1 is located at the upper left corner of U1, denoted by a white dot on the silkscreen.

## MAX22444-MAX22446 EV Kit Bill of Materials

| ITEM   | REF_DES                                  |     |   QTY | MFG PART #                                                             | MANUFACTURER                               | VALUE        | DESCRIPTION                                                                                                                     | COMMENTS   |
|--------|------------------------------------------|-----|-------|------------------------------------------------------------------------|--------------------------------------------|--------------|---------------------------------------------------------------------------------------------------------------------------------|------------|
| 1      | A1-A4, B1-B4, REFA1, REFA2, REFB1, REFB2 |     |    12 | 142-0701-851                                                           | JOHNSON COMPONENTS                         | 142-0701-851 | CONNECTOR; END LAUNCH JACK RECEPTACLE; BOARDMOUNT; STRAIGHT THROUGH; 2PINS;                                                     |            |
| 2      | C1, C2                                   |     |     2 | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA                | MURATA;MURATA;TDK                          | 0.1µF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1µF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R; AUTO                                |            |
| 3      | C3, C4                                   |     |     2 | GRM21BR71H105KA12; CL21B105KBFNNNE; C2012X7R1H105K085AC; UMK212B7105KG | MURATA;SAMSUNG ELECTRONICS;TDK;TAIYO YUDEN | 1µF          | CAPACITOR; SMT (0805); CERAMIC CHIP; 1µF; 50V; TOL = 10%; TG=-55°C TO +125°C; TC = X7R                                          |            |
| 4      | J1, J2                                   |     |     2 | PEC02SAAN                                                              | SULLINS                                    | PEC02SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                       |            |
| 5      | J3, J4                                   |     |     2 | 5-146128-6                                                             | TE CONNECTIVITY                            | 5-146128-6   | CONNECTOR; MALE; SMT; BREAKAWAY; STRAIGHT; 8PINS                                                                                |            |
| 6      | J5, J6                                   |     |     2 | PEC03SAAN                                                              | SULLINS                                    | PEC03SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                       |            |
| 7      | R1-R8                                    |     |     8 | CRCW040220R0FK                                                         | VISHAY DALE                                | 20           | RESISTOR; 0402; 20 OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                          |            |
| 8      | SU1-SU4                                  |     |     4 | STC02SYAN                                                              | SULLINS ELECTRONICS CORP.                  | STC02SYAN    | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.256IN; BLACK; INSULATION = PBT CONTACT = PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL   |            |
| 9      | TP1_GNDA, TP1_GNDB, TP2_GNDA, TP2_GNDB   |     |     4 | 5011                                                                   | KEYSTONE                                   | N/A          | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   |            |
| 10     | TP_VDDA, TP_VDDB                         |     |     2 | 5013                                                                   | KEYSTONE                                   | N/A          | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH   |            |
| 11     | U1                                       |     |     1 | MAX2244X                                                               | MAXIM                                      | MAX2244X     | EVKIT PART-IC; MAX2244X SERIES; PACKAGE DRAWING NUMBER: 21-0042; PACKAGE LAND PATTERN: 90-0107; PACKAGE CODE: W16MS+12; WSOIC16 |            |
| 12     | PCB                                      |     |     1 | MAX2244XW                                                              | MAXIM                                      | PCB          | PCB:MAX2244XW                                                                                                                   |            |
| 13     | MTH1-MTH4                                | DNI |     4 | 1902B                                                                  | GENERIC PART                               | N/A          | STANDOFF; FEMALE-THREADED; HEX;4- 40IN; 3/8IN; NYLON                                                                            |            |
| 14     | MTH1-MTH4                                | DNI |     4 | P440.375                                                               | GENERIC PART                               | N/A          | MACHINE SCREW; SLOTTED; PAN;4-40IN; 3/8IN; NYLON                                                                                |            |
| 15     | RA1-RA4, RB1- RB4                        | DNP |     0 | N/A                                                                    | N/A                                        | OPEN         | PACKAGE OUTLINE 0402 RESISTOR                                                                                                   |            |
| 16     | CA1-CA4, CB1- CB4                        | DNP |     0 | N/A                                                                    | N/A                                        | OPEN         | PACKAGE OUTLINE 0402 NON-POLAR CAPACITOR                                                                                        |            |
| TOTAL  |                                          |     |    50 |                                                                        |                                            |              |                                                                                                                                 |            |

│

Evaluates: MAX22444-MAX22446

## MAX22444-MAX22446 EV Kit Schematic

<!-- image -->

## MAX22444-MAX22446 EV Kit PCB Layout Diagrams

MAX22444-MAX22446 EV Kit-Top Silkscreen

<!-- image -->

MAX22444-MAX22446 EV Kit-Top

<!-- image -->

│

## MAX22444-MAX22446 EV Kit PCB Layout Diagrams (continued)

MAX22444-MAX22446 EV Kit-L2 GND

<!-- image -->

MAX22444-MAX22446 EV Kit-L3 PWR

<!-- image -->

│

## MAX22444-MAX22446 EV Kit PCB Layout Diagrams (continued)

MAX22444-MAX22446 EV Kit-Bottom

<!-- image -->

│

## MAX22444-MAX22446 Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitr\ and specifications without notice at an\ time.

│

Evaluates: MAX22444-MAX22446