<!-- lastmod 2022-08-03 -->
## MAX22203 Evaluation Kit

## General Description

The MAX22203 evaluation kit (EV kit) provides a proven design to evaluate the +65V, 3.8A Dual H-Bridge MAX22203 motor  driver.  The  MAX22203  can  drive  two  brushed DC  motors  or  single  stepper  motor.  The  MAX22203  IC integrates  very  low  impedance  FETs  in  a  dual  H-Bridge configuration with a typical RON (high side + low side) of 0.3Ω. The EV kit features headers, test points, and termi -nal blocks to provide an interface to the MAX22203 motor driver.  The  MAX22203  integrated  current-sense  output ISENA and ISENB can be monitored using test points or can  be  connected  to  an  external ADC  using  header  J4. The MAX22203 features embedded current-drive regula -tion  (CDR)  with  adjustable  chopping  current  (I TRIP )  and adjustable  current-limit  off-time  (t OFF ).  The  MAX22203 EV kit  operates  from  an  input  voltage  of  +4.5V  to  +65V (V M ). An on board +3.3V regulator U2 (MAX6765TTSD2+) provides a regulated +3.3V to drive the MAX22203 logic inputs. Terminal blocks J1 and J6 are installed to provide an  interface  for  the  high  voltage,  high  current  VM  inputs and motor driver outputs OUT1\_ and OUT2\_.

## MAX22203 EV Kit Board

<!-- image -->

<!-- image -->

## Features

- Easy Evaluation of the MAX22203
- Adjustable t OFF  Time Using an On-Board Potentiometer
- Configurable Current Drive Regulation (CDR)
- On-board +3.3V Regulator to Drive MAX22203 Logic Inputs
- Test Points and Headers to Interface with MAX22203 Logic Inputs and Current-Sense Outputs
- Fully Assembled and Tested
- Proven PCB Layout

Ordering Information appears at end of data sheet.

Evaluates: MAX22203

## Quick Start

## Required Equipment

- MAX22203 EV kit
- +65V DC, 3.8A power supply
- 100kHz square-wave generator (optional)
- Brushed DC motor or load

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

- 1) As with all motor drive applications, stopping or braking the motor can cause a back EMF (BEMF) current and voltage spike. At high supply voltages (+65V), this can cause the supply to rise above the absolute maximum allowable voltage to the supply pins of a motor drive IC. It is highly recommended that the power supply be clamped appropriately to avoid damage to the motor driver IC.
- 2) Verify that shunts are installed in the default position.
- 3) Connect a +65V supply to VM and adjust the VM voltage to the desired operating voltage.
- 4) Adjust the I TRIP chopping current according to the position of shunts on headers J2 and J3 to accom -modate the load requirement.
- 5) Adjust the t OFF  time using potentiometer R9 if the off-time is being observed.
- 6) Apply a PWM signal to the DIN1\_ /DIN2\_ inputs as desired to drive the load. For example, a +3.3V to 0V, 20kHz PWM signal with a 20% duty cycle can be used to drive a 24V or 48V brushed DC motor connected to output A. To drive load with current flowing from OUT2A to OUT1A, DIN1A would be driven to logic LOW (GND) and the PWM signal would be ap -plied to DIN2A.

## Detailed Description of Hardware

## Enable Controls

The MAX22203 enable pins (ENA and ENB) are controlled by installing shunts on headers J13 and J14 or the pins can be connected to a microcontroller using header J4.

Evaluates: MAX22203

## On-Board +3.3V Control

The  MAX22203  features  an  on-board  +3.3V  LDO  that operates  from  +4.5V  to  +65V.  The  input  voltage  to  the LDO is supplied by the VM voltage. To provide 3.3V to the MAX22203 logic pins from the LDO, install a shunt in position 2-3 of header J18. An external +3.3V supply can be used, which can be connected to TP3, and in this case, a shunt should be installed in position 1-2 of header J18.

## PWM Controls

Each MAX22203 H-Bridge can be individually PWM con -trolled by two logic inputs (DIN1\_, DIN2\_) applied to either headers J4 or J9 to J14, or test points TP5 to TP10. Table

1

below describes the behavior of the full H-Bridge output

pins OUT1\_ and OUT2\_ with respect to the input signals

EN, DIN1\_, and DIN2\_. PWM techniques can be used to

control the output duty cycle and implement motor speed

control.

## Current Regulation Controls

