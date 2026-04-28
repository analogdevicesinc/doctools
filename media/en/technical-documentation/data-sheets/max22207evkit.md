<!-- lastmod 2023-06-08 -->
<!-- image -->

Evaluates: MAX22207

## General Description

The MAX22207 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX22207  brushed  DC  motor driver. The MAX22207 IC integrates very low-impedance FETs  in  a  full  bridge  configuration  for  use  in  36V,  3.5A motor  driver  applications.  The  typical  R ON   (high-side  + low-side) of this configuration is 0.3Ω. The EV kit features headers,  test  points,  and  terminal  blocks  to  provide  an interface to the MAX22207 motor driver PWM inputs, current sense outputs, and power supply inputs and motor driver  outputs.  An  on-board  ICM7556  provides  an  onboard PWM generator with a fixed frequency of 16.5kHz and an adjustable duty cycle from 4% to 95%. The EV kit also allows the user to adjust the integrated current limit using an on-board potentiometer.

## MAX22207 EV Kit Board

Figure 1. MAX22207 EV Kit Board

<!-- image -->

## MAX22207 Evaluation Kit

## Features

- Easy Evaluation of the MAX22207
- Configurable for External PWM or Adjustable On-Board PWM Input
- Configurable R ILIM  Resistor to Adjust Integrated Current Limit Threshold
- Current Drive Regulation (CDR) Monitor Output to Indicate CDR is Activated
- Fully Assembled and Tested
- Proven PCB Layout

Ordering Information appears at end of data sheet.

319-100995; Rev 0; 5/23

One  Analog  Way,  Wilmington,  MA  0187  U.S.A.    |      Tel: 781.329.4700 | © 2023  Analog  Devices,  Inc.  All  rights  reserved. ©  2023 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

## Quick Start

## Required Equipment

- MAX22207 EV kit
- +36V DC, 5A power supply
- Optional up to 100kHz square wave signal generator
- Brushed DC motor or load

## Procedure

It is recommended that the engineer read the MAX22207 IC data sheet prior to using the EV kit. Refer to the Typical Application  Circuits  and  Detailed  Description  in  the MAX22207 IC data sheet for more information. The EV kit is fully assembled and tested. Use the following steps to verify board operation:

- 1) As with all motor drive applications, stopping or braking the motor can cause a back EMF (BEMF) current and voltage spike. At high supply voltages (+36V), this can cause the supply to rise above the absolute maximum allowable voltage to the supply pins of a motor drive IC. It is highly recommended that the power supply be clamped appropriately to avoid damage to the motor driver IC.
- 2) Verify that all shunts are installed in their default position as described in Table 2.
- 3) Adjust the current limit threshold using potentiometer R4 and read the resistance using test point TP4 and a GND test point.
- 4) If a load or DC motor is being used, connect the load or motor to terminal block J4.
- 5) Connect a +4V to +36V DC power supply to the terminal block J1 or TP13 and TP14 and turn on the supply.
- 6) If the part is started with IN1 and IN2 at a logic-low state, it enters a low-power sleep mode. To power on the device, both inputs IN1 and IN2 must first be driven to a logic-high state for at least 400µs.
- 7) Pin 2 of headers J5 and J9 or TP1 (IN1) and TP2 (IN2) can be used to drive the MAX22207 PWM inputs. To drive IN1 or IN2 high continuously, use shunts on headers J5 and J9. To drive IN1 or IN2 with the on-board PWM signal, use pin 2 of either header J5 or J9 and pin 1 of J6. See the Example Startup Procedure section for an example of a startup sequence and Table 2 for more information.

Evaluates: MAX22207

## Example Startup Procedure

The steps below describe the startup procedure using the on-board PWM signal to drive the MAX22207 inputs.

