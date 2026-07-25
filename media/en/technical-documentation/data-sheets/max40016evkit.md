<!-- lastmod 2022-08-03 -->
## MAX40016 Evaluation Kit

## General Description

The MAX40016 evaluation kit (EV Kit) provides a proven design  to  evaluate  the  MAX40016  wide  dynamic  range current  sense  amplifier.  The  MAX40016  integrates  the sense element, eliminating a bulky and costly external sense/ shunt resistor. The device measures four of decades of current (from &lt; 300µA to 3A) while maintaining a highly accurate  output  reading.  This  EV  kit  demonstrates  the MAX40016 in a tiny, space-saving, 15-bump wafer-level package (WLP).

The MAX40016 EV kit PCB comes with the MAX40016ANL+ device installed.

## EV kit Contents

- MAX40016 EV kit board

Ordering Information appears at end of data sheet.

## MAX400016 EV Kit Photo

<!-- image -->

<!-- image -->

## Features

- Integrated Current Sense Element
- 4-Decade Measurement Range
- Maintains Accuracy from &lt; 300µA to 3A
- Withstands Overloads to 4A
- +2.5V to +5.5V Input Common Mode Range
- Low Power Mode Reduces Supply Current to &lt;10µA
- Tiny 1.98mm x 1.31mm 15-Bump WLP
- -40°C to +125°C Operating Temperature Range
- Evaluates the MAX40016ANL+
- Accommodates Easy-to-Use components
- Proven PCB Layout
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX40016 EV kit
- DC power supply (2.5V to 5.5V)
- Electronic load capable of sinking up to 3A
- Two digital multimeters (DMMs)

Evaluates: MAX40016

## MAX40016 Evaluation Kit

## Procedure

The EV kit is fully assembled and tested. Follow the below to verify board operation.

Caution: Do  not  turn  on  the  power  supply  or  the electronic load until all the connections are made.

## VISH  Testing

- 1) Set the DC power supply to +3.6V and turn it off. Connect the positive terminal of the supply to the VDD banana jack test point and the negative terminal of the supply to the nearest GND banana jack test point.
- 2) Set the electronic load to sink 1A. Connect the positive terminal of the electronic load to the VLD banana jack test point and the negative terminal of the supply to the nearest banana jack GND test point.
- 3) Connect DMM1 between V ISH  and the nearest GND test point.
- 4) Connect DMM2 between V OUT  and the nearest GND test point.
- 5) Verify all the shunts are in default positions as shown in Table 1 .
- 6) Enable the 3.6V supply voltage at V DD .
- 7) Turn on the electronic load and verify that the current flowing is equal to the set value of 1A.
- 8) Observe the output voltage from all digital voltmeter displays.  Verify  that  approximately,  V ISH =  320mV, and V OUT = 480mV.
- 9) Turn  off  the  electronic  load  then  turn  off  the  V DD supply voltage.

## Table 1. Jumper Description

## VISM Testing

- 1) To test the V ISM output, change JU0 from 2-1 to 2-3 position.
- 2) Remove the DMM1 and connect it between V ISM  and the nearest GND test point.
- 3) Set the electronic  load  to  sink  50mA.    Connect  the positive  terminal  of  the  electronic  load  to  the  VLD banana jack test point and the negative terminal of the supply to the nearest banana jack GND test point.
- 4) Enable the 3.6V supply voltage at V DD .
- 5) Turn on the electronic load and verify that the current flowing is equal to the set value of 50mA.
- 6) Observe the output voltage from all digital voltmeter displays.  Verify  that,  approximately,  V ISM =  536mV, and V OUT = 804mV.
- 7) Turn  off  the  electronic  load,  then  turn  off  the  V DD supply voltage.

## VISL  Testing

- 1) To test the V ISL output,  change JU0 from 2-3 to 2-1 position, and change JU1 from 2-1 to 2-3 position.
- 2) Remove the DMM1 and connect it between V ISL  and the nearest GND test point.
- 3) Set the electronic load to sink 1mA.
- 4) Enable the 3.6V supply voltage at V DD .
- 5) Turn on the electronic load and verify that the current flowing is equal to the set value of 1mA.
- 6) Observe the output voltage from all digital voltmeter displays.  Verify  that  approximately,  V ISM =  320mV, and V OUT = 480mV.

