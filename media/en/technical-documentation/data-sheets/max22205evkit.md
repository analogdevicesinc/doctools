<!-- lastmod 2022-08-02 -->
<!-- image -->

Evaluates: MAX22205

## General Description

The  MAX22205  evaluation  kit  (EV  kit)  provides  a  proven  design  to  evaluate  the  +65V,  7.6A  Single  H-Bridge MAX22205 motor driver. The MAX22205 can drive a single brushed DC motor. The MAX22205 IC integrates very low impedance  FETs  in  a  single  H-Bridge  configuration  with a typical R ON (high side + low side) of 0.15Ω. The EV kit features headers, test points, and terminal blocks to provide an interface to the MAX22205 motor driver. The MAX22205 integrated current-sense output ISENA and ISENB can be monitored  using  test  points  or  can  be  connected  to  an external ADC  using  header  J3.  The  MAX22205  features embedded current-drive regulation (CDR) with adjustable chopping  current  (I TRIP )  and  adjustable  current-limit  offtime  (t OFF ).  The  EV  kit  operates  from  an  input  voltage of  +4.5V to +65V (V M ). An on board +3.3V regulator U2 (MAX6765TTSD2+) provides a regulated +3.3V to supply the MAX22205 logic inputs. Terminal blocks J1, J5, and J6 are installed  to  provide  an  interface  for  the  high  voltage, high  current  V M   inputs  and  motor  driver  outputs  OUT\_A and OUT\_B.

## MAX22205 EV Kit Board Photo

<!-- image -->

319-100842; Rev 0; 11/21

## MAX22205 Evaluation Kit

## Features

- Easy Evaluation of the MAX22205
- Adjustable t OFF  Time Using an On-Board Potentiometer
- Configurable Current Drive Regulation (CDR)
- On-board +3.3V Regulator to Drive MAX22205 Logic Inputs
- Test Points and Headers to Interface with MAX22205 Logic Inputs and Current-Sense Outputs
- Fully Assembled and Tested
- Proven PCB Layout

Ordering Information appears at end of data sheet.

owners.

## MAX22205 Evaluation Kit

## Quick Start

## Required Equipment

- MAX22205 EV kit
- +65V DC, 7.6A power supply
- 100kHz square-wave generator (optional)
- Brushed DC motor or load

## Procedure

The EV kit is fully assembled and tested. Use the following steps to verify board operation:

- 1) As  with  all  motor  drive  applications,  stopping  or braking  the  motor  can  cause  a  back  EMF  (BEMF) current  and  voltage  spike.  At  high  supply  voltages (+65V), this can cause the supply to rise above the absolute  maximum  allowable  voltage  to  the  supply pins of a motor drive IC. It is highly recommended that the power supply be clamped appropriately to avoid damage to the motor driver IC.
- 2) Verify that shunts are installed in the default position.
- 3) Connect a +65V supply to V M  and adjust the V M  voltage to the desired operating voltage.
- 4) Adjust  the  I TRIP   chopping  current  according  to  the position of shunts on header J2 to accommodate the load requirement.
- 5) Adjust the t OFF time using potentiometer R9 if the offtime is being observed.
- 6) Apply  a  PWM  signal  to  the  DINA/DINB  inputs  as desired  to  drive  the  load.  For  example,  a  +3.3V  to 0V,  20kHz  PWM  signal  with  a  20%  duty  cycle  can be  used  to  drive  a  24V  or  48V  brushed  DC  motor connected  to  the  outputs.  To  drive  a  load  with current  flowing  from  OUT\_A  to  OUT\_B,  the  PWM signal should be applied to DINA and DINB should be driven to logic low (GND).

## Detailed Description of Hardware

## Enable Controls

The MAX22205's Enable pin (EN) can be configured by installing or uninstalling a shunt on header J19 or the EN pin can be controlled by an external signal by uninstalling the shunt on J19 and driving the pin directly by applying a signal to pin 3 of header J3.

## On-Board +3.3V Control

