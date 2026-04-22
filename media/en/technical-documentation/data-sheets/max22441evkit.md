<!-- lastmod 2023-06-02 -->
<!-- image -->

## MAX22440/1/2 Evaluation Kits

## General Description

The MAX22440-MAX22442  evaluation kits (EV kits) provide  a  proven  design  to  evaluate  the  MAX22440MAX22442, MAX22840-MAX22842, and MAX22880MAX22882, a family of reinforced, ultra-low-power, fourchannel digital isolators in a 16-pin QSOP, 16-pin WSOIC, or  20-pin  SSOP  package,  respectively.  Two  types  of evaluation boards are available to support all variants in the family in 4/0, 3/1, or 2/2 channel configurations. The MAX22441CEEVKIT# is fully assembled and tested, and it comes populated with the MAX22441CAEE+ ( Figure 1 ). The MAX2244XEEVKIT# is a generic board that has U1 unpopulated, allowing the user to select a device from the MAX22440-MAX22442 family ( Figure 2 ). Both evaluation boards only support the 16-pin QSOP package type. See Table 1 for EV kit options.

The  MAX22840-MAX22842  and  MAX22880-MAX22882 are functionally equivalent to the MAX22440-MAX22442, but  in  a  16-pin  WSOIC  and  20-pin  SSOP  package, respectively.  The  EV  kits  can  be  used  to  evaluate  the functionality and electrical performance of the MAX22840MAX22842 and the MAX22880-MAX22882.

The  EV  kits  should  be  powered  from  two  independent isolated power supplies with nominal output voltage in the range  of  1.71V  to  5.5V.  For  evaluating  the  electrical parameters of the device without any isolation between the two sides, a single power supply can also be used.

The MAX2244XEEVKIT# comes with U1 unpopulated and supports the following digital isolators: MAX22440CAEE+, MAX22440FAEE+,  MAX22441CAEE+,  MAX22441FAEE+, MAX22442CAEE+, and MAX22442FAEE+.

Note: When ordering the MAX2244XE EV kit, the engineer should request a sample of the desired MAX22440-MAX22442 isolator IC that can be soldered to the PCB.

## Features

- Ultra-Low-Power Operation
- Data Transfer Rates up to 10Mbps
- MAX22440 with 4:0 Channel Configuration MAX22441 with 3:1 Channel Configuration MAX22442 with 2:2 Channel Configuration
- SMA Connectors for External Equipment Connection
- Wide Power Supply Voltage Range from 1.71V to 5.5V
- Guaranteed up to 3kV RMS  Isolation for 60 seconds
- -40°C to +125°C Temperature Range
- Proven PCB Layout

Evaluate: MAX22440/1/2,

MAX22840/1/2, MAX22880/1/2

## EV Kit Photos

Figure 1. MAX22441CE EV Kit

<!-- image -->

Figure 2. MAX2244XE EV Kit

<!-- image -->

Ordering Information appears at end of data sheet.

## MAX22440/1/2 Evaluation Kits

## Quick Start

## Required Equipment

- MAX22441CE or MAX2244XE EV kit
- MAX22440-MAX22442 device if U1 is not populated on the EV kit
- Two DC power supplies with an output range of 1.71V to 5.5V
- Signal/function generator
- Digital oscilloscope

## Procedure

The MAX22441CE EV kit is fully assembled and ready for evaluation. The MAX2244XE EV kit has everything except the DUT (U1) installed.  The  user  can  install  the  desired  version  of  the  MAX22440-MAX22442  family  of  ultra-low-power reinforced digital isolators. Once installed, follow these steps to verify board functionality:

1.  Verify all jumpers are in their default position as shown in Table 2 .
2.  Connect one DC power supply between t he EV kit's VDDA and GNDA test points; connect the other DC power supply between the VDDB and GNDB test points.
3.  Set both DC power supply outputs between 1.71V and 5.5V, and then enable the power supply outputs. Note : It is also possible to power the EV kit from a single power supply to test electrical parameters, but this invalidates the digital isolation of the IC.
4.  Connect the signal/function generator to an input SMA connector or test point of side A and observe the isolated signal on the corresponding side B output using an oscilloscope. On the MAX22441CE EV kit, SMA connectors A1, A2, A3, and B4 are inputs, and SMA connectors B1, B2, B3, and A4 are outputs. See Table 3 for the SMA connector I/O configurations for each MAX22440-MAX22442 device on the MAX2244XE EV kit.

## Table 1. EV Kit Options

