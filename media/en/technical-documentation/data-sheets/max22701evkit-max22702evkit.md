<!-- lastmod 2022-08-04 -->
## MAX22700-MAX22702 Evaluation Kits

## General Description

The  MAX22700-MAX22702  evaluation  kits  (EV  kits) provide  a  proven  design  to  evaluate  the  MAX22700MAX22702 family of single-channel isolated gate drivers with ultra-high common-mode transient immunity (CMTI) of  300kV/μs  (typ).  Two  identical  channels  (devices)  are included on the EV kit in order to demonstrate the very tight part-to-part propagation delay matching of 2ns (max) over the -40°C to +125°C operating temperature range.

Two  types  of  evaluation  kits,  MAX22701EVKIT#  and MAX22702EVKIT#, are available to support variants with different  B-side  options,  gate  driver  common  pin  GNDB (MAX22700), Miller Clamp pin (MAX22701), and adjustable  undervoltage-lockout  pin  (MAX22702).  In  addition, both EV kits support variants with different A-side options, differential  inputs  (D  versions),  or  a  single-ended  input with an enable pin (E versions). Both evaluation boards come  with  the  narrow-body  8-pin  SOIC  package  type. See Table 1 for EV kit options.

The  MAX22701EVKIT#  is  fully  assembled  and  tested, and  comes  populated  with  the  MAX22701EASA+  (see Figure 1 ).  This board also supports the MAX22701DASA+, but requires the user to replace U1 and U2.

The  MAX22702EVKIT#  is  fully  assembled  and  tested, and  comes  populated  with  the  MAX22702EASA+  (see Figure 2 ).  This board also supports the MAX22700DASA+, MAX22700EASA+,  and  MAX22702DASA+  if  the  user replaces  U1,  U2,  and  necessary  external  components on the B side. See Table 3 and Evaluate MAX22700 on MAX22702EVKIT# section for details.

The EV kits should be powered from multiple independent isolated power supplies as required by the different power domains. The A side of the MAX22700-MAX22702 family has a nominal supply-voltage range from 3V to 5.5V. The B side has a nominal supply-voltage range of 13V to 36V or 6V to 36V depending upon the target device. For evalu -ating the electrical parameters of the devices without any isolation between the two sides and two devices, a common ground can be shared among different power domains.

Note :  When ordering  an  EV  kit,  if  the  desired  device  is  not the  MAX22701EASA+  or  the  MAX22702EASA+,  request samples of the desired MAX22700-MAX22702 IC that can be soldered to the PCB.

Evaluates  MAX22700D-MAX22702D

MAX22700E-MAX22702E

## Features

- 2 EV Kits to Support 3 Output Options: GNDB, Miller Clamp, or Adjustable UVLO
- 2 Input Configurations: Single-Ended with Enable, or Differential
- 2 Identical Channels Allowing Propagation Delay Matching Measurements
- 2 Calibration Channels for Precision Propagation Delay Measurements
- SMA Connectors and Terminal Blocks for Easy Connection to External Equipment
- Wide Power Supply Voltage Range from 3V to 5.5V (A Side) and 13V to 36V (B Side)
- Guaranteed Up to 3kV RMS  Isolation for 60s
- -40°C to +125°C Temperature Range
- Proven PCB Layout

Ordering Information appears at end of data sheet.

<!-- image -->

Figure 1. MAX22701EVKIT#

<!-- image -->

## Table 1. EV Kit Options

| EVKIT PART #   | DEFAULT DEVICE   | PACKAGE TYPE       | POPULATED IC                                       |
|----------------|------------------|--------------------|----------------------------------------------------|
| MAX22701EVKIT# | MAX22701EASA+    | 8-SOIC Narrow-Body | Single-Ended Inputs with Miller Clamp on side B    |
| MAX22702EVKIT# | MAX22702EASA+    | 8-SOIC Narrow-Body | Single-Ended Inputs with Adjustable UVLO on side B |

│

Evaluates  MAX22700D-MAX22702D

MAX22700E-MAX22702E

Figure 2. MAX22702EVKIT#

<!-- image -->

## MAX22700-MAX22702 Evaluation Kits

## Quick Start

## Required Equipment

- MAX22701EVKIT# with MAX22701EASA+ as U1 and U2, or MAX22702EVKIT# with MAX22702EASA+ as U1 and U2
- One DC power supply with an output range up to 5.5V
- Two DC power supplies with an output range up to 36V
- Signal/function generator
- Oscilloscope

## Procedure

The MAX22701 and MAX22702 EV kits are fully assembled and ready for evaluation. Follow the steps below to verify board functionality:

- 1) Verify jumper settings. See Table 2 for all shunt positions.
- J1 and J2 are closed.
- For the MAX22702 EV kit, J3 and J4 are closed.
- 2) Connect the JA1 pin 3 (U1 EN ) and pin 4 (GNDA1) together, and the JA2 pin 3 (U2 EN ) and pin 4 (GNDA2) together using shunts or jump wires to always enable the U1 and U2 devices.
- 3) Connect  a  DC  power  supply  between  the  EV  kit VDDA1  and  GNDA1  test  points.  Set  the  output between 3V and 5.5V.
- 4) Connect one DC power supply between the EV kit VDDB1 and VSSB1 test points, and another DC power supply between VDDB2 and VSSB2 test points.
- 5) MAX22701 EV kit: set both DC power supply outputs between 13V and 36V. MAX22702 EV kit: set both DC power supply outputs between 6V and 36V.

## Evaluates  MAX22700D-MAX22702D MAX22700E-MAX22702E

- 6) Enable all three power supplies.

Note: It is also possible to power the EV kits from a single power supply to test electrical parameters, but this invalidates the digital isolation between the A side and the B side of the IC, and the isolation between U1 and U2.

- 7) Connect the signal/function generator output to SMA connector INP\_IN1. Set the function generator output  to  be  a  square  wave  with  the  amplitude  of VDDA , 10kHz frequency, and 50% duty cycle. Enable the function generator output.
- 8) Observe the B-side output voltage on the OUT1 test point to be a square wave with the amplitude of V DDB , 10kHz frequency, and 50% duty cycle.
- 9) To measure the propagation delay matching between U1 and U2, connect the function generator output to both SMA connectors INP\_IN1 and INP\_IN2. Config -ure the output to be a square wave with the amplitude of V DDA , 10kHz frequency, and 50% duty cycle. Ob -serve the propagation delay skew between the OUT1 test point and OUT2 test point.

Note :  When  connecting  one  scope  probe  between the OUT1 and VSSB1 test points and another scope probe  between  the  OUT2  and  VSSB2  test  points, VSSB1 and VSSB2 are shorted together through the oscilloscope, which invalidates the isolation between U1 and U2. Make sure that VSSB1 and VSSB2 are safe to be shorted together when probing OUT1 and OUT2 using the same oscilloscope.

## MAX22700-MAX22702 Evaluation Kits

Evaluates  MAX22700D-MAX22702D

MAX22700E-MAX22702E

## Table 2. MAX22701 and MAX22702 EV Kits Connectors and Shunt Positions

| CONNECTOR   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                               |
|-------------|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SIDE A      | SIDE A           | SIDE A                                                                                                                                                                                    |
| J1          | 1-2*             | Connect U1 GNDAand U2 GNDA                                                                                                                                                                |
| J1          | Open             | Disconnect U1 GNDAand U2 GNDA                                                                                                                                                             |
| J1          | 1-2*             | Connect U1 V DDA and U2 V DDA                                                                                                                                                             |
| J2          | Open             | Disconnect U1 V DDA and U2 V DDA                                                                                                                                                          |
| JA1         | 1                | Test point or input header for U1 V DDA                                                                                                                                                   |
| JA1         | 2                | Test point or input header for U1 INP (D versions) or IN (E versions); same as INP_IN1 SMAconnector                                                                                       |
| JA1         | 3                | Test point or input header for U1 INN (D versions) or EN (E versions); same as INN_ENB1 SMAconnector                                                                                      |
| JA1         | 4                | Test point or input header for U1 GNDA                                                                                                                                                    |
| JA2         | 5                | Test point or input header for U2 V DDA                                                                                                                                                   |
| JA2         | 6                | Test point or input header for U2 INP (D versions) or IN (E versions); same as INP_IN2 SMAconnector                                                                                       |
| JA2         | 7                | Test point or input header for U2 INN (D versions) or EN (E versions); same as INN_ENB2 SMAconnector                                                                                      |
| JA2         | 8                | Test point or input header for U2 GNDA                                                                                                                                                    |
| INP_IN1     | n/a              | SMAconnector for U1 INP input (D versions) or IN input (E versions)                                                                                                                       |
| INN_ENB1    | n/a              | SMAconnector for U1 INN input (D versions) or EN input (E versions)                                                                                                                       |
| INP_IN2     | n/a              | SMAconnector for U2 INP input (D versions) or IN input (E versions)                                                                                                                       |
| INN_ENB2    | n/a              | SMAconnector for U2 INN input (D versions) or EN input (E versions)                                                                                                                       |
| SIDE B      | SIDE B           | SIDE B                                                                                                                                                                                    |
| T1          | 1                | (MAX22701 EV kit) Test point or connector for U1 output                                                                                                                                   |
| T1          |                  | (MAX22702 EV kit) Test point or connector for U1 adjustable UVLO resistor-divider reference ground (MAX22702), or U1 GNDB (MAX22700); Connect to the external power transistor source pin |
| T1          | 2                | (MAX22701 EV kit) Test point or connector for U1 V SSB                                                                                                                                    |
| T1          | 2                | (MAX22702 EV kit) Test point or connector for U1 output                                                                                                                                   |
| T1          | 3                | (MAX22702 EV kit only) Test point or connector for U1 V SSB                                                                                                                               |
| T2          | 1                | (MAX22701 EV kit) Test point or connector for U2 output                                                                                                                                   |
| T2          | 1                | (MAX22702 EV kit) Test point or connector for U2 adjustable UVLO resistor-divider reference ground (MAX22702), or U2 GNDB (MAX22700); Connect to the external power transistor source pin |
| T2          | 2                | (MAX22701 EV kit) Test point or connector for U2 V SSB                                                                                                                                    |
| T2          | 2                | (MAX22702 EV kit) Test point or connector for U2 output                                                                                                                                   |
| T2          | 3                | (MAX22702 EV kit only) Test point or connector for U2 V SSB                                                                                                                               |
| J3          | 1-2*             | (MAX22702 EV kit only) Connect U1 V SSB and U1 GNDB (MAX22700) or U1 adjustable UVLO resistor-divider reference ground (MAX22702)                                                         |
| J3          | Open             | (MAX22702 EV kit only) Disconnect U1 V SSB and U1 GNDB (MAX22700) or U1 adjustable UVLO resistor-divider reference ground (MAX22702)                                                      |
| J4          | 1-2*             | (MAX22702 EV kit only) Connect U2 V SSB and U2 GNDB (MAX22700) or U2 adjustable UVLO resistor-divider reference ground (MAX22702)                                                         |
| J4          | Open             | (MAX22702 EV kit only) Disconnect U2 V SSB and U2 GNDB (MAX22700) or U2 adjustable UVLO resistor-divider reference ground (MAX22702)                                                      |

