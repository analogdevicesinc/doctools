<!-- lastmod 2024-03-29 -->
<!-- image -->

Evaluates: MAX22212

## General Description

The MAX22212 evaluation kit  (EV  kit)  provides  a  proven  design  to  evaluate  the  +36V,  7.6A  single  H-bridge MAX22212 motor driver. The MAX22212 drives a single brushed DC motor. The MAX22212 IC integrates very low impedance FETs in a single H-bridge configuration with a typical R ON (high-side + low-side) of 0.125Ω. The EV kit  features  headers,  test  points,  and  terminal  blocks  to provide an interface to the MAX22212 motor driver. The MAX22212's integrated current sense output ISENA and ISENB can be monitored using test points or connected to  an  external  ADC  using  header  J4.  The  MAX22212 features  embedded  current  drive  regulation  (CDR)  with adjustable chopping current (IFS) and adjustable current limit off time (t OFF). The MAX22212 EV kit operates from an  input  voltage  of  +4.5V  to  +36V  (V M ).  An  on-board +3.3V regulator U2 (MAX6765TTSD2+) provides a regulated +3.3V to drive the MAX22212 logic inputs. Terminal blocks J1 and J5 are installed to provide an interface for the high voltage, high current V M  inputs, and motor driver outputs OUT1\_ and OUT2\_.

## MAX22212 EV Kit Board Photo

<!-- image -->

©

## MAX22212 Evaluation Kit

## Features

- Easy Evaluation of the MAX22212
- Adjustable t OFF  Time Using On-Board Potentiometer
- Configurable Current Drive Regulation (CDR)
- On-Board +3.3V Regulator to Drive the MAX22212 Logic Inputs
- Test Points and Headers to Interface with the MAX22212 Logic Inputs and Current Sense Outputs
- Fully Assembled and Tested
- Proven PCB Layout

Ordering Information appears at end of data sheet.

319-101044; Rev 0; 2/24

## Quick Start

## Required Equipment

- MAX22212 EV kit
- +36V DC, 3.8A power supply
- 100kHz square-wave generator (optional)
- Brushed DC motor or load

## Procedure

The EV kit is fully assembled and tested. Use the following steps to verify board operation:

- 1) As with all motor drive applications, stopping or braking the motor can cause a back EMF (BEMF) current and voltage spike. At high supply voltages (+36V), this can cause the supply to rise above the absolute maximum allowable voltage to the supply pins of a motor drive IC. It is highly recommended that the power supply be clamped appropriately to avoid damage to the motor driver IC.
- 2) Verify that shunts are installed in the default position.
- 3) Connect a +36V supply to the V M  and adjust the V M voltage to the desired operating voltage.
- 4) Adjust the I TRIP  chopping current according to the position of shunt on header J2 to accommodate the load requirement.
- 5) Adjust the t OFF  time using potentiometer R9 if this is being observed.

## Detailed Description of Hardware

## Enable Controls

The MAX22212 enable pin EN is controlled by installing a shunt across pins 1-2 on header J3.

## On-Board +3.3V Control

The  MAX22212  features  an  on-board  +3.3V  LDO  that operates  from  +4.5V  to  +36V.  The  input  voltage  to  the LDO is supplied by the V M  voltage. To use the on-board LDO,  install  a  shunt  in  position  2-3  of  header  J18. An external  +3.3V  supply  can  be  used,  which  can  be  connected  across  test  point  3V3\_EXT  and  any  GND  test point. In this case, a shunt should be installed in positions 1-2 of header J18.

## PWM Controls

The MAX22212 H-bridge can be individually PWM controlled by three logic inputs (DIN1, DIN2, and EN) using pins 2, 4, and 5 of header J3 or applied to the EN, DIN1, and DIN2 test points. Table 1 describes the behavior of the  full  H-bridge  output  pins  OUT1\_  and  OUT2\_  with respect  to  the  input  signals  EN,  DIN1,  and  DIN2.  The MAX22212's outputs OUT1A and OUT1B are connected on  the  board  and  routed  as  a  single  trace  (OUT1\_)  to the  J5  output  terminal  block.  Similarly,  the  MAX22212's outputs OUT2A and OUT2B are connected on the board and routed as a single output (OUT2\_) to the J5 output terminal block. PWM techniques can be used to control the output duty cycle and implement motor speed control.

