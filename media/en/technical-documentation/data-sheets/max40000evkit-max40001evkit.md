<!-- lastmod 2022-08-05 -->
## MAX40000/MAX40001 Evaluation Kits

## General Description

The MAX40000 and MAX40001 evaluation kits (EV kits) are  fully  assembled  and  tested  PC  boards  that  evaluate the MAX40000 and MAX40001 single comparators with internal  voltage  references,  respectively.  By  default,  the MAX40001  EV  kit  has  an  open-drain  output,  while  the MAX40000  EV  kit  has  a  push-pull  output.  These  EV kits come with a MAX40000ANT12+/MAX40001ANT12+ installed that operate off a V CC  supply between 1.7V and 5.5V, an internal reference voltage of 1.252V, and have a wide -0.2V to +5.7V input voltage (V IN ) range. These EV kits demonstrate  the  MAX40000ANT12+/MAX40001ANT12+ in  an  ultra-small,  1.1mm  x  0.76mm,  6-bump  wafer-level package (WLP) with 0.35mm bump spacing.

These  EV  kits  can  be  used  to  evaluate  the  entire  family of  MAX40000/MAX40001  with  6-bump  WLP  options. Remove  pullup  resistor  R3  on  the  MAX40001  EV  kit when  evaluating  the  MAX40000  in  place  of  the  default MAX40001 IC included in the MAX40001 EV kit.

## Features

- -0.2V to V DD  + 0.2 Input Voltage Range
- 1.7V to 5.5V V DD  Range with Internal Reference
- 1.252V, 1.66V, 1.94V, and 2.22V Internal Voltage Reference Options Available (V DD  min Depends on the Voltage Reference Option)

Note: Refer to the Electrical Characteristics table of the MAX40000 IC data sheet for more information on minimum V DD .

- Configured to Add External Hysteresis
- Evaluates 6-Bump WLP
- Proven PCB Layout
- Fully Assembled and Tested

## Quick Start

## Required Equipment

Before beginning, the following equipment is needed:

- Three +5V DC power supplies (V DD , INP, and V PULL on MAX40001EVKIT)
- Two digital multimeters (DMMs)

Ordering Information appears at end of data sheet.

## Procedure

The  MAX40000/MAX40001  EV  kits  are  fully  assembled and  tested.  Follow  steps  below  to  verify  board  operation. Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed. By default, the MAX40000 EV kit comes with the MAX40000ANT12+.

- 1) Connect the positive terminal of a DC power supply to the VDD test point and the ground terminal to the GND test point.
- 2) Connect the positive terminal of a DC power supply  to the VPULL test point and the ground terminal to the GND  test  point  (not  applicable  for  the  MAX40000 EV  kit).  This  is  not  necessary  while  evaluating  the MAX40000 on the MAX40001 EV kit. R3 needs to be removed while using MAX40001 EV kit to evaluate the MAX40000 push-pull version.
- 3) Connect the positive terminal of a DC power supply to the INP test point and the ground terminal to the GND test point.
- 4) Use a wire to short INM test point and V REF  test point to connect voltage reference output (1.252V, default) to inverting input.
- 5) Turn on the V CC  power supply and set it to any voltage between 1.7V to 5.5V.
- 6) Monitor  the  output  voltage  at  the  VREF  test  point using DMM. This should be 1.252V (default) when either the MAX40000ANT12+/MAX40001ANT12+ is used.
- 7) Turn on the V PULL  power supply and set it to any voltage between 1.7V to 5.5V (MAX40001 only). Do not need VPULL supply when MAX40000 (push-pull output) is
8. used on the MAX40001 EV kit.
- 8) Turn on the INP power supply and set it to the desired level.
- 9) Monitor the output using a DMM at the VOUT test point and study its response to varying voltage at INP . Ideally, voltage at the VOUT test point of the MAX40001 EV kit should be at logic-high (V PULL ) when voltage applied on INP is greater than 1.252V and should be at logic-low (0V) when voltage applied on INP is less than 1.252V.
- 10)  While,  on  the  MAX40000  EV  kit,  the  voltage  on  the VOUT test point will be at V CC  when the voltage on INP is greater than 1.252V, it should be at GND when the voltage applied on INP is less than 1.252.