│

Evaluates  MAX22700D-MAX22702D

MAX22700E-MAX22702E

## Table 3. MAX22701 and MAX22702 EV Kits Board Configurations

Figure 3. MAX22701 and MAX22702 EV Kits Typical Test Setup

| COMPONENTS             | CONFIGURATIONS         | CONFIGURATIONS   | CONFIGURATIONS   | CONFIGURATIONS   | CONFIGURATIONS   | CONFIGURATIONS   |
|------------------------|------------------------|------------------|------------------|------------------|------------------|------------------|
| COMPONENTS             | MAX22700D              | MAX22700E        | MAX22701D        | MAX22701E        | MAX22702D        | MAX22702E        |
| SIDE A                 |                        |                  |                  |                  |                  |                  |
| INP_IN1, INP_IN2       | INP                    | IN               | INP              | IN               | INP              | IN               |
| INN_ENB1, INN_ENB2     | INN                    | EN               | INN              | EN               | INN              | EN               |
| JA1 PIN 2, JA2 PIN 2   | INP                    | IN               | INP              | IN               | INP              | IN               |
| JA1 PIN 3, JA2 PIN 3   | INN                    | EN               | INN              | EN               | INN              | EN               |
| SIDE B, MAX22701EVKIT# | SIDE B, MAX22701EVKIT# |                  |                  |                  |                  |                  |
| T1 PIN1, T2 PIN 1      | -                      | -                | Output           | Output           | -                | -                |
| SIDE B, MAX22702EVKIT# | SIDE B, MAX22702EVKIT# |                  |                  |                  |                  |                  |
| T1 PIN 1, T2 PIN 1     | GNDB                   | GNDB             | -                | -                | ADJ Reference    | ADJ Reference    |
| T1 PIN 2, T2 PIN 2     | Output                 | Output           | -                | -                | Output           | Output           |
| R5, R7                 | DNI                    | DNI              | -                | -                | 20kΩ             | 20kΩ             |
| D3, D4                 | DNI                    | DNI              | -                | -                | 6.2V Zener Diode | 6.2V Zener Diode |
| R6, R8                 | 0Ω                     | 0Ω               | -                | -                | 110kΩ            | 110kΩ            |

<!-- image -->

│

## MAX22700-MAX22702 Evaluation Kits

## Detailed Description of Hardware

The  MAX22700-MAX22702  EV  kits  allow  the  user  to evaluate the features of the MAX22700-MAX22702 ultrahigh CMTI isolated gate drivers.

## Power Supplies and Isolation

Two identical channels (U1 and U2) are included on the EV kits and are fully isolated with each other. The A side and the B side of each device are also isolated to demonstrate the isolation feature of the devices.

