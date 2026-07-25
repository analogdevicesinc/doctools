<!-- lastmod 2022-08-03 -->
## MAX40056 Evaluation Kit

## General Description

The MAX40056 evaluation kit (EV kit) is a fully assembled electrical demonstration kit that provides a proven design to  evaluate  the  MAX40056F/MAX40056T/MAX40056U high-precision,  high-voltage,  bidirectional  current  sense amplifier for PWM applications, such as servo motor con -trol  and  solenoid  drive.  The  MAX40056F/MAX40056T/ MAX40056U are ideal for 48V, or less BLDC, induction motor  applications  (such  as  robotics),  pick-and-place machines, 3D prints, or other servo motor control systems.

This EV kit demonstrates the MAX40056FAUA+ in an 8-pin μMAX  package,  with  Gain  =  50V/V.  For  other  available pin-compatible options (MAX40056TAUA+, Gain = 20V/V, MAX40056HAUA+, Gain = 10V/V), contact the factory.

## Features

- Precision Real-Time Current-Monitoring with Fault Detection
- Internal Available1.5V Reference
- -0.3V to +65V Input Common Mode Range
- -40°C to +125°C Temperature Range
- Evaluates 8-μMAX MAX40056FAUA+ Device
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX40056 EV KIT PHOTO

<!-- image -->

Agilent is a registered trademark and registered service mark of Agilent Technologies, Inc.

Evaluates: MAX40056F

MAX40056T

MAX40056U

## Quick Start

## Required Equipment

- MAX40056 EV kit
- 0-60V, 3A DC Power Supply for VCM Input
- +3.6V, 100mA MAX40056F/MAX40056T/ MAX40056U device DC power supply
- +3.6V DC power supply or a voltage calibrator for OVC/ CIP input
- Electronic load capable for sinking 3A (HP6060B)
- Three digital voltmeters (Agilent ® 34401A 61/2 digital multimeter)

## Procedure

The  MAX40056  EV  kit  is  fully  assembled  and  tested. Follow the following steps to verify board operation:

Caution: Do  not  turn  on  the  power  supply  or  the electronic load until all the connections are complete.

- 1) Connect a +3.3V supply and ground to VDD connector.
- 2) Connect the positive terminal of the +0-60V DC power supply to the RS+ input and the negative terminal to the GND input.
- 3) Set the electronic load to sink 300mA.
- 4) Connect the positive terminal of the electronic load to the RS- input and the negative terminal of the electronic load to the nearest GND input connection on the board.
- 5) Connect the first voltmeter between the test points

<!-- image -->

## MAX40056 Evaluation Kit

VRS+ and VRS- to measure the differential input voltage across the inputs (V SENSE ).

- 6) Install jumper J2 and connect the positive terminal of the calibrator/DC power supply to OVC input. Set the calibrator/DC power supply voltage output to 500mV.
- 7) Connect the second voltmeter across OUT and GND test point to measure the MAX40056F/MAX40056T/ MAX40056U output.
- 8) Connect the third voltmeter across COP and GND test point to measure over current fault status at COP output.
- 9) Turn on the power supplies and the calibrator and then the electronic load.
- 10) Enable the electronic load.
- 11)  Verify that the first voltmeter displays 300mA x 50mΩ = +15mV and the second voltmeter displays 2.25V.
- 12)  Verify that the COP output is high (+3.3V).
- 13)  Now change the OVC input from 500mV to 1V on the calibrator output setting.
- 14)  Verify that the COP output is low (~0V).
- 15)  Turn off the electronic load and set the electronic load to source 300mA.
- 16)  Turn on the electronic load and verify that the first voltmeter displays -15mV and the second voltmeter displays 750mV.
- 17)  Verify that the COP output is low (~0V).
- 18)  After the functions are verified, do not forget to turn off the electronic load, calibrator and the power supply.

## Detailed Description of Hardware

The MAX40056 EV kit provides a proven design to evaluate MAX40056F/MAX40056T/MAX40056U  high-precision, high-voltage bidirectional current sense amplifier for PWM application. The device offers precision accuracy specifi -cations of input offset voltage (V OS ) less than 10μV (max) and gain error less than 0.2% (max).

The device has a proprietary input stage designed to reject high gradient PWM common mode voltage inputs and still accurately monitors the load current across its inputs.

## Table 1. Jumper Functions (J1 - J2)

| JUMPER LABEL   | DEFAULT POSITION   | FUNCTION                                                                               |
|----------------|--------------------|----------------------------------------------------------------------------------------|
| J1             | Not Installed      | OVC threshold input provided by REF output. Install R5 and R6 to create OVC threshold. |
| J2             | Installed          | OVC threshold input provided by external source                                        |