The MAX22203 features embedded current drive regulation (CDR). The bridge current is sensed by a non-dissipative integrated current-sensing circuit (ICS) and it is then compared  with  the  threshold  current  (I TRIP ).  As  soon  as  the bridge current exceeds the threshold, the device enforces the  decay  for  a  fixed  OFF-time  (t OFF ).  Once  t OFF has elapsed, the driver is re-enabled for the next PWM cycle. t OFF  can  be  adjusted  by  connecting  a  resistor  (R ROFF ) from the ROFF pin to GND. Potentiometer R9 and resistor R2 can be used to adjust the R ROFF  resistance from 15kΩ to 215kΩ and hence the t OFF  time. The following equation shows the relationship between t OFF  and R ROFF :

## t OFF = R ROFF x K TOFF

Where  K TOFF   is  0.667µs/kΩ  and  t OFF can  be  programmed in a range from 10µs to 80µs.

The  chopping  current  threshold  (I TRIP )  can  be  config -ured  by  connecting  a  resistor  between  the  REF\_  pins and GND. The MAX22203 EV kit has two 20kΩ resistors installed in series from each of the REF\_ pins (R3 and R5 for REFA, and R4 and R6 for REFB) to GND. Shunts can be installed on headers J2 or J3 to short one of the 20kΩ series resistors to reduce the resistance from each REF\_ pin to GND from 40kΩ to 20kΩ.

## Table 1. Full Bridge EN\_, DIN1\_, DIN2\_, OUT1\_, OUT2\_ Truth Table

|   EN_ | DIN1_   | DIN2_   | OUT1_   | OUT2_   | DESCRIPTION                                |
|-------|---------|---------|---------|---------|--------------------------------------------|
|     0 | X       | X       | High-Z  | High-Z  | H-bridge disabled. High impedance (High-Z) |
|     1 | 0       | 0       | L       | L       | Brake Low; Slow decay                      |
|     1 | 1       | 0       | H       | L       | Forward (Current from OUT1_ to OUT2_)      |
|     1 | 0       | 1       | L       | H       | Reverse (Current from OUT2_ to OUT1_)      |
|     1 | 1       | 1       | H       | H       | Brake High; Slow decay                     |

The following equation describes the relationship between I TRIP  and R REF , where K I  = 36KV.

<!-- formula-not-decoded -->

Using headers J2 and J3 and resistors R3-R6, the I TRIP current  for  each  H-Bridge  can  be  configured  to  0.9A  or 1.8A.

Other I TRIP current levels can be obtained by mounting different resistors in place of R3, R4, R5, and R6. Refer to the MAX22203 IC data sheet for the R REF resistor range. Table 2 describes the relationship between I TRIP and the header J2 and J3 shunt positions.

## Current-Sense Output (CSO)

Currents proportional to the internally sensed motor current are output to pins ISENA and ISENB for the H-bridge A  and  B,  respectively.  The  current  is  sensed  when  one of the two low-side FETs sinks the output current and it is  therefore meaningful both during the energizing (t ON ) phase and during the slow-decay phase (brake). During the  blanking  time,  the  ISEN  current  is  hold  constant.  In fast  decay,  the  current  is  not  monitored  and  the  ISEN outputs are a zero current. The following equation shows the relationship between the current sourced at ISEN and the output current.

<!-- formula-not-decoded -->

K ISEN  represents the current scaling factor between the output current and its replica at pin ISEN. K ISEN is  typi-

## Table 2. ITRIP Chopping Current Control