Power to the MAX22701 or MAX22702 device is derived from  two  external  sources.  The  A-side  supply  voltage range  is  between  3V  and  5.5V,  and  the  B-side  supply voltage  range  is  between  13V  and  36V  if  the  devices under evaluation are the MAX22700 and MAX22701, and between 6V and 36V if the device under evaluation is the MAX22702.  Connect  the A-side  supply  between  VDDA and  GNDA  test  points  and  connect  the  B-side  supply between VDDB and VSSB test points. Each supply can be set independently and can be present over the entire voltage range regardless of the level or presence of the other supply.

The A side of both U1 and U2 devices can be powered from  the  same  source  when  both  J1  and  J2  jumpers are installed. This is useful when both device inputs are driven from the same signal generator. In this case, the isolation  between  the  U1 A  side  and  the  U2 A  side  no longer exists. The isolation  between the U1 B side and the U2 B side and between the A side and the B side of each device is still intact. Refer to Figure 3 for a typical test setup diagram.

## Decoupling Capacitors

The V DDA  power supply of both U1 and U2 are decoupled with 1000pF, 0.1μF and 1μF low-ESR and low-ESL ceramic capacitors, which are placed close to the V DDA pin of the device and are in parallel with each other.

The V DDB  power supply of both U1 and U2 are decoupled with 1000pF, 0.1μF and 1μF low-ESR and low-ESL ceramic capacitors with 50V voltage rating in parallel with each other. The 1000pF and 1μF capacitors are placed close to the V SSB pin and the 0.1μF capacitor is placed close  to  the  V DDB pin. An  additional  10μF  bulk  capaci -tor is also included between the V DDB  and V SSB  pins to reduce  the  load  current  transient  on  the  B-side  supply. Refer to the MAX22701 EV Kit PCB Layout Diagrams and the MAX22702 EV Kit PCB Layout Diagrams for details.

## Evaluates  MAX22700D-MAX22702D MAX22700E-MAX22702E

## I/O Connections

Two  SMA  connectors  (INP\_IN  and  INN\_ENB)  are  provided on the A side of each device to allow easy connections to signal generator(s). Depending on the U1 and U2 devices installed on the board, they can be connected to differential  signals  with  opposite  phases  (MAX2270\_D versions) or a single-ended signal with an enable signal (MAX2270\_E versions).

To  accommodate  different  B-side  configurations  of  the MAX22700-MAX22702 IC family, different terminal blocks (T1 and T2) are provided on the B side of the MAX22701 and MAX22702 EV kits. On the MAX22701 EV kit, two-pin connectors are provided, where pin 1 is the output and pin 2 is U1 or U2 V SSB . On the MAX22702 EV kit, three-pin con -nectors  are  provided.  Pin  1  is  the  external  resistor-divider reference  ground  for  adjustable  UVLO  if  the  MAX22702 IC devices are installed as U1 and U2. If the MAX22700 IC devices are installed as U1 and U2, pin 1 is connected to GNDB. Regardless of the U1 and U2 devices, pin 2 is the output and pin 3 is U1 or U2 V SSB . Refer to Table 2 for connector positions  and Table  3  for  board  configurations based on different U1 and U2 devices.

## Shunt Positions

Install the jumpers on J1 and J2 to connect U1 V DDA  and U2  V DDA ,  and  U1  GNDA  and  U2  GNDA  when  a  single power supply is used to drive the A side of both devices.

On the MAX22702 EV kit, jumpers J3 and J4 are provided to connect V SSB  supply and the adjustable UVLO resistordivider reference ground (MAX22702), or V SSB  supply and GNDB (MAX22700). This is useful when evaluating the elec -trical performance of the devices without power transistors. The J3 and J4 jumpers should be removed when driving the external power transistors using the EV kit. The adjustable UVLO  resistor-divider  reference  ground  or  GNDB  should be  connected  to  the  external  power  transistor  source  pin. Refer to the MAX22700-MAX22702 IC data sheet for more details. See Table 2 for all shunt positions.

## Calibration Channels

Two reference channels  (REFA1-REFB1,  REFA2REFB2) are implemented on the EV kits to help calibrate the  test  setup  for  timing  measurements  such  as  propagation  delay.  Measure  the  propagation  delay  (t PD\_REF) using the reference channel first to determine the delay introduced  by  the  test  setup.  Measure  the  propagation delay (t PD\_ISO ) again using either U1 or U2 channel. The calibrated propagation delay is t PD\_ISO  - t PD\_REF .

## MAX22700-MAX22702 Evaluation Kits

The U1 and U2 channels are made identical to demonstrate the tight part-to-part propagation delay skew of the MAX22700-MAX22702  family.  Apply  the  input  signals to  both  U1  and  U2  inputs  and  measure  the  propagation delay skew on the outputs (OUT1 and OUT2). Care should be taken that the connections between the signal generator and the inputs, and the connections between the  outputs  and  the  oscilloscope  are  made  identical  to minimize the skew introduced by the test setup. Refer to the EV kit typical test setup diagram as shown in Figure 3 .

## Gate Driver Output Resistors

