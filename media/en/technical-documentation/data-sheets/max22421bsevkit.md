<!-- lastmod 2022-08-05 -->
## Evaluates: MAX22420, MAX22421, MAX22820, MAX22821

## General Description

The MAX22420/MAX22421  evaluation kits (EV kits) provide a proven design to evaluate the MAX22420/1 and MAX22820/1, a family of reinforced, ultra-low-power, twochannel digital isolators in an 8-pin NSOIC or 8-pin WSOIC package, respectively. Two types of evaluation boards are available to support all variants in the family in both 1/1 and 2/0  configurations.  The  MAX22421BSEVKIT#  is  fully assembled and tested, and it comes populated with the MAX22421BASA+ ( Figure 1 ). The MAX2242XSEVKIT# is a generic board that has U1 unpopulated, allowing the user to select a device from the MAX22420/MAX22421 family ( Figure 2 ).  Both  the  evaluation boards support the 8-pin NSOIC package type only. See Table 1 EV kit options.

The  MAX22820/MAX22821  is  functionally  equivalent  to the MAX22420/MAX22421  but in an 8-pin  WSOIC package.  The  EV  kits  can  be  used  to  evaluate  the functionality and electrical performance of the MAX22820/ MAX22821.

The  EV  kits  should  be  powered  from  two  independent isolated power supplies with nominal output voltage in the range  of  1.71V  to  5.5V.  For  evaluating  the  electrical parameters of the device without any isolation between the two sides, a single power supply can also be used.

## EV Kit Photos

Figure 1. MAX22421BS EV kit

<!-- image -->

## MAX22420/MAX22421 Evaluation Kit

The MAX2242XSEVKIT# comes with U1 unpopulated and supports the following digital isolators: MAX22420BASA+, MAX22420CASA+,  MAX22420EASA+,  MAX22420FASA+, MAX22421BASA+,  MAX22421CASA+,  MAX22421EASA+, and MAX22421FASA+.

Note: When ordering the MAX2242XS EV kit, the engineer should  request  a  sample  of  the  desired  MAX22420/1 isolator IC that can be soldered to the PCB.

## Features

- Ultra-Low-Power Operation
- Data Transfer Rates up to 10Mbps
- MAX22420 with 2:0 Channel Configuration MAX22421 with 1:1 Channel Configuration
- SMA  Connectors  for  Easy  Connection  to  External Equipment
- Wide Power Supply Voltage Range from 1.71V to 5.5V
- Guaranteed up to 3kV RMS  Isolation for the 60s
- -40°C to +125°C Temperature Range
- Proven PCB Layout

Ordering Information appears at end of data sheet.

<!-- image -->

Figure 2. MAX2242XS EV kit

<!-- image -->

## MAX22420/MAX22421 Evaluation Kit

## Quick Start

## Required Equipment

- MAX22421BS or MAX2242XS EV kit
- MAX22420/MAX22421 device if U1 is not populated on the EV kit
- Two DC power supplies with an output range of 1.71V to 5.5V
- Signal/function generator
- Oscilloscope

## Procedure

The MAX22421BS EV kit is fully assembled and ready for evaluation. The MAX2242XS EV kit has everything except the DUT (U1) installed.  The  user  can  install  the  desired  version  of  the  MAX22420/MAX22421  family  of  ultra-low-power reinforced digital isolators. Once installed, follow these steps to verify board functionality:

1.  Connect one DC power supply between the EV kit's VDDA and GNDA test points; connect the other DC power supply between the VDDB and GNDB test points.
2.  Set both DC power supply outputs between 1.71V and 5.5V, and then enable the power supply outputs. Note: It is also possible to power the EV kit from a single power supply to test electrical parameters, but this invalidates the digital isolation of the IC.
3.  Connect the signal/function generator to an input SMA connector or test point of side A and observe the isolated signal on the corresponding side B output using an oscilloscope. On the MAX22421BS EV kit, SMA connectors A2 and B1 are inputs, and SMA connectors A1 and B2 are outputs. See Table 2 for the SMA connector I/O configurations for different MAX22420/1 devices on the MAX2242XS EV kit.

## Table 1. EV Kit Options

| EVKIT PART #     | TARGET DEVICE   | PACKAGE TYPE   | COMMENT                                       |
|------------------|-----------------|----------------|-----------------------------------------------|
| MAX22421BSEVKIT# | MAX22421BASA+   | 8-pin NSOIC    | IC Populated                                  |
| MAX2242XSEVKIT#  | Not Populated   | 8-pin NSOIC    | Request Samples of Target Device from Factory |

## Table 2. MAX22421BS and MAX2242XS EV Kits Connector Configurations