<!-- image -->

Evaluate: MAX40000

MAX40001

## MAX40000/MAX40001 Evaluation Kits

## Detailed Description of Hardware

The  MAX40000/MAX40001  EV  kits  are  fully  assembled and  tested  PC  boards  that  evaluate  the  6-bump  WLP MAX40000ANT12+/MAX40001ANT12+ push-pull/opendrain output comparators, respectively. These EV kits require a 1.7V to 5.5V supply voltage for normal operation and can be used to evaluate all other MAX40000/MAX40001 parts that come with a WLP.

These EV kits allow users to add external hysteresis in addition to the 4mV internal hysteresis through the addition of appropriate resistors on the R2 and R1 pads provided on the EV board. The amount of hysteresis added is given by the equation below, based on R1, R2 values:

<!-- formula-not-decoded -->

These EV kits also allow users to apply an internal voltage reference to either the IP or IN input pins of the comparator by installing resistor components on R4, R5, and R6 pads. R4 and R5 resistor combination can be used if a voltagedivided  version  voltage  of  internal  voltage  reference  is needed in the application.

Table 1. Default Jumper Settings

| JUMPER                  | SHUNT POSITION   |
|-------------------------|------------------|
| J1 (MAX40001EVKIT Only) | Installed        |
| J2                      | Not Installed    |

Evaluate: MAX40000

MAX40001

The VPULL test point on the MAX40001 EV kit is utilized to  apply  a  pullup  supply  voltage  between  1.7V  to  5.5V for  the  open-drain  output  devices  for  proper  operation. Remove  R3  and  eliminate  V PULL   if  evaluating  the comparators with the push-pull output (MAX40000) on the MAX40001 EV kit.

The  MAX40000  EV  kit,  by  default,  comes  with  the MAX40000ANT12+. If the user would like to evaluate the MAX40001  on  the  MAX40000  EV  kit,  the  user  should provide a pullup resistor to supply voltage on the VOUT test point.

The  MAX40001  EV  kit,  by  default,  comes  with  the MAX40001ANT12+. If the user would like to evaluate the MAX40000  on  the  MAX40001  EV  kit,  the  user  should remove jumper J1 to the pullup resistor on the output pin.

│

## MAX40000/MAX40001 EV Kit Schematics

MAX40000 EV Kit Schematic

<!-- image -->

MAX40001 EV Kit Schematic

<!-- image -->

Evaluate: MAX40000

MAX40001

│

## MAX40000/MAX40001 Evaluation Kits

## MAX40000 EV Kit PCB Layout Diagrams

MAX40000 EV Kit-Top Silkscreen

<!-- image -->

MAX40000 EV Kit-Bottom

<!-- image -->

Evaluate: MAX40000

MAX40001

MAX40000 EV Kit-Top

<!-- image -->

│

## MAX40000/MAX40001 Evaluation Kits

## MAX40000 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX40000 EV Kit-Top Mask

MAX40000 EV Kit-Bottom Mask

<!-- image -->

MAX40000 EV Kit-Top Paste

<!-- image -->

Evaluate: MAX40000

MAX40001

│

## MAX40000/MAX40001 Evaluation Kits

## MAX40001 EV Kit PCB Layout Diagrams

MAX40001 EV Kit-Top Silkscreen

<!-- image -->

MAX40001 EV Kit-Bottom

<!-- image -->

Evaluate: MAX40000

MAX40001

MAX40001 EV Kit-Top

<!-- image -->

## Ordering Information

#Denotes RoHS compliant.

| PART           | TYPE   |
|----------------|--------|
| MAX40000EVKIT# | EV Kit |
| MAX40001EVKIT# | EV Kit |

│

## MAX40000/MAX40001 Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                    | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------|-----------------|
|                 0 | 8/16            | Initial release                                                | -               |
|                 1 | 10/16           | Added MAX40000 part number, schematic, and PCB layout diagrams | 1-7             |
|                 2 | 6/17            | Removed future product asterisk from MAX40001EVKIT#            | 6               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

<!-- image -->

│

Evaluate: MAX40000

MAX40001