External  series  resistors  between  the  MAX22700MAX22702 IC output and the gate of the power transistor are required in gate driver applications. These resis -tors control the turn-on and turn-off times of the power transistor.

Both MAX22701 and MAX22702 EV kits come populated with a 10Ω output resistor (R2 for U1, R4 for U2). In paral -lel to this 10Ω resistor, a resistor footprint (R1 for U1, R3 for U2) in series with a diode footprint (D1 for U1, D2 for U2) are provided on the EV kits to allow different rise and fall times of the output. These resistors can be modified by the user to configure turn-on and turn-off times of the output based on the application.

The  EV  kits  also  come  populated  with  a  220pF  load capacitor  (C7  for  U1,  C14  for  U2)  on  each  output.  The user  can  replace  this  capacitor  to  emulate  the  required gate capacitance of the external power transistor.

A 0Ω resistor (R5 and R6 on the MAX22701EVKIT#, R9 and R10 on the MAX22702EVKIT#) is included between the output resistor and the load capacitor, which can be replaced by a ferrite bead to help minimize ringing on the output signal.

## Evaluates  MAX22700D-MAX22702D MAX22700E-MAX22702E

## Evaluate MAX22700 on MAX22702EVKIT#

The  MAX22702  EV  kit  is  designed  to  evaluate  all MAX22700  and  MAX22702  devices.  The  MAX22700 provides  a  common  ground  pin  (GNDB)  on  the  driver side while the MAX22702 features an adjustable B-side UVLO (ADJ) to accommodate UVLO requirements of different types of power transistors. Due to this difference, the  external  components  need  to  be  configured  differently  when  using  the  MAX22702 EV kit to evaluate the MAX22700.

By default, the MAX22702EVKIT# comes populated with the  MAX22702EASA+.  Resistor-dividers  formed  by  R5 and R6 for U1, and R7 and R8 for U2 are implemented on the board to set the B-side UVLO to 13V. The zener diodes D3 for U1 and D4 for U2 prevent the voltage difference between V DDB  supply and ADJ being more than 6V, which violates the Absolute Maximum Ratings for the ADJ pin.

To evaluate the MAX22700 devices on the MAX22702 EV kit, U1 and U2 need to be replaced with the MAX22700. R5, R7, D3 and D4 need to be removed. R6 and R8 need to be replaced with 0Ω resistors in order to connect the GNDB pin of the MAX22700 directly to the terminal blocks (T1 and T2). When installing U1 and U2, make sure pin 1 of the device is mounted onto pin 1 of U1 and U2 on the PCB. Pin 1 is located at the upper left corner of U1 and U2,  denoted  by  a  white  dot  on  the  silkscreen.  Refer  to Table 3 for different board configurations.

The  MAX22701  EV  kit  is  designed  to  evaluate  the MAX22701 devices with Miller Clamp feature.

Refer  to  the MAX22701  EV  Kit  Schematic and  the MAX22702 EV Kit Schematic for details.

## Ordering Information

| PART           | TYPE                                |
|----------------|-------------------------------------|
| MAX22701EVKIT# | EV Kit with installed MAX22701EASA+ |
| MAX22702EVKIT# | EV Kit with installed MAX22702EASA+ |

#Denotes RoHS compliant.

## MAX22700-MAX22702 Evaluation Kits

## MAX22701 EV Kit Bill of Materials

|   ITEM | REF_DES                                                          |     |   QTY | MFG PART #                                                                    | MANUFACTURER           | VALUE          | DESCRIPTION                                                                                                                                                   |
|--------|------------------------------------------------------------------|-----|-------|-------------------------------------------------------------------------------|------------------------|----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 | C1, C4, C8, C11                                                  |     |     4 | C0603H102J1GAC                                                                | KEMET                  | 1000PF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 100V; TOL = 5%; MODEL = HT SERIES; TG = -55°C TO +200°C; TC = C0G                                                |
|      2 | C2, C6, C9, C13                                                  |     |     4 | CC0603KRX7R0BB104; GRM188R72A104KA35; GCJ188R72A104KA01                       | YAGEO; MURATA;MURATA   | 0.1µF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1µF; 100V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                                                   |
|      3 | C3, C5, C10, C12                                                 |     |     4 | C2012X7S2A105K125; GRJ21BC72A105KE11; CGA4J3X7S2A105K125AB; GRM21BC72A105KE01 | TDK;MURATA; TDK;MURATA | 1µF            | CAPACITOR; SMT (0805); CERAMIC CHIP; 1µF; 100V; TOL = 10%; TG = -55°C TO +125°C; TC = X7S                                                                     |
|      4 | C7, C14                                                          |     |     2 | C0603C221K1GAC                                                                | KEMET                  | 220PF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 220PF; 100V; TOL = 10%; MODEL = C0G; TG = -55°C TO +125°C; TC = +                                                        |
|      5 | C15, C16                                                         |     |     2 | T591D106M050ATE090                                                            | KEMET                  | 10µF           | CAP; SMT (7343-31); 10µF; 20%; 50V; TANTALUM CHIP                                                                                                             |
|      6 | GNDA1, GNDA2, VSSB1, VSSB2                                       |     |     4 | 5011                                                                          | KEYSTONE               | N/A            | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                 |
|      7 | INN_ENB1, INN_ENB2, INP_IN1, INP_IN2, REFA1, REFA2, REFB1, REFB2 |     |     8 | 142-0701-851                                                                  | JOHNSON COMPONENTS     | 142-0701-851   | CONNECTOR; END LAUNCH JACK RECEPTACLE; BOARDMOUNT; STRAIGHT THROUGH; 2PINS;                                                                                   |
|      8 | J1, J2                                                           |     |     2 | TSW-202-07-G-S                                                                | SAMTEC                 | TSW-202-07-G-S | CONNECTOR; MALE; THROUGH HOLE; SQUARE POST HEADER; STRAIGHT; 2PINS                                                                                            |
|      9 | JA1, JA2                                                         |     |     2 | " 5-146128-2"                                                                 | TE CONNECTIVITY        | " 5-146128-2"  | CONNECTOR; HEADER ASSEMBLY; BREAKAWAY MALE; SMT; STRAIGHT; 4PINS                                                                                              |
|     10 | OUT1, OUT2, VSSB1_TP, VSSB2_TP                                   |     |     4 | 1508-0-57-15-00-00-03-0                                                       | MILL-MAX               | N/A            | TEST POINT; SMT; PIN DIA = 0.110IN; TOTAL LENGTH = 0.17IN                                                                                                     |
|     11 | R2, R4                                                           |     |     2 | CRCW120610R0FKEBHP                                                            | VISHAY                 | 10             | RES; SMT (1206); 10; 1%; ± 100PPM/°K; 0.75W ;                                                                                                                 |
|     12 | R5, R6                                                           |     |     2 | CRCW06030000Z0                                                                | VISHAY DALE            | 0              | RESISTOR; 0603; 0 Ω ; 0%; JUMPER; 0.1W; THICK FILM                                                                                                            |
|     13 | SU1, SU2                                                         |     |     2 | 531230-4                                                                      | TE CONNECTIVITY        | 531230-4       | TEST POINT; ECONOMY SHUNT ASSEMBLY; STR; TOTAL LENGTH = 2IN; BLACK; CONTACT BASE MATERIAL= BERYLLIUM COPPER                                                   |
|     14 | T1, T2                                                           |     |     2 | 1984617                                                                       | PHOENIX CONTACT        | 1984617        | CONNECTOR; FEMALE; SMT; PCB TERMINAL BLOCK; RIGHT ANGLE; 2PINS                                                                                                |
|     15 | U1, U2                                                           |     |     2 | MAX22701                                                                      | MAXIM                  | MAX22701       | EVKIT PART -IC; MAX22701; ULTRA-HIGH CMTI SILICON-CARBIDE (SIC) GATE DRIVER; PACKAGE OUTLINE: 21-0041; PACKAGE CODE: S8M+5; LAND PATTERN NO.: 90-0096; NSOIC8 |
|     16 | VDDA1, VDDA2, VDDB1, VDDB2                                       |     |     4 | 5010                                                                          | KEYSTONE               | N/A            | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                   |
|     17 | PCB                                                              |     |     1 | MAX22701                                                                      | MAXIM                  | PCB            | PCB:MAX22701                                                                                                                                                  |
|     18 | MTH1-MTH4                                                        | DNI |     4 | 1902B                                                                         | GENERIC PART           | N/A            | STANDOFF; FEMALE-THREADED; HEX; 4-40IN; 3/8IN; NYLON                                                                                                          |
|     19 | MTH1-MTH4                                                        | DNI |     4 | P440.375                                                                      | GENERIC PART           | N/A            | MACHINE SCREW; SLOTTED; PAN; 4-40IN; 3/8IN; NYLON                                                                                                             |
|     20 | D1, D2                                                           | DNI |     2 | SL04                                                                          | VISHAY                 | SL04           | DIODE; SCH; SMT (DO-219AB); PIV = 40V; IF = 1.1A                                                                                                              |
|     21 | R1, R3                                                           | DNI |     2 | CRCW12062R49FKEAHP                                                            | VISHAY                 | 2.49           | RES; SMT (1206); 2.49; 1%; ±100PPM/°K; 0.75W                                                                                                                  |

Evaluates  MAX22700D-MAX22702D

MAX22700E-MAX22702E

## MAX22701 EV Kit Schematic

<!-- image -->

## MAX22701 EV Kit PCB Layout Diagrams

MAX22701 EV Kit PCB Layout-Top Silkscreen

<!-- image -->

MAX22701 EV Kit PCB Layout-Top View

<!-- image -->

│

## MAX22701 EV Kit PCB Layout Diagrams (continued)

MAX22701 EV Kit PCB Layout-L2 GND

<!-- image -->

MAX22701 EV Kit PCB Layout-L3 PWR

<!-- image -->

│

## MAX22701 EV Kit PCB Layout Diagrams (continued)

MAX22701 EV Kit-Bottom View

<!-- image -->

MAX22701 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

│

## MAX22700-MAX22702 Evaluation Kits

## MAX22702 EV Kit Bill of Materials

| ITEM     | REF_DES                                                          |     | QTY   | MFG PART #                                                                             | MANUFACTURER                           | VALUE          | DESCRIPTION                                                                                                                                                                             |
|----------|------------------------------------------------------------------|-----|-------|----------------------------------------------------------------------------------------|----------------------------------------|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1        | C1, C4, C8, C11                                                  |     | 4     | C0603H102J1GAC                                                                         | KEMET                                  | 1000PF         | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 100V; TOL = 5%; MODEL = HT SERIES; TG = -55°C TO +200°C; TC = C0G                                                                          |
| 2        | C2, C6, C9, C13                                                  |     | 4     | CC0603KRX7R0BB104; GRM188R72A104KA35; GCJ188R72A104KA01; HMK107B7104KA; 06031C104KAT2A | YAGEO;MURATA; MURATA;TAIYO YUDEN; AVX  | 0.1µF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1µF; 100V; TOL = 10%; TG = -55°C TO +125 DEGC; TC = X7R                                                                                          |
| 3        | C3, C5, C10, C12                                                 |     | 4     | C2012X7S2A105K125AB; GRJ21BC72A105KE11; CGA4J3X7S2A105K125AB; GRM21BC72A105KE01        | TDK;MURATA;TDK                         | 1µF            | CAPACITOR; SMT (0805); CERAMIC CHIP; 1µF; 100V; TOL = 10%; TG = -55°C TO +125°C; TC = X7S                                                                                               |
| 4        | C7, C14                                                          |     | 2     | C0603C221K1GAC                                                                         | KEMET                                  | 220PF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 220PF; 100V; TOL = 10%; MODEL = C0G; TG = -55°C TO +125°C; TC = +                                                                                  |
| 5        | C15, C16                                                         |     | 2     | T591D106M050ATE090                                                                     | KEMET                                  | 10µF           | CAP; SMT (7343-31); 10µF; 20%; 50V; TANTALUM CHIP                                                                                                                                       |
| 6        | D3, D4                                                           |     | 2     | MMSZ5234B-7-F                                                                          | DIODES INCORPORATED                    | 6.2V           | DIODE; ZNR; SMT (SOD-123); VZ = 6.2V; IZ = 0.02A                                                                                                                                        |
| 7        | GNDA1, GNDA2, VSSB1, VSSB2                                       |     | 4     | 5011                                                                                   | KEYSTONE                               | N/A            | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                           |
| 8        | INN_ENB1, INN_ENB2, INP_IN1, INP_IN2, REFA1, REFA2, REFB1, REFB2 |     | 8     | 142-0701-851                                                                           | JOHNSON COMPONENTS                     | 142-0701-851   | CONNECTOR; END LAUNCH JACK RECEPTACLE; BOARDMOUNT; STRAIGHT THROUGH; 2PINS;                                                                                                             |
| 9        | J1, J2                                                           |     | 2     | TSW-202-07-G-S                                                                         | SAMTEC                                 | TSW-202-07-G-S | CONNECTOR; MALE; THROUGH HOLE; SQUARE POST HEADER; STRAIGHT; 2PINS                                                                                                                      |
| 10       | J3, J4                                                           |     | 2     | PEC02SAAN                                                                              | SULLINS                                | PEC02SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                                                                               |
| 11       | JA1, JA2                                                         |     | 2     | 5-146128-2                                                                             | TE CONNECTIVITY                        | 5-146128-2     | CONNECTOR; HEADER ASSEMBLY; BREAKAWAY MALE; SMT; STRAIGHT; 4PINS                                                                                                                        |
| 12       | MTH1-MTH4                                                        |     | 4     | 9032                                                                                   | KEYSTONE                               | 9032           | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                                               |
| 13       | OUT1, OUT2, VSSB1_TP, VSSB2_TP                                   |     | 4     | 1508-0-57-15-00-00-03-0                                                                | MILL-MAX                               | N/A            | TEST POINT; SMT; PIN DIA = 0.110IN; TOTAL LENGTH=0.17IN                                                                                                                                 |
| 14       | R2, R4                                                           |     | 2     | CRCW120610R0FKEBHP                                                                     | VISHAY                                 | 10             | RES; SMT (1206); 10; 1%; ± 100PPM/°K; 0.75W ;                                                                                                                                           |
| 15       | R5, R7                                                           |     | 2     | MCR03EZPFX2002; ERJ-3EKF2002; CR0603-FX-2002ELF; CRCW060320K0FK                        | ROHM;PANASONIC; BOURNS; VISHAY DALE    | 20K            | RESISTOR; 0603; 20K Ω ; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                   |
| 16       | R6, R8                                                           |     | 2     | CRCW0603110KFK                                                                         | VISHAY DALE                            | 110K           | RESISTOR, 0603, 110K, 1%, 100PPM, 0.10W, THICK FILM                                                                                                                                     |
| 17       | R9, R10                                                          |     | 2     | CRCW06030000Z0                                                                         | VISHAY DALE                            | 0              | RESISTOR; 0603; 0 Ω ; 0%; JUMPER; 0.1W; THICK FILM                                                                                                                                      |
| 18       | SU1, SU2                                                         |     | 2     | 531230-4                                                                               | TE CONNECTIVITY                        | 531230-4       | TEST POINT; ECONOMY SHUNT ASSEMBLY; STR; TOTAL LENGTH = 2IN; BLACK; CONTACT BASE MATERIAL= BERYLLIUM COPPER                                                                             |
| 19       | SU3, SU4                                                         |     | 2     | S1100-B;SX1100-B; STC02SYAN                                                            | KYCON;KYCON; SULLINS ELECTRONICS CORP. | SX1100-B       | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.24IN; BLACK; INSULATION = PBT; PHOSPHOR BRONZE CONTACT=GOLD PLATED                                                                            |
| 20       | T1, T2                                                           |     | 2     | 1984620                                                                                | PHOENIX CONTACT                        | 1984620        | CONNECTOR; FEMALE; SMT; COMBICON COMPACT; RIGHT ANGLE; 3PINS                                                                                                                            |
| 21       | U1, U2                                                           |     | 2     | MAX22702                                                                               | MAXIM                                  | MAX22702       | EVKIT PART -IC; MAX22702; ULTRA-HIGH CMTI SILICON-CARBIDE (SIC) AND GALLIUM NITRIDE (GAN) GATE DRIVER; PACKAGE OUTLINE: 21-0041; PACKAGE CODE: S8M+5; LAND PATTERN NO.: 90-0096; NSOIC8 |
| 22       | VDDA1, VDDA2, VDDB1, VDDB2                                       |     | 4     | 5010                                                                                   | KEYSTONE                               | N/A            | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE = 0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                                               |
| 23       | PCB                                                              |     | 1     | MAX22702                                                                               | MAXIM                                  | PCB            | PCB:MAX22702                                                                                                                                                                            |
| 24       | D1, D2                                                           | DNI | 2     | SL04                                                                                   | VISHAY                                 | SL04           | DIODE; SCH; SMT (DO-219AB); PIV = 40V; IF = 1.1A                                                                                                                                        |
| 25       | R1, R3                                                           | DNI | 2     | CRCW12062R49FKEAHP                                                                     | VISHAY                                 | 2.49           | RES; SMT (1206); 2.49; 1%; ± 100PPM/°K; 0.75W                                                                                                                                           |
| 26       | C19, C20                                                         | DNP | 0     | N/A                                                                                    | N/A                                    | OPEN           | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                                                                                |
| 27 TOTAL | C17, C18                                                         | DNP | 0 69  | N/A                                                                                    | N/A                                    | OPEN           | PACKAGE OUTLINE 0805 NON-POLAR CAPACITOR                                                                                                                                                |

│

Evaluates  MAX22700D-MAX22702D

MAX22700E-MAX22702E

## MAX22702 EV Kit Schematic

<!-- image -->

## MAX22702 EV Kit PCB Layout Diagrams

MAX22702 EV Kit PCB Layout-Top Silkscreen

<!-- image -->

MAX22702 EV Kit PCB Layout-Top View

<!-- image -->

│

## MAX22702 EV Kit PCB Layout Diagrams (continued)

MAX22702 EV Kit PCB Layout-L2 GND

<!-- image -->

MAX22702 EV Kit PCB Layout-L3 PWR

<!-- image -->

│

## MAX22702 EV Kit PCB Layout Diagrams (continued)

MAX22702 EV Kit-Bottom View

<!-- image -->

MAX22702 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

│

## MAX22700-MAX22702

## Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                              | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------------------------|-----------------|
|                 0 | 10/19           | Initial release                                                                          | -               |
|                 1 | 3/20            | Removed future product designation from MAX22702EVKIT# in the Ordering Information table | 7               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates  MAX22700D-MAX22702D

MAX22700E-MAX22702E