- 1) Verify that all shunts are installed as described in step 2 of the quick start procedure. This brings the part up in low-power sleep mode.
- 2) Move the shunts to position 1-2 on J5 and J9. This exits low-power sleep mode.
- 3) To drive a motor connected to the output forward in continuous mode, move the shunt on J9 to position 2-3. This drives the DC motor in forward mode with IN1 = logic high and IN2 logic low. Return the shunt on J9 to position 1-2 to enter brake mode.
- 4) To drive a motor connected to the output forward with PWM control, move the shunt on J9 so that it can be installed across pin1 of J6 and pin 2 of J9. This drives the DC motor forward with the on-board PWM signal. The PWM signal duty cycle can be adjusted using R13. Return the shunt on J9 to position 1-2 to enter brake mode.
- 5) To drive a motor connected to the output reverse in continuous mode, move the shunt on J5 to position 2-3. This drives the DC motor in reverse mode with IN1 = logic low and IN2 logic high. Return the shunt on J5 to position 1-2 to enter brake mode.
- 6) To drive a motor connected to the output reverse with PWM control, move the shunt on J5 so that it can be installed across pin1 of J6 and pin 2 of J5. This drives the DC motor in reverse with the onboard PWM signal. The PWM signal duty cycle can be adjusted using R13. Return the shunt on J5 to position 1-2 to enter brake mode.

## Detailed Description of Hardware (or Software)

The  MAX22207  EV  kit  provides  a  proven  layout  and evaluation circuit for the MAX22207 (U1) IC. The EV kit features  a  MAX15006  (U2)  ultra-low  quiescent  current LDO to  provide  +3.3V  from  an  input  voltage  of  +4V  to +36V from the V M   supply  to  power  the  on-board  PWM switching circuitry. On-board PWM switching is achieved using an ICM7556 (U3) dual timer IC and can be routed to either IN1 or IN2 input of the MAX22207.

## MAX22207 Evaluation Kit

## Power Supplies

The  MAX22207  IC  can  be  powered  by  either  applying a +4V to +36V power supply to terminal block J1 or test points TP13 and TP14. The on-board +3.3V MAX15006 LDO  (U3)  and  ICM7556  (U3)  dual  timer  circuits  are sourced from this supply.

## MAX22207 Input Configuration

The  MAX22207's  inputs  (IN1  and  IN2)  can  be  driven either using an external signal applied to IN1 using TP1 and IN2 using TP2, or the user can choose to drive the MAX22207  inputs  using  the  on-board  generated  PWM signal.

Headers J5, J6, and J9 can be configured to either drive one or both MAX22207 inputs with a continuous voltage of +3.3V or GND, or they can be configured to drive one

## Table 1. Full Bridge IN1 and IN2 Truth Table

|   IN1 |   IN2 | OUT1   | OUT2   | DESCRIPTION                                                                    |
|-------|-------|--------|--------|--------------------------------------------------------------------------------|
|     0 |     0 | High-Z | High-Z | Coast; H-bridge disabled to High-Z (sleep mode is entered after 2.2ms typical) |
|     0 |     1 | L      | H      | Reverse (current from OUT2 to OUT1)                                            |
|     1 |     0 | H      | L      | Forward (current from OUT1 to OUT2)                                            |
|     1 |     1 | L      | L      | Brake; slow decay                                                              |

## Table 2. On-Board PWM Configuration Table (Default Configuration)

| HEADER   | SHUNT POSITION       | DESCRIPTION                                               |
|----------|----------------------|-----------------------------------------------------------|
| J5       | 1-2                  | MAX22207 input IN1 connected to +3.3V                     |
| J5       | 2-3*                 | MAX22207 input IN1 connected to GND                       |
| J6       | J6 pin 1 to J5 pin 2 | On-board PWM signal connected to the MAX22207 input IN1   |
| J6       | J6 pin 1 to J5 pin 2 | On-board PWM signal connected to the MAX22207 input IN2   |
| J9       | 1-2                  | MAX22207 input IN2 connected to +3.3V                     |
| J9       | 2-3*                 | MAX22207 input IN2 connected to GND                       |
| J8       | 1-2                  | User customizable PWM frequency with the population of C4 |
| J8       | 2-3*                 | Selects the default PWM frequency of 16.5kHz              |
| J7       | Unpopulated*         | Not used, leave unpopulated                               |

