<!-- lastmod 2022-08-04 -->
## MAX40203 WLP Evaluation Kit

## General Description

The  MAX40203  WLP  evaluation  kit  provides  a  proven design to evaluate the MAX40203 'ideal-diode'. This EV kit  demonstrates  the  MAX40203  in  a  tiny  4-bump  WLP (MAX40203ANS+).

The  MAX40203  WLP  EV  kit  PCB  comes  with  two MAX40203ANS+  devices  installed.  The  MAX40203 device is a current-switch, which drops so little voltage as to approximate an 'ideal diode'.

## MAX40203 WLP EV Kit Photo

<!-- image -->

<!-- image -->

Evaluates: MAX40203ANS+

## Features

- Drops Only 43mV at 500mA
- Less than 10nA Leakage When Reverse-Biased From V DD
- Supply Voltage Range: Between 1.2V and 5.5V
- Low Supply Quiescent Current: 300nA (typ), 500nA (max)
- Thermally Self-Protecting
- -40°C to +125°C Temperature Range
- Evaluates MAX40203ANS+
- Accommodates Easy-to-Use Components
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## MAX40203 WLP Evaluation Kit

## Quick Start

## Required Equipment

- MAX40203 WLP EV kit
- +6V DC power supply
- Electronic load capable of sinking 1A ( e.g., HP6060B)
- Precision voltmeter

## Procedure

The EV kit is fully assembled and tested. Follow the below instructions  to  verify  board  operation. Caution:  Do  not turn on the power supply or the electronic load until all the connections are complete.

1.  Set the DC power supply to 3.6V output. Connect the positive  terminal  of  the  3.6V  supply  to  the  V DD   pad. Connect the negative terminal of the 3.6V supply to the GND pad.
2.  Connect the electronic load's positive terminal to the OUT pad and the negative terminal to the GND pad and set to 500mA sink.

## Table 1. Jumper Functions (J1 - J3)

| JUMPER LABEL   | SHUNT POSITION   | DESCRIPTION                                                                         |
|----------------|------------------|-------------------------------------------------------------------------------------|
| J1             | 1-2*             | Enables U1                                                                          |
| J1             | 2-3              | Disables U1                                                                         |
| J2             | 1-2*             | Enables U2                                                                          |
| J2             | 2-3              | Disables U2                                                                         |
| J3**           | Not Installed*   | Devices U1 and U2 Enable operates independently                                     |
| J3**           | Installed        | Connects Enable (EN) input of U1 and U2 together. User-supplied enable input signal |
| J4             | Not Installed*   | Devices operate independently                                                       |
| J4             | Installed        | Connect OUT(U1) and OUT(U2) together for ORing application                          |

## Evaluates: MAX40203ANS+

3.  Connect the voltmeter across the V DD  and OUT pads.
4.  Verify all the shunts are in default positions, as shown in Table 1.
5.  Do not install J3.
6.  Turn on the power supply.
7.  Turn on the electronic load and verify that the current flowing is equal to the set value of 500mA.
8.  Verify that the forward voltage or (V DD  - V OUT ) voltmeter reading is approximately 43mV.
9.  Turn off the electronic load.
10.  Set the electronic load to sink 100mA.
11.  Turn on the electronic load.
12.  Verify that the forward voltage or (V DD  - V OUT ) voltmeter reading is approximately 16mV.

│

## Detailed Description of Hardware

The  MAX40203  WLP  kit  provides  a  proven  design  to evaluate the MAX40203 tiny 4-bump WLP 'ideal-diode.' The device blocks reverse voltages and passes current when forward-biased, just as a normal diode would. The device, when forward-biased and enabled, conducts with as little as 43mV of voltage drop while carrying currents as  high  as  500mA.  At  higher  currents  (up  to  1A),  the voltage  drop  increases  linearly.  The  MAX40203  WLP protects itself, and  any down-stream  circuitry, from overtemperature conditions.

