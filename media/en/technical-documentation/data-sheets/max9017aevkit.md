<!-- lastmod 2022-08-03 -->
## MAX9017A Evaluation Kit

## General Description

The MAX9017A evaluation kit (EV kit) is a fully assembled and tested circuit board that contains all the components necessary to evaluate both MAX9017 and MAX9019 ICs. The MAX9017AEVKIT printed circuit board (PCB) comes installed with MAX9017AEKA/V+ in 8-SOT23 package.

The device is a low-power, dual comparator with internal 1.24V  voltage  reference.  The  EV  kit  operates  from  a single  1.8V  to  5.5V  DC  power  supply  or  from  ±0.9V  to ±2.75V split supply.

## Features

- +1.8V to +5.5V Supply Voltage Range Across V DD and V SS
- Dual-Channel Comparator with Built-in 1.24V Voltage Reference
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX9017A, MAX9017B, MAX9018, MAX9019, and MAX9020

(Open-Drain)

## Quick Start

## Required Equipment

Before beginning, the following equipment is needed:

- MAX9017A EV kit
- 1.8V to 5.5V, 100mA DC power supply
- Precision voltage calibrator
- Two digital multimeters

## Procedure

Follow the steps to verify board operation.

Caution: Do not turn on power supplies until all connections are completed and turn on V CC , V SS supplies before turning on power supplies on the input pins.

- 1) Verify that shunts on J1, J2 are open and shunts on J3 is installed.
- 2) Set a DC power supply to 3.3V with a multi meter in series to check supply current. Connect the positive terminal of the power supply to the positive terminal of multi meter for current and connect negative terminal of multi meter to V CC  test point and the ground terminal of power supply to the GND test point.
- 3) Set precision voltage calibrator to 2.5V. Connect the positive terminal of the calibrator to the INA+ test point and the ground terminal to the GND test point.
- 4) Now short a wire between the INA+ test point and INB+ test point. Also, short a wire between the REF/ INA- to INB- test points.
- 5) Enable DC power supply on V CC first and then turn on voltage calibrator on INA+ test point.
- 6) Verify if the supply current measurement reading on VCC pin is on the order of ~1.2µA.
- 7) Verify that OUTA and OUTB are at logic-high (3.3V).
- 8) Decrease the voltage set on INA+ test point to 1V on voltage calibrator and that in turn decreases voltage on INB+ test point as there is a short in between INA+, INB+, as discussed in step 4. Now verify that OUTA and OUTB are now at logic-low (0V).

<!-- image -->

## MAX9017A Evaluation Kit

## Detailed Description of Hardware

The MAX9017A EV kit by default comes with MAX9017A IC, which is dual comparator with internal voltage reference and  push-pull  output  in  8-SOT23  package.  The  EV  kit operates from a single 1.8V to 5.5V DC power supply. The EV kit is meant to work with split supplies as well where the voltage between V DD  and V SS  is ±0.9V to ±2.75V.

## Default Application Circuit

The  EV  kit  comes  preconfigured  using  a  single  supply configuration on generic dual comparator configuration.

These EV kits allow users to add external hysteresis in addition to the 4mV internal hysteresis through the addition of appropriate resistors on the R1 and R3 pads provided on  the  EV  board  for  CHA.  The  amount  of  hysteresis added is given by the equation below, based on R1, R3 values:

<!-- formula-not-decoded -->

Similarly,  Hysteresis  to  CHB  is  added  by  appropriately choosing R4, R5 resistors.

## Other Application Circuit

This EV kit can be used in window-detector applications, while the MAX9018 is being evaluated on this kit.

A window detector application is useful in cases when a battery voltage needs to be monitored and thrown in an

## Table 1. Default Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                            |
|----------|------------------|--------------------------------------------------------|
| J1       | Installed        | Positive feedback for external hysteresis              |
| J1       | Not Installed*   | No feedback is connected                               |
| J2       | Installed        | Inbuilt voltage reference connected to INB+            |
| J2       | Not Installed*   | Inbuilt voltage reference is not used for driving INB+ |
| J3       | Installed*       | Single-supply operation                                |
| J3       | Not Installed    | Split-supply operation enabled                         |

