<!-- lastmod 2022-08-04 -->
<!-- image -->

## Evaluate: MAX22245/MAX22246/

## MAX22290/MAX22291

## General Description

The MAX22245/MAX22246/MAX22290/MAX22291 evaluation kits (EV kits) provide a proven design to evaluate the MAX22245, MAX22246, MAX22290 and MAX22291, reinforced,  two-channel,  galvanic  digital  isolators. Three types  of  evaluation  boards  are  available  to  support  this family  of  isolators.  The  MAX22246CWEVKIT#  is  fully assembled  and  tested  and  comes  populated  with  the MAX22246CAWA+ ( Figure 1 ). The MAX2224XWEVKIT# is a generic board which has unpopulated wide SOIC footprint  as  U1,  allowing  the  user  to  install  any  MAX22245/ MAX22246 variant ( Figure  2 ).  The  MAX2229XSEVKIT# is a generic board which has unpopulated narrow SOIC footprint as U1, allowing the user to install any MAX22290/ MAX22291 variant ( Figure 3 ). Among the three evaluation boards, devices with either wide-body 8-pin SOIC package or narrow-body 8-pin SOIC package are supported. See Table 1 for EV kit options.

The EV kits should be powered from two independent isolated power supplies with nominal output voltage in range from 1.71V to 5.5V. For evaluating the electrical parameters of the device without any isolation between the two sides, a single power supply can also be used.

The  MAX2224XWEVKIT#  comes  with  U1  unpopulated  and MAX22245BAWA+,

supports the following digital isolators: MAX22245CAWA+, MAX22245EAWA+, MAX22245FAWA+, MAX22246BAWA+, MAX22246CAWA+, MAX22246EAWA+, MAX22246FAWA+,  MAX22245BAWA/V+,  MAX22245CAWA/V+, MAX22245EAWA/V+, MAX22245FAWA/V+, MAX22246BAWA/V+, MAX22246CAWA/V+, MAX22246EAWA/V+, MAX22246FAWA/V+.

The  MAX2229XSEVKIT#  comes  with  U1  unpopulated  and supports the following digital isolators:  MAX22290BASA+, MAX22290CASA+, MAX22290EASA+, MAX22290FASA+,

## Table 1. EV Kit Options

| EV KIT PART NUMBER   | TARGET DEVICE   | PACKAGE TYPE       | COMMENT                                     |
|----------------------|-----------------|--------------------|---------------------------------------------|
| MAX22246CWEVKIT#     | MAX22246CAWA+   | 8-SOIC Wide Body   | 200Mbps IC Populated                        |
| MAX2224XWEVKIT#      | Not populated   | 8-SOIC Wide Body   | Request Samples of Target Device from Maxim |
| MAX2229XSEVKIT#      | Not populated   | 8-SOIC Narrow Body | Request Samples of Target Device from Maxim |

©

Click here to ask an associate for production status of specific part numbers.

## MAX22245/MAX22246/MAX22290/ MAX22291 Evaluation Kits

MAX22291BASA+, MAX22291CASA+, MAX22291EASA+, MAX22291FASA+,  MAX22290BASA/V+,  MAX22290CASA/V+, MAX22290EASA/V+,  MAX22290FASA/V+,  MAX22291BASA/V+, MAX22291CASA/V+, MAX22291EASA/V+, MAX22291FASA/V+.

Note: When  ordering  the  MAX2224XW  EV  kit,  request a sample of the desired MAX22245 or MAX22246 isolator  IC  that  can  be  soldered  to  the  PCB.  When  ordering the MAX2229XS EV kit, request a sample of the desired MAX22290 or MAX22291 isolator IC that can be soldered to the PCB.

## Features

- Broad Range of Data Transfer Rates (from DC to 200Mbps)
- MAX22245 and MAX22290 with 2:0 Channel Configuration, MAX22246 and MAX22291 with 1:1 Channel Configuration
- Support Both Narrow SOIC Package and Wide SOIC Package
- SMA Connectors for Easy Connection to External Equipment
- Wide Power Supply Voltage Range from 1.71V to 5.5V
- Guaranteed up to 5kV RMS  Isolation for 60s (MAX2224XW)
- Guaranteed up to 3kV RMS  Isolation for 60s (MAX2229XS)
- -40°C to +125°C Temperature Range
- Proven PCB Layout

Ordering Information appears at end of data sheet.

owners.

## MAX22245/MAX22246/ MAX22290/MAX22291 Evaluation Kits