| CONNECTOR   | SHUNT POSITION   | U1 DEVICE                                           | U1 DEVICE                                           |
|-------------|------------------|-----------------------------------------------------|-----------------------------------------------------|
| CONNECTOR   | SHUNT POSITION   | MAX22420                                            | MAX22421                                            |
| SIDE A      | SIDE A           | SIDE A                                              | SIDE A                                              |
| A1 (SMA)    | -                | IN1                                                 | OUT1                                                |
| A2 (SMA)    | -                | IN2                                                 | IN2                                                 |
| REFA1 (SMA) | -                | I/O on side A                                       | I/O on side A                                       |
| REFA2 (SMA) | -                | I/O on side A                                       | I/O on side A                                       |
| J1          | 1                | Test point or input header for V DDA .              | Test point or input header for V DDA .              |
| J1          | 2                | Test point or input header for I/O; same as A1 SMA. | Test point or input header for I/O; same as A1 SMA. |
| J1          | 3                | Test point or input header for I/O; same as A2 SMA. | Test point or input header for I/O; same as A2 SMA. |
| J1          | 4                | Test point or input header for GNDA.                | Test point or input header for GNDA.                |
| SIDE B      | SIDE B           | SIDE B                                              | SIDE B                                              |
| B1 (SMA)    | -                | OUT1                                                | IN1                                                 |
| B2 (SMA)    | -                | OUT2                                                | OUT2                                                |
| REFB1 (SMA) | -                | I/O on side B                                       | I/O on side B                                       |

Evaluates: MAX22420,

MAX22421,

MAX22820, MAX22821

Evaluates: MAX22420,

MAX22421,

MAX22820, MAX22821

| REFB2 (SMA)   |    | I/O on side B                                       |
|---------------|----|-----------------------------------------------------|
| J2            |  1 | Test point or input header for V DDB .              |
| J2            |  2 | Test point or input header for I/O; same as B1 SMA. |
| J2            |  3 | Test point or input header for I/O; same as B2 SMA. |
| J2            |  4 | Test point or input header for GNDB.                |

## Detailed Description of Hardware

The MAX22420/MAX22421 EV kits allow the user to evaluate the features of the MAX22420/MAX22421 and MAX22820/ MAX22821, a family of reinforced, ultra-low-power, two-channel, galvanic digital isolators.

## External Power Supplies

The Power to the MAX22421BS and MAX2242XS EV kits is derived from two external sources which can both be between +1.71V and +5.5V. Connect one source between the VDDA and GNDA test points, and the other source between the VDDB and GNDB test points. Each supply can be set independently and can be present over the entire range from +1.71V to +5.5V, regardless of the level or presence of the other supply. The device level-shifts the data, transmitting them across the isolation barrier.

Two SMA connectors on each side of the board allow easy connections to signal generator(s) and an oscilloscope. A typical test setup is shown in Figure 3 .

Figure 3. MAX22421BS EV kit typical test setup

<!-- image -->

## MAX22420/MAX22421 Evaluation Kit

## Decoupling Capacitors

Each power supply is decoupled with a 1μF ceramic capacitor in parallel with a 0.1μF ceramic capacitor, which is placed close to the U1 V DDA  and V DDB  pins.

## I/O Traces Impedance Control

The input and output traces of both isolation channels have an impedance control of 50Ω. A 20Ω series resistor is added to both input and output channels; along with the internal series resistance, it can provide 50Ω impedance matching with external equipment such as function generators or oscilloscopes.

## Output Load

Each output has an unpopulated 0402 SMT resistor (RA1, RA2, RB1, RB2) and an unpopulated 0402 SMT capacitor (CA1, CA2, CB1, CB2) to GND\_ to allow different loads based on customer requirements.

## Calibration Channels

Two reference channels (REFA1-REFB1, REFA2-REFB2) are implemented on the EV kits to help calibrate the test setup for timing measurements such as propagation delay. Measure the propagation delay (t PD\_REF ) using the reference channel first to determine the delay introduced by the test setup. Measure the propagation delay (t PD\_ISO ) again using one of the MAX22420/1 data channels. The calibrated isolator delay is t PD\_ISO  - t PD\_REF .

## U1 on the MAX2242XS EV Kit

U1 on the MAX2242XSEVKIT# is not installed. The user can install the desired version of MAX22420 or MAX22421. The MAX22420 features both channels transferring digital signals in one direction. SMA connectors A1 and A2 on side A are input connectors, B1 and B2 on side B are output connectors if the MAX22420 is installed as U1. The MAX22421 has one  channel  transmitting  data  in  one  direction  and  the  other  channel  transmitting  in  the  opposite  direction.  SMA connectors A2 and B1 are input connectors, A1 and B2 are output connectors if the MAX22421 is installed as U1. See Table 2 for SMA connector I/O configurations with different U1 selections.

When installing U1, make sure pin 1 of the device is mounted onto pin 1 of U1 on the PCB. Pin 1 is located at the upper left corner of U1, denoted by a white dot on the silkscreen.

## Ordering Information

| PART             | TYPE                                |
|------------------|-------------------------------------|
| MAX22421BSEVKIT# | EV kit Installed with MAX22421BASA+ |
| MAX2242XSEVKIT#  | EV Kit for 8-pin NSOIC Package      |

Evaluates: MAX22420,

MAX22421,

MAX22820, MAX22821