- 6) Apply a PWM signal to the DIN1/DIN2 inputs as desired to drive the load. For example, a +3.3V to 0V, 20kHz PWM signal with a 20% duty cycle can be used to drive a 24V brushed DC motor connected to output A. To drive it in the forward direction, DIN1 would be driven to logic LOW (GND), and the PWM signal would be applied to DIN2.

## Current Regulation Controls

The  MAX22212  features  embedded  current  drive  regulation  (CDR).  The  bridge  current  is  sensed  by  a  nondissipative  integrated  current  sensing  circuit  (ICS),  and it  is  then  compared  with  the  threshold  current  (IFS). As soon  as  the  bridge  current  exceeds  the  threshold,  the device  enforces  the  decay  for  a  fixed  OFF-time  (t OFF ).

## Table 1. Full-Bridge EN\_, DIN1\_, DIN2\_, Truth Table

|   EN | DIN1   | DIN2_   | OUT1_   | OUT2_   | DESCRIPTION                                |
|------|--------|---------|---------|---------|--------------------------------------------|
|    0 | X      | X       | High-Z  | High-Z  | H-bridge disabled. High impedance (High-Z) |
|    1 | 0      | 0       | L       | L       | Brake Low; Slow decay                      |
|    1 | 1      | 0       | H       | L       | Reverse (Current from OUT1_ to OUT2_)      |
|    1 | 0      | 1       | L       | H       | Forward (Current from OUT2_ to OUT1_)      |
|    1 | 1      | 1       | H       | H       | Brake High; Slow decay                     |

│

## MAX22212 Evaluation Kit

Once t OFF  has elapsed, the driver is re-enabled for the next PWM cycle. t OFF  can be adjusted by connecting a resistor from the ROFF pin to GND. Potentiometer R9 and resistor  R2  can  be  used  to  adjust  the  ROFF  resistance from 15kΩ to 215kΩ and hence the t OFF time. The following equation shows the relationship between t OFF  and RROFF:

<!-- formula-not-decoded -->

Where K TOFF = 0.667µs/kΩ. t OFF can be programmed in a range from 10µs to 80µs.

The chopping current threshold (IFS) can be configured by connecting a resistor between the REF pin and GND. The MAX22212 EV kit has two 20kΩ resistors installed in series from the REF pin (R3 and R5) to GND. A shunt can be installed on header J2 to short one of the 20kΩ

Table 2. IFS Chopping Current Control

| HEADER                                                    | SHUNT POSITION   | R REF VALUE   | OUTPUT CHOPPING CURRENT I TRIP (A)   |
|-----------------------------------------------------------|------------------|---------------|--------------------------------------|
| J2 (HFS = 0, no shunt across                              | Not Installed    | 40kΩ          | Output chopping current set to 1.8A  |
| pins 19 and 20 of J3)                                     | 1-2              | 20kΩ          | Output chopping current set to 3.6A  |
| J2 (HFS = 1, shunt installed across pins 19 and 20 of J3) | Not Installed    | 40kΩ          | Output chopping current set to 0.92A |
| J2 (HFS = 1, shunt installed across pins 19 and 20 of J3) | 1-2              | 20kΩ          | Output chopping current set to 1.84A |

## Table 3. IFS Chopping Current Control Scaling Using ISET\_