When disabled (EN = low), the MAX40203 WLP can block voltages  up  to  6V  in  either  direction,  making  it  suitable for most low-voltage portable electronic devices. The low (300nA,  typ.)  supply  current  is  independent  of  the  load current.  The  MAX40203  WLP  operates  from  supplies within the range of 1.2V and 5.5V.

## MAX40203 WLP EV Kit Bill of Materials

| ITEM   | REF_DES                                         | DNI/DNP   |   QTY | MFG PART #                   | MANUFACTURER              | VALUE        | DESCRIPTION                                                                                                                                               | COMMENTS   |
|--------|-------------------------------------------------|-----------|-------|------------------------------|---------------------------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 1      | C1, C2, C6                                      | -         |     3 | C1206C105K3RAC;ECJ-3YB1E105K | KEMET;PANASONIC           | 1UF          | CAPACITOR; SMT (1206); CERAMIC CHIP; 1UF; 25V;TOL=10%; MODEL=X7R; TG=-55 DEGC TO +125 DEGC; TC=+/-                                                        |            |
| 2      | C3, C4                                          | -         |     2 | C1608X7R1E104K080AA          | TDK                       | 0.1UF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                |            |
| 3      | C5                                              | -         |     1 | C2012X7T2E104K125AA          | TDK                       | 0.1UF        | CAPACITOR; SMT (0805); CERAMIC CHIP; 0.1UF; 250V; TOL=10%; MODEL=C SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7T                                               |            |
| 4      | EN1, EN2, OUT, OUT1, OUT2, TP5, TP6, VDD1, VDD2 | -         |     9 | 5005                         | KEYSTONE                  | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                      |            |
| 5      | GND, TP1-TP4, TP9, TP10                         | -         |     7 | 5006                         | KEYSTONE                  | N/A          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                    |            |
| 6      | J1, J2                                          | -         |     2 | PBC03SAAN                    | SULLINS                   | PBC03SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                                                                          |            |
| 7      | J3, J4                                          | -         |     2 | PBC02SAAN                    | SULLINS ELECTRONICS CORP. | PBC02SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                                                 |            |
| 8      | U1, U2                                          | -         |     2 | MAX40203ANS+                 | MAXIM                     | MAX40203ANS+ | EVKIT PART - IC; ULTRA-TINY NANOPOWER; 1A IDEAL DIODE WITH ULTRA-LOW VOLTAGE DROP; PACKAGE OUTLINE DRAWING NUMBER: 21-100273; PACKAGE CODE: N40F0+1; WLP4 |            |
| 9      | PCB                                             | -         |     1 | MAX40203W                    | MAXIM                     | PCB          | PCB:MAX40203W                                                                                                                                             | -          |
| TOTAL  |                                                 |           |    29 |                              |                           |              |                                                                                                                                                           |            |

## Theory of Operation

The two 'ideal-diode' devices may be used independently or together. The PCB circuit mimics a typical wall adaptor/ battery-charging circuit having different V DD1  and V DD2 . They  are  connected  to  the  common  output,  where  the load is connected.

When used independently or together, enable inputs EN1 and  EN2  turn  the  device  on  or  off.  The  device  that  is turned on conducts current to the load. The device that is turned off does not conduct current to the load from its VDD input.

## Ordering Information

| PART              | TYPE   |
|-------------------|--------|
| MAX40203-W-EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX40203 WLP EV Kit Schematic

<!-- image -->

## MAX40203 WLP EV Kit PCB Layout Diagrams

<!-- image -->

MAX40203 WLP EV Kit-Silk\_Top

<!-- image -->

MAX40203 WLP EV Kit-Bottom

MAX40203 WLP EV Kit-Top

<!-- image -->

MAX40203 WLP EV Kit-Silk\_Bot

<!-- image -->

│

## MAX40203 WLP Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses DUH LPSOLHG  0D[LP ,QWHJUDWHG UHVHUYHV WKH ULJKW WR FKDQJH WKH FLUFXLWU\ DQG VS

│

Evaluates: MAX40203ANS+