Figure 1. MAX22246CW EV Kit

<!-- image -->

## Evaluate: MAX22245/MAX22246/ MAX22290/MAX22291

Figure 2. MAX2224XW EV Kit

<!-- image -->

Figure 3. MAX2229XS EV Kit

<!-- image -->

│

## MAX22245/MAX22246/ MAX22290/MAX22291 Evaluation Kits

## Quick Start

## Required Equipment

- MAX22246CW, MAX2224XW or MAX2229XS EV kit
- MAX22245 or MAX22246 device, if using MAX222XW EV kit
- MAX22290 or MAX22291 device, if using MAX2229XS EV kit
- Two DC power supplies with output range of 1.71V to 5.5V
- Signal/function generator
- Oscilloscope

## Procedure

The MAX22246CW EV kit is fully assembled and ready for  evaluation.  The  MAX2224XW  and  MAX2229XS  EV kits have everything except the DUT (U1) installed. The user  can  install  the  desired  version  of  the  MAX22245/ MAX22246/MAX22290/MAX22291  family  of  reinforced,

## Evaluate: MAX22245/MAX22246/ MAX22290/MAX22291

two-channel, unidirectional digital isolators. Once installed, use the following steps to verify board functionality:

- 1) Connect one DC power supply between the EV kit's VDDA  and GNDA test points; connect the other DC power supply between VDDB and GNDB test points.
- 2) Set  both  DC  power  supply  outputs  between  1.71V and 5.5V, and then enable the power supply output.

Note: It is also possible to power the EV kit from a single power supply to test electrical parameters but this invalidates the digital isolation of the IC.

- 3) Connect  the  signal/function  generator  to  an  input SMA connector  of  side A  and  observe  the  isolated signal on the corresponding side B output, using an oscilloscope.  On  the  MAX22246CW  EV  kit,  SMA connectors  A2  and  B1  are  inputs,  and  SMA  connectors A1 and B2 are outputs. See Table 2 for  the SMA  connector  I/O  configurations  when  either  a MAX22245 or a MAX22246 device is installed as U1 on  the  MAX2224XW EV kit, or either  a  MAX22290 or  a  MAX22291  device  is  installed  as  U1  on  the MAX2229XS EV kit.

## Table 2. MAX2224XW and MAX2229XS EV Kit Connector Configurations

| CONNECTOR   | U1 DEVICE             | U1 DEVICE             |
|-------------|-----------------------|-----------------------|
|             | MAX22245, MAX22290    | MAX22246, MAX22291    |
| SIDE A      |                       |                       |
| VDDA        | VDDAtest point        | VDDAtest point        |
| GNDA        | GNDAtest point        | GNDAtest point        |
| A1          | SMAconnector for IN1  | SMAconnector for OUT1 |
| A2          | SMAconnector for IN2  | SMAconnector for IN2  |
| REFA1       | I/O on side A         | I/O on side A         |
| REFA2       | I/O on side A         | I/O on side A         |
| SIDE B      |                       |                       |
| VDDB        | VDDB test point       | VDDB test point       |
| GNDB        | GNDB test point       | GNDB test point       |
| B1          | SMAconnector for OUT1 | SMAconnector for IN1  |
| B2          | SMAconnector for OUT2 | SMAconnector for OUT2 |
| REFB1       | I/O on side B         | I/O on side B         |
| REFB2       | I/O on side B         | I/O on side B         |

## MAX22245/MAX22246/ MAX22290/MAX22291 Evaluation Kits

## Detailed Description of Hardware

The  MAX22246CW,  MAX222XW,  and  MAX2229XS  EV kits  allow  the  user  to  evaluate  the  features  of  the MAX22245/MAX22246/MAX22290/MAX22291 two-channel digital isolators.

## External Power Supplies

Power to the MAX22246CW, MAX222XW, and MAX2229XS EV  kits  is  derived  from  two  external  sources  which  can both be between +1.71V and +5.5V. Connect one source between the VDDA and GNDA test points, and the other source  between  the  VDDB  and  GNDB  test  points.  Each supply can be set independently and can be present over the entire range from +1.71V to +5.5V, regardless of the level  or  presence  of  the  other  supply.  The  MAX22245/ MAX22246/MAX22290/MAX22291  level-shift  the  data, transmitting them across the isolation barrier.

Two  SMA  connectors  on  each  side  of  the  board  allow easy connections to signal generator(s) and oscilloscope. A typical test setup is shown in Figure 4 .