|   ISET4 |   ISET3 |   ISET2 |   ISET1 |   OUTPUT CHOPPING CURRENT (% OF I FS ) |
|---------|---------|---------|---------|----------------------------------------|
|       0 |       0 |       0 |       0 |                                  100   |
|       0 |       0 |       0 |       1 |                                   99.2 |
|       0 |       0 |       1 |       0 |                                   97.7 |
|       0 |       0 |       1 |       1 |                                   95.3 |
|       0 |       1 |       0 |       0 |                                   91.4 |
|       0 |       1 |       0 |       1 |                                   86.7 |
|       0 |       1 |       1 |       0 |                                   81.3 |
|       0 |       1 |       1 |       1 |                                   74.2 |
|       1 |       0 |       0 |       0 |                                   67.2 |
|       1 |       0 |       0 |       1 |                                   58.6 |
|       1 |       0 |       1 |       0 |                                   50   |
|       1 |       0 |       1 |       1 |                                   40.6 |
|       1 |       1 |       0 |       0 |                                   31.3 |
|       1 |       1 |       0 |       1 |                                   21.1 |
|       1 |       1 |       1 |       0 |                                   10.2 |
|       1 |       1 |       1 |       1 |                                    0   |

│

series  resistors  to  reduce  the  resistance  from  the  REF pin to GND from 40kΩ to 20kΩ. The following equation describes the relationship between I FS  and R REF , where KIFS  = 72KV if HFS = logic low and 36.8KV if HFS = logic high.

<!-- formula-not-decoded -->

Using header J2 and pins 19 and 20 of header J3 (HFS input), the I FS  current for the H-bridge can be configured from 0.92A or 3.6A.

Other I FS  current levels can be obtained using the ISET1ISET4 pins to scale the I FS  current. Table 2 and Table 3 describe the relationship between I FS  and header J2 and header J3, pins 19-20 shunt positions.

## Current Sense Output (CSO)

Currents proportional to the internally sensed motor current are output to pins ISENA and ISENB for the H-bridge A  and  B,  respectively.  The  current  is  sensed  when  one of the two low-side FETs sinks the output current, and it is, therefore, meaningful both during the energizing (t ON ) phase and during the slow decay phase (Brake). During the  blanking  time,  the  ISEN  current  is  held  constant.  In fast decay, the current is not monitored and ISEN outputs a zero current. The following equation shows the relationship  between  the  current  sourced  at  ISEN  =  ISENA  + ISENB and the motor current, where ISENA and ISENB are shorted together on the board and then tied to GND with a precision 3kΩ resistor.

<!-- formula-not-decoded -->

KISEN  represents the current scaling factor between the output current and its replica at pin ISEN. KISEN is typically 7.5 KA/A when HFS = 0.

The  MAX22212's  ISENA  and  ISENB  outputs  are  first shorted  together  on  the  board  and  then  connected  to GND through  a  3kΩ  resistor  to  report  the  total  sensed load current on the low-side FETs.

## Table 4. Decay Modes

|   DECAY HEADER DECAY2 |   DECAY HEADER DECAY1 | DECAY MODE              |
|-----------------------|-----------------------|-------------------------|
|                     0 |                     0 | Slow                    |
|                     0 |                     1 | Mixed 30% Fast/70% Slow |
|                     1 |                     0 | Mixed 60% Fast/40% Slow |
|                     1 |                     1 | Fast                    |

│

## CDR Open-Drain Outputs

The  CDR  pin  is  an  active-low  open-drain  output  which is  asserted  during  the  fixed  decay  time  interval  (t OFF ) enforced  by  the  current-drive  regulation  loop.  In  this way, the external controller can monitor whether the integrated current loop has taken control of the driver, which overwrites the status of the PWM logic inputs (DIN1 and DIN2). The CDR signal can be used by the external controller  for  a  variety  of  reasons  and  provides  information about the actual load during current regulation. The CDR pin on the MAX22212 EV kit has a 1kΩ pullup to +3.3V installed. The CDR pin can be monitored either using the CDR test point or pin 3 of header J4.

## Decay Mode Controls

