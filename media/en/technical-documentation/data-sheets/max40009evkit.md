<!-- lastmod 2022-08-05 -->
## MAX40008/MAX40009 Evaluation Kit

## General Description

The  MAX40008/MAX40009  evaluation  kit  (EV  kit)  is  a fully  assembled  and  tested  PC  board  that  evaluates the MAX40008/MAX40009 single comparator with shutdown input. The MAX40009EVKIT# comes with a push-pull output  (MAX40009ANT+), while the MAX40008EVKIT# EV kit  comes  with  an  open-drain  output  (MAX40008ANT+) installed  that  operates  off  a  V DD   supply  between  1.7V and  5.5V.  The  MAX40008/MAX40009  has  a  wide  input common mode voltage range from -0.2V to V DD  + 0.2V. This EV kit demonstrates the MAX40008/MAX40009 in an ultra-small, 0.73mm x 1.1mm, 6-bump wafer-level package (WLP) with 0.35mm bump spacing.

The EV kit can be used to evaluate both the MAX40008  and  MAX40009  with  a  6-bump  WLP.  To evaluate  the  MAX40008  (open-drain  output  version  on MAX40009EVKIT#),  replace  U1  (MAX40009)  with  the MAX40008 with jumper J1 installed.

When  using  the  MAX40008EVKIT#  to  evaluate    the MAX40009 (push-pull version), replace U1 (MAX40008) with MAX40009 with jumper J1 removed.

## Features

- 300ns Propagation Delay
- Wide Input Common Mode Voltage Range, -0.2V to  V DD  + 0.2V
- Hysteresis Adding Configurable
- Evaluates 6-Bump WLP Package
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX40008/MAX40009

## Quick Start

## Required Equipment

- Three +5V DC power supplies (V DD , V IN+ , and V PULL )
- Two digital multimeters (DMMs)

## Procedure

The  MAX40008/MAX40009  EV  kit  is  fully  assembled and tested. Follow steps below to verify board operation. Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Connect the positive terminal of a DC power supply to the VDD test point and the ground terminal to the GND test point.
- 2) Connect the positive terminal of a DC power supply to the VPULL test point and the ground terminal to the GND test point when evaluating the MAX40008. This is not necessary when evaluating the MAX40009.
- 3) Connect the positive terminal of a DC power supply to the INP test point and the ground terminal to the GND test point.
- 4) Turn  on  the  V DD   power  supply  and  set  it  to  any voltage between 1.7V and 5.5V.
- 5) Turn  on  the  V PULL   power  supply  and  set  it  to  any voltage  between  1.7V  to  5.5V  (MAX40008  only). Do not need VPULL supply when MAX40009 (push-pull output) is used.
- 6) Turn on the IN+ power supply and set it to the desired level.
- 7) Monitor  the  output  using  a  DMM  at  the  V OUT   test point and observe its response to varying voltage at IN+. V OUT  should be at logic-high (V PULL ) when voltage applied on IN+ is greater than V IN-  and should be at logic-low (0V) when the voltage applied on IN+ is less than V IN- .

<!-- image -->

## MAX40008/MAX40009 Evaluation Kit

## Detailed Description of Hardware

The  MAX40008/MAX40009  EV  kit  is  a  fully  assembled and  tested  PC  board  that  evaluates  the  6-bump  WLP MAX40009ANT+  open-drain  output  comparator,  while the MAX40008EVKIT# comes with an open-drain output (MAX40008ANT+). The  EV  kit  requires  a  1.7V  to  5.5V supply voltage for  normal  operation. The  EV  kit  can  be used  to  evaluate  both  the  MAX40008  and  MAX40009 offered in a WLP package.

## Positive Hysteresis

The EV kit allows user to add external hysteresis in addition  to  the  4mV  internal  hysteresis  by  usage  of  adding appropriate resistors on R2 and R1 pads. When R1 and R2 values are chosen in such a way that R1, R2 &gt;&gt; R3 (39kΩ) approximately greater 50x than R3, then the equa -tions become:

For the MAX40008 (open-drain) output:

<!-- formula-not-decoded -->

and

<!-- formula-not-decoded -->

when R1 and R2 &gt;&gt; RP

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

## Table 1. Jumper Settings

| JUMPER   | SHUNT POSITION   | FUNCTION                                        |
|----------|------------------|-------------------------------------------------|
| J1       | Installed        | Connects Open-Drain output (MAX40008) to V PULL |
|          | Not Installed*   | Normal push-pull operation (MAX40009)           |
| J2       | 1-2*             | The device is in Active mode                    |
| J2       | 2-3              | The device is shut down                         |