## Evaluates: MAX40056F MAX40056T MAX40056U

## Theory of Operation

## Bidirectional Operation

The  MAX40056  EV  kit  evaluates  the  MAX40056F/ MAX40056T/MAX40056U  bidirectional  current  sense amplifier.  The  output  is  set  to  the  V REF voltage  at no  load.  The  V REF voltage  can  either  be  from  internal  1.5V  reference  voltage  generated  or  an  external reference  supplied  at  V REF input.  That  sets  the  bias voltage  to  V REF (V)  for  a  no-current  condition.  Current in the positive direction in  reference  to  RS+  and RS-  increases  the  output  voltage  from  V REF (V)  and current  in  the  negative  direction  decreases  the  output voltage from V REF (V).

Hence, the output equation becomes:

<!-- formula-not-decoded -->

## External Reference

When  choosing  external  reference  at  VREF  input,  it  is recommended to choose V REF (V) = (1/2) x V DD (V) and the  V DD   (V)  value  must  not  exceed  absolute  maximum ratings.

## Overcurrent Fault Protection

The MAX40056  device features an integrated win -dow comparator to monitor overcurrent condi -tions. An overcurrent threshold voltage input is provided to the OVC input, which monitors for overcurrent detection in both the direction. When an overcurrent condition occurs,  the  output  of  the  window  comparator  goes  low indicating a fault detection.

The  input  range  for  OVC  input  is  from  0.08V  to  MIN (V REF - 0.08, V DD - 1.25).

## Threshold Input Options

When using an external voltage source to provide OVC threshold to the CIP input, install Jumper J2 and remove J1 if installed. Also make sure that the resistors R5 and R6 are also not populated.

When using the reference voltage to provide OVC threshold to  the  CIP  input,  remove  J2  and  install  J1.  Also  install R5 and R6 resistors to create the desired value of OVC threshold value.

<!-- formula-not-decoded -->

While choosing the value of R5 and R6, make sure the total  resistance  is  large  so  that  the  REF  output  is  not loaded. Recommended choice of R 5 + R 6 = 500kΩ.

│

## MAX40056 EV Kit Bill of Materials