| JUMPER   | SHUNT POSITION   | DESCRIPTION              |
|----------|------------------|--------------------------|
| JU0      | 2-1*             | Connect SEL1 to V DD     |
| JU0      | 2-3              | Connect SEL1 to GND      |
| JU1      | 2-1*             | Connect SEL0 to V DD     |
| JU1      | 2-3              | Connect SEL0 to GND      |
| JU2      | Install*         | Connect R1 to ISH        |
| JU2      | Not install      | Disconnect R1 from ISH   |
| JU3      | Install*         | Connect R3 to ISL        |
| JU3      | Not install      | Disconnect R3 from ISL   |
| JU4      | Install*         | Connect R4 to V OUT      |
| JU4      | Not install      | Disconnect R4 from V OUT |
| JU5      | Install*         | Connect R2 to ISM        |
| JU5      | Not install      | Disconnect R2 from ISM   |

Evaluates: MAX40016

│

## MAX40016 Evaluation Kit

- 7) Turn  off  the  electronic  load  then  turn  off  the  V DD supply voltage

## Low Power Mode Testing

- 1) To  put  the  device  in  low  power  mode,  change  JU0 from 2-1 to 2-3 position.
- 2) Enable the 3.6V supply voltage at V DD .
- 3) Turn on the electronic load and verify that the current flowing is equal to the set value of 1mA.
- 4) Observe the output voltage from all digital voltmeter displays. Verify that V ISL  is about 0mV and V OUT  is 0mV.
- 5) Turn  off  the  electronic  load  then  turn  off  the  V DD supply voltage.
- 6) Return JU1 and JU2 to the default values stated in Table 1 .

## Detailed Description of Hardware

The MAX40016 EV kit provides a proven design to evaluate the MAX40016 15-bump, WLP, space-saving, wide-range current sense amplifier. The EV kit is capable of sensing from &lt; 300µA to &gt;3A current and is mode-configurable to look at all multiplexed outputs (ISH, ISM, or ISL) and the internal amplifier V OUT output (see Table 2 ).

When programmed in low power mode (SEL0 = SEL1 = GND) the MAX40016 turns off all multiplexed outputs and send the  amplifier  output  to  high  impedance.  The  low  (10µA typical) supply current is independent of the load current. The MAX40016 EV kit operates from supplies of 2.5V to 5.5V.

## Table 2. Current Sense Range Selection

|   SEL0 |   SEL1 | OPERATING MODE/RANGE                                                                                                                                                                                              |
|--------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      0 |      0 | Low Power Mode is enabled. V OUT is high impedance. In low power mode, the current sensing element still passes current just as an external sense resistor would. There is no capability to turn off the current. |
|      0 |      1 | Middle current sense range (ISM) is enabled. The resistor R ISM connected at this current output terminal defines the full-scale voltage of 1V to the internal amplifier.                                         |
|      1 |      0 | Low current sense range (ISL) is enabled. The resistor R ISL connected at this current output terminal defines the full-scale voltage of 1V to the internal amplifier.                                            |
|      1 |      1 | High current sense range (ISH) is enabled. The resistor R ISH connected at this current output terminal defines the full-scale voltage of 1V to the internal amplifier.                                           |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX40016EVKIT# | EV Kit |

#Denotes RoHS compliant.

## Scaling Resistors

The typical multiplexed current from the MAX40016's ISL, or  ISM,  or  ISH  pin  is  specified  as  2mA/A.  The  scaling resistors' values at ISH, ISM, and ISL should be chosen such as not to exceed the 1V of the internal amplifier input voltage  range.  Care  should  be  taken  to  account  for  all tolerances, not to exceed the 0.01V to 1.0V range of the internal amplifier. The MAX40016 EV Kit has R ISH = 160Ω, RISM =  5.36kΩ  and  R ISL =  160kΩ  installed  to  split  the range up equally.

## Power Supplies Bypassing

The MAX40016 EV kit is fully tested with single  supply voltage  from  +2.5V  to  +5.5V  applying  to  the  VDD  and GND banana jack inputs. The VDD supply input is also the  measured  current  input  terminal  and  is    bypassed to  ground  with  a  0.1µF  in  parallel  with  a  10µF  ceramic capacitors.  The  measured  current  output,  LD  terminal, is  also  bypassed  with  a  0.1µF  in  parallel  with  a  10µF ceramic capacitor. Additional pad holders (C6, C7, C12, and C13) can be used if larger capacitive load needed for experimenting larger load output current transients.

Evaluates: MAX40016

│

## MAX40016 EV Kit Bill of Materials

