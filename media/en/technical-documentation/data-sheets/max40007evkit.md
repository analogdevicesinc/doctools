<!-- lastmod 2022-08-03 -->
## MAX40007 Evaluation Kit

## General Description

The MAX40007 evaluation kit (EV kit) is a fully assembled and tested circuit board that contains all the components necessary  to  evaluate  the  MAX40007  IC,  offered  in  a space-saving  1.1mm  x  0.76mm,  6-bump  wafer-level package  (WLP).  The  device  is  a  rail-to-rail  micropower op  amp  drawing  only  700nA  of  supply  current.  The  EV kit operates from a single 1.7V to 5.5V DC power supply.

## Features

- 1.7V to 5.5V Single-Supply Operation
- Comes in Unity-Gain Buffer Configuration
- Can Be Configured in Inverting, Non-Inverting, and Differential Amplifier Configurations
- Evaluates the Device in a 6-Bump WLP
- Proven PCB Layout
- Fully Assembled and Tested

## Quick Start

## Required Equipment

- MAX40007 EV kit
- 1.7V to 5.5V, 100mA DC power supply
- Voltmeter

Ordering Information appears at end of data sheet.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on power  supplies  until  all  connections  are  completed and  turn  on  V CC ,  V SS   supplies  before  turning  on power supplies on the input pins.

- 1) Make sure J1 jumper is uninstalled and J2 jumper is in 2-3 position for single-supply operation. J2 should be in 1-2 position for split-supply operation.
- 2) Single-supply operation: Connect the positive terminal of the +5V supply to the VDD test point and the GND terminal of supply to the GND test point. Make sure J2 is in 2-3 position. The power supply should be off.
- 3) Connect the positive terminal of the precision voltage source to the IN+ test point.
- 4) Connect the DMM to monitor the voltage on the OUT test point.
- 5) Turn  on  the  5V  power  supply  and  apply  2.5V  from the precision voltage source. Observe the output at the  OUT  test  point  on  the  DMM.  OUT  should  read approximately 2.5V. Also, vary IN+ voltage between 0.05V to 3.9V to see if DMM on the OUT test point follows the IN+ voltage applied.
- 6) Split-supply operation: Connect the positive terminal of the +2.5V supply to the VDD test point and the GND terminal of the supply to the GND test point. Connect -2.5V supply to VSS test point. Make sure J2 is in 1-2 position for this test.
- 7) Connect the positive terminal of the precision voltage source to the IN+ test point.
- 8) Connect the DMM to monitor the voltage on the OUT test point.
- 9) Turn  on  the  +2.5V  and  -2.5V  power  supply  and apply 1V from the precision voltage source. Observe the output at the OUT test point on the DMM. OUT should read approximately 1V. Also, vary IN+ voltage between -2.45V to 1.4V to see if DMM on the OUT test point follows the applied IN+ voltage.

<!-- image -->

Evaluates: MAX40007

## MAX40007 Evaluation Kit

## Detailed Description of Hardware

The MAX40007 EV kit contains the MAX40007 IC, which is a rail-to-rail output micropower op amp with an ultra-low 700nA supply current designed in a 6-bump WLP. The EV kit operates from a single 1.7V to 5.5V DC power supply.

## Default Application Circuit

The  EV  kit  comes  preconfigured  in  a  unity-gain  buffer configuration.

## Op Amp Configurations

The EV kit provides flexibility to easily reconfigure the op amp into  any  of  the  three  common  circuit  topologies:  inverting amplifier, noninverting  amplifier, differential amplifier. These configurations are described in the next few sections.

## Noninverting Amplifier

To  configure  the  device  as  a  noninverting  amplifier, replace R4 and R3 with suitable resistors. Install J1 to configure the op amp into noninverting mode. The output voltage  (V OUT )  for  the  noninverting  configuration  is given by the following equation:

<!-- formula-not-decoded -->

where:

VOS = Input-referred offset voltage.

VIN+  = Input voltage applied at the IN+ PCB pad.

## Table 1. Default Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                         |
|----------|------------------|-------------------------------------|
| JU1      | Not installed    | IN- to GND                          |
| JU2      | 2-3              | V SS = GND                          |
| JU2      | 1-2              | User-defined V SS on VSS test point |

## Component Suppliers