The  MAX22205  features  an  on-board  +3.3V  LDO  that operates  from  +4.5V  to  +65V.  The  input  voltage  to  the LDO  is  supplied  by  the  V M   voltage.  To  provide  3.3V to  the  MAX22205  logic  pins  from  the  LDO,  install  a shunt in positions 2-3 of header J18. An external +3.3V supply can be used, which can be connected to TP3, and in this case, a shunt should be installed in positions 1-2 of header J18.

## PWM Controls

When  the  part  is  Enabled  (EN  =  Logic  High)  and  the H-Bridge current is below the configured current limit, the average  output  voltage  can  be  controlled  by  DINA  and DINB  logic  input  pins  using  PWM  techniques.  Setting Enable logic low causes the output to enter a high impedance mode and the motor to coast. The Enable input pin frequency must not exceed 1KHz and cannot be used for PWM control. Table 1 describes the behavior of the full H-Bridge output pins OUT\_A and OUT\_B with respect to the input signals EN, DINA, and DINB.

## Current Regulation Controls

The  MAX22205  features  embedded  current  drive  regulation  (CDR).  The  bridge  current  is  sensed  by  a  nondissipative integrated current-sensing circuit (ICS) and it is then compared with the threshold current (I TRIP ). As soon as  the  bridge  current  exceeds  the  threshold,  the  device enforces  the  decay  for  a  fixed  OFF-time  (t OFF ).  Once t OFF  has  elapsed,  the  driver  is  re-enabled  for  the  next PWM cycle. t OFF  can be adjusted by connecting a resistor (R ROFF )  from  the  ROFF  pin  to  GND.  Potentiometer  R9

## Table 1. Full Bridge EN, DINA, DINB, OUT\_A, OUT\_B Truth Table

|   EN | DINA   | DINB   | OUT1A = OUT2A   | OUT1B = OUT2B   | DESCRIPTION                                |
|------|--------|--------|-----------------|-----------------|--------------------------------------------|
|    0 | X      | X      | High-Z          | High-Z          | H-bridge disabled. High impedance (High-Z) |
|    1 | 0      | 0      | L               | L               | Brake Low; Slow decay                      |
|    1 | 1      | 0      | H               | L               | Current from OUT_A to OUT_B                |
|    1 | 0      | 1      | L               | H               | Current from OUT_B to OUT_A                |
|    1 | 1      | 1      | H               | H               | Brake High; Slow decay                     |

│

## MAX22205 Evaluation Kit

and resistor  R2  are  placed  in  series  between  the  ROFF pin and GND and can be used to adjust the R ROFF  resistance from 15kΩ to 215kΩ and hence the t OFF time. The following  equation  shows  the  relationship  between  t OFF and R ROFF :

<!-- formula-not-decoded -->

Where  K TOFF is  0.667µs/kΩ  and  t OFF  can  be  programmed in a range from 10µs to 80µs.

The  chopping  current  threshold  (I TRIP )  can  be  configured  by  connecting  a  resistor  between  the  REF\_  pins and GND. The MAX22205 EV kit has two 20kΩ resistors installed in series from (R3 and R5) the REF pin to GND. A shunt can be installed on header J2 to short one of the 20kΩ series resistors to reduce the resistance from the REF pin to GND from 40kΩ to 20kΩ.

The following equation describes the relationship between I TRIP  and R REF , where K IFS  = 72KV.

<!-- formula-not-decoded -->

Using header J2 and resistors R3 and R5, the I TRIP  current for each H-Bridge can be configured to 1.8A or 3.6A. Other I TRIP  current levels can be obtained by mounting different  resistors  in  place  of  R3  and  R5.  Refer  to  the MAX22205  IC  data  sheet  for  the  R REF   resistor  range. Table 2 describes the relationship between I TRIP  and the header J2 shunt position.

## Current-Sense Output (CSO)

Currents proportional to the internally sensed motor current are output to pins ISENA and ISENB for the H-bridge A and B, respectively. The current is sensed when the two low-side FETs sinks the output current and it is therefore meaningful  both  during  the  energizing  (t ON )  phase  and during  the  slow-decay  phase  (brake).  During  the  blanking time, the ISEN current is held constant. In fast decay, the current is not monitored and the ISEN outputs are a

Table 2. ITRIP Chopping Current Control

