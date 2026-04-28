<!-- lastmod 2023-10-18 -->
<!-- image -->

Evaluates: MAX22208

## General Description

The MAX22208 evaluation kit (EV kit) provides a proven design  to  evaluate  the  +65V,  3.8A  quad  half  H-bridge MAX22208 motor drivers. The MAX22208 can drive four solenoids,  two  brushed  DC  motors,  one  single  stepper motor, or a combination of different loads. The MAX22208 IC integrates very low impedance FETs in a quad H-bridge configuration with a typical RON (high side plus low side) of  0.3Ω.  The  EV  kit  features  headers,  test  points,  and terminal blocks to provide an interface to the MAX22208 motor  drivers.  The  MAX22208  integrated  current-sense output  ISEN\_  can  be  monitored  using  test  points  or can be connected to an external ADC using header J5. The  MAX22208  EV  kit  operates  from  an  input  voltage of +4.5V to +65V (V M ). An on-board +3.3V regulator U2 (MAX6765TTSD2+) provides a regulated +3.3V to drive the MAX22208 logic inputs. Terminal blocks J1 and J6 are installed to provide an interface for the high voltage, high current V M inputs and motor driver outputs OUT\_.

## MAX22208 EV Kit Board

<!-- image -->

319-101016; Rev 0; 8/23

## MAX22208 Evaluation Kit

## Features

- Easy Evaluation of the MAX22208
- On-Board +3.3V Regulator to Drive the MAX22208 Logic Inputs
- Test Points and Headers to Interface with the MAX22208 Logic Inputs and Current-Sense Outputs
- Fully Assembled and Tested
- Proven PCB Layout

Ordering Information appears at end of data sheet.

## MAX22208 Evaluation Kit

## Quick Start

## Required Equipment

- MAX22208 EV kit
- +65V DC, 3.8A power supply
- 100kHz square-wave generator (optional)
- Brushed DC motor or load

## Quick Start Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

- 1) As with all motor drive applications, stopping or braking the motor can cause a back EMF (BEMF) current and voltage spike. At high supply voltages (+65V), this can cause the supply to rise above the absolute maximum allowable voltage to the supply pins of a motor-drive IC. It is highly recommended that the power supply be clamped appropriately to avoid damage to the motor-driver IC.
- 2) Verify that shunts are installed in the default position.
- 3) Connect a +65V supply to V M  and adjust the V M voltage to the desired operating voltage.
- 4) Apply a PWM signal to the DIN\_ inputs as desired to drive the load. For example, a +3.3V to 0V, 20kHz PWM signal with a 20% duty cycle can be used to drive a 24V or 48V brushed DC motor connected to outputs 1 and 2. To drive load with current flowing from OUT2 to OUT1, DIN1 is driven to logic low (GND) and the PWM signal is applied to DIN2.

## Detailed Description of Hardware

## Enable Controls

The MAX22208 enable pins (EN1-EN4) are controlled by installing shunts on headers J9 to J12 or the pins can be connected to a microcontroller using header J4.

## Table 1. MAX22208 Truth Table

|   EN_ | DIN_   | OUT_           | DESCRIPTION              |
|-------|--------|----------------|--------------------------|
|     0 | X      | High impedance | Half H-bridge disabled.  |
|     1 | 0      | Low            | Low-side FET is driven.  |
|     1 | 1      | High           | High-side FET is driven. |

│

## On-Board +3.3V Control

The  MAX22208  features  an  on-board  +3.3V  LDO  that operates  from  +4.5V  to  +65V.  The  input  voltage  to  the LDO is supplied by the V M voltage. To  provide  3.3V  to the MAX22208 logic pins from the LDO, install a shunt in position 2-3 of header J2. An external +3.3V supply can be used, which can be connected to TP3, and in this case, a shunt should be installed in position 1-2 of header J2.

## PWM Controls

Each MAX22208 half H-bridge can be controlled by two logic  inputs  (DIN\_  and  EN\_).  The  logic  input  DIN\_  can be  applied  to  either  headers  J4  or  J13  to  J16,  or  test points TP5 to TP8. Table 1 describes the behavior of the half H-bridge output pins OUT\_ with respect to the input signals EN\_ and DIN\_. PWM techniques can be used to control the output duty cycle and implement motor-speed control.

## Current-Sense Output (ISEN\_) - Current Monitor