Evaluate: MAX22245/MAX22246/

MAX22290/MAX22291

## Decoupling Capacitors

Each  power  supply  is  decoupled  with  a  1µF  ceramic capacitor in parallel with a 0.1µF ceramic capacitor, which are placed close to U1 V DDA  and V DDB  pins.

## I/O Traces Impedance Control

The  input  and  output  traces  of  both  isolation  channels have an impedance control of 50Ω. A 20Ω series resistor is  added  to  both  input  and  output  channels;  along  with the internal series resistance, it can provide 50Ω imped -ance matching with external equipment such as function generators or oscilloscopes.

## Output Load

Each  output  has  an  unpopulated  0402  SMT  resistor (RA1,  RA2,  RB1,  and  RB2)  and  an  unpopulated  0402 SMT capacitor (CA1, CA2, CB1, and CB2) to GND\_ to allow different loads based on customer requirements.

Figure 4. MAX2224XW EV Kit Typical Test Setup

<!-- image -->

│

## MAX22245/MAX22246/ MAX22290/MAX22291 Evaluation Kits

## Calibration Channels

Two  reference  channels  (REFA1-REFB1  and  REFA2REFB2) are implemented on the EV kits to help calibrate the  test  setup  for  timing  measurements  such  as  propagation  delay.  Measure  the  propagation  delay  (t PD\_REF ) using the reference channel first to determine the delay introduced  by  the  test  setup.  Measure  the  propagation delay (t PD\_ISO ) again using one of the MAX22245/ MAX22246/MAX22290/MAX22291  data  channels.  The calibrated isolator delay is t PD\_ISO  - t PD\_REF .

## U1 on the MAX2224XW and MAX2229XS EV Kits

U1 on the MAX2224XWEVKIT# and MAX2229XSEVKIT# is  not  installed. The user can install the desired version of  the  MAX22245/MAX22246  on  the  MAX2224XW  EV kit,  and  install  the  desired  version  of  the  MAX22290/ MAX22291 on the MAX2229XS EV kit. The MAX22245/

## Ordering Information

| PART             | TYPE                                |
|------------------|-------------------------------------|
| MAX22246CWEVKIT# | EV Kit with installed MAX22246CAWA+ |
| MAX2224XWEVKIT#  | EV Kit for Wide Body SOIC Package   |
| MAX2229XSEVKIT#  | EV Kit for Narrow Body SOIC Package |

#Denotes RoHS compliance.

## Evaluate: MAX22245/MAX22246/ MAX22290/MAX22291

MAX22246/MAX22290/MAX22291 family offers two unidirectional  channel  configurations.  The  MAX22245  and MAX22290 feature both channels transferring digital signals in one direction. SMA connectors A1 and A2 on side A are input connectors, and B1 and B2 on side B are output connectors if the MAX22245 or MAX22290 is installed as U1. The MAX22246 and MAX22291 have one channel transmitting data in one direction and the other channel transmitting in the opposite direction. SMA connectors A2 and B1 are input connectors, and A1 and B2 are output connectors  if  the  MAX22246  or  MAX22291  is  installed as U1. See Table 2 for SMA connector I/O configurations with different U1 selection.

When  installing  U1,  make  sure  pin  1  of  the  device  is mounted onto pin 1 of U1 on the PCB. Pin 1 is located at the upper left corner of U1, denoted by a white dot on the silkscreen.

## MAX22245/MAX22246/ MAX22290/MAX22291 Evaluation Kits

## MAX22245/MAX22246 EV Kit Bill of Materials

