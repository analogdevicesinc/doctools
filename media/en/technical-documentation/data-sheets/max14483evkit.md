<!-- lastmod 2022-08-02 -->
## MAX14483 Evaluation Kit

## General Description

The MAX14483 evaluation kit (EV kit) provides a proven design to evaluate the MAX14483, 6-channel, 3.75kV RMS , SPI digital isolator. The EV kit allows easy access to all six channels  through  either  SMA  connectors  or  test  points. On-board LEDs on the ready signals (SAA and SBA) and FAULT output directly indicate the signals' status.

The  EV  kit  should  be  powered  from  two  independent isolated  power  supplies  with  nominal  output  voltage  in range  from  1.71V  to  5.5V.  For  evaluating  the  electrical parameters of the device without any isolation between the two sides, a single power supply can also be used.

The MAX14483EVKIT# comes populated with the MAX14483AAP+  installed  in  a  20-pin  SSOP  package

with 5.5mm of creepage and clearance.

## MAX14483 EV Kit Board Photo

<!-- image -->

## Features

- Six Unidirectional Channels with Different Channel Direction Configuration and Data Speed (Up to 200Mbps)
- On-Board LEDs Indication of Device Ready for Communication
- SMA Connectors for Easy Connection to External Equipment
- Wide Power Supply Voltage Range from 1.71V to 5.5V
- Guaranteed Up to 3.75kV RMS  Isolation for the 20-pin SSOP Package for 60s
- -40ºC to +125ºC Temperature Range
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX14483

<!-- image -->

## MAX14483 Evaluation Kit

## Quick Start

## Required Equipment

- MAX14483 EV kit
- Two DC power supplies with output range of 1.71V to 5.5V
- Signal/function generator
- Oscilloscope

## Procedure

The MAX14483 EV kit is fully assembled and ready for evaluation. For manual verification  follow the steps below to verify board functionality:

- 1) Verify jumper settings. See T able 1 for all shunt positions.
- J1 and J2 are closed.
- Jumper IRDYB is in 2-3 position, indicating side A ready for communication.
- Jumper SDOENB is in 2-3 position, enabling OSDO output.
- 2) Connect one DC power supply between the EV kit's TP\_VDDA  and TP\_GNDA2 test points; connect the other DC power supply between TP\_VDDB and TP\_ GNDB2 test points.
- 3) Set  both  DC  power  supply  outputs  between  1.71V and 5.5V, and then enable the power supply outputs. Note: It  is  also  possible  to  power the EV kit from a single power supply to test electrical parameters but this invalidates the digital isolation of the IC.
- 4) Verify  that  yellow  LEDs  SAA  and  SBA  are  both  on, indicating side A and side B are operating normally.
- 5) Connect the signal/function generator to ISDO SMA connector or HEADER1 Pin 4 and observe the isolated signal on the OSDO SMA connector or HEADER2 Pin 4 using an oscilloscope.
- 6) Repeat the step 5 to verify the functionality of FAULT , AUX,  SDI,  SCLK,  and CS channels. Note  that OFAULT is  an  open  drain  output  and  has  a  10kΩ pullup resistor.

Evaluates: MAX14483

## Table 1. MAX14483 EV Kit Connectors and Shunt Positions