*Default Jumper settings

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX40008EVKIT# | EV Kit |
| MAX40009EVKIT# | EV Kit |

#RoHS-compliant

## Evaluates: MAX40008/MAX40009

the term

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

and R5 and R6 set the threshold voltage at IN- input as follows:

<!-- formula-not-decoded -->

The source providing the signal input at IN+ input should be  a  low  impedance  source.  High-impedance  source affects the trip points as the input resistance of the source adds on to R1.

## Logic Level Translation

Use  the  MAX40008  output  for  logic-level  translation applications.  Install  jumper  J1  and  apply  the  desired supply voltage level at V PULL . Resistors R5 and R6 set the threshold voltage at IN-. Apply the signal to be level translated  at  IN+.  Note  that  the  device's  output  has  an absolute  maximum  of  (-0.3V)  to  +6V.  See  Table  1  for jumper configurations.

The pullup supply voltage (V PULL ) can be up to 6V.

For evaluating the MAX40008 on the MAX40009EVKIT#, replace U1 (MAX40009ANT+) with MAX40008ANT+ and install  jumper  J1  to  connect  to  V PULL .  When  using  the MAX40008EVKIT#,  to  evaluate  MAX40009  (push-pull version),  replace  U1  (MAX40008)  with  MAX40009  with jumper J1 removed.

│

## MAX40008/MAX40009 Evaluation Kit

## MAX40008 EV Kit Bill of Materials

| COMMENTS     |                                                                              |                                                                                                                             |                                                                                                       |                                                                                          |                                                                                  |                                                      |                                               |                                                                                                                     |                                                                                       |                                                                                                                  |                                                      |                               |       |
|--------------|------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|------------------------------------------------------|-----------------------------------------------|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|-------------------------------|-------|
| DESCRIPTION  | CAPACITOR; SMT (0402); CERAMIC; 0.1UF; 16V; TG=-55 DEGC TO +125 DEGC; TC=X7R | TOL=10%; TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER; | CONNECTOR; MALE; THROUGH HOLE; 1.27MM MICRO LOW PROFILE TERMINAL STRIP; STRAIGHT; 2PINS; | CONNECTOR; MALE; THROUGH HOLE; MICRO LOW PROFILE TERMINAL STRIP; STRAIGHT; 3PINS | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM | RESISTOR, 0402, 39K OHM, 1%, 100PPM, 0.0625W, | THICK FILM TEST POINT; JUMPER; STR; TOTAL LENGTH=0.175IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED | EVKIT PART-IC; MAX40008EWT+; PACKAGE OUTLINE: 21-100086C; PACKAGE CODE: N60D1+1; WLP6 | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM | PCB Board:MAX40008 EVALUATION | KIT   |
| VALUE        | 0.1UF                                                                        | N/A                                                                                                                         | N/A                                                                                                   | FTS-102-01-L-S                                                                           | FTS-103-01-L-S                                                                   | 0                                                    | 39K                                           | 2SN-BK-G                                                                                                            | MAX40008EWT+                                                                          | N/A                                                                                                              | 0                                                    | PCB                           |       |
| MANUFACTURER | SAMSUNG ELECTRONICS                                                          | KEYSTONE                                                                                                                    | KEYSTONE                                                                                              | SAMTEC                                                                                   | SAMTEC                                                                           | PANASONIC                                            | PANASONIC                                     | SAMTEC                                                                                                              | MAXIM                                                                                 | KEYSTONE                                                                                                         | PANASONIC                                            | MAXIM                         |       |
| MFG PART #   | CL05B104KO5NNN                                                               | 5001                                                                                                                        | 5002                                                                                                  | FTS-102-01-L-S                                                                           | FTS-103-01-L-S                                                                   | ERJ-2GE0R00X                                         | ERJ-2RKF3902X                                 | 2SN-BK-G                                                                                                            | MAX40008EWT+                                                                          | 5000                                                                                                             | ERJ-2GE0R00X                                         | MAX40008                      |       |
| QTY          | 2                                                                            | 3                                                                                                                           | 3                                                                                                     | 1                                                                                        | 1                                                                                | 1                                                    | 1                                             | 2                                                                                                                   | 1                                                                                     | 2                                                                                                                | 0                                                    | 1                             | 18    |
| DNI/DNP      | -                                                                            | -                                                                                                                           | -                                                                                                     | -                                                                                        | -                                                                                | -                                                    | -                                             | -                                                                                                                   | -                                                                                     | -                                                                                                                | DNP                                                  | -                             |       |
| REF_DES      | C1, C2                                                                       | X1, X2, GND                                                                                                                 | INM, INP, VOUT                                                                                        | J1                                                                                       | J2                                                                               | R1                                                   | R3                                            | SU1, SU2                                                                                                            | U1                                                                                    | VDD, VPULL                                                                                                       | R2, R5, R6                                           | PCB                           |       |
| ITEM         | 1                                                                            | 2                                                                                                                           | 3                                                                                                     | 4                                                                                        | 5                                                                                | 6                                                    | 7                                             | 8                                                                                                                   | 9                                                                                     | 10                                                                                                               | 11                                                   | 12                            | TOTAL |

