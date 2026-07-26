<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX9643 evaluation kit (EV kit) is an assembled and tested  PCB  used  to  evaluate  the  MAX9643  60V,  highspeed,  precision,  unidirectional  current-sense  amplifier. The EV kit  features  a  wide  -1.5V  to  60V  input  commonmode range.

| DESIGNATION    |   QTY | DESCRIPTION                                                            |
|----------------|-------|------------------------------------------------------------------------|
| C1, C2, C5, C7 |     4 | 1 F F Q 10%, 50V X7R ceramic capacitors (0805) Murata GRM21BR71H105K   |
| C3, C4         |     2 | 0.1 F F Q 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H104K |
| C6             |     0 | Not installed, ceramic capacitor (0603)                                |
| R1             |     1 | 0.1 I Q 1%, 0.5W sense resistor (2010) IRC LRC-LRF2010LF-01-R100-F     |

## MAX9643 Evaluation Kit Evaluates: MAX9643

## Features

- S -1.5V to 60V Input Common-Mode Range
- S Ability to Test with External Sense Voltage
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                        |
|---------------|-------|------------------------------------------------------------------------------------|
| R3, R4, R5    |     0 | Not installed, resistors-short (PC trace) (0603)                                   |
| RS+, RS-      |     2 | Test points                                                                        |
| U1            |     1 | 60V, high-speed, precision, current-sense amplifier (8 TDFN-EP) Maxim MAX9643TATA+ |
| -             |     1 | PCB: MAX9643 EVALUATION KIT                                                        |

## Component Suppliers

| SUPPLIER        | PHONE        | WEBSITE                |
|-----------------|--------------|------------------------|
| IRC, Inc.       | 361-992-7900 | www.irctt.com          |
| Murata Americas | 770-436-1300 | www.murataamericas.com |

Note:

Indicate that you are using the MAX9643 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- MAX9643 EV kit
- 12V, 2A power supply (VBATT)
- 5V power supply (VCC)
- Electronic load capable of sinking 1A
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on power supplies until all connections are completed.

- 1)  Set  the  input  power  supply  to  12V  and  connect  the positive terminal to the VBATT PCB pad. Connect the ground of the power supply to the GND PCB pad.
- 2)  Set  the  VCC  power  supply  to  5V  and  connect  the positive  terminal  to  the  VCC  PCB  pad.  Connect  the ground of the VCC supply to the GND PCB pad.
- 3)  Set the electronic load to sink 1A.
- 4)  Connect the electronic load's positive terminal to the LOAD  PCB  pad.  Connect  the  load's  ground  to  the GND PCB pad.
- 5)  Connect  the  DVM  across  the  OUT  and  GND  PCB pads.
- 6)  Turn on the 5V power supply.
- 7)  Turn on the 12V power supply.
- 8)  Adjust the electronic load current (I LOAD ) between 0 and 1A and verify that V OUT  is proportional to V SENSE , according to the following equation:

<!-- formula-not-decoded -->

where V SENSE  = I LOAD  x R1 and A V = 2.5V/V.

## Detailed Description of Hardware

The MAX9643 EV kit evaluates the MAX9643 unidirectional high-side, current-sense amplifier, ideal for a wide variety of high-performance industrial power-supply applications. The  current-sense  amplifier  provides  an  analog  voltage output proportional to the load current through the external sense resistor (R1). Various test points and test pads are provided for ease of evaluation.

## MAX9643 Evaluation Kit Evaluates: MAX9643

## Monitoring the Load Current

The EV kit  monitors  the  load  current  through  a  currentsense resistor by converting the sense voltage to a voltage output (V OUT ). High-side current monitoring does not interfere with the ground path of the load being measured, making it  useful  for  a  variety  of  high-reliability  systems. The output voltage is given by the following equations:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

where I LOAD   is  the  current  load  applied  to  the  device, RSENSE  is the current-sense resistor R1, and A V  is the device gain.

## Applications

The device has an internal charge pump to generate a negative voltage rail to bias both the input stage and output stage of the current-sense amplifier. The EV kit uses a  1 F F  flying  capacitor  (C1),  which  is  placed  as  close as  possible  to  the  CP1  and  CP2  pins  of  the  device  to minimize loop area.

The use of a negative voltage rail for its input stage allows the  input  common-mode  voltage  range  to  extend  1.5V below ground. The internal negative rail also allows the output voltage range to extend down to true ground.

## Evaluating the 10V/V Gain Version

To  evaluate  the  EV  kit  with  the  10V/V  gain  version, replace U1 with the MAX9643UATA+ device.

## Additional Features

To  evaluate  the  EV  kit  with  an  external  sense  voltage, cut  the  trace  between  the  resistor  pads  (R3  and  R4), and  connect  the  external  sense  voltage  directly  to  the RS+ and RS- test points. Take care to minimize the loop caused when wiring the RS+ and RS- test points to the external sense voltage to reduce noise pickup.

Resistors  R3  and  R4,  when  utilized,  allow  an  input differential  filter  or  an  input  common-mode  filter  to  be designed to study its effects on noise rejection in power electronic circuits, for example. Pads for an output filter (R5/C6) are also available on the PCB.

## MAX9643 Evaluation Kit Evaluates: MAX9643

Figure 1. MAX9643 EV Kit Schematic

<!-- image -->

Figure 2. MAX9643 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX9643 Evaluation Kit Evaluates: MAX9643

Figure 3. MAX9643 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX9643 EV Kit PCB Layout-Solder Side

<!-- image -->

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9643EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX9643 Evaluation Kit Evaluates: MAX9643

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------------------|-----------------|
|                 0 | 5/11            | Initial release                                                            | -               |
|                 1 | 5/15            | Deleted automotive reference from Detailed Description of Hardware section | 2               |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.