| CONNECTOR   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                     |
|-------------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SIDE A      | SIDE A           | SIDE A                                                                                                                                                          |
| HEADER1     | 1                | Test point or input header for V DDA                                                                                                                            |
| HEADER1     | 2                | Test point or input header for side A ready pin IRDY ; same as IRDYB jumper pin 2                                                                               |
| HEADER1     | 3                | Test point or input header for FAULT channel; same as IFAULTB SMA                                                                                               |
| HEADER1     | 4                | Test point or input header for SDO channel; same as ISDO SMA                                                                                                    |
| HEADER1     | 5                | Test point or output header forAUX channel; same as OAUX SMA                                                                                                    |
| HEADER1     | 6                | Test point or output header for SDI channel; same as OSDI SMA                                                                                                   |
| HEADER1     | 7                | Test point or output header for SCLK channel; same as OSCLK SMA                                                                                                 |
| HEADER1     | 8                | Test point or output header for CS channel; same as OCSB SMA                                                                                                    |
| HEADER1     | 9                | Test point or output header for side B active pin SBA; same as TP_SBA                                                                                           |
| HEADER1     | 10               | Test point or input header for GNDA                                                                                                                             |
| IFAULTB     | n/a              | SMAconnector for FAULT channel input IFAULT                                                                                                                     |
| ISDO        | n/a              | SMAconnector for SDO channel input ISDO                                                                                                                         |
| OAUX        | n/a              | SMAconnector forAUX channel output OAUX                                                                                                                         |
| OSDI        | n/a              | SMAconnector for SDI channel output OSDI                                                                                                                        |
| OSCLK       | n/a              | SMAconnector for SCLK channel output OSCLK                                                                                                                      |
| OCSB        | n/a              | SMAconnector for CS channel output OCS                                                                                                                          |
| J1          | Open             | Use current meter to measure current of side A power supply V DDA                                                                                               |
| J1          | 1-2*             | Connect power supply to V DDA                                                                                                                                   |
| IRDYB       | 1-2              | Connect side A ready input IRDY to V DDA ; when IRDY is high, SAA is low and side B outputs are in default state ( OFAULT is low and OSDO is low when enabled). |
| IRDYB       | 2-3*             | Connect side A ready input IRDY to GNDA; when IRDY is low, and side A power is valid, SAA is high and side B outputs operate normally.                          |

│

Evaluates: MAX14483

## Table 1. MAX14483 EV Kit Connectors and Shunt Positions (continued)

| CONNECTOR   | SHUNT POSITION   | DESCRIPTION                                                                                               |
|-------------|------------------|-----------------------------------------------------------------------------------------------------------|
| SIDE B      | SIDE B           | SIDE B                                                                                                    |
| HEADER2     | 1                | Test point or input header for V DDB                                                                      |
| HEADER2     | 2                | Test point or output header for side A active pin SAA; same as TP_SAA                                     |
| HEADER2     | 3                | Test point or output header for FAULT channel; same as OFAULTB SMA                                        |
| HEADER2     | 4                | Test point or output header for SDO channel; same as OSDO SMA                                             |
| HEADER2     | 5                | Test point or input header forAUX channel; same as IAUX SMA                                               |
| HEADER2     | 6                | Test point or input header for SDI channel; same as ISDI SMA                                              |
| HEADER2     | 7                | Test point or input header for SCLK channel; same as ISCLK SMA                                            |
| HEADER2     | 8                | Test point or input header for CS channel; same as ICSB SMA                                               |
| HEADER2     | 9                | Test point or input header for OSDO enable pin SDOEN ; same as SDOENB jumper pin 2                        |
| HEADER2     | 10               | Test point or input header for GNDB                                                                       |
| OFAULTB     | n/a              | SMAconnector for FAULT channel output OFAULT                                                              |
| OSDO        | n/a              | SMAconnector for SDO channel output OSDO                                                                  |
| IAUX        | n/a              | SMAconnector forAUX channel input IAUX                                                                    |
| ISDI        | n/a              | SMAconnector for SDI channel input ISDI                                                                   |
| ISCLK       | n/a              | SMAconnector for SCLK channel input ISCLK                                                                 |
| ICSB        | n/a              | SMAconnector for CS channel input ICS                                                                     |
| J2          | Open             | Use current meter to measure current of side B power supply V DDB                                         |
| J2          | 1-2*             | Connect power supply to V DDB                                                                             |
| SDOENB      | 1-2              | Connect OSDO enable SDOEN to V DDB ; When both SDOEN and ICS are high, the OSDO output is high-impedance. |
| SDOENB      | 2-3*             | Connect OSDO enable SDOEN to GNDB; When SDOEN is low, the OSDO output is enabled.                         |