| ITEM   | REF_DES                                                               | DNI/DNP   |   QTY | MFG PART #                                              | MANUFACTURER                         | VALUE                                             | DESCRIPTION                                                                                                      | COMMENTS   |
|--------|-----------------------------------------------------------------------|-----------|-------|---------------------------------------------------------|--------------------------------------|---------------------------------------------------|------------------------------------------------------------------------------------------------------------------|------------|
| 1      | C1                                                                    | -         |     1 | C0805C103F1GAC                                          | KEMET                                | 0.01UF                                            | CAPACITOR; SMT (0805); CERAMIC CHIP; 0.01UF; 100V; TOL=1%; TG=-55 DEGC TO +125 DEGC; TC=C0G                      |            |
| 2      | C2, C6                                                                | -         |     2 | GRM31CR72A105KA01L; C3216X7R2A105K160                   | MURATA;TDK                           | 1UF                                               | CAPACITOR; SMT; 1206; CERAMIC; 1uF; 100V; 10%; X7R; - 55degC to + 125degC                                        |            |
| 3      | C3                                                                    | -         |     1 | CKG57NX7R2A106M500JH                                    | TDK                                  | 10UF                                              | CAPACITOR; SMT (2220); CERAMIC CHIP; 10UF; 100V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R       |            |
| 4      | C4                                                                    | -         |     1 | C1608C0G1H100D080AA                                     | TDK                                  | 10PF                                              | CAPACITOR; SMT (0603); CERAMIC CHIP; 10PF; 50V; TOL=0.5PF; TG=-55 DEGC TO +125 DEGC; TC=C0G                      |            |
| 5      | CL                                                                    | -         |     1 | C0603C200J5GAC; GRM1885C1H200JA01                       | KEMET;MURATA                         | 20PF                                              | CAPACITOR; SMT (0603); CERAMIC CHIP; 20PF; 50V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G                 |            |
| 6      | CLR                                                                   | -         |     1 | C1608C0G1H103J; CGA3E2C0G1H103J080AD; GRM1885C1H103JA01 | TDK;TDK;MURATA                       | 0.01UF                                            | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 50V; TOL=5%; TG=-55 DEGC to +125 DEGC; TC=C0G                       |            |
| 7      | COP, GND, GND1-GND3, INT/EXT_REF, OUT, OVC, RS+, RS-, VDD, VRS+, VRS- | -         |    13 | 9020 BUSS                                               | WEICO WIRE                           | MAXIMPAD                                          | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE- S; 20AWG                        |            |
| 8      | D1                                                                    | -         |     1 | SMBJ60A                                                 | DIODES INCORPORATED                  | 60V                                               | DIODE; TVS; SMB (DO-214AA); VRM=60V; IF=6.2A                                                                     |            |
| 9      | D2                                                                    | -         |     1 | CMSH5-60                                                | CENTRAL SEMICONDUCTOR                | CMSH5-60                                          | DIODE; SCH; SILICON SCHOTTKY RECTIFIER;SMC; PIV=60V; IF=5A                                                       |            |
| 10     | J1, J2                                                                | -         |     2 | PCC02SAAN                                               | SULLINS                              | PCC02SAAN                                         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                         |            |
| 11     | J3                                                                    | -         |     1 | 5-1814832-1                                             | TYCO                                 | 5-1814832-1                                       | CONNECTOR; FEMALE; THROUGH HOLE; CONN SOCKET SMA STR DIE CAST PCB; STRAIGHT; 5PINS                               |            |
| 12     | R2                                                                    | -         |     1 | CRA2512-FZ-R050ELF                                      | BOURNS                               | 0.05 RES; SMT (2512); 0.05; 1%; +/-50PPM/DEGC; 3W | 0.05 RES; SMT (2512); 0.05; 1%; +/-50PPM/DEGC; 3W                                                                |            |
| 13     | R3                                                                    | -         |     1 | PNM0603E5001BST5                                        | VISHAY DALE                          | 5K                                                | RESISTOR; 0603; 5K OHM; 0.1%; 25PPM; 0.15W; THIN FILM                                                            |            |
| 14 R7, | RFILT1, RFILT2                                                        | -         |     3 | RC1608J000CS; CR0603-J/-000ELF;RC0603JR- 070RL          | SAMSUNG ELECTRONICS; BOURNS;YAGEO PH |                                                   | 0 RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM                                                           |            |
| 15     | RS+1, RS-1                                                            | -         |     2 | 6095 KEYSTONE                                           | 6095 KEYSTONE                        | 6095                                              | CONNECTOR; FEMALE; PANELMOUNT; NON-INSULATED RECESSED HEAD BANANA JACK; STRAIGHT THROUGH; 1PIN                   |            |
| 16     | U1                                                                    | -         |     1 | MAX40056FAUA+                                           | MAXIM                                | MAX40056FAUA+                                     | EVKIT PART - IC; MAX40056; BI-DIRECTIONAL CURRENT- SENSE AMPLIFIER; PACKAGE OUTLINE: 21-0036; PACKAGE CODE: U8+4 |            |
| 17     | PCB                                                                   | -         |     1 | MAX40056                                                | MAXIM                                | PCB                                               | PCB:MAX40056                                                                                                     |            |
| 18     | RL                                                                    | DNP       |     0 | 301-10K-RC                                              | XICON                                | 10K                                               | RESISTOR, 0603, 10K OHM, 5%, 200PPM, 1/16W, THICK FILM                                                           |            |
| 19     | C5                                                                    | DNP       |     0 | N/A                                                     | N/A                                  | OPEN                                              | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR                                                                         |            |
| 20     | R1, R4-R6                                                             | DNP       |     0 | N/A                                                     | N/A                                  | OPEN                                              | PACKAGE OUTLINE 0603 RESISTOR                                                                                    |            |
| TOTAL  |                                                                       |           |    34 |                                                         |                                      |                                                   |                                                                                                                  |            |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX40056EVKIT# | EV Kit |

#Denotes a RoHS-compliant device that may include lead(Pb) that is exempt under the RoHS requirements.

## MAX40056 Evaluation Kit

## MAX40056 EV Kit Schematic

<!-- image -->

│

Evaluates: MAX40056F

MAX40056T

MAX40056U

## MAX40056 Evaluation Kit

## MAX40056 EV Kit PCB Layout Diagrams

MAX40056 EV Kit PCB Layout Diagrams-Assembly Top

<!-- image -->

Evaluates: MAX40056F

MAX40056T

MAX40056U

│

## MAX40056 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX40056 EV Kit PCB Layout Diagrams-Top Silkscreen

<!-- image -->

MAX40056 EV Kit PCB Layout Diagrams-Top

MAX40056 EV Kit PCB Layout Diagrams-Bottom

<!-- image -->

MAX40056 EV Kit PCB Layout Diagrams-Bottom Silkscreen

<!-- image -->

Evaluates: MAX40056F

MAX40056T

MAX40056U

## MAX40056 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                     | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------|-----------------|
|                 0 | 10/18           | Initial release                                                 | -               |
|                 1 | 12/18           | Updated data sheet title, part number, and Ordering Information | 1-7             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://w.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

Evaluates: MAX40056F

MAX40056T

MAX40056U