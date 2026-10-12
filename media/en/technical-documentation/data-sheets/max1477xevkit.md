<!-- lastmod 2022-08-04 -->
## MAX1477X Evaluation Kit

## General Description

The MAX1477X evaluation kit (EV kit) provides a proven design to evaluate the MAX14774,  a quad singlepole/single-throw (SPST), or the MAX14779, a dual singlepole/double-throw (SPDT)  Beyond-the-Rails TM analog switch.  The  MAX1477XEVKIT#  is  fully  assembled  and tested and comes populated with the MAX14774ATP+.

The MAX1477XEVKIT# can also be used to evaluate the MAX14779ATP+. See the Configure the MAX1477X EV Kit section for more information.

## Features

- Supports evaluating both MAX14774 and MAX14779
- SMA Connectors for Analog Inputs and Outputs
- Jumpers  at EN\_  Digital Control Inputs for  Easy Channel Configuration
- Test Points for All Digital and Analog Signals
- Fully Assembled and Tested
- Proven PCB Layout

## Quick Start

## Required Equipment

- MAX1477XEVKIT#
- Two DC power supplies
- Digital multimeter
- Function generator
- Digital oscilloscope

## Procedure

The  MAX1477X  EV  kit  is  fully  assembled  and  tested. Follow the steps to verify board operation.

1.  Connect two power supplies to the MAX1477XEVKIT#. Set the first supply voltage to +5V and connect it to the VCC test point. Set the second supply voltage to +3.3V and connect it to the VL test point. Connect the returns of the power supplies to the GND test point.
2.  Connect the function generator output to SMA connector J5 or test point A1. Connect the oscilloscope probe to SMA connector J9 or test point B1\_OUT/NC. Connect the ground returns of the power supplies to the GND test point(s).
3.  Set the function generator output to a 1MHz sine wave with an amplitude of ±5V.
4.  Verify that all jumpers are in their default positions as shown in Table 1 .

Beyond-the-Rails is a trademark of Maxim Integrated Products, Inc.

319-100910; Rev 0; 05/22

## Evaluates: MAX14774, MAX14779

5.  Turn  on  both  power  supplies  and  ensure  that  the supplies have less than 5mA (max) current.
6.  Turn  on  the  function  generator  and  verify  that  no waveform  is  captured  by  the  oscilloscope  (switch  is open).
7.  Move the shunt at J1 from position 2-3 to position 1-2. Verify  that  the  voltage  at  the  EN1/ENA  test  point  is 3.3V.
8.  Observe that the digital oscilloscope captures a 1MHz, ±5V sine wave (switch is closed).
9.  Move the function generator output to SMA connector J6  or  test  point  A2.  Move  the  oscilloscope  probe  to SMA connector J10 or test point B2\_OUT/ACOM.
10.  Verify  that  the  oscilloscope  does  not  capture  any waveform (switch is open).
11.  Move the shunt at J2 from position 2-3 to position 1-2. Verify that the voltage at the EN2/SA test point is 3.3V.
12.  Observe the digital oscilloscope captures a 1MHz, ±5V sine wave (switch is closed).
13.  Repeat steps 9-12 to verify the functionalities of all four channels.

## EV Kit Photo

<!-- image -->

Ordering Information appears at the end of data sheet

<!-- image -->

## Evaluates: MAX14774, MAX14779

Table 1. MAX1477X EV Kit Shunt Positions and Functions