*Default shunt position.

Evaluates: MAX22207

MAX22207  input  to  +3.3V  and  apply  a  PWM  signal  to the other MAX22207 input. The on-board PWM signal is routed to a single pin header J6. Pin 2 of headers J5 and J9 is routed to the MAX22207 inputs IN1 and IN2. Pin 1 on J5 and J9 is connected to +3.3V, and pin 3 on J5 and J9 is connected to GND. Table 1 describes the operation of the MAX22207 outputs based on the MAX22207 input pin states.

Figure 2 and Table 2 describe the configuration of headers  J5,  J6,  and  J9  to  drive  the  MAX22207  inputs  using either  the  on-board  PWM  signal  or  continuously  with +3.3V or GND.  Potentiometer R13 can be used to adjust the  duty  cycle  of  the  on-board  PWM  signal  from  4%  to 95%. Figure 3 and Figure 4 show the duty cycle range of the on-board PWM generated signal.

│

Evaluates: MAX22207

Figure 2. Configuration of the MAX22207 Input Headers J5, J6, and J9

<!-- image -->

Figure 3. PWM Signal Measured at Test Point TP3 With a 4% Duty Cycle

<!-- image -->

Evaluates: MAX22207

Figure 4. PWM Signal Measured at Test Point TP3 with a 95% Duty Cycle

<!-- image -->

## Current Drive Regulation and Current Limiter

The  integrated  current  limit  can  be  adjusted  using  the potentiometer  R4.  The  resistance  connected  from  the MAX22207 ILIM pin to GND can be adjusted from 18kΩ to 115kΩ for a corresponding current limit of 2.7A to 0.43A. If the current limit threshold is reached, the device enters a slow decay cycle by enabling both low-side FETs for a specified off time (t OFF ). The current limit threshold equation is given below, where K ILIM  = 50KV:

<!-- formula-not-decoded -->

## Ordering Information

#Denotes RoHS compliance.

| PART           | TYPE   |
|----------------|--------|
| MAX22207EVKIT# | EV Kit |

## CDROUT Indicator

The  MAX22207  CDROUT  pin  is  asserted  (driven  low) when the internal current regulation is enforced. An onboard LED (D2) and 1.4kΩ resistor (R7) are connected from the CDROUT pin to +3.3V to provide a pull-up bias. When the CDROUT pin is asserted, LED D2 will turn on as an indication.

## MAX22207 EV Kit Bill of Materials

