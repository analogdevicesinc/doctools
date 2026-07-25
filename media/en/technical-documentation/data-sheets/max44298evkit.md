<!-- lastmod 2022-08-03 -->
## MAX44298 Evaluation Kit

## General Description

The MAX44298 evaluation kit (EV kit) provides a proven design to evaluate the MAX44298 current, voltage, and power monitor. The device offers a precision power monitor with  very  low  offset  for  low-side  monitoring.  This  EV  kit demonstrates the MAX44298 in an ultra-small, 2.4mm x 2.4mm, 16-bump wafer-level package (WLP) with 0.5mm bump spacing.

The EV kit PCB is preconfigured with the CSA full-scale input  voltage  range  (V SENSE )  of  10mV  and  100µA  of output current  ranges,  but  can  be  reconfigured  to 10mV/5mV of FS V SENSE or  50µA  of  output  current  by changing a few jumpers.

The EV kit comes with a MAX44298EWE+ and a voltage divider  to  provide  a  forced  full-scale  V SENSE of  10mV range at the CSA inputs installed.

## Features

- Precision Real-Time, Low-Side Current/Voltage/ Power Monitoring
- +3V to +5.5V Single-Supply Voltage Range
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX44298

## Quick Start

## Required Equipment

Before beginning, the following equipment is needed:

- MAX44298 EV kit
- +3V to +5.5V, 100mA DC power supply
- +0.4V to +1.005V DC power supply
- Precision DC voltage source
- Five digital multimeters (DMMs)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on power supply until all connections are made.

- 1) Set the +3V to +5.5V supply to +3.3V and turn it off. Connect the positive terminal of the supply to the VDD test point and the negative terminal of the supply to the nearest GND test point.
- 2) Set the +0.4V to +1.005V supply to +1V and turn it off.  Connect the positive terminal of the supply to the VIN test point and the negative terminal of the supply to the nearest GND test point.
- 3) Set the precision DC voltage source to 5mV and turn it off.  Apply this voltage source across the V SENSE inputs as a forced voltage V SENSE (i.e., connect the positive terminal of the  DC voltage source to the RS+ test point and connect its negative terminal to the RS- test point).
- 4) Connect one DMM across RS+ and RS- to monitor the V SENSE input. Connect each DMM to each output of the device (IOUT, VOUT, POUT, and REF) to monitor the output voltages.
- 5) Enable all supplies.
- 6) Observe the output voltage from all four digital voltmeter displays. Verify that V IOUT  = 1.2V, VVOUT = 2.4V, V POUT  = 1.2V and V REF  = 2.4V.

<!-- image -->

## MAX44298 Evaluation Kit

## Table 1. Jumper Description

| JUMPER     | SHUNT POSITION   | DESCRIPTION                                                                                                                                 |
|------------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| JU1 (ISET) | 1-2              | Sets the full-scale output current to 50µA.                                                                                                 |
| JU1 (ISET) | 1-3              | Reserved                                                                                                                                    |
| JU1 (ISET) | 1-4*             | Sets the full-scale output current to 100µA.                                                                                                |
| JU2 (CAL)  | 1-2              | Enters calibration mode, sets the output current to 10µA (for IOUT, VOUT, and POUT) and full-scale output current set by JU1 (for the REF). |
| JU2 (CAL)  | 1-3              | Reserved                                                                                                                                    |
| JU2 (CAL)  | 1-4*             | Sets the device in normal operation mode and the output current full scale is set by JU1.                                                   |
| JU3 (G0)   | 1-2              | Connects G0 to logic 1 to set the full-scale sensing voltage range (VFS). See Table 2.                                                      |
| JU3 (G0)   | 1-3              | Reserved                                                                                                                                    |
| JU3 (G0)   | 1-4*             | Connects G0 to logic 0 to set the full-scale sensing voltage range (VFS). See Table 2.                                                      |
| JU4 (G1)   | 1-2*             | Connect G1 to logic1 to set the full-scale sensing voltage range (VFS). See Table 2.                                                        |
| JU4 (G1)   | 2-3              | Reserved                                                                                                                                    |
| JU4 (G1)   | 1-4              | Connect G1 to logic 0 to set the full-scale sensing voltage range (VFS). See Table 2.                                                       |