## MAX22420/MAX22421 Evaluation Kit

## MAX22420/MAX22421 EV Kit Bill of Materials

|   ITEM | REF_DES                                    | DNP   |   QTY | MFG PART #                                                                          | MANUFACTURER                                  | VALUE         | DESCRIPTION                                                                                                                                                                        |
|--------|--------------------------------------------|-------|-------|-------------------------------------------------------------------------------------|-----------------------------------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 | A1, A2, B1, B2, REFA1, REFA2, REFB1, REFB2 | -     |     8 | 142-0701-851                                                                        | JOHNSON COMPONENTS                            | 142-0701-851  | CONNECTOR; END LAUNCH JACK RECEPTACLE; BOARDMOUNT; STRAIGHT THROUGH; 2PINS;                                                                                                        |
|      2 | C1, C2                                     | -     |     2 | CC0603KRX7R0BB104; GRM188R72A104KA35; HMK107B7104KA; 06031C104KAT2A; GRM188R72A104K | YAGEO; MURATA; TAIYO YUDEN; AVX; MURATA       | 0.1UF         | CAP; SMT (0603); 0.1UF; 10%; 100V; X7R; CERAMIC                                                                                                                                    |
|      3 | C3, C4                                     | -     |     2 | GRM21BR71H105KA12; CL21B105KBFNNN; C2012X7R1H105K085AC; UMK212B7105KG               | MURATA; SAMSUNG ELECTRONICS; TDK; TAIYO YUDEN | 1UF           | CAP; SMT (0805); 1UF; 10%; 50V; X7R; CERAMIC                                                                                                                                       |
|      4 | GNDA, GNDB                                 | -     |     2 | 5011                                                                                | KEYSTONE                                      | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |
|      5 | J1, J2                                     | -     |     2 | 5-146128-2                                                                          | TE CONNECTIVITY                               | 5-146128-2    | CONNECTOR; HEADER ASSEMBLY; BREAKAWAY MALE; SMT; STRAIGHT; 4PINS                                                                                                                   |
|      6 | MTH1-MTH4                                  | -     |     4 | 9032                                                                                | KEYSTONE                                      | 9032          | MACHINE FABRICATED; ROUND- THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                                         |
|      7 | R1-R4                                      | -     |     4 | CRCW040220R0FK                                                                      | VISHAY DALE                                   | 20            | RES; SMT (0402); 20; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                   |
|      8 | U1                                         | -     |     1 | MAX22421BASA+                                                                       | MAXIM                                         | MAX22421BASA+ | EVKIT PART - IC; MAX22421; ULTRA-LOW POWER 2CH REINFORCED DIGITAL ISOLATOR; PACKAGE LAND PATTERN: 90-0096; NSOIC8                                                                  |
|      9 | VDDA, VDDB                                 | -     |     2 | 5010                                                                                | KEYSTONE                                      | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL; NOT FOR COLD TEST                                                            |
|     10 | PCB                                        | -     |     1 | MAX2242XS                                                                           | MAXIM                                         | PCB           | PCB:MAX2242XS                                                                                                                                                                      |
|     11 | CA1, CA2, CB1, CB2                         | DNP   |     4 | N/A                                                                                 | N/A                                           | OPEN          | PACKAGE OUTLINE 0402 NON- POLAR CAPACITOR - EVKIT                                                                                                                                  |
|     12 | RA1, RA2, RB1, RB2                         | DNP   |     4 | N/A                                                                                 | N/A                                           | OPEN          | PACKAGE OUTLINE 0402 RESISTOR - EVKIT                                                                                                                                              |

Evaluates: MAX22420,

MAX22421,

MAX22820, MAX22821

## MAX22420/MAX22421 Evaluation Kit

## MAX22420/MAX22421 EV Kit Schematic Diagram

<!-- image -->

Evaluates: MAX22420,

MAX22421,

MAX22820, MAX22821

## MAX22420/MAX22421 Evaluation Kit

## MAX22420/MAX22421 EV Kit PCB Layout Diagrams

MAX22420/MAX22421 EV Kit PCB Layout -Top Silkscreen

<!-- image -->

MAX22420/MAX22421 EV Kit PCB Layout-Top Layer

<!-- image -->

Evaluates: MAX22420,

MAX22421,

MAX22820, MAX22821

## MAX22420/MAX22421 Evaluation Kit

MAX22420/MAX22421 EV Kit PCB Layout-Layer 2 GND

<!-- image -->

O

Evaluates: MAX22420,

MAX22421,

## MAX22820, MAX22821

MAX22420/MAX22421 EV Kit PCB Layout-Layer 3 PWR

<!-- image -->

O

## MAX22420/MAX22421 Evaluation Kit

MAX22420/MAX22421 EV Kit PCB Layout-Bottom Layer

<!-- image -->

Evaluates: MAX22420,

MAX22421,

MAX22820, MAX22821

## MAX22420/MAX22421 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 02/22           | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

c o m

Evaluates: MAX22420,

MAX22421,

MAX22820, MAX22821