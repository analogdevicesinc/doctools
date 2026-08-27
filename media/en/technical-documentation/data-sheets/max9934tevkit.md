<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX9934T Evaluation Kit

## General Description

## Features

The  MAX9934T  evaluation  kit  (EV  kit)  demonstrates the  MAX9934T  low-voltage,  precision,  current-sense amplifier  for  power  management  in  portable  consumer electronics.  The  device's  precision  inputs  and  the  EV kit's on-board, precision, low-value sense resistor allows the  measurement of bidirectional (e.g., battery charge/ discharge)  currents  up  to  1A.  Input  common-mode range  is  -0.1V  to  +5.5V  independent  of  supply.  The device  demonstrates  a  25 F A/mV  fixed  gain  and  the EV  kit  is  configured  for  a  250V/V  gain.  The  device's chip-select  (CS)  logic  input  allows  users  to  multiplex several  MAX9934T  parts.  The  EV  kit  operates  from  a +2.5V to +3.6V, 100mA DC power supply.

The EV kit can also be used to evaluate the MAX9934F current-sense amplifier. See the Evaluating the MAX9934F section for more information.

- S EV Kit Configured for Bidirectional Current Sensing Up to 1A
- S EV Kit Configured for 250V/V Gain
- S Chip-Select (CS) Logic Input
- S -0.1V to +5.5V Input Common-Mode Range
- S +2.5V to +3.6V DC Power-Supply Operation
- S Proven PCB Layout
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX9934TEVKIT+ | EV Kit |

## Selector Guide

| PART     | GAIN      | OUTPUT   | LOGIC PIN         |
|----------|-----------|----------|-------------------|
| MAX9934T | 25 F A/mV | Current  | Chip-select input |
| MAX9934F | 5 F A/mV  | Current  | Chip-select input |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                            |
|---------------|-------|------------------------------------------------------------------------|
| C1            |     1 | 4.7 F F Q 10%, 16V X7R ceramic capacitor (0805) Murata GRM219R71C475K  |
| C2, C4, C5    |     3 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K |
| C3            |     1 | 0.01 F F Q 10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C103K |
| C6            |     0 | Not installed, ceramic capacitor (0603)                                |
| GND           |     2 | Black miniature PCB test points                                        |
| GND, OUT_REF  |     2 | Black multipurpose PCB test points                                     |
| JU1, JU2, JU3 |     3 | 2-pin headers                                                          |
| OUT           |     1 | Red multipurpose PCB test point                                        |

UCSP is a trademark and µMAX is a registered trademark of Maxim Integrated Products, Inc.

| DESIGNATION   |   QTY | DESCRIPTION                                                               |
|---------------|-------|---------------------------------------------------------------------------|
| R1            |     1 | 10m I Q 0.1%, Q 15ppm/°C 4-terminal resistor (2512) Vishay Y14870R01000B9 |
| R2            |     1 | 10k I Q 0.1%, Q 25ppm/°C resistor (0603) Panasonic ERA-3YEB103V           |
| R3, R4        |     2 | 10k I Q 5% resistors (0603)                                               |
| RS+, RS-      |     2 | White miniature PCB test points                                           |
| U1            |     1 | Current-sense amplifier (6 UCSP K ) Maxim MAX9934TART+ (Top Mark: AAF)    |
| U2            |     1 | Current-sense amplifier (8 F MAX M ) Maxim MAX9934TAUA+                   |
| -             |     3 | Shunts (JU1, JU2, JU3)                                                    |
| -             |     1 | PCB: MAX9934T EVALUATION KIT+                                             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

## MAX9934T Evaluation Kit

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note:

Indicate that you are using the MAX9934\_ when contacting these component suppliers.

## Quick Start

## Required Equipment

- 9) Connect the DVM positive terminal to the OUT PCB pad and the negative terminal to the OUT\_REF PCB pad.
- 10)  Enable the power supplies and the electronic load. Any power sequence can be used without damage to U1 or U2.
- 11)  Verify that the DVM measures +2.5V.

## Detailed Description of Hardware

The MAX9934T EV kit demonstrates the MAX9934T lowvoltage, precision, current-sense amplifier in a tiny 1mm x 1.5mm, 3 x 2-bump UCSP package (U1) and an 8-pin F MAX  package  (U2).  The  EV  kit  can  also  be  used  to evaluate the MAX9934F current-sense amplifier. Contact the factory to obtain free samples. See the Evaluating the MAX9934F section for more information.