| HEADER   | SHUNT POSITION   |   R REF_ VALUE (k Ω) | OUTPUT CHOPPING CURRENT I TRIP (A)   |
|----------|------------------|----------------------|--------------------------------------|
| J2       | Not Installed    |                   40 | Output chopping current set to 1.8A  |
| J2       | 1-2              |                   20 | Output chopping current set to 3.6A  |

zero current. The following equation shows the relationship between the current sourced at ISEN and the output current.

<!-- formula-not-decoded -->

KISEN  represents the current scaling factor between the output current and its replica at pin ISEN. K ISEN  is typically  7500A/A. For instance, if the instantaneous output current is 1.8A, the current sourced at ISEN is 240μA. By connecting  an  external  signal  resistor  (R ISEN )  between ISEN\_ and GND, a voltage proportional to the motor current is generated. The EV kit is shipped with 3kΩ resistors (R7 and R8) installed from ISENA and ISENB to GND.

## CDR Open-Drain Outputs

The CDR pin is an active-low  open-drain  output,  which is  asserted  during  the  fixed  decay  time  interval  (t OFF ) enforced by the current-drive regulation loop. In this way, the external controller can monitor whether the integrated current  loop  has  taken  control  of  the  driver  overwriting the status of the PWM logic inputs (DINA and DINB). The CDR signal can be used by the external controller for a variety  of  reasons  and  provides  information  about  the actual  load  during  current  regulation.  The  CDR  on  the MAX22205 EV kit has a 1kΩ pullup  to  +3.3V  installed. The  CDR  pin  can  be  monitored  either  using  pin  6  of header J4, or test point TP13.

## Decay Mode Controls

Two logic input pins allow the user to set the decay mode during  t OFF .  The  MAX22205  supports  slow,  fast,  and mixed-decay mode. The decay mode can be controlled by  driving  the  DECAY1  and  DECAY0  pins  to  GND  or +3.3V.  Table  3  describes  the  decay  mode  truth  table and the behavior of the DECAY\_ headers (DECAY1 and DECAY2) on the EV kit. When a shunt is not installed, the DECAY\_ pins are pulled to GND via an internal pulldown resistor.

Table 3. Decay Mode

|   DECAY HEADER DECAY2 |   DECAY HEADER DECAY1 | DECAY MODE              |
|-----------------------|-----------------------|-------------------------|
|                     0 |                     0 | Slow                    |
|                     0 |                     1 | Mixed 30% Fast/70% Slow |
|                     1 |                     0 | Mixed 60% Fast/40% Slow |
|                     1 |                     1 | Fast                    |

## MAX22205 Evaluation Kit

## Bridge Current Control (ISET)

Four  input  pins,  ISET  [3:0],  are  used  to  program  the regulated output current. Table 4 shows the bridge current levels for each input combination.  The ISET\_ pins can be driven either using pins 2-5 on header J4 or by headers J11, J12, J15, and J16.

## Table 4. H-Bridge ISET\_ Truth Table

|   ISET3 |   ISET2 |   ISET1 |   ISET0 | RELATIVE CURRENT (% OF IFS)   |
|---------|---------|---------|---------|-------------------------------|
|       0 |       0 |       0 |       0 | 100%                          |
|       0 |       0 |       0 |       1 | 99.2%                         |
|       0 |       0 |       1 |       0 | 97.6%                         |
|       0 |       0 |       1 |       1 | 95.3%                         |
|       0 |       1 |       0 |       0 | 91.3%                         |
|       0 |       1 |       0 |       1 | 86.6%                         |
|       0 |       1 |       1 |       0 | 81.1%                         |
|       0 |       1 |       1 |       1 | 74.0%                         |
|       1 |       0 |       0 |       0 | 66.9%                         |
|       1 |       0 |       0 |       1 | 59.1%                         |
|       1 |       0 |       1 |       0 | 50.4%                         |
|       1 |       0 |       1 |       1 | 40.9%                         |
|       1 |       1 |       0 |       0 | 30.7%                         |
|       1 |       1 |       0 |       1 | 20.5%                         |
|       1 |       1 |       1 |       0 | 10.2%                         |
|       1 |       1 |       1 |       1 | 0.0%                          |