| ITEM   | REF_DES                                    | DNI/DNP   |   QTY | MFG PART #                                                                                             | MANUFACTURER                                  | VALUE        | DESCRIPTION                                                                                                                    |
|--------|--------------------------------------------|-----------|-------|--------------------------------------------------------------------------------------------------------|-----------------------------------------------|--------------|--------------------------------------------------------------------------------------------------------------------------------|
| 1      | A1, A2, B1, B2, REFA1, REFA2, REFB1, REFB2 | -         |     8 | 142-0701-851                                                                                           | JOHNSON COMPONENTS                            | 142-0701-851 | CONNECTOR; END LAUNCH JACK RECEPTACLE; BOARDMOUNT; STRAIGHT THROUGH; 2PINS;                                                    |
| 2      | C1, C2                                     | -         |     2 | CC0603KRX7R0BB104; GRM188R72A104KA35; GCJ188R72A104KA01; HMK107B7104KA; 06031C104KAT2A; GRM188R72A104K | YAGEO;MURATA; MURATA; TAIYO YUDEN; AVX;MURATA | 0.1µF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1µF; 100V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                    |
| 3      | C3, C4                                     | -         |     2 | GRM21BR71H105KA12; CL21B105KBFNNN; C2012X7R1H105K085AC; UMK212B7105KG; CGA4J3X7R1H105K125AB            | MURATA; SAMSUNG ELECTRONICS; TDK;TAIY         | 1µF          | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                       |
| 4      | GNDA, GNDB                                 | -         |     2 | 5011                                                                                                   | KEYSTONE                                      | N/A          | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
| 5      | MTH1-MTH4                                  | -         |     4 | 9032                                                                                                   | KEYSTONE                                      | 9032         | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                      |
| 6      | R1-R4                                      | -         |     4 | CRCW040220R0FK                                                                                         | VISHAY DALE                                   | 20           | RESISTOR; 0402; 20 Ω ; 1%; 100PPM; 0.063W; THICK FILM                                                                          |
| 7      | U1                                         | -         |     1 | MAX2224X                                                                                               | MAXIM                                         | MAX2224X     | EVKIT PART - IC; MAX2224X SERIES; COMBINED SCHEMATIC SYMBOL FOR MAX22245 AND MAX22246; PACKAGE LAND PATTERN: 90-100146; WSOIC8 |
| 8      | VDDA, VDDB                                 | -         |     2 | 5010                                                                                                   | KEYSTONE                                      | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                        |
| 9      | PCB                                        | -         |     1 | MAX                                                                                                    | MAXIM                                         | PCB          | PCB:MAX                                                                                                                        |
| 10     | CA1, CA2, CB1, CB2                         | DNP       |     0 | N/A                                                                                                    | N/A                                           | OPEN         | PACKAGE OUTLINE 0402 NON-POLAR CAPACITOR                                                                                       |
| 11     | RA1, RA2, RB1, RB2                         | DNP       |     0 | N/A                                                                                                    | N/A                                           | OPEN         | PACKAGE OUTLINE 0402 RESISTOR                                                                                                  |
| TOTAL  | TOTAL                                      |           |    26 |                                                                                                        |                                               |              |                                                                                                                                |

│

Evaluate: MAX22245/MAX22246/

MAX22290/MAX22291

## MAX22245/MAX22246/ MAX22290/MAX22291 Evaluation Kits

## MAX22245/MAX22246 EV Kit Schematic

<!-- image -->

## MAX22245/MAX22246/ MAX22290/MAX22291 Evaluation Kits

## MAX22245/MAX22246 EV Kit PCB Layout Diagrams

MAX22245/MAX22246 EV Kit -Top Silkscreen

<!-- image -->

MAX22245/MAX22246 EV Kit -Top

<!-- image -->

│

## MAX22245/MAX22246 EV Kit PCB Layout Diagrams (continued)

MAX22245/MAX22246 EV Kit -Layer 2 GND

<!-- image -->

MAX22245/MAX22246 EV Kit -Layer 3 PWR

<!-- image -->

│

## MAX22245/MAX22246/ MAX22290/MAX22291 Evaluation Kits

## MAX22245/MAX22246 EV Kit PCB Layout Diagrams (continued)

MAX22245/MAX22246 EV Kit -Bottom

<!-- image -->

MAX22245/MAX22246 EV Kit -Bottom Silkscreen

<!-- image -->

│

## MAX22245/MAX22246/ MAX22290/MAX22291 Evaluation Kits

## MAX22290/MAX22291 EV Kit Bill of Materials