*Default configuration

## Table 2. Full-Scale VSENSE Range Selection

| G1 (JU4)   | G0 (JU3)   | FS V SENSE                    | R SENSE = 1mΩ                 | R SENSE = 2mΩ                 | R SENSE = 10mΩ                |
|------------|------------|-------------------------------|-------------------------------|-------------------------------|-------------------------------|
| 0          | 1          | 5mV                           | 5A                            | 2.5A                          | 0.5A                          |
| 1*         | 0*         | 10mV*                         | 10A                           | 5A                            | 1A                            |
| 1          | 1          | 20mV                          | 20A                           | 10A                           | 2A                            |
| 0          | 0          | Device enters power-down mode | Device enters power-down mode | Device enters power-down mode | Device enters power-down mode |

*Default configuration

## Detailed Description of Hardware

The MAX44298 EV kit low-side current-sensing measures the  load  current  by  using  a  precision  CSA,  allowing accurate  full-scale  V SENSE ranges  of  5mV,  10mV,  and 20mV, providing scaled output current at IOUT. The floating source  voltage  is  measured  through  a  user-selectable resistive-divider  (dividing  the  source  input  voltage  down to a full-scale VIN of 1.00V) and provides scaled output current at VOUT. The device monitors the instantaneous input  power  by  internally  multiplying  the  scaled  load current by a scaled fraction of the load voltage, providing scaled output current at POUT. The device also provides a  reference  output  current  at  the  REF  output.  All  four output currents are converted to voltages by using scaled resistors (R3-R6).

Evaluates: MAX44298

## Output-Scaling Resistors: R3, R4, R5, R6, and the ISET Input

The output-scaling resistors should all be the same value and  be  of  a  type  with  very  low  temperature  coefficients, with  metal  film  types  being  recommended.  Metal  foil  is more effective,  though  significantly  more  expensive.  The chosen values of these resistors will depend on the ISET setting.  JU1 determines the full-scale output current range. When  ISET  is  connected  to  ground  (JU1:  1-2),  the  fullscale  output  current  from  all  four  outputs  will  be  100µA. When ISET is connected to VDD (JU1: 1-4), the full-scale current will be 50µA. This can be a simple and convenient way to change all four scaling resistors simultaneously. The EV kit is shipped with all four 24kΩ scaling resistors.

│

## Calibration

JU2 sets the  device  in  operational  mode  (or  CAL)  mode. The EV kit is shipped with JU2 in 1-4 position for operational mode. Set JU2 in 1-2 position to place the device in CAL mode.

## Applying the Source Voltage

The two options for applying source voltage are through an  external  voltage  divider  (R1  and  R2)  or  as  a  direct voltage input (VIN). For using an R1-R2 voltage-divider: apply the source voltage to IN+ and IN-. For a maximum input source voltage of say 57V, R1 could be 560kΩ with R2 being 10kΩ. The voltage-divider,  formed  by  R1  and R2, provides 1V at the VIN input test point. The second option is to apply the voltage directly to the VIN test point. In  either  configuration,  care  must  be  taken  not  to  apply a voltage greater than 1V to the VIN input of the device. The EV kit is shipped with the voltage-divider formed by R1 (560kΩ) and R2 (10kΩ), and a VIN test point as well.

## Measuring the Low-Side Load Current

The  device  measures  the  unidirection  load  current (flowing  from  RS+  to  RS-)  as  a  voltage  drop  (V SENSE ) across an external sense resistor (R14, not installed) and provides  scaled  output  at  IOUT.  To  ensure  proper  load current measurements, the sense resistor must be chosen so that its voltage drop does not exceed the full-scale sense voltage of the device. The full-scale sense voltage should  be  reached  when  the  full-scale  load  current  is being  supplied  to  the  load.  The  external  sense  resistor R14 is  determined  by  setting  the  full-scale  load  current and  selecting  a  full-scale  sense  voltage  that  does  not exceed the full-scale sense-voltage rating of the IC:

<!-- formula-not-decoded -->

Evaluates: MAX44298

The EV kit supports a full-scale sense voltage drop of 5mV, 10mV, and 20mV (see Table 2 for selections). The EV kit defaults to the 10mV full-scale setting. For different full-scale sense ranges and full-scale load current arrangements, the equation above can be used to determine the appropriate sense-resistor value.