| EV KIT PART #    | TARGET DEVICE   | PACKAGE TYPE   | COMMENT                                       |
|------------------|-----------------|----------------|-----------------------------------------------|
| MAX22441CEEVKIT# | MAX22441CAEE+   | 16-pin QSOP    | IC Installed                                  |
| MAX2244XEEVKIT#  | Not Populated   | 16-pin QSOP    | Request Samples of Target Device from Factory |

Evaluate: MAX22440/1/2, MAX22840/1/2, MAX22880/1/2

Evaluate: MAX22440/1/2, MAX22840/1/2,

MAX22880/1/2

Table 2. EV Kit Shunt Positions

| CONNECTOR   | SHUNT POSITION   | DESCRIPTION                                                                                             |
|-------------|------------------|---------------------------------------------------------------------------------------------------------|
| SIDE A      | SIDE A           | SIDE A                                                                                                  |
| J1 (ENA)    | 1-2*             | Connect side A enable pin ENA to V DDA . Side A outputs are enabled when ENA is connected to V DDA .    |
| J1 (ENA)    | 2-3              | Connect side A enable pin ENA to GNDA. Side A outputs are high-impedance when ENA is connected to GNDA. |
| J1 (ENA)    | Open             | Side A enable pin is not connected when U1 is installed with the MAX22440.                              |
| J3          | 1                | Test point or input header for V DDA .                                                                  |
| J3          | 2                | Test point or input header for GNDA.                                                                    |
| J3          | 3                | Test point or input header for I/O; same as A1 SMA.                                                     |
| J3          | 4                | Test point or input header for I/O; same as A2 SMA.                                                     |
| J3          | 5                | Test point or input header for I/O; same as A3 SMA.                                                     |
| J3          | 6                | Test point or input header for I/O; same as A4 SMA.                                                     |
| J3          | 7                | Test point or input header for ENA.                                                                     |
| J3          | 8                | Test point or input header for GNDA.                                                                    |
| SIDE B      | SIDE B           | SIDE B                                                                                                  |
| J2 (ENB)    | 1-2*             | Connect side B enable pin ENB to V DDB . Side B outputs are enabled when ENB is connected to V DDB .    |
| J2 (ENB)    | 2-3              | Connect side B enable pin ENB to GNDB. Side B outputs are high-impedance when ENB is connected to GNDB. |
| J4          | 1                | Test point or input header for V DDB .                                                                  |
| J4          | 2                | Test point or input header for GNDB.                                                                    |
| J4          | 3                | Test point or input header for I/O; same as B1 SMA.                                                     |
| J4          | 4                | Test point or input header for I/O; same as B2 SMA.                                                     |
| J4          | 5                | Test point or input header for I/O; same as B3 SMA.                                                     |
| J4          | 6                | Test point or input header for I/O; same as B4 SMA.                                                     |
| J4          | 7                | Test point or input header for ENB.                                                                     |
| J4          | 8                | Test point or input header for GNDB.                                                                    |

*Default option.

Table 3. EV Kit Connector Configurations

| CONNECTOR   | U1 DEVICE     | U1 DEVICE     | U1 DEVICE     |
|-------------|---------------|---------------|---------------|
|             | MAX22440      | MAX22441      | MAX22442      |
| SIDE A      | SIDE A        | SIDE A        | SIDE A        |
| A1 (SMA)    | IN1           | IN1           | IN1           |
| A2 (SMA)    | IN2           | IN2           | IN2           |
| A3 (SMA)    | IN3           | IN3           | OUT3          |
| A4 (SMA)    | IN4           | OUT4          | OUT4          |
| REFA1 (SMA) | I/O on Side A | I/O on Side A | I/O on Side A |
| REFA2 (SMA) | I/O on Side A | I/O on Side A | I/O on Side A |
| SIDE B      | SIDE B        | SIDE B        | SIDE B        |
| B1 (SMA)    | OUT1          | OUT1          | OUT1          |
| B2 (SMA)    | OUT2          | OUT2          | OUT2          |
| B3 (SMA)    | OUT3          | OUT3          | IN3           |
| B4 (SMA)    | OUT4          | IN4           | IN4           |
| REFB1 (SMA) | I/O on Side B | I/O on Side B | I/O on Side B |
| REFB2 (SMA) | I/O on Side B | I/O on Side B | I/O on Side B |

## Evaluate: MAX22440/1/2, MAX22840/1/2, MAX22880/1/2

## Detailed Description of Hardware

The MAX22440-MAX22442 EV kits allow the user to evaluate the features of the MAX22440-MAX22442, MAX22840MAX22842, and MAX22880-MAX22882, a family of reinforced, ultra-low-power, four-channel, galvanic digital isolators.