| ITEM   | REF_DES                                    | DNI/DNP   |   QTY | MFG PART #                                                                          | MANUFACTURER                        | VALUE             | DESCRIPTION                                                                                                             | COMMENTS   |
|--------|--------------------------------------------|-----------|-------|-------------------------------------------------------------------------------------|-------------------------------------|-------------------|-------------------------------------------------------------------------------------------------------------------------|------------|
| 1      | A1, A2, B1, B2, REFA1, REFA2, REFB1, REFB2 |           |     8 | 142-0701-851                                                                        | JOHNSON COMPONENTS                  | 142-0701-851      | CONNECTOR; END LAUNCH JACK RECEPTACLE; BOARDMOUNT; STRAIGHT THROUGH; 2PINS;                                             |            |
| 2      | C1, C2                                     |           |     2 | CC0603KRX7R0BB104; GRM188R72A104KA35; HMK107B7104KA; 06031C104KAT2A; GRM188R72A104K | YAGEO;MURATA;TAIYO YUDEN;AVX;MURATA | 0.1UF             | CAP; SMT (0603); 0.1UF; 10%; 100V; X7R; CERAMIC                                                                         |            |
| 3      | C3, C4                                     |           |     2 | GRM21BR71H105KA12; CL21B105KBFNNN; C2012X7R1H105K085AC; UMK212B7105KG               | MURATA;SAMSUNG ELECTRONICS;TDK      | 1UF               | CAP; SMT (0805); 1UF; 10%; 50V; X7R; CERAMIC                                                                            |            |
| 4      | GNDA, GNDB                                 |           |     2 | 5011                                                                                | KEYSTONE                            | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
| 5      | J1, J2                                     |           |     2 | 5-146128-2                                                                          | TE CONNECTIVITY                     | 5-146128-2        | CONNECTOR; HEADER ASSEMBLY; BREAKAWAY MALE; SMT; STRAIGHT; 4PINS                                                        |            |
| 6      | MTH1-MTH4                                  |           |     4 | 9032                                                                                | KEYSTONE                            |                   | 9032 MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                          |            |
| 7      | R1-R4                                      |           |     4 | CRCW040220R0FK                                                                      | VISHAY DALE                         |                   | 20 RES; SMT (0402); 20; 1%; +/-100PPM/DEGC; 0.0630W                                                                     |            |
| 8      | VDDA, VDDB                                 |           |     2 | 5010                                                                                | KEYSTONE                            | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                   |            |
| 9      | PCB                                        |           |     1 | MAX2229X                                                                            | MAXIM                               | PCB               | PCB:MAX2229X                                                                                                            | -          |
| 10     | U1                                         | DNP       |     0 | MAX22290/MAX22291                                                                   | MAXIM                               | MAX22290/MAX22291 | EVKIT PART - IC; REINFORCED; FAST; LOW-POWER; TWO CHANNEL DIGITAL ISOLATOR;                                             |            |
| 11     | CA1, CA2, CB1, CB2                         | DNP       |     0 | N/A                                                                                 | N/A                                 | OPEN              | PACKAGE OUTLINE 0402 NON-POLAR CAPACITOR                                                                                |            |
| 12     | RA1, RA2, RB1, RB2                         | DNP       |     0 | N/A                                                                                 | N/A                                 | OPEN              | PACKAGE OUTLINE 0402 RESISTOR                                                                                           |            |
| TOTAL  |                                            |           |    27 |                                                                                     |                                     |                   |                                                                                                                         |            |

│

Evaluate: MAX22245/MAX22246/

MAX22290/MAX22291

## MAX22245/MAX22246/ MAX22290/MAX22291 Evaluation Kits

## MAX22290/MAX22291 EV Kit Schematic

<!-- image -->

│

## MAX22245/MAX22246/ MAX22290/MAX22291 Evaluation Kits

## MAX22290/MAX22291 EV Kit PCB Layout Diagrams

MAX22290/MAX22291 EV Kit -Top Silkscreen

<!-- image -->

MAX22290/MAX22291 EV Kit -Top

<!-- image -->

│

## MAX22290/MAX22291 EV Kit PCB Layout Diagrams (continued)

MAX22290/MAX22291 EV Kit -Layer 2 GND

<!-- image -->

MAX22290/MAX22291 EV Kit -Layer 3 PWR

<!-- image -->

│

## MAX22290/MAX22291 EV Kit PCB Layout Diagrams (continued)

MAX22290/MAX22291 EV Kit -Bottom

<!-- image -->

│

## MAX22245/MAX22246/ MAX22290/MAX22291 Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                       | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 5/20            | Initial Release                                                                                                                                                                                                                                                                                                                                                   | -               |
|                 1 | 8/21            | Updated General Description , Benefits and Features , Table 1, Quick Start section, Table 2, Detailed Description , External Power Supplies section, Calibration Channels section, and Ordering Information table; Added Figure 3, U1 on the MAX2224XW and MAX2229XS EV Kits section, and MAX22290/1 EV Kit Bill of Materials, Schematic, and PCB Layout Diagrams | 1-5, 11-15      |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

│

Evaluate: MAX22245/MAX22246/

MAX22290/MAX22291