| HEADER   | SHUNT POSITION   |   R REF_ VALUE (k | OUTPUT CHOPPING CURRENT I TRIP (A)    |
|----------|------------------|-------------------|---------------------------------------|
| J2       | Not Installed    |                40 | Output A chopping current set to 0.9A |
| J2       | 1-2              |                20 | Output A chopping current set to 1.8A |
| J3       | Not Installed    |                40 | Output B chopping current set to 0.9A |
| J3       | 1-2              |                20 | Output B chopping current set to 1.8A |

## Table 3. Decay Mode

|   DECAY HEADER DECAY2 |   DECAY HEADER DECAY1 | DECAY MODE              |
|-----------------------|-----------------------|-------------------------|
|                     0 |                     0 | Slow                    |
|                     0 |                     1 | Mixed 30% Fast/70% Slow |
|                     1 |                     0 | Mixed 60% Fast/40% Slow |
|                     1 |                     1 | Fast                    |

│

Evaluates: MAX22203

cally  7500A/A. For instance, if the instantaneous output current is 1.8A, the current sourced at ISEN is 240μA. By connecting  an  external  signal  resistor  (R ISEN )  between ISEN\_ and GND, a voltage proportional to the motor cur -rent is generated. The EV kit is shipped with 3kΩ resistors (R7 and R8) installed from ISENA and ISENB to GND.

## CDR Open Drain Outputs

The CDRA and CDRB pins are active-low open-drain out -puts, which are asserted during the fixed decay time inter -val  (t OFF) enforced by the current-drive regulation loop. In  this  way,  the  external  controller  can  monitor  whether the integrated current loop has taken control of the driver overwriting  the  status  of  the  PWM  logic  inputs  (DIN1\_ and DIN2\_). The CDR signal can be used by the external controller for a variety of reasons and provides informa -tion about the actual load during current regulation. The CDRA and CDRB pins on the MAX22203 EV kit have a 1kΩ pullup to +3.3V installed. The CDRA and CDRB pins can be monitored either using pins 4 and 5 of header J5, or test points TP13 and TP14.

## Decay Mode Controls

Two logic input pins allow the user to set the decay mode during  t OFF.  The  MAX22203  supports  slow,  fast,  and mixed-decay mode. The decay mode can be controlled by  driving  the  DECAY1  and  DECAY0  pins  to  GND  or +3.3V.  Table  3  describes  the  decay  mode  truth  table and the behavior of the DECAY\_ headers (DECAY1 and DECAY2) on the MAX22203 EV kit.

## MAX22203 Evaluation Kit

## Default Header Position

The following table describes the default position of the headers to operate the MAX22203 EV kit as described in the Quick Start Procedure section.

## Table 4. Default Header Position

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

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX22203EVKIT# | EV Kit |

# Denotes RoHS compliance.

Evaluates: MAX22203

│

## MAX22203 Evaluation Kit

## MAX22203 EV Kit Bill of Materials

| ITEM     | REF_DES             | QTY   | MFG PART #                                                | MANUFACTURER                        | VALUE         | DESCRIPTION                                                                                                              | COMMENTS   |
|----------|---------------------|-------|-----------------------------------------------------------|-------------------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------|------------|
| 1        | C1, C3              | 2     | CL05A105KO5NNN                                            | SAMSUNG                             | 1UF           | CAP; SMT (0402); 1UF; 10%; 16V; X5R; CERAMIC                                                                             |            |
| 2        | C2                  | 1     | CGA3E2X7R2A223K080AA                                      | TDK                                 | 0.022UF       | CAP; SMT (0603); 0.022UF; 10%; 100V; X7R; CERAMIC                                                                        |            |
| 3        | C4, C5              | 2     | C3216C0G2A104J160                                         | TDK                                 | 0.1UF         | CAP; SMT (1206); 0.1UF; 5%; 100V; C0G; CERAMIC                                                                           |            |
| 4        | C6                  | 1     | EEE-FK2A470AQ                                             | PANASONIC                           | 47UF          | CAP; SMT (CASE_H13); 47UF; 20%; 100V; ALUMINUM-ELECTROLYTIC                                                              |            |
| 5        | C7                  | 1     | C0805C224K1RAC; GRM21AR72A224KAC5                         | KEMET;MURATA                        | 0.22UF        | CAP; SMT (0805); 0.22UF; 10%; 100V; X7R; CERAMIC                                                                         |            |
| 6        | C8                  | 1     | GRM21BR70J106K; C2012X7R0J106K125AB; CGA4J1X7R0J106K125AC | MURATA;TDK;TDK                      | 10UF          | CAP; SMT (0805); 10UF; 10%; 6.3V; X7R; CERAMIC                                                                           |            |
| 7        | C9                  | 1     | C1608X7S2A104K080AB                                       | TDK                                 | 0.1UF         | CAP; SMT (0603); 0.1UF; 10%; 100V; X7S; CERAMIC                                                                          |            |
| 8        | D1                  | 1     | SML-P11UTT86                                              | ROHM                                | SML-P11UTT86  | DIODE; LED; SMT; PIV=1.8V; IF=0.02A                                                                                      |            |
| 9        | J1                  | 1     | 1727010                                                   | PHOENIX CONTACT                     | 1727010       | CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; RIGHT ANGLE; 2PINS                                                |            |
| 10       | J2, J3, J9-J16      | 10    | PCC02SAAN                                                 | SULLINS                             | PCC02SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                 |            |
| 11       | J4, J5              | 2     | 90120-0128                                                | MOLEX                               | 90120-0128    | CONNECTOR; THROUGH HOLE; C-GRID III SINGLE ROW STRAIGHT PIN HEADER; STRAIGHT THROUGH; 8PINS                              |            |
| 12       | J6                  | 1     | OSTVN04A150                                               | ON-SHORE TECHNOLOGY INC             | OSTVN04A150   | CONNECTOR; TERMINAL BLOCK; FEMALE; THROUGH HOLE; STRAIGHT; 4PINS                                                         |            |
| 13       | J7                  | 1     | PBC04SAAN                                                 | SULLINS ELECTRONICS CORP.           | PBC04SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS; -65 DEGC TO +125 DEGC                                         |            |
| 14       | J17, J18            | 2     | PBC03SAAN                                                 | SULLINS                             | PBC03SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                                         |            |
| 15       | R1                  | 1     | CRCW04021K40FK; RC0402FR-071K4L                           | VISHAY DALE;YAGEO PHICOMP           | 1.4K          | RES; SMT (0402); 1.4K; 1%; +/-100PPM/DEGC; 0.0630W                                                                       |            |
| 16       | R2                  | 1     | ERJ-2RKF1502                                              | PANASONIC                           | 15K           | RES; SMT (0402); 15K; 1%; +/-100PPM/DEGC; 0.1000W                                                                        |            |
| 17       | R3-R6               | 4     | ERA-2AEB203                                               | PANASONIC                           | 20K           | RES; SMT (0402); 20K; 0.10%; +/-25PPM/DEGC; 0.0630W                                                                      |            |
| 18       | R7, R8              | 2     | CRCW04023K00FK                                            | VISHAY DALE                         | 3K            | RES; SMT (0402); 3K; 1%; +/-100PPM/DEGC; 0.0630W                                                                         |            |
| 19       | R9                  | 1     | 3386P-1-204TLF                                            | BOURNS                              | 200K          | RES; THROUGH HOLE-RADIAL LEAD; 200K; 10%; +/-100PPM/DEGC; 0.5W                                                           |            |
| 20       | R10, R11            | 2     | CRCW04021K00FK; RC0402FR-071KL; MCR01MZPF1001             | VISHAY DALE;YAGEO PHICOMP;ROHM SEMI | 1K            | RES; SMT (0402); 1K; 1%; +/-100PPM/DEGC; 0.0630W                                                                         |            |
| 21       | SPACER1-SPACER4     | 4     |                                                           | 9032 KEYSTONE                       | 9032          | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                |            |
| 22       | TP1, TP3            | 2     |                                                           | 5010 KEYSTONE                       | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                    | RED        |
| 23       | TP2, TP4, TP11      | 3     |                                                           | 5011 KEYSTONE                       | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  | BLK        |
| 24       | TP5-TP10, TP12-TP16 | 11    |                                                           | 5014 KEYSTONE                       | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; | YEL        |
| 25       | U1                  | 1     | MAX22203                                                  | MAXIM                               | MAX22203      | IC; MAX22203; PACKAGE OUTLINE DRAWING: 21-0172; LAND PATTERN: 90-0076; PACKAGE CODE: T3857+1; TQFN38-EP                  |            |
| 26       |                     |       | MAX6765TTSD2+                                             | MAXIM                               |               | IC; VREG; AUTOMOTIVE MICROPOWER LINEAR REGULATOR WITH SUPERVISOR;                                                        |            |
|          | U2                  | 1     |                                                           |                                     | MAX6765TTSD2+ | TDFN6-EP                                                                                                                 |            |
| 27       | PCB                 | 1     | MAX22203 N/A                                              | MAXIM                               | PCB           | PCB:MAX22203                                                                                                             | -          |
| 28 TOTAL | R12, R13            | 0 61  |                                                           | N/A                                 | OPEN          | RESISTOR; 0603; OPEN; FORMFACTOR                                                                                         |            |

Evaluates: MAX22203

## MAX22203 EV Kit Schematic

<!-- image -->

## MAX22203 EV Kit PCB Layouts

MAX22203 EV Kit -Silkscreen Top Layer

<!-- image -->

MAX22203 EV Kit -Top Layer

<!-- image -->

│

## MAX22203 EV Kit PCB Layouts (continued)

MAX22203 EV Kit -Layer 2

<!-- image -->

MAX22203 EV Kit -Layer 3

<!-- image -->

│

## MAX22203 EV Kit PCB Layouts (continued)

MAX22203 EV Kit -Bottom Layer

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/21            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX22203