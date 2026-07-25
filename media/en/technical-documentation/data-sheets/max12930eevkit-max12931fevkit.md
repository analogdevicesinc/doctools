<!-- lastmod 2022-08-04 -->
## MAX12930/MAX12931 Evaluation Kit

## General Description

The MAX12930/MAX12931  evaluation kit (EV kit) provides a proven design to evaluate the MAX12930 or MAX12931  two  channel  digital  isolators.  Two  types  of evaluation  boards  are  available  to  support  the  narrowbody and wide-body package types.

The  EV  kit  should  be  powered  from  two  independent isolated  power  supplies  with  nominal  output  voltage  in range  from  1.71V  to  5.5V.  For  evaluating  the  electrical parameters of the device without any isolation between the two sides, a single power supply can also be used.

The  MAX1293XEVKIT#  comes  with  U1  populated  and supports the following digital isolators: MAX12930BASA+, MAX12930CASA+,  MAX12930EASA+,  MAX12930FASA+ MAX12931BASA+, MAX12931CASA+, MAX12931EASA+, MAX12931FASA+, MAX12931BAWE+

## Table 1. EV Kit Options

| EVKIT PART #     | TARGET DEVICE   | PACKAGE TYPE       | COMMENT                   |
|------------------|-----------------|--------------------|---------------------------|
| MAX12930FEVKIT#  | MAX12930FASA+   | 8-SOIC Narrow-Body | 2 channel, 2/0,150Mbps IC |
| MAX12930EEVKIT#  | MAX12930EASA+   | 8-SOIC Narrow-Body | 2 channel, 2/0, 25Mbps IC |
| MAX12931FEVKIT#  | MAX12931FASA+   | 8-SOIC Narrow-Body | 2 channel, 1/1,150Mbps IC |
| MAX12931EEVKIT#  | MAX12931EASA+   | 8-SOIC Narrow-Body | 2 channel, 1/1, 25Mbps IC |
| MAX12931BWEVKIT# | MAX12931BAWE+   | 16-SOIC Wide-Body  | 2 channel, 1/1, 25Mbps IC |

<!-- image -->

Evaluates: MAX12930, MAX12931

## Features

- Broad Range of Data Transfer Rates (from DC to 150Mbps)
- Two Unidirectional Channels in the Same Direction (MAX12930) or Two Unidirectional Channels in the Opposite Direction (MAX12931)
- SMA Connectors for Easy Connection to External Equipment
- Wide Power Supply Voltage Range from 1.71V to 5.5V
- Guaranteed Up to 3kV RMS  Isolation (for the NarrowBody SOIC Package) for 60s
- Guaranteed Up to 5kV RMS  Isolation (for the WideBody SOIC Package) for 60s

Ordering Information appears at end of data sheet.

Figure 1. Narrow-Body MAX12931BS EVKIT

<!-- image -->

Figure 2. Wide-Body MAX12931BW EVKIT

<!-- image -->

│

## MAX12930/MAX12931 Evaluation Kit

## Quick Start

## Required Equipment

- MAX12930xS EV kit, MAX12931xS EV kit, or MAX12931BW EV kit
- Two adjustable +5V DC Power Supplies
- Signal/function generator
- Oscilloscope

Note: XS suffix stands for narrow-body EV kit; while BW suffix stands for wide-body EV kit.

## Procedure

The MAX12930xS, MAX12931xS, and MAX12931BW EV kits are fully assembled and ready for evaluation. Follow the steps below to verify board functionality:

## Table 2. MAX12930xS, MAX12931xS, and MAX12931BW Board Connectors and Shunt Positions

| CONNECTOR   | SHUNT POSITION   | DESCIPTION                                         |
|-------------|------------------|----------------------------------------------------|
| J1          | 1                | Test point or input header for V DDA               |
| J1          | 2                | Test point or input header for I/O; same as J2 SMA |
| J1          | 3                | Test point or input header for I/O; same as J3 SMA |
| J1          | 4                | Test point or input header for GNDA                |
| J2 (SMA)    | n/a              | I/O on side A                                      |
| J3 (SMA)    | n/a              | I/O on side A                                      |
| J4          | Open             | Use ampere meter to measure current of side A      |
| J4          | 1-2*             | Connect power supply to V DDA                      |
| J5          | Open             | Use ampere meter to measure current of side B      |
| J5          | 1-2*             | Connect power supply to V DDB                      |
| J6 (SMA)    | n/a              | I/O on side B                                      |
| J7 (SMA)    | n/a              | I/O on side B                                      |
| J8          | 1                | Test point or input header for V DDB               |
| J8          | 2                | Test point or input header for I/O; same as J6 SMA |
| J8          | 3                | Test point or input header for I/O; same as J7 SMA |
| J8          | 4                | Test point or input header for GNDB                |

*Default configuration

## Table 3. MAX12930xS, MAX12931xS, and MAX12931BW Test Points