## Component Suppliers

| SUPPLIER                              | WEBSITE                     |
|---------------------------------------|-----------------------------|
| Murata Electronics North America Inc. | http://www.murata.com/en-us |

Note: Indicate that you are using the MAX40088EVKIT when contacting these component suppliers.

## Evaluates: MAX9017A, MAX9017B, MAX9018, MAX9019, and MAX9020 (Open-Drain)

interrupt on the comparator output when the battery voltage is out of the predetermined range set by user.

For  example,  in  a  single-cell  Li-Ion  battery,  3.6V  is  a nominal voltage range, with 2.9V being typical end-of-line discharge state and 4.2V being the maximum charge voltage. It  is  useful  to  track  whether  a  Li-Ion  battery  voltage  is within 2.9V to 4.2V range during operation. When the battery voltage falls out of this voltage range, a comparator in this application circuit will raise an interrupt on the output to alert the user.

Since the MAX9018 has an open-drain output structure, we can wire AND by shorting both of the outputs together and use a pullup resistor to supply voltage.

To configure the EV kit in the window detector application, install jumper J2 and the appropriate resistors on the R3, R2,  and  R6  pads.  Resistors  R3,  R2,  and  R6  pads  are available  for  setting  the  overvoltage  and  undervoltagethreshold levels. In this single-cell, Li-Ion application, by appropriately choosing these resistors, OUTA provides an active-low,  undervoltage  indication  (≤2.9V),  while  OUTB provides  an  active-low,  overvoltage  indication  (≥4.2V). ANDing the two open-drain  outputs  provides  an  activehigh,  power-good  signal  when  battery  voltage  is  within the 2.9V to 4.2V range. For the detailed design procedure involved  in  calculating  R3,  R2,  and  R6,  refer  to  the MAX9017 IC data sheet.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX9017AEVKIT# | EV Kit |

# RoHS compliant.

│

## MAX9017A Evaluation Kit

TITLE: Bill of Materials

## MAX9017A EV Kit Bill of Materials DATE: 03/22/2016 DESIGN: max9017a\_evkit\_a

| ITEM   |   QTY | REF DES                                | VAR STATUS   | MAXINV              | MFG PART #                                     | MANUFACTURER                         | VALUE        | DESCRIPTION                                                                                                                                                                   | COMMENTS   |
|--------|-------|----------------------------------------|--------------|---------------------|------------------------------------------------|--------------------------------------|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 1      |     2 | A1, A2                                 | Pref         | 02-TPMINI5001-00    | 5001                                           | KEYSTONE                             | N/A          | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |            |
| 2      |     1 | C2                                     | Pref         | 20-000U1-P6B        | C1608X7R1E104K080AA                            | TDK                                  | 0.1UF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                    |            |
| 3      |     1 | C3                                     | Pref         | 20-0001U-P6         | GRM188R71E105KA12D; CGA3E1X7R1E105K            | MURATA                               | 1UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 25V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                    |            |
| 4      |     6 | INA+, INB+, INB-, OUTA, OUTB, REF/INA- | Pref         | 02-TPMINI5002-00    | 5002                                           | KEYSTONE                             | N/A          | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER; NOT FOR COLD TEST                                                       |            |
| 5      |     3 | J1-J3                                  | Pref         | 01-PBC02SAAN2P-21   | PBC02SAAN                                      | SULLINS ELECTRONICS CORP.            | PBC02SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS; -65 DEGC TO +125 DEGC                                                                                              |            |
| 6      |     2 | R3, R4                                 | Pref         | 80-0000R-27A        | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL | SAMSUNG ELECTRONICS/ BOURNS/YAGEO PH |              | 0 RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.10W; THICK FILM                                                                                                                        |            |
| 7      |     3 | SU1-SU3                                | Pref         | 02-JMPFSTC02SYAN-00 | STC02SYAN                                      | SULLINS ELECTRONICS CORP.            | STC02SYAN    | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL                                                       |            |
| 8      |     1 | U1                                     | Pref         | MAX9017AEKA/V+      | MAX9017AEKA/V+                                 | MAXIM                                | MAX9017AEKA+ | IC; COMP; DUAL; PRECISION; 1.8V; NANOPOWER COMPARATOR; WITH REFERENCE; SOT23-8                                                                                                |            |
| 9      |     2 | VCC, VEE                               | Pref         | 02-TPMINI5000-00    | 5000                                           | KEYSTONE                             | N/A          | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST   |            |
| 10     |     1 |                                        | Pref         | EPCB9017A           | MAX9017A                                       | MAXIM                                | PCB          | PCB: MAX9017A                                                                                                                                                                 |            |
| TOTAL  |    22 |                                        |              |                     |                                                |                                      |              |                                                                                                                                                                               |            |