Two logic input pins allow the user to set the decay mode during  t OFF .  The  MAX22212  supports  slow,  fast,  and mixed-decay mode. The decay mode can be controlled by driving the DECAY2 and DECAY1 pins to GND or +3.3V. Table  4  describes  the  decay  mode  truth  table  and  the behavior of the DECAY\_ inputs, which can be configured using pins 7-8 and 9-10 of header J3 of the MAX22212 EV kit.

## Fault Reporting

The  MAX22212  reports  overcurrent  and  undervoltage faults by asserting (driving to GND) the FAULT pin. The MAX22212 EV kit pulls  the FAULT pin  to  +3.3V  via  an on-board LED (D1) and 1.4k resistor. LED D1 will be illuminated during fault conditions, and the user should refer to the IC data sheet for the overcurrent protection (OCP) and  undervoltage-lockout  protection  (UVLO)  conditions and thresholds.

## Default Header Positions

Table 5 describes the default position of the headers to operate the MAX22212 EV kit as described in the Quick Start procedure section.

## Table 5. Default Header Positions

| HEADER                 | SHUNT POSITION       | DESCRIPTION                                                     |
|------------------------|----------------------|-----------------------------------------------------------------|
| J2 (HFS = logic low) * | Not Installed        | Output chopping current set to 1.8A                             |
| J2 (HFS = logic low) * | 1-2*                 | Output chopping current set to 3.6A                             |
| J2 (HFS = logic high)  | Not Installed        | Output chopping current set to 0.92A                            |
| J2 (HFS = logic high)  | 1-2*                 | Output chopping current set to 1.84A                            |
| J3                     | 1-2 Not Installed*   | Outputs disabled                                                |
| J3                     | 1-2                  | Outputs enabled                                                 |
| J3                     | 3-4 Not Installed*   | DIN1 pulled low via internal pulldown resistors                 |
| J3                     | 3-4                  | DIN1 connected to +3.3V                                         |
| J3                     | 5-6 Not Installed*   | DIN2 pulled low via internal pulldown resistors                 |
| J3                     | 5-6                  | DIN2 connected to +3.3V                                         |
| J3                     | 7-8 Not Installed*   | DECAY1 pulled low via internal pulldown resistors               |
| J3                     | 7-8                  | DECAY1 connected to +3.3V                                       |
| J3                     | 9-10 Not Installed*  | DECAY2 pulled low via internal pulldown resistors               |
| J3                     | 9-10                 | DECAY2 connected to +3.3V                                       |
| J3                     | 11-12 Not Installed* | ISET1 pulled low via internal pulldown resistors                |
| J3                     | 11-12                | ISET1 connected to +3.3V                                        |
| J3                     | 13-14 Not Installed* | ISET2 pulled low via internal pulldown resistors                |
| J3                     | 13-14                | ISET2 connected to +3.3V                                        |
| J3                     | 15-16 Not Installed* | ISET3 pulled low via internal pulldown resistors                |
| J3                     | 15-16                | ISET3 connected to +3.3V                                        |
| J3                     | 17-18 Not Installed* | ISET4 pulled low via internal pulldown resistors                |
| J3                     | 17-18                | ISET4 connected to +3.3V                                        |
| J3                     | 19-20 Not Installed* | HFS pulled low via internal pulldown resistors                  |
| J3                     | 19-20                | HFS connected to +3.3V                                          |
| J17                    | 1-2                  | Connects the SLEEP pin to V M to wake the part                  |
| J17                    | 2-3*                 | Connects the SLEEP pin to GND to put the part in low power mode |
| J18                    | 1-2                  | +3.3V supplied externally                                       |
| J18                    | 2-3*                 | +3.3V supplied using on-board LDO                               |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX22212EVKIT# | EV Kit |

#Denotes RoHS compliance.

Evaluates: MAX22212

## MAX22212 EV Kit Bill of Materials