| JUMPER   | ASSOCIATED TEST POINT   | SHUNT POSITION   | MAX14774 FUNCTION**                        | MAX14779 FUNCTION                                                  |
|----------|-------------------------|------------------|--------------------------------------------|--------------------------------------------------------------------|
| J1       | EN1/ENA                 | 1-2              | Connect EN1 to V L and close the switch 1. | Connect ENA to V L and enable the switch A. SA selects the switch. |
| J1       | EN1/ENA                 | 2-3*             | Connect EN1 to GND and open the switch 1.  | Connect ENA to GND and disable the switch A. SA is transparent.    |
| J2       | EN2/SA                  | 1-2              | Connect EN2 to V L and close the switch 2. | Connect SA to V L and connect A2 to ACOM, only when ENA is high.   |
| J2       | EN2/SA                  | 2-3*             | Connect EN2 to GND and open the switch 2.  | Connect SA to GND and connect A1 to ACOM, only when ENA is high.   |
| J3       | EN3/ENB                 | 1-2              | Connect EN3 to V L and close the switch 3. | Connect ENB to V L and enable the switch B. SB selects the switch. |
| J3       | EN3/ENB                 | 2-3*             | Connect EN3 to GND and open the switch 3.  | Connect ENB to GND and disable the switch B. SB is transparent.    |
| J4       | EN4/SB                  | 1-2              | Connect EN4 to V L and close the switch 4. | Connect SB to V L and connect B2 to BCOM, only when ENB is high.   |
| J4       | EN4/SB                  | 2-3*             | Connect EN4 to GND and open the switch 4.  | Connect SB to GND and connect B1 to BCOM, only when ENB is high.   |

## Detailed Description of Hardware

The MAX14774 quad SPST and the MAX14779 dual SPDT Beyond-the-Rails switches support switching analog signals of up to ±25V using a single 3.0V to 5.5V supply. The MAX14774 is a quad SPST switch with four EN\_ control inputs, and the MAX14779 is a dual SPDT switch with two EN\_ and two S\_ control inputs.

The MAX1477X EV kit accepts a wide ±25V analog signal range with one single power supply at V CC  from 3.0V to 5.5V. A logic supply with a range of 1.62V to 5.5V at V L  is used to set the control signal level.

The MAX1477X EV kit provides necessary jumpers and connectors to accommodate the evaluation of both MAX14774 and MAX14779. Control inputs can be configured high or low using the on-board jumpers, or directly from the test points. Each analog channel can be accessed from the SMA connector as well as the test point associated with them.

The MAX1477X EV kit has four control inputs to either enable the switch (MAX14774) or enable and select between analog inputs (MAX14779). Do not leave the digital inputs floating. See Table 1 for the MAX1477X EV Kit jumper settings as well as the control inputs logic.

## Configure the MAX1477X EV Kit

The  MAX1477XEVKIT#  can  be  used  to  evaluate  either  MAX14774  or  MAX14779.  The  EV  kit  is  populated  with MAX14774ATP+ by default. Engineer can request a sample of MAX14779ATP+ to be soldered on the EV kit.

Refer to Table 1 for the control inputs logic of the MAX14774 or MAX14779; use the relations in Table 2 to determine the test point functions when evaluating MAX14774 or MAX14779.

## Table 2. MAX1477XEVKIT# Test Points

| TEST POINT          | ASSOCIATED JUMPER/SMA   | U1 INSTALLED WITH MAX14774*   | U1 INSTALLED WITH MAX14779   |
|---------------------|-------------------------|-------------------------------|------------------------------|
| CONTROL SIGNAL      | CONTROL SIGNAL          | CONTROL SIGNAL                | CONTROL SIGNAL               |
| EN1/ENA             | J1                      | Enable input 1                | Enable input A               |
| EN2/SA              | J2                      | Enable input 2                | Select input A               |
| EN3/ENB             | J3                      | Enable input 3                | Enable input B               |
| EN4/SB              | J4                      | Enable input 4                | Select input B               |
| ANALOG INPUT/OUTPUT | ANALOG INPUT/OUTPUT     | ANALOG INPUT/OUTPUT           | ANALOG INPUT/OUTPUT          |
| A1                  | J5 (SMA)                | A1 input                      | A1 input                     |
| A2                  | J6 (SMA)                | A2 input                      | A2 input                     |
| A3/B1_IN            | J7 (SMA)                | A3 input                      | B1 input                     |
| A4/B2_IN            | J8 (SMA)                | A4 input                      | B2 input                     |
| B1_OUT/NC           | J9 (SMA)                | B1 output                     | Do not use                   |
| B2_OUT/ACOM         | J10 (SMA)               | B2 output                     | ACOM output                  |
| B3_OUT/NC           | J11 (SMA)               | B3 output                     | Do not use                   |
| B4_OUT/BCOM         | J12 (SMA)               | B4 output                     | BCOM output                  |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX1477XEVKIT# | EV Kit |