Other  options  to  evaluate  the  current-sensing  capability of the MAX44298 are to create a voltage across RS+ and RS-  without  applying  heavy  load  current  going  through these  two  test  points.  Apply  a  negative  voltage  to  the VNEG  test  point  (using  the  resistive-divider  R12  and R13)  or  a  direct  precision  voltage  source  across  RS+ and  RS-.  In  either  case,  ensure  that  the  sense  voltage across RS+ and RS- is within its set full-scale range. The device  is  shipped  with  a  voltage-divider  formed  by  R12 =  4.99kΩ  and  R13  =  10Ω.  When  using  this  option,  the users should note that there exists approximately 100µA bias  current  coming  out  of  the  RS-  pin  due  to  the  CSA internal  gain  settings.  This  input  bias  current  should  be taken into account for error when sensing small currents in  milli-ampere  ranges. Therefore,  measuring the actual drop across RS+ and RS- is necessary for accuracy. For example, applying a negative supply voltage of -5V at the VNEG test point would give about 9mV across RS+ and RS- instead of 10mV, theoretically.

For 5mV and 20mV full-scale sense ranges, R12 and R13 should be re-scaled accordingly.

## Monitoring the Load Power

The  device  monitors  the  instantaneous  input  power  by internally multiplying the scaled load current and a scaled fraction of the load voltage and provides scaled output at POUT.

│

## Component List, PCB Layout, and Schematic

See the following links for component information, PCB layout diagrams, and schematics.

- MAX44298 EV BOM
- MAX44298 EV PCB Layout
- MAX44298 EV Schematic

Evaluates: MAX44298

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX44298EVKIT# | EV Kit |

#RoHS-compliant

## MAX44298 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/15           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX44298

<!-- image -->