The  device's  precision  inputs  measure  very  small sense  voltages  up  to Q 10mV  full  scale.  The  EV  kit features  a  precision,  on-board,  four-terminal  surfacemount  sense  resistor,  R1  (10m I Q 0.1%, Q 15ppm/ N C). This enables measurement of bidirectional currents up to 1A connected across the EV kit's I\_RS+ and I\_RS- PCB pads. The input common-mode range is -0.1V to +5.5V independent of VCC. The EV kit operates from a +2.5V to +3.6V, 100mA DC power supply connected across the VCC and GND PCB pads.

The  device's  25 F A/mV  fixed-gain  output  current  creates  an  output  voltage  across  the  output-load  resistor, R2 (10k I Q 0.1%), achieving a 250V/V gain. R2 can be replaced with an appropriate surface-mount 0603 resistor to achieve different output gains. The EV kit's output voltage can be measured across the OUT and OUT\_REF PCB pads.  Connect  a  1.65V  reference  voltage  across the OUT\_REF and GND PCB pads. The device's CS pin allows users to multiplex several MAX9934T parts.

Surface-mount  0603  capacitors  C5  (installed)  and  C6 (not installed) provide optional input filters.

- U MAX9934T EV kit
- U +2.5V to +3.6V, 100mA DC power supply for VCC
- U +5.5V, 2A DC power supply
- U 2A electronic load
- U One digital voltmeter (DVM) with 10M I input impedance

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify  that  jumpers  JU1,  JU2,  and  JU3  shunts  are in-stalled as follows:
2. JU1:  Installed  (OUT\_REF  PCB  pad  connected  to GND PCB pad)
3. JU2: Not installed (U1 output enabled)
4. JU3: Installed (U2 output disabled; high impedance)
- 2) Set  the  +2.5V  to  +3.6V,  100mA  DC  power-supply voltage to +3.3V and disable the output.
- 3) Set the +5.5V, 2A DC power-supply voltage to +5V, the current limit above 1A, and disable the output.
- 4) Set the electronic load to 1A and disable the output.
- 5) Connect  the  low-power  DC  power-supply  positive terminal to the VCC PCB pad and the negative terminal to the nearby GND PCB pad.
- 6) Connect the 2A DC power-supply positive terminal to the I\_RS+ PCB pad and the negative terminal to the GND PCB pad.
- 7) Connect the 2A electronic load positive terminal to the I\_RS- PCB pad and the negative terminal to the GND PCB pad.
- 8) Set the DVM to measure voltage.

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9934T Evaluation Kit

## Chip Select (CS)

Jumpers JU2 and JU3 enable or disable the respective amplifier's  output  by  controlling  the  device's  CS  pins on U1 and U2, respectively. An external controller can drive  the  U1  and  U2  CS  input  pins  using  the  EV  kit's CS1(SIGN1)  and  CS2(SIGN2)  PCB  pads,  respectively. The CS pins are compatible with +1.8V through +3.3V logic.  Connect  the  external  controller's  logic  ground return to a GND PCB pad and remove pullup resistors R3 and R4, if not needed. See Tables 1 and 2 for jumpers JU2 and JU3 configuration.

Table 1. U1 CS Pin Logic Input (JU2)

| SHUNT POSITION   | U1 CS PIN CONNECTION        | EV KIT FUNCTION                     |
|------------------|-----------------------------|-------------------------------------|
| Not installed    | Pulled up to VCC through R3 | U1 output enabled                   |
| Installed        | GND                         | U1 output disabled (high impedance) |

<!-- image -->

## Evaluating the MAX9934F

To  evaluate  the  MAX9934F,  replace  U1  (3  x  2-bump UCSP) or U2 (8-pin F MAX) with the appropriate version. The  device  can  be  multiplexed  with  other  MAX9934F parts.  See  the Chip  Select  (CS) section  for  additional information.

## Output Measurements

The  device  provides  a  current  output  that  can  be measured  across  the  OUT  and  OUT\_REF  PCB  pads. Connect a 1.65V reference voltage across the OUT\_REF and GND PCB pads.

Table 2. U2 CS Pin Logic Input (JU3)

| SHUNT POSITION   | U2 CS PIN CONNECTION        | EV KIT FUNCTION                     |
|------------------|-----------------------------|-------------------------------------|
| Not installed    | Pulled up to VCC through R4 | U2 output enabled                   |
| Installed        | GND                         | U2 output disabled (high impedance) |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX9934T Evaluation Kit

Figure 1. MAX9934T EV Kit Schematic

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

## MAX9934T Evaluation Kit

<!-- image -->

Figure 2. MAX9934T EV Kit Component Placement GuideComponent Side

Figure 3. MAX9934T EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX9934T EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX9934T Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 7/10            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

6

<!-- image -->