## Table 5. Default Header Position

| HEADER   | SHUNT POSITION   | DESCRIPTION                                                     |
|----------|------------------|-----------------------------------------------------------------|
| J2       | Not Installed    | Output A chopping current set to 0.9A                           |
| J2       | 1-2*             | Output A chopping current set to 1.8A                           |
| J3       | Not Installed    | Output B chopping current set to 0.9A                           |
| J3       | 1-2*             | Output B chopping current set to 1.8A                           |
| J13      | Not Installed    | Output A disabled                                               |
| J13      | 1-2*             | Output A enabled                                                |
| J14      | Not Installed    | Output B disabled                                               |
| J14      | 1-2*             | Output B enabled                                                |
| J17      | 1-2*             | Connects the SLEEP pin to VM to wake the part                   |
| J17      | 2-3              | Connects the SLEEP pin to GND to put the part in low power mode |
| J18      | 1-2              | +3.3V supplied externally                                       |
| J18      | 2-3*             | +3.3V supplied using on-board LDO                               |

Evaluates: MAX22205

## Default Header Position

Table 5 describes the default position of the headers to operate the MAX22205 EV kit as described in the Quick Start Procedure section.

│

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX22205EVKIT# | EV Kit |

#Denotes RoHS compliance.

## MAX22205 EV Kit Bill of Materials