| TITLE: Bill of Materials   | TITLE: Bill of Materials          | TITLE: Bill of Materials   | TITLE: Bill of Materials                                                      | TITLE: Bill of Materials          | TITLE: Bill of Materials   | TITLE: Bill of Materials                                                                                         | TITLE: Bill of Materials   | TITLE: Bill of Materials   |
|----------------------------|-----------------------------------|----------------------------|-------------------------------------------------------------------------------|-----------------------------------|----------------------------|------------------------------------------------------------------------------------------------------------------|----------------------------|----------------------------|
| DATE: 09/30/2015           | DATE: 09/30/2015                  | DATE: 09/30/2015           | DATE: 09/30/2015                                                              | DATE: 09/30/2015                  | DATE: 09/30/2015           | DATE: 09/30/2015                                                                                                 | DATE: 09/30/2015           | DATE: 09/30/2015           |
| DESIGN: max44298_evkit_b   | DESIGN: max44298_evkit_b          | DESIGN: max44298_evkit_b   | DESIGN: max44298_evkit_b                                                      | DESIGN: max44298_evkit_b          | DESIGN: max44298_evkit_b   | DESIGN: max44298_evkit_b                                                                                         | DESIGN: max44298_evkit_b   | DESIGN: max44298_evkit_b   |
| ITEM                       | REF_DES                           | DNI/DNP                    | QTY MFG PART #                                                                | MANUFACTURER                      | VALUE                      | DESCRIPTION                                                                                                      | COMMENTS                   |                            |
|                            | 1 C3 - C6                         | -                          | 4 C0603X7R500103JNP; C0603C103J5                                              | KEMET                             | 0.01UF                     | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 50V; TOL=5%; MODEL=X7R; TG= - 55 DEGC TO +125 DEGC; TC=+/           |                            |                            |
|                            | 2 C7                              | -                          | 1 CGA5L1C0G2A683J160                                                          | TDK                               | 0.068UF                    | CAPACITOR; SMT (1206); CERAMIC CHIP; 0.068UF; 100V; TOL=5%; TG= - 55 DEGC TO +125 DEGC; TC=C0G AUTO              |                            |                            |
|                            | 3 C8                              | -                          | 1 GCM3195C2A103JA16D                                                          | MURATA                            | 0.01UF                     | CAPACITOR; SMT (1206); CERAMIC CHIP; 0.01UF; 100V; TOL=5%; MODEL=; TG= - 55 DEGC TO +125 DEGC; TC=C0G            |                            |                            |
|                            | 4 C10                             | -                          | 1 ECJ - 1VB1H104K; GRM188R71H104KA; CGJ3E2X7R1H104K080AA; C1608X7R1H104K080AA | PANASONIC/MURATA/TD K             | 0.1UF                      | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG= - 55 DEGC TO +125 DEGC; TC=X7R;                    |                            |                            |
|                            | 5 C11                             | -                          | 1 C1608X5R1E475K080AC                                                         | TDK                               | 4.7UF                      | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 25V; TOL=10%; MODEL=C SERIES; TG= - 55 DEGC TO +85 DEGC; TC=X5R      |                            |                            |
|                            | 6 C13                             | -                          | 1 C0603C100K1GAC                                                              | KEMET                             | 10PF                       | CAPACITOR; SMT (0603); CERAMIC CHIP; 10PF; 100V; TOL=10%; MODEL=C0G; TG= - 55 DEGC TO +125 DEGC; TC=+/           |                            |                            |
|                            | 7 CF, VIN, IOUT, POUT, VOUT, VREF | -                          | 6                                                                             | 5000 KEYSTONE                     | N/A                        | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |                            |                            |
|                            | 8 IN+, IN - , LOAD+, LOAD -       | -                          | 4 108 - 0740 - 001                                                            | EMERSON NETWORK POWER             | 108 - 0740 - 001           | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                         |                            |                            |
|                            | 9 JU1 - JU4                       | -                          | 4 PEC04SAAN                                                                   | SULLINS ELECTRONICS CORP.         | PEC04SAAN                  | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                        |                            |                            |
|                            | 10 R1                             | -                          | 1 1 - 1879417 - 3; CPF0603B560KE                                              | TE CONNECTIVITY                   | 560K                       | RESISTOR; 0603; 560K OHM; 0.1%; 25PPM; 0.063W; THIN FILM                                                         |                            |                            |
|                            | 11 R2                             | -                          | 1 TNPW060310K0BE; RN731JTTD1002B                                              | VISHAY DALE/KOA SPEER ELECTRONICS | 10K                        | RESISTOR; 0603; 10K OHM; 0.1%; 25PPM; 0.1W; THICK FILM                                                           |                            |                            |
| 12                         | R3 - R6                           | -                          | 4 RG1608P - 243 - B                                                           | SUSUMU CO LTD.                    | 24K                        | RESISTOR; 0603; 24K OHM; 0.1%; 25PPM; 0.1W; THIN FILM                                                            |                            |                            |
| 13                         | R7 - R10                          | -                          | 4 ERJ - 3GEYJ472V                                                             | PANASONIC                         | 4.7K                       | RESISTOR; 0603; 4.7K OHM; 5%; 200PPM; 0.10W; THICK FILM                                                          |                            |                            |
| 14                         | R12                               | -                          | 1 RG1608P - 4991 - B                                                          | SUSUMU CO LTD.                    | 4.99K                      | RESISTOR; 0603; 4.99K OHM; 0.1%; 25PPM; 0.1W; THIN FILM                                                          |                            |                            |
|                            | 15 R13                            | -                          | 1 CRT0603 - BY - 10R0ELF                                                      | BOURNS                            |                            | 10 RESISTOR; 0603; 10 OHM; 0.1%; 25PPM; 0.063W; THIN FILM                                                        |                            |                            |
| 16                         | RS+, RS - , VCC, VDD, VNEG        | -                          | 5                                                                             | 5010 ?                            |                            | 5010 TESTPOINT WITH 1.80MM HOLE DIA, RED, MULTIPURPOSE                                                           |                            |                            |

<!-- image -->