| ITEM   | REF_DES                                         | DNI/DNP   |   QTY | MFG PART #                                            | MANUFACTURER                | VALUE        | DESCRIPTION                                                                                                                   |
|--------|-------------------------------------------------|-----------|-------|-------------------------------------------------------|-----------------------------|--------------|-------------------------------------------------------------------------------------------------------------------------------|
| 1      | C8, C11                                         | -         |     2 | GRM31CR71C106KAC7; GRM31CR71C106KA12                  | MURATA                      | 10µF         | CAPACITOR; SMT (1206); CERAMIC CHIP; 10µF; 16V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                     |
| 2      | C9, C10                                         | -         |     2 | C0603C104K5RAC; C1608X7R1H104K                        | KEMET; TDK                  | 0.1µF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1µF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R;                                   |
| 3      | GND, VDD, LOAD, TP17                            | -         |     4 | 108-0740-001                                          | EMERSON NETWORK POWER       | 108-0740-001 | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                                      |
| 4      | J1-J6                                           | -         |     6 | 5-1634503-1                                           | TE CONNECTIVITY             | 5-1634503-1  | CONNECTOR; FEMALE; THROUGH HOLE; LOW PROFILE BNC PCB SOCKET; STRAIGHT; 5PINS                                                  |
| 5      | JU0, JU1                                        | -         |     2 | PEC03SAAN                                             | SULLINS                     | PEC03SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                     |
| 6      | JU2-JU5                                         | -         |     4 | PEC02SAAN                                             | SULLINS                     | PEC02SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                     |
| 7      | R1                                              | -         |     1 | RG1608P-161-B                                         | SUSUMU                      | 160          | RESISTOR; 0603; 160 Ω ; 0.1%; 25PPM; 0.1W; THIN FILM                                                                          |
| 8      | R2                                              | -         |     1 | ERA3AEB5361                                           | PANASONIC                   | 5.36K        | RESISTOR; 0603; 5.36K Ω ; 0.1%; 25PPM; 0.1W; THIN FILM                                                                        |
| 9      | R3                                              | -         |     1 | ERA3AEB164                                            | PANASONIC                   | 160K         | RESISTOR; 0603; 160K Ω ; 0.1%; 25PPM; 0.1W; THIN FILM                                                                         |
| 10     | R4                                              | -         |     1 | CRCW060310K0FK; ERJ-3EKF1002                          | VISHAY DALE; PANASONIC      | 10K          | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                            |
| 11     | R5                                              | -         |     1 | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00            | VISHAY DALE/ROHM/ PANASONIC | 0            | RESISTOR; 0603; 0 Ω ; 0%; JUMPER; 0.10W; THICK FILM                                                                           |
| 12     | TP1, TP2, TP4-TP7, TP15, TP16                   | -         |     8 | 5011                                                  | KEYSTONE                    | N/A          | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 13     | U1                                              | -         |     1 | MAX40016ANL+                                          | MAXIM                       | MAX40016ANL+ | EVKIT PART-IC; MAX40016ANL+; PACKAGE OUTLINE: 21-100213; PACKAGE CODE: N151B1+1; WLP15                                        |
| 14     | VLD, VDD1, VISH, VISL, VISM, VOUT, VSEL0, VSEL1 | -         |     8 | 5010                                                  | KEYSTONE                    | N/A          | TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE;                                                                            |
| 15     | PCB                                             | -         |     1 | MAX40016                                              | MAXIM                       | PCB          | PCB:MAX40016                                                                                                                  |
| 16     | C1-C5                                           | DNP       |     0 | C0603C102K5RAC; GRM188R71H102KA01; C0603X7R500-102KNE | KEMET/MURATA/ VENKEL        | 1000PF       | CAPACITOR; SMT; 0603; CERAMIC; 1000pF; 50V; 10%; X7R; -55°C to +125°C; ± 15% from -55°C to +125°C                             |
| 17     | C6, C7, C12, C13                                | DNP       |     0 | GRM31CR71C106KAC7; GRM31CR71C106KA12                  | MURATA                      | 10µF         | CAPACITOR; SMT (1206); CERAMIC CHIP; 10µF; 16V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                     |
| TOTAL  | TOTAL                                           |           |    43 |                                                       |                             |              |                                                                                                                               |

Evaluates: MAX40016

## MAX40016 EV Kit Schematic

<!-- image -->

Evaluates: MAX40016

## MAX40016 EV Kit PCB Layout Diagrams

MAX40016 EV Kit PCB Layout-Silkscreen Top Side

<!-- image -->

MAX40016 EV Kit PCB Layout-Silkscreen Top Side

<!-- image -->

│

## MAX40016 EV Kit PCB Layout Diagrams (continued)

MAX40016 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

MAX40016 EV Kit PCB Layout-Internal Layer 3

<!-- image -->

│

## MAX40016 EV Kit PCB Layout Diagrams (continued)

MAX40016 EV Kit PCB Layout-Bottom Side

<!-- image -->

## MAX40016 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/17           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX40016