#Denotes RoHS compliance.

## Evaluates: MAX14774, MAX14779

## MAX1477X EV Kit Bill of Materials

|   ITEM | REF_DES                                                                   | DNP   |   QTY | MFG PART#                    | MFR.                              | VALUE          | DESCRIPTION                                                                                                              |
|--------|---------------------------------------------------------------------------|-------|-------|------------------------------|-----------------------------------|----------------|--------------------------------------------------------------------------------------------------------------------------|
|      1 | A1, A2, A3/B1_IN, A4/B2_IN, B1_OUT/NC, B2_OUT/ACOM, B3_OUT/NC, B4_OUT/COM | -     |     8 | 5013                         | KEYSTONE                          | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|      2 | C1, C2                                                                    | -     |     2 | HMK105B710 3KVHFE            | TAIYO YUDEN                       | 0.01UF         | CAP; SMT (0402); 0.01UF; 10%; 100V; X7R; CERAMIC                                                                         |
|      3 | C3, C4                                                                    | -     |     2 | GCM188R71 C105KA64           | MURATA                            | 1UF            | CAP; SMT (0603); 1UF; 10%; 16V; X7R; CERAMIC                                                                             |
|      4 | EN1/ENA, EN2/SA, EN3/ENB, EN4/SB                                          | -     |     4 | 5014                         | KEYSTONE                          | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|      5 | GND, GND1- GND3                                                           | -     |     4 | 5011                         | KEYSTONE                          | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
|      6 | J1-J4                                                                     | -     |     4 | PCC03SAAN                    | SULLINS                           | PCC03 SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                 |
|      7 | J5-J12                                                                    | -     |     8 | 142-0701-851                 | JOHNSON COMPONEN TS               | 142- 0701- 851 | CONNECTOR; END LAUNCH JACK RECEPTACLE; BOARDMOUNT; STRAIGHT THROUGH; 2PINS;                                              |
|      8 | SPACER1- SPACER4                                                          | -     |     4 | 9032                         | KEYSTONE                          | 9032           | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                |
|      9 | SU1-SU4                                                                   | -     |     4 | S1100-B; SX1100-B; STC02SYAN | KYCON; SULLINS ELECTRONI CS CORP. | SX1100 -B      | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT; PHOSPHOR BRONZE CONTACT=GOLD PLATED                 |
|     10 | U1                                                                        | -     |     1 | MAX14774AT P+                | MAXIM                             | MAX14 774ATP + | EVKIT PART - IC; MAX14774ATP+; PACKAGE OUTLINE DRAWING: 21- 100172; PACKAGE LAND PATTERN: 90- 0409                       |
|     11 | VCC, VL                                                                   | -     |     2 | 5010                         | KEYSTONE                          | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                    |
|     12 | PCB                                                                       | -     |     1 | MAX1477X                     | MAXIM                             | PCB            | PCB:MAX1477X                                                                                                             |
|     13 | C5-C16                                                                    | DNP   |     0 | N/A                          | N/A                               | N/A            | CAPACITOR; 0603 PACKAGE; GENERIC                                                                                         |

## MAX1477X Evaluation Kit

## Evaluates: MAX14774, MAX14779

## MAX1477X EV Kit Schematic

<!-- image -->

## Evaluates: MAX14774, MAX14779

## MAX1477X EV Kit PCB Layout

MAX1477XEVKIT# Component Placement--Top Silkscreen

<!-- image -->

MAX1477XEVKIT# PCB Layout--Top

<!-- image -->

## MAX1477X Evaluation Kit

MAX1477XEVKIT# PCB Layout--Bottom

<!-- image -->

MAX1477XEVKIT# Component Placement-Bottom Silkscreen

<!-- image -->

## Evaluates: MAX14774, MAX14779

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 05/22           | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## MAX1477X Evaluation Kit