## External Power Supplies

The power to the EV kits is derived from two external sources which can both be between +1.71V and +5.5V. Connect one source between the VDDA and GNDA test points, and the other source between the VDDB and GNDB test points. Each supply can be set independently and can be present over the entire range from +1.71V to +5.5V, regardless of the level or presence of the other supply. The device level-shifts the data, transmitting them across the isolation barrier.

Four SMA connectors on each side of the board allow easy connections to signal generator(s) and oscilloscope. A typical test setup is shown in Figure 3 .

Figure 3. MAX22441CE EV Kit Typical Test Setup

<!-- image -->

## Decoupling Capacitors

A power supply on each side is decoupled with a 1μF ceramic capacitor in parallel with a 0.1μF ceramic capacitor, which are placed close to the U1 V DDA  and V DDB  pins.

## MAX22440/1/2 Evaluation Kits

## Evaluate: MAX22440/1/2, MAX22840/1/2, MAX22880/1/2

## Shunt Positions

Jumpers J1 (ENA) and J2 (ENB) are provided to enable or disable the outputs of the MAX22440-MAX22442 isolation channels. Connect the J1 shunt to V DDA  to enable side A outputs or connect to GNDA to disable them. Side A outputs are high-impedance when disabled. Connect the J2 shunt to V DDB  to enable side B outputs or connect to GNDB to disable them. Side B outputs are high-impedance when disabled. Leave J1 open if U1 is installed with the MAX22440. See Table 2 for all shunt positions and Table 3 for connector configurations.

## I/O Traces Impedance Control

The input and output traces of all channels have an impedance control of 50Ω. A 20Ω series resistor (R1 -R8) is added to all  input  and  output  channels; along with the internal series resistance, it can provide 50Ω impedance matching with external equipment such as function generators or digital oscilloscopes.

## Output Load

Each output has an unpopulated 0402 SMT resistor (RA1-RA4, RB1-RB4) and an unpopulated 0402 SMT capacitor (CA1CA4, CB1-CB4) to GND\_ to allow different loads based on customer requirements.

## Calibration Channels

Two reference channels (REFA1-REFB1, REFA2-REFB2) are implemented on the EV kits to help calibrate the test setup for timing measurements such as propagation delay. Measure the propagation delay (t PD\_REF ) using either of the two reference channels first to determine the delay introduced by the test setup. Measure the propagation delay (t PD\_ISO ) again using one of the MAX22440-MAX22442 data channels. The calibrated isolator delay is t PD\_ISO  - t PD\_REF .

## U1 on the MAX2244XE EV Kit

U1 on the MAX2244XEEVKIT# is not installed. The user can install the desired version of MAX22440, MAX22441, or MAX22442. The MAX22440 features all four channels transferring digital signals in one direction; if installed as U1, the SMA connectors A1-A4 on side A are input connectors and B1-B4 on side B are output connectors. The MAX22441 has three channel transmitting data in one direction and the other channel transmitting in the opposite direction; if installed as U1, SMA connectors A1-A3 and B4 are input connectors and B1-B3 and A4 are output connectors. The MAX22442 has two channels transmitting data in one direction and the other two channels transmitting in the opposite direction; if installed as U1, SMA connectors A1-A2 and B3-B4 are input connectors and B1-B2 and A3-A4 are output connectors. See Table 3 for SMA connector I/O configurations with different U1 selections.

When installing U1, make sure pin 1 of the device is mounted onto pin 1 of U1 on the PCB. Pin 1 is located at the upper left corner of U1, denoted by a dot on the silkscreen.

## Ordering Information

| PART             | TYPE                                |
|------------------|-------------------------------------|
| MAX22441CEEVKIT# | EV Kit installed with MAX22441CAEE+ |
| MAX2244XEEVKIT#  | EV Kit for 16-pin QSOP package      |

#Denotes RoHS-compliant.

## MAX22440/1/2 Evaluation Kits

## Evaluate: MAX22440/1/2, MAX22840/1/2, MAX22880/1/2

## MAX22440-MAX22442 EV Kit Bill of Materials