DO NOT PURCHASE(DNP)

ITEM

QTY

REF DES

1

2

TOTAL

1 C1

4 R1, R2, R5, R6

5

PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)

ITEM

QTY

REF DES

1 PACKOUT

1 PACKOUT

1 PACKOUT

1 PACKOUT

1 PACKOUT

5

MAXINV

88-00711-SML

87-02162-00

85-MAXKIT-PNK

EVINSERT

85-84003-006

MFG PART #

88-00711-SML

87-02162-00

85-MAXKIT-PNK

EVINSERT

85-84003-006

MANUFACTURER

N/A

N/A

N/A

N/A

N/A

1

2

3

4

5

TOTAL

Var Status

DNP

DNP

MAXINV

N/A

N/A

MFG PART #

N/A

N/A

## Evaluates: MAX9017A, MAX9017B, MAX9018, MAX9019, and MAX9020 (Open-Drain)

MANUFACTURER

N/A

N/A

VALUE

?

?

?

?

?

VALUE

OPEN

OPEN

DESCRIPTION

COMMENTS

PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR - EVKIT

PACKAGE OUTLINE 0603 RESISTOR - EVKIT

DESCRIPTION

COMMENTS

BOX;SMALL BROWN 9 3/16X7X1 1/4 - PACKOUT

ESD BAG;BAG;STATIC SHIELD ZIP 4inX6in;W/ESD LOGO - PACKOUT

PINK FOAM;FOAM;ANTI-STATIC PE 12inX12inX5MM - PACKOUT

WEB INSTRUCTIONS FOR MAXIM DATA SHEET

LABEL(EV KIT BOX) - PACKOUT

## MAX9017A Evaluation Kit

## MAX9017A EV Kit Schematic

MAX9017A EV Kit Schematic

<!-- image -->

## Evaluates: MAX9017A, MAX9017B, MAX9018, MAX9019, and MAX9020 (Open-Drain)

│

## MAX9017A Evaluation Kit

## MAX9017A EV Kit PCB Layout Diagrams

MAX9017A EV Kit-Top Silkscreen

<!-- image -->

## Evaluates: MAX9017A, MAX9017B, MAX9018, MAX9019, and MAX9020 (Open-Drain)

MAX9017A EV Kit-Top Mask

<!-- image -->

MAX9017A EV Kit-Bottom Mask

<!-- image -->

│

## MAX9017A Evaluation Kit

## Evaluates: MAX9017A, MAX9017B, MAX9018, MAX9019, and MAX9020 (Open-Drain)

## MAX9017A EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX9017A EV Kit-Top

MAX9017A EV Kit-Bottom

<!-- image -->

MAX9017A EV Kit-Top Paste

<!-- image -->

│

## MAX9017A Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/17           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im ,ntegrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

│

Evaluates: MAX9017A, MAX9017B, MAX9018, MAX9019, and MAX9020 (Open-Drain)