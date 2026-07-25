<!-- lastmod 2022-08-04 -->
## MAX12934/MAX12935 Evaluation Kits

## General Description

The MAX12934/MAX12935  evaluation kit (EV kit) provides a proven design to evaluate the MAX12934 or MAX12935 two channel, wide-body digital isolators.

The  EV  kit  should  be  powered  from  two  independent isolated  power  supplies  with  nominal  output  voltage  in range  from  1.71V  to  5.5V.  For  evaluating  the  electrical parameters of the device without any isolation between the two sides, a single power supply can also be used.

The  MAX1293XWEVKIT#  comes  with  U1  populated  and supports  the  following  digital  isolators:  MAX12934BAWE+, MAX12934CAWE+, MAX12934EAWE+, MAX12934FAWE+, MAX12935BAWE+, MAX12935CAWE+, MAX12935EAWE+, MAX12935FAWE+

## Table 1. EV Kit Options

| EVKIT PART #     | TARGET DEVICE   | PACKAGE TYPE      | COMMENT                                                                                 |
|------------------|-----------------|-------------------|-----------------------------------------------------------------------------------------|
| MAX12934BWEVKIT# | MAX12934BAWE+   | 16 SOIC Wide-Body | 2 channel, 2/0, 25Mbps IC                                                               |
| MAX12934FWEVKIT# | MAX12934FAWE+   | 16 SOIC Wide-Body | 2 channel, 2/0, 200Mbps IC                                                              |
| MAX12935BWEVKIT# | MAX12935BAWE+   | 16 SOIC Wide-Body | 2 channel, 1/1, 25Mbps IC                                                               |
| MAX12935FWEVKIT# | MAX12935FAWE+   | 16 SOIC Wide-Body | 2 channel, 1/1, 200Mbps IC                                                              |
| MAX1293XWEVKIT#  | MAX1293_AWE+    | 16 SOIC Wide-Body | Unpopulated EV kit. Supports any isolator in the family; U1 must be ordered separately. |

<!-- image -->

Evaluates: MAX12934, MAX12935

## Features

- Broad Range of Data Transfer Rates (from DC to 200Mbps)
- Two Unidirectional Channels in the Same Direction (MAX12934) or Two Unidirectional Channels in the Opposite Direction (MAX12935)
- SMA Connectors for Easy Connection to External Equipment
- Wide Power Supply Voltage Range from 1.71V to 5.5V
- Guaranteed Up to 5kV RMS  Isolation (for the WideBody SOIC Package) for 60s

Ordering Information appears at end of data sheet.

Figure 1. Wide-Body MAX12934XW/MAX12935XW EV Kit

<!-- image -->

│

## MAX12934/MAX12935 Evaluation Kits

## Quick Start

## Required Equipment

- MAX12934XW or MAX12935XW EV kit
- Two adjustable +5V DC power supplies
- Signal/function generator
- Oscilloscope

## Procedure

The MAX12934XW and MAX12935XW EV kits are fully assembled  and  ready  for  evaluation.  Follow  the  steps below to verify board functionality:

## Evaluates: MAX12934, MAX12935

- 1) Connect the DC power supplies between the MAX1293x  EV  kit's  V DDA /V DDB   and  GNDA/GNDB test points.
- 2) Turn on the DC power supplies and set them between 1.71V and 5.5V, then enable the power supply output. Note: It is also possible to power the MAX1293X EV kit from a single power supply to test electrical parameters but this invalidates the digital isolation of the IC.
- 3) Connect  the  signal/function  generator  to  the  SMA connectors or test points of side A and observe the isolated  signal  on  the  other  side,  side  B,  using  an oscilloscope.

## Table 2. MAX12934xS, MAX12935xS, and MAX12935BW Board Connectors and Shunt Positions

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

## Table 3. MAX12934xS, MAX12935xS, and MAX12935BW Test Points

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

## MAX12934/MAX12935 Evaluation Kits

## Detailed Description of Hardware

The MAX12934XW and MAX12935XW EV kits are powered from two external adjustable power supplies as described below.

## External Power Supplies

Power  to  the  MAX12934XW  and  MAX12935XW  EV  kits are derived from two external sources which can both be between +1.71V and +5.5V. Connect one source between the  V DDA  and  GNDA  test  points,  and  another  source between  the  V DDB   and  GNDB  test  points.  Each  supply can  be  set  independently  and  can  be  present  over  the entire range from 1.71V to 5.5V, regardless of the level or presence of the other supply. The MAX12934/MAX12935 level-shifts the data, transmitting them across the isolation barrier.

## Evaluates: MAX12934, MAX12935

Two  SMA  connectors  on  each  side  of  the  board  allow easy connections to signal generator(s) and oscilloscope. A typical application diagram is shown in Figure 2.

## Decoupling Capacitors

Each  power  supply  is  decoupled  with  a  10µF  ceramic capacitor placed close to the power supply test point, and a 0.1µF ceramic capacitor placed close to U1.

## Termination

Each  input  and  output  has  an  unpopulated  0805  SMT resistor (R1-R4) and a 0805 SMT capacitor (C1, C2, C6, C7)  to  GND\_  to  allow  termination  based  on  customer requirements.

Figure 2. Typical Application Diagram

<!-- image -->

## Ordering Information

| PART               | TYPE                                                                               |
|--------------------|------------------------------------------------------------------------------------|
| MAX12934 BWEVKIT#* | EV Kit with installed MAX12934BAWE+                                                |
| MAX12934FWEVKIT#*  | EV Kit with installed MAX12934FAWE+                                                |
| MAX12935 BWEVKIT#  | EV Kit with installed MAX12935BAWE+                                                |
| MAX12935FWEVKIT#*  | EV Kit with installed MAX12935FAWE+                                                |
| MAX1293X WEVKIT#   | EV Kit without installed isolator. U1 digital isolator must be ordered separately. |

│

## MAX1293XW EV Kit Bill of Materials

## MAX1293XW EV Kit Schematic

<!-- image -->

## MAX1293XW EV Kit PCB Layout

MAX1293XW EV Kit -Top Silkscreen

<!-- image -->

MAX1293XW EV Kit -Level 2 GND

<!-- image -->

MAX1293XW EV Kit -Top

<!-- image -->

MAX1293XW EV Kit -Level 3 Power

<!-- image -->

│

## MAX1293XW EV Kit PCB Layout (continued)

MAX1293XW EV Kit -Bottom

<!-- image -->

│

## MAX12934/MAX12935 Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                  | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------|-----------------|
|                 0 | 11/17           | Initial release                              | -               |
|                 1 | 8/20            | Updated Table 1 and the Ordering Information | 1, 4            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

<!-- image -->

│

Evaluates: MAX12934, MAX12935