|   ITEM | REF_DES                                   | DNP   |   QTY | MFG PART#                                                                                      | MANUFACTU -RER                               | VALUE         | DESCRIPTION                                                                                                                   |
|--------|-------------------------------------------|-------|-------|------------------------------------------------------------------------------------------------|----------------------------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------|
|      1 | A1-A4, B1- B4, REFA1, REFA2, REFB1, REFB2 | -     |    12 | 142-0701-851                                                                                   | JOHNSON COMPONENT S                          | 142- 0701-851 | CONNECTOR; END LAUNCH JACK RECEPTACLE; BOARDMOUNT; STRAIGHT THROUGH; 2PINS;                                                   |
|      2 | C1, C2                                    | -     |     2 | GCJ188R71H104KA 12;GCM188R71H10 4K;CGA3E2X7R1H1 04K080AA;CGA3E2 X7R1H104K080AD; CL10B104KB8WPN | MURATA;MU RATA;TDK;T DK;SAMSUN G             | 0.1UF         | CAP; SMT (0603); 0.1UF; 10%; 50V; X7R; CERAMIC                                                                                |
|      3 | C3, C4                                    | -     |     2 | GRM21BR71H105K A12;CL21B105KBF NNN;C2012X7R1H1 05K085AC;UMK212 B7105KG                         | MURATA;SA MSUNG ELECTRONIC S;TDK;TAIYO YUDEN | 1UF           | CAP; SMT (0805); 1UF; 10%; 50V; X7R; CERAMIC                                                                                  |
|      4 | J1, J2                                    | -     |     2 | PEC03SAAN                                                                                      | SULLINS                                      | PEC03S AAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                     |
|      5 | J3, J4                                    | -     |     2 | 5-146128-6                                                                                     | TE CONNECTIVI TY                             | 5- 146128-6   | CONNECTOR; MALE; SMT; BREAKAWAY ; STRAIGHT; 8PINS                                                                             |
|      6 | MTH1-MTH4                                 | -     |     4 | 9032                                                                                           | KEYSTONE                                     | 9032          | MACHINE FABRICATED; ROUND- THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                    |
|      7 | R1-R8                                     | -     |     8 | CRCW040220R0FK                                                                                 | VISHAY DALE                                  | 20            | RES; SMT (0402); 20; 1%; +/- 100PPM/DEGC; 0.0630W                                                                             |
|      8 | SU1, SU2                                  | -     |     2 | S1100-B;SX1100- B;STC02SYAN                                                                    | KYCON;KYC ON;SULLINS ELECTRONIC S CORP.      | SX1100- B     | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                       |
|      9 | TP1_GNDA, TP1_GNDB, TP2_GNDA, TP2_GNDB    | -     |     4 | 5011                                                                                           | KEYSTONE                                     | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;       |
|     10 | TP_VDDA, TP_VDDB                          | -     |     2 | 5013                                                                                           | KEYSTONE                                     | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;      |
|     11 | U1                                        | -     |     1 | MAX22440-2                                                                                     | MAXIM                                        | MAX224 40-2   | EVKIT PART - IC; MAX2244X SERIES; PACKAGE DRAWING NUMBER: 21- 0055; PACKAGE LAND PATTERN: 90- 0167; PACKAGE CODE: N/A; QSOP16 |
|     12 | PCB                                       | -     |     1 | MAX2244XE                                                                                      | MAXIM                                        | PCB           | PCB:MAX2244XE                                                                                                                 |
|     13 | RA1-RA4, RB1-RB4                          | DNP   |     0 | N/A                                                                                            | N/A                                          | OPEN          | PACKAGE OUTLINE 0402 RESISTOR                                                                                                 |
|     14 | CA1-CA4, CB1-CB4                          | DNP   |     0 | N/A                                                                                            | N/A                                          | OPEN          | PACKAGE OUTLINE 0402 NON-POLAR CAPACITOR                                                                                      |

## MAX22440/1/2 Evaluation Kits

## MAX22440-MAX22442 EV Kit Schematic 1

1

<!-- image -->

D

C

B

A

B

DATE

REV

EET 1  F 1

Evaluate: MAX22440/1/2, MAX22840/1/2, MAX22880/1/2

## MAX22440/1/2 Evaluation

## MAX22440-MAX22442 EV Kit PCB Layout

<!-- image -->

MAX22440-MAX22442 EV Kit PCB Layout -Top Silkscreen

<!-- image -->

MAX22440-MAX22442 EV Kit PCB Layout -Layer 2

MAX22440-MAX22442 EV Kit PCB Layout -Top Layer

<!-- image -->

MAX22440-MAX22442 EV Kit PCB Layout -Layer 3

<!-- image -->

## Evaluate: MAX22440/1/2, MAX22840/1/2, MAX22880/1/2

MAX22440-MAX22442 EV Kit PCB Layout -Bottom Layer

<!-- image -->

## MAX22440/1/2 Evaluation Kits

## Evaluate: MAX22440/1/2, MAX22840/1/2, MAX22880/1/2

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/22            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## MAX22440/1/2

## Evaluation Kits