| ITEM   | REF_DES                                                                     |   QTY | MFG PART #                                                | MANUFACTURER                       | VALUE                                                                             | DESCRIPTION                                                                                                                                                                 | COMMENTS          |
|--------|-----------------------------------------------------------------------------|-------|-----------------------------------------------------------|------------------------------------|-----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|
| 1      | 3V3_EXT,VM                                                                  |     2 | 5010 KEYSTONE                                             | 5010 KEYSTONE                      | N/A                                                                               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL;                                                                       | RED               |
| 2      | C1, C3                                                                      |     2 | CL05A105KO5NNN; CC0402KRX5R7BB105                         | SAMSUNG;YAGEO                      | 1UF                                                                               | CAP; SMT (0402); 1UF; 10%; 16V; X5R; CERAMIC                                                                                                                                |                   |
| 3      | C2                                                                          |     1 | CGA3E2X7R2A223K080AA                                      | TDK                                | 0.022UF                                                                           | CAP; SMT (0603); 0.022UF; 10%; 100V; X7R; CERAMIC                                                                                                                           |                   |
| 4      | C4, C5                                                                      |     2 | C3216X7R2A105K160AA; GCH31CR72A105KE01; HMK316B7105KLH    | TDK;MURATA;TAIYO YUDEN             | 1UF                                                                               | CAP; SMT (1206); 1UF; 10%; 100V; X7R; CERAMIC                                                                                                                               |                   |
| 5      | C6                                                                          |     1 | EEE-FK2A470AQ                                             | PANASONIC                          | 47UF                                                                              | CAP; SMT (CASE_H13); 47UF; 20%; 100V; ALUMINUM-ELECTROLYTIC                                                                                                                 |                   |
| 6      | C7                                                                          |     1 | C0805C224K1RAC; GRM21AR72A224KAC5                         | KEMET;MURATA                       | 0.22UF                                                                            | CAP; SMT (0805); 0.22UF; 10%; 100V; X7R; CERAMIC                                                                                                                            |                   |
| 7      | C8                                                                          |     1 | GRM21BR70J106K; C2012X7R0J106K125AB; CGA4J1X7R0J106K125AC | MURATA;TDK;TDK                     | 10UF                                                                              | CAP; SMT (0805); 10UF; 10%; 6.3V; X7R; CERAMIC                                                                                                                              |                   |
| 8      | CDR, DECAY1, DECAY2, DIN1, DIN2, EN, HFS, ISENA, ISENB, ISET1-ISET4, NFAULT |    14 | 5014 KEYSTONE                                             | 5014 KEYSTONE                      | N/A                                                                               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                    | YEL               |
| 9      | D1                                                                          |     1 | SML-311UT                                                 | ROHM                               | SML-311UTT86                                                                      | DIODE; LED; LOWCURRENT; SMT (0603); VF=1.8V; IF=0.02A; -30 DEGC TO +85 DEGC; RED                                                                                            |                   |
| 10     | J1, J5                                                                      |     2 | 1727010 PHOENIX CONTACT                                   | 1727010 PHOENIX CONTACT            | 1727010 CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; RIGHT ANGLE; 2PINS | 1727010 CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; RIGHT ANGLE; 2PINS                                                                                           |                   |
| 11     | J2                                                                          |     1 | PCC02SAAN                                                 | SULLINS                            | PCC02SAAN                                                                         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                                                                    |                   |
| 12     | J3                                                                          |     1 | PEC10DAAN                                                 | SULLINS ELECTRONICS CORP           | PEC10DAAN                                                                         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 20PINS                                                                                                                  |                   |
| 13     | J4                                                                          |     1 | PBC08SAAN                                                 | SULLINS ELECTRONICS CORP.          | PBC08SAAN                                                                         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 8PINS; -65 DEGC TO +125 DEGC                                                                                            |                   |
| 14     | J17, J18                                                                    |     2 | PBC03SAAN                                                 | SULLINS                            | PBC03SAAN                                                                         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                                                                                            |                   |
| 15     | R1                                                                          |     1 | CRCW04021K40FK; RC0402FR-071K4L                           | VISHAY DALE; YAGEO PHICOMP         | 1.4K                                                                              | RES; SMT (0402); 1.4K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                          |                   |
| 16     | R2                                                                          |     1 | ERJ-2RKF1502                                              | PANASONIC                          | 15K                                                                               | RES; SMT (0402); 15K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                           |                   |
| 17     | R3, R5                                                                      |     2 | ERA-2AEB203                                               | PANASONIC                          | 20K                                                                               | RES; SMT (0402); 20K; 0.10%; +/-25PPM/DEGC; 0.0630W                                                                                                                         |                   |
| 18     | R7                                                                          |     1 | CRCW04023K00FK                                            | VISHAY DALE                        | 3K                                                                                | RES; SMT (0402); 3K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                            |                   |
| 19     | R9                                                                          |     1 | 3386P-1-204TLF                                            | BOURNS                             | 200K                                                                              | RES; THROUGH HOLE-RADIAL LEAD; 200K; 10%; +/-100PPM/DEGC; 0.5W                                                                                                              |                   |
| 20     | R10                                                                         |     1 | RC0402FR-071KL; MCR01MZPF1001                             | YAGEO; ROHM SEMICONDUCTOR          | 1K                                                                                | RES; SMT (0402); 1K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                            |                   |
| 21     | R12                                                                         |     1 | TNPW060310K0BE; RN731JTTD1002B                            | VISHAY DALE; KOA SPEER ELECTRONICS | 10K                                                                               | RES; SMT (0603); 10K; 0.10%; +/-25PPM/DEGK; 0.1000W                                                                                                                         |                   |
| 22     | SPACER1-SPACER4                                                             |     4 | 9032 KEYSTONE                                             | 9032 KEYSTONE                      | 9032                                                                              | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                                   |                   |
| 23     | GND, TP2, TP3, TP4                                                          |     4 | 5011                                                      | KEYSTONE                           | N/A                                                                               | TESTPOINT;PINDIA=0.125IN;TOTALLENGTH=0.445IN; BOARDHOLE=0.063IN;BLACK;PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                             | (GND,TP2,TP3:BLK) |
| 24     | U1                                                                          |     1 | MAX22212_TQFN                                             | MAXIM                              | MAX22212_TQFN                                                                     | EVKIT PART - IC; MAX22212; 36V; 7.6A HIGH CURRENT SINGLE H-BRIDGE WITH INTEGRATED CURRENT SENSE; PACKAGE OUTLINE DRAWING: 21-0140; PACKAGE LAND PATTERN: 90-0013; TQFN32-EP |                   |
| 25     | U2                                                                          |     1 | MAX6765TTSD2+                                             | MAXIM                              | MAX6765TTSD2+                                                                     | IC; VREG; AUTOMOTIVE MICROPOWER LINEAR REGULATOR WITH SUPERVISOR; TDFN6-EP                                                                                                  |                   |
| 26     | PCB                                                                         |     1 | MAX22212                                                  | MAXIM                              | PCB                                                                               | PCB:MAX22212                                                                                                                                                                | -                 |
| TOTAL  |                                                                             |    51 |                                                           |                                    |                                                                                   |                                                                                                                                                                             |                   |

Evaluates: MAX22212

## MAX22212 Evaluation Kit

## MAX22212 EV Kit Schematic Diagram

<!-- image -->

│

## Evaluates: MAX22212

## MAX22212 EV Kit Schematic Diagram (continued)

<!-- image -->

Evaluates: MAX22212

## MAX22212 Evaluation Kit

## MAX22212 EV Kit PCB Layouts

MAX22212 EV Kit-Component Placement Guide-Top Silkscreen

<!-- image -->

MAX22212 EV Kit PCB Layout-Silkscreen Top Layer

<!-- image -->

MAX22212 EV Kit PCB Layout-Internal 2

<!-- image -->

│

## MAX22212 Evaluation Kit

## MAX22212 EV Kit PCB Layouts (continued)

MAX22212 EV Kit PCB Layout-Internal 3

<!-- image -->

MAX22212 EV Kit PCB Layout-Bottom

<!-- image -->

MAX22212 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/24            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│