| 17 SU4 - SU7      | -       | 4 STC02SYAN                                                        | SULLINS ELECTRONICS CORP.         | STC02SYAN                                                  | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL                                      |        |
|-------------------|---------|--------------------------------------------------------------------|-----------------------------------|------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|
| 18 TP1 - TP6      | -       | 6 5011                                                             | ?                                 | 5011 BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE       | SILVER PLATE FINISH;                                                                                                                                         |        |
| 19 U1             | -       | 1 MAX44298 ECJ - 1VB1H104K; GRM188R71H104KA; CGJ3E2X7R1H104K080AA; | MAXIM PANASONIC/MURATA/TD         | MAX44298                                                   | EVKIT PART - IC; PACKAGE CODE: WLP162P2+1; DOC NO: 21 - 1000005 CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V;                                             | OPEN   |
| 20 C9 21 C17, C41 | DNP DNP | 1 C1608X7R1H104K080AA 2 GRM32ER72A225KA35; CGA6N3X7R2A225K230      | K MURATA/TDK                      | 0.1UF 2.2UF                                                | TOL=10%; TG= - 55 DEGC TO +125 DEGC; TC=X7R; CAPACITOR; SMT (1210); CERAMIC CHIP; 2.2UF; 100V; TOL=10%; MODEL=GRM SERIES; TG= - 55 DEGC to +125 DEGC; TC=X7R | OPEN   |
| 22 C18, C42       | DNP     | 2 C0805C104J1RAL                                                   | KEMET                             | 0.1UF                                                      | CAPACITOR; SMT; 0805; CERAMIC; 0.1uF; 100V; 5%; X7R; 55degC to + 125degC                                                                                     | - OPEN |
| 23 FB3            | DNP     | 1 BLM18BD252SN1                                                    | MURATA                            | 2500                                                       | INDUCTOR; SMT (0603); FERRITE - BEAD; 2500; TOL=+/ -                                                                                                         | OPEN   |
| 24 R11            | DNP     | 1 TNPW060310K0BE; RN731JTTD1002B                                   | VISHAY DALE/KOA SPEER ELECTRONICS | 25%; 0.05A 10K RESISTOR; 0603; 10K OHM; 0.1%; 25PPM; 0.1W; | THICK FILM                                                                                                                                                   | OPEN   |
| 25 R14            | DNP     | 1 Y14880R00100D9                                                   | VISHAY FOIL RESISTOR              |                                                            | 0.001 RESISTOR; 3637; 0.001 OHM; 0.5%; 25PPM; 3W; METAL FOIL                                                                                                 | OPEN   |
| 26 R15            | DNP     | 1 N/A                                                              | N/A                               | SHORT PACKAGE OUTLINE 0603 RESISTOR                        | SHORT PACKAGE OUTLINE 0603 RESISTOR                                                                                                                          |        |
| 27 R16            | DNP     | 1 TNPW060320R0BE                                                   | VISHAY DALE                       | 20 RESISTOR; 0603; 20 OHM; 0.1%; 25PPM; 0.10W; THICK       | FILM                                                                                                                                                         | OPEN   |
| 28 R17            | DNP     | 1 PATT0603E8982BG                                                  | VISHAY DALE                       | 89.8K RESISTOR; 0603; 89.8K OHM; 0.1%; 25PPM; 0.15W; THIN  | FILM                                                                                                                                                         | OPEN   |
| 29 SU1 - SU3      | DNP     | 3 801 - 93 - 010 - 10 - 001000                                     | MILL - MAX                        | 801 - 93 - 010 - 10 - 001000                               | IC - SOCKET;SIP; STANDARD SOLDER TAIL; 801 SERIES; 0.024D/0.118L; 0.1IN GRID; STRAIGHT SOCKET; OPEN FRAME; 10PINS                                            | OPEN   |
| 30 U2             | DNP     | 1 MAX44285TAUA+                                                    | MAXIM                             | MAX44285TAUA +                                             | IC; AMP; DUAL - CHANNEL; HIGH - PRECISION; HIGH - VOLTAGE; CURRENT - SENSE AMPLIFIER; GAIN=20V/V; UMAX8                                                      | OPEN   |

TOTAL

66

<!-- image -->

<!-- image -->

maxim

integrated..

HARDWARENAME:MAX44298\_EVKIT\_B

HARDWARENUMBER:

ENGINEER:

DATE:04/29/2015

DESIGNER:

OOB++/GERBER:

TOP

DO NOT MODIFYTOP SOLDERMASK ONU1

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

DO NOT MODIFY TOP SOLDERMASK ON U1

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

DO NOT MODIFY TOP SOLDERMASK ON U1

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

DONOT MODIFY TOP SOLDERMASK ONU1

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->