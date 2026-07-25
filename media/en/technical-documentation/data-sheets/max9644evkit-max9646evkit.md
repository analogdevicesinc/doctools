<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX9644/MAX9645/MAX9646 Evaluation Kits

## Evaluate: MAX9644/MAX9645/MAX9646

## General Description

The MAX9644/MAX9645/MAX9646 evaluation kits (EV kits) are  fully  assembled  and  tested  PCBs  that  evaluate  the MAX9644/MAX9645/MAX9646 single comparators. All EV kits have a common internal reference voltage of +0.2V, operate  from  a  +1V  to  +5.5V  power  supply  (VCC),  and have a common -0.3V to +5.5V input voltage (IN) range.

The EV kits are configured to evaluate both the 4-bump UCSP K (installed)  and  an  optional  5-pin  SOT23  (to  do so, request a free MAX9644/MAX9645/MAX9646 SOT23 IC sample when ordering the EV kits).

| DESIGNATION   |   QTY | DESCRIPTION                                                                             |
|---------------|-------|-----------------------------------------------------------------------------------------|
| C1, C2        |     2 | 0.1µF Q 10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E104K TDK C1608X7R1E104K |
| JU1           |     1 | 3-pin header                                                                            |
| R1, R2        |     2 | 100k I Q 5% resistors (0603)                                                            |
| U1            |     1 | See the EV Kit-Specific Component List                                                  |

## Features

- S -0.3V to +5.5V Input Voltage Range
- S +1V to +5.5V VCC Range
- S +0.2V Internal Reference Voltage
- S Evaluates 4-Bump UCSP and Optional 5-Pin SOT23 Packages
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                               |
|---------------|-------|---------------------------------------------------------------------------|
| U2            |     0 | Not installed, single comparator (5 SOT23) Maxim MAX9644/MAX9645/ MAX9646 |
| -             |     1 | Shunts                                                                    |
| -             |     1 | PCB: MAX9644/5/6 EVALUATION KIT                                           |

## EV Kit-Specific Component List

| PART          | DESIGNATION   | DESCRIPTION                                                                             |
|---------------|---------------|-----------------------------------------------------------------------------------------|
| MAX9644EVKIT# | U1            | Open-drain noninverting single comparator (4 UCSP) Maxim MAX9644EBS+G45 (Top Mark: AGL) |
| MAX9645EVKIT# | U1            | Open-drain inverting single comparator (4 UCSP) Maxim MAX9645EBS+G45 (Top Mark: AGM)    |
| MAX9646EVKIT# | U1            | Push-pull noninverting single comparator (4 UCSP) Maxim MAX9646EBS+G45 (Top Mark: AGN)  |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX9644, MAX9645, or MAX9646 when contacting these component suppliers.

UCSP is a trademark of Maxim Integrated Products, Inc.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX9644/MAX9645/MAX9646 Evaluation Kits

## Evaluate: MAX9644/MAX9645/MAX9646

## Quick Start

## Recommended Equipment

- MAX9644, MAX9645, or MAX9646 EV kit
- Two -5V DC power supplies (VCC, IN)
- Optional third +5V  DC  power  supply  (EXT  for MAX9644/MAX9645 only)
- Digital multimeter (DMM)

## Detailed Description of Hardware

The MAX9644/MAX9645/MAX9646  EV  kits  are  fully assembled and tested PCBs that evaluate the MAX9644/ MAX9645/MAX9646  single  comparators.  The  MAX9644 is  an  open-drain  noninverting  single  comparator,  the MAX9645  is  an  open-drain  inverting  single  comparator,  and  the  MAX9646 is  a  push-pull  noninverting  single comparator. All EV kits have an internal reference voltage of +0.2V, require VCC between +1V to +5.5V to operate, and have a common -0.3 to +5.5V input voltage (IN) range.

## VCC Supply Selection

The VCC PCB pad on the EV kits is used to supply a +1V to +5.5V VCC supply to the IC.

The EV kits can evaluate both 4-bump UCSP (U1) and 5-pin SOT23 (U2) packages. The EV kit offers the option to power up U1 or U2 separately though configuration of jumper JU1. See Table 1 for power-up options.

## EXT PCB Pad

The  EXT  PCB  pad  on  the  EV  kits  can  be  used  as  an external source to pull the outputs high through resistors R1 or R2 when open-drain versions of the parts are used.

## Table 1. Jumper JU1 Functions

| SHUNT POSITION   | VCC/REF PAD                            |
|------------------|----------------------------------------|
| 1-2*             | Powers U1 (UCSP) sub circuit           |
| 2-3              | Powers optional U2 (SOT23) sub circuit |

## Procedure

The  EV  kits  are  fully  assembled  and  tested.  Follow  the steps  below  to  verify  board  operation. Caution:  Do  not turn  on  the  power  supply  until  all  connections  are completed.

- 1)  Verify that a shunt is installed on pins 1-2 of jumper JU1.
- 2)  Connect the positive terminal of a DC power supply to the VCC PCB pad and the ground terminal to the GND PCB pad.
- 3)  Connect the positive terminal of a DC power supply to the IN PCB pad and the ground terminal to the GND PCB pad.
- 4)  Connect the positive terminal of a DC power supply to the EXT PCB pad and the ground terminal to the GND PCB pad. (MAX9644/MAX9645 only)
- 5)  Turn  on  the  VCC  power  supply  and  set  it  to  the desired level.
- 6)  Turn on the IN power supply and set it to the desired level.
- 7)  Turn on the EXT power supply and set it to the desired level (MAX9644/MAX9645 only).
- 8)  Monitor  the  output  using  a  DMM  at  the  OUT1  PCB pad, and study its response to varying voltage at IN.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9644/MAX9645/MAX9646 Evaluation Kits

## Evaluate: MAX9644/MAX9645/MAX9646

<!-- image -->

Figure 1. MAX9644 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9644/MAX9645/MAX9646 Evaluation Kits

## Evaluate: MAX9644/MAX9645/MAX9646

<!-- image -->

Figure 2. MAX9645 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9644/MAX9645/MAX9646 Evaluation Kits

## Evaluate: MAX9644/MAX9645/MAX9646

<!-- image -->

Figure 3. MAX9646 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9644/MAX9645/MAX9646 Evaluation Kits

## Evaluate: MAX9644/MAX9645/MAX9646

<!-- image -->

Figure 4. MAX9644/MAX9645/MAX9646 EV Kit PCB Component Placement

Figure 5. MAX9644/MAX9645/MAX9646 EV Kit PCB LayoutComponent Side

<!-- image -->

Figure 6. MAX9644/MAX9645/MAX9646 EV Kit PCB LayoutSolder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX9644EVKIT # | EV Kit |
| MAX9645EVKIT # | EV Kit |
| MAX9646EVKIT # | EV Kit |

# Denotes RoHS compliant.

## MAX9644/MAX9645/MAX9646 Evaluation Kits

## Evaluate: MAX9644/MAX9645/MAX9646

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/11            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8