## Evaluates: MAX40008/MAX40009

## MAX40008 EV Kit Schematic

<!-- image -->

│

## MAX40008 EV Kit PCB Layout Diagrams

MAX40008 EV Kit-Top Silkscreen

<!-- image -->

MAX40008 EV Kit-Bottom

<!-- image -->

MAX40008 EV Kit-Top

<!-- image -->

MAX40008 EV Kit-Bottom Silkscreen

<!-- image -->

│

## MAX40008/MAX40009 Evaluation Kit

## MAX40009 EV Kit Bill of Materials

| COMMENTS                                                |                                                                                                                     |                                                                                                                                                                                                                                             |                                                                                                                                                                      |                                                                  |                                                                                                                             |                                                                                                               |                                                                                       |                                                                                                                                                                                  |               | COMMENTS                                                        |                                    |                                        |                             |                                                             |                                 |                             |
|---------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|-----------------------------------------------------------------|------------------------------------|----------------------------------------|-----------------------------|-------------------------------------------------------------|---------------------------------|-----------------------------|
| DESCRIPTION CAPACITOR; SMT (0402); CERAMIC; 0.1µF; 16V; | TOL = 10%; TG = -55 ° C TO +125°C; TC = X7R TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; | BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS = 0.062IN; NOT FOR COLD TEST TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER; NOT FOR COLD TEST | CONNECTOR; MALE; THROUGH HOLE; 1.27MM MICRO LOW PROFILE TERMINAL STRIP; STRAIGHT; 2PINS; NOTE: SPECIAL ORDER ONLY. PURCHASING OF THIS PRODUCT IS CASE-TO-CASE BASIS. | CONNECTOR; MALE; THROUGH HOLE; MICRO LOW PROFILE TERMINAL STRIP; | STRAIGHT; 3PINS RESISTOR; 0402; 0 Ω ; 0%; JUMPER; 0.10W; THICK FILM RESISTOR, 0402, 39K Ω , 1%, 100PPM, 0.0625W, THICK FILM | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.175IN; BLACK; INSULATION = PBT; PHOSPHOR BRONZE CONTACT=GOLD PLATED | EVKIT PART-IC; MAX40009ANT+; PACKAGE OUTLINE: 21-100086C; PACKAGE CODE: N60D1+1; WLP6 | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH =0.3IN; BOARD HOLE = 0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST | PCB: MAX40009 | DESCRIPTION RESISTOR; 0402; 0 Ω ; 0%; JUMPER; 0.10W; THICK FILM | COMMENTS                           | ESD BAG;BAG; SHIELD ZIP 4inX6in;       |                             |                                                             | SHEET                           |                             |
| VALUE                                                   | 0.1UF                                                                                                               | N/A N/A                                                                                                                                                                                                                                     | FTS-102-01-L-S                                                                                                                                                       | FTS-103-01-L-S                                                   | 0 39K                                                                                                                       | 2SN-BK-G                                                                                                      | MAX40009ANT+                                                                          | N/A                                                                                                                                                                              | PCB           | VALUE 0                                                         | DESCRIPTION 9                      | BOX;SMALL BROWN 3/16X7X1 1/4 - PACKOUT | STATIC W/ESD LOGO - PACKOUT | PINK FOAM; FOAM; ANTI-STATIC PE 12in X 12in X 5MM - PACKOUT | WEB INSTRUCTIONS FOR MAXIM DATA | LABEL(EV KIT BOX) - PACKOUT |
| MANUFACTURER                                            | SAMSUNG ELECTRONICS                                                                                                 | KEYSTONE KEYSTONE                                                                                                                                                                                                                           | SAMTEC                                                                                                                                                               | SAMTEC                                                           | PANASONIC PANASONIC                                                                                                         | SAMTEC                                                                                                        | MAXIM                                                                                 | KEYSTONE                                                                                                                                                                         | MAXIM         | MANUFACTURER PANASONIC                                          | VALUE                              | ?                                      | ?                           | ?                                                           | ?                               | ?                           |
| MFG PART #                                              | CL05B104KO5NNN                                                                                                      | 5001 5002                                                                                                                                                                                                                                   | FTS-102-01-L-S                                                                                                                                                       | FTS-103-01-L-S                                                   | ERJ-2GE0R00X ERJ-2RKF3902X                                                                                                  | 2SN-BK-G                                                                                                      | MAX40009ANT+                                                                          | 5000                                                                                                                                                                             | MAX40009      | MFG PART # ERJ-2GE0R00X                                         | with PCB) MANUFACTURER             | N/A                                    | N/A                         | N/A                                                         | N/A                             | N/A                         |
| MAXINV                                                  | 20-000U1-B19B                                                                                                       | 02-TPMINI5001-00 02-TPMINI5002-00                                                                                                                                                                                                           | 01-FTS10201LS2P-19                                                                                                                                                   | 01-FTS10301LS3P-21                                               | 80-0000R-26A 80-0039K-23                                                                                                    | 02-JMPF2SNBKG-00                                                                                              | MAX40009ANT+                                                                          | 02-TPMINI5000-00                                                                                                                                                                 | EPCB40009     | MAXINV 80-0000R-26A                                             | PCB and will be shipped MFG PART # | 88-00711-SML                           | 87-02162-00                 | 85-MAXKIT-PNK                                               | EVINSERT                        | 85-84003-006                |
| VAR STATUS                                              | Pref                                                                                                                | Pref Pref                                                                                                                                                                                                                                   | Pref                                                                                                                                                                 | Pref                                                             | Pref Pref                                                                                                                   | Pref                                                                                                          | Pref                                                                                  | Pref                                                                                                                                                                             | Pref          | VAR STATUS DNP                                                  | but not assembled on MAXINV        | 88-00711-SML                           | 87-02162-00                 | 85-MAXKIT-PNK                                               | EVINSERT                        | 85-84003-006                |
| REF DES                                                 | C1, C2                                                                                                              | X1, X2, GND INM, INP, VOUT                                                                                                                                                                                                                  | J1                                                                                                                                                                   | J2                                                               | R1 R3                                                                                                                       | SU1, SU2                                                                                                      | U1                                                                                    | VDD, VPULL                                                                                                                                                                       |               | (DNP) REF DES R2, R5, R6                                        | are purchased parts REF DES        | PACKOUT                                | PACKOUT                     | PACKOUT                                                     | PACKOUT                         | PACKOUT                     |
| ITEM QTY                                                | 1 2                                                                                                                 | 2 3 3 3                                                                                                                                                                                                                                     | 4 1                                                                                                                                                                  | 5 1                                                              | 6 1 7 1                                                                                                                     | 8 2                                                                                                           | 9 1                                                                                   | 10 2                                                                                                                                                                             | 11 1 TOTAL 18 | DO NOT PURCHASE ITEM QTY 1 3 TOTAL 3                            | PACKOUT (These ITEM QTY            | 1 1                                    | 2 1                         | 3 1                                                         | 4 1                             | 5 1 TOTAL 5                 |

## Evaluates: MAX40008/MAX40009

## MAX40009 EV Kit Schematics

<!-- image -->

Evaluates: MAX40008/MAX40009

## MAX40009 EV Kit Schematics (continued)

<!-- image -->

## MAX40009 EV Kit PCB Layout Diagrams

MAX40009 EV Kit-Top Silkscreen

<!-- image -->

MAX40009 EV Kit-Top Mask

<!-- image -->

MAX40009 EV Kit-Top

<!-- image -->

MAX40009 EV Kit-Bottom

<!-- image -->

│

## MAX40009 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX40009 EV Kit-Bottom Mask

MAX40009 EV Kit-Bottom Silkscreen

<!-- image -->

MAX40009 EV Kit-Top Paste

<!-- image -->

│

## MAX40008/MAX40009 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                | PAGES CHANGED   |
|-------------------|-----------------|----------------------------|-----------------|
|                 0 | 3/17            | Initial release            | -               |
|                 1 | 6/17            | Added MAX40008 part number | 1-11            |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implieG  0axim ,ntegrateG reVerYeV the right to Fhange the FirFuitry anG VpeFi¿FationV Zithout notiFe at any time

│

Evaluates: MAX40008/MAX40009