Currents proportional to the internally sensed motor current are output to the ISEN\_ pins for each OUT\_ pin. The current  is  sensed  when  one  of  the  four  low-side  FETs sinks  the  output  current,  and  it  is  therefore  meaningful when  the  low-side  FET  is  on.  The  following  equation shows  the  relationship  between  the  current  sourced  at ISEN\_ and the output current:

<!-- formula-not-decoded -->

K ISEN represents  the  current  scaling  factor  between  the output  current  and  its  replica  at  the  ISEN\_  pin.  K ISEN is typically 7500A/A. For instance, if the instantaneous output current is 1.8A, the current sourced at ISEN\_ is 240μA. By connecting  an  external  signal  resistor  (R ISEN )  between ISEN\_ and GND, a voltage proportional to the motor current is generated. The EV kit is shipped with 3kΩ resistors (R4 to R7) installed from ISEN\_ to GND.

## Default Header Position

The following table describes the default position of the headers to operate the MAX22208 EV kit as described in the Quick Start Procedure section.

## Table 2. Default Header Position

| HEADER   | SHUNT POSITION   | DESCRIPTION                                            |
|----------|------------------|--------------------------------------------------------|
| J2       | 1-2              | Use external +3.3V supply                              |
| J2       | 2-3*             | Use on-board +3.3V regulator                           |
| J3       | Not installed    | Disable 3.3V voltage regulator                         |
| J3       | 1-2*             | Enable 3.3V voltage regulator                          |
| J8       | 1-2*             | Drive SLEEP high to keep the part in wake status       |
| J8       | 2-3              | Drive SLEEP low to enter lowest power-consumption mode |
| J9       | Not installed    | OUT1 disabled                                          |
| J9       | 1-2*             | Drive EN1 high to enable OUT1                          |
| J10      | Not installed    | OUT2 disabled                                          |
| J10      | 1-2*             | Drive EN2 high to enable OUT2                          |
| J11      | Not installed    | OUT3 disabled                                          |
| J11      | 1-2*             | Drive EN3 high to enable OUT3                          |
| J12      | Not installed    | OUT4 disabled                                          |
| J12      | 1-2*             | Drive EN4 high to enable OUT4                          |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX22208EVKIT# | EV Kit |

# Denotes RoHS compliance.

Evaluates: MAX22208

## MAX22208 EV Kit Bill of Materials