| ITEM     | REF_DES              | DNI/DNP   |   QTY | MFG PART #                                                | MANUFACTURER               | VALUE         | DESCRIPTION                                                                                                                                                                                            |
|----------|----------------------|-----------|-------|-----------------------------------------------------------|----------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1        | C1, C3               | -         |     2 | CL05A105KO5NNN                                            | SAMSUNG                    | 1UF           | CAP; SMT (0402); 1UF; 10%; 16V; X5R; CERAMIC                                                                                                                                                           |
| 2        | C2                   | -         |     1 | CGA3E2X7R2A223K080AA                                      | TDK                        | 0.022UF       | CAP; SMT (0603); 0.022UF; 10%; 100V; X7R; CERAMIC                                                                                                                                                      |
| 3        | C4, C5               | -         |     2 | C3216C0G2A104J160                                         | TDK                        | 0.1UF         | CAP; SMT (1206); 0.1UF; 5%; 100V; C0G; CERAMIC                                                                                                                                                         |
| 4        | C6                   | -         |     1 | EEE-FK2A470AQ                                             | PANASONIC                  | 47UF          | CAP; SMT (CASE_H13); 47UF; 20%; 100V; ALUMINUM-ELECTROLYTIC                                                                                                                                            |
| 5        | C7                   | -         |     1 | C0805C224K1RAC; GRM21AR72A224KAC5                         | KEMET; MURATA              | 0.22UF        | CAP; SMT (0805); 0.22UF; 10%; 100V; X7R; CERAMIC                                                                                                                                                       |
| 6        | C8                   | -         |     1 | GRM21BR70J106K; C2012X7R0J106K125AB; CGA4J1X7R0J106K125AC | MURATA; TDK;TDK            | 10UF          | CAP; SMT (0805); 10UF; 10%; 6.3V; X7R; CERAMIC                                                                                                                                                         |
| 7        | C9                   | -         |     1 | C1608X7S2A104K080AB                                       | TDK                        | 0.1UF         | CAP; SMT (0603); 0.1UF; 10%; 100V; X7S; CERAMIC                                                                                                                                                        |
| 8        | D1                   | -         |     1 | SML-P11UTT86                                              | ROHM                       | SML-P11UTT86  | DIODE; LED; SMT; PIV=1.8V; IF=0.02A                                                                                                                                                                    |
| 9        | J1, J5, J6           | -         |     3 | 1727010                                                   | PHOENIX CONTACT            | 1727010       | CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; RIGHT ANGLE; 2PINS                                                                                                                              |
| 10       | J2, J9-J16, J19      | -         |    10 | PCC02SAAN                                                 | SULLINS                    | PCC02SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                                                                                               |
| 11       | J3, J4               | -         |     2 | 90120-0128                                                | MOLEX                      | 90120-0128    | CONNECTOR; THROUGH HOLE; C-GRID III SINGLE ROW STRAIGHT PIN HEADER; STRAIGHT THROUGH; 8PINS                                                                                                            |
| 12       | J7                   | -         |     1 | PBC04SAAN                                                 | SULLINS ELECTRONICS CORP.  | PBC04SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS; -65 DEGC TO +125 DEGC                                                                                                                       |
| 13       | J17, J18             | -         |     2 | PBC03SAAN                                                 | SULLINS                    | PBC03SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                                                                                                                       |
| 14       | R1                   | -         |     1 | CRCW04021K40FK; RC0402FR-071K4L                           | VISHAY DALE; YAGEO PHICOMP | 1.4K          | RES; SMT (0402); 1.4K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                     |
| 15       | R2                   | -         |     1 | ERJ-2RKF1502                                              | PANASONIC                  | 15K           | RES; SMT (0402); 15K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                      |
| 16       | R3, R5               | -         |     2 | ERA-2AEB203                                               | PANASONIC                  | 20K           | RES; SMT (0402); 20K; 0.10%; +/-25PPM/DEGC; 0.0630W                                                                                                                                                    |
| 17       | R7, R8               | -         |     2 | CRCW04023K00FK                                            | VISHAY DALE                | 3K            | RES; SMT (0402); 3K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                       |
| 18       | R9                   | -         |     1 | 3386P-1-204TLF                                            | BOURNS                     | 200K          | RES; THROUGH HOLE-RADIAL LEAD; 200K; 10%; +/-100PPM/DEGC; 0.5W                                                                                                                                         |
| 19       | R10                  | -         |     1 | RC0402FR-071KL; MCR01MZPF1001                             | YAGEO; ROHM SEMICONDUCTOR  | 1K            | RES; SMT (0402); 1K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                       |
| 20       | SPACER1- SPACER4     | -         |     4 | 9032                                                      | KEYSTONE                   | 9032          | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                                                              |
| 21       | TP1, TP3             | -         |     2 | 5010                                                      | KEYSTONE                   | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                                                                  |
| 22       | TP2, TP4, TP14       | -         |     3 | 5011                                                      | KEYSTONE                   | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                                |
| 23       | TP5-TP13, TP15, TP16 | -         |    11 | 5014                                                      | KEYSTONE                   | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                               |
| 24       | U1                   | -         |     1 | MAX22205ATU+                                              | MAXIM                      | MAX22205ATU+  | EVKIT PART - IC; MAX22205ATU+; 5V; 7.6A HIGH CURRENT SINGLE H-BRIDGE WITH INTEGRATED CURRENT SENSE; PACKAGE OUTLINE DRAWING: 21-0172; PACKAGE LAND PATTERN: 90-0076; PACKAGE CODE: T3857+1C; TQFN38-EP |
| 25       | U2                   | -         |     1 | MAX6765TTSD2+                                             | MAXIM                      | MAX6765TTSD2+ | IC; VREG; AUTOMOTIVE MICROPOWER LINEAR REGULATOR WITH SUPERVISOR; TDFN6-EP                                                                                                                             |
| 26       | PCB                  | -         |     1 | MAX22205                                                  | MAXIM                      | PCB           | PCB:MAX22205                                                                                                                                                                                           |
| 27 TOTAL | R12, R13             | DNP       |     0 | N/A                                                       | N/A                        | OPEN          | RESISTOR; 0603; OPEN; FORMFACTOR                                                                                                                                                                       |

59

Evaluates: MAX22205

## MAX22205 EV Kit Schematic Diagram

<!-- image -->

## MAX22205 EV Kit PCB Layout Diagrams

MAX22205 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX22205 EV Kit PCB Layout-Top Layer

<!-- image -->

│

## MAX22205 EV Kit PCB Layout Diagrams (continued)

MAX22205 EV Kit PCB Layout-Layer 2

<!-- image -->

MAX22205 EV Kit PCB Layout-Layer 3

<!-- image -->

│

## MAX22205 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX22205 EV Kit PCB Layout-Bottom Layer

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/21           | Initial Release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

│

Evaluates: MAX22205