| SUPPLIER                               | WEBSITE        |
|----------------------------------------|----------------|
| Murata Electronics North America, Inc. | www.murata.com |

Note: Indicate that you are using the MAX40007 when contacting this component supplier.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX40007EVKIT# | EV Kit |

#RoHS-compliant

## Inverting Amplifier

To configure the device as an inverting amplifier, replace R4 and R3 with suitable gain resistors. An appropriate DC voltage  (V DC )  should  be  applied  to  the  IN+  test  point  to level-shift the output voltage of the op amp if the applied input voltage (V IN- ) at the IN- test point pad is positive:

<!-- formula-not-decoded -->

## Differential Amplifier

To configure the device as a differential amplifier, replace R2, R CI , R3, and R4 with appropriate resistors. When R CI = R4 and R2 = R3, the CMRR of the differential amplifier is determined by the matching of ratios R3/R4 and R2/R CI :

<!-- formula-not-decoded -->

where:

<!-- formula-not-decoded -->

* Note:

R CI  means resistor on CI Pad.

## Buffer Amplifier

By default, the EV kit is configured as a standard unitygain buffer.

<!-- formula-not-decoded -->

Evaluates: MAX40007

│

## MAX40007 Evaluation Kit

## MAX40007 EV Kit Bill of Materials