| ITEM     | REF_DES         | QTY      | MFG PART #                                                | MANUFACTURER              | VALUE         | DESCRIPTION                                                                                                                                                                   | COMMENTS   |          |
|----------|-----------------|----------|-----------------------------------------------------------|---------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|----------|
| 1        | C1              | 1        | GRM155R61C225KE44; GRM155R61C225KE11                      | MURATA;MURATA             | 2.2UF         | CAP; SMT (0402); 2.2UF; 10%; 16V; X5R; CERAMIC                                                                                                                                |            |          |
| 2        | C2              | 1        | CL05A105KO5NNN                                            | SAMSUNG                   | 1UF           | CAP; SMT (0402); 1UF; 10%; 16V; X5R; CERAMIC                                                                                                                                  |            |          |
| 3        | C3              | 1        | CGA3E2X7R2A223K080AA                                      | TDK                       | 0.022UF       | CAP; SMT (0603); 0.022UF; 10%; 100V; X7R; CERAMIC                                                                                                                             |            |          |
| 4        | C4-C6           | 3        | C3216X7R2A105K160AA; GCH31CR72A105KE01; HMK316B7105KLH    | TDK;MURATA;TAIYO YUDEN    | 1UF           | CAP; SMT (1206); 1UF; 10%; 100V; X7R; CERAMIC                                                                                                                                 |            |          |
| 5        | C7              | 1        | C0805C224K1RAC; GRM21AR72A224KAC5                         | KEMET;MURATA              | 0.22UF        | CAP; SMT (0805); 0.22UF; 10%; 100V; X7R; CERAMIC                                                                                                                              |            |          |
| 6        | C8              | 1        | GRM21BR70J106K; C2012X7R0J106K125AB; CGA4J1X7R0J106K125AC | MURATA;TDK;TDK            | 10UF          | CAP; SMT (0805); 10UF; 10%; 6.3V; X7R; CERAMIC                                                                                                                                |            |          |
| 7        | C9              | 1        | EEE-FK2A470AQ                                             | PANASONIC                 | 47UF          | CAP; SMT (CASE_H13); 47UF; 20%; 100V; ALUMINUM- ELECTROLYTIC                                                                                                                  |            |          |
| 8        | D1              | 1        | SML-P11UTT86R                                             | ROHM SEMICONDUCTOR        | SML-P11UTT86R | DIODE; LED; RED CLEAR; PICOLED; SMT; VF=1.8V; IF=0.001A                                                                                                                       |            |          |
| 9        | J1              | 1        | 1727010                                                   | PHOENIX CONTACT           | 1727010       | CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; RIGHT ANGLE; 2PINS                                                                                                     |            |          |
| 10       | J2, J8          | 2        | PBC03SAAN                                                 | SULLINS                   | PBC03SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                                                                                              |            |          |
| 11       | J3, J9-J16      | 9        | PCC02SAAN                                                 | SULLINS                   | PCC02SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                                                                      |            |          |
| 12       | J4, J5          | 2        | 90120-0128                                                | MOLEX                     | 90120-0128    | CONNECTOR; THROUGH HOLE; C-GRID III SINGLE ROW STRAIGHT PIN HEADER; STRAIGHT THROUGH; 8PINS                                                                                   |            |          |
| 13       | J6              | 1        | OSTVN04A150                                               | ON-SHORE TECHNOLOGY INC   | OSTVN04A150   | CONNECTOR; TERMINAL BLOCK; FEMALE; THROUGH HOLE; STRAIGHT; 4PINS                                                                                                              |            |          |
| 14       | J7              | 1        | PBC04SAAN                                                 | SULLINS ELECTRONICS CORP. | PBC04SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS; -65 DEGC TO +125 DEGC                                                                                              |            |          |
| 15       | R1              | 1        | CRCW04021K40FK; RC0402FR-071K4L                           | VISHAY DALE;YAGEO PHICOMP | 1.4K          | RES; SMT (0402); 1.4K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                            |            |          |
| 16       | R4-R7           | 4        | CRCW04023K00FK                                            | VISHAY DALE               | 3K            | RES; SMT (0402); 3K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                              |            |          |
| 17       | SPACER1-SPACER4 | 4        | 9032                                                      | KEYSTONE                  | 9032          | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                                     |            |          |
| 18       | TP1, TP3        | 2        | 5010                                                      | KEYSTONE                  | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                                         | RED        |          |
| 19       | TP2, TP4        | 2        | 5011                                                      | KEYSTONE                  | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                       | BLK        |          |
| 20       | TP5-TP13        | 9        | 5014                                                      | KEYSTONE                  | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                      |            |          |
| 21       | U1              | 1        | MAX22208                                                  | ANALOG DEVICES            | MAX22208      | EVKIT PART; IC; MAX22208; 65V 3.8A QUAD HALF H- BRIDGE WITH INTEGRATED CURRENT-SENSE; PACKAGE OUTLINE DRAWING 21-0172; LAND PATTERN DRAWING: 90- 0076; PACKAGE CODE: T3857-1C |            |          |
| 22       | U2              | 1        | MAX6765TTSD2+                                             | ANALOG DEVICES            | MAX6765TTSD2+ | IC; VREG; AUTOMOTIVE MICROPOWER LINEAR REGULATOR WITH SUPERVISOR; TDFN6-EP                                                                                                    |            |          |
| 23       | PCB             | 1        | MAX22208                                                  | ANALOG DEVICES            | PCB           | PCB:MAX22208                                                                                                                                                                  | -          |          |
| 24       | R2, R3          | 0        | N/A                                                       | N/A                       | OPEN          | RESISTOR; 0603; OPEN; FORMFACTOR                                                                                                                                              |            |          |
| TOTAL 51 | TOTAL 51        | TOTAL 51 | TOTAL 51                                                  | TOTAL 51                  | TOTAL 51      | TOTAL 51                                                                                                                                                                      | TOTAL 51   | TOTAL 51 |

Evaluates: MAX22208

## MAX22208 Evaluation Kit

## MAX22208 EV Kit Schematic

<!-- image -->

Evaluates: MAX22208

## MAX22208 EV Kit PCB Layouts

MAX22208 EV Kit -Silkscreen Top Layer

<!-- image -->

MAX22208 EV Kit -Top Layer

<!-- image -->

│

## MAX22208 EV Kit PCB Layouts (continued)

MAX22208 EV Kit -Layer 2

<!-- image -->

MAX22208 EV Kit -Layer 3

<!-- image -->

│

## MAX22208 EV Kit PCB Layouts (continued)

MAX22208 EV Kit -Bottom Layer

<!-- image -->

MAX22208 EV Kit -Silkscreen Bottom Layer

<!-- image -->

Evaluates: MAX22208

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 8/23            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX22208