*Default configuration

## Table 2. MAX14483 EV Kit Test Points

| TEST POINT   | DESCRIPTION                      |
|--------------|----------------------------------|
| SIDE A       | SIDE A                           |
| TP_VDDA      | Test point for V DDA             |
| TP_GNDA1     | Test point for GNDA              |
| TP_GNDA2     | Test point for GNDA              |
| TP_SBA       | Test point for side B active SBA |
| SIDE B       | SIDE B                           |
| TP_VDDB      | Test point for V DDB             |
| TP_GNDB1     | Test point for GNDB              |
| TP_GNDB2     | Test point for GNDB              |
| TP_SAA       | Test point for side A active SAA |

│

## MAX14483 Evaluation Kit

## Detailed Description of Hardware

The MAX14483 EV kit allows the user to evaluate the features of the MAX14483 6-channel SPI isolator.

## External Power Supplies

Power to the MAX14483 EV kit is derived from two external sources  which  can  both  be  between  +1.71V  and  +5.5V. Connect  one  source  between  the  V DDA  and  GNDA  test points, and the other source between the V DDB  and GNDB

## Evaluates: MAX14483

test  points.  Each  supply  can  be  set  independently  and can be present over the entire range from 1.71V to 5.5V, regardless of the level or presence of the other supply. The MAX14483 level-shifts the data, transmitting them across the isolation barrier.

Six SMA connectors on each side of the board allow easy connections  to  signal  generator(s)  and  oscilloscope.  A typical test setup is shown in Figure 1.

Figure 1. MAX14483 EV Kit Typical Test Setup

<!-- image -->

│

## Decoupling Capacitors

Each  power  supply  is  decoupled  with  a  10µF  ceramic capacitor in parallel with a 0.1µF ceramic capacitor, which are placed close to the U1 V DDA  and V DDB  pin.

## Shunt Positions

Jumpers  J1  and  J2  are  installed  between  the  external power supplies and U1 power supply pins to allow supply current measurement. Uninstall the J1 and J2 shunts and connect current meters on both side A and side B to measure the MAX14483 supply current.

Jumper IRDYB is provided to configure if side A is ready for communication. When the IRDYB shunt is connected to V DDA  ( IRDY is high), side A active SAA is low and side B outputs are in their default state ( OFAULT is  low  and OSDO is low when enabled). When the IRDYB shunt is connected to GNDA ( IRDY is  low),  and  side A  power is valid, SAA is high and side B outputs operate normally.

Jumper  SDOENB  is  provided  to  enable  or  disable  the SDO channel ouput (OSDO). When the SDOENB shunt is  connected  to  GNDB,  the  OSDO  output  is  enabled. When the SDOENB shunt is connected to V DDB , and ICS is  high,  the  OSDO  output  is  high-impedance.  Note  that when ICS is  low,  OSDO  output  is  always  enabled.  See Table 1 for all shunt positions.

## Impedance Control

The input and output traces of all six isolation channels have an impedance control of 50Ω. A 20Ω series resis -tor is added to all input and output channels. Along with internal series resistance, it can provide 50Ω impedance matching with external equipment such as function generator or oscilloscope.

## Output Load

Each output has an unpopulated 0603 SMT resistor (RL1RL6) and an unpopulated 0603 SMT capacitor (CL1-CL6) to  GND\_  to  allow  different  loads  based  on  customer requirements.

## Calibration Channels

Two reference channels (REFA1-REFB1, REFA2-REFB2) are implemented on the EV kit to help calibrate the test setup  for  timing  measurements  such  as  propagation delay.  Measure  the  propagation  delay  (t PD\_REF )  using the reference channel first to determine the delay introduced by the test setup. Measure the propagation delay (t PD\_ISO ) again using one of the MAX14483 data channels. The calibrated isolator delay is t PD\_ISO  - t PD\_REF .

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14483EVKIT# | EV Kit |

#Denotes RoHS compliant.