| TEST POINT   | DESCIPTION                     |
|--------------|--------------------------------|
| TP1          | Test point for V DDA           |
| TP1A         | Test point for SMAconnector J2 |
| TP1B         | Test point for SMAconnector J6 |
| TP2, TP3     | Test point for GNDA            |
| TP2A         | Test point for SMAconnector J3 |
| TP2B         | Test point for SMAconnector J7 |
| TP4, TP5     | Test point for GNDB            |
| TP6          | Test point for V DDB           |

│

## Evaluates: MAX12930, MAX12931

- 1) Connect the DC power supplies between the MAX1293x  EV  kit's  V DDA /V DDB   and  GNDA/GNDB test points.
- 2) Turn on the DC power supplies and set them between 1.71V and 5.5V, then enable the power supply output. Note: It is also possible to power the MAX1293X EV kit from a single power supply to test electrical param -eters but this invalidates the digital isolation of the IC.
- 3) Connect  the  signal/function  generator  to  the  SMA connectors or test points of side A and observe the isolated  signal  on  the  other  side,  side  B,  using  an oscilloscope.

## MAX12930/MAX12931 Evaluation Kit

## Detailed Description of Hardware

The MAX12930xS, MAX12931xS, and MAX12931BW EV kit are powered from two external adjustable power supplies as described below.

## External Power Supplies

Power to the MAX12930xS, MAX12931xS, and MAX12931BW EV kit are derived from two external sources which can both be between +1.71V and +5.5V. Connect one source between the  V DDA  and  GNDA  test  points,  and  another  source  between the V DDB  and GNDB test points. Each supply can be set independently  and  can  be  present  over  the  entire  range from 1.71V to 5.5V, regardless of the level or presence of the  other  supply.  The  MAX12930/MAX12931  level-shifts the data, transmitting them across the isolation barrier.

## Evaluates: MAX12930, MAX12931

Two  SMA  connectors  on  each  side  of  the  board  allow easy connections to signal generator(s) and oscilloscope. A typical application diagram is shown in Figure 3.

## Decoupling Capacitors

Each  power  supply  is  decoupled  with  a  10µF  ceramic capacitor placed close to the power supply test point, and a 0.1µF ceramic capacitor placed close to U1.

## Termination

Each  input  and  output  has  an  unpopulated  0805  SMT resistor (R1-R4) and a 0805 SMT capacitor (C1, C2, C6, C7)  to  GND\_  to  allow  termination  based  on  customer requirements.

Figure 3. Typical Application Diagram

<!-- image -->

## Ordering Information

| PART             | TYPE                                |
|------------------|-------------------------------------|
| MAX12930FEVKIT#  | EV Kit with installed MAX12930FASA+ |
| MAX12930EEVKIT#  | EV Kit with installed MAX12930EASA+ |
| MAX12931FEVKIT#  | EV Kit with installed MAX12931FASA+ |
| MAX12931EEVKIT#  | EV Kit with installed MAX12931EASA+ |
| MAX12931BWEVKIT# | EV Kit with installed MAX12931BAWE+ |

│

## MAX1293XS EV Kit Bill of Materials

## MAX1293XS EV Kit Schematic

<!-- image -->

## MAX1293XS EV Kit PCB Layout

MAX1293XS EV Kit -Top Silkscreen

<!-- image -->

│

## MAX1293XS EV Kit PCB Layout (continued)

MAX1293XS EV Kit -Top

<!-- image -->

## MAX1293XS EV Kit PCB Layout (continued)

MAX1293XS EV Kit -Level 2 GND

<!-- image -->

│

## MAX1293XS EV Kit PCB Layout (continued)

MAX1293XS EV Kit -Level 3 PWR

<!-- image -->

│

## MAX1293XS EV Kit PCB Layout (continued)

MAX1293XS EV Kit -Bottom

<!-- image -->

│

## MAX12931BW EV Kit Bill of Materials

## MAX12931BW EV Kit Schematic

<!-- image -->

## MAX12931BW EV Kit PCB Layout

<!-- image -->

MAX12931BW EV Kit -Top Silkscreen

│

## MAX12931BW EV Kit PCB Layout (continued)

MAX12931BW EV Kit -Top

<!-- image -->

│

## MAX12931BW EV Kit PCB Layout (continued)

MAX12931BW EV Kit -Level 2 GND

<!-- image -->

│

## MAX12931BW EV Kit PCB Layout (continued)

MAX12931BW EV Kit -Level 3 PWR

<!-- image -->

│

## MAX12931BW EV Kit PCB Layout (continued)

MAX12931BW EV Kit -Bottom

<!-- image -->

│

## MAX12930/MAX12931 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                            | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 6/16            | Initial release                                                                                                                                                                                                        | -               |
|                 1 | 6/17            | Updated General Description , Features , Table 1, Required Equipment , Procedure , Table 2, Table 3, Detailed Description of Hardware , Component Information , PCB Layout , and Schematics , and Ordering Information | 1, 3-18         |
|                 2 | 11/20           | Removed future part designation from MAX12930EEVKIT#, MAX12931FEVKIT#, MAX12931EEVKIT# in the Ordering Information                                                                                                     | 4               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

│

Evaluates: MAX12930, MAX12931