| ITEM   | REF_DES          | DNI/DNP   | QTY   | MFG PART #                                                                           | MANUFACTURER                                 | VALUE         | DESCRIPTION                                                                                                              |
|--------|------------------|-----------|-------|--------------------------------------------------------------------------------------|----------------------------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------|
| 1      | C1               | -         | 1     | UMK107BJ105KA;C1608X5R1H105K080AB; CL10A105KB8NNN;GRM188R61H105KAAL; UMK107ABJ105KAH | TAIYO YUDEN;TDK;SAMSUNG; MURATA;TAIYO YUDEN  | 1UF           | CAP; SMT (0603); 1UF; 10%; 50V; X5R; CERAMIC                                                                             |
| 2      | C2               | -         | 1     | C0402C105K8PAC;CC0402KRX5R6BB105                                                     | KEMET;YAGEO                                  | 1UF           | CAP; SMT (0402); 1UF; 10%; 10V; X5R; CERAMIC                                                                             |
| 3      | C3, C6, C10      | -         | 3     | C1608C0G1H103J080AA; CGA3E2C0G1H103J080AD; GRM1885C1H103JA01                         | TDK;TDK;MURATA                               | 0.01UF        | CAP; SMT (0603); 0.01UF; 5%; 50V; C0G; CERAMIC                                                                           |
| 4      | C5               | -         | 1     | C0603C104J4RAC;X7R0603CTTD104J; GRM188R71C104JA01;0603YC104JAT2A                     | KEMET; KOA SPEER ELECTRONICS INC; MURATA;AVX | 0.1UF         | CAP; SMT (0603); 0.1UF; 5%; 16V; X7R; CERAMIC;                                                                           |
| 5      | C7               | -         | 1     | GRM1885C1E102JA01                                                                    | MURATA                                       | 0.001UF       | CAP; SMT (0603); 0.001UF; 5%; 25V; C0G; CERAMIC                                                                          |
| 6      | C8               | -         | 1     | C1608X5R1H104K080AA                                                                  | TDK                                          | 0.1UF         | CAP; SMT (0603); 0.1UF; 10%; 50V; X5R; CERAMIC                                                                           |
| 7      | C9               | -         | 1     | C1608X5R1E225K;TMK107ABJ225KA; TMK107BJ225KA;GRM188R61E225KA12                       | TDK;TAIYO YUDEN; TAIYO YUDEN;MURATA          | 2.2UF         | CAP; SMT (0603); 2.2UF; 10%; 25V; X5R; CERAMIC                                                                           |
| 8      | C11              | -         | 1     | EEE-FK1H470P                                                                         | PANASONIC                                    | 47UF          | CAP; SMT (CASE_E); 47UF; 20%; 50V; ALUMINUM-ELECTROLYTIC                                                                 |
| 9 10   | C12              | -         | 1     | C0805C104J1RAC;08051C104JAT2A; GCM21BR72A104JA37                                     | KEMET;AVX;MURATA                             | 0.1UF         | CAP; SMT (0805); 0.1UF; 5%; 100V; X7R; CERAMIC                                                                           |
| 11     | D1, D2           | -         | 2     | SML-P11UTT86R                                                                        | ROHM SEMICONDUCTOR                           | SML-P11UTT86R | DIODE; LED; RED CLEAR; PICOLED; SMT; VF=1.8V; IF=0.001A                                                                  |
|        | J1, J4           | -         | 2     | 1727010 PHOENIX CONTACT                                                              | 1727010 PHOENIX CONTACT                      | 1727010       | CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; RIGHT ANGLE; 2PINS                                                |
| 12     | J3               | -         | 1     | PCC02SAAN                                                                            | SULLINS                                      | PCC02SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                 |
| 13     | J5, J7-J9        | -         | 4     | PCC03SAAN                                                                            | SULLINS                                      | PCC03SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                 |
| 14     | J6               | -         | 1     | PEC01SAAN                                                                            | SULLINS ELECTRONICS CORP                     | PEC01SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 1PIN                                                                 |
| 15     | R1, R7           | -         | 2     | CRCW06031K40FK                                                                       | VISHAY DALE                                  | 1.4K          | RES; SMT (0603); 1.4K; 1%; +/-100PPM/DEGC; 0.1000W                                                                       |
| 16     | R2               | -         | 1     | MCT06030E2501B                                                                       | VISHAY DALE                                  | 2.5K          | RES; SMT (0603); 2.5K; 0.10%; +/-15PPM/DEGC; 0.1000W                                                                     |
| 17     | R4               | -         | 1     | 3386P-1-104TLF                                                                       | BOURNS                                       | 100K          | RES; THROUGH HOLE-RADIAL LEAD; 100K; 10%; +/-100PPM/DEGC; 0.5W                                                           |
| 18     | R5, R9           | -         | 2     | TNPW060315K0BE;ERA-3AEB153                                                           | VISHAY DALE;PANASONIC                        | 15K           | RES; SMT (0603); 15K; 0.10%; +/-25PPM/DEGK; 0.1000W                                                                      |
| 19     | R8               | -         | 1     | 3386P-1-204TLF                                                                       | BOURNS                                       | 200K          | RES; THROUGH HOLE-RADIAL LEAD; 200K; 10%;                                                                                |
| 20     | R10              | -         | 1     | CRCW08056K80FK                                                                       | VISHAY DALE                                  | 6.8K          | +/-100PPM/DEGC; 0.5W RES; SMT (0805); 6.8K; 1%; +/-100PPM/DEGC; 0.1250W                                                  |
| 21     | R11              | -         | 1     | CRCW0603187RFK;ERJ-3EKF1870                                                          | VISHAY DALE;PANASONIC                        |               | 187 RES; SMT (0603); 187; 1%; +/-100PPM/DEGC; 0.1000W                                                                    |
| 22     | R12              | -         | 1     | TNPW06031K50BE;ERA-3YEB152V                                                          | VISHAY DALE;PANASONIC                        | 1.5K          | RES; SMT (0603); 1.5K; 0.10%; +/-25PPM/DEGK; 0.1000W RES; THROUGH HOLE-RADIAL LEAD; 50K; 10%;                            |
| 23     | R13              | -         | 1     | 3386P-1-503TLF                                                                       | BOURNS                                       | 50K           | +/-100PPM/DEGC; 0.5W                                                                                                     |
| 24     | R14              | -         | 1     | CRCW06030000Z0                                                                       | VISHAY DALE                                  |               | 0 RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                                                                            |
| 25     | TP1-TP9          | -         | 9     | 5014                                                                                 | KEYSTONE                                     | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 26     | TP10, TP13       | -         | 2     |                                                                                      | 5010 KEYSTONE                                | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                    |
| 27     | TP11, TP12, TP14 | -         | 3     |                                                                                      | 5011 KEYSTONE                                | N/A           | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
| 28     | U1               | -         | 1     | MAX22207ATC+                                                                         | MAXIM                                        | MAX22207ATC+  | IC; DRV; 36V BRUSHED MOTOR DRIVER WITH INTEGRATED CURRENT SENSE; TDFN12-EP                                               |
| 29     | U2               | -         | 1     | MAX15006AATT+                                                                        | MAXIM                                        | MAX15006AATT+ | IC; VREG; ULTRA-LOW QUIESCENT-CURRENT LINEAR REGULATOR; TDFN6-EP 3X3                                                     |
| 30     | U3               | -         | 1     | ICM7556ISD+                                                                          | MAXIM                                        | ICM7556ISD+   | IC; TIMR; GENERAL PURPOSE TIMER; NSOIC14 150MIL                                                                          |
| 31     | PCB              | -         | 1     | MAX22207                                                                             | MAXIM                                        | PCB           | PCB:MAX22207                                                                                                             |
| 32     | C4               | DNP       | 0     | N/A                                                                                  | N/A                                          | OPEN          | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                                 |
| 33     | R3               | DNP       | 0     | N/A                                                                                  | N/A                                          | N/A           | RESISTOR; 0603 PACKAGE; GENERIC                                                                                          |
| 34 35  | R6 R15, R16      | DNP DNP   | 0 0   | TNPW060315K0BE;ERA-3AEB153 CRCW06030000Z0                                            | VISHAY DALE;PANASONIC VISHAY DALE            | 15K           | RES; SMT (0603); 15K; 0.10%; +/-25PPM/DEGK; 0.1000W 0 RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                        |

Evaluates: MAX22207

## MAX22207 Evaluation Kit

## MAX22207 EV Kit Schematic

<!-- image -->

Evaluates: MAX22207

## MAX22207 Evaluation Kit

## MAX22207 EV Kit PCB Layouts

MAX22207 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

Evaluates: MAX22207

MAX22207 EV Kit PCB Layout-Top

<!-- image -->

MAX22207 EV Kit PCB Layout-Internal2

<!-- image -->

│

## MAX22207 EV Kit PCB Layouts (continued)

MAX22207 EV Kit PCB Layout-Internal3

<!-- image -->

Evaluates: MAX22207

MAX22207 EV Kit PCB Layout-Bottom

<!-- image -->

MAX22207 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/23            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX22207