## MAX14483 EV Kit Bill of Materials

| ITEM   | REF_DES                                                                                                    |     |   QTY | MFG PART #                                              | MANUFACTURER               | VALUE                    | DESCRIPTION                                                                                                                                    | COMMENTS   |
|--------|------------------------------------------------------------------------------------------------------------|-----|-------|---------------------------------------------------------|----------------------------|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 1      | C1, C2                                                                                                     |     |     2 | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA | MURATA; TDK                | 0.1UF                    | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=- 55 DEGC TO +125 DEGC; TC=X7R; AUTO                                              |            |
| 2      | C3, C4                                                                                                     |     |     2 | CL21B106KOQNNN                                          | SAMSUNG ELECTRONICS        | 10UF                     | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                      |            |
| 3      | FAULTB                                                                                                     |     |     1 | HSMH-C190                                               | AVAGO TECHNOLOGIES         | HSMH-C190                | DIODE; LED; SURFACE MOUNT CHIP LED; RED; SMT (0603); PIV=1.8V; IF=0.02A                                                                        |            |
| 4      | HEADER1, HEADER2                                                                                           |     |     2 | 1-1241150-0                                             | TE CONNECTIVITY            | 1-1241150-0              | CONNECTOR; MALE; SMT; AMPMODU II PIN HEADER; SINGLE ROW; PACKED IN BLISTER; STRAIGHT; 10PINS                                                   |            |
| 5      | IAUX, ICSB, ISDI, ISDO, OAUX, OCSB, OSDI, OSDO, ISCLK, OSCLK, REFA1, REFA2, REFB1, REFB2, IFAULTB, OFAULTB |     |    16 | 142-0701-851                                            | JOHNSON COMPONENTS         | 142-0701-851             | CONNECTOR; END LAUNCH JACK RECEPTACLE; BOARDMOUNT; STRAIGHT THROUGH; 2PINS;                                                                    |            |
| 6      | IRDYB, SDOENB                                                                                              |     |     2 | PEC03SAAN                                               | SULLINS                    | PEC03SAAN                | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                      |            |
| 7      | J1, J2                                                                                                     |     |     2 | PEC02SAAN                                               | SULLINS                    | PEC02SAAN                | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                                      |            |
| 8      | Q1, Q2                                                                                                     |     |     2 | BSS214N                                                 | INFINEON                   | BSS214N                  | TRAN; OPTIMOS 2 SMALL SIGNAL TRANSISTOR; NCH; PG-SOT23 ; PD- (0.5W); I-(1.5A); V-(20V)                                                         |            |
| 9      | Q3                                                                                                         |     |     1 | PMV65XP                                                 | NXP                        | PMV65XP                  | TRAN; 20V; SINGLE P-CHANNEL TRENCH MOSFET; PCH; SOT-23; PD- (0.48W); I-(-4.3A); V-(-20V)                                                       |            |
| 10     | R1, R2, R5                                                                                                 |     |     3 | CRCW0402100KFK; RC0402FR- 07100KL                       | VISHAY DALE; YAGEO PHICOMP | 100K                     | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                          |            |
| 11     | R3, R4, R6                                                                                                 |     |     3 | CRCW0402470RFKEDHP                                      | VISHAY DRALORIC            |                          | 470 RESISTOR; 0402; 470 OHM; 1%; 100PPM; 0.125W; THICK FILM                                                                                    |            |
| 12     | R7                                                                                                         |     |     1 | ERJ-2RKF1002                                            | PANASONIC                  | 10K                      | RESISTOR; 0402; 10K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                         |            |
| 13     | RA1-RA6, RB1-RB6                                                                                           |     |    12 | CRCW040220R0FK                                          | VISHAY DALE                |                          | 20 RESISTOR; 0402; 20 OHM; 1%; 100PPM; 0.063W; THICK FILM                                                                                      |            |
| 14     | SAA, SBA                                                                                                   |     |     2 | LY L29K-H1K2-26-Z                                       | OSRAM                      | LY L29K-H1K2-26-Z        | DIODE; LED; LY L29K SERIES; SMARTLED; YELLOW; SMT (1608); VF=1.8V; IF=0.02A                                                                    |            |
| 15     | SU1-SU4                                                                                                    |     |     4 | STC02SYAN                                               | SULLINS ELECTRONICS CORP.  | STC02SYAN                | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL                        |            |
| 16     | TP_GNDA1, TP_GNDA2, TP_GNDB1, TP_GNDB2                                                                     |     |     4 | 5001                                                    | KEYSTONE                   | N/A                      | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                             |            |
| 17     | TP_SAA, TP_SBA                                                                                             |     |     2 | 5002                                                    | KEYSTONE                   | N/A                      | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                                          |            |
| 18     | TP_VDDA, TP_VDDB                                                                                           |     |     2 | 5000                                                    | KEYSTONE                   | N/A                      | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                               |            |
| 19     | U1                                                                                                         |     |     1 | MAX14483AAP+                                            | MAXIM                      | MAX14483AAP+             | EVKIT PART - IC; MAX14483AAP+; 8-CHANNEL; LOW POWER; 3.75KVRMS; SPI DIGITAL ISOLATOR; PACKAGE OUTLINE DRAWING: 21- 0056; LAND PATTERN: 90-0094 |            |
| 20     | PCB                                                                                                        |     |     1 | MAX14483                                                | MAXIM                      | PCB                      | PCB:MAX14483                                                                                                                                   |            |
| 21     | MTH1-MTH6                                                                                                  | DNI |     6 | 1902B                                                   | GENERIC PART               | ?                        | STANDOFF; FEMALE-THREADED; HEX; 4-40IN; 3/8IN; NYLON                                                                                           |            |
| 22     | MTH1-MTH6                                                                                                  | DNI |     6 | P440.375                                                | GENERIC PART               | ?                        | MACHINE SCREW; SLOTTED; PAN; 4-40IN; 3/8IN; NYLON                                                                                              |            |
| 23     | MTH1-MTH6                                                                                                  | DNI |     6 | EVKIT_STANDOFF_4-40_3/8                                 | ?                          | EVKIT_STANDOFF_ 4-40_3/8 | KIT; ASSY-STANDOFF 3/8IN; 1PC. STANDOFF/FEM/HEX/4- 40IN/(3/8IN)/NYLON; 1PC. SCREW/SLOT/PAN/4-40IN/(3/8IN)/NYLON                                |            |
| 24     | RL1-RL6                                                                                                    | DNP |     0 | N/A                                                     | N/A                        | OPEN                     | PACKAGE OUTLINE 0402 RESISTOR                                                                                                                  |            |
| 25     | CL1-CL6                                                                                                    | DNP |     0 | N/A                                                     | N/A                        | OPEN                     | PACKAGE OUTLINE 0402 NON-POLAR                                                                                                                 |            |
| TOTAL  |                                                                                                            |     |    83 |                                                         |                            |                          | CAPACITOR                                                                                                                                      |            |

Evaluates: MAX14483

## MAX14483 EV Kit Schematic

<!-- image -->

Evaluates: MAX14483

## MAX14483 EV Kit PCB Layout Diagrams

MAX14483 EV Kit-Top Silkscreen

<!-- image -->

MAX14483 EV Kit-Top

<!-- image -->

│

## MAX14483 EV Kit PCB Layout Diagrams (continued)

MAX14483 EV Kit-L2 GND

<!-- image -->

MAX14483 EV Kit-L3 PWR

<!-- image -->

## MAX14483 EV Kit PCB Layout Diagrams (continued)

MAX14483 EV Kit-Bottom

<!-- image -->

MAX14483 EV Kit-Bottom Silkscreen

<!-- image -->

│

## MAX14483 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/18            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im ,nteJrated reserves the riJht to chanJe the circuitr\ and specifications without notice at an\ time.

│

Evaluates: MAX14483