| COMMENTS                                                                                                           |                                                                                                                                                                                          |                                                                                                                                                                                            |                                                                                                                     |                                                     |                                                                                                                               |                                                                                               | MULTIPURPOSE; NOT FOR COLD TEST      |                                                                                                                                                                                             |               | COMMENTS                                                                                                           |                              |                                                 |                                         |                                              |                                       |                             |
|--------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|--------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|--------------------------------------------------------------------------------------------------------------------|------------------------------|-------------------------------------------------|-----------------------------------------|----------------------------------------------|---------------------------------------|-----------------------------|
| VALUE DESCRIPTION CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1µF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R; AUTO | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS = 0.062IN; NOT FOR COLD TEST | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS | RESISTOR; 0603; 0 Ω ; 0%; JUMPER; 0.10W; THICK FILM | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.256IN; BLACK; INSULATION = PBT CONTACT = PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL | EVKIT PART-IC; MAX40007EVKIT#; OZ26; PACKAGE OUTLINE: 21-100086C; PACKAGE CODE: N60D1+1; WLP6 | TESTPOINT WITH 1.80MM HOLE DIA, RED, | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.445IN; BOARD HOLE = 0.063IN; ORANGE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS = 0.062IN; NOT FOR COLD TEST | PCB: MAX40007 | VALUE DESCRIPTION OPEN PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR - EVKIT OPEN PACKAGE OUTLINE 0603 RESISTOR - EVKIT | COMMENTS                     |                                                 | ZIP 4inX6in;                            | - PACKOUT                                    |                                       |                             |
| 0.1UF                                                                                                              | N/A                                                                                                                                                                                      | N/A                                                                                                                                                                                        | PEC02SAAN PEC03SAAN                                                                                                 | 0                                                   | STC02SYAN                                                                                                                     | MAX40007                                                                                      | N/A                                  | N/A                                                                                                                                                                                         | PCB           |                                                                                                                    | DESCRIPTION                  | BOX;SMALL BROWN 9 3/16X7X1 1/4 - PACKOUT SHIELD | ESD BAG;BAG;STATIC W/ESD LOGO - PACKOUT | PINK FOAM;FOAM; ANTI-STATIC PE 12inX12inX5MM | WEB INSTRUCTIONS FOR MAXIM DATA SHEET | LABEL(EV KIT BOX) - PACKOUT |
| MANUFACTURER MURATA; TDK                                                                                           | KEYSTONE                                                                                                                                                                                 | KEYSTONE                                                                                                                                                                                   | SULLINS SULLINS                                                                                                     | VISHAY DALE/ROHM/ PANASONIC                         | SULLINS ELECTRONICS CORP.                                                                                                     | MAXIM                                                                                         | KEYSTONE                             | KEYSTONE                                                                                                                                                                                    | MAXIM         | MANUFACTURER N/A N/A                                                                                               | VALUE                        | ?                                               | ?                                       | ?                                            | ?                                     | ?                           |
| MFG PART # GCJ188R71H104KA12; GCM188R71H104K;                                                                      | CGA3E2X7R1H104K080AE 5011                                                                                                                                                                | 5012                                                                                                                                                                                       | PEC02SAAN PEC03SAAN                                                                                                 | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00          | STC02SYAN                                                                                                                     | MAX40007                                                                                      | 5010                                 | 5013                                                                                                                                                                                        | MAX40007      | MFG PART # N/A N/A                                                                                                 | MANUFACTURER                 | N/A                                             | N/A N/A                                 |                                              | N/A                                   | N/A                         |
| MAXINV 20-000U1-BA63                                                                                               | 02-TPMINI5011-00                                                                                                                                                                         | 02-TPMINI5012-00                                                                                                                                                                           | 01-PEC02SAAN2P-21 01-PEC03SAAN3P-21                                                                                 | 80-0000R-27                                         | 02-JMPFSTC02SYAN-00                                                                                                           | MAX40007                                                                                      | 02-TPMINI5010-00                     | 02-TPMINI5013-00                                                                                                                                                                            | EPCB40007     | MAXINV N/A N/A                                                                                                     | MFG PART # shipped with PCB) | 88-00711-SML                                    | 87-02162-00 85-MAXKIT-PNK               |                                              | EVINSERT                              | 85-84003-006                |
| VAR STATUS Pref                                                                                                    | Pref                                                                                                                                                                                     | Pref                                                                                                                                                                                       | Pref Pref                                                                                                           | Pref                                                | Pref                                                                                                                          | Pref                                                                                          | Pref                                 | Pref                                                                                                                                                                                        | Pref          | VAR STATUS DNP DNP                                                                                                 | MAXINV on PCB and will be    | 88-00711-SML                                    | 87-02162-00 85-MAXKIT-PNK               |                                              | EVINSERT                              | 85-84003-006                |
| REF DES C3, C5                                                                                                     | GND, GND_1, GND_2                                                                                                                                                                        | IN+, IN-, VOUT                                                                                                                                                                             | J1 J2                                                                                                               | R1, R2, R4, R5                                      | SU1, SU2                                                                                                                      | U1                                                                                            | VDD                                  | VSS                                                                                                                                                                                         |               | REF DES C1, C2, C4, C6 R3, R6                                                                                      | REF DES but not assembled    | PACKOUT                                         | PACKOUT PACKOUT                         |                                              | PACKOUT                               | PACKOUT                     |
| QTY 2                                                                                                              | 3                                                                                                                                                                                        | 3                                                                                                                                                                                          | 1 1                                                                                                                 | 4                                                   | 2                                                                                                                             | 1                                                                                             | 1                                    | 1                                                                                                                                                                                           | 1 20          | QTY 4 2 6 (DNP)                                                                                                    | QTY purchased parts          | 1                                               | 1 1                                     |                                              | 1                                     | 1 5                         |
| ITEM 1                                                                                                             | 2                                                                                                                                                                                        | 3                                                                                                                                                                                          | 4 5                                                                                                                 | 6                                                   | 7                                                                                                                             | 8                                                                                             | 9                                    | 10                                                                                                                                                                                          | 11 TOTAL      | ITEM 1 2 TOTAL DO NOT PURCHASE                                                                                     | ITEM PACKOUT (These are      | 1                                               | 2                                       | 3                                            | 4                                     | 5 TOTAL                     |

Evaluates: MAX40007

## MAX40007 EV Kit Schematic

<!-- image -->

Evaluates: MAX40007

## MAX40007 EV Kit PCB Layout Diagrams

MAX40007 EV Kit-Top Silkscreen

<!-- image -->

MAX40007 EV Kit-Top Paste

<!-- image -->

MAX40007 EV Kit-Top Mask

<!-- image -->

MAX40007 EV Kit-Top

<!-- image -->

│

## MAX40007 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX40007 EV Kit-Bottom

MAX40007 EV Kit-Bottom Mask

<!-- image -->

MAX40007 EV Kit-Bottom Silkscreen

<!-- image -->

│

## MAX40007 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/17            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses Dre LPSOLed  0D[LP ,nWeJrDWed reserYes WKe rLJKW WR FKDnJe WKe FLrFXLWr\ Dnd sSeFLfiFDWLRns ZLWKRXW nRWLFe

<!-